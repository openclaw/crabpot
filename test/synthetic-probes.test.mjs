import assert from "node:assert/strict";
import { mkdtemp, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { test } from "node:test";
import { captureEntrypoint } from "../scripts/run-cold-import-capture.mjs";
import {
  buildSyntheticProbePlan,
  renderSyntheticProbeMarkdown,
  runCapturedSyntheticProbes,
  validateSyntheticProbePlan,
} from "../scripts/synthetic-probes.mjs";

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
  assert.equal(plan.summary.metadataOnlyCount, 1);
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

async function captureLocalFixture(lines) {
  const dir = await mkdtemp(path.join(os.tmpdir(), "crabpot-probes-"));
  const entrypoint = path.join(dir, "fixture.mjs");
  await writeFile(entrypoint, `${lines.join("\n")}\n`, "utf8");
  return captureEntrypoint(entrypoint, {
    apiOptions: { retainHandlers: true },
  });
}
