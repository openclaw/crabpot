import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { createHash } from "node:crypto";
import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { test } from "node:test";
import { requiredCaseOperations, resourceWorkloadPlan, resourceWorkloadComparison } from "../scripts/resource-workload-contract.mjs";
import { parseArgs, resourceCampaignExitCode, runResourceCampaign, verifyPreparedInputs } from "../scripts/run-resource-campaign.mjs";

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
  "scripts/import-screening.mjs", "scripts/resource-workloads/a.mjs", "scripts/resource-workloads/b.mjs"];
const pins = { schemaVersion: 1, hostCommit: commit,
  runtime: { node: process.version, platform: process.platform, arch: process.arch },
  files: { host: Object.fromEntries(hostNames.map((name) => [name, hash])), crabpot: Object.fromEntries(consumerNames.map((name) => [name, hash])) }, artifacts: [] };

// Controlled producer observations; no Gateway, adapter, provider or Inspector is executed.
function receipt(definition, sourceInventory = inventory) {
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
    scenario: { id: definition.id, pluginId: definition.pluginId, requirements: definition.requiredOperations,
      ...(definition.pairedWorkload ? { pairedWorkload: definition.pairedWorkload } : {}) },
    inventory: { source, sha256: sourceInventory.sha256 }, provenance: { adapterSha256: hash, consumerSha256: hash, contractSha256: hash,
      harnessSha256: Object.fromEntries(hostNames.filter((name) => name.startsWith("scripts/")).map((name) => [name, hash])) },
    measurement: {}, cases, comparison: resourceWorkloadComparison(cases, definition) };
}

async function exercise(options = {}, hooks = {}) {
  const saved = new Map(); const calls = [];
  const campaign = await runResourceCampaign({ manifest: { resourceWorkloads: [definition("a"), definition("b")] },
    inventory, pins, repetitions: 2, execute: true, ...options }, {
    verify() {}, adapterAvailable: () => true,
    async run({ definition }) { calls.push(definition.id); return receipt(definition, options.inventory ?? inventory); },
    save(name, value) { saved.set(name, structuredClone(value)); }, ...hooks,
  });
  return { campaign, saved, calls };
}

test("campaign runs sequentially and groups one validated receipt per plugin per repetition", async () => {
  let active = false;
  let checks = 0;
  const { campaign, saved } = await exercise({}, { verify() { checks++; }, async run({ definition }) {
    assert.equal(active, false); active = true; await Promise.resolve(); active = false; return receipt(definition);
  } });
  assert.equal(campaign.status, "complete");
  assert.equal(campaign.selection, undefined);
  assert.equal(resourceCampaignExitCode(campaign, true), 0);
  assert.equal(saved.size, 5);
  assert.equal(checks, 8);
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
  assert.equal(resourceCampaignExitCode(planned.campaign, false), 0);
  assert.equal(resourceCampaignExitCode(planned.campaign, true), 1);
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
  let checks = 0;
  const { campaign, saved } = await exercise({}, { verify() { checks++; }, async run({ definition }) {
    const report = receipt(definition); report.status = "failed"; report.reason = "workload-failed";
    report.cases[1].status = "failed"; report.cases[1].adapterCleanup.status = "failed";
    return report;
  } });
  assert.equal(campaign.status, "failed");
  assert.equal(checks, 2);
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
  let checks = 0;
  const { campaign } = await exercise({}, { verify() { checks++; }, async run({ definition }) {
    calls++;
    return { ...receipt(definition), status: "blocked", reason: "host-prerequisite", cases: [] };
  } });
  assert.equal(calls, 1);
  assert.equal(checks, 2);
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
  assert.equal(checks, 2);
  assert.equal(saved.get("repetition-1/a-v1.json").status, "exercised");
  assert.equal(campaign.repetitions[0].plugins[0].status, "failed");
  assert.equal(campaign.repetitions[0].plugins[0].diagnostic.stage, "postverify");
});

