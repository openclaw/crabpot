#!/usr/bin/env node
import { spawnSync } from "node:child_process";
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { readManifest, repoRoot } from "./manifest-lib.mjs";
import { loadPluginInspectorPublicApi, resolvePluginInspectorCliInvocation } from "./plugin-inspector-source.mjs";

const defaultPluginRoot = path.join(repoRoot, ".crabpot/generated-surface-plugin");
const defaultReportJsonPath = path.join(repoRoot, "reports/crabpot-generated-surface.json");
const defaultReportMarkdownPath = path.join(repoRoot, "reports/crabpot-generated-surface.md");

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  await main();
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const report = await buildGeneratedSurfaceReport(args);

  if (args.write) {
    await writeGeneratedSurfaceReport(report, args);
  }

  if (args.json) {
    console.log(JSON.stringify(report, null, 2));
  } else {
    console.log(
      `generated surface: ${report.status.toUpperCase()} (${report.summary.missingStaticCount} static missing, ${report.summary.missingRuntimeCount} runtime missing)`,
    );
  }

  if (report.errors.length > 0) {
    throw new Error(report.errors.join("\n"));
  }
}

function parseArgs(argv) {
  const args = {
    json: false,
    openclawPath: undefined,
    pluginRoot: defaultPluginRoot,
    reportJsonPath: defaultReportJsonPath,
    reportMarkdownPath: defaultReportMarkdownPath,
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
    if (arg === "--plugin-root") {
      args.pluginRoot = path.resolve(repoRoot, argv[index + 1]);
      index += 1;
      continue;
    }
    if (arg === "--report-json") {
      args.reportJsonPath = path.resolve(repoRoot, argv[index + 1]);
      index += 1;
      continue;
    }
    if (arg === "--report-md") {
      args.reportMarkdownPath = path.resolve(repoRoot, argv[index + 1]);
      index += 1;
      continue;
    }
    if (arg === "--write") {
      args.write = true;
    }
  }

  return args;
}

export async function buildGeneratedSurfaceReport(options = {}) {
  const manifest = await readManifest();
  const pluginInspector = await loadPluginInspectorPublicApi();
  const targetOpenClaw = await pluginInspector.reports.readOpenClawTargetSurface({
    configuredPath: options.openclawPath,
    manifest,
    rootDir: repoRoot,
  });
  const errors = [];

  if (targetOpenClaw.status !== "ok") {
    errors.push(`target OpenClaw unavailable: ${targetOpenClaw.status} (${targetOpenClaw.configuredPath ?? "not configured"})`);
    return emptyReport({ targetOpenClaw, errors, options });
  }

  const expected = await expectedSurface(targetOpenClaw);
  validateTargetSurface(expected, errors);

  const pluginRoot = options.pluginRoot ?? defaultPluginRoot;
  await generateSurfacePlugin(pluginRoot, { expected, targetOpenClaw });

  const staticResult = runPluginInspector(pluginRoot, { runtime: false });
  const runtimeResult = runPluginInspector(pluginRoot, { runtime: true });
  const staticReport = staticResult.status === 0
    ? await readJson(path.join(pluginRoot, "reports/plugin-inspector-report.json"))
    : { fixtures: [] };
  const runtimeReport = runtimeResult.status === 0
    ? await readJson(path.join(pluginRoot, "reports/plugin-inspector-runtime-capture.json"))
    : { results: [] };
  const observed = observedSurface({ staticReport, runtimeReport });
  const missing = missingSurface(expected, observed);

  for (const failure of [...staticResult.failures, ...runtimeResult.failures]) {
    errors.push(failure);
  }
  for (const [section, values] of Object.entries(missing.static)) {
    for (const value of values) {
      errors.push(`static ${section} missing: ${value}`);
    }
  }
  for (const [section, values] of Object.entries(missing.runtime)) {
    for (const value of values) {
      errors.push(`runtime ${section} missing: ${value}`);
    }
  }

  return {
    generatedAt: new Date().toISOString(),
    status: errors.length === 0 ? "pass" : "fail",
    pluginRoot: path.relative(repoRoot, pluginRoot),
    targetOpenClaw: {
      status: targetOpenClaw.status,
      configuredPath: targetOpenClaw.configuredPath,
      hookNameCount: targetOpenClaw.hookNameCount,
      apiRegistrarCount: targetOpenClaw.apiRegistrarCount,
      sdkExportCount: targetOpenClaw.sdkExportCount,
      manifestContractFieldCount: targetOpenClaw.manifestContractFieldCount,
      directCallbackCount: expected.directCallbacks.length,
    },
    summary: {
      expectedHookCount: expected.hooks.length,
      expectedRegistrarCount: expected.registrars.length,
      expectedDirectCallbackCount: expected.directCallbacks.length,
      expectedSdkExportCount: expected.sdkExports.length,
      expectedManifestContractCount: expected.manifestContracts.length,
      staticHookCount: observed.static.hooks.length,
      staticRegistrarCount: observed.static.registrars.length,
      staticSdkImportCount: observed.static.sdkImports.length,
      staticManifestContractCount: observed.static.manifestContracts.length,
      runtimeHookCount: observed.runtime.hooks.length,
      runtimeRegistrarCount: observed.runtime.registrars.length,
      runtimeDirectCallbackCount: observed.runtime.directCallbacks.length,
      missingStaticCount: countMissing(missing.static),
      missingRuntimeCount: countMissing(missing.runtime),
    },
    expected,
    observed,
    missing,
    inspector: {
      static: staticResult,
      runtime: runtimeResult,
    },
    errors,
  };
}

