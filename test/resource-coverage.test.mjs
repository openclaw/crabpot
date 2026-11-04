import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { test } from "node:test";
import { buildResourceCoverage, renderResourceCoverageMarkdown, validatePluginInventory } from "../scripts/resource-coverage.mjs";

const commit = "a".repeat(40);
const artifact = "b".repeat(64);

function inventory() {
  // Keys are deliberately written in canonical order so this fixture does not
  // reuse the implementation's serializer to calculate its expected digest.
  const plugins = Array.from({ length: 160 }, (_, index) => ({
    declaredSurfaces: {},
    distribution: index < 63 ? "core" : index < 157 ? "external" : "source",
    id: `plugin-${index}`,
    manifestPath: `extensions/plugin-${index}/openclaw.plugin.json`,
    package: null,
    path: `extensions/plugin-${index}`,
  }));
  const payload = { plugins, schemaVersion: 1, scope: "source-manifests", source: { commit, kind: "git-tree", tree: "c".repeat(40) } };
  return { ...payload, sha256: createHash("sha256").update(JSON.stringify(payload)).digest("hex") };
}

function resign(value) {
  const { sha256: _digest, ...payload } = value;
  return { ...payload, sha256: createHash("sha256").update(JSON.stringify(payload)).digest("hex") };
}

function calibration() {
  const phase = (name, completed = 0) => ({
    name, status: "exercised", operations: { attempted: completed, completed, failed: 0 },
    before: { pid: 1, atMonotonicMicros: 1000, process: { user: 1000, system: 1000 }, mainThread: { user: 1000, system: 1000 }, memory: { rss: 1000, heapTotal: 100, heapUsed: 50, external: 20, arrayBuffers: 10 }, activeResources: { Timeout: 2 }, runtime: { node: "v24.19.0", platform: "linux", arch: "x64" } },
    after: { pid: 1, atMonotonicMicros: 11000, process: { user: 4000, system: 3000 }, mainThread: { user: 2000, system: 1000 }, memory: { rss: 900, heapTotal: 100, heapUsed: 30, external: 20, arrayBuffers: 10 }, activeResources: { Timeout: 1 }, runtime: { node: "v24.19.0", platform: "linux", arch: "x64" } },
    cpu: { pid: 1, startMonotonicMicros: 1000, endMonotonicMicros: 11000, wallMs: 10, process: { userMs: 3, systemMs: 2, totalMs: 5 }, mainThread: { userMs: 1, systemMs: 0, totalMs: 1 } },
    memoryChangeBytes: { rss: -100, heapTotal: 0, heapUsed: -20, external: 0, arrayBuffers: 0 },
    activeResourceChanges: { Timeout: -1 }, processCpuMsPerCompletedOperation: completed > 0 ? 5 / completed : null,
  });
  return {
    schemaVersion: 1,
    status: "exercised",
    provenance: {
      gateway: { commit }, entrySha256: artifact,
      fixture: { sha256: artifact, personality: "conformance", pluginId: "openclaw-kitchen-sink-fixture" },
      harnessSha256: { "./kitchen-sink-rpc-walk.mts": artifact },
    },
    measurement: { neutralOperations: 20, pluginToolOperations: 20, sampling: "phase boundaries only; no peak estimate or forced GC" },
    postDisposalResidual: { status: "unsupported", reason: "process exited" },
    cases: ["empty", "conformance"].map((name) => ({
      name, status: "exercised", activePlugins: name === "empty" ? [] : ["openclaw-kitchen-sink-fixture"],
      phases: [phase("startup"), phase("idle"), phase("neutral-rpc", 20), phase("post-neutral"), ...(name === "conformance" ? [phase("plugin-tool", 20), phase("post-tool")] : [])].map((observation, index) => {
        // Real phases are sequential cumulative observations, not overlapping
        // copies of the same ten-millisecond interval.
        const offset = index * 20000;
        for (const sample of [observation.before, observation.after]) {
          sample.atMonotonicMicros += offset;
          for (const scope of ["process", "mainThread"]) for (const key of ["user", "system"]) sample[scope][key] += offset;
          sample.cpuEnvironment = { availableParallelism: 2, affinity: "0-1" };
        }
        observation.cpu.startMonotonicMicros += offset;
        observation.cpu.endMonotonicMicros += offset;
        observation.cpu.cpuEnvironment = observation.before.cpuEnvironment;
        return observation;
      }),
      shutdown: { exited: true, exitCode: 0, signal: null, signals: ["SIGTERM"] },
    })),
  };
}

