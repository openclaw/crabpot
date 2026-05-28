#!/usr/bin/env node
import { spawn } from "node:child_process";
import { randomUUID } from "node:crypto";
import { existsSync } from "node:fs";
import { mkdir, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { createServer } from "node:http";
import net from "node:net";
import os from "node:os";
import path from "node:path";
import { pathToFileURL } from "node:url";

export const repoRoot = path.resolve(import.meta.dirname, "..");
export const defaultProfileDir = path.join(repoRoot, "evals", "profiles");
export const defaultScenarioDir = path.join(repoRoot, "evals", "scenarios");
export const defaultBehaviorEvalJsonPath = path.join(repoRoot, "reports", "crabpot-behavior-evals.json");
export const defaultBehaviorEvalMarkdownPath = path.join(repoRoot, "reports", "crabpot-behavior-evals.md");
export const defaultBehaviorEvalResultsDir = path.join(repoRoot, ".crabpot", "results", "behavior");

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  await main();
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const profile = await loadBehaviorEvalProfile(args.profile, {
    profileDir: args.profileDir,
  });
  const resolvedProfile = resolveBehaviorEvalProfile({
    profile,
    overrides: {
      openclawVersion: args.openclawVersion,
      openclawPath: args.openclawPath,
      pluginSpec: args.pluginSpec,
      expectationMode: args.expectationMode,
      runnerExecution: args.runnerExecution,
      scenarioId: args.scenarioId,
    },
  });
  const scenario = await loadBehaviorEvalScenario(resolvedProfile.scenario, {
    scenarioDir: args.scenarioDir,
  });
  const plan = buildBehaviorEvalPlan({ profile: resolvedProfile, scenario });
  const report = renderBehaviorEvalReport(plan);
  const markdown = renderBehaviorEvalMarkdown(plan);

  if (args.execute) {
    const execution = await executeBehaviorEvalPlan(plan, {
      env: process.env,
      keepTemp: args.keepTemp,
      timeoutMs: args.timeoutMs,
    });
    process.exitCode = behaviorEvalExecutionExitCode(execution, plan.expectation.mode);
    await writeBehaviorEvalExecutionResult(execution, {
      resultsDir: args.resultsDir,
    });
    const executionReport = {
      ...report,
      executions: [execution],
    };
    if (args.json) {
      process.stdout.write(`${JSON.stringify(executionReport, null, 2)}\n`);
      return;
    }
    process.stdout.write(renderBehaviorEvalExecutionMarkdown(plan, execution));
    return;
  }

  if (args.json) {
    process.stdout.write(`${JSON.stringify(report, null, 2)}\n`);
    return;
  }

  if (args.check) {
    await assertReportMatches({ report, markdown, jsonPath: args.jsonPath, markdownPath: args.markdownPath });
    return;
  }

  if (args.write) {
    await writeBehaviorEvalReport({ report, markdown, jsonPath: args.jsonPath, markdownPath: args.markdownPath });
    process.stdout.write(`behavior eval report: ${path.relative(repoRoot, args.markdownPath)}\n`);
    return;
  }

  process.stdout.write(markdown);
}

function parseArgs(argv) {
  const args = {
    check: false,
    execute: false,
    json: false,
    keepTemp: false,
    write: false,
    profile: "forward-lcm-release-gate",
    scenarioId: undefined,
    profileDir: defaultProfileDir,
    scenarioDir: defaultScenarioDir,
    jsonPath: defaultBehaviorEvalJsonPath,
    markdownPath: defaultBehaviorEvalMarkdownPath,
    resultsDir: defaultBehaviorEvalResultsDir,
    openclawVersion: undefined,
    openclawPath: undefined,
    pluginSpec: undefined,
    expectationMode: undefined,
    runnerExecution: undefined,
    timeoutMs: undefined,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--profile") {
      args.profile = requireValue(argv, ++index, arg);
      continue;
    }
    if (arg === "--scenario") {
      args.scenarioId = requireValue(argv, ++index, arg);
      continue;
    }
    if (arg === "--profile-dir") {
      args.profileDir = path.resolve(requireValue(argv, ++index, arg));
      continue;
    }
    if (arg === "--scenario-dir") {
      args.scenarioDir = path.resolve(requireValue(argv, ++index, arg));
      continue;
    }
    if (arg === "--openclaw-version") {
      args.openclawVersion = requireValue(argv, ++index, arg);
      continue;
    }
    if (arg === "--openclaw") {
      args.openclawPath = requireValue(argv, ++index, arg);
      continue;
    }
    if (arg === "--plugin") {
      args.pluginSpec = requireValue(argv, ++index, arg);
      continue;
    }
    if (arg === "--expect") {
      args.expectationMode = requireValue(argv, ++index, arg);
      continue;
    }
    if (arg === "--runner") {
      args.runnerExecution = requireValue(argv, ++index, arg);
      continue;
    }
    if (arg === "--json") {
      args.json = true;
      continue;
    }
    if (arg === "--execute") {
      args.execute = true;
      continue;
    }
    if (arg === "--keep-temp") {
      args.keepTemp = true;
      continue;
    }
    if (arg === "--timeout-ms") {
      args.timeoutMs = parsePositiveInteger(requireValue(argv, ++index, arg), arg);
      continue;
    }
    if (arg === "--write") {
      args.write = true;
      continue;
    }
    if (arg === "--check") {
      args.check = true;
      continue;
    }
    if (arg === "--json-path") {
      args.jsonPath = path.resolve(requireValue(argv, ++index, arg));
      continue;
    }
    if (arg === "--markdown-path") {
      args.markdownPath = path.resolve(requireValue(argv, ++index, arg));
      continue;
    }
    if (arg === "--results-dir") {
      args.resultsDir = path.resolve(requireValue(argv, ++index, arg));
      continue;
    }
    throw new Error(`unknown argument: ${arg}`);
  }

  return args;
}

function requireValue(argv, index, flag) {
  const value = argv[index];
  if (!value || value.startsWith("--")) {
    throw new Error(`${flag} requires a value`);
  }
  return value;
}

function parsePositiveInteger(value, flag) {
  const parsed = Number(value);
  if (!Number.isInteger(parsed) || parsed <= 0) {
    throw new Error(`${flag} requires a positive integer`);
  }
  return parsed;
}

export async function loadBehaviorEvalProfile(profileId, options = {}) {
  const profileDir = options.profileDir ?? defaultProfileDir;
  const profilePath = path.join(profileDir, `${profileId}.json`);
  const profile = await readJson(profilePath);
  validateBehaviorEvalProfile(profile, profilePath);
  return profile;
}

export async function loadBehaviorEvalScenario(scenarioId, options = {}) {
  const scenarioDir = options.scenarioDir ?? defaultScenarioDir;
  const scenarioPath = path.join(scenarioDir, `${scenarioId}.json`);
  const scenario = await readJson(scenarioPath);
  validateBehaviorEvalScenario(scenario, scenarioPath);
  return scenario;
}

export function resolveBehaviorEvalProfile({ profile, overrides = {} }) {
  const next = cloneJson(profile);
  if (overrides.scenarioId) {
    next.scenario = overrides.scenarioId;
  }
  if (overrides.openclawPath) {
    next.openclaw = {
      source: "path",
      path: path.resolve(overrides.openclawPath),
    };
  } else if (overrides.openclawVersion) {
    next.openclaw = {
      source: "npm",
      version: overrides.openclawVersion,
    };
  }
  if (overrides.pluginSpec) {
    if (!Array.isArray(next.plugins) || next.plugins.length !== 1) {
      throw new Error("--plugin override requires exactly one plugin in the profile");
    }
    next.plugins[0] = {
      ...next.plugins[0],
      source: "npm",
      spec: normalizeNpmPluginSpec(overrides.pluginSpec),
    };
  }
  if (overrides.expectationMode) {
    next.expectation = {
      ...next.expectation,
      mode: overrides.expectationMode,
    };
  }
  if (overrides.runnerExecution) {
    next.runner = {
      ...next.runner,
      execution: overrides.runnerExecution,
    };
  }
  validateBehaviorEvalProfile(next, next.id ?? "profile override");
  return next;
}

