import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { runOwnedCommand } from "../../scripts/owned-command.mjs";

const here = path.dirname(fileURLToPath(import.meta.url));
const candidate = path.resolve(here, "../..");
const workspace = path.dirname(candidate);
const host = path.join(candidate, "openclaw");
const inspector = path.join(workspace, "inspector");
const capture = path.join(candidate, "scripts/run-openclaw-lifecycle-capture.mjs");
const output = path.join(here, "qualification.json");
assert.equal(fs.existsSync(output), false, "no automatic retry");
assert.equal(process.platform, "win32");
assert.equal(process.arch, "x64");
assert.equal(process.version, "v24.22.1");
const hash = (value) => createHash("sha256").update(value).digest("hex");
const expected = {
  "scripts/import-loop-profile.mjs": "d4fecf65a3749bcf72341c896d217c5acb488bafb67c02b9e2ab54896f73bbf0",
  "scripts/run-openclaw-lifecycle-capture.mjs": "5a838f732822824299961c738ba0cfeb863d9567a467d8e83c19b0c092cbffef",
  "test/import-loop-profile.test.mjs": "9e3d8d766ad3e6360b47b6c8cbb893d0469ba9e666f150e47a18986282b38cbb",
  "test/import-loop-cleanup.test.mjs": "f5e00cbfb90e1e74230dca3fb4a629f4c65d808a31933e879b7f05fe9c9dde76",
};
for (const [file, sha] of Object.entries(expected)) assert.equal(hash(fs.readFileSync(path.join(candidate, file))), sha, file);
const original = fs.readFileSync(path.join(workspace, "baseline/scripts/run-openclaw-lifecycle-capture.mjs"));
assert.equal(hash(original), "d06e5295b12e0924398c6a25a76a8ba8ac7b9078dfe7115a28834f1d207a11ab");
const fixed = fs.readFileSync(capture);
const env = {};
for (const name of ["SYSTEMROOT", "WINDIR", "COMSPEC", "PATH", "PATHEXT", "TEMP", "TMP", "USERPROFILE", "HOME", "APPDATA", "LOCALAPPDATA"]) {
  const entry = Object.entries(process.env).find(([key]) => key.toUpperCase() === name);
  if (entry) env[entry[0]] = entry[1];
}
Object.assign(env, { NODE_OPTIONS: "--max-old-space-size=2048", CRABPOT_PLUGIN_INSPECTOR_DIR: inspector });
const receipt = { candidate: "855a490b7cc33102c80dd927e7e2154ec47a364e", baseline: "9336b829a29901db6617623feffa60f6b2123317",
  openclaw: "0a995f7bbcf791bde32f2fa75378fc1c7b45a995", inspector: "8ebe4f8b2b8d327db77f5d3d4a02d4d327af4446",
  node: process.version, platform: process.platform, arch: process.arch, files: expected, commands: [], sourceRestored: false };
