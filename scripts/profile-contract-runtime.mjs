#!/usr/bin/env node
import { spawn } from "node:child_process";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { performance } from "node:perf_hooks";
import { pathToFileURL } from "node:url";
import { inspectManifest } from "./inspect-fixtures.mjs";
import { repoRoot } from "./manifest-lib.mjs";
import { buildReport } from "./report-lib.mjs";

export const defaultProfileJsonPath = path.join(repoRoot, "reports/crabpot-runtime-profile.json");
export const defaultProfileMarkdownPath = path.join(repoRoot, "reports/crabpot-runtime-profile.md");

const PROFILE_COMMANDS = [
  {
    id: "node-boot",
    label: "Node boot",
    category: "baseline",
    args: ["-e", "0"],
    openclaw: false,
  },
  {
    id: "fixture-inspection",
    label: "Fixture inspection",
    category: "fixture-scan",
    args: ["scripts/inspect-fixtures.mjs", "--check"],
    openclaw: false,
  },
  {
    id: "compat-report-registry",
    label: "Compatibility report plus target registry parse",
    category: "target-registry",
    args: ["scripts/generate-report.mjs", "--check"],
    openclaw: true,
  },
  {
    id: "contract-capture",
    label: "Contract capture inventory",
    category: "contract-capture",
    args: ["scripts/capture-contracts.mjs", "--check"],
    openclaw: true,
  },
  {
    id: "synthetic-probe-plan",
    label: "Synthetic probe plan",
    category: "synthetic-probes",
    args: ["scripts/synthetic-probes.mjs", "--check"],
    openclaw: true,
  },
  {
    id: "cold-import-readiness",
    label: "Cold import readiness",
    category: "cold-import",
    args: ["scripts/cold-import-readiness.mjs", "--check"],
    openclaw: true,
  },
  {
    id: "workspace-plan",
    label: "Workspace execution plan",
    category: "workspace-plan",
    args: ["scripts/workspace-plan.mjs", "--check"],
    openclaw: true,
  },
  {
    id: "platform-probes",
    label: "Platform and loader probes",
    category: "platform-probes",
    args: ["scripts/platform-probes.mjs", "--check"],
    openclaw: true,
  },
  {
    id: "import-loop-profile",
    label: "Repeated cold import capture loop",
    category: "import-loop",
    args: ["scripts/import-loop-profile.mjs", "--check", "--runs", "2"],
    openclaw: false,
  },
];

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  await main();
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const profile = await buildRuntimeProfile({
    openclawPath: args.openclawPath,
    runs: args.runs,
  });
  const errors = validateRuntimeProfile(profile);

  if (args.write) {
    await writeRuntimeProfile(profile);
  }

  if (args.json) {
    process.stdout.write(`${JSON.stringify(profile, null, 2)}\n`);
  } else {
    console.log(
      `runtime profile: ${profile.summary.commandCount} commands, p50 ${profile.summary.p50WallMs}ms, max RSS ${profile.summary.maxPeakRssMb}MB`,
    );
  }

  if (errors.length > 0) {
    throw new Error(errors.join("\n"));
  }
}

