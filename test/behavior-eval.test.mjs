import assert from "node:assert/strict";
import { EventEmitter } from "node:events";
import { mkdtemp, readFile, rm } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { test } from "node:test";
import {
  behaviorEvalExecutionExitCode,
  buildBehaviorEvalPlan,
  buildBehaviorEvalMockResponseText,
  executeBehaviorEvalPlan,
  loadBehaviorEvalProfile,
  loadBehaviorEvalScenario,
  removeBehaviorEvalTempRoot,
  renderBehaviorEvalMarkdown,
  resolveBehaviorEvalProfile,
  runBehaviorEvalCommand,
  stopBehaviorEvalChildProcess,
} from "../scripts/behavior-eval.mjs";

const scenario = {
  id: "lcm-basic-memory-turn",
  category: "context-engine",
  description: "Install LCM, select it as the context engine, and run two memory-shaped turns.",
  recallScope: "same-session-key",
  checks: [
    { id: "install", description: "LCM package installs" },
    { id: "gateway-load", description: "Gateway starts with LCM selected" },
    { id: "agent-turn", description: "Agent turn completes" },
  ],
};

const historicalProfile = {
  id: "recent-lcm-2026-5-22",
  category: "context-engine",
  scenario: "lcm-basic-memory-turn",
  expectation: {
    mode: "known-failure",
    failureClasses: [
      "embedded-attempt-session-takeover",
      "agent-runner-unavailable",
      "behavior-turn-mismatch",
      "memory-recall-mismatch",
    ],
  },
  openclaw: {
    source: "npm",
    version: "2026.5.22",
  },
  plugins: [
    {
      id: "lossless-claw",
      source: "npm",
      spec: "@martian-engineering/lossless-claw@0.11.2",
      slot: "contextEngine",
    },
  ],
  runner: {
    providerMode: "mock-openai",
    execution: "blacksmith",
    timeoutMs: 900000,
  },
};

function buildLocalPlan(profile, scenarioValue) {
  return buildBehaviorEvalPlan({
    profile: resolveBehaviorEvalProfile({
      profile,
      overrides: { runnerExecution: "local" },
    }),
    scenario: scenarioValue,
  });
}

test("behavior eval planner builds the historical LCM repro steps", () => {
  const plan = buildBehaviorEvalPlan({ profile: historicalProfile, scenario });

  assert.equal(plan.profileId, "recent-lcm-2026-5-22");
  assert.equal(plan.scenario.id, "lcm-basic-memory-turn");
  assert.equal(plan.expectation.mode, "known-failure");
  assert.deepEqual(plan.expectedFailureClasses, [
    "embedded-attempt-session-takeover",
    "agent-runner-unavailable",
    "behavior-turn-mismatch",
    "memory-recall-mismatch",
  ]);
  assert.equal(plan.summary.openclaw, "openclaw@2026.5.22");
  assert.equal(plan.summary.plugins, "@martian-engineering/lossless-claw@0.11.2");
  assert.equal(plan.summary.runner, "blacksmith");
  assert.equal(plan.steps.map((step) => step.id).join(","), "isolate,openclaw,plugin,config,gateway,scenario,report");
  assert.ok(
    plan.steps.some((step) =>
      step.command?.includes("npm exec --yes --package=openclaw@2026.5.22 -- openclaw"),
    ),
  );
  assert.ok(
    plan.steps.some((step) =>
      step.command?.includes("openclaw plugins install npm:@martian-engineering/lossless-claw@0.11.2"),
    ),
  );
  assert.deepEqual(plan.configPatch.plugins.slots, { contextEngine: "lossless-claw" });
  assert.equal(plan.report.status, "planned-known-failure");
});

test("behavior eval profile resolver applies ad hoc version overrides", () => {
  const resolved = resolveBehaviorEvalProfile({
    profile: historicalProfile,
    overrides: {
      openclawVersion: "2026.5.26",
      pluginSpec: "npm:@martian-engineering/lossless-claw@0.12.0",
      expectationMode: "must-pass",
      runnerExecution: "local",
    },
  });

  assert.equal(resolved.openclaw.version, "2026.5.26");
  assert.equal(resolved.plugins[0].spec, "@martian-engineering/lossless-claw@0.12.0");
  assert.equal(resolved.expectation.mode, "must-pass");
  assert.equal(resolved.expectation.failureClasses, undefined);
  assert.equal(resolved.runner.execution, "local");
});

