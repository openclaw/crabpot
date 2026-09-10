import { spawn } from "node:child_process";
import { randomUUID } from "node:crypto";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { appendFileSync, mkdirSync, writeSync } from "node:fs";
import { createServer } from "node:net";
import os from "node:os";
import path from "node:path";
import { performance } from "node:perf_hooks";
import { fileURLToPath } from "node:url";
import { MessageChannel, receiveMessageOnPort, Worker, workerData } from "node:worker_threads";
import { portableCommand } from "./portable-command.mjs";

const startupMs = 10_000;
const cleanupMs = 2_000;
const termGraceMs = 200;
const defaultMaxBuffer = 1024 * 1024;

// Temporary issue305 diagnostics. Each producer owns its file, independently of
// the command control pipe and Worker lifetime. No diagnostic is an authority receipt.
const diagnosticRecordLimit = 32;
const diagnosticByteLimit = diagnosticRecordLimit * 2048;
let diagnosticSelected = false;

function startupDiagnostic(command, args, options) {
  if (process.platform !== "win32" || diagnosticSelected || command !== "git" || args[0] !== "init" ||
      typeof args[1] !== "string") return null;
  const cwd = fileURLOrPath(options.cwd ?? process.cwd());
  if (path.dirname(args[1]) !== path.join(cwd, ".crabpot", "plugin-inspector") ||
      !/^[a-f0-9]{40}$/.test(path.basename(args[1]))) return null;
  diagnosticSelected = true;
  const root = path.join(cwd, "reports", "crabpot-startup-305");
  try {
    mkdirSync(root, { recursive: true });
    for (let attempt = 1; attempt <= 4; attempt += 1) {
      const directory = path.join(root, `attempt-${attempt}`);
      try { mkdirSync(directory); } catch (error) {
        if (error.code === "EEXIST") continue;
        throw error;
      }
      const entry = path.basename(process.argv[1] ?? "");
      return {
        root, directory, attempt, id: randomUUID(),
        entry: entry === "capture-contracts.test.mjs" ? "cold-contract-test"
          : /^(generate-report|capture-contracts|synthetic-probes|cold-import-readiness|workspace-plan|platform-probes|check-generated-surface-fixture|import-loop-profile|profile-contract-runtime)\.mjs$/.test(entry)
            ? "later-report" : "other",
      };
    }
  } catch {}
  try { writeSync(2, "crabpot-startup-305: diagnostic storage unavailable or attempt limit reached\n"); } catch {}
  return null;
}

function startupTrace(context, producer) {
  let sequence = 0;
  let bytes = 0;
  const started = performance.now();
  return (event, fields = {}) => {
    if (!context || sequence >= diagnosticRecordLimit) return;
    try {
      const line = `${JSON.stringify({
        id: context.id, producer, sequence: ++sequence, event,
        unixMs: Date.now(), elapsedMs: Math.round(performance.now() - started),
        clock: "performance.now", ...fields,
      })}\n`;
      const length = Buffer.byteLength(line);
      if (length > 2048 || bytes + length > diagnosticByteLimit) return;
      bytes += length;
      appendFileSync(path.join(context.directory, `${producer}.jsonl`), line, { encoding: "utf8", mode: 0o600 });
    } catch {}
  };
}

function startupError(error, includeCause = true) {
  if (!error) return null;
  const token = (value) => typeof value === "string" && /^[A-Z][A-Z0-9_]{0,63}$/.test(value) ? value : null;
  const message = String(error.message ?? "");
  const knownMessage = /^(?:command (?:supervisor (?:startup timed out|exceeded its deadline|terminal cleanup receipt was not observed)|owner stopped|output exceeded maxBuffer|timed out after \d+ms)|Windows (?:command adapter startup timed out|Job (?:cleanup receipt missing|extinction receipt was not observed)|helper (?:closure was not observed|did not close after forced termination)|adapter (?:exited before command request|exited without Job extinction receipt|failed \((?:\d+|SIG[A-Z]+)\))))(?:; command cleanup was not confirmed)?$/;
  return {
    code: token(error.code), errno: Number.isSafeInteger(error.errno) ? error.errno : null,
    nativeCode: Number.isSafeInteger(error.nativeCode) ? error.nativeCode : null,
    operation: typeof error.operation === "string" &&
      /^(?:CreateProcessW\(JOB_LIST\)|CreateJobObjectW|SetInformationJobObject|AssignProcessToJobObject|HANDLE_LIST|JOB_LIST|WaitForSingleObject)(?:\(bootstrap\))?$/.test(error.operation)
      ? error.operation : null,
    message: knownMessage.test(message) ? message.slice(0, 192) : "[redacted]",
    ...(includeCause && error.cause ? { cause: startupError(error.cause, false) } : {}),
  };
}

