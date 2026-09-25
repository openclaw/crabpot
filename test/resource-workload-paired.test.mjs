import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { validateManifest } from "../scripts/manifest-lib.mjs";
import { buildResourceCoverage, validateResourceWorkloadReport } from "../scripts/resource-coverage.mjs";
import { resourceWorkloadPlan } from "../scripts/resource-workload-contract.mjs";
import { runResourceWorkloadCases } from "../scripts/run-resource-workload.mjs";

const commit = "a".repeat(40);
const artifact = "b".repeat(64);
const definition = {
  id: "sample-paired-v1", pluginId: "sample", adapter: "sample",
  requiredOperations: { "first-use": 1, "warm-work": 5 },
  pairedWorkload: { dependencies: ["provider"], targetActivation: "workload" },
  why: "Synthetic paired consumer contract proof; no plugin execution.",
};

function inventory() {
  const payload = {
    plugins: ["provider", "sample"].map((id) => ({
      declaredSurfaces: {}, distribution: "core", id,
      manifestPath: `extensions/${id}/openclaw.plugin.json`, package: null, path: `extensions/${id}`,
    })),
    schemaVersion: 1, scope: "source-manifests", source: { commit, kind: "git-tree", tree: "c".repeat(40) },
  };
  return { ...payload, sha256: createHash("sha256").update(JSON.stringify(payload)).digest("hex") };
}

function receipt(scenario = definition) {
  const source = inventory();
  return {
    schemaVersion: 2, kind: "plugin-resource-workload", status: "blocked", reason: "execution-not-requested",
    scenario: { id: scenario.id, pluginId: scenario.pluginId, requirements: scenario.requiredOperations,
      ...(scenario.pairedWorkload ? { pairedWorkload: scenario.pairedWorkload } : {}) },
    inventory: { source: source.source, sha256: source.sha256 },
    provenance: { adapterSha256: artifact, consumerSha256: artifact, contractSha256: artifact, harnessSha256: { host: artifact } },
    measurement: { neutralOperations: 20, idleMs: 1 }, cases: [], comparison: [],
  };
}

function summarizeResourcePhase(name, before, after, operations) {
  const counter = (scope) => {
    const userMs = (after[scope].user - before[scope].user) / 1000;
    const systemMs = (after[scope].system - before[scope].system) / 1000;
    return { userMs, systemMs, totalMs: userMs + systemMs };
  };
  const cpu = {
    pid: before.pid, startMonotonicMicros: before.atMonotonicMicros, endMonotonicMicros: after.atMonotonicMicros,
    wallMs: (after.atMonotonicMicros - before.atMonotonicMicros) / 1000,
    process: counter("process"), mainThread: counter("mainThread"),
  };
  return {
    name, status: operations.failed ? "failed" : "exercised", operations, before, after, cpu,
    memoryChangeBytes: Object.fromEntries(Object.keys(before.memory).map((key) => [key, after.memory[key] - before.memory[key]])),
    activeResourceChanges: {},
    processCpuMsPerCompletedOperation: operations.completed ? cpu.process.totalMs / operations.completed : null,
  };
}

