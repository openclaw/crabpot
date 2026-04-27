#!/usr/bin/env node
import path from "node:path";
import { pathToFileURL } from "node:url";
import { repoRoot } from "./manifest-lib.mjs";
import { loadPluginInspector } from "./plugin-inspector-source.mjs";
import { buildReport } from "./report-lib.mjs";

export const defaultRefDiffJsonPath = path.join(repoRoot, "reports/crabpot-ref-diff.json");
export const defaultRefDiffMarkdownPath = path.join(repoRoot, "reports/crabpot-ref-diff.md");

const pluginInspector = await loadPluginInspector();

const crabpotRefDiffOptions = {
  jsonPath: defaultRefDiffJsonPath,
  markdownPath: defaultRefDiffMarkdownPath,
  reportTitle: "Crabpot OpenClaw Ref Diff",
  rootDir: repoRoot,
};

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  await main();
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const diff = await buildRefDiff({
    baseLabel: args.baseLabel,
    baseOpenclawPath: args.baseOpenclawPath,
    headLabel: args.headLabel,
    headOpenclawPath: args.headOpenclawPath,
  });
  const errors = validateRefDiff(diff, { strict: args.strict });

  if (args.write) {
    await writeRefDiff(diff);
  }

  if (args.json) {
    process.stdout.write(`${JSON.stringify(diff, null, 2)}\n`);
  } else {
    console.log(
      `ref diff: ${diff.status}; ${diff.summary.hardRegressionCount} hard regressions, ${diff.summary.warningRegressionCount} warnings, ${diff.summary.newP1IssueCount} new P1 issues`,
    );
  }

  if (errors.length > 0) {
    throw new Error(errors.join("\n"));
  }
}

function parseArgs(argv) {
  const args = {
    baseLabel: "base",
    baseOpenclawPath: "./openclaw-base",
    headLabel: "head",
    headOpenclawPath: "./openclaw-head",
    json: false,
    strict: false,
    write: true,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--base-openclaw") {
      args.baseOpenclawPath = argv[index + 1];
      index += 1;
      continue;
    }
    if (arg === "--head-openclaw") {
      args.headOpenclawPath = argv[index + 1];
      index += 1;
      continue;
    }
    if (arg === "--base-label") {
      args.baseLabel = argv[index + 1];
      index += 1;
      continue;
    }
    if (arg === "--head-label") {
      args.headLabel = argv[index + 1];
      index += 1;
      continue;
    }
    if (arg === "--check") {
      args.write = false;
      continue;
    }
    if (arg === "--json") {
      args.json = true;
      continue;
    }
    if (arg === "--strict") {
      args.strict = true;
      continue;
    }
    if (arg === "--write") {
      args.write = true;
    }
  }

  return args;
}

export async function buildRefDiff(options = {}) {
  const baseReport =
    options.baseReport ??
    (await buildReport({
      generatedAt: "deterministic",
      openclawPath: options.baseOpenclawPath,
    }));
  const headReport =
    options.headReport ??
    (await buildReport({
      generatedAt: "deterministic",
      openclawPath: options.headOpenclawPath,
    }));

  return pluginInspector.buildRefDiff({
    ...crabpotRefDiffOptions,
    ...options,
    baseReport,
    headReport,
  });
}

export function validateRefDiff(diff, options = {}) {
  return pluginInspector.validateRefDiff(diff, options);
}

export async function writeRefDiff(diff, options = {}) {
  return pluginInspector.writeRefDiff(diff, {
    ...crabpotRefDiffOptions,
    ...options,
  });
}

export function renderRefDiffMarkdown(diff, options = {}) {
  return pluginInspector.renderRefDiffMarkdown(diff, {
    ...crabpotRefDiffOptions,
    ...options,
  });
}