for (const fault of ["run", "receipt-write", "receipt-validation", "receipt-pins"]) {
  for (const drift of [false, true]) test(`postverify follows ${fault} failure once (drift=${drift})`, async () => {
    const events = [];
    const retained = new Map();
    let checks = 0;
    const { campaign } = await exercise({}, {
      async verify() {
        await Promise.resolve();
        events.push(++checks === 1 ? "preverify" : "postverify");
        if (checks === 2 && drift) assert.fail("host input changed: /private/fixture/host.mjs token=synthetic-sensitive-value");
      },
      async run({ definition }) {
        events.push("run");
        if (fault === "run") throw new TypeError("synthetic-runner-private-value");
        const report = receipt(definition);
        if (fault === "receipt-validation") delete report.cases[1].phases[0].after.runtime;
        if (fault === "receipt-pins") report.provenance.consumerSha256 = "d".repeat(64);
        return report;
      },
      async save(name, value) {
        events.push(name === "campaign.json" ? "checkpoint" : "receipt");
        if (name !== "campaign.json" && fault === "receipt-write") {
          throw Object.assign(new Error("synthetic-storage-private-value"), { code: "EIO" });
        }
        retained.set(name, structuredClone(value));
      },
    });
    assert.deepEqual(events, ["checkpoint", "preverify", "checkpoint", "run",
      ...(fault === "run" ? [] : ["receipt"]), "postverify", "checkpoint", "checkpoint"]);
    assert.equal(checks, 2);
    assert.equal(campaign.status, "failed");
    const row = campaign.repetitions[0].plugins[0];
    assert.equal(row.status, "failed");
    assert.equal(row.diagnostic.stage, fault === "receipt-pins" ? "receipt-validation" : fault);
    assert.equal(row.reason, fault === "run" ? "runner-threw-without-receipt" : "invalid-or-unpinned-workload-receipt");
    assert.equal(row.diagnostic.code, fault === "receipt-write" ? "EIO" : fault === "receipt-pins" ? "ERR_ASSERTION" : "UNKNOWN");
    assert.equal(retained.has("repetition-1/a-v1.json"), fault !== "run" && fault !== "receipt-write");
    assert.equal(campaign.repetitions[0].plugins[1].reason, "campaign-admission-stopped");
    assert.equal(campaign.repetitions[1].plugins[0].reason, "campaign-admission-stopped");
    if (drift) {
      assert.equal(row.postverifyDiagnostic.stage, "postverify");
      assert.equal(row.postverifyDiagnostic.code, "ERR_ASSERTION");
      assert.match(row.postverifyDiagnostic.message, /host input changed: \[path\] credential=\[redacted\]/u);
    } else assert.equal(row.postverifyDiagnostic, undefined);
    const saved = JSON.stringify(retained.get("campaign.json"));
    for (const secret of ["/private/fixture", "synthetic-sensitive-value", "synthetic-runner-private-value", "synthetic-storage-private-value"]) {
      assert.ok(!saved.includes(secret));
    }
    assert.deepEqual(retained.get("campaign.json"), campaign);
  });
}

