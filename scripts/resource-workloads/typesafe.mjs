import assert from "node:assert/strict";
import { once } from "node:events";
import { readFileSync, writeFileSync } from "node:fs";
import { createServer } from "node:http";
import { finished } from "node:stream/promises";

export const operationUnit = "one decision_evaluate tool invocation with three typed questions (one local HTTP request)";
export const limitations = [
  "Genuine source-checkout bundled TypeSafe only; this does not qualify installed-package host compatibility",
  "Deterministic local System One peer; no model inference, hosted Jev credentials, latency or accuracy measurement",
  "Empty-host control compares startup and neutral RPCs only; enabled decision work is absolute, not plugin overhead",
  "Peer resources belong to the campaign process and are excluded from Gateway CPU/memory",
  "Sequential successful batches; no concurrency, cancellation, retry or in-process disposal retention measurement",
];

function batch(index) {
  return {
    state: { ticket: index, text: "Synthetic support request" },
    questions: {
      urgent: { type: "boolean", criteria: { true: "Urgent", false: "Routine" } },
      route: { type: "choice", criteria: { support: "Help", sales: "Purchase" } },
      impact: { type: "score", criteria: ["Low", "High"] },
    },
  };
}

const wireResult = {
  model: "kev-latest",
  answers: {
    urgent: { type: "noul", noul: 0.75 },
    route: { type: "choice", choice: "support", confidence: 0.8, probabilities: { support: 0.9, sales: 0.1 } },
    impact: { type: "score", score: 0.8, confidence: 0.8, probabilities: { "0": 0.2, "1": 0.8 }, legend: { "0": "Low", "1": "High" } },
  },
  usage: { input_tokens: 30, output_tokens: 12 },
  latency_ms: 1,
};

// The peer owns only the vendor wire boundary. Host discovery, registration,
// decision admission and translation execute in the real Gateway process.
export async function prepare({ env }, { onCleanup }) {
  const state = { completed: 0, invoked: 0, expected: undefined, fault: undefined };
  const inflight = new Set();
  const server = createServer((request, response) => {
    const work = (async () => {
      assert.equal(request.method, "POST");
      assert.equal(request.url, "/v1/systemone");
      assert.equal(request.headers.authorization, undefined);
      assert.match(request.headers["content-type"] ?? "", /^application\/json(?:;|$)/);
      assert.notEqual(state.expected, undefined, "Unexpected or duplicate TypeSafe request");
      const index = state.expected;
      state.expected = undefined;
      let body = "";
      let bytes = 0;
      for await (const chunk of request) {
        bytes += chunk.length;
        assert.ok(bytes <= 8192, "Synthetic TypeSafe request exceeded its bound");
        body += chunk;
      }
      const input = batch(index);
      assert.deepEqual(JSON.parse(body), {
        ...input, model: "kev-latest",
        questions: Object.fromEntries(Object.entries(input.questions).map(([id, question]) => [id, {
          ...question, type: question.type === "boolean" ? "noul" : question.type, instructions: null,
        }])),
      });
      const settled = finished(response);
      response.writeHead(200, { "Content-Type": "application/json" });
      response.end(JSON.stringify(wireResult));
      await settled;
      state.completed++;
    })();
    inflight.add(work);
    void work.catch((error) => {
      state.fault ??= error;
      if (!response.headersSent) {
        response.writeHead(500, { "Content-Type": "application/json" });
        response.end('{"error":"synthetic-peer-contract"}');
      } else response.destroy();
    }).finally(() => inflight.delete(work));
  });
  server.requestTimeout = 5000;
  server.headersTimeout = 5000;
  // Register before listen/config I/O. The shared runner joins the Gateway
  // before calling this even when preparation, startup or an RPC fails.
  onCleanup(async () => {
    const closed = new Promise((resolve, reject) => server.close((error) => {
      if (error && error.code !== "ERR_SERVER_NOT_RUNNING") reject(error);
      else resolve();
    }));
    server.closeAllConnections();
    await closed;
    await Promise.allSettled([...inflight]);
    if (state.fault) throw state.fault;
    assert.equal(state.completed, state.invoked, "Unaccounted TypeSafe peer requests");
  });
  server.listen(0, "127.0.0.1");
  await once(server, "listening");
  const baseUrl = `http://127.0.0.1:${server.address().port}`;
  const config = JSON.parse(readFileSync(env.OPENCLAW_CONFIG_PATH, "utf8"));
  config.agents = { defaults: { decisionModel: "typesafe/kev-latest" } };
  config.tools = { allow: ["decision_evaluate"] };
  config.plugins = {
    enabled: true, allow: ["typesafe"], slots: { memory: "none" },
    entries: { typesafe: { enabled: true, config: { baseUrl } } },
  };
  writeFileSync(env.OPENCLAW_CONFIG_PATH, JSON.stringify(config));
  return state;
}

export async function decisionCycle(rpc, state, index) {
  if (state.fault) throw state.fault;
  assert.equal(state.completed, state.invoked);
  state.expected = index;
  const response = await rpc("tools.invoke", {
    name: "decision_evaluate", agentId: "main", args: batch(index),
    idempotencyKey: `typesafe-resource-${index}`,
  });
  assert.equal(response.ok, true);
  assert.equal(response.toolName, "decision_evaluate");
  assert.equal(response.source, "core");
  const details = response.output?.details;
  assert.equal(details?.status, "ok");
  assert.deepEqual(details.result, {
    model: "kev-latest",
    answers: {
      urgent: { type: "boolean", probabilityTrue: 0.75 },
      route: wireResult.answers.route,
      impact: { type: "score", score: 0.8, confidence: 0.8, probabilities: [0.2, 0.8] },
    },
    usage: { inputTokens: 30, outputTokens: 12 },
  });
  assert.equal(details.provenance?.providerId, "typesafe");
  // Fingerprint of this fixture's canonical rubric, excluding per-call state.
  assert.equal(details.provenance?.rubricVersion, "decision-v1-671a924ce923065896d34b62");
  assert.equal(typeof details.provenance?.runtimeGeneration, "string");
  assert.ok(details.provenance.runtimeGeneration.length > 0);
  state.generation ??= details.provenance.runtimeGeneration;
  assert.equal(details.provenance.runtimeGeneration, state.generation);
  assert.deepEqual(response.output.content, [{ type: "text", text: JSON.stringify(details) }]);
  if (state.fault) throw state.fault;
  assert.equal(state.expected, undefined, "Decision bypassed the local peer");
  assert.equal(state.completed, state.invoked + 1);
  state.invoked++;
}

export async function run({ rpc, measure }, requirements, { state }) {
  assert.deepEqual(Object.keys(requirements).sort(), ["first-use", "warm-work"]);
  const inspection = await rpc("plugins.inspect", { pluginId: "typesafe" });
  assert.equal(inspection.ok, true);
  assert.equal(inspection.plugin?.origin, "bundled", "TypeSafe workload requires native source-checkout admission");
  assert.equal(inspection.plugin.enabled, true);
  await measure("first-use", requirements["first-use"], (index) => decisionCycle(rpc, state, index));
  await measure("warm-work", requirements["warm-work"], (index) => decisionCycle(rpc, state, index + requirements["first-use"]));
  assert.equal(state.invoked, requirements["first-use"] + requirements["warm-work"]);
}
