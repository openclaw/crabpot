#!/usr/bin/env node
import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const pluginInspectorRef = "7348aadd7897505bc433c61aa912d256b6f208a4";
const args = process.argv.slice(2);
const check = args.includes("--check");
const outIndex = args.indexOf("--out");
const outDir = outIndex === -1 ? ".crabpot/plugin-inspector-smoke" : args[outIndex + 1];
const configIndex = args.indexOf("--config");
const configPath = configIndex === -1 ? "crabpot.config.json" : args[configIndex + 1];

const command = check ? "ci" : "report";
const inspectorArgs = [command, "--config", configPath, "--out", outDir];
const invocation = resolveInspectorInvocation();
const result = spawnSync(invocation.command, [...invocation.args, ...inspectorArgs], {
  cwd: repoRoot,
  encoding: "utf8",
  stdio: "inherit",
});

if (result.error) {
  throw result.error;
}
process.exitCode = result.status ?? 1;

function resolveInspectorInvocation() {
  if (process.env.CRABPOT_PLUGIN_INSPECTOR_BIN) {
    return {
      command: process.env.CRABPOT_PLUGIN_INSPECTOR_BIN,
      args: [],
    };
  }

  const siblingCli = path.resolve(repoRoot, "../plugin-inspector/src/cli.js");
  if (existsSync(siblingCli)) {
    return {
      command: process.execPath,
      args: [siblingCli],
    };
  }

  return {
    command: "npx",
    args: ["--yes", `github:openclaw/plugin-inspector#${pluginInspectorRef}`],
  };
}
