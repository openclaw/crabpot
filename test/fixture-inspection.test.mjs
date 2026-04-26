import assert from "node:assert/strict";
import { test } from "node:test";
import { inspectFixture, inspectSourceText } from "../scripts/inspect-fixtures.mjs";
import { readManifest } from "../scripts/manifest-lib.mjs";

test("fixture inspections satisfy expected hooks and registrations", async () => {
  const manifest = await readManifest();

  for (const fixture of manifest.fixtures) {
    const inspection = await inspectFixture(fixture);
    assert.equal(inspection.status, "ok", `${fixture.id} checkout should be materialized`);

    for (const hook of fixture.expect?.hooks ?? []) {
      assert.ok(inspection.hooks.includes(hook), `${fixture.id} should register hook ${hook}`);
    }

    for (const registration of fixture.expect?.registrations ?? []) {
      assert.ok(
        inspection.registrations.includes(registration),
        `${fixture.id} should use ${registration}`,
      );
    }

    for (const contract of fixture.expect?.manifestContracts ?? []) {
      assert.ok(
        inspection.manifestContracts.includes(contract),
        `${fixture.id} should declare manifest contract ${contract}`,
      );
    }
  }
});

test("source inspection records exact hook, registrar, and SDK import evidence", () => {
  const inspection = inspectSourceText(
    [
      'import type { OpenClawPluginApi } from "openclaw/plugin-sdk";',
      "",
      "export function register(api) {",
      '  // api.on("llm_output", () => {});',
      '  api.on("before_tool_call", () => {});',
      "  /* api.registerHttpRoute({ path: '/ignored' }); */",
      "  api.registerService({ name: 'svc', start() {} });",
      "  return definePluginEntry({ register() {} });",
      "}",
    ].join("\n"),
    "plugins/example/index.ts",
  );

  assert.deepEqual(inspection.hooks, [
    {
      name: "before_tool_call",
      file: "plugins/example/index.ts",
      line: 5,
      ref: "plugins/example/index.ts:5",
    },
  ]);
  assert.deepEqual(
    inspection.registrations.map((registration) => `${registration.name}@${registration.ref}`),
    ["registerService@plugins/example/index.ts:7", "definePluginEntry@plugins/example/index.ts:8"],
  );
  assert.deepEqual(inspection.sdkImports, [
    {
      specifier: "openclaw/plugin-sdk",
      file: "plugins/example/index.ts",
      line: 1,
      ref: "plugins/example/index.ts:1",
    },
  ]);
});

test("source inspection ignores comments and records dynamic SDK imports", () => {
  const inspection = inspectSourceText(
    [
      "/*",
      "api.on('llm_output', () => {});",
      "api.registerTool({ name: 'commented' });",
      "*/",
      "export async function register(api) {",
      "  const sdk = await import('openclaw/plugin-sdk/runtime');",
      "  api.on(`tool_result_persist`, () => sdk);",
      "  return createChatChannelPlugin({ id: 'chat' });",
      "}",
    ].join("\n"),
    "plugins/example/runtime.ts",
  );

  assert.deepEqual(
    inspection.hooks.map((hook) => `${hook.name}@${hook.ref}`),
    ["tool_result_persist@plugins/example/runtime.ts:7"],
  );
  assert.deepEqual(
    inspection.registrations.map((registration) => `${registration.name}@${registration.ref}`),
    ["createChatChannelPlugin@plugins/example/runtime.ts:8"],
  );
  assert.deepEqual(inspection.sdkImports, [
    {
      specifier: "openclaw/plugin-sdk/runtime",
      file: "plugins/example/runtime.ts",
      line: 6,
      ref: "plugins/example/runtime.ts:6",
    },
  ]);
});
