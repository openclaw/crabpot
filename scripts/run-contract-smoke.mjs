#!/usr/bin/env node
import { existsSync } from "node:fs";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fixtureCheckoutPath, fixtureSourceRoot, readConfiguredManifest, repoRoot } from "./manifest-lib.mjs";

const args = process.argv.slice(2);
const strict = args.includes("--strict");
const openclawArgIndex = args.indexOf("--openclaw");

const manifest = await readConfiguredManifest();
resolveOpenClawRoot();

const rows = [];
const missing = [];

for (const fixture of manifest.fixtures) {
  const checkoutPath = fixtureCheckoutPath(fixture);
  const pluginRoot = fixtureSourceRoot(fixture);

  if (!existsSync(checkoutPath)) {
    rows.push(row(fixture, "missing", "not materialized"));
    missing.push(fixture.id);
    continue;
  }

  const manifestFile = await firstExisting([
    path.join(pluginRoot, "openclaw.plugin.json"),
    path.join(checkoutPath, "openclaw.plugin.json"),
  ]);
  const packageFile = await firstExisting([
    path.join(pluginRoot, "package.json"),
    path.join(checkoutPath, "package.json"),
  ]);

  if (!manifestFile && !packageFile) {
    rows.push(row(fixture, "incomplete", "no plugin manifest or package.json found"));
    continue;
  }

  const pluginId = manifestFile
    ? await readPluginId(manifestFile)
    : await readPackageName(packageFile);
  rows.push(row(fixture, "ok", pluginId));
}

console.table(rows);

if (strict && missing.length > 0) {
  throw new Error(`missing fixture checkouts: ${missing.join(", ")}`);
}

function row(fixture, status, detail) {
  return {
    id: fixture.id,
    priority: fixture.priority,
    status,
    detail,
    seams: fixture.seams.join(","),
  };
}

async function firstExisting(paths) {
  return paths.find((candidate) => existsSync(candidate));
}

async function readPluginId(filePath) {
  try {
    const json = JSON.parse(await readFile(filePath, "utf8"));
    return json.id ?? json.name ?? path.basename(path.dirname(filePath));
  } catch {
    return "invalid openclaw.plugin.json";
  }
}

function resolveOpenClawRoot() {
  if (openclawArgIndex !== -1) {
    return requireOpenClawRoot(path.resolve(repoRoot, args[openclawArgIndex + 1]));
  }

  const candidates = [
    path.resolve(repoRoot, manifest.openclaw?.defaultCheckoutPath ?? "../openclaw"),
    path.join(repoRoot, ".crabpot", "openclaw-source"),
  ];
  const match = candidates.find((candidate) => existsSync(path.join(candidate, "package.json")));
  if (match) {
    return match;
  }
  throw new Error(`OpenClaw checkout not found at ${candidates.join(" or ")}`);
}

function requireOpenClawRoot(root) {
  if (!existsSync(path.join(root, "package.json"))) {
    throw new Error(`OpenClaw checkout not found at ${root}`);
  }
  return root;
}

async function readPackageName(filePath) {
  try {
    const json = JSON.parse(await readFile(filePath, "utf8"));
    return json.name ?? path.basename(path.dirname(filePath));
  } catch {
    return "invalid package.json";
  }
}
