#!/usr/bin/env node
import { existsSync } from "node:fs";
import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { repoRoot } from "./manifest-lib.mjs";

export const defaultExecutionResultsJsonPath = path.join(repoRoot, "reports/crabpot-execution-results.json");
export const defaultExecutionResultsMarkdownPath = path.join(repoRoot, "reports/crabpot-execution-results.md");

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  await main();
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const report = await buildExecutionResultsReport({ resultsDir: args.resultsDir });

  if (args.write) {
    await writeExecutionResultsReport(report);
  }

  if (args.json) {
    process.stdout.write(`${JSON.stringify(report, null, 2)}\n`);
  } else {
    console.log(
      `execution results: ${report.summary.artifactCount} artifacts, ${report.summary.passCount} pass, ${report.summary.failCount} fail, ${report.summary.blockedCount} blocked`,
    );
  }
}

function parseArgs(argv) {
  const args = {
    json: false,
    resultsDir: path.join(repoRoot, ".crabpot/results"),
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
    if (arg === "--results-dir") {
      args.resultsDir = path.resolve(argv[index + 1]);
      index += 1;
      continue;
    }
    if (arg === "--write") {
      args.write = true;
    }
  }

  return args;
}

export async function buildExecutionResultsReport(options = {}) {
  const resultsDir = options.resultsDir ?? path.join(repoRoot, ".crabpot/results");
  const artifacts = existsSync(resultsDir) ? await readArtifacts(resultsDir) : [];
  const syntheticArtifacts = artifacts.filter((artifact) => artifact.kind === "synthetic");
  const captureArtifacts = artifacts.filter((artifact) => artifact.kind === "capture");
  const auditArtifacts = artifacts.filter((artifact) => artifact.kind === "audit");
  const profileArtifacts = artifacts.filter((artifact) => artifact.kind === "profile");

  return {
    generatedAt: "deterministic",
    resultsDir: repoRelative(resultsDir),
    summary: {
      artifactCount: artifacts.length,
      captureArtifactCount: captureArtifacts.length,
      syntheticArtifactCount: syntheticArtifacts.length,
      auditArtifactCount: auditArtifacts.length,
      profileArtifactCount: profileArtifacts.length,
      capturedRegistrationCount: captureArtifacts.reduce(
        (sum, artifact) => sum + (artifact.capturedCount ?? 0),
        0,
      ),
      auditFindingCount: auditArtifacts.reduce((sum, artifact) => sum + artifact.findingCount, 0),
      executionWallMs: profileArtifacts.reduce((sum, artifact) => sum + (artifact.summary?.totalWallMs ?? 0), 0),
      maxPeakRssMb: Math.max(0, ...profileArtifacts.map((artifact) => artifact.summary?.maxPeakRssMb ?? 0)),
      maxCpuMsEstimate: Math.max(0, ...profileArtifacts.map((artifact) => artifact.summary?.maxCpuMsEstimate ?? 0)),
      passCount: syntheticArtifacts.reduce((sum, artifact) => sum + (artifact.summary?.passCount ?? 0), 0),
      failCount: syntheticArtifacts.reduce((sum, artifact) => sum + (artifact.summary?.failCount ?? 0), 0),
      blockedCount: syntheticArtifacts.reduce((sum, artifact) => sum + (artifact.summary?.blockedCount ?? 0), 0),
    },
    artifacts,
  };
}

async function readArtifacts(resultsDir) {
  const paths = await listJsonFiles(resultsDir);
  const artifacts = [];
  for (const artifactPath of paths) {
    const parsed = JSON.parse(await readFile(artifactPath, "utf8"));
    const relativePath = repoRelative(artifactPath);
    artifacts.push(summarizeArtifact({ artifactPath: relativePath, parsed }));
  }
  return artifacts.sort((left, right) => left.artifactPath.localeCompare(right.artifactPath));
}

async function listJsonFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const entryPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await listJsonFiles(entryPath)));
      continue;
    }
    if (entry.isFile() && entry.name.endsWith(".json")) {
      files.push(entryPath);
    }
  }
  return files;
}