export function buildBehaviorEvalPlan({ profile, scenario }) {
  validateBehaviorEvalProfile(profile, profile.id ?? "profile");
  validateBehaviorEvalScenario(scenario, scenario.id ?? "scenario");
  if (profile.scenario !== scenario.id) {
    throw new Error(`profile ${profile.id} references scenario ${profile.scenario}, got ${scenario.id}`);
  }

  const pluginEntries = Object.fromEntries(
    profile.plugins.map((plugin) => [
      plugin.id,
      {
        enabled: true,
      },
    ]),
  );
  const slots = Object.fromEntries(
    profile.plugins
      .filter((plugin) => plugin.slot)
      .map((plugin) => [plugin.slot, plugin.id]),
  );
  const openclaw = formatOpenClawTarget(profile.openclaw);
  const openclawCommand = openclawInvocation(profile.openclaw);
  const installCommands = profile.plugins.map((plugin) => `${openclawCommand} plugins install ${formatPluginInstallSpec(plugin)} --pin`);
  const configPatch = {
    plugins: {
      ...(Object.keys(slots).length > 0 ? { slots } : {}),
      entries: pluginEntries,
    },
  };
  const reportStatus = plannedStatusForExpectation(profile.expectation.mode);

  return {
    generatedAt: "deterministic",
    profileId: profile.id,
    category: profile.category,
    scenario,
    expectation: cloneJson(profile.expectation),
    plugins: cloneJson(profile.plugins),
    expectedFailureClasses: [...(profile.expectation.failureClasses ?? [])],
    summary: {
      openclaw,
      plugins: profile.plugins.map(formatPluginSummary).join(", "),
      runner: profile.runner.execution,
      providerMode: profile.runner.providerMode,
      timeoutMs: profile.runner.timeoutMs,
    },
    configPatch,
    steps: [
      {
        id: "isolate",
        title: "Create isolated temp state",
        description: "Create temp HOME, OPENCLAW_HOME, OPENCLAW_STATE_DIR, OPENCLAW_CONFIG_PATH, and XDG dirs.",
      },
      {
        id: "openclaw",
        title: "Resolve OpenClaw CLI",
        description: `Use ${openclaw}.`,
        command: `${openclawCommand} --version`,
      },
      {
        id: "plugin",
        title: "Install plugin",
        description: `Install ${profile.plugins.map((plugin) => plugin.id).join(", ")}.`,
        command: installCommands.join("\n"),
      },
      {
        id: "config",
        title: "Patch isolated config",
        description: "Enable plugin entries and select any requested exclusive slot.",
        configPatch,
      },
      {
        id: "gateway",
        title: "Start gateway",
        description: `Run the foreground gateway with provider mode ${profile.runner.providerMode}.`,
        command: `${openclawCommand} gateway run --allow-unconfigured --bind loopback --port <free-port> --token <token>`,
      },
      {
        id: "scenario",
        title: "Run scenario",
        description: scenario.description,
        checks: scenario.checks.map((check) => check.id),
      },
      {
        id: "report",
        title: "Classify result",
        description: `Expected mode is ${profile.expectation.mode}.`,
      },
    ],
    report: {
      status: reportStatus,
      resultMode: profile.expectation.mode,
      failureClasses: [...(profile.expectation.failureClasses ?? [])],
    },
  };
}

export function renderBehaviorEvalReport(plan) {
  return {
    generatedAt: plan.generatedAt,
    summary: plan.summary,
    profiles: [
      {
        id: plan.profileId,
        category: plan.category,
        scenario: plan.scenario.id,
        status: plan.report.status,
        expectation: plan.expectation,
        stepCount: plan.steps.length,
      },
    ],
    plans: [plan],
  };
}

export function renderBehaviorEvalMarkdown(plan) {
  const lines = [
    "# Crabpot Behavior Eval Plan",
    "",
    `- Profile: ${plan.profileId}`,
    `- Category: ${plan.category}`,
    `- Scenario: ${plan.scenario.id}`,
    `- OpenClaw: ${plan.summary.openclaw}`,
    `- Plugins: ${plan.summary.plugins}`,
    `- Runner: ${plan.summary.runner} (${plan.summary.providerMode})`,
    `- Expected mode: ${plan.expectation.mode}`,
  ];
  if (plan.expectedFailureClasses.length > 0) {
    lines.push(`- Expected failure classes: ${plan.expectedFailureClasses.join(", ")}`);
  }
  lines.push("", "## Steps", "");
  for (const [index, step] of plan.steps.entries()) {
    lines.push(`${index + 1}. ${step.title}`);
    lines.push(`   ${step.description}`);
    if (step.command) {
      lines.push("", "   ```sh", indentBlock(step.command, "   "), "   ```", "");
    }
  }
  lines.push("## Scenario Checks", "");
  for (const check of plan.scenario.checks) {
    lines.push(`- ${check.id}: ${check.description}`);
  }
  lines.push("", "## Planned Classification", "", `- Status: ${plan.report.status}`, "");
  return `${lines.join("\n")}\n`;
}

export async function executeBehaviorEvalPlan(plan, options = {}) {
  validateBehaviorEvalExecutionRequest({ env: options.env });
  validateBehaviorEvalRunner(plan);
  const workspace = options.workspace ?? (await createBehaviorEvalWorkspace());
  const ownsWorkspace = !options.workspace;
  const getFreePortFn = options.getFreePort ?? getFreePort;
  const port = await getFreePortFn();
  const token = options.gatewayToken ?? `crabpot-${randomUUID()}`;
  const runCommand = options.runCommand ?? runBehaviorEvalCommand;
  const startGateway = options.startGateway ?? startBehaviorEvalGateway;
  const startProvider = options.startProvider ?? startBehaviorEvalProvider;
  const runScenario = options.runScenario ?? runBehaviorEvalScenario;
  const runGatewayRpc = options.runGatewayRpc ?? runBehaviorEvalGatewayRpc;
  const runtimeEnv = buildBehaviorEvalRuntimeEnv({
    baseEnv: options.env,
    port,
    token,
    workspace,
  });
  const timeoutMs = options.timeoutMs ?? plan.summary.timeoutMs;
  const steps = [];
  const context = {
    env: runtimeEnv,
    port,
    token,
    timeoutMs,
    workspace,
    pluginFixtures: await createBehaviorEvalPluginFixtures({ plan, workspace }),
    openclawCommand: resolveOpenClawCommandFromPlan(plan),
    providerBaseUrl: undefined,
    runCommand,
    runGatewayRpc,
    gatewayRpcClient: null,
  };
  let gatewayHandle = null;
  let providerHandle = null;

  try {
    await prepareBehaviorEvalWorkspace(workspace);
    steps.push({
      id: "isolate",
      status: "pass",
      message: "created isolated OpenClaw state",
    });

    const openclawStep = plan.steps.find((step) => step.id === "openclaw");
    if (openclawStep?.command) {
      steps.push(
        await runBehaviorEvalStep({
          id: "openclaw",
          command: materializeBehaviorEvalCommand(openclawStep.command, context),
          context,
          runCommand,
        }),
      );
      if (lastStepFailed(steps)) {
        return finalizeBehaviorEvalExecution({
          plan,
          steps,
          workspace,
          port,
          keptTemp: Boolean(options.keepTemp),
          token,
        });
      }
    }

    const pluginStep = plan.steps.find((step) => step.id === "plugin");
    for (const command of splitCommands(pluginStep?.command)) {
      steps.push(
        await runBehaviorEvalStep({
          id: "plugin",
          command: materializeBehaviorEvalCommand(command, context),
          context,
          runCommand,
        }),
      );
      if (lastStepFailed(steps)) {
        return finalizeBehaviorEvalExecution({
          plan,
          steps,
          workspace,
          port,
          keptTemp: Boolean(options.keepTemp),
          token,
        });
      }
    }

    providerHandle = await startProvider(plan, context);
    if (providerHandle?.baseUrl) {
      context.providerBaseUrl = providerHandle.baseUrl;
    }

    await writeBehaviorEvalConfig({ plan, workspace, context });
    steps.push({
      id: "config",
      status: "pass",
      message: `wrote ${path.relative(repoRoot, workspace.configPath)}`,
      configPath: workspace.configPath,
    });

    const gatewayStep = plan.steps.find((step) => step.id === "gateway");
    if (gatewayStep?.command) {
      const command = materializeBehaviorEvalCommand(gatewayStep.command, context);
      const gatewayResult = await startGateway(command, context);
      gatewayHandle = gatewayResult.stop ? gatewayResult : null;
      steps.push({
        id: "gateway",
        command,
        status: gatewayResult.status,
        stdout: gatewayResult.stdout ?? "",
        stderr: gatewayResult.stderr ?? "",
        wallMs: gatewayResult.wallMs ?? 0,
      });
      if (lastStepFailed(steps)) {
        return finalizeBehaviorEvalExecution({
          plan,
          steps,
          workspace,
          port,
          keptTemp: Boolean(options.keepTemp),
          token,
        });
      }
    }

    const scenarioResult = await runScenario(plan, context);
    steps.push(toBehaviorEvalScenarioStep(scenarioResult));
    if (lastStepFailed(steps)) {
      steps.push({
        id: "report",
        status: "pass",
        message: `expected mode was ${plan.expectation.mode}`,
      });
      return finalizeBehaviorEvalExecution({
        plan,
        steps,
        workspace,
        port,
        keptTemp: Boolean(options.keepTemp),
        token,
      });
    }
    steps.push({
      id: "report",
      status: "pass",
      message: `expected mode was ${plan.expectation.mode}`,
    });
    return finalizeBehaviorEvalExecution({
      plan,
      steps,
      workspace,
      port,
      keptTemp: Boolean(options.keepTemp),
      token,
    });
  } finally {
    if (context.gatewayRpcClient?.stop) {
      await context.gatewayRpcClient.stop().catch(() => {});
    }
    if (gatewayHandle?.stop) {
      await gatewayHandle.stop().catch(() => {});
    }
    if (providerHandle?.stop) {
      await providerHandle.stop().catch(() => {});
    }
    if (ownsWorkspace && !options.keepTemp) {
      await rm(workspace.tempRoot, { recursive: true, force: true });
    }
  }
}

