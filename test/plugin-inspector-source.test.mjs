import assert from "node:assert/strict";
import { test } from "node:test";
import {
  pluginInspectorPackage,
  resolvePluginInspectorCliInvocation,
  resolvePluginInspectorCliPath,
} from "../scripts/plugin-inspector-source.mjs";

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

  withEnv({ CRABPOT_PLUGIN_INSPECTOR_BIN: "/tmp/plugin-inspector" }, () => {
    assert.deepEqual(resolvePluginInspectorCliInvocation(), {
      command: "/tmp/plugin-inspector",
      args: [],
    });
  });
});

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
