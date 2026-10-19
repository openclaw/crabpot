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
    if (mode === "npm-timeout") {
      assert.equal(result.error.code, undefined, "outer timeout contract stays unchanged");
      assert.deepEqual(result.error.cause, { message: "timed out", code: "ETIMEDOUT",
        startupTrace: [{ phase: "owner-started", atMs: 1, observedAtMs: 2 }] });
    }
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

test("Windows preparation expiry releases only a nonadmitted checkout before the next resolver", {
  skip: process.platform !== "win32", timeout: 60_000,
}, async (t) => {
  const root = mkdtempSync(path.join(os.tmpdir(), "crabpot-native-checkout-"));
  const scripts = path.join(root, "scripts");
  mkdirSync(scripts);
  const sourceUrl = new URL("../scripts/", import.meta.url);
  for (const name of ["plugin-inspector-source.mjs", "owned-command.mjs", "owned-command-windows.ps1", "portable-command.mjs"]) {
    copyFileSync(new URL(name, sourceUrl), path.join(scripts, name));
  }
  writeFileSync(path.join(root, "package.json"), '{"type":"module"}\n');
  writeFileSync(path.join(scripts, "manifest-lib.mjs"), "export const repoRoot = " + JSON.stringify(root) + ";\n");
  const resolver = path.join(scripts, "plugin-inspector-source.mjs");
  // Replace Git/npm payloads only. The real resolver, owner Worker, named pipe,
  // native admission, handles, cleanup receipts and checkout token stay intact.
  writeFileSync(resolver, readFileSync(resolver, "utf8").replace('from "./owned-command.mjs"', 'from "./checkout-command.mjs"'));
  writeFileSync(path.join(scripts, "checkout-command.mjs"), [
    'import { runOwnedCommand as native, configuredTimeoutMs } from "./owned-command.mjs";',
    'export { configuredTimeoutMs };',
    'export function runOwnedCommand(command, args, options) {',
    '  return native(process.execPath, [' + JSON.stringify(path.join(scripts, "checkout-target.mjs")) + ', command, ...args], options);',
    '}',
  ].join("\n"));
  const calls = path.join(root, "target-calls.jsonl");
  writeFileSync(path.join(scripts, "checkout-target.mjs"), [
    'import { appendFileSync, mkdirSync, writeFileSync } from "node:fs";',
    'import path from "node:path";',
    'const [command, ...args] = process.argv.slice(2);',
    'appendFileSync(' + JSON.stringify(calls) + ', JSON.stringify({ pid: process.pid, command, args }) + "\\n");',
    'if (args.includes("rev-parse")) process.stdout.write(' + JSON.stringify(pluginInspectorRef + "\n") + ');',
    'else if (command === "git" && args[0] === "init") mkdirSync(args[1], { recursive: true });',
    'else if (command === "git" && args.includes("checkout")) {',
    '  mkdirSync(path.join(args[1], "src"), { recursive: true });',
    '  writeFileSync(path.join(args[1], "src/index.js"), "export {};\\n");',
    '} else if (command === "npm") mkdirSync(path.join(process.cwd(), "node_modules"), { recursive: true });',
  ].join("\n"));
  const helperPath = path.join(scripts, "owned-command-windows.ps1");
  const helper = readFileSync(helperPath, "utf8");
  const seam = '    Write-Phase "preparation-started"';
  assert.equal(helper.split(seam).length, 2);
  const helperPidFile = path.join(root, "helper-pid");
  const escaped = path.join(root, "helper-expired");
  const ps = (value) => "'" + value.replaceAll("'", "''") + "'";
  writeFileSync(helperPath, helper.replace(seam, seam + "\n" + [
    '[System.IO.File]::WriteAllText(' + ps(helperPidFile) + ', [string]$PID)',
    '[System.Threading.Thread]::Sleep(20000)',
    '[System.IO.File]::WriteAllText(' + ps(escaped) + ', "fixture expired")',
  ].map((line) => "    " + line).join("\n")));
  let helperPid;
  t.after(() => {
    if (helperPid) assert.throws(() => process.kill(helperPid, 0), { code: "ESRCH" }, "exact helper must close before removal");
    rmSync(root, { recursive: true, force: true });
  });
  const { resolvePluginInspectorCliPath } = await import(pathToFileURL(resolver).href);
  let failure;
  try { resolvePluginInspectorCliPath(); } catch (error) { failure = error; }
  helperPid = Number(readFileSync(helperPidFile, "utf8"));
  assert.equal(failure?.code, "EOWNERSTART");
  assert.equal(failure.cleanupError, undefined);
  assert.deepEqual(Object.keys(failure.windowsHelper), ["captured", "entry", "connect-attempt", "connected", "truncated", "terminal"]);
  assert.equal(failure.windowsHelper.captured, true);
  assert.equal(failure.windowsHelper.truncated, false);
  assert.equal(failure.windowsHelper.terminal?.requestIssued, false, "the real resolver's throw retains the closed helper's nonadmission fact");
  assert.doesNotMatch(JSON.stringify(failure.windowsHelper), /crabpot-command-|helper-pid/);
  assert.throws(() => process.kill(helperPid, 0), { code: "ESRCH" }, "helper closure precedes the second resolver");
  const parent = path.join(root, ".crabpot/plugin-inspector");
  const lock = path.join(parent, ".checkout.lock");
  const marker = path.join(parent, pluginInspectorRef, "node_modules/.crabpot-install-ready");
  assert.equal(existsSync(lock), false);
  assert.equal(existsSync(marker), false);
  assert.equal(existsSync(calls), false, "the interrupted preparation admitted no checkout payload");
  assert.equal(existsSync(escaped), false, "fixture expiry cannot provide closure");
  writeFileSync(helperPath, helper);
  assert.equal(resolvePluginInspectorCliPath(), path.join(parent, pluginInspectorRef, "src/cli.js"));
  assert.equal(existsSync(lock), false);
  assert.equal(readFileSync(marker, "utf8"), pluginInspectorRef + "\n");
  const observed = readFileSync(calls, "utf8").trim().split("\n").map(JSON.parse);
  assert.deepEqual(observed.map(({ command }) => command), ["git", "git", "git", "npm", "git"]);
  for (const { pid } of observed) assert.throws(() => process.kill(pid, 0), { code: "ESRCH" });
});
