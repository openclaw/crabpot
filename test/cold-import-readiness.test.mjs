import assert from "node:assert/strict";
import { mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { test } from "node:test";
import { buildColdImportReadiness, validateColdImportReadiness } from "../scripts/cold-import-readiness.mjs";
import { repoRoot } from "../scripts/manifest-lib.mjs";
import { buildReport } from "../scripts/report-lib.mjs";

test("cold import readiness classifies entrypoint blockers", async () => {
  const report = await buildReport({ generatedAt: "test" });
  const readiness = await buildColdImportReadiness({ report });

  assert.deepEqual(validateColdImportReadiness(readiness), []);
  assert.ok(readiness.summary.entrypointCount > 0);
  assert.ok(readiness.summary.blockedCount > 0);
  assert.ok(readiness.summary.tsLoaderRequiredCount > 0);
  assert.ok(readiness.summary.buildRequiredCount > 0);
  assert.ok(readiness.summary.dependencyInstallRequiredCount > 0);
  assert.ok(readiness.summary.sdkAliasRequiredCount > 0);

  assertHasStatus(readiness, "wecom", "dependency-install-required");
  assertHasStatus(readiness, "agentchat", "build-required");
  assertHasStatus(readiness, "a2a-gateway", "ts-loader-required");
  assertHasStatus(readiness, "codex-app-server", "sdk-alias-required");
});

test("cold import readiness validation requires blocker evidence", () => {
  const readiness = {
    fixtures: [
      {
        id: "fixture",
        entrypoints: [
          {
            id: "cold-import.extension:fixture:index",
            path: "plugins/fixture/index.ts",
            status: "ts-loader-required",
            blockers: [{ code: "ts-loader-required" }],
            assertions: [],
          },
        ],
      },
    ],
  };

  const errors = validateColdImportReadiness(readiness);
  assert.ok(errors.some((error) => error.includes("missing cold-import assertions")));
  assert.ok(errors.some((error) => error.includes("blocker is missing code or evidence")));
});

test("cold import readiness classifies side effects, unknown loaders, and ready entrypoints", async (t) => {
  const fixtureRoot = path.join(repoRoot, ".crabpot/test-cold-import-readiness");
  await rm(fixtureRoot, { recursive: true, force: true });
  await mkdir(fixtureRoot, { recursive: true });
  t.after(() => rm(fixtureRoot, { recursive: true, force: true }));

  const readyPath = ".crabpot/test-cold-import-readiness/ready.js";
  const sideEffectPath = ".crabpot/test-cold-import-readiness/side-effect.js";
  const unknownPath = ".crabpot/test-cold-import-readiness/loader.custom";
  await writeFile(path.join(repoRoot, readyPath), "export function register() {}\n", "utf8");
  await writeFile(path.join(repoRoot, sideEffectPath), "process.env.SECRET; export function register() {}\n", "utf8");
  await writeFile(path.join(repoRoot, unknownPath), "export function register() {}\n", "utf8");

  const readiness = await buildColdImportReadiness({
    report: readinessReport([
      { kind: "extension", specifier: "./ready.js", relativePath: readyPath, exists: true },
      { kind: "extension", specifier: "./side-effect.js", relativePath: sideEffectPath, exists: true },
      { kind: "extension", specifier: "./loader.custom", relativePath: unknownPath, exists: true },
    ]),
  });
  const entrypoints = readiness.fixtures[0].entrypoints;

  assert.deepEqual(validateColdImportReadiness(readiness), []);
  assert.equal(entrypoints.find((entrypoint) => entrypoint.path === readyPath).status, "ready");
  assert.equal(entrypoints.find((entrypoint) => entrypoint.path === sideEffectPath).status, "review-required");
  assert.equal(entrypoints.find((entrypoint) => entrypoint.path === unknownPath).status, "review-required");
  assert.ok(
    entrypoints
      .find((entrypoint) => entrypoint.path === sideEffectPath)
      .blockers.some((blocker) => blocker.code === "top-level-side-effect-review"),
  );
  assert.ok(
    entrypoints
      .find((entrypoint) => entrypoint.path === unknownPath)
      .blockers.some((blocker) => blocker.code === "unknown-entrypoint-extension"),
  );
});

function assertHasStatus(readiness, fixtureId, status) {
  const fixture = readiness.fixtures.find((item) => item.id === fixtureId);
  assert.ok(
    fixture?.entrypoints.some((entrypoint) => entrypoint.status === status),
    `expected ${fixtureId} to have ${status} entrypoint`,
  );
}

function readinessReport(entrypoints) {
  return {
    generatedAt: "test",
    targetOpenClaw: {
      status: "ok",
      configuredPath: "../openclaw",
      sdkExports: ["openclaw/plugin-sdk"],
      sdkExportCount: 1,
    },
    fixtures: [
      {
        id: "fixture",
        priority: "high",
        sdkImportDetails: [],
        packages: [
          {
            path: "plugins/fixture/package.json",
            dependencies: [],
            peerDependencies: [],
            optionalDependencies: [],
            openclaw: {
              entrypoints,
            },
          },
        ],
      },
    ],
  };
}
