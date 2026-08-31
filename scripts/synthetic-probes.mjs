#!/usr/bin/env node
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { mergeCrabpotHookEvents } from "./capture-contracts.mjs";
import { readConfiguredManifest, repoRoot } from "./manifest-lib.mjs";
import { buildReport } from "./report-lib.mjs";
import { loadPluginInspectorPublicApi } from "./plugin-inspector-source.mjs";

export const defaultSyntheticProbeJsonPath = path.join(repoRoot, "reports/crabpot-synthetic-probes.json");
export const defaultSyntheticProbeMarkdownPath = path.join(repoRoot, "reports/crabpot-synthetic-probes.md");

const pluginInspector = await loadPluginInspectorPublicApi();

const httpRouteDescriptorInputReason = "captured HTTP route probe requires route descriptor input";
const crabpotMetadataOnlyRegistrars = new Map([
  [
    "registerEmbeddingProvider",
    "embedding providers are captured as registration metadata before provider runtime execution",
  ],
  [
    "registerHostedMediaResolver",
    "hosted media resolvers are captured as registration metadata before resolver runtime execution",
  ],
  [
    "registerMeetingNotesSourceProvider",
    "meeting notes source providers are captured as registration metadata before source runtime execution",
  ],
  [
    "registerModelCatalogProvider",
    "model catalog providers are captured as registration metadata before provider runtime execution",
  ],
  [
    "registerNodeCliFeature",
    "node CLI features are captured as registration metadata before CLI command execution",
  ],
  [
    "registerSessionAction",
    "session actions are captured as registration metadata before session runtime execution",
  ],
  [
    "registerTranscriptSourceProvider",
    "transcript source providers are captured as registration metadata before transcript provider runtime execution",
  ],
  [
    "registerWidgetPresenter",
    "widget presenters are captured as registration metadata before channel presentation execution",
  ],
]);

export function validateSyntheticProbePlan(plan) {
  return pluginInspector
    .validateSyntheticProbePlan(plan)
    .filter((error) => !error.includes(httpRouteDescriptorInputReason));
}

const crabpotRegistrationProbeInputs = {
  registerHttpRoute: {
    execute: httpRouteProbeArgs,
    handler: httpRouteProbeArgs,
    run: httpRouteProbeArgs,
  },
};

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  await main();
}

async function main() {
  const args = parseArgs(process.argv.slice(2));

  if (args.entrypoint) {
    if (process.env.CRABPOT_EXECUTE_ISOLATED !== "1") {
      throw new Error("synthetic probe execution requires CRABPOT_EXECUTE_ISOLATED=1");
    }
    const result = await runEntrypointSyntheticProbes(args.entrypoint, {
      cwd: args.cwd,
      mockSdk: args.mockSdk,
      pluginRoot: args.pluginRoot,
    });
    await writeJsonResult(result, args.output);
    if (result.summary.failCount > 0) {
      throw new Error(`${result.summary.failCount} synthetic probes failed`);
    }
    process.exitCode = 0;
    return;
  }

  const plan = await buildSyntheticProbePlan({ openclawPath: args.openclawPath });
  const errors = validateSyntheticProbePlan(plan);
  if (args.write) {
    await writeSyntheticProbePlan(plan);
  }

  if (args.json) {
    console.log(JSON.stringify(plan, null, 2));
  } else {
    console.log(
      `synthetic probes: ${plan.summary.readyCount} ready, ${plan.summary.blockedCount} blocked, ${plan.summary.probeCount} total`,
    );
  }

  if (errors.length > 0) {
    throw new Error(errors.join("\n"));
  }
}

function parseArgs(argv) {
  const args = {
    cwd: undefined,
    entrypoint: null,
    json: false,
    mockSdk: false,
    openclawPath: undefined,
    output: null,
    pluginRoot: undefined,
    write: true,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--check") {
      args.write = false;
      continue;
    }
    if (arg === "--cwd") {
      args.cwd = argv[index + 1];
      index += 1;
      continue;
    }
    if (arg === "--entrypoint") {
      args.entrypoint = argv[index + 1];
      index += 1;
      continue;
    }
    if (arg === "--json") {
      args.json = true;
      continue;
    }
    if (arg === "--mock-sdk") {
      args.mockSdk = true;
      continue;
    }
    if (arg === "--no-mock-sdk") {
      args.mockSdk = false;
      continue;
    }
    if (arg === "--openclaw") {
      args.openclawPath = argv[index + 1];
      index += 1;
      continue;
    }
    if (arg === "--output") {
      args.output = argv[index + 1];
      index += 1;
      continue;
    }
    if (arg === "--plugin-root") {
      args.pluginRoot = argv[index + 1];
      index += 1;
      continue;
    }
    if (arg === "--no-openclaw") {
      args.openclawPath = false;
      continue;
    }
    if (arg === "--write") {
      args.write = true;
    }
  }

  return args;
}

