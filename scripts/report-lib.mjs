import { existsSync } from "node:fs";
import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { inspectManifest } from "./inspect-fixtures.mjs";
import { readManifest, repoRoot } from "./manifest-lib.mjs";

export const defaultReportDir = path.join(repoRoot, "reports");
export const defaultMarkdownReportPath = path.join(defaultReportDir, "crabpot-report.md");
export const defaultJsonReportPath = path.join(defaultReportDir, "crabpot-report.json");
export const defaultIssuesReportPath = path.join(defaultReportDir, "crabpot-issues.md");

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
  const targetOpenClaw = await readTargetOpenClaw(manifest, options.openclawPath);
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
      targetOpenClaw,
      breakages,
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

  classifyCompatRecordCoverage({
    targetOpenClaw,
    findings: [...warnings, ...suggestions],
    suggestions,
    logs,
    decisions,
  });

  const issues = buildIssues({ breakages, warnings, suggestions });
  const contractProbes = buildContractProbes({ warnings, suggestions, fixtures });

  const report = {
    generatedAt,
    targetOpenClaw,
    status: breakages.length === 0 ? "pass" : "fail",
    summary: {
      fixtureCount: fixtures.length,
      highPriorityFixtures: fixtures.filter((fixture) => fixture.priority === "high").length,
      breakageCount: breakages.length,
      warningCount: warnings.length,
      suggestionCount: suggestions.length,
      decisionCount: decisions.length,
      issueCount: issues.length,
      p0IssueCount: issues.filter((issue) => issue.severity === "P0").length,
      p1IssueCount: issues.filter((issue) => issue.severity === "P1").length,
      contractProbeCount: contractProbes.length,
    },
    fixtures,
    breakages,
    warnings,
    suggestions,
    issues,
    contractProbes,
    logs,
    decisions,
  };

  return report;
}

export async function writeReport(report, options = {}) {
  const markdownPath = options.markdownPath ?? defaultMarkdownReportPath;
  const jsonPath = options.jsonPath ?? defaultJsonReportPath;
  const issuesPath = options.issuesPath ?? defaultIssuesReportPath;
  await mkdir(path.dirname(markdownPath), { recursive: true });
  await mkdir(path.dirname(jsonPath), { recursive: true });
  await mkdir(path.dirname(issuesPath), { recursive: true });
  await writeFile(markdownPath, `${renderMarkdownReport(report)}\n`, "utf8");
  await writeFile(jsonPath, `${JSON.stringify(report, null, 2)}\n`, "utf8");
  await writeFile(issuesPath, `${renderIssuesReport(report)}\n`, "utf8");
  return { markdownPath, jsonPath, issuesPath };
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
        ["Issue findings", report.summary.issueCount],
        ["P0 issues", report.summary.p0IssueCount],
        ["P1 issues", report.summary.p1IssueCount],
        ["Contract probes", report.summary.contractProbeCount],
        ["Decision rows", report.summary.decisionCount],
      ],
      ["Metric", "Value"],
    ),
    "",
    "## Hard Breakages",
    "",
    findingsTable(report.breakages),
    "",
    "## Target OpenClaw Compat Records",
    "",
    targetOpenClawTable(report.targetOpenClaw),
    "",
    "## Warnings",
    "",
    findingsTable(report.warnings),
    "",
    "## Suggestions To OpenClaw Compat Layer",
    "",
    findingsTable(report.suggestions),
    "",
    "## Issue Findings",
    "",
    issuesTable(report.issues),
    "",
    "## Contract Probe Backlog",
    "",
    contractProbesTable(report.contractProbes),
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

export function renderIssuesReport(report) {
  return [
    "# Crabpot Issue Findings",
    "",
    `Generated: ${report.generatedAt}`,
    `Status: ${report.status.toUpperCase()}`,
    "",
    "## Triage Summary",
    "",
    markdownTable(
      [
        ["Issue findings", report.summary.issueCount],
        ["P0", report.summary.p0IssueCount],
        ["P1", report.summary.p1IssueCount],
        ["Contract probes", report.summary.contractProbeCount],
      ],
      ["Metric", "Value"],
    ),
    "",
    "## Issues",
    "",
    issuesTable(report.issues),
    "",
    "## Contract Probe Backlog",
    "",
    contractProbesTable(report.contractProbes),
  ].join("\n");
}

