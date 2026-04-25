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
