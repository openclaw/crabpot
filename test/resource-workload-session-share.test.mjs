import assert from "node:assert/strict";
import { test } from "node:test";
import { catalogCycle, nodeReply, runPairedNodeWorkload } from "../scripts/resource-workloads/session-share.mjs";

import { approveNodeSurface } from "../scripts/resource-workloads/paired-node.mjs";

const nodeId = "synthetic-node";
const request = (command, params) => ({ id: "invocation", nodeId, command, paramsJSON: JSON.stringify(params) });
const list = request("openclaw.sessions.list.v1", { limit: 1 });
const read = request("openclaw.sessions.read.v1", { threadId: "synthetic-thread", limit: 2 });

test("mock node enforces the exact invoked command, host and bounded parameters", () => {
  assert.equal(nodeReply(list, nodeId).sessions[0].canContinue, false);
  assert.equal(nodeReply(read, nodeId).items.length, 2);
  assert.throws(() => nodeReply({ ...list, nodeId: "other-node" }, nodeId));
  assert.throws(() => nodeReply({ ...list, command: "remote.exec" }, nodeId));
  assert.throws(() => nodeReply(request(list.command, { limit: 100 }), nodeId));
  assert.throws(() => nodeReply(request(read.command, { threadId: "other-thread", limit: 2 }), nodeId));
});

function catalog(corrupt) {
  const calls = [];
  const rpc = async (method, params) => {
    calls.push([method, params]);
    if (method === "sessions.catalog.list") {
      assert.deepEqual(params, { catalogId: "openclaw", hostIds: [`node:${nodeId}`], limitPerHost: 1 });
      const page = nodeReply(list, nodeId);
      return { catalogs: [{ id: "openclaw", hosts: [{
        hostId: `node:${nodeId}`, nodeId, connected: corrupt !== "offline",
        sessions: corrupt === "missing" ? [] : page.sessions,
        ...(corrupt === "error" ? { error: { code: "NODE_INVOKE_FAILED" } } : {}),
      }] }] };
    }
    assert.equal(method, "sessions.catalog.read");
    assert.deepEqual(params, { catalogId: "openclaw", hostId: `node:${nodeId}`, threadId: "synthetic-thread", limit: 2 });
    const page = nodeReply(read, nodeId);
    return {
      ...page, hostId: corrupt === "host" ? "other-host" : `node:${nodeId}`,
      items: corrupt === "transcript" ? [] : page.items,
    };
  };
  return { rpc, calls };
}

test("session-share cycle observes real catalog and transcript outcomes", async () => {
  const fixture = catalog();
  await catalogCycle(fixture.rpc, nodeId);
  assert.deepEqual(fixture.calls.map(([method]) => method), ["sessions.catalog.list", "sessions.catalog.read"]);
});

for (const corrupt of ["offline", "missing", "error", "host", "transcript"]) {
  test(`session-share rejects successful RPC envelopes with ${corrupt} results`, async () => {
    await assert.rejects(catalogCycle(catalog(corrupt).rpc, nodeId));
  });
}

