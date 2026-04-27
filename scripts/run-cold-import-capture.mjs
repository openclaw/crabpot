#!/usr/bin/env node
import { pathToFileURL } from "node:url";
import { loadPluginInspector } from "./plugin-inspector-source.mjs";

const pluginInspector = await loadPluginInspector();

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  await main();
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const entrypoint = args.entrypoint;
  if (!entrypoint) {
    throw new Error("usage: run-cold-import-capture.mjs <entrypoint> [--output <path>]");
  }
  if (process.env.CRABPOT_EXECUTE_ISOLATED !== "1") {
    throw new Error("cold import execution requires CRABPOT_EXECUTE_ISOLATED=1");
  }

  const result = await captureEntrypoint(entrypoint);
  await writeJsonResult(result, args.output);
}

function parseArgs(argv) {
  const args = {
    entrypoint: null,
    output: null,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--output") {
      args.output = argv[index + 1];
      index += 1;
      continue;
    }
    if (!args.entrypoint) {
      args.entrypoint = arg;
    }
  }

  return args;
}

export async function captureEntrypoint(entrypoint, options = {}) {
  return pluginInspector.captureEntrypoint(entrypoint, options);
}

async function writeJsonResult(result, outputPath) {
  const json = `${JSON.stringify(result, null, 2)}\n`;
  if (!outputPath) {
    process.stdout.write(json);
    return;
  }
  await pluginInspector.writeArtifacts([{ path: outputPath, content: json }]);
}
