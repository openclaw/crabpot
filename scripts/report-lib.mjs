import { existsSync } from "node:fs";
import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { inspectManifest } from "./inspect-fixtures.mjs";
import { readManifest, repoRoot } from "./manifest-lib.mjs";

export const defaultReportDir = path.join(repoRoot, "reports");
export const defaultMarkdownReportPath = path.join(defaultReportDir, "crabpot-report.md");
export const defaultJsonReportPath = path.join(defaultReportDir, "crabpot-report.json");

const CONVERSATION_ACCESS_HOOKS = new Set(["agent_end", "llm_input", "llm_output"]);
const CAPTURE_GAP_REGISTRATIONS = new Set([
  "registerCommand",
  "registerGatewayMethod",
  "registerHttpRoute",
  "registerInteractiveHandler",
  "registerService",
]);
const CHANNEL_REGISTRATIONS = new Set([
  "createChatChannelPlugin",
  "defineChannelPluginEntry",
  "registerChannel",
]);

export async function buildReport(options = {}) {
  const generatedAt = options.generatedAt ?? process.env.CRABPOT_REPORT_GENERATED_AT ?? "deterministic";
  const manifest = await readManifest();
  const { inspections, failures } = await inspectManifest();
  const inspectionById = new Map(inspections.map((inspection) => [inspection.id, inspection]));

  const fixtures = [];
  const breakages = [];
  const warnings = [];
  const suggestions = [];
  const logs = [];
  const decisions = [];

  for (const fixture of manifest.fixtures) {
    const inspection = inspectionById.get(fixture.id) ?? emptyInspection(fixture);
    const fixtureReport = await buildFixtureReport(fixture, inspection);
    fixtures.push(fixtureReport);

    logs.push({
      fixture: fixture.id,
      code: "seam-inventory",
      level: "log",
      message: `observed ${inspection.hooks.length} hooks, ${inspection.registrations.length} registrations, and ${inspection.manifestContracts.length} manifest contracts`,
      evidence: [
        ...inspection.hooks.map((hook) => `hook:${hook}`),
        ...inspection.registrations.map((registration) => `registration:${registration}`),
        ...inspection.manifestContracts.map((contract) => `manifestContract:${contract}`),
      ],
    });

    classifyFixture({
      fixture,
      inspection,
      fixtureReport,
      warnings,
      suggestions,
      logs,
      decisions,
    });
  }

  for (const failure of failures) {
    const fixture = failure.split(":")[0] || "unknown";
    breakages.push({
      fixture,
      code: "missing-expected-seam",
      level: "breakage",
      message: failure,
      evidence: [failure],
    });
    decisions.push({
      fixture,
      decision: "inspector-follow-up",
      seam: "expected-seam",
      action: "Investigate whether OpenClaw removed a plugin-facing contract or the fixture pin changed upstream behavior.",
      evidence: failure,
    });
  }

  const report = {
    generatedAt,
    status: breakages.length === 0 ? "pass" : "fail",
    summary: {
      fixtureCount: fixtures.length,
      highPriorityFixtures: fixtures.filter((fixture) => fixture.priority === "high").length,
      breakageCount: breakages.length,
      warningCount: warnings.length,
      suggestionCount: suggestions.length,
      decisionCount: decisions.length,
    },
    fixtures,
    breakages,
    warnings,
    suggestions,
    logs,
    decisions,
  };

  return report;
}

export async function writeReport(report, options = {}) {
  const markdownPath = options.markdownPath ?? defaultMarkdownReportPath;
  const jsonPath = options.jsonPath ?? defaultJsonReportPath;
  await mkdir(path.dirname(markdownPath), { recursive: true });
  await mkdir(path.dirname(jsonPath), { recursive: true });
  await writeFile(markdownPath, `${renderMarkdownReport(report)}\n`, "utf8");
  await writeFile(jsonPath, `${JSON.stringify(report, null, 2)}\n`, "utf8");
  return { markdownPath, jsonPath };
}

