import assert from "node:assert/strict";
import { test } from "node:test";
import {
  buildImportLoopProfile,
  renderImportLoopProfileMarkdown,
  validateImportLoopProfile,
} from "../scripts/import-loop-profile.mjs";

test("import loop profile measures repeated cold capture subprocesses", async () => {
  const profile = await buildImportLoopProfile({ runs: 2 });

  assert.deepEqual(validateImportLoopProfile(profile), []);
  assert.equal(profile.summary.runs, 2);
  assert.equal(profile.summary.failCount, 0);
  assert.ok(profile.summary.capturedCount >= 2);
  assert.ok(profile.summary.p50WallMs > 0);
  assert.ok(profile.samples.every((sample) => sample.exitCode === 0));
  assert.match(renderImportLoopProfileMarkdown(profile), /Import Loop Profile/);
  assert.match(renderImportLoopProfileMarkdown(profile), /CPU Estimate/);
});

test("import loop profile validation rejects failed or empty captures", () => {
  const errors = validateImportLoopProfile({
    summary: {
      runs: 2,
      failCount: 1,
      capturedCount: 0,
      p50WallMs: 0,
    },
  });

  assert.ok(errors.some((error) => error.includes("failed sample")));
  assert.ok(errors.some((error) => error.includes("at least one contract")));
  assert.ok(errors.some((error) => error.includes("wall-time")));
});
