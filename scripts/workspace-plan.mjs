#!/usr/bin/env node
import { existsSync } from "node:fs";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { buildColdImportReadiness } from "./cold-import-readiness.mjs";
import { buildReport } from "./report-lib.mjs";
import { repoRoot } from "./manifest-lib.mjs";

export const defaultWorkspacePlanJsonPath = path.join(repoRoot, "reports/crabpot-workspace-plan.json");
export const defaultWorkspacePlanMarkdownPath = path.join(repoRoot, "reports/crabpot-workspace-plan.md");

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  await main();
}

async function main() {
  const parsedArgs = parseArgs(process.argv.slice(2));
  const plan = await buildWorkspacePlan({ openclawPath: parsedArgs.openclawPath });
  const errors = validateWorkspacePlan(plan);

  if (parsedArgs.write) {
    await writeWorkspacePlan(plan);
  }

  if (parsedArgs.json) {
    console.log(JSON.stringify(plan, null, 2));
  } else {
    console.log(
      `workspace plan: ${plan.summary.entrypointCount} entrypoints, ${plan.summary.installStepCount} installs, ${plan.summary.auditStepCount} audits, ${plan.summary.buildStepCount} builds, ${plan.summary.captureStepCount} captures, ${plan.summary.syntheticProbeStepCount} synthetic probes, ${plan.summary.artifactStepCount} artifact dirs`,
    );
  }

  if (errors.length > 0) {
    throw new Error(errors.join("\n"));
  }
}

function parseArgs(argv) {
  const parsed = {
    json: false,
    write: true,
    openclawPath: undefined,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--check") {
      parsed.write = false;
      continue;
    }
    if (arg === "--json") {
      parsed.json = true;
      continue;
    }
    if (arg === "--write") {
      parsed.write = true;
      continue;
    }
    if (arg === "--openclaw") {
      parsed.openclawPath = argv[index + 1];
      index += 1;
      continue;
    }
    if (arg === "--no-openclaw") {
      parsed.openclawPath = false;
    }
  }

  return parsed;
}

export async function buildWorkspacePlan(options = {}) {
  const report = options.report ?? (await buildReport({ openclawPath: options.openclawPath }));
  const readiness = options.readiness ?? (await buildColdImportReadiness({ report }));
  const packageByPath = new Map(
    report.fixtures.flatMap((fixture) => fixture.packages.map((packageSummary) => [packageSummary.path, packageSummary])),
  );

  const fixtures = [];
  for (const fixtureReadiness of readiness.fixtures) {
    const entries = [];
    for (const entrypoint of fixtureReadiness.entrypoints) {
      const packageSummary = packageByPath.get(entrypoint.packagePath);
      if (!packageSummary) {
        continue;
      }
      const packageJson = await readPackageJson(packageSummary.path);
      entries.push(
        await buildEntrypointPlan({
          fixtureId: fixtureReadiness.id,
          entrypoint,
          packageSummary,
          packageJson,
          targetOpenClawPath: report.targetOpenClaw.configuredPath,
        }),
      );
    }
    fixtures.push({
      id: fixtureReadiness.id,
      entrypoints: entries,
    });
  }

  const allEntries = fixtures.flatMap((fixture) => fixture.entrypoints);
  const allSteps = allEntries.flatMap((entrypoint) => entrypoint.steps);
  return {
    generatedAt: report.generatedAt,
    mode: "plan-only",
    optIn: {
      env: "CRABPOT_EXECUTE_ISOLATED=1",
      reason: "Dependency install, build scripts, and plugin import execution are intentionally outside default CI.",
    },
    targetOpenClaw: {
      status: report.targetOpenClaw.status,
      configuredPath: report.targetOpenClaw.configuredPath,
    },
    summary: {
      fixtureCount: fixtures.length,
      entrypointCount: allEntries.length,
      installStepCount: allSteps.filter((step) => step.kind === "install").length,
      auditStepCount: allSteps.filter((step) => step.kind === "audit").length,
      buildStepCount: allSteps.filter((step) => step.kind === "build").length,
      artifactStepCount: allSteps.filter((step) => step.kind === "prepare-artifacts").length,
      captureStepCount: allSteps.filter((step) => step.kind === "capture").length,
      syntheticProbeStepCount: allSteps.filter((step) => step.kind === "synthetic-probe").length,
      targetOpenClawLinkStepCount: allSteps.filter((step) => step.kind === "link-openclaw").length,
      missingBuildScriptCount: allEntries.filter((entrypoint) =>
        entrypoint.blockers.some((blocker) => blocker.code === "missing-build-script"),
      ).length,
      sdkAliasRequiredCount: allEntries.filter((entrypoint) =>
        entrypoint.requiredCapabilities.includes("sdk-alias-compat"),
      ).length,
    },
    fixtures,
  };
}

