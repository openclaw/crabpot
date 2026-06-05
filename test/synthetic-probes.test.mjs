import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { mkdtemp, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { test } from "node:test";
import { buildContractCapture } from "../scripts/capture-contracts.mjs";
import { readConfiguredManifest } from "../scripts/manifest-lib.mjs";
import {
  applyFixtureSyntheticFailurePolicy,
  buildSyntheticProbePlan,
  renderSyntheticProbeMarkdown,
  runCapturedSyntheticProbes,
  validateSyntheticProbePlan,
} from "../scripts/synthetic-probes.mjs";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

test("synthetic probe plan is generated from the current crabpot capture", async () => {
  const capture = await buildContractCapture();
  const plan = await buildSyntheticProbePlan({ capture });

  assert.deepEqual(validateSyntheticProbePlan(plan), []);
  assert.ok(plan.summary.probeCount > 0);
  assert.ok(plan.summary.readyCount > 0);
  assert.ok(plan.summary.metadataOnlyCount > 0);
  assert.match(renderSyntheticProbeMarkdown(plan), /Crabpot Synthetic Probes/);
});

test("synthetic probe plan marks HTTP routes blocked until descriptor inputs exist", async () => {
  const plan = await buildSyntheticProbePlan({
    capture: {
      generatedAt: "deterministic",
      summary: { fixtureCount: 1 },
      fixtures: [
        {
          id: "fixture",
          hooks: [],
          registrations: [
            {
              id: "registration.registerHttpRoute:fixture",
              registrar: "registerHttpRoute",
              assertions: ["route descriptor input is available"],
              syntheticArguments: [{}],
              ref: "fixture.js:1",
            },
          ],
        },
      ],
    },
  });

  assert.deepEqual(validateSyntheticProbePlan(plan), []);
  assert.equal(plan.summary.readyCount, 0);
  assert.equal(plan.summary.blockedCount, 1);
  assert.equal(plan.summary.directExecutionCount, 1);
  assert.equal(plan.probes[0].status, "blocked");
  assert.equal(plan.probes[0].blocker, "captured HTTP route probe requires route descriptor input");
});

test("synthetic probe plan treats descriptor registrars as metadata-only", async () => {
  const registrars = [
    "registerEmbeddingProvider",
    "registerHostedMediaResolver",
    "registerMeetingNotesSourceProvider",
    "registerModelCatalogProvider",
    "registerNodeCliFeature",
    "registerSessionAction",
    "registerTranscriptSourceProvider",
  ];
  const plan = await buildSyntheticProbePlan({
    capture: {
      generatedAt: "deterministic",
      summary: { fixtureCount: 1 },
      fixtures: [
        {
          id: "fixture",
          hooks: [],
          registrations: registrars.map((registrar) => ({
            id: `registration.${registrar}:fixture`,
            registrar,
            assertions: ["registration arguments are captured"],
            syntheticArguments: [{ id: `fixture-${registrar}` }],
            ref: "fixture.js:1",
          })),
        },
      ],
    },
  });

  assert.deepEqual(validateSyntheticProbePlan(plan), []);
  assert.equal(plan.summary.readyCount, registrars.length);
  assert.equal(plan.summary.blockedCount, 0);
  assert.equal(plan.summary.metadataOnlyCount, registrars.length);
  assert.deepEqual(
    plan.probes.map((probe) => [probe.seam, probe.status, probe.execution.mode]),
    registrars.map((registrar) => [registrar, "ready", "metadata-only"]),
  );
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

test("synthetic probe CLI honors mock SDK for OpenClaw SDK imports", async () => {
  const dir = await mkdtemp(path.join(os.tmpdir(), "crabpot-probes-sdk-"));
  const entrypoint = path.join(dir, "index.mjs");
  await writeFile(
    entrypoint,
    [
      "import { definePluginEntry } from 'openclaw/plugin-sdk';",
      "process.exitCode = 1;",
      "export default definePluginEntry({",
      "  register(api) {",
      "    api.registerProvider({ id: 'fixture-provider' });",
      "  },",
      "});",
    ].join("\n"),
    "utf8",
  );

  const result = spawnSync(
    process.execPath,
    ["scripts/synthetic-probes.mjs", "--entrypoint", entrypoint, "--mock-sdk", "--plugin-root", dir],
    {
      cwd: repoRoot,
      encoding: "utf8",
      env: { ...process.env, CRABPOT_EXECUTE_ISOLATED: "1" },
    },
  );

  assert.equal(result.status, 0, result.stderr);
  const probes = JSON.parse(result.stdout);
  assert.equal(probes.status, "captured");
  assert.equal(probes.summary.failCount, 0);
});

test("synthetic probe CLI keeps HTTP route handlers blocked without route descriptors", async () => {
  const dir = await mkdtemp(path.join(os.tmpdir(), "crabpot-probes-http-"));
  const entrypoint = path.join(dir, "index.mjs");
  await writeFile(
    entrypoint,
    [
      "export function register(api) {",
      "  api.registerHttpRoute({",
      "    method: 'GET',",
      "    path: '/metrics',",
      "    handler() {",
      "      throw new Error('handler should not be called without descriptor-aware probe input');",
      "    },",
      "  });",
      "}",
    ].join("\n"),
    "utf8",
  );

  const result = spawnSync(process.execPath, ["scripts/synthetic-probes.mjs", "--entrypoint", entrypoint], {
    cwd: repoRoot,
    encoding: "utf8",
    env: { ...process.env, CRABPOT_EXECUTE_ISOLATED: "1" },
  });

  assert.equal(result.status, 0, result.stderr);
  const probes = JSON.parse(result.stdout);
  assert.equal(probes.status, "captured");
  assert.equal(probes.summary.failCount, 0);
  assert.equal(probes.summary.blockedCount, 1);
  assert.equal(probes.results[0].status, "blocked");
  assert.equal(probes.results[0].blockedBy, "http-route-descriptor-input");
});

test("synthetic probes send subagent_ended target session keys", async () => {
  const seen = [];
  const result = await runCapturedSyntheticProbes({
    entrypoint: path.join(repoRoot, ".crabpot/workspaces/discord/index.js"),
    status: "captured",
    captured: [
      {
        kind: "hook",
        name: "subagent_ended",
      },
    ],
    retained: [
      {
        captureIndex: 0,
        handler(event) {
          seen.push(event);
        },
      },
    ],
  });

  assert.deepEqual(result.summary, { probeCount: 1, passCount: 1, failCount: 0, blockedCount: 0 });
  assert.equal(seen[0].targetSessionKey, "child-session");
  assert.equal(seen[0].targetKind, "subagent");
});

test("fixture execution policy classifies known live tool failures as blocked", () => {
  const result = applyFixtureSyntheticFailurePolicy(
    {
      entrypoint: path.join(repoRoot, ".crabpot/workspaces/clawrouter/dist/index.js"),
      status: "captured",
      summary: { probeCount: 2, passCount: 0, failCount: 2, blockedCount: 0 },
      results: [
        {
          captureIndex: 0,
          kind: "registration",
          seam: "registerTool",
          label: "registerTool.execute",
          status: "fail",
          error: "fetch failed",
        },
        {
          captureIndex: 1,
          kind: "registration",
          seam: "registerTool",
          label: "registerTool.execute",
          status: "fail",
          error: "boom",
        },
      ],
    },
    {
      fixtures: [
        {
          id: "clawrouter",
          execution: {
            blockedFailures: [
              {
                id: "clawrouter-live-network-tools",
                seam: "registerTool",
                errorIncludes: "fetch failed",
                reason: "captured tool requires live network access",
              },
            ],
          },
        },
      ],
    },
  );

  assert.deepEqual(result.summary, { probeCount: 2, passCount: 0, failCount: 1, blockedCount: 1 });
  assert.equal(result.results[0].status, "blocked");
  assert.equal(result.results[0].reason, "captured tool requires live network access");
  assert.equal(result.results[1].status, "fail");
});

test("fixture execution policy classifies beta dashboard harness gaps", async () => {
  const manifest = await readConfiguredManifest();
  const cases = [
    {
      fixture: "clawrouter",
      seam: "registerTool",
      error: "predexon_endpoint_call: invalid path ''",
      blockedBy: "clawrouter-endpoint-path-runtime",
    },
    {
      fixture: "codex-app-server",
      seam: "registerCommand",
      error: "Cannot read properties of undefined (reading 'trim')",
      blockedBy: "codex-app-server-command-text-runtime",
    },
    {
      fixture: "discord",
      seam: "subagent_ended",
      error: 'The "path" argument must be of type string. Received function resolveStateDir.name',
      blockedBy: "discord-subagent-state-dir-runtime",
    },
    {
      fixture: "memory-tencentdb",
      seam: "before_message_write",
      error: "Cannot read properties of undefined (reading 'content')",
      blockedBy: "memory-tencentdb-message-content-runtime",
    },
  ];

  for (const item of cases) {
    const result = applyFixtureSyntheticFailurePolicy(
      {
        entrypoint: path.join(repoRoot, `.crabpot/workspaces/${item.fixture}/index.js`),
        status: "captured",
        summary: { probeCount: 1, passCount: 0, failCount: 1, blockedCount: 0 },
        results: [
          {
            captureIndex: 0,
            kind: item.seam.startsWith("register") ? "registration" : "hook",
            seam: item.seam,
            label: item.seam,
            status: "fail",
            error: item.error,
          },
        ],
      },
      manifest,
    );

    assert.deepEqual(result.summary, { probeCount: 1, passCount: 0, failCount: 0, blockedCount: 1 });
    assert.equal(result.results[0].status, "blocked");
    assert.equal(result.results[0].blockedBy, item.blockedBy);
  }
});
