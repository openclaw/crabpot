import assert from "node:assert/strict";
import { test } from "node:test";
import {
  parseNpmPackResult,
  parseNpmViewResult,
  resolveNpmViewVersion,
} from "../scripts/npm-pack-result.mjs";

test("npm pack results accept array and keyed npm JSON shapes", () => {
  const packed = { filename: "fixture-1.0.0.tgz", version: "1.0.0" };

  assert.deepEqual(parseNpmPackResult(JSON.stringify([packed])), packed);
  assert.deepEqual(parseNpmPackResult(JSON.stringify({ "@fixture/plugin": packed })), packed);
});

test("npm pack results reject empty or ambiguous keyed output", () => {
  assert.equal(parseNpmPackResult("{}"), undefined);
  assert.equal(
    parseNpmPackResult(
      JSON.stringify({
        first: { filename: "first.tgz" },
        second: { filename: "second.tgz" },
      }),
    ),
    undefined,
  );
});

test("npm view results accept direct and npm 11 array JSON shapes", () => {
  const tags = { latest: "1.2.3", beta: "1.3.0-beta.1" };

  assert.deepEqual(parseNpmViewResult(JSON.stringify(tags)), tags);
  assert.deepEqual(parseNpmViewResult(JSON.stringify([tags])), tags);
  assert.equal(parseNpmViewResult(JSON.stringify(["a".repeat(40)])), "a".repeat(40));
});

test("npm latest resolution falls back to version when the dist-tag is absent", () => {
  const metadata = {
    "dist-tags": { beta: "2026.7.2-beta.5" },
    version: "2026.7.1-2",
  };

  assert.equal(resolveNpmViewVersion(metadata, "latest"), "2026.7.1-2");
  assert.equal(resolveNpmViewVersion(metadata, "beta"), "2026.7.2-beta.5");
  assert.equal(resolveNpmViewVersion({ version: "2026.7.1-2" }, "beta"), undefined);
});
