import assert from "node:assert/strict";
import { readFileSync, writeFileSync } from "node:fs";
import { loadGatewayClient, withPairedNode } from "./paired-node.mjs";

const commands = ["openclaw.sessions.list.v1", "openclaw.sessions.read.v1"];
const session = {
  threadId: "synthetic-thread", name: "Synthetic shared session", status: "idle",
  archived: false, canContinue: false, canArchive: false, canOpenTerminal: false,
};
const items = [
  { id: "reply", type: "agentMessage", text: "Synthetic reply", timestamp: "2026-01-01T00:00:01.000Z" },
  { id: "request", type: "userMessage", text: "Synthetic request", timestamp: "2026-01-01T00:00:00.000Z" },
];

export const operationUnit = "one paired-node catalog list/read cycle (two RPCs and two node invocations)";
export const limitations = [
  "Receiver path only; remote session storage, source privacy filtering and redaction are mocked",
  "Pairing and node connection finish before measurement; no cross-host network, revocation or reconnect load",
  "One small transcript; no pagination, GitHub identity linking, concurrency or in-process disposal measurement",
  "Mock node CPU/memory belongs to the campaign process and is excluded from Gateway measurements",
];

export async function prepare({ env }) {
  const config = JSON.parse(readFileSync(env.OPENCLAW_CONFIG_PATH, "utf8"));
  config.plugins = {
    enabled: true, allow: ["session-share"], slots: { memory: "none" },
    entries: { "session-share": { enabled: true, config: {} } },
  };
  writeFileSync(env.OPENCLAW_CONFIG_PATH, JSON.stringify(config));
}

export function nodeReply(request, nodeId) {
  assert.equal(request.nodeId, nodeId);
  assert.equal(typeof request.id, "string");
  assert.ok(request.id.length > 0);
  const params = JSON.parse(request.paramsJSON);
  if (request.command === commands[0]) {
    assert.deepEqual(params, { limit: 1 });
    return { sessions: [session] };
  }
  assert.equal(request.command, commands[1]);
  assert.deepEqual(params, { threadId: session.threadId, limit: 2 });
  return { threadId: session.threadId, items };
}

export async function catalogCycle(rpc, nodeId) {
  const hostId = `node:${nodeId}`;
  const { catalogs } = await rpc("sessions.catalog.list", { catalogId: "openclaw", hostIds: [hostId], limitPerHost: 1 });
  assert.equal(catalogs?.length, 1);
  assert.equal(catalogs[0].id, "openclaw");
  assert.equal(catalogs[0].error, undefined);
  assert.equal(catalogs[0].hosts?.length, 1);
  const host = catalogs[0].hosts[0];
  assert.equal(host.hostId, hostId);
  assert.equal(host.nodeId, nodeId);
  assert.equal(host.connected, true);
  assert.equal(host.error, undefined);
  assert.equal(host.nextCursor, undefined);
  assert.equal(host.sessions?.length, 1);
  for (const [key, value] of Object.entries(session)) assert.deepEqual(host.sessions[0][key], value);
  const transcript = await rpc("sessions.catalog.read", { catalogId: "openclaw", hostId, threadId: session.threadId, limit: 2 });
  assert.equal(transcript.hostId, hostId);
  assert.equal(transcript.threadId, session.threadId);
  assert.equal(transcript.nextCursor, undefined);
  assert.deepEqual(transcript.items, items);
}

export async function run(context, requirements) {
  return runPairedNodeWorkload(await loadGatewayClient(), context, requirements);
}

export async function runPairedNodeWorkload(GatewayClient, context, requirements) {
  assert.deepEqual(Object.keys(requirements).sort(), ["first-use", "warm-work"]);
  return withPairedNode(GatewayClient, context, {
    commands, caps: ["openclaw-sessions"], displayName: "Synthetic session node", reply: nodeReply,
  }, async ({ nodeId, cycle }) => {
    const work = () => cycle(() => catalogCycle(context.rpc, nodeId), Object.fromEntries(commands.map((command) => [command, 1])));
    await context.measure("first-use", requirements["first-use"], work);
    await context.measure("warm-work", requirements["warm-work"], work);
  });
}
