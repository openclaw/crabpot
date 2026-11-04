import assert from "node:assert/strict";
import { test } from "node:test";
import { buildCorpusReport } from "./report-fixture.mjs";
import { readManifest } from "../../scripts/manifest-lib.mjs";

test("fixture inspections satisfy expected hooks and registrations", async () => {
  const manifest = await readManifest();
  const report = await buildCorpusReport({ fixtureSet: "all", generatedAt: "test", openclawPath: false });

  assert.deepEqual(
    report.fixtures.map(({ id }) => id).sort(),
    manifest.fixtures.map(({ id }) => id).sort(),
  );
  assert.equal(report.status, "pass");
  assert.deepEqual(report.breakages, []);
  for (const inspection of report.fixtures) {
    assert.equal(inspection.status, "ok", `${inspection.id} checkout should be materialized`);
  }
});
