import assert from "node:assert/strict";
import { test } from "node:test";
import { buildColdImportReadiness } from "../../scripts/cold-import-readiness.mjs";
import { buildWorkspacePlan, validateWorkspacePlan } from "../../scripts/workspace-plan.mjs";
import { buildCorpusReport as buildReport, testReportOptions } from "./report-fixture.mjs";

test("workspace plan maps blocked entrypoints to opt-in install/build/capture steps", async () => {
  const report = await buildReport(testReportOptions());
  const readiness = await buildColdImportReadiness({ report });
  const plan = await buildWorkspacePlan({ report, readiness });

  assert.deepEqual(validateWorkspacePlan(plan), []);
  assert.equal(plan.mode, "plan-only");
  assert.equal(plan.optIn.env, "CRABPOT_EXECUTE_ISOLATED=1");
  assert.ok(plan.summary.entrypointCount > 0);
  assert.equal(plan.summary.artifactStepCount, plan.summary.entrypointCount);
  assert.ok(plan.summary.installStepCount > 0);
  assert.equal(plan.summary.auditStepCount, plan.summary.installStepCount);
  assert.ok(plan.summary.buildStepCount > 0);
  assert.ok(plan.summary.captureStepCount > 0);
  assert.equal(plan.summary.syntheticProbeStepCount, plan.summary.entrypointCount);
  assert.ok(plan.summary.targetOpenClawLinkStepCount > 0);
  assert.ok(plan.summary.tsLoaderEntrypointCount > 0);
  assert.equal(plan.summary.jitiAlternativeCount, plan.summary.tsLoaderEntrypointCount);

  const wecom = entrypointFor(plan, "wecom");
  assert.equal(wecom.packageManager, "npm");
  assert.equal(wecom.lockfile, "plugins/wecom/package-lock.json");
  assert.ok(wecom.requiredCapabilities.includes("target-openclaw-link"));
  assert.ok(
    wecom.steps.some(
      (step) =>
        step.kind === "link-openclaw" &&
        step.command.includes("link-openclaw-workspace-cli.js") &&
        /\bfile:\S*openclaw\b/.test(step.command),
    ),
  );
  assert.ok(
    wecom.steps.some(
      (step) => step.kind === "install" && step.command === "npm install --ignore-scripts --legacy-peer-deps",
    ),
  );
  assert.ok(
    wecom.steps.some(
      (step) => step.kind === "audit" && step.command.includes("npm audit --json") && step.artifactPath,
    ),
  );
  assert.ok(wecom.steps.some((step) => step.kind === "prepare-artifacts" && step.command.includes(".crabpot/results/wecom")));
  assert.ok(
    wecom.steps.some(
      (step) => step.kind === "capture" && step.command.includes("--output ../../results/wecom/") && step.artifactPath,
    ),
  );
  assert.ok(
    wecom.steps.some(
      (step) =>
        step.kind === "synthetic-probe" &&
        step.command.includes("synthetic-probes.mjs") &&
        step.command.includes("--output ../../results/wecom/") &&
        step.artifactPath,
    ),
  );

  const codex = entrypointFor(plan, "codex-app-server");
  assert.ok(codex.requiredCapabilities.includes("ts-loader"));
  assert.equal(codex.loaderStrategy.primary, "tsx");
  assert.ok(codex.loaderStrategy.alternatives.includes("jiti"));

  if (report.issues.some((issue) => issue.code === "sdk-export-missing")) {
    assert.ok(
      plan.fixtures.some((fixture) =>
        fixture.entrypoints.some((entrypoint) => entrypoint.requiredCapabilities.includes("sdk-alias-compat")),
      ),
      "expected an sdk-export-missing fixture to require sdk-alias-compat",
    );
  }

  const hasdata = entrypointFor(plan, "hasdata");
  assert.ok(hasdata.requiredCapabilities.includes("side-effect-sandbox"));
  assert.ok(hasdata.blockers.some((blocker) => blocker.code === "top-level-side-effect-review"));
  assert.ok(hasdata.steps.some((step) => step.kind === "capture" && step.command.includes("run-cold-import-capture.mjs")));
});

function entrypointFor(plan, fixtureId) {
  const entrypoint = plan.fixtures.find((fixture) => fixture.id === fixtureId)?.entrypoints[0];
  assert.ok(entrypoint, `expected ${fixtureId} entrypoint plan`);
  return entrypoint;
}
