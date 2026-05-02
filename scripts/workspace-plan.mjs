#!/usr/bin/env node
import path from "node:path";
import { pathToFileURL } from "node:url";
import { readConfiguredManifest, repoRoot } from "./manifest-lib.mjs";
import { loadPluginInspectorPublicApi } from "./plugin-inspector-source.mjs";

const pluginInspector = await loadPluginInspectorPublicApi();

export const defaultWorkspacePlanJsonPath = path.join(repoRoot, "reports/crabpot-workspace-plan.json");
export const defaultWorkspacePlanMarkdownPath = path.join(repoRoot, "reports/crabpot-workspace-plan.md");

const crabpotWorkspacePlanOptions = {
  captureScript: "../../../scripts/run-cold-import-capture.mjs",
  defaultTargetOpenClawWorkspacePath: "../../../openclaw",
  optInEnv: "CRABPOT_EXECUTE_ISOLATED=1",
  resultsRoot: ".crabpot/results",
  rootDir: repoRoot,
  syntheticProbeScript: "../../../scripts/synthetic-probes.mjs",
  workspaceRoot: ".crabpot/workspaces",
};

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  await main();
}

async function main() {
  const parsedArgs = parseArgs(process.argv.slice(2));
  const plan = await buildWorkspacePlan({ openclawPath: parsedArgs.openclawPath });
  const errors = validateWorkspacePlan(plan);

  if (parsedArgs.write) {
    await writeWorkspacePlan(plan);
  }

  if (parsedArgs.json) {
    console.log(JSON.stringify(plan, null, 2));
  } else {
    console.log(
      `workspace plan: ${plan.summary.entrypointCount} entrypoints, ${plan.summary.installStepCount} installs, ${plan.summary.auditStepCount} audits, ${plan.summary.buildStepCount} builds, ${plan.summary.captureStepCount} captures, ${plan.summary.syntheticProbeStepCount} synthetic probes, ${plan.summary.artifactStepCount} artifact dirs`,
    );
  }

  if (errors.length > 0) {
    throw new Error(errors.join("\n"));
  }
}

function parseArgs(argv) {
  const parsed = {
    json: false,
    write: true,
    openclawPath: undefined,
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

export async function buildWorkspacePlan(options = {}) {
  const config = options.report
    ? undefined
    : {
        ...(await readConfiguredManifest()),
        rootDir: repoRoot,
      };
  return pluginInspector.buildFixtureSetWorkspacePlan({
    ...crabpotWorkspacePlanOptions,
    ...options,
    config,
    rootDir: options.rootDir ?? repoRoot,
  });
}

export function validateWorkspacePlan(plan) {
  return pluginInspector.validateFixtureSetWorkspacePlan(plan, crabpotWorkspacePlanOptions);
}

export async function writeWorkspacePlan(plan, options = {}) {
  return pluginInspector.writeFixtureSetWorkspacePlan(plan, {
    jsonPath: options.jsonPath ?? defaultWorkspacePlanJsonPath,
    markdownPath: options.markdownPath ?? defaultWorkspacePlanMarkdownPath,
    title: options.title ?? "Crabpot Isolated Workspace Plan",
  });
}

export function renderWorkspacePlanMarkdown(plan, options = {}) {
  return pluginInspector.renderFixtureSetWorkspacePlanMarkdown(plan, {
    ...options,
    title: options.title ?? "Crabpot Isolated Workspace Plan",
  });
}
