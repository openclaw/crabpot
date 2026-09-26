import assert from "node:assert/strict";
import { spawn, spawnSync } from "node:child_process";
import { copyFile, mkdir, mkdtemp, readFile, realpath, rm, writeFile } from "node:fs/promises";
import { createConnection } from "node:net";
import os from "node:os";
import path from "node:path";
import { test } from "node:test";
import { setTimeout as delay } from "node:timers/promises";
import { fileURLToPath, pathToFileURL } from "node:url";
import { Worker } from "node:worker_threads";
import { runOwnedCommand } from "../scripts/owned-command.mjs";

test("owned command preserves synchronous results, cwd, environment, and argument bytes", async (t) => {
  const root = await temporaryRoot(t);
  const args = ["space here", 'embedded"quote', "trailing\\", "\u03a9", "%PATH%", "&"];
  const result = runOwnedCommand(process.execPath, ["-e", `
    process.stdout.write(JSON.stringify({ cwd: process.cwd(), env: process.env.OWNER_TEST, args: process.argv.slice(1) }));
    process.stderr.write("retained stderr");
    process.exitCode = 7;
  `, ...args], {
    cwd: root, env: { ...process.env, OWNER_TEST: "retained value" }, timeout: 5000, encoding: "utf8",
  });
  assert.equal(typeof result.then, "undefined");
  assert.ifError(result.error);
  assert.equal(result.status, 7);
  assert.equal(result.signal, null);
  const observed = JSON.parse(result.stdout);
  observed.cwd = await realpath(observed.cwd);
  assert.deepEqual(observed, { cwd: await realpath(root), env: "retained value", args });
  assert.equal(result.stderr, "retained stderr");
});

test("owned command applies the default combined capture limit, including large valid output", () => {
  const limit = 1024 * 1024;
  for (const extra of [0, 1]) {
    const result = runOwnedCommand(process.execPath, ["-e", `
      process.stdout.write(Buffer.alloc(${limit / 2}, "a"));
      process.stderr.write(Buffer.alloc(${limit / 2 + extra}, "b"));
    `], { timeout: 5000 });
    assert.ok(result.stdout.length + result.stderr.length <= limit);
    if (extra) {
      assert.equal(result.error?.code, "ENOBUFS");
    } else {
      assert.ifError(result.error);
      assert.equal(result.status, 0);
      assert.equal(result.stdout.length, limit / 2);
      assert.equal(result.stderr.length, limit / 2);
      assert.equal(result.stdout.equals(Buffer.alloc(limit / 2, "a")), true);
      assert.equal(result.stderr.equals(Buffer.alloc(limit / 2, "b")), true);
    }
  }
});

test("owned command retains an explicit caller capture budget across repeated invocations", () => {
  for (let index = 0; index < 4; index += 1) {
    const result = runOwnedCommand(process.execPath, ["-e", `process.stdout.write("${index}");`], {
      timeout: 5000, maxBuffer: 8, encoding: "utf8",
    });
    assert.ifError(result.error);
    assert.equal(result.status, 0);
    assert.equal(result.stdout, String(index));
    assert.equal(result.stderr, "");
  }
});

test("owned command preserves a missing executable error rather than reporting child success", async (t) => {
  const root = await temporaryRoot(t);
  const command = path.join(root, "absent-command");
  const result = runOwnedCommand(command, ["argument"], { timeout: 5000, encoding: "utf8" });
  assert.equal(result.status, null);
  assert.equal(result.error?.code, "ENOENT");
  assert.equal(result.error?.path, command);
  assert.equal(result.stdout, "");
});

test("restricted Linux procfs entries do not prevent timeout escalation", {
  skip: process.platform !== "linux", timeout: 10_000,
}, async (t) => {
  const root = await temporaryRoot(t);
  const ownerPath = await copyOwner(root);
  const owner = await readFile(ownerPath, "utf8");
  const restricted = path.join(root, "restricted-read");
  await writeFile(ownerPath, owner.replace('from "node:fs";', 'from "./restricted-fs.mjs";'));
  await writeFile(path.join(root, "scripts/restricted-fs.mjs"), `
    export { existsSync, readdirSync, statSync } from "node:fs";
    import { readFileSync as read, writeFileSync } from "node:fs";
    export function readFileSync(file, ...args) {
      if (file === "/proc/1/stat") {
        writeFileSync(${JSON.stringify(restricted)}, "observed");
        throw Object.assign(new Error("restricted foreign procfs"), { code: "EACCES" });
      }
      return read(file, ...args);
    }
  `);
  const pidFile = path.join(root, "command-pid");
  const { runOwnedCommand: invoke } = await import(pathToFileURL(ownerPath).href);
  const started = performance.now();
  const result = invoke(process.execPath, ["-e", `
    require("node:fs").writeFileSync(${JSON.stringify(pidFile)}, String(process.pid));
    process.on("SIGTERM", () => {});
    setInterval(() => {}, 1000);
    setTimeout(() => process.exit(99), 7000).unref();
  `], { timeout: 750 });
  assert.equal(result.error?.code, "ETIMEDOUT");
  assert.equal(await readFile(restricted, "utf8"), "observed");
  assert.ok(performance.now() - started < 4000);
  const pid = Number(await readFile(pidFile, "utf8"));
  assert.equal(await waitForExit(pid, 250), true, "owned command must exit before fixture escape");
});

