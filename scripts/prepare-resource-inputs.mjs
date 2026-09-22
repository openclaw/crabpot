#!/usr/bin/env node
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { repoRoot, validateManifest } from "./manifest-lib.mjs";
import { validatePluginInventory } from "./resource-coverage.mjs";
import { resourceHostFiles, resourceConsumerFiles, resourceHostEntries, verifyPreparedInputs } from "./run-resource-campaign.mjs";

export function assertResourceRuntime(runtime = process) {
  assert.ok(runtime.platform === "linux" && !runtime.versions.bun && typeof runtime.threadCpuUsage === "function",
    "Resource input preparation requires Linux Node with process.threadCpuUsage");
}

// Assembly is host-free; it reads prepared bytes without importing plugins or the host.
export function prepareResourceInputs({ inventoryPath, hostRoot, archives = [] }, consumerRoot = repoRoot) {
  const inventory = validatePluginInventory(JSON.parse(readFileSync(inventoryPath, "utf8")));
  const manifest = JSON.parse(readFileSync(path.join(consumerRoot, "crabpot.config.json"), "utf8"));
  validateManifest(manifest);
  const definitions = manifest.resourceWorkloads ?? [];
  const hashFile = (file) => createHash("sha256").update(readFileSync(file)).digest("hex");
  const files = (root, names) => Object.fromEntries(names.map((name) => [name, hashFile(path.join(root, name))]));
  const pins = {
    schemaVersion: 1,
    hostCommit: inventory.source.commit,
    runtime: { node: process.version, platform: process.platform, arch: process.arch },
    files: {
      host: files(hostRoot, [...resourceHostFiles, ...resourceHostEntries.filter((file) => existsSync(path.join(hostRoot, file)))]),
      crabpot: files(consumerRoot, [...resourceConsumerFiles, ...definitions
        .map(({ adapter }) => `scripts/resource-workloads/${adapter}.mjs`)
        .filter((file) => existsSync(path.join(consumerRoot, file)))]),
    },
    artifacts: archives.map((archive) => {
      assert.ok(archive.endsWith(".tgz"), "Artifact must be a local .tgz archive");
      const file = path.resolve(archive);
      return { path: file, sha256: hashFile(file) };
    }),
  };
  verifyPreparedInputs(pins, definitions, inventory, hostRoot, consumerRoot);
  return pins;
}

export function writeResourceInputPins(out, pins) {
  // Exclusive creation preserves earlier attempts, including symlink destinations.
  writeFileSync(out, `${JSON.stringify(pins, null, 2)}\n`, { flag: "wx", mode: 0o600 });
}

export function parseArgs(argv) {
  const names = { "--plugin-inventory": "inventoryPath", "--host-root": "hostRoot", "--out": "out" };
  const args = { archives: [] };
  for (let index = 0; index < argv.length; index++) {
    const option = argv[index];
    assert.ok(Object.hasOwn(names, option) || option === "--archive", `Unknown argument: ${option}`);
    const value = argv[++index];
    assert.ok(value && !value.startsWith("--"), `${option} requires a value`);
    if (option === "--archive") args.archives.push(value);
    else {
      assert.ok(!Object.hasOwn(args, names[option]), `Duplicate argument: ${option}`);
      args[names[option]] = value;
    }
  }
  for (const [option, name] of Object.entries(names)) assert.ok(args[name], `${option} is required`);
  return args;
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  try {
    const args = parseArgs(process.argv.slice(2));
    assertResourceRuntime();
    writeResourceInputPins(args.out, prepareResourceInputs(args));
  } catch (error) {
    console.error(error.message ?? error);
    console.error("[resource-inputs] FAILED (exit 1)");
    process.exitCode = 1;
  }
}
