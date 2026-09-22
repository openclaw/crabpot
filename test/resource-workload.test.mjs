import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { validateManifest } from "../scripts/manifest-lib.mjs";
import { parseArgs, runResourceWorkload } from "../scripts/run-resource-workload.mjs";
import { cardCycle } from "../scripts/resource-workloads/workboard.mjs";

function fakeStore(corrupt) {
  let card;
  let listCalls = 0;
  const calls = [];
  const rpc = async (method, params) => {
    calls.push([method, params]);
    if (method.endsWith(".create")) {
      card = { ...params, id: "fixture-card", updatedAt: 10 };
      return { card };
    }
    if (method.endsWith(".update")) {
      assert.equal(params.id, card.id);
      assert.equal(params.expectedUpdatedAt, card.updatedAt);
      card = { ...card, ...params.patch, updatedAt: corrupt === "timestamp" ? 10 : 11 };
      return { card };
    }
    if (method.endsWith(".delete")) {
      assert.equal(params.expectedUpdatedAt, card.updatedAt);
      if (corrupt !== "retained") card = undefined;
      return { deleted: corrupt !== "delete" };
    }
    assert.equal(method, "workboard.cards.list");
    listCalls++;
    return { cards: corrupt === "list" && listCalls === 1 ? [] : card ? [card] : [] };
  };
  return { rpc, calls };
}

test("Workboard cycle asserts five real-protocol outcomes and never dispatches work", async () => {
  const store = fakeStore();
  await cardCycle(store.rpc, 3);
  assert.deepEqual(store.calls.map(([method]) => method), [
    "workboard.cards.create", "workboard.cards.update", "workboard.cards.list", "workboard.cards.delete", "workboard.cards.list",
  ]);
  assert.deepEqual(Object.keys(store.calls[0][1]).sort(), ["labels", "notes", "priority", "status", "title"]);
  assert.equal(store.calls[0][1].status, "todo");
});

for (const corrupt of ["timestamp", "list", "delete", "retained"]) {
  test(`Workboard cycle rejects transport success with incorrect ${corrupt}`, async () => {
    await assert.rejects(cardCycle(fakeStore(corrupt).rpc, 0));
  });
}

function inventory() {
  const payload = {
    plugins: [{ declaredSurfaces: {}, distribution: "core", id: "workboard", manifestPath: "extensions/workboard/openclaw.plugin.json", package: null, path: "extensions/workboard" }],
    schemaVersion: 1, scope: "source-manifests", source: { commit: "a".repeat(40), kind: "git-tree", tree: "b".repeat(40) },
  };
  return { ...payload, sha256: createHash("sha256").update(JSON.stringify(payload)).digest("hex") };
}

test("planning never loads a host or earns workload coverage", async () => {
  const report = await runResourceWorkload({
    definition: { id: "workboard-card-crud-v1", pluginId: "workboard", adapter: "workboard", requiredOperations: { "first-use": 1, "warm-work": 20 } },
    inventory: inventory(), execute: false, hostRoot: "/missing-host",
  });
  assert.equal(report.status, "blocked");
  assert.equal(report.reason, "execution-not-requested");
  assert.deepEqual(report.cases, []);
  assert.match(report.provenance.adapterSha256, /^[a-f0-9]{64}$/);
});

test("execution keeps unavailable host prerequisites blocked", async () => {
  const report = await runResourceWorkload({
    definition: { id: "workboard-card-crud-v1", pluginId: "workboard", adapter: "workboard", requiredOperations: { "first-use": 1, "warm-work": 20 } },
    inventory: inventory(), execute: true, hostRoot: "/missing-host",
  });
  assert.equal(report.status, "blocked");
  assert.equal(report.reason, "host-prerequisite");
  assert.deepEqual(report.cases, []);
});

test("resource workload selection is explicit and cannot traverse adapter paths", () => {
  const args = ["--scenario", "workboard-card-crud-v1", "--plugin-inventory", "inventory.json", "--out", "out.json"];
  assert.equal(parseArgs(args).execute, false);
  assert.equal(parseArgs([...args, "--execute"]).execute, true);
  assert.throws(() => parseArgs([...args, "--unknown"]), /Unknown argument/);
  assert.throws(() => parseArgs(["--scenario"]), /needs a value/);
  const manifest = JSON.parse(readFileSync(new URL("../crabpot.config.json", import.meta.url), "utf8"));
  const fixtureCount = manifest.fixtures.length;
  validateManifest(manifest);
  assert.equal(manifest.fixtures.length, fixtureCount);
  manifest.resourceWorkloads[0].adapter = "../workboard";
  assert.throws(() => validateManifest(manifest), /lowercase identifier/);
});
