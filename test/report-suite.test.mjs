import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { copyFileSync, existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { test } from "node:test";
import { ciReportPaths, collectCiReports, readCiRun } from "../scripts/ci-report-handoff.mjs";
import { reportSuiteSteps } from "../scripts/run-report-suite.mjs";
import { runStaticSuite } from "../scripts/run-static-suite.mjs";

function fixture(t, failure = "") {
  const root = mkdtempSync(path.join(os.tmpdir(), "crabpot-report-suite-"));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  mkdirSync(path.join(root, "scripts"));
  for (const name of ["run-report-suite", "ci-report-handoff", "static-step", "portable-command", "runtime-profile-plan"]) {
    copyFileSync(new URL(`../scripts/${name}.mjs`, import.meta.url), path.join(root, `scripts/${name}.mjs`));
  }
  const put = (name, source) => writeFileSync(path.join(root, `scripts/${name}.mjs`), source);
  put("manifest-lib", `export const repoRoot = ${JSON.stringify(root)};`);
  put("owned-command", "export const configuredTimeoutMs = (_key, fallback) => fallback;");
  put("report-lib", `import {readFileSync,appendFileSync} from 'node:fs';
    export async function inspectReport() {
      appendFileSync('inspections', '1');
      if (${JSON.stringify(failure)} === 'inspect') throw Error('inspection failed');
      return {inspected:{summary:{version:Number(readFileSync('input','utf8'))},kind:'raw'}};
    }
    export async function buildReportFromInspection(input) { return {...input.inspected,kind:'decorated'}; }`);
  for (const step of reportSuiteSteps()) {
    const name = path.basename(step.command, ".mjs");
    const reportFile = ciReportPaths[step.report];
    put(name, `import {writeFileSync,appendFileSync} from 'node:fs';
      import assert from 'node:assert/strict';
      export async function runReportCommand(_args, options) {
        const name=${JSON.stringify(name)}, failure=${JSON.stringify(failure)};
        if (name==='capture-contracts' && failure==='timeout') await new Promise(resolve=>setTimeout(resolve,10000));
        if (name==='capture-contracts' && failure==='crash') process.exit(23);
        if (name==='capture-contracts' && failure==='false-success') process.exit(0);
        const input=options.plan??options.report;
        const expected=name==='platform-probes'?'plan':['cold-import-readiness','workspace-plan'].includes(name)?'raw':'decorated';
        assert.equal(input.kind,expected);
        assert.equal(input.mutated,undefined);
        if(name==='workspace-plan')assert.equal(options.readiness.kind,'readiness');
        await new Promise(resolve=>setTimeout(resolve,5));
        const output={summary:{...input.summary},kind:name==='workspace-plan'?'plan':name==='cold-import-readiness'?'readiness':input.kind};
        ${reportFile ? `writeFileSync(${JSON.stringify(reportFile)},JSON.stringify(output));` : ""}
        appendFileSync('producers',name+'\\n');
        input.mutated=true;
        if(name==='capture-contracts' && failure==='validation')throw Error('validation failed after writing');
        return output;
      }`);
  }
  writeFileSync(path.join(root, "input"), "1");
  const args = ["scripts/run-report-suite.mjs", "--check", "--write", "--run-report"];
  const steps = [["node", args], ["node", ["scripts/check-ci-policy.mjs", "--check", "--write"]]];
  let later = 0;
  const run = () => runStaticSuite(steps, { root, writeReports: true, execute: (_command, commandArgs) => {
    if (commandArgs[0] !== args[0]) {
      later++;
      writeFileSync(path.join(root, ciReportPaths.ciPolicy), JSON.stringify({ summary: {} }));
      return 0;
    }
    const result = spawnSync(process.execPath, commandArgs, { cwd: root, env: process.env, encoding: "utf8", timeout: 2000 });
    if (result.error) throw result.error;
    return result.status;
  } });
  return { root, run, later: () => later, collected: () => collectCiReports(readCiRun(root), { root }) };
}

test("report producers share only this invocation's inspection and preserve raw inputs", (t) => {
  const f = fixture(t);
  assert.equal(f.run(), 0);
  assert.equal(readFileSync(path.join(f.root, "inspections"), "utf8"), "1");
  assert.equal(f.later(), 1);
  let result = f.collected();
  assert.deepEqual(result.findings, []);
  assert.equal(result.steps.length, 8);
  assert.ok(result.steps.every((step) => step.state === "passed"));
  assert.equal(result.reports.compatibility.kind, "decorated");
  assert.equal(result.reports.coldImport.kind, "readiness");
  assert.equal(result.reports.platform.kind, "plan");
  writeFileSync(path.join(f.root, "input"), "2");
  assert.equal(f.run(), 0);
  assert.equal(readFileSync(path.join(f.root, "inspections"), "utf8"), "11");
  result = f.collected();
  for (const key of ["compatibility", "capture", "synthetic", "coldImport", "workspace", "platform"]) {
    assert.equal(result.reports[key].summary.version, 2, key);
  }
});

test("awaited validation failure preserves its output and leaves later producers pending", (t) => {
  const f = fixture(t, "validation");
  assert.equal(f.run(), 1);
  const result = f.collected();
  assert.deepEqual(result.steps.map((step) => step.state), ["passed", "failed", ...Array(6).fill("pending")]);
  assert.equal(result.reports.capture.summary.version, 1);
  assert.ok(result.steps[1].sha256);
  assert.equal(result.reports.synthetic, undefined);
  assert.equal(f.later(), 0);
});

test("inspection failure belongs to the first producer before any output exists", (t) => {
  const f = fixture(t, "inspect");
  assert.equal(f.run(), 1);
  assert.deepEqual(f.collected().steps.map((step) => step.state), ["failed", ...Array(7).fill("pending")]);
  assert.equal(existsSync(path.join(f.root, "producers")), false);
});

for (const failure of ["crash", "timeout", "false-success"]) {
  test(`parent reloads partial child receipts after ${failure}`, (t) => {
    const f = fixture(t, failure);
    if (failure === "crash") assert.equal(f.run(), 23);
    else assert.throws(f.run, failure === "timeout" ? /ETIMEDOUT/ : /without completing every selected producer/);
    const result = f.collected();
    assert.deepEqual(result.steps.map((step) => step.state), ["passed", "running", ...Array(6).fill("pending")]);
    assert.ok(result.steps[0].sha256);
    assert.equal(result.reports.compatibility.summary.version, 1);
    assert.equal(result.reports.capture, undefined);
    assert.match(result.findings.join("\n"), /interrupted/);
    assert.equal(f.later(), 0);
  });
}
