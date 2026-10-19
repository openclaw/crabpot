import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { test } from "node:test";
import { admitImportScreening, importProducerFiles, prepareImportScreening } from "../scripts/import-screening.mjs";
import { parseArgs } from "../scripts/prepare-resource-inputs.mjs";
import { buildResourceCoverage, readResourceCoverage, renderResourceCoverageMarkdown } from "../scripts/resource-coverage.mjs";

const hash = (value) => createHash("sha256").update(value).digest("hex");
const stable = (value) => Array.isArray(value) ? `[${value.map(stable).join(",")}]` : value && typeof value === "object"
  ? `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${stable(value[key])}`).join(",")}}` : JSON.stringify(value);
const commit = "a".repeat(40);
const tree = "b".repeat(40);
const runtime = { node: process.version, v8: process.versions.v8, abi: process.versions.modules, platform: process.platform, arch: process.arch };
const sourceBytes = "throw new Error('must never execute during preparation');";

function fixture() {
  const plugins = [["kimi", "kimi-coding", "core"], ["msteams", "msteams", "external"], ["unselected", "unselected", "source"]].map(([id, dir, distribution]) => ({
    id, path: `extensions/${dir}`, manifestPath: `extensions/${dir}/openclaw.plugin.json`, distribution, declaredSurfaces: {}, package: null,
  }));
  const payload = { schemaVersion: 1, scope: "source-manifests", source: { kind: "git-tree", commit, tree }, plugins };
  const inventory = { ...payload, sha256: hash(stable(payload)) };
  const buildBytes = JSON.stringify({ commit });
  const entries = ["dist/extensions/kimi-coding/index.js", "dist/extensions/msteams/index.cjs"].map((file) => ({ path: file, bytes: Buffer.byteLength(sourceBytes), sha256: hash(sourceBytes) }));
  const snapshot = { source: { commit, tree, trackedClean: true }, build: { path: "dist/build-info.json", sha256: hash(buildBytes), bytes: Buffer.byteLength(buildBytes), declaredCommit: commit }, entries };
  const row = (completion, user, system, rss) => ({ status: "ok", code: 0, signal: null, error: null, completion,
    maxRssMb: rss, resources: { maxRssKb: rss * 1024, userCpuUs: user, systemCpuUs: system, totalCpuUs: user + system, runtime: { ...runtime, platform: "linux" } },
    cleanup: { childClosed: true, processGroup: "verified" } });
  const delta = { userCpuUs: -10, systemCpuUs: -2, totalCpuUs: -12 };
  const report = { schemaVersion: 2, scope: "cold-import", repoRoot: "/fixture/host",
    measurement: { cpu: "child-process-through-exit-hook-microseconds", rss: "process-peak-MiB", termination: "explicit-process-exit" },
    qualification: { qualified: true, gaps: [], scope: "cold-import-snapshot", temporaryHomeRemoved: true },
    provenance: { before: snapshot, after: structuredClone(snapshot), dependencyClosure: "not-attested" },
    selectedExtensions: ["kimi-coding", "msteams"], counts: { totalEntries: 2, ok: 2, fail: 0, timeout: 0 },
    baseline: row("baseline", 100, 20, 60), options: { skipCombined: false },
    results: entries.map((entry, index) => ({ ...row("imports", 90, 18, 55), dir: ["kimi-coding", "msteams"][index], file: `/fixture/host/${entry.path}`, relativeFile: entry.path,
      cpuDeltaFromBaseline: delta, deltaFromBaselineMb: -5 })),
    combined: { ...row("imports", 140, 25, 80), cpuDeltaFromBaseline: { userCpuUs: 40, systemCpuUs: 5, totalCpuUs: 45 } },
  };
  const pins = { schemaVersion: 1, hostCommit: commit,
    runtime: { node: runtime.node, platform: "linux", arch: runtime.arch },
    files: { host: Object.fromEntries([...importProducerFiles.map((file) => [file, hash(sourceBytes)]), ["dist/build-info.json", hash(buildBytes)], ...entries.map((entry) => [entry.path, entry.sha256])]) },
    importScreening: { schemaVersion: 1, inventorySha256: inventory.sha256, runtime: { ...runtime, platform: "linux" }, receipts: [] },
  };
  function bind() {
    const content = JSON.stringify(report);
    pins.importScreening.receipts = [{ pluginIds: ["kimi", "msteams"], content, sha256: hash(content), bytes: Buffer.byteLength(content) }];
    return Buffer.from(JSON.stringify(pins));
  }
  return { inventory, report, pins, bind, buildBytes, entries };
}
const coverageArgs = (inventory) => ({ inventory, configuredFixtureCount: 4, selectedFixtureCount: 1,
  resourceWorkloads: [{ id: "kimi-work", pluginId: "kimi" }] });

test("multiple directory-mapped entries screen the full inventory without workload credit", () => {
  const f = fixture(); const args = coverageArgs(f.inventory);
  const baseline = buildResourceCoverage(args);
  const inputs = f.bind();
  const result = buildResourceCoverage({ ...args, importScreeningInputs: [inputs] });
  assert.deepEqual(result.summary, baseline.summary);
  assert.deepEqual(result.plugins.map(({ status, reason }) => ({ status, reason })), baseline.plugins.map(({ status, reason }) => ({ status, reason })));
  assert.deepEqual(result.screening.summary, { screened: 2, blocked: 1 });
  assert.deepEqual(result.plugins[2].screening, { status: "blocked", reason: "no-qualified-built-entry-receipt" });
  const receipt = result.screening.receipts[0];
  assert.deepEqual(receipt.plugins.map(({ pluginId }) => pluginId), ["kimi", "msteams"]);
  assert.equal(receipt.plugins[1].entry.path, "dist/extensions/msteams/index.cjs");
  assert.equal(receipt.plugins[0].measured.deltaFromBaselineMb, -5);
  assert.equal(receipt.plugins[0].measured.cpuDeltaFromBaseline.totalCpuUs, -12);
  assert.equal(receipt.combined.deltaFromBaselineMb, 20);
  assert.equal(receipt.combined.resources.totalCpuUs, 165);
  assert.equal(receipt.provenance.inputsSha256, hash(inputs));
  assert.equal(receipt.provenance.kind, "supplied-evidence");
  assert.equal(receipt.provenance.dependencyClosure, "not-attested");
  assert.match(renderResourceCoverageMarkdown(result), /Cold-import screening: \*\*2\*\* screened; \*\*1\*\* blocked/);
});

for (const [name, change] of [
  ["qualification", (f) => { f.report.qualification.qualified = false; }],
  ["missing source", (f) => { f.report.provenance.before.source = null; f.report.provenance.after.source = null; }],
  ["stale commit", (f) => { f.report.provenance.before.source.commit = "c".repeat(40); f.report.provenance.after = structuredClone(f.report.provenance.before); }],
  ["dirty source", (f) => { f.report.provenance.before.source.trackedClean = false; f.report.provenance.after = structuredClone(f.report.provenance.before); }],
  ["mutated snapshot", (f) => { f.report.provenance.after.entries[0].sha256 = "c".repeat(64); }],
  ["wrong entry pin", (f) => { f.pins.files.host[f.entries[0].path] = "c".repeat(64); }],
  ["missing producer pin", (f) => { delete f.pins.files.host[importProducerFiles[0]]; }],
  ["missing counter", (f) => { delete f.report.results[0].resources.userCpuUs; }],
  ["missing native RSS", (f) => { delete f.report.results[0].resources.maxRssKb; }],
  ["negative native RSS", (f) => { f.report.results[0].resources.maxRssKb = -1; }],
  ["fractional native RSS", (f) => { f.report.results[0].resources.maxRssKb = 1.5; }],
  ["RSS counter mismatch with consistent delta", (f) => { f.report.results[0].maxRssMb++; f.report.results[0].deltaFromBaselineMb++; }],
  ["baseline RSS counter mismatch", (f) => { f.report.baseline.resources.maxRssKb++; }],
  ["combined RSS counter mismatch", (f) => { f.report.combined.maxRssMb++; }],
  ["invalid counter sum", (f) => { f.report.results[0].resources.totalCpuUs++; }],
  ["clamped CPU delta", (f) => { f.report.results[0].cpuDeltaFromBaseline.totalCpuUs = 0; }],
  ["clamped RSS delta", (f) => { f.report.results[0].deltaFromBaselineMb = 0; }],
  ["baseline incomplete", (f) => { f.report.baseline.completion = null; }],
  ["early exit", (f) => { f.report.results[0].completion = null; }],
  ["combined early exit", (f) => { f.report.combined.completion = null; }],
  ["cleanup unavailable", (f) => { f.report.results[0].cleanup.processGroup = "unavailable"; }],
  ["home cleanup failure", (f) => { f.report.qualification.temporaryHomeRemoved = false; }],
  ["package-local entry", (f) => { f.report.results[0].relativeFile = "extensions/kimi-coding/index.js"; }],
  ["missing portable entry", (f) => { delete f.report.results[0].relativeFile; }],
  ["absolute portable entry", (f) => { f.report.results[0].relativeFile = f.report.results[0].file; }],
  ["unknown directory", (f) => { f.report.selectedExtensions[0] = f.report.results[0].dir = "other"; }],
  ["duplicate directory", (f) => { f.report.selectedExtensions[1] = f.report.results[1].dir = "kimi-coding"; }],
  ["undeclared runtime field", (f) => { f.pins.importScreening.runtime.extra = "private diagnostic"; }],
  ["Windows", (f) => { f.pins.importScreening.runtime.platform = f.pins.runtime.platform = "win32"; }],
  ["stale inventory", (f) => { f.pins.importScreening.inventorySha256 = "c".repeat(64); }],
  ["runtime drift", (f) => { f.report.results[0].resources.runtime.abi = "other"; }],
]) test(`screening rejects ${name} even with refreshed receipt hash`, () => {
  const f = fixture(); change(f);
  assert.throws(() => admitImportScreening(f.bind(), f.inventory), /import screening:/);
});

test("raw-byte mutation and repeated evidence cannot add coverage", () => {
  const f = fixture(); const bytes = f.bind();
  f.pins.importScreening.receipts[0].content += " ";
  assert.throws(() => admitImportScreening(Buffer.from(JSON.stringify(f.pins)), f.inventory), /receipt bytes differ/);
  f.bind(); f.pins.importScreening.receipts.push(f.pins.importScreening.receipts[0]);
  assert.throws(() => admitImportScreening(Buffer.from(JSON.stringify(f.pins)), f.inventory), /repeated receipt/);
  assert.throws(() => buildResourceCoverage({ ...coverageArgs(f.inventory), importScreeningInputs: [bytes, bytes] }), /duplicate screening plugin/);
});

test("disjoint receipts preserve independent baselines and combined selections", () => {
  const f = fixture(); const pins = f.pins;
  pins.importScreening.receipts = [0, 1].map((index) => {
    const report = structuredClone(f.report);
    report.selectedExtensions = [report.selectedExtensions[index]];
    report.results = [report.results[index]];
    report.provenance.before.entries = [report.provenance.before.entries[index]];
    report.provenance.after.entries = [report.provenance.after.entries[index]];
    report.counts.totalEntries = report.counts.ok = 1;
    report.options.skipCombined = true; report.combined = null;
    const content = JSON.stringify(report);
    return { pluginIds: [["kimi", "msteams"][index]], content, sha256: hash(content), bytes: Buffer.byteLength(content) };
  });
  const result = buildResourceCoverage({ ...coverageArgs(f.inventory), importScreeningInputs: [Buffer.from(JSON.stringify(pins))] });
  assert.equal(result.screening.receipts.length, 2);
  assert.deepEqual(result.screening.summary, { screened: 2, blocked: 1 });
  assert.ok(result.screening.receipts.every((receipt) => receipt.combined === null && receipt.baseline.resources.totalCpuUs === 120));
});

test("public projection excludes raw diagnostics and undeclared receipt fields", () => {
  const f = fixture();
  f.report.results[0].stderr = "private diagnostic";
  f.report.results[0].resources.extra = "private diagnostic";
  f.report.provenance.before.entries[0].extra = "private diagnostic";
  f.report.provenance.after = structuredClone(f.report.provenance.before);
  const result = admitImportScreening(f.bind(), f.inventory);
  assert.doesNotMatch(JSON.stringify(result), /private diagnostic|content|stderr|\/fixture\/host/);
  f.report.options.skipCombined = true; f.report.combined = null;
  assert.equal(admitImportScreening(f.bind(), f.inventory)[0].combined, null);
});

test("preparation pins actual files without importing them, then existing report input reads the envelope", (t) => {
  // Preparation describes this runtime; the producer intentionally cannot qualify Windows.
  if (process.platform === "win32") return t.skip("producer process-group qualification is POSIX-only");
  const f = fixture(); const root = mkdtempSync(path.join(os.tmpdir(), "import-screening-"));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const put = (file, bytes) => { mkdirSync(path.dirname(file), { recursive: true }); writeFileSync(file, bytes); };
  for (const file of [...importProducerFiles, ...f.entries.map(({ path }) => path)]) put(path.join(root, file), sourceBytes);
  put(path.join(root, "dist/build-info.json"), f.buildBytes);
  for (const row of [f.report.baseline, ...f.report.results, f.report.combined]) row.resources.runtime = runtime;
  f.pins.runtime.platform = process.platform;
  const reportPath = path.join(root, "receipt.json"); put(reportPath, JSON.stringify(f.report));
  prepareImportScreening(f.pins, f.inventory, root, [reportPath]);
  const inputPath = path.join(root, "inputs.json"); put(inputPath, JSON.stringify(f.pins));
  const inventoryPath = path.join(root, "inventory.json"); put(inventoryPath, JSON.stringify(f.inventory));
  const result = readResourceCoverage({ ...coverageArgs(f.inventory), pluginInventoryPath: inventoryPath, importScreeningInputPaths: [inputPath] });
  assert.equal(result.screening.summary.screened, 2);
  assert.equal(f.pins.importScreening.receipts[0].content, readFileSync(reportPath, "utf8"));
  put(path.join(root, f.entries[0].path), "changed source");
  assert.throws(() => prepareImportScreening(f.pins, f.inventory, root, [reportPath]), /entry differs|entry byte count differs/);
  assert.throws(() => readResourceCoverage({ importScreeningInputPaths: [inputPath] }), /require --plugin-inventory/);
});

test("existing preparation CLI accepts repeated cold-import report inputs", () => {
  const args = parseArgs(["--plugin-inventory", "inventory", "--host-root", "host", "--out", "pins",
    "--cold-import-report", "first.json", "--cold-import-report", "second.json"]);
  assert.deepEqual(args.coldImportReportPaths, ["first.json", "second.json"]);
});
