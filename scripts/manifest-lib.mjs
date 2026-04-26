import { readFile } from "node:fs/promises";
import path from "node:path";

export const repoRoot = path.resolve(import.meta.dirname, "..");
export const manifestPath = path.join(repoRoot, "crabpot.config.json");

export async function readManifest() {
  const raw = await readFile(manifestPath, "utf8");
  const manifest = JSON.parse(raw);
  validateManifest(manifest);
  return manifest;
}

export function validateManifest(manifest) {
  const errors = [];

  if (manifest.version !== 1) {
    errors.push("manifest.version must be 1");
  }

  if (manifest.submoduleRoot !== "plugins") {
    errors.push('manifest.submoduleRoot must be "plugins"');
  }

  if (!Array.isArray(manifest.fixtures) || manifest.fixtures.length === 0) {
    errors.push("manifest.fixtures must be a non-empty array");
  }

  const ids = new Set();
  const paths = new Set();
  for (const fixture of manifest.fixtures ?? []) {
    if (!/^[a-z0-9][a-z0-9-]*$/.test(fixture.id ?? "")) {
      errors.push(`invalid fixture id: ${fixture.id}`);
    }
    if (ids.has(fixture.id)) {
      errors.push(`duplicate fixture id: ${fixture.id}`);
    }
    ids.add(fixture.id);

    if (!fixture.path?.startsWith("plugins/")) {
      errors.push(`${fixture.id}: path must live under plugins/`);
    }
    if (paths.has(fixture.path)) {
      errors.push(`duplicate fixture path: ${fixture.path}`);
    }
    paths.add(fixture.path);

    const hasRepo = typeof fixture.repo === "string";
    const hasPackage = fixture.package && typeof fixture.package === "object";
    if (hasRepo === hasPackage) {
      errors.push(`${fixture.id}: fixture must declare exactly one of repo or package`);
    }
    if (hasRepo && (!fixture.repo.startsWith("https://github.com/") || !fixture.repo.endsWith(".git"))) {
      errors.push(`${fixture.id}: repo must be a GitHub HTTPS .git URL`);
    }
    if (hasPackage) {
      if (!fixture.package.name || typeof fixture.package.name !== "string") {
        errors.push(`${fixture.id}: package.name must be set`);
      }
      if (!fixture.package.version || typeof fixture.package.version !== "string") {
        errors.push(`${fixture.id}: package.version must be set`);
      }
    }
    if (!["high", "medium", "low"].includes(fixture.priority)) {
      errors.push(`${fixture.id}: priority must be high, medium, or low`);
    }
    if (!Array.isArray(fixture.seams) || fixture.seams.length === 0) {
      errors.push(`${fixture.id}: seams must be non-empty`);
    }
    for (const key of ["hooks", "registrations", "manifestContracts"]) {
      const values = fixture.expect?.[key];
      if (values !== undefined && (!Array.isArray(values) || values.length === 0)) {
        errors.push(`${fixture.id}: expect.${key} must be a non-empty array when present`);
      }
    }
  }

  if (errors.length > 0) {
    throw new Error(errors.join("\n"));
  }
}
