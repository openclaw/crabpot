import assert from "node:assert/strict";
import { test } from "node:test";
import { createCaptureApi } from "../scripts/capture-shim.mjs";
import { buildContractCapture, validateContractCapture } from "../scripts/capture-contracts.mjs";
import { buildReport } from "../scripts/report-lib.mjs";

test("capture shim records hooks and runtime registrations without plugin internals", () => {
  const api = createCaptureApi({ knownRegistrars: ["registerTool"] });

  api.on("before_tool_call", () => undefined);
  api.registerTool({ name: "search", inputSchema: { type: "object" }, run() {} });
  api.registerService({ name: "sidecar", start() {}, stop() {} });

  assert.deepEqual(api.getCapturedContracts(), [
    {
      kind: "hook",
      name: "before_tool_call",
      handlerType: "function",
      arguments: [{ type: "string", value: "before_tool_call" }, { type: "function" }],
    },
    {
      kind: "registration",
      name: "registerTool",
      known: true,
      arguments: [{ type: "object", keys: ["inputSchema", "name", "run"], name: "search" }],
    },
    {
      kind: "registration",
      name: "registerService",
      known: false,
      arguments: [{ type: "object", keys: ["name", "start", "stop"], name: "sidecar" }],
    },
  ]);
});

test("contract capture turns observed seams into executable probe assertions", async () => {
  const report = await buildReport({ generatedAt: "test" });
  const capture = await buildContractCapture({ report });

  assert.deepEqual(validateContractCapture(capture), []);
  assert.ok(capture.summary.registrationCount > 0);
  assert.ok(capture.summary.hookCount > 0);
  assert.ok(capture.summary.sdkImportCount > 0);
  assert.ok(capture.summary.issueProbeCount > 0);
  assert.ok(capture.summary.inspectorShimRequiredCount > 0);
  assert.ok(capture.summary.compatAliasRequiredCount > 0);

  assertHasRegistrationCapture(capture, "wecom", "registerHttpRoute", "inspector-shim-required");
  assertHasHookProbe(capture, "wecom", "before_tool_call");
  assertHasSdkProbe(capture, "codex-app-server", "openclaw/plugin-sdk/discord", "compat-alias-required");
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
      (item) => item.hook === hook && item.assertions.length > 0 && item.syntheticEvent.toolCall?.name === "fixture_tool",
    ),
    `expected ${fixtureId} ${hook} hook probe`,
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
