import assert from "node:assert/strict";
import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { test } from "node:test";
import { inspectFixture } from "../scripts/inspect-fixtures.mjs";
import { repoRoot } from "../scripts/manifest-lib.mjs";

test("fixture inspection resolves source and manifest evidence from its checkout", async (context) => {
  const checkout = await mkdtemp(path.join(tmpdir(), "crabpot-inspect-fixture-"));
  context.after(() => rm(checkout, { recursive: true, force: true }));
  await writeFile(path.join(checkout, "package.json"), JSON.stringify({
    name: "fixture-inspection-example", type: "module", openclaw: { extensions: ["./index.js"] },
  }));
  await writeFile(path.join(checkout, "openclaw.plugin.json"), JSON.stringify({
    id: "fixture-inspection-example", contracts: { tools: ["example"] },
  }));
  await writeFile(path.join(checkout, "index.js"), `export default {
    register(api) {
      api.on("agent_end", () => {});
      api.registerTool({ name: "example", execute() {} });
    },
  };`);

  const fixture = { id: "fixture-inspection-example", path: path.relative(repoRoot, checkout) };
  const inspection = await inspectFixture(fixture);
  assert.equal(inspection.id, fixture.id);
  assert.equal(inspection.status, "ok");
  assert.deepEqual(inspection.hooks, ["agent_end"]);
  assert.deepEqual(inspection.registrations, ["registerTool"]);
  assert.deepEqual(inspection.manifestContracts, ["tools"]);
  assert.deepEqual(inspection.sourceFiles, [path.relative(repoRoot, path.join(checkout, "index.js"))]);
  assert.deepEqual(inspection.manifestFiles, [path.relative(repoRoot, path.join(checkout, "openclaw.plugin.json"))]);
  assert.ok(inspection.sdkUsage.entries.some((entry) => entry.key === "api-member:api.registerTool"));

  await rm(checkout, { recursive: true, force: true });
  const missing = await inspectFixture(fixture);
  assert.equal(missing.status, "missing");
  assert.deepEqual(missing.hooks, []);
  assert.deepEqual(missing.registrations, []);
  assert.deepEqual(missing.manifestContracts, []);
});