function summarizeArtifact({ artifactPath, parsed }) {
  const normalizedArtifactPath = toRepoPath(artifactPath);
  const kind = artifactPath.endsWith(".synthetic.json")
    ? "synthetic"
    : artifactPath.endsWith("package-audit.json")
      ? "audit"
      : artifactPath.endsWith("execution-profile.json")
        ? "profile"
      : "capture";
  const fixture = normalizedArtifactPath.split("/").at(-2) ?? "unknown";
  if (kind === "synthetic") {
    return {
      artifactPath: normalizedArtifactPath,
      fixture,
      kind,
      entrypoint: scrubPath(parsed.entrypoint),
      status: parsed.status,
      summary: parsed.summary,
      failures: (parsed.results ?? []).filter((result) => result.status === "fail"),
      blocked: (parsed.results ?? []).filter((result) => result.status === "blocked"),
    };
  }
  if (kind === "audit") {
    return {
      artifactPath: normalizedArtifactPath,
      fixture,
      kind,
      entrypoint: "-",
      status: "warning",
      findingCount: auditFindingCount(parsed),
      vulnerabilities: parsed.metadata?.vulnerabilities ?? null,
    };
  }
  if (kind === "profile") {
    return {
      artifactPath: normalizedArtifactPath,
      fixture,
      kind,
      entrypoint: "-",
      status: parsed.summary?.failCount > 0 ? "fail" : "pass",
      summary: parsed.summary,
      slowestSteps: [...(parsed.steps ?? [])].sort((left, right) => right.wallMs - left.wallMs).slice(0, 5),
    };
  }
  return {
    artifactPath: normalizedArtifactPath,
    fixture,
    kind,
    entrypoint: scrubPath(parsed.entrypoint),
    status: parsed.status,
    capturedCount: parsed.captured?.length ?? 0,
    captured: (parsed.captured ?? []).map((item) => `${item.kind}:${item.name}`),
  };
}

export async function writeExecutionResultsReport(report, options = {}) {
  const jsonPath = options.jsonPath ?? defaultExecutionResultsJsonPath;
  const markdownPath = options.markdownPath ?? defaultExecutionResultsMarkdownPath;
  await mkdir(path.dirname(jsonPath), { recursive: true });
  await mkdir(path.dirname(markdownPath), { recursive: true });
  await writeFile(jsonPath, `${JSON.stringify(report, null, 2)}\n`, "utf8");
  await writeFile(markdownPath, `${renderExecutionResultsMarkdown(report)}\n`, "utf8");
  return { jsonPath, markdownPath };
}