// Exercise the real consumer callbacks without a Gateway, dependencies or plugin.
// The fake host owns join; the real consumer must own adapter peers on every exit.
async function exercise({ scenario = definition, fault, enabledCpu = 3000, hooks = {} } = {}) {
  const report = receipt(scenario);
  const events = [];
  const completed = [];
  const registrations = [];
  const plans = resourceWorkloadPlan(scenario);
  let current;
  const host = {
    assertGatewayHealthPayload(value) { assert.equal(value.ok, true); },
    async runResourceGatewayCase({ result, prepare, run }) {
      const plan = plans.find(({ name }) => name === result.name);
      current = { ...plan, worked: false };
      result.host = { commit, entrySha256: artifact };
      result.fixtures = [];
      let tick = 0;
      const sample = async () => {
        tick++;
        const cpu = tick * (plan.enabled ? enabledCpu : 2000);
        return {
          pid: plan.enabled ? 2 : 1, atMonotonicMicros: tick * 10000,
          process: { user: cpu, system: 0 }, mainThread: { user: cpu, system: 0 },
          memory: { rss: tick * (plan.enabled ? 200 : 100), heapTotal: 100, heapUsed: 50, external: 20, arrayBuffers: 10 },
          runtime: { node: "v24.19.0", platform: "linux", arch: "x64" }, activeResources: {},
        };
      };
      const context = {
        root: "/synthetic", env: {}, sample,
        async rpc(method) {
          if (method === "health") return { ok: true };
          assert.equal(method, "plugins.list");
          let ids = current.worked ? plan.expectedAfter : plan.expectedBefore;
          if (fault === "missing-dependency") ids = ids.filter((id) => id !== "provider");
          if (fault === "wrong-dependency") ids = ids.map((id) => id === "provider" ? "other" : id);
          if (fault === "never-activates") ids = ids.filter((id) => id !== "sample");
          if (fault === "publishes-scoped" && current.enabled && current.worked) ids = [...ids, "sample"];
          return { plugins: ids.map((id) => ({ id, runtime: { state: "active" } })) };
        },
        async measure(name, count, operation) {
          const before = await sample();
          const operations = { attempted: 0, completed: 0, failed: 0 };
          try {
            for (let index = 0; index < count; index++) {
              operations.attempted++;
              await operation(index);
              operations.completed++;
            }
          } catch (error) {
            operations.failed++;
            result.phases.push(summarizeResourcePhase(name, before, await sample(), operations));
            if (fault?.startsWith("unawaited")) events.push(`${result.name}:measurement-recorded`);
            throw error;
          }
          const phase = summarizeResourcePhase(name, before, await sample(), operations);
          result.phases.push(phase);
          return phase;
        },
      };
      try {
        await prepare(context);
        if (fault === "startup") throw new Error("startup failure");
        result.phases.push(summarizeResourcePhase("startup", await sample(), await sample(), { attempted: 0, completed: 0, failed: 0 }));
        await run(context);
        result.status = "exercised";
      } catch (error) {
        result.status = "failed";
        result.error = error.message;
      } finally {
        events.push(`${result.name}:host-joined`);
        result.shutdown = { exited: true, exitCode: 0, signal: null, signals: ["SIGTERM"] };
      }
    },
  };
  const adapter = {
    async prepare(_context, { enabled, onCleanup }) {
      const name = current.name;
      registrations.push({ name, onCleanup });
      events.push(`${name}:prepare:${enabled}`);
      onCleanup(async () => { events.push(`${name}:cleanup-first`); });
      onCleanup(async () => {
        events.push(`${name}:cleanup-second`);
        await hooks.duringCleanup?.({ name, onCleanup });
        if (fault === "cleanup" || fault === "work-and-cleanup") throw new Error("peer cleanup failure");
      });
      if (fault === "prepare") throw new Error("prepare failure");
      return { name };
    },
    async run({ measure }, requirements, { enabled, state, onCleanup }) {
      assert.equal(state.name, current.name);
      assert.equal(enabled, current.enabled);
      await hooks.run?.({ enabled, registrations });
      if (fault?.startsWith("unawaited")) {
        void measure("first-use", 1, async () => {
          events.push(`${state.name}:measurement-started`);
          await hooks.operation({ onCleanup, events });
        });
        events.push(`${state.name}:adapter-returned`);
        if (fault === "unawaited-throw") throw new Error("adapter primary failure");
        return;
      }
      for (const [name, count] of Object.entries(requirements)) {
        if (fault === "missing-phase" && name === "warm-work") continue;
        await measure(name, fault === "unmatched-count" && !enabled ? count + 1 : count, async (index) => {
          if ((fault === "baseline-work" || fault === "work-and-cleanup") && !enabled) throw new Error("baseline operation failure");
          completed.push([current.name, name, index]);
        });
      }
      current.worked = true;
    },
  };
  await runResourceWorkloadCases({ report, definition: scenario, adapter, host, phases: { summarizeResourcePhase }, runtime: {} });
  return { report, events, completed, registrations };
}

function validate(report, scenario = definition) {
  return validateResourceWorkloadReport(report, inventory(), [scenario]);
}

