import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { createReadStream } from "node:fs";
import { mkdir, readFile, readdir, stat, writeFile } from "node:fs/promises";
import http from "node:http";
import { devNull } from "node:os";
import path from "node:path";
import { runOwnedCommand } from "../owned-command.mjs";

export const operationUnit = "one fresh embedded agent turn with one git status exec and two synthetic OpenAI Responses requests";
export const limitations = [
  "Matched ordinary OpenAI embedded agent turns only; no Codex, real model or other reducers",
  "Automatic Activity recaps and utility-model selection are disabled equally; unexpected model requests fail the fixture",
  "Middleware uses a caller-owned registry handle; execution is verified by output and statistics, not root-registry publication",
  "Gateway process CPU excludes the Git child and loopback fixture; wall time includes their work",
  "First use includes lazy middleware activation; warm turns use fresh sessions in the same repository",
  "Default Tokenjuice statistics I/O stays enabled in the isolated HOME; raw artifacts are not requested",
  "One sequential pair is not a performance threshold, peak estimate or retained-heap proof",
];

const model = "gpt-5.6-luna";
const syntheticKey = "crabpot-synthetic-openai-key";
const command = "git status --untracked-files=no";
const marker = "tokenjuice compacted bash output";
const files = Array.from({ length: 32 }, (_, index) => `synthetic-tracked-file-${String(index).padStart(2, "0")}.txt`);
const requiredOperations = { "first-use": 1, "warm-work": 5 };

export function assertFixtureCommand(result, commandName) {
  // Keep both owner failures visible without copying command output or paths.
  const code = (error) => !error ? null : /^[A-Z][A-Z0-9_]{0,63}$/.test(error.code ?? "") ? error.code : "UNCLASSIFIED";
  const summary = {
    status: result.status,
    signal: result.signal,
    error: code(result.error),
    cleanupError: code(result.cleanupError),
  };
  assert.deepEqual(summary, { status: 0, signal: null, error: null, cleanupError: null },
    `${commandName} fixture command failed: ${JSON.stringify(summary)}`);
}

async function owned(commandName, args, { env, cwd }) {
  const result = await runOwnedCommand(commandName, args, { env, cwd, timeout: 10_000, maxBuffer: 64 * 1024, encoding: "utf8" });
  assertFixtureCommand(result, commandName);
  return result.stdout;
}

export function assertPackageClosure(wrapper, dependency) {
  assert.equal(wrapper.name, "@openclaw/tokenjuice");
  assert.equal(wrapper.version, "2026.9.5");
  // The registry wrapper with this version depended on 0.8.3. This scenario
  // exercises the frozen source-built wrapper and its actual bundled closure.
  assert.equal(wrapper.dependencies?.tokenjuice, "0.8.4");
  assert.equal(dependency.name, "tokenjuice");
  assert.equal(dependency.version, "0.8.4");
  assert.deepEqual(dependency.dependencies ?? {}, {});
}

export async function installPinnedArchive(context, inputs = process.env) {
  const archive = inputs.CRABPOT_TOKENJUICE_ARCHIVE;
  const expected = inputs.CRABPOT_TOKENJUICE_ARCHIVE_SHA256;
  assert.ok(typeof archive === "string" && path.isAbsolute(archive) && archive.endsWith(".tgz"), "CRABPOT_TOKENJUICE_ARCHIVE must name an absolute local .tgz");
  assert.match(expected ?? "", /^[a-f0-9]{64}$/, "CRABPOT_TOKENJUICE_ARCHIVE_SHA256 is required");
  const digest = createHash("sha256");
  for await (const chunk of createReadStream(archive)) digest.update(chunk);
  assert.equal(digest.digest("hex"), expected, "Tokenjuice archive hash mismatch");
  const options = { env: context.env, cwd: context.root };
  const wrapper = JSON.parse(await owned("tar", ["-xOf", archive, "package/package.json"], options));
  const dependency = JSON.parse(await owned("tar", ["-xOf", archive, "package/node_modules/tokenjuice/package.json"], options));
  assertPackageClosure(wrapper, dependency);
  // The archive includes its dependency closure. Native npm peer planning must
  // fail locally on missing metadata rather than retry the disabled network.
  context.env.npm_config_offline = "true";
  // Native installation owns extraction/admission and records the actual hash
  // in case.fixtures. Install the same bytes even when middleware is disabled.
  await context.installArchive(archive, expected);
}

