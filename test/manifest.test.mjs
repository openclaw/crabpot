import assert from "node:assert/strict";
import { test } from "node:test";
import { readManifest, validateManifest } from "../scripts/manifest-lib.mjs";

test("fixture manifest is valid and seam-rich", async () => {
  const manifest = await readManifest();

  assert.equal(manifest.submoduleRoot, "plugins");
  assert.ok(manifest.fixtures.length >= 10);
  assert.deepEqual(
    ["hyperspell", "honcho", "composio", "memu-engine", "secureclaw", "memos-cloud"].filter((id) =>
      manifest.fixtures.some((fixture) => fixture.id === id),
    ),
    ["hyperspell", "honcho", "composio", "memu-engine", "secureclaw", "memos-cloud"],
  );

  const seams = new Set(manifest.fixtures.flatMap((fixture) => fixture.seams));
  for (const seam of [
    "channel",
    "tool",
    "dynamic-tool",
    "llm-observer",
    "diagnostics",
    "gateway-service",
    "provider-capability",
    "async-job",
    "prompt-mutation",
    "memory-runtime",
    "mcp",
    "python-sidecar",
    "security-audit",
    "legacy-hook-api",
  ]) {
    assert.ok(seams.has(seam), `missing seam coverage: ${seam}`);
  }
});

test("fixture paths are stable plugin submodule paths", async () => {
  const manifest = await readManifest();

  for (const fixture of manifest.fixtures) {
    assert.match(fixture.path, /^plugins\/[a-z0-9][a-z0-9-]*$/);
    assert.ok(!fixture.path.includes(".."));
  }
});

test("manifest validation rejects invalid fixture contracts before CI materializes plugins", () => {
  assert.throws(() => validateManifest(invalidManifest()), (error) => {
    for (const expected of [
      "manifest.version must be 1",
      'manifest.submoduleRoot must be "plugins"',
      "invalid fixture id: Bad_ID",
      "duplicate fixture id: Bad_ID",
      "duplicate fixture path: ../outside",
      "fixture must declare exactly one of repo or package",
      "repo must be a GitHub HTTPS .git URL",
      "package.name must be set",
      "priority must be high, medium, or low",
      "seams must be non-empty",
      "expect.hooks must be a non-empty array",
      "execution.blockedFailures must be a non-empty array",
    ]) {
      assert.match(error.message, new RegExp(escapeRegExp(expected)));
    }
    return true;
  });
});

function invalidManifest() {
  return {
    version: 2,
    submoduleRoot: "extensions",
    fixtures: [
      {
        id: "Bad_ID",
        path: "../outside",
        repo: "git@github.com:owner/repo",
        package: {},
        priority: "urgent",
        seams: [],
        execution: {
          blockedFailures: [],
        },
        expect: {
          hooks: [],
        },
      },
      {
        id: "Bad_ID",
        path: "../outside",
        repo: "git@github.com:owner/repo",
        priority: "urgent",
        seams: [],
      },
    ],
  };
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