function emptyReport({ targetOpenClaw, errors, options }) {
  return {
    generatedAt: new Date().toISOString(),
    status: "fail",
    pluginRoot: path.relative(repoRoot, options.pluginRoot ?? defaultPluginRoot),
    targetOpenClaw,
    summary: {
      expectedHookCount: 0,
      expectedRegistrarCount: 0,
      expectedDirectCallbackCount: 0,
      expectedSdkExportCount: 0,
      expectedManifestContractCount: 0,
      staticHookCount: 0,
      staticRegistrarCount: 0,
      staticSdkImportCount: 0,
      staticManifestContractCount: 0,
      runtimeHookCount: 0,
      runtimeRegistrarCount: 0,
      runtimeDirectCallbackCount: 0,
      missingStaticCount: 0,
      missingRuntimeCount: 0,
    },
    expected: emptySurface(),
    observed: { static: emptySurface(), runtime: emptyRuntimeSurface() },
    missing: { static: emptySurface(), runtime: emptyRuntimeSurface() },
    inspector: { static: null, runtime: null },
    errors,
  };
}

async function expectedSurface(targetOpenClaw) {
  return {
    hooks: targetOpenClaw.hookNames ?? [],
    registrars: targetOpenClaw.apiRegistrars ?? [],
    directCallbacks: await readDirectCallbackMethods(targetOpenClaw),
    sdkExports: targetOpenClaw.sdkExports ?? [],
    manifestContracts: targetOpenClaw.manifestContractFields ?? [],
  };
}

function validateTargetSurface(expected, errors) {
  for (const [section, values] of Object.entries(expected)) {
    if (section !== "directCallbacks" && (!Array.isArray(values) || values.length === 0)) {
      errors.push(`target OpenClaw has no parsed ${section}`);
    }
  }
}