function coverage(report, source = inventory()) {
  return buildResourceCoverage({ inventory: source, kitchenSinkReport: report, configuredFixtureCount: 59, selectedFixtureCount: 3 });
}

test("inventory coverage stays complete and separate from fixture subsets", () => {
  const result = coverage();
  assert.deepEqual(result.summary, { core: 63, external: 94, source: 3, exercised: 0, blocked: 0, unsupported: 160, failed: 0 });
  assert.deepEqual(result.fixtures, { configured: 59, selected: 3 });
  assert.equal(result.plugins.length, 160);
  assert.ok(result.plugins.every((plugin) => plugin.reason === "no-workload-adapter"));
  assert.deepEqual(result.calibration, { status: "blocked", reason: "not-run" });
  const markdown = renderResourceCoverageMarkdown(result);
  assert.match(markdown, /160\*\* plugins/);
  assert.match(markdown, /59\*\*; selected: \*\*3/);
  assert.equal(markdown.split("| unsupported | no-workload-adapter |").length - 1, 160);
});

function splitCalibration() {
  const report = calibration();
  const phases = report.cases[1].phases;
  const aggregate = phases[4];
  const session = structuredClone(aggregate);
  session.name = "session-create";
  session.operations = { attempted: 1, completed: 1, failed: 0 };
  session.processCpuMsPerCompletedOperation = 5;
  for (const sample of [session.before, session.after]) {
    sample.atMonotonicMicros -= 10000;
    for (const scope of ["process", "mainThread"]) for (const key of ["user", "system"]) sample[scope][key] -= 10000;
  }
  session.cpu.startMonotonicMicros -= 10000;
  session.cpu.endMonotonicMicros -= 10000;
  phases.splice(4, 0, session);
  const first = structuredClone(aggregate);
  const warm = structuredClone(aggregate);
  first.name = "plugin-tool-first";
  warm.name = "plugin-tool-warm";
  const midpoint = structuredClone(aggregate.before);
  midpoint.atMonotonicMicros += 5000;
  midpoint.process.user += 1000;
  midpoint.process.system += 1000;
  midpoint.mainThread.user += 500;
  midpoint.memory.rss -= 40;
  midpoint.memory.heapUsed -= 8;
  midpoint.activeResources.Timeout = 0;
  first.after = midpoint;
  warm.before = midpoint;
  for (const [child, count] of [[first, 1], [warm, 19]]) {
    child.operations = { attempted: count, completed: count, failed: 0 };
    child.cpu.startMonotonicMicros = child.before.atMonotonicMicros;
    child.cpu.endMonotonicMicros = child.after.atMonotonicMicros;
    child.cpu.wallMs = 5;
    for (const scope of ["process", "mainThread"]) {
      child.cpu[scope].userMs = (child.after[scope].user - child.before[scope].user) / 1000;
      child.cpu[scope].systemMs = (child.after[scope].system - child.before[scope].system) / 1000;
      child.cpu[scope].totalMs = child.cpu[scope].userMs + child.cpu[scope].systemMs;
    }
    for (const key of Object.keys(child.before.memory)) child.memoryChangeBytes[key] = child.after.memory[key] - child.before.memory[key];
    child.activeResourceChanges.Timeout = child.after.activeResources.Timeout - child.before.activeResources.Timeout;
    child.processCpuMsPerCompletedOperation = child.cpu.process.totalMs / count;
  }
  aggregate.breakdown = [first, warm];
  return report;
}

