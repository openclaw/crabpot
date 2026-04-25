#!/usr/bin/env node
import { existsSync } from "node:fs";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { repoRoot } from "./manifest-lib.mjs";
import { buildReport, defaultJsonReportPath } from "./report-lib.mjs";
import { defaultExecutionResultsJsonPath } from "./summarize-execution-results.mjs";
import { defaultRefDiffJsonPath } from "./compare-openclaw-refs.mjs";

export const defaultCiPolicyPath = path.join(repoRoot, "crabpot.ci-policy.json");
export const defaultCiPolicyReportJsonPath = path.join(repoRoot, "reports/crabpot-ci-policy.json");
export const defaultCiPolicyReportMarkdownPath = path.join(repoRoot, "reports/crabpot-ci-policy.md");

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  await main();
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const report = await buildCiPolicyReport({
    executionResultsPath: args.executionResultsPath,
    policyPath: args.policyPath,
    refDiffPath: args.refDiffPath,
    reportPath: args.reportPath,
    strict: args.strict,
  });
  const errors = validateCiPolicyReport(report);

  if (args.write) {
    await writeCiPolicyReport(report);
  }

  if (args.json) {
    process.stdout.write(`${JSON.stringify(report, null, 2)}\n`);
  } else {
    console.log(
      `ci policy: ${report.status}; ${report.summary.failCount} fail, ${report.summary.warnCount} warn, ${report.summary.passCount} pass`,
    );
  }

  if (errors.length > 0) {
    throw new Error(errors.join("\n"));
  }
}

