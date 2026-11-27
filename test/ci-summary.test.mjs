import assert from "node:assert/strict";
import { rm, mkdtemp, readFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { test } from "node:test";
import { buildCiSummary, writeCiSummary } from "../scripts/write-ci-summary.mjs";

test("ci summary writer emits reviewable json and markdown artifacts", async (context) => {
  const dir = await mkdtemp(path.join(os.tmpdir(), "crabpot-ci-summary-"));
  context.after(() => rm(dir, { recursive: true, force: true, maxRetries: 3 }));
  const jsonPath = path.join(dir, "summary.json");
  const markdownPath = path.join(dir, "summary.md");
  const summary = await buildCiSummary({
    mode: "isolated",
    openclawLabel: "openclaw/openclaw@fixture",
    reports: {
      execution: {
        summary: {
          passCount: 1,
          failCount: 0,
          blockedCount: 0,
        },
      },
    },
  });

  assert.deepEqual(await writeCiSummary(summary, { jsonPath, markdownPath }), { jsonPath, markdownPath });
  assert.equal(JSON.parse(await readFile(jsonPath, "utf8")).mode, "isolated");
  assert.match(await readFile(markdownPath, "utf8"), /openclaw\/openclaw@fixture/);
});
