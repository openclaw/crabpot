import { spawnSync } from "node:child_process";
import { configuredTimeoutMs } from "./owned-command.mjs";
import { portableCommand } from "./portable-command.mjs";

const defaultStepTimeoutMs = 10 * 60 * 1000;

export function runStaticStep(command, args, env = {}, index = 1, total = 1) {
  // An empty static-suite setting historically selects the default.
  const timeout = process.env.CRABPOT_STATIC_STEP_TIMEOUT_MS === ""
    ? defaultStepTimeoutMs
    : configuredTimeoutMs("CRABPOT_STATIC_STEP_TIMEOUT_MS", defaultStepTimeoutMs);
  return runCommandStep(command, args, { env, index, total, timeout });
}

// Workflow producers retain their existing inner-owner and job budgets.
// Only the static suite supplies its established per-command timeout.
export function runCommandStep(command, args, { env = {}, index, total, timeout } = {}) {
  const label = index === undefined ? "CI report producer" : `static step ${index}/${total}`;
  const rendered = [command, ...args].join(" ");
  console.log(`crabpot: ${label}: ${rendered}`);
  const result = spawnSync(portableCommand(command), args, {
    encoding: "utf8",
    env: { ...process.env, ...env },
    stdio: "inherit",
    timeout,
  });
  if (result.error) {
    if (result.error.code === "ETIMEDOUT") {
      throw new Error(`static suite step timed out after ${timeout}ms: ${rendered}`);
    }
    throw result.error;
  }
  if (result.status !== 0) {
    return result.status ?? 1;
  }
  console.log(`crabpot: ${label} complete`);
  return 0;
}
