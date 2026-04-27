import assert from "node:assert/strict";
import { test } from "node:test";
import { buildRuntimeProfile, renderRuntimeProfileMarkdown, validateRuntimeProfile } from "../scripts/profile-contract-runtime.mjs";

test("runtime profile records boot time and target registry surface", async () => {
  const report = {
    targetOpenClaw: {
      status: "ok",
      configuredPath: "../openclaw",
      compatRecordCount: 2,
      hookNameCount: 3,
      apiRegistrarCount: 4,
      capturedRegistrarCount: 5,
      sdkExportCount: 6,
      manifestFieldCount: 7,
      manifestContractFieldCount: 8,
    },
    fixtures: [
      {
        hooks: ["before_tool_call"],
        registrations: ["registerTool"],
        sdkImports: ["openclaw/plugin-sdk"],
      },
    ],
    summary: {
      contractProbeCount: 9,
      issueCount: 10,
    },
  };
  const inspection = {
    inspections: [{ sourceFiles: ["plugins/fixture/index.js"] }],
  };
  const profile = await buildRuntimeProfile({
    generatedAt: "test",
    runs: 1,
    report,
    inspection,
    openclawPath: false,
  });

  assert.deepEqual(validateRuntimeProfile(profile), []);
  assert.equal(profile.targetOpenClaw.compatRecords, 2);
  assert.equal(profile.fixtureInventory.sourceFiles, 1);
  assert.equal(profile.platform.os, process.platform);
  assert.ok(profile.summary.maxCpuMsEstimate >= 0);
  assert.ok(Number.isFinite(profile.summary.maxHarnessHeapDeltaMb));
  assert.ok(profile.commands.some((command) => command.id === "node-boot" && command.wallMs.max > 0));
  assert.ok(profile.commands.some((command) => command.id === "platform-probes"));
  assert.ok(profile.commands.some((command) => command.id === "import-loop-profile"));
  assert.ok(profile.groups.some((group) => group.category === "target-registry" && group.commands.includes("compat-report-registry")));
  assert.ok(profile.groups.every((group) => group.p50WallMs > 0));
  assert.match(renderRuntimeProfileMarkdown(profile), /Target OpenClaw Registry Surface/);
  assert.match(renderRuntimeProfileMarkdown(profile), /Category Rollups/);
  assert.match(renderRuntimeProfileMarkdown(profile), /CPU estimate/);
});
