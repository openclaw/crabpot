#!/usr/bin/env node
import { pathToFileURL } from "node:url";
import path from "node:path";
import { repoRoot } from "./manifest-lib.mjs";
import {
  buildReport,
  defaultIssuesReportPath,
  defaultJsonReportPath,
  defaultMarkdownReportPath,
  writeReport,
} from "./report-lib.mjs";

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  await main();
}

async function main() {
  const parsedArgs = parseArgs(process.argv.slice(2));
  const args = new Set(parsedArgs.flags);
  const check = args.has("--check");
  const json = args.has("--json");
  const write = !check || args.has("--write");

  const report = await buildReport({
    executionResultsPath: parsedArgs.executionResultsPath,
    fixtureSet: parsedArgs.fixtureSet,
    openclawPath: parsedArgs.openclawPath,
    pluginInventoryPath: parsedArgs.pluginInventoryPath,
    kitchenSinkResourceReportPath: parsedArgs.kitchenSinkResourceReportPath,
    workloadReportPaths: parsedArgs.workloadReportPaths,
  });

  if (write) {
    const paths = await writeReport(report);
    if (!json) {
      console.log(`wrote ${paths.markdownPath}`);
      console.log(`wrote ${paths.jsonPath}`);
      console.log(`wrote ${paths.issuesPath}`);
    }
  }

  if (json) {
    console.log(JSON.stringify(report, null, 2));
  } else if (check) {
    console.log(
      `crabpot report check: ${report.status}; ${report.summary.breakageCount} breakages, ${report.summary.warningCount} warnings, ${report.summary.suggestionCount} suggestions, ${report.summary.issueCount} issues`,
    );
    console.log(
      `report targets: ${[defaultMarkdownReportPath, defaultJsonReportPath, defaultIssuesReportPath].map(relativePathLabel).join(", ")}`,
    );
  }

  if (check && report.breakages.length > 0) {
    throw new Error(report.breakages.map((finding) => finding.message).join("\n"));
  }
}

function relativePathLabel(filePath) {
  return path.relative(repoRoot, filePath).replaceAll("\\", "/");
}

function parseArgs(argv) {
  const flags = [];
  let openclawPath;
  let executionResultsPath;
  let fixtureSet;
  let pluginInventoryPath;
  let kitchenSinkResourceReportPath;
  const workloadReportPaths = [];

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (["--plugin-inventory", "--kitchen-sink-resource-report", "--resource-workload-report"].includes(arg)) {
      const value = argv[index + 1];
      if (!value || value.startsWith("--")) throw new Error(`${arg} requires a JSON report path`);
      if (arg === "--plugin-inventory") pluginInventoryPath = value;
      else if (arg === "--kitchen-sink-resource-report") kitchenSinkResourceReportPath = value;
      else workloadReportPaths.push(value);
      index += 1;
      continue;
    }
    if (arg === "--openclaw") {
      openclawPath = argv[index + 1];
      index += 1;
      continue;
    }
    if (arg === "--no-openclaw") {
      openclawPath = false;
      continue;
    }
    if (arg === "--execution-results") {
      executionResultsPath = argv[index + 1];
      index += 1;
      continue;
    }
    if (arg === "--fixture-set") {
      fixtureSet = argv[index + 1];
      index += 1;
      continue;
    }
    flags.push(arg);
  }

  return { executionResultsPath, fixtureSet, flags, openclawPath, pluginInventoryPath, kitchenSinkResourceReportPath, workloadReportPaths };
}
