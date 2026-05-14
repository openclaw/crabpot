import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import path from "node:path";
import { test } from "node:test";
import { repoRoot } from "../scripts/manifest-lib.mjs";
import {
  executionEnvForStep,
  parsePortableStep,
  validateExecutionRequest,
  selectWorkspaceSteps,
} from "../scripts/execute-workspace-plan.mjs";
import { portableCommand } from "../scripts/portable-command.mjs";

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

test("workspace executor skips missing entrypoints unless explicitly selected", () => {
  const plan = {
    fixtures: [
      {
        id: "memory-lancedb",
        entrypoints: [
          {
            id: "cold-import.extension:memory-lancedb:index",
            packagePath: "plugins/memory-lancedb/.crabpot-package/package.json",
            status: "missing",
            steps: [{ kind: "capture", command: "node missing.js", cwd: ".", reason: "capture" }],
          },
          {
            id: "cold-import.runtimeExtension:memory-lancedb:dist-index",
            packagePath: "plugins/memory-lancedb/.crabpot-package/package.json",
            status: "dependency-install-required",
            steps: [{ kind: "capture", command: "node dist.js", cwd: ".", reason: "capture" }],
          },
        ],
      },
    ],
  };

  assert.deepEqual(
    selectWorkspaceSteps(plan, { fixture: "memory-lancedb" }).map((item) => item.entrypoint),
    ["cold-import.runtimeExtension:memory-lancedb:dist-index"],
  );
  assert.deepEqual(
    selectWorkspaceSteps(plan, { dryRun: true, fixture: "memory-lancedb" }).map((item) => item.entrypoint),
    ["cold-import.extension:memory-lancedb:index", "cold-import.runtimeExtension:memory-lancedb:dist-index"],
  );
  assert.deepEqual(
    selectWorkspaceSteps(plan, {
      fixture: "memory-lancedb",
      entrypoint: "cold-import.extension:memory-lancedb:index",
    }).map((item) => item.entrypoint),
    ["cold-import.extension:memory-lancedb:index"],
  );
});

test("workspace executor can select an explicit fixture set", () => {
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
      {
        id: "ignored",
        entrypoints: [
          {
            id: "cold-import.extension:ignored:index",
            packagePath: "plugins/ignored/package.json",
            status: "ready",
            steps: [{ kind: "capture", command: "node capture.js", cwd: ".", reason: "capture" }],
          },
        ],
      },
    ],
  };

  const selected = selectWorkspaceSteps(plan, { fixtureIds: new Set(["wecom", "apify"]) });

  assert.deepEqual(
    selected.map((item) => item.fixture),
    ["wecom", "apify"],
  );
});

test("workspace executor refuses unknown fixture selections", () => {
  const errors = validateExecutionRequest({
    args: { dryRun: true, fixture: "missing" },
    selected: [],
    env: {},
    fixtureExists: false,
  });

  assert.ok(errors.some((error) => error.includes("unknown fixture")));
  assert.ok(errors.some((error) => error.includes("selected no entrypoints")));
});

test("workspace executor allows explicit empty fixture lanes", () => {
  assert.deepEqual(
    validateExecutionRequest({
      args: { allowEmpty: true, dryRun: false, fixture: "metadata-only" },
      selected: [],
      env: { CRABPOT_EXECUTE_ISOLATED: "1" },
    }),
    [],
  );
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
      error.includes("--fixture or --fixture-set"),
    ),
  );
  assert.ok(
    validateExecutionRequest({
      args: { dryRun: false, fixture: "wecom", fixtureSet: "smoke" },
      selected,
      env: { CRABPOT_EXECUTE_ISOLATED: "1" },
    }).some((error) => error.includes("only one")),
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
  assert.deepEqual(
    validateExecutionRequest({
      args: { dryRun: false, fixtureSet: "smoke" },
      selected,
      env: { CRABPOT_EXECUTE_ISOLATED: "1" },
    }),
    [],
  );
});

