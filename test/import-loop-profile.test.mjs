import assert from "node:assert/strict";
import { test } from "node:test";
import { buildImportLoopProfile, renderImportLoopProfileMarkdown, validateImportLoopProfile } from "../scripts/import-loop-profile.mjs";

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
