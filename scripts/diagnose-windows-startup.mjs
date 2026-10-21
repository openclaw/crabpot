// Investigation-only, credential-free hosted Windows controls for #305.
import assert from "node:assert/strict";
import { spawn, spawnSync } from "node:child_process";
import { appendFileSync, copyFileSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

assert.equal(process.platform, "win32");
const root = path.resolve(".crabpot/windows-startup");
mkdirSync(root, { recursive: true });
const log = (record) => {
  const line = JSON.stringify({ atMs: Date.now(), ...record });
  appendFileSync(path.join(root, "launches.jsonl"), line + "\n");
  console.log(line);
};
// Only these nonsecret runtime values are selected; never dump the environment.
log({ kind: "environment", node: process.version, execPath: process.execPath,
  path: process.env.PATH, comspec: process.env.ComSpec, systemRoot: process.env.SystemRoot,
  image: process.env.ImageVersion, runnerOs: process.env.RUNNER_OS });
const powershell = path.join(process.env.SystemRoot, "System32/WindowsPowerShell/v1.0/powershell.exe");
const monitor = spawn(powershell, ["-NoLogo", "-NoProfile", "-NonInteractive", "-ExecutionPolicy", "Bypass",
  "-File", path.resolve("scripts/diagnose-windows-processes.ps1"), root], { stdio: "ignore", windowsHide: true });
let monitorClosed;
const monitorDone = new Promise((resolve, reject) => {
  monitor.once("error", reject);
  monitor.once("close", (code, signal) => { monitorClosed = { code, signal }; resolve(); });
});
const source = readFileSync("scripts/owned-command.mjs", "utf8");
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
const { runOwnedCommand } = await import(pathToFileURL(path.join(root, "owned-command.mjs")));
let failed = false;
try {
  for (let index = 0; index < 256; index += 1) {
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
  }
} finally {
  writeFileSync(path.join(root, "stop"), "stop");
  const expiry = setTimeout(() => monitor.kill(), 10000);
  await monitorDone;
  clearTimeout(expiry);
  log({ kind: "monitor-closed", ...monitorClosed });
}
if (failed) process.exitCode = 1;
