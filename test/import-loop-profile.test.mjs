import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { mkdtemp, mkdir, writeFile } from "node:fs/promises";
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

test("OpenClaw lifecycle capture CLI exits after writing output when loader leaves active handles", async () => {
  const dir = await mkdtemp(path.join(os.tmpdir(), "crabpot-openclaw-lifecycle-"));
  const openclawRoot = path.join(dir, "openclaw");
  const pluginDir = path.join(dir, "plugin");
  const loaderPath = path.join(dir, "ts-loader.mjs");
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
  await writeFile(
    path.join(openclawRoot, "src", "plugins", "loader.ts"),
    [
      "export function clearPluginRegistryLoadCache() {}",
      "export function clearActivatedPluginRuntimeState() {}",
      "export function loadOpenClawPlugins(options) {",
      "  if (process.env.OPENCLAW_DIAGNOSTICS !== 'plugin.load-profile') {",
      "    throw new Error('plugin load profiling diagnostics are disabled');",
      "  }",
      "  const source = options.config.plugins.load.paths[0];",
      "  const windowsSource = 'C:\\\\Users\\\\runner\\\\AppData\\\\Local\\\\Temp\\\\crabpot-openclaw-plugin-AbCd\\\\index.mjs';",
      "  console.error(`[plugin-load-profile] phase=full plugin=crabpot-lifecycle-probe elapsedMs=2.0 source=${source}`);",
      "  console.error(`[plugin-load-profile] phase=full:register plugin=crabpot-lifecycle-probe elapsedMs=1.0 source=${windowsSource}`);",
      "  setInterval(() => undefined, 1000);",
      "  return { plugins: [{ id: 'crabpot-lifecycle-probe', status: 'loaded' }] };",
      "}",
      "",
    ].join("\n"),
    "utf8",
  );
  await writeFile(
    path.join(openclawRoot, "src", "plugins", "runtime.ts"),
    "export function resetPluginRuntimeStateForTest() {}\n",
    "utf8",
  );
  const entrypoint = path.join(pluginDir, "index.mjs");
  await writeFile(
    entrypoint,
    "export default { register(api) { api.registerTool?.({ name: 'fixture' }); } };\n",
    "utf8",
  );

  const result = spawnSync(
    process.execPath,
    [
      "--experimental-loader",
      pathToFileURL(loaderPath).href,
      "scripts/run-openclaw-lifecycle-capture.mjs",
      entrypoint,
    ],
    {
      cwd: repoRoot,
      encoding: "utf8",
      env: {
        ...process.env,
        CRABPOT_EXECUTE_ISOLATED: "1",
        CRABPOT_FIXTURE_ROOT: repoRoot,
        CRABPOT_OPENCLAW_DIR: openclawRoot,
        CRABPOT_OPENCLAW_LABEL: "fake-openclaw",
      },
      timeout: 2_000,
    },
  );

  assert.equal(result.error?.code, undefined, result.error?.message);
  assert.equal(result.status, 0, result.stderr);
  const capture = JSON.parse(result.stdout);
  assert.equal(capture.status, "captured");
  assert.equal(capture.openClawLifecycle.status, "loaded");
  assert.equal(capture.openClawLifecycle.importMs, 2);
  assert.equal(capture.openClawLifecycle.activationMs, 1);
  assert.equal(capture.openClawLifecycle.phases[0].source, "crabpot-lifecycle-probe/index.mjs");
  assert.equal(capture.openClawLifecycle.phases[1].source, "crabpot-lifecycle-probe/index.mjs");
});
