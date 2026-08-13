import { readFile, readdir } from "node:fs/promises";
import path from "node:path";

const ignoredDirectories = new Set([".git", ".pnpm", "node_modules"]);

export async function findNearbySourcePackageCandidates({
  expectedPackageName,
  limit = 5,
  missingSourcePath,
  sourceRoot,
}) {
  const packageJsonPaths = [];
  await collectPackageJsonPaths(sourceRoot, sourceRoot, packageJsonPaths);

  const candidates = await Promise.all(
    packageJsonPaths.map(async (packageJsonPath) => {
      let packageName = "";
      try {
        packageName = JSON.parse(await readFile(packageJsonPath, "utf8")).name ?? "";
      } catch {
        // A malformed unrelated package should not hide useful candidates.
      }
      const relativePath = path.relative(sourceRoot, packageJsonPath);
      const sourcePath = path.dirname(relativePath);
      return {
        distance: editDistance(missingSourcePath, sourcePath),
        exactPackageName: packageName === expectedPackageName,
        packageName,
        relativePath,
      };
    }),
  );

  return candidates
    .sort((left, right) => {
      if (left.exactPackageName !== right.exactPackageName) {
        return left.exactPackageName ? -1 : 1;
      }
      return left.distance - right.distance || left.relativePath.localeCompare(right.relativePath);
    })
    .slice(0, limit)
    .map(({ packageName, relativePath }) => ({ packageName, relativePath }));
}

export function formatMissingSourcePackageMessage({ candidates, fixtureId, packageJsonPath }) {
  const candidateLines = candidates.map(
    (candidate) =>
      `  - ${candidate.relativePath}${candidate.packageName ? ` (${candidate.packageName})` : ""}`,
  );
  const candidateDetail =
    candidateLines.length > 0
      ? `\nNearby package.json candidates in the OpenClaw checkout:\n${candidateLines.join("\n")}`
      : "\nNo package.json candidates were found in the OpenClaw checkout.";
  return `${fixtureId}: missing source package.json at ${packageJsonPath}.${candidateDetail}\nUpdate source.path in crabpot.config.json if the package moved.`;
}

async function collectPackageJsonPaths(sourceRoot, currentDirectory, results) {
  let entries;
  try {
    entries = await readdir(currentDirectory, { withFileTypes: true });
  } catch {
    return;
  }

  for (const entry of entries) {
    const entryPath = path.join(currentDirectory, entry.name);
    if (entry.isFile() && entry.name === "package.json") {
      results.push(entryPath);
      continue;
    }
    if (
      entry.isDirectory() &&
      !ignoredDirectories.has(entry.name) &&
      !entry.name.startsWith(".crabpot") &&
      entryPath !== sourceRoot
    ) {
      await collectPackageJsonPaths(sourceRoot, entryPath, results);
    }
  }
}

function editDistance(left, right) {
  const previous = Array.from({ length: right.length + 1 }, (_, index) => index);
  for (let leftIndex = 1; leftIndex <= left.length; leftIndex += 1) {
    const current = [leftIndex];
    for (let rightIndex = 1; rightIndex <= right.length; rightIndex += 1) {
      current[rightIndex] = Math.min(
        current[rightIndex - 1] + 1,
        previous[rightIndex] + 1,
        previous[rightIndex - 1] + (left[leftIndex - 1] === right[rightIndex - 1] ? 0 : 1),
      );
    }
    previous.splice(0, previous.length, ...current);
  }
  return previous[right.length];
}