export function renderMarkdownReport(report) {
  return [
    "# Crabpot Compatibility Report",
    "",
    `Generated: ${report.generatedAt}`,
    `Status: ${report.status.toUpperCase()}`,
    "",
    "## Summary",
    "",
    markdownTable(
      [
        ["Fixtures", report.summary.fixtureCount],
        ["High-priority fixtures", report.summary.highPriorityFixtures],
        ["Hard breakages", report.summary.breakageCount],
        ["Warnings", report.summary.warningCount],
        ["Compatibility suggestions", report.summary.suggestionCount],
        ["Decision rows", report.summary.decisionCount],
      ],
      ["Metric", "Value"],
    ),
    "",
    "## Hard Breakages",
    "",
    findingsTable(report.breakages),
    "",
    "## Warnings",
    "",
    findingsTable(report.warnings),
    "",
    "## Suggestions To OpenClaw Compat Layer",
    "",
    findingsTable(report.suggestions),
    "",
    "## Fixture Seam Inventory",
    "",
    markdownTable(
      report.fixtures.map((fixture) => [
        fixture.id,
        fixture.priority,
        fixture.seams.join(", "),
        fixture.hooks.join(", ") || "-",
        fixture.registrations.join(", ") || "-",
        fixture.manifestContracts.join(", ") || "-",
      ]),
      ["Fixture", "Priority", "Seams", "Hooks", "Registrations", "Manifest contracts"],
    ),
    "",
    "## Decision Matrix",
    "",
    markdownTable(
      report.decisions.map((decision) => [
        decision.fixture,
        decision.decision,
        decision.seam,
        decision.action,
        decision.evidence,
      ]),
      ["Fixture", "Decision", "Seam", "Action", "Evidence"],
    ),
    "",
    "## Raw Logs",
    "",
    findingsTable(report.logs),
  ].join("\n");
}

