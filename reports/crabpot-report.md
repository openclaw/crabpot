# Crabpot Compatibility Report

Generated: deterministic
Status: PASS

## Summary

| Metric                    | Value |
| ------------------------- | ----- |
| Fixtures                  | 21    |
| High-priority fixtures    | 13    |
| Hard breakages            | 0     |
| Warnings                  | 42    |
| Compatibility suggestions | 69    |
| Issue findings            | 111   |
| P0 issues                 | 2     |
| P1 issues                 | 21    |
| Live issues               | 2     |
| Live P0 issues            | 2     |
| Compat gaps               | 1     |
| Deprecation warnings      | 19    |
| Inspector gaps            | 73    |
| Upstream metadata         | 16    |
| Contract probes           | 109   |
| Decision rows             | 112   |

## Triage Overview

| Class               | Count | P0 | Meaning                                                                                                         |
| ------------------- | ----- | -- | --------------------------------------------------------------------------------------------------------------- |
| live-issue          | 2     | 2  | Potential runtime breakage in the target OpenClaw/plugin pair. P0 only when it is not a deprecated compat seam. |
| compat-gap          | 1     | -  | Compatibility behavior is needed but missing from the target OpenClaw compat registry.                          |
| deprecation-warning | 19    | -  | Plugin uses a supported but deprecated compatibility seam; keep it wired while migration exists.                |
| inspector-gap       | 73    | -  | Crabpot needs stronger capture/probe evidence before making contract judgments.                                 |
| upstream-metadata   | 16    | -  | Plugin package or manifest metadata should improve upstream; not a target OpenClaw live break by itself.        |
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

## Hard Breakages

_none_

## Target OpenClaw Compat Records

| Metric                   | Value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Configured path          | ../openclaw                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Status                   | ok                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Compat registry          | ../openclaw/src/plugins/compat/registry.ts                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Compat records           | 18                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Compat status counts     | active:10, deprecated:8                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Record ids               | activation-capability-hint, activation-channel-hint, activation-command-hint, activation-provider-hint, activation-route-hint, agent-harness-id-alias, agent-harness-sdk-alias, bundled-plugin-allowlist, bundled-plugin-enablement, bundled-plugin-vitest-defaults, channel-env-vars, disable-persisted-plugin-registry-env, embedded-harness-config-alias, generated-bundled-channel-config-fallback, hook-only-plugin-shape, legacy-before-agent-start, legacy-root-sdk-import, provider-auth-env-vars |
| Hook registry            | ../openclaw/src/plugins/hook-types.ts                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Hook names               | 32                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| API builder              | ../openclaw/src/plugins/api-builder.ts                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| API registrars           | 40                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Captured registration    | ../openclaw/src/plugins/captured-registration.ts                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Captured registrars      | 18                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Package metadata         | ../openclaw/package.json                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Plugin SDK exports       | 307                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Manifest types           | ../openclaw/src/plugins/manifest.ts                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Manifest fields          | 32                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Manifest contract fields | 16                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

## Warnings

| Fixture           | Code                              | Level   | Message                                                                                        | Evidence                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Compat record             |
| ----------------- | --------------------------------- | ------- | ---------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| agentchat         | manifest-unknown-fields           | warning | manifest uses top-level fields that are not present in the target OpenClaw PluginManifest type | displayName @ plugins/agentchat/integrations/openclaw-channel/openclaw.plugin.json, homepage @ plugins/agentchat/integrations/openclaw-channel/openclaw.plugin.json, icon @ plugins/agentchat/integrations/openclaw-channel/openclaw.plugin.json                                                                                                                                                                                                                                                                                                                                                                                                                                                                | -                         |
| agentchat         | channel-env-vars                  | warning | manifest uses channelEnvVars legacy compatibility metadata                                     | agentchat                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | channel-env-vars          |
| wecom             | package-plugin-api-compat-missing | warning | package openclaw metadata does not declare compat.pluginApi                                    | plugins/wecom/package.json                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | -                         |
| qqbot             | manifest-unknown-fields           | warning | manifest uses top-level fields that are not present in the target OpenClaw PluginManifest type | capabilities @ plugins/qqbot/openclaw.plugin.json, extensions @ plugins/qqbot/openclaw.plugin.json                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | -                         |
| qqbot             | package-plugin-api-compat-missing | warning | package openclaw metadata does not declare compat.pluginApi                                    | plugins/qqbot/package.json                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | -                         |
| qqbot             | legacy-root-sdk-import            | warning | fixture imports the root plugin SDK barrel                                                     | openclaw/plugin-sdk @ plugins/qqbot/index.ts:1, openclaw/plugin-sdk @ plugins/qqbot/index.ts:2, openclaw/plugin-sdk @ plugins/qqbot/src/approval-handler.ts:12, openclaw/plugin-sdk @ plugins/qqbot/src/config.ts:2, openclaw/plugin-sdk @ plugins/qqbot/src/onboarding.ts:13, openclaw/plugin-sdk @ plugins/qqbot/src/proactive.ts:67, openclaw/plugin-sdk @ plugins/qqbot/src/runtime.ts:1, openclaw/plugin-sdk @ plugins/qqbot/src/tools/channel.ts:1, openclaw/plugin-sdk @ plugins/qqbot/src/tools/remind.ts:1                                                                                                                                                                                             | legacy-root-sdk-import    |
| a2a-gateway       | manifest-unknown-fields           | warning | manifest uses top-level fields that are not present in the target OpenClaw PluginManifest type | defaultConfig @ plugins/a2a-gateway/openclaw.plugin.json                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | -                         |
| a2a-gateway       | package-manifest-version-drift    | warning | package.json and openclaw.plugin.json publish different versions                               | package:1.4.0, manifest:1.3.0                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | -                         |
| a2a-gateway       | package-plugin-api-compat-missing | warning | package openclaw metadata does not declare compat.pluginApi                                    | plugins/a2a-gateway/package.json                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | -                         |
| a2a-gateway       | legacy-root-sdk-import            | warning | fixture imports the root plugin SDK barrel                                                     | openclaw/plugin-sdk @ plugins/a2a-gateway/src/types.ts:14                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | legacy-root-sdk-import    |
| hasdata           | provider-auth-env-vars            | warning | manifest uses providerAuthEnvVars legacy compatibility metadata                                | hasdata                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | provider-auth-env-vars    |
| mcp-adapter       | package-plugin-api-compat-missing | warning | package openclaw metadata does not declare compat.pluginApi                                    | plugins/mcp-adapter/package.json                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | -                         |
| llm-trace-phoenix | conversation-access-hook          | warning | fixture observes raw model or conversation content and needs privacy-boundary contract probes  | llm_input @ plugins/llm-trace-phoenix/index.ts:154, llm_output @ plugins/llm-trace-phoenix/index.ts:168                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | -                         |
| llm-trace-phoenix | legacy-root-sdk-import            | warning | fixture imports the root plugin SDK barrel                                                     | openclaw/plugin-sdk @ plugins/llm-trace-phoenix/index.ts:12                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | legacy-root-sdk-import    |
| opik-openclaw     | conversation-access-hook          | warning | fixture observes raw model or conversation content and needs privacy-boundary contract probes  | agent_end @ plugins/opik-openclaw/src/service.ts:560, llm_input @ plugins/opik-openclaw/src/service/hooks/llm.ts:39, llm_output @ plugins/opik-openclaw/src/service/hooks/llm.ts:150                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | -                         |
| opik-openclaw     | legacy-root-sdk-import            | warning | fixture imports the root plugin SDK barrel                                                     | openclaw/plugin-sdk @ plugins/opik-openclaw/index.ts:1, openclaw/plugin-sdk @ plugins/opik-openclaw/index.ts:2, openclaw/plugin-sdk @ plugins/opik-openclaw/src/cli.ts:1, openclaw/plugin-sdk @ plugins/opik-openclaw/src/configure.ts:2, openclaw/plugin-sdk @ plugins/opik-openclaw/src/service.ts:5, openclaw/plugin-sdk @ plugins/opik-openclaw/src/service.ts:6, openclaw/plugin-sdk @ plugins/opik-openclaw/src/service/hooks/llm.ts:1, openclaw/plugin-sdk @ plugins/opik-openclaw/src/service/hooks/subagent.ts:1, openclaw/plugin-sdk @ plugins/opik-openclaw/src/service/hooks/tool.ts:1                                                                                                              | legacy-root-sdk-import    |
| lossless-claw     | package-plugin-api-compat-missing | warning | package openclaw metadata does not declare compat.pluginApi                                    | plugins/lossless-claw/package.json                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | -                         |
| lossless-claw     | legacy-root-sdk-import            | warning | fixture imports the root plugin SDK barrel                                                     | openclaw/plugin-sdk @ plugins/lossless-claw/src/assembler.ts:2, openclaw/plugin-sdk @ plugins/lossless-claw/src/engine.ts:19, openclaw/plugin-sdk @ plugins/lossless-claw/src/lcm-log.ts:1, openclaw/plugin-sdk @ plugins/lossless-claw/src/openclaw-bridge.ts:17, openclaw/plugin-sdk @ plugins/lossless-claw/src/openclaw-bridge.ts:22, openclaw/plugin-sdk @ plugins/lossless-claw/src/plugin/index.ts:10, openclaw/plugin-sdk @ plugins/lossless-claw/src/plugin/lcm-command.ts:9, openclaw/plugin-sdk @ plugins/lossless-claw/src/tools/common.ts:1                                                                                                                                                        | legacy-root-sdk-import    |
| connectclaw       | package-plugin-api-compat-missing | warning | package openclaw metadata does not declare compat.pluginApi                                    | plugins/connectclaw/packages/plugin/package.json                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | -                         |
| connectclaw       | legacy-root-sdk-import            | warning | fixture imports the root plugin SDK barrel                                                     | openclaw/plugin-sdk @ plugins/connectclaw/packages/plugin/index.ts:1, openclaw/plugin-sdk @ plugins/connectclaw/packages/plugin/src/commands.ts:1, openclaw/plugin-sdk @ plugins/connectclaw/packages/plugin/src/hooks.ts:1, openclaw/plugin-sdk @ plugins/connectclaw/packages/plugin/src/tools.ts:1, openclaw/plugin-sdk @ plugins/connectclaw/packages/plugin/src/tools.ts:2                                                                                                                                                                                                                                                                                                                                 | legacy-root-sdk-import    |
| connectclaw       | legacy-before-agent-start         | warning | fixture uses deprecated before_agent_start hook compatibility                                  | before_agent_start @ plugins/connectclaw/packages/plugin/src/hooks.ts:17                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | legacy-before-agent-start |
| hyperspell        | unknown-hook-name                 | warning | fixture registers hooks that are not present in the target OpenClaw hook registry              | file_changed @ plugins/hyperspell/index.ts:122                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | -                         |
| hyperspell        | conversation-access-hook          | warning | fixture observes raw model or conversation content and needs privacy-boundary contract probes  | agent_end @ plugins/hyperspell/index.ts:105, agent_end @ plugins/hyperspell/index.ts:116                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | -                         |
| hyperspell        | legacy-root-sdk-import            | warning | fixture imports the root plugin SDK barrel                                                     | openclaw/plugin-sdk @ plugins/hyperspell/commands/slash.ts:1, openclaw/plugin-sdk @ plugins/hyperspell/graph/tools.ts:2, openclaw/plugin-sdk @ plugins/hyperspell/index.ts:1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | legacy-root-sdk-import    |
| hyperspell        | legacy-before-agent-start         | warning | fixture uses deprecated before_agent_start hook compatibility                                  | before_agent_start @ plugins/hyperspell/index.ts:102, before_agent_start @ plugins/hyperspell/index.ts:111                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | legacy-before-agent-start |
| honcho            | conversation-access-hook          | warning | fixture observes raw model or conversation content and needs privacy-boundary contract probes  | agent_end @ plugins/honcho/hooks/capture.ts:89, agent_end @ plugins/honcho/hooks/subagent.ts:34                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | -                         |
| honcho            | legacy-root-sdk-import            | warning | fixture imports the root plugin SDK barrel                                                     | openclaw/plugin-sdk @ plugins/honcho/commands/cli.ts:8, openclaw/plugin-sdk @ plugins/honcho/hooks/capture.ts:2, openclaw/plugin-sdk @ plugins/honcho/hooks/context.ts:2, openclaw/plugin-sdk @ plugins/honcho/hooks/gateway.ts:2, openclaw/plugin-sdk @ plugins/honcho/hooks/subagent.ts:2, openclaw/plugin-sdk @ plugins/honcho/state.ts:9, openclaw/plugin-sdk @ plugins/honcho/tools/ask.ts:3, openclaw/plugin-sdk @ plugins/honcho/tools/context.ts:3, openclaw/plugin-sdk @ plugins/honcho/tools/memory-passthrough.ts:3, openclaw/plugin-sdk @ plugins/honcho/tools/message-search.ts:3, openclaw/plugin-sdk @ plugins/honcho/tools/search.ts:3, openclaw/plugin-sdk @ plugins/honcho/tools/session.ts:3 | legacy-root-sdk-import    |
| honcho            | legacy-before-agent-start         | warning | fixture uses deprecated before_agent_start hook compatibility                                  | before_agent_start @ plugins/honcho/hooks/subagent.ts:18                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | legacy-before-agent-start |
| composio          | package-plugin-api-compat-missing | warning | package openclaw metadata does not declare compat.pluginApi                                    | plugins/composio/package.json                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | -                         |
| composio          | legacy-root-sdk-import            | warning | fixture imports the root plugin SDK barrel                                                     | openclaw/plugin-sdk @ plugins/composio/index.ts:1, openclaw/plugin-sdk @ plugins/composio/src/cli.ts:6, openclaw/plugin-sdk @ plugins/composio/src/client.ts:1, openclaw/plugin-sdk @ plugins/composio/src/tools.ts:1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | legacy-root-sdk-import    |
| memu-engine       | package-plugin-api-compat-missing | warning | package openclaw metadata does not declare compat.pluginApi                                    | plugins/memu-engine/package.json                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | -                         |
| memu-engine       | legacy-root-sdk-import            | warning | fixture imports the root plugin SDK barrel                                                     | openclaw/plugin-sdk @ plugins/memu-engine/index.ts:1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | legacy-root-sdk-import    |
| secureclaw        | package-plugin-api-compat-missing | warning | package openclaw metadata does not declare compat.pluginApi                                    | plugins/secureclaw/secureclaw/package.json                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | -                         |
| memos-cloud       | manifest-unknown-fields           | warning | manifest uses top-level fields that are not present in the target OpenClaw PluginManifest type | main @ plugins/memos-cloud/openclaw.plugin.json                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | -                         |
| memos-cloud       | package-plugin-api-compat-missing | warning | package openclaw metadata does not declare compat.pluginApi                                    | plugins/memos-cloud/package.json                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | -                         |
| memos-cloud       | conversation-access-hook          | warning | fixture observes raw model or conversation content and needs privacy-boundary contract probes  | agent_end @ plugins/memos-cloud/index.js:515                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | -                         |
| memos-cloud       | legacy-before-agent-start         | warning | fixture uses deprecated before_agent_start hook compatibility                                  | before_agent_start @ plugins/memos-cloud/index.js:481                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | legacy-before-agent-start |
| codex-app-server  | sdk-export-missing                | warning | fixture imports plugin SDK aliases that are not exported by the target OpenClaw package        | openclaw/plugin-sdk/discord @ plugins/codex-app-server/src/controller.ts:104, openclaw/plugin-sdk/discord @ plugins/codex-app-server/src/controller.ts:106, openclaw/plugin-sdk/telegram-account @ plugins/codex-app-server/src/controller.ts:105                                                                                                                                                                                                                                                                                                                                                                                                                                                               | plugin-sdk-export-aliases |
| codex-app-server  | legacy-root-sdk-import            | warning | fixture imports the root plugin SDK barrel                                                     | openclaw/plugin-sdk @ plugins/codex-app-server/index.ts:1, openclaw/plugin-sdk @ plugins/codex-app-server/src/client.ts:6, openclaw/plugin-sdk @ plugins/codex-app-server/src/controller.ts:18, openclaw/plugin-sdk @ plugins/codex-app-server/src/types.ts:1                                                                                                                                                                                                                                                                                                                                                                                                                                                   | legacy-root-sdk-import    |
| web-search-plus   | manifest-unknown-fields           | warning | manifest uses top-level fields that are not present in the target OpenClaw PluginManifest type | displayName @ plugins/web-search-plus/openclaw.plugin.json                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | -                         |
| apify             | legacy-root-sdk-import            | warning | fixture imports the root plugin SDK barrel                                                     | openclaw/plugin-sdk @ plugins/apify/src/cli.ts:2, openclaw/plugin-sdk @ plugins/apify/src/index.ts:1, openclaw/plugin-sdk @ plugins/apify/src/tools/apify-scraper-tool.ts:4                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | legacy-root-sdk-import    |
| inworld-tts       | provider-auth-env-vars            | warning | manifest uses providerAuthEnvVars legacy compatibility metadata                                | inworld                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | provider-auth-env-vars    |

