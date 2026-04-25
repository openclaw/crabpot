import assert from "node:assert/strict";
import { mkdtemp, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { test } from "node:test";
import { captureEntrypoint } from "../scripts/run-cold-import-capture.mjs";
import {
  buildSyntheticProbePlan,
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

async function captureLocalFixture(lines) {
  const dir = await mkdtemp(path.join(os.tmpdir(), "crabpot-probes-"));
  const entrypoint = path.join(dir, "fixture.mjs");
  await writeFile(entrypoint, `${lines.join("\n")}\n`, "utf8");
  return captureEntrypoint(entrypoint, {
    apiOptions: { retainHandlers: true },
  });
}
