import assert from "node:assert/strict";
import { test } from "node:test";
import { renderMarkdownReport } from "../../scripts/report-lib.mjs";
import { buildCorpusReport as buildReport } from "./report-fixture.mjs";
import { assertHasFinding, assertMissingFinding, assertHasIssue } from "./report-assertions.mjs";

test("markdown report includes review sections", async () => {
  const report = await buildReport({ generatedAt: "test", openclawPath: false });
  const markdown = renderMarkdownReport(report);

  assert.match(markdown, /## Crabpot Target Context/);
  assert.match(markdown, /Plugin artifact track/);
  assert.match(markdown, /## Hard Breakages/);
  assert.match(markdown, /## Target OpenClaw Compat Records/);
  assert.match(markdown, /## Triage Overview/);
  assert.match(markdown, /## P0 Live Issues/);
  assert.match(markdown, /## Other Live Issues/);
  assert.match(markdown, /## Deprecation Warnings/);
  assert.match(markdown, /## Inspector Proof Gaps/);
  assert.match(markdown, /## Warnings/);
  assert.match(markdown, /## Suggestions To OpenClaw Compat Layer/);
  assert.match(markdown, /## Issue Findings/);
  assert.match(markdown, /## Contract Probe Backlog/);
  assert.match(markdown, /## Decision Matrix/);
  assert.match(markdown, /provider-auth-env-vars/);
});

test("OpenClaw npm artifact availability failures become P0 live issues", async () => {
  const report = await buildReport({
    generatedAt: "test",
    openclawPath: false,
    packageAvailability: {
      generatedAt: "test",
      fixtureSet: "openclaw-beta",
      pluginTrack: "beta",
      summary: {
        failureCount: 3,
        openclawFailureCount: 2,
        fallbackCount: 2,
      },
      failures: [
        {
          fixture: "mattermost",
          packageName: "@openclaw/mattermost",
          requestedTag: "beta",
          requestedVersion: "2026.2.21",
          fallbackVersion: "2026.2.21",
          openclawPackage: true,
          reason: "npm-dist-tag-missing",
          message: "@openclaw/mattermost: npm dist-tag beta resolved to invalid version undefined",
          path: "plugins/mattermost",
        },
        {
          fixture: "whatsapp",
          packageName: "@openclaw/whatsapp",
          requestedTag: "beta",
          requestedVersion: "2026.2.21",
          fallbackVersion: "2026.2.21",
          openclawPackage: true,
          reason: "npm-dist-tag-missing",
          message: "@openclaw/whatsapp: npm dist-tag beta resolved to invalid version undefined",
          path: "plugins/whatsapp",
        },
        {
          fixture: "external",
          packageName: "external-plugin",
          requestedTag: "beta",
          openclawPackage: false,
          reason: "npm-dist-tag-missing",
          message: "external-plugin: npm dist-tag beta resolved to invalid version undefined",
          path: "plugins/external",
        },
      ],
    },
  });
  const issue = report.issues.find(
    (candidate) =>
      candidate.fixture === "whatsapp" &&
      candidate.code === "package-npm-pack-unavailable",
  );
  const markdown = renderMarkdownReport(report);

  assert.equal(issue.severity, "P0");
  assert.equal(issue.issueClass, "live-issue");
  assert.equal(issue.status, "blocking");
  assert.equal(issue.decision, "plugin-release-fix");
  assert.ok(report.summary.p0IssueCount >= 1);
  assert.equal(report.issues.filter((candidate) => candidate.code === "package-npm-pack-unavailable").length, 1);
  assert.equal(report.crabpotContext.packageAvailability.openclawFailures, 1);
  assert.match(markdown, /Package availability/);
  assert.match(markdown, /@openclaw\/whatsapp@beta/);
  assert.doesNotMatch(markdown, /@openclaw\/mattermost@beta/);
  assert.doesNotMatch(markdown, /external-plugin/);
});

test("disabled OpenClaw target suppresses target-derived compat findings", async () => {
  const report = await buildReport({ generatedAt: "test", openclawPath: false });
  const markdown = renderMarkdownReport(report);

  assert.equal(report.targetOpenClaw.status, "disabled");
  assertMissingFinding(report.warnings, "sdk-export-missing");
  assertMissingFinding(report.warnings, "manifest-unknown-fields");
  assertMissingFinding(report.suggestions, "missing-compat-record");
  assertHasFinding(report.warnings, "llm-trace-phoenix", "conversation-access-hook");
  assertHasFinding(report.warnings, "honcho", "conversation-access-hook");
  assertHasIssue(report.issues, "P1", "conversation-access-hook");
  assert.ok(report.contractProbes.every((probe) => !probe.id.startsWith("sdk.import.package-export-cold-import:")));
  assert.match(markdown, /\| Status\s+\| disabled\s+\|/);
});