## Suggestions To OpenClaw Compat Layer

| Fixture           | Code                                 | Level      | Message                                                                                                      | Evidence                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Compat record             |
| ----------------- | ------------------------------------ | ---------- | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------- |
| agentchat         | package-build-artifact-entrypoint    | suggestion | package OpenClaw entrypoint points at build output that is not present in the source fixture checkout        | extension:./dist/index.js -> plugins/agentchat/integrations/openclaw-channel/dist/index.js, setupEntry:./dist/setup-entry.js -> plugins/agentchat/integrations/openclaw-channel/dist/setup-entry.js                                                                                                                                                                                                                                                          | -                         |
| agentchat         | package-dependency-install-required  | suggestion | package declares runtime dependencies that must be installed before cold import                              | @agentchatme/agentchat @ plugins/agentchat/integrations/openclaw-channel/package.json, @sinclair/typebox @ plugins/agentchat/integrations/openclaw-channel/package.json, pino @ plugins/agentchat/integrations/openclaw-channel/package.json, ws @ plugins/agentchat/integrations/openclaw-channel/package.json, zod @ plugins/agentchat/integrations/openclaw-channel/package.json, openclaw @ plugins/agentchat/integrations/openclaw-channel/package.json | -                         |
| agentchat         | channel-contract-probe               | suggestion | add channel envelope, config-schema, and runtime metadata probes                                             | defineChannelPluginEntry @ plugins/agentchat/integrations/openclaw-channel/src/channel.ts:333                                                                                                                                                                                                                                                                                                                                                                | -                         |
| wecom             | package-dependency-install-required  | suggestion | package declares runtime dependencies that must be installed before cold import                              | @wecom/aibot-node-sdk @ plugins/wecom/package.json, file-type @ plugins/wecom/package.json, pinyin-pro @ plugins/wecom/package.json, openclaw @ plugins/wecom/package.json, undici @ plugins/wecom/package.json                                                                                                                                                                                                                                              | -                         |
| wecom             | registration-capture-gap             | suggestion | future inspector capture API should record lifecycle, route, gateway, command, and interactive registrations | registerChannel @ plugins/wecom/index.js:27, registerHttpRoute @ plugins/wecom/index.js:45                                                                                                                                                                                                                                                                                                                                                                   | -                         |
| wecom             | before-tool-call-probe               | suggestion | add contract probes for before_tool_call terminal, block, and approval semantics                             | before_tool_call @ plugins/wecom/index.js:65                                                                                                                                                                                                                                                                                                                                                                                                                 | -                         |
| wecom             | channel-contract-probe               | suggestion | add channel envelope, config-schema, and runtime metadata probes                                             | registerChannel @ plugins/wecom/index.js:27                                                                                                                                                                                                                                                                                                                                                                                                                  | -                         |
| wecom             | runtime-tool-capture                 | suggestion | tool shape is only visible after runtime registration capture                                                | registerTool @ plugins/wecom/index.js:28, registerTool @ plugins/wecom/index.js:29, registerTool @ plugins/wecom/index.js:33                                                                                                                                                                                                                                                                                                                                 | -                         |
| qqbot             | package-dependency-install-required  | suggestion | package declares runtime dependencies that must be installed before cold import                              | mpg123-decoder @ plugins/qqbot/package.json, silk-wasm @ plugins/qqbot/package.json, ws @ plugins/qqbot/package.json, openclaw @ plugins/qqbot/package.json                                                                                                                                                                                                                                                                                                  | -                         |
| qqbot             | registration-capture-gap             | suggestion | future inspector capture API should record lifecycle, route, gateway, command, and interactive registrations | registerChannel @ plugins/qqbot/index.ts:16                                                                                                                                                                                                                                                                                                                                                                                                                  | -                         |
| qqbot             | channel-contract-probe               | suggestion | add channel envelope, config-schema, and runtime metadata probes                                             | registerChannel @ plugins/qqbot/index.ts:16                                                                                                                                                                                                                                                                                                                                                                                                                  | -                         |
| qqbot             | runtime-tool-capture                 | suggestion | tool shape is only visible after runtime registration capture                                                | registerTool @ plugins/qqbot/src/tools/channel.ts:138, registerTool @ plugins/qqbot/src/tools/remind.ts:222                                                                                                                                                                                                                                                                                                                                                  | -                         |
| a2a-gateway       | package-typescript-source-entrypoint | suggestion | package OpenClaw entrypoint resolves to TypeScript source in this fixture checkout                           | extension:plugins/a2a-gateway/index.ts                                                                                                                                                                                                                                                                                                                                                                                                                       | -                         |
| a2a-gateway       | package-dependency-install-required  | suggestion | package declares runtime dependencies that must be installed before cold import                              | @a2a-js/sdk @ plugins/a2a-gateway/package.json, @bufbuild/protobuf @ plugins/a2a-gateway/package.json, @grpc/grpc-js @ plugins/a2a-gateway/package.json, express @ plugins/a2a-gateway/package.json, multicast-dns @ plugins/a2a-gateway/package.json, uuid @ plugins/a2a-gateway/package.json, ws @ plugins/a2a-gateway/package.json                                                                                                                        | -                         |
| a2a-gateway       | registration-capture-gap             | suggestion | future inspector capture API should record lifecycle, route, gateway, command, and interactive registrations | registerGatewayMethod @ plugins/a2a-gateway/index.ts:616, registerGatewayMethod @ plugins/a2a-gateway/index.ts:622, registerGatewayMethod @ plugins/a2a-gateway/index.ts:631, registerGatewayMethod @ plugins/a2a-gateway/index.ts:657, registerGatewayMethod @ plugins/a2a-gateway/index.ts:669, registerService @ plugins/a2a-gateway/index.ts:857                                                                                                         | -                         |
| a2a-gateway       | runtime-tool-capture                 | suggestion | tool shape is only visible after runtime registration capture                                                | registerTool @ plugins/a2a-gateway/index.ts:777                                                                                                                                                                                                                                                                                                                                                                                                              | -                         |
| hasdata           | package-typescript-source-entrypoint | suggestion | package OpenClaw entrypoint resolves to TypeScript source in this fixture checkout                           | extension:plugins/hasdata/src/index.ts                                                                                                                                                                                                                                                                                                                                                                                                                       | -                         |
| hasdata           | package-dependency-install-required  | suggestion | package declares runtime dependencies that must be installed before cold import                              | @sinclair/typebox @ plugins/hasdata/package.json, openclaw @ plugins/hasdata/package.json                                                                                                                                                                                                                                                                                                                                                                    | -                         |
| mcp-adapter       | package-typescript-source-entrypoint | suggestion | package OpenClaw entrypoint resolves to TypeScript source in this fixture checkout                           | extension:plugins/mcp-adapter/index.ts                                                                                                                                                                                                                                                                                                                                                                                                                       | -                         |
| mcp-adapter       | package-dependency-install-required  | suggestion | package declares runtime dependencies that must be installed before cold import                              | @modelcontextprotocol/sdk @ plugins/mcp-adapter/package.json                                                                                                                                                                                                                                                                                                                                                                                                 | -                         |
| mcp-adapter       | registration-capture-gap             | suggestion | future inspector capture API should record lifecycle, route, gateway, command, and interactive registrations | registerService @ plugins/mcp-adapter/index.ts:15                                                                                                                                                                                                                                                                                                                                                                                                            | -                         |
| mcp-adapter       | runtime-tool-capture                 | suggestion | tool shape is only visible after runtime registration capture                                                | registerTool @ plugins/mcp-adapter/index.ts:30                                                                                                                                                                                                                                                                                                                                                                                                               | -                         |
| llm-trace-phoenix | package-typescript-source-entrypoint | suggestion | package OpenClaw entrypoint resolves to TypeScript source in this fixture checkout                           | extension:plugins/llm-trace-phoenix/index.ts                                                                                                                                                                                                                                                                                                                                                                                                                 | -                         |
| opik-openclaw     | package-build-artifact-entrypoint    | suggestion | package OpenClaw entrypoint points at build output that is not present in the source fixture checkout        | runtimeExtension:./dist/index.js -> plugins/opik-openclaw/dist/index.js                                                                                                                                                                                                                                                                                                                                                                                      | -                         |
| opik-openclaw     | package-typescript-source-entrypoint | suggestion | package OpenClaw entrypoint resolves to TypeScript source in this fixture checkout                           | extension:plugins/opik-openclaw/index.ts                                                                                                                                                                                                                                                                                                                                                                                                                     | -                         |
| opik-openclaw     | package-dependency-install-required  | suggestion | package declares runtime dependencies that must be installed before cold import                              | @clack/prompts @ plugins/opik-openclaw/package.json, opik @ plugins/opik-openclaw/package.json, zod @ plugins/opik-openclaw/package.json, openclaw @ plugins/opik-openclaw/package.json                                                                                                                                                                                                                                                                      | -                         |
| opik-openclaw     | registration-capture-gap             | suggestion | future inspector capture API should record lifecycle, route, gateway, command, and interactive registrations | registerService @ plugins/opik-openclaw/index.ts:16                                                                                                                                                                                                                                                                                                                                                                                                          | -                         |
| opik-openclaw     | before-tool-call-probe               | suggestion | add contract probes for before_tool_call terminal, block, and approval semantics                             | before_tool_call @ plugins/opik-openclaw/src/service/hooks/tool.ts:34                                                                                                                                                                                                                                                                                                                                                                                        | -                         |
| lossless-claw     | package-build-artifact-entrypoint    | suggestion | package OpenClaw entrypoint points at build output that is not present in the source fixture checkout        | extension:./dist/index.js -> plugins/lossless-claw/dist/index.js                                                                                                                                                                                                                                                                                                                                                                                             | -                         |
| lossless-claw     | package-dependency-install-required  | suggestion | package declares runtime dependencies that must be installed before cold import                              | @mariozechner/pi-agent-core @ plugins/lossless-claw/package.json, @mariozechner/pi-ai @ plugins/lossless-claw/package.json, @mariozechner/pi-coding-agent @ plugins/lossless-claw/package.json, @sinclair/typebox @ plugins/lossless-claw/package.json, openclaw @ plugins/lossless-claw/package.json                                                                                                                                                        | -                         |
| lossless-claw     | registration-capture-gap             | suggestion | future inspector capture API should record lifecycle, route, gateway, command, and interactive registrations | registerCommand @ plugins/lossless-claw/src/plugin/index.ts:2009, registerContextEngine @ plugins/lossless-claw/src/plugin/index.ts:1989                                                                                                                                                                                                                                                                                                                     | -                         |
| lossless-claw     | runtime-tool-capture                 | suggestion | tool shape is only visible after runtime registration capture                                                | registerTool @ plugins/lossless-claw/src/plugin/index.ts:1991, registerTool @ plugins/lossless-claw/src/plugin/index.ts:1994, registerTool @ plugins/lossless-claw/src/plugin/index.ts:1997, registerTool @ plugins/lossless-claw/src/plugin/index.ts:2000                                                                                                                                                                                                   | -                         |
| connectclaw       | package-typescript-source-entrypoint | suggestion | package OpenClaw entrypoint resolves to TypeScript source in this fixture checkout                           | extension:plugins/connectclaw/packages/plugin/index.ts                                                                                                                                                                                                                                                                                                                                                                                                       | -                         |
| connectclaw       | package-dependency-install-required  | suggestion | package declares runtime dependencies that must be installed before cold import                              | openclaw @ plugins/connectclaw/packages/plugin/package.json                                                                                                                                                                                                                                                                                                                                                                                                  | -                         |
| connectclaw       | registration-capture-gap             | suggestion | future inspector capture API should record lifecycle, route, gateway, command, and interactive registrations | registerCommand @ plugins/connectclaw/packages/plugin/src/commands.ts:18, registerCommand @ plugins/connectclaw/packages/plugin/src/commands.ts:64, registerService @ plugins/connectclaw/packages/plugin/src/hooks.ts:91                                                                                                                                                                                                                                    | -                         |
| connectclaw       | runtime-tool-capture                 | suggestion | tool shape is only visible after runtime registration capture                                                | registerTool @ plugins/connectclaw/packages/plugin/src/tools.ts:6                                                                                                                                                                                                                                                                                                                                                                                            | -                         |
| hyperspell        | package-typescript-source-entrypoint | suggestion | package OpenClaw entrypoint resolves to TypeScript source in this fixture checkout                           | extension:plugins/hyperspell/index.ts                                                                                                                                                                                                                                                                                                                                                                                                                        | -                         |
| hyperspell        | package-dependency-install-required  | suggestion | package declares runtime dependencies that must be installed before cold import                              | @clack/prompts @ plugins/hyperspell/package.json, @sinclair/typebox @ plugins/hyperspell/package.json, hyperspell @ plugins/hyperspell/package.json, openclaw @ plugins/hyperspell/package.json                                                                                                                                                                                                                                                              | -                         |
| hyperspell        | registration-capture-gap             | suggestion | future inspector capture API should record lifecycle, route, gateway, command, and interactive registrations | registerCommand @ plugins/hyperspell/commands/slash.ts:166, registerCommand @ plugins/hyperspell/commands/slash.ts:43, registerCommand @ plugins/hyperspell/commands/slash.ts:98, registerCommand @ plugins/hyperspell/index.ts:46, registerCommand @ plugins/hyperspell/index.ts:57, registerCommand @ plugins/hyperspell/index.ts:68, registerService @ plugins/hyperspell/index.ts:134                                                                    | -                         |
| hyperspell        | runtime-tool-capture                 | suggestion | tool shape is only visible after runtime registration capture                                                | registerTool @ plugins/hyperspell/graph/tools.ts:21, registerTool @ plugins/hyperspell/graph/tools.ts:52, registerTool @ plugins/hyperspell/graph/tools.ts:95, registerTool @ plugins/hyperspell/index.ts:89, registerTool @ plugins/hyperspell/index.ts:92                                                                                                                                                                                                  | -                         |
| honcho            | package-build-artifact-entrypoint    | suggestion | package OpenClaw entrypoint points at build output that is not present in the source fixture checkout        | extension:./dist/index.js -> plugins/honcho/dist/index.js                                                                                                                                                                                                                                                                                                                                                                                                    | -                         |
| honcho            | package-dependency-install-required  | suggestion | package declares runtime dependencies that must be installed before cold import                              | @honcho-ai/sdk @ plugins/honcho/package.json, @sinclair/typebox @ plugins/honcho/package.json, openclaw @ plugins/honcho/package.json                                                                                                                                                                                                                                                                                                                        | -                         |
| honcho            | registration-capture-gap             | suggestion | future inspector capture API should record lifecycle, route, gateway, command, and interactive registrations | registerMemoryPromptSection @ plugins/honcho/index.ts:97, registerMemoryRuntime @ plugins/honcho/runtime.ts:276                                                                                                                                                                                                                                                                                                                                              | -                         |
| honcho            | runtime-tool-capture                 | suggestion | tool shape is only visible after runtime registration capture                                                | registerTool @ plugins/honcho/tools/ask.ts:7, registerTool @ plugins/honcho/tools/context.ts:7, registerTool @ plugins/honcho/tools/memory-passthrough.ts:130, registerTool @ plugins/honcho/tools/memory-passthrough.ts:89, registerTool @ plugins/honcho/tools/message-search.ts:8, registerTool @ plugins/honcho/tools/search.ts:7, registerTool @ plugins/honcho/tools/session.ts:8                                                                      | -                         |
| composio          | package-typescript-source-entrypoint | suggestion | package OpenClaw entrypoint resolves to TypeScript source in this fixture checkout                           | extension:plugins/composio/index.ts                                                                                                                                                                                                                                                                                                                                                                                                                          | -                         |
| composio          | package-dependency-install-required  | suggestion | package declares runtime dependencies that must be installed before cold import                              | @modelcontextprotocol/sdk @ plugins/composio/package.json, zod @ plugins/composio/package.json                                                                                                                                                                                                                                                                                                                                                               | -                         |
| composio          | runtime-tool-capture                 | suggestion | tool shape is only visible after runtime registration capture                                                | registerTool @ plugins/composio/src/tools.ts:89                                                                                                                                                                                                                                                                                                                                                                                                              | -                         |
| memu-engine       | package-typescript-source-entrypoint | suggestion | package OpenClaw entrypoint resolves to TypeScript source in this fixture checkout                           | extension:plugins/memu-engine/index.ts                                                                                                                                                                                                                                                                                                                                                                                                                       | -                         |
| memu-engine       | runtime-tool-capture                 | suggestion | tool shape is only visible after runtime registration capture                                                | registerTool @ plugins/memu-engine/index.ts:1252                                                                                                                                                                                                                                                                                                                                                                                                             | -                         |
| secureclaw        | package-build-artifact-entrypoint    | suggestion | package OpenClaw entrypoint points at build output that is not present in the source fixture checkout        | extension:./dist/index.js -> plugins/secureclaw/secureclaw/dist/index.js                                                                                                                                                                                                                                                                                                                                                                                     | -                         |
| secureclaw        | package-dependency-install-required  | suggestion | package declares runtime dependencies that must be installed before cold import                              | chokidar @ plugins/secureclaw/secureclaw/package.json, node-forge @ plugins/secureclaw/secureclaw/package.json, openclaw @ plugins/secureclaw/secureclaw/package.json                                                                                                                                                                                                                                                                                        | -                         |
| secureclaw        | registration-capture-gap             | suggestion | future inspector capture API should record lifecycle, route, gateway, command, and interactive registrations | registerService @ plugins/secureclaw/secureclaw/src/index.ts:295, registerService @ plugins/secureclaw/secureclaw/src/index.ts:301, registerService @ plugins/secureclaw/secureclaw/src/index.ts:307                                                                                                                                                                                                                                                         | -                         |
| memos-cloud       | registration-capture-gap             | suggestion | future inspector capture API should record lifecycle, route, gateway, command, and interactive registrations | registerHook @ plugins/memos-cloud/index.js:467                                                                                                                                                                                                                                                                                                                                                                                                              | -                         |
| clawmetry         | package-build-artifact-entrypoint    | suggestion | package OpenClaw entrypoint points at build output that is not present in the source fixture checkout        | runtimeExtension:./dist/index.js -> plugins/clawmetry/clawhub-plugin/dist/index.js                                                                                                                                                                                                                                                                                                                                                                           | -                         |
| clawmetry         | package-typescript-source-entrypoint | suggestion | package OpenClaw entrypoint resolves to TypeScript source in this fixture checkout                           | extension:plugins/clawmetry/clawhub-plugin/index.ts                                                                                                                                                                                                                                                                                                                                                                                                          | -                         |
| clawmetry         | package-dependency-install-required  | suggestion | package declares runtime dependencies that must be installed before cold import                              | node-fetch @ plugins/clawmetry/clawhub-plugin/package.json                                                                                                                                                                                                                                                                                                                                                                                                   | -                         |
| clawmetry         | registration-capture-gap             | suggestion | future inspector capture API should record lifecycle, route, gateway, command, and interactive registrations | registerService @ plugins/clawmetry/clawhub-plugin/index.ts:9                                                                                                                                                                                                                                                                                                                                                                                                | -                         |
| codex-app-server  | package-typescript-source-entrypoint | suggestion | package OpenClaw entrypoint resolves to TypeScript source in this fixture checkout                           | extension:plugins/codex-app-server/index.ts                                                                                                                                                                                                                                                                                                                                                                                                                  | -                         |
| codex-app-server  | package-dependency-install-required  | suggestion | package declares runtime dependencies that must be installed before cold import                              | ws @ plugins/codex-app-server/package.json, openclaw @ plugins/codex-app-server/package.json                                                                                                                                                                                                                                                                                                                                                                 | -                         |
| codex-app-server  | registration-capture-gap             | suggestion | future inspector capture API should record lifecycle, route, gateway, command, and interactive registrations | registerCommand @ plugins/codex-app-server/index.ts:48, registerInteractiveHandler @ plugins/codex-app-server/index.ts:29, registerInteractiveHandler @ plugins/codex-app-server/index.ts:38, registerService @ plugins/codex-app-server/index.ts:12                                                                                                                                                                                                         | -                         |
| web-search-plus   | package-typescript-source-entrypoint | suggestion | package OpenClaw entrypoint resolves to TypeScript source in this fixture checkout                           | extension:plugins/web-search-plus/index.ts                                                                                                                                                                                                                                                                                                                                                                                                                   | -                         |
| web-search-plus   | package-dependency-install-required  | suggestion | package declares runtime dependencies that must be installed before cold import                              | openclaw @ plugins/web-search-plus/package.json                                                                                                                                                                                                                                                                                                                                                                                                              | -                         |
| web-search-plus   | runtime-tool-capture                 | suggestion | tool shape is only visible after runtime registration capture                                                | registerTool @ plugins/web-search-plus/index.ts:815, registerTool @ plugins/web-search-plus/index.ts:947                                                                                                                                                                                                                                                                                                                                                     | -                         |
| apify             | package-typescript-source-entrypoint | suggestion | package OpenClaw entrypoint resolves to TypeScript source in this fixture checkout                           | extension:plugins/apify/src/index.ts                                                                                                                                                                                                                                                                                                                                                                                                                         | -                         |
| apify             | package-dependency-install-required  | suggestion | package declares runtime dependencies that must be installed before cold import                              | @sinclair/typebox @ plugins/apify/package.json, apify-client @ plugins/apify/package.json, openclaw @ plugins/apify/package.json                                                                                                                                                                                                                                                                                                                             | -                         |
| apify             | runtime-tool-capture                 | suggestion | tool shape is only visible after runtime registration capture                                                | registerTool @ plugins/apify/src/index.ts:13                                                                                                                                                                                                                                                                                                                                                                                                                 | -                         |
| inworld-tts       | package-typescript-source-entrypoint | suggestion | package OpenClaw entrypoint resolves to TypeScript source in this fixture checkout                           | extension:plugins/inworld-tts/index.ts                                                                                                                                                                                                                                                                                                                                                                                                                       | -                         |
| inworld-tts       | package-dependency-install-required  | suggestion | package declares runtime dependencies that must be installed before cold import                              | openclaw @ plugins/inworld-tts/package.json                                                                                                                                                                                                                                                                                                                                                                                                                  | -                         |
| codex-app-server  | missing-compat-record                | suggestion | fixture depends on a compatibility behavior that is not represented in the target compat registry            | plugin-sdk-export-aliases                                                                                                                                                                                                                                                                                                                                                                                                                                    | plugin-sdk-export-aliases |

