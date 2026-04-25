import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";

test("manual OpenClaw ref workflow accepts branch tag or SHA inputs", async () => {
  const workflow = await readFile(".github/workflows/openclaw-ref-compat.yml", "utf8");

  assert.match(workflow, /openclaw_repository:/);
  assert.match(workflow, /openclaw_ref:/);
  assert.match(workflow, /base_openclaw_ref:/);
  assert.match(workflow, /head_openclaw_ref:/);
  assert.match(workflow, /TARGET_REF:/);
  assert.match(workflow, /ref: \$\{\{ env\.TARGET_REF \}\}/);
  assert.match(workflow, /node scripts\/check-contract-coverage\.mjs --openclaw \.\/openclaw/);
});

test("manual OpenClaw ref workflow keeps isolated fixture execution opt-in", async () => {
  const workflow = await readFile(".github/workflows/openclaw-ref-compat.yml", "utf8");

  assert.match(workflow, /run_isolated_fixture:/);
  assert.match(workflow, /fixture:/);
  assert.match(workflow, /fixture_set:/);
  assert.match(workflow, /Resolve fixture matrix/);
  assert.match(workflow, /CRABPOT_EXECUTE_ISOLATED: "1"/);
  assert.match(workflow, /npm run workspace:execute -- --fixture/);
  assert.match(workflow, /npm run execution:report/);
});

test("manual OpenClaw ref workflow has diff and profile modes", async () => {
  const workflow = await readFile(".github/workflows/openclaw-ref-compat.yml", "utf8");

  assert.match(workflow, /mode:/);
  assert.match(workflow, /Compare base and head OpenClaw refs/);
  assert.match(workflow, /node scripts\/compare-openclaw-refs\.mjs/);
  assert.match(workflow, /node scripts\/compare-runtime-profile\.mjs/);
  assert.match(workflow, /node scripts\/check-ci-policy\.mjs/);
  assert.match(workflow, /node scripts\/write-ci-summary\.mjs/);
});

test("default check workflow uploads policy and summary reports", async () => {
  const workflow = await readFile(".github/workflows/check.yml", "utf8");

  assert.match(workflow, /node scripts\/compare-runtime-profile\.mjs/);
  assert.match(workflow, /node scripts\/check-ci-policy\.mjs/);
  assert.match(workflow, /node scripts\/write-ci-summary\.mjs/);
  assert.match(workflow, /actions\/upload-artifact@v7/);
});

test("workflows use Node 24 action majors", async () => {
  const workflows = [
    await readFile(".github/workflows/check.yml", "utf8"),
    await readFile(".github/workflows/openclaw-ref-compat.yml", "utf8"),
  ].join("\n");

  assert.match(workflows, /actions\/checkout@v6/);
  assert.match(workflows, /actions\/setup-node@v6/);
  assert.match(workflows, /actions\/upload-artifact@v7/);
  assert.doesNotMatch(workflows, /actions\/(checkout|setup-node|upload-artifact)@v4/);
});
