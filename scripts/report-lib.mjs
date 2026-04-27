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
  const fixtureClassification = pluginInspector.classifyCompatibilityFixture({
    fixture,
    inspection,
    fixtureReport,
    targetOpenClaw,
  });
  warnings.push(...fixtureClassification.warnings);
  suggestions.push(...fixtureClassification.suggestions);
  logs.push(...fixtureClassification.logs);
  decisions.push(...fixtureClassification.decisions);
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
