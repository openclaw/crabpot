import assert from "node:assert/strict";
import { test } from "node:test";
import { buildRefDiff, renderRefDiffMarkdown, validateRefDiff } from "../scripts/compare-openclaw-refs.mjs";

test("ref diff fails removed plugin-facing hooks and SDK exports", async () => {
  const baseReport = reportFixture({
    hookNames: ["llm_input", "llm_output"],
    sdkExports: ["openclaw/plugin-sdk", "openclaw/plugin-sdk/speech"],
  });
  const headReport = reportFixture({
    hookNames: ["llm_input"],
    sdkExports: ["openclaw/plugin-sdk"],
  });

  const diff = await buildRefDiff({ baseReport, headReport, baseLabel: "stable", headLabel: "candidate" });

  assert.equal(diff.status, "fail");
  assert.ok(validateRefDiff(diff).some((error) => error.includes("hookNames.removed-used")));
  assert.ok(validateRefDiff(diff).some((error) => error.includes("sdkExports.removed-used")));
  assert.match(renderRefDiffMarkdown(diff), /Removed used/);
});

test("ref diff reports new P1 issues as hard regressions", async () => {
  const baseReport = reportFixture({ issues: [] });
  const headReport = reportFixture({
    issues: [
      {
        id: "CRABPOT-NEWP1",
        fixture: "fixture",
        severity: "P1",
        code: "sdk-export-missing",
        title: "plugin SDK import aliases are missing from target package exports",
        evidence: ["openclaw/plugin-sdk/example"],
      },
    ],
  });

  const diff = await buildRefDiff({ baseReport, headReport });

  assert.equal(diff.summary.newP1IssueCount, 1);
  assert.ok(validateRefDiff(diff).some((error) => error.includes("CRABPOT-NEWP1")));
});

test("ref diff strict mode escalates warning regressions", async () => {
  const baseReport = reportFixture({
    sdkExports: ["openclaw/plugin-sdk", "openclaw/plugin-sdk/speech", "openclaw/plugin-sdk/unused"],
  });
  const headReport = reportFixture({
    sdkExports: ["openclaw/plugin-sdk", "openclaw/plugin-sdk/speech"],
  });

  const diff = await buildRefDiff({ baseReport, headReport });

  assert.equal(diff.status, "pass");
  assert.equal(diff.summary.warningRegressionCount, 1);
  assert.deepEqual(validateRefDiff(diff), []);
  assert.match(validateRefDiff(diff, { strict: true }).join("\n"), /sdkExports\.removed-unused/);
});

test("ref diff fails when target OpenClaw status regresses", async () => {
  const baseReport = reportFixture();
  const headReport = reportFixture({ targetStatus: "missing" });

  const diff = await buildRefDiff({ baseReport, headReport });

  assert.equal(diff.status, "fail");
  assert.match(validateRefDiff(diff).join("\n"), /target\.status\.changed/);
});

function reportFixture(overrides = {}) {
  const targetOpenClaw = {
    status: overrides.targetStatus ?? "ok",
    configuredPath: "../openclaw",
    compatRecords: overrides.compatRecords ?? ["legacy-root-sdk-import"],
    hookNames: overrides.hookNames ?? ["llm_input", "llm_output"],
    apiRegistrars: overrides.apiRegistrars ?? ["registerService"],
    capturedRegistrars: overrides.capturedRegistrars ?? ["registerService"],
    sdkExports: overrides.sdkExports ?? ["openclaw/plugin-sdk", "openclaw/plugin-sdk/speech"],
    manifestFields: overrides.manifestFields ?? ["id", "name", "configSchema"],
    manifestContractFields: overrides.manifestContractFields ?? ["tools"],
  };

  return {
    status: "pass",
    targetOpenClaw: {
      ...targetOpenClaw,
      compatRecordCount: targetOpenClaw.compatRecords.length,
      hookNameCount: targetOpenClaw.hookNames.length,
      apiRegistrarCount: targetOpenClaw.apiRegistrars.length,
      capturedRegistrarCount: targetOpenClaw.capturedRegistrars.length,
      sdkExportCount: targetOpenClaw.sdkExports.length,
      manifestFieldCount: targetOpenClaw.manifestFields.length,
      manifestContractFieldCount: targetOpenClaw.manifestContractFields.length,
    },
    summary: {
      breakageCount: 0,
      warningCount: 0,
      suggestionCount: 0,
      issueCount: overrides.issues?.length ?? 0,
      p0IssueCount: overrides.issues?.filter((issue) => issue.severity === "P0").length ?? 0,
      p1IssueCount: overrides.issues?.filter((issue) => issue.severity === "P1").length ?? 0,
      contractProbeCount: 0,
    },
    fixtures: [
      {
        hooks: ["llm_output"],
        registrations: ["registerService"],
        sdkImports: ["openclaw/plugin-sdk/speech"],
        manifestContracts: ["tools"],
        pluginManifests: [{ id: "fixture", name: "Fixture", configSchema: {} }],
      },
    ],
    issues: overrides.issues ?? [],
  };
}
