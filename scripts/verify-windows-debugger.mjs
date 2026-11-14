// Verify stack-only command execution after the measured cold workload.
import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

assert.equal(process.platform, "win32");
const root = path.resolve(".crabpot/windows-cold-import");
const commands = path.join(root, "verify-stack-commands.txt");
const log = path.join(root, "verify-stack.txt");
await writeFile(commands, ".echo CRABPOT_STACK_BEGIN\n~*k\n.echo CRABPOT_STACK_END\nqd\n");
const helper = spawn(path.join(process.env.SystemRoot, "System32/WindowsPowerShell/v1.0/powershell.exe"),
  ["-NoLogo", "-NoProfile", "-NonInteractive", "-Command", '[Console]::Out.WriteLine("ready"); Start-Sleep -Seconds 30'],
  { stdio: ["ignore", "pipe", "inherit"], windowsHide: true });
const closed = (child) => new Promise((resolve) => {
  child.once("error", (error) => resolve({ error: error.code }));
  child.once("close", (code, signal) => resolve({ code, signal }));
});
const helperDone = closed(helper);
let debuggerProcess;
let debuggerDone;
let debuggerTimer;
const helperTimer = setTimeout(() => helper.kill(), 45_000);
try {
  await Promise.race([
    new Promise((resolve) => helper.stdout.once("data", resolve)),
    helperDone.then(() => { throw new Error("verification helper exited before readiness"); }),
  ]);
  debuggerProcess = spawn(path.resolve(process.argv[2]),
    ["-pvr", "-p", String(helper.pid), "-y", root, "-logo", log, "-cf", commands],
    { stdio: "ignore", windowsHide: true });
  debuggerDone = closed(debuggerProcess);
  debuggerTimer = setTimeout(() => debuggerProcess.kill(), 15_000);
  const outcome = await debuggerDone;
  const output = await readFile(log, "utf8");
  assert.equal(outcome.code, 0, JSON.stringify(outcome));
  assert.ok(output.includes("CRABPOT_STACK_BEGIN") && output.includes("CRABPOT_STACK_END"));
  assert.match(output, /Child-SP\s+RetAddr/);
  assert.equal(helper.exitCode, null, "noninvasive debugger terminated the target");
  console.log("stack-only debugger command file verified; target remained alive");
} finally {
  clearTimeout(helperTimer);
  clearTimeout(debuggerTimer);
  if (debuggerProcess && debuggerProcess.exitCode === null) debuggerProcess.kill();
  if (debuggerDone) await debuggerDone;
  helper.kill();
  await helperDone;
}
