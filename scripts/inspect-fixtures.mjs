#!/usr/bin/env node
import { pathToFileURL } from "node:url";
import { readConfiguredManifest, repoRoot } from "./manifest-lib.mjs";
import { loadPluginInspectorPublicApi } from "./plugin-inspector-source.mjs";

const pluginInspector = await loadPluginInspectorPublicApi();
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
  const manifest = await readConfiguredManifest();
  const report = await pluginInspector.inspectFixtureSetConfig({
    config: {
      ...manifest,
      rootDir: repoRoot,
    },
  });
  return {
    inspections: report.fixtures,
    failures: report.breakages.map((finding) => finding.message),
  };
}

export async function inspectFixture(fixture) {
  return pluginInspector.inspectPlugin(fixture, { rootDir: repoRoot });
}
