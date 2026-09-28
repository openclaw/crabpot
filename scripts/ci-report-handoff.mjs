import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, renameSync, rmSync, writeFileSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { repoRoot } from "./manifest-lib.mjs";
import { runCommandStep } from "./static-step.mjs";

export const ciReportPaths = {
  compatibility: "reports/crabpot-report.json",
  capture: "reports/crabpot-capture.json",
  synthetic: "reports/crabpot-synthetic-probes.json",
  coldImport: "reports/crabpot-cold-import.json",
  workspace: "reports/crabpot-workspace-plan.json",
  platform: "reports/crabpot-platform-probes.json",
  importLoop: "reports/crabpot-import-loop-profile.json",
  execution: "reports/crabpot-execution-results.json",
  runtimeProfile: "reports/crabpot-runtime-profile.json",
  refDiff: "reports/crabpot-ref-diff.json",
  profileDiff: "reports/crabpot-profile-diff.json",
  ciPolicy: "reports/crabpot-ci-policy.json",
  generatedSurface: "reports/crabpot-generated-surface.json",
  packageAvailability: "reports/crabpot-package-availability.json",
};

const producerKeys = {
  "generate-report": "compatibility", "capture-contracts": "capture",
  "synthetic-probes": "synthetic", "cold-import-readiness": "coldImport",
  "workspace-plan": "workspace", "platform-probes": "platform",
  "import-loop-profile": "importLoop", "summarize-execution-results": "execution",
  "profile-contract-runtime": "runtimeProfile", "compare-openclaw-refs": "refDiff",
  "compare-runtime-profile": "profileDiff", "check-ci-policy": "ciPolicy",
  "check-generated-surface-fixture": "generatedSurface",
  "sync-fixtures": "packageAvailability",
};
const workflowProducers = {
  lifecycle: "importLoop", profile: "runtimeProfile", comparison: "profileDiff",
  policy: "ciPolicy", compatibility: "compatibility", execution: "execution",
  workspace: "workspace", refDiff: "refDiff", execute: null,
};

export function reportKeyForCommand(args) {
  if (args[0] === "scripts/sync-fixtures.mjs" && !args.includes("--materialize")) return null;
  return producerKeys[path.basename(args[0], ".mjs")] ?? null;
}

export function ciRunIdentity(env = process.env) {
  return [env.GITHUB_RUN_ID ?? "local", env.GITHUB_RUN_ATTEMPT ?? "1", env.GITHUB_JOB ?? "local"];
}

export function handoffPath(root = repoRoot) {
  return path.join(root, "reports/crabpot-ci-run.json");
}

export function startCiRun(steps, root = repoRoot) {
  const run = { identity: ciRunIdentity(), steps: steps.map((step) => ({ ...step, state: "pending" })) };
  // Clear only this invocation's declared reports, never the whole reports tree.
  for (const key of new Set(steps.map((step) => step.report).filter(Boolean))) clearReport(key, root);
  clearCiSummary(root);
  saveCiRun(run, root);
  return run;
}

export function clearCiSummary(root = repoRoot) {
  for (const suffix of ["json", "md"]) rmSync(path.join(root, `reports/crabpot-ci-summary.${suffix}`), { force: true });
}

export function readCiRun(root = repoRoot) {
  const run = JSON.parse(readFileSync(handoffPath(root), "utf8"));
  if (JSON.stringify(run.identity) !== JSON.stringify(ciRunIdentity()) || !Array.isArray(run.steps) || run.steps.length === 0 ||
    run.steps.some((step) => !step || typeof step.id !== "string" || !["pending", "running", "passed", "failed"].includes(step.state) ||
      (step.report && !Object.hasOwn(ciReportPaths, step.report)))) {
    throw new Error("CI report handoff does not belong to this job and attempt");
  }
  return run;
}

export function saveCiRun(run, root = repoRoot) {
  const file = handoffPath(root);
  mkdirSync(path.dirname(file), { recursive: true });
  writeFileSync(`${file}.tmp`, `${JSON.stringify(run, null, 2)}\n`);
  renameSync(`${file}.tmp`, file);
}

function clearReport(key, root) {
  const file = ciReportPaths[key];
  if (!file) throw new Error(`Unknown CI report: ${key}`);
  for (const relative of [file, file.replace(/\.json$/, ".md"), ...(key === "compatibility" ? ["reports/crabpot-issues.md"] : [])]) {
    rmSync(path.join(root, relative), { force: true });
  }
}

