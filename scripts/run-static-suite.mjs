#!/usr/bin/env node
import { pathToFileURL } from "node:url";
import { runStaticStep } from "./static-step.mjs";
import { executeCiStep, reportKeyForCommand, startCiRun } from "./ci-report-handoff.mjs";

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  main();
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const openclawArgs = args.openclawPath ? ["--openclaw", args.openclawPath] : [];
  const profileArgs = args.profileRuns ? ["--runs", args.profileRuns] : [];
  const pluginInspectorSmoke = args.pluginInspectorSmoke || args.policy === "release";
  const fixtureEnv = {
    ...(args.fixtureSet ? { CRABPOT_FIXTURE_SET: args.fixtureSet } : {}),
    ...(args.pluginTrack ? { CRABPOT_PLUGIN_TRACK: args.pluginTrack } : {}),
    ...(args.openclawTrack ? { CRABPOT_OPENCLAW_TRACK: args.openclawTrack } : {}),
  };
  if (args.openclawPath) {
    process.env.CRABPOT_TEST_OPENCLAW_PATH = args.openclawPath;
  }

  const steps = buildStaticSuiteSteps({
    fixtureEnv,
    openclawArgs,
    pluginInspectorSmoke,
    profileArgs,
    writeReports: args.writeReports,
  });
  process.exitCode = runStaticSuite(steps, { writeReports: args.writeReports });
}

export function runStaticSuite(steps, { writeReports = false, root = process.cwd(), execute = runStaticStep } = {}) {
  const report = writeReports ? startCiRun(steps.map(([, args], index) => ({
    id: `static-${index + 1}`, command: args.join(" "), report: reportKeyForCommand(args),
  })), root) : null;
  for (let index = 0; index < steps.length; index += 1) {
    const [command, args, env] = steps[index];
    const step = report?.steps[index];
    const callback = () => execute(command, args, env, index + 1, steps.length);
    const status = step ? executeCiStep(report, step, callback, root) : callback();
    if (status !== 0) return status;
  }
  return 0;
}

export function buildStaticSuiteSteps({
  fixtureEnv = {},
  openclawArgs = [],
  pluginInspectorSmoke = false,
  policyArgs = [],
  profileArgs = [],
  writeReports = false,
} = {}) {
  const steps = [
    ["node", ["scripts/check-openclaw-plugin-contracts.mjs"]],
    ["node", ["scripts/sync-fixtures.mjs", "--materialize", ...openclawArgs]],
    ["node", ["--test", "--test-concurrency=1", "test/*.test.mjs"]],
    ...(Object.keys(fixtureEnv).length > 0
      ? [["node", ["scripts/sync-fixtures.mjs", "--materialize", ...openclawArgs], fixtureEnv]]
      : []),
    ["node", ["scripts/sync-fixtures.mjs", "--check"], fixtureEnv],
    ["node", ["scripts/run-contract-smoke.mjs", "--strict", ...openclawArgs], fixtureEnv],
    ["node", ["scripts/inspect-fixtures.mjs", "--check"], fixtureEnv],
    ...(pluginInspectorSmoke ? [["node", ["scripts/run-plugin-inspector-smoke.mjs", "--check"], fixtureEnv]] : []),
    ["node", ["scripts/check-generated-surface-fixture.mjs", "--check", ...openclawArgs], fixtureEnv],
    ["node", ["scripts/generate-report.mjs", "--check", ...openclawArgs], fixtureEnv],
    ["node", ["scripts/capture-contracts.mjs", "--check", ...openclawArgs], fixtureEnv],
    ["node", ["scripts/synthetic-probes.mjs", "--check", ...openclawArgs], fixtureEnv],
    ...(openclawArgs.length === 0 ? [["node", ["scripts/behavior-eval.mjs", "--check"], fixtureEnv]] : []),
    ["node", ["scripts/cold-import-readiness.mjs", "--check", ...openclawArgs], fixtureEnv],
    ["node", ["scripts/workspace-plan.mjs", "--check", ...openclawArgs], fixtureEnv],
    ["node", ["scripts/platform-probes.mjs", "--check", ...openclawArgs], fixtureEnv],
    ["node", ["scripts/import-loop-profile.mjs", "--check", ...profileArgs], fixtureEnv],
    ["node", ["scripts/profile-contract-runtime.mjs", "--check", ...openclawArgs, ...profileArgs], fixtureEnv],
    ["node", ["scripts/check-contract-coverage.mjs", ...openclawArgs], fixtureEnv],
    ["node", ["scripts/check-ci-policy.mjs", "--check", ...policyArgs], fixtureEnv],
  ];
  return writeReports ? steps.map(([command, args, env]) => [command,
    reportKeyForCommand(args) && args.includes("--check")
      ? [...args, "--write", ...(args[0] === "scripts/check-ci-policy.mjs" ? ["--run-report"] : [])]
      : args, env]) : steps;
}

function parseArgs(argv) {
  const args = {
    openclawPath: "",
    fixtureSet: "",
    openclawTrack: "",
    pluginInspectorSmoke: false,
    pluginTrack: "",
    policy: "dashboard",
    profileRuns: "",
    writeReports: false,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--write-reports") {
      args.writeReports = true;
      continue;
    }
    if (arg === "--openclaw") {
      args.openclawPath = argv[index + 1];
      index += 1;
      continue;
    }
    if (arg === "--plugin-inspector-smoke") {
      args.pluginInspectorSmoke = true;
      continue;
    }
    if (arg === "--fixture-set") {
      args.fixtureSet = argv[index + 1];
      index += 1;
      continue;
    }
    if (arg === "--openclaw-track") {
      args.openclawTrack = argv[index + 1];
      index += 1;
      continue;
    }
    if (arg === "--plugin-track") {
      args.pluginTrack = argv[index + 1];
      index += 1;
      continue;
    }
    if (arg === "--policy") {
      args.policy = assertPolicy(argv[index + 1]);
      index += 1;
      continue;
    }
    if (arg === "--profile-runs") {
      args.profileRuns = argv[index + 1];
      index += 1;
    }
  }

  return args;
}

function assertPolicy(policy) {
  if (!["dashboard", "release"].includes(policy)) {
    throw new Error(`unknown static suite policy: ${policy}`);
  }
  return policy;
}
