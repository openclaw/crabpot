import assert from "node:assert/strict";
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { test } from "node:test";
import { prepare, run, decisionCycle } from "../scripts/resource-workloads/typesafe.mjs";
import { resourceWorkloadPlan } from "../scripts/resource-workload-contract.mjs";

async function fixture(t) {
  const root = mkdtempSync(path.join(os.tmpdir(), "typesafe-workload-"));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const env = { OPENCLAW_CONFIG_PATH: path.join(root, "config.json") };
  writeFileSync(env.OPENCLAW_CONFIG_PATH, JSON.stringify({ gateway: { bind: "loopback" } }));
  let cleanup, closed = false;
  const state = await prepare({ env }, { onCleanup: (fn) => { cleanup = fn; } });
  const close = async () => { closed = true; await cleanup(); };
  t.after(async () => { if (!closed) await close(); });
  const config = JSON.parse(readFileSync(env.OPENCLAW_CONFIG_PATH, "utf8"));
  const baseUrl = config.plugins.entries.typesafe.config.baseUrl;
  return { state, close, config, baseUrl };
}

// Only the unit contract uses this RPC double. Integration receipts require
// the shared runner to dispatch the actual core tool through a real Gateway.
function rpcPeer(baseUrl, corrupt) {
  return async (method, params) => {
    if (method === "plugins.inspect") {
      assert.deepEqual(params, { pluginId: "typesafe" });
      return { ok: true, plugin: { origin: corrupt === "installed" ? "global" : "bundled", enabled: true } };
    }
    assert.equal(method, "tools.invoke");
    assert.equal(params.name, "decision_evaluate");
    assert.equal(params.agentId, "main");
    assert.equal(params.idempotencyKey, `typesafe-resource-${params.args.state.ticket}`);
    assert.deepEqual(Object.keys(params.args).sort(), ["questions", "state"]);
    const response = await fetch(`${baseUrl}/v1/systemone`, {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        state: params.args.state, model: "kev-latest",
        questions: {
          urgent: { type: "noul", criteria: { true: "Urgent", false: "Routine" }, instructions: null },
          route: { type: "choice", criteria: { support: "Help", sales: "Purchase" }, instructions: null },
          impact: { type: "score", criteria: ["Low", "High"], instructions: null },
        },
      }),
    });
    assert.equal(response.status, 200);
    const value = await response.json();
    const details = {
      status: "ok",
      result: {
        model: value.model,
        answers: {
          urgent: { type: "boolean", probabilityTrue: value.answers.urgent.noul },
          route: value.answers.route,
          impact: { type: "score", score: value.answers.impact.score, confidence: value.answers.impact.confidence,
            probabilities: [value.answers.impact.probabilities["0"], value.answers.impact.probabilities["1"]] },
        },
        usage: { inputTokens: value.usage.input_tokens, outputTokens: value.usage.output_tokens },
      },
      provenance: { providerId: "typesafe", rubricVersion: "decision-v1-671a924ce923065896d34b62", runtimeGeneration: "fixture-generation" },
    };
    if (corrupt === "answer") details.result.answers.urgent.probabilityTrue = 0;
    if (corrupt === "status") details.status = "unavailable";
    if (corrupt === "provider") details.provenance.providerId = "other";
    if (corrupt === "model") details.result.model = "other";
    if (corrupt === "generation") details.provenance.runtimeGeneration = "";
    if (corrupt === "rubric") details.provenance.rubricVersion = "wrong";
    return {
      ok: corrupt !== "rpc", toolName: "decision_evaluate", source: corrupt === "source" ? "plugin" : "core",
      output: { details, content: [{ type: "text", text: corrupt === "content" ? "stale" : JSON.stringify(details) }] },
    };
  };
}

test("TypeSafe config and 21 completed decision/HTTP operations retain the empty-host control", async (t) => {
  const peer = await fixture(t);
  assert.deepEqual(peer.config.gateway, { bind: "loopback" });
  assert.deepEqual(peer.config.agents, { defaults: { decisionModel: "typesafe/kev-latest" } });
  assert.deepEqual(peer.config.tools, { allow: ["decision_evaluate"] });
  assert.deepEqual(peer.config.plugins.allow, ["typesafe"]);
  assert.deepEqual(Object.keys(peer.config.plugins.entries.typesafe.config), ["baseUrl"]);
  const manifest = JSON.parse(readFileSync(new URL("../crabpot.config.json", import.meta.url), "utf8"));
  const definition = manifest.resourceWorkloads.find(({ pluginId }) => pluginId === "typesafe");
  assert.deepEqual(resourceWorkloadPlan(definition).map(({ runWorkload, expectedBefore, expectedAfter }) =>
    ({ runWorkload, expectedBefore, expectedAfter })), [
    { runWorkload: false, expectedBefore: [], expectedAfter: [] },
    { runWorkload: true, expectedBefore: ["typesafe"], expectedAfter: ["typesafe"] },
  ]);
  const phases = [];
  await run({ rpc: rpcPeer(peer.baseUrl), measure: async (name, count, operation) => {
    phases.push([name, count]);
    for (let index = 0; index < count; index++) await operation(index);
  } }, definition.requiredOperations, { state: peer.state });
  assert.deepEqual(phases, [["first-use", 1], ["warm-work", 20]]);
  assert.equal(peer.state.invoked, 21);
  assert.equal(peer.state.completed, 21);
  await peer.close();
  await assert.rejects(fetch(peer.baseUrl));
});

for (const corrupt of ["rpc", "source", "status", "answer", "provider", "model", "generation", "rubric", "content"]) {
  test(`TypeSafe rejects incorrect ${corrupt} despite completed transport`, async (t) => {
    const peer = await fixture(t);
    await assert.rejects(decisionCycle(rpcPeer(peer.baseUrl, corrupt), peer.state, 0));
    await assert.rejects(peer.close(), /Unaccounted TypeSafe peer requests/);
    await assert.rejects(fetch(peer.baseUrl));
  });
}

test("TypeSafe refuses installed-package provenance without workload dispatch", async (t) => {
  const peer = await fixture(t);
  await assert.rejects(run({ rpc: rpcPeer(peer.baseUrl, "installed"), measure: () => assert.fail("unexpected measure") },
    { "first-use": 1, "warm-work": 20 }, { state: peer.state }), /native source-checkout admission/);
  await peer.close();
});

for (const violation of ["unexpected", "path", "authorization", "body", "oversized"]) {
  test(`TypeSafe peer rejects ${violation} and preserves the fault through cleanup`, async (t) => {
    const peer = await fixture(t);
    if (violation !== "unexpected") peer.state.expected = 0;
    const response = await fetch(`${peer.baseUrl}/${violation === "path" ? "other" : "v1/systemone"}`, {
      method: "POST", headers: { "Content-Type": "application/json", ...(violation === "authorization" ? { Authorization: "Bearer synthetic" } : {}) },
      body: violation === "oversized" ? "x".repeat(8193) : "{}",
    });
    assert.equal(response.status, 500);
    await response.text();
    assert.ok(peer.state.fault);
    await assert.rejects(peer.close(), (error) => error === peer.state.fault);
    await assert.rejects(fetch(peer.baseUrl));
  });
}

test("TypeSafe peer cleanup is available when configuration preparation fails", async () => {
  let cleanup;
  await assert.rejects(prepare({ env: { OPENCLAW_CONFIG_PATH: "/missing/synthetic/config.json" } },
    { onCleanup: (fn) => { cleanup = fn; } }), /ENOENT/);
  assert.equal(typeof cleanup, "function");
  await cleanup();
});
