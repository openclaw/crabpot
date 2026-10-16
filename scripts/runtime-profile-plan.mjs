export const profileCommands = [
  {
    id: "node-boot",
    label: "Node boot",
    category: "baseline",
    args: ["-e", "0"],
    openclaw: false,
  },
  {
    id: "fixture-inspection",
    label: "Fixture inspection",
    category: "fixture-scan",
    args: ["scripts/inspect-fixtures.mjs", "--check"],
    openclaw: false,
  },
  {
    id: "compat-report-registry",
    label: "Compatibility report plus target registry parse",
    category: "target-registry",
    args: ["scripts/generate-report.mjs", "--check"],
    openclaw: true,
  },
  {
    id: "contract-capture",
    label: "Contract capture inventory",
    category: "contract-capture",
    args: ["scripts/capture-contracts.mjs", "--check"],
    openclaw: true,
  },
  {
    id: "synthetic-probe-plan",
    label: "Synthetic probe plan",
    category: "synthetic-probes",
    args: ["scripts/synthetic-probes.mjs", "--check"],
    openclaw: true,
  },
  {
    id: "cold-import-readiness",
    label: "Cold import readiness",
    category: "cold-import",
    args: ["scripts/cold-import-readiness.mjs", "--check"],
    openclaw: true,
  },
  {
    id: "workspace-plan",
    label: "Workspace execution plan",
    category: "workspace-plan",
    args: ["scripts/workspace-plan.mjs", "--check"],
    openclaw: true,
  },
  {
    id: "platform-probes",
    label: "Platform and loader probes",
    category: "platform-probes",
    args: ["scripts/platform-probes.mjs", "--check"],
    openclaw: true,
  },
  {
    id: "import-loop-profile",
    label: "Repeated cold import capture loop",
    category: "import-loop",
    args: ["scripts/import-loop-profile.mjs", "--check", "--runs", "2"],
    openclaw: false,
  },
];

// The profiler prepares two metadata inputs, then measures every command for
// every requested run. Each measured child owns its individual command limit.
export function runtimeProfileStepTimeoutMs(args, commandTimeoutMs) {
  const index = args.indexOf("--runs");
  const runs = index < 0 ? 1 : Number.parseInt(args[index + 1], 10);
  if (!Number.isInteger(runs) || runs < 1 || runs > 10) {
    throw new Error("--runs must be an integer between 1 and 10");
  }
  const timeout = (2 + profileCommands.length * runs) * commandTimeoutMs;
  if (!Number.isSafeInteger(timeout) || timeout > 2_147_483_647) {
    throw new Error("runtime profile aggregate timeout exceeds the supported timer limit");
  }
  return timeout;
}
