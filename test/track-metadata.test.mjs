import assert from "node:assert/strict";
import { test } from "node:test";
import { normalizeTrack } from "../scripts/resolve-openclaw-track.mjs";
import { applyTrackMetadata, renderTrackMetadata } from "../scripts/update-track-metadata.mjs";

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
