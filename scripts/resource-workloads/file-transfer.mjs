import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { lstatSync, readFileSync, realpathSync, writeFileSync } from "node:fs";
import path from "node:path";
import { createNodeIdentity, loadGatewayClient, withPairedNode } from "./paired-node.mjs";

const remotePath = "/synthetic/file-transfer/resource.bin";
const bytes = Buffer.from(Array.from({ length: 65_536 }, (_, index) => index % 251));
const sha256 = createHash("sha256").update(bytes).digest("hex");
const binding = { kind: "existing", device: "1", inode: "42" };
const mimeType = "application/octet-stream";

export const operationUnit = "one 64 KiB file fetch (policy preflight, bound transfer, saved media and two plugin audit records)";
export const limitations = [
  "Real Gateway tool, authored path policy, integrity validation and media storage; remote filesystem responses are synthetic",
  "Pairing and connection precede measurement; peer CPU/memory is outside Gateway measurements",
  "Empty-host comparison covers common phases only; enabled file-cycle CPU is absolute whole-Gateway cost",
  "Each cycle intentionally adds one media file and two audit records; no steady-state, leak or disposal claim",
  "No streaming, writes, directories, cancellation, cross-host network, remote filesystem enforcement or throughput claim",
];

export async function prepare({ env }) {
  const identity = createNodeIdentity();
  const config = JSON.parse(readFileSync(env.OPENCLAW_CONFIG_PATH, "utf8"));
  config.plugins = {
    enabled: true, allow: ["file-transfer"], slots: { memory: "none" },
    entries: { "file-transfer": { enabled: true, config: {
      policyVersion: 2, nodes: { [identity.deviceId]: {
        ask: "off", allowReadPaths: [remotePath], followSymlinks: false, maxBytes: bytes.length,
      } },
    } } },
  };
  config.tools = { ...config.tools, allow: ["file_fetch"] };
  config.gateway = { ...config.gateway, nodes: { ...config.gateway?.nodes, commands: { allow: ["file.fetch"] } } };
  writeFileSync(env.OPENCLAW_CONFIG_PATH, JSON.stringify(config));
  return { identity };
}

export function createFileReply() {
  let requests = 0;
  return (request, nodeId) => {
    assert.equal(request.nodeId, nodeId);
    assert.equal(request.command, "file.fetch");
    assert.equal(typeof request.id, "string");
    assert.ok(request.id.length > 0);
    const preflight = requests % 2 === 0;
    assert.deepEqual(JSON.parse(request.paramsJSON), {
      path: remotePath, maxBytes: bytes.length, followSymlinks: false,
      ...(preflight ? { preflightOnly: true } : { expectedCanonicalPath: remotePath, expectedBinding: binding }),
    });
    requests++;
    return { ok: true, path: remotePath, size: bytes.length,
      mimeType: preflight ? "" : mimeType, base64: preflight ? "" : bytes.toString("base64"),
      sha256: preflight ? "" : sha256, ...(preflight ? { preflightOnly: true, binding } : {}),
    };
  };
}

function contained(root, file) {
  const relative = path.relative(root, file);
  assert.ok(relative && relative !== ".." && !relative.startsWith(`..${path.sep}`) && !path.isAbsolute(relative), "Saved file escaped the owned fixture root");
}

export async function fileCycle({ rpc, root, env }, nodeId, index, saved) {
  const result = await rpc("tools.invoke", {
    name: "file_fetch", agentId: "main", args: { node: nodeId, path: remotePath, maxBytes: bytes.length },
    idempotencyKey: `file-transfer-resource-${index}`,
  });
  assert.equal(result.ok, true);
  assert.equal(result.toolName, "file_fetch");
  assert.equal(result.source, "plugin");
  const details = result.output?.details;
  assert.equal(details?.path, remotePath);
  assert.equal(details.size, bytes.length);
  assert.equal(details.mimeType, mimeType);
  assert.equal(details.sha256, sha256);
  assert.equal(typeof details.localPath, "string");
  assert.ok(path.isAbsolute(details.localPath));
  contained(path.resolve(root), details.localPath);
  assert.equal(lstatSync(details.localPath).isFile(), true);
  const actualPath = realpathSync(details.localPath);
  contained(realpathSync(root), actualPath);
  assert.equal(path.basename(path.dirname(actualPath)), "tool-file-transfer");
  assert.equal(details.mediaId, path.basename(actualPath));
  assert.deepEqual(details.media, { mediaUrls: [details.localPath] });
  assert.equal(saved.has(actualPath), false, "Each fetch must save a distinct media file");
  assert.equal(readFileSync(actualPath).equals(bytes), true, "Saved media bytes differ from the synthetic payload");
  saved.add(actualPath);
  // The plugin audit writer is best-effort. Successful RPC alone cannot attest
  // its output; require both the policy and tool records after every cycle.
  const audit = readFileSync(path.join(env.HOME, ".openclaw/audit/file-transfer.jsonl"), "utf8").trim().split("\n").map((line) => JSON.parse(line));
  assert.equal(audit.length, (index + 1) * 2);
  for (const record of audit) {
    for (const [key, value] of Object.entries({ op: "file.fetch", nodeId, requestedPath: remotePath,
      canonicalPath: remotePath, decision: "allowed", sizeBytes: bytes.length, sha256 })) assert.equal(record[key], value);
    assert.ok(Number.isFinite(record.durationMs) && record.durationMs >= 0);
    assert.ok(Number.isFinite(Date.parse(record.timestamp)));
    assert.equal(record.errorCode, undefined);
  }
}

export async function run(context, requirements, { state }) {
  return runFileTransfer(await loadGatewayClient(), context, requirements, state);
}

export async function runFileTransfer(GatewayClient, context, requirements, { identity }) {
  assert.deepEqual(requirements, { "first-use": 1, "warm-work": 20 });
  const saved = new Set();
  let index = 0;
  await withPairedNode(GatewayClient, context, {
    identity, commands: ["file.fetch"], caps: ["file"], displayName: "Synthetic file node", reply: createFileReply(),
  }, async ({ nodeId, cycle }) => {
    const work = () => cycle(async () => {
      await fileCycle(context, nodeId, index, saved);
      index++;
    }, { "file.fetch": 2 });
    await context.measure("first-use", 1, work);
    await context.measure("warm-work", 20, work);
    assert.equal(index, 21);
    assert.equal(saved.size, 21);
  });
}
