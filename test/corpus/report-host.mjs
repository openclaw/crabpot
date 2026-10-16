import assert from "node:assert/strict";
import { test } from "node:test";
import { renderIssuesReport } from "../../scripts/report-lib.mjs";
import { buildCorpusReport as buildReport, testReportOptions } from "./report-fixture.mjs";
import { targetHasConversationContractCoverage, assertHasFinding, assertHasFindingCode, assertMissingFinding, assertMissingFixtureFinding, assertHasDecision, assertHasIssue, assertHasIssueClass, assertHasProbe, assertHasProbePrefix, assertMissingProbePrefix, escapeRegExp } from "./report-assertions.mjs";

test("compatibility report classifies current fixture seams", async () => {
  const report = await buildReport(testReportOptions());
  const hasTargetOpenClaw = report.targetOpenClaw.status === "ok";
  const hasSdkExportGap = report.issues.some((issue) => issue.code === "sdk-export-missing");
  const hasConversationContractCoverage = targetHasConversationContractCoverage(report.targetOpenClaw);
  const agentchatChannelEnvVarsAreSupported =
    report.targetOpenClaw.manifestFields?.includes("channelEnvVars") === true;
  const p0Issues = report.issues.filter((issue) => issue.severity === "P0");
  const liveIssues = report.issues.filter((issue) => issue.live);
  const liveP0Issues = liveIssues.filter((issue) => issue.severity === "P0");
  const knownTargetLiveP0Issues = liveP0Issues.filter((issue) =>
    ["unknown-hook-name", "unknown-registration-name"].includes(issue.code),
  );

  assert.equal(report.status, "pass");
  assert.equal(report.breakages.length, 0);
  assert.ok(report.summary.fixtureCount >= 10);
  assert.equal(report.fixtures.some((fixture) => fixture.id === "openclaw-qqbot"), false);
  assert.ok(report.fixtures.some((fixture) => fixture.id === "qqbot"));
  assert.ok(report.summary.issueCount > 0);
  assert.ok(report.summary.p1IssueCount > 0);
  assert.ok(report.summary.deprecationWarningCount > 0);
  assert.ok(report.summary.inspectorGapCount > 0);
  assert.ok(report.summary.upstreamIssueCount > 0);
  assert.ok(report.summary.contractProbeCount > 0);
  assert.equal(report.summary.p0IssueCount, p0Issues.length);
  assert.equal(report.summary.liveIssueCount, liveIssues.length);
  assert.equal(report.summary.liveP0IssueCount, liveP0Issues.length);
  if (hasTargetOpenClaw) {
    assert.equal(report.summary.liveP0IssueCount, knownTargetLiveP0Issues.length);
  }
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
  if (hasConversationContractCoverage) {
    assertMissingFinding(report.warnings, "conversation-access-hook");
  } else {
    assertHasFinding(report.warnings, "llm-trace-phoenix", "conversation-access-hook");
  }
  assertHasFinding(report.suggestions, "a2a-gateway", "registration-capture-gap");
  assertHasFinding(report.suggestions, "wecom", "before-tool-call-probe");
  assertHasFinding(report.warnings, "a2a-gateway", "package-manifest-version-drift");
  assertHasFinding(report.warnings, "connectclaw", "legacy-before-agent-start");
  assertHasFinding(report.warnings, "mcp-adapter", "package-plugin-api-compat-missing");
  assertHasFinding(report.suggestions, "agentchat", "package-build-artifact-entrypoint");
  assertHasFinding(report.suggestions, "a2a-gateway", "package-typescript-source-entrypoint");
  assertHasFinding(report.suggestions, "wecom", "package-dependency-install-required");
  if (!hasConversationContractCoverage) {
    assertHasFinding(report.warnings, "honcho", "conversation-access-hook");
  }
  assertHasFinding(report.warnings, "composio", "package-plugin-api-compat-missing");
  assertHasFinding(report.suggestions, "secureclaw", "registration-capture-gap");
  if (hasTargetOpenClaw) {
    if (hasSdkExportGap) {
      assertHasFindingCode(report.warnings, "sdk-export-missing");
    } else {
      assertMissingFinding(report.warnings, "sdk-export-missing");
    }
    assertHasFinding(report.warnings, "memos-cloud", "manifest-unknown-fields");
  }

  assertHasDecision(report.decisions, "core-compat-adapter", "env-auth");
  assertHasDecision(report.decisions, "inspector-follow-up", "registration-capture");

  assertHasIssue(report.issues, "P2", "registration-capture-gap");
  if (hasConversationContractCoverage) {
    assertMissingFinding(report.issues, "conversation-access-hook");
  } else {
    assertHasIssue(report.issues, "P1", "conversation-access-hook");
  }
  assertHasIssue(report.issues, "P2", "package-plugin-api-compat-missing");
  assertHasIssue(report.issues, "P2", "package-build-artifact-entrypoint");
  assertHasIssue(report.issues, "P2", "package-typescript-source-entrypoint");
  assertHasIssue(report.issues, "P2", "package-dependency-install-required");
  assertHasIssueClass(report.issues, "deprecation-warning", "legacy-before-agent-start");
  assertHasIssueClass(report.issues, "inspector-gap", "registration-capture-gap");
  assertHasIssueClass(report.issues, "upstream-metadata", "package-plugin-api-compat-missing");
  if (hasTargetOpenClaw && knownTargetLiveP0Issues.some((issue) => issue.code === "unknown-hook-name")) {
    assertHasIssue(report.issues, "P0", "unknown-hook-name");
    assertHasIssueClass(report.issues, "live-issue", "unknown-hook-name");
  }
  if (hasTargetOpenClaw && knownTargetLiveP0Issues.some((issue) => issue.code === "unknown-registration-name")) {
    assertHasIssue(report.issues, "P0", "unknown-registration-name");
    assertHasIssueClass(report.issues, "live-issue", "unknown-registration-name");
  }
  if (hasTargetOpenClaw) {
    if (agentchatChannelEnvVarsAreSupported) {
      assertMissingFixtureFinding(report.warnings, "agentchat", "manifest-unknown-fields");
    } else {
      assertHasFinding(report.warnings, "agentchat", "manifest-unknown-fields");
    }
    if (hasSdkExportGap) {
      assertHasIssue(report.issues, "P1", "sdk-export-missing");
      assertHasIssueClass(report.issues, "compat-gap", "sdk-export-missing");
    }
    assertHasIssue(report.issues, "P2", "manifest-unknown-fields");
    if (agentchatChannelEnvVarsAreSupported) {
      assertMissingProbePrefix(report.contractProbes, "manifest.schema.top-level-fields:agentchat");
    } else {
      assertHasProbe(report.contractProbes, "manifest.schema.top-level-fields:agentchat");
    }
    assertHasProbe(report.contractProbes, "manifest.schema.top-level-fields:memos-cloud");
  }
  assertHasProbe(report.contractProbes, "api.capture.runtime-registrars:wecom");
  assertHasProbe(report.contractProbes, "hook.before_tool_call.terminal-block-approval:wecom");
  if (hasTargetOpenClaw) {
    if (hasSdkExportGap) {
      assertHasProbePrefix(report.contractProbes, "sdk.import.package-export-cold-import:");
      assertHasProbePrefix(report.contractProbes, "sdk.import.package-export-cold-import:", "P1");
    } else {
      assertMissingProbePrefix(report.contractProbes, "sdk.import.package-export-cold-import:");
    }
  }
  assertHasProbe(report.contractProbes, "package.compat.plugin-api-range:mcp-adapter");
  assertHasProbe(report.contractProbes, "package.entrypoint.build-before-cold-import:agentchat");
  assertHasProbe(report.contractProbes, "package.entrypoint.typescript-loader:a2a-gateway");
  assertHasProbe(report.contractProbes, "package.entrypoint.isolated-dependency-install:wecom");
  assertHasProbe(report.contractProbes, "api.capture.runtime-registrars:hyperspell");
  assertHasProbe(report.contractProbes, "hook.compat.before-agent-start-migration:honcho");
  assertHasProbe(report.contractProbes, "package.compat.plugin-api-range:secureclaw");
});

