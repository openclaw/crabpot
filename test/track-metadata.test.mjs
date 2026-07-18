import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdtemp, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { test } from "node:test";
import { normalizeTrack } from "../scripts/resolve-openclaw-track.mjs";
import { applyTrackMetadata, renderTrackMetadata, resolveDefaultPinMetadata } from "../scripts/update-track-metadata.mjs";

const tracks = [
  {
    branch: "main",
    label: "openclaw@latest (2026.4.26, be8c24633aaa)",
    sha: "be8c24633aaa7ef0425ae1178f096ee8dd6226c0",
    source: "npm-latest",
    track: "latest",
    version: "2026.4.26",
  },
  {
    branch: "crab-beta",
    label: "openclaw@beta (2026.4.26, be8c24633aaa)",
    sha: "be8c24633aaa7ef0425ae1178f096ee8dd6226c0",
    source: "npm-beta",
    track: "beta",
    version: "2026.4.26",
  },
  {
    branch: "crab-development",
    label: "openclaw/openclaw@main (2026.4.27, 212a32648fe7)",
    sha: "212a32648fe70e9f8088d8145736a0e31e6ba0b3",
    source: "github-main",
    track: "development",
    version: "2026.4.27",
  },
];

test("openclaw track resolver maps crabpot branches to tracks", () => {
  assert.equal(normalizeTrack("auto", "main"), "latest");
  assert.equal(normalizeTrack("auto", "crab-beta"), "beta");
  assert.equal(normalizeTrack("auto", "crab-development"), "development");
  assert.equal(normalizeTrack("beta", "main"), "beta");
  assert.equal(normalizeTrack("auto", "feature"), "latest");
  assert.throws(() => normalizeTrack("nightly", "main"), /unknown OpenClaw track/);
});

test("track metadata renders GitHub branch switches with resolved version and sha", () => {
  const markdown = renderTrackMetadata(tracks, {
    branch: "crab-development",
    runUrl: "https://github.com/openclaw/crabpot/actions/runs/12345",
  });

  assert.match(markdown, /Source:\*\* `github-main`/);
  assert.match(markdown, /OpenClaw version:\*\* `2026\.4\.27`/);
  assert.match(markdown, /OpenClaw SHA:\*\* `212a32648fe7`/);
  assert.match(markdown, /Dashboard target:\*\* `openclaw\/openclaw@main \+ source-packed @openclaw\/\*`/);
  assert.match(markdown, /Plugin artifacts:\*\* `source-packed from OpenClaw checkout`/);
  assert.match(markdown, /GitHub report run:\*\* \[12345\]\(https:\/\/github\.com\/openclaw\/crabpot\/actions\/runs\/12345\)/);
});

test("track metadata inserts before dashboard summary and replaces stale block", () => {
  const original = "# crabpot\n\nintro\n\n<!-- crabpot-summary:start -->\nold summary\n<!-- crabpot-summary:end -->\n";
  const inserted = applyTrackMetadata(original, "## Tracks\n\ncontent");
  const replaced = applyTrackMetadata(inserted, "## Tracks\n\nnew content");

  assert.match(inserted, /<!-- crabpot-tracks:start -->/);
  assert.match(inserted, /content/);
  assert.doesNotMatch(replaced, /\ncontent\n/);
  assert.match(replaced, /new content/);
  assert.match(replaced, /<!-- crabpot-summary:start -->/);
});

test("pinned Default Track metadata names the immutable dashboard target", () => {
  const markdown = renderTrackMetadata([
    {
      branch: "main",
      label: "openclaw/openclaw@e3eb1121adfb",
      ref: "e3eb1121adfb3eef87200d2964f01396e2b6acbc",
      repository: "openclaw/openclaw",
      sha: "e3eb1121adfb3eef87200d2964f01396e2b6acbc",
      source: "github-default-pin",
      track: "latest",
      version: "2026.7.2",
    },
  ], { branch: "main" });

  assert.match(markdown, /Source:\*\* `github-default-pin`/);
  assert.match(markdown, /Dashboard target:\*\* `openclaw\/openclaw@e3eb1121adfb \+ npm latest plugin artifacts`/);
});

test("pinned metadata is derived from the exact local checkout", async () => {
  const root = await mkdtemp(path.join(os.tmpdir(), "crabpot-pin-metadata-"));
  try {
    const openclawPath = path.join(root, "openclaw");
    const pinPath = path.join(root, "pin.json");
    execFileSync("git", ["init", "-q", openclawPath]);
    await writeFile(path.join(openclawPath, "package.json"), '{"version":"2026.7.2"}\n', "utf8");
    execFileSync("git", ["-C", openclawPath, "add", "package.json"]);
    execFileSync("git", [
      "-C", openclawPath,
      "-c", "user.name=Crabpot Test",
      "-c", "user.email=crabpot@example.invalid",
      "commit", "-q", "-m", "fixture",
    ]);
    const sha = execFileSync("git", ["-C", openclawPath, "rev-parse", "HEAD"], { encoding: "utf8" }).trim();
    await writeFile(pinPath, `${JSON.stringify({ repository: "openclaw/openclaw", sha, pinnedAt: "2026-07-18" })}\n`, "utf8");

    const metadata = await resolveDefaultPinMetadata(openclawPath, { pinPath });
    assert.equal(metadata.sha, sha);
    assert.equal(metadata.version, "2026.7.2");
    assert.equal(metadata.source, "github-default-pin");
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});
