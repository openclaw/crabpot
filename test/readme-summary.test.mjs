import assert from "node:assert/strict";
import { mkdir, mkdtemp, readFile, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { test } from "node:test";
import {
  applyReadmeSummary,
  buildReadmeSummary,
  renderReadmeSummary,
  updateReadmeSummary,
} from "../scripts/update-readme-summary.mjs";

test("readme summary rolls up report counts and top issues", async () => {
  const summary = await buildReadmeSummary({
    generatedAt: "2026-04-26T00:00:00.000Z",
    runUrl: "https://github.com/openclaw/crabpot/actions/runs/1",
    reports: {
      compatibility: {
        status: "pass",
        summary: {
          fixtureCount: 12,
          breakageCount: 0,
          warningCount: 2,
          suggestionCount: 3,
          issueCount: 4,
          p0IssueCount: 1,
          p1IssueCount: 1,
          contractProbeCount: 5,
        },
        issues: [
          {
            id: "CRABPOT-AAAA1111",
            severity: "P1",
            fixture: "codex-app-server",
            code: "sdk-export-missing",
            decision: "core-compat-adapter",
            title: "missing SDK alias",
          },
        ],
      },
      ciSummary: {
        mode: "check",
        openclawLabel: "openclaw/openclaw@main",
        status: "pass",
        summary: {
          breakages: 0,
          warnings: 2,
          suggestions: 3,
          issues: 4,
          p0Issues: 1,
          p1Issues: 1,
          policyFailures: 0,
          policyWarnings: 1,
        },
      },
      synthetic: { summary: { readyCount: 8, blockedCount: 1, probeCount: 9 } },
      coldImport: { summary: { readyCount: 2, blockedCount: 7, entrypointCount: 9 } },
      workspace: { summary: { entrypointCount: 9, installStepCount: 3, buildStepCount: 2 } },
      platform: { summary: { windowsRiskStepCount: 4, containerRiskStepCount: 2, jitiAlternativeCount: 5 } },
      runtimeProfile: { summary: { p50WallMs: 120, maxPeakRssMb: 64.5 } },
    },
  });
  const markdown = renderReadmeSummary(summary);

  assert.equal(summary.status, "pass");
  assert.equal(summary.metrics.p0Issues, 1);
  assert.equal(summary.metrics.policyWarnings, 1);
  assert.match(markdown, /openclaw\/openclaw@main/);
  assert.match(markdown, /\| P0 issues\s+\| 1\s+\|/);
  assert.match(markdown, /CRABPOT-AAAA1111/);
  assert.match(markdown, /8 ready \/ 1 blocked \/ 9 total/);
  assert.match(markdown, /4 Windows \/ 2 container/);
  assert.match(markdown, /\| Jiti loader candidates\s+\| 5\s+\|/);
});

test("readme summary inserts and replaces marker block", async () => {
  const original = "# crabpot\n\nintro\n\n## What this tests\n\nbody\n";
  const inserted = applyReadmeSummary(original, "## Dashboard\n\ncontent");
  const replaced = applyReadmeSummary(inserted, "## Dashboard\n\nnew content");

  assert.match(inserted, /<!-- crabpot-summary:start -->/);
  assert.match(inserted, /content/);
  assert.doesNotMatch(replaced, /\ncontent\n/);
  assert.match(replaced, /new content/);
  assert.match(replaced, /## What this tests/);
});

test("readme summary check detects stale dashboard", async () => {
  const dir = await mkdtemp(path.join(os.tmpdir(), "crabpot-readme-summary-"));
  const reportsDir = path.join(dir, "reports");
  const readmePath = path.join(dir, "README.md");
  await mkdir(reportsDir);
  await writeFile(readmePath, "# crabpot\n\nintro\n\n## What this tests\n", "utf8");
  await writeFile(
    path.join(reportsDir, "crabpot-report.json"),
    JSON.stringify({
      status: "pass",
      summary: {
        fixtureCount: 1,
        breakageCount: 0,
        warningCount: 0,
        suggestionCount: 0,
        issueCount: 0,
        p1IssueCount: 0,
        contractProbeCount: 0,
      },
      issues: [],
    }),
    "utf8",
  );
  const summary = await buildReadmeSummary({ generatedAt: "deterministic", reportsDir });

  await assert.rejects(updateReadmeSummary({ check: true, readmePath, summary }), /dashboard is stale/);
  assert.equal(await updateReadmeSummary({ readmePath, summary }), true);
  assert.equal(await updateReadmeSummary({ check: true, readmePath, summary }), false);
  assert.match(await readFile(readmePath, "utf8"), /## Dashboard/);
});

test("readme summary preserves CI run metadata during local checks", async () => {
  const dir = await mkdtemp(path.join(os.tmpdir(), "crabpot-readme-summary-"));
  const readmePath = path.join(dir, "README.md");
  const summary = await buildReadmeSummary({
    generatedAt: "deterministic",
    reports: {
      compatibility: {
        status: "pass",
        summary: {
          fixtureCount: 1,
          breakageCount: 0,
          warningCount: 0,
          suggestionCount: 0,
          issueCount: 0,
          p0IssueCount: 0,
          p1IssueCount: 0,
          contractProbeCount: 0,
        },
        issues: [],
      },
    },
  });
  const ciRendered = renderReadmeSummary({
    ...summary,
    generatedAt: "2026-04-26T01:31:00Z",
    metrics: {
      ...summary.metrics,
      runtimeP50Ms: 231,
      runtimeMaxRssMb: 70.4,
    },
    mode: "check",
    openclawLabel: "openclaw/openclaw@main",
    runUrl: "https://github.com/openclaw/crabpot/actions/runs/1",
  });
  await writeFile(readmePath, applyReadmeSummary("# crabpot\n\n## What this tests\n", ciRendered), "utf8");

  assert.equal(await updateReadmeSummary({ check: true, readmePath, summary }), false);
});
