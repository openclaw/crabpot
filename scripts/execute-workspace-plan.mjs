#!/usr/bin/env node
import { spawn } from "node:child_process";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { buildWorkspacePlan } from "./workspace-plan.mjs";
import { repoRoot } from "./manifest-lib.mjs";

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  await main();
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const plan = await buildWorkspacePlan({ openclawPath: args.openclawPath });
  const selected = selectWorkspaceSteps(plan, args);
  const errors = validateExecutionRequest({ args, selected });

  if (errors.length > 0) {
    throw new Error(errors.join("\n"));
  }

  if (args.dryRun) {
    console.log(JSON.stringify({ mode: "dry-run", selected }, null, 2));
    return;
  }

  for (const item of selected) {
    for (const step of item.steps) {
      await runStep(step);
    }
  }
}

function parseArgs(argv) {
  const args = {
    dryRun: false,
    fixture: null,
    entrypoint: null,
    openclawPath: undefined,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--dry-run") {
      args.dryRun = true;
      continue;
    }
    if (arg === "--fixture") {
      args.fixture = argv[index + 1];
      index += 1;
      continue;
    }
    if (arg === "--entrypoint") {
      args.entrypoint = argv[index + 1];
      index += 1;
      continue;
    }
    if (arg === "--openclaw") {
      args.openclawPath = argv[index + 1];
      index += 1;
      continue;
    }
    if (arg === "--no-openclaw") {
      args.openclawPath = false;
    }
  }

  return args;
}

export function selectWorkspaceSteps(plan, args) {
  const selected = [];
  for (const fixture of plan.fixtures) {
    if (args.fixture && fixture.id !== args.fixture) {
      continue;
    }
    for (const entrypoint of fixture.entrypoints) {
      if (args.entrypoint && entrypoint.id !== args.entrypoint) {
        continue;
      }
      selected.push({
        fixture: fixture.id,
        entrypoint: entrypoint.id,
        packagePath: entrypoint.packagePath,
        status: entrypoint.status,
        steps: entrypoint.steps,
      });
    }
  }
  return selected;
}

export function validateExecutionRequest({ args, selected, env = process.env }) {
  const errors = [];
  if (!args.fixture) {
    errors.push("workspace execution requires --fixture to keep opt-in scope narrow");
  }
  if (selected.length === 0) {
    errors.push("workspace execution selected no entrypoints");
  }
  if (!args.dryRun && env.CRABPOT_EXECUTE_ISOLATED !== "1") {
    errors.push("workspace execution requires CRABPOT_EXECUTE_ISOLATED=1 unless --dry-run is used");
  }
  return errors;
}

function runStep(step) {
  return new Promise((resolve, reject) => {
    const child = spawn(step.command, {
      cwd: path.join(repoRoot, step.cwd),
      env: { ...process.env, CRABPOT_EXECUTE_ISOLATED: "1" },
      shell: true,
      stdio: "inherit",
    });
    child.on("exit", (code) => {
      if (code === 0) {
        resolve();
        return;
      }
      reject(new Error(`${step.kind} failed with exit code ${code}: ${step.command}`));
    });
    child.on("error", reject);
  });
}
