#!/usr/bin/env node
import path from "node:path";
import { pathToFileURL } from "node:url";
import { inspectManifest } from "./inspect-fixtures.mjs";
import { repoRoot } from "./manifest-lib.mjs";
import { loadPluginInspector } from "./plugin-inspector-source.mjs";
import { buildReport } from "./report-lib.mjs";

export const defaultProfileJsonPath = path.join(repoRoot, "reports/crabpot-runtime-profile.json");
export const defaultProfileMarkdownPath = path.join(repoRoot, "reports/crabpot-runtime-profile.md");

const pluginInspector = await loadPluginInspector();

const profileCommands = [
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

const crabpotRuntimeProfileOptions = {
  commands: profileCommands,
  jsonPath: defaultProfileJsonPath,
  markdownPath: defaultProfileMarkdownPath,
  reportTitle: "Crabpot Runtime Profile",
  rootDir: repoRoot,
};

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  await main();
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const profile = await buildRuntimeProfile({
    openclawPath: args.openclawPath,
    runs: args.runs,
  });
  const errors = validateRuntimeProfile(profile);

  if (args.write) {
    await writeRuntimeProfile(profile);
  }

  if (args.json) {
    process.stdout.write(`${JSON.stringify(profile, null, 2)}\n`);
  } else {
    console.log(
      `runtime profile: ${profile.summary.commandCount} commands, p50 ${profile.summary.p50WallMs}ms, max RSS ${profile.summary.maxPeakRssMb}MB`,
    );
  }

  if (errors.length > 0) {
    throw new Error(errors.join("\n"));
  }
}

function parseArgs(argv) {
  const args = {
    json: false,
    openclawPath: undefined,
    runs: 1,
    write: true,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--check") {
      args.write = false;
      continue;
    }
    if (arg === "--json") {
      args.json = true;
      continue;
    }
    if (arg === "--openclaw") {
      args.openclawPath = argv[index + 1];
      index += 1;
      continue;
    }
    if (arg === "--no-openclaw") {
      args.openclawPath = false;
      continue;
    }
    if (arg === "--runs") {
      args.runs = Number.parseInt(argv[index + 1], 10);
      index += 1;
      continue;
    }
    if (arg === "--write") {
      args.write = true;
    }
  }

  if (!Number.isInteger(args.runs) || args.runs < 1 || args.runs > 10) {
    throw new Error("--runs must be an integer between 1 and 10");
  }

  return args;
}

export async function buildRuntimeProfile(options = {}) {
  const report = options.report ?? (await buildReport({ openclawPath: options.openclawPath }));
  const inspection = options.inspection ?? (await inspectManifest());
  return pluginInspector.buildRuntimeProfile({
    ...crabpotRuntimeProfileOptions,
    ...options,
    env: { CRABPOT_REPORT_GENERATED_AT: "deterministic", ...options.env },
    inspection,
    report,
    rootDir: options.rootDir ?? crabpotRuntimeProfileOptions.rootDir,
  });
}

export function validateRuntimeProfile(profile) {
  return pluginInspector.validateRuntimeProfile(profile);
}

export async function writeRuntimeProfile(profile, options = {}) {
  return pluginInspector.writeRuntimeProfile(profile, {
    ...crabpotRuntimeProfileOptions,
    ...options,
    rootDir: options.rootDir ?? crabpotRuntimeProfileOptions.rootDir,
  });
}

export function renderRuntimeProfileMarkdown(profile, options = {}) {
  return pluginInspector.renderRuntimeProfileMarkdown(profile, {
    ...crabpotRuntimeProfileOptions,
    ...options,
  });
}
