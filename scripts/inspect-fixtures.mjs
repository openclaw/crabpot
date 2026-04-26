#!/usr/bin/env node
import { pathToFileURL } from "node:url";
import { readManifest, repoRoot } from "./manifest-lib.mjs";
import { loadPluginInspector } from "./plugin-inspector-source.mjs";

const pluginInspector = await loadPluginInspector();
export const inspectSourceText = pluginInspector.inspectSourceText;

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  await main();
}

async function main() {
  const args = new Set(process.argv.slice(2));
  const check = args.has("--check");
  const json = args.has("--json");

  const { inspections, failures } = await inspectManifest();

  if (json) {
    console.log(JSON.stringify({ inspections, failures }, null, 2));
  } else {
    console.table(
      inspections.map((item) => ({
        id: item.id,
        status: item.status,
        hooks: item.hooks.join(","),
        registrations: item.registrations.join(","),
        manifestContracts: item.manifestContracts.join(","),
      })),
    );
  }

  if (check && failures.length > 0) {
    throw new Error(failures.join("\n"));
  }
}

export async function inspectManifest() {
  const manifest = await readManifest();
  const inspections = [];
  const failures = [];

  for (const fixture of manifest.fixtures) {
    const inspection = await inspectFixture(fixture);
    inspections.push(inspection);

    for (const [key, observed] of [
      ["hooks", inspection.hooks],
      ["registrations", inspection.registrations],
      ["manifestContracts", inspection.manifestContracts],
    ]) {
      const expected = fixture.expect?.[key] ?? [];
      const missing = expected.filter((value) => !observed.includes(value));
      if (missing.length > 0) {
        failures.push(`${fixture.id}: missing ${key}: ${missing.join(", ")}`);
      }
    }
  }

  return { inspections, failures };
}

export async function inspectFixture(fixture) {
  return pluginInspector.inspectPlugin(fixture, { rootDir: repoRoot });
}
