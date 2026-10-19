import assert from "node:assert/strict";
import { readFileSync, writeFileSync } from "node:fs";

export const operationUnit = "one upload/list/read/archive/list receiver cycle (one HTTP request and four RPCs)";
export const limitations = [
  "Receiver only: no mirroring, continuation, expiry, contention or remote host",
  "Small completed snapshots; no transcript pagination or maximum-size upload coverage",
  "Stored transcript and final empty catalog are asserted; in-process disposal retention is unmeasured",
];

export async function prepare({ env }) {
  const config = JSON.parse(readFileSync(env.OPENCLAW_CONFIG_PATH, "utf8"));
  config.plugins = {
    enabled: true, allow: ["beam"], slots: { memory: "none" },
    entries: { beam: { enabled: true, config: {} } },
  };
  writeFileSync(env.OPENCLAW_CONFIG_PATH, JSON.stringify(config));
}

async function list(rpc) {
  const { catalogs } = await rpc("sessions.catalog.list", { catalogId: "beam", limitPerHost: 2 });
  assert.equal(catalogs?.length, 1);
  assert.equal(catalogs[0].id, "beam");
  assert.equal(catalogs[0].error, undefined);
  assert.equal(catalogs[0].hosts?.length, 1);
  const host = catalogs[0].hosts[0];
  assert.equal(host.hostId, "gateway");
  assert.equal(host.connected, true);
  assert.equal(host.error, undefined);
  assert.equal(host.nextCursor, undefined);
  assert.ok(Array.isArray(host.sessions));
  return host.sessions;
}

export async function receiverCycle({ rpc, port, token }, index) {
  const beamId = (index + 1).toString(16).padStart(32, "0");
  const upload = {
    version: 1, beamId, source: "crabpot", title: `Synthetic Beam snapshot ${index}`,
    updatedAt: "2026-01-01T00:00:00.000Z", completed: true,
    items: [
      { type: "userMessage", text: `Synthetic request ${index}` },
      { type: "agentMessage", text: `Synthetic reply ${index}` },
    ],
  };
  const response = await fetch(`http://127.0.0.1:${port}/api/v1/beam/sessions`, {
    method: "POST", redirect: "error", signal: AbortSignal.timeout(15_000),
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify(upload),
  });
  assert.equal(response.status, 200);
  const receipt = await response.json();
  assert.equal(receipt.ok, true);
  assert.equal(receipt.beamId, beamId);
  // Upload acknowledgments also cover ignored stale writes: verify stored content.
  const sessions = await list(rpc);
  assert.equal(sessions.length, 1);
  assert.equal(sessions[0].threadId, beamId);
  assert.equal(sessions[0].name, upload.title);
  assert.equal(sessions[0].status, "completed");
  const locator = { catalogId: "beam", hostId: "gateway", threadId: beamId };
  const transcript = await rpc("sessions.catalog.read", { ...locator, limit: 2 });
  assert.equal(transcript.hostId, locator.hostId);
  assert.equal(transcript.threadId, beamId);
  assert.equal(transcript.nextCursor, undefined);
  assert.deepEqual(transcript.items.map(({ id, type, text, timestamp }) => ({ id, type, text, timestamp })),
    upload.items.map((item, itemIndex) => ({ ...item, id: `${beamId}:${itemIndex}`, timestamp: upload.updatedAt })).reverse());
  assert.equal((await rpc("sessions.catalog.archive", { ...locator, confirmNoOtherRunner: true })).ok, true);
  assert.deepEqual(await list(rpc), []);
}

export async function run(context, requirements) {
  assert.deepEqual(Object.keys(requirements).sort(), ["first-use", "warm-work"]);
  // Stay below the receiver's per-minute limit without changing production settings.
  assert.ok(requirements["first-use"] + requirements["warm-work"] <= 60);
  assert.deepEqual(await list(context.rpc), []);
  await context.measure("first-use", requirements["first-use"], (index) => receiverCycle(context, index));
  await context.measure("warm-work", requirements["warm-work"], (index) => receiverCycle(context, index + requirements["first-use"]));
}
