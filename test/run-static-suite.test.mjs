import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { mkdtempSync, rmSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { test } from "node:test";
import { buildStaticSuiteSteps } from "../scripts/run-static-suite.mjs";

test("static suite rejects malformed step timeouts before starting a command", () => {
  const cwd = mkdtempSync(path.join(os.tmpdir(), "crabpot-static-timeout-"));
  try {
    for (const value of ["", "1.5", "10ms", "-1", "0", "2147483648"]) {
      const result = spawnSync(process.execPath, [fileURLToPath(new URL("../scripts/run-static-suite.mjs", import.meta.url))], {
        cwd,
        env: { ...process.env, CRABPOT_STATIC_STEP_TIMEOUT_MS: value },
        encoding: "utf8",
        timeout: 10_000,
      });
      assert.ifError(result.error);
      assert.notEqual(result.status, 0, JSON.stringify(value));
      assert.match(result.stderr, /CRABPOT_STATIC_STEP_TIMEOUT_MS must be a positive integer timeout/, JSON.stringify(value));
      assert.equal(result.stdout, "", "invalid settings must not start the first step");
    }
  } finally {
    rmSync(cwd, { recursive: true, force: true });
  }
});

test("static suite keeps the dashboard gate broad and target-explicit", () => {
  const steps = buildStaticSuiteSteps({
    openclawArgs: ["--openclaw", "./openclaw"],
    pluginInspectorSmoke: true,
    policyArgs: [],
    profileArgs: ["--runs", "2"],
  });

  const rendered = steps.map(([command, args]) => [command, args.join(" ")]);

  assert.deepEqual(rendered[0], ["node", "scripts/check-openclaw-plugin-contracts.mjs"]);
  assert.deepEqual(rendered[1], ["node", "scripts/sync-fixtures.mjs --materialize --openclaw ./openclaw"]);
  assert.ok(rendered.some(([command, args]) => command === "node" && args === "--test --test-concurrency=1 test/*.test.mjs"));
  assert.ok(
    rendered.some(([command, args]) => command === "node" && args === "scripts/run-plugin-inspector-smoke.mjs --check"),
  );
  assert.ok(rendered.some(([, args]) => args === "scripts/run-contract-smoke.mjs --strict --openclaw ./openclaw"));
  assert.equal(rendered.some(([, args]) => args.startsWith("scripts/behavior-eval.mjs")), false);
  assert.ok(rendered.some(([, args]) => args === "scripts/import-loop-profile.mjs --check --runs 2"));
  assert.ok(rendered.some(([, args]) => args === "scripts/profile-contract-runtime.mjs --check --openclaw ./openclaw --runs 2"));
  assert.ok(rendered.some(([, args]) => args === "scripts/check-ci-policy.mjs --check"));
});

test("static suite checks behavior eval reports only for default committed targets", () => {
  const steps = buildStaticSuiteSteps();
  const rendered = steps.map(([, args]) => args.join(" "));

  assert.ok(rendered.includes("scripts/behavior-eval.mjs --check"));
});

test("static suite release policy keeps compatibility findings advisory", () => {
  const steps = buildStaticSuiteSteps({
    pluginInspectorSmoke: true,
    policyArgs: [],
  });

  const rendered = steps.map(([, args]) => args.join(" "));

  assert.ok(rendered.includes("scripts/run-plugin-inspector-smoke.mjs --check"));
  assert.ok(rendered.includes("scripts/check-ci-policy.mjs --check"));
  assert.equal(rendered.some((args) => args.includes("check-ci-policy.mjs --check --strict")), false);
});

test("static suite can focus operational report steps without filtering unit tests", () => {
  const steps = buildStaticSuiteSteps({
    fixtureEnv: {
      CRABPOT_FIXTURE_SET: "openclaw-beta",
      CRABPOT_PLUGIN_TRACK: "source-pack",
    },
  });

  const testStep = steps.find(([, args]) => args.join(" ") === "--test --test-concurrency=1 test/*.test.mjs");
  const reportStep = steps.find(([, args]) => args.join(" ") === "scripts/generate-report.mjs --check");

  assert.deepEqual(testStep[2], undefined);
  assert.equal(reportStep[2].CRABPOT_FIXTURE_SET, "openclaw-beta");
  assert.equal(reportStep[2].CRABPOT_PLUGIN_TRACK, "source-pack");
});
