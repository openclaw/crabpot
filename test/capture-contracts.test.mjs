import assert from "node:assert/strict";
import { test } from "node:test";
import { buildContractCapture } from "../scripts/capture-contracts.mjs";
import { buildReport } from "../scripts/report-lib.mjs";

test("contract capture turns observed seams into executable probe assertions", async () => {
  const report = await buildReport({ generatedAt: "test" });
  const capture = await buildContractCapture({ report });

  assert.ok(capture.summary.registrationCount > 0);
  assert.ok(capture.summary.hookCount > 0);
  assert.ok(capture.summary.sdkImportCount > 0);
  assert.ok(capture.summary.issueProbeCount > 0);
  assert.ok(capture.summary.inspectorShimRequiredCount > 0);
  assert.ok(capture.summary.compatAliasRequiredCount > 0);

  assertHasRegistrationCapture(capture, "wecom", "registerHttpRoute", "inspector-shim-required");
  assertHasRegistrationCapture(capture, "agentchat", "defineChannelPluginEntry", "inspector-shim-required");
  assertHasRegistrationCapture(capture, "clawmetry", "definePluginEntry", "inspector-shim-required");
  assertHasHookProbe(capture, "wecom", "before_tool_call");
  assertHasLegacyStartupHookProbe(capture, "connectclaw");
  assertHasSdkProbe(capture, "codex-app-server", "openclaw/plugin-sdk/telegram-account", "compat-alias-required");
  assertHasIssueProbe(capture, "sdk.import.package-export-cold-import:codex-app-server");
});

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

function assertHasSdkProbe(capture, fixtureId, specifier, support) {
  const fixture = capture.fixtures.find((item) => item.id === fixtureId);
  assert.ok(
    fixture?.sdkImports.some((item) => item.specifier === specifier && item.support === support),
    `expected ${fixtureId} ${specifier} SDK probe with ${support}`,
  );
}

function assertHasIssueProbe(capture, id) {
  assert.ok(
    capture.issueProbes.some((probe) => probe.id === id && probe.assertions.length > 0),
    `expected issue probe ${id}`,
  );
}
