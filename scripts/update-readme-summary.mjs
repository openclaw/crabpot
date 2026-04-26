#!/usr/bin/env node
import { existsSync } from "node:fs";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { repoRoot } from "./manifest-lib.mjs";

export const readmeSummaryStart = "<!-- crabpot-summary:start -->";
export const readmeSummaryEnd = "<!-- crabpot-summary:end -->";
export const defaultReadmePath = path.join(repoRoot, "README.md");

const REPORT_PATHS = {
  compatibility: "crabpot-report.json",
  ciSummary: "crabpot-ci-summary.json",
  synthetic: "crabpot-synthetic-probes.json",
  coldImport: "crabpot-cold-import.json",
  workspace: "crabpot-workspace-plan.json",
  execution: "crabpot-execution-results.json",
  runtimeProfile: "crabpot-runtime-profile.json",
  refDiff: "crabpot-ref-diff.json",
  profileDiff: "crabpot-profile-diff.json",
  ciPolicy: "crabpot-ci-policy.json",
};

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  await main();
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const summary = await buildReadmeSummary({
    generatedAt: args.generatedAt,
    reportsDir: args.reportsDir,
    runUrl: args.runUrl,
  });
  const changed = await updateReadmeSummary({
    check: args.check,
    readmePath: args.readmePath,
    summary,
  });

  if (args.json) {
    process.stdout.write(`${JSON.stringify(summary, null, 2)}\n`);
    return;
  }

  console.log(`readme summary: ${changed ? "changed" : "current"}; status ${summary.status}`);
}

function parseArgs(argv) {
  const args = {
    check: false,
    generatedAt: process.env.CRABPOT_SUMMARY_GENERATED_AT,
    json: false,
    readmePath: defaultReadmePath,
    reportsDir: path.join(repoRoot, "reports"),
    runUrl: process.env.CRABPOT_RUN_URL ?? "",
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--check") {
      args.check = true;
      continue;
    }
    if (arg === "--json") {
      args.json = true;
      continue;
    }
    if (arg === "--generated-at") {
      args.generatedAt = argv[index + 1];
      index += 1;
      continue;
    }
    if (arg === "--readme") {
      args.readmePath = path.resolve(argv[index + 1]);
      index += 1;
      continue;
    }
    if (arg === "--reports-dir") {
      args.reportsDir = path.resolve(argv[index + 1]);
      index += 1;
      continue;
    }
    if (arg === "--run-url") {
      args.runUrl = argv[index + 1];
      index += 1;
    }
  }

  return args;
}