function validateBehaviorEvalExecutionRequest({ env = process.env }) {
  if (env.CRABPOT_EXECUTE_BEHAVIOR !== "1") {
    throw new Error("behavior eval execution requires CRABPOT_EXECUTE_BEHAVIOR=1");
  }
}

function validateBehaviorEvalRunner(plan) {
  if (plan.summary.runner !== "local") {
    throw new Error(`behavior eval execution requires runner.execution=local; got ${plan.summary.runner}`);
  }
}

export function behaviorEvalExecutionExitCode(execution, expectationMode) {
  if (expectationMode === "report-only") {
    return 0;
  }
  if (expectationMode === "must-pass") {
    return execution.status === "pass" ? 0 : 1;
  }
  if (expectationMode === "known-failure") {
    return execution.status === "expected-failure" ? 0 : 1;
  }
  return 1;
}

async function createBehaviorEvalWorkspace() {
  const tempRoot = await mkdtemp(path.join(os.tmpdir(), "crabpot-behavior-"));
  return {
    tempRoot,
    homeDir: path.join(tempRoot, "home"),
    workspaceDir: path.join(tempRoot, "workspace"),
    stateDir: path.join(tempRoot, "state"),
    configPath: path.join(tempRoot, "config.json"),
    npmUserConfig: path.join(tempRoot, "npmrc"),
    xdgCacheHome: path.join(tempRoot, "xdg-cache"),
    xdgConfigHome: path.join(tempRoot, "xdg-config"),
    xdgDataHome: path.join(tempRoot, "xdg-data"),
  };
}

async function prepareBehaviorEvalWorkspace(workspace) {
  await Promise.all([
    mkdir(workspace.homeDir, { recursive: true }),
    mkdir(resolveBehaviorEvalWorkspaceDir(workspace), { recursive: true }),
    mkdir(workspace.stateDir, { recursive: true }),
    mkdir(path.dirname(workspace.configPath), { recursive: true }),
    mkdir(workspace.xdgCacheHome, { recursive: true }),
    mkdir(workspace.xdgConfigHome, { recursive: true }),
    mkdir(workspace.xdgDataHome, { recursive: true }),
    writeFile(resolveBehaviorEvalNpmUserConfig(workspace), "", "utf8"),
  ]);
}

async function createBehaviorEvalPluginFixtures({ plan, workspace }) {
  const fixtures = {};
  for (const plugin of plan.plugins ?? []) {
    if (plugin.source !== "fixture") {
      continue;
    }
    fixtures[plugin.fixture] = await writeBehaviorEvalPluginFixture({ fixture: plugin.fixture, workspace });
  }
  return fixtures;
}

async function writeBehaviorEvalPluginFixture({ fixture, workspace }) {
  if (fixture !== "broken-context-engine") {
    throw new Error(`unknown behavior eval plugin fixture: ${fixture}`);
  }
  const fixtureDir = path.join(workspace.tempRoot, "fixtures", fixture);
  await mkdir(fixtureDir, { recursive: true });
  await Promise.all([
    writeFile(
      path.join(fixtureDir, "package.json"),
      `${JSON.stringify(
        {
          name: "@crabpot/broken-context-engine-fixture",
          version: "0.0.0",
          private: true,
          type: "module",
          main: "index.js",
          openclaw: {
            extensions: ["./index.js"],
            runtimeExtensions: ["./index.js"],
          },
        },
        null,
        2,
      )}\n`,
      "utf8",
    ),
    writeFile(
      path.join(fixtureDir, "openclaw.plugin.json"),
      `${JSON.stringify(
        {
          id: "broken-context-engine",
          name: "Broken Context Engine Fixture",
          version: "0.0.0",
          enabledByDefault: false,
          kind: "context-engine",
          activation: {
            onCapabilities: ["context-engine"],
          },
        },
        null,
        2,
      )}\n`,
      "utf8",
    ),
    writeFile(
      path.join(fixtureDir, "index.js"),
      [
        "export const plugin = {",
        '  id: "broken-context-engine",',
        "  register(api) {",
        '    api.registerContextEngine("broken-context-engine", () => ({',
        '      info: { id: "broken-context-engine", name: "Broken Context Engine Fixture", ownsCompaction: true },',
        "      ingest: async () => ({ ingested: true }),",
        "    }));",
        "  },",
        "};",
        "",
        "export function register(api) {",
        "  plugin.register(api);",
        "}",
        "",
        "export default plugin;",
        "",
      ].join("\n"),
      "utf8",
    ),
  ]);
  return fixtureDir;
}

function resolveBehaviorEvalWorkspaceDir(workspace) {
  return workspace.workspaceDir ?? path.join(workspace.tempRoot, "workspace");
}

function resolveBehaviorEvalNpmUserConfig(workspace) {
  return workspace.npmUserConfig ?? path.join(workspace.tempRoot, "npmrc");
}

function buildBehaviorEvalRuntimeEnv({ baseEnv = process.env, port, token, workspace }) {
  return {
    ...baseEnv,
    HOME: workspace.homeDir,
    OPENCLAW_HOME: workspace.homeDir,
    OPENCLAW_CONFIG_PATH: workspace.configPath,
    OPENCLAW_STATE_DIR: workspace.stateDir,
    OPENCLAW_OAUTH_DIR: path.join(workspace.stateDir, "credentials"),
    OPENCLAW_GATEWAY_PORT: String(port),
    OPENCLAW_GATEWAY_TOKEN: token,
    OPENCLAW_GATEWAY_URL: `ws://127.0.0.1:${port}`,
    OPENCLAW_NO_RESPAWN: "1",
    OPENCLAW_SKIP_BROWSER_CONTROL_SERVER: "1",
    OPENCLAW_SKIP_GMAIL_WATCHER: "1",
    OPENCLAW_SKIP_CANVAS_HOST: "1",
    OPENCLAW_TEST_FAST: "1",
    NPM_CONFIG_USERCONFIG: resolveBehaviorEvalNpmUserConfig(workspace),
    npm_config_userconfig: resolveBehaviorEvalNpmUserConfig(workspace),
    NPM_CONFIG_BEFORE: "",
    npm_config_before: "",
    XDG_CACHE_HOME: workspace.xdgCacheHome,
    XDG_CONFIG_HOME: workspace.xdgConfigHome,
    XDG_DATA_HOME: workspace.xdgDataHome,
  };
}

