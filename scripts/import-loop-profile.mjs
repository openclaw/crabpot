#!/usr/bin/env node
import { spawn } from "node:child_process";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { performance } from "node:perf_hooks";
import { pathToFileURL } from "node:url";
import { repoRoot } from "./manifest-lib.mjs";

export const defaultImportLoopJsonPath = path.join(repoRoot, "reports/crabpot-import-loop-profile.json");
export const defaultImportLoopMarkdownPath = path.join(repoRoot, "reports/crabpot-import-loop-profile.md");

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  await main();
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const report = await buildImportLoopProfile({
    entrypoint: args.entrypoint,
    runs: args.runs,
  });
  const errors = validateImportLoopProfile(report);

  if (args.write) {
    await writeImportLoopProfile(report);
  }
  if (args.json) {
    process.stdout.write(`${JSON.stringify(report, null, 2)}\n`);
  } else {
    console.log(
      `import loop profile: ${report.summary.runs} runs, p50 ${report.summary.p50WallMs}ms, max RSS ${report.summary.maxPeakRssMb}MB`,
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
  const runs = options.runs ?? 3;
  const entrypoint = options.entrypoint ?? "test/fixtures/lazy-import-plugin.mjs";
  const samples = [];
  for (let index = 0; index < runs; index += 1) {
    samples.push(await runCaptureSample({ entrypoint, index }));
  }

  const wallMs = samples.map((sample) => sample.wallMs).sort((left, right) => left - right);
  return {
    generatedAt: "deterministic",
    mode: "subprocess-cold-import-loop",
    entrypoint,
    summary: {
      runs,
      p50WallMs: percentile(wallMs, 0.5),
      p95WallMs: percentile(wallMs, 0.95),
      maxPeakRssMb: Math.max(0, ...samples.map((sample) => sample.peakRssMb)),
      maxCpuMsEstimate: Math.max(0, ...samples.map((sample) => sample.cpuMsEstimate)),
      capturedCount: samples.reduce((sum, sample) => sum + sample.capturedCount, 0),
      failCount: samples.filter((sample) => sample.exitCode !== 0 || sample.status !== "captured").length,
    },
    samples,
  };
}

async function runCaptureSample({ entrypoint, index }) {
  const outputPath = path.join(repoRoot, ".crabpot", "import-loop", `capture-${index}.json`);
  await mkdir(path.dirname(outputPath), { recursive: true });
  const args = ["scripts/run-cold-import-capture.mjs", entrypoint, "--output", outputPath];
  const start = performance.now();
  let peakRssKb = 0;
  let peakCpuPercent = 0;
  const cpuSamples = [];
  let pollInFlight = false;
  const child = spawn(process.execPath, args, {
    cwd: repoRoot,
    env: { ...process.env, CRABPOT_EXECUTE_ISOLATED: "1" },
    stdio: ["ignore", "pipe", "pipe"],
  });
  const stderr = [];
  child.stderr.on("data", (chunk) => stderr.push(chunk));
  const recordStats = (stats) => {
    peakRssKb = Math.max(peakRssKb, stats.rssKb);
    peakCpuPercent = Math.max(peakCpuPercent, stats.cpuPercent);
    if (stats.cpuPercent > 0) {
      cpuSamples.push(stats.cpuPercent);
    }
  };
  const poll = setInterval(() => {
    if (pollInFlight) {
      return;
    }
    pollInFlight = true;
    readProcessStats(child.pid)
      .then(recordStats)
      .finally(() => {
        pollInFlight = false;
      });
  }, 100);

  const exitCode = await new Promise((resolve, reject) => {
    child.on("error", (error) => {
      clearInterval(poll);
      reject(error);
    });
    child.on("exit", (code) => resolve(code ?? 1));
  });
  clearInterval(poll);
  const finalStats = await readProcessStats(child.pid);
  peakRssKb = Math.max(peakRssKb, finalStats.rssKb);
  peakCpuPercent = Math.max(peakCpuPercent, finalStats.cpuPercent);
  if (finalStats.cpuPercent > 0) {
    cpuSamples.push(finalStats.cpuPercent);
  }
  const wallMs = Math.round(performance.now() - start);
  const averageCpuPercent =
    cpuSamples.length > 0
      ? cpuSamples.reduce((sum, value) => sum + value, 0) / cpuSamples.length
      : 0;
  const output = exitCode === 0 ? JSON.parse(await readFile(outputPath, "utf8")) : null;

  return {
    index,
    exitCode,
    status: output?.status ?? "failed",
    capturedCount: output?.captured?.length ?? 0,
    wallMs,
    peakRssMb: Math.round((peakRssKb / 1024) * 10) / 10,
    peakCpuPercent: Math.round(peakCpuPercent * 10) / 10,
    cpuMsEstimate: Math.round((wallMs * averageCpuPercent) / 100),
    stderrPreview: Buffer.concat(stderr).toString("utf8").trim().split("\n").slice(-2).join("\n"),
  };
}

export function validateImportLoopProfile(report) {
  const errors = [];
  if (report.summary.failCount > 0) {
    errors.push(`import loop has ${report.summary.failCount} failed sample(s)`);
  }
  if (report.summary.capturedCount < report.summary.runs) {
    errors.push("import loop did not capture at least one contract per run");
  }
  if (report.summary.p50WallMs <= 0) {
    errors.push("import loop is missing wall-time samples");
  }
  return errors;
}

export async function writeImportLoopProfile(report, options = {}) {
  const jsonPath = options.jsonPath ?? defaultImportLoopJsonPath;
  const markdownPath = options.markdownPath ?? defaultImportLoopMarkdownPath;
  await mkdir(path.dirname(jsonPath), { recursive: true });
  await writeFile(jsonPath, `${JSON.stringify(report, null, 2)}\n`, "utf8");
  await writeFile(markdownPath, `${renderImportLoopProfileMarkdown(report)}\n`, "utf8");
  return { jsonPath, markdownPath };
}

export function renderImportLoopProfileMarkdown(report) {
  return [
    "# Crabpot Import Loop Profile",
    "",
    `Generated: ${report.generatedAt}`,
    `Mode: ${report.mode}`,
    `Entrypoint: ${report.entrypoint}`,
    "",
    "## Summary",
    "",
    markdownTable(Object.entries(report.summary).map(([key, value]) => [key, value]), ["Metric", "Value"]),
    "",
    "## Samples",
    "",
    markdownTable(
      report.samples.map((sample) => [
        sample.index,
        sample.status,
        sample.capturedCount,
        `${sample.wallMs} ms`,
        `${sample.peakRssMb} MB`,
        `${sample.cpuMsEstimate} ms`,
        sample.exitCode,
      ]),
      ["Run", "Status", "Captured", "Wall", "Peak RSS", "CPU Estimate", "Exit"],
    ),
  ].join("\n");
}

async function readProcessStats(pid) {
  if (!pid || process.platform === "win32") {
    return { rssKb: 0, cpuPercent: 0 };
  }
  return new Promise((resolve) => {
    const ps = spawn("ps", ["-o", "rss=", "-o", "%cpu=", "-p", String(pid)], {
      stdio: ["ignore", "pipe", "ignore"],
    });
    const chunks = [];
    ps.stdout.on("data", (chunk) => chunks.push(chunk));
    ps.on("error", () => resolve({ rssKb: 0, cpuPercent: 0 }));
    ps.on("exit", () => {
      const [rssRaw, cpuRaw] = Buffer.concat(chunks).toString("utf8").trim().split(/\s+/);
      const rssKb = Number.parseInt(rssRaw, 10);
      const cpuPercent = Number.parseFloat(cpuRaw);
      resolve({
        rssKb: Number.isFinite(rssKb) ? rssKb : 0,
        cpuPercent: Number.isFinite(cpuPercent) ? cpuPercent : 0,
      });
    });
  });
}

function percentile(sortedValues, percentileValue) {
  if (sortedValues.length === 0) {
    return 0;
  }
  const index = Math.min(sortedValues.length - 1, Math.ceil(sortedValues.length * percentileValue) - 1);
  return sortedValues[index];
}

function markdownTable(rows, headers) {
  if (rows.length === 0) {
    return "_none_";
  }

  const allRows = [headers, ...rows.map((row) => row.map(String))];
  const widths = headers.map((_, columnIndex) =>
    Math.max(...allRows.map((row) => row[columnIndex].length)),
  );
  const renderRow = (row) => `| ${row.map((cell, index) => cell.padEnd(widths[index])).join(" | ")} |`;
  return [
    renderRow(headers),
    renderRow(widths.map((width) => "-".repeat(width))),
    ...rows.map((row) => renderRow(row.map(String))),
  ].join("\n");
}
