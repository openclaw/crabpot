import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { chmodSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { test } from "node:test";
import {
  isPinnedCheckoutReady,
  pluginInspectorPackage,
  pluginInspectorRef,
  resolvePluginInspectorCliInvocation,
  resolvePluginInspectorCliPath,
  run,
} from "../scripts/plugin-inspector-source.mjs";

test("plugin inspector source pin requires an exact prepared checkout", (t) => {
  assert.equal(pluginInspectorRef, "dbd761673e104f57a1ac470d4db7aa928b5b75b4");

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
  assert.match(sourceScript, /CRABPOT_GIT_TIMEOUT_MS/);
  assert.match(sourceScript, /CRABPOT_NPM_TIMEOUT_MS/);
  assert.match(smokeScript, /CRABPOT_PLUGIN_INSPECTOR_TIMEOUT_MS/);
  assert.doesNotMatch(smokeScript, /--include-inspector-gaps/);
  assert.doesNotMatch(smokeScript, /--author-facing/);
  assert.doesNotMatch(smokeScript, /const command =/);
  assert.match(smokeScript, /"report", "--config", configPath, "--out", outDir/);
});

test("plugin inspector checkout run() returns instead of blocking when the child hangs", () => {
  withEnv({ CRABPOT_GIT_TIMEOUT_MS: "250" }, () => {
    const startedAt = Date.now();
    assert.throws(
      () => run(process.execPath, ["-e", "setTimeout(() => {}, 30_000)"]),
      /timed out after 250ms/,
    );
    assert.ok(Date.now() - startedAt < 4_000, "hung git/npm checkout spawn must return");
  });
});

test("plugin inspector smoke returns instead of blocking when the inspector hangs", (t) => {
  const hangDir = mkdtempSync(path.join(os.tmpdir(), "crabpot-inspector-smoke-hang-"));
  t.after(() => rmSync(hangDir, { force: true, recursive: true }));
  const hangBin = writeHangCommand(hangDir);

  withEnv(
    {
      CRABPOT_PLUGIN_INSPECTOR_BIN: hangBin,
      CRABPOT_PLUGIN_INSPECTOR_TIMEOUT_MS: "250",
    },
    () => {
      const startedAt = Date.now();
      const result = spawnSync(process.execPath, ["scripts/run-plugin-inspector-smoke.mjs"], {
        cwd: process.cwd(),
        encoding: "utf8",
        env: process.env,
        timeout: 5_000,
      });

      assert.notEqual(result.error?.code, "ETIMEDOUT", result.error?.message);
      assert.notEqual(result.status, 0);
      assert.match(`${result.stderr}\n${result.stdout}`, /timed out after 250ms/);
      assert.ok(Date.now() - startedAt < 4_000, "hung inspector smoke spawn must return");
    },
  );
});

function runGit(cwd, args) {
  const result = spawnSync("git", args, { cwd, encoding: "utf8" });
  assert.equal(result.status, 0, result.stderr);
  return result;
}

function writeHangCommand(dir) {
  if (process.platform === "win32") {
    const file = path.join(dir, "hang-inspector.cmd");
    writeFileSync(file, `@echo off\r\n"${process.execPath}" -e "setTimeout(() => {}, 30000)"\r\n`);
    return file;
  }

  const file = path.join(dir, "hang-inspector");
  writeFileSync(file, `#!/bin/sh\nexec "${process.execPath}" -e 'setTimeout(() => {}, 30000)'\n`);
  chmodSync(file, 0o755);
  return file;
}

function withEnv(values, callback) {
  const keys = [
    "CRABPOT_PLUGIN_INSPECTOR_BIN",
    "CRABPOT_PLUGIN_INSPECTOR_CLI",
    "CRABPOT_GIT_TIMEOUT_MS",
    "CRABPOT_NPM_TIMEOUT_MS",
    "CRABPOT_PLUGIN_INSPECTOR_TIMEOUT_MS",
  ];
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
