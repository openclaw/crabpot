#!/usr/bin/env node
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { repoRoot } from "./manifest-lib.mjs";
import { buildReport } from "./report-lib.mjs";

export const defaultRefDiffJsonPath = path.join(repoRoot, "reports/crabpot-ref-diff.json");
export const defaultRefDiffMarkdownPath = path.join(repoRoot, "reports/crabpot-ref-diff.md");

const DIMENSIONS = [
  {
    id: "compatRecords",
    label: "Compat records",
    targetKey: "compatRecords",
    used: () => new Set(),
    hardWhenRemovedAndUsed: false,
  },
  {
    id: "hookNames",
    label: "Hook names",
    targetKey: "hookNames",
    used: (report) => new Set(report.fixtures.flatMap((fixture) => fixture.hooks)),
    hardWhenRemovedAndUsed: true,
  },
  {
    id: "apiRegistrars",
    label: "API registrars",
    targetKey: "apiRegistrars",
    used: (report) => new Set(report.fixtures.flatMap((fixture) => fixture.registrations)),
    hardWhenRemovedAndUsed: true,
  },
  {
    id: "capturedRegistrars",
    label: "Captured registrars",
    targetKey: "capturedRegistrars",
    used: (report) => new Set(report.fixtures.flatMap((fixture) => fixture.registrations)),
    hardWhenRemovedAndUsed: false,
  },
  {
    id: "sdkExports",
    label: "SDK exports",
    targetKey: "sdkExports",
    used: (report) => new Set(report.fixtures.flatMap((fixture) => fixture.sdkImports)),
    hardWhenRemovedAndUsed: true,
  },
  {
    id: "manifestFields",
    label: "Manifest fields",
    targetKey: "manifestFields",
    used: (report) =>
      new Set(
        report.fixtures.flatMap((fixture) =>
          fixture.pluginManifests.flatMap((pluginManifest) => Object.keys(pluginManifest)),
        ),
      ),
    hardWhenRemovedAndUsed: true,
  },
  {
    id: "manifestContractFields",
    label: "Manifest contract fields",
    targetKey: "manifestContractFields",
    used: (report) => new Set(report.fixtures.flatMap((fixture) => fixture.manifestContracts)),
    hardWhenRemovedAndUsed: true,
  },
];

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

  const dimensions = DIMENSIONS.map((dimension) => compareDimension(dimension, baseReport, headReport));
  const issueDelta = compareIssues(baseReport, headReport);
  const regressions = [
    ...dimensions.flatMap((dimension) => dimension.regressions),
    ...issueDelta.regressions,
    ...targetStatusRegressions(baseReport, headReport),
  ].sort((left, right) => severityRank(left.severity) - severityRank(right.severity) || left.code.localeCompare(right.code));

  const hardRegressionCount = regressions.filter((regression) => regression.action === "fail").length;
  const warningRegressionCount = regressions.filter((regression) => regression.action === "warn").length;

  return {
    generatedAt: "deterministic",
    base: summarizeReport(options.baseLabel ?? "base", baseReport),
    head: summarizeReport(options.headLabel ?? "head", headReport),
    status: hardRegressionCount === 0 ? "pass" : "fail",
    summary: {
      dimensionCount: dimensions.length,
      hardRegressionCount,
      warningRegressionCount,
      newIssueCount: issueDelta.added.length,
      newP0IssueCount: issueDelta.added.filter((issue) => issue.severity === "P0").length,
      newP1IssueCount: issueDelta.added.filter((issue) => issue.severity === "P1").length,
      removedIssueCount: issueDelta.removed.length,
    },
    dimensions,
    issueDelta,
    regressions,
  };
}

