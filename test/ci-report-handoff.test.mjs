import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { copyFileSync, existsSync, mkdirSync, mkdtempSync, readFileSync, realpathSync, rmSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { test } from "node:test";
import { pathToFileURL } from "node:url";
import { beginCiStep, ciReportPaths, collectCiReports, executeCiStep, finishCiStep, readCiRun, startCiRun } from "../scripts/ci-report-handoff.mjs";
import { runCommandStep, runStaticStep } from "../scripts/static-step.mjs";
import { pluginInspectorRef } from "../scripts/plugin-inspector-source.mjs";
import * as staticSuite from "../scripts/run-static-suite.mjs";

const { buildStaticSuiteSteps, runStaticSuite } = staticSuite;

function fixture(t) {
  const parent = realpathSync(mkdtempSync(path.join(os.tmpdir(), "crabpot-report-handoff-")));
  const root = path.join(parent, "crabpot");
  mkdirSync(path.join(root, "reports"), { recursive: true });
  t.after(() => rmSync(parent, { recursive: true, force: true }));
  const write = (key, value) => writeFileSync(path.join(root, ciReportPaths[key]), JSON.stringify(value));
  return { parent, root, write };
}

test("static report publication retains every check and writes the already-computed report", () => {
  const options = { openclawArgs: ["--openclaw", "./openclaw"], pluginInspectorSmoke: true, profileArgs: ["--runs", "3"] };
  const original = buildStaticSuiteSteps(options);
  const published = buildStaticSuiteSteps({ ...options, writeReports: true });
  assert.equal(published.length, original.length);
  assert.deepEqual(published.map(([command, args, env]) => [command, args.filter((arg) => !["--write", "--run-report"].includes(arg)), env]),
    original.map(([command, args, env]) => [command, args, env]));
  for (const script of ["generate-report", "capture-contracts", "synthetic-probes", "cold-import-readiness", "workspace-plan", "platform-probes", "import-loop-profile", "profile-contract-runtime", "check-ci-policy", "check-generated-surface-fixture"]) {
    const args = published.find(([, commandArgs]) => commandArgs[0] === `scripts/${script}.mjs`)[1];
    assert.ok(args.indexOf("--write") > args.indexOf("--check"), `${script} must validate and write once`);
  }
  assert.ok(published.find(([, args]) => args[0] === "scripts/check-ci-policy.mjs")[1].includes("--run-report"));
  const behavior = buildStaticSuiteSteps({ writeReports: true }).find(([, args]) => args[0] === "scripts/behavior-eval.mjs");
  assert.deepEqual(behavior[1], ["scripts/behavior-eval.mjs", "--check"], "freshness validation does not produce a new report");
});

test("static handoff runs a failed producer once, preserves its exit and skips later work", (t) => {
  const { root, write } = fixture(t);
  write("compatibility", { summary: { breakageCount: 0 }, stale: true });
  write("capture", { summary: {}, stale: true });
  write("refDiff", { summary: {}, unrelated: true });
  const steps = [["node", ["scripts/generate-report.mjs", "--check", "--write"]], ["node", ["scripts/capture-contracts.mjs", "--check", "--write"]]];
  const producer = path.join(root, "producer.mjs");
  writeFileSync(producer, `import { writeFileSync } from 'node:fs';
    writeFileSync('reports/crabpot-report.json', JSON.stringify({summary:{breakageCount:1}}));
    process.exit(23);`);
  let calls = 0;
  assert.equal(runStaticSuite(steps, { root, writeReports: true, execute: () => {
    calls++;
    assert.equal(existsSync(path.join(root, ciReportPaths.compatibility)), false);
    const result = spawnSync(process.execPath, [producer], { cwd: root, encoding: "utf8", timeout: 5000 });
    assert.ifError(result.error);
    return result.status;
  } }), 23);
  assert.equal(calls, 1);
  const collected = collectCiReports(readCiRun(root), { root });
  assert.equal(collected.reports.compatibility.summary.breakageCount, 1);
  assert.deepEqual(collected.steps.map((step) => step.state), ["failed", "pending"]);
  assert.equal(existsSync(path.join(root, ciReportPaths.capture)), false);
  assert.equal(JSON.parse(readFileSync(path.join(root, ciReportPaths.refDiff))).unrelated, true);
  assert.equal(collected.paths.refDiff, undefined, "unselected tracked reports are not current artifacts");
});

test("interruption and stale attempts cannot become passing report coverage", (t) => {
  const { root, write } = fixture(t);
  const run = startCiRun([{ id: "capture", report: "capture" }], root);
  beginCiStep(run, run.steps[0], root);
  write("capture", { summary: {} });
  const interrupted = collectCiReports(readCiRun(root), { root });
  assert.deepEqual(interrupted.reports, {});
  assert.match(interrupted.findings.join("\n"), /interrupted/);
  const file = path.join(root, "reports/crabpot-ci-run.json");
  writeFileSync(file, JSON.stringify({ ...run, identity: ["old", "1", "old-job"] }));
  assert.throws(() => readCiRun(root), /this job and attempt/);
});

test("missing, malformed and changed outputs fail coverage without linking stale bytes", (t) => {
  const { root, write } = fixture(t);
  for (const failure of ["missing", "malformed", "changed", "shape"]) {
    const run = startCiRun([{ id: "capture", report: "capture" }], root);
    beginCiStep(run, run.steps[0], root);
    if (failure !== "missing") write("capture", failure === "shape" ? [] : { summary: {} });
    if (failure === "malformed") writeFileSync(path.join(root, ciReportPaths.capture), "{");
    finishCiStep(run, run.steps[0], "passed", root);
    if (failure === "changed") write("capture", { summary: {}, changed: true });
    const collected = collectCiReports(readCiRun(root), { root });
    assert.deepEqual(collected.paths, {}, failure);
    assert.deepEqual(collected.reports, {}, failure);
    assert.equal(collected.findings.length, 1, failure);
  }
});

test("lifecycle output replaces fixture-only bytes while both measured step facts survive", (t) => {
  const { root, write } = fixture(t);
  const run = startCiRun([{ id: "static-1", report: "importLoop" }], root);
  beginCiStep(run, run.steps[0], root);
  write("importLoop", { summary: { openClawLifecycleCount: 0 } });
  finishCiStep(run, run.steps[0], "passed", root);
  const lifecycle = { id: "lifecycle", report: "importLoop", state: "pending" };
  run.steps.push(lifecycle);
  beginCiStep(run, lifecycle, root);
  assert.equal(existsSync(path.join(root, ciReportPaths.importLoop)), false);
  write("importLoop", { summary: { openClawLifecycleCount: 3 } });
  finishCiStep(run, lifecycle, "passed", root);
  const collected = collectCiReports(readCiRun(root), { root, outcomes: {
    suite: { outcome: "success" }, lifecycle: { outcome: "success" },
    setup: { outcome: "success", outputs: { ignored: "value" } }, comparison: { outcome: "skipped" },
  } });
  assert.equal(collected.reports.importLoop.summary.openClawLifecycleCount, 3);
  assert.deepEqual(collected.steps.map((step) => step.state), ["passed", "passed", "skipped"]);
  assert.deepEqual(collected.findings, ["comparison: skipped"]);
});

test("never-started replacements retain current reports; interrupted replacements invalidate them", (t) => {
  const { root, write } = fixture(t);
  for (const [report, id] of [["importLoop", "lifecycle"], ["ciPolicy", "policy"]]) {
    const run = startCiRun([{ id: "static-1", report }], root);
    executeCiStep(run, run.steps[0], () => { write(report, { summary: { failCount: 1 } }); return 1; }, root);
    const skipped = collectCiReports(run, { root, outcomes: { [id]: { outcome: "skipped" } } });
    assert.equal(skipped.reports[report].summary.failCount, 1, report);
    assert.equal(skipped.paths[report], ciReportPaths[report]);
    assert.ok(skipped.findings.includes(`${id}: skipped`));
    const next = { id, report, state: "pending" };
    run.steps.push(next);
    beginCiStep(run, next, root);
    write(report, { summary: { failCount: 0 }, partial: true });
    const interrupted = collectCiReports(run, { root });
    assert.equal(interrupted.reports[report], undefined, report);
    assert.ok(interrupted.findings.includes(`${id}: interrupted`));
  }
});

test("workflow producers do not inherit the static suite timeout policy", (t) => {
  const { root } = fixture(t);
  const marker = path.join(root, "ran");
  const args = ["-e", `require('node:fs').writeFileSync(${JSON.stringify(marker)}, 'done')`];
  const previous = process.env.CRABPOT_STATIC_STEP_TIMEOUT_MS;
  process.env.CRABPOT_STATIC_STEP_TIMEOUT_MS = "invalid";
  try {
    assert.throws(() => runStaticStep(process.execPath, args), /must be a positive integer timeout/);
    assert.equal(existsSync(marker), false);
    assert.equal(runCommandStep(process.execPath, args), 0);
    assert.equal(readFileSync(marker, "utf8"), "done");
  } finally {
    if (previous === undefined) delete process.env.CRABPOT_STATIC_STEP_TIMEOUT_MS;
    else process.env.CRABPOT_STATIC_STEP_TIMEOUT_MS = previous;
  }
});

test("platform-disabled smoke is unselected while selected skipped smoke is incomplete", (t) => {
  const { root } = fixture(t);
  const run = startCiRun([{ id: "static-1", report: null }], root);
  finishCiStep(run, run.steps[0], "passed", root);
  for (const outcome of ["success", "not-selected", "skipped", "failure"]) {
    const collected = collectCiReports(run, { root, outcomes: { "inspector-smoke": { outcome } } });
    assert.equal(collected.findings.length, ["success", "not-selected"].includes(outcome) ? 0 : 1, outcome);
  }
});

test("a workflow validation failure retains its computed output without masking its outcome", (t) => {
  const { root, write } = fixture(t);
  const run = startCiRun([{ id: "comparison", report: "profileDiff" }], root);
  assert.equal(executeCiStep(run, run.steps[0], () => {
    write("profileDiff", { summary: { failCount: 1 } });
    return 9;
  }, root), 9);
  const collected = collectCiReports(readCiRun(root), { root, outcomes: { comparison: { outcome: "failure", conclusion: "success" } } });
  assert.equal(collected.reports.profileDiff.summary.failCount, 1);
  assert.deepEqual(collected.findings, ["comparison: failed"]);
});

test("a thrown producer failure keeps its identity and records its completed output", (t) => {
  const { root, write } = fixture(t);
  const run = startCiRun([{ id: "policy", report: "ciPolicy" }], root);
  const failure = new Error("validation failed after writing");
  assert.throws(() => executeCiStep(run, run.steps[0], () => {
    write("ciPolicy", { summary: { failCount: 1 }, checks: [] });
    throw failure;
  }, root), (error) => error === failure);
  const collected = collectCiReports(readCiRun(root), { root });
  assert.equal(collected.reports.ciPolicy.summary.failCount, 1);
  assert.deepEqual(collected.findings, ["policy: failed"]);
});

function reportingFixture(t) {
  const value = fixture(t);
  const { root } = value;
  const scripts = path.join(root, "scripts");
  mkdirSync(scripts);
  for (const name of ["plugin-inspector-source", "ci-report-handoff", "write-ci-summary", "run-static-suite", "portable-command", "static-step", "check-ci-policy"]) {
    copyFileSync(new URL(`../scripts/${name}.mjs`, import.meta.url), path.join(scripts, `${name}.mjs`));
  }
  writeFileSync(path.join(scripts, "manifest-lib.mjs"), `export const repoRoot = ${JSON.stringify(root)};`);
  writeFileSync(path.join(scripts, "owned-command.mjs"), `import {writeFileSync} from 'node:fs';
    export const configuredTimeoutMs = (_key, fallback) => fallback;
    export function runOwnedCommand() { writeFileSync(${JSON.stringify(path.join(root, "unexpected-command"))}, 'called'); throw Error('command forbidden'); }`);
  writeFileSync(path.join(scripts, "compare-openclaw-refs.mjs"), `export const defaultRefDiffJsonPath = ${JSON.stringify(path.join(root, ciReportPaths.refDiff))};`);
  writeFileSync(path.join(scripts, "summarize-execution-results.mjs"), `export const defaultExecutionResultsJsonPath = ${JSON.stringify(path.join(root, ciReportPaths.execution))};`);
  writeFileSync(path.join(scripts, "report-lib.mjs"), `export const defaultJsonReportPath = ${JSON.stringify(path.join(root, ciReportPaths.compatibility))}; export function buildReport() { throw Error('inspection forbidden'); }`);
  function api(dir, source = "export const marker = 'prepared';") {
    mkdirSync(path.join(dir, "src"), { recursive: true });
    writeFileSync(path.join(dir, "package.json"), '{"type":"module"}');
    writeFileSync(path.join(dir, "src/index.js"), source);
    return dir;
  }
  function run(code, env = {}) {
    const result = spawnSync(process.execPath, ["--input-type=module", "-e", code], {
      cwd: root, env: { ...Object.fromEntries(Object.entries(process.env).filter(([key]) => !key.startsWith("CRABPOT_PLUGIN_INSPECTOR"))), ...env },
      encoding: "utf8", timeout: 5000,
    });
    assert.ifError(result.error);
    assert.equal(existsSync(path.join(root, "unexpected-command")), false, "reporting must not run Git/npm or acquire a checkout");
    return result;
  }
  const module = pathToFileURL(path.join(scripts, "plugin-inspector-source.mjs")).href;
  const load = `const {loadPluginInspectorPublicApi} = await import(${JSON.stringify(module)}); const api = await loadPluginInspectorPublicApi({prepare:false}); console.log(api?.marker ?? 'unprepared');`;
  return { ...value, scripts, api, run, load };
}

test("prepared reporting honors override, sibling and exact marker without checkout commands", (t) => {
  const { parent, root, api, run, load } = reportingFixture(t);
  assert.equal(run(load).stdout.trim(), "unprepared");
  const pinned = api(path.join(root, ".crabpot/plugin-inspector", pluginInspectorRef));
  mkdirSync(path.join(pinned, "node_modules"));
  const marker = path.join(pinned, "node_modules/.crabpot-install-ready");
  writeFileSync(marker, "wrong\n");
  assert.equal(run(load).stdout.trim(), "unprepared");
  writeFileSync(marker, `${pluginInspectorRef}\n`);
  assert.equal(run(load).stdout.trim(), "prepared");
  api(path.join(parent, "plugin-inspector"), "export const marker = 'sibling';");
  assert.equal(run(load).stdout.trim(), "sibling");
  const override = api(path.join(parent, "override"), "export const marker = 'override';");
  assert.equal(run(load, { CRABPOT_PLUGIN_INSPECTOR_DIR: override, CRABPOT_PLUGIN_INSPECTOR_BIN: "ignored" }).stdout.trim(), "override");
  const broken = run(load, { CRABPOT_PLUGIN_INSPECTOR_DIR: path.join(parent, "missing") });
  assert.notEqual(broken.status, 0);
  assert.match(broken.stderr, /ERR_MODULE_NOT_FOUND/);
});

test("early-bootstrap summary is an explicit incomplete artifact with no provisioning or stale links", (t) => {
  const { root, scripts, run, write } = reportingFixture(t);
  write("compatibility", { summary: { breakageCount: 0 }, stale: true });
  const code = `process.argv = [process.execPath, ${JSON.stringify(path.join(scripts, "write-ci-summary.mjs"))}, '--run-report', '--json']; await import(${JSON.stringify(pathToFileURL(path.join(scripts, "write-ci-summary.mjs")).href)});`;
  const result = run(code);
  assert.equal(result.status, 0, result.stderr);
  const summary = JSON.parse(result.stdout);
  assert.equal(summary.status, "fail");
  assert.equal(summary.incomplete, true);
  assert.equal(summary.summary.breakages, null);
  assert.equal(summary.artifacts, undefined);
  assert.match(readFileSync(path.join(root, "reports/crabpot-ci-summary.md"), "utf8"), /FAIL \(incomplete\)/);
  assert.equal(existsSync(path.join(root, ".crabpot")), false);
});

test("current-run initialization and failed summary entry invalidate old PASS summaries", (t) => {
  const { root, scripts, run } = reportingFixture(t);
  const json = path.join(root, "reports/crabpot-ci-summary.json");
  const markdown = path.join(root, "reports/crabpot-ci-summary.md");
  for (const file of [json, markdown]) writeFileSync(file, "old PASS");
  startCiRun([{ id: "comparison", report: "profileDiff" }], root);
  assert.equal(existsSync(json), false);
  assert.equal(existsSync(markdown), false);
  for (const file of [json, markdown]) writeFileSync(file, "old PASS");
  const code = `process.argv = [process.execPath, ${JSON.stringify(path.join(scripts, "write-ci-summary.mjs"))}, '--run-report']; await import(${JSON.stringify(pathToFileURL(path.join(scripts, "write-ci-summary.mjs")).href)});`;
  const result = run(code, { CRABPOT_CI_STEP_OUTCOMES: "{" });
  assert.notEqual(result.status, 0, "malformed workflow input cannot make a summary");
  assert.equal(existsSync(json), false);
  assert.equal(existsSync(markdown), false);
});

test("workflow producer owner finalizes nonzero outputs and keeps the original command status", (t) => {
  const { root, scripts, run } = reportingFixture(t);
  startCiRun([{ id: "comparison", report: "profileDiff" }], root);
  const producer = path.join(root, "producer.mjs");
  writeFileSync(producer, `import {writeFileSync} from 'node:fs'; writeFileSync('reports/crabpot-profile-diff.json', JSON.stringify({summary:{failCount:2}})); process.exit(17);`);
  const helper = path.join(scripts, "ci-report-handoff.mjs");
  const result = run(`process.argv = [process.execPath, ${JSON.stringify(helper)}, 'run', 'comparison', process.execPath, ${JSON.stringify(producer)}]; await import(${JSON.stringify(pathToFileURL(helper).href)});`);
  assert.equal(result.status, 17, result.stderr);
  const collected = collectCiReports(readCiRun(root), { root });
  assert.equal(collected.reports.profileDiff.summary.failCount, 2);
  assert.deepEqual(collected.findings, ["comparison: failed"]);
});

test("summary injects incomplete coverage without losing policy findings or exposing stale artifact links", (t) => {
  const { parent, root, scripts, run, api, write } = reportingFixture(t);
  const handoff = startCiRun([{ id: "policy", report: "ciPolicy" }, { id: "execution", report: "execution" }], root);
  executeCiStep(handoff, handoff.steps[0], () => {
    write("ciPolicy", { summary: { failCount: 1, warnCount: 1 }, checks: [{ action: "fail", id: "original", message: "real policy failure", evidence: ["capture"] }] });
    return 1;
  }, root);
  write("compatibility", { summary: { breakageCount: 0 }, stale: true });
  const prepared = api(path.join(parent, "prepared"), `
    export function buildCiSummary({reports, reportPaths}) {
      return {status: reports.ciPolicy.summary.failCount ? 'fail' : 'pass', summary: reports.ciPolicy.summary,
        policyFindings: reports.ciPolicy.checks, artifacts: reportPaths};
    }
    export function renderCiSummaryMarkdown() { return 'prepared public summary'; }
  `);
  const source = pathToFileURL(path.join(scripts, "write-ci-summary.mjs")).href;
  const result = run(`const {buildCiSummary,renderCiSummaryMarkdown}=await import(${JSON.stringify(source)});
    const summary=await buildCiSummary({currentRun:true,outcomes:{policy:{outcome:'failure',conclusion:'success'},execution:{outcome:'skipped'}}});
    console.log(JSON.stringify({summary,markdown:renderCiSummaryMarkdown(summary)}));`, { CRABPOT_PLUGIN_INSPECTOR_DIR: prepared });
  assert.equal(result.status, 0, result.stderr);
  const { summary, markdown } = JSON.parse(result.stdout);
  assert.equal(summary.status, "fail");
  assert.equal(summary.summary.failCount, 3);
  assert.equal(summary.summary.warnCount, 1);
  assert.equal(summary.policyFindings.at(-1).id, "original");
  assert.deepEqual(summary.artifacts, { ciPolicy: ciReportPaths.ciPolicy });
  assert.match(markdown, /execution: skipped/);
  assert.match(markdown, /Not selected: compatibility/);
});

test("current-run policy excludes stale inputs and refuses missing selected inputs without inspection", (t) => {
  const { parent, root, scripts, run, api, write } = reportingFixture(t);
  const prepared = api(path.join(parent, "prepared"), "export function buildCiPolicyReport({compatibilityReport,executionResults,refDiff}) { return {compatibilityReport,executionResults,refDiff}; }");
  const module = pathToFileURL(path.join(scripts, "check-ci-policy.mjs")).href;
  const invoke = (currentRun = true) => run(`process.argv[1] = "policy-test.mjs"; const {buildCiPolicyReport}=await import(${JSON.stringify(module)}); console.log(JSON.stringify(await buildCiPolicyReport({policy:{},currentRun:${currentRun}})));`, { CRABPOT_PLUGIN_INSPECTOR_DIR: prepared });
  let handoff = startCiRun([{ id: "compatibility", report: "compatibility" }], root);
  executeCiStep(handoff, handoff.steps[0], () => { write("compatibility", { summary: { breakageCount: 0 } }); return 0; }, root);
  write("execution", { summary: { failCount: 99 }, stale: true });
  write("refDiff", { summary: { hardRegressionCount: 99 }, stale: true });
  let result = invoke();
  assert.equal(result.status, 0, result.stderr);
  assert.equal(JSON.parse(result.stdout).executionResults, null);
  assert.equal(JSON.parse(result.stdout).refDiff, null);
  result = invoke(false);
  assert.equal(result.status, 0, result.stderr);
  assert.equal(JSON.parse(result.stdout).executionResults.summary.failCount, 99, "ordinary policy keeps its existing default inputs");
  for (const key of ["compatibility", "execution", "refDiff"]) {
    handoff = startCiRun([{ id: "compatibility", report: "compatibility" }, ...(key === "compatibility" ? [] : [{ id: key, report: key }])], root);
    if (key !== "compatibility") executeCiStep(handoff, handoff.steps[0], () => { write("compatibility", { summary: {} }); return 0; }, root);
    result = invoke();
    assert.notEqual(result.status, 0);
    assert.match(result.stderr, new RegExp(`Current-run policy requires the selected ${key} report`));
    assert.doesNotMatch(result.stderr, /inspection forbidden/);
  }
  handoff = startCiRun([{ id: "compatibility", report: "compatibility" }, { id: "execution", report: "execution" }], root);
  executeCiStep(handoff, handoff.steps[0], () => { write("compatibility", { summary: {} }); return 0; }, root);
  executeCiStep(handoff, handoff.steps[1], () => { write("execution", { summary: { failCount: 2 }, current: true }); return 1; }, root);
  result = invoke();
  assert.equal(result.status, 0, result.stderr);
  assert.deepEqual(JSON.parse(result.stdout).executionResults, { summary: { failCount: 2 }, current: true });
});
