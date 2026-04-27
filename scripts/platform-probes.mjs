#!/usr/bin/env node
import path from "node:path";
import { pathToFileURL } from "node:url";
import { repoRoot } from "./manifest-lib.mjs";
import { loadPluginInspector } from "./plugin-inspector-source.mjs";
import { buildWorkspacePlan } from "./workspace-plan.mjs";

const pluginInspector = await loadPluginInspector();

export const defaultPlatformProbesJsonPath = path.join(repoRoot, "reports/crabpot-platform-probes.json");
export const defaultPlatformProbesMarkdownPath = path.join(repoRoot, "reports/crabpot-platform-probes.md");

export const PLATFORM_TARGETS = pluginInspector.defaultPlatformTargets;
export const validatePlatformProbes = pluginInspector.validatePlatformProbes;

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  await main();
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const report = await buildPlatformProbes({ openclawPath: args.openclawPath });
  const errors = validatePlatformProbes(report);

  if (args.write) {
    await writePlatformProbes(report);
  }
  if (args.json) {
    process.stdout.write(`${JSON.stringify(report, null, 2)}\n`);
  } else {
    console.log(
      `platform probes: ${report.summary.entrypointCount} entrypoints, ${report.summary.tsLoaderEntrypointCount} TS loader, ${report.summary.windowsRiskStepCount} Windows-risk steps, ${report.summary.containerRiskStepCount} container-risk steps`,
    );
  }

  if (errors.length > 0) {
    throw new Error(errors.join("\n"));
  }
}

function parseArgs(argv) {
  const parsed = {
    json: false,
    openclawPath: undefined,
    write: true,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--check") {
      parsed.write = false;
      continue;
    }
    if (arg === "--json") {
      parsed.json = true;
      continue;
    }
    if (arg === "--write") {
      parsed.write = true;
      continue;
    }
    if (arg === "--openclaw") {
      parsed.openclawPath = argv[index + 1];
      index += 1;
      continue;
    }
    if (arg === "--no-openclaw") {
      parsed.openclawPath = false;
    }
  }

  return parsed;
}

export async function buildPlatformProbes(options = {}) {
  const plan = options.plan ?? (await buildWorkspacePlan({ openclawPath: options.openclawPath }));
  return pluginInspector.buildPlatformProbes({ ...options, plan });
}

export async function writePlatformProbes(report, options = {}) {
  return pluginInspector.writePlatformProbes(report, {
    jsonPath: options.jsonPath ?? defaultPlatformProbesJsonPath,
    markdownPath: options.markdownPath ?? defaultPlatformProbesMarkdownPath,
    title: options.title ?? "Crabpot Platform And Loader Probes",
  });
}

export function renderPlatformProbesMarkdown(report, options = {}) {
  return pluginInspector.renderPlatformProbesMarkdown(report, {
    ...options,
    title: options.title ?? "Crabpot Platform And Loader Probes",
  });
}
