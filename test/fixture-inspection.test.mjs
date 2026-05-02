import assert from "node:assert/strict";
import { test } from "node:test";
import { inspectFixture } from "../scripts/inspect-fixtures.mjs";
import { readManifest } from "../scripts/manifest-lib.mjs";

test("fixture inspections satisfy expected hooks and registrations", async () => {
  const manifest = await readManifest();

  for (const fixture of manifest.fixtures) {
    const inspection = await inspectFixture(fixture);
    assert.equal(inspection.status, "ok", `${fixture.id} checkout should be materialized`);

    for (const hook of fixture.expect?.hooks ?? []) {
      assert.ok(inspection.hooks.includes(hook), `${fixture.id} should register hook ${hook}`);
    }

    for (const registration of fixture.expect?.registrations ?? []) {
      assert.ok(
        satisfiesRegistration(registration, inspection.registrations),
        `${fixture.id} should use ${registration}`,
      );
    }

    for (const contract of fixture.expect?.manifestContracts ?? []) {
      assert.ok(
        inspection.manifestContracts.includes(contract),
        `${fixture.id} should declare manifest contract ${contract}`,
      );
    }
  }
});

function satisfiesRegistration(expected, observed) {
  if (observed.includes(expected)) {
    return true;
  }
  if (expected !== "registerChannel") {
    return false;
  }
  return observed.some((registration) =>
    ["createChatChannelPlugin", "defineBundledChannelEntry", "defineChannelPluginEntry"].includes(registration),
  );
}
