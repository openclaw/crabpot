import fs from "node:fs";
import path from "node:path";

const prefix = "CRABPOT_CLEANUP_DIAG ";
let roots;
let canonicalRoots;
let emittedBytes = 0;
let overflow = false;

export function record(event, fields = {}) {
  const line = `${prefix}${JSON.stringify({ event, pid: process.pid, ...fields })}\n`;
  if (emittedBytes + Buffer.byteLength(line) > 256 * 1024) {
    if (!overflow) { try { fs.writeSync(2, `${prefix}${JSON.stringify({ event: "observer-overflow", pid: process.pid })}\n`); } catch {} }
    overflow = true;
    return;
  }
  emittedBytes += Buffer.byteLength(line);
  try { fs.writeSync(2, line); } catch { overflow = true; }
}

export function errorData(error) {
  return Object.fromEntries(["name", "message", "code", "errno", "syscall", "path", "stack"]
    .filter((key) => error?.[key] !== undefined)
    .map((key) => [key, String(error[key]).slice(0, key === "stack" ? 4096 : 1024)]));
}

export function setRoots(pluginRoot, stateRoot) {
  roots = { pluginRoot, stateRoot };
  canonicalRoots = Object.fromEntries(Object.entries(roots).map(([name, root]) => {
    try { return [name, fs.realpathSync.native(root)]; } catch { return [name, root]; }
  }));
  record("roots", roots);
}

function relativeOwned(value) {
  if (typeof value !== "string" || !roots) return null;
  for (const [name, root] of [...Object.entries(roots), ...Object.entries(canonicalRoots)]) {
    const relative = path.relative(root, value);
    if (relative === "" || (!relative.startsWith(`..${path.sep}`) && relative !== ".." && !path.isAbsolute(relative))) {
      return `${name}/${relative.replaceAll("\\", "/")}`.slice(0, 512);
    }
  }
  return null;
}

function inventory(root) {
  const entries = [];
  const queue = [root];
  let truncated = false;
  const until = performance.now() + 500;
  while (queue.length) {
    if (entries.length >= 128 || performance.now() >= until) { truncated = true; break; }
    const current = queue.shift();
    try {
      const stat = fs.lstatSync(current);
      entries.push({ path: relativeOwned(current), type: stat.isSymbolicLink() ? "symlink" : stat.isDirectory() ? "directory" : "file", size: stat.size });
      if (stat.isDirectory() && !stat.isSymbolicLink()) {
        for (const name of fs.readdirSync(current).sort()) {
          if (queue.length + entries.length >= 128) { truncated = true; break; }
          queue.push(path.join(current, name));
        }
      }
    } catch (error) { entries.push({ path: relativeOwned(current), error: errorData(error) }); }
  }
  return { entries, truncated };
}

function collectSnapshot(event) {
  const state = globalThis[Symbol.for("openclaw.stateDatabaseLifecycle")];
  const captures = globalThis[Symbol.for("openclaw.pluginSourceCaptureInstances")];
  const databases = [];
  for (const [kind, map] of [["cached", state?.cachedDatabases], ["retained", state?.retainedDatabaseHandles]]) {
    if (!(map instanceof Map)) continue;
    for (const value of map.values()) {
      if (databases.length >= 32) break;
      const location = relativeOwned(value?.path);
      if (location) databases.push({ kind, path: location, isOpen: value.db.isOpen });
    }
  }
  const instances = [];
  if (captures?.instances instanceof Map) {
    for (const value of captures.instances.values()) {
      if (instances.length >= 32) break;
      const root = relativeOwned(value.root);
      if (root) instances.push({ root, managedRoot: relativeOwned(value.managedRoot), references: value.references.size,
        pendingNative: value.pendingNative.size, closing: value.closing === true, tokenPresent: typeof value.token === "function" });
    }
  }
  record(event, { databases, instances, roots: Object.fromEntries(Object.entries(roots ?? {}).map(([name, root]) => [name, inventory(root)])) });
}

export function snapshot(event) {
  try { collectSnapshot(event); } catch (error) { record("observer-error", { phase: event, error: errorData(error) }); }
}

globalThis[Symbol.for("crabpot.cleanupDiagnostic")] = (event, location, isOpen) => {
  const relative = relativeOwned(location);
  if (relative) record(event, { path: relative, isOpen });
};
