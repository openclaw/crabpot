#!/usr/bin/env node
import { pathToFileURL } from "node:url";
import { buildReport } from "./report-lib.mjs";

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  await main();
}

async function main() {
  const report = await buildReport({ openclawPath: parseOpenClawPath(process.argv.slice(2)) });
  const errors = validateContractCoverage(report);

  if (errors.length > 0) {
    throw new Error(errors.join("\n"));
  }

  console.log(
    `contract coverage ok: ${report.summary.issueCount} issues, ${report.summary.contractProbeCount} probes, ${report.summary.breakageCount} breakages`,
  );
}

function parseOpenClawPath(argv) {
  for (let index = 0; index < argv.length; index += 1) {
    if (argv[index] === "--openclaw") {
      return argv[index + 1];
    }
    if (argv[index] === "--no-openclaw") {
      return false;
    }
  }
  return undefined;
}

export function validateContractCoverage(report) {
  const errors = [];

  if (report.breakages.length > 0) {
    for (const breakage of report.breakages) {
      errors.push(`hard breakage: ${breakage.fixture} ${breakage.code}: ${breakage.message}`);
    }
  }

  requireUniqueIssueIds(report, errors);
  requireIssueEvidence(report, errors);
  requireP1ProbeCoverage(report, errors);
  requireFixtureEvidence(report, errors);
  requireTargetHookRegistry(report, errors);
  requireCompatRecordReconciliation(report, errors);

  return errors;
}

function requireTargetHookRegistry(report, errors) {
  if (report.targetOpenClaw.status === "ok" && report.targetOpenClaw.hookNames.length === 0) {
    errors.push("target OpenClaw hook registry was found but no hook names were parsed");
  }
}

function requireUniqueIssueIds(report, errors) {
  const seen = new Set();
  for (const issue of report.issues) {
    if (seen.has(issue.id)) {
      errors.push(`duplicate issue id: ${issue.id}`);
    }
    seen.add(issue.id);
  }
}

function requireIssueEvidence(report, errors) {
  for (const issue of report.issues) {
    if (!Array.isArray(issue.evidence) || issue.evidence.length === 0) {
      errors.push(`${issue.id}: missing evidence`);
    }
  }
}

function requireP1ProbeCoverage(report, errors) {
  const probesByFixture = new Map();
  for (const probe of report.contractProbes) {
    const probes = probesByFixture.get(probe.fixture) ?? [];
    probes.push(probe);
    probesByFixture.set(probe.fixture, probes);
  }

  for (const issue of report.issues.filter((item) => item.severity === "P1")) {
    const probes = probesByFixture.get(issue.fixture) ?? [];
    if (probes.length === 0) {
      errors.push(`${issue.id}: P1 issue has no contract probe for ${issue.fixture}`);
    }
  }
}

function requireFixtureEvidence(report, errors) {
  for (const fixture of report.fixtures) {
    for (const hook of fixture.hooks) {
      if (!fixture.hookDetails.some((detail) => detail.name === hook)) {
        errors.push(`${fixture.id}: hook ${hook} has no source evidence`);
      }
    }
    for (const registration of fixture.registrations) {
      if (!fixture.registrationDetails.some((detail) => detail.name === registration)) {
        errors.push(`${fixture.id}: registration ${registration} has no source evidence`);
      }
    }
    for (const contract of fixture.manifestContracts) {
      if (contract !== "invalidManifest" && fixture.manifestFiles.length === 0) {
        errors.push(`${fixture.id}: manifest contract ${contract} has no manifest evidence`);
      }
    }
  }
}

function requireCompatRecordReconciliation(report, errors) {
  if (report.targetOpenClaw.status !== "ok") {
    return;
  }

  const presentRecords = new Set(
    report.logs
      .filter((finding) => finding.code === "compat-record-present")
      .map((finding) => `${finding.fixture}:${finding.compatRecord}`),
  );
  const missingRecords = new Set(
    report.suggestions
      .filter((finding) => finding.code === "missing-compat-record")
      .map((finding) => `${finding.fixture}:${finding.compatRecord}`),
  );

  for (const finding of [...report.warnings, ...report.suggestions].filter((item) => item.compatRecord)) {
    const key = `${finding.fixture}:${finding.compatRecord}`;
    if (!presentRecords.has(key) && !missingRecords.has(key)) {
      errors.push(`${finding.fixture}: compat record ${finding.compatRecord} was not reconciled`);
    }
  }
}
