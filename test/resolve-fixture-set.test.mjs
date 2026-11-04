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

test("fixture set resolver can explicitly select every fixture", async () => {
  const resolved = await resolveFixtureSet({ fixtureSet: "all", manifest, policy, plan });

  assert.deepEqual(resolved.fixtures.map((fixture) => fixture.id), [
    "codex-app-server",
    "hasdata",
    "opik-openclaw",
    "wecom",
  ]);
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

test("fixture set resolver prefers concrete plugin paths over broad gitmodule changes", async () => {
  const resolved = await resolveFixtureSet({
    fixtureSet: "changed-submodules",
    manifest,
    policy,
    plan,
    changedPaths: [".gitmodules", "plugins/wecom", "crabpot.config.json"],
  });

  assert.deepEqual(resolved.fixtures.map((fixture) => fixture.id), ["wecom"]);
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

test("fixture materialization stays within known selections", async (t) => {
  for (const [fixtureSet, extra, expected] of [
    ["wecom", {}, ["wecom"]],
    ["smoke", {}, ["opik-openclaw", "wecom"]],
    ["wecom,hasdata", {}, ["hasdata", "wecom"]],
    ["build", { policy: { fixtureSets: { build: ["wecom"] } } }, ["wecom"]],
    ["changed-submodules", { changedPaths: ["plugins/hasdata/package.json"] }, ["hasdata"]],
    ["all", {}, ["codex-app-server", "hasdata", "opik-openclaw", "wecom"]],
  ]) {
    await t.test(fixtureSet, async () => {
      const acquisitions = [];
      const resolved = await resolveFixtureSet({
        fixtureSet, manifest, policy, plan, ...extra,
        materialize: true,
        openclawPath: "target checkout",
        materializeFixtures: async (ids, options) => {
          assert.equal(options.openclawPath, "target checkout");
          acquisitions.push(ids);
        },
      });
      assert.deepEqual(acquisitions, [expected]);
      assert.deepEqual(resolved.fixtures.map((fixture) => fixture.id), expected);
    });
  }
});

test("capability selections inspect the payloads after materialization", async (t) => {
  for (const [fixtureSet, expected] of [
    ["ts", ["codex-app-server", "hasdata", "opik-openclaw"]],
    ["build", ["opik-openclaw"]],
    ["sdk-alias", ["codex-app-server"]],
    ["side-effect-review", ["hasdata"]],
    ["all-known-safe", ["codex-app-server", "opik-openclaw", "wecom"]],
  ]) {
    await t.test(fixtureSet, async () => {
      const preparedPlan = { fixtures: [] };
      let acquisitions = 0;
      const resolved = await resolveFixtureSet({
        fixtureSet, manifest, policy: {}, plan: preparedPlan,
        materialize: true,
        materializeFixtures: async (ids) => {
          assert.deepEqual(ids, ["codex-app-server", "hasdata", "opik-openclaw", "wecom"]);
          await Promise.resolve();
          preparedPlan.fixtures = structuredClone(plan.fixtures);
          acquisitions += 1;
        },
      });
      assert.equal(acquisitions, 1);
      assert.deepEqual(resolved.fixtures.map((fixture) => fixture.id), expected);
      assert.ok(resolved.fixtures.every((fixture) => fixture.entrypointCount > 0));
    });
  }
});

test("empty or non-materializing selections acquire no payloads", async () => {
  const materializeFixtures = () => assert.fail("unexpected payload acquisition");
  for (const fixtureSet of ["none", "changed-submodules"]) {
    const resolved = await resolveFixtureSet({
      fixtureSet, manifest, policy, plan, materializeFixtures,
      materialize: true, allowEmpty: true, changedPaths: [],
    });
    assert.equal(resolved.count, 0);
  }
  assert.equal((await resolveFixtureSet({
    fixtureSet: "wecom", manifest, policy, plan, materializeFixtures,
  })).count, 1);
  await assert.rejects(() => resolveFixtureSet({
    fixtureSet: "missing", manifest, policy, plan, materializeFixtures, materialize: true,
  }), /unknown fixture/);
});

test("materialization failure stops before plan construction", async () => {
  const failure = new Error("fixture pack failed");
  await assert.rejects(() => resolveFixtureSet({
    fixtureSet: "wecom", manifest, policy, materialize: true,
    materializeFixtures: async () => { throw failure; },
    get plan() { assert.fail("plan read after failed materialization"); },
  }), (error) => error === failure);
});