function summarizeReport(label, report) {
  return {
    label,
    targetOpenClaw: {
      status: report.targetOpenClaw.status,
      configuredPath: report.targetOpenClaw.configuredPath,
      compatRecordCount: report.targetOpenClaw.compatRecordCount ?? 0,
      hookNameCount: report.targetOpenClaw.hookNameCount ?? 0,
      apiRegistrarCount: report.targetOpenClaw.apiRegistrarCount ?? 0,
      capturedRegistrarCount: report.targetOpenClaw.capturedRegistrarCount ?? 0,
      sdkExportCount: report.targetOpenClaw.sdkExportCount ?? 0,
      manifestFieldCount: report.targetOpenClaw.manifestFieldCount ?? 0,
      manifestContractFieldCount: report.targetOpenClaw.manifestContractFieldCount ?? 0,
    },
    report: {
      status: report.status,
      breakageCount: report.summary.breakageCount,
      warningCount: report.summary.warningCount,
      suggestionCount: report.summary.suggestionCount,
      issueCount: report.summary.issueCount,
      p0IssueCount: report.summary.p0IssueCount,
      p1IssueCount: report.summary.p1IssueCount,
      contractProbeCount: report.summary.contractProbeCount,
    },
  };
}

function compareDimension(dimension, baseReport, headReport) {
  const baseValues = sortedSet(baseReport.targetOpenClaw[dimension.targetKey] ?? []);
  const headValues = sortedSet(headReport.targetOpenClaw[dimension.targetKey] ?? []);
  const usedValues = sortedSet([...dimension.used(baseReport), ...dimension.used(headReport)]);
  const added = headValues.filter((value) => !baseValues.includes(value));
  const removed = baseValues.filter((value) => !headValues.includes(value));
  const removedUsed = removed.filter((value) => usedValues.includes(value));
  const regressions = [];

  if (removedUsed.length > 0) {
    regressions.push({
      code: `${dimension.id}.removed-used`,
      severity: "P0",
      action: dimension.hardWhenRemovedAndUsed ? "fail" : "warn",
      dimension: dimension.id,
      message: `${dimension.label} removed values used by fixtures`,
      evidence: removedUsed,
    });
  }

  const removedUnused = removed.filter((value) => !usedValues.includes(value));
  if (removedUnused.length > 0) {
    regressions.push({
      code: `${dimension.id}.removed-unused`,
      severity: "P3",
      action: "warn",
      dimension: dimension.id,
      message: `${dimension.label} removed values not used by current fixtures`,
      evidence: removedUnused,
    });
  }

  return {
    id: dimension.id,
    label: dimension.label,
    baseCount: baseValues.length,
    headCount: headValues.length,
    added,
    removed,
    removedUsed,
    used: usedValues,
    regressions,
  };
}

function compareIssues(baseReport, headReport) {
  const baseIssues = new Map(baseReport.issues.map((issue) => [issue.id, issue]));
  const headIssues = new Map(headReport.issues.map((issue) => [issue.id, issue]));
  const added = [...headIssues.values()].filter((issue) => !baseIssues.has(issue.id)).sort(issueSort);
  const removed = [...baseIssues.values()].filter((issue) => !headIssues.has(issue.id)).sort(issueSort);
  const regressions = added.map((issue) => ({
    code: `issue.${issue.id}`,
    severity: issue.severity,
    action: ["P0", "P1"].includes(issue.severity) ? "fail" : "warn",
    dimension: "issues",
    message: `new ${issue.severity} issue: ${issue.title}`,
    evidence: [issue.fixture, issue.code, ...issue.evidence],
  }));

  return { added, removed, regressions };
}

function targetStatusRegressions(baseReport, headReport) {
  if (baseReport.targetOpenClaw.status === headReport.targetOpenClaw.status) {
    return [];
  }
  return [
    {
      code: "target.status.changed",
      severity: headReport.targetOpenClaw.status === "ok" ? "P3" : "P0",
      action: headReport.targetOpenClaw.status === "ok" ? "warn" : "fail",
      dimension: "targetOpenClaw",
      message: `target OpenClaw status changed from ${baseReport.targetOpenClaw.status} to ${headReport.targetOpenClaw.status}`,
      evidence: [
        baseReport.targetOpenClaw.configuredPath ?? "base target path unknown",
        headReport.targetOpenClaw.configuredPath ?? "head target path unknown",
      ],
    },
  ];
}

