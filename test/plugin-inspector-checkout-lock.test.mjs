import assert from "node:assert/strict";
import { once } from "node:events";
import { copyFileSync, existsSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, rmdirSync, rmSync, utimesSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { test } from "node:test";
import { pathToFileURL } from "node:url";
import { Worker } from "node:worker_threads";
import { pluginInspectorRef } from "../scripts/plugin-inspector-source.mjs";

function fixture(t, { tokenWriteFailure = false } = {}) {
  const root = mkdtempSync(path.join(os.tmpdir(), "crabpot-checkout-lock-"));
  const scripts = path.join(root, "scripts");
  mkdirSync(scripts);
  // Copy the whole resolver; replace only its repository and command boundaries.
  copyFileSync(new URL("../scripts/plugin-inspector-source.mjs", import.meta.url), path.join(scripts, "plugin-inspector-source.mjs"));
  if (tokenWriteFailure) {
    const source = path.join(scripts, "plugin-inspector-source.mjs");
    writeFileSync(source, readFileSync(source, "utf8").replace('from "node:fs";', 'from "./fixture-fs.mjs";'));
    writeFileSync(path.join(scripts, "fixture-fs.mjs"), `
      export * from "node:fs";
      import { writeFileSync as write } from "node:fs";
      import path from "node:path";
      export function writeFileSync(file, ...args) {
        if (path.basename(path.dirname(file)) === ".checkout.lock") {
          throw Object.assign(new Error("owner token write denied"), { code: "EACCES" });
        }
        return write(file, ...args);
      }
    `);
  }
  writeFileSync(path.join(scripts, "manifest-lib.mjs"), `export const repoRoot = ${JSON.stringify(root)};\n`);
  copyFileSync(new URL("./fixtures/inspector-checkout-command.mjs", import.meta.url), path.join(scripts, "owned-command.mjs"));
  const parent = path.join(root, ".crabpot", "plugin-inspector");
  mkdirSync(parent, { recursive: true });
  const lock = path.join(parent, ".checkout.lock");
  const marker = path.join(parent, pluginInspectorRef, "node_modules", ".crabpot-install-ready");
  const shared = new Int32Array(new SharedArrayBuffer(16));
  const workers = [];
  t.after(async () => {
    Atomics.store(shared, 1, 1);
    Atomics.notify(shared, 1);
    await Promise.all(workers.map(({ closed }) => closed));
    rmSync(root, { recursive: true, force: true });
  });
  function start(mode = "success", expired = false) {
    const worker = new Worker(new URL("./fixtures/inspector-checkout-resolver.mjs", import.meta.url), {
      workerData: { root, shared, mode, expired, ref: pluginInspectorRef,
        source: pathToFileURL(path.join(scripts, "plugin-inspector-source.mjs")).href },
      env: {},
    });
    const messages = [];
    let notify;
    worker.on("message", (message) => { messages.push(message); notify?.(); });
    const closed = once(worker, "exit").then(([code]) => {
      assert.equal(code, 0);
      return messages.find((message) => message.type === "result");
    });
    workers.push({ worker, closed });
    return {
      closed,
      async wait(type) {
        while (!messages.some((message) => message.type === type)) {
          await new Promise((resolve, reject) => {
            const timer = setTimeout(() => reject(new Error(`missing ${type} admission`)), 3000);
            notify = () => { clearTimeout(timer); resolve(); };
          });
        }
        return messages.find((message) => message.type === type);
      },
    };
  }
  return { root, lock, marker, shared, start };
}

for (const aged of [false, true]) {
  test(`checkout contention never steals a ${aged ? "five-minute-old" : "fresh"} holder after the wait deadline`, async (t) => {
    const { lock, marker, shared, start } = fixture(t);
    const holder = start("hold");
    await holder.wait("install");
    const ownership = readdirSync(lock);
    if (aged) utimesSync(lock, new Date(0), new Date(0));
    const waiter = start("success", true);
    const result = await waiter.closed;
    assert.match(result.error?.message ?? "", /checkout.*lock.*120000ms/i);
    assert.deepEqual(readdirSync(lock), ownership);
    assert.equal(Atomics.load(shared, 0), 1, "waiter must not start a second install");
    assert.equal(existsSync(marker), false);
    Atomics.store(shared, 1, 1);
    Atomics.notify(shared, 1);
    assert.equal((await holder.closed).ok, true);
    assert.equal(existsSync(lock), false);
  });
}

test("a waiting resolver rechecks readiness after the successful holder releases", async (t) => {
  const { lock, marker, shared, start } = fixture(t);
  const holder = start("hold");
  await holder.wait("install");
  const waiter = start();
  await waiter.wait("waiting");
  assert.equal(Atomics.load(shared, 0), 1);
  Atomics.store(shared, 1, 1);
  Atomics.notify(shared, 1);
  assert.equal((await holder.closed).ok, true);
  assert.equal((await waiter.closed).ok, true);
  assert.equal(Atomics.load(shared, 0), 1);
  assert.equal(Atomics.load(shared, 3), 1, "checkout mutators never overlap");
  assert.equal(readFileSync(marker, "utf8"), `${pluginInspectorRef}\n`);
  assert.equal(existsSync(lock), false);
});

test("a legacy empty lock requires verified manual recovery before preparation", async (t) => {
  const { lock, marker, shared, start } = fixture(t);
  mkdirSync(lock);
  utimesSync(lock, new Date(0), new Date(0));
  const result = await start("success", true).closed;
  assert.match(result.error?.message ?? "", /checkout.*lock.*120000ms/i);
  assert.deepEqual(readdirSync(lock), []);
  assert.equal(Atomics.load(shared, 3), 0, "no checkout mutator was started");
  assert.equal(existsSync(marker), false);
  // This fixture created an ownerless lock and joined its only waiter above.
  // Production recovery needs equivalent evidence, never just the lock's age.
  rmdirSync(lock);
  assert.equal((await start().closed).ok, true);
  assert.equal(readFileSync(marker, "utf8"), `${pluginInspectorRef}\n`);
  assert.equal(Atomics.load(shared, 0), 1);
  assert.equal(existsSync(lock), false);
});

for (const mode of ["git-failure", "npm-failure", "npm-timeout", "git-cleanup", "npm-cleanup"]) {
  test(`checkout ${mode} preserves cleanup custody and does not publish readiness`, async (t) => {
    const { lock, marker, start } = fixture(t);
    const result = await start(mode).closed;
    const uncertain = mode.endsWith("cleanup");
    assert.equal(result.ok, false);
    assert.match(result.error.message, /failed with exit code 7|timed out|primary command failure/);
    assert.equal(result.error.cleanupError?.code, uncertain ? "EOWNERCLEANUP" : undefined);
    assert.equal(existsSync(lock), uncertain);
    if (uncertain) assert.equal(readdirSync(lock).length, 1, "retain the acquired owner token");
    assert.equal(existsSync(marker), false);
  });
}

test("a former holder cannot remove a replacement owner's lock", async (t) => {
  const { lock, start } = fixture(t);
  const result = await start("replacement").closed;
  assert.equal(result.ok, false);
  assert.equal(readFileSync(path.join(lock, "foreign-owner"), "utf8"), "retained");
});

test("token publication failure releases the empty acquisition without starting a mutator", async (t) => {
  const { lock, marker, shared, start } = fixture(t, { tokenWriteFailure: true });
  const result = await start().closed;
  assert.equal(result.error.code, "EACCES");
  assert.equal(existsSync(lock), false);
  assert.equal(existsSync(marker), false);
  assert.equal(Atomics.load(shared, 3), 0);
});

test("lock release failure retains the original command failure and foreign owner", async (t) => {
  const { lock, marker, start } = fixture(t);
  const result = await start("replacement-failure").closed;
  assert.equal(result.error.name, "AggregateError");
  assert.match(result.error.errors[0].message, /npm ci .*failed with exit code 7/);
  assert.equal(result.error.errors[1].code, "ENOENT");
  assert.equal(readFileSync(path.join(lock, "foreign-owner"), "utf8"), "retained");
  assert.equal(existsSync(marker), false);
});
