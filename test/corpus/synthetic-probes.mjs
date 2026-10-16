import assert from "node:assert/strict";
import { test } from "node:test";
import { buildContractCapture } from "../../scripts/capture-contracts.mjs";
import { buildSyntheticProbePlan, renderSyntheticProbeMarkdown, validateSyntheticProbePlan } from "../../scripts/synthetic-probes.mjs";
import { buildCorpusReport, testReportOptions } from "./report-fixture.mjs";

test("synthetic probe plan is generated from the current crabpot capture", async () => {
  const report = await buildCorpusReport(testReportOptions());
  const capture = await buildContractCapture({ report });
  const plan = await buildSyntheticProbePlan({ capture });

  assert.deepEqual(validateSyntheticProbePlan(plan), []);
  assert.ok(plan.summary.probeCount > 0);
  assert.ok(plan.summary.readyCount > 0);
  assert.ok(plan.summary.metadataOnlyCount > 0);
  assert.match(renderSyntheticProbeMarkdown(plan), /Crabpot Synthetic Probes/);
});
