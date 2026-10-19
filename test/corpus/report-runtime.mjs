import assert from "node:assert/strict";
import { test } from "node:test";
import { renderMarkdownReport } from "../../scripts/report-lib.mjs";
import { buildCorpusReport as buildReport } from "./report-fixture.mjs";

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