test("behavior eval profile resolver preserves npm-pack plugin overrides", () => {
  const resolved = resolveBehaviorEvalProfile({
    profile: historicalProfile,
    overrides: {
      pluginSpec: "npm-pack:/tmp/martian-engineering-lossless-claw-0.11.3.tgz",
      expectationMode: "must-pass",
      runnerExecution: "local",
    },
  });
  const plan = buildBehaviorEvalPlan({ profile: resolved, scenario });

  assert.equal(resolved.plugins[0].source, "npm-pack");
  assert.equal(resolved.plugins[0].path, "/tmp/martian-engineering-lossless-claw-0.11.3.tgz");
  assert.equal(plan.summary.plugins, "npm-pack:/tmp/martian-engineering-lossless-claw-0.11.3.tgz");
  assert.ok(
    plan.steps.some((step) =>
      step.command?.includes(
        "openclaw plugins install npm-pack:/tmp/martian-engineering-lossless-claw-0.11.3.tgz",
      ),
    ),
  );
});

test("behavior eval profile resolver absolutizes local OpenClaw paths", () => {
  const resolved = resolveBehaviorEvalProfile({
    profile: historicalProfile,
    overrides: {
      openclawPath: "../openclaw",
    },
  });

  assert.equal(resolved.openclaw.source, "path");
  assert.equal(resolved.openclaw.path, path.resolve("../openclaw"));
});

test("behavior eval planner rejects shell-shaped npm coordinates", () => {
  assert.throws(
    () =>
      buildBehaviorEvalPlan({
        profile: {
          ...historicalProfile,
          openclaw: { source: "npm", version: "2026.5.22; echo leaked" },
        },
        scenario,
      }),
    /openclaw\.version/,
  );

  assert.throws(
    () =>
      buildBehaviorEvalPlan({
        profile: {
          ...historicalProfile,
          plugins: [
            {
              ...historicalProfile.plugins[0],
              spec: "@martian-engineering/lossless-claw@0.11.2; echo leaked",
            },
          ],
        },
        scenario,
      }),
    /plugin spec/,
  );
});

test("behavior eval exit code follows expectation contract", () => {
  assert.equal(behaviorEvalExecutionExitCode({ status: "pass" }, "must-pass"), 0);
  assert.equal(behaviorEvalExecutionExitCode({ status: "fail" }, "must-pass"), 1);
  assert.equal(behaviorEvalExecutionExitCode({ status: "expected-failure" }, "known-failure"), 0);
  assert.equal(behaviorEvalExecutionExitCode({ status: "unexpected-pass" }, "known-failure"), 1);
  assert.equal(behaviorEvalExecutionExitCode({ status: "fail" }, "report-only"), 0);
});

test("behavior eval mock recall derives answers from request context", () => {
  assert.equal(
    buildBehaviorEvalMockResponseText("What is CRABPOT_LCM_FACT?"),
    "I do not have that fact.",
  );
  assert.equal(
    buildBehaviorEvalMockResponseText(
      "Reply with this exact memory marker: CRABPOT_LCM_FACT is blue-lantern-42.",
    ),
    "CRABPOT_LCM_FACT is blue-lantern-42.",
  );
  assert.equal(
    buildBehaviorEvalMockResponseText(
      "Reply with this exact memory marker: CRABPOT_LCM_FACT is blue-lantern-42.\nSay one neutral filler response.",
    ),
    "ok",
  );
  assert.equal(
    buildBehaviorEvalMockResponseText(
      "User: CRABPOT_LCM_FACT is blue-lantern-42.\nWhat is CRABPOT_LCM_FACT?",
    ),
    "I do not have that fact.",
  );
  assert.equal(
    buildBehaviorEvalMockResponseText(
      "<summary id=\"s1\" kind=\"leaf\"><content>CRABPOT_LCM_FACT is blue-lantern-42.</content></summary>\nWhat is CRABPOT_LCM_FACT?",
    ),
    "blue-lantern-42",
  );
  assert.equal(
    buildBehaviorEvalMockResponseText(
      "<summary id=\"s1\" kind=\"leaf\"><content>CRABPOT_LCM_FACT is blue-lantern-42. Say one neutral filler response.</content></summary>\nWhat is CRABPOT_LCM_FACT?",
    ),
    "blue-lantern-42",
  );
  assert.equal(
    buildBehaviorEvalMockResponseText(
      "You summarize a SEGMENT of an OpenClaw conversation for future model turns.\n<conversation_segment>\nCRABPOT_LCM_FACT is blue-lantern-42.\n</conversation_segment>",
    ),
    "CRABPOT_LCM_FACT is blue-lantern-42.",
  );
});

