import { spawnSync } from "node:child_process";
import { configuredTimeoutMs } from "./owned-command.mjs";
import { portableCommand } from "./portable-command.mjs";
import { runtimeProfileStepTimeoutMs } from "./runtime-profile-plan.mjs";

const defaultStepTimeoutMs = 10 * 60 * 1000;

export function boundedNodeOptions(options = process.env.NODE_OPTIONS) {
  return [options, "--max-old-space-size=2048"].filter(Boolean).join(" ");
}

export function staticStepTimeoutMs() {
  // An empty static-suite setting historically selects the default.
  return process.env.CRABPOT_STATIC_STEP_TIMEOUT_MS === ""
    ? defaultStepTimeoutMs
    : configuredTimeoutMs("CRABPOT_STATIC_STEP_TIMEOUT_MS", defaultStepTimeoutMs);
}

export function staticCommandTimeoutMs(args) {
  const timeout = staticStepTimeoutMs();
  return args[0] === "scripts/profile-contract-runtime.mjs"
    ? runtimeProfileStepTimeoutMs(args, timeout)
    : timeout;
}

export function runStaticStep(command, args, env = {}, index = 1, total = 1) {
  const timeout = staticCommandTimeoutMs(args);
  return runCommandStep(command, args, {
    env: { ...env, NODE_OPTIONS: boundedNodeOptions(env.NODE_OPTIONS) }, index, total, timeout,
  });
}

// Callers supply a command or orchestration budget; this launcher does not
// replace an inner producer's independently bounded work.
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