test("issue report preserves decision metadata for compat-layer work", async () => {
  const report = await buildReport(testReportOptions());
  const sdkIssue = report.issues.find((issue) => issue.code === "sdk-export-missing");
  const manifestIssue = report.issues.find((issue) => issue.code === "manifest-unknown-fields");
  const pluginCompatIssue = report.issues.find((issue) => issue.code === "package-plugin-api-compat-missing");
  const markdown = renderIssuesReport(report);

  if (report.targetOpenClaw.status !== "ok") {
    assert.equal(sdkIssue, undefined);
    assert.equal(manifestIssue, undefined);
    assert.equal(pluginCompatIssue.owner, "plugin");
    assert.equal(pluginCompatIssue.decision, "plugin-upstream-fix");
    assert.match(markdown, /## Triage Summary/);
    return;
  }
  assert.equal(manifestIssue.owner, "plugin");
  assert.equal(manifestIssue.decision, "plugin-upstream-fix");
  assert.match(markdown, /## Triage Summary/);
  assert.match(markdown, /deprecation-warning/);
  assert.match(markdown, /🟠 P1/);
  assert.match(markdown, /🟡 P2/);
  assert.doesNotMatch(markdown, /\| ID\s+\| Severity\s+\| Class\s+\| Fixture\s+\| Owner\s+\|/);
  assert.doesNotMatch(markdown, /CRABPOT-[A-F0-9]{8}/);

  if (!sdkIssue) {
    assert.doesNotMatch(markdown, /sdk-export-missing/);
    return;
  }

  assert.equal(sdkIssue.owner, "core");
  assert.equal(sdkIssue.decision, "core-compat-adapter");
  assert.equal(sdkIssue.status, "open");
  assert.equal(sdkIssue.severity, "P1");
  assert.equal(sdkIssue.compatStatus, "untracked");
  assert.equal(sdkIssue.issueClass, "compat-gap");
  assert.match(markdown, /sdk-export-missing/);
  assert.match(markdown, /core-compat-adapter/);
  assert.match(markdown, /compat-gap/);
  assert.match(markdown, new RegExp(`🟠 P1 \\*\\*${escapeRegExp(sdkIssue.fixture)}\\*\\*`));
  assert.match(markdown, /`compat-gap` `core-compat-adapter`/);

  const windowsReport = structuredClone(report);
  const windowsIssue = windowsReport.issues.find((issue) => issue.code === "sdk-export-missing");
  const evidencePath = windowsIssue.evidence.find((evidence) => /plugins[\\/].+:\d+/.test(evidence));
  assert.ok(evidencePath, "expected sdk-export-missing issue to have path evidence");
  windowsIssue.evidence = [evidencePath.replaceAll("/", "\\")];
  assert.match(renderIssuesReport(windowsReport), /https:\/\/github\.com\/.+\/blob\/[0-9a-f]{40}\/.+#L\d+/);
});
