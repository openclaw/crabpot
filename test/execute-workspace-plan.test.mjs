import assert from "node:assert/strict";
import { test } from "node:test";
import { validateExecutionRequest, selectWorkspaceSteps } from "../scripts/execute-workspace-plan.mjs";

test("workspace executor selects a narrow fixture scope", () => {
  const plan = {
    fixtures: [
      {
        id: "wecom",
        entrypoints: [
          {
            id: "cold-import.extension:wecom:index",
            packagePath: "plugins/wecom/package.json",
            status: "dependency-install-required",
            steps: [{ kind: "capture", command: "node capture.js", cwd: ".", reason: "capture" }],
          },
        ],
      },
      {
        id: "apify",
        entrypoints: [
          {
            id: "cold-import.extension:apify:index",
            packagePath: "plugins/apify/package.json",
            status: "ts-loader-required",
            steps: [{ kind: "capture", command: "node capture.js", cwd: ".", reason: "capture" }],
          },
        ],
      },
    ],
  };

  assert.deepEqual(
    selectWorkspaceSteps(plan, { fixture: "wecom" }).map((item) => item.fixture),
    ["wecom"],
  );
});

test("workspace executor can narrow to one entrypoint inside a fixture", () => {
  const plan = {
    fixtures: [
      {
        id: "wecom",
        entrypoints: [
          {
            id: "cold-import.extension:wecom:index",
            packagePath: "plugins/wecom/package.json",
            status: "dependency-install-required",
            steps: [{ kind: "capture", command: "node capture-index.js", cwd: ".", reason: "capture" }],
          },
          {
            id: "cold-import.extension:wecom:admin",
            packagePath: "plugins/wecom/package.json",
            status: "dependency-install-required",
            steps: [{ kind: "capture", command: "node capture-admin.js", cwd: ".", reason: "capture" }],
          },
        ],
      },
    ],
  };

  const selected = selectWorkspaceSteps(plan, {
    fixture: "wecom",
    entrypoint: "cold-import.extension:wecom:admin",
  });

  assert.deepEqual(
    selected.map((item) => [item.fixture, item.entrypoint, item.steps[0].command]),
    [["wecom", "cold-import.extension:wecom:admin", "node capture-admin.js"]],
  );
});

test("workspace executor refuses unknown fixture selections", () => {
  const errors = validateExecutionRequest({
    args: { dryRun: true, fixture: "missing" },
    selected: [],
    env: {},
  });

  assert.ok(errors.some((error) => error.includes("selected no entrypoints")));
});

test("workspace executor refuses broad or unguarded execution", () => {
  const selected = [
    {
      fixture: "wecom",
      entrypoint: "cold-import.extension:wecom:index",
      steps: [{ kind: "capture", command: "node capture.js", cwd: ".", reason: "capture" }],
    },
  ];

  assert.ok(
    validateExecutionRequest({ args: { dryRun: false, fixture: null }, selected, env: {} }).some((error) =>
      error.includes("--fixture"),
    ),
  );
  assert.ok(
    validateExecutionRequest({ args: { dryRun: false, fixture: "wecom" }, selected, env: {} }).some((error) =>
      error.includes("CRABPOT_EXECUTE_ISOLATED"),
    ),
  );
  assert.deepEqual(validateExecutionRequest({ args: { dryRun: true, fixture: "wecom" }, selected, env: {} }), []);
  assert.deepEqual(
    validateExecutionRequest({
      args: { dryRun: false, fixture: "wecom" },
      selected,
      env: { CRABPOT_EXECUTE_ISOLATED: "1" },
    }),
    [],
  );
});
