import assert from "node:assert/strict";
import { mkdtemp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { test } from "node:test";
import { buildGeneratedSurfaceReport } from "../scripts/check-generated-surface-fixture.mjs";

test("generated surface fixture verifies target OpenClaw surface", async () => {
  const tempDir = await mkdtemp(path.join(os.tmpdir(), "crabpot-generated-surface-"));
  const openclawRoot = path.join(tempDir, "openclaw");
  const pluginRoot = path.join(tempDir, "generated-plugin");
  await mkdir(path.join(openclawRoot, "src/plugins/compat"), { recursive: true });

  await writeFile(
    path.join(openclawRoot, "package.json"),
    JSON.stringify(
      {
        name: "openclaw",
        exports: {
          "./plugin-sdk": "./dist/plugin-sdk/index.js",
          "./plugin-sdk/runtime": "./dist/plugin-sdk/runtime.js",
        },
      },
      null,
      2,
    ),
  );
  await writeFile(
    path.join(openclawRoot, "src/plugins/compat/registry.ts"),
    'export const records = [{ code: "fixture-record", status: "active" }];\n',
  );
  await writeFile(
    path.join(openclawRoot, "src/plugins/hook-types.ts"),
    'export const PLUGIN_HOOK_NAMES = ["before_tool_call", "llm_input"] as const;\n',
  );
  await writeFile(
    path.join(openclawRoot, "src/plugins/api-builder.ts"),
    "export function buildPluginApi() { return { registerTool() {}, registerService() {} }; }\n",
  );
  await writeFile(
    path.join(openclawRoot, "src/plugins/types.ts"),
    [
      "export type OpenClawPluginApi = {",
      "  registerTool: (tool: unknown) => void;",
      "  onConversationBindingResolved: (handler: () => void) => void;",
      "  on: (name: string, handler: () => void) => void;",
      "};",
      "",
    ].join("\n"),
  );
  await writeFile(
    path.join(openclawRoot, "src/plugins/captured-registration.ts"),
    "export const captured = { registerTool() {}, registerService() {} };\n",
  );
  await writeFile(
    path.join(openclawRoot, "src/plugins/manifest.ts"),
    "export type PluginManifest = {\n  id: string;\n  contracts?: PluginManifestContracts;\n};\nexport type PluginManifestContracts = {\n  tools?: string[];\n  speechProviders?: string[];\n};\n",
  );

  try {
    const report = await buildGeneratedSurfaceReport({
      openclawPath: openclawRoot,
      pluginRoot,
    });

    assert.equal(report.status, "pass");
    assert.deepEqual(report.expected.hooks, ["before_tool_call", "llm_input"]);
    assert.deepEqual(report.expected.registrars, ["registerService", "registerTool"]);
    assert.deepEqual(report.expected.directCallbacks, ["onConversationBindingResolved"]);
    assert.deepEqual(report.expected.sdkExports, ["openclaw/plugin-sdk", "openclaw/plugin-sdk/runtime"]);
    assert.deepEqual(report.expected.manifestContracts, ["speechProviders", "tools"]);
    assert.equal(report.summary.missingStaticCount, 0);
    assert.equal(report.summary.missingRuntimeCount, 0);
  } finally {
    await rm(tempDir, { recursive: true, force: true });
  }
});

test("generated surface fixture honors platform-specific CLI shell invocation", async () => {
  const source = await readFile("scripts/check-generated-surface-fixture.mjs", "utf8");

  assert.match(source, /shell: invocation\.shell === true/);
});
