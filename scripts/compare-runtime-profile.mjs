#!/usr/bin/env node
import { existsSync } from "node:fs";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { defaultCiPolicyPath } from "./check-ci-policy.mjs";
import { repoRoot } from "./manifest-lib.mjs";
import { defaultProfileJsonPath } from "./profile-contract-runtime.mjs";

export const defaultProfileDiffJsonPath = path.join(repoRoot, "reports/crabpot-profile-diff.json");
export const defaultProfileDiffMarkdownPath = path.join(repoRoot, "reports/crabpot-profile-diff.md");

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
    baselinePath: path.join(repoRoot, "baselines/runtime/main.json"),
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
  const policy = options.policy ?? (await readJson(options.policyPath ?? defaultCiPolicyPath));
  const current = options.current ?? (await readJson(options.currentPath ?? defaultProfileJsonPath));
  const baseline =
    options.baseline ?? (await readOptionalJson(options.baselinePath ?? path.join(repoRoot, "baselines/runtime/main.json")));
  const checks = baseline ? compareProfiles({ baseline, current, policy, strict: options.strict }) : [];

  if (!baseline) {
    checks.push({
      id: "profile.baseline.missing",
      action: "warn",
      metric: "baseline",
      message: "runtime profile baseline is missing",
      baseline: null,
      current: null,
      delta: null,
    });
  }

  return {
    generatedAt: "deterministic",
    status: checks.some((check) => check.action === "fail") ? "fail" : "pass",
    strict: Boolean(options.strict),
    baseline: baseline ? profileSummary(baseline) : null,
    current: profileSummary(current),
    thresholds: policy.thresholds,
    summary: {
      checkCount: checks.length,
      failCount: checks.filter((check) => check.action === "fail").length,
      warnCount: checks.filter((check) => check.action === "warn").length,
      passCount: checks.filter((check) => check.action === "pass").length,
    },
    checks,
  };
}

function compareProfiles({ baseline, current, policy, strict }) {
  const thresholds = policy.thresholds;
  const strictEligible = current.runs >= thresholds.strictMinimumSamples;
  const checks = [
    percentCheck({
      id: "profile.wall-p95",
      metric: "p95WallMs",
      baseline: baseline.summary.p95WallMs,
      current: current.summary.p95WallMs,
      threshold: thresholds.wallP95RegressionPercent,
      strict,
      strictEligible,
    }),
    absoluteCheck({
      id: "profile.peak-rss",
      metric: "maxPeakRssMb",
      baseline: baseline.summary.maxPeakRssMb,
      current: current.summary.maxPeakRssMb,
      threshold: thresholds.peakRssRegressionMb,
      strict,
      strictEligible,
    }),
    absoluteCheck({
      id: "profile.node-boot",
      metric: "nodeBootWallMs",
      baseline: commandWall(baseline, "node-boot"),
      current: commandWall(current, "node-boot"),
      threshold: thresholds.bootRegressionMs,
      strict,
      strictEligible,
    }),
    ...registrySurfaceChecks(baseline, current),
  ];
  return checks;
}

function percentCheck({ id, metric, baseline, current, threshold, strict, strictEligible }) {
  const delta = current - baseline;
  const percent = baseline > 0 ? Math.round((delta / baseline) * 1000) / 10 : 0;
  const exceeded = delta > 0 && percent > threshold;
  return {
    id,
    action: exceeded ? (strict && strictEligible ? "fail" : "warn") : "pass",
    metric,
    message: exceeded
      ? `${metric} regressed ${percent}% over baseline`
      : `${metric} stayed within ${threshold}% regression threshold`,
    baseline,
    current,
    delta,
    percent,
  };
}

function absoluteCheck({ id, metric, baseline, current, threshold, strict, strictEligible }) {
  const delta = current - baseline;
  const exceeded = delta > threshold;
  return {
    id,
    action: exceeded ? (strict && strictEligible ? "fail" : "warn") : "pass",
    metric,
    message: exceeded
      ? `${metric} regressed ${delta} over baseline`
      : `${metric} stayed within ${threshold} absolute regression threshold`,
    baseline,
    current,
    delta,
  };
}

