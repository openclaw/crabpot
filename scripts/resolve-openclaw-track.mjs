#!/usr/bin/env node
import { execFile as execFileCallback } from "node:child_process";
import { appendFile } from "node:fs/promises";
import { promisify } from "node:util";
import { pathToFileURL } from "node:url";

const execFile = promisify(execFileCallback);

export const openclawRepository = "openclaw/openclaw";
export const openclawGitUrl = "https://github.com/openclaw/openclaw.git";

const branchTracks = new Map([
  ["main", "latest"],
  ["crab-beta", "beta"],
  ["crab-development", "development"],
]);

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  await main();
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const track = normalizeTrack(args.track, args.branch);
  const result = await resolveOpenClawTrack(track);

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
  const { stdout } = await execFile(npmExecutable(), ["view", "openclaw", `dist-tags.${tag}`, "--json"]);
  const value = JSON.parse(stdout);
  if (!value || typeof value !== "string") {
    throw new Error(`npm dist-tag ${tag} did not resolve to an OpenClaw version`);
  }
  return value;
}

export function npmExecutable(platform = process.platform) {
  return platform === "win32" ? "npm.cmd" : "npm";
}

async function tagSha(version) {
  const peeled = await optionalLsRemote(`refs/tags/v${version}^{}`);
  if (peeled) {
    return peeled;
  }
  return lsRemote(`refs/tags/v${version}`);
}

async function optionalLsRemote(ref) {
  try {
    return await lsRemote(ref);
  } catch {
    return "";
  }
}

async function lsRemote(ref) {
  const { stdout } = await execFile("git", ["ls-remote", openclawGitUrl, ref]);
  const sha = stdout.trim().split(/\s+/)[0] ?? "";
  if (!/^[0-9a-f]{40}$/.test(sha)) {
    throw new Error(`could not resolve ${openclawGitUrl} ${ref}`);
  }
  return sha;
}

async function fetchPackageVersionAtRef(ref) {
  const url = `https://raw.githubusercontent.com/${openclawRepository}/${encodeURIComponent(ref)}/package.json`;
  const response = await fetch(url);
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

async function writeGithubOutput(result) {
  const output = `${Object.entries(result).map(([key, value]) => `${key}=${value}`).join("\n")}\n`;
  if (process.env.GITHUB_OUTPUT) {
    await appendFile(process.env.GITHUB_OUTPUT, output, "utf8");
    return;
  }
  process.stdout.write(output);
}