function buildIssues({ breakages, warnings, suggestions }) {
  const findings = [
    ...breakages.map((finding) => ({ ...finding, severity: "P0", owner: "core", decision: "core-compat-adapter" })),
    ...warnings.map((finding) => issueMetadata(finding)),
    ...suggestions.map((finding) => issueMetadata(finding)),
  ];

  return findings
    .filter((finding) => finding.severity)
    .sort(issueSort)
    .map((finding, index) => ({
      id: `CRABPOT-${String(index + 1).padStart(4, "0")}`,
      fixture: finding.fixture,
      severity: finding.severity,
      owner: finding.owner,
      code: finding.code,
      decision: finding.decision,
      status: finding.level === "breakage" ? "blocking" : "open",
      title: issueTitle(finding),
      evidence: finding.evidence ?? [],
      compatRecord: finding.compatRecord ?? null,
    }));
}

function issueMetadata(finding) {
  const metadataByCode = {
    "before-tool-call-probe": {
      severity: "P1",
      owner: "inspector",
      decision: "inspector-follow-up",
      title: "before_tool_call needs terminal/block/approval probes",
    },
    "channel-contract-probe": {
      severity: "P2",
      owner: "inspector",
      decision: "inspector-follow-up",
      title: "channel runtime needs envelope/config probes",
    },
    "channel-env-vars": {
      severity: "P2",
      owner: "core",
      decision: "core-compat-adapter",
      title: "channelEnvVars legacy manifest metadata must stay covered",
    },
    "conversation-access-hook": {
      severity: "P1",
      owner: "core",
      decision: "inspector-follow-up",
      title: "conversation-access hooks need privacy-boundary probes",
    },
    "legacy-root-sdk-import": {
      severity: "P2",
      owner: "core",
      decision: "core-compat-adapter",
      title: "root plugin SDK barrel is still used by fixtures",
    },
    "missing-compat-record": {
      severity: "P1",
      owner: "core",
      decision: "core-compat-adapter",
      title: "compat-dependent behavior lacks registry coverage",
    },
    "package-build-artifact-entrypoint": {
      severity: "P2",
      owner: "inspector",
      decision: "inspector-follow-up",
      title: "cold import requires package build output",
    },
    "package-entrypoint-missing": {
      severity: "P1",
      owner: "plugin",
      decision: "plugin-upstream-fix",
      title: "OpenClaw package entrypoint is missing",
    },
    "package-json-missing": {
      severity: "P2",
      owner: "plugin",
      decision: "plugin-upstream-fix",
      title: "package metadata is missing",
    },
    "package-manifest-version-drift": {
      severity: "P2",
      owner: "plugin",
      decision: "plugin-upstream-fix",
      title: "package and manifest versions drift",
    },
    "package-openclaw-entry-missing": {
      severity: "P2",
      owner: "plugin",
      decision: "plugin-upstream-fix",
      title: "OpenClaw package entrypoint metadata is missing",
    },
    "package-openclaw-metadata-missing": {
      severity: "P2",
      owner: "plugin",
      decision: "plugin-upstream-fix",
      title: "OpenClaw package metadata is missing",
    },
    "package-plugin-api-compat-missing": {
      severity: "P2",
      owner: "plugin",
      decision: "plugin-upstream-fix",
      title: "plugin API compatibility range is missing",
    },
    "provider-auth-env-vars": {
      severity: "P2",
      owner: "core",
      decision: "core-compat-adapter",
      title: "providerAuthEnvVars legacy manifest metadata must stay covered",
    },
    "registration-capture-gap": {
      severity: "P1",
      owner: "inspector",
      decision: "inspector-follow-up",
      title: "runtime registrations need capture before contract judgment",
    },
    "runtime-tool-capture": {
      severity: "P2",
      owner: "inspector",
      decision: "inspector-follow-up",
      title: "runtime tool schema needs registration capture",
    },
  };
  return {
    ...finding,
    ...(metadataByCode[finding.code] ?? {
      severity: "P3",
      owner: "inspector",
      decision: "inspector-follow-up",
      title: finding.message,
    }),
  };
}