export async function prepareRepository(root, env) {
  const workspace = path.join(root, "synthetic-repository");
  const hooks = path.join(root, "empty-git-hooks");
  await mkdir(workspace);
  await mkdir(hooks);
  Object.assign(env, {
    LC_ALL: "C", LANG: "C", GIT_CONFIG_NOSYSTEM: "1", GIT_CONFIG_GLOBAL: devNull,
    GIT_CONFIG_COUNT: "0", GIT_TERMINAL_PROMPT: "0",
  });
  const git = (args) => owned("git", args, { env, cwd: workspace });
  await git(["init", "--initial-branch=resource-fixture"]);
  await git(["config", "core.hooksPath", hooks]);
  await git(["config", "commit.gpgsign", "false"]);
  for (const file of files) await writeFile(path.join(workspace, file), "synthetic baseline\n");
  await git(["add", "--", ...files]);
  await git(["-c", "user.name=Resource Fixture", "-c", "user.email=fixture@example.invalid", "commit", "-m", "Synthetic baseline"]);
  for (const file of files) await writeFile(path.join(workspace, file), "synthetic changed content\n");
  const raw = await git(["status", "--untracked-files=no"]);
  assert.match(raw, /^On branch resource-fixture\n/);
  assert.equal((raw.match(/modified:/g) ?? []).length, files.length);
  for (const file of files) assert.ok(raw.includes(file));
  return { workspace, raw };
}

export function configure(config, { enabled, workspace, port }) {
  config.plugins = {
    ...config.plugins, enabled: true, allow: ["openai", "tokenjuice"], slots: { memory: "none" },
    entries: { openai: { enabled: true }, tokenjuice: { enabled, config: {} } },
  };
  // Same native fixture contract as OpenClaw's mock-openai-config.mjs. Keep
  // provider/model/runtime explicit so a default cannot select Codex or WS.
  config.models = { mode: "merge", providers: { openai: {
    baseUrl: `http://127.0.0.1:${port}/v1`,
    apiKey: { source: "env", provider: "default", id: "OPENAI_API_KEY" },
    api: "openai-responses", agentRuntime: { id: "openclaw" }, request: { allowPrivateNetwork: true },
    models: [{ id: model, name: model, api: "openai-responses", agentRuntime: { id: "openclaw" },
      reasoning: false, input: ["text"], cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
      contextWindow: 128000, contextTokens: 96000, maxTokens: 4096 }],
  } } };
  config.agents = { defaults: {
    workspace, skipBootstrap: true, sandbox: { mode: "off" }, model: { primary: `openai/${model}` },
    // Recaps otherwise start after terminal success and race the next measured turn.
    utilityModel: "",
    models: { [`openai/${model}`]: { agentRuntime: { id: "openclaw" }, params: { transport: "sse", openaiWsWarmup: false } } },
  } };
  config.tools = { allow: ["exec"], codeMode: false, exec: { host: "gateway", mode: "full" } };
  return config;
}

export function assertModelOutput(output, raw, enabled) {
  assert.equal(typeof output, "string", "model must receive textual function_call_output");
  if (!enabled) {
    assert.equal(output.trim(), raw.trim(), "baseline tool output differs from real git status");
    assert.ok(!output.includes(marker));
    return;
  }
  assert.ok(output.includes(`[${marker}`), "model did not receive the Tokenjuice compaction notice");
  assert.ok(!output.includes("On branch"), "uncompacted status reached the model");
  assert.ok(output.length < raw.trim().length, "compaction did not reduce model-visible text");
  assert.match(output, /M: synthetic-tracked-file-00\.txt/);
  assert.match(output, /M: synthetic-tracked-file-31\.txt/);
}

function completed(responseId, output) {
  return { type: "response.completed", response: { id: responseId, status: "completed", output,
    usage: { input_tokens: 64, output_tokens: 16, total_tokens: 80, input_tokens_details: { cached_tokens: 0 } } } };
}

function toolEvents(turn, workspace) {
  const args = JSON.stringify({ command, workdir: workspace, title: "Inspect synthetic Git status", timeoutSeconds: 20 });
  const item = { type: "function_call", id: `fc_resource_${turn.index}`, call_id: turn.callId, name: "exec", arguments: args };
  return [
    { type: "response.output_item.added", output_index: 0, item: { ...item, arguments: "" } },
    { type: "response.function_call_arguments.delta", item_id: item.id, output_index: 0, delta: args },
    { type: "response.output_item.done", output_index: 0, item },
    completed(`resp_resource_tool_${turn.index}`, [item]),
  ];
}

function textEvents(turn) {
  const item = { type: "message", id: `msg_resource_${turn.index}`, role: "assistant", status: "completed",
    content: [{ type: "output_text", text: turn.reply, annotations: [] }] };
  return [
    { type: "response.output_item.added", output_index: 0, item: { ...item, status: "in_progress", content: [] } },
    { type: "response.output_text.delta", output_index: 0, content_index: 0, item_id: item.id, delta: turn.reply },
    { type: "response.output_text.done", output_index: 0, content_index: 0, item_id: item.id, text: turn.reply },
    { type: "response.output_item.done", output_index: 0, item },
    completed(`resp_resource_reply_${turn.index}`, [item]),
  ];
}

