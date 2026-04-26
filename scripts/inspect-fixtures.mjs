#!/usr/bin/env node
import { existsSync } from "node:fs";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { fixtureCheckoutPath, fixtureSourceRoot, readManifest, repoRoot } from "./manifest-lib.mjs";

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
  const checkoutPath = fixtureCheckoutPath(fixture);
  const sourceRoot = fixtureSourceRoot(fixture);

  if (!existsSync(checkoutPath)) {
    return emptyInspection(fixture, "missing");
  }

  const files = await listSourceFiles(sourceRoot, { includeDist: Boolean(fixture.package) });
  if (sourceRoot !== checkoutPath) {
    files.push(...(await listSourceFiles(checkoutPath, { shallowRootOnly: true })));
  }

  const hooks = new Set();
  const registrations = new Set();
  const hookDetails = [];
  const registrationDetails = [];
  const sdkImportDetails = [];

  for (const filePath of files) {
    const text = await readFile(filePath, "utf8");
    const relativePath = path.relative(repoRoot, filePath);
    const sourceInspection = inspectSourceText(text, relativePath);

    for (const hook of sourceInspection.hooks) {
      hooks.add(hook.name);
      hookDetails.push(hook);
    }
    for (const registration of sourceInspection.registrations) {
      registrations.add(registration.name);
      registrationDetails.push(registration);
    }
    for (const sdkImport of sourceInspection.sdkImports) {
      sdkImportDetails.push(sdkImport);
    }
  }

  const manifestInspection = await readManifestContracts(checkoutPath, sourceRoot);

  return {
    id: fixture.id,
    status: "ok",
    hooks: [...hooks].sort(),
    hookDetails: sortDetails(hookDetails),
    registrations: [...registrations].sort(),
    registrationDetails: sortDetails(registrationDetails),
    manifestContracts: manifestInspection.contracts,
    manifestFiles: manifestInspection.files,
    manifestErrors: manifestInspection.errors,
    sdkImports: uniqueDetails(sdkImportDetails),
    sourceFiles: files.map((filePath) => path.relative(repoRoot, filePath)).sort(),
  };
}

export function inspectSourceText(text, filePath = "source.js") {
  const searchableText = stripComments(text);
  const hooks = collectDetailedMatches(searchableText, /\bapi\.on\(\s*["'`]([^"'`]+)["'`]/g, filePath, "name");
  const registrations = [
    ...collectDetailedMatches(searchableText, /\bapi\.(register[A-Za-z0-9]+)\s*\(/g, filePath, "name"),
    ...collectDetailedMatches(searchableText, /\b(defineChannelPluginEntry)\s*\(/g, filePath, "name"),
    ...collectDetailedMatches(searchableText, /\b(createChatChannelPlugin)\s*\(/g, filePath, "name"),
    ...collectDetailedMatches(searchableText, /\b(definePluginEntry)\s*\(/g, filePath, "name"),
  ];
  const sdkImports = collectDetailedMatches(
    searchableText,
    /(?:from\s*["'`]|import\(\s*["'`])([^"'`]*openclaw\/plugin-sdk[^"'`]*)/g,
    filePath,
    "specifier",
  );

  return {
    hooks,
    registrations,
    sdkImports,
  };
}

function emptyInspection(fixture, status) {
  return {
    id: fixture.id,
    status,
    hooks: [],
    hookDetails: [],
    registrations: [],
    registrationDetails: [],
    manifestContracts: [],
    manifestFiles: [],
    manifestErrors: [],
    sdkImports: [],
    sourceFiles: [],
  };
}

function collectDetailedMatches(text, regex, filePath, key) {
  const details = [];
  for (const match of text.matchAll(regex)) {
    const line = lineForOffset(text, match.index ?? 0);
    details.push({
      [key]: match[1],
      file: filePath,
      line,
      ref: `${filePath}:${line}`,
    });
  }
  return details;
}

async function readManifestContracts(checkoutPath, sourceRoot) {
  const manifests = new Set(
    [path.join(sourceRoot, "openclaw.plugin.json"), path.join(checkoutPath, "openclaw.plugin.json")].filter(
      existsSync,
    ),
  );
  const contracts = new Set();
  const files = [];
  const errors = [];

  for (const manifestFile of manifests) {
    const relativePath = path.relative(repoRoot, manifestFile);
    files.push(relativePath);
    try {
      const manifest = JSON.parse(await readFile(manifestFile, "utf8"));
      for (const key of Object.keys(manifest.contracts ?? {})) {
        contracts.add(key);
      }
    } catch {
      contracts.add("invalidManifest");
      errors.push(`${relativePath}: invalid JSON`);
    }
  }

  return {
    contracts: [...contracts].sort(),
    files: files.sort(),
    errors,
  };
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
      if (shouldSkipDir(entry.name, normalized, options)) {
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

function shouldSkipDir(name, normalizedPath, options = {}) {
  return (
    name === "node_modules" ||
    (!options.includeDist && name === "dist") ||
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

function lineForOffset(text, offset) {
  let line = 1;
  for (let index = 0; index < offset; index += 1) {
    if (text.charCodeAt(index) === 10) {
      line += 1;
    }
  }
  return line;
}

function stripComments(text) {
  return text
    .replace(/\/\*[\s\S]*?\*\//g, (comment) => comment.replace(/[^\n]/g, " "))
    .replace(/\/\/.*$/gm, (comment) => " ".repeat(comment.length));
}

function sortDetails(details) {
  return [...details].sort((left, right) => {
    const leftName = left.name ?? left.specifier ?? "";
    const rightName = right.name ?? right.specifier ?? "";
    return leftName.localeCompare(rightName) || left.ref.localeCompare(right.ref);
  });
}

function uniqueDetails(details) {
  const byKey = new Map();
  for (const detail of sortDetails(details)) {
    const key = `${detail.name ?? detail.specifier}:${detail.ref}`;
    byKey.set(key, detail);
  }
  return [...byKey.values()];
}
