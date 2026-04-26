import assert from "node:assert/strict";
import { test } from "node:test";
import { resolveFixtureSet } from "../scripts/resolve-fixture-set.mjs";

const manifest = {
  fixtures: [
    { id: "wecom", path: "plugins/wecom" },
    { id: "opik-openclaw", path: "plugins/opik-openclaw" },
    { id: "codex-app-server", path: "plugins/codex-app-server" },
    { id: "hasdata", path: "plugins/hasdata" },
  ],
};
const policy = {
  fixtureSets: {
    smoke: ["wecom", "opik-openclaw"],
  },
};
const plan = {
  fixtures: [
    {
      id: "wecom",
      entrypoints: [{ status: "dependency-install-required", requiredCapabilities: ["dependency-install"] }],
    },
    {
      id: "opik-openclaw",
      entrypoints: [{ status: "build-required", requiredCapabilities: ["build", "ts-loader"] }],
    },
    {
      id: "codex-app-server",
      entrypoints: [{ status: "sdk-alias-required", requiredCapabilities: ["sdk-alias-compat", "ts-loader"] }],
    },
    {
      id: "hasdata",
      entrypoints: [{ status: "ts-loader-required", requiredCapabilities: ["side-effect-sandbox", "ts-loader"] }],
    },
  ],
};

test("fixture set resolver uses policy fixture groups", async () => {
  const resolved = await resolveFixtureSet({ fixtureSet: "smoke", manifest, policy, plan });

  assert.deepEqual(
    resolved.fixtures.map((fixture) => fixture.id),
    ["opik-openclaw", "wecom"],
  );
  assert.equal(resolved.count, 2);
});

test("fixture set resolver derives capability groups from workspace plan", async () => {
  const resolved = await resolveFixtureSet({ fixtureSet: "sdk-alias", manifest, policy, plan });

  assert.deepEqual(resolved.fixtures.map((fixture) => fixture.id), ["codex-app-server"]);
  assert.ok(resolved.fixtures[0].capabilities.includes("sdk-alias-compat"));
});

test("fixture set resolver rejects unknown explicit fixtures", async () => {
  await assert.rejects(
    () => resolveFixtureSet({ fixtureSet: "wecom,missing", manifest, policy, plan }),
    /unknown fixture/,
  );
});

test("fixture set resolver excludes side-effect fixtures from all-known-safe", async () => {
  const resolved = await resolveFixtureSet({ fixtureSet: "all-known-safe", manifest, policy, plan });

  assert.deepEqual(resolved.fixtures.map((fixture) => fixture.id), [
    "codex-app-server",
    "opik-openclaw",
    "wecom",
  ]);
  assert.ok(resolved.fixtures.every((fixture) => !fixture.capabilities.includes("side-effect-sandbox")));
});

test("fixture set resolver requires explicit allow-empty for none", async () => {
  await assert.rejects(
    () => resolveFixtureSet({ fixtureSet: "none", manifest, policy, plan }),
    /selected no fixtures/,
  );

  const resolved = await resolveFixtureSet({ fixtureSet: "none", manifest, policy, plan, allowEmpty: true });

  assert.equal(resolved.count, 0);
  assert.deepEqual(resolved.fixtures, []);
});

test("fixture set resolver derives changed plugin submodules from git paths", async () => {
  const resolved = await resolveFixtureSet({
    fixtureSet: "changed-submodules",
    manifest,
    policy,
    plan,
    changedPaths: ["plugins/wecom", "plugins/hasdata/package.json", "README.md"],
  });

  assert.deepEqual(resolved.fixtures.map((fixture) => fixture.id), ["hasdata", "wecom"]);
});

test("fixture set resolver expands gitmodule changes to every plugin", async () => {
  const resolved = await resolveFixtureSet({
    fixtureSet: "changed-submodules",
    manifest,
    policy,
    plan,
    changedPaths: [".gitmodules"],
  });

  assert.deepEqual(resolved.fixtures.map((fixture) => fixture.id), [
    "codex-app-server",
    "hasdata",
    "opik-openclaw",
    "wecom",
  ]);
});

test("fixture set resolver ignores manifest metadata-only changes", async () => {
  const resolved = await resolveFixtureSet({
    fixtureSet: "changed-submodules",
    manifest,
    policy,
    plan,
    changedPaths: ["crabpot.config.json", "scripts/resolve-fixture-set.mjs"],
    allowEmpty: true,
  });

  assert.equal(resolved.count, 0);
  assert.deepEqual(resolved.fixtures, []);
});