export async function buildReadmeSummary(options = {}) {
  const reportsDir = options.reportsDir ?? path.join(repoRoot, "reports");
  const reports = options.reports ?? (await readReports(reportsDir));
  const compatibility = reports.compatibility ?? {};
  const ciSummary = reports.ciSummary ?? {};
  const generatedAt =
    options.generatedAt ??
    process.env.CRABPOT_SUMMARY_GENERATED_AT ??
    ciSummary.generatedAt ??
    compatibility.generatedAt ??
    new Date().toISOString();
  const status = ciSummary.status ?? compatibility.status ?? "unknown";
  const topIssues = (compatibility.issues ?? [])
    .filter((issue) => ["P0", "P1"].includes(issue.severity))
    .slice(0, 10)
    .map((issue) => ({
      id: issue.id,
      severity: issue.severity,
      issueClass: issue.issueClass ?? "-",
      fixture: issue.fixture,
      code: issue.code,
      decision: issue.decision,
      title: issue.title,
    }));

  return {
    generatedAt,
    runUrl: options.runUrl ?? "",
    mode: ciSummary.mode ?? "local",
    openclawLabel: ciSummary.openclawLabel ?? "",
    status,
    metrics: {
      fixtures: compatibility.summary?.fixtureCount ?? 0,
      hardBreakages: ciSummary.summary?.breakages ?? compatibility.summary?.breakageCount ?? 0,
      warnings: ciSummary.summary?.warnings ?? compatibility.summary?.warningCount ?? 0,
      suggestions: ciSummary.summary?.suggestions ?? compatibility.summary?.suggestionCount ?? 0,
      issues: ciSummary.summary?.issues ?? compatibility.summary?.issueCount ?? 0,
      p0Issues: ciSummary.summary?.p0Issues ?? compatibility.summary?.p0IssueCount ?? 0,
      p1Issues: ciSummary.summary?.p1Issues ?? compatibility.summary?.p1IssueCount ?? 0,
      liveIssues: compatibility.summary?.liveIssueCount ?? 0,
      liveP0Issues: compatibility.summary?.liveP0IssueCount ?? 0,
      compatGaps: compatibility.summary?.compatGapCount ?? 0,
      deprecationWarnings: compatibility.summary?.deprecationWarningCount ?? 0,
      inspectorGaps: compatibility.summary?.inspectorGapCount ?? 0,
      upstreamIssues: compatibility.summary?.upstreamIssueCount ?? 0,
      contractProbes: compatibility.summary?.contractProbeCount ?? 0,
      policyFailures: ciSummary.summary?.policyFailures ?? reports.ciPolicy?.summary?.failCount ?? 0,
      policyWarnings: ciSummary.summary?.policyWarnings ?? reports.ciPolicy?.summary?.warnCount ?? 0,
      refDiffFailures: ciSummary.summary?.refDiffFailures ?? reports.refDiff?.summary?.hardRegressionCount ?? 0,
      profileFailures: ciSummary.summary?.profileFailures ?? reports.profileDiff?.summary?.failCount ?? 0,
      executionPass: ciSummary.summary?.executionPass ?? reports.execution?.summary?.passCount ?? 0,
      executionFail: ciSummary.summary?.executionFail ?? reports.execution?.summary?.failCount ?? 0,
      executionBlocked: ciSummary.summary?.executionBlocked ?? reports.execution?.summary?.blockedCount ?? 0,
      syntheticReady: reports.synthetic?.summary?.readyCount ?? 0,
      syntheticBlocked: reports.synthetic?.summary?.blockedCount ?? 0,
      syntheticTotal: reports.synthetic?.summary?.probeCount ?? 0,
      coldReady: reports.coldImport?.summary?.readyCount ?? 0,
      coldBlocked: reports.coldImport?.summary?.blockedCount ?? 0,
      coldTotal: reports.coldImport?.summary?.entrypointCount ?? 0,
      workspaceEntrypoints: reports.workspace?.summary?.entrypointCount ?? 0,
      workspaceInstalls: reports.workspace?.summary?.installStepCount ?? 0,
      workspaceBuilds: reports.workspace?.summary?.buildStepCount ?? 0,
      runtimeP50Ms: reports.runtimeProfile?.summary?.p50WallMs ?? 0,
      runtimeMaxRssMb: reports.runtimeProfile?.summary?.maxPeakRssMb ?? 0,
    },
    topIssues,
    artifactPaths: Object.fromEntries(
      Object.entries(REPORT_PATHS).map(([key, file]) => {
        const artifactPath = path.join(reportsDir, file);
        return [key, existsSync(artifactPath) ? path.relative(repoRoot, artifactPath) : null];
      }),
    ),
  };
}

async function readReports(reportsDir) {
  const reports = {};
  for (const [key, file] of Object.entries(REPORT_PATHS)) {
    reports[key] = await readOptionalJson(path.join(reportsDir, file));
  }
  return reports;
}

export async function updateReadmeSummary({ check = false, readmePath = defaultReadmePath, summary }) {
  const current = await readFile(readmePath, "utf8");
  const next = applyReadmeSummary(current, renderReadmeSummary(summary));
  const changed = current !== next;
  if (check && changed) {
    throw new Error(`${path.relative(repoRoot, readmePath)} dashboard is stale; run npm run readme:summary`);
  }
  if (!check && changed) {
    await mkdir(path.dirname(readmePath), { recursive: true });
    await writeFile(readmePath, next, "utf8");
  }
  return changed;
}

export function applyReadmeSummary(readme, renderedSummary) {
  const block = `${readmeSummaryStart}\n${renderedSummary}\n${readmeSummaryEnd}`;
  const start = readme.indexOf(readmeSummaryStart);
  const end = readme.indexOf(readmeSummaryEnd);
  if (start !== -1 && end !== -1 && end > start) {
    return `${readme.slice(0, start)}${block}${readme.slice(end + readmeSummaryEnd.length)}`;
  }

  const insertionPoint = readme.indexOf("\n## What this tests");
  if (insertionPoint !== -1) {
    return `${readme.slice(0, insertionPoint)}\n\n${block}${readme.slice(insertionPoint)}`;
  }

  return `${readme.trimEnd()}\n\n${block}\n`;
}