function startupResult(result) {
  const bytes = (value) => value == null ? null : typeof value === "string" ? Buffer.byteLength(value) : value.byteLength;
  return {
    status: result?.status ?? null, signal: result?.signal ?? null, childPid: result?.pid ?? null,
    error: startupError(result?.error), cleanupError: startupError(result?.cleanupError),
    stdoutBytes: bytes(result?.stdout), stderrBytes: bytes(result?.stderr),
  };
}

function summarizeStartup(context) {
  if (!context) return;
  try {
    const original = {};
    for (const producer of ["parent", "worker", "powershell", "native"]) {
      const file = path.join(context.root, "attempt-1", `${producer}.jsonl`);
      try {
        if (statSync(file).size > diagnosticByteLimit) {
          original[producer] = { invalid: "byte-limit" };
          continue;
        }
        const lines = readFileSync(file, "utf8").split("\n").filter(Boolean);
        const records = lines.slice(0, diagnosticRecordLimit).flatMap((line) => {
          try { return [JSON.parse(line)]; } catch { return []; }
        });
        const last = records.at(-1);
        original[producer] = {
          records: records.length,
          last: /^[a-z-]{1,64}$/.test(last?.event ?? "") ? last.event : null,
          sequence: Number.isSafeInteger(last?.sequence) ? last.sequence : null,
          unixMs: Number.isSafeInteger(last?.unixMs) ? last.unixMs : null,
        };
        if (producer === "parent") {
          const entry = records[0]?.entry;
          const final = records.find((record) => record.event === "parent-finalized");
          original[producer].entry = ["cold-contract-test", "later-report", "other"].includes(entry) ? entry : null;
          original[producer].result = final ? {
            error: startupError(final.result?.error), cleanupError: startupError(final.result?.cleanupError),
            status: Number.isSafeInteger(final.result?.status) ? final.result.status : null,
            readyConsumed: final.readyConsumed === true, terminalReceipt: final.terminalReceipt === true,
          } : null;
        }
      } catch { original[producer] = { records: 0, missingOrUnreadable: true }; }
    }
    const line = `crabpot-startup-305 ${JSON.stringify({
      attempt: context.attempt, id: context.id, snapshotUnixMs: Date.now(), original,
    })}\n`;
    if (Buffer.byteLength(line) <= 8192) writeSync(2, line);
  } catch {}
}

const workerTrace = startupTrace(workerData?.startupDiagnostic, "worker");
if (workerData?.ownedCommand) workerTrace("worker-entered");

export function configuredTimeoutMs(name, fallback) {
  const raw = process.env[name];
  const value = raw === undefined ? fallback : Number(raw);
  if ((raw !== undefined && (raw.length === 0 || /\D/.test(raw))) ||
      !Number.isSafeInteger(value) || value < 1 || value > 2_147_483_647) {
    throw new Error(`${name} must be a positive integer timeout between 1 and 2147483647 milliseconds`);
  }
  return value;
}

