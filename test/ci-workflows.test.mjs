import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";

test("manual OpenClaw ref workflow accepts branch tag or SHA inputs", async () => {
  const workflow = await readFile(".github/workflows/openclaw-ref-compat.yml", "utf8");

  assert.match(workflow, /openclaw_repository:/);
  assert.match(workflow, /openclaw_ref:/);
  assert.match(workflow, /ref: \$\{\{ inputs\.openclaw_ref \}\}/);
  assert.match(workflow, /repository: \$\{\{ inputs\.openclaw_repository \}\}/);
  assert.match(workflow, /node scripts\/check-contract-coverage\.mjs --openclaw \.\/openclaw/);
});

test("manual OpenClaw ref workflow keeps isolated fixture execution opt-in", async () => {
  const workflow = await readFile(".github/workflows/openclaw-ref-compat.yml", "utf8");

  assert.match(workflow, /run_isolated_fixture:/);
  assert.match(workflow, /fixture:/);
  assert.match(workflow, /if: \$\{\{ inputs\.run_isolated_fixture && inputs\.fixture != '' \}\}/);
  assert.match(workflow, /CRABPOT_EXECUTE_ISOLATED: "1"/);
  assert.match(workflow, /npm run workspace:execute -- --fixture/);
  assert.match(workflow, /npm run execution:report/);
});
