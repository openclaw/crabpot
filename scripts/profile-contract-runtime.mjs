#!/usr/bin/env node
import path from "node:path";
import { pathToFileURL } from "node:url";
import { inspectManifest } from "./inspect-fixtures.mjs";
import { repoRoot } from "./manifest-lib.mjs";
import { loadPluginInspectorPublicApi } from "./plugin-inspector-source.mjs";
import { buildReport } from "./report-lib.mjs";
import { profileCommands } from "./runtime-profile-plan.mjs";
import { staticStepTimeoutMs, boundedNodeOptions } from "./static-step.mjs";

export const defaultProfileJsonPath = path.join(repoRoot, "reports/crabpot-runtime-profile.json");
export const defaultProfileMarkdownPath = path.join(repoRoot, "reports/crabpot-runtime-profile.md");

const pluginInspector = await loadPluginInspectorPublicApi();

const crabpotRuntimeProfileOptions = {
  commands: profileCommands,
  jsonPath: defaultProfileJsonPath,
  markdownPath: defaultProfileMarkdownPath,
  reportTitle: "Crabpot Runtime Profile",
  rootDir: repoRoot,
};

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  await main();
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const profile = await buildRuntimeProfile({
    openclawPath: args.openclawPath,
    runs: args.runs,
  });
  const errors = validateRuntimeProfile(profile);

  if (args.write) {
    await writeRuntimeProfile(profile);
  }

  if (args.json) {
    process.stdout.write(`${JSON.stringify(profile, null, 2)}\n`);
  } else {
    console.log(
      `runtime profile: ${profile.summary.commandCount} commands, p50 ${profile.summary.p50WallMs}ms, command p95 ${profile.summary.p95WallMs}ms, max RSS ${formatSampledMetric(profile.summary.maxPeakRssMb, profile.summary.rssSampleCount)}`,
    );
  }

  if (errors.length > 0) {
    throw new Error(errors.join("\n"));
  }
}

function parseArgs(argv) {
  const args = {
    json: false,
    openclawPath: undefined,
    runs: 1,
    write: true,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--check") {
      args.write = false;
      continue;
    }
    if (arg === "--json") {
      args.json = true;
      continue;
    }
    if (arg === "--openclaw") {
      args.openclawPath = readOptionValue(argv, index, arg);
      index += 1;
      continue;
    }
    if (arg === "--no-openclaw") {
      args.openclawPath = false;
      continue;
    }
    if (arg === "--runs") {
      args.runs = Number.parseInt(readOptionValue(argv, index, arg), 10);
      index += 1;
      continue;
    }
    if (arg === "--write") {
      args.write = true;
    }
  }

  if (!Number.isInteger(args.runs) || args.runs < 1 || args.runs > 10) {
    throw new Error("--runs must be an integer between 1 and 10");
  }

  return args;
}

function readOptionValue(argv, index, flagName) {
  const value = argv[index + 1];
  if (!value || value.startsWith("--")) {
    throw new Error(`${flagName} requires a value`);
  }
  return value;
}

export async function buildRuntimeProfile(options = {}) {
  const timeoutMs = options.timeoutMs ?? staticStepTimeoutMs();
  const report = options.report ?? (await buildReport({ openclawPath: options.openclawPath }));
  const inspection = options.inspection ?? (await inspectManifest());
  return pluginInspector.buildRuntimeProfile({
    ...crabpotRuntimeProfileOptions,
    ...options,
    timeoutMs,
    env: {
      CRABPOT_REPORT_GENERATED_AT: "deterministic",
      ...options.env,
      NODE_OPTIONS: boundedNodeOptions(options.env?.NODE_OPTIONS),
    },
    inspection,
    report,
    rootDir: options.rootDir ?? crabpotRuntimeProfileOptions.rootDir,
  });
}

export function validateRuntimeProfile(profile) {
  return pluginInspector.validateRuntimeProfile(profile);
}

export async function writeRuntimeProfile(profile, options = {}) {
  return pluginInspector.writeRuntimeProfile(profile, {
    ...crabpotRuntimeProfileOptions,
    ...options,
    rootDir: options.rootDir ?? crabpotRuntimeProfileOptions.rootDir,
  });
}

export function renderRuntimeProfileMarkdown(profile, options = {}) {
  return pluginInspector.renderRuntimeProfileMarkdown(profile, {
    ...crabpotRuntimeProfileOptions,
    ...options,
  });
}

function formatSampledMetric(value, count, unit = "MB") {
  if ((count ?? 0) <= 0) {
    return "n/a";
  }
  return `${value}${unit}`;
}
