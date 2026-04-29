#!/usr/bin/env node
import { existsSync } from "node:fs";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { repoRoot } from "./manifest-lib.mjs";

export const readmeSummaryStart = "<!-- crabpot-summary:start -->";
export const readmeSummaryEnd = "<!-- crabpot-summary:end -->";
export const trackMetadataStart = "<!-- crabpot-tracks:start -->";
export const trackMetadataEnd = "<!-- crabpot-tracks:end -->";
export const defaultReadmePath = path.join(repoRoot, "README.md");
export const defaultDashboardDataPath = path.join(repoRoot, "reports/crabpot-dashboard-data.json");

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
    baselineDataPath: args.baselineDataPath,
    baselineLabel: args.baselineLabel,
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

  if (!args.check) {
    await writeDashboardData(summary, { dataPath: args.dashboardDataPath });
  }

  console.log(`readme summary: ${changed ? "changed" : "current"}; status ${summary.status}`);
}

function parseArgs(argv) {
  const args = {
    baselineDataPath: "",
    baselineLabel: "main",
    check: false,
    dashboardDataPath: defaultDashboardDataPath,
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
    if (arg === "--baseline-data") {
      args.baselineDataPath = path.resolve(argv[index + 1]);
      index += 1;
      continue;
    }
    if (arg === "--baseline-label") {
      args.baselineLabel = argv[index + 1];
      index += 1;
      continue;
    }
    if (arg === "--dashboard-data") {
      args.dashboardDataPath = path.resolve(argv[index + 1]);
      index += 1;
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
  const baselineSummary =
    options.baseline ??
    (options.baselineDataPath ? normalizeDashboardData(await readOptionalJson(options.baselineDataPath)) : null);
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

  const summary = {
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
      importLoopP95Ms: reports.importLoop?.summary?.p95WallMs ?? 0,
      importLoopMaxRssMb: reports.importLoop?.summary?.maxPeakRssMb ?? 0,
      importLoopMaxCpuMs: reports.importLoop?.summary?.maxCpuMsEstimate ?? 0,
      runtimeP50Ms: reports.runtimeProfile?.summary?.p50WallMs ?? 0,
      runtimeP95Ms: reports.runtimeProfile?.summary?.p95WallMs ?? 0,
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

  if (baselineSummary?.metrics) {
    summary.baseline = {
      label: options.baselineLabel ?? "main",
      generatedAt: baselineSummary.generatedAt ?? null,
      openclawLabel: baselineSummary.openclawLabel ?? "",
      runUrl: baselineSummary.runUrl ?? "",
      metrics: baselineSummary.metrics,
      deltas: buildMetricDeltas(summary.metrics, baselineSummary.metrics),
    };
  }

  return summary;
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
  const preserved = preserveDashboardMetadata(summary, current);
  const next = applyReadmeSummary(ensureReadmeFrame(current, preserved), renderReadmeSummary(preserved));
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

export async function writeDashboardData(summary, options = {}) {
  const dataPath = options.dataPath ?? defaultDashboardDataPath;
  const data = buildDashboardData(summary);
  await mkdir(path.dirname(dataPath), { recursive: true });
  await writeFile(dataPath, `${JSON.stringify(data, null, 2)}\n`, "utf8");
  return dataPath;
}

export function buildDashboardData(summary) {
  return {
    schemaVersion: 1,
    generatedAt: summary.generatedAt,
    runUrl: summary.runUrl ?? "",
    mode: summary.mode ?? "local",
    openclawLabel: summary.openclawLabel ?? "",
    status: summary.status ?? "unknown",
    metrics: summary.metrics ?? {},
    baseline: summary.baseline ?? null,
    topIssues: summary.topIssues ?? [],
    artifactPaths: summary.artifactPaths ?? {},
  };
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
    importLoopLabel: current.runUrl && hasP95Label(current.importLoopLabel) ? current.importLoopLabel : summary.importLoopLabel,
    runtimeProfileLabel:
      current.runUrl && hasP95Label(current.runtimeProfileLabel) ? current.runtimeProfileLabel : summary.runtimeProfileLabel,
    runUrl: summary.runUrl || current.runUrl || "",
  };
}

function readDashboardMetadata(readme) {
  return {
    generatedAtLabel: readLastDashboardUpdate(readme),
    importLoopLabel: readme.match(/^\| Import loop\s+\|\s*(.+?)\s*\|$/m)?.[1],
    mode: readme.match(/^Mode:\s*(.+)$/m)?.[1],
    openclawLabel: readme.match(/^OpenClaw:\s*(.+)$/m)?.[1],
    runtimeProfileLabel: readme.match(/^\| Runtime profile\s+\|\s*(.+?)\s*\|$/m)?.[1],
    runUrl:
      readme.match(/^- \*\*GitHub report run:\*\*\s+\[[^\]]+\]\(([^)]+)\)/im)?.[1] ?? readme.match(/^Run:\s*(.+)$/m)?.[1],
  };
}

function readLastDashboardUpdate(readme) {
  const matches = [
    ...readme.matchAll(/^- \*\*Last dashboard update:\*\*\s*(.+)$/gm),
    ...readme.matchAll(/^Last dashboard update:\s*(.+)$/gm),
  ].sort((left, right) => left.index - right.index);
  return matches.at(-1)?.[1];
}

export function applyReadmeSummary(readme, renderedSummary) {
  const block = `${readmeSummaryStart}\n${renderedSummary}\n${readmeSummaryEnd}`;
  const start = readme.indexOf(readmeSummaryStart);
  const end = readme.lastIndexOf(readmeSummaryEnd);
  if (start !== -1 && end !== -1 && end > start) {
    return `${readme.slice(0, start)}${block}${readme.slice(end + readmeSummaryEnd.length)}`;
  }

  const dashboardStart = readme.indexOf("\n## Dashboard");
  if (dashboardStart !== -1 && end !== -1 && end > dashboardStart) {
    return `${readme.slice(0, dashboardStart + 1)}${block}${readme.slice(end + readmeSummaryEnd.length)}`;
  }

  const insertionPoint = readme.indexOf("\n## What this tests");
  if (insertionPoint !== -1) {
    return `${readme.slice(0, insertionPoint)}\n\n${block}${readme.slice(insertionPoint)}`;
  }

  return `${readme.trimEnd()}\n\n${block}\n`;
}

export function ensureReadmeFrame(readme, summary = {}) {
  const frame = renderReadmeFrame(summary);
  const trackStart = readme.indexOf(trackMetadataStart);
  if (trackStart !== -1) {
    return `${frame}\n${readme.slice(trackStart)}`;
  }

  const summaryStart = readme.indexOf(readmeSummaryStart);
  const dashboardStart = readme.indexOf("\n## Dashboard");
  const whatStart = readme.indexOf("\n## What this tests");
  const restStart = [summaryStart, dashboardStart, whatStart].filter((index) => index !== -1).sort((a, b) => a - b)[0];
  const rest = restStart === undefined ? "" : readme.slice(restStart + (readme[restStart] === "\n" ? 1 : 0));
  const trackBlock = `${trackMetadataStart}\n${trackMetadataEnd}`;
  return `${frame}\n${trackBlock}${rest ? `\n\n${rest}` : "\n"}`;
}

function renderReadmeFrame(summary) {
  return [
    "# 🦀 crabpot",
    "",
    '<img width="1376" height="768" alt="crabpot" src="https://github.com/user-attachments/assets/79eb0be1-0736-4a78-a62d-cb66ab080c60" />',
    "<p></p>",
    "",
    "**Goto: [Latest Published](https://github.com/openclaw/crabpot/tree/main) | [Latest Beta](https://github.com/openclaw/crabpot/tree/crab-beta) | [Main Development](https://github.com/openclaw/crabpot/tree/crab-development)**",
    "",
    "**Compatibility trap for OpenClaw plugin contracts.** `crabpot` keeps a curated set of real community plugins pinned under `plugins/` and runs seam-focused compatibility checks against OpenClaw plugin APIs. The goal is to catch contract drift before external plugin authors do. Built on top of `plugin-inspector`, the testing harness for OpenClaw.",
    "",
    "## Reporting Data",
    "",
    "`main` follows the latest published npm package. `crab-beta` follows the beta npm dist-tag. `crab-development` follows the latest `openclaw/openclaw` main commit.",
    `- **Last dashboard update:** ${summary.generatedAtLabel ?? formatTimestamp(summary.generatedAt)}`,
  ].join("\n");
}

export function renderReadmeSummary(summary) {
  const m = summary.metrics;
  return [
    "## Dashboard",
    "",
    markdownTable(
      [
        ["Fixtures", metricCell(summary, "fixtures", m.fixtures)],
        ["Hard breakages", metricCell(summary, "hardBreakages", m.hardBreakages)],
        ["Warnings", metricCell(summary, "warnings", m.warnings)],
        ["Suggestions", metricCell(summary, "suggestions", m.suggestions)],
        ["Issues", metricCell(summary, "issues", m.issues)],
        ["P0 issues", metricCell(summary, "p0Issues", severityCount("P0", m.p0Issues))],
        ["P1 issues", metricCell(summary, "p1Issues", severityCount("P1", m.p1Issues))],
        ["Live issues", `${m.liveIssues} total / ${m.liveP0Issues} P0`],
        ["Compat gaps", metricCell(summary, "compatGaps", m.compatGaps)],
        ["Deprecation warnings", metricCell(summary, "deprecationWarnings", m.deprecationWarnings)],
        ["Inspector gaps", metricCell(summary, "inspectorGaps", m.inspectorGaps)],
        ["Upstream metadata", metricCell(summary, "upstreamIssues", m.upstreamIssues)],
        ["Contract probes", metricCell(summary, "contractProbes", m.contractProbes)],
        ["Policy failures", metricCell(summary, "policyFailures", m.policyFailures)],
        ["Policy warnings", metricCell(summary, "policyWarnings", m.policyWarnings)],
        ["Ref diff failures", metricCell(summary, "refDiffFailures", m.refDiffFailures)],
        ["Profile failures", metricCell(summary, "profileFailures", m.profileFailures)],
        ["Execution probes", `${m.executionPass} pass / ${m.executionFail} fail / ${m.executionBlocked} blocked`],
        ["Synthetic probes", `${m.syntheticReady} ready / ${m.syntheticBlocked} blocked / ${m.syntheticTotal} total`],
        ["Cold import", `${m.coldReady} ready / ${m.coldBlocked} blocked / ${m.coldTotal} entrypoints`],
        ["Workspace plan", `${m.workspaceEntrypoints} entrypoints / ${m.workspaceInstalls} installs / ${m.workspaceBuilds} builds`],
        ["Platform risks", `${m.platformWindowsRisks} Windows / ${m.platformContainerRisks} container`],
        ["Jiti loader candidates", m.loaderJitiCandidates],
        [
          "Import loop",
          summary.importLoopLabel ??
            `p50 ${m.importLoopP50Ms}ms / p95 ${m.importLoopP95Ms}ms / max RSS ${m.importLoopMaxRssMb}MB / CPU ${m.importLoopMaxCpuMs}ms`,
        ],
        [
          "Runtime profile",
          summary.runtimeProfileLabel ?? `p50 ${m.runtimeP50Ms}ms / p95 ${m.runtimeP95Ms}ms / max RSS ${m.runtimeMaxRssMb}MB`,
        ],
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

function metricCell(summary, metric, value) {
  const delta = summary.baseline?.deltas?.[metric];
  if (!delta) {
    return value;
  }
  return `${value}<br><em>${formatMetricDelta(delta.value)} vs ${summary.baseline.label ?? "main"}</em>`;
}

function buildMetricDeltas(metrics, baselineMetrics) {
  const deltas = {};
  for (const [key, value] of Object.entries(metrics ?? {})) {
    const baselineValue = baselineMetrics?.[key];
    if (!Number.isFinite(value) || !Number.isFinite(baselineValue)) {
      continue;
    }
    deltas[key] = {
      current: value,
      baseline: baselineValue,
      value: Number((value - baselineValue).toFixed(3)),
    };
  }
  return deltas;
}

function formatMetricDelta(value) {
  if (value > 0) {
    return `+${formatNumber(value)}`;
  }
  return formatNumber(value);
}

function formatNumber(value) {
  return Number.isInteger(value) ? String(value) : String(value).replace(/(\.\d*?)0+$/, "$1").replace(/\.$/, "");
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

function hasP95Label(label) {
  return /\bp95\b/i.test(label ?? "");
}

async function readOptionalJson(jsonPath) {
  return existsSync(jsonPath) ? JSON.parse(await readFile(jsonPath, "utf8")) : null;
}

function normalizeDashboardData(data) {
  if (!data) {
    return null;
  }
  if (data.metrics) {
    return data;
  }
  if (data.summary?.metrics) {
    return data.summary;
  }
  return null;
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
