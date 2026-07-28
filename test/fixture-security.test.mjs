import assert from "node:assert/strict";
import { test } from "node:test";
import {
  lockFixableFindings,
  parseAuditResult,
} from "../scripts/check-fixture-security.mjs";

test("fixture security gate blocks only lock-refreshable critical and high findings", () => {
  assert.deepEqual(
    lockFixableFindings(
      {
        vulnerabilities: {
          axios: { severity: "high", fixAvailable: { name: "fixture", version: "2.0.0" } },
          bundled: {
            severity: "high",
            fixAvailable: true,
            nodes: ["node_modules/fixture/node_modules/bundled"],
          },
          mixed: {
            severity: "high",
            fixAvailable: true,
            nodes: ["node_modules/mixed", "node_modules/fixture/node_modules/mixed"],
          },
          "fast-uri": {
            severity: "high",
            fixAvailable: true,
            nodes: ["node_modules/fast-uri"],
          },
          tar: {
            severity: "critical",
            fixAvailable: true,
            nodes: ["node_modules/tar"],
          },
          undici: { severity: "moderate", fixAvailable: true },
          unpatched: { severity: "critical", fixAvailable: false },
        },
      },
      {
        packages: {
          "node_modules/fixture": { hasShrinkwrap: true },
          "node_modules/fixture/node_modules/bundled": { version: "1.0.0" },
          "node_modules/fixture/node_modules/mixed": { version: "1.0.0" },
          "node_modules/fast-uri": { version: "3.1.2" },
          "node_modules/mixed": { version: "1.0.0" },
          "node_modules/tar": { version: "7.5.16" },
        },
      },
    ),
    [
      { name: "fast-uri", severity: "high" },
      { name: "mixed", severity: "high" },
      { name: "tar", severity: "critical" },
    ],
  );
});

test("fixture security gate rejects npm audit operational errors", () => {
  assert.throws(
    () =>
      parseAuditResult(
        {
          status: 1,
          signal: null,
          stdout: JSON.stringify({ error: { summary: "registry unavailable" } }),
          stderr: "",
        },
        "fixture",
      ),
    /fixture: npm audit failed: registry unavailable/,
  );
});

test("fixture security gate accepts vulnerability audit exit status", () => {
  const audit = {
    auditReportVersion: 2,
    vulnerabilities: {},
    metadata: { vulnerabilities: { total: 1 } },
  };
  assert.deepEqual(
    parseAuditResult(
      {
        status: 1,
        signal: null,
        stdout: JSON.stringify(audit),
        stderr: "",
      },
      "fixture",
    ),
    audit,
  );
});
