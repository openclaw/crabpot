import assert from "node:assert/strict";
import { test } from "node:test";
import { buildStaticSuiteSteps } from "../scripts/run-static-suite.mjs";

test("static suite keeps the dashboard gate broad and target-explicit", () => {
  const steps = buildStaticSuiteSteps({
    openclawArgs: ["--openclaw", "./openclaw"],
    pluginInspectorSmoke: true,
    policyArgs: [],
    profileArgs: ["--runs", "2"],
  });

  const rendered = steps.map(([command, args]) => [command, args.join(" ")]);

  assert.deepEqual(rendered[0], ["node", "scripts/sync-fixtures.mjs --materialize"]);
  assert.ok(rendered.some(([command, args]) => command === "node" && args === "--test test/*.test.mjs"));
  assert.ok(
    rendered.some(([command, args]) => command === "node" && args === "scripts/run-plugin-inspector-smoke.mjs --check"),
  );
  assert.ok(rendered.some(([, args]) => args === "scripts/run-contract-smoke.mjs --strict --openclaw ./openclaw"));
  assert.ok(rendered.some(([, args]) => args === "scripts/import-loop-profile.mjs --check --runs 2"));
  assert.ok(rendered.some(([, args]) => args === "scripts/profile-contract-runtime.mjs --check --openclaw ./openclaw --runs 2"));
  assert.ok(rendered.some(([, args]) => args === "scripts/check-ci-policy.mjs --check"));
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
      CRABPOT_PLUGIN_TRACK: "beta",
    },
  });

  const testStep = steps.find(([, args]) => args.join(" ") === "--test test/*.test.mjs");
  const reportStep = steps.find(([, args]) => args.join(" ") === "scripts/generate-report.mjs --check");

  assert.deepEqual(testStep[2], undefined);
  assert.equal(reportStep[2].CRABPOT_FIXTURE_SET, "openclaw-beta");
  assert.equal(reportStep[2].CRABPOT_PLUGIN_TRACK, "beta");
});