// Internal synchronous owner shared by checkout, smoke, and generated-surface callers.
export function runOwnedCommand(command, args, options = {}) {
  const timeout = options.timeout;
  const maxBuffer = options.maxBuffer ?? defaultMaxBuffer;
  if (!Number.isSafeInteger(timeout) || timeout < 1 || timeout > 2_147_483_647) {
    throw new RangeError("command timeout must be a finite positive bounded integer");
  }
  if (!Number.isSafeInteger(maxBuffer) || maxBuffer < 1) {
    throw new RangeError("command maxBuffer must be a finite positive integer");
  }
  const diagnostic = startupDiagnostic(command, args, options);
  const trace = startupTrace(diagnostic, "parent");
  let terminationRequested = false;
  trace("parent-entered", { entry: diagnostic?.entry, node: process.version, startupMs, cleanupMs, timeoutMs: timeout });
  const shared = new Int32Array(new SharedArrayBuffer(16));
  const { port1, port2 } = new MessageChannel();
  const worker = new Worker(new URL(import.meta.url), {
    execArgv: [],
    workerData: {
      ownedCommand: true, port: port2, shared, command, args,
      startupDiagnostic: diagnostic,
      options: {
        cwd: options.cwd === undefined ? process.cwd() : fileURLOrPath(options.cwd),
        env: options.env ?? process.env,
        inherit: options.stdio === "inherit",
        timeout, maxBuffer,
      },
    },
    transferList: [port2],
    stdout: true,
    stderr: true,
  });
  // Errors are delivered asynchronously after this synchronous call returns.
  // Startup and execution progress instead travel through the synchronously polled port.
  worker.on("error", (error) => trace("worker-error-observed", { terminationRequested, error: startupError(error) }));
  if (diagnostic) {
    worker.once("exit", (code) => trace("worker-exit-observed", { code, terminationRequested }));
  }
  worker.unref();
  const started = performance.now();
  let deadline = started + startupMs;
  let running = false;
  let result;
  let firstFailure;
  let terminalReceipt = false;
  trace("startup-deadline-armed");
  const receive = (packet) => {
    if (packet?.type === "ready") {
      running = true;
      deadline = performance.now() + timeout + cleanupMs;
      trace("ready-consumed");
    } else if (packet?.type === "failure") {
      firstFailure ??= packet.error;
      trace("first-failure-consumed", { error: startupError(firstFailure) });
    } else if (packet?.type === "result") {
      terminalReceipt = true;
      trace("terminal-consumed", { result: startupResult(packet.result), readyConsumed: running });
      result = packet.result;
      result.error ??= firstFailure;
    }
  };
  try {
    while (!result) {
      receive(receiveMessageOnPort(port1)?.message);
      if (result) break;
      if (performance.now() >= deadline) {
        trace("parent-deadline-fired", { readyConsumed: running });
        Atomics.store(shared, 1, 1);
        port1.postMessage({ type: "stop" });
        trace("stop-requested");
        const end = performance.now() + cleanupMs;
        while (performance.now() < end) {
          receive(receiveMessageOnPort(port1)?.message);
          if (result) break;
          Atomics.wait(shared, 0, Atomics.load(shared, 0), 10);
        }
        trace("late-wait-ended", { terminalReceipt, readyConsumed: running });
        if (!result) {
          // A cached POSIX group number is not retained authority after Worker loss.
          result = emptyResult();
          result.cleanupError = {
            code: "EOWNERCLEANUP", message: "command supervisor terminal cleanup receipt was not observed",
          };
        }
        if (!result.error || result.error.code === "EOWNERCANCELLED") {
          result.error = firstFailure && firstFailure.code !== "EOWNERCANCELLED" ? firstFailure : {
            code: running ? "EOWNERCLEANUP" : "EOWNERSTART",
            message: running ? "command supervisor exceeded its deadline" : "command supervisor startup timed out",
          };
        }
        break;
      }
      Atomics.wait(shared, 0, Atomics.load(shared, 0), 10);
    }
  } finally {
    Atomics.store(shared, 1, 1);
    port1.close();
    // Closing the Worker's control socket makes the Windows adapter clean its
    // exact Job independently, including when the Worker itself failed.
    terminationRequested = true;
    trace("worker-termination-requested", { terminalReceipt, helperPid: Atomics.load(shared, 3) });
    void worker.terminate().catch(() => {});
    if (process.platform === "win32") {
      const helperPid = Atomics.load(shared, 3);
      const end = performance.now() + cleanupMs;
      let helperClosed = helperPid <= 0;
      let cleanupCause;
      while (!helperClosed && performance.now() < end) {
        try { helperClosed = !processRunning(helperPid); } catch (error) {
          cleanupCause ??= errorData(error);
        }
        if (!helperClosed) Atomics.wait(shared, 0, Atomics.load(shared, 0), 10);
      }
      trace("helper-probe-ended", {
        helperPid, probeSkipped: helperPid <= 0, reportedAbsent: helperPid > 0 ? helperClosed : null,
        error: startupError(cleanupCause),
      });
      if (!helperClosed) {
        result ??= emptyResult();
        result.cleanupError = {
          code: "EOWNERCLEANUP", message: "Windows helper closure was not observed",
          ...(cleanupCause ? { cause: cleanupCause } : {}),
        };
      }
    }
  }
  for (const stream of ["stdout", "stderr"]) {
    const value = result[stream];
    result[stream] = value === null ? null : options.encoding
      ? Buffer.from(value).toString(options.encoding)
      : Buffer.from(value);
  }
  if (result.cleanupError) {
    const error = result.error ?? result.cleanupError;
    result.error = { ...error, message: `${error.message}; command cleanup was not confirmed` };
  }
  if (result.error) result.error = Object.assign(new Error(result.error.message), result.error);
  trace("parent-finalized", { result: startupResult(result), terminalReceipt, readyConsumed: running });
  summarizeStartup(diagnostic);
  return result;
}

