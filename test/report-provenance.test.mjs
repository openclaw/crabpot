import assert from "node:assert/strict";
import { test } from "node:test";
import { packageEvidenceRef, qualifySdkHostRanges } from "../scripts/report-provenance.mjs";

test("npm evidence uses artifact identity and never borrows a different fallback version's source", () => {
  const pin = { pinnedVersion: "2026.9.6", pinnedRef: "a".repeat(40) };
  assert.equal(packageEvidenceRef({ ...pin, payloadVersion: "2026.9.6" }), pin.pinnedRef);
  assert.equal(packageEvidenceRef({ ...pin, payloadVersion: "2026.9.7" }), "");
  assert.equal(packageEvidenceRef(pin), "");
  assert.equal(packageEvidenceRef({ ...pin, payloadVersion: "2026.9.7", gitHead: "b".repeat(40) }), "b".repeat(40));
  assert.equal(packageEvidenceRef({ ...pin, payloadVersion: "2026.9.7", gitHead: "invalid" }), "");
});

test("unsupported SDK pairs retain observations and severity without prescribing a core repair", () => {
  const sdk = { fixture: "fixture", code: "sdk-export-missing", owner: "core", decision: "core-compat-adapter",
    issueClass: "compat-gap", severity: "P1", status: "open", compatRecord: "sdk-contract", evidence: ["openclaw/plugin-sdk/new-api"] };
  const unrelated = { ...sdk, code: "unknown-hook-name", issueClass: "live-issue", severity: "P0" };
  const report = {
    fixtures: [{ id: "fixture", package: { openclaw: { compatPluginApi: ">=2026.9.7" } } }],
    issues: [sdk, unrelated],
    warnings: [{ ...sdk, message: "missing export" }], logs: [],
    decisions: [{ fixture: "fixture", seam: "sdk-alias", decision: "core-compat-adapter", action: "restore alias" }],
    summary: { compatGapCount: 1, inspectorGapCount: 0, p1IssueCount: 1, liveIssueCount: 1 },
  };
  const unsupported = qualifySdkHostRanges(report, { hostVersion: "2026.9.6", satisfies: () => false });
  assert.equal(unsupported.issues[0].owner, "inspector");
  assert.equal(unsupported.issues[0].issueClass, "inspector-gap");
  assert.equal(unsupported.issues[0].severity, "P1");
  assert.equal(unsupported.issues[0].evidence[0], sdk.evidence[0]);
  assert.match(unsupported.issues[0].evidence[1], /2026.9.6.*2026.9.7/);
  assert.equal(unsupported.issues[0].compatRecord, null);
  assert.match(unsupported.issues[0].evidence[2], /Unassessed SDK compatibility record: sdk-contract/);
  assert.equal(unsupported.warnings[0].compatRecord, null);
  assert.match(unsupported.decisions[0].action, /eligible host/);
  assert.equal(unsupported.summary.compatGapCount, 0);
  assert.equal(unsupported.summary.inspectorGapCount, 1);
  assert.equal(unsupported.summary.openInspectorGapCount, 1);
  assert.equal(unsupported.summary.p1IssueCount, 1);
  assert.deepEqual(unsupported.issues[1], unrelated);
  assert.equal(sdk.owner, "core");
  assert.equal(qualifySdkHostRanges(report, { hostVersion: "2026.9.7", satisfies: () => true }), report);
  assert.equal(qualifySdkHostRanges(report, { hostVersion: null, satisfies: () => false }), report);
});
