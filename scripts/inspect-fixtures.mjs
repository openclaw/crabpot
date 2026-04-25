#!/usr/bin/env node
import { existsSync } from "node:fs";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { readManifest, repoRoot } from "./manifest-lib.mjs";

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  await main();
}

async function main() {
  const args = new Set(process.argv.slice(2));
  const check = args.has("--check");
  const json = args.has("--json");

  const { inspections, failures } = await inspectManifest();

  if (json) {
    console.log(JSON.stringify({ inspections, failures }, null, 2));
  } else {
    console.table(
      inspections.map((item) => ({
        id: item.id,
        status: item.status,
        hooks: item.hooks.join(","),
        registrations: item.registrations.join(","),
        manifestContracts: item.manifestContracts.join(","),
      })),
    );
  }

  if (check && failures.length > 0) {
    throw new Error(failures.join("\n"));
  }
}

export async function inspectManifest() {
  const manifest = await readManifest();
  const inspections = [];
  const failures = [];

  for (const fixture of manifest.fixtures) {
    const inspection = await inspectFixture(fixture);
    inspections.push(inspection);

    for (const [key, observed] of [
      ["hooks", inspection.hooks],
      ["registrations", inspection.registrations],
      ["manifestContracts", inspection.manifestContracts],
    ]) {
      const expected = fixture.expect?.[key] ?? [];
      const missing = expected.filter((value) => !observed.includes(value));
      if (missing.length > 0) {
        failures.push(`${fixture.id}: missing ${key}: ${missing.join(", ")}`);
      }
    }
  }

  return { inspections, failures };
}

export async function inspectFixture(fixture) {
  const checkoutPath = path.join(repoRoot, fixture.path);
  const sourceRoot = fixture.subdir ? path.join(checkoutPath, fixture.subdir) : checkoutPath;

  if (!existsSync(checkoutPath)) {
    return emptyInspection(fixture, "missing");
  }

  const files = await listSourceFiles(sourceRoot);
  if (sourceRoot !== checkoutPath) {
    files.push(...(await listSourceFiles(checkoutPath, { shallowRootOnly: true })));
  }

  const hooks = new Set();
  const registrations = new Set();

  for (const filePath of files) {
    const text = await readFile(filePath, "utf8");
    collectMatches(text, /\bapi\.on\(\s*["'`]([^"'`]+)["'`]/g, hooks);
    collectMatches(text, /\bapi\.(register[A-Za-z0-9]+)\s*\(/g, registrations);

    if (/\bdefineChannelPluginEntry\s*\(/.test(text)) {
      registrations.add("defineChannelPluginEntry");
    }
    if (/\bcreateChatChannelPlugin\s*\(/.test(text)) {
      registrations.add("createChatChannelPlugin");
    }
    if (/\bdefinePluginEntry\s*\(/.test(text)) {
      registrations.add("definePluginEntry");
    }
  }

  return {
    id: fixture.id,
    status: "ok",
    hooks: [...hooks].sort(),
    registrations: [...registrations].sort(),
    manifestContracts: await readManifestContracts(checkoutPath, sourceRoot),
  };
}

function emptyInspection(fixture, status) {
  return {
    id: fixture.id,
    status,
    hooks: [],
    registrations: [],
    manifestContracts: [],
  };
}

function collectMatches(text, regex, target) {
  for (const match of text.matchAll(regex)) {
    target.add(match[1]);
  }
}

async function readManifestContracts(checkoutPath, sourceRoot) {
  const manifests = new Set(
    [path.join(sourceRoot, "openclaw.plugin.json"), path.join(checkoutPath, "openclaw.plugin.json")].filter(
      existsSync,
    ),
  );
  const contracts = new Set();

  for (const manifestFile of manifests) {
    try {
      const manifest = JSON.parse(await readFile(manifestFile, "utf8"));
      for (const key of Object.keys(manifest.contracts ?? {})) {
        contracts.add(key);
      }
    } catch {
      contracts.add("invalidManifest");
    }
  }

  return [...contracts].sort();
}

async function listSourceFiles(root, options = {}) {
  if (!existsSync(root)) {
    return [];
  }

  const output = [];
  await walk(root, output, options);
  return output;
}

async function walk(dir, output, options) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const entryPath = path.join(dir, entry.name);
    const normalized = entryPath.split(path.sep).join("/");

    if (entry.isDirectory()) {
      if (shouldSkipDir(entry.name, normalized)) {
        continue;
      }
      if (options.shallowRootOnly) {
        continue;
      }
      await walk(entryPath, output, options);
      continue;
    }

    if (isSourceFile(entry.name, normalized)) {
      output.push(entryPath);
    }
  }
}

function shouldSkipDir(name, normalizedPath) {
  return (
    name === "node_modules" ||
    name === "dist" ||
    name === "build" ||
    name === "coverage" ||
    name === ".git" ||
    /\/tests?\//.test(`${normalizedPath}/`) ||
    /\/test-shims\//.test(`${normalizedPath}/`)
  );
}

function isSourceFile(name, normalizedPath) {
  return (
    /\.(cjs|mjs|js|ts)$/.test(name) &&
    !name.endsWith(".d.ts") &&
    !/\.test\./.test(name) &&
    !/\.spec\./.test(name) &&
    !/\/tests?\//.test(normalizedPath)
  );
}