function parseArgs(argv) {
  const args = {
    json: false,
    openclawPath: undefined,
    runs: 1,
    write: true,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--check") {
      args.write = false;
      continue;
    }
    if (arg === "--json") {
      args.json = true;
      continue;
    }
    if (arg === "--openclaw") {
      args.openclawPath = argv[index + 1];
      index += 1;
      continue;
    }
    if (arg === "--no-openclaw") {
      args.openclawPath = false;
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

  if (!Number.isInteger(args.runs) || args.runs < 1 || args.runs > 10) {
    throw new Error("--runs must be an integer between 1 and 10");
  }

  return args;
}

export async function buildRuntimeProfile(options = {}) {
  const generatedAt = options.generatedAt ?? "deterministic";
  const runs = options.runs ?? 1;
  const report = options.report ?? (await buildReport({ openclawPath: options.openclawPath }));
  const inspection = options.inspection ?? (await inspectManifest());
  const commands = [];

  for (const command of PROFILE_COMMANDS) {
    const samples = [];
    for (let index = 0; index < runs; index += 1) {
      samples.push(await profileCommand(command, { openclawPath: options.openclawPath }));
    }
    commands.push(summarizeCommand(command, samples));
  }

  return {
    generatedAt,
    runs,
    targetOpenClaw: summarizeTargetOpenClaw(report.targetOpenClaw),
    fixtureInventory: summarizeFixtureInventory(report, inspection),
    platform: {
      os: process.platform,
      arch: process.arch,
      node: process.version,
      rssSampler: process.platform === "win32" ? "unavailable" : "ps",
      cpuSampler: process.platform === "win32" ? "unavailable" : "ps-percent",
    },
    summary: summarizeProfile(commands),
    groups: summarizeCommandGroups(commands),
    commands,
  };
}

function summarizeTargetOpenClaw(targetOpenClaw) {
  return {
    status: targetOpenClaw.status,
    configuredPath: targetOpenClaw.configuredPath ?? null,
    compatRecords: targetOpenClaw.compatRecordCount ?? 0,
    hookNames: targetOpenClaw.hookNameCount ?? 0,
    apiRegistrars: targetOpenClaw.apiRegistrarCount ?? 0,
    capturedRegistrars: targetOpenClaw.capturedRegistrarCount ?? 0,
    sdkExports: targetOpenClaw.sdkExportCount ?? 0,
    manifestFields: targetOpenClaw.manifestFieldCount ?? 0,
    manifestContractFields: targetOpenClaw.manifestContractFieldCount ?? 0,
  };
}

function summarizeFixtureInventory(report, inspection) {
  const fixtures = report.fixtures ?? [];
  return {
    fixtures: fixtures.length,
    sourceFiles: inspection.inspections.reduce((sum, item) => sum + item.sourceFiles.length, 0),
    observedHooks: fixtures.reduce((sum, item) => sum + item.hooks.length, 0),
    observedRegistrations: fixtures.reduce((sum, item) => sum + item.registrations.length, 0),
    observedSdkImports: fixtures.reduce((sum, item) => sum + item.sdkImports.length, 0),
    contractProbes: report.summary.contractProbeCount,
    issueFindings: report.summary.issueCount,
  };
}

function summarizeProfile(commands) {
  const wallTimes = commands.map((command) => command.wallMs.median).sort((left, right) => left - right);
  const maxPeakRssMb = Math.max(...commands.map((command) => command.peakRssMb.max));
  const maxRssDeltaMb = Math.max(...commands.map((command) => command.rssDeltaMb.max));
  const maxCpuMsEstimate = Math.max(...commands.map((command) => command.cpuMsEstimate.max));
  const maxHarnessHeapDeltaMb = Math.max(...commands.map((command) => command.harnessHeapDeltaMb.max));
  return {
    commandCount: commands.length,
    p50WallMs: percentile(wallTimes, 0.5),
    p95WallMs: percentile(wallTimes, 0.95),
    maxPeakRssMb,
    maxRssDeltaMb,
    maxCpuMsEstimate,
    maxHarnessHeapDeltaMb,
  };
}

function summarizeCommand(command, samples) {
  const wallMs = samples.map((sample) => sample.wallMs).sort((left, right) => left - right);
  const peakRssMb = samples.map((sample) => sample.peakRssMb).sort((left, right) => left - right);
  const rssDeltaMb = samples.map((sample) => sample.rssDeltaMb).sort((left, right) => left - right);
  const peakCpuPercent = samples.map((sample) => sample.peakCpuPercent).sort((left, right) => left - right);
  const cpuMsEstimate = samples.map((sample) => sample.cpuMsEstimate).sort((left, right) => left - right);
  const harnessHeapDeltaMb = samples
    .map((sample) => sample.harnessHeapDeltaMb)
    .sort((left, right) => left - right);
  return {
    id: command.id,
    label: command.label,
    category: command.category,
    command: [process.execPath, ...command.args].join(" "),
    samples,
    wallMs: summarizeNumbers(wallMs),
    peakRssMb: summarizeNumbers(peakRssMb),
    rssDeltaMb: summarizeNumbers(rssDeltaMb),
    peakCpuPercent: summarizeNumbers(peakCpuPercent),
    cpuMsEstimate: summarizeNumbers(cpuMsEstimate),
    harnessHeapDeltaMb: summarizeNumbers(harnessHeapDeltaMb),
    exitCodes: [...new Set(samples.map((sample) => sample.exitCode))].sort(),
  };
}

function summarizeCommandGroups(commands) {
  const groups = new Map();
  for (const command of commands) {
    const category = command.category ?? "uncategorized";
    const existing = groups.get(category) ?? [];
    existing.push(command);
    groups.set(category, existing);
  }
  return [...groups.entries()].map(([category, categoryCommands]) => {
    const wallTimes = categoryCommands
      .flatMap((command) => command.samples.map((sample) => sample.wallMs))
      .sort((left, right) => left - right);
    const peakRss = categoryCommands
      .flatMap((command) => command.samples.map((sample) => sample.peakRssMb))
      .sort((left, right) => left - right);
    const cpuMs = categoryCommands
      .flatMap((command) => command.samples.map((sample) => sample.cpuMsEstimate))
      .sort((left, right) => left - right);
    return {
      category,
      commandCount: categoryCommands.length,
      p50WallMs: percentile(wallTimes, 0.5),
      p95WallMs: percentile(wallTimes, 0.95),
      maxPeakRssMb: peakRss.at(-1) ?? 0,
      maxCpuMsEstimate: cpuMs.at(-1) ?? 0,
      commands: categoryCommands.map((command) => command.id),
    };
  });
}

function summarizeNumbers(values) {
  return {
    min: values[0],
    median: percentile(values, 0.5),
    max: values.at(-1),
  };
}

function percentile(sortedValues, percentileValue) {
  if (sortedValues.length === 0) {
    return 0;
  }
  const index = Math.min(sortedValues.length - 1, Math.ceil(sortedValues.length * percentileValue) - 1);
  return sortedValues[index];
}

async function profileCommand(command, options) {
  const args = [...command.args];
  if (command.openclaw) {
    if (options.openclawPath === false) {
      args.push("--no-openclaw");
    } else if (options.openclawPath) {
      args.push("--openclaw", options.openclawPath);
    }
  }

  const start = performance.now();
  const heapStartMb = heapUsedMb();
  let firstRssKb = 0;
  let peakRssKb = 0;
  let peakCpuPercent = 0;
  const cpuSamples = [];
  let pollInFlight = false;
  const child = spawn(process.execPath, args, {
    cwd: repoRoot,
    env: { ...process.env, CRABPOT_REPORT_GENERATED_AT: "deterministic" },
    stdio: ["ignore", "pipe", "pipe"],
  });
  const stdout = [];
  const stderr = [];
  child.stdout.on("data", (chunk) => stdout.push(chunk));
  child.stderr.on("data", (chunk) => stderr.push(chunk));

  const recordStats = (stats) => {
    if (stats.rssKb > 0 && firstRssKb === 0) {
      firstRssKb = stats.rssKb;
    }
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
  if (finalStats.rssKb > 0 && firstRssKb === 0) {
    firstRssKb = finalStats.rssKb;
  }
  peakRssKb = Math.max(peakRssKb, finalStats.rssKb);
  peakCpuPercent = Math.max(peakCpuPercent, finalStats.cpuPercent);
  if (finalStats.cpuPercent > 0) {
    cpuSamples.push(finalStats.cpuPercent);
  }

  const wallMs = Math.round(performance.now() - start);
  const averageCpuPercent =
    cpuSamples.length > 0
      ? Math.round((cpuSamples.reduce((sum, value) => sum + value, 0) / cpuSamples.length) * 10) / 10
      : 0;

  return {
    wallMs,
    peakRssMb: Math.round((peakRssKb / 1024) * 10) / 10,
    rssDeltaMb: Math.round(((peakRssKb - firstRssKb) / 1024) * 10) / 10,
    peakCpuPercent,
    cpuMsEstimate: Math.round((wallMs * averageCpuPercent) / 100),
    harnessHeapDeltaMb: Math.round((heapUsedMb() - heapStartMb) * 10) / 10,
    exitCode,
    stdoutPreview: Buffer.concat(stdout).toString("utf8").trim().split("\n").slice(-2).join("\n"),
    stderrPreview: Buffer.concat(stderr).toString("utf8").trim().split("\n").slice(-2).join("\n"),
  };
}

async function readProcessStats(pid) {
  if (!pid) {
    return { rssKb: 0, cpuPercent: 0 };
  }
  if (process.platform === "win32") {
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

function heapUsedMb() {
  return Math.round((process.memoryUsage().heapUsed / 1024 / 1024) * 10) / 10;
}

export function validateRuntimeProfile(profile) {
  const errors = [];
  for (const command of profile.commands) {
    if (command.exitCodes.some((code) => code !== 0)) {
      errors.push(`${command.id}: nonzero exit code(s): ${command.exitCodes.join(", ")}`);
    }
    if (command.wallMs.max <= 0) {
      errors.push(`${command.id}: missing wall time`);
    }
  }
  if (profile.platform?.rssSampler !== "unavailable" && profile.commands.every((command) => command.peakRssMb.max <= 0)) {
    errors.push("all commands are missing peak RSS");
  }
  return errors;
}

export async function writeRuntimeProfile(profile, options = {}) {
  const jsonPath = options.jsonPath ?? defaultProfileJsonPath;
  const markdownPath = options.markdownPath ?? defaultProfileMarkdownPath;
  await mkdir(path.dirname(jsonPath), { recursive: true });
  await writeFile(jsonPath, `${JSON.stringify(profile, null, 2)}\n`, "utf8");
  await writeFile(markdownPath, `${renderRuntimeProfileMarkdown(profile)}\n`, "utf8");
  return { jsonPath, markdownPath };
}

export function renderRuntimeProfileMarkdown(profile) {
  return [
    "# Crabpot Runtime Profile",
    "",
    `Generated: ${profile.generatedAt}`,
    `Samples per command: ${profile.runs}`,
    "",
    "## Summary",
    "",
    markdownTable(
      [
        ["Commands", profile.summary.commandCount],
        ["P50 wall time", `${profile.summary.p50WallMs} ms`],
        ["P95 wall time", `${profile.summary.p95WallMs} ms`],
        ["Max peak RSS", `${profile.summary.maxPeakRssMb} MB`],
        ["Max RSS delta", `${profile.summary.maxRssDeltaMb} MB`],
        ["Max CPU estimate", `${profile.summary.maxCpuMsEstimate} ms`],
        ["Max harness heap delta", `${profile.summary.maxHarnessHeapDeltaMb} MB`],
      ],
      ["Metric", "Value"],
    ),
    "",
    "## Target OpenClaw Registry Surface",
    "",
    markdownTable(
      Object.entries(profile.targetOpenClaw).map(([key, value]) => [key, value ?? "-"]),
      ["Metric", "Value"],
    ),
    "",
    "## Crabpot Fixture Surface",
    "",
    markdownTable(
      Object.entries(profile.fixtureInventory).map(([key, value]) => [key, value]),
      ["Metric", "Value"],
    ),
    "",
    "## Boot And Memory Samples",
    "",
    markdownTable(
      profile.commands.map((command) => [
        command.id,
        command.label,
        `${command.wallMs.median} ms`,
        `${command.wallMs.max} ms`,
        `${command.peakRssMb.max} MB`,
        `${command.rssDeltaMb.max} MB`,
        `${command.cpuMsEstimate.max} ms`,
        `${command.harnessHeapDeltaMb.max} MB`,
        command.exitCodes.join(", "),
      ]),
      ["ID", "Label", "Median wall", "Max wall", "Max peak RSS", "Max RSS delta", "CPU estimate", "Heap delta", "Exit codes"],
    ),
    "",
    "## Category Rollups",
    "",
    markdownTable(
      (profile.groups ?? []).map((group) => [
        group.category,
        group.commandCount,
        `${group.p50WallMs} ms`,
        `${group.p95WallMs} ms`,
        `${group.maxPeakRssMb} MB`,
        `${group.maxCpuMsEstimate} ms`,
        group.commands.join(", "),
      ]),
      ["Category", "Commands", "P50 wall", "P95 wall", "Max peak RSS", "CPU estimate", "Command IDs"],
    ),
  ].join("\n");
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
