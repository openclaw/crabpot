import assert from "node:assert/strict";
import { spawn, spawnSync } from "node:child_process";
import { copyFile, mkdir, mkdtemp, readFile, realpath, rename, rm, stat, writeFile } from "node:fs/promises";
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
  const args = ["space here", 'embedded"quote', "trailing\\", "\u03a9", "汉字🦊", "", "line\nbreak", "\t", "%PATH%", "&"];
  const result = runOwnedCommand(process.execPath, ["-e", `
    process.stdout.write(JSON.stringify({ cwd: process.cwd(), env: process.env.OWNER_TEST, args: process.argv.slice(1) }));
    process.stderr.write("retained stderr");
    process.exitCode = 7;
  `, ...args], {
    cwd: root, env: { ...process.env, OWNER_TEST: "retained value 汉字🦊\nsecond line" }, timeout: 5000, encoding: "utf8",
  });
  assert.equal(typeof result.then, "undefined");
  assert.ifError(result.error);
  assert.equal(result.startupTrace, undefined, "successful results do not publish diagnostic traces");
  assert.equal(result.status, 7);
  assert.equal(result.signal, null);
  const observed = JSON.parse(result.stdout);
  observed.cwd = await realpath(observed.cwd);
  assert.deepEqual(observed, { cwd: await realpath(root), env: "retained value 汉字🦊\nsecond line", args });
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
  assert.deepEqual(tracePhases(result), ["owner-started"]);
  assert.equal(result.cleanupError?.code, "EOWNERCLEANUP", "missing Worker result remains unconfirmed cleanup");
  assert.ok(performance.now() - started < 15_000);
  await assert.rejects(readFile(marker), { code: "ENOENT" });
});

