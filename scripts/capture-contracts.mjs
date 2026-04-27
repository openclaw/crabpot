#!/usr/bin/env node
import path from "node:path";
import { pathToFileURL } from "node:url";
import { repoRoot } from "./manifest-lib.mjs";
import { loadPluginInspector } from "./plugin-inspector-source.mjs";
import { buildReport } from "./report-lib.mjs";

export const defaultCaptureJsonPath = path.join(repoRoot, "reports/crabpot-capture.json");
export const defaultCaptureMarkdownPath = path.join(repoRoot, "reports/crabpot-capture.md");

const pluginInspector = await loadPluginInspector();

export const REGISTRATION_ASSERTIONS = pluginInspector.defaultRegistrationAssertions;
export const REGISTRATION_ARGUMENTS = pluginInspector.defaultRegistrationArguments;
export const HOOK_ASSERTIONS = pluginInspector.defaultHookAssertions;
export const HOOK_EVENTS = pluginInspector.defaultHookEvents;
export const HOOK_CONTEXTS = pluginInspector.defaultHookContexts;
export const validateContractCapture = pluginInspector.validateContractCapture;

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  await main();
}

async function main() {
  const parsedArgs = parseArgs(process.argv.slice(2));
  const capture = await buildContractCapture({ openclawPath: parsedArgs.openclawPath });
  const errors = validateContractCapture(capture);

  if (parsedArgs.write) {
    await writeContractCapture(capture);
  }

  if (parsedArgs.json) {
    console.log(JSON.stringify(capture, null, 2));
  } else {
    console.log(
      `contract capture: ${capture.summary.registrationCount} registrations, ${capture.summary.hookCount} hooks, ${capture.summary.sdkImportCount} sdk imports, ${capture.summary.issueProbeCount} issue probes`,
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

export async function buildContractCapture(options = {}) {
  const report = options.report ?? (await buildReport({ openclawPath: options.openclawPath }));
  return pluginInspector.buildContractCapture({ report });
}

export async function writeContractCapture(capture, options = {}) {
  const jsonPath = options.jsonPath ?? defaultCaptureJsonPath;
  const markdownPath = options.markdownPath ?? defaultCaptureMarkdownPath;
  return pluginInspector.writeContractCapture(capture, {
    jsonPath,
    markdownPath,
    title: "Crabpot Contract Capture",
  });
}

export function renderContractCaptureMarkdown(capture) {
  return pluginInspector.renderContractCaptureMarkdown(capture, { title: "Crabpot Contract Capture" });
}
