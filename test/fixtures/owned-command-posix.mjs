import { spawn } from "node:child_process";
import { existsSync, readFileSync, renameSync, writeFileSync } from "node:fs";
import { createServer } from "node:net";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { Worker } from "node:worker_threads";

const [mode, root] = process.argv.slice(2);
const receipt = (name, value) => {
  const target = path.join(root, name);
  writeFileSync(`${target}.pending`, JSON.stringify(value));
  renameSync(`${target}.pending`, target);
};

if (mode === "overflow" || mode === "timeout") {
  setTimeout(() => process.exit(98), 15_000).unref();
  const server = createServer({ allowHalfOpen: true }, (socket) => {
    socket.once("end", () => process.exit(0));
    socket.resume();
  });
  await new Promise((resolve) => server.listen(path.join(root, "rescue.sock"), resolve));
  receipt("command.json", { pid: process.pid });
  if (mode === "overflow") process.stdout.write(Buffer.alloc(65, "a"));
} else if (mode === "gated-child") {
  const deadline = Date.now() + 12_000;
  const timer = setInterval(() => {
    const gate = path.join(root, "child-release");
    if (!existsSync(gate) && Date.now() < deadline) return;
    const reason = existsSync(gate) ? readFileSync(gate, "utf8") : "expiry";
    clearInterval(timer);
    receipt("child-exiting.json", { pid: process.pid, reason });
    process.exit(reason === "normal" ? 0 : 98);
  }, 10);
} else if (mode === "zombie-parent") {
  const child = spawn(process.execPath, [fileURLToPath(import.meta.url), "gated-child", root], {
    detached: true, stdio: "ignore",
  });
  child.once("exit", (code, signal) => receipt("reaped.json", { pid: child.pid, code, signal }));
  child.once("close", (code, signal) => receipt("child-closed.json", { pid: child.pid, code, signal }));
  child.once("spawn", () => {
    const shared = new Int32Array(new SharedArrayBuffer(4));
    const watcher = new Worker(`
      const { workerData } = require("node:worker_threads");
      const { existsSync } = require("node:fs");
      const { join } = require("node:path");
      const { root, shared } = workerData;
      const timer = setInterval(() => {
        const released = existsSync(join(root, "parent-release"));
        const rescued = existsSync(join(root, "parent-rescue"));
        if (!released && !rescued) return;
        clearInterval(timer);
        Atomics.store(shared, 0, released ? 1 : 2);
        Atomics.notify(shared, 0);
      }, 10);
    `, { eval: true, workerData: { root, shared } });
    // No event-loop yield occurs between this receipt and the finite park.
    // The external test gates child exit until it has observed the receipt.
    receipt("parked.json", { pid: process.pid, childPid: child.pid });
    Atomics.wait(shared, 0, 0, 12_000);
    const state = Atomics.load(shared, 0);
    receipt("unparked.json", { reason: state === 1 ? "normal" : state === 2 ? "rescue" : "expiry" });
    if (state !== 1) process.exitCode = 98;
    void watcher.terminate();
  });
} else {
  throw new Error(`unknown owned-command fixture mode: ${mode}`);
}