test("session/first/warm admission is separate from legacy aggregate credit", () => {
  const legacy = coverage(calibration());
  assert.equal(legacy.calibration.status, "exercised");
  assert.deepEqual(legacy.calibration.sessionToolBreakdown, { status: "blocked", reason: "legacy-aggregate-only" });
  const report = splitCalibration();
  const result = coverage(report);
  assert.deepEqual(result.calibration.sessionToolBreakdown, { status: "exercised", reason: "validated-session-first-warm" });
  assert.deepEqual(result.calibration.cases, report.cases);
  assert.equal(result.summary.exercised, 0);
  const [first, warm] = result.calibration.cases[1].phases[5].breakdown;
  assert.equal(first.memoryChangeBytes.rss, -40);
  assert.equal(warm.memoryChangeBytes.rss, -60);
  assert.equal(first.processCpuMsPerCompletedOperation, 2);
  assert.equal(warm.processCpuMsPerCompletedOperation, 3 / 19);
  assert.match(renderResourceCoverageMarkdown(result), /Session\/first\/warm: \*\*exercised\*\*/);
  assert.match(renderResourceCoverageMarkdown(legacy), /Session\/first\/warm: \*\*blocked\*\*/);
});

test("successful session/tool receipts reject missing, misplaced and nested observations", () => {
  const changes = [
    (r) => { r.cases[1].phases.splice(4, 1); },
    (r) => { delete r.cases[1].phases[5].breakdown; },
    (r) => { r.cases[0].phases.push(r.cases[1].phases[4]); },
    (r) => { r.cases[0].phases[0].breakdown = []; },
    (r) => { r.cases[1].phases[5].breakdown = []; },
    (r) => { r.cases[1].phases[5].breakdown = [r.cases[1].phases[5].breakdown[0]]; },
    (r) => { r.cases[1].phases[5].breakdown = [r.cases[1].phases[5].breakdown[1]]; },
    (r) => { r.cases[1].phases[5].breakdown = "not observations"; },
    (r) => { r.cases[1].phases[5].breakdown[0] = null; },
    (r) => { r.cases[1].phases[5].breakdown.reverse(); },
    (r) => { r.cases[1].phases[5].breakdown.push(r.cases[1].phases[5].breakdown[0]); },
    (r) => { r.cases[1].phases[5].breakdown[1].name = "plugin-tool-first"; },
    (r) => { r.cases[1].phases[5].breakdown[0].breakdown = []; },
    (r) => { [r.cases[1].phases[4], r.cases[1].phases[5]] = [r.cases[1].phases[5], r.cases[1].phases[4]]; },
    (r) => { r.measurement.pluginToolOperations = 1; },
    (r) => { r.cases[1].phases[4].operations = { attempted: 0, completed: 0, failed: 0 }; r.cases[1].phases[4].processCpuMsPerCompletedOperation = null; },
  ];
  for (const change of changes) {
    const report = splitCalibration(); change(report);
    assert.throws(() => coverage(report), /resource coverage:/);
  }
});

test("session/tool split validates child counters, raw arithmetic, identities and exact boundaries", () => {
  const changes = [
    (p) => { p.operations.attempted++; },
    (p) => { p.operations = { attempted: 18, completed: 18, failed: 0 }; p.processCpuMsPerCompletedOperation = 3 / 18; },
    (p) => { p.status = "failed"; },
    (p) => { p.after = null; },
    (p) => { p.cpu.process.totalMs++; },
    (p) => { p.cpu.mainThread.userMs++; },
    (p) => { p.cpu.wallMs++; },
    (p) => { p.memoryChangeBytes.rss++; },
    (p) => { p.activeResourceChanges.Timeout++; },
    (p) => { p.processCpuMsPerCompletedOperation++; },
    (p) => { p.before.pid = p.after.pid = p.cpu.pid = 2; },
    (p) => { p.before.runtime.node = p.after.runtime.node = "v26.0.0"; },
    (p) => { p.before.cpuEnvironment = p.after.cpuEnvironment = p.cpu.cpuEnvironment = { availableParallelism: 4 }; },
    (p) => { delete p.before.activeResources; },
    (p) => { p.before.memory.rss++; p.after.memory.rss++; },
    (p) => { p.before.atMonotonicMicros++; p.after.atMonotonicMicros++; p.cpu.startMonotonicMicros++; p.cpu.endMonotonicMicros++; },
  ];
  for (const change of changes) {
    const report = splitCalibration();
    // Break shared JS references: the on-disk producer receipt is plain JSON.
    const copy = JSON.parse(JSON.stringify(report));
    change(copy.cases[1].phases[5].breakdown[1]);
    assert.throws(() => coverage(copy), /resource coverage:/);
  }
  const overlap = splitCalibration();
  const session = overlap.cases[1].phases[4];
  session.before.atMonotonicMicros -= 1;
  session.after.atMonotonicMicros -= 1;
  session.cpu.startMonotonicMicros -= 1;
  session.cpu.endMonotonicMicros -= 1;
  assert.throws(() => coverage(overlap), /phases overlap/);
  for (const change of [
    (p) => { p.before.pid = p.after.pid = p.cpu.pid = 2; },
    (p) => { p.before.runtime.node = p.after.runtime.node = "v26.0.0"; },
    (p) => { p.before.cpuEnvironment = p.after.cpuEnvironment = p.cpu.cpuEnvironment = { availableParallelism: 4 }; },
  ]) {
    const report = splitCalibration(); change(report.cases[1].phases[4]);
    assert.throws(() => coverage(report), /changed Gateway/);
  }
});

