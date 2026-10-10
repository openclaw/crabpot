import { randomUUID } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, rmdirSync, rmSync, unlinkSync, writeFileSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { repoRoot } from "./manifest-lib.mjs";
import { configuredTimeoutMs, runOwnedCommand } from "./owned-command.mjs";

export const pluginInspectorRef = "d0cfd5ef980e6fc9c10a2252760249a79baa8e3c";
export const pluginInspectorPackage = "@openclaw/plugin-inspector@0.3.26";
const defaultGitTimeoutMs = 2 * 60 * 1000;
const defaultNpmTimeoutMs = 2 * 60 * 1000;
export const defaultPluginInspectorTimeoutMs = 10 * 60 * 1000;

export async function loadPluginInspector() {
  const publicApi = await import(pathToFileURL(resolvePluginInspectorSourcePath()).href);
  if (typeof publicApi.inspectPlugin === "function" && typeof publicApi.inspectSourceText === "function") {
    return publicApi;
  }

  const advancedApiPath = path.join(resolvePluginInspectorRoot(), "src", "advanced.js");
  return import(pathToFileURL(advancedApiPath).href);
}

export async function loadPluginInspectorPublicApi({ prepare = true } = {}) {
  const root = resolvePluginInspectorRoot({ prepare });
  return root ? import(pathToFileURL(path.join(root, "src", "index.js")).href) : null;
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

function resolvePluginInspectorRoot({ prepare = true } = {}) {
  if (process.env.CRABPOT_PLUGIN_INSPECTOR_DIR) {
    return path.resolve(repoRoot, process.env.CRABPOT_PLUGIN_INSPECTOR_DIR);
  }

  const siblingRoot = path.resolve(repoRoot, "../plugin-inspector");
  if (existsSync(path.join(siblingRoot, "src", "index.js"))) {
    return siblingRoot;
  }

  if (prepare) return ensurePinnedInspectorCheckout();
  // Failure reporting must never acquire a checkout lock, run Git, or install.
  const pinnedRoot = path.join(repoRoot, ".crabpot", "plugin-inspector", pluginInspectorRef);
  const marker = path.join(pinnedRoot, "node_modules", ".crabpot-install-ready");
  return existsSync(path.join(pinnedRoot, "src", "index.js")) && existsSync(marker) &&
    readFileSync(marker, "utf8").trim() === pluginInspectorRef ? pinnedRoot : null;
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
  const ownerFile = path.join(lockDir, randomUUID());
  const startedAt = Date.now();

  while (true) {
    try {
      mkdirSync(lockDir);
      break;
    } catch (error) {
      if (error?.code !== "EEXIST") {
        throw error;
      }
      if (Date.now() - startedAt > 120_000) {
        throw new Error(`plugin-inspector checkout lock remained busy after 120000ms: ${lockDir}. Wait for the holder; remove the lock only after confirming its commands have stopped.`);
      }
      sleep(100);
    }
  }

  let publishedOwner = false;
  let failure;
  try {
    writeFileSync(ownerFile, "", { flag: "wx" });
    publishedOwner = true;
    callback();
  } catch (error) {
    failure = error;
    throw error;
  } finally {
    // A timed-out waiter cannot prove the mutator stopped. Keep ownership when
    // the command supervisor could not confirm cleanup, even after failure.
    if (!failure?.cleanupError) {
      try {
        // A replacement has another token; never recursively delete its lock.
        if (publishedOwner) unlinkSync(ownerFile);
        rmdirSync(lockDir);
      } catch (error) {
        if (failure) throw new AggregateError([failure, error], "checkout failed and lock release failed");
        throw error;
      }
    }
  }
}

function sleep(ms) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}

function npmCommand() {
  return "npm";
}

function readGitHead(checkoutDir) {
  const timeout = configuredTimeoutMs("CRABPOT_GIT_TIMEOUT_MS", defaultGitTimeoutMs);
  const result = runOwnedCommand("git", ["-C", checkoutDir, "rev-parse", "HEAD"], {
    encoding: "utf8",
    timeout,
  });
  if (result.error) {
    if (result.cleanupError) result.error.cleanupError = result.cleanupError;
    if (result.error.code === "ETIMEDOUT" && !result.cleanupError) {
      throw new Error(`git rev-parse HEAD timed out after ${timeout}ms`, { cause: result.error });
    }
    throw result.error;
  }
  if (result.status !== 0) {
    return null;
  }
  return result.stdout.trim();
}

function run(command, commandArgs, cwd = repoRoot) {
  const timeout = command === npmCommand()
    ? configuredTimeoutMs("CRABPOT_NPM_TIMEOUT_MS", defaultNpmTimeoutMs)
    : configuredTimeoutMs("CRABPOT_GIT_TIMEOUT_MS", defaultGitTimeoutMs);
  const result = runOwnedCommand(command, commandArgs, {
    cwd,
    encoding: "utf8",
    stdio: "pipe",
    timeout,
  });
  if (result.error) {
    if (result.cleanupError) result.error.cleanupError = result.cleanupError;
    if (result.error.code === "ETIMEDOUT" && !result.cleanupError) {
      throw new Error(`${command} ${commandArgs.join(" ")} timed out after ${timeout}ms`, { cause: result.error });
    }
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
