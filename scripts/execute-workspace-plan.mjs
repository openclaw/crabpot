#!/usr/bin/env node
import { spawn } from "node:child_process";
import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { performance } from "node:perf_hooks";
import { pathToFileURL } from "node:url";
import { buildWorkspacePlan } from "./workspace-plan.mjs";
import { repoRoot } from "./manifest-lib.mjs";
import { portableCommand } from "./portable-command.mjs";

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  await main();
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const plan = await buildWorkspacePlan({ openclawPath: args.openclawPath });
  const selected = selectWorkspaceSteps(plan, args);
  const errors = validateExecutionRequest({
    args,
    selected,
    fixtureExists: !args.fixture || plan.fixtures.some((fixture) => fixture.id === args.fixture),
  });

  if (errors.length > 0) {
    throw new Error(errors.join("\n"));
  }

  if (args.dryRun) {
    console.log(JSON.stringify({ mode: "dry-run", selected }, null, 2));
    return;
  }

  if (selected.length === 0) {
    await writeExecutionProfile(args.fixture, []);
    console.log(`workspace execution: no entrypoints selected for ${args.fixture}`);
    return;
  }

  const profiles = [];
  for (const item of selected) {
    for (const step of item.steps) {
      const result = await runStep(step);
      profiles.push({
        fixture: item.fixture,
        entrypoint: item.entrypoint,
        packagePath: item.packagePath,
        status: item.status,
        ...result,
      });
      await writeExecutionProfile(args.fixture, profiles);
      if (result.exitCode !== 0) {
        throw new Error(`${step.kind} failed with exit code ${result.exitCode}: ${step.command}`);
      }
    }
  }
}

function parseArgs(argv) {
  const args = {
    allowEmpty: false,
    dryRun: false,
    fixture: null,
    entrypoint: null,
    openclawPath: undefined,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--dry-run") {
      args.dryRun = true;
      continue;
    }
    if (arg === "--allow-empty") {
      args.allowEmpty = true;
      continue;
    }
    if (arg === "--fixture") {
      args.fixture = argv[index + 1];
      index += 1;
      continue;
    }
    if (arg === "--entrypoint") {
      args.entrypoint = argv[index + 1];
      index += 1;
      continue;
    }
    if (arg === "--openclaw") {
      args.openclawPath = argv[index + 1];
      index += 1;
      continue;
    }
    if (arg === "--no-openclaw") {
      args.openclawPath = false;
    }
  }

  return args;
}

export function selectWorkspaceSteps(plan, args) {
  const selected = [];
  for (const fixture of plan.fixtures) {
    if (args.fixture && fixture.id !== args.fixture) {
      continue;
    }
    for (const entrypoint of fixture.entrypoints) {
      if (args.entrypoint && entrypoint.id !== args.entrypoint) {
        continue;
      }
      selected.push({
        fixture: fixture.id,
        entrypoint: entrypoint.id,
        packagePath: entrypoint.packagePath,
        status: entrypoint.status,
        steps: entrypoint.steps,
      });
    }
  }
  return selected;
}

export function validateExecutionRequest({ args, selected, env = process.env, fixtureExists = true }) {
  const errors = [];
  if (!args.fixture) {
    errors.push("workspace execution requires --fixture to keep opt-in scope narrow");
  }
  if (args.fixture && !fixtureExists) {
    errors.push(`workspace execution selected unknown fixture: ${args.fixture}`);
  }
  if (selected.length === 0 && !args.allowEmpty) {
    errors.push("workspace execution selected no entrypoints");
  }
  if (!args.dryRun && env.CRABPOT_EXECUTE_ISOLATED !== "1") {
    errors.push("workspace execution requires CRABPOT_EXECUTE_ISOLATED=1 unless --dry-run is used");
  }
  return errors;
}

export async function runStep(step) {
  const operation = parsePortableStep(step);
  if (operation.type === "copy-workspace") {
    return measureLocalStep(step, async () => {
      await rm(repoPath(operation.destination), { force: true, recursive: true });
      await mkdir(path.dirname(repoPath(operation.destination)), { recursive: true });
      await cp(repoPath(operation.source), repoPath(operation.destination), {
        force: true,
        recursive: true,
        verbatimSymlinks: true,
      });
    });
  }
  if (operation.type === "mkdir") {
    return measureLocalStep(step, () => mkdir(repoPath(operation.path), { recursive: true }));
  }
  if (operation.type === "audit") {
    return measureProcessStep(step, {
      args: operation.args,
      captureStdoutPath: path.join(repoPath(step.cwd), operation.outputPath),
      command: operation.command,
      env: operation.env,
      ignoreExitCode: true,
    });
  }
  return measureProcessStep(step, operation);
}

