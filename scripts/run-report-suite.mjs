#!/usr/bin/env node
import { pathToFileURL } from "node:url";
import { executeCiStepAsync, readCiRun } from "./ci-report-handoff.mjs";

// Keep the plan importable before fixture/Inspector preparation. The bounded
// child loads producers only after recording the first running step.
const producers = [
  ["generate-report", "compatibility"],
  ["capture-contracts", "capture"],
  ["synthetic-probes", "synthetic"],
  ["cold-import-readiness", "coldImport"],
  ["workspace-plan", "workspace"],
  ["platform-probes", "platform"],
  ["check-contract-coverage", null],
];

export function reportSuiteSteps(argv = []) {
  return producers.map(([name, report]) => ({
    id: `report-${name}`,
    command: [`scripts/${name}.mjs`, ...argv.filter((arg) => arg !== "--run-report")].join(" "),
    report,
  }));
}

export async function runReportSuite(argv = process.argv.slice(2)) {
  const args = argv.filter((arg) => arg !== "--run-report");
  const run = argv.includes("--run-report") ? readCiRun() : null;
  const stages = reportSuiteSteps(args).map((expected) => {
    if (!run) return expected;
    const step = run.steps.find((item) => item.id === expected.id);
    if (!step || step.state !== "pending" || step.command !== expected.command || step.report !== expected.report) {
      throw new Error(`CI report producer is not pending in this invocation: ${expected.id}`);
    }
    return step;
  });
  const hostIndex = args.indexOf("--openclaw");
  const openclawPath = args.includes("--no-openclaw") ? false : hostIndex < 0 ? undefined : args[hostIndex + 1];
  let input, report, readiness, plan;
  for (const [index, [name]] of producers.entries()) {
    const execute = async () => {
      console.log(`crabpot: report producer: ${name}`);
      if (index === 0) {
        const { inspectReport, buildReportFromInspection } = await import("./report-lib.mjs");
        input = await inspectReport({ openclawPath });
        report = await buildReportFromInspection(structuredClone(input));
      }
      // These sources are immutable for this child. Preserve the raw Inspector
      // inputs for readiness/planning; package overlays belong to Crabpot reports.
      const options = name === "platform-probes" ? { plan: structuredClone(plan) }
        : name === "workspace-plan" ? { report: structuredClone(input.inspected), readiness: structuredClone(readiness) }
        : { report: structuredClone(name === "cold-import-readiness" ? input.inspected : report) };
      const { runReportCommand } = await import(`./${name}.mjs`);
      const output = await runReportCommand(args, options);
      if (name === "cold-import-readiness") readiness = output;
      if (name === "workspace-plan") plan = output;
      console.log(`crabpot: report producer complete: ${name}`);
      return 0;
    };
    if (run) await executeCiStepAsync(run, stages[index], execute);
    else await execute();
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  await runReportSuite();
}