async function generateSurfacePlugin(pluginRoot, { expected, targetOpenClaw }) {
  await rm(pluginRoot, { recursive: true, force: true });
  await mkdir(path.join(pluginRoot, "src"), { recursive: true });

  await writeFile(
    path.join(pluginRoot, "package.json"),
    `${JSON.stringify(packageJson(targetOpenClaw), null, 2)}\n`,
    "utf8",
  );
  await writeFile(
    path.join(pluginRoot, "plugin-inspector.config.json"),
    `${JSON.stringify(inspectorConfig(expected), null, 2)}\n`,
    "utf8",
  );
  await writeFile(
    path.join(pluginRoot, "openclaw.plugin.json"),
    `${JSON.stringify(pluginManifest(expected, targetOpenClaw), null, 2)}\n`,
    "utf8",
  );
  await writeFile(path.join(pluginRoot, "src/index.js"), renderIndex(), "utf8");
  await writeFile(path.join(pluginRoot, "src/generated-hooks.js"), renderHooks(expected.hooks), "utf8");
  await writeFile(path.join(pluginRoot, "src/generated-registrars.js"), renderRegistrars(expected.registrars), "utf8");
  await writeFile(path.join(pluginRoot, "src/generated-direct-callbacks.js"), renderDirectCallbacks(expected.directCallbacks), "utf8");
  await writeFile(path.join(pluginRoot, "src/generated-sdk-imports.ts"), renderSdkImports(expected.sdkExports), "utf8");
}

function packageJson(targetOpenClaw) {
  return {
    name: "crabpot-generated-openclaw-surface",
    version: "0.0.0",
    private: true,
    type: "module",
    openclaw: {
      extensions: ["./src/index.js"],
      compat: {
        pluginApi: targetOpenClaw.configuredPath ?? "target-openclaw",
      },
    },
  };
}

function inspectorConfig(expected) {
  const expect = Object.fromEntries(
    [
      ["hooks", expected.hooks],
      ["registrations", expected.registrars],
      ["manifestContracts", expected.manifestContracts],
    ].filter(([, values]) => values.length > 0),
  );
  return {
    version: 1,
    plugin: {
      id: "crabpot-generated-openclaw-surface",
      priority: "high",
      seams: ["generated-surface", "plugin-inspector-coverage"],
      sourceRoot: ".",
      expect,
    },
    capture: {
      runtime: true,
      mockSdk: true,
    },
  };
}

function pluginManifest(expected, targetOpenClaw) {
  return {
    id: "crabpot-generated-openclaw-surface",
    name: "Crabpot Generated OpenClaw Surface",
    version: "0.0.0",
    description: `Generated surface fixture for ${targetOpenClaw.configuredPath ?? "target OpenClaw"}.`,
    enabledByDefault: false,
    configSchema: { type: "object", additionalProperties: true },
    contracts: Object.fromEntries(
      expected.manifestContracts.map((field) => [field, [`crabpot-generated-${kebab(field)}`]]),
    ),
  };
}

function renderIndex() {
  return `import { registerGeneratedHooks } from "./generated-hooks.js";
import { registerGeneratedRegistrars } from "./generated-registrars.js";
import { registerGeneratedDirectCallbacks } from "./generated-direct-callbacks.js";

export function register(api) {
  registerGeneratedHooks(api);
  registerGeneratedRegistrars(api);
  registerGeneratedDirectCallbacks(api);
}

export default { register };
`;
}

function renderHooks(hooks) {
  const safeHooks = hooks.map((hook) => safeSurfaceName(hook, "hook"));
  return `// Generated by Crabpot. Do not edit by hand.
export function registerGeneratedHooks(api) {
${safeHooks.map((hook) => `  api.on(${jsStringLiteral(hook)}, async () => ({ ok: true, hook: ${jsStringLiteral(hook)} }));`).join("\n")}
}
`;
}

function renderDirectCallbacks(directCallbacks) {
  const safeCallbacks = directCallbacks.map((callback) => safeSurfaceName(callback, "direct callback"));
  return `// Generated by Crabpot. Do not edit by hand.
export function registerGeneratedDirectCallbacks(api) {
${safeCallbacks.map((callback) => `  api.${callback}(async () => ({ ok: true, callback: ${jsStringLiteral(callback)} }));`).join("\n")}
}
`;
}