test("owned command bounds a missing Worker bootstrap without starting the requested command", {
  timeout: 20_000,
}, async (t) => {
  const root = await temporaryRoot(t);
  const ownerPath = await copyOwner(root);
  const { runOwnedCommand: invoke } = await import(pathToFileURL(ownerPath).href);
  await rm(ownerPath);
  const marker = path.join(root, "command-started");
  const started = performance.now();
  const result = invoke(process.execPath, ["-e", `
    require("node:fs").writeFileSync(${JSON.stringify(marker)}, "started");
  `], { timeout: 1000 });
  assert.equal(result.error?.code, "EOWNERSTART");
  assert.ok(performance.now() - started < 15_000);
  await assert.rejects(readFile(marker), { code: "ENOENT" });
});

for (const [fault, operation] of [
  ["signal", "overflow"], ["probe", "overflow"], ["worker-loss", "overflow"],
  ["probe", "timeout"], ["none", "timeout"],
]) {
  test(`POSIX owner preserves ${operation} with ${fault} fault without cached-PGID signaling`, {
    skip: process.platform === "win32", timeout: 20_000,
  }, async (t) => {
    const root = await mkdtemp(path.join(os.tmpdir(), "crabpot owner fault "));
    const rescuePath = path.join(root, "rescue.sock");
    t.after(async () => {
      await new Promise((resolve, reject) => {
        const socket = createConnection(rescuePath, () => socket.end());
        socket.setTimeout(15_000, () => socket.destroy(new Error("owned fixture rescue did not close")));
        socket.once("error", (error) => {
          if (error.code !== "ENOENT" && error.code !== "ECONNREFUSED") reject(error);
        });
        socket.once("close", resolve);
      });
      await rm(root, { recursive: true, force: true });
    });
    const ownerPath = await copyOwner(root);
    const callsPath = path.join(root, "fault-calls");
    await writeFile(callsPath, "");
    const source = await readFile(ownerPath, "utf8");
    await writeFile(ownerPath, `import "./fault-control.mjs";\n${source}`);
    await writeFile(path.join(root, "scripts/fault-control.mjs"), `
      import { appendFileSync, readFileSync } from "node:fs";
      import { isMainThread } from "node:worker_threads";
      const kill = process.kill;
      const fault = ${JSON.stringify(fault)};
      let injected = false;
      process.kill = (pid, signal) => {
        if (pid >= 0) return kill(pid, signal);
        const record = (event) => appendFileSync(${JSON.stringify(callsPath)},
          JSON.stringify({ event, pid, signal, at: performance.now() }) + "\\n");
        if (isMainThread && signal !== 0) {
          record("parent-signal");
          throw Object.assign(new Error("parent has no retained group authority"), { code: "EPERM" });
        }
        const command = JSON.parse(readFileSync(${JSON.stringify(path.join(root, "command.json"))}, "utf8"));
        if (pid !== -command.pid) throw new Error("fault targeted a different process group");
        if (!isMainThread && fault === "probe" && signal === 0) {
          record("probe-EPERM");
          throw Object.assign(new Error("injected persistent probe denial"), { code: "EPERM" });
        }
        if (!isMainThread && signal === "SIGTERM" && !injected && ["signal", "worker-loss"].includes(fault)) {
          injected = true;
          record(fault);
          if (fault === "worker-loss") process.exit(71);
          throw Object.assign(new Error("injected signal denial"), { code: "EPERM" });
        }
        return kill(pid, signal);
      };
    `);
    const fixture = fileURLToPath(new URL("./fixtures/owned-command-posix.mjs", import.meta.url));
    const execution = spawnSync(process.execPath, ["--input-type=module", "-e", `
      import { runOwnedCommand } from ${JSON.stringify(pathToFileURL(ownerPath).href)};
      const started = performance.now();
      const result = runOwnedCommand(process.execPath, ${JSON.stringify([fixture, operation, root])}, {
        timeout: 1000, maxBuffer: 64, encoding: "utf8",
      });
      console.log(JSON.stringify({
        error: result.error && { code: result.error.code, message: result.error.message },
        cleanupError: result.cleanupError,
        elapsed: performance.now() - started,
      }));
    `], { encoding: "utf8", timeout: 12_000 });
    const calls = (await readFile(callsPath, "utf8")).trim().split("\n").filter(Boolean).map(JSON.parse);
    const injected = calls.filter(({ event }) => event === (fault === "probe" ? "probe-EPERM" : fault));
    if (fault === "none") assert.equal(injected.length, 0);
    else assert.ok(injected.length > 0, "the owned group's fault must actually be injected");
    t.diagnostic(`${fault}: injected ${injected.length}; parent group signals ${calls.filter(({ event }) => event === "parent-signal").length}`);
    assert.ifError(execution.error);
    assert.equal(execution.status, 0, execution.stderr);
    const observed = JSON.parse(execution.stdout);
    assert.deepEqual(calls.filter(({ event }) => event === "parent-signal"), []);
    assert.equal(observed.error?.code, operation === "overflow" ? "ENOBUFS" : "ETIMEDOUT", JSON.stringify(observed));
    assert.ok(observed.error.message.startsWith(operation === "overflow"
      ? "command output exceeded maxBuffer" : "command timed out after 1000ms"), JSON.stringify(observed));
    assert.ok(observed.elapsed < (fault === "worker-loss" ? 6500 : 4000), JSON.stringify(observed));
    if (fault === "signal" || fault === "none") {
      assert.equal(observed.cleanupError, undefined, "subsequent extinction must be observed");
      assert.doesNotMatch(observed.error.message, /command cleanup was not confirmed/);
      if (operation === "timeout") assert.equal(observed.error.message, "command timed out after 1000ms");
      const command = await readReceipt(path.join(root, "command.json"), 1000, () => execution.stderr);
      assert.equal(await waitForExit(command.pid, 250), true);
    } else {
      assert.equal(observed.cleanupError?.code, "EOWNERCLEANUP", JSON.stringify(observed));
      assert.match(observed.error.message, /; command cleanup was not confirmed$/);
      if (fault === "probe") {
        assert.ok(injected.length > 1, "probe denial must persist until the cleanup deadline");
        assert.ok(injected.at(-1).at - injected[0].at >= 1900, "probe denial must span the cleanup interval");
        assert.equal(observed.cleanupError.cause?.code, "EPERM");
      } else {
        assert.match(observed.cleanupError.message, /not observed|unknown|receipt/i);
        const command = await readReceipt(path.join(root, "command.json"), 1000, () => execution.stderr);
        assert.equal(process.kill(command.pid, 0), true, "Worker loss must not claim command extinction");
      }
    }
  });
}

