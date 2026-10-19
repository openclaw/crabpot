#!/usr/bin/env node
import { existsSync } from "node:fs";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { defaultRefDiffJsonPath } from "./compare-openclaw-refs.mjs";
import { repoRoot } from "./manifest-lib.mjs";
import { collectCiReports, readCiRun } from "./ci-report-handoff.mjs";
import { loadPluginInspectorPublicApi } from "./plugin-inspector-source.mjs";
import { buildReport, defaultJsonReportPath } from "./report-lib.mjs";
import { defaultExecutionResultsJsonPath } from "./summarize-execution-results.mjs";

export const defaultCiPolicyPath = path.join(repoRoot, "crabpot.ci-policy.json");
export const defaultCiPolicyReportJsonPath = path.join(repoRoot, "reports/crabpot-ci-policy.json");
export const defaultCiPolicyReportMarkdownPath = path.join(repoRoot, "reports/crabpot-ci-policy.md");

const pluginInspector = await loadPluginInspectorPublicApi();

const crabpotCiPolicyOptions = {
  jsonPath: defaultCiPolicyReportJsonPath,
  markdownPath: defaultCiPolicyReportMarkdownPath,
  reportTitle: "Crabpot CI Policy",
  rootDir: repoRoot,
};

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  await main();
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const report = await buildCiPolicyReport({
    currentRun: args.currentRun,
    executionResultsPath: args.executionResultsPath,
    policyPath: args.policyPath,
    refDiffPath: args.refDiffPath,
    reportPath: args.reportPath,
    strict: args.strict,
  });
  const errors = validateCiPolicyReport(report);

  if (args.write) {
    await writeCiPolicyReport(report);
  }

  if (args.json) {
    process.stdout.write(`${JSON.stringify(report, null, 2)}\n`);
  } else {
    console.log(
      `ci policy: ${report.status}; ${report.summary.failCount} fail, ${report.summary.warnCount} warn, ${report.summary.passCount} pass`,
    );
  }

  if (errors.length > 0) {
    throw new Error(errors.join("\n"));
  }
}

function parseArgs(argv) {
  const args = {
    currentRun: false,
    executionResultsPath: defaultExecutionResultsJsonPath,
    json: false,
    policyPath: defaultCiPolicyPath,
    refDiffPath: defaultRefDiffJsonPath,
    reportPath: defaultJsonReportPath,
    strict: false,
    write: true,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--run-report") {
      args.currentRun = true;
      continue;
    }
    if (arg === "--check") {
      args.write = false;
      continue;
    }
    if (arg === "--json") {
      args.json = true;
      continue;
    }
    if (arg === "--policy") {
      args.policyPath = path.resolve(readOptionValue(argv, index, arg));
      index += 1;
      continue;
    }
    if (arg === "--report") {
      args.reportPath = path.resolve(readOptionValue(argv, index, arg));
      index += 1;
      continue;
    }
    if (arg === "--execution-results") {
      args.executionResultsPath = path.resolve(readOptionValue(argv, index, arg));
      index += 1;
      continue;
    }
    if (arg === "--ref-diff") {
      args.refDiffPath = path.resolve(readOptionValue(argv, index, arg));
      index += 1;
      continue;
    }
    if (arg === "--strict") {
      args.strict = true;
      continue;
    }
    if (arg === "--write") {
      args.write = true;
    }
  }

  return args;
}

function readOptionValue(argv, index, flagName) {
  const value = argv[index + 1];
  if (!value || value.startsWith("--")) {
    throw new Error(`${flagName} requires a value`);
  }
  return value;
}

export async function buildCiPolicyReport(options = {}) {
  const policy = options.policy ?? (await readJson(options.policyPath ?? defaultCiPolicyPath));
  if (options.currentRun) {
    const root = options.root ?? repoRoot;
    const run = readCiRun(root);
    const { reports } = collectCiReports(run, { root });
    // A fresh policy must not launder tracked execution/ref-diff data into
    // current-run evidence or inspect again when compatibility never finished.
    for (const key of ["compatibility", "execution", "refDiff"]) {
      if ((key === "compatibility" || run.steps.some((step) => step.report === key)) && !reports[key]) {
        throw new Error(`Current-run policy requires the selected ${key} report`);
      }
    }
    return pluginInspector.buildCiPolicyReport({
      ...crabpotCiPolicyOptions, ...options, policy,
      compatibilityReport: reports.compatibility,
      executionResults: reports.execution ?? null,
      refDiff: reports.refDiff ?? null,
    });
  }
  const executionResults =
    options.executionResults ??
    (await readOptionalJson(options.executionResultsPath ?? defaultExecutionResultsJsonPath));
  const compatibilityReport =
    options.compatibilityReport ??
    (await readOptionalJson(options.reportPath ?? defaultJsonReportPath)) ??
    (await buildReport({ executionResults, generatedAt: "deterministic" }));
  const refDiff = options.refDiff ?? (await readOptionalJson(options.refDiffPath ?? defaultRefDiffJsonPath));

  return pluginInspector.buildCiPolicyReport({
    ...crabpotCiPolicyOptions,
    ...options,
    compatibilityReport,
    executionResults,
    policy,
    refDiff,
  });
}

export function validateCiPolicyReport(report) {
  return pluginInspector.validateCiPolicyReport(report);
}

export async function writeCiPolicyReport(report, options = {}) {
  return pluginInspector.writeCiPolicyReport(report, {
    ...crabpotCiPolicyOptions,
    ...options,
  });
}

export function renderCiPolicyMarkdown(report, options = {}) {
  return pluginInspector.renderCiPolicyMarkdown(report, {
    ...crabpotCiPolicyOptions,
    ...options,
  });
}

async function readJson(jsonPath) {
  return JSON.parse(await readFile(jsonPath, "utf8"));
}

async function readOptionalJson(jsonPath) {
  return existsSync(jsonPath) ? readJson(jsonPath) : null;
}
