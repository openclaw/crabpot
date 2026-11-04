import assert from "node:assert/strict";
import { test } from "node:test";
import { buildReportFromInspection } from "../scripts/report-lib.mjs";

test("report composition preserves its inspection and runtime evidence inputs", async () => {
  const input = {
    manifest: { fixtures: [{ id: "example" }] },
    openclawPath: false,
    executionResultsPath: "runtime-evidence.json",
    executionResults: { summary: { artifactCount: 2, captureArtifactCount: 1, capturedRegistrationCount: 3 } },
    inspected: {
      generatedAt: "test", status: "pass", targetOpenClaw: { status: "disabled" },
      summary: { fixtureCount: 1 }, issues: [], decisions: [],
      fixtures: [{ id: "example", sdkUsage: { status: "complete", entries: [{ key: "api-member:api.registerTool" }] } }],
    },
  };
  const before = structuredClone(input);
  const report = await buildReportFromInspection(input);
  assert.deepEqual(report.fixtures, before.inspected.fixtures);
  assert.equal(report.generatedAt, "test");
  assert.deepEqual(report.crabpotContext.fixtureIds, ["example"]);
  assert.deepEqual(report.crabpotContext.runtimeEvidence, {
    path: "runtime-evidence.json", artifacts: 2, captureArtifacts: 1, capturedRegistrations: 3,
  });
  assert.deepEqual(input, before);
});
