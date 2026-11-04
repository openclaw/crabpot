#!/usr/bin/env node
import { pathToFileURL } from "node:url";
import { loadPluginInspectorPublicApi } from "./plugin-inspector-source.mjs";
import { buildReport } from "./report-lib.mjs";

const pluginInspector = await loadPluginInspectorPublicApi();

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  await runReportCommand();
}

export async function runReportCommand(argv = process.argv.slice(2), options = {}) {
  const report = options.report ?? await buildReport({ openclawPath: parseOpenClawPath(argv) });
  const errors = validateContractCoverage(report);

  if (errors.length > 0) {
    throw new Error(errors.join("\n"));
  }

  console.log(
    `contract coverage ok: ${report.summary.issueCount} issues, ${report.summary.contractProbeCount} probes, ${report.summary.breakageCount} breakages`,
  );
  return report;
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
