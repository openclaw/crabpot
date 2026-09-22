#!/usr/bin/env node
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { setTimeout as delay } from "node:timers/promises";
import { fileURLToPath, pathToFileURL } from "node:url";
import { readManifest } from "./manifest-lib.mjs";
import { validatePluginInventory, validateResourceWorkloadReport } from "./resource-coverage.mjs";
import { resourceWorkloadComparison, resourceWorkloadPlan } from "./resource-workload-contract.mjs";

const hash = (file) => createHash("sha256").update(readFileSync(file)).digest("hex");

export function parseArgs(argv) {
  const args = { execute: false };
  for (let index = 0; index < argv.length; index++) {
    const arg = argv[index];
    if (arg === "--execute") { args.execute = true; continue; }
    if (!["--scenario", "--plugin-inventory", "--out"].includes(arg)) throw new Error(`Unknown argument: ${arg}`);
    const value = argv[++index];
    if (!value || value.startsWith("--")) throw new Error(`${arg} needs a value`);
    args[arg.slice(2)] = value;
  }
  for (const required of ["scenario", "plugin-inventory", "out"]) {
    if (!args[required]) throw new Error(`--${required} is required`);
  }
  return args;
}

export async function runResourceWorkload({ definition, inventory, execute, hostRoot = process.cwd() }) {
  validatePluginInventory(inventory);
  resourceWorkloadPlan(definition);
  const plugin = inventory.plugins.find(({ id }) => id === definition.pluginId);
  assert.ok(plugin, `Plugin ${definition.pluginId} is absent from the source inventory`);
  for (const dependency of definition.pairedWorkload?.dependencies ?? []) {
    assert.ok(inventory.plugins.some(({ id }) => id === dependency), `Dependency ${dependency} is absent from the source inventory`);
  }
  assert.match(definition.adapter, /^[a-z0-9][a-z0-9-]*$/);
  const adapterUrl = new URL(`./resource-workloads/${definition.adapter}.mjs`, import.meta.url);
  const adapter = await import(adapterUrl.href);
  const report = {
    schemaVersion: 2, kind: "plugin-resource-workload", status: "blocked", reason: "execution-not-requested",
    scenario: { id: definition.id, pluginId: definition.pluginId, requirements: definition.requiredOperations, operationUnit: adapter.operationUnit,
      ...(definition.pairedWorkload ? { pairedWorkload: definition.pairedWorkload } : {}) },
    inventory: { source: inventory.source, sha256: inventory.sha256 },
    provenance: {
      adapterSha256: hash(adapterUrl), consumerSha256: hash(fileURLToPath(import.meta.url)),
      contractSha256: hash(new URL("./resource-workload-contract.mjs", import.meta.url)),
      runtime: { node: process.version, platform: process.platform, arch: process.arch, cpuModel: os.cpus()[0]?.model },
    },
    measurement: {
      neutralOperations: 20, idleMs: 250, runs: 1,
      sampling: "phase boundaries only; no peak estimate or forced GC",
      cpu: "Gateway process and main thread cumulative user/system; excludes separate child processes",
      memory: "RSS is process-wide; heap/external/ArrayBuffers describe the main isolate; ArrayBuffers overlaps external",
      isolation: "external runner must enforce network/resource limits and join the entire sandbox on outer failure",
      limitations: adapter.limitations,
      attribution: "Cases measure the whole Gateway. Only comparison.workloadPhases subtract matched work; signed deltas include run noise and are not per-plugin allocation.",
    },
    cases: [], comparison: [],
    postDisposalResidual: { status: "unsupported", reason: "workload completes before host shutdown; no in-process disposal measurement" },
  };
  if (!execute) return report;
  let host;
  let phases;
  let runtime;
  try {
    assert.equal(path.resolve(hostRoot), process.cwd(), "Run from the frozen built host root");
    host = await import(pathToFileURL(path.join(hostRoot, "scripts/e2e/kitchen-sink-rpc-walk.mts")).href);
    phases = await import(pathToFileURL(path.join(hostRoot, "scripts/e2e/lib/kitchen-sink-resources.mts")).href);
    runtime = host.resolveResourceGatewayRuntime();
    assert.equal(typeof host.runResourceGatewayCase, "function", "Host lacks the shared resource lifecycle");
    assert.equal(runtime.buildInfo.commit, inventory.source.commit, "Inventory and built host source differ");
    report.provenance.harnessSha256 = Object.fromEntries([
      "scripts/e2e/kitchen-sink-rpc-walk.mts", "scripts/e2e/lib/kitchen-sink-resources.mts",
      "scripts/lib/gateway-bench-profile.ts", "scripts/lib/gateway-bench-profile-preload.ts",
    ].map((file) => [file, hash(path.join(hostRoot, file))]));
  } catch (error) {
    report.reason = "host-prerequisite";
    report.error = String(error.message ?? error).slice(0, 2048);
    return report;
  }
  await runResourceWorkloadCases({ report, definition, adapter, host, phases, runtime });
  if (report.status === "exercised") {
    try { validateResourceWorkloadReport(report, inventory, [definition]); }
    catch (error) {
      report.status = "failed";
      report.reason = "invalid-workload-observation";
      report.error = String(error.message ?? error).slice(0, 2048);
    }
  }
  return report;
}