export function beginCiStep(run, step, root = repoRoot) {
  if (step.report) clearReport(step.report, root);
  step.state = "running";
  saveCiRun(run, root);
}

export function finishCiStep(run, step, state, root = repoRoot) {
  step.state = state;
  if (step.report && existsSync(path.join(root, ciReportPaths[step.report]))) {
    step.sha256 = digest(readFileSync(path.join(root, ciReportPaths[step.report])));
  }
  saveCiRun(run, root);
}

export function executeCiStep(run, step, execute, root = repoRoot) {
  beginCiStep(run, step, root);
  let status;
  let failure;
  try { status = execute(); } catch (error) { failure = error; }
  try {
    finishCiStep(run, step, !failure && status === 0 ? "passed" : "failed", root);
  } catch (error) {
    if (failure) throw new AggregateError([failure, error], "CI step and report handoff both failed");
    if (status !== undefined && status !== 0) console.error(`CI report handoff failed: ${error.message}`);
    else throw error;
  }
  if (failure) throw failure;
  return status;
}

function digest(bytes) { return createHash("sha256").update(bytes).digest("hex"); }

export function collectCiReports(run, { root = repoRoot, outcomes = {} } = {}) {
  const reports = {};
  const paths = {};
  const findings = [];
  const steps = run.steps.map((step) => ({ ...step }));
  for (const [id, value] of Object.entries(outcomes)) {
    if (id === "inspector-smoke") {
      steps.push({ id, state: value.outcome === "success" ? "passed" : value.outcome || "skipped", report: null });
      continue;
    }
    if (id !== "suite" && !Object.hasOwn(workflowProducers, id)) continue;
    const outcome = typeof value === "string" ? value : value.outcome;
    if (id === "suite") {
      if (outcome !== "success") findings.push(`Static suite: ${outcome || "skipped"}`);
      continue;
    }
    const step = steps.find((item) => item.id === id);
    if (!step) {
      steps.push({ ...workflowStep(id), state: outcome === "success" ? "unrecorded" : outcome || "skipped" });
    } else if (outcome !== "success") {
      step.state = outcome === "failure" ? "failed" : outcome || "skipped";
    }
  }
  for (const step of steps) {
    if (step.state !== "passed" && step.state !== "not-selected") findings.push(`${step.id}: ${step.state === "running" ? "interrupted" : step.state}`);
  }
  // Only an actual start can replace earlier bytes. A skipped follow-up keeps
  // the previous publication; an interrupted start invalidates it.
  const latest = new Map(run.steps.filter((step) => step.report && step.state !== "pending")
    .map((step) => [step.report, step]));
  for (const [key, step] of latest) {
    if (!["passed", "failed"].includes(step.state)) continue;
    try {
      const bytes = readFileSync(path.join(root, ciReportPaths[key]));
      if (!step.sha256 || digest(bytes) !== step.sha256) throw new Error("unrecorded or changed output");
      const report = JSON.parse(bytes);
      if (!report || Array.isArray(report) || typeof report !== "object" || !report.summary || Array.isArray(report.summary) || typeof report.summary !== "object") {
        throw new Error("invalid report object");
      }
      reports[key] = report;
      paths[key] = ciReportPaths[key];
    } catch (error) {
      findings.push(`${step.id}: ${error.code === "ENOENT" ? "missing report" : error.message}`);
    }
  }
  return { reports, paths, steps, findings };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main();
}

function main() {
  const [operation, id, ...selected] = process.argv.slice(2);
  if (operation === "start") {
    startCiRun([id, ...selected].map((name) => workflowStep(name)));
  } else {
    const run = readCiRun();
    let step = run.steps.find((item) => item.id === id);
    if (operation === "run") {
      if (!step) { step = workflowStep(id); run.steps.push(step); }
      const [command, ...args] = selected;
      if (!command) throw new Error("CI report producer command is required");
      process.exitCode = executeCiStep(run, step, () => runCommandStep(command, args));
    } else {
      throw new Error("Expected CI report handoff start or run");
    }
  }
}

function workflowStep(id) {
  if (!Object.hasOwn(workflowProducers, id)) throw new Error(`Unknown CI report producer: ${id}`);
  return { id, report: workflowProducers[id], state: "pending" };
}
