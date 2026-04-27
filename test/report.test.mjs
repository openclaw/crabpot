import assert from "node:assert/strict";
import { test } from "node:test";
import {
  buildReport,
  renderIssuesReport,
  renderMarkdownReport,
} from "../scripts/report-lib.mjs";

test("compatibility report classifies current fixture seams", async () => {
  const report = await buildReport({ generatedAt: "test" });

  assert.equal(report.status, "pass");
  assert.equal(report.breakages.length, 0);
  assert.ok(report.summary.fixtureCount >= 10);
  assert.ok(report.summary.issueCount > 0);
  assert.ok(report.summary.p0IssueCount > 0);
  assert.ok(report.summary.p1IssueCount > 0);
  assert.ok(report.summary.liveIssueCount > 0);
  assert.ok(report.summary.liveP0IssueCount > 0);
  assert.ok(report.summary.compatGapCount > 0);
  assert.ok(report.summary.deprecationWarningCount > 0);
  assert.ok(report.summary.inspectorGapCount > 0);
  assert.ok(report.summary.upstreamIssueCount > 0);
  assert.ok(report.summary.contractProbeCount > 0);
  assert.ok(report.issues.every((issue) => /^CRABPOT-[A-F0-9]{8}$/.test(issue.id)));
  assert.ok(report.issues.every((issue) => typeof issue.issueClass === "string"));
  assert.deepEqual(
    ["hyperspell", "honcho", "composio", "memu-engine", "secureclaw", "memos-cloud"].filter((id) =>
      report.fixtures.some((fixture) => fixture.id === id),
    ),
    ["hyperspell", "honcho", "composio", "memu-engine", "secureclaw", "memos-cloud"],
  );

  assertHasFinding(report.warnings, "hasdata", "provider-auth-env-vars");
  assertHasFinding(report.warnings, "agentchat", "channel-env-vars");
  assertHasFinding(report.warnings, "llm-trace-phoenix", "conversation-access-hook");
  assertHasFinding(report.suggestions, "a2a-gateway", "registration-capture-gap");
  assertHasFinding(report.suggestions, "wecom", "before-tool-call-probe");
  assertHasFinding(report.warnings, "a2a-gateway", "package-manifest-version-drift");
  assertHasFinding(report.warnings, "agentchat", "manifest-unknown-fields");
  assertHasFinding(report.warnings, "codex-app-server", "sdk-export-missing");
  assertHasFinding(report.warnings, "connectclaw", "legacy-before-agent-start");
  assertHasFinding(report.warnings, "mcp-adapter", "package-plugin-api-compat-missing");
  assertHasFinding(report.suggestions, "agentchat", "package-build-artifact-entrypoint");
  assertHasFinding(report.suggestions, "a2a-gateway", "package-typescript-source-entrypoint");
  assertHasFinding(report.suggestions, "wecom", "package-dependency-install-required");
  assertHasFinding(report.suggestions, "codex-app-server", "missing-compat-record");
  assertHasFinding(report.warnings, "hyperspell", "unknown-hook-name");
  assertHasFinding(report.warnings, "honcho", "conversation-access-hook");
  assertHasFinding(report.warnings, "composio", "package-plugin-api-compat-missing");
  assertHasFinding(report.warnings, "memos-cloud", "manifest-unknown-fields");
  assertHasFinding(report.suggestions, "secureclaw", "registration-capture-gap");

  assertHasDecision(report.decisions, "core-compat-adapter", "env-auth");
  assertHasDecision(report.decisions, "inspector-follow-up", "registration-capture");
  assertHasDecision(report.decisions, "core-compat-adapter", "compat-registry");

  assertHasIssue(report.issues, "P1", "registration-capture-gap");
  assertHasIssue(report.issues, "P1", "conversation-access-hook");
  assertHasIssue(report.issues, "P1", "missing-compat-record");
  assertHasIssue(report.issues, "P2", "package-plugin-api-compat-missing");
  assertHasIssue(report.issues, "P2", "package-build-artifact-entrypoint");
  assertHasIssue(report.issues, "P2", "manifest-unknown-fields");
  assertHasIssue(report.issues, "P2", "package-typescript-source-entrypoint");
  assertHasIssue(report.issues, "P2", "package-dependency-install-required");
  assertHasIssue(report.issues, "P0", "sdk-export-missing");
  assertHasIssue(report.issues, "P0", "unknown-hook-name");
  assertHasIssueClass(report.issues, "live-issue", "sdk-export-missing");
  assertHasIssueClass(report.issues, "live-issue", "unknown-hook-name");
  assertHasIssueClass(report.issues, "compat-gap", "missing-compat-record");
  assertHasIssueClass(report.issues, "deprecation-warning", "legacy-before-agent-start");
  assertHasIssueClass(report.issues, "inspector-gap", "registration-capture-gap");
  assertHasIssueClass(report.issues, "upstream-metadata", "package-plugin-api-compat-missing");
  assertHasProbe(report.contractProbes, "api.capture.runtime-registrars:wecom");
  assertHasProbe(report.contractProbes, "hook.before_tool_call.terminal-block-approval:wecom");
  assertHasProbe(report.contractProbes, "manifest.schema.top-level-fields:agentchat");
  assertHasProbe(report.contractProbes, "sdk.import.package-export-cold-import:codex-app-server");
  assertHasProbe(report.contractProbes, "sdk.import.package-export-cold-import:codex-app-server", "P1");
  assertHasProbe(report.contractProbes, "package.compat.plugin-api-range:mcp-adapter");
  assertHasProbe(report.contractProbes, "package.entrypoint.build-before-cold-import:agentchat");
  assertHasProbe(report.contractProbes, "package.entrypoint.typescript-loader:a2a-gateway");
  assertHasProbe(report.contractProbes, "package.entrypoint.isolated-dependency-install:wecom");
  assertHasProbe(report.contractProbes, "api.capture.runtime-registrars:hyperspell");
  assertHasProbe(report.contractProbes, "hook.compat.before-agent-start-migration:honcho");
  assertHasProbe(report.contractProbes, "package.compat.plugin-api-range:secureclaw");
  assertHasProbe(report.contractProbes, "manifest.schema.top-level-fields:memos-cloud");
});

