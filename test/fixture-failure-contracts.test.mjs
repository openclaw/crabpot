import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";
import { classifyWorkspaceStepResult } from "../scripts/execute-workspace-plan.mjs";
import { readManifest } from "../scripts/manifest-lib.mjs";

for (const [fixtureId, blockerId] of [
  ["hapi-openclaw", "hapi-openclaw-required-config"],
  ["memory-tencentdb", "memory-tencentdb-published-missing-offload-module"],
]) {
  test(`${fixtureId} retains its exact known blocker with owned-child diagnostics`, async () => {
    const manifest = await readManifest();
    const rules = manifest.fixtures.find((fixture) => fixture.id === fixtureId).execution.blockedFailures;
    const output = await readFile(new URL(`./fixtures/${fixtureId}-capture-error.txt`, import.meta.url), "utf8");
    const result = classifyWorkspaceStepResult({ exitCode: 1, failureOutput: output }, { kind: "capture" }, rules);
    assert.equal(result.exitCode, 0);
    assert.equal(result.rawExitCode, 1);
    assert.equal(result.blockedBy, blockerId);

    for (const unexpected of [
      output.replace("timedOut: false", "timedOut: true"),
      output.replace("cancelled: false", "cancelled: true"),
      output.replace("outputTruncated: false", "outputTruncated: true"),
      output.replace("exitCode: 1", "exitCode: 2"),
      output.replace("signal: null", "signal: 'SIGTERM'"),
      output.replace("stdout: ''", "stdout: 'unexpected output'"),
      output.replace("stderr: '[plugin-inspector:", "stderr: 'Error: unrelated failure\\n[plugin-inspector:"),
      output.replace("failureClass:", "otherFailureClass:"),
      `${output}\nError: unrelated failure\n`,
    ]) {
      assert.equal(classifyWorkspaceStepResult({ exitCode: 1, failureOutput: unexpected }, { kind: "capture" }, rules).exitCode, 1);
    }
    assert.equal(classifyWorkspaceStepResult({ exitCode: 1, timedOut: true, failureOutput: output }, { kind: "capture" }, rules).exitCode, 1);
  });
}