test("Darwin zombie-only group reports EPERM until its parked parent reaps it", {
  skip: process.platform !== "darwin", timeout: 25_000,
}, async (t) => {
  const root = await mkdtemp(path.join(os.tmpdir(), "crabpot zombie group "));
  const fixture = fileURLToPath(new URL("./fixtures/owned-command-posix.mjs", import.meta.url));
  const parent = spawn(process.execPath, [fixture, "zombie-parent", root], { stdio: ["ignore", "ignore", "pipe"] });
  let stderr = "";
  parent.stderr.on("data", (chunk) => { stderr += chunk; });
  const closed = new Promise((resolve) => parent.once("close", resolve));
  const sentinel = spawn(process.execPath, ["-e", `
    process.stdin.resume();
    setTimeout(() => process.exit(98), 20000).unref();
  `], { stdio: ["pipe", "ignore", "ignore"] });
  const sentinelClosed = new Promise((resolve) => sentinel.once("close", resolve));
  t.after(async () => {
    await writeFile(path.join(root, "child-release"), "rescue");
    await writeFile(path.join(root, "parent-rescue"), "rescue");
    await closed;
    sentinel.stdin.end();
    await sentinelClosed;
    await rm(root, { recursive: true, force: true });
  });
  const parked = await readReceipt(path.join(root, "parked.json"), 5000, () => stderr);
  assert.equal(parked.pid, parent.pid);
  assert.ok(parked.childPid > 0);
  await writeFile(path.join(root, "child-release"), "normal");
  const exiting = await readReceipt(path.join(root, "child-exiting.json"), 3000, () => stderr);
  assert.equal(exiting.pid, parked.childPid);
  assert.equal(exiting.reason, "normal");
  let groupError;
  const deadline = performance.now() + 3000;
  while (!groupError && performance.now() < deadline) {
    try { process.kill(-parked.childPid, 0); } catch (error) { groupError = error; }
    if (!groupError) await delay(10);
  }
  assert.equal(groupError?.code, "EPERM", "a zombie-only group is not ESRCH absence proof");
  await writeFile(path.join(root, "parent-release"), "normal");
  const unparked = await readReceipt(path.join(root, "unparked.json"), 3000, () => stderr);
  assert.equal(unparked.reason, "normal");
  const reaped = await readReceipt(path.join(root, "reaped.json"), 3000, () => stderr);
  const childClosed = await readReceipt(path.join(root, "child-closed.json"), 3000, () => stderr);
  assert.deepEqual(reaped, { pid: parked.childPid, code: 0, signal: null });
  assert.deepEqual(childClosed, reaped);
  await closed;
  assert.equal(parent.exitCode, 0, stderr);
  assert.throws(() => process.kill(-parked.childPid, 0), { code: "ESRCH" });
  assert.equal(sentinel.exitCode, null);
  assert.equal(sentinel.signalCode, null);
  assert.equal(process.kill(sentinel.pid, 0), true);
  t.diagnostic("native EPERM -> explicit reap/closure -> ESRCH; no historic first-failure sequence inferred");
});

