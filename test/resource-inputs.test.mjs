import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { createHash } from "node:crypto";
import { existsSync, mkdtempSync, mkdirSync, readFileSync, rmSync, symlinkSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { test } from "node:test";
import { assertResourceRuntime, parseArgs, prepareResourceInputs, writeResourceInputPins } from "../scripts/prepare-resource-inputs.mjs";
import { resourceHostFiles, resourceConsumerFiles, verifyPreparedInputs } from "../scripts/run-resource-campaign.mjs";

const digest = (value) => createHash("sha256").update(value).digest("hex");
const commit = "a".repeat(40);
function fixture(t) {
  const root = mkdtempSync(path.join(os.tmpdir(), "resource-inputs-"));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const hostRoot = path.join(root, "host"); const consumerRoot = path.join(root, "consumer");
  const put = (file, bytes) => { mkdirSync(path.dirname(file), { recursive: true }); writeFileSync(file, bytes); };
  for (const [dir, names] of [[hostRoot, [...resourceHostFiles, "dist/index.mjs"]], [consumerRoot, resourceConsumerFiles]]) {
    for (const name of names) put(path.join(dir, name), "throw new Error('must not execute');");
  }
  put(path.join(hostRoot, "dist/build-info.json"), JSON.stringify({ commit }));
  const manifest = JSON.parse(readFileSync(new URL("../crabpot.config.json", import.meta.url)));
  manifest.resourceWorkloads = ["present", "absent"].map((id) => ({ id, pluginId: id, adapter: id, requiredOperations: { work: 1 }, why: "test" }));
  put(path.join(consumerRoot, "crabpot.config.json"), JSON.stringify(manifest));
  put(path.join(consumerRoot, "scripts/resource-workloads/present.mjs"), "throw new Error('must not execute adapter');");
  const payload = { plugins: [], schemaVersion: 1, scope: "source-manifests", source: { commit, kind: "git-tree", tree: "b".repeat(40) } };
  const inventory = { ...payload, sha256: digest(JSON.stringify(payload)) };
  const inventoryPath = path.join(root, "inventory.json"); put(inventoryPath, JSON.stringify(inventory));
  const archives = [path.join(root, "plugin.tgz")]; put(archives[0], "synthetic archive bytes");
  return { root, hostRoot, consumerRoot, inventoryPath, archives, inventory, manifest, out: path.join(root, "pins.json") };
}

test("prepared local bytes produce pins accepted by the campaign without executing them", (t) => {
  const f = fixture(t); const pins = prepareResourceInputs(f, f.consumerRoot);
  writeResourceInputPins(f.out, pins);
  assert.deepEqual(JSON.parse(readFileSync(f.out)), pins);
  assert.deepEqual(pins.runtime, { node: process.version, platform: process.platform, arch: process.arch });
  assert.equal(pins.files.host["dist/index.mjs"], digest("throw new Error('must not execute');"));
  assert.ok(pins.files.crabpot["scripts/resource-workloads/present.mjs"]);
  assert.equal(pins.files.crabpot["scripts/resource-workloads/absent.mjs"], undefined);
  assert.deepEqual(pins.artifacts, [{ path: f.archives[0], sha256: digest("synthetic archive bytes") }]);
  verifyPreparedInputs(pins, f.manifest.resourceWorkloads, f.inventory, f.hostRoot, f.consumerRoot);
  assert.deepEqual(prepareResourceInputs({ ...f, archives: [] }, f.consumerRoot).artifacts, []);
});

for (const target of ["entry", "adapter", "archive", "helper"]) test(`campaign rejects ${target} mutation after preparation`, (t) => {
  const f = fixture(t); const pins = prepareResourceInputs(f, f.consumerRoot);
  const file = target === "helper" ? path.join(f.consumerRoot, "scripts/resource-workloads/paired-node.mjs") : target === "entry" ? path.join(f.hostRoot, "dist/index.mjs") : target === "adapter"
    ? path.join(f.consumerRoot, "scripts/resource-workloads/present.mjs") : f.archives[0];
  writeFileSync(file, "changed");
  assert.throws(() => verifyPreparedInputs(pins, f.manifest.resourceWorkloads, f.inventory, f.hostRoot, f.consumerRoot), /changed/);
});

for (const fault of ["commit", "inventory", "entry", "archive"]) test(`preparation rejects ${fault} mismatch before output`, (t) => {
  const f = fixture(t);
  if (fault === "commit") writeFileSync(path.join(f.hostRoot, "dist/build-info.json"), JSON.stringify({ commit: "c".repeat(40) }));
  if (fault === "inventory") writeFileSync(f.inventoryPath, JSON.stringify({ ...f.inventory, sha256: "0".repeat(64) }));
  if (fault === "entry") rmSync(path.join(f.hostRoot, "dist/index.mjs"));
  if (fault === "archive") f.archives = [path.join(f.root, "wrong.zip")];
  assert.throws(() => writeResourceInputPins(f.out, prepareResourceInputs(f, f.consumerRoot)), /commit differs|digest mismatch|built host entry|local .tgz/);
  assert.equal(existsSync(f.out), false);
});

test("exclusive output preserves existing files and symlink targets", (t) => {
  const f = fixture(t); const pins = prepareResourceInputs(f, f.consumerRoot);
  writeFileSync(f.out, "earlier attempt");
  assert.throws(() => writeResourceInputPins(f.out, pins), { code: "EEXIST" });
  const link = path.join(f.root, "link.json"); symlinkSync(f.out, link);
  assert.throws(() => writeResourceInputPins(link, pins), { code: "EEXIST" });
  assert.equal(readFileSync(f.out, "utf8"), "earlier attempt");
});

test("CLI requires explicit inputs, permits repeated archives and rejects ambiguous flags", () => {
  const required = ["--plugin-inventory", "inventory", "--host-root", "host", "--out", "pins"];
  assert.deepEqual(parseArgs([...required, "--archive", "a.tgz", "--archive", "b.tgz"]).archives, ["a.tgz", "b.tgz"]);
  for (const argv of [[], required.slice(0, 5), [...required, "--unknown"], [...required, "--out", "other"]]) assert.throws(() => parseArgs(argv));
});

test("runtime admission rejects non-Linux, Bun and missing thread CPU observations", () => {
  const runtime = { platform: "linux", versions: {}, threadCpuUsage() {} };
  assert.doesNotThrow(() => assertResourceRuntime(runtime));
  for (const change of [{ platform: "darwin" }, { versions: { bun: "1" } }, { threadCpuUsage: undefined }]) {
    assert.throws(() => assertResourceRuntime({ ...runtime, ...change }), /requires Linux Node/);
  }
  if (process.platform !== "linux" || typeof process.threadCpuUsage !== "function") {
    const result = spawnSync(process.execPath, ["scripts/prepare-resource-inputs.mjs", "--plugin-inventory", "unused", "--host-root", "unused", "--out", "unused"], { cwd: new URL("..", import.meta.url), encoding: "utf8" });
    assert.equal(result.status, 1);
    assert.match(result.stderr, /requires Linux Node[\s\S]*\[resource-inputs\] FAILED \(exit 1\)/);
  }
});


test("preparation includes the shared peer owner and rejects its missing pin", (t) => {
  const f = fixture(t); const pins = prepareResourceInputs(f, f.consumerRoot);
  assert.equal(pins.files.crabpot["scripts/resource-workloads/paired-node.mjs"], digest("throw new Error('must not execute');"));
  delete pins.files.crabpot["scripts/resource-workloads/paired-node.mjs"];
  assert.throws(() => verifyPreparedInputs(pins, f.manifest.resourceWorkloads, f.inventory, f.hostRoot, f.consumerRoot), /Missing crabpot pin/);
});