async function writeBehaviorEvalConfig({ plan, workspace, context }) {
  let config = {
    plugins: plan.configPatch.plugins,
    agents: {
      defaults: {
        workspace: resolveBehaviorEvalWorkspaceDir(workspace),
        model: {
          primary: "mock-openai/gpt-5.5",
        },
        memorySearch: {
          sync: {
            watch: true,
            watchDebounceMs: 25,
            onSessionStart: true,
            onSearch: true,
          },
        },
        models: {
          "mock-openai/gpt-5.5": {
            params: {
              transport: "sse",
              openaiWsWarmup: false,
            },
          },
          "mock-openai/gpt-5.5-alt": {
            params: {
              transport: "sse",
              openaiWsWarmup: false,
            },
          },
        },
        subagents: {
          allowAgents: ["*"],
          maxConcurrent: 2,
        },
      },
      list: [
        {
          id: "qa",
          default: true,
          model: {
            primary: "mock-openai/gpt-5.5",
          },
          tools: {
            profile: "coding",
          },
          subagents: {
            allowAgents: ["*"],
          },
        },
      ],
    },
    memory: {
      backend: "builtin",
    },
    tools: {
      profile: "coding",
    },
    gateway: {
      mode: "local",
      bind: "loopback",
      port: context.port,
      auth: {
        mode: "token",
        token: context.token,
      },
      controlUi: {
        enabled: false,
      },
    },
    discovery: {
      mdns: {
        mode: "off",
      },
    },
  };
  if (plan.summary.providerMode === "mock-openai") {
    const providerBaseUrl = `${(context.providerBaseUrl ?? "http://127.0.0.1:44080").replace(/\/+$/u, "")}/v1`;
    config = applyBehaviorEvalMockAuthConfig({
      ...config,
      models: {
        mode: "replace",
        providers: createBehaviorEvalMockProviderMap("mock-openai", providerBaseUrl),
      },
    });
    await writeBehaviorEvalMockAuthProfiles({
      workspace,
      providers: ["mock-openai", "openai", "anthropic"],
    });
  }
  await writeFile(workspace.configPath, `${JSON.stringify(config, null, 2)}\n`, {
    encoding: "utf8",
    mode: 0o600,
  });
}

function behaviorEvalZeroCost() {
  return {
    input: 0,
    output: 0,
    cacheRead: 0,
    cacheWrite: 0,
  };
}

function createBehaviorEvalMockOpenAiProvider(baseUrl) {
  return {
    baseUrl,
    apiKey: "test",
    api: "openai-responses",
    request: {
      allowPrivateNetwork: true,
    },
    models: [
      {
        id: "gpt-5.5",
        name: "gpt-5.5",
        api: "openai-responses",
        reasoning: false,
        input: ["text", "image"],
        cost: behaviorEvalZeroCost(),
        contextWindow: 128000,
        maxTokens: 4096,
      },
      {
        id: "gpt-5.5-alt",
        name: "gpt-5.5-alt",
        api: "openai-responses",
        reasoning: false,
        input: ["text", "image"],
        cost: behaviorEvalZeroCost(),
        contextWindow: 128000,
        maxTokens: 4096,
      },
    ],
  };
}

function createBehaviorEvalMockAnthropicProvider(baseUrl) {
  return {
    baseUrl: baseUrl.replace(/\/v1\/?$/iu, ""),
    apiKey: "test",
    api: "anthropic-messages",
    request: {
      allowPrivateNetwork: true,
    },
    models: [
      {
        id: "claude-opus-4-7",
        name: "claude-opus-4-7",
        api: "anthropic-messages",
        reasoning: false,
        input: ["text", "image"],
        cost: behaviorEvalZeroCost(),
        contextWindow: 200000,
        maxTokens: 4096,
      },
    ],
  };
}

function cloneBehaviorEvalProvider(provider) {
  return {
    ...provider,
    models: provider.models.map((model) => ({ ...model })),
  };
}

function createBehaviorEvalMockProviderMap(primaryProviderId, providerBaseUrl) {
  const primaryProvider = createBehaviorEvalMockOpenAiProvider(providerBaseUrl);
  return {
    [primaryProviderId]: primaryProvider,
    openai: cloneBehaviorEvalProvider(primaryProvider),
    anthropic: createBehaviorEvalMockAnthropicProvider(providerBaseUrl),
  };
}

function applyBehaviorEvalMockAuthConfig(config) {
  const authProviders = ["mock-openai", "openai", "anthropic"];
  return {
    ...config,
    auth: {
      ...config.auth,
      profiles: {
        ...config.auth?.profiles,
        ...Object.fromEntries(
          authProviders.map((provider) => [
            `qa-mock-${provider}`,
            {
              provider,
              mode: "api_key",
              displayName: `QA mock ${provider} credential`,
            },
          ]),
        ),
      },
    },
  };
}

async function writeBehaviorEvalMockAuthProfiles({ workspace, providers }) {
  const profiles = Object.fromEntries(
    providers.map((provider) => [
      `qa-mock-${provider}`,
      {
        type: "api_key",
        provider,
        key: "qa-mock-not-a-real-key",
        displayName: `QA mock ${provider} credential`,
      },
    ]),
  );
  await Promise.all(
    ["main", "qa"].map(async (agentId) => {
      const agentDir = path.join(workspace.stateDir, "agents", agentId, "agent");
      await mkdir(agentDir, { recursive: true });
      await writeFile(
        path.join(agentDir, "auth-profiles.json"),
        `${JSON.stringify({ version: 1, profiles }, null, 2)}\n`,
        {
          encoding: "utf8",
          mode: 0o600,
        },
      );
    }),
  );
}

async function runBehaviorEvalStep({ id, command, context, runCommand }) {
  const result = await runCommand(command, context);
  const combinedOutput = `${result.stdout ?? ""}\n${result.stderr ?? ""}`;
  return {
    id,
    command,
    status: result.exitCode === 0 ? "pass" : "fail",
    exitCode: result.exitCode,
    stdout: result.stdout ?? "",
    stderr: result.stderr ?? "",
    wallMs: result.wallMs ?? 0,
    failureClass: result.exitCode === 0 ? undefined : classifyBehaviorEvalFailure(combinedOutput),
  };
}

function runBehaviorEvalCommand(command, context) {
  return new Promise((resolve) => {
    const startedAt = Date.now();
    const stdout = [];
    const stderr = [];
    const child = spawn(command, {
      cwd: context.workspace.tempRoot,
      env: context.env,
      shell: true,
      stdio: ["ignore", "pipe", "pipe"],
    });
    const timeout = setTimeout(() => {
      child.kill("SIGKILL");
    }, context.timeoutMs);
    child.stdout.on("data", (chunk) => stdout.push(Buffer.from(chunk)));
    child.stderr.on("data", (chunk) => stderr.push(Buffer.from(chunk)));
    child.on("error", (error) => {
      clearTimeout(timeout);
      resolve({
        exitCode: 1,
        stdout: Buffer.concat(stdout).toString("utf8"),
        stderr: String(error),
        wallMs: Date.now() - startedAt,
      });
    });
    child.on("exit", (code, signal) => {
      clearTimeout(timeout);
      resolve({
        exitCode: signal ? 1 : (code ?? 1),
        stdout: Buffer.concat(stdout).toString("utf8"),
        stderr: Buffer.concat(stderr).toString("utf8"),
        wallMs: Date.now() - startedAt,
      });
    });
  });
}

async function startBehaviorEvalGateway(command, context) {
  const startedAt = Date.now();
  const stdout = [];
  const stderr = [];
  const child = spawn(command, {
    cwd: context.workspace.tempRoot,
    env: context.env,
    shell: true,
    detached: process.platform !== "win32",
    stdio: ["ignore", "pipe", "pipe"],
  });
  child.stdout.on("data", (chunk) => stdout.push(Buffer.from(chunk)));
  child.stderr.on("data", (chunk) => stderr.push(Buffer.from(chunk)));
  const stop = async () => {
    await stopBehaviorEvalChildProcess(child);
  };
  try {
    await waitForBehaviorEvalGatewayReady({
      baseUrl: `http://127.0.0.1:${context.port}`,
      child,
      logs: () => `${Buffer.concat(stdout).toString("utf8")}\n${Buffer.concat(stderr).toString("utf8")}`,
      timeoutMs: Math.min(context.timeoutMs, 120_000),
    });
    return {
      status: "pass",
      stdout: Buffer.concat(stdout).toString("utf8"),
      stderr: Buffer.concat(stderr).toString("utf8"),
      wallMs: Date.now() - startedAt,
      stop,
    };
  } catch (error) {
    await stop().catch(() => {});
    return {
      status: "fail",
      stdout: Buffer.concat(stdout).toString("utf8"),
      stderr: `${Buffer.concat(stderr).toString("utf8")}\n${formatErrorForReport(error)}`,
      wallMs: Date.now() - startedAt,
    };
  }
}

