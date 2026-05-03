#!/usr/bin/env node
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { readConfiguredManifest, repoRoot } from "./manifest-lib.mjs";
import { buildReport } from "./report-lib.mjs";
import { loadPluginInspectorPublicApi } from "./plugin-inspector-source.mjs";
import { captureEntrypoint } from "./run-cold-import-capture.mjs";

export const defaultSyntheticProbeJsonPath = path.join(repoRoot, "reports/crabpot-synthetic-probes.json");
export const defaultSyntheticProbeMarkdownPath = path.join(repoRoot, "reports/crabpot-synthetic-probes.md");

const pluginInspector = await loadPluginInspectorPublicApi();

export const validateSyntheticProbePlan = pluginInspector.validateSyntheticProbePlan;

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  await main();
}

async function main() {
  const args = parseArgs(process.argv.slice(2));

  if (args.entrypoint) {
    if (process.env.CRABPOT_EXECUTE_ISOLATED !== "1") {
      throw new Error("synthetic probe execution requires CRABPOT_EXECUTE_ISOLATED=1");
    }
    const capture = await captureEntrypoint(args.entrypoint, {
      apiOptions: { retainHandlers: true },
      cwd: args.cwd,
      mockSdk: args.mockSdk,
      pluginRoot: args.pluginRoot,
    });
    const result = await runCapturedSyntheticProbes(capture);
    await writeJsonResult(result, args.output);
    if (result.summary.failCount > 0) {
      throw new Error(`${result.summary.failCount} synthetic probes failed`);
    }
    process.exitCode = 0;
    return;
  }

  const plan = await buildSyntheticProbePlan({ openclawPath: args.openclawPath });
  const errors = validateSyntheticProbePlan(plan);
  if (args.write) {
    await writeSyntheticProbePlan(plan);
  }

  if (args.json) {
    console.log(JSON.stringify(plan, null, 2));
  } else {
    console.log(
      `synthetic probes: ${plan.summary.readyCount} ready, ${plan.summary.blockedCount} blocked, ${plan.summary.probeCount} total`,
    );
  }

  if (errors.length > 0) {
    throw new Error(errors.join("\n"));
  }
}

function parseArgs(argv) {
  const args = {
    cwd: undefined,
    entrypoint: null,
    json: false,
    mockSdk: false,
    openclawPath: undefined,
    output: null,
    pluginRoot: undefined,
    write: true,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--check") {
      args.write = false;
      continue;
    }
    if (arg === "--cwd") {
      args.cwd = argv[index + 1];
      index += 1;
      continue;
    }
    if (arg === "--entrypoint") {
      args.entrypoint = argv[index + 1];
      index += 1;
      continue;
    }
    if (arg === "--json") {
      args.json = true;
      continue;
    }
    if (arg === "--mock-sdk") {
      args.mockSdk = true;
      continue;
    }
    if (arg === "--no-mock-sdk") {
      args.mockSdk = false;
      continue;
    }
    if (arg === "--openclaw") {
      args.openclawPath = argv[index + 1];
      index += 1;
      continue;
    }
    if (arg === "--output") {
      args.output = argv[index + 1];
      index += 1;
      continue;
    }
    if (arg === "--plugin-root") {
      args.pluginRoot = argv[index + 1];
      index += 1;
      continue;
    }
    if (arg === "--no-openclaw") {
      args.openclawPath = false;
      continue;
    }
    if (arg === "--write") {
      args.write = true;
    }
  }

  return args;
}

export async function buildSyntheticProbePlan(options = {}) {
  const report = options.report ?? (options.capture ? null : await buildReport({ openclawPath: options.openclawPath }));
  return pluginInspector.buildSyntheticProbePlanFromReport(report, { capture: options.capture });
}

export async function writeSyntheticProbePlan(plan, options = {}) {
  const jsonPath = options.jsonPath ?? defaultSyntheticProbeJsonPath;
  const markdownPath = options.markdownPath ?? defaultSyntheticProbeMarkdownPath;
  return pluginInspector.writeSyntheticProbePlan(plan, {
    jsonPath,
    markdownPath,
    title: "Crabpot Synthetic Probes",
  });
}

export async function runCapturedSyntheticProbes(capture, options = {}) {
  const result = await pluginInspector.runCapturedSyntheticProbes(capture, {
    ...options,
    syntheticSource: "crabpot.synthetic",
  });
  const manifest = options.manifest ?? (await readConfiguredManifest());
  return applyFixtureSyntheticFailurePolicy(result, manifest);
}

export function renderSyntheticProbeMarkdown(plan) {
  return pluginInspector.renderSyntheticProbeMarkdown(plan, { title: "Crabpot Synthetic Probes" });
}

export function applyFixtureSyntheticFailurePolicy(result, manifest) {
  const fixture = fixtureForSyntheticResult(result, manifest);
  const rules = fixture?.execution?.blockedFailures ?? [];
  if (rules.length === 0 || !Array.isArray(result.results)) {
    return result;
  }

  let changed = false;
  const results = result.results.map((item) => {
    if (item.status !== "fail") {
      return item;
    }
    const rule = rules.find((candidate) => syntheticFailureMatchesRule(item, candidate));
    if (!rule) {
      return item;
    }
    changed = true;
    return {
      ...item,
      status: "blocked",
      reason: rule.reason,
      blockedBy: rule.id,
    };
  });

  if (!changed) {
    return result;
  }

  return {
    ...result,
    summary: {
      ...result.summary,
      passCount: results.filter((item) => item.status === "pass").length,
      failCount: results.filter((item) => item.status === "fail").length,
      blockedCount: results.filter((item) => item.status === "blocked").length,
    },
    results,
  };
}

function fixtureForSyntheticResult(result, manifest) {
  const entrypoint = String(result.entrypoint ?? "").replaceAll("\\", "/");
  return (manifest.fixtures ?? []).find((fixture) => entrypoint.includes(`/.crabpot/workspaces/${fixture.id}/`));
}

function syntheticFailureMatchesRule(item, rule) {
  return (
    item.seam === rule.seam &&
    typeof item.error === "string" &&
    typeof rule.errorIncludes === "string" &&
    item.error.includes(rule.errorIncludes)
  );
}

async function writeJsonResult(result, outputPath) {
  if (!outputPath) {
    process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
    return;
  }
  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, `${JSON.stringify(result, null, 2)}\n`, "utf8");
}