function registrySurfaceChecks(baseline, current) {
  return [
    "compatRecords",
    "hookNames",
    "apiRegistrars",
    "capturedRegistrars",
    "sdkExports",
    "manifestFields",
    "manifestContractFields",
  ].map((metric) => ({
    id: `registry.${metric}`,
    action: "pass",
    metric,
    message: "registry surface delta is tracked as context",
    baseline: baseline.targetOpenClaw[metric],
    current: current.targetOpenClaw[metric],
    delta: current.targetOpenClaw[metric] - baseline.targetOpenClaw[metric],
  }));
}

function commandWall(profile, commandId) {
  return profile.commands.find((command) => command.id === commandId)?.wallMs?.median ?? 0;
}

function profileSummary(profile) {
  return {
    runs: profile.runs,
    summary: profile.summary,
    targetOpenClaw: profile.targetOpenClaw,
    fixtureInventory: profile.fixtureInventory,
  };
}

export function validateProfileDiff(diff) {
  return diff.checks
    .filter((check) => check.action === "fail")
    .map((check) => `${check.id}: ${check.message}: baseline=${check.baseline}, current=${check.current}`);
}

export async function writeProfileDiff(diff, options = {}) {
  const jsonPath = options.jsonPath ?? defaultProfileDiffJsonPath;
  const markdownPath = options.markdownPath ?? defaultProfileDiffMarkdownPath;
  await mkdir(path.dirname(jsonPath), { recursive: true });
  await mkdir(path.dirname(markdownPath), { recursive: true });
  await writeFile(jsonPath, `${JSON.stringify(diff, null, 2)}\n`, "utf8");
  await writeFile(markdownPath, `${renderProfileDiffMarkdown(diff)}\n`, "utf8");
  return { jsonPath, markdownPath };
}

export function renderProfileDiffMarkdown(diff) {
  return [
    "# Crabpot Runtime Profile Diff",
    "",
    `Generated: ${diff.generatedAt}`,
    `Status: ${diff.status.toUpperCase()}`,
    `Strict: ${diff.strict}`,
    "",
    "## Summary",
    "",
    markdownTable(
      [
        ["Checks", diff.summary.checkCount],
        ["Fail", diff.summary.failCount],
        ["Warn", diff.summary.warnCount],
        ["Pass", diff.summary.passCount],
        ["Current runs", diff.current.runs],
        ["Baseline runs", diff.baseline?.runs ?? "-"],
      ],
      ["Metric", "Value"],
    ),
    "",
    "## Checks",
    "",
    markdownTable(
      diff.checks.map((check) => [
        check.action,
        check.id,
        check.metric,
        check.baseline ?? "-",
        check.current ?? "-",
        check.delta ?? "-",
        check.percent === undefined ? "-" : `${check.percent}%`,
        check.message,
      ]),
      ["Action", "ID", "Metric", "Baseline", "Current", "Delta", "Percent", "Message"],
    ),
  ].join("\n");
}

async function readJson(jsonPath) {
  return JSON.parse(await readFile(path.resolve(repoRoot, jsonPath), "utf8"));
}

async function readOptionalJson(jsonPath) {
  const resolved = path.resolve(repoRoot, jsonPath);
  return existsSync(resolved) ? readJson(resolved) : null;
}

function markdownTable(rows, headers) {
  if (rows.length === 0) {
    return "_none_";
  }

  const allRows = [headers, ...rows.map((row) => row.map((cell) => String(cell ?? "-")))];
  const widths = headers.map((_, columnIndex) => Math.max(...allRows.map((row) => row[columnIndex].length)));
  const renderRow = (row) => `| ${row.map((cell, index) => cell.padEnd(widths[index])).join(" | ")} |`;
  return [
    renderRow(headers),
    renderRow(widths.map((width) => "-".repeat(width))),
    ...rows.map((row) => renderRow(row.map((cell) => String(cell ?? "-")))),
  ].join("\n");
}