function renderRegistrars(registrars) {
  const safeRegistrars = registrars.map((registrar) => safeSurfaceName(registrar, "registrar"));
  return `// Generated by Crabpot. Do not edit by hand.
export function registerGeneratedRegistrars(api) {
${safeRegistrars.map((registrar) => `  api.${registrar}(payloadFor(${jsStringLiteral(registrar)}));`).join("\n")}
}

function payloadFor(registrar) {
  const id = "crabpot-generated-" + kebab(registrar.replace(/^register/, "") || "registration");
  return {
    id,
    name: id,
    command: id,
    description: "Generated Crabpot probe for " + registrar,
    method: "POST",
    path: "/" + id,
    inputSchema: objectSchema(),
    schema: objectSchema(),
    configSchema: objectSchema(),
    handler: async () => ({ ok: true, registrar }),
    run: async () => ({ ok: true, registrar }),
    execute: async () => ({ ok: true, registrar }),
    start: async () => undefined,
    stop: async () => undefined,
    setup: async () => ({ ok: true, registrar }),
    probe: async () => ({ enabled: false, reason: "generated fixture" }),
    render: async () => "generated fixture",
    create: async () => ({ ok: true, registrar }),
    transform: async (value) => value,
    migrate: async (value) => value,
    speak: async () => ({ audio: new Uint8Array(), mimeType: "audio/wav" }),
    synthesize: async () => ({ audio: new Uint8Array(), mimeType: "audio/wav" }),
    send: async () => ({ ok: true }),
    receive: async () => ({ ok: true }),
  };
}

function objectSchema() {
  return { type: "object", additionalProperties: true };
}

function kebab(value) {
  return String(value).replace(/[A-Z]/g, (letter, index) => (index === 0 ? "" : "-") + letter.toLowerCase()).replace(/^-/, "");
}
`;
}

function safeSurfaceName(value, label) {
  const text = String(value);
  if (!/^[A-Za-z_$][0-9A-Za-z_$]*(?::[A-Za-z_$][0-9A-Za-z_$]*)*$/.test(text)) {
    throw new Error(`unsafe generated ${label} name: ${text}`);
  }
  return text;
}

function jsStringLiteral(value) {
  return escapeUnsafeCodeChars(JSON.stringify(value));
}

const unsafeCodeCharEscapes = Object.freeze({
  "<": "\\u003C",
  ">": "\\u003E",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "\t": "\\t",
  "\0": "\\0",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029",
});

function escapeUnsafeCodeChars(value) {
  return value.replace(/[<>\b\f\n\r\t\0\u2028\u2029]/g, (char) => unsafeCodeCharEscapes[char]);
}

function renderSdkImports(sdkExports) {
  return `// Generated by Crabpot. Do not edit by hand.
${sdkExports.map((specifier, index) => `import type * as sdk${index} from ${JSON.stringify(specifier)};`).join("\n")}

export type CrabpotGeneratedSdkSurface =
${sdkExports.map((_, index) => `  | typeof sdk${index}`).join("\n")};
`;
}

function runPluginInspector(pluginRoot, { runtime }) {
  const invocation = resolvePluginInspectorCliInvocation();
  const commandArgs = [
    ...invocation.args,
    "check",
    "--config",
    "plugin-inspector.config.json",
    "--no-openclaw",
    "--out",
    "reports",
    ...(runtime ? ["--runtime", "--mock-sdk"] : ["--no-runtime"]),
  ];
  const result = spawnSync(invocation.command, commandArgs, {
    cwd: pluginRoot,
    encoding: "utf8",
    env: {
      ...process.env,
      ...(runtime ? { PLUGIN_INSPECTOR_EXECUTE_ISOLATED: "1" } : {}),
    },
    shell: invocation.shell === true,
  });

  return {
    command: displayCommand(invocation.command, commandArgs),
    status: result.status,
    stdout: normalizeOutputPaths(result.stdout),
    stderr: normalizeOutputPaths(result.stderr),
    failures: result.status === 0
      ? []
      : [
          `plugin-inspector ${runtime ? "runtime" : "static"} failed with ${result.status}: ${normalizeOutputPaths(
            result.error?.message || result.stderr || result.stdout,
          )}`,
        ],
  };
}

