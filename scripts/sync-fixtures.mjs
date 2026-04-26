#!/usr/bin/env node
import { existsSync } from "node:fs";
import { mkdir, mkdtemp, readFile, readdir, rm } from "node:fs/promises";
import os from "node:os";
import { spawnSync } from "node:child_process";
import path from "node:path";
import { fixtureSourceRoot, readManifest, repoRoot } from "./manifest-lib.mjs";

const args = new Set(process.argv.slice(2));
const materialize = args.has("--materialize");
const check = args.has("--check") || !materialize;

const manifest = await readManifest();

if (check) {
  await checkGitmodules(manifest);
  await checkNpmFixtureShims(manifest);
  console.log(`crabpot: manifest ok (${manifest.fixtures.length} fixtures)`);
  process.exit(0);
}

for (const fixture of manifest.fixtures) {
  const target = path.join(repoRoot, fixture.path);
  if (fixture.package) {
    await materializeNpmFixture(fixture, target);
    continue;
  }

  if (existsSync(target)) {
    if (await hasEntries(target)) {
      continue;
    }
    run("git", ["-c", "safe.directory=*", "submodule", "update", "--init", "--recursive", fixture.path]);
    continue;
  }

  run("git", ["-c", "safe.directory=*", "submodule", "add", "--depth", "1", fixture.repo, fixture.path]);
}

console.log("crabpot: fixtures materialized. review .gitmodules and commit pinned revisions.");

async function checkGitmodules(manifest) {
  const gitmodulesPath = path.join(repoRoot, ".gitmodules");
  if (!existsSync(gitmodulesPath)) {
    return;
  }

  const gitmodules = await readFile(gitmodulesPath, "utf8");
  const missing = [];
  for (const fixture of manifest.fixtures.filter((item) => item.repo)) {
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

async function checkNpmFixtureShims(manifest) {
  const errors = [];
  for (const fixture of manifest.fixtures.filter((item) => item.package)) {
    try {
      await readNpmFixtureDependency(fixture);
    } catch (error) {
      errors.push(error.message);
    }
  }
  if (errors.length > 0) {
    throw new Error(`npm fixture shims are invalid:\n${errors.join("\n")}`);
  }
}

async function materializeNpmFixture(fixture, target) {
  const dependency = await readNpmFixtureDependency(fixture);
  const spec = `${dependency.name}@${dependency.version}`;
  const tempDir = await mkdtemp(path.join(os.tmpdir(), "crabpot-npm-fixture-"));
  const payloadDir = fixtureSourceRoot(fixture);
  try {
    const pack = spawnSync("npm", ["pack", spec, "--pack-destination", tempDir, "--json"], {
      cwd: repoRoot,
      encoding: "utf8",
      env: process.env,
      shell: process.platform === "win32",
    });
    if (pack.status !== 0) {
      process.stderr.write(pack.stderr ?? "");
      const detail = pack.error ? `: ${pack.error.message}` : "";
      throw new Error(`npm pack ${spec} failed with ${pack.status}${detail}`);
    }
    const packed = JSON.parse(pack.stdout)[0];
    if (!packed?.filename) {
      throw new Error(`npm pack ${spec} did not return a tarball filename`);
    }

    await mkdir(target, { recursive: true });
    await rm(payloadDir, { recursive: true, force: true });
    await mkdir(payloadDir, { recursive: true });
    run("tar", ["-xzf", path.join(tempDir, packed.filename), "-C", payloadDir, "--strip-components", "1"]);
  } finally {
    await rm(tempDir, { recursive: true, force: true });
  }
}

async function readNpmFixtureDependency(fixture) {
  const shimPath = path.join(repoRoot, fixture.path, "package.json");
  if (!existsSync(shimPath)) {
    throw new Error(`${fixture.id}: missing npm shim ${path.relative(repoRoot, shimPath)}`);
  }
  const packageJson = JSON.parse(await readFile(shimPath, "utf8"));
  const declared =
    packageJson.dependencies?.[fixture.package.name] ??
    packageJson.devDependencies?.[fixture.package.name] ??
    packageJson.optionalDependencies?.[fixture.package.name];
  if (typeof declared !== "string") {
    throw new Error(`${fixture.id}: shim does not depend on ${fixture.package.name}`);
  }
  if (!/^\d+\.\d+\.\d+/.test(declared)) {
    throw new Error(`${fixture.id}: ${fixture.package.name} must use an exact semver pin, got ${declared}`);
  }
  return {
    name: fixture.package.name,
    version: declared,
  };
}

async function hasEntries(target) {
  try {
    return (await readdir(target)).length > 0;
  } catch {
    return false;
  }
}

function run(command, args) {
  const result = spawnSync(command, args, {
    cwd: repoRoot,
    stdio: "inherit",
    env: process.env,
  });

  if (result.status !== 0) {
    const detail = result.error ? `: ${result.error.message}` : "";
    throw new Error(`${command} ${args.join(" ")} failed with ${result.status}${detail}`);
  }
}