function buildContractProbes({ warnings, suggestions, fixtures }) {
  const fixtureById = new Map(fixtures.map((fixture) => [fixture.id, fixture]));
  const probes = [];
  const probeRules = {
    "before-tool-call-probe": {
      id: "hook.before_tool_call.terminal-block-approval",
      contract: "Hook returns preserve terminal, block, and approval semantics.",
      target: "hook-runner",
    },
    "channel-contract-probe": {
      id: "channel.runtime.envelope-config-metadata",
      contract: "Channel setup, message envelope, sender metadata, and config schema remain stable.",
      target: "channel-runtime",
    },
    "conversation-access-hook": {
      id: "hook.llm-observer.privacy-payload",
      contract: "LLM observer hooks receive documented prompt/output fields with expected redaction behavior.",
      target: "hook-runner",
    },
    "legacy-root-sdk-import": {
      id: "sdk.import.root-barrel-cold-import",
      contract: "Root plugin SDK barrel remains importable or has a machine-readable migration path.",
      target: "sdk-alias",
    },
    "provider-auth-env-vars": {
      id: "manifest.compat.provider-auth-env-vars",
      contract: "Legacy provider auth env metadata continues to map into config/help surfaces.",
      target: "manifest-loader",
    },
    "channel-env-vars": {
      id: "manifest.compat.channel-env-vars",
      contract: "Legacy channel env metadata continues to map into channel setup/help surfaces.",
      target: "manifest-loader",
    },
    "registration-capture-gap": {
      id: "api.capture.runtime-registrars",
      contract: "External inspector capture records service, route, gateway, command, and interactive registrations.",
      target: "inspector-capture-api",
    },
    "package-build-artifact-entrypoint": {
      id: "package.entrypoint.build-before-cold-import",
      contract: "Inspector can build or resolve source aliases before cold importing package entrypoints.",
      target: "package-loader",
    },
    "package-entrypoint-missing": {
      id: "package.entrypoint.exists",
      contract: "OpenClaw package entrypoints resolve to files in the published or built plugin package.",
      target: "package-loader",
    },
    "package-openclaw-entry-missing": {
      id: "package.entrypoint.openclaw-metadata",
      contract: "OpenClaw package metadata declares entrypoints for cold import and registration capture.",
      target: "package-loader",
    },
    "package-openclaw-metadata-missing": {
      id: "package.metadata.openclaw",
      contract: "Plugins that register OpenClaw APIs declare OpenClaw install and entrypoint metadata.",
      target: "package-loader",
    },
    "package-manifest-version-drift": {
      id: "package.metadata.version-alignment",
      contract: "Package and OpenClaw manifest versions stay aligned for release compatibility reporting.",
      target: "package-loader",
    },
    "package-plugin-api-compat-missing": {
      id: "package.compat.plugin-api-range",
      contract: "Package metadata declares the OpenClaw plugin API range used by the plugin.",
      target: "package-loader",
    },
    "runtime-tool-capture": {
      id: "tool.registration.schema-capture",
      contract: "Registered runtime tools expose stable names, input schemas, and result metadata.",
      target: "tool-runtime",
    },
  };

  for (const finding of [...warnings, ...suggestions]) {
    const rule = probeRules[finding.code];
    if (!rule) {
      continue;
    }
    probes.push({
      id: `${rule.id}:${finding.fixture}`,
      fixture: finding.fixture,
      priority: probePriority(finding.code, fixtureById.get(finding.fixture)?.priority),
      target: rule.target,
      contract: rule.contract,
      evidence: finding.evidence ?? [],
    });
  }

  return dedupeBy(probes, (probe) => probe.id).sort(
    (left, right) => priorityRank(left.priority) - priorityRank(right.priority) || left.id.localeCompare(right.id),
  );
}

function classifyCompatRecordCoverage({ targetOpenClaw, findings, suggestions, logs, decisions }) {
  if (targetOpenClaw.status !== "ok") {
    logs.push({
      fixture: "openclaw",
      code: "target-openclaw-unavailable",
      level: "log",
      message: "target OpenClaw checkout was not available, so compat record coverage was not checked",
      evidence: [targetOpenClaw.configuredPath ?? "not configured"],
    });
    return;
  }

  const knownRecords = new Set(targetOpenClaw.compatRecords);
  for (const finding of findings.filter((item) => item.compatRecord)) {
    if (knownRecords.has(finding.compatRecord)) {
      logs.push({
        fixture: finding.fixture,
        code: "compat-record-present",
        level: "log",
        message: "target OpenClaw checkout has a matching compat registry record",
        evidence: [finding.compatRecord],
        compatRecord: finding.compatRecord,
      });
      continue;
    }

    suggestions.push({
      fixture: finding.fixture,
      code: "missing-compat-record",
      level: "suggestion",
      message: "fixture depends on a compatibility behavior that is not represented in the target compat registry",
      evidence: [finding.compatRecord],
      compatRecord: finding.compatRecord,
    });
    decisions.push({
      fixture: finding.fixture,
      decision: "core-compat-adapter",
      seam: "compat-registry",
      action: "Add or restore a machine-readable OpenClaw compat record before changing this plugin-facing behavior.",
      evidence: finding.compatRecord,
    });
  }
}

