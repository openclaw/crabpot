import assert from "node:assert/strict";
import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import { createRequire } from "node:module";
import os from "node:os";
import path from "node:path";
import { pathToFileURL } from "node:url";

const require = createRequire(path.join(process.argv[2], "package.json"));
const { pluginRoot } = await import(pathToFileURL(require.resolve("@openclaw/plugin-inspector")).href);
const root = await mkdtemp(path.join(os.tmpdir(), "crabpot-sdk-retirement-"));
try {
  const plugin = path.join(root, "plugin");
  const target = path.join(root, "openclaw");
  const registry = path.join(target, "src/plugins/compat");
  await mkdir(plugin);
  await mkdir(registry, { recursive: true });
  await writeFile(path.join(plugin, "package.json"), JSON.stringify({ name: "synthetic-retirement", version: "1.0.0", openclaw: { extensions: ["./index.js"] } }));
  await writeFile(path.join(plugin, "index.js"), 'import { executeSqliteQuerySync } from "openclaw/plugin-sdk/sqlite-runtime";\nexport default { register() {} };\n');
  await writeFile(path.join(target, "package.json"), JSON.stringify({ exports: { "./plugin-sdk/sqlite-runtime": "./sqlite.js" } }));
  await writeFile(path.join(registry, "registry.ts"), 'import { PLUGIN_COMPAT_RECORDS } from "./registry-records.js";');
  await writeFile(path.join(registry, "registry-records.ts"), 'import { SQLITE } from "./sqlite-runtime-records.js"; export const PLUGIN_COMPAT_RECORDS = [...SQLITE];');
  await writeFile(path.join(registry, "sqlite-runtime-records.ts"), `
    const RETIREMENT = { status: "deprecated", removeAfter: "2026-12-31" } as const;
    export const SQLITE = [{ ...RETIREMENT, code: "sqlite-runtime-native-access",
      surfaces: ["openclaw/plugin-sdk/sqlite-runtime.executeSqliteQuerySync"],
      replacement: "Use openOpenClawAgentSqliteWorkerStoreV2.", tests: [] }];
  `);
  const report = JSON.parse(JSON.stringify(await pluginRoot.inspect({ cwd: plugin, openclawPath: target, authorFacing: true })));
  assert.equal(report.status, "pass");
  const issue = report.issues.find((item) => item.code === "sdk-deprecated-api");
  assert.ok(issue, "source and packed package must expose retirement findings");
  assert.equal(issue.issueClass, "deprecation-warning");
  assert.equal(issue.deprecatedApi, "openclaw/plugin-sdk/sqlite-runtime.executeSqliteQuerySync");
  assert.equal(issue.replacement, "Use openOpenClawAgentSqliteWorkerStoreV2.");
  assert.equal(issue.removeAfter, "2026-12-31");
  assert.match(issue.authorRemediation.summary, /retires on Dec 31, 2026/);
  const packedTarget = path.join(root, "packed-openclaw");
  await mkdir(path.join(packedTarget, "dist"), { recursive: true });
  await writeFile(path.join(packedTarget, "package.json"), JSON.stringify({ name: "openclaw", version: "2026.10.1", exports: { "./plugin-sdk/sqlite-runtime": "./dist/sqlite.js" } }));
  await writeFile(path.join(packedTarget, "dist/index.d.ts"), "export type PluginManifest = { id: string };\n");
  const packedReport = await pluginRoot.inspect({ cwd: plugin, openclawPath: packedTarget, authorFacing: true });
  const packedIssue = packedReport.issues.find((item) => item.code === "sdk-deprecated-api");
  assert.equal(packedReport.status, "pass");
  assert.equal(packedIssue?.deprecatedApi, issue.deprecatedApi);
  assert.equal(packedIssue?.removeAfter, issue.removeAfter);
  assert.equal(packedIssue?.issueClass, "deprecation-warning");
  assert.match(packedIssue?.replacement, /openOpenClawAgentSqliteWorkerStoreV2/);
  assert.match(packedIssue?.authorRemediation.summary, /retires on Dec 31, 2026/);
  process.stdout.write(`${JSON.stringify({ coverage: "synthetic-sdk-retirement", issue, packedIssue })}\n`);
} finally {
  await rm(root, { recursive: true, force: true });
}
