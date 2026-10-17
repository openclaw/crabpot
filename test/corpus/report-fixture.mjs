import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { repoRoot } from "../../scripts/manifest-lib.mjs";
import { buildReportFromInspection, inspectReport } from "../../scripts/report-lib.mjs";

// These immutable fixture inputs live only for this corpus test process.
const inspections = new Map();

export function testReportOptions() {
  return { generatedAt: "test", openclawPath: process.env.CRABPOT_TEST_OPENCLAW_PATH };
}

export async function buildCorpusReport(options = {}) {
  const selected = { ...testReportOptions(), ...options };
  const executionPath = selected.executionResultsPath && path.resolve(repoRoot, selected.executionResultsPath);
  const input = {
    generatedAt: selected.generatedAt,
    fixtureSet: selected.fixtureSet ?? process.env.CRABPOT_FIXTURE_SET ?? "all",
    openclawPath: selected.openclawPath,
    executionResults: selected.executionResults ?? (executionPath && existsSync(executionPath)
      ? JSON.parse(readFileSync(executionPath, "utf8")) : null),
    executionResultsPath: selected.executionResultsPath,
  };
  const key = JSON.stringify(input);
  if (!inspections.has(key)) {
    inspections.set(key, inspectReport(input).then((inspection) => structuredClone(inspection)));
  }
  // Tests may mutate derived reports; neither the shared input nor other tests
  // should inherit those mutations. Decoration files are read fresh each time.
  return buildReportFromInspection(structuredClone(await inspections.get(key)), selected);
}