export function renderExecutionResultsMarkdown(report) {
  return [
    "# Crabpot Execution Results",
    "",
    `Generated: ${report.generatedAt}`,
    `Results dir: ${report.resultsDir}`,
    "",
    "## Summary",
    "",
    markdownTable(
      [
        ["Artifacts", report.summary.artifactCount],
        ["Capture artifacts", report.summary.captureArtifactCount],
        ["Synthetic artifacts", report.summary.syntheticArtifactCount],
        ["Audit artifacts", report.summary.auditArtifactCount],
        ["Profile artifacts", report.summary.profileArtifactCount],
        ["Captured registrations/hooks", report.summary.capturedRegistrationCount],
        ["Audit findings", report.summary.auditFindingCount],
        ["Execution wall", `${report.summary.executionWallMs} ms`],
        ["Max peak RSS", `${report.summary.maxPeakRssMb} MB`],
        ["Max CPU estimate", `${report.summary.maxCpuMsEstimate} ms`],
        ["Pass", report.summary.passCount],
        ["Fail", report.summary.failCount],
        ["Blocked", report.summary.blockedCount],
      ],
      ["Metric", "Value"],
    ),
    "",
    "## Artifacts",
    "",
    markdownTable(
      report.artifacts.map((artifact) => [
        artifact.fixture,
        artifact.kind,
        artifact.status,
        artifact.entrypoint,
        artifact.summary
          ? `${artifact.summary.passCount} pass / ${artifact.summary.failCount} fail / ${artifact.summary.blockedCount} blocked`
          : artifact.kind === "audit"
            ? `${artifact.findingCount} audit findings`
          : artifact.kind === "profile"
            ? `${artifact.summary.stepCount} steps / ${artifact.summary.totalWallMs} ms / ${artifact.summary.maxPeakRssMb} MB`
          : `${artifact.capturedCount} captured`,
        artifact.artifactPath,
      ]),
      ["Fixture", "Kind", "Status", "Entrypoint", "Result", "Artifact"],
    ),
    "",
    "## Blocked Synthetic Probes",
    "",
    markdownTable(
      report.artifacts.flatMap((artifact) =>
        (artifact.blocked ?? []).map((item) => [
          artifact.fixture,
          item.kind,
          item.seam,
          item.label,
          item.reason,
          artifact.artifactPath,
        ]),
      ),
      ["Fixture", "Kind", "Seam", "Label", "Reason", "Artifact"],
    ),
    "",
    "## Failed Synthetic Probes",
    "",
    markdownTable(
      report.artifacts.flatMap((artifact) =>
        (artifact.failures ?? []).map((item) => [
          artifact.fixture,
          item.kind,
          item.seam,
          item.label,
          item.error,
          artifact.artifactPath,
        ]),
      ),
      ["Fixture", "Kind", "Seam", "Label", "Error", "Artifact"],
    ),
    "",
    "## Dependency Audit Artifacts",
    "",
    markdownTable(
      report.artifacts
        .filter((artifact) => artifact.kind === "audit")
        .map((artifact) => [
          artifact.fixture,
          artifact.findingCount,
          artifact.vulnerabilities ? JSON.stringify(artifact.vulnerabilities) : "-",
          artifact.artifactPath,
        ]),
      ["Fixture", "Findings", "Vulnerabilities", "Artifact"],
    ),
    "",
    "## Execution Profiles",
    "",
    markdownTable(
      report.artifacts.flatMap((artifact) =>
        (artifact.slowestSteps ?? []).map((step) => [
          artifact.fixture,
          step.kind,
          `${step.wallMs} ms`,
          `${step.peakRssMb} MB`,
          `${step.cpuMsEstimate} ms`,
          step.command,
        ]),
      ),
      ["Fixture", "Step", "Wall", "Peak RSS", "CPU Estimate", "Command"],
    ),
  ].join("\n");
}

function auditFindingCount(parsed) {
  const vulnerabilities = parsed.metadata?.vulnerabilities;
  if (vulnerabilities && typeof vulnerabilities === "object") {
    const severityTotal = Object.entries(vulnerabilities)
      .filter(([key]) => key !== "total")
      .reduce((sum, [, value]) => sum + (Number(value) || 0), 0);
    return severityTotal || Number(vulnerabilities.total) || 0;
  }
  if (Array.isArray(parsed.vulnerabilities)) {
    return parsed.vulnerabilities.length;
  }
  if (parsed.vulnerabilities && typeof parsed.vulnerabilities === "object") {
    return Object.keys(parsed.vulnerabilities).length;
  }
  return 0;
}

function scrubPath(value) {
  return typeof value === "string" ? repoRelative(value) : value;
}

function repoRelative(value) {
  const absolute = path.resolve(value);
  return toRepoPath(absolute.startsWith(repoRoot) ? path.relative(repoRoot, absolute) || "." : value);
}

function toRepoPath(value) {
  return String(value).replaceAll(path.sep, "/");
}

function markdownTable(rows, headers) {
  if (rows.length === 0) {
    return "_none_";
  }

  const allRows = [headers, ...rows.map((row) => row.map(String))];
  const widths = headers.map((_, columnIndex) =>
    Math.max(...allRows.map((row) => row[columnIndex].length)),
  );
  const renderRow = (row) => `| ${row.map((cell, index) => cell.padEnd(widths[index])).join(" | ")} |`;
  return [
    renderRow(headers),
    renderRow(widths.map((width) => "-".repeat(width))),
    ...rows.map((row) => renderRow(row.map(String))),
  ].join("\n");
}