function displayCommand(command, commandArgs) {
  const displayName = command === process.execPath ? "node" : normalizeOutputPaths(command);
  return [displayName, ...commandArgs.map((arg) => normalizeOutputPaths(arg))].join(" ");
}

function normalizeOutputPaths(value) {
  const workspaceParent = path.dirname(repoRoot);
  return String(value ?? "")
    .split(repoRoot)
    .join(".")
    .split(workspaceParent)
    .join("..");
}

function observedSurface({ staticReport, runtimeReport }) {
  const fixture = staticReport.fixtures?.[0] ?? {};
  const captured = runtimeReport.results?.flatMap((result) => result.captured ?? []) ?? [];
  return {
    static: {
      hooks: unique(fixture.hooks ?? []),
      registrars: unique(fixture.registrations ?? []),
      sdkExports: unique((fixture.sdkImports ?? []).map((item) => item.specifier ?? item).filter(Boolean)),
      sdkImports: unique((fixture.sdkImports ?? []).map((item) => item.specifier ?? item).filter(Boolean)),
      manifestContracts: unique(fixture.manifestContracts ?? []),
    },
    runtime: {
      hooks: unique(captured.filter((item) => item.kind === "hook" && !/^on[A-Z]/.test(item.name ?? "")).map((item) => item.name)),
      registrars: unique(captured.filter((item) => item.kind === "registration").map((item) => item.name)),
      directCallbacks: unique(captured.filter((item) => item.kind === "hook" && /^on[A-Z]/.test(item.name ?? "")).map((item) => item.name)),
    },
  };
}

function missingSurface(expected, observed) {
  return {
    static: {
      hooks: expected.hooks.filter((item) => !observed.static.hooks.includes(item)),
      registrars: expected.registrars.filter((item) => !observed.static.registrars.includes(item)),
      sdkExports: expected.sdkExports.filter((item) => !observed.static.sdkExports.includes(item)),
      manifestContracts: expected.manifestContracts.filter((item) => !observed.static.manifestContracts.includes(item)),
    },
    runtime: {
      hooks: expected.hooks.filter((item) => !observed.runtime.hooks.includes(item)),
      registrars: expected.registrars.filter((item) => !observed.runtime.registrars.includes(item)),
      directCallbacks: expected.directCallbacks.filter((item) => !observed.runtime.directCallbacks.includes(item)),
    },
  };
}

async function writeGeneratedSurfaceReport(report, options = {}) {
  await mkdir(path.dirname(options.reportJsonPath ?? defaultReportJsonPath), { recursive: true });
  await mkdir(path.dirname(options.reportMarkdownPath ?? defaultReportMarkdownPath), { recursive: true });
  await writeFile(options.reportJsonPath ?? defaultReportJsonPath, `${JSON.stringify(report, null, 2)}\n`, "utf8");
  await writeFile(options.reportMarkdownPath ?? defaultReportMarkdownPath, `${renderMarkdown(report)}\n`, "utf8");
}

