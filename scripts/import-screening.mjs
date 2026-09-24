import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import path from "node:path";
import { isDeepStrictEqual } from "node:util";

export const importProducerFiles = [
  "scripts/profile-extension-memory.mts", "scripts/lib/extension-import-profile.mts",
  "scripts/ensure-extension-memory-build.mts", "scripts/lib/managed-child-process.mts",
];
const digest = /^[a-f0-9]{64}$/;
const record = (value) => value !== null && typeof value === "object" && !Array.isArray(value);
const hash = (bytes) => createHash("sha256").update(bytes).digest("hex");
const requireValue = (condition, message) => assert.ok(condition, `import screening: ${message}`);
const equal = (actual, expected, message) => requireValue(isDeepStrictEqual(actual, expected), message);
const relative = (file) => typeof file === "string" && file.length > 0 && !path.posix.isAbsolute(file) &&
  !path.win32.isAbsolute(file) && !file.includes("\\") && !file.split("/").some((part) => ["", ".", ".."].includes(part));
const runtimeIdentity = () => ({ node: process.version, v8: process.versions.v8, abi: process.versions.modules,
  platform: process.platform, arch: process.arch });

function parseReceipt(content, expectedHash, expectedBytes) {
  requireValue(typeof content === "string" && Buffer.byteLength(content) <= 16 * 1024 * 1024, "receipt must be bounded UTF-8 JSON");
  requireValue(digest.test(expectedHash) && hash(content) === expectedHash && Buffer.byteLength(content) === expectedBytes, "receipt bytes differ from pins");
  const report = JSON.parse(content);
  requireValue(record(report) && report.schemaVersion === 2 && report.scope === "cold-import", "expected cold-import schema 2");
  equal(report.measurement, { cpu: "child-process-through-exit-hook-microseconds", rss: "process-peak-MiB", termination: "explicit-process-exit" }, "measurement contract differs");
  equal(report.qualification, { qualified: true, gaps: [], scope: "cold-import-snapshot", temporaryHomeRemoved: true }, "unqualified receipt");
  requireValue(Array.isArray(report.selectedExtensions) && report.selectedExtensions.length > 0 &&
    Array.isArray(report.results) && report.results.length === report.selectedExtensions.length, "selected entries and results differ");
  equal(report.results.map((row) => row.dir), report.selectedExtensions, "selected directory order differs");
  equal(report.counts, { totalEntries: report.results.length, ok: report.results.length, fail: 0, timeout: 0 }, "receipt counts differ");
  return report;
}

function observation(row, runtime, completion) {
  requireValue(record(row) && row.status === "ok" && row.code === 0 && row.signal === null && row.error === null && row.completion === completion, "case lacks successful awaited completion");
  equal(row.cleanup, { childClosed: true, processGroup: "verified" }, "case cleanup is incomplete");
  requireValue(Number.isFinite(row.maxRssMb) && row.maxRssMb >= 0, "peak RSS unavailable");
  const cpu = row.resources;
  requireValue(record(cpu) && ["userCpuUs", "systemCpuUs", "totalCpuUs"].every((key) => Number.isSafeInteger(cpu[key]) && cpu[key] >= 0) && cpu.totalCpuUs === cpu.userCpuUs + cpu.systemCpuUs, "CPU counters do not reconcile");
  equal(cpu.runtime, runtime, "runtime differs from prepared inputs");
  return { maxRssMb: row.maxRssMb, resources: { userCpuUs: cpu.userCpuUs, systemCpuUs: cpu.systemCpuUs, totalCpuUs: cpu.totalCpuUs, runtime }, completion: row.completion, cleanup: row.cleanup };
}

function withDelta(row, baseline, runtime) {
  const measured = observation(row, runtime, "imports");
  const cpuDeltaFromBaseline = Object.fromEntries(["userCpuUs", "systemCpuUs", "totalCpuUs"].map((key) =>
    [key, measured.resources[key] - baseline.resources[key]]));
  equal(row.cpuDeltaFromBaseline, cpuDeltaFromBaseline, "CPU baseline delta differs");
  const deltaFromBaselineMb = measured.maxRssMb - baseline.maxRssMb;
  // Combined is its own process and the producer does not emit its RSS delta.
  if (Object.hasOwn(row, "deltaFromBaselineMb")) equal(row.deltaFromBaselineMb, deltaFromBaselineMb, "RSS baseline delta differs");
  return { ...measured, cpuDeltaFromBaseline, deltaFromBaselineMb };
}

