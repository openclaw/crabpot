import assert from "node:assert/strict";

export function targetHasConversationContractCoverage(targetOpenClaw) {
  const contractId = "hook.llm-observer.privacy-payload";
  const status = targetOpenClaw.compatRecordStatuses?.[contractId];
  const tests = targetOpenClaw.compatRecordTests?.[contractId];
  const missingTests = targetOpenClaw.compatRecordMissingTests?.[contractId];
  return (
    ["active", "supported"].includes(status) &&
    Array.isArray(tests) &&
    tests.length > 0 &&
    Array.isArray(missingTests) &&
    missingTests.length === 0
  );
}

export function assertHasFinding(findings, fixture, code) {
  assert.ok(
    findings.some((finding) => finding.fixture === fixture && finding.code === code),
    `expected ${fixture} ${code} finding`,
  );
}

export function assertHasFindingCode(findings, code) {
  assert.ok(
    findings.some((finding) => finding.code === code),
    `expected ${code} finding`,
  );
}

export function assertMissingFinding(findings, code) {
  assert.ok(
    findings.every((finding) => finding.code !== code),
    `expected no ${code} finding`,
  );
}

export function assertMissingFixtureFinding(findings, fixture, code) {
  assert.ok(
    findings.every((finding) => finding.fixture !== fixture || finding.code !== code),
    `expected no ${fixture} ${code} finding`,
  );
}

export function assertHasDecision(decisions, decision, seam) {
  assert.ok(
    decisions.some((row) => row.decision === decision && row.seam === seam),
    `expected ${decision} decision for ${seam}`,
  );
}

export function assertHasIssue(issues, severity, code) {
  assert.ok(
    issues.some((issue) => issue.severity === severity && issue.code === code),
    `expected ${severity} issue for ${code}`,
  );
}

export function assertHasIssueClass(issues, issueClass, code) {
  assert.ok(
    issues.some((issue) => issue.issueClass === issueClass && issue.code === code),
    `expected ${issueClass} issue for ${code}`,
  );
}

export function assertHasProbe(probes, id, priority) {
  assert.ok(
    probes.some((probe) => probe.id === id && (!priority || probe.priority === priority)),
    `expected contract probe ${id}${priority ? ` with ${priority}` : ""}`,
  );
}

export function assertHasProbePrefix(probes, idPrefix, priority) {
  assert.ok(
    probes.some((probe) => probe.id.startsWith(idPrefix) && (!priority || probe.priority === priority)),
    `expected contract probe ${idPrefix}${priority ? ` with ${priority}` : ""}`,
  );
}

export function assertMissingProbePrefix(probes, idPrefix) {
  assert.ok(
    probes.every((probe) => !probe.id.startsWith(idPrefix)),
    `expected no contract probe ${idPrefix}`,
  );
}

export function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
