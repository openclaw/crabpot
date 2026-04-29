import assert from "node:assert/strict";
import { test } from "node:test";
import { buildPlatformProbes, renderPlatformProbesMarkdown, validatePlatformProbes } from "../scripts/platform-probes.mjs";

test("platform probes classify loader and shell portability risks", async () => {
  const report = await buildPlatformProbes({
    plan: {
      generatedAt: "test",
      mode: "plan-only",
      summary: {
        fixtureCount: 1,
      },
      fixtures: [
        {
          id: "fixture",
          entrypoints: [
            {
              id: "cold-import.extension:fixture:index",
              status: "ts-loader-required",
              entrypoint: "plugins/fixture/src/index.ts",
              packageManager: "pnpm",
              loaderStrategy: {
                source: "typescript-source",
                primary: "tsx",
                alternatives: ["jiti"],
                reason: "test",
              },
              steps: [
                {
                  kind: "prepare",
                  command: "mkdir -p .crabpot/workspaces/fixture && rsync -a --delete plugins/fixture/ .crabpot/workspaces/fixture/",
                },
                {
                  kind: "install",
                  command: "pnpm install --ignore-scripts",
                },
                {
                  kind: "capture",
                  command: "CRABPOT_EXECUTE_ISOLATED=1 node --import tsx ../../../scripts/run-cold-import-capture.mjs ./src/index.ts",
                },
                {
                  kind: "synthetic-probe",
                  command: "CRABPOT_EXECUTE_ISOLATED=1 node --import tsx ../../../scripts/synthetic-probes.mjs --entrypoint ./src/index.ts",
                },
              ],
            },
          ],
        },
      ],
    },
  });

  assert.deepEqual(validatePlatformProbes(report), []);
  assert.equal(report.summary.tsLoaderEntrypointCount, 1);
  assert.equal(report.summary.jitiAlternativeCount, 1);
  assert.equal(report.summary.windowsRiskStepCount, 1);
  assert.equal(report.summary.containerRiskStepCount, 1);
  assert.ok(report.summary.coveredPortabilityFindingCount > 0);
  assert.ok(report.coveredPortabilityFindings.every((finding) => finding.coverage === "covered by Crabpot structured executor"));
  assert.match(renderPlatformProbesMarkdown(report), /Jiti/);
  assert.doesNotMatch(renderPlatformProbesMarkdown(report), /replace shell mkdir/);
  assert.match(renderPlatformProbesMarkdown(report), /Covered Portability Findings/);
});