test("failed preverification or admission checkpoint never invokes or postverifies work", async () => {
  for (const fault of ["preverify", "checkpoint"]) {
    const events = [];
    let saves = 0;
    const pending = exercise({}, {
      verify() { events.push("preverify"); if (fault === "preverify") throw new Error("preverification failed"); },
      run() { assert.fail("work must not start"); },
      save() { events.push("checkpoint"); if (++saves === 2 && fault === "checkpoint") throw new Error("admission checkpoint failed"); },
    });
    if (fault === "checkpoint") await assert.rejects(pending, /admission checkpoint failed/);
    else assert.equal((await pending).campaign.status, "blocked");
    assert.deepEqual(events, ["checkpoint", "preverify", "checkpoint", ...(fault === "preverify" ? ["checkpoint"] : [])]);
  }
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

function selectionInputs(distribution = "core") {
  const selectedPayload = { ...payload, plugins: payload.plugins.map((plugin) => ({ ...plugin,
    distribution: plugin.id === "a" ? distribution : distribution === "core" ? "external" : "core" })) };
  return { distribution, inventory: { ...selectedPayload, sha256: digest(JSON.stringify(selectedPayload)) },
    manifest: { resourceWorkloads: [{ ...definition("a"), pairedWorkload: { dependencies: ["b", "c"], targetActivation: "workload" } }, definition("b")] } };
}

for (const distribution of ["core", "external", "source"]) test(`${distribution} selection preserves the denominator and gives dependencies no credit`, async () => {
  const { campaign, calls, saved } = await exercise(selectionInputs(distribution));
  assert.deepEqual(calls, ["a-v1", "a-v1"]);
  assert.equal(campaign.status, "blocked");
  assert.equal(campaign.inventory.count, 3);
  assert.deepEqual(campaign.selection, { distribution, configuredScenarios: 1, excludedConfiguredScenarios: 1,
    status: "complete", reason: "selected-workloads-complete" });
  assert.equal(resourceCampaignExitCode(campaign, true), 0);
  for (const repetition of campaign.repetitions) {
    assert.equal(repetition.plugins.length, 3);
    assert.deepEqual(repetition.plugins.map(({ status }) => status), ["exercised", "blocked", "unsupported"]);
    assert.equal(repetition.plugins[1].reason, "not-selected-for-this-campaign");
    assert.equal(repetition.plugins[2].reason, "no-workload-adapter");
    assert.equal(saved.has(`repetition-${repetition.repetition}/b-v1.json`), false);
  }
});

for (const fault of ["cleanup", "identity", "second-repetition", "postverify"]) test(`selection cannot excuse ${fault} failure`, async () => {
  const options = selectionInputs(); let runs = 0; let checks = 0;
  const { campaign } = await exercise(options, { verify() {
    if (++checks === 2 && fault === "postverify") throw new Error("changed inputs after selected work");
  }, async run({ definition }) {
    if (++runs === 2 && fault === "second-repetition") throw new Error("failed second repetition");
    const report = receipt(definition, options.inventory);
    if (fault === "cleanup") report.cases[1].adapterCleanup.completed = 0;
    if (fault === "identity") report.provenance.adapterSha256 = "d".repeat(64);
    return report;
  } });
  assert.equal(campaign.selection.status, "failed");
  assert.equal(resourceCampaignExitCode(campaign, true), 1);
  if (fault === "second-repetition") {
    assert.equal(runs, 2);
    assert.equal(campaign.repetitions[0].plugins[0].status, "exercised");
  } else if (fault === "postverify") {
    assert.equal(checks, 2);
    assert.equal(runs, 1);
    assert.equal(campaign.repetitions[0].plugins[0].diagnostic.stage, "postverify");
  } else assert.match(campaign.repetitions[0].plugins[0].diagnostic.message, fault === "cleanup" ? /completed adapter cleanup/ : /Receipt adapter differs/);
  assert.ok(campaign.repetitions.every(({ plugins }) => plugins[1].reason === "not-selected-for-this-campaign"));
});

test("empty, unexecuted, unavailable and unverified selections cannot succeed", async () => {
  const empty = await exercise({ distribution: "source" });
  assert.deepEqual(empty.calls, []);
  assert.equal(empty.campaign.selection.reason, "no-selected-configured-scenarios");
  for (const [options, hooks] of [[{ execute: false }, {}], [{}, { adapterAvailable: () => false }], [{}, { verify() { throw new Error("changed inputs"); } }]]) {
    const { campaign, calls } = await exercise({ ...selectionInputs(), ...options }, hooks);
    assert.deepEqual(calls, []);
    assert.equal(campaign.selection.status, "blocked");
    assert.equal(resourceCampaignExitCode(campaign, options.execute ?? true), 1);
  }
  assert.equal(resourceCampaignExitCode(empty.campaign, true), 1);
});

test("unmatched configured scenarios block selection success even after selected work completes", async () => {
  const options = selectionInputs(); options.manifest.resourceWorkloads.push(definition("unknown"));
  const { campaign, calls } = await exercise(options);
  assert.equal(calls.length, 2);
  assert.equal(campaign.selection.reason, "unmatched-configured-scenarios");
  assert.equal(resourceCampaignExitCode(campaign, true), 1);
});

test("distribution admission rejects invalid and repeated values", async () => {
  const required = ["--plugin-inventory", "i", "--inputs", "p", "--out", "o"];
  assert.equal(parseArgs([...required, "--distribution", "core"]).distribution, "core");
  for (const distribution of [null, "all", "", "Core"]) await assert.rejects(exercise({ distribution }), /Distribution/);
  assert.throws(() => parseArgs([...required, "--distribution", "invalid"]), /Distribution/);
  assert.throws(() => parseArgs([...required, "--distribution", "core", "--distribution", "source"]), /Duplicate/);
});

test("CLI reports partial scope and rejects selection planning while default planning stays successful", (t) => {
  const root = mkdtempSync(path.join(os.tmpdir(), "resource-selection-test-"));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  for (const [name, value] of [["inventory", inventory], ["pins", pins]]) writeFileSync(path.join(root, `${name}.json`), JSON.stringify(value));
  for (const selected of [false, true]) {
    const output = path.join(root, String(selected));
    const args = ["scripts/run-resource-campaign.mjs", "--plugin-inventory", path.join(root, "inventory.json"), "--inputs", path.join(root, "pins.json"), "--out", output];
    const result = spawnSync(process.execPath, [...args, ...(selected ? ["--distribution", "core"] : [])], { cwd: new URL("..", import.meta.url), encoding: "utf8", timeout: 5000 });
    assert.equal(result.status, selected ? 1 : 0, result.stderr);
    assert.equal(JSON.parse(readFileSync(path.join(output, "campaign.json"))).inventory.count, 3);
    if (selected) assert.match(result.stdout, /partial scope core: blocked; full inventory: blocked/);
  }
});
