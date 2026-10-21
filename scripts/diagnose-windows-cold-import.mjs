// Reproduce the actual failed import using its original static-step launcher.
import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { readFile, writeFile, mkdir, access } from "node:fs/promises";
import path from "node:path";
import os from "node:os";
import { setTimeout as delay } from "node:timers/promises";
import { fileURLToPath, pathToFileURL } from "node:url";

assert.equal(process.platform, "win32");
const subject = path.resolve(process.argv[2]);
const profiler = process.argv[4] === "profile-prefix";
const root = path.resolve(".crabpot/windows-cold-import");
await mkdir(root, { recursive: true });
await writeFile(path.join(root, "environment.json"), JSON.stringify({
  node: process.version, image: process.env.ImageVersion,
  cpus: os.availableParallelism(), totalMemory: os.totalmem(), freeMemory: os.freemem(),
}));
const ownerPath = path.join(subject, "scripts/owned-command.mjs");
const original = await readFile(ownerPath, "utf8");
let owner = original.replace(/\r\n/g, "\n");
const end = "  return result;\n}\n\nfunction fileURLOrPath";
assert.equal(owner.split(end).length, 2);
owner = owner.replace(end, `  appendFileSync(${JSON.stringify(path.join(root, "commands.jsonl"))}, JSON.stringify({
    atMs: Date.now(), pid: process.pid, startupTrace,
    code: result.error?.code, cleanupCode: result.cleanupError?.code,
    windowsHelper: typeof windowsHelper === "undefined" ? undefined : windowsHelper,
  }) + "\\n");\n` + end);
const spawned = '      phase("helper-spawned");';
assert.equal(owner.split(spawned).length, 2);
owner = owner.replace(spawned, spawned + `
      let stdoutBytes = helper.stdout ? 0 : null;
      let stderrBytes = helper.stderr ? 0 : null;
      helper.stdout?.on("data", (chunk) => { stdoutBytes += chunk.length; });
      helper.stderr?.on("data", (chunk) => { stderrBytes += chunk.length; });
      const snapshot = () => appendFileSync(${JSON.stringify(path.join(root, "pipes.jsonl"))}, JSON.stringify({
        atMs: Date.now(), owner: fileURLToPath(import.meta.url), parent: process.pid, pid: helper.pid,
        exitCode: helper.exitCode, signal: helper.signalCode,
        stdout: helper.stdout && { bytes: stdoutBytes, buffered: helper.stdout.readableLength, destroyed: helper.stdout.destroyed },
        stderr: helper.stderr && { bytes: stderrBytes, buffered: helper.stderr.readableLength, destroyed: helper.stderr.destroyed },
      }) + "\\n");
      snapshot();
      const pipeTimer = setInterval(snapshot, 250);
      helper.once("close", () => { clearInterval(pipeTimer); snapshot(); });`);
owner = owner.replace('import { existsSync,', 'import { appendFileSync, existsSync,');
await writeFile(ownerPath, owner);
const helperPath = path.join(subject, "scripts/owned-command-windows.ps1");
const originalHelper = await readFile(helperPath, "utf8");
let helper = originalHelper.replace(/\r\n/g, "\n");
const ps = (value) => "'" + value.replaceAll("'", "''") + "'";
const marker = (name) => `try { [System.IO.File]::AppendAllText([System.IO.Path]::Combine(${ps(root)}, "helper-" + $PID + ".txt"), "${name} " + [DateTimeOffset]::UtcNow.ToUnixTimeMilliseconds() + [Environment]::NewLine) } catch {}`;
const first = '$ErrorActionPreference = "Stop"';
assert.equal(helper.split(first).length, 2);
helper = helper.replace(first, first + "\n" + marker("script-entry"));
const bootstrap = '    Write-Bootstrap "entry"';
if (helper.includes(bootstrap)) helper = helper.replace(bootstrap,
  "    " + marker("bootstrap-write-start") + "\n" + bootstrap + "\n    " + marker("bootstrap-write-end"));
