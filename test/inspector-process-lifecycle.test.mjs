import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { createHash } from "node:crypto";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { chmod, cp, mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { setTimeout as delay } from "node:timers/promises";
import { test } from "node:test";

const largeOutputBytes = 12 * 1024 * 1024;
const commandSource = `
import { spawn } from "node:child_process";
import { appendFileSync, existsSync, writeSync } from "node:fs";
import { fileURLToPath } from "node:url";

const rescue = setInterval(() => {
  if (existsSync(process.env.TEST_INSPECTOR_STOP)) process.exit(99);
}, 10);
rescue.unref();
setTimeout(() => process.exit(98), 20_000).unref();
const descendant = process.argv[2] === "--fixture-descendant";
appendFileSync(process.env.TEST_INSPECTOR_PIDS, JSON.stringify({
  role: descendant ? "descendant" : "leader", pid: process.pid,
}) + "\\n");
if (descendant || process.env.TEST_INSPECTOR_MODE === "resist-term") {
  process.on("SIGTERM", () => {});
  process.send?.("ready");
  setInterval(() => {}, 1000);
} else if (process.env.TEST_INSPECTOR_MODE.startsWith("descendant-")) {
  const output = process.env.TEST_INSPECTOR_MODE === "descendant-closed" ? "ignore" : "inherit";
  const child = spawn(process.execPath, [fileURLToPath(import.meta.url), "--fixture-descendant"], {
    stdio: ["ignore", output, output, "ipc"],
  });
  child.once("message", () => {
    child.disconnect();
    child.unref();
    process.exit(0);
  });
} else if (process.env.TEST_INSPECTOR_MODE === "large-stream") {
  const chunk = Buffer.alloc(65536, "x");
  for (let bytes = 0; bytes < ${largeOutputBytes}; bytes += chunk.length) writeSync(1, chunk);
  const waitForObserver = setInterval(() => {
    if (!existsSync(process.env.TEST_INSPECTOR_OBSERVED)) return;
    clearInterval(waitForObserver);
    writeSync(1, Buffer.from([0xe2]));
    writeSync(2, Buffer.from([0xe2]));
    setTimeout(() => {
      writeSync(1, Buffer.from([0x82, 0xac]));
      writeSync(2, Buffer.from([0x82, 0xac]));
    }, 20);
  }, 10);
} else if (process.env.TEST_INSPECTOR_MODE === "exit-seven") {
  writeSync(1, "retained stdout");
  writeSync(2, "retained stderr");
  process.exitCode = 7;
} else {
  writeSync(1, JSON.stringify(process.argv.slice(2)));
}
`;

for (const [route, mode] of [
  ["source", "resist-term"],
  ["source", "descendant-pipes"],
  ["source", "descendant-closed"],
  ["package", "descendant-pipes"],
]) {
  test(`inspector smoke owns ${route} ${mode} through completion`, { timeout: 25_000 }, async (t) => {
    const fixture = await createFixture(t);
    const sentinel = spawn(process.execPath, ["-e", "setInterval(() => {}, 1000)"], {
      stdio: "ignore",
    });
    t.after(() => stopChild(sentinel));
    const outcome = await runSmoke(fixture, { route, mode, timeout: "1000" });
    assert.equal(outcome.watchdog, false, "the caller must finish before the test rescue watchdog");
    assert.equal(outcome.signal, null);
    if (mode === "resist-term") {
      assert.notEqual(outcome.status, 0);
      assert.match(outcome.stderr, /timed out|timeout/i);
      assert.match(outcome.stderr, /\[cause\]/);
      assert.match(outcome.stderr, /startupTrace:/);
      assert.match(outcome.stderr, /worker-entered/);
    } else {
      assert.equal(outcome.status, 0, outcome.stderr);
    }
    const owned = readPids(fixture);
    assert.deepEqual(owned.map(({ role }) => role).sort(),
      mode === "resist-term" ? ["leader"] : ["descendant", "leader"]);
    // Assert before test cleanup, so the rescue path cannot provide the proof.
    for (const { pid } of owned) await assertGone(pid);
    assert.equal(isAlive(sentinel.pid), true, "an unrelated process must survive owner cleanup");
  });
}

test("inspector smoke streams over 10 MiB before exit and preserves split UTF-8", {
  timeout: 25_000,
}, async (t) => {
  const fixture = await createFixture(t);
  const outcome = await runSmoke(fixture, { mode: "large-stream", timeout: "5000" });
  assert.equal(outcome.watchdog, false);
  assert.equal(outcome.status, 0, outcome.stderr);
  assert.equal(outcome.stdoutBytes, largeOutputBytes + 3);
  const expected = createHash("sha256");
  const chunk = Buffer.alloc(65536, "x");
  for (let bytes = 0; bytes < largeOutputBytes; bytes += chunk.length) expected.update(chunk);
  expected.update(Buffer.from([0xe2, 0x82, 0xac]));
  assert.equal(outcome.stdoutHash, expected.digest("hex"));
  assert.equal(outcome.stderr, "\u20ac");
  assert.equal(existsSync(fixture.observedPath), true, "output must reach the observer before exit");
});

for (const route of ["source", "package", "bin"]) {
  test(`inspector smoke preserves ${route} arguments with spaced paths`, {
    timeout: 25_000,
  }, async (t) => {
    const fixture = await createFixture(t);
    const config = path.join(fixture.root, "configuration \u03a9 %PATH%.json");
    const out = path.join(fixture.root, "report output");
    const outcome = await runSmoke(fixture, { route, args: ["--config", config, "--out", out, "--check"] });
    assert.equal(outcome.watchdog, false);
    assert.equal(outcome.status, 0, outcome.stderr);
    const args = JSON.parse(outcome.stdout);
    if (route === "package") {
      assert.deepEqual(args.slice(0, 3), ["exec", "--yes", "--package"]);
      assert.match(args[3], /^@openclaw\/plugin-inspector@\d+\.\d+\.\d+$/);
      assert.deepEqual(args.slice(4, 6), ["--", "plugin-inspector"]);
    }
    assert.deepEqual(args.slice(route === "package" ? 6 : 0),
      ["report", "--config", config, "--out", out, "--check"]);
  });
}

test("inspector smoke preserves a normal nonzero status and both streams", {
  timeout: 25_000,
}, async (t) => {
  const fixture = await createFixture(t);
  const outcome = await runSmoke(fixture, { mode: "exit-seven" });
  assert.equal(outcome.watchdog, false);
  assert.equal(outcome.signal, null);
  assert.equal(outcome.status, 7);
  assert.equal(outcome.stdout, "retained stdout");
  assert.equal(outcome.stderr, "retained stderr");
});

test("inspector smoke rejects invalid execution budgets before starting the command", {
  timeout: 60_000,
}, async (t) => {
  for (const timeout of ["0", "-1", "1.5", "250ms", "1e3", "Infinity", "NaN", "2147483648", "250\n"]) {
    await t.test(timeout, async (t) => {
      const fixture = await createFixture(t);
      const outcome = await runSmoke(fixture, { timeout });
      assert.equal(outcome.watchdog, false);
      assert.notEqual(outcome.status, 0);
      assert.match(outcome.stderr, /CRABPOT_PLUGIN_INSPECTOR_TIMEOUT_MS/);
      assert.match(outcome.stderr, /positive|integer|range|bounded/i);
      assert.deepEqual(readPids(fixture), [], "invalid configuration must not execute the command");
    });
  }
});

async function createFixture(t) {
  const root = await mkdtemp(path.join(os.tmpdir(), "crabpot process lifecycle "));
  const fixture = {
    root,
    binDir: path.join(root, "command paths"),
    inspectorRoot: path.join(root, "inspector source"),
    pidPath: path.join(root, "owned-pids.jsonl"),
    observedPath: path.join(root, "output-observed"),
    stopPath: path.join(root, "stop-fixture"),
    children: new Set(),
  };
  t.after(async () => {
    writeFileSync(fixture.stopPath, "stop\n");
    await Promise.all([...fixture.children].map(stopChild));
    for (const { pid } of readPids(fixture)) await assertGone(pid);
    await rm(root, { recursive: true, force: true });
  });
  // Copy the production entrypoints unchanged into an isolated consumer root.
  await cp(new URL("../scripts/", import.meta.url), path.join(root, "scripts"), { recursive: true });
  await mkdir(fixture.binDir);
  await mkdir(path.join(fixture.inspectorRoot, "src"), { recursive: true });
  await writeFile(path.join(root, "package.json"), '{"type":"module"}\n');
  const program = path.join(fixture.binDir, "fixture-command.mjs");
  await writeFile(program, commandSource);
  await writeFile(path.join(fixture.inspectorRoot, "src", "cli.js"), commandSource);
  fixture.bin = await writeCommand(fixture.binDir, "fixture inspector", program);
  await writeCommand(fixture.binDir, "npm", program);
  return fixture;
}

async function writeCommand(dir, name, program) {
  const command = path.join(dir, process.platform === "win32" ? `${name}.cmd` : name);
  const quote = (value) => `'${value.replaceAll("'", "'\\''")}'`;
  const source = process.platform === "win32"
    ? `@echo off\r\n"${process.execPath}" "${program}" %*\r\n`
    : `#!/bin/sh\nexec ${quote(process.execPath)} ${quote(program)} "$@"\n`;
  await writeFile(command, source);
  if (process.platform !== "win32") await chmod(command, 0o755);
  return command;
}

function runSmoke(fixture, { route = "source", mode = "args", timeout = "5000", args = [] } = {}) {
  const inheritedPath = Object.entries(process.env).find(([name]) => name.toUpperCase() === "PATH")?.[1] ?? "";
  const env = {
    ...process.env,
    CRABPOT_PLUGIN_INSPECTOR_TIMEOUT_MS: timeout,
    TEST_INSPECTOR_MODE: mode,
    TEST_INSPECTOR_PIDS: fixture.pidPath,
    TEST_INSPECTOR_OBSERVED: fixture.observedPath,
    TEST_INSPECTOR_STOP: fixture.stopPath,
  };
  for (const name of Object.keys(env)) {
    if (name.toUpperCase() === "PATH") delete env[name];
  }
  env.PATH = `${fixture.binDir}${path.delimiter}${inheritedPath}`;
  delete env.CRABPOT_PLUGIN_INSPECTOR_BIN;
  delete env.CRABPOT_PLUGIN_INSPECTOR_CLI;
  delete env.CRABPOT_PLUGIN_INSPECTOR_DIR;
  if (route === "bin") env.CRABPOT_PLUGIN_INSPECTOR_BIN = fixture.bin;
  if (route === "source") {
    env.CRABPOT_PLUGIN_INSPECTOR_CLI = "source";
    env.CRABPOT_PLUGIN_INSPECTOR_DIR = fixture.inspectorRoot;
  }
  return new Promise((resolve, reject) => {
    const child = spawn(process.execPath, [path.join(fixture.root, "scripts/run-plugin-inspector-smoke.mjs"), ...args], {
      cwd: fixture.root, env, stdio: ["ignore", "pipe", "pipe"],
    });
    fixture.children.add(child);
    let watchdog = false;
    let stdoutBytes = 0;
    let stdout = Buffer.alloc(0);
    let stderr = Buffer.alloc(0);
    const hash = createHash("sha256");
    const timer = setTimeout(() => {
      watchdog = true;
      writeFileSync(fixture.stopPath, "stop\n");
      child.kill("SIGKILL");
      child.stdout.destroy();
      child.stderr.destroy();
    }, 15_000);
    child.stdout.on("data", (chunk) => {
      stdoutBytes += chunk.length;
      hash.update(chunk);
      if (stdout.length < 65536) stdout = Buffer.concat([stdout, chunk.subarray(0, 65536 - stdout.length)]);
      if (mode === "large-stream" && stdoutBytes >= largeOutputBytes) {
        writeFileSync(fixture.observedPath, "observed\n");
      }
    });
    child.stderr.on("data", (chunk) => {
      stderr = Buffer.concat([stderr, chunk]).subarray(-65536);
    });
    child.once("error", (error) => { clearTimeout(timer); reject(error); });
    child.once("close", (status, signal) => {
      clearTimeout(timer);
      resolve({
        status, signal, watchdog, stdoutBytes, stdoutHash: hash.digest("hex"),
        stdout: stdout.toString("utf8"), stderr: stderr.toString("utf8"),
      });
    });
  });
}

function readPids(fixture) {
  if (!existsSync(fixture.pidPath)) return [];
  return readFileSync(fixture.pidPath, "utf8").trim().split("\n").filter(Boolean).map(JSON.parse);
}

function isAlive(pid) {
  try {
    process.kill(pid, 0);
    if (process.platform === "linux") {
      const stat = readFileSync(`/proc/${pid}/stat`, "utf8");
      return !["Z", "X"].includes(stat.slice(stat.lastIndexOf(")") + 2).split(" ")[0]);
    }
    return true;
  } catch (error) {
    if (error.code === "ESRCH" || error.code === "ENOENT") return false;
    throw error;
  }
}

async function assertGone(pid) {
  for (let attempt = 0; attempt < 100 && isAlive(pid); attempt += 1) await delay(10);
  assert.equal(isAlive(pid), false, `owned fixture process ${pid} survived completion`);
}

async function stopChild(child) {
  if (!child.pid || child.exitCode !== null || child.signalCode !== null) return;
  const closed = new Promise((resolve) => child.once("close", resolve));
  child.kill("SIGKILL");
  child.stdout?.destroy();
  child.stderr?.destroy();
  await closed;
}
