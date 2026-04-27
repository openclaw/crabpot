import { spawnSync } from "node:child_process";
import { existsSync, mkdirSync, rmSync, statSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { repoRoot } from "./manifest-lib.mjs";

export const pluginInspectorRef = "0fc9697a14cd0e13550e2bfce770cff966b64ace";

export async function loadPluginInspector() {
  return import(pathToFileURL(resolvePluginInspectorSourcePath()).href);
}

export function resolvePluginInspectorCliInvocation() {
  if (process.env.CRABPOT_PLUGIN_INSPECTOR_BIN) {
    return {
      command: process.env.CRABPOT_PLUGIN_INSPECTOR_BIN,
      args: [],
    };
  }

  return {
    command: process.execPath,
    args: [resolvePluginInspectorCliPath()],
  };
}

export function resolvePluginInspectorCliPath() {
  return path.join(resolvePluginInspectorRoot(), "src", "cli.js");
}

function resolvePluginInspectorSourcePath() {
  return path.join(resolvePluginInspectorRoot(), "src", "advanced.js");
}

function resolvePluginInspectorRoot() {
  if (process.env.CRABPOT_PLUGIN_INSPECTOR_DIR) {
    return path.resolve(repoRoot, process.env.CRABPOT_PLUGIN_INSPECTOR_DIR);
  }

  const siblingRoot = path.resolve(repoRoot, "../plugin-inspector");
  if (existsSync(path.join(siblingRoot, "src", "index.js"))) {
    return siblingRoot;
  }

  return ensurePinnedInspectorCheckout();
}

function ensurePinnedInspectorCheckout() {
  const checkoutParent = path.join(repoRoot, ".crabpot", "plugin-inspector");
  const checkoutDir = path.join(checkoutParent, pluginInspectorRef);
  const sourcePath = path.join(checkoutDir, "src", "index.js");

  if (existsSync(sourcePath) && readGitHead(checkoutDir) === pluginInspectorRef) {
    return checkoutDir;
  }

  mkdirSync(checkoutParent, { recursive: true });
  withCheckoutLock(checkoutParent, () => {
    if (existsSync(sourcePath) && readGitHead(checkoutDir) === pluginInspectorRef) {
      return;
    }

    rmSync(checkoutDir, { force: true, recursive: true });
    run("git", ["init", checkoutDir]);
    run("git", ["-C", checkoutDir, "fetch", "--depth=1", "https://github.com/openclaw/plugin-inspector.git", pluginInspectorRef]);
    run("git", ["-C", checkoutDir, "checkout", "--detach", "FETCH_HEAD"]);
  });

  if (readGitHead(checkoutDir) !== pluginInspectorRef) {
    throw new Error(`plugin-inspector checkout did not resolve to ${pluginInspectorRef}`);
  }
  return checkoutDir;
}

function withCheckoutLock(checkoutParent, callback) {
  const lockDir = path.join(checkoutParent, ".checkout.lock");
  const startedAt = Date.now();

  while (true) {
    try {
      mkdirSync(lockDir);
      break;
    } catch (error) {
      if (error?.code !== "EEXIST") {
        throw error;
      }
      if (isStaleLock(lockDir) || Date.now() - startedAt > 120_000) {
        rmSync(lockDir, { force: true, recursive: true });
        continue;
      }
      sleep(100);
    }
  }

  try {
    callback();
  } finally {
    rmSync(lockDir, { force: true, recursive: true });
  }
}

function isStaleLock(lockDir) {
  try {
    return Date.now() - statSync(lockDir).mtimeMs > 300_000;
  } catch {
    return true;
  }
}

function sleep(ms) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
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
    stdio: "pipe",
  });
  if (result.error) {
    throw result.error;
  }
  if (result.status !== 0) {
    if (result.stdout) {
      process.stderr.write(result.stdout);
    }
    if (result.stderr) {
      process.stderr.write(result.stderr);
    }
    throw new Error(`${command} ${commandArgs.join(" ")} failed with exit code ${result.status}`);
  }
}
