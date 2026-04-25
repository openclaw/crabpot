#!/usr/bin/env node
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import {
  buildContractCapture,
  HOOK_CONTEXTS,
  HOOK_EVENTS,
  REGISTRATION_ARGUMENTS,
} from "./capture-contracts.mjs";
import { repoRoot } from "./manifest-lib.mjs";
import { captureEntrypoint } from "./run-cold-import-capture.mjs";

export const defaultSyntheticProbeJsonPath = path.join(repoRoot, "reports/crabpot-synthetic-probes.json");
export const defaultSyntheticProbeMarkdownPath = path.join(repoRoot, "reports/crabpot-synthetic-probes.md");

const REGISTRATION_EXECUTION_PROFILES = {
  defineChannelPluginEntry: {
    mode: "metadata-only",
    callableProperties: [],
    reason: "entry wrapper metadata is captured before channel runtime execution",
  },
  definePluginEntry: {
    mode: "metadata-only",
    callableProperties: [],
    reason: "entry wrapper metadata is captured before plugin runtime execution",
  },
  registerChannel: {
    mode: "channel-opt-in",
    callableProperties: ["send", "receive"],
    option: "includeChannelRuntime",
  },
  registerCli: {
    mode: "direct",
    callableProperties: ["handler", "run", "execute"],
  },
  registerCommand: {
    mode: "direct",
    callableProperties: ["handler", "run", "execute"],
  },
  registerGatewayMethod: {
    mode: "direct",
    callableProperties: ["handler", "run", "execute"],
  },
  registerHttpRoute: {
    mode: "direct",
    callableProperties: ["handler", "run", "execute"],
  },
  registerInteractiveHandler: {
    mode: "direct",
    callableProperties: ["handler", "run", "execute"],
  },
  registerService: {
    mode: "lifecycle-opt-in",
    callableProperties: ["start", "stop"],
    option: "includeLifecycle",
  },
  registerSpeechProvider: {
    mode: "provider-opt-in",
    callableProperties: ["speak", "synthesize"],
    option: "includeProviderCapabilities",
  },
  registerTool: {
    mode: "direct",
    callableProperties: ["run", "handler", "execute"],
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
    const capture = await captureEntrypoint(args.entrypoint, {
      apiOptions: { retainHandlers: true },
      cwd: args.cwd,
    });
    const result = await runCapturedSyntheticProbes(capture);
    await writeJsonResult(result, args.output);
    if (result.summary.failCount > 0) {
      throw new Error(`${result.summary.failCount} synthetic probes failed`);
    }
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
    openclawPath: undefined,
    output: null,
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
  const capture = options.capture ?? (await buildContractCapture({ openclawPath: options.openclawPath }));
  const hooks = capture.fixtures.flatMap((fixture) =>
    fixture.hooks.map((hook) => ({
      id: hook.id,
      fixture: fixture.id,
      kind: "hook",
      seam: hook.hook,
      status: hook.syntheticEvent && typeof hook.syntheticEvent === "object" ? "ready" : "blocked",
      blocker: hook.syntheticEvent && typeof hook.syntheticEvent === "object" ? null : "missing synthetic event",
      assertions: hook.assertions,
      syntheticEvent: hook.syntheticEvent ?? HOOK_EVENTS[hook.hook] ?? { hook: hook.hook },
      syntheticContext: hook.syntheticContext ?? HOOK_CONTEXTS[hook.hook] ?? { hook: hook.hook },
      source: hook.ref,
    })),
  );
  const registrations = capture.fixtures.flatMap((fixture) =>
    fixture.registrations.map((registration) => {
      const execution = registrationExecutionProfile(registration.registrar);
      const hasSyntheticArguments = Array.isArray(registration.syntheticArguments);
      const status = hasSyntheticArguments && execution.mode !== "unknown" ? "ready" : "blocked";
      return {
        id: registration.id,
        fixture: fixture.id,
        kind: "registration",
        seam: registration.registrar,
        status,
        blocker: probeBlocker({ hasSyntheticArguments, execution }),
        assertions: registration.assertions,
        syntheticArguments:
          registration.syntheticArguments ?? REGISTRATION_ARGUMENTS[registration.registrar] ?? [{}],
        execution,
        source: registration.ref,
      };
    }),
  );
  const probes = [...hooks, ...registrations];

  return {
    generatedAt: capture.generatedAt,
    summary: {
      fixtureCount: capture.summary.fixtureCount,
      probeCount: probes.length,
      hookProbeCount: hooks.length,
      registrationProbeCount: registrations.length,
      readyCount: probes.filter((probe) => probe.status === "ready").length,
      blockedCount: probes.filter((probe) => probe.status === "blocked").length,
      directExecutionCount: registrations.filter((probe) => probe.execution.mode === "direct").length,
      optInExecutionCount: registrations.filter((probe) => probe.execution.mode.endsWith("-opt-in")).length,
      metadataOnlyCount: registrations.filter((probe) => probe.execution.mode === "metadata-only").length,
    },
    probes,
  };
}

export function validateSyntheticProbePlan(plan) {
  const errors = [];
  for (const probe of plan.probes) {
    if (!probe.source) {
      errors.push(`${probe.id}: missing source reference`);
    }
    if (!Array.isArray(probe.assertions) || probe.assertions.length === 0) {
      errors.push(`${probe.id}: missing probe assertions`);
    }
    if (probe.status === "blocked") {
      errors.push(`${probe.id}: ${probe.blocker}`);
    }
  }
  return errors;
}

export async function writeSyntheticProbePlan(plan, options = {}) {
  const jsonPath = options.jsonPath ?? defaultSyntheticProbeJsonPath;
  const markdownPath = options.markdownPath ?? defaultSyntheticProbeMarkdownPath;
  await mkdir(path.dirname(jsonPath), { recursive: true });
  await mkdir(path.dirname(markdownPath), { recursive: true });
  await writeFile(jsonPath, `${JSON.stringify(plan, null, 2)}\n`, "utf8");
  await writeFile(markdownPath, `${renderSyntheticProbeMarkdown(plan)}\n`, "utf8");
  return { jsonPath, markdownPath };
}

export async function runCapturedSyntheticProbes(capture, options = {}) {
  const captured = capture.captured ?? [];
  const retained = new Map((capture.retained ?? []).map((item) => [item.captureIndex, item]));
  const results = [];

  for (let index = 0; index < captured.length; index += 1) {
    const entry = captured[index];
    const retainedEntry = retained.get(index);
    if (!retainedEntry) {
      results.push(blockedResult(entry, index, "handler retention was not enabled"));
      continue;
    }
    if (entry.kind === "hook") {
      results.push(await runHookProbe(entry, retainedEntry, index));
      continue;
    }
    if (entry.kind === "registration") {
      results.push(...(await runRegistrationProbes(entry, retainedEntry, index, options)));
    }
  }

  return {
    entrypoint: capture.entrypoint,
    status: capture.status,
    summary: {
      probeCount: results.length,
      passCount: results.filter((result) => result.status === "pass").length,
      failCount: results.filter((result) => result.status === "fail").length,
      blockedCount: results.filter((result) => result.status === "blocked").length,
    },
    results,
  };
}

async function runHookProbe(entry, retainedEntry, captureIndex) {
  if (typeof retainedEntry.handler !== "function") {
    return blockedResult(entry, captureIndex, "captured hook has no callable handler");
  }
  return runProbe({
    captureIndex,
    kind: "hook",
    seam: entry.name,
    label: entry.name,
    invoke: () =>
      retainedEntry.handler(
        HOOK_EVENTS[entry.name] ?? { hook: entry.name },
        HOOK_CONTEXTS[entry.name] ?? { hook: entry.name },
      ),
  });
}

async function runRegistrationProbes(entry, retainedEntry, captureIndex, options) {
  const descriptor = retainedEntry.arguments?.[0];
  if (!descriptor || typeof descriptor !== "object") {
    return [blockedResult(entry, captureIndex, "captured registration has no object descriptor")];
  }

  const profile = registrationExecutionProfile(entry.name);
  if (profile.mode === "unknown") {
    return [blockedResult(entry, captureIndex, "captured registration has no execution profile")];
  }
  if (profile.option && options[profile.option] !== true) {
    return [blockedResult(entry, captureIndex, `captured registration requires ${profile.option}=true`)];
  }

  const invocations = registrationInvocations(entry.name, descriptor, profile);
  if (invocations.length === 0) {
    return [blockedResult(entry, captureIndex, "captured registration has no supported callable probe")];
  }

  return Promise.all(
    invocations.map((invocation) =>
      runProbe({
        captureIndex,
        kind: "registration",
        seam: entry.name,
        label: invocation.label,
        invoke: invocation.invoke,
      }),
    ),
  );
}

function registrationInvocations(registrar, descriptor, profile) {
  const invocations = [];

  for (const property of profile.callableProperties) {
    if (typeof descriptor[property] === "function") {
      invocations.push({
        label: `${registrar}.${property}`,
        invoke: () => invokeRegistrationCallable(descriptor[property], registrar, property),
      });
    }
  }
  return invocations;
}

function invokeRegistrationCallable(callable, registrar, property) {
  const event = syntheticRegistrationEvent(registrar, property);
  if (property === "execute") {
    return callable("call-fixture", event.params, new AbortController().signal, () => undefined);
  }
  return callable(event);
}

function registrationExecutionProfile(registrar) {
  return (
    REGISTRATION_EXECUTION_PROFILES[registrar] ?? {
      mode: "unknown",
      callableProperties: [],
      reason: "registrar has not been classified for synthetic execution",
    }
  );
}

function probeBlocker({ hasSyntheticArguments, execution }) {
  if (!hasSyntheticArguments) {
    return "missing synthetic arguments";
  }
  if (execution.mode === "unknown") {
    return execution.reason;
  }
  return null;
}

function syntheticRegistrationEvent(registrar, property) {
  return {
    source: "crabpot.synthetic",
    registrar,
    property,
    params: {},
    input: {},
    body: {},
    headers: {},
    toolName: HOOK_EVENTS.before_tool_call.toolName,
    toolCall: { id: HOOK_EVENTS.before_tool_call.toolCallId, name: HOOK_EVENTS.before_tool_call.toolName },
  };
}

async function runProbe({ captureIndex, kind, seam, label, invoke }) {
  try {
    const output = await invoke();
    return {
      captureIndex,
      kind,
      seam,
      label,
      status: "pass",
      output: summarizeValue(output),
    };
  } catch (error) {
    return {
      captureIndex,
      kind,
      seam,
      label,
      status: "fail",
      error: error instanceof Error ? error.message : String(error),
    };
  }
}

function blockedResult(entry, captureIndex, reason) {
  return {
    captureIndex,
    kind: entry.kind,
    seam: entry.name,
    label: entry.name,
    status: "blocked",
    reason,
  };
}

function summarizeValue(value) {
  if (typeof value === "function") {
    return { type: "function" };
  }
  if (Array.isArray(value)) {
    return { type: "array", length: value.length };
  }
  if (value && typeof value === "object") {
    return {
      type: "object",
      keys: Object.keys(value).sort(),
    };
  }
  return { type: typeof value, value };
}

async function writeJsonResult(result, outputPath) {
  const json = `${JSON.stringify(result, null, 2)}\n`;
  if (!outputPath) {
    process.stdout.write(json);
    return;
  }
  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, json, "utf8");
}

export function renderSyntheticProbeMarkdown(plan) {
  return [
    "# Crabpot Synthetic Probes",
    "",
    `Generated: ${plan.generatedAt}`,
    "",
    "## Summary",
    "",
    markdownTable(
      [
        ["Fixtures", plan.summary.fixtureCount],
        ["Probes", plan.summary.probeCount],
        ["Hook probes", plan.summary.hookProbeCount],
        ["Registration probes", plan.summary.registrationProbeCount],
        ["Ready", plan.summary.readyCount],
        ["Blocked", plan.summary.blockedCount],
        ["Direct execution", plan.summary.directExecutionCount],
        ["Opt-in execution", plan.summary.optInExecutionCount],
        ["Metadata-only", plan.summary.metadataOnlyCount],
      ],
      ["Metric", "Value"],
    ),
    "",
    "## Probe Inventory",
    "",
    markdownTable(
      plan.probes.map((probe) => [
        probe.fixture,
        probe.kind,
        probe.seam,
        probe.status,
        probe.execution?.mode ?? "hook-direct",
        probe.source,
        probe.assertions.join("; "),
      ]),
      ["Fixture", "Kind", "Seam", "Status", "Execution", "Evidence", "Assertions"],
    ),
  ].join("\n");
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
