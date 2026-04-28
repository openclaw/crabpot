#!/usr/bin/env node
import path from "node:path";
import { pathToFileURL } from "node:url";
import { defaultCiPolicyPath } from "./check-ci-policy.mjs";
import { repoRoot } from "./manifest-lib.mjs";
import { loadPluginInspectorPublicApi } from "./plugin-inspector-source.mjs";
import { defaultProfileJsonPath } from "./profile-contract-runtime.mjs";

export const defaultProfileDiffJsonPath = path.join(repoRoot, "reports/crabpot-profile-diff.json");
export const defaultProfileDiffMarkdownPath = path.join(repoRoot, "reports/crabpot-profile-diff.md");

const pluginInspector = await loadPluginInspectorPublicApi();

const crabpotProfileDiffOptions = {
  baselinePath: "baselines/runtime/main.json",
  currentPath: defaultProfileJsonPath,
  jsonPath: defaultProfileDiffJsonPath,
  markdownPath: defaultProfileDiffMarkdownPath,
  policyPath: defaultCiPolicyPath,
  reportTitle: "Crabpot Runtime Profile Diff",
  rootDir: repoRoot,
};

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  await main();
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const diff = await buildProfileDiff({
    baselinePath: args.baselinePath,
    currentPath: args.currentPath,
    policyPath: args.policyPath,
    strict: args.strict,
  });
  const errors = validateProfileDiff(diff);

  if (args.write) {
    await writeProfileDiff(diff);
  }

  if (args.json) {
    process.stdout.write(`${JSON.stringify(diff, null, 2)}\n`);
  } else {
    console.log(
      `profile diff: ${diff.status}; ${diff.summary.failCount} fail, ${diff.summary.warnCount} warn, ${diff.summary.passCount} pass`,
    );
  }

  if (errors.length > 0) {
    throw new Error(errors.join("\n"));
  }
}

function parseArgs(argv) {
  const args = {
    baselinePath: "baselines/runtime/main.json",
    currentPath: defaultProfileJsonPath,
    json: false,
    policyPath: defaultCiPolicyPath,
    strict: false,
    write: true,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--baseline") {
      args.baselinePath = path.resolve(argv[index + 1]);
      index += 1;
      continue;
    }
    if (arg === "--current") {
      args.currentPath = path.resolve(argv[index + 1]);
      index += 1;
      continue;
    }
    if (arg === "--policy") {
      args.policyPath = path.resolve(argv[index + 1]);
      index += 1;
      continue;
    }
    if (arg === "--strict") {
      args.strict = true;
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
    if (arg === "--write") {
      args.write = true;
    }
  }

  return args;
}

export async function buildProfileDiff(options = {}) {
  return pluginInspector.buildProfileDiff({
    ...crabpotProfileDiffOptions,
    ...options,
    rootDir: options.rootDir ?? crabpotProfileDiffOptions.rootDir,
  });
}

export function validateProfileDiff(diff) {
  return pluginInspector.validateProfileDiff(diff);
}

export async function writeProfileDiff(diff, options = {}) {
  return pluginInspector.writeProfileDiff(diff, {
    ...crabpotProfileDiffOptions,
    ...options,
    rootDir: options.rootDir ?? crabpotProfileDiffOptions.rootDir,
  });
}

export function renderProfileDiffMarkdown(diff, options = {}) {
  return pluginInspector.renderProfileDiffMarkdown(diff, {
    ...crabpotProfileDiffOptions,
    ...options,
  });
}
