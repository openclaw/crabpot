import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";

const distributions = ["core", "external", "source"];
const sha = /^[0-9a-f]{40}$/;
const digest = /^[0-9a-f]{64}$/;
const record = (value) => value !== null && typeof value === "object" && !Array.isArray(value);

function requireValue(condition, message) {
  if (!condition) throw new Error(`resource coverage: ${message}`);
}

// This is the producer's JSON-only stable serialization contract: sorted object
// keys, original array order. Do not replace it with insertion-order stringify.
function stableJson(value) {
  if (Array.isArray(value)) return `[${value.map(stableJson).join(",")}]`;
  if (record(value)) {
    return `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${stableJson(value[key])}`).join(",")}}`;
  }
  return JSON.stringify(value);
}

export function validatePluginInventory(inventory) {
  requireValue(record(inventory) && inventory.schemaVersion === 1 && inventory.scope === "source-manifests", "expected source plugin inventory v1");
  requireValue(inventory.source?.kind === "git-tree" && sha.test(inventory.source.commit) && sha.test(inventory.source.tree), "inventory needs committed source and tree identities");
  requireValue(Array.isArray(inventory.plugins) && digest.test(inventory.sha256), "inventory needs plugins and a SHA-256 digest");
  const { sha256, ...payload } = inventory;
  requireValue(createHash("sha256").update(stableJson(payload)).digest("hex") === sha256, "inventory digest mismatch");
  const ids = new Set();
  const paths = new Set();
  for (const plugin of inventory.plugins) {
    requireValue(record(plugin) && typeof plugin.id === "string" && plugin.id.trim().length > 0, "invalid plugin ID");
    requireValue(!ids.has(plugin.id), `duplicate plugin ID: ${plugin.id}`);
    requireValue(typeof plugin.path === "string" && /^extensions\/[^/\\\s]+$/.test(plugin.path) && ![".", ".."].includes(plugin.path.slice(11)), `invalid plugin path: ${plugin.id}`);
    requireValue(plugin.manifestPath === `${plugin.path}/openclaw.plugin.json` && !paths.has(plugin.path), `invalid or duplicate manifest path: ${plugin.id}`);
    requireValue(distributions.includes(plugin.distribution) && record(plugin.declaredSurfaces), `invalid plugin metadata: ${plugin.id}`);
    requireValue(plugin.package === null || (record(plugin.package) && [plugin.package.name, plugin.package.version].every((value) => value === null || typeof value === "string")), `invalid package metadata: ${plugin.id}`);
    ids.add(plugin.id);
    paths.add(plugin.path);
  }
  return inventory;
}

function validateOperations(operations) {
  return record(operations) && ["attempted", "completed", "failed"].every((key) =>
    Number.isSafeInteger(operations[key]) && operations[key] >= 0,
  ) && operations.attempted === operations.completed + operations.failed;
}

function readCalibration(report, inventory) {
  if (report === undefined) return { status: "blocked", reason: "not-run" };
  requireValue(record(report) && report.schemaVersion === 1 && ["failed", "exercised"].includes(report.status) && Array.isArray(report.cases), "expected Kitchen Sink resource report v1; collector/import reports are not workload receipts");
  const provenance = report.provenance;
  requireValue(sha.test(provenance?.gateway?.commit) && digest.test(provenance?.entrySha256) && digest.test(provenance?.fixture?.sha256), "Kitchen Sink report lacks source/artifact identities");
  // The real Gateway producer uses this synthetic fixture identity. It is not
  // an inventory plugin and must never earn workload credit for another row.
  requireValue(provenance.fixture.personality === "conformance" && provenance.fixture.pluginId === "openclaw-kitchen-sink-fixture", "unexpected Kitchen Sink fixture identity");
  requireValue(record(provenance.harnessSha256) && Object.keys(provenance.harnessSha256).length > 0 && Object.values(provenance.harnessSha256).every((value) => digest.test(value)), "Kitchen Sink report lacks harness identities");
  requireValue(record(report.measurement) && record(report.postDisposalResidual), "Kitchen Sink report lacks measurement limits");
  requireValue(report.cases.length === 2 && report.cases[0].name === "empty" && report.cases[1].name === "conformance", "Kitchen Sink report needs the ordered empty/conformance cases");
  for (const item of report.cases) {
    requireValue(["blocked", "failed", "exercised"].includes(item.status) && Array.isArray(item.phases), "invalid Kitchen Sink case");
    const phaseNames = new Set();
    for (const phase of item.phases) {
      requireValue(typeof phase.name === "string" && !phaseNames.has(phase.name) && ["failed", "exercised"].includes(phase.status) && validateOperations(phase.operations), "invalid or duplicate measured phase");
      phaseNames.add(phase.name);
    }
    if (report.status !== "exercised") continue;
    const expectedPhases = ["startup", "idle", "neutral-rpc", "post-neutral", ...(item.name === "conformance" ? ["plugin-tool", "post-tool"] : [])];
    requireValue(expectedPhases.every((name) => phaseNames.has(name)), "successful calibration is missing a measured phase");
    const expectedPlugins = item.name === "empty" ? [] : [provenance.fixture.pluginId];
    requireValue(item.status === "exercised" && JSON.stringify(item.activePlugins) === JSON.stringify(expectedPlugins), "successful calibration has an invalid active-plugin inventory");
    requireValue(item.shutdown?.exited === true && item.shutdown.exitCode === 0 && item.shutdown.signal === null, "successful calibration lacks clean joined shutdown");
    for (const phase of item.phases) {
      requireValue(phase.status === "exercised" && phase.operations.failed === 0 && record(phase.before) && record(phase.after) && record(phase.cpu) && record(phase.memoryChangeBytes), "successful calibration has an incomplete phase observation");
      requireValue(Number.isFinite(phase.cpu.wallMs) && phase.cpu.wallMs >= 0 && Number.isFinite(phase.cpu.process?.totalMs) && phase.cpu.process.totalMs >= 0, "invalid phase CPU measurement");
      requireValue(["rss", "heapTotal", "heapUsed", "external", "arrayBuffers"].every((key) => Number.isFinite(phase.memoryChangeBytes[key])), "invalid phase memory measurement");
    }
    for (const [phaseName, count] of [
      ["neutral-rpc", report.measurement.neutralOperations],
      ...(item.name === "conformance" ? [["plugin-tool", report.measurement.pluginToolOperations]] : []),
    ]) {
      const phase = item.phases.find((candidate) => candidate.name === phaseName);
      requireValue(Number.isSafeInteger(count) && count > 0 && phase?.operations.completed === count, `successful calibration lacks ${phaseName} completions`);
    }
  }
  const matchesInventory = provenance.gateway.commit === inventory.source.commit;
  return {
    status: matchesInventory ? report.status : "blocked",
    reason: matchesInventory ? (report.status === "exercised" ? "measured-kitchen-sink-workload" : "producer-failure") : "inventory-source-mismatch",
    // These hashes identify producer-reported artifacts; this reader has not
    // independently re-hashed the Gateway, fixture, or harness artifact bytes.
    provenance,
    measurement: report.measurement,
    producerStatus: report.status,
    cases: report.cases,
    postDisposalResidual: report.postDisposalResidual,
    ...(report.error ? { error: report.error } : {}),
  };
}

export function buildResourceCoverage({ inventory, kitchenSinkReport, configuredFixtureCount, selectedFixtureCount }) {
  validatePluginInventory(inventory);
  requireValue(Number.isSafeInteger(configuredFixtureCount) && configuredFixtureCount >= 0 && Number.isSafeInteger(selectedFixtureCount) && selectedFixtureCount >= 0 && selectedFixtureCount <= configuredFixtureCount, "invalid configured/selected fixture counts");
  const plugins = inventory.plugins.map(({ id, path, distribution }) => ({
    id, path, distribution, status: "unsupported", reason: "no-workload-adapter",
  }));
  return {
    inventory: { source: inventory.source, sha256: inventory.sha256, count: plugins.length },
    fixtures: { configured: configuredFixtureCount, selected: selectedFixtureCount },
    summary: {
      ...Object.fromEntries(distributions.map((distribution) => [distribution, plugins.filter((plugin) => plugin.distribution === distribution).length])),
      exercised: 0, blocked: 0, unsupported: plugins.length, failed: 0,
    },
    plugins,
    calibration: readCalibration(kitchenSinkReport, inventory),
  };
}

export function readResourceCoverage({ pluginInventoryPath, kitchenSinkResourceReportPath, ...counts }) {
  if (!pluginInventoryPath && !kitchenSinkResourceReportPath) return null;
  requireValue(pluginInventoryPath, "--kitchen-sink-resource-report requires --plugin-inventory");
  return buildResourceCoverage({
    ...counts,
    inventory: JSON.parse(readFileSync(pluginInventoryPath, "utf8")),
    kitchenSinkReport: kitchenSinkResourceReportPath ? JSON.parse(readFileSync(kitchenSinkResourceReportPath, "utf8")) : undefined,
  });
}

export function renderResourceCoverageMarkdown(coverage) {
  if (!coverage) return "";
  // Entities render as text without reactivating Markdown links/images or HTML.
  const cell = (value) => String(value).replace(/[!-/:-@[-`{-~]/g, (character) => `&#${character.charCodeAt(0)};`).replace(/[\r\n]/g, " ");
  return [
    "## Plugin Resource Coverage", "",
    `Source inventory: **${coverage.inventory.count}** plugins at \`${coverage.inventory.source.commit}\` (${coverage.summary.core} core, ${coverage.summary.external} external, ${coverage.summary.source} source-only).`,
    `Configured compatibility fixtures: **${coverage.fixtures.configured}**; selected: **${coverage.fixtures.selected}**. These are separate denominators.`, "",
    "Import and collector results do not establish workload coverage. Kitchen Sink calibration is outside the plugin denominator.", "",
    `Calibration: **${coverage.calibration.status}** — ${cell(coverage.calibration.reason)}.`,
    ...(coverage.calibration.postDisposalResidual ? [`Post-disposal residual: **${cell(coverage.calibration.postDisposalResidual.status)}** — ${cell(coverage.calibration.postDisposalResidual.reason)}.`] : []), "",
    "| Plugin | Distribution | Workload | Reason |", "| --- | --- | --- | --- |",
    ...coverage.plugins.map((plugin) => `| ${cell(plugin.id)} | ${plugin.distribution} | ${plugin.status} | ${plugin.reason} |`),
  ].join("\n");
}