async function readRequest(req) {
  let size = 0;
  const chunks = [];
  for await (const chunk of req) {
    size += chunk.length;
    assert.ok(size <= 4 * 1024 * 1024, "synthetic provider body exceeds 4 MiB");
    chunks.push(chunk);
  }
  return JSON.parse(Buffer.concat(chunks).toString("utf8"));
}

/** A bounded two-request Responses fixture, not a second agent/host runner. */
export async function startProvider({ workspace, raw, enabled, onCleanup }) {
  let turn;
  let completedTurns = 0;
  let requests = 0;
  let fault;
  let closing = false;
  const pending = new Set();
  const fail = (error) => { fault ??= error; };
  const healthy = () => { if (fault) throw fault; };
  const describeRequest = (body) => {
    const instructions = typeof body.instructions === "string" ? body.instructions : "";
    const systemText = instructions + JSON.stringify((body.input ?? []).filter((item) => ["system", "developer"].includes(item.role)));
    return JSON.stringify({
      activeTurn: turn?.index ?? null, completedTurns, requests,
      inputItems: Array.isArray(body.input) ? body.input.length : null,
      tools: Array.isArray(body.tools) ? body.tools.length : null,
      requestMarkers: [...new Set(JSON.stringify(body.input ?? null).match(/TOKENJUICE_RESOURCE_REQUEST_[0-9]{1,3}\b/g) ?? [])].slice(0, 6),
      instructionsSha256: createHash("sha256").update(instructions).digest("hex"),
      progressNarration: systemText.includes("You write the live status line"),
      sessionTitle: systemText.includes("Generate a concise session title"),
      activityRecap: systemText.includes("Write an Activity recap for someone scanning their tasks"),
    });
  };
  const handle = async (req, res) => {
    assert.equal(closing, false, "provider is closing");
    assert.equal(req.method, "POST");
    assert.equal(req.url, "/v1/responses");
    assert.equal(req.headers.authorization, `Bearer ${syntheticKey}`);
    if (!turn || turn.requests >= 2) {
      const body = await readRequest(req);
      // Only fixture markers and structural counts leave this observer. Never
      // include prompt text, headers or arbitrary provider request values.
      throw new Error(`unexpected model request or retry: ${describeRequest(body)}`);
    }
    assert.equal(turn.requests, turn.responses, "concurrent model requests are not part of this workload");
    // Claim before reading so concurrent requests cannot share one turn slot.
    const requestIndex = turn.requests++;
    requests++;
    const body = await readRequest(req);
    healthy();
    assert.equal(body.model, model);
    assert.equal(body.stream, true);
    assert.ok(Array.isArray(body.input));
    const outputs = body.input.filter((item) => item.type === "function_call_output");
    let events;
    if (requestIndex === 0) {
      assert.deepEqual(outputs, [], "fresh session unexpectedly contains tool history");
      assert.ok(body.input.some((item) => item.role === "user" && JSON.stringify(item.content).includes(turn.prompt)),
        `unexpected model prompt: ${describeRequest(body)}`);
      const exec = body.tools?.find((tool) => tool.type === "function" && tool.name === "exec");
      assert.equal(exec?.parameters?.properties?.command?.type, "string", "native exec tool missing");
      assert.ok(!body.tools.some((tool) => tool.name === "code_mode"), "Code Mode must be disabled");
      events = toolEvents(turn, workspace);
    } else {
      assert.equal(outputs.length, 1, "expected exactly one exec result");
      assert.equal(outputs[0].call_id, turn.callId);
      assertModelOutput(outputs[0].output, raw, enabled);
      events = textEvents(turn);
      turn.outputChars = outputs[0].output.length;
    }
    res.writeHead(200, { "content-type": "text/event-stream", "cache-control": "no-store" });
    for (const event of events) res.write(`data: ${JSON.stringify(event)}\n\n`);
    res.end("data: [DONE]\n\n");
    turn.responses++;
  };
  const server = http.createServer((req, res) => {
    req.setTimeout(10_000, () => { fail(new Error("synthetic provider request timed out")); req.destroy(); });
    const work = handle(req, res).catch((error) => {
      fail(error);
      if (!res.headersSent) res.writeHead(500, { "content-type": "application/json" });
      res.end(JSON.stringify({ error: { message: "synthetic provider assertion failed" } }));
    });
    pending.add(work);
    void work.then(() => pending.delete(work));
  });
  server.on("error", fail);
  server.on("clientError", (error, socket) => { fail(error); socket.destroy(); });
  const close = async () => {
    closing = true;
    const joined = new Promise((resolve, reject) => server.close((error) => error && error.code !== "ERR_SERVER_NOT_RUNNING" ? reject(error) : resolve()));
    server.closeAllConnections();
    await joined;
    await Promise.all(pending);
    assert.equal(server.listening, false);
    healthy();
  };
  // The consumer owns this peer even if listen, Gateway startup or work fails.
  onCleanup(close);
  await new Promise((resolve, reject) => {
    const failed = (error) => { server.off("listening", ready); reject(error); };
    const ready = () => { server.off("error", failed); resolve(); };
    server.once("error", failed);
    server.once("listening", ready);
    server.listen(0, "127.0.0.1");
  });
  return {
    port: server.address().port,
    begin(index) {
      healthy();
      assert.equal(closing, false);
      assert.equal(index, completedTurns, "turns must run sequentially in fresh sessions");
      assert.ok(!turn, "previous turn was not completed");
      turn = { index, callId: `call_resource_${index}`, prompt: `TOKENJUICE_RESOURCE_REQUEST_${index}`,
        reply: `TOKENJUICE_RESOURCE_DONE_${index}`, requests: 0, responses: 0 };
      return { prompt: turn.prompt, reply: turn.reply };
    },
    complete(index) {
      healthy();
      assert.equal(turn?.index, index);
      assert.equal(turn.requests, 2);
      assert.equal(turn.responses, 2);
      assert.ok(turn.outputChars > 0);
      completedTurns++;
      turn = undefined;
    },
    assertFinished() {
      healthy();
      assert.equal(completedTurns, 6);
      assert.equal(requests, 12);
      assert.equal(turn, undefined);
    },
  };
}