test("paired cases execute identical phases with truthful lazy activation and signed deltas", async () => {
  const { report, events, completed } = await exercise();
  assert.equal(report.status, "exercised");
  assert.equal(validate(report).status, "exercised");
  assert.deepEqual(completed.filter(([name]) => name === "baseline").map(([, ...operation]) => operation),
    completed.filter(([name]) => name === "sample").map(([, ...operation]) => operation));
  assert.equal(completed.length, 12);
  assert.deepEqual(report.cases.map(({ activation }) => activation), [
    { scope: "gateway-request-registry", expectedBefore: ["provider"], expectedAfter: ["provider"], before: ["provider"], after: ["provider"] },
    { scope: "gateway-request-registry", expectedBefore: ["provider"], expectedAfter: ["provider", "sample"], before: ["provider"], after: ["provider", "sample"] },
  ]);
  const warm = report.comparison.workloadPhases.find(({ phase }) => phase === "warm-work");
  assert.equal(report.cases[0].phases[5].cpu.process.totalMs, 2);
  assert.equal(report.cases[1].phases[5].cpu.process.totalMs, 3);
  assert.equal(warm.processCpuMs, 1);
  assert.equal(warm.processCpuMsPerCompletedOperation, 0.2);
  assert.equal(warm.memoryGrowthBytes.rss, 100);
  assert.equal(report.comparison.hostPhases.some(({ phase }) => phase === "warm-work"), false);
  assert.deepEqual(events, ["baseline", "sample"].flatMap((name) => [
    `${name}:prepare:${name === "sample"}`, `${name}:host-joined`, `${name}:cleanup-second`, `${name}:cleanup-first`,
  ]));
  const coverage = buildResourceCoverage({ inventory: inventory(), resourceWorkloads: [definition], workloadReports: [report], configuredFixtureCount: 59, selectedFixtureCount: 0 });
  assert.deepEqual(coverage.plugins.map(({ status }) => status), ["unsupported", "exercised"]);
});

const scoped = { ...definition, pairedWorkload: { ...definition.pairedWorkload, targetActivation: "scoped" } };

test("scoped handles complete matched work without publishing root activation", async () => {
  const { report, completed } = await exercise({ scenario: scoped });
  assert.equal(validate(report, scoped).status, "exercised");
  assert.equal(completed.length, 12);
  for (const item of report.cases) {
    assert.deepEqual(item.activation, { scope: "gateway-request-registry", expectedBefore: ["provider"],
      expectedAfter: ["provider"], before: ["provider"], after: ["provider"] });
  }
  assert.throws(() => validate(report), /comparison contract differs/);
  for (const mutate of [
    (value) => { delete value.cases[1].activation.scope; },
    (value) => { value.cases[1].activation.scope = "all-loaded-handles"; },
    (value) => { value.cases[1].activation.after.push("sample"); },
    (value) => { value.cases[1].phases = value.cases[1].phases.filter(({ name }) => name !== "warm-work"); },
  ]) {
    const broken = structuredClone(report);
    mutate(broken);
    assert.throws(() => validate(broken, scoped), /resource coverage:/);
  }
});

for (const fault of ["missing-dependency", "publishes-scoped", "missing-phase", "baseline-work", "cleanup"]) {
  test(`scoped work still rejects ${fault}`, async () => {
    const { report } = await exercise({ scenario: scoped, fault });
    assert.equal(report.status, "failed");
    assert.equal(validate(report, scoped).status, "failed");
  });
}

for (const fault of ["missing-dependency", "wrong-dependency", "never-activates", "unmatched-count", "missing-phase", "baseline-work", "prepare", "startup", "cleanup", "work-and-cleanup"]) {
  test(`consumer rejects ${fault} and joins registered adapter peers`, async () => {
    const { report, events } = await exercise({ fault });
    assert.equal(report.status, "failed");
    assert.equal(validate(report).status, "failed");
    const failed = report.cases.find(({ status }) => status === "failed");
    assert.ok(failed);
    assert.deepEqual(events.slice(-3), [`${failed.name}:host-joined`, `${failed.name}:cleanup-second`, `${failed.name}:cleanup-first`]);
    assert.equal(failed.adapterCleanup.registered, 2);
    assert.equal(failed.adapterCleanup.completed, fault.includes("cleanup") ? 1 : 2);
    if (fault === "work-and-cleanup") {
      assert.match(report.error, /baseline operation failure/);
      assert.match(report.error, /peer cleanup failure/);
    }
    if (failed.name === "baseline") assert.equal(events.some((event) => event.startsWith("sample:")), false);
  });
}

test("receipt admission rejects missing activation, mismatched work, cleanup and forged deltas", async () => {
  const { report } = await exercise();
  for (const change of [
    (value) => { value.cases[0].activation.before = []; },
    (value) => { value.cases[1].activation.after = ["provider"]; },
    (value) => { value.cases[1].activation.expectedBefore = []; },
    (value) => { value.cases[0].activation.after = ["other"]; },
    (value) => { value.cases[0].phases[5].operations = { attempted: 4, completed: 4, failed: 0 }; value.cases[0].phases[5].processCpuMsPerCompletedOperation = 0.5; },
    (value) => { value.cases[0].status = "failed"; },
    (value) => { value.cases[0].adapterCleanup.status = "failed"; },
    (value) => { value.cases[0].adapterCleanup.registration = "open"; },
    (value) => { value.cases[0].adapterCleanup.completed = 1; },
    (value) => { value.cases[0].adapterCleanup.errors = ["peer retained"]; },
    (value) => { delete value.cases[0].adapterCleanup; },
    (value) => { value.cases[1].shutdown.signals.push("SIGKILL"); },
    (value) => { value.comparison.workloadPhases[0].processCpuMs = 10; },
    (value) => { value.comparison.workloadPhases = []; },
    (value) => { delete value.provenance.contractSha256; },
    (value) => { value.provenance.pairedNodeSha256 = "invalid"; },
    (value) => { value.schemaVersion = 1; },
    (value) => { value.scenario.pairedWorkload = { dependencies: [], targetActivation: "startup" }; },
  ]) {
    const broken = structuredClone(report);
    change(broken);
    assert.throws(() => validate(broken), /resource coverage:/);
  }
});

