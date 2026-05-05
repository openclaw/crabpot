import { readFile } from "node:fs/promises";
import path from "node:path";

export const repoRoot = path.resolve(import.meta.dirname, "..");
export const manifestPath = path.join(repoRoot, "crabpot.config.json");
export const defaultCiPolicyPath = path.join(repoRoot, "crabpot.ci-policy.json");
export const npmPackagePayloadDir = ".crabpot-package";

export async function readManifest() {
  const raw = await readFile(manifestPath, "utf8");
  const manifest = JSON.parse(raw);
  validateManifest(manifest);
  return manifest;
}

export async function readConfiguredManifest(options = {}) {
  const manifest = await readManifest();
  return selectManifestFixtures(manifest, {
    fixtureSet: options.fixtureSet ?? process.env.CRABPOT_FIXTURE_SET,
    policyPath: options.policyPath ?? defaultCiPolicyPath,
  });
}

export async function selectManifestFixtures(manifest, options = {}) {
  const fixtureSet = normalizeFixtureSet(options.fixtureSet);
  if (!fixtureSet) {
    return manifest;
  }
  const policy = JSON.parse(await readFile(options.policyPath ?? defaultCiPolicyPath, "utf8"));
  const ids = policy.fixtureSets?.[fixtureSet] ?? fixtureSet.split(",").map((value) => value.trim()).filter(Boolean);
  const fixturesById = new Map(manifest.fixtures.map((fixture) => [fixture.id, fixture]));
  const fixtures = ids.map((id) => fixturesById.get(id)).filter(Boolean);
  const missing = ids.filter((id) => !fixtures.some((fixture) => fixture.id === id));
  if (missing.length > 0) {
    throw new Error(`fixture set ${fixtureSet} references unknown fixture(s): ${missing.join(", ")}`);
  }
  return {
    ...manifest,
    fixtureSelection: {
      fixtureSet,
      ids,
    },
    fixtures,
  };
}

export function normalizeFixtureSet(value) {
  const normalized = String(value ?? "").trim();
  return normalized && normalized !== "all" ? normalized : "";
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
      if (fixture.package.tag !== undefined && (typeof fixture.package.tag !== "string" || fixture.package.tag.length === 0)) {
        errors.push(`${fixture.id}: package.tag must be a non-empty string when present`);
      }
      if (fixture.package.version !== undefined && (typeof fixture.package.version !== "string" || fixture.package.version.length === 0)) {
        errors.push(`${fixture.id}: package.version must be a non-empty string when present`);
      }
      if (
        fixture.package.artifactSource !== undefined &&
        !["npm", "source-pack"].includes(fixture.package.artifactSource)
      ) {
        errors.push(`${fixture.id}: package.artifactSource must be npm or source-pack when present`);
      }
      if (fixture.package.artifactSource === "source-pack" && fixture.source === undefined) {
        errors.push(`${fixture.id}: package.artifactSource source-pack requires source metadata`);
      }
    }
    if (fixture.source !== undefined) {
      if (!fixture.source || typeof fixture.source !== "object" || Array.isArray(fixture.source)) {
        errors.push(`${fixture.id}: source must be an object when present`);
      } else {
        if (
          typeof fixture.source.repo !== "string" ||
          !fixture.source.repo.startsWith("https://github.com/") ||
          !fixture.source.repo.endsWith(".git")
        ) {
          errors.push(`${fixture.id}: source.repo must be a GitHub HTTPS .git URL`);
        }
        if (typeof fixture.source.path !== "string" || fixture.source.path.length === 0 || fixture.source.path.includes("..")) {
          errors.push(`${fixture.id}: source.path must be a repo-relative path`);
        }
        if (typeof fixture.source.ref !== "string" || fixture.source.ref.length === 0) {
          errors.push(`${fixture.id}: source.ref must be set`);
        }
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

    const blockedFailures = fixture.execution?.blockedFailures;
    if (blockedFailures !== undefined) {
      if (!Array.isArray(blockedFailures) || blockedFailures.length === 0) {
        errors.push(`${fixture.id}: execution.blockedFailures must be a non-empty array when present`);
      }
      for (const rule of blockedFailures ?? []) {
        if (typeof rule.id !== "string" || rule.id.length === 0) {
          errors.push(`${fixture.id}: execution.blockedFailures[].id must be set`);
        }
        if (typeof rule.seam !== "string" || rule.seam.length === 0) {
          errors.push(`${fixture.id}: execution.blockedFailures[].seam must be set`);
        }
        if (typeof rule.errorIncludes !== "string" || rule.errorIncludes.length === 0) {
          errors.push(`${fixture.id}: execution.blockedFailures[].errorIncludes must be set`);
        }
        if (typeof rule.reason !== "string" || rule.reason.length === 0) {
          errors.push(`${fixture.id}: execution.blockedFailures[].reason must be set`);
        }
      }
    }
  }

  if (errors.length > 0) {
    throw new Error(errors.join("\n"));
  }
}

export function fixtureCheckoutPath(fixture) {
  return path.join(repoRoot, fixture.path);
}

export function fixtureSourceRoot(fixture) {
  const checkoutPath = fixtureCheckoutPath(fixture);
  if (fixture.subdir) {
    return path.join(checkoutPath, fixture.subdir);
  }
  if (fixture.package) {
    return path.join(checkoutPath, npmPackagePayloadDir);
  }
  return checkoutPath;
}
