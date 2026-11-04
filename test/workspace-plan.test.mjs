import assert from "node:assert/strict";
import { test } from "node:test";
import { normalizeWorkspaceInstallSteps, validateWorkspacePlan } from "../scripts/workspace-plan.mjs";

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

test("workspace plan npm install steps tolerate peer drift in isolated probes", () => {
  const plan = normalizeWorkspaceInstallSteps({
    fixtures: [
      {
        id: "fixture",
        entrypoints: [
          {
            steps: [
              {
                kind: "install",
                command: "npm install --ignore-scripts",
                reason: "install runtime dependencies without mutating the pinned submodule",
              },
              {
                kind: "install",
                command: "pnpm install --ignore-scripts",
                reason: "install runtime dependencies without mutating the pinned submodule",
              },
            ],
          },
        ],
      },
    ],
  });

  assert.equal(
    plan.fixtures[0].entrypoints[0].steps[0].command,
    "npm install --ignore-scripts --legacy-peer-deps",
  );
  assert.match(plan.fixtures[0].entrypoints[0].steps[0].reason, /peer-range drift/);
  assert.equal(plan.fixtures[0].entrypoints[0].steps[1].command, "pnpm install --ignore-scripts");
});