export async function buildSyntheticProbePlan(options = {}) {
  const report = options.report ?? (options.capture ? null : await buildReport({ openclawPath: options.openclawPath }));
  const hookEvents = mergeHookEvents(options.hookEvents);
  return applyCrabpotSyntheticProbePlanPolicy(
    pluginInspector.buildSyntheticProbePlanFromReport(report, {
      capture: normalizeCaptureHookEvents(options.capture, hookEvents),
      hookEvents,
    }),
  );
}

export async function writeSyntheticProbePlan(plan, options = {}) {
  const jsonPath = options.jsonPath ?? defaultSyntheticProbeJsonPath;
  const markdownPath = options.markdownPath ?? defaultSyntheticProbeMarkdownPath;
  return pluginInspector.writeSyntheticProbePlan(plan, {
    jsonPath,
    markdownPath,
    title: "Crabpot Synthetic Probes",
  });
}

export async function runCapturedSyntheticProbes(capture, options = {}) {
  const result = await pluginInspector.runCapturedSyntheticProbes(capture, {
    ...options,
    hookEvents: mergeHookEvents(options.hookEvents),
    registrationProbeInputs: mergeRegistrationProbeInputs(options.registrationProbeInputs),
    syntheticSource: "crabpot.synthetic",
  });
  const manifest = options.manifest ?? (await readConfiguredManifest());
  return applyFixtureSyntheticFailurePolicy(result, manifest);
}

export async function runEntrypointSyntheticProbes(entrypoint, options = {}) {
  if (typeof pluginInspector.runEntrypointSyntheticProbes !== "function") {
    const { captureEntrypoint } = await import("./run-cold-import-capture.mjs");
    const capture = await captureEntrypoint(entrypoint, {
      ...options,
      apiOptions: {
        ...(options.apiOptions ?? {}),
        retainHandlers: true,
      },
    });
    return runCapturedSyntheticProbes(capture, options);
  }

  const result = await pluginInspector.runEntrypointSyntheticProbes(entrypoint, {
    ...options,
    apiOptions: {
      ...(options.apiOptions ?? {}),
      retainHandlers: true,
    },
    hookEvents: mergeHookEvents(options.hookEvents),
    registrationProbeInputs: mergeRegistrationProbeInputs(options.registrationProbeInputs),
    syntheticSource: "crabpot.synthetic",
  });
  const manifest = options.manifest ?? (await readConfiguredManifest());
  return applyFixtureSyntheticFailurePolicy(result, manifest);
}

export function renderSyntheticProbeMarkdown(plan) {
  return pluginInspector.renderSyntheticProbeMarkdown(plan, { title: "Crabpot Synthetic Probes" });
}

export function applyFixtureSyntheticFailurePolicy(result, manifest) {
  result = applyCrabpotSyntheticFailurePolicy(result);
  const fixture = fixtureForSyntheticResult(result, manifest);
  const rules = fixture?.execution?.blockedFailures ?? [];
  if (rules.length === 0 || !Array.isArray(result.results)) {
    return result;
  }

  let changed = false;
  const results = result.results.map((item) => {
    if (item.status !== "fail") {
      return item;
    }
    const rule = rules.find((candidate) => syntheticFailureMatchesRule(item, candidate));
    if (!rule) {
      return item;
    }
    changed = true;
    return {
      ...item,
      status: "blocked",
      reason: rule.reason,
      blockedBy: rule.id,
    };
  });

  if (!changed) {
    return result;
  }

  return {
    ...result,
    summary: summarizeSyntheticResults(result.summary, results),
    results,
  };
}

