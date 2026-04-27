import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { mkdtemp, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { test } from "node:test";
import { buildContractCapture } from "../scripts/capture-contracts.mjs";
import {
  buildSyntheticProbePlan,
  renderSyntheticProbeMarkdown,
  validateSyntheticProbePlan,
} from "../scripts/synthetic-probes.mjs";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

test("synthetic probe plan is generated from the current crabpot capture", async () => {
  const capture = await buildContractCapture();
  const plan = await buildSyntheticProbePlan({ capture });

  assert.deepEqual(validateSyntheticProbePlan(plan), []);
  assert.ok(plan.summary.probeCount > 0);
  assert.ok(plan.summary.readyCount > 0);
  assert.ok(plan.summary.metadataOnlyCount > 0);
  assert.match(renderSyntheticProbeMarkdown(plan), /Crabpot Synthetic Probes/);
});

test("synthetic probe CLI refuses isolated execution without opt-in", async () => {
  const dir = await mkdtemp(path.join(os.tmpdir(), "crabpot-probes-"));
  const entrypoint = path.join(dir, "fixture.mjs");
  await writeFile(entrypoint, "export function register(api) { api.registerTool({ name: 'fixture' }); }\n", "utf8");

  const result = spawnSync(process.execPath, ["scripts/synthetic-probes.mjs", "--entrypoint", entrypoint], {
    cwd: repoRoot,
    encoding: "utf8",
    env: { ...process.env, CRABPOT_EXECUTE_ISOLATED: "" },
  });

  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /CRABPOT_EXECUTE_ISOLATED=1/);
});
