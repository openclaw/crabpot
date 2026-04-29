import assert from "node:assert/strict";
import { test } from "node:test";
import { buildColdImportReadiness, validateColdImportReadiness } from "../scripts/cold-import-readiness.mjs";
import { buildReport } from "../scripts/report-lib.mjs";

test("cold import readiness classifies entrypoint blockers", async () => {
  const report = await buildReport(testReportOptions());
  const readiness = await buildColdImportReadiness({ report });

  assert.deepEqual(validateColdImportReadiness(readiness), []);
  assert.ok(readiness.summary.entrypointCount > 0);
  assert.ok(readiness.summary.blockedCount > 0);
  assert.ok(readiness.summary.tsLoaderRequiredCount > 0);
  assert.ok(readiness.summary.buildRequiredCount > 0);
  assert.ok(readiness.summary.dependencyInstallRequiredCount > 0);
  assert.ok(readiness.summary.sdkAliasRequiredCount > 0);

  assertHasStatus(readiness, "wecom", "dependency-install-required");
  assertHasStatus(readiness, "agentchat", "build-required");
  assertHasStatus(readiness, "a2a-gateway", "ts-loader-required");
  if (report.targetOpenClaw.status === "ok") {
    assertHasStatus(readiness, "honcho", "sdk-alias-required");
  }
});

function testReportOptions() {
  return {
    generatedAt: "test",
    openclawPath: process.env.CRABPOT_TEST_OPENCLAW_PATH,
  };
}

function assertHasStatus(readiness, fixtureId, status) {
  const fixture = readiness.fixtures.find((item) => item.id === fixtureId);
  assert.ok(
    fixture?.entrypoints.some((entrypoint) => entrypoint.status === status),
    `expected ${fixtureId} to have ${status} entrypoint`,
  );
}