async function buildEntrypointPlan({ fixtureId, entrypoint, packageSummary, packageJson, targetOpenClawPath }) {
  const packageDir = path.dirname(packageSummary.path);
  const packageManager = detectPackageManager(packageDir, packageJson);
  const lockfile = findNearestLockfile(packageDir);
  const buildScript = packageJson.scripts?.build;
  const requiredCapabilities = requiredCapabilitiesFor(entrypoint);
  const blockers = [...entrypoint.blockers];
  const steps = [];

  steps.push({
    kind: "prepare",
    command: `mkdir -p .crabpot/workspaces/${fixtureId} && rsync -a --delete ${packageDir}/ .crabpot/workspaces/${fixtureId}/`,
    cwd: repoRelative("."),
    reason: "copy fixture package into an isolated mutable workspace",
  });
  steps.push({
    kind: "prepare-artifacts",
    command: `mkdir -p .crabpot/results/${fixtureId}`,
    cwd: repoRelative("."),
    reason: "create a stable result directory for capture and synthetic probe artifacts",
  });

  if (requiredCapabilities.includes("target-openclaw-link")) {
    steps.push({
      kind: "link-openclaw",
      command: `${packageManager} pkg set dependencies.openclaw="file:${targetOpenClawWorkspacePath(fixtureId, targetOpenClawPath)}"`,
      cwd: `.crabpot/workspaces/${fixtureId}`,
      reason: "link the plugin's openclaw peer dependency to the target checkout under test",
    });
  }

  if (requiredCapabilities.includes("dependency-install")) {
    steps.push({
      kind: "install",
      command: installCommand(packageManager),
      cwd: `.crabpot/workspaces/${fixtureId}`,
      reason: "install runtime dependencies without mutating the pinned submodule",
    });
    steps.push({
      kind: "audit",
      command: auditCommand(packageManager, fixtureId),
      cwd: `.crabpot/workspaces/${fixtureId}`,
      artifactPath: auditArtifactPath(fixtureId),
      reason: "capture package-manager dependency audit metadata as warning-only plugin upstream risk",
    });
  }

  if (requiredCapabilities.includes("build")) {
    if (buildScript) {
      steps.push({
        kind: "build",
        command: runCommand(packageManager, "build"),
        cwd: `.crabpot/workspaces/${fixtureId}`,
        reason: "produce missing OpenClaw build entrypoint",
      });
    } else {
      blockers.push({
        code: "missing-build-script",
        message: "entrypoint points at build output but package.json has no build script",
        evidence: packageSummary.path,
      });
    }
  }

  steps.push({
    kind: "capture",
    command: captureCommand(fixtureId, entrypoint),
    cwd: `.crabpot/workspaces/${fixtureId}`,
    artifactPath: artifactPath(fixtureId, entrypoint, "capture"),
    reason: "cold import the entrypoint against the capture shim",
  });
  steps.push({
    kind: "synthetic-probe",
    command: syntheticProbeCommand(fixtureId, entrypoint),
    cwd: `.crabpot/workspaces/${fixtureId}`,
    artifactPath: artifactPath(fixtureId, entrypoint, "synthetic"),
    reason: "invoke retained hook and registration handlers with synthetic payloads",
  });

  return {
    id: entrypoint.id,
    fixture: fixtureId,
    packagePath: packageSummary.path,
    packageName: packageSummary.name,
    entrypoint: entrypoint.path,
    status: entrypoint.status,
    packageManager,
    lockfile,
    requiredCapabilities,
    blockers,
    steps,
  };
}

function requiredCapabilitiesFor(entrypoint) {
  const capabilities = new Set();
  for (const blocker of entrypoint.blockers) {
    if (blocker.code === "dependency-install-required") {
      capabilities.add("dependency-install");
    }
    if (blocker.code === "build-required") {
      capabilities.add("build");
    }
    if (blocker.code === "ts-loader-required") {
      capabilities.add("ts-loader");
    }
    if (blocker.code === "sdk-alias-required") {
      capabilities.add("sdk-alias-compat");
    }
    if (blocker.code === "top-level-side-effect-review") {
      capabilities.add("side-effect-sandbox");
    }
  }
  if (entrypoint.blockers.some((blocker) => /\bopenclaw\b/.test(blocker.evidence ?? ""))) {
    capabilities.add("target-openclaw-link");
  }
  capabilities.add("capture-shim");
  capabilities.add("synthetic-probes");
  return [...capabilities].sort();
}

function detectPackageManager(packageDir, packageJson) {
  const declared = typeof packageJson.packageManager === "string" ? packageJson.packageManager.split("@")[0] : null;
  if (declared) {
    return declared;
  }
  const lockfile = findNearestLockfile(packageDir);
  if (lockfile?.endsWith("pnpm-lock.yaml")) {
    return "pnpm";
  }
  if (lockfile?.endsWith("yarn.lock")) {
    return "yarn";
  }
  if (lockfile?.endsWith("bun.lock") || lockfile?.endsWith("bun.lockb")) {
    return "bun";
  }
  return "npm";
}