export async function stopBehaviorEvalChildProcess(
  child,
  { timeoutMs = 5_000, killProcess = process.kill } = {},
) {
  if (child.exitCode !== null || child.signalCode !== null) {
    return;
  }

  const exited = new Promise((resolve) => {
    child.once("exit", () => resolve());
  });
  signalBehaviorEvalChildProcess(child, "SIGTERM", killProcess);
  const timeout = setTimeout(() => {
    signalBehaviorEvalChildProcess(child, "SIGKILL", killProcess);
  }, timeoutMs);
  timeout.unref?.();

  await exited;
  clearTimeout(timeout);
}

function signalBehaviorEvalChildProcess(child, signal, killProcess) {
  try {
    if (process.platform !== "win32" && child.pid) {
      killProcess(-child.pid, signal);
      return;
    }
    child.kill(signal);
  } catch (error) {
    if (error?.code !== "ESRCH") {
      throw error;
    }
  }
}

async function startBehaviorEvalProvider(plan) {
  if (plan.summary.providerMode !== "mock-openai") {
    return null;
  }
  return await startBehaviorEvalMockOpenAiProvider();
}

function startBehaviorEvalMockOpenAiProvider() {
  const requests = [];
  const server = createServer(async (req, res) => {
    try {
      const url = new URL(req.url ?? "/", "http://127.0.0.1");
      if (req.method === "GET" && (url.pathname === "/healthz" || url.pathname === "/readyz")) {
        writeBehaviorEvalJson(res, 200, { ok: true, status: "live" });
        return;
      }
      if (req.method === "GET" && url.pathname === "/v1/models") {
        writeBehaviorEvalJson(res, 200, {
          data: [
            { id: "gpt-5.5", object: "model" },
            { id: "gpt-5.5-alt", object: "model" },
            { id: "text-embedding-3-small", object: "model" },
          ],
        });
        return;
      }
      if (req.method === "GET" && url.pathname === "/debug/requests") {
        writeBehaviorEvalJson(res, 200, requests);
        return;
      }
      if (req.method === "POST" && url.pathname === "/v1/embeddings") {
        const body = await readBehaviorEvalJsonBody(req);
        const inputs = Array.isArray(body.input) ? body.input : [body.input ?? ""];
        writeBehaviorEvalJson(res, 200, {
          object: "list",
          data: inputs.map((value, index) => ({
            object: "embedding",
            index,
            embedding: createBehaviorEvalEmbedding(String(value)),
          })),
          model: typeof body.model === "string" && body.model ? body.model : "text-embedding-3-small",
          usage: {
            prompt_tokens: inputs.length,
            total_tokens: inputs.length,
          },
        });
        return;
      }
      if (req.method === "POST" && url.pathname === "/v1/responses") {
        const body = await readBehaviorEvalJsonBody(req);
        const inputText = extractBehaviorEvalRequestText(body);
        requests.push({ body, inputText });
        const outputText = buildBehaviorEvalMockResponseText(inputText);
        const events = buildBehaviorEvalMockResponseEvents(outputText);
        if (body.stream === false) {
          writeBehaviorEvalJson(res, 200, events.at(-1).response);
          return;
        }
        writeBehaviorEvalSse(res, events);
        return;
      }
      writeBehaviorEvalJson(res, 404, { error: "not found" });
    } catch (error) {
      writeBehaviorEvalJson(res, 500, { error: formatErrorForReport(error) });
    }
  });

  return new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(0, "127.0.0.1", () => {
      const address = server.address();
      if (!address || typeof address === "string") {
        server.close();
        reject(new Error("mock provider failed to allocate port"));
        return;
      }
      resolve({
        baseUrl: `http://127.0.0.1:${address.port}`,
        stop: async () => {
          await new Promise((closeResolve) => server.close(() => closeResolve()));
        },
      });
    });
  });
}

function writeBehaviorEvalJson(res, status, body) {
  const text = JSON.stringify(body);
  res.writeHead(status, {
    "content-type": "application/json; charset=utf-8",
    "content-length": Buffer.byteLength(text),
    "cache-control": "no-store",
  });
  res.end(text);
}

function writeBehaviorEvalSse(res, events) {
  const body = `${events.map((event) => `data: ${JSON.stringify(event)}\n\n`).join("")}data: [DONE]\n\n`;
  res.writeHead(200, {
    "content-type": "text/event-stream",
    "content-length": Buffer.byteLength(body),
    "cache-control": "no-store",
    connection: "keep-alive",
  });
  res.end(body);
}

async function readBehaviorEvalJsonBody(req) {
  const chunks = [];
  for await (const chunk of req) {
    chunks.push(Buffer.from(chunk));
  }
  const raw = Buffer.concat(chunks).toString("utf8");
  return raw ? JSON.parse(raw) : {};
}

function createBehaviorEvalEmbedding(input) {
  const seed = [...input].reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return Array.from({ length: 64 }, (_, index) => (((seed + index * 17) % 97) - 48) / 48);
}

function extractBehaviorEvalRequestText(value) {
  const parts = [];
  const visit = (node) => {
    if (typeof node === "string") {
      parts.push(node);
      return;
    }
    if (!node || typeof node !== "object") {
      return;
    }
    if (Array.isArray(node)) {
      for (const item of node) {
        visit(item);
      }
      return;
    }
    for (const [key, child] of Object.entries(node)) {
      if (key === "text" || key === "content" || key === "input" || key === "instructions") {
        visit(child);
      }
    }
  };
  visit(value);
  return parts.join("\n");
}

function buildBehaviorEvalMockResponseText(inputText) {
  if (/remember.*crabpot_lcm_fact|crabpot_lcm_fact/iu.test(inputText)) {
    if (/what is crabpot_lcm_fact|recall.*crabpot_lcm_fact/iu.test(inputText)) {
      return "blue-lantern-42";
    }
    return "remembered CRABPOT_LCM_FACT";
  }
  return "ok";
}

function buildBehaviorEvalMockResponseEvents(text) {
  const item = {
    type: "message",
    id: "msg_crabpot_behavior_1",
    role: "assistant",
    status: "completed",
    content: [{ type: "output_text", text, annotations: [] }],
  };
  return [
    {
      type: "response.output_item.added",
      item: {
        type: "message",
        id: item.id,
        role: "assistant",
        status: "in_progress",
        content: [],
      },
    },
    {
      type: "response.output_text.delta",
      item_id: item.id,
      output_index: 0,
      content_index: 0,
      delta: text,
    },
    {
      type: "response.output_text.done",
      item_id: item.id,
      output_index: 0,
      content_index: 0,
      text,
    },
    {
      type: "response.output_item.done",
      item,
    },
    {
      type: "response.completed",
      response: {
        id: "resp_crabpot_behavior_1",
        status: "completed",
        output: [item],
        usage: { input_tokens: 64, output_tokens: 16, total_tokens: 80 },
      },
    },
  ];
}

