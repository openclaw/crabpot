import { mkdirSync, renameSync, writeFileSync } from "node:fs";
import path from "node:path";
import { parentPort, workerData } from "node:worker_threads";

export const configuredTimeoutMs = (_name, fallback) => fallback;
export function runOwnedCommand(command, args, options) {
  const { root, ref, mode, shared } = workerData;
  const parent = path.join(root, ".crabpot", "plugin-inspector");
  const checkout = path.join(parent, ref);
  const success = { status: 0, stdout: "", stderr: "", signal: null };
  if (command === "git" && args.includes("rev-parse")) return { ...success, stdout: `${ref}\n` };
  const active = Atomics.add(shared, 2, 1) + 1;
  Atomics.store(shared, 3, Math.max(active, Atomics.load(shared, 3)));
  try {
    if (mode === `${command}-cleanup`) return {
      ...success, status: null, error: Object.assign(new Error("primary command failure"), { code: "ETIMEDOUT" }),
      cleanupError: { code: "EOWNERCLEANUP", message: "command group closure not confirmed" },
    };
    if (mode === `${command}-failure`) return { ...success, status: 7 };
    if (command === "git") {
      if (args.includes("checkout")) {
        mkdirSync(path.join(checkout, "src"), { recursive: true });
        writeFileSync(path.join(checkout, "src", "index.js"), "export {};\n");
      }
      return success;
    }
    if (command !== "npm" || options.cwd !== checkout) throw new Error("unexpected checkout command");
    Atomics.add(shared, 0, 1);
    parentPort.postMessage({ type: "install" });
    if (mode === "npm-timeout") return {
      ...success, status: null, error: Object.assign(new Error("timed out"), { code: "ETIMEDOUT" }),
    };
    if (mode === "hold" && Atomics.wait(shared, 1, 0, 5000) === "timed-out") throw new Error("fixture release was not observed");
    if (mode.startsWith("replacement")) {
      const lock = path.join(parent, ".checkout.lock");
      renameSync(lock, `${lock}.former`);
      mkdirSync(lock);
      writeFileSync(path.join(lock, "foreign-owner"), "retained");
    }
    if (mode === "replacement-failure") return { ...success, status: 7 };
    mkdirSync(path.join(checkout, "node_modules"), { recursive: true });
    return success;
  } finally {
    Atomics.sub(shared, 2, 1);
  }
}
