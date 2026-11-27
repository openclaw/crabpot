import assert from "node:assert/strict";
import { test } from "node:test";
import { normalizeWorkspaceInstallSteps } from "../scripts/workspace-plan.mjs";

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
