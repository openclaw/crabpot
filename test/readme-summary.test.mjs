import assert from "node:assert/strict";
import { mkdir, mkdtemp, readFile, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { test } from "node:test";
import {
  applyReadmeSummary,
  buildDashboardData,
  buildReadmeSummary,
  ensureReadmeFrame,
  renderReadmeSummary,
  updateReadmeSummary,
  writeDashboardData,
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
            issueClass: "compat-gap",
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
      importLoop: {
        summary: {
          p50WallMs: 51,
          p95WallMs: 57,
          maxPeakRssMb: 44.5,
          maxCpuMsEstimate: 32,
          maxPluginPeakRssDeltaMb: 6.5,
          maxPluginCpuDeltaMsEstimate: 4,
        },
      },
      runtimeProfile: { summary: { p50WallMs: 120, p95WallMs: 130, maxPeakRssMb: 64.5 } },
    },
  });
  const markdown = renderReadmeSummary(summary);

  assert.equal(summary.status, "pass");
  assert.equal(summary.metrics.p0Issues, 1);
  assert.equal(summary.metrics.policyWarnings, 1);
  assert.doesNotMatch(markdown, /OpenClaw:/);
  assert.doesNotMatch(markdown, /Last dashboard update:/);
  assert.doesNotMatch(markdown, /Result Grid/);
  assert.match(markdown, /\| P0 issues\s+\| \[🔴 P0 1\]\(reports\/crabpot-issues\.md#p0-live-issues\)\s+\|/u);
  assert.match(
    markdown,
    /\| 🟠 P1\s+\| compat-gap\s+\| codex-app-server\s+\| sdk-export-missing\s+\| core-compat-adapter\s+\| \[missing SDK alias\]\(reports\/crabpot-issues\.md#compat-gaps\)\s+\|/u,
  );
  assert.doesNotMatch(markdown, /\[red\]/);
  assert.doesNotMatch(markdown, /CRABPOT-AAAA1111/);
  assert.doesNotMatch(markdown, /Report Artifacts/);
  assert.match(markdown, /8 ready \/ 1 blocked \/ 9 total/);
  assert.match(markdown, /4 Windows \/ 2 container/);
  assert.match(markdown, /\| Jiti loader candidates\s+\| 5\s+\|/);
  assert.match(markdown, /p50 51ms \/ p95 57ms \/ plugin delta RSS 6\.5MB \/ plugin delta CPU 4ms/);
  assert.match(markdown, /p50 120ms \/ command p95 130ms \/ max RSS 64\.5MB \/ 1 sample\/command/);
});

test("readme summary renders metric deltas against main dashboard data", async () => {
  const summary = await buildReadmeSummary({
    baseline: {
      generatedAt: "2026-04-26T00:00:00.000Z",
      openclawLabel: "openclaw@latest",
      metrics: {
        fixtures: 10,
        hardBreakages: 1,
        warnings: 7,
        suggestions: 2,
        issues: 8,
        p0Issues: 1,
        p1Issues: 3,
      },
    },
    baselineLabel: "main",
    generatedAt: "2026-04-26T01:00:00.000Z",
    reports: {
      compatibility: {
        status: "pass",
        summary: {
          fixtureCount: 12,
          breakageCount: 0,
          warningCount: 9,
          suggestionCount: 2,
          issueCount: 10,
          p0IssueCount: 1,
          p1IssueCount: 4,
          contractProbeCount: 5,
        },
        issues: [],
      },
    },
  });
  const markdown = renderReadmeSummary(summary);

  assert.equal(summary.baseline.deltas.fixtures.value, 2);
  assert.equal(summary.baseline.deltas.hardBreakages.value, -1);
  assert.match(markdown, /\| Fixtures\s+\| 12<br><em>\+2 vs main<\/em>\s+\|/);
  assert.match(markdown, /\| Hard breakages\s+\| 0<br><em>-1 vs main<\/em>\s+\|/);
  assert.match(markdown, /\| P1 issues\s+\| \[🟠 P1 4\]\(reports\/crabpot-issues\.md#triage-summary\)<br><em>\+1 vs main<\/em>\s+\|/u);
});

test("readme summary writes dashboard data json for branch comparison", async () => {
  const dir = await mkdtemp(path.join(os.tmpdir(), "crabpot-dashboard-data-"));
  const dataPath = path.join(dir, "dashboard.json");
  const summary = await buildReadmeSummary({
    generatedAt: "2026-04-26T00:00:00.000Z",
    reports: {
      compatibility: {
        status: "pass",
        summary: {
          fixtureCount: 1,
          breakageCount: 0,
          warningCount: 2,
          suggestionCount: 3,
          issueCount: 4,
          p0IssueCount: 0,
          p1IssueCount: 1,
          contractProbeCount: 5,
        },
        issues: [],
      },
    },
  });

  assert.equal(await writeDashboardData(summary, { dataPath }), dataPath);
  const data = JSON.parse(await readFile(dataPath, "utf8"));
  assert.deepEqual(buildDashboardData(summary), data);
  assert.equal(data.schemaVersion, 1);
  assert.equal(data.metrics.warnings, 2);

  const compared = await buildReadmeSummary({
    baselineDataPath: dataPath,
    generatedAt: "2026-04-26T01:00:00.000Z",
    reports: {
      compatibility: {
        status: "pass",
        summary: {
          fixtureCount: 1,
          breakageCount: 0,
          warningCount: 5,
          suggestionCount: 3,
          issueCount: 7,
          p0IssueCount: 0,
          p1IssueCount: 1,
          contractProbeCount: 5,
        },
        issues: [],
      },
    },
  });
  assert.equal(compared.baseline.deltas.warnings.value, 3);
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
  assert.match(await readFile(readmePath, "utf8"), /Latest Published/);
  assert.match(await readFile(readmePath, "utf8"), /Last dashboard update/);
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
  const ciSummary = {
    ...summary,
    generatedAt: "2026-04-26T01:31:00Z",
    metrics: {
      ...summary.metrics,
      importLoopP50Ms: 51,
      importLoopP95Ms: 57,
      importLoopMetricBasis: "baseline-adjusted",
      importLoopMaxRssMb: 44.5,
      importLoopMaxCpuMs: 32,
      importLoopRssSampleCount: 2,
      importLoopCpuSampleCount: 2,
      runtimeP50Ms: 231,
      runtimeP95Ms: 245,
      runtimeMaxRssMb: 70.4,
      runtimeRssSampleCount: 2,
      runtimeCpuSampleCount: 2,
      runtimeSamplesPerCommand: 1,
    },
    mode: "check",
    openclawLabel: "openclaw/openclaw@main",
    runUrl: "https://github.com/openclaw/crabpot/actions/runs/1",
  };
  const ciRendered = renderReadmeSummary(ciSummary);
  const ciFrame = ensureReadmeFrame("# crabpot\n\n## What this tests\n", ciSummary).replace(
    "<!-- crabpot-tracks:start -->\n<!-- crabpot-tracks:end -->",
    [
      "<!-- crabpot-tracks:start -->",
      "- **GitHub report run:** [1](https://github.com/openclaw/crabpot/actions/runs/1)",
      "<!-- crabpot-tracks:end -->",
    ].join("\n"),
  );
  await writeFile(readmePath, applyReadmeSummary(ciFrame, ciRendered), "utf8");
  const localSummary = {
    ...summary,
    metrics: {
      ...summary.metrics,
      importLoopP50Ms: 999,
      importLoopP95Ms: 999,
      importLoopMaxRssMb: 999,
      importLoopMaxCpuMs: 999,
      runtimeP50Ms: 999,
      runtimeP95Ms: 999,
      runtimeMaxRssMb: 999,
    },
    mode: "local",
    openclawLabel: "openclaw/openclaw@local",
  };

  assert.equal(await updateReadmeSummary({ check: true, readmePath, summary: localSummary }), false);
  const readme = await readFile(readmePath, "utf8");
  assert.match(readme, /Last dashboard update:\*\* Apr 26, 2026, 01:31 UTC/);
  assert.match(readme, /p50 51ms \/ p95 57ms \/ plugin delta RSS 44\.5MB \/ plugin delta CPU 32ms/);
  assert.match(readme, /p50 231ms \/ command p95 245ms \/ max RSS 70\.4MB \/ 1 sample\/command/);
});

test("readme frame follows compact reporting design and preserves dynamic blocks", async () => {
  const original = [
    "# crabpot",
    "",
    "intro",
    "",
    "<!-- crabpot-tracks:start -->",
    "- **Source:** `npm-latest`",
    "<!-- crabpot-tracks:end -->",
    "",
    "## Dashboard",
    "",
    "old dashboard",
    "<!-- crabpot-summary:end -->",
    "",
    "## What this tests",
    "",
  ].join("\n");
  const framed = ensureReadmeFrame(original, { generatedAt: "2026-04-26T01:31:00Z" });

  assert.match(framed, /^# 🦀 crabpot/u);
  assert.match(framed, /\*\*Goto: \[Latest Published\]/);
  assert.match(framed, /## Reporting Data/);
  assert.match(framed, /- \*\*Last dashboard update:\*\* Apr 26, 2026, 01:31 UTC/);
  assert.match(framed, /- \*\*Source:\*\* `npm-latest`/);
  assert.match(framed, /## Dashboard/);
});
