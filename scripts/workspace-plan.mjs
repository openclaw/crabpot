#!/usr/bin/env node
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { readConfiguredManifest, repoRoot } from "./manifest-lib.mjs";
import { loadPluginInspectorPublicApi } from "./plugin-inspector-source.mjs";

const pluginInspector = await loadPluginInspectorPublicApi();

export const defaultWorkspacePlanJsonPath = path.join(repoRoot, "reports/crabpot-workspace-plan.json");
export const defaultWorkspacePlanMarkdownPath = path.join(repoRoot, "reports/crabpot-workspace-plan.md");

const crabpotWorkspacePlanOptions = {
  captureScript: "../../../scripts/run-cold-import-capture.mjs",
  defaultTargetOpenClawWorkspacePath: "../../../openclaw",
  optInEnv: "CRABPOT_EXECUTE_ISOLATED=1",
  resultsRoot: ".crabpot/results",
  rootDir: repoRoot,
  syntheticProbeScript: "../../../scripts/synthetic-probes.mjs",
  workspaceRoot: ".crabpot/workspaces",
};
const nodeTypesDevDependency = "^22.0.0";

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
  const config = options.report
    ? undefined
    : {
        ...(await readConfiguredManifest()),
        rootDir: repoRoot,
      };
  const plan = await pluginInspector.buildFixtureSetWorkspacePlan({
    ...crabpotWorkspacePlanOptions,
    ...options,
    config,
    rootDir: options.rootDir ?? repoRoot,
  });
  return normalizeWorkspaceInstallSteps(plan);
}

export function validateWorkspacePlan(plan) {
  return pluginInspector.validateFixtureSetWorkspacePlan(plan, crabpotWorkspacePlanOptions);
}

export async function writeWorkspacePlan(plan, options = {}) {
  return pluginInspector.writeFixtureSetWorkspacePlan(plan, {
    jsonPath: options.jsonPath ?? defaultWorkspacePlanJsonPath,
    markdownPath: options.markdownPath ?? defaultWorkspacePlanMarkdownPath,
    title: options.title ?? "Crabpot Isolated Workspace Plan",
  });
}

export function renderWorkspacePlanMarkdown(plan, options = {}) {
  return pluginInspector.renderFixtureSetWorkspacePlanMarkdown(plan, {
    ...options,
    title: options.title ?? "Crabpot Isolated Workspace Plan",
  });
}

export function normalizeWorkspaceInstallSteps(plan) {
  return {
    ...plan,
    fixtures: (plan.fixtures ?? []).map((fixture) => ({
      ...fixture,
      entrypoints: (fixture.entrypoints ?? []).map((entrypoint) => ({
        ...entrypoint,
        steps: normalizeWorkspaceEntrypointSteps(entrypoint),
      })),
    })),
  };
}

function normalizeWorkspaceEntrypointSteps(entrypoint) {
  const steps = (entrypoint.steps ?? []).map(normalizeWorkspaceStep);
  return ensureNodeTypesBuildDependency(entrypoint, steps);
}

function normalizeWorkspaceStep(step) {
  if (step.kind !== "install" || step.command !== "npm install --ignore-scripts") {
    return step;
  }

  return {
    ...step,
    command: "npm install --ignore-scripts --legacy-peer-deps",
    reason: `${step.reason}; allow peer-range drift in isolated compatibility probes`,
  };
}

function ensureNodeTypesBuildDependency(entrypoint, steps) {
  if (!entrypoint.requiredCapabilities?.includes("build") || !packageRequiresNodeTypes(entrypoint.packagePath)) {
    return steps;
  }

  const installIndex = steps.findIndex((step) => step.kind === "install" && step.command.startsWith("npm install "));
  if (installIndex === -1 || steps.some((step) => step.kind === "ensure-node-types")) {
    return steps;
  }

  const ensureStep = {
    kind: "ensure-node-types",
    command: `npm pkg set 'devDependencies.@types/node=${nodeTypesDevDependency}'`,
    cwd: steps[installIndex].cwd,
    reason: "satisfy tsconfig Node type declarations before isolated TypeScript build",
  };
  return [...steps.slice(0, installIndex), ensureStep, ...steps.slice(installIndex)];
}

function packageRequiresNodeTypes(packagePath) {
  if (!packagePath) {
    return false;
  }

  const packageJsonPath = repoPath(packagePath);
  const packageDir = path.dirname(packageJsonPath);
  const tsconfigPath = path.join(packageDir, "tsconfig.json");
  if (!existsSync(packageJsonPath) || !existsSync(tsconfigPath)) {
    return false;
  }

  const packageJson = readJsonFile(packageJsonPath);
  if (!packageJson || declaresNodeTypesDependency(packageJson)) {
    return false;
  }

  const tsconfig = readJsonFile(tsconfigPath);
  return Array.isArray(tsconfig?.compilerOptions?.types) && tsconfig.compilerOptions.types.includes("node");
}

function declaresNodeTypesDependency(packageJson) {
  return [
    packageJson.dependencies,
    packageJson.devDependencies,
    packageJson.optionalDependencies,
    packageJson.peerDependencies,
  ].some((dependencies) => dependencies?.["@types/node"]);
}

function readJsonFile(filePath) {
  try {
    return JSON.parse(readFileSync(filePath, "utf8"));
  } catch {
    return null;
  }
}

function repoPath(relativePath) {
  return path.join(repoRoot, ...relativePath.split("/"));
}
