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
  assert.equal(pluginInspectorRef, "ac7dd531ac5d6d62b3e299065132d52b62e7dbd9");

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

test("plugin inspector smoke check fails on a real missing registration", (t) => {
  const root = mkdtempSync(path.join(os.tmpdir(), "crabpot-inspector-smoke-"));
  t.after(() => rmSync(root, { force: true, recursive: true }));
  mkdirSync(path.join(root, "fixture"));
  writeFileSync(path.join(root, "fixture", "index.js"), "export {};\n");
  const configPath = path.join(root, "config.json");
  writeFileSync(configPath, JSON.stringify({
    version: 1,
    submoduleRoot: ".",
    fixtures: [{
      id: "fixture", path: "fixture", repo: "https://example.invalid/fixture.git",
      priority: "high", seams: ["tool"], expect: { registrations: ["registerTool"] },
    }],
  }));
  const env = {
    ...process.env,
    CRABPOT_PLUGIN_INSPECTOR_DIR: path.dirname(path.dirname(resolvePluginInspectorCliPath())),
    CRABPOT_PLUGIN_INSPECTOR_CLI: "source",
  };
  delete env.CRABPOT_PLUGIN_INSPECTOR_BIN;
  for (const check of [false, true]) {
    const out = path.join(root, check ? "checked" : "report-only");
    const result = spawnSync(process.execPath, [
      "scripts/run-plugin-inspector-smoke.mjs", "--config", configPath, "--out", out,
      ...(check ? ["--check"] : []),
    ], { cwd: new URL("..", import.meta.url), env, encoding: "utf8" });
    assert.ifError(result.error);
    assert.match(result.stdout, /Status: FAIL/, result.stderr);
    const report = JSON.parse(readFileSync(path.join(out, "plugin-inspector-report.json"), "utf8"));
    assert.equal(report.status, "fail");
    assert.equal(report.breakages[0].code, "missing-expected-seam");
    assert.equal(result.status, check ? 1 : 0, result.stderr || result.stdout);
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
