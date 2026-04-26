#!/usr/bin/env node
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { repoRoot } from "./manifest-lib.mjs";
import { buildWorkspacePlan } from "./workspace-plan.mjs";

export const defaultPlatformProbesJsonPath = path.join(repoRoot, "reports/crabpot-platform-probes.json");
export const defaultPlatformProbesMarkdownPath = path.join(repoRoot, "reports/crabpot-platform-probes.md");

const PLATFORM_TARGETS = ["linux", "macos", "windows", "container"];

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  await main();
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const report = await buildPlatformProbes({ openclawPath: args.openclawPath });
  const errors = validatePlatformProbes(report);

  if (args.write) {
    await writePlatformProbes(report);
  }
  if (args.json) {
    process.stdout.write(`${JSON.stringify(report, null, 2)}\n`);
  } else {
    console.log(
      `platform probes: ${report.summary.entrypointCount} entrypoints, ${report.summary.tsLoaderEntrypointCount} TS loader, ${report.summary.windowsRiskStepCount} Windows-risk steps, ${report.summary.containerRiskStepCount} container-risk steps`,
    );
  }

  if (errors.length > 0) {
    throw new Error(errors.join("\n"));
  }
}

function parseArgs(argv) {
  const parsed = {
    json: false,
    openclawPath: undefined,
    write: true,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--check") {
      parsed.write = false;
      continue;
    }
    if (arg === "--json") {
      parsed.json = true;
      continue;
    }
    if (arg === "--write") {
      parsed.write = true;
      continue;
    }
    if (arg === "--openclaw") {
      parsed.openclawPath = argv[index + 1];
      index += 1;
      continue;
    }
    if (arg === "--no-openclaw") {
      parsed.openclawPath = false;
    }
  }

  return parsed;
}

export async function buildPlatformProbes(options = {}) {
  const plan = options.plan ?? (await buildWorkspacePlan({ openclawPath: options.openclawPath }));
  const entrypoints = plan.fixtures.flatMap((fixture) =>
    fixture.entrypoints.map((entrypoint) => summarizeEntrypoint(fixture.id, entrypoint)),
  );
  const portabilityFindings = plan.fixtures.flatMap((fixture) =>
    fixture.entrypoints.flatMap((entrypoint) =>
      entrypoint.steps
        .map((step) => summarizeStep(fixture.id, entrypoint, step))
        .filter((finding) => finding.riskCodes.length > 0),
    ),
  );

  return {
    generatedAt: plan.generatedAt,
    mode: "plan-only",
    targets: PLATFORM_TARGETS,
    summary: {
      fixtureCount: plan.summary.fixtureCount,
      entrypointCount: entrypoints.length,
      tsLoaderEntrypointCount: entrypoints.filter((entrypoint) => entrypoint.loaderPrimary === "tsx").length,
      jitiAlternativeCount: entrypoints.filter((entrypoint) => entrypoint.loaderAlternatives.includes("jiti")).length,
      lazyImportProbeCount: entrypoints.filter((entrypoint) => entrypoint.capturePlanned && entrypoint.syntheticProbePlanned).length,
      portabilityFindingCount: portabilityFindings.length,
      windowsRiskStepCount: portabilityFindings.filter((finding) => finding.platforms.includes("windows")).length,
      macosRiskStepCount: portabilityFindings.filter((finding) => finding.platforms.includes("macos")).length,
      linuxRiskStepCount: portabilityFindings.filter((finding) => finding.platforms.includes("linux")).length,
      containerRiskStepCount: portabilityFindings.filter((finding) => finding.platforms.includes("container")).length,
    },
    entrypoints,
    portabilityFindings,
    recommendations: buildRecommendations(portabilityFindings, entrypoints),
  };
}

function summarizeEntrypoint(fixtureId, entrypoint) {
  const captureStep = entrypoint.steps.find((step) => step.kind === "capture");
  const syntheticStep = entrypoint.steps.find((step) => step.kind === "synthetic-probe");
  return {
    fixture: fixtureId,
    id: entrypoint.id,
    status: entrypoint.status,
    entrypoint: entrypoint.entrypoint,
    packageManager: entrypoint.packageManager,
    loaderSource: entrypoint.loaderStrategy.source,
    loaderPrimary: entrypoint.loaderStrategy.primary,
    loaderAlternatives: entrypoint.loaderStrategy.alternatives,
    capturePlanned: Boolean(captureStep),
    syntheticProbePlanned: Boolean(syntheticStep),
    captureUsesTsx: Boolean(captureStep?.command.includes("--import tsx")),
    syntheticUsesTsx: Boolean(syntheticStep?.command.includes("--import tsx")),
  };
}

function summarizeStep(fixtureId, entrypoint, step) {
  const riskCodes = stepRiskCodes(step);
  return {
    fixture: fixtureId,
    entrypoint: entrypoint.id,
    kind: step.kind,
    platforms: platformsForRiskCodes(riskCodes),
    riskCodes,
    command: step.command,
    mitigation: mitigationForRiskCodes(riskCodes),
  };
}

function stepRiskCodes(step) {
  const risks = new Set();
  if (/\bmkdir -p\b/.test(step.command)) {
    risks.add("posix-mkdir");
  }
  if (/\brsync\b/.test(step.command)) {
    risks.add("rsync-required");
  }
  if (/^[A-Z0-9_]+=/.test(step.command)) {
    risks.add("posix-env-prefix");
  }
  if (/\|\|\s*true/.test(step.command)) {
    risks.add("posix-null-failure");
  }
  if (/\s>\s/.test(step.command)) {
    risks.add("shell-redirection");
  }
  if (step.command.includes("--import tsx")) {
    risks.add("tsx-loader-runtime");
  }
  if (/^(pnpm|yarn|bun)\b/.test(step.command)) {
    risks.add("package-manager-availability");
  }
  return [...risks].sort();
}

