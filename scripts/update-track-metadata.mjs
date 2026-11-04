#!/usr/bin/env node
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { execFileSync } from "node:child_process";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { repoRoot } from "./manifest-lib.mjs";
import { readOpenClawPin } from "./openclaw-pin.mjs";
import {
  normalizeTrack,
  openclawRepository,
  resolveOpenClawTrack,
} from "./resolve-openclaw-track.mjs";

export const trackMetadataStart = "<!-- crabpot-tracks:start -->";
export const trackMetadataEnd = "<!-- crabpot-tracks:end -->";
export const defaultReadmePath = path.join(repoRoot, "README.md");

const trackTargets = {
  beta: "openclaw@beta + @openclaw/*@beta + bundled source fixtures",
  development: "openclaw/openclaw@main + source-packed @openclaw/*",
  latest: "openclaw@latest + @openclaw/*@latest + bundled source fixtures",
};

const pluginArtifacts = {
  beta: "npm beta fixture set plus bundled source-packed fixtures",
  development: "source-packed from OpenClaw checkout",
  latest: "npm latest fixture set plus bundled source-packed fixtures",
};

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  await main();
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const tracks = args.defaultPinOpenClaw
    ? [await resolveDefaultPinMetadata(args.defaultPinOpenClaw)]
    : args.openclaw
      ? [await resolveCheckoutMetadata(args.openclaw, args.track, args.branch)]
      : await resolveTrackMetadata(args.track, args.branch);
  const changed = await updateTrackMetadata({
    branch: args.branch,
    check: args.check,
    readmePath: args.readmePath,
    runUrl: args.runUrl,
    track: args.defaultPinOpenClaw ? "latest" : args.track,
    tracks,
  });

  if (args.json) {
    process.stdout.write(`${JSON.stringify(tracks, null, 2)}\n`);
    return;
  }

  console.log(`track metadata: ${changed ? "changed" : "current"}`);
}

function parseArgs(argv) {
  const args = {
    check: false,
    branch: process.env.GITHUB_REF_NAME || "",
    defaultPinOpenClaw: "",
    json: false,
    openclaw: "",
    readmePath: defaultReadmePath,
    runUrl: process.env.CRABPOT_RUN_URL || "",
    track: "auto",
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--check") {
      args.check = true;
      continue;
    }
    if (arg === "--default-pin-openclaw") {
      args.defaultPinOpenClaw = path.resolve(argv[index + 1]);
      index += 1;
      continue;
    }
    if (arg === "--json") {
      args.json = true;
      continue;
    }
    if (arg === "--openclaw") {
      args.openclaw = path.resolve(argv[index + 1]);
      index += 1;
      continue;
    }
    if (arg === "--readme") {
      args.readmePath = path.resolve(argv[index + 1]);
      index += 1;
      continue;
    }
    if (arg === "--run-url") {
      args.runUrl = argv[index + 1];
      index += 1;
      continue;
    }
    if (arg === "--track") {
      args.track = argv[index + 1];
      index += 1;
      continue;
    }
    if (arg === "--branch") {
      args.branch = argv[index + 1];
      index += 1;
    }
  }

  return args;
}

export async function resolveTrackMetadata(track = "auto", branch = "", resolve = resolveOpenClawTrack) {
  return [await resolve(normalizeTrack(track, branch))];
}

export async function resolveCheckoutMetadata(openclawPath, track = "auto", branch = "") {
  const normalized = normalizeTrack(track, branch);
  const pkg = JSON.parse(await readFile(path.join(openclawPath, "package.json"), "utf8"));
  const sha = execFileSync("git", ["-C", openclawPath, "rev-parse", "HEAD"], { encoding: "utf8" }).trim();
  if (!pkg.version || typeof pkg.version !== "string") {
    throw new Error("OpenClaw checkout has no string package version");
  }
  if (!/^[0-9a-f]{40}$/.test(sha)) {
    throw new Error(`OpenClaw checkout has invalid revision ${sha}`);
  }
  const source = normalized === "development" ? "github-main" : `npm-${normalized}`;
  return {
    branch: normalized === "latest" ? "main" : `crab-${normalized}`,
    label: normalized === "development"
      ? `${openclawRepository}@main (${pkg.version}, ${sha.slice(0, 12)})`
      : `openclaw@${normalized} (${pkg.version}, ${sha.slice(0, 12)})`,
    ref: normalized === "development" ? sha : `v${pkg.version}`,
    repository: openclawRepository,
    sha,
    source,
    track: normalized,
    version: pkg.version,
  };
}