export function parsePortableStep(step) {
  const copyMatch = step.command.match(/^mkdir -p (?<workspace>\S+) && rsync -a --delete (?<source>\S+)\/ (?<destination>\S+)\/$/);
  if (step.kind === "prepare" && copyMatch?.groups) {
    return {
      destination: copyMatch.groups.destination,
      source: copyMatch.groups.source,
      type: "copy-workspace",
    };
  }

  const mkdirMatch = step.command.match(/^mkdir -p (?<path>\S+)$/);
  if (step.kind === "prepare-artifacts" && mkdirMatch?.groups) {
    return {
      path: mkdirMatch.groups.path,
      type: "mkdir",
    };
  }

  const auditMatch = step.command.match(/^(?<command>\S+) audit --json > (?<outputPath>\S+) \|\| true$/);
  if (step.kind === "audit" && auditMatch?.groups) {
    return {
      args: ["audit", "--json"],
      command: auditMatch.groups.command,
      env: {},
      outputPath: auditMatch.groups.outputPath,
      type: "audit",
    };
  }

  const { args, command, env } = parseCommandInvocation(step.command);
  return {
    args,
    command,
    env,
    type: "process",
  };
}

function parseCommandInvocation(commandText) {
  const tokens = tokenizeCommand(commandText);
  const env = {};
  while (tokens[0] && /^[A-Za-z_][A-Za-z0-9_]*=/.test(tokens[0])) {
    const token = tokens.shift();
    const separator = token.indexOf("=");
    env[token.slice(0, separator)] = token.slice(separator + 1);
  }
  const command = tokens.shift();
  return {
    args: tokens,
    command,
    env,
  };
}

function tokenizeCommand(commandText) {
  const tokens = [];
  const matcher = /"([^"\\]*(?:\\.[^"\\]*)*)"|'([^'\\]*(?:\\.[^'\\]*)*)'|(\S+)/g;
  for (const match of commandText.matchAll(matcher)) {
    tokens.push(normalizeToken((match[1] ?? match[2] ?? match[3]).replaceAll('\\"', '"').replaceAll("\\'", "'")));
  }
  return tokens;
}

function normalizeToken(token) {
  const assignment = token.match(/^([^=]+)="([^"]*)"$/);
  return assignment ? `${assignment[1]}=${assignment[2]}` : token;
}

async function measureLocalStep(step, callback) {
  const start = performance.now();
  await callback();
  return {
    kind: step.kind,
    command: step.command,
    cwd: step.cwd,
    artifactPath: step.artifactPath ?? null,
    exitCode: 0,
    wallMs: Math.round(performance.now() - start),
    peakRssMb: 0,
    peakCpuPercent: 0,
    cpuMsEstimate: 0,
  };
}

function measureProcessStep(step, operation) {
  return new Promise((resolve, reject) => {
    const start = performance.now();
    let peakRssKb = 0;
    let peakCpuPercent = 0;
    const cpuSamples = [];
    let pollInFlight = false;
    const child = spawn(portableCommand(operation.command), operation.args, {
      cwd: path.join(repoRoot, step.cwd),
      env: { ...process.env, ...operation.env, CRABPOT_EXECUTE_ISOLATED: "1" },
      shell: false,
      stdio: operation.captureStdoutPath ? ["ignore", "pipe", "inherit"] : "inherit",
    });
    const stdoutChunks = [];
    if (operation.captureStdoutPath) {
      child.stdout.on("data", (chunk) => stdoutChunks.push(chunk));
    }
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
    child.on("exit", async (code) => {
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
      if (operation.captureStdoutPath) {
        await mkdir(path.dirname(operation.captureStdoutPath), { recursive: true });
        await writeFile(operation.captureStdoutPath, Buffer.concat(stdoutChunks));
      }
      const exitCode = code ?? 1;
      resolve({
        kind: step.kind,
        command: step.command,
        cwd: step.cwd,
        artifactPath: step.artifactPath ?? null,
        exitCode: operation.ignoreExitCode ? 0 : exitCode,
        rawExitCode: operation.ignoreExitCode ? exitCode : undefined,
        wallMs,
        peakRssMb: Math.round((peakRssKb / 1024) * 10) / 10,
        peakCpuPercent: Math.round(peakCpuPercent * 10) / 10,
        cpuMsEstimate: Math.round((wallMs * averageCpuPercent) / 100),
      });
    });
    child.on("error", (error) => {
      clearInterval(poll);
      reject(error);
    });
  });
}

function repoPath(relativePath) {
  return path.join(repoRoot, relativePath);
}

async function writeExecutionProfile(fixtureId, steps) {
  const jsonPath = path.join(repoRoot, ".crabpot", "results", fixtureId, "execution-profile.json");
  const profile = {
    generatedAt: "deterministic",
    fixture: fixtureId,
    summary: {
      stepCount: steps.length,
      failCount: steps.filter((step) => step.exitCode !== 0).length,
      totalWallMs: steps.reduce((sum, step) => sum + step.wallMs, 0),
      maxPeakRssMb: Math.max(0, ...steps.map((step) => step.peakRssMb)),
      maxCpuMsEstimate: Math.max(0, ...steps.map((step) => step.cpuMsEstimate)),
    },
    steps,
  };
  await mkdir(path.dirname(jsonPath), { recursive: true });
  await writeFile(jsonPath, `${JSON.stringify(profile, null, 2)}\n`, "utf8");
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