const connected = "    $pipe.Connect(5000)";
assert.equal(helper.split(connected).length, 2);
helper = helper.replace(connected, connected + "\n    " + marker("pipe-connected"));
await writeFile(helperPath, helper);
const runner = path.join(root, "run-cold-import.mjs");
const profileRunner = path.join(root, "run-profile-prefix.mjs");
if (profiler) await writeFile(profileRunner, `
import { writeFile } from "node:fs/promises";
import { buildRuntimeProfile, validateRuntimeProfile } from ${JSON.stringify(pathToFileURL(path.join(subject, "scripts/profile-contract-runtime.mjs")).href)};
import { profileCommands } from ${JSON.stringify(pathToFileURL(path.join(subject, "scripts/runtime-profile-plan.mjs")).href)};
const profile = await buildRuntimeProfile({ openclawPath: "./openclaw", runs: 3, commands: profileCommands.slice(0, 4) });
await writeFile(${JSON.stringify(path.join(root, "profile-prefix.json"))}, JSON.stringify(profile, null, 2));
const errors = validateRuntimeProfile(profile);
if (errors.length) throw new Error(errors.join("\\n"));
`);
await writeFile(runner, `
import { buildStaticSuiteSteps, runStaticSuite } from ${JSON.stringify(pathToFileURL(path.join(subject, "scripts/run-static-suite.mjs")).href)};
${profiler ? `import { runCommandStep, boundedNodeOptions } from ${JSON.stringify(pathToFileURL(path.join(subject, "scripts/static-step.mjs")).href)};` : ""}
process.env.CRABPOT_TEST_OPENCLAW_PATH = "./openclaw";
const steps = buildStaticSuiteSteps({ openclawArgs: ["--openclaw", "./openclaw"] }).slice(0, 3);
process.exitCode = runStaticSuite(steps);
${profiler ? `if (process.exitCode === 0) process.exitCode = runCommandStep("node", [${JSON.stringify(profileRunner)}], {
  timeout: 90 * 60_000, env: { NODE_OPTIONS: boundedNodeOptions() },
});` : ""}
`);
const monitor = spawn("python", [fileURLToPath(new URL("./diagnose-windows-processes.py", import.meta.url)), root, path.resolve(process.argv[3]), ownerPath, profiler ? "100" : "25"], {
  stdio: ["ignore", "ignore", "inherit"], windowsHide: true,
});
let monitorClosed;
let targetFinished = false;
let monitorEndedEarly = false;
const monitorDone = new Promise((resolve) => {
  const finish = (outcome) => {
    monitorClosed ??= outcome;
    monitorEndedEarly ||= !targetFinished;
    resolve();
  };
  monitor.once("error", (error) => finish({ code: null, errorCode: error.code }));
  monitor.once("close", (code, signal) => finish({ code, signal }));
});
try {
  let ready = false;
  for (let attempt = 0; attempt < 200; attempt += 1) {
    try { await access(path.join(root, "monitor-ready")); ready = true; break; } catch (error) {
      if (error.code !== "ENOENT") throw error;
    }
    if (monitorClosed) throw new Error("native monitor exited before readiness");
    await delay(25);
  }
  assert.ok(ready, "native monitor did not become ready");
  const child = spawn(process.execPath, [runner], { cwd: subject, stdio: "inherit" });
  const outcome = await new Promise((resolve, reject) => {
    child.once("error", reject);
    child.once("close", (code, signal) => resolve({ code, signal }));
  });
  targetFinished = true;
  console.log(JSON.stringify({ kind: "cold-import-outcome", ...outcome }));
  process.exitCode = outcome.code ?? 1;
} finally {
  await writeFile(path.join(root, "stop"), "stop");
  const timeout = setTimeout(() => monitor.kill(), 10000);
  await monitorDone;
  clearTimeout(timeout);
  await writeFile(ownerPath, original);
  await writeFile(helperPath, originalHelper);
  const complete = !monitorEndedEarly && monitorClosed.code === 0 && monitorClosed.signal === null;
  if (!complete) process.exitCode ||= 1;
  console.log(JSON.stringify({ kind: "native-monitor-outcome", complete, ...monitorClosed }));
}