test("failed partial splits preserve observations and earlier success without split credit", () => {
  for (const kind of ["session", "first", "warm", "observation"]) {
    const report = splitCalibration();
    report.status = report.cases[1].status = "failed";
    report.error = `synthetic ${kind} failure`;
    const active = report.cases[1];
    const aggregate = active.phases[5];
    active.phases = active.phases.slice(0, kind === "session" ? 5 : 6);
    const failed = kind === "session" ? active.phases[4] : aggregate;
    failed.status = "failed";
    failed.operations = kind === "warm" ? { attempted: 4, completed: 3, failed: 1 } : kind === "observation" ? { attempted: 1, completed: 1, failed: 0 } : { attempted: 1, completed: 0, failed: 1 };
    failed.after = null;
    if (kind !== "session") aggregate.breakdown = kind === "warm" || kind === "observation" ? [aggregate.breakdown[0]] : [];
    const result = coverage(report);
    assert.equal(result.calibration.status, "failed");
    assert.deepEqual(result.calibration.sessionToolBreakdown, { status: "blocked", reason: "producer-failure" });
    assert.deepEqual(result.calibration.cases, report.cases);
    assert.equal(result.calibration.error, report.error);
  }
  const stale = splitCalibration();
  stale.provenance.gateway.commit = "d".repeat(40);
  const result = coverage(stale);
  assert.equal(result.calibration.status, "blocked");
  assert.deepEqual(result.calibration.sessionToolBreakdown, { status: "blocked", reason: "inventory-source-mismatch" });
  assert.deepEqual(result.calibration.cases, stale.cases);
});

test("calibration work never earns workload credit for inventory plugins", () => {
  const result = coverage(calibration());
  assert.equal(result.calibration.status, "exercised");
  assert.equal(result.summary.exercised, 0);
  assert.equal(result.summary.unsupported, 160);
  assert.equal(result.calibration.cases[1].phases[4].operations.completed, 20);
  assert.equal(result.calibration.cases[1].phases[4].memoryChangeBytes.rss, -100);
  assert.equal(result.calibration.postDisposalResidual.status, "unsupported");
});

function omitActiveResources(phase) {
  delete phase.before.activeResources;
  delete phase.after.activeResources;
  delete phase.activeResourceChanges;
}

test("Kitchen Sink v1 accepts the original producer without active-resource observations", () => {
  const report = calibration();
  // OpenClaw 50ea1795 emitted these CPU/memory fields before adding resource
  // histograms to the same v1 report. Missing observations must stay missing.
  for (const item of report.cases) item.phases.forEach(omitActiveResources);
  const result = coverage(report);
  assert.equal(result.calibration.status, "exercised");
  assert.equal(result.summary.exercised, 0);
  assert.equal(result.calibration.cases[1].phases[4].before.activeResources, undefined);
  assert.equal(result.calibration.cases[1].phases[4].activeResourceChanges, undefined);
});

