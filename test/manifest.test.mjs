import assert from "node:assert/strict";
import { test } from "node:test";
import { readManifest } from "../scripts/manifest-lib.mjs";

test("fixture manifest is valid and seam-rich", async () => {
  const manifest = await readManifest();

  assert.equal(manifest.submoduleRoot, "plugins");
  assert.ok(manifest.fixtures.length >= 10);

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

