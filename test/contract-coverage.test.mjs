import assert from "node:assert/strict";
import { test } from "node:test";
import { validateContractCoverage } from "../scripts/check-contract-coverage.mjs";
import { buildReport } from "../scripts/report-lib.mjs";

test("current report satisfies contract coverage gates", async () => {
  const report = await buildReport({ generatedAt: "test", openclawPath: false });

  assert.deepEqual(validateContractCoverage(report), []);
});

test("contract coverage fails missing evidence and P1 probe gaps", () => {
  const report = {
    breakages: [],
    warnings: [],
    suggestions: [],
    logs: [],
    targetOpenClaw: { status: "disabled" },
    fixtures: [
      {
        id: "fixture",
        hooks: ["before_tool_call"],
        hookDetails: [],
        registrations: ["registerService"],
        registrationDetails: [],
        manifestContracts: [],
        manifestFiles: [],
      },
    ],
    issues: [
      {
        id: "CRABPOT-0001",
        fixture: "fixture",
        severity: "P1",
        evidence: [],
      },
    ],
    contractProbes: [],
  };

  const errors = validateContractCoverage(report);
  assert.ok(errors.some((error) => error.includes("missing evidence")));
  assert.ok(errors.some((error) => error.includes("P1 issue has no contract probe")));
  assert.ok(errors.some((error) => error.includes("hook before_tool_call has no source evidence")));
  assert.ok(errors.some((error) => error.includes("registration registerService has no source evidence")));
});

test("contract coverage requires parsed target hook registry when OpenClaw is available", () => {
  const report = {
    breakages: [],
    warnings: [],
    suggestions: [],
    logs: [],
    targetOpenClaw: {
      status: "ok",
      hookNames: [],
      apiRegistrars: [],
      capturedRegistrars: [],
      manifestFields: [],
      manifestContractFields: [],
    },
    fixtures: [],
    issues: [],
    contractProbes: [],
  };

  assert.deepEqual(validateContractCoverage(report), [
    "target OpenClaw hook registry was found but no hook names were parsed",
    "target OpenClaw API builder was found but no api.register* names were parsed",
    "target OpenClaw captured-registration helper was found but no api.register* names were parsed",
    "target OpenClaw manifest types were found but no PluginManifest fields were parsed",
    "target OpenClaw manifest types were found but no PluginManifestContracts fields were parsed",
  ]);
});