test("parent drains bounded phase observations without delaying queued results or accepting arbitrary trace data", async (t) => {
  const root = await temporaryRoot(t);
  const ownerPath = await copyOwner(root);
  const source = await readFile(ownerPath, "utf8");
  const entry = 'if (workerData?.ownedCommand === true) {';
  assert.equal(source.split(entry).length, 2);
  await writeFile(ownerPath, source.replace(entry, `${entry}
    const atMs = Date.now() - 100;
    for (let i = 0; i < 1200; i++) {
      workerData.port.postMessage({ type: "phase", phase: "worker-entered", atMs });
    }
    for (const observation of [
      { phase: "arbitrary-private-value", atMs },
      { phase: "preparation-started", atMs: Infinity },
      { phase: "preparation-started", atMs: -1 },
      { phase: "preparation-started", atMs: 0.5 },
    ]) workerData.port.postMessage({ type: "phase", ...observation });
    workerData.port.postMessage({ type: "result", result: {
      pid: 0, status: null, signal: null, stdout: Buffer.alloc(0), stderr: Buffer.alloc(0),
      error: { code: "EOWNERTEST", message: "original fixture failure" },
    } });
    workerData.port.close();
  } else if (false) {
  `));
  const { runOwnedCommand: invoke } = await import(pathToFileURL(ownerPath).href);
  const started = performance.now();
  const result = invoke(process.execPath, ["-e", "throw Error('must not execute')"], { timeout: 1000 });
  assert.equal(result.error?.code, "EOWNERTEST");
  assert.equal(result.error.message, "original fixture failure");
  assert.equal(result.cleanupError, undefined);
  assert.deepEqual(tracePhases(result), ["owner-started", "worker-entered"]);
  const observation = result.error.startupTrace[1];
  assert.ok(observation.observedAtMs > observation.atMs, "emission and receipt timestamps remain distinct");
  assert.ok(performance.now() - started < 5000, "diagnostic duplicates cannot consume the startup budget");
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
        error: result.error && { code: result.error.code, message: result.error.message, startupTrace: result.error.startupTrace },
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
    assert.deepEqual(tracePhases(observed), ["owner-started", "worker-entered"], "parent retains observations even without the Worker's terminal result");
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
  // synthetic comparisons, then retain the real serializer and Job owner.
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


test("Windows emitted Job structs match the native x64 ABI", {
  skip: process.platform !== "win32", timeout: 20_000,
}, async (t) => {
  const root = await temporaryRoot(t);
  const ownerPath = await copyOwner(root);
  const abiFile = path.join(root, "native-abi.json");
  const source = await readFile(new URL("../scripts/owned-command-windows.ps1", import.meta.url), "utf8");
  const prepared = '    $writer.WriteLine("PREPARED")';
  assert.equal(source.split(prepared).length, 2);
  const probe = [
    '$abi = [System.Collections.Generic.Dictionary[string,object]]::new()',
    '$abi["startupEx"] = [System.Runtime.InteropServices.Marshal]::SizeOf([type]$startupExType)',
    '$abi["limits"] = [System.Runtime.InteropServices.Marshal]::SizeOf([type]$limitsType)',
    '$abi["accounting"] = [System.Runtime.InteropServices.Marshal]::SizeOf([type]$accountingType)',
    '$abi["process"] = [System.Runtime.InteropServices.Marshal]::SizeOf([type]$processType)',
    '$abi["limitFlags"] = [System.Runtime.InteropServices.Marshal]::OffsetOf($basicType, "Flags").ToInt32()',
    '$abi["attributes"] = [System.Runtime.InteropServices.Marshal]::OffsetOf($startupExType, "Attributes").ToInt32()',
    '$abi["stdin"] = [System.Runtime.InteropServices.Marshal]::OffsetOf($startupType, "Stdin").ToInt32()',
    '$abi["activeProcesses"] = [System.Runtime.InteropServices.Marshal]::OffsetOf($accountingType, "ActiveProcesses").ToInt32()',
    '$abiStream = [System.IO.MemoryStream]::new()',
    '$serializer.WriteObject($abiStream, $abi)',
    '[System.IO.File]::WriteAllBytes(' + "'" + abiFile.replaceAll("'", "''") + "'" + ', $abiStream.ToArray())',
    '$abiStream.Dispose()',
  ].map((line) => "    " + line).join("\n");
  await writeFile(path.join(root, "scripts/owned-command-windows.ps1"), source.replace(prepared, probe + "\n" + prepared));
  const { runOwnedCommand: invoke } = await import(pathToFileURL(ownerPath).href);
  const result = invoke(process.execPath, ["-e", 'process.stdout.write("native ABI checked")'], { timeout: 1000, encoding: "utf8" });
  assert.ifError(result.error);
  assert.ifError(result.cleanupError);
  assert.equal(result.status, 0);
  assert.equal(result.stdout, "native ABI checked");
  assert.deepEqual(JSON.parse(await readFile(abiFile, "utf8")), {
    startupEx: 112, limits: 144, accounting: 48, process: 24,
    limitFlags: 16, attributes: 104, stdin: 80, activeProcesses: 40,
  });
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
  const phases = tracePhases(result);
  assert.ok(phases.includes("create-process-pending"));
  assert.equal(phases.includes("create-process-completed"), false);
  assert.equal(phases.includes("ready-received"), false);
  assert.equal(phases.includes("closed-received"), false);
  assert.ok(phases.includes("not-admitted-received"));
  assert.equal(result.cleanupError, undefined, "a definite failed spawn with released setup is safe to retry");
  t.diagnostic(`native error ${result.error.nativeCode} retains Node ${baseline.error.code}`);
});

for (const [phase, ownerLost, historicalOrder] of [
  ["preparation", false, false], ["preparation", true, false],
  ["parsing", false, false], ["parsing", true, false], ["parsing", true, true],
]) {
  test(`Windows blocked ${phase} ${historicalOrder ? "negative control survives owner loss" : ownerLost ? "observes owner loss" : "has a deadline"} before native admission`, {
    skip: process.platform !== "win32", timeout: 30_000,
  }, async (t) => {
    const root = await mkdtemp(path.join(os.tmpdir(), "crabpot bootstrap owner "));
    const helperReady = path.join(root, "helper-ready.json");
    const rescueFile = path.join(root, "helper-rescue");
    const escapeFile = path.join(root, "helper-escape");
    let worker;
    let helper;
    t.after(async () => {
      let closed = !worker;
      try {
        await writeFile(rescueFile, "stop");
        await worker?.terminate();
        if (helper) closed = await waitForExit(helper.pid, 22_000);
      } finally {
        if (closed) await rm(root, { recursive: true, force: true });
        else t.diagnostic("bootstrap fixture retained: helper closure unconfirmed");
      }
      if (helper) assert.equal(closed, true, "helper must close before fixture removal");
    });
    const ownerPath = await copyOwner(root);
    const commandMarker = path.join(root, "command-started");
    const original = (await readFile(new URL("../scripts/owned-command-windows.ps1", import.meta.url), "utf8"))
      .replaceAll("\r\n", "\n");
    const parsing = "    $inputStream = [System.IO.MemoryStream]::new($utf8.GetBytes($line))\n" +
      "    try { $request = $serializer.ReadObject($inputStream) } finally { $inputStream.Dispose() }\n";
    const watcher = "    $ownerLost = [System.Threading.CancellationTokenSource]::new()\n";
    assert.equal(original.split(parsing).length, 2);
    assert.equal(original.split(watcher).length, 2);
    const source = historicalOrder
      ? original.replace(parsing, "").replace(watcher, parsing + watcher)
      : original;
    const gate = phase === "parsing" ? parsing.trim()
      : 'Write-Phase "preparation-started"';
    assert.equal(source.split(gate).length, 2);
    const ps = (value) => `'${value.replaceAll("'", "''")}'`;
    // Block the actual helper without loading a cmdlet. Neither cooperative
    // rescue nor the independent fixture expiry may supply the asserted closure.
    const blocked = source.replace(gate, `
        ${phase === "preparation" ? gate : ""}
        $expiresAt = [DateTimeOffset]::UtcNow.ToUnixTimeMilliseconds() + 20000
        $fixtureClock = [System.Diagnostics.Stopwatch]::StartNew()
        $observed = '{"pid":' + $PID + ',"expiresAtMs":' + $expiresAt + '}'
        [System.IO.File]::WriteAllText(${ps(helperReady + ".pending")}, $observed)
        [System.IO.File]::Move(${ps(helperReady + ".pending")}, ${ps(helperReady)})
        while ($fixtureClock.ElapsedMilliseconds -lt 20000) {
            if ([System.IO.File]::Exists(${ps(rescueFile)})) {
                [System.IO.File]::WriteAllText(${ps(escapeFile)}, "rescued")
                exit 99
            }
            [System.Threading.Thread]::Sleep(20)
        }
        [System.IO.File]::WriteAllText(${ps(escapeFile)}, "expired")
        exit 98
    `);
    await writeFile(path.join(root, "scripts/owned-command-windows.ps1"), blocked);
    const resultFile = path.join(root, "result.json");
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
    const errors = [];
    worker.on("error", (error) => errors.push(error));
    helper = await readReceipt(helperReady, 7500, () => errors.map(String).join("\n"));
    assert.ok(Number.isSafeInteger(helper.pid) && helper.pid > 0);
    assert.equal(process.kill(helper.pid, 0), true, "actual helper must be alive at interruption");
    if (ownerLost) {
      await worker.terminate();
    } else {
      const result = await readReceipt(resultFile, 12_500, () => errors.map(String).join("\n"));
      assert.equal(result.error?.code, "EOWNERSTART");
      const phases = tracePhases(result);
      assert.ok(phases.includes(phase === "parsing" ? "parser-started" : "preparation-started"));
      assert.equal(phases.includes(phase === "parsing" ? "parser-completed" : "prepared-received"), false);
      assert.equal(phases.includes("create-process-pending"), false);
      assert.equal(result.cleanupError?.code, phase === "parsing" ? "EOWNERCLEANUP" : undefined,
        "only preparation before any issued request has known nonadmission");
    }
    const closed = await waitForExit(helper.pid, ownerLost ? 2000 : 100);
    assert.ok(Date.now() < helper.expiresAtMs, "closure assertion must precede independent fixture expiry");
    await assert.rejects(readFile(escapeFile), { code: "ENOENT" });
    const requireClosure = () => assert.equal(closed, true, "helper must exit before fixture rescue");
    if (historicalOrder) {
      assert.throws(requireClosure, { code: "ERR_ASSERTION", message: /helper must exit before fixture rescue/ });
      t.diagnostic("negative control: historical parser ordering left the actual helper alive after owner loss");
      await writeFile(rescueFile, "stop");
      assert.equal(await waitForExit(helper.pid, 2000), true, "negative-control helper must respond to rescue");
      assert.ok(Date.now() < helper.expiresAtMs, "rescue must precede independent fixture expiry");
      assert.equal(await readFile(escapeFile, "utf8"), "rescued");
    } else requireClosure();
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
    const requestMarker = path.join(root, "request-write-attempted");
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
        $live = '{"pid":' + $PID + ',"phase":"preconnection","expiresAtMs":' + $expiresAt + '}'
        [System.IO.File]::WriteAllText(${ps(helperReady + ".pending")}, $live)
        [System.IO.File]::Move(${ps(helperReady + ".pending")}, ${ps(helperReady)})
        while (-not [System.IO.File]::Exists(${ps(releaseFile)})) {
            if ([System.IO.File]::Exists(${ps(rescueFile)})) {
                $escape = '{"rescued":true}'
                [System.IO.File]::WriteAllText(${ps(escapeFile + ".pending")}, $escape)
                [System.IO.File]::Move(${ps(escapeFile + ".pending")}, ${ps(escapeFile)})
                exit 99
            }
            [System.Threading.Thread]::Sleep(20)
        }
        ${connection}
    `);
    await writeFile(path.join(root, "scripts/owned-command-windows.ps1"), blocked);
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
    const phases = tracePhases(result);
    assert.ok(phases.includes("helper-spawned"));
    assert.equal(phases.includes("pipe-connected"), phase === "late connection");
    assert.equal(phases.includes("request-write-attempted"), false);
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

test("Windows actual compiler lifecycle", {
  skip: process.platform !== "win32", timeout: 4 * 45_000, concurrency: false,
}, async (t) => {
  const preparationRoot = await mkdtemp(path.join(os.tmpdir(), "crabpot observer assembly "));
  const assembly = path.join(preparationRoot, "observer.dll");
  const powershell = path.join(process.env.SystemRoot, "System32/WindowsPowerShell/v1.0/powershell.exe");
  const preparations = [];
  const observers = [];
  t.after(async () => {
    // Parent after hooks can precede timed-out children's rescue. Keep the DLL
    // until every native owner and its Worker have positively closed.
    for (const owner of preparations) {
      if (owner.exitCode === undefined) await owner.worker.terminate();
    }
    if ([...preparations, ...observers].every((owner) => owner.nativeClosed)) {
      await rm(preparationRoot, { recursive: true, force: true });
    } else {
      assert.fail("observer assembly retained: native closure unconfirmed");
    }
  });
  const prepare = async (root, source) => {
    t.signal.throwIfAborted();
    const owner = startCompilerObserverCommand(powershell, [
      "-NoLogo", "-NoProfile", "-NonInteractive", "-ExecutionPolicy", "Bypass",
      "-File", fileURLToPath(new URL("./fixtures/owned-command-compiler-observer-build.ps1", import.meta.url)), root, source,
    ]);
    preparations.push(owner);
    try {
      await waitForCompilerObserver(owner, t.signal);
    } finally {
      t.diagnostic(await compilerObserverDiagnostic(root, owner.result, owner.exitCode, owner.errors));
    }
    owner.nativeClosed = compilerObserverCommandClosed(owner);
    assert.equal(owner.nativeClosed, true, "assembly preparation must return confirmed native closure");
    assert.equal(owner.result.status, 0, owner.result.stderr);
    assert.deepEqual(JSON.parse(await readFile(path.join(root, "observer-compile-result"), "utf8")), { status: "compiled" });
    const pending = path.join(root, "observer.pending.dll");
    const info = await stat(pending);
    assert.ok(info.isFile() && info.size > 0, "compilation must produce a nonempty assembly");
    await rename(pending, path.join(root, "observer.dll"));
  };
  await prepare(preparationRoot, fileURLToPath(new URL("./fixtures/owned-command-compiler-observer.cs", import.meta.url)));
  for (const [ownerLost, guarded] of [[false, true], [true, true], [false, false], [true, false]]) {
    t.signal.throwIfAborted();
    await t.test(`Windows actual compiler ${guarded ? "exits" : "negative control survives"} on ${ownerLost ? "owner loss" : "command timeout"}`, {
      timeout: 45_000, signal: t.signal,
    }, async (t) => {
      const root = await mkdtemp(path.join(os.tmpdir(), "crabpot compiler owner "));
      const ownerPath = await copyOwner(root);
      const pidFile = path.join(root, "target-pid");
      const commandMarker = path.join(root, "command-started");
      const resultFile = path.join(root, "result.json");
      const original = await readFile(new URL("../scripts/owned-command-windows.ps1", import.meta.url), "utf8");
      const admission = '        Check-Native ($native::UpdateProcThreadAttribute($attributes, 0, [IntPtr]::new(0x2000d), $jobList, [IntPtr]::new(8), [IntPtr]::Zero, [IntPtr]::Zero)) "JOB_LIST"';
      assert.equal(original.split(admission).length, 2);
      // The negative control removes only atomic Job admission. The real target,
      // real CodeDOM compiler, owner-loss watcher and retained-handle rescue remain.
      await writeFile(path.join(root, "scripts/owned-command-windows.ps1"), guarded ? original : original.replace(admission, ""));
      const sourceFile = path.join(root, "target-compilation.cs");
      const targetScript = path.join(root, "compile-target.ps1");
      const ps = (value) => "'" + value.replaceAll("'", "''") + "'";
      await writeFile(sourceFile, Array.from({ length: 10_000 }, (_, index) =>
        "internal class CompilerObservation" + index + " { }").join("\n"));
      await writeFile(targetScript,
        "[System.IO.File]::WriteAllText(" + ps(pidFile) + ", [string]$PID)\n" +
        "Add-Type -Path " + ps(sourceFile) + "\n" +
        "[System.IO.File]::WriteAllText(" + ps(commandMarker) + ", 'compiled')\n");
      t.signal.throwIfAborted();
      const observerAdmissionStartedAt = performance.now();
      const observer = startCompilerObserverCommand(powershell, [
        "-NoLogo", "-NoProfile", "-NonInteractive", "-ExecutionPolicy", "Bypass",
        "-File", fileURLToPath(new URL("./fixtures/owned-command-compiler-observer.ps1", import.meta.url)), root, assembly,
      ]);
      observers.push(observer);
      const observerError = () => observer.result?.stderr ?? "";
      const sentinel = spawn(process.execPath, ["-e", "setInterval(() => {}, 1000)"], { stdio: "ignore" });
      const sentinelClosed = new Promise((resolve) => sentinel.once("close", resolve));
      const errors = observer.errors;
      sentinel.on("error", (error) => errors.push(error));
      let worker;
      let compiler;
      t.after(async () => {
        // Capture the failed observation before rescue changes process state.
        t.diagnostic(await compilerObserverDiagnostic(preparationRoot, observer.result, observer.exitCode, errors));
        let rescued = false;
        try {
          await writeFile(path.join(root, "observer-rescue"), "stop");
          await worker?.terminate();
          const completed = await Promise.race([observer.closed.then(() => true), delay(6000).then(() => false)]);
          if (compiler) {
            assert.equal(completed, true, "owned compiler rescue must complete before observer termination");
            assert.equal(observer.result?.status, 0, observerError());
            assert.ifError(observer.result.error);
            assert.equal(await waitForExit(compiler.pid, 1000), true, "fixture rescue must leave no compiler process");
            assert.equal(await waitForExit(compiler.targetPid, 1000), true, "fixture rescue must leave no target process");
          }
          rescued = completed && observer.result?.status === 0 && compilerObserverCommandClosed(observer);
        } finally {
          sentinel.kill();
          await sentinelClosed;
          if (rescued) {
            observer.nativeClosed = true;
            await rm(root, { recursive: true, force: true });
          } else {
            // Do not interrupt a still-running retained-handle rescue on failure.
            t.diagnostic("compiler fixture retained: native rescue closure unconfirmed");
          }
        }
      });
      // Readiness loads the prepared assembly without compiling it.
      const observerStarted = await readReceipt(path.join(root, "observer-started"), 10_000, observerError);
      assert.ok(observerStarted.pid > 0, "observer command must be admitted before loading its prepared assembly");
      t.diagnostic(`compiler observer admitted in ${Math.round(performance.now() - observerAdmissionStartedAt)}ms`);
      const observerPreparationStartedAt = performance.now();
      await readReceipt(path.join(root, "observer-ready"), 10_000, observerError);
      t.diagnostic(`compiler observer preparation completed in ${Math.round(performance.now() - observerPreparationStartedAt)}ms`);
      t.signal.throwIfAborted();
      worker = new Worker(`
        const { workerData } = require("node:worker_threads");
        import(workerData.owner).then(({ runOwnedCommand }) => {
          // Compilation previously ran inside the unchanged 10s startup window.
          // Give the controlled target that same window; cleanup assertions stay bounded.
          const result = runOwnedCommand(workerData.command, workerData.args, { timeout: 10000 });
          const fs = require("node:fs");
          fs.writeFileSync(workerData.result + ".pending", JSON.stringify(result));
          fs.renameSync(workerData.result + ".pending", workerData.result);
        });
      `, { eval: true, workerData: {
        owner: pathToFileURL(ownerPath).href, result: resultFile,
        command: powershell, args: ["-NoLogo", "-NoProfile", "-NonInteractive", "-ExecutionPolicy", "Bypass", "-File", targetScript],
      } });
      worker.on("error", (error) => errors.push(error));
      compiler = await readReceipt(path.join(root, "compiler-suspended.json"), 8000, observerError);
      assert.equal(compiler.name, "csc.exe");
      assert.equal(compiler.suspended, true);
      assert.ok(compiler.pid > 0 && compiler.targetPid > 0);
      assert.equal(process.kill(compiler.pid, 0), true, "actual compiler must be alive at interruption");
      if (ownerLost) {
        await worker.terminate();
      } else {
        const result = await readReceipt(resultFile, 14_000, observerError);
        assert.equal(result.error?.code, "ETIMEDOUT");
        const phases = tracePhases(result);
        assert.ok(phases.includes("prepared-received"));
        assert.ok(phases.includes("create-process-completed"));
        assert.ok(phases.includes("ready-received"));
        if (guarded) {
          assert.ok(phases.includes("closed-received"));
          assert.equal(result.cleanupError, undefined);
        }
      }
      if (guarded) assert.equal(await waitForExit(compiler.targetPid, 1000), true);
      else assert.equal(process.kill(compiler.targetPid, 0), true, "uncontained target survives with its suspended compiler");
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
        t.diagnostic("negative control: uncontained target and real csc.exe survived; extinction assertion failed before rescue");
      }
      assert.equal(sentinel.exitCode, null);
      assert.equal(sentinel.signalCode, null);
      assert.equal(process.kill(sentinel.pid, 0), true);
      await assert.rejects(readFile(commandMarker), { code: "ENOENT" });
      assert.deepEqual(errors, []);
    });
  }

  t.signal.throwIfAborted();
  await t.test("invalid observer source cannot publish an assembly", { signal: t.signal }, async () => {
    const root = path.join(preparationRoot, "invalid-source");
    await mkdir(root);
    const source = path.join(root, "invalid.cs");
    await writeFile(source, "this is not valid C#;");
    await assert.rejects(prepare(root, source), { code: "ERR_ASSERTION" });
    assert.equal(preparations.at(-1).nativeClosed, true, "failed compilation must still close its native owner");
    const receipt = JSON.parse(await readFile(path.join(root, "observer-compile-result"), "utf8"));
    assert.equal(receipt.status, "failed");
    assert.ok(receipt.message.length > 0 && receipt.message.length <= 1024);
    await assert.rejects(readFile(path.join(root, "observer.dll")), { code: "ENOENT" });
    await assert.rejects(readFile(path.join(root, "observer-ready")), { code: "ENOENT" });
    await assert.rejects(readFile(path.join(root, "target-pid")), { code: "ENOENT" });
  });
  t.signal.throwIfAborted();
  await t.test("missing observer assembly fails before observation or target admission", { signal: t.signal }, async () => {
    const root = path.join(preparationRoot, "missing-assembly");
    await mkdir(root);
    t.signal.throwIfAborted();
    const owner = startCompilerObserverCommand(powershell, [
      "-NoLogo", "-NoProfile", "-NonInteractive", "-ExecutionPolicy", "Bypass",
      "-File", fileURLToPath(new URL("./fixtures/owned-command-compiler-observer.ps1", import.meta.url)), root, path.join(root, "missing.dll"),
    ]);
    preparations.push(owner);
    await waitForCompilerObserver(owner, t.signal);
    owner.nativeClosed = compilerObserverCommandClosed(owner);
    assert.equal(owner.nativeClosed, true);
    assert.notEqual(owner.result.status, 0);
    assert.match(owner.result.stderr, /LoadFrom/);
    const started = JSON.parse(await readFile(path.join(root, "observer-started"), "utf8"));
    assert.ok(started.pid > 0);
    await assert.rejects(readFile(path.join(root, "observer-ready")), { code: "ENOENT" });
    await assert.rejects(readFile(path.join(root, "target-pid")), { code: "ENOENT" });
  });
});


for (const cancellation of ["stop", "shared stop", "Worker loss"]) {
  test("Windows PREPARED " + cancellation + " never issues the first request", {
    skip: process.platform !== "win32", timeout: 30_000,
  }, async (t) => {
    const root = await mkdtemp(path.join(os.tmpdir(), "crabpot prepared owner "));
    const ownerPath = await copyOwner(root);
    const helperPidFile = path.join(root, "helper-pid");
    const requestMarker = path.join(root, "request-issued");
    const commandMarker = path.join(root, "command-started");
    const ps = (value) => "'" + value.replaceAll("'", "''") + "'";
    const helper = await readFile(new URL("../scripts/owned-command-windows.ps1", import.meta.url), "utf8");
    const prepared = '    $writer.WriteLine("PREPARED")';
    assert.equal(helper.split(prepared).length, 2);
    await writeFile(path.join(root, "scripts/owned-command-windows.ps1"), helper.replace(prepared,
      "    [System.IO.File]::WriteAllText(" + ps(helperPidFile) + ", [string]$PID)\n" + prepared));
    const source = await readFile(ownerPath, "utf8");
    const receipt = '          phase("prepared-received");';
    const send = '      socket.write(request);';
    assert.equal(source.split(receipt).length, 2);
    assert.equal(source.split(send).length, 2);
    const cancel = cancellation === "stop" ? "stop();" : cancellation === "shared stop"
      ? "Atomics.store(shared, 1, 1);" : "process.exit(71);";
    await writeFile(ownerPath, 'import { writeFileSync } from "node:fs";\n' +
      source.replace(receipt, receipt + "\n          " + cancel).replace(send,
        "      writeFileSync(" + JSON.stringify(requestMarker) + ', "issued");\n' + send));
    const { runOwnedCommand: invoke } = await import(pathToFileURL(ownerPath).href);
    let helperPid;
    t.after(async () => {
      if (helperPid) assert.equal(await waitForExit(helperPid, 2000), true, "EOF/STOP must close the exact helper");
      await rm(root, { recursive: true, force: true });
    });
    const result = invoke(process.execPath, ["-e",
      'require("node:fs").writeFileSync(' + JSON.stringify(commandMarker) + ', "started")'], { timeout: 1000 });
    helperPid = Number(await readFile(helperPidFile, "utf8"));
    assert.ok(helperPid > 0);
    assert.ok(result.error);
    assert.ok(tracePhases(result).includes("prepared-received"));
    assert.equal(tracePhases(result).includes("request-write-attempted"), false);
    assert.equal(result.cleanupError?.code, cancellation === "Worker loss" ? "EOWNERCLEANUP" : undefined);
    assert.equal(await waitForExit(helperPid, 100), true, "helper must close without fixture rescue");
    await assert.rejects(readFile(requestMarker), { code: "ENOENT" });
    await assert.rejects(readFile(commandMarker), { code: "ENOENT" });
  });
}

for (const corruption of ["duplicate prepared", "early closed", "early not admitted", "duplicate not admitted", "trailing partial"]) {
  test("Windows rejects " + corruption + " instead of accepting a cleanup receipt", {
    skip: process.platform !== "win32", timeout: 20_000,
  }, async (t) => {
    const root = await temporaryRoot(t);
    const ownerPath = await copyOwner(root);
    let helper = await readFile(new URL("../scripts/owned-command-windows.ps1", import.meta.url), "utf8");
    const prepared = '    $writer.WriteLine("PREPARED")';
    const parser = '    try { $request = $serializer.ReadObject($inputStream) } finally { $inputStream.Dispose() }';
    const terminal = '                $writer.WriteLine("NOT_ADMITTED")';
    for (const seam of [prepared, parser, terminal]) assert.equal(helper.split(seam).length, 2);
    if (corruption === "duplicate prepared") helper = helper.replace(prepared,
      prepared + '\n    $writer.WriteLine("PREPARED")\n    exit 1');
    else if (corruption === "early closed") helper = helper.replace(prepared, '    $writer.WriteLine("CLOSED")\n    exit 1');
    else if (corruption === "early not admitted") helper = helper.replace(parser, '    $writer.WriteLine("NOT_ADMITTED")\n    exit 1');
    else helper = helper.replace(terminal, terminal + (corruption === "duplicate not admitted"
      ? '\n                $writer.WriteLine("NOT_ADMITTED")' : '\n                $writer.Write("partial")'));
    await writeFile(path.join(root, "scripts/owned-command-windows.ps1"), helper);
    const command = path.join(root, "invalid executable.exe");
    await writeFile(command, "not a Windows executable\n");
    const { runOwnedCommand: invoke } = await import(pathToFileURL(ownerPath).href);
    const result = invoke(command, [], { timeout: 1000 });
    assert.ok(result.error);
    assert.equal(result.status, null);
    if (corruption === "early closed") {
      assert.equal(result.error.code, "EOWNERPROTOCOL");
      assert.equal(result.cleanupError, undefined, "no request plus helper closure remains known nonadmission");
    } else {
      assert.equal(result.cleanupError?.code, "EOWNERCLEANUP");
      assert.equal(result.cleanupError.cause?.code, "EOWNERPROTOCOL");
      if (["duplicate not admitted", "trailing partial"].includes(corruption)) {
        assert.ok([193, 216].includes(result.error.nativeCode), "keep the original native spawn error");
      } else assert.equal(result.error.code, "EOWNERPROTOCOL");
    }
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

function startCompilerObserverCommand(command, args) {
  const owner = { errors: [], nativeClosed: false };
  owner.worker = new Worker(`
    const { workerData, parentPort } = require("node:worker_threads");
    const errorDetail = (${compilerObserverError.toString()});
    import(workerData.owner).then(({ runOwnedCommand }) => {
      const result = runOwnedCommand(workerData.command, workerData.args, {
        timeout: 35000, maxBuffer: 8192, encoding: "utf8",
      });
      // Error structured cloning drops the owner's custom code and startup trace.
      result.error = errorDetail(result.error);
      result.cleanupError = errorDetail(result.cleanupError);
      parentPort.postMessage(result);
    });
  `, { eval: true, workerData: {
    owner: new URL("../scripts/owned-command.mjs", import.meta.url).href, command, args,
  } });
  owner.worker.once("message", (result) => { owner.result = result; });
  owner.worker.on("error", (error) => owner.errors.push(error));
  owner.closed = new Promise((resolve) => {
    owner.worker.once("exit", (code) => { owner.exitCode = code; resolve(); });
  });
  return owner;
}

function compilerObserverCommandClosed(owner) {
  return owner.exitCode === 0 && owner.errors.length === 0 &&
    Number.isInteger(owner.result?.status) && !owner.result.error && !owner.result.cleanupError;
}

async function waitForCompilerObserver(owner, signal) {
  signal.throwIfAborted();
  let abort;
  const aborted = new Promise((_, reject) => {
    abort = () => reject(signal.reason);
    signal.addEventListener("abort", abort, { once: true });
  });
  try {
    await Promise.race([owner.closed, aborted]);
    signal.throwIfAborted();
  } finally {
    signal.removeEventListener("abort", abort);
  }
}

function compilerObserverError(error) {
  if (!error) return undefined;
  const detail = {
    code: error.code === undefined ? undefined : String(error.code).slice(0, 128),
    message: String(error.message ?? error).slice(0, 1024),
  };
  if (Array.isArray(error.startupTrace)) {
    detail.startupTrace = error.startupTrace.slice(0, 16).map(({ phase, atMs, observedAtMs }) => ({
      phase: String(phase).slice(0, 64),
      atMs: Number.isSafeInteger(atMs) && atMs >= 0 ? atMs : "invalid",
      observedAtMs: Number.isSafeInteger(observedAtMs) && observedAtMs >= 0 ? observedAtMs : "invalid",
    }));
  }
  return detail;
}

async function compilerObserverDiagnostic(root, result, exitCode, errors) {
  const compilation = {};
  for (const stage of ["observer-compile-started", "observer-compile-completed"]) {
    try {
      const { atMs } = JSON.parse(await readFile(path.join(root, stage), "utf8"));
      compilation[stage] = Number.isSafeInteger(atMs) && atMs >= 0 ? atMs : "invalid";
    } catch (error) {
      compilation[stage] = error.code === "ENOENT" ? "absent" : compilerObserverError(error);
    }
  }
  return JSON.stringify({
    compilation, workerExitCode: exitCode ?? "pending",
    result: result ? {
      status: result.status, signal: result.signal,
      error: compilerObserverError(result.error), cleanupError: compilerObserverError(result.cleanupError),
      stdout: String(result.stdout ?? "").slice(0, 1024),
      stderr: String(result.stderr ?? "").slice(0, 1024),
    } : "pending",
    errors: errors.slice(0, 4).map(compilerObserverError),
  });
}

test("compiler observer diagnostics retain bounded setup and terminal failure evidence", { timeout: 5000 }, async (t) => {
  const root = await temporaryRoot(t);
  await writeFile(path.join(root, "observer-compile-started"), '{"atMs":123}');
  const failure = Object.assign(new Error("x".repeat(2048)), { code: "EOBSERVATION" });
  // Construct the Error inside the Worker so this covers the actual transport boundary.
  const worker = new Worker(`
    const { parentPort } = require("node:worker_threads");
    const errorDetail = (${compilerObserverError.toString()});
    const error = Object.assign(new Error("x".repeat(2048)), {
      code: "EOWNERSTART",
      startupTrace: Array.from({ length: 20 }, (_, index) => ({
        phase: "p".repeat(128), atMs: index, observedAtMs: -1,
      })),
    });
    parentPort.postMessage({
      status: 1, signal: null, error: errorDetail(error),
      cleanupError: errorDetail(Object.assign(new Error("cleanup unknown"), { code: "EOWNERCLEANUP" })),
      stdout: "o".repeat(2048), stderr: "e".repeat(2048),
    });
  `, { eval: true });
  t.after(() => worker.terminate());
  const result = await new Promise((resolve, reject) => {
    worker.once("message", resolve);
    worker.once("error", reject);
    worker.once("exit", (code) => reject(new Error(`diagnostic Worker exited without a result (${code})`)));
  });
  const observed = JSON.parse(await compilerObserverDiagnostic(root, result, 1, Array(6).fill(failure)));
  assert.deepEqual(observed.compilation, {
    "observer-compile-started": 123, "observer-compile-completed": "absent",
  });
  assert.equal(observed.workerExitCode, 1);
  assert.equal(observed.result.status, 1);
  assert.equal(observed.result.signal, null);
  assert.deepEqual(observed.result.error, {
    code: "EOWNERSTART", message: "x".repeat(1024),
    startupTrace: Array.from({ length: 16 }, (_, index) => ({
      phase: "p".repeat(64), atMs: index, observedAtMs: "invalid",
    })),
  });
  assert.deepEqual(observed.result.cleanupError, { code: "EOWNERCLEANUP", message: "cleanup unknown" });
  assert.equal(observed.result.stdout, "o".repeat(1024));
  assert.equal(observed.result.stderr, "e".repeat(1024));
  assert.equal(observed.errors.length, 4);
  assert.deepEqual(observed.errors[0], { code: "EOBSERVATION", message: "x".repeat(1024) });
  assert.equal(compilerObserverError({ code: "c".repeat(256) }).code.length, 128);
  await writeFile(path.join(root, "observer-compile-completed"), '{"atMs":456}');
  const pending = JSON.parse(await compilerObserverDiagnostic(root, undefined, undefined, []));
  assert.equal(pending.compilation["observer-compile-completed"], 456);
  assert.equal(pending.workerExitCode, "pending");
  assert.equal(pending.result, "pending");
  await writeFile(path.join(root, "observer-compile-completed"), '{"atMs":"invalid timestamp"}');
  const invalid = JSON.parse(await compilerObserverDiagnostic(root, undefined, undefined, []));
  assert.equal(invalid.compilation["observer-compile-completed"], "invalid");
});

function tracePhases(result) {
  const trace = result.error?.startupTrace;
  assert.ok(Array.isArray(trace) && trace.length > 0 && trace.length <= 16);
  for (const entry of trace) {
    assert.deepEqual(Object.keys(entry), ["phase", "atMs", "observedAtMs"]);
    assert.match(entry.phase, /^[a-z-]+$/);
    assert.ok(Number.isSafeInteger(entry.atMs) && entry.atMs >= 0);
    assert.ok(Number.isSafeInteger(entry.observedAtMs) && entry.observedAtMs >= 0);
  }
  const phases = trace.map(({ phase }) => phase);
  assert.equal(new Set(phases).size, phases.length);
  return phases;
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
