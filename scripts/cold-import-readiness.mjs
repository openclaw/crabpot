#!/usr/bin/env node
import { existsSync, readFileSync } from "node:fs";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { buildReport } from "./report-lib.mjs";
import { repoRoot } from "./manifest-lib.mjs";

export const defaultColdImportJsonPath = path.join(repoRoot, "reports/crabpot-cold-import.json");
export const defaultColdImportMarkdownPath = path.join(repoRoot, "reports/crabpot-cold-import.md");

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  await main();
}

async function main() {
  const parsedArgs = parseArgs(process.argv.slice(2));
  const readiness = await buildColdImportReadiness({ openclawPath: parsedArgs.openclawPath });
  const errors = validateColdImportReadiness(readiness);

  if (parsedArgs.write) {
    await writeColdImportReadiness(readiness);
  }

  if (parsedArgs.json) {
    console.log(JSON.stringify(readiness, null, 2));
  } else {
    console.log(
      `cold import readiness: ${readiness.summary.entrypointCount} entrypoints, ${readiness.summary.readyCount} ready, ${readiness.summary.blockedCount} blocked`,
    );
  }

  if (errors.length > 0) {
    throw new Error(errors.join("\n"));
  }
}

function parseArgs(argv) {
  const parsed = {
    json: false,
    write: true,
    openclawPath: undefined,
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

export async function buildColdImportReadiness(options = {}) {
  const report = options.report ?? (await buildReport({ openclawPath: options.openclawPath }));
  const sdkExports = new Set(report.targetOpenClaw.sdkExports ?? []);
  const fixtures = [];

  for (const fixture of report.fixtures) {
    const sdkBlockers = fixture.sdkImportDetails
      .filter((sdkImport) => !sdkExports.has(sdkImport.specifier))
      .map((sdkImport) => `${sdkImport.specifier} @ ${sdkImport.ref}`);
    const entrypoints = fixture.packages.flatMap((packageSummary) =>
      (packageSummary.openclaw?.entrypoints ?? []).map((entrypoint) =>
        classifyEntrypointReadiness({
          fixture,
          packageSummary,
          entrypoint,
          sdkBlockers,
        }),
      ),
    );

    fixtures.push({
      id: fixture.id,
      priority: fixture.priority,
      entrypoints,
    });
  }

  const allEntrypoints = fixtures.flatMap((fixture) => fixture.entrypoints);
  return {
    generatedAt: report.generatedAt,
    targetOpenClaw: {
      status: report.targetOpenClaw.status,
      configuredPath: report.targetOpenClaw.configuredPath,
      sdkExportCount: report.targetOpenClaw.sdkExportCount ?? 0,
    },
    summary: {
      fixtureCount: fixtures.length,
      entrypointCount: allEntrypoints.length,
      readyCount: allEntrypoints.filter((entrypoint) => entrypoint.status === "ready").length,
      blockedCount: allEntrypoints.filter((entrypoint) => entrypoint.status !== "ready").length,
      tsLoaderRequiredCount: allEntrypoints.filter((entrypoint) => entrypoint.status === "ts-loader-required").length,
      buildRequiredCount: allEntrypoints.filter((entrypoint) => entrypoint.status === "build-required").length,
      dependencyInstallRequiredCount: allEntrypoints.filter((entrypoint) =>
        entrypoint.blockers.some((blocker) => blocker.code === "dependency-install-required"),
      ).length,
      sdkAliasRequiredCount: allEntrypoints.filter((entrypoint) => entrypoint.blockers.some((blocker) => blocker.code === "sdk-alias-required")).length,
    },
    fixtures,
  };
}

function classifyEntrypointReadiness({ fixture, packageSummary, entrypoint, sdkBlockers }) {
  const blockers = [];
  const resolvedPath = path.join(repoRoot, entrypoint.relativePath);
  const extension = path.extname(entrypoint.relativePath);

  if (!entrypoint.exists) {
    blockers.push({
      code: entrypoint.requiresBuild ? "build-required" : "missing-entrypoint",
      message: entrypoint.requiresBuild
        ? "entrypoint points at build output that is absent in the fixture checkout"
        : "entrypoint path is missing in the fixture checkout",
      evidence: entrypoint.relativePath,
    });
  } else if (extension === ".ts" || extension === ".tsx") {
    blockers.push({
      code: "ts-loader-required",
      message: "entrypoint is TypeScript source and needs a loader or build step before Node cold import",
      evidence: entrypoint.relativePath,
    });
  } else if (![".js", ".mjs", ".cjs"].includes(extension)) {
    blockers.push({
      code: "unknown-entrypoint-extension",
      message: "entrypoint extension is not directly importable by the default Node runner",
      evidence: entrypoint.relativePath,
    });
  }

  if (entrypoint.exists && existsSync(resolvedPath)) {
    const source = readSourcePreviewSync(resolvedPath);
    if (source && /\b(process\.env|spawn\(|execFile\(|exec\(|fetch\(|WebSocket\b)/.test(source)) {
      blockers.push({
        code: "top-level-side-effect-review",
        message: "entrypoint source contains side-effect-prone tokens that cold import must sandbox or review",
        evidence: entrypoint.relativePath,
      });
    }
  }

  const runtimeDependencies = unique([
    ...(packageSummary.dependencies ?? []),
    ...(packageSummary.peerDependencies ?? []),
    ...(packageSummary.optionalDependencies ?? []),
  ]);
  if (entrypoint.exists && runtimeDependencies.length > 0) {
    blockers.push({
      code: "dependency-install-required",
      message: "package declares runtime dependencies that must be installed before cold import",
      evidence: runtimeDependencies.join(", "),
    });
  }

  for (const sdkBlocker of sdkBlockers) {
    blockers.push({
      code: "sdk-alias-required",
      message: "fixture imports an SDK alias missing from target OpenClaw package exports",
      evidence: sdkBlocker,
    });
  }

  return {
    id: `cold-import.${entrypoint.kind}:${fixture.id}:${slugRef(entrypoint.relativePath)}`,
    fixture: fixture.id,
    packagePath: packageSummary.path,
    kind: entrypoint.kind,
    specifier: entrypoint.specifier,
    path: entrypoint.relativePath,
    status: readinessStatus(blockers),
    blockers,
    assertions: coldImportAssertions(blockers),
  };
}

function readSourcePreviewSync(filePath) {
  try {
    return existsSync(filePath) ? readFileSyncSmall(filePath) : "";
  } catch {
    return "";
  }
}

function readFileSyncSmall(filePath) {
  return readFileSync(filePath, "utf8").slice(0, 20000);
}

function readinessStatus(blockers) {
  if (blockers.length === 0) {
    return "ready";
  }
  if (blockers.some((blocker) => blocker.code === "sdk-alias-required")) {
    return "sdk-alias-required";
  }
  if (blockers.some((blocker) => blocker.code === "build-required")) {
    return "build-required";
  }
  if (blockers.some((blocker) => blocker.code === "missing-entrypoint")) {
    return "missing";
  }
  if (blockers.some((blocker) => blocker.code === "ts-loader-required")) {
    return "ts-loader-required";
  }
  if (blockers.some((blocker) => blocker.code === "dependency-install-required")) {
    return "dependency-install-required";
  }
  return "review-required";
}

function coldImportAssertions(blockers) {
  if (blockers.length === 0) {
    return ["entrypoint can be imported by Node without fixture credentials", "registration capture shim receives plugin registrations"];
  }
  return blockers.map((blocker) => assertionForBlocker(blocker.code));
}

function assertionForBlocker(code) {
  const assertions = {
    "build-required": "plugin build or source alias resolution runs before cold import",
    "dependency-install-required": "fixture dependencies are installed in an isolated workspace before cold import",
    "missing-entrypoint": "plugin package metadata points at an existing OpenClaw entrypoint",
    "sdk-alias-required": "target OpenClaw exports the imported SDK alias or provides a migration shim",
    "top-level-side-effect-review": "cold import sandbox blocks network/process side effects before register capture",
    "ts-loader-required": "TypeScript source entrypoint is compiled or loaded before cold import",
    "unknown-entrypoint-extension": "entrypoint extension has an explicit loader",
  };
  return assertions[code] ?? "cold import blocker has a documented mitigation";
}

export function validateColdImportReadiness(readiness) {
  const errors = [];

  for (const fixture of readiness.fixtures) {
    for (const entrypoint of fixture.entrypoints) {
      if (!entrypoint.id || !entrypoint.path) {
        errors.push(`${fixture.id}: entrypoint is missing id or path`);
      }
      if (!entrypoint.status) {
        errors.push(`${entrypoint.id}: missing readiness status`);
      }
      if (!Array.isArray(entrypoint.assertions) || entrypoint.assertions.length === 0) {
        errors.push(`${entrypoint.id}: missing cold-import assertions`);
      }
      if (entrypoint.status !== "ready" && entrypoint.blockers.length === 0) {
        errors.push(`${entrypoint.id}: blocked entrypoint has no blockers`);
      }
      for (const blocker of entrypoint.blockers) {
        if (!blocker.code || !blocker.evidence) {
          errors.push(`${entrypoint.id}: blocker is missing code or evidence`);
        }
      }
    }
  }

  return errors;
}

export async function writeColdImportReadiness(readiness, options = {}) {
  const jsonPath = options.jsonPath ?? defaultColdImportJsonPath;
  const markdownPath = options.markdownPath ?? defaultColdImportMarkdownPath;
  await mkdir(path.dirname(jsonPath), { recursive: true });
  await mkdir(path.dirname(markdownPath), { recursive: true });
  await writeFile(jsonPath, `${JSON.stringify(readiness, null, 2)}\n`, "utf8");
  await writeFile(markdownPath, `${renderColdImportReadinessMarkdown(readiness)}\n`, "utf8");
  return { jsonPath, markdownPath };
}

export function renderColdImportReadinessMarkdown(readiness) {
  return [
    "# Crabpot Cold Import Readiness",
    "",
    `Generated: ${readiness.generatedAt}`,
    "",
    "## Summary",
    "",
    markdownTable(
      [
        ["Fixtures", readiness.summary.fixtureCount],
        ["Entrypoints", readiness.summary.entrypointCount],
        ["Ready", readiness.summary.readyCount],
        ["Blocked", readiness.summary.blockedCount],
        ["TypeScript loader required", readiness.summary.tsLoaderRequiredCount],
        ["Build required", readiness.summary.buildRequiredCount],
        ["Dependency install required", readiness.summary.dependencyInstallRequiredCount],
        ["SDK alias required", readiness.summary.sdkAliasRequiredCount],
      ],
      ["Metric", "Value"],
    ),
    "",
    "## Entrypoints",
    "",
    markdownTable(
      readiness.fixtures.flatMap((fixture) =>
        fixture.entrypoints.map((entrypoint) => [
          fixture.id,
          entrypoint.kind,
          entrypoint.status,
          entrypoint.path,
          entrypoint.blockers.map((blocker) => blocker.code).join(", ") || "-",
          entrypoint.assertions.join("; "),
        ]),
      ),
      ["Fixture", "Kind", "Status", "Path", "Blockers", "Assertions"],
    ),
  ].join("\n");
}

function slugRef(ref) {
  return ref.replace(/[^a-zA-Z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function unique(values) {
  return [...new Set(values)];
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