function fileURLOrPath(value) {
  return value instanceof URL ? fileURLToPath(value) : value;
}

function emptyResult() {
  return { pid: 0, status: null, signal: null, stdout: Buffer.alloc(0), stderr: Buffer.alloc(0) };
}

function errorData(error) {
  return Object.fromEntries(["message", "code", "errno", "syscall", "path", "spawnargs", "nativeCode", "operation"]
    .filter((key) => error[key] !== undefined).map((key) => [key, error[key]]));
}

function processRunning(pid) {
  try { process.kill(pid, 0); return true; } catch (error) {
    if (error.code === "ESRCH") return false;
    throw error;
  }
}

function signalGroup(pid, signal) {
  try { process.kill(-pid, signal); } catch (error) {
    if (error.code !== "ESRCH") throw error;
  }
}

function groupRunning(pid) {
  try { process.kill(-pid, 0); } catch (error) {
    if (error.code === "ESRCH") return false;
    throw error;
  }
  if (process.platform !== "linux") return true;
  // Container PID 1 may retain reparented zombies. They have exited and hold no
  // stdio; their eventual reaping is not authority held by this process owner.
  let unreadable = false;
  for (const entry of readdirSync("/proc")) {
    if (!/^\d+$/.test(entry)) continue;
    try {
      const text = readFileSync(`/proc/${entry}/stat`, "utf8");
      const fields = text.slice(text.lastIndexOf(")") + 2).split(" ");
      if (Number(fields[2]) === pid && !["Z", "X"].includes(fields[0])) return true;
    } catch (error) {
      if (error.code === "EACCES" || error.code === "EPERM") {
        unreadable = true;
      } else if (error.code !== "ENOENT" && error.code !== "ESRCH") {
        throw error;
      }
    }
  }
  // Restricted procfs must not prevent escalation or count as extinction proof.
  return unreadable;
}

