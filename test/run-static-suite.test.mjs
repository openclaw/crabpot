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
  assert.ok(rendered.some(([command, args]) => command === "npm" && args === "test"));
  assert.ok(rendered.some(([command, args]) => command === "npm" && args === "run plugin-inspector:smoke"));
  assert.ok(rendered.some(([, args]) => args === "scripts/run-contract-smoke.mjs --strict --openclaw ./openclaw"));
  assert.ok(rendered.some(([, args]) => args === "scripts/profile-contract-runtime.mjs --check --openclaw ./openclaw --runs 2"));
  assert.ok(rendered.some(([, args]) => args === "scripts/check-ci-policy.mjs --check"));
});

test("static suite release policy promotes CI policy warnings to failures", () => {
  const steps = buildStaticSuiteSteps({
    policyArgs: ["--strict"],
  });

  assert.ok(steps.some(([, args]) => args.join(" ") === "scripts/check-ci-policy.mjs --check --strict"));
});