function renderMarkdown(report) {
  return [
    "# Crabpot Generated Surface Fixture",
    "",
    `Generated: ${report.generatedAt}`,
    `Status: ${report.status.toUpperCase()}`,
    "",
    "## Summary",
    "",
    markdownTable(
      [
        ["Expected hooks", report.summary.expectedHookCount],
        ["Expected registrars", report.summary.expectedRegistrarCount],
        ["Expected direct callbacks", report.summary.expectedDirectCallbackCount],
        ["Expected SDK exports", report.summary.expectedSdkExportCount],
        ["Expected manifest contracts", report.summary.expectedManifestContractCount],
        ["Static hooks", report.summary.staticHookCount],
        ["Static registrars", report.summary.staticRegistrarCount],
        ["Static SDK imports", report.summary.staticSdkImportCount],
        ["Static manifest contracts", report.summary.staticManifestContractCount],
        ["Runtime hooks", report.summary.runtimeHookCount],
        ["Runtime registrars", report.summary.runtimeRegistrarCount],
        ["Runtime direct callbacks", report.summary.runtimeDirectCallbackCount],
        ["Missing static surface", report.summary.missingStaticCount],
        ["Missing runtime surface", report.summary.missingRuntimeCount],
      ],
      ["Metric", "Value"],
    ),
    "",
    "## Missing Static Surface",
    "",
    missingMarkdown(report.missing.static),
    "",
    "## Missing Runtime Surface",
    "",
    missingMarkdown(report.missing.runtime),
    "",
    "## Errors",
    "",
    report.errors.length > 0 ? report.errors.map((error) => `- ${error}`).join("\n") : "_none_",
  ].join("\n");
}

function missingMarkdown(surface) {
  const rows = Object.entries(surface).flatMap(([section, values]) => values.map((value) => [section, value]));
  return markdownTable(rows, ["Section", "Value"]);
}

function markdownTable(rows, headers) {
  if (rows.length === 0) {
    return "_none_";
  }
  const allRows = [headers, ...rows.map((row) => row.map(String))];
  const widths = headers.map((_, index) => Math.max(...allRows.map((row) => row[index].length)));
  const renderRow = (row) => `| ${row.map((cell, index) => cell.padEnd(widths[index])).join(" | ")} |`;
  return [
    renderRow(headers),
    renderRow(widths.map((width) => "-".repeat(width))),
    ...rows.map((row) => renderRow(row.map(String))),
  ].join("\n");
}

async function readJson(filePath) {
  return JSON.parse(await readFile(filePath, "utf8"));
}

function emptySurface() {
  return {
    hooks: [],
    registrars: [],
    sdkExports: [],
    manifestContracts: [],
    directCallbacks: [],
  };
}

function emptyRuntimeSurface() {
  return {
    hooks: [],
    registrars: [],
    directCallbacks: [],
  };
}

async function readDirectCallbackMethods(targetOpenClaw) {
  if (!targetOpenClaw.configuredPath) {
    return [];
  }
  const typesPath = path.resolve(repoRoot, targetOpenClaw.configuredPath, "src/plugins/types.ts");
  if (!existsSync(typesPath)) {
    return [];
  }
  const source = await readFile(typesPath, "utf8");
  return parseDirectCallbackMethods(source);
}

function parseDirectCallbackMethods(source) {
  const body = readExportedTypeBody(source, "OpenClawPluginApi");
  if (!body) {
    return [];
  }
  return unique(
    [...body.matchAll(/^\s*([A-Za-z][A-Za-z0-9]*)\??:\s*(?:<[^;]+>\s*)?\(/gm)]
      .map((match) => match[1])
      .filter((name) => /^on[A-Z]/.test(name)),
  ).sort();
}

function readExportedTypeBody(source, typeName) {
  const marker = `export type ${typeName} = {`;
  const start = source.indexOf(marker);
  if (start === -1) {
    return "";
  }
  const bodyStart = start + marker.length;
  const end = source.indexOf("\n};", bodyStart);
  return end === -1 ? "" : source.slice(bodyStart, end);
}

function countMissing(surface) {
  return Object.values(surface).reduce((count, values) => count + values.length, 0);
}

function unique(values) {
  return [...new Set(values)].sort();
}

function kebab(value) {
  return String(value).replace(/[A-Z]/g, (letter, index) => (index === 0 ? "" : "-") + letter.toLowerCase()).replace(/^-/, "");
}
