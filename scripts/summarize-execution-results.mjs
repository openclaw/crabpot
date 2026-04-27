#!/usr/bin/env node
import path from "node:path";
import { pathToFileURL } from "node:url";
import { repoRoot } from "./manifest-lib.mjs";
import { loadPluginInspector } from "./plugin-inspector-source.mjs";

export const defaultExecutionResultsJsonPath = path.join(repoRoot, "reports/crabpot-execution-results.json");
export const defaultExecutionResultsMarkdownPath = path.join(repoRoot, "reports/crabpot-execution-results.md");

const pluginInspector = await loadPluginInspector();

const crabpotExecutionResultsOptions = {
  jsonPath: defaultExecutionResultsJsonPath,
  markdownPath: defaultExecutionResultsMarkdownPath,
  reportTitle: "Crabpot Execution Results",
  resultsDir: ".crabpot/results",
  rootDir: repoRoot,
};

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  await main();
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const report = await buildExecutionResultsReport({ resultsDir: args.resultsDir });

  if (args.write) {
    await writeExecutionResultsReport(report);
  }

  if (args.json) {
    process.stdout.write(`${JSON.stringify(report, null, 2)}\n`);
  } else {
    console.log(
      `execution results: ${report.summary.artifactCount} artifacts, ${report.summary.passCount} pass, ${report.summary.failCount} fail, ${report.summary.blockedCount} blocked`,
    );
  }
}

function parseArgs(argv) {
  const args = {
    json: false,
    resultsDir: path.join(repoRoot, ".crabpot/results"),
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
    if (arg === "--results-dir") {
      args.resultsDir = path.resolve(argv[index + 1]);
      index += 1;
      continue;
    }
    if (arg === "--write") {
      args.write = true;
    }
  }

  return args;
}

export async function buildExecutionResultsReport(options = {}) {
  return pluginInspector.buildExecutionResultsReport({
    ...crabpotExecutionResultsOptions,
    ...options,
    rootDir: options.rootDir ?? crabpotExecutionResultsOptions.rootDir,
    resultsDir: options.resultsDir ?? crabpotExecutionResultsOptions.resultsDir,
  });
}

export async function writeExecutionResultsReport(report, options = {}) {
  return pluginInspector.writeExecutionResultsReport(report, {
    ...crabpotExecutionResultsOptions,
    ...options,
    rootDir: options.rootDir ?? crabpotExecutionResultsOptions.rootDir,
  });
}

export function renderExecutionResultsMarkdown(report, options = {}) {
  return pluginInspector.renderExecutionResultsMarkdown(report, {
    ...crabpotExecutionResultsOptions,
    ...options,
  });
}
