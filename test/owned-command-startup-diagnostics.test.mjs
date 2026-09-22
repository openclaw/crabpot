import assert from "node:assert/strict";
import { randomUUID } from "node:crypto";
import { appendFileSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, rmSync, statSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { performance } from "node:perf_hooks";
import { test } from "node:test";
import { runInNewContext } from "node:vm";

const source = readFileSync(new URL("../scripts/owned-command.mjs", import.meta.url), "utf8");
// Exercise the actual private receipt owner without adding production exports or
// launching/prewarming the Windows helper. Native admission remains Windows proof.
const start = source.indexOf("const diagnosticRecordLimit =");
const end = source.indexOf("const workerTrace =", start);
assert.ok(start >= 0 && end > start);
const diagnosticSource = source.slice(start, end);
function receiptOwner(root, entry, platform = "win32") {
  const messages = [];
  const api = runInNewContext(`${diagnosticSource}
({startupDiagnostic, startupTrace, startupError, startupResult, summarizeStartup})`, {
    appendFileSync, mkdirSync, readFileSync, statSync, randomUUID, path, performance, Buffer,
    fileURLOrPath: (value) => value,
    process: { platform, argv: ["node", entry], cwd: () => root },
    writeSync: (_fd, value) => messages.push(value),
  });
  return { ...api, messages };
}
function fixture(t) {
  const root = mkdtempSync(path.join(os.tmpdir(), "crabpot-startup-receipts-"));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  return root;
}
function select(api, root) {
  return api.startupDiagnostic("git", ["init", path.join(root, ".crabpot", "plugin-inspector", "a".repeat(40))], { cwd: root });
}
function records(context, producer = "parent") {
  return readFileSync(path.join(context.directory, `${producer}.jsonl`), "utf8").trim().split("\n").map(JSON.parse);
}

test("cold contract and policy attempts keep separate identities and current summaries", (t) => {
  const root = fixture(t);
  let original;
  const attempts = [
    ["capture-contracts.test.mjs", "cold-contract-test", "EOWNERSTART"],
    ["ci-policy.test.mjs", "cold-policy-test", "EOWNERSTART"],
    ["generate-report.mjs", "later-report", null],
  ];
  for (const [index, [entry, label, code]] of attempts.entries()) {
    const api = receiptOwner(root, entry);
    const context = select(api, root);
    assert.equal(context.attempt, index + 1);
    assert.equal(context.entry, label);
    const trace = api.startupTrace(context, "parent");
    trace("parent-entered", { entry: context.entry });
    const error = code ? { code, message: "command supervisor startup timed out" } : undefined;
    const cleanupError = index === 1 ? { code: "EOWNERCLEANUP", message: "Windows helper closure was not observed" } : undefined;
    trace("parent-finalized", { result: api.startupResult({ status: code ? null : 0, error, cleanupError }), terminalReceipt: !cleanupError, readyConsumed: !code });
    api.summarizeStartup(context);
    const summary = JSON.parse(api.messages.at(-1).slice("crabpot-startup-305 ".length));
    assert.equal(summary.id, context.id);
    assert.equal(summary.attempt, context.attempt);
    assert.equal(summary.current.parent.entry, label);
    assert.equal(summary.current.parent.result.error?.code ?? null, code);
    assert.equal(summary.current.parent.result.cleanupError?.code ?? null, cleanupError?.code ?? null);
    assert.equal(summary.current.powershell.missingOrUnreadable, true);
    assert.equal(summary.current.native.missingOrUnreadable, true);
    assert.equal(select(api, root), null, "only the first selected call in each parent is observed");
    const first = path.join(root, "reports/crabpot-startup-305/attempt-1/parent.jsonl");
    original ??= readFileSync(first, "utf8");
    assert.equal(readFileSync(first, "utf8"), original, "later attempts cannot overwrite the original failure");
  }
});

test("diagnostics bound attempts, per-producer records and record bytes", (t) => {
  const root = fixture(t);
  for (let attempt = 1; attempt <= 4; attempt++) {
    const api = receiptOwner(root, "ci-policy.test.mjs");
    const context = select(api, root);
    assert.equal(context.attempt, attempt);
    const trace = api.startupTrace(context, "parent");
    for (let sequence = 0; sequence < 40; sequence++) trace("bounded-event");
    const observed = records(context);
    assert.equal(observed.length, 32);
    assert.deepEqual(observed.map(({ sequence }) => sequence), Array.from({ length: 32 }, (_, i) => i + 1));
    assert.ok(observed.every(({ id }) => id === context.id));
    assert.ok(statSync(path.join(context.directory, "parent.jsonl")).size <= 65536);
    const other = api.startupTrace(context, "worker");
    other("too-large", { value: "x".repeat(2048) });
    other("small");
    assert.deepEqual(records(context, "worker").map(({ event }) => event), ["small"]);
  }
  const capped = receiptOwner(root, "generate-report.mjs");
  assert.equal(select(capped, root), null);
  assert.match(capped.messages.join(""), /attempt limit reached/);
  assert.equal(readdirSync(path.join(root, "reports/crabpot-startup-305")).length, 4);
});

test("archive and repository startup retain separate receipts after fixture removal", (t) => {
  const root = fixture(t);
  const temporary = path.join(root, "temporary-fixture");
  const workspace = path.join(temporary, "synthetic-repository");
  mkdirSync(workspace, { recursive: true });
  const api = receiptOwner(root, "resource-workload-tokenjuice.test.mjs");
  const tarArgs = ["-czf", path.join(temporary, "fixture.tgz"), "-C", temporary, "package"];
  const gitArgs = ["init", "--initial-branch=resource-fixture"];
  const archive = api.startupDiagnostic("tar", tarArgs, { cwd: temporary });
  const repository = api.startupDiagnostic("git", gitArgs, { cwd: workspace });
  assert.equal(archive.entry, "tokenjuice-archive");
  assert.equal(repository.entry, "tokenjuice-repository");
  assert.notEqual(archive.directory, repository.directory);
  for (const context of [archive, repository]) {
    const trace = api.startupTrace(context, "parent");
    trace("parent-entered", { entry: context.entry });
    api.summarizeStartup(context);
    const summary = JSON.parse(api.messages.at(-1).slice("crabpot-startup-305 ".length));
    assert.equal(summary.current.parent.entry, context.entry);
    assert.ok(context.directory.startsWith(path.join(root, "reports") + path.sep));
  }
  assert.equal(api.startupDiagnostic("tar", tarArgs, { cwd: temporary }), null);
  assert.equal(api.startupDiagnostic("git", gitArgs, { cwd: workspace }), null);
  const otherParent = receiptOwner(root, "resource-workload-tokenjuice.test.mjs");
  assert.equal(otherParent.startupDiagnostic("tar", tarArgs, { cwd: temporary }), null);
  assert.equal(otherParent.startupDiagnostic("git", gitArgs, { cwd: workspace }), null);
  rmSync(temporary, { recursive: true });
  assert.equal(records(archive)[0].entry, "tokenjuice-archive");
  assert.equal(records(repository)[0].entry, "tokenjuice-repository");
});

test("diagnostic errors retain bounded codes but omit private exception payloads", (t) => {
  const api = receiptOwner(fixture(t), "capture-contracts.test.mjs");
  const error = api.startupError({
    code: "EOWNERSTART", message: "synthetic-secret /private/example/file", stack: "synthetic-stack",
    path: "/private/example/file", spawnargs: ["synthetic-secret"],
    cause: { code: "EPERM", message: "synthetic-secret", cause: { message: "nested-secret" } },
  });
  assert.equal(error.code, "EOWNERSTART");
  assert.equal(error.message, "[redacted]");
  assert.equal(error.cause.code, "EPERM");
  assert.doesNotMatch(JSON.stringify(error), /synthetic|private|nested-secret|spawnargs|stack/);
});

test("unrelated commands and non-Windows callers create no diagnostic files", (t) => {
  const root = fixture(t);
  const api = receiptOwner(root, "capture-contracts.test.mjs");
  assert.equal(api.startupDiagnostic("git", ["status"], { cwd: root }), null);
  assert.equal(api.startupDiagnostic("git", ["init", path.join(root, "other")], { cwd: root }), null);
  assert.equal(select(receiptOwner(root, "capture-contracts.test.mjs", "linux"), root), null);
  assert.deepEqual(readdirSync(root), []);
});
