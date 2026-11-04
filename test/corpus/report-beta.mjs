import assert from "node:assert/strict";
import { test } from "node:test";
import { createHash } from "node:crypto";
import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { readManifest } from "../../scripts/manifest-lib.mjs";
import { runResourceWorkload } from "../../scripts/run-resource-workload.mjs";
import { renderIssuesReport, renderMarkdownReport } from "../../scripts/report-lib.mjs";
import { buildCorpusReport as buildReport } from "./report-fixture.mjs";

test("report can focus on the OpenClaw beta npm fixture set", async () => {
  const report = await buildReport({ fixtureSet: "openclaw-beta", generatedAt: "test", openclawPath: false });

  assert.equal(report.summary.fixtureCount, 7);
  assert.equal(report.crabpotContext.fixtureSet, "openclaw-beta");
  assert.deepEqual(report.crabpotContext.fixtureIds, [
    "brave-plugin",
    "codex",
    "diagnostics-prometheus",
    "google-meet",
    "diffs",
    "memory-lancedb",
    "whatsapp",
  ]);
  assert.ok(report.fixtures.every((fixture) => report.crabpotContext.fixtureIds.includes(fixture.id)));
});

test("optional resource inventory augments the report without changing compatibility results", async (context) => {
  const directory = await mkdtemp(path.join(tmpdir(), "crabpot-resource-report-"));
  context.after(() => rm(directory, { recursive: true, force: true }));
  // Canonical key order makes this digest independent of the consumer serializer.
  const payload = {
    plugins: [{ declaredSurfaces: {}, distribution: "core", id: "workboard", manifestPath: "extensions/workboard/openclaw.plugin.json", package: null, path: "extensions/workboard" }],
    schemaVersion: 1,
    scope: "source-manifests",
    source: { commit: "a".repeat(40), kind: "git-tree", tree: "b".repeat(40) },
  };
  const pluginInventoryPath = path.join(directory, "inventory.json");
  const inventory = { ...payload, sha256: createHash("sha256").update(JSON.stringify(payload)).digest("hex") };
  await writeFile(pluginInventoryPath, JSON.stringify(inventory));
  const options = { fixtureSet: "openclaw-beta", generatedAt: "test", openclawPath: false };
  const baseline = await buildReport(options);
  const report = await buildReport({ ...options, pluginInventoryPath });
  const { resourceCoverage, ...compatibility } = report;
  assert.deepEqual(compatibility, baseline);
  assert.equal(Object.hasOwn(baseline, "resourceCoverage"), false);
  assert.equal(resourceCoverage.inventory.count, 1);
  assert.equal(resourceCoverage.summary.exercised, 0);
  assert.equal(resourceCoverage.summary.unsupported, 0);
  assert.equal(resourceCoverage.summary.blocked, 1);
  assert.equal(resourceCoverage.plugins[0].reason, "workload-report-not-supplied");
  assert.deepEqual(resourceCoverage.fixtures, { configured: (await readManifest()).fixtures.length, selected: baseline.fixtures.length });
  assert.deepEqual(resourceCoverage.calibration, { status: "blocked", reason: "not-run" });
  const markdown = renderMarkdownReport(report);
  assert.ok(markdown.startsWith(`${renderMarkdownReport(baseline)}\n\n## Plugin Resource Coverage`));
  assert.match(markdown, /workboard \| core \| blocked \| workload-report-not-supplied/);
  assert.equal(renderIssuesReport(report), renderIssuesReport(baseline));
  await assert.rejects(buildReport({ ...options, kitchenSinkResourceReportPath: "unused.json" }), /require --plugin-inventory/);
  const workloadPath = path.join(directory, "workload.json");
  const definition = (await readManifest()).resourceWorkloads.find(({ pluginId }) => pluginId === "workboard");
  await writeFile(workloadPath, JSON.stringify(await runResourceWorkload({ definition, inventory, execute: false })));
  const withWorkload = await buildReport({ ...options, pluginInventoryPath, workloadReportPaths: [workloadPath] });
  assert.equal(withWorkload.resourceCoverage.summary.blocked, 1);
  assert.equal(withWorkload.resourceCoverage.summary.exercised, 0);
  assert.equal(withWorkload.resourceCoverage.workloads[0].reason, "execution-not-requested");
  assert.equal(renderIssuesReport(withWorkload), renderIssuesReport(baseline));
  await assert.rejects(buildReport({ ...options, workloadReportPaths: [workloadPath] }), /require --plugin-inventory/);
});
