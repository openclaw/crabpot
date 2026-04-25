import assert from "node:assert/strict";
import { mkdir, mkdtemp, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { test } from "node:test";
import { buildExecutionResultsReport } from "../scripts/summarize-execution-results.mjs";

test("execution results summarize capture and synthetic artifacts", async () => {
  const dir = await mkdtemp(path.join(os.tmpdir(), "crabpot-results-"));
  const fixtureDir = path.join(dir, "wecom");
  await mkdir(fixtureDir);
  await writeFile(
    path.join(fixtureDir, "entry.capture.json"),
    JSON.stringify({
      entrypoint: "/repo/.crabpot/workspaces/wecom/index.js",
      status: "captured",
      captured: [{ kind: "hook", name: "before_tool_call" }],
    }),
    "utf8",
  );
  await writeFile(
    path.join(fixtureDir, "entry.synthetic.json"),
    JSON.stringify({
      entrypoint: "/repo/.crabpot/workspaces/wecom/index.js",
      status: "captured",
      summary: { probeCount: 2, passCount: 1, failCount: 0, blockedCount: 1 },
      results: [
        { kind: "hook", seam: "before_tool_call", label: "before_tool_call", status: "pass" },
        {
          kind: "registration",
          seam: "registerChannel",
          label: "registerChannel",
          status: "blocked",
          reason: "channel runtime opt-in",
        },
      ],
    }),
    "utf8",
  );
  await writeFile(
    path.join(fixtureDir, "package-audit.json"),
    JSON.stringify({
      metadata: {
        vulnerabilities: {
          info: 0,
          low: 1,
          moderate: 2,
          high: 3,
          critical: 0,
          total: 6,
        },
      },
    }),
    "utf8",
  );

  const report = await buildExecutionResultsReport({ resultsDir: dir });

  assert.equal(report.summary.artifactCount, 3);
  assert.equal(report.summary.auditArtifactCount, 1);
  assert.equal(report.summary.auditFindingCount, 6);
  assert.equal(report.summary.capturedRegistrationCount, 1);
  assert.equal(report.summary.passCount, 1);
  assert.equal(report.summary.blockedCount, 1);
  assert.equal(report.artifacts.find((artifact) => artifact.kind === "synthetic").blocked[0].seam, "registerChannel");
  assert.equal(report.artifacts.find((artifact) => artifact.kind === "audit").findingCount, 6);
});

test("execution results count total-only audit metadata", async () => {
  const dir = await mkdtemp(path.join(os.tmpdir(), "crabpot-results-"));
  const fixtureDir = path.join(dir, "minimal");
  await mkdir(fixtureDir);
  await writeFile(
    path.join(fixtureDir, "package-audit.json"),
    JSON.stringify({
      metadata: {
        vulnerabilities: {
          total: 4,
        },
      },
    }),
    "utf8",
  );

  const report = await buildExecutionResultsReport({ resultsDir: dir });

  assert.equal(report.summary.auditFindingCount, 4);
  assert.equal(report.artifacts[0].findingCount, 4);
});
