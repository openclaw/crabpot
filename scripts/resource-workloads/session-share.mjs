import assert from "node:assert/strict";
import { createHash, createPublicKey, generateKeyPairSync } from "node:crypto";
import { readFileSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import path from "node:path";
import { pathToFileURL } from "node:url";

const commands = ["openclaw.sessions.list.v1", "openclaw.sessions.read.v1"];
const session = {
  threadId: "synthetic-thread", name: "Synthetic shared session", status: "idle",
  archived: false, canContinue: false, canArchive: false, canOpenTerminal: false,
};
const items = [
  { id: "reply", type: "agentMessage", text: "Synthetic reply", timestamp: "2026-01-01T00:00:01.000Z" },
  { id: "request", type: "userMessage", text: "Synthetic request", timestamp: "2026-01-01T00:00:00.000Z" },
];

function clientFailure(failure, fault, cleanup) {
  // Join first: client faults may arrive during cleanup. Preserve each distinct
  // error, including a fault already thrown through the operational path.
  const errors = [...new Set([failure, fault, cleanup].filter(Boolean))];
  if (!errors.length) return;
  if (errors.length === 1 && !cleanup) return errors[0];
  return new AggregateError(errors,
    errors.map((error) => error === cleanup ? `Synthetic node cleanup: ${error.message}` : error.message).join("; "),
    { cause: errors[0] });
}

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
  // Resolve the public SDK from the selected built host, never a Crabpot install.
  const require = createRequire(path.resolve("package.json"));
  const { GatewayClient } = await import(pathToFileURL(require.resolve("openclaw/plugin-sdk/gateway-runtime")).href);
  return runPairedNodeWorkload(GatewayClient, context, requirements);
}

export async function approveNodeSurface(GatewayClient, { port, token, env }, { requestId, nodeId }) {
  let client, timer, failure, fault, cleanup;
  let closing = false;
  try {
    await new Promise((resolve, reject) => {
      // Local shared-token backend clients preserve explicitly requested scopes.
      // Surface approval needs write as well as pairing; it never needs admin.
      client = new GatewayClient({
        url: `ws://127.0.0.1:${port}`, token, env, role: "operator",
        clientName: "gateway-client", mode: "backend",
        scopes: ["operator.pairing", "operator.write"],
        deviceIdentity: null, sharedStateMode: "read-only", requestTimeoutMs: 10_000,
        onHelloOk: resolve, onConnectError: reject,
        onClose: (_code, reason) => {
          if (!closing) { fault ??= new Error(`Synthetic operator closed: ${reason}`); reject(fault); }
        },
      });
      timer = setTimeout(() => reject(new Error("Synthetic operator connect deadline")), 15_000);
      client.start();
    });
    clearTimeout(timer);
    const approved = await client.request("node.pair.approve", { requestId });
    assert.equal(approved.requestId, requestId);
    assert.equal(approved.node?.nodeId, nodeId);
  } catch (error) { failure = error; }
  finally { clearTimeout(timer); }
  closing = true;
  try { await client?.stopAndWait({ timeoutMs: 5_000 }); }
  catch (error) { cleanup = error; }
  failure = clientFailure(failure, fault, cleanup);
  if (failure) throw failure;
}

