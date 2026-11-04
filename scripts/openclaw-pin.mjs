#!/usr/bin/env node
import { appendFile, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { repoRoot } from "./manifest-lib.mjs";

export const defaultOpenClawPinPath = path.join(repoRoot, ".github/openclaw-default-track.json");
export const defaultMaxPinAgeDays = 14;

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  await main();
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.promote) {
    if (!args.sha) {
      throw new Error("promotion requires the exact green HEAD canary SHA");
    }
    const sha = args.sha;
    await assertOpenClawCommit(sha);
    const pin = {
      repository: "openclaw/openclaw",
      sha,
      pinnedAt: args.date || new Date().toISOString().slice(0, 10),
    };
    validatePin(pin);
    await writeFile(args.file, `${JSON.stringify(pin, null, 2)}\n`, "utf8");
    console.log(`promoted Default Track to ${pin.sha} (${pin.pinnedAt})`);
    return;
  }

  const pin = await readOpenClawPin(args.file);
  if (args.checkAge) {
    const age = pinAgeDays(pin, args.now ? new Date(args.now) : new Date());
    console.log(`Default Track pin ${pin.sha.slice(0, 12)} age: ${age} day(s); SLA: ${args.maxAgeDays} day(s)`);
    if (age > args.maxAgeDays) {
      throw new Error(
        `Default Track pin is ${age} days old (maximum ${args.maxAgeDays}); promote a green HEAD canary with npm run openclaw:promote`,
      );
    }
  }

  const result = pinOutputs(pin);
  if (args.githubOutput) {
    await writeGithubOutput(result);
    return;
  }
  process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
}

function parseArgs(argv) {
  const args = {
    checkAge: false,
    date: "",
    file: defaultOpenClawPinPath,
    githubOutput: false,
    maxAgeDays: defaultMaxPinAgeDays,
    now: "",
    promote: false,
    sha: "",
  };
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--check-age") {
      args.checkAge = true;
      continue;
    }
    if (arg === "--date") {
      args.date = argv[++index] ?? "";
      continue;
    }
    if (arg === "--file") {
      args.file = path.resolve(argv[++index] ?? "");
      continue;
    }
    if (arg === "--github-output") {
      args.githubOutput = true;
      continue;
    }
    if (arg === "--max-age-days") {
      args.maxAgeDays = Number(argv[++index]);
      continue;
    }
    if (arg === "--now") {
      args.now = argv[++index] ?? "";
      continue;
    }
    if (arg === "--promote") {
      args.promote = true;
      const candidate = argv[index + 1];
      if (candidate && !candidate.startsWith("--")) {
        args.sha = candidate;
        index += 1;
      }
      continue;
    }
    throw new Error(`unknown argument: ${arg}`);
  }
  if (!Number.isInteger(args.maxAgeDays) || args.maxAgeDays < 0) {
    throw new Error("--max-age-days must be a non-negative integer");
  }
  return args;
}

export async function readOpenClawPin(file = defaultOpenClawPinPath) {
  const pin = JSON.parse(await readFile(file, "utf8"));
  validatePin(pin);
  return pin;
}

export function validatePin(pin) {
  if (pin?.repository !== "openclaw/openclaw") {
    throw new Error("Default Track repository must be openclaw/openclaw");
  }
  if (!/^[0-9a-f]{40}$/.test(pin.sha ?? "")) {
    throw new Error("Default Track SHA must be 40 lowercase hexadecimal characters");
  }
  const pinnedDate = new Date(`${pin.pinnedAt}T00:00:00Z`);
  if (
    !/^\d{4}-\d{2}-\d{2}$/.test(pin.pinnedAt ?? "")
    || Number.isNaN(pinnedDate.getTime())
    || pinnedDate.toISOString().slice(0, 10) !== pin.pinnedAt
  ) {
    throw new Error("Default Track pinnedAt must be a valid YYYY-MM-DD date");
  }
}

export function pinOutputs(pin) {
  return {
    label: `${pin.repository}@${pin.sha.slice(0, 12)} (Default Track pin ${pin.pinnedAt})`,
    pinned_at: pin.pinnedAt,
    ref: pin.sha,
    repository: pin.repository,
    sha: pin.sha,
    track: "latest",
  };
}

export function pinAgeDays(pin, now = new Date()) {
  validatePin(pin);
  if (Number.isNaN(now.getTime())) {
    throw new Error("invalid current date");
  }
  const pinnedAt = Date.parse(`${pin.pinnedAt}T00:00:00Z`);
  if (pinnedAt > now.getTime()) {
    throw new Error(`Default Track pinnedAt ${pin.pinnedAt} is in the future`);
  }
  return Math.floor((now.getTime() - pinnedAt) / 86_400_000);
}

async function assertOpenClawCommit(sha) {
  if (!/^[0-9a-f]{40}$/.test(sha)) {
    throw new Error("promotion SHA must be 40 lowercase hexadecimal characters");
  }
  const response = await fetch(`https://api.github.com/repos/openclaw/openclaw/commits/${sha}`, {
    headers: { Accept: "application/vnd.github+json", "User-Agent": "crabpot-openclaw-pin" },
    signal: AbortSignal.timeout(15_000),
  });
  if (!response.ok) {
    throw new Error(`could not verify OpenClaw commit ${sha}: GitHub returned ${response.status}`);
  }
}

async function writeGithubOutput(result) {
  const output = `${Object.entries(result).map(([key, value]) => `${key}=${value}`).join("\n")}\n`;
  if (process.env.GITHUB_OUTPUT) {
    await appendFile(process.env.GITHUB_OUTPUT, output, "utf8");
    return;
  }
  process.stdout.write(output);
}