test("workspace executor converts known shell-shaped steps to portable operations", () => {
  assert.deepEqual(
    parsePortableStep({
      kind: "prepare",
      command: "mkdir -p .crabpot/workspaces/wecom && rsync -a --delete plugins/wecom/ .crabpot/workspaces/wecom/",
      cwd: ".",
    }),
    {
      destination: ".crabpot/workspaces/wecom",
      source: "plugins/wecom",
      type: "copy-workspace",
    },
  );

  assert.deepEqual(
    parsePortableStep({
      kind: "prepare-artifacts",
      command: "mkdir -p .crabpot/results/wecom",
      cwd: ".",
    }),
    {
      path: ".crabpot/results/wecom",
      type: "mkdir",
    },
  );

  assert.deepEqual(
    parsePortableStep({
      kind: "audit",
      command: "npm audit --json > ../../results/wecom/package-audit.json || true",
      cwd: ".crabpot/workspaces/wecom",
    }),
    {
      args: ["audit", "--json"],
      command: "npm",
      env: {},
      outputPath: "../../results/wecom/package-audit.json",
      type: "audit",
    },
  );
});

test("workspace executor parses env-prefixed capture commands without a shell", () => {
  assert.deepEqual(
    parsePortableStep({
      kind: "capture",
      command:
        "CRABPOT_EXECUTE_ISOLATED=1 node --import tsx ../../../scripts/run-cold-import-capture.mjs ./index.ts --mock-sdk --output ../../results/a2a-gateway/out.capture.json",
      cwd: ".crabpot/workspaces/a2a-gateway",
    }),
    {
      args: [
        "--import",
        "tsx",
        "../../../scripts/run-cold-import-capture.mjs",
        "./index.ts",
        "--mock-sdk",
        "--output",
        "../../results/a2a-gateway/out.capture.json",
      ],
      command: "node",
      env: {
        CRABPOT_EXECUTE_ISOLATED: "1",
      },
      type: "process",
    },
  );

  assert.deepEqual(
    parsePortableStep({
      kind: "link-openclaw",
      command: 'pnpm pkg set dependencies.openclaw="file:../../../openclaw"',
      cwd: ".crabpot/workspaces/agentchat",
    }),
    {
      args: ["pkg", "set", "dependencies.openclaw=file:../../../openclaw"],
      command: "pnpm",
      env: {},
      type: "process",
    },
  );
});

test("workspace executor resolves package manager shims portably", () => {
  assert.equal(portableCommand("npm", "win32"), "npm.cmd");
  assert.equal(portableCommand("pnpm", "win32"), "pnpm.cmd");
  assert.equal(portableCommand("node", "win32"), "node");
  assert.equal(portableCommand("npm", "darwin"), "npm");
});

test("workspace executor gives process steps fixture-scoped home directories", () => {
  const env = executionEnvForStep(
    {
      kind: "capture",
      command: "node capture.js",
      cwd: ".crabpot/workspaces/clawrouter",
    },
    { CUSTOM_ENV: "fixture" },
  );

  assert.equal(env.CUSTOM_ENV, "fixture");
  assert.equal(env.CRABPOT_EXECUTE_ISOLATED, "1");
  assert.match(env.HOME, /\.crabpot[/\\]home[/\\]clawrouter$/);
  assert.equal(env.USERPROFILE, env.HOME);
  assert.equal(env.OPENCLAW_HOME, path.join(env.HOME, ".openclaw"));
});

test("workspace executor CLI emits a narrow dry-run plan", () => {
  const result = spawnSync(
    process.execPath,
    ["scripts/execute-workspace-plan.mjs", "--fixture", "wecom", "--dry-run", "--no-openclaw"],
    {
      cwd: repoRoot,
      encoding: "utf8",
    },
  );

  assert.equal(result.status, 0, result.stderr);
  const parsed = JSON.parse(result.stdout);
  assert.equal(parsed.mode, "dry-run");
  assert.ok(parsed.selected.length > 0);
  assert.ok(parsed.selected.every((item) => item.fixture === "wecom"));
  assert.ok(parsed.selected.every((item) => item.steps.every((step) => step.command && step.reason)));
});

test("workspace executor CLI rejects broad dry-runs before materializing work", () => {
  const result = spawnSync(process.execPath, ["scripts/execute-workspace-plan.mjs", "--dry-run", "--no-openclaw"], {
    cwd: repoRoot,
    encoding: "utf8",
  });

  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /workspace execution requires --fixture/);
});
