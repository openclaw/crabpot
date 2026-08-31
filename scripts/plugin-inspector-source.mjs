import { spawnSync } from "node:child_process";
import { existsSync, mkdirSync, rmSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { repoRoot } from "./manifest-lib.mjs";

export const pluginInspectorRef = "20545f6232aef543cce2b39ed56a39201bac45c4";
export const pluginInspectorPackage = "@openclaw/plugin-inspector@0.3.22";

export async function loadPluginInspector() {
  const publicApi = await import(pathToFileURL(resolvePluginInspectorSourcePath()).href);
  if (typeof publicApi.inspectPlugin === "function" && typeof publicApi.inspectSourceText === "function") {
    return publicApi;
  }

  const advancedApiPath = path.join(resolvePluginInspectorRoot(), "src", "advanced.js");
  return import(pathToFileURL(advancedApiPath).href);
}

export async function loadPluginInspectorPublicApi() {
  return import(pathToFileURL(resolvePluginInspectorPublicApiPath()).href);
}

export function resolvePluginInspectorCliInvocation(options = {}) {
  if (process.env.CRABPOT_PLUGIN_INSPECTOR_BIN) {
    return {
      command: process.env.CRABPOT_PLUGIN_INSPECTOR_BIN,
      args: [],
    };
  }

  const useSource = options.preferSource || process.env.CRABPOT_PLUGIN_INSPECTOR_CLI === "source";
  if (!useSource) {
    return {
      command: npmCommand(),
      args: ["exec", "--yes", "--package", pluginInspectorPackage, "--", "plugin-inspector"],
      shell: process.platform === "win32",
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

function resolvePluginInspectorPublicApiPath() {
  return path.join(resolvePluginInspectorRoot(), "src", "index.js");
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
  const installMarker = path.join(checkoutDir, "node_modules", ".crabpot-install-ready");

  if (isPinnedCheckoutReady(checkoutDir)) {
    return checkoutDir;
  }

  mkdirSync(checkoutParent, { recursive: true });
  withCheckoutLock(checkoutParent, () => {
    if (isPinnedCheckoutReady(checkoutDir)) {
      return;
    }

    if (!existsSync(sourcePath) || readGitHead(checkoutDir) !== pluginInspectorRef) {
      rmSync(checkoutDir, { force: true, recursive: true });
      run("git", ["init", checkoutDir]);
      run("git", ["-C", checkoutDir, "fetch", "--depth=1", "https://github.com/openclaw/plugin-inspector.git", pluginInspectorRef]);
      run("git", ["-C", checkoutDir, "checkout", "--detach", "FETCH_HEAD"]);
    }
    run(npmCommand(), ["ci", "--omit=dev", "--ignore-scripts", "--no-audit", "--no-fund"], checkoutDir);
    writeFileSync(installMarker, `${pluginInspectorRef}\n`, "utf8");
  });

  if (!isPinnedCheckoutReady(checkoutDir)) {
    throw new Error(`plugin-inspector checkout did not prepare ${pluginInspectorRef}`);
  }
  return checkoutDir;
}

export function isPinnedCheckoutReady(checkoutDir, expectedRef = pluginInspectorRef) {
  const sourcePath = path.join(checkoutDir, "src", "index.js");
  const installMarker = path.join(checkoutDir, "node_modules", ".crabpot-install-ready");
  return existsSync(sourcePath) && readGitHead(checkoutDir) === expectedRef && existsSync(installMarker);
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

function npmCommand() {
  return "npm";
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

function run(command, commandArgs, cwd = repoRoot) {
  const result = spawnSync(command, commandArgs, {
    cwd,
    encoding: "utf8",
    shell: process.platform === "win32" && command === npmCommand(),
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
