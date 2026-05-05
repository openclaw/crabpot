import { existsSync, readFileSync } from "node:fs";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { repoRoot } from "./manifest-lib.mjs";

export const defaultPackageAvailabilityPath = path.join(
  repoRoot,
  "reports/crabpot-package-availability.json",
);

export function packageAvailabilityCode() {
  return "package-npm-pack-unavailable";
}

export function readPackageAvailabilityReport(reportPath = defaultPackageAvailabilityPath) {
  if (!existsSync(reportPath)) {
    return null;
  }
  return JSON.parse(readFileSync(reportPath, "utf8"));
}

export async function writePackageAvailabilityReport(report, reportPath = defaultPackageAvailabilityPath) {
  await mkdir(path.dirname(reportPath), { recursive: true });
  await writeFile(reportPath, `${JSON.stringify(normalizePackageAvailabilityReport(report), null, 2)}\n`, "utf8");
}

export function normalizePackageAvailabilityReport(report = {}) {
  const failures = Array.isArray(report.failures) ? report.failures : [];
  return {
    generatedAt: report.generatedAt ?? "deterministic",
    fixtureSet: report.fixtureSet ?? "all",
    pluginTrack: report.pluginTrack ?? "manifest",
    summary: {
      failureCount: failures.length,
      openclawFailureCount: failures.filter((failure) => failure.openclawPackage).length,
      fallbackCount: failures.filter((failure) => failure.fallbackVersion).length,
    },
    failures,
  };
}

export function packageAvailabilityIssues(report) {
  return (report?.failures ?? [])
    .filter((failure) => failure.openclawPackage)
    .map((failure) => ({
      id: issueIdForPackageFailure(failure),
      fixture: failure.fixture,
      severity: "P0",
      owner: "plugin",
      code: packageAvailabilityCode(),
      decision: "plugin-release-fix",
      status: "blocking",
      issueClass: "live-issue",
      live: true,
      deprecated: false,
      compatStatus: "none",
      title: `${failure.fixture}: OpenClaw npm artifact is unavailable for ${failure.requestedTag ?? "requested track"}`,
      evidence: [
        `${failure.packageName}@${failure.requestedTag ?? failure.requestedVersion ?? "unknown"}`,
        failure.message,
        ...(failure.fallbackVersion
          ? [`fallback:${failure.packageName}@${failure.fallbackVersion}`]
          : []),
      ].filter(Boolean),
      compatRecord: null,
      runtimeCoverage: null,
    }));
}

export function packageAvailabilityDecisions(report) {
  return (report?.failures ?? [])
    .filter((failure) => failure.openclawPackage)
    .map((failure) => ({
      fixture: failure.fixture,
      decision: "plugin-release-fix",
      seam: "npm-artifact",
      action: `Restore the OpenClaw npm artifact for ${failure.packageName}@${failure.requestedTag ?? failure.requestedVersion ?? "requested track"} before trusting this track as release-complete.`,
      evidence: failure.message,
    }));
}

export function mergePackageAvailabilityIntoSummary(summary, issues) {
  const openIssues = issues.filter((issue) => issue.status !== "runtime-covered");
  return {
    ...summary,
    issueCount: issues.length,
    openIssueCount: openIssues.length,
    p0IssueCount: issues.filter((issue) => issue.severity === "P0").length,
    openP0IssueCount: openIssues.filter((issue) => issue.severity === "P0").length,
    liveIssueCount: issues.filter((issue) => issue.issueClass === "live-issue").length,
    liveP0IssueCount: issues.filter((issue) => issue.issueClass === "live-issue" && issue.severity === "P0").length,
  };
}

function issueIdForPackageFailure(failure) {
  return `CRABPOT-${stableHash([
    failure.fixture,
    packageAvailabilityCode(),
    failure.packageName,
    failure.requestedTag ?? "",
    failure.requestedVersion ?? "",
    failure.message,
  ].join("\n"))}`;
}

function stableHash(value) {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return (hash >>> 0).toString(16).toUpperCase().padStart(8, "0");
}