export async function resolveDefaultPinMetadata(openclawPath, options = {}) {
  const pin = await readOpenClawPin(options.pinPath);
  const checkout = await resolveCheckoutMetadata(openclawPath, "latest");
  if (checkout.sha !== pin.sha) {
    throw new Error(`Default Track checkout ${checkout.sha} does not match configured pin ${pin.sha}`);
  }
  return {
    ...checkout,
    label: `${pin.repository}@${pin.sha.slice(0, 12)}`,
    ref: pin.sha,
    repository: pin.repository,
    source: "github-default-pin",
  };
}

export async function updateTrackMetadata({
  branch = "",
  check = false,
  readmePath = defaultReadmePath,
  runUrl = "",
  track = "auto",
  tracks,
}) {
  const current = await readFile(readmePath, "utf8");
  const next = applyTrackMetadata(
    current,
    renderTrackMetadata(tracks, {
      branch: branch || currentBranch(),
      runUrl: runUrl || readTrackRunUrl(current),
      track,
    }),
  );
  const changed = current !== next;
  if (check && changed) {
    throw new Error(`${path.relative(repoRoot, readmePath)} track metadata is stale; run node scripts/update-track-metadata.mjs`);
  }
  if (!check && changed) {
    await mkdir(path.dirname(readmePath), { recursive: true });
    await writeFile(readmePath, next, "utf8");
  }
  return changed;
}

export function applyTrackMetadata(readme, renderedMetadata) {
  const block = `${trackMetadataStart}\n${renderedMetadata}\n${trackMetadataEnd}`;
  const start = readme.indexOf(trackMetadataStart);
  const end = readme.indexOf(trackMetadataEnd);
  if (start !== -1 && end !== -1 && end > start) {
    return `${readme.slice(0, start)}${block}${blockSuffix(readme.slice(end + trackMetadataEnd.length))}`;
  }

  const insertionPoint = readme.indexOf("\n<!-- crabpot-summary:start -->");
  if (insertionPoint !== -1) {
    return `${readme.slice(0, insertionPoint)}\n\n${block}${readme.slice(insertionPoint)}`;
  }

  return `${readme.trimEnd()}\n\n${block}\n`;
}

function blockSuffix(suffix) {
  if (!suffix) {
    return "\n";
  }
  if (suffix.startsWith("\n\n")) {
    return suffix;
  }
  if (suffix.startsWith("\n")) {
    return `\n${suffix}`;
  }
  return `\n\n${suffix}`;
}

export function renderTrackMetadata(tracks, options = {}) {
  const selected = selectTrack(tracks, options);
  const dashboardTarget = selected.source === "github-default-pin"
    ? `${selected.repository}@${selected.sha.slice(0, 12)} + npm latest plugin artifacts`
    : trackTargets[selected.track] ?? selected.label;
  return [
    `- **Source:** \`${selected.source}\``,
    `- **OpenClaw version:** \`${selected.version}\``,
    `- **OpenClaw SHA:** \`${selected.sha.slice(0, 12)}\``,
    `- **Dashboard target:** \`${dashboardTarget}\``,
    `- **Plugin artifacts:** \`${pluginArtifacts[selected.track] ?? "manifest package pins"}\``,
    `- **GitHub report run:** ${formatRunLink(options.runUrl)}`,
  ].join("\n");
}

function selectTrack(tracks, options) {
  const branch = options.branch || currentBranch();
  const normalized = normalizeTrack(options.track ?? "auto", branch);
  const selected = tracks.find((track) => track.track === normalized);
  if (!selected) {
    throw new Error(`missing resolved OpenClaw track metadata for ${normalized}`);
  }
  return selected;
}

function formatRunLink(runUrl) {
  if (!runUrl) {
    return "-";
  }
  const id = runUrl.match(/\/runs\/(\d+)/)?.[1] ?? runUrl;
  return `[${id}](${runUrl})`;
}

function readTrackRunUrl(readme) {
  return readme.match(/^\s*-\s+\*\*GitHub report run:\*\*\s+\[[^\]]+\]\(([^)]+)\)/im)?.[1] ?? "";
}

function currentBranch() {
  if (process.env.GITHUB_REF_NAME) {
    return process.env.GITHUB_REF_NAME;
  }
  try {
    return execFileSync("git", ["branch", "--show-current"], { cwd: repoRoot, encoding: "utf8" }).trim();
  } catch {
    return "main";
  }
}
