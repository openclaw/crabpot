# Crabpot Issue Findings

Generated: deterministic
Status: PASS

## Triage Summary

| Metric               | Value |
| -------------------- | ----- |
| Issue findings       | 143   |
| 🔴 P0                | 2     |
| 🟠 P1                | 26    |
| Live issues          | 2     |
| Live P0 issues       | 2     |
| Compat gaps          | 1     |
| Deprecation warnings | 21    |
| Inspector gaps       | 97    |
| Upstream metadata    | 22    |
| Contract probes      | 141   |

## Triage Overview

| Class               | Count | P0 | Meaning                                                                                                         |
| ------------------- | ----- | -- | --------------------------------------------------------------------------------------------------------------- |
| live-issue          | 2     | 2  | Potential runtime breakage in the target OpenClaw/plugin pair. P0 only when it is not a deprecated compat seam. |
| compat-gap          | 1     | -  | Compatibility behavior is needed but missing from the target OpenClaw compat registry.                          |
| deprecation-warning | 21    | -  | Plugin uses a supported but deprecated compatibility seam; keep it wired while migration exists.                |
| inspector-gap       | 97    | -  | Crabpot needs stronger capture/probe evidence before making contract judgments.                                 |
| upstream-metadata   | 22    | -  | Plugin package or manifest metadata should improve upstream; not a target OpenClaw live break by itself.        |
| fixture-regression  | 0     | -  | Fixture no longer exposes a seam Crabpot expected; investigate fixture pin or scanner drift.                    |

## P0 Live Issues

