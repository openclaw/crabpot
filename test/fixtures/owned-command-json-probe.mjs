import { spawn } from "node:child_process";
import { createHash } from "node:crypto";
import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { release, tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { runOwnedCommand } from "../../scripts/owned-command.mjs";
import { assertFixtureCommand } from "../../scripts/resource-workloads/tokenjuice.mjs";

// Temporary, separately hosted dependency probe. Remove its CI job after the
// startup investigation; this nested sequence does not reproduce a cold helper.
const stages = ["ENTER", "BEFORE_JSON", "AFTER_JSON"];
const script = `$ErrorActionPreference = "Stop"
[Console]::Out.WriteLine("ENTER")
try {
    [Console]::Out.WriteLine("BEFORE_JSON")
    $value = '{"sentinel":"crabpot-json-probe-v1"}' | ConvertFrom-Json
    if ($value.sentinel -ne "crabpot-json-probe-v1") { exit 2 }
    [Console]::Out.WriteLine("AFTER_JSON")
    exit 0
} catch { exit 1 }
`;
const safeCode = (error) => !error ? null : ["ENOENT", "EACCES", "EPERM", "EINVAL"].includes(error.code) ? error.code : "UNCLASSIFIED";

async function child(root) {
  // The unchanged outer owner has already admitted this Node process atomically
  // into its non-breakaway Job. Its deadline and extinction check own this tree.
  const powershell = path.join(process.env.SystemRoot ?? process.env.SYSTEMROOT, "System32/WindowsPowerShell/v1.0/powershell.exe");
  const processChild = spawn(powershell, ["-NoLogo", "-NoProfile", "-NonInteractive", "-ExecutionPolicy", "Bypass", "-File", path.join(root, "probe.ps1")], {
    cwd: root, windowsHide: true,
    env: { PATH: process.env.PATH, HOME: root, USERPROFILE: root, LANG: "C", TZ: "UTC" },
    stdio: ["ignore", "pipe", "pipe"],
  });
  const stdoutHash = createHash("sha256"), stderrHash = createHash("sha256");
  let stdoutBytes = 0, stderrBytes = 0, pending = "", overflow = false, invalidOutput = false, observed = 0, error;
  // Drain continuously. Forward only the three exact ordered markers, never
  // native error text or paths; even an unbounded line has bounded memory.
  processChild.stdout.on("data", (chunk) => {
    stdoutBytes += chunk.length;
    stdoutHash.update(chunk);
    for (const byte of chunk) {
      if (byte === 10) {
        const line = pending.replace(/\r$/, "");
        if (!overflow && line === stages[observed]) {
          process.stdout.write(`STAGE ${line}\n`);
          observed += 1;
        } else invalidOutput = true;
        pending = "";
        overflow = false;
      } else if (pending.length < 128) pending += String.fromCharCode(byte);
      else overflow = true;
    }
  });
  processChild.stderr.on("data", (chunk) => { stderrBytes += chunk.length; stderrHash.update(chunk); });
  processChild.on("error", (failure) => { error = failure; });
  const [status, signal] = await new Promise((resolve) => processChild.once("close", (...result) => resolve(result)));
  invalidOutput ||= pending.length > 0 || overflow;
  process.stdout.write(`CHILD ${JSON.stringify({
    status, signal, error: safeCode(error), observed, invalidOutput,
    stdoutBytes, stdoutSha256: stdoutHash.digest("hex"), stderrBytes, stderrSha256: stderrHash.digest("hex"),
  })}\n`);
  process.exitCode = status === 0 && signal === null && !error && !invalidOutput && observed === stages.length ? 0 : 1;
}

async function probe() {
  const runtime = { node: process.version, platform: process.platform, arch: process.arch, release: release() };
  if (process.platform !== "win32" || process.arch !== "x64" || process.version !== "v24.20.0" || !/^10\.0\.26100\b/.test(runtime.release)) {
    console.log(JSON.stringify({ runtime, outcome: "runtime-mismatch" }));
    process.exitCode = 1;
    return;
  }
  const ownerHashes = {};
  for (const name of ["owned-command.mjs", "owned-command-windows.ps1", "owned-command-windows.cs", "portable-command.mjs"]) {
    ownerHashes[name] = createHash("sha256").update(await readFile(new URL(`../../scripts/${name}`, import.meta.url))).digest("hex");
  }
  const root = await mkdtemp(path.join(tmpdir(), "crabpot-json-probe-"));
  let result;
  try {
    await writeFile(path.join(root, "probe.ps1"), script);
    // The outer helper uses the ordinary inherited environment. Only the nested
    // PowerShell receives the original minimal map; libuv fills required vars.
    result = runOwnedCommand(process.execPath, [fileURLToPath(import.meta.url), "child", root], {
      cwd: root, timeout: 10_000, maxBuffer: 64 * 1024, encoding: "utf8",
    });
    const lines = result.stdout.trim().split("\n");
    const observed = lines.filter((line) => stages.some((stage) => line === `STAGE ${stage}`));
    const terminal = lines.filter((line) => line.startsWith("CHILD "));
    const detail = terminal.length === 1 ? JSON.parse(terminal[0].slice(6)) : null;
    let failure = null;
    try { assertFixtureCommand(result, "PowerShell dependency probe"); } catch (error) { failure = error.message; }
    const complete = lines.length === 4 && observed.join("\n") === stages.map((stage) => `STAGE ${stage}`).join("\n") &&
      detail?.status === 0 && detail.signal === null && detail.error === null && detail.observed === 3 && detail.invalidOutput === false;
    console.log(JSON.stringify({
      runtime, ownerHashes, stages: observed, child: detail, failure,
      outcome: !failure && complete ? "passed-contained-sequence" : "failed-or-incomplete",
      cleanup: result.cleanupError ? "unknown-retained" : "canonical-owner-confirmed",
      limitation: "Outer bootstrap can warm shared caches; this is not original cold-helper proof.",
    }));
    process.exitCode = !failure && complete ? 0 : 1;
  } finally {
    // No guessed PID rescue or teardown claim after an incomplete owner result.
    if (result && !result.cleanupError) await rm(root, { recursive: true, force: true });
  }
}

try {
  if (process.argv[2] === "child") await child(process.argv[3]);
  else await probe();
} catch (error) {
  console.log(JSON.stringify({ outcome: "probe-error", code: safeCode(error), cleanup: "not-established" }));
  process.exitCode = 1;
}
