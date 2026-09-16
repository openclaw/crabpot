#!/usr/bin/env node
import assert from "node:assert/strict";
import { writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  defaultPluginInspectorTimeoutMs,
  resolvePluginInspectorCliInvocation,
} from "./plugin-inspector-source.mjs";
import { configuredTimeoutMs, runOwnedCommand } from "./owned-command.mjs";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const args = process.argv.slice(2);
const outIndex = args.indexOf("--out");
const outDir = outIndex === -1 ? ".crabpot/plugin-inspector-smoke" : args[outIndex + 1];
const configIndex = args.indexOf("--config");
const configPath = configIndex === -1 ? "crabpot.config.json" : args[configIndex + 1];
if (args.includes("--runtime") && !process.env.CRABPOT_PLUGIN_INSPECTOR_DIR) {
  throw new Error("runtime smoke requires CRABPOT_PLUGIN_INSPECTOR_DIR to identify the source or installed package");
}

const inspectorArgs = ["report", "--config", configPath, "--out", outDir, ...(args.includes("--check") ? ["--check"] : [])];
const invocation = resolvePluginInspectorCliInvocation();
const timeout = configuredTimeoutMs("CRABPOT_PLUGIN_INSPECTOR_TIMEOUT_MS", defaultPluginInspectorTimeoutMs);
const result = runOwnedCommand(invocation.command, [...invocation.args, ...inspectorArgs], {
  cwd: repoRoot,
  encoding: "utf8",
  stdio: "inherit",
  timeout,
});

if (result.error) {
  if (result.error.code === "ETIMEDOUT" && !result.cleanupError) {
    throw new Error(`plugin-inspector smoke timed out after ${timeout}ms`);
  }
  throw result.error;
}
process.exitCode = result.status ?? 1;

if (result.status === 0 && args.includes("--runtime")) {
  const fixtureRoot = path.join(repoRoot, "test", "fixtures", "dynamic-sdk-import");
  const runtimeResult = runOwnedCommand(process.execPath, [
    "scripts/synthetic-probes.mjs", "--entrypoint", "index.mjs", "--cwd", fixtureRoot,
    "--plugin-root", fixtureRoot, "--mock-sdk",
  ], {
    cwd: repoRoot,
    env: { ...process.env, CRABPOT_EXECUTE_ISOLATED: "1" },
    encoding: "utf8",
    timeout,
  });
  assert.ifError(runtimeResult.error);
  assert.ifError(runtimeResult.cleanupError);
  // This fixture intentionally rejects one Gateway call; a swallowed failure must fail the smoke.
  assert.equal(runtimeResult.status, 1, runtimeResult.stderr || runtimeResult.stdout);
  const report = JSON.parse(runtimeResult.stdout);
  assert.deepEqual(report.summary, { probeCount: 2, passCount: 1, failCount: 1, blockedCount: 0 });
  assert.deepEqual(report.results.map(({ seam, status, output, error }) => [seam, status, output ?? error]), [
    ["registerTool", "pass", { type: "string", value: "retained dynamic SDK: checked" }],
    ["registerGatewayMethod", "fail", "Gateway response error: fixture prerequisite missing"],
  ]);
  writeFileSync(path.resolve(repoRoot, outDir, "plugin-inspector-runtime.json"),
    `${JSON.stringify({ summary: report.summary, results: report.results }, null, 2)}\n`);
  console.log("plugin-inspector runtime smoke: PASS (computed tool value; Gateway rejection preserved)");
}