test("Windows controller inherits its parent environment while the native command receives only its target environment", {
  skip: process.platform !== "win32", timeout: 20_000,
}, async (t) => {
  const root = await mkdtemp(path.join(os.tmpdir(), "crabpot environment owner "));
  let worker;
  let result;
  t.after(async () => {
    await worker?.terminate();
    // Worker exit alone does not prove helper/Job closure. Keep the copied
    // owner and receipts when the native result leaves cleanup unknown.
    if (!worker || (result && !result.error && !result.cleanupError && result.status === 0 && result.signal === null)) {
      await rm(root, { recursive: true, force: true });
    } else {
      t.diagnostic("environment fixture retained: native cleanup unconfirmed");
    }
  });
  const ownerPath = await copyOwner(root);
  const helperReceipt = path.join(root, "helper-environment.json");
  const original = await readFile(new URL("../scripts/owned-command-windows.ps1", import.meta.url), "utf8");
  const entry = '$ErrorActionPreference = "Stop"';
  assert.equal(original.split(entry).length, 2);
  // Observe the actual controller before any cmdlet/module loading. Record only
  // synthetic comparisons, then retain the real parser, compiler and Job owner.
  await writeFile(path.join(root, "scripts/owned-command-windows.ps1"), original.replace(entry, `${entry}
    $parentOnly = [Environment]::GetEnvironmentVariable("CRABPOT_OWNER_PARENT_ONLY") -ceq "parent-only"
    $parentConflict = [Environment]::GetEnvironmentVariable("CRABPOT_OWNER_CONFLICT") -ceq "parent"
    $targetAbsent = $null -eq [Environment]::GetEnvironmentVariable("CRABPOT_OWNER_TARGET_ONLY")
    $observed = '{"parentOnly":' + $parentOnly.ToString().ToLowerInvariant() +
        ',"parentConflict":' + $parentConflict.ToString().ToLowerInvariant() +
        ',"targetAbsent":' + $targetAbsent.ToString().ToLowerInvariant() + '}'
    [System.IO.File]::WriteAllText('${helperReceipt.replaceAll("'", "''")}', $observed)
    if (-not ($parentOnly -and $parentConflict -and $targetAbsent)) { throw "controller environment boundary failed" }
  `));
  await copyFile(new URL("../scripts/owned-command-windows.cs", import.meta.url),
    path.join(root, "scripts/owned-command-windows.cs"));
  const systemRoot = Object.entries(process.env).find(([key]) => key.toUpperCase() === "SYSTEMROOT")?.[1];
  assert.ok(systemRoot);
  // Workers preserve key casing. Exercise parent lookup with a non-default case
  // without changing the test process environment or the native target block.
  const parentEnv = Object.fromEntries(Object.entries(process.env).filter(([key]) =>
    key.toUpperCase() !== "SYSTEMROOT" && !key.toUpperCase().startsWith("CRABPOT_OWNER_")));
  Object.assign(parentEnv, {
    systemroot: systemRoot, CRABPOT_OWNER_PARENT_ONLY: "parent-only", CRABPOT_OWNER_CONFLICT: "parent",
  });
  worker = new Worker(`
    const { parentPort, workerData } = require("node:worker_threads");
    import(workerData.owner).then(({ runOwnedCommand }) => {
      parentPort.postMessage(runOwnedCommand(process.execPath, ["-e", workerData.command], {
        cwd: workerData.root, env: workerData.targetEnv, timeout: 5000, encoding: "utf8",
      }));
    });
  `, { eval: true, env: parentEnv, workerData: {
    owner: pathToFileURL(ownerPath).href, root,
    targetEnv: { SystemRoot: systemRoot, CRABPOT_OWNER_CONFLICT: "target", CRABPOT_OWNER_TARGET_ONLY: "target-only" },
    command: `process.stdout.write(JSON.stringify({
      parentAbsent: process.env.CRABPOT_OWNER_PARENT_ONLY === undefined,
      targetConflict: process.env.CRABPOT_OWNER_CONFLICT === "target",
      targetOnly: process.env.CRABPOT_OWNER_TARGET_ONLY === "target-only",
    }));`,
  } });
  result = await new Promise((resolve, reject) => {
    worker.once("message", resolve);
    worker.once("error", reject);
    worker.once("exit", () => reject(new Error("environment fixture exited without a result")));
  });
  assert.deepEqual(JSON.parse(await readFile(helperReceipt, "utf8")), {
    parentOnly: true, parentConflict: true, targetAbsent: true,
  });
  assert.ifError(result.error);
  assert.ifError(result.cleanupError);
  assert.equal(result.status, 0);
  assert.equal(result.signal, null);
  assert.deepEqual(JSON.parse(result.stdout), { parentAbsent: true, targetConflict: true, targetOnly: true });
});

test("Windows adapter setup failure never runs an uncontained command", {
  skip: process.platform !== "win32", timeout: 20_000,
}, async (t) => {
  const root = await temporaryRoot(t);
  const ownerPath = await copyOwner(root);
  const { runOwnedCommand: invoke } = await import(pathToFileURL(ownerPath).href);
  const marker = path.join(root, "command-started");
  const result = invoke(process.execPath, ["-e", `
    require("node:fs").writeFileSync(${JSON.stringify(marker)}, "started");
  `], { timeout: 1000 });
  assert.ok(result.error);
  assert.equal(result.status, null);
  await assert.rejects(readFile(marker), { code: "ENOENT" });
});

