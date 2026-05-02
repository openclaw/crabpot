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
  });

  for (const [command, commandArgs, env] of steps) {
    run(command, commandArgs, env);
  }
}

export function buildStaticSuiteSteps({
  fixtureEnv = {},
  openclawArgs = [],
  pluginInspectorSmoke = false,
  policyArgs = [],
  profileArgs = [],
} = {}) {
  return [
    ["node", ["scripts/check-openclaw-plugin-contracts.mjs"]],
    ["node", ["scripts/sync-fixtures.mjs", "--materialize"]],
    ["node", ["--test", "test/*.test.mjs"]],
    ...(Object.keys(fixtureEnv).length > 0
      ? [["node", ["scripts/sync-fixtures.mjs", "--materialize"], fixtureEnv]]
      : []),
    ["node", ["scripts/sync-fixtures.mjs", "--check"], fixtureEnv],
    ["node", ["scripts/run-contract-smoke.mjs", "--strict", ...openclawArgs], fixtureEnv],
    ["node", ["scripts/inspect-fixtures.mjs", "--check"], fixtureEnv],
    ...(pluginInspectorSmoke ? [["node", ["scripts/run-plugin-inspector-smoke.mjs", "--check"], fixtureEnv]] : []),
    ["node", ["scripts/check-generated-surface-fixture.mjs", "--check", ...openclawArgs], fixtureEnv],
    ["node", ["scripts/generate-report.mjs", "--check", ...openclawArgs], fixtureEnv],
    ["node", ["scripts/capture-contracts.mjs", "--check", ...openclawArgs], fixtureEnv],
    ["node", ["scripts/synthetic-probes.mjs", "--check", ...openclawArgs], fixtureEnv],
    ["node", ["scripts/cold-import-readiness.mjs", "--check", ...openclawArgs], fixtureEnv],
    ["node", ["scripts/workspace-plan.mjs", "--check", ...openclawArgs], fixtureEnv],
    ["node", ["scripts/platform-probes.mjs", "--check", ...openclawArgs], fixtureEnv],
    ["node", ["scripts/import-loop-profile.mjs", "--check", ...profileArgs], fixtureEnv],
    ["node", ["scripts/profile-contract-runtime.mjs", "--check", ...openclawArgs, ...profileArgs], fixtureEnv],
    ["node", ["scripts/check-contract-coverage.mjs", ...openclawArgs], fixtureEnv],
    ["node", ["scripts/check-ci-policy.mjs", "--check", ...policyArgs], fixtureEnv],
  ];
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

function run(command, args, env = {}) {
  const result = spawnSync(portableCommand(command), args, {
    encoding: "utf8",
    env: { ...process.env, ...env },
    stdio: "inherit",
  });
  if (result.error) {
    throw result.error;
  }
  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}
