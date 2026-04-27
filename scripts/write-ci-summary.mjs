#!/usr/bin/env node
import { appendFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { repoRoot } from "./manifest-lib.mjs";
import { loadPluginInspector } from "./plugin-inspector-source.mjs";

export const defaultCiSummaryMarkdownPath = path.join(repoRoot, "reports/crabpot-ci-summary.md");
export const defaultCiSummaryJsonPath = path.join(repoRoot, "reports/crabpot-ci-summary.json");

export const crabpotCiReportPaths = {
  compatibility: "reports/crabpot-report.json",
  capture: "reports/crabpot-capture.json",
  synthetic: "reports/crabpot-synthetic-probes.json",
  coldImport: "reports/crabpot-cold-import.json",
  workspace: "reports/crabpot-workspace-plan.json",
  platform: "reports/crabpot-platform-probes.json",
  importLoop: "reports/crabpot-import-loop-profile.json",
  execution: "reports/crabpot-execution-results.json",
  runtimeProfile: "reports/crabpot-runtime-profile.json",
  refDiff: "reports/crabpot-ref-diff.json",
  profileDiff: "reports/crabpot-profile-diff.json",
  ciPolicy: "reports/crabpot-ci-policy.json",
};

const pluginInspector = await loadPluginInspector();

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  await main();
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const summary = await buildCiSummary({
    mode: args.mode,
    openclawLabel: args.openclawLabel,
    reportsDir: args.reportsDir,
  });

  if (args.write) {
    await writeCiSummary(summary);
  }
  if (args.githubStepSummary && process.env.GITHUB_STEP_SUMMARY) {
    await appendFile(process.env.GITHUB_STEP_SUMMARY, `${renderCiSummaryMarkdown(summary)}\n`, "utf8");
  }
  if (args.json) {
    process.stdout.write(`${JSON.stringify(summary, null, 2)}\n`);
  } else {
    console.log(
      `ci summary: ${summary.status}; ${summary.summary.breakages} breakages, ${summary.summary.policyFailures} policy failures, ${summary.summary.refDiffFailures} ref diff failures`,
    );
  }
}

function parseArgs(argv) {
  const args = {
    githubStepSummary: false,
    json: false,
    mode: process.env.CRABPOT_CI_MODE ?? "local",
    openclawLabel: process.env.CRABPOT_OPENCLAW_LABEL ?? "",
    reportsDir: path.join(repoRoot, "reports"),
    write: true,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--check") {
      args.write = false;
      continue;
    }
    if (arg === "--github-step-summary") {
      args.githubStepSummary = true;
      continue;
    }
    if (arg === "--json") {
      args.json = true;
      continue;
    }
    if (arg === "--mode") {
      args.mode = argv[index + 1];
      index += 1;
      continue;
    }
    if (arg === "--openclaw-label") {
      args.openclawLabel = argv[index + 1];
      index += 1;
      continue;
    }
    if (arg === "--reports-dir") {
      args.reportsDir = path.resolve(argv[index + 1]);
      index += 1;
      continue;
    }
    if (arg === "--write") {
      args.write = true;
    }
  }

  return args;
}

export async function buildCiSummary(options = {}) {
  return pluginInspector.buildCiSummary({
    artifactBaseDir: repoRoot,
    generatedAt: "deterministic",
    mode: options.mode ?? "local",
    openclawLabel: options.openclawLabel ?? "",
    reportPaths: crabpotCiReportPaths,
    reports: options.reports,
    reportsDir: options.reportsDir ?? path.join(repoRoot, "reports"),
    title: "Crabpot CI Summary",
  });
}

export async function writeCiSummary(summary, options = {}) {
  return pluginInspector.writeCiSummary(summary, {
    jsonPath: options.jsonPath ?? defaultCiSummaryJsonPath,
    markdownPath: options.markdownPath ?? defaultCiSummaryMarkdownPath,
  });
}

export function renderCiSummaryMarkdown(summary) {
  return pluginInspector.renderCiSummaryMarkdown(summary);
}