/** Shared orchestration only; the host retains Gateway/process ownership. */
export async function runResourceWorkloadCases({ report, definition, adapter, host, phases, runtime }) {
  const plans = resourceWorkloadPlan(definition);
  report.cases = plans.map(({ name, expectedBefore, expectedAfter }) => ({
    name, status: "blocked", phases: [],
    activation: { scope: "gateway-request-registry", expectedBefore, expectedAfter },
    adapterCleanup: { status: "pending", registration: "open", registered: 0, completed: 0 },
  }));
  report.reason = "workload-incomplete";
  for (const [index, result] of report.cases.entries()) {
    const plan = plans[index];
    const cleanup = [];
    const cleanupErrors = new Set();
    const fail = (error) => {
      result.status = "failed";
      result.error = [result.error, String(error.message ?? error)].filter(Boolean).join("; ").slice(0, 2048);
      report.status = "failed";
      report.reason = "workload-failed";
      report.error = report.cases.filter((item) => item.error).map((item) => `${item.name}: ${item.error}`).join("; ").slice(0, 2048);
    };
    const failCleanup = (error) => {
      cleanupErrors.add(String(error.message ?? error).slice(0, 2048));
      result.adapterCleanup.status = "failed";
      result.adapterCleanup.errors = [...cleanupErrors];
      fail(`Adapter cleanup failed: ${result.adapterCleanup.errors.join("; ")}`);
    };
    const adapterOptions = {
      enabled: plan.enabled,
      // Register immediately after acquisition, before another await can fail.
      onCleanup(dispose) {
        if (result.adapterCleanup.registration !== "open") {
          // Rejected registrations never transfer ownership. Keep the receipt
          // failed even if the adapter catches this synchronous contract error.
          const error = new Error(`adapter cleanup registration is ${result.adapterCleanup.registration}; caller retains cleanup ownership`);
          failCleanup(error);
          throw error;
        }
        assert.equal(typeof dispose, "function", "adapter cleanup must be a function");
        cleanup.push(dispose);
        result.adapterCleanup.registered++;
      },
    };
    let state;
    try {
      await host.runResourceGatewayCase({
        result, runtime,
        prepare: async (context) => {
          if (plan.runWorkload) state = await adapter.prepare(context, adapterOptions);
        },
        run: async (context) => {
          const { rpc, sample, measure } = context;
          const observeActivation = async (when, expected) => {
            const catalog = await rpc("plugins.list", {});
            assert.ok(Array.isArray(catalog.plugins), "Missing plugin inventory");
            result.activation[when] = catalog.plugins.filter((plugin) => plugin.runtime?.state === "active").map(({ id }) => id).sort();
            assert.deepEqual(result.activation[when], expected, `active plugins differ ${when} work`);
          };
          await observeActivation("before", plan.expectedBefore);
          host.assertGatewayHealthPayload(await rpc("health", {}));
          const observe = async (name) => {
            const before = await sample();
            await delay(report.measurement.idleMs);
            result.phases.push(phases.summarizeResourcePhase(name, before, await sample(), { attempted: 0, completed: 0, failed: 0 }));
          };
          await observe("idle");
          await measure("neutral-rpc", report.measurement.neutralOperations, async () => {
            host.assertGatewayHealthPayload(await rpc("health", {}));
          });
          await observe("post-neutral");
          if (plan.runWorkload) {
            const expected = Object.entries(definition.requiredOperations);
            let nextPhase = 0;
            let measuring = false;
            let measurementAdmission = true;
            const measurements = [];
            const measureWork = (name, count, run) => {
              assert.equal(measurementAdmission, true, "adapter workload measurement admission is closed");
              assert.equal(measuring, false, "adapter workload phases must run sequentially");
              assert.deepEqual([name, count], expected[nextPhase], "adapter must measure each declared workload phase in order");
              nextPhase++;
              measuring = true;
              let pending;
              try { pending = Promise.resolve(measure(name, count, run)); }
              catch (error) { pending = Promise.reject(error); }
              // Return the same handled promise: an async wrapper would create
              // a second, unhandled rejection when an adapter forgets to await.
              measurements.push(pending.then(
                () => { measuring = false; return { ok: true }; },
                (error) => { measuring = false; return { ok: false, error }; },
              ));
              return pending;
            };
            const errors = [];
            try {
              await adapter.run({ ...context, measure: measureWork }, definition.requiredOperations, { ...adapterOptions, state });
              assert.equal(nextPhase, expected.length, "adapter omitted a declared workload phase");
            } catch (error) { errors.push(error); }
            finally {
              measurementAdmission = false;
              if (measuring) errors.push(new Error("adapter must await workload measurements"));
              // No new measurements can start. Drain every owned promise before
              // returning to the host, which stops the Gateway after this callback.
              for (const outcome of await Promise.all(measurements)) {
                if (!outcome.ok && !errors.includes(outcome.error)) errors.push(outcome.error);
              }
            }
            if (errors.length) throw new AggregateError(errors, errors.map((error) => String(error.message ?? error)).join("; "));
            await observe("post-work");
          }
          await observeActivation("after", plan.expectedAfter);
        },
      });
    } catch (error) { fail(error); }
    finally {
      // The host has joined its Gateway. Adapter-owned peers are independent
      // resources and must also close when preparation/startup/work failed.
      result.adapterCleanup.registration = "closing";
      for (const dispose of cleanup.reverse()) {
        try { await dispose(); result.adapterCleanup.completed++; }
        catch (error) { if (!cleanupErrors.has(String(error.message ?? error).slice(0, 2048))) failCleanup(error); }
      }
      result.adapterCleanup.registration = "closed";
      result.adapterCleanup.status = cleanupErrors.size ? "failed" : "complete";
    }
    if (result.status !== "exercised") {
      report.status = "failed";
      report.error ??= result.error;
      return report;
    }
  }
  // A saved registration callback can invalidate an earlier case while a later
  // case runs. Never overwrite that recorded failure with final success.
  if (report.cases.some(({ status }) => status !== "exercised")) return report;
  try { report.comparison = resourceWorkloadComparison(report.cases, definition); }
  catch (error) {
    report.status = "failed";
    report.error = String(error.message ?? error).slice(0, 2048);
    return report;
  }
  report.status = "exercised";
  report.reason = "measured-plugin-workload";
  return report;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const manifest = await readManifest();
  const definition = manifest.resourceWorkloads?.find(({ id }) => id === args.scenario);
  assert.ok(definition, `Unknown configured resource scenario: ${args.scenario}`);
  const report = await runResourceWorkload({
    definition, inventory: JSON.parse(readFileSync(args["plugin-inventory"], "utf8")), execute: args.execute,
  });
  const output = path.resolve(args.out);
  mkdirSync(path.dirname(output), { recursive: true });
  writeFileSync(output, `${JSON.stringify(report, null, 2)}\n`);
  console.log(`resource workload ${report.scenario.id}: ${report.status} (${report.reason})`);
  if (args.execute && report.status !== "exercised") {
    console.error("[resource-workload] FAILED (exit 1)");
    process.exitCode = 1;
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  await main().catch((error) => {
    console.error(error.message ?? error);
    console.error("[resource-workload] FAILED (exit 1)");
    process.exitCode = 1;
  });
}