## Issue Findings

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

## Fixture Seam Inventory

| Fixture           | Priority | Seams                                                                               | Hooks                                                                                                                                                                   | Registrations                                                                                    | Manifest contracts |
| ----------------- | -------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | ------------------ |
| agentchat         | high     | channel, prompt-mutation, config-schema, websocket, backpressure                    | -                                                                                                                                                                       | defineChannelPluginEntry                                                                         | -                  |
| wecom             | high     | channel, streaming, dynamic-agent-routing, message-policy, media                    | before_prompt_build, before_tool_call, subagent_delivery_target, subagent_ended, subagent_spawned                                                                       | registerChannel, registerHttpRoute, registerTool                                                 | -                  |
| qqbot             | high     | channel, media, proactive-messaging, cron, sdk-preload                              | -                                                                                                                                                                       | registerChannel, registerTool                                                                    | -                  |
| a2a-gateway       | high     | gateway-service, http-routes, agent-routing, async-job, auth                        | -                                                                                                                                                                       | registerGatewayMethod, registerService, registerTool                                             | -                  |
| hasdata           | high     | tool, tool-schema, external-api, cli, config-schema                                 | -                                                                                                                                                                       | registerTool                                                                                     | tools              |
| mcp-adapter       | high     | dynamic-tool, json-schema, stdio, http, reconnect                                   | -                                                                                                                                                                       | registerService, registerTool                                                                    | -                  |
| llm-trace-phoenix | high     | llm-observer, conversation-access, telemetry, external-api                          | llm_input, llm_output                                                                                                                                                   | -                                                                                                | -                  |
| opik-openclaw     | high     | llm-observer, tool-runtime, subagent-routing, diagnostics, cli                      | after_tool_call, agent_end, before_tool_call, llm_input, llm_output, subagent_delivery_target, subagent_ended, subagent_spawned, subagent_spawning, tool_result_persist | registerCli, registerService                                                                     | -                  |
| lossless-claw     | high     | context-engine, prompt-mutation, session-lifecycle, gateway-lifecycle, dynamic-tool | before_prompt_build, before_reset, gateway_start, gateway_stop, session_end                                                                                             | registerCommand, registerContextEngine, registerTool                                             | -                  |
| connectclaw       | high     | dynamic-tool, external-api, gateway-service, process-spawn, hono-relay              | before_agent_start                                                                                                                                                      | registerCommand, registerService, registerTool                                                   | -                  |
| hyperspell        | high     | memory-runtime, prompt-mutation, session-lifecycle, file-watch, cli                 | after_compaction, agent_end, before_agent_start, file_changed, session_end                                                                                              | registerCli, registerCommand, registerService, registerTool                                      | -                  |
| honcho            | high     | memory-runtime, prompt-mutation, gateway-lifecycle, subagent-routing, sdk-compat    | agent_end, before_agent_start, before_compaction, before_prompt_build, before_reset, gateway_start, subagent_spawned                                                    | definePluginEntry, registerCli, registerMemoryPromptSection, registerMemoryRuntime, registerTool | -                  |
| composio          | high     | dynamic-tool, mcp, external-api, prompt-mutation, cli                               | before_prompt_build                                                                                                                                                     | registerCli, registerTool                                                                        | -                  |
| memu-engine       | medium   | memory-runtime, tool, python-sidecar, storage-migration, session-ingest             | -                                                                                                                                                                       | registerTool                                                                                     | -                  |
| secureclaw        | medium   | security-audit, config-hardening, gateway-lifecycle, filesystem-scan, cli           | gateway_start                                                                                                                                                           | registerCli, registerService                                                                     | -                  |
| memos-cloud       | medium   | memory-runtime, session-lifecycle, config-ui, legacy-hook-api, external-api         | agent_end, before_agent_start                                                                                                                                           | registerHook                                                                                     | -                  |
| clawmetry         | medium   | diagnostics, log-transport, gateway-service, sidecar, telemetry                     | -                                                                                                                                                                       | definePluginEntry, registerService                                                               | -                  |
| codex-app-server  | medium   | process-spawn, unsafe-install, channel-bridge, interactive-ui, sdk-compat           | inbound_claim                                                                                                                                                           | registerCommand, registerInteractiveHandler, registerService                                     | -                  |
| web-search-plus   | medium   | tool, provider-routing, external-api, env-auth, extraction                          | -                                                                                                                                                                       | registerTool                                                                                     | -                  |
| apify             | medium   | tool, async-job, polling, external-api, catalog-discovery                           | -                                                                                                                                                                       | registerCli, registerTool                                                                        | -                  |
| inworld-tts       | medium   | provider-capability, speech, tts, env-auth, runtime-overrides                       | -                                                                                                                                                                       | definePluginEntry, registerSpeechProvider                                                        | speechProviders    |

