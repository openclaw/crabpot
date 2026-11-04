#!/usr/bin/env node
import { pathToFileURL } from "node:url";
import { runStaticStep, boundedNodeOptions } from "./static-step.mjs";

// Distinct real corpus inputs have separate deadlines; every assertion remains
// required. No process may overlap another or exceed the 2 GiB V8 heap budget.
export function buildTestSteps() {
  const env = {
    NODE_OPTIONS: boundedNodeOptions(),
  };
  return [
    "test/*.test.mjs",
    "test/corpus/host.test.mjs",
    "test/corpus/no-host.test.mjs",
    "test/corpus/beta.test.mjs",
    "test/corpus/runtime.test.mjs",
  ].map((file) => ["node", ["--test", "--test-concurrency=1", file], env]);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const steps = buildTestSteps();
  for (let index = 0; index < steps.length; index++) {
    const [command, args, env] = steps[index];
    const status = runStaticStep(command, args, env, index + 1, steps.length);
    if (status !== 0) { process.exitCode = status; break; }
  }
}