function findNearestLockfile(packageDir) {
  const candidates = ["pnpm-lock.yaml", "package-lock.json", "yarn.lock", "bun.lock", "bun.lockb"];
  let current = path.resolve(repoRoot, packageDir);
  while (current.startsWith(repoRoot)) {
    for (const candidate of candidates) {
      const lockfile = path.join(current, candidate);
      if (existsSync(lockfile)) {
        return path.relative(repoRoot, lockfile);
      }
    }
    const parent = path.dirname(current);
    if (parent === current) {
      break;
    }
    current = parent;
  }
  return null;
}

async function readPackageJson(packagePath) {
  return JSON.parse(await readFile(path.join(repoRoot, packagePath), "utf8"));
}

function installCommand(packageManager) {
  const commands = {
    bun: "bun install --ignore-scripts",
    npm: "npm install --ignore-scripts",
    pnpm: "pnpm install --ignore-scripts",
    yarn: "yarn install --ignore-scripts",
  };
  return commands[packageManager] ?? `${packageManager} install --ignore-scripts`;
}

function auditCommand(packageManager, fixtureId) {
  const output = `../../results/${fixtureId}/package-audit.json`;
  if (packageManager === "npm") {
    return `npm audit --json > ${output} || true`;
  }
  if (packageManager === "pnpm") {
    return `pnpm audit --json > ${output} || true`;
  }
  if (packageManager === "yarn") {
    return `yarn npm audit --json > ${output} || true`;
  }
  if (packageManager === "bun") {
    return `bun audit --json > ${output} || true`;
  }
  return `${packageManager} audit --json > ${output} || true`;
}

function runCommand(packageManager, script) {
  if (packageManager === "npm") {
    return `npm run ${script}`;
  }
  return `${packageManager} run ${script}`;
}

function captureCommand(fixtureId, entrypoint) {
  const loader = entrypoint.blockers.some((blocker) => blocker.code === "ts-loader-required") ? " --import tsx" : "";
  return `CRABPOT_EXECUTE_ISOLATED=1 node${loader} ../../../scripts/run-cold-import-capture.mjs ${entrypoint.specifier} --output ${workspaceArtifactPath(fixtureId, entrypoint, "capture")}`;
}

function syntheticProbeCommand(fixtureId, entrypoint) {
  const loader = entrypoint.blockers.some((blocker) => blocker.code === "ts-loader-required") ? " --import tsx" : "";
  return `CRABPOT_EXECUTE_ISOLATED=1 node${loader} ../../../scripts/synthetic-probes.mjs --entrypoint ${entrypoint.specifier} --output ${workspaceArtifactPath(fixtureId, entrypoint, "synthetic")}`;
}

export function validateWorkspacePlan(plan) {
  const errors = [];
  if (plan.mode !== "plan-only") {
    errors.push("workspace plan must stay plan-only for default checks");
  }
  if (plan.optIn.env !== "CRABPOT_EXECUTE_ISOLATED=1") {
    errors.push("workspace execution must require CRABPOT_EXECUTE_ISOLATED=1");
  }
  for (const fixture of plan.fixtures) {
    for (const entrypoint of fixture.entrypoints) {
      if (!entrypoint.packagePath || !entrypoint.entrypoint) {
        errors.push(`${entrypoint.id}: missing package path or entrypoint`);
      }
      if (entrypoint.steps.length === 0) {
        errors.push(`${entrypoint.id}: missing workspace steps`);
      }
      if (!entrypoint.steps.some((step) => step.kind === "prepare")) {
        errors.push(`${entrypoint.id}: missing prepare step`);
      }
      if (!entrypoint.steps.some((step) => step.kind === "prepare-artifacts")) {
        errors.push(`${entrypoint.id}: missing prepare-artifacts step`);
      }
      if (!entrypoint.steps.some((step) => step.kind === "capture")) {
        errors.push(`${entrypoint.id}: missing capture step`);
      }
      if (!entrypoint.steps.some((step) => step.kind === "synthetic-probe")) {
        errors.push(`${entrypoint.id}: missing synthetic-probe step`);
      }
      if (entrypoint.requiredCapabilities.includes("dependency-install") && !entrypoint.steps.some((step) => step.kind === "install")) {
        errors.push(`${entrypoint.id}: dependency install capability has no install step`);
      }
      if (entrypoint.requiredCapabilities.includes("dependency-install") && !entrypoint.steps.some((step) => step.kind === "audit")) {
        errors.push(`${entrypoint.id}: dependency install capability has no audit step`);
      }
      if (entrypoint.requiredCapabilities.includes("target-openclaw-link") && !entrypoint.steps.some((step) => step.kind === "link-openclaw")) {
        errors.push(`${entrypoint.id}: target-openclaw-link capability has no link-openclaw step`);
      }
      if (entrypoint.requiredCapabilities.includes("build") && !entrypoint.steps.some((step) => step.kind === "build") && !entrypoint.blockers.some((blocker) => blocker.code === "missing-build-script")) {
        errors.push(`${entrypoint.id}: build capability has no build step or missing-build-script blocker`);
      }
      for (const step of entrypoint.steps) {
        if (!step.command || !step.cwd || !step.reason) {
          errors.push(`${entrypoint.id}: ${step.kind} step missing command, cwd, or reason`);
        }
      }
    }
  }
  return errors;
}