test("Windows command preserves the native process creation error", {
  skip: process.platform !== "win32", timeout: 20_000,
}, async (t) => {
  const root = await temporaryRoot(t);
  const command = path.join(root, "invalid executable.exe");
  await writeFile(command, "not a Windows executable\n");
  const baseline = spawnSync(command, ["argument"], { timeout: 1000 });
  assert.equal(baseline.status, null);
  assert.ok(baseline.error);
  const result = runOwnedCommand(command, ["argument"], { timeout: 1000 });
  assert.equal(result.status, null);
  assert.ok([193, 216].includes(result.error?.nativeCode), result.error?.message);
  assert.deepEqual({
    code: result.error?.code,
    operation: result.error?.operation,
  }, { code: baseline.error.code, operation: "CreateProcessW(JOB_LIST)" }, result.error?.message);
  assert.equal(result.error?.path, command);
  assert.deepEqual(result.error?.spawnargs, ["argument"]);
  t.diagnostic(`native error ${result.error.nativeCode} retains Node ${baseline.error.code}`);
});

for (const ownerLost of [false, true]) {
  test(`Windows blocked bootstrap ${ownerLost ? "observes owner loss" : "has a deadline"} before native admission`, {
    skip: process.platform !== "win32", timeout: 30_000,
  }, async (t) => {
    const root = await mkdtemp(path.join(os.tmpdir(), "crabpot bootstrap owner "));
    const ownerPath = await copyOwner(root);
    const pidFile = path.join(root, "helper-pid");
    const commandMarker = path.join(root, "command-started");
    const original = await readFile(new URL("../scripts/owned-command-windows.ps1", import.meta.url), "utf8");
    const compilation = 'Add-Type -Path (Join-Path $PSScriptRoot "owned-command-windows.cs")';
    assert.equal(original.split(compilation).length, 2);
    // Stall the real bootstrap at compilation, retaining its actual control-pipe
    // ownership. The bounded fixture escape only runs after the assertions fail.
    const blocked = original.replace(compilation, `
        [System.IO.File]::WriteAllText('${pidFile.replaceAll("'", "''")}', [string]$PID)
        Start-Sleep -Seconds 20
        exit 99
    `);
    await writeFile(path.join(root, "scripts/owned-command-windows.ps1"), blocked);
    const resultFile = path.join(root, "result.json");
    const worker = new Worker(`
      const { workerData } = require("node:worker_threads");
      import(workerData.owner).then(({ runOwnedCommand }) => {
        const result = runOwnedCommand(process.execPath, ["-e", workerData.command], { timeout: 1000 });
        const fs = require("node:fs");
        fs.writeFileSync(workerData.result + ".pending", JSON.stringify(result));
        fs.renameSync(workerData.result + ".pending", workerData.result);
      });
    `, { eval: true, workerData: {
      owner: pathToFileURL(ownerPath).href, result: resultFile,
      command: `require("node:fs").writeFileSync(${JSON.stringify(commandMarker)}, "started")`,
    } });
    const errors = [];
    worker.on("error", (error) => errors.push(error));
    let helperPid;
    t.after(async () => {
      await worker.terminate();
      // Rescue does not signal a possibly recycled PID. The fixture expires itself.
      if (helperPid) await waitForExit(helperPid, 22_000);
      await rm(root, { recursive: true, force: true });
    });
    for (let attempt = 0; attempt < 150 && !helperPid; attempt += 1) {
      try { helperPid = Number(await readFile(pidFile, "utf8")); } catch (error) {
        if (error.code !== "ENOENT") throw error;
      }
      if (!helperPid) await delay(50);
    }
    assert.ok(helperPid, "the actual helper must reach the blocked bootstrap");
    if (ownerLost) {
      await worker.terminate();
      assert.equal(await waitForExit(helperPid, 2000), true);
    } else {
      let result;
      for (let attempt = 0; attempt < 250 && !result; attempt += 1) {
        try { result = JSON.parse(await readFile(resultFile, "utf8")); } catch (error) {
          if (error.code !== "ENOENT") throw error;
        }
        if (!result) await delay(50);
      }
      assert.ok(result, "bootstrap must return before the fixture's independent escape");
      assert.ok(result.error);
      assert.equal(await waitForExit(helperPid, 100), true);
    }
    assert.deepEqual(errors, []);
    await assert.rejects(readFile(commandMarker), { code: "ENOENT" });
  });
}

