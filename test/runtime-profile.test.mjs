import assert from "node:assert/strict";
import { mkdtemp, readFile, rm } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { test } from "node:test";
import { buildRuntimeProfile, validateRuntimeProfile, writeRuntimeProfile } from "../scripts/profile-contract-runtime.mjs";

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
