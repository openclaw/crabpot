#!/usr/bin/env node
import { existsSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { repoRoot } from "./manifest-lib.mjs";
import { loadPluginInspectorPublicApi } from "./plugin-inspector-source.mjs";

export const defaultImportLoopJsonPath = path.join(repoRoot, "reports/crabpot-import-loop-profile.json");
export const defaultImportLoopMarkdownPath = path.join(repoRoot, "reports/crabpot-import-loop-profile.md");
export const defaultOpenClawPath = path.resolve(repoRoot, "../openclaw");

const pluginInspector = await loadPluginInspectorPublicApi();

const crabpotImportLoopProfileOptions = {
  captureScript: "scripts/run-cold-import-capture.mjs",
  jsonPath: defaultImportLoopJsonPath,
  markdownPath: defaultImportLoopMarkdownPath,
  optInEnv: "CRABPOT_EXECUTE_ISOLATED",
  outputDir: ".crabpot/import-loop",
  reportTitle: "Crabpot Import Loop Profile",
  rootDir: repoRoot,
};

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  await main();
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const report = await buildImportLoopProfile({
    entrypoint: args.entrypoint,
    openclawPath: args.openclawPath,
    runs: args.runs,
  });
  const errors = validateImportLoopProfile(report, {
    requireOpenClawLifecycle: Boolean(args.openclawPath),
  });

  if (args.write) {
    await writeImportLoopProfile(report);
  }
  if (args.json) {
    process.stdout.write(`${JSON.stringify(report, null, 2)}\n`);
  } else {
    console.log(
      `import loop profile: ${report.summary.runs} runs, ${importLoopMetricLabel(report.summary)}`,
    );
  }

  if (errors.length > 0) {
    throw new Error(errors.join("\n"));
  }
}

function parseArgs(argv) {
  const args = {
    entrypoint: "test/fixtures/lazy-import-plugin.mjs",
    json: false,
    openclawPath: null,
    runs: 3,
    write: true,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--check") {
      args.write = false;
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
    if (arg === "--openclaw") {
      const next = argv[index + 1];
      if (next && !next.startsWith("--")) {
        args.openclawPath = next;
        index += 1;
      } else {
        args.openclawPath = defaultOpenClawPath;
      }
      continue;
    }
    if (arg === "--no-openclaw") {
      args.openclawPath = null;
      continue;
    }
    if (arg === "--runs") {
      args.runs = Number.parseInt(argv[index + 1], 10);
      index += 1;
      continue;
    }
    if (arg === "--write") {
      args.write = true;
    }
  }

  if (!Number.isInteger(args.runs) || args.runs < 1 || args.runs > 20) {
    throw new Error("--runs must be an integer between 1 and 20");
  }
  return args;
}

export async function buildImportLoopProfile(options = {}) {
  return pluginInspector.buildImportLoopProfile({
    ...crabpotImportLoopProfileOptions,
    ...(options.openclawPath ? openClawLifecycleProfileOptions(options.openclawPath) : {}),
    ...options,
    openclawPath: undefined,
    rootDir: options.rootDir ?? crabpotImportLoopProfileOptions.rootDir,
  });
}

export function validateImportLoopProfile(report, options = {}) {
  const errors = pluginInspector.validateImportLoopProfile(report);
  if (options.requireOpenClawLifecycle && (report.summary?.openClawLifecycleCount ?? 0) < 1) {
    errors.push("OpenClaw lifecycle profile requested but no import+activate samples were captured");
  }
  return errors;
}

export async function writeImportLoopProfile(report, options = {}) {
  return pluginInspector.writeImportLoopProfile(report, {
    ...crabpotImportLoopProfileOptions,
    ...options,
    rootDir: options.rootDir ?? crabpotImportLoopProfileOptions.rootDir,
  });
}

export function renderImportLoopProfileMarkdown(report, options = {}) {
  return pluginInspector.renderImportLoopProfileMarkdown(report, {
    ...crabpotImportLoopProfileOptions,
    ...options,
  });
}

function formatSampledMetric(value, count, unit = "MB") {
  if ((count ?? 0) <= 0) {
    return "n/a";
  }
  return `${value}${unit}`;
}

function importLoopMetricLabel(summary) {
  const metricLabel = summary.maxPluginPeakRssDeltaMb === undefined ? "raw" : "plugin delta";
  const rss = summary.maxPluginPeakRssDeltaMb ?? summary.maxPeakRssMb;
  const cpu = summary.maxPluginCpuDeltaMsEstimate ?? summary.maxCpuMsEstimate;
  const openClawLifecycle =
    (summary.openClawLifecycleCount ?? 0) > 0
      ? ` / OpenClaw import ${summary.p50OpenClawImportMs}ms / activate ${summary.p50OpenClawActivationMs}ms`
      : "";
  return `p50 ${summary.p50WallMs}ms / p95 ${summary.p95WallMs}ms / ${metricLabel} RSS ${formatSampledMetric(rss, summary.rssSampleCount)} / ${metricLabel} CPU ${formatSampledMetric(cpu, summary.cpuSampleCount, "ms")}${openClawLifecycle}`;
}

function openClawLifecycleProfileOptions(openclawPath) {
  const resolvedOpenClawPath = path.resolve(repoRoot, openclawPath);
  const loaderPath = path.join(resolvedOpenClawPath, "src", "plugins", "loader.ts");
  if (!existsSync(loaderPath)) {
    throw new Error(`OpenClaw loader not found at ${loaderPath}`);
  }
  const captureScript = path.join(repoRoot, "scripts", "run-openclaw-lifecycle-capture.mjs");
  return {
    mode: "openclaw-loader-lifecycle-profile",
    captureCommand: ({ entrypoint, outputPath, rootDir }) => ({
      command: process.execPath,
      args: [
        "--import",
        "tsx",
        captureScript,
        path.resolve(rootDir, entrypoint),
        "--output",
        outputPath,
      ],
      cwd: resolvedOpenClawPath,
      env: {
        CRABPOT_EXECUTE_ISOLATED: "1",
        CRABPOT_OPENCLAW_DIR: resolvedOpenClawPath,
      },
    }),
  };
}