for (const phase of ["preconnection", "late connection"]) {
  test(`Windows cancelled bootstrap cleans ${phase} without issuing a command`, {
    skip: process.platform !== "win32", timeout: 30_000,
  }, async (t) => {
    const root = await mkdtemp(path.join(os.tmpdir(), "crabpot connection owner "));
    const ownerPath = await copyOwner(root);
    const helperReady = path.join(root, "helper-ready.json");
    const releaseFile = path.join(root, "helper-release");
    const rescueFile = path.join(root, "helper-rescue");
    const escapeFile = path.join(root, "helper-escape.json");
    const resultFile = path.join(root, "result.json");
    const commandMarker = path.join(root, "command-started");
    const requestMarker = path.join(root, "request-issued");
    const stopMarker = path.join(root, "stopped-before-connection");
    const original = await readFile(new URL("../scripts/owned-command-windows.ps1", import.meta.url), "utf8");
    const connection = "    $pipe.Connect(5000)";
    assert.equal(original.split(connection).length, 2);
    const ps = (value) => `'${value.replaceAll("'", "''")}'`;
    const blocked = original.replace(connection, `
        $fixtureExpiry = [System.Threading.CancellationTokenSource]::new()
        $fixtureKill = [System.Delegate]::CreateDelegate(
            [System.Action], [System.Diagnostics.Process]::GetCurrentProcess(), "Kill")
        $fixtureRegistration = $fixtureExpiry.Token.Register($fixtureKill)
        $expiresAt = [DateTimeOffset]::UtcNow.ToUnixTimeMilliseconds() + 20000
        $fixtureExpiry.CancelAfter(20000)
        $live = @{ pid = $PID; phase = "preconnection"; expiresAtMs = $expiresAt } | ConvertTo-Json -Compress
        [System.IO.File]::WriteAllText(${ps(helperReady + ".pending")}, $live)
        [System.IO.File]::Move(${ps(helperReady + ".pending")}, ${ps(helperReady)})
        while (-not [System.IO.File]::Exists(${ps(releaseFile)})) {
            if ([System.IO.File]::Exists(${ps(rescueFile)})) {
                $escape = @{ rescued = $true } | ConvertTo-Json -Compress
                [System.IO.File]::WriteAllText(${ps(escapeFile + ".pending")}, $escape)
                [System.IO.File]::Move(${ps(escapeFile + ".pending")}, ${ps(escapeFile)})
                exit 99
            }
            Start-Sleep -Milliseconds 20
        }
        ${connection}
    `);
    await writeFile(path.join(root, "scripts/owned-command-windows.ps1"), blocked);
    await copyFile(new URL("../scripts/owned-command-windows.cs", import.meta.url),
      path.join(root, "scripts/owned-command-windows.cs"));
    if (phase === "late connection") {
      const owner = await readFile(ownerPath, "utf8");
      const accept = '  server.once("connection", (connection) => {';
      assert.equal(owner.split(accept).length, 2);
      // Cancel at delivery of the real connection. Observe the actual write,
      // so killing the helper cannot hide an incorrectly issued request.
      await writeFile(ownerPath, `import { writeFileSync } from "node:fs";\n` + owner.replace(accept, `${accept}
        const send = connection.write.bind(connection);
        connection.write = (...args) => {
          if (typeof args[0] === "string" && args[0].startsWith("{")) {
            writeFileSync(${JSON.stringify(requestMarker)}, "issued");
          }
          return send(...args);
        };
        stop();
        writeFileSync(${JSON.stringify(stopMarker)}, "stopped");
      `));
    }
    const errors = [];
    const worker = new Worker(`
      const { workerData } = require("node:worker_threads");
      setInterval(() => {}, 1000);
      import(workerData.owner).then(({ runOwnedCommand }) => {
        const result = runOwnedCommand(process.execPath, ["-e", workerData.command], { timeout: 1000 });
        const fs = require("node:fs");
        fs.writeFileSync(workerData.result + ".pending", JSON.stringify(result));
        fs.renameSync(workerData.result + ".pending", workerData.result);
      });
    `, { eval: true, workerData: {
      owner: pathToFileURL(ownerPath).href, result: resultFile,
      command: `require("node:fs").writeFileSync(${JSON.stringify(commandMarker)}, "started")`,
    } });
    worker.on("error", (error) => errors.push(error));
    let helperPid;
    t.after(async () => {
      let closed = false;
      try {
        await writeFile(rescueFile, "stop");
        if (helperPid) closed = await waitForExit(helperPid, 22_000);
      } finally {
        await worker.terminate();
        if (closed) await rm(root, { recursive: true, force: true });
      }
      assert.equal(closed, true, "controlled helper must close before fixture removal");
    });
    const ready = await readReceipt(helperReady, 14_000, () => errors.map(String).join("\n"));
    assert.equal(ready.phase, "preconnection");
    assert.ok(Number.isSafeInteger(ready.pid) && ready.pid > 0);
    helperPid = ready.pid;
    assert.equal(process.kill(helperPid, 0), true, "actual helper must be alive before cancellation");
    if (phase === "late connection") await writeFile(releaseFile, "connect");
    const result = await readReceipt(resultFile, 14_000, () => errors.map(String).join("\n"));
    assert.ok(result.error);
    if (phase === "preconnection") assert.equal(result.error.code, "EOWNERSTART");
    const closed = await waitForExit(helperPid, 100);
    t.diagnostic(`phase=${phase}; error=${result.error.code}; helperClosedBeforeRescue=${closed}`);
    assert.ok(Date.now() < ready.expiresAtMs, "cleanup assertion must precede independent fixture expiry");
    if (phase === "late connection") {
      assert.equal(await readFile(stopMarker, "utf8"), "stopped");
      await assert.rejects(readFile(requestMarker), { code: "ENOENT" });
    }
    assert.equal(closed, true, "cancelled helper must exit before cooperative rescue");
    assert.equal(result.cleanupError, undefined, "closed helper with no issued request has known cleanup");
    await assert.rejects(readFile(escapeFile), { code: "ENOENT" });
    await assert.rejects(readFile(commandMarker), { code: "ENOENT" });
    assert.deepEqual(errors, []);
  });
}