export function renderReadmeSummary(summary) {
  const m = summary.metrics;
  return [
    "## Dashboard",
    "",
    `Last dashboard update: ${formatTimestamp(summary.generatedAt)}`,
    "",
    `State: ${summary.status.toUpperCase()}`,
    `Mode: ${summary.mode}`,
    `OpenClaw: ${summary.openclawLabel || "-"}`,
    summary.runUrl ? `Run: ${summary.runUrl}` : "",
    "",
    "### Result Grid",
    "",
    markdownTable(
      [
        ["Fixtures", m.fixtures],
        ["Hard breakages", m.hardBreakages],
        ["Warnings", m.warnings],
        ["Suggestions", m.suggestions],
        ["Issues", m.issues],
        ["P0 issues", m.p0Issues],
        ["P1 issues", m.p1Issues],
        ["Live issues", `${m.liveIssues} total / ${m.liveP0Issues} P0`],
        ["Compat gaps", m.compatGaps],
        ["Deprecation warnings", m.deprecationWarnings],
        ["Inspector gaps", m.inspectorGaps],
        ["Upstream metadata", m.upstreamIssues],
        ["Contract probes", m.contractProbes],
        ["Policy failures", m.policyFailures],
        ["Policy warnings", m.policyWarnings],
        ["Ref diff failures", m.refDiffFailures],
        ["Profile failures", m.profileFailures],
        ["Execution probes", `${m.executionPass} pass / ${m.executionFail} fail / ${m.executionBlocked} blocked`],
        ["Synthetic probes", `${m.syntheticReady} ready / ${m.syntheticBlocked} blocked / ${m.syntheticTotal} total`],
        ["Cold import", `${m.coldReady} ready / ${m.coldBlocked} blocked / ${m.coldTotal} entrypoints`],
        ["Workspace plan", `${m.workspaceEntrypoints} entrypoints / ${m.workspaceInstalls} installs / ${m.workspaceBuilds} builds`],
        ["Runtime profile", `p50 ${m.runtimeP50Ms}ms / max RSS ${m.runtimeMaxRssMb}MB`],
      ],
      ["Metric", "Result"],
    ),
    "",
    "### Top Discovered Issues",
    "",
    markdownTable(
      summary.topIssues.map((issue) => [
        issue.id,
        issue.severity,
        issue.issueClass,
        issue.fixture,
        issue.code,
        issue.decision,
        issue.title,
      ]),
      ["ID", "Severity", "Class", "Fixture", "Code", "Decision", "Title"],
    ),
    "",
    "### Report Artifacts",
    "",
    markdownTable(
      Object.entries(summary.artifactPaths).map(([name, artifactPath]) => [name, artifactPath ?? "-"]),
      ["Artifact", "Path"],
    ),
  ]
    .filter((line) => line !== "")
    .join("\n\n");
}

async function readOptionalJson(jsonPath) {
  return existsSync(jsonPath) ? JSON.parse(await readFile(jsonPath, "utf8")) : null;
}

function formatTimestamp(value) {
  if (!value || value === "deterministic") {
    return value || "-";
  }
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return value;
  }
  return new Intl.DateTimeFormat("en-US", {
    day: "2-digit",
    hour: "2-digit",
    hour12: false,
    minute: "2-digit",
    month: "short",
    timeZone: "UTC",
    timeZoneName: "short",
    year: "numeric",
  }).format(date);
}

function markdownTable(rows, headers) {
  if (rows.length === 0) {
    return "_none_";
  }

  const allRows = [headers, ...rows.map((row) => row.map((cell) => escapeCell(cell ?? "-")))];
  const widths = headers.map((_, columnIndex) => Math.max(...allRows.map((row) => row[columnIndex].length)));
  const renderRow = (row) => `| ${row.map((cell, index) => escapeCell(cell ?? "-").padEnd(widths[index])).join(" | ")} |`;
  return [
    renderRow(headers),
    renderRow(widths.map((width) => "-".repeat(width))),
    ...rows.map((row) => renderRow(row)),
  ].join("\n");
}

function escapeCell(value) {
  return String(value).replaceAll("|", "\\|").replaceAll("\n", " ");
}