test("paired arithmetic retains negative CPU deltas without claiming a plugin allocation", async () => {
  const { report } = await exercise({ enabledCpu: 1000 });
  assert.equal(validate(report).status, "exercised");
  const warm = report.comparison.workloadPhases.find(({ phase }) => phase === "warm-work");
  assert.equal(warm.processCpuMs, -1);
  assert.equal(warm.processCpuMsPerCompletedOperation, -0.2);
  assert.equal(warm.mainThreadCpuMs, -1);
});

test("paired dependency IDs must belong to the same source inventory", async () => {
  const scenario = { ...definition, pairedWorkload: { dependencies: ["missing"], targetActivation: "workload" } };
  const { report } = await exercise({ scenario });
  assert.throws(() => validate(report, scenario), /dependency absent from inventory/);
});

test("startup adapters retain empty control and strict target activation", async () => {
  const scenario = { ...definition };
  delete scenario.pairedWorkload;
  const { report, events } = await exercise({ scenario });
  assert.equal(validate(report, scenario).status, "exercised");
  assert.equal(report.cases[0].name, "empty");
  assert.deepEqual(report.cases[0].activation.before, []);
  assert.deepEqual(report.cases[1].activation.before, ["sample"]);
  assert.deepEqual(report.comparison.workloadPhases, []);
  assert.equal(events.some((event) => event.startsWith("empty:prepare")), false);
  assert.deepEqual(report.cases[0].adapterCleanup, { status: "complete", registration: "closed", registered: 0, completed: 0 });
});

for (const paired of [false, true]) {
  test(`numeric workload phases retain host-first receipt order (${paired ? "paired" : "empty-host"})`, async () => {
    const scenario = { ...definition, requiredOperations: { "10": 2, "2": 1, tail: 1 } };
    if (!paired) delete scenario.pairedWorkload;
    const { report } = await exercise({ scenario });
    assert.equal(report.status, "exercised");
    for (const [index, item] of report.cases.entries()) {
      assert.deepEqual(item.phases.map(({ name }) => name), [
        "startup", "idle", "neutral-rpc", "post-neutral",
        ...(paired || index === 1 ? ["2", "10", "tail", "post-work"] : []),
      ]);
    }
    assert.equal(validate(report, scenario).status, "exercised");
    const reordered = structuredClone(report);
    const phases = reordered.cases[1].phases;
    phases.unshift(...phases.splice(4, 1));
    assert.throws(() => validate(reordered, scenario), /phases differ from declared case order/);
  });
}

for (const fault of ["unawaited", "unawaited-throw"]) {
  test(`${fault} measurement is handled and drained before host join and peer cleanup`, async () => {
    const gate = Promise.withResolvers();
    const started = Promise.withResolvers();
    let observedEvents;
    const task = exercise({
      scenario: { ...definition, requiredOperations: { "first-use": 1 } }, fault,
      hooks: { operation: async ({ onCleanup, events }) => {
        observedEvents = events;
        started.resolve();
        await gate.promise;
        // Still owned: registration stays open while admitted work drains.
        onCleanup(async () => { events.push("baseline:drain-resource-cleaned"); });
        throw new Error("deferred measurement failure");
      } },
    });
    await started.promise;
    await new Promise((resolve) => setImmediate(resolve));
    assert.equal(observedEvents.some((event) => event.includes("host-joined")), false);
    gate.resolve();
    const { report, events } = await task;
    assert.equal(report.status, "failed");
    assert.match(report.error, /must await workload measurements/);
    assert.match(report.error, /deferred measurement failure/);
    if (fault === "unawaited-throw") assert.match(report.error, /adapter primary failure/);
    assert.deepEqual(events.slice(-5), [
      "baseline:measurement-recorded", "baseline:host-joined", "baseline:drain-resource-cleaned",
      "baseline:cleanup-second", "baseline:cleanup-first",
    ]);
    assert.equal(report.cases[0].adapterCleanup.registered, 3);
    assert.equal(report.cases[0].adapterCleanup.completed, 3);
    const finalReceipt = JSON.stringify(report);
    const finalEvents = [...events];
    await new Promise((resolve) => setImmediate(resolve));
    assert.equal(JSON.stringify(report), finalReceipt);
    assert.deepEqual(events, finalEvents);
  });
}

