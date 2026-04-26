#!/usr/bin/env node
import { existsSync } from "node:fs";
import { appendFile, mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { repoRoot } from "./manifest-lib.mjs";

export const defaultCiSummaryMarkdownPath = path.join(repoRoot, "reports/crabpot-ci-summary.md");
export const defaultCiSummaryJsonPath = path.join(repoRoot, "reports/crabpot-ci-summary.json");

const REPORT_PATHS = {
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

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
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
  const reports = options.reports ?? (await readReports(options.reportsDir ?? path.join(repoRoot, "reports")));
  const status = deriveStatus(reports);
  return {
    generatedAt: "deterministic",
    mode: options.mode ?? "local",
    openclawLabel: options.openclawLabel ?? "",
    status,
    summary: {
      breakages: reports.compatibility?.summary?.breakageCount ?? 0,
      warnings: reports.compatibility?.summary?.warningCount ?? 0,
      suggestions: reports.compatibility?.summary?.suggestionCount ?? 0,
      issues: reports.compatibility?.summary?.issueCount ?? 0,
      p0Issues: reports.compatibility?.summary?.p0IssueCount ?? 0,
      p1Issues: reports.compatibility?.summary?.p1IssueCount ?? 0,
      liveIssues: reports.compatibility?.summary?.liveIssueCount ?? 0,
      liveP0Issues: reports.compatibility?.summary?.liveP0IssueCount ?? 0,
      compatGaps: reports.compatibility?.summary?.compatGapCount ?? 0,
      deprecationWarnings: reports.compatibility?.summary?.deprecationWarningCount ?? 0,
      inspectorGaps: reports.compatibility?.summary?.inspectorGapCount ?? 0,
      upstreamIssues: reports.compatibility?.summary?.upstreamIssueCount ?? 0,
      refDiffFailures: reports.refDiff?.summary?.hardRegressionCount ?? 0,
      refDiffWarnings: reports.refDiff?.summary?.warningRegressionCount ?? 0,
      policyFailures: reports.ciPolicy?.summary?.failCount ?? 0,
      policyWarnings: reports.ciPolicy?.summary?.warnCount ?? 0,
      profileFailures: reports.profileDiff?.summary?.failCount ?? 0,
      profileWarnings: reports.profileDiff?.summary?.warnCount ?? 0,
      executionPass: reports.execution?.summary?.passCount ?? 0,
      executionFail: reports.execution?.summary?.failCount ?? 0,
      executionBlocked: reports.execution?.summary?.blockedCount ?? 0,
      platformWindowsRisks: reports.platform?.summary?.windowsRiskStepCount ?? 0,
      platformContainerRisks: reports.platform?.summary?.containerRiskStepCount ?? 0,
      loaderJitiCandidates: reports.platform?.summary?.jitiAlternativeCount ?? 0,
      importLoopP50Ms: reports.importLoop?.summary?.p50WallMs ?? 0,
      importLoopP95Ms: reports.importLoop?.summary?.p95WallMs ?? 0,
      importLoopMaxRssMb: reports.importLoop?.summary?.maxPeakRssMb ?? 0,
      importLoopMaxCpuMs: reports.importLoop?.summary?.maxCpuMsEstimate ?? 0,
    },
    topIssues: topIssues(reports.compatibility),
    refRegressions: (reports.refDiff?.regressions ?? []).slice(0, 20),
    policyFindings: (reports.ciPolicy?.checks ?? []).filter((check) => check.action !== "pass").slice(0, 20),
    profileFindings: (reports.profileDiff?.checks ?? []).filter((check) => check.action !== "pass").slice(0, 20),
    artifacts: Object.fromEntries(
      Object.entries(REPORT_PATHS).map(([key, value]) => [key, existsSync(path.join(repoRoot, value)) ? value : null]),
    ),
  };
}

async function readReports(reportsDir) {
  const reports = {};
  for (const [key, defaultPath] of Object.entries(REPORT_PATHS)) {
    const reportPath = path.join(reportsDir, path.basename(defaultPath));
    reports[key] = await readOptionalJson(reportPath);
  }
  return reports;
}

function deriveStatus(reports) {
  if ((reports.compatibility?.summary?.breakageCount ?? 0) > 0) {
    return "fail";
  }
  if ((reports.refDiff?.summary?.hardRegressionCount ?? 0) > 0) {
    return "fail";
  }
  if ((reports.ciPolicy?.summary?.failCount ?? 0) > 0) {
    return "fail";
  }
  if ((reports.profileDiff?.summary?.failCount ?? 0) > 0) {
    return "fail";
  }
  if ((reports.execution?.summary?.failCount ?? 0) > 0) {
    return "fail";
  }
  return "pass";
}

function topIssues(report) {
  return (report?.issues ?? [])
    .filter((issue) => ["P0", "P1"].includes(issue.severity))
    .slice(0, 20)
    .map((issue) => ({
      severity: issue.severity,
      issueClass: issue.issueClass,
      fixture: issue.fixture,
      code: issue.code,
      title: issue.title,
      decision: issue.decision,
    }));
}

export async function writeCiSummary(summary, options = {}) {
  const jsonPath = options.jsonPath ?? defaultCiSummaryJsonPath;
  const markdownPath = options.markdownPath ?? defaultCiSummaryMarkdownPath;
  await mkdir(path.dirname(jsonPath), { recursive: true });
  await mkdir(path.dirname(markdownPath), { recursive: true });
  await writeFile(jsonPath, `${JSON.stringify(summary, null, 2)}\n`, "utf8");
  await writeFile(markdownPath, `${renderCiSummaryMarkdown(summary)}\n`, "utf8");
  return { jsonPath, markdownPath };
}

export function renderCiSummaryMarkdown(summary) {
  return [
    "# Crabpot CI Summary",
    "",
    `Generated: ${summary.generatedAt}`,
    `Mode: ${summary.mode}`,
    `OpenClaw: ${summary.openclawLabel || "-"}`,
    `Status: ${summary.status.toUpperCase()}`,
    "",
    "## Counts",
    "",
    markdownTable(
      [
        ["Breakages", summary.summary.breakages],
        ["Warnings", summary.summary.warnings],
        ["Suggestions", summary.summary.suggestions],
        ["Issues", summary.summary.issues],
        ["P0 issues", summary.summary.p0Issues],
        ["P1 issues", summary.summary.p1Issues],
        ["Live issues", summary.summary.liveIssues],
        ["Live P0 issues", summary.summary.liveP0Issues],
        ["Compat gaps", summary.summary.compatGaps],
        ["Deprecation warnings", summary.summary.deprecationWarnings],
        ["Inspector gaps", summary.summary.inspectorGaps],
        ["Upstream metadata", summary.summary.upstreamIssues],
        ["Ref diff failures", summary.summary.refDiffFailures],
        ["Ref diff warnings", summary.summary.refDiffWarnings],
        ["Policy failures", summary.summary.policyFailures],
        ["Policy warnings", summary.summary.policyWarnings],
        ["Profile failures", summary.summary.profileFailures],
        ["Profile warnings", summary.summary.profileWarnings],
        ["Execution pass", summary.summary.executionPass],
        ["Execution fail", summary.summary.executionFail],
        ["Execution blocked", summary.summary.executionBlocked],
        ["Windows portability risks", summary.summary.platformWindowsRisks],
        ["Container portability risks", summary.summary.platformContainerRisks],
        ["Jiti loader candidates", summary.summary.loaderJitiCandidates],
        [
          "Import loop",
          `p50 ${summary.summary.importLoopP50Ms} ms / p95 ${summary.summary.importLoopP95Ms} ms / max RSS ${summary.summary.importLoopMaxRssMb} MB / CPU ${summary.summary.importLoopMaxCpuMs} ms`,
        ],
      ],
      ["Metric", "Value"],
    ),
    "",
    "## Top Issues",
    "",
    markdownTable(
      summary.topIssues.map((issue) => [issue.severity, issue.issueClass ?? "-", issue.fixture, issue.code, issue.decision, issue.title]),
      ["Severity", "Class", "Fixture", "Code", "Decision", "Title"],
    ),
    "",
    "## Ref Regressions",
    "",
    markdownTable(
      summary.refRegressions.map((regression) => [
        regression.action,
        regression.severity,
        regression.dimension,
        regression.code,
        regression.message,
      ]),
      ["Action", "Severity", "Surface", "Code", "Message"],
    ),
    "",
    "## Policy Findings",
    "",
    markdownTable(
      summary.policyFindings.map((finding) => [finding.action, finding.id, finding.message, finding.evidence.join(", ")]),
      ["Action", "ID", "Message", "Evidence"],
    ),
    "",
    "## Profile Findings",
    "",
    markdownTable(
      summary.profileFindings.map((finding) => [
        finding.action,
        finding.id,
        finding.metric,
        finding.baseline ?? "-",
        finding.current ?? "-",
        finding.message,
      ]),
      ["Action", "ID", "Metric", "Baseline", "Current", "Message"],
    ),
    "",
    "## Artifacts",
    "",
    markdownTable(
      Object.entries(summary.artifacts).map(([key, value]) => [key, value ?? "-"]),
      ["Artifact", "Path"],
    ),
  ].join("\n");
}

async function readOptionalJson(jsonPath) {
  return existsSync(jsonPath) ? JSON.parse(await readFile(jsonPath, "utf8")) : null;
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
