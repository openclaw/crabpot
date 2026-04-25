#!/usr/bin/env node
import { existsSync } from "node:fs";
import { readFile } from "node:fs/promises";
import { spawnSync } from "node:child_process";
import path from "node:path";
import { readManifest, repoRoot } from "./manifest-lib.mjs";

const args = new Set(process.argv.slice(2));
const materialize = args.has("--materialize");
const check = args.has("--check") || !materialize;

const manifest = await readManifest();

if (check) {
  await checkGitmodules(manifest);
  console.log(`crabpot: manifest ok (${manifest.fixtures.length} fixtures)`);
  process.exit(0);
}

for (const fixture of manifest.fixtures) {
  const target = path.join(repoRoot, fixture.path);
  if (existsSync(target)) {
    run("git", ["submodule", "update", "--init", "--recursive", fixture.path]);
    continue;
  }

  run("git", ["submodule", "add", "--depth", "1", fixture.repo, fixture.path]);
}

console.log("crabpot: fixtures materialized. review .gitmodules and commit pinned revisions.");

async function checkGitmodules(manifest) {
  const gitmodulesPath = path.join(repoRoot, ".gitmodules");
  if (!existsSync(gitmodulesPath)) {
    return;
  }

  const gitmodules = await readFile(gitmodulesPath, "utf8");
  const missing = [];
  for (const fixture of manifest.fixtures) {
    if (!gitmodules.includes(`path = ${fixture.path}`)) {
      missing.push(fixture.path);
    }
    if (!gitmodules.includes(`url = ${fixture.repo}`)) {
      missing.push(fixture.repo);
    }
  }

  if (missing.length > 0) {
    throw new Error(`.gitmodules is missing manifest entries:\n${missing.join("\n")}`);
  }
}

function run(command, args) {
  const result = spawnSync(command, args, {
    cwd: repoRoot,
    stdio: "inherit",
    env: process.env,
  });

  if (result.status !== 0) {
    throw new Error(`${command} ${args.join(" ")} failed with ${result.status}`);
  }
}
