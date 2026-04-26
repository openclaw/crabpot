#!/usr/bin/env node
import { spawnSync } from "node:child_process";
import { existsSync, rmSync } from "node:fs";
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

  const pinnedCli = ensurePinnedInspectorCheckout();
  return {
    command: process.execPath,
    args: [pinnedCli],
  };
}

function ensurePinnedInspectorCheckout() {
  const checkoutDir = path.join(repoRoot, ".crabpot", "plugin-inspector", pluginInspectorRef);
  const cliPath = path.join(checkoutDir, "src", "cli.js");

  if (existsSync(cliPath) && readGitHead(checkoutDir) === pluginInspectorRef) {
    return cliPath;
  }

  rmSync(checkoutDir, { force: true, recursive: true });
  run("git", ["init", checkoutDir]);
  run("git", ["-C", checkoutDir, "fetch", "--depth=1", "https://github.com/openclaw/plugin-inspector.git", pluginInspectorRef]);
  run("git", ["-C", checkoutDir, "checkout", "--detach", "FETCH_HEAD"]);

  if (readGitHead(checkoutDir) !== pluginInspectorRef) {
    throw new Error(`plugin-inspector checkout did not resolve to ${pluginInspectorRef}`);
  }
  return cliPath;
}

function readGitHead(checkoutDir) {
  const result = spawnSync("git", ["-C", checkoutDir, "rev-parse", "HEAD"], {
    encoding: "utf8",
  });
  if (result.status !== 0) {
    return null;
  }
  return result.stdout.trim();
}

function run(command, commandArgs) {
  const result = spawnSync(command, commandArgs, {
    cwd: repoRoot,
    encoding: "utf8",
    stdio: "inherit",
  });
  if (result.error) {
    throw result.error;
  }
  if (result.status !== 0) {
    throw new Error(`${command} ${commandArgs.join(" ")} failed with exit code ${result.status}`);
  }
}
