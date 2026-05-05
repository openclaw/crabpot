import { execFileSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { readConfiguredManifest, repoRoot } from "./manifest-lib.mjs";
import {
  defaultPackageAvailabilityPath,
  packageAvailabilityActionableFailures,
  mergePackageAvailabilityIntoSummary,
  packageAvailabilityDecisions,
  packageAvailabilityIssues,
  readPackageAvailabilityReport,
} from "./package-availability.mjs";
import { loadPluginInspectorPublicApi } from "./plugin-inspector-source.mjs";
import { defaultExecutionResultsJsonPath } from "./summarize-execution-results.mjs";

export const defaultReportDir = path.join(repoRoot, "reports");
export const defaultMarkdownReportPath = path.join(defaultReportDir, "crabpot-report.md");
export const defaultJsonReportPath = path.join(defaultReportDir, "crabpot-report.json");
export const defaultIssuesReportPath = path.join(defaultReportDir, "crabpot-issues.md");

let submoduleLinkTargets;
const pluginInspector = await loadPluginInspectorPublicApi();

export const KNOWN_ISSUE_CODES = pluginInspector.knownIssueCodes;
export const classifyIssueFinding = pluginInspector.classifyIssueFinding;
export const issueId = pluginInspector.issueId;
export const targetOpenClawPathCandidates = pluginInspector.openClawTargetPathCandidates;

export async function buildReport(options = {}) {
  const generatedAt = options.generatedAt ?? process.env.CRABPOT_REPORT_GENERATED_AT ?? "deterministic";
  const manifest = await readConfiguredManifest({ fixtureSet: options.fixtureSet });
  const executionResults =
    options.executionResults ?? readOptionalExecutionResults(options.executionResultsPath);
  const packageAvailability =
    options.packageAvailability ?? readDefaultPackageAvailability(options.packageAvailabilityPath);
  const report = await pluginInspector.inspectCompatibilityFixtureSetConfig({
    config: {
      ...manifest,
      rootDir: repoRoot,
    },
    generatedAt,
    executionResults,
    openclawPath: options.openclawPath,
  });
  const packageIssues = packageAvailabilityIssues(packageAvailability, { manifest });
  const packageDecisions = packageAvailabilityDecisions(packageAvailability, { manifest });
  const issues = [...packageIssues, ...(report.issues ?? [])];
  return {
    ...report,
    summary: mergePackageAvailabilityIntoSummary(report.summary, issues),
    issues,
    decisions: [...packageDecisions, ...(report.decisions ?? [])],
    crabpotContext: buildReportContext({
      executionResults,
      executionResultsPath: options.executionResultsPath,
      manifest,
      openclawPath: options.openclawPath,
      packageAvailability,
      packageAvailabilityActionableFailures: packageAvailabilityActionableFailures(packageAvailability, { manifest }),
      packageAvailabilityPath: options.packageAvailabilityPath,
    }),
  };
}

export async function writeReport(report, options = {}) {
  const markdownPath = options.markdownPath ?? defaultMarkdownReportPath;
  const jsonPath = options.jsonPath ?? defaultJsonReportPath;
  const issuesPath = options.issuesPath ?? defaultIssuesReportPath;
  await Promise.all([
    mkdir(path.dirname(markdownPath), { recursive: true }),
    mkdir(path.dirname(jsonPath), { recursive: true }),
    mkdir(path.dirname(issuesPath), { recursive: true }),
  ]);
  await Promise.all([
    writeFile(markdownPath, `${renderMarkdownReport(report)}\n`, "utf8"),
    writeFile(jsonPath, `${JSON.stringify(report, null, 2)}\n`, "utf8"),
    writeFile(issuesPath, `${renderIssuesReport(report)}\n`, "utf8"),
  ]);
  return { markdownPath, jsonPath, issuesPath };
}

function buildReportContext({
  executionResults,
  executionResultsPath,
  manifest,
  openclawPath,
  packageAvailability,
  packageAvailabilityActionableFailures,
  packageAvailabilityPath,
}) {
  return {
    fixtureSet: manifest.fixtureSelection?.fixtureSet ?? "all",
    fixtureIds: manifest.fixtureSelection?.ids ?? manifest.fixtures.map((fixture) => fixture.id),
    openclawTarget: process.env.CRABPOT_OPENCLAW_TRACK || (openclawPath ? "explicit" : "auto"),
    pluginTrack: process.env.CRABPOT_PLUGIN_TRACK || "manifest",
    runtimeEvidence: executionResults
      ? {
          path: executionResultsPath ?? defaultExecutionResultsJsonPath,
          artifacts: executionResults.summary?.artifactCount ?? 0,
          captureArtifacts: executionResults.summary?.captureArtifactCount ?? 0,
          capturedRegistrations: executionResults.summary?.capturedRegistrationCount ?? 0,
        }
      : null,
    packageAvailability: packageAvailability
      ? {
          path: packageAvailabilityPath ?? defaultPackageAvailabilityPath,
          failures: packageAvailability.summary?.failureCount ?? packageAvailability.failures?.length ?? 0,
          openclawFailures: packageAvailabilityActionableFailures?.length ?? 0,
          fallbacks: packageAvailability.summary?.fallbackCount ?? 0,
        }
      : null,
  };
}

export function renderMarkdownReport(report) {
  return withReportContext(
    report,
    pluginInspector.renderFixtureSetMarkdownReport(report, {
      ...compatibilityRenderOptions(),
      title: "Crabpot Compatibility Report",
    }),
  );
}

export function renderIssuesReport(report) {
  return withReportContext(
    report,
    pluginInspector.renderFixtureSetIssuesReport(report, {
      ...compatibilityRenderOptions(),
      title: "Crabpot Issue Findings",
    }),
  );
}

function withReportContext(report, markdown) {
  const context = report.crabpotContext;
  if (!context) {
    return markdown;
  }
  const fixtureLabel =
    context.fixtureSet === "all"
      ? `all (${context.fixtureIds.length} fixtures)`
      : `${context.fixtureSet} (${context.fixtureIds.length} fixtures)`;
  const block = [
    "## Crabpot Target Context",
    "",
    `- **OpenClaw host track:** \`${context.openclawTarget}\``,
    `- **Plugin artifact track:** \`${context.pluginTrack}\``,
    `- **Fixture set:** \`${fixtureLabel}\``,
    ...(context.runtimeEvidence
      ? [
          `- **Runtime evidence:** \`${relativePathLabel(context.runtimeEvidence.path)}\` (${context.runtimeEvidence.captureArtifacts} capture artifacts, ${context.runtimeEvidence.capturedRegistrations} captured registrations/hooks)`,
        ]
      : []),
    ...(context.packageAvailability
      ? [
          `- **Package availability:** \`${relativePathLabel(context.packageAvailability.path)}\` (${context.packageAvailability.openclawFailures} OpenClaw failures, ${context.packageAvailability.fallbacks} fallbacks)`,
        ]
      : []),
    "",
  ].join("\n");
  const firstSection = markdown.indexOf("\n## ");
  if (firstSection === -1) {
    return `${markdown}\n\n${block.trimEnd()}`;
  }
  return `${markdown.slice(0, firstSection)}\n\n${block}${markdown.slice(firstSection + 1)}`;
}

function readOptionalExecutionResults(executionResultsPath) {
  if (!executionResultsPath) {
    return null;
  }
  const resolvedPath = path.resolve(repoRoot, executionResultsPath);
  if (!existsSync(resolvedPath)) {
    return null;
  }
  return JSON.parse(readFileSync(resolvedPath, "utf8"));
}

function readDefaultPackageAvailability(packageAvailabilityPath) {
  if (packageAvailabilityPath) {
    return readPackageAvailabilityReport(packageAvailabilityPath);
  }
  if (!process.env.CRABPOT_PLUGIN_TRACK && !process.env.CRABPOT_PACKAGE_AVAILABILITY_PATH) {
    return null;
  }
  return readPackageAvailabilityReport(process.env.CRABPOT_PACKAGE_AVAILABILITY_PATH);
}

function relativePathLabel(filePath) {
  return path.relative(repoRoot, path.resolve(repoRoot, filePath)).replaceAll("\\", "/");
}

function compatibilityRenderOptions() {
  return {
    markdownTitle: "Crabpot Compatibility Report",
    issuesTitle: "Crabpot Issue Findings",
    formatEvidence: formatEvidenceLink,
    severityLabels: {
      P0: "🔴 P0",
      P1: "🟠 P1",
      P2: "🟡 P2",
      P3: "🟢 P3",
    },
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
  const repoPath = target.sourcePath ? path.posix.join(target.sourcePath, subPath) : subPath;
  const encodedPath = repoPath
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
  const manifest = readManifestSync();
  const sourceTargets = (manifest.fixtures ?? [])
    .filter((fixture) => fixture.source)
    .map((fixture) => ({
      path: fixture.package ? path.posix.join(fixture.path, ".crabpot-package") : fixture.path,
      sha: fixture.package ? readPackagePayloadGitHead(fixture) || fixture.source.ref : fixture.source.ref,
      sourcePath: normalizeRepoPath(fixture.source.path),
      webUrl: githubWebUrl(fixture.source.repo),
    }))
    .filter((entry) => entry.sha && entry.sourcePath && entry.webUrl);

  const moduleTargets = [...modules.values()]
    .map((entry) => ({
      ...entry,
      sha: shas.get(entry.path),
      webUrl: githubWebUrl(entry.url),
    }))
    .filter((entry) => entry.sha && entry.webUrl);

  submoduleLinkTargets = [...sourceTargets, ...moduleTargets]
    .sort((left, right) => right.path.length - left.path.length);
  return submoduleLinkTargets;
}

function readPackagePayloadGitHead(fixture) {
  const sidecar = readJsonFile(path.join(repoRoot, fixture.path, ".crabpot-package", ".crabpot-source.json"));
  if (/^[0-9a-f]{40}$/i.test(sidecar?.gitHead ?? "")) {
    return sidecar.gitHead;
  }
  const pkg = readJsonFile(path.join(repoRoot, fixture.path, ".crabpot-package", "package.json"));
  return /^[0-9a-f]{40}$/i.test(pkg?.gitHead ?? "") ? pkg.gitHead : "";
}

function readJsonFile(jsonPath) {
  try {
    return JSON.parse(readFileSync(jsonPath, "utf8"));
  } catch {
    return null;
  }
}

function readManifestSync() {
  try {
    return JSON.parse(readFileSync(path.join(repoRoot, "crabpot.config.json"), "utf8"));
  } catch {
    return { fixtures: [] };
  }
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

function normalizeRepoPath(value) {
  return String(value ?? "").replaceAll("\\", "/").replace(/^\.\/+/u, "").replace(/\/$/u, "");
}
