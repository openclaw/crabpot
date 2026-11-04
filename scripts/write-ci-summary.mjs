#!/usr/bin/env node
import { appendFile, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { repoRoot } from "./manifest-lib.mjs";
import { loadPluginInspectorPublicApi } from "./plugin-inspector-source.mjs";
import { ciReportPaths, clearCiSummary, collectCiReports, readCiRun } from "./ci-report-handoff.mjs";

export const defaultCiSummaryMarkdownPath = path.join(repoRoot, "reports/crabpot-ci-summary.md");
export const defaultCiSummaryJsonPath = path.join(repoRoot, "reports/crabpot-ci-summary.json");

export const crabpotCiReportPaths = ciReportPaths;
let pluginInspector;

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  await main();
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.currentRun) clearCiSummary();
  const summary = await buildCiSummary({
    mode: args.mode,
    openclawLabel: args.openclawLabel,
    reportsDir: args.reportsDir,
    currentRun: args.currentRun,
    outcomes: args.currentRun ? JSON.parse(process.env.CRABPOT_CI_STEP_OUTCOMES ?? "{}") : undefined,
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
    currentRun: false,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--run-report") {
      args.currentRun = true;
      continue;
    }
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
  const root = options.root ?? repoRoot;
  let coverage;
  if (options.currentRun) {
    try {
      coverage = collectCiReports(readCiRun(root), { root, outcomes: options.outcomes });
    } catch (error) {
      coverage = { reports: {}, paths: {}, steps: [], findings: [`Current-run evidence unavailable: ${error.message}`] };
    }
  }
  let api;
  try {
    api = await loadPluginInspectorPublicApi({ prepare: !options.currentRun });
  } catch (error) {
    if (!options.currentRun) throw error;
    coverage.findings.push(`Prepared summary API unavailable: ${error.message}`);
  }
  if (!api) {
    // Bootstrap may be the failed step. Publish its incomplete result without
    // calling any Inspector resolver, installer, or inspection fallback.
    return {
      title: "Crabpot CI Summary", mode: options.mode ?? "local", openclawLabel: options.openclawLabel ?? "",
      status: "fail", incomplete: true, coverage: { steps: coverage.steps, findings: coverage.findings },
      summary: { breakages: null, policyFailures: coverage.findings.length || 1, refDiffFailures: null },
    };
  }
  pluginInspector = api;
  const reports = coverage ? { ...coverage.reports } : options.reports;
  if (coverage) {
    const checks = coverage.findings.map((message, index) => ({
      action: "fail", id: `ci-handoff.${index + 1}`, message, evidence: [],
    }));
    reports.ciPolicy = {
      ...reports.ciPolicy,
      summary: { ...reports.ciPolicy?.summary, failCount: (reports.ciPolicy?.summary?.failCount ?? 0) + checks.length },
      checks: [...checks, ...(reports.ciPolicy?.checks ?? [])],
    };
  }
  const summary = await pluginInspector.buildCiSummary({
    artifactBaseDir: root,
    generatedAt: "deterministic",
    mode: options.mode ?? "local",
    openclawLabel: options.openclawLabel ?? "",
    reportPaths: coverage?.paths ?? crabpotCiReportPaths,
    reports,
    reportsDir: options.reportsDir ?? path.join(repoRoot, "reports"),
    title: "Crabpot CI Summary",
  });
  if (coverage) summary.coverage = { steps: coverage.steps, findings: coverage.findings };
  return summary;
}

export async function writeCiSummary(summary, options = {}) {
  const jsonPath = options.jsonPath ?? defaultCiSummaryJsonPath;
  const markdownPath = options.markdownPath ?? defaultCiSummaryMarkdownPath;
  if (!summary.incomplete) {
    const paths = await pluginInspector.writeCiSummary(summary, { jsonPath, markdownPath });
    if (summary.coverage) await appendFile(markdownPath, `${renderCoverage(summary)}\n`);
    return paths;
  }
  await Promise.all([mkdir(path.dirname(jsonPath), { recursive: true }), mkdir(path.dirname(markdownPath), { recursive: true })]);
  await Promise.all([
    writeFile(jsonPath, `${JSON.stringify(summary, null, 2)}\n`),
    writeFile(markdownPath, `${renderCiSummaryMarkdown(summary)}\n`),
  ]);
  return { jsonPath, markdownPath };
}

export function renderCiSummaryMarkdown(summary) {
  const markdown = summary.incomplete
    ? `# Crabpot CI Summary\n\nStatus: FAIL (incomplete)\nMode: ${summary.mode}\nOpenClaw: ${summary.openclawLabel || "-"}\n\nInspector summary API was not prepared; no compatibility verdict is available.`
    : pluginInspector.renderCiSummaryMarkdown(summary);
  return markdown + renderCoverage(summary);
}

function renderCoverage(summary) {
  if (!summary.coverage) return "";
  const { steps, findings } = summary.coverage;
  const selected = new Set(steps.map((step) => step.report));
  return ["", "", "## Current-run coverage", "",
    ...steps.map((step) => `- ${step.id}: ${step.state === "running" ? "interrupted" : step.state}${step.command ? ` — ${step.command}` : ""}`),
    ...findings.map((finding) => `- Incomplete: ${finding}`),
    `- Not selected: ${Object.keys(ciReportPaths).filter((key) => !selected.has(key)).join(", ") || "none"}`,
  ].join("\n");
}
