import assert from "node:assert/strict";
import { test } from "node:test";
import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { ciReportPaths, executeCiStep, startCiRun } from "../scripts/ci-report-handoff.mjs";
import {
  buildCiPolicyReport,
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

test("default ci policy retains Voice Call steering blockers without waiving failures", async () => {
  const inputs = executionResults([{
    seam: "registerGatewayMethod",
    reason: "captured voice-call steering requires an active realtime call, steering input, and authorized caller",
  }]);
  const report = await buildCiPolicyReport({ compatibilityReport: compatibilityReport(), executionResults: inputs });
  assert.equal(report.status, "pass");
  assert.equal(report.checks.find((check) => check.id.startsWith("execution-results.blocked."))?.action, "warn");

  const failure = await buildCiPolicyReport({
    compatibilityReport: compatibilityReport(),
    executionResults: { ...inputs, summary: { ...inputs.summary, failCount: 1 } },
  });
  assert.equal(failure.status, "fail");
  assert.ok(validateCiPolicyReport(failure).some((error) => error.includes("failed synthetic probes")));
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

test("default ci policy classifies generated kitchen-sink callable stubs", async () => {
  const report = await buildCiPolicyReport({
    compatibilityReport: compatibilityReport(),
    executionResults: executionResults([
      {
        seam: "before_tool_call",
        reason: "captured hook has no callable handler",
      },
      {
        seam: "registerCommand",
        reason: "captured registration has no supported callable probe",
      },
    ]),
  });

  assert.equal(report.status, "pass");
  assert.deepEqual(
    report.checks.filter((check) => check.id.startsWith("execution-results.blocked.")).map((check) => check.action),
    ["warn", "warn"],
  );
});

test("default ci policy classifies known memory-lancedb runtime blockers", async () => {
  const report = await buildCiPolicyReport({
    compatibilityReport: compatibilityReport(),
    executionResults: executionResults([
      {
        seam: "registerTool",
        reason: "captured memory tool requires realistic query/text input",
      },
      {
        seam: "registerTool",
        reason: "captured memory tool requires the host embedding provider runtime",
      },
    ]),
  });

  assert.equal(report.status, "pass");
  assert.equal(validateCiPolicyReport(report).length, 0);
  assert.deepEqual(
    report.checks.filter((check) => check.id.startsWith("execution-results.blocked.")).map((check) => check.action),
    ["warn", "warn"],
  );
});

test("default ci policy classifies HTTP route descriptor blockers", async () => {
  const report = await buildCiPolicyReport({
    compatibilityReport: compatibilityReport(),
    executionResults: executionResults([
      {
        seam: "registerHttpRoute",
        reason: "captured HTTP route probe requires route descriptor input",
      },
    ]),
  });

  assert.equal(report.status, "pass");
  assert.equal(validateCiPolicyReport(report).length, 0);
  assert.deepEqual(
    report.checks.filter((check) => check.id.startsWith("execution-results.blocked.")).map((check) => check.action),
    ["warn"],
  );
});

test("default ci policy classifies transcript source metadata blockers", async () => {
  const report = await buildCiPolicyReport({
    compatibilityReport: compatibilityReport(),
    executionResults: executionResults([
      {
        seam: "registerTranscriptSourceProvider",
        reason: "captured registration has no execution profile",
      },
    ]),
  });

  assert.equal(report.status, "pass");
  assert.deepEqual(
    report.checks.filter((check) => check.id.startsWith("execution-results.blocked.")).map((check) => check.action),
    ["warn"],
  );
  assert.equal(validateCiPolicyReport(report).length, 0);
});

test("default ci policy classifies beta dashboard harness blockers", async () => {
  const report = await buildCiPolicyReport({
    compatibilityReport: compatibilityReport(),
    executionResults: executionResults([
      {
        seam: "registerTool",
        reason: "captured ClawRouter endpoint tool requires configured endpoint path input",
      },
      {
        seam: "onConversationBindingResolved",
        reason: "captured conversation-binding hook requires host conversation context",
      },
      {
        seam: "registerInteractiveHandler",
        reason: "captured interactive handler requires host callback payload",
      },
      {
        seam: "registerCommand",
        reason: "captured command handler requires host command text",
      },
      {
        seam: "subagent_ended",
        reason: "captured Discord subagent hook requires the host state-dir runtime",
      },
      {
        seam: "before_message_write",
        reason: "captured memory write hook requires host message content",
      },
    ]),
  });

  assert.equal(report.status, "pass");
  assert.deepEqual(
    report.checks.filter((check) => check.id.startsWith("execution-results.blocked.")).map((check) => check.action),
    ["warn", "warn", "warn", "warn", "warn", "warn"],
  );
  assert.equal(validateCiPolicyReport(report).length, 0);
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

test("current-run policy ignores unselected execution history but honors a selected failure", async (t) => {
  const root = mkdtempSync(path.join(os.tmpdir(), "crabpot-current-policy-"));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  for (const selected of [false, true]) {
    const steps = [{ id: "compatibility", report: "compatibility" }, ...(selected ? [{ id: "execution", report: "execution" }] : [])];
    const run = startCiRun(steps, root);
    executeCiStep(run, run.steps[0], () => {
      writeFileSync(path.join(root, ciReportPaths.compatibility), JSON.stringify(compatibilityReport()));
      return 0;
    }, root);
    const failure = { ...executionResults([]), summary: { failCount: 1 } };
    const writeExecution = () => {
      writeFileSync(path.join(root, ciReportPaths.execution), JSON.stringify(failure));
      return 1;
    };
    if (selected) executeCiStep(run, run.steps[1], writeExecution, root);
    else writeExecution();
    const report = await buildCiPolicyReport({ currentRun: true, root, policy });
    assert.equal(report.status, selected ? "fail" : "pass");
    assert.equal(report.checks.some((check) => check.id === "execution-results.failures" && check.action === "fail"), selected);
    assert.equal(report.checks.some((check) => check.id === "execution-results.not-run"), !selected);
  }
});