async function runBehaviorEvalScenario(plan, context) {
  const startedAt = Date.now();
  const turns = resolveBehaviorEvalScenarioTurns(plan.scenario);
  const sessionKey = `agent:qa:discord:channel:crabpot-${plan.scenario.id}`;
  const commands = [];
  const stdout = [];
  const stderr = [];
  for (const turn of turns) {
    const runId = `crabpot-${randomUUID()}`;
    const waitTimeoutMs = Math.max(1, Math.min(context.timeoutMs, 120_000));
    const sendParams = {
      sessionKey,
      message: turn.message,
      deliver: false,
      timeoutMs: waitTimeoutMs,
      idempotencyKey: runId,
    };
    commands.push(`gateway rpc chat.send ${JSON.stringify(sendParams)}`);
    try {
      const started = await context.runGatewayRpc("chat.send", sendParams, context, {
        timeoutMs: Math.min(waitTimeoutMs, 30_000),
      });
      stdout.push(`chat.send ${JSON.stringify(started)}`);
      if (started?.status && !["started", "accepted", "ok"].includes(started.status)) {
        return {
          status: "fail",
          exitCode: 1,
          command: commands.join("\n"),
          stdout: stdout.join("\n"),
          stderr: `chat.send returned ${JSON.stringify(started)}`,
          wallMs: Date.now() - startedAt,
        };
      }
      const waitRunId = typeof started?.runId === "string" && started.runId ? started.runId : runId;
      const waitParams = {
        runId: waitRunId,
        timeoutMs: waitTimeoutMs,
      };
      commands.push(`gateway rpc agent.wait ${JSON.stringify(waitParams)}`);
      const waited = await context.runGatewayRpc("agent.wait", waitParams, context, {
        timeoutMs: waitTimeoutMs + 5_000,
      });
      stdout.push(`agent.wait ${JSON.stringify(waited)}`);
      if (waited?.status && waited.status !== "ok") {
        return {
          status: "fail",
          exitCode: 1,
          command: commands.join("\n"),
          stdout: stdout.join("\n"),
          stderr: `agent.wait returned ${JSON.stringify(waited)}`,
          wallMs: Date.now() - startedAt,
        };
      }
      const historyParams = { sessionKey, limit: 20 };
      commands.push(`gateway rpc chat.history ${JSON.stringify(historyParams)}`);
      const history = await context.runGatewayRpc("chat.history", historyParams, context, {
        timeoutMs: Math.min(waitTimeoutMs, 30_000),
      });
      stdout.push(`chat.history ${JSON.stringify(history)}`);
      const latestAssistantText = extractLatestBehaviorEvalAssistantText(history);
      if (turn.expectText && !latestAssistantText.includes(turn.expectText)) {
        return {
          status: "fail",
          exitCode: 1,
          command: commands.join("\n"),
          stdout: stdout.join("\n"),
          stderr: `${stderr.join("\n")}\nmemory-recall-mismatch: expected latest assistant message to contain ${turn.expectText}; got ${latestAssistantText || "<empty>"}`,
          wallMs: Date.now() - startedAt,
        };
      }
    } catch (error) {
      return {
        status: "fail",
        exitCode: 1,
        command: commands.join("\n"),
        stdout: stdout.join("\n"),
        stderr: `${stderr.join("\n")}\n${formatErrorForReport(error)}`,
        wallMs: Date.now() - startedAt,
      };
    }
  }
  const healthFailure = await runBehaviorEvalScenarioHealthChecks({
    plan,
    context,
    commands,
    stdout,
    stderr,
    startedAt,
  });
  if (healthFailure) {
    return healthFailure;
  }
  return {
    status: "pass",
    exitCode: 0,
    command: commands.join("\n"),
    stdout: stdout.join("\n"),
    stderr: stderr.join("\n"),
    wallMs: Date.now() - startedAt,
  };
}

async function runBehaviorEvalScenarioHealthChecks({ plan, context, commands, stdout, stderr, startedAt }) {
  const checks = Array.isArray(plan.scenario.healthChecks) ? plan.scenario.healthChecks : [];
  for (const check of checks) {
    const method = typeof check.method === "string" && check.method ? check.method : "health";
    const params = check.params && typeof check.params === "object" ? check.params : { probe: true };
    commands.push(`gateway rpc ${method} ${JSON.stringify(params)}`);
    try {
      const payload = await context.runGatewayRpc(method, params, context, {
        timeoutMs: Math.min(context.timeoutMs, 30_000),
      });
      stdout.push(`${method} ${JSON.stringify(payload)}`);
      const failure = evaluateBehaviorEvalHealthCheck(check, payload);
      if (failure) {
        return {
          status: "fail",
          exitCode: 1,
          command: commands.join("\n"),
          stdout: stdout.join("\n"),
          stderr: `${stderr.join("\n")}\n${failure}`,
          wallMs: Date.now() - startedAt,
        };
      }
    } catch (error) {
      return {
        status: "fail",
        exitCode: 1,
        command: commands.join("\n"),
        stdout: stdout.join("\n"),
        stderr: `${stderr.join("\n")}\n${formatErrorForReport(error)}`,
        wallMs: Date.now() - startedAt,
      };
    }
  }
  return null;
}

function evaluateBehaviorEvalHealthCheck(check, payload) {
  const expectedQuarantines = Array.isArray(check.expect?.contextEngineQuarantines)
    ? check.expect.contextEngineQuarantines
    : [];
  if (expectedQuarantines.length === 0) {
    return null;
  }
  const quarantines = Array.isArray(payload?.contextEngineQuarantines)
    ? payload.contextEngineQuarantines
    : [];
  for (const expected of expectedQuarantines) {
    const match = quarantines.find((quarantine) =>
      (!expected.pluginId || quarantine.pluginId === expected.pluginId) &&
      (!expected.engineId || quarantine.engineId === expected.engineId) &&
      (!expected.reasonIncludes || String(quarantine.reason ?? "").includes(expected.reasonIncludes))
    );
    if (!match) {
      return `context-engine-quarantine-missing: expected ${JSON.stringify(expected)} in ${JSON.stringify(quarantines)}`;
    }
  }
  return null;
}

function resolveBehaviorEvalScenarioTurns(scenario) {
  if (Array.isArray(scenario.turns) && scenario.turns.length > 0) {
    return scenario.turns.map((turn) => ({
      message: String(turn.message ?? ""),
      expectText: typeof turn.expectText === "string" ? turn.expectText : undefined,
    }));
  }
  return [
    {
      message: "Remember this exact test fact: CRABPOT_LCM_FACT is blue-lantern-42.",
      expectText: "remembered",
    },
    {
      message: "What is CRABPOT_LCM_FACT? Answer with only the remembered value.",
      expectText: "blue-lantern-42",
    },
  ];
}

async function runBehaviorEvalGatewayRpc(method, params, context, options = {}) {
  if (!context.gatewayRpcClient) {
    context.gatewayRpcClient = await createBehaviorEvalGatewayRpcClient({
      url: `ws://127.0.0.1:${context.port}`,
      token: context.token,
      timeoutMs: Math.min(context.timeoutMs, 120_000),
    });
  }
  return await context.gatewayRpcClient.request(method, params, {
    timeoutMs: options.timeoutMs ?? Math.min(context.timeoutMs, 30_000),
  });
}

