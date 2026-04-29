import assert from "node:assert/strict";
import { test } from "node:test";
import { buildColdImportReadiness } from "../scripts/cold-import-readiness.mjs";
import { buildReport } from "../scripts/report-lib.mjs";
import { buildWorkspacePlan, validateWorkspacePlan } from "../scripts/workspace-plan.mjs";

test("workspace plan maps blocked entrypoints to opt-in install/build/capture steps", async () => {
  const report = await buildReport({ generatedAt: "test" });
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
  assert.ok(wecom.steps.some((step) => step.kind === "link-openclaw" && step.command.includes("dependencies.openclaw")));
  assert.ok(wecom.steps.some((step) => step.kind === "install" && step.command === "npm install --ignore-scripts"));
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

test("workspace plan validation keeps execution opt-in and explicit", () => {
  const plan = {
    mode: "execute",
    optIn: { env: "NOPE=1" },
    fixtures: [
      {
        id: "fixture",
        entrypoints: [
          {
            id: "cold-import.extension:fixture:index",
            packagePath: "plugins/fixture/package.json",
            entrypoint: "plugins/fixture/index.js",
            loaderStrategy: { primary: "node", alternatives: [], reason: "test" },
            requiredCapabilities: ["dependency-install"],
            blockers: [],
            steps: [{ kind: "capture", command: "node capture.js", cwd: ".", reason: "capture" }],
          },
        ],
      },
    ],
  };

  const errors = validateWorkspacePlan(plan);
  assert.ok(errors.some((error) => error.includes("plan-only")));
  assert.ok(errors.some((error) => error.includes("CRABPOT_EXECUTE_ISOLATED")));
  assert.ok(errors.some((error) => error.includes("missing prepare step")));
  assert.ok(errors.some((error) => error.includes("dependency install capability has no install step")));
  assert.ok(errors.some((error) => error.includes("dependency install capability has no audit step")));

  plan.fixtures[0].entrypoints[0].loaderStrategy = null;
  const loaderErrors = validateWorkspacePlan(plan);
  assert.ok(loaderErrors.some((error) => error.includes("missing loader strategy")));
  plan.fixtures[0].entrypoints[0].loaderStrategy = { primary: "node", alternatives: [], reason: "test" };

  plan.fixtures[0].entrypoints[0].requiredCapabilities = ["target-openclaw-link"];
  const linkErrors = validateWorkspacePlan(plan);
  assert.ok(linkErrors.some((error) => error.includes("target-openclaw-link capability has no link-openclaw step")));

  plan.fixtures[0].entrypoints[0].requiredCapabilities = ["build", "ts-loader"];
  const buildErrors = validateWorkspacePlan(plan);
  assert.ok(buildErrors.some((error) => error.includes("build capability has no build step")));
  assert.ok(buildErrors.some((error) => error.includes("jiti fallback")));

  plan.fixtures[0].entrypoints[0].requiredCapabilities = [];
  plan.fixtures[0].entrypoints[0].steps = [{ kind: "prepare", command: "", cwd: ".", reason: "" }];
  const stepErrors = validateWorkspacePlan(plan);
  assert.ok(stepErrors.some((error) => error.includes("prepare step missing command, cwd, or reason")));
});

function entrypointFor(plan, fixtureId) {
  const entrypoint = plan.fixtures.find((fixture) => fixture.id === fixtureId)?.entrypoints[0];
  assert.ok(entrypoint, `expected ${fixtureId} entrypoint plan`);
  return entrypoint;
}