for (const lateFailure of ["success", "close", "event", "shutdown", "shutdown-cleanup", "earlier-workload",
  "workload-shutdown", "workload-shutdown-cleanup", "same-failure", "same-failure-cleanup"]) {
  test(`paired workload validates native result envelopes and joins its ${lateFailure} client`, async () => {
    const original = new Error("original workload failure");
    const late = new Error("late acknowledgment failure");
    const cleanup = new Error("shutdown failed");
    let client;
    let rejectAck;
    let closed = false;
    let responses = 0;
    class Client {
      constructor(options) { this.options = options; client = this; }
      start() { this.options.onHelloOk({}); }
      request(method, params) {
        assert.equal(method, "node.invoke.result");
        // Native session-share responses are JSON strings. An object payload
        // passes transport validation but fails the receiver's envelope unwrap.
        assert.deepEqual(params, {
          id: "invocation", nodeId: this.options.deviceIdentity.deviceId,
          ok: true, payloadJSON: this.expectedPayloadJSON,
        });
        responses++;
        return this.late
          ? new Promise((_, reject) => { rejectAck = reject; })
          : Promise.resolve({ ok: true });
      }
      async stopAndWait() {
        closed = true;
        rejectAck?.(late);
        if (lateFailure.endsWith("cleanup")) throw lateFailure === "same-failure-cleanup" ? late : cleanup;
      }
    }
    const invoke = (command, params) => {
      const payload = { id: "invocation", nodeId: client.options.deviceIdentity.deviceId, command, paramsJSON: JSON.stringify(params) };
      client.expectedPayloadJSON = JSON.stringify(nodeReply(payload, payload.nodeId));
      client.options.onEvent({ event: "node.invoke.request", payload });
      return nodeReply(payload, payload.nodeId);
    };
    const rpc = async (method) => {
      const id = client.options.deviceIdentity.deviceId;
      if (method === "node.pair.list") return { pending: [] };
      if (method === "node.list") return { nodes: [{ nodeId: id, connected: true, paired: true, commands: client.options.commands }] };
      if (method === "sessions.catalog.list") return { catalogs: [{ id: "openclaw", hosts: [{
        hostId: `node:${id}`, nodeId: id, connected: true,
        ...invoke(list.command, { limit: 1 }),
      }] }] };
      assert.equal(method, "sessions.catalog.read");
      return { hostId: `node:${id}`, ...invoke(read.command, { threadId: "synthetic-thread", limit: 2 }) };
    };
    const measure = async (name, count, cycle) => {
      for (let index = 0; index < count; index++) await cycle(index);
      if (name !== "warm-work" || lateFailure === "success") return;
      // The host samples resources after the cycle returns; callbacks can still
      // fail during that gap or while the adapter subsequently drains them.
      if (lateFailure === "close" || lateFailure === "earlier-workload") {
        client.options.onClose(1006, "late close");
      } else if (lateFailure === "event") {
        client.options.onEvent({ event: "node.invoke.request", payload: { ...list, nodeId: "wrong-node" } });
      } else {
        client.late = true;
        invoke(read.command, { threadId: "synthetic-thread", limit: 2 });
      }
      if (lateFailure === "earlier-workload" || lateFailure.startsWith("workload-")) throw original;
      if (lateFailure.startsWith("same-failure")) throw late;
    };
    const run = runPairedNodeWorkload(Client, { rpc, measure, port: 1, token: "synthetic", env: {} }, { "first-use": 1, "warm-work": 1 });
    if (lateFailure === "success") {
      await run;
      assert.equal(responses, 4);
    } else await assert.rejects(run,
      lateFailure === "earlier-workload" ? (error) => {
        assert.ok(error instanceof AggregateError);
        assert.equal(error.errors.length, 2);
        assert.equal(error.errors[0], original);
        assert.match(error.errors[1].message, /Synthetic node closed: late close/);
        assert.equal(error.cause, original);
        assert.match(error.message, /original workload failure; Synthetic node closed: late close/);
        return true;
      }
        : lateFailure.startsWith("workload-") ? (error) => {
          assert.deepEqual(error.errors, [original, late, ...(lateFailure.endsWith("cleanup") ? [cleanup] : [])]);
          assert.equal(error.cause, original);
          assert.match(error.message, /original workload failure; late acknowledgment failure/);
          if (lateFailure.endsWith("cleanup")) assert.match(error.message, /Synthetic node cleanup: shutdown failed/);
          return true;
        }
        : lateFailure === "same-failure" ? (error) => error === late
        : lateFailure === "same-failure-cleanup" ? (error) => {
          assert.deepEqual(error.errors, [late]);
          assert.equal(error.cause, late);
          return true;
        }
        : lateFailure === "shutdown-cleanup" ? (error) => {
          assert.ok(error instanceof AggregateError);
          assert.deepEqual(error.errors, [late, cleanup]);
          assert.equal(error.cause, late);
          assert.equal(error.message, "late acknowledgment failure; Synthetic node cleanup: shutdown failed");
          return true;
        }
        : lateFailure === "shutdown" ? (error) => error === late
          : lateFailure === "close" ? /Synthetic node closed: late close/ : /wrong-node/);
    assert.equal(closed, true);
  });
}

test("paired workload preserves a connection failure when its cleanup also fails", async () => {
  const original = new Error("pairing required");
  const cleanup = new Error("connection cleanup failed");
  let stops = 0;
  class Client {
    constructor(options) { this.options = options; }
    start() { this.options.onConnectError(original); }
    async stopAndWait() { stops++; throw cleanup; }
  }
  const unexpected = () => assert.fail("failed cleanup must not proceed to pairing or measurement");
  await assert.rejects(runPairedNodeWorkload(Client,
    { rpc: unexpected, measure: unexpected, port: 1, token: "synthetic", env: {} },
    { "first-use": 1, "warm-work": 1 }), (error) => {
    assert.ok(error instanceof AggregateError);
    assert.deepEqual(error.errors, [original, cleanup]);
    assert.equal(error.cause, original);
    assert.equal(error.message, "pairing required; Synthetic node cleanup: connection cleanup failed");
    return true;
  });
  assert.equal(stops, 1);
});