async function createBehaviorEvalGatewayRpcClient({ url, token, timeoutMs }) {
  if (typeof WebSocket !== "function") {
    throw new Error("global WebSocket is unavailable; Node 22+ is required");
  }

  const ws = new WebSocket(url);
  const pending = new Map();
  let connectSent = false;
  let stopped = false;

  const request = (method, params, options = {}) =>
    new Promise((resolve, reject) => {
      if (stopped) {
        reject(new Error("gateway rpc client stopped"));
        return;
      }
      if (ws.readyState !== WebSocket.OPEN) {
        reject(new Error("gateway rpc socket is not open"));
        return;
      }
      const id = randomUUID();
      const timeout =
        options.timeoutMs === null
          ? null
          : setTimeout(() => {
              pending.delete(id);
              reject(new Error(`gateway request timeout for ${method}`));
            }, options.timeoutMs ?? 30_000);
      pending.set(id, {
        resolve,
        reject,
        timeout,
        method,
      });
      ws.send(JSON.stringify({ type: "req", id, method, params }));
    });

  const connectPromise = new Promise((resolve, reject) => {
    const timeout = setTimeout(
      () => reject(new Error(`gateway connect timeout for ${url}`)),
      timeoutMs,
    );
    const finish = (error) => {
      clearTimeout(timeout);
      if (error) {
        reject(error);
        return;
      }
      resolve();
    };

    ws.addEventListener("error", () => {
      finish(new Error(`gateway websocket error for ${url}`));
    });
    ws.addEventListener("close", (event) => {
      const reason = typeof event.reason === "string" ? event.reason : "";
      const error = new Error(`gateway websocket closed (${event.code}): ${reason}`);
      for (const [, entry] of pending) {
        if (entry.timeout) {
          clearTimeout(entry.timeout);
        }
        entry.reject(error);
      }
      pending.clear();
      if (!connectSent) {
        finish(error);
      }
    });
    ws.addEventListener("message", async (event) => {
      try {
        const frame = JSON.parse(await readBehaviorEvalWebSocketMessage(event.data));
        if (frame?.type === "event" && frame.event === "connect.challenge") {
          if (connectSent) {
            return;
          }
          connectSent = true;
          const connectParams = {
            minProtocol: 1,
            maxProtocol: 999,
            client: {
              id: "gateway-client",
              displayName: "gateway:crabpot-behavior",
              version: "crabpot",
              platform: process.platform,
              mode: "backend",
            },
            caps: [],
            auth: {
              token,
            },
            role: "operator",
            scopes: ["operator.admin"],
          };
          request("connect", connectParams, { timeoutMs: Math.min(timeoutMs, 30_000) })
            .then(() => finish(null))
            .catch((error) => finish(error instanceof Error ? error : new Error(String(error))));
          return;
        }
        if (frame?.type !== "res" || typeof frame.id !== "string") {
          return;
        }
        const entry = pending.get(frame.id);
        if (!entry) {
          return;
        }
        pending.delete(frame.id);
        if (entry.timeout) {
          clearTimeout(entry.timeout);
        }
        if (frame.ok) {
          entry.resolve(frame.payload);
          return;
        }
        entry.reject(new Error(frame.error?.message ?? `gateway request failed for ${entry.method}`));
      } catch (error) {
        finish(error instanceof Error ? error : new Error(String(error)));
      }
    });
  });

  await connectPromise;

  return {
    request,
    async stop() {
      stopped = true;
      for (const [, entry] of pending) {
        if (entry.timeout) {
          clearTimeout(entry.timeout);
        }
        entry.reject(new Error("gateway rpc client stopped"));
      }
      pending.clear();
      if (ws.readyState === WebSocket.OPEN || ws.readyState === WebSocket.CONNECTING) {
        ws.close(1000, "crabpot behavior eval complete");
      }
    },
  };
}

async function readBehaviorEvalWebSocketMessage(data) {
  if (typeof data === "string") {
    return data;
  }
  if (data instanceof ArrayBuffer) {
    return Buffer.from(data).toString("utf8");
  }
  if (ArrayBuffer.isView(data)) {
    return Buffer.from(data.buffer, data.byteOffset, data.byteLength).toString("utf8");
  }
  if (data && typeof data.text === "function") {
    return await data.text();
  }
  return String(data);
}

function extractBehaviorEvalObjectText(value) {
  const parts = [];
  const visit = (node) => {
    if (typeof node === "string") {
      parts.push(node);
      return;
    }
    if (!node || typeof node !== "object") {
      return;
    }
    if (Array.isArray(node)) {
      for (const item of node) {
        visit(item);
      }
      return;
    }
    for (const child of Object.values(node)) {
      visit(child);
    }
  };
  visit(value);
  return parts.join("\n");
}

function extractLatestBehaviorEvalAssistantText(history) {
  const messages = Array.isArray(history?.messages) ? history.messages : [];
  const assistantTexts = messages
    .filter((message) => message?.role === "assistant")
    .map((message) => extractBehaviorEvalObjectText(message).trim())
    .filter(Boolean);
  return assistantTexts.at(-1) ?? "";
}

function toBehaviorEvalScenarioStep(result) {
  const combinedOutput = `${result.stdout ?? ""}\n${result.stderr ?? ""}`;
  return {
    id: "scenario",
    command: result.command,
    status: result.status,
    exitCode: result.exitCode,
    stdout: result.stdout ?? "",
    stderr: result.stderr ?? "",
    wallMs: result.wallMs ?? 0,
    failureClass: result.status === "pass" ? undefined : classifyBehaviorEvalFailure(combinedOutput),
  };
}

