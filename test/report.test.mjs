import assert from "node:assert/strict";
import { test } from "node:test";
import { buildReport, issueId, renderMarkdownReport, targetOpenClawPathCandidates } from "../scripts/report-lib.mjs";

test("compatibility report classifies current fixture seams", async () => {
  const report = await buildReport({ generatedAt: "test" });

  assert.equal(report.status, "pass");
  assert.equal(report.breakages.length, 0);
  assert.ok(report.summary.fixtureCount >= 10);
  assert.ok(report.summary.issueCount > 0);
  assert.ok(report.summary.p1IssueCount > 0);
  assert.ok(report.summary.contractProbeCount > 0);
  assert.ok(report.issues.every((issue) => /^CRABPOT-[A-F0-9]{8}$/.test(issue.id)));

  assertHasFinding(report.warnings, "hasdata", "provider-auth-env-vars");
  assertHasFinding(report.warnings, "agentchat", "channel-env-vars");
  assertHasFinding(report.warnings, "llm-trace-phoenix", "conversation-access-hook");
  assertHasFinding(report.suggestions, "a2a-gateway", "registration-capture-gap");
  assertHasFinding(report.suggestions, "wecom", "before-tool-call-probe");
  assertHasFinding(report.warnings, "a2a-gateway", "package-manifest-version-drift");
  assertHasFinding(report.warnings, "agentchat", "manifest-unknown-fields");
  assertHasFinding(report.warnings, "codex-app-server", "sdk-export-missing");
  assertHasFinding(report.warnings, "mcp-adapter", "package-plugin-api-compat-missing");
  assertHasFinding(report.suggestions, "agentchat", "package-build-artifact-entrypoint");

  assertHasDecision(report.decisions, "core-compat-adapter", "env-auth");
  assertHasDecision(report.decisions, "inspector-follow-up", "registration-capture");

  assertHasIssue(report.issues, "P1", "registration-capture-gap");
  assertHasIssue(report.issues, "P1", "conversation-access-hook");
  assertHasIssue(report.issues, "P2", "package-plugin-api-compat-missing");
  assertHasIssue(report.issues, "P2", "package-build-artifact-entrypoint");
  assertHasIssue(report.issues, "P2", "manifest-unknown-fields");
  assertHasIssue(report.issues, "P1", "sdk-export-missing");
  assertHasProbe(report.contractProbes, "api.capture.runtime-registrars:wecom");
  assertHasProbe(report.contractProbes, "hook.before_tool_call.terminal-block-approval:wecom");
  assertHasProbe(report.contractProbes, "manifest.schema.top-level-fields:agentchat");
  assertHasProbe(report.contractProbes, "sdk.import.package-export-cold-import:codex-app-server");
  assertHasProbe(report.contractProbes, "sdk.import.package-export-cold-import:codex-app-server", "P1");
  assertHasProbe(report.contractProbes, "package.compat.plugin-api-range:mcp-adapter");
  assertHasProbe(report.contractProbes, "package.entrypoint.build-before-cold-import:agentchat");
});

test("markdown report includes review sections", async () => {
  const report = await buildReport({ generatedAt: "test", openclawPath: false });
  const markdown = renderMarkdownReport(report);

  assert.match(markdown, /## Hard Breakages/);
  assert.match(markdown, /## Target OpenClaw Compat Records/);
  assert.match(markdown, /## Warnings/);
  assert.match(markdown, /## Suggestions To OpenClaw Compat Layer/);
  assert.match(markdown, /## Issue Findings/);
  assert.match(markdown, /## Contract Probe Backlog/);
  assert.match(markdown, /## Decision Matrix/);
  assert.match(markdown, /provider-auth-env-vars/);
});

test("default OpenClaw target discovery covers local and CI checkout shapes", () => {
  const manifest = { openclaw: { defaultCheckoutPath: "../openclaw" } };

  assert.deepEqual(targetOpenClawPathCandidates(manifest), ["../openclaw", "./openclaw"]);
  assert.deepEqual(targetOpenClawPathCandidates(manifest, "./custom-openclaw"), ["./custom-openclaw"]);
});

test("issue ids are stable fingerprints instead of order counters", () => {
  const finding = {
    fixture: "codex-app-server",
    code: "sdk-export-missing",
    severity: "P1",
    compatRecord: "plugin-sdk-export-aliases",
    evidence: ["openclaw/plugin-sdk/discord @ plugins/codex-app-server/src/controller.ts:104"],
  };

  assert.equal(issueId(finding), issueId({ ignored: "field", ...finding }));
  assert.notEqual(issueId(finding), issueId({ ...finding, evidence: [...finding.evidence, "extra"] }));
});

function assertHasFinding(findings, fixture, code) {
  assert.ok(
    findings.some((finding) => finding.fixture === fixture && finding.code === code),
    `expected ${fixture} ${code} finding`,
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

function assertHasProbe(probes, id, priority) {
  assert.ok(
    probes.some((probe) => probe.id === id && (!priority || probe.priority === priority)),
    `expected contract probe ${id}${priority ? ` with ${priority}` : ""}`,
  );
}