for (const [ownerLost, guarded] of [[false, true], [true, true], [false, false], [true, false]]) {
  test(`Windows actual compiler ${guarded ? "exits" : "negative control survives"} on ${ownerLost ? "owner loss" : "startup expiry"}`, {
    skip: process.platform !== "win32", timeout: 45_000,
  }, async (t) => {
    const root = await mkdtemp(path.join(os.tmpdir(), "crabpot compiler owner "));
    const ownerPath = await copyOwner(root);
    const pidFile = path.join(root, "helper-pid");
    const commandMarker = path.join(root, "command-started");
    const resultFile = path.join(root, "result.json");
    const original = await readFile(new URL("../scripts/owned-command-windows.ps1", import.meta.url), "utf8");
    const compilation = 'Add-Type -Path (Join-Path $PSScriptRoot "owned-command-windows.cs")';
    assert.equal(original.split(compilation).length, 2);
    const guardStart = original.indexOf("    # CodeDOM starts csc.exe.");
    const guardEnd = original.indexOf(`    ${compilation}`);
    assert.ok(guardStart > 0 && guardEnd > guardStart);
    const helperSource = guarded ? original : original.slice(0, guardStart) + original.slice(guardEnd);
    await writeFile(path.join(root, "scripts/owned-command-windows.ps1"), helperSource.replace(compilation, `
      [System.IO.File]::WriteAllText('${pidFile.replaceAll("'", "''")}', [string]$PID)
      ${compilation}
    `));
    const native = await readFile(new URL("../scripts/owned-command-windows.cs", import.meta.url), "utf8");
    // Keep a real CodeDOM compilation active long enough for native observation,
    // without replacing the compiler or introducing a production test seam.
    const source = native + Array.from({ length: 10_000 }, (_, index) =>
      `\ninternal class CompilerObservation${index} { }`).join("");
    await writeFile(path.join(root, "scripts/owned-command-windows.cs"), source);
    const powershell = path.join(process.env.SystemRoot, "System32/WindowsPowerShell/v1.0/powershell.exe");
    const observer = new Worker(`
      const { workerData, parentPort } = require("node:worker_threads");
      import(workerData.owner).then(({ runOwnedCommand }) => {
        parentPort.postMessage(runOwnedCommand(workerData.command, workerData.args, {
          timeout: 35000, maxBuffer: 8192, encoding: "utf8",
        }));
      });
    `, { eval: true, workerData: {
      owner: new URL("../scripts/owned-command.mjs", import.meta.url).href,
      command: powershell, args: [
        "-NoLogo", "-NoProfile", "-NonInteractive", "-ExecutionPolicy", "Bypass",
        "-File", fileURLToPath(new URL("./fixtures/owned-command-compiler-observer.ps1", import.meta.url)), root,
      ],
    } });
    let observerResult;
    const observerClosed = new Promise((resolve) => {
      observer.once("message", (result) => { observerResult = result; resolve(); });
      observer.once("exit", resolve);
    });
    const observerError = () => observerResult?.stderr ?? "";
    const sentinel = spawn(process.execPath, ["-e", "setInterval(() => {}, 1000)"], { stdio: "ignore" });
    const sentinelClosed = new Promise((resolve) => sentinel.once("close", resolve));
    const errors = [];
    observer.on("error", (error) => errors.push(error));
    sentinel.on("error", (error) => errors.push(error));
    let worker;
    let compiler;
    t.after(async () => {
      try {
        await writeFile(path.join(root, "observer-rescue"), "stop");
        await worker?.terminate();
        const completed = await Promise.race([observerClosed.then(() => true), delay(6000).then(() => false)]);
        if (compiler) {
          assert.equal(completed, true, "owned compiler rescue must complete before observer termination");
          assert.equal(observerResult?.status, 0, observerError());
          assert.ifError(observerResult.error);
          assert.equal(await waitForExit(compiler.pid, 1000), true, "fixture rescue must leave no compiler process");
        }
      } finally {
        await observer.terminate();
        sentinel.kill();
        await sentinelClosed;
        await rm(root, { recursive: true, force: true });
      }
    });
    await readReceipt(path.join(root, "observer-ready"), 10_000, observerError);
    worker = new Worker(`
      const { workerData } = require("node:worker_threads");
      import(workerData.owner).then(({ runOwnedCommand }) => {
        const result = runOwnedCommand(process.execPath, ["-e", workerData.command], { timeout: 1000 });
        const fs = require("node:fs");
        fs.writeFileSync(workerData.result + ".pending", JSON.stringify(result));
        fs.renameSync(workerData.result + ".pending", workerData.result);
      });
    `, { eval: true, workerData: {
      owner: pathToFileURL(ownerPath).href, result: resultFile,
      command: `require("node:fs").writeFileSync(${JSON.stringify(commandMarker)}, "started")`,
    } });
    worker.on("error", (error) => errors.push(error));
    compiler = await readReceipt(path.join(root, "compiler-suspended.json"), 8000, observerError);
    assert.equal(compiler.name, "csc.exe");
    assert.equal(compiler.suspended, true);
    assert.ok(compiler.pid > 0 && compiler.helperPid > 0);
    assert.equal(process.kill(compiler.pid, 0), true, "actual compiler must be alive at interruption");
    if (ownerLost) {
      await worker.terminate();
    } else {
      const result = await readReceipt(resultFile, 14_000, observerError);
      assert.equal(result.error?.code, "EOWNERSTART");
      assert.equal(result.status, null);
    }
    assert.equal(await waitForExit(compiler.helperPid, 1000), true);
    const extinct = await waitForExit(compiler.pid, 2500);
    const requireExtinction = () => assert.equal(extinct, true, "actual compiler must exit before fixture rescue");
    if (guarded) {
      requireExtinction();
      const exited = await readReceipt(path.join(root, "compiler-exited.json"), 1000, observerError);
      assert.deepEqual(exited, { pid: compiler.pid, exited: true, rescued: false });
    } else {
      assert.throws(requireExtinction, {
        code: "ERR_ASSERTION", message: /actual compiler must exit before fixture rescue/,
      });
      t.diagnostic("negative control: helper exited; real csc.exe survived; extinction assertion failed before rescue");
    }
    assert.equal(sentinel.exitCode, null);
    assert.equal(sentinel.signalCode, null);
    assert.equal(process.kill(sentinel.pid, 0), true);
    await assert.rejects(readFile(commandMarker), { code: "ENOENT" });
    assert.deepEqual(errors, []);
  });
}

