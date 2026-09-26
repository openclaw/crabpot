import { spawn } from "node:child_process";
import { randomUUID } from "node:crypto";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
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
  const shared = new Int32Array(new SharedArrayBuffer(16));
  const { port1, port2 } = new MessageChannel();
  const worker = new Worker(new URL(import.meta.url), {
    execArgv: [],
    workerData: {
      ownedCommand: true, port: port2, shared, command, args,
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
  worker.on("error", () => {});
  worker.unref();
  const started = performance.now();
  let deadline = started + startupMs;
  let running = false;
  let result;
  let firstFailure;
  const receive = (packet) => {
    if (packet?.type === "ready") {
      running = true;
      deadline = performance.now() + timeout + cleanupMs;
    } else if (packet?.type === "failure") {
      firstFailure ??= packet.error;
    } else if (packet?.type === "result") {
      result = packet.result;
      result.error ??= firstFailure;
    }
  };
  try {
    while (!result) {
      receive(receiveMessageOnPort(port1)?.message);
      if (result) break;
      if (performance.now() >= deadline) {
        Atomics.store(shared, 1, 1);
        port1.postMessage({ type: "stop" });
        const end = performance.now() + cleanupMs;
        while (performance.now() < end) {
          receive(receiveMessageOnPort(port1)?.message);
          if (result) break;
          Atomics.wait(shared, 0, Atomics.load(shared, 0), 10);
        }
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
    timer = setTimeout(() => {
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
      helper?.kill();
    } catch (error) {
      recordFailure(error);
    }
  };
  const stop = () => {
    if (stopped) return;
    stopped = true;
    clearTimeout(startupTimer);
    if (!requestIssued) {
      // No request means no command Job can exist; retain the helper handle
      // until its close event confirms termination and stream closure.
      recordFailure({ code: "EOWNERCANCELLED", message: "command owner stopped" });
      terminateHelper();
      socket?.destroy();
    } else {
      socket?.write("STOP\n");
    }
    cleanupTimer = setTimeout(() => {
      missingJobCleanupError = { code: "EOWNERCLEANUP", message: "Windows Job cleanup receipt missing" };
      result.cleanupError ??= missingJobCleanupError;
      recordFailure(result.cleanupError);
      socket?.destroy();
      terminateHelper();
      helper?.stdout?.destroy();
      helper?.stderr?.destroy();
      if (!helper || helperClosed) { finish(); return; }
      forcedCloseTimer = setTimeout(() => {
        result.cleanupError = { code: "EOWNERCLEANUP", message: "Windows helper did not close after forced termination" };
        recordFailure(result.cleanupError);
        finish();
      }, cleanupMs);
    }, cleanupMs);
  };
  const finish = () => {
    if (finished) return;
    finished = true;
    clearTimeout(startupTimer);
    clearTimeout(cleanupTimer);
    clearTimeout(forcedCloseTimer);
    socket?.destroy();
    server.close();
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
    server.close();
    let pending = "";
    socket.setEncoding("utf8");
    socket.on("error", fail);
    socket.on("close", () => { controlEnded = true; maybeFinish(); });
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
          clearTimeout(startupTimer);
          ready(Number(line.slice(6)));
        } else if (/^EXIT \d+$/.test(line) && admitted) {
          result.status = Number(line.slice(5));
        } else if (line === "CLOSED" && admitted) {
          closedJob = true;
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
      if (stopped || Atomics.load(shared, 1)) {
        stop();
        socket.destroy();
        return;
      }
      // A throwing or partial write may still have issued a request.
      requestIssued = true;
      socket.write(request);
      if (stopped || Atomics.load(shared, 1)) socket.write("STOP\n");
    } catch (error) { fail(error); socket.destroy(); }
  });
  server.listen(`\\\\.\\pipe\\${pipeName}`, () => {
    if (stopped) { finish(); return; }
    // The controller needs its own runtime environment; only the native target
    // receives the caller's environment serialized in the request above.
    const powershell = path.join(environmentValue(process.env, "SYSTEMROOT") ?? "C:\\Windows",
      "System32", "WindowsPowerShell", "v1.0", "powershell.exe");
    helper = spawn(powershell, [
      "-NoLogo", "-NoProfile", "-NonInteractive", "-ExecutionPolicy", "Bypass",
      "-File", fileURLToPath(new URL("./owned-command-windows.ps1", import.meta.url)), pipeName,
    ], { cwd: options.cwd, env: process.env, windowsHide: true,
      stdio: options.inherit ? "inherit" : ["ignore", "pipe", "pipe"] });
    observe(helper);
    helper.once("spawn", () => Atomics.store(shared, 3, helper.pid));
    helper.once("error", (error) => { fail(error); finish(); });
    helper.once("close", (code, signal) => {
      Atomics.store(shared, 3, 0);
      if (code !== 0 || signal !== null) {
        helperExitError = { code: "EOWNERNATIVE", message: `Windows adapter failed (${signal ?? code})` };
      }
      helperClosed = true;
      maybeFinish();
    });
  });
  startupTimer = setTimeout(() => {
    fail(Object.assign(new Error("Windows command adapter startup timed out"), { code: "EOWNERSTART" }));
  }, startupMs);
  return { stop, completion };
}

if (workerData?.ownedCommand === true) {
  const { port, shared } = workerData;
  let result;
  try { result = await supervise(workerData); } catch (error) {
    result = { ...emptyResult(), error: errorData(error) };
  }
  port.postMessage({ type: "result", result });
  Atomics.add(shared, 0, 1);
  Atomics.notify(shared, 0);
  port.close();
}
