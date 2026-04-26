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

test("capture shim retains callable handlers only when explicitly enabled", async () => {
  const retainedApi = createCaptureApi({ retainHandlers: true });
  const hookHandler = () => "hooked";
  const toolDescriptor = {
    name: "lookup",
    execute() {
      return "tool";
    },
  };

  assert.equal(retainedApi.on("llm_input", hookHandler), retainedApi);
  assert.equal(retainedApi.registerTool(toolDescriptor), "lookup");
  assert.deepEqual(
    retainedApi.getRetainedContracts().map((entry) => ({
      kind: entry.kind,
      name: entry.name,
      captureIndex: entry.captureIndex,
      hasHandler: typeof entry.handler === "function",
      firstArgName: entry.arguments?.[0]?.name,
    })),
    [
      { kind: "hook", name: "llm_input", captureIndex: 0, hasHandler: true, firstArgName: undefined },
      { kind: "registration", name: "registerTool", captureIndex: 1, hasHandler: false, firstArgName: "lookup" },
    ],
  );
  assert.equal(await retainedApi.getRetainedContracts()[0].handler(), "hooked");
  assert.equal(retainedApi.getRetainedContracts()[1].arguments[0], toolDescriptor);

  const nonRetainedApi = createCaptureApi();
  nonRetainedApi.on("llm_input", hookHandler);
  assert.deepEqual(nonRetainedApi.getRetainedContracts(), []);
});

test("capture shim covers the plugin-facing registrar matrix", () => {
  const registrars = [
    ["defineChannelPluginEntry", { id: "channel-entry" }],
    ["definePluginEntry", { id: "plugin-entry" }],
    ["registerChannel", { id: "channel" }],
    ["registerCli", { name: "cli" }],
    ["registerCommand", { name: "command" }],
    ["registerContextEngine", { id: "context-engine" }],
    ["registerGatewayMethod", { name: "gateway.method" }],
    ["registerHttpRoute", { method: "GET", path: "/probe" }],
    ["registerInteractiveHandler", { id: "interactive" }],
    ["registerService", { name: "service", start() {}, stop() {} }],
    ["registerSpeechProvider", { id: "speech" }],
    ["registerTool", { name: "tool", execute() {} }],
  ];
  const api = createCaptureApi({ knownRegistrars: registrars.map(([name]) => name), retainHandlers: true });

  for (const [registrar, descriptor] of registrars) {
    api[registrar](descriptor);
  }

  const captured = api.getCapturedContracts();
  assert.deepEqual(
    captured.map((entry) => [entry.name, entry.known, entry.arguments[0].name]),
    registrars.map(([registrar, descriptor]) => [registrar, true, descriptor.name ?? descriptor.id ?? null]),
  );
  assert.deepEqual(
    api.getRetainedContracts().map((entry) => entry.name),
    registrars.map(([registrar]) => registrar),
  );
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
  assertHasRegistrationCapture(capture, "agentchat", "defineChannelPluginEntry", "inspector-shim-required");
  assertHasRegistrationCapture(capture, "clawmetry", "definePluginEntry", "inspector-shim-required");
  assertHasHookProbe(capture, "wecom", "before_tool_call");
  assertHasLegacyStartupHookProbe(capture, "connectclaw");
  assertHasSdkProbe(capture, "codex-app-server", "openclaw/plugin-sdk/discord", "compat-alias-required");
  assertHasIssueProbe(capture, "sdk.import.package-export-cold-import:codex-app-server");
});

test("contract capture validation rejects non-executable probe inventory", () => {
  const errors = validateContractCapture({
    fixtures: [
      {
        registrations: [
          {
            id: "registration.registerTool:fixture:index",
            registrar: "registerTool",
            ref: "",
            assertions: [],
          },
        ],
        hooks: [
          {
            id: "hook.before_tool_call:fixture:index",
            hook: "before_tool_call",
            ref: "plugins/fixture/index.ts:1",
            assertions: [],
            syntheticEvent: null,
            syntheticContext: null,
          },
        ],
        sdkImports: [],
        packageEntrypoints: [
          {
            id: "entrypoint.fixture:index",
            assertions: [],
          },
        ],
      },
    ],
    issueProbes: [
      {
        id: "issue.fixture",
        evidence: [],
        assertions: [],
      },
    ],
  });

  assert.ok(errors.some((error) => error.includes("registration.registerTool") && error.includes("missing source reference")));
  assert.ok(errors.some((error) => error.includes("registration.registerTool") && error.includes("missing capture assertions")));
  assert.ok(errors.some((error) => error.includes("registration.registerTool") && error.includes("synthetic registration arguments")));
  assert.ok(errors.some((error) => error.includes("hook.before_tool_call") && error.includes("missing capture assertions")));
  assert.ok(errors.some((error) => error.includes("hook.before_tool_call") && error.includes("synthetic hook event")));
  assert.ok(errors.some((error) => error.includes("hook.before_tool_call") && error.includes("synthetic hook context")));
  assert.ok(errors.some((error) => error.includes("entrypoint.fixture:index") && error.includes("missing capture assertions")));
  assert.ok(errors.some((error) => error.includes("issue.fixture") && error.includes("missing probe evidence")));
  assert.ok(errors.some((error) => error.includes("issue.fixture") && error.includes("missing probe assertions")));
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
