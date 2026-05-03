import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { mkdtemp, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { test } from "node:test";
import { captureEntrypoint } from "../scripts/run-cold-import-capture.mjs";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

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

test("cold import capture runner supports named register and default function exports", async () => {
  const dir = await mkdtemp(path.join(os.tmpdir(), "crabpot-capture-"));
  const named = path.join(dir, "named.mjs");
  const defaultFunction = path.join(dir, "default-function.mjs");
  await writeFile(named, "export function register(api) { api.registerCli({ name: 'named' }); }\n", "utf8");
  await writeFile(defaultFunction, "export default function register(api) { api.registerTool({ name: 'defaulted' }); }\n", "utf8");

  const namedResult = await captureEntrypoint(named);
  const defaultResult = await captureEntrypoint(defaultFunction);

  assert.deepEqual(namedResult.captured.map((item) => `${item.kind}:${item.name}`), ["registration:registerCli"]);
  assert.deepEqual(defaultResult.captured.map((item) => `${item.kind}:${item.name}`), ["registration:registerTool"]);
});

test("cold import capture CLI refuses execution outside isolated opt-in", async () => {
  const dir = await mkdtemp(path.join(os.tmpdir(), "crabpot-capture-"));
  const entrypoint = path.join(dir, "fixture.mjs");
  await writeFile(entrypoint, "export function register(api) { api.registerTool({ name: 'fixture' }); }\n", "utf8");

  const result = spawnSync(process.execPath, ["scripts/run-cold-import-capture.mjs", entrypoint], {
    cwd: repoRoot,
    encoding: "utf8",
    env: { ...process.env, CRABPOT_EXECUTE_ISOLATED: "" },
  });

  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /CRABPOT_EXECUTE_ISOLATED=1/);
});

test("cold import capture CLI honors mock SDK for OpenClaw SDK imports", async () => {
  const dir = await mkdtemp(path.join(os.tmpdir(), "crabpot-capture-sdk-"));
  const entrypoint = path.join(dir, "index.mjs");
  await writeFile(
    entrypoint,
    [
      "import { definePluginEntry } from 'openclaw/plugin-sdk';",
      "process.exitCode = 1;",
      "export default definePluginEntry({",
      "  register(api) {",
      "    api.registerProvider({ id: 'fixture-provider' });",
      "  },",
      "});",
    ].join("\n"),
    "utf8",
  );

  const result = spawnSync(
    process.execPath,
    ["scripts/run-cold-import-capture.mjs", entrypoint, "--mock-sdk", "--plugin-root", dir],
    {
      cwd: repoRoot,
      encoding: "utf8",
      env: { ...process.env, CRABPOT_EXECUTE_ISOLATED: "1" },
    },
  );

  assert.equal(result.status, 0, result.stderr);
  const capture = JSON.parse(result.stdout);
  assert.equal(capture.status, "captured");
  assert.equal(capture.mockSdk, true);
  assert.deepEqual(capture.captured.map((item) => `${item.kind}:${item.name}`), [
    "registration:registerProvider",
  ]);
});
