import assert from "node:assert/strict";
import { mkdtemp, readFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { test } from "node:test";
import { buildCiSummary, renderCiSummaryMarkdown, writeCiSummary } from "../scripts/write-ci-summary.mjs";

test("ci summary rolls up compatibility, policy, ref diff, and profile findings", async () => {
  const summary = await buildCiSummary({
    mode: "full",
    openclawLabel: "openclaw/openclaw@main",
    reports: {
      compatibility: {
        summary: {
          breakageCount: 0,
          warningCount: 2,
          suggestionCount: 3,
          issueCount: 4,
          p0IssueCount: 1,
          p1IssueCount: 1,
        },
        issues: [
          {
            severity: "P1",
            fixture: "fixture",
            code: "registration-capture-gap",
            title: "runtime registrations need capture",
            decision: "inspector-follow-up",
          },
        ],
      },
      refDiff: {
        summary: {
          hardRegressionCount: 0,
          warningRegressionCount: 1,
        },
        regressions: [
          {
            action: "warn",
            severity: "P3",
            dimension: "sdkExports",
            code: "sdkExports.removed-unused",
            message: "unused export removed",
          },
        ],
      },
      ciPolicy: {
        summary: {
          failCount: 0,
          warnCount: 1,
        },
        checks: [
          {
            action: "warn",
            id: "execution-results.blocked.fixture.registerChannel.0",
            message: "allowed-blocked",
            evidence: ["registerChannel"],
          },
        ],
      },
      profileDiff: {
        summary: {
          warnCount: 1,
        },
        checks: [
          {
            action: "warn",
            id: "profile.wall-p95",
            metric: "p95WallMs",
            baseline: 100,
            current: 200,
            message: "p95 regressed",
          },
        ],
      },
      execution: {
        summary: {
          passCount: 6,
          failCount: 0,
          blockedCount: 2,
        },
      },
    },
  });

  assert.equal(summary.status, "pass");
  assert.equal(summary.summary.p0Issues, 1);
  assert.equal(summary.summary.policyWarnings, 1);
  assert.match(renderCiSummaryMarkdown(summary), /Crabpot CI Summary/);
  assert.match(renderCiSummaryMarkdown(summary), /\| P0 issues\s+\| 1\s+\|/);
  assert.match(renderCiSummaryMarkdown(summary), /openclaw\/openclaw@main/);
});

test("ci summary fails when strict runtime profile policy fails", async () => {
  const summary = await buildCiSummary({
    reports: {
      profileDiff: {
        summary: {
          failCount: 1,
          warnCount: 0,
        },
        checks: [
          {
            action: "fail",
            id: "profile.peak-rss",
            metric: "maxPeakRssMb",
            baseline: 50,
            current: 150,
            message: "rss regressed",
          },
        ],
      },
    },
  });

  assert.equal(summary.status, "fail");
  assert.equal(summary.summary.profileFailures, 1);
  assert.match(renderCiSummaryMarkdown(summary), /Profile failures/);
});

test("ci summary writer emits reviewable json and markdown artifacts", async () => {
  const dir = await mkdtemp(path.join(os.tmpdir(), "crabpot-ci-summary-"));
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
