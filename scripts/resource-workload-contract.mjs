import assert from "node:assert/strict";

const identifier = /^[a-z0-9][a-z0-9-]*$/;
const memoryFields = ["rss", "heapTotal", "heapUsed", "external", "arrayBuffers"];
const reservedPhases = new Set(["startup", "idle", "neutral-rpc", "post-neutral", "post-work"]);

/** One case plan owns producer execution and receipt admission. */
export function resourceWorkloadPlan(definition) {
  const requirements = definition.requiredOperations;
  assert.ok(requirements && typeof requirements === "object" && !Array.isArray(requirements) &&
    Object.keys(requirements).length > 0 && Object.entries(requirements).every(([name, count]) =>
      identifier.test(name) && !reservedPhases.has(name) && Number.isSafeInteger(count) && count > 0 && count <= 1000),
  "resource workload requiredOperations needs bounded positive counts and non-reserved phase names");
  const paired = definition.pairedWorkload;
  if (paired !== undefined) {
    assert.ok(paired && typeof paired === "object" && !Array.isArray(paired) &&
      Object.keys(paired).sort().join(",") === "dependencies,targetActivation",
    "pairedWorkload needs only dependencies and targetActivation");
    assert.ok(Array.isArray(paired.dependencies) && paired.dependencies.every((id) =>
      typeof id === "string" && identifier.test(id) && id !== definition.pluginId) &&
      new Set(paired.dependencies).size === paired.dependencies.length,
    "pairedWorkload dependencies must be unique plugin IDs excluding the target");
    assert.ok(["startup", "workload"].includes(paired.targetActivation),
      "pairedWorkload targetActivation must be startup or workload");
  }
  const dependencies = [...(paired?.dependencies ?? [])].sort();
  return [false, true].map((enabled) => ({
    name: enabled ? definition.pluginId : paired ? "baseline" : "empty",
    enabled,
    runWorkload: enabled || paired !== undefined,
    expectedBefore: [...dependencies, ...(enabled && paired?.targetActivation !== "workload" ? [definition.pluginId] : [])].sort(),
    expectedAfter: [...dependencies, ...(enabled ? [definition.pluginId] : [])].sort(),
  }));
}

export function requiredCaseOperations(definition, plan) {
  // An object would enumerate integer-index workload names before host phases.
  return [["startup", 0], ["idle", 0], ["neutral-rpc", 20], ["post-neutral", 0],
    ...(plan.runWorkload ? [...Object.entries(definition.requiredOperations), ["post-work", 0]] : [])];
}

/** Signed deltas are observations, not allocations of CPU to plugin functions. */
export function resourceWorkloadComparison(cases, definition) {
  const workloadNames = new Set(Object.keys(definition.requiredOperations));
  const hostPhases = [];
  const workloadPhases = [];
  for (const baseline of cases[0].phases) {
    const enabled = cases[1].phases.find(({ name }) => name === baseline.name);
    if (!enabled) continue;
    assert.equal(enabled.operations.completed, baseline.operations.completed, "paired phase completion counts differ");
    const processCpuMs = enabled.cpu.process.totalMs - baseline.cpu.process.totalMs;
    const delta = {
      phase: baseline.name,
      completedOperations: baseline.operations.completed,
      wallMs: enabled.cpu.wallMs - baseline.cpu.wallMs,
      processCpuMs,
      mainThreadCpuMs: enabled.cpu.mainThread.totalMs - baseline.cpu.mainThread.totalMs,
      memoryEndBytes: Object.fromEntries(memoryFields.map((key) => [key, enabled.after.memory[key] - baseline.after.memory[key]])),
      memoryGrowthBytes: Object.fromEntries(memoryFields.map((key) => [key, enabled.memoryChangeBytes[key] - baseline.memoryChangeBytes[key]])),
      processCpuMsPerCompletedOperation: baseline.operations.completed > 0 ? processCpuMs / baseline.operations.completed : null,
    };
    (workloadNames.has(baseline.name) ? workloadPhases : hostPhases).push(delta);
  }
  return {
    mode: definition.pairedWorkload ? "paired-workload" : "empty-host",
    direction: "enabled-minus-baseline",
    hostPhases,
    workloadPhases,
  };
}
