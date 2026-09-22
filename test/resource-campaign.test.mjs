import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { mkdtempSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { test } from "node:test";
import { requiredCaseOperations, resourceWorkloadPlan, resourceWorkloadComparison } from "../scripts/resource-workload-contract.mjs";
import { parseArgs, runResourceCampaign, verifyPreparedInputs } from "../scripts/run-resource-campaign.mjs";

const hash = "b".repeat(64);
const commit = "a".repeat(40);
const digest = (bytes) => createHash("sha256").update(bytes).digest("hex");
const definition = (id) => ({ id: `${id}-v1`, pluginId: id, adapter: id, requiredOperations: { work: 1 } });
const source = { commit, kind: "git-tree", tree: "c".repeat(40) };
const payload = { plugins: ["a", "b", "c"].map((id) => ({ declaredSurfaces: {}, distribution: "core", id,
  manifestPath: `extensions/${id}/openclaw.plugin.json`, package: null, path: `extensions/${id}` })),
schemaVersion: 1, scope: "source-manifests", source };
const inventory = { ...payload, sha256: digest(JSON.stringify(payload)) };
const hostNames = ["openclaw.mjs", "dist/build-info.json", "scripts/e2e/kitchen-sink-rpc-walk.mts",
  "scripts/e2e/lib/kitchen-sink-resources.mts", "scripts/lib/gateway-bench-profile.ts", "scripts/lib/gateway-bench-profile-preload.ts"];
const consumerNames = ["crabpot.config.json", "scripts/run-resource-campaign.mjs", "scripts/run-resource-workload.mjs",
  "scripts/resource-workload-contract.mjs", "scripts/resource-coverage.mjs", "scripts/manifest-lib.mjs",
  "scripts/resource-workloads/a.mjs", "scripts/resource-workloads/b.mjs"];
const pins = { schemaVersion: 1, hostCommit: commit,
  runtime: { node: process.version, platform: process.platform, arch: process.arch },
  files: { host: Object.fromEntries(hostNames.map((name) => [name, hash])), crabpot: Object.fromEntries(consumerNames.map((name) => [name, hash])) }, artifacts: [] };

// Controlled producer observations; no Gateway, adapter, provider or Inspector is executed.
function receipt(definition) {
  const cases = resourceWorkloadPlan(definition).map((plan) => {
    let tick = 0;
    const sample = () => ({ pid: plan.enabled ? 2 : 1, atMonotonicMicros: ++tick * 1000,
      process: { user: tick * 1000, system: 0 }, mainThread: { user: tick * 1000, system: 0 },
      memory: { rss: 100, heapTotal: 100, heapUsed: 50, external: 20, arrayBuffers: 10 },
      runtime: { ...pins.runtime, node: pins.runtime.node.slice(1) }, activeResources: {} });
    return { name: plan.name, status: "exercised", host: { commit, entrySha256: hash }, fixtures: [],
      shutdown: { exited: true, exitCode: 0, signal: null, signals: [] },
      activation: { expectedBefore: plan.expectedBefore, expectedAfter: plan.expectedAfter, before: plan.expectedBefore, after: plan.expectedAfter },
      adapterCleanup: { status: "complete", registration: "closed", registered: 1, completed: 1 },
      phases: requiredCaseOperations(definition, plan).map(([name, count]) => {
        const before = sample(); const after = sample();
        return { name, status: "exercised", before, after, operations: { attempted: count, completed: count, failed: 0 },
          cpu: { pid: before.pid, startMonotonicMicros: before.atMonotonicMicros, endMonotonicMicros: after.atMonotonicMicros, wallMs: 1,
            process: { userMs: 1, systemMs: 0, totalMs: 1 }, mainThread: { userMs: 1, systemMs: 0, totalMs: 1 } },
          memoryChangeBytes: Object.fromEntries(Object.keys(before.memory).map((key) => [key, 0])), activeResourceChanges: {},
          processCpuMsPerCompletedOperation: count ? 1 / count : null };
      }) };
  });
  return { schemaVersion: 2, kind: "plugin-resource-workload", status: "exercised", reason: "measured-plugin-workload",
    scenario: { id: definition.id, pluginId: definition.pluginId, requirements: definition.requiredOperations },
    inventory: { source, sha256: inventory.sha256 }, provenance: { adapterSha256: hash, consumerSha256: hash, contractSha256: hash,
      harnessSha256: Object.fromEntries(hostNames.filter((name) => name.startsWith("scripts/")).map((name) => [name, hash])) },
    measurement: {}, cases, comparison: resourceWorkloadComparison(cases, definition) };
}

async function exercise(options = {}, hooks = {}) {
  const saved = new Map(); const calls = [];
  const campaign = await runResourceCampaign({ manifest: { resourceWorkloads: [definition("a"), definition("b")] },
    inventory, pins, repetitions: 2, execute: true, ...options }, {
    verify() {}, adapterAvailable: () => true,
    async run({ definition }) { calls.push(definition.id); return receipt(definition); },
    save(name, value) { saved.set(name, structuredClone(value)); }, ...hooks,
  });
  return { campaign, saved, calls };
}

test("campaign runs sequentially and groups one validated receipt per plugin per repetition", async () => {
  let active = false;
  const { campaign, saved } = await exercise({}, { async run({ definition }) {
    assert.equal(active, false); active = true; await Promise.resolve(); active = false; return receipt(definition);
  } });
  assert.equal(campaign.status, "complete");
  assert.equal(saved.size, 5);
  for (const repetition of campaign.repetitions) {
    assert.deepEqual(repetition.summary, { exercised: 2, blocked: 0, unsupported: 1, failed: 0 });
    assert.equal(repetition.plugins.length, inventory.plugins.length);
  }
  assert.equal(saved.get("repetition-2/a-v1.json").scenario.pluginId, "a");
});

test("planning, missing adapters and unknown plugins never earn execution credit", async () => {
  const planned = await exercise({ execute: false });
  assert.deepEqual(planned.calls, []);
  assert.equal(planned.campaign.repetitions[0].plugins[0].reason, "execution-not-requested");
  const missing = await exercise({ manifest: { resourceWorkloads: [definition("a"), definition("unknown")] } }, { adapterAvailable: () => false });
  assert.deepEqual(missing.calls, []);
  assert.equal(missing.campaign.unmatchedScenarios[0].reason, "plugin-absent-from-inventory");
  assert.equal(missing.campaign.repetitions[0].plugins[0].reason, "configured-adapter-unavailable");
});

test("input mismatch blocks every later execution and preserves the denominator", async () => {
  const { campaign, calls } = await exercise({}, { verify() { throw new Error("changed"); } });
  assert.deepEqual(calls, []);
  assert.equal(campaign.repetitions[0].plugins[0].reason, "prepared-input-verification-failed");
  assert.equal(campaign.repetitions[1].plugins[1].reason, "campaign-admission-stopped");
});

test("failed producer receipt is retained before stopping later hosts", async () => {
  const { campaign, saved } = await exercise({}, { async run({ definition }) {
    const report = receipt(definition); report.status = "failed"; report.reason = "workload-failed";
    report.cases[1].status = "failed"; report.cases[1].adapterCleanup.status = "failed";
    return report;
  } });
  assert.equal(campaign.status, "failed");
  assert.equal(saved.get("repetition-1/a-v1.json").cases[1].adapterCleanup.status, "failed");
  assert.equal(saved.has("repetition-1/b-v1.json"), false);
  assert.equal(campaign.repetitions[1].plugins[0].status, "blocked");
});

for (const fault of ["cleanup", "identity", "counts", "archive", "throw"]) test(`campaign rejects ${fault} without manufacturing success`, async () => {
  const { campaign, saved } = await exercise({}, { async run({ definition }) {
    if (fault === "throw") throw new Error("No terminal receipt");
    const report = receipt(definition);
    if (fault === "cleanup") report.cases[1].adapterCleanup.completed = 0;
    if (fault === "identity") report.provenance.adapterSha256 = "d".repeat(64);
    if (fault === "counts") report.cases[1].phases[4].operations.completed = 0;
    if (fault === "archive") report.cases.forEach((item) => { item.fixtures = [{ archive: "unpinned.tgz", sha256: hash }]; });
    return report;
  } });
  assert.equal(campaign.status, "failed");
  assert.equal(saved.has("repetition-1/a-v1.json"), fault !== "throw");
  assert.equal(saved.has("repetition-1/b-v1.json"), false);
});

test("blocked host prerequisites stop unchanged repeated attempts", async () => {
  let calls = 0;
  const { campaign } = await exercise({}, { async run({ definition }) {
    calls++;
    return { ...receipt(definition), status: "blocked", reason: "host-prerequisite", cases: [] };
  } });
  assert.equal(calls, 1);
  assert.equal(campaign.status, "blocked");
  assert.equal(campaign.repetitions[0].plugins[0].reason, "host-prerequisite");
});

test("missing paired dependencies block before invoking the producer", async () => {
  const configured = { ...definition("a"), pairedWorkload: { dependencies: ["absent"], targetActivation: "workload" } };
  const { campaign, calls } = await exercise({ manifest: { resourceWorkloads: [configured] } });
  assert.deepEqual(calls, []);
  assert.deepEqual(campaign.repetitions[0].plugins[0].missingDependencies, ["absent"]);
});

test("post-run input drift preserves raw evidence but cannot credit coverage", async () => {
  let checks = 0;
  const { campaign, saved, calls } = await exercise({}, { verify() { if (++checks === 2) throw new Error("changed during work"); } });
  assert.equal(calls.length, 1);
  assert.equal(saved.get("repetition-1/a-v1.json").status, "exercised");
  assert.equal(campaign.repetitions[0].plugins[0].status, "failed");
  assert.equal(campaign.repetitions[0].plugins[0].diagnostic.stage, "postverify");
});

test("a different configured scenario cannot supply the requested plugin receipt", async () => {
  const other = { ...definition("b"), adapter: "a" };
  const { campaign, saved } = await exercise({ manifest: { resourceWorkloads: [definition("a"), other] } }, {
    async run() { return receipt(other); },
  });
  const row = campaign.repetitions[0].plugins[0];
  assert.equal(row.status, "failed");
  assert.equal(row.diagnostic.stage, "receipt-validation");
  assert.match(row.diagnostic.message, /unknown workload or plugin identity/u);
  assert.equal(saved.get("repetition-1/a-v1.json").scenario.id, "b-v1");
  assert.equal(saved.has("repetition-1/b-v1.json"), false);
});

for (const replacement of [{ node: "24.0.0" }, { platform: "another-platform" }, { arch: "another-arch" }, { bun: "1.2.0" }]) {
  test(`Gateway runtime must match pins: ${Object.keys(replacement)[0]}`, async () => {
    const { campaign } = await exercise({}, { async run({ definition }) {
      const report = receipt(definition);
      for (const item of report.cases) for (const phase of item.phases) {
        Object.assign(phase.before.runtime, replacement);
        Object.assign(phase.after.runtime, replacement);
      }
      return report;
    } });
    assert.equal(campaign.status, "failed");
    assert.equal(campaign.repetitions[0].plugins[0].diagnostic.message, "Receipt Gateway runtime differs from pins");
  });
}

test("failure diagnostics preserve stages without paths, credentials, controls or stacks", async () => {
  const privatePath = "/private/campaign-fixture/host.mjs";
  const secret = "fixture-sensitive-value";
  for (const stage of ["preverify", "postverify", "run"]) {
    let verifications = 0;
    const fail = () => assert.fail(`host input changed: ${privatePath} 'C:\\private\\fixture' token=${secret} \u202e\u009b\nstack: secret=${secret}`);
    const { campaign } = await exercise({}, {
      verify() { if (stage === "preverify" || (stage === "postverify" && ++verifications === 2)) fail(); },
      async run({ definition }) { if (stage === "run") fail(); return receipt(definition); },
    });
    const diagnostic = campaign.repetitions[0].plugins[0].diagnostic;
    assert.equal(diagnostic.stage, stage);
    assert.equal(diagnostic.code, "ERR_ASSERTION");
    assert.equal(diagnostic.type, "AssertionError");
    const text = JSON.stringify(diagnostic);
    for (const excluded of [privatePath, "C:\\private", secret, "stack:", "\u202e", "\u009b"]) assert.ok(!text.includes(excluded));
    assert.ok(diagnostic.message.length <= 512);
    if (stage !== "run") assert.match(diagnostic.message, /host input changed: \[path\]/u);
  }
});

test("failure diagnostics cap trusted context and omit arbitrary runner payloads", async () => {
  const bounded = await exercise({}, { verify() { assert.fail(`Pinned runtime differs: ${"x".repeat(3000)}`); } });
  assert.equal(bounded.campaign.repetitions[0].plugins[0].diagnostic.message.length, 512);
  const arbitrary = await exercise({}, { run() { throw new TypeError("unlabelled-fixture-sensitive-value"); } });
  const diagnostic = arbitrary.campaign.repetitions[0].plugins[0].diagnostic;
  assert.equal(diagnostic.type, "TypeError");
  assert.ok(!JSON.stringify(diagnostic).includes("unlabelled-fixture-sensitive-value"));
});

test("campaign bounds repetitions and rejects multiple scenarios for one plugin", async () => {
  for (const repetitions of [0, 11, 1.5]) await assert.rejects(exercise({ repetitions }), /Repetitions/);
  await assert.rejects(exercise({ manifest: { resourceWorkloads: [definition("a"), { ...definition("a"), id: "other" }] } }), /one configured scenario/);
  assert.equal(parseArgs(["--plugin-inventory", "i", "--inputs", "p", "--out", "o", "--repetitions", "2", "--execute"]).repetitions, 2);
});

test("prepared input verification hashes actual local bytes without importing them", (t) => {
  const root = mkdtempSync(path.join(os.tmpdir(), "resource-campaign-test-"));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const expected = structuredClone(pins);
  for (const [scope, files] of Object.entries(expected.files)) for (const name of Object.keys(files)) {
    const file = path.join(root, scope, name);
    mkdirSync(path.dirname(file), { recursive: true });
    const bytes = name === "dist/build-info.json" ? JSON.stringify({ commit }) : "throw new Error('must not execute');";
    writeFileSync(file, bytes); files[name] = digest(bytes);
  }
  verifyPreparedInputs(expected, [definition("a")], inventory, path.join(root, "host"), path.join(root, "crabpot"));
  writeFileSync(path.join(root, "host/openclaw.mjs"), "changed");
  assert.throws(() => verifyPreparedInputs(expected, [definition("a")], inventory, path.join(root, "host"), path.join(root, "crabpot")), /input changed/);
});
