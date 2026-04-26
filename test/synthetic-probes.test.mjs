import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { mkdtemp, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { test } from "node:test";
import { captureEntrypoint } from "../scripts/run-cold-import-capture.mjs";
import {
  buildSyntheticProbePlan,
  renderSyntheticProbeMarkdown,
  runCapturedSyntheticProbes,
  validateSyntheticProbePlan,
} from "../scripts/synthetic-probes.mjs";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

test("synthetic probe plan turns capture assertions into ready hook and registration probes", async () => {
  const plan = await buildSyntheticProbePlan({
    capture: {
      generatedAt: "test",
      summary: { fixtureCount: 1 },
      fixtures: [
        {
          id: "fixture",
          hooks: [
            {
              id: "hook.before_tool_call:fixture:src-index",
              hook: "before_tool_call",
              ref: "src/index.ts",
              assertions: ["synthetic hook payload is accepted"],
              syntheticEvent: { toolCall: { name: "fixture_tool" } },
            },
          ],
          registrations: [
            {
              id: "registration.registerTool:fixture:src-index",
              registrar: "registerTool",
              ref: "src/index.ts",
              assertions: ["tool schema is captured"],
              syntheticArguments: [{ name: "fixture_tool" }],
            },
          ],
        },
      ],
    },
  });

  assert.deepEqual(validateSyntheticProbePlan(plan), []);
  assert.equal(plan.summary.probeCount, 2);
  assert.equal(plan.summary.readyCount, 2);
  assert.equal(plan.summary.directExecutionCount, 1);
});

test("synthetic probe plan blocks unclassified registrars before they silently pass", async () => {
  const plan = await buildSyntheticProbePlan({
    capture: {
      generatedAt: "test",
      summary: { fixtureCount: 1 },
      fixtures: [
        {
          id: "fixture",
          hooks: [],
          registrations: [
            {
              id: "registration.registerMystery:fixture:src-index",
              registrar: "registerMystery",
              ref: "src/index.ts",
              assertions: ["mystery registration is classified"],
              syntheticArguments: [{}],
            },
          ],
        },
      ],
    },
  });

  assert.equal(plan.summary.blockedCount, 1);
  assert.match(validateSyntheticProbePlan(plan).join("\n"), /not been classified/);
});

test("synthetic probe plan tracks metadata-only and opt-in execution modes", async () => {
  const plan = await buildSyntheticProbePlan({
    capture: {
      generatedAt: "test",
      summary: { fixtureCount: 1 },
      fixtures: [
        {
          id: "fixture",
          hooks: [],
          registrations: [
            {
              id: "registration.definePluginEntry:fixture:index",
              registrar: "definePluginEntry",
              ref: "src/index.ts",
              assertions: ["entry wrapper metadata is captured"],
              syntheticArguments: [{ id: "fixture" }],
            },
            {
              id: "registration.registerContextEngine:fixture:index",
              registrar: "registerContextEngine",
              ref: "src/index.ts",
              assertions: ["context engine factory metadata is captured"],
              syntheticArguments: [{ id: "engine", factory: "function" }],
            },
            {
              id: "registration.registerChannel:fixture:index",
              registrar: "registerChannel",
              ref: "src/index.ts",
              assertions: ["channel runtime remains opt-in"],
              syntheticArguments: [{ id: "channel", send() {} }],
            },
          ],
        },
      ],
    },
  });

  assert.deepEqual(validateSyntheticProbePlan(plan), []);
  assert.equal(plan.summary.metadataOnlyCount, 2);
  assert.equal(plan.summary.optInExecutionCount, 1);
  assert.equal(plan.summary.directExecutionCount, 0);
  assert.match(renderSyntheticProbeMarkdown(plan), /metadata-only/);
  assert.match(renderSyntheticProbeMarkdown(plan), /channel-opt-in/);
});

test("synthetic probes invoke retained hook and tool handlers from a captured fixture", async () => {
  const capture = await captureLocalFixture([
    "export function register(api) {",
    "  api.on('before_tool_call', (event, ctx) => ({ seen: event.toolName, ctxTool: ctx.toolName }));",
    "  api.registerTool({",
    "    name: 'fixture_tool',",
    "    inputSchema: { type: 'object' },",
    "    execute(toolCallId, params) { return { toolCallId, sawParams: typeof params === 'object' }; },",
    "  });",
    "}",
  ]);

  const result = await runCapturedSyntheticProbes(capture);

  assert.equal(result.summary.failCount, 0);
  assert.equal(result.summary.blockedCount, 0);
  assert.deepEqual(
    result.results.map((item) => `${item.status}:${item.kind}:${item.label}`),
    ["pass:hook:before_tool_call", "pass:registration:registerTool.execute"],
  );
});

test("synthetic probes preserve hook return semantics and privacy fixtures", async () => {
  const capture = await captureLocalFixture([
    "export function register(api) {",
    "  api.on('before_tool_call', (event) => ({ decision: 'block', reason: event.toolName }));",
    "  api.on('before_prompt_build', async (event) => ({ messages: [...event.messages, { role: 'system', content: 'probe' }] }));",
    "  api.on('llm_input', (event) => {",
    "    const payload = JSON.stringify(event);",
    "    if (payload.includes('secret')) throw new Error('privacy leak');",
    "    return { redacted: payload.includes('[redacted fixture input]') };",
    "  });",
    "  api.on('agent_end', (event) => ({ transcriptEntries: event.transcript.length }));",
    "  api.on('before_agent_start', (event) => ({ legacyStartup: event.agentId }));",
    "}",
  ]);

  const result = await runCapturedSyntheticProbes(capture);

  assert.equal(result.summary.failCount, 0);
  assert.deepEqual(
    result.results.map((item) => [item.seam, item.status, item.output?.keys ?? item.output?.type]),
    [
      ["before_tool_call", "pass", ["decision", "reason"]],
      ["before_prompt_build", "pass", ["messages"]],
      ["llm_input", "pass", ["redacted"]],
      ["agent_end", "pass", ["transcriptEntries"]],
      ["before_agent_start", "pass", ["legacyStartup"]],
    ],
  );
});

test("synthetic probes report handler failures without stopping the full run", async () => {
  const capture = await captureLocalFixture([
    "export function register(api) {",
    "  api.on('before_tool_call', () => { throw new Error('nope'); });",
    "}",
  ]);

  const result = await runCapturedSyntheticProbes(capture);

  assert.equal(result.summary.failCount, 1);
  assert.match(result.results[0].error, /nope/);
});

test("synthetic probes execute direct registrar handlers and keep opt-in registrars guarded", async () => {
  const capture = await captureLocalFixture([
    "export function register(api) {",
    "  api.registerCli({ name: 'cli', run(event) { return { cli: event.registrar }; } });",
    "  api.registerCommand({ name: 'command', handler(event) { return { command: event.property }; } });",
    "  api.registerGatewayMethod({ name: 'gateway.method', handler(event) { return { gateway: event.source }; } });",
    "  api.registerHttpRoute({ method: 'POST', path: '/probe', handler(event) { return { route: event.body }; } });",
    "  api.registerInteractiveHandler({ id: 'interactive', handler(event) { return { interactive: event.headers }; } });",
    "  api.registerSpeechProvider({ id: 'speech', speak(event) { return { speech: event.input }; } });",
    "  api.registerChannel({ id: 'channel', send(event) { return { channel: event.source }; } });",
    "}",
  ]);

  const guarded = await runCapturedSyntheticProbes(capture);
  assert.equal(guarded.summary.passCount, 5);
  assert.equal(guarded.summary.blockedCount, 2);
  assert.ok(guarded.results.some((item) => item.reason?.includes("includeProviderCapabilities=true")));
  assert.ok(guarded.results.some((item) => item.reason?.includes("includeChannelRuntime=true")));

  const unguarded = await runCapturedSyntheticProbes(capture, {
    includeChannelRuntime: true,
    includeProviderCapabilities: true,
  });
  assert.equal(unguarded.summary.failCount, 0);
  assert.equal(unguarded.summary.blockedCount, 0);
  assert.deepEqual(
    unguarded.results.map((item) => item.label),
    [
      "registerCli.run",
      "registerCommand.handler",
      "registerGatewayMethod.handler",
      "registerHttpRoute.handler",
      "registerInteractiveHandler.handler",
      "registerSpeechProvider.speak",
      "registerChannel.send",
    ],
  );
});

test("synthetic probes mark captured handlers blocked when retention is disabled", async () => {
  const dir = await mkdtemp(path.join(os.tmpdir(), "crabpot-probes-"));
  const entrypoint = path.join(dir, "fixture.mjs");
  await writeFile(
    entrypoint,
    "export function register(api) { api.on('before_tool_call', () => undefined); }\n",
    "utf8",
  );

  const capture = await captureEntrypoint(entrypoint);
  const result = await runCapturedSyntheticProbes(capture);

  assert.equal(result.summary.blockedCount, 1);
  assert.match(result.results[0].reason, /retention/);
});

test("synthetic probes keep service lifecycle execution opt-in", async () => {
  const capture = await captureLocalFixture([
    "export function register(api) {",
    "  api.registerService({",
    "    name: 'fixture_service',",
    "    start() { return { started: true }; },",
    "  });",
    "}",
  ]);

  const blocked = await runCapturedSyntheticProbes(capture);
  assert.equal(blocked.summary.blockedCount, 1);
  assert.match(blocked.results[0].reason, /includeLifecycle=true/);

  const executed = await runCapturedSyntheticProbes(capture, { includeLifecycle: true });
  assert.equal(executed.summary.passCount, 1);
  assert.equal(executed.results[0].label, "registerService.start");
});

test("synthetic probes keep context engine factories metadata-only", async () => {
  const capture = await captureLocalFixture([
    "export function register(api) {",
    "  api.registerContextEngine('fixture-context-engine', () => ({",
    "    assemble() { return { messages: [] }; },",
    "  }));",
    "}",
  ]);

  const result = await runCapturedSyntheticProbes(capture);

  assert.equal(result.summary.failCount, 0);
  assert.equal(result.summary.blockedCount, 0);
  assert.equal(result.results[0].label, "registerContextEngine");
  assert.equal(result.results[0].output.mode, "metadata-only");
});

test("synthetic probe CLI refuses isolated execution without opt-in", async () => {
  const dir = await mkdtemp(path.join(os.tmpdir(), "crabpot-probes-"));
  const entrypoint = path.join(dir, "fixture.mjs");
  await writeFile(entrypoint, "export function register(api) { api.registerTool({ name: 'fixture' }); }\n", "utf8");

  const result = spawnSync(process.execPath, ["scripts/synthetic-probes.mjs", "--entrypoint", entrypoint], {
    cwd: repoRoot,
    encoding: "utf8",
    env: { ...process.env, CRABPOT_EXECUTE_ISOLATED: "" },
  });

  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /CRABPOT_EXECUTE_ISOLATED=1/);
});

async function captureLocalFixture(lines) {
  const dir = await mkdtemp(path.join(os.tmpdir(), "crabpot-probes-"));
  const entrypoint = path.join(dir, "fixture.mjs");
  await writeFile(entrypoint, `${lines.join("\n")}\n`, "utf8");
  return captureEntrypoint(entrypoint, {
    apiOptions: { retainHandlers: true },
  });
}