test("behavior eval markdown report names the TDD target and command", () => {
  const plan = buildBehaviorEvalPlan({ profile: historicalProfile, scenario });
  const markdown = renderBehaviorEvalMarkdown(plan);

  assert.match(markdown, /# Crabpot Behavior Eval Plan/);
  assert.match(markdown, /recent-lcm-2026-5-22/);
  assert.match(markdown, /known-failure/);
  assert.match(markdown, /openclaw@2026\.5\.22/);
  assert.match(markdown, /@martian-engineering\/lossless-claw@0\.11\.2/);
});

test("behavior eval loader reads the default forward LCM release gate", async () => {
  const profile = await loadBehaviorEvalProfile("forward-lcm-release-gate");
  const loadedScenario = await loadBehaviorEvalScenario(profile.scenario);
  const plan = buildBehaviorEvalPlan({ profile, scenario: loadedScenario });

  assert.equal(plan.profileId, "forward-lcm-release-gate");
  assert.equal(plan.scenario.id, "lcm-basic-memory-turn");
  assert.equal(plan.expectation.mode, "known-failure");
  assert.deepEqual(plan.expectedFailureClasses, ["memory-recall-mismatch"]);
  assert.equal(plan.summary.openclaw, "openclaw@latest");
  assert.match(plan.summary.plugins, /@martian-engineering\/lossless-claw@latest/);
});

test("behavior eval loader reads the context-engine quarantine release gate", async () => {
  const profile = await loadBehaviorEvalProfile("forward-context-engine-quarantine-gate");
  const loadedScenario = await loadBehaviorEvalScenario(profile.scenario);
  const plan = buildBehaviorEvalPlan({ profile, scenario: loadedScenario });

  assert.equal(plan.profileId, "forward-context-engine-quarantine-gate");
  assert.equal(plan.scenario.id, "context-engine-quarantine-fallback");
  assert.equal(plan.expectation.mode, "known-failure");
  assert.deepEqual(plan.expectedFailureClasses, ["context-engine-quarantine-missing"]);
  assert.equal(plan.summary.openclaw, "openclaw@latest");
  assert.equal(plan.summary.plugins, "fixture:broken-context-engine");
  assert.deepEqual(plan.configPatch.plugins.slots, { contextEngine: "broken-context-engine" });
  assert.ok(
    plan.steps.some((step) =>
      step.command?.includes("__CRABPOT_BEHAVIOR_PLUGIN_FIXTURE_broken-context-engine__"),
    ),
  );
});

test("behavior eval executor requires explicit isolated execution opt-in", async () => {
  const plan = buildLocalPlan(historicalProfile, scenario);

  await assert.rejects(
    () =>
      executeBehaviorEvalPlan(plan, {
        env: {},
        runCommand: async () => ({ exitCode: 0, stdout: "", stderr: "", wallMs: 1 }),
      }),
    /CRABPOT_EXECUTE_BEHAVIOR=1/,
  );
});

test("behavior eval executor rejects unimplemented non-local runners", async () => {
  const plan = buildBehaviorEvalPlan({ profile: historicalProfile, scenario });

  await assert.rejects(
    () =>
      executeBehaviorEvalPlan(plan, {
        env: { CRABPOT_EXECUTE_BEHAVIOR: "1" },
        runCommand: async () => ({ exitCode: 0, stdout: "", stderr: "", wallMs: 1 }),
      }),
    /runner\.execution=local/,
  );
});

test("behavior eval executor records isolated setup, config, and gateway readiness", async () => {
  const tempRoot = await mkdtemp(path.join(os.tmpdir(), "crabpot-behavior-test-"));
  try {
    const plan = buildLocalPlan(historicalProfile, scenario);
    const commands = [];
    const rpcCalls = [];
    const commandEnvs = [];
    const result = await executeBehaviorEvalPlan(plan, {
      env: {
        CRABPOT_EXECUTE_BEHAVIOR: "1",
        PATH: "/bin:/usr/bin",
        OPENAI_API_KEY: "must-not-leak",
        NPM_TOKEN: "must-not-leak",
      },
      workspace: {
        tempRoot,
        homeDir: path.join(tempRoot, "home"),
        workspaceDir: path.join(tempRoot, "workspace"),
        stateDir: path.join(tempRoot, "state"),
        configPath: path.join(tempRoot, "config.json"),
        xdgCacheHome: path.join(tempRoot, "xdg-cache"),
        xdgConfigHome: path.join(tempRoot, "xdg-config"),
        xdgDataHome: path.join(tempRoot, "xdg-data"),
      },
      getFreePort: async () => 19789,
      runCommand: async (command, context) => {
        commands.push(command);
        commandEnvs.push(context.env);
        return { exitCode: 0, stdout: "ok", stderr: "", wallMs: 1 };
      },
      startGateway: async (command) => {
        commands.push(command);
        return { status: "pass", stdout: "ready", stderr: "", wallMs: 1 };
      },
      startProvider: async () => ({
        baseUrl: "http://127.0.0.1:45678",
        stop: async () => {},
      }),
      runGatewayRpc: async (method, params, context, options) => {
        rpcCalls.push({ method, params, options });
        if (method === "chat.send") {
          return { status: "started", runId: params.idempotencyKey };
        }
        if (method === "agent.wait") {
          return { status: "ok", runId: params.runId };
        }
        if (method === "chat.history") {
          return {
            messages: [
              {
                role: "assistant",
                text:
                  rpcCalls.filter((call) => call.method === "chat.send").length === 1
                    ? "remembered CRABPOT_LCM_FACT"
                    : "blue-lantern-42",
              },
            ],
          };
        }
        throw new Error(`unexpected rpc method ${method}`);
      },
    });

    assert.equal(result.status, "unexpected-pass");
    assert.equal(result.profileId, "recent-lcm-2026-5-22");
    assert.equal(result.gateway.port, 19789);
    assert.deepEqual(result.steps.map((step) => step.id), ["isolate", "openclaw", "plugin", "config", "gateway", "scenario", "report"]);
    assert.ok(commands.some((command) => command.includes("openclaw@2026.5.22 -- openclaw --version")));
    assert.ok(commands.some((command) => command.includes("plugins install npm:@martian-engineering/lossless-claw@0.11.2")));
    assert.ok(commands.some((command) => command.includes("gateway run --allow-unconfigured --bind loopback --port 19789 --token")));
    assert.equal(commandEnvs[0].NPM_CONFIG_USERCONFIG, path.join(tempRoot, "npmrc"));
    assert.equal(commandEnvs[0].npm_config_userconfig, path.join(tempRoot, "npmrc"));
    assert.equal(commandEnvs[0].npm_config_before, "");
    assert.equal(commandEnvs[0].PATH, "/bin:/usr/bin");
    assert.equal(commandEnvs[0].OPENAI_API_KEY, undefined);
    assert.equal(commandEnvs[0].NPM_TOKEN, undefined);
    assert.equal(await readFile(path.join(tempRoot, "npmrc"), "utf8"), "");
    assert.deepEqual(rpcCalls.map((call) => call.method), [
      "chat.send",
      "agent.wait",
      "chat.history",
      "chat.send",
      "agent.wait",
      "chat.history",
    ]);
    assert.equal(rpcCalls[0].params.sessionKey, "agent:qa:discord:channel:crabpot-lcm-basic-memory-turn:default");
    assert.equal(rpcCalls[3].params.sessionKey, "agent:qa:discord:channel:crabpot-lcm-basic-memory-turn:default");
    assert.match(rpcCalls[0].params.message, /CRABPOT_LCM_FACT/);
    assert.equal(rpcCalls[1].params.runId, rpcCalls[0].params.idempotencyKey);
    assert.equal(rpcCalls[1].params.timeoutMs, 900000);
    assert.equal(rpcCalls[1].options.timeoutMs, 905000);

    const config = JSON.parse(await readFile(path.join(tempRoot, "config.json"), "utf8"));
    assert.deepEqual(config.plugins.slots, { contextEngine: "lossless-claw" });
    assert.deepEqual(config.plugins.entries, {
      "lossless-claw": {
        enabled: true,
      },
    });
    assert.equal(config.gateway.port, 19789);
    assert.equal(config.gateway.auth.token, result.gateway.token);
    assert.deepEqual(config.agents.defaults.model, { primary: "mock-openai/gpt-5.5" });
    assert.equal(config.agents.list[0].id, "qa");
    assert.equal(config.models.providers["mock-openai"].baseUrl, "http://127.0.0.1:45678/v1");

    const authProfiles = JSON.parse(
      await readFile(path.join(tempRoot, "state", "agents", "qa", "agent", "auth-profiles.json"), "utf8"),
    );
    assert.equal(authProfiles.profiles["qa-mock-openai"].key, "qa-mock-not-a-real-key");
  } finally {
    await rm(tempRoot, { recursive: true, force: true });
  }
});

test("behavior eval executor classifies historical LCM install failures as expected failures", async () => {
  const tempRoot = await mkdtemp(path.join(os.tmpdir(), "crabpot-behavior-test-"));
  try {
    const plan = buildLocalPlan(historicalProfile, scenario);
    const result = await executeBehaviorEvalPlan(plan, {
      env: { CRABPOT_EXECUTE_BEHAVIOR: "1" },
      workspace: {
        tempRoot,
        homeDir: path.join(tempRoot, "home"),
        workspaceDir: path.join(tempRoot, "workspace"),
        stateDir: path.join(tempRoot, "state"),
        configPath: path.join(tempRoot, "config.json"),
        xdgCacheHome: path.join(tempRoot, "xdg-cache"),
        xdgConfigHome: path.join(tempRoot, "xdg-config"),
        xdgDataHome: path.join(tempRoot, "xdg-data"),
      },
      getFreePort: async () => 19790,
      runCommand: async (command) =>
        command.includes("plugins install")
          ? {
              exitCode: 1,
              stdout: "",
              stderr: "EmbeddedAttemptSessionTakeoverError: agent runner failed",
              wallMs: 1,
            }
          : { exitCode: 0, stdout: "ok", stderr: "", wallMs: 1 },
    });

    assert.equal(result.status, "expected-failure");
    assert.equal(result.failureClass, "embedded-attempt-session-takeover");
    assert.equal(result.steps.at(-1).id, "plugin");
  } finally {
    await rm(tempRoot, { recursive: true, force: true });
  }
});

test("behavior eval executor reports known failure classes as failures under must-pass override", async () => {
  const tempRoot = await mkdtemp(path.join(os.tmpdir(), "crabpot-behavior-test-"));
  try {
    const profile = resolveBehaviorEvalProfile({
      profile: historicalProfile,
      overrides: { expectationMode: "must-pass", runnerExecution: "local" },
    });
    const plan = buildBehaviorEvalPlan({ profile, scenario });
    const result = await executeBehaviorEvalPlan(plan, {
      env: { CRABPOT_EXECUTE_BEHAVIOR: "1" },
      workspace: {
        tempRoot,
        homeDir: path.join(tempRoot, "home"),
        workspaceDir: path.join(tempRoot, "workspace"),
        stateDir: path.join(tempRoot, "state"),
        configPath: path.join(tempRoot, "config.json"),
        xdgCacheHome: path.join(tempRoot, "xdg-cache"),
        xdgConfigHome: path.join(tempRoot, "xdg-config"),
        xdgDataHome: path.join(tempRoot, "xdg-data"),
      },
      getFreePort: async () => 19793,
      runCommand: async (command) =>
        command.includes("plugins install")
          ? {
              exitCode: 1,
              stdout: "",
              stderr: "EmbeddedAttemptSessionTakeoverError: agent runner failed",
              wallMs: 1,
            }
          : { exitCode: 0, stdout: "ok", stderr: "", wallMs: 1 },
    });

    assert.equal(result.status, "fail");
    assert.equal(result.failureClass, "embedded-attempt-session-takeover");
    assert.deepEqual(result.expectedFailureClasses, []);
  } finally {
    await rm(tempRoot, { recursive: true, force: true });
  }
});

test("behavior eval executor classifies historical LCM gateway-turn failures as expected failures", async () => {
  const tempRoot = await mkdtemp(path.join(os.tmpdir(), "crabpot-behavior-test-"));
  try {
    const plan = buildLocalPlan(historicalProfile, scenario);
    const result = await executeBehaviorEvalPlan(plan, {
      env: { CRABPOT_EXECUTE_BEHAVIOR: "1" },
      workspace: {
        tempRoot,
        homeDir: path.join(tempRoot, "home"),
        workspaceDir: path.join(tempRoot, "workspace"),
        stateDir: path.join(tempRoot, "state"),
        configPath: path.join(tempRoot, "config.json"),
        xdgCacheHome: path.join(tempRoot, "xdg-cache"),
        xdgConfigHome: path.join(tempRoot, "xdg-config"),
        xdgDataHome: path.join(tempRoot, "xdg-data"),
      },
      getFreePort: async () => 19792,
      runCommand: async () => ({ exitCode: 0, stdout: "ok", stderr: "", wallMs: 1 }),
      startGateway: async () => ({ status: "pass", stdout: "ready", stderr: "", wallMs: 1 }),
      startProvider: async () => ({
        baseUrl: "http://127.0.0.1:45680",
        stop: async () => {},
      }),
      runGatewayRpc: async (method) => {
        if (method === "chat.send") {
          return { status: "started", runId: "run-lcm-red" };
        }
        throw new Error("EmbeddedAttemptSessionTakeoverError: agent runner failed");
      },
    });

    assert.equal(result.status, "expected-failure");
    assert.equal(result.failureClass, "embedded-attempt-session-takeover");
    assert.equal(result.steps.at(-2).id, "scenario");
    assert.equal(result.steps.at(-2).status, "fail");
  } finally {
    await rm(tempRoot, { recursive: true, force: true });
  }
});

test("behavior eval executor keeps the forward gate from accepting pre-recall turn mismatches", async () => {
  const tempRoot = await mkdtemp(path.join(os.tmpdir(), "crabpot-behavior-test-"));
  try {
    const profile = await loadBehaviorEvalProfile("forward-lcm-release-gate");
    const loadedScenario = await loadBehaviorEvalScenario(profile.scenario);
    const plan = buildLocalPlan(profile, loadedScenario);
    const result = await executeBehaviorEvalPlan(plan, {
      env: { CRABPOT_EXECUTE_BEHAVIOR: "1" },
      workspace: {
        tempRoot,
        homeDir: path.join(tempRoot, "home"),
        workspaceDir: path.join(tempRoot, "workspace"),
        stateDir: path.join(tempRoot, "state"),
        configPath: path.join(tempRoot, "config.json"),
        xdgCacheHome: path.join(tempRoot, "xdg-cache"),
        xdgConfigHome: path.join(tempRoot, "xdg-config"),
        xdgDataHome: path.join(tempRoot, "xdg-data"),
      },
      getFreePort: async () => 19797,
      runCommand: async () => ({ exitCode: 0, stdout: "ok", stderr: "", wallMs: 1 }),
      startGateway: async () => ({ status: "pass", stdout: "ready", stderr: "", wallMs: 1 }),
      startProvider: async () => ({
        baseUrl: "http://127.0.0.1:45685",
        stop: async () => {},
      }),
      runGatewayRpc: async (method, params) => {
        if (method === "chat.send") {
          return { status: "started", runId: params.idempotencyKey };
        }
        if (method === "agent.wait") {
          return { status: "ok", runId: params.runId };
        }
        if (method === "chat.history") {
          return { messages: [{ role: "assistant", text: "wrong setup response" }] };
        }
        throw new Error(`unexpected rpc method ${method}`);
      },
    });

    assert.equal(result.status, "fail");
    assert.equal(result.failureClass, "behavior-turn-mismatch");
    assert.match(result.steps.at(-2).stderr, /expected turn 1/);
  } finally {
    await rm(tempRoot, { recursive: true, force: true });
  }
});

test("behavior eval executor fails recall when the token only appears in earlier user text", async () => {
  const tempRoot = await mkdtemp(path.join(os.tmpdir(), "crabpot-behavior-test-"));
  try {
    const profile = {
      ...historicalProfile,
      id: "forward-lcm-release-gate",
      expectation: { mode: "must-pass" },
    };
    const loadedScenario = await loadBehaviorEvalScenario("lcm-basic-memory-turn");
    const plan = buildLocalPlan(profile, loadedScenario);
    let sendCount = 0;
    const result = await executeBehaviorEvalPlan(plan, {
      env: { CRABPOT_EXECUTE_BEHAVIOR: "1" },
      workspace: {
        tempRoot,
        homeDir: path.join(tempRoot, "home"),
        workspaceDir: path.join(tempRoot, "workspace"),
        stateDir: path.join(tempRoot, "state"),
        configPath: path.join(tempRoot, "config.json"),
        xdgCacheHome: path.join(tempRoot, "xdg-cache"),
        xdgConfigHome: path.join(tempRoot, "xdg-config"),
        xdgDataHome: path.join(tempRoot, "xdg-data"),
      },
      getFreePort: async () => 19793,
      runCommand: async () => ({ exitCode: 0, stdout: "ok", stderr: "", wallMs: 1 }),
      startGateway: async () => ({ status: "pass", stdout: "ready", stderr: "", wallMs: 1 }),
      startProvider: async () => ({
        baseUrl: "http://127.0.0.1:45681",
        stop: async () => {},
      }),
      runGatewayRpc: async (method, params) => {
        if (method === "chat.send") {
          sendCount += 1;
          return { status: "started", runId: params.idempotencyKey };
        }
        if (method === "agent.wait") {
          return { status: "ok", runId: params.runId };
        }
        if (method === "chat.history") {
          return {
            messages: [
              {
                role: "user",
                content: [{ type: "text", text: "CRABPOT_LCM_FACT is blue-lantern-42." }],
              },
              {
                role: "assistant",
                content: [
                  {
                    type: "text",
                    text: {
                      1: "blue-lantern-42",
                      2: "ok",
                      3: "ok",
                      4: "ok",
                      5: "status: rotated",
                      6: "I do not have that fact.",
                    }[sendCount] ?? "I do not have that fact.",
                  },
                ],
              },
            ],
          };
        }
        throw new Error(`unexpected rpc method ${method}`);
      },
    });

    assert.equal(result.status, "fail");
    assert.equal(result.failureClass, "memory-recall-mismatch");
    assert.equal(result.workspace.kept, false);
    assert.match(result.steps.at(-2).stderr, /latest assistant/);
  } finally {
    await rm(tempRoot, { recursive: true, force: true });
  }
});

test("behavior eval executor flags quarantine health as unexpected pass while tracking latest", async () => {
  const tempRoot = await mkdtemp(path.join(os.tmpdir(), "crabpot-behavior-test-"));
  try {
    const profile = await loadBehaviorEvalProfile("forward-context-engine-quarantine-gate");
    const loadedScenario = await loadBehaviorEvalScenario(profile.scenario);
    const plan = buildLocalPlan(profile, loadedScenario);
    const commands = [];
    const result = await executeBehaviorEvalPlan(plan, {
      env: { CRABPOT_EXECUTE_BEHAVIOR: "1" },
      workspace: {
        tempRoot,
        homeDir: path.join(tempRoot, "home"),
        workspaceDir: path.join(tempRoot, "workspace"),
        stateDir: path.join(tempRoot, "state"),
        configPath: path.join(tempRoot, "config.json"),
        xdgCacheHome: path.join(tempRoot, "xdg-cache"),
        xdgConfigHome: path.join(tempRoot, "xdg-config"),
        xdgDataHome: path.join(tempRoot, "xdg-data"),
      },
      getFreePort: async () => 19794,
      runCommand: async (command) => {
        commands.push(command);
        return { exitCode: 0, stdout: "ok", stderr: "", wallMs: 1 };
      },
      startGateway: async (command) => {
        commands.push(command);
        return { status: "pass", stdout: "ready", stderr: "", wallMs: 1 };
      },
      startProvider: async () => ({
        baseUrl: "http://127.0.0.1:45682",
        stop: async () => {},
      }),
      runGatewayRpc: async (method, params) => {
        if (method === "chat.send") {
          return { status: "started", runId: params.idempotencyKey };
        }
        if (method === "agent.wait") {
          return { status: "ok", runId: params.runId };
        }
        if (method === "chat.history") {
          return { messages: [{ role: "assistant", text: "ok" }] };
        }
        if (method === "health") {
          return {
            contextEngineQuarantines: [
              {
                pluginId: "broken-context-engine",
                engineId: "broken-context-engine",
                reason: "Context engine \"broken-context-engine\" factory returned an invalid ContextEngine: missing assemble(), missing compact().",
              },
            ],
          };
        }
        throw new Error(`unexpected rpc method ${method}`);
      },
    });

    assert.equal(result.status, "unexpected-pass");
    assert.equal(result.failureClass, null);
    assert.ok(commands.some((command) => command.includes(path.join(tempRoot, "fixtures", "broken-context-engine"))));
    assert.match(
      await readFile(path.join(tempRoot, "fixtures", "broken-context-engine", "index.js"), "utf8"),
      /registerContextEngine/,
    );
  } finally {
    await rm(tempRoot, { recursive: true, force: true });
  }
});

test("behavior eval executor tracks missing quarantine health as expected failure", async () => {
  const tempRoot = await mkdtemp(path.join(os.tmpdir(), "crabpot-behavior-test-"));
  try {
    const profile = await loadBehaviorEvalProfile("forward-context-engine-quarantine-gate");
    const loadedScenario = await loadBehaviorEvalScenario(profile.scenario);
    const plan = buildLocalPlan(profile, loadedScenario);
    const result = await executeBehaviorEvalPlan(plan, {
      env: { CRABPOT_EXECUTE_BEHAVIOR: "1" },
      workspace: {
        tempRoot,
        homeDir: path.join(tempRoot, "home"),
        workspaceDir: path.join(tempRoot, "workspace"),
        stateDir: path.join(tempRoot, "state"),
        configPath: path.join(tempRoot, "config.json"),
        xdgCacheHome: path.join(tempRoot, "xdg-cache"),
        xdgConfigHome: path.join(tempRoot, "xdg-config"),
        xdgDataHome: path.join(tempRoot, "xdg-data"),
      },
      getFreePort: async () => 19795,
      runCommand: async () => ({ exitCode: 0, stdout: "ok", stderr: "", wallMs: 1 }),
      startGateway: async () => ({ status: "pass", stdout: "ready", stderr: "", wallMs: 1 }),
      startProvider: async () => ({
        baseUrl: "http://127.0.0.1:45683",
        stop: async () => {},
      }),
      runGatewayRpc: async (method, params) => {
        if (method === "chat.send") {
          return { status: "started", runId: params.idempotencyKey };
        }
        if (method === "agent.wait") {
          return { status: "ok", runId: params.runId };
        }
        if (method === "chat.history") {
          return { messages: [{ role: "assistant", text: "ok" }] };
        }
        if (method === "health") {
          return { contextEngineQuarantines: [] };
        }
        throw new Error(`unexpected rpc method ${method}`);
      },
    });

    assert.equal(result.status, "expected-failure");
    assert.equal(result.failureClass, "context-engine-quarantine-missing");
    assert.match(result.steps.at(-2).stderr, /context-engine-quarantine-missing/);
  } finally {
    await rm(tempRoot, { recursive: true, force: true });
  }
});

test("behavior eval executor classifies historical LCM agent-turn failures as expected failures", async () => {
  const tempRoot = await mkdtemp(path.join(os.tmpdir(), "crabpot-behavior-test-"));
  try {
    const plan = buildLocalPlan(historicalProfile, scenario);
    const result = await executeBehaviorEvalPlan(plan, {
      env: { CRABPOT_EXECUTE_BEHAVIOR: "1" },
      workspace: {
        tempRoot,
        homeDir: path.join(tempRoot, "home"),
        workspaceDir: path.join(tempRoot, "workspace"),
        stateDir: path.join(tempRoot, "state"),
        configPath: path.join(tempRoot, "config.json"),
        xdgCacheHome: path.join(tempRoot, "xdg-cache"),
        xdgConfigHome: path.join(tempRoot, "xdg-config"),
        xdgDataHome: path.join(tempRoot, "xdg-data"),
      },
      getFreePort: async () => 19791,
      runCommand: async () => ({ exitCode: 0, stdout: "ok", stderr: "", wallMs: 1 }),
      startGateway: async () => ({ status: "pass", stdout: "ready", stderr: "", wallMs: 1 }),
      startProvider: async () => ({
        baseUrl: "http://127.0.0.1:45679",
        stop: async () => {},
      }),
      runScenario: async () => ({
        status: "fail",
        exitCode: 1,
        stdout: "",
        stderr: "EmbeddedAttemptSessionTakeoverError: agent runner failed",
        wallMs: 1,
      }),
    });

    assert.equal(result.status, "expected-failure");
    assert.equal(result.failureClass, "embedded-attempt-session-takeover");
    assert.equal(result.steps.at(-2).id, "scenario");
    assert.equal(result.steps.at(-2).status, "fail");
  } finally {
    await rm(tempRoot, { recursive: true, force: true });
  }
});

test("behavior eval gateway stop waits for the child process to exit", async () => {
  const child = new EventEmitter();
  child.pid = 1234;
  child.exitCode = null;
  child.signalCode = null;
  const signals = [];
  child.kill = (signal) => {
    signals.push({ pid: child.pid, signal });
    setTimeout(() => {
      child.exitCode = 0;
      child.emit("exit", 0, signal);
    }, 10);
  };

  const stopPromise = stopBehaviorEvalChildProcess(child, {
    timeoutMs: 1000,
    killProcess: (pid, signal) => {
      signals.push({ pid, signal });
      setTimeout(() => {
        child.exitCode = 0;
        child.emit("exit", 0, signal);
      }, 10);
    },
  });

  const expectedPid = process.platform === "win32" ? 1234 : -1234;
  assert.deepEqual(signals, [{ pid: expectedPid, signal: "SIGTERM" }]);
  assert.equal(child.exitCode, null);
  await stopPromise;
  assert.equal(child.exitCode, 0);
});

test("behavior eval shell command timeout reports and terminates the command group", async () => {
  const tempRoot = await mkdtemp(path.join(os.tmpdir(), "crabpot-behavior-test-"));
  try {
    const result = await runBehaviorEvalCommand(
      `"${process.execPath}" -e "setInterval(() => {}, 1000)"`,
      {
        workspace: { tempRoot },
        env: process.env,
        timeoutMs: 20,
      },
    );

    assert.equal(result.exitCode, 1);
    assert.match(result.stderr, /command timed out/);
  } finally {
    await rm(tempRoot, { recursive: true, force: true });
  }
});

test("behavior eval temp cleanup does not mask transient removal races", async () => {
  const messages = [];
  const error = new Error("directory not empty");
  error.code = "ENOTEMPTY";

  await removeBehaviorEvalTempRoot("/tmp/crabpot-behavior-test-race", {
    remove: async () => {
      throw error;
    },
    warn: (message) => messages.push(message),
  });

  assert.equal(messages.length, 1);
  assert.match(messages[0], /cleanup skipped/);
});