function classifyFixture({ fixture, inspection, fixtureReport, warnings, suggestions, logs, decisions }) {
  if (inspection.status !== "ok") {
    return;
  }

  for (const pluginManifest of fixtureReport.pluginManifests) {
    const providerAuthKeys = Object.keys(pluginManifest.providerAuthEnvVars ?? {});
    if (providerAuthKeys.length > 0) {
      warnings.push({
        fixture: fixture.id,
        code: "provider-auth-env-vars",
        level: "warning",
        message: "manifest uses providerAuthEnvVars legacy compatibility metadata",
        evidence: providerAuthKeys,
        compatRecord: "provider-auth-env-vars",
      });
      decisions.push({
        fixture: fixture.id,
        decision: "core-compat-adapter",
        seam: "env-auth",
        action: "Keep providerAuthEnvVars compatibility active while the inspector recommends manifest-schema migration upstream.",
        evidence: providerAuthKeys.join(", "),
      });
    }

    const channelEnvKeys = Object.keys(pluginManifest.channelEnvVars ?? {});
    if (channelEnvKeys.length > 0) {
      warnings.push({
        fixture: fixture.id,
        code: "channel-env-vars",
        level: "warning",
        message: "manifest uses channelEnvVars legacy compatibility metadata",
        evidence: channelEnvKeys,
        compatRecord: "channel-env-vars",
      });
      decisions.push({
        fixture: fixture.id,
        decision: "core-compat-adapter",
        seam: "channel-env",
        action: "Keep channelEnvVars compatibility active until channel setup metadata has a stable replacement path.",
        evidence: channelEnvKeys.join(", "),
      });
    }
  }

  const conversationHooks = inspection.hooks.filter((hook) => CONVERSATION_ACCESS_HOOKS.has(hook));
  if (conversationHooks.length > 0) {
    warnings.push({
      fixture: fixture.id,
      code: "conversation-access-hook",
      level: "warning",
      message: "fixture observes raw model or conversation content and needs privacy-boundary contract probes",
      evidence: conversationHooks,
    });
    decisions.push({
      fixture: fixture.id,
      decision: "inspector-follow-up",
      seam: "conversation-access",
      action: "Add synthetic llm_input/llm_output/agent_end probes before tightening hook payloads or redaction behavior.",
      evidence: conversationHooks.join(", "),
    });
  }

  const rootSdkImports = fixtureReport.sdkImports.filter((specifier) => specifier === "openclaw/plugin-sdk");
  if (rootSdkImports.length > 0) {
    warnings.push({
      fixture: fixture.id,
      code: "legacy-root-sdk-import",
      level: "warning",
      message: "fixture imports the root plugin SDK barrel",
      evidence: unique(rootSdkImports),
      compatRecord: "legacy-root-sdk-import",
    });
    decisions.push({
      fixture: fixture.id,
      decision: "core-compat-adapter",
      seam: "sdk-import",
      action: "Keep the root SDK barrel stable or expose a machine-readable migration map before removing aliases.",
      evidence: unique(rootSdkImports).join(", "),
    });
  }

  const captureGapRegistrations = inspection.registrations.filter((registration) =>
    CAPTURE_GAP_REGISTRATIONS.has(registration),
  );
  if (captureGapRegistrations.length > 0) {
    suggestions.push({
      fixture: fixture.id,
      code: "registration-capture-gap",
      level: "suggestion",
      message: "future inspector capture API should record lifecycle, route, gateway, command, and interactive registrations",
      evidence: captureGapRegistrations,
    });
    decisions.push({
      fixture: fixture.id,
      decision: "inspector-follow-up",
      seam: "registration-capture",
      action: "Expose or mirror a full public API capture shim before treating these runtime-only seams as covered.",
      evidence: captureGapRegistrations.join(", "),
    });
  }

  if (inspection.hooks.includes("before_tool_call")) {
    suggestions.push({
      fixture: fixture.id,
      code: "before-tool-call-probe",
      level: "suggestion",
      message: "add contract probes for before_tool_call terminal, block, and approval semantics",
      evidence: ["before_tool_call"],
    });
    decisions.push({
      fixture: fixture.id,
      decision: "inspector-follow-up",
      seam: "tool-policy",
      action: "Probe before_tool_call return shapes before changing tool-call approval or block behavior.",
      evidence: "before_tool_call",
    });
  }

  const channelRegistrations = inspection.registrations.filter((registration) =>
    CHANNEL_REGISTRATIONS.has(registration),
  );
  if (channelRegistrations.length > 0) {
    suggestions.push({
      fixture: fixture.id,
      code: "channel-contract-probe",
      level: "suggestion",
      message: "add channel envelope, config-schema, and runtime metadata probes",
      evidence: channelRegistrations,
    });
    decisions.push({
      fixture: fixture.id,
      decision: "inspector-follow-up",
      seam: "channel-runtime",
      action: "Probe channel setup and message envelope contracts before changing channel runtime payloads.",
      evidence: channelRegistrations.join(", "),
    });
  }

  const runtimeToolOnly = inspection.registrations.includes("registerTool") && !inspection.manifestContracts.includes("tools");
  if (runtimeToolOnly) {
    suggestions.push({
      fixture: fixture.id,
      code: "runtime-tool-capture",
      level: "suggestion",
      message: "tool shape is only visible after runtime registration capture",
      evidence: ["registerTool"],
    });
    decisions.push({
      fixture: fixture.id,
      decision: "inspector-follow-up",
      seam: "tool-schema",
      action: "Capture registered tool schemas from plugin register() before judging tool compatibility.",
      evidence: "registerTool without manifest contracts.tools",
    });
  }

  if (inspection.manifestContracts.length > 0) {
    logs.push({
      fixture: fixture.id,
      code: "declarative-contracts",
      level: "log",
      message: "fixture declares manifest contracts that can be checked without executing plugin code",
      evidence: inspection.manifestContracts,
    });
    decisions.push({
      fixture: fixture.id,
      decision: "no-action",
      seam: "manifest-contract",
      action: "Keep checking this declarative contract in default offline CI.",
      evidence: inspection.manifestContracts.join(", "),
    });
  }
}

async function buildFixtureReport(fixture, inspection) {
  const checkoutPath = path.join(repoRoot, fixture.path);
  const sourceRoot = fixture.subdir ? path.join(checkoutPath, fixture.subdir) : checkoutPath;
  const sourceFiles = await listSourceFiles(sourceRoot);
  if (sourceRoot !== checkoutPath) {
    sourceFiles.push(...(await listSourceFiles(checkoutPath, { shallowRootOnly: true })));
  }

  const pluginManifests = await readPluginManifests(checkoutPath, sourceRoot);
  const packageJson = await readPackageSummary(checkoutPath, sourceRoot);
  const sdkImports = await collectSdkImports(sourceFiles);

  return {
    id: fixture.id,
    name: fixture.name,
    priority: fixture.priority,
    seams: fixture.seams,
    why: fixture.why,
    status: inspection.status,
    hooks: inspection.hooks,
    registrations: inspection.registrations,
    manifestContracts: inspection.manifestContracts,
    pluginManifests,
    package: packageJson,
    sdkImports: unique(sdkImports),
  };
}

