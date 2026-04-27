#!/usr/bin/env node
import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { resolvePluginInspectorCliInvocation } from "./plugin-inspector-source.mjs";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const args = process.argv.slice(2);
const check = args.includes("--check");
const outIndex = args.indexOf("--out");
const outDir = outIndex === -1 ? ".crabpot/plugin-inspector-smoke" : args[outIndex + 1];
const configIndex = args.indexOf("--config");
const configPath = configIndex === -1 ? "crabpot.config.json" : args[configIndex + 1];

const command = check ? "ci" : "report";
const inspectorArgs = [command, "--config", configPath, "--out", outDir];
const invocation = resolvePluginInspectorCliInvocation();
const result = spawnSync(invocation.command, [...invocation.args, ...inspectorArgs], {
  cwd: repoRoot,
  encoding: "utf8",
  shell: invocation.shell === true,
  stdio: "inherit",
});

if (result.error) {
  throw result.error;
}
process.exitCode = result.status ?? 1;
