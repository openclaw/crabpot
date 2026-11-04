import assert from "node:assert/strict";
import { mkdtemp, readFile, rm } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { test } from "node:test";
import { buildRuntimeProfile, renderRuntimeProfileMarkdown, validateRuntimeProfile, writeRuntimeProfile } from "../scripts/profile-contract-runtime.mjs";

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

test("runtime profile artifacts retain a failed child's exception between successful samples", async (t) => {
  const rootDir = await mkdtemp(path.join(os.tmpdir(), "crabpot-profile-failure-"));
  t.after(() => rm(rootDir, { recursive: true, force: true }));
  const orderPath = path.join(rootDir, "order.json");
  const profile = await buildRuntimeProfile({
    rootDir,
    commands: [{ id: "synthetic-capture", openclaw: false, args: ["-e", `
      const fs = require('node:fs');
      const file = ${JSON.stringify(orderPath)};
      const order = fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf8')) : [];
      order.push(order.length + 1);
      fs.writeFileSync(file, JSON.stringify(order));
      if (order.length === 2) throw new Error('synthetic capture failure');
      console.log('capture-' + order.length);
    `] }],
    runs: 3,
    report: { fixtures: [] },
    inspection: { inspections: [] },
  });
  const jsonPath = path.join(rootDir, "profile.json");
  await writeRuntimeProfile(profile, { jsonPath, markdownPath: path.join(rootDir, "profile.md") });
  const written = JSON.parse(await readFile(jsonPath, "utf8"));
  assert.deepEqual(JSON.parse(await readFile(orderPath, "utf8")), [1, 2, 3]);
  const samples = written.commands[0].samples;
  assert.deepEqual(samples.map((sample) => sample.exitCode), [0, 1, 0]);
  assert.deepEqual(samples.filter((sample) => sample.exitCode === 0).map((sample) => sample.stdoutPreview),
    ["capture-1", "capture-3"]);
  const failed = samples[1];
  assert.equal(failed.timedOut, false);
  assert.equal(failed.cancelled, false);
  assert.equal(failed.timeoutMs, 600_000);
  assert.match(failed.processOutput.stderr, /Error: synthetic capture failure/);
  assert.match(failed.processOutput.stderr, /Node\.js v/);
  assert.equal(failed.processOutput.outputTruncated, false);
  assert.doesNotMatch(failed.stderrPreview, /synthetic capture failure/);
  assert.match(validateRuntimeProfile(written).join("\n"), /synthetic-capture: nonzero exit code\(s\): 0, 1/);
});
