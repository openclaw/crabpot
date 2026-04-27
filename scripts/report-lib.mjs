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
  const report = await pluginInspector.buildCompatibilityReport({
    generatedAt,
    fixtures: manifest.fixtures,
    inspections,
    failures,
    targetOpenClaw,
    buildFixtureReport: ({ fixture, inspection }) => buildFixtureReport(fixture, inspection),
  });

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