async function readPluginManifests(checkoutPath, sourceRoot) {
  const candidates = unique(
    [path.join(sourceRoot, "openclaw.plugin.json"), path.join(checkoutPath, "openclaw.plugin.json")].filter(
      existsSync,
    ),
  );
  const manifests = [];

  for (const manifestPath of candidates) {
    const raw = await readFile(manifestPath, "utf8");
    const manifest = JSON.parse(raw);
    manifests.push({
      path: path.relative(repoRoot, manifestPath),
      id: manifest.id ?? null,
      name: manifest.name ?? null,
      version: manifest.version ?? null,
      contracts: Object.keys(manifest.contracts ?? {}).sort(),
      providerAuthEnvVars: manifest.providerAuthEnvVars ?? {},
      channelEnvVars: manifest.channelEnvVars ?? {},
      activation: manifest.activation ?? null,
    });
  }

  return manifests;
}

async function readPackageSummary(checkoutPath, sourceRoot) {
  const candidates = unique([path.join(sourceRoot, "package.json"), path.join(checkoutPath, "package.json")].filter(existsSync));
  if (candidates.length === 0) {
    return null;
  }

  const packageJson = JSON.parse(await readFile(candidates[0], "utf8"));
  return {
    path: path.relative(repoRoot, candidates[0]),
    name: packageJson.name ?? null,
    version: packageJson.version ?? null,
    type: packageJson.type ?? null,
  };
}

async function collectSdkImports(sourceFiles) {
  const imports = [];
  const importRegex = /(?:from\s*["'`]|import\(\s*["'`])([^"'`]*openclaw\/plugin-sdk[^"'`]*)/g;

  for (const filePath of sourceFiles) {
    const text = await readFile(filePath, "utf8");
    for (const match of text.matchAll(importRegex)) {
      imports.push(match[1]);
    }
  }

  return imports.sort();
}

async function listSourceFiles(root, options = {}) {
  if (!existsSync(root)) {
    return [];
  }

  const output = [];
  await walk(root, output, options);
  return output;
}

async function walk(dir, output, options) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const entryPath = path.join(dir, entry.name);
    const normalized = entryPath.split(path.sep).join("/");

    if (entry.isDirectory()) {
      if (shouldSkipDir(entry.name, normalized)) {
        continue;
      }
      if (options.shallowRootOnly) {
        continue;
      }
      await walk(entryPath, output, options);
      continue;
    }

    if (isSourceFile(entry.name, normalized)) {
      output.push(entryPath);
    }
  }
}

function shouldSkipDir(name, normalizedPath) {
  return (
    name === "node_modules" ||
    name === "dist" ||
    name === "build" ||
    name === "coverage" ||
    name === ".git" ||
    /\/tests?\//.test(`${normalizedPath}/`) ||
    /\/test-shims\//.test(`${normalizedPath}/`)
  );
}

function isSourceFile(name, normalizedPath) {
  return (
    /\.(cjs|mjs|js|ts)$/.test(name) &&
    !name.endsWith(".d.ts") &&
    !/\.test\./.test(name) &&
    !/\.spec\./.test(name) &&
    !/\/tests?\//.test(normalizedPath)
  );
}

function emptyInspection(fixture) {
  return {
    id: fixture.id,
    status: "missing",
    hooks: [],
    registrations: [],
    manifestContracts: [],
  };
}

function findingsTable(findings) {
  if (findings.length === 0) {
    return "_none_";
  }

  return markdownTable(
    findings.map((finding) => [
      finding.fixture,
      finding.code,
      finding.level,
      finding.message,
      (finding.evidence ?? []).join(", ") || "-",
      finding.compatRecord ?? "-",
    ]),
    ["Fixture", "Code", "Level", "Message", "Evidence", "Compat record"],
  );
}

function markdownTable(rows, headers) {
  if (rows.length === 0) {
    return "_none_";
  }

  const allRows = [headers, ...rows.map((row) => row.map(String))];
  const widths = headers.map((_, columnIndex) =>
    Math.max(...allRows.map((row) => escapeCell(row[columnIndex] ?? "").length)),
  );
  const formatRow = (row) =>
    `| ${row.map((cell, index) => escapeCell(cell).padEnd(widths[index], " ")).join(" | ")} |`;
  const separator = `| ${widths.map((width) => "-".repeat(width)).join(" | ")} |`;

  return [formatRow(headers), separator, ...rows.map((row) => formatRow(row.map(String)))].join("\n");
}

function escapeCell(value) {
  return String(value).replaceAll("|", "\\|").replaceAll("\n", " ");
}

function unique(values) {
  return [...new Set(values)];
}
