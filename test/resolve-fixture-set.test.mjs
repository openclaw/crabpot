import assert from "node:assert/strict";
import { test } from "node:test";
import { resolveFixtureSet } from "../scripts/resolve-fixture-set.mjs";

const manifest = {
  fixtures: [
    { id: "wecom" },
    { id: "opik-openclaw" },
    { id: "codex-app-server" },
    { id: "hasdata" },
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
