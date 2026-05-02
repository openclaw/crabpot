#!/usr/bin/env node
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { loadPluginInspectorPublicApi } from "./plugin-inspector-source.mjs";

const pluginInspector = await loadPluginInspectorPublicApi();

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  await main();
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const entrypoint = args.entrypoint;
  if (!entrypoint) {
    throw new Error(
      "usage: run-cold-import-capture.mjs <entrypoint> [--mock-sdk] [--plugin-root <path>] [--cwd <path>] [--output <path>]",
    );
  }
  if (process.env.CRABPOT_EXECUTE_ISOLATED !== "1") {
    throw new Error("cold import execution requires CRABPOT_EXECUTE_ISOLATED=1");
  }

  const result = await captureEntrypoint(entrypoint, {
    cwd: args.cwd,
    mockSdk: args.mockSdk,
    pluginRoot: args.pluginRoot,
  });
  await writeJsonResult(result, args.output);
}

function parseArgs(argv) {
  const args = {
    cwd: undefined,
    entrypoint: null,
    mockSdk: false,
    output: null,
    pluginRoot: undefined,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--cwd") {
      args.cwd = argv[index + 1];
      index += 1;
      continue;
    }
    if (arg === "--mock-sdk") {
      args.mockSdk = true;
      continue;
    }
    if (arg === "--no-mock-sdk") {
      args.mockSdk = false;
      continue;
    }
    if (arg === "--output") {
      args.output = argv[index + 1];
      index += 1;
      continue;
    }
    if (arg === "--plugin-root") {
      args.pluginRoot = argv[index + 1];
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
  return pluginInspector.capturePluginEntrypoint(entrypoint, options);
}

async function writeJsonResult(result, outputPath) {
  const json = `${JSON.stringify(result, null, 2)}\n`;
  if (!outputPath) {
    process.stdout.write(json);
    return;
  }
  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, json, "utf8");
}