export async function agentCycle(rpc, state, index) {
  const { prompt, reply } = state.provider.begin(index);
  const sessionKey = `agent:main:tokenjuice-resource-${index}`;
  // Public agent calls use configured workspace; cwd is reserved for plugin subagents.
  const accepted = await rpc("agent", { agentId: "main", sessionKey,
    message: prompt, deliver: false, idempotencyKey: `tokenjuice-resource-${index}` });
  assert.equal(accepted.status, "accepted");
  assert.equal(accepted.agentId, "main");
  assert.equal(accepted.sessionKey, sessionKey);
  assert.ok(typeof accepted.runId === "string" && accepted.runId.length > 0);
  const done = await rpc("agent.wait", { runId: accepted.runId, timeoutMs: 30_000 });
  assert.equal(done.runId, accepted.runId);
  assert.equal(done.status, "ok", "embedded agent did not finish successfully");
  assert.ok(!done.error);
  assert.deepEqual(done.terminalReply, { disposition: "visible", text: reply });
  state.provider.complete(index);
}

export async function assertStatistics(home, enabled) {
  const directory = path.join(home, ".tokenjuice", "artifacts", "metadata-v1");
  let segments;
  try { segments = await readdir(directory); }
  catch (error) { if (error.code !== "ENOENT" || enabled) throw error; segments = []; }
  assert.ok(segments.length <= 6, "unexpected Tokenjuice statistics segment count");
  const records = [];
  for (const name of segments) {
    assert.match(name, /^events.*\.jsonl$/);
    const file = path.join(directory, name);
    assert.ok((await stat(file)).size < 64 * 1024, "unexpected statistics volume");
    records.push(...(await readFile(file, "utf8")).trim().split("\n").filter(Boolean).map((line) => JSON.parse(line)));
  }
  assert.equal(records.length, enabled ? 6 : 0, "default statistics must record each real exec once");
  for (const { hasRaw, metadata } of records) {
    assert.equal(hasRaw, false);
    assert.equal(metadata.source, "openclaw");
    assert.equal(metadata.classification.matchedReducer, "git/status");
    assert.equal(metadata.exitCode, 0);
    assert.ok(metadata.rawChars > metadata.reducedChars && metadata.reducedChars > 0);
  }
}

export async function prepare(context, { enabled, onCleanup }) {
  await installPinnedArchive(context);
  const repository = await prepareRepository(context.root, context.env);
  context.env.OPENAI_API_KEY = syntheticKey;
  const provider = await startProvider({ ...repository, enabled, onCleanup });
  const config = JSON.parse(await readFile(context.env.OPENCLAW_CONFIG_PATH, "utf8"));
  await writeFile(context.env.OPENCLAW_CONFIG_PATH, JSON.stringify(configure(config, { enabled, workspace: repository.workspace, port: provider.port })));
  return { ...repository, provider };
}

export async function run({ rpc, measure, env }, requirements, { enabled, state }) {
  assert.deepEqual(requirements, requiredOperations);
  await measure("first-use", 1, (index) => agentCycle(rpc, state, index));
  await measure("warm-work", 5, (index) => agentCycle(rpc, state, index + 1));
  state.provider.assertFinished();
  await assertStatistics(env.HOME, enabled);
}
