import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { chmodSync, cpSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { createConnection } from "node:net";
import os from "node:os";
import path from "node:path";
import { test } from "node:test";
import {
  lockFixableFindings,
  parseAuditResult,
} from "../scripts/check-fixture-security.mjs";

const repoRoot = path.resolve(import.meta.dirname, "..");
const auditArgs = ["audit", "--package-lock-only", "--omit=dev", "--json"];
const successMessage = "crabpot: no lock-refreshable critical/high fixture vulnerabilities\n";
const MiB = 1024 * 1024;

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
  error.startupTrace = [{ phase: "owner-started", atMs: 1, observedAtMs: 2 }];
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
    (thrown) => {
      assert.equal(thrown.message, "fixture: npm audit timed out after 250ms");
      assert.equal(thrown.code, undefined);
      assert.equal(thrown.cause, error, "retain the same original Error and its trace");
      return true;
    },
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

for (const scenario of [
  {
    name: "accepts a healthy audit",
    report: auditReport(),
    auditStatus: 0,
    checkStatus: 0,
  },
  {
    name: "accepts vulnerability exit 1 without a lock-refreshable finding",
    report: auditReport({
      dependency: { severity: "high", fixAvailable: false, nodes: ["node_modules/dependency"] },
    }),
    auditStatus: 1,
    checkStatus: 0,
  },
  {
    name: "reports lock-refreshable vulnerability evidence from exit 1",
    report: auditReport({
      dependency: { severity: "high", fixAvailable: true, nodes: ["node_modules/dependency"] },
    }),
    auditStatus: 1,
    checkStatus: 1,
    error: /high: fixture: dependency\ncrabpot: 1 critical\/high fixture vulnerability entries/,
  },
  {
    name: "rejects operational exit 1",
    report: { error: { summary: "registry unavailable" } },
    auditStatus: 1,
    checkStatus: 1,
    error: /fixture: npm audit failed: registry unavailable/,
  },
  {
    name: "rejects malformed output even after exit 0",
    stdout: '{"auditReportVersion":',
    auditStatus: 0,
    checkStatus: 1,
    error: /fixture: npm audit did not return JSON:/,
  },
  {
    name: "rejects an unexpected exit status with valid audit JSON",
    report: auditReport(),
    auditStatus: 2,
    checkStatus: 1,
    error: /fixture: npm audit exited with unexpected status 2/,
  },
]) {
  test(`fixture security CLI ${scenario.name}`, (t) => {
    const result = runAuditCli(t, {
      stdout: scenario.stdout ?? JSON.stringify(scenario.report),
      status: scenario.auditStatus,
    });
    assert.equal(result.status, scenario.checkStatus, result.stderr);
    if (scenario.checkStatus === 0) {
      assert.equal(result.stdout, successMessage);
      assert.equal(result.stderr, "");
    } else {
      assert.match(result.stderr, scenario.error);
      assert.equal(result.stdout, "");
    }
  });
}

test("fixture security CLI times out a hung audit despite valid partial output", (t) => {
  const result = runAuditCli(t, { stdout: JSON.stringify(auditReport()), hang: true }, 1_000);
  assert.equal(result.status, 1, result.stderr);
  assert.match(result.stderr, /fixture: npm audit timed out after 1000ms/);
  assert.equal(result.stdout, "");
});

for (const timeout of ["250ms", "1.5", "1e3", "2147483648"]) {
  test(`fixture security CLI rejects invalid timeout ${timeout} before invoking npm`, (t) => {
    const result = runAuditCli(t, { stdout: JSON.stringify(auditReport()) }, timeout, []);
    assert.equal(result.status, 1, result.stderr);
    assert.match(result.stderr, /CRABPOT_NPM_TIMEOUT_MS must be a positive integer timeout/);
    assert.equal(result.stdout, "");
  });
}

for (const [name, stderrBytes, overLimit, stdout = JSON.stringify(auditReport())] of [
  ["accepts output just below the combined 16 MiB limit", 4 * MiB - 1024, false],
  ["rejects output above the combined 16 MiB limit", 4 * MiB + 1024, true],
  ["reports overflow before parsing truncated JSON", 4 * MiB + 1024, true, '{"auditReportVersion":'],
]) {
  test(`fixture security CLI ${name}`, (t) => {
    const result = runAuditCli(t, {
      stdout,
      stdoutBytes: 12 * MiB,
      stderr: "audit diagnostic",
      stderrBytes,
    });
    if (overLimit) {
      assert.equal(result.status, 1, result.stderr);
      assert.match(result.stderr, /ENOBUFS|maxBuffer/);
      assert.doesNotMatch(result.stderr, /did not return JSON|timed out/);
      assert.equal(result.stdout, "");
    } else {
      assert.equal(result.status, 0, result.stderr);
      assert.equal(result.stdout, successMessage);
      assert.equal(result.stderr, "");
    }
  });
}

function auditReport(vulnerabilities = {}) {
  return {
    auditReportVersion: 2,
    vulnerabilities,
    metadata: { vulnerabilities: { total: Object.keys(vulnerabilities).length } },
  };
}

// Only npm is controlled: the real checker and its private command owner run unchanged.
async function controlledAudit() {
  const fs = await import("node:fs");
  const plan = JSON.parse(fs.readFileSync("audit-plan.json", "utf8"));
  if (plan.hang) {
    const { createServer } = await import("node:net");
    setTimeout(() => process.exit(0), 30_000);
    await new Promise((resolve, reject) => {
      const rescue = createServer({ allowHalfOpen: true }, (socket) => {
        socket.once("end", () => process.exit(0));
        socket.resume();
      });
      rescue.once("error", reject);
      rescue.listen(plan.rescuePath, resolve);
    });
  }
  const calls = JSON.parse(fs.readFileSync("audit-calls.json", "utf8"));
  calls.push({ args: process.argv.slice(2) });
  fs.writeFileSync("audit-calls.json", JSON.stringify(calls));
  for (const stream of ["stdout", "stderr"]) {
    const text = Buffer.from(plan[stream] ?? "");
    const output = Buffer.alloc(plan[`${stream}Bytes`] ?? text.length, " ");
    text.copy(output);
    if (output.length > 0) {
      await new Promise((resolve, reject) => {
        process[stream].write(output, (error) => error ? reject(error) : resolve());
      });
    }
  }
  process.exitCode = plan.status ?? 0;
}

function runAuditCli(t, plan, timeout = 5_000, expectedCalls = [auditArgs]) {
  const sandbox = mkdtempSync(path.join(os.tmpdir(), "crabpot-audit-cli-"));
  const root = path.join(sandbox, "repo with spaces");
  const fixture = path.join(root, "plugins", "fixture");
  const bin = path.join(root, "npm bin");
  const callsPath = path.join(fixture, "audit-calls.json");
  const rescuePath = process.platform === "win32"
    ? `\\\\.\\pipe\\${path.basename(sandbox)}`
    : path.join(sandbox, "rescue.sock");
  t.after(async () => {
    // Rescue only after assertions, and await the fixture's exit before removing its files.
    if (plan.hang) {
      await new Promise((resolve, reject) => {
        const socket = createConnection(rescuePath, () => socket.end());
        socket.setTimeout(35_000, () => {
          socket.destroy(new Error("hung audit rescue did not finish"));
        });
        socket.once("error", (error) => {
          if (error.code !== "ENOENT" && error.code !== "ECONNREFUSED") reject(error);
        });
        socket.once("close", resolve);
      });
    }
    rmSync(sandbox, { recursive: true, force: true });
  });
  for (const directory of [fixture, bin, path.join(root, "home"), path.join(root, "tmp")]) {
    mkdirSync(directory, { recursive: true });
  }
  cpSync(path.join(repoRoot, "scripts"), path.join(root, "scripts"), { recursive: true });
  writeFileSync(path.join(fixture, "package-lock.json"), JSON.stringify({
    name: "fixture",
    lockfileVersion: 3,
    packages: { "node_modules/dependency": { version: "1.0.0" } },
  }));
  writeFileSync(path.join(fixture, "audit-plan.json"), JSON.stringify({ ...plan, rescuePath }));
  writeFileSync(callsPath, "[]");
  const runner = path.join(root, "audit.mjs");
  writeFileSync(runner, `await (${controlledAudit.toString()})();\n`);
  const npm = path.join(bin, process.platform === "win32" ? "npm.cmd" : "npm");
  writeFileSync(npm, process.platform === "win32"
    ? `@"${process.execPath}" "${runner}" %*\r\n`
    : `#!/bin/sh\nexec "${process.execPath}" "${runner}" "$@"\n`);
  chmodSync(npm, 0o755);

  const env = Object.fromEntries(Object.entries(process.env)
    .filter(([key]) => !["PATH", "NODE_OPTIONS", "NODE_PATH"].includes(key.toUpperCase())));
  Object.assign(env, {
    // No fallback to an installed npm or a real registry.
    PATH: bin,
    HOME: path.join(root, "home"),
    USERPROFILE: path.join(root, "home"),
    TMPDIR: path.join(root, "tmp"),
    TMP: path.join(root, "tmp"),
    TEMP: path.join(root, "tmp"),
    CRABPOT_NPM_TIMEOUT_MS: String(timeout),
  });
  if (process.platform === "win32") {
    const systemRoot = Object.entries(env).find(([key]) => key.toUpperCase() === "SYSTEMROOT")?.[1];
    assert.ok(systemRoot, "the Windows test requires its real SystemRoot");
    env.PATH += `${path.delimiter}${path.join(systemRoot, "System32")}`;
  }
  const result = spawnSync(process.execPath, ["scripts/check-fixture-security.mjs"], {
    cwd: root,
    env,
    encoding: "utf8",
    timeout: 20_000,
    killSignal: "SIGKILL",
  });
  assert.ifError(result.error);
  assert.equal(result.signal, null, result.stderr);
  const calls = JSON.parse(readFileSync(callsPath, "utf8"));
  assert.deepEqual(calls.map(({ args }) => args), expectedCalls, result.stderr);
  return result;
}
