#!/usr/bin/env node
import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  configuredTimeoutMs,
  defaultPluginInspectorTimeoutMs,
  resolvePluginInspectorCliInvocation,
} from "./plugin-inspector-source.mjs";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const args = process.argv.slice(2);
const outIndex = args.indexOf("--out");
const outDir = outIndex === -1 ? ".crabpot/plugin-inspector-smoke" : args[outIndex + 1];
const configIndex = args.indexOf("--config");
const configPath = configIndex === -1 ? "crabpot.config.json" : args[configIndex + 1];

const inspectorArgs = ["report", "--config", configPath, "--out", outDir];
const invocation = resolvePluginInspectorCliInvocation();
const timeout = configuredTimeoutMs("CRABPOT_PLUGIN_INSPECTOR_TIMEOUT_MS", defaultPluginInspectorTimeoutMs);
const result = spawnSync(invocation.command, [...invocation.args, ...inspectorArgs], {
  cwd: repoRoot,
  encoding: "utf8",
  shell: invocation.shell === true,
  stdio: "inherit",
  timeout,
});

if (result.error) {
  if (result.error.code === "ETIMEDOUT") {
    throw new Error(`plugin-inspector smoke timed out after ${timeout}ms`);
  }
  throw result.error;
}
process.exitCode = result.status ?? 1;
