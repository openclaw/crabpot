import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import * as filesystem from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { mock, test } from "node:test";
import { fileURLToPath } from "node:url";

if (!process.execArgv.includes("--experimental-test-module-mocks")) {
  test("import-loop cleanup ownership contracts", () => {
    const result = spawnSync(process.execPath, ["--experimental-test-module-mocks", "--test", fileURLToPath(import.meta.url)], { encoding: "utf8", timeout: 10_000 });
    assert.equal(result.status, 0, `${result.stdout}\n${result.stderr}`);
  });
} else {
  let build;
  let removalError;
  mock.module("node:fs/promises", { namedExports: { ...filesystem, rm: async (...args) => {
    if (removalError) throw removalError;
    return filesystem.rm(...args);
  } } });
  mock.module("../scripts/plugin-inspector-source.mjs", { namedExports: {
    loadPluginInspectorPublicApi: async () => ({
      buildImportLoopProfile: (options) => build(options),
      validateImportLoopProfile: () => [],
      renderImportLoopProfileMarkdown: () => "# Import loop",
    }),
  } });
  const { buildImportLoopProfile, renderImportLoopProfileMarkdown, validateImportLoopProfile } = await import("../scripts/import-loop-profile.mjs");
  const closed = { pid: 123, exitCode: 0, signal: null, timedOut: false, cancelled: false };

  async function run(t, { options = {}, sample = {}, counts = {}, throwError, cleanupError } = {}) {
    let root;
    const report = { summary: { runs: 1 }, samples: [{ ...closed, ...sample }], baseline: { samples: [{ ...closed }], runs: 1 } };
    if (options.baseline === false) report.baseline = { samples: [], runs: 0 };
    if (counts.target !== undefined) report.samples = Array.from({ length: counts.target }, () => ({ ...closed }));
    if (counts.baseline !== undefined) report.baseline.samples = Array.from({ length: counts.baseline }, () => ({ ...closed }));
    build = async (input) => {
      for (const ignored of [...report.baseline.samples, ...report.samples]) input.captureCommand({ entrypoint: "fixture.mjs" });
      if (throwError) throw throwError;
      return report;
    };
    removalError = cleanupError;
    t.after(async () => { removalError = undefined; if (root) await filesystem.rm(root, { recursive: true, force: true }); });
    const promise = buildImportLoopProfile({ runs: 1, ...options, captureCommand(context) {
      root = context.captureRoot;
      assert.equal(existsSync(root), true);
      return { command: process.execPath, args: [] };
    } });
    return { report, root: () => root, promise };
  }

  test("normal nonzero capture exits keep their result and permit cleanup", async (t) => {
    const result = await run(t, { sample: { exitCode: 1 } });
    const report = await result.promise;
    assert.equal(report.samples[0].exitCode, 1);
    assert.equal(report.captureCleanup.status, "removed");
    assert.equal(existsSync(result.root()), false);
  });

  test("disabled baseline needs exactly zero baseline children", async (t) => {
    const result = await run(t, { options: { baseline: false } });
    assert.equal((await result.promise).captureCleanup.status, "removed");
  });

  test("abnormal or incomplete receipts retain the parent root visibly", async (t) => {
    for (const [name, input] of [
      ["timeout", { sample: { timedOut: true } }],
      ["cancelled", { sample: { cancelled: true } }],
      ["signal", { sample: { signal: "SIGTERM", exitCode: null } }],
      ["missing PID", { sample: { pid: undefined } }],
      ["missing target", { counts: { target: 0 } }],
      ["missing baseline", { counts: { baseline: 0 } }],
      ["requested baseline count", { options: { baselineRuns: 2 } }],
      ["requested target count", { options: { runs: 2 } }],
    ]) await t.test(name, async (t) => {
      const result = await run(t, input);
      const report = await result.promise;
      assert.equal(report.captureCleanup.status, "retained");
      assert.equal(existsSync(result.root()), true);
      assert.match(validateImportLoopProfile(report).join("\n"), /capture cleanup retained/);
      assert.match(renderImportLoopProfileMarkdown(report), /Capture cleanup\n\nretained:/);
      assert.equal(path.join(os.tmpdir(), report.captureCleanup.directory), result.root());
    });
  });

  test("builder rejection preserves the primary error and reports retained custody", async (t) => {
    const primary = Object.freeze(new Error("primary sentinel"));
    const output = t.mock.method(console, "error", () => {});
    const result = await run(t, { throwError: primary });
    await assert.rejects(result.promise, (error) => {
      assert.equal(error, primary);
      assert.equal(error.message, "primary sentinel");
      assert.match(output.mock.calls[0].arguments[0], /capture cleanup retained:/);
      assert.equal(existsSync(result.root()), true);
      return true;
    });
  });

  test("filesystem cleanup failure remains separate from the primary sample", async (t) => {
    const result = await run(t, { sample: { exitCode: 1 }, cleanupError: Object.assign(new Error("private path"), { code: "EPERM" }) });
    const report = await result.promise;
    assert.equal(report.samples[0].exitCode, 1);
    assert.deepEqual(report.captureCleanup, { status: "failed", directory: path.basename(result.root()), reason: "EPERM" });
    assert.match(validateImportLoopProfile(report).join("\n"), /capture cleanup failed/);
    assert.equal(existsSync(result.root()), true);
  });

  test("default cold capture delegates without allocating lifecycle storage", async () => {
    const expected = { untouched: true };
    build = async (options) => { assert.equal(options.captureCommand, undefined); return expected; };
    assert.equal(await buildImportLoopProfile(), expected);
  });
}
