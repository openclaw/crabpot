import { execFileSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { inspectManifest } from "./inspect-fixtures.mjs";
import { fixtureCheckoutPath, fixtureSourceRoot, readManifest, repoRoot } from "./manifest-lib.mjs";
import { loadPluginInspector } from "./plugin-inspector-source.mjs";

export const defaultReportDir = path.join(repoRoot, "reports");
export const defaultMarkdownReportPath = path.join(defaultReportDir, "crabpot-report.md");
export const defaultJsonReportPath = path.join(defaultReportDir, "crabpot-report.json");
export const defaultIssuesReportPath = path.join(defaultReportDir, "crabpot-issues.md");

const CONVERSATION_ACCESS_HOOKS = new Set(["agent_end", "llm_input", "llm_output"]);
const CAPTURE_GAP_REGISTRATIONS = new Set([
  "registerChannel",
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
let submoduleLinkTargets;
const pluginInspector = await loadPluginInspector();

export const KNOWN_ISSUE_CODES = pluginInspector.knownIssueCodes;
export const classifyIssueFinding = pluginInspector.classifyIssueFinding;
export const issueId = pluginInspector.issueId;
export const targetOpenClawPathCandidates = pluginInspector.openClawTargetPathCandidates;

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

  const issues = buildIssues({ breakages, warnings, suggestions, targetOpenClaw });
  const contractProbes = buildContractProbes({ warnings, suggestions, fixtures });
  const issueSummary = pluginInspector.summarizeIssueClasses(issues);

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
      liveIssueCount: issueSummary["live-issue"],
      liveP0IssueCount: issues.filter((issue) => issue.issueClass === "live-issue" && issue.severity === "P0").length,
      compatGapCount: issueSummary["compat-gap"],
      deprecationWarningCount: issueSummary["deprecation-warning"],
      inspectorGapCount: issueSummary["inspector-gap"],
      upstreamIssueCount: issueSummary["upstream-metadata"],
      fixtureRegressionCount: issueSummary["fixture-regression"],
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
  await pluginInspector.writeArtifacts([
    { name: "markdownPath", path: markdownPath, markdown: renderMarkdownReport(report) },
    { name: "jsonPath", path: jsonPath, json: report },
    { name: "issuesPath", path: issuesPath, markdown: renderIssuesReport(report) },
  ]);
  return { markdownPath, jsonPath, issuesPath };
}

export function renderMarkdownReport(report) {
  return pluginInspector.renderCompatibilityMarkdownReport(report, compatibilityRenderOptions("Crabpot Compatibility Report"));
}

export function renderIssuesReport(report) {
  return pluginInspector.renderCompatibilityIssuesReport(report, compatibilityRenderOptions("Crabpot Issue Findings"));
}

function compatibilityRenderOptions(title) {
  return {
    title,
    formatEvidence: formatEvidenceLink,
    severityLabels: {
      P0: "🔴 P0",
      P1: "🟠 P1",
      P2: "🟡 P2",
      P3: "🟢 P3",
    },
  };
}

function buildIssues({ breakages, warnings, suggestions, targetOpenClaw }) {
  return pluginInspector.buildIssues({ breakages, warnings, suggestions, targetOpenClaw });
}

function buildContractProbes({ warnings, suggestions, fixtures }) {
  return pluginInspector.buildContractProbes({ warnings, suggestions, fixtures });
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
        evidence: [finding.compatRecord, `status:${targetOpenClaw.compatRecordStatuses?.[finding.compatRecord] ?? "unknown"}`],
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

  const targetCoverage = pluginInspector.classifyTargetOpenClawCoverage({
    fixture,
    inspection,
    fixtureReport,
    targetOpenClaw,
  });
  warnings.push(...targetCoverage.warnings);
  logs.push(...targetCoverage.logs);
  decisions.push(...targetCoverage.decisions);
  const packageContracts = pluginInspector.classifyPackageContracts({ fixture, inspection, fixtureReport });
  warnings.push(...packageContracts.warnings);
  suggestions.push(...packageContracts.suggestions);
  logs.push(...packageContracts.logs);
  decisions.push(...packageContracts.decisions);

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

  const legacyBeforeAgentStartDetails = inspection.hookDetails.filter((hook) => hook.name === "before_agent_start");
  if (legacyBeforeAgentStartDetails.length > 0) {
    warnings.push({
      fixture: fixture.id,
      code: "legacy-before-agent-start",
      level: "warning",
      message: "fixture uses deprecated before_agent_start hook compatibility",
      evidence: detailEvidence(legacyBeforeAgentStartDetails),
      compatRecord: "legacy-before-agent-start",
    });
    decisions.push({
      fixture: fixture.id,
      decision: "core-compat-adapter",
      seam: "hook-compat",
      action: "Keep before_agent_start wired while plugin authors migrate to before_model_resolve and before_prompt_build.",
      evidence: detailEvidence(legacyBeforeAgentStartDetails).join(", "),
    });
  }

  const captureGapRegistrationDetails = registrationCaptureGapDetails(inspection, targetOpenClaw);
  const captureGapRegistrations = unique(captureGapRegistrationDetails.map((registration) => registration.name));
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

function registrationCaptureGapDetails(inspection, targetOpenClaw) {
  const apiRegistrationDetails = inspection.registrationDetails.filter((registration) =>
    registration.name.startsWith("register"),
  );
  if (targetOpenClaw.status === "ok" && targetOpenClaw.capturedRegistrars.length > 0) {
    const captured = new Set(targetOpenClaw.capturedRegistrars);
    return apiRegistrationDetails.filter((registration) => !captured.has(registration.name));
  }
  return apiRegistrationDetails.filter((registration) => CAPTURE_GAP_REGISTRATIONS.has(registration.name));
}

async function buildFixtureReport(fixture, inspection) {
  return pluginInspector.buildCompatibilityFixtureReport({
    fixture,
    inspection,
    checkoutPath: fixtureCheckoutPath(fixture),
    sourceRoot: fixtureSourceRoot(fixture),
    rootDir: repoRoot,
  });
}

async function readTargetOpenClaw(manifest, configuredPath) {
  return pluginInspector.readOpenClawTargetSurface({
    configuredPath,
    manifest,
    rootDir: repoRoot,
  });
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

function formatEvidenceLink(evidence) {
  const parsed = parseEvidencePath(evidence);
  if (!parsed) {
    return evidence;
  }
  const target = submoduleLinkTarget(parsed.filePath);
  if (!target) {
    return evidence;
  }
  return `[${evidenceLinkLabel(evidence, parsed)}](${target.href}${parsed.line ? `#L${parsed.line}` : ""})`;
}

function parseEvidencePath(evidence) {
  const match = String(evidence).match(/(?<filePath>plugins[\\/][^\s,)]+?)(?::(?<line>\d+))?(?=$|[\s,)])/);
  if (!match?.groups?.filePath) {
    return null;
  }
  return {
    filePath: match.groups.filePath.replaceAll("\\", "/"),
    index: match.index ?? 0,
    line: match.groups.line,
  };
}

function evidenceLinkLabel(evidence, parsed) {
  const prefix = String(evidence)
    .slice(0, parsed.index)
    .trim()
    .replace(/\s*(?:@|->|:)\s*$/, "");
  const fileLabel = `${path.posix.basename(parsed.filePath)}${parsed.line ? `:${parsed.line}` : ""}`;
  return prefix ? `${prefix} @ ${fileLabel}` : fileLabel;
}

function submoduleLinkTarget(filePath) {
  const normalizedFilePath = filePath.replaceAll("\\", "/");
  const target = submoduleLinkTargetsForRepo().find(
    (candidate) => normalizedFilePath === candidate.path || normalizedFilePath.startsWith(`${candidate.path}/`),
  );
  if (!target) {
    return null;
  }
  const subPath = normalizedFilePath === target.path ? "" : normalizedFilePath.slice(target.path.length + 1);
  const encodedPath = subPath
    .split("/")
    .filter(Boolean)
    .map((part) => encodeURIComponent(part))
    .join("/");
  return {
    href: encodedPath ? `${target.webUrl}/blob/${target.sha}/${encodedPath}` : `${target.webUrl}/tree/${target.sha}`,
  };
}

function submoduleLinkTargetsForRepo() {
  if (submoduleLinkTargets) {
    return submoduleLinkTargets;
  }
  const modules = readGitmodules();
  const shas = readSubmoduleShas();
  submoduleLinkTargets = [...modules.values()]
    .map((entry) => ({
      ...entry,
      sha: shas.get(entry.path),
      webUrl: githubWebUrl(entry.url),
    }))
    .filter((entry) => entry.sha && entry.webUrl)
    .sort((left, right) => right.path.length - left.path.length);
  return submoduleLinkTargets;
}

function readGitmodules() {
  const gitmodulesPath = path.join(repoRoot, ".gitmodules");
  if (!existsSync(gitmodulesPath)) {
    return new Map();
  }

  const modules = new Map();
  let current = {};
  for (const line of readFileSync(gitmodulesPath, "utf8").split(/\r?\n/)) {
    if (/^\[submodule /.test(line)) {
      if (current.path && current.url) {
        modules.set(current.path, current);
      }
      current = {};
      continue;
    }
    const pathMatch = line.match(/^\s*path\s*=\s*(.+)$/);
    if (pathMatch) {
      current.path = pathMatch[1].trim();
      continue;
    }
    const urlMatch = line.match(/^\s*url\s*=\s*(.+)$/);
    if (urlMatch) {
      current.url = urlMatch[1].trim();
    }
  }
  if (current.path && current.url) {
    modules.set(current.path, current);
  }
  return modules;
}

function readSubmoduleShas() {
  const gitlinkShas = readSubmoduleGitlinkShas();
  if (gitlinkShas.size > 0) {
    return gitlinkShas;
  }

  try {
    const status = execFileSync("git", ["-c", "safe.directory=*", "submodule", "status", "--recursive"], {
      cwd: repoRoot,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    });
    return new Map(
      status
        .split(/\r?\n/)
        .map((line) => line.match(/^[ +-]?([0-9a-f]{40})\s+(\S+)/i))
        .filter(Boolean)
        .map((match) => [match[2].replaceAll("\\", "/"), match[1]]),
    );
  } catch {
    return new Map();
  }
}

function readSubmoduleGitlinkShas() {
  try {
    const tree = execFileSync("git", ["-c", "safe.directory=*", "ls-tree", "-r", "HEAD", "plugins"], {
      cwd: repoRoot,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    });
    return new Map(
      tree
        .split(/\r?\n/)
        .map((line) => line.match(/^160000 commit ([0-9a-f]{40})\s+(.+)$/i))
        .filter(Boolean)
        .map((match) => [match[2].replaceAll("\\", "/"), match[1]]),
    );
  } catch {
    return new Map();
  }
}

function githubWebUrl(url) {
  const httpsMatch = url.match(/^https:\/\/github\.com\/(.+?)(?:\.git)?$/);
  if (httpsMatch) {
    return `https://github.com/${httpsMatch[1].replace(/\/$/, "")}`;
  }
  const sshMatch = url.match(/^git@github\.com:(.+?)(?:\.git)?$/);
  if (sshMatch) {
    return `https://github.com/${sshMatch[1].replace(/\/$/, "")}`;
  }
  return null;
}

function detailEvidence(details, key = "name") {
  return unique(details.map((detail) => `${detail[key]} @ ${detail.ref}`));
}

function unique(values) {
  return [...new Set(values)];
}