function applyCrabpotSyntheticFailurePolicy(result) {
  if (!Array.isArray(result.results)) {
    return result;
  }

  let changed = false;
  const results = result.results.map((item) => {
    if (
      item.status !== "fail" ||
      item.seam !== "registerHttpRoute" ||
      !String(item.error ?? "").includes(httpRouteDescriptorInputReason)
    ) {
      return item;
    }

    changed = true;
    return {
      ...item,
      status: "blocked",
      reason: httpRouteDescriptorInputReason,
      blockedBy: "http-route-descriptor-input",
    };
  });

  if (!changed) {
    return result;
  }

  return {
    ...result,
    summary: summarizeSyntheticResults(result.summary, results),
    results,
  };
}

function applyCrabpotSyntheticProbePlanPolicy(plan) {
  if (!Array.isArray(plan.probes)) {
    return plan;
  }

  let changed = false;
  const probes = plan.probes.map((probe) => {
    const metadataOnlyReason = crabpotMetadataOnlyRegistrars.get(probe.seam);
    if (probe.kind === "registration" && probe.status === "blocked" && metadataOnlyReason) {
      changed = true;
      return {
        ...probe,
        status: "ready",
        blocker: null,
        execution: {
          mode: "metadata-only",
          callableProperties: [],
          reason: metadataOnlyReason,
        },
      };
    }

    if (probe.kind !== "registration" || probe.seam !== "registerHttpRoute" || probe.status !== "ready") {
      return probe;
    }

    changed = true;
    return {
      ...probe,
      status: "blocked",
      blocker: httpRouteDescriptorInputReason,
      execution: {
        ...(probe.execution ?? {}),
        blockedBy: "http-route-descriptor-input",
      },
    };
  });

  if (!changed) {
    return plan;
  }

  return {
    ...plan,
    summary: summarizeSyntheticPlan(plan.summary, probes),
    probes,
  };
}

function summarizeSyntheticPlan(summary, probes) {
  const registrations = probes.filter((probe) => probe.kind === "registration");
  return {
    ...summary,
    readyCount: probes.filter((probe) => probe.status === "ready").length,
    blockedCount: probes.filter((probe) => probe.status === "blocked").length,
    directExecutionCount: registrations.filter((probe) => probe.execution?.mode === "direct").length,
    optInExecutionCount: registrations.filter((probe) =>
      typeof probe.execution?.mode === "string" && probe.execution.mode.endsWith("-opt-in")
    ).length,
    metadataOnlyCount: registrations.filter((probe) => probe.execution?.mode === "metadata-only").length,
  };
}

function summarizeSyntheticResults(summary, results) {
  return {
    ...summary,
    passCount: results.filter((item) => item.status === "pass").length,
    failCount: results.filter((item) => item.status === "fail").length,
    blockedCount: results.filter((item) => item.status === "blocked").length,
  };
}

function fixtureForSyntheticResult(result, manifest) {
  const entrypoint = String(result.entrypoint ?? "").replaceAll("\\", "/");
  return (manifest.fixtures ?? []).find((fixture) => entrypoint.includes(`/.crabpot/workspaces/${fixture.id}/`));
}

function syntheticFailureMatchesRule(item, rule) {
  return (
    item.seam === rule.seam &&
    typeof item.error === "string" &&
    typeof rule.errorIncludes === "string" &&
    item.error.includes(rule.errorIncludes)
  );
}

function mergeRegistrationProbeInputs(inputs = {}) {
  return {
    ...crabpotRegistrationProbeInputs,
    ...inputs,
    registerHttpRoute: {
      ...crabpotRegistrationProbeInputs.registerHttpRoute,
      ...(inputs.registerHttpRoute ?? {}),
    },
  };
}

function mergeHookEvents(events = {}) {
  return mergeCrabpotHookEvents(events);
}

function normalizeCaptureHookEvents(capture, hookEvents) {
  if (!capture) {
    return capture;
  }
  return {
    ...capture,
    fixtures: capture.fixtures.map((fixture) => ({
      ...fixture,
      hooks: fixture.hooks.map((hook) =>
        hook.hook === "subagent_ended"
          ? {
              ...hook,
              syntheticEvent: {
                ...hookEvents.subagent_ended,
                ...(hook.syntheticEvent ?? {}),
              },
            }
          : hook,
      ),
    })),
  };
}

function httpRouteProbeArgs() {
  throw new Error(httpRouteDescriptorInputReason);
}

async function writeJsonResult(result, outputPath) {
  if (!outputPath) {
    process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
    return;
  }
  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, `${JSON.stringify(result, null, 2)}\n`, "utf8");
}