test("optional calibration resource observations must be complete and consistent", () => {
  for (const change of [
    (phase) => { delete phase.before.activeResources; },
    (phase) => { delete phase.after.activeResources; },
    (phase) => { delete phase.activeResourceChanges; },
    (phase) => { phase.activeResourceChanges.Timeout = 0; },
  ]) {
    const report = calibration();
    change(report.cases[1].phases[4]);
    assert.throws(() => coverage(report), /active resources/);
  }
});

test("failed and stale-source receipts retain producer outcomes without credit", () => {
  const report = calibration();
  report.status = "failed";
  report.cases[1].status = "failed";
  report.cases[1].error = "synthetic operation failed";
  const operation = report.cases[1].phases[4];
  operation.status = "failed";
  operation.operations = { attempted: 4, completed: 3, failed: 1 };
  operation.after = null;
  const failed = coverage(report);
  assert.equal(failed.calibration.status, "failed");
  assert.equal(failed.calibration.cases[1].error, "synthetic operation failed");
  assert.deepEqual(failed.calibration.cases[1].phases[4].operations, operation.operations);
  report.provenance.gateway.commit = "d".repeat(40);
  const stale = coverage(report);
  assert.equal(stale.calibration.status, "blocked");
  assert.equal(stale.calibration.reason, "inventory-source-mismatch");
  assert.equal(stale.calibration.producerStatus, "failed");
  assert.deepEqual(stale.summary, failed.summary);
});

test("collector and import reports cannot masquerade as workload calibration", () => {
  for (const report of [{ coverage: "collector-contract-only", samples: [], deltas: [] }, { status: "pass", imports: [] }, null]) {
    assert.throws(() => coverage(report), /expected Kitchen Sink resource report/);
  }
});