- 🔴 P0 **codex-app-server** `live-issue` `core-compat-adapter`
  - **sdk-export-missing**: codex-app-server: plugin SDK import aliases are missing from target package exports
  - state: blocking · compat:untracked · live
  - evidence:
    - [openclaw/plugin-sdk/discord @ controller.ts:104](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/src/controller.ts#L104)
    - [openclaw/plugin-sdk/discord @ controller.ts:106](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/src/controller.ts#L106)
    - [openclaw/plugin-sdk/telegram-account @ controller.ts:105](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/src/controller.ts#L105)

- 🔴 P0 **hyperspell** `live-issue` `core-compat-adapter`
  - **unknown-hook-name**: hyperspell: fixture uses a hook missing from target OpenClaw
  - state: blocking · compat:none · live
  - evidence:
    - [file_changed @ index.ts:122](https://github.com/hyperspell/hyperspell-openclaw/blob/a04d35176c4ffbe99d906f7d8075fc8671e7968d/index.ts#L122)

## Live Issues

- 🔴 P0 **codex-app-server** `live-issue` `core-compat-adapter`
  - **sdk-export-missing**: codex-app-server: plugin SDK import aliases are missing from target package exports
  - state: blocking · compat:untracked · live
  - evidence:
    - [openclaw/plugin-sdk/discord @ controller.ts:104](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/src/controller.ts#L104)
    - [openclaw/plugin-sdk/discord @ controller.ts:106](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/src/controller.ts#L106)
    - [openclaw/plugin-sdk/telegram-account @ controller.ts:105](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/src/controller.ts#L105)

- 🔴 P0 **hyperspell** `live-issue` `core-compat-adapter`
  - **unknown-hook-name**: hyperspell: fixture uses a hook missing from target OpenClaw
  - state: blocking · compat:none · live
  - evidence:
    - [file_changed @ index.ts:122](https://github.com/hyperspell/hyperspell-openclaw/blob/a04d35176c4ffbe99d906f7d8075fc8671e7968d/index.ts#L122)

## Compat Gaps

- 🟠 P1 **codex-app-server** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: codex-app-server: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - plugin-sdk-export-aliases

## Deprecation Warnings

- 🟡 P2 **a2a-gateway** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: a2a-gateway: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [openclaw/plugin-sdk @ types.ts:14](https://github.com/win4r/openclaw-a2a-gateway/blob/a335e59e926f7e1a8913e6cd7b1cbf2d44c33cb7/src/types.ts#L14)

- 🟡 P2 **agentchat** `deprecation-warning` `core-compat-adapter`
  - **channel-env-vars**: agentchat: channelEnvVars legacy manifest metadata must stay covered
  - state: open · compat:deprecated · deprecated
  - evidence:
    - agentchat

- 🟡 P2 **apify** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: apify: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [openclaw/plugin-sdk @ cli.ts:2](https://github.com/apify/apify-openclaw-plugin/blob/41f49794d230f7ad092d1c699ee4d91fecf6ba91/src/cli.ts#L2)
    - [openclaw/plugin-sdk @ index.ts:1](https://github.com/apify/apify-openclaw-plugin/blob/41f49794d230f7ad092d1c699ee4d91fecf6ba91/src/index.ts#L1)
    - [openclaw/plugin-sdk @ apify-scraper-tool.ts:4](https://github.com/apify/apify-openclaw-plugin/blob/41f49794d230f7ad092d1c699ee4d91fecf6ba91/src/tools/apify-scraper-tool.ts#L4)

- 🟡 P2 **codex-app-server** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: codex-app-server: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [openclaw/plugin-sdk @ index.ts:1](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/index.ts#L1)
    - [openclaw/plugin-sdk @ client.ts:6](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/src/client.ts#L6)
    - [openclaw/plugin-sdk @ controller.ts:18](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/src/controller.ts#L18)
    - [openclaw/plugin-sdk @ types.ts:1](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/src/types.ts#L1)

- 🟡 P2 **composio** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: composio: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [openclaw/plugin-sdk @ index.ts:1](https://github.com/ComposioHQ/openclaw-composio-plugin/blob/992d9576ba1b301e37dc900f3177a608936b8fbb/index.ts#L1)
    - [openclaw/plugin-sdk @ cli.ts:6](https://github.com/ComposioHQ/openclaw-composio-plugin/blob/992d9576ba1b301e37dc900f3177a608936b8fbb/src/cli.ts#L6)
    - [openclaw/plugin-sdk @ client.ts:1](https://github.com/ComposioHQ/openclaw-composio-plugin/blob/992d9576ba1b301e37dc900f3177a608936b8fbb/src/client.ts#L1)
    - [openclaw/plugin-sdk @ tools.ts:1](https://github.com/ComposioHQ/openclaw-composio-plugin/blob/992d9576ba1b301e37dc900f3177a608936b8fbb/src/tools.ts#L1)

- 🟡 P2 **connectclaw** `deprecation-warning` `core-compat-adapter`
  - **legacy-before-agent-start**: connectclaw: legacy before_agent_start hook compatibility is still used
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [before_agent_start @ hooks.ts:17](https://github.com/osipov-anton/connectclaw/blob/6cd516650168890e9b850064afaaa5fe24df5950/packages/plugin/src/hooks.ts#L17)

- 🟡 P2 **connectclaw** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: connectclaw: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [openclaw/plugin-sdk @ index.ts:1](https://github.com/osipov-anton/connectclaw/blob/6cd516650168890e9b850064afaaa5fe24df5950/packages/plugin/index.ts#L1)
    - [openclaw/plugin-sdk @ commands.ts:1](https://github.com/osipov-anton/connectclaw/blob/6cd516650168890e9b850064afaaa5fe24df5950/packages/plugin/src/commands.ts#L1)
    - [openclaw/plugin-sdk @ hooks.ts:1](https://github.com/osipov-anton/connectclaw/blob/6cd516650168890e9b850064afaaa5fe24df5950/packages/plugin/src/hooks.ts#L1)
    - [openclaw/plugin-sdk @ tools.ts:1](https://github.com/osipov-anton/connectclaw/blob/6cd516650168890e9b850064afaaa5fe24df5950/packages/plugin/src/tools.ts#L1)
    - [openclaw/plugin-sdk @ tools.ts:2](https://github.com/osipov-anton/connectclaw/blob/6cd516650168890e9b850064afaaa5fe24df5950/packages/plugin/src/tools.ts#L2)

- 🟡 P2 **hasdata** `deprecation-warning` `core-compat-adapter`
  - **provider-auth-env-vars**: hasdata: providerAuthEnvVars legacy manifest metadata must stay covered
  - state: open · compat:deprecated · deprecated
  - evidence:
    - hasdata

- 🟡 P2 **honcho** `deprecation-warning` `core-compat-adapter`
  - **legacy-before-agent-start**: honcho: legacy before_agent_start hook compatibility is still used
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [before_agent_start @ subagent.ts:18](https://github.com/plastic-labs/openclaw-honcho/blob/f1ac095b5d633d463d57c5cc9735547a73ff9199/hooks/subagent.ts#L18)

- 🟡 P2 **honcho** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: honcho: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [openclaw/plugin-sdk @ cli.ts:8](https://github.com/plastic-labs/openclaw-honcho/blob/f1ac095b5d633d463d57c5cc9735547a73ff9199/commands/cli.ts#L8)
    - [openclaw/plugin-sdk @ capture.ts:2](https://github.com/plastic-labs/openclaw-honcho/blob/f1ac095b5d633d463d57c5cc9735547a73ff9199/hooks/capture.ts#L2)
    - [openclaw/plugin-sdk @ context.ts:2](https://github.com/plastic-labs/openclaw-honcho/blob/f1ac095b5d633d463d57c5cc9735547a73ff9199/hooks/context.ts#L2)
    - [openclaw/plugin-sdk @ gateway.ts:2](https://github.com/plastic-labs/openclaw-honcho/blob/f1ac095b5d633d463d57c5cc9735547a73ff9199/hooks/gateway.ts#L2)
    - [openclaw/plugin-sdk @ subagent.ts:2](https://github.com/plastic-labs/openclaw-honcho/blob/f1ac095b5d633d463d57c5cc9735547a73ff9199/hooks/subagent.ts#L2)
    - [openclaw/plugin-sdk @ state.ts:9](https://github.com/plastic-labs/openclaw-honcho/blob/f1ac095b5d633d463d57c5cc9735547a73ff9199/state.ts#L9)
    - [openclaw/plugin-sdk @ ask.ts:3](https://github.com/plastic-labs/openclaw-honcho/blob/f1ac095b5d633d463d57c5cc9735547a73ff9199/tools/ask.ts#L3)
    - [openclaw/plugin-sdk @ context.ts:3](https://github.com/plastic-labs/openclaw-honcho/blob/f1ac095b5d633d463d57c5cc9735547a73ff9199/tools/context.ts#L3)
    - [openclaw/plugin-sdk @ memory-passthrough.ts:3](https://github.com/plastic-labs/openclaw-honcho/blob/f1ac095b5d633d463d57c5cc9735547a73ff9199/tools/memory-passthrough.ts#L3)
    - [openclaw/plugin-sdk @ message-search.ts:3](https://github.com/plastic-labs/openclaw-honcho/blob/f1ac095b5d633d463d57c5cc9735547a73ff9199/tools/message-search.ts#L3)
    - [openclaw/plugin-sdk @ search.ts:3](https://github.com/plastic-labs/openclaw-honcho/blob/f1ac095b5d633d463d57c5cc9735547a73ff9199/tools/search.ts#L3)
    - [openclaw/plugin-sdk @ session.ts:3](https://github.com/plastic-labs/openclaw-honcho/blob/f1ac095b5d633d463d57c5cc9735547a73ff9199/tools/session.ts#L3)

- 🟡 P2 **hyperspell** `deprecation-warning` `core-compat-adapter`
  - **legacy-before-agent-start**: hyperspell: legacy before_agent_start hook compatibility is still used
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [before_agent_start @ index.ts:102](https://github.com/hyperspell/hyperspell-openclaw/blob/a04d35176c4ffbe99d906f7d8075fc8671e7968d/index.ts#L102)
    - [before_agent_start @ index.ts:111](https://github.com/hyperspell/hyperspell-openclaw/blob/a04d35176c4ffbe99d906f7d8075fc8671e7968d/index.ts#L111)

- 🟡 P2 **hyperspell** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: hyperspell: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [openclaw/plugin-sdk @ slash.ts:1](https://github.com/hyperspell/hyperspell-openclaw/blob/a04d35176c4ffbe99d906f7d8075fc8671e7968d/commands/slash.ts#L1)
    - [openclaw/plugin-sdk @ tools.ts:2](https://github.com/hyperspell/hyperspell-openclaw/blob/a04d35176c4ffbe99d906f7d8075fc8671e7968d/graph/tools.ts#L2)
    - [openclaw/plugin-sdk @ index.ts:1](https://github.com/hyperspell/hyperspell-openclaw/blob/a04d35176c4ffbe99d906f7d8075fc8671e7968d/index.ts#L1)

- 🟡 P2 **inworld-tts** `deprecation-warning` `core-compat-adapter`
  - **provider-auth-env-vars**: inworld-tts: providerAuthEnvVars legacy manifest metadata must stay covered
  - state: open · compat:deprecated · deprecated
  - evidence:
    - inworld

- 🟡 P2 **llm-trace-phoenix** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: llm-trace-phoenix: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [openclaw/plugin-sdk @ index.ts:12](https://github.com/pingshian0131/openclaw-plugin-llm-trace-phoenix/blob/05bc0f4ba67281c10fad7be356d32a54b00c59fd/index.ts#L12)

- 🟡 P2 **lossless-claw** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: lossless-claw: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [openclaw/plugin-sdk @ assembler.ts:2](https://github.com/Martian-Engineering/lossless-claw/blob/8d634cdf4b7544c9093c2e701fbbe5075d1e3de6/src/assembler.ts#L2)
    - [openclaw/plugin-sdk @ engine.ts:19](https://github.com/Martian-Engineering/lossless-claw/blob/8d634cdf4b7544c9093c2e701fbbe5075d1e3de6/src/engine.ts#L19)
    - [openclaw/plugin-sdk @ lcm-log.ts:1](https://github.com/Martian-Engineering/lossless-claw/blob/8d634cdf4b7544c9093c2e701fbbe5075d1e3de6/src/lcm-log.ts#L1)
    - [openclaw/plugin-sdk @ openclaw-bridge.ts:17](https://github.com/Martian-Engineering/lossless-claw/blob/8d634cdf4b7544c9093c2e701fbbe5075d1e3de6/src/openclaw-bridge.ts#L17)
    - [openclaw/plugin-sdk @ openclaw-bridge.ts:22](https://github.com/Martian-Engineering/lossless-claw/blob/8d634cdf4b7544c9093c2e701fbbe5075d1e3de6/src/openclaw-bridge.ts#L22)
    - [openclaw/plugin-sdk @ index.ts:10](https://github.com/Martian-Engineering/lossless-claw/blob/8d634cdf4b7544c9093c2e701fbbe5075d1e3de6/src/plugin/index.ts#L10)
    - [openclaw/plugin-sdk @ lcm-command.ts:9](https://github.com/Martian-Engineering/lossless-claw/blob/8d634cdf4b7544c9093c2e701fbbe5075d1e3de6/src/plugin/lcm-command.ts#L9)
    - [openclaw/plugin-sdk @ common.ts:1](https://github.com/Martian-Engineering/lossless-claw/blob/8d634cdf4b7544c9093c2e701fbbe5075d1e3de6/src/tools/common.ts#L1)

- 🟡 P2 **memos-cloud** `deprecation-warning` `core-compat-adapter`
  - **legacy-before-agent-start**: memos-cloud: legacy before_agent_start hook compatibility is still used
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [before_agent_start @ index.js:481](https://github.com/MemTensor/MemOS-Cloud-OpenClaw-Plugin/blob/03fcc33c5fd285971d4b3dbaa8bbb31cb727db7c/index.js#L481)

- 🟡 P2 **memu-engine** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: memu-engine: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [openclaw/plugin-sdk @ index.ts:1](https://github.com/duxiaoxiong/memu-engine-for-OpenClaw/blob/a5a22c5faf21e30d17a1b47635829e7dd0728ae5/index.ts#L1)

- 🟡 P2 **mocrane-wecom** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: mocrane-wecom: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [openclaw/plugin-sdk @ index.ts:1](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/index.ts#L1)
    - [openclaw/plugin-sdk @ accounts.ts:1](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/src/accounts.ts#L1)
    - [openclaw/plugin-sdk @ handler.ts:9](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/src/agent/handler.ts#L9)
    - [openclaw/plugin-sdk @ channel.ts:5](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/src/channel.ts#L5)
    - [openclaw/plugin-sdk @ plugin-sdk-shim.ts:17](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/src/compat/plugin-sdk-shim.ts#L17)
    - [openclaw/plugin-sdk @ plugin-sdk-shim.ts:18](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/src/compat/plugin-sdk-shim.ts#L18)
    - [openclaw/plugin-sdk @ plugin-sdk-shim.ts:19](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/src/compat/plugin-sdk-shim.ts#L19)
    - [openclaw/plugin-sdk @ plugin-sdk-shim.ts:20](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/src/compat/plugin-sdk-shim.ts#L20)
    - [openclaw/plugin-sdk @ plugin-sdk-shim.ts:21](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/src/compat/plugin-sdk-shim.ts#L21)
    - [openclaw/plugin-sdk @ plugin-sdk-shim.ts:22](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/src/compat/plugin-sdk-shim.ts#L22)
    - [openclaw/plugin-sdk @ plugin-sdk-shim.ts:23](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/src/compat/plugin-sdk-shim.ts#L23)
    - [openclaw/plugin-sdk @ plugin-sdk-shim.ts:27](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/src/compat/plugin-sdk-shim.ts#L27)
    - [openclaw/plugin-sdk @ plugin-sdk-shim.ts:30](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/src/compat/plugin-sdk-shim.ts#L30)
    - [openclaw/plugin-sdk @ accounts.ts:5](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/src/config/accounts.ts#L5)
    - [openclaw/plugin-sdk @ media.ts:1](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/src/config/media.ts#L1)
    - [openclaw/plugin-sdk @ network.ts:1](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/src/config/network.ts#L1)
    - [openclaw/plugin-sdk @ routing.ts:1](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/src/config/routing.ts#L1)
    - [openclaw/plugin-sdk @ dynamic-agent.ts:8](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/src/dynamic-agent.ts#L8)
    - [openclaw/plugin-sdk @ gateway-monitor.ts:5](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/src/gateway-monitor.ts#L5)
    - [openclaw/plugin-sdk @ monitor.ts:6](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/src/monitor.ts#L6)
    - [openclaw/plugin-sdk @ types.ts:2](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/src/monitor/types.ts#L2)
    - [openclaw/plugin-sdk @ onboarding.ts:9](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/src/onboarding.ts#L9)
    - [openclaw/plugin-sdk @ outbound.ts:1](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/src/outbound.ts#L1)
    - [openclaw/plugin-sdk @ runtime.ts:1](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/src/runtime.ts#L1)
    - [openclaw/plugin-sdk @ command-auth.ts:1](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/src/shared/command-auth.ts#L1)
    - [openclaw/plugin-sdk @ ws-adapter.ts:14](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/src/ws-adapter.ts#L14)

- 🟡 P2 **opik-openclaw** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: opik-openclaw: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [openclaw/plugin-sdk @ index.ts:1](https://github.com/comet-ml/opik-openclaw/blob/f8987269d3f2121f52ace4f60c80629266c0dfd7/index.ts#L1)
    - [openclaw/plugin-sdk @ index.ts:2](https://github.com/comet-ml/opik-openclaw/blob/f8987269d3f2121f52ace4f60c80629266c0dfd7/index.ts#L2)
    - [openclaw/plugin-sdk @ cli.ts:1](https://github.com/comet-ml/opik-openclaw/blob/f8987269d3f2121f52ace4f60c80629266c0dfd7/src/cli.ts#L1)
    - [openclaw/plugin-sdk @ configure.ts:2](https://github.com/comet-ml/opik-openclaw/blob/f8987269d3f2121f52ace4f60c80629266c0dfd7/src/configure.ts#L2)
    - [openclaw/plugin-sdk @ service.ts:5](https://github.com/comet-ml/opik-openclaw/blob/f8987269d3f2121f52ace4f60c80629266c0dfd7/src/service.ts#L5)
    - [openclaw/plugin-sdk @ service.ts:6](https://github.com/comet-ml/opik-openclaw/blob/f8987269d3f2121f52ace4f60c80629266c0dfd7/src/service.ts#L6)
    - [openclaw/plugin-sdk @ llm.ts:1](https://github.com/comet-ml/opik-openclaw/blob/f8987269d3f2121f52ace4f60c80629266c0dfd7/src/service/hooks/llm.ts#L1)
    - [openclaw/plugin-sdk @ subagent.ts:1](https://github.com/comet-ml/opik-openclaw/blob/f8987269d3f2121f52ace4f60c80629266c0dfd7/src/service/hooks/subagent.ts#L1)
    - [openclaw/plugin-sdk @ tool.ts:1](https://github.com/comet-ml/opik-openclaw/blob/f8987269d3f2121f52ace4f60c80629266c0dfd7/src/service/hooks/tool.ts#L1)

- 🟡 P2 **qqbot** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: qqbot: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [openclaw/plugin-sdk @ index.ts:1](https://github.com/tencent-connect/openclaw-qqbot/blob/3eee78922ed0b19af5c4c55f1dfe7d1c848e31f5/index.ts#L1)
    - [openclaw/plugin-sdk @ index.ts:2](https://github.com/tencent-connect/openclaw-qqbot/blob/3eee78922ed0b19af5c4c55f1dfe7d1c848e31f5/index.ts#L2)
    - [openclaw/plugin-sdk @ approval-handler.ts:12](https://github.com/tencent-connect/openclaw-qqbot/blob/3eee78922ed0b19af5c4c55f1dfe7d1c848e31f5/src/approval-handler.ts#L12)
    - [openclaw/plugin-sdk @ config.ts:2](https://github.com/tencent-connect/openclaw-qqbot/blob/3eee78922ed0b19af5c4c55f1dfe7d1c848e31f5/src/config.ts#L2)
    - [openclaw/plugin-sdk @ onboarding.ts:13](https://github.com/tencent-connect/openclaw-qqbot/blob/3eee78922ed0b19af5c4c55f1dfe7d1c848e31f5/src/onboarding.ts#L13)
    - [openclaw/plugin-sdk @ proactive.ts:67](https://github.com/tencent-connect/openclaw-qqbot/blob/3eee78922ed0b19af5c4c55f1dfe7d1c848e31f5/src/proactive.ts#L67)
    - [openclaw/plugin-sdk @ runtime.ts:1](https://github.com/tencent-connect/openclaw-qqbot/blob/3eee78922ed0b19af5c4c55f1dfe7d1c848e31f5/src/runtime.ts#L1)
    - [openclaw/plugin-sdk @ channel.ts:1](https://github.com/tencent-connect/openclaw-qqbot/blob/3eee78922ed0b19af5c4c55f1dfe7d1c848e31f5/src/tools/channel.ts#L1)
    - [openclaw/plugin-sdk @ remind.ts:1](https://github.com/tencent-connect/openclaw-qqbot/blob/3eee78922ed0b19af5c4c55f1dfe7d1c848e31f5/src/tools/remind.ts#L1)

- 🟡 P2 **yuanbao** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: yuanbao: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - openclaw/plugin-sdk @ plugins/yuanbao/.crabpot-package/dist/index.js:1

## Inspector Proof Gaps

- 🟠 P1 **a2a-gateway** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: a2a-gateway: runtime registrations need capture before contract judgment
  - state: open · compat:none
  - evidence:
    - [registerGatewayMethod @ index.ts:616](https://github.com/win4r/openclaw-a2a-gateway/blob/a335e59e926f7e1a8913e6cd7b1cbf2d44c33cb7/index.ts#L616)
    - [registerGatewayMethod @ index.ts:622](https://github.com/win4r/openclaw-a2a-gateway/blob/a335e59e926f7e1a8913e6cd7b1cbf2d44c33cb7/index.ts#L622)
    - [registerGatewayMethod @ index.ts:631](https://github.com/win4r/openclaw-a2a-gateway/blob/a335e59e926f7e1a8913e6cd7b1cbf2d44c33cb7/index.ts#L631)
    - [registerGatewayMethod @ index.ts:657](https://github.com/win4r/openclaw-a2a-gateway/blob/a335e59e926f7e1a8913e6cd7b1cbf2d44c33cb7/index.ts#L657)
    - [registerGatewayMethod @ index.ts:669](https://github.com/win4r/openclaw-a2a-gateway/blob/a335e59e926f7e1a8913e6cd7b1cbf2d44c33cb7/index.ts#L669)
    - [registerService @ index.ts:857](https://github.com/win4r/openclaw-a2a-gateway/blob/a335e59e926f7e1a8913e6cd7b1cbf2d44c33cb7/index.ts#L857)

- 🟠 P1 **clawmetry** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: clawmetry: runtime registrations need capture before contract judgment
  - state: open · compat:none
  - evidence:
    - [registerService @ index.ts:9](https://github.com/vivekchand/clawmetry/blob/b329bb3ed18b651d369bf35321ec58bd47dc33b4/clawhub-plugin/index.ts#L9)

- 🟠 P1 **codex-app-server** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: codex-app-server: runtime registrations need capture before contract judgment
  - state: open · compat:none
  - evidence:
    - [registerCommand @ index.ts:48](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/index.ts#L48)
    - [registerInteractiveHandler @ index.ts:29](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/index.ts#L29)
    - [registerInteractiveHandler @ index.ts:38](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/index.ts#L38)
    - [registerService @ index.ts:12](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/index.ts#L12)

- 🟠 P1 **connectclaw** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: connectclaw: runtime registrations need capture before contract judgment
  - state: open · compat:none
  - evidence:
    - [registerCommand @ commands.ts:18](https://github.com/osipov-anton/connectclaw/blob/6cd516650168890e9b850064afaaa5fe24df5950/packages/plugin/src/commands.ts#L18)
    - [registerCommand @ commands.ts:64](https://github.com/osipov-anton/connectclaw/blob/6cd516650168890e9b850064afaaa5fe24df5950/packages/plugin/src/commands.ts#L64)
    - [registerService @ hooks.ts:91](https://github.com/osipov-anton/connectclaw/blob/6cd516650168890e9b850064afaaa5fe24df5950/packages/plugin/src/hooks.ts#L91)

- 🟠 P1 **honcho** `inspector-gap` `inspector-follow-up`
  - **conversation-access-hook**: honcho: conversation-access hooks need privacy-boundary probes
  - state: open · compat:none
  - evidence:
    - [agent_end @ capture.ts:89](https://github.com/plastic-labs/openclaw-honcho/blob/f1ac095b5d633d463d57c5cc9735547a73ff9199/hooks/capture.ts#L89)
    - [agent_end @ subagent.ts:34](https://github.com/plastic-labs/openclaw-honcho/blob/f1ac095b5d633d463d57c5cc9735547a73ff9199/hooks/subagent.ts#L34)

- 🟠 P1 **honcho** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: honcho: runtime registrations need capture before contract judgment
  - state: open · compat:none
  - evidence:
    - [registerMemoryPromptSection @ index.ts:97](https://github.com/plastic-labs/openclaw-honcho/blob/f1ac095b5d633d463d57c5cc9735547a73ff9199/index.ts#L97)
    - [registerMemoryRuntime @ runtime.ts:276](https://github.com/plastic-labs/openclaw-honcho/blob/f1ac095b5d633d463d57c5cc9735547a73ff9199/runtime.ts#L276)

- 🟠 P1 **hyperspell** `inspector-gap` `inspector-follow-up`
  - **conversation-access-hook**: hyperspell: conversation-access hooks need privacy-boundary probes
  - state: open · compat:none
  - evidence:
    - [agent_end @ index.ts:105](https://github.com/hyperspell/hyperspell-openclaw/blob/a04d35176c4ffbe99d906f7d8075fc8671e7968d/index.ts#L105)
    - [agent_end @ index.ts:116](https://github.com/hyperspell/hyperspell-openclaw/blob/a04d35176c4ffbe99d906f7d8075fc8671e7968d/index.ts#L116)

- 🟠 P1 **hyperspell** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: hyperspell: runtime registrations need capture before contract judgment
  - state: open · compat:none
  - evidence:
    - [registerCommand @ slash.ts:166](https://github.com/hyperspell/hyperspell-openclaw/blob/a04d35176c4ffbe99d906f7d8075fc8671e7968d/commands/slash.ts#L166)
    - [registerCommand @ slash.ts:43](https://github.com/hyperspell/hyperspell-openclaw/blob/a04d35176c4ffbe99d906f7d8075fc8671e7968d/commands/slash.ts#L43)
    - [registerCommand @ slash.ts:98](https://github.com/hyperspell/hyperspell-openclaw/blob/a04d35176c4ffbe99d906f7d8075fc8671e7968d/commands/slash.ts#L98)
    - [registerCommand @ index.ts:46](https://github.com/hyperspell/hyperspell-openclaw/blob/a04d35176c4ffbe99d906f7d8075fc8671e7968d/index.ts#L46)
    - [registerCommand @ index.ts:57](https://github.com/hyperspell/hyperspell-openclaw/blob/a04d35176c4ffbe99d906f7d8075fc8671e7968d/index.ts#L57)
    - [registerCommand @ index.ts:68](https://github.com/hyperspell/hyperspell-openclaw/blob/a04d35176c4ffbe99d906f7d8075fc8671e7968d/index.ts#L68)
    - [registerService @ index.ts:134](https://github.com/hyperspell/hyperspell-openclaw/blob/a04d35176c4ffbe99d906f7d8075fc8671e7968d/index.ts#L134)

- 🟠 P1 **lightclawbot** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: lightclawbot: runtime registrations need capture before contract judgment
  - state: open · compat:none
  - evidence:
    - registerChannel @ plugins/lightclawbot/.crabpot-package/dist/index.js:13

- 🟠 P1 **llm-trace-phoenix** `inspector-gap` `inspector-follow-up`
  - **conversation-access-hook**: llm-trace-phoenix: conversation-access hooks need privacy-boundary probes
  - state: open · compat:none
  - evidence:
    - [llm_input @ index.ts:154](https://github.com/pingshian0131/openclaw-plugin-llm-trace-phoenix/blob/05bc0f4ba67281c10fad7be356d32a54b00c59fd/index.ts#L154)
    - [llm_output @ index.ts:168](https://github.com/pingshian0131/openclaw-plugin-llm-trace-phoenix/blob/05bc0f4ba67281c10fad7be356d32a54b00c59fd/index.ts#L168)

- 🟠 P1 **lossless-claw** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: lossless-claw: runtime registrations need capture before contract judgment
  - state: open · compat:none
  - evidence:
    - [registerCommand @ index.ts:2009](https://github.com/Martian-Engineering/lossless-claw/blob/8d634cdf4b7544c9093c2e701fbbe5075d1e3de6/src/plugin/index.ts#L2009)
    - [registerContextEngine @ index.ts:1989](https://github.com/Martian-Engineering/lossless-claw/blob/8d634cdf4b7544c9093c2e701fbbe5075d1e3de6/src/plugin/index.ts#L1989)

- 🟠 P1 **mcp-adapter** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: mcp-adapter: runtime registrations need capture before contract judgment
  - state: open · compat:none
  - evidence:
    - [registerService @ index.ts:15](https://github.com/androidStern-personal/openclaw-mcp-adapter/blob/5434ce21ac780a46a493c8125e52e80a03dd2640/index.ts#L15)

- 🟠 P1 **memory-tencentdb** `inspector-gap` `inspector-follow-up`
  - **conversation-access-hook**: memory-tencentdb: conversation-access hooks need privacy-boundary probes
  - state: open · compat:none
  - evidence:
    - agent_end @ plugins/memory-tencentdb/.crabpot-package/index.ts:820

- 🟠 P1 **memos-cloud** `inspector-gap` `inspector-follow-up`
  - **conversation-access-hook**: memos-cloud: conversation-access hooks need privacy-boundary probes
  - state: open · compat:none
  - evidence:
    - [agent_end @ index.js:515](https://github.com/MemTensor/MemOS-Cloud-OpenClaw-Plugin/blob/03fcc33c5fd285971d4b3dbaa8bbb31cb727db7c/index.js#L515)

- 🟠 P1 **memos-cloud** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: memos-cloud: runtime registrations need capture before contract judgment
  - state: open · compat:none
  - evidence:
    - [registerHook @ index.js:467](https://github.com/MemTensor/MemOS-Cloud-OpenClaw-Plugin/blob/03fcc33c5fd285971d4b3dbaa8bbb31cb727db7c/index.js#L467)

- 🟠 P1 **mocrane-wecom** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: mocrane-wecom: runtime registrations need capture before contract judgment
  - state: open · compat:none
  - evidence:
    - [registerChannel @ index.ts:31](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/index.ts#L31)
    - [registerHttpRoute @ index.ts:34](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/index.ts#L34)

- 🟠 P1 **openclaw-weixin** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: openclaw-weixin: runtime registrations need capture before contract judgment
  - state: open · compat:none
  - evidence:
    - registerChannel @ plugins/openclaw-weixin/.crabpot-package/index.ts:22

- 🟠 P1 **opik-openclaw** `inspector-gap` `inspector-follow-up`
  - **before-tool-call-probe**: opik-openclaw: before_tool_call needs terminal/block/approval probes
  - state: open · compat:none
  - evidence:
    - [before_tool_call @ tool.ts:34](https://github.com/comet-ml/opik-openclaw/blob/f8987269d3f2121f52ace4f60c80629266c0dfd7/src/service/hooks/tool.ts#L34)

- 🟠 P1 **opik-openclaw** `inspector-gap` `inspector-follow-up`
  - **conversation-access-hook**: opik-openclaw: conversation-access hooks need privacy-boundary probes
  - state: open · compat:none
  - evidence:
    - [agent_end @ service.ts:560](https://github.com/comet-ml/opik-openclaw/blob/f8987269d3f2121f52ace4f60c80629266c0dfd7/src/service.ts#L560)
    - [llm_input @ llm.ts:39](https://github.com/comet-ml/opik-openclaw/blob/f8987269d3f2121f52ace4f60c80629266c0dfd7/src/service/hooks/llm.ts#L39)
    - [llm_output @ llm.ts:150](https://github.com/comet-ml/opik-openclaw/blob/f8987269d3f2121f52ace4f60c80629266c0dfd7/src/service/hooks/llm.ts#L150)

- 🟠 P1 **opik-openclaw** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: opik-openclaw: runtime registrations need capture before contract judgment
  - state: open · compat:none
  - evidence:
    - [registerService @ index.ts:16](https://github.com/comet-ml/opik-openclaw/blob/f8987269d3f2121f52ace4f60c80629266c0dfd7/index.ts#L16)

- 🟠 P1 **qqbot** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: qqbot: runtime registrations need capture before contract judgment
  - state: open · compat:none
  - evidence:
    - [registerChannel @ index.ts:16](https://github.com/tencent-connect/openclaw-qqbot/blob/3eee78922ed0b19af5c4c55f1dfe7d1c848e31f5/index.ts#L16)

- 🟠 P1 **secureclaw** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: secureclaw: runtime registrations need capture before contract judgment
  - state: open · compat:none
  - evidence:
    - [registerService @ index.ts:295](https://github.com/adversa-ai/secureclaw/blob/bf17e2b3deb989e348b3a98080e33a7047e90ac3/secureclaw/src/index.ts#L295)
    - [registerService @ index.ts:301](https://github.com/adversa-ai/secureclaw/blob/bf17e2b3deb989e348b3a98080e33a7047e90ac3/secureclaw/src/index.ts#L301)
    - [registerService @ index.ts:307](https://github.com/adversa-ai/secureclaw/blob/bf17e2b3deb989e348b3a98080e33a7047e90ac3/secureclaw/src/index.ts#L307)

- 🟠 P1 **wecom** `inspector-gap` `inspector-follow-up`
  - **before-tool-call-probe**: wecom: before_tool_call needs terminal/block/approval probes
  - state: open · compat:none
  - evidence:
    - [before_tool_call @ index.js:65](https://github.com/sunnoy/openclaw-plugin-wecom/blob/b7849ac055c8fa699d01b48e83cf24028907307d/index.js#L65)

- 🟠 P1 **wecom** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: wecom: runtime registrations need capture before contract judgment
  - state: open · compat:none
  - evidence:
    - [registerChannel @ index.js:27](https://github.com/sunnoy/openclaw-plugin-wecom/blob/b7849ac055c8fa699d01b48e83cf24028907307d/index.js#L27)
    - [registerHttpRoute @ index.js:45](https://github.com/sunnoy/openclaw-plugin-wecom/blob/b7849ac055c8fa699d01b48e83cf24028907307d/index.js#L45)

- 🟠 P1 **yuanbao** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: yuanbao: runtime registrations need capture before contract judgment
  - state: open · compat:none
  - evidence:
    - registerChannel @ plugins/yuanbao/.crabpot-package/dist/index.js:29
    - registerCommand @ plugins/yuanbao/.crabpot-package/dist/index.js:31
    - registerCommand @ plugins/yuanbao/.crabpot-package/dist/index.js:32
    - registerCommand @ plugins/yuanbao/.crabpot-package/dist/index.js:34

- 🟡 P2 **a2a-gateway** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: a2a-gateway: cold import requires isolated dependency installation
  - state: open · compat:none
  - evidence:
    - [@a2a-js/sdk @ package.json](https://github.com/win4r/openclaw-a2a-gateway/blob/a335e59e926f7e1a8913e6cd7b1cbf2d44c33cb7/package.json)
    - [@bufbuild/protobuf @ package.json](https://github.com/win4r/openclaw-a2a-gateway/blob/a335e59e926f7e1a8913e6cd7b1cbf2d44c33cb7/package.json)
    - [@grpc/grpc-js @ package.json](https://github.com/win4r/openclaw-a2a-gateway/blob/a335e59e926f7e1a8913e6cd7b1cbf2d44c33cb7/package.json)
    - [express @ package.json](https://github.com/win4r/openclaw-a2a-gateway/blob/a335e59e926f7e1a8913e6cd7b1cbf2d44c33cb7/package.json)
    - [multicast-dns @ package.json](https://github.com/win4r/openclaw-a2a-gateway/blob/a335e59e926f7e1a8913e6cd7b1cbf2d44c33cb7/package.json)
    - [uuid @ package.json](https://github.com/win4r/openclaw-a2a-gateway/blob/a335e59e926f7e1a8913e6cd7b1cbf2d44c33cb7/package.json)
    - [ws @ package.json](https://github.com/win4r/openclaw-a2a-gateway/blob/a335e59e926f7e1a8913e6cd7b1cbf2d44c33cb7/package.json)

- 🟡 P2 **a2a-gateway** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: a2a-gateway: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/win4r/openclaw-a2a-gateway/blob/a335e59e926f7e1a8913e6cd7b1cbf2d44c33cb7/index.ts)

- 🟡 P2 **a2a-gateway** `inspector-gap` `inspector-follow-up`
  - **runtime-tool-capture**: a2a-gateway: runtime tool schema needs registration capture
  - state: open · compat:none
  - evidence:
    - [registerTool @ index.ts:777](https://github.com/win4r/openclaw-a2a-gateway/blob/a335e59e926f7e1a8913e6cd7b1cbf2d44c33cb7/index.ts#L777)

- 🟡 P2 **agentchat** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: agentchat: channel runtime needs envelope/config probes
  - state: open · compat:none
  - evidence:
    - [defineChannelPluginEntry @ channel.ts:333](https://github.com/agentchatme/agentchat/blob/1460cece00ebd3829fb39d5db5ee23050937ed02/integrations/openclaw-channel/src/channel.ts#L333)

- 🟡 P2 **agentchat** `inspector-gap` `inspector-follow-up`
  - **package-build-artifact-entrypoint**: agentchat: cold import requires package build output
  - state: open · compat:none
  - evidence:
    - [extension:./dist/index.js @ index.js](https://github.com/agentchatme/agentchat/blob/1460cece00ebd3829fb39d5db5ee23050937ed02/integrations/openclaw-channel/dist/index.js)
    - [setupEntry:./dist/setup-entry.js @ setup-entry.js](https://github.com/agentchatme/agentchat/blob/1460cece00ebd3829fb39d5db5ee23050937ed02/integrations/openclaw-channel/dist/setup-entry.js)

- 🟡 P2 **agentchat** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: agentchat: cold import requires isolated dependency installation
  - state: open · compat:none
  - evidence:
    - [@agentchatme/agentchat @ package.json](https://github.com/agentchatme/agentchat/blob/1460cece00ebd3829fb39d5db5ee23050937ed02/integrations/openclaw-channel/package.json)
    - [@sinclair/typebox @ package.json](https://github.com/agentchatme/agentchat/blob/1460cece00ebd3829fb39d5db5ee23050937ed02/integrations/openclaw-channel/package.json)
    - [pino @ package.json](https://github.com/agentchatme/agentchat/blob/1460cece00ebd3829fb39d5db5ee23050937ed02/integrations/openclaw-channel/package.json)
    - [ws @ package.json](https://github.com/agentchatme/agentchat/blob/1460cece00ebd3829fb39d5db5ee23050937ed02/integrations/openclaw-channel/package.json)
    - [zod @ package.json](https://github.com/agentchatme/agentchat/blob/1460cece00ebd3829fb39d5db5ee23050937ed02/integrations/openclaw-channel/package.json)
    - [openclaw @ package.json](https://github.com/agentchatme/agentchat/blob/1460cece00ebd3829fb39d5db5ee23050937ed02/integrations/openclaw-channel/package.json)

- 🟡 P2 **apify** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: apify: cold import requires isolated dependency installation
  - state: open · compat:none
  - evidence:
    - [@sinclair/typebox @ package.json](https://github.com/apify/apify-openclaw-plugin/blob/41f49794d230f7ad092d1c699ee4d91fecf6ba91/package.json)
    - [apify-client @ package.json](https://github.com/apify/apify-openclaw-plugin/blob/41f49794d230f7ad092d1c699ee4d91fecf6ba91/package.json)
    - [openclaw @ package.json](https://github.com/apify/apify-openclaw-plugin/blob/41f49794d230f7ad092d1c699ee4d91fecf6ba91/package.json)

- 🟡 P2 **apify** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: apify: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/apify/apify-openclaw-plugin/blob/41f49794d230f7ad092d1c699ee4d91fecf6ba91/src/index.ts)

- 🟡 P2 **apify** `inspector-gap` `inspector-follow-up`
  - **runtime-tool-capture**: apify: runtime tool schema needs registration capture
  - state: open · compat:none
  - evidence:
    - [registerTool @ index.ts:13](https://github.com/apify/apify-openclaw-plugin/blob/41f49794d230f7ad092d1c699ee4d91fecf6ba91/src/index.ts#L13)

- 🟡 P2 **clawmetry** `inspector-gap` `inspector-follow-up`
  - **package-build-artifact-entrypoint**: clawmetry: cold import requires package build output
  - state: open · compat:none
  - evidence:
    - [runtimeExtension:./dist/index.js @ index.js](https://github.com/vivekchand/clawmetry/blob/b329bb3ed18b651d369bf35321ec58bd47dc33b4/clawhub-plugin/dist/index.js)

- 🟡 P2 **clawmetry** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: clawmetry: cold import requires isolated dependency installation
  - state: open · compat:none
  - evidence:
    - [node-fetch @ package.json](https://github.com/vivekchand/clawmetry/blob/b329bb3ed18b651d369bf35321ec58bd47dc33b4/clawhub-plugin/package.json)

- 🟡 P2 **clawmetry** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: clawmetry: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/vivekchand/clawmetry/blob/b329bb3ed18b651d369bf35321ec58bd47dc33b4/clawhub-plugin/index.ts)

- 🟡 P2 **codex-app-server** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: codex-app-server: cold import requires isolated dependency installation
  - state: open · compat:none
  - evidence:
    - [ws @ package.json](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/package.json)
    - [openclaw @ package.json](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/package.json)

- 🟡 P2 **codex-app-server** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: codex-app-server: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/index.ts)

- 🟡 P2 **composio** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: composio: cold import requires isolated dependency installation
  - state: open · compat:none
  - evidence:
    - [@modelcontextprotocol/sdk @ package.json](https://github.com/ComposioHQ/openclaw-composio-plugin/blob/992d9576ba1b301e37dc900f3177a608936b8fbb/package.json)
    - [zod @ package.json](https://github.com/ComposioHQ/openclaw-composio-plugin/blob/992d9576ba1b301e37dc900f3177a608936b8fbb/package.json)

- 🟡 P2 **composio** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: composio: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/ComposioHQ/openclaw-composio-plugin/blob/992d9576ba1b301e37dc900f3177a608936b8fbb/index.ts)

- 🟡 P2 **composio** `inspector-gap` `inspector-follow-up`
  - **runtime-tool-capture**: composio: runtime tool schema needs registration capture
  - state: open · compat:none
  - evidence:
    - [registerTool @ tools.ts:89](https://github.com/ComposioHQ/openclaw-composio-plugin/blob/992d9576ba1b301e37dc900f3177a608936b8fbb/src/tools.ts#L89)

- 🟡 P2 **connectclaw** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: connectclaw: cold import requires isolated dependency installation
  - state: open · compat:none
  - evidence:
    - [openclaw @ package.json](https://github.com/osipov-anton/connectclaw/blob/6cd516650168890e9b850064afaaa5fe24df5950/packages/plugin/package.json)

- 🟡 P2 **connectclaw** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: connectclaw: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/osipov-anton/connectclaw/blob/6cd516650168890e9b850064afaaa5fe24df5950/packages/plugin/index.ts)

- 🟡 P2 **connectclaw** `inspector-gap` `inspector-follow-up`
  - **runtime-tool-capture**: connectclaw: runtime tool schema needs registration capture
  - state: open · compat:none
  - evidence:
    - [registerTool @ tools.ts:6](https://github.com/osipov-anton/connectclaw/blob/6cd516650168890e9b850064afaaa5fe24df5950/packages/plugin/src/tools.ts#L6)

- 🟡 P2 **ddingtalk** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: ddingtalk: channel runtime needs envelope/config probes
  - state: open · compat:none
  - evidence:
    - [defineChannelPluginEntry @ index.ts:8](https://github.com/largezhou/openclaw-dingtalk/blob/74d22da7335f261ec5febe2663bed6b81068b7ec/index.ts#L8)

- 🟡 P2 **ddingtalk** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: ddingtalk: cold import requires isolated dependency installation
  - state: open · compat:none
  - evidence:
    - [dingtalk-stream @ package.json](https://github.com/largezhou/openclaw-dingtalk/blob/74d22da7335f261ec5febe2663bed6b81068b7ec/package.json)
    - [zod @ package.json](https://github.com/largezhou/openclaw-dingtalk/blob/74d22da7335f261ec5febe2663bed6b81068b7ec/package.json)
    - [openclaw @ package.json](https://github.com/largezhou/openclaw-dingtalk/blob/74d22da7335f261ec5febe2663bed6b81068b7ec/package.json)

- 🟡 P2 **ddingtalk** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: ddingtalk: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/largezhou/openclaw-dingtalk/blob/74d22da7335f261ec5febe2663bed6b81068b7ec/index.ts)

- 🟡 P2 **hasdata** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: hasdata: cold import requires isolated dependency installation
  - state: open · compat:none
  - evidence:
    - [@sinclair/typebox @ package.json](https://github.com/HasData/hasdata-openclaw-plugin/blob/bed32d8a0359392b7c4628f12b909b6e204c8426/package.json)
    - [openclaw @ package.json](https://github.com/HasData/hasdata-openclaw-plugin/blob/bed32d8a0359392b7c4628f12b909b6e204c8426/package.json)

- 🟡 P2 **hasdata** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: hasdata: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/HasData/hasdata-openclaw-plugin/blob/bed32d8a0359392b7c4628f12b909b6e204c8426/src/index.ts)

- 🟡 P2 **honcho** `inspector-gap` `inspector-follow-up`
  - **package-build-artifact-entrypoint**: honcho: cold import requires package build output
  - state: open · compat:none
  - evidence:
    - [extension:./dist/index.js @ index.js](https://github.com/plastic-labs/openclaw-honcho/blob/f1ac095b5d633d463d57c5cc9735547a73ff9199/dist/index.js)

- 🟡 P2 **honcho** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: honcho: cold import requires isolated dependency installation
  - state: open · compat:none
  - evidence:
    - [@honcho-ai/sdk @ package.json](https://github.com/plastic-labs/openclaw-honcho/blob/f1ac095b5d633d463d57c5cc9735547a73ff9199/package.json)
    - [@sinclair/typebox @ package.json](https://github.com/plastic-labs/openclaw-honcho/blob/f1ac095b5d633d463d57c5cc9735547a73ff9199/package.json)
    - [openclaw @ package.json](https://github.com/plastic-labs/openclaw-honcho/blob/f1ac095b5d633d463d57c5cc9735547a73ff9199/package.json)

- 🟡 P2 **honcho** `inspector-gap` `inspector-follow-up`
  - **runtime-tool-capture**: honcho: runtime tool schema needs registration capture
  - state: open · compat:none
  - evidence:
    - [registerTool @ ask.ts:7](https://github.com/plastic-labs/openclaw-honcho/blob/f1ac095b5d633d463d57c5cc9735547a73ff9199/tools/ask.ts#L7)
    - [registerTool @ context.ts:7](https://github.com/plastic-labs/openclaw-honcho/blob/f1ac095b5d633d463d57c5cc9735547a73ff9199/tools/context.ts#L7)
    - [registerTool @ memory-passthrough.ts:130](https://github.com/plastic-labs/openclaw-honcho/blob/f1ac095b5d633d463d57c5cc9735547a73ff9199/tools/memory-passthrough.ts#L130)
    - [registerTool @ memory-passthrough.ts:89](https://github.com/plastic-labs/openclaw-honcho/blob/f1ac095b5d633d463d57c5cc9735547a73ff9199/tools/memory-passthrough.ts#L89)
    - [registerTool @ message-search.ts:8](https://github.com/plastic-labs/openclaw-honcho/blob/f1ac095b5d633d463d57c5cc9735547a73ff9199/tools/message-search.ts#L8)
    - [registerTool @ search.ts:7](https://github.com/plastic-labs/openclaw-honcho/blob/f1ac095b5d633d463d57c5cc9735547a73ff9199/tools/search.ts#L7)
    - [registerTool @ session.ts:8](https://github.com/plastic-labs/openclaw-honcho/blob/f1ac095b5d633d463d57c5cc9735547a73ff9199/tools/session.ts#L8)

- 🟡 P2 **hyperspell** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: hyperspell: cold import requires isolated dependency installation
  - state: open · compat:none
  - evidence:
    - [@clack/prompts @ package.json](https://github.com/hyperspell/hyperspell-openclaw/blob/a04d35176c4ffbe99d906f7d8075fc8671e7968d/package.json)
    - [@sinclair/typebox @ package.json](https://github.com/hyperspell/hyperspell-openclaw/blob/a04d35176c4ffbe99d906f7d8075fc8671e7968d/package.json)
    - [hyperspell @ package.json](https://github.com/hyperspell/hyperspell-openclaw/blob/a04d35176c4ffbe99d906f7d8075fc8671e7968d/package.json)
    - [openclaw @ package.json](https://github.com/hyperspell/hyperspell-openclaw/blob/a04d35176c4ffbe99d906f7d8075fc8671e7968d/package.json)

- 🟡 P2 **hyperspell** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: hyperspell: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/hyperspell/hyperspell-openclaw/blob/a04d35176c4ffbe99d906f7d8075fc8671e7968d/index.ts)

- 🟡 P2 **hyperspell** `inspector-gap` `inspector-follow-up`
  - **runtime-tool-capture**: hyperspell: runtime tool schema needs registration capture
  - state: open · compat:none
  - evidence:
    - [registerTool @ tools.ts:21](https://github.com/hyperspell/hyperspell-openclaw/blob/a04d35176c4ffbe99d906f7d8075fc8671e7968d/graph/tools.ts#L21)
    - [registerTool @ tools.ts:52](https://github.com/hyperspell/hyperspell-openclaw/blob/a04d35176c4ffbe99d906f7d8075fc8671e7968d/graph/tools.ts#L52)
    - [registerTool @ tools.ts:95](https://github.com/hyperspell/hyperspell-openclaw/blob/a04d35176c4ffbe99d906f7d8075fc8671e7968d/graph/tools.ts#L95)
    - [registerTool @ index.ts:89](https://github.com/hyperspell/hyperspell-openclaw/blob/a04d35176c4ffbe99d906f7d8075fc8671e7968d/index.ts#L89)
    - [registerTool @ index.ts:92](https://github.com/hyperspell/hyperspell-openclaw/blob/a04d35176c4ffbe99d906f7d8075fc8671e7968d/index.ts#L92)

- 🟡 P2 **inworld-tts** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: inworld-tts: cold import requires isolated dependency installation
  - state: open · compat:none
  - evidence:
    - [openclaw @ package.json](https://github.com/livingghost/openclaw-inworld-tts/blob/d2abaeea330ebef7530f43f8b395671f6f404aea/package.json)

- 🟡 P2 **inworld-tts** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: inworld-tts: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/livingghost/openclaw-inworld-tts/blob/d2abaeea330ebef7530f43f8b395671f6f404aea/index.ts)

- 🟡 P2 **lightclawbot** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: lightclawbot: channel runtime needs envelope/config probes
  - state: open · compat:none
  - evidence:
    - registerChannel @ plugins/lightclawbot/.crabpot-package/dist/index.js:13

- 🟡 P2 **lightclawbot** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: lightclawbot: cold import requires isolated dependency installation
  - state: open · compat:none
  - evidence:
    - socket.io-client @ plugins/lightclawbot/.crabpot-package/package.json
    - openclaw @ plugins/lightclawbot/.crabpot-package/package.json

- 🟡 P2 **lightclawbot** `inspector-gap` `inspector-follow-up`
  - **runtime-tool-capture**: lightclawbot: runtime tool schema needs registration capture
  - state: open · compat:none
  - evidence:
    - registerTool @ plugins/lightclawbot/.crabpot-package/dist/src/download-tool.js:49
    - registerTool @ plugins/lightclawbot/.crabpot-package/dist/src/upload-tool.js:37

- 🟡 P2 **llm-trace-phoenix** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: llm-trace-phoenix: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/pingshian0131/openclaw-plugin-llm-trace-phoenix/blob/05bc0f4ba67281c10fad7be356d32a54b00c59fd/index.ts)

- 🟡 P2 **lossless-claw** `inspector-gap` `inspector-follow-up`
  - **package-build-artifact-entrypoint**: lossless-claw: cold import requires package build output
  - state: open · compat:none
  - evidence:
    - [extension:./dist/index.js @ index.js](https://github.com/Martian-Engineering/lossless-claw/blob/8d634cdf4b7544c9093c2e701fbbe5075d1e3de6/dist/index.js)

- 🟡 P2 **lossless-claw** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: lossless-claw: cold import requires isolated dependency installation
  - state: open · compat:none
  - evidence:
    - [@mariozechner/pi-agent-core @ package.json](https://github.com/Martian-Engineering/lossless-claw/blob/8d634cdf4b7544c9093c2e701fbbe5075d1e3de6/package.json)
    - [@mariozechner/pi-ai @ package.json](https://github.com/Martian-Engineering/lossless-claw/blob/8d634cdf4b7544c9093c2e701fbbe5075d1e3de6/package.json)
    - [@mariozechner/pi-coding-agent @ package.json](https://github.com/Martian-Engineering/lossless-claw/blob/8d634cdf4b7544c9093c2e701fbbe5075d1e3de6/package.json)
    - [@sinclair/typebox @ package.json](https://github.com/Martian-Engineering/lossless-claw/blob/8d634cdf4b7544c9093c2e701fbbe5075d1e3de6/package.json)
    - [openclaw @ package.json](https://github.com/Martian-Engineering/lossless-claw/blob/8d634cdf4b7544c9093c2e701fbbe5075d1e3de6/package.json)

- 🟡 P2 **lossless-claw** `inspector-gap` `inspector-follow-up`
  - **runtime-tool-capture**: lossless-claw: runtime tool schema needs registration capture
  - state: open · compat:none
  - evidence:
    - [registerTool @ index.ts:1991](https://github.com/Martian-Engineering/lossless-claw/blob/8d634cdf4b7544c9093c2e701fbbe5075d1e3de6/src/plugin/index.ts#L1991)
    - [registerTool @ index.ts:1994](https://github.com/Martian-Engineering/lossless-claw/blob/8d634cdf4b7544c9093c2e701fbbe5075d1e3de6/src/plugin/index.ts#L1994)
    - [registerTool @ index.ts:1997](https://github.com/Martian-Engineering/lossless-claw/blob/8d634cdf4b7544c9093c2e701fbbe5075d1e3de6/src/plugin/index.ts#L1997)
    - [registerTool @ index.ts:2000](https://github.com/Martian-Engineering/lossless-claw/blob/8d634cdf4b7544c9093c2e701fbbe5075d1e3de6/src/plugin/index.ts#L2000)

- 🟡 P2 **mcp-adapter** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: mcp-adapter: cold import requires isolated dependency installation
  - state: open · compat:none
  - evidence:
    - [@modelcontextprotocol/sdk @ package.json](https://github.com/androidStern-personal/openclaw-mcp-adapter/blob/5434ce21ac780a46a493c8125e52e80a03dd2640/package.json)

- 🟡 P2 **mcp-adapter** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: mcp-adapter: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/androidStern-personal/openclaw-mcp-adapter/blob/5434ce21ac780a46a493c8125e52e80a03dd2640/index.ts)

- 🟡 P2 **mcp-adapter** `inspector-gap` `inspector-follow-up`
  - **runtime-tool-capture**: mcp-adapter: runtime tool schema needs registration capture
  - state: open · compat:none
  - evidence:
    - [registerTool @ index.ts:30](https://github.com/androidStern-personal/openclaw-mcp-adapter/blob/5434ce21ac780a46a493c8125e52e80a03dd2640/index.ts#L30)

- 🟡 P2 **memory-tencentdb** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: memory-tencentdb: cold import requires isolated dependency installation
  - state: open · compat:none
  - evidence:
    - @node-rs/jieba @ plugins/memory-tencentdb/.crabpot-package/package.json
    - @tencentdb-agent-memory/tcvdb-text @ plugins/memory-tencentdb/.crabpot-package/package.json
    - json5 @ plugins/memory-tencentdb/.crabpot-package/package.json
    - sqlite-vec @ plugins/memory-tencentdb/.crabpot-package/package.json
    - undici @ plugins/memory-tencentdb/.crabpot-package/package.json
    - node-llama-cpp @ plugins/memory-tencentdb/.crabpot-package/package.json
    - openclaw @ plugins/memory-tencentdb/.crabpot-package/package.json

- 🟡 P2 **memory-tencentdb** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: memory-tencentdb: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - extension:plugins/memory-tencentdb/.crabpot-package/index.ts

- 🟡 P2 **memory-tencentdb** `inspector-gap` `inspector-follow-up`
  - **runtime-tool-capture**: memory-tencentdb: runtime tool schema needs registration capture
  - state: open · compat:none
  - evidence:
    - registerTool @ plugins/memory-tencentdb/.crabpot-package/index.ts:268
    - registerTool @ plugins/memory-tencentdb/.crabpot-package/index.ts:365

- 🟡 P2 **memu-engine** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: memu-engine: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/duxiaoxiong/memu-engine-for-OpenClaw/blob/a5a22c5faf21e30d17a1b47635829e7dd0728ae5/index.ts)

- 🟡 P2 **memu-engine** `inspector-gap` `inspector-follow-up`
  - **runtime-tool-capture**: memu-engine: runtime tool schema needs registration capture
  - state: open · compat:none
  - evidence:
    - [registerTool @ index.ts:1252](https://github.com/duxiaoxiong/memu-engine-for-OpenClaw/blob/a5a22c5faf21e30d17a1b47635829e7dd0728ae5/index.ts#L1252)

- 🟡 P2 **mocrane-wecom** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: mocrane-wecom: channel runtime needs envelope/config probes
  - state: open · compat:none
  - evidence:
    - [registerChannel @ index.ts:31](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/index.ts#L31)

- 🟡 P2 **mocrane-wecom** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: mocrane-wecom: cold import requires isolated dependency installation
  - state: open · compat:none
  - evidence:
    - [@wecom/aibot-node-sdk @ package.json](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/package.json)
    - [fast-xml-parser @ package.json](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/package.json)
    - [file-type @ package.json](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/package.json)
    - [undici @ package.json](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/package.json)
    - [zod @ package.json](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/package.json)
    - [openclaw @ package.json](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/package.json)

- 🟡 P2 **mocrane-wecom** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: mocrane-wecom: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/index.ts)

- 🟡 P2 **mocrane-wecom** `inspector-gap` `inspector-follow-up`
  - **runtime-tool-capture**: mocrane-wecom: runtime tool schema needs registration capture
  - state: open · compat:none
  - evidence:
    - [registerTool @ index.ts:43](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/index.ts#L43)

- 🟡 P2 **openclaw-weixin** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: openclaw-weixin: channel runtime needs envelope/config probes
  - state: open · compat:none
  - evidence:
    - registerChannel @ plugins/openclaw-weixin/.crabpot-package/index.ts:22

- 🟡 P2 **openclaw-weixin** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: openclaw-weixin: cold import requires isolated dependency installation
  - state: open · compat:none
  - evidence:
    - qrcode-terminal @ plugins/openclaw-weixin/.crabpot-package/package.json
    - zod @ plugins/openclaw-weixin/.crabpot-package/package.json

- 🟡 P2 **openclaw-weixin** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: openclaw-weixin: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - extension:plugins/openclaw-weixin/.crabpot-package/index.ts

- 🟡 P2 **opik-openclaw** `inspector-gap` `inspector-follow-up`
  - **package-build-artifact-entrypoint**: opik-openclaw: cold import requires package build output
  - state: open · compat:none
  - evidence:
    - [runtimeExtension:./dist/index.js @ index.js](https://github.com/comet-ml/opik-openclaw/blob/f8987269d3f2121f52ace4f60c80629266c0dfd7/dist/index.js)

- 🟡 P2 **opik-openclaw** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: opik-openclaw: cold import requires isolated dependency installation
  - state: open · compat:none
  - evidence:
    - [@clack/prompts @ package.json](https://github.com/comet-ml/opik-openclaw/blob/f8987269d3f2121f52ace4f60c80629266c0dfd7/package.json)
    - [opik @ package.json](https://github.com/comet-ml/opik-openclaw/blob/f8987269d3f2121f52ace4f60c80629266c0dfd7/package.json)
    - [zod @ package.json](https://github.com/comet-ml/opik-openclaw/blob/f8987269d3f2121f52ace4f60c80629266c0dfd7/package.json)
    - [openclaw @ package.json](https://github.com/comet-ml/opik-openclaw/blob/f8987269d3f2121f52ace4f60c80629266c0dfd7/package.json)

- 🟡 P2 **opik-openclaw** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: opik-openclaw: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/comet-ml/opik-openclaw/blob/f8987269d3f2121f52ace4f60c80629266c0dfd7/index.ts)

- 🟡 P2 **qqbot** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: qqbot: channel runtime needs envelope/config probes
  - state: open · compat:none
  - evidence:
    - [registerChannel @ index.ts:16](https://github.com/tencent-connect/openclaw-qqbot/blob/3eee78922ed0b19af5c4c55f1dfe7d1c848e31f5/index.ts#L16)

- 🟡 P2 **qqbot** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: qqbot: cold import requires isolated dependency installation
  - state: open · compat:none
  - evidence:
    - [mpg123-decoder @ package.json](https://github.com/tencent-connect/openclaw-qqbot/blob/3eee78922ed0b19af5c4c55f1dfe7d1c848e31f5/package.json)
    - [silk-wasm @ package.json](https://github.com/tencent-connect/openclaw-qqbot/blob/3eee78922ed0b19af5c4c55f1dfe7d1c848e31f5/package.json)
    - [ws @ package.json](https://github.com/tencent-connect/openclaw-qqbot/blob/3eee78922ed0b19af5c4c55f1dfe7d1c848e31f5/package.json)
    - [openclaw @ package.json](https://github.com/tencent-connect/openclaw-qqbot/blob/3eee78922ed0b19af5c4c55f1dfe7d1c848e31f5/package.json)

- 🟡 P2 **qqbot** `inspector-gap` `inspector-follow-up`
  - **runtime-tool-capture**: qqbot: runtime tool schema needs registration capture
  - state: open · compat:none
  - evidence:
    - [registerTool @ channel.ts:138](https://github.com/tencent-connect/openclaw-qqbot/blob/3eee78922ed0b19af5c4c55f1dfe7d1c848e31f5/src/tools/channel.ts#L138)
    - [registerTool @ remind.ts:222](https://github.com/tencent-connect/openclaw-qqbot/blob/3eee78922ed0b19af5c4c55f1dfe7d1c848e31f5/src/tools/remind.ts#L222)

- 🟡 P2 **secureclaw** `inspector-gap` `inspector-follow-up`
  - **package-build-artifact-entrypoint**: secureclaw: cold import requires package build output
  - state: open · compat:none
  - evidence:
    - [extension:./dist/index.js @ index.js](https://github.com/adversa-ai/secureclaw/blob/bf17e2b3deb989e348b3a98080e33a7047e90ac3/secureclaw/dist/index.js)

- 🟡 P2 **secureclaw** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: secureclaw: cold import requires isolated dependency installation
  - state: open · compat:none
  - evidence:
    - [chokidar @ package.json](https://github.com/adversa-ai/secureclaw/blob/bf17e2b3deb989e348b3a98080e33a7047e90ac3/secureclaw/package.json)
    - [node-forge @ package.json](https://github.com/adversa-ai/secureclaw/blob/bf17e2b3deb989e348b3a98080e33a7047e90ac3/secureclaw/package.json)
    - [openclaw @ package.json](https://github.com/adversa-ai/secureclaw/blob/bf17e2b3deb989e348b3a98080e33a7047e90ac3/secureclaw/package.json)

- 🟡 P2 **web-search-plus** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: web-search-plus: cold import requires isolated dependency installation
  - state: open · compat:none
  - evidence:
    - [openclaw @ package.json](https://github.com/robbyczgw-cla/web-search-plus-plugin/blob/6e4c765cd04eb449c806748c3130793fe0b05e5e/package.json)

- 🟡 P2 **web-search-plus** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: web-search-plus: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/robbyczgw-cla/web-search-plus-plugin/blob/6e4c765cd04eb449c806748c3130793fe0b05e5e/index.ts)

- 🟡 P2 **web-search-plus** `inspector-gap` `inspector-follow-up`
  - **runtime-tool-capture**: web-search-plus: runtime tool schema needs registration capture
  - state: open · compat:none
  - evidence:
    - [registerTool @ index.ts:815](https://github.com/robbyczgw-cla/web-search-plus-plugin/blob/6e4c765cd04eb449c806748c3130793fe0b05e5e/index.ts#L815)
    - [registerTool @ index.ts:947](https://github.com/robbyczgw-cla/web-search-plus-plugin/blob/6e4c765cd04eb449c806748c3130793fe0b05e5e/index.ts#L947)

- 🟡 P2 **wecom** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: wecom: channel runtime needs envelope/config probes
  - state: open · compat:none
  - evidence:
    - [registerChannel @ index.js:27](https://github.com/sunnoy/openclaw-plugin-wecom/blob/b7849ac055c8fa699d01b48e83cf24028907307d/index.js#L27)

- 🟡 P2 **wecom** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: wecom: cold import requires isolated dependency installation
  - state: open · compat:none
  - evidence:
    - [@wecom/aibot-node-sdk @ package.json](https://github.com/sunnoy/openclaw-plugin-wecom/blob/b7849ac055c8fa699d01b48e83cf24028907307d/package.json)
    - [file-type @ package.json](https://github.com/sunnoy/openclaw-plugin-wecom/blob/b7849ac055c8fa699d01b48e83cf24028907307d/package.json)
    - [pinyin-pro @ package.json](https://github.com/sunnoy/openclaw-plugin-wecom/blob/b7849ac055c8fa699d01b48e83cf24028907307d/package.json)
    - [openclaw @ package.json](https://github.com/sunnoy/openclaw-plugin-wecom/blob/b7849ac055c8fa699d01b48e83cf24028907307d/package.json)
    - [undici @ package.json](https://github.com/sunnoy/openclaw-plugin-wecom/blob/b7849ac055c8fa699d01b48e83cf24028907307d/package.json)

- 🟡 P2 **wecom** `inspector-gap` `inspector-follow-up`
  - **runtime-tool-capture**: wecom: runtime tool schema needs registration capture
  - state: open · compat:none
  - evidence:
    - [registerTool @ index.js:28](https://github.com/sunnoy/openclaw-plugin-wecom/blob/b7849ac055c8fa699d01b48e83cf24028907307d/index.js#L28)
    - [registerTool @ index.js:29](https://github.com/sunnoy/openclaw-plugin-wecom/blob/b7849ac055c8fa699d01b48e83cf24028907307d/index.js#L29)
    - [registerTool @ index.js:33](https://github.com/sunnoy/openclaw-plugin-wecom/blob/b7849ac055c8fa699d01b48e83cf24028907307d/index.js#L33)

- 🟡 P2 **yuanbao** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: yuanbao: channel runtime needs envelope/config probes
  - state: open · compat:none
  - evidence:
    - registerChannel @ plugins/yuanbao/.crabpot-package/dist/index.js:29

- 🟡 P2 **yuanbao** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: yuanbao: cold import requires isolated dependency installation
  - state: open · compat:none
  - evidence:
    - cos-nodejs-sdk-v5 @ plugins/yuanbao/.crabpot-package/package.json
    - protobufjs @ plugins/yuanbao/.crabpot-package/package.json
    - uuid @ plugins/yuanbao/.crabpot-package/package.json
    - ws @ plugins/yuanbao/.crabpot-package/package.json
    - openclaw @ plugins/yuanbao/.crabpot-package/package.json

- 🟡 P2 **yuanbao** `inspector-gap` `inspector-follow-up`
  - **runtime-tool-capture**: yuanbao: runtime tool schema needs registration capture
  - state: open · compat:none
  - evidence:
    - registerTool @ plugins/yuanbao/.crabpot-package/dist/src/tools/group.js:43
    - registerTool @ plugins/yuanbao/.crabpot-package/dist/src/tools/member.js:120
    - registerTool @ plugins/yuanbao/.crabpot-package/dist/src/tools/remind.js:271

## Upstream Metadata Issues

- 🟡 P2 **a2a-gateway** `upstream-metadata` `plugin-upstream-fix`
  - **manifest-unknown-fields**: a2a-gateway: manifest uses unsupported top-level fields
  - state: open · compat:none
  - evidence:
    - [defaultConfig @ openclaw.plugin.json](https://github.com/win4r/openclaw-a2a-gateway/blob/a335e59e926f7e1a8913e6cd7b1cbf2d44c33cb7/openclaw.plugin.json)

- 🟡 P2 **a2a-gateway** `upstream-metadata` `plugin-upstream-fix`
  - **package-manifest-version-drift**: a2a-gateway: package and manifest versions drift
  - state: open · compat:none
  - evidence:
    - package:1.4.0
    - manifest:1.3.0

- 🟡 P2 **a2a-gateway** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: a2a-gateway: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - [package.json](https://github.com/win4r/openclaw-a2a-gateway/blob/a335e59e926f7e1a8913e6cd7b1cbf2d44c33cb7/package.json)

- 🟡 P2 **agentchat** `upstream-metadata` `plugin-upstream-fix`
  - **manifest-unknown-fields**: agentchat: manifest uses unsupported top-level fields
  - state: open · compat:none
  - evidence:
    - [displayName @ openclaw.plugin.json](https://github.com/agentchatme/agentchat/blob/1460cece00ebd3829fb39d5db5ee23050937ed02/integrations/openclaw-channel/openclaw.plugin.json)
    - [homepage @ openclaw.plugin.json](https://github.com/agentchatme/agentchat/blob/1460cece00ebd3829fb39d5db5ee23050937ed02/integrations/openclaw-channel/openclaw.plugin.json)
    - [icon @ openclaw.plugin.json](https://github.com/agentchatme/agentchat/blob/1460cece00ebd3829fb39d5db5ee23050937ed02/integrations/openclaw-channel/openclaw.plugin.json)

- 🟡 P2 **composio** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: composio: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - [package.json](https://github.com/ComposioHQ/openclaw-composio-plugin/blob/992d9576ba1b301e37dc900f3177a608936b8fbb/package.json)

- 🟡 P2 **connectclaw** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: connectclaw: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - [package.json](https://github.com/osipov-anton/connectclaw/blob/6cd516650168890e9b850064afaaa5fe24df5950/packages/plugin/package.json)

- 🟡 P2 **ddingtalk** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: ddingtalk: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - [package.json](https://github.com/largezhou/openclaw-dingtalk/blob/74d22da7335f261ec5febe2663bed6b81068b7ec/package.json)

- 🟡 P2 **lightclawbot** `upstream-metadata` `plugin-upstream-fix`
  - **manifest-unknown-fields**: lightclawbot: manifest uses unsupported top-level fields
  - state: open · compat:none
  - evidence:
    - capabilities @ plugins/lightclawbot/.crabpot-package/openclaw.plugin.json

- 🟡 P2 **lightclawbot** `upstream-metadata` `plugin-upstream-fix`
  - **package-manifest-version-drift**: lightclawbot: package and manifest versions drift
  - state: open · compat:none
  - evidence:
    - package:1.1.2
    - manifest:1.0.0

- 🟡 P2 **lightclawbot** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: lightclawbot: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - plugins/lightclawbot/.crabpot-package/package.json

- 🟡 P2 **lossless-claw** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: lossless-claw: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - [package.json](https://github.com/Martian-Engineering/lossless-claw/blob/8d634cdf4b7544c9093c2e701fbbe5075d1e3de6/package.json)

- 🟡 P2 **mcp-adapter** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: mcp-adapter: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - [package.json](https://github.com/androidStern-personal/openclaw-mcp-adapter/blob/5434ce21ac780a46a493c8125e52e80a03dd2640/package.json)

- 🟡 P2 **memos-cloud** `upstream-metadata` `plugin-upstream-fix`
  - **manifest-unknown-fields**: memos-cloud: manifest uses unsupported top-level fields
  - state: open · compat:none
  - evidence:
    - [main @ openclaw.plugin.json](https://github.com/MemTensor/MemOS-Cloud-OpenClaw-Plugin/blob/03fcc33c5fd285971d4b3dbaa8bbb31cb727db7c/openclaw.plugin.json)

- 🟡 P2 **memos-cloud** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: memos-cloud: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - [package.json](https://github.com/MemTensor/MemOS-Cloud-OpenClaw-Plugin/blob/03fcc33c5fd285971d4b3dbaa8bbb31cb727db7c/package.json)

- 🟡 P2 **memu-engine** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: memu-engine: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - [package.json](https://github.com/duxiaoxiong/memu-engine-for-OpenClaw/blob/a5a22c5faf21e30d17a1b47635829e7dd0728ae5/package.json)

- 🟡 P2 **mocrane-wecom** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: mocrane-wecom: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - [package.json](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/package.json)

- 🟡 P2 **openclaw-weixin** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: openclaw-weixin: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - plugins/openclaw-weixin/.crabpot-package/package.json

- 🟡 P2 **qqbot** `upstream-metadata` `plugin-upstream-fix`
  - **manifest-unknown-fields**: qqbot: manifest uses unsupported top-level fields
  - state: open · compat:none
  - evidence:
    - [capabilities @ openclaw.plugin.json](https://github.com/tencent-connect/openclaw-qqbot/blob/3eee78922ed0b19af5c4c55f1dfe7d1c848e31f5/openclaw.plugin.json)
    - [extensions @ openclaw.plugin.json](https://github.com/tencent-connect/openclaw-qqbot/blob/3eee78922ed0b19af5c4c55f1dfe7d1c848e31f5/openclaw.plugin.json)

- 🟡 P2 **qqbot** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: qqbot: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - [package.json](https://github.com/tencent-connect/openclaw-qqbot/blob/3eee78922ed0b19af5c4c55f1dfe7d1c848e31f5/package.json)

- 🟡 P2 **secureclaw** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: secureclaw: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - [package.json](https://github.com/adversa-ai/secureclaw/blob/bf17e2b3deb989e348b3a98080e33a7047e90ac3/secureclaw/package.json)

- 🟡 P2 **web-search-plus** `upstream-metadata` `plugin-upstream-fix`
  - **manifest-unknown-fields**: web-search-plus: manifest uses unsupported top-level fields
  - state: open · compat:none
  - evidence:
    - [displayName @ openclaw.plugin.json](https://github.com/robbyczgw-cla/web-search-plus-plugin/blob/6e4c765cd04eb449c806748c3130793fe0b05e5e/openclaw.plugin.json)

- 🟡 P2 **wecom** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: wecom: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - [package.json](https://github.com/sunnoy/openclaw-plugin-wecom/blob/b7849ac055c8fa699d01b48e83cf24028907307d/package.json)

## Issues

- 🔴 P0 **codex-app-server** `live-issue` `core-compat-adapter`
  - **sdk-export-missing**: codex-app-server: plugin SDK import aliases are missing from target package exports
  - state: blocking · compat:untracked · live
  - evidence:
    - [openclaw/plugin-sdk/discord @ controller.ts:104](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/src/controller.ts#L104)
    - [openclaw/plugin-sdk/discord @ controller.ts:106](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/src/controller.ts#L106)
    - [openclaw/plugin-sdk/telegram-account @ controller.ts:105](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/src/controller.ts#L105)

- 🔴 P0 **hyperspell** `live-issue` `core-compat-adapter`
  - **unknown-hook-name**: hyperspell: fixture uses a hook missing from target OpenClaw
  - state: blocking · compat:none · live
  - evidence:
    - [file_changed @ index.ts:122](https://github.com/hyperspell/hyperspell-openclaw/blob/a04d35176c4ffbe99d906f7d8075fc8671e7968d/index.ts#L122)

- 🟠 P1 **a2a-gateway** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: a2a-gateway: runtime registrations need capture before contract judgment
  - state: open · compat:none
  - evidence:
    - [registerGatewayMethod @ index.ts:616](https://github.com/win4r/openclaw-a2a-gateway/blob/a335e59e926f7e1a8913e6cd7b1cbf2d44c33cb7/index.ts#L616)
    - [registerGatewayMethod @ index.ts:622](https://github.com/win4r/openclaw-a2a-gateway/blob/a335e59e926f7e1a8913e6cd7b1cbf2d44c33cb7/index.ts#L622)
    - [registerGatewayMethod @ index.ts:631](https://github.com/win4r/openclaw-a2a-gateway/blob/a335e59e926f7e1a8913e6cd7b1cbf2d44c33cb7/index.ts#L631)
    - [registerGatewayMethod @ index.ts:657](https://github.com/win4r/openclaw-a2a-gateway/blob/a335e59e926f7e1a8913e6cd7b1cbf2d44c33cb7/index.ts#L657)
    - [registerGatewayMethod @ index.ts:669](https://github.com/win4r/openclaw-a2a-gateway/blob/a335e59e926f7e1a8913e6cd7b1cbf2d44c33cb7/index.ts#L669)
    - [registerService @ index.ts:857](https://github.com/win4r/openclaw-a2a-gateway/blob/a335e59e926f7e1a8913e6cd7b1cbf2d44c33cb7/index.ts#L857)

- 🟠 P1 **clawmetry** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: clawmetry: runtime registrations need capture before contract judgment
  - state: open · compat:none
  - evidence:
    - [registerService @ index.ts:9](https://github.com/vivekchand/clawmetry/blob/b329bb3ed18b651d369bf35321ec58bd47dc33b4/clawhub-plugin/index.ts#L9)

- 🟠 P1 **codex-app-server** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: codex-app-server: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - plugin-sdk-export-aliases

- 🟠 P1 **codex-app-server** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: codex-app-server: runtime registrations need capture before contract judgment
  - state: open · compat:none
  - evidence:
    - [registerCommand @ index.ts:48](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/index.ts#L48)
    - [registerInteractiveHandler @ index.ts:29](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/index.ts#L29)
    - [registerInteractiveHandler @ index.ts:38](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/index.ts#L38)
    - [registerService @ index.ts:12](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/index.ts#L12)

- 🟠 P1 **connectclaw** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: connectclaw: runtime registrations need capture before contract judgment
  - state: open · compat:none
  - evidence:
    - [registerCommand @ commands.ts:18](https://github.com/osipov-anton/connectclaw/blob/6cd516650168890e9b850064afaaa5fe24df5950/packages/plugin/src/commands.ts#L18)
    - [registerCommand @ commands.ts:64](https://github.com/osipov-anton/connectclaw/blob/6cd516650168890e9b850064afaaa5fe24df5950/packages/plugin/src/commands.ts#L64)
    - [registerService @ hooks.ts:91](https://github.com/osipov-anton/connectclaw/blob/6cd516650168890e9b850064afaaa5fe24df5950/packages/plugin/src/hooks.ts#L91)

- 🟠 P1 **honcho** `inspector-gap` `inspector-follow-up`
  - **conversation-access-hook**: honcho: conversation-access hooks need privacy-boundary probes
  - state: open · compat:none
  - evidence:
    - [agent_end @ capture.ts:89](https://github.com/plastic-labs/openclaw-honcho/blob/f1ac095b5d633d463d57c5cc9735547a73ff9199/hooks/capture.ts#L89)
    - [agent_end @ subagent.ts:34](https://github.com/plastic-labs/openclaw-honcho/blob/f1ac095b5d633d463d57c5cc9735547a73ff9199/hooks/subagent.ts#L34)

- 🟠 P1 **honcho** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: honcho: runtime registrations need capture before contract judgment
  - state: open · compat:none
  - evidence:
    - [registerMemoryPromptSection @ index.ts:97](https://github.com/plastic-labs/openclaw-honcho/blob/f1ac095b5d633d463d57c5cc9735547a73ff9199/index.ts#L97)
    - [registerMemoryRuntime @ runtime.ts:276](https://github.com/plastic-labs/openclaw-honcho/blob/f1ac095b5d633d463d57c5cc9735547a73ff9199/runtime.ts#L276)

- 🟠 P1 **hyperspell** `inspector-gap` `inspector-follow-up`
  - **conversation-access-hook**: hyperspell: conversation-access hooks need privacy-boundary probes
  - state: open · compat:none
  - evidence:
    - [agent_end @ index.ts:105](https://github.com/hyperspell/hyperspell-openclaw/blob/a04d35176c4ffbe99d906f7d8075fc8671e7968d/index.ts#L105)
    - [agent_end @ index.ts:116](https://github.com/hyperspell/hyperspell-openclaw/blob/a04d35176c4ffbe99d906f7d8075fc8671e7968d/index.ts#L116)

- 🟠 P1 **hyperspell** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: hyperspell: runtime registrations need capture before contract judgment
  - state: open · compat:none
  - evidence:
    - [registerCommand @ slash.ts:166](https://github.com/hyperspell/hyperspell-openclaw/blob/a04d35176c4ffbe99d906f7d8075fc8671e7968d/commands/slash.ts#L166)
    - [registerCommand @ slash.ts:43](https://github.com/hyperspell/hyperspell-openclaw/blob/a04d35176c4ffbe99d906f7d8075fc8671e7968d/commands/slash.ts#L43)
    - [registerCommand @ slash.ts:98](https://github.com/hyperspell/hyperspell-openclaw/blob/a04d35176c4ffbe99d906f7d8075fc8671e7968d/commands/slash.ts#L98)
    - [registerCommand @ index.ts:46](https://github.com/hyperspell/hyperspell-openclaw/blob/a04d35176c4ffbe99d906f7d8075fc8671e7968d/index.ts#L46)
    - [registerCommand @ index.ts:57](https://github.com/hyperspell/hyperspell-openclaw/blob/a04d35176c4ffbe99d906f7d8075fc8671e7968d/index.ts#L57)
    - [registerCommand @ index.ts:68](https://github.com/hyperspell/hyperspell-openclaw/blob/a04d35176c4ffbe99d906f7d8075fc8671e7968d/index.ts#L68)
    - [registerService @ index.ts:134](https://github.com/hyperspell/hyperspell-openclaw/blob/a04d35176c4ffbe99d906f7d8075fc8671e7968d/index.ts#L134)

- 🟠 P1 **lightclawbot** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: lightclawbot: runtime registrations need capture before contract judgment
  - state: open · compat:none
  - evidence:
    - registerChannel @ plugins/lightclawbot/.crabpot-package/dist/index.js:13

- 🟠 P1 **llm-trace-phoenix** `inspector-gap` `inspector-follow-up`
  - **conversation-access-hook**: llm-trace-phoenix: conversation-access hooks need privacy-boundary probes
  - state: open · compat:none
  - evidence:
    - [llm_input @ index.ts:154](https://github.com/pingshian0131/openclaw-plugin-llm-trace-phoenix/blob/05bc0f4ba67281c10fad7be356d32a54b00c59fd/index.ts#L154)
    - [llm_output @ index.ts:168](https://github.com/pingshian0131/openclaw-plugin-llm-trace-phoenix/blob/05bc0f4ba67281c10fad7be356d32a54b00c59fd/index.ts#L168)

- 🟠 P1 **lossless-claw** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: lossless-claw: runtime registrations need capture before contract judgment
  - state: open · compat:none
  - evidence:
    - [registerCommand @ index.ts:2009](https://github.com/Martian-Engineering/lossless-claw/blob/8d634cdf4b7544c9093c2e701fbbe5075d1e3de6/src/plugin/index.ts#L2009)
    - [registerContextEngine @ index.ts:1989](https://github.com/Martian-Engineering/lossless-claw/blob/8d634cdf4b7544c9093c2e701fbbe5075d1e3de6/src/plugin/index.ts#L1989)

- 🟠 P1 **mcp-adapter** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: mcp-adapter: runtime registrations need capture before contract judgment
  - state: open · compat:none
  - evidence:
    - [registerService @ index.ts:15](https://github.com/androidStern-personal/openclaw-mcp-adapter/blob/5434ce21ac780a46a493c8125e52e80a03dd2640/index.ts#L15)

- 🟠 P1 **memory-tencentdb** `inspector-gap` `inspector-follow-up`
  - **conversation-access-hook**: memory-tencentdb: conversation-access hooks need privacy-boundary probes
  - state: open · compat:none
  - evidence:
    - agent_end @ plugins/memory-tencentdb/.crabpot-package/index.ts:820

- 🟠 P1 **memos-cloud** `inspector-gap` `inspector-follow-up`
  - **conversation-access-hook**: memos-cloud: conversation-access hooks need privacy-boundary probes
  - state: open · compat:none
  - evidence:
    - [agent_end @ index.js:515](https://github.com/MemTensor/MemOS-Cloud-OpenClaw-Plugin/blob/03fcc33c5fd285971d4b3dbaa8bbb31cb727db7c/index.js#L515)

- 🟠 P1 **memos-cloud** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: memos-cloud: runtime registrations need capture before contract judgment
  - state: open · compat:none
  - evidence:
    - [registerHook @ index.js:467](https://github.com/MemTensor/MemOS-Cloud-OpenClaw-Plugin/blob/03fcc33c5fd285971d4b3dbaa8bbb31cb727db7c/index.js#L467)

- 🟠 P1 **mocrane-wecom** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: mocrane-wecom: runtime registrations need capture before contract judgment
  - state: open · compat:none
  - evidence:
    - [registerChannel @ index.ts:31](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/index.ts#L31)
    - [registerHttpRoute @ index.ts:34](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/index.ts#L34)

- 🟠 P1 **openclaw-weixin** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: openclaw-weixin: runtime registrations need capture before contract judgment
  - state: open · compat:none
  - evidence:
    - registerChannel @ plugins/openclaw-weixin/.crabpot-package/index.ts:22

- 🟠 P1 **opik-openclaw** `inspector-gap` `inspector-follow-up`
  - **before-tool-call-probe**: opik-openclaw: before_tool_call needs terminal/block/approval probes
  - state: open · compat:none
  - evidence:
    - [before_tool_call @ tool.ts:34](https://github.com/comet-ml/opik-openclaw/blob/f8987269d3f2121f52ace4f60c80629266c0dfd7/src/service/hooks/tool.ts#L34)

- 🟠 P1 **opik-openclaw** `inspector-gap` `inspector-follow-up`
  - **conversation-access-hook**: opik-openclaw: conversation-access hooks need privacy-boundary probes
  - state: open · compat:none
  - evidence:
    - [agent_end @ service.ts:560](https://github.com/comet-ml/opik-openclaw/blob/f8987269d3f2121f52ace4f60c80629266c0dfd7/src/service.ts#L560)
    - [llm_input @ llm.ts:39](https://github.com/comet-ml/opik-openclaw/blob/f8987269d3f2121f52ace4f60c80629266c0dfd7/src/service/hooks/llm.ts#L39)
    - [llm_output @ llm.ts:150](https://github.com/comet-ml/opik-openclaw/blob/f8987269d3f2121f52ace4f60c80629266c0dfd7/src/service/hooks/llm.ts#L150)

- 🟠 P1 **opik-openclaw** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: opik-openclaw: runtime registrations need capture before contract judgment
  - state: open · compat:none
  - evidence:
    - [registerService @ index.ts:16](https://github.com/comet-ml/opik-openclaw/blob/f8987269d3f2121f52ace4f60c80629266c0dfd7/index.ts#L16)

- 🟠 P1 **qqbot** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: qqbot: runtime registrations need capture before contract judgment
  - state: open · compat:none
  - evidence:
    - [registerChannel @ index.ts:16](https://github.com/tencent-connect/openclaw-qqbot/blob/3eee78922ed0b19af5c4c55f1dfe7d1c848e31f5/index.ts#L16)

- 🟠 P1 **secureclaw** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: secureclaw: runtime registrations need capture before contract judgment
  - state: open · compat:none
  - evidence:
    - [registerService @ index.ts:295](https://github.com/adversa-ai/secureclaw/blob/bf17e2b3deb989e348b3a98080e33a7047e90ac3/secureclaw/src/index.ts#L295)
    - [registerService @ index.ts:301](https://github.com/adversa-ai/secureclaw/blob/bf17e2b3deb989e348b3a98080e33a7047e90ac3/secureclaw/src/index.ts#L301)
    - [registerService @ index.ts:307](https://github.com/adversa-ai/secureclaw/blob/bf17e2b3deb989e348b3a98080e33a7047e90ac3/secureclaw/src/index.ts#L307)

- 🟠 P1 **wecom** `inspector-gap` `inspector-follow-up`
  - **before-tool-call-probe**: wecom: before_tool_call needs terminal/block/approval probes
  - state: open · compat:none
  - evidence:
    - [before_tool_call @ index.js:65](https://github.com/sunnoy/openclaw-plugin-wecom/blob/b7849ac055c8fa699d01b48e83cf24028907307d/index.js#L65)

- 🟠 P1 **wecom** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: wecom: runtime registrations need capture before contract judgment
  - state: open · compat:none
  - evidence:
    - [registerChannel @ index.js:27](https://github.com/sunnoy/openclaw-plugin-wecom/blob/b7849ac055c8fa699d01b48e83cf24028907307d/index.js#L27)
    - [registerHttpRoute @ index.js:45](https://github.com/sunnoy/openclaw-plugin-wecom/blob/b7849ac055c8fa699d01b48e83cf24028907307d/index.js#L45)

- 🟠 P1 **yuanbao** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: yuanbao: runtime registrations need capture before contract judgment
  - state: open · compat:none
  - evidence:
    - registerChannel @ plugins/yuanbao/.crabpot-package/dist/index.js:29
    - registerCommand @ plugins/yuanbao/.crabpot-package/dist/index.js:31
    - registerCommand @ plugins/yuanbao/.crabpot-package/dist/index.js:32
    - registerCommand @ plugins/yuanbao/.crabpot-package/dist/index.js:34

- 🟡 P2 **a2a-gateway** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: a2a-gateway: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [openclaw/plugin-sdk @ types.ts:14](https://github.com/win4r/openclaw-a2a-gateway/blob/a335e59e926f7e1a8913e6cd7b1cbf2d44c33cb7/src/types.ts#L14)

- 🟡 P2 **a2a-gateway** `upstream-metadata` `plugin-upstream-fix`
  - **manifest-unknown-fields**: a2a-gateway: manifest uses unsupported top-level fields
  - state: open · compat:none
  - evidence:
    - [defaultConfig @ openclaw.plugin.json](https://github.com/win4r/openclaw-a2a-gateway/blob/a335e59e926f7e1a8913e6cd7b1cbf2d44c33cb7/openclaw.plugin.json)

- 🟡 P2 **a2a-gateway** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: a2a-gateway: cold import requires isolated dependency installation
  - state: open · compat:none
  - evidence:
    - [@a2a-js/sdk @ package.json](https://github.com/win4r/openclaw-a2a-gateway/blob/a335e59e926f7e1a8913e6cd7b1cbf2d44c33cb7/package.json)
    - [@bufbuild/protobuf @ package.json](https://github.com/win4r/openclaw-a2a-gateway/blob/a335e59e926f7e1a8913e6cd7b1cbf2d44c33cb7/package.json)
    - [@grpc/grpc-js @ package.json](https://github.com/win4r/openclaw-a2a-gateway/blob/a335e59e926f7e1a8913e6cd7b1cbf2d44c33cb7/package.json)
    - [express @ package.json](https://github.com/win4r/openclaw-a2a-gateway/blob/a335e59e926f7e1a8913e6cd7b1cbf2d44c33cb7/package.json)
    - [multicast-dns @ package.json](https://github.com/win4r/openclaw-a2a-gateway/blob/a335e59e926f7e1a8913e6cd7b1cbf2d44c33cb7/package.json)
    - [uuid @ package.json](https://github.com/win4r/openclaw-a2a-gateway/blob/a335e59e926f7e1a8913e6cd7b1cbf2d44c33cb7/package.json)
    - [ws @ package.json](https://github.com/win4r/openclaw-a2a-gateway/blob/a335e59e926f7e1a8913e6cd7b1cbf2d44c33cb7/package.json)

- 🟡 P2 **a2a-gateway** `upstream-metadata` `plugin-upstream-fix`
  - **package-manifest-version-drift**: a2a-gateway: package and manifest versions drift
  - state: open · compat:none
  - evidence:
    - package:1.4.0
    - manifest:1.3.0

- 🟡 P2 **a2a-gateway** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: a2a-gateway: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - [package.json](https://github.com/win4r/openclaw-a2a-gateway/blob/a335e59e926f7e1a8913e6cd7b1cbf2d44c33cb7/package.json)

- 🟡 P2 **a2a-gateway** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: a2a-gateway: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/win4r/openclaw-a2a-gateway/blob/a335e59e926f7e1a8913e6cd7b1cbf2d44c33cb7/index.ts)

- 🟡 P2 **a2a-gateway** `inspector-gap` `inspector-follow-up`
  - **runtime-tool-capture**: a2a-gateway: runtime tool schema needs registration capture
  - state: open · compat:none
  - evidence:
    - [registerTool @ index.ts:777](https://github.com/win4r/openclaw-a2a-gateway/blob/a335e59e926f7e1a8913e6cd7b1cbf2d44c33cb7/index.ts#L777)

- 🟡 P2 **agentchat** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: agentchat: channel runtime needs envelope/config probes
  - state: open · compat:none
  - evidence:
    - [defineChannelPluginEntry @ channel.ts:333](https://github.com/agentchatme/agentchat/blob/1460cece00ebd3829fb39d5db5ee23050937ed02/integrations/openclaw-channel/src/channel.ts#L333)

- 🟡 P2 **agentchat** `deprecation-warning` `core-compat-adapter`
  - **channel-env-vars**: agentchat: channelEnvVars legacy manifest metadata must stay covered
  - state: open · compat:deprecated · deprecated
  - evidence:
    - agentchat

- 🟡 P2 **agentchat** `upstream-metadata` `plugin-upstream-fix`
  - **manifest-unknown-fields**: agentchat: manifest uses unsupported top-level fields
  - state: open · compat:none
  - evidence:
    - [displayName @ openclaw.plugin.json](https://github.com/agentchatme/agentchat/blob/1460cece00ebd3829fb39d5db5ee23050937ed02/integrations/openclaw-channel/openclaw.plugin.json)
    - [homepage @ openclaw.plugin.json](https://github.com/agentchatme/agentchat/blob/1460cece00ebd3829fb39d5db5ee23050937ed02/integrations/openclaw-channel/openclaw.plugin.json)
    - [icon @ openclaw.plugin.json](https://github.com/agentchatme/agentchat/blob/1460cece00ebd3829fb39d5db5ee23050937ed02/integrations/openclaw-channel/openclaw.plugin.json)

- 🟡 P2 **agentchat** `inspector-gap` `inspector-follow-up`
  - **package-build-artifact-entrypoint**: agentchat: cold import requires package build output
  - state: open · compat:none
  - evidence:
    - [extension:./dist/index.js @ index.js](https://github.com/agentchatme/agentchat/blob/1460cece00ebd3829fb39d5db5ee23050937ed02/integrations/openclaw-channel/dist/index.js)
    - [setupEntry:./dist/setup-entry.js @ setup-entry.js](https://github.com/agentchatme/agentchat/blob/1460cece00ebd3829fb39d5db5ee23050937ed02/integrations/openclaw-channel/dist/setup-entry.js)

- 🟡 P2 **agentchat** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: agentchat: cold import requires isolated dependency installation
  - state: open · compat:none
  - evidence:
    - [@agentchatme/agentchat @ package.json](https://github.com/agentchatme/agentchat/blob/1460cece00ebd3829fb39d5db5ee23050937ed02/integrations/openclaw-channel/package.json)
    - [@sinclair/typebox @ package.json](https://github.com/agentchatme/agentchat/blob/1460cece00ebd3829fb39d5db5ee23050937ed02/integrations/openclaw-channel/package.json)
    - [pino @ package.json](https://github.com/agentchatme/agentchat/blob/1460cece00ebd3829fb39d5db5ee23050937ed02/integrations/openclaw-channel/package.json)
    - [ws @ package.json](https://github.com/agentchatme/agentchat/blob/1460cece00ebd3829fb39d5db5ee23050937ed02/integrations/openclaw-channel/package.json)
    - [zod @ package.json](https://github.com/agentchatme/agentchat/blob/1460cece00ebd3829fb39d5db5ee23050937ed02/integrations/openclaw-channel/package.json)
    - [openclaw @ package.json](https://github.com/agentchatme/agentchat/blob/1460cece00ebd3829fb39d5db5ee23050937ed02/integrations/openclaw-channel/package.json)

- 🟡 P2 **apify** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: apify: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [openclaw/plugin-sdk @ cli.ts:2](https://github.com/apify/apify-openclaw-plugin/blob/41f49794d230f7ad092d1c699ee4d91fecf6ba91/src/cli.ts#L2)
    - [openclaw/plugin-sdk @ index.ts:1](https://github.com/apify/apify-openclaw-plugin/blob/41f49794d230f7ad092d1c699ee4d91fecf6ba91/src/index.ts#L1)
    - [openclaw/plugin-sdk @ apify-scraper-tool.ts:4](https://github.com/apify/apify-openclaw-plugin/blob/41f49794d230f7ad092d1c699ee4d91fecf6ba91/src/tools/apify-scraper-tool.ts#L4)

- 🟡 P2 **apify** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: apify: cold import requires isolated dependency installation
  - state: open · compat:none
  - evidence:
    - [@sinclair/typebox @ package.json](https://github.com/apify/apify-openclaw-plugin/blob/41f49794d230f7ad092d1c699ee4d91fecf6ba91/package.json)
    - [apify-client @ package.json](https://github.com/apify/apify-openclaw-plugin/blob/41f49794d230f7ad092d1c699ee4d91fecf6ba91/package.json)
    - [openclaw @ package.json](https://github.com/apify/apify-openclaw-plugin/blob/41f49794d230f7ad092d1c699ee4d91fecf6ba91/package.json)

- 🟡 P2 **apify** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: apify: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/apify/apify-openclaw-plugin/blob/41f49794d230f7ad092d1c699ee4d91fecf6ba91/src/index.ts)

- 🟡 P2 **apify** `inspector-gap` `inspector-follow-up`
  - **runtime-tool-capture**: apify: runtime tool schema needs registration capture
  - state: open · compat:none
  - evidence:
    - [registerTool @ index.ts:13](https://github.com/apify/apify-openclaw-plugin/blob/41f49794d230f7ad092d1c699ee4d91fecf6ba91/src/index.ts#L13)

- 🟡 P2 **clawmetry** `inspector-gap` `inspector-follow-up`
  - **package-build-artifact-entrypoint**: clawmetry: cold import requires package build output
  - state: open · compat:none
  - evidence:
    - [runtimeExtension:./dist/index.js @ index.js](https://github.com/vivekchand/clawmetry/blob/b329bb3ed18b651d369bf35321ec58bd47dc33b4/clawhub-plugin/dist/index.js)

- 🟡 P2 **clawmetry** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: clawmetry: cold import requires isolated dependency installation
  - state: open · compat:none
  - evidence:
    - [node-fetch @ package.json](https://github.com/vivekchand/clawmetry/blob/b329bb3ed18b651d369bf35321ec58bd47dc33b4/clawhub-plugin/package.json)

- 🟡 P2 **clawmetry** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: clawmetry: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/vivekchand/clawmetry/blob/b329bb3ed18b651d369bf35321ec58bd47dc33b4/clawhub-plugin/index.ts)

- 🟡 P2 **codex-app-server** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: codex-app-server: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [openclaw/plugin-sdk @ index.ts:1](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/index.ts#L1)
    - [openclaw/plugin-sdk @ client.ts:6](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/src/client.ts#L6)
    - [openclaw/plugin-sdk @ controller.ts:18](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/src/controller.ts#L18)
    - [openclaw/plugin-sdk @ types.ts:1](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/src/types.ts#L1)

- 🟡 P2 **codex-app-server** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: codex-app-server: cold import requires isolated dependency installation
  - state: open · compat:none
  - evidence:
    - [ws @ package.json](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/package.json)
    - [openclaw @ package.json](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/package.json)

- 🟡 P2 **codex-app-server** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: codex-app-server: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/index.ts)

- 🟡 P2 **composio** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: composio: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [openclaw/plugin-sdk @ index.ts:1](https://github.com/ComposioHQ/openclaw-composio-plugin/blob/992d9576ba1b301e37dc900f3177a608936b8fbb/index.ts#L1)
    - [openclaw/plugin-sdk @ cli.ts:6](https://github.com/ComposioHQ/openclaw-composio-plugin/blob/992d9576ba1b301e37dc900f3177a608936b8fbb/src/cli.ts#L6)
    - [openclaw/plugin-sdk @ client.ts:1](https://github.com/ComposioHQ/openclaw-composio-plugin/blob/992d9576ba1b301e37dc900f3177a608936b8fbb/src/client.ts#L1)
    - [openclaw/plugin-sdk @ tools.ts:1](https://github.com/ComposioHQ/openclaw-composio-plugin/blob/992d9576ba1b301e37dc900f3177a608936b8fbb/src/tools.ts#L1)

- 🟡 P2 **composio** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: composio: cold import requires isolated dependency installation
  - state: open · compat:none
  - evidence:
    - [@modelcontextprotocol/sdk @ package.json](https://github.com/ComposioHQ/openclaw-composio-plugin/blob/992d9576ba1b301e37dc900f3177a608936b8fbb/package.json)
    - [zod @ package.json](https://github.com/ComposioHQ/openclaw-composio-plugin/blob/992d9576ba1b301e37dc900f3177a608936b8fbb/package.json)

- 🟡 P2 **composio** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: composio: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - [package.json](https://github.com/ComposioHQ/openclaw-composio-plugin/blob/992d9576ba1b301e37dc900f3177a608936b8fbb/package.json)

- 🟡 P2 **composio** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: composio: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/ComposioHQ/openclaw-composio-plugin/blob/992d9576ba1b301e37dc900f3177a608936b8fbb/index.ts)

- 🟡 P2 **composio** `inspector-gap` `inspector-follow-up`
  - **runtime-tool-capture**: composio: runtime tool schema needs registration capture
  - state: open · compat:none
  - evidence:
    - [registerTool @ tools.ts:89](https://github.com/ComposioHQ/openclaw-composio-plugin/blob/992d9576ba1b301e37dc900f3177a608936b8fbb/src/tools.ts#L89)

- 🟡 P2 **connectclaw** `deprecation-warning` `core-compat-adapter`
  - **legacy-before-agent-start**: connectclaw: legacy before_agent_start hook compatibility is still used
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [before_agent_start @ hooks.ts:17](https://github.com/osipov-anton/connectclaw/blob/6cd516650168890e9b850064afaaa5fe24df5950/packages/plugin/src/hooks.ts#L17)

- 🟡 P2 **connectclaw** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: connectclaw: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [openclaw/plugin-sdk @ index.ts:1](https://github.com/osipov-anton/connectclaw/blob/6cd516650168890e9b850064afaaa5fe24df5950/packages/plugin/index.ts#L1)
    - [openclaw/plugin-sdk @ commands.ts:1](https://github.com/osipov-anton/connectclaw/blob/6cd516650168890e9b850064afaaa5fe24df5950/packages/plugin/src/commands.ts#L1)
    - [openclaw/plugin-sdk @ hooks.ts:1](https://github.com/osipov-anton/connectclaw/blob/6cd516650168890e9b850064afaaa5fe24df5950/packages/plugin/src/hooks.ts#L1)
    - [openclaw/plugin-sdk @ tools.ts:1](https://github.com/osipov-anton/connectclaw/blob/6cd516650168890e9b850064afaaa5fe24df5950/packages/plugin/src/tools.ts#L1)
    - [openclaw/plugin-sdk @ tools.ts:2](https://github.com/osipov-anton/connectclaw/blob/6cd516650168890e9b850064afaaa5fe24df5950/packages/plugin/src/tools.ts#L2)

- 🟡 P2 **connectclaw** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: connectclaw: cold import requires isolated dependency installation
  - state: open · compat:none
  - evidence:
    - [openclaw @ package.json](https://github.com/osipov-anton/connectclaw/blob/6cd516650168890e9b850064afaaa5fe24df5950/packages/plugin/package.json)

- 🟡 P2 **connectclaw** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: connectclaw: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - [package.json](https://github.com/osipov-anton/connectclaw/blob/6cd516650168890e9b850064afaaa5fe24df5950/packages/plugin/package.json)

- 🟡 P2 **connectclaw** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: connectclaw: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/osipov-anton/connectclaw/blob/6cd516650168890e9b850064afaaa5fe24df5950/packages/plugin/index.ts)

- 🟡 P2 **connectclaw** `inspector-gap` `inspector-follow-up`
  - **runtime-tool-capture**: connectclaw: runtime tool schema needs registration capture
  - state: open · compat:none
  - evidence:
    - [registerTool @ tools.ts:6](https://github.com/osipov-anton/connectclaw/blob/6cd516650168890e9b850064afaaa5fe24df5950/packages/plugin/src/tools.ts#L6)

- 🟡 P2 **ddingtalk** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: ddingtalk: channel runtime needs envelope/config probes
  - state: open · compat:none
  - evidence:
    - [defineChannelPluginEntry @ index.ts:8](https://github.com/largezhou/openclaw-dingtalk/blob/74d22da7335f261ec5febe2663bed6b81068b7ec/index.ts#L8)

- 🟡 P2 **ddingtalk** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: ddingtalk: cold import requires isolated dependency installation
  - state: open · compat:none
  - evidence:
    - [dingtalk-stream @ package.json](https://github.com/largezhou/openclaw-dingtalk/blob/74d22da7335f261ec5febe2663bed6b81068b7ec/package.json)
    - [zod @ package.json](https://github.com/largezhou/openclaw-dingtalk/blob/74d22da7335f261ec5febe2663bed6b81068b7ec/package.json)
    - [openclaw @ package.json](https://github.com/largezhou/openclaw-dingtalk/blob/74d22da7335f261ec5febe2663bed6b81068b7ec/package.json)

- 🟡 P2 **ddingtalk** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: ddingtalk: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - [package.json](https://github.com/largezhou/openclaw-dingtalk/blob/74d22da7335f261ec5febe2663bed6b81068b7ec/package.json)

- 🟡 P2 **ddingtalk** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: ddingtalk: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/largezhou/openclaw-dingtalk/blob/74d22da7335f261ec5febe2663bed6b81068b7ec/index.ts)

- 🟡 P2 **hasdata** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: hasdata: cold import requires isolated dependency installation
  - state: open · compat:none
  - evidence:
    - [@sinclair/typebox @ package.json](https://github.com/HasData/hasdata-openclaw-plugin/blob/bed32d8a0359392b7c4628f12b909b6e204c8426/package.json)
    - [openclaw @ package.json](https://github.com/HasData/hasdata-openclaw-plugin/blob/bed32d8a0359392b7c4628f12b909b6e204c8426/package.json)

- 🟡 P2 **hasdata** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: hasdata: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/HasData/hasdata-openclaw-plugin/blob/bed32d8a0359392b7c4628f12b909b6e204c8426/src/index.ts)

- 🟡 P2 **hasdata** `deprecation-warning` `core-compat-adapter`
  - **provider-auth-env-vars**: hasdata: providerAuthEnvVars legacy manifest metadata must stay covered
  - state: open · compat:deprecated · deprecated
  - evidence:
    - hasdata

- 🟡 P2 **honcho** `deprecation-warning` `core-compat-adapter`
  - **legacy-before-agent-start**: honcho: legacy before_agent_start hook compatibility is still used
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [before_agent_start @ subagent.ts:18](https://github.com/plastic-labs/openclaw-honcho/blob/f1ac095b5d633d463d57c5cc9735547a73ff9199/hooks/subagent.ts#L18)

- 🟡 P2 **honcho** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: honcho: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [openclaw/plugin-sdk @ cli.ts:8](https://github.com/plastic-labs/openclaw-honcho/blob/f1ac095b5d633d463d57c5cc9735547a73ff9199/commands/cli.ts#L8)
    - [openclaw/plugin-sdk @ capture.ts:2](https://github.com/plastic-labs/openclaw-honcho/blob/f1ac095b5d633d463d57c5cc9735547a73ff9199/hooks/capture.ts#L2)
    - [openclaw/plugin-sdk @ context.ts:2](https://github.com/plastic-labs/openclaw-honcho/blob/f1ac095b5d633d463d57c5cc9735547a73ff9199/hooks/context.ts#L2)
    - [openclaw/plugin-sdk @ gateway.ts:2](https://github.com/plastic-labs/openclaw-honcho/blob/f1ac095b5d633d463d57c5cc9735547a73ff9199/hooks/gateway.ts#L2)
    - [openclaw/plugin-sdk @ subagent.ts:2](https://github.com/plastic-labs/openclaw-honcho/blob/f1ac095b5d633d463d57c5cc9735547a73ff9199/hooks/subagent.ts#L2)
    - [openclaw/plugin-sdk @ state.ts:9](https://github.com/plastic-labs/openclaw-honcho/blob/f1ac095b5d633d463d57c5cc9735547a73ff9199/state.ts#L9)
    - [openclaw/plugin-sdk @ ask.ts:3](https://github.com/plastic-labs/openclaw-honcho/blob/f1ac095b5d633d463d57c5cc9735547a73ff9199/tools/ask.ts#L3)
    - [openclaw/plugin-sdk @ context.ts:3](https://github.com/plastic-labs/openclaw-honcho/blob/f1ac095b5d633d463d57c5cc9735547a73ff9199/tools/context.ts#L3)
    - [openclaw/plugin-sdk @ memory-passthrough.ts:3](https://github.com/plastic-labs/openclaw-honcho/blob/f1ac095b5d633d463d57c5cc9735547a73ff9199/tools/memory-passthrough.ts#L3)
    - [openclaw/plugin-sdk @ message-search.ts:3](https://github.com/plastic-labs/openclaw-honcho/blob/f1ac095b5d633d463d57c5cc9735547a73ff9199/tools/message-search.ts#L3)
    - [openclaw/plugin-sdk @ search.ts:3](https://github.com/plastic-labs/openclaw-honcho/blob/f1ac095b5d633d463d57c5cc9735547a73ff9199/tools/search.ts#L3)
    - [openclaw/plugin-sdk @ session.ts:3](https://github.com/plastic-labs/openclaw-honcho/blob/f1ac095b5d633d463d57c5cc9735547a73ff9199/tools/session.ts#L3)

- 🟡 P2 **honcho** `inspector-gap` `inspector-follow-up`
  - **package-build-artifact-entrypoint**: honcho: cold import requires package build output
  - state: open · compat:none
  - evidence:
    - [extension:./dist/index.js @ index.js](https://github.com/plastic-labs/openclaw-honcho/blob/f1ac095b5d633d463d57c5cc9735547a73ff9199/dist/index.js)

- 🟡 P2 **honcho** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: honcho: cold import requires isolated dependency installation
  - state: open · compat:none
  - evidence:
    - [@honcho-ai/sdk @ package.json](https://github.com/plastic-labs/openclaw-honcho/blob/f1ac095b5d633d463d57c5cc9735547a73ff9199/package.json)
    - [@sinclair/typebox @ package.json](https://github.com/plastic-labs/openclaw-honcho/blob/f1ac095b5d633d463d57c5cc9735547a73ff9199/package.json)
    - [openclaw @ package.json](https://github.com/plastic-labs/openclaw-honcho/blob/f1ac095b5d633d463d57c5cc9735547a73ff9199/package.json)

- 🟡 P2 **honcho** `inspector-gap` `inspector-follow-up`
  - **runtime-tool-capture**: honcho: runtime tool schema needs registration capture
  - state: open · compat:none
  - evidence:
    - [registerTool @ ask.ts:7](https://github.com/plastic-labs/openclaw-honcho/blob/f1ac095b5d633d463d57c5cc9735547a73ff9199/tools/ask.ts#L7)
    - [registerTool @ context.ts:7](https://github.com/plastic-labs/openclaw-honcho/blob/f1ac095b5d633d463d57c5cc9735547a73ff9199/tools/context.ts#L7)
    - [registerTool @ memory-passthrough.ts:130](https://github.com/plastic-labs/openclaw-honcho/blob/f1ac095b5d633d463d57c5cc9735547a73ff9199/tools/memory-passthrough.ts#L130)
    - [registerTool @ memory-passthrough.ts:89](https://github.com/plastic-labs/openclaw-honcho/blob/f1ac095b5d633d463d57c5cc9735547a73ff9199/tools/memory-passthrough.ts#L89)
    - [registerTool @ message-search.ts:8](https://github.com/plastic-labs/openclaw-honcho/blob/f1ac095b5d633d463d57c5cc9735547a73ff9199/tools/message-search.ts#L8)
    - [registerTool @ search.ts:7](https://github.com/plastic-labs/openclaw-honcho/blob/f1ac095b5d633d463d57c5cc9735547a73ff9199/tools/search.ts#L7)
    - [registerTool @ session.ts:8](https://github.com/plastic-labs/openclaw-honcho/blob/f1ac095b5d633d463d57c5cc9735547a73ff9199/tools/session.ts#L8)

- 🟡 P2 **hyperspell** `deprecation-warning` `core-compat-adapter`
  - **legacy-before-agent-start**: hyperspell: legacy before_agent_start hook compatibility is still used
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [before_agent_start @ index.ts:102](https://github.com/hyperspell/hyperspell-openclaw/blob/a04d35176c4ffbe99d906f7d8075fc8671e7968d/index.ts#L102)
    - [before_agent_start @ index.ts:111](https://github.com/hyperspell/hyperspell-openclaw/blob/a04d35176c4ffbe99d906f7d8075fc8671e7968d/index.ts#L111)

- 🟡 P2 **hyperspell** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: hyperspell: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [openclaw/plugin-sdk @ slash.ts:1](https://github.com/hyperspell/hyperspell-openclaw/blob/a04d35176c4ffbe99d906f7d8075fc8671e7968d/commands/slash.ts#L1)
    - [openclaw/plugin-sdk @ tools.ts:2](https://github.com/hyperspell/hyperspell-openclaw/blob/a04d35176c4ffbe99d906f7d8075fc8671e7968d/graph/tools.ts#L2)
    - [openclaw/plugin-sdk @ index.ts:1](https://github.com/hyperspell/hyperspell-openclaw/blob/a04d35176c4ffbe99d906f7d8075fc8671e7968d/index.ts#L1)

- 🟡 P2 **hyperspell** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: hyperspell: cold import requires isolated dependency installation
  - state: open · compat:none
  - evidence:
    - [@clack/prompts @ package.json](https://github.com/hyperspell/hyperspell-openclaw/blob/a04d35176c4ffbe99d906f7d8075fc8671e7968d/package.json)
    - [@sinclair/typebox @ package.json](https://github.com/hyperspell/hyperspell-openclaw/blob/a04d35176c4ffbe99d906f7d8075fc8671e7968d/package.json)
    - [hyperspell @ package.json](https://github.com/hyperspell/hyperspell-openclaw/blob/a04d35176c4ffbe99d906f7d8075fc8671e7968d/package.json)
    - [openclaw @ package.json](https://github.com/hyperspell/hyperspell-openclaw/blob/a04d35176c4ffbe99d906f7d8075fc8671e7968d/package.json)

- 🟡 P2 **hyperspell** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: hyperspell: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/hyperspell/hyperspell-openclaw/blob/a04d35176c4ffbe99d906f7d8075fc8671e7968d/index.ts)

- 🟡 P2 **hyperspell** `inspector-gap` `inspector-follow-up`
  - **runtime-tool-capture**: hyperspell: runtime tool schema needs registration capture
  - state: open · compat:none
  - evidence:
    - [registerTool @ tools.ts:21](https://github.com/hyperspell/hyperspell-openclaw/blob/a04d35176c4ffbe99d906f7d8075fc8671e7968d/graph/tools.ts#L21)
    - [registerTool @ tools.ts:52](https://github.com/hyperspell/hyperspell-openclaw/blob/a04d35176c4ffbe99d906f7d8075fc8671e7968d/graph/tools.ts#L52)
    - [registerTool @ tools.ts:95](https://github.com/hyperspell/hyperspell-openclaw/blob/a04d35176c4ffbe99d906f7d8075fc8671e7968d/graph/tools.ts#L95)
    - [registerTool @ index.ts:89](https://github.com/hyperspell/hyperspell-openclaw/blob/a04d35176c4ffbe99d906f7d8075fc8671e7968d/index.ts#L89)
    - [registerTool @ index.ts:92](https://github.com/hyperspell/hyperspell-openclaw/blob/a04d35176c4ffbe99d906f7d8075fc8671e7968d/index.ts#L92)

- 🟡 P2 **inworld-tts** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: inworld-tts: cold import requires isolated dependency installation
  - state: open · compat:none
  - evidence:
    - [openclaw @ package.json](https://github.com/livingghost/openclaw-inworld-tts/blob/d2abaeea330ebef7530f43f8b395671f6f404aea/package.json)

- 🟡 P2 **inworld-tts** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: inworld-tts: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/livingghost/openclaw-inworld-tts/blob/d2abaeea330ebef7530f43f8b395671f6f404aea/index.ts)

- 🟡 P2 **inworld-tts** `deprecation-warning` `core-compat-adapter`
  - **provider-auth-env-vars**: inworld-tts: providerAuthEnvVars legacy manifest metadata must stay covered
  - state: open · compat:deprecated · deprecated
  - evidence:
    - inworld

- 🟡 P2 **lightclawbot** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: lightclawbot: channel runtime needs envelope/config probes
  - state: open · compat:none
  - evidence:
    - registerChannel @ plugins/lightclawbot/.crabpot-package/dist/index.js:13

- 🟡 P2 **lightclawbot** `upstream-metadata` `plugin-upstream-fix`
  - **manifest-unknown-fields**: lightclawbot: manifest uses unsupported top-level fields
  - state: open · compat:none
  - evidence:
    - capabilities @ plugins/lightclawbot/.crabpot-package/openclaw.plugin.json

- 🟡 P2 **lightclawbot** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: lightclawbot: cold import requires isolated dependency installation
  - state: open · compat:none
  - evidence:
    - socket.io-client @ plugins/lightclawbot/.crabpot-package/package.json
    - openclaw @ plugins/lightclawbot/.crabpot-package/package.json

- 🟡 P2 **lightclawbot** `upstream-metadata` `plugin-upstream-fix`
  - **package-manifest-version-drift**: lightclawbot: package and manifest versions drift
  - state: open · compat:none
  - evidence:
    - package:1.1.2
    - manifest:1.0.0

- 🟡 P2 **lightclawbot** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: lightclawbot: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - plugins/lightclawbot/.crabpot-package/package.json

- 🟡 P2 **lightclawbot** `inspector-gap` `inspector-follow-up`
  - **runtime-tool-capture**: lightclawbot: runtime tool schema needs registration capture
  - state: open · compat:none
  - evidence:
    - registerTool @ plugins/lightclawbot/.crabpot-package/dist/src/download-tool.js:49
    - registerTool @ plugins/lightclawbot/.crabpot-package/dist/src/upload-tool.js:37

- 🟡 P2 **llm-trace-phoenix** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: llm-trace-phoenix: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [openclaw/plugin-sdk @ index.ts:12](https://github.com/pingshian0131/openclaw-plugin-llm-trace-phoenix/blob/05bc0f4ba67281c10fad7be356d32a54b00c59fd/index.ts#L12)

- 🟡 P2 **llm-trace-phoenix** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: llm-trace-phoenix: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/pingshian0131/openclaw-plugin-llm-trace-phoenix/blob/05bc0f4ba67281c10fad7be356d32a54b00c59fd/index.ts)

- 🟡 P2 **lossless-claw** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: lossless-claw: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [openclaw/plugin-sdk @ assembler.ts:2](https://github.com/Martian-Engineering/lossless-claw/blob/8d634cdf4b7544c9093c2e701fbbe5075d1e3de6/src/assembler.ts#L2)
    - [openclaw/plugin-sdk @ engine.ts:19](https://github.com/Martian-Engineering/lossless-claw/blob/8d634cdf4b7544c9093c2e701fbbe5075d1e3de6/src/engine.ts#L19)
    - [openclaw/plugin-sdk @ lcm-log.ts:1](https://github.com/Martian-Engineering/lossless-claw/blob/8d634cdf4b7544c9093c2e701fbbe5075d1e3de6/src/lcm-log.ts#L1)
    - [openclaw/plugin-sdk @ openclaw-bridge.ts:17](https://github.com/Martian-Engineering/lossless-claw/blob/8d634cdf4b7544c9093c2e701fbbe5075d1e3de6/src/openclaw-bridge.ts#L17)
    - [openclaw/plugin-sdk @ openclaw-bridge.ts:22](https://github.com/Martian-Engineering/lossless-claw/blob/8d634cdf4b7544c9093c2e701fbbe5075d1e3de6/src/openclaw-bridge.ts#L22)
    - [openclaw/plugin-sdk @ index.ts:10](https://github.com/Martian-Engineering/lossless-claw/blob/8d634cdf4b7544c9093c2e701fbbe5075d1e3de6/src/plugin/index.ts#L10)
    - [openclaw/plugin-sdk @ lcm-command.ts:9](https://github.com/Martian-Engineering/lossless-claw/blob/8d634cdf4b7544c9093c2e701fbbe5075d1e3de6/src/plugin/lcm-command.ts#L9)
    - [openclaw/plugin-sdk @ common.ts:1](https://github.com/Martian-Engineering/lossless-claw/blob/8d634cdf4b7544c9093c2e701fbbe5075d1e3de6/src/tools/common.ts#L1)

- 🟡 P2 **lossless-claw** `inspector-gap` `inspector-follow-up`
  - **package-build-artifact-entrypoint**: lossless-claw: cold import requires package build output
  - state: open · compat:none
  - evidence:
    - [extension:./dist/index.js @ index.js](https://github.com/Martian-Engineering/lossless-claw/blob/8d634cdf4b7544c9093c2e701fbbe5075d1e3de6/dist/index.js)

- 🟡 P2 **lossless-claw** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: lossless-claw: cold import requires isolated dependency installation
  - state: open · compat:none
  - evidence:
    - [@mariozechner/pi-agent-core @ package.json](https://github.com/Martian-Engineering/lossless-claw/blob/8d634cdf4b7544c9093c2e701fbbe5075d1e3de6/package.json)
    - [@mariozechner/pi-ai @ package.json](https://github.com/Martian-Engineering/lossless-claw/blob/8d634cdf4b7544c9093c2e701fbbe5075d1e3de6/package.json)
    - [@mariozechner/pi-coding-agent @ package.json](https://github.com/Martian-Engineering/lossless-claw/blob/8d634cdf4b7544c9093c2e701fbbe5075d1e3de6/package.json)
    - [@sinclair/typebox @ package.json](https://github.com/Martian-Engineering/lossless-claw/blob/8d634cdf4b7544c9093c2e701fbbe5075d1e3de6/package.json)
    - [openclaw @ package.json](https://github.com/Martian-Engineering/lossless-claw/blob/8d634cdf4b7544c9093c2e701fbbe5075d1e3de6/package.json)

- 🟡 P2 **lossless-claw** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: lossless-claw: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - [package.json](https://github.com/Martian-Engineering/lossless-claw/blob/8d634cdf4b7544c9093c2e701fbbe5075d1e3de6/package.json)

- 🟡 P2 **lossless-claw** `inspector-gap` `inspector-follow-up`
  - **runtime-tool-capture**: lossless-claw: runtime tool schema needs registration capture
  - state: open · compat:none
  - evidence:
    - [registerTool @ index.ts:1991](https://github.com/Martian-Engineering/lossless-claw/blob/8d634cdf4b7544c9093c2e701fbbe5075d1e3de6/src/plugin/index.ts#L1991)
    - [registerTool @ index.ts:1994](https://github.com/Martian-Engineering/lossless-claw/blob/8d634cdf4b7544c9093c2e701fbbe5075d1e3de6/src/plugin/index.ts#L1994)
    - [registerTool @ index.ts:1997](https://github.com/Martian-Engineering/lossless-claw/blob/8d634cdf4b7544c9093c2e701fbbe5075d1e3de6/src/plugin/index.ts#L1997)
    - [registerTool @ index.ts:2000](https://github.com/Martian-Engineering/lossless-claw/blob/8d634cdf4b7544c9093c2e701fbbe5075d1e3de6/src/plugin/index.ts#L2000)

- 🟡 P2 **mcp-adapter** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: mcp-adapter: cold import requires isolated dependency installation
  - state: open · compat:none
  - evidence:
    - [@modelcontextprotocol/sdk @ package.json](https://github.com/androidStern-personal/openclaw-mcp-adapter/blob/5434ce21ac780a46a493c8125e52e80a03dd2640/package.json)

- 🟡 P2 **mcp-adapter** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: mcp-adapter: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - [package.json](https://github.com/androidStern-personal/openclaw-mcp-adapter/blob/5434ce21ac780a46a493c8125e52e80a03dd2640/package.json)

- 🟡 P2 **mcp-adapter** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: mcp-adapter: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/androidStern-personal/openclaw-mcp-adapter/blob/5434ce21ac780a46a493c8125e52e80a03dd2640/index.ts)

- 🟡 P2 **mcp-adapter** `inspector-gap` `inspector-follow-up`
  - **runtime-tool-capture**: mcp-adapter: runtime tool schema needs registration capture
  - state: open · compat:none
  - evidence:
    - [registerTool @ index.ts:30](https://github.com/androidStern-personal/openclaw-mcp-adapter/blob/5434ce21ac780a46a493c8125e52e80a03dd2640/index.ts#L30)

- 🟡 P2 **memory-tencentdb** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: memory-tencentdb: cold import requires isolated dependency installation
  - state: open · compat:none
  - evidence:
    - @node-rs/jieba @ plugins/memory-tencentdb/.crabpot-package/package.json
    - @tencentdb-agent-memory/tcvdb-text @ plugins/memory-tencentdb/.crabpot-package/package.json
    - json5 @ plugins/memory-tencentdb/.crabpot-package/package.json
    - sqlite-vec @ plugins/memory-tencentdb/.crabpot-package/package.json
    - undici @ plugins/memory-tencentdb/.crabpot-package/package.json
    - node-llama-cpp @ plugins/memory-tencentdb/.crabpot-package/package.json
    - openclaw @ plugins/memory-tencentdb/.crabpot-package/package.json

- 🟡 P2 **memory-tencentdb** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: memory-tencentdb: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - extension:plugins/memory-tencentdb/.crabpot-package/index.ts

- 🟡 P2 **memory-tencentdb** `inspector-gap` `inspector-follow-up`
  - **runtime-tool-capture**: memory-tencentdb: runtime tool schema needs registration capture
  - state: open · compat:none
  - evidence:
    - registerTool @ plugins/memory-tencentdb/.crabpot-package/index.ts:268
    - registerTool @ plugins/memory-tencentdb/.crabpot-package/index.ts:365

- 🟡 P2 **memos-cloud** `deprecation-warning` `core-compat-adapter`
  - **legacy-before-agent-start**: memos-cloud: legacy before_agent_start hook compatibility is still used
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [before_agent_start @ index.js:481](https://github.com/MemTensor/MemOS-Cloud-OpenClaw-Plugin/blob/03fcc33c5fd285971d4b3dbaa8bbb31cb727db7c/index.js#L481)

- 🟡 P2 **memos-cloud** `upstream-metadata` `plugin-upstream-fix`
  - **manifest-unknown-fields**: memos-cloud: manifest uses unsupported top-level fields
  - state: open · compat:none
  - evidence:
    - [main @ openclaw.plugin.json](https://github.com/MemTensor/MemOS-Cloud-OpenClaw-Plugin/blob/03fcc33c5fd285971d4b3dbaa8bbb31cb727db7c/openclaw.plugin.json)

- 🟡 P2 **memos-cloud** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: memos-cloud: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - [package.json](https://github.com/MemTensor/MemOS-Cloud-OpenClaw-Plugin/blob/03fcc33c5fd285971d4b3dbaa8bbb31cb727db7c/package.json)

- 🟡 P2 **memu-engine** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: memu-engine: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [openclaw/plugin-sdk @ index.ts:1](https://github.com/duxiaoxiong/memu-engine-for-OpenClaw/blob/a5a22c5faf21e30d17a1b47635829e7dd0728ae5/index.ts#L1)

- 🟡 P2 **memu-engine** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: memu-engine: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - [package.json](https://github.com/duxiaoxiong/memu-engine-for-OpenClaw/blob/a5a22c5faf21e30d17a1b47635829e7dd0728ae5/package.json)

- 🟡 P2 **memu-engine** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: memu-engine: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/duxiaoxiong/memu-engine-for-OpenClaw/blob/a5a22c5faf21e30d17a1b47635829e7dd0728ae5/index.ts)

- 🟡 P2 **memu-engine** `inspector-gap` `inspector-follow-up`
  - **runtime-tool-capture**: memu-engine: runtime tool schema needs registration capture
  - state: open · compat:none
  - evidence:
    - [registerTool @ index.ts:1252](https://github.com/duxiaoxiong/memu-engine-for-OpenClaw/blob/a5a22c5faf21e30d17a1b47635829e7dd0728ae5/index.ts#L1252)

- 🟡 P2 **mocrane-wecom** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: mocrane-wecom: channel runtime needs envelope/config probes
  - state: open · compat:none
  - evidence:
    - [registerChannel @ index.ts:31](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/index.ts#L31)

- 🟡 P2 **mocrane-wecom** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: mocrane-wecom: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [openclaw/plugin-sdk @ index.ts:1](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/index.ts#L1)
    - [openclaw/plugin-sdk @ accounts.ts:1](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/src/accounts.ts#L1)
    - [openclaw/plugin-sdk @ handler.ts:9](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/src/agent/handler.ts#L9)
    - [openclaw/plugin-sdk @ channel.ts:5](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/src/channel.ts#L5)
    - [openclaw/plugin-sdk @ plugin-sdk-shim.ts:17](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/src/compat/plugin-sdk-shim.ts#L17)
    - [openclaw/plugin-sdk @ plugin-sdk-shim.ts:18](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/src/compat/plugin-sdk-shim.ts#L18)
    - [openclaw/plugin-sdk @ plugin-sdk-shim.ts:19](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/src/compat/plugin-sdk-shim.ts#L19)
    - [openclaw/plugin-sdk @ plugin-sdk-shim.ts:20](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/src/compat/plugin-sdk-shim.ts#L20)
    - [openclaw/plugin-sdk @ plugin-sdk-shim.ts:21](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/src/compat/plugin-sdk-shim.ts#L21)
    - [openclaw/plugin-sdk @ plugin-sdk-shim.ts:22](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/src/compat/plugin-sdk-shim.ts#L22)
    - [openclaw/plugin-sdk @ plugin-sdk-shim.ts:23](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/src/compat/plugin-sdk-shim.ts#L23)
    - [openclaw/plugin-sdk @ plugin-sdk-shim.ts:27](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/src/compat/plugin-sdk-shim.ts#L27)
    - [openclaw/plugin-sdk @ plugin-sdk-shim.ts:30](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/src/compat/plugin-sdk-shim.ts#L30)
    - [openclaw/plugin-sdk @ accounts.ts:5](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/src/config/accounts.ts#L5)
    - [openclaw/plugin-sdk @ media.ts:1](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/src/config/media.ts#L1)
    - [openclaw/plugin-sdk @ network.ts:1](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/src/config/network.ts#L1)
    - [openclaw/plugin-sdk @ routing.ts:1](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/src/config/routing.ts#L1)
    - [openclaw/plugin-sdk @ dynamic-agent.ts:8](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/src/dynamic-agent.ts#L8)
    - [openclaw/plugin-sdk @ gateway-monitor.ts:5](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/src/gateway-monitor.ts#L5)
    - [openclaw/plugin-sdk @ monitor.ts:6](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/src/monitor.ts#L6)
    - [openclaw/plugin-sdk @ types.ts:2](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/src/monitor/types.ts#L2)
    - [openclaw/plugin-sdk @ onboarding.ts:9](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/src/onboarding.ts#L9)
    - [openclaw/plugin-sdk @ outbound.ts:1](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/src/outbound.ts#L1)
    - [openclaw/plugin-sdk @ runtime.ts:1](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/src/runtime.ts#L1)
    - [openclaw/plugin-sdk @ command-auth.ts:1](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/src/shared/command-auth.ts#L1)
    - [openclaw/plugin-sdk @ ws-adapter.ts:14](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/src/ws-adapter.ts#L14)

- 🟡 P2 **mocrane-wecom** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: mocrane-wecom: cold import requires isolated dependency installation
  - state: open · compat:none
  - evidence:
    - [@wecom/aibot-node-sdk @ package.json](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/package.json)
    - [fast-xml-parser @ package.json](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/package.json)
    - [file-type @ package.json](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/package.json)
    - [undici @ package.json](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/package.json)
    - [zod @ package.json](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/package.json)
    - [openclaw @ package.json](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/package.json)

- 🟡 P2 **mocrane-wecom** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: mocrane-wecom: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - [package.json](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/package.json)

- 🟡 P2 **mocrane-wecom** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: mocrane-wecom: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/index.ts)

- 🟡 P2 **mocrane-wecom** `inspector-gap` `inspector-follow-up`
  - **runtime-tool-capture**: mocrane-wecom: runtime tool schema needs registration capture
  - state: open · compat:none
  - evidence:
    - [registerTool @ index.ts:43](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/index.ts#L43)

- 🟡 P2 **openclaw-weixin** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: openclaw-weixin: channel runtime needs envelope/config probes
  - state: open · compat:none
  - evidence:
    - registerChannel @ plugins/openclaw-weixin/.crabpot-package/index.ts:22

- 🟡 P2 **openclaw-weixin** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: openclaw-weixin: cold import requires isolated dependency installation
  - state: open · compat:none
  - evidence:
    - qrcode-terminal @ plugins/openclaw-weixin/.crabpot-package/package.json
    - zod @ plugins/openclaw-weixin/.crabpot-package/package.json

- 🟡 P2 **openclaw-weixin** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: openclaw-weixin: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - plugins/openclaw-weixin/.crabpot-package/package.json

- 🟡 P2 **openclaw-weixin** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: openclaw-weixin: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - extension:plugins/openclaw-weixin/.crabpot-package/index.ts

- 🟡 P2 **opik-openclaw** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: opik-openclaw: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [openclaw/plugin-sdk @ index.ts:1](https://github.com/comet-ml/opik-openclaw/blob/f8987269d3f2121f52ace4f60c80629266c0dfd7/index.ts#L1)
    - [openclaw/plugin-sdk @ index.ts:2](https://github.com/comet-ml/opik-openclaw/blob/f8987269d3f2121f52ace4f60c80629266c0dfd7/index.ts#L2)
    - [openclaw/plugin-sdk @ cli.ts:1](https://github.com/comet-ml/opik-openclaw/blob/f8987269d3f2121f52ace4f60c80629266c0dfd7/src/cli.ts#L1)
    - [openclaw/plugin-sdk @ configure.ts:2](https://github.com/comet-ml/opik-openclaw/blob/f8987269d3f2121f52ace4f60c80629266c0dfd7/src/configure.ts#L2)
    - [openclaw/plugin-sdk @ service.ts:5](https://github.com/comet-ml/opik-openclaw/blob/f8987269d3f2121f52ace4f60c80629266c0dfd7/src/service.ts#L5)
    - [openclaw/plugin-sdk @ service.ts:6](https://github.com/comet-ml/opik-openclaw/blob/f8987269d3f2121f52ace4f60c80629266c0dfd7/src/service.ts#L6)
    - [openclaw/plugin-sdk @ llm.ts:1](https://github.com/comet-ml/opik-openclaw/blob/f8987269d3f2121f52ace4f60c80629266c0dfd7/src/service/hooks/llm.ts#L1)
    - [openclaw/plugin-sdk @ subagent.ts:1](https://github.com/comet-ml/opik-openclaw/blob/f8987269d3f2121f52ace4f60c80629266c0dfd7/src/service/hooks/subagent.ts#L1)
    - [openclaw/plugin-sdk @ tool.ts:1](https://github.com/comet-ml/opik-openclaw/blob/f8987269d3f2121f52ace4f60c80629266c0dfd7/src/service/hooks/tool.ts#L1)

- 🟡 P2 **opik-openclaw** `inspector-gap` `inspector-follow-up`
  - **package-build-artifact-entrypoint**: opik-openclaw: cold import requires package build output
  - state: open · compat:none
  - evidence:
    - [runtimeExtension:./dist/index.js @ index.js](https://github.com/comet-ml/opik-openclaw/blob/f8987269d3f2121f52ace4f60c80629266c0dfd7/dist/index.js)

- 🟡 P2 **opik-openclaw** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: opik-openclaw: cold import requires isolated dependency installation
  - state: open · compat:none
  - evidence:
    - [@clack/prompts @ package.json](https://github.com/comet-ml/opik-openclaw/blob/f8987269d3f2121f52ace4f60c80629266c0dfd7/package.json)
    - [opik @ package.json](https://github.com/comet-ml/opik-openclaw/blob/f8987269d3f2121f52ace4f60c80629266c0dfd7/package.json)
    - [zod @ package.json](https://github.com/comet-ml/opik-openclaw/blob/f8987269d3f2121f52ace4f60c80629266c0dfd7/package.json)
    - [openclaw @ package.json](https://github.com/comet-ml/opik-openclaw/blob/f8987269d3f2121f52ace4f60c80629266c0dfd7/package.json)

- 🟡 P2 **opik-openclaw** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: opik-openclaw: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/comet-ml/opik-openclaw/blob/f8987269d3f2121f52ace4f60c80629266c0dfd7/index.ts)

- 🟡 P2 **qqbot** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: qqbot: channel runtime needs envelope/config probes
  - state: open · compat:none
  - evidence:
    - [registerChannel @ index.ts:16](https://github.com/tencent-connect/openclaw-qqbot/blob/3eee78922ed0b19af5c4c55f1dfe7d1c848e31f5/index.ts#L16)

- 🟡 P2 **qqbot** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: qqbot: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [openclaw/plugin-sdk @ index.ts:1](https://github.com/tencent-connect/openclaw-qqbot/blob/3eee78922ed0b19af5c4c55f1dfe7d1c848e31f5/index.ts#L1)
    - [openclaw/plugin-sdk @ index.ts:2](https://github.com/tencent-connect/openclaw-qqbot/blob/3eee78922ed0b19af5c4c55f1dfe7d1c848e31f5/index.ts#L2)
    - [openclaw/plugin-sdk @ approval-handler.ts:12](https://github.com/tencent-connect/openclaw-qqbot/blob/3eee78922ed0b19af5c4c55f1dfe7d1c848e31f5/src/approval-handler.ts#L12)
    - [openclaw/plugin-sdk @ config.ts:2](https://github.com/tencent-connect/openclaw-qqbot/blob/3eee78922ed0b19af5c4c55f1dfe7d1c848e31f5/src/config.ts#L2)
    - [openclaw/plugin-sdk @ onboarding.ts:13](https://github.com/tencent-connect/openclaw-qqbot/blob/3eee78922ed0b19af5c4c55f1dfe7d1c848e31f5/src/onboarding.ts#L13)
    - [openclaw/plugin-sdk @ proactive.ts:67](https://github.com/tencent-connect/openclaw-qqbot/blob/3eee78922ed0b19af5c4c55f1dfe7d1c848e31f5/src/proactive.ts#L67)
    - [openclaw/plugin-sdk @ runtime.ts:1](https://github.com/tencent-connect/openclaw-qqbot/blob/3eee78922ed0b19af5c4c55f1dfe7d1c848e31f5/src/runtime.ts#L1)
    - [openclaw/plugin-sdk @ channel.ts:1](https://github.com/tencent-connect/openclaw-qqbot/blob/3eee78922ed0b19af5c4c55f1dfe7d1c848e31f5/src/tools/channel.ts#L1)
    - [openclaw/plugin-sdk @ remind.ts:1](https://github.com/tencent-connect/openclaw-qqbot/blob/3eee78922ed0b19af5c4c55f1dfe7d1c848e31f5/src/tools/remind.ts#L1)

- 🟡 P2 **qqbot** `upstream-metadata` `plugin-upstream-fix`
  - **manifest-unknown-fields**: qqbot: manifest uses unsupported top-level fields
  - state: open · compat:none
  - evidence:
    - [capabilities @ openclaw.plugin.json](https://github.com/tencent-connect/openclaw-qqbot/blob/3eee78922ed0b19af5c4c55f1dfe7d1c848e31f5/openclaw.plugin.json)
    - [extensions @ openclaw.plugin.json](https://github.com/tencent-connect/openclaw-qqbot/blob/3eee78922ed0b19af5c4c55f1dfe7d1c848e31f5/openclaw.plugin.json)

- 🟡 P2 **qqbot** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: qqbot: cold import requires isolated dependency installation
  - state: open · compat:none
  - evidence:
    - [mpg123-decoder @ package.json](https://github.com/tencent-connect/openclaw-qqbot/blob/3eee78922ed0b19af5c4c55f1dfe7d1c848e31f5/package.json)
    - [silk-wasm @ package.json](https://github.com/tencent-connect/openclaw-qqbot/blob/3eee78922ed0b19af5c4c55f1dfe7d1c848e31f5/package.json)
    - [ws @ package.json](https://github.com/tencent-connect/openclaw-qqbot/blob/3eee78922ed0b19af5c4c55f1dfe7d1c848e31f5/package.json)
    - [openclaw @ package.json](https://github.com/tencent-connect/openclaw-qqbot/blob/3eee78922ed0b19af5c4c55f1dfe7d1c848e31f5/package.json)

- 🟡 P2 **qqbot** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: qqbot: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - [package.json](https://github.com/tencent-connect/openclaw-qqbot/blob/3eee78922ed0b19af5c4c55f1dfe7d1c848e31f5/package.json)

- 🟡 P2 **qqbot** `inspector-gap` `inspector-follow-up`
  - **runtime-tool-capture**: qqbot: runtime tool schema needs registration capture
  - state: open · compat:none
  - evidence:
    - [registerTool @ channel.ts:138](https://github.com/tencent-connect/openclaw-qqbot/blob/3eee78922ed0b19af5c4c55f1dfe7d1c848e31f5/src/tools/channel.ts#L138)
    - [registerTool @ remind.ts:222](https://github.com/tencent-connect/openclaw-qqbot/blob/3eee78922ed0b19af5c4c55f1dfe7d1c848e31f5/src/tools/remind.ts#L222)

- 🟡 P2 **secureclaw** `inspector-gap` `inspector-follow-up`
  - **package-build-artifact-entrypoint**: secureclaw: cold import requires package build output
  - state: open · compat:none
  - evidence:
    - [extension:./dist/index.js @ index.js](https://github.com/adversa-ai/secureclaw/blob/bf17e2b3deb989e348b3a98080e33a7047e90ac3/secureclaw/dist/index.js)

- 🟡 P2 **secureclaw** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: secureclaw: cold import requires isolated dependency installation
  - state: open · compat:none
  - evidence:
    - [chokidar @ package.json](https://github.com/adversa-ai/secureclaw/blob/bf17e2b3deb989e348b3a98080e33a7047e90ac3/secureclaw/package.json)
    - [node-forge @ package.json](https://github.com/adversa-ai/secureclaw/blob/bf17e2b3deb989e348b3a98080e33a7047e90ac3/secureclaw/package.json)
    - [openclaw @ package.json](https://github.com/adversa-ai/secureclaw/blob/bf17e2b3deb989e348b3a98080e33a7047e90ac3/secureclaw/package.json)

- 🟡 P2 **secureclaw** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: secureclaw: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - [package.json](https://github.com/adversa-ai/secureclaw/blob/bf17e2b3deb989e348b3a98080e33a7047e90ac3/secureclaw/package.json)

- 🟡 P2 **web-search-plus** `upstream-metadata` `plugin-upstream-fix`
  - **manifest-unknown-fields**: web-search-plus: manifest uses unsupported top-level fields
  - state: open · compat:none
  - evidence:
    - [displayName @ openclaw.plugin.json](https://github.com/robbyczgw-cla/web-search-plus-plugin/blob/6e4c765cd04eb449c806748c3130793fe0b05e5e/openclaw.plugin.json)

- 🟡 P2 **web-search-plus** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: web-search-plus: cold import requires isolated dependency installation
  - state: open · compat:none
  - evidence:
    - [openclaw @ package.json](https://github.com/robbyczgw-cla/web-search-plus-plugin/blob/6e4c765cd04eb449c806748c3130793fe0b05e5e/package.json)

- 🟡 P2 **web-search-plus** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: web-search-plus: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/robbyczgw-cla/web-search-plus-plugin/blob/6e4c765cd04eb449c806748c3130793fe0b05e5e/index.ts)

- 🟡 P2 **web-search-plus** `inspector-gap` `inspector-follow-up`
  - **runtime-tool-capture**: web-search-plus: runtime tool schema needs registration capture
  - state: open · compat:none
  - evidence:
    - [registerTool @ index.ts:815](https://github.com/robbyczgw-cla/web-search-plus-plugin/blob/6e4c765cd04eb449c806748c3130793fe0b05e5e/index.ts#L815)
    - [registerTool @ index.ts:947](https://github.com/robbyczgw-cla/web-search-plus-plugin/blob/6e4c765cd04eb449c806748c3130793fe0b05e5e/index.ts#L947)

- 🟡 P2 **wecom** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: wecom: channel runtime needs envelope/config probes
  - state: open · compat:none
  - evidence:
    - [registerChannel @ index.js:27](https://github.com/sunnoy/openclaw-plugin-wecom/blob/b7849ac055c8fa699d01b48e83cf24028907307d/index.js#L27)

- 🟡 P2 **wecom** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: wecom: cold import requires isolated dependency installation
  - state: open · compat:none
  - evidence:
    - [@wecom/aibot-node-sdk @ package.json](https://github.com/sunnoy/openclaw-plugin-wecom/blob/b7849ac055c8fa699d01b48e83cf24028907307d/package.json)
    - [file-type @ package.json](https://github.com/sunnoy/openclaw-plugin-wecom/blob/b7849ac055c8fa699d01b48e83cf24028907307d/package.json)
    - [pinyin-pro @ package.json](https://github.com/sunnoy/openclaw-plugin-wecom/blob/b7849ac055c8fa699d01b48e83cf24028907307d/package.json)
    - [openclaw @ package.json](https://github.com/sunnoy/openclaw-plugin-wecom/blob/b7849ac055c8fa699d01b48e83cf24028907307d/package.json)
    - [undici @ package.json](https://github.com/sunnoy/openclaw-plugin-wecom/blob/b7849ac055c8fa699d01b48e83cf24028907307d/package.json)

- 🟡 P2 **wecom** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: wecom: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - [package.json](https://github.com/sunnoy/openclaw-plugin-wecom/blob/b7849ac055c8fa699d01b48e83cf24028907307d/package.json)

- 🟡 P2 **wecom** `inspector-gap` `inspector-follow-up`
  - **runtime-tool-capture**: wecom: runtime tool schema needs registration capture
  - state: open · compat:none
  - evidence:
    - [registerTool @ index.js:28](https://github.com/sunnoy/openclaw-plugin-wecom/blob/b7849ac055c8fa699d01b48e83cf24028907307d/index.js#L28)
    - [registerTool @ index.js:29](https://github.com/sunnoy/openclaw-plugin-wecom/blob/b7849ac055c8fa699d01b48e83cf24028907307d/index.js#L29)
    - [registerTool @ index.js:33](https://github.com/sunnoy/openclaw-plugin-wecom/blob/b7849ac055c8fa699d01b48e83cf24028907307d/index.js#L33)

- 🟡 P2 **yuanbao** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: yuanbao: channel runtime needs envelope/config probes
  - state: open · compat:none
  - evidence:
    - registerChannel @ plugins/yuanbao/.crabpot-package/dist/index.js:29

- 🟡 P2 **yuanbao** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: yuanbao: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - openclaw/plugin-sdk @ plugins/yuanbao/.crabpot-package/dist/index.js:1

- 🟡 P2 **yuanbao** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: yuanbao: cold import requires isolated dependency installation
  - state: open · compat:none
  - evidence:
    - cos-nodejs-sdk-v5 @ plugins/yuanbao/.crabpot-package/package.json
    - protobufjs @ plugins/yuanbao/.crabpot-package/package.json
    - uuid @ plugins/yuanbao/.crabpot-package/package.json
    - ws @ plugins/yuanbao/.crabpot-package/package.json
    - openclaw @ plugins/yuanbao/.crabpot-package/package.json

- 🟡 P2 **yuanbao** `inspector-gap` `inspector-follow-up`
  - **runtime-tool-capture**: yuanbao: runtime tool schema needs registration capture
  - state: open · compat:none
  - evidence:
    - registerTool @ plugins/yuanbao/.crabpot-package/dist/src/tools/group.js:43
    - registerTool @ plugins/yuanbao/.crabpot-package/dist/src/tools/member.js:120
    - registerTool @ plugins/yuanbao/.crabpot-package/dist/src/tools/remind.js:271

## Contract Probe Backlog

- 🟠 P1 **a2a-gateway** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:a2a-gateway`
  - evidence:
    - [registerGatewayMethod @ index.ts:616](https://github.com/win4r/openclaw-a2a-gateway/blob/a335e59e926f7e1a8913e6cd7b1cbf2d44c33cb7/index.ts#L616)
    - [registerGatewayMethod @ index.ts:622](https://github.com/win4r/openclaw-a2a-gateway/blob/a335e59e926f7e1a8913e6cd7b1cbf2d44c33cb7/index.ts#L622)
    - [registerGatewayMethod @ index.ts:631](https://github.com/win4r/openclaw-a2a-gateway/blob/a335e59e926f7e1a8913e6cd7b1cbf2d44c33cb7/index.ts#L631)
    - [registerGatewayMethod @ index.ts:657](https://github.com/win4r/openclaw-a2a-gateway/blob/a335e59e926f7e1a8913e6cd7b1cbf2d44c33cb7/index.ts#L657)
    - [registerGatewayMethod @ index.ts:669](https://github.com/win4r/openclaw-a2a-gateway/blob/a335e59e926f7e1a8913e6cd7b1cbf2d44c33cb7/index.ts#L669)
    - [registerService @ index.ts:857](https://github.com/win4r/openclaw-a2a-gateway/blob/a335e59e926f7e1a8913e6cd7b1cbf2d44c33cb7/index.ts#L857)

- 🟠 P1 **clawmetry** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:clawmetry`
  - evidence:
    - [registerService @ index.ts:9](https://github.com/vivekchand/clawmetry/blob/b329bb3ed18b651d369bf35321ec58bd47dc33b4/clawhub-plugin/index.ts#L9)

- 🟠 P1 **codex-app-server** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:codex-app-server`
  - evidence:
    - [registerCommand @ index.ts:48](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/index.ts#L48)
    - [registerInteractiveHandler @ index.ts:29](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/index.ts#L29)
    - [registerInteractiveHandler @ index.ts:38](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/index.ts#L38)
    - [registerService @ index.ts:12](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/index.ts#L12)

- 🟠 P1 **connectclaw** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:connectclaw`
  - evidence:
    - [registerCommand @ commands.ts:18](https://github.com/osipov-anton/connectclaw/blob/6cd516650168890e9b850064afaaa5fe24df5950/packages/plugin/src/commands.ts#L18)
    - [registerCommand @ commands.ts:64](https://github.com/osipov-anton/connectclaw/blob/6cd516650168890e9b850064afaaa5fe24df5950/packages/plugin/src/commands.ts#L64)
    - [registerService @ hooks.ts:91](https://github.com/osipov-anton/connectclaw/blob/6cd516650168890e9b850064afaaa5fe24df5950/packages/plugin/src/hooks.ts#L91)

- 🟠 P1 **honcho** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:honcho`
  - evidence:
    - [registerMemoryPromptSection @ index.ts:97](https://github.com/plastic-labs/openclaw-honcho/blob/f1ac095b5d633d463d57c5cc9735547a73ff9199/index.ts#L97)
    - [registerMemoryRuntime @ runtime.ts:276](https://github.com/plastic-labs/openclaw-honcho/blob/f1ac095b5d633d463d57c5cc9735547a73ff9199/runtime.ts#L276)

- 🟠 P1 **hyperspell** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:hyperspell`
  - evidence:
    - [registerCommand @ slash.ts:166](https://github.com/hyperspell/hyperspell-openclaw/blob/a04d35176c4ffbe99d906f7d8075fc8671e7968d/commands/slash.ts#L166)
    - [registerCommand @ slash.ts:43](https://github.com/hyperspell/hyperspell-openclaw/blob/a04d35176c4ffbe99d906f7d8075fc8671e7968d/commands/slash.ts#L43)
    - [registerCommand @ slash.ts:98](https://github.com/hyperspell/hyperspell-openclaw/blob/a04d35176c4ffbe99d906f7d8075fc8671e7968d/commands/slash.ts#L98)
    - [registerCommand @ index.ts:46](https://github.com/hyperspell/hyperspell-openclaw/blob/a04d35176c4ffbe99d906f7d8075fc8671e7968d/index.ts#L46)
    - [registerCommand @ index.ts:57](https://github.com/hyperspell/hyperspell-openclaw/blob/a04d35176c4ffbe99d906f7d8075fc8671e7968d/index.ts#L57)
    - [registerCommand @ index.ts:68](https://github.com/hyperspell/hyperspell-openclaw/blob/a04d35176c4ffbe99d906f7d8075fc8671e7968d/index.ts#L68)
    - [registerService @ index.ts:134](https://github.com/hyperspell/hyperspell-openclaw/blob/a04d35176c4ffbe99d906f7d8075fc8671e7968d/index.ts#L134)

- 🟠 P1 **lightclawbot** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:lightclawbot`
  - evidence:
    - registerChannel @ plugins/lightclawbot/.crabpot-package/dist/index.js:13

- 🟠 P1 **lossless-claw** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:lossless-claw`
  - evidence:
    - [registerCommand @ index.ts:2009](https://github.com/Martian-Engineering/lossless-claw/blob/8d634cdf4b7544c9093c2e701fbbe5075d1e3de6/src/plugin/index.ts#L2009)
    - [registerContextEngine @ index.ts:1989](https://github.com/Martian-Engineering/lossless-claw/blob/8d634cdf4b7544c9093c2e701fbbe5075d1e3de6/src/plugin/index.ts#L1989)

- 🟠 P1 **mcp-adapter** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:mcp-adapter`
  - evidence:
    - [registerService @ index.ts:15](https://github.com/androidStern-personal/openclaw-mcp-adapter/blob/5434ce21ac780a46a493c8125e52e80a03dd2640/index.ts#L15)

- 🟠 P1 **memos-cloud** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:memos-cloud`
  - evidence:
    - [registerHook @ index.js:467](https://github.com/MemTensor/MemOS-Cloud-OpenClaw-Plugin/blob/03fcc33c5fd285971d4b3dbaa8bbb31cb727db7c/index.js#L467)

- 🟠 P1 **mocrane-wecom** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:mocrane-wecom`
  - evidence:
    - [registerChannel @ index.ts:31](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/index.ts#L31)
    - [registerHttpRoute @ index.ts:34](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/index.ts#L34)

- 🟠 P1 **openclaw-weixin** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:openclaw-weixin`
  - evidence:
    - registerChannel @ plugins/openclaw-weixin/.crabpot-package/index.ts:22

- 🟠 P1 **opik-openclaw** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:opik-openclaw`
  - evidence:
    - [registerService @ index.ts:16](https://github.com/comet-ml/opik-openclaw/blob/f8987269d3f2121f52ace4f60c80629266c0dfd7/index.ts#L16)

- 🟠 P1 **qqbot** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:qqbot`
  - evidence:
    - [registerChannel @ index.ts:16](https://github.com/tencent-connect/openclaw-qqbot/blob/3eee78922ed0b19af5c4c55f1dfe7d1c848e31f5/index.ts#L16)

- 🟠 P1 **secureclaw** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:secureclaw`
  - evidence:
    - [registerService @ index.ts:295](https://github.com/adversa-ai/secureclaw/blob/bf17e2b3deb989e348b3a98080e33a7047e90ac3/secureclaw/src/index.ts#L295)
    - [registerService @ index.ts:301](https://github.com/adversa-ai/secureclaw/blob/bf17e2b3deb989e348b3a98080e33a7047e90ac3/secureclaw/src/index.ts#L301)
    - [registerService @ index.ts:307](https://github.com/adversa-ai/secureclaw/blob/bf17e2b3deb989e348b3a98080e33a7047e90ac3/secureclaw/src/index.ts#L307)

- 🟠 P1 **wecom** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:wecom`
  - evidence:
    - [registerChannel @ index.js:27](https://github.com/sunnoy/openclaw-plugin-wecom/blob/b7849ac055c8fa699d01b48e83cf24028907307d/index.js#L27)
    - [registerHttpRoute @ index.js:45](https://github.com/sunnoy/openclaw-plugin-wecom/blob/b7849ac055c8fa699d01b48e83cf24028907307d/index.js#L45)

- 🟠 P1 **yuanbao** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:yuanbao`
  - evidence:
    - registerChannel @ plugins/yuanbao/.crabpot-package/dist/index.js:29
    - registerCommand @ plugins/yuanbao/.crabpot-package/dist/index.js:31
    - registerCommand @ plugins/yuanbao/.crabpot-package/dist/index.js:32
    - registerCommand @ plugins/yuanbao/.crabpot-package/dist/index.js:34

- 🟠 P1 **opik-openclaw** `hook-runner`
  - contract: Hook returns preserve terminal, block, and approval semantics.
  - id: `hook.before_tool_call.terminal-block-approval:opik-openclaw`
  - evidence:
    - [before_tool_call @ tool.ts:34](https://github.com/comet-ml/opik-openclaw/blob/f8987269d3f2121f52ace4f60c80629266c0dfd7/src/service/hooks/tool.ts#L34)

- 🟠 P1 **wecom** `hook-runner`
  - contract: Hook returns preserve terminal, block, and approval semantics.
  - id: `hook.before_tool_call.terminal-block-approval:wecom`
  - evidence:
    - [before_tool_call @ index.js:65](https://github.com/sunnoy/openclaw-plugin-wecom/blob/b7849ac055c8fa699d01b48e83cf24028907307d/index.js#L65)

- 🟠 P1 **honcho** `hook-runner`
  - contract: LLM observer hooks receive documented prompt/output fields with expected redaction behavior.
  - id: `hook.llm-observer.privacy-payload:honcho`
  - evidence:
    - [agent_end @ capture.ts:89](https://github.com/plastic-labs/openclaw-honcho/blob/f1ac095b5d633d463d57c5cc9735547a73ff9199/hooks/capture.ts#L89)
    - [agent_end @ subagent.ts:34](https://github.com/plastic-labs/openclaw-honcho/blob/f1ac095b5d633d463d57c5cc9735547a73ff9199/hooks/subagent.ts#L34)

- 🟠 P1 **hyperspell** `hook-runner`
  - contract: LLM observer hooks receive documented prompt/output fields with expected redaction behavior.
  - id: `hook.llm-observer.privacy-payload:hyperspell`
  - evidence:
    - [agent_end @ index.ts:105](https://github.com/hyperspell/hyperspell-openclaw/blob/a04d35176c4ffbe99d906f7d8075fc8671e7968d/index.ts#L105)
    - [agent_end @ index.ts:116](https://github.com/hyperspell/hyperspell-openclaw/blob/a04d35176c4ffbe99d906f7d8075fc8671e7968d/index.ts#L116)

- 🟠 P1 **llm-trace-phoenix** `hook-runner`
  - contract: LLM observer hooks receive documented prompt/output fields with expected redaction behavior.
  - id: `hook.llm-observer.privacy-payload:llm-trace-phoenix`
  - evidence:
    - [llm_input @ index.ts:154](https://github.com/pingshian0131/openclaw-plugin-llm-trace-phoenix/blob/05bc0f4ba67281c10fad7be356d32a54b00c59fd/index.ts#L154)
    - [llm_output @ index.ts:168](https://github.com/pingshian0131/openclaw-plugin-llm-trace-phoenix/blob/05bc0f4ba67281c10fad7be356d32a54b00c59fd/index.ts#L168)

- 🟠 P1 **memory-tencentdb** `hook-runner`
  - contract: LLM observer hooks receive documented prompt/output fields with expected redaction behavior.
  - id: `hook.llm-observer.privacy-payload:memory-tencentdb`
  - evidence:
    - agent_end @ plugins/memory-tencentdb/.crabpot-package/index.ts:820

- 🟠 P1 **memos-cloud** `hook-runner`
  - contract: LLM observer hooks receive documented prompt/output fields with expected redaction behavior.
  - id: `hook.llm-observer.privacy-payload:memos-cloud`
  - evidence:
    - [agent_end @ index.js:515](https://github.com/MemTensor/MemOS-Cloud-OpenClaw-Plugin/blob/03fcc33c5fd285971d4b3dbaa8bbb31cb727db7c/index.js#L515)

- 🟠 P1 **opik-openclaw** `hook-runner`
  - contract: LLM observer hooks receive documented prompt/output fields with expected redaction behavior.
  - id: `hook.llm-observer.privacy-payload:opik-openclaw`
  - evidence:
    - [agent_end @ service.ts:560](https://github.com/comet-ml/opik-openclaw/blob/f8987269d3f2121f52ace4f60c80629266c0dfd7/src/service.ts#L560)
    - [llm_input @ llm.ts:39](https://github.com/comet-ml/opik-openclaw/blob/f8987269d3f2121f52ace4f60c80629266c0dfd7/src/service/hooks/llm.ts#L39)
    - [llm_output @ llm.ts:150](https://github.com/comet-ml/opik-openclaw/blob/f8987269d3f2121f52ace4f60c80629266c0dfd7/src/service/hooks/llm.ts#L150)

- 🟠 P1 **codex-app-server** `sdk-alias`
  - contract: Every observed OpenClaw plugin SDK import remains exported by the target OpenClaw package.
  - id: `sdk.import.package-export-cold-import:codex-app-server`
  - evidence:
    - [openclaw/plugin-sdk/discord @ controller.ts:104](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/src/controller.ts#L104)
    - [openclaw/plugin-sdk/discord @ controller.ts:106](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/src/controller.ts#L106)
    - [openclaw/plugin-sdk/telegram-account @ controller.ts:105](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/src/controller.ts#L105)

- 🟡 P2 **agentchat** `channel-runtime`
  - contract: Channel setup, message envelope, sender metadata, and config schema remain stable.
  - id: `channel.runtime.envelope-config-metadata:agentchat`
  - evidence:
    - [defineChannelPluginEntry @ channel.ts:333](https://github.com/agentchatme/agentchat/blob/1460cece00ebd3829fb39d5db5ee23050937ed02/integrations/openclaw-channel/src/channel.ts#L333)

- 🟡 P2 **ddingtalk** `channel-runtime`
  - contract: Channel setup, message envelope, sender metadata, and config schema remain stable.
  - id: `channel.runtime.envelope-config-metadata:ddingtalk`
  - evidence:
    - [defineChannelPluginEntry @ index.ts:8](https://github.com/largezhou/openclaw-dingtalk/blob/74d22da7335f261ec5febe2663bed6b81068b7ec/index.ts#L8)

- 🟡 P2 **mocrane-wecom** `channel-runtime`
  - contract: Channel setup, message envelope, sender metadata, and config schema remain stable.
  - id: `channel.runtime.envelope-config-metadata:mocrane-wecom`
  - evidence:
    - [registerChannel @ index.ts:31](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/index.ts#L31)

- 🟡 P2 **openclaw-weixin** `channel-runtime`
  - contract: Channel setup, message envelope, sender metadata, and config schema remain stable.
  - id: `channel.runtime.envelope-config-metadata:openclaw-weixin`
  - evidence:
    - registerChannel @ plugins/openclaw-weixin/.crabpot-package/index.ts:22

- 🟡 P2 **qqbot** `channel-runtime`
  - contract: Channel setup, message envelope, sender metadata, and config schema remain stable.
  - id: `channel.runtime.envelope-config-metadata:qqbot`
  - evidence:
    - [registerChannel @ index.ts:16](https://github.com/tencent-connect/openclaw-qqbot/blob/3eee78922ed0b19af5c4c55f1dfe7d1c848e31f5/index.ts#L16)

- 🟡 P2 **wecom** `channel-runtime`
  - contract: Channel setup, message envelope, sender metadata, and config schema remain stable.
  - id: `channel.runtime.envelope-config-metadata:wecom`
  - evidence:
    - [registerChannel @ index.js:27](https://github.com/sunnoy/openclaw-plugin-wecom/blob/b7849ac055c8fa699d01b48e83cf24028907307d/index.js#L27)

- 🟡 P2 **yuanbao** `channel-runtime`
  - contract: Channel setup, message envelope, sender metadata, and config schema remain stable.
  - id: `channel.runtime.envelope-config-metadata:yuanbao`
  - evidence:
    - registerChannel @ plugins/yuanbao/.crabpot-package/dist/index.js:29

- 🟡 P2 **connectclaw** `hook-runner`
  - contract: Legacy before_agent_start remains wired until plugins migrate to before_model_resolve and before_prompt_build.
  - id: `hook.compat.before-agent-start-migration:connectclaw`
  - evidence:
    - [before_agent_start @ hooks.ts:17](https://github.com/osipov-anton/connectclaw/blob/6cd516650168890e9b850064afaaa5fe24df5950/packages/plugin/src/hooks.ts#L17)

- 🟡 P2 **honcho** `hook-runner`
  - contract: Legacy before_agent_start remains wired until plugins migrate to before_model_resolve and before_prompt_build.
  - id: `hook.compat.before-agent-start-migration:honcho`
  - evidence:
    - [before_agent_start @ subagent.ts:18](https://github.com/plastic-labs/openclaw-honcho/blob/f1ac095b5d633d463d57c5cc9735547a73ff9199/hooks/subagent.ts#L18)

- 🟡 P2 **hyperspell** `hook-runner`
  - contract: Legacy before_agent_start remains wired until plugins migrate to before_model_resolve and before_prompt_build.
  - id: `hook.compat.before-agent-start-migration:hyperspell`
  - evidence:
    - [before_agent_start @ index.ts:102](https://github.com/hyperspell/hyperspell-openclaw/blob/a04d35176c4ffbe99d906f7d8075fc8671e7968d/index.ts#L102)
    - [before_agent_start @ index.ts:111](https://github.com/hyperspell/hyperspell-openclaw/blob/a04d35176c4ffbe99d906f7d8075fc8671e7968d/index.ts#L111)

- 🟡 P2 **agentchat** `manifest-loader`
  - contract: Legacy channel env metadata continues to map into channel setup/help surfaces.
  - id: `manifest.compat.channel-env-vars:agentchat`
  - evidence:
    - agentchat

- 🟡 P2 **hasdata** `manifest-loader`
  - contract: Legacy provider auth env metadata continues to map into config/help surfaces.
  - id: `manifest.compat.provider-auth-env-vars:hasdata`
  - evidence:
    - hasdata

- 🟡 P2 **a2a-gateway** `manifest-loader`
  - contract: Manifest top-level fields are represented in target OpenClaw PluginManifest.
  - id: `manifest.schema.top-level-fields:a2a-gateway`
  - evidence:
    - [defaultConfig @ openclaw.plugin.json](https://github.com/win4r/openclaw-a2a-gateway/blob/a335e59e926f7e1a8913e6cd7b1cbf2d44c33cb7/openclaw.plugin.json)

- 🟡 P2 **agentchat** `manifest-loader`
  - contract: Manifest top-level fields are represented in target OpenClaw PluginManifest.
  - id: `manifest.schema.top-level-fields:agentchat`
  - evidence:
    - [displayName @ openclaw.plugin.json](https://github.com/agentchatme/agentchat/blob/1460cece00ebd3829fb39d5db5ee23050937ed02/integrations/openclaw-channel/openclaw.plugin.json)
    - [homepage @ openclaw.plugin.json](https://github.com/agentchatme/agentchat/blob/1460cece00ebd3829fb39d5db5ee23050937ed02/integrations/openclaw-channel/openclaw.plugin.json)
    - [icon @ openclaw.plugin.json](https://github.com/agentchatme/agentchat/blob/1460cece00ebd3829fb39d5db5ee23050937ed02/integrations/openclaw-channel/openclaw.plugin.json)

- 🟡 P2 **qqbot** `manifest-loader`
  - contract: Manifest top-level fields are represented in target OpenClaw PluginManifest.
  - id: `manifest.schema.top-level-fields:qqbot`
  - evidence:
    - [capabilities @ openclaw.plugin.json](https://github.com/tencent-connect/openclaw-qqbot/blob/3eee78922ed0b19af5c4c55f1dfe7d1c848e31f5/openclaw.plugin.json)
    - [extensions @ openclaw.plugin.json](https://github.com/tencent-connect/openclaw-qqbot/blob/3eee78922ed0b19af5c4c55f1dfe7d1c848e31f5/openclaw.plugin.json)

- 🟡 P2 **a2a-gateway** `package-loader`
  - contract: Package metadata declares the OpenClaw plugin API range used by the plugin.
  - id: `package.compat.plugin-api-range:a2a-gateway`
  - evidence:
    - [package.json](https://github.com/win4r/openclaw-a2a-gateway/blob/a335e59e926f7e1a8913e6cd7b1cbf2d44c33cb7/package.json)

- 🟡 P2 **composio** `package-loader`
  - contract: Package metadata declares the OpenClaw plugin API range used by the plugin.
  - id: `package.compat.plugin-api-range:composio`
  - evidence:
    - [package.json](https://github.com/ComposioHQ/openclaw-composio-plugin/blob/992d9576ba1b301e37dc900f3177a608936b8fbb/package.json)

- 🟡 P2 **connectclaw** `package-loader`
  - contract: Package metadata declares the OpenClaw plugin API range used by the plugin.
  - id: `package.compat.plugin-api-range:connectclaw`
  - evidence:
    - [package.json](https://github.com/osipov-anton/connectclaw/blob/6cd516650168890e9b850064afaaa5fe24df5950/packages/plugin/package.json)

- 🟡 P2 **ddingtalk** `package-loader`
  - contract: Package metadata declares the OpenClaw plugin API range used by the plugin.
  - id: `package.compat.plugin-api-range:ddingtalk`
  - evidence:
    - [package.json](https://github.com/largezhou/openclaw-dingtalk/blob/74d22da7335f261ec5febe2663bed6b81068b7ec/package.json)

- 🟡 P2 **lossless-claw** `package-loader`
  - contract: Package metadata declares the OpenClaw plugin API range used by the plugin.
  - id: `package.compat.plugin-api-range:lossless-claw`
  - evidence:
    - [package.json](https://github.com/Martian-Engineering/lossless-claw/blob/8d634cdf4b7544c9093c2e701fbbe5075d1e3de6/package.json)

- 🟡 P2 **mcp-adapter** `package-loader`
  - contract: Package metadata declares the OpenClaw plugin API range used by the plugin.
  - id: `package.compat.plugin-api-range:mcp-adapter`
  - evidence:
    - [package.json](https://github.com/androidStern-personal/openclaw-mcp-adapter/blob/5434ce21ac780a46a493c8125e52e80a03dd2640/package.json)

- 🟡 P2 **mocrane-wecom** `package-loader`
  - contract: Package metadata declares the OpenClaw plugin API range used by the plugin.
  - id: `package.compat.plugin-api-range:mocrane-wecom`
  - evidence:
    - [package.json](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/package.json)

- 🟡 P2 **openclaw-weixin** `package-loader`
  - contract: Package metadata declares the OpenClaw plugin API range used by the plugin.
  - id: `package.compat.plugin-api-range:openclaw-weixin`
  - evidence:
    - plugins/openclaw-weixin/.crabpot-package/package.json

- 🟡 P2 **qqbot** `package-loader`
  - contract: Package metadata declares the OpenClaw plugin API range used by the plugin.
  - id: `package.compat.plugin-api-range:qqbot`
  - evidence:
    - [package.json](https://github.com/tencent-connect/openclaw-qqbot/blob/3eee78922ed0b19af5c4c55f1dfe7d1c848e31f5/package.json)

- 🟡 P2 **wecom** `package-loader`
  - contract: Package metadata declares the OpenClaw plugin API range used by the plugin.
  - id: `package.compat.plugin-api-range:wecom`
  - evidence:
    - [package.json](https://github.com/sunnoy/openclaw-plugin-wecom/blob/b7849ac055c8fa699d01b48e83cf24028907307d/package.json)

- 🟡 P2 **agentchat** `package-loader`
  - contract: Inspector can build or resolve source aliases before cold importing package entrypoints.
  - id: `package.entrypoint.build-before-cold-import:agentchat`
  - evidence:
    - [extension:./dist/index.js @ index.js](https://github.com/agentchatme/agentchat/blob/1460cece00ebd3829fb39d5db5ee23050937ed02/integrations/openclaw-channel/dist/index.js)
    - [setupEntry:./dist/setup-entry.js @ setup-entry.js](https://github.com/agentchatme/agentchat/blob/1460cece00ebd3829fb39d5db5ee23050937ed02/integrations/openclaw-channel/dist/setup-entry.js)

- 🟡 P2 **honcho** `package-loader`
  - contract: Inspector can build or resolve source aliases before cold importing package entrypoints.
  - id: `package.entrypoint.build-before-cold-import:honcho`
  - evidence:
    - [extension:./dist/index.js @ index.js](https://github.com/plastic-labs/openclaw-honcho/blob/f1ac095b5d633d463d57c5cc9735547a73ff9199/dist/index.js)

- 🟡 P2 **lossless-claw** `package-loader`
  - contract: Inspector can build or resolve source aliases before cold importing package entrypoints.
  - id: `package.entrypoint.build-before-cold-import:lossless-claw`
  - evidence:
    - [extension:./dist/index.js @ index.js](https://github.com/Martian-Engineering/lossless-claw/blob/8d634cdf4b7544c9093c2e701fbbe5075d1e3de6/dist/index.js)

- 🟡 P2 **opik-openclaw** `package-loader`
  - contract: Inspector can build or resolve source aliases before cold importing package entrypoints.
  - id: `package.entrypoint.build-before-cold-import:opik-openclaw`
  - evidence:
    - [runtimeExtension:./dist/index.js @ index.js](https://github.com/comet-ml/opik-openclaw/blob/f8987269d3f2121f52ace4f60c80629266c0dfd7/dist/index.js)

- 🟡 P2 **a2a-gateway** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:a2a-gateway`
  - evidence:
    - [@a2a-js/sdk @ package.json](https://github.com/win4r/openclaw-a2a-gateway/blob/a335e59e926f7e1a8913e6cd7b1cbf2d44c33cb7/package.json)
    - [@bufbuild/protobuf @ package.json](https://github.com/win4r/openclaw-a2a-gateway/blob/a335e59e926f7e1a8913e6cd7b1cbf2d44c33cb7/package.json)
    - [@grpc/grpc-js @ package.json](https://github.com/win4r/openclaw-a2a-gateway/blob/a335e59e926f7e1a8913e6cd7b1cbf2d44c33cb7/package.json)
    - [express @ package.json](https://github.com/win4r/openclaw-a2a-gateway/blob/a335e59e926f7e1a8913e6cd7b1cbf2d44c33cb7/package.json)
    - [multicast-dns @ package.json](https://github.com/win4r/openclaw-a2a-gateway/blob/a335e59e926f7e1a8913e6cd7b1cbf2d44c33cb7/package.json)
    - [uuid @ package.json](https://github.com/win4r/openclaw-a2a-gateway/blob/a335e59e926f7e1a8913e6cd7b1cbf2d44c33cb7/package.json)
    - [ws @ package.json](https://github.com/win4r/openclaw-a2a-gateway/blob/a335e59e926f7e1a8913e6cd7b1cbf2d44c33cb7/package.json)

- 🟡 P2 **agentchat** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:agentchat`
  - evidence:
    - [@agentchatme/agentchat @ package.json](https://github.com/agentchatme/agentchat/blob/1460cece00ebd3829fb39d5db5ee23050937ed02/integrations/openclaw-channel/package.json)
    - [@sinclair/typebox @ package.json](https://github.com/agentchatme/agentchat/blob/1460cece00ebd3829fb39d5db5ee23050937ed02/integrations/openclaw-channel/package.json)
    - [pino @ package.json](https://github.com/agentchatme/agentchat/blob/1460cece00ebd3829fb39d5db5ee23050937ed02/integrations/openclaw-channel/package.json)
    - [ws @ package.json](https://github.com/agentchatme/agentchat/blob/1460cece00ebd3829fb39d5db5ee23050937ed02/integrations/openclaw-channel/package.json)
    - [zod @ package.json](https://github.com/agentchatme/agentchat/blob/1460cece00ebd3829fb39d5db5ee23050937ed02/integrations/openclaw-channel/package.json)
    - [openclaw @ package.json](https://github.com/agentchatme/agentchat/blob/1460cece00ebd3829fb39d5db5ee23050937ed02/integrations/openclaw-channel/package.json)

- 🟡 P2 **composio** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:composio`
  - evidence:
    - [@modelcontextprotocol/sdk @ package.json](https://github.com/ComposioHQ/openclaw-composio-plugin/blob/992d9576ba1b301e37dc900f3177a608936b8fbb/package.json)
    - [zod @ package.json](https://github.com/ComposioHQ/openclaw-composio-plugin/blob/992d9576ba1b301e37dc900f3177a608936b8fbb/package.json)

- 🟡 P2 **connectclaw** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:connectclaw`
  - evidence:
    - [openclaw @ package.json](https://github.com/osipov-anton/connectclaw/blob/6cd516650168890e9b850064afaaa5fe24df5950/packages/plugin/package.json)

- 🟡 P2 **ddingtalk** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:ddingtalk`
  - evidence:
    - [dingtalk-stream @ package.json](https://github.com/largezhou/openclaw-dingtalk/blob/74d22da7335f261ec5febe2663bed6b81068b7ec/package.json)
    - [zod @ package.json](https://github.com/largezhou/openclaw-dingtalk/blob/74d22da7335f261ec5febe2663bed6b81068b7ec/package.json)
    - [openclaw @ package.json](https://github.com/largezhou/openclaw-dingtalk/blob/74d22da7335f261ec5febe2663bed6b81068b7ec/package.json)

- 🟡 P2 **hasdata** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:hasdata`
  - evidence:
    - [@sinclair/typebox @ package.json](https://github.com/HasData/hasdata-openclaw-plugin/blob/bed32d8a0359392b7c4628f12b909b6e204c8426/package.json)
    - [openclaw @ package.json](https://github.com/HasData/hasdata-openclaw-plugin/blob/bed32d8a0359392b7c4628f12b909b6e204c8426/package.json)

- 🟡 P2 **honcho** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:honcho`
  - evidence:
    - [@honcho-ai/sdk @ package.json](https://github.com/plastic-labs/openclaw-honcho/blob/f1ac095b5d633d463d57c5cc9735547a73ff9199/package.json)
    - [@sinclair/typebox @ package.json](https://github.com/plastic-labs/openclaw-honcho/blob/f1ac095b5d633d463d57c5cc9735547a73ff9199/package.json)
    - [openclaw @ package.json](https://github.com/plastic-labs/openclaw-honcho/blob/f1ac095b5d633d463d57c5cc9735547a73ff9199/package.json)

- 🟡 P2 **hyperspell** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:hyperspell`
  - evidence:
    - [@clack/prompts @ package.json](https://github.com/hyperspell/hyperspell-openclaw/blob/a04d35176c4ffbe99d906f7d8075fc8671e7968d/package.json)
    - [@sinclair/typebox @ package.json](https://github.com/hyperspell/hyperspell-openclaw/blob/a04d35176c4ffbe99d906f7d8075fc8671e7968d/package.json)
    - [hyperspell @ package.json](https://github.com/hyperspell/hyperspell-openclaw/blob/a04d35176c4ffbe99d906f7d8075fc8671e7968d/package.json)
    - [openclaw @ package.json](https://github.com/hyperspell/hyperspell-openclaw/blob/a04d35176c4ffbe99d906f7d8075fc8671e7968d/package.json)

- 🟡 P2 **lossless-claw** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:lossless-claw`
  - evidence:
    - [@mariozechner/pi-agent-core @ package.json](https://github.com/Martian-Engineering/lossless-claw/blob/8d634cdf4b7544c9093c2e701fbbe5075d1e3de6/package.json)
    - [@mariozechner/pi-ai @ package.json](https://github.com/Martian-Engineering/lossless-claw/blob/8d634cdf4b7544c9093c2e701fbbe5075d1e3de6/package.json)
    - [@mariozechner/pi-coding-agent @ package.json](https://github.com/Martian-Engineering/lossless-claw/blob/8d634cdf4b7544c9093c2e701fbbe5075d1e3de6/package.json)
    - [@sinclair/typebox @ package.json](https://github.com/Martian-Engineering/lossless-claw/blob/8d634cdf4b7544c9093c2e701fbbe5075d1e3de6/package.json)
    - [openclaw @ package.json](https://github.com/Martian-Engineering/lossless-claw/blob/8d634cdf4b7544c9093c2e701fbbe5075d1e3de6/package.json)

- 🟡 P2 **mcp-adapter** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:mcp-adapter`
  - evidence:
    - [@modelcontextprotocol/sdk @ package.json](https://github.com/androidStern-personal/openclaw-mcp-adapter/blob/5434ce21ac780a46a493c8125e52e80a03dd2640/package.json)

- 🟡 P2 **memory-tencentdb** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:memory-tencentdb`
  - evidence:
    - @node-rs/jieba @ plugins/memory-tencentdb/.crabpot-package/package.json
    - @tencentdb-agent-memory/tcvdb-text @ plugins/memory-tencentdb/.crabpot-package/package.json
    - json5 @ plugins/memory-tencentdb/.crabpot-package/package.json
    - sqlite-vec @ plugins/memory-tencentdb/.crabpot-package/package.json
    - undici @ plugins/memory-tencentdb/.crabpot-package/package.json
    - node-llama-cpp @ plugins/memory-tencentdb/.crabpot-package/package.json
    - openclaw @ plugins/memory-tencentdb/.crabpot-package/package.json

- 🟡 P2 **mocrane-wecom** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:mocrane-wecom`
  - evidence:
    - [@wecom/aibot-node-sdk @ package.json](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/package.json)
    - [fast-xml-parser @ package.json](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/package.json)
    - [file-type @ package.json](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/package.json)
    - [undici @ package.json](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/package.json)
    - [zod @ package.json](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/package.json)
    - [openclaw @ package.json](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/package.json)

- 🟡 P2 **openclaw-weixin** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:openclaw-weixin`
  - evidence:
    - qrcode-terminal @ plugins/openclaw-weixin/.crabpot-package/package.json
    - zod @ plugins/openclaw-weixin/.crabpot-package/package.json

- 🟡 P2 **opik-openclaw** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:opik-openclaw`
  - evidence:
    - [@clack/prompts @ package.json](https://github.com/comet-ml/opik-openclaw/blob/f8987269d3f2121f52ace4f60c80629266c0dfd7/package.json)
    - [opik @ package.json](https://github.com/comet-ml/opik-openclaw/blob/f8987269d3f2121f52ace4f60c80629266c0dfd7/package.json)
    - [zod @ package.json](https://github.com/comet-ml/opik-openclaw/blob/f8987269d3f2121f52ace4f60c80629266c0dfd7/package.json)
    - [openclaw @ package.json](https://github.com/comet-ml/opik-openclaw/blob/f8987269d3f2121f52ace4f60c80629266c0dfd7/package.json)

- 🟡 P2 **qqbot** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:qqbot`
  - evidence:
    - [mpg123-decoder @ package.json](https://github.com/tencent-connect/openclaw-qqbot/blob/3eee78922ed0b19af5c4c55f1dfe7d1c848e31f5/package.json)
    - [silk-wasm @ package.json](https://github.com/tencent-connect/openclaw-qqbot/blob/3eee78922ed0b19af5c4c55f1dfe7d1c848e31f5/package.json)
    - [ws @ package.json](https://github.com/tencent-connect/openclaw-qqbot/blob/3eee78922ed0b19af5c4c55f1dfe7d1c848e31f5/package.json)
    - [openclaw @ package.json](https://github.com/tencent-connect/openclaw-qqbot/blob/3eee78922ed0b19af5c4c55f1dfe7d1c848e31f5/package.json)

- 🟡 P2 **wecom** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:wecom`
  - evidence:
    - [@wecom/aibot-node-sdk @ package.json](https://github.com/sunnoy/openclaw-plugin-wecom/blob/b7849ac055c8fa699d01b48e83cf24028907307d/package.json)
    - [file-type @ package.json](https://github.com/sunnoy/openclaw-plugin-wecom/blob/b7849ac055c8fa699d01b48e83cf24028907307d/package.json)
    - [pinyin-pro @ package.json](https://github.com/sunnoy/openclaw-plugin-wecom/blob/b7849ac055c8fa699d01b48e83cf24028907307d/package.json)
    - [openclaw @ package.json](https://github.com/sunnoy/openclaw-plugin-wecom/blob/b7849ac055c8fa699d01b48e83cf24028907307d/package.json)
    - [undici @ package.json](https://github.com/sunnoy/openclaw-plugin-wecom/blob/b7849ac055c8fa699d01b48e83cf24028907307d/package.json)

- 🟡 P2 **yuanbao** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:yuanbao`
  - evidence:
    - cos-nodejs-sdk-v5 @ plugins/yuanbao/.crabpot-package/package.json
    - protobufjs @ plugins/yuanbao/.crabpot-package/package.json
    - uuid @ plugins/yuanbao/.crabpot-package/package.json
    - ws @ plugins/yuanbao/.crabpot-package/package.json
    - openclaw @ plugins/yuanbao/.crabpot-package/package.json

- 🟡 P2 **a2a-gateway** `package-loader`
  - contract: Inspector can compile or load TypeScript source entrypoints before registration capture.
  - id: `package.entrypoint.typescript-loader:a2a-gateway`
  - evidence:
    - [extension @ index.ts](https://github.com/win4r/openclaw-a2a-gateway/blob/a335e59e926f7e1a8913e6cd7b1cbf2d44c33cb7/index.ts)

- 🟡 P2 **composio** `package-loader`
  - contract: Inspector can compile or load TypeScript source entrypoints before registration capture.
  - id: `package.entrypoint.typescript-loader:composio`
  - evidence:
    - [extension @ index.ts](https://github.com/ComposioHQ/openclaw-composio-plugin/blob/992d9576ba1b301e37dc900f3177a608936b8fbb/index.ts)

- 🟡 P2 **connectclaw** `package-loader`
  - contract: Inspector can compile or load TypeScript source entrypoints before registration capture.
  - id: `package.entrypoint.typescript-loader:connectclaw`
  - evidence:
    - [extension @ index.ts](https://github.com/osipov-anton/connectclaw/blob/6cd516650168890e9b850064afaaa5fe24df5950/packages/plugin/index.ts)

- 🟡 P2 **ddingtalk** `package-loader`
  - contract: Inspector can compile or load TypeScript source entrypoints before registration capture.
  - id: `package.entrypoint.typescript-loader:ddingtalk`
  - evidence:
    - [extension @ index.ts](https://github.com/largezhou/openclaw-dingtalk/blob/74d22da7335f261ec5febe2663bed6b81068b7ec/index.ts)

- 🟡 P2 **hasdata** `package-loader`
  - contract: Inspector can compile or load TypeScript source entrypoints before registration capture.
  - id: `package.entrypoint.typescript-loader:hasdata`
  - evidence:
    - [extension @ index.ts](https://github.com/HasData/hasdata-openclaw-plugin/blob/bed32d8a0359392b7c4628f12b909b6e204c8426/src/index.ts)

- 🟡 P2 **hyperspell** `package-loader`
  - contract: Inspector can compile or load TypeScript source entrypoints before registration capture.
  - id: `package.entrypoint.typescript-loader:hyperspell`
  - evidence:
    - [extension @ index.ts](https://github.com/hyperspell/hyperspell-openclaw/blob/a04d35176c4ffbe99d906f7d8075fc8671e7968d/index.ts)

- 🟡 P2 **llm-trace-phoenix** `package-loader`
  - contract: Inspector can compile or load TypeScript source entrypoints before registration capture.
  - id: `package.entrypoint.typescript-loader:llm-trace-phoenix`
  - evidence:
    - [extension @ index.ts](https://github.com/pingshian0131/openclaw-plugin-llm-trace-phoenix/blob/05bc0f4ba67281c10fad7be356d32a54b00c59fd/index.ts)

- 🟡 P2 **mcp-adapter** `package-loader`
  - contract: Inspector can compile or load TypeScript source entrypoints before registration capture.
  - id: `package.entrypoint.typescript-loader:mcp-adapter`
  - evidence:
    - [extension @ index.ts](https://github.com/androidStern-personal/openclaw-mcp-adapter/blob/5434ce21ac780a46a493c8125e52e80a03dd2640/index.ts)

- 🟡 P2 **memory-tencentdb** `package-loader`
  - contract: Inspector can compile or load TypeScript source entrypoints before registration capture.
  - id: `package.entrypoint.typescript-loader:memory-tencentdb`
  - evidence:
    - extension:plugins/memory-tencentdb/.crabpot-package/index.ts

- 🟡 P2 **mocrane-wecom** `package-loader`
  - contract: Inspector can compile or load TypeScript source entrypoints before registration capture.
  - id: `package.entrypoint.typescript-loader:mocrane-wecom`
  - evidence:
    - [extension @ index.ts](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/index.ts)

- 🟡 P2 **openclaw-weixin** `package-loader`
  - contract: Inspector can compile or load TypeScript source entrypoints before registration capture.
  - id: `package.entrypoint.typescript-loader:openclaw-weixin`
  - evidence:
    - extension:plugins/openclaw-weixin/.crabpot-package/index.ts

- 🟡 P2 **opik-openclaw** `package-loader`
  - contract: Inspector can compile or load TypeScript source entrypoints before registration capture.
  - id: `package.entrypoint.typescript-loader:opik-openclaw`
  - evidence:
    - [extension @ index.ts](https://github.com/comet-ml/opik-openclaw/blob/f8987269d3f2121f52ace4f60c80629266c0dfd7/index.ts)

- 🟡 P2 **a2a-gateway** `package-loader`
  - contract: Package and OpenClaw manifest versions stay aligned for release compatibility reporting.
  - id: `package.metadata.version-alignment:a2a-gateway`
  - evidence:
    - package:1.4.0
    - manifest:1.3.0

- 🟡 P2 **a2a-gateway** `sdk-alias`
  - contract: Root plugin SDK barrel remains importable or has a machine-readable migration path.
  - id: `sdk.import.root-barrel-cold-import:a2a-gateway`
  - evidence:
    - [openclaw/plugin-sdk @ types.ts:14](https://github.com/win4r/openclaw-a2a-gateway/blob/a335e59e926f7e1a8913e6cd7b1cbf2d44c33cb7/src/types.ts#L14)

- 🟡 P2 **composio** `sdk-alias`
  - contract: Root plugin SDK barrel remains importable or has a machine-readable migration path.
  - id: `sdk.import.root-barrel-cold-import:composio`
  - evidence:
    - [openclaw/plugin-sdk @ index.ts:1](https://github.com/ComposioHQ/openclaw-composio-plugin/blob/992d9576ba1b301e37dc900f3177a608936b8fbb/index.ts#L1)
    - [openclaw/plugin-sdk @ cli.ts:6](https://github.com/ComposioHQ/openclaw-composio-plugin/blob/992d9576ba1b301e37dc900f3177a608936b8fbb/src/cli.ts#L6)
    - [openclaw/plugin-sdk @ client.ts:1](https://github.com/ComposioHQ/openclaw-composio-plugin/blob/992d9576ba1b301e37dc900f3177a608936b8fbb/src/client.ts#L1)
    - [openclaw/plugin-sdk @ tools.ts:1](https://github.com/ComposioHQ/openclaw-composio-plugin/blob/992d9576ba1b301e37dc900f3177a608936b8fbb/src/tools.ts#L1)

- 🟡 P2 **connectclaw** `sdk-alias`
  - contract: Root plugin SDK barrel remains importable or has a machine-readable migration path.
  - id: `sdk.import.root-barrel-cold-import:connectclaw`
  - evidence:
    - [openclaw/plugin-sdk @ index.ts:1](https://github.com/osipov-anton/connectclaw/blob/6cd516650168890e9b850064afaaa5fe24df5950/packages/plugin/index.ts#L1)
    - [openclaw/plugin-sdk @ commands.ts:1](https://github.com/osipov-anton/connectclaw/blob/6cd516650168890e9b850064afaaa5fe24df5950/packages/plugin/src/commands.ts#L1)
    - [openclaw/plugin-sdk @ hooks.ts:1](https://github.com/osipov-anton/connectclaw/blob/6cd516650168890e9b850064afaaa5fe24df5950/packages/plugin/src/hooks.ts#L1)
    - [openclaw/plugin-sdk @ tools.ts:1](https://github.com/osipov-anton/connectclaw/blob/6cd516650168890e9b850064afaaa5fe24df5950/packages/plugin/src/tools.ts#L1)
    - [openclaw/plugin-sdk @ tools.ts:2](https://github.com/osipov-anton/connectclaw/blob/6cd516650168890e9b850064afaaa5fe24df5950/packages/plugin/src/tools.ts#L2)

- 🟡 P2 **honcho** `sdk-alias`
  - contract: Root plugin SDK barrel remains importable or has a machine-readable migration path.
  - id: `sdk.import.root-barrel-cold-import:honcho`
  - evidence:
    - [openclaw/plugin-sdk @ cli.ts:8](https://github.com/plastic-labs/openclaw-honcho/blob/f1ac095b5d633d463d57c5cc9735547a73ff9199/commands/cli.ts#L8)
    - [openclaw/plugin-sdk @ capture.ts:2](https://github.com/plastic-labs/openclaw-honcho/blob/f1ac095b5d633d463d57c5cc9735547a73ff9199/hooks/capture.ts#L2)
    - [openclaw/plugin-sdk @ context.ts:2](https://github.com/plastic-labs/openclaw-honcho/blob/f1ac095b5d633d463d57c5cc9735547a73ff9199/hooks/context.ts#L2)
    - [openclaw/plugin-sdk @ gateway.ts:2](https://github.com/plastic-labs/openclaw-honcho/blob/f1ac095b5d633d463d57c5cc9735547a73ff9199/hooks/gateway.ts#L2)
    - [openclaw/plugin-sdk @ subagent.ts:2](https://github.com/plastic-labs/openclaw-honcho/blob/f1ac095b5d633d463d57c5cc9735547a73ff9199/hooks/subagent.ts#L2)
    - [openclaw/plugin-sdk @ state.ts:9](https://github.com/plastic-labs/openclaw-honcho/blob/f1ac095b5d633d463d57c5cc9735547a73ff9199/state.ts#L9)
    - [openclaw/plugin-sdk @ ask.ts:3](https://github.com/plastic-labs/openclaw-honcho/blob/f1ac095b5d633d463d57c5cc9735547a73ff9199/tools/ask.ts#L3)
    - [openclaw/plugin-sdk @ context.ts:3](https://github.com/plastic-labs/openclaw-honcho/blob/f1ac095b5d633d463d57c5cc9735547a73ff9199/tools/context.ts#L3)
    - [openclaw/plugin-sdk @ memory-passthrough.ts:3](https://github.com/plastic-labs/openclaw-honcho/blob/f1ac095b5d633d463d57c5cc9735547a73ff9199/tools/memory-passthrough.ts#L3)
    - [openclaw/plugin-sdk @ message-search.ts:3](https://github.com/plastic-labs/openclaw-honcho/blob/f1ac095b5d633d463d57c5cc9735547a73ff9199/tools/message-search.ts#L3)
    - [openclaw/plugin-sdk @ search.ts:3](https://github.com/plastic-labs/openclaw-honcho/blob/f1ac095b5d633d463d57c5cc9735547a73ff9199/tools/search.ts#L3)
    - [openclaw/plugin-sdk @ session.ts:3](https://github.com/plastic-labs/openclaw-honcho/blob/f1ac095b5d633d463d57c5cc9735547a73ff9199/tools/session.ts#L3)

- 🟡 P2 **hyperspell** `sdk-alias`
  - contract: Root plugin SDK barrel remains importable or has a machine-readable migration path.
  - id: `sdk.import.root-barrel-cold-import:hyperspell`
  - evidence:
    - [openclaw/plugin-sdk @ slash.ts:1](https://github.com/hyperspell/hyperspell-openclaw/blob/a04d35176c4ffbe99d906f7d8075fc8671e7968d/commands/slash.ts#L1)
    - [openclaw/plugin-sdk @ tools.ts:2](https://github.com/hyperspell/hyperspell-openclaw/blob/a04d35176c4ffbe99d906f7d8075fc8671e7968d/graph/tools.ts#L2)
    - [openclaw/plugin-sdk @ index.ts:1](https://github.com/hyperspell/hyperspell-openclaw/blob/a04d35176c4ffbe99d906f7d8075fc8671e7968d/index.ts#L1)

- 🟡 P2 **llm-trace-phoenix** `sdk-alias`
  - contract: Root plugin SDK barrel remains importable or has a machine-readable migration path.
  - id: `sdk.import.root-barrel-cold-import:llm-trace-phoenix`
  - evidence:
    - [openclaw/plugin-sdk @ index.ts:12](https://github.com/pingshian0131/openclaw-plugin-llm-trace-phoenix/blob/05bc0f4ba67281c10fad7be356d32a54b00c59fd/index.ts#L12)

- 🟡 P2 **lossless-claw** `sdk-alias`
  - contract: Root plugin SDK barrel remains importable or has a machine-readable migration path.
  - id: `sdk.import.root-barrel-cold-import:lossless-claw`
  - evidence:
    - [openclaw/plugin-sdk @ assembler.ts:2](https://github.com/Martian-Engineering/lossless-claw/blob/8d634cdf4b7544c9093c2e701fbbe5075d1e3de6/src/assembler.ts#L2)
    - [openclaw/plugin-sdk @ engine.ts:19](https://github.com/Martian-Engineering/lossless-claw/blob/8d634cdf4b7544c9093c2e701fbbe5075d1e3de6/src/engine.ts#L19)
    - [openclaw/plugin-sdk @ lcm-log.ts:1](https://github.com/Martian-Engineering/lossless-claw/blob/8d634cdf4b7544c9093c2e701fbbe5075d1e3de6/src/lcm-log.ts#L1)
    - [openclaw/plugin-sdk @ openclaw-bridge.ts:17](https://github.com/Martian-Engineering/lossless-claw/blob/8d634cdf4b7544c9093c2e701fbbe5075d1e3de6/src/openclaw-bridge.ts#L17)
    - [openclaw/plugin-sdk @ openclaw-bridge.ts:22](https://github.com/Martian-Engineering/lossless-claw/blob/8d634cdf4b7544c9093c2e701fbbe5075d1e3de6/src/openclaw-bridge.ts#L22)
    - [openclaw/plugin-sdk @ index.ts:10](https://github.com/Martian-Engineering/lossless-claw/blob/8d634cdf4b7544c9093c2e701fbbe5075d1e3de6/src/plugin/index.ts#L10)
    - [openclaw/plugin-sdk @ lcm-command.ts:9](https://github.com/Martian-Engineering/lossless-claw/blob/8d634cdf4b7544c9093c2e701fbbe5075d1e3de6/src/plugin/lcm-command.ts#L9)
    - [openclaw/plugin-sdk @ common.ts:1](https://github.com/Martian-Engineering/lossless-claw/blob/8d634cdf4b7544c9093c2e701fbbe5075d1e3de6/src/tools/common.ts#L1)

- 🟡 P2 **mocrane-wecom** `sdk-alias`
  - contract: Root plugin SDK barrel remains importable or has a machine-readable migration path.
  - id: `sdk.import.root-barrel-cold-import:mocrane-wecom`
  - evidence:
    - [openclaw/plugin-sdk @ index.ts:1](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/index.ts#L1)
    - [openclaw/plugin-sdk @ accounts.ts:1](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/src/accounts.ts#L1)
    - [openclaw/plugin-sdk @ handler.ts:9](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/src/agent/handler.ts#L9)
    - [openclaw/plugin-sdk @ channel.ts:5](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/src/channel.ts#L5)
    - [openclaw/plugin-sdk @ plugin-sdk-shim.ts:17](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/src/compat/plugin-sdk-shim.ts#L17)
    - [openclaw/plugin-sdk @ plugin-sdk-shim.ts:18](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/src/compat/plugin-sdk-shim.ts#L18)
    - [openclaw/plugin-sdk @ plugin-sdk-shim.ts:19](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/src/compat/plugin-sdk-shim.ts#L19)
    - [openclaw/plugin-sdk @ plugin-sdk-shim.ts:20](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/src/compat/plugin-sdk-shim.ts#L20)
    - [openclaw/plugin-sdk @ plugin-sdk-shim.ts:21](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/src/compat/plugin-sdk-shim.ts#L21)
    - [openclaw/plugin-sdk @ plugin-sdk-shim.ts:22](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/src/compat/plugin-sdk-shim.ts#L22)
    - [openclaw/plugin-sdk @ plugin-sdk-shim.ts:23](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/src/compat/plugin-sdk-shim.ts#L23)
    - [openclaw/plugin-sdk @ plugin-sdk-shim.ts:27](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/src/compat/plugin-sdk-shim.ts#L27)
    - [openclaw/plugin-sdk @ plugin-sdk-shim.ts:30](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/src/compat/plugin-sdk-shim.ts#L30)
    - [openclaw/plugin-sdk @ accounts.ts:5](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/src/config/accounts.ts#L5)
    - [openclaw/plugin-sdk @ media.ts:1](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/src/config/media.ts#L1)
    - [openclaw/plugin-sdk @ network.ts:1](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/src/config/network.ts#L1)
    - [openclaw/plugin-sdk @ routing.ts:1](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/src/config/routing.ts#L1)
    - [openclaw/plugin-sdk @ dynamic-agent.ts:8](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/src/dynamic-agent.ts#L8)
    - [openclaw/plugin-sdk @ gateway-monitor.ts:5](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/src/gateway-monitor.ts#L5)
    - [openclaw/plugin-sdk @ monitor.ts:6](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/src/monitor.ts#L6)
    - [openclaw/plugin-sdk @ types.ts:2](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/src/monitor/types.ts#L2)
    - [openclaw/plugin-sdk @ onboarding.ts:9](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/src/onboarding.ts#L9)
    - [openclaw/plugin-sdk @ outbound.ts:1](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/src/outbound.ts#L1)
    - [openclaw/plugin-sdk @ runtime.ts:1](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/src/runtime.ts#L1)
    - [openclaw/plugin-sdk @ command-auth.ts:1](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/src/shared/command-auth.ts#L1)
    - [openclaw/plugin-sdk @ ws-adapter.ts:14](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/src/ws-adapter.ts#L14)

- 🟡 P2 **opik-openclaw** `sdk-alias`
  - contract: Root plugin SDK barrel remains importable or has a machine-readable migration path.
  - id: `sdk.import.root-barrel-cold-import:opik-openclaw`
  - evidence:
    - [openclaw/plugin-sdk @ index.ts:1](https://github.com/comet-ml/opik-openclaw/blob/f8987269d3f2121f52ace4f60c80629266c0dfd7/index.ts#L1)
    - [openclaw/plugin-sdk @ index.ts:2](https://github.com/comet-ml/opik-openclaw/blob/f8987269d3f2121f52ace4f60c80629266c0dfd7/index.ts#L2)
    - [openclaw/plugin-sdk @ cli.ts:1](https://github.com/comet-ml/opik-openclaw/blob/f8987269d3f2121f52ace4f60c80629266c0dfd7/src/cli.ts#L1)
    - [openclaw/plugin-sdk @ configure.ts:2](https://github.com/comet-ml/opik-openclaw/blob/f8987269d3f2121f52ace4f60c80629266c0dfd7/src/configure.ts#L2)
    - [openclaw/plugin-sdk @ service.ts:5](https://github.com/comet-ml/opik-openclaw/blob/f8987269d3f2121f52ace4f60c80629266c0dfd7/src/service.ts#L5)
    - [openclaw/plugin-sdk @ service.ts:6](https://github.com/comet-ml/opik-openclaw/blob/f8987269d3f2121f52ace4f60c80629266c0dfd7/src/service.ts#L6)
    - [openclaw/plugin-sdk @ llm.ts:1](https://github.com/comet-ml/opik-openclaw/blob/f8987269d3f2121f52ace4f60c80629266c0dfd7/src/service/hooks/llm.ts#L1)
    - [openclaw/plugin-sdk @ subagent.ts:1](https://github.com/comet-ml/opik-openclaw/blob/f8987269d3f2121f52ace4f60c80629266c0dfd7/src/service/hooks/subagent.ts#L1)
    - [openclaw/plugin-sdk @ tool.ts:1](https://github.com/comet-ml/opik-openclaw/blob/f8987269d3f2121f52ace4f60c80629266c0dfd7/src/service/hooks/tool.ts#L1)

- 🟡 P2 **qqbot** `sdk-alias`
  - contract: Root plugin SDK barrel remains importable or has a machine-readable migration path.
  - id: `sdk.import.root-barrel-cold-import:qqbot`
  - evidence:
    - [openclaw/plugin-sdk @ index.ts:1](https://github.com/tencent-connect/openclaw-qqbot/blob/3eee78922ed0b19af5c4c55f1dfe7d1c848e31f5/index.ts#L1)
    - [openclaw/plugin-sdk @ index.ts:2](https://github.com/tencent-connect/openclaw-qqbot/blob/3eee78922ed0b19af5c4c55f1dfe7d1c848e31f5/index.ts#L2)
    - [openclaw/plugin-sdk @ approval-handler.ts:12](https://github.com/tencent-connect/openclaw-qqbot/blob/3eee78922ed0b19af5c4c55f1dfe7d1c848e31f5/src/approval-handler.ts#L12)
    - [openclaw/plugin-sdk @ config.ts:2](https://github.com/tencent-connect/openclaw-qqbot/blob/3eee78922ed0b19af5c4c55f1dfe7d1c848e31f5/src/config.ts#L2)
    - [openclaw/plugin-sdk @ onboarding.ts:13](https://github.com/tencent-connect/openclaw-qqbot/blob/3eee78922ed0b19af5c4c55f1dfe7d1c848e31f5/src/onboarding.ts#L13)
    - [openclaw/plugin-sdk @ proactive.ts:67](https://github.com/tencent-connect/openclaw-qqbot/blob/3eee78922ed0b19af5c4c55f1dfe7d1c848e31f5/src/proactive.ts#L67)
    - [openclaw/plugin-sdk @ runtime.ts:1](https://github.com/tencent-connect/openclaw-qqbot/blob/3eee78922ed0b19af5c4c55f1dfe7d1c848e31f5/src/runtime.ts#L1)
    - [openclaw/plugin-sdk @ channel.ts:1](https://github.com/tencent-connect/openclaw-qqbot/blob/3eee78922ed0b19af5c4c55f1dfe7d1c848e31f5/src/tools/channel.ts#L1)
    - [openclaw/plugin-sdk @ remind.ts:1](https://github.com/tencent-connect/openclaw-qqbot/blob/3eee78922ed0b19af5c4c55f1dfe7d1c848e31f5/src/tools/remind.ts#L1)

- 🟡 P2 **yuanbao** `sdk-alias`
  - contract: Root plugin SDK barrel remains importable or has a machine-readable migration path.
  - id: `sdk.import.root-barrel-cold-import:yuanbao`
  - evidence:
    - openclaw/plugin-sdk @ plugins/yuanbao/.crabpot-package/dist/index.js:1

- 🟡 P2 **a2a-gateway** `tool-runtime`
  - contract: Registered runtime tools expose stable names, input schemas, and result metadata.
  - id: `tool.registration.schema-capture:a2a-gateway`
  - evidence:
    - [registerTool @ index.ts:777](https://github.com/win4r/openclaw-a2a-gateway/blob/a335e59e926f7e1a8913e6cd7b1cbf2d44c33cb7/index.ts#L777)

- 🟡 P2 **composio** `tool-runtime`
  - contract: Registered runtime tools expose stable names, input schemas, and result metadata.
  - id: `tool.registration.schema-capture:composio`
  - evidence:
    - [registerTool @ tools.ts:89](https://github.com/ComposioHQ/openclaw-composio-plugin/blob/992d9576ba1b301e37dc900f3177a608936b8fbb/src/tools.ts#L89)

- 🟡 P2 **connectclaw** `tool-runtime`
  - contract: Registered runtime tools expose stable names, input schemas, and result metadata.
  - id: `tool.registration.schema-capture:connectclaw`
  - evidence:
    - [registerTool @ tools.ts:6](https://github.com/osipov-anton/connectclaw/blob/6cd516650168890e9b850064afaaa5fe24df5950/packages/plugin/src/tools.ts#L6)

- 🟡 P2 **honcho** `tool-runtime`
  - contract: Registered runtime tools expose stable names, input schemas, and result metadata.
  - id: `tool.registration.schema-capture:honcho`
  - evidence:
    - [registerTool @ ask.ts:7](https://github.com/plastic-labs/openclaw-honcho/blob/f1ac095b5d633d463d57c5cc9735547a73ff9199/tools/ask.ts#L7)
    - [registerTool @ context.ts:7](https://github.com/plastic-labs/openclaw-honcho/blob/f1ac095b5d633d463d57c5cc9735547a73ff9199/tools/context.ts#L7)
    - [registerTool @ memory-passthrough.ts:130](https://github.com/plastic-labs/openclaw-honcho/blob/f1ac095b5d633d463d57c5cc9735547a73ff9199/tools/memory-passthrough.ts#L130)
    - [registerTool @ memory-passthrough.ts:89](https://github.com/plastic-labs/openclaw-honcho/blob/f1ac095b5d633d463d57c5cc9735547a73ff9199/tools/memory-passthrough.ts#L89)
    - [registerTool @ message-search.ts:8](https://github.com/plastic-labs/openclaw-honcho/blob/f1ac095b5d633d463d57c5cc9735547a73ff9199/tools/message-search.ts#L8)
    - [registerTool @ search.ts:7](https://github.com/plastic-labs/openclaw-honcho/blob/f1ac095b5d633d463d57c5cc9735547a73ff9199/tools/search.ts#L7)
    - [registerTool @ session.ts:8](https://github.com/plastic-labs/openclaw-honcho/blob/f1ac095b5d633d463d57c5cc9735547a73ff9199/tools/session.ts#L8)

- 🟡 P2 **hyperspell** `tool-runtime`
  - contract: Registered runtime tools expose stable names, input schemas, and result metadata.
  - id: `tool.registration.schema-capture:hyperspell`
  - evidence:
    - [registerTool @ tools.ts:21](https://github.com/hyperspell/hyperspell-openclaw/blob/a04d35176c4ffbe99d906f7d8075fc8671e7968d/graph/tools.ts#L21)
    - [registerTool @ tools.ts:52](https://github.com/hyperspell/hyperspell-openclaw/blob/a04d35176c4ffbe99d906f7d8075fc8671e7968d/graph/tools.ts#L52)
    - [registerTool @ tools.ts:95](https://github.com/hyperspell/hyperspell-openclaw/blob/a04d35176c4ffbe99d906f7d8075fc8671e7968d/graph/tools.ts#L95)
    - [registerTool @ index.ts:89](https://github.com/hyperspell/hyperspell-openclaw/blob/a04d35176c4ffbe99d906f7d8075fc8671e7968d/index.ts#L89)
    - [registerTool @ index.ts:92](https://github.com/hyperspell/hyperspell-openclaw/blob/a04d35176c4ffbe99d906f7d8075fc8671e7968d/index.ts#L92)

- 🟡 P2 **lossless-claw** `tool-runtime`
  - contract: Registered runtime tools expose stable names, input schemas, and result metadata.
  - id: `tool.registration.schema-capture:lossless-claw`
  - evidence:
    - [registerTool @ index.ts:1991](https://github.com/Martian-Engineering/lossless-claw/blob/8d634cdf4b7544c9093c2e701fbbe5075d1e3de6/src/plugin/index.ts#L1991)
    - [registerTool @ index.ts:1994](https://github.com/Martian-Engineering/lossless-claw/blob/8d634cdf4b7544c9093c2e701fbbe5075d1e3de6/src/plugin/index.ts#L1994)
    - [registerTool @ index.ts:1997](https://github.com/Martian-Engineering/lossless-claw/blob/8d634cdf4b7544c9093c2e701fbbe5075d1e3de6/src/plugin/index.ts#L1997)
    - [registerTool @ index.ts:2000](https://github.com/Martian-Engineering/lossless-claw/blob/8d634cdf4b7544c9093c2e701fbbe5075d1e3de6/src/plugin/index.ts#L2000)

- 🟡 P2 **mcp-adapter** `tool-runtime`
  - contract: Registered runtime tools expose stable names, input schemas, and result metadata.
  - id: `tool.registration.schema-capture:mcp-adapter`
  - evidence:
    - [registerTool @ index.ts:30](https://github.com/androidStern-personal/openclaw-mcp-adapter/blob/5434ce21ac780a46a493c8125e52e80a03dd2640/index.ts#L30)

- 🟡 P2 **memory-tencentdb** `tool-runtime`
  - contract: Registered runtime tools expose stable names, input schemas, and result metadata.
  - id: `tool.registration.schema-capture:memory-tencentdb`
  - evidence:
    - registerTool @ plugins/memory-tencentdb/.crabpot-package/index.ts:268
    - registerTool @ plugins/memory-tencentdb/.crabpot-package/index.ts:365

- 🟡 P2 **mocrane-wecom** `tool-runtime`
  - contract: Registered runtime tools expose stable names, input schemas, and result metadata.
  - id: `tool.registration.schema-capture:mocrane-wecom`
  - evidence:
    - [registerTool @ index.ts:43](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/index.ts#L43)

- 🟡 P2 **qqbot** `tool-runtime`
  - contract: Registered runtime tools expose stable names, input schemas, and result metadata.
  - id: `tool.registration.schema-capture:qqbot`
  - evidence:
    - [registerTool @ channel.ts:138](https://github.com/tencent-connect/openclaw-qqbot/blob/3eee78922ed0b19af5c4c55f1dfe7d1c848e31f5/src/tools/channel.ts#L138)
    - [registerTool @ remind.ts:222](https://github.com/tencent-connect/openclaw-qqbot/blob/3eee78922ed0b19af5c4c55f1dfe7d1c848e31f5/src/tools/remind.ts#L222)

- 🟡 P2 **wecom** `tool-runtime`
  - contract: Registered runtime tools expose stable names, input schemas, and result metadata.
  - id: `tool.registration.schema-capture:wecom`
  - evidence:
    - [registerTool @ index.js:28](https://github.com/sunnoy/openclaw-plugin-wecom/blob/b7849ac055c8fa699d01b48e83cf24028907307d/index.js#L28)
    - [registerTool @ index.js:29](https://github.com/sunnoy/openclaw-plugin-wecom/blob/b7849ac055c8fa699d01b48e83cf24028907307d/index.js#L29)
    - [registerTool @ index.js:33](https://github.com/sunnoy/openclaw-plugin-wecom/blob/b7849ac055c8fa699d01b48e83cf24028907307d/index.js#L33)

- 🟡 P2 **yuanbao** `tool-runtime`
  - contract: Registered runtime tools expose stable names, input schemas, and result metadata.
  - id: `tool.registration.schema-capture:yuanbao`
  - evidence:
    - registerTool @ plugins/yuanbao/.crabpot-package/dist/src/tools/group.js:43
    - registerTool @ plugins/yuanbao/.crabpot-package/dist/src/tools/member.js:120
    - registerTool @ plugins/yuanbao/.crabpot-package/dist/src/tools/remind.js:271

- 🟢 P3 **lightclawbot** `channel-runtime`
  - contract: Channel setup, message envelope, sender metadata, and config schema remain stable.
  - id: `channel.runtime.envelope-config-metadata:lightclawbot`
  - evidence:
    - registerChannel @ plugins/lightclawbot/.crabpot-package/dist/index.js:13

- 🟢 P3 **memos-cloud** `hook-runner`
  - contract: Legacy before_agent_start remains wired until plugins migrate to before_model_resolve and before_prompt_build.
  - id: `hook.compat.before-agent-start-migration:memos-cloud`
  - evidence:
    - [before_agent_start @ index.js:481](https://github.com/MemTensor/MemOS-Cloud-OpenClaw-Plugin/blob/03fcc33c5fd285971d4b3dbaa8bbb31cb727db7c/index.js#L481)

- 🟢 P3 **inworld-tts** `manifest-loader`
  - contract: Legacy provider auth env metadata continues to map into config/help surfaces.
  - id: `manifest.compat.provider-auth-env-vars:inworld-tts`
  - evidence:
    - inworld

- 🟢 P3 **lightclawbot** `manifest-loader`
  - contract: Manifest top-level fields are represented in target OpenClaw PluginManifest.
  - id: `manifest.schema.top-level-fields:lightclawbot`
  - evidence:
    - capabilities @ plugins/lightclawbot/.crabpot-package/openclaw.plugin.json

- 🟢 P3 **memos-cloud** `manifest-loader`
  - contract: Manifest top-level fields are represented in target OpenClaw PluginManifest.
  - id: `manifest.schema.top-level-fields:memos-cloud`
  - evidence:
    - [main @ openclaw.plugin.json](https://github.com/MemTensor/MemOS-Cloud-OpenClaw-Plugin/blob/03fcc33c5fd285971d4b3dbaa8bbb31cb727db7c/openclaw.plugin.json)

- 🟢 P3 **web-search-plus** `manifest-loader`
  - contract: Manifest top-level fields are represented in target OpenClaw PluginManifest.
  - id: `manifest.schema.top-level-fields:web-search-plus`
  - evidence:
    - [displayName @ openclaw.plugin.json](https://github.com/robbyczgw-cla/web-search-plus-plugin/blob/6e4c765cd04eb449c806748c3130793fe0b05e5e/openclaw.plugin.json)

- 🟢 P3 **lightclawbot** `package-loader`
  - contract: Package metadata declares the OpenClaw plugin API range used by the plugin.
  - id: `package.compat.plugin-api-range:lightclawbot`
  - evidence:
    - plugins/lightclawbot/.crabpot-package/package.json

- 🟢 P3 **memos-cloud** `package-loader`
  - contract: Package metadata declares the OpenClaw plugin API range used by the plugin.
  - id: `package.compat.plugin-api-range:memos-cloud`
  - evidence:
    - [package.json](https://github.com/MemTensor/MemOS-Cloud-OpenClaw-Plugin/blob/03fcc33c5fd285971d4b3dbaa8bbb31cb727db7c/package.json)

- 🟢 P3 **memu-engine** `package-loader`
  - contract: Package metadata declares the OpenClaw plugin API range used by the plugin.
  - id: `package.compat.plugin-api-range:memu-engine`
  - evidence:
    - [package.json](https://github.com/duxiaoxiong/memu-engine-for-OpenClaw/blob/a5a22c5faf21e30d17a1b47635829e7dd0728ae5/package.json)

- 🟢 P3 **secureclaw** `package-loader`
  - contract: Package metadata declares the OpenClaw plugin API range used by the plugin.
  - id: `package.compat.plugin-api-range:secureclaw`
  - evidence:
    - [package.json](https://github.com/adversa-ai/secureclaw/blob/bf17e2b3deb989e348b3a98080e33a7047e90ac3/secureclaw/package.json)

- 🟢 P3 **clawmetry** `package-loader`
  - contract: Inspector can build or resolve source aliases before cold importing package entrypoints.
  - id: `package.entrypoint.build-before-cold-import:clawmetry`
  - evidence:
    - [runtimeExtension:./dist/index.js @ index.js](https://github.com/vivekchand/clawmetry/blob/b329bb3ed18b651d369bf35321ec58bd47dc33b4/clawhub-plugin/dist/index.js)

- 🟢 P3 **secureclaw** `package-loader`
  - contract: Inspector can build or resolve source aliases before cold importing package entrypoints.
  - id: `package.entrypoint.build-before-cold-import:secureclaw`
  - evidence:
    - [extension:./dist/index.js @ index.js](https://github.com/adversa-ai/secureclaw/blob/bf17e2b3deb989e348b3a98080e33a7047e90ac3/secureclaw/dist/index.js)

- 🟢 P3 **apify** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:apify`
  - evidence:
    - [@sinclair/typebox @ package.json](https://github.com/apify/apify-openclaw-plugin/blob/41f49794d230f7ad092d1c699ee4d91fecf6ba91/package.json)
    - [apify-client @ package.json](https://github.com/apify/apify-openclaw-plugin/blob/41f49794d230f7ad092d1c699ee4d91fecf6ba91/package.json)
    - [openclaw @ package.json](https://github.com/apify/apify-openclaw-plugin/blob/41f49794d230f7ad092d1c699ee4d91fecf6ba91/package.json)

- 🟢 P3 **clawmetry** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:clawmetry`
  - evidence:
    - [node-fetch @ package.json](https://github.com/vivekchand/clawmetry/blob/b329bb3ed18b651d369bf35321ec58bd47dc33b4/clawhub-plugin/package.json)

- 🟢 P3 **codex-app-server** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:codex-app-server`
  - evidence:
    - [ws @ package.json](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/package.json)
    - [openclaw @ package.json](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/package.json)

- 🟢 P3 **inworld-tts** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:inworld-tts`
  - evidence:
    - [openclaw @ package.json](https://github.com/livingghost/openclaw-inworld-tts/blob/d2abaeea330ebef7530f43f8b395671f6f404aea/package.json)

- 🟢 P3 **lightclawbot** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:lightclawbot`
  - evidence:
    - socket.io-client @ plugins/lightclawbot/.crabpot-package/package.json
    - openclaw @ plugins/lightclawbot/.crabpot-package/package.json

- 🟢 P3 **secureclaw** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:secureclaw`
  - evidence:
    - [chokidar @ package.json](https://github.com/adversa-ai/secureclaw/blob/bf17e2b3deb989e348b3a98080e33a7047e90ac3/secureclaw/package.json)
    - [node-forge @ package.json](https://github.com/adversa-ai/secureclaw/blob/bf17e2b3deb989e348b3a98080e33a7047e90ac3/secureclaw/package.json)
    - [openclaw @ package.json](https://github.com/adversa-ai/secureclaw/blob/bf17e2b3deb989e348b3a98080e33a7047e90ac3/secureclaw/package.json)

- 🟢 P3 **web-search-plus** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:web-search-plus`
  - evidence:
    - [openclaw @ package.json](https://github.com/robbyczgw-cla/web-search-plus-plugin/blob/6e4c765cd04eb449c806748c3130793fe0b05e5e/package.json)

- 🟢 P3 **apify** `package-loader`
  - contract: Inspector can compile or load TypeScript source entrypoints before registration capture.
  - id: `package.entrypoint.typescript-loader:apify`
  - evidence:
    - [extension @ index.ts](https://github.com/apify/apify-openclaw-plugin/blob/41f49794d230f7ad092d1c699ee4d91fecf6ba91/src/index.ts)

- 🟢 P3 **clawmetry** `package-loader`
  - contract: Inspector can compile or load TypeScript source entrypoints before registration capture.
  - id: `package.entrypoint.typescript-loader:clawmetry`
  - evidence:
    - [extension @ index.ts](https://github.com/vivekchand/clawmetry/blob/b329bb3ed18b651d369bf35321ec58bd47dc33b4/clawhub-plugin/index.ts)

- 🟢 P3 **codex-app-server** `package-loader`
  - contract: Inspector can compile or load TypeScript source entrypoints before registration capture.
  - id: `package.entrypoint.typescript-loader:codex-app-server`
  - evidence:
    - [extension @ index.ts](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/index.ts)

- 🟢 P3 **inworld-tts** `package-loader`
  - contract: Inspector can compile or load TypeScript source entrypoints before registration capture.
  - id: `package.entrypoint.typescript-loader:inworld-tts`
  - evidence:
    - [extension @ index.ts](https://github.com/livingghost/openclaw-inworld-tts/blob/d2abaeea330ebef7530f43f8b395671f6f404aea/index.ts)

- 🟢 P3 **memu-engine** `package-loader`
  - contract: Inspector can compile or load TypeScript source entrypoints before registration capture.
  - id: `package.entrypoint.typescript-loader:memu-engine`
  - evidence:
    - [extension @ index.ts](https://github.com/duxiaoxiong/memu-engine-for-OpenClaw/blob/a5a22c5faf21e30d17a1b47635829e7dd0728ae5/index.ts)

- 🟢 P3 **web-search-plus** `package-loader`
  - contract: Inspector can compile or load TypeScript source entrypoints before registration capture.
  - id: `package.entrypoint.typescript-loader:web-search-plus`
  - evidence:
    - [extension @ index.ts](https://github.com/robbyczgw-cla/web-search-plus-plugin/blob/6e4c765cd04eb449c806748c3130793fe0b05e5e/index.ts)

- 🟢 P3 **lightclawbot** `package-loader`
  - contract: Package and OpenClaw manifest versions stay aligned for release compatibility reporting.
  - id: `package.metadata.version-alignment:lightclawbot`
  - evidence:
    - package:1.1.2
    - manifest:1.0.0

- 🟢 P3 **apify** `sdk-alias`
  - contract: Root plugin SDK barrel remains importable or has a machine-readable migration path.
  - id: `sdk.import.root-barrel-cold-import:apify`
  - evidence:
    - [openclaw/plugin-sdk @ cli.ts:2](https://github.com/apify/apify-openclaw-plugin/blob/41f49794d230f7ad092d1c699ee4d91fecf6ba91/src/cli.ts#L2)
    - [openclaw/plugin-sdk @ index.ts:1](https://github.com/apify/apify-openclaw-plugin/blob/41f49794d230f7ad092d1c699ee4d91fecf6ba91/src/index.ts#L1)
    - [openclaw/plugin-sdk @ apify-scraper-tool.ts:4](https://github.com/apify/apify-openclaw-plugin/blob/41f49794d230f7ad092d1c699ee4d91fecf6ba91/src/tools/apify-scraper-tool.ts#L4)

- 🟢 P3 **codex-app-server** `sdk-alias`
  - contract: Root plugin SDK barrel remains importable or has a machine-readable migration path.
  - id: `sdk.import.root-barrel-cold-import:codex-app-server`
  - evidence:
    - [openclaw/plugin-sdk @ index.ts:1](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/index.ts#L1)
    - [openclaw/plugin-sdk @ client.ts:6](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/src/client.ts#L6)
    - [openclaw/plugin-sdk @ controller.ts:18](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/src/controller.ts#L18)
    - [openclaw/plugin-sdk @ types.ts:1](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/src/types.ts#L1)

- 🟢 P3 **memu-engine** `sdk-alias`
  - contract: Root plugin SDK barrel remains importable or has a machine-readable migration path.
  - id: `sdk.import.root-barrel-cold-import:memu-engine`
  - evidence:
    - [openclaw/plugin-sdk @ index.ts:1](https://github.com/duxiaoxiong/memu-engine-for-OpenClaw/blob/a5a22c5faf21e30d17a1b47635829e7dd0728ae5/index.ts#L1)

- 🟢 P3 **apify** `tool-runtime`
  - contract: Registered runtime tools expose stable names, input schemas, and result metadata.
  - id: `tool.registration.schema-capture:apify`
  - evidence:
    - [registerTool @ index.ts:13](https://github.com/apify/apify-openclaw-plugin/blob/41f49794d230f7ad092d1c699ee4d91fecf6ba91/src/index.ts#L13)

- 🟢 P3 **lightclawbot** `tool-runtime`
  - contract: Registered runtime tools expose stable names, input schemas, and result metadata.
  - id: `tool.registration.schema-capture:lightclawbot`
  - evidence:
    - registerTool @ plugins/lightclawbot/.crabpot-package/dist/src/download-tool.js:49
    - registerTool @ plugins/lightclawbot/.crabpot-package/dist/src/upload-tool.js:37

- 🟢 P3 **memu-engine** `tool-runtime`
  - contract: Registered runtime tools expose stable names, input schemas, and result metadata.
  - id: `tool.registration.schema-capture:memu-engine`
  - evidence:
    - [registerTool @ index.ts:1252](https://github.com/duxiaoxiong/memu-engine-for-OpenClaw/blob/a5a22c5faf21e30d17a1b47635829e7dd0728ae5/index.ts#L1252)

- 🟢 P3 **web-search-plus** `tool-runtime`
  - contract: Registered runtime tools expose stable names, input schemas, and result metadata.
  - id: `tool.registration.schema-capture:web-search-plus`
  - evidence:
    - [registerTool @ index.ts:815](https://github.com/robbyczgw-cla/web-search-plus-plugin/blob/6e4c765cd04eb449c806748c3130793fe0b05e5e/index.ts#L815)
    - [registerTool @ index.ts:947](https://github.com/robbyczgw-cla/web-search-plus-plugin/blob/6e4c765cd04eb449c806748c3130793fe0b05e5e/index.ts#L947)
