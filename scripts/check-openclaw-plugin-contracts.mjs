#!/usr/bin/env node
import { execFileSync } from "node:child_process";
import { readFileSync, statSync } from "node:fs";
import path from "node:path";
import { repoRoot } from "./manifest-lib.mjs";

const retiredTerms = [
  ["openclaw", ".", "bundle"].join(""),
  ["openclaw", ".", "bundle", ".", "json"].join(""),
  ["stage", "Runtime", "Dependencies"].join(""),
  ["include", "In", "Core"].join(""),
  ["mirrored", "Root", "Runtime", "Dependencies"].join(""),
];

const ignoredPaths = new Set([path.relative(repoRoot, import.meta.filename)]);

const trackedFiles = execFileSync("git", ["ls-files", "-z"], {
  cwd: repoRoot,
  encoding: "utf8",
})
  .split("\0")
  .filter(Boolean)
  .filter((filePath) => !ignoredPaths.has(filePath))
  .filter((filePath) => !filePath.startsWith("reports/"));

const offenders = [];
for (const filePath of trackedFiles) {
  const absolutePath = path.join(repoRoot, filePath);
  if (!statSync(absolutePath).isFile()) {
    continue;
  }
  const content = readFileSync(absolutePath, "utf8");
  for (const term of retiredTerms) {
    if (content.includes(term)) {
      offenders.push(`${filePath}: contains retired OpenClaw plugin contract ${term}`);
    }
  }
}

if (offenders.length > 0) {
  console.error(offenders.join("\n"));
  process.exit(1);
}

console.log("openclaw plugin contract check: pass");