test("Windows Job outlives its Worker only long enough to clean the admitted command", {
  skip: process.platform !== "win32", timeout: 25_000,
}, async (t) => {
  const root = await mkdtemp(path.join(os.tmpdir(), "crabpot owner loss "));
  const pidFile = path.join(root, "command-pid");
  const stopFile = path.join(root, "fixture-rescue");
  const source = `
    const fs = require("node:fs");
    fs.writeFileSync(${JSON.stringify(pidFile)}, String(process.pid));
    setInterval(() => {
      if (fs.existsSync(${JSON.stringify(stopFile)})) process.exit(99);
    }, 10);
    setTimeout(() => process.exit(98), 20000).unref();
  `;
  const worker = new Worker(`
    const { workerData } = require("node:worker_threads");
    import(workerData.owner).then(({ runOwnedCommand }) => {
      runOwnedCommand(process.execPath, ["-e", workerData.source], { timeout: 15000 });
    });
  `, { eval: true, workerData: { owner: new URL("../scripts/owned-command.mjs", import.meta.url).href, source } });
  t.after(async () => {
    await writeFile(stopFile, "stop");
    await worker.terminate();
    await rm(root, { recursive: true, force: true });
  });
  let pid;
  for (let attempt = 0; attempt < 150 && !pid; attempt += 1) {
    try { pid = Number(await readFile(pidFile, "utf8")); } catch (error) {
      if (error.code !== "ENOENT") throw error;
    }
    if (!pid) await delay(50);
  }
  assert.ok(pid, "the command must be admitted before its Worker is terminated");
  await worker.terminate();
  let running = true;
  for (let attempt = 0; attempt < 100 && running; attempt += 1) {
    try { process.kill(pid, 0); } catch (error) {
      if (error.code !== "ESRCH") throw error;
      running = false;
    }
    if (running) await delay(25);
  }
  assert.equal(running, false, "native owner-loss cleanup must precede fixture rescue");
});

async function temporaryRoot(t) {
  const root = await mkdtemp(path.join(os.tmpdir(), "crabpot command owner "));
  t.after(() => rm(root, { recursive: true, force: true }));
  return root;
}

async function copyOwner(root) {
  await mkdir(path.join(root, "scripts"));
  await writeFile(path.join(root, "package.json"), '{"type":"module"}\n');
  for (const name of ["owned-command.mjs", "portable-command.mjs"]) {
    await copyFile(new URL(`../scripts/${name}`, import.meta.url), path.join(root, "scripts", name));
  }
  return path.join(root, "scripts/owned-command.mjs");
}

async function waitForExit(pid, timeout) {
  const deadline = performance.now() + timeout;
  while (performance.now() < deadline) {
    try { process.kill(pid, 0); } catch (error) {
      if (error.code === "ESRCH") return true;
      throw error;
    }
    await delay(25);
  }
  return false;
}

async function readReceipt(file, timeout, detail) {
  const deadline = performance.now() + timeout;
  while (performance.now() < deadline) {
    try { return JSON.parse(await readFile(file, "utf8")); } catch (error) {
      if (error.code !== "ENOENT") throw error;
    }
    await delay(20);
  }
  assert.fail(`receipt ${path.basename(file)} was not produced: ${detail()}`);
}