export function validateRefDiff(diff, options = {}) {
  return diff.regressions
    .filter((regression) => regression.action === "fail" || (options.strict && regression.action === "warn"))
    .map((regression) => `${regression.code}: ${regression.message}: ${regression.evidence.join(", ")}`);
}

export async function writeRefDiff(diff, options = {}) {
  const jsonPath = options.jsonPath ?? defaultRefDiffJsonPath;
  const markdownPath = options.markdownPath ?? defaultRefDiffMarkdownPath;
  await mkdir(path.dirname(jsonPath), { recursive: true });
  await mkdir(path.dirname(markdownPath), { recursive: true });
  await writeFile(jsonPath, `${JSON.stringify(diff, null, 2)}\n`, "utf8");
  await writeFile(markdownPath, `${renderRefDiffMarkdown(diff)}\n`, "utf8");
  return { jsonPath, markdownPath };
}

export function renderRefDiffMarkdown(diff) {
  return [
    "# Crabpot OpenClaw Ref Diff",
    "",
    `Generated: ${diff.generatedAt}`,
    `Status: ${diff.status.toUpperCase()}`,
    "",
    "## Summary",
    "",
    markdownTable(
      [
        ["Base", `${diff.base.label} (${diff.base.targetOpenClaw.status})`],
        ["Head", `${diff.head.label} (${diff.head.targetOpenClaw.status})`],
        ["Hard regressions", diff.summary.hardRegressionCount],
        ["Warning regressions", diff.summary.warningRegressionCount],
        ["New issues", diff.summary.newIssueCount],
        ["New P0 issues", diff.summary.newP0IssueCount],
        ["New P1 issues", diff.summary.newP1IssueCount],
        ["Removed issues", diff.summary.removedIssueCount],
      ],
      ["Metric", "Value"],
    ),
    "",
    "## Target Surface Delta",
    "",
    markdownTable(
      diff.dimensions.map((dimension) => [
        dimension.label,
        dimension.baseCount,
        dimension.headCount,
        signed(dimension.headCount - dimension.baseCount),
        dimension.added.join(", ") || "-",
        dimension.removed.join(", ") || "-",
        dimension.removedUsed.join(", ") || "-",
      ]),
      ["Surface", "Base", "Head", "Delta", "Added", "Removed", "Removed used"],
    ),
    "",
    "## Regressions",
    "",
    markdownTable(
      diff.regressions.map((regression) => [
        regression.action,
        regression.severity,
        regression.dimension,
        regression.code,
        regression.message,
        regression.evidence.join(", "),
      ]),
      ["Action", "Severity", "Surface", "Code", "Message", "Evidence"],
    ),
    "",
    "## New Issues",
    "",
    markdownTable(
      diff.issueDelta.added.map((issue) => [
        issue.severity,
        issue.fixture,
        issue.code,
        issue.title,
        issue.evidence.join(", "),
      ]),
      ["Severity", "Fixture", "Code", "Title", "Evidence"],
    ),
    "",
    "## Removed Issues",
    "",
    markdownTable(
      diff.issueDelta.removed.map((issue) => [
        issue.severity,
        issue.fixture,
        issue.code,
        issue.title,
        issue.evidence.join(", "),
      ]),
      ["Severity", "Fixture", "Code", "Title", "Evidence"],
    ),
  ].join("\n");
}

function sortedSet(values) {
  return [...new Set(values.filter(Boolean))].sort();
}

function issueSort(left, right) {
  return severityRank(left.severity) - severityRank(right.severity) || left.id.localeCompare(right.id);
}

function severityRank(value) {
  return { P0: 0, P1: 1, P2: 2, P3: 3 }[value] ?? 4;
}

function signed(value) {
  return value > 0 ? `+${value}` : String(value);
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
