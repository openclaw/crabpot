#!/usr/bin/env node
import { pathToFileURL } from "node:url";
import { loadPluginInspectorPublicApi } from "./plugin-inspector-source.mjs";
import { buildReport } from "./report-lib.mjs";

const pluginInspector = await loadPluginInspectorPublicApi();

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  await main();
}

async function main() {
  const report = await buildReport({ openclawPath: parseOpenClawPath(process.argv.slice(2)) });
  const errors = validateContractCoverage(report);

  if (errors.length > 0) {
    throw new Error(errors.join("\n"));
  }

  console.log(
    `contract coverage ok: ${report.summary.issueCount} issues, ${report.summary.contractProbeCount} probes, ${report.summary.breakageCount} breakages`,
  );
}

function parseOpenClawPath(argv) {
  for (let index = 0; index < argv.length; index += 1) {
    if (argv[index] === "--openclaw") {
      return argv[index + 1];
    }
    if (argv[index] === "--no-openclaw") {
      return false;
    }
  }
  return undefined;
}

export function validateContractCoverage(report, options = {}) {
  return pluginInspector.validateContractCoverage(report, options);
}