test("cleanup rejects registration while closing even when its caller catches the error", async () => {
  let rejectedCallbackRan = false;
  const { report } = await exercise({ hooks: { duringCleanup: ({ onCleanup }) => {
    assert.throws(() => onCleanup(() => { rejectedCallbackRan = true; }), /registration is closing; caller retains cleanup ownership/);
  } } });
  assert.equal(rejectedCallbackRan, false);
  assert.equal(report.status, "failed");
  assert.equal(report.cases[0].adapterCleanup.registration, "closed");
  assert.equal(report.cases[0].adapterCleanup.status, "failed");
  assert.equal(report.cases[0].adapterCleanup.registered, 2);
  assert.equal(report.cases[0].adapterCleanup.completed, 2);
  assert.equal(validate(report).status, "failed");
});

test("a saved closed registration rejects ownership and invalidates the in-memory clean receipt", async () => {
  const { report, registrations } = await exercise();
  assert.equal(validate(report).status, "exercised");
  let rejectedCallbackRan = false;
  assert.throws(() => registrations[0].onCleanup(() => { rejectedCallbackRan = true; }), /registration is closed; caller retains cleanup ownership/);
  assert.equal(rejectedCallbackRan, false);
  assert.equal(report.status, "failed");
  assert.equal(report.cases[0].adapterCleanup.status, "failed");
  assert.equal(validate(report).status, "failed");
});

test("late baseline registration failure cannot be overwritten by enabled-case success", async () => {
  const { report } = await exercise({ hooks: { run: ({ enabled, registrations }) => {
    if (enabled) assert.throws(() => registrations[0].onCleanup(() => {}), /registration is closed/);
  } } });
  assert.deepEqual(report.cases.map(({ status }) => status), ["failed", "exercised"]);
  assert.equal(report.status, "failed");
  assert.equal(validate(report).status, "failed");
});

test("paired receipts bind installed archive bytes in both cases", async () => {
  const { report } = await exercise();
  assert.equal(validate(report).status, "exercised"); // Both bundled-only fixture arrays are empty.
  for (const item of report.cases) item.fixtures = [
    { archive: "dependency.tgz", sha256: artifact },
    { archive: "target.tgz", sha256: "d".repeat(64) },
  ];
  report.cases[1].fixtures.reverse();
  assert.equal(validate(report).status, "exercised");
  for (const change of [
    (value) => { value.cases[1].fixtures[0].sha256 = "e".repeat(64); },
    (value) => { delete value.cases[0].fixtures; },
    (value) => { value.cases[0].fixtures = null; },
    (value) => { value.cases[0].fixtures = [null]; },
    (value) => { value.cases[0].fixtures[0].sha256 = "not-a-digest"; },
    (value) => { delete value.cases[0].fixtures[0].archive; },
    (value) => { value.cases[0].fixtures[0].archive = "../target.tgz"; },
    (value) => { value.cases[0].fixtures.push(value.cases[0].fixtures[0]); },
    (value) => { value.cases[1].fixtures = []; },
  ]) {
    const broken = structuredClone(report);
    change(broken);
    assert.throws(() => validate(broken), /fixture (receipts|hashes)/);
  }
});

test("paired manifest validation rejects undeclared activation/dependencies and phase collisions", () => {
  const base = JSON.parse(readFileSync(new URL("../crabpot.config.json", import.meta.url), "utf8"));
  const manifest = { ...base, resourceWorkloads: [structuredClone(definition)] };
  assert.doesNotThrow(() => validateManifest(manifest));
  for (const pairedWorkload of [null, {}, [], { dependencies: ["provider"] },
    { dependencies: ["sample"], targetActivation: "workload" },
    { dependencies: ["provider", "provider"], targetActivation: "workload" },
    { dependencies: [""], targetActivation: "workload" },
    { dependencies: ["provider"], targetActivation: "unknown" },
    { dependencies: ["provider"], targetActivation: "workload", extra: true },
  ]) {
    assert.throws(() => validateManifest({ ...base, resourceWorkloads: [{ ...definition, pairedWorkload }] }), /pairedWorkload/);
  }
  assert.throws(() => validateManifest({ ...base, resourceWorkloads: [{ ...definition, requiredOperations: { startup: 1 } }] }), /non-reserved/);
});