/** Admit supplied evidence only. Pinning files does not attest that they executed. */
export function admitImportScreening(inputBytes, inventory) {
  const pins = JSON.parse(inputBytes.toString());
  requireValue(pins?.schemaVersion === 1 && pins.hostCommit === inventory.source.commit, "prepared host source differs");
  const prepared = pins.importScreening;
  requireValue(record(prepared) && prepared.schemaVersion === 1 && prepared.inventorySha256 === inventory.sha256, "prepared inventory differs");
  const runtime = prepared.runtime;
  requireValue(record(runtime) && ["node", "v8", "abi", "platform", "arch"].every((key) => typeof runtime[key] === "string" && runtime[key].length > 0), "prepared runtime unavailable");
  equal(runtime, Object.fromEntries(["node", "v8", "abi", "platform", "arch"].map((key) => [key, runtime[key]])), "unexpected runtime fields");
  requireValue(runtime.platform !== "win32", "Windows producer has no qualified process-group proof");
  equal(pins.runtime, { node: runtime.node, platform: runtime.platform, arch: runtime.arch }, "prepared runtimes disagree");
  const host = pins.files?.host;
  requireValue(record(host) && [...importProducerFiles, "dist/build-info.json"].every((file) => digest.test(host[file])), "producer/build pins unavailable");
  requireValue(Array.isArray(prepared.receipts) && prepared.receipts.length > 0 && prepared.receipts.length <= inventory.plugins.length, "invalid receipt count");
  const ids = new Set(); const receipts = new Set();
  return prepared.receipts.map((receipt) => {
    requireValue(record(receipt) && !receipts.has(receipt.sha256), "repeated receipt");
    receipts.add(receipt.sha256);
    const report = parseReceipt(receipt.content, receipt.sha256, receipt.bytes);
    const before = report.provenance?.before;
    equal(report.provenance?.after, before, "source/build/entry snapshots changed");
    requireValue(record(before), "missing input snapshot");
    equal(before.source, { commit: inventory.source.commit, tree: inventory.source.tree, trackedClean: true }, "receipt source differs from inventory");
    requireValue(before.build?.path === "dist/build-info.json" && before.build.declaredCommit === inventory.source.commit &&
      before.build.sha256 === host["dist/build-info.json"] && Number.isSafeInteger(before.build.bytes) && before.build.bytes > 0, "build identity differs");
    requireValue(Array.isArray(before.entries) && before.entries.length === report.results.length, "entry snapshots differ");
    requireValue(report.provenance.dependencyClosure === "not-attested", "unexpected dependency-closure claim");
    const baseline = observation(report.baseline, runtime, "baseline");
    requireValue(Array.isArray(receipt.pluginIds) && receipt.pluginIds.length === report.results.length, "prepared plugin mapping differs");
    const plugins = report.results.map((row, index) => {
      const dir = report.selectedExtensions[index];
      const plugin = inventory.plugins.find((item) => item.path === `extensions/${dir}`);
      requireValue(plugin && plugin.id === receipt.pluginIds?.[index] && !ids.has(plugin.id), "unknown or duplicate inventory mapping");
      ids.add(plugin.id);
      requireValue(relative(row.file) && row.file.startsWith(`dist/extensions/${dir}/`) && /\.[cm]?js$/u.test(row.file), "unqualified built entry path");
      const entry = before.entries[index];
      requireValue(entry.path === row.file && digest.test(entry.sha256) && entry.sha256 === host[row.file] &&
        Number.isSafeInteger(entry.bytes) && entry.bytes >= 0, "entry differs from prepared bytes");
      requireValue(Object.hasOwn(row, "deltaFromBaselineMb"), "missing RSS delta");
      return { pluginId: plugin.id, entry: { path: entry.path, sha256: entry.sha256, bytes: entry.bytes }, measured: withDelta(row, baseline, runtime) };
    });
    requireValue(typeof report.options?.skipCombined === "boolean" && (report.options.skipCombined ? report.combined === null : record(report.combined)), "combined selection differs");
    const combined = report.combined === null ? null : withDelta(report.combined, baseline, runtime);
    return {
      status: "screened", reason: "qualified-cold-import", scope: "cold-import",
      plugins, baseline, combined,
      provenance: { kind: "supplied-evidence", inputsSha256: hash(inputBytes), receiptSha256: receipt.sha256,
        inventorySha256: inventory.sha256, source: { commit: inventory.source.commit, tree: inventory.source.tree, kind: inventory.source.kind },
        build: { path: before.build.path, sha256: before.build.sha256, bytes: before.build.bytes, declaredCommit: before.build.declaredCommit }, runtime,
        producerFiles: Object.fromEntries(importProducerFiles.map((file) => [file, host[file]])), dependencyClosure: "not-attested" },
    };
  });
}

/** Extend the existing prepared-input envelope by reading bytes, never importing them. */
export function prepareImportScreening(pins, inventory, hostRoot, reportPaths) {
  pins.importScreening = { schemaVersion: 1, inventorySha256: inventory.sha256, runtime: runtimeIdentity(), receipts: [] };
  for (const file of importProducerFiles) pins.files.host[file] = hash(readFileSync(path.join(hostRoot, file)));
  for (const reportPath of reportPaths) {
    const bytes = readFileSync(reportPath);
    const content = bytes.toString("utf8");
    requireValue(Buffer.from(content).equals(bytes), "receipt is not UTF-8");
    const report = parseReceipt(content, hash(bytes), bytes.length);
    requireValue(report.provenance?.before?.build?.bytes === readFileSync(path.join(hostRoot, "dist/build-info.json")).length, "build byte count differs");
    const pluginIds = report.results.map((row, index) => {
      const dir = report.selectedExtensions[index];
      const plugin = inventory.plugins.find((entry) => entry.path === `extensions/${dir}`);
      requireValue(plugin, "selected directory is absent from inventory");
      const file = row.file;
      requireValue(relative(file) && file.startsWith(`dist/extensions/${dir}/`), "entry is outside built plugin output");
      const entryBytes = readFileSync(path.join(hostRoot, file));
      requireValue(report.provenance?.before?.entries?.[index]?.bytes === entryBytes.length, "entry byte count differs");
      pins.files.host[file] = hash(entryBytes);
      return plugin.id;
    });
    pins.importScreening.receipts.push({ pluginIds, sha256: hash(bytes), bytes: bytes.length, content });
  }
  admitImportScreening(Buffer.from(JSON.stringify(pins)), inventory);
}