let stage = "red";
let redAttempted = false;
let redClosed = false;
function run(name, args, timeout, overrides = {}) {
  const result = runOwnedCommand(process.execPath, args, { cwd: candidate, env: { ...env, ...overrides }, timeout, maxBuffer: 1024 * 1024, encoding: "utf8" });
  const closed = !result.error && !result.cleanupError && Number.isInteger(result.pid) && result.pid > 0 && Number.isInteger(result.status) && result.signal === null;
  receipt.commands.push({ name, pid: result.pid, status: result.status, signal: result.signal, closed,
    errorCode: result.error?.code ?? null, cleanupErrorCode: result.cleanupError?.code ?? null,
    startupTrace: result.error?.startupTrace,
    failedTests: result.stdout.split(/\r?\n/).filter((line) => /^\s*not ok \d+ - [^\\/:]+$/.test(line)).map((line) => line.trim().slice(0, 256)).slice(0, 32),
    testSummary: result.stdout.split(/\r?\n/).filter((line) => /^# (tests|pass|fail|cancelled|skipped|todo|duration_ms) /.test(line)) });
  return { result, closed };
}
try {
  const redFixture = path.join(here, "red-fixture");
  fs.mkdirSync(path.join(redFixture, "host/src/plugins"), { recursive: true });
  fs.mkdirSync(path.join(redFixture, "capture"));
  fs.writeFileSync(path.join(redFixture, "host/src/plugins/loader.ts"), [
    "import { DatabaseSync } from 'node:sqlite';",
    "import path from 'node:path';",
    "export async function loadAndActivateRootPluginRegistry(options) {",
    "  globalThis.heldDatabase = new DatabaseSync(path.join(options.workspaceDir, 'held.sqlite'));",
    "  await new Promise((resolve) => setImmediate(resolve));",
    "  for (const phase of ['full', 'full:register']) console.error('[plugin-load-profile] phase=' + phase + ' plugin=crabpot-lifecycle-probe elapsedMs=1 source=' + options.config.plugins.load.paths[0]);",
    "  return { plugins: [{ id: 'crabpot-lifecycle-probe', status: 'loaded' }] };",
    "}", "",
  ].join("\n"));
  fs.writeFileSync(capture, original);
  let red;
  try {
    redAttempted = true;
    red = run("held-sqlite-original", [capture, "test/fixtures/lazy-import-plugin.mjs", "--capture-root", path.join(redFixture, "capture")], 30_000,
      { CRABPOT_EXECUTE_ISOLATED: "1", CRABPOT_OPENCLAW_DIR: path.join(redFixture, "host"), CRABPOT_FIXTURE_ROOT: candidate });
    redClosed = red.closed;
  } finally {
    if (!redAttempted || redClosed) fs.writeFileSync(capture, fixed);
    receipt.sourceRestored = hash(fs.readFileSync(capture)) === hash(fixed);
  }
  assert.equal(red.closed, true, "red command custody incomplete");
  assert.equal(red.result.status, 1, "old capture must fail the held-SQLite regression");
  const failedRoot = /Error: EPERM, Permission denied: '([^']*crabpot-openclaw-state-[a-zA-Z0-9]+)'/.exec(red.result.stderr)?.[1];
  assert.ok(failedRoot, "red failure was not the original cleanup EPERM");
  assert.equal(path.dirname(failedRoot).toLowerCase(), os.tmpdir().toLowerCase());
  assert.ok(fs.lstatSync(failedRoot).isDirectory() && !fs.lstatSync(failedRoot).isSymbolicLink());
  fs.rmSync(failedRoot, { recursive: true, force: true });
  receipt.red = { expectedCleanupEperm: true, retainedDirectory: path.basename(failedRoot), removedAfterJobClose: !fs.existsSync(failedRoot) };
  fs.rmSync(redFixture, { recursive: true, force: true });
  assert.equal(receipt.red.removedAfterJobClose, true);
  assert.equal(receipt.sourceRestored, true);
  stage = "focused";
  const focused = run("focused-tests", ["--experimental-test-module-mocks", "--test", "--test-reporter=tap", "test/import-loop-cleanup.test.mjs", "test/import-loop-profile.test.mjs"], 180_000);
  assert.equal(focused.closed, true, "focused command custody incomplete");
  assert.equal(focused.result.status, 0, "focused tests failed");
  stage = "real-profile";
  const profile = run("real-profile", ["scripts/import-loop-profile.mjs", "--openclaw", "./openclaw", "--runs", "3"], 240_000);
  assert.equal(profile.closed, true, "profile command custody incomplete");
  const report = JSON.parse(fs.readFileSync(path.join(candidate, "reports/crabpot-import-loop-profile.json"), "utf8"));
  const samples = [...report.baseline.samples.map((sample) => ({ kind: "baseline", ...sample })), ...report.samples.map((sample) => ({ kind: "target", ...sample }))];
  receipt.profile = { commandExit: profile.result.status, cleanup: report.captureCleanup,
    samples: samples.map(({ kind, index, pid, exitCode, signal, timedOut, cancelled, timeoutMs, status, capturedCount, wallMs, openClawLifecycle }) => ({
      kind, index, pid, exitCode, signal, timedOut, cancelled, timeoutMs, status, capturedCount, wallMs,
      lifecycle: { status: openClawLifecycle?.status, importPhase: openClawLifecycle?.importPhase, activationPhase: openClawLifecycle?.activationPhase,
        importMs: openClawLifecycle?.importMs, activationMs: openClawLifecycle?.activationMs,
        phases: openClawLifecycle?.phases?.map(({ phase, elapsedMs }) => ({ phase, elapsedMs })) },
    })) };
  assert.equal(profile.result.status, 0, "real profile failed");
  assert.equal(report.baseline.samples.length, 3);
  assert.equal(report.samples.length, 3);
  for (const sample of samples) {
    assert.ok(Number.isInteger(sample.pid) && sample.pid > 0);
    assert.equal(sample.exitCode, 0); assert.equal(sample.signal, null);
    assert.equal(sample.timedOut, false); assert.equal(sample.cancelled, false); assert.equal(sample.timeoutMs, 30_000);
    assert.equal(sample.status, "captured"); assert.equal(sample.capturedCount, 2); assert.equal(sample.openClawLifecycle.status, "loaded");
    for (const [field, phase] of [["importMs", "full"], ["activationMs", "full:register"]]) {
      assert.ok(Number.isFinite(sample.openClawLifecycle[field]) && sample.openClawLifecycle[field] >= 0);
      assert.ok(sample.openClawLifecycle.phases.some((entry) => entry.phase === phase && Number.isFinite(entry.elapsedMs) && entry.elapsedMs >= 0));
    }
    assert.ok(fs.existsSync(path.join(candidate, ".crabpot/import-loop", `${sample.kind === "baseline" ? "baseline" : "capture"}-${sample.index}.json`)));
  }
  assert.equal(report.captureCleanup.status, "removed");
  assert.equal(path.basename(report.captureCleanup.directory), report.captureCleanup.directory);
  receipt.profile.rootAbsent = !fs.existsSync(path.join(os.tmpdir(), report.captureCleanup.directory));
  assert.equal(receipt.profile.rootAbsent, true);
  receipt.profile.outputFilesPreserved = 6;
  receipt.passed = true;
} catch (error) {
  receipt.passed = false;
  const safeValue = (value) => value === null || ["number", "boolean"].includes(typeof value) ||
    ["loaded", "captured", "removed", "win32", "x64", "v24.22.1", "EPERM"].includes(value) ? value : undefined;
  receipt.failure = { stage, name: error.name, code: error.code ?? null,
    operator: error.operator, actualType: typeof error.actual, actual: safeValue(error.actual), expected: safeValue(error.expected) };
  process.exitCode = 1;
} finally {
  receipt.finalFiles = Object.fromEntries(Object.keys(expected).map((file) => [file, hash(fs.readFileSync(path.join(candidate, file)))]));
  receipt.sourceRestored = Object.entries(expected).every(([file, sha]) => receipt.finalFiles[file] === sha);
  if (!receipt.sourceRestored) { receipt.passed = false; process.exitCode = 1; }
  const bytes = `${JSON.stringify(receipt, null, 2)}\n`;
  assert.ok(Buffer.byteLength(bytes) <= 64 * 1024);
  fs.writeFileSync(output, bytes, { flag: "wx" });
  console.log(JSON.stringify({ stage, passed: receipt.passed, sourceRestored: receipt.sourceRestored, commands: receipt.commands }));
}
