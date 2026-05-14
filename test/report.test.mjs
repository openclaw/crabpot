import assert from "node:assert/strict";
import { test } from "node:test";
import {
  buildReport,
  classifyIssueFinding,
  KNOWN_ISSUE_CODES,
  renderIssuesReport,
  renderMarkdownReport,
} from "../scripts/report-lib.mjs";

test("compatibility report classifies current fixture seams", async () => {
  const report = await buildReport(testReportOptions());
  const hasTargetOpenClaw = report.targetOpenClaw.status === "ok";
  const hasSdkExportGap = report.issues.some((issue) => issue.code === "sdk-export-missing");

  assert.equal(report.status, "pass");
  assert.equal(report.breakages.length, 0);
  assert.ok(report.summary.fixtureCount >= 10);
  assert.ok(report.summary.issueCount > 0);
  assert.ok(report.summary.p1IssueCount > 0);
  assert.ok(report.summary.deprecationWarningCount > 0);
  assert.ok(report.summary.inspectorGapCount > 0);
  assert.ok(report.summary.upstreamIssueCount > 0);
  assert.ok(report.summary.contractProbeCount > 0);
  if (hasTargetOpenClaw) {
    assert.equal(report.summary.p0IssueCount, 0);
    assert.equal(report.summary.liveIssueCount, 0);
    assert.equal(report.summary.liveP0IssueCount, 0);
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
  assertHasFinding(report.warnings, "llm-trace-phoenix", "conversation-access-hook");
  assertHasFinding(report.suggestions, "a2a-gateway", "registration-capture-gap");
  assertHasFinding(report.suggestions, "wecom", "before-tool-call-probe");
  assertHasFinding(report.warnings, "a2a-gateway", "package-manifest-version-drift");
  assertHasFinding(report.warnings, "connectclaw", "legacy-before-agent-start");
  assertHasFinding(report.warnings, "mcp-adapter", "package-plugin-api-compat-missing");
  assertHasFinding(report.suggestions, "agentchat", "package-build-artifact-entrypoint");
  assertHasFinding(report.suggestions, "a2a-gateway", "package-typescript-source-entrypoint");
  assertHasFinding(report.suggestions, "wecom", "package-dependency-install-required");
  assertHasFinding(report.warnings, "honcho", "conversation-access-hook");
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
  assertHasIssue(report.issues, "P1", "conversation-access-hook");
  assertHasIssue(report.issues, "P2", "package-plugin-api-compat-missing");
  assertHasIssue(report.issues, "P2", "package-build-artifact-entrypoint");
  assertHasIssue(report.issues, "P2", "package-typescript-source-entrypoint");
  assertHasIssue(report.issues, "P2", "package-dependency-install-required");
  assertHasIssueClass(report.issues, "deprecation-warning", "legacy-before-agent-start");
  assertHasIssueClass(report.issues, "inspector-gap", "registration-capture-gap");
  assertHasIssueClass(report.issues, "upstream-metadata", "package-plugin-api-compat-missing");
  if (hasTargetOpenClaw) {
    assertHasFinding(report.warnings, "agentchat", "manifest-unknown-fields");
    if (hasSdkExportGap) {
      assertHasIssue(report.issues, "P1", "sdk-export-missing");
      assertHasIssueClass(report.issues, "compat-gap", "sdk-export-missing");
    }
    assertHasIssue(report.issues, "P2", "manifest-unknown-fields");
    assertHasProbe(report.contractProbes, "manifest.schema.top-level-fields:agentchat");
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

test("report can focus on the OpenClaw beta npm fixture set", async () => {
  const report = await buildReport({ fixtureSet: "openclaw-beta", generatedAt: "test", openclawPath: false });

  assert.equal(report.summary.fixtureCount, 8);
  assert.equal(report.crabpotContext.fixtureSet, "openclaw-beta");
  assert.deepEqual(report.crabpotContext.fixtureIds, [
    "brave-plugin",
    "codex",
    "diagnostics-prometheus",
    "google-meet",
    "diffs",
    "memory-lancedb",
    "openclaw-qqbot",
    "whatsapp",
  ]);
  assert.ok(report.fixtures.every((fixture) => report.crabpotContext.fixtureIds.includes(fixture.id)));
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

test("report can reconcile runtime execution evidence", async () => {
  const report = await buildReport({
    executionResults: {
      summary: {
        artifactCount: 1,
        captureArtifactCount: 1,
        capturedRegistrationCount: 1,
      },
      artifacts: [
        {
          fixture: "a2a-gateway",
          kind: "capture",
          status: "pass",
          artifactPath: ".crabpot/results/a2a-gateway/index.capture.json",
          captured: ["registration:registerService"],
        },
      ],
    },
    generatedAt: "test",
    openclawPath: false,
  });
  const markdown = renderMarkdownReport(report);

  assert.equal(report.crabpotContext.runtimeEvidence.captureArtifacts, 1);
  assert.equal(report.summary.runtimeCoverageArtifactCount, 1);
  assert.match(markdown, /Runtime evidence/);
  assert.match(markdown, /Runtime-Covered Inspector Gaps/);
});

test("issue report maps npm payload evidence to monorepo source links", () => {
  const markdown = renderIssuesReport({
    generatedAt: "test",
    status: "pass",
    targetOpenClaw: { status: "disabled" },
    summary: {
      issueCount: 1,
      p0IssueCount: 0,
      p1IssueCount: 0,
      liveIssueCount: 0,
      liveP0IssueCount: 0,
      compatGapCount: 0,
      deprecationWarningCount: 0,
      inspectorGapCount: 0,
      upstreamIssueCount: 1,
      contractProbeCount: 0,
    },
    issues: [
      {
        fixture: "bluebubbles",
        code: "package-openclaw-metadata-missing",
        issueClass: "upstream-metadata",
        decision: "plugin-upstream-fix",
        severity: "P2",
        title: "OpenClaw package metadata is missing",
        status: "open",
        compatStatus: "none",
        live: false,
        deprecated: false,
        evidence: ["plugins/bluebubbles/.crabpot-package/index.js:12"],
      },
    ],
    contractProbes: [],
  });

  assert.match(
    markdown,
    /https:\/\/github\.com\/openclaw\/openclaw\/blob\/[0-9a-f]{40}\/extensions\/bluebubbles\/index\.js#L12/,
  );
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

test("issue report accepts unsupported plugin security manifests as upstream metadata", () => {
  assert.equal(KNOWN_ISSUE_CODES.has("unrecognized-security-manifest"), true);
  assert.equal(KNOWN_ISSUE_CODES.has("security-manifest-schema-unavailable"), true);
  assert.deepEqual(
    classifyIssueFinding(
      {
        fixture: "clawrouter",
        code: "unrecognized-security-manifest",
        level: "warning",
        evidence: ["plugins/clawrouter/openclaw.security.json"],
      },
      { status: "disabled", compatRecordStatuses: {} },
      { severity: "P3" },
    ),
    {
      compatStatus: "none",
      deprecated: false,
      issueClass: "upstream-metadata",
      live: false,
      severity: "P3",
    },
  );

  const markdown = renderIssuesReport({
    generatedAt: "test",
    status: "pass",
    targetOpenClaw: { status: "disabled" },
    summary: {
      issueCount: 1,
      p0IssueCount: 0,
      p1IssueCount: 0,
      liveIssueCount: 0,
      liveP0IssueCount: 0,
      compatGapCount: 0,
      deprecationWarningCount: 0,
      inspectorGapCount: 0,
      upstreamIssueCount: 1,
      contractProbeCount: 0,
    },
    issues: [
      {
        fixture: "clawrouter",
        code: "unrecognized-security-manifest",
        issueClass: "upstream-metadata",
        decision: "plugin-upstream-fix",
        severity: "P3",
        title: "plugin ships an unsupported security manifest",
        status: "open",
        compatStatus: "none",
        live: false,
        deprecated: false,
        evidence: ["plugins/clawrouter/openclaw.security.json"],
      },
    ],
    contractProbes: [],
  });

  assert.match(markdown, /## Upstream Metadata Issues/);
  assert.match(markdown, /🟢 P3 \*\*clawrouter\*\* `upstream-metadata` `plugin-upstream-fix`/);
  assert.match(markdown, /unrecognized-security-manifest/);
});

function testReportOptions() {
  return {
    generatedAt: "test",
    openclawPath: process.env.CRABPOT_TEST_OPENCLAW_PATH,
  };
}

function assertHasFinding(findings, fixture, code) {
  assert.ok(
    findings.some((finding) => finding.fixture === fixture && finding.code === code),
    `expected ${fixture} ${code} finding`,
  );
}

function assertHasFindingCode(findings, code) {
  assert.ok(
    findings.some((finding) => finding.code === code),
    `expected ${code} finding`,
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

function assertHasProbePrefix(probes, idPrefix, priority) {
  assert.ok(
    probes.some((probe) => probe.id.startsWith(idPrefix) && (!priority || probe.priority === priority)),
    `expected contract probe ${idPrefix}${priority ? ` with ${priority}` : ""}`,
  );
}

function assertMissingProbePrefix(probes, idPrefix) {
  assert.ok(
    probes.every((probe) => !probe.id.startsWith(idPrefix)),
    `expected no contract probe ${idPrefix}`,
  );
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
