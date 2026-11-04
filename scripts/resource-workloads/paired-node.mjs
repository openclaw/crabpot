import assert from "node:assert/strict";
import { createHash, createPublicKey, generateKeyPairSync } from "node:crypto";
import { createRequire } from "node:module";
import path from "node:path";
import { pathToFileURL } from "node:url";

/** Resolve only the public SDK of the selected installed host. */
export async function loadGatewayClient() {
  const require = createRequire(path.resolve("package.json"));
  return (await import(pathToFileURL(require.resolve("openclaw/plugin-sdk/gateway-runtime")).href)).GatewayClient;
}

export function createNodeIdentity() {
  const keys = generateKeyPairSync("ed25519", {
    publicKeyEncoding: { type: "spki", format: "pem" },
    privateKeyEncoding: { type: "pkcs8", format: "pem" },
  });
  const rawKey = createPublicKey(keys.publicKey).export({ format: "jwk" }).x;
  const nodeId = createHash("sha256").update(Buffer.from(rawKey, "base64url")).digest("hex");
  return { deviceId: nodeId, publicKeyPem: keys.publicKey, privateKeyPem: keys.privateKey };
}

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

/** Own pairing, accepted-result drains and shutdown for a synthetic node. */
export async function withPairedNode(GatewayClient, { rpc, port, token, env }, {
  identity = createNodeIdentity(), commands, caps, displayName, reply,
}, run) {
  const nodeId = identity.deviceId;
  const counts = Object.fromEntries(commands.map((command) => [command, 0]));
  const admitted = { ...counts };
  const inflight = new Set();
  let node;
  let fault;
  let closing = false;

  const open = async () => {
    let timer;
    const ready = new Promise((resolve, reject) => {
      node = new GatewayClient({
        url: `ws://127.0.0.1:${port}`, token, env, role: "node", scopes: [],
        clientName: "node-host", clientDisplayName: displayName, clientVersion: "1.0.0",
        platform: "linux", mode: "node", caps, commands,
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
            assert.equal(request.nodeId, nodeId);
            assert.ok(commands.includes(request.command), "Unexpected synthetic node command");
            const payload = reply(request, nodeId);
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
    await run({ nodeId, async cycle(work, expected) {
      assert.deepEqual(Object.keys(expected).sort(), [...commands].sort());
      const before = { ...counts };
      await work();
      await Promise.all([...inflight]);
      if (fault) throw fault;
      for (const command of commands) {
        assert.equal(counts[command] - before[command], expected[command]);
        admitted[command] += expected[command];
      }
    } });
  } catch (error) { failure = error; }
  try { await stop(); }
  catch (error) { cleanup = error; }
  // Events can fail after the last cycle check, including while shutdown joins
  // pending acknowledgments. Their failure still invalidates the workload.
  failure = clientFailure(failure, fault, cleanup);
  if (failure) throw failure;
  // A valid but unsolicited late request must not escape per-cycle accounting.
  assert.deepEqual(counts, admitted, "Node requests occurred outside measured cycles");
}
