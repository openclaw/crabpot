#!/usr/bin/env node
import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { mkdir, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { pathToFileURL } from "node:url";

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  await main();
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (!args.entrypoint) {
    throw new Error("usage: run-openclaw-lifecycle-capture.mjs <entrypoint> [--output <path>]");
  }
  if (process.env.CRABPOT_EXECUTE_ISOLATED !== "1") {
    throw new Error("OpenClaw lifecycle capture requires CRABPOT_EXECUTE_ISOLATED=1");
  }

  const result = await captureOpenClawLifecycle(args.entrypoint);
  await writeJsonResult(result, args.output);
}

function parseArgs(argv) {
  const args = {
    entrypoint: null,
    output: null,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--output") {
      args.output = argv[index + 1];
      index += 1;
      continue;
    }
    if (!args.entrypoint) {
      args.entrypoint = arg;
    }
  }

  return args;
}

export async function captureOpenClawLifecycle(entrypoint) {
  const openclawRoot = path.resolve(process.env.CRABPOT_OPENCLAW_DIR ?? process.cwd());
  const pluginId = "crabpot-lifecycle-probe";
  const pluginRoot = mkdtempSync(path.join(os.tmpdir(), "crabpot-openclaw-plugin-"));
  const stateRoot = mkdtempSync(path.join(os.tmpdir(), "crabpot-openclaw-state-"));
  const wrapperPath = path.join(pluginRoot, "index.mjs");
  const profileLines = [];
  const originalError = console.error;

  try {
    writeProbePlugin({
      entrypoint: path.resolve(entrypoint),
      pluginId,
      pluginRoot,
      wrapperPath,
    });

    process.env.HOME = stateRoot;
    process.env.USERPROFILE = stateRoot;
    process.env.XDG_CONFIG_HOME = path.join(stateRoot, ".config");
    process.env.XDG_DATA_HOME = path.join(stateRoot, ".local", "share");
    process.env.XDG_CACHE_HOME = path.join(stateRoot, ".cache");
    process.env.OPENCLAW_STATE_DIR = stateRoot;
    process.env.OPENCLAW_DISABLE_BUNDLED_PLUGINS = "1";
    process.env.OPENCLAW_PLUGIN_LOAD_PROFILE = "1";
    process.env.OPENCLAW_NO_RESPAWN = "1";

    console.error = (...args) => {
      const line = args.map((arg) => String(arg)).join(" ");
      if (line.startsWith("[plugin-load-profile]")) {
        profileLines.push(line);
        return;
      }
      originalError(...args);
    };

    const { clearPluginLoaderCache, loadOpenClawPlugins } = await import(
      pathToFileURL(path.join(openclawRoot, "src", "plugins", "loader.ts")).href
    );
    const { resetPluginRuntimeStateForTest } = await import(
      pathToFileURL(path.join(openclawRoot, "src", "plugins", "runtime.ts")).href
    );

    clearPluginLoaderCache();
    resetPluginRuntimeStateForTest();

    const registry = loadOpenClawPlugins({
      cache: false,
      workspaceDir: stateRoot,
      config: {
        plugins: {
          load: { paths: [wrapperPath] },
          allow: [pluginId],
          entries: {
            [pluginId]: { enabled: true },
          },
        },
      },
    });
    const plugin = registry.plugins.find((entry) => entry.id === pluginId);
    const phases = profileLines.map(parseProfileLine).filter(Boolean);
    const importPhase = phases.find((phase) => phase.pluginId === pluginId && phase.phase === "full");
    const activationPhase = phases.find(
      (phase) => phase.pluginId === pluginId && phase.phase === "full:register",
    );
    const captured =
      plugin?.status === "loaded" && importPhase && activationPhase
        ? [
            { kind: "openclaw-lifecycle", name: "full", phase: "import" },
            { kind: "openclaw-lifecycle", name: "full:register", phase: "activate" },
          ]
        : [];

    return {
      status: captured.length > 0 ? "captured" : "failed",
      entrypoint: path.resolve(entrypoint),
      captured,
      openClawLifecycle: {
        status: plugin?.status ?? "missing",
        pluginId,
        importPhase: "full",
        activationPhase: "full:register",
        importMs: importPhase?.elapsedMs ?? null,
        activationMs: activationPhase?.elapsedMs ?? null,
        openclawPath: openclawRoot,
        phases,
      },
      ...(plugin?.error ? { error: plugin.error } : {}),
    };
  } finally {
    console.error = originalError;
    rmSync(pluginRoot, { recursive: true, force: true });
    rmSync(stateRoot, { recursive: true, force: true });
  }
}

function writeProbePlugin(params) {
  writeFileSync(
    path.join(params.pluginRoot, "openclaw.plugin.json"),
    `${JSON.stringify(
      {
        id: params.pluginId,
        name: "Crabpot lifecycle probe",
        configSchema: {
          type: "object",
          additionalProperties: false,
          properties: {},
        },
      },
      null,
      2,
    )}\n`,
    "utf8",
  );
  writeFileSync(
    params.wrapperPath,
    [
      `import * as entrypointModule from ${JSON.stringify(pathToFileURL(params.entrypoint).href)};`,
      "",
      "function resolveRegister(moduleExport) {",
      "  const candidates = [moduleExport?.default, moduleExport];",
      "  for (const candidate of candidates) {",
      "    if (typeof candidate === 'function') return candidate;",
      "    if (candidate && typeof candidate === 'object') {",
      "      const register = candidate.register ?? candidate.activate;",
      "      if (typeof register === 'function') return register.bind(candidate);",
      "    }",
      "  }",
      "  return null;",
      "}",
      "",
      "const register = resolveRegister(entrypointModule);",
      "if (!register) throw new Error('entrypoint missing register/activate export');",
      "",
      "export default {",
      `  id: ${JSON.stringify(params.pluginId)},`,
      "  register(api) {",
      "    return register(api);",
      "  },",
      "};",
      "",
    ].join("\n"),
    "utf8",
  );
}

function parseProfileLine(line) {
  const match = /^\[plugin-load-profile\] phase=(\S+) plugin=(\S+) elapsedMs=([0-9.]+)(?: .*)? source=(.+)$/u.exec(
    line,
  );
  if (!match) {
    return null;
  }
  return {
    phase: match[1],
    pluginId: match[2],
    elapsedMs: Number.parseFloat(match[3]),
    source: match[4],
  };
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
