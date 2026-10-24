// Investigation-only, credential-free hosted Windows controls for #305.
import assert from "node:assert/strict";
import { spawn, spawnSync } from "node:child_process";
import { appendFileSync, copyFileSync, mkdirSync, readFileSync, unlinkSync, writeFileSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { setTimeout as delay } from "node:timers/promises";

const prepareOnly = process.argv.includes("--prepare-only");
const single = process.argv.includes("--single");
if (!prepareOnly) assert.equal(process.platform, "win32");
const root = path.resolve(".crabpot/windows-startup");
mkdirSync(root, { recursive: true });
const log = (record) => {
  const line = JSON.stringify({ atMs: Date.now(), ...record });
  appendFileSync(path.join(root, "launches.jsonl"), line + "\n");
  console.log(line);
};
// Only these nonsecret runtime values are selected; never dump the environment.
if (!single) log({ kind: "environment", node: process.version, execPath: process.execPath,
  path: process.env.PATH, comspec: process.env.ComSpec, systemRoot: process.env.SystemRoot,
  image: process.env.ImageVersion, runnerOs: process.env.RUNNER_OS });
// Git's Windows checkout may use CRLF even though the committed blob uses LF.
const source = readFileSync("scripts/owned-command.mjs", "utf8").replace(/\r\n/g, "\n");
const seam = "  return result;\n}\n\nfunction fileURLOrPath";
assert.equal(source.split(seam).length, 2);
let observed = source.replace(seam,
  "  result.diagnostic = { startupTrace, windowsHelper };\n" + seam);
const spawnSeam = '      phase("helper-spawned");';
assert.equal(observed.split(spawnSeam).length, 2);
// Keep deadlines and protocol intact. Observe the actual worker's native pipes.
observed = observed.replace(spawnSeam, spawnSeam + `
      const snapshot = () => appendFileSync(${JSON.stringify(path.join(root, "pipes.jsonl"))}, JSON.stringify({
        atMs: Date.now(), pid: helper.pid, exitCode: helper.exitCode, killed: helper.killed,
        stdout: helper.stdout && { bytes: helper.stdout.bytesRead, buffered: helper.stdout.readableLength, destroyed: helper.stdout.destroyed },
        stderr: helper.stderr && { bytes: helper.stderr.bytesRead, buffered: helper.stderr.readableLength, destroyed: helper.stderr.destroyed },
      }) + "\\n");
      snapshot();
      const pipeTimer = setInterval(snapshot, 250);
      helper.once("close", () => { clearInterval(pipeTimer); snapshot(); });`);
observed = observed.replace('import { existsSync,', 'import { appendFileSync, existsSync,');
writeFileSync(path.join(root, "owned-command.mjs"), observed);
for (const file of ["owned-command-windows.ps1", "portable-command.mjs"]) {
  copyFileSync(path.join("scripts", file), path.join(root, file));
}
if (prepareOnly) {
  const checked = spawnSync(process.execPath, ["--check", path.join(root, "owned-command.mjs")], { stdio: "inherit" });
  process.exit(checked.status ?? 1);
}
const { runOwnedCommand } = await import(pathToFileURL(path.join(root, "owned-command.mjs")));
if (single) {
  const startedAtMs = Date.now();
  const result = runOwnedCommand(process.execPath, ["-e", "process.stdout.write('ok')"], {
    timeout: 5000, encoding: "utf8",
  });
  log({ kind: "fresh-parent", parentPid: process.pid, elapsedMs: Date.now() - startedAtMs,
    status: result.status, ...result.diagnostic,
    error: result.error && { message: result.error.message, code: result.error.code }, cleanupError: result.cleanupError });
  process.exit(result.error || result.cleanupError || result.status !== 0 ? 1 : 0);
}
const powershell = path.join(process.env.SystemRoot, "System32/WindowsPowerShell/v1.0/powershell.exe");
for (const marker of ["stop", "monitor-ready"]) {
  try { unlinkSync(path.join(root, marker)); } catch (error) {
    if (error.code !== "ENOENT") throw error;
  }
}
const monitor = spawn("python", [path.resolve("scripts/diagnose-windows-processes.py"), root],
  { stdio: ["ignore", "ignore", "inherit"], windowsHide: true });
let monitorClosed;
const monitorDone = new Promise((resolve, reject) => {
  monitor.once("error", reject);
  monitor.once("close", (code, signal) => { monitorClosed = { code, signal }; resolve(); });
});
let failed = false;
try {
  for (let tries = 0; tries < 200 && !readFileExists(path.join(root, "monitor-ready")); tries += 1) {
    if (monitorClosed) throw new Error("native process monitor exited before readiness");
    await delay(25);
  }
  assert.ok(readFileExists(path.join(root, "monitor-ready")), "native monitor did not become ready");
  for (let index = 0; index < 512; index += 1) {
    const startedAtMs = Date.now();
    const result = runOwnedCommand(process.execPath, ["-e", "process.stdout.write('ok')"], {
      timeout: 5000, encoding: "utf8", ...(index % 8 === 7 ? { stdio: "inherit" } : {}),
    });
    const error = result.error && { message: result.error.message, code: result.error.code,
      startupTrace: result.error.startupTrace, windowsHelper: result.error.windowsHelper };
    log({ kind: "owned", index, elapsedMs: Date.now() - startedAtMs, status: result.status,
      error, cleanupError: result.cleanupError, ...result.diagnostic });
    if (error || result.cleanupError || result.status !== 0) { failed = true; break; }
    // A raw engine baseline distinguishes PowerShell entry from Job setup.
    if (index % 16 === 0) {
      const start = Date.now();
      const baseline = spawnSync(powershell, ["-NoLogo", "-NoProfile", "-NonInteractive", "-Command",
        '[Console]::Out.WriteLine("entered"); [Console]::Error.WriteLine("entered")'],
      { timeout: 10000, encoding: "utf8", windowsHide: true, maxBuffer: 4096 });
      log({ kind: "raw", elapsedMs: Date.now() - start, status: baseline.status,
        stdout: baseline.stdout, stderr: baseline.stderr, code: baseline.error?.code });
      if (baseline.error || baseline.status !== 0) { failed = true; break; }
    }
    const fresh = spawnSync(process.execPath, ["scripts/diagnose-windows-startup.mjs", "--single"], {
      timeout: 20000, encoding: "utf8", windowsHide: true, maxBuffer: 1024 * 1024,
    });
    if (fresh.status !== 0 || fresh.error) {
      log({ kind: "fresh-parent-failed", index, status: fresh.status,
        code: fresh.error?.code, stdout: fresh.stdout, stderr: fresh.stderr });
      failed = true;
      break;
    }
  }
} finally {
  writeFileSync(path.join(root, "stop"), "stop");
  const expiry = setTimeout(() => monitor.kill(), 10000);
  await monitorDone;
  clearTimeout(expiry);
  log({ kind: "monitor-closed", ...monitorClosed });
  // Capture Defender status after the measured launches, without prewarming it.
  const defender = spawnSync(powershell, ["-NoLogo", "-NoProfile", "-NonInteractive", "-ExecutionPolicy", "Bypass",
    "-File", path.resolve("scripts/diagnose-windows-processes.ps1"), root],
  { timeout: 15000, encoding: "utf8", windowsHide: true, maxBuffer: 8192 });
  log({ kind: "defender-snapshot", status: defender.status, code: defender.error?.code });
}
if (failed) process.exitCode = 1;

function readFileExists(file) {
  try { readFileSync(file); return true; } catch (error) {
    if (error.code === "ENOENT") return false;
    throw error;
  }
}