async function supervise({ command, args, options, port, shared }) {
  const result = emptyResult();
  const output = options.inherit ? null : {
    stdout: Buffer.allocUnsafe(options.maxBuffer), stderr: Buffer.allocUnsafe(options.maxBuffer),
  };
  const lengths = { stdout: 0, stderr: 0 };
  let used = 0;
  let child;
  let stop;
  let timer;
  let done = false;
  let failureSent = false;
  const recordFailure = (error) => {
    result.error ??= errorData(error);
    if (failureSent) return;
    failureSent = true;
    workerTrace("first-failure", { error: startupError(result.error), stdoutBytes: lengths.stdout, stderrBytes: lengths.stderr });
    port.postMessage({ type: "failure", error: {
      code: String(result.error.code ?? "EOWNERFAILURE").slice(0, 64),
      message: String(result.error.message).slice(0, 1024),
    } });
    Atomics.add(shared, 0, 1);
    Atomics.notify(shared, 0);
  };
  const fail = (error) => { recordFailure(error); stop?.(); };
  const ready = (pid) => {
    result.pid = pid;
    port.postMessage({ type: "ready" });
    Atomics.add(shared, 0, 1);
    Atomics.notify(shared, 0);
    workerTrace("ready-forwarded", { childPid: pid });
    timer = setTimeout(() => {
      workerTrace("execution-deadline-fired");
      fail({ code: "ETIMEDOUT", message: `command timed out after ${options.timeout}ms` });
    }, options.timeout);
    if (Atomics.load(shared, 1)) stop();
  };
  const observe = (process) => {
    child = process;
    if (output) {
      for (const stream of ["stdout", "stderr"]) {
        child[stream].on("data", (chunk) => {
          const keep = Math.min(chunk.length, options.maxBuffer - used);
          chunk.copy(output[stream], lengths[stream], 0, keep);
          lengths[stream] += keep;
          used += keep;
          if (keep < chunk.length) fail(Object.assign(new Error("command output exceeded maxBuffer"), { code: "ENOBUFS" }));
        });
        child[stream].on("error", fail);
      }
    }
  };
  const onStop = () => {
    workerTrace("stop-consumed", { done });
    if (!done) fail(Object.assign(new Error("command owner stopped"), { code: "EOWNERCANCELLED" }));
  };
  port.on("message", onStop);
  port.on("close", onStop);
  try {
    const execution = process.platform === "win32"
      ? runWindows(command, args, options, result, observe, ready, fail, shared, recordFailure)
      : runPosix(command, args, options, result, observe, ready, fail);
    stop = execution.stop;
    await execution.completion;
  } catch (error) {
    recordFailure(error);
  } finally {
    done = true;
    clearTimeout(timer);
    port.removeListener("message", onStop);
    port.removeListener("close", onStop);
  }
  for (const stream of ["stdout", "stderr"]) {
    result[stream] = output ? output[stream].subarray(0, lengths[stream]) : null;
  }
  return result;
}

function runPosix(command, args, options, result, observe, ready, fail) {
  let child;
  let closingAt;
  let rootExited = false;
  let pipesClosed = false;
  let killed = false;
  let groupExtinct = false;
  let cleanupCause;
  let poll;
  let resolve;
  const completion = new Promise((done) => { resolve = done; });
  const signal = (value) => {
    if (!child?.pid || groupExtinct) return;
    try { signalGroup(child.pid, value); } catch (error) { cleanupCause ??= errorData(error); }
  };
  const stop = () => {
    if (closingAt !== undefined) return;
    closingAt = performance.now();
    signal("SIGTERM");
  };
  const finish = () => { clearInterval(poll); resolve(); };
  child = spawn(command, args, {
    cwd: options.cwd, env: options.env, detached: true,
    stdio: options.inherit ? "inherit" : ["ignore", "pipe", "pipe"],
  });
  observe(child);
  child.once("spawn", () => ready(child.pid));
  child.once("error", (error) => { fail(error); rootExited = true; });
  child.once("exit", (code, signal) => {
    result.status = code;
    result.signal = signal;
    rootExited = true;
    stop();
  });
  child.once("close", () => { pipesClosed = true; });
  // Probe errors are uncertainty, not extinction; reaping and the deadline must still progress.
  poll = setInterval(() => {
    if (!rootExited && closingAt === undefined) return;
    if (!groupExtinct) {
      try { groupExtinct = !child.pid || !groupRunning(child.pid); } catch (error) {
        cleanupCause ??= errorData(error);
      }
    }
    if (rootExited && pipesClosed && groupExtinct) return finish();
    if (closingAt === undefined) return;
    const elapsed = performance.now() - closingAt;
    if (!killed && elapsed >= termGraceMs) {
      killed = true;
      signal("SIGKILL");
    }
    if (elapsed >= cleanupMs) {
      result.cleanupError = {
        code: "EOWNERCLEANUP", message: "command group or owned pipe closure was not observed",
        ...(cleanupCause ? { cause: cleanupCause } : {}),
      };
      fail(result.cleanupError);
      child.stdout?.destroy();
      child.stderr?.destroy();
      finish();
    }
  }, 10);
  return { stop, completion };
}

