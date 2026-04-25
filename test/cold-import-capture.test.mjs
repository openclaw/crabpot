import assert from "node:assert/strict";
import { mkdtemp, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { test } from "node:test";
import { captureEntrypoint } from "../scripts/run-cold-import-capture.mjs";

test("cold import capture runner imports a local fixture and records registrations", async () => {
  const dir = await mkdtemp(path.join(os.tmpdir(), "crabpot-capture-"));
  const entrypoint = path.join(dir, "fixture.mjs");
  await writeFile(
    entrypoint,
    [
      "export default {",
      "  register(api) {",
      "    api.on('before_tool_call', () => undefined);",
      "    api.registerTool({ name: 'fixture_tool', inputSchema: { type: 'object' }, run() {} });",
      "  }",
      "};",
    ].join("\n"),
    "utf8",
  );

  const result = await captureEntrypoint(entrypoint, {
    apiOptions: { knownRegistrars: ["registerTool"] },
  });

  assert.equal(result.status, "captured");
  assert.deepEqual(
    result.captured.map((item) => `${item.kind}:${item.name}`),
    ["hook:before_tool_call", "registration:registerTool"],
  );
});

test("cold import capture runner reports entrypoints without register exports", async () => {
  const dir = await mkdtemp(path.join(os.tmpdir(), "crabpot-capture-"));
  const entrypoint = path.join(dir, "empty.mjs");
  await writeFile(entrypoint, "export const value = 1;\n", "utf8");

  const result = await captureEntrypoint(entrypoint);

  assert.equal(result.status, "no-register-export");
  assert.deepEqual(result.captured, []);
});