export async function writeWorkspacePlan(plan, options = {}) {
  const jsonPath = options.jsonPath ?? defaultWorkspacePlanJsonPath;
  const markdownPath = options.markdownPath ?? defaultWorkspacePlanMarkdownPath;
  await mkdir(path.dirname(jsonPath), { recursive: true });
  await mkdir(path.dirname(markdownPath), { recursive: true });
  await writeFile(jsonPath, `${JSON.stringify(plan, null, 2)}\n`, "utf8");
  await writeFile(markdownPath, `${renderWorkspacePlanMarkdown(plan)}\n`, "utf8");
  return { jsonPath, markdownPath };
}

export function renderWorkspacePlanMarkdown(plan) {
  return [
    "# Crabpot Isolated Workspace Plan",
    "",
    `Generated: ${plan.generatedAt}`,
    `Mode: ${plan.mode}`,
    `Opt-in: ${plan.optIn.env}`,
    "",
    "## Summary",
    "",
    markdownTable(
      [
        ["Fixtures", plan.summary.fixtureCount],
        ["Entrypoints", plan.summary.entrypointCount],
        ["Artifact dirs", plan.summary.artifactStepCount],
        ["Install steps", plan.summary.installStepCount],
        ["Audit steps", plan.summary.auditStepCount],
        ["Build steps", plan.summary.buildStepCount],
        ["Capture steps", plan.summary.captureStepCount],
        ["Synthetic probe steps", plan.summary.syntheticProbeStepCount],
        ["Target OpenClaw link steps", plan.summary.targetOpenClawLinkStepCount],
        ["Missing build scripts", plan.summary.missingBuildScriptCount],
        ["SDK alias required", plan.summary.sdkAliasRequiredCount],
      ],
      ["Metric", "Value"],
    ),
    "",
    "## Entrypoint Workspaces",
    "",
    markdownTable(
      plan.fixtures.flatMap((fixture) =>
        fixture.entrypoints.map((entrypoint) => [
          fixture.id,
          entrypoint.packageManager,
          entrypoint.status,
          entrypoint.entrypoint,
          entrypoint.requiredCapabilities.join(", "),
          entrypoint.steps
            .map((step) => `${step.kind}: ${step.command}${step.artifactPath ? ` -> ${step.artifactPath}` : ""}`)
            .join("; "),
        ]),
      ),
      ["Fixture", "PM", "Status", "Entrypoint", "Capabilities", "Steps"],
    ),
  ].join("\n");
}

function targetOpenClawWorkspacePath(fixtureId, targetOpenClawPath) {
  if (!targetOpenClawPath) {
    return "../../../openclaw";
  }
  const workspaceRoot = path.join(repoRoot, ".crabpot", "workspaces", fixtureId);
  return path.relative(workspaceRoot, path.resolve(repoRoot, targetOpenClawPath));
}

function repoRelative(value) {
  return value;
}

function artifactPath(fixtureId, entrypoint, kind) {
  return `.crabpot/results/${fixtureId}/${artifactSlug(entrypoint.id)}.${kind}.json`;
}

function workspaceArtifactPath(fixtureId, entrypoint, kind) {
  return `../../results/${fixtureId}/${artifactSlug(entrypoint.id)}.${kind}.json`;
}

function auditArtifactPath(fixtureId) {
  return `.crabpot/results/${fixtureId}/package-audit.json`;
}

function artifactSlug(value) {
  return value.replace(/[^a-zA-Z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function markdownTable(rows, headers) {
  if (rows.length === 0) {
    return "_none_";
  }

  const allRows = [headers, ...rows.map((row) => row.map(String))];
  const widths = headers.map((_, columnIndex) =>
    Math.max(...allRows.map((row) => row[columnIndex].length)),
  );
  const renderRow = (row) => `| ${row.map((cell, index) => cell.padEnd(widths[index])).join(" | ")} |`;
  return [
    renderRow(headers),
    renderRow(widths.map((width) => "-".repeat(width))),
    ...rows.map((row) => renderRow(row.map(String))),
  ].join("\n");
}
