#!/usr/bin/env node
import { readFileSync, readdirSync } from "node:fs";
import { spawnSync } from "node:child_process";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { repoRoot } from "./manifest-lib.mjs";

const blockedSeverities = new Set(["critical", "high"]);
const defaultNpmTimeoutMs = 2 * 60 * 1000;

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  main();
}

export function lockFixableFindings(audit, lockfile = {}) {
  return Object.entries(audit?.vulnerabilities ?? {})
    .filter(([, vulnerability]) => blockedSeverities.has(vulnerability.severity))
    .filter(([, vulnerability]) => vulnerability.fixAvailable === true)
    .filter(([, vulnerability]) => {
      const nodes = vulnerability.nodes ?? [];
      return nodes.some((node) => !hasImmutableOwner(node, lockfile.packages ?? {}));
    })
    .map(([name, vulnerability]) => ({
      name,
      severity: vulnerability.severity,
    }))
    .sort((left, right) => left.name.localeCompare(right.name));
}

function main() {
  const findings = [];
  const timeout = configuredTimeoutMs("CRABPOT_NPM_TIMEOUT_MS", defaultNpmTimeoutMs);
  for (const fixture of fixtureLockDirectories()) {
    const lockfile = JSON.parse(readFileSync(path.join(fixture.path, "package-lock.json"), "utf8"));
    const result = spawnSync("npm", ["audit", "--package-lock-only", "--omit=dev", "--json"], {
      cwd: fixture.path,
      encoding: "utf8",
      maxBuffer: 16 * 1024 * 1024,
      timeout,
    });
    const audit = parseAuditResult(result, fixture.id, timeout);
    for (const finding of lockFixableFindings(audit, lockfile)) {
      findings.push({ fixture: fixture.id, ...finding });
    }
  }

  if (findings.length === 0) {
    console.log("crabpot: no lock-refreshable critical/high fixture vulnerabilities");
    return;
  }

  for (const finding of findings) {
    console.error(`${finding.severity}: ${finding.fixture}: ${finding.name}`);
  }
  console.error(
    `crabpot: ${findings.length} critical/high fixture vulnerability entries can be fixed by refreshing committed locks`,
  );
  process.exit(1);
}

function fixtureLockDirectories() {
  const pluginsRoot = path.join(repoRoot, "plugins");
  return readdirSync(pluginsRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => ({
      id: entry.name,
      path: path.join(pluginsRoot, entry.name),
    }))
    .filter((fixture) => readdirSync(fixture.path).includes("package-lock.json"))
    .sort((left, right) => left.id.localeCompare(right.id));
}

export function parseAuditResult(result, fixture, timeout) {
  if (result.error) {
    if (result.error.code === "ETIMEDOUT") {
      throw new Error(`${fixture}: npm audit timed out after ${timeout}ms`);
    }
    throw result.error;
  }
  if (result.signal) {
    throw new Error(`${fixture}: npm audit terminated by ${result.signal}`);
  }

  let audit;
  try {
    audit = JSON.parse(result.stdout);
  } catch (error) {
    throw new Error(`${fixture}: npm audit did not return JSON: ${error.message}`);
  }

  const isAuditReport =
    audit?.auditReportVersion === 2 &&
    audit.vulnerabilities &&
    typeof audit.vulnerabilities === "object" &&
    audit.metadata?.vulnerabilities;
  if (!isAuditReport) {
    const detail =
      audit?.error?.summary ??
      audit?.message ??
      result.stderr?.trim() ??
      `unexpected exit status ${result.status}`;
    throw new Error(`${fixture}: npm audit failed: ${detail}`);
  }
  if (result.status !== 0 && result.status !== 1) {
    throw new Error(`${fixture}: npm audit exited with unexpected status ${result.status}`);
  }
  return audit;
}

function configuredTimeoutMs(envName, fallback) {
  const raw = process.env[envName];
  if (!raw) {
    return fallback;
  }
  const parsed = Number.parseInt(raw, 10);
  if (!Number.isInteger(parsed) || parsed <= 0) {
    throw new Error(`${envName} must be a positive integer timeout in milliseconds`);
  }
  return parsed;
}

function hasImmutableOwner(node, packages) {
  const current = packages[node];
  if (current?.inBundle) {
    return true;
  }
  let owner = node;
  while (owner.includes("/node_modules/")) {
    owner = owner.slice(0, owner.lastIndexOf("/node_modules/"));
    if (packages[owner]?.hasShrinkwrap || packages[owner]?.inBundle) {
      return true;
    }
  }
  return false;
}
