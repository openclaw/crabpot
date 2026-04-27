import assert from "node:assert/strict";
import { test } from "node:test";
import { validateContractCoverage } from "../scripts/check-contract-coverage.mjs";
import { buildReport } from "../scripts/report-lib.mjs";

test("current report satisfies contract coverage gates", async () => {
  const report = await buildReport({ generatedAt: "test", openclawPath: false });

  assert.deepEqual(validateContractCoverage(report), []);
});
