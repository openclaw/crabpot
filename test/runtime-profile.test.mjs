import assert from "node:assert/strict";
import { test } from "node:test";
import { buildRuntimeProfile, renderRuntimeProfileMarkdown, validateRuntimeProfile } from "../scripts/profile-contract-runtime.mjs";

test("runtime profile records boot time and target registry surface", async () => {
  const report = {
    targetOpenClaw: {
      status: "ok",
      configuredPath: "../openclaw",
      compatRecordCount: 2,
      hookNameCount: 3,
      apiRegistrarCount: 4,
      capturedRegistrarCount: 5,
      sdkExportCount: 6,
      manifestFieldCount: 7,
      manifestContractFieldCount: 8,
    },
    fixtures: [
      {
        hooks: ["before_tool_call"],
        registrations: ["registerTool"],
        sdkImports: ["openclaw/plugin-sdk"],
      },
    ],
    summary: {
      contractProbeCount: 9,
      issueCount: 10,
    },
  };
  const inspection = {
    inspections: [{ sourceFiles: ["plugins/fixture/index.js"] }],
  };
  const profile = await buildRuntimeProfile({
    commands: [
      {
        id: "node-boot",
        label: "Node boot",
        category: "baseline",
        args: ["-e", "setTimeout(() => {}, 100)"],
        openclaw: false,
      },
      {
        id: "compat-report-registry",
        label: "Compatibility report plus target registry parse",
        category: "target-registry",
        args: ["-e", "setTimeout(() => {}, 100)"],
        openclaw: false,
      },
      {
        id: "platform-probes",
        label: "Platform and loader probes",
        category: "platform-probes",
        args: ["-e", "setTimeout(() => {}, 100)"],
        openclaw: false,
      },
      {
        id: "import-loop-profile",
        label: "Repeated cold import capture loop",
        category: "import-loop",
        args: ["-e", "setTimeout(() => {}, 100)"],
        openclaw: false,
      },
    ],
    generatedAt: "test",
    runs: 1,
    report,
    inspection,
    openclawPath: false,
  });

  assert.deepEqual(validateRuntimeProfile(profile), []);
  assert.equal(profile.targetOpenClaw.compatRecords, 2);
  assert.equal(profile.fixtureInventory.sourceFiles, 1);
  assert.equal(profile.platform.os, process.platform);
  assert.ok(profile.summary.maxCpuMsEstimate >= 0);
  assert.ok(Number.isFinite(profile.summary.maxHarnessHeapDeltaMb));
  assert.ok(profile.commands.some((command) => command.id === "node-boot" && command.wallMs.max > 0));
  assert.ok(profile.commands.some((command) => command.id === "platform-probes"));
  assert.ok(profile.commands.some((command) => command.id === "import-loop-profile"));
  assert.ok(profile.groups.some((group) => group.category === "target-registry" && group.commands.includes("compat-report-registry")));
  assert.ok(profile.groups.every((group) => group.p50WallMs > 0));
  assert.match(renderRuntimeProfileMarkdown(profile), /Target OpenClaw Registry Surface/);
  assert.match(renderRuntimeProfileMarkdown(profile), /Category Rollups/);
  assert.match(renderRuntimeProfileMarkdown(profile), /CPU estimate/);
});

test("runtime profile applies the static command deadline to every sample and preserves failures", async () => {
  const previous = process.env.CRABPOT_STATIC_STEP_TIMEOUT_MS;
  process.env.CRABPOT_STATIC_STEP_TIMEOUT_MS = "100";
  try {
    const profile = await buildRuntimeProfile({
      commands: [{ id: "slow-command", args: ["-e", "setTimeout(() => {}, 400)"], openclaw: false }],
      runs: 3,
      report: { fixtures: [] },
      inspection: { inspections: [] },
    });
    assert.equal(profile.commands[0].samples.length, 3, "retain every requested sample");
    assert.ok(profile.commands[0].samples.every((sample) => sample.timedOut && sample.exitCode !== 0));
    assert.match(validateRuntimeProfile(profile).join("\n"), /slow-command: nonzero exit code/);
  } finally {
    if (previous === undefined) delete process.env.CRABPOT_STATIC_STEP_TIMEOUT_MS;
    else process.env.CRABPOT_STATIC_STEP_TIMEOUT_MS = previous;
  }
});

test("runtime profile children preserve Node options and enforce the 2 GiB heap", async () => {
  const profile = await buildRuntimeProfile({
    commands: [{ id: "heap-options", args: ["-e", "console.log(process.env.NODE_OPTIONS); setTimeout(() => {}, 75)"], openclaw: false }],
    env: { NODE_OPTIONS: "--conditions=crabpot-profile --max-old-space-size=4096" },
    report: { fixtures: [] },
    inspection: { inspections: [] },
  });
  assert.deepEqual(validateRuntimeProfile(profile), []);
  assert.match(profile.commands[0].samples[0].stdoutPreview,
    /--conditions=crabpot-profile --max-old-space-size=4096 --max-old-space-size=2048/);
});
