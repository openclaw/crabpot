#!/usr/bin/env node
import { pathToFileURL } from "node:url";
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

  const report = await buildReport({ openclawPath: parsedArgs.openclawPath });

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
    console.log(`report targets: ${defaultMarkdownReportPath}, ${defaultJsonReportPath}, ${defaultIssuesReportPath}`);
  }

  if (check && report.breakages.length > 0) {
    throw new Error(report.breakages.map((finding) => finding.message).join("\n"));
  }
}

function parseArgs(argv) {
  const flags = [];
  let openclawPath;

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--openclaw") {
      openclawPath = argv[index + 1];
      index += 1;
      continue;
    }
    if (arg === "--no-openclaw") {
      openclawPath = false;
      continue;
    }
    flags.push(arg);
  }

  return { flags, openclawPath };
}
