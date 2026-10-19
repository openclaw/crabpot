import assert from "node:assert/strict";
import { once } from "node:events";
import { createServer } from "node:http";
import { test } from "node:test";
import { receiverCycle } from "../scripts/resource-workloads/beam.mjs";

async function receiver(t, corrupt) {
  let snapshot;
  const calls = [];
  const server = createServer(async (request, response) => {
    assert.equal(request.method, "POST");
    assert.equal(request.url, "/api/v1/beam/sessions");
    assert.equal(request.headers.authorization, "Bearer synthetic-token");
    let body = "";
    for await (const chunk of request) body += chunk;
    snapshot = JSON.parse(body);
    calls.push("upload");
    response.setHeader("Content-Type", "application/json");
    response.end(JSON.stringify({ ok: true, beamId: corrupt === "receipt" ? "wrong-id" : snapshot.beamId }));
  });
  server.listen(0, "127.0.0.1");
  await once(server, "listening");
  t.after(() => new Promise((resolve, reject) => {
    server.closeAllConnections();
    server.close((error) => error ? reject(error) : resolve());
  }));
  const rpc = async (method, params) => {
    calls.push(method);
    assert.equal(params.catalogId, "beam");
    if (method === "sessions.catalog.list") {
      const sessions = snapshot ? [{ threadId: snapshot.beamId, name: snapshot.title, status: "completed" }] : [];
      return { catalogs: [{ id: "beam", hosts: [{
        hostId: "gateway", connected: true, sessions: corrupt === "missing-write" ? [] : sessions,
        ...(corrupt === "catalog-error" ? { error: "storage failed" } : {}),
      }] }] };
    }
    assert.equal(params.hostId, "gateway");
    assert.equal(params.threadId, snapshot.beamId);
    if (method === "sessions.catalog.read") {
      return {
        hostId: "gateway", threadId: snapshot.beamId,
        items: snapshot.items.map((item, index) => ({
          ...item, id: `${snapshot.beamId}:${index}`, timestamp: snapshot.updatedAt,
          ...(corrupt === "transcript" ? { text: "stale text" } : {}),
        })).reverse(),
      };
    }
    assert.equal(method, "sessions.catalog.archive");
    assert.equal(params.confirmNoOtherRunner, true);
    if (corrupt !== "retained") snapshot = undefined;
    return { ok: corrupt !== "archive" };
  };
  return { rpc, port: server.address().port, token: "synthetic-token", calls };
}

test("Beam cycle authenticates its upload and asserts persisted content and removal", async (t) => {
  const context = await receiver(t);
  await receiverCycle(context, 4);
  assert.deepEqual(context.calls, [
    "upload", "sessions.catalog.list", "sessions.catalog.read", "sessions.catalog.archive", "sessions.catalog.list",
  ]);
});

for (const corrupt of ["receipt", "missing-write", "catalog-error", "transcript", "archive", "retained"]) {
  test(`Beam rejects successful transport with incorrect ${corrupt}`, async (t) => {
    await assert.rejects(receiverCycle(await receiver(t, corrupt), 0));
  });
}
