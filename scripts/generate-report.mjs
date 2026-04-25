#!/usr/bin/env node
import { pathToFileURL } from "node:url";
import {
  buildReport,
  defaultJsonReportPath,
  defaultMarkdownReportPath,
  writeReport,
} from "./report-lib.mjs";

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  await main();
}

async function main() {
  const args = new Set(process.argv.slice(2));
  const check = args.has("--check");
  const json = args.has("--json");
  const write = !check || args.has("--write");

  const report = await buildReport();

  if (write) {
    const paths = await writeReport(report);
    if (!json) {
      console.log(`wrote ${paths.markdownPath}`);
      console.log(`wrote ${paths.jsonPath}`);
    }
  }

  if (json) {
    console.log(JSON.stringify(report, null, 2));
  } else if (check) {
    console.log(
      `crabpot report check: ${report.status}; ${report.summary.breakageCount} breakages, ${report.summary.warningCount} warnings, ${report.summary.suggestionCount} suggestions`,
    );
    console.log(`report targets: ${defaultMarkdownReportPath}, ${defaultJsonReportPath}`);
  }

  if (check && report.breakages.length > 0) {
    throw new Error(report.breakages.map((finding) => finding.message).join("\n"));
  }
}
