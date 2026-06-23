import assert from "node:assert/strict";
import { test } from "node:test";
import { buildContractCapture } from "../scripts/capture-contracts.mjs";
import { buildReport } from "../scripts/report-lib.mjs";

test("contract capture turns observed seams into executable probe assertions", async () => {
  const report = await buildReport(testReportOptions());
  const capture = await buildContractCapture({ report });

  assert.ok(capture.summary.registrationCount > 0);
  assert.ok(capture.summary.hookCount > 0);
  assert.ok(capture.summary.sdkImportCount > 0);
  assert.ok(capture.summary.issueProbeCount > 0);
  assert.ok(capture.summary.inspectorShimRequiredCount > 0);

  assertHasRegistrationCapture(capture, "wecom", "registerHttpRoute", "inspector-shim-required");
  assertHasRegistrationCapture(capture, "agentchat", "defineChannelPluginEntry", "inspector-shim-required");
  assertHasRegistrationCapture(capture, "clawmetry", "registerService", "inspector-shim-required");
  assertHasHookProbe(capture, "wecom", "before_tool_call");
  assertHasSubagentEndedHookProbe(capture, "wecom");
  assertHasLegacyStartupHookProbe(capture, "connectclaw");
  assertHasIssueProbe(capture, "sdk.import.");
  if (capture.summary.compatAliasRequiredCount > 0) {
    assert.ok(capture.summary.compatAliasRequiredCount > 0);
    assertHasSdkProbe(capture, "compat-alias-required");
  } else {
    assert.equal(capture.summary.compatAliasRequiredCount, 0);
    assertNoSdkProbe(capture, "compat-alias-required");
  }
});

function testReportOptions() {
  return {
    generatedAt: "test",
    openclawPath: process.env.CRABPOT_TEST_OPENCLAW_PATH,
  };
}

function assertHasRegistrationCapture(capture, fixtureId, registrar, support) {
  const fixture = capture.fixtures.find((item) => item.id === fixtureId);
  assert.ok(
    fixture?.registrations.some(
      (item) => item.registrar === registrar && item.support === support && item.syntheticArguments.length > 0,
    ),
    `expected ${fixtureId} ${registrar} capture with ${support}`,
  );
}

function assertHasHookProbe(capture, fixtureId, hook) {
  const fixture = capture.fixtures.find((item) => item.id === fixtureId);
  assert.ok(
    fixture?.hooks.some(
      (item) =>
        item.hook === hook &&
        item.assertions.length > 0 &&
        item.syntheticEvent.toolName === "fixture_tool" &&
        item.syntheticContext.toolName === "fixture_tool",
    ),
    `expected ${fixtureId} ${hook} hook probe`,
  );
}

function assertHasLegacyStartupHookProbe(capture, fixtureId) {
  const fixture = capture.fixtures.find((item) => item.id === fixtureId);
  assert.ok(
    fixture?.hooks.some(
      (item) =>
        item.hook === "before_agent_start" &&
        item.assertions.some((assertion) => assertion.includes("legacy startup")) &&
        item.syntheticEvent.agentId === "agent-fixture" &&
        item.syntheticContext.sessionId === "session-fixture",
    ),
    `expected ${fixtureId} before_agent_start hook probe`,
  );
}

function assertHasSubagentEndedHookProbe(capture, fixtureId) {
  const fixture = capture.fixtures.find((item) => item.id === fixtureId);
  const hook = fixture?.hooks.find((item) => item.hook === "subagent_ended");
  assert.ok(hook, `expected ${fixtureId} subagent_ended hook probe`);
  assert.equal(hook.syntheticEvent.targetSessionKey, "child-session");
  assert.equal(hook.syntheticEvent.targetKind, "subagent");
  assert.equal(hook.syntheticEvent.reason, "completed");
  assert.equal(hook.syntheticEvent.sendFarewell, false);
}

function assertHasSdkProbe(capture, support) {
  assert.ok(
    capture.fixtures.some((fixture) => fixture.sdkImports.some((item) => item.support === support)),
    `expected an SDK probe with ${support}`,
  );
}

function assertNoSdkProbe(capture, support) {
  assert.ok(
    capture.fixtures.every((fixture) => fixture.sdkImports.every((item) => item.support !== support)),
    `expected no SDK probe with ${support}`,
  );
}

function assertHasIssueProbe(capture, idPrefix) {
  assert.ok(
    capture.issueProbes.some((probe) => probe.id.startsWith(idPrefix) && probe.assertions.length > 0),
    `expected issue probe ${idPrefix}`,
  );
}
