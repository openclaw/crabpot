import assert from "node:assert/strict";
import { test } from "node:test";
import { readConfiguredManifest, readManifest, validateManifest } from "../scripts/manifest-lib.mjs";

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

test("openclaw development fixture set includes current monorepo and externalized packages", async () => {
  const manifest = await readConfiguredManifest({ fixtureSet: "openclaw-beta" });

  assert.deepEqual(manifest.fixtures.map((fixture) => fixture.id), [
    "brave-plugin",
    "codex",
    "diagnostics-prometheus",
    "google-meet",
    "diffs",
    "memory-lancedb",
    "openclaw-qqbot",
    "whatsapp",
  ]);
  assert.ok(
    manifest.fixtures
      .filter((fixture) => fixture.id !== "openclaw-qqbot")
      .every((fixture) => fixture.package?.tag === "beta"),
  );
  const qqbot = manifest.fixtures.find((fixture) => fixture.id === "openclaw-qqbot");
  assert.equal(qqbot.package.name, "@tencent-connect/openclaw-qqbot");
  assert.equal(qqbot.package.version, "2.0.1");
  assert.equal(qqbot.source.repo, "https://github.com/tencent-connect/openclaw-qqbot.git");
  assert.equal(qqbot.source.path, ".");
  assert.deepEqual(qqbot.expect.registrations, ["registerChannel", "registerTool"]);
  assert.equal(qqbot.execution, undefined);
});

test("Codex fixture follows current provider ownership", async () => {
  const manifest = await readManifest();
  const codex = manifest.fixtures.find((fixture) => fixture.id === "codex");

  assert.ok(codex);
  assert.ok(codex.expect.registrations.includes("registerWebSearchProvider"));
  assert.equal(codex.expect.registrations.includes("registerProvider"), false);
  assert.ok(codex.expect.manifestContracts.includes("webSearchProviders"));
});

test("bundled OpenClaw channels source-pack from the monorepo", async () => {
  const manifest = await readManifest();
  const bundled = manifest.fixtures.filter((fixture) => ["matrix", "mattermost"].includes(fixture.id));

  assert.deepEqual(bundled.map((fixture) => fixture.id), ["matrix", "mattermost"]);
  for (const fixture of bundled) {
    assert.equal(fixture.package.artifactSource, "source-pack");
    assert.ok(fixture.source.path.startsWith("extensions/"));
    assert.equal(fixture.seams.includes("npm-artifact"), false);
    assert.match(fixture.why, /source-packs it from the OpenClaw monorepo/);
  }
});

test("explicit fixture set narrows to named fixtures", async () => {
  const manifest = await readConfiguredManifest({ fixtureSet: "kitchen-sink,wecom" });

  assert.deepEqual(manifest.fixtures.map((fixture) => fixture.id), ["kitchen-sink", "wecom"]);
  assert.deepEqual(manifest.fixtureSelection, {
    fixtureSet: "kitchen-sink,wecom",
    ids: ["kitchen-sink", "wecom"],
  });
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
      "package.artifactSource must be npm or source-pack when present",
      "source.repo must be a GitHub HTTPS .git URL",
      "source.path must be a repo-relative path",
      "source.ref must be set",
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
        package: { artifactSource: "registry" },
        source: {
          repo: "git@github.com:owner/repo",
          path: "../outside",
          ref: "",
        },
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
