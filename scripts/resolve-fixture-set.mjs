#!/usr/bin/env node
import { readFile } from "node:fs/promises";
import { spawnSync } from "node:child_process";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { defaultCiPolicyPath } from "./check-ci-policy.mjs";
import { readManifest, repoRoot } from "./manifest-lib.mjs";
import { buildWorkspacePlan } from "./workspace-plan.mjs";

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  await main();
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const resolved = await resolveFixtureSet({
    allowEmpty: args.allowEmpty,
    fixtureSet: args.fixtureSet,
    openclawPath: args.openclawPath,
    policyPath: args.policyPath,
    baseRef: args.baseRef,
    headRef: args.headRef,
  });

  if (args.githubOutput) {
    console.log(`matrix=${JSON.stringify({ include: resolved.fixtures })}`);
    console.log(`count=${resolved.fixtures.length}`);
    console.log(`fixtures=${resolved.fixtures.map((fixture) => fixture.id).join(",")}`);
    return;
  }

  if (args.json) {
    process.stdout.write(`${JSON.stringify(resolved, null, 2)}\n`);
    return;
  }

  console.log(`fixture set ${resolved.requested}: ${resolved.fixtures.map((fixture) => fixture.id).join(", ") || "none"}`);
}

function parseArgs(argv) {
  const args = {
    allowEmpty: false,
    fixtureSet: "smoke",
    githubOutput: false,
    json: false,
    openclawPath: undefined,
    policyPath: defaultCiPolicyPath,
    baseRef: undefined,
    headRef: undefined,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--fixture-set") {
      args.fixtureSet = argv[index + 1];
      index += 1;
      continue;
    }
    if (arg === "--allow-empty") {
      args.allowEmpty = true;
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
    if (arg === "--openclaw") {
      args.openclawPath = argv[index + 1];
      index += 1;
      continue;
    }
    if (arg === "--no-openclaw") {
      args.openclawPath = false;
      continue;
    }
    if (arg === "--policy") {
      args.policyPath = path.resolve(argv[index + 1]);
      index += 1;
      continue;
    }
    if (arg === "--base-ref") {
      args.baseRef = argv[index + 1];
      index += 1;
      continue;
    }
    if (arg === "--head-ref") {
      args.headRef = argv[index + 1];
      index += 1;
    }
  }
  return args;
}

export async function resolveFixtureSet(options = {}) {
  const requested = normalizeRequested(options.fixtureSet ?? "smoke");
  const manifest = options.manifest ?? (await readManifest());
  const policy = options.policy ?? (await readJson(options.policyPath ?? defaultCiPolicyPath));
  const plan = options.plan ?? (await buildWorkspacePlan({ openclawPath: options.openclawPath }));
  const fixtureIds = new Set(manifest.fixtures.map((fixture) => fixture.id));
  const changedPaths =
    options.changedPaths ??
    (requested === "changed-submodules"
      ? readChangedPaths({ baseRef: options.baseRef, headRef: options.headRef })
      : []);
  const selectedIds = selectFixtureIds({ requested, policy, plan, fixtureIds, manifest, changedPaths });
  const fixtures = [...selectedIds].sort().map((fixtureId) => summarizeFixture(fixtureId, plan));

  if (!options.allowEmpty && fixtures.length === 0) {
    throw new Error(`fixture set ${requested} selected no fixtures`);
  }

  return {
    generatedAt: "deterministic",
    requested,
    count: fixtures.length,
    fixtures,
  };
}

function selectFixtureIds({ requested, policy, plan, fixtureIds, manifest, changedPaths }) {
  if (requested === "none") {
    return new Set();
  }
  if (requested === "all") {
    return new Set(fixtureIds);
  }
  if (requested === "changed-submodules") {
    return fixturesChangedByPaths(manifest.fixtures, changedPaths);
  }
  if (policy.fixtureSets?.[requested]) {
    return validateIds(policy.fixtureSets[requested], fixtureIds, requested);
  }
  if (requested === "ts") {
    return fixturesWithCapability(plan, "ts-loader");
  }
  if (requested === "build") {
    return fixturesWithCapability(plan, "build");
  }
  if (requested === "sdk-alias") {
    return fixturesWithCapability(plan, "sdk-alias-compat");
  }
  if (requested === "side-effect-review") {
    return fixturesWithCapability(plan, "side-effect-sandbox");
  }
  if (requested === "all-known-safe") {
    const sideEffectFixtures = fixturesWithCapability(plan, "side-effect-sandbox");
    return new Set([...fixtureIds].filter((fixtureId) => !sideEffectFixtures.has(fixtureId)));
  }
  if (requested.includes(",")) {
    return validateIds(requested.split(",").map((value) => value.trim()).filter(Boolean), fixtureIds, requested);
  }
  return validateIds([requested], fixtureIds, requested);
}

function fixturesChangedByPaths(fixtures, changedPaths) {
  const pluginFixtures = new Set(
    fixtures
      .filter((fixture) =>
        changedPaths.some((changedPath) => changedPath === fixture.path || changedPath.startsWith(`${fixture.path}/`)),
      )
      .map((fixture) => fixture.id),
  );

  if (pluginFixtures.size > 0) {
    return pluginFixtures;
  }

  if (changedPaths.some((changedPath) => changedPath === ".gitmodules")) {
    return new Set(fixtures.map((fixture) => fixture.id));
  }

  return pluginFixtures;
}

function readChangedPaths({ baseRef, headRef } = {}) {
  const args = ["diff", "--name-only"];
  if (baseRef && headRef) {
    args.push(`${baseRef}..${headRef}`);
  } else {
    args.push("HEAD^", "HEAD");
  }
  const result = spawnSync("git", args, {
    cwd: repoRoot,
    encoding: "utf8",
  });
  if (result.status !== 0) {
    throw new Error(`failed to resolve changed paths for fixture matrix: ${result.stderr.trim()}`);
  }
  return result.stdout.split(/\r?\n/).map((value) => value.trim()).filter(Boolean);
}

function fixturesWithCapability(plan, capability) {
  return new Set(
    plan.fixtures
      .filter((fixture) =>
        fixture.entrypoints.some((entrypoint) => entrypoint.requiredCapabilities.includes(capability)),
      )
      .map((fixture) => fixture.id),
  );
}

function summarizeFixture(fixtureId, plan) {
  const fixture = plan.fixtures.find((item) => item.id === fixtureId);
  const entrypoints = fixture?.entrypoints ?? [];
  const capabilities = new Set(entrypoints.flatMap((entrypoint) => entrypoint.requiredCapabilities));
  const statuses = new Set(entrypoints.map((entrypoint) => entrypoint.status));
  return {
    id: fixtureId,
    entrypointCount: entrypoints.length,
    capabilities: [...capabilities].sort(),
    statuses: [...statuses].sort(),
  };
}

function validateIds(ids, fixtureIds, requested) {
  const unknown = ids.filter((id) => !fixtureIds.has(id));
  if (unknown.length > 0) {
    throw new Error(`fixture set ${requested} references unknown fixture(s): ${unknown.join(", ")}`);
  }
  return new Set(ids);
}

function normalizeRequested(value) {
  return String(value ?? "smoke").trim() || "smoke";
}

async function readJson(jsonPath) {
  return JSON.parse(await readFile(path.resolve(repoRoot, jsonPath), "utf8"));
}