function classifyFixture({ fixture, inspection, fixtureReport, targetOpenClaw, breakages, warnings, suggestions, logs, decisions }) {
  if (inspection.status !== "ok") {
    return;
  }

  classifyHookNameCoverage({ fixture, inspection, targetOpenClaw, breakages, logs });
  classifyRegistrationNameCoverage({ fixture, inspection, targetOpenClaw, breakages, logs });
  classifyPackageContracts({ fixture, inspection, fixtureReport, warnings, suggestions, logs, decisions });

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
  const conversationHookDetails = inspection.hookDetails.filter((hook) => CONVERSATION_ACCESS_HOOKS.has(hook.name));
  if (conversationHooks.length > 0) {
    warnings.push({
      fixture: fixture.id,
      code: "conversation-access-hook",
      level: "warning",
      message: "fixture observes raw model or conversation content and needs privacy-boundary contract probes",
      evidence: detailEvidence(conversationHookDetails),
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
  const rootSdkImportDetails = fixtureReport.sdkImportDetails.filter(
    (sdkImport) => sdkImport.specifier === "openclaw/plugin-sdk",
  );
  if (rootSdkImports.length > 0) {
    warnings.push({
      fixture: fixture.id,
      code: "legacy-root-sdk-import",
      level: "warning",
      message: "fixture imports the root plugin SDK barrel",
      evidence: detailEvidence(rootSdkImportDetails, "specifier"),
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
  const captureGapRegistrationDetails = inspection.registrationDetails.filter((registration) =>
    CAPTURE_GAP_REGISTRATIONS.has(registration.name),
  );
  if (captureGapRegistrations.length > 0) {
    suggestions.push({
      fixture: fixture.id,
      code: "registration-capture-gap",
      level: "suggestion",
      message: "future inspector capture API should record lifecycle, route, gateway, command, and interactive registrations",
      evidence: detailEvidence(captureGapRegistrationDetails),
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
    const hookDetails = inspection.hookDetails.filter((hook) => hook.name === "before_tool_call");
    suggestions.push({
      fixture: fixture.id,
      code: "before-tool-call-probe",
      level: "suggestion",
      message: "add contract probes for before_tool_call terminal, block, and approval semantics",
      evidence: detailEvidence(hookDetails),
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
  const channelRegistrationDetails = inspection.registrationDetails.filter((registration) =>
    CHANNEL_REGISTRATIONS.has(registration.name),
  );
  if (channelRegistrations.length > 0) {
    suggestions.push({
      fixture: fixture.id,
      code: "channel-contract-probe",
      level: "suggestion",
      message: "add channel envelope, config-schema, and runtime metadata probes",
      evidence: detailEvidence(channelRegistrationDetails),
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
    const toolRegistrationDetails = inspection.registrationDetails.filter(
      (registration) => registration.name === "registerTool",
    );
    suggestions.push({
      fixture: fixture.id,
      code: "runtime-tool-capture",
      level: "suggestion",
      message: "tool shape is only visible after runtime registration capture",
      evidence: detailEvidence(toolRegistrationDetails),
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

function classifyHookNameCoverage({ fixture, inspection, targetOpenClaw, breakages, logs }) {
  if (targetOpenClaw.status !== "ok" || targetOpenClaw.hookNames.length === 0) {
    return;
  }

  const knownHookNames = new Set(targetOpenClaw.hookNames);
  const unknownHooks = inspection.hookDetails.filter((hook) => !knownHookNames.has(hook.name));
  if (unknownHooks.length === 0) {
    logs.push({
      fixture: fixture.id,
      code: "hook-names-present",
      level: "log",
      message: "all observed hooks exist in the target OpenClaw hook registry",
      evidence: inspection.hooks,
    });
    return;
  }

  breakages.push({
    fixture: fixture.id,
    code: "unknown-hook-name",
    level: "breakage",
    message: "fixture registers hooks that are not present in the target OpenClaw hook registry",
    evidence: detailEvidence(unknownHooks),
  });
}

function classifyRegistrationNameCoverage({ fixture, inspection, targetOpenClaw, breakages, logs }) {
  if (targetOpenClaw.status !== "ok" || targetOpenClaw.apiRegistrars.length === 0) {
    return;
  }

  const knownRegistrars = new Set(targetOpenClaw.apiRegistrars);
  const apiRegistrations = inspection.registrationDetails.filter((registration) =>
    registration.name.startsWith("register"),
  );
  const unknownRegistrations = apiRegistrations.filter((registration) => !knownRegistrars.has(registration.name));
  if (unknownRegistrations.length === 0) {
    logs.push({
      fixture: fixture.id,
      code: "api-registrars-present",
      level: "log",
      message: "all observed api.register* calls exist in the target OpenClaw plugin API builder",
      evidence: unique(apiRegistrations.map((registration) => registration.name)).sort(),
    });
    return;
  }

  breakages.push({
    fixture: fixture.id,
    code: "unknown-registration-name",
    level: "breakage",
    message: "fixture calls api.register* methods that are not present in the target OpenClaw plugin API builder",
    evidence: detailEvidence(unknownRegistrations),
  });
}

function classifyPackageContracts({ fixture, inspection, fixtureReport, warnings, suggestions, logs, decisions }) {
  const packageSummary = fixtureReport.package;
  if (!packageSummary) {
    warnings.push({
      fixture: fixture.id,
      code: "package-json-missing",
      level: "warning",
      message: "fixture has no package.json to describe install and plugin entrypoint metadata",
      evidence: [fixture.path],
    });
    decisions.push({
      fixture: fixture.id,
      decision: "plugin-upstream-fix",
      seam: "package-metadata",
      action: "Ask the plugin to publish package metadata before treating install/cold-import checks as covered.",
      evidence: fixture.path,
    });
    return;
  }

  logs.push({
    fixture: fixture.id,
    code: "package-metadata",
    level: "log",
    message: "selected package metadata for plugin contract checks",
    evidence: [
      packageSummary.path,
      packageSummary.name ?? "unnamed",
      packageSummary.version ? `version:${packageSummary.version}` : "version:missing",
    ],
  });

  const manifestVersions = fixtureReport.pluginManifests
    .map((manifest) => manifest.version)
    .filter((version) => typeof version === "string" && version.length > 0);
  const mismatchedManifestVersions = manifestVersions.filter((version) => version !== packageSummary.version);
  if (packageSummary.version && mismatchedManifestVersions.length > 0) {
    warnings.push({
      fixture: fixture.id,
      code: "package-manifest-version-drift",
      level: "warning",
      message: "package.json and openclaw.plugin.json publish different versions",
      evidence: [`package:${packageSummary.version}`, ...mismatchedManifestVersions.map((version) => `manifest:${version}`)],
    });
    decisions.push({
      fixture: fixture.id,
      decision: "plugin-upstream-fix",
      seam: "package-metadata",
      action: "Ask the plugin to keep package and manifest versions aligned before relying on release compatibility signals.",
      evidence: `${packageSummary.version} != ${mismatchedManifestVersions.join(", ")}`,
    });
  }

  if (packageSummary.openclaw && !packageSummary.openclaw.compatPluginApi) {
    warnings.push({
      fixture: fixture.id,
      code: "package-plugin-api-compat-missing",
      level: "warning",
      message: "package openclaw metadata does not declare compat.pluginApi",
      evidence: [packageSummary.path],
    });
    decisions.push({
      fixture: fixture.id,
      decision: "plugin-upstream-fix",
      seam: "package-metadata",
      action: "Ask the plugin to declare the plugin API range it was built against.",
      evidence: packageSummary.path,
    });
  }

  if (packageSummary.openclaw && packageSummary.openclaw.entrypoints.length === 0) {
    warnings.push({
      fixture: fixture.id,
      code: "package-openclaw-entry-missing",
      level: "warning",
      message: "package openclaw metadata does not declare plugin entrypoints",
      evidence: [packageSummary.path],
    });
    decisions.push({
      fixture: fixture.id,
      decision: "plugin-upstream-fix",
      seam: "package-entrypoint",
      action: "Ask the plugin to declare openclaw.extensions or runtimeExtensions so cold import can target the correct entrypoint.",
      evidence: packageSummary.path,
    });
  }

  const missingEntrypoints = packageSummary.openclaw?.entrypoints.filter((entrypoint) => !entrypoint.exists) ?? [];
  const buildEntrypoints = missingEntrypoints.filter((entrypoint) => entrypoint.requiresBuild);
  const plainMissingEntrypoints = missingEntrypoints.filter((entrypoint) => !entrypoint.requiresBuild);

  if (buildEntrypoints.length > 0) {
    suggestions.push({
      fixture: fixture.id,
      code: "package-build-artifact-entrypoint",
      level: "suggestion",
      message: "package OpenClaw entrypoint points at build output that is not present in the source fixture checkout",
      evidence: buildEntrypoints.map((entrypoint) => `${entrypoint.kind}:${entrypoint.specifier} -> ${entrypoint.relativePath}`),
    });
    decisions.push({
      fixture: fixture.id,
      decision: "inspector-follow-up",
      seam: "cold-import",
      action: "Run the plugin build or resolve source entrypoint aliases before cold-importing this fixture.",
      evidence: buildEntrypoints.map((entrypoint) => entrypoint.specifier).join(", "),
    });
  }

  if (plainMissingEntrypoints.length > 0) {
    warnings.push({
      fixture: fixture.id,
      code: "package-entrypoint-missing",
      level: "warning",
      message: "package OpenClaw entrypoint does not exist in the fixture checkout",
      evidence: plainMissingEntrypoints.map((entrypoint) => `${entrypoint.kind}:${entrypoint.specifier} -> ${entrypoint.relativePath}`),
    });
    decisions.push({
      fixture: fixture.id,
      decision: "plugin-upstream-fix",
      seam: "package-entrypoint",
      action: "Ask the plugin to publish a valid OpenClaw entrypoint or update package metadata.",
      evidence: plainMissingEntrypoints.map((entrypoint) => entrypoint.specifier).join(", "),
    });
  }

  const sourceEntrypoints = packageSummary.openclaw?.entrypoints.filter((entrypoint) => entrypoint.exists && entrypoint.relativePath.endsWith(".ts")) ?? [];
  if (sourceEntrypoints.length > 0) {
    logs.push({
      fixture: fixture.id,
      code: "typescript-source-entrypoint",
      level: "log",
      message: "package OpenClaw entrypoint resolves to TypeScript source in this fixture checkout",
      evidence: sourceEntrypoints.map((entrypoint) => `${entrypoint.kind}:${entrypoint.relativePath}`),
    });
  }

  if (inspection.registrations.length > 0 && !packageSummary.openclaw) {
    warnings.push({
      fixture: fixture.id,
      code: "package-openclaw-metadata-missing",
      level: "warning",
      message: "fixture registers plugin APIs but the selected package.json has no openclaw metadata",
      evidence: [packageSummary.path, ...inspection.registrations],
    });
    decisions.push({
      fixture: fixture.id,
      decision: "plugin-upstream-fix",
      seam: "package-metadata",
      action: "Ask the plugin to declare OpenClaw install and entrypoint metadata in package.json.",
      evidence: packageSummary.path,
    });
  }
}

async function buildFixtureReport(fixture, inspection) {
  const checkoutPath = path.join(repoRoot, fixture.path);
  const sourceRoot = fixture.subdir ? path.join(checkoutPath, fixture.subdir) : checkoutPath;

  const pluginManifests = await readPluginManifests(checkoutPath, sourceRoot);
  const packageSummaries = await readPackageSummaries(checkoutPath, sourceRoot);
  const packageJson = selectPrimaryPackage(packageSummaries);
  const sdkImports = unique((inspection.sdkImports ?? []).map((sdkImport) => sdkImport.specifier));

  return {
    id: fixture.id,
    name: fixture.name,
    priority: fixture.priority,
    seams: fixture.seams,
    why: fixture.why,
    status: inspection.status,
    hooks: inspection.hooks,
    hookDetails: inspection.hookDetails ?? [],
    registrations: inspection.registrations,
    registrationDetails: inspection.registrationDetails ?? [],
    manifestContracts: inspection.manifestContracts,
    manifestFiles: inspection.manifestFiles ?? [],
    sourceFiles: inspection.sourceFiles ?? [],
    pluginManifests,
    package: packageJson,
    packages: packageSummaries,
    sdkImports,
    sdkImportDetails: inspection.sdkImports ?? [],
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

async function readTargetOpenClaw(manifest, configuredPath) {
  if (configuredPath === false) {
    return {
      configuredPath: null,
      status: "disabled",
      compatRecords: [],
      hookNames: [],
      apiRegistrars: [],
    };
  }

  const requestedPath = configuredPath ?? manifest.openclaw?.defaultCheckoutPath ?? null;
  if (!requestedPath) {
    return {
      configuredPath: null,
      status: "not-configured",
      compatRecords: [],
      hookNames: [],
      apiRegistrars: [],
    };
  }

  const resolvedPath = path.resolve(repoRoot, requestedPath);
  const registryPath = path.join(resolvedPath, "src/plugins/compat/registry.ts");
  const hookTypesPath = path.join(resolvedPath, "src/plugins/hook-types.ts");
  if (!existsSync(registryPath)) {
    return {
      configuredPath: requestedPath,
      status: "missing",
      compatRecords: [],
      hookNames: [],
      apiRegistrars: [],
    };
  }

  const registrySource = await readFile(registryPath, "utf8");
  const compatRecords = unique([...registrySource.matchAll(/\bcode:\s*["'`]([^"'`]+)["'`]/g)].map((match) => match[1])).sort();
  const hookNames = existsSync(hookTypesPath)
    ? parseExportedStringArray(await readFile(hookTypesPath, "utf8"), "PLUGIN_HOOK_NAMES")
    : [];
  const apiBuilderPath = path.join(resolvedPath, "src/plugins/api-builder.ts");
  const apiRegistrars = existsSync(apiBuilderPath)
    ? unique([...((await readFile(apiBuilderPath, "utf8")).matchAll(/\b(register[A-Za-z0-9]+)\b/g))].map((match) => match[1])).sort()
    : [];

  return {
    configuredPath: requestedPath,
    status: "ok",
    compatRegistryPath: path.relative(repoRoot, registryPath),
    compatRecordCount: compatRecords.length,
    compatRecords,
    hookTypesPath: existsSync(hookTypesPath) ? path.relative(repoRoot, hookTypesPath) : null,
    hookNameCount: hookNames.length,
    hookNames,
    apiBuilderPath: existsSync(apiBuilderPath) ? path.relative(repoRoot, apiBuilderPath) : null,
    apiRegistrarCount: apiRegistrars.length,
    apiRegistrars,
  };
}

async function readPackageSummaries(checkoutPath, sourceRoot) {
  const candidates = unique([
    path.join(sourceRoot, "package.json"),
    path.join(checkoutPath, "package.json"),
    ...(await findPackageFiles(checkoutPath, { maxDepth: 3 })),
  ].filter(existsSync));
  const summaries = [];

  for (const packagePath of candidates) {
    const packageJson = JSON.parse(await readFile(packagePath, "utf8"));
    summaries.push(summarizePackage(packagePath, packageJson));
  }

  return summaries.sort((left, right) => packageRank(left) - packageRank(right) || left.path.localeCompare(right.path));
}

function summarizePackage(packagePath, packageJson) {
  const packageDir = path.dirname(packagePath);
  const openclaw = packageJson.openclaw
    ? {
        extensions: arrayValues(packageJson.openclaw.extensions),
        runtimeExtensions: arrayValues(packageJson.openclaw.runtimeExtensions),
        setupEntry: typeof packageJson.openclaw.setupEntry === "string" ? packageJson.openclaw.setupEntry : null,
        compatPluginApi:
          typeof packageJson.openclaw.compat?.pluginApi === "string" ? packageJson.openclaw.compat.pluginApi : null,
        buildOpenClawVersion:
          typeof packageJson.openclaw.build?.openclawVersion === "string"
            ? packageJson.openclaw.build.openclawVersion
            : null,
        buildPluginSdkVersion:
          typeof packageJson.openclaw.build?.pluginSdkVersion === "string"
            ? packageJson.openclaw.build.pluginSdkVersion
            : null,
      }
    : null;

  if (openclaw) {
    openclaw.entrypoints = collectOpenClawEntrypoints(packageDir, openclaw);
  }

  return {
    path: path.relative(repoRoot, packagePath),
    name: packageJson.name ?? null,
    version: packageJson.version ?? null,
    type: packageJson.type ?? null,
    main: typeof packageJson.main === "string" ? packageJson.main : null,
    openclaw,
  };
}

function collectOpenClawEntrypoints(packageDir, openclaw) {
  const entrypoints = [
    ...openclaw.extensions.map((specifier) => ({ kind: "extension", specifier })),
    ...openclaw.runtimeExtensions.map((specifier) => ({ kind: "runtimeExtension", specifier })),
    ...(openclaw.setupEntry ? [{ kind: "setupEntry", specifier: openclaw.setupEntry }] : []),
  ];

  return entrypoints.map((entrypoint) => {
    const resolvedPath = path.resolve(packageDir, entrypoint.specifier);
    const relativePath = path.relative(repoRoot, resolvedPath);
    return {
      ...entrypoint,
      relativePath,
      exists: existsSync(resolvedPath),
      requiresBuild: /(^|\/)dist\//.test(entrypoint.specifier) || /(^|\/)build\//.test(entrypoint.specifier),
    };
  });
}

async function findPackageFiles(root, options, depth = 0) {
  if (!existsSync(root) || depth > options.maxDepth) {
    return [];
  }

  const files = [];
  for (const entry of await readdir(root, { withFileTypes: true })) {
    const entryPath = path.join(root, entry.name);
    if (entry.isFile() && entry.name === "package.json") {
      files.push(entryPath);
      continue;
    }
    if (!entry.isDirectory() || shouldSkipPackageDir(entry.name)) {
      continue;
    }
    files.push(...(await findPackageFiles(entryPath, options, depth + 1)));
  }
  return files;
}

function shouldSkipPackageDir(name) {
  return name === ".git" || name === "node_modules" || name === "dist" || name === "build" || name === "coverage";
}

function selectPrimaryPackage(packages) {
  return packages[0] ?? null;
}

function packageRank(packageSummary) {
  if (packageSummary.openclaw?.entrypoints.length > 0) {
    return 0;
  }
  if (packageSummary.openclaw) {
    return 1;
  }
  return 2;
}

function arrayValues(value) {
  return Array.isArray(value) ? value.filter((item) => typeof item === "string") : [];
}

function emptyInspection(fixture) {
  return {
    id: fixture.id,
    status: "missing",
    hooks: [],
    hookDetails: [],
    registrations: [],
    registrationDetails: [],
    manifestContracts: [],
    manifestFiles: [],
    manifestErrors: [],
    sdkImports: [],
    sourceFiles: [],
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

function issuesTable(issues) {
  if (issues.length === 0) {
    return "_none_";
  }

  return markdownTable(
    issues.map((issue) => [
      issue.id,
      issue.severity,
      issue.fixture,
      issue.owner,
      issue.decision,
      issue.status,
      issue.title,
      issue.evidence.join(", ") || "-",
    ]),
    ["ID", "Severity", "Fixture", "Owner", "Decision", "Status", "Title", "Evidence"],
  );
}

function contractProbesTable(probes) {
  if (probes.length === 0) {
    return "_none_";
  }

  return markdownTable(
    probes.map((probe) => [
      probe.id,
      probe.priority,
      probe.fixture,
      probe.target,
      probe.contract,
      probe.evidence.join(", ") || "-",
    ]),
    ["ID", "Priority", "Fixture", "Target", "Contract", "Evidence"],
  );
}

function targetOpenClawTable(targetOpenClaw) {
  const recordPreview = targetOpenClaw.compatRecords.length > 0 ? targetOpenClaw.compatRecords.join(", ") : "-";
  return markdownTable(
    [
      ["Configured path", targetOpenClaw.configuredPath ?? "-"],
      ["Status", targetOpenClaw.status],
      ["Compat registry", targetOpenClaw.compatRegistryPath ?? "-"],
      ["Compat records", targetOpenClaw.compatRecordCount ?? 0],
      ["Record ids", recordPreview],
      ["Hook registry", targetOpenClaw.hookTypesPath ?? "-"],
      ["Hook names", targetOpenClaw.hookNameCount ?? 0],
      ["API builder", targetOpenClaw.apiBuilderPath ?? "-"],
      ["API registrars", targetOpenClaw.apiRegistrarCount ?? 0],
    ],
    ["Metric", "Value"],
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

function issueSort(left, right) {
  return (
    priorityRank(left.severity) - priorityRank(right.severity) ||
    left.fixture.localeCompare(right.fixture) ||
    left.code.localeCompare(right.code) ||
    (left.evidence ?? []).join(",").localeCompare((right.evidence ?? []).join(","))
  );
}

function issueTitle(finding) {
  return `${finding.fixture}: ${finding.title ?? finding.message}`;
}

function probePriority(code, fixturePriority) {
  if (["before-tool-call-probe", "conversation-access-hook", "registration-capture-gap"].includes(code)) {
    return "P1";
  }
  if (fixturePriority === "high") {
    return "P2";
  }
  return "P3";
}

function priorityRank(priority) {
  return { P0: 0, P1: 1, P2: 2, P3: 3, high: 1, medium: 2, low: 3 }[priority] ?? 99;
}

function detailEvidence(details, key = "name") {
  return unique(details.map((detail) => `${detail[key]} @ ${detail.ref}`));
}

function parseExportedStringArray(source, exportName) {
  const match = source.match(new RegExp(`export\\s+const\\s+${exportName}\\s*=\\s*\\[([\\s\\S]*?)\\]\\s+as\\s+const`));
  if (!match) {
    return [];
  }

  return unique([...match[1].matchAll(/["'`]([^"'`]+)["'`]/g)].map((item) => item[1])).sort();
}

function dedupeBy(values, keyForValue) {
  const byKey = new Map();
  for (const value of values) {
    byKey.set(keyForValue(value), value);
  }
  return [...byKey.values()];
}

function unique(values) {
  return [...new Set(values)];
}