test("report cells render plugin IDs and disposal reasons as inert text", () => {
  const source = inventory();
  source.plugins[0].id = "![image](https://example.invalid/image)|<tag>\n**bold**";
  const report = calibration();
  report.postDisposalResidual.reason = "[link](https://example.invalid/) & `code`";
  const markdown = renderResourceCoverageMarkdown(coverage(report, resign(source)));
  assert.match(markdown, /&#33;&#91;image&#93;&#40;https&#58;&#47;&#47;example&#46;invalid&#47;image&#41;&#124;&#60;tag&#62; &#42;&#42;bold&#42;&#42;/);
  assert.match(markdown, /&#91;link&#93;&#40;https&#58;&#47;&#47;example&#46;invalid&#47;&#41; &#38; &#96;code&#96;/);
  assert.doesNotMatch(markdown, /!\[image\]|\[link\]\(|<tag>|\*\*bold\*\*/);
});

test("invalid inventory digests, identities, paths and duplicate rows fail admission", () => {
  const broken = inventory();
  broken.plugins.pop();
  assert.throws(() => validatePluginInventory(broken), /digest mismatch/);
  for (const change of [
    (value) => { value.plugins[1].id = value.plugins[0].id; },
    (value) => { value.plugins[0].path = "extensions/.."; },
    (value) => { value.plugins[0].distribution = "unknown"; },
    (value) => { value.source.commit = "main"; },
  ]) {
    const value = inventory();
    change(value);
    assert.throws(() => validatePluginInventory(resign(value)), /resource coverage:/);
  }
});

test("success needs measured completions, phase observations, identity and joined shutdown", () => {
  for (const change of [
    (value) => { value.cases[1].phases[4].operations.completed = 19; },
    (value) => { value.cases[1].phases[4].after = null; },
    (value) => { value.cases[1].phases.shift(); },
    (value) => { value.cases[1].activePlugins.push("unexpected"); },
    (value) => { value.cases[1].shutdown.exited = false; },
    (value) => { value.cases[1].shutdown.signal = "SIGKILL"; },
    (value) => { value.cases[1].shutdown.signals.push("SIGKILL"); },
  ]) {
    const report = calibration();
    change(report);
    assert.throws(() => coverage(report), /resource coverage:/);
  }
});

const resourceWorkloads = [{ id: "card-crud-v1", pluginId: "plugin-0", requiredOperations: { "first-use": 1, "warm-work": 20 } }];

function workload() {
  const source = inventory();
  const control = calibration();
  const phase = (name, completed = 0) => ({
    ...structuredClone(control.cases[0].phases[0]), name,
    operations: { attempted: completed, completed, failed: 0 },
    processCpuMsPerCompletedOperation: completed > 0 ? 5 / completed : null,
  });
  return {
    schemaVersion: 1, kind: "plugin-resource-workload", status: "exercised", reason: "measured-plugin-workload",
    inventory: { source: source.source, sha256: source.sha256 },
    scenario: { id: "card-crud-v1", pluginId: "plugin-0", requirements: resourceWorkloads[0].requiredOperations },
    provenance: { adapterSha256: artifact, consumerSha256: artifact, harnessSha256: { host: artifact } },
    measurement: { sampling: "boundaries only" },
    cases: ["empty", "plugin-0"].map((name) => ({
      ...structuredClone(control.cases[0]), name,
      host: { commit, entrySha256: artifact },
      activePlugins: name === "empty" ? [] : [name],
      phases: [phase("startup"), phase("idle"), phase("neutral-rpc", 20), phase("post-neutral"),
        ...(name === "empty" ? [] : [phase("first-use", 1), phase("warm-work", 20), phase("post-work")])],
    })),
  };
}

function workloadCoverage(report) {
  return buildResourceCoverage({ inventory: inventory(), workloadReports: [report], resourceWorkloads, configuredFixtureCount: 59, selectedFixtureCount: 3 });
}

test("configured workloads without receipts are blocked within the source inventory denominator", () => {
  const definition = resourceWorkloads[0];
  const result = buildResourceCoverage({
    inventory: inventory(), configuredFixtureCount: 59, selectedFixtureCount: 0,
    resourceWorkloads: [
      { ...definition, pairedWorkload: { dependencies: ["plugin-1"], targetActivation: "workload" } },
      { ...definition, id: "second-scenario-v1" },
      { ...definition, id: "external-v1", pluginId: "plugin-63" },
      { ...definition, id: "outside-inventory-v1", pluginId: "outside-inventory" },
    ],
  });
  assert.deepEqual(result.summary, { core: 63, external: 94, source: 3, exercised: 0, blocked: 2, unsupported: 158, failed: 0 });
  assert.equal(result.inventory.count, 160);
  assert.equal(result.plugins.length, 160);
  assert.deepEqual(result.fixtures, { configured: 59, selected: 0 });
  assert.equal(result.workloads, undefined);
  for (const index of [0, 63]) {
    assert.equal(result.plugins[index].status, "blocked");
    assert.equal(result.plugins[index].reason, "workload-report-not-supplied");
    assert.equal(result.plugins[index].scenario, undefined);
  }
  // A declared dependency is not an adapter, and multiple scenarios do not
  // duplicate their plugin's row or create an observation that was not supplied.
  assert.equal(result.plugins[1].status, "unsupported");
  assert.equal(result.plugins[1].reason, "no-workload-adapter");
  const markdown = renderResourceCoverageMarkdown(result);
  assert.match(markdown, /160\*\* plugins/);
  assert.match(markdown, /59\*\*; selected: \*\*0/);
  assert.equal(markdown.split("| blocked | workload-report-not-supplied |").length - 1, 2);
  assert.equal(markdown.split("| unsupported | no-workload-adapter |").length - 1, 158);
});

test("supplied workload receipts replace the missing-report state with their explicit outcome", () => {
  for (const status of ["blocked", "failed", "exercised"]) {
    const report = workload();
    report.status = status;
    report.reason = `observed-${status}`;
    const result = workloadCoverage(report);
    assert.equal(result.plugins[0].status, status);
    assert.equal(result.plugins[0].reason, report.reason);
    assert.equal(result.plugins[0].scenario, report.scenario.id);
    assert.equal(result.workloads[0].reason, report.reason);
    assert.equal(result.summary[status], 1);
    assert.equal(result.summary.unsupported, 159);
    assert.equal(result.summary.exercised, status === "exercised" ? 1 : 0);
    assert.doesNotMatch(renderResourceCoverageMarkdown(result), /workload-report-not-supplied/);
  }
});

test("validated real-host workload credits exactly one source-inventory row", () => {
  const result = workloadCoverage(workload());
  assert.equal(result.summary.exercised, 1);
  assert.equal(result.summary.unsupported, 159);
  assert.equal(result.plugins[0].scenario, "card-crud-v1");
  assert.equal(result.calibration.status, "blocked");
  assert.deepEqual(result.workloads[0].cases[1].phases[5].memoryChangeBytes, workload().cases[1].phases[5].memoryChangeBytes);
});

test("incomplete, stale or failed workloads never count as exercised", () => {
  for (const status of ["blocked", "failed"]) {
    const report = workload();
    report.status = status;
    report.cases[1].status = status;
    report.cases[1].phases = report.cases[1].phases.slice(0, 4);
    const result = workloadCoverage(report);
    assert.equal(result.summary.exercised, 0);
    assert.equal(result.summary[status], 1);
  }
  const stale = workload();
  stale.inventory.sha256 = "f".repeat(64);
  assert.equal(workloadCoverage(stale).plugins[0].reason, "inventory-source-mismatch");
});

test("successful workload rejects wrong identity, reduced work, lost samples and forced cleanup", () => {
  for (const change of [
    (report) => { report.scenario.pluginId = "plugin-1"; },
    (report) => { report.scenario.requirements = { "warm-work": 1 }; },
    (report) => { report.cases[1].activePlugins.push("unexpected"); },
    (report) => { report.cases[1].host.commit = "d".repeat(40); },
    (report) => { report.cases[1].host.entrySha256 = "d".repeat(64); },
    (report) => {
      for (const sample of ["before", "after", "cpu"]) {
        report.cases[1].phases[5][sample].cpuEnvironment = { availableParallelism: 4, affinity: "0-3" };
      }
    },
    (report) => { report.cases[1].phases[5].operations = { attempted: 19, completed: 19, failed: 0 }; },
    (report) => { report.cases[1].phases[5].after = null; },
    (report) => { report.cases[1].phases[5].after.pid = 2; },
    (report) => { report.cases[1].phases.forEach(omitActiveResources); },
    (report) => { report.cases[1].shutdown.signals.push("SIGKILL"); },
  ]) {
    const report = workload();
    change(report);
    assert.throws(() => workloadCoverage(report), /resource coverage:/);
  }
  const report = workload();
  assert.throws(() => buildResourceCoverage({ inventory: inventory(), workloadReports: [report, report], resourceWorkloads, configuredFixtureCount: 1, selectedFixtureCount: 1 }), /duplicate workload report/);
});

test("coverage requires complete snapshots and consistent derived measurements", () => {
  const changes = [
    (phase) => { phase.before = { pid: 1 }; },
    (phase) => { delete phase.after.runtime; },
    (phase) => { delete phase.before.memory; },
    (phase) => { delete phase.after.process; },
    (phase) => { delete phase.after.mainThread; },
    (phase) => { delete phase.before.atMonotonicMicros; },
    (phase) => { phase.after.atMonotonicMicros = phase.before.atMonotonicMicros; },
    (phase) => { phase.after.mainThread.user = -1; },
    (phase) => { phase.after.memory.rss = -1; },
    (phase) => { phase.after.runtime.node = "v26.0.0"; },
    (phase) => { phase.after.cpuEnvironment = { availableParallelism: 2 }; },
    (phase) => { phase.cpu.pid = 2; },
    (phase) => { phase.cpu.wallMs = 20; },
    (phase) => { phase.cpu.process.totalMs = 10; },
    (phase) => { phase.cpu.mainThread.userMs = 2; },
    (phase) => { phase.memoryChangeBytes.rss = 0; },
    (phase) => { phase.activeResourceChanges.Timeout = 0; },
    (phase) => { phase.processCpuMsPerCompletedOperation = 0; },
  ];
  for (const change of changes) {
    const report = workload();
    change(report.cases[1].phases[5]);
    assert.throws(() => workloadCoverage(report), /resource coverage:/);
    const control = calibration();
    change(control.cases[1].phases[4]);
    assert.throws(() => coverage(control), /resource coverage:/);
  }
});