async function waitForBehaviorEvalGatewayReady({ baseUrl, child, logs, timeoutMs }) {
  const startedAt = Date.now();
  while (Date.now() - startedAt < timeoutMs) {
    if (child.exitCode !== null || child.signalCode !== null) {
      throw new Error(`gateway exited before readiness: ${logs()}`);
    }
    for (const pathName of ["/readyz", "/healthz"]) {
      try {
        const response = await fetch(`${baseUrl}${pathName}`, {
          method: "HEAD",
          signal: AbortSignal.timeout(2_000),
        });
        if (response.ok) {
          return;
        }
      } catch {
        // Keep polling until timeout.
      }
    }
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  throw new Error(`gateway did not become ready: ${logs()}`);
}

function finalizeBehaviorEvalExecution({ plan, steps, workspace, port, keptTemp, token }) {
  const failed = steps.find((step) => step.status === "fail");
  const failureClass = failed?.failureClass;
  const expectedFailure = failureClass && plan.expectedFailureClasses.includes(failureClass);
  const status = failed
    ? expectedFailure
      ? "expected-failure"
      : "fail"
    : plan.expectation.mode === "known-failure"
      ? "unexpected-pass"
      : "pass";
  return {
    generatedAt: "deterministic",
    profileId: plan.profileId,
    scenario: plan.scenario.id,
    status,
    failureClass: failureClass ?? null,
    expectedFailureClasses: plan.expectedFailureClasses,
    workspace: {
      tempRoot: workspace.tempRoot,
      configPath: workspace.configPath,
      kept: keptTemp,
    },
    gateway: {
      port,
      token,
    },
    steps,
  };
}

async function writeBehaviorEvalExecutionResult(execution, { resultsDir = defaultBehaviorEvalResultsDir } = {}) {
  const outputDir = path.join(resultsDir, execution.profileId);
  await mkdir(outputDir, { recursive: true });
  await writeFile(
    path.join(outputDir, "execution.json"),
    `${JSON.stringify(execution, null, 2)}\n`,
    "utf8",
  );
}

function renderBehaviorEvalExecutionMarkdown(plan, execution) {
  const lines = [
    "# Crabpot Behavior Eval Execution",
    "",
    `- Profile: ${plan.profileId}`,
    `- Scenario: ${plan.scenario.id}`,
    `- Status: ${execution.status}`,
    `- Failure class: ${execution.failureClass ?? "none"}`,
    `- Temp root: ${execution.workspace.kept ? execution.workspace.tempRoot : "removed"}`,
    "",
    "## Steps",
    "",
  ];
  for (const step of execution.steps) {
    lines.push(`- ${step.status}: ${step.id}${step.failureClass ? ` (${step.failureClass})` : ""}`);
  }
  lines.push("");
  return `${lines.join("\n")}\n`;
}

function lastStepFailed(steps) {
  return steps.at(-1)?.status === "fail";
}

function splitCommands(value) {
  if (!value) {
    return [];
  }
  return value.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
}

function materializeBehaviorEvalCommand(command, context) {
  let materialized = command
    .replaceAll("<free-port>", String(context.port))
    .replaceAll("<token>", shellQuote(context.token));
  for (const [fixture, fixturePath] of Object.entries(context.pluginFixtures ?? {})) {
    materialized = materialized.replaceAll(fixtureInstallToken(fixture), shellQuote(fixturePath));
  }
  return materialized;
}

function resolveOpenClawCommandFromPlan(plan) {
  const command = plan.steps.find((step) => step.id === "openclaw")?.command;
  if (typeof command !== "string" || !command.endsWith(" --version")) {
    throw new Error("behavior eval plan is missing an OpenClaw --version command");
  }
  return command.slice(0, -" --version".length);
}

async function getFreePort() {
  return await new Promise((resolve, reject) => {
    const server = net.createServer();
    server.unref();
    server.on("error", reject);
    server.listen(0, "127.0.0.1", () => {
      const address = server.address();
      const port = typeof address === "object" && address ? address.port : 0;
      server.close(() => resolve(port));
    });
  });
}

function classifyBehaviorEvalFailure(output) {
  const text = output.toLowerCase();
  if (text.includes("embeddedattemptsessiontakeovererror")) {
    return "embedded-attempt-session-takeover";
  }
  if (
    text.includes("agent runner") ||
    text.includes("no embedded pi runner") ||
    text.includes("never starts agent")
  ) {
    return "agent-runner-unavailable";
  }
  if (text.includes("timed out") || text.includes("timeout")) {
    return "timeout";
  }
  if (text.includes("memory-recall-mismatch")) {
    return "memory-recall-mismatch";
  }
  if (text.includes("context-engine-quarantine-missing")) {
    return "context-engine-quarantine-missing";
  }
  if (text.includes("gateway")) {
    return "gateway-unavailable";
  }
  return "unclassified";
}

function formatErrorForReport(error) {
  return error instanceof Error ? error.message : String(error);
}

export async function writeBehaviorEvalReport({ report, markdown, jsonPath = defaultBehaviorEvalJsonPath, markdownPath = defaultBehaviorEvalMarkdownPath }) {
  await Promise.all([
    writeFile(jsonPath, `${JSON.stringify(report, null, 2)}\n`, "utf8"),
    writeFile(markdownPath, markdown, "utf8"),
  ]);
}

async function assertReportMatches({ report, markdown, jsonPath, markdownPath }) {
  const expectedJson = `${JSON.stringify(report, null, 2)}\n`;
  const expectedMarkdown = markdown;
  const actualJson = existsSync(jsonPath) ? await readFile(jsonPath, "utf8") : "";
  const actualMarkdown = existsSync(markdownPath) ? await readFile(markdownPath, "utf8") : "";
  const mismatches = [];
  if (actualJson !== expectedJson) {
    mismatches.push(path.relative(repoRoot, jsonPath));
  }
  if (actualMarkdown !== expectedMarkdown) {
    mismatches.push(path.relative(repoRoot, markdownPath));
  }
  if (mismatches.length > 0) {
    throw new Error(`behavior eval reports are stale: ${mismatches.join(", ")}. Run npm run eval:behavior -- --write`);
  }
}

function formatOpenClawTarget(openclaw) {
  if (openclaw.source === "npm") {
    return `openclaw@${openclaw.version}`;
  }
  return `openclaw path ${openclaw.path}`;
}

function openclawInvocation(openclaw) {
  if (openclaw.source === "npm") {
    return `npm exec --yes --package=openclaw@${openclaw.version} -- openclaw`;
  }
  return `node ${shellQuote(path.join(openclaw.path, "dist", "index.js"))}`;
}

function formatPluginInstallSpec(plugin) {
  if (plugin.source === "npm") {
    return `npm:${plugin.spec}`;
  }
  if (plugin.source === "fixture") {
    return fixtureInstallToken(plugin.fixture);
  }
  throw new Error(`unsupported plugin source for ${plugin.id}: ${plugin.source}`);
}

function normalizeNpmPluginSpec(spec) {
  return spec.startsWith("npm:") ? spec.slice("npm:".length) : spec;
}

function fixtureInstallToken(fixture) {
  return `__CRABPOT_BEHAVIOR_PLUGIN_FIXTURE_${fixture}__`;
}

function formatPluginSummary(plugin) {
  if (plugin.source === "npm") {
    return plugin.spec;
  }
  if (plugin.source === "fixture") {
    return `fixture:${plugin.fixture}`;
  }
  return `${plugin.source}:${plugin.id}`;
}

function plannedStatusForExpectation(mode) {
  if (mode === "must-pass") {
    return "planned-must-pass";
  }
  if (mode === "known-failure") {
    return "planned-known-failure";
  }
  if (mode === "report-only") {
    return "planned-report-only";
  }
  throw new Error(`unsupported expectation mode: ${mode}`);
}

function validateBehaviorEvalProfile(profile, label) {
  const errors = [];
  if (!profile || typeof profile !== "object") {
    throw new Error(`${label}: profile must be an object`);
  }
  if (!/^[a-z0-9][a-z0-9-]*$/.test(profile.id ?? "")) {
    errors.push("id must be kebab-case");
  }
  if (typeof profile.category !== "string" || profile.category.trim().length === 0) {
    errors.push("category must be set");
  }
  if (!/^[a-z0-9][a-z0-9-]*$/.test(profile.scenario ?? "")) {
    errors.push("scenario must be a scenario id");
  }
  if (!profile.expectation || typeof profile.expectation !== "object") {
    errors.push("expectation must be set");
  } else if (!["must-pass", "known-failure", "report-only"].includes(profile.expectation.mode)) {
    errors.push("expectation.mode must be must-pass, known-failure, or report-only");
  }
  if (!profile.openclaw || typeof profile.openclaw !== "object") {
    errors.push("openclaw must be set");
  } else if (profile.openclaw.source === "npm") {
    if (typeof profile.openclaw.version !== "string" || profile.openclaw.version.trim().length === 0) {
      errors.push("openclaw.version must be set for npm source");
    }
  } else if (profile.openclaw.source === "path") {
    if (typeof profile.openclaw.path !== "string" || profile.openclaw.path.trim().length === 0) {
      errors.push("openclaw.path must be set for path source");
    }
  } else {
    errors.push("openclaw.source must be npm or path");
  }
  if (!Array.isArray(profile.plugins) || profile.plugins.length === 0) {
    errors.push("plugins must be non-empty");
  } else {
    for (const plugin of profile.plugins) {
      if (!/^[a-z0-9][a-z0-9-]*$/.test(plugin.id ?? "")) {
        errors.push("plugin id must be kebab-case");
      }
      if (!["npm", "fixture"].includes(plugin.source)) {
        errors.push(`${plugin.id}: plugin source must be npm or fixture`);
      }
      if (plugin.source === "npm" && (typeof plugin.spec !== "string" || plugin.spec.trim().length === 0)) {
        errors.push(`${plugin.id}: plugin spec must be set`);
      }
      if (plugin.source === "fixture" && !/^[a-z0-9][a-z0-9-]*$/.test(plugin.fixture ?? "")) {
        errors.push(`${plugin.id}: plugin fixture must be kebab-case`);
      }
    }
  }
  if (!profile.runner || typeof profile.runner !== "object") {
    errors.push("runner must be set");
  } else {
    if (!["local", "blacksmith"].includes(profile.runner.execution)) {
      errors.push("runner.execution must be local or blacksmith");
    }
    if (typeof profile.runner.providerMode !== "string" || profile.runner.providerMode.trim().length === 0) {
      errors.push("runner.providerMode must be set");
    }
    if (!Number.isInteger(profile.runner.timeoutMs) || profile.runner.timeoutMs <= 0) {
      errors.push("runner.timeoutMs must be a positive integer");
    }
  }
  if (errors.length > 0) {
    throw new Error(`${label}: ${errors.join("; ")}`);
  }
}

function validateBehaviorEvalScenario(scenario, label) {
  const errors = [];
  if (!scenario || typeof scenario !== "object") {
    throw new Error(`${label}: scenario must be an object`);
  }
  if (!/^[a-z0-9][a-z0-9-]*$/.test(scenario.id ?? "")) {
    errors.push("id must be kebab-case");
  }
  if (typeof scenario.category !== "string" || scenario.category.trim().length === 0) {
    errors.push("category must be set");
  }
  if (typeof scenario.description !== "string" || scenario.description.trim().length === 0) {
    errors.push("description must be set");
  }
  if (!Array.isArray(scenario.checks) || scenario.checks.length === 0) {
    errors.push("checks must be non-empty");
  } else {
    for (const check of scenario.checks) {
      if (!/^[a-z0-9][a-z0-9-]*$/.test(check.id ?? "")) {
        errors.push("check id must be kebab-case");
      }
      if (typeof check.description !== "string" || check.description.trim().length === 0) {
        errors.push(`${check.id}: check description must be set`);
      }
    }
  }
  if (errors.length > 0) {
    throw new Error(`${label}: ${errors.join("; ")}`);
  }
}

async function readJson(jsonPath) {
  return JSON.parse(await readFile(jsonPath, "utf8"));
}

function cloneJson(value) {
  return JSON.parse(JSON.stringify(value));
}

function indentBlock(value, indent) {
  return value.split(/\r?\n/).map((line) => `${indent}${line}`).join("\n");
}

function shellQuote(value) {
  if (/^[A-Za-z0-9_./:=@+-]+$/.test(value)) {
    return value;
  }
  return `'${value.replaceAll("'", "'\\''")}'`;
}