## Decision Matrix

| Fixture           | Decision            | Seam                 | Action                                                                                                              | Evidence                                                                                                     |
| ----------------- | ------------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| agentchat         | plugin-upstream-fix | manifest-schema      | Move unknown manifest metadata into supported package openclaw metadata or add a versioned OpenClaw manifest field. | displayName, homepage, icon                                                                                  |
| agentchat         | inspector-follow-up | cold-import          | Run the plugin build or resolve source entrypoint aliases before cold-importing this fixture.                       | ./dist/index.js, ./dist/setup-entry.js                                                                       |
| agentchat         | inspector-follow-up | cold-import          | Install runtime dependencies in an isolated workspace before executing this fixture entrypoint.                     | @agentchatme/agentchat, @sinclair/typebox, pino, ws, zod, openclaw                                           |
| agentchat         | core-compat-adapter | channel-env          | Keep channelEnvVars compatibility active until channel setup metadata has a stable replacement path.                | agentchat                                                                                                    |
| agentchat         | inspector-follow-up | channel-runtime      | Probe channel setup and message envelope contracts before changing channel runtime payloads.                        | defineChannelPluginEntry                                                                                     |
| wecom             | plugin-upstream-fix | package-metadata     | Ask the plugin to declare the plugin API range it was built against.                                                | plugins/wecom/package.json                                                                                   |
| wecom             | inspector-follow-up | cold-import          | Install runtime dependencies in an isolated workspace before executing this fixture entrypoint.                     | @wecom/aibot-node-sdk, file-type, pinyin-pro, openclaw, undici                                               |
| wecom             | inspector-follow-up | registration-capture | Expose or mirror a full public API capture shim before treating these runtime-only seams as covered.                | registerChannel, registerHttpRoute                                                                           |
| wecom             | inspector-follow-up | tool-policy          | Probe before_tool_call return shapes before changing tool-call approval or block behavior.                          | before_tool_call                                                                                             |
| wecom             | inspector-follow-up | channel-runtime      | Probe channel setup and message envelope contracts before changing channel runtime payloads.                        | registerChannel                                                                                              |
| wecom             | inspector-follow-up | tool-schema          | Capture registered tool schemas from plugin register() before judging tool compatibility.                           | registerTool without manifest contracts.tools                                                                |
| qqbot             | plugin-upstream-fix | manifest-schema      | Move unknown manifest metadata into supported package openclaw metadata or add a versioned OpenClaw manifest field. | capabilities, extensions                                                                                     |
| qqbot             | plugin-upstream-fix | package-metadata     | Ask the plugin to declare the plugin API range it was built against.                                                | plugins/qqbot/package.json                                                                                   |
| qqbot             | inspector-follow-up | cold-import          | Install runtime dependencies in an isolated workspace before executing this fixture entrypoint.                     | mpg123-decoder, silk-wasm, ws, openclaw                                                                      |
| qqbot             | core-compat-adapter | sdk-import           | Keep the root SDK barrel stable or expose a machine-readable migration map before removing aliases.                 | openclaw/plugin-sdk                                                                                          |
| qqbot             | inspector-follow-up | registration-capture | Expose or mirror a full public API capture shim before treating these runtime-only seams as covered.                | registerChannel                                                                                              |
| qqbot             | inspector-follow-up | channel-runtime      | Probe channel setup and message envelope contracts before changing channel runtime payloads.                        | registerChannel                                                                                              |
| qqbot             | inspector-follow-up | tool-schema          | Capture registered tool schemas from plugin register() before judging tool compatibility.                           | registerTool without manifest contracts.tools                                                                |
| a2a-gateway       | plugin-upstream-fix | manifest-schema      | Move unknown manifest metadata into supported package openclaw metadata or add a versioned OpenClaw manifest field. | defaultConfig                                                                                                |
| a2a-gateway       | plugin-upstream-fix | package-metadata     | Ask the plugin to keep package and manifest versions aligned before relying on release compatibility signals.       | 1.4.0 != 1.3.0                                                                                               |
| a2a-gateway       | plugin-upstream-fix | package-metadata     | Ask the plugin to declare the plugin API range it was built against.                                                | plugins/a2a-gateway/package.json                                                                             |
| a2a-gateway       | inspector-follow-up | cold-import          | Compile TypeScript source or run a loader before cold-importing this fixture entrypoint.                            | plugins/a2a-gateway/index.ts                                                                                 |
| a2a-gateway       | inspector-follow-up | cold-import          | Install runtime dependencies in an isolated workspace before executing this fixture entrypoint.                     | @a2a-js/sdk, @bufbuild/protobuf, @grpc/grpc-js, express, multicast-dns, uuid, ws                             |
| a2a-gateway       | core-compat-adapter | sdk-import           | Keep the root SDK barrel stable or expose a machine-readable migration map before removing aliases.                 | openclaw/plugin-sdk                                                                                          |
| a2a-gateway       | inspector-follow-up | registration-capture | Expose or mirror a full public API capture shim before treating these runtime-only seams as covered.                | registerGatewayMethod, registerService                                                                       |
| a2a-gateway       | inspector-follow-up | tool-schema          | Capture registered tool schemas from plugin register() before judging tool compatibility.                           | registerTool without manifest contracts.tools                                                                |
| hasdata           | inspector-follow-up | cold-import          | Compile TypeScript source or run a loader before cold-importing this fixture entrypoint.                            | plugins/hasdata/src/index.ts                                                                                 |
| hasdata           | inspector-follow-up | cold-import          | Install runtime dependencies in an isolated workspace before executing this fixture entrypoint.                     | @sinclair/typebox, openclaw                                                                                  |
| hasdata           | core-compat-adapter | env-auth             | Keep providerAuthEnvVars compatibility active while the inspector recommends manifest-schema migration upstream.    | hasdata                                                                                                      |
| hasdata           | no-action           | manifest-contract    | Keep checking this declarative contract in default offline CI.                                                      | tools                                                                                                        |
| mcp-adapter       | plugin-upstream-fix | package-metadata     | Ask the plugin to declare the plugin API range it was built against.                                                | plugins/mcp-adapter/package.json                                                                             |
| mcp-adapter       | inspector-follow-up | cold-import          | Compile TypeScript source or run a loader before cold-importing this fixture entrypoint.                            | plugins/mcp-adapter/index.ts                                                                                 |
| mcp-adapter       | inspector-follow-up | cold-import          | Install runtime dependencies in an isolated workspace before executing this fixture entrypoint.                     | @modelcontextprotocol/sdk                                                                                    |
| mcp-adapter       | inspector-follow-up | registration-capture | Expose or mirror a full public API capture shim before treating these runtime-only seams as covered.                | registerService                                                                                              |
| mcp-adapter       | inspector-follow-up | tool-schema          | Capture registered tool schemas from plugin register() before judging tool compatibility.                           | registerTool without manifest contracts.tools                                                                |
| llm-trace-phoenix | inspector-follow-up | cold-import          | Compile TypeScript source or run a loader before cold-importing this fixture entrypoint.                            | plugins/llm-trace-phoenix/index.ts                                                                           |
| llm-trace-phoenix | inspector-follow-up | conversation-access  | Add synthetic llm_input/llm_output/agent_end probes before tightening hook payloads or redaction behavior.          | llm_input, llm_output                                                                                        |
| llm-trace-phoenix | core-compat-adapter | sdk-import           | Keep the root SDK barrel stable or expose a machine-readable migration map before removing aliases.                 | openclaw/plugin-sdk                                                                                          |
| opik-openclaw     | inspector-follow-up | cold-import          | Run the plugin build or resolve source entrypoint aliases before cold-importing this fixture.                       | ./dist/index.js                                                                                              |
| opik-openclaw     | inspector-follow-up | cold-import          | Compile TypeScript source or run a loader before cold-importing this fixture entrypoint.                            | plugins/opik-openclaw/index.ts                                                                               |
| opik-openclaw     | inspector-follow-up | cold-import          | Install runtime dependencies in an isolated workspace before executing this fixture entrypoint.                     | @clack/prompts, opik, zod, openclaw                                                                          |
| opik-openclaw     | inspector-follow-up | conversation-access  | Add synthetic llm_input/llm_output/agent_end probes before tightening hook payloads or redaction behavior.          | agent_end, llm_input, llm_output                                                                             |
| opik-openclaw     | core-compat-adapter | sdk-import           | Keep the root SDK barrel stable or expose a machine-readable migration map before removing aliases.                 | openclaw/plugin-sdk                                                                                          |
| opik-openclaw     | inspector-follow-up | registration-capture | Expose or mirror a full public API capture shim before treating these runtime-only seams as covered.                | registerService                                                                                              |
| opik-openclaw     | inspector-follow-up | tool-policy          | Probe before_tool_call return shapes before changing tool-call approval or block behavior.                          | before_tool_call                                                                                             |
| lossless-claw     | plugin-upstream-fix | package-metadata     | Ask the plugin to declare the plugin API range it was built against.                                                | plugins/lossless-claw/package.json                                                                           |
| lossless-claw     | inspector-follow-up | cold-import          | Run the plugin build or resolve source entrypoint aliases before cold-importing this fixture.                       | ./dist/index.js                                                                                              |
| lossless-claw     | inspector-follow-up | cold-import          | Install runtime dependencies in an isolated workspace before executing this fixture entrypoint.                     | @mariozechner/pi-agent-core, @mariozechner/pi-ai, @mariozechner/pi-coding-agent, @sinclair/typebox, openclaw |
| lossless-claw     | core-compat-adapter | sdk-import           | Keep the root SDK barrel stable or expose a machine-readable migration map before removing aliases.                 | openclaw/plugin-sdk                                                                                          |
| lossless-claw     | inspector-follow-up | registration-capture | Expose or mirror a full public API capture shim before treating these runtime-only seams as covered.                | registerCommand, registerContextEngine                                                                       |
| lossless-claw     | inspector-follow-up | tool-schema          | Capture registered tool schemas from plugin register() before judging tool compatibility.                           | registerTool without manifest contracts.tools                                                                |
| connectclaw       | plugin-upstream-fix | package-metadata     | Ask the plugin to declare the plugin API range it was built against.                                                | plugins/connectclaw/packages/plugin/package.json                                                             |
| connectclaw       | inspector-follow-up | cold-import          | Compile TypeScript source or run a loader before cold-importing this fixture entrypoint.                            | plugins/connectclaw/packages/plugin/index.ts                                                                 |
| connectclaw       | inspector-follow-up | cold-import          | Install runtime dependencies in an isolated workspace before executing this fixture entrypoint.                     | openclaw                                                                                                     |
| connectclaw       | core-compat-adapter | sdk-import           | Keep the root SDK barrel stable or expose a machine-readable migration map before removing aliases.                 | openclaw/plugin-sdk                                                                                          |
| connectclaw       | core-compat-adapter | hook-compat          | Keep before_agent_start wired while plugin authors migrate to before_model_resolve and before_prompt_build.         | before_agent_start @ plugins/connectclaw/packages/plugin/src/hooks.ts:17                                     |
| connectclaw       | inspector-follow-up | registration-capture | Expose or mirror a full public API capture shim before treating these runtime-only seams as covered.                | registerCommand, registerService                                                                             |
| connectclaw       | inspector-follow-up | tool-schema          | Capture registered tool schemas from plugin register() before judging tool compatibility.                           | registerTool without manifest contracts.tools                                                                |
| hyperspell        | inspector-follow-up | cold-import          | Compile TypeScript source or run a loader before cold-importing this fixture entrypoint.                            | plugins/hyperspell/index.ts                                                                                  |
| hyperspell        | inspector-follow-up | cold-import          | Install runtime dependencies in an isolated workspace before executing this fixture entrypoint.                     | @clack/prompts, @sinclair/typebox, hyperspell, openclaw                                                      |
| hyperspell        | inspector-follow-up | conversation-access  | Add synthetic llm_input/llm_output/agent_end probes before tightening hook payloads or redaction behavior.          | agent_end                                                                                                    |
| hyperspell        | core-compat-adapter | sdk-import           | Keep the root SDK barrel stable or expose a machine-readable migration map before removing aliases.                 | openclaw/plugin-sdk                                                                                          |
| hyperspell        | core-compat-adapter | hook-compat          | Keep before_agent_start wired while plugin authors migrate to before_model_resolve and before_prompt_build.         | before_agent_start @ plugins/hyperspell/index.ts:102, before_agent_start @ plugins/hyperspell/index.ts:111   |
| hyperspell        | inspector-follow-up | registration-capture | Expose or mirror a full public API capture shim before treating these runtime-only seams as covered.                | registerCommand, registerService                                                                             |
| hyperspell        | inspector-follow-up | tool-schema          | Capture registered tool schemas from plugin register() before judging tool compatibility.                           | registerTool without manifest contracts.tools                                                                |
| honcho            | inspector-follow-up | cold-import          | Run the plugin build or resolve source entrypoint aliases before cold-importing this fixture.                       | ./dist/index.js                                                                                              |
| honcho            | inspector-follow-up | cold-import          | Install runtime dependencies in an isolated workspace before executing this fixture entrypoint.                     | @honcho-ai/sdk, @sinclair/typebox, openclaw                                                                  |
| honcho            | inspector-follow-up | conversation-access  | Add synthetic llm_input/llm_output/agent_end probes before tightening hook payloads or redaction behavior.          | agent_end                                                                                                    |
| honcho            | core-compat-adapter | sdk-import           | Keep the root SDK barrel stable or expose a machine-readable migration map before removing aliases.                 | openclaw/plugin-sdk                                                                                          |
| honcho            | core-compat-adapter | hook-compat          | Keep before_agent_start wired while plugin authors migrate to before_model_resolve and before_prompt_build.         | before_agent_start @ plugins/honcho/hooks/subagent.ts:18                                                     |
| honcho            | inspector-follow-up | registration-capture | Expose or mirror a full public API capture shim before treating these runtime-only seams as covered.                | registerMemoryPromptSection, registerMemoryRuntime                                                           |
| honcho            | inspector-follow-up | tool-schema          | Capture registered tool schemas from plugin register() before judging tool compatibility.                           | registerTool without manifest contracts.tools                                                                |
| composio          | plugin-upstream-fix | package-metadata     | Ask the plugin to declare the plugin API range it was built against.                                                | plugins/composio/package.json                                                                                |
| composio          | inspector-follow-up | cold-import          | Compile TypeScript source or run a loader before cold-importing this fixture entrypoint.                            | plugins/composio/index.ts                                                                                    |
| composio          | inspector-follow-up | cold-import          | Install runtime dependencies in an isolated workspace before executing this fixture entrypoint.                     | @modelcontextprotocol/sdk, zod                                                                               |
| composio          | core-compat-adapter | sdk-import           | Keep the root SDK barrel stable or expose a machine-readable migration map before removing aliases.                 | openclaw/plugin-sdk                                                                                          |
| composio          | inspector-follow-up | tool-schema          | Capture registered tool schemas from plugin register() before judging tool compatibility.                           | registerTool without manifest contracts.tools                                                                |
| memu-engine       | plugin-upstream-fix | package-metadata     | Ask the plugin to declare the plugin API range it was built against.                                                | plugins/memu-engine/package.json                                                                             |
| memu-engine       | inspector-follow-up | cold-import          | Compile TypeScript source or run a loader before cold-importing this fixture entrypoint.                            | plugins/memu-engine/index.ts                                                                                 |
| memu-engine       | core-compat-adapter | sdk-import           | Keep the root SDK barrel stable or expose a machine-readable migration map before removing aliases.                 | openclaw/plugin-sdk                                                                                          |
| memu-engine       | inspector-follow-up | tool-schema          | Capture registered tool schemas from plugin register() before judging tool compatibility.                           | registerTool without manifest contracts.tools                                                                |
| secureclaw        | plugin-upstream-fix | package-metadata     | Ask the plugin to declare the plugin API range it was built against.                                                | plugins/secureclaw/secureclaw/package.json                                                                   |
| secureclaw        | inspector-follow-up | cold-import          | Run the plugin build or resolve source entrypoint aliases before cold-importing this fixture.                       | ./dist/index.js                                                                                              |
| secureclaw        | inspector-follow-up | cold-import          | Install runtime dependencies in an isolated workspace before executing this fixture entrypoint.                     | chokidar, node-forge, openclaw                                                                               |
| secureclaw        | inspector-follow-up | registration-capture | Expose or mirror a full public API capture shim before treating these runtime-only seams as covered.                | registerService                                                                                              |
| memos-cloud       | plugin-upstream-fix | manifest-schema      | Move unknown manifest metadata into supported package openclaw metadata or add a versioned OpenClaw manifest field. | main                                                                                                         |
| memos-cloud       | plugin-upstream-fix | package-metadata     | Ask the plugin to declare the plugin API range it was built against.                                                | plugins/memos-cloud/package.json                                                                             |
| memos-cloud       | inspector-follow-up | conversation-access  | Add synthetic llm_input/llm_output/agent_end probes before tightening hook payloads or redaction behavior.          | agent_end                                                                                                    |
| memos-cloud       | core-compat-adapter | hook-compat          | Keep before_agent_start wired while plugin authors migrate to before_model_resolve and before_prompt_build.         | before_agent_start @ plugins/memos-cloud/index.js:481                                                        |
| memos-cloud       | inspector-follow-up | registration-capture | Expose or mirror a full public API capture shim before treating these runtime-only seams as covered.                | registerHook                                                                                                 |
| clawmetry         | inspector-follow-up | cold-import          | Run the plugin build or resolve source entrypoint aliases before cold-importing this fixture.                       | ./dist/index.js                                                                                              |
| clawmetry         | inspector-follow-up | cold-import          | Compile TypeScript source or run a loader before cold-importing this fixture entrypoint.                            | plugins/clawmetry/clawhub-plugin/index.ts                                                                    |
| clawmetry         | inspector-follow-up | cold-import          | Install runtime dependencies in an isolated workspace before executing this fixture entrypoint.                     | node-fetch                                                                                                   |
| clawmetry         | inspector-follow-up | registration-capture | Expose or mirror a full public API capture shim before treating these runtime-only seams as covered.                | registerService                                                                                              |
| codex-app-server  | core-compat-adapter | sdk-alias            | Restore the package export alias or publish a versioned migration map before cold-importing old plugins.            | openclaw/plugin-sdk/discord, openclaw/plugin-sdk/telegram-account                                            |
| codex-app-server  | inspector-follow-up | cold-import          | Compile TypeScript source or run a loader before cold-importing this fixture entrypoint.                            | plugins/codex-app-server/index.ts                                                                            |
| codex-app-server  | inspector-follow-up | cold-import          | Install runtime dependencies in an isolated workspace before executing this fixture entrypoint.                     | ws, openclaw                                                                                                 |
| codex-app-server  | core-compat-adapter | sdk-import           | Keep the root SDK barrel stable or expose a machine-readable migration map before removing aliases.                 | openclaw/plugin-sdk                                                                                          |
| codex-app-server  | inspector-follow-up | registration-capture | Expose or mirror a full public API capture shim before treating these runtime-only seams as covered.                | registerCommand, registerInteractiveHandler, registerService                                                 |
| web-search-plus   | plugin-upstream-fix | manifest-schema      | Move unknown manifest metadata into supported package openclaw metadata or add a versioned OpenClaw manifest field. | displayName                                                                                                  |
| web-search-plus   | inspector-follow-up | cold-import          | Compile TypeScript source or run a loader before cold-importing this fixture entrypoint.                            | plugins/web-search-plus/index.ts                                                                             |
| web-search-plus   | inspector-follow-up | cold-import          | Install runtime dependencies in an isolated workspace before executing this fixture entrypoint.                     | openclaw                                                                                                     |
| web-search-plus   | inspector-follow-up | tool-schema          | Capture registered tool schemas from plugin register() before judging tool compatibility.                           | registerTool without manifest contracts.tools                                                                |
| apify             | inspector-follow-up | cold-import          | Compile TypeScript source or run a loader before cold-importing this fixture entrypoint.                            | plugins/apify/src/index.ts                                                                                   |
| apify             | inspector-follow-up | cold-import          | Install runtime dependencies in an isolated workspace before executing this fixture entrypoint.                     | @sinclair/typebox, apify-client, openclaw                                                                    |
| apify             | core-compat-adapter | sdk-import           | Keep the root SDK barrel stable or expose a machine-readable migration map before removing aliases.                 | openclaw/plugin-sdk                                                                                          |
| apify             | inspector-follow-up | tool-schema          | Capture registered tool schemas from plugin register() before judging tool compatibility.                           | registerTool without manifest contracts.tools                                                                |
| inworld-tts       | inspector-follow-up | cold-import          | Compile TypeScript source or run a loader before cold-importing this fixture entrypoint.                            | plugins/inworld-tts/index.ts                                                                                 |
| inworld-tts       | inspector-follow-up | cold-import          | Install runtime dependencies in an isolated workspace before executing this fixture entrypoint.                     | openclaw                                                                                                     |
| inworld-tts       | core-compat-adapter | env-auth             | Keep providerAuthEnvVars compatibility active while the inspector recommends manifest-schema migration upstream.    | inworld                                                                                                      |
| inworld-tts       | no-action           | manifest-contract    | Keep checking this declarative contract in default offline CI.                                                      | speechProviders                                                                                              |
| codex-app-server  | core-compat-adapter | compat-registry      | Add or restore a machine-readable OpenClaw compat record before changing this plugin-facing behavior.               | plugin-sdk-export-aliases                                                                                    |

