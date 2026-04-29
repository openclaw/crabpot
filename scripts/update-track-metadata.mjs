#!/usr/bin/env node
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { repoRoot } from "./manifest-lib.mjs";
import { resolveOpenClawTrack } from "./resolve-openclaw-track.mjs";

export const trackMetadataStart = "<!-- crabpot-tracks:start -->";
export const trackMetadataEnd = "<!-- crabpot-tracks:end -->";
export const defaultReadmePath = path.join(repoRoot, "README.md");

const branchUrls = {
  latest: "https://github.com/openclaw/crabpot/tree/main",
  beta: "https://github.com/openclaw/crabpot/tree/crab-beta",
  development: "https://github.com/openclaw/crabpot/tree/crab-development",
};

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  await main();
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const tracks = await resolveTrackMetadata();
  const changed = await updateTrackMetadata({
    check: args.check,
    readmePath: args.readmePath,
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
    json: false,
    readmePath: defaultReadmePath,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--check") {
      args.check = true;
      continue;
    }
    if (arg === "--json") {
      args.json = true;
      continue;
    }
    if (arg === "--readme") {
      args.readmePath = path.resolve(argv[index + 1]);
      index += 1;
    }
  }

  return args;
}

export async function resolveTrackMetadata() {
  const [latest, beta, development] = await Promise.all([
    resolveOpenClawTrack("latest"),
    resolveOpenClawTrack("beta"),
    resolveOpenClawTrack("development"),
  ]);
  return [latest, beta, development];
}

export async function updateTrackMetadata({ check = false, readmePath = defaultReadmePath, tracks }) {
  const current = await readFile(readmePath, "utf8");
  const next = applyTrackMetadata(current, renderTrackMetadata(tracks));
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
    return `${readme.slice(0, start)}${block}${readme.slice(end + trackMetadataEnd.length)}`;
  }

  const insertionPoint = readme.indexOf("\n<!-- crabpot-summary:start -->");
  if (insertionPoint !== -1) {
    return `${readme.slice(0, insertionPoint)}\n\n${block}${readme.slice(insertionPoint)}`;
  }

  return `${readme.trimEnd()}\n\n${block}\n`;
}

export function renderTrackMetadata(tracks) {
  const table = markdownTable(
    tracks.map((track) => [
      trackName(track.track),
      `[${track.branch}](${branchUrls[track.track]})`,
      track.source,
      track.version,
      `\`${track.sha}\``,
      track.label,
    ]),
    ["Track", "Branch", "Source", "OpenClaw version", "OpenClaw SHA", "Dashboard target"],
  );

  return [
    "## Tracks",
    "",
    "Use these branches to switch the dashboard and generated reports between OpenClaw release tracks.",
    "",
    table,
    "",
    "`main` follows the latest published npm package. `crab-beta` follows the beta npm dist-tag. `crab-development` follows the latest `openclaw/openclaw` main commit.",
  ].join("\n");
}

function trackName(track) {
  const names = {
    beta: "Beta",
    development: "Development",
    latest: "Latest published",
  };
  return names[track] ?? track;
}

function markdownTable(rows, headers) {
  const escapedRows = rows.map((row) => row.map((cell) => escapeCell(cell ?? "-")));
  const allRows = [headers, ...escapedRows];
  const widths = headers.map((_, columnIndex) => Math.max(...allRows.map((row) => row[columnIndex].length)));
  const renderRow = (row) => `| ${row.map((cell, index) => cell.padEnd(widths[index])).join(" | ")} |`;
  return [
    renderRow(headers),
    renderRow(widths.map((width) => "-".repeat(width))),
    ...escapedRows.map((row) => renderRow(row)),
  ].join("\n");
}

function escapeCell(value) {
  return String(value).replaceAll("|", "\\|").replaceAll("\n", " ");
}
