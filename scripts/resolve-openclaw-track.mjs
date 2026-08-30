#!/usr/bin/env node
import { execFile as execFileCallback } from "node:child_process";
import { appendFile } from "node:fs/promises";
import { promisify } from "node:util";
import { pathToFileURL } from "node:url";

const execFile = promisify(execFileCallback);

export const openclawRepository = "openclaw/openclaw";
export const openclawGitUrl = "https://github.com/openclaw/openclaw.git";
const defaultFetchTimeoutMs = 15_000;
const defaultGitTimeoutMs = 2 * 60 * 1000;

const branchTracks = new Map([
  ["main", "latest"],
  ["crab-beta", "beta"],
  ["crab-development", "development"],
]);

export class MissingOpenClawTagError extends Error {
  constructor(version) {
    super(`OpenClaw GitHub tag v${version} is missing`);
    this.name = "MissingOpenClawTagError";
    this.version = version;
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  await main();
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const track = normalizeTrack(args.track, args.branch);
  let result;
  try {
    result = await resolveOpenClawTrack(track);
  } catch (error) {
    if (args.warnMissingTag && error instanceof MissingOpenClawTagError) {
      console.log(`::warning::OpenClaw npm ${track} resolves to ${error.version}, but GitHub tag v${error.version} is missing; HEAD canary continues.`);
      return;
    }
    throw error;
  }

  if (args.githubOutput) {
    await writeGithubOutput(result);
  }
  if (args.json) {
    process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
    return;
  }

  console.log(`${result.track}: ${result.label}`);
}

function parseArgs(argv) {
  const args = {
    branch: process.env.GITHUB_BASE_REF || process.env.GITHUB_REF_NAME || "",
    githubOutput: false,
    json: false,
    track: process.env.CRABPOT_OPENCLAW_TRACK || "auto",
    warnMissingTag: false,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--branch") {
      args.branch = argv[index + 1];
      index += 1;
      continue;
    }
    if (arg === "--github-output") {
      args.githubOutput = true;
      continue;
    }
    if (arg === "--json") {
      args.json = true;
      continue;
    }
    if (arg === "--track") {
      args.track = argv[index + 1];
      index += 1;
      continue;
    }
    if (arg === "--warn-missing-tag") {
      args.warnMissingTag = true;
    }
  }

  return args;
}

export function normalizeTrack(track = "auto", branch = "") {
  if (track && track !== "auto") {
    return assertTrack(track);
  }
  return branchTracks.get(branch) ?? "latest";
}

export async function resolveOpenClawTrack(track) {
  const normalized = assertTrack(track);
  if (normalized === "development") {
    const sha = await lsRemote("refs/heads/main");
    const version = await fetchPackageVersionAtRef("main");
    return {
      branch: "crab-development",
      label: `openclaw/openclaw@main (${version}, ${shortSha(sha)})`,
      ref: sha,
      repository: openclawRepository,
      sha,
      source: "github-main",
      track: normalized,
      version,
    };
  }

  const version = await npmDistTag(normalized);
  const sha = await tagSha(version);
  return {
    branch: normalized === "latest" ? "main" : "crab-beta",
    label: `openclaw@${normalized} (${version}, ${shortSha(sha)})`,
    ref: `v${version}`,
    repository: openclawRepository,
    sha,
    source: `npm-${normalized}`,
    track: normalized,
    version,
  };
}

function assertTrack(track) {
  if (!["latest", "beta", "development"].includes(track)) {
    throw new Error(`unknown OpenClaw track: ${track}`);
  }
  return track;
}

async function npmDistTag(tag) {
  const timeout = configuredTimeoutMs("CRABPOT_FETCH_TIMEOUT_MS", defaultFetchTimeoutMs);
  const response = await fetchWithTimeout("https://registry.npmjs.org/openclaw", timeout, "could not read openclaw npm metadata");
  if (!response.ok) {
    throw new Error(`could not read openclaw npm metadata: ${response.status}`);
  }
  const metadata = await response.json();
  const value = metadata?.["dist-tags"]?.[tag];
  if (!value || typeof value !== "string") {
    throw new Error(`npm dist-tag ${tag} did not resolve to an OpenClaw version`);
  }
  return value;
}

async function tagSha(version) {
  const peeled = await optionalLsRemote(`refs/tags/v${version}^{}`);
  if (peeled) {
    return peeled;
  }
  const direct = await optionalLsRemote(`refs/tags/v${version}`);
  if (direct) {
    return direct;
  }
  throw new MissingOpenClawTagError(version);
}

async function optionalLsRemote(ref) {
  try {
    return await lsRemote(ref);
  } catch (error) {
    if (isTimeoutError(error)) {
      throw error;
    }
    return "";
  }
}

async function lsRemote(ref) {
  const timeout = configuredTimeoutMs("CRABPOT_GIT_TIMEOUT_MS", defaultGitTimeoutMs);
  let stdout;
  try {
    ({ stdout } = await execFile("git", ["ls-remote", openclawGitUrl, ref], { timeout }));
  } catch (error) {
    if (error?.code === "ETIMEDOUT" || error?.killed) {
      throw new Error(`git ls-remote timed out after ${timeout}ms`);
    }
    throw error;
  }
  const sha = stdout.trim().split(/\s+/)[0] ?? "";
  if (!/^[0-9a-f]{40}$/.test(sha)) {
    throw new Error(`could not resolve ${openclawGitUrl} ${ref}`);
  }
  return sha;
}

async function fetchPackageVersionAtRef(ref) {
  const url = `https://raw.githubusercontent.com/${openclawRepository}/${encodeURIComponent(ref)}/package.json`;
  const timeout = configuredTimeoutMs("CRABPOT_FETCH_TIMEOUT_MS", defaultFetchTimeoutMs);
  const response = await fetchWithTimeout(url, timeout, `could not read OpenClaw package.json for ${ref}`);
  if (!response.ok) {
    throw new Error(`could not read OpenClaw package.json for ${ref}: ${response.status}`);
  }
  const pkg = await response.json();
  if (!pkg.version || typeof pkg.version !== "string") {
    throw new Error(`OpenClaw package.json for ${ref} has no string version`);
  }
  return pkg.version;
}

function shortSha(sha) {
  return sha.slice(0, 12);
}

async function fetchWithTimeout(url, timeout, label) {
  try {
    return await fetch(url, { signal: AbortSignal.timeout(timeout) });
  } catch (error) {
    if (error?.name === "TimeoutError" || error?.name === "AbortError") {
      throw new Error(`${label}: timed out after ${timeout}ms`);
    }
    throw error;
  }
}

function isTimeoutError(error) {
  return error?.code === "ETIMEDOUT" || /timed out after \d+ms/.test(error?.message ?? "");
}

function configuredTimeoutMs(envName, fallback) {
  const raw = process.env[envName];
  if (!raw) {
    return fallback;
  }
  const parsed = Number.parseInt(raw, 10);
  if (!Number.isInteger(parsed) || parsed <= 0) {
    throw new Error(`${envName} must be a positive integer timeout in milliseconds`);
  }
  return parsed;
}

async function writeGithubOutput(result) {
  const output = `${Object.entries(result).map(([key, value]) => `${key}=${value}`).join("\n")}\n`;
  if (process.env.GITHUB_OUTPUT) {
    await appendFile(process.env.GITHUB_OUTPUT, output, "utf8");
    return;
  }
  process.stdout.write(output);
}
