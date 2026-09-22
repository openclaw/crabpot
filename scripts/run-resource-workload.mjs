#!/usr/bin/env node
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { setTimeout as delay } from "node:timers/promises";
import { fileURLToPath, pathToFileURL } from "node:url";
import { readManifest } from "./manifest-lib.mjs";
import { validatePluginInventory } from "./resource-coverage.mjs";

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
  const plugin = inventory.plugins.find(({ id }) => id === definition.pluginId);
  assert.ok(plugin, `Plugin ${definition.pluginId} is absent from the source inventory`);
  assert.match(definition.adapter, /^[a-z0-9][a-z0-9-]*$/);
  const adapterUrl = new URL(`./resource-workloads/${definition.adapter}.mjs`, import.meta.url);
  const adapter = await import(adapterUrl.href);
  const report = {
    schemaVersion: 1, kind: "plugin-resource-workload", status: "blocked", reason: "execution-not-requested",
    scenario: { id: definition.id, pluginId: definition.pluginId, requirements: definition.requiredOperations, operationUnit: adapter.operationUnit },
    inventory: { source: inventory.source, sha256: inventory.sha256 },
    provenance: {
      adapterSha256: hash(adapterUrl), consumerSha256: hash(fileURLToPath(import.meta.url)),
      runtime: { node: process.version, platform: process.platform, arch: process.arch, cpuModel: os.cpus()[0]?.model },
    },
    measurement: {
      neutralOperations: 20, idleMs: 250, runs: 1,
      sampling: "phase boundaries only; no peak estimate or forced GC",
      cpu: "Gateway process and main thread cumulative user/system; excludes separate child processes",
      memory: "RSS is process-wide; heap/external/ArrayBuffers describe the main isolate; ArrayBuffers overlaps external",
      isolation: "external runner must enforce network/resource limits and join the entire sandbox on outer failure",
      limitations: adapter.limitations,
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
  report.cases = ["empty", definition.pluginId].map((name) => ({ name, status: "blocked", phases: [] }));
  report.reason = "workload-incomplete";
  for (const result of report.cases) {
    const enabled = result.name !== "empty";
    await host.runResourceGatewayCase({
      result, runtime,
      prepare: async (context) => { if (enabled) await adapter.prepare(context); },
      run: async (context) => {
        const { rpc, sample, measure } = context;
        const catalog = await rpc("plugins.list", {});
        assert.ok(Array.isArray(catalog.plugins), "Missing plugin inventory");
        result.activePlugins = catalog.plugins.filter((plugin) => plugin.runtime?.state === "active").map(({ id }) => id).sort();
        assert.deepEqual(result.activePlugins, enabled ? [definition.pluginId] : []);
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
        if (enabled) {
          await adapter.run(context, definition.requiredOperations);
          await observe("post-work");
        }
      },
    });
    if (result.status !== "exercised") {
      report.status = "failed";
      report.error = result.error;
      return report;
    }
  }
  report.comparison = phases.compareResourcePhases(report.cases[0].phases, report.cases[1].phases);
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
