import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { test } from "node:test";
import {
  isPinnedCheckoutReady,
  pluginInspectorPackage,
  pluginInspectorRef,
  resolvePluginInspectorCliInvocation,
  resolvePluginInspectorCliPath,
} from "../scripts/plugin-inspector-source.mjs";

test("plugin inspector source pin requires an exact prepared checkout", (t) => {
  assert.equal(pluginInspectorRef, "19512a12323eab2fff783820ffd20c3c04040964");

  const checkoutDir = mkdtempSync(path.join(os.tmpdir(), "crabpot-plugin-inspector-"));
  t.after(() => rmSync(checkoutDir, { force: true, recursive: true }));
  const sourcePath = path.join(checkoutDir, "src", "index.js");
  const installMarker = path.join(checkoutDir, "node_modules", ".crabpot-install-ready");
  mkdirSync(path.dirname(sourcePath), { recursive: true });
  writeFileSync(sourcePath, "export {};\n", "utf8");
  runGit(checkoutDir, ["init"]);
  runGit(checkoutDir, ["add", "src/index.js"]);
  runGit(checkoutDir, [
    "-c",
    "user.name=Crabpot Test",
    "-c",
    "user.email=crabpot@example.invalid",
    "commit",
    "-m",
    "test fixture",
  ]);
  const fixtureRef = runGit(checkoutDir, ["rev-parse", "HEAD"]).stdout.trim();

  assert.equal(isPinnedCheckoutReady(checkoutDir, fixtureRef), false);
  mkdirSync(path.dirname(installMarker), { recursive: true });
  writeFileSync(installMarker, `${fixtureRef}\n`, "utf8");
  assert.equal(isPinnedCheckoutReady(checkoutDir, fixtureRef), true);
  assert.equal(isPinnedCheckoutReady(checkoutDir, pluginInspectorRef), false);
  rmSync(installMarker);
  assert.equal(isPinnedCheckoutReady(checkoutDir, fixtureRef), false);
});

test("plugin inspector smoke defaults to the published npm package", () => {
  withEnv({}, () => {
    const invocation = resolvePluginInspectorCliInvocation();

    assert.equal(invocation.command, "npm");
    assert.deepEqual(invocation.args, ["exec", "--yes", "--package", pluginInspectorPackage, "--", "plugin-inspector"]);
    assert.equal(invocation.shell, process.platform === "win32");
  });
});

test("plugin inspector smoke can run local source or an explicit binary", () => {
  withEnv({ CRABPOT_PLUGIN_INSPECTOR_CLI: "source" }, () => {
    assert.deepEqual(resolvePluginInspectorCliInvocation(), {
      command: process.execPath,
      args: [resolvePluginInspectorCliPath()],
    });
  });

  withEnv({}, () => {
    assert.deepEqual(resolvePluginInspectorCliInvocation({ preferSource: true }), {
      command: process.execPath,
      args: [resolvePluginInspectorCliPath()],
    });
  });

  withEnv({ CRABPOT_PLUGIN_INSPECTOR_BIN: "/tmp/plugin-inspector" }, () => {
    assert.deepEqual(resolvePluginInspectorCliInvocation(), {
      command: "/tmp/plugin-inspector",
      args: [],
    });
  });
});

test("plugin inspector smoke uses full default findings output", () => {
  const sourceScript = readFileSync(new URL("../scripts/plugin-inspector-source.mjs", import.meta.url), "utf8");
  const smokeScript = readFileSync(new URL("../scripts/run-plugin-inspector-smoke.mjs", import.meta.url), "utf8");

  assert.match(
    sourceScript,
    /run\(npmCommand\(\), \["ci", "--omit=dev", "--ignore-scripts", "--no-audit", "--no-fund"\], checkoutDir\)/,
  );
  assert.doesNotMatch(smokeScript, /--include-inspector-gaps/);
  assert.doesNotMatch(smokeScript, /--author-facing/);
  assert.doesNotMatch(smokeScript, /const command =/);
  assert.match(smokeScript, /"report", "--config", configPath, "--out", outDir/);
});

test("plugin inspector smoke forwards check mode and preserves failure status", (t) => {
  const inspectorRoot = mkdtempSync(path.join(os.tmpdir(), "crabpot-inspector-smoke-"));
  t.after(() => rmSync(inspectorRoot, { recursive: true, force: true }));
  mkdirSync(path.join(inspectorRoot, "src"));
  writeFileSync(
    path.join(inspectorRoot, "src", "cli.js"),
    'console.log(JSON.stringify(process.argv.slice(2))); process.exitCode = process.argv.includes("--check") ? 1 : 0;\n',
  );

  for (const check of [false, true]) {
    const result = spawnSync(process.execPath, [
      "scripts/run-plugin-inspector-smoke.mjs",
      "--config", "fixture-config.json",
      "--out", "fixture-reports",
      ...(check ? ["--check"] : []),
    ], {
      cwd: path.resolve(import.meta.dirname, ".."),
      encoding: "utf8",
      env: {
        ...process.env,
        CRABPOT_PLUGIN_INSPECTOR_BIN: "",
        CRABPOT_PLUGIN_INSPECTOR_CLI: "source",
        CRABPOT_PLUGIN_INSPECTOR_DIR: inspectorRoot,
      },
    });
    assert.equal(result.status, check ? 1 : 0, result.stderr);
    assert.deepEqual(JSON.parse(result.stdout), [
      "report", "--config", "fixture-config.json", "--out", "fixture-reports",
      ...(check ? ["--check"] : []),
    ]);
  }
});

function runGit(cwd, args) {
  const result = spawnSync("git", args, { cwd, encoding: "utf8" });
  assert.equal(result.status, 0, result.stderr);
  return result;
}

function withEnv(values, callback) {
  const keys = ["CRABPOT_PLUGIN_INSPECTOR_BIN", "CRABPOT_PLUGIN_INSPECTOR_CLI"];
  const previous = Object.fromEntries(keys.map((key) => [key, process.env[key]]));
  for (const key of keys) {
    delete process.env[key];
  }
  Object.assign(process.env, values);
  try {
    callback();
  } finally {
    for (const key of keys) {
      if (previous[key] === undefined) {
        delete process.env[key];
      } else {
        process.env[key] = previous[key];
      }
    }
  }
}
