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
  platform: "crabpot-platform-probes.json",
  importLoop: "crabpot-import-loop-profile.json",
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
    runUrl: process.env.CRABPOT_RUN_URL,
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
  const ciGeneratedAt = ciSummary.generatedAt && ciSummary.generatedAt !== "deterministic" ? ciSummary.generatedAt : null;
  const compatibilityGeneratedAt =
    compatibility.generatedAt && compatibility.generatedAt !== "deterministic" ? compatibility.generatedAt : null;
  const generatedAt =
    options.generatedAt ??
    process.env.CRABPOT_SUMMARY_GENERATED_AT ??
    ciGeneratedAt ??
    compatibilityGeneratedAt ??
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
    runUrl: options.runUrl ?? ciSummary.runUrl ?? "",
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
      platformWindowsRisks: reports.platform?.summary?.windowsRiskStepCount ?? 0,
      platformContainerRisks: reports.platform?.summary?.containerRiskStepCount ?? 0,
      loaderJitiCandidates: reports.platform?.summary?.jitiAlternativeCount ?? 0,
      importLoopP50Ms: reports.importLoop?.summary?.p50WallMs ?? 0,
      importLoopMaxRssMb: reports.importLoop?.summary?.maxPeakRssMb ?? 0,
      importLoopMaxCpuMs: reports.importLoop?.summary?.maxCpuMsEstimate ?? 0,
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
  const next = applyReadmeSummary(current, renderReadmeSummary(preserveDashboardMetadata(summary, current)));
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

function preserveDashboardMetadata(summary, readme) {
  const current = readDashboardMetadata(readme);
  return {
    ...summary,
    generatedAtLabel:
      (!summary.generatedAt || summary.generatedAt === "deterministic") && current.generatedAtLabel
        ? current.generatedAtLabel
        : summary.generatedAtLabel,
    mode: summary.mode === "local" && current.mode ? current.mode : summary.mode,
    openclawLabel:
      current.runUrl && isLocalOpenclawLabel(summary.openclawLabel) && current.openclawLabel
        ? current.openclawLabel
        : summary.openclawLabel,
    importLoopLabel: current.runUrl && current.importLoopLabel ? current.importLoopLabel : summary.importLoopLabel,
    runtimeProfileLabel:
      current.runUrl && current.runtimeProfileLabel ? current.runtimeProfileLabel : summary.runtimeProfileLabel,
    runUrl: summary.runUrl || current.runUrl || "",
  };
}

function readDashboardMetadata(readme) {
  return {
    generatedAtLabel: readme.match(/^Last dashboard update:\s*(.+)$/m)?.[1],
    importLoopLabel: readme.match(/^\| Import loop\s+\|\s*(.+?)\s*\|$/m)?.[1],
    mode: readme.match(/^Mode:\s*(.+)$/m)?.[1],
    openclawLabel: readme.match(/^OpenClaw:\s*(.+)$/m)?.[1],
    runtimeProfileLabel: readme.match(/^\| Runtime profile\s+\|\s*(.+?)\s*\|$/m)?.[1],
    runUrl: readme.match(/^Run:\s*(.+)$/m)?.[1],
  };
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
    `Last dashboard update: ${summary.generatedAtLabel ?? formatTimestamp(summary.generatedAt)}`,
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
        ["P0 issues", severityCount("P0", m.p0Issues)],
        ["P1 issues", severityCount("P1", m.p1Issues)],
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
        ["Platform risks", `${m.platformWindowsRisks} Windows / ${m.platformContainerRisks} container`],
        ["Jiti loader candidates", m.loaderJitiCandidates],
        [
          "Import loop",
          summary.importLoopLabel ?? `p50 ${m.importLoopP50Ms}ms / max RSS ${m.importLoopMaxRssMb}MB / CPU ${m.importLoopMaxCpuMs}ms`,
        ],
        ["Runtime profile", summary.runtimeProfileLabel ?? `p50 ${m.runtimeP50Ms}ms / max RSS ${m.runtimeMaxRssMb}MB`],
      ],
      ["Metric", "Result"],
    ),
    "",
    "### Top Discovered Issues",
    "",
    markdownTable(
      summary.topIssues.map((issue) => [
        severitySignal(issue.severity),
        issue.issueClass,
        issue.fixture,
        issue.code,
        issue.decision,
        issueTitleLink(issue),
      ]),
      ["Severity", "Class", "Fixture", "Code", "Decision", "Title"],
    ),
  ]
    .filter((line) => line !== "")
    .join("\n\n");
}

function severityCount(severity, count) {
  return markdownLink(`${severitySignal(severity)} ${count}`, severityReportAnchor(severity));
}

function severitySignal(severity) {
  const signals = {
    P0: "🔴 P0",
    P1: "🟠 P1",
    P2: "🟡 P2",
    P3: "🟢 P3",
  };
  return signals[severity] ?? severity ?? "-";
}

function issueTitleLink(issue) {
  return markdownLink(issue.title, issueReportAnchor(issue));
}

function severityReportAnchor(severity) {
  if (severity === "P0") {
    return "reports/crabpot-issues.md#p0-live-issues";
  }
  return "reports/crabpot-issues.md#triage-summary";
}

function issueReportAnchor(issue) {
  if (issue.severity === "P0" && issue.issueClass === "live-issue") {
    return "reports/crabpot-issues.md#p0-live-issues";
  }

  const anchors = {
    "compat-gap": "reports/crabpot-issues.md#compat-gaps",
    "deprecation-warning": "reports/crabpot-issues.md#deprecation-warnings",
    "inspector-gap": "reports/crabpot-issues.md#inspector-proof-gaps",
    "live-issue": "reports/crabpot-issues.md#live-issues",
    "upstream-metadata": "reports/crabpot-issues.md#upstream-metadata-issues",
  };
  return anchors[issue.issueClass] ?? "reports/crabpot-issues.md#issues";
}

function markdownLink(label, href) {
  return `[${label}](${href})`;
}

function isLocalOpenclawLabel(label) {
  return !label || label === "../openclaw" || label.endsWith("@local");
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
