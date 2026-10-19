import assert from "node:assert/strict";
import { readFileSync, writeFileSync } from "node:fs";

export const operationUnit = "one complete create/update/list/delete/list card cycle (five RPCs)";
export const limitations = [
  "CRUD only: no agent dispatch, leases, attachments, UI or notifications",
  "Default periodic services stay enabled; short windows do not establish their steady cost",
  "Process CPU/RSS includes the SQLite worker; main-isolate heap and thread CPU excludes it",
  "Final empty card list is asserted; in-process plugin disposal and retained heap are unmeasured",
];

export async function prepare({ env }) {
  const config = JSON.parse(readFileSync(env.OPENCLAW_CONFIG_PATH, "utf8"));
  config.plugins = {
    enabled: true, allow: ["workboard"], slots: { memory: "none" },
    entries: { workboard: { enabled: true, config: {} } },
  };
  writeFileSync(env.OPENCLAW_CONFIG_PATH, JSON.stringify(config));
}

export async function cardCycle(rpc, index) {
  // Todo cards without agent/run/execution fields cannot start real agent work.
  const input = {
    title: `Synthetic resource card ${index}`, status: "todo", notes: "fixture-v1",
    priority: "normal", labels: ["resource-fixture"],
  };
  const { card } = await rpc("workboard.cards.create", input);
  assert.equal(typeof card?.id, "string");
  assert.ok(card.id.length > 0 && Number.isFinite(card.updatedAt));
  for (const [key, value] of Object.entries(input)) assert.deepEqual(card[key], value);
  const { card: updated } = await rpc("workboard.cards.update", {
    id: card.id, expectedUpdatedAt: card.updatedAt,
    patch: { notes: "fixture-v2", priority: "high" },
  });
  assert.equal(updated.id, card.id);
  assert.equal(updated.notes, "fixture-v2");
  assert.equal(updated.priority, "high");
  assert.equal(updated.status, "todo");
  assert.ok(updated.updatedAt > card.updatedAt);
  assert.deepEqual((await rpc("workboard.cards.list", {})).cards, [updated]);
  assert.equal((await rpc("workboard.cards.delete", {
    id: updated.id, expectedUpdatedAt: updated.updatedAt,
  })).deleted, true);
  assert.deepEqual((await rpc("workboard.cards.list", {})).cards, []);
}

export async function run({ rpc, measure }, requirements) {
  assert.deepEqual(Object.keys(requirements).sort(), ["first-use", "warm-work"]);
  // Start from an observed empty store, not an assumption about a temporary path.
  assert.deepEqual((await rpc("workboard.cards.list", {})).cards, []);
  await measure("first-use", requirements["first-use"], (index) => cardCycle(rpc, index));
  await measure("warm-work", requirements["warm-work"], (index) => cardCycle(rpc, index + requirements["first-use"]));
}
