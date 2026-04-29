#!/usr/bin/env node
import { spawnSync } from "node:child_process";
import { pathToFileURL } from "node:url";
import { portableCommand } from "./portable-command.mjs";

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  main();
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const openclawArgs = args.openclawPath ? ["--openclaw", args.openclawPath] : [];
  const profileArgs = args.profileRuns ? ["--runs", args.profileRuns] : [];
  const pluginInspectorSmoke = args.pluginInspectorSmoke || args.policy === "release";
  if (args.openclawPath) {
    process.env.CRABPOT_TEST_OPENCLAW_PATH = args.openclawPath;
  }

  const steps = buildStaticSuiteSteps({
    openclawArgs,
    pluginInspectorSmoke,
    profileArgs,
  });

  for (const [command, commandArgs] of steps) {
    run(command, commandArgs);
  }
}

export function buildStaticSuiteSteps({ openclawArgs = [], pluginInspectorSmoke = false, policyArgs = [], profileArgs = [] } = {}) {
  return [
    ["node", ["scripts/sync-fixtures.mjs", "--materialize"]],
    ["node", ["--test", "test/*.test.mjs"]],
    ["node", ["scripts/sync-fixtures.mjs", "--check"]],
    ["node", ["scripts/run-contract-smoke.mjs", "--strict", ...openclawArgs]],
    ["node", ["scripts/inspect-fixtures.mjs", "--check"]],
    ...(pluginInspectorSmoke ? [["node", ["scripts/run-plugin-inspector-smoke.mjs", "--check"]]] : []),
    ["node", ["scripts/check-generated-surface-fixture.mjs", "--check", ...openclawArgs]],
    ["node", ["scripts/generate-report.mjs", "--check", ...openclawArgs]],
    ["node", ["scripts/capture-contracts.mjs", "--check", ...openclawArgs]],
    ["node", ["scripts/synthetic-probes.mjs", "--check", ...openclawArgs]],
    ["node", ["scripts/cold-import-readiness.mjs", "--check", ...openclawArgs]],
    ["node", ["scripts/workspace-plan.mjs", "--check", ...openclawArgs]],
    ["node", ["scripts/platform-probes.mjs", "--check", ...openclawArgs]],
    ["node", ["scripts/import-loop-profile.mjs", "--check"]],
    ["node", ["scripts/profile-contract-runtime.mjs", "--check", ...openclawArgs, ...profileArgs]],
    ["node", ["scripts/check-contract-coverage.mjs", ...openclawArgs]],
    ["node", ["scripts/check-ci-policy.mjs", "--check", ...policyArgs]],
  ];
}

function parseArgs(argv) {
  const args = {
    openclawPath: "",
    pluginInspectorSmoke: false,
    policy: "dashboard",
    profileRuns: "",
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--openclaw") {
      args.openclawPath = argv[index + 1];
      index += 1;
      continue;
    }
    if (arg === "--plugin-inspector-smoke") {
      args.pluginInspectorSmoke = true;
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

function run(command, args) {
  const result = spawnSync(portableCommand(command), args, {
    encoding: "utf8",
    stdio: "inherit",
  });
  if (result.error) {
    throw result.error;
  }
  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}
