import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { mkdtemp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { test } from "node:test";
import { fileURLToPath, pathToFileURL } from "node:url";
import { buildImportLoopProfile, renderImportLoopProfileMarkdown, validateImportLoopProfile } from "../scripts/import-loop-profile.mjs";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

test("import loop profile measures repeated cold capture subprocesses", async () => {
  const profile = await buildImportLoopProfile({ runs: 2 });

  assert.deepEqual(validateImportLoopProfile(profile), []);
  assert.equal(profile.summary.runs, 2);
  assert.equal(profile.summary.baselineRuns, 2);
  assert.equal(profile.summary.baselineFailCount, 0);
  assert.equal(profile.summary.failCount, 0);
  assert.ok(profile.summary.capturedCount >= 2);
  assert.ok(profile.summary.maxPluginPeakRssDeltaMb >= 0);
  assert.ok(profile.summary.p50WallMs > 0);
  assert.ok(profile.samples.every((sample) => sample.exitCode === 0));
  assert.match(renderImportLoopProfileMarkdown(profile), /Import Loop Profile/);
  assert.match(renderImportLoopProfileMarkdown(profile), /Plugin CPU Delta/);
});

test("import loop markdown surfaces OpenClaw lifecycle phases when present", () => {
  const markdown = renderImportLoopProfileMarkdown({
    generatedAt: "deterministic",
    mode: "openclaw-loader-lifecycle-profile",
    entrypoint: "fixture.mjs",
    summary: {
      runs: 1,
      p50WallMs: 100,
      p95WallMs: 100,
      p50PluginWallDeltaMs: 10,
      p95PluginWallDeltaMs: 10,
      openClawLifecycleCount: 1,
      p50OpenClawImportMs: 12,
      p95OpenClawImportMs: 12,
      p50OpenClawActivationMs: 3,
      p95OpenClawActivationMs: 3,
      maxPeakRssMb: 40,
      maxCpuMsEstimate: 20,
      maxPluginPeakRssDeltaMb: 5,
      maxPluginCpuDeltaMsEstimate: 2,
      rssSampleCount: 1,
      cpuSampleCount: 1,
      capturedCount: 2,
      failCount: 0,
    },
    samples: [
      {
        index: 0,
        status: "captured",
        capturedCount: 2,
        openClawLifecycle: {
          importMs: 12,
          activationMs: 3,
        },
        pluginWallDeltaMs: 10,
        pluginPeakRssDeltaMb: 5,
        pluginCpuDeltaMsEstimate: 2,
        wallMs: 100,
        peakRssMb: 40,
        cpuMsEstimate: 20,
        rssSampleCount: 1,
        cpuSampleCount: 1,
        exitCode: 0,
      },
    ],
  });

  assert.match(markdown, /OpenClaw Import/);
  assert.match(markdown, /OpenClaw Activate/);
  assert.match(markdown, /p50OpenClawImportMs/);
});

test("import loop validation fails requested OpenClaw lifecycle profiles without lifecycle samples", () => {
  const errors = validateImportLoopProfile(
    {
      summary: {
        openClawLifecycleCount: 0,
      },
    },
    { requireOpenClawLifecycle: true },
  );

  assert.deepEqual(errors, [
    "OpenClaw lifecycle profile requested but no import+activate samples were captured",
  ]);
});

async function lifecycleHost(t, {
  importMs = "2.0", activationMs = "1.0", status = "loaded", throws = false,
  throwsAfterActivation = false, cleanupFailure = null, asyncLoader = false,
} = {}) {
  const dir = await mkdtemp(path.join(os.tmpdir(), "crabpot-openclaw-lifecycle-"));
  const openclawRoot = path.join(dir, "openclaw");
  const pluginDir = path.join(dir, "plugin");
  const loaderPath = path.join(dir, "ts-loader.mjs");
  const observationsPath = path.join(dir, "observations.jsonl");
  const readObservations = async () => (await readFile(observationsPath, "utf8")).trim().split("\n").map(JSON.parse);
  t.after(async () => {
    if (existsSync(observationsPath)) {
      for (const { source, state } of (await readObservations()).filter(({ event }) => event === "load")) {
        await rm(path.dirname(source), { recursive: true, force: true });
        await rm(state, { recursive: true, force: true });
      }
    }
    await rm(dir, { recursive: true, force: true });
  });
  await writeFile(
    loaderPath,
    [
      "import { readFile } from 'node:fs/promises';",
      "export async function load(url, context, nextLoad) {",
      "  if (url.endsWith('.ts')) {",
      "    return { format: 'module', shortCircuit: true, source: await readFile(new URL(url), 'utf8') };",
      "  }",
      "  return nextLoad(url, context);",
      "}",
      "",
    ].join("\n"),
    "utf8",
  );
  await mkdir(path.join(openclawRoot, "src", "plugins"), { recursive: true });
  await mkdir(pluginDir, { recursive: true });
  await writeFile(path.join(openclawRoot, "src", "plugins", "fixture.mjs"), `
import assert from 'node:assert/strict';
import { appendFileSync, existsSync } from 'node:fs';
import path from 'node:path';
import { DatabaseSync } from 'node:sqlite';
import { setTimeout } from 'node:timers/promises';
export const cache = {};
let active;
let roots;
let db;
let loadSettled = ${!asyncLoader};
let ownerCreated = false;
const failure = ${JSON.stringify(cleanupFailure)};
function observe(event) {
  appendFileSync(${JSON.stringify(observationsPath)}, JSON.stringify({ event, ...roots }) + '\\n');
}
function assertOwned() {
  assert.equal(process.env.OPENCLAW_STATE_DIR, roots.state);
  assert.equal(process.env.HOME, roots.state);
  assert.equal(existsSync(roots.source), true);
  assert.equal(existsSync(roots.state), true);
  const outputIndex = process.argv.indexOf('--output');
  if (outputIndex >= 0) assert.equal(existsSync(process.argv[outputIndex + 1]), false);
}
export function acquire(source, state) {
  roots = { source, state };
  observe('load');
  db = new DatabaseSync(path.join(state, 'owner.sqlite'));
  db.exec('CREATE TABLE owner (value INTEGER); BEGIN IMMEDIATE; INSERT INTO owner VALUES (1)');
}
export function activate(registry) { active = registry; return registry; }
export async function settleLoad(registry) {
  const plugins = registry.plugins;
  Object.defineProperty(registry, 'plugins', { get() {
    assert.equal(loadSettled, true, 'registry reads must wait for loader settlement');
    observe('registry-read');
    return plugins;
  } });
  observe('load-pending');
  await new Promise((resolve) => setImmediate(resolve));
  assertOwned();
  assert.equal(ownerCreated, false, 'owner adoption must wait for loader settlement');
  loadSettled = true;
  observe('load-settled');
  if (${throwsAfterActivation}) throw new Error('lifecycle-loader-sentinel');
  return registry;
}
export function getActivePluginRegistry() { return active; }
export function createPluginRegistryOwner(registry, workspaceDir) {
  assert.equal(loadSettled, true, 'owner adoption must wait for loader settlement');
  assert.equal(registry, active);
  assert.equal(workspaceDir, roots.state);
  ownerCreated = true;
  if (${asyncLoader}) observe('owner');
  return { async close() {
    assertOwned();
    await setTimeout(20);
    assertOwned();
    observe('registry');
    if (failure === 'retained') throw new Error('lifecycle-retained-sentinel');
    active = undefined;
    return {
      memoryErrors: failure === 'memory' ? [new Error('lifecycle-memory-sentinel')] : [],
      pluginFailures: failure === 'plugin' ? [{ error: new Error('lifecycle-plugin-sentinel') }] : [],
    };
  } };
}
export function getPluginCache() { return cache; }
export async function retirePluginCache(target) {
  assert.equal(target, cache);
  assert.equal(active, undefined, 'registry must retire before its inventory');
  assertOwned();
  await setTimeout(20);
  assertOwned();
  db.exec('COMMIT');
  db.close();
  observe('cache');
  if (failure === 'cache-throw') throw new Error('lifecycle-cache-sentinel');
  return { failures: failure === 'cache' ? [{ error: new Error('lifecycle-cache-sentinel') }] : [] };
}
`, "utf8");
  await writeFile(path.join(openclawRoot, "src", "plugins", "runtime.ts"),
    "export { createPluginRegistryOwner, getActivePluginRegistry } from './fixture.mjs';\n");
  await writeFile(path.join(openclawRoot, "src", "plugins", "plugin-cache.ts"),
    "export { getPluginCache, retirePluginCache } from './fixture.mjs';\n");
  await writeFile(
    path.join(openclawRoot, "src", "plugins", "loader.ts"),
    [
      "import assert from 'node:assert/strict';",
      "import { acquire, activate, settleLoad } from './fixture.mjs';",
      "assert.equal(process.env.OPENCLAW_DIAGNOSTICS, 'plugin.load-profile');",
      "assert.equal(process.env.HOME, process.env.OPENCLAW_STATE_DIR);",
      "assert.match(process.env.HOME, /crabpot-openclaw-state-/);",
      "assert.equal(process.env.OPENCLAW_DISABLE_BUNDLED_PLUGINS, '1');",
      "export function loadAndActivateRootPluginRegistry(options) {",
      "  const source = options.config.plugins.load.paths[0];",
      "  acquire(source, options.workspaceDir);",
      "  assert.equal(options.cache, false);",
      "  assert.equal(options.workspaceDir, process.env.OPENCLAW_STATE_DIR);",
      `  if (${throws}) throw new Error('lifecycle-loader-sentinel');`,
      "  const windowsSource = 'C:\\\\Users\\\\runner\\\\AppData\\\\Local\\\\Temp\\\\crabpot-openclaw-plugin-AbCd\\\\index.mjs';",
      ...(importMs === null ? [] : [
        `  console.error('[plugin-load-profile] phase=full plugin=crabpot-lifecycle-probe elapsedMs=' + ${JSON.stringify(importMs)} + ' source=' + source);`,
      ]),
      ...(activationMs === null ? [] : [
        `  console.error('[plugin-load-profile] phase=full:register plugin=crabpot-lifecycle-probe elapsedMs=' + ${JSON.stringify(activationMs)} + ' mode=full source=' + windowsSource);`,
      ]),
      "  setInterval(() => undefined, 1000);",
      `  const registry = activate({ plugins: [{ id: 'crabpot-lifecycle-probe', status: ${JSON.stringify(status)}, ${status === "error" ? "error: 'lifecycle-register-sentinel'" : ""} }] });`,
      `  if (${asyncLoader}) return settleLoad(registry);`,
      `  if (${throwsAfterActivation}) throw new Error('lifecycle-loader-sentinel');`,
      "  return registry;",
      "}",
      "",
    ].join("\n"),
    "utf8",
  );
  const entrypoint = path.join(pluginDir, "index.mjs");
  await writeFile(
    entrypoint,
    "export default { register(api) { api.registerTool?.({ name: 'fixture' }); } };\n",
    "utf8",
  );

  const captureCommand = ({ entrypoint: input = entrypoint, outputPath } = {}) => ({
    command: process.execPath,
    args: [
      "--experimental-loader",
      pathToFileURL(loaderPath).href,
      path.join(repoRoot, "scripts/run-openclaw-lifecycle-capture.mjs"),
      input,
      ...(outputPath ? ["--output", outputPath] : []),
    ],
    cwd: repoRoot,
    env: {
      CRABPOT_EXECUTE_ISOLATED: "1",
      CRABPOT_FIXTURE_ROOT: dir,
      CRABPOT_OPENCLAW_DIR: openclawRoot,
      CRABPOT_OPENCLAW_LABEL: "fake-openclaw",
    },
  });
  return {
    dir,
    entrypoint,
    captureCommand,
    run({ output = false } = {}) {
      const command = captureCommand({ outputPath: output ? path.join(dir, "capture.json") : undefined });
      return spawnSync(command.command, command.args, {
        cwd: command.cwd,
        encoding: "utf8",
        env: { ...process.env, ...command.env },
        timeout: 2_000,
      });
    },
    async assertCleanup(expectedCalls, retained = false) {
      const events = await readObservations();
      const observations = events.filter(({ event }) => event === "load");
      assert.equal(observations.length, expectedCalls);
      for (const { source, state } of observations) {
        assert.equal(existsSync(path.dirname(source)), retained, source);
        assert.equal(existsSync(state), retained, state);
        assert.deepEqual(events.filter((event) => event.state === state).map(({ event }) => event),
          asyncLoader ? ["load", "load-pending", "load-settled", "owner", ...(throwsAfterActivation ? [] : ["registry-read"]), "registry", "cache"]
            : throws ? ["load", "cache"] : cleanupFailure === "retained" ? ["load", "registry"] : ["load", "registry", "cache"]);
      }
      assert.equal(new Set(observations.map(({ state }) => state)).size, expectedCalls);
      if (retained || throws || throwsAfterActivation) assert.equal(existsSync(path.join(dir, "capture.json")), false);
    },
  };
}

test("OpenClaw lifecycle capture CLI retires SQLite custody before deleting roots and writing output", async (t) => {
  const host = await lifecycleHost(t);
  const result = host.run({ output: true });
  assert.equal(result.error?.code, undefined, result.error?.message);
  assert.equal(result.status, 0, result.stderr);
  const capture = JSON.parse(await readFile(path.join(host.dir, "capture.json"), "utf8"));
  assert.equal(capture.status, "captured");
  assert.equal(capture.openClawLifecycle.status, "loaded");
  assert.equal(capture.openClawLifecycle.importMs, 2);
  assert.equal(capture.openClawLifecycle.activationMs, 1);
  assert.equal(capture.openClawLifecycle.phases[0].source, "crabpot-lifecycle-probe/index.mjs");
  assert.equal(capture.openClawLifecycle.phases[1].source, "crabpot-lifecycle-probe/index.mjs");
  await host.assertCleanup(1);
});

test("OpenClaw lifecycle capture awaits asynchronous loader settlement before adoption and output", async (t) => {
  for (const throwsAfterActivation of [false, true]) {
    await t.test(throwsAfterActivation ? "rejected load" : "resolved load", async (t) => {
      const host = await lifecycleHost(t, { asyncLoader: true, throwsAfterActivation });
      const result = host.run({ output: true });
      assert.equal(result.error?.code, undefined, result.error?.message);
      assert.equal(result.status, throwsAfterActivation ? 1 : 0, result.stderr);
      assert.equal(result.stdout, "");
      if (throwsAfterActivation) {
        assert.match(result.stderr, /lifecycle-loader-sentinel/);
      } else {
        const capture = JSON.parse(await readFile(path.join(host.dir, "capture.json"), "utf8"));
        assert.equal(capture.status, "captured");
        assert.equal(capture.openClawLifecycle.status, "loaded");
        assert.equal(capture.captured.length, 2);
      }
      await host.assertCleanup(1);
    });
  }
});

test("OpenClaw lifecycle capture and parent require loaded status and valid phases", async (t) => {
  for (const [name, options, captured] of [
    ["zero durations", { importMs: "0.0", activationMs: "0.0" }, true],
    ["missing import", { importMs: null }, false],
    ["missing registration", { activationMs: null }, false],
    ...[".", "1.2.3", "9".repeat(310)].flatMap((token) => [
      [`malformed import ${token.slice(0, 10)}`, { importMs: token }, false],
      [`malformed registration ${token.slice(0, 10)}`, { activationMs: token }, false],
    ]),
    ["failed registration with timings", { status: "error" }, false],
  ]) {
    await t.test(name, async (t) => {
      const host = await lifecycleHost(t, options);
      const result = host.run();
      assert.equal(result.error?.code, undefined, result.error?.message);
      assert.equal(result.status, 0, result.stderr);
      const capture = JSON.parse(result.stdout);
      const profile = await buildImportLoopProfile({
        rootDir: host.dir,
        outputDir: path.join(host.dir, "profile"),
        entrypoint: host.entrypoint,
        captureCommand: host.captureCommand,
        runs: 1,
      });
      const errors = validateImportLoopProfile(profile, { requireOpenClawLifecycle: true });
      assert.equal(errors.length === 0, captured, JSON.stringify({ errors, capture }));
      assert.equal(capture.status, captured ? "captured" : "failed");
      assert.equal(capture.captured.length, captured ? 2 : 0);
      assert.equal(profile.summary.failCount, captured ? 0 : 1);
      assert.equal(profile.summary.baselineFailCount, captured ? 0 : 1);
      if (captured) {
        assert.equal(capture.openClawLifecycle.importMs, 0);
        assert.equal(capture.openClawLifecycle.activationMs, 0);
      } else if (options.status === "error") {
        assert.equal(capture.error, "lifecycle-register-sentinel");
        assert.equal(capture.openClawLifecycle.phases.length, 2);
      }
      await host.assertCleanup(3);
    });
  }
});

test("OpenClaw lifecycle capture CLI cleans up after a thrown loader exception", async (t) => {
  const host = await lifecycleHost(t, { throws: true });
  const result = host.run();
  assert.equal(result.error?.code, undefined, result.error?.message);
  assert.equal(result.status, 1, result.stderr);
  assert.match(result.stderr, /lifecycle-loader-sentinel/);
  assert.equal(result.stdout, "");
  await host.assertCleanup(1);
});

test("OpenClaw lifecycle capture retires a root published before the loader throws", async (t) => {
  const host = await lifecycleHost(t, { throwsAfterActivation: true });
  const result = host.run({ output: true });
  assert.equal(result.error?.code, undefined, result.error?.message);
  assert.equal(result.status, 1, result.stderr);
  assert.match(result.stderr, /lifecycle-loader-sentinel/);
  await host.assertCleanup(1);
});

test("OpenClaw lifecycle capture preserves failed teardown without publishing success", async (t) => {
  for (const [name, options, sentinels] of [
    ["retained owner", { cleanupFailure: "retained" }, ["retained"]],
    ["memory failures", { cleanupFailure: "memory" }, ["memory"]],
    ["plugin failures", { cleanupFailure: "plugin" }, ["plugin"]],
    ["cache failures", { cleanupFailure: "cache" }, ["cache"]],
    ["loader and returned cleanup failure", { throws: true, cleanupFailure: "cache" }, ["loader", "cache"]],
    ["loader and thrown cleanup failure", { throws: true, cleanupFailure: "cache-throw" }, ["loader", "cache"]],
    ["published loader and retained owner", { throwsAfterActivation: true, cleanupFailure: "retained" }, ["loader", "retained"]],
  ]) {
    await t.test(name, async (t) => {
      const host = await lifecycleHost(t, options);
      const result = host.run({ output: true });
      assert.equal(result.error?.code, undefined, result.error?.message);
      assert.equal(result.status, 1, result.stderr);
      assert.equal(result.stdout, "");
      for (const sentinel of sentinels) assert.match(result.stderr, new RegExp(`lifecycle-${sentinel}-sentinel`));
      await host.assertCleanup(1, true);
    });
  }
});
