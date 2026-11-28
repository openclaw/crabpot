import assert from "node:assert/strict";
import { mkdtemp, mkdir, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { test } from "node:test";
import { readManifest } from "../scripts/manifest-lib.mjs";
import { loadPluginInspectorPublicApi } from "../scripts/plugin-inspector-source.mjs";

test("Diffs accepts tool-owned guidance and still requires its tool and HTTP surface", async (context) => {
  const rootDir = await mkdtemp(path.join(tmpdir(), "crabpot-diffs-contract-"));
  context.after(() => rm(rootDir, { recursive: true, force: true }));
  const manifest = await readManifest();
  const fixture = manifest.fixtures.find((item) => item.id === "diffs");
  const payload = path.join(rootDir, fixture.path, ".crabpot-package");
  await mkdir(payload, { recursive: true });
  await writeFile(path.join(payload, "package.json"), JSON.stringify({
    name: fixture.package.name, type: "module", openclaw: { extensions: ["./index.js"] },
  }));
  await writeFile(path.join(payload, "openclaw.plugin.json"), JSON.stringify({
    id: "diffs", contracts: { tools: ["diffs"] },
  }));
  const inspector = await loadPluginInspectorPublicApi();
  const inspect = async ({ hook = false, tool = true, route = true } = {}) => {
    await writeFile(path.join(payload, "index.js"), `
      import { definePluginEntry } from "openclaw/plugin-sdk/plugin-entry";
      export default definePluginEntry({ id: "diffs", register(api) {
        ${hook ? 'api.on("before_prompt_build", () => ({ prependContext: "Use diffs" }));' : ""}
        ${tool ? 'api.registerTool({ name: "diffs", execute() {} }, { name: "diffs", promptGuidance: "Use diffs" });' : ""}
        ${route ? 'api.registerHttpRoute({ path: "/plugins/diffs", handler() {} });' : ""}
      }});
    `);
    return inspector.inspectFixtureSetConfig({ config: { ...manifest, rootDir, fixtures: [fixture] } });
  };

  assert.deepEqual((await inspect()).breakages, []);
  assert.deepEqual((await inspect({ hook: true })).breakages, []);
  assert.ok((await inspect({ tool: false })).breakages.some((item) => item.message.includes("registerTool")));
  assert.ok((await inspect({ route: false })).breakages.some((item) => item.message.includes("registerHttpRoute")));
  await writeFile(path.join(payload, "openclaw.plugin.json"), JSON.stringify({ id: "diffs" }));
  assert.ok((await inspect()).breakages.some((item) => item.message.includes("manifestContracts")));
});
