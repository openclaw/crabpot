import assert from "node:assert/strict";
import { test } from "node:test";
import { validateContractCoverage } from "../../scripts/check-contract-coverage.mjs";
import { buildCorpusReport as buildReport } from "./report-fixture.mjs";

test("current report satisfies contract coverage gates", async () => {
  const report = await buildReport({ generatedAt: "test", openclawPath: false });

  assert.deepEqual(validateContractCoverage(report), []);
});
