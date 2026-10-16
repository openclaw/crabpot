import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { test } from "node:test";
import { staticCommandTimeoutMs } from "../scripts/static-step.mjs";
import { profileCommands } from "../scripts/runtime-profile-plan.mjs";

test("only the aggregate profiler receives a budget for every metadata input and sample", () => {
  const previous = process.env.CRABPOT_STATIC_STEP_TIMEOUT_MS;
  delete process.env.CRABPOT_STATIC_STEP_TIMEOUT_MS;
  try {
    assert.equal(profileCommands.length, 9);
    assert.equal(staticCommandTimeoutMs(["scripts/generate-report.mjs"]), 600_000);
    assert.equal(staticCommandTimeoutMs(["--test", "test/corpus/host.test.mjs"]), 600_000);
    assert.equal(staticCommandTimeoutMs(["scripts/profile-contract-runtime.mjs", "--runs", "3"]),
      (2 + 9 * 3) * 600_000);
    assert.equal(staticCommandTimeoutMs(["scripts/profile-contract-runtime.mjs"]), (2 + 9) * 600_000);
    assert.throws(() => staticCommandTimeoutMs(["scripts/profile-contract-runtime.mjs", "--runs", "0"]), /--runs/);
    process.env.CRABPOT_STATIC_STEP_TIMEOUT_MS = "2147483647";
    assert.throws(() => staticCommandTimeoutMs(["scripts/profile-contract-runtime.mjs"]), /timer limit/);
  } finally {
    if (previous === undefined) delete process.env.CRABPOT_STATIC_STEP_TIMEOUT_MS;
    else process.env.CRABPOT_STATIC_STEP_TIMEOUT_MS = previous;
  }
});

test("the profiler wrapper survives one sample deadline and preserves a child failure", (t) => {
  const root = mkdtempSync(path.join(os.tmpdir(), "crabpot-profile-budget-"));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  mkdirSync(path.join(root, "scripts"));
  const script = "scripts/profile-contract-runtime.mjs";
  writeFileSync(path.join(root, script), 'setTimeout(() => process.exit(23), 350);\n');
  writeFileSync(path.join(root, "scripts/ordinary.mjs"), 'setTimeout(() => process.exit(23), 350);\n');
  const ownerUrl = new URL("../scripts/static-step.mjs", import.meta.url).href;
  const run = (target) => spawnSync(process.execPath, ["--input-type=module", "-e", `
    import { runStaticStep } from ${JSON.stringify(ownerUrl)};
    process.exitCode = runStaticStep(process.execPath, [${JSON.stringify(target)}, "--runs", "3"]);
  `], {
    cwd: root, encoding: "utf8", timeout: 5_000,
    env: { ...process.env, CRABPOT_STATIC_STEP_TIMEOUT_MS: "100" },
  });
  const aggregate = run(script);
  assert.ifError(aggregate.error);
  assert.equal(aggregate.status, 23, aggregate.stderr);
  const ordinary = run("scripts/ordinary.mjs");
  assert.ifError(ordinary.error);
  assert.notEqual(ordinary.status, 0);
  assert.match(ordinary.stderr, /timed out after 100ms/);
});
