import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { test } from "node:test";

const missingValueCases = [
  ["scripts/capture-contracts.mjs", "--openclaw"],
  ["scripts/check-ci-policy.mjs", "--policy"],
  ["scripts/check-generated-surface-fixture.mjs", "--report-json"],
  ["scripts/compare-openclaw-refs.mjs", "--base-openclaw"],
  ["scripts/profile-contract-runtime.mjs", "--runs"],
];

for (const [script, flag] of missingValueCases) {
  test(`${script} rejects missing ${flag} values`, () => {
    const result = spawnSync(process.execPath, [script, flag], {
      cwd: process.cwd(),
      encoding: "utf8",
    });

    assert.notEqual(result.status, 0);
    assert.match(result.stderr, new RegExp(`${flag} requires a value`));
  });
}