for (const outcome of ["success", "connect-failure", "request-failure", "late-close", "cleanup-failure", "request-and-cleanup-failure", "deadline",
  "request-and-late-close", "request-and-late-close-and-cleanup-failure", "connect-close", "connect-close-and-cleanup-failure"]) {
  test(`node surface approval uses exact scopes and joins its ${outcome} client`, async (t) => {
    t.mock.timers.enable({ apis: ["setTimeout"] });
    const operational = new Error("approval failed");
    const cleanup = new Error("approval cleanup failed");
    const env = { OPENCLAW_STATE_DIR: "/synthetic/state" };
    const calls = [];
    class Client {
      constructor(options) {
        this.options = options;
        assert.equal(options.url, "ws://127.0.0.1:1234");
        assert.equal(options.token, "synthetic-token");
        assert.equal(options.env, env);
        assert.equal(options.role, "operator");
        assert.equal(options.clientName, "gateway-client");
        assert.equal(options.mode, "backend");
        assert.deepEqual(options.scopes, ["operator.pairing", "operator.write"]);
        assert.equal(options.deviceIdentity, null);
        assert.equal(options.sharedStateMode, "read-only");
        assert.equal(options.requestTimeoutMs, 10_000);
      }
      start() {
        if (outcome === "deadline") return;
        if (outcome === "connect-failure") this.options.onConnectError(operational);
        else if (outcome.startsWith("connect-close")) this.options.onClose(1006, "connect close");
        else this.options.onHelloOk({});
      }
      async request(method, params) {
        calls.push([method, params]);
        if (outcome.includes("late-close")) this.options.onClose(1006, "late close");
        if (outcome.startsWith("request-")) throw operational;
        return { requestId: "pending", node: { nodeId } };
      }
      async stopAndWait(options) {
        calls.push(["stop", options]);
        this.options.onClose(1000, "expected close");
        if (outcome.includes("cleanup-failure")) throw cleanup;
      }
    }
    const run = approveNodeSurface(Client, { port: 1234, token: "synthetic-token", env }, { requestId: "pending", nodeId });
    if (outcome === "success") await run;
    else {
      const rejected = assert.rejects(run, (error) => {
        if (outcome.startsWith("request-and-late-close")) {
          assert.equal(error.errors.length, outcome.includes("cleanup-failure") ? 3 : 2);
          assert.equal(error.errors[0], operational);
          assert.match(error.errors[1].message, /Synthetic operator closed: late close/);
          if (outcome.includes("cleanup-failure")) assert.equal(error.errors[2], cleanup);
          assert.equal(error.cause, operational);
          assert.match(error.message, /approval failed; Synthetic operator closed: late close/);
        } else if (outcome === "connect-close-and-cleanup-failure") {
          assert.equal(error.errors.length, 2);
          assert.match(error.errors[0].message, /Synthetic operator closed: connect close/);
          assert.equal(error.errors[1], cleanup);
          assert.equal(error.cause, error.errors[0]);
        } else if (outcome === "connect-close") {
          assert.equal(error instanceof AggregateError, false);
          assert.match(error.message, /Synthetic operator closed: connect close/);
        } else if (outcome === "request-and-cleanup-failure") {
          assert.deepEqual(error.errors, [operational, cleanup]);
          assert.equal(error.cause, operational);
        } else if (outcome === "cleanup-failure") assert.deepEqual(error.errors, [cleanup]);
        else if (outcome === "late-close") assert.match(error.message, /Synthetic operator closed: late close/);
        else if (outcome === "deadline") assert.match(error.message, /Synthetic operator connect deadline/);
        else assert.equal(error, operational);
        return true;
      });
      if (outcome === "deadline") t.mock.timers.tick(15_000);
      await rejected;
    }
    assert.deepEqual(calls, [
      ...(["connect-failure", "deadline"].includes(outcome) || outcome.startsWith("connect-close") ? [] : [["node.pair.approve", { requestId: "pending" }]]),
      ["stop", { timeoutMs: 5_000 }],
    ]);
    // The canceled connect deadline cannot trigger a second request or cleanup.
    t.mock.timers.tick(15_000);
    assert.equal(calls.filter(([method]) => method === "stop").length, 1);
  });
}
