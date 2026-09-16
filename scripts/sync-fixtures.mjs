#!/usr/bin/env node
import { existsSync, rmSync } from "node:fs";
import { lstat, mkdir, mkdtemp, readFile, readdir, realpath, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import { spawnSync } from "node:child_process";
import path from "node:path";
import { fixtureCheckoutPath, fixtureSourceRoot, readConfiguredManifest, repoRoot } from "./manifest-lib.mjs";
import {
  parseNpmPackResult,
  parseNpmViewResult,
  resolveNpmViewVersion,
} from "./npm-pack-result.mjs";
import { writePackageAvailabilityReport } from "./package-availability.mjs";

const openclawSourceRepo = "https://github.com/openclaw/openclaw.git";
const sourcePackPluginTrack = "source-pack";
const defaultNpmTimeoutMs = 2 * 60 * 1000;
const defaultGitTimeoutMs = 2 * 60 * 1000;

const args = parseArgs(process.argv.slice(2));
const materialize = args.materialize;
const check = args.check || !materialize;

const manifest = await readConfiguredManifest({ fixtureSet: args.fixtureSet });
const packageAvailabilityFailures = [];

if (check) {
  await checkGitmodules(manifest);
  await checkNpmFixtureShims(manifest);
  console.log(`crabpot: manifest ok (${manifest.fixtures.length} fixtures)`);
  process.exit(0);
}

const materializationRoot = await realpath(repoRoot);
// Anchor at the repo, not realpath(plugins): a linked plugins directory is itself unsafe.
for (const fixture of manifest.fixtures) {
  await assertFixtureDestination(fixture);
}

for (const fixture of manifest.fixtures) {
  await assertFixtureDestination(fixture);
  const target = fixtureCheckoutPath(fixture);
  if (fixture.package) {
    if (shouldMaterializeSourcePack(fixture, args.pluginTrack)) {
      await materializeSourcePackFixture(fixture);
    } else {
      await materializeNpmFixture(fixture);
    }
    continue;
  }

  if (existsSync(target)) {
    if (await hasEntries(target)) {
      continue;
    }
    await assertFixtureDestination(fixture);
    run("git", ["-c", "safe.directory=*", "submodule", "update", "--init", "--recursive", fixture.path]);
    continue;
  }

  await assertFixtureDestination(fixture);
  run("git", ["-c", "safe.directory=*", "submodule", "add", "--depth", "1", fixture.repo, fixture.path]);
}

if (args.packageAvailabilityReport) {
  await writePackageAvailabilityReport({
    generatedAt: new Date().toISOString(),
    fixtureSet: manifest.fixtureSelection?.fixtureSet ?? "all",
    pluginTrack: args.pluginTrack || "manifest",
    failures: packageAvailabilityFailures,
  });
}

if (packageAvailabilityFailures.some((failure) => failure.reason === "npm-pack-failed")) {
  throw new Error("npm fixture acquisition failed; see npm pack errors above");
}
console.log("crabpot: fixtures materialized. review .gitmodules and commit pinned revisions.");

async function assertFixtureDestination(fixture, metadata = false) {
  const components = path.relative(repoRoot, fixtureSourceRoot(fixture)).split(path.sep);
  if (metadata) {
    components.push(".crabpot-source.json");
  }
  let current = materializationRoot;
  for (const [index, component] of components.entries()) {
    current = path.join(current, component);
    let stat;
    try {
      stat = await lstat(current);
    } catch (error) {
      if (error.code === "ENOENT") {
        return;
      }
      throw error;
    }
    const relative = path.relative(materializationRoot, current);
    if (stat.isSymbolicLink()) {
      throw new Error(`${fixture.id}: destination contains a symlink: ${relative}`);
    }
    if (metadata && index === components.length - 1) {
      if (!stat.isFile()) {
        throw new Error(`${fixture.id}: metadata destination is not a regular file: ${relative}`);
      }
    } else if (!stat.isDirectory()) {
      throw new Error(`${fixture.id}: destination component is not a directory: ${relative}`);
    }
  }
}

async function prepareFixturePayload(fixture) {
  const payloadDir = fixtureSourceRoot(fixture);
  await assertFixtureDestination(fixture);
  await mkdir(fixtureCheckoutPath(fixture), { recursive: true });
  await assertFixtureDestination(fixture);
  await rm(payloadDir, { recursive: true, force: true });
  await assertFixtureDestination(fixture);
  await mkdir(payloadDir, { recursive: true });
  await assertFixtureDestination(fixture);
  return payloadDir;
}

async function checkGitmodules(manifest) {
  const fixtures = manifest.fixtures.filter((fixture) => fixture.repo);
  if (fixtures.length === 0) {
    return;
  }
  const gitmodulesPath = path.join(repoRoot, ".gitmodules");
  if (!existsSync(gitmodulesPath)) {
    throw new Error(".gitmodules is missing for repo-backed fixtures");
  }

  const result = spawnSync("git", [
    "config", "--file", gitmodulesPath, "--no-includes", "--null", "--get-regexp", "^submodule\\..*\\.(path|url)$",
  ], {
    cwd: repoRoot,
    encoding: "utf8",
    timeout: configuredTimeoutMs("CRABPOT_GIT_TIMEOUT_MS", defaultGitTimeoutMs),
  });
  // Exit 1 means no matching keys; other failures must not become an empty config.
  if (result.error || (result.status !== 0 && result.status !== 1)) {
    throw new Error(`failed to read .gitmodules: ${result.error?.message ?? result.stderr.trim()}`);
  }
  const submodules = new Map();
  for (const record of result.stdout.split("\0").filter(Boolean)) {
    const separator = record.indexOf("\n");
    const [, name, key] = record.slice(0, separator).match(/^submodule\.(.*)\.(path|url)$/);
    const entry = submodules.get(name) ?? { path: [], url: [] };
    entry[key].push(record.slice(separator + 1));
    submodules.set(name, entry);
  }

  const errors = [];
  for (const fixture of fixtures) {
    const matches = [...submodules.values()].filter((entry) => entry.path.includes(fixture.path));
    if (matches.length !== 1 || matches[0].path.length !== 1 || matches[0].url.length !== 1 || matches[0].url[0] !== fixture.repo) {
      errors.push(`${fixture.id}: .gitmodules must map ${fixture.path} to ${fixture.repo} exactly once`);
    }
  }

  if (errors.length > 0) {
    throw new Error(errors.join("\n"));
  }
}

async function checkNpmFixtureShims(manifest) {
  const errors = [];
  for (const fixture of manifest.fixtures.filter((item) => item.package)) {
    if (packageArtifactSource(fixture) === sourcePackPluginTrack) {
      continue;
    }
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

async function materializeNpmFixture(fixture) {
  const dependency = await resolveNpmFixtureDependencyWithFallback(fixture, {
    pluginTrack: args.pluginTrack,
  });
  const spec = `${dependency.name}@${dependency.version}`;
  const tempDir = await mkdtemp(path.join(os.tmpdir(), "crabpot-npm-fixture-"));
  try {
    const pack = npmSpawnSync(["pack", spec, "--pack-destination", tempDir, "--json"]);
    if (pack.status !== 0) {
      process.stderr.write(pack.stderr ?? "");
      const detail = pack.error ? `: ${pack.error.message}` : "";
      recordPackageAvailabilityFailure(fixture, {
        fallbackVersion: dependency.fallbackVersion,
        message: `npm pack ${spec} failed with ${pack.status}${detail}`,
        requestedTag: dependency.requestedTag,
        requestedVersion: dependency.version,
        reason: "npm-pack-failed",
      });
      return;
    }
    const packed = parseNpmPackResult(pack.stdout);
    if (!packed?.filename) {
      throw new Error(`npm pack ${spec} did not return a tarball filename`);
    }

    const payloadDir = await prepareFixturePayload(fixture);
    extractPackageTarball(path.join(tempDir, packed.filename), payloadDir);
    await writePackageSourceMetadata(fixture, {
      gitHead: packed.gitHead || (await npmPackageGitHead(dependency.name, dependency.version)),
      name: dependency.name,
      tag: dependency.tag ?? "",
      version: dependency.version,
    });
  } finally {
    await rm(tempDir, { recursive: true, force: true });
  }
}

async function materializeSourcePackFixture(fixture) {
  const openclawRoot = resolveOpenClawSourceRoot();
  const sourceDir = path.resolve(openclawRoot, fixture.source.path);
  if (!sourceDir.startsWith(`${openclawRoot}${path.sep}`)) {
    throw new Error(`${fixture.id}: source path escapes OpenClaw checkout: ${fixture.source.path}`);
  }

  const packageJsonPath = path.join(sourceDir, "package.json");
  if (!existsSync(packageJsonPath)) {
    throw new Error(`${fixture.id}: missing source package.json at ${path.relative(repoRoot, packageJsonPath)}`);
  }
  const packageJson = JSON.parse(await readFile(packageJsonPath, "utf8"));
  if (packageJson.name !== fixture.package.name) {
    throw new Error(`${fixture.id}: source package name ${packageJson.name} does not match ${fixture.package.name}`);
  }
  if (typeof packageJson.version !== "string" || packageJson.version.length === 0) {
    throw new Error(`${fixture.id}: source package ${fixture.package.name} has no version`);
  }

  const tempDir = await mkdtemp(path.join(os.tmpdir(), "crabpot-source-pack-fixture-"));
  const sourceHead = gitHead(openclawRoot);
  try {
    const pack = npmSpawnSync(["pack", sourceDir, "--pack-destination", tempDir, "--json"]);
    if (pack.status !== 0) {
      process.stderr.write(pack.stderr ?? "");
      const detail = pack.error ? `: ${pack.error.message}` : "";
      throw new Error(`npm pack ${sourceDir} failed with ${pack.status}${detail}`);
    }
    const packed = parseNpmPackResult(pack.stdout);
    if (!packed?.filename) {
      throw new Error(`npm pack ${sourceDir} did not return a tarball filename`);
    }

    const payloadDir = await prepareFixturePayload(fixture);
    extractPackageTarball(path.join(tempDir, packed.filename), payloadDir);
    await writePackageSourceMetadata(fixture, {
      gitHead: sourceHead || fixture.source.ref,
      name: fixture.package.name,
      sourceMode: sourcePackPluginTrack,
      sourcePath: fixture.source.path,
      sourceRef: sourceHead || fixture.source.ref,
      sourceRepo: fixture.source.repo,
      tag: sourcePackPluginTrack,
      version: packageJson.version,
    });
  } finally {
    await rm(tempDir, { recursive: true, force: true });
  }
}

async function resolveNpmFixtureDependency(fixture, options = {}) {
  const declared = await readNpmFixtureDependency(fixture);
  const tag = selectedPackageTag(fixture, options.pluginTrack);
  if (!tag) {
    return declared;
  }
  return {
    name: fixture.package.name,
    version: await npmDistTag(fixture.package.name, tag),
    tag,
  };
}

async function resolveNpmFixtureDependencyWithFallback(fixture, options = {}) {
  try {
    return await resolveNpmFixtureDependency(fixture, options);
  } catch (error) {
    const declared = await readNpmFixtureDependency(fixture);
    const requestedTag = selectedPackageTag(fixture, options.pluginTrack);
    recordPackageAvailabilityFailure(fixture, {
      fallbackVersion: declared.version,
      message: error.message,
      requestedTag,
      requestedVersion: declared.version,
      reason: "npm-dist-tag-missing",
    });
    console.warn(
      `crabpot: ${fixture.id} ${fixture.package.name}@${requestedTag} unavailable; falling back to pinned ${declared.version}`,
    );
    return {
      ...declared,
      fallbackVersion: declared.version,
      requestedTag,
      tag: "",
    };
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

function shouldMaterializeSourcePack(fixture, pluginTrack) {
  const artifactSource = packageArtifactSource(fixture);
  if (
    artifactSource !== sourcePackPluginTrack &&
    (pluginTrack !== sourcePackPluginTrack || !isOpenClawPackage(fixture.package.name))
  ) {
    return false;
  }
  if (!fixture.source) {
    throw new Error(`${fixture.id}: source-pack requires source metadata`);
  }
  if (fixture.source.repo !== openclawSourceRepo) {
    throw new Error(`${fixture.id}: source-pack only supports ${openclawSourceRepo}`);
  }
  return true;
}

function selectedPackageTag(fixture, pluginTrack) {
  if (
    packageArtifactSource(fixture) === sourcePackPluginTrack ||
    (pluginTrack === sourcePackPluginTrack && isOpenClawPackage(fixture.package.name))
  ) {
    return "";
  }
  if (pluginTrack && pluginTrack !== "manifest" && isOpenClawPackage(fixture.package.name)) {
    return pluginTrack;
  }
  if (fixture.package.version) {
    return "";
  }
  return fixture.package.tag ?? "";
}

function isOpenClawPackage(name) {
  return /^@openclaw\//.test(name);
}

function packageArtifactSource(fixture) {
  return fixture.package?.artifactSource ?? "npm";
}

async function npmDistTag(name, tag) {
  const result = npmSpawnSync(["view", name, "dist-tags", "version", "--json"]);
  if (result.status !== 0) {
    const detail = spawnFailureDetail(result);
    throw new Error(`${name}: npm dist-tag ${tag} could not be resolved${detail}`);
  }
  const metadata = parseNpmViewResult(result.stdout || "{}") ?? {};
  const version = resolveNpmViewVersion(metadata, tag);
  if (!version) {
    throw new Error(`${name}: npm dist-tag ${tag} resolved to invalid version ${JSON.stringify(version)}`);
  }
  return version;
}

function recordPackageAvailabilityFailure(fixture, failure) {
  packageAvailabilityFailures.push({
    fixture: fixture.id,
    packageName: fixture.package.name,
    requestedTag: failure.requestedTag || null,
    requestedVersion: failure.requestedVersion || null,
    fallbackVersion: failure.fallbackVersion || null,
    openclawPackage: isOpenClawPackage(fixture.package.name),
    artifactSource: packageArtifactSource(fixture),
    reason: failure.reason,
    message: failure.message,
    path: fixture.path,
  });
}

async function npmPackageGitHead(name, version) {
  const result = npmSpawnSync(["view", `${name}@${version}`, "gitHead", "--json"]);
  if (result.status !== 0 || !result.stdout.trim()) {
    return "";
  }
  const gitHead = parseNpmViewResult(result.stdout);
  return /^[0-9a-f]{40}$/i.test(gitHead ?? "") ? gitHead : "";
}

async function writePackageSourceMetadata(fixture, metadata) {
  const metadataPath = path.join(fixtureSourceRoot(fixture), ".crabpot-source.json");
  await assertFixtureDestination(fixture, true);
  // Replace archive metadata without writing through an existing file's hard links.
  await rm(metadataPath, { force: true });
  await assertFixtureDestination(fixture, true);
  await writeFile(
    metadataPath,
    `${JSON.stringify(
      {
        gitHead: metadata.gitHead || null,
        name: metadata.name,
        sourceMode: metadata.sourceMode || "npm",
        sourcePath: metadata.sourcePath || null,
        sourceRef: metadata.sourceRef || metadata.gitHead || null,
        sourceRepo: metadata.sourceRepo || null,
        tag: metadata.tag || null,
        version: metadata.version,
      },
      null,
      2,
    )}\n`,
    { encoding: "utf8", flag: "wx" },
  );
}

function parseArgs(argv) {
  const parsed = {
    check: false,
    fixtureSet: undefined,
    materialize: false,
    openclawPath: process.env.CRABPOT_TEST_OPENCLAW_PATH || "",
    packageAvailabilityReport: true,
    pluginTrack: process.env.CRABPOT_PLUGIN_TRACK || "",
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--check") {
      parsed.check = true;
      continue;
    }
    if (arg === "--materialize") {
      parsed.materialize = true;
      continue;
    }
    if (arg === "--fixture-set") {
      parsed.fixtureSet = argv[index + 1];
      index += 1;
      continue;
    }
    if (arg === "--plugin-track") {
      parsed.pluginTrack = argv[index + 1];
      index += 1;
      continue;
    }
    if (arg === "--no-package-availability-report") {
      parsed.packageAvailabilityReport = false;
      continue;
    }
    if (arg === "--openclaw") {
      parsed.openclawPath = argv[index + 1];
      index += 1;
    }
  }

  return parsed;
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
    timeout: configuredTimeoutMs("CRABPOT_GIT_TIMEOUT_MS", defaultGitTimeoutMs),
  });

  if (result.status !== 0) {
    const detail = result.error ? `: ${result.error.message}` : "";
    throw new Error(`${command} ${args.join(" ")} failed with ${result.status}${detail}`);
  }
}

function resolveOpenClawSourceRoot() {
  const configuredPath = args.openclawPath || manifest.openclaw?.defaultCheckoutPath || "";
  if (!configuredPath) {
    throw new Error("source-pack requires --openclaw, CRABPOT_TEST_OPENCLAW_PATH, or openclaw.defaultCheckoutPath");
  }

  const root = path.resolve(repoRoot, configuredPath);
  const packageJsonPath = path.join(root, "package.json");
  if (existsSync(packageJsonPath)) {
    return root;
  }
  if (args.openclawPath) {
    throw new Error(`source-pack OpenClaw checkout is missing package.json: ${path.relative(repoRoot, packageJsonPath)}`);
  }
  return materializedOpenClawSourceRoot(root);
}

function materializedOpenClawSourceRoot(missingConfiguredRoot) {
  const cacheRoot = path.join(repoRoot, ".crabpot", "openclaw-source");
  const packageJsonPath = path.join(cacheRoot, "package.json");
  if (!existsSync(packageJsonPath)) {
    rmSync(cacheRoot, { recursive: true, force: true });
    run("git", ["clone", "--depth", "1", "--filter=blob:none", openclawSourceRepo, cacheRoot]);
  } else {
    run("git", ["-C", cacheRoot, "fetch", "--depth", "1", "origin", "main"]);
    run("git", ["-C", cacheRoot, "checkout", "--detach", "FETCH_HEAD"]);
  }
  if (!existsSync(packageJsonPath)) {
    throw new Error(
      `source-pack OpenClaw checkout is missing package.json: ${path.relative(repoRoot, missingConfiguredRoot)} and ${path.relative(repoRoot, cacheRoot)}`,
    );
  }
  return cacheRoot;
}

function extractPackageTarball(tarballPath, payloadDir) {
  const tarArgs = ["-xzf", tarPath(tarballPath), "-C", tarPath(payloadDir), "--strip-components", "1"];
  if (process.platform === "win32") {
    tarArgs.unshift("--force-local");
  }
  run("tar", tarArgs);
}

function gitHead(cwd) {
  const result = spawnSync("git", ["-C", cwd, "rev-parse", "HEAD"], {
    encoding: "utf8",
    env: process.env,
    timeout: configuredTimeoutMs("CRABPOT_GIT_TIMEOUT_MS", defaultGitTimeoutMs),
  });
  const head = result.status === 0 ? result.stdout.trim() : "";
  return /^[0-9a-f]{40}$/i.test(head) ? head : "";
}

function npmSpawnSync(args) {
  return spawnSync("npm", args, {
    cwd: repoRoot,
    encoding: "utf8",
    env: process.env,
    maxBuffer: 16 * 1024 * 1024,
    shell: process.platform === "win32",
    timeout: configuredTimeoutMs("CRABPOT_NPM_TIMEOUT_MS", defaultNpmTimeoutMs),
  });
}

function spawnFailureDetail(result) {
  if (result.error?.code === "ETIMEDOUT") {
    return `: ${result.error.message}`;
  }
  return result.stderr?.trim() ? `: ${result.stderr.trim()}` : "";
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

function tarPath(filePath) {
  if (process.platform !== "win32") {
    return filePath;
  }
  return filePath.replaceAll("\\", "/").replace(/^([A-Za-z]):\//, (_, drive) => `/${drive.toLowerCase()}/`);
}
