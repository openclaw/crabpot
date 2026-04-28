#!/usr/bin/env node
import path from "node:path";
import { pathToFileURL } from "node:url";
import { readManifest, repoRoot } from "./manifest-lib.mjs";
import { loadPluginInspectorPublicApi } from "./plugin-inspector-source.mjs";

const pluginInspector = await loadPluginInspectorPublicApi();

export const defaultColdImportJsonPath = path.join(repoRoot, "reports/crabpot-cold-import.json");
export const defaultColdImportMarkdownPath = path.join(repoRoot, "reports/crabpot-cold-import.md");

export const validateColdImportReadiness = pluginInspector.validateColdImportReadiness;

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  await main();
}

async function main() {
  const parsedArgs = parseArgs(process.argv.slice(2));
  const readiness = await buildColdImportReadiness({ openclawPath: parsedArgs.openclawPath });
  const errors = validateColdImportReadiness(readiness);

  if (parsedArgs.write) {
    await writeColdImportReadiness(readiness);
  }

  if (parsedArgs.json) {
    console.log(JSON.stringify(readiness, null, 2));
  } else {
    console.log(
      `cold import readiness: ${readiness.summary.entrypointCount} entrypoints, ${readiness.summary.readyCount} ready, ${readiness.summary.blockedCount} blocked`,
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

export async function buildColdImportReadiness(options = {}) {
  const config = options.report
    ? undefined
    : {
        ...(await readManifest()),
        rootDir: repoRoot,
      };
  return pluginInspector.buildFixtureSetColdImportReadiness({
    ...options,
    config,
    rootDir: options.rootDir ?? repoRoot,
  });
}

export async function writeColdImportReadiness(readiness, options = {}) {
  return pluginInspector.writeFixtureSetColdImportReadiness(readiness, {
    jsonPath: options.jsonPath ?? defaultColdImportJsonPath,
    markdownPath: options.markdownPath ?? defaultColdImportMarkdownPath,
    title: options.title ?? "Crabpot Cold Import Readiness",
  });
}

export function renderColdImportReadinessMarkdown(readiness, options = {}) {
  return pluginInspector.renderFixtureSetColdImportReadinessMarkdown(readiness, {
    ...options,
    title: options.title ?? "Crabpot Cold Import Readiness",
  });
}
