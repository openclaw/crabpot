import assert from "node:assert/strict";
import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";

import {
  findNearbySourcePackageCandidates,
  formatMissingSourcePackageMessage,
} from "../scripts/source-package-candidates.mjs";

test("source package candidates put an exact package-name move first", async (context) => {
  const sourceRoot = await mkdtemp(path.join(os.tmpdir(), "crabpot-source-candidates-"));
  context.after(() => rm(sourceRoot, { recursive: true, force: true }));

  await writePackage(sourceRoot, "extensions/qq-helper", "@openclaw/qq-helper");
  await writePackage(sourceRoot, "packages/channels/qqbot", "@openclaw/qqbot");
  await writePackage(sourceRoot, "extensions/qwen", "@openclaw/qwen");

  const candidates = await findNearbySourcePackageCandidates({
    expectedPackageName: "@openclaw/qqbot",
    missingSourcePath: "extensions/qqbot",
    sourceRoot,
  });

  assert.deepEqual(candidates[0], {
    packageName: "@openclaw/qqbot",
    relativePath: path.join("packages", "channels", "qqbot", "package.json"),
  });
  assert.equal(candidates.length, 3);
});

test("source package candidates ignore dependencies and malformed package metadata", async (context) => {
  const sourceRoot = await mkdtemp(path.join(os.tmpdir(), "crabpot-source-candidates-"));
  context.after(() => rm(sourceRoot, { recursive: true, force: true }));

  await writePackage(sourceRoot, "node_modules/qqbot", "@openclaw/qqbot");
  await mkdir(path.join(sourceRoot, "extensions", "qqbot-next"), { recursive: true });
  await writeFile(path.join(sourceRoot, "extensions", "qqbot-next", "package.json"), "not json");

  const candidates = await findNearbySourcePackageCandidates({
    expectedPackageName: "@openclaw/qqbot",
    missingSourcePath: "extensions/qqbot",
    sourceRoot,
  });

  assert.deepEqual(candidates, [
    { packageName: "", relativePath: path.join("extensions", "qqbot-next", "package.json") },
  ]);
});

test("missing source package message identifies candidate paths and the manifest repair", () => {
  const message = formatMissingSourcePackageMessage({
    candidates: [
      {
        packageName: "@openclaw/qqbot",
        relativePath: "packages/channels/qqbot/package.json",
      },
    ],
    fixtureId: "openclaw-qqbot",
    packageJsonPath: "openclaw/extensions/qqbot/package.json",
  });

  assert.match(message, /openclaw-qqbot: missing source package\.json/);
  assert.match(message, /packages\/channels\/qqbot\/package\.json \(@openclaw\/qqbot\)/);
  assert.match(message, /Update source\.path in crabpot\.config\.json/);
});

async function writePackage(sourceRoot, sourcePath, packageName) {
  const directory = path.join(sourceRoot, sourcePath);
  await mkdir(directory, { recursive: true });
  await writeFile(path.join(directory, "package.json"), JSON.stringify({ name: packageName }));
}
