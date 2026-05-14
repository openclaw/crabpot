# Crabpot Issue Findings

Generated: deterministic
Status: PASS


## Crabpot Target Context

- **OpenClaw host track:** `latest`
- **Plugin artifact track:** `latest`
- **Fixture set:** `all (57 fixtures)`
- **Runtime evidence:** `reports/crabpot-execution-results.json` (55 capture artifacts, 426 captured registrations/hooks)
- **Package availability:** `reports/crabpot-package-availability.json` (0 OpenClaw failures, 0 fallbacks)
## Triage Summary

| Metric                     | Value |
| -------------------------- | ----- |
| Issue findings             | 270   |
| Open issue findings        | 238   |
| Runtime-covered findings   | 32    |
| Runtime-partial findings   | 2     |
| 🔴 P0                      | 0     |
| 🟠 P1                      | 15    |
| Open 🔴 P0                 | 0     |
| Open 🟠 P1                 | 7     |
| Live issues                | 0     |
| Live P0 issues             | 0     |
| Compat gaps                | 1     |
| Deprecation warnings       | 41    |
| Inspector gaps             | 156   |
| Open inspector gaps        | 124   |
| Runtime coverage artifacts | 110   |
| Upstream metadata          | 72    |
| Contract probes            | 266   |

## Triage Overview

| Class               | Count | P0 | Meaning                                                                                                                                                  |
| ------------------- | ----- | -- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| live-issue          | 0     | 0  | Potential runtime breakage in the target OpenClaw/plugin pair. P0 only when it is not a deprecated compat seam.                                          |
| compat-gap          | 1     | -  | Compatibility behavior is needed but missing from the target OpenClaw compat registry.                                                                   |
| deprecation-warning | 41    | -  | Plugin uses a supported but deprecated compatibility seam; keep it wired while migration exists.                                                         |
| inspector-gap       | 156   | -  | Plugin Inspector needs stronger capture/probe evidence before making contract judgments. Runtime-covered rows are proof-backed and not open report work. |
| upstream-metadata   | 72    | -  | Plugin package or manifest metadata should improve upstream; not a target OpenClaw live break by itself.                                                 |
| fixture-regression  | 0     | -  | Fixture no longer exposes an expected seam; investigate fixture pin or scanner drift.                                                                    |

## P0 Live Issues

_none_

## Other Live Issues

_none_

## Compat Gaps

- 🟠 P1 **honcho** `compat-gap` `core-compat-adapter`
  - **sdk-export-missing**: honcho: plugin SDK import aliases are missing from target package exports
  - state: open · compat:untracked
  - evidence:
    - [openclaw/plugin-sdk/memory-core @ index.ts:11](https://github.com/plastic-labs/openclaw-honcho/blob/e9f01452b781d24b38336ef0738f2c97353c541e/index.ts#L11)

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

- 🟡 P2 **brave-plugin** `deprecation-warning` `core-compat-adapter`
  - **provider-auth-env-vars**: brave-plugin: providerAuthEnvVars legacy manifest metadata must stay covered
  - state: open · compat:deprecated · deprecated
  - evidence:
    - brave

- 🟡 P2 **clawmetry** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: clawmetry: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [openclaw/plugin-sdk @ index.ts:1](https://github.com/vivekchand/clawmetry/blob/c969c8cb2e7fe41451349792caea03e87e83a174/clawhub-plugin/index.ts#L1)
    - [openclaw/plugin-sdk @ service.ts:1](https://github.com/vivekchand/clawmetry/blob/c969c8cb2e7fe41451349792caea03e87e83a174/clawhub-plugin/src/service.ts#L1)

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
    - [openclaw/plugin-sdk @ index.ts:1](https://github.com/ComposioHQ/openclaw-composio-plugin/blob/47025c33224d343d9fbbf67e0a24e56eeaa18fff/index.ts#L1)

- 🟡 P2 **connectclaw** `deprecation-warning` `core-compat-adapter`
  - **legacy-before-agent-start**: connectclaw: legacy before_agent_start hook compatibility is still used
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [before_agent_start @ hooks.ts:17](https://github.com/osipov-anton/connectclaw/blob/7a4e2646e914de075435b3837123cc03c3edae36/packages/plugin/src/hooks.ts#L17)

- 🟡 P2 **connectclaw** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: connectclaw: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [openclaw/plugin-sdk @ index.ts:1](https://github.com/osipov-anton/connectclaw/blob/7a4e2646e914de075435b3837123cc03c3edae36/packages/plugin/index.ts#L1)
    - [openclaw/plugin-sdk @ commands.ts:1](https://github.com/osipov-anton/connectclaw/blob/7a4e2646e914de075435b3837123cc03c3edae36/packages/plugin/src/commands.ts#L1)
    - [openclaw/plugin-sdk @ hooks.ts:1](https://github.com/osipov-anton/connectclaw/blob/7a4e2646e914de075435b3837123cc03c3edae36/packages/plugin/src/hooks.ts#L1)
    - [openclaw/plugin-sdk @ tools.ts:1](https://github.com/osipov-anton/connectclaw/blob/7a4e2646e914de075435b3837123cc03c3edae36/packages/plugin/src/tools.ts#L1)
    - [openclaw/plugin-sdk @ tools.ts:2](https://github.com/osipov-anton/connectclaw/blob/7a4e2646e914de075435b3837123cc03c3edae36/packages/plugin/src/tools.ts#L2)

- 🟡 P2 **dingtalk-connector** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: dingtalk-connector: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [openclaw/plugin-sdk @ index.ts:17](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/index.ts#L17)
    - [openclaw/plugin-sdk @ channel.ts:4](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/src/channel.ts#L4)
    - [openclaw/plugin-sdk @ accounts.ts:2](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/src/config/accounts.ts#L2)
    - [openclaw/plugin-sdk @ connection.ts:16](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/src/core/connection.ts#L16)
    - [openclaw/plugin-sdk @ provider.ts:14](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/src/core/provider.ts#L14)
    - [openclaw/plugin-sdk @ directory.ts:1](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/src/directory.ts#L1)
    - [openclaw/plugin-sdk @ gateway-methods.ts:7](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/src/gateway-methods.ts#L7)
    - [openclaw/plugin-sdk @ onboarding.ts:5](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/src/onboarding.ts#L5)
    - [openclaw/plugin-sdk @ runtime.ts:1](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/src/runtime.ts#L1)
    - [openclaw/plugin-sdk @ agent.ts:8](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/src/utils/agent.ts#L8)

- 🟡 P2 **discord** `deprecation-warning` `core-compat-adapter`
  - **channel-env-vars**: discord: channelEnvVars legacy manifest metadata must stay covered
  - state: open · compat:deprecated · deprecated
  - evidence:
    - discord

- 🟡 P2 **feishu** `deprecation-warning` `core-compat-adapter`
  - **channel-env-vars**: feishu: channelEnvVars legacy manifest metadata must stay covered
  - state: open · compat:deprecated · deprecated
  - evidence:
    - feishu

- 🟡 P2 **hasdata** `deprecation-warning` `core-compat-adapter`
  - **provider-auth-env-vars**: hasdata: providerAuthEnvVars legacy manifest metadata must stay covered
  - state: open · compat:deprecated · deprecated
  - evidence:
    - hasdata

- 🟡 P2 **honcho** `deprecation-warning` `core-compat-adapter`
  - **legacy-before-agent-start**: honcho: legacy before_agent_start hook compatibility is still used
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [before_agent_start @ subagent.ts:18](https://github.com/plastic-labs/openclaw-honcho/blob/e9f01452b781d24b38336ef0738f2c97353c541e/hooks/subagent.ts#L18)

- 🟡 P2 **honcho** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: honcho: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [openclaw/plugin-sdk @ cli.ts:8](https://github.com/plastic-labs/openclaw-honcho/blob/e9f01452b781d24b38336ef0738f2c97353c541e/commands/cli.ts#L8)
    - [openclaw/plugin-sdk @ capture.ts:2](https://github.com/plastic-labs/openclaw-honcho/blob/e9f01452b781d24b38336ef0738f2c97353c541e/hooks/capture.ts#L2)
    - [openclaw/plugin-sdk @ context.ts:2](https://github.com/plastic-labs/openclaw-honcho/blob/e9f01452b781d24b38336ef0738f2c97353c541e/hooks/context.ts#L2)
    - [openclaw/plugin-sdk @ gateway.ts:2](https://github.com/plastic-labs/openclaw-honcho/blob/e9f01452b781d24b38336ef0738f2c97353c541e/hooks/gateway.ts#L2)
    - [openclaw/plugin-sdk @ subagent.ts:2](https://github.com/plastic-labs/openclaw-honcho/blob/e9f01452b781d24b38336ef0738f2c97353c541e/hooks/subagent.ts#L2)
    - [openclaw/plugin-sdk @ state.ts:9](https://github.com/plastic-labs/openclaw-honcho/blob/e9f01452b781d24b38336ef0738f2c97353c541e/state.ts#L9)
    - [openclaw/plugin-sdk @ ask.ts:3](https://github.com/plastic-labs/openclaw-honcho/blob/e9f01452b781d24b38336ef0738f2c97353c541e/tools/ask.ts#L3)
    - [openclaw/plugin-sdk @ context.ts:3](https://github.com/plastic-labs/openclaw-honcho/blob/e9f01452b781d24b38336ef0738f2c97353c541e/tools/context.ts#L3)
    - [openclaw/plugin-sdk @ memory-passthrough.ts:3](https://github.com/plastic-labs/openclaw-honcho/blob/e9f01452b781d24b38336ef0738f2c97353c541e/tools/memory-passthrough.ts#L3)
    - [openclaw/plugin-sdk @ message-search.ts:3](https://github.com/plastic-labs/openclaw-honcho/blob/e9f01452b781d24b38336ef0738f2c97353c541e/tools/message-search.ts#L3)
    - [openclaw/plugin-sdk @ search.ts:3](https://github.com/plastic-labs/openclaw-honcho/blob/e9f01452b781d24b38336ef0738f2c97353c541e/tools/search.ts#L3)
    - [openclaw/plugin-sdk @ session.ts:3](https://github.com/plastic-labs/openclaw-honcho/blob/e9f01452b781d24b38336ef0738f2c97353c541e/tools/session.ts#L3)

- 🟡 P2 **hyperspell** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: hyperspell: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [openclaw/plugin-sdk @ slash.ts:1](https://github.com/hyperspell/hyperspell-openclaw/blob/3ccb46f1c4c98149fbb69a6dbcb893f167e0e246/commands/slash.ts#L1)
    - [openclaw/plugin-sdk @ tools.ts:2](https://github.com/hyperspell/hyperspell-openclaw/blob/3ccb46f1c4c98149fbb69a6dbcb893f167e0e246/graph/tools.ts#L2)
    - [openclaw/plugin-sdk @ index.ts:1](https://github.com/hyperspell/hyperspell-openclaw/blob/3ccb46f1c4c98149fbb69a6dbcb893f167e0e246/index.ts#L1)

- 🟡 P2 **inworld-tts** `deprecation-warning` `core-compat-adapter`
  - **provider-auth-env-vars**: inworld-tts: providerAuthEnvVars legacy manifest metadata must stay covered
  - state: open · compat:deprecated · deprecated
  - evidence:
    - inworld

- 🟡 P2 **kitchen-sink** `deprecation-warning` `core-compat-adapter`
  - **legacy-before-agent-start**: kitchen-sink: legacy before_agent_start hook compatibility is still used
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [before_agent_start @ generated-hooks.js:11](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-hooks.js#L11)

- 🟡 P2 **kitchen-sink** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: kitchen-sink: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [openclaw/plugin-sdk @ generated-sdk-imports.ts:2](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-sdk-imports.ts#L2)

- 🟡 P2 **llm-trace-phoenix** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: llm-trace-phoenix: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [openclaw/plugin-sdk @ index.ts:12](https://github.com/pingshian0131/openclaw-plugin-llm-trace-phoenix/blob/05bc0f4ba67281c10fad7be356d32a54b00c59fd/index.ts#L12)

- 🟡 P2 **lossless-claw** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: lossless-claw: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [openclaw/plugin-sdk @ openclaw-bridge.ts:21](https://github.com/Martian-Engineering/lossless-claw/blob/4fc60c925c1eed730a73c6bb62144f7af905687f/src/openclaw-bridge.ts#L21)
    - [openclaw/plugin-sdk @ openclaw-bridge.ts:26](https://github.com/Martian-Engineering/lossless-claw/blob/4fc60c925c1eed730a73c6bb62144f7af905687f/src/openclaw-bridge.ts#L26)

- 🟡 P2 **matrix** `deprecation-warning` `core-compat-adapter`
  - **channel-env-vars**: matrix: channelEnvVars legacy manifest metadata must stay covered
  - state: open · compat:deprecated · deprecated
  - evidence:
    - matrix

- 🟡 P2 **mattermost** `deprecation-warning` `core-compat-adapter`
  - **channel-env-vars**: mattermost: channelEnvVars legacy manifest metadata must stay covered
  - state: open · compat:deprecated · deprecated
  - evidence:
    - mattermost

- 🟡 P2 **memory-tencentdb** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: memory-tencentdb: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - openclaw/plugin-sdk @ plugins/memory-tencentdb/.crabpot-package/dist/index.mjs:6238
    - openclaw/plugin-sdk @ plugins/memory-tencentdb/.crabpot-package/src/offload/index.ts:1852

- 🟡 P2 **memos-cloud** `deprecation-warning` `core-compat-adapter`
  - **legacy-before-agent-start**: memos-cloud: legacy before_agent_start hook compatibility is still used
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [before_agent_start @ index.js:531](https://github.com/MemTensor/MemOS-Cloud-OpenClaw-Plugin/blob/e931499a2589af06ee543ce07df2bdda29ac8085/index.js#L531)

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

- 🟡 P2 **msteams** `deprecation-warning` `core-compat-adapter`
  - **channel-env-vars**: msteams: channelEnvVars legacy manifest metadata must stay covered
  - state: open · compat:deprecated · deprecated
  - evidence:
    - msteams

- 🟡 P2 **nextcloud-talk** `deprecation-warning` `core-compat-adapter`
  - **channel-env-vars**: nextcloud-talk: channelEnvVars legacy manifest metadata must stay covered
  - state: open · compat:deprecated · deprecated
  - evidence:
    - nextcloud-talk

- 🟡 P2 **nostr** `deprecation-warning` `core-compat-adapter`
  - **channel-env-vars**: nostr: channelEnvVars legacy manifest metadata must stay covered
  - state: open · compat:deprecated · deprecated
  - evidence:
    - nostr

- 🟡 P2 **openclaw-qqbot** `deprecation-warning` `core-compat-adapter`
  - **channel-env-vars**: openclaw-qqbot: channelEnvVars legacy manifest metadata must stay covered
  - state: open · compat:deprecated · deprecated
  - evidence:
    - qqbot

- 🟡 P2 **openclaw-telemetry** `deprecation-warning` `core-compat-adapter`
  - **legacy-before-agent-start**: openclaw-telemetry: legacy before_agent_start hook compatibility is still used
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [before_agent_start @ index.ts:53](https://github.com/knostic/openclaw-telemetry/blob/86c2458a0dfe82d639c208c5220396feb9d53c45/index.ts#L53)

- 🟡 P2 **openclaw-telemetry** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: openclaw-telemetry: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [openclaw/plugin-sdk @ index.ts:1](https://github.com/knostic/openclaw-telemetry/blob/86c2458a0dfe82d639c208c5220396feb9d53c45/index.ts#L1)
    - [openclaw/plugin-sdk @ service.ts:1](https://github.com/knostic/openclaw-telemetry/blob/86c2458a0dfe82d639c208c5220396feb9d53c45/src/service.ts#L1)
    - [openclaw/plugin-sdk @ service.ts:2](https://github.com/knostic/openclaw-telemetry/blob/86c2458a0dfe82d639c208c5220396feb9d53c45/src/service.ts#L2)

- 🟡 P2 **opik-openclaw** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: opik-openclaw: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [openclaw/plugin-sdk @ index.ts:1](https://github.com/comet-ml/opik-openclaw/blob/0f62b10688428f288eaff9b99e0ee7a9334137e7/index.ts#L1)
    - [openclaw/plugin-sdk @ index.ts:2](https://github.com/comet-ml/opik-openclaw/blob/0f62b10688428f288eaff9b99e0ee7a9334137e7/index.ts#L2)
    - [openclaw/plugin-sdk @ cli.ts:1](https://github.com/comet-ml/opik-openclaw/blob/0f62b10688428f288eaff9b99e0ee7a9334137e7/src/cli.ts#L1)
    - [openclaw/plugin-sdk @ configure.ts:2](https://github.com/comet-ml/opik-openclaw/blob/0f62b10688428f288eaff9b99e0ee7a9334137e7/src/configure.ts#L2)
    - [openclaw/plugin-sdk @ service.ts:5](https://github.com/comet-ml/opik-openclaw/blob/0f62b10688428f288eaff9b99e0ee7a9334137e7/src/service.ts#L5)
    - [openclaw/plugin-sdk @ service.ts:6](https://github.com/comet-ml/opik-openclaw/blob/0f62b10688428f288eaff9b99e0ee7a9334137e7/src/service.ts#L6)
    - [openclaw/plugin-sdk @ llm.ts:1](https://github.com/comet-ml/opik-openclaw/blob/0f62b10688428f288eaff9b99e0ee7a9334137e7/src/service/hooks/llm.ts#L1)
    - [openclaw/plugin-sdk @ subagent.ts:1](https://github.com/comet-ml/opik-openclaw/blob/0f62b10688428f288eaff9b99e0ee7a9334137e7/src/service/hooks/subagent.ts#L1)
    - [openclaw/plugin-sdk @ tool.ts:1](https://github.com/comet-ml/opik-openclaw/blob/0f62b10688428f288eaff9b99e0ee7a9334137e7/src/service/hooks/tool.ts#L1)

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

- 🟡 P2 **synology-chat** `deprecation-warning` `core-compat-adapter`
  - **channel-env-vars**: synology-chat: channelEnvVars legacy manifest metadata must stay covered
  - state: open · compat:deprecated · deprecated
  - evidence:
    - synology-chat

- 🟡 P2 **telnyx-sms** `deprecation-warning` `core-compat-adapter`
  - **channel-env-vars**: telnyx-sms: channelEnvVars legacy manifest metadata must stay covered
  - state: open · compat:deprecated · deprecated
  - evidence:
    - telnyx-sms

- 🟡 P2 **twitch** `deprecation-warning` `core-compat-adapter`
  - **channel-env-vars**: twitch: channelEnvVars legacy manifest metadata must stay covered
  - state: open · compat:deprecated · deprecated
  - evidence:
    - twitch

- 🟡 P2 **voice-call** `deprecation-warning` `core-compat-adapter`
  - **channel-env-vars**: voice-call: channelEnvVars legacy manifest metadata must stay covered
  - state: open · compat:deprecated · deprecated
  - evidence:
    - voice-call

- 🟡 P2 **yuanbao** `deprecation-warning` `core-compat-adapter`
  - **channel-env-vars**: yuanbao: channelEnvVars legacy manifest metadata must stay covered
  - state: open · compat:deprecated · deprecated
  - evidence:
    - yuanbao

- 🟡 P2 **zalo** `deprecation-warning` `core-compat-adapter`
  - **channel-env-vars**: zalo: channelEnvVars legacy manifest metadata must stay covered
  - state: open · compat:deprecated · deprecated
  - evidence:
    - zalo

- 🟡 P2 **zalouser** `deprecation-warning` `core-compat-adapter`
  - **channel-env-vars**: zalouser: channelEnvVars legacy manifest metadata must stay covered
  - state: open · compat:deprecated · deprecated
  - evidence:
    - zalouser

## Inspector Proof Gaps

- 🟠 P1 **honcho** `inspector-gap` `inspector-follow-up`
  - **conversation-access-hook**: honcho: conversation-access hooks need privacy-boundary probes
  - state: open · compat:active
  - evidence:
    - [agent_end @ capture.ts:151](https://github.com/plastic-labs/openclaw-honcho/blob/e9f01452b781d24b38336ef0738f2c97353c541e/hooks/capture.ts#L151)
    - [agent_end @ subagent.ts:34](https://github.com/plastic-labs/openclaw-honcho/blob/e9f01452b781d24b38336ef0738f2c97353c541e/hooks/subagent.ts#L34)

- 🟠 P1 **memory-lancedb** `inspector-gap` `inspector-follow-up`
  - **conversation-access-hook**: memory-lancedb: conversation-access hooks need privacy-boundary probes
  - state: open · compat:active
  - evidence:
    - [agent_end @ index.js:643](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/memory-lancedb/dist/index.js#L643)

- 🟠 P1 **openclaw-telemetry** `inspector-gap` `inspector-follow-up`
  - **before-tool-call-probe**: openclaw-telemetry: before_tool_call needs terminal/block/approval probes
  - state: open · compat:active
  - evidence:
    - [before_tool_call @ index.ts:12](https://github.com/knostic/openclaw-telemetry/blob/86c2458a0dfe82d639c208c5220396feb9d53c45/index.ts#L12)

- 🟠 P1 **openclaw-telemetry** `inspector-gap` `inspector-follow-up`
  - **conversation-access-hook**: openclaw-telemetry: conversation-access hooks need privacy-boundary probes
  - state: open · compat:active
  - evidence:
    - [agent_end @ index.ts:62](https://github.com/knostic/openclaw-telemetry/blob/86c2458a0dfe82d639c208c5220396feb9d53c45/index.ts#L62)

- 🟠 P1 **opik-openclaw** `inspector-gap` `inspector-follow-up`
  - **before-tool-call-probe**: opik-openclaw: before_tool_call needs terminal/block/approval probes
  - state: open · compat:active
  - evidence:
    - [before_tool_call @ tool.ts:34](https://github.com/comet-ml/opik-openclaw/blob/0f62b10688428f288eaff9b99e0ee7a9334137e7/src/service/hooks/tool.ts#L34)

- 🟠 P1 **opik-openclaw** `inspector-gap` `inspector-follow-up`
  - **conversation-access-hook**: opik-openclaw: conversation-access hooks need privacy-boundary probes
  - state: open · compat:active
  - evidence:
    - [agent_end @ service.ts:581](https://github.com/comet-ml/opik-openclaw/blob/0f62b10688428f288eaff9b99e0ee7a9334137e7/src/service.ts#L581)
    - [llm_input @ llm.ts:39](https://github.com/comet-ml/opik-openclaw/blob/0f62b10688428f288eaff9b99e0ee7a9334137e7/src/service/hooks/llm.ts#L39)
    - [llm_output @ llm.ts:150](https://github.com/comet-ml/opik-openclaw/blob/0f62b10688428f288eaff9b99e0ee7a9334137e7/src/service/hooks/llm.ts#L150)

- 🟡 P2 **a2a-gateway** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: a2a-gateway: cold import requires dependency installation in an isolated workspace
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

- 🟡 P2 **agentchat** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: agentchat: channel runtime needs envelope/config probes
  - state: open · compat:active
  - evidence:
    - [defineChannelPluginEntry @ channel.ts:333](https://github.com/agentchatme/agentchat/blob/1460cece00ebd3829fb39d5db5ee23050937ed02/integrations/openclaw-channel/src/channel.ts#L333)

- 🟡 P2 **agentchat** `inspector-gap` `inspector-follow-up`
  - **package-build-artifact-entrypoint**: agentchat: cold import requires package build output
  - state: open · compat:none
  - evidence:
    - [extension:./dist/index.js @ index.js](https://github.com/agentchatme/agentchat/blob/1460cece00ebd3829fb39d5db5ee23050937ed02/integrations/openclaw-channel/dist/index.js)
    - [setupEntry:./dist/setup-entry.js @ setup-entry.js](https://github.com/agentchatme/agentchat/blob/1460cece00ebd3829fb39d5db5ee23050937ed02/integrations/openclaw-channel/dist/setup-entry.js)

- 🟡 P2 **agentchat** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: agentchat: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@agentchatme/agentchat @ package.json](https://github.com/agentchatme/agentchat/blob/1460cece00ebd3829fb39d5db5ee23050937ed02/integrations/openclaw-channel/package.json)
    - [@sinclair/typebox @ package.json](https://github.com/agentchatme/agentchat/blob/1460cece00ebd3829fb39d5db5ee23050937ed02/integrations/openclaw-channel/package.json)
    - [pino @ package.json](https://github.com/agentchatme/agentchat/blob/1460cece00ebd3829fb39d5db5ee23050937ed02/integrations/openclaw-channel/package.json)
    - [ws @ package.json](https://github.com/agentchatme/agentchat/blob/1460cece00ebd3829fb39d5db5ee23050937ed02/integrations/openclaw-channel/package.json)
    - [zod @ package.json](https://github.com/agentchatme/agentchat/blob/1460cece00ebd3829fb39d5db5ee23050937ed02/integrations/openclaw-channel/package.json)

- 🟡 P2 **apify** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: apify: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@sinclair/typebox @ package.json](https://github.com/apify/apify-openclaw-plugin/blob/fa2941d10efe75f8bd68924ec2676f486ad988e8/package.json)
    - [apify-client @ package.json](https://github.com/apify/apify-openclaw-plugin/blob/fa2941d10efe75f8bd68924ec2676f486ad988e8/package.json)

- 🟡 P2 **apify** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: apify: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/apify/apify-openclaw-plugin/blob/fa2941d10efe75f8bd68924ec2676f486ad988e8/src/index.ts)

- 🟡 P2 **apify** `inspector-gap` `inspector-follow-up`
  - **runtime-tool-capture**: apify: runtime tool schema needs registration capture
  - state: open · compat:none
  - evidence:
    - [registerTool @ index.ts:13](https://github.com/apify/apify-openclaw-plugin/blob/fa2941d10efe75f8bd68924ec2676f486ad988e8/src/index.ts#L13)

- 🟡 P2 **bluebubbles** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: bluebubbles: channel runtime needs envelope/config probes
  - state: open · compat:active
  - evidence:
    - [createChatChannelPlugin @ channel-BSIXOcHe.js:930](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/bluebubbles/dist/channel-BSIXOcHe.js#L930)

- 🟡 P2 **clawmetry** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: clawmetry: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/vivekchand/clawmetry/blob/c969c8cb2e7fe41451349792caea03e87e83a174/clawhub-plugin/index.ts)

- 🟡 P2 **clawrouter** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: clawrouter: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@scure/bip32 @ package.json](https://github.com/BlockRunAI/ClawRouter/blob/ed699ce6ab9654fe1b3b8431ed6174c5857df3e5/package.json)
    - [@scure/bip39 @ package.json](https://github.com/BlockRunAI/ClawRouter/blob/ed699ce6ab9654fe1b3b8431ed6174c5857df3e5/package.json)
    - [@solana/kit @ package.json](https://github.com/BlockRunAI/ClawRouter/blob/ed699ce6ab9654fe1b3b8431ed6174c5857df3e5/package.json)
    - [@x402/core @ package.json](https://github.com/BlockRunAI/ClawRouter/blob/ed699ce6ab9654fe1b3b8431ed6174c5857df3e5/package.json)
    - [@x402/evm @ package.json](https://github.com/BlockRunAI/ClawRouter/blob/ed699ce6ab9654fe1b3b8431ed6174c5857df3e5/package.json)
    - [@x402/fetch @ package.json](https://github.com/BlockRunAI/ClawRouter/blob/ed699ce6ab9654fe1b3b8431ed6174c5857df3e5/package.json)
    - [@x402/svm @ package.json](https://github.com/BlockRunAI/ClawRouter/blob/ed699ce6ab9654fe1b3b8431ed6174c5857df3e5/package.json)
    - [viem @ package.json](https://github.com/BlockRunAI/ClawRouter/blob/ed699ce6ab9654fe1b3b8431ed6174c5857df3e5/package.json)

- 🟡 P2 **codex** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: codex: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@mariozechner/pi-coding-agent @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/codex/package.json)
    - [@openai/codex @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/codex/package.json)
    - [ajv @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/codex/package.json)
    - [ws @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/codex/package.json)
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/codex/package.json)

- 🟡 P2 **codex-app-server** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: codex-app-server: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [ws @ package.json](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/package.json)

- 🟡 P2 **codex-app-server** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: codex-app-server: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/index.ts)

- 🟡 P2 **composio** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: composio: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/ComposioHQ/openclaw-composio-plugin/blob/47025c33224d343d9fbbf67e0a24e56eeaa18fff/index.ts)

- 🟡 P2 **connectclaw** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: connectclaw: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/osipov-anton/connectclaw/blob/7a4e2646e914de075435b3837123cc03c3edae36/packages/plugin/index.ts)

- 🟡 P2 **connectclaw** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: connectclaw: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:active
  - evidence:
    - [registerCommand @ commands.ts:18](https://github.com/osipov-anton/connectclaw/blob/7a4e2646e914de075435b3837123cc03c3edae36/packages/plugin/src/commands.ts#L18)
    - [registerCommand @ commands.ts:64](https://github.com/osipov-anton/connectclaw/blob/7a4e2646e914de075435b3837123cc03c3edae36/packages/plugin/src/commands.ts#L64)
    - [registerService @ hooks.ts:91](https://github.com/osipov-anton/connectclaw/blob/7a4e2646e914de075435b3837123cc03c3edae36/packages/plugin/src/hooks.ts#L91)

- 🟡 P2 **connectclaw** `inspector-gap` `inspector-follow-up`
  - **runtime-tool-capture**: connectclaw: runtime tool schema needs registration capture
  - state: open · compat:none
  - evidence:
    - [registerTool @ tools.ts:6](https://github.com/osipov-anton/connectclaw/blob/7a4e2646e914de075435b3837123cc03c3edae36/packages/plugin/src/tools.ts#L6)

- 🟡 P2 **ddingtalk** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: ddingtalk: channel runtime needs envelope/config probes
  - state: open · compat:active
  - evidence:
    - [defineChannelPluginEntry @ index.ts:8](https://github.com/largezhou/openclaw-dingtalk/blob/74d22da7335f261ec5febe2663bed6b81068b7ec/index.ts#L8)

- 🟡 P2 **ddingtalk** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: ddingtalk: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [dingtalk-stream @ package.json](https://github.com/largezhou/openclaw-dingtalk/blob/74d22da7335f261ec5febe2663bed6b81068b7ec/package.json)
    - [zod @ package.json](https://github.com/largezhou/openclaw-dingtalk/blob/74d22da7335f261ec5febe2663bed6b81068b7ec/package.json)

- 🟡 P2 **ddingtalk** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: ddingtalk: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/largezhou/openclaw-dingtalk/blob/74d22da7335f261ec5febe2663bed6b81068b7ec/index.ts)

- 🟡 P2 **diagnostics-otel** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: diagnostics-otel: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@opentelemetry/api @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/diagnostics-otel/package.json)
    - [@opentelemetry/api-logs @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/diagnostics-otel/package.json)
    - [@opentelemetry/exporter-logs-otlp-proto @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/diagnostics-otel/package.json)
    - [@opentelemetry/exporter-metrics-otlp-proto @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/diagnostics-otel/package.json)
    - [@opentelemetry/exporter-trace-otlp-proto @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/diagnostics-otel/package.json)
    - [@opentelemetry/resources @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/diagnostics-otel/package.json)
    - [@opentelemetry/sdk-logs @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/diagnostics-otel/package.json)
    - [@opentelemetry/sdk-metrics @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/diagnostics-otel/package.json)
    - [@opentelemetry/sdk-node @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/diagnostics-otel/package.json)
    - [@opentelemetry/sdk-trace-base @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/diagnostics-otel/package.json)
    - [@opentelemetry/semantic-conventions @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/diagnostics-otel/package.json)

- 🟡 P2 **diffs** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: diffs: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@pierre/diffs @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/diffs/package.json)
    - [@pierre/theme @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/diffs/package.json)
    - [playwright-core @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/diffs/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/diffs/package.json)

- 🟡 P2 **dingtalk-connector** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: dingtalk-connector: channel runtime needs envelope/config probes
  - state: open · compat:active
  - evidence:
    - [registerChannel @ index.ts:74](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/index.ts#L74)

- 🟡 P2 **dingtalk-connector** `inspector-gap` `inspector-follow-up`
  - **package-build-artifact-entrypoint**: dingtalk-connector: cold import requires package build output
  - state: open · compat:none
  - evidence:
    - [extension:./dist/index.mjs @ index.mjs](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/dist/index.mjs)

- 🟡 P2 **dingtalk-connector** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: dingtalk-connector: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [axios @ package.json](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/package.json)
    - [dingtalk-stream @ package.json](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/package.json)
    - [form-data @ package.json](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/package.json)
    - [qrcode-terminal @ package.json](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/package.json)
    - [zod @ package.json](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/package.json)
    - [mammoth @ package.json](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/package.json)

- 🟡 P2 **dingtalk-connector** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: dingtalk-connector: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:active
  - evidence:
    - [registerChannel @ index.ts:74](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/index.ts#L74)
    - [registerGatewayMethod @ gateway-methods.ts:130](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/src/gateway-methods.ts#L130)
    - [registerGatewayMethod @ gateway-methods.ts:190](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/src/gateway-methods.ts#L190)
    - [registerGatewayMethod @ gateway-methods.ts:258](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/src/gateway-methods.ts#L258)
    - [registerGatewayMethod @ gateway-methods.ts:311](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/src/gateway-methods.ts#L311)
    - [registerGatewayMethod @ gateway-methods.ts:351](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/src/gateway-methods.ts#L351)
    - [registerGatewayMethod @ gateway-methods.ts:388](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/src/gateway-methods.ts#L388)
    - [registerGatewayMethod @ gateway-methods.ts:425](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/src/gateway-methods.ts#L425)
    - [registerGatewayMethod @ gateway-methods.ts:452](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/src/gateway-methods.ts#L452)
    - [registerGatewayMethod @ gateway-methods.ts:506](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/src/gateway-methods.ts#L506)
    - [registerGatewayMethod @ gateway-methods.ts:593](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/src/gateway-methods.ts#L593)
    - [registerGatewayMethod @ gateway-methods.ts:60](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/src/gateway-methods.ts#L60)
    - [registerGatewayMethod @ gateway-methods.ts:652](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/src/gateway-methods.ts#L652)
    - [registerGatewayMethod @ gateway-methods.ts:719](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/src/gateway-methods.ts#L719)

- 🟡 P2 **discord** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: discord: channel runtime needs envelope/config probes
  - state: open · compat:active
  - evidence:
    - [createChatChannelPlugin @ channel-UXGa9PGc.js:406](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/discord/dist/channel-UXGa9PGc.js#L406)

- 🟡 P2 **discord** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: discord: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@discordjs/voice @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/discord/package.json)
    - [discord-api-types @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/discord/package.json)
    - [https-proxy-agent @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/discord/package.json)
    - [opusscript @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/discord/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/discord/package.json)
    - [undici @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/discord/package.json)
    - [ws @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/discord/package.json)

- 🟡 P2 **feishu** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: feishu: channel runtime needs envelope/config probes
  - state: open · compat:active
  - evidence:
    - [createChatChannelPlugin @ channel-BegH3cJm.js:1087](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/feishu/dist/channel-BegH3cJm.js#L1087)

- 🟡 P2 **feishu** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: feishu: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@larksuiteoapi/node-sdk @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/feishu/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/feishu/package.json)

- 🟡 P2 **google-meet** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: google-meet: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [commander @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/google-meet/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/google-meet/package.json)

- 🟡 P2 **hasdata** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: hasdata: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@sinclair/typebox @ package.json](https://github.com/HasData/hasdata-openclaw-plugin/blob/bed32d8a0359392b7c4628f12b909b6e204c8426/package.json)

- 🟡 P2 **hasdata** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: hasdata: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/HasData/hasdata-openclaw-plugin/blob/bed32d8a0359392b7c4628f12b909b6e204c8426/src/index.ts)

- 🟡 P2 **honcho** `inspector-gap` `inspector-follow-up`
  - **package-build-artifact-entrypoint**: honcho: cold import requires package build output
  - state: open · compat:none
  - evidence:
    - [extension:./dist/index.js @ index.js](https://github.com/plastic-labs/openclaw-honcho/blob/e9f01452b781d24b38336ef0738f2c97353c541e/dist/index.js)

- 🟡 P2 **honcho** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: honcho: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@honcho-ai/sdk @ package.json](https://github.com/plastic-labs/openclaw-honcho/blob/e9f01452b781d24b38336ef0738f2c97353c541e/package.json)
    - [@sinclair/typebox @ package.json](https://github.com/plastic-labs/openclaw-honcho/blob/e9f01452b781d24b38336ef0738f2c97353c541e/package.json)

- 🟡 P2 **honcho** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: honcho: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:active
  - evidence:
    - [registerMemoryPromptSection @ index.ts:97](https://github.com/plastic-labs/openclaw-honcho/blob/e9f01452b781d24b38336ef0738f2c97353c541e/index.ts#L97)
    - [registerMemoryRuntime @ runtime.ts:274](https://github.com/plastic-labs/openclaw-honcho/blob/e9f01452b781d24b38336ef0738f2c97353c541e/runtime.ts#L274)

- 🟡 P2 **honcho** `inspector-gap` `inspector-follow-up`
  - **runtime-tool-capture**: honcho: runtime tool schema needs registration capture
  - state: open · compat:none
  - evidence:
    - [registerTool @ ask.ts:8](https://github.com/plastic-labs/openclaw-honcho/blob/e9f01452b781d24b38336ef0738f2c97353c541e/tools/ask.ts#L8)
    - [registerTool @ context.ts:8](https://github.com/plastic-labs/openclaw-honcho/blob/e9f01452b781d24b38336ef0738f2c97353c541e/tools/context.ts#L8)
    - [registerTool @ memory-passthrough.ts:130](https://github.com/plastic-labs/openclaw-honcho/blob/e9f01452b781d24b38336ef0738f2c97353c541e/tools/memory-passthrough.ts#L130)
    - [registerTool @ memory-passthrough.ts:89](https://github.com/plastic-labs/openclaw-honcho/blob/e9f01452b781d24b38336ef0738f2c97353c541e/tools/memory-passthrough.ts#L89)
    - [registerTool @ message-search.ts:9](https://github.com/plastic-labs/openclaw-honcho/blob/e9f01452b781d24b38336ef0738f2c97353c541e/tools/message-search.ts#L9)
    - [registerTool @ search.ts:8](https://github.com/plastic-labs/openclaw-honcho/blob/e9f01452b781d24b38336ef0738f2c97353c541e/tools/search.ts#L8)
    - [registerTool @ session.ts:8](https://github.com/plastic-labs/openclaw-honcho/blob/e9f01452b781d24b38336ef0738f2c97353c541e/tools/session.ts#L8)

- 🟡 P2 **hyperspell** `inspector-gap` `inspector-follow-up`
  - **package-build-artifact-entrypoint**: hyperspell: cold import requires package build output
  - state: open · compat:none
  - evidence:
    - [extension:./dist/index.js @ index.js](https://github.com/hyperspell/hyperspell-openclaw/blob/3ccb46f1c4c98149fbb69a6dbcb893f167e0e246/dist/index.js)

- 🟡 P2 **hyperspell** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: hyperspell: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@clack/prompts @ package.json](https://github.com/hyperspell/hyperspell-openclaw/blob/3ccb46f1c4c98149fbb69a6dbcb893f167e0e246/package.json)
    - [@sinclair/typebox @ package.json](https://github.com/hyperspell/hyperspell-openclaw/blob/3ccb46f1c4c98149fbb69a6dbcb893f167e0e246/package.json)
    - [hyperspell @ package.json](https://github.com/hyperspell/hyperspell-openclaw/blob/3ccb46f1c4c98149fbb69a6dbcb893f167e0e246/package.json)

- 🟡 P2 **inworld-tts** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: inworld-tts: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/livingghost/openclaw-inworld-tts/blob/d2abaeea330ebef7530f43f8b395671f6f404aea/index.ts)

- 🟡 P2 **kitchen-sink** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: kitchen-sink: channel runtime needs envelope/config probes
  - state: open · compat:active
  - evidence:
    - [registerChannel @ generated-registrars.js:8](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-registrars.js#L8)
    - [registerChannel @ kitchen-runtime.js:55](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/kitchen-runtime.js#L55)

- 🟡 P2 **lightclawbot** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: lightclawbot: channel runtime needs envelope/config probes
  - state: open · compat:active
  - evidence:
    - createChatChannelPlugin @ plugins/lightclawbot/.crabpot-package/dist/src/channel.js:23
    - defineChannelPluginEntry @ plugins/lightclawbot/.crabpot-package/dist/index.js:25

- 🟡 P2 **lightclawbot** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: lightclawbot: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - ws @ plugins/lightclawbot/.crabpot-package/package.json

- 🟡 P2 **llm-trace-phoenix** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: llm-trace-phoenix: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/pingshian0131/openclaw-plugin-llm-trace-phoenix/blob/05bc0f4ba67281c10fad7be356d32a54b00c59fd/index.ts)

- 🟡 P2 **lobster** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: lobster: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@clawdbot/lobster @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/lobster/package.json)
    - [ajv @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/lobster/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/lobster/package.json)

- 🟡 P2 **lossless-claw** `inspector-gap` `inspector-follow-up`
  - **package-build-artifact-entrypoint**: lossless-claw: cold import requires package build output
  - state: open · compat:none
  - evidence:
    - [extension:./dist/index.js @ index.js](https://github.com/Martian-Engineering/lossless-claw/blob/4fc60c925c1eed730a73c6bb62144f7af905687f/dist/index.js)

- 🟡 P2 **lossless-claw** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: lossless-claw: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@sinclair/typebox @ package.json](https://github.com/Martian-Engineering/lossless-claw/blob/4fc60c925c1eed730a73c6bb62144f7af905687f/package.json)
    - [@mariozechner/pi-agent-core @ package.json](https://github.com/Martian-Engineering/lossless-claw/blob/4fc60c925c1eed730a73c6bb62144f7af905687f/package.json)
    - [@mariozechner/pi-ai @ package.json](https://github.com/Martian-Engineering/lossless-claw/blob/4fc60c925c1eed730a73c6bb62144f7af905687f/package.json)
    - [@mariozechner/pi-coding-agent @ package.json](https://github.com/Martian-Engineering/lossless-claw/blob/4fc60c925c1eed730a73c6bb62144f7af905687f/package.json)

- 🟡 P2 **lossless-claw** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: lossless-claw: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:active
  - evidence:
    - [registerCommand @ index.ts:2385](https://github.com/Martian-Engineering/lossless-claw/blob/4fc60c925c1eed730a73c6bb62144f7af905687f/src/plugin/index.ts#L2385)
    - [registerContextEngine @ index.ts:2365](https://github.com/Martian-Engineering/lossless-claw/blob/4fc60c925c1eed730a73c6bb62144f7af905687f/src/plugin/index.ts#L2365)

- 🟡 P2 **matrix** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: matrix: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@matrix-org/matrix-sdk-crypto-nodejs @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/matrix/package.json)
    - [@matrix-org/matrix-sdk-crypto-wasm @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/matrix/package.json)
    - [fake-indexeddb @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/matrix/package.json)
    - [markdown-it @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/matrix/package.json)
    - [matrix-js-sdk @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/matrix/package.json)
    - [music-metadata @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/matrix/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/matrix/package.json)

- 🟡 P2 **matrix** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: matrix: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/matrix/index.ts)
    - [setupEntry @ setup-entry.ts](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/matrix/setup-entry.ts)

- 🟡 P2 **mattermost** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: mattermost: channel runtime needs envelope/config probes
  - state: open · compat:active
  - evidence:
    - [createChatChannelPlugin @ channel.ts:263](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/mattermost/src/channel.ts#L263)

- 🟡 P2 **mattermost** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: mattermost: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [ws @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/mattermost/package.json)

- 🟡 P2 **mattermost** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: mattermost: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/mattermost/index.ts)
    - [setupEntry @ setup-entry.ts](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/mattermost/setup-entry.ts)

- 🟡 P2 **mcp-adapter** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: mcp-adapter: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@modelcontextprotocol/sdk @ package.json](https://github.com/androidStern-personal/openclaw-mcp-adapter/blob/5434ce21ac780a46a493c8125e52e80a03dd2640/package.json)

- 🟡 P2 **mcp-adapter** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: mcp-adapter: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/androidStern-personal/openclaw-mcp-adapter/blob/5434ce21ac780a46a493c8125e52e80a03dd2640/index.ts)

- 🟡 P2 **mcp-adapter** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: mcp-adapter: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:active
  - evidence:
    - [registerService @ index.ts:15](https://github.com/androidStern-personal/openclaw-mcp-adapter/blob/5434ce21ac780a46a493c8125e52e80a03dd2640/index.ts#L15)

- 🟡 P2 **mcp-adapter** `inspector-gap` `inspector-follow-up`
  - **runtime-tool-capture**: mcp-adapter: runtime tool schema needs registration capture
  - state: open · compat:none
  - evidence:
    - [registerTool @ index.ts:30](https://github.com/androidStern-personal/openclaw-mcp-adapter/blob/5434ce21ac780a46a493c8125e52e80a03dd2640/index.ts#L30)

- 🟡 P2 **memory-lancedb** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: memory-lancedb: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@lancedb/lancedb @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/memory-lancedb/package.json)
    - [apache-arrow @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/memory-lancedb/package.json)
    - [openai @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/memory-lancedb/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/memory-lancedb/package.json)

- 🟡 P2 **memory-tencentdb** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: memory-tencentdb: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - @ai-sdk/openai @ plugins/memory-tencentdb/.crabpot-package/package.json
    - @node-rs/jieba @ plugins/memory-tencentdb/.crabpot-package/package.json
    - @tencentdb-agent-memory/tcvdb-text @ plugins/memory-tencentdb/.crabpot-package/package.json
    - ai @ plugins/memory-tencentdb/.crabpot-package/package.json
    - js-tiktoken @ plugins/memory-tencentdb/.crabpot-package/package.json
    - json5 @ plugins/memory-tencentdb/.crabpot-package/package.json
    - sqlite-vec @ plugins/memory-tencentdb/.crabpot-package/package.json
    - tsx @ plugins/memory-tencentdb/.crabpot-package/package.json
    - undici @ plugins/memory-tencentdb/.crabpot-package/package.json
    - yaml @ plugins/memory-tencentdb/.crabpot-package/package.json
    - node-llama-cpp @ plugins/memory-tencentdb/.crabpot-package/package.json
    - opik @ plugins/memory-tencentdb/.crabpot-package/package.json

- 🟡 P2 **memory-tencentdb** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: memory-tencentdb: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - extension:plugins/memory-tencentdb/.crabpot-package/index.ts

- 🟡 P2 **memory-tencentdb** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: memory-tencentdb: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:active
  - evidence:
    - registerContextEngine @ plugins/memory-tencentdb/.crabpot-package/dist/index.mjs:5664
    - registerContextEngine @ plugins/memory-tencentdb/.crabpot-package/dist/index.mjs:5675
    - registerContextEngine @ plugins/memory-tencentdb/.crabpot-package/src/offload/index.ts:1172
    - registerContextEngine @ plugins/memory-tencentdb/.crabpot-package/src/offload/index.ts:1183

- 🟡 P2 **memos-cloud** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: memos-cloud: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:active
  - evidence:
    - [registerHook @ index.js:517](https://github.com/MemTensor/MemOS-Cloud-OpenClaw-Plugin/blob/e931499a2589af06ee543ce07df2bdda29ac8085/index.js#L517)

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
  - state: open · compat:active
  - evidence:
    - [registerChannel @ index.ts:31](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/index.ts#L31)

- 🟡 P2 **mocrane-wecom** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: mocrane-wecom: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@wecom/aibot-node-sdk @ package.json](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/package.json)
    - [fast-xml-parser @ package.json](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/package.json)
    - [file-type @ package.json](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/package.json)
    - [undici @ package.json](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/package.json)
    - [zod @ package.json](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/package.json)

- 🟡 P2 **mocrane-wecom** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: mocrane-wecom: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/index.ts)

- 🟡 P2 **mocrane-wecom** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: mocrane-wecom: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:active
  - evidence:
    - [registerChannel @ index.ts:31](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/index.ts#L31)
    - [registerHttpRoute @ index.ts:34](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/index.ts#L34)

- 🟡 P2 **mocrane-wecom** `inspector-gap` `inspector-follow-up`
  - **runtime-tool-capture**: mocrane-wecom: runtime tool schema needs registration capture
  - state: open · compat:none
  - evidence:
    - [registerTool @ index.ts:43](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/index.ts#L43)

- 🟡 P2 **msteams** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: msteams: channel runtime needs envelope/config probes
  - state: open · compat:active
  - evidence:
    - [createChatChannelPlugin @ channel-BOwKBAvY.js:379](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/msteams/dist/channel-BOwKBAvY.js#L379)

- 🟡 P2 **msteams** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: msteams: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@azure/identity @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/msteams/package.json)
    - [@microsoft/teams.api @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/msteams/package.json)
    - [@microsoft/teams.apps @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/msteams/package.json)
    - [express @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/msteams/package.json)
    - [jsonwebtoken @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/msteams/package.json)
    - [jwks-rsa @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/msteams/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/msteams/package.json)

- 🟡 P2 **nemoclaw** `inspector-gap` `inspector-follow-up`
  - **package-build-artifact-entrypoint**: nemoclaw: cold import requires package build output
  - state: open · compat:none
  - evidence:
    - [extension:./dist/index.js @ index.js](https://github.com/NVIDIA/NemoClaw/blob/c517d622c325803a85312c26dc698ff561d059aa/nemoclaw/dist/index.js)

- 🟡 P2 **nemoclaw** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: nemoclaw: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [commander @ package.json](https://github.com/NVIDIA/NemoClaw/blob/c517d622c325803a85312c26dc698ff561d059aa/nemoclaw/package.json)
    - [execa @ package.json](https://github.com/NVIDIA/NemoClaw/blob/c517d622c325803a85312c26dc698ff561d059aa/nemoclaw/package.json)
    - [json5 @ package.json](https://github.com/NVIDIA/NemoClaw/blob/c517d622c325803a85312c26dc698ff561d059aa/nemoclaw/package.json)
    - [tar @ package.json](https://github.com/NVIDIA/NemoClaw/blob/c517d622c325803a85312c26dc698ff561d059aa/nemoclaw/package.json)
    - [yaml @ package.json](https://github.com/NVIDIA/NemoClaw/blob/c517d622c325803a85312c26dc698ff561d059aa/nemoclaw/package.json)

- 🟡 P2 **nextcloud-talk** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: nextcloud-talk: channel runtime needs envelope/config probes
  - state: open · compat:active
  - evidence:
    - [createChatChannelPlugin @ channel-BVVRsVr5.js:1678](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/nextcloud-talk/dist/channel-BVVRsVr5.js#L1678)

- 🟡 P2 **nextcloud-talk** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: nextcloud-talk: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/nextcloud-talk/package.json)

- 🟡 P2 **nostr** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: nostr: channel runtime needs envelope/config probes
  - state: open · compat:active
  - evidence:
    - [createChatChannelPlugin @ channel-DfEqBtUh.js:1373](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/nostr/dist/channel-DfEqBtUh.js#L1373)

- 🟡 P2 **nostr** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: nostr: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [nostr-tools @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/nostr/package.json)
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/nostr/package.json)

- 🟡 P2 **nostr** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: nostr: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:active
  - evidence:
    - [registerHttpRoute @ index.js:74](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/nostr/dist/index.js#L74)

- 🟡 P2 **openclaw-qqbot** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: openclaw-qqbot: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@tencent-connect/qqbot-connector @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/qqbot/package.json)
    - [mpg123-decoder @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/qqbot/package.json)
    - [silk-wasm @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/qqbot/package.json)
    - [ws @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/qqbot/package.json)
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/qqbot/package.json)

- 🟡 P2 **openclaw-telemetry** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: openclaw-telemetry: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/knostic/openclaw-telemetry/blob/86c2458a0dfe82d639c208c5220396feb9d53c45/index.ts)

- 🟡 P2 **openclaw-telemetry** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: openclaw-telemetry: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:active
  - evidence:
    - [registerService @ index.ts:10](https://github.com/knostic/openclaw-telemetry/blob/86c2458a0dfe82d639c208c5220396feb9d53c45/index.ts#L10)

- 🟡 P2 **openclaw-weixin** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: openclaw-weixin: channel runtime needs envelope/config probes
  - state: open · compat:active
  - evidence:
    - registerChannel @ plugins/openclaw-weixin/.crabpot-package/dist/index.js:13
    - registerChannel @ plugins/openclaw-weixin/.crabpot-package/index.ts:17

- 🟡 P2 **openclaw-weixin** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: openclaw-weixin: cold import requires dependency installation in an isolated workspace
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
    - [runtimeExtension:./dist/index.js @ index.js](https://github.com/comet-ml/opik-openclaw/blob/0f62b10688428f288eaff9b99e0ee7a9334137e7/dist/index.js)

- 🟡 P2 **opik-openclaw** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: opik-openclaw: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@clack/prompts @ package.json](https://github.com/comet-ml/opik-openclaw/blob/0f62b10688428f288eaff9b99e0ee7a9334137e7/package.json)
    - [opik @ package.json](https://github.com/comet-ml/opik-openclaw/blob/0f62b10688428f288eaff9b99e0ee7a9334137e7/package.json)
    - [zod @ package.json](https://github.com/comet-ml/opik-openclaw/blob/0f62b10688428f288eaff9b99e0ee7a9334137e7/package.json)

- 🟡 P2 **opik-openclaw** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: opik-openclaw: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/comet-ml/opik-openclaw/blob/0f62b10688428f288eaff9b99e0ee7a9334137e7/index.ts)

- 🟡 P2 **opik-openclaw** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: opik-openclaw: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:active
  - evidence:
    - [registerService @ index.ts:16](https://github.com/comet-ml/opik-openclaw/blob/0f62b10688428f288eaff9b99e0ee7a9334137e7/index.ts#L16)

- 🟡 P2 **qqbot** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: qqbot: channel runtime needs envelope/config probes
  - state: open · compat:active
  - evidence:
    - [registerChannel @ index.ts:16](https://github.com/tencent-connect/openclaw-qqbot/blob/3eee78922ed0b19af5c4c55f1dfe7d1c848e31f5/index.ts#L16)

- 🟡 P2 **qqbot** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: qqbot: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [mpg123-decoder @ package.json](https://github.com/tencent-connect/openclaw-qqbot/blob/3eee78922ed0b19af5c4c55f1dfe7d1c848e31f5/package.json)
    - [silk-wasm @ package.json](https://github.com/tencent-connect/openclaw-qqbot/blob/3eee78922ed0b19af5c4c55f1dfe7d1c848e31f5/package.json)
    - [ws @ package.json](https://github.com/tencent-connect/openclaw-qqbot/blob/3eee78922ed0b19af5c4c55f1dfe7d1c848e31f5/package.json)

- 🟡 P2 **qqbot** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: qqbot: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:active
  - evidence:
    - [registerChannel @ index.ts:16](https://github.com/tencent-connect/openclaw-qqbot/blob/3eee78922ed0b19af5c4c55f1dfe7d1c848e31f5/index.ts#L16)

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
  - **package-dependency-install-required**: secureclaw: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [chokidar @ package.json](https://github.com/adversa-ai/secureclaw/blob/bf17e2b3deb989e348b3a98080e33a7047e90ac3/secureclaw/package.json)
    - [node-forge @ package.json](https://github.com/adversa-ai/secureclaw/blob/bf17e2b3deb989e348b3a98080e33a7047e90ac3/secureclaw/package.json)

- 🟡 P2 **synology-chat** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: synology-chat: channel runtime needs envelope/config probes
  - state: open · compat:active
  - evidence:
    - [createChatChannelPlugin @ channel-BYl2GyR_.js:1065](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/synology-chat/dist/channel-BYl2GyR_.js#L1065)

- 🟡 P2 **synology-chat** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: synology-chat: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/synology-chat/package.json)

- 🟡 P2 **telnyx-sms** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: telnyx-sms: channel runtime needs envelope/config probes
  - state: open · compat:active
  - evidence:
    - [defineChannelPluginEntry @ index.ts:207](https://github.com/team-telnyx/telnyx-openclaw-sms-channel/blob/dee567716ca56d49464bf6354393f3656d92a2b3/index.ts#L207)

- 🟡 P2 **telnyx-sms** `inspector-gap` `inspector-follow-up`
  - **package-build-artifact-entrypoint**: telnyx-sms: cold import requires package build output
  - state: open · compat:none
  - evidence:
    - [extension:./dist/index.js @ index.js](https://github.com/team-telnyx/telnyx-openclaw-sms-channel/blob/dee567716ca56d49464bf6354393f3656d92a2b3/dist/index.js)
    - [setupEntry:./dist/setup-entry.js @ setup-entry.js](https://github.com/team-telnyx/telnyx-openclaw-sms-channel/blob/dee567716ca56d49464bf6354393f3656d92a2b3/dist/setup-entry.js)

- 🟡 P2 **telnyx-sms** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: telnyx-sms: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:active
  - evidence:
    - [registerHttpRoute @ index.ts:259](https://github.com/team-telnyx/telnyx-openclaw-sms-channel/blob/dee567716ca56d49464bf6354393f3656d92a2b3/index.ts#L259)

- 🟡 P2 **tlon** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: tlon: channel runtime needs envelope/config probes
  - state: open · compat:active
  - evidence:
    - [createChatChannelPlugin @ channel-C1on9fPi.js:115](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/tlon/dist/channel-C1on9fPi.js#L115)

- 🟡 P2 **tlon** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: tlon: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@aws-sdk/client-s3 @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/tlon/package.json)
    - [@aws-sdk/s3-request-presigner @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/tlon/package.json)
    - [@tloncorp/tlon-skill @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/tlon/package.json)
    - [@urbit/aura @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/tlon/package.json)

- 🟡 P2 **twitch** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: twitch: channel runtime needs envelope/config probes
  - state: open · compat:active
  - evidence:
    - [createChatChannelPlugin @ plugin-BQX9GiIn.js:762](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/twitch/dist/plugin-BQX9GiIn.js#L762)

- 🟡 P2 **twitch** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: twitch: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@twurple/api @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/twitch/package.json)
    - [@twurple/auth @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/twitch/package.json)
    - [@twurple/chat @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/twitch/package.json)

- 🟡 P2 **voice-call** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: voice-call: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [commander @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/voice-call/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/voice-call/package.json)
    - [ws @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/voice-call/package.json)

- 🟡 P2 **voice-call** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: voice-call: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:active · runtime:partial
  - evidence:
    - [registerConfigMigration @ setup-api.js:33](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/voice-call/dist/setup-api.js#L33)
    - [registerGatewayMethod @ index.js:1007](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/voice-call/dist/index.js#L1007)
    - [registerGatewayMethod @ index.js:1019](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/voice-call/dist/index.js#L1019)
    - [registerGatewayMethod @ index.js:1036](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/voice-call/dist/index.js#L1036)
    - [registerGatewayMethod @ index.js:1067](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/voice-call/dist/index.js#L1067)
    - [registerGatewayMethod @ index.js:1085](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/voice-call/dist/index.js#L1085)
    - [registerGatewayMethod @ index.js:1102](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/voice-call/dist/index.js#L1102)
    - [registerGatewayMethod @ index.js:1126](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/voice-call/dist/index.js#L1126)
    - [registerGatewayMethod @ index.js:970](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/voice-call/dist/index.js#L970)
    - [registerGatewayMethod @ index.js:994](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/voice-call/dist/index.js#L994)
    - [registerService @ index.js:1256](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/voice-call/dist/index.js#L1256)
  - runtime coverage:
    - captured registration:registerGatewayMethod
    - captured registration:registerService
    - .crabpot/results/voice-call/cold-import-runtimeExtension-voice-call-plugins-voice-call-crabpot-package-dist-index-js.capture.json
    - .crabpot/results/voice-call/cold-import-runtimeExtension-voice-call-plugins-voice-call-crabpot-package-dist-index-js.synthetic.json

- 🟡 P2 **web-search-plus** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: web-search-plus: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/robbyczgw-cla/web-search-plus-plugin/blob/dd3cab6e11f16eaa3fcee0ce67d3a809b155341a/index.ts)

- 🟡 P2 **wecom** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: wecom: channel runtime needs envelope/config probes
  - state: open · compat:active
  - evidence:
    - [registerChannel @ index.js:27](https://github.com/sunnoy/openclaw-plugin-wecom/blob/503a1d5403bc3a57763b9ef17c60a9d5e31b53d9/index.js#L27)

- 🟡 P2 **wecom** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: wecom: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@wecom/aibot-node-sdk @ package.json](https://github.com/sunnoy/openclaw-plugin-wecom/blob/503a1d5403bc3a57763b9ef17c60a9d5e31b53d9/package.json)
    - [file-type @ package.json](https://github.com/sunnoy/openclaw-plugin-wecom/blob/503a1d5403bc3a57763b9ef17c60a9d5e31b53d9/package.json)
    - [pinyin-pro @ package.json](https://github.com/sunnoy/openclaw-plugin-wecom/blob/503a1d5403bc3a57763b9ef17c60a9d5e31b53d9/package.json)
    - [undici @ package.json](https://github.com/sunnoy/openclaw-plugin-wecom/blob/503a1d5403bc3a57763b9ef17c60a9d5e31b53d9/package.json)

- 🟡 P2 **wecom** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: wecom: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:active · runtime:partial
  - evidence:
    - [registerChannel @ index.js:27](https://github.com/sunnoy/openclaw-plugin-wecom/blob/503a1d5403bc3a57763b9ef17c60a9d5e31b53d9/index.js#L27)
    - [registerHttpRoute @ index.js:56](https://github.com/sunnoy/openclaw-plugin-wecom/blob/503a1d5403bc3a57763b9ef17c60a9d5e31b53d9/index.js#L56)
  - runtime coverage:
    - captured registration:registerChannel
    - .crabpot/results/wecom/cold-import-extension-wecom-plugins-wecom-index-js.capture.json
    - .crabpot/results/wecom/cold-import-extension-wecom-plugins-wecom-index-js.synthetic.json

- 🟡 P2 **whatsapp** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: whatsapp: channel runtime needs envelope/config probes
  - state: open · compat:active
  - evidence:
    - [createChatChannelPlugin @ channel-CTr3YjO8.js:309](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/whatsapp/dist/channel-CTr3YjO8.js#L309)

- 🟡 P2 **whatsapp** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: whatsapp: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@whiskeysockets/baileys @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/whatsapp/package.json)
    - [https-proxy-agent @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/whatsapp/package.json)
    - [jimp @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/whatsapp/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/whatsapp/package.json)
    - [undici @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/whatsapp/package.json)

- 🟡 P2 **yuanbao** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: yuanbao: channel runtime needs envelope/config probes
  - state: open · compat:active
  - evidence:
    - createChatChannelPlugin @ plugins/yuanbao/.crabpot-package/dist/src/channel.js:18

- 🟡 P2 **yuanbao** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: yuanbao: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - cos-nodejs-sdk-v5 @ plugins/yuanbao/.crabpot-package/package.json
    - protobufjs @ plugins/yuanbao/.crabpot-package/package.json
    - semver @ plugins/yuanbao/.crabpot-package/package.json
    - ws @ plugins/yuanbao/.crabpot-package/package.json

- 🟡 P2 **zalo** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: zalo: channel runtime needs envelope/config probes
  - state: open · compat:active
  - evidence:
    - [createChatChannelPlugin @ channel-VPbtV3Oq.js:238](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/zalo/dist/channel-VPbtV3Oq.js#L238)

- 🟡 P2 **zalo** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: zalo: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [undici @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/zalo/package.json)

- 🟡 P2 **zalouser** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: zalouser: channel runtime needs envelope/config probes
  - state: open · compat:active
  - evidence:
    - [createChatChannelPlugin @ channel-DLNmGWb8.js:353](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/zalouser/dist/channel-DLNmGWb8.js#L353)

- 🟡 P2 **zalouser** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: zalouser: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/zalouser/package.json)
    - [zca-js @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/zalouser/package.json)

## Runtime-Covered Inspector Gaps

- 🟠 P1 **clawmetry** `inspector-gap` `inspector-follow-up`
  - **conversation-access-hook**: clawmetry: conversation-access hooks need privacy-boundary probes
  - state: runtime-covered · compat:active · runtime:covered
  - evidence:
    - [llm_output @ service.ts:117](https://github.com/vivekchand/clawmetry/blob/c969c8cb2e7fe41451349792caea03e87e83a174/clawhub-plugin/src/service.ts#L117)
  - runtime coverage:
    - captured hook:llm_output
    - .crabpot/results/clawmetry/cold-import-extension-clawmetry-plugins-clawmetry-clawhub-plugin-index-ts.capture.json
    - .crabpot/results/clawmetry/cold-import-extension-clawmetry-plugins-clawmetry-clawhub-plugin-index-ts.synthetic.json
    - .crabpot/results/clawmetry/cold-import-runtimeExtension-clawmetry-plugins-clawmetry-clawhub-plugin-dist-index-js.capture.json
    - .crabpot/results/clawmetry/cold-import-runtimeExtension-clawmetry-plugins-clawmetry-clawhub-plugin-dist-index-js.synthetic.json

- 🟠 P1 **kitchen-sink** `inspector-gap` `inspector-follow-up`
  - **before-tool-call-probe**: kitchen-sink: before_tool_call needs terminal/block/approval probes
  - state: runtime-covered · compat:active · runtime:covered
  - evidence:
    - [before_tool_call @ generated-hooks.js:19](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-hooks.js#L19)
  - runtime coverage:
    - captured hook:before_tool_call
    - .crabpot/results/kitchen-sink/cold-import-extension-kitchen-sink-plugins-kitchen-sink-src-index-js.capture.json
    - .crabpot/results/kitchen-sink/cold-import-extension-kitchen-sink-plugins-kitchen-sink-src-index-js.synthetic.json
    - .crabpot/results/kitchen-sink/cold-import-runtimeExtension-kitchen-sink-plugins-kitchen-sink-src-index-js.capture.json
    - .crabpot/results/kitchen-sink/cold-import-runtimeExtension-kitchen-sink-plugins-kitchen-sink-src-index-js.synthetic.json
    - .crabpot/results/kitchen-sink/cold-import-setupEntry-kitchen-sink-plugins-kitchen-sink-src-setup-js.capture.json
    - .crabpot/results/kitchen-sink/cold-import-setupEntry-kitchen-sink-plugins-kitchen-sink-src-setup-js.synthetic.json

- 🟠 P1 **kitchen-sink** `inspector-gap` `inspector-follow-up`
  - **conversation-access-hook**: kitchen-sink: conversation-access hooks need privacy-boundary probes
  - state: runtime-covered · compat:active · runtime:covered
  - evidence:
    - [agent_end @ generated-hooks.js:7](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-hooks.js#L7)
    - [llm_input @ generated-hooks.js:25](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-hooks.js#L25)
    - [llm_output @ generated-hooks.js:26](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-hooks.js#L26)
  - runtime coverage:
    - captured hook:agent_end
    - captured hook:llm_input
    - captured hook:llm_output
    - .crabpot/results/kitchen-sink/cold-import-extension-kitchen-sink-plugins-kitchen-sink-src-index-js.capture.json
    - .crabpot/results/kitchen-sink/cold-import-extension-kitchen-sink-plugins-kitchen-sink-src-index-js.synthetic.json
    - .crabpot/results/kitchen-sink/cold-import-runtimeExtension-kitchen-sink-plugins-kitchen-sink-src-index-js.capture.json
    - .crabpot/results/kitchen-sink/cold-import-runtimeExtension-kitchen-sink-plugins-kitchen-sink-src-index-js.synthetic.json
    - .crabpot/results/kitchen-sink/cold-import-setupEntry-kitchen-sink-plugins-kitchen-sink-src-setup-js.capture.json
    - .crabpot/results/kitchen-sink/cold-import-setupEntry-kitchen-sink-plugins-kitchen-sink-src-setup-js.synthetic.json

- 🟠 P1 **llm-trace-phoenix** `inspector-gap` `inspector-follow-up`
  - **conversation-access-hook**: llm-trace-phoenix: conversation-access hooks need privacy-boundary probes
  - state: runtime-covered · compat:active · runtime:covered
  - evidence:
    - [llm_input @ index.ts:154](https://github.com/pingshian0131/openclaw-plugin-llm-trace-phoenix/blob/05bc0f4ba67281c10fad7be356d32a54b00c59fd/index.ts#L154)
    - [llm_output @ index.ts:168](https://github.com/pingshian0131/openclaw-plugin-llm-trace-phoenix/blob/05bc0f4ba67281c10fad7be356d32a54b00c59fd/index.ts#L168)
  - runtime coverage:
    - captured hook:llm_input
    - captured hook:llm_output
    - .crabpot/results/llm-trace-phoenix/cold-import-extension-llm-trace-phoenix-plugins-llm-trace-phoenix-index-ts.capture.json
    - .crabpot/results/llm-trace-phoenix/cold-import-extension-llm-trace-phoenix-plugins-llm-trace-phoenix-index-ts.synthetic.json

- 🟠 P1 **memory-tencentdb** `inspector-gap` `inspector-follow-up`
  - **conversation-access-hook**: memory-tencentdb: conversation-access hooks need privacy-boundary probes
  - state: runtime-covered · compat:active · runtime:covered
  - evidence:
    - agent_end @ plugins/memory-tencentdb/.crabpot-package/dist/index.mjs:17317
    - agent_end @ plugins/memory-tencentdb/.crabpot-package/index.ts:627
  - runtime coverage:
    - captured hook:agent_end
    - .crabpot/results/memory-tencentdb/cold-import-extension-memory-tencentdb-plugins-memory-tencentdb-crabpot-package-index-ts.capture.json
    - .crabpot/results/memory-tencentdb/cold-import-extension-memory-tencentdb-plugins-memory-tencentdb-crabpot-package-index-ts.synthetic.json

- 🟠 P1 **memos-cloud** `inspector-gap` `inspector-follow-up`
  - **conversation-access-hook**: memos-cloud: conversation-access hooks need privacy-boundary probes
  - state: runtime-covered · compat:active · runtime:covered
  - evidence:
    - [agent_end @ index.js:565](https://github.com/MemTensor/MemOS-Cloud-OpenClaw-Plugin/blob/e931499a2589af06ee543ce07df2bdda29ac8085/index.js#L565)
  - runtime coverage:
    - captured hook:agent_end
    - .crabpot/results/memos-cloud/cold-import-extension-memos-cloud-plugins-memos-cloud-index-js.capture.json
    - .crabpot/results/memos-cloud/cold-import-extension-memos-cloud-plugins-memos-cloud-index-js.synthetic.json

- 🟠 P1 **nemoclaw** `inspector-gap` `inspector-follow-up`
  - **before-tool-call-probe**: nemoclaw: before_tool_call needs terminal/block/approval probes
  - state: runtime-covered · compat:active · runtime:covered
  - evidence:
    - [before_tool_call @ index.ts:389](https://github.com/NVIDIA/NemoClaw/blob/c517d622c325803a85312c26dc698ff561d059aa/nemoclaw/src/index.ts#L389)
  - runtime coverage:
    - captured hook:before_tool_call
    - .crabpot/results/nemoclaw/cold-import-extension-nemoclaw-plugins-nemoclaw-nemoclaw-dist-index-js.capture.json
    - .crabpot/results/nemoclaw/cold-import-extension-nemoclaw-plugins-nemoclaw-nemoclaw-dist-index-js.synthetic.json

- 🟠 P1 **wecom** `inspector-gap` `inspector-follow-up`
  - **before-tool-call-probe**: wecom: before_tool_call needs terminal/block/approval probes
  - state: runtime-covered · compat:active · runtime:covered
  - evidence:
    - [before_tool_call @ index.js:76](https://github.com/sunnoy/openclaw-plugin-wecom/blob/503a1d5403bc3a57763b9ef17c60a9d5e31b53d9/index.js#L76)
  - runtime coverage:
    - captured hook:before_tool_call
    - .crabpot/results/wecom/cold-import-extension-wecom-plugins-wecom-index-js.capture.json
    - .crabpot/results/wecom/cold-import-extension-wecom-plugins-wecom-index-js.synthetic.json

- 🟡 P2 **a2a-gateway** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: a2a-gateway: runtime registrations need capture evidence before final contract judgment
  - state: runtime-covered · compat:active · runtime:covered
  - evidence:
    - [registerGatewayMethod @ index.ts:616](https://github.com/win4r/openclaw-a2a-gateway/blob/a335e59e926f7e1a8913e6cd7b1cbf2d44c33cb7/index.ts#L616)
    - [registerGatewayMethod @ index.ts:622](https://github.com/win4r/openclaw-a2a-gateway/blob/a335e59e926f7e1a8913e6cd7b1cbf2d44c33cb7/index.ts#L622)
    - [registerGatewayMethod @ index.ts:631](https://github.com/win4r/openclaw-a2a-gateway/blob/a335e59e926f7e1a8913e6cd7b1cbf2d44c33cb7/index.ts#L631)
    - [registerGatewayMethod @ index.ts:657](https://github.com/win4r/openclaw-a2a-gateway/blob/a335e59e926f7e1a8913e6cd7b1cbf2d44c33cb7/index.ts#L657)
    - [registerGatewayMethod @ index.ts:669](https://github.com/win4r/openclaw-a2a-gateway/blob/a335e59e926f7e1a8913e6cd7b1cbf2d44c33cb7/index.ts#L669)
    - [registerService @ index.ts:857](https://github.com/win4r/openclaw-a2a-gateway/blob/a335e59e926f7e1a8913e6cd7b1cbf2d44c33cb7/index.ts#L857)
  - runtime coverage:
    - captured registration:registerGatewayMethod
    - captured registration:registerService
    - .crabpot/results/a2a-gateway/cold-import-extension-a2a-gateway-plugins-a2a-gateway-index-ts.capture.json
    - .crabpot/results/a2a-gateway/cold-import-extension-a2a-gateway-plugins-a2a-gateway-index-ts.synthetic.json

- 🟡 P2 **a2a-gateway** `inspector-gap` `inspector-follow-up`
  - **runtime-tool-capture**: a2a-gateway: runtime tool schema needs registration capture
  - state: runtime-covered · compat:none · runtime:covered
  - evidence:
    - [registerTool @ index.ts:777](https://github.com/win4r/openclaw-a2a-gateway/blob/a335e59e926f7e1a8913e6cd7b1cbf2d44c33cb7/index.ts#L777)
  - runtime coverage:
    - captured registration:registerTool
    - .crabpot/results/a2a-gateway/cold-import-extension-a2a-gateway-plugins-a2a-gateway-index-ts.capture.json
    - .crabpot/results/a2a-gateway/cold-import-extension-a2a-gateway-plugins-a2a-gateway-index-ts.synthetic.json

- 🟡 P2 **clawmetry** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: clawmetry: runtime registrations need capture evidence before final contract judgment
  - state: runtime-covered · compat:active · runtime:covered
  - evidence:
    - [registerService @ index.ts:20](https://github.com/vivekchand/clawmetry/blob/c969c8cb2e7fe41451349792caea03e87e83a174/clawhub-plugin/index.ts#L20)
  - runtime coverage:
    - captured registration:registerService
    - .crabpot/results/clawmetry/cold-import-extension-clawmetry-plugins-clawmetry-clawhub-plugin-index-ts.capture.json
    - .crabpot/results/clawmetry/cold-import-extension-clawmetry-plugins-clawmetry-clawhub-plugin-index-ts.synthetic.json
    - .crabpot/results/clawmetry/cold-import-runtimeExtension-clawmetry-plugins-clawmetry-clawhub-plugin-dist-index-js.capture.json
    - .crabpot/results/clawmetry/cold-import-runtimeExtension-clawmetry-plugins-clawmetry-clawhub-plugin-dist-index-js.synthetic.json

- 🟡 P2 **clawrouter** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: clawrouter: runtime registrations need capture evidence before final contract judgment
  - state: runtime-covered · compat:active · runtime:covered
  - evidence:
    - [registerCommand @ index.ts:1721](https://github.com/BlockRunAI/ClawRouter/blob/ed699ce6ab9654fe1b3b8431ed6174c5857df3e5/src/index.ts#L1721)
    - [registerCommand @ index.ts:1773](https://github.com/BlockRunAI/ClawRouter/blob/ed699ce6ab9654fe1b3b8431ed6174c5857df3e5/src/index.ts#L1773)
    - [registerCommand @ index.ts:1827](https://github.com/BlockRunAI/ClawRouter/blob/ed699ce6ab9654fe1b3b8431ed6174c5857df3e5/src/index.ts#L1827)
    - [registerCommand @ index.ts:1881](https://github.com/BlockRunAI/ClawRouter/blob/ed699ce6ab9654fe1b3b8431ed6174c5857df3e5/src/index.ts#L1881)
    - [registerCommand @ index.ts:1886](https://github.com/BlockRunAI/ClawRouter/blob/ed699ce6ab9654fe1b3b8431ed6174c5857df3e5/src/index.ts#L1886)
    - [registerCommand @ index.ts:1890](https://github.com/BlockRunAI/ClawRouter/blob/ed699ce6ab9654fe1b3b8431ed6174c5857df3e5/src/index.ts#L1890)
    - [registerCommand @ index.ts:1891](https://github.com/BlockRunAI/ClawRouter/blob/ed699ce6ab9654fe1b3b8431ed6174c5857df3e5/src/index.ts#L1891)
    - [registerService @ index.ts:1900](https://github.com/BlockRunAI/ClawRouter/blob/ed699ce6ab9654fe1b3b8431ed6174c5857df3e5/src/index.ts#L1900)
  - runtime coverage:
    - captured registration:registerCommand
    - captured registration:registerService
    - .crabpot/results/clawrouter/cold-import-extension-clawrouter-plugins-clawrouter-dist-index-js.capture.json
    - .crabpot/results/clawrouter/cold-import-extension-clawrouter-plugins-clawrouter-dist-index-js.synthetic.json

- 🟡 P2 **clawrouter** `inspector-gap` `inspector-follow-up`
  - **runtime-tool-capture**: clawrouter: runtime tool schema needs registration capture
  - state: runtime-covered · compat:none · runtime:covered
  - evidence:
    - [registerTool @ index.ts:1707](https://github.com/BlockRunAI/ClawRouter/blob/ed699ce6ab9654fe1b3b8431ed6174c5857df3e5/src/index.ts#L1707)
  - runtime coverage:
    - captured registration:registerTool
    - .crabpot/results/clawrouter/cold-import-extension-clawrouter-plugins-clawrouter-dist-index-js.capture.json
    - .crabpot/results/clawrouter/cold-import-extension-clawrouter-plugins-clawrouter-dist-index-js.synthetic.json

- 🟡 P2 **codex** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: codex: runtime registrations need capture evidence before final contract judgment
  - state: runtime-covered · compat:active · runtime:covered
  - evidence:
    - [registerCommand @ index.js:350](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/codex/dist/index.js#L350)
  - runtime coverage:
    - captured registration:registerCommand
    - .crabpot/results/codex/cold-import-runtimeExtension-codex-plugins-codex-crabpot-package-dist-index-js.capture.json
    - .crabpot/results/codex/cold-import-runtimeExtension-codex-plugins-codex-crabpot-package-dist-index-js.synthetic.json

- 🟡 P2 **codex-app-server** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: codex-app-server: runtime registrations need capture evidence before final contract judgment
  - state: runtime-covered · compat:active · runtime:covered
  - evidence:
    - [registerCommand @ index.ts:48](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/index.ts#L48)
    - [registerInteractiveHandler @ index.ts:29](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/index.ts#L29)
    - [registerInteractiveHandler @ index.ts:38](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/index.ts#L38)
    - [registerService @ index.ts:12](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/index.ts#L12)
  - runtime coverage:
    - captured registration:registerCommand
    - captured registration:registerInteractiveHandler
    - captured registration:registerService
    - .crabpot/results/codex-app-server/cold-import-extension-codex-app-server-plugins-codex-app-server-index-ts.capture.json
    - .crabpot/results/codex-app-server/cold-import-extension-codex-app-server-plugins-codex-app-server-index-ts.synthetic.json

- 🟡 P2 **diagnostics-otel** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: diagnostics-otel: runtime registrations need capture evidence before final contract judgment
  - state: runtime-covered · compat:active · runtime:covered
  - evidence:
    - [registerService @ index.js:1468](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/diagnostics-otel/dist/index.js#L1468)
  - runtime coverage:
    - captured registration:registerService
    - .crabpot/results/diagnostics-otel/cold-import-runtimeExtension-diagnostics-otel-plugins-diagnostics-otel-crabpot-package-dist-index-js.capture.json
    - .crabpot/results/diagnostics-otel/cold-import-runtimeExtension-diagnostics-otel-plugins-diagnostics-otel-crabpot-package-dist-index-js.synthetic.json

- 🟡 P2 **diagnostics-prometheus** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: diagnostics-prometheus: runtime registrations need capture evidence before final contract judgment
  - state: runtime-covered · compat:active · runtime:covered
  - evidence:
    - [registerHttpRoute @ index.js:444](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/diagnostics-prometheus/dist/index.js#L444)
    - [registerService @ index.js:443](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/diagnostics-prometheus/dist/index.js#L443)
  - runtime coverage:
    - captured registration:registerHttpRoute
    - captured registration:registerService
    - .crabpot/results/diagnostics-prometheus/cold-import-runtimeExtension-diagnostics-prometheus-plugins-diagnostics-prometheus-crabpot-package-dist-index-js.capture.json
    - .crabpot/results/diagnostics-prometheus/cold-import-runtimeExtension-diagnostics-prometheus-plugins-diagnostics-prometheus-crabpot-package-dist-index-js.synthetic.json

- 🟡 P2 **diffs** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: diffs: runtime registrations need capture evidence before final contract judgment
  - state: runtime-covered · compat:active · runtime:covered
  - evidence:
    - [registerHttpRoute @ index.js:2054](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/diffs/dist/index.js#L2054)
  - runtime coverage:
    - captured registration:registerHttpRoute
    - .crabpot/results/diffs/cold-import-runtimeExtension-diffs-plugins-diffs-crabpot-package-dist-index-js.capture.json
    - .crabpot/results/diffs/cold-import-runtimeExtension-diffs-plugins-diffs-crabpot-package-dist-index-js.synthetic.json

- 🟡 P2 **google-meet** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: google-meet: runtime registrations need capture evidence before final contract judgment
  - state: runtime-covered · compat:active · runtime:covered
  - evidence:
    - [registerGatewayMethod @ index.js:4307](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/google-meet/dist/index.js#L4307)
    - [registerGatewayMethod @ index.js:4323](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/google-meet/dist/index.js#L4323)
    - [registerGatewayMethod @ index.js:4340](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/google-meet/dist/index.js#L4340)
    - [registerGatewayMethod @ index.js:4347](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/google-meet/dist/index.js#L4347)
    - [registerGatewayMethod @ index.js:4357](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/google-meet/dist/index.js#L4357)
    - [registerGatewayMethod @ index.js:4368](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/google-meet/dist/index.js#L4368)
    - [registerGatewayMethod @ index.js:4388](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/google-meet/dist/index.js#L4388)
    - [registerGatewayMethod @ index.js:4403](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/google-meet/dist/index.js#L4403)
    - [registerGatewayMethod @ index.js:4419](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/google-meet/dist/index.js#L4419)
    - [registerGatewayMethod @ index.js:4436](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/google-meet/dist/index.js#L4436)
    - [registerGatewayMethod @ index.js:4443](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/google-meet/dist/index.js#L4443)
    - [registerGatewayMethod @ index.js:4455](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/google-meet/dist/index.js#L4455)
    - [registerGatewayMethod @ index.js:4466](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/google-meet/dist/index.js#L4466)
    - [registerGatewayMethod @ index.js:4478](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/google-meet/dist/index.js#L4478)
    - [registerGatewayMethod @ index.js:4494](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/google-meet/dist/index.js#L4494)
    - [registerNodeHostCommand @ index.js:4649](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/google-meet/dist/index.js#L4649)
  - runtime coverage:
    - captured registration:registerGatewayMethod
    - captured registration:registerNodeHostCommand
    - .crabpot/results/google-meet/cold-import-runtimeExtension-google-meet-plugins-google-meet-crabpot-package-dist-index-js.capture.json
    - .crabpot/results/google-meet/cold-import-runtimeExtension-google-meet-plugins-google-meet-crabpot-package-dist-index-js.synthetic.json

- 🟡 P2 **hyperspell** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: hyperspell: runtime registrations need capture evidence before final contract judgment
  - state: runtime-covered · compat:active · runtime:covered
  - evidence:
    - [registerCommand @ slash.ts:166](https://github.com/hyperspell/hyperspell-openclaw/blob/3ccb46f1c4c98149fbb69a6dbcb893f167e0e246/commands/slash.ts#L166)
    - [registerCommand @ slash.ts:43](https://github.com/hyperspell/hyperspell-openclaw/blob/3ccb46f1c4c98149fbb69a6dbcb893f167e0e246/commands/slash.ts#L43)
    - [registerCommand @ slash.ts:98](https://github.com/hyperspell/hyperspell-openclaw/blob/3ccb46f1c4c98149fbb69a6dbcb893f167e0e246/commands/slash.ts#L98)
    - [registerCommand @ index.ts:51](https://github.com/hyperspell/hyperspell-openclaw/blob/3ccb46f1c4c98149fbb69a6dbcb893f167e0e246/index.ts#L51)
    - [registerCommand @ index.ts:62](https://github.com/hyperspell/hyperspell-openclaw/blob/3ccb46f1c4c98149fbb69a6dbcb893f167e0e246/index.ts#L62)
    - [registerCommand @ index.ts:73](https://github.com/hyperspell/hyperspell-openclaw/blob/3ccb46f1c4c98149fbb69a6dbcb893f167e0e246/index.ts#L73)
  - runtime coverage:
    - captured registration:registerCommand
    - .crabpot/results/hyperspell/cold-import-extension-hyperspell-plugins-hyperspell-dist-index-js.capture.json
    - .crabpot/results/hyperspell/cold-import-extension-hyperspell-plugins-hyperspell-dist-index-js.synthetic.json

- 🟡 P2 **kitchen-sink** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: kitchen-sink: runtime registrations need capture evidence before final contract judgment
  - state: runtime-covered · compat:active · runtime:covered
  - evidence:
    - [registerAutoEnableProbe @ generated-registrars.js:7](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-registrars.js#L7)
    - [registerChannel @ generated-registrars.js:8](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-registrars.js#L8)
    - [registerChannel @ kitchen-runtime.js:55](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/kitchen-runtime.js#L55)
    - [registerCommand @ generated-registrars.js:12](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-registrars.js#L12)
    - [registerCommand @ kitchen-runtime.js:50](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/kitchen-runtime.js#L50)
    - [registerCommand @ kitchen-runtime.js:51](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/kitchen-runtime.js#L51)
    - [registerCompactionProvider @ generated-registrars.js:13](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-registrars.js#L13)
    - [registerCompactionProvider @ kitchen-runtime.js:95](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/kitchen-runtime.js#L95)
    - [registerConfigMigration @ generated-registrars.js:14](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-registrars.js#L14)
    - [registerContextEngine @ generated-registrars.js:15](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-registrars.js#L15)
    - [registerDetachedTaskRuntime @ sync-surface.mjs:113](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/scripts/sync-surface.mjs#L113)
    - [registerDetachedTaskRuntime @ generated-registrars.js:17](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-registrars.js#L17)
    - [registerDetachedTaskRuntime @ kitchen-runtime.js:86](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/kitchen-runtime.js#L86)
    - [registerGatewayDiscoveryService @ generated-registrars.js:18](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-registrars.js#L18)
    - [registerGatewayMethod @ generated-registrars.js:19](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-registrars.js#L19)
    - [registerGatewayMethod @ kitchen-runtime.js:107](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/kitchen-runtime.js#L107)
    - [registerHook @ generated-registrars.js:20](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-registrars.js#L20)
    - [registerHttpRoute @ generated-registrars.js:21](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-registrars.js#L21)
    - [registerHttpRoute @ kitchen-runtime.js:105](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/kitchen-runtime.js#L105)
    - [registerInteractiveHandler @ generated-registrars.js:23](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-registrars.js#L23)
    - [registerInteractiveHandler @ kitchen-runtime.js:53](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/kitchen-runtime.js#L53)
    - [registerMemoryCapability @ generated-registrars.js:25](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-registrars.js#L25)
    - [registerMemoryCorpusSupplement @ generated-registrars.js:26](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-registrars.js#L26)
    - [registerMemoryCorpusSupplement @ kitchen-runtime.js:92](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/kitchen-runtime.js#L92)
    - [registerMemoryFlushPlan @ generated-registrars.js:28](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-registrars.js#L28)
    - [registerMemoryPromptSection @ generated-registrars.js:29](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-registrars.js#L29)
    - [registerMemoryPromptSupplement @ generated-registrars.js:30](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-registrars.js#L30)
    - [registerMemoryPromptSupplement @ kitchen-runtime.js:111](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/kitchen-runtime.js#L111)
    - [registerMemoryRuntime @ generated-registrars.js:31](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-registrars.js#L31)
    - [registerNodeHostCommand @ generated-registrars.js:34](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-registrars.js#L34)
    - [registerNodeInvokePolicy @ generated-registrars.js:35](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-registrars.js#L35)
    - [registerReload @ generated-registrars.js:39](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-registrars.js#L39)
    - [registerSecurityAuditCollector @ generated-registrars.js:41](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-registrars.js#L41)
    - [registerService @ generated-registrars.js:42](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-registrars.js#L42)
    - [registerService @ kitchen-runtime.js:104](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/kitchen-runtime.js#L104)
  - runtime coverage:
    - captured registration:registerAutoEnableProbe
    - captured registration:registerChannel
    - captured registration:registerCommand
    - captured registration:registerCompactionProvider
    - captured registration:registerConfigMigration
    - captured registration:registerContextEngine
    - captured registration:registerDetachedTaskRuntime
    - captured registration:registerGatewayDiscoveryService
    - captured registration:registerGatewayMethod
    - captured registration:registerHook
    - captured registration:registerHttpRoute
    - captured registration:registerInteractiveHandler
    - captured registration:registerMemoryCapability
    - captured registration:registerMemoryCorpusSupplement
    - captured registration:registerMemoryFlushPlan
    - captured registration:registerMemoryPromptSection
    - captured registration:registerMemoryPromptSupplement
    - captured registration:registerMemoryRuntime
    - captured registration:registerNodeHostCommand
    - captured registration:registerNodeInvokePolicy
    - captured registration:registerReload
    - captured registration:registerSecurityAuditCollector
    - captured registration:registerService
    - .crabpot/results/kitchen-sink/cold-import-extension-kitchen-sink-plugins-kitchen-sink-src-index-js.capture.json
    - .crabpot/results/kitchen-sink/cold-import-extension-kitchen-sink-plugins-kitchen-sink-src-index-js.synthetic.json
    - .crabpot/results/kitchen-sink/cold-import-runtimeExtension-kitchen-sink-plugins-kitchen-sink-src-index-js.capture.json
    - .crabpot/results/kitchen-sink/cold-import-runtimeExtension-kitchen-sink-plugins-kitchen-sink-src-index-js.synthetic.json
    - .crabpot/results/kitchen-sink/cold-import-setupEntry-kitchen-sink-plugins-kitchen-sink-src-setup-js.capture.json
    - .crabpot/results/kitchen-sink/cold-import-setupEntry-kitchen-sink-plugins-kitchen-sink-src-setup-js.synthetic.json

- 🟡 P2 **matrix** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: matrix: runtime registrations need capture evidence before final contract judgment
  - state: runtime-covered · compat:active · runtime:covered
  - evidence:
    - [registerGatewayMethod @ index.ts:18](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/matrix/index.ts#L18)
    - [registerGatewayMethod @ index.ts:23](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/matrix/index.ts#L23)
    - [registerGatewayMethod @ index.ts:28](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/matrix/index.ts#L28)
  - runtime coverage:
    - captured registration:registerGatewayMethod
    - .crabpot/results/matrix/cold-import-extension-matrix-plugins-matrix-crabpot-package-index-ts.capture.json
    - .crabpot/results/matrix/cold-import-extension-matrix-plugins-matrix-crabpot-package-index-ts.synthetic.json
    - .crabpot/results/matrix/cold-import-setupEntry-matrix-plugins-matrix-crabpot-package-setup-entry-ts.capture.json
    - .crabpot/results/matrix/cold-import-setupEntry-matrix-plugins-matrix-crabpot-package-setup-entry-ts.synthetic.json

- 🟡 P2 **mattermost** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: mattermost: runtime registrations need capture evidence before final contract judgment
  - state: runtime-covered · compat:active · runtime:covered
  - evidence:
    - [registerHttpRoute @ slash-state.ts:396](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/mattermost/src/mattermost/slash-state.ts#L396)
  - runtime coverage:
    - captured registration:registerHttpRoute
    - .crabpot/results/mattermost/cold-import-extension-mattermost-plugins-mattermost-crabpot-package-index-ts.capture.json
    - .crabpot/results/mattermost/cold-import-extension-mattermost-plugins-mattermost-crabpot-package-index-ts.synthetic.json
    - .crabpot/results/mattermost/cold-import-setupEntry-mattermost-plugins-mattermost-crabpot-package-setup-entry-ts.capture.json
    - .crabpot/results/mattermost/cold-import-setupEntry-mattermost-plugins-mattermost-crabpot-package-setup-entry-ts.synthetic.json

- 🟡 P2 **memory-lancedb** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: memory-lancedb: runtime registrations need capture evidence before final contract judgment
  - state: runtime-covered · compat:active · runtime:covered
  - evidence:
    - [registerService @ index.js:345](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/memory-lancedb/dist/index.js#L345)
    - [registerService @ index.js:690](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/memory-lancedb/dist/index.js#L690)
  - runtime coverage:
    - captured registration:registerService
    - .crabpot/results/memory-lancedb/cold-import-runtimeExtension-memory-lancedb-plugins-memory-lancedb-crabpot-package-dist-index-js.capture.json
    - .crabpot/results/memory-lancedb/cold-import-runtimeExtension-memory-lancedb-plugins-memory-lancedb-crabpot-package-dist-index-js.synthetic.json

- 🟡 P2 **nemoclaw** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: nemoclaw: runtime registrations need capture evidence before final contract judgment
  - state: runtime-covered · compat:active · runtime:covered
  - evidence:
    - [registerCommand @ index.ts:341](https://github.com/NVIDIA/NemoClaw/blob/c517d622c325803a85312c26dc698ff561d059aa/nemoclaw/src/index.ts#L341)
  - runtime coverage:
    - captured registration:registerCommand
    - .crabpot/results/nemoclaw/cold-import-extension-nemoclaw-plugins-nemoclaw-nemoclaw-dist-index-js.capture.json
    - .crabpot/results/nemoclaw/cold-import-extension-nemoclaw-plugins-nemoclaw-nemoclaw-dist-index-js.synthetic.json

- 🟡 P2 **openclaw-qqbot** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: openclaw-qqbot: runtime registrations need capture evidence before final contract judgment
  - state: runtime-covered · compat:active · runtime:covered
  - evidence:
    - [registerCommand @ api.js:626](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/qqbot/dist/api.js#L626)
  - runtime coverage:
    - captured registration:registerCommand
    - .crabpot/results/openclaw-qqbot/cold-import-runtimeExtension-openclaw-qqbot-plugins-openclaw-qqbot-crabpot-package-dist-index-js.capture.json
    - .crabpot/results/openclaw-qqbot/cold-import-runtimeExtension-openclaw-qqbot-plugins-openclaw-qqbot-crabpot-package-dist-index-js.synthetic.json

- 🟡 P2 **openclaw-weixin** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: openclaw-weixin: runtime registrations need capture evidence before final contract judgment
  - state: runtime-covered · compat:active · runtime:covered
  - evidence:
    - registerChannel @ plugins/openclaw-weixin/.crabpot-package/dist/index.js:13
    - registerChannel @ plugins/openclaw-weixin/.crabpot-package/index.ts:17
  - runtime coverage:
    - captured registration:registerChannel
    - .crabpot/results/openclaw-weixin/cold-import-extension-openclaw-weixin-plugins-openclaw-weixin-crabpot-package-index-ts.capture.json
    - .crabpot/results/openclaw-weixin/cold-import-extension-openclaw-weixin-plugins-openclaw-weixin-crabpot-package-index-ts.synthetic.json
    - .crabpot/results/openclaw-weixin/cold-import-runtimeExtension-openclaw-weixin-plugins-openclaw-weixin-crabpot-package-dist-index-js.capture.json
    - .crabpot/results/openclaw-weixin/cold-import-runtimeExtension-openclaw-weixin-plugins-openclaw-weixin-crabpot-package-dist-index-js.synthetic.json

- 🟡 P2 **secureclaw** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: secureclaw: runtime registrations need capture evidence before final contract judgment
  - state: runtime-covered · compat:active · runtime:covered
  - evidence:
    - [registerService @ index.ts:295](https://github.com/adversa-ai/secureclaw/blob/bf17e2b3deb989e348b3a98080e33a7047e90ac3/secureclaw/src/index.ts#L295)
    - [registerService @ index.ts:301](https://github.com/adversa-ai/secureclaw/blob/bf17e2b3deb989e348b3a98080e33a7047e90ac3/secureclaw/src/index.ts#L301)
    - [registerService @ index.ts:307](https://github.com/adversa-ai/secureclaw/blob/bf17e2b3deb989e348b3a98080e33a7047e90ac3/secureclaw/src/index.ts#L307)
  - runtime coverage:
    - captured registration:registerService
    - .crabpot/results/secureclaw/cold-import-extension-secureclaw-plugins-secureclaw-secureclaw-dist-index-js.capture.json
    - .crabpot/results/secureclaw/cold-import-extension-secureclaw-plugins-secureclaw-secureclaw-dist-index-js.synthetic.json

- 🟡 P2 **web-search-plus** `inspector-gap` `inspector-follow-up`
  - **runtime-tool-capture**: web-search-plus: runtime tool schema needs registration capture
  - state: runtime-covered · compat:none · runtime:covered
  - evidence:
    - [registerTool @ index.ts:1034](https://github.com/robbyczgw-cla/web-search-plus-plugin/blob/dd3cab6e11f16eaa3fcee0ce67d3a809b155341a/index.ts#L1034)
    - [registerTool @ index.ts:893](https://github.com/robbyczgw-cla/web-search-plus-plugin/blob/dd3cab6e11f16eaa3fcee0ce67d3a809b155341a/index.ts#L893)
  - runtime coverage:
    - captured registration:registerTool
    - .crabpot/results/web-search-plus/cold-import-extension-web-search-plus-plugins-web-search-plus-index-ts.capture.json
    - .crabpot/results/web-search-plus/cold-import-extension-web-search-plus-plugins-web-search-plus-index-ts.synthetic.json
    - .crabpot/results/web-search-plus/cold-import-runtimeExtension-web-search-plus-plugins-web-search-plus-dist-index-js.capture.json
    - .crabpot/results/web-search-plus/cold-import-runtimeExtension-web-search-plus-plugins-web-search-plus-dist-index-js.synthetic.json

- 🟡 P2 **wecom** `inspector-gap` `inspector-follow-up`
  - **runtime-tool-capture**: wecom: runtime tool schema needs registration capture
  - state: runtime-covered · compat:none · runtime:covered
  - evidence:
    - [registerTool @ index.js:28](https://github.com/sunnoy/openclaw-plugin-wecom/blob/503a1d5403bc3a57763b9ef17c60a9d5e31b53d9/index.js#L28)
    - [registerTool @ index.js:40](https://github.com/sunnoy/openclaw-plugin-wecom/blob/503a1d5403bc3a57763b9ef17c60a9d5e31b53d9/index.js#L40)
    - [registerTool @ index.js:44](https://github.com/sunnoy/openclaw-plugin-wecom/blob/503a1d5403bc3a57763b9ef17c60a9d5e31b53d9/index.js#L44)
  - runtime coverage:
    - captured registration:registerTool
    - .crabpot/results/wecom/cold-import-extension-wecom-plugins-wecom-index-js.capture.json
    - .crabpot/results/wecom/cold-import-extension-wecom-plugins-wecom-index-js.synthetic.json

- 🟡 P2 **yuanbao** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: yuanbao: runtime registrations need capture evidence before final contract judgment
  - state: runtime-covered · compat:active · runtime:covered
  - evidence:
    - registerCommand @ plugins/yuanbao/.crabpot-package/dist/index.js:16
    - registerCommand @ plugins/yuanbao/.crabpot-package/dist/index.js:17
    - registerCommand @ plugins/yuanbao/.crabpot-package/dist/index.js:18
  - runtime coverage:
    - captured registration:registerCommand
    - .crabpot/results/yuanbao/cold-import-extension-yuanbao-plugins-yuanbao-crabpot-package-dist-index-js.capture.json
    - .crabpot/results/yuanbao/cold-import-extension-yuanbao-plugins-yuanbao-crabpot-package-dist-index-js.synthetic.json
    - .crabpot/results/yuanbao/cold-import-setupEntry-yuanbao-plugins-yuanbao-crabpot-package-dist-setup-entry-js.capture.json
    - .crabpot/results/yuanbao/cold-import-setupEntry-yuanbao-plugins-yuanbao-crabpot-package-dist-setup-entry-js.synthetic.json

- 🟡 P2 **yuanbao** `inspector-gap` `inspector-follow-up`
  - **runtime-tool-capture**: yuanbao: runtime tool schema needs registration capture
  - state: runtime-covered · compat:none · runtime:covered
  - evidence:
    - registerTool @ plugins/yuanbao/.crabpot-package/dist/src/business/tools/group.js:78
    - registerTool @ plugins/yuanbao/.crabpot-package/dist/src/business/tools/member.js:172
    - registerTool @ plugins/yuanbao/.crabpot-package/dist/src/business/tools/remind.js:325
  - runtime coverage:
    - captured registration:registerTool
    - .crabpot/results/yuanbao/cold-import-extension-yuanbao-plugins-yuanbao-crabpot-package-dist-index-js.capture.json
    - .crabpot/results/yuanbao/cold-import-extension-yuanbao-plugins-yuanbao-crabpot-package-dist-index-js.synthetic.json
    - .crabpot/results/yuanbao/cold-import-setupEntry-yuanbao-plugins-yuanbao-crabpot-package-dist-setup-entry-js.capture.json
    - .crabpot/results/yuanbao/cold-import-setupEntry-yuanbao-plugins-yuanbao-crabpot-package-dist-setup-entry-js.synthetic.json

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

- 🟡 P2 **bluebubbles** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: bluebubbles: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec

- 🟡 P2 **bluebubbles** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: bluebubbles: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.4.10
    - buildOpenClawVersion:2026.5.7

- 🟡 P2 **brave-plugin** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: brave-plugin: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec

- 🟡 P2 **brave-plugin** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: brave-plugin: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.4.10
    - buildOpenClawVersion:2026.5.7

- 🟡 P2 **clawmetry** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: clawmetry: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec
    - openclaw.release.publishToNpm requires openclaw.install.npmSpec

- 🟡 P2 **clawrouter** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: clawrouter: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - [package.json](https://github.com/BlockRunAI/ClawRouter/blob/ed699ce6ab9654fe1b3b8431ed6174c5857df3e5/package.json)

- 🟡 P2 **codex** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: codex: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec

- 🟡 P2 **codex** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: codex: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.5.1-beta.1
    - buildOpenClawVersion:2026.5.7

- 🟡 P2 **composio** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: composio: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - [package.json](https://github.com/ComposioHQ/openclaw-composio-plugin/blob/47025c33224d343d9fbbf67e0a24e56eeaa18fff/package.json)

- 🟡 P2 **ddingtalk** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: ddingtalk: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - [package.json](https://github.com/largezhou/openclaw-dingtalk/blob/74d22da7335f261ec5febe2663bed6b81068b7ec/package.json)

- 🟡 P2 **diagnostics-otel** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: diagnostics-otel: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.4.25
    - buildOpenClawVersion:2026.5.7

- 🟡 P2 **diagnostics-prometheus** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: diagnostics-prometheus: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.4.25
    - buildOpenClawVersion:2026.5.7

- 🟡 P2 **diffs** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: diffs: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec

- 🟡 P2 **diffs** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: diffs: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.4.30
    - buildOpenClawVersion:2026.5.7

- 🟡 P2 **dingtalk-connector** `upstream-metadata` `plugin-upstream-fix`
  - **manifest-unknown-fields**: dingtalk-connector: manifest uses unsupported top-level fields
  - state: open · compat:none
  - evidence:
    - [author @ openclaw.plugin.json](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/openclaw.plugin.json)
    - [main @ openclaw.plugin.json](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/openclaw.plugin.json)

- 🟡 P2 **dingtalk-connector** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: dingtalk-connector: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - [package.json](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/package.json)

- 🟡 P2 **discord** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: discord: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec

- 🟡 P2 **discord** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: discord: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.4.10
    - buildOpenClawVersion:2026.5.7

- 🟡 P2 **feishu** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: feishu: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec

- 🟡 P2 **feishu** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: feishu: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.4.25
    - buildOpenClawVersion:2026.5.7

- 🟡 P2 **google-meet** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: google-meet: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec

- 🟡 P2 **google-meet** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: google-meet: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.4.20
    - buildOpenClawVersion:2026.5.7

- 🟡 P2 **hyperspell** `upstream-metadata` `plugin-upstream-fix`
  - **package-manifest-version-drift**: hyperspell: package and manifest versions drift
  - state: open · compat:none
  - evidence:
    - package:0.13.1
    - manifest:0.13.0

- 🟡 P2 **lightclawbot** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: lightclawbot: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - plugins/lightclawbot/.crabpot-package/package.json

- 🟡 P2 **lobster** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: lobster: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec

- 🟡 P2 **lobster** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: lobster: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.4.25
    - buildOpenClawVersion:2026.5.7

- 🟡 P2 **matrix** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: matrix: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - [package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/matrix/package.json)

- 🟡 P2 **mattermost** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: mattermost: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - [package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/mattermost/package.json)

- 🟡 P2 **mcp-adapter** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: mcp-adapter: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - [package.json](https://github.com/androidStern-personal/openclaw-mcp-adapter/blob/5434ce21ac780a46a493c8125e52e80a03dd2640/package.json)

- 🟡 P2 **memory-lancedb** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: memory-lancedb: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec

- 🟡 P2 **memory-lancedb** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: memory-lancedb: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.4.10
    - buildOpenClawVersion:2026.5.7

- 🟡 P2 **memory-tencentdb** `upstream-metadata` `plugin-upstream-fix`
  - **package-openclaw-unsupported-metadata**: memory-tencentdb: package declares unsupported OpenClaw metadata
  - state: open · compat:none
  - evidence:
    - openclaw.bundle

- 🟡 P2 **memos-cloud** `upstream-metadata` `plugin-upstream-fix`
  - **manifest-unknown-fields**: memos-cloud: manifest uses unsupported top-level fields
  - state: open · compat:none
  - evidence:
    - [main @ openclaw.plugin.json](https://github.com/MemTensor/MemOS-Cloud-OpenClaw-Plugin/blob/e931499a2589af06ee543ce07df2bdda29ac8085/openclaw.plugin.json)

- 🟡 P2 **memos-cloud** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: memos-cloud: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - [package.json](https://github.com/MemTensor/MemOS-Cloud-OpenClaw-Plugin/blob/e931499a2589af06ee543ce07df2bdda29ac8085/package.json)

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

- 🟡 P2 **msteams** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: msteams: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec

- 🟡 P2 **msteams** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: msteams: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.4.10
    - buildOpenClawVersion:2026.5.7

- 🟡 P2 **nextcloud-talk** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: nextcloud-talk: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec

- 🟡 P2 **nextcloud-talk** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: nextcloud-talk: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.4.10
    - buildOpenClawVersion:2026.5.7

- 🟡 P2 **nostr** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: nostr: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec

- 🟡 P2 **nostr** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: nostr: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.4.10
    - buildOpenClawVersion:2026.5.7

- 🟡 P2 **openclaw-qqbot** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: openclaw-qqbot: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec

- 🟡 P2 **openclaw-qqbot** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: openclaw-qqbot: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.4.10
    - buildOpenClawVersion:2026.5.7

- 🟡 P2 **openclaw-telemetry** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: openclaw-telemetry: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - [package.json](https://github.com/knostic/openclaw-telemetry/blob/86c2458a0dfe82d639c208c5220396feb9d53c45/package.json)

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

- 🟡 P2 **synology-chat** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: synology-chat: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec

- 🟡 P2 **synology-chat** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: synology-chat: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.4.10
    - buildOpenClawVersion:2026.5.7

- 🟡 P2 **tlon** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: tlon: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec

- 🟡 P2 **tlon** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: tlon: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.4.10
    - buildOpenClawVersion:2026.5.7

- 🟡 P2 **twitch** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: twitch: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec

- 🟡 P2 **twitch** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: twitch: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.4.10
    - buildOpenClawVersion:2026.5.7

- 🟡 P2 **voice-call** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: voice-call: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec

- 🟡 P2 **voice-call** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: voice-call: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.4.10
    - buildOpenClawVersion:2026.5.7

- 🟡 P2 **wecom** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: wecom: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - [package.json](https://github.com/sunnoy/openclaw-plugin-wecom/blob/503a1d5403bc3a57763b9ef17c60a9d5e31b53d9/package.json)

- 🟡 P2 **whatsapp** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: whatsapp: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec

- 🟡 P2 **whatsapp** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: whatsapp: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.4.25
    - buildOpenClawVersion:2026.5.7

- 🟡 P2 **yuanbao** `upstream-metadata` `plugin-upstream-fix`
  - **package-openclaw-unsupported-metadata**: yuanbao: package declares unsupported OpenClaw metadata
  - state: open · compat:none
  - evidence:
    - openclaw.bundle

- 🟡 P2 **yuanbao** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: yuanbao: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - plugins/yuanbao/.crabpot-package/package.json

- 🟡 P2 **zalo** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: zalo: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec

- 🟡 P2 **zalo** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: zalo: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.4.10
    - buildOpenClawVersion:2026.5.7

- 🟡 P2 **zalouser** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: zalouser: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec

- 🟡 P2 **zalouser** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: zalouser: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.4.10
    - buildOpenClawVersion:2026.5.7

- 🟢 P3 **clawrouter** `upstream-metadata` `plugin-upstream-fix`
  - **security-manifest-schema-unavailable**: clawrouter: plugin security manifest references an unavailable schema
  - state: open · compat:none
  - evidence:
    - [plugin-security.json](https://github.com/BlockRunAI/ClawRouter/blob/ed699ce6ab9654fe1b3b8431ed6174c5857df3e5/openclaw.security.json%3A%24schema%3Dhttps%3A/openclaw.ai/schemas/plugin-security.json)

- 🟢 P3 **clawrouter** `upstream-metadata` `plugin-upstream-fix`
  - **unrecognized-security-manifest**: clawrouter: plugin ships an unsupported security manifest
  - state: open · compat:none
  - evidence:
    - [openclaw.security.json](https://github.com/BlockRunAI/ClawRouter/blob/ed699ce6ab9654fe1b3b8431ed6174c5857df3e5/openclaw.security.json)

## Issues

- 🟠 P1 **clawmetry** `inspector-gap` `inspector-follow-up`
  - **conversation-access-hook**: clawmetry: conversation-access hooks need privacy-boundary probes
  - state: runtime-covered · compat:active · runtime:covered
  - evidence:
    - [llm_output @ service.ts:117](https://github.com/vivekchand/clawmetry/blob/c969c8cb2e7fe41451349792caea03e87e83a174/clawhub-plugin/src/service.ts#L117)
  - runtime coverage:
    - captured hook:llm_output
    - .crabpot/results/clawmetry/cold-import-extension-clawmetry-plugins-clawmetry-clawhub-plugin-index-ts.capture.json
    - .crabpot/results/clawmetry/cold-import-extension-clawmetry-plugins-clawmetry-clawhub-plugin-index-ts.synthetic.json
    - .crabpot/results/clawmetry/cold-import-runtimeExtension-clawmetry-plugins-clawmetry-clawhub-plugin-dist-index-js.capture.json
    - .crabpot/results/clawmetry/cold-import-runtimeExtension-clawmetry-plugins-clawmetry-clawhub-plugin-dist-index-js.synthetic.json

- 🟠 P1 **honcho** `inspector-gap` `inspector-follow-up`
  - **conversation-access-hook**: honcho: conversation-access hooks need privacy-boundary probes
  - state: open · compat:active
  - evidence:
    - [agent_end @ capture.ts:151](https://github.com/plastic-labs/openclaw-honcho/blob/e9f01452b781d24b38336ef0738f2c97353c541e/hooks/capture.ts#L151)
    - [agent_end @ subagent.ts:34](https://github.com/plastic-labs/openclaw-honcho/blob/e9f01452b781d24b38336ef0738f2c97353c541e/hooks/subagent.ts#L34)

- 🟠 P1 **honcho** `compat-gap` `core-compat-adapter`
  - **sdk-export-missing**: honcho: plugin SDK import aliases are missing from target package exports
  - state: open · compat:untracked
  - evidence:
    - [openclaw/plugin-sdk/memory-core @ index.ts:11](https://github.com/plastic-labs/openclaw-honcho/blob/e9f01452b781d24b38336ef0738f2c97353c541e/index.ts#L11)

- 🟠 P1 **kitchen-sink** `inspector-gap` `inspector-follow-up`
  - **before-tool-call-probe**: kitchen-sink: before_tool_call needs terminal/block/approval probes
  - state: runtime-covered · compat:active · runtime:covered
  - evidence:
    - [before_tool_call @ generated-hooks.js:19](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-hooks.js#L19)
  - runtime coverage:
    - captured hook:before_tool_call
    - .crabpot/results/kitchen-sink/cold-import-extension-kitchen-sink-plugins-kitchen-sink-src-index-js.capture.json
    - .crabpot/results/kitchen-sink/cold-import-extension-kitchen-sink-plugins-kitchen-sink-src-index-js.synthetic.json
    - .crabpot/results/kitchen-sink/cold-import-runtimeExtension-kitchen-sink-plugins-kitchen-sink-src-index-js.capture.json
    - .crabpot/results/kitchen-sink/cold-import-runtimeExtension-kitchen-sink-plugins-kitchen-sink-src-index-js.synthetic.json
    - .crabpot/results/kitchen-sink/cold-import-setupEntry-kitchen-sink-plugins-kitchen-sink-src-setup-js.capture.json
    - .crabpot/results/kitchen-sink/cold-import-setupEntry-kitchen-sink-plugins-kitchen-sink-src-setup-js.synthetic.json

- 🟠 P1 **kitchen-sink** `inspector-gap` `inspector-follow-up`
  - **conversation-access-hook**: kitchen-sink: conversation-access hooks need privacy-boundary probes
  - state: runtime-covered · compat:active · runtime:covered
  - evidence:
    - [agent_end @ generated-hooks.js:7](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-hooks.js#L7)
    - [llm_input @ generated-hooks.js:25](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-hooks.js#L25)
    - [llm_output @ generated-hooks.js:26](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-hooks.js#L26)
  - runtime coverage:
    - captured hook:agent_end
    - captured hook:llm_input
    - captured hook:llm_output
    - .crabpot/results/kitchen-sink/cold-import-extension-kitchen-sink-plugins-kitchen-sink-src-index-js.capture.json
    - .crabpot/results/kitchen-sink/cold-import-extension-kitchen-sink-plugins-kitchen-sink-src-index-js.synthetic.json
    - .crabpot/results/kitchen-sink/cold-import-runtimeExtension-kitchen-sink-plugins-kitchen-sink-src-index-js.capture.json
    - .crabpot/results/kitchen-sink/cold-import-runtimeExtension-kitchen-sink-plugins-kitchen-sink-src-index-js.synthetic.json
    - .crabpot/results/kitchen-sink/cold-import-setupEntry-kitchen-sink-plugins-kitchen-sink-src-setup-js.capture.json
    - .crabpot/results/kitchen-sink/cold-import-setupEntry-kitchen-sink-plugins-kitchen-sink-src-setup-js.synthetic.json

- 🟠 P1 **llm-trace-phoenix** `inspector-gap` `inspector-follow-up`
  - **conversation-access-hook**: llm-trace-phoenix: conversation-access hooks need privacy-boundary probes
  - state: runtime-covered · compat:active · runtime:covered
  - evidence:
    - [llm_input @ index.ts:154](https://github.com/pingshian0131/openclaw-plugin-llm-trace-phoenix/blob/05bc0f4ba67281c10fad7be356d32a54b00c59fd/index.ts#L154)
    - [llm_output @ index.ts:168](https://github.com/pingshian0131/openclaw-plugin-llm-trace-phoenix/blob/05bc0f4ba67281c10fad7be356d32a54b00c59fd/index.ts#L168)
  - runtime coverage:
    - captured hook:llm_input
    - captured hook:llm_output
    - .crabpot/results/llm-trace-phoenix/cold-import-extension-llm-trace-phoenix-plugins-llm-trace-phoenix-index-ts.capture.json
    - .crabpot/results/llm-trace-phoenix/cold-import-extension-llm-trace-phoenix-plugins-llm-trace-phoenix-index-ts.synthetic.json

- 🟠 P1 **memory-lancedb** `inspector-gap` `inspector-follow-up`
  - **conversation-access-hook**: memory-lancedb: conversation-access hooks need privacy-boundary probes
  - state: open · compat:active
  - evidence:
    - [agent_end @ index.js:643](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/memory-lancedb/dist/index.js#L643)

- 🟠 P1 **memory-tencentdb** `inspector-gap` `inspector-follow-up`
  - **conversation-access-hook**: memory-tencentdb: conversation-access hooks need privacy-boundary probes
  - state: runtime-covered · compat:active · runtime:covered
  - evidence:
    - agent_end @ plugins/memory-tencentdb/.crabpot-package/dist/index.mjs:17317
    - agent_end @ plugins/memory-tencentdb/.crabpot-package/index.ts:627
  - runtime coverage:
    - captured hook:agent_end
    - .crabpot/results/memory-tencentdb/cold-import-extension-memory-tencentdb-plugins-memory-tencentdb-crabpot-package-index-ts.capture.json
    - .crabpot/results/memory-tencentdb/cold-import-extension-memory-tencentdb-plugins-memory-tencentdb-crabpot-package-index-ts.synthetic.json

- 🟠 P1 **memos-cloud** `inspector-gap` `inspector-follow-up`
  - **conversation-access-hook**: memos-cloud: conversation-access hooks need privacy-boundary probes
  - state: runtime-covered · compat:active · runtime:covered
  - evidence:
    - [agent_end @ index.js:565](https://github.com/MemTensor/MemOS-Cloud-OpenClaw-Plugin/blob/e931499a2589af06ee543ce07df2bdda29ac8085/index.js#L565)
  - runtime coverage:
    - captured hook:agent_end
    - .crabpot/results/memos-cloud/cold-import-extension-memos-cloud-plugins-memos-cloud-index-js.capture.json
    - .crabpot/results/memos-cloud/cold-import-extension-memos-cloud-plugins-memos-cloud-index-js.synthetic.json

- 🟠 P1 **nemoclaw** `inspector-gap` `inspector-follow-up`
  - **before-tool-call-probe**: nemoclaw: before_tool_call needs terminal/block/approval probes
  - state: runtime-covered · compat:active · runtime:covered
  - evidence:
    - [before_tool_call @ index.ts:389](https://github.com/NVIDIA/NemoClaw/blob/c517d622c325803a85312c26dc698ff561d059aa/nemoclaw/src/index.ts#L389)
  - runtime coverage:
    - captured hook:before_tool_call
    - .crabpot/results/nemoclaw/cold-import-extension-nemoclaw-plugins-nemoclaw-nemoclaw-dist-index-js.capture.json
    - .crabpot/results/nemoclaw/cold-import-extension-nemoclaw-plugins-nemoclaw-nemoclaw-dist-index-js.synthetic.json

- 🟠 P1 **openclaw-telemetry** `inspector-gap` `inspector-follow-up`
  - **before-tool-call-probe**: openclaw-telemetry: before_tool_call needs terminal/block/approval probes
  - state: open · compat:active
  - evidence:
    - [before_tool_call @ index.ts:12](https://github.com/knostic/openclaw-telemetry/blob/86c2458a0dfe82d639c208c5220396feb9d53c45/index.ts#L12)

- 🟠 P1 **openclaw-telemetry** `inspector-gap` `inspector-follow-up`
  - **conversation-access-hook**: openclaw-telemetry: conversation-access hooks need privacy-boundary probes
  - state: open · compat:active
  - evidence:
    - [agent_end @ index.ts:62](https://github.com/knostic/openclaw-telemetry/blob/86c2458a0dfe82d639c208c5220396feb9d53c45/index.ts#L62)

- 🟠 P1 **opik-openclaw** `inspector-gap` `inspector-follow-up`
  - **before-tool-call-probe**: opik-openclaw: before_tool_call needs terminal/block/approval probes
  - state: open · compat:active
  - evidence:
    - [before_tool_call @ tool.ts:34](https://github.com/comet-ml/opik-openclaw/blob/0f62b10688428f288eaff9b99e0ee7a9334137e7/src/service/hooks/tool.ts#L34)

- 🟠 P1 **opik-openclaw** `inspector-gap` `inspector-follow-up`
  - **conversation-access-hook**: opik-openclaw: conversation-access hooks need privacy-boundary probes
  - state: open · compat:active
  - evidence:
    - [agent_end @ service.ts:581](https://github.com/comet-ml/opik-openclaw/blob/0f62b10688428f288eaff9b99e0ee7a9334137e7/src/service.ts#L581)
    - [llm_input @ llm.ts:39](https://github.com/comet-ml/opik-openclaw/blob/0f62b10688428f288eaff9b99e0ee7a9334137e7/src/service/hooks/llm.ts#L39)
    - [llm_output @ llm.ts:150](https://github.com/comet-ml/opik-openclaw/blob/0f62b10688428f288eaff9b99e0ee7a9334137e7/src/service/hooks/llm.ts#L150)

- 🟠 P1 **wecom** `inspector-gap` `inspector-follow-up`
  - **before-tool-call-probe**: wecom: before_tool_call needs terminal/block/approval probes
  - state: runtime-covered · compat:active · runtime:covered
  - evidence:
    - [before_tool_call @ index.js:76](https://github.com/sunnoy/openclaw-plugin-wecom/blob/503a1d5403bc3a57763b9ef17c60a9d5e31b53d9/index.js#L76)
  - runtime coverage:
    - captured hook:before_tool_call
    - .crabpot/results/wecom/cold-import-extension-wecom-plugins-wecom-index-js.capture.json
    - .crabpot/results/wecom/cold-import-extension-wecom-plugins-wecom-index-js.synthetic.json

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
  - **package-dependency-install-required**: a2a-gateway: cold import requires dependency installation in an isolated workspace
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
  - **registration-capture-gap**: a2a-gateway: runtime registrations need capture evidence before final contract judgment
  - state: runtime-covered · compat:active · runtime:covered
  - evidence:
    - [registerGatewayMethod @ index.ts:616](https://github.com/win4r/openclaw-a2a-gateway/blob/a335e59e926f7e1a8913e6cd7b1cbf2d44c33cb7/index.ts#L616)
    - [registerGatewayMethod @ index.ts:622](https://github.com/win4r/openclaw-a2a-gateway/blob/a335e59e926f7e1a8913e6cd7b1cbf2d44c33cb7/index.ts#L622)
    - [registerGatewayMethod @ index.ts:631](https://github.com/win4r/openclaw-a2a-gateway/blob/a335e59e926f7e1a8913e6cd7b1cbf2d44c33cb7/index.ts#L631)
    - [registerGatewayMethod @ index.ts:657](https://github.com/win4r/openclaw-a2a-gateway/blob/a335e59e926f7e1a8913e6cd7b1cbf2d44c33cb7/index.ts#L657)
    - [registerGatewayMethod @ index.ts:669](https://github.com/win4r/openclaw-a2a-gateway/blob/a335e59e926f7e1a8913e6cd7b1cbf2d44c33cb7/index.ts#L669)
    - [registerService @ index.ts:857](https://github.com/win4r/openclaw-a2a-gateway/blob/a335e59e926f7e1a8913e6cd7b1cbf2d44c33cb7/index.ts#L857)
  - runtime coverage:
    - captured registration:registerGatewayMethod
    - captured registration:registerService
    - .crabpot/results/a2a-gateway/cold-import-extension-a2a-gateway-plugins-a2a-gateway-index-ts.capture.json
    - .crabpot/results/a2a-gateway/cold-import-extension-a2a-gateway-plugins-a2a-gateway-index-ts.synthetic.json

- 🟡 P2 **a2a-gateway** `inspector-gap` `inspector-follow-up`
  - **runtime-tool-capture**: a2a-gateway: runtime tool schema needs registration capture
  - state: runtime-covered · compat:none · runtime:covered
  - evidence:
    - [registerTool @ index.ts:777](https://github.com/win4r/openclaw-a2a-gateway/blob/a335e59e926f7e1a8913e6cd7b1cbf2d44c33cb7/index.ts#L777)
  - runtime coverage:
    - captured registration:registerTool
    - .crabpot/results/a2a-gateway/cold-import-extension-a2a-gateway-plugins-a2a-gateway-index-ts.capture.json
    - .crabpot/results/a2a-gateway/cold-import-extension-a2a-gateway-plugins-a2a-gateway-index-ts.synthetic.json

- 🟡 P2 **agentchat** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: agentchat: channel runtime needs envelope/config probes
  - state: open · compat:active
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
  - **package-dependency-install-required**: agentchat: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@agentchatme/agentchat @ package.json](https://github.com/agentchatme/agentchat/blob/1460cece00ebd3829fb39d5db5ee23050937ed02/integrations/openclaw-channel/package.json)
    - [@sinclair/typebox @ package.json](https://github.com/agentchatme/agentchat/blob/1460cece00ebd3829fb39d5db5ee23050937ed02/integrations/openclaw-channel/package.json)
    - [pino @ package.json](https://github.com/agentchatme/agentchat/blob/1460cece00ebd3829fb39d5db5ee23050937ed02/integrations/openclaw-channel/package.json)
    - [ws @ package.json](https://github.com/agentchatme/agentchat/blob/1460cece00ebd3829fb39d5db5ee23050937ed02/integrations/openclaw-channel/package.json)
    - [zod @ package.json](https://github.com/agentchatme/agentchat/blob/1460cece00ebd3829fb39d5db5ee23050937ed02/integrations/openclaw-channel/package.json)

- 🟡 P2 **apify** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: apify: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@sinclair/typebox @ package.json](https://github.com/apify/apify-openclaw-plugin/blob/fa2941d10efe75f8bd68924ec2676f486ad988e8/package.json)
    - [apify-client @ package.json](https://github.com/apify/apify-openclaw-plugin/blob/fa2941d10efe75f8bd68924ec2676f486ad988e8/package.json)

- 🟡 P2 **apify** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: apify: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/apify/apify-openclaw-plugin/blob/fa2941d10efe75f8bd68924ec2676f486ad988e8/src/index.ts)

- 🟡 P2 **apify** `inspector-gap` `inspector-follow-up`
  - **runtime-tool-capture**: apify: runtime tool schema needs registration capture
  - state: open · compat:none
  - evidence:
    - [registerTool @ index.ts:13](https://github.com/apify/apify-openclaw-plugin/blob/fa2941d10efe75f8bd68924ec2676f486ad988e8/src/index.ts#L13)

- 🟡 P2 **bluebubbles** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: bluebubbles: channel runtime needs envelope/config probes
  - state: open · compat:active
  - evidence:
    - [createChatChannelPlugin @ channel-BSIXOcHe.js:930](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/bluebubbles/dist/channel-BSIXOcHe.js#L930)

- 🟡 P2 **bluebubbles** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: bluebubbles: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec

- 🟡 P2 **bluebubbles** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: bluebubbles: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.4.10
    - buildOpenClawVersion:2026.5.7

- 🟡 P2 **brave-plugin** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: brave-plugin: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec

- 🟡 P2 **brave-plugin** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: brave-plugin: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.4.10
    - buildOpenClawVersion:2026.5.7

- 🟡 P2 **brave-plugin** `deprecation-warning` `core-compat-adapter`
  - **provider-auth-env-vars**: brave-plugin: providerAuthEnvVars legacy manifest metadata must stay covered
  - state: open · compat:deprecated · deprecated
  - evidence:
    - brave

- 🟡 P2 **clawmetry** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: clawmetry: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [openclaw/plugin-sdk @ index.ts:1](https://github.com/vivekchand/clawmetry/blob/c969c8cb2e7fe41451349792caea03e87e83a174/clawhub-plugin/index.ts#L1)
    - [openclaw/plugin-sdk @ service.ts:1](https://github.com/vivekchand/clawmetry/blob/c969c8cb2e7fe41451349792caea03e87e83a174/clawhub-plugin/src/service.ts#L1)

- 🟡 P2 **clawmetry** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: clawmetry: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec
    - openclaw.release.publishToNpm requires openclaw.install.npmSpec

- 🟡 P2 **clawmetry** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: clawmetry: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/vivekchand/clawmetry/blob/c969c8cb2e7fe41451349792caea03e87e83a174/clawhub-plugin/index.ts)

- 🟡 P2 **clawmetry** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: clawmetry: runtime registrations need capture evidence before final contract judgment
  - state: runtime-covered · compat:active · runtime:covered
  - evidence:
    - [registerService @ index.ts:20](https://github.com/vivekchand/clawmetry/blob/c969c8cb2e7fe41451349792caea03e87e83a174/clawhub-plugin/index.ts#L20)
  - runtime coverage:
    - captured registration:registerService
    - .crabpot/results/clawmetry/cold-import-extension-clawmetry-plugins-clawmetry-clawhub-plugin-index-ts.capture.json
    - .crabpot/results/clawmetry/cold-import-extension-clawmetry-plugins-clawmetry-clawhub-plugin-index-ts.synthetic.json
    - .crabpot/results/clawmetry/cold-import-runtimeExtension-clawmetry-plugins-clawmetry-clawhub-plugin-dist-index-js.capture.json
    - .crabpot/results/clawmetry/cold-import-runtimeExtension-clawmetry-plugins-clawmetry-clawhub-plugin-dist-index-js.synthetic.json

- 🟡 P2 **clawrouter** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: clawrouter: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@scure/bip32 @ package.json](https://github.com/BlockRunAI/ClawRouter/blob/ed699ce6ab9654fe1b3b8431ed6174c5857df3e5/package.json)
    - [@scure/bip39 @ package.json](https://github.com/BlockRunAI/ClawRouter/blob/ed699ce6ab9654fe1b3b8431ed6174c5857df3e5/package.json)
    - [@solana/kit @ package.json](https://github.com/BlockRunAI/ClawRouter/blob/ed699ce6ab9654fe1b3b8431ed6174c5857df3e5/package.json)
    - [@x402/core @ package.json](https://github.com/BlockRunAI/ClawRouter/blob/ed699ce6ab9654fe1b3b8431ed6174c5857df3e5/package.json)
    - [@x402/evm @ package.json](https://github.com/BlockRunAI/ClawRouter/blob/ed699ce6ab9654fe1b3b8431ed6174c5857df3e5/package.json)
    - [@x402/fetch @ package.json](https://github.com/BlockRunAI/ClawRouter/blob/ed699ce6ab9654fe1b3b8431ed6174c5857df3e5/package.json)
    - [@x402/svm @ package.json](https://github.com/BlockRunAI/ClawRouter/blob/ed699ce6ab9654fe1b3b8431ed6174c5857df3e5/package.json)
    - [viem @ package.json](https://github.com/BlockRunAI/ClawRouter/blob/ed699ce6ab9654fe1b3b8431ed6174c5857df3e5/package.json)

- 🟡 P2 **clawrouter** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: clawrouter: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - [package.json](https://github.com/BlockRunAI/ClawRouter/blob/ed699ce6ab9654fe1b3b8431ed6174c5857df3e5/package.json)

- 🟡 P2 **clawrouter** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: clawrouter: runtime registrations need capture evidence before final contract judgment
  - state: runtime-covered · compat:active · runtime:covered
  - evidence:
    - [registerCommand @ index.ts:1721](https://github.com/BlockRunAI/ClawRouter/blob/ed699ce6ab9654fe1b3b8431ed6174c5857df3e5/src/index.ts#L1721)
    - [registerCommand @ index.ts:1773](https://github.com/BlockRunAI/ClawRouter/blob/ed699ce6ab9654fe1b3b8431ed6174c5857df3e5/src/index.ts#L1773)
    - [registerCommand @ index.ts:1827](https://github.com/BlockRunAI/ClawRouter/blob/ed699ce6ab9654fe1b3b8431ed6174c5857df3e5/src/index.ts#L1827)
    - [registerCommand @ index.ts:1881](https://github.com/BlockRunAI/ClawRouter/blob/ed699ce6ab9654fe1b3b8431ed6174c5857df3e5/src/index.ts#L1881)
    - [registerCommand @ index.ts:1886](https://github.com/BlockRunAI/ClawRouter/blob/ed699ce6ab9654fe1b3b8431ed6174c5857df3e5/src/index.ts#L1886)
    - [registerCommand @ index.ts:1890](https://github.com/BlockRunAI/ClawRouter/blob/ed699ce6ab9654fe1b3b8431ed6174c5857df3e5/src/index.ts#L1890)
    - [registerCommand @ index.ts:1891](https://github.com/BlockRunAI/ClawRouter/blob/ed699ce6ab9654fe1b3b8431ed6174c5857df3e5/src/index.ts#L1891)
    - [registerService @ index.ts:1900](https://github.com/BlockRunAI/ClawRouter/blob/ed699ce6ab9654fe1b3b8431ed6174c5857df3e5/src/index.ts#L1900)
  - runtime coverage:
    - captured registration:registerCommand
    - captured registration:registerService
    - .crabpot/results/clawrouter/cold-import-extension-clawrouter-plugins-clawrouter-dist-index-js.capture.json
    - .crabpot/results/clawrouter/cold-import-extension-clawrouter-plugins-clawrouter-dist-index-js.synthetic.json

- 🟡 P2 **clawrouter** `inspector-gap` `inspector-follow-up`
  - **runtime-tool-capture**: clawrouter: runtime tool schema needs registration capture
  - state: runtime-covered · compat:none · runtime:covered
  - evidence:
    - [registerTool @ index.ts:1707](https://github.com/BlockRunAI/ClawRouter/blob/ed699ce6ab9654fe1b3b8431ed6174c5857df3e5/src/index.ts#L1707)
  - runtime coverage:
    - captured registration:registerTool
    - .crabpot/results/clawrouter/cold-import-extension-clawrouter-plugins-clawrouter-dist-index-js.capture.json
    - .crabpot/results/clawrouter/cold-import-extension-clawrouter-plugins-clawrouter-dist-index-js.synthetic.json

- 🟡 P2 **codex** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: codex: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@mariozechner/pi-coding-agent @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/codex/package.json)
    - [@openai/codex @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/codex/package.json)
    - [ajv @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/codex/package.json)
    - [ws @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/codex/package.json)
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/codex/package.json)

- 🟡 P2 **codex** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: codex: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec

- 🟡 P2 **codex** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: codex: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.5.1-beta.1
    - buildOpenClawVersion:2026.5.7

- 🟡 P2 **codex** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: codex: runtime registrations need capture evidence before final contract judgment
  - state: runtime-covered · compat:active · runtime:covered
  - evidence:
    - [registerCommand @ index.js:350](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/codex/dist/index.js#L350)
  - runtime coverage:
    - captured registration:registerCommand
    - .crabpot/results/codex/cold-import-runtimeExtension-codex-plugins-codex-crabpot-package-dist-index-js.capture.json
    - .crabpot/results/codex/cold-import-runtimeExtension-codex-plugins-codex-crabpot-package-dist-index-js.synthetic.json

- 🟡 P2 **codex-app-server** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: codex-app-server: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [openclaw/plugin-sdk @ index.ts:1](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/index.ts#L1)
    - [openclaw/plugin-sdk @ client.ts:6](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/src/client.ts#L6)
    - [openclaw/plugin-sdk @ controller.ts:18](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/src/controller.ts#L18)
    - [openclaw/plugin-sdk @ types.ts:1](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/src/types.ts#L1)

- 🟡 P2 **codex-app-server** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: codex-app-server: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [ws @ package.json](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/package.json)

- 🟡 P2 **codex-app-server** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: codex-app-server: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/index.ts)

- 🟡 P2 **codex-app-server** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: codex-app-server: runtime registrations need capture evidence before final contract judgment
  - state: runtime-covered · compat:active · runtime:covered
  - evidence:
    - [registerCommand @ index.ts:48](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/index.ts#L48)
    - [registerInteractiveHandler @ index.ts:29](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/index.ts#L29)
    - [registerInteractiveHandler @ index.ts:38](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/index.ts#L38)
    - [registerService @ index.ts:12](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/index.ts#L12)
  - runtime coverage:
    - captured registration:registerCommand
    - captured registration:registerInteractiveHandler
    - captured registration:registerService
    - .crabpot/results/codex-app-server/cold-import-extension-codex-app-server-plugins-codex-app-server-index-ts.capture.json
    - .crabpot/results/codex-app-server/cold-import-extension-codex-app-server-plugins-codex-app-server-index-ts.synthetic.json

- 🟡 P2 **composio** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: composio: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [openclaw/plugin-sdk @ index.ts:1](https://github.com/ComposioHQ/openclaw-composio-plugin/blob/47025c33224d343d9fbbf67e0a24e56eeaa18fff/index.ts#L1)

- 🟡 P2 **composio** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: composio: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - [package.json](https://github.com/ComposioHQ/openclaw-composio-plugin/blob/47025c33224d343d9fbbf67e0a24e56eeaa18fff/package.json)

- 🟡 P2 **composio** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: composio: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/ComposioHQ/openclaw-composio-plugin/blob/47025c33224d343d9fbbf67e0a24e56eeaa18fff/index.ts)

- 🟡 P2 **connectclaw** `deprecation-warning` `core-compat-adapter`
  - **legacy-before-agent-start**: connectclaw: legacy before_agent_start hook compatibility is still used
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [before_agent_start @ hooks.ts:17](https://github.com/osipov-anton/connectclaw/blob/7a4e2646e914de075435b3837123cc03c3edae36/packages/plugin/src/hooks.ts#L17)

- 🟡 P2 **connectclaw** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: connectclaw: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [openclaw/plugin-sdk @ index.ts:1](https://github.com/osipov-anton/connectclaw/blob/7a4e2646e914de075435b3837123cc03c3edae36/packages/plugin/index.ts#L1)
    - [openclaw/plugin-sdk @ commands.ts:1](https://github.com/osipov-anton/connectclaw/blob/7a4e2646e914de075435b3837123cc03c3edae36/packages/plugin/src/commands.ts#L1)
    - [openclaw/plugin-sdk @ hooks.ts:1](https://github.com/osipov-anton/connectclaw/blob/7a4e2646e914de075435b3837123cc03c3edae36/packages/plugin/src/hooks.ts#L1)
    - [openclaw/plugin-sdk @ tools.ts:1](https://github.com/osipov-anton/connectclaw/blob/7a4e2646e914de075435b3837123cc03c3edae36/packages/plugin/src/tools.ts#L1)
    - [openclaw/plugin-sdk @ tools.ts:2](https://github.com/osipov-anton/connectclaw/blob/7a4e2646e914de075435b3837123cc03c3edae36/packages/plugin/src/tools.ts#L2)

- 🟡 P2 **connectclaw** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: connectclaw: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/osipov-anton/connectclaw/blob/7a4e2646e914de075435b3837123cc03c3edae36/packages/plugin/index.ts)

- 🟡 P2 **connectclaw** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: connectclaw: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:active
  - evidence:
    - [registerCommand @ commands.ts:18](https://github.com/osipov-anton/connectclaw/blob/7a4e2646e914de075435b3837123cc03c3edae36/packages/plugin/src/commands.ts#L18)
    - [registerCommand @ commands.ts:64](https://github.com/osipov-anton/connectclaw/blob/7a4e2646e914de075435b3837123cc03c3edae36/packages/plugin/src/commands.ts#L64)
    - [registerService @ hooks.ts:91](https://github.com/osipov-anton/connectclaw/blob/7a4e2646e914de075435b3837123cc03c3edae36/packages/plugin/src/hooks.ts#L91)

- 🟡 P2 **connectclaw** `inspector-gap` `inspector-follow-up`
  - **runtime-tool-capture**: connectclaw: runtime tool schema needs registration capture
  - state: open · compat:none
  - evidence:
    - [registerTool @ tools.ts:6](https://github.com/osipov-anton/connectclaw/blob/7a4e2646e914de075435b3837123cc03c3edae36/packages/plugin/src/tools.ts#L6)

- 🟡 P2 **ddingtalk** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: ddingtalk: channel runtime needs envelope/config probes
  - state: open · compat:active
  - evidence:
    - [defineChannelPluginEntry @ index.ts:8](https://github.com/largezhou/openclaw-dingtalk/blob/74d22da7335f261ec5febe2663bed6b81068b7ec/index.ts#L8)

- 🟡 P2 **ddingtalk** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: ddingtalk: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [dingtalk-stream @ package.json](https://github.com/largezhou/openclaw-dingtalk/blob/74d22da7335f261ec5febe2663bed6b81068b7ec/package.json)
    - [zod @ package.json](https://github.com/largezhou/openclaw-dingtalk/blob/74d22da7335f261ec5febe2663bed6b81068b7ec/package.json)

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

- 🟡 P2 **diagnostics-otel** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: diagnostics-otel: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@opentelemetry/api @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/diagnostics-otel/package.json)
    - [@opentelemetry/api-logs @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/diagnostics-otel/package.json)
    - [@opentelemetry/exporter-logs-otlp-proto @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/diagnostics-otel/package.json)
    - [@opentelemetry/exporter-metrics-otlp-proto @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/diagnostics-otel/package.json)
    - [@opentelemetry/exporter-trace-otlp-proto @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/diagnostics-otel/package.json)
    - [@opentelemetry/resources @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/diagnostics-otel/package.json)
    - [@opentelemetry/sdk-logs @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/diagnostics-otel/package.json)
    - [@opentelemetry/sdk-metrics @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/diagnostics-otel/package.json)
    - [@opentelemetry/sdk-node @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/diagnostics-otel/package.json)
    - [@opentelemetry/sdk-trace-base @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/diagnostics-otel/package.json)
    - [@opentelemetry/semantic-conventions @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/diagnostics-otel/package.json)

- 🟡 P2 **diagnostics-otel** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: diagnostics-otel: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.4.25
    - buildOpenClawVersion:2026.5.7

- 🟡 P2 **diagnostics-otel** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: diagnostics-otel: runtime registrations need capture evidence before final contract judgment
  - state: runtime-covered · compat:active · runtime:covered
  - evidence:
    - [registerService @ index.js:1468](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/diagnostics-otel/dist/index.js#L1468)
  - runtime coverage:
    - captured registration:registerService
    - .crabpot/results/diagnostics-otel/cold-import-runtimeExtension-diagnostics-otel-plugins-diagnostics-otel-crabpot-package-dist-index-js.capture.json
    - .crabpot/results/diagnostics-otel/cold-import-runtimeExtension-diagnostics-otel-plugins-diagnostics-otel-crabpot-package-dist-index-js.synthetic.json

- 🟡 P2 **diagnostics-prometheus** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: diagnostics-prometheus: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.4.25
    - buildOpenClawVersion:2026.5.7

- 🟡 P2 **diagnostics-prometheus** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: diagnostics-prometheus: runtime registrations need capture evidence before final contract judgment
  - state: runtime-covered · compat:active · runtime:covered
  - evidence:
    - [registerHttpRoute @ index.js:444](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/diagnostics-prometheus/dist/index.js#L444)
    - [registerService @ index.js:443](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/diagnostics-prometheus/dist/index.js#L443)
  - runtime coverage:
    - captured registration:registerHttpRoute
    - captured registration:registerService
    - .crabpot/results/diagnostics-prometheus/cold-import-runtimeExtension-diagnostics-prometheus-plugins-diagnostics-prometheus-crabpot-package-dist-index-js.capture.json
    - .crabpot/results/diagnostics-prometheus/cold-import-runtimeExtension-diagnostics-prometheus-plugins-diagnostics-prometheus-crabpot-package-dist-index-js.synthetic.json

- 🟡 P2 **diffs** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: diffs: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@pierre/diffs @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/diffs/package.json)
    - [@pierre/theme @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/diffs/package.json)
    - [playwright-core @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/diffs/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/diffs/package.json)

- 🟡 P2 **diffs** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: diffs: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec

- 🟡 P2 **diffs** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: diffs: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.4.30
    - buildOpenClawVersion:2026.5.7

- 🟡 P2 **diffs** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: diffs: runtime registrations need capture evidence before final contract judgment
  - state: runtime-covered · compat:active · runtime:covered
  - evidence:
    - [registerHttpRoute @ index.js:2054](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/diffs/dist/index.js#L2054)
  - runtime coverage:
    - captured registration:registerHttpRoute
    - .crabpot/results/diffs/cold-import-runtimeExtension-diffs-plugins-diffs-crabpot-package-dist-index-js.capture.json
    - .crabpot/results/diffs/cold-import-runtimeExtension-diffs-plugins-diffs-crabpot-package-dist-index-js.synthetic.json

- 🟡 P2 **dingtalk-connector** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: dingtalk-connector: channel runtime needs envelope/config probes
  - state: open · compat:active
  - evidence:
    - [registerChannel @ index.ts:74](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/index.ts#L74)

- 🟡 P2 **dingtalk-connector** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: dingtalk-connector: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [openclaw/plugin-sdk @ index.ts:17](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/index.ts#L17)
    - [openclaw/plugin-sdk @ channel.ts:4](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/src/channel.ts#L4)
    - [openclaw/plugin-sdk @ accounts.ts:2](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/src/config/accounts.ts#L2)
    - [openclaw/plugin-sdk @ connection.ts:16](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/src/core/connection.ts#L16)
    - [openclaw/plugin-sdk @ provider.ts:14](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/src/core/provider.ts#L14)
    - [openclaw/plugin-sdk @ directory.ts:1](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/src/directory.ts#L1)
    - [openclaw/plugin-sdk @ gateway-methods.ts:7](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/src/gateway-methods.ts#L7)
    - [openclaw/plugin-sdk @ onboarding.ts:5](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/src/onboarding.ts#L5)
    - [openclaw/plugin-sdk @ runtime.ts:1](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/src/runtime.ts#L1)
    - [openclaw/plugin-sdk @ agent.ts:8](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/src/utils/agent.ts#L8)

- 🟡 P2 **dingtalk-connector** `upstream-metadata` `plugin-upstream-fix`
  - **manifest-unknown-fields**: dingtalk-connector: manifest uses unsupported top-level fields
  - state: open · compat:none
  - evidence:
    - [author @ openclaw.plugin.json](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/openclaw.plugin.json)
    - [main @ openclaw.plugin.json](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/openclaw.plugin.json)

- 🟡 P2 **dingtalk-connector** `inspector-gap` `inspector-follow-up`
  - **package-build-artifact-entrypoint**: dingtalk-connector: cold import requires package build output
  - state: open · compat:none
  - evidence:
    - [extension:./dist/index.mjs @ index.mjs](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/dist/index.mjs)

- 🟡 P2 **dingtalk-connector** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: dingtalk-connector: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [axios @ package.json](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/package.json)
    - [dingtalk-stream @ package.json](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/package.json)
    - [form-data @ package.json](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/package.json)
    - [qrcode-terminal @ package.json](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/package.json)
    - [zod @ package.json](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/package.json)
    - [mammoth @ package.json](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/package.json)

- 🟡 P2 **dingtalk-connector** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: dingtalk-connector: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - [package.json](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/package.json)

- 🟡 P2 **dingtalk-connector** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: dingtalk-connector: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:active
  - evidence:
    - [registerChannel @ index.ts:74](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/index.ts#L74)
    - [registerGatewayMethod @ gateway-methods.ts:130](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/src/gateway-methods.ts#L130)
    - [registerGatewayMethod @ gateway-methods.ts:190](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/src/gateway-methods.ts#L190)
    - [registerGatewayMethod @ gateway-methods.ts:258](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/src/gateway-methods.ts#L258)
    - [registerGatewayMethod @ gateway-methods.ts:311](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/src/gateway-methods.ts#L311)
    - [registerGatewayMethod @ gateway-methods.ts:351](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/src/gateway-methods.ts#L351)
    - [registerGatewayMethod @ gateway-methods.ts:388](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/src/gateway-methods.ts#L388)
    - [registerGatewayMethod @ gateway-methods.ts:425](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/src/gateway-methods.ts#L425)
    - [registerGatewayMethod @ gateway-methods.ts:452](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/src/gateway-methods.ts#L452)
    - [registerGatewayMethod @ gateway-methods.ts:506](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/src/gateway-methods.ts#L506)
    - [registerGatewayMethod @ gateway-methods.ts:593](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/src/gateway-methods.ts#L593)
    - [registerGatewayMethod @ gateway-methods.ts:60](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/src/gateway-methods.ts#L60)
    - [registerGatewayMethod @ gateway-methods.ts:652](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/src/gateway-methods.ts#L652)
    - [registerGatewayMethod @ gateway-methods.ts:719](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/src/gateway-methods.ts#L719)

- 🟡 P2 **discord** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: discord: channel runtime needs envelope/config probes
  - state: open · compat:active
  - evidence:
    - [createChatChannelPlugin @ channel-UXGa9PGc.js:406](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/discord/dist/channel-UXGa9PGc.js#L406)

- 🟡 P2 **discord** `deprecation-warning` `core-compat-adapter`
  - **channel-env-vars**: discord: channelEnvVars legacy manifest metadata must stay covered
  - state: open · compat:deprecated · deprecated
  - evidence:
    - discord

- 🟡 P2 **discord** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: discord: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@discordjs/voice @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/discord/package.json)
    - [discord-api-types @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/discord/package.json)
    - [https-proxy-agent @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/discord/package.json)
    - [opusscript @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/discord/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/discord/package.json)
    - [undici @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/discord/package.json)
    - [ws @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/discord/package.json)

- 🟡 P2 **discord** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: discord: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec

- 🟡 P2 **discord** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: discord: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.4.10
    - buildOpenClawVersion:2026.5.7

- 🟡 P2 **feishu** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: feishu: channel runtime needs envelope/config probes
  - state: open · compat:active
  - evidence:
    - [createChatChannelPlugin @ channel-BegH3cJm.js:1087](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/feishu/dist/channel-BegH3cJm.js#L1087)

- 🟡 P2 **feishu** `deprecation-warning` `core-compat-adapter`
  - **channel-env-vars**: feishu: channelEnvVars legacy manifest metadata must stay covered
  - state: open · compat:deprecated · deprecated
  - evidence:
    - feishu

- 🟡 P2 **feishu** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: feishu: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@larksuiteoapi/node-sdk @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/feishu/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/feishu/package.json)

- 🟡 P2 **feishu** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: feishu: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec

- 🟡 P2 **feishu** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: feishu: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.4.25
    - buildOpenClawVersion:2026.5.7

- 🟡 P2 **google-meet** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: google-meet: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [commander @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/google-meet/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/google-meet/package.json)

- 🟡 P2 **google-meet** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: google-meet: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec

- 🟡 P2 **google-meet** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: google-meet: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.4.20
    - buildOpenClawVersion:2026.5.7

- 🟡 P2 **google-meet** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: google-meet: runtime registrations need capture evidence before final contract judgment
  - state: runtime-covered · compat:active · runtime:covered
  - evidence:
    - [registerGatewayMethod @ index.js:4307](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/google-meet/dist/index.js#L4307)
    - [registerGatewayMethod @ index.js:4323](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/google-meet/dist/index.js#L4323)
    - [registerGatewayMethod @ index.js:4340](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/google-meet/dist/index.js#L4340)
    - [registerGatewayMethod @ index.js:4347](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/google-meet/dist/index.js#L4347)
    - [registerGatewayMethod @ index.js:4357](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/google-meet/dist/index.js#L4357)
    - [registerGatewayMethod @ index.js:4368](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/google-meet/dist/index.js#L4368)
    - [registerGatewayMethod @ index.js:4388](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/google-meet/dist/index.js#L4388)
    - [registerGatewayMethod @ index.js:4403](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/google-meet/dist/index.js#L4403)
    - [registerGatewayMethod @ index.js:4419](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/google-meet/dist/index.js#L4419)
    - [registerGatewayMethod @ index.js:4436](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/google-meet/dist/index.js#L4436)
    - [registerGatewayMethod @ index.js:4443](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/google-meet/dist/index.js#L4443)
    - [registerGatewayMethod @ index.js:4455](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/google-meet/dist/index.js#L4455)
    - [registerGatewayMethod @ index.js:4466](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/google-meet/dist/index.js#L4466)
    - [registerGatewayMethod @ index.js:4478](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/google-meet/dist/index.js#L4478)
    - [registerGatewayMethod @ index.js:4494](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/google-meet/dist/index.js#L4494)
    - [registerNodeHostCommand @ index.js:4649](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/google-meet/dist/index.js#L4649)
  - runtime coverage:
    - captured registration:registerGatewayMethod
    - captured registration:registerNodeHostCommand
    - .crabpot/results/google-meet/cold-import-runtimeExtension-google-meet-plugins-google-meet-crabpot-package-dist-index-js.capture.json
    - .crabpot/results/google-meet/cold-import-runtimeExtension-google-meet-plugins-google-meet-crabpot-package-dist-index-js.synthetic.json

- 🟡 P2 **hasdata** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: hasdata: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@sinclair/typebox @ package.json](https://github.com/HasData/hasdata-openclaw-plugin/blob/bed32d8a0359392b7c4628f12b909b6e204c8426/package.json)

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
    - [before_agent_start @ subagent.ts:18](https://github.com/plastic-labs/openclaw-honcho/blob/e9f01452b781d24b38336ef0738f2c97353c541e/hooks/subagent.ts#L18)

- 🟡 P2 **honcho** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: honcho: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [openclaw/plugin-sdk @ cli.ts:8](https://github.com/plastic-labs/openclaw-honcho/blob/e9f01452b781d24b38336ef0738f2c97353c541e/commands/cli.ts#L8)
    - [openclaw/plugin-sdk @ capture.ts:2](https://github.com/plastic-labs/openclaw-honcho/blob/e9f01452b781d24b38336ef0738f2c97353c541e/hooks/capture.ts#L2)
    - [openclaw/plugin-sdk @ context.ts:2](https://github.com/plastic-labs/openclaw-honcho/blob/e9f01452b781d24b38336ef0738f2c97353c541e/hooks/context.ts#L2)
    - [openclaw/plugin-sdk @ gateway.ts:2](https://github.com/plastic-labs/openclaw-honcho/blob/e9f01452b781d24b38336ef0738f2c97353c541e/hooks/gateway.ts#L2)
    - [openclaw/plugin-sdk @ subagent.ts:2](https://github.com/plastic-labs/openclaw-honcho/blob/e9f01452b781d24b38336ef0738f2c97353c541e/hooks/subagent.ts#L2)
    - [openclaw/plugin-sdk @ state.ts:9](https://github.com/plastic-labs/openclaw-honcho/blob/e9f01452b781d24b38336ef0738f2c97353c541e/state.ts#L9)
    - [openclaw/plugin-sdk @ ask.ts:3](https://github.com/plastic-labs/openclaw-honcho/blob/e9f01452b781d24b38336ef0738f2c97353c541e/tools/ask.ts#L3)
    - [openclaw/plugin-sdk @ context.ts:3](https://github.com/plastic-labs/openclaw-honcho/blob/e9f01452b781d24b38336ef0738f2c97353c541e/tools/context.ts#L3)
    - [openclaw/plugin-sdk @ memory-passthrough.ts:3](https://github.com/plastic-labs/openclaw-honcho/blob/e9f01452b781d24b38336ef0738f2c97353c541e/tools/memory-passthrough.ts#L3)
    - [openclaw/plugin-sdk @ message-search.ts:3](https://github.com/plastic-labs/openclaw-honcho/blob/e9f01452b781d24b38336ef0738f2c97353c541e/tools/message-search.ts#L3)
    - [openclaw/plugin-sdk @ search.ts:3](https://github.com/plastic-labs/openclaw-honcho/blob/e9f01452b781d24b38336ef0738f2c97353c541e/tools/search.ts#L3)
    - [openclaw/plugin-sdk @ session.ts:3](https://github.com/plastic-labs/openclaw-honcho/blob/e9f01452b781d24b38336ef0738f2c97353c541e/tools/session.ts#L3)

- 🟡 P2 **honcho** `inspector-gap` `inspector-follow-up`
  - **package-build-artifact-entrypoint**: honcho: cold import requires package build output
  - state: open · compat:none
  - evidence:
    - [extension:./dist/index.js @ index.js](https://github.com/plastic-labs/openclaw-honcho/blob/e9f01452b781d24b38336ef0738f2c97353c541e/dist/index.js)

- 🟡 P2 **honcho** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: honcho: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@honcho-ai/sdk @ package.json](https://github.com/plastic-labs/openclaw-honcho/blob/e9f01452b781d24b38336ef0738f2c97353c541e/package.json)
    - [@sinclair/typebox @ package.json](https://github.com/plastic-labs/openclaw-honcho/blob/e9f01452b781d24b38336ef0738f2c97353c541e/package.json)

- 🟡 P2 **honcho** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: honcho: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:active
  - evidence:
    - [registerMemoryPromptSection @ index.ts:97](https://github.com/plastic-labs/openclaw-honcho/blob/e9f01452b781d24b38336ef0738f2c97353c541e/index.ts#L97)
    - [registerMemoryRuntime @ runtime.ts:274](https://github.com/plastic-labs/openclaw-honcho/blob/e9f01452b781d24b38336ef0738f2c97353c541e/runtime.ts#L274)

- 🟡 P2 **honcho** `inspector-gap` `inspector-follow-up`
  - **runtime-tool-capture**: honcho: runtime tool schema needs registration capture
  - state: open · compat:none
  - evidence:
    - [registerTool @ ask.ts:8](https://github.com/plastic-labs/openclaw-honcho/blob/e9f01452b781d24b38336ef0738f2c97353c541e/tools/ask.ts#L8)
    - [registerTool @ context.ts:8](https://github.com/plastic-labs/openclaw-honcho/blob/e9f01452b781d24b38336ef0738f2c97353c541e/tools/context.ts#L8)
    - [registerTool @ memory-passthrough.ts:130](https://github.com/plastic-labs/openclaw-honcho/blob/e9f01452b781d24b38336ef0738f2c97353c541e/tools/memory-passthrough.ts#L130)
    - [registerTool @ memory-passthrough.ts:89](https://github.com/plastic-labs/openclaw-honcho/blob/e9f01452b781d24b38336ef0738f2c97353c541e/tools/memory-passthrough.ts#L89)
    - [registerTool @ message-search.ts:9](https://github.com/plastic-labs/openclaw-honcho/blob/e9f01452b781d24b38336ef0738f2c97353c541e/tools/message-search.ts#L9)
    - [registerTool @ search.ts:8](https://github.com/plastic-labs/openclaw-honcho/blob/e9f01452b781d24b38336ef0738f2c97353c541e/tools/search.ts#L8)
    - [registerTool @ session.ts:8](https://github.com/plastic-labs/openclaw-honcho/blob/e9f01452b781d24b38336ef0738f2c97353c541e/tools/session.ts#L8)

- 🟡 P2 **hyperspell** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: hyperspell: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [openclaw/plugin-sdk @ slash.ts:1](https://github.com/hyperspell/hyperspell-openclaw/blob/3ccb46f1c4c98149fbb69a6dbcb893f167e0e246/commands/slash.ts#L1)
    - [openclaw/plugin-sdk @ tools.ts:2](https://github.com/hyperspell/hyperspell-openclaw/blob/3ccb46f1c4c98149fbb69a6dbcb893f167e0e246/graph/tools.ts#L2)
    - [openclaw/plugin-sdk @ index.ts:1](https://github.com/hyperspell/hyperspell-openclaw/blob/3ccb46f1c4c98149fbb69a6dbcb893f167e0e246/index.ts#L1)

- 🟡 P2 **hyperspell** `inspector-gap` `inspector-follow-up`
  - **package-build-artifact-entrypoint**: hyperspell: cold import requires package build output
  - state: open · compat:none
  - evidence:
    - [extension:./dist/index.js @ index.js](https://github.com/hyperspell/hyperspell-openclaw/blob/3ccb46f1c4c98149fbb69a6dbcb893f167e0e246/dist/index.js)

- 🟡 P2 **hyperspell** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: hyperspell: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@clack/prompts @ package.json](https://github.com/hyperspell/hyperspell-openclaw/blob/3ccb46f1c4c98149fbb69a6dbcb893f167e0e246/package.json)
    - [@sinclair/typebox @ package.json](https://github.com/hyperspell/hyperspell-openclaw/blob/3ccb46f1c4c98149fbb69a6dbcb893f167e0e246/package.json)
    - [hyperspell @ package.json](https://github.com/hyperspell/hyperspell-openclaw/blob/3ccb46f1c4c98149fbb69a6dbcb893f167e0e246/package.json)

- 🟡 P2 **hyperspell** `upstream-metadata` `plugin-upstream-fix`
  - **package-manifest-version-drift**: hyperspell: package and manifest versions drift
  - state: open · compat:none
  - evidence:
    - package:0.13.1
    - manifest:0.13.0

- 🟡 P2 **hyperspell** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: hyperspell: runtime registrations need capture evidence before final contract judgment
  - state: runtime-covered · compat:active · runtime:covered
  - evidence:
    - [registerCommand @ slash.ts:166](https://github.com/hyperspell/hyperspell-openclaw/blob/3ccb46f1c4c98149fbb69a6dbcb893f167e0e246/commands/slash.ts#L166)
    - [registerCommand @ slash.ts:43](https://github.com/hyperspell/hyperspell-openclaw/blob/3ccb46f1c4c98149fbb69a6dbcb893f167e0e246/commands/slash.ts#L43)
    - [registerCommand @ slash.ts:98](https://github.com/hyperspell/hyperspell-openclaw/blob/3ccb46f1c4c98149fbb69a6dbcb893f167e0e246/commands/slash.ts#L98)
    - [registerCommand @ index.ts:51](https://github.com/hyperspell/hyperspell-openclaw/blob/3ccb46f1c4c98149fbb69a6dbcb893f167e0e246/index.ts#L51)
    - [registerCommand @ index.ts:62](https://github.com/hyperspell/hyperspell-openclaw/blob/3ccb46f1c4c98149fbb69a6dbcb893f167e0e246/index.ts#L62)
    - [registerCommand @ index.ts:73](https://github.com/hyperspell/hyperspell-openclaw/blob/3ccb46f1c4c98149fbb69a6dbcb893f167e0e246/index.ts#L73)
  - runtime coverage:
    - captured registration:registerCommand
    - .crabpot/results/hyperspell/cold-import-extension-hyperspell-plugins-hyperspell-dist-index-js.capture.json
    - .crabpot/results/hyperspell/cold-import-extension-hyperspell-plugins-hyperspell-dist-index-js.synthetic.json

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

- 🟡 P2 **kitchen-sink** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: kitchen-sink: channel runtime needs envelope/config probes
  - state: open · compat:active
  - evidence:
    - [registerChannel @ generated-registrars.js:8](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-registrars.js#L8)
    - [registerChannel @ kitchen-runtime.js:55](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/kitchen-runtime.js#L55)

- 🟡 P2 **kitchen-sink** `deprecation-warning` `core-compat-adapter`
  - **legacy-before-agent-start**: kitchen-sink: legacy before_agent_start hook compatibility is still used
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [before_agent_start @ generated-hooks.js:11](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-hooks.js#L11)

- 🟡 P2 **kitchen-sink** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: kitchen-sink: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [openclaw/plugin-sdk @ generated-sdk-imports.ts:2](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-sdk-imports.ts#L2)

- 🟡 P2 **kitchen-sink** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: kitchen-sink: runtime registrations need capture evidence before final contract judgment
  - state: runtime-covered · compat:active · runtime:covered
  - evidence:
    - [registerAutoEnableProbe @ generated-registrars.js:7](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-registrars.js#L7)
    - [registerChannel @ generated-registrars.js:8](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-registrars.js#L8)
    - [registerChannel @ kitchen-runtime.js:55](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/kitchen-runtime.js#L55)
    - [registerCommand @ generated-registrars.js:12](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-registrars.js#L12)
    - [registerCommand @ kitchen-runtime.js:50](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/kitchen-runtime.js#L50)
    - [registerCommand @ kitchen-runtime.js:51](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/kitchen-runtime.js#L51)
    - [registerCompactionProvider @ generated-registrars.js:13](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-registrars.js#L13)
    - [registerCompactionProvider @ kitchen-runtime.js:95](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/kitchen-runtime.js#L95)
    - [registerConfigMigration @ generated-registrars.js:14](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-registrars.js#L14)
    - [registerContextEngine @ generated-registrars.js:15](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-registrars.js#L15)
    - [registerDetachedTaskRuntime @ sync-surface.mjs:113](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/scripts/sync-surface.mjs#L113)
    - [registerDetachedTaskRuntime @ generated-registrars.js:17](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-registrars.js#L17)
    - [registerDetachedTaskRuntime @ kitchen-runtime.js:86](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/kitchen-runtime.js#L86)
    - [registerGatewayDiscoveryService @ generated-registrars.js:18](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-registrars.js#L18)
    - [registerGatewayMethod @ generated-registrars.js:19](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-registrars.js#L19)
    - [registerGatewayMethod @ kitchen-runtime.js:107](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/kitchen-runtime.js#L107)
    - [registerHook @ generated-registrars.js:20](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-registrars.js#L20)
    - [registerHttpRoute @ generated-registrars.js:21](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-registrars.js#L21)
    - [registerHttpRoute @ kitchen-runtime.js:105](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/kitchen-runtime.js#L105)
    - [registerInteractiveHandler @ generated-registrars.js:23](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-registrars.js#L23)
    - [registerInteractiveHandler @ kitchen-runtime.js:53](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/kitchen-runtime.js#L53)
    - [registerMemoryCapability @ generated-registrars.js:25](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-registrars.js#L25)
    - [registerMemoryCorpusSupplement @ generated-registrars.js:26](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-registrars.js#L26)
    - [registerMemoryCorpusSupplement @ kitchen-runtime.js:92](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/kitchen-runtime.js#L92)
    - [registerMemoryFlushPlan @ generated-registrars.js:28](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-registrars.js#L28)
    - [registerMemoryPromptSection @ generated-registrars.js:29](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-registrars.js#L29)
    - [registerMemoryPromptSupplement @ generated-registrars.js:30](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-registrars.js#L30)
    - [registerMemoryPromptSupplement @ kitchen-runtime.js:111](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/kitchen-runtime.js#L111)
    - [registerMemoryRuntime @ generated-registrars.js:31](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-registrars.js#L31)
    - [registerNodeHostCommand @ generated-registrars.js:34](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-registrars.js#L34)
    - [registerNodeInvokePolicy @ generated-registrars.js:35](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-registrars.js#L35)
    - [registerReload @ generated-registrars.js:39](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-registrars.js#L39)
    - [registerSecurityAuditCollector @ generated-registrars.js:41](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-registrars.js#L41)
    - [registerService @ generated-registrars.js:42](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-registrars.js#L42)
    - [registerService @ kitchen-runtime.js:104](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/kitchen-runtime.js#L104)
  - runtime coverage:
    - captured registration:registerAutoEnableProbe
    - captured registration:registerChannel
    - captured registration:registerCommand
    - captured registration:registerCompactionProvider
    - captured registration:registerConfigMigration
    - captured registration:registerContextEngine
    - captured registration:registerDetachedTaskRuntime
    - captured registration:registerGatewayDiscoveryService
    - captured registration:registerGatewayMethod
    - captured registration:registerHook
    - captured registration:registerHttpRoute
    - captured registration:registerInteractiveHandler
    - captured registration:registerMemoryCapability
    - captured registration:registerMemoryCorpusSupplement
    - captured registration:registerMemoryFlushPlan
    - captured registration:registerMemoryPromptSection
    - captured registration:registerMemoryPromptSupplement
    - captured registration:registerMemoryRuntime
    - captured registration:registerNodeHostCommand
    - captured registration:registerNodeInvokePolicy
    - captured registration:registerReload
    - captured registration:registerSecurityAuditCollector
    - captured registration:registerService
    - .crabpot/results/kitchen-sink/cold-import-extension-kitchen-sink-plugins-kitchen-sink-src-index-js.capture.json
    - .crabpot/results/kitchen-sink/cold-import-extension-kitchen-sink-plugins-kitchen-sink-src-index-js.synthetic.json
    - .crabpot/results/kitchen-sink/cold-import-runtimeExtension-kitchen-sink-plugins-kitchen-sink-src-index-js.capture.json
    - .crabpot/results/kitchen-sink/cold-import-runtimeExtension-kitchen-sink-plugins-kitchen-sink-src-index-js.synthetic.json
    - .crabpot/results/kitchen-sink/cold-import-setupEntry-kitchen-sink-plugins-kitchen-sink-src-setup-js.capture.json
    - .crabpot/results/kitchen-sink/cold-import-setupEntry-kitchen-sink-plugins-kitchen-sink-src-setup-js.synthetic.json

- 🟡 P2 **lightclawbot** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: lightclawbot: channel runtime needs envelope/config probes
  - state: open · compat:active
  - evidence:
    - createChatChannelPlugin @ plugins/lightclawbot/.crabpot-package/dist/src/channel.js:23
    - defineChannelPluginEntry @ plugins/lightclawbot/.crabpot-package/dist/index.js:25

- 🟡 P2 **lightclawbot** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: lightclawbot: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - ws @ plugins/lightclawbot/.crabpot-package/package.json

- 🟡 P2 **lightclawbot** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: lightclawbot: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - plugins/lightclawbot/.crabpot-package/package.json

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

- 🟡 P2 **lobster** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: lobster: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@clawdbot/lobster @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/lobster/package.json)
    - [ajv @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/lobster/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/lobster/package.json)

- 🟡 P2 **lobster** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: lobster: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec

- 🟡 P2 **lobster** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: lobster: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.4.25
    - buildOpenClawVersion:2026.5.7

- 🟡 P2 **lossless-claw** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: lossless-claw: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [openclaw/plugin-sdk @ openclaw-bridge.ts:21](https://github.com/Martian-Engineering/lossless-claw/blob/4fc60c925c1eed730a73c6bb62144f7af905687f/src/openclaw-bridge.ts#L21)
    - [openclaw/plugin-sdk @ openclaw-bridge.ts:26](https://github.com/Martian-Engineering/lossless-claw/blob/4fc60c925c1eed730a73c6bb62144f7af905687f/src/openclaw-bridge.ts#L26)

- 🟡 P2 **lossless-claw** `inspector-gap` `inspector-follow-up`
  - **package-build-artifact-entrypoint**: lossless-claw: cold import requires package build output
  - state: open · compat:none
  - evidence:
    - [extension:./dist/index.js @ index.js](https://github.com/Martian-Engineering/lossless-claw/blob/4fc60c925c1eed730a73c6bb62144f7af905687f/dist/index.js)

- 🟡 P2 **lossless-claw** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: lossless-claw: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@sinclair/typebox @ package.json](https://github.com/Martian-Engineering/lossless-claw/blob/4fc60c925c1eed730a73c6bb62144f7af905687f/package.json)
    - [@mariozechner/pi-agent-core @ package.json](https://github.com/Martian-Engineering/lossless-claw/blob/4fc60c925c1eed730a73c6bb62144f7af905687f/package.json)
    - [@mariozechner/pi-ai @ package.json](https://github.com/Martian-Engineering/lossless-claw/blob/4fc60c925c1eed730a73c6bb62144f7af905687f/package.json)
    - [@mariozechner/pi-coding-agent @ package.json](https://github.com/Martian-Engineering/lossless-claw/blob/4fc60c925c1eed730a73c6bb62144f7af905687f/package.json)

- 🟡 P2 **lossless-claw** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: lossless-claw: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:active
  - evidence:
    - [registerCommand @ index.ts:2385](https://github.com/Martian-Engineering/lossless-claw/blob/4fc60c925c1eed730a73c6bb62144f7af905687f/src/plugin/index.ts#L2385)
    - [registerContextEngine @ index.ts:2365](https://github.com/Martian-Engineering/lossless-claw/blob/4fc60c925c1eed730a73c6bb62144f7af905687f/src/plugin/index.ts#L2365)

- 🟡 P2 **matrix** `deprecation-warning` `core-compat-adapter`
  - **channel-env-vars**: matrix: channelEnvVars legacy manifest metadata must stay covered
  - state: open · compat:deprecated · deprecated
  - evidence:
    - matrix

- 🟡 P2 **matrix** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: matrix: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@matrix-org/matrix-sdk-crypto-nodejs @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/matrix/package.json)
    - [@matrix-org/matrix-sdk-crypto-wasm @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/matrix/package.json)
    - [fake-indexeddb @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/matrix/package.json)
    - [markdown-it @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/matrix/package.json)
    - [matrix-js-sdk @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/matrix/package.json)
    - [music-metadata @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/matrix/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/matrix/package.json)

- 🟡 P2 **matrix** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: matrix: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - [package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/matrix/package.json)

- 🟡 P2 **matrix** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: matrix: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/matrix/index.ts)
    - [setupEntry @ setup-entry.ts](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/matrix/setup-entry.ts)

- 🟡 P2 **matrix** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: matrix: runtime registrations need capture evidence before final contract judgment
  - state: runtime-covered · compat:active · runtime:covered
  - evidence:
    - [registerGatewayMethod @ index.ts:18](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/matrix/index.ts#L18)
    - [registerGatewayMethod @ index.ts:23](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/matrix/index.ts#L23)
    - [registerGatewayMethod @ index.ts:28](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/matrix/index.ts#L28)
  - runtime coverage:
    - captured registration:registerGatewayMethod
    - .crabpot/results/matrix/cold-import-extension-matrix-plugins-matrix-crabpot-package-index-ts.capture.json
    - .crabpot/results/matrix/cold-import-extension-matrix-plugins-matrix-crabpot-package-index-ts.synthetic.json
    - .crabpot/results/matrix/cold-import-setupEntry-matrix-plugins-matrix-crabpot-package-setup-entry-ts.capture.json
    - .crabpot/results/matrix/cold-import-setupEntry-matrix-plugins-matrix-crabpot-package-setup-entry-ts.synthetic.json

- 🟡 P2 **mattermost** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: mattermost: channel runtime needs envelope/config probes
  - state: open · compat:active
  - evidence:
    - [createChatChannelPlugin @ channel.ts:263](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/mattermost/src/channel.ts#L263)

- 🟡 P2 **mattermost** `deprecation-warning` `core-compat-adapter`
  - **channel-env-vars**: mattermost: channelEnvVars legacy manifest metadata must stay covered
  - state: open · compat:deprecated · deprecated
  - evidence:
    - mattermost

- 🟡 P2 **mattermost** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: mattermost: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [ws @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/mattermost/package.json)

- 🟡 P2 **mattermost** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: mattermost: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - [package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/mattermost/package.json)

- 🟡 P2 **mattermost** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: mattermost: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/mattermost/index.ts)
    - [setupEntry @ setup-entry.ts](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/mattermost/setup-entry.ts)

- 🟡 P2 **mattermost** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: mattermost: runtime registrations need capture evidence before final contract judgment
  - state: runtime-covered · compat:active · runtime:covered
  - evidence:
    - [registerHttpRoute @ slash-state.ts:396](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/mattermost/src/mattermost/slash-state.ts#L396)
  - runtime coverage:
    - captured registration:registerHttpRoute
    - .crabpot/results/mattermost/cold-import-extension-mattermost-plugins-mattermost-crabpot-package-index-ts.capture.json
    - .crabpot/results/mattermost/cold-import-extension-mattermost-plugins-mattermost-crabpot-package-index-ts.synthetic.json
    - .crabpot/results/mattermost/cold-import-setupEntry-mattermost-plugins-mattermost-crabpot-package-setup-entry-ts.capture.json
    - .crabpot/results/mattermost/cold-import-setupEntry-mattermost-plugins-mattermost-crabpot-package-setup-entry-ts.synthetic.json

- 🟡 P2 **mcp-adapter** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: mcp-adapter: cold import requires dependency installation in an isolated workspace
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
  - **registration-capture-gap**: mcp-adapter: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:active
  - evidence:
    - [registerService @ index.ts:15](https://github.com/androidStern-personal/openclaw-mcp-adapter/blob/5434ce21ac780a46a493c8125e52e80a03dd2640/index.ts#L15)

- 🟡 P2 **mcp-adapter** `inspector-gap` `inspector-follow-up`
  - **runtime-tool-capture**: mcp-adapter: runtime tool schema needs registration capture
  - state: open · compat:none
  - evidence:
    - [registerTool @ index.ts:30](https://github.com/androidStern-personal/openclaw-mcp-adapter/blob/5434ce21ac780a46a493c8125e52e80a03dd2640/index.ts#L30)

- 🟡 P2 **memory-lancedb** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: memory-lancedb: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@lancedb/lancedb @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/memory-lancedb/package.json)
    - [apache-arrow @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/memory-lancedb/package.json)
    - [openai @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/memory-lancedb/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/memory-lancedb/package.json)

- 🟡 P2 **memory-lancedb** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: memory-lancedb: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec

- 🟡 P2 **memory-lancedb** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: memory-lancedb: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.4.10
    - buildOpenClawVersion:2026.5.7

- 🟡 P2 **memory-lancedb** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: memory-lancedb: runtime registrations need capture evidence before final contract judgment
  - state: runtime-covered · compat:active · runtime:covered
  - evidence:
    - [registerService @ index.js:345](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/memory-lancedb/dist/index.js#L345)
    - [registerService @ index.js:690](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/memory-lancedb/dist/index.js#L690)
  - runtime coverage:
    - captured registration:registerService
    - .crabpot/results/memory-lancedb/cold-import-runtimeExtension-memory-lancedb-plugins-memory-lancedb-crabpot-package-dist-index-js.capture.json
    - .crabpot/results/memory-lancedb/cold-import-runtimeExtension-memory-lancedb-plugins-memory-lancedb-crabpot-package-dist-index-js.synthetic.json

- 🟡 P2 **memory-tencentdb** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: memory-tencentdb: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - openclaw/plugin-sdk @ plugins/memory-tencentdb/.crabpot-package/dist/index.mjs:6238
    - openclaw/plugin-sdk @ plugins/memory-tencentdb/.crabpot-package/src/offload/index.ts:1852

- 🟡 P2 **memory-tencentdb** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: memory-tencentdb: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - @ai-sdk/openai @ plugins/memory-tencentdb/.crabpot-package/package.json
    - @node-rs/jieba @ plugins/memory-tencentdb/.crabpot-package/package.json
    - @tencentdb-agent-memory/tcvdb-text @ plugins/memory-tencentdb/.crabpot-package/package.json
    - ai @ plugins/memory-tencentdb/.crabpot-package/package.json
    - js-tiktoken @ plugins/memory-tencentdb/.crabpot-package/package.json
    - json5 @ plugins/memory-tencentdb/.crabpot-package/package.json
    - sqlite-vec @ plugins/memory-tencentdb/.crabpot-package/package.json
    - tsx @ plugins/memory-tencentdb/.crabpot-package/package.json
    - undici @ plugins/memory-tencentdb/.crabpot-package/package.json
    - yaml @ plugins/memory-tencentdb/.crabpot-package/package.json
    - node-llama-cpp @ plugins/memory-tencentdb/.crabpot-package/package.json
    - opik @ plugins/memory-tencentdb/.crabpot-package/package.json

- 🟡 P2 **memory-tencentdb** `upstream-metadata` `plugin-upstream-fix`
  - **package-openclaw-unsupported-metadata**: memory-tencentdb: package declares unsupported OpenClaw metadata
  - state: open · compat:none
  - evidence:
    - openclaw.bundle

- 🟡 P2 **memory-tencentdb** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: memory-tencentdb: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - extension:plugins/memory-tencentdb/.crabpot-package/index.ts

- 🟡 P2 **memory-tencentdb** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: memory-tencentdb: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:active
  - evidence:
    - registerContextEngine @ plugins/memory-tencentdb/.crabpot-package/dist/index.mjs:5664
    - registerContextEngine @ plugins/memory-tencentdb/.crabpot-package/dist/index.mjs:5675
    - registerContextEngine @ plugins/memory-tencentdb/.crabpot-package/src/offload/index.ts:1172
    - registerContextEngine @ plugins/memory-tencentdb/.crabpot-package/src/offload/index.ts:1183

- 🟡 P2 **memos-cloud** `deprecation-warning` `core-compat-adapter`
  - **legacy-before-agent-start**: memos-cloud: legacy before_agent_start hook compatibility is still used
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [before_agent_start @ index.js:531](https://github.com/MemTensor/MemOS-Cloud-OpenClaw-Plugin/blob/e931499a2589af06ee543ce07df2bdda29ac8085/index.js#L531)

- 🟡 P2 **memos-cloud** `upstream-metadata` `plugin-upstream-fix`
  - **manifest-unknown-fields**: memos-cloud: manifest uses unsupported top-level fields
  - state: open · compat:none
  - evidence:
    - [main @ openclaw.plugin.json](https://github.com/MemTensor/MemOS-Cloud-OpenClaw-Plugin/blob/e931499a2589af06ee543ce07df2bdda29ac8085/openclaw.plugin.json)

- 🟡 P2 **memos-cloud** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: memos-cloud: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - [package.json](https://github.com/MemTensor/MemOS-Cloud-OpenClaw-Plugin/blob/e931499a2589af06ee543ce07df2bdda29ac8085/package.json)

- 🟡 P2 **memos-cloud** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: memos-cloud: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:active
  - evidence:
    - [registerHook @ index.js:517](https://github.com/MemTensor/MemOS-Cloud-OpenClaw-Plugin/blob/e931499a2589af06ee543ce07df2bdda29ac8085/index.js#L517)

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
  - state: open · compat:active
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
  - **package-dependency-install-required**: mocrane-wecom: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@wecom/aibot-node-sdk @ package.json](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/package.json)
    - [fast-xml-parser @ package.json](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/package.json)
    - [file-type @ package.json](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/package.json)
    - [undici @ package.json](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/package.json)
    - [zod @ package.json](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/package.json)

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
  - **registration-capture-gap**: mocrane-wecom: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:active
  - evidence:
    - [registerChannel @ index.ts:31](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/index.ts#L31)
    - [registerHttpRoute @ index.ts:34](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/index.ts#L34)

- 🟡 P2 **mocrane-wecom** `inspector-gap` `inspector-follow-up`
  - **runtime-tool-capture**: mocrane-wecom: runtime tool schema needs registration capture
  - state: open · compat:none
  - evidence:
    - [registerTool @ index.ts:43](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/index.ts#L43)

- 🟡 P2 **msteams** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: msteams: channel runtime needs envelope/config probes
  - state: open · compat:active
  - evidence:
    - [createChatChannelPlugin @ channel-BOwKBAvY.js:379](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/msteams/dist/channel-BOwKBAvY.js#L379)

- 🟡 P2 **msteams** `deprecation-warning` `core-compat-adapter`
  - **channel-env-vars**: msteams: channelEnvVars legacy manifest metadata must stay covered
  - state: open · compat:deprecated · deprecated
  - evidence:
    - msteams

- 🟡 P2 **msteams** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: msteams: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@azure/identity @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/msteams/package.json)
    - [@microsoft/teams.api @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/msteams/package.json)
    - [@microsoft/teams.apps @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/msteams/package.json)
    - [express @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/msteams/package.json)
    - [jsonwebtoken @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/msteams/package.json)
    - [jwks-rsa @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/msteams/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/msteams/package.json)

- 🟡 P2 **msteams** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: msteams: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec

- 🟡 P2 **msteams** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: msteams: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.4.10
    - buildOpenClawVersion:2026.5.7

- 🟡 P2 **nemoclaw** `inspector-gap` `inspector-follow-up`
  - **package-build-artifact-entrypoint**: nemoclaw: cold import requires package build output
  - state: open · compat:none
  - evidence:
    - [extension:./dist/index.js @ index.js](https://github.com/NVIDIA/NemoClaw/blob/c517d622c325803a85312c26dc698ff561d059aa/nemoclaw/dist/index.js)

- 🟡 P2 **nemoclaw** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: nemoclaw: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [commander @ package.json](https://github.com/NVIDIA/NemoClaw/blob/c517d622c325803a85312c26dc698ff561d059aa/nemoclaw/package.json)
    - [execa @ package.json](https://github.com/NVIDIA/NemoClaw/blob/c517d622c325803a85312c26dc698ff561d059aa/nemoclaw/package.json)
    - [json5 @ package.json](https://github.com/NVIDIA/NemoClaw/blob/c517d622c325803a85312c26dc698ff561d059aa/nemoclaw/package.json)
    - [tar @ package.json](https://github.com/NVIDIA/NemoClaw/blob/c517d622c325803a85312c26dc698ff561d059aa/nemoclaw/package.json)
    - [yaml @ package.json](https://github.com/NVIDIA/NemoClaw/blob/c517d622c325803a85312c26dc698ff561d059aa/nemoclaw/package.json)

- 🟡 P2 **nemoclaw** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: nemoclaw: runtime registrations need capture evidence before final contract judgment
  - state: runtime-covered · compat:active · runtime:covered
  - evidence:
    - [registerCommand @ index.ts:341](https://github.com/NVIDIA/NemoClaw/blob/c517d622c325803a85312c26dc698ff561d059aa/nemoclaw/src/index.ts#L341)
  - runtime coverage:
    - captured registration:registerCommand
    - .crabpot/results/nemoclaw/cold-import-extension-nemoclaw-plugins-nemoclaw-nemoclaw-dist-index-js.capture.json
    - .crabpot/results/nemoclaw/cold-import-extension-nemoclaw-plugins-nemoclaw-nemoclaw-dist-index-js.synthetic.json

- 🟡 P2 **nextcloud-talk** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: nextcloud-talk: channel runtime needs envelope/config probes
  - state: open · compat:active
  - evidence:
    - [createChatChannelPlugin @ channel-BVVRsVr5.js:1678](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/nextcloud-talk/dist/channel-BVVRsVr5.js#L1678)

- 🟡 P2 **nextcloud-talk** `deprecation-warning` `core-compat-adapter`
  - **channel-env-vars**: nextcloud-talk: channelEnvVars legacy manifest metadata must stay covered
  - state: open · compat:deprecated · deprecated
  - evidence:
    - nextcloud-talk

- 🟡 P2 **nextcloud-talk** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: nextcloud-talk: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/nextcloud-talk/package.json)

- 🟡 P2 **nextcloud-talk** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: nextcloud-talk: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec

- 🟡 P2 **nextcloud-talk** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: nextcloud-talk: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.4.10
    - buildOpenClawVersion:2026.5.7

- 🟡 P2 **nostr** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: nostr: channel runtime needs envelope/config probes
  - state: open · compat:active
  - evidence:
    - [createChatChannelPlugin @ channel-DfEqBtUh.js:1373](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/nostr/dist/channel-DfEqBtUh.js#L1373)

- 🟡 P2 **nostr** `deprecation-warning` `core-compat-adapter`
  - **channel-env-vars**: nostr: channelEnvVars legacy manifest metadata must stay covered
  - state: open · compat:deprecated · deprecated
  - evidence:
    - nostr

- 🟡 P2 **nostr** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: nostr: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [nostr-tools @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/nostr/package.json)
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/nostr/package.json)

- 🟡 P2 **nostr** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: nostr: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec

- 🟡 P2 **nostr** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: nostr: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.4.10
    - buildOpenClawVersion:2026.5.7

- 🟡 P2 **nostr** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: nostr: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:active
  - evidence:
    - [registerHttpRoute @ index.js:74](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/nostr/dist/index.js#L74)

- 🟡 P2 **openclaw-qqbot** `deprecation-warning` `core-compat-adapter`
  - **channel-env-vars**: openclaw-qqbot: channelEnvVars legacy manifest metadata must stay covered
  - state: open · compat:deprecated · deprecated
  - evidence:
    - qqbot

- 🟡 P2 **openclaw-qqbot** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: openclaw-qqbot: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@tencent-connect/qqbot-connector @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/qqbot/package.json)
    - [mpg123-decoder @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/qqbot/package.json)
    - [silk-wasm @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/qqbot/package.json)
    - [ws @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/qqbot/package.json)
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/qqbot/package.json)

- 🟡 P2 **openclaw-qqbot** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: openclaw-qqbot: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec

- 🟡 P2 **openclaw-qqbot** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: openclaw-qqbot: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.4.10
    - buildOpenClawVersion:2026.5.7

- 🟡 P2 **openclaw-qqbot** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: openclaw-qqbot: runtime registrations need capture evidence before final contract judgment
  - state: runtime-covered · compat:active · runtime:covered
  - evidence:
    - [registerCommand @ api.js:626](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/qqbot/dist/api.js#L626)
  - runtime coverage:
    - captured registration:registerCommand
    - .crabpot/results/openclaw-qqbot/cold-import-runtimeExtension-openclaw-qqbot-plugins-openclaw-qqbot-crabpot-package-dist-index-js.capture.json
    - .crabpot/results/openclaw-qqbot/cold-import-runtimeExtension-openclaw-qqbot-plugins-openclaw-qqbot-crabpot-package-dist-index-js.synthetic.json

- 🟡 P2 **openclaw-telemetry** `deprecation-warning` `core-compat-adapter`
  - **legacy-before-agent-start**: openclaw-telemetry: legacy before_agent_start hook compatibility is still used
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [before_agent_start @ index.ts:53](https://github.com/knostic/openclaw-telemetry/blob/86c2458a0dfe82d639c208c5220396feb9d53c45/index.ts#L53)

- 🟡 P2 **openclaw-telemetry** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: openclaw-telemetry: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [openclaw/plugin-sdk @ index.ts:1](https://github.com/knostic/openclaw-telemetry/blob/86c2458a0dfe82d639c208c5220396feb9d53c45/index.ts#L1)
    - [openclaw/plugin-sdk @ service.ts:1](https://github.com/knostic/openclaw-telemetry/blob/86c2458a0dfe82d639c208c5220396feb9d53c45/src/service.ts#L1)
    - [openclaw/plugin-sdk @ service.ts:2](https://github.com/knostic/openclaw-telemetry/blob/86c2458a0dfe82d639c208c5220396feb9d53c45/src/service.ts#L2)

- 🟡 P2 **openclaw-telemetry** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: openclaw-telemetry: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - [package.json](https://github.com/knostic/openclaw-telemetry/blob/86c2458a0dfe82d639c208c5220396feb9d53c45/package.json)

- 🟡 P2 **openclaw-telemetry** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: openclaw-telemetry: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/knostic/openclaw-telemetry/blob/86c2458a0dfe82d639c208c5220396feb9d53c45/index.ts)

- 🟡 P2 **openclaw-telemetry** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: openclaw-telemetry: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:active
  - evidence:
    - [registerService @ index.ts:10](https://github.com/knostic/openclaw-telemetry/blob/86c2458a0dfe82d639c208c5220396feb9d53c45/index.ts#L10)

- 🟡 P2 **openclaw-weixin** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: openclaw-weixin: channel runtime needs envelope/config probes
  - state: open · compat:active
  - evidence:
    - registerChannel @ plugins/openclaw-weixin/.crabpot-package/dist/index.js:13
    - registerChannel @ plugins/openclaw-weixin/.crabpot-package/index.ts:17

- 🟡 P2 **openclaw-weixin** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: openclaw-weixin: cold import requires dependency installation in an isolated workspace
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

- 🟡 P2 **openclaw-weixin** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: openclaw-weixin: runtime registrations need capture evidence before final contract judgment
  - state: runtime-covered · compat:active · runtime:covered
  - evidence:
    - registerChannel @ plugins/openclaw-weixin/.crabpot-package/dist/index.js:13
    - registerChannel @ plugins/openclaw-weixin/.crabpot-package/index.ts:17
  - runtime coverage:
    - captured registration:registerChannel
    - .crabpot/results/openclaw-weixin/cold-import-extension-openclaw-weixin-plugins-openclaw-weixin-crabpot-package-index-ts.capture.json
    - .crabpot/results/openclaw-weixin/cold-import-extension-openclaw-weixin-plugins-openclaw-weixin-crabpot-package-index-ts.synthetic.json
    - .crabpot/results/openclaw-weixin/cold-import-runtimeExtension-openclaw-weixin-plugins-openclaw-weixin-crabpot-package-dist-index-js.capture.json
    - .crabpot/results/openclaw-weixin/cold-import-runtimeExtension-openclaw-weixin-plugins-openclaw-weixin-crabpot-package-dist-index-js.synthetic.json

- 🟡 P2 **opik-openclaw** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: opik-openclaw: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [openclaw/plugin-sdk @ index.ts:1](https://github.com/comet-ml/opik-openclaw/blob/0f62b10688428f288eaff9b99e0ee7a9334137e7/index.ts#L1)
    - [openclaw/plugin-sdk @ index.ts:2](https://github.com/comet-ml/opik-openclaw/blob/0f62b10688428f288eaff9b99e0ee7a9334137e7/index.ts#L2)
    - [openclaw/plugin-sdk @ cli.ts:1](https://github.com/comet-ml/opik-openclaw/blob/0f62b10688428f288eaff9b99e0ee7a9334137e7/src/cli.ts#L1)
    - [openclaw/plugin-sdk @ configure.ts:2](https://github.com/comet-ml/opik-openclaw/blob/0f62b10688428f288eaff9b99e0ee7a9334137e7/src/configure.ts#L2)
    - [openclaw/plugin-sdk @ service.ts:5](https://github.com/comet-ml/opik-openclaw/blob/0f62b10688428f288eaff9b99e0ee7a9334137e7/src/service.ts#L5)
    - [openclaw/plugin-sdk @ service.ts:6](https://github.com/comet-ml/opik-openclaw/blob/0f62b10688428f288eaff9b99e0ee7a9334137e7/src/service.ts#L6)
    - [openclaw/plugin-sdk @ llm.ts:1](https://github.com/comet-ml/opik-openclaw/blob/0f62b10688428f288eaff9b99e0ee7a9334137e7/src/service/hooks/llm.ts#L1)
    - [openclaw/plugin-sdk @ subagent.ts:1](https://github.com/comet-ml/opik-openclaw/blob/0f62b10688428f288eaff9b99e0ee7a9334137e7/src/service/hooks/subagent.ts#L1)
    - [openclaw/plugin-sdk @ tool.ts:1](https://github.com/comet-ml/opik-openclaw/blob/0f62b10688428f288eaff9b99e0ee7a9334137e7/src/service/hooks/tool.ts#L1)

- 🟡 P2 **opik-openclaw** `inspector-gap` `inspector-follow-up`
  - **package-build-artifact-entrypoint**: opik-openclaw: cold import requires package build output
  - state: open · compat:none
  - evidence:
    - [runtimeExtension:./dist/index.js @ index.js](https://github.com/comet-ml/opik-openclaw/blob/0f62b10688428f288eaff9b99e0ee7a9334137e7/dist/index.js)

- 🟡 P2 **opik-openclaw** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: opik-openclaw: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@clack/prompts @ package.json](https://github.com/comet-ml/opik-openclaw/blob/0f62b10688428f288eaff9b99e0ee7a9334137e7/package.json)
    - [opik @ package.json](https://github.com/comet-ml/opik-openclaw/blob/0f62b10688428f288eaff9b99e0ee7a9334137e7/package.json)
    - [zod @ package.json](https://github.com/comet-ml/opik-openclaw/blob/0f62b10688428f288eaff9b99e0ee7a9334137e7/package.json)

- 🟡 P2 **opik-openclaw** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: opik-openclaw: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/comet-ml/opik-openclaw/blob/0f62b10688428f288eaff9b99e0ee7a9334137e7/index.ts)

- 🟡 P2 **opik-openclaw** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: opik-openclaw: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:active
  - evidence:
    - [registerService @ index.ts:16](https://github.com/comet-ml/opik-openclaw/blob/0f62b10688428f288eaff9b99e0ee7a9334137e7/index.ts#L16)

- 🟡 P2 **qqbot** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: qqbot: channel runtime needs envelope/config probes
  - state: open · compat:active
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
  - **package-dependency-install-required**: qqbot: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [mpg123-decoder @ package.json](https://github.com/tencent-connect/openclaw-qqbot/blob/3eee78922ed0b19af5c4c55f1dfe7d1c848e31f5/package.json)
    - [silk-wasm @ package.json](https://github.com/tencent-connect/openclaw-qqbot/blob/3eee78922ed0b19af5c4c55f1dfe7d1c848e31f5/package.json)
    - [ws @ package.json](https://github.com/tencent-connect/openclaw-qqbot/blob/3eee78922ed0b19af5c4c55f1dfe7d1c848e31f5/package.json)

- 🟡 P2 **qqbot** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: qqbot: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - [package.json](https://github.com/tencent-connect/openclaw-qqbot/blob/3eee78922ed0b19af5c4c55f1dfe7d1c848e31f5/package.json)

- 🟡 P2 **qqbot** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: qqbot: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:active
  - evidence:
    - [registerChannel @ index.ts:16](https://github.com/tencent-connect/openclaw-qqbot/blob/3eee78922ed0b19af5c4c55f1dfe7d1c848e31f5/index.ts#L16)

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
  - **package-dependency-install-required**: secureclaw: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [chokidar @ package.json](https://github.com/adversa-ai/secureclaw/blob/bf17e2b3deb989e348b3a98080e33a7047e90ac3/secureclaw/package.json)
    - [node-forge @ package.json](https://github.com/adversa-ai/secureclaw/blob/bf17e2b3deb989e348b3a98080e33a7047e90ac3/secureclaw/package.json)

- 🟡 P2 **secureclaw** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: secureclaw: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - [package.json](https://github.com/adversa-ai/secureclaw/blob/bf17e2b3deb989e348b3a98080e33a7047e90ac3/secureclaw/package.json)

- 🟡 P2 **secureclaw** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: secureclaw: runtime registrations need capture evidence before final contract judgment
  - state: runtime-covered · compat:active · runtime:covered
  - evidence:
    - [registerService @ index.ts:295](https://github.com/adversa-ai/secureclaw/blob/bf17e2b3deb989e348b3a98080e33a7047e90ac3/secureclaw/src/index.ts#L295)
    - [registerService @ index.ts:301](https://github.com/adversa-ai/secureclaw/blob/bf17e2b3deb989e348b3a98080e33a7047e90ac3/secureclaw/src/index.ts#L301)
    - [registerService @ index.ts:307](https://github.com/adversa-ai/secureclaw/blob/bf17e2b3deb989e348b3a98080e33a7047e90ac3/secureclaw/src/index.ts#L307)
  - runtime coverage:
    - captured registration:registerService
    - .crabpot/results/secureclaw/cold-import-extension-secureclaw-plugins-secureclaw-secureclaw-dist-index-js.capture.json
    - .crabpot/results/secureclaw/cold-import-extension-secureclaw-plugins-secureclaw-secureclaw-dist-index-js.synthetic.json

- 🟡 P2 **synology-chat** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: synology-chat: channel runtime needs envelope/config probes
  - state: open · compat:active
  - evidence:
    - [createChatChannelPlugin @ channel-BYl2GyR_.js:1065](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/synology-chat/dist/channel-BYl2GyR_.js#L1065)

- 🟡 P2 **synology-chat** `deprecation-warning` `core-compat-adapter`
  - **channel-env-vars**: synology-chat: channelEnvVars legacy manifest metadata must stay covered
  - state: open · compat:deprecated · deprecated
  - evidence:
    - synology-chat

- 🟡 P2 **synology-chat** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: synology-chat: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/synology-chat/package.json)

- 🟡 P2 **synology-chat** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: synology-chat: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec

- 🟡 P2 **synology-chat** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: synology-chat: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.4.10
    - buildOpenClawVersion:2026.5.7

- 🟡 P2 **telnyx-sms** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: telnyx-sms: channel runtime needs envelope/config probes
  - state: open · compat:active
  - evidence:
    - [defineChannelPluginEntry @ index.ts:207](https://github.com/team-telnyx/telnyx-openclaw-sms-channel/blob/dee567716ca56d49464bf6354393f3656d92a2b3/index.ts#L207)

- 🟡 P2 **telnyx-sms** `deprecation-warning` `core-compat-adapter`
  - **channel-env-vars**: telnyx-sms: channelEnvVars legacy manifest metadata must stay covered
  - state: open · compat:deprecated · deprecated
  - evidence:
    - telnyx-sms

- 🟡 P2 **telnyx-sms** `inspector-gap` `inspector-follow-up`
  - **package-build-artifact-entrypoint**: telnyx-sms: cold import requires package build output
  - state: open · compat:none
  - evidence:
    - [extension:./dist/index.js @ index.js](https://github.com/team-telnyx/telnyx-openclaw-sms-channel/blob/dee567716ca56d49464bf6354393f3656d92a2b3/dist/index.js)
    - [setupEntry:./dist/setup-entry.js @ setup-entry.js](https://github.com/team-telnyx/telnyx-openclaw-sms-channel/blob/dee567716ca56d49464bf6354393f3656d92a2b3/dist/setup-entry.js)

- 🟡 P2 **telnyx-sms** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: telnyx-sms: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:active
  - evidence:
    - [registerHttpRoute @ index.ts:259](https://github.com/team-telnyx/telnyx-openclaw-sms-channel/blob/dee567716ca56d49464bf6354393f3656d92a2b3/index.ts#L259)

- 🟡 P2 **tlon** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: tlon: channel runtime needs envelope/config probes
  - state: open · compat:active
  - evidence:
    - [createChatChannelPlugin @ channel-C1on9fPi.js:115](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/tlon/dist/channel-C1on9fPi.js#L115)

- 🟡 P2 **tlon** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: tlon: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@aws-sdk/client-s3 @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/tlon/package.json)
    - [@aws-sdk/s3-request-presigner @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/tlon/package.json)
    - [@tloncorp/tlon-skill @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/tlon/package.json)
    - [@urbit/aura @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/tlon/package.json)

- 🟡 P2 **tlon** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: tlon: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec

- 🟡 P2 **tlon** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: tlon: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.4.10
    - buildOpenClawVersion:2026.5.7

- 🟡 P2 **twitch** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: twitch: channel runtime needs envelope/config probes
  - state: open · compat:active
  - evidence:
    - [createChatChannelPlugin @ plugin-BQX9GiIn.js:762](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/twitch/dist/plugin-BQX9GiIn.js#L762)

- 🟡 P2 **twitch** `deprecation-warning` `core-compat-adapter`
  - **channel-env-vars**: twitch: channelEnvVars legacy manifest metadata must stay covered
  - state: open · compat:deprecated · deprecated
  - evidence:
    - twitch

- 🟡 P2 **twitch** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: twitch: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@twurple/api @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/twitch/package.json)
    - [@twurple/auth @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/twitch/package.json)
    - [@twurple/chat @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/twitch/package.json)

- 🟡 P2 **twitch** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: twitch: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec

- 🟡 P2 **twitch** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: twitch: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.4.10
    - buildOpenClawVersion:2026.5.7

- 🟡 P2 **voice-call** `deprecation-warning` `core-compat-adapter`
  - **channel-env-vars**: voice-call: channelEnvVars legacy manifest metadata must stay covered
  - state: open · compat:deprecated · deprecated
  - evidence:
    - voice-call

- 🟡 P2 **voice-call** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: voice-call: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [commander @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/voice-call/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/voice-call/package.json)
    - [ws @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/voice-call/package.json)

- 🟡 P2 **voice-call** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: voice-call: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec

- 🟡 P2 **voice-call** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: voice-call: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.4.10
    - buildOpenClawVersion:2026.5.7

- 🟡 P2 **voice-call** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: voice-call: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:active · runtime:partial
  - evidence:
    - [registerConfigMigration @ setup-api.js:33](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/voice-call/dist/setup-api.js#L33)
    - [registerGatewayMethod @ index.js:1007](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/voice-call/dist/index.js#L1007)
    - [registerGatewayMethod @ index.js:1019](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/voice-call/dist/index.js#L1019)
    - [registerGatewayMethod @ index.js:1036](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/voice-call/dist/index.js#L1036)
    - [registerGatewayMethod @ index.js:1067](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/voice-call/dist/index.js#L1067)
    - [registerGatewayMethod @ index.js:1085](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/voice-call/dist/index.js#L1085)
    - [registerGatewayMethod @ index.js:1102](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/voice-call/dist/index.js#L1102)
    - [registerGatewayMethod @ index.js:1126](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/voice-call/dist/index.js#L1126)
    - [registerGatewayMethod @ index.js:970](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/voice-call/dist/index.js#L970)
    - [registerGatewayMethod @ index.js:994](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/voice-call/dist/index.js#L994)
    - [registerService @ index.js:1256](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/voice-call/dist/index.js#L1256)
  - runtime coverage:
    - captured registration:registerGatewayMethod
    - captured registration:registerService
    - .crabpot/results/voice-call/cold-import-runtimeExtension-voice-call-plugins-voice-call-crabpot-package-dist-index-js.capture.json
    - .crabpot/results/voice-call/cold-import-runtimeExtension-voice-call-plugins-voice-call-crabpot-package-dist-index-js.synthetic.json

- 🟡 P2 **web-search-plus** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: web-search-plus: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/robbyczgw-cla/web-search-plus-plugin/blob/dd3cab6e11f16eaa3fcee0ce67d3a809b155341a/index.ts)

- 🟡 P2 **web-search-plus** `inspector-gap` `inspector-follow-up`
  - **runtime-tool-capture**: web-search-plus: runtime tool schema needs registration capture
  - state: runtime-covered · compat:none · runtime:covered
  - evidence:
    - [registerTool @ index.ts:1034](https://github.com/robbyczgw-cla/web-search-plus-plugin/blob/dd3cab6e11f16eaa3fcee0ce67d3a809b155341a/index.ts#L1034)
    - [registerTool @ index.ts:893](https://github.com/robbyczgw-cla/web-search-plus-plugin/blob/dd3cab6e11f16eaa3fcee0ce67d3a809b155341a/index.ts#L893)
  - runtime coverage:
    - captured registration:registerTool
    - .crabpot/results/web-search-plus/cold-import-extension-web-search-plus-plugins-web-search-plus-index-ts.capture.json
    - .crabpot/results/web-search-plus/cold-import-extension-web-search-plus-plugins-web-search-plus-index-ts.synthetic.json
    - .crabpot/results/web-search-plus/cold-import-runtimeExtension-web-search-plus-plugins-web-search-plus-dist-index-js.capture.json
    - .crabpot/results/web-search-plus/cold-import-runtimeExtension-web-search-plus-plugins-web-search-plus-dist-index-js.synthetic.json

- 🟡 P2 **wecom** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: wecom: channel runtime needs envelope/config probes
  - state: open · compat:active
  - evidence:
    - [registerChannel @ index.js:27](https://github.com/sunnoy/openclaw-plugin-wecom/blob/503a1d5403bc3a57763b9ef17c60a9d5e31b53d9/index.js#L27)

- 🟡 P2 **wecom** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: wecom: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@wecom/aibot-node-sdk @ package.json](https://github.com/sunnoy/openclaw-plugin-wecom/blob/503a1d5403bc3a57763b9ef17c60a9d5e31b53d9/package.json)
    - [file-type @ package.json](https://github.com/sunnoy/openclaw-plugin-wecom/blob/503a1d5403bc3a57763b9ef17c60a9d5e31b53d9/package.json)
    - [pinyin-pro @ package.json](https://github.com/sunnoy/openclaw-plugin-wecom/blob/503a1d5403bc3a57763b9ef17c60a9d5e31b53d9/package.json)
    - [undici @ package.json](https://github.com/sunnoy/openclaw-plugin-wecom/blob/503a1d5403bc3a57763b9ef17c60a9d5e31b53d9/package.json)

- 🟡 P2 **wecom** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: wecom: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - [package.json](https://github.com/sunnoy/openclaw-plugin-wecom/blob/503a1d5403bc3a57763b9ef17c60a9d5e31b53d9/package.json)

- 🟡 P2 **wecom** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: wecom: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:active · runtime:partial
  - evidence:
    - [registerChannel @ index.js:27](https://github.com/sunnoy/openclaw-plugin-wecom/blob/503a1d5403bc3a57763b9ef17c60a9d5e31b53d9/index.js#L27)
    - [registerHttpRoute @ index.js:56](https://github.com/sunnoy/openclaw-plugin-wecom/blob/503a1d5403bc3a57763b9ef17c60a9d5e31b53d9/index.js#L56)
  - runtime coverage:
    - captured registration:registerChannel
    - .crabpot/results/wecom/cold-import-extension-wecom-plugins-wecom-index-js.capture.json
    - .crabpot/results/wecom/cold-import-extension-wecom-plugins-wecom-index-js.synthetic.json

- 🟡 P2 **wecom** `inspector-gap` `inspector-follow-up`
  - **runtime-tool-capture**: wecom: runtime tool schema needs registration capture
  - state: runtime-covered · compat:none · runtime:covered
  - evidence:
    - [registerTool @ index.js:28](https://github.com/sunnoy/openclaw-plugin-wecom/blob/503a1d5403bc3a57763b9ef17c60a9d5e31b53d9/index.js#L28)
    - [registerTool @ index.js:40](https://github.com/sunnoy/openclaw-plugin-wecom/blob/503a1d5403bc3a57763b9ef17c60a9d5e31b53d9/index.js#L40)
    - [registerTool @ index.js:44](https://github.com/sunnoy/openclaw-plugin-wecom/blob/503a1d5403bc3a57763b9ef17c60a9d5e31b53d9/index.js#L44)
  - runtime coverage:
    - captured registration:registerTool
    - .crabpot/results/wecom/cold-import-extension-wecom-plugins-wecom-index-js.capture.json
    - .crabpot/results/wecom/cold-import-extension-wecom-plugins-wecom-index-js.synthetic.json

- 🟡 P2 **whatsapp** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: whatsapp: channel runtime needs envelope/config probes
  - state: open · compat:active
  - evidence:
    - [createChatChannelPlugin @ channel-CTr3YjO8.js:309](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/whatsapp/dist/channel-CTr3YjO8.js#L309)

- 🟡 P2 **whatsapp** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: whatsapp: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@whiskeysockets/baileys @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/whatsapp/package.json)
    - [https-proxy-agent @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/whatsapp/package.json)
    - [jimp @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/whatsapp/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/whatsapp/package.json)
    - [undici @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/whatsapp/package.json)

- 🟡 P2 **whatsapp** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: whatsapp: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec

- 🟡 P2 **whatsapp** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: whatsapp: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.4.25
    - buildOpenClawVersion:2026.5.7

- 🟡 P2 **yuanbao** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: yuanbao: channel runtime needs envelope/config probes
  - state: open · compat:active
  - evidence:
    - createChatChannelPlugin @ plugins/yuanbao/.crabpot-package/dist/src/channel.js:18

- 🟡 P2 **yuanbao** `deprecation-warning` `core-compat-adapter`
  - **channel-env-vars**: yuanbao: channelEnvVars legacy manifest metadata must stay covered
  - state: open · compat:deprecated · deprecated
  - evidence:
    - yuanbao

- 🟡 P2 **yuanbao** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: yuanbao: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - cos-nodejs-sdk-v5 @ plugins/yuanbao/.crabpot-package/package.json
    - protobufjs @ plugins/yuanbao/.crabpot-package/package.json
    - semver @ plugins/yuanbao/.crabpot-package/package.json
    - ws @ plugins/yuanbao/.crabpot-package/package.json

- 🟡 P2 **yuanbao** `upstream-metadata` `plugin-upstream-fix`
  - **package-openclaw-unsupported-metadata**: yuanbao: package declares unsupported OpenClaw metadata
  - state: open · compat:none
  - evidence:
    - openclaw.bundle

- 🟡 P2 **yuanbao** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: yuanbao: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - plugins/yuanbao/.crabpot-package/package.json

- 🟡 P2 **yuanbao** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: yuanbao: runtime registrations need capture evidence before final contract judgment
  - state: runtime-covered · compat:active · runtime:covered
  - evidence:
    - registerCommand @ plugins/yuanbao/.crabpot-package/dist/index.js:16
    - registerCommand @ plugins/yuanbao/.crabpot-package/dist/index.js:17
    - registerCommand @ plugins/yuanbao/.crabpot-package/dist/index.js:18
  - runtime coverage:
    - captured registration:registerCommand
    - .crabpot/results/yuanbao/cold-import-extension-yuanbao-plugins-yuanbao-crabpot-package-dist-index-js.capture.json
    - .crabpot/results/yuanbao/cold-import-extension-yuanbao-plugins-yuanbao-crabpot-package-dist-index-js.synthetic.json
    - .crabpot/results/yuanbao/cold-import-setupEntry-yuanbao-plugins-yuanbao-crabpot-package-dist-setup-entry-js.capture.json
    - .crabpot/results/yuanbao/cold-import-setupEntry-yuanbao-plugins-yuanbao-crabpot-package-dist-setup-entry-js.synthetic.json

- 🟡 P2 **yuanbao** `inspector-gap` `inspector-follow-up`
  - **runtime-tool-capture**: yuanbao: runtime tool schema needs registration capture
  - state: runtime-covered · compat:none · runtime:covered
  - evidence:
    - registerTool @ plugins/yuanbao/.crabpot-package/dist/src/business/tools/group.js:78
    - registerTool @ plugins/yuanbao/.crabpot-package/dist/src/business/tools/member.js:172
    - registerTool @ plugins/yuanbao/.crabpot-package/dist/src/business/tools/remind.js:325
  - runtime coverage:
    - captured registration:registerTool
    - .crabpot/results/yuanbao/cold-import-extension-yuanbao-plugins-yuanbao-crabpot-package-dist-index-js.capture.json
    - .crabpot/results/yuanbao/cold-import-extension-yuanbao-plugins-yuanbao-crabpot-package-dist-index-js.synthetic.json
    - .crabpot/results/yuanbao/cold-import-setupEntry-yuanbao-plugins-yuanbao-crabpot-package-dist-setup-entry-js.capture.json
    - .crabpot/results/yuanbao/cold-import-setupEntry-yuanbao-plugins-yuanbao-crabpot-package-dist-setup-entry-js.synthetic.json

- 🟡 P2 **zalo** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: zalo: channel runtime needs envelope/config probes
  - state: open · compat:active
  - evidence:
    - [createChatChannelPlugin @ channel-VPbtV3Oq.js:238](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/zalo/dist/channel-VPbtV3Oq.js#L238)

- 🟡 P2 **zalo** `deprecation-warning` `core-compat-adapter`
  - **channel-env-vars**: zalo: channelEnvVars legacy manifest metadata must stay covered
  - state: open · compat:deprecated · deprecated
  - evidence:
    - zalo

- 🟡 P2 **zalo** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: zalo: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [undici @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/zalo/package.json)

- 🟡 P2 **zalo** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: zalo: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec

- 🟡 P2 **zalo** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: zalo: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.4.10
    - buildOpenClawVersion:2026.5.7

- 🟡 P2 **zalouser** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: zalouser: channel runtime needs envelope/config probes
  - state: open · compat:active
  - evidence:
    - [createChatChannelPlugin @ channel-DLNmGWb8.js:353](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/zalouser/dist/channel-DLNmGWb8.js#L353)

- 🟡 P2 **zalouser** `deprecation-warning` `core-compat-adapter`
  - **channel-env-vars**: zalouser: channelEnvVars legacy manifest metadata must stay covered
  - state: open · compat:deprecated · deprecated
  - evidence:
    - zalouser

- 🟡 P2 **zalouser** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: zalouser: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/zalouser/package.json)
    - [zca-js @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/zalouser/package.json)

- 🟡 P2 **zalouser** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: zalouser: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec

- 🟡 P2 **zalouser** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: zalouser: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.4.10
    - buildOpenClawVersion:2026.5.7

- 🟢 P3 **clawrouter** `upstream-metadata` `plugin-upstream-fix`
  - **security-manifest-schema-unavailable**: clawrouter: plugin security manifest references an unavailable schema
  - state: open · compat:none
  - evidence:
    - [plugin-security.json](https://github.com/BlockRunAI/ClawRouter/blob/ed699ce6ab9654fe1b3b8431ed6174c5857df3e5/openclaw.security.json%3A%24schema%3Dhttps%3A/openclaw.ai/schemas/plugin-security.json)

- 🟢 P3 **clawrouter** `upstream-metadata` `plugin-upstream-fix`
  - **unrecognized-security-manifest**: clawrouter: plugin ships an unsupported security manifest
  - state: open · compat:none
  - evidence:
    - [openclaw.security.json](https://github.com/BlockRunAI/ClawRouter/blob/ed699ce6ab9654fe1b3b8431ed6174c5857df3e5/openclaw.security.json)

## Contract Probe Backlog

- 🟠 P1 **kitchen-sink** `hook-runner`
  - contract: Hook returns preserve terminal, block, and approval semantics.
  - id: `hook.before_tool_call.terminal-block-approval:kitchen-sink`
  - evidence:
    - [before_tool_call @ generated-hooks.js:19](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-hooks.js#L19)

- 🟠 P1 **nemoclaw** `hook-runner`
  - contract: Hook returns preserve terminal, block, and approval semantics.
  - id: `hook.before_tool_call.terminal-block-approval:nemoclaw`
  - evidence:
    - [before_tool_call @ index.ts:389](https://github.com/NVIDIA/NemoClaw/blob/c517d622c325803a85312c26dc698ff561d059aa/nemoclaw/src/index.ts#L389)

- 🟠 P1 **openclaw-telemetry** `hook-runner`
  - contract: Hook returns preserve terminal, block, and approval semantics.
  - id: `hook.before_tool_call.terminal-block-approval:openclaw-telemetry`
  - evidence:
    - [before_tool_call @ index.ts:12](https://github.com/knostic/openclaw-telemetry/blob/86c2458a0dfe82d639c208c5220396feb9d53c45/index.ts#L12)

- 🟠 P1 **opik-openclaw** `hook-runner`
  - contract: Hook returns preserve terminal, block, and approval semantics.
  - id: `hook.before_tool_call.terminal-block-approval:opik-openclaw`
  - evidence:
    - [before_tool_call @ tool.ts:34](https://github.com/comet-ml/opik-openclaw/blob/0f62b10688428f288eaff9b99e0ee7a9334137e7/src/service/hooks/tool.ts#L34)

- 🟠 P1 **wecom** `hook-runner`
  - contract: Hook returns preserve terminal, block, and approval semantics.
  - id: `hook.before_tool_call.terminal-block-approval:wecom`
  - evidence:
    - [before_tool_call @ index.js:76](https://github.com/sunnoy/openclaw-plugin-wecom/blob/503a1d5403bc3a57763b9ef17c60a9d5e31b53d9/index.js#L76)

- 🟠 P1 **clawmetry** `hook-runner`
  - contract: LLM observer hooks receive documented prompt/output fields with expected redaction behavior.
  - id: `hook.llm-observer.privacy-payload:clawmetry`
  - evidence:
    - [llm_output @ service.ts:117](https://github.com/vivekchand/clawmetry/blob/c969c8cb2e7fe41451349792caea03e87e83a174/clawhub-plugin/src/service.ts#L117)

- 🟠 P1 **honcho** `hook-runner`
  - contract: LLM observer hooks receive documented prompt/output fields with expected redaction behavior.
  - id: `hook.llm-observer.privacy-payload:honcho`
  - evidence:
    - [agent_end @ capture.ts:151](https://github.com/plastic-labs/openclaw-honcho/blob/e9f01452b781d24b38336ef0738f2c97353c541e/hooks/capture.ts#L151)
    - [agent_end @ subagent.ts:34](https://github.com/plastic-labs/openclaw-honcho/blob/e9f01452b781d24b38336ef0738f2c97353c541e/hooks/subagent.ts#L34)

- 🟠 P1 **kitchen-sink** `hook-runner`
  - contract: LLM observer hooks receive documented prompt/output fields with expected redaction behavior.
  - id: `hook.llm-observer.privacy-payload:kitchen-sink`
  - evidence:
    - [agent_end @ generated-hooks.js:7](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-hooks.js#L7)
    - [llm_input @ generated-hooks.js:25](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-hooks.js#L25)
    - [llm_output @ generated-hooks.js:26](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-hooks.js#L26)

- 🟠 P1 **llm-trace-phoenix** `hook-runner`
  - contract: LLM observer hooks receive documented prompt/output fields with expected redaction behavior.
  - id: `hook.llm-observer.privacy-payload:llm-trace-phoenix`
  - evidence:
    - [llm_input @ index.ts:154](https://github.com/pingshian0131/openclaw-plugin-llm-trace-phoenix/blob/05bc0f4ba67281c10fad7be356d32a54b00c59fd/index.ts#L154)
    - [llm_output @ index.ts:168](https://github.com/pingshian0131/openclaw-plugin-llm-trace-phoenix/blob/05bc0f4ba67281c10fad7be356d32a54b00c59fd/index.ts#L168)

- 🟠 P1 **memory-lancedb** `hook-runner`
  - contract: LLM observer hooks receive documented prompt/output fields with expected redaction behavior.
  - id: `hook.llm-observer.privacy-payload:memory-lancedb`
  - evidence:
    - [agent_end @ index.js:643](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/memory-lancedb/dist/index.js#L643)

- 🟠 P1 **memory-tencentdb** `hook-runner`
  - contract: LLM observer hooks receive documented prompt/output fields with expected redaction behavior.
  - id: `hook.llm-observer.privacy-payload:memory-tencentdb`
  - evidence:
    - agent_end @ plugins/memory-tencentdb/.crabpot-package/dist/index.mjs:17317
    - agent_end @ plugins/memory-tencentdb/.crabpot-package/index.ts:627

- 🟠 P1 **memos-cloud** `hook-runner`
  - contract: LLM observer hooks receive documented prompt/output fields with expected redaction behavior.
  - id: `hook.llm-observer.privacy-payload:memos-cloud`
  - evidence:
    - [agent_end @ index.js:565](https://github.com/MemTensor/MemOS-Cloud-OpenClaw-Plugin/blob/e931499a2589af06ee543ce07df2bdda29ac8085/index.js#L565)

- 🟠 P1 **openclaw-telemetry** `hook-runner`
  - contract: LLM observer hooks receive documented prompt/output fields with expected redaction behavior.
  - id: `hook.llm-observer.privacy-payload:openclaw-telemetry`
  - evidence:
    - [agent_end @ index.ts:62](https://github.com/knostic/openclaw-telemetry/blob/86c2458a0dfe82d639c208c5220396feb9d53c45/index.ts#L62)

- 🟠 P1 **opik-openclaw** `hook-runner`
  - contract: LLM observer hooks receive documented prompt/output fields with expected redaction behavior.
  - id: `hook.llm-observer.privacy-payload:opik-openclaw`
  - evidence:
    - [agent_end @ service.ts:581](https://github.com/comet-ml/opik-openclaw/blob/0f62b10688428f288eaff9b99e0ee7a9334137e7/src/service.ts#L581)
    - [llm_input @ llm.ts:39](https://github.com/comet-ml/opik-openclaw/blob/0f62b10688428f288eaff9b99e0ee7a9334137e7/src/service/hooks/llm.ts#L39)
    - [llm_output @ llm.ts:150](https://github.com/comet-ml/opik-openclaw/blob/0f62b10688428f288eaff9b99e0ee7a9334137e7/src/service/hooks/llm.ts#L150)

- 🟠 P1 **honcho** `sdk-alias`
  - contract: Every observed OpenClaw plugin SDK import remains exported by the target OpenClaw package.
  - id: `sdk.import.package-export-cold-import:honcho`
  - evidence:
    - [openclaw/plugin-sdk/memory-core @ index.ts:11](https://github.com/plastic-labs/openclaw-honcho/blob/e9f01452b781d24b38336ef0738f2c97353c541e/index.ts#L11)

- 🟡 P2 **a2a-gateway** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:a2a-gateway`
  - evidence:
    - [registerGatewayMethod @ index.ts:616](https://github.com/win4r/openclaw-a2a-gateway/blob/a335e59e926f7e1a8913e6cd7b1cbf2d44c33cb7/index.ts#L616)
    - [registerGatewayMethod @ index.ts:622](https://github.com/win4r/openclaw-a2a-gateway/blob/a335e59e926f7e1a8913e6cd7b1cbf2d44c33cb7/index.ts#L622)
    - [registerGatewayMethod @ index.ts:631](https://github.com/win4r/openclaw-a2a-gateway/blob/a335e59e926f7e1a8913e6cd7b1cbf2d44c33cb7/index.ts#L631)
    - [registerGatewayMethod @ index.ts:657](https://github.com/win4r/openclaw-a2a-gateway/blob/a335e59e926f7e1a8913e6cd7b1cbf2d44c33cb7/index.ts#L657)
    - [registerGatewayMethod @ index.ts:669](https://github.com/win4r/openclaw-a2a-gateway/blob/a335e59e926f7e1a8913e6cd7b1cbf2d44c33cb7/index.ts#L669)
    - [registerService @ index.ts:857](https://github.com/win4r/openclaw-a2a-gateway/blob/a335e59e926f7e1a8913e6cd7b1cbf2d44c33cb7/index.ts#L857)

- 🟡 P2 **connectclaw** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:connectclaw`
  - evidence:
    - [registerCommand @ commands.ts:18](https://github.com/osipov-anton/connectclaw/blob/7a4e2646e914de075435b3837123cc03c3edae36/packages/plugin/src/commands.ts#L18)
    - [registerCommand @ commands.ts:64](https://github.com/osipov-anton/connectclaw/blob/7a4e2646e914de075435b3837123cc03c3edae36/packages/plugin/src/commands.ts#L64)
    - [registerService @ hooks.ts:91](https://github.com/osipov-anton/connectclaw/blob/7a4e2646e914de075435b3837123cc03c3edae36/packages/plugin/src/hooks.ts#L91)

- 🟡 P2 **dingtalk-connector** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:dingtalk-connector`
  - evidence:
    - [registerChannel @ index.ts:74](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/index.ts#L74)
    - [registerGatewayMethod @ gateway-methods.ts:130](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/src/gateway-methods.ts#L130)
    - [registerGatewayMethod @ gateway-methods.ts:190](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/src/gateway-methods.ts#L190)
    - [registerGatewayMethod @ gateway-methods.ts:258](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/src/gateway-methods.ts#L258)
    - [registerGatewayMethod @ gateway-methods.ts:311](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/src/gateway-methods.ts#L311)
    - [registerGatewayMethod @ gateway-methods.ts:351](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/src/gateway-methods.ts#L351)
    - [registerGatewayMethod @ gateway-methods.ts:388](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/src/gateway-methods.ts#L388)
    - [registerGatewayMethod @ gateway-methods.ts:425](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/src/gateway-methods.ts#L425)
    - [registerGatewayMethod @ gateway-methods.ts:452](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/src/gateway-methods.ts#L452)
    - [registerGatewayMethod @ gateway-methods.ts:506](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/src/gateway-methods.ts#L506)
    - [registerGatewayMethod @ gateway-methods.ts:593](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/src/gateway-methods.ts#L593)
    - [registerGatewayMethod @ gateway-methods.ts:60](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/src/gateway-methods.ts#L60)
    - [registerGatewayMethod @ gateway-methods.ts:652](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/src/gateway-methods.ts#L652)
    - [registerGatewayMethod @ gateway-methods.ts:719](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/src/gateway-methods.ts#L719)

- 🟡 P2 **honcho** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:honcho`
  - evidence:
    - [registerMemoryPromptSection @ index.ts:97](https://github.com/plastic-labs/openclaw-honcho/blob/e9f01452b781d24b38336ef0738f2c97353c541e/index.ts#L97)
    - [registerMemoryRuntime @ runtime.ts:274](https://github.com/plastic-labs/openclaw-honcho/blob/e9f01452b781d24b38336ef0738f2c97353c541e/runtime.ts#L274)

- 🟡 P2 **hyperspell** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:hyperspell`
  - evidence:
    - [registerCommand @ slash.ts:166](https://github.com/hyperspell/hyperspell-openclaw/blob/3ccb46f1c4c98149fbb69a6dbcb893f167e0e246/commands/slash.ts#L166)
    - [registerCommand @ slash.ts:43](https://github.com/hyperspell/hyperspell-openclaw/blob/3ccb46f1c4c98149fbb69a6dbcb893f167e0e246/commands/slash.ts#L43)
    - [registerCommand @ slash.ts:98](https://github.com/hyperspell/hyperspell-openclaw/blob/3ccb46f1c4c98149fbb69a6dbcb893f167e0e246/commands/slash.ts#L98)
    - [registerCommand @ index.ts:51](https://github.com/hyperspell/hyperspell-openclaw/blob/3ccb46f1c4c98149fbb69a6dbcb893f167e0e246/index.ts#L51)
    - [registerCommand @ index.ts:62](https://github.com/hyperspell/hyperspell-openclaw/blob/3ccb46f1c4c98149fbb69a6dbcb893f167e0e246/index.ts#L62)
    - [registerCommand @ index.ts:73](https://github.com/hyperspell/hyperspell-openclaw/blob/3ccb46f1c4c98149fbb69a6dbcb893f167e0e246/index.ts#L73)

- 🟡 P2 **kitchen-sink** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:kitchen-sink`
  - evidence:
    - [registerAutoEnableProbe @ generated-registrars.js:7](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-registrars.js#L7)
    - [registerChannel @ generated-registrars.js:8](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-registrars.js#L8)
    - [registerChannel @ kitchen-runtime.js:55](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/kitchen-runtime.js#L55)
    - [registerCommand @ generated-registrars.js:12](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-registrars.js#L12)
    - [registerCommand @ kitchen-runtime.js:50](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/kitchen-runtime.js#L50)
    - [registerCommand @ kitchen-runtime.js:51](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/kitchen-runtime.js#L51)
    - [registerCompactionProvider @ generated-registrars.js:13](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-registrars.js#L13)
    - [registerCompactionProvider @ kitchen-runtime.js:95](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/kitchen-runtime.js#L95)
    - [registerConfigMigration @ generated-registrars.js:14](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-registrars.js#L14)
    - [registerContextEngine @ generated-registrars.js:15](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-registrars.js#L15)
    - [registerDetachedTaskRuntime @ sync-surface.mjs:113](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/scripts/sync-surface.mjs#L113)
    - [registerDetachedTaskRuntime @ generated-registrars.js:17](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-registrars.js#L17)
    - [registerDetachedTaskRuntime @ kitchen-runtime.js:86](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/kitchen-runtime.js#L86)
    - [registerGatewayDiscoveryService @ generated-registrars.js:18](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-registrars.js#L18)
    - [registerGatewayMethod @ generated-registrars.js:19](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-registrars.js#L19)
    - [registerGatewayMethod @ kitchen-runtime.js:107](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/kitchen-runtime.js#L107)
    - [registerHook @ generated-registrars.js:20](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-registrars.js#L20)
    - [registerHttpRoute @ generated-registrars.js:21](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-registrars.js#L21)
    - [registerHttpRoute @ kitchen-runtime.js:105](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/kitchen-runtime.js#L105)
    - [registerInteractiveHandler @ generated-registrars.js:23](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-registrars.js#L23)
    - [registerInteractiveHandler @ kitchen-runtime.js:53](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/kitchen-runtime.js#L53)
    - [registerMemoryCapability @ generated-registrars.js:25](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-registrars.js#L25)
    - [registerMemoryCorpusSupplement @ generated-registrars.js:26](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-registrars.js#L26)
    - [registerMemoryCorpusSupplement @ kitchen-runtime.js:92](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/kitchen-runtime.js#L92)
    - [registerMemoryFlushPlan @ generated-registrars.js:28](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-registrars.js#L28)
    - [registerMemoryPromptSection @ generated-registrars.js:29](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-registrars.js#L29)
    - [registerMemoryPromptSupplement @ generated-registrars.js:30](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-registrars.js#L30)
    - [registerMemoryPromptSupplement @ kitchen-runtime.js:111](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/kitchen-runtime.js#L111)
    - [registerMemoryRuntime @ generated-registrars.js:31](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-registrars.js#L31)
    - [registerNodeHostCommand @ generated-registrars.js:34](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-registrars.js#L34)
    - [registerNodeInvokePolicy @ generated-registrars.js:35](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-registrars.js#L35)
    - [registerReload @ generated-registrars.js:39](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-registrars.js#L39)
    - [registerSecurityAuditCollector @ generated-registrars.js:41](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-registrars.js#L41)
    - [registerService @ generated-registrars.js:42](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-registrars.js#L42)
    - [registerService @ kitchen-runtime.js:104](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/kitchen-runtime.js#L104)

- 🟡 P2 **lossless-claw** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:lossless-claw`
  - evidence:
    - [registerCommand @ index.ts:2385](https://github.com/Martian-Engineering/lossless-claw/blob/4fc60c925c1eed730a73c6bb62144f7af905687f/src/plugin/index.ts#L2385)
    - [registerContextEngine @ index.ts:2365](https://github.com/Martian-Engineering/lossless-claw/blob/4fc60c925c1eed730a73c6bb62144f7af905687f/src/plugin/index.ts#L2365)

- 🟡 P2 **mcp-adapter** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:mcp-adapter`
  - evidence:
    - [registerService @ index.ts:15](https://github.com/androidStern-personal/openclaw-mcp-adapter/blob/5434ce21ac780a46a493c8125e52e80a03dd2640/index.ts#L15)

- 🟡 P2 **memory-tencentdb** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:memory-tencentdb`
  - evidence:
    - registerContextEngine @ plugins/memory-tencentdb/.crabpot-package/dist/index.mjs:5664
    - registerContextEngine @ plugins/memory-tencentdb/.crabpot-package/dist/index.mjs:5675
    - registerContextEngine @ plugins/memory-tencentdb/.crabpot-package/src/offload/index.ts:1172
    - registerContextEngine @ plugins/memory-tencentdb/.crabpot-package/src/offload/index.ts:1183

- 🟡 P2 **mocrane-wecom** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:mocrane-wecom`
  - evidence:
    - [registerChannel @ index.ts:31](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/index.ts#L31)
    - [registerHttpRoute @ index.ts:34](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/index.ts#L34)

- 🟡 P2 **nemoclaw** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:nemoclaw`
  - evidence:
    - [registerCommand @ index.ts:341](https://github.com/NVIDIA/NemoClaw/blob/c517d622c325803a85312c26dc698ff561d059aa/nemoclaw/src/index.ts#L341)

- 🟡 P2 **openclaw-telemetry** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:openclaw-telemetry`
  - evidence:
    - [registerService @ index.ts:10](https://github.com/knostic/openclaw-telemetry/blob/86c2458a0dfe82d639c208c5220396feb9d53c45/index.ts#L10)

- 🟡 P2 **openclaw-weixin** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:openclaw-weixin`
  - evidence:
    - registerChannel @ plugins/openclaw-weixin/.crabpot-package/dist/index.js:13
    - registerChannel @ plugins/openclaw-weixin/.crabpot-package/index.ts:17

- 🟡 P2 **opik-openclaw** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:opik-openclaw`
  - evidence:
    - [registerService @ index.ts:16](https://github.com/comet-ml/opik-openclaw/blob/0f62b10688428f288eaff9b99e0ee7a9334137e7/index.ts#L16)

- 🟡 P2 **qqbot** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:qqbot`
  - evidence:
    - [registerChannel @ index.ts:16](https://github.com/tencent-connect/openclaw-qqbot/blob/3eee78922ed0b19af5c4c55f1dfe7d1c848e31f5/index.ts#L16)

- 🟡 P2 **wecom** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:wecom`
  - evidence:
    - [registerChannel @ index.js:27](https://github.com/sunnoy/openclaw-plugin-wecom/blob/503a1d5403bc3a57763b9ef17c60a9d5e31b53d9/index.js#L27)
    - [registerHttpRoute @ index.js:56](https://github.com/sunnoy/openclaw-plugin-wecom/blob/503a1d5403bc3a57763b9ef17c60a9d5e31b53d9/index.js#L56)

- 🟡 P2 **yuanbao** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:yuanbao`
  - evidence:
    - registerCommand @ plugins/yuanbao/.crabpot-package/dist/index.js:16
    - registerCommand @ plugins/yuanbao/.crabpot-package/dist/index.js:17
    - registerCommand @ plugins/yuanbao/.crabpot-package/dist/index.js:18

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

- 🟡 P2 **dingtalk-connector** `channel-runtime`
  - contract: Channel setup, message envelope, sender metadata, and config schema remain stable.
  - id: `channel.runtime.envelope-config-metadata:dingtalk-connector`
  - evidence:
    - [registerChannel @ index.ts:74](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/index.ts#L74)

- 🟡 P2 **kitchen-sink** `channel-runtime`
  - contract: Channel setup, message envelope, sender metadata, and config schema remain stable.
  - id: `channel.runtime.envelope-config-metadata:kitchen-sink`
  - evidence:
    - [registerChannel @ generated-registrars.js:8](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-registrars.js#L8)
    - [registerChannel @ kitchen-runtime.js:55](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/kitchen-runtime.js#L55)

- 🟡 P2 **mocrane-wecom** `channel-runtime`
  - contract: Channel setup, message envelope, sender metadata, and config schema remain stable.
  - id: `channel.runtime.envelope-config-metadata:mocrane-wecom`
  - evidence:
    - [registerChannel @ index.ts:31](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/index.ts#L31)

- 🟡 P2 **openclaw-weixin** `channel-runtime`
  - contract: Channel setup, message envelope, sender metadata, and config schema remain stable.
  - id: `channel.runtime.envelope-config-metadata:openclaw-weixin`
  - evidence:
    - registerChannel @ plugins/openclaw-weixin/.crabpot-package/dist/index.js:13
    - registerChannel @ plugins/openclaw-weixin/.crabpot-package/index.ts:17

- 🟡 P2 **qqbot** `channel-runtime`
  - contract: Channel setup, message envelope, sender metadata, and config schema remain stable.
  - id: `channel.runtime.envelope-config-metadata:qqbot`
  - evidence:
    - [registerChannel @ index.ts:16](https://github.com/tencent-connect/openclaw-qqbot/blob/3eee78922ed0b19af5c4c55f1dfe7d1c848e31f5/index.ts#L16)

- 🟡 P2 **wecom** `channel-runtime`
  - contract: Channel setup, message envelope, sender metadata, and config schema remain stable.
  - id: `channel.runtime.envelope-config-metadata:wecom`
  - evidence:
    - [registerChannel @ index.js:27](https://github.com/sunnoy/openclaw-plugin-wecom/blob/503a1d5403bc3a57763b9ef17c60a9d5e31b53d9/index.js#L27)

- 🟡 P2 **yuanbao** `channel-runtime`
  - contract: Channel setup, message envelope, sender metadata, and config schema remain stable.
  - id: `channel.runtime.envelope-config-metadata:yuanbao`
  - evidence:
    - createChatChannelPlugin @ plugins/yuanbao/.crabpot-package/dist/src/channel.js:18

- 🟡 P2 **connectclaw** `hook-runner`
  - contract: Legacy before_agent_start remains wired until plugins migrate to before_model_resolve and before_prompt_build.
  - id: `hook.compat.before-agent-start-migration:connectclaw`
  - evidence:
    - [before_agent_start @ hooks.ts:17](https://github.com/osipov-anton/connectclaw/blob/7a4e2646e914de075435b3837123cc03c3edae36/packages/plugin/src/hooks.ts#L17)

- 🟡 P2 **honcho** `hook-runner`
  - contract: Legacy before_agent_start remains wired until plugins migrate to before_model_resolve and before_prompt_build.
  - id: `hook.compat.before-agent-start-migration:honcho`
  - evidence:
    - [before_agent_start @ subagent.ts:18](https://github.com/plastic-labs/openclaw-honcho/blob/e9f01452b781d24b38336ef0738f2c97353c541e/hooks/subagent.ts#L18)

- 🟡 P2 **kitchen-sink** `hook-runner`
  - contract: Legacy before_agent_start remains wired until plugins migrate to before_model_resolve and before_prompt_build.
  - id: `hook.compat.before-agent-start-migration:kitchen-sink`
  - evidence:
    - [before_agent_start @ generated-hooks.js:11](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-hooks.js#L11)

- 🟡 P2 **openclaw-telemetry** `hook-runner`
  - contract: Legacy before_agent_start remains wired until plugins migrate to before_model_resolve and before_prompt_build.
  - id: `hook.compat.before-agent-start-migration:openclaw-telemetry`
  - evidence:
    - [before_agent_start @ index.ts:53](https://github.com/knostic/openclaw-telemetry/blob/86c2458a0dfe82d639c208c5220396feb9d53c45/index.ts#L53)

- 🟡 P2 **agentchat** `manifest-loader`
  - contract: Legacy channel env metadata continues to map into channel setup/help surfaces.
  - id: `manifest.compat.channel-env-vars:agentchat`
  - evidence:
    - agentchat

- 🟡 P2 **yuanbao** `manifest-loader`
  - contract: Legacy channel env metadata continues to map into channel setup/help surfaces.
  - id: `manifest.compat.channel-env-vars:yuanbao`
  - evidence:
    - yuanbao

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

- 🟡 P2 **dingtalk-connector** `manifest-loader`
  - contract: Manifest top-level fields are represented in target OpenClaw PluginManifest.
  - id: `manifest.schema.top-level-fields:dingtalk-connector`
  - evidence:
    - [author @ openclaw.plugin.json](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/openclaw.plugin.json)
    - [main @ openclaw.plugin.json](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/openclaw.plugin.json)

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
    - [package.json](https://github.com/ComposioHQ/openclaw-composio-plugin/blob/47025c33224d343d9fbbf67e0a24e56eeaa18fff/package.json)

- 🟡 P2 **ddingtalk** `package-loader`
  - contract: Package metadata declares the OpenClaw plugin API range used by the plugin.
  - id: `package.compat.plugin-api-range:ddingtalk`
  - evidence:
    - [package.json](https://github.com/largezhou/openclaw-dingtalk/blob/74d22da7335f261ec5febe2663bed6b81068b7ec/package.json)

- 🟡 P2 **dingtalk-connector** `package-loader`
  - contract: Package metadata declares the OpenClaw plugin API range used by the plugin.
  - id: `package.compat.plugin-api-range:dingtalk-connector`
  - evidence:
    - [package.json](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/package.json)

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

- 🟡 P2 **openclaw-telemetry** `package-loader`
  - contract: Package metadata declares the OpenClaw plugin API range used by the plugin.
  - id: `package.compat.plugin-api-range:openclaw-telemetry`
  - evidence:
    - [package.json](https://github.com/knostic/openclaw-telemetry/blob/86c2458a0dfe82d639c208c5220396feb9d53c45/package.json)

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
    - [package.json](https://github.com/sunnoy/openclaw-plugin-wecom/blob/503a1d5403bc3a57763b9ef17c60a9d5e31b53d9/package.json)

- 🟡 P2 **yuanbao** `package-loader`
  - contract: Package metadata declares the OpenClaw plugin API range used by the plugin.
  - id: `package.compat.plugin-api-range:yuanbao`
  - evidence:
    - plugins/yuanbao/.crabpot-package/package.json

- 🟡 P2 **agentchat** `package-loader`
  - contract: Inspector can build or resolve source aliases before cold importing package entrypoints.
  - id: `package.entrypoint.build-before-cold-import:agentchat`
  - evidence:
    - [extension:./dist/index.js @ index.js](https://github.com/agentchatme/agentchat/blob/1460cece00ebd3829fb39d5db5ee23050937ed02/integrations/openclaw-channel/dist/index.js)
    - [setupEntry:./dist/setup-entry.js @ setup-entry.js](https://github.com/agentchatme/agentchat/blob/1460cece00ebd3829fb39d5db5ee23050937ed02/integrations/openclaw-channel/dist/setup-entry.js)

- 🟡 P2 **dingtalk-connector** `package-loader`
  - contract: Inspector can build or resolve source aliases before cold importing package entrypoints.
  - id: `package.entrypoint.build-before-cold-import:dingtalk-connector`
  - evidence:
    - [extension:./dist/index.mjs @ index.mjs](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/dist/index.mjs)

- 🟡 P2 **honcho** `package-loader`
  - contract: Inspector can build or resolve source aliases before cold importing package entrypoints.
  - id: `package.entrypoint.build-before-cold-import:honcho`
  - evidence:
    - [extension:./dist/index.js @ index.js](https://github.com/plastic-labs/openclaw-honcho/blob/e9f01452b781d24b38336ef0738f2c97353c541e/dist/index.js)

- 🟡 P2 **hyperspell** `package-loader`
  - contract: Inspector can build or resolve source aliases before cold importing package entrypoints.
  - id: `package.entrypoint.build-before-cold-import:hyperspell`
  - evidence:
    - [extension:./dist/index.js @ index.js](https://github.com/hyperspell/hyperspell-openclaw/blob/3ccb46f1c4c98149fbb69a6dbcb893f167e0e246/dist/index.js)

- 🟡 P2 **lossless-claw** `package-loader`
  - contract: Inspector can build or resolve source aliases before cold importing package entrypoints.
  - id: `package.entrypoint.build-before-cold-import:lossless-claw`
  - evidence:
    - [extension:./dist/index.js @ index.js](https://github.com/Martian-Engineering/lossless-claw/blob/4fc60c925c1eed730a73c6bb62144f7af905687f/dist/index.js)

- 🟡 P2 **nemoclaw** `package-loader`
  - contract: Inspector can build or resolve source aliases before cold importing package entrypoints.
  - id: `package.entrypoint.build-before-cold-import:nemoclaw`
  - evidence:
    - [extension:./dist/index.js @ index.js](https://github.com/NVIDIA/NemoClaw/blob/c517d622c325803a85312c26dc698ff561d059aa/nemoclaw/dist/index.js)

- 🟡 P2 **opik-openclaw** `package-loader`
  - contract: Inspector can build or resolve source aliases before cold importing package entrypoints.
  - id: `package.entrypoint.build-before-cold-import:opik-openclaw`
  - evidence:
    - [runtimeExtension:./dist/index.js @ index.js](https://github.com/comet-ml/opik-openclaw/blob/0f62b10688428f288eaff9b99e0ee7a9334137e7/dist/index.js)

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

- 🟡 P2 **ddingtalk** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:ddingtalk`
  - evidence:
    - [dingtalk-stream @ package.json](https://github.com/largezhou/openclaw-dingtalk/blob/74d22da7335f261ec5febe2663bed6b81068b7ec/package.json)
    - [zod @ package.json](https://github.com/largezhou/openclaw-dingtalk/blob/74d22da7335f261ec5febe2663bed6b81068b7ec/package.json)

- 🟡 P2 **dingtalk-connector** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:dingtalk-connector`
  - evidence:
    - [axios @ package.json](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/package.json)
    - [dingtalk-stream @ package.json](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/package.json)
    - [form-data @ package.json](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/package.json)
    - [qrcode-terminal @ package.json](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/package.json)
    - [zod @ package.json](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/package.json)
    - [mammoth @ package.json](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/package.json)

- 🟡 P2 **hasdata** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:hasdata`
  - evidence:
    - [@sinclair/typebox @ package.json](https://github.com/HasData/hasdata-openclaw-plugin/blob/bed32d8a0359392b7c4628f12b909b6e204c8426/package.json)

- 🟡 P2 **honcho** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:honcho`
  - evidence:
    - [@honcho-ai/sdk @ package.json](https://github.com/plastic-labs/openclaw-honcho/blob/e9f01452b781d24b38336ef0738f2c97353c541e/package.json)
    - [@sinclair/typebox @ package.json](https://github.com/plastic-labs/openclaw-honcho/blob/e9f01452b781d24b38336ef0738f2c97353c541e/package.json)

- 🟡 P2 **hyperspell** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:hyperspell`
  - evidence:
    - [@clack/prompts @ package.json](https://github.com/hyperspell/hyperspell-openclaw/blob/3ccb46f1c4c98149fbb69a6dbcb893f167e0e246/package.json)
    - [@sinclair/typebox @ package.json](https://github.com/hyperspell/hyperspell-openclaw/blob/3ccb46f1c4c98149fbb69a6dbcb893f167e0e246/package.json)
    - [hyperspell @ package.json](https://github.com/hyperspell/hyperspell-openclaw/blob/3ccb46f1c4c98149fbb69a6dbcb893f167e0e246/package.json)

- 🟡 P2 **lossless-claw** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:lossless-claw`
  - evidence:
    - [@sinclair/typebox @ package.json](https://github.com/Martian-Engineering/lossless-claw/blob/4fc60c925c1eed730a73c6bb62144f7af905687f/package.json)
    - [@mariozechner/pi-agent-core @ package.json](https://github.com/Martian-Engineering/lossless-claw/blob/4fc60c925c1eed730a73c6bb62144f7af905687f/package.json)
    - [@mariozechner/pi-ai @ package.json](https://github.com/Martian-Engineering/lossless-claw/blob/4fc60c925c1eed730a73c6bb62144f7af905687f/package.json)
    - [@mariozechner/pi-coding-agent @ package.json](https://github.com/Martian-Engineering/lossless-claw/blob/4fc60c925c1eed730a73c6bb62144f7af905687f/package.json)

- 🟡 P2 **mcp-adapter** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:mcp-adapter`
  - evidence:
    - [@modelcontextprotocol/sdk @ package.json](https://github.com/androidStern-personal/openclaw-mcp-adapter/blob/5434ce21ac780a46a493c8125e52e80a03dd2640/package.json)

- 🟡 P2 **memory-tencentdb** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:memory-tencentdb`
  - evidence:
    - @ai-sdk/openai @ plugins/memory-tencentdb/.crabpot-package/package.json
    - @node-rs/jieba @ plugins/memory-tencentdb/.crabpot-package/package.json
    - @tencentdb-agent-memory/tcvdb-text @ plugins/memory-tencentdb/.crabpot-package/package.json
    - ai @ plugins/memory-tencentdb/.crabpot-package/package.json
    - js-tiktoken @ plugins/memory-tencentdb/.crabpot-package/package.json
    - json5 @ plugins/memory-tencentdb/.crabpot-package/package.json
    - sqlite-vec @ plugins/memory-tencentdb/.crabpot-package/package.json
    - tsx @ plugins/memory-tencentdb/.crabpot-package/package.json
    - undici @ plugins/memory-tencentdb/.crabpot-package/package.json
    - yaml @ plugins/memory-tencentdb/.crabpot-package/package.json
    - node-llama-cpp @ plugins/memory-tencentdb/.crabpot-package/package.json
    - opik @ plugins/memory-tencentdb/.crabpot-package/package.json

- 🟡 P2 **mocrane-wecom** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:mocrane-wecom`
  - evidence:
    - [@wecom/aibot-node-sdk @ package.json](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/package.json)
    - [fast-xml-parser @ package.json](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/package.json)
    - [file-type @ package.json](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/package.json)
    - [undici @ package.json](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/package.json)
    - [zod @ package.json](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/package.json)

- 🟡 P2 **nemoclaw** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:nemoclaw`
  - evidence:
    - [commander @ package.json](https://github.com/NVIDIA/NemoClaw/blob/c517d622c325803a85312c26dc698ff561d059aa/nemoclaw/package.json)
    - [execa @ package.json](https://github.com/NVIDIA/NemoClaw/blob/c517d622c325803a85312c26dc698ff561d059aa/nemoclaw/package.json)
    - [json5 @ package.json](https://github.com/NVIDIA/NemoClaw/blob/c517d622c325803a85312c26dc698ff561d059aa/nemoclaw/package.json)
    - [tar @ package.json](https://github.com/NVIDIA/NemoClaw/blob/c517d622c325803a85312c26dc698ff561d059aa/nemoclaw/package.json)
    - [yaml @ package.json](https://github.com/NVIDIA/NemoClaw/blob/c517d622c325803a85312c26dc698ff561d059aa/nemoclaw/package.json)

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
    - [@clack/prompts @ package.json](https://github.com/comet-ml/opik-openclaw/blob/0f62b10688428f288eaff9b99e0ee7a9334137e7/package.json)
    - [opik @ package.json](https://github.com/comet-ml/opik-openclaw/blob/0f62b10688428f288eaff9b99e0ee7a9334137e7/package.json)
    - [zod @ package.json](https://github.com/comet-ml/opik-openclaw/blob/0f62b10688428f288eaff9b99e0ee7a9334137e7/package.json)

- 🟡 P2 **qqbot** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:qqbot`
  - evidence:
    - [mpg123-decoder @ package.json](https://github.com/tencent-connect/openclaw-qqbot/blob/3eee78922ed0b19af5c4c55f1dfe7d1c848e31f5/package.json)
    - [silk-wasm @ package.json](https://github.com/tencent-connect/openclaw-qqbot/blob/3eee78922ed0b19af5c4c55f1dfe7d1c848e31f5/package.json)
    - [ws @ package.json](https://github.com/tencent-connect/openclaw-qqbot/blob/3eee78922ed0b19af5c4c55f1dfe7d1c848e31f5/package.json)

- 🟡 P2 **wecom** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:wecom`
  - evidence:
    - [@wecom/aibot-node-sdk @ package.json](https://github.com/sunnoy/openclaw-plugin-wecom/blob/503a1d5403bc3a57763b9ef17c60a9d5e31b53d9/package.json)
    - [file-type @ package.json](https://github.com/sunnoy/openclaw-plugin-wecom/blob/503a1d5403bc3a57763b9ef17c60a9d5e31b53d9/package.json)
    - [pinyin-pro @ package.json](https://github.com/sunnoy/openclaw-plugin-wecom/blob/503a1d5403bc3a57763b9ef17c60a9d5e31b53d9/package.json)
    - [undici @ package.json](https://github.com/sunnoy/openclaw-plugin-wecom/blob/503a1d5403bc3a57763b9ef17c60a9d5e31b53d9/package.json)

- 🟡 P2 **yuanbao** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:yuanbao`
  - evidence:
    - cos-nodejs-sdk-v5 @ plugins/yuanbao/.crabpot-package/package.json
    - protobufjs @ plugins/yuanbao/.crabpot-package/package.json
    - semver @ plugins/yuanbao/.crabpot-package/package.json
    - ws @ plugins/yuanbao/.crabpot-package/package.json

- 🟡 P2 **a2a-gateway** `package-loader`
  - contract: Inspector can compile or load TypeScript source entrypoints before registration capture.
  - id: `package.entrypoint.typescript-loader:a2a-gateway`
  - evidence:
    - [extension @ index.ts](https://github.com/win4r/openclaw-a2a-gateway/blob/a335e59e926f7e1a8913e6cd7b1cbf2d44c33cb7/index.ts)

- 🟡 P2 **composio** `package-loader`
  - contract: Inspector can compile or load TypeScript source entrypoints before registration capture.
  - id: `package.entrypoint.typescript-loader:composio`
  - evidence:
    - [extension @ index.ts](https://github.com/ComposioHQ/openclaw-composio-plugin/blob/47025c33224d343d9fbbf67e0a24e56eeaa18fff/index.ts)

- 🟡 P2 **connectclaw** `package-loader`
  - contract: Inspector can compile or load TypeScript source entrypoints before registration capture.
  - id: `package.entrypoint.typescript-loader:connectclaw`
  - evidence:
    - [extension @ index.ts](https://github.com/osipov-anton/connectclaw/blob/7a4e2646e914de075435b3837123cc03c3edae36/packages/plugin/index.ts)

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

- 🟡 P2 **openclaw-telemetry** `package-loader`
  - contract: Inspector can compile or load TypeScript source entrypoints before registration capture.
  - id: `package.entrypoint.typescript-loader:openclaw-telemetry`
  - evidence:
    - [extension @ index.ts](https://github.com/knostic/openclaw-telemetry/blob/86c2458a0dfe82d639c208c5220396feb9d53c45/index.ts)

- 🟡 P2 **openclaw-weixin** `package-loader`
  - contract: Inspector can compile or load TypeScript source entrypoints before registration capture.
  - id: `package.entrypoint.typescript-loader:openclaw-weixin`
  - evidence:
    - extension:plugins/openclaw-weixin/.crabpot-package/index.ts

- 🟡 P2 **opik-openclaw** `package-loader`
  - contract: Inspector can compile or load TypeScript source entrypoints before registration capture.
  - id: `package.entrypoint.typescript-loader:opik-openclaw`
  - evidence:
    - [extension @ index.ts](https://github.com/comet-ml/opik-openclaw/blob/0f62b10688428f288eaff9b99e0ee7a9334137e7/index.ts)

- 🟡 P2 **a2a-gateway** `package-loader`
  - contract: Package and OpenClaw manifest versions stay aligned for release compatibility reporting.
  - id: `package.metadata.version-alignment:a2a-gateway`
  - evidence:
    - package:1.4.0
    - manifest:1.3.0

- 🟡 P2 **hyperspell** `package-loader`
  - contract: Package and OpenClaw manifest versions stay aligned for release compatibility reporting.
  - id: `package.metadata.version-alignment:hyperspell`
  - evidence:
    - package:0.13.1
    - manifest:0.13.0

- 🟡 P2 **a2a-gateway** `sdk-alias`
  - contract: Root plugin SDK barrel remains importable or has a machine-readable migration path.
  - id: `sdk.import.root-barrel-cold-import:a2a-gateway`
  - evidence:
    - [openclaw/plugin-sdk @ types.ts:14](https://github.com/win4r/openclaw-a2a-gateway/blob/a335e59e926f7e1a8913e6cd7b1cbf2d44c33cb7/src/types.ts#L14)

- 🟡 P2 **composio** `sdk-alias`
  - contract: Root plugin SDK barrel remains importable or has a machine-readable migration path.
  - id: `sdk.import.root-barrel-cold-import:composio`
  - evidence:
    - [openclaw/plugin-sdk @ index.ts:1](https://github.com/ComposioHQ/openclaw-composio-plugin/blob/47025c33224d343d9fbbf67e0a24e56eeaa18fff/index.ts#L1)

- 🟡 P2 **connectclaw** `sdk-alias`
  - contract: Root plugin SDK barrel remains importable or has a machine-readable migration path.
  - id: `sdk.import.root-barrel-cold-import:connectclaw`
  - evidence:
    - [openclaw/plugin-sdk @ index.ts:1](https://github.com/osipov-anton/connectclaw/blob/7a4e2646e914de075435b3837123cc03c3edae36/packages/plugin/index.ts#L1)
    - [openclaw/plugin-sdk @ commands.ts:1](https://github.com/osipov-anton/connectclaw/blob/7a4e2646e914de075435b3837123cc03c3edae36/packages/plugin/src/commands.ts#L1)
    - [openclaw/plugin-sdk @ hooks.ts:1](https://github.com/osipov-anton/connectclaw/blob/7a4e2646e914de075435b3837123cc03c3edae36/packages/plugin/src/hooks.ts#L1)
    - [openclaw/plugin-sdk @ tools.ts:1](https://github.com/osipov-anton/connectclaw/blob/7a4e2646e914de075435b3837123cc03c3edae36/packages/plugin/src/tools.ts#L1)
    - [openclaw/plugin-sdk @ tools.ts:2](https://github.com/osipov-anton/connectclaw/blob/7a4e2646e914de075435b3837123cc03c3edae36/packages/plugin/src/tools.ts#L2)

- 🟡 P2 **dingtalk-connector** `sdk-alias`
  - contract: Root plugin SDK barrel remains importable or has a machine-readable migration path.
  - id: `sdk.import.root-barrel-cold-import:dingtalk-connector`
  - evidence:
    - [openclaw/plugin-sdk @ index.ts:17](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/index.ts#L17)
    - [openclaw/plugin-sdk @ channel.ts:4](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/src/channel.ts#L4)
    - [openclaw/plugin-sdk @ accounts.ts:2](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/src/config/accounts.ts#L2)
    - [openclaw/plugin-sdk @ connection.ts:16](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/src/core/connection.ts#L16)
    - [openclaw/plugin-sdk @ provider.ts:14](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/src/core/provider.ts#L14)
    - [openclaw/plugin-sdk @ directory.ts:1](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/src/directory.ts#L1)
    - [openclaw/plugin-sdk @ gateway-methods.ts:7](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/src/gateway-methods.ts#L7)
    - [openclaw/plugin-sdk @ onboarding.ts:5](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/src/onboarding.ts#L5)
    - [openclaw/plugin-sdk @ runtime.ts:1](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/src/runtime.ts#L1)
    - [openclaw/plugin-sdk @ agent.ts:8](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/3441bcffc4dee15936ede406ce001ffcf9e2efc3/src/utils/agent.ts#L8)

- 🟡 P2 **honcho** `sdk-alias`
  - contract: Root plugin SDK barrel remains importable or has a machine-readable migration path.
  - id: `sdk.import.root-barrel-cold-import:honcho`
  - evidence:
    - [openclaw/plugin-sdk @ cli.ts:8](https://github.com/plastic-labs/openclaw-honcho/blob/e9f01452b781d24b38336ef0738f2c97353c541e/commands/cli.ts#L8)
    - [openclaw/plugin-sdk @ capture.ts:2](https://github.com/plastic-labs/openclaw-honcho/blob/e9f01452b781d24b38336ef0738f2c97353c541e/hooks/capture.ts#L2)
    - [openclaw/plugin-sdk @ context.ts:2](https://github.com/plastic-labs/openclaw-honcho/blob/e9f01452b781d24b38336ef0738f2c97353c541e/hooks/context.ts#L2)
    - [openclaw/plugin-sdk @ gateway.ts:2](https://github.com/plastic-labs/openclaw-honcho/blob/e9f01452b781d24b38336ef0738f2c97353c541e/hooks/gateway.ts#L2)
    - [openclaw/plugin-sdk @ subagent.ts:2](https://github.com/plastic-labs/openclaw-honcho/blob/e9f01452b781d24b38336ef0738f2c97353c541e/hooks/subagent.ts#L2)
    - [openclaw/plugin-sdk @ state.ts:9](https://github.com/plastic-labs/openclaw-honcho/blob/e9f01452b781d24b38336ef0738f2c97353c541e/state.ts#L9)
    - [openclaw/plugin-sdk @ ask.ts:3](https://github.com/plastic-labs/openclaw-honcho/blob/e9f01452b781d24b38336ef0738f2c97353c541e/tools/ask.ts#L3)
    - [openclaw/plugin-sdk @ context.ts:3](https://github.com/plastic-labs/openclaw-honcho/blob/e9f01452b781d24b38336ef0738f2c97353c541e/tools/context.ts#L3)
    - [openclaw/plugin-sdk @ memory-passthrough.ts:3](https://github.com/plastic-labs/openclaw-honcho/blob/e9f01452b781d24b38336ef0738f2c97353c541e/tools/memory-passthrough.ts#L3)
    - [openclaw/plugin-sdk @ message-search.ts:3](https://github.com/plastic-labs/openclaw-honcho/blob/e9f01452b781d24b38336ef0738f2c97353c541e/tools/message-search.ts#L3)
    - [openclaw/plugin-sdk @ search.ts:3](https://github.com/plastic-labs/openclaw-honcho/blob/e9f01452b781d24b38336ef0738f2c97353c541e/tools/search.ts#L3)
    - [openclaw/plugin-sdk @ session.ts:3](https://github.com/plastic-labs/openclaw-honcho/blob/e9f01452b781d24b38336ef0738f2c97353c541e/tools/session.ts#L3)

- 🟡 P2 **hyperspell** `sdk-alias`
  - contract: Root plugin SDK barrel remains importable or has a machine-readable migration path.
  - id: `sdk.import.root-barrel-cold-import:hyperspell`
  - evidence:
    - [openclaw/plugin-sdk @ slash.ts:1](https://github.com/hyperspell/hyperspell-openclaw/blob/3ccb46f1c4c98149fbb69a6dbcb893f167e0e246/commands/slash.ts#L1)
    - [openclaw/plugin-sdk @ tools.ts:2](https://github.com/hyperspell/hyperspell-openclaw/blob/3ccb46f1c4c98149fbb69a6dbcb893f167e0e246/graph/tools.ts#L2)
    - [openclaw/plugin-sdk @ index.ts:1](https://github.com/hyperspell/hyperspell-openclaw/blob/3ccb46f1c4c98149fbb69a6dbcb893f167e0e246/index.ts#L1)

- 🟡 P2 **kitchen-sink** `sdk-alias`
  - contract: Root plugin SDK barrel remains importable or has a machine-readable migration path.
  - id: `sdk.import.root-barrel-cold-import:kitchen-sink`
  - evidence:
    - [openclaw/plugin-sdk @ generated-sdk-imports.ts:2](https://github.com/openclaw/kitchen-sink/blob/6995e72caacdcab1aedc74f20d2118465eaf976e/src/generated-sdk-imports.ts#L2)

- 🟡 P2 **llm-trace-phoenix** `sdk-alias`
  - contract: Root plugin SDK barrel remains importable or has a machine-readable migration path.
  - id: `sdk.import.root-barrel-cold-import:llm-trace-phoenix`
  - evidence:
    - [openclaw/plugin-sdk @ index.ts:12](https://github.com/pingshian0131/openclaw-plugin-llm-trace-phoenix/blob/05bc0f4ba67281c10fad7be356d32a54b00c59fd/index.ts#L12)

- 🟡 P2 **lossless-claw** `sdk-alias`
  - contract: Root plugin SDK barrel remains importable or has a machine-readable migration path.
  - id: `sdk.import.root-barrel-cold-import:lossless-claw`
  - evidence:
    - [openclaw/plugin-sdk @ openclaw-bridge.ts:21](https://github.com/Martian-Engineering/lossless-claw/blob/4fc60c925c1eed730a73c6bb62144f7af905687f/src/openclaw-bridge.ts#L21)
    - [openclaw/plugin-sdk @ openclaw-bridge.ts:26](https://github.com/Martian-Engineering/lossless-claw/blob/4fc60c925c1eed730a73c6bb62144f7af905687f/src/openclaw-bridge.ts#L26)

- 🟡 P2 **memory-tencentdb** `sdk-alias`
  - contract: Root plugin SDK barrel remains importable or has a machine-readable migration path.
  - id: `sdk.import.root-barrel-cold-import:memory-tencentdb`
  - evidence:
    - openclaw/plugin-sdk @ plugins/memory-tencentdb/.crabpot-package/dist/index.mjs:6238
    - openclaw/plugin-sdk @ plugins/memory-tencentdb/.crabpot-package/src/offload/index.ts:1852

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

- 🟡 P2 **openclaw-telemetry** `sdk-alias`
  - contract: Root plugin SDK barrel remains importable or has a machine-readable migration path.
  - id: `sdk.import.root-barrel-cold-import:openclaw-telemetry`
  - evidence:
    - [openclaw/plugin-sdk @ index.ts:1](https://github.com/knostic/openclaw-telemetry/blob/86c2458a0dfe82d639c208c5220396feb9d53c45/index.ts#L1)
    - [openclaw/plugin-sdk @ service.ts:1](https://github.com/knostic/openclaw-telemetry/blob/86c2458a0dfe82d639c208c5220396feb9d53c45/src/service.ts#L1)
    - [openclaw/plugin-sdk @ service.ts:2](https://github.com/knostic/openclaw-telemetry/blob/86c2458a0dfe82d639c208c5220396feb9d53c45/src/service.ts#L2)

- 🟡 P2 **opik-openclaw** `sdk-alias`
  - contract: Root plugin SDK barrel remains importable or has a machine-readable migration path.
  - id: `sdk.import.root-barrel-cold-import:opik-openclaw`
  - evidence:
    - [openclaw/plugin-sdk @ index.ts:1](https://github.com/comet-ml/opik-openclaw/blob/0f62b10688428f288eaff9b99e0ee7a9334137e7/index.ts#L1)
    - [openclaw/plugin-sdk @ index.ts:2](https://github.com/comet-ml/opik-openclaw/blob/0f62b10688428f288eaff9b99e0ee7a9334137e7/index.ts#L2)
    - [openclaw/plugin-sdk @ cli.ts:1](https://github.com/comet-ml/opik-openclaw/blob/0f62b10688428f288eaff9b99e0ee7a9334137e7/src/cli.ts#L1)
    - [openclaw/plugin-sdk @ configure.ts:2](https://github.com/comet-ml/opik-openclaw/blob/0f62b10688428f288eaff9b99e0ee7a9334137e7/src/configure.ts#L2)
    - [openclaw/plugin-sdk @ service.ts:5](https://github.com/comet-ml/opik-openclaw/blob/0f62b10688428f288eaff9b99e0ee7a9334137e7/src/service.ts#L5)
    - [openclaw/plugin-sdk @ service.ts:6](https://github.com/comet-ml/opik-openclaw/blob/0f62b10688428f288eaff9b99e0ee7a9334137e7/src/service.ts#L6)
    - [openclaw/plugin-sdk @ llm.ts:1](https://github.com/comet-ml/opik-openclaw/blob/0f62b10688428f288eaff9b99e0ee7a9334137e7/src/service/hooks/llm.ts#L1)
    - [openclaw/plugin-sdk @ subagent.ts:1](https://github.com/comet-ml/opik-openclaw/blob/0f62b10688428f288eaff9b99e0ee7a9334137e7/src/service/hooks/subagent.ts#L1)
    - [openclaw/plugin-sdk @ tool.ts:1](https://github.com/comet-ml/opik-openclaw/blob/0f62b10688428f288eaff9b99e0ee7a9334137e7/src/service/hooks/tool.ts#L1)

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

- 🟡 P2 **a2a-gateway** `tool-runtime`
  - contract: Registered runtime tools expose stable names, input schemas, and result metadata.
  - id: `tool.registration.schema-capture:a2a-gateway`
  - evidence:
    - [registerTool @ index.ts:777](https://github.com/win4r/openclaw-a2a-gateway/blob/a335e59e926f7e1a8913e6cd7b1cbf2d44c33cb7/index.ts#L777)

- 🟡 P2 **connectclaw** `tool-runtime`
  - contract: Registered runtime tools expose stable names, input schemas, and result metadata.
  - id: `tool.registration.schema-capture:connectclaw`
  - evidence:
    - [registerTool @ tools.ts:6](https://github.com/osipov-anton/connectclaw/blob/7a4e2646e914de075435b3837123cc03c3edae36/packages/plugin/src/tools.ts#L6)

- 🟡 P2 **honcho** `tool-runtime`
  - contract: Registered runtime tools expose stable names, input schemas, and result metadata.
  - id: `tool.registration.schema-capture:honcho`
  - evidence:
    - [registerTool @ ask.ts:8](https://github.com/plastic-labs/openclaw-honcho/blob/e9f01452b781d24b38336ef0738f2c97353c541e/tools/ask.ts#L8)
    - [registerTool @ context.ts:8](https://github.com/plastic-labs/openclaw-honcho/blob/e9f01452b781d24b38336ef0738f2c97353c541e/tools/context.ts#L8)
    - [registerTool @ memory-passthrough.ts:130](https://github.com/plastic-labs/openclaw-honcho/blob/e9f01452b781d24b38336ef0738f2c97353c541e/tools/memory-passthrough.ts#L130)
    - [registerTool @ memory-passthrough.ts:89](https://github.com/plastic-labs/openclaw-honcho/blob/e9f01452b781d24b38336ef0738f2c97353c541e/tools/memory-passthrough.ts#L89)
    - [registerTool @ message-search.ts:9](https://github.com/plastic-labs/openclaw-honcho/blob/e9f01452b781d24b38336ef0738f2c97353c541e/tools/message-search.ts#L9)
    - [registerTool @ search.ts:8](https://github.com/plastic-labs/openclaw-honcho/blob/e9f01452b781d24b38336ef0738f2c97353c541e/tools/search.ts#L8)
    - [registerTool @ session.ts:8](https://github.com/plastic-labs/openclaw-honcho/blob/e9f01452b781d24b38336ef0738f2c97353c541e/tools/session.ts#L8)

- 🟡 P2 **mcp-adapter** `tool-runtime`
  - contract: Registered runtime tools expose stable names, input schemas, and result metadata.
  - id: `tool.registration.schema-capture:mcp-adapter`
  - evidence:
    - [registerTool @ index.ts:30](https://github.com/androidStern-personal/openclaw-mcp-adapter/blob/5434ce21ac780a46a493c8125e52e80a03dd2640/index.ts#L30)

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
    - [registerTool @ index.js:28](https://github.com/sunnoy/openclaw-plugin-wecom/blob/503a1d5403bc3a57763b9ef17c60a9d5e31b53d9/index.js#L28)
    - [registerTool @ index.js:40](https://github.com/sunnoy/openclaw-plugin-wecom/blob/503a1d5403bc3a57763b9ef17c60a9d5e31b53d9/index.js#L40)
    - [registerTool @ index.js:44](https://github.com/sunnoy/openclaw-plugin-wecom/blob/503a1d5403bc3a57763b9ef17c60a9d5e31b53d9/index.js#L44)

- 🟡 P2 **yuanbao** `tool-runtime`
  - contract: Registered runtime tools expose stable names, input schemas, and result metadata.
  - id: `tool.registration.schema-capture:yuanbao`
  - evidence:
    - registerTool @ plugins/yuanbao/.crabpot-package/dist/src/business/tools/group.js:78
    - registerTool @ plugins/yuanbao/.crabpot-package/dist/src/business/tools/member.js:172
    - registerTool @ plugins/yuanbao/.crabpot-package/dist/src/business/tools/remind.js:325

- 🟢 P3 **clawmetry** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:clawmetry`
  - evidence:
    - [registerService @ index.ts:20](https://github.com/vivekchand/clawmetry/blob/c969c8cb2e7fe41451349792caea03e87e83a174/clawhub-plugin/index.ts#L20)

- 🟢 P3 **clawrouter** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:clawrouter`
  - evidence:
    - [registerCommand @ index.ts:1721](https://github.com/BlockRunAI/ClawRouter/blob/ed699ce6ab9654fe1b3b8431ed6174c5857df3e5/src/index.ts#L1721)
    - [registerCommand @ index.ts:1773](https://github.com/BlockRunAI/ClawRouter/blob/ed699ce6ab9654fe1b3b8431ed6174c5857df3e5/src/index.ts#L1773)
    - [registerCommand @ index.ts:1827](https://github.com/BlockRunAI/ClawRouter/blob/ed699ce6ab9654fe1b3b8431ed6174c5857df3e5/src/index.ts#L1827)
    - [registerCommand @ index.ts:1881](https://github.com/BlockRunAI/ClawRouter/blob/ed699ce6ab9654fe1b3b8431ed6174c5857df3e5/src/index.ts#L1881)
    - [registerCommand @ index.ts:1886](https://github.com/BlockRunAI/ClawRouter/blob/ed699ce6ab9654fe1b3b8431ed6174c5857df3e5/src/index.ts#L1886)
    - [registerCommand @ index.ts:1890](https://github.com/BlockRunAI/ClawRouter/blob/ed699ce6ab9654fe1b3b8431ed6174c5857df3e5/src/index.ts#L1890)
    - [registerCommand @ index.ts:1891](https://github.com/BlockRunAI/ClawRouter/blob/ed699ce6ab9654fe1b3b8431ed6174c5857df3e5/src/index.ts#L1891)
    - [registerService @ index.ts:1900](https://github.com/BlockRunAI/ClawRouter/blob/ed699ce6ab9654fe1b3b8431ed6174c5857df3e5/src/index.ts#L1900)

- 🟢 P3 **codex** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:codex`
  - evidence:
    - [registerCommand @ index.js:350](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/codex/dist/index.js#L350)

- 🟢 P3 **codex-app-server** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:codex-app-server`
  - evidence:
    - [registerCommand @ index.ts:48](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/index.ts#L48)
    - [registerInteractiveHandler @ index.ts:29](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/index.ts#L29)
    - [registerInteractiveHandler @ index.ts:38](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/index.ts#L38)
    - [registerService @ index.ts:12](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/index.ts#L12)

- 🟢 P3 **diagnostics-otel** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:diagnostics-otel`
  - evidence:
    - [registerService @ index.js:1468](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/diagnostics-otel/dist/index.js#L1468)

- 🟢 P3 **diagnostics-prometheus** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:diagnostics-prometheus`
  - evidence:
    - [registerHttpRoute @ index.js:444](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/diagnostics-prometheus/dist/index.js#L444)
    - [registerService @ index.js:443](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/diagnostics-prometheus/dist/index.js#L443)

- 🟢 P3 **diffs** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:diffs`
  - evidence:
    - [registerHttpRoute @ index.js:2054](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/diffs/dist/index.js#L2054)

- 🟢 P3 **google-meet** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:google-meet`
  - evidence:
    - [registerGatewayMethod @ index.js:4307](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/google-meet/dist/index.js#L4307)
    - [registerGatewayMethod @ index.js:4323](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/google-meet/dist/index.js#L4323)
    - [registerGatewayMethod @ index.js:4340](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/google-meet/dist/index.js#L4340)
    - [registerGatewayMethod @ index.js:4347](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/google-meet/dist/index.js#L4347)
    - [registerGatewayMethod @ index.js:4357](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/google-meet/dist/index.js#L4357)
    - [registerGatewayMethod @ index.js:4368](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/google-meet/dist/index.js#L4368)
    - [registerGatewayMethod @ index.js:4388](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/google-meet/dist/index.js#L4388)
    - [registerGatewayMethod @ index.js:4403](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/google-meet/dist/index.js#L4403)
    - [registerGatewayMethod @ index.js:4419](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/google-meet/dist/index.js#L4419)
    - [registerGatewayMethod @ index.js:4436](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/google-meet/dist/index.js#L4436)
    - [registerGatewayMethod @ index.js:4443](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/google-meet/dist/index.js#L4443)
    - [registerGatewayMethod @ index.js:4455](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/google-meet/dist/index.js#L4455)
    - [registerGatewayMethod @ index.js:4466](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/google-meet/dist/index.js#L4466)
    - [registerGatewayMethod @ index.js:4478](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/google-meet/dist/index.js#L4478)
    - [registerGatewayMethod @ index.js:4494](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/google-meet/dist/index.js#L4494)
    - [registerNodeHostCommand @ index.js:4649](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/google-meet/dist/index.js#L4649)

- 🟢 P3 **matrix** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:matrix`
  - evidence:
    - [registerGatewayMethod @ index.ts:18](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/matrix/index.ts#L18)
    - [registerGatewayMethod @ index.ts:23](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/matrix/index.ts#L23)
    - [registerGatewayMethod @ index.ts:28](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/matrix/index.ts#L28)

- 🟢 P3 **mattermost** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:mattermost`
  - evidence:
    - [registerHttpRoute @ slash-state.ts:396](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/mattermost/src/mattermost/slash-state.ts#L396)

- 🟢 P3 **memory-lancedb** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:memory-lancedb`
  - evidence:
    - [registerService @ index.js:345](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/memory-lancedb/dist/index.js#L345)
    - [registerService @ index.js:690](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/memory-lancedb/dist/index.js#L690)

- 🟢 P3 **memos-cloud** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:memos-cloud`
  - evidence:
    - [registerHook @ index.js:517](https://github.com/MemTensor/MemOS-Cloud-OpenClaw-Plugin/blob/e931499a2589af06ee543ce07df2bdda29ac8085/index.js#L517)

- 🟢 P3 **nostr** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:nostr`
  - evidence:
    - [registerHttpRoute @ index.js:74](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/nostr/dist/index.js#L74)

- 🟢 P3 **openclaw-qqbot** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:openclaw-qqbot`
  - evidence:
    - [registerCommand @ api.js:626](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/qqbot/dist/api.js#L626)

- 🟢 P3 **secureclaw** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:secureclaw`
  - evidence:
    - [registerService @ index.ts:295](https://github.com/adversa-ai/secureclaw/blob/bf17e2b3deb989e348b3a98080e33a7047e90ac3/secureclaw/src/index.ts#L295)
    - [registerService @ index.ts:301](https://github.com/adversa-ai/secureclaw/blob/bf17e2b3deb989e348b3a98080e33a7047e90ac3/secureclaw/src/index.ts#L301)
    - [registerService @ index.ts:307](https://github.com/adversa-ai/secureclaw/blob/bf17e2b3deb989e348b3a98080e33a7047e90ac3/secureclaw/src/index.ts#L307)

- 🟢 P3 **telnyx-sms** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:telnyx-sms`
  - evidence:
    - [registerHttpRoute @ index.ts:259](https://github.com/team-telnyx/telnyx-openclaw-sms-channel/blob/dee567716ca56d49464bf6354393f3656d92a2b3/index.ts#L259)

- 🟢 P3 **voice-call** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:voice-call`
  - evidence:
    - [registerConfigMigration @ setup-api.js:33](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/voice-call/dist/setup-api.js#L33)
    - [registerGatewayMethod @ index.js:1007](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/voice-call/dist/index.js#L1007)
    - [registerGatewayMethod @ index.js:1019](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/voice-call/dist/index.js#L1019)
    - [registerGatewayMethod @ index.js:1036](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/voice-call/dist/index.js#L1036)
    - [registerGatewayMethod @ index.js:1067](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/voice-call/dist/index.js#L1067)
    - [registerGatewayMethod @ index.js:1085](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/voice-call/dist/index.js#L1085)
    - [registerGatewayMethod @ index.js:1102](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/voice-call/dist/index.js#L1102)
    - [registerGatewayMethod @ index.js:1126](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/voice-call/dist/index.js#L1126)
    - [registerGatewayMethod @ index.js:970](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/voice-call/dist/index.js#L970)
    - [registerGatewayMethod @ index.js:994](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/voice-call/dist/index.js#L994)
    - [registerService @ index.js:1256](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/voice-call/dist/index.js#L1256)

- 🟢 P3 **bluebubbles** `channel-runtime`
  - contract: Channel setup, message envelope, sender metadata, and config schema remain stable.
  - id: `channel.runtime.envelope-config-metadata:bluebubbles`
  - evidence:
    - [createChatChannelPlugin @ channel-BSIXOcHe.js:930](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/bluebubbles/dist/channel-BSIXOcHe.js#L930)

- 🟢 P3 **discord** `channel-runtime`
  - contract: Channel setup, message envelope, sender metadata, and config schema remain stable.
  - id: `channel.runtime.envelope-config-metadata:discord`
  - evidence:
    - [createChatChannelPlugin @ channel-UXGa9PGc.js:406](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/discord/dist/channel-UXGa9PGc.js#L406)

- 🟢 P3 **feishu** `channel-runtime`
  - contract: Channel setup, message envelope, sender metadata, and config schema remain stable.
  - id: `channel.runtime.envelope-config-metadata:feishu`
  - evidence:
    - [createChatChannelPlugin @ channel-BegH3cJm.js:1087](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/feishu/dist/channel-BegH3cJm.js#L1087)

- 🟢 P3 **lightclawbot** `channel-runtime`
  - contract: Channel setup, message envelope, sender metadata, and config schema remain stable.
  - id: `channel.runtime.envelope-config-metadata:lightclawbot`
  - evidence:
    - createChatChannelPlugin @ plugins/lightclawbot/.crabpot-package/dist/src/channel.js:23
    - defineChannelPluginEntry @ plugins/lightclawbot/.crabpot-package/dist/index.js:25

- 🟢 P3 **mattermost** `channel-runtime`
  - contract: Channel setup, message envelope, sender metadata, and config schema remain stable.
  - id: `channel.runtime.envelope-config-metadata:mattermost`
  - evidence:
    - [createChatChannelPlugin @ channel.ts:263](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/mattermost/src/channel.ts#L263)

- 🟢 P3 **msteams** `channel-runtime`
  - contract: Channel setup, message envelope, sender metadata, and config schema remain stable.
  - id: `channel.runtime.envelope-config-metadata:msteams`
  - evidence:
    - [createChatChannelPlugin @ channel-BOwKBAvY.js:379](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/msteams/dist/channel-BOwKBAvY.js#L379)

- 🟢 P3 **nextcloud-talk** `channel-runtime`
  - contract: Channel setup, message envelope, sender metadata, and config schema remain stable.
  - id: `channel.runtime.envelope-config-metadata:nextcloud-talk`
  - evidence:
    - [createChatChannelPlugin @ channel-BVVRsVr5.js:1678](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/nextcloud-talk/dist/channel-BVVRsVr5.js#L1678)

- 🟢 P3 **nostr** `channel-runtime`
  - contract: Channel setup, message envelope, sender metadata, and config schema remain stable.
  - id: `channel.runtime.envelope-config-metadata:nostr`
  - evidence:
    - [createChatChannelPlugin @ channel-DfEqBtUh.js:1373](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/nostr/dist/channel-DfEqBtUh.js#L1373)

- 🟢 P3 **synology-chat** `channel-runtime`
  - contract: Channel setup, message envelope, sender metadata, and config schema remain stable.
  - id: `channel.runtime.envelope-config-metadata:synology-chat`
  - evidence:
    - [createChatChannelPlugin @ channel-BYl2GyR_.js:1065](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/synology-chat/dist/channel-BYl2GyR_.js#L1065)

- 🟢 P3 **telnyx-sms** `channel-runtime`
  - contract: Channel setup, message envelope, sender metadata, and config schema remain stable.
  - id: `channel.runtime.envelope-config-metadata:telnyx-sms`
  - evidence:
    - [defineChannelPluginEntry @ index.ts:207](https://github.com/team-telnyx/telnyx-openclaw-sms-channel/blob/dee567716ca56d49464bf6354393f3656d92a2b3/index.ts#L207)

- 🟢 P3 **tlon** `channel-runtime`
  - contract: Channel setup, message envelope, sender metadata, and config schema remain stable.
  - id: `channel.runtime.envelope-config-metadata:tlon`
  - evidence:
    - [createChatChannelPlugin @ channel-C1on9fPi.js:115](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/tlon/dist/channel-C1on9fPi.js#L115)

- 🟢 P3 **twitch** `channel-runtime`
  - contract: Channel setup, message envelope, sender metadata, and config schema remain stable.
  - id: `channel.runtime.envelope-config-metadata:twitch`
  - evidence:
    - [createChatChannelPlugin @ plugin-BQX9GiIn.js:762](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/twitch/dist/plugin-BQX9GiIn.js#L762)

- 🟢 P3 **whatsapp** `channel-runtime`
  - contract: Channel setup, message envelope, sender metadata, and config schema remain stable.
  - id: `channel.runtime.envelope-config-metadata:whatsapp`
  - evidence:
    - [createChatChannelPlugin @ channel-CTr3YjO8.js:309](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/whatsapp/dist/channel-CTr3YjO8.js#L309)

- 🟢 P3 **zalo** `channel-runtime`
  - contract: Channel setup, message envelope, sender metadata, and config schema remain stable.
  - id: `channel.runtime.envelope-config-metadata:zalo`
  - evidence:
    - [createChatChannelPlugin @ channel-VPbtV3Oq.js:238](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/zalo/dist/channel-VPbtV3Oq.js#L238)

- 🟢 P3 **zalouser** `channel-runtime`
  - contract: Channel setup, message envelope, sender metadata, and config schema remain stable.
  - id: `channel.runtime.envelope-config-metadata:zalouser`
  - evidence:
    - [createChatChannelPlugin @ channel-DLNmGWb8.js:353](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/zalouser/dist/channel-DLNmGWb8.js#L353)

- 🟢 P3 **memos-cloud** `hook-runner`
  - contract: Legacy before_agent_start remains wired until plugins migrate to before_model_resolve and before_prompt_build.
  - id: `hook.compat.before-agent-start-migration:memos-cloud`
  - evidence:
    - [before_agent_start @ index.js:531](https://github.com/MemTensor/MemOS-Cloud-OpenClaw-Plugin/blob/e931499a2589af06ee543ce07df2bdda29ac8085/index.js#L531)

- 🟢 P3 **discord** `manifest-loader`
  - contract: Legacy channel env metadata continues to map into channel setup/help surfaces.
  - id: `manifest.compat.channel-env-vars:discord`
  - evidence:
    - discord

- 🟢 P3 **feishu** `manifest-loader`
  - contract: Legacy channel env metadata continues to map into channel setup/help surfaces.
  - id: `manifest.compat.channel-env-vars:feishu`
  - evidence:
    - feishu

- 🟢 P3 **matrix** `manifest-loader`
  - contract: Legacy channel env metadata continues to map into channel setup/help surfaces.
  - id: `manifest.compat.channel-env-vars:matrix`
  - evidence:
    - matrix

- 🟢 P3 **mattermost** `manifest-loader`
  - contract: Legacy channel env metadata continues to map into channel setup/help surfaces.
  - id: `manifest.compat.channel-env-vars:mattermost`
  - evidence:
    - mattermost

- 🟢 P3 **msteams** `manifest-loader`
  - contract: Legacy channel env metadata continues to map into channel setup/help surfaces.
  - id: `manifest.compat.channel-env-vars:msteams`
  - evidence:
    - msteams

- 🟢 P3 **nextcloud-talk** `manifest-loader`
  - contract: Legacy channel env metadata continues to map into channel setup/help surfaces.
  - id: `manifest.compat.channel-env-vars:nextcloud-talk`
  - evidence:
    - nextcloud-talk

- 🟢 P3 **nostr** `manifest-loader`
  - contract: Legacy channel env metadata continues to map into channel setup/help surfaces.
  - id: `manifest.compat.channel-env-vars:nostr`
  - evidence:
    - nostr

- 🟢 P3 **openclaw-qqbot** `manifest-loader`
  - contract: Legacy channel env metadata continues to map into channel setup/help surfaces.
  - id: `manifest.compat.channel-env-vars:openclaw-qqbot`
  - evidence:
    - qqbot

- 🟢 P3 **synology-chat** `manifest-loader`
  - contract: Legacy channel env metadata continues to map into channel setup/help surfaces.
  - id: `manifest.compat.channel-env-vars:synology-chat`
  - evidence:
    - synology-chat

- 🟢 P3 **telnyx-sms** `manifest-loader`
  - contract: Legacy channel env metadata continues to map into channel setup/help surfaces.
  - id: `manifest.compat.channel-env-vars:telnyx-sms`
  - evidence:
    - telnyx-sms

- 🟢 P3 **twitch** `manifest-loader`
  - contract: Legacy channel env metadata continues to map into channel setup/help surfaces.
  - id: `manifest.compat.channel-env-vars:twitch`
  - evidence:
    - twitch

- 🟢 P3 **voice-call** `manifest-loader`
  - contract: Legacy channel env metadata continues to map into channel setup/help surfaces.
  - id: `manifest.compat.channel-env-vars:voice-call`
  - evidence:
    - voice-call

- 🟢 P3 **zalo** `manifest-loader`
  - contract: Legacy channel env metadata continues to map into channel setup/help surfaces.
  - id: `manifest.compat.channel-env-vars:zalo`
  - evidence:
    - zalo

- 🟢 P3 **zalouser** `manifest-loader`
  - contract: Legacy channel env metadata continues to map into channel setup/help surfaces.
  - id: `manifest.compat.channel-env-vars:zalouser`
  - evidence:
    - zalouser

- 🟢 P3 **brave-plugin** `manifest-loader`
  - contract: Legacy provider auth env metadata continues to map into config/help surfaces.
  - id: `manifest.compat.provider-auth-env-vars:brave-plugin`
  - evidence:
    - brave

- 🟢 P3 **inworld-tts** `manifest-loader`
  - contract: Legacy provider auth env metadata continues to map into config/help surfaces.
  - id: `manifest.compat.provider-auth-env-vars:inworld-tts`
  - evidence:
    - inworld

- 🟢 P3 **memos-cloud** `manifest-loader`
  - contract: Manifest top-level fields are represented in target OpenClaw PluginManifest.
  - id: `manifest.schema.top-level-fields:memos-cloud`
  - evidence:
    - [main @ openclaw.plugin.json](https://github.com/MemTensor/MemOS-Cloud-OpenClaw-Plugin/blob/e931499a2589af06ee543ce07df2bdda29ac8085/openclaw.plugin.json)

- 🟢 P3 **clawrouter** `package-loader`
  - contract: Package metadata declares the OpenClaw plugin API range used by the plugin.
  - id: `package.compat.plugin-api-range:clawrouter`
  - evidence:
    - [package.json](https://github.com/BlockRunAI/ClawRouter/blob/ed699ce6ab9654fe1b3b8431ed6174c5857df3e5/package.json)

- 🟢 P3 **lightclawbot** `package-loader`
  - contract: Package metadata declares the OpenClaw plugin API range used by the plugin.
  - id: `package.compat.plugin-api-range:lightclawbot`
  - evidence:
    - plugins/lightclawbot/.crabpot-package/package.json

- 🟢 P3 **matrix** `package-loader`
  - contract: Package metadata declares the OpenClaw plugin API range used by the plugin.
  - id: `package.compat.plugin-api-range:matrix`
  - evidence:
    - [package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/matrix/package.json)

- 🟢 P3 **mattermost** `package-loader`
  - contract: Package metadata declares the OpenClaw plugin API range used by the plugin.
  - id: `package.compat.plugin-api-range:mattermost`
  - evidence:
    - [package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/mattermost/package.json)

- 🟢 P3 **memos-cloud** `package-loader`
  - contract: Package metadata declares the OpenClaw plugin API range used by the plugin.
  - id: `package.compat.plugin-api-range:memos-cloud`
  - evidence:
    - [package.json](https://github.com/MemTensor/MemOS-Cloud-OpenClaw-Plugin/blob/e931499a2589af06ee543ce07df2bdda29ac8085/package.json)

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

- 🟢 P3 **secureclaw** `package-loader`
  - contract: Inspector can build or resolve source aliases before cold importing package entrypoints.
  - id: `package.entrypoint.build-before-cold-import:secureclaw`
  - evidence:
    - [extension:./dist/index.js @ index.js](https://github.com/adversa-ai/secureclaw/blob/bf17e2b3deb989e348b3a98080e33a7047e90ac3/secureclaw/dist/index.js)

- 🟢 P3 **telnyx-sms** `package-loader`
  - contract: Inspector can build or resolve source aliases before cold importing package entrypoints.
  - id: `package.entrypoint.build-before-cold-import:telnyx-sms`
  - evidence:
    - [extension:./dist/index.js @ index.js](https://github.com/team-telnyx/telnyx-openclaw-sms-channel/blob/dee567716ca56d49464bf6354393f3656d92a2b3/dist/index.js)
    - [setupEntry:./dist/setup-entry.js @ setup-entry.js](https://github.com/team-telnyx/telnyx-openclaw-sms-channel/blob/dee567716ca56d49464bf6354393f3656d92a2b3/dist/setup-entry.js)

- 🟢 P3 **apify** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:apify`
  - evidence:
    - [@sinclair/typebox @ package.json](https://github.com/apify/apify-openclaw-plugin/blob/fa2941d10efe75f8bd68924ec2676f486ad988e8/package.json)
    - [apify-client @ package.json](https://github.com/apify/apify-openclaw-plugin/blob/fa2941d10efe75f8bd68924ec2676f486ad988e8/package.json)

- 🟢 P3 **clawrouter** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:clawrouter`
  - evidence:
    - [@scure/bip32 @ package.json](https://github.com/BlockRunAI/ClawRouter/blob/ed699ce6ab9654fe1b3b8431ed6174c5857df3e5/package.json)
    - [@scure/bip39 @ package.json](https://github.com/BlockRunAI/ClawRouter/blob/ed699ce6ab9654fe1b3b8431ed6174c5857df3e5/package.json)
    - [@solana/kit @ package.json](https://github.com/BlockRunAI/ClawRouter/blob/ed699ce6ab9654fe1b3b8431ed6174c5857df3e5/package.json)
    - [@x402/core @ package.json](https://github.com/BlockRunAI/ClawRouter/blob/ed699ce6ab9654fe1b3b8431ed6174c5857df3e5/package.json)
    - [@x402/evm @ package.json](https://github.com/BlockRunAI/ClawRouter/blob/ed699ce6ab9654fe1b3b8431ed6174c5857df3e5/package.json)
    - [@x402/fetch @ package.json](https://github.com/BlockRunAI/ClawRouter/blob/ed699ce6ab9654fe1b3b8431ed6174c5857df3e5/package.json)
    - [@x402/svm @ package.json](https://github.com/BlockRunAI/ClawRouter/blob/ed699ce6ab9654fe1b3b8431ed6174c5857df3e5/package.json)
    - [viem @ package.json](https://github.com/BlockRunAI/ClawRouter/blob/ed699ce6ab9654fe1b3b8431ed6174c5857df3e5/package.json)

- 🟢 P3 **codex** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:codex`
  - evidence:
    - [@mariozechner/pi-coding-agent @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/codex/package.json)
    - [@openai/codex @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/codex/package.json)
    - [ajv @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/codex/package.json)
    - [ws @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/codex/package.json)
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/codex/package.json)

- 🟢 P3 **codex-app-server** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:codex-app-server`
  - evidence:
    - [ws @ package.json](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/package.json)

- 🟢 P3 **diagnostics-otel** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:diagnostics-otel`
  - evidence:
    - [@opentelemetry/api @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/diagnostics-otel/package.json)
    - [@opentelemetry/api-logs @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/diagnostics-otel/package.json)
    - [@opentelemetry/exporter-logs-otlp-proto @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/diagnostics-otel/package.json)
    - [@opentelemetry/exporter-metrics-otlp-proto @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/diagnostics-otel/package.json)
    - [@opentelemetry/exporter-trace-otlp-proto @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/diagnostics-otel/package.json)
    - [@opentelemetry/resources @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/diagnostics-otel/package.json)
    - [@opentelemetry/sdk-logs @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/diagnostics-otel/package.json)
    - [@opentelemetry/sdk-metrics @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/diagnostics-otel/package.json)
    - [@opentelemetry/sdk-node @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/diagnostics-otel/package.json)
    - [@opentelemetry/sdk-trace-base @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/diagnostics-otel/package.json)
    - [@opentelemetry/semantic-conventions @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/diagnostics-otel/package.json)

- 🟢 P3 **diffs** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:diffs`
  - evidence:
    - [@pierre/diffs @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/diffs/package.json)
    - [@pierre/theme @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/diffs/package.json)
    - [playwright-core @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/diffs/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/diffs/package.json)

- 🟢 P3 **discord** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:discord`
  - evidence:
    - [@discordjs/voice @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/discord/package.json)
    - [discord-api-types @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/discord/package.json)
    - [https-proxy-agent @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/discord/package.json)
    - [opusscript @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/discord/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/discord/package.json)
    - [undici @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/discord/package.json)
    - [ws @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/discord/package.json)

- 🟢 P3 **feishu** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:feishu`
  - evidence:
    - [@larksuiteoapi/node-sdk @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/feishu/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/feishu/package.json)

- 🟢 P3 **google-meet** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:google-meet`
  - evidence:
    - [commander @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/google-meet/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/google-meet/package.json)

- 🟢 P3 **lightclawbot** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:lightclawbot`
  - evidence:
    - ws @ plugins/lightclawbot/.crabpot-package/package.json

- 🟢 P3 **lobster** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:lobster`
  - evidence:
    - [@clawdbot/lobster @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/lobster/package.json)
    - [ajv @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/lobster/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/lobster/package.json)

- 🟢 P3 **matrix** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:matrix`
  - evidence:
    - [@matrix-org/matrix-sdk-crypto-nodejs @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/matrix/package.json)
    - [@matrix-org/matrix-sdk-crypto-wasm @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/matrix/package.json)
    - [fake-indexeddb @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/matrix/package.json)
    - [markdown-it @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/matrix/package.json)
    - [matrix-js-sdk @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/matrix/package.json)
    - [music-metadata @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/matrix/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/matrix/package.json)

- 🟢 P3 **mattermost** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:mattermost`
  - evidence:
    - [ws @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/mattermost/package.json)

- 🟢 P3 **memory-lancedb** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:memory-lancedb`
  - evidence:
    - [@lancedb/lancedb @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/memory-lancedb/package.json)
    - [apache-arrow @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/memory-lancedb/package.json)
    - [openai @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/memory-lancedb/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/memory-lancedb/package.json)

- 🟢 P3 **msteams** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:msteams`
  - evidence:
    - [@azure/identity @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/msteams/package.json)
    - [@microsoft/teams.api @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/msteams/package.json)
    - [@microsoft/teams.apps @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/msteams/package.json)
    - [express @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/msteams/package.json)
    - [jsonwebtoken @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/msteams/package.json)
    - [jwks-rsa @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/msteams/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/msteams/package.json)

- 🟢 P3 **nextcloud-talk** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:nextcloud-talk`
  - evidence:
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/nextcloud-talk/package.json)

- 🟢 P3 **nostr** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:nostr`
  - evidence:
    - [nostr-tools @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/nostr/package.json)
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/nostr/package.json)

- 🟢 P3 **openclaw-qqbot** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:openclaw-qqbot`
  - evidence:
    - [@tencent-connect/qqbot-connector @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/qqbot/package.json)
    - [mpg123-decoder @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/qqbot/package.json)
    - [silk-wasm @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/qqbot/package.json)
    - [ws @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/qqbot/package.json)
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/qqbot/package.json)

- 🟢 P3 **secureclaw** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:secureclaw`
  - evidence:
    - [chokidar @ package.json](https://github.com/adversa-ai/secureclaw/blob/bf17e2b3deb989e348b3a98080e33a7047e90ac3/secureclaw/package.json)
    - [node-forge @ package.json](https://github.com/adversa-ai/secureclaw/blob/bf17e2b3deb989e348b3a98080e33a7047e90ac3/secureclaw/package.json)

- 🟢 P3 **synology-chat** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:synology-chat`
  - evidence:
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/synology-chat/package.json)

- 🟢 P3 **tlon** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:tlon`
  - evidence:
    - [@aws-sdk/client-s3 @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/tlon/package.json)
    - [@aws-sdk/s3-request-presigner @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/tlon/package.json)
    - [@tloncorp/tlon-skill @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/tlon/package.json)
    - [@urbit/aura @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/tlon/package.json)

- 🟢 P3 **twitch** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:twitch`
  - evidence:
    - [@twurple/api @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/twitch/package.json)
    - [@twurple/auth @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/twitch/package.json)
    - [@twurple/chat @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/twitch/package.json)

- 🟢 P3 **voice-call** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:voice-call`
  - evidence:
    - [commander @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/voice-call/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/voice-call/package.json)
    - [ws @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/voice-call/package.json)

- 🟢 P3 **whatsapp** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:whatsapp`
  - evidence:
    - [@whiskeysockets/baileys @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/whatsapp/package.json)
    - [https-proxy-agent @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/whatsapp/package.json)
    - [jimp @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/whatsapp/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/whatsapp/package.json)
    - [undici @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/whatsapp/package.json)

- 🟢 P3 **zalo** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:zalo`
  - evidence:
    - [undici @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/zalo/package.json)

- 🟢 P3 **zalouser** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:zalouser`
  - evidence:
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/zalouser/package.json)
    - [zca-js @ package.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/zalouser/package.json)

- 🟢 P3 **apify** `package-loader`
  - contract: Inspector can compile or load TypeScript source entrypoints before registration capture.
  - id: `package.entrypoint.typescript-loader:apify`
  - evidence:
    - [extension @ index.ts](https://github.com/apify/apify-openclaw-plugin/blob/fa2941d10efe75f8bd68924ec2676f486ad988e8/src/index.ts)

- 🟢 P3 **clawmetry** `package-loader`
  - contract: Inspector can compile or load TypeScript source entrypoints before registration capture.
  - id: `package.entrypoint.typescript-loader:clawmetry`
  - evidence:
    - [extension @ index.ts](https://github.com/vivekchand/clawmetry/blob/c969c8cb2e7fe41451349792caea03e87e83a174/clawhub-plugin/index.ts)

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

- 🟢 P3 **matrix** `package-loader`
  - contract: Inspector can compile or load TypeScript source entrypoints before registration capture.
  - id: `package.entrypoint.typescript-loader:matrix`
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/matrix/index.ts)
    - [setupEntry @ setup-entry.ts](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/matrix/setup-entry.ts)

- 🟢 P3 **mattermost** `package-loader`
  - contract: Inspector can compile or load TypeScript source entrypoints before registration capture.
  - id: `package.entrypoint.typescript-loader:mattermost`
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/mattermost/index.ts)
    - [setupEntry @ setup-entry.ts](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/mattermost/setup-entry.ts)

- 🟢 P3 **memu-engine** `package-loader`
  - contract: Inspector can compile or load TypeScript source entrypoints before registration capture.
  - id: `package.entrypoint.typescript-loader:memu-engine`
  - evidence:
    - [extension @ index.ts](https://github.com/duxiaoxiong/memu-engine-for-OpenClaw/blob/a5a22c5faf21e30d17a1b47635829e7dd0728ae5/index.ts)

- 🟢 P3 **web-search-plus** `package-loader`
  - contract: Inspector can compile or load TypeScript source entrypoints before registration capture.
  - id: `package.entrypoint.typescript-loader:web-search-plus`
  - evidence:
    - [extension @ index.ts](https://github.com/robbyczgw-cla/web-search-plus-plugin/blob/dd3cab6e11f16eaa3fcee0ce67d3a809b155341a/index.ts)

- 🟢 P3 **bluebubbles** `package-loader`
  - contract: Release publishing metadata declares canonical ClawHub and npm install specs.
  - id: `package.metadata.install-release:bluebubbles`
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec

- 🟢 P3 **brave-plugin** `package-loader`
  - contract: Release publishing metadata declares canonical ClawHub and npm install specs.
  - id: `package.metadata.install-release:brave-plugin`
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec

- 🟢 P3 **clawmetry** `package-loader`
  - contract: Release publishing metadata declares canonical ClawHub and npm install specs.
  - id: `package.metadata.install-release:clawmetry`
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec
    - openclaw.release.publishToNpm requires openclaw.install.npmSpec

- 🟢 P3 **codex** `package-loader`
  - contract: Release publishing metadata declares canonical ClawHub and npm install specs.
  - id: `package.metadata.install-release:codex`
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec

- 🟢 P3 **diffs** `package-loader`
  - contract: Release publishing metadata declares canonical ClawHub and npm install specs.
  - id: `package.metadata.install-release:diffs`
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec

- 🟢 P3 **discord** `package-loader`
  - contract: Release publishing metadata declares canonical ClawHub and npm install specs.
  - id: `package.metadata.install-release:discord`
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec

- 🟢 P3 **feishu** `package-loader`
  - contract: Release publishing metadata declares canonical ClawHub and npm install specs.
  - id: `package.metadata.install-release:feishu`
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec

- 🟢 P3 **google-meet** `package-loader`
  - contract: Release publishing metadata declares canonical ClawHub and npm install specs.
  - id: `package.metadata.install-release:google-meet`
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec

- 🟢 P3 **lobster** `package-loader`
  - contract: Release publishing metadata declares canonical ClawHub and npm install specs.
  - id: `package.metadata.install-release:lobster`
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec

- 🟢 P3 **memory-lancedb** `package-loader`
  - contract: Release publishing metadata declares canonical ClawHub and npm install specs.
  - id: `package.metadata.install-release:memory-lancedb`
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec

- 🟢 P3 **msteams** `package-loader`
  - contract: Release publishing metadata declares canonical ClawHub and npm install specs.
  - id: `package.metadata.install-release:msteams`
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec

- 🟢 P3 **nextcloud-talk** `package-loader`
  - contract: Release publishing metadata declares canonical ClawHub and npm install specs.
  - id: `package.metadata.install-release:nextcloud-talk`
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec

- 🟢 P3 **nostr** `package-loader`
  - contract: Release publishing metadata declares canonical ClawHub and npm install specs.
  - id: `package.metadata.install-release:nostr`
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec

- 🟢 P3 **openclaw-qqbot** `package-loader`
  - contract: Release publishing metadata declares canonical ClawHub and npm install specs.
  - id: `package.metadata.install-release:openclaw-qqbot`
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec

- 🟢 P3 **synology-chat** `package-loader`
  - contract: Release publishing metadata declares canonical ClawHub and npm install specs.
  - id: `package.metadata.install-release:synology-chat`
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec

- 🟢 P3 **tlon** `package-loader`
  - contract: Release publishing metadata declares canonical ClawHub and npm install specs.
  - id: `package.metadata.install-release:tlon`
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec

- 🟢 P3 **twitch** `package-loader`
  - contract: Release publishing metadata declares canonical ClawHub and npm install specs.
  - id: `package.metadata.install-release:twitch`
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec

- 🟢 P3 **voice-call** `package-loader`
  - contract: Release publishing metadata declares canonical ClawHub and npm install specs.
  - id: `package.metadata.install-release:voice-call`
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec

- 🟢 P3 **whatsapp** `package-loader`
  - contract: Release publishing metadata declares canonical ClawHub and npm install specs.
  - id: `package.metadata.install-release:whatsapp`
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec

- 🟢 P3 **zalo** `package-loader`
  - contract: Release publishing metadata declares canonical ClawHub and npm install specs.
  - id: `package.metadata.install-release:zalo`
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec

- 🟢 P3 **zalouser** `package-loader`
  - contract: Release publishing metadata declares canonical ClawHub and npm install specs.
  - id: `package.metadata.install-release:zalouser`
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec

- 🟢 P3 **bluebubbles** `package-loader`
  - contract: Install minimum host version matches the OpenClaw package surface targeted by the plugin.
  - id: `package.metadata.min-host-version:bluebubbles`
  - evidence:
    - minHostVersion:>=2026.4.10
    - buildOpenClawVersion:2026.5.7

- 🟢 P3 **brave-plugin** `package-loader`
  - contract: Install minimum host version matches the OpenClaw package surface targeted by the plugin.
  - id: `package.metadata.min-host-version:brave-plugin`
  - evidence:
    - minHostVersion:>=2026.4.10
    - buildOpenClawVersion:2026.5.7

- 🟢 P3 **codex** `package-loader`
  - contract: Install minimum host version matches the OpenClaw package surface targeted by the plugin.
  - id: `package.metadata.min-host-version:codex`
  - evidence:
    - minHostVersion:>=2026.5.1-beta.1
    - buildOpenClawVersion:2026.5.7

- 🟢 P3 **diagnostics-otel** `package-loader`
  - contract: Install minimum host version matches the OpenClaw package surface targeted by the plugin.
  - id: `package.metadata.min-host-version:diagnostics-otel`
  - evidence:
    - minHostVersion:>=2026.4.25
    - buildOpenClawVersion:2026.5.7

- 🟢 P3 **diagnostics-prometheus** `package-loader`
  - contract: Install minimum host version matches the OpenClaw package surface targeted by the plugin.
  - id: `package.metadata.min-host-version:diagnostics-prometheus`
  - evidence:
    - minHostVersion:>=2026.4.25
    - buildOpenClawVersion:2026.5.7

- 🟢 P3 **diffs** `package-loader`
  - contract: Install minimum host version matches the OpenClaw package surface targeted by the plugin.
  - id: `package.metadata.min-host-version:diffs`
  - evidence:
    - minHostVersion:>=2026.4.30
    - buildOpenClawVersion:2026.5.7

- 🟢 P3 **discord** `package-loader`
  - contract: Install minimum host version matches the OpenClaw package surface targeted by the plugin.
  - id: `package.metadata.min-host-version:discord`
  - evidence:
    - minHostVersion:>=2026.4.10
    - buildOpenClawVersion:2026.5.7

- 🟢 P3 **feishu** `package-loader`
  - contract: Install minimum host version matches the OpenClaw package surface targeted by the plugin.
  - id: `package.metadata.min-host-version:feishu`
  - evidence:
    - minHostVersion:>=2026.4.25
    - buildOpenClawVersion:2026.5.7

- 🟢 P3 **google-meet** `package-loader`
  - contract: Install minimum host version matches the OpenClaw package surface targeted by the plugin.
  - id: `package.metadata.min-host-version:google-meet`
  - evidence:
    - minHostVersion:>=2026.4.20
    - buildOpenClawVersion:2026.5.7

- 🟢 P3 **lobster** `package-loader`
  - contract: Install minimum host version matches the OpenClaw package surface targeted by the plugin.
  - id: `package.metadata.min-host-version:lobster`
  - evidence:
    - minHostVersion:>=2026.4.25
    - buildOpenClawVersion:2026.5.7

- 🟢 P3 **memory-lancedb** `package-loader`
  - contract: Install minimum host version matches the OpenClaw package surface targeted by the plugin.
  - id: `package.metadata.min-host-version:memory-lancedb`
  - evidence:
    - minHostVersion:>=2026.4.10
    - buildOpenClawVersion:2026.5.7

- 🟢 P3 **msteams** `package-loader`
  - contract: Install minimum host version matches the OpenClaw package surface targeted by the plugin.
  - id: `package.metadata.min-host-version:msteams`
  - evidence:
    - minHostVersion:>=2026.4.10
    - buildOpenClawVersion:2026.5.7

- 🟢 P3 **nextcloud-talk** `package-loader`
  - contract: Install minimum host version matches the OpenClaw package surface targeted by the plugin.
  - id: `package.metadata.min-host-version:nextcloud-talk`
  - evidence:
    - minHostVersion:>=2026.4.10
    - buildOpenClawVersion:2026.5.7

- 🟢 P3 **nostr** `package-loader`
  - contract: Install minimum host version matches the OpenClaw package surface targeted by the plugin.
  - id: `package.metadata.min-host-version:nostr`
  - evidence:
    - minHostVersion:>=2026.4.10
    - buildOpenClawVersion:2026.5.7

- 🟢 P3 **openclaw-qqbot** `package-loader`
  - contract: Install minimum host version matches the OpenClaw package surface targeted by the plugin.
  - id: `package.metadata.min-host-version:openclaw-qqbot`
  - evidence:
    - minHostVersion:>=2026.4.10
    - buildOpenClawVersion:2026.5.7

- 🟢 P3 **synology-chat** `package-loader`
  - contract: Install minimum host version matches the OpenClaw package surface targeted by the plugin.
  - id: `package.metadata.min-host-version:synology-chat`
  - evidence:
    - minHostVersion:>=2026.4.10
    - buildOpenClawVersion:2026.5.7

- 🟢 P3 **tlon** `package-loader`
  - contract: Install minimum host version matches the OpenClaw package surface targeted by the plugin.
  - id: `package.metadata.min-host-version:tlon`
  - evidence:
    - minHostVersion:>=2026.4.10
    - buildOpenClawVersion:2026.5.7

- 🟢 P3 **twitch** `package-loader`
  - contract: Install minimum host version matches the OpenClaw package surface targeted by the plugin.
  - id: `package.metadata.min-host-version:twitch`
  - evidence:
    - minHostVersion:>=2026.4.10
    - buildOpenClawVersion:2026.5.7

- 🟢 P3 **voice-call** `package-loader`
  - contract: Install minimum host version matches the OpenClaw package surface targeted by the plugin.
  - id: `package.metadata.min-host-version:voice-call`
  - evidence:
    - minHostVersion:>=2026.4.10
    - buildOpenClawVersion:2026.5.7

- 🟢 P3 **whatsapp** `package-loader`
  - contract: Install minimum host version matches the OpenClaw package surface targeted by the plugin.
  - id: `package.metadata.min-host-version:whatsapp`
  - evidence:
    - minHostVersion:>=2026.4.25
    - buildOpenClawVersion:2026.5.7

- 🟢 P3 **zalo** `package-loader`
  - contract: Install minimum host version matches the OpenClaw package surface targeted by the plugin.
  - id: `package.metadata.min-host-version:zalo`
  - evidence:
    - minHostVersion:>=2026.4.10
    - buildOpenClawVersion:2026.5.7

- 🟢 P3 **zalouser** `package-loader`
  - contract: Install minimum host version matches the OpenClaw package surface targeted by the plugin.
  - id: `package.metadata.min-host-version:zalouser`
  - evidence:
    - minHostVersion:>=2026.4.10
    - buildOpenClawVersion:2026.5.7

- 🟢 P3 **clawmetry** `sdk-alias`
  - contract: Root plugin SDK barrel remains importable or has a machine-readable migration path.
  - id: `sdk.import.root-barrel-cold-import:clawmetry`
  - evidence:
    - [openclaw/plugin-sdk @ index.ts:1](https://github.com/vivekchand/clawmetry/blob/c969c8cb2e7fe41451349792caea03e87e83a174/clawhub-plugin/index.ts#L1)
    - [openclaw/plugin-sdk @ service.ts:1](https://github.com/vivekchand/clawmetry/blob/c969c8cb2e7fe41451349792caea03e87e83a174/clawhub-plugin/src/service.ts#L1)

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
    - [registerTool @ index.ts:13](https://github.com/apify/apify-openclaw-plugin/blob/fa2941d10efe75f8bd68924ec2676f486ad988e8/src/index.ts#L13)

- 🟢 P3 **clawrouter** `tool-runtime`
  - contract: Registered runtime tools expose stable names, input schemas, and result metadata.
  - id: `tool.registration.schema-capture:clawrouter`
  - evidence:
    - [registerTool @ index.ts:1707](https://github.com/BlockRunAI/ClawRouter/blob/ed699ce6ab9654fe1b3b8431ed6174c5857df3e5/src/index.ts#L1707)

- 🟢 P3 **memu-engine** `tool-runtime`
  - contract: Registered runtime tools expose stable names, input schemas, and result metadata.
  - id: `tool.registration.schema-capture:memu-engine`
  - evidence:
    - [registerTool @ index.ts:1252](https://github.com/duxiaoxiong/memu-engine-for-OpenClaw/blob/a5a22c5faf21e30d17a1b47635829e7dd0728ae5/index.ts#L1252)

- 🟢 P3 **web-search-plus** `tool-runtime`
  - contract: Registered runtime tools expose stable names, input schemas, and result metadata.
  - id: `tool.registration.schema-capture:web-search-plus`
  - evidence:
    - [registerTool @ index.ts:1034](https://github.com/robbyczgw-cla/web-search-plus-plugin/blob/dd3cab6e11f16eaa3fcee0ce67d3a809b155341a/index.ts#L1034)
    - [registerTool @ index.ts:893](https://github.com/robbyczgw-cla/web-search-plus-plugin/blob/dd3cab6e11f16eaa3fcee0ce67d3a809b155341a/index.ts#L893)
