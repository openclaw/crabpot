import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { requiredCaseOperations, resourceWorkloadComparison, resourceWorkloadPlan } from "./resource-workload-contract.mjs";

const distributions = ["core", "external", "source"];
const sha = /^[0-9a-f]{40}$/;
const digest = /^[0-9a-f]{64}$/;
const record = (value) => value !== null && typeof value === "object" && !Array.isArray(value);

function requireValue(condition, message) {
  if (!condition) throw new Error(`resource coverage: ${message}`);
}

// This is the producer's JSON-only stable serialization contract: sorted object
// keys, original array order. Do not replace it with insertion-order stringify.
function stableJson(value) {
  if (Array.isArray(value)) return `[${value.map(stableJson).join(",")}]`;
  if (record(value)) {
    return `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${stableJson(value[key])}`).join(",")}}`;
  }
  return JSON.stringify(value);
}

export function validatePluginInventory(inventory) {
  requireValue(record(inventory) && inventory.schemaVersion === 1 && inventory.scope === "source-manifests", "expected source plugin inventory v1");
  requireValue(inventory.source?.kind === "git-tree" && sha.test(inventory.source.commit) && sha.test(inventory.source.tree), "inventory needs committed source and tree identities");
  requireValue(Array.isArray(inventory.plugins) && digest.test(inventory.sha256), "inventory needs plugins and a SHA-256 digest");
  const { sha256, ...payload } = inventory;
  requireValue(createHash("sha256").update(stableJson(payload)).digest("hex") === sha256, "inventory digest mismatch");
  const ids = new Set();
  const paths = new Set();
  for (const plugin of inventory.plugins) {
    requireValue(record(plugin) && typeof plugin.id === "string" && plugin.id.trim().length > 0, "invalid plugin ID");
    requireValue(!ids.has(plugin.id), `duplicate plugin ID: ${plugin.id}`);
    requireValue(typeof plugin.path === "string" && /^extensions\/[^/\\\s]+$/.test(plugin.path) && ![".", ".."].includes(plugin.path.slice(11)), `invalid plugin path: ${plugin.id}`);
    requireValue(plugin.manifestPath === `${plugin.path}/openclaw.plugin.json` && !paths.has(plugin.path), `invalid or duplicate manifest path: ${plugin.id}`);
    requireValue(distributions.includes(plugin.distribution) && record(plugin.declaredSurfaces), `invalid plugin metadata: ${plugin.id}`);
    requireValue(plugin.package === null || (record(plugin.package) && [plugin.package.name, plugin.package.version].every((value) => value === null || typeof value === "string")), `invalid package metadata: ${plugin.id}`);
    ids.add(plugin.id);
    paths.add(plugin.path);
  }
  return inventory;
}

function validateOperations(operations) {
  return record(operations) && ["attempted", "completed", "failed"].every((key) =>
    Number.isSafeInteger(operations[key]) && operations[key] >= 0,
  ) && operations.attempted === operations.completed + operations.failed;
}

function cleanShutdown(shutdown) {
  return shutdown?.exited === true && shutdown.exitCode === 0 && shutdown.signal === null &&
    Array.isArray(shutdown.signals) && !shutdown.signals.includes("SIGKILL");
}

function validateSuccessfulPhase(phase, requireActiveResources = true) {
  requireValue(phase.status === "exercised" && phase.operations.failed === 0 && record(phase.before) && record(phase.after) && record(phase.cpu) && record(phase.memoryChangeBytes), "successful workload has an incomplete phase observation");
  const { before, after, cpu } = phase;
  // Earlier Kitchen Sink v1 producers omit this entire observation. Partial
  // observations still fail; new workload receipts require the complete trio.
  const hasActiveResources = requireActiveResources || [before.activeResources, after.activeResources, phase.activeResourceChanges].some((value) => value !== undefined);
  const nonnegative = (value) => Number.isFinite(value) && value >= 0;
  const memoryFields = ["rss", "heapTotal", "heapUsed", "external", "arrayBuffers"];
  for (const sample of [before, after]) {
    requireValue(Number.isSafeInteger(sample.pid) && sample.pid > 0 && nonnegative(sample.atMonotonicMicros), "invalid snapshot process/time identity");
    requireValue(record(sample.runtime) && ["node", "platform", "arch"].every((key) => typeof sample.runtime[key] === "string" && sample.runtime[key].length > 0), "missing snapshot runtime identity");
    requireValue(record(sample.memory) && memoryFields.every((key) => nonnegative(sample.memory[key])), "invalid snapshot memory");
    for (const scope of ["process", "mainThread"]) {
      requireValue(record(sample[scope]) && ["user", "system"].every((key) => nonnegative(sample[scope][key])), "invalid snapshot CPU counters");
    }
    if (sample.cpuEnvironment !== undefined) {
      requireValue(record(sample.cpuEnvironment) && Number.isSafeInteger(sample.cpuEnvironment.availableParallelism) && sample.cpuEnvironment.availableParallelism > 0 && (sample.cpuEnvironment.affinity === undefined || typeof sample.cpuEnvironment.affinity === "string"), "invalid snapshot CPU environment");
    }
    if (hasActiveResources) requireValue(record(sample.activeResources) && Object.values(sample.activeResources).every((count) => Number.isSafeInteger(count) && count >= 0), "invalid snapshot active resources");
  }
  requireValue(before.pid === after.pid && cpu.pid === after.pid && stableJson(before.runtime) === stableJson(after.runtime) && stableJson(before.cpuEnvironment) === stableJson(after.cpuEnvironment) && stableJson(cpu.cpuEnvironment) === stableJson(before.cpuEnvironment), "phase changed Gateway identity or CPU environment");
  requireValue(after.atMonotonicMicros > before.atMonotonicMicros && cpu.startMonotonicMicros === before.atMonotonicMicros && cpu.endMonotonicMicros === after.atMonotonicMicros && cpu.wallMs === (after.atMonotonicMicros - before.atMonotonicMicros) / 1000, "phase wall time differs from snapshots");
  // Credit requires raw observations and matching derived values. A summary
  // copied from another run must not turn missing measurements into coverage.
  for (const scope of ["process", "mainThread"]) {
    const userMs = (after[scope].user - before[scope].user) / 1000;
    const systemMs = (after[scope].system - before[scope].system) / 1000;
    requireValue(userMs >= 0 && systemMs >= 0 && cpu[scope]?.userMs === userMs && cpu[scope]?.systemMs === systemMs && cpu[scope]?.totalMs === userMs + systemMs, "phase CPU differs from snapshots");
  }
  requireValue(memoryFields.every((key) => phase.memoryChangeBytes[key] === after.memory[key] - before.memory[key]), "phase memory differs from snapshots");
  if (hasActiveResources) {
    const resources = Object.fromEntries([...new Set([...Object.keys(before.activeResources), ...Object.keys(after.activeResources)])].sort().map((key) => [key, (after.activeResources[key] ?? 0) - (before.activeResources[key] ?? 0)]));
    requireValue(stableJson(phase.activeResourceChanges) === stableJson(resources), "phase active resources differ from snapshots");
  }
  requireValue(phase.processCpuMsPerCompletedOperation === (phase.operations.completed > 0 ? cpu.process.totalMs / phase.operations.completed : null), "phase per-operation CPU differs from completed work");
}

function readCalibration(report, inventory) {
  if (report === undefined) return { status: "blocked", reason: "not-run" };
  requireValue(record(report) && report.schemaVersion === 1 && ["failed", "exercised"].includes(report.status) && Array.isArray(report.cases), "expected Kitchen Sink resource report v1; collector/import reports are not workload receipts");
  const provenance = report.provenance;
  requireValue(sha.test(provenance?.gateway?.commit) && digest.test(provenance?.entrySha256) && digest.test(provenance?.fixture?.sha256), "Kitchen Sink report lacks source/artifact identities");
  // The real Gateway producer uses this synthetic fixture identity. It is not
  // an inventory plugin and must never earn workload credit for another row.
  requireValue(provenance.fixture.personality === "conformance" && provenance.fixture.pluginId === "openclaw-kitchen-sink-fixture", "unexpected Kitchen Sink fixture identity");
  requireValue(record(provenance.harnessSha256) && Object.keys(provenance.harnessSha256).length > 0 && Object.values(provenance.harnessSha256).every((value) => digest.test(value)), "Kitchen Sink report lacks harness identities");
  requireValue(record(report.measurement) && record(report.postDisposalResidual), "Kitchen Sink report lacks measurement limits");
  requireValue(report.cases.length === 2 && report.cases[0].name === "empty" && report.cases[1].name === "conformance", "Kitchen Sink report needs the ordered empty/conformance cases");
  for (const item of report.cases) {
    requireValue(["blocked", "failed", "exercised"].includes(item.status) && Array.isArray(item.phases), "invalid Kitchen Sink case");
    const phaseNames = new Set();
    for (const phase of item.phases) {
      requireValue(typeof phase.name === "string" && !phaseNames.has(phase.name) && ["failed", "exercised"].includes(phase.status) && validateOperations(phase.operations), "invalid or duplicate measured phase");
      phaseNames.add(phase.name);
    }
    if (report.status !== "exercised") continue;
    const expectedPhases = ["startup", "idle", "neutral-rpc", "post-neutral", ...(item.name === "conformance" ? ["plugin-tool", "post-tool"] : [])];
    requireValue(expectedPhases.every((name) => phaseNames.has(name)), "successful calibration is missing a measured phase");
    const expectedPlugins = item.name === "empty" ? [] : [provenance.fixture.pluginId];
    requireValue(item.status === "exercised" && JSON.stringify(item.activePlugins) === JSON.stringify(expectedPlugins), "successful calibration has an invalid active-plugin inventory");
    requireValue(cleanShutdown(item.shutdown), "successful calibration lacks clean joined shutdown");
    for (const phase of item.phases) {
      validateSuccessfulPhase(phase, false);
    }
    for (const [phaseName, count] of [
      ["neutral-rpc", report.measurement.neutralOperations],
      ...(item.name === "conformance" ? [["plugin-tool", report.measurement.pluginToolOperations]] : []),
    ]) {
      const phase = item.phases.find((candidate) => candidate.name === phaseName);
      requireValue(Number.isSafeInteger(count) && count > 0 && phase?.operations.completed === count, `successful calibration lacks ${phaseName} completions`);
    }
  }
  const matchesInventory = provenance.gateway.commit === inventory.source.commit;
  return {
    status: matchesInventory ? report.status : "blocked",
    reason: matchesInventory ? (report.status === "exercised" ? "measured-kitchen-sink-workload" : "producer-failure") : "inventory-source-mismatch",
    // These hashes identify producer-reported artifacts; this reader has not
    // independently re-hashed the Gateway, fixture, or harness artifact bytes.
    provenance,
    measurement: report.measurement,
    producerStatus: report.status,
    cases: report.cases,
    postDisposalResidual: report.postDisposalResidual,
    ...(report.error ? { error: report.error } : {}),
  };
}

export function validateResourceWorkloadReport(report, inventory, definitions) {
  requireValue(record(report) && [1, 2].includes(report.schemaVersion) && report.kind === "plugin-resource-workload" && ["blocked", "failed", "exercised"].includes(report.status), "expected plugin resource workload v1 or v2");
  requireValue(typeof report.reason === "string" && report.reason.length > 0, "workload needs an outcome reason");
  const definition = definitions.find(({ id }) => id === report.scenario?.id);
  requireValue(definition && definition.pluginId === report.scenario.pluginId, "unknown workload or plugin identity");
  const plans = resourceWorkloadPlan(definition);
  // Published v1 receipts describe an empty-host control and startup activation.
  // They cannot attest a later scenario requiring dependencies or paired work.
  requireValue(report.schemaVersion !== 1 || definition.pairedWorkload === undefined, "v1 cannot attest paired workload requirements");
  if (report.schemaVersion === 2) {
    requireValue(stableJson(report.scenario.pairedWorkload) === stableJson(definition.pairedWorkload), "workload comparison contract differs from configured scenario");
    requireValue(digest.test(report.provenance?.contractSha256), "workload lacks contract identity");
  }
  requireValue(stableJson(definition.requiredOperations) === stableJson(report.scenario.requirements), "workload requirements differ from the configured scenario");
  requireValue(inventory.plugins.some(({ id }) => id === definition.pluginId), "workload plugin absent from inventory");
  requireValue((definition.pairedWorkload?.dependencies ?? []).every((dependency) => inventory.plugins.some(({ id }) => id === dependency)), "workload dependency absent from inventory");
  requireValue(sha.test(report.inventory?.source?.commit) && digest.test(report.inventory?.sha256), "workload lacks inventory identity");
  requireValue(digest.test(report.provenance?.adapterSha256) && digest.test(report.provenance?.consumerSha256) && record(report.measurement) && Array.isArray(report.cases), "workload lacks producer provenance or observations");
  for (const item of report.cases) {
    requireValue(["blocked", "failed", "exercised"].includes(item.status) && Array.isArray(item.phases), "invalid workload case");
    const names = new Set();
    for (const phase of item.phases) {
      requireValue(typeof phase.name === "string" && !names.has(phase.name) && ["failed", "exercised"].includes(phase.status) && validateOperations(phase.operations), "invalid workload phase or counts");
      names.add(phase.name);
    }
  }
  if (report.status === "exercised") {
    requireValue(record(report.provenance.harnessSha256) && Object.keys(report.provenance.harnessSha256).length > 0 && Object.values(report.provenance.harnessSha256).every((value) => digest.test(value)), "successful workload lacks harness hashes");
    requireValue(report.cases.length === plans.length && report.cases.every((item, index) => item.name === plans[index].name), "workload needs ordered baseline/plugin cases");
    requireValue(report.cases[0].host?.entrySha256 === report.cases[1].host?.entrySha256, "workload cases used different host artifacts");
    if (report.schemaVersion === 2 && definition.pairedWorkload) {
      for (const item of report.cases) {
        requireValue(Array.isArray(item.fixtures) && item.fixtures.every((fixture) => record(fixture) &&
          typeof fixture.archive === "string" && /^[^/\\]+\.tgz$/.test(fixture.archive) && digest.test(fixture.sha256)),
        "paired workload lacks valid installed fixture receipts");
      }
      // Compare installed bytes, including multiplicity, not only plugin IDs or
      // caller-supplied pins. Empty arrays are valid for host-bundled plugins.
      requireValue(stableJson(report.cases[0].fixtures.map(({ sha256 }) => sha256).sort()) ===
        stableJson(report.cases[1].fixtures.map(({ sha256 }) => sha256).sort()), "paired workload installed fixture hashes differ");
    }
    for (const [index, item] of report.cases.entries()) {
      const plan = plans[index];
      requireValue(item.status === "exercised" && cleanShutdown(item.shutdown), "successful workload lacks clean joined shutdown");
      requireValue(item.host?.commit === report.inventory.source.commit && digest.test(item.host?.entrySha256), "workload host identity mismatch");
      if (report.schemaVersion === 1) {
        requireValue(stableJson(item.activePlugins) === stableJson(plan.expectedBefore), "workload active plugins differ");
      } else {
        requireValue(record(item.activation) &&
          stableJson(item.activation.expectedBefore) === stableJson(plan.expectedBefore) &&
          stableJson(item.activation.expectedAfter) === stableJson(plan.expectedAfter) &&
          stableJson(item.activation.before) === stableJson(plan.expectedBefore) &&
          stableJson(item.activation.after) === stableJson(plan.expectedAfter), "workload dependency or target activation differs");
        const cleanup = item.adapterCleanup;
        requireValue(cleanup?.status === "complete" && cleanup.registration === "closed" && Number.isSafeInteger(cleanup.registered) && cleanup.registered >= 0 &&
          cleanup.completed === cleanup.registered && (cleanup.errors === undefined || (Array.isArray(cleanup.errors) && cleanup.errors.length === 0)),
        "successful workload lacks completed adapter cleanup");
      }
      for (const phase of item.phases) {
        validateSuccessfulPhase(phase);
        requireValue(phase.before.pid === item.phases[0].before.pid && stableJson(phase.before.runtime) === stableJson(report.cases[0].phases[0].before.runtime) && stableJson(phase.before.cpuEnvironment) === stableJson(report.cases[0].phases[0].before.cpuEnvironment), "workload changed Gateway, runtime or CPU environment");
      }
      const required = requiredCaseOperations(definition, plan);
      if (report.schemaVersion === 2) {
        requireValue(stableJson(item.phases.map(({ name }) => name)) === stableJson(Object.keys(required)), "workload phases differ from declared case order");
        requireValue(item.phases.every((phase, phaseIndex) => phaseIndex === 0 || phase.before.atMonotonicMicros >= item.phases[phaseIndex - 1].after.atMonotonicMicros), "workload measured phases overlap");
      }
      for (const [name, count] of Object.entries(required)) {
        requireValue(item.phases.find((phase) => phase.name === name)?.operations.completed === count, `workload lacks ${name} completions`);
      }
    }
    if (report.schemaVersion === 2) {
      requireValue(stableJson(report.comparison) === stableJson(resourceWorkloadComparison(report.cases, definition)), "workload comparison differs from paired observations");
    }
  }
  const matches = stableJson(report.inventory.source) === stableJson(inventory.source) && report.inventory.sha256 === inventory.sha256;
  return { ...report, producerStatus: report.status, status: matches ? report.status : "blocked", reason: matches ? report.reason : "inventory-source-mismatch" };
}

export function buildResourceCoverage({ inventory, kitchenSinkReport, workloadReports = [], resourceWorkloads = [], configuredFixtureCount, selectedFixtureCount }) {
  validatePluginInventory(inventory);
  requireValue(Number.isSafeInteger(configuredFixtureCount) && configuredFixtureCount >= 0 && Number.isSafeInteger(selectedFixtureCount) && selectedFixtureCount >= 0 && selectedFixtureCount <= configuredFixtureCount, "invalid configured/selected fixture counts");
  const plugins = inventory.plugins.map(({ id, path, distribution }) => ({
    id, path, distribution, status: "unsupported", reason: "no-workload-adapter",
  }));
  const workloads = workloadReports.map((report) => validateResourceWorkloadReport(report, inventory, resourceWorkloads));
  const selected = new Set();
  for (const workload of workloads) {
    const id = workload.scenario.pluginId;
    requireValue(!selected.has(id), `duplicate workload report for ${id}; compare repetitions separately`);
    selected.add(id);
    Object.assign(plugins.find((plugin) => plugin.id === id), { status: workload.status, reason: workload.reason, scenario: workload.scenario.id });
  }
  return {
    inventory: { source: inventory.source, sha256: inventory.sha256, count: plugins.length },
    fixtures: { configured: configuredFixtureCount, selected: selectedFixtureCount },
    summary: {
      ...Object.fromEntries(distributions.map((distribution) => [distribution, plugins.filter((plugin) => plugin.distribution === distribution).length])),
      ...Object.fromEntries(["exercised", "blocked", "unsupported", "failed"].map((status) => [status, plugins.filter((plugin) => plugin.status === status).length])),
    },
    plugins,
    calibration: readCalibration(kitchenSinkReport, inventory),
    ...(workloads.length ? { workloads } : {}),
  };
}

export function readResourceCoverage({ pluginInventoryPath, kitchenSinkResourceReportPath, workloadReportPaths = [], ...counts }) {
  if (!pluginInventoryPath && !kitchenSinkResourceReportPath && !workloadReportPaths.length) return null;
  requireValue(pluginInventoryPath, "resource reports require --plugin-inventory");
  return buildResourceCoverage({
    ...counts,
    inventory: JSON.parse(readFileSync(pluginInventoryPath, "utf8")),
    kitchenSinkReport: kitchenSinkResourceReportPath ? JSON.parse(readFileSync(kitchenSinkResourceReportPath, "utf8")) : undefined,
    workloadReports: workloadReportPaths.map((file) => JSON.parse(readFileSync(file, "utf8"))),
  });
}

export function renderResourceCoverageMarkdown(coverage) {
  if (!coverage) return "";
  // Entities render as text without reactivating Markdown links/images or HTML.
  const cell = (value) => String(value).replace(/[!-/:-@[-`{-~]/g, (character) => `&#${character.charCodeAt(0)};`).replace(/[\r\n]/g, " ");
  return [
    "## Plugin Resource Coverage", "",
    `Source inventory: **${coverage.inventory.count}** plugins at \`${coverage.inventory.source.commit}\` (${coverage.summary.core} core, ${coverage.summary.external} external, ${coverage.summary.source} source-only).`,
    `Configured compatibility fixtures: **${coverage.fixtures.configured}**; selected: **${coverage.fixtures.selected}**. These are separate denominators.`, "",
    "Import and collector results do not establish workload coverage. Kitchen Sink calibration is outside the plugin denominator.", "",
    `Calibration: **${coverage.calibration.status}** — ${cell(coverage.calibration.reason)}.`,
    ...(coverage.calibration.postDisposalResidual ? [`Post-disposal residual: **${cell(coverage.calibration.postDisposalResidual.status)}** — ${cell(coverage.calibration.postDisposalResidual.reason)}.`] : []), "",
    "| Plugin | Distribution | Workload | Reason |", "| --- | --- | --- | --- |",
    ...coverage.plugins.map((plugin) => `| ${cell(plugin.id)} | ${plugin.distribution} | ${plugin.status} | ${plugin.scenario ? cell(plugin.reason) : plugin.reason} |`),
  ].join("\n");
}