function parseArgs(argv) {
  const args = {
    executionResultsPath: defaultExecutionResultsJsonPath,
    json: false,
    policyPath: defaultCiPolicyPath,
    refDiffPath: defaultRefDiffJsonPath,
    reportPath: defaultJsonReportPath,
    strict: false,
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
    if (arg === "--policy") {
      args.policyPath = path.resolve(argv[index + 1]);
      index += 1;
      continue;
    }
    if (arg === "--report") {
      args.reportPath = path.resolve(argv[index + 1]);
      index += 1;
      continue;
    }
    if (arg === "--execution-results") {
      args.executionResultsPath = path.resolve(argv[index + 1]);
      index += 1;
      continue;
    }
    if (arg === "--ref-diff") {
      args.refDiffPath = path.resolve(argv[index + 1]);
      index += 1;
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

export async function buildCiPolicyReport(options = {}) {
  const policy = options.policy ?? (await readJson(options.policyPath ?? defaultCiPolicyPath));
  validatePolicy(policy);
  const compatibilityReport =
    options.compatibilityReport ??
    (await readOptionalJson(options.reportPath ?? defaultJsonReportPath)) ??
    (await buildReport({ generatedAt: "deterministic" }));
  const executionResults =
    options.executionResults ??
    (await readOptionalJson(options.executionResultsPath ?? defaultExecutionResultsJsonPath));
  const refDiff = options.refDiff ?? (await readOptionalJson(options.refDiffPath ?? defaultRefDiffJsonPath));

  const checks = [
    ...compatibilityChecks(compatibilityReport),
    ...refDiffChecks(refDiff, { strict: options.strict }),
    ...executionChecks(executionResults, policy, { strict: options.strict }),
  ].sort((left, right) => actionRank(left.action) - actionRank(right.action) || left.id.localeCompare(right.id));

  return {
    generatedAt: "deterministic",
    status: checks.some((check) => check.action === "fail") ? "fail" : "pass",
    strict: Boolean(options.strict),
    policy: {
      allowedBlocked: policy.allowedBlocked.length,
      expectedWarnings: policy.expectedWarnings.length,
      fixtureSets: Object.keys(policy.fixtureSets).sort(),
      thresholds: policy.thresholds,
    },
    summary: {
      checkCount: checks.length,
      failCount: checks.filter((check) => check.action === "fail").length,
      warnCount: checks.filter((check) => check.action === "warn").length,
      passCount: checks.filter((check) => check.action === "pass").length,
    },
    checks,
  };
}

function compatibilityChecks(report) {
  const checks = [];
  if (!report) {
    checks.push({
      id: "compatibility-report.missing",
      action: "fail",
      message: "compatibility report is missing",
      evidence: [defaultJsonReportPath],
    });
    return checks;
  }
  checks.push({
    id: "compatibility-report.breakages",
    action: report.summary.breakageCount > 0 ? "fail" : "pass",
    message: `${report.summary.breakageCount} hard breakages`,
    evidence: (report.breakages ?? []).map((finding) => `${finding.fixture}:${finding.code}`),
  });
  checks.push({
    id: "compatibility-report.p1-issues",
    action: "pass",
    message: `${report.summary.p1IssueCount} P1 issues tracked`,
    evidence: (report.issues ?? [])
      .filter((issue) => issue.severity === "P1")
      .map((issue) => `${issue.fixture}:${issue.code}`),
  });
  return checks;
}

function refDiffChecks(refDiff, options) {
  if (!refDiff) {
    return [
      {
        id: "ref-diff.not-run",
        action: "pass",
        message: "ref diff artifact was not present for this CI mode",
        evidence: [],
      },
    ];
  }

  return (refDiff.regressions ?? []).map((regression) => ({
    id: `ref-diff.${regression.code}`,
    action: regression.action === "fail" || (options.strict && regression.action === "warn") ? "fail" : "warn",
    message: regression.message,
    evidence: regression.evidence ?? [],
  }));
}

function executionChecks(executionResults, policy, options) {
  if (!executionResults) {
    return [
      {
        id: "execution-results.not-run",
        action: "pass",
        message: "isolated execution artifact was not present for this CI mode",
        evidence: [],
      },
    ];
  }

  const checks = [
    {
      id: "execution-results.failures",
      action: executionResults.summary.failCount > 0 ? "fail" : "pass",
      message: `${executionResults.summary.failCount} failed synthetic probes`,
      evidence: failedExecutionEvidence(executionResults),
    },
  ];

  const blocked = executionResults.artifacts.flatMap((artifact) =>
    (artifact.blocked ?? []).map((item) => ({ artifact, item })),
  );
  for (const blockedItem of blocked) {
    const expectedWarning = findPolicyMatch(policy.expectedWarnings, blockedItem.item);
    const allowedBlocked = findPolicyMatch(policy.allowedBlocked, blockedItem.item);
    const match = expectedWarning ?? allowedBlocked;
    checks.push({
      id: `execution-results.blocked.${blockedItem.artifact.fixture}.${blockedItem.item.seam}.${blockedItem.item.captureIndex}`,
      action: match ? (options.strict ? "fail" : "warn") : "fail",
      message: match
        ? `${match.decision}: ${blockedItem.item.reason}`
        : `unknown blocked synthetic probe: ${blockedItem.item.reason}`,
      evidence: [
        blockedItem.artifact.artifactPath,
        blockedItem.item.seam,
        blockedItem.item.reason,
        match?.id ?? "unclassified",
      ],
    });
  }
  return checks;
}

function findPolicyMatch(rules, item) {
  return rules.find((rule) => item.seam === rule.seam && item.reason?.includes(rule.reasonIncludes));
}

function failedExecutionEvidence(executionResults) {
  return executionResults.artifacts.flatMap((artifact) =>
    (artifact.failures ?? []).map((failure) => `${artifact.fixture}:${failure.seam}:${failure.error}`),
  );
}

export function validateCiPolicyReport(report) {
  return report.checks
    .filter((check) => check.action === "fail")
    .map((check) => `${check.id}: ${check.message}: ${check.evidence.join(", ")}`);
}

export async function writeCiPolicyReport(report, options = {}) {
  const jsonPath = options.jsonPath ?? defaultCiPolicyReportJsonPath;
  const markdownPath = options.markdownPath ?? defaultCiPolicyReportMarkdownPath;
  await mkdir(path.dirname(jsonPath), { recursive: true });
  await mkdir(path.dirname(markdownPath), { recursive: true });
  await writeFile(jsonPath, `${JSON.stringify(report, null, 2)}\n`, "utf8");
  await writeFile(markdownPath, `${renderCiPolicyMarkdown(report)}\n`, "utf8");
  return { jsonPath, markdownPath };
}

export function renderCiPolicyMarkdown(report) {
  return [
    "# Crabpot CI Policy",
    "",
    `Generated: ${report.generatedAt}`,
    `Status: ${report.status.toUpperCase()}`,
    `Strict: ${report.strict}`,
    "",
    "## Summary",
    "",
    markdownTable(
      [
        ["Checks", report.summary.checkCount],
        ["Fail", report.summary.failCount],
        ["Warn", report.summary.warnCount],
        ["Pass", report.summary.passCount],
        ["Allowed blocked rules", report.policy.allowedBlocked],
        ["Expected warning rules", report.policy.expectedWarnings],
        ["Fixture sets", report.policy.fixtureSets.join(", ")],
      ],
      ["Metric", "Value"],
    ),
    "",
    "## Checks",
    "",
    markdownTable(
      report.checks.map((check) => [
        check.action,
        check.id,
        check.message,
        check.evidence.join(", ") || "-",
      ]),
      ["Action", "ID", "Message", "Evidence"],
    ),
  ].join("\n");
}

async function readJson(jsonPath) {
  return JSON.parse(await readFile(jsonPath, "utf8"));
}

async function readOptionalJson(jsonPath) {
  return existsSync(jsonPath) ? readJson(jsonPath) : null;
}

function validatePolicy(policy) {
  const errors = [];
  if (policy.version !== 1) {
    errors.push("ci policy version must be 1");
  }
  for (const key of ["allowedBlocked", "expectedWarnings"]) {
    if (!Array.isArray(policy[key])) {
      errors.push(`ci policy ${key} must be an array`);
    }
  }
  if (!policy.thresholds || typeof policy.thresholds !== "object") {
    errors.push("ci policy thresholds are required");
  }
  if (!policy.fixtureSets || typeof policy.fixtureSets !== "object") {
    errors.push("ci policy fixtureSets are required");
  }
  if (errors.length > 0) {
    throw new Error(errors.join("\n"));
  }
}

function actionRank(value) {
  return { fail: 0, warn: 1, pass: 2 }[value] ?? 3;
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
