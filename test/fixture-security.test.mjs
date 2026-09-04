import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { chmodSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
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

test("fixture security gate treats npm audit timeouts as spawn errors", () => {
  const error = new Error("spawnSync npm ETIMEDOUT");
  error.code = "ETIMEDOUT";
  assert.throws(
    () =>
      parseAuditResult(
        {
          error,
          status: null,
          signal: "SIGTERM",
          stdout: "",
          stderr: "",
        },
        "fixture",
        250,
      ),
    /fixture: npm audit timed out after 250ms/,
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

test("fixture security check returns instead of blocking when npm audit hangs", (t) => {
  const hangDir = mkdtempSync(path.join(os.tmpdir(), "crabpot-npm-audit-hang-"));
  t.after(() => rmSync(hangDir, { force: true, recursive: true }));
  writeHangCommand(hangDir, process.platform === "win32" ? "npm.cmd" : "npm");

  const startedAt = Date.now();
  const result = spawnSync(process.execPath, ["scripts/check-fixture-security.mjs"], {
    cwd: process.cwd(),
    encoding: "utf8",
    env: {
      ...process.env,
      CRABPOT_NPM_TIMEOUT_MS: "250",
      PATH: `${hangDir}${path.delimiter}${process.env.PATH}`,
    },
    timeout: 5_000,
  });

  assert.notEqual(result.error?.code, "ETIMEDOUT", result.error?.message);
  assert.notEqual(result.status, 0);
  assert.match(`${result.stderr}\n${result.stdout}`, /timed out after 250ms/);
  assert.ok(Date.now() - startedAt < 4_000, "hung npm audit must return");
});

function writeHangCommand(dir, name) {
  const file = path.join(dir, name);
  if (process.platform === "win32") {
    writeFileSync(file, `@echo off\r\n"${process.execPath}" -e "setTimeout(() => {}, 30000)"\r\n`);
    return file;
  }

  writeFileSync(file, `#!/bin/sh\nexec "${process.execPath}" -e 'setTimeout(() => {}, 30000)'\n`);
  chmodSync(file, 0o755);
  return file;
}