function resolveWindowsCommand(command, cwd, env) {
  const name = portableCommand(command);
  const roots = /[\\/]/.test(name) ? [""] : [cwd, ...(environmentValue(env, "PATH") ?? "").split(path.delimiter)];
  const suffixes = path.extname(name) ? [""] : ["", ".exe", ".com"];
  for (const root of roots) {
    for (const suffix of suffixes) {
      const candidate = path.resolve(cwd, root, name + suffix);
      if (existsSync(candidate) && statSync(candidate).isFile()) return candidate;
    }
  }
  throw Object.assign(new Error(`spawn ${command} ENOENT`), {
    code: "ENOENT", errno: os.constants.errno.ENOENT * -1, syscall: `spawn ${command}`, path: command,
  });
}

function environmentValue(env, key) {
  return Object.entries(env).find(([name]) => name.toUpperCase() === key)?.[1];
}

function quoteWindowsArg(value) {
  let quoted = '"';
  let slashes = 0;
  for (const character of value) {
    if (character === "\\") { slashes += 1; continue; }
    quoted += "\\".repeat(character === '"' ? slashes * 2 + 1 : slashes) + character;
    slashes = 0;
  }
  return quoted + "\\".repeat(slashes * 2) + '"';
}

function batchCommandLine(executable, args) {
  // CMD metacharacters need a separate escaping pass from the native argv quotes.
  // npm-style .bin shims parse the arguments a second time.
  const escape = (value) => value.replace(/([()\][%!^"`<>&|;, *?])/g, "^$1");
  const shim = /node_modules[\\/]\.bin[\\/][^\\/]+\.cmd$/i.test(executable);
  return [escape(executable), ...args.map((arg) => {
    const escaped = escape(quoteWindowsArg(arg));
    return shim ? escape(escaped) : escaped;
  })].join(" ");
}

function runWindows(command, args, options, result, observe, ready, fail, shared, recordFailure) {
  const pipeName = `crabpot-command-${randomUUID()}`;
  const server = createServer();
  let socket;
  let helper;
  let stopped = false;
  let requestIssued = false;
  let admitted = false;
  let closedJob = false;
  let helperClosed = false;
  let helperExitError;
  let controlEnded = false;
  let completionResolve;
  let startupTimer;
  let cleanupTimer;
  let missingJobCleanupError;
  let forcedCloseTimer;
  let finished = false;
  const completion = new Promise((resolve) => { completionResolve = resolve; });
  const terminateHelper = () => {
    try {
      workerTrace("helper-kill-requested", { helperPid: helper?.pid ?? null, helperClosed });
      const sent = helper?.kill();
      workerTrace("helper-kill-returned", { sent: sent ?? null });
    } catch (error) {
      workerTrace("helper-kill-error", { error: startupError(error) });
      recordFailure(error);
    }
  };
  const stop = () => {
    if (stopped) return;
    stopped = true;
    workerTrace("adapter-stop", { requestIssued, admitted, closedJob, helperClosed, controlEnded });
    clearTimeout(startupTimer);
    if (!requestIssued) {
      // No request means no command Job can exist; retain the helper handle
      // until its close event confirms termination and stream closure.
      recordFailure({ code: "EOWNERCANCELLED", message: "command owner stopped" });
      terminateHelper();
      socket?.destroy();
    } else {
      socket?.write("STOP\n");
      workerTrace("helper-stop-write-returned");
    }
    cleanupTimer = setTimeout(() => {
      workerTrace("cleanup-deadline-fired", { requestIssued, admitted, closedJob, helperClosed, controlEnded });
      missingJobCleanupError = { code: "EOWNERCLEANUP", message: "Windows Job cleanup receipt missing" };
      result.cleanupError ??= missingJobCleanupError;
      recordFailure(result.cleanupError);
      socket?.destroy();
      terminateHelper();
      helper?.stdout?.destroy();
      helper?.stderr?.destroy();
      if (!helper || helperClosed) { finish(); return; }
      forcedCloseTimer = setTimeout(() => {
        workerTrace("forced-close-deadline-fired");
        result.cleanupError = { code: "EOWNERCLEANUP", message: "Windows helper did not close after forced termination" };
        recordFailure(result.cleanupError);
        finish();
      }, cleanupMs);
    }, cleanupMs);
    workerTrace("cleanup-deadline-armed");
  };
  const finish = () => {
    if (finished) return;
    finished = true;
    clearTimeout(startupTimer);
    clearTimeout(cleanupTimer);
    clearTimeout(forcedCloseTimer);
    socket?.destroy();
    server.close();
    workerTrace("adapter-finished", { requestIssued, admitted, closedJob, helperClosed, controlEnded });
    completionResolve();
  };
  const maybeFinish = () => {
    if (!helperClosed || (socket && !controlEnded)) return;
    // The independent control socket must drain before a generic exit fallback.
    if (helperExitError) recordFailure(helperExitError);
    if (!requestIssued) {
      if (missingJobCleanupError && result.cleanupError === missingJobCleanupError) {
        delete result.cleanupError;
      }
      recordFailure({ code: "EOWNERNATIVE", message: "Windows adapter exited before command request" });
      finish();
      return;
    }
    if (closedJob) {
      delete result.cleanupError;
    } else {
      result.cleanupError = { code: "EOWNERCLEANUP", message: "Windows Job extinction receipt was not observed" };
    }
    if (!closedJob || result.status === null) {
      recordFailure({ code: "EOWNERNATIVE", message: "Windows adapter exited without Job extinction receipt" });
    }
    finish();
  };
  server.on("error", (error) => { fail(error); finish(); });
  server.once("connection", (connection) => {
    socket = connection;
    workerTrace("helper-connected", { stopped });
    server.close();
    let pending = "";
    socket.setEncoding("utf8");
    socket.on("error", fail);
    socket.on("close", () => {
      controlEnded = true;
      workerTrace("control-closed", { admitted, closedJob });
      maybeFinish();
    });
    socket.on("data", (data) => {
      pending += data;
      if (pending.length > 8192) {
        fail(Object.assign(new Error("Windows adapter control message exceeded limit"), { code: "EOWNERPROTOCOL" }));
        return;
      }
      let end;
      while ((end = pending.indexOf("\n")) !== -1) {
        const line = pending.slice(0, end).trimEnd();
        pending = pending.slice(end + 1);
        if (/^READY \d+$/.test(line) && !admitted) {
          admitted = true;
          workerTrace("ready-received", { childPid: Number(line.slice(6)), stopped });
          clearTimeout(startupTimer);
          ready(Number(line.slice(6)));
        } else if (/^EXIT \d+$/.test(line) && admitted) {
          result.status = Number(line.slice(5));
          workerTrace("exit-received", { status: result.status });
        } else if (line === "CLOSED" && admitted) {
          closedJob = true;
          workerTrace("job-closed-received");
        } else if (line === "TIMEOUT" && admitted) {
          recordFailure({ code: "ETIMEDOUT", message: `command timed out after ${options.timeout}ms` });
        } else if (line.startsWith("ERROR ")) {
          try {
            const detail = JSON.parse(Buffer.from(line.slice(6), "base64").toString("utf8"));
            if (typeof detail.message !== "string") throw new Error("missing native error message");
            const spawnFailure = detail.operation === "CreateProcessW(JOB_LIST)";
            const code = spawnFailure
              ? ({ 2: "ENOENT", 3: "ENOENT", 5: "EACCES", 193: "EFTYPE", 216: "UNKNOWN" }[detail.nativeCode] ?? "EOWNERNATIVE")
              : "EOWNERNATIVE";
            fail(Object.assign(new Error(detail.message), {
              code, nativeCode: detail.nativeCode, operation: detail.operation,
              ...(spawnFailure ? { syscall: `spawn ${command}`, path: command, spawnargs: args } : {}),
            }));
          } catch (error) {
            fail(Object.assign(new Error(`invalid native error receipt: ${error.message}`), { code: "EOWNERPROTOCOL" }));
          }
        } else {
          fail(Object.assign(new Error("invalid Windows adapter control message"), { code: "EOWNERPROTOCOL" }));
        }
      }
    });
    if (stopped || Atomics.load(shared, 1)) {
      stop();
      socket.destroy();
      return;
    }
    try {
      workerTrace("request-build-begin");
      const executable = resolveWindowsCommand(command, options.cwd, options.env);
      const batch = /\.(cmd|bat)$/i.test(executable);
      const application = batch
        ? resolveWindowsCommand(environmentValue(options.env, "COMSPEC") ?? "cmd.exe", options.cwd, options.env)
        : executable;
      const commandLine = batch
        ? `${quoteWindowsArg(application)} /d /s /c "${batchCommandLine(executable, args)}"`
        : [executable, ...args].map(quoteWindowsArg).join(" ");
      const request = `${JSON.stringify({
        application, commandLine, cwd: options.cwd, timeout: options.timeout, cleanup: cleanupMs,
        environment: Object.entries(options.env).filter(([, value]) => value !== undefined)
          .sort(([a], [b]) => a.toUpperCase().localeCompare(b.toUpperCase()))
          .map(([key, value]) => `${key}=${value}`).join("\0") + "\0\0",
      })}\n`;
      workerTrace("request-build-end");
      workerTrace("request-prewrite-check");
      if (stopped || Atomics.load(shared, 1)) {
        stop();
        socket.destroy();
        return;
      }
      // A throwing or partial write may still have issued a request.
      requestIssued = true;
      const writable = socket.write(request, workerData.startupDiagnostic ? (error) => {
        workerTrace("request-write-completed", { error: startupError(error) });
      } : undefined);
      workerTrace("request-write-returned", { writable });
      if (stopped || Atomics.load(shared, 1)) socket.write("STOP\n");
    } catch (error) { fail(error); socket.destroy(); }
  });
  server.listen(`\\\\.\\pipe\\${pipeName}`, () => {
    if (stopped) { finish(); return; }
    const powershell = path.join(environmentValue(options.env, "SYSTEMROOT") ?? process.env.SystemRoot ?? "C:\\Windows",
      "System32", "WindowsPowerShell", "v1.0", "powershell.exe");
    workerTrace("helper-spawn-requested");
    helper = spawn(powershell, [
      "-NoLogo", "-NoProfile", "-NonInteractive", "-ExecutionPolicy", "Bypass",
      "-File", fileURLToPath(new URL("./owned-command-windows.ps1", import.meta.url)), pipeName,
      ...(workerData.startupDiagnostic
        ? [workerData.startupDiagnostic.directory, workerData.startupDiagnostic.id] : []),
    ], { cwd: options.cwd, env: options.env, windowsHide: true,
      stdio: options.inherit ? "inherit" : ["ignore", "pipe", "pipe"] });
    observe(helper);
    helper.once("spawn", () => {
      Atomics.store(shared, 3, helper.pid);
      workerTrace("helper-spawned", { helperPid: helper.pid });
    });
    helper.once("error", (error) => { fail(error); finish(); });
    helper.once("close", (code, signal) => {
      Atomics.store(shared, 3, 0);
      if (code !== 0 || signal !== null) {
        helperExitError = { code: "EOWNERNATIVE", message: `Windows adapter failed (${signal ?? code})` };
      }
      helperClosed = true;
      workerTrace("helper-closed", { code, signal, admitted, closedJob, controlEnded });
      maybeFinish();
    });
  });
  startupTimer = setTimeout(() => {
    workerTrace("adapter-startup-deadline-fired", { requestIssued, admitted, helperClosed });
    fail(Object.assign(new Error("Windows command adapter startup timed out"), { code: "EOWNERSTART" }));
  }, startupMs);
  workerTrace("adapter-startup-deadline-armed");
  return { stop, completion };
}

if (workerData?.ownedCommand === true) {
  const { port, shared } = workerData;
  let result;
  try { result = await supervise(workerData); } catch (error) {
    result = { ...emptyResult(), error: errorData(error) };
  }
  workerTrace("terminal-post-begin", { result: startupResult(result) });
  port.postMessage({ type: "result", result });
  Atomics.add(shared, 0, 1);
  Atomics.notify(shared, 0);
  workerTrace("terminal-post-returned");
  port.close();
}
