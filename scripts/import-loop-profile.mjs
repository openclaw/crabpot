#!/usr/bin/env node
import path from "node:path";
import { pathToFileURL } from "node:url";
import { repoRoot } from "./manifest-lib.mjs";
import { loadPluginInspector } from "./plugin-inspector-source.mjs";

export const defaultImportLoopJsonPath = path.join(repoRoot, "reports/crabpot-import-loop-profile.json");
export const defaultImportLoopMarkdownPath = path.join(repoRoot, "reports/crabpot-import-loop-profile.md");

const pluginInspector = await loadPluginInspector();

const crabpotImportLoopProfileOptions = {
  captureScript: "scripts/run-cold-import-capture.mjs",
  jsonPath: defaultImportLoopJsonPath,
  markdownPath: defaultImportLoopMarkdownPath,
  optInEnv: "CRABPOT_EXECUTE_ISOLATED",
  outputDir: ".crabpot/import-loop",
  reportTitle: "Crabpot Import Loop Profile",
  rootDir: repoRoot,
};

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  await main();
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const report = await buildImportLoopProfile({
    entrypoint: args.entrypoint,
    runs: args.runs,
  });
  const errors = validateImportLoopProfile(report);

  if (args.write) {
    await writeImportLoopProfile(report);
  }
  if (args.json) {
    process.stdout.write(`${JSON.stringify(report, null, 2)}\n`);
  } else {
    console.log(
      `import loop profile: ${report.summary.runs} runs, p50 ${report.summary.p50WallMs}ms, max RSS ${report.summary.maxPeakRssMb}MB`,
    );
  }

  if (errors.length > 0) {
    throw new Error(errors.join("\n"));
  }
}

function parseArgs(argv) {
  const args = {
    entrypoint: "test/fixtures/lazy-import-plugin.mjs",
    json: false,
    runs: 3,
    write: true,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--check") {
      args.write = false;
      continue;
    }
    if (arg === "--entrypoint") {
      args.entrypoint = argv[index + 1];
      index += 1;
      continue;
    }
    if (arg === "--json") {
      args.json = true;
      continue;
    }
    if (arg === "--runs") {
      args.runs = Number.parseInt(argv[index + 1], 10);
      index += 1;
      continue;
    }
    if (arg === "--write") {
      args.write = true;
    }
  }

  if (!Number.isInteger(args.runs) || args.runs < 1 || args.runs > 20) {
    throw new Error("--runs must be an integer between 1 and 20");
  }
  return args;
}

export async function buildImportLoopProfile(options = {}) {
  return pluginInspector.buildImportLoopProfile({
    ...crabpotImportLoopProfileOptions,
    ...options,
    rootDir: options.rootDir ?? crabpotImportLoopProfileOptions.rootDir,
  });
}

export function validateImportLoopProfile(report) {
  return pluginInspector.validateImportLoopProfile(report);
}

export async function writeImportLoopProfile(report, options = {}) {
  return pluginInspector.writeImportLoopProfile(report, {
    ...crabpotImportLoopProfileOptions,
    ...options,
    rootDir: options.rootDir ?? crabpotImportLoopProfileOptions.rootDir,
  });
}

export function renderImportLoopProfileMarkdown(report, options = {}) {
  return pluginInspector.renderImportLoopProfileMarkdown(report, {
    ...crabpotImportLoopProfileOptions,
    ...options,
  });
}
