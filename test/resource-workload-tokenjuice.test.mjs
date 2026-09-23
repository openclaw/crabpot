import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { mkdtemp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { test } from "node:test";
import { runOwnedCommand } from "../scripts/owned-command.mjs";
import { readManifest } from "../scripts/manifest-lib.mjs";
import {
  agentCycle, assertFixtureCommand, assertModelOutput, assertPackageClosure, assertStatistics, configure,
  installPinnedArchive, prepareRepository, run, startProvider,
} from "../scripts/resource-workloads/tokenjuice.mjs";

const wrapper = { name: "@openclaw/tokenjuice", version: "2026.9.5", dependencies: { tokenjuice: "0.8.4" } };
const dependency = { name: "tokenjuice", version: "0.8.4" };
const raw = `On branch resource-fixture\nChanges not staged for commit:\n${Array.from({ length: 32 }, (_, index) =>
  `\tmodified:   synthetic-tracked-file-${String(index).padStart(2, "0")}.txt`).join("\n")}\n`;
// Synthetic only: these tests validate the observer, not the real reducer.
const compact = "Changes not staged:\nM: synthetic-tracked-file-00.txt\nM: synthetic-tracked-file-31.txt\n\n[tokenjuice compacted bash output]";

function nativeFixtureScope() {
  let uncertainRoot;
  return {
    async run(root, operation) {
      assert.ok(!uncertainRoot, "native fixture admission blocked after unconfirmed cleanup");
      try { return await operation(); } catch (error) {
        if (error.actual?.cleanupError) uncertainRoot = root;
        throw error;
      }
    },
    async cleanup(root) {
      // A failed owner may still use this directory. Only that exact root stays.
      if (root !== uncertainRoot) await rm(root, { recursive: true, force: true });
    },
  };
}

// Top-level tests run serially; this gate covers later native actions here only.
const nativeFixtures = nativeFixtureScope();

async function temporary(t) {
  const root = await mkdtemp(path.join(tmpdir(), "crabpot-tokenjuice-test-"));
  t.after(() => nativeFixtures.cleanup(root));
  return root;
}

function environment(home) {
  return { PATH: process.env.PATH, HOME: home, USERPROFILE: home, LANG: "C", TZ: "UTC" };
}

test("Tokenjuice scenario declares matched OpenAI controls and fixed one plus five operations", async () => {
  const definition = (await readManifest()).resourceWorkloads.find(({ id }) => id === "tokenjuice-exec-status-v1");
  assert.deepEqual(definition.requiredOperations, { "first-use": 1, "warm-work": 5 });
  assert.deepEqual(definition.pairedWorkload, { dependencies: ["openai"], targetActivation: "scoped" });
});

test("both configs retain native installs and differ only by target enablement", () => {
  const original = { gateway: { auth: { mode: "token", token: "synthetic-gateway-token" } }, plugins: { installs: { tokenjuice: { source: "archive" } } } };
  const before = configure(structuredClone(original), { enabled: false, workspace: "/synthetic/workspace", port: 1234 });
  const after = configure(structuredClone(original), { enabled: true, workspace: "/synthetic/workspace", port: 1234 });
  before.plugins.entries.tokenjuice.enabled = true;
  assert.deepEqual(before, after);
  assert.deepEqual(after.gateway, original.gateway);
  assert.deepEqual(after.plugins.installs, original.plugins.installs);
  assert.deepEqual(after.plugins.allow, ["openai", "tokenjuice"]);
  assert.equal(after.plugins.slots.memory, "none");
  assert.equal(after.agents.defaults.utilityModel, "");
  assert.deepEqual(after.tools, { allow: ["exec"], codeMode: false, exec: { host: "gateway", mode: "full" } });
  const provider = after.models.providers.openai;
  assert.equal(provider.api, "openai-responses");
  assert.equal(provider.baseUrl, "http://127.0.0.1:1234/v1");
  assert.deepEqual(provider.apiKey, { source: "env", provider: "default", id: "OPENAI_API_KEY" });
  assert.deepEqual(provider.agentRuntime, { id: "openclaw" });
  assert.deepEqual(after.agents.defaults.models["openai/gpt-5.6-luna"], {
    agentRuntime: { id: "openclaw" }, params: { transport: "sse", openaiWsWarmup: false },
  });
});

test("package admission rejects the registry wrapper and wrong actual dependency", () => {
  assertPackageClosure(wrapper, dependency);
  assert.throws(() => assertPackageClosure({ ...wrapper, dependencies: { tokenjuice: "0.8.3" } }, dependency));
  assert.throws(() => assertPackageClosure(wrapper, { ...dependency, version: "0.8.3" }));
  assert.throws(() => assertPackageClosure(wrapper, { ...dependency, dependencies: { unexpected: "1" } }));
  assert.throws(() => assertPackageClosure({ ...wrapper, version: "2026.9.6" }, dependency));
});

test("archive input checks actual bytes and closure before native installation", async (t) => {
  const root = await temporary(t);
  await mkdir(path.join(root, "package/node_modules/tokenjuice"), { recursive: true });
  await writeFile(path.join(root, "package/package.json"), JSON.stringify(wrapper));
  await writeFile(path.join(root, "package/node_modules/tokenjuice/package.json"), JSON.stringify(dependency));
  const archive = path.join(root, "fixture.tgz");
  const env = environment(root);
  await nativeFixtures.run(root, async () => {
    const packed = await runOwnedCommand("tar", ["-czf", archive, "-C", root, "package"], { cwd: root, env, timeout: 10_000, maxBuffer: 64 * 1024, encoding: "utf8" });
    assertFixtureCommand(packed, "tar");
  });
  const sha256 = createHash("sha256").update(await readFile(archive)).digest("hex");
  const installed = [];
  const context = { root, env, installArchive: async (...args) => {
    assert.equal(env.npm_config_offline, "true");
    installed.push(args);
  } };
  const inputs = { CRABPOT_TOKENJUICE_ARCHIVE: archive, CRABPOT_TOKENJUICE_ARCHIVE_SHA256: sha256 };
  await nativeFixtures.run(root, () => installPinnedArchive(context, inputs));
  assert.deepEqual(installed, [[archive, sha256]]);
  await assert.rejects(nativeFixtures.run(root, () => installPinnedArchive(context, { ...inputs, CRABPOT_TOKENJUICE_ARCHIVE_SHA256: "f".repeat(64) })), /hash mismatch/);
  await assert.rejects(nativeFixtures.run(root, () => installPinnedArchive(context, {})), /absolute local/);
  await assert.rejects(nativeFixtures.run(root, () => installPinnedArchive(context, { ...inputs, CRABPOT_TOKENJUICE_ARCHIVE_SHA256: "short" })), /SHA256/);
  assert.equal(installed.length, 1);
});

test("real Git fixture has exactly 32 modified tracked files, isolated config and unchanged stats defaults", async (t) => {
  const root = await temporary(t);
  const env = environment(root);
  const repository = await nativeFixtures.run(root, () => prepareRepository(root, env));
  assert.equal((repository.raw.match(/modified:/g) ?? []).length, 32);
  assert.match(repository.raw, /^On branch resource-fixture/);
  assert.equal(env.GIT_CONFIG_NOSYSTEM, "1");
  assert.equal(path.dirname(env.GIT_CONFIG_GLOBAL), root);
  assert.equal(await readFile(env.GIT_CONFIG_GLOBAL, "utf8"), "");
  assert.equal(env.GIT_CONFIG_COUNT, "0");
  assert.equal(env.TOKENJUICE_STATS, undefined);
  assert.equal(env.TOKENJUICE_ARTIFACT_DIR, undefined);
  assertModelOutput(repository.raw, repository.raw, false);
  assertModelOutput(compact, repository.raw, true);
});

test("fixture failure retains command and cleanup codes without command data", () => {
  const privateText = "synthetic-private-command-data";
  assert.throws(() => assertFixtureCommand({
    status: null, signal: null,
    error: { code: "EOWNERSTART", message: privateText },
    cleanupError: { code: "EOWNERCLEANUP", message: privateText },
    stderr: privateText,
  }, "git"), (error) => {
    assert.equal(error.actual.error, "EOWNERSTART");
    assert.equal(error.actual.cleanupError, "EOWNERCLEANUP");
    assert.match(error.message, /"error":"EOWNERSTART"/);
    assert.match(error.message, /"cleanupError":"EOWNERCLEANUP"/);
    assert.ok(!error.message.includes(privateText));
    return true;
  });
  assert.throws(() => assertFixtureCommand({
    status: null, signal: "SIGTERM", error: { code: privateText },
  }, "tar"), (error) => {
    assert.equal(error.actual.signal, "SIGTERM");
    assert.equal(error.actual.error, "UNCLASSIFIED");
    assert.ok(!error.message.includes(privateText));
    return true;
  });
});

test("owner diagnostics whitelist reasons and bounded native codes without copying private fields", () => {
  const privateText = "synthetic-private-owner-data";
  for (const message of ["command supervisor startup timed out", "Windows command adapter startup timed out"]) {
    assert.throws(() => assertFixtureCommand({
      status: null, signal: null,
      error: { code: "EOWNERSTART", message: `${message}; command cleanup was not confirmed`, nativeCode: 5,
        stack: privateText, path: privateText, spawnargs: [privateText], env: { privateText } },
      cleanupError: { code: "EOWNERCLEANUP", message: "Windows helper closure was not observed", cause: privateText },
      stdout: privateText, stderr: privateText,
    }, "git"), (error) => {
      assert.deepEqual(error.actual, { status: null, signal: null, error: "EOWNERSTART", cleanupError: "EOWNERCLEANUP" });
      assert.ok(error.message.includes(`"reason":"${message}"`));
      assert.ok(error.message.includes('"nativeCode":5'));
      assert.ok(error.message.includes('"reason":"Windows helper closure was not observed"'));
      assert.ok(!error.message.includes(privateText));
      return true;
    });
  }
  for (const nativeCode of [-1, 1.5, NaN, 0x100000000, privateText, { privateText }]) {
    assert.throws(() => assertFixtureCommand({
      status: null, signal: null, error: { code: "EOWNERNATIVE", message: privateText, nativeCode },
    }, "tar"), (error) => {
      assert.ok(error.message.includes('"reason":"unclassified","nativeCode":null'));
      assert.ok(!error.message.includes(privateText));
      return true;
    });
  }
});

test("owner diagnostics distinguish missing and unknown liveness causes without private error data", () => {
  const privateText = "synthetic-private-cause-data";
  for (const [cause, expected] of [
    [undefined, null],
    ...["EPERM", "EACCES", "EINVAL", "ESRCH", "UNKNOWN"].map((code) => [{ code }, code]),
    [{}, "UNCLASSIFIED"], [privateText, "UNCLASSIFIED"],
    [{ code: privateText, message: privateText, stack: privateText, path: privateText }, "UNCLASSIFIED"],
  ]) {
    assert.throws(() => assertFixtureCommand({
      status: null, signal: null, error: { code: "EOWNERSTART" },
      cleanupError: { code: "EOWNERCLEANUP", message: "Windows helper closure was not observed", cause },
    }, "tar"), (error) => {
      assert.deepEqual(error.actual, { status: null, signal: null, error: "EOWNERSTART", cleanupError: "EOWNERCLEANUP" });
      assert.ok(error.message.includes(`"reason":"Windows helper closure was not observed","nativeCode":null,"causeCode":${JSON.stringify(expected)}`));
      assert.ok(!error.message.includes(privateText));
      return true;
    });
  }
});

test("uncertain native cleanup retains its exact root and blocks subsequent native admission", async (t) => {
  const scope = nativeFixtureScope();
  // These synthetic failures own no process; the outer test can remove them.
  const retained = await temporary(t), unused = await temporary(t);
  await writeFile(path.join(retained, "sentinel"), "retained");
  await writeFile(path.join(unused, "sentinel"), "unused");
  const failure = Object.assign(new Error("synthetic owner failure"), { actual: { cleanupError: "EOWNERCLEANUP" } });
  await assert.rejects(scope.run(retained, async () => { throw failure; }), (error) => error === failure);
  await scope.cleanup(retained);
  assert.equal(await readFile(path.join(retained, "sentinel"), "utf8"), "retained");
  let admissions = 0;
  await assert.rejects(scope.run(unused, async () => { admissions += 1; }), /native fixture admission blocked/);
  assert.equal(admissions, 0);
  await scope.cleanup(unused);
  await assert.rejects(readFile(path.join(unused, "sentinel")), { code: "ENOENT" });
});

test("joined native failure permits later admission and ordinary fixture removal", async (t) => {
  const scope = nativeFixtureScope(), root = await temporary(t);
  const failure = Object.assign(new Error("synthetic child failure"), { actual: { status: 1, cleanupError: null } });
  await assert.rejects(scope.run(root, async () => { throw failure; }), (error) => error === failure);
  assert.equal(await scope.run(root, async () => "admitted"), "admitted");
  await scope.cleanup(root);
  await assert.rejects(readFile(root), { code: "ENOENT" });
});

for (const [label, output, enabled] of [
  ["raw output in enabled case", raw, true],
  ["compaction in baseline", compact, false],
  ["missing final modified entry", compact.replace("M: synthetic-tracked-file-31.txt", ""), true],
  ["retained branch", `${compact}\nOn branch resource-fixture`, true],
  ["non-shrinking text", compact + "x".repeat(raw.length), true],
  ["non-text output", [], true],
]) {
  test(`model output assertion rejects ${label}`, () => assert.throws(() => assertModelOutput(output, raw, enabled)));
}

function requestBody(prompt) {
  return { model: "gpt-5.6-luna", stream: true, input: [{ role: "user", content: [{ type: "input_text", text: prompt }] }],
    tools: [{ type: "function", name: "exec", parameters: { type: "object", properties: { command: { type: "string" } } } }] };
}

async function post(provider, body, pathname = "/v1/responses") {
  const response = await fetch(`http://127.0.0.1:${provider.port}${pathname}`, {
    method: "POST", headers: { authorization: "Bearer crabpot-synthetic-openai-key", "content-type": "application/json" },
    body: JSON.stringify(body), signal: AbortSignal.timeout(5_000),
  });
  const text = await response.text();
  return { status: response.status, events: response.status === 200 ? text.split("\n\n")
    .filter((line) => line.startsWith("data: ") && !line.includes("[DONE]"))
    .map((line) => JSON.parse(line.slice(6))) : [], text };
}

async function peer(t, enabled) {
  let dispose;
  let closed = false;
  const provider = await startProvider({ workspace: "/synthetic/workspace", raw, enabled, onCleanup: (callback) => { dispose = callback; } });
  const close = async () => { closed = true; await dispose(); };
  t.after(async () => { if (!closed) await close(); });
  return { provider, close };
}

async function modelRoundTrip(provider, index, enabled) {
  const { prompt, reply } = provider.begin(index);
  const first = await post(provider, requestBody(prompt));
  assert.equal(first.status, 200, first.text);
  const call = first.events.find((event) => event.type === "response.completed").response.output[0];
  assert.equal(call.name, "exec");
  assert.deepEqual(JSON.parse(call.arguments), {
    command: "git status --untracked-files=no", workdir: "/synthetic/workspace", title: "Inspect synthetic Git status", timeoutSeconds: 20,
  });
  assert.equal(first.events.filter((event) => event.type === "response.output_item.done").length, 1);
  const second = await post(provider, { model: "gpt-5.6-luna", stream: true,
    input: [{ type: "function_call_output", call_id: call.call_id, output: enabled ? compact : raw }] });
  assert.equal(second.status, 200, second.text);
  const response = second.events.find((event) => event.type === "response.completed").response;
  assert.equal(response.output[0].content[0].text, reply);
  provider.complete(index);
}

for (const enabled of [false, true]) {
  test(`loopback Responses fixture accepts six sequential two-request ${enabled ? "compacted" : "control"} turns and joins`, async (t) => {
    const { provider, close } = await peer(t, enabled);
    for (let index = 0; index < 6; index++) await modelRoundTrip(provider, index, enabled);
    provider.assertFinished();
    await close();
    await assert.rejects(fetch(`http://127.0.0.1:${provider.port}/v1/responses`, { signal: AbortSignal.timeout(1_000) }));
    assert.throws(() => provider.begin(6));
  });
}

test("unexpected utility request reports its known fingerprint without copying prompt data", async (t) => {
  const { provider, close } = await peer(t, false);
  const body = { model: "gpt-5.6-luna", stream: true, input: [
    { role: "developer", content: "Write an Activity recap for someone scanning their tasks: private-synthetic-text" },
    { role: "user", content: "TOKENJUICE_RESOURCE_REQUEST_0 private-synthetic-user" },
  ] };
  assert.equal((await post(provider, body)).status, 500);
  await assert.rejects(close(), (error) => {
    assert.match(error.message, /"activityRecap":true/);
    assert.ok(!error.message.includes("private-synthetic"));
    return true;
  });
});

for (const corruption of ["raw-enabled", "wrong-call", "two-outputs", "retry", "wrong-route", "wrong-model", "code-mode", "old-history"]) {
  test(`provider preserves ${corruption} failure through cleanup`, async (t) => {
    const { provider, close } = await peer(t, true);
    const { prompt } = provider.begin(0);
    const firstBody = requestBody(prompt);
    if (corruption === "wrong-model") firstBody.model = "unexpected";
    if (corruption === "code-mode") firstBody.tools.push({ name: "code_mode" });
    if (corruption === "old-history") firstBody.input.push({ type: "function_call_output", call_id: "old", output: "old" });
    const first = await post(provider, firstBody, corruption === "wrong-route" ? "/v1/chat/completions" : "/v1/responses");
    if (["wrong-route", "wrong-model", "code-mode", "old-history"].includes(corruption)) assert.equal(first.status, 500);
    else {
      assert.equal(first.status, 200);
      const output = { type: "function_call_output", call_id: corruption === "wrong-call" ? "wrong" : "call_resource_0",
        output: corruption === "raw-enabled" ? raw : compact };
      const second = await post(provider, { model: "gpt-5.6-luna", stream: true,
        input: corruption === "two-outputs" ? [output, output] : [output] });
      if (corruption === "retry") {
        assert.equal(second.status, 200);
        assert.equal((await post(provider, firstBody)).status, 500);
      } else assert.equal(second.status, 500);
    }
    assert.throws(() => provider.complete(0));
    await assert.rejects(close());
  });
}

function agentRpc(corrupt) {
  const calls = [];
  const rpc = async (method, params) => {
    calls.push([method, params]);
    if (method === "agent") return { status: "accepted", runId: "run-0", agentId: "main", sessionKey: params.sessionKey,
      ...(corrupt === "admission" ? { status: "error" } : {}) };
    assert.equal(method, "agent.wait");
    return { runId: "run-0", status: "ok", terminalReply: { disposition: "visible", text: "done" },
      ...(corrupt === "timeout" ? { status: "timeout" } : {}),
      ...(corrupt === "reply" ? { terminalReply: { disposition: "silent" } } : {}),
      ...(corrupt === "error" ? { error: "failure" } : {}),
      ...(corrupt === "run" ? { runId: "different" } : {}) };
  };
  return { rpc, calls };
}

test("agent cycle uses native admission, matching wait, fresh session and terminal reply", async () => {
  const { rpc, calls } = agentRpc();
  const finished = [];
  await agentCycle(rpc, { workspace: "/synthetic/workspace", provider: {
    begin: () => ({ prompt: "request", reply: "done" }), complete: (index) => finished.push(index),
  } }, 3);
  assert.deepEqual(calls, [
    ["agent", { agentId: "main", sessionKey: "agent:main:tokenjuice-resource-3", message: "request", deliver: false, idempotencyKey: "tokenjuice-resource-3" }],
    ["agent.wait", { runId: "run-0", timeoutMs: 30_000 }],
  ]);
  assert.deepEqual(finished, [3]);
});

for (const corruption of ["admission", "timeout", "reply", "error", "run"]) {
  test(`agent cycle does not count ${corruption} as completed`, async () => {
    await assert.rejects(agentCycle(agentRpc(corruption).rpc, { workspace: "/synthetic/workspace", provider: {
      begin: () => ({ prompt: "request", reply: "done" }), complete: () => assert.fail("must not count failed turn"),
    } }, 0));
  });
}

async function writeStats(root, records) {
  const directory = path.join(root, ".tokenjuice/artifacts/metadata-v1");
  await mkdir(directory, { recursive: true });
  await writeFile(path.join(directory, "events-0.jsonl"), records.map((record) => JSON.stringify(record)).join("\n"));
}

const stats = { hasRaw: false, metadata: { source: "openclaw", classification: { matchedReducer: "git/status" }, exitCode: 0, rawChars: 2000, reducedChars: 500 } };

test("statistics observer requires all six default records and no baseline writes", async (t) => {
  const root = await temporary(t);
  await assertStatistics(root, false);
  await assert.rejects(assertStatistics(root, true));
  await writeStats(root, Array(6).fill(stats));
  await assertStatistics(root, true);
  await assert.rejects(assertStatistics(root, false));
  await writeStats(root, Array(5).fill(stats));
  await assert.rejects(assertStatistics(root, true), /each real exec once/);
  await writeStats(root, Array(6).fill({ ...stats, metadata: { ...stats.metadata, exitCode: 1 } }));
  await assert.rejects(assertStatistics(root, true));
});

test("run measures exactly one plus five fresh turns in both cases", async (t) => {
  for (const enabled of [false, true]) {
    const home = await temporary(t);
    if (enabled) await writeStats(home, Array(6).fill(stats));
    const measured = [];
    const indices = [];
    let finished = false;
    const provider = {
      begin: (index) => { indices.push(index); return { prompt: "request", reply: "done" }; },
      complete: () => {}, assertFinished: () => { finished = true; },
    };
    await run({ env: { HOME: home }, rpc: agentRpc().rpc, measure: async (name, count, work) => {
      measured.push([name, count]);
      for (let index = 0; index < count; index++) await work(index);
    } }, { "first-use": 1, "warm-work": 5 }, { enabled, state: { workspace: "/synthetic/workspace", provider } });
    assert.deepEqual(measured, [["first-use", 1], ["warm-work", 5]]);
    assert.deepEqual(indices, [0, 1, 2, 3, 4, 5]);
    assert.equal(finished, true);
  }
  await assert.rejects(run({}, { "first-use": 1, "warm-work": 4 }, {}));
});