test("markdown report includes review sections", async () => {
  const report = await buildReport({ generatedAt: "test", openclawPath: false });
  const markdown = renderMarkdownReport(report);

  assert.match(markdown, /## Hard Breakages/);
  assert.match(markdown, /## Target OpenClaw Compat Records/);
  assert.match(markdown, /## Triage Overview/);
  assert.match(markdown, /## Live Issues/);
  assert.match(markdown, /## Deprecation Warnings/);
  assert.match(markdown, /## Inspector Proof Gaps/);
  assert.match(markdown, /## Warnings/);
  assert.match(markdown, /## Suggestions To OpenClaw Compat Layer/);
  assert.match(markdown, /## Issue Findings/);
  assert.match(markdown, /## Contract Probe Backlog/);
  assert.match(markdown, /## Decision Matrix/);
  assert.match(markdown, /provider-auth-env-vars/);
});

test("disabled OpenClaw target suppresses target-derived compat findings", async () => {
  const report = await buildReport({ generatedAt: "test", openclawPath: false });
  const markdown = renderMarkdownReport(report);

  assert.equal(report.targetOpenClaw.status, "disabled");
  assertMissingFinding(report.warnings, "sdk-export-missing");
  assertMissingFinding(report.warnings, "manifest-unknown-fields");
  assertMissingFinding(report.suggestions, "missing-compat-record");
  assert.ok(report.contractProbes.every((probe) => !probe.id.startsWith("sdk.import.package-export-cold-import:")));
  assert.match(markdown, /\| Status\s+\| disabled\s+\|/);
});

test("issue report preserves decision metadata for compat-layer work", async () => {
  const report = await buildReport({ generatedAt: "test" });
  const sdkIssue = report.issues.find((issue) => issue.code === "sdk-export-missing");
  const manifestIssue = report.issues.find((issue) => issue.code === "manifest-unknown-fields");
  const markdown = renderIssuesReport(report);

  assert.equal(sdkIssue.owner, "core");
  assert.equal(sdkIssue.decision, "core-compat-adapter");
  assert.equal(sdkIssue.status, "blocking");
  assert.equal(sdkIssue.severity, "P0");
  assert.equal(sdkIssue.compatStatus, "untracked");
  assert.equal(manifestIssue.owner, "plugin");
  assert.equal(manifestIssue.decision, "plugin-upstream-fix");
  assert.match(markdown, /## Triage Summary/);
  assert.match(markdown, /sdk-export-missing/);
  assert.match(markdown, /core-compat-adapter/);
  assert.match(markdown, /live-issue/);
  assert.match(markdown, /deprecation-warning/);
  assert.match(markdown, /🔴 P0 \*\*codex-app-server\*\* `live-issue` `core-compat-adapter`/);
  assert.match(markdown, /🟠 P1/);
  assert.match(markdown, /🟡 P2/);
  assert.match(
    markdown,
    /https:\/\/github\.com\/pwrdrvr\/openclaw-codex-app-server\/blob\/[0-9a-f]{40}\/src\/controller\.ts#L104/,
  );
  assert.doesNotMatch(markdown, /\| ID\s+\| Severity\s+\| Class\s+\| Fixture\s+\| Owner\s+\|/);
  assert.doesNotMatch(markdown, /CRABPOT-[A-F0-9]{8}/);

  const windowsReport = structuredClone(report);
  windowsReport.issues.find((issue) => issue.code === "sdk-export-missing").evidence = [
    "openclaw/plugin-sdk/discord @ plugins\\codex-app-server\\src\\controller.ts:104",
  ];
  assert.match(
    renderIssuesReport(windowsReport),
    /https:\/\/github\.com\/pwrdrvr\/openclaw-codex-app-server\/blob\/[0-9a-f]{40}\/src\/controller\.ts#L104/,
  );
});

function assertHasFinding(findings, fixture, code) {
  assert.ok(
    findings.some((finding) => finding.fixture === fixture && finding.code === code),
    `expected ${fixture} ${code} finding`,
  );
}

function assertMissingFinding(findings, code) {
  assert.ok(
    findings.every((finding) => finding.code !== code),
    `expected no ${code} finding`,
  );
}

function assertHasDecision(decisions, decision, seam) {
  assert.ok(
    decisions.some((row) => row.decision === decision && row.seam === seam),
    `expected ${decision} decision for ${seam}`,
  );
}

function assertHasIssue(issues, severity, code) {
  assert.ok(
    issues.some((issue) => issue.severity === severity && issue.code === code),
    `expected ${severity} issue for ${code}`,
  );
}

function assertHasIssueClass(issues, issueClass, code) {
  assert.ok(
    issues.some((issue) => issue.issueClass === issueClass && issue.code === code),
    `expected ${issueClass} issue for ${code}`,
  );
}

function assertHasProbe(probes, id, priority) {
  assert.ok(
    probes.some((probe) => probe.id === id && (!priority || probe.priority === priority)),
    `expected contract probe ${id}${priority ? ` with ${priority}` : ""}`,
  );
}
