import assert from "node:assert/strict";
import { test } from "node:test";
import {
  buildCiPolicyReport,
  renderCiPolicyMarkdown,
  validateCiPolicyReport,
} from "../scripts/check-ci-policy.mjs";

const policy = {
  version: 1,
  allowedBlocked: [
    {
      id: "channel-runtime-harness",
      seam: "registerChannel",
      reasonIncludes: "includeChannelRuntime=true",
      decision: "allowed-blocked",
      until: "channel runtime harness lands",
    },
  ],
  expectedWarnings: [
    {
      id: "tool-factory-descriptor",
      seam: "registerTool",
      reasonIncludes: "no object descriptor",
      decision: "expected-warning",
      until: "tool factory capture expansion lands",
    },
  ],
  thresholds: {
    wallP95RegressionPercent: 50,
    peakRssRegressionMb: 50,
    bootRegressionMs: 500,
    strictMinimumSamples: 3,
  },
  fixtureSets: {
    smoke: ["wecom"],
  },
};

test("ci policy allows known blocked probes but fails unknown blockers", async () => {
  const report = await buildCiPolicyReport({
    policy,
    compatibilityReport: compatibilityReport(),
    executionResults: executionResults([
      {
        seam: "registerChannel",
        reason: "captured registration requires includeChannelRuntime=true",
      },
      {
        seam: "registerMystery",
        reason: "new blocked reason",
      },
    ]),
  });

  assert.equal(report.status, "fail");
  assert.ok(report.checks.some((check) => check.action === "warn" && check.id.includes("registerChannel")));
  assert.ok(validateCiPolicyReport(report).some((error) => error.includes("registerMystery")));
  assert.match(renderCiPolicyMarkdown(report), /Crabpot CI Policy/);
});

test("default ci policy classifies opt-in kitchen-sink blockers", async () => {
  const report = await buildCiPolicyReport({
    compatibilityReport: compatibilityReport(),
    executionResults: executionResults([
      {
        seam: "registerChannel",
        reason: "captured registration requires includeChannelRuntime=true",
      },
      {
        seam: "registerService",
        reason: "captured registration requires includeLifecycle=true",
      },
      {
        seam: "registerSpeechProvider",
        reason: "captured registration requires includeProviderCapabilities=true",
      },
    ]),
  });

  assert.equal(report.status, "pass");
  assert.equal(validateCiPolicyReport(report).length, 0);
  assert.deepEqual(
    report.checks.filter((check) => check.id.startsWith("execution-results.blocked.")).map((check) => check.action),
    ["warn", "warn", "warn"],
  );
});

test("ci policy fails ref diff hard regressions", async () => {
  const report = await buildCiPolicyReport({
    policy,
    compatibilityReport: compatibilityReport(),
    refDiff: {
      regressions: [
        {
          code: "hookNames.removed-used",
          action: "fail",
          message: "Hook names removed values used by fixtures",
          evidence: ["llm_output"],
        },
      ],
    },
  });

  assert.equal(report.status, "fail");
  assert.ok(validateCiPolicyReport(report).some((error) => error.includes("hookNames.removed-used")));
});

test("ci policy reports package audit findings as warnings", async () => {
  const report = await buildCiPolicyReport({
    policy,
    compatibilityReport: compatibilityReport(),
    executionResults: {
      summary: {
        failCount: 0,
        auditFindingCount: 2,
      },
      artifacts: [
        {
          fixture: "fixture",
          kind: "audit",
          findingCount: 2,
          failures: [],
          blocked: [],
        },
      ],
    },
  });

  assert.equal(report.status, "pass");
  assert.ok(report.checks.some((check) => check.action === "warn" && check.id === "execution-results.audit-findings"));
});

test("ci policy surfaces P0 live issues without blocking default lanes", async () => {
  const report = await buildCiPolicyReport({
    policy,
    compatibilityReport: compatibilityReport({
      issues: [
        {
          severity: "P0",
          issueClass: "live-issue",
          fixture: "codex-app-server",
          code: "sdk-export-missing",
          compatStatus: "untracked",
        },
        {
          severity: "P2",
          issueClass: "deprecation-warning",
          fixture: "connectclaw",
          code: "legacy-before-agent-start",
        },
        {
          severity: "P1",
          issueClass: "inspector-gap",
          fixture: "wecom",
          code: "registration-capture-gap",
        },
      ],
    }),
  });

  assert.equal(report.status, "pass");
  assert.ok(report.checks.some((check) => check.id === "compatibility-report.live-p0-issues" && check.action === "warn"));
  assert.ok(
    report.checks.some((check) => check.id === "compatibility-report.deprecation-warnings" && check.action === "pass"),
  );
  assert.ok(report.checks.some((check) => check.id === "compatibility-report.inspector-gaps" && check.action === "pass"));
});

test("ci policy strict mode fails P0 live issues", async () => {
  const report = await buildCiPolicyReport({
    policy,
    strict: true,
    compatibilityReport: compatibilityReport({
      issues: [
        {
          severity: "P0",
          issueClass: "live-issue",
          fixture: "codex-app-server",
          code: "sdk-export-missing",
          compatStatus: "untracked",
        },
      ],
    }),
  });

  assert.equal(report.status, "fail");
  assert.match(validateCiPolicyReport(report).join("\n"), /compatibility-report\.live-p0-issues/);
});

test("ci policy strict mode escalates classified blocked probes", async () => {
  const report = await buildCiPolicyReport({
    policy,
    strict: true,
    compatibilityReport: compatibilityReport(),
    executionResults: executionResults([
      {
        seam: "registerChannel",
        reason: "captured registration requires includeChannelRuntime=true",
      },
      {
        seam: "registerTool",
        reason: "factory had no object descriptor",
      },
    ]),
  });

  assert.equal(report.status, "fail");
  assert.deepEqual(
    report.checks.filter((check) => check.id.startsWith("execution-results.blocked.")).map((check) => check.action),
    ["fail", "fail"],
  );
  assert.match(validateCiPolicyReport(report).join("\n"), /channel-runtime-harness/);
  assert.match(validateCiPolicyReport(report).join("\n"), /tool-factory-descriptor/);
});

test("ci policy validation rejects malformed policy files", async () => {
  await assert.rejects(
    () =>
      buildCiPolicyReport({
        policy: {
          version: 2,
          allowedBlocked: {},
          expectedWarnings: null,
          thresholds: null,
          fixtureSets: null,
        },
        compatibilityReport: compatibilityReport(),
      }),
    /ci policy version must be 1[\s\S]*allowedBlocked must be an array[\s\S]*expectedWarnings must be an array[\s\S]*thresholds are required[\s\S]*fixtureSets are required/,
  );
});

function compatibilityReport(overrides = {}) {
  const issues = overrides.issues ?? [
    {
      severity: "P1",
      issueClass: "inspector-gap",
      fixture: "fixture",
      code: "registration-capture-gap",
    },
  ];
  return {
    summary: {
      breakageCount: 0,
      p1IssueCount: issues.filter((issue) => issue.severity === "P1").length,
    },
    breakages: [],
    issues,
  };
}

function executionResults(blocked) {
  return {
    summary: {
      failCount: 0,
      auditFindingCount: 0,
    },
    artifacts: [
      {
        fixture: "fixture",
        artifactPath: ".crabpot/results/fixture/result.synthetic.json",
        failures: [],
        blocked: blocked.map((item, index) => ({
          captureIndex: index,
          kind: "registration",
          label: item.seam,
          status: "blocked",
          ...item,
        })),
      },
    ],
  };
}