## Raw Logs

| Fixture           | Code                    | Level | Message                                                                               | Evidence                                                                                                                                                                                                                                                                                                                   | Compat record             |
| ----------------- | ----------------------- | ----- | ------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| agentchat         | seam-inventory          | log   | observed 0 hooks, 1 registrations, and 0 manifest contracts                           | registration:defineChannelPluginEntry                                                                                                                                                                                                                                                                                      | -                         |
| agentchat         | hook-names-present      | log   | all observed hooks exist in the target OpenClaw hook registry                         | -                                                                                                                                                                                                                                                                                                                          | -                         |
| agentchat         | api-registrars-present  | log   | all observed api.register* calls exist in the target OpenClaw plugin API builder      | -                                                                                                                                                                                                                                                                                                                          | -                         |
| agentchat         | sdk-exports-present     | log   | all observed plugin SDK imports exist in target OpenClaw package exports              | openclaw/plugin-sdk/channel-contract, openclaw/plugin-sdk/channel-core, openclaw/plugin-sdk/setup                                                                                                                                                                                                                          | -                         |
| agentchat         | manifest-fields-checked | log   | plugin manifest fields were compared with target OpenClaw manifest types              | plugins/agentchat/integrations/openclaw-channel/openclaw.plugin.json                                                                                                                                                                                                                                                       | -                         |
| agentchat         | package-metadata        | log   | selected package metadata for plugin contract checks                                  | plugins/agentchat/integrations/openclaw-channel/package.json, @agentchatme/openclaw, version:0.6.2                                                                                                                                                                                                                         | -                         |
| wecom             | seam-inventory          | log   | observed 5 hooks, 3 registrations, and 0 manifest contracts                           | hook:before_prompt_build, hook:before_tool_call, hook:subagent_delivery_target, hook:subagent_ended, hook:subagent_spawned, registration:registerChannel, registration:registerHttpRoute, registration:registerTool                                                                                                        | -                         |
| wecom             | hook-names-present      | log   | all observed hooks exist in the target OpenClaw hook registry                         | before_prompt_build, before_tool_call, subagent_delivery_target, subagent_ended, subagent_spawned                                                                                                                                                                                                                          | -                         |
| wecom             | api-registrars-present  | log   | all observed api.register* calls exist in the target OpenClaw plugin API builder      | registerChannel, registerHttpRoute, registerTool                                                                                                                                                                                                                                                                           | -                         |
| wecom             | sdk-exports-present     | log   | all observed plugin SDK imports exist in target OpenClaw package exports              | openclaw/plugin-sdk/core, openclaw/plugin-sdk/media-runtime, openclaw/plugin-sdk/setup, openclaw/plugin-sdk/status-helpers                                                                                                                                                                                                 | -                         |
| wecom             | manifest-fields-checked | log   | plugin manifest fields were compared with target OpenClaw manifest types              | plugins/wecom/openclaw.plugin.json                                                                                                                                                                                                                                                                                         | -                         |
| wecom             | package-metadata        | log   | selected package metadata for plugin contract checks                                  | plugins/wecom/package.json, @sunnoy/wecom, version:3.0.1                                                                                                                                                                                                                                                                   | -                         |
| qqbot             | seam-inventory          | log   | observed 0 hooks, 2 registrations, and 0 manifest contracts                           | registration:registerChannel, registration:registerTool                                                                                                                                                                                                                                                                    | -                         |
| qqbot             | hook-names-present      | log   | all observed hooks exist in the target OpenClaw hook registry                         | -                                                                                                                                                                                                                                                                                                                          | -                         |
| qqbot             | api-registrars-present  | log   | all observed api.register* calls exist in the target OpenClaw plugin API builder      | registerChannel, registerTool                                                                                                                                                                                                                                                                                              | -                         |
| qqbot             | sdk-exports-present     | log   | all observed plugin SDK imports exist in target OpenClaw package exports              | openclaw/plugin-sdk, openclaw/plugin-sdk/core                                                                                                                                                                                                                                                                              | -                         |
| qqbot             | manifest-fields-checked | log   | plugin manifest fields were compared with target OpenClaw manifest types              | plugins/qqbot/openclaw.plugin.json                                                                                                                                                                                                                                                                                         | -                         |
| qqbot             | package-metadata        | log   | selected package metadata for plugin contract checks                                  | plugins/qqbot/package.json, @tencent-connect/openclaw-qqbot, version:1.7.1                                                                                                                                                                                                                                                 | -                         |
| a2a-gateway       | seam-inventory          | log   | observed 0 hooks, 3 registrations, and 0 manifest contracts                           | registration:registerGatewayMethod, registration:registerService, registration:registerTool                                                                                                                                                                                                                                | -                         |
| a2a-gateway       | hook-names-present      | log   | all observed hooks exist in the target OpenClaw hook registry                         | -                                                                                                                                                                                                                                                                                                                          | -                         |
| a2a-gateway       | api-registrars-present  | log   | all observed api.register* calls exist in the target OpenClaw plugin API builder      | registerGatewayMethod, registerService, registerTool                                                                                                                                                                                                                                                                       | -                         |
| a2a-gateway       | sdk-exports-present     | log   | all observed plugin SDK imports exist in target OpenClaw package exports              | openclaw/plugin-sdk                                                                                                                                                                                                                                                                                                        | -                         |
| a2a-gateway       | manifest-fields-checked | log   | plugin manifest fields were compared with target OpenClaw manifest types              | plugins/a2a-gateway/openclaw.plugin.json                                                                                                                                                                                                                                                                                   | -                         |
| a2a-gateway       | package-metadata        | log   | selected package metadata for plugin contract checks                                  | plugins/a2a-gateway/package.json, openclaw-a2a-gateway, version:1.4.0                                                                                                                                                                                                                                                      | -                         |
| hasdata           | seam-inventory          | log   | observed 0 hooks, 1 registrations, and 1 manifest contracts                           | registration:registerTool, manifestContract:tools                                                                                                                                                                                                                                                                          | -                         |
| hasdata           | hook-names-present      | log   | all observed hooks exist in the target OpenClaw hook registry                         | -                                                                                                                                                                                                                                                                                                                          | -                         |
| hasdata           | api-registrars-present  | log   | all observed api.register* calls exist in the target OpenClaw plugin API builder      | registerTool                                                                                                                                                                                                                                                                                                               | -                         |
| hasdata           | manifest-fields-checked | log   | plugin manifest fields were compared with target OpenClaw manifest types              | plugins/hasdata/openclaw.plugin.json                                                                                                                                                                                                                                                                                       | -                         |
| hasdata           | package-metadata        | log   | selected package metadata for plugin contract checks                                  | plugins/hasdata/package.json, @hasdata/hasdata-openclaw-plugin, version:0.1.5                                                                                                                                                                                                                                              | -                         |
| hasdata           | declarative-contracts   | log   | fixture declares manifest contracts that can be checked without executing plugin code | tools                                                                                                                                                                                                                                                                                                                      | -                         |
| mcp-adapter       | seam-inventory          | log   | observed 0 hooks, 2 registrations, and 0 manifest contracts                           | registration:registerService, registration:registerTool                                                                                                                                                                                                                                                                    | -                         |
| mcp-adapter       | hook-names-present      | log   | all observed hooks exist in the target OpenClaw hook registry                         | -                                                                                                                                                                                                                                                                                                                          | -                         |
| mcp-adapter       | api-registrars-present  | log   | all observed api.register* calls exist in the target OpenClaw plugin API builder      | registerService, registerTool                                                                                                                                                                                                                                                                                              | -                         |
| mcp-adapter       | manifest-fields-checked | log   | plugin manifest fields were compared with target OpenClaw manifest types              | plugins/mcp-adapter/openclaw.plugin.json                                                                                                                                                                                                                                                                                   | -                         |
| mcp-adapter       | package-metadata        | log   | selected package metadata for plugin contract checks                                  | plugins/mcp-adapter/package.json, openclaw-mcp-adapter, version:0.1.1                                                                                                                                                                                                                                                      | -                         |
| llm-trace-phoenix | seam-inventory          | log   | observed 2 hooks, 0 registrations, and 0 manifest contracts                           | hook:llm_input, hook:llm_output                                                                                                                                                                                                                                                                                            | -                         |
| llm-trace-phoenix | hook-names-present      | log   | all observed hooks exist in the target OpenClaw hook registry                         | llm_input, llm_output                                                                                                                                                                                                                                                                                                      | -                         |
| llm-trace-phoenix | api-registrars-present  | log   | all observed api.register* calls exist in the target OpenClaw plugin API builder      | -                                                                                                                                                                                                                                                                                                                          | -                         |
| llm-trace-phoenix | sdk-exports-present     | log   | all observed plugin SDK imports exist in target OpenClaw package exports              | openclaw/plugin-sdk                                                                                                                                                                                                                                                                                                        | -                         |
| llm-trace-phoenix | manifest-fields-checked | log   | plugin manifest fields were compared with target OpenClaw manifest types              | plugins/llm-trace-phoenix/openclaw.plugin.json                                                                                                                                                                                                                                                                             | -                         |
| llm-trace-phoenix | package-metadata        | log   | selected package metadata for plugin contract checks                                  | plugins/llm-trace-phoenix/package.json, llm-trace-phoenix, version:1.0.1                                                                                                                                                                                                                                                   | -                         |
| opik-openclaw     | seam-inventory          | log   | observed 10 hooks, 2 registrations, and 0 manifest contracts                          | hook:after_tool_call, hook:agent_end, hook:before_tool_call, hook:llm_input, hook:llm_output, hook:subagent_delivery_target, hook:subagent_ended, hook:subagent_spawned, hook:subagent_spawning, hook:tool_result_persist, registration:registerCli, registration:registerService                                          | -                         |
| opik-openclaw     | hook-names-present      | log   | all observed hooks exist in the target OpenClaw hook registry                         | after_tool_call, agent_end, before_tool_call, llm_input, llm_output, subagent_delivery_target, subagent_ended, subagent_spawned, subagent_spawning, tool_result_persist                                                                                                                                                    | -                         |
| opik-openclaw     | api-registrars-present  | log   | all observed api.register* calls exist in the target OpenClaw plugin API builder      | registerCli, registerService                                                                                                                                                                                                                                                                                               | -                         |
| opik-openclaw     | sdk-exports-present     | log   | all observed plugin SDK imports exist in target OpenClaw package exports              | openclaw/plugin-sdk                                                                                                                                                                                                                                                                                                        | -                         |
| opik-openclaw     | manifest-fields-checked | log   | plugin manifest fields were compared with target OpenClaw manifest types              | plugins/opik-openclaw/openclaw.plugin.json                                                                                                                                                                                                                                                                                 | -                         |
| opik-openclaw     | package-metadata        | log   | selected package metadata for plugin contract checks                                  | plugins/opik-openclaw/package.json, @opik/opik-openclaw, version:0.2.14                                                                                                                                                                                                                                                    | -                         |
| lossless-claw     | seam-inventory          | log   | observed 5 hooks, 3 registrations, and 0 manifest contracts                           | hook:before_prompt_build, hook:before_reset, hook:gateway_start, hook:gateway_stop, hook:session_end, registration:registerCommand, registration:registerContextEngine, registration:registerTool                                                                                                                          | -                         |
| lossless-claw     | hook-names-present      | log   | all observed hooks exist in the target OpenClaw hook registry                         | before_prompt_build, before_reset, gateway_start, gateway_stop, session_end                                                                                                                                                                                                                                                | -                         |
| lossless-claw     | api-registrars-present  | log   | all observed api.register* calls exist in the target OpenClaw plugin API builder      | registerCommand, registerContextEngine, registerTool                                                                                                                                                                                                                                                                       | -                         |
| lossless-claw     | sdk-exports-present     | log   | all observed plugin SDK imports exist in target OpenClaw package exports              | openclaw/plugin-sdk                                                                                                                                                                                                                                                                                                        | -                         |
| lossless-claw     | manifest-fields-checked | log   | plugin manifest fields were compared with target OpenClaw manifest types              | plugins/lossless-claw/openclaw.plugin.json                                                                                                                                                                                                                                                                                 | -                         |
| lossless-claw     | package-metadata        | log   | selected package metadata for plugin contract checks                                  | plugins/lossless-claw/package.json, @martian-engineering/lossless-claw, version:0.9.2                                                                                                                                                                                                                                      | -                         |
| connectclaw       | seam-inventory          | log   | observed 1 hooks, 3 registrations, and 0 manifest contracts                           | hook:before_agent_start, registration:registerCommand, registration:registerService, registration:registerTool                                                                                                                                                                                                             | -                         |
| connectclaw       | hook-names-present      | log   | all observed hooks exist in the target OpenClaw hook registry                         | before_agent_start                                                                                                                                                                                                                                                                                                         | -                         |
| connectclaw       | api-registrars-present  | log   | all observed api.register* calls exist in the target OpenClaw plugin API builder      | registerCommand, registerService, registerTool                                                                                                                                                                                                                                                                             | -                         |
| connectclaw       | sdk-exports-present     | log   | all observed plugin SDK imports exist in target OpenClaw package exports              | openclaw/plugin-sdk                                                                                                                                                                                                                                                                                                        | -                         |
| connectclaw       | manifest-fields-checked | log   | plugin manifest fields were compared with target OpenClaw manifest types              | plugins/connectclaw/packages/plugin/openclaw.plugin.json                                                                                                                                                                                                                                                                   | -                         |
| connectclaw       | package-metadata        | log   | selected package metadata for plugin contract checks                                  | plugins/connectclaw/packages/plugin/package.json, @connectclaw/connectclaw, version:0.3.0                                                                                                                                                                                                                                  | -                         |
| hyperspell        | seam-inventory          | log   | observed 5 hooks, 4 registrations, and 0 manifest contracts                           | hook:after_compaction, hook:agent_end, hook:before_agent_start, hook:file_changed, hook:session_end, registration:registerCli, registration:registerCommand, registration:registerService, registration:registerTool                                                                                                       | -                         |
| hyperspell        | api-registrars-present  | log   | all observed api.register* calls exist in the target OpenClaw plugin API builder      | registerCli, registerCommand, registerService, registerTool                                                                                                                                                                                                                                                                | -                         |
| hyperspell        | sdk-exports-present     | log   | all observed plugin SDK imports exist in target OpenClaw package exports              | openclaw/plugin-sdk                                                                                                                                                                                                                                                                                                        | -                         |
| hyperspell        | manifest-fields-checked | log   | plugin manifest fields were compared with target OpenClaw manifest types              | plugins/hyperspell/openclaw.plugin.json                                                                                                                                                                                                                                                                                    | -                         |
| hyperspell        | package-metadata        | log   | selected package metadata for plugin contract checks                                  | plugins/hyperspell/package.json, @hyperspell/openclaw-hyperspell, version:0.12.0                                                                                                                                                                                                                                           | -                         |
| honcho            | seam-inventory          | log   | observed 7 hooks, 5 registrations, and 0 manifest contracts                           | hook:agent_end, hook:before_agent_start, hook:before_compaction, hook:before_prompt_build, hook:before_reset, hook:gateway_start, hook:subagent_spawned, registration:definePluginEntry, registration:registerCli, registration:registerMemoryPromptSection, registration:registerMemoryRuntime, registration:registerTool | -                         |
| honcho            | hook-names-present      | log   | all observed hooks exist in the target OpenClaw hook registry                         | agent_end, before_agent_start, before_compaction, before_prompt_build, before_reset, gateway_start, subagent_spawned                                                                                                                                                                                                       | -                         |
| honcho            | api-registrars-present  | log   | all observed api.register* calls exist in the target OpenClaw plugin API builder      | registerCli, registerMemoryPromptSection, registerMemoryRuntime, registerTool                                                                                                                                                                                                                                              | -                         |
| honcho            | sdk-exports-present     | log   | all observed plugin SDK imports exist in target OpenClaw package exports              | openclaw/plugin-sdk, openclaw/plugin-sdk/memory-core, openclaw/plugin-sdk/plugin-entry                                                                                                                                                                                                                                     | -                         |
| honcho            | manifest-fields-checked | log   | plugin manifest fields were compared with target OpenClaw manifest types              | plugins/honcho/openclaw.plugin.json                                                                                                                                                                                                                                                                                        | -                         |
| honcho            | package-metadata        | log   | selected package metadata for plugin contract checks                                  | plugins/honcho/package.json, @honcho-ai/openclaw-honcho, version:1.3.3                                                                                                                                                                                                                                                     | -                         |
| composio          | seam-inventory          | log   | observed 1 hooks, 2 registrations, and 0 manifest contracts                           | hook:before_prompt_build, registration:registerCli, registration:registerTool                                                                                                                                                                                                                                              | -                         |
| composio          | hook-names-present      | log   | all observed hooks exist in the target OpenClaw hook registry                         | before_prompt_build                                                                                                                                                                                                                                                                                                        | -                         |
| composio          | api-registrars-present  | log   | all observed api.register* calls exist in the target OpenClaw plugin API builder      | registerCli, registerTool                                                                                                                                                                                                                                                                                                  | -                         |
| composio          | sdk-exports-present     | log   | all observed plugin SDK imports exist in target OpenClaw package exports              | openclaw/plugin-sdk                                                                                                                                                                                                                                                                                                        | -                         |
| composio          | manifest-fields-checked | log   | plugin manifest fields were compared with target OpenClaw manifest types              | plugins/composio/openclaw.plugin.json                                                                                                                                                                                                                                                                                      | -                         |
| composio          | package-metadata        | log   | selected package metadata for plugin contract checks                                  | plugins/composio/package.json, @composio/openclaw-plugin, version:0.0.11                                                                                                                                                                                                                                                   | -                         |
| memu-engine       | seam-inventory          | log   | observed 0 hooks, 1 registrations, and 0 manifest contracts                           | registration:registerTool                                                                                                                                                                                                                                                                                                  | -                         |
| memu-engine       | hook-names-present      | log   | all observed hooks exist in the target OpenClaw hook registry                         | -                                                                                                                                                                                                                                                                                                                          | -                         |
| memu-engine       | api-registrars-present  | log   | all observed api.register* calls exist in the target OpenClaw plugin API builder      | registerTool                                                                                                                                                                                                                                                                                                               | -                         |
| memu-engine       | sdk-exports-present     | log   | all observed plugin SDK imports exist in target OpenClaw package exports              | openclaw/plugin-sdk                                                                                                                                                                                                                                                                                                        | -                         |
| memu-engine       | manifest-fields-checked | log   | plugin manifest fields were compared with target OpenClaw manifest types              | plugins/memu-engine/openclaw.plugin.json                                                                                                                                                                                                                                                                                   | -                         |
| memu-engine       | package-metadata        | log   | selected package metadata for plugin contract checks                                  | plugins/memu-engine/package.json, memu-engine, version:0.3.6                                                                                                                                                                                                                                                               | -                         |
| secureclaw        | seam-inventory          | log   | observed 1 hooks, 2 registrations, and 0 manifest contracts                           | hook:gateway_start, registration:registerCli, registration:registerService                                                                                                                                                                                                                                                 | -                         |
| secureclaw        | hook-names-present      | log   | all observed hooks exist in the target OpenClaw hook registry                         | gateway_start                                                                                                                                                                                                                                                                                                              | -                         |
| secureclaw        | api-registrars-present  | log   | all observed api.register* calls exist in the target OpenClaw plugin API builder      | registerCli, registerService                                                                                                                                                                                                                                                                                               | -                         |
| secureclaw        | manifest-fields-checked | log   | plugin manifest fields were compared with target OpenClaw manifest types              | plugins/secureclaw/secureclaw/openclaw.plugin.json                                                                                                                                                                                                                                                                         | -                         |
| secureclaw        | package-metadata        | log   | selected package metadata for plugin contract checks                                  | plugins/secureclaw/secureclaw/package.json, @adversa/secureclaw, version:2.2.0                                                                                                                                                                                                                                             | -                         |
| memos-cloud       | seam-inventory          | log   | observed 2 hooks, 1 registrations, and 0 manifest contracts                           | hook:agent_end, hook:before_agent_start, registration:registerHook                                                                                                                                                                                                                                                         | -                         |
| memos-cloud       | hook-names-present      | log   | all observed hooks exist in the target OpenClaw hook registry                         | agent_end, before_agent_start                                                                                                                                                                                                                                                                                              | -                         |
| memos-cloud       | api-registrars-present  | log   | all observed api.register* calls exist in the target OpenClaw plugin API builder      | registerHook                                                                                                                                                                                                                                                                                                               | -                         |
| memos-cloud       | manifest-fields-checked | log   | plugin manifest fields were compared with target OpenClaw manifest types              | plugins/memos-cloud/openclaw.plugin.json                                                                                                                                                                                                                                                                                   | -                         |
| memos-cloud       | package-metadata        | log   | selected package metadata for plugin contract checks                                  | plugins/memos-cloud/package.json, @memtensor/memos-cloud-openclaw-plugin, version:0.1.13                                                                                                                                                                                                                                   | -                         |
| clawmetry         | seam-inventory          | log   | observed 0 hooks, 2 registrations, and 0 manifest contracts                           | registration:definePluginEntry, registration:registerService                                                                                                                                                                                                                                                               | -                         |
| clawmetry         | hook-names-present      | log   | all observed hooks exist in the target OpenClaw hook registry                         | -                                                                                                                                                                                                                                                                                                                          | -                         |
| clawmetry         | api-registrars-present  | log   | all observed api.register* calls exist in the target OpenClaw plugin API builder      | registerService                                                                                                                                                                                                                                                                                                            | -                         |
| clawmetry         | sdk-exports-present     | log   | all observed plugin SDK imports exist in target OpenClaw package exports              | openclaw/plugin-sdk/diagnostics-otel, openclaw/plugin-sdk/plugin-entry                                                                                                                                                                                                                                                     | -                         |
| clawmetry         | package-metadata        | log   | selected package metadata for plugin contract checks                                  | plugins/clawmetry/clawhub-plugin/package.json, @clawmetry/openclaw-plugin, version:1.0.0                                                                                                                                                                                                                                   | -                         |
| codex-app-server  | seam-inventory          | log   | observed 1 hooks, 3 registrations, and 0 manifest contracts                           | hook:inbound_claim, registration:registerCommand, registration:registerInteractiveHandler, registration:registerService                                                                                                                                                                                                    | -                         |
| codex-app-server  | hook-names-present      | log   | all observed hooks exist in the target OpenClaw hook registry                         | inbound_claim                                                                                                                                                                                                                                                                                                              | -                         |
| codex-app-server  | api-registrars-present  | log   | all observed api.register* calls exist in the target OpenClaw plugin API builder      | registerCommand, registerInteractiveHandler, registerService                                                                                                                                                                                                                                                               | -                         |
| codex-app-server  | manifest-fields-checked | log   | plugin manifest fields were compared with target OpenClaw manifest types              | plugins/codex-app-server/openclaw.plugin.json                                                                                                                                                                                                                                                                              | -                         |
| codex-app-server  | package-metadata        | log   | selected package metadata for plugin contract checks                                  | plugins/codex-app-server/package.json, openclaw-codex-app-server, version:0.0.0                                                                                                                                                                                                                                            | -                         |
| web-search-plus   | seam-inventory          | log   | observed 0 hooks, 1 registrations, and 0 manifest contracts                           | registration:registerTool                                                                                                                                                                                                                                                                                                  | -                         |
| web-search-plus   | hook-names-present      | log   | all observed hooks exist in the target OpenClaw hook registry                         | -                                                                                                                                                                                                                                                                                                                          | -                         |
| web-search-plus   | api-registrars-present  | log   | all observed api.register* calls exist in the target OpenClaw plugin API builder      | registerTool                                                                                                                                                                                                                                                                                                               | -                         |
| web-search-plus   | manifest-fields-checked | log   | plugin manifest fields were compared with target OpenClaw manifest types              | plugins/web-search-plus/openclaw.plugin.json                                                                                                                                                                                                                                                                               | -                         |
| web-search-plus   | package-metadata        | log   | selected package metadata for plugin contract checks                                  | plugins/web-search-plus/package.json, web-search-plus-plugin-v2, version:2.2.9                                                                                                                                                                                                                                             | -                         |
| apify             | seam-inventory          | log   | observed 0 hooks, 2 registrations, and 0 manifest contracts                           | registration:registerCli, registration:registerTool                                                                                                                                                                                                                                                                        | -                         |
| apify             | hook-names-present      | log   | all observed hooks exist in the target OpenClaw hook registry                         | -                                                                                                                                                                                                                                                                                                                          | -                         |
| apify             | api-registrars-present  | log   | all observed api.register* calls exist in the target OpenClaw plugin API builder      | registerCli, registerTool                                                                                                                                                                                                                                                                                                  | -                         |
| apify             | sdk-exports-present     | log   | all observed plugin SDK imports exist in target OpenClaw package exports              | openclaw/plugin-sdk, openclaw/plugin-sdk/core                                                                                                                                                                                                                                                                              | -                         |
| apify             | manifest-fields-checked | log   | plugin manifest fields were compared with target OpenClaw manifest types              | plugins/apify/openclaw.plugin.json                                                                                                                                                                                                                                                                                         | -                         |
| apify             | package-metadata        | log   | selected package metadata for plugin contract checks                                  | plugins/apify/package.json, @apify/apify-openclaw-plugin, version:0.2.0                                                                                                                                                                                                                                                    | -                         |
| inworld-tts       | seam-inventory          | log   | observed 0 hooks, 2 registrations, and 1 manifest contracts                           | registration:definePluginEntry, registration:registerSpeechProvider, manifestContract:speechProviders                                                                                                                                                                                                                      | -                         |
| inworld-tts       | hook-names-present      | log   | all observed hooks exist in the target OpenClaw hook registry                         | -                                                                                                                                                                                                                                                                                                                          | -                         |
| inworld-tts       | api-registrars-present  | log   | all observed api.register* calls exist in the target OpenClaw plugin API builder      | registerSpeechProvider                                                                                                                                                                                                                                                                                                     | -                         |
| inworld-tts       | sdk-exports-present     | log   | all observed plugin SDK imports exist in target OpenClaw package exports              | openclaw/plugin-sdk/plugin-entry, openclaw/plugin-sdk/secret-input, openclaw/plugin-sdk/speech                                                                                                                                                                                                                             | -                         |
| inworld-tts       | manifest-fields-checked | log   | plugin manifest fields were compared with target OpenClaw manifest types              | plugins/inworld-tts/openclaw.plugin.json                                                                                                                                                                                                                                                                                   | -                         |
| inworld-tts       | package-metadata        | log   | selected package metadata for plugin contract checks                                  | plugins/inworld-tts/package.json, openclaw-inworld-tts, version:1.0.2                                                                                                                                                                                                                                                      | -                         |
| inworld-tts       | declarative-contracts   | log   | fixture declares manifest contracts that can be checked without executing plugin code | speechProviders                                                                                                                                                                                                                                                                                                            | -                         |
| agentchat         | compat-record-present   | log   | target OpenClaw checkout has a matching compat registry record                        | channel-env-vars, status:deprecated                                                                                                                                                                                                                                                                                        | channel-env-vars          |
| qqbot             | compat-record-present   | log   | target OpenClaw checkout has a matching compat registry record                        | legacy-root-sdk-import, status:deprecated                                                                                                                                                                                                                                                                                  | legacy-root-sdk-import    |
| a2a-gateway       | compat-record-present   | log   | target OpenClaw checkout has a matching compat registry record                        | legacy-root-sdk-import, status:deprecated                                                                                                                                                                                                                                                                                  | legacy-root-sdk-import    |
| hasdata           | compat-record-present   | log   | target OpenClaw checkout has a matching compat registry record                        | provider-auth-env-vars, status:deprecated                                                                                                                                                                                                                                                                                  | provider-auth-env-vars    |
| llm-trace-phoenix | compat-record-present   | log   | target OpenClaw checkout has a matching compat registry record                        | legacy-root-sdk-import, status:deprecated                                                                                                                                                                                                                                                                                  | legacy-root-sdk-import    |
| opik-openclaw     | compat-record-present   | log   | target OpenClaw checkout has a matching compat registry record                        | legacy-root-sdk-import, status:deprecated                                                                                                                                                                                                                                                                                  | legacy-root-sdk-import    |
| lossless-claw     | compat-record-present   | log   | target OpenClaw checkout has a matching compat registry record                        | legacy-root-sdk-import, status:deprecated                                                                                                                                                                                                                                                                                  | legacy-root-sdk-import    |
| connectclaw       | compat-record-present   | log   | target OpenClaw checkout has a matching compat registry record                        | legacy-root-sdk-import, status:deprecated                                                                                                                                                                                                                                                                                  | legacy-root-sdk-import    |
| connectclaw       | compat-record-present   | log   | target OpenClaw checkout has a matching compat registry record                        | legacy-before-agent-start, status:deprecated                                                                                                                                                                                                                                                                               | legacy-before-agent-start |
| hyperspell        | compat-record-present   | log   | target OpenClaw checkout has a matching compat registry record                        | legacy-root-sdk-import, status:deprecated                                                                                                                                                                                                                                                                                  | legacy-root-sdk-import    |
| hyperspell        | compat-record-present   | log   | target OpenClaw checkout has a matching compat registry record                        | legacy-before-agent-start, status:deprecated                                                                                                                                                                                                                                                                               | legacy-before-agent-start |
| honcho            | compat-record-present   | log   | target OpenClaw checkout has a matching compat registry record                        | legacy-root-sdk-import, status:deprecated                                                                                                                                                                                                                                                                                  | legacy-root-sdk-import    |
| honcho            | compat-record-present   | log   | target OpenClaw checkout has a matching compat registry record                        | legacy-before-agent-start, status:deprecated                                                                                                                                                                                                                                                                               | legacy-before-agent-start |
| composio          | compat-record-present   | log   | target OpenClaw checkout has a matching compat registry record                        | legacy-root-sdk-import, status:deprecated                                                                                                                                                                                                                                                                                  | legacy-root-sdk-import    |
| memu-engine       | compat-record-present   | log   | target OpenClaw checkout has a matching compat registry record                        | legacy-root-sdk-import, status:deprecated                                                                                                                                                                                                                                                                                  | legacy-root-sdk-import    |
| memos-cloud       | compat-record-present   | log   | target OpenClaw checkout has a matching compat registry record                        | legacy-before-agent-start, status:deprecated                                                                                                                                                                                                                                                                               | legacy-before-agent-start |
| codex-app-server  | compat-record-present   | log   | target OpenClaw checkout has a matching compat registry record                        | legacy-root-sdk-import, status:deprecated                                                                                                                                                                                                                                                                                  | legacy-root-sdk-import    |
| apify             | compat-record-present   | log   | target OpenClaw checkout has a matching compat registry record                        | legacy-root-sdk-import, status:deprecated                                                                                                                                                                                                                                                                                  | legacy-root-sdk-import    |
| inworld-tts       | compat-record-present   | log   | target OpenClaw checkout has a matching compat registry record                        | provider-auth-env-vars, status:deprecated                                                                                                                                                                                                                                                                                  | provider-auth-env-vars    |