export async function runPairedNodeWorkload(GatewayClient, { rpc, measure, port, token, env }, requirements) {
  assert.deepEqual(Object.keys(requirements).sort(), ["first-use", "warm-work"]);
  const keys = generateKeyPairSync("ed25519", {
    publicKeyEncoding: { type: "spki", format: "pem" },
    privateKeyEncoding: { type: "pkcs8", format: "pem" },
  });
  const rawKey = createPublicKey(keys.publicKey).export({ format: "jwk" }).x;
  const nodeId = createHash("sha256").update(Buffer.from(rawKey, "base64url")).digest("hex");
  const identity = { deviceId: nodeId, publicKeyPem: keys.publicKey, privateKeyPem: keys.privateKey };
  const counts = Object.fromEntries(commands.map((command) => [command, 0]));
  const inflight = new Set();
  let node;
  let fault;
  let closing = false;

  const open = async () => {
    let timer;
    const ready = new Promise((resolve, reject) => {
      node = new GatewayClient({
        url: `ws://127.0.0.1:${port}`, token, env, role: "node", scopes: [],
        clientName: "node-host", clientDisplayName: "Synthetic session node", clientVersion: "1.0.0",
        platform: "linux", mode: "node", caps: ["openclaw-sessions"], commands,
        deviceIdentity: identity, requestTimeoutMs: 10_000,
        // Only the synthetic client's credential cache is replaced; real Gateway
        // device signatures, pairing and command-surface authorization stay intact.
        hostDeps: { loadDeviceAuthToken: () => null, storeDeviceAuthToken: () => {}, clearDeviceAuthToken: () => {} },
        onHelloOk: resolve, onConnectError: reject,
        onClose: (_code, reason) => {
          if (!closing) { fault ??= new Error(`Synthetic node closed: ${reason}`); reject(fault); }
        },
        onEvent: (event) => {
          if (event.event !== "node.invoke.request") return;
          const work = (async () => {
            const request = event.payload;
            const payload = nodeReply(request, nodeId);
            counts[request.command]++;
            const ack = await node.request("node.invoke.result", { id: request.id, nodeId, ok: true, payloadJSON: JSON.stringify(payload) });
            assert.deepEqual(ack, { ok: true });
          })();
          inflight.add(work);
          void work.catch((error) => { fault ??= error; }).finally(() => inflight.delete(work));
        },
      });
      timer = setTimeout(() => reject(new Error("Synthetic node connect deadline")), 15_000);
      node.start();
    });
    try { await ready; } finally { clearTimeout(timer); }
  };
  const stop = async () => {
    // Failed connection cleanup is already joined before the outer failure path.
    // Do not stop that client again and replace or duplicate its first error.
    if (closing) return;
    closing = true;
    try { await node?.stopAndWait({ timeoutMs: 5_000 }); }
    finally { await Promise.allSettled([...inflight]); }
  };

  let failure, cleanup;
  try {
    try { await open(); }
    catch (error) {
      try { await stop(); }
      catch (cleanupError) { cleanup = cleanupError; throw error; }
      if (!String(error.message).includes("pairing required")) throw error;
      const pending = (await rpc("device.pair.list", {})).pending.filter((entry) => entry.deviceId === nodeId);
      assert.equal(pending.length, 1);
      await rpc("device.pair.approve", { requestId: pending[0].requestId });
      closing = false; fault = undefined;
      await open();
    }
    const pending = (await rpc("node.pair.list", {})).pending.filter((entry) => entry.nodeId === nodeId);
    assert.ok(pending.length <= 1);
    if (pending.length) {
      assert.deepEqual([...pending[0].commands].sort(), [...commands].sort());
      await approveNodeSurface(GatewayClient, { port, token, env }, { requestId: pending[0].requestId, nodeId });
    }
    const connected = (await rpc("node.list", {})).nodes.find((entry) => entry.nodeId === nodeId);
    assert.equal(connected?.connected, true);
    assert.equal(connected.paired, true);
    assert.deepEqual([...connected.commands].sort(), [...commands].sort());
    const cycle = async () => {
      const before = { ...counts };
      await catalogCycle(rpc, nodeId);
      await Promise.all([...inflight]);
      if (fault) throw fault;
      for (const command of commands) assert.equal(counts[command] - before[command], 1);
    };
    await measure("first-use", requirements["first-use"], cycle);
    await measure("warm-work", requirements["warm-work"], cycle);
  } catch (error) { failure = error; }
  try { await stop(); }
  catch (error) { cleanup = error; }
  // Events can fail after the last cycle check, including while shutdown joins
  // pending acknowledgments. Their failure still invalidates the workload.
  failure = clientFailure(failure, fault, cleanup);
  if (failure) throw failure;
}