function platformsForRiskCodes(riskCodes) {
  const platforms = new Set();
  for (const code of riskCodes) {
    if (["posix-mkdir", "rsync-required", "posix-env-prefix", "posix-null-failure"].includes(code)) {
      platforms.add("windows");
    }
    if (["rsync-required", "package-manager-availability"].includes(code)) {
      platforms.add("container");
    }
    if (code === "package-manager-availability") {
      platforms.add("linux");
      platforms.add("macos");
      platforms.add("windows");
    }
  }
  return [...platforms].sort();
}

function mitigationForRiskCodes(riskCodes) {
  const mitigations = {
    "package-manager-availability": "install the declared package manager before isolated execution",
    "posix-env-prefix": "run isolated commands through a Node wrapper or set env via the runner API",
    "posix-mkdir": "replace shell mkdir with fs.mkdir({ recursive: true }) in the executor",
    "posix-null-failure": "capture audit failures in the executor instead of relying on shell fallthrough",
    "rsync-required": "copy workspaces with a Node fs.cp fallback before Windows/container lanes",
    "shell-redirection": "write audit JSON from the executor instead of shell redirection",
    "tsx-loader-runtime": "verify TS source entrypoints with tsx and Jiti loader lanes",
  };
  return riskCodes.map((code) => mitigations[code]).filter(Boolean).join("; ");
}

function buildRecommendations(portabilityFindings, entrypoints) {
  const recommendations = [];
  if (entrypoints.some((entrypoint) => entrypoint.loaderPrimary === "tsx")) {
    recommendations.push({
      area: "loader",
      action: "keep tsx as the source-entrypoint smoke path, add a Jiti execution lane before treating TS plugin source compatibility as covered",
    });
  }
  if (portabilityFindings.some((finding) => finding.riskCodes.includes("rsync-required"))) {
    recommendations.push({
      area: "workspace-copy",
      action: "move isolated workspace copy into Node fs.cp so Windows and slim containers do not depend on rsync",
    });
  }
  if (portabilityFindings.some((finding) => finding.riskCodes.includes("posix-env-prefix"))) {
    recommendations.push({
      area: "executor",
      action: "replace shell env-prefix commands with structured spawn env for Windows parity",
    });
  }
  return recommendations;
}

export function validatePlatformProbes(report) {
  const errors = [];
  if (report.mode !== "plan-only") {
    errors.push("platform probes must stay plan-only in default checks");
  }
  if (!PLATFORM_TARGETS.every((target) => report.targets.includes(target))) {
    errors.push("platform probes must cover linux, macos, windows, and container targets");
  }
  if (report.summary.tsLoaderEntrypointCount !== report.summary.jitiAlternativeCount) {
    errors.push("all TypeScript loader entrypoints must track a Jiti fallback candidate");
  }
  for (const entrypoint of report.entrypoints) {
    if (entrypoint.loaderPrimary === "tsx" && (!entrypoint.captureUsesTsx || !entrypoint.syntheticUsesTsx)) {
      errors.push(`${entrypoint.id}: tsx loader strategy is not reflected in capture and synthetic commands`);
    }
  }
  return errors;
}

export async function writePlatformProbes(report, options = {}) {
  const jsonPath = options.jsonPath ?? defaultPlatformProbesJsonPath;
  const markdownPath = options.markdownPath ?? defaultPlatformProbesMarkdownPath;
  await mkdir(path.dirname(jsonPath), { recursive: true });
  await writeFile(jsonPath, `${JSON.stringify(report, null, 2)}\n`, "utf8");
  await writeFile(markdownPath, `${renderPlatformProbesMarkdown(report)}\n`, "utf8");
  return { jsonPath, markdownPath };
}

export function renderPlatformProbesMarkdown(report) {
  return [
    "# Crabpot Platform And Loader Probes",
    "",
    `Generated: ${report.generatedAt}`,
    `Mode: ${report.mode}`,
    `Targets: ${report.targets.join(", ")}`,
    "",
    "## Summary",
    "",
    markdownTable(Object.entries(report.summary).map(([key, value]) => [key, value]), ["Metric", "Value"]),
    "",
    "## Loader Probes",
    "",
    markdownTable(
      report.entrypoints.map((entrypoint) => [
        entrypoint.fixture,
        entrypoint.status,
        entrypoint.loaderPrimary,
        entrypoint.loaderAlternatives.join(", ") || "-",
        entrypoint.captureUsesTsx ? "yes" : "no",
        entrypoint.syntheticUsesTsx ? "yes" : "no",
        entrypoint.entrypoint,
      ]),
      ["Fixture", "Status", "Primary", "Alternatives", "Capture TSX", "Synthetic TSX", "Entrypoint"],
    ),
    "",
    "## Portability Findings",
    "",
    markdownTable(
      report.portabilityFindings.map((finding) => [
        finding.fixture,
        finding.kind,
        finding.platforms.join(", ") || "-",
        finding.riskCodes.join(", "),
        finding.mitigation,
      ]),
      ["Fixture", "Step", "Platforms", "Risks", "Mitigation"],
    ),
    "",
    "## Recommendations",
    "",
    markdownTable(
      report.recommendations.map((recommendation) => [recommendation.area, recommendation.action]),
      ["Area", "Action"],
    ),
  ].join("\n");
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
