import assert from "node:assert/strict";
import { test } from "node:test";
import { buildColdImportReadiness, validateColdImportReadiness } from "../scripts/cold-import-readiness.mjs";
import { buildReport } from "../scripts/report-lib.mjs";

test("cold import readiness classifies entrypoint blockers", async () => {
  const report = await buildReport({ generatedAt: "test" });
  const readiness = await buildColdImportReadiness({ report });

  assert.deepEqual(validateColdImportReadiness(readiness), []);
  assert.ok(readiness.summary.entrypointCount > 0);
  assert.ok(readiness.summary.readyCount > 0);
  assert.ok(readiness.summary.blockedCount > 0);
  assert.ok(readiness.summary.tsLoaderRequiredCount > 0);
  assert.ok(readiness.summary.buildRequiredCount > 0);
  assert.ok(readiness.summary.sdkAliasRequiredCount > 0);

  assertHasStatus(readiness, "wecom", "ready");
  assertHasStatus(readiness, "agentchat", "build-required");
  assertHasStatus(readiness, "a2a-gateway", "ts-loader-required");
  assertHasStatus(readiness, "codex-app-server", "sdk-alias-required");
});

test("cold import readiness validation requires blocker evidence", () => {
  const readiness = {
    fixtures: [
      {
        id: "fixture",
        entrypoints: [
          {
            id: "cold-import.extension:fixture:index",
            path: "plugins/fixture/index.ts",
            status: "ts-loader-required",
            blockers: [{ code: "ts-loader-required" }],
            assertions: [],
          },
        ],
      },
    ],
  };

  const errors = validateColdImportReadiness(readiness);
  assert.ok(errors.some((error) => error.includes("missing cold-import assertions")));
  assert.ok(errors.some((error) => error.includes("blocker is missing code or evidence")));
});

function assertHasStatus(readiness, fixtureId, status) {
  const fixture = readiness.fixtures.find((item) => item.id === fixtureId);
  assert.ok(
    fixture?.entrypoints.some((entrypoint) => entrypoint.status === status),
    `expected ${fixtureId} to have ${status} entrypoint`,
  );
}
