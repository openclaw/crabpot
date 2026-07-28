export function parseNpmPackResult(output) {
  const parsed = JSON.parse(output);
  if (Array.isArray(parsed)) {
    return parsed[0];
  }
  if (!parsed || typeof parsed !== "object") {
    return undefined;
  }
  const results = Object.values(parsed);
  return results.length === 1 ? results[0] : undefined;
}

export function parseNpmViewResult(output) {
  const parsed = JSON.parse(output);
  return Array.isArray(parsed) ? parsed[0] : parsed;
}

export function resolveNpmViewVersion(metadata, tag) {
  const taggedVersion = metadata?.["dist-tags"]?.[tag];
  if (isVersion(taggedVersion)) {
    return taggedVersion;
  }
  if (tag === "latest" && isVersion(metadata?.version)) {
    return metadata.version;
  }
  return undefined;
}

function isVersion(value) {
  return typeof value === "string" && /^\d+\.\d+\.\d+/.test(value);
}
