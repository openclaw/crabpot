import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { appendFileSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { test } from "node:test";
import { createFileReply, fileCycle, prepare, runFileTransfer } from "../scripts/resource-workloads/file-transfer.mjs";

const remotePath = "/synthetic/file-transfer/resource.bin";
const binding = { kind: "existing", device: "1", inode: "42" };
const params = { path: remotePath, maxBytes: 65_536, followSymlinks: false };
const request = (params, command = "file.fetch", nodeId = "node") => ({ id: "invoke", command, nodeId, paramsJSON: JSON.stringify(params) });
const preflight = { ...params, preflightOnly: true };
const final = { ...params, expectedCanonicalPath: remotePath, expectedBinding: binding };

function payload() {
  const reply = createFileReply();
  assert.deepEqual(reply(request(preflight), "node"), {
    ok: true, path: remotePath, size: 65_536, mimeType: "", base64: "", sha256: "", preflightOnly: true, binding,
  });
  return reply(request(final), "node");
}

test("peer accepts exactly alternating preflight and bound 64 KiB transfers", () => {
  const result = payload();
  const bytes = Buffer.from(result.base64, "base64");
  assert.equal(bytes.length, 65_536);
  assert.equal(createHash("sha256").update(bytes).digest("hex"), result.sha256);
  const reply = createFileReply();
  for (let index = 0; index < 21; index++) {
    assert.equal(reply(request(preflight), "node").preflightOnly, true);
    assert.deepEqual(reply(request(final), "node"), result);
  }
});

for (const fault of ["node", "command", "id", "path", "size", "symlink", "extra", "order", "canonical", "binding"]) {
  test(`peer rejects ${fault} rather than accepting a successful envelope`, () => {
    const reply = createFileReply();
    let value = request(preflight);
    if (["canonical", "binding"].includes(fault)) {
      reply(value, "node");
      value = request({ ...final, ...(fault === "canonical" ? { expectedCanonicalPath: "/elsewhere" } : { expectedBinding: { ...binding, inode: "other" } }) });
    }
    if (fault === "node") value.nodeId = "other";
    if (fault === "command") value.command = "file.write";
    if (fault === "id") value.id = "";
    if (fault === "path") value = request({ ...preflight, path: "/elsewhere" });
    if (fault === "size") value = request({ ...preflight, maxBytes: 131_072 });
    if (fault === "symlink") value = request({ ...preflight, followSymlinks: true });
    if (fault === "extra") value = request({ ...preflight, rootPath: "/" });
    if (fault === "order") value = request(final);
    assert.throws(() => reply(value, "node"));
  });
}

async function fixture(t, fault) {
  const root = mkdtempSync(path.join(os.tmpdir(), "file-transfer-resource-"));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const env = { HOME: path.join(root, "home"), OPENCLAW_CONFIG_PATH: path.join(root, "config.json") };
  writeFileSync(env.OPENCLAW_CONFIG_PATH, JSON.stringify({ gateway: { mode: "local" } }));
  const state = await prepare({ env });
  const auditFile = path.join(env.HOME, ".openclaw/audit/file-transfer.jsonl");
  const media = path.join(root, "media/tool-file-transfer");
  mkdirSync(path.dirname(auditFile), { recursive: true });
  mkdirSync(media, { recursive: true });
  const data = payload();
  const calls = [];
  let client, acknowledgments = 0, stopped = false, pendingReply;
  class Client {
    constructor(options) { this.options = options; client = this; }
    start() {
      assert.equal(this.options.deviceIdentity, state.identity);
      assert.deepEqual(this.options.commands, ["file.fetch"]);
      assert.deepEqual(this.options.caps, ["file"]);
      this.options.onHelloOk({});
    }
    async request(method, value) {
      assert.equal(method, "node.invoke.result");
      assert.equal(value.ok, true);
      acknowledgments++;
      pendingReply(JSON.parse(value.payloadJSON));
      if (fault === "ack") return { ok: true, ignored: true };
      return { ok: true };
    }
    async stopAndWait(options) {
      assert.deepEqual(options, { timeoutMs: 5_000 });
      stopped = true;
      if (fault === "cleanup") throw new Error("owned cleanup failed");
    }
  }
  const invoke = (value) => new Promise((resolve) => {
    pendingReply = resolve;
    client.options.onEvent({ event: "node.invoke.request", payload: request(value, "file.fetch", state.identity.deviceId) });
  });
  const rpc = async (method, value) => {
    const nodeId = state.identity.deviceId;
    if (method === "node.pair.list") return { pending: [] };
    if (method === "node.list") return { nodes: [{ nodeId, paired: true, connected: true, commands: ["file.fetch"] }] };
    assert.equal(method, "tools.invoke");
    const index = calls.length;
    assert.deepEqual(value, { name: "file_fetch", agentId: "main", args: { node: nodeId, path: remotePath, maxBytes: 65_536 }, idempotencyKey: `file-transfer-resource-${index}` });
    calls.push(value);
    if (client) {
      assert.equal((await invoke(preflight)).preflightOnly, true);
      assert.deepEqual(await invoke(final), data);
    }
    const file = path.join(media, `${fault === "duplicate" ? 0 : index}.bin`);
    writeFileSync(file, fault === "bytes" ? Buffer.alloc(65_536) : Buffer.from(data.base64, "base64"));
    const details = { path: remotePath, size: data.size, sha256: data.sha256, mimeType: data.mimeType,
      localPath: file, mediaId: path.basename(file), media: { mediaUrls: [file] } };
    const record = { timestamp: "2026-01-01T00:00:00.000Z", op: "file.fetch", nodeId, requestedPath: remotePath,
      canonicalPath: remotePath, decision: "allowed", sizeBytes: data.size, sha256: data.sha256, durationMs: 1 };
    for (let count = 0; count < (fault === "audit-count" ? 1 : 2); count++) appendFileSync(auditFile, `${JSON.stringify({ ...record, ...(fault === "audit-policy" ? { decision: "denied" } : {}) })}\n`);
    if (fault === "hash") details.sha256 = "0".repeat(64);
    if (fault === "path") details.path = "/elsewhere";
    if (fault === "media") details.mediaId = "other";
    if (fault === "escape") details.localPath = path.join(root, "..", "not-owned");
    return { ok: fault !== "ok", toolName: fault === "tool" ? "file_write" : "file_fetch", source: fault === "source" ? "core" : "plugin", output: { details } };
  };
  const phases = [];
  const context = { root, env, port: 1, token: "synthetic", rpc, async measure(name, count, work) {
    phases.push([name, count]);
    for (let index = 0; index < count; index++) await work(index);
    if (name === "warm-work" && fault === "late") client.options.onClose(1006, "late peer failure");
    if (name === "warm-work" && fault === "extra") await invoke(preflight);
  } };
  return { root, env, state, context, Client, calls, phases, status: () => ({ acknowledgments, stopped }) };
}

test("preparation authors one exact signing identity, command and path before Gateway startup", async (t) => {
  const f = await fixture(t);
  const config = JSON.parse(readFileSync(f.env.OPENCLAW_CONFIG_PATH));
  assert.deepEqual(config.plugins.allow, ["file-transfer"]);
  assert.equal(config.plugins.slots.memory, "none");
  assert.deepEqual(config.plugins.entries["file-transfer"].config, { policyVersion: 2, nodes: { [f.state.identity.deviceId]: {
    ask: "off", allowReadPaths: [remotePath], followSymlinks: false, maxBytes: 65_536,
  } } });
  assert.deepEqual(config.tools.allow, ["file_fetch"]);
  assert.deepEqual(config.gateway.nodes.commands, { allow: ["file.fetch"] });
  assert.equal(config.gateway.mode, "local");
  assert.match(f.state.identity.deviceId, /^[a-f0-9]{64}$/);
});

for (const fault of [undefined, "ok", "tool", "source", "bytes", "hash", "path", "media", "escape", "audit-count", "audit-policy", "duplicate"]) {
  test(`saved-file cycle validates ${fault ?? "success"} and actual plugin audits`, async (t) => {
    const f = await fixture(t, fault);
    const saved = new Set();
    const run = () => fileCycle(f.context, f.state.identity.deviceId, f.calls.length, saved);
    if (!fault) { await run(); assert.equal(saved.size, 1); }
    else {
      if (fault === "duplicate") await run();
      await assert.rejects(run());
    }
  });
}

for (const fault of [undefined, "ack", "late", "extra", "cleanup", "bytes"]) {
  test(`full file workload counts real peer callbacks and joins ${fault ?? "success"}`, async (t) => {
    const f = await fixture(t, fault);
    const work = runFileTransfer(f.Client, f.context, { "first-use": 1, "warm-work": 20 }, f.state);
    if (fault) await assert.rejects(work);
    else {
      await work;
      assert.equal(f.calls.length, 21);
      assert.equal(f.status().acknowledgments, 42);
      assert.deepEqual(f.phases, [["first-use", 1], ["warm-work", 20]]);
    }
    assert.equal(f.status().stopped, true);
  });
}
