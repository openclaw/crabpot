# Crabpot Issue Findings

Generated: deterministic
Status: PASS


## Crabpot Target Context

- **OpenClaw host track:** `latest`
- **Plugin artifact track:** `latest`
- **Fixture set:** `all (59 fixtures)`
- **Package availability:** `reports/crabpot-package-availability.json` (0 OpenClaw failures, 0 fallbacks)
## Triage Summary

| Metric                     | Value |
| -------------------------- | ----- |
| Issue findings             | 338   |
| Open issue findings        | 338   |
| Runtime-covered findings   | 0     |
| Runtime-partial findings   | 0     |
| 🔴 P0                      | 7     |
| 🟠 P1                      | 123   |
| Open 🔴 P0                 | 7     |
| Open 🟠 P1                 | 123   |
| Live issues                | 7     |
| Live P0 issues             | 7     |
| Compat gaps                | 105   |
| Deprecation warnings       | 21    |
| Inspector gaps             | 160   |
| Open inspector gaps        | 160   |
| Runtime coverage artifacts | 0     |
| Upstream metadata          | 45    |
| Contract probes            | 232   |

## Triage Overview

| Class               | Count | P0 | Meaning                                                                                                                                                  |
| ------------------- | ----- | -- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| live-issue          | 7     | 7  | Potential runtime breakage in the target OpenClaw/plugin pair. P0 only when it is not a deprecated compat seam.                                          |
| compat-gap          | 105   | -  | Compatibility behavior is needed but missing from the target OpenClaw compat registry.                                                                   |
| deprecation-warning | 21    | -  | Plugin uses a supported but deprecated compatibility seam; keep it wired while migration exists.                                                         |
| inspector-gap       | 160   | -  | Plugin Inspector needs stronger capture/probe evidence before making contract judgments. Runtime-covered rows are proof-backed and not open report work. |
| upstream-metadata   | 45    | -  | Plugin package or manifest metadata should improve upstream; not a target OpenClaw live break by itself.                                                 |
| fixture-regression  | 0     | -  | Fixture no longer exposes an expected seam; investigate fixture pin or scanner drift.                                                                    |

## P0 Live Issues

- 🔴 P0 **aiwerk-mcp-bridge** `live-issue` `core-compat-adapter`
  - **unknown-hook-name**: aiwerk-mcp-bridge: fixture uses a hook missing from target OpenClaw
  - state: blocking · compat:none · live
  - evidence:
    - deactivate @ plugins/aiwerk-mcp-bridge/.crabpot-package/dist/index.js:389
    - deactivate @ plugins/aiwerk-mcp-bridge/.crabpot-package/index.ts:462

- 🔴 P0 **connectclaw** `live-issue` `core-compat-adapter`
  - **unknown-hook-name**: connectclaw: fixture uses a hook missing from target OpenClaw
  - state: blocking · compat:none · live
  - evidence:
    - [before_agent_start @ hooks.ts:17](https://github.com/osipov-anton/connectclaw/blob/7a4e2646e914de075435b3837123cc03c3edae36/packages/plugin/src/hooks.ts#L17)

- 🔴 P0 **kitchen-sink** `live-issue` `core-compat-adapter`
  - **unknown-hook-name**: kitchen-sink: fixture uses a hook missing from target OpenClaw
  - state: blocking · compat:none · live
  - evidence:
    - [skill_proposal_changed @ generated-hooks.js:40](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-hooks.js#L40)
    - [skill_proposal_evaluate @ generated-hooks.js:41](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-hooks.js#L41)

- 🔴 P0 **kitchen-sink** `live-issue` `core-compat-adapter`
  - **unknown-registration-name**: kitchen-sink: fixture calls a registrar missing from target OpenClaw
  - state: blocking · compat:none · live
  - evidence:
    - [registerCodexAppServerExtensionFactory @ generated-registrars.js:12](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L12)
    - [registerHostedMediaResolver @ generated-registrars.js:23](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L23)
    - [registerTextTransforms @ generated-registrars.js:51](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L51)

- 🔴 P0 **memos-cloud** `live-issue` `core-compat-adapter`
  - **unknown-hook-name**: memos-cloud: fixture uses a hook missing from target OpenClaw
  - state: blocking · compat:none · live
  - evidence:
    - [before_agent_start @ index.js:857](https://github.com/MemTensor/MemOS-Cloud-OpenClaw-Plugin/blob/a317661691bda94054d3d35f8c226e8bfe0018f7/index.js#L857)

- 🔴 P0 **openclaw-telemetry** `live-issue` `core-compat-adapter`
  - **unknown-hook-name**: openclaw-telemetry: fixture uses a hook missing from target OpenClaw
  - state: blocking · compat:none · live
  - evidence:
    - [before_agent_start @ index.ts:53](https://github.com/knostic/openclaw-telemetry/blob/86c2458a0dfe82d639c208c5220396feb9d53c45/index.ts#L53)

- 🔴 P0 **opik-openclaw** `live-issue` `core-compat-adapter`
  - **unknown-hook-name**: opik-openclaw: fixture uses a hook missing from target OpenClaw
  - state: blocking · compat:none · live
  - evidence:
    - [subagent_spawning @ subagent.ts:38](https://github.com/comet-ml/opik-openclaw/blob/fac4cc3f0fa96e96b1ee2583a0525f3681b017b5/src/service/hooks/subagent.ts#L38)

## Other Live Issues

_none_

## Compat Gaps

- 🟠 P1 **a2a-gateway** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: a2a-gateway: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **agentchat** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: agentchat: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - channel-env-vars

- 🟠 P1 **agentchat** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: agentchat: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - channel.runtime.envelope-config-metadata

- 🟠 P1 **agentchat** `compat-gap` `core-compat-adapter`
  - **sdk-export-missing**: agentchat: plugin SDK import aliases are missing from target package exports
  - state: open · compat:untracked
  - evidence:
    - [openclaw/plugin-sdk/channel-lifecycle @ gateway.ts:27](https://github.com/agentchatme/agentchat-openclaw/blob/caee25ad8ed7a38cc4281bda397c7e0e7e90ce6a/src/binding/gateway.ts#L27)

- 🟠 P1 **bluebubbles** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: bluebubbles: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - channel.runtime.envelope-config-metadata

- 🟠 P1 **bluebubbles** `compat-gap` `core-compat-adapter`
  - **sdk-export-missing**: bluebubbles: plugin SDK import aliases are missing from target package exports
  - state: open · compat:untracked
  - evidence:
    - [openclaw/plugin-sdk/channel-lifecycle @ channel-BSIXOcHe.js:13](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/bluebubbles/dist/channel-BSIXOcHe.js#L13)
    - [openclaw/plugin-sdk/channel-reply-pipeline @ monitor-processing-Dy-LY2QQ.js:28](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/bluebubbles/dist/monitor-processing-Dy-LY2QQ.js#L28)
    - [openclaw/plugin-sdk/channel-streaming @ probe-B4I0cEVm.js:6](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/bluebubbles/dist/probe-B4I0cEVm.js#L6)
    - [openclaw/plugin-sdk/command-auth @ monitor-processing-Dy-LY2QQ.js:29](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/bluebubbles/dist/monitor-processing-Dy-LY2QQ.js#L29)
    - [openclaw/plugin-sdk/text-runtime @ channel-BSIXOcHe.js:18](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/bluebubbles/dist/channel-BSIXOcHe.js#L18)
    - [openclaw/plugin-sdk/text-runtime @ monitor-processing-Dy-LY2QQ.js:8](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/bluebubbles/dist/monitor-processing-Dy-LY2QQ.js#L8)
    - [openclaw/plugin-sdk/text-runtime @ probe-B4I0cEVm.js:4](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/bluebubbles/dist/probe-B4I0cEVm.js#L4)
    - [openclaw/plugin-sdk/text-runtime @ reactions-D1ETgpPi.js:3](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/bluebubbles/dist/reactions-D1ETgpPi.js#L3)
    - [openclaw/plugin-sdk/text-runtime @ webhook-shared-CoiIKIWN.js:1](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/bluebubbles/dist/webhook-shared-CoiIKIWN.js#L1)
    - [openclaw/plugin-sdk/webhook-path @ webhook-shared-CoiIKIWN.js:2](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/bluebubbles/dist/webhook-shared-CoiIKIWN.js#L2)
    - [openclaw/plugin-sdk/zod @ config-schema-a7F7uzDv.js:3](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/bluebubbles/dist/config-schema-a7F7uzDv.js#L3)

- 🟠 P1 **brave-plugin** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: brave-plugin: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **clawmetry** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: clawmetry: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **clawmetry** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: clawmetry: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - hook.llm-observer.privacy-payload

- 🟠 P1 **clawrouter** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: clawrouter: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **codex** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: codex: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **codex-app-server** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: codex-app-server: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **connectclaw** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: connectclaw: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **connectclaw** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: connectclaw: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - legacy-before-agent-start

- 🟠 P1 **connectclaw** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: connectclaw: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - legacy-root-sdk-import

- 🟠 P1 **connectclaw** `compat-gap` `core-compat-adapter`
  - **sdk-export-missing**: connectclaw: plugin SDK import aliases are missing from target package exports
  - state: open · compat:untracked
  - evidence:
    - [openclaw/plugin-sdk @ tools.ts:2](https://github.com/osipov-anton/connectclaw/blob/7a4e2646e914de075435b3837123cc03c3edae36/packages/plugin/src/tools.ts#L2)

- 🟠 P1 **ddingtalk** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: ddingtalk: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - channel-env-vars

- 🟠 P1 **ddingtalk** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: ddingtalk: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - channel.runtime.envelope-config-metadata

- 🟠 P1 **diagnostics-otel** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: diagnostics-otel: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **diagnostics-prometheus** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: diagnostics-prometheus: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **diffs** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: diffs: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **dingtalk-connector** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: dingtalk-connector: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **dingtalk-connector** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: dingtalk-connector: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - channel.runtime.envelope-config-metadata

- 🟠 P1 **dingtalk-connector** `compat-gap` `core-compat-adapter`
  - **sdk-export-missing**: dingtalk-connector: plugin SDK import aliases are missing from target package exports
  - state: open · compat:untracked
  - evidence:
    - [openclaw/plugin-sdk/channel-runtime @ reply-dispatcher.ts:21](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/reply-dispatcher.ts#L21)
    - [openclaw/plugin-sdk/config-runtime @ gateway-methods.ts:131](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/gateway-methods.ts#L131)
    - [openclaw/plugin-sdk/config-runtime @ gateway-methods.ts:191](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/gateway-methods.ts#L191)
    - [openclaw/plugin-sdk/config-runtime @ gateway-methods.ts:259](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/gateway-methods.ts#L259)
    - [openclaw/plugin-sdk/config-runtime @ gateway-methods.ts:312](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/gateway-methods.ts#L312)
    - [openclaw/plugin-sdk/config-runtime @ gateway-methods.ts:352](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/gateway-methods.ts#L352)
    - [openclaw/plugin-sdk/config-runtime @ gateway-methods.ts:389](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/gateway-methods.ts#L389)
    - [openclaw/plugin-sdk/config-runtime @ gateway-methods.ts:426](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/gateway-methods.ts#L426)
    - [openclaw/plugin-sdk/config-runtime @ gateway-methods.ts:453](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/gateway-methods.ts#L453)
    - [openclaw/plugin-sdk/config-runtime @ gateway-methods.ts:507](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/gateway-methods.ts#L507)
    - [openclaw/plugin-sdk/config-runtime @ gateway-methods.ts:594](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/gateway-methods.ts#L594)
    - [openclaw/plugin-sdk/config-runtime @ gateway-methods.ts:61](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/gateway-methods.ts#L61)
    - [openclaw/plugin-sdk/config-runtime @ gateway-methods.ts:653](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/gateway-methods.ts#L653)
    - [openclaw/plugin-sdk/config-runtime @ gateway-methods.ts:720](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/gateway-methods.ts#L720)
    - [openclaw/plugin-sdk/config-runtime @ card-bridge.ts:186](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/services/card-bridge.ts#L186)
    - [openclaw/plugin-sdk/config-runtime @ card-bridge.ts:339](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/services/card-bridge.ts#L339)

- 🟠 P1 **dingtalk-doc** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: dingtalk-doc: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - hook.before_tool_call.terminal-block-approval

- 🟠 P1 **dingtalk-doc** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: dingtalk-doc: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - legacy-root-sdk-import

- 🟠 P1 **dingtalk-doc** `compat-gap` `core-compat-adapter`
  - **sdk-export-missing**: dingtalk-doc: plugin SDK import aliases are missing from target package exports
  - state: open · compat:untracked
  - evidence:
    - [openclaw/plugin-sdk @ index.ts:11](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/index.ts#L11)

- 🟠 P1 **discord** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: discord: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **discord** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: discord: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - channel.runtime.envelope-config-metadata

- 🟠 P1 **feishu** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: feishu: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - channel.runtime.envelope-config-metadata

- 🟠 P1 **google-meet** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: google-meet: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **hasdata** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: hasdata: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - provider-auth-env-vars

- 🟠 P1 **honcho** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: honcho: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **honcho** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: honcho: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - hook.llm-observer.privacy-payload

- 🟠 P1 **hyperspell** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: hyperspell: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **inworld-tts** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: inworld-tts: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **inworld-tts** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: inworld-tts: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - provider-auth-env-vars

- 🟠 P1 **kitchen-sink** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: kitchen-sink: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **kitchen-sink** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: kitchen-sink: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - channel.runtime.envelope-config-metadata

- 🟠 P1 **kitchen-sink** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: kitchen-sink: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - hook.before_tool_call.terminal-block-approval

- 🟠 P1 **kitchen-sink** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: kitchen-sink: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - hook.llm-observer.privacy-payload

- 🟠 P1 **lightclawbot** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: lightclawbot: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **lightclawbot** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: lightclawbot: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - channel.runtime.envelope-config-metadata

- 🟠 P1 **lightclawbot** `compat-gap` `core-compat-adapter`
  - **sdk-export-missing**: lightclawbot: plugin SDK import aliases are missing from target package exports
  - state: open · compat:untracked
  - evidence:
    - openclaw/plugin-sdk/channel-reply-pipeline @ plugins/lightclawbot/.crabpot-package/dist/src/inbound.js:264
    - openclaw/plugin-sdk/config-runtime @ plugins/lightclawbot/.crabpot-package/dist/src/utils/openclaw-compat.js:84

- 🟠 P1 **llm-trace-phoenix** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: llm-trace-phoenix: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - hook.llm-observer.privacy-payload

- 🟠 P1 **lossless-claw** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: lossless-claw: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **matrix** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: matrix: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **matrix** `compat-gap` `core-compat-adapter`
  - **sdk-export-missing**: matrix: plugin SDK import aliases are missing from target package exports
  - state: open · compat:untracked
  - evidence:
    - [openclaw/plugin-sdk/plugin-state-test-runtime @ doctor-contract-api.test-support.ts:7](https://github.com/openclaw/openclaw/blob/5f84c5b8a9889ab7035c197bc25bbe0aa8a20765/extensions/matrix/doctor-contract-api.test-support.ts#L7)
    - [openclaw/plugin-sdk/plugin-state-test-runtime @ sync-store.test-support.ts:5](https://github.com/openclaw/openclaw/blob/5f84c5b8a9889ab7035c197bc25bbe0aa8a20765/extensions/matrix/src/matrix/client/sync-store.test-support.ts#L5)
    - [openclaw/plugin-sdk/plugin-state-test-runtime @ crypto-persistence.test-support.ts:5](https://github.com/openclaw/openclaw/blob/5f84c5b8a9889ab7035c197bc25bbe0aa8a20765/extensions/matrix/src/matrix/sdk/crypto-persistence.test-support.ts#L5)
    - [openclaw/plugin-sdk/plugin-state-test-runtime @ recovery-persistence.test-support.ts:7](https://github.com/openclaw/openclaw/blob/5f84c5b8a9889ab7035c197bc25bbe0aa8a20765/extensions/matrix/src/matrix/sdk/recovery-persistence.test-support.ts#L7)
    - [openclaw/plugin-sdk/sqlite-runtime-testing @ sync-store.test-support.ts:6](https://github.com/openclaw/openclaw/blob/5f84c5b8a9889ab7035c197bc25bbe0aa8a20765/extensions/matrix/src/matrix/client/sync-store.test-support.ts#L6)
    - [openclaw/plugin-sdk/test-env @ test-support.ts:2](https://github.com/openclaw/openclaw/blob/5f84c5b8a9889ab7035c197bc25bbe0aa8a20765/extensions/matrix/test-support.ts#L2)

- 🟠 P1 **mattermost** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: mattermost: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **mattermost** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: mattermost: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - channel.runtime.envelope-config-metadata

- 🟠 P1 **mattermost** `compat-gap` `core-compat-adapter`
  - **sdk-export-missing**: mattermost: plugin SDK import aliases are missing from target package exports
  - state: open · compat:untracked
  - evidence:
    - [openclaw/plugin-sdk/channel-ingress-test-runtime @ monitor.ingress-debounce.test-support.ts:5](https://github.com/openclaw/openclaw/blob/5f84c5b8a9889ab7035c197bc25bbe0aa8a20765/extensions/mattermost/src/mattermost/monitor.ingress-debounce.test-support.ts#L5)
    - [openclaw/plugin-sdk/test-env @ monitor.ingress-debounce.test-support.ts:16](https://github.com/openclaw/openclaw/blob/5f84c5b8a9889ab7035c197bc25bbe0aa8a20765/extensions/mattermost/src/mattermost/monitor.ingress-debounce.test-support.ts#L16)
    - [openclaw/plugin-sdk/test-env @ reactions.test-helpers.ts:1](https://github.com/openclaw/openclaw/blob/5f84c5b8a9889ab7035c197bc25bbe0aa8a20765/extensions/mattermost/src/mattermost/reactions.test-helpers.ts#L1)

- 🟠 P1 **mcp-adapter** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: mcp-adapter: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **memory-lancedb** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: memory-lancedb: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **memory-lancedb** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: memory-lancedb: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - hook.llm-observer.privacy-payload

- 🟠 P1 **memory-tencentdb** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: memory-tencentdb: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **memory-tencentdb** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: memory-tencentdb: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - hook.llm-observer.privacy-payload

- 🟠 P1 **memory-tencentdb** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: memory-tencentdb: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - legacy-root-sdk-import

- 🟠 P1 **memory-tencentdb** `compat-gap` `core-compat-adapter`
  - **sdk-export-missing**: memory-tencentdb: plugin SDK import aliases are missing from target package exports
  - state: open · compat:untracked
  - evidence:
    - openclaw/plugin-sdk @ plugins/memory-tencentdb/.crabpot-package/dist/index.mjs:8466
    - openclaw/plugin-sdk @ plugins/memory-tencentdb/.crabpot-package/src/offload/index.ts:2190

- 🟠 P1 **memos-cloud** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: memos-cloud: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **memos-cloud** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: memos-cloud: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - hook.llm-observer.privacy-payload

- 🟠 P1 **memos-cloud** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: memos-cloud: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - legacy-before-agent-start

- 🟠 P1 **mocrane-wecom** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: mocrane-wecom: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **mocrane-wecom** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: mocrane-wecom: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - channel.runtime.envelope-config-metadata

- 🟠 P1 **mocrane-wecom** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: mocrane-wecom: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - legacy-root-sdk-import

- 🟠 P1 **mocrane-wecom** `compat-gap` `core-compat-adapter`
  - **sdk-export-missing**: mocrane-wecom: plugin SDK import aliases are missing from target package exports
  - state: open · compat:untracked
  - evidence:
    - [openclaw/plugin-sdk @ plugin-sdk-shim.ts:30](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/src/compat/plugin-sdk-shim.ts#L30)

- 🟠 P1 **msteams** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: msteams: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - channel.runtime.envelope-config-metadata

- 🟠 P1 **nemoclaw** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: nemoclaw: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **nemoclaw** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: nemoclaw: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - hook.before_tool_call.terminal-block-approval

- 🟠 P1 **nextcloud-talk** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: nextcloud-talk: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - channel.runtime.envelope-config-metadata

- 🟠 P1 **nostr** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: nostr: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **nostr** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: nostr: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - channel.runtime.envelope-config-metadata

- 🟠 P1 **openclaw-telemetry** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: openclaw-telemetry: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **openclaw-telemetry** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: openclaw-telemetry: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - hook.before_tool_call.terminal-block-approval

- 🟠 P1 **openclaw-telemetry** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: openclaw-telemetry: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - hook.llm-observer.privacy-payload

- 🟠 P1 **openclaw-telemetry** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: openclaw-telemetry: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - legacy-before-agent-start

- 🟠 P1 **openclaw-telemetry** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: openclaw-telemetry: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - legacy-root-sdk-import

- 🟠 P1 **openclaw-telemetry** `compat-gap` `core-compat-adapter`
  - **sdk-export-missing**: openclaw-telemetry: plugin SDK import aliases are missing from target package exports
  - state: open · compat:untracked
  - evidence:
    - [openclaw/plugin-sdk @ service.ts:2](https://github.com/knostic/openclaw-telemetry/blob/86c2458a0dfe82d639c208c5220396feb9d53c45/src/service.ts#L2)

- 🟠 P1 **openclaw-weixin** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: openclaw-weixin: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **openclaw-weixin** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: openclaw-weixin: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - channel.runtime.envelope-config-metadata

- 🟠 P1 **opik-openclaw** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: opik-openclaw: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **opik-openclaw** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: opik-openclaw: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - hook.before_tool_call.terminal-block-approval

- 🟠 P1 **opik-openclaw** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: opik-openclaw: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - hook.llm-observer.privacy-payload

- 🟠 P1 **opik-openclaw** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: opik-openclaw: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - legacy-root-sdk-import

- 🟠 P1 **opik-openclaw** `compat-gap` `core-compat-adapter`
  - **sdk-export-missing**: opik-openclaw: plugin SDK import aliases are missing from target package exports
  - state: open · compat:untracked
  - evidence:
    - [openclaw/plugin-sdk @ index.ts:2](https://github.com/comet-ml/opik-openclaw/blob/fac4cc3f0fa96e96b1ee2583a0525f3681b017b5/index.ts#L2)
    - [openclaw/plugin-sdk @ service.ts:6](https://github.com/comet-ml/opik-openclaw/blob/fac4cc3f0fa96e96b1ee2583a0525f3681b017b5/src/service.ts#L6)

- 🟠 P1 **qqbot** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: qqbot: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **qqbot** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: qqbot: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - channel.runtime.envelope-config-metadata

- 🟠 P1 **qqbot** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: qqbot: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - legacy-root-sdk-import

- 🟠 P1 **qqbot** `compat-gap` `core-compat-adapter`
  - **sdk-export-missing**: qqbot: plugin SDK import aliases are missing from target package exports
  - state: open · compat:untracked
  - evidence:
    - [openclaw/plugin-sdk @ index.ts:2](https://github.com/tencent-connect/openclaw-qqbot/blob/7ceb7f0913d15417c5a74d82442a672ef0382c64/index.ts#L2)

- 🟠 P1 **secureclaw** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: secureclaw: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **telnyx-sms** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: telnyx-sms: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **telnyx-sms** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: telnyx-sms: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - channel-env-vars

- 🟠 P1 **telnyx-sms** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: telnyx-sms: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - channel.runtime.envelope-config-metadata

- 🟠 P1 **tlon** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: tlon: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - channel.runtime.envelope-config-metadata

- 🟠 P1 **twitch** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: twitch: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - channel.runtime.envelope-config-metadata

- 🟠 P1 **voice-call** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: voice-call: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **wecom** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: wecom: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **wecom** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: wecom: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - channel.runtime.envelope-config-metadata

- 🟠 P1 **wecom** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: wecom: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - hook.before_tool_call.terminal-block-approval

- 🟠 P1 **whatsapp** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: whatsapp: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - channel.runtime.envelope-config-metadata

- 🟠 P1 **yuanbao** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: yuanbao: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **yuanbao** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: yuanbao: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - channel-env-vars

- 🟠 P1 **yuanbao** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: yuanbao: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - channel.runtime.envelope-config-metadata

- 🟠 P1 **yuanbao** `compat-gap` `core-compat-adapter`
  - **sdk-export-missing**: yuanbao: plugin SDK import aliases are missing from target package exports
  - state: open · compat:untracked
  - evidence:
    - openclaw/plugin-sdk/channel-reply-pipeline @ plugins/yuanbao/.crabpot-package/dist/src/business/pipeline/middlewares/dispatch-reply.js:5
    - openclaw/plugin-sdk/command-auth @ plugins/yuanbao/.crabpot-package/dist/src/business/commands/command-sync/index.js:2
    - openclaw/plugin-sdk/command-auth @ plugins/yuanbao/.crabpot-package/dist/src/business/pipeline/middlewares/guard-command.js:5

- 🟠 P1 **zalo** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: zalo: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - channel.runtime.envelope-config-metadata

- 🟠 P1 **zalouser** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: zalouser: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - channel.runtime.envelope-config-metadata

## Deprecation Warnings

- 🟡 P2 **agentchat** `deprecation-warning` `core-compat-adapter`
  - **channel-env-vars**: agentchat: channelEnvVars legacy manifest metadata must stay covered
  - state: open · compat:deprecated · deprecated
  - evidence:
    - agentchat
  - author remediation:
    - Move legacy channel environment variable metadata into the current setup/config metadata while keeping the old field until your supported OpenClaw range no longer needs it.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#channel-env-vars

- 🟡 P2 **connectclaw** `deprecation-warning` `core-compat-adapter`
  - **legacy-before-agent-start**: connectclaw: legacy before_agent_start hook compatibility is still used
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [before_agent_start @ hooks.ts:17](https://github.com/osipov-anton/connectclaw/blob/7a4e2646e914de075435b3837123cc03c3edae36/packages/plugin/src/hooks.ts#L17)
  - author remediation:
    - Replace the legacy before_agent_start hook with the current prompt/model hooks.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#legacy-before-agent-start

- 🟡 P2 **connectclaw** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: connectclaw: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [openclaw/plugin-sdk @ tools.ts:2](https://github.com/osipov-anton/connectclaw/blob/7a4e2646e914de075435b3837123cc03c3edae36/packages/plugin/src/tools.ts#L2)
  - author remediation:
    - Prefer focused public plugin SDK subpath imports instead of the legacy root barrel.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#legacy-root-sdk-import

- 🟡 P2 **ddingtalk** `deprecation-warning` `core-compat-adapter`
  - **channel-env-vars**: ddingtalk: channelEnvVars legacy manifest metadata must stay covered
  - state: open · compat:deprecated · deprecated
  - evidence:
    - ddingtalk
  - author remediation:
    - Move legacy channel environment variable metadata into the current setup/config metadata while keeping the old field until your supported OpenClaw range no longer needs it.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#channel-env-vars

- 🟡 P2 **dingtalk-doc** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: dingtalk-doc: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [openclaw/plugin-sdk @ index.ts:11](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/index.ts#L11)
  - author remediation:
    - Prefer focused public plugin SDK subpath imports instead of the legacy root barrel.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#legacy-root-sdk-import

- 🟡 P2 **hapi-openclaw** `deprecation-warning` `core-compat-adapter`
  - **sdk-load-session-store**: hapi-openclaw: deprecated whole-store session helper is still used
  - state: open · compat:none
  - evidence:
    - api.runtime.agent.session loadSessionStore @ plugins/hapi-openclaw/.crabpot-package/dist/index.js:318
  - author remediation:
    - Replace deprecated loadSessionStore whole-store access with row-scoped session helpers.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#sdk-load-session-store

- 🟡 P2 **hapi-openclaw** `deprecation-warning` `core-compat-adapter`
  - **sdk-session-file-helper**: hapi-openclaw: deprecated session file-path helper is still used
  - state: open · compat:none
  - evidence:
    - api.runtime.agent.session resolveSessionFilePath @ plugins/hapi-openclaw/.crabpot-package/dist/index.js:321
  - author remediation:
    - Replace deprecated session file-path helpers with session entry and transcript identity APIs.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#sdk-session-file-helper

- 🟡 P2 **hapi-openclaw** `deprecation-warning` `core-compat-adapter`
  - **sdk-session-store-write**: hapi-openclaw: deprecated whole-store session write helper is still used
  - state: open · compat:none
  - evidence:
    - api.runtime.agent.session saveSessionStore @ plugins/hapi-openclaw/.crabpot-package/dist/index.js:330
  - author remediation:
    - Replace deprecated whole-store session writes with row-scoped session helpers.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#sdk-session-store-write

- 🟡 P2 **hasdata** `deprecation-warning` `core-compat-adapter`
  - **provider-auth-env-vars**: hasdata: providerAuthEnvVars legacy manifest metadata must stay covered
  - state: open · compat:deprecated · deprecated
  - evidence:
    - hasdata
  - author remediation:
    - Move legacy provider authentication environment variables into current provider setup metadata.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#provider-auth-env-vars

- 🟡 P2 **inworld-tts** `deprecation-warning` `core-compat-adapter`
  - **provider-auth-env-vars**: inworld-tts: providerAuthEnvVars legacy manifest metadata must stay covered
  - state: open · compat:deprecated · deprecated
  - evidence:
    - inworld
  - author remediation:
    - Move legacy provider authentication environment variables into current provider setup metadata.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#provider-auth-env-vars

- 🟡 P2 **lossless-claw** `deprecation-warning` `core-compat-adapter`
  - **sdk-load-session-store**: lossless-claw: deprecated whole-store session helper is still used
  - state: open · compat:none
  - evidence:
    - [api.runtime.agent.session alias loadSessionStore @ index.ts:1535](https://github.com/Martian-Engineering/lossless-claw/blob/4347bd978932a0383708153eb80549887043b6e6/src/plugin/index.ts#L1535)
    - [api.runtime.agent.session alias loadSessionStore @ index.ts:1564](https://github.com/Martian-Engineering/lossless-claw/blob/4347bd978932a0383708153eb80549887043b6e6/src/plugin/index.ts#L1564)
    - [api.runtime.agent.session alias loadSessionStore @ index.ts:1610](https://github.com/Martian-Engineering/lossless-claw/blob/4347bd978932a0383708153eb80549887043b6e6/src/plugin/index.ts#L1610)
    - [api.runtime.agent.session alias loadSessionStore @ index.ts:1843](https://github.com/Martian-Engineering/lossless-claw/blob/4347bd978932a0383708153eb80549887043b6e6/src/plugin/index.ts#L1843)
    - [api.runtime.agent.session alias loadSessionStore @ index.ts:1889](https://github.com/Martian-Engineering/lossless-claw/blob/4347bd978932a0383708153eb80549887043b6e6/src/plugin/index.ts#L1889)
  - author remediation:
    - Replace deprecated loadSessionStore whole-store access with row-scoped session helpers.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#sdk-load-session-store

- 🟡 P2 **lossless-claw** `deprecation-warning` `core-compat-adapter`
  - **sdk-session-file-helper**: lossless-claw: deprecated session file-path helper is still used
  - state: open · compat:none
  - evidence:
    - [api.runtime.agent.session alias resolveSessionFilePath @ index.ts:1571](https://github.com/Martian-Engineering/lossless-claw/blob/4347bd978932a0383708153eb80549887043b6e6/src/plugin/index.ts#L1571)
    - [api.runtime.agent.session alias resolveSessionFilePath @ index.ts:1631](https://github.com/Martian-Engineering/lossless-claw/blob/4347bd978932a0383708153eb80549887043b6e6/src/plugin/index.ts#L1631)
  - author remediation:
    - Replace deprecated session file-path helpers with session entry and transcript identity APIs.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#sdk-session-file-helper

- 🟡 P2 **memory-tencentdb** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: memory-tencentdb: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - openclaw/plugin-sdk @ plugins/memory-tencentdb/.crabpot-package/dist/index.mjs:8466
    - openclaw/plugin-sdk @ plugins/memory-tencentdb/.crabpot-package/src/offload/index.ts:2190
  - author remediation:
    - Prefer focused public plugin SDK subpath imports instead of the legacy root barrel.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#legacy-root-sdk-import

- 🟡 P2 **memos-cloud** `deprecation-warning` `core-compat-adapter`
  - **legacy-before-agent-start**: memos-cloud: legacy before_agent_start hook compatibility is still used
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [before_agent_start @ index.js:857](https://github.com/MemTensor/MemOS-Cloud-OpenClaw-Plugin/blob/a317661691bda94054d3d35f8c226e8bfe0018f7/index.js#L857)
  - author remediation:
    - Replace the legacy before_agent_start hook with the current prompt/model hooks.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#legacy-before-agent-start

- 🟡 P2 **mocrane-wecom** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: mocrane-wecom: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [openclaw/plugin-sdk @ plugin-sdk-shim.ts:30](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/src/compat/plugin-sdk-shim.ts#L30)
  - author remediation:
    - Prefer focused public plugin SDK subpath imports instead of the legacy root barrel.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#legacy-root-sdk-import

- 🟡 P2 **openclaw-telemetry** `deprecation-warning` `core-compat-adapter`
  - **legacy-before-agent-start**: openclaw-telemetry: legacy before_agent_start hook compatibility is still used
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [before_agent_start @ index.ts:53](https://github.com/knostic/openclaw-telemetry/blob/86c2458a0dfe82d639c208c5220396feb9d53c45/index.ts#L53)
  - author remediation:
    - Replace the legacy before_agent_start hook with the current prompt/model hooks.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#legacy-before-agent-start

- 🟡 P2 **openclaw-telemetry** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: openclaw-telemetry: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [openclaw/plugin-sdk @ service.ts:2](https://github.com/knostic/openclaw-telemetry/blob/86c2458a0dfe82d639c208c5220396feb9d53c45/src/service.ts#L2)
  - author remediation:
    - Prefer focused public plugin SDK subpath imports instead of the legacy root barrel.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#legacy-root-sdk-import

- 🟡 P2 **opik-openclaw** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: opik-openclaw: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [openclaw/plugin-sdk @ index.ts:2](https://github.com/comet-ml/opik-openclaw/blob/fac4cc3f0fa96e96b1ee2583a0525f3681b017b5/index.ts#L2)
    - [openclaw/plugin-sdk @ service.ts:6](https://github.com/comet-ml/opik-openclaw/blob/fac4cc3f0fa96e96b1ee2583a0525f3681b017b5/src/service.ts#L6)
  - author remediation:
    - Prefer focused public plugin SDK subpath imports instead of the legacy root barrel.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#legacy-root-sdk-import

- 🟡 P2 **qqbot** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: qqbot: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [openclaw/plugin-sdk @ index.ts:2](https://github.com/tencent-connect/openclaw-qqbot/blob/7ceb7f0913d15417c5a74d82442a672ef0382c64/index.ts#L2)
  - author remediation:
    - Prefer focused public plugin SDK subpath imports instead of the legacy root barrel.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#legacy-root-sdk-import

- 🟡 P2 **telnyx-sms** `deprecation-warning` `core-compat-adapter`
  - **channel-env-vars**: telnyx-sms: channelEnvVars legacy manifest metadata must stay covered
  - state: open · compat:deprecated · deprecated
  - evidence:
    - telnyx-sms
  - author remediation:
    - Move legacy channel environment variable metadata into the current setup/config metadata while keeping the old field until your supported OpenClaw range no longer needs it.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#channel-env-vars

- 🟡 P2 **yuanbao** `deprecation-warning` `core-compat-adapter`
  - **channel-env-vars**: yuanbao: channelEnvVars legacy manifest metadata must stay covered
  - state: open · compat:deprecated · deprecated
  - evidence:
    - yuanbao
  - author remediation:
    - Move legacy channel environment variable metadata into the current setup/config metadata while keeping the old field until your supported OpenClaw range no longer needs it.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#channel-env-vars

## Inspector Proof Gaps

- 🟠 P1 **clawmetry** `inspector-gap` `inspector-follow-up`
  - **conversation-access-hook**: clawmetry: conversation-access hooks need privacy-boundary probes
  - state: open · compat:untracked
  - evidence:
    - [llm_output @ service.ts:117](https://github.com/vivekchand/clawmetry/blob/6228537b0271572d55f5bf02ee130f76038f7cd5/clawhub-plugin/src/service.ts#L117)

- 🟠 P1 **dingtalk-doc** `inspector-gap` `inspector-follow-up`
  - **before-tool-call-probe**: dingtalk-doc: before_tool_call needs terminal/block/approval probes
  - state: open · compat:untracked
  - evidence:
    - [before_tool_call @ index.ts:41](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/index.ts#L41)

- 🟠 P1 **discord** `inspector-gap` `inspector-follow-up`
  - **sdk-export-missing**: discord: SDK import coverage requires an eligible host
  - state: open · compat:untracked
  - evidence:
    - openclaw/plugin-sdk/heartbeat-runtime @ plugins/discord/.crabpot-package/dist/.setup/provider-BBDuE14w.mjs:68
    - Host 2026.10.6 does not satisfy the declared plugin API range >=2026.10.10; recheck with an eligible host before assigning a core compatibility repair.
    - Unassessed SDK compatibility record: plugin-sdk-export-aliases

- 🟠 P1 **honcho** `inspector-gap` `inspector-follow-up`
  - **conversation-access-hook**: honcho: conversation-access hooks need privacy-boundary probes
  - state: open · compat:untracked
  - evidence:
    - [agent_end @ capture.ts:137](https://github.com/plastic-labs/openclaw-honcho/blob/25f644cfd985f437951cc085b91138be22e42388/hooks/capture.ts#L137)
    - [llm_output @ telemetry.ts:31](https://github.com/plastic-labs/openclaw-honcho/blob/25f644cfd985f437951cc085b91138be22e42388/hooks/telemetry.ts#L31)

- 🟠 P1 **kitchen-sink** `inspector-gap` `inspector-follow-up`
  - **before-tool-call-probe**: kitchen-sink: before_tool_call needs terminal/block/approval probes
  - state: open · compat:untracked
  - evidence:
    - [before_tool_call @ generated-hooks.js:19](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-hooks.js#L19)

- 🟠 P1 **kitchen-sink** `inspector-gap` `inspector-follow-up`
  - **conversation-access-hook**: kitchen-sink: conversation-access hooks need privacy-boundary probes
  - state: open · compat:untracked
  - evidence:
    - [agent_end @ generated-hooks.js:7](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-hooks.js#L7)
    - [llm_input @ generated-hooks.js:27](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-hooks.js#L27)
    - [llm_output @ generated-hooks.js:28](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-hooks.js#L28)

- 🟠 P1 **llm-trace-phoenix** `inspector-gap` `inspector-follow-up`
  - **conversation-access-hook**: llm-trace-phoenix: conversation-access hooks need privacy-boundary probes
  - state: open · compat:untracked
  - evidence:
    - [llm_input @ index.js:105](https://github.com/pingshian0131/openclaw-plugin-llm-trace-phoenix/blob/ad8a34681b4d49a1b7d75bb8f6ac9b2f2ea3a8e9/dist/index.js#L105)
    - [llm_input @ index.ts:202](https://github.com/pingshian0131/openclaw-plugin-llm-trace-phoenix/blob/ad8a34681b4d49a1b7d75bb8f6ac9b2f2ea3a8e9/index.ts#L202)
    - [llm_output @ index.js:118](https://github.com/pingshian0131/openclaw-plugin-llm-trace-phoenix/blob/ad8a34681b4d49a1b7d75bb8f6ac9b2f2ea3a8e9/dist/index.js#L118)
    - [llm_output @ index.ts:216](https://github.com/pingshian0131/openclaw-plugin-llm-trace-phoenix/blob/ad8a34681b4d49a1b7d75bb8f6ac9b2f2ea3a8e9/index.ts#L216)

- 🟠 P1 **memory-lancedb** `inspector-gap` `inspector-follow-up`
  - **conversation-access-hook**: memory-lancedb: conversation-access hooks need privacy-boundary probes
  - state: open · compat:untracked
  - evidence:
    - agent_end @ plugins/memory-lancedb/.crabpot-package/dist/index.js:315

- 🟠 P1 **memory-tencentdb** `inspector-gap` `inspector-follow-up`
  - **conversation-access-hook**: memory-tencentdb: conversation-access hooks need privacy-boundary probes
  - state: open · compat:untracked
  - evidence:
    - agent_end @ plugins/memory-tencentdb/.crabpot-package/dist/index.mjs:1095
    - agent_end @ plugins/memory-tencentdb/.crabpot-package/dist/index.mjs:1256
    - agent_end @ plugins/memory-tencentdb/.crabpot-package/dist/index.mjs:21802
    - agent_end @ plugins/memory-tencentdb/.crabpot-package/index.ts:808
    - agent_end @ plugins/memory-tencentdb/.crabpot-package/openclaw-plugin/index.ts:209
    - agent_end @ plugins/memory-tencentdb/.crabpot-package/src/offload-client/index.ts:52

- 🟠 P1 **memos-cloud** `inspector-gap` `inspector-follow-up`
  - **conversation-access-hook**: memos-cloud: conversation-access hooks need privacy-boundary probes
  - state: open · compat:untracked
  - evidence:
    - [agent_end @ index.js:860](https://github.com/MemTensor/MemOS-Cloud-OpenClaw-Plugin/blob/a317661691bda94054d3d35f8c226e8bfe0018f7/index.js#L860)

- 🟠 P1 **nemoclaw** `inspector-gap` `inspector-follow-up`
  - **before-tool-call-probe**: nemoclaw: before_tool_call needs terminal/block/approval probes
  - state: open · compat:untracked
  - evidence:
    - [before_tool_call @ index.ts:359](https://github.com/NVIDIA/NemoClaw/blob/37ca4cb4220265c2a12b9d9b8a120d0d23a338dd/nemoclaw/src/index.ts#L359)

- 🟠 P1 **openclaw-telemetry** `inspector-gap` `inspector-follow-up`
  - **before-tool-call-probe**: openclaw-telemetry: before_tool_call needs terminal/block/approval probes
  - state: open · compat:untracked
  - evidence:
    - [before_tool_call @ index.ts:12](https://github.com/knostic/openclaw-telemetry/blob/86c2458a0dfe82d639c208c5220396feb9d53c45/index.ts#L12)

- 🟠 P1 **openclaw-telemetry** `inspector-gap` `inspector-follow-up`
  - **conversation-access-hook**: openclaw-telemetry: conversation-access hooks need privacy-boundary probes
  - state: open · compat:untracked
  - evidence:
    - [agent_end @ index.ts:62](https://github.com/knostic/openclaw-telemetry/blob/86c2458a0dfe82d639c208c5220396feb9d53c45/index.ts#L62)

- 🟠 P1 **opik-openclaw** `inspector-gap` `inspector-follow-up`
  - **before-tool-call-probe**: opik-openclaw: before_tool_call needs terminal/block/approval probes
  - state: open · compat:untracked
  - evidence:
    - [before_tool_call @ tool.ts:34](https://github.com/comet-ml/opik-openclaw/blob/fac4cc3f0fa96e96b1ee2583a0525f3681b017b5/src/service/hooks/tool.ts#L34)

- 🟠 P1 **opik-openclaw** `inspector-gap` `inspector-follow-up`
  - **conversation-access-hook**: opik-openclaw: conversation-access hooks need privacy-boundary probes
  - state: open · compat:untracked
  - evidence:
    - [agent_end @ service.ts:581](https://github.com/comet-ml/opik-openclaw/blob/fac4cc3f0fa96e96b1ee2583a0525f3681b017b5/src/service.ts#L581)
    - [llm_input @ llm.ts:39](https://github.com/comet-ml/opik-openclaw/blob/fac4cc3f0fa96e96b1ee2583a0525f3681b017b5/src/service/hooks/llm.ts#L39)
    - [llm_output @ llm.ts:150](https://github.com/comet-ml/opik-openclaw/blob/fac4cc3f0fa96e96b1ee2583a0525f3681b017b5/src/service/hooks/llm.ts#L150)

- 🟠 P1 **telnyx-sms** `inspector-gap` `inspector-follow-up`
  - **sdk-export-missing**: telnyx-sms: SDK import coverage requires an eligible host
  - state: open · compat:untracked
  - evidence:
    - [openclaw/plugin-sdk/direct-dm @ inbound.ts:2](https://github.com/team-telnyx/telnyx-openclaw-sms-channel/blob/6e3956246cd3e0e72af649d2fd75dee6f3e46966/src/inbound.ts#L2)
    - Host 2026.10.6 does not satisfy the declared plugin API range 2026.4; recheck with an eligible host before assigning a core compatibility repair.
    - Unassessed SDK compatibility record: plugin-sdk-export-aliases

- 🟠 P1 **wecom** `inspector-gap` `inspector-follow-up`
  - **before-tool-call-probe**: wecom: before_tool_call needs terminal/block/approval probes
  - state: open · compat:untracked
  - evidence:
    - [before_tool_call @ index.js:76](https://github.com/sunnoy/openclaw-plugin-wecom/blob/df2e426457a0e587bbfe63f185ffe002cbf61e6f/index.js#L76)

- 🟡 P2 **a2a-gateway** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: a2a-gateway: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@a2a-js/sdk @ package.json](https://github.com/win4r/openclaw-a2a-gateway/blob/fdedad7499c4b6d22b3aa63a7876b9bfa1a92674/package.json)
    - [@bufbuild/protobuf @ package.json](https://github.com/win4r/openclaw-a2a-gateway/blob/fdedad7499c4b6d22b3aa63a7876b9bfa1a92674/package.json)
    - [@grpc/grpc-js @ package.json](https://github.com/win4r/openclaw-a2a-gateway/blob/fdedad7499c4b6d22b3aa63a7876b9bfa1a92674/package.json)
    - [express @ package.json](https://github.com/win4r/openclaw-a2a-gateway/blob/fdedad7499c4b6d22b3aa63a7876b9bfa1a92674/package.json)
    - [multicast-dns @ package.json](https://github.com/win4r/openclaw-a2a-gateway/blob/fdedad7499c4b6d22b3aa63a7876b9bfa1a92674/package.json)
    - [uuid @ package.json](https://github.com/win4r/openclaw-a2a-gateway/blob/fdedad7499c4b6d22b3aa63a7876b9bfa1a92674/package.json)
    - [ws @ package.json](https://github.com/win4r/openclaw-a2a-gateway/blob/fdedad7499c4b6d22b3aa63a7876b9bfa1a92674/package.json)

- 🟡 P2 **a2a-gateway** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: a2a-gateway: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/win4r/openclaw-a2a-gateway/blob/fdedad7499c4b6d22b3aa63a7876b9bfa1a92674/index.ts)

- 🟡 P2 **a2a-gateway** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: a2a-gateway: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:untracked
  - evidence:
    - [registerService @ index.ts:897](https://github.com/win4r/openclaw-a2a-gateway/blob/fdedad7499c4b6d22b3aa63a7876b9bfa1a92674/index.ts#L897)

- 🟡 P2 **agentchat** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: agentchat: channel runtime needs envelope/config probes
  - state: open · compat:untracked
  - evidence:
    - [defineChannelPluginEntry @ channel.ts:355](https://github.com/agentchatme/agentchat-openclaw/blob/caee25ad8ed7a38cc4281bda397c7e0e7e90ce6a/src/channel.ts#L355)

- 🟡 P2 **agentchat** `inspector-gap` `inspector-follow-up`
  - **package-build-artifact-entrypoint**: agentchat: cold import requires package build output
  - state: open · compat:none
  - evidence:
    - [extension:./dist/index.js @ index.js](https://github.com/agentchatme/agentchat-openclaw/blob/caee25ad8ed7a38cc4281bda397c7e0e7e90ce6a/dist/index.js)
    - [setupEntry:./dist/setup-entry.js @ setup-entry.js](https://github.com/agentchatme/agentchat-openclaw/blob/caee25ad8ed7a38cc4281bda397c7e0e7e90ce6a/dist/setup-entry.js)

- 🟡 P2 **agentchat** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: agentchat: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@sinclair/typebox @ package.json](https://github.com/agentchatme/agentchat-openclaw/blob/caee25ad8ed7a38cc4281bda397c7e0e7e90ce6a/package.json)
    - [agentchatme @ package.json](https://github.com/agentchatme/agentchat-openclaw/blob/caee25ad8ed7a38cc4281bda397c7e0e7e90ce6a/package.json)
    - [pino @ package.json](https://github.com/agentchatme/agentchat-openclaw/blob/caee25ad8ed7a38cc4281bda397c7e0e7e90ce6a/package.json)
    - [ws @ package.json](https://github.com/agentchatme/agentchat-openclaw/blob/caee25ad8ed7a38cc4281bda397c7e0e7e90ce6a/package.json)
    - [zod @ package.json](https://github.com/agentchatme/agentchat-openclaw/blob/caee25ad8ed7a38cc4281bda397c7e0e7e90ce6a/package.json)

- 🟡 P2 **aiwerk-mcp-bridge** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: aiwerk-mcp-bridge: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - @aiwerk/mcp-bridge @ plugins/aiwerk-mcp-bridge/.crabpot-package/package.json
    - @sinclair/typebox @ plugins/aiwerk-mcp-bridge/.crabpot-package/package.json

- 🟡 P2 **aiwerk-mcp-bridge** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: aiwerk-mcp-bridge: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - extension:plugins/aiwerk-mcp-bridge/.crabpot-package/index.ts

- 🟡 P2 **aiwerk-mcp-bridge** `inspector-gap` `inspector-follow-up`
  - **runtime-tool-capture**: aiwerk-mcp-bridge: runtime tool schema needs registration capture
  - state: open · compat:none
  - evidence:
    - registerTool @ plugins/aiwerk-mcp-bridge/.crabpot-package/dist/index.js:118
    - registerTool @ plugins/aiwerk-mcp-bridge/.crabpot-package/dist/index.js:310
    - registerTool @ plugins/aiwerk-mcp-bridge/.crabpot-package/dist/index.js:63
    - registerTool @ plugins/aiwerk-mcp-bridge/.crabpot-package/index.ts:147
    - registerTool @ plugins/aiwerk-mcp-bridge/.crabpot-package/index.ts:370
    - registerTool @ plugins/aiwerk-mcp-bridge/.crabpot-package/index.ts:90

- 🟡 P2 **apify** `inspector-gap` `inspector-follow-up`
  - **package-build-artifact-entrypoint**: apify: cold import requires package build output
  - state: open · compat:none
  - evidence:
    - [extension:./dist/index.js @ index.js](https://github.com/apify/apify-openclaw-plugin/blob/9f2aadbbfbd170f196165f05d9f967f500292cda/dist/index.js)

- 🟡 P2 **apify** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: apify: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [apify-client @ package.json](https://github.com/apify/apify-openclaw-plugin/blob/9f2aadbbfbd170f196165f05d9f967f500292cda/package.json)
    - [typebox @ package.json](https://github.com/apify/apify-openclaw-plugin/blob/9f2aadbbfbd170f196165f05d9f967f500292cda/package.json)

- 🟡 P2 **bluebubbles** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: bluebubbles: channel runtime needs envelope/config probes
  - state: open · compat:untracked
  - evidence:
    - [createChatChannelPlugin @ channel-BSIXOcHe.js:930](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/bluebubbles/dist/channel-BSIXOcHe.js#L930)

- 🟡 P2 **brave-plugin** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: brave-plugin: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:untracked
  - evidence:
    - registerWebSearchProvider @ plugins/brave-plugin/.crabpot-package/dist/index.js:14

- 🟡 P2 **clawmetry** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: clawmetry: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/vivekchand/clawmetry/blob/6228537b0271572d55f5bf02ee130f76038f7cd5/clawhub-plugin/index.ts)

- 🟡 P2 **clawmetry** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: clawmetry: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:untracked
  - evidence:
    - [registerService @ index.ts:20](https://github.com/vivekchand/clawmetry/blob/6228537b0271572d55f5bf02ee130f76038f7cd5/clawhub-plugin/index.ts#L20)

- 🟡 P2 **clawrouter** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: clawrouter: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@noble/hashes @ package.json](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/package.json)
    - [@scure/bip32 @ package.json](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/package.json)
    - [@scure/bip39 @ package.json](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/package.json)
    - [@solana/kit @ package.json](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/package.json)
    - [@x402/core @ package.json](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/package.json)
    - [@x402/evm @ package.json](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/package.json)
    - [@x402/fetch @ package.json](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/package.json)
    - [@x402/svm @ package.json](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/package.json)
    - [undici @ package.json](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/package.json)
    - [viem @ package.json](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/package.json)

- 🟡 P2 **clawrouter** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: clawrouter: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:untracked
  - evidence:
    - [registerCommand @ cli.js:89376](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/dist/cli.js#L89376)
    - [registerCommand @ cli.js:89428](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/dist/cli.js#L89428)
    - [registerCommand @ cli.js:89477](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/dist/cli.js#L89477)
    - [registerCommand @ cli.js:89543](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/dist/cli.js#L89543)
    - [registerCommand @ cli.js:89547](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/dist/cli.js#L89547)
    - [registerCommand @ cli.js:89550](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/dist/cli.js#L89550)
    - [registerCommand @ cli.js:89551](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/dist/cli.js#L89551)
    - [registerCommand @ index.js:87412](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/dist/index.js#L87412)
    - [registerCommand @ index.js:87464](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/dist/index.js#L87464)
    - [registerCommand @ index.js:87513](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/dist/index.js#L87513)
    - [registerCommand @ index.js:87579](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/dist/index.js#L87579)
    - [registerCommand @ index.js:87583](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/dist/index.js#L87583)
    - [registerCommand @ index.js:87586](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/dist/index.js#L87586)
    - [registerCommand @ index.js:87587](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/dist/index.js#L87587)
    - [registerCommand @ index.ts:1792](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/src/index.ts#L1792)
    - [registerCommand @ index.ts:1842](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/src/index.ts#L1842)
    - [registerCommand @ index.ts:1896](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/src/index.ts#L1896)
    - [registerCommand @ index.ts:1954](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/src/index.ts#L1954)
    - [registerCommand @ index.ts:2031](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/src/index.ts#L2031)
    - [registerCommand @ index.ts:2036](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/src/index.ts#L2036)
    - [registerCommand @ index.ts:2040](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/src/index.ts#L2040)
    - [registerCommand @ index.ts:2041](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/src/index.ts#L2041)
    - [registerImageGenerationProvider @ index.ts:1693](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/src/index.ts#L1693)
    - [registerMusicGenerationProvider @ index.ts:1694](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/src/index.ts#L1694)
    - [registerProvider @ index.ts:1684](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/src/index.ts#L1684)
    - [registerProvider @ index.ts:1689](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/src/index.ts#L1689)
    - [registerService @ cli.js:89557](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/dist/cli.js#L89557)
    - [registerService @ index.js:87593](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/dist/index.js#L87593)
    - [registerService @ index.ts:2050](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/src/index.ts#L2050)
    - [registerVideoGenerationProvider @ index.ts:1696](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/src/index.ts#L1696)
    - [registerWebSearchProvider @ index.ts:1705](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/src/index.ts#L1705)

- 🟡 P2 **codex** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: codex: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - @openai/codex @ plugins/codex/.crabpot-package/package.json
    - @openclaw/fs-safe @ plugins/codex/.crabpot-package/package.json
    - semver @ plugins/codex/.crabpot-package/package.json
    - smol-toml @ plugins/codex/.crabpot-package/package.json
    - typebox @ plugins/codex/.crabpot-package/package.json
    - ws @ plugins/codex/.crabpot-package/package.json
    - zod @ plugins/codex/.crabpot-package/package.json

- 🟡 P2 **codex** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: codex: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:untracked
  - evidence:
    - registerAgentHarness @ plugins/codex/.crabpot-package/dist/index.js:4261
    - registerCommand @ plugins/codex/.crabpot-package/dist/index.js:4304
    - registerGatewayMethod @ plugins/codex/.crabpot-package/dist/index.js:72
    - registerMediaUnderstandingProvider @ plugins/codex/.crabpot-package/dist/index.js:4262
    - registerMigrationProvider @ plugins/codex/.crabpot-package/dist/index.js:4264
    - registerNodeHostCommand @ plugins/codex/.crabpot-package/dist/index.js:4231
    - registerNodeHostCommand @ plugins/codex/.crabpot-package/dist/index.js:4300
    - registerNodeHostCommand @ plugins/codex/.crabpot-package/dist/index.js:4302
    - registerNodeInvokePolicy @ plugins/codex/.crabpot-package/dist/index.js:4233
    - registerNodeInvokePolicy @ plugins/codex/.crabpot-package/dist/index.js:4301
    - registerNodeInvokePolicy @ plugins/codex/.crabpot-package/dist/index.js:4303
    - registerProvider @ plugins/codex/.crabpot-package/dist/index.js:4152
    - registerService @ plugins/codex/.crabpot-package/dist/index.js:4150
    - registerService @ plugins/codex/.crabpot-package/dist/index.js:4168
    - registerService @ plugins/codex/.crabpot-package/dist/index.js:4169
    - registerService @ plugins/codex/.crabpot-package/dist/index.js:4170
    - registerService @ plugins/codex/.crabpot-package/dist/index.js:4217
    - registerSessionCatalog @ plugins/codex/.crabpot-package/dist/index.js:3420
    - registerToolMetadata @ plugins/codex/.crabpot-package/dist/index.js:4274
    - registerToolMetadata @ plugins/codex/.crabpot-package/dist/index.js:4289
    - registerWebSearchProvider @ plugins/codex/.crabpot-package/dist/index.js:4263

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
  - state: open · compat:untracked
  - evidence:
    - [registerCommand @ index.ts:48](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/index.ts#L48)
    - [registerInteractiveHandler @ index.ts:29](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/index.ts#L29)
    - [registerInteractiveHandler @ index.ts:38](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/index.ts#L38)
    - [registerService @ index.ts:12](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/index.ts#L12)

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
  - state: open · compat:untracked
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
  - state: open · compat:untracked
  - evidence:
    - [defineChannelPluginEntry @ index.ts:8](https://github.com/largezhou/openclaw-dingtalk/blob/161a9b0f6381ce7c869ef9461e8a1ba3ed0445fc/index.ts#L8)

- 🟡 P2 **ddingtalk** `inspector-gap` `inspector-follow-up`
  - **package-build-artifact-entrypoint**: ddingtalk: cold import requires package build output
  - state: open · compat:none
  - evidence:
    - [extension:./dist/index.js @ index.js](https://github.com/largezhou/openclaw-dingtalk/blob/161a9b0f6381ce7c869ef9461e8a1ba3ed0445fc/dist/index.js)

- 🟡 P2 **ddingtalk** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: ddingtalk: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [dingtalk-stream @ package.json](https://github.com/largezhou/openclaw-dingtalk/blob/161a9b0f6381ce7c869ef9461e8a1ba3ed0445fc/package.json)
    - [zod @ package.json](https://github.com/largezhou/openclaw-dingtalk/blob/161a9b0f6381ce7c869ef9461e8a1ba3ed0445fc/package.json)

- 🟡 P2 **diagnostics-otel** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: diagnostics-otel: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - @opentelemetry/api @ plugins/diagnostics-otel/.crabpot-package/package.json
    - @opentelemetry/api-logs @ plugins/diagnostics-otel/.crabpot-package/package.json
    - @opentelemetry/context-async-hooks @ plugins/diagnostics-otel/.crabpot-package/package.json
    - @opentelemetry/core @ plugins/diagnostics-otel/.crabpot-package/package.json
    - @opentelemetry/exporter-logs-otlp-proto @ plugins/diagnostics-otel/.crabpot-package/package.json
    - @opentelemetry/exporter-metrics-otlp-proto @ plugins/diagnostics-otel/.crabpot-package/package.json
    - @opentelemetry/exporter-trace-otlp-proto @ plugins/diagnostics-otel/.crabpot-package/package.json
    - @opentelemetry/propagator-b3 @ plugins/diagnostics-otel/.crabpot-package/package.json
    - @opentelemetry/propagator-jaeger @ plugins/diagnostics-otel/.crabpot-package/package.json
    - @opentelemetry/resources @ plugins/diagnostics-otel/.crabpot-package/package.json
    - @opentelemetry/sdk-logs @ plugins/diagnostics-otel/.crabpot-package/package.json
    - @opentelemetry/sdk-metrics @ plugins/diagnostics-otel/.crabpot-package/package.json
    - @opentelemetry/sdk-trace-base @ plugins/diagnostics-otel/.crabpot-package/package.json
    - @opentelemetry/semantic-conventions @ plugins/diagnostics-otel/.crabpot-package/package.json

- 🟡 P2 **diagnostics-otel** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: diagnostics-otel: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:untracked
  - evidence:
    - registerService @ plugins/diagnostics-otel/.crabpot-package/dist/index.js:9

- 🟡 P2 **diagnostics-prometheus** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: diagnostics-prometheus: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:untracked
  - evidence:
    - registerHttpRoute @ plugins/diagnostics-prometheus/.crabpot-package/dist/index.js:1025
    - registerService @ plugins/diagnostics-prometheus/.crabpot-package/dist/index.js:1024

- 🟡 P2 **diffs** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: diffs: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - @pierre/diffs @ plugins/diffs/.crabpot-package/package.json
    - @shikijs/langs @ plugins/diffs/.crabpot-package/package.json
    - playwright-core @ plugins/diffs/.crabpot-package/package.json
    - typebox @ plugins/diffs/.crabpot-package/package.json
    - zod @ plugins/diffs/.crabpot-package/package.json

- 🟡 P2 **diffs** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: diffs: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:untracked
  - evidence:
    - registerHttpRoute @ plugins/diffs/.crabpot-package/dist/index.js:1880
    - registerService @ plugins/diffs/.crabpot-package/dist/index.js:1855

- 🟡 P2 **dingtalk-connector** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: dingtalk-connector: channel runtime needs envelope/config probes
  - state: open · compat:untracked
  - evidence:
    - [registerChannel @ index.ts:76](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/index.ts#L76)

- 🟡 P2 **dingtalk-connector** `inspector-gap` `inspector-follow-up`
  - **package-build-artifact-entrypoint**: dingtalk-connector: cold import requires package build output
  - state: open · compat:none
  - evidence:
    - [extension:./dist/index.mjs @ index.mjs](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/dist/index.mjs)

- 🟡 P2 **dingtalk-connector** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: dingtalk-connector: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [axios @ package.json](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/package.json)
    - [dingtalk-stream @ package.json](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/package.json)
    - [form-data @ package.json](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/package.json)
    - [qrcode-terminal @ package.json](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/package.json)
    - [zod @ package.json](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/package.json)
    - [mammoth @ package.json](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/package.json)

- 🟡 P2 **dingtalk-connector** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: dingtalk-connector: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:untracked
  - evidence:
    - [registerChannel @ index.ts:76](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/index.ts#L76)
    - [registerGatewayMethod @ gateway-methods.ts:130](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/gateway-methods.ts#L130)
    - [registerGatewayMethod @ gateway-methods.ts:190](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/gateway-methods.ts#L190)
    - [registerGatewayMethod @ gateway-methods.ts:258](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/gateway-methods.ts#L258)
    - [registerGatewayMethod @ gateway-methods.ts:311](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/gateway-methods.ts#L311)
    - [registerGatewayMethod @ gateway-methods.ts:351](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/gateway-methods.ts#L351)
    - [registerGatewayMethod @ gateway-methods.ts:388](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/gateway-methods.ts#L388)
    - [registerGatewayMethod @ gateway-methods.ts:425](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/gateway-methods.ts#L425)
    - [registerGatewayMethod @ gateway-methods.ts:452](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/gateway-methods.ts#L452)
    - [registerGatewayMethod @ gateway-methods.ts:506](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/gateway-methods.ts#L506)
    - [registerGatewayMethod @ gateway-methods.ts:593](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/gateway-methods.ts#L593)
    - [registerGatewayMethod @ gateway-methods.ts:60](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/gateway-methods.ts#L60)
    - [registerGatewayMethod @ gateway-methods.ts:652](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/gateway-methods.ts#L652)
    - [registerGatewayMethod @ gateway-methods.ts:719](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/gateway-methods.ts#L719)
    - [registerGatewayMethod @ card-bridge.ts:337](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/services/card-bridge.ts#L337)
    - [registerGatewayMethod @ card-bridge.ts:362](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/services/card-bridge.ts#L362)

- 🟡 P2 **dingtalk-doc** `inspector-gap` `inspector-follow-up`
  - **package-build-artifact-entrypoint**: dingtalk-doc: cold import requires package build output
  - state: open · compat:none
  - evidence:
    - [extension:./dist/index.mjs @ index.mjs](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/dist/index.mjs)

- 🟡 P2 **dingtalk-doc** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: dingtalk-doc: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@sinclair/typebox @ package.json](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/package.json)

- 🟡 P2 **dingtalk-doc** `inspector-gap` `inspector-follow-up`
  - **runtime-tool-capture**: dingtalk-doc: runtime tool schema needs registration capture
  - state: open · compat:none
  - evidence:
    - [registerTool @ helpers.ts:93](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/src/tools/helpers.ts#L93)

- 🟡 P2 **discord** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: discord: channel runtime needs envelope/config probes
  - state: open · compat:untracked
  - evidence:
    - createChatChannelPlugin @ plugins/discord/.crabpot-package/dist/.setup/channel-BMpMAeQL.mjs:493

- 🟡 P2 **discord** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: discord: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - @discord/embedded-app-sdk @ plugins/discord/.crabpot-package/package.json
    - @discordjs/voice @ plugins/discord/.crabpot-package/package.json
    - discord-api-types @ plugins/discord/.crabpot-package/package.json
    - libopus-wasm @ plugins/discord/.crabpot-package/package.json
    - mdast-util-from-markdown @ plugins/discord/.crabpot-package/package.json
    - typebox @ plugins/discord/.crabpot-package/package.json
    - undici @ plugins/discord/.crabpot-package/package.json
    - ws @ plugins/discord/.crabpot-package/package.json
    - zod @ plugins/discord/.crabpot-package/package.json

- 🟡 P2 **discord** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: discord: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:untracked
  - evidence:
    - registerHttpRoute @ plugins/discord/.crabpot-package/dist/activities-api.js:731
    - registerTranscriptSourceProvider @ plugins/discord/.crabpot-package/dist/transcripts-source-api.js:4
    - registerWidgetPresenter @ plugins/discord/.crabpot-package/dist/activities-api.js:737

- 🟡 P2 **feishu** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: feishu: channel runtime needs envelope/config probes
  - state: open · compat:untracked
  - evidence:
    - createChatChannelPlugin @ plugins/feishu/.crabpot-package/dist/.setup/channel-dxkUGCgC.mjs:2256

- 🟡 P2 **feishu** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: feishu: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - @larksuiteoapi/node-sdk @ plugins/feishu/.crabpot-package/package.json
    - @openclaw/fs-safe @ plugins/feishu/.crabpot-package/package.json
    - mdast-util-from-markdown @ plugins/feishu/.crabpot-package/package.json
    - mdast-util-gfm-table @ plugins/feishu/.crabpot-package/package.json
    - micromark-extension-gfm-table @ plugins/feishu/.crabpot-package/package.json
    - typebox @ plugins/feishu/.crabpot-package/package.json
    - zod @ plugins/feishu/.crabpot-package/package.json

- 🟡 P2 **google-meet** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: google-meet: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - jszip @ plugins/google-meet/.crabpot-package/package.json
    - typebox @ plugins/google-meet/.crabpot-package/package.json

- 🟡 P2 **google-meet** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: google-meet: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:untracked
  - evidence:
    - registerGatewayMethod @ plugins/google-meet/.crabpot-package/dist/index.js:128
    - registerNodeHostCommand @ plugins/google-meet/.crabpot-package/dist/index.js:369
    - registerNodeInvokePolicy @ plugins/google-meet/.crabpot-package/dist/index.js:379
    - registerService @ plugins/google-meet/.crabpot-package/dist/.setup/plugin-registration-B_nOxAym.mjs:111
    - registerTranscriptSourceProvider @ plugins/google-meet/.crabpot-package/dist/index.js:187

- 🟡 P2 **hapi-openclaw** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: hapi-openclaw: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - hono @ plugins/hapi-openclaw/.crabpot-package/package.json

- 🟡 P2 **hasdata** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: hasdata: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@sinclair/typebox @ package.json](https://github.com/HasData/hasdata-openclaw-plugin/blob/83e4a20da5f2b9331a7efff46aa622e2a6ea9c05/package.json)

- 🟡 P2 **hasdata** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: hasdata: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/HasData/hasdata-openclaw-plugin/blob/83e4a20da5f2b9331a7efff46aa622e2a6ea9c05/src/index.ts)

- 🟡 P2 **honcho** `inspector-gap` `inspector-follow-up`
  - **package-build-artifact-entrypoint**: honcho: cold import requires package build output
  - state: open · compat:none
  - evidence:
    - [extension:./dist/index.js @ index.js](https://github.com/plastic-labs/openclaw-honcho/blob/25f644cfd985f437951cc085b91138be22e42388/dist/index.js)

- 🟡 P2 **honcho** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: honcho: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@honcho-ai/harness-plugin-core @ package.json](https://github.com/plastic-labs/openclaw-honcho/blob/25f644cfd985f437951cc085b91138be22e42388/package.json)
    - [@honcho-ai/sdk @ package.json](https://github.com/plastic-labs/openclaw-honcho/blob/25f644cfd985f437951cc085b91138be22e42388/package.json)
    - [@sinclair/typebox @ package.json](https://github.com/plastic-labs/openclaw-honcho/blob/25f644cfd985f437951cc085b91138be22e42388/package.json)

- 🟡 P2 **honcho** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: honcho: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:untracked
  - evidence:
    - [registerMemoryPromptSupplement @ index.ts:119](https://github.com/plastic-labs/openclaw-honcho/blob/25f644cfd985f437951cc085b91138be22e42388/index.ts#L119)

- 🟡 P2 **hyperspell** `inspector-gap` `inspector-follow-up`
  - **package-build-artifact-entrypoint**: hyperspell: cold import requires package build output
  - state: open · compat:none
  - evidence:
    - [extension:./dist/index.js @ index.js](https://github.com/hyperspell/hyperspell-openclaw/blob/056dcd9710a26b84bbef4ba72353e99b41af8f73/dist/index.js)

- 🟡 P2 **hyperspell** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: hyperspell: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@clack/prompts @ package.json](https://github.com/hyperspell/hyperspell-openclaw/blob/056dcd9710a26b84bbef4ba72353e99b41af8f73/package.json)
    - [@sinclair/typebox @ package.json](https://github.com/hyperspell/hyperspell-openclaw/blob/056dcd9710a26b84bbef4ba72353e99b41af8f73/package.json)
    - [hyperspell @ package.json](https://github.com/hyperspell/hyperspell-openclaw/blob/056dcd9710a26b84bbef4ba72353e99b41af8f73/package.json)

- 🟡 P2 **hyperspell** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: hyperspell: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:untracked
  - evidence:
    - [registerCommand @ slash.ts:166](https://github.com/hyperspell/hyperspell-openclaw/blob/056dcd9710a26b84bbef4ba72353e99b41af8f73/commands/slash.ts#L166)
    - [registerCommand @ slash.ts:43](https://github.com/hyperspell/hyperspell-openclaw/blob/056dcd9710a26b84bbef4ba72353e99b41af8f73/commands/slash.ts#L43)
    - [registerCommand @ slash.ts:98](https://github.com/hyperspell/hyperspell-openclaw/blob/056dcd9710a26b84bbef4ba72353e99b41af8f73/commands/slash.ts#L98)
    - [registerCommand @ index.ts:56](https://github.com/hyperspell/hyperspell-openclaw/blob/056dcd9710a26b84bbef4ba72353e99b41af8f73/index.ts#L56)
    - [registerCommand @ index.ts:67](https://github.com/hyperspell/hyperspell-openclaw/blob/056dcd9710a26b84bbef4ba72353e99b41af8f73/index.ts#L67)
    - [registerCommand @ index.ts:78](https://github.com/hyperspell/hyperspell-openclaw/blob/056dcd9710a26b84bbef4ba72353e99b41af8f73/index.ts#L78)

- 🟡 P2 **inworld-tts** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: inworld-tts: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/livingghost/openclaw-inworld-tts/blob/d2abaeea330ebef7530f43f8b395671f6f404aea/index.ts)

- 🟡 P2 **inworld-tts** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: inworld-tts: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:untracked
  - evidence:
    - [registerSpeechProvider @ index.ts:9](https://github.com/livingghost/openclaw-inworld-tts/blob/d2abaeea330ebef7530f43f8b395671f6f404aea/index.ts#L9)

- 🟡 P2 **kitchen-sink** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: kitchen-sink: channel runtime needs envelope/config probes
  - state: open · compat:untracked
  - evidence:
    - [registerChannel @ generated-registrars.js:9](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L9)
    - [registerChannel @ kitchen-runtime.js:59](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/kitchen-runtime.js#L59)

- 🟡 P2 **kitchen-sink** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: kitchen-sink: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:untracked
  - evidence:
    - [registerAgentEventSubscription @ generated-registrars.js:4](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L4)
    - [registerAgentHarness @ generated-registrars.js:5](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L5)
    - [registerAutoEnableProbe @ generated-registrars.js:7](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L7)
    - [registerBoardWidgetContentKind @ generated-registrars.js:8](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L8)
    - [registerChannel @ generated-registrars.js:9](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L9)
    - [registerChannel @ kitchen-runtime.js:59](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/kitchen-runtime.js#L59)
    - [registerCliBackend @ generated-registrars.js:11](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L11)
    - [registerCodexAppServerExtensionFactory @ generated-registrars.js:12](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L12)
    - [registerCommand @ generated-registrars.js:13](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L13)
    - [registerCommand @ kitchen-runtime.js:54](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/kitchen-runtime.js#L54)
    - [registerCommand @ kitchen-runtime.js:55](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/kitchen-runtime.js#L55)
    - [registerCompactionProvider @ generated-registrars.js:14](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L14)
    - [registerCompactionProvider @ kitchen-runtime.js:96](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/kitchen-runtime.js#L96)
    - [registerConfigMigration @ generated-registrars.js:15](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L15)
    - [registerContextEngine @ generated-registrars.js:16](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L16)
    - [registerContextEngine @ kitchen-runtime.js:99](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/kitchen-runtime.js#L99)
    - [registerControlUiDescriptor @ generated-registrars.js:17](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L17)
    - [registerEmbeddingProvider @ generated-registrars.js:19](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L19)
    - [registerEmbeddingProvider @ kitchen-runtime.js:65](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/kitchen-runtime.js#L65)
    - [registerGatewayDiscoveryService @ generated-registrars.js:20](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L20)
    - [registerGatewayMethod @ generated-registrars.js:21](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L21)
    - [registerGatewayMethod @ kitchen-runtime.js:111](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/kitchen-runtime.js#L111)
    - [registerGatewayMethod @ kitchen-runtime.js:114](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/kitchen-runtime.js#L114)
    - [registerHook @ generated-registrars.js:22](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L22)
    - [registerHostedMediaResolver @ generated-registrars.js:23](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L23)
    - [registerHttpRoute @ generated-registrars.js:24](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L24)
    - [registerHttpRoute @ kitchen-runtime.js:109](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/kitchen-runtime.js#L109)
    - [registerImageGenerationProvider @ generated-registrars.js:25](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L25)
    - [registerImageGenerationProvider @ kitchen-runtime.js:68](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/kitchen-runtime.js#L68)
    - [registerInteractiveHandler @ generated-registrars.js:26](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L26)
    - [registerInteractiveHandler @ kitchen-runtime.js:57](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/kitchen-runtime.js#L57)
    - [registerMcpServerConnectionResolver @ generated-registrars.js:27](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L27)
    - [registerMediaUnderstandingProvider @ generated-registrars.js:28](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L28)
    - [registerMediaUnderstandingProvider @ kitchen-runtime.js:71](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/kitchen-runtime.js#L71)
    - [registerMemoryCapability @ generated-registrars.js:29](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L29)
    - [registerMemoryCorpusSupplement @ generated-registrars.js:30](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L30)
    - [registerMemoryCorpusSupplement @ kitchen-runtime.js:93](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/kitchen-runtime.js#L93)
    - [registerMemoryPromptPreparation @ generated-registrars.js:31](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L31)
    - [registerMemoryPromptSupplement @ generated-registrars.js:32](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L32)
    - [registerMemoryPromptSupplement @ kitchen-runtime.js:118](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/kitchen-runtime.js#L118)
    - [registerMigrationProvider @ generated-registrars.js:33](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L33)
    - [registerModelCatalogProvider @ generated-registrars.js:34](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L34)
    - [registerMusicGenerationProvider @ generated-registrars.js:35](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L35)
    - [registerMusicGenerationProvider @ kitchen-runtime.js:84](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/kitchen-runtime.js#L84)
    - [registerNodeCliFeature @ sync-surface.mjs:166](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/scripts/sync-surface.mjs#L166)
    - [registerNodeCliFeature @ generated-registrars.js:36](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L36)
    - [registerNodeHostCommand @ generated-registrars.js:37](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L37)
    - [registerNodeInvokePolicy @ generated-registrars.js:38](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L38)
    - [registerProvider @ generated-registrars.js:39](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L39)
    - [registerProvider @ kitchen-runtime.js:63](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/kitchen-runtime.js#L63)
    - [registerRealtimeTranscriptionProvider @ generated-registrars.js:40](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L40)
    - [registerRealtimeTranscriptionProvider @ kitchen-runtime.js:75](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/kitchen-runtime.js#L75)
    - [registerRealtimeVoiceProvider @ generated-registrars.js:41](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L41)
    - [registerRealtimeVoiceProvider @ kitchen-runtime.js:78](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/kitchen-runtime.js#L78)
    - [registerReload @ generated-registrars.js:42](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L42)
    - [registerRuntimeLifecycle @ generated-registrars.js:43](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L43)
    - [registerSecurityAuditCollector @ generated-registrars.js:44](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L44)
    - [registerService @ generated-registrars.js:45](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L45)
    - [registerService @ kitchen-runtime.js:108](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/kitchen-runtime.js#L108)
    - [registerSessionAction @ generated-registrars.js:46](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L46)
    - [registerSessionCatalog @ generated-registrars.js:47](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L47)
    - [registerSessionExtension @ generated-registrars.js:48](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L48)
    - [registerSpeechProvider @ generated-registrars.js:50](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L50)
    - [registerSpeechProvider @ kitchen-runtime.js:73](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/kitchen-runtime.js#L73)
    - [registerTextTransforms @ generated-registrars.js:51](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L51)
    - [registerToolMetadata @ generated-registrars.js:53](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L53)
    - [registerTranscriptSourceProvider @ sync-surface.mjs:163](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/scripts/sync-surface.mjs#L163)
    - [registerTranscriptSourceProvider @ generated-registrars.js:54](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L54)
    - [registerVideoGenerationProvider @ generated-registrars.js:56](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L56)
    - [registerVideoGenerationProvider @ kitchen-runtime.js:81](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/kitchen-runtime.js#L81)
    - [registerWebFetchProvider @ generated-registrars.js:57](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L57)
    - [registerWebFetchProvider @ kitchen-runtime.js:90](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/kitchen-runtime.js#L90)
    - [registerWebSearchProvider @ generated-registrars.js:58](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L58)
    - [registerWebSearchProvider @ kitchen-runtime.js:87](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/kitchen-runtime.js#L87)
    - [registerWidgetPresenter @ generated-registrars.js:59](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L59)
    - [registerWorkerProvider @ generated-registrars.js:60](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L60)

- 🟡 P2 **lightclawbot** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: lightclawbot: channel runtime needs envelope/config probes
  - state: open · compat:untracked
  - evidence:
    - createChatChannelPlugin @ plugins/lightclawbot/.crabpot-package/dist/src/channel.js:49
    - defineChannelPluginEntry @ plugins/lightclawbot/.crabpot-package/dist/index.js:25

- 🟡 P2 **lightclawbot** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: lightclawbot: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - @modelcontextprotocol/sdk @ plugins/lightclawbot/.crabpot-package/package.json
    - ws @ plugins/lightclawbot/.crabpot-package/package.json

- 🟡 P2 **lightclawbot** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: lightclawbot: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:untracked
  - evidence:
    - registerMcpServerConnectionResolver @ plugins/lightclawbot/.crabpot-package/dist/src/connectors/mcp-connection.js:58
    - registerService @ plugins/lightclawbot/.crabpot-package/dist/src/connectors/owned-tools.js:390

- 🟡 P2 **lobster** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: lobster: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - @clawdbot/lobster @ plugins/lobster/.crabpot-package/package.json
    - typebox @ plugins/lobster/.crabpot-package/package.json

- 🟡 P2 **lossless-claw** `inspector-gap` `inspector-follow-up`
  - **package-build-artifact-entrypoint**: lossless-claw: cold import requires package build output
  - state: open · compat:none
  - evidence:
    - [extension:./dist/index.js @ index.js](https://github.com/Martian-Engineering/lossless-claw/blob/4347bd978932a0383708153eb80549887043b6e6/dist/index.js)

- 🟡 P2 **lossless-claw** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: lossless-claw: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@sinclair/typebox @ package.json](https://github.com/Martian-Engineering/lossless-claw/blob/4347bd978932a0383708153eb80549887043b6e6/package.json)

- 🟡 P2 **lossless-claw** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: lossless-claw: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:untracked
  - evidence:
    - [registerCommand @ index.ts:1744](https://github.com/Martian-Engineering/lossless-claw/blob/4347bd978932a0383708153eb80549887043b6e6/src/plugin/index.ts#L1744)
    - [registerContextEngine @ index.ts:1695](https://github.com/Martian-Engineering/lossless-claw/blob/4347bd978932a0383708153eb80549887043b6e6/src/plugin/index.ts#L1695)

- 🟡 P2 **matrix** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: matrix: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@matrix-org/matrix-sdk-crypto-nodejs @ package.json](https://github.com/openclaw/openclaw/blob/5f84c5b8a9889ab7035c197bc25bbe0aa8a20765/extensions/matrix/package.json)
    - [@matrix-org/matrix-sdk-crypto-wasm @ package.json](https://github.com/openclaw/openclaw/blob/5f84c5b8a9889ab7035c197bc25bbe0aa8a20765/extensions/matrix/package.json)
    - [@openclaw/fs-safe @ package.json](https://github.com/openclaw/openclaw/blob/5f84c5b8a9889ab7035c197bc25bbe0aa8a20765/extensions/matrix/package.json)
    - [fake-indexeddb @ package.json](https://github.com/openclaw/openclaw/blob/5f84c5b8a9889ab7035c197bc25bbe0aa8a20765/extensions/matrix/package.json)
    - [markdown-it @ package.json](https://github.com/openclaw/openclaw/blob/5f84c5b8a9889ab7035c197bc25bbe0aa8a20765/extensions/matrix/package.json)
    - [matrix-js-sdk @ package.json](https://github.com/openclaw/openclaw/blob/5f84c5b8a9889ab7035c197bc25bbe0aa8a20765/extensions/matrix/package.json)
    - [music-metadata @ package.json](https://github.com/openclaw/openclaw/blob/5f84c5b8a9889ab7035c197bc25bbe0aa8a20765/extensions/matrix/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/5f84c5b8a9889ab7035c197bc25bbe0aa8a20765/extensions/matrix/package.json)
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/5f84c5b8a9889ab7035c197bc25bbe0aa8a20765/extensions/matrix/package.json)

- 🟡 P2 **matrix** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: matrix: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/5f84c5b8a9889ab7035c197bc25bbe0aa8a20765/extensions/matrix/index.ts)
    - [setupEntry @ setup-entry.ts](https://github.com/openclaw/openclaw/blob/5f84c5b8a9889ab7035c197bc25bbe0aa8a20765/extensions/matrix/setup-entry.ts)

- 🟡 P2 **matrix** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: matrix: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:untracked
  - evidence:
    - [registerGatewayMethod @ index.ts:24](https://github.com/openclaw/openclaw/blob/5f84c5b8a9889ab7035c197bc25bbe0aa8a20765/extensions/matrix/index.ts#L24)

- 🟡 P2 **mattermost** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: mattermost: channel runtime needs envelope/config probes
  - state: open · compat:untracked
  - evidence:
    - [createChatChannelPlugin @ channel.ts:530](https://github.com/openclaw/openclaw/blob/5f84c5b8a9889ab7035c197bc25bbe0aa8a20765/extensions/mattermost/src/channel.ts#L530)

- 🟡 P2 **mattermost** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: mattermost: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/5f84c5b8a9889ab7035c197bc25bbe0aa8a20765/extensions/mattermost/package.json)

- 🟡 P2 **mattermost** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: mattermost: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/5f84c5b8a9889ab7035c197bc25bbe0aa8a20765/extensions/mattermost/index.ts)
    - [setupEntry @ setup-entry.ts](https://github.com/openclaw/openclaw/blob/5f84c5b8a9889ab7035c197bc25bbe0aa8a20765/extensions/mattermost/setup-entry.ts)

- 🟡 P2 **mattermost** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: mattermost: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:untracked
  - evidence:
    - [registerHttpRoute @ slash-state.ts:299](https://github.com/openclaw/openclaw/blob/5f84c5b8a9889ab7035c197bc25bbe0aa8a20765/extensions/mattermost/src/mattermost/slash-state.ts#L299)

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
  - state: open · compat:untracked
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
    - apache-arrow @ plugins/memory-lancedb/.crabpot-package/package.json
    - openai @ plugins/memory-lancedb/.crabpot-package/package.json
    - typebox @ plugins/memory-lancedb/.crabpot-package/package.json
    - @lancedb/lancedb-darwin-arm64 @ plugins/memory-lancedb/.crabpot-package/package.json
    - @lancedb/lancedb-linux-arm64-gnu @ plugins/memory-lancedb/.crabpot-package/package.json
    - @lancedb/lancedb-linux-arm64-musl @ plugins/memory-lancedb/.crabpot-package/package.json
    - @lancedb/lancedb-linux-x64-gnu @ plugins/memory-lancedb/.crabpot-package/package.json
    - @lancedb/lancedb-linux-x64-musl @ plugins/memory-lancedb/.crabpot-package/package.json
    - @lancedb/lancedb-win32-arm64-msvc @ plugins/memory-lancedb/.crabpot-package/package.json
    - @lancedb/lancedb-win32-x64-msvc @ plugins/memory-lancedb/.crabpot-package/package.json

- 🟡 P2 **memory-lancedb** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: memory-lancedb: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:untracked
  - evidence:
    - registerService @ plugins/memory-lancedb/.crabpot-package/dist/index.js:393
    - registerService @ plugins/memory-lancedb/.crabpot-package/dist/index.js:57

- 🟡 P2 **memory-tencentdb** `inspector-gap` `inspector-follow-up`
  - **package-build-artifact-entrypoint**: memory-tencentdb: cold import requires package build output
  - state: open · compat:none
  - evidence:
    - extension:./dist/index.js -> plugins/memory-tencentdb/.crabpot-package/openclaw-plugin/dist/index.js

- 🟡 P2 **memory-tencentdb** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: memory-tencentdb: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - @tencentdb-agent-memory/memory-sdk-ts @ plugins/memory-tencentdb/.crabpot-package/openclaw-plugin/package.json

- 🟡 P2 **memory-tencentdb** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: memory-tencentdb: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:untracked
  - evidence:
    - registerContextEngine @ plugins/memory-tencentdb/.crabpot-package/dist/index.mjs:1107
    - registerContextEngine @ plugins/memory-tencentdb/.crabpot-package/dist/index.mjs:7704
    - registerContextEngine @ plugins/memory-tencentdb/.crabpot-package/dist/index.mjs:7715
    - registerContextEngine @ plugins/memory-tencentdb/.crabpot-package/src/offload-client/index.ts:67
    - registerContextEngine @ plugins/memory-tencentdb/.crabpot-package/src/offload/index.ts:1235
    - registerContextEngine @ plugins/memory-tencentdb/.crabpot-package/src/offload/index.ts:1246

- 🟡 P2 **memos-cloud** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: memos-cloud: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:untracked
  - evidence:
    - [registerHook @ index.js:787](https://github.com/MemTensor/MemOS-Cloud-OpenClaw-Plugin/blob/a317661691bda94054d3d35f8c226e8bfe0018f7/index.js#L787)

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
  - state: open · compat:untracked
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
  - state: open · compat:untracked
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
  - state: open · compat:untracked
  - evidence:
    - createChatChannelPlugin @ plugins/msteams/.crabpot-package/dist/.setup/channel-CdCSk3Rg.cjs:1067

- 🟡 P2 **msteams** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: msteams: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - @azure/identity @ plugins/msteams/.crabpot-package/package.json
    - @microsoft/teams.api @ plugins/msteams/.crabpot-package/package.json
    - @microsoft/teams.apps @ plugins/msteams/.crabpot-package/package.json
    - express @ plugins/msteams/.crabpot-package/package.json
    - typebox @ plugins/msteams/.crabpot-package/package.json
    - zod @ plugins/msteams/.crabpot-package/package.json

- 🟡 P2 **nemoclaw** `inspector-gap` `inspector-follow-up`
  - **package-build-artifact-entrypoint**: nemoclaw: cold import requires package build output
  - state: open · compat:none
  - evidence:
    - [extension:./dist/index.js @ index.js](https://github.com/NVIDIA/NemoClaw/blob/37ca4cb4220265c2a12b9d9b8a120d0d23a338dd/nemoclaw/dist/index.js)

- 🟡 P2 **nemoclaw** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: nemoclaw: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [execa @ package.json](https://github.com/NVIDIA/NemoClaw/blob/37ca4cb4220265c2a12b9d9b8a120d0d23a338dd/nemoclaw/package.json)
    - [json5 @ package.json](https://github.com/NVIDIA/NemoClaw/blob/37ca4cb4220265c2a12b9d9b8a120d0d23a338dd/nemoclaw/package.json)
    - [tar @ package.json](https://github.com/NVIDIA/NemoClaw/blob/37ca4cb4220265c2a12b9d9b8a120d0d23a338dd/nemoclaw/package.json)
    - [yaml @ package.json](https://github.com/NVIDIA/NemoClaw/blob/37ca4cb4220265c2a12b9d9b8a120d0d23a338dd/nemoclaw/package.json)

- 🟡 P2 **nemoclaw** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: nemoclaw: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:untracked
  - evidence:
    - [registerCommand @ index.ts:322](https://github.com/NVIDIA/NemoClaw/blob/37ca4cb4220265c2a12b9d9b8a120d0d23a338dd/nemoclaw/src/index.ts#L322)
    - [registerProvider @ index.ts:349](https://github.com/NVIDIA/NemoClaw/blob/37ca4cb4220265c2a12b9d9b8a120d0d23a338dd/nemoclaw/src/index.ts#L349)

- 🟡 P2 **nextcloud-talk** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: nextcloud-talk: channel runtime needs envelope/config probes
  - state: open · compat:untracked
  - evidence:
    - createChatChannelPlugin @ plugins/nextcloud-talk/.crabpot-package/dist/.setup/channel-D9tHRtkv.mjs:2253

- 🟡 P2 **nextcloud-talk** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: nextcloud-talk: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - zod @ plugins/nextcloud-talk/.crabpot-package/package.json

- 🟡 P2 **nostr** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: nostr: channel runtime needs envelope/config probes
  - state: open · compat:untracked
  - evidence:
    - createChatChannelPlugin @ plugins/nostr/.crabpot-package/dist/.setup/channel-C2iK5Fjg.mjs:1333

- 🟡 P2 **nostr** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: nostr: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - nostr-tools @ plugins/nostr/.crabpot-package/package.json
    - zod @ plugins/nostr/.crabpot-package/package.json

- 🟡 P2 **nostr** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: nostr: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:untracked
  - evidence:
    - registerHttpRoute @ plugins/nostr/.crabpot-package/dist/index.js:60

- 🟡 P2 **openclaw-telemetry** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: openclaw-telemetry: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/knostic/openclaw-telemetry/blob/86c2458a0dfe82d639c208c5220396feb9d53c45/index.ts)

- 🟡 P2 **openclaw-telemetry** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: openclaw-telemetry: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:untracked
  - evidence:
    - [registerService @ index.ts:10](https://github.com/knostic/openclaw-telemetry/blob/86c2458a0dfe82d639c208c5220396feb9d53c45/index.ts#L10)

- 🟡 P2 **openclaw-weixin** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: openclaw-weixin: channel runtime needs envelope/config probes
  - state: open · compat:untracked
  - evidence:
    - registerChannel @ plugins/openclaw-weixin/.crabpot-package/dist/index.js:15
    - registerChannel @ plugins/openclaw-weixin/.crabpot-package/index.ts:19

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

- 🟡 P2 **openclaw-weixin** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: openclaw-weixin: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:untracked
  - evidence:
    - registerChannel @ plugins/openclaw-weixin/.crabpot-package/dist/index.js:15
    - registerChannel @ plugins/openclaw-weixin/.crabpot-package/index.ts:19

- 🟡 P2 **opik-openclaw** `inspector-gap` `inspector-follow-up`
  - **package-build-artifact-entrypoint**: opik-openclaw: cold import requires package build output
  - state: open · compat:none
  - evidence:
    - [runtimeExtension:./dist/index.js @ index.js](https://github.com/comet-ml/opik-openclaw/blob/fac4cc3f0fa96e96b1ee2583a0525f3681b017b5/dist/index.js)

- 🟡 P2 **opik-openclaw** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: opik-openclaw: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@clack/prompts @ package.json](https://github.com/comet-ml/opik-openclaw/blob/fac4cc3f0fa96e96b1ee2583a0525f3681b017b5/package.json)
    - [opik @ package.json](https://github.com/comet-ml/opik-openclaw/blob/fac4cc3f0fa96e96b1ee2583a0525f3681b017b5/package.json)
    - [zod @ package.json](https://github.com/comet-ml/opik-openclaw/blob/fac4cc3f0fa96e96b1ee2583a0525f3681b017b5/package.json)

- 🟡 P2 **opik-openclaw** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: opik-openclaw: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/comet-ml/opik-openclaw/blob/fac4cc3f0fa96e96b1ee2583a0525f3681b017b5/index.ts)

- 🟡 P2 **opik-openclaw** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: opik-openclaw: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:untracked
  - evidence:
    - [registerService @ index.ts:16](https://github.com/comet-ml/opik-openclaw/blob/fac4cc3f0fa96e96b1ee2583a0525f3681b017b5/index.ts#L16)

- 🟡 P2 **qqbot** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: qqbot: channel runtime needs envelope/config probes
  - state: open · compat:untracked
  - evidence:
    - [registerChannel @ index.ts:16](https://github.com/tencent-connect/openclaw-qqbot/blob/7ceb7f0913d15417c5a74d82442a672ef0382c64/index.ts#L16)

- 🟡 P2 **qqbot** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: qqbot: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [mpg123-decoder @ package.json](https://github.com/tencent-connect/openclaw-qqbot/blob/7ceb7f0913d15417c5a74d82442a672ef0382c64/package.json)
    - [silk-wasm @ package.json](https://github.com/tencent-connect/openclaw-qqbot/blob/7ceb7f0913d15417c5a74d82442a672ef0382c64/package.json)
    - [ws @ package.json](https://github.com/tencent-connect/openclaw-qqbot/blob/7ceb7f0913d15417c5a74d82442a672ef0382c64/package.json)

- 🟡 P2 **qqbot** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: qqbot: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:untracked
  - evidence:
    - [registerChannel @ index.ts:16](https://github.com/tencent-connect/openclaw-qqbot/blob/7ceb7f0913d15417c5a74d82442a672ef0382c64/index.ts#L16)

- 🟡 P2 **qqbot** `inspector-gap` `inspector-follow-up`
  - **runtime-tool-capture**: qqbot: runtime tool schema needs registration capture
  - state: open · compat:none
  - evidence:
    - [registerTool @ channel.ts:134](https://github.com/tencent-connect/openclaw-qqbot/blob/7ceb7f0913d15417c5a74d82442a672ef0382c64/src/tools/channel.ts#L134)
    - [registerTool @ remind.ts:222](https://github.com/tencent-connect/openclaw-qqbot/blob/7ceb7f0913d15417c5a74d82442a672ef0382c64/src/tools/remind.ts#L222)

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

- 🟡 P2 **secureclaw** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: secureclaw: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:untracked
  - evidence:
    - [registerService @ index.ts:295](https://github.com/adversa-ai/secureclaw/blob/bf17e2b3deb989e348b3a98080e33a7047e90ac3/secureclaw/src/index.ts#L295)
    - [registerService @ index.ts:301](https://github.com/adversa-ai/secureclaw/blob/bf17e2b3deb989e348b3a98080e33a7047e90ac3/secureclaw/src/index.ts#L301)
    - [registerService @ index.ts:307](https://github.com/adversa-ai/secureclaw/blob/bf17e2b3deb989e348b3a98080e33a7047e90ac3/secureclaw/src/index.ts#L307)

- 🟡 P2 **synology-chat** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: synology-chat: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - zod @ plugins/synology-chat/.crabpot-package/package.json

- 🟡 P2 **telnyx-sms** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: telnyx-sms: channel runtime needs envelope/config probes
  - state: open · compat:untracked
  - evidence:
    - [defineChannelPluginEntry @ index.ts:207](https://github.com/team-telnyx/telnyx-openclaw-sms-channel/blob/6e3956246cd3e0e72af649d2fd75dee6f3e46966/index.ts#L207)

- 🟡 P2 **telnyx-sms** `inspector-gap` `inspector-follow-up`
  - **package-build-artifact-entrypoint**: telnyx-sms: cold import requires package build output
  - state: open · compat:none
  - evidence:
    - [extension:./dist/index.js @ index.js](https://github.com/team-telnyx/telnyx-openclaw-sms-channel/blob/6e3956246cd3e0e72af649d2fd75dee6f3e46966/dist/index.js)
    - [setupEntry:./dist/setup-entry.js @ setup-entry.js](https://github.com/team-telnyx/telnyx-openclaw-sms-channel/blob/6e3956246cd3e0e72af649d2fd75dee6f3e46966/dist/setup-entry.js)

- 🟡 P2 **telnyx-sms** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: telnyx-sms: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:untracked
  - evidence:
    - [registerHttpRoute @ index.ts:259](https://github.com/team-telnyx/telnyx-openclaw-sms-channel/blob/6e3956246cd3e0e72af649d2fd75dee6f3e46966/index.ts#L259)

- 🟡 P2 **tlon** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: tlon: channel runtime needs envelope/config probes
  - state: open · compat:untracked
  - evidence:
    - createChatChannelPlugin @ plugins/tlon/.crabpot-package/dist/.setup/channel-DwKKUzwx.mjs:135

- 🟡 P2 **tlon** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: tlon: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - @aws-sdk/client-s3 @ plugins/tlon/.crabpot-package/package.json
    - @aws-sdk/s3-request-presigner @ plugins/tlon/.crabpot-package/package.json
    - @tloncorp/tlon-skill @ plugins/tlon/.crabpot-package/package.json
    - @urbit/aura @ plugins/tlon/.crabpot-package/package.json
    - zod @ plugins/tlon/.crabpot-package/package.json

- 🟡 P2 **twitch** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: twitch: channel runtime needs envelope/config probes
  - state: open · compat:untracked
  - evidence:
    - createChatChannelPlugin @ plugins/twitch/.crabpot-package/dist/.setup/plugin-CnPNkPhc.mjs:699

- 🟡 P2 **twitch** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: twitch: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - @twurple/api-call @ plugins/twitch/.crabpot-package/package.json
    - @twurple/auth @ plugins/twitch/.crabpot-package/package.json
    - @twurple/chat @ plugins/twitch/.crabpot-package/package.json
    - zod @ plugins/twitch/.crabpot-package/package.json

- 🟡 P2 **voice-call** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: voice-call: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - typebox @ plugins/voice-call/.crabpot-package/package.json
    - zod @ plugins/voice-call/.crabpot-package/package.json

- 🟡 P2 **voice-call** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: voice-call: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:untracked
  - evidence:
    - registerConfigMigration @ plugins/voice-call/.crabpot-package/dist/setup-api.js:132
    - registerGatewayMethod @ plugins/voice-call/.crabpot-package/dist/index.js:416
    - registerService @ plugins/voice-call/.crabpot-package/dist/index.js:582

- 🟡 P2 **web-search-plus** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: web-search-plus: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/robbyczgw-cla/web-search-plus-plugin/blob/f0f4b0cf2b71dcbe1f76248d3059dfaef2c3507b/index.ts)

- 🟡 P2 **wecom** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: wecom: channel runtime needs envelope/config probes
  - state: open · compat:untracked
  - evidence:
    - [registerChannel @ index.js:27](https://github.com/sunnoy/openclaw-plugin-wecom/blob/df2e426457a0e587bbfe63f185ffe002cbf61e6f/index.js#L27)

- 🟡 P2 **wecom** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: wecom: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@wecom/aibot-node-sdk @ package.json](https://github.com/sunnoy/openclaw-plugin-wecom/blob/df2e426457a0e587bbfe63f185ffe002cbf61e6f/package.json)
    - [file-type @ package.json](https://github.com/sunnoy/openclaw-plugin-wecom/blob/df2e426457a0e587bbfe63f185ffe002cbf61e6f/package.json)
    - [pinyin-pro @ package.json](https://github.com/sunnoy/openclaw-plugin-wecom/blob/df2e426457a0e587bbfe63f185ffe002cbf61e6f/package.json)
    - [undici @ package.json](https://github.com/sunnoy/openclaw-plugin-wecom/blob/df2e426457a0e587bbfe63f185ffe002cbf61e6f/package.json)

- 🟡 P2 **wecom** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: wecom: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:untracked
  - evidence:
    - [registerChannel @ index.js:27](https://github.com/sunnoy/openclaw-plugin-wecom/blob/df2e426457a0e587bbfe63f185ffe002cbf61e6f/index.js#L27)
    - [registerHttpRoute @ index.js:56](https://github.com/sunnoy/openclaw-plugin-wecom/blob/df2e426457a0e587bbfe63f185ffe002cbf61e6f/index.js#L56)

- 🟡 P2 **whatsapp** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: whatsapp: channel runtime needs envelope/config probes
  - state: open · compat:untracked
  - evidence:
    - createChatChannelPlugin @ plugins/whatsapp/.crabpot-package/dist/.setup/channel-DaAKkqgg.mjs:463

- 🟡 P2 **whatsapp** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: whatsapp: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - audio-decode @ plugins/whatsapp/.crabpot-package/package.json
    - baileys @ plugins/whatsapp/.crabpot-package/package.json
    - typebox @ plugins/whatsapp/.crabpot-package/package.json

- 🟡 P2 **yuanbao** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: yuanbao: channel runtime needs envelope/config probes
  - state: open · compat:untracked
  - evidence:
    - createChatChannelPlugin @ plugins/yuanbao/.crabpot-package/dist/src/channel.js:19

- 🟡 P2 **yuanbao** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: yuanbao: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - @opentelemetry/api @ plugins/yuanbao/.crabpot-package/package.json
    - protobufjs @ plugins/yuanbao/.crabpot-package/package.json
    - semver @ plugins/yuanbao/.crabpot-package/package.json
    - ws @ plugins/yuanbao/.crabpot-package/package.json

- 🟡 P2 **yuanbao** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: yuanbao: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:untracked
  - evidence:
    - registerCommand @ plugins/yuanbao/.crabpot-package/dist/index.js:16
    - registerCommand @ plugins/yuanbao/.crabpot-package/dist/index.js:17
    - registerCommand @ plugins/yuanbao/.crabpot-package/dist/index.js:18

- 🟡 P2 **yuanbao** `inspector-gap` `inspector-follow-up`
  - **runtime-tool-capture**: yuanbao: runtime tool schema needs registration capture
  - state: open · compat:none
  - evidence:
    - registerTool @ plugins/yuanbao/.crabpot-package/dist/src/business/tools/group.js:84
    - registerTool @ plugins/yuanbao/.crabpot-package/dist/src/business/tools/member.js:175
    - registerTool @ plugins/yuanbao/.crabpot-package/dist/src/business/tools/remind.js:622

- 🟡 P2 **zalo** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: zalo: channel runtime needs envelope/config probes
  - state: open · compat:untracked
  - evidence:
    - createChatChannelPlugin @ plugins/zalo/.crabpot-package/dist/.setup/channel-B-pcG9qP.mjs:267

- 🟡 P2 **zalo** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: zalo: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - zod @ plugins/zalo/.crabpot-package/package.json

- 🟡 P2 **zalouser** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: zalouser: channel runtime needs envelope/config probes
  - state: open · compat:untracked
  - evidence:
    - createChatChannelPlugin @ plugins/zalouser/.crabpot-package/dist/.setup/channel-Chv0Qbpd.mjs:481

- 🟡 P2 **zalouser** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: zalouser: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - typebox @ plugins/zalouser/.crabpot-package/package.json
    - zca-js @ plugins/zalouser/.crabpot-package/package.json
    - zod @ plugins/zalouser/.crabpot-package/package.json

## Runtime-Covered Inspector Gaps

_none_

## Upstream Metadata Issues

- 🟠 P1 **kitchen-sink** `upstream-metadata` `plugin-upstream-fix`
  - **manifest-unknown-contracts**: kitchen-sink: manifest declares unsupported contract keys
  - state: open · compat:none
  - evidence:
    - [embeddedExtensionFactories @ openclaw.plugin.json](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/openclaw.plugin.json)
  - author remediation:
    - Remove unsupported manifest contract keys or move them to a documented OpenClaw contract field.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#manifest-unknown-contracts

- 🟡 P2 **a2a-gateway** `upstream-metadata` `plugin-upstream-fix`
  - **manifest-unknown-fields**: a2a-gateway: manifest uses unsupported top-level fields
  - state: open · compat:none
  - evidence:
    - [defaultConfig @ openclaw.plugin.json](https://github.com/win4r/openclaw-a2a-gateway/blob/fdedad7499c4b6d22b3aa63a7876b9bfa1a92674/openclaw.plugin.json)
  - author remediation:
    - Move unsupported top-level manifest fields into supported package metadata or remove them.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#manifest-unknown-fields

- 🟡 P2 **a2a-gateway** `upstream-metadata` `plugin-upstream-fix`
  - **package-manifest-version-drift**: a2a-gateway: package and manifest versions drift
  - state: open · compat:none
  - evidence:
    - package:1.5.1
    - manifest:1.3.0
  - author remediation:
    - Align the plugin version declared in package.json and openclaw.plugin.json.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-manifest-version-drift

- 🟡 P2 **a2a-gateway** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: a2a-gateway: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - [package.json](https://github.com/win4r/openclaw-a2a-gateway/blob/fdedad7499c4b6d22b3aa63a7876b9bfa1a92674/package.json)
  - author remediation:
    - Declare the OpenClaw plugin API range this package supports.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-plugin-api-compat-missing

- 🟡 P2 **agentchat** `upstream-metadata` `plugin-upstream-fix`
  - **manifest-unknown-fields**: agentchat: manifest uses unsupported top-level fields
  - state: open · compat:none
  - evidence:
    - [channelEnvVars @ openclaw.plugin.json](https://github.com/agentchatme/agentchat-openclaw/blob/caee25ad8ed7a38cc4281bda397c7e0e7e90ce6a/openclaw.plugin.json)
  - author remediation:
    - Move unsupported top-level manifest fields into supported package metadata or remove them.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#manifest-unknown-fields

- 🟡 P2 **aiwerk-mcp-bridge** `upstream-metadata` `plugin-upstream-fix`
  - **manifest-unknown-fields**: aiwerk-mcp-bridge: manifest uses unsupported top-level fields
  - state: open · compat:none
  - evidence:
    - entryPoint @ plugins/aiwerk-mcp-bridge/.crabpot-package/openclaw.plugin.json
    - required @ plugins/aiwerk-mcp-bridge/.crabpot-package/openclaw.plugin.json
  - author remediation:
    - Move unsupported top-level manifest fields into supported package metadata or remove them.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#manifest-unknown-fields

- 🟡 P2 **aiwerk-mcp-bridge** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: aiwerk-mcp-bridge: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - plugins/aiwerk-mcp-bridge/.crabpot-package/package.json
  - author remediation:
    - Declare the OpenClaw plugin API range this package supports.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-plugin-api-compat-missing

- 🟡 P2 **bluebubbles** `upstream-metadata` `plugin-upstream-fix`
  - **manifest-name-missing**: bluebubbles: manifest display name is missing
  - state: open · compat:none
  - evidence:
    - [openclaw.plugin.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/bluebubbles/openclaw.plugin.json)
  - author remediation:
    - Add a display name to the plugin manifest.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#manifest-name-missing

- 🟡 P2 **bluebubbles** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: bluebubbles: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec
  - author remediation:
    - Complete the OpenClaw install metadata so ClawHub can identify the install target.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-install-metadata-incomplete

- 🟡 P2 **clawmetry** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: clawmetry: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec
    - openclaw.release.publishToNpm requires openclaw.install.npmSpec
  - author remediation:
    - Complete the OpenClaw install metadata so ClawHub can identify the install target.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-install-metadata-incomplete

- 🟡 P2 **clawrouter** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: clawrouter: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - [package.json](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/package.json)
  - author remediation:
    - Declare the OpenClaw plugin API range this package supports.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-plugin-api-compat-missing

- 🟡 P2 **composio** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: composio: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - [package.json](https://github.com/ComposioHQ/openclaw-composio-plugin/blob/47025c33224d343d9fbbf67e0a24e56eeaa18fff/package.json)
  - author remediation:
    - Declare the OpenClaw plugin API range this package supports.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-plugin-api-compat-missing

- 🟡 P2 **ddingtalk** `upstream-metadata` `plugin-upstream-fix`
  - **manifest-name-missing**: ddingtalk: manifest display name is missing
  - state: open · compat:none
  - evidence:
    - [openclaw.plugin.json](https://github.com/largezhou/openclaw-dingtalk/blob/161a9b0f6381ce7c869ef9461e8a1ba3ed0445fc/openclaw.plugin.json)
  - author remediation:
    - Add a display name to the plugin manifest.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#manifest-name-missing

- 🟡 P2 **ddingtalk** `upstream-metadata` `plugin-upstream-fix`
  - **manifest-unknown-fields**: ddingtalk: manifest uses unsupported top-level fields
  - state: open · compat:none
  - evidence:
    - [channelEnvVars @ openclaw.plugin.json](https://github.com/largezhou/openclaw-dingtalk/blob/161a9b0f6381ce7c869ef9461e8a1ba3ed0445fc/openclaw.plugin.json)
  - author remediation:
    - Move unsupported top-level manifest fields into supported package metadata or remove them.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#manifest-unknown-fields

- 🟡 P2 **ddingtalk** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: ddingtalk: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - [package.json](https://github.com/largezhou/openclaw-dingtalk/blob/161a9b0f6381ce7c869ef9461e8a1ba3ed0445fc/package.json)
  - author remediation:
    - Declare the OpenClaw plugin API range this package supports.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-plugin-api-compat-missing

- 🟡 P2 **dingtalk-connector** `upstream-metadata` `plugin-upstream-fix`
  - **manifest-unknown-fields**: dingtalk-connector: manifest uses unsupported top-level fields
  - state: open · compat:none
  - evidence:
    - [author @ openclaw.plugin.json](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/openclaw.plugin.json)
    - [main @ openclaw.plugin.json](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/openclaw.plugin.json)
  - author remediation:
    - Move unsupported top-level manifest fields into supported package metadata or remove them.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#manifest-unknown-fields

- 🟡 P2 **dingtalk-connector** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: dingtalk-connector: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - [package.json](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/package.json)
  - author remediation:
    - Declare the OpenClaw plugin API range this package supports.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-plugin-api-compat-missing

- 🟡 P2 **dingtalk-doc** `upstream-metadata` `plugin-upstream-fix`
  - **manifest-name-missing**: dingtalk-doc: manifest display name is missing
  - state: open · compat:none
  - evidence:
    - [openclaw.plugin.json](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/openclaw.plugin.json)
  - author remediation:
    - Add a display name to the plugin manifest.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#manifest-name-missing

- 🟡 P2 **dingtalk-doc** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: dingtalk-doc: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - [package.json](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/package.json)
  - author remediation:
    - Declare the OpenClaw plugin API range this package supports.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-plugin-api-compat-missing

- 🟡 P2 **hasdata** `upstream-metadata` `plugin-upstream-fix`
  - **manifest-unknown-fields**: hasdata: manifest uses unsupported top-level fields
  - state: open · compat:none
  - evidence:
    - [providerAuthEnvVars @ openclaw.plugin.json](https://github.com/HasData/hasdata-openclaw-plugin/blob/83e4a20da5f2b9331a7efff46aa622e2a6ea9c05/openclaw.plugin.json)
  - author remediation:
    - Move unsupported top-level manifest fields into supported package metadata or remove them.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#manifest-unknown-fields

- 🟡 P2 **hyperspell** `upstream-metadata` `plugin-upstream-fix`
  - **package-manifest-version-drift**: hyperspell: package and manifest versions drift
  - state: open · compat:none
  - evidence:
    - package:0.18.1
    - manifest:0.13.0
  - author remediation:
    - Align the plugin version declared in package.json and openclaw.plugin.json.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-manifest-version-drift

- 🟡 P2 **inworld-tts** `upstream-metadata` `plugin-upstream-fix`
  - **manifest-unknown-fields**: inworld-tts: manifest uses unsupported top-level fields
  - state: open · compat:none
  - evidence:
    - [providerAuthEnvVars @ openclaw.plugin.json](https://github.com/livingghost/openclaw-inworld-tts/blob/d2abaeea330ebef7530f43f8b395671f6f404aea/openclaw.plugin.json)
  - author remediation:
    - Move unsupported top-level manifest fields into supported package metadata or remove them.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#manifest-unknown-fields

- 🟡 P2 **lightclawbot** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: lightclawbot: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - plugins/lightclawbot/.crabpot-package/package.json
  - author remediation:
    - Declare the OpenClaw plugin API range this package supports.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-plugin-api-compat-missing

- 🟡 P2 **llm-trace-phoenix** `upstream-metadata` `plugin-upstream-fix`
  - **package-manifest-version-drift**: llm-trace-phoenix: package and manifest versions drift
  - state: open · compat:none
  - evidence:
    - package:1.0.3
    - manifest:1.0.1
  - author remediation:
    - Align the plugin version declared in package.json and openclaw.plugin.json.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-manifest-version-drift

- 🟡 P2 **mcp-adapter** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: mcp-adapter: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - [package.json](https://github.com/androidStern-personal/openclaw-mcp-adapter/blob/5434ce21ac780a46a493c8125e52e80a03dd2640/package.json)
  - author remediation:
    - Declare the OpenClaw plugin API range this package supports.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-plugin-api-compat-missing

- 🟡 P2 **memory-tencentdb** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: memory-tencentdb: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - plugins/memory-tencentdb/.crabpot-package/openclaw-plugin/package.json
  - author remediation:
    - Declare the OpenClaw plugin API range this package supports.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-plugin-api-compat-missing

- 🟡 P2 **memos-cloud** `upstream-metadata` `plugin-upstream-fix`
  - **manifest-unknown-fields**: memos-cloud: manifest uses unsupported top-level fields
  - state: open · compat:none
  - evidence:
    - [main @ openclaw.plugin.json](https://github.com/MemTensor/MemOS-Cloud-OpenClaw-Plugin/blob/a317661691bda94054d3d35f8c226e8bfe0018f7/openclaw.plugin.json)
  - author remediation:
    - Move unsupported top-level manifest fields into supported package metadata or remove them.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#manifest-unknown-fields

- 🟡 P2 **memos-cloud** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: memos-cloud: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - [package.json](https://github.com/MemTensor/MemOS-Cloud-OpenClaw-Plugin/blob/a317661691bda94054d3d35f8c226e8bfe0018f7/package.json)
  - author remediation:
    - Declare the OpenClaw plugin API range this package supports.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-plugin-api-compat-missing

- 🟡 P2 **memu-engine** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: memu-engine: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - [package.json](https://github.com/duxiaoxiong/memu-engine-for-OpenClaw/blob/a5a22c5faf21e30d17a1b47635829e7dd0728ae5/package.json)
  - author remediation:
    - Declare the OpenClaw plugin API range this package supports.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-plugin-api-compat-missing

- 🟡 P2 **mocrane-wecom** `upstream-metadata` `plugin-upstream-fix`
  - **manifest-name-missing**: mocrane-wecom: manifest display name is missing
  - state: open · compat:none
  - evidence:
    - [openclaw.plugin.json](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/openclaw.plugin.json)
  - author remediation:
    - Add a display name to the plugin manifest.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#manifest-name-missing

- 🟡 P2 **mocrane-wecom** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: mocrane-wecom: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - [package.json](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/package.json)
  - author remediation:
    - Declare the OpenClaw plugin API range this package supports.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-plugin-api-compat-missing

- 🟡 P2 **openclaw-telemetry** `upstream-metadata` `plugin-upstream-fix`
  - **manifest-name-missing**: openclaw-telemetry: manifest display name is missing
  - state: open · compat:none
  - evidence:
    - [openclaw.plugin.json](https://github.com/knostic/openclaw-telemetry/blob/86c2458a0dfe82d639c208c5220396feb9d53c45/openclaw.plugin.json)
  - author remediation:
    - Add a display name to the plugin manifest.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#manifest-name-missing

- 🟡 P2 **openclaw-telemetry** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: openclaw-telemetry: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - [package.json](https://github.com/knostic/openclaw-telemetry/blob/86c2458a0dfe82d639c208c5220396feb9d53c45/package.json)
  - author remediation:
    - Declare the OpenClaw plugin API range this package supports.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-plugin-api-compat-missing

- 🟡 P2 **openclaw-weixin** `upstream-metadata` `plugin-upstream-fix`
  - **manifest-name-missing**: openclaw-weixin: manifest display name is missing
  - state: open · compat:none
  - evidence:
    - plugins/openclaw-weixin/.crabpot-package/openclaw.plugin.json
  - author remediation:
    - Add a display name to the plugin manifest.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#manifest-name-missing

- 🟡 P2 **openclaw-weixin** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: openclaw-weixin: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - plugins/openclaw-weixin/.crabpot-package/package.json
  - author remediation:
    - Declare the OpenClaw plugin API range this package supports.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-plugin-api-compat-missing

- 🟡 P2 **qqbot** `upstream-metadata` `plugin-upstream-fix`
  - **manifest-unknown-fields**: qqbot: manifest uses unsupported top-level fields
  - state: open · compat:none
  - evidence:
    - [capabilities @ openclaw.plugin.json](https://github.com/tencent-connect/openclaw-qqbot/blob/7ceb7f0913d15417c5a74d82442a672ef0382c64/openclaw.plugin.json)
    - [extensions @ openclaw.plugin.json](https://github.com/tencent-connect/openclaw-qqbot/blob/7ceb7f0913d15417c5a74d82442a672ef0382c64/openclaw.plugin.json)
  - author remediation:
    - Move unsupported top-level manifest fields into supported package metadata or remove them.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#manifest-unknown-fields

- 🟡 P2 **qqbot** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: qqbot: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - [package.json](https://github.com/tencent-connect/openclaw-qqbot/blob/7ceb7f0913d15417c5a74d82442a672ef0382c64/package.json)
  - author remediation:
    - Declare the OpenClaw plugin API range this package supports.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-plugin-api-compat-missing

- 🟡 P2 **secureclaw** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: secureclaw: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - [package.json](https://github.com/adversa-ai/secureclaw/blob/bf17e2b3deb989e348b3a98080e33a7047e90ac3/secureclaw/package.json)
  - author remediation:
    - Declare the OpenClaw plugin API range this package supports.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-plugin-api-compat-missing

- 🟡 P2 **telnyx-sms** `upstream-metadata` `plugin-upstream-fix`
  - **manifest-unknown-fields**: telnyx-sms: manifest uses unsupported top-level fields
  - state: open · compat:none
  - evidence:
    - [channelEnvVars @ openclaw.plugin.json](https://github.com/team-telnyx/telnyx-openclaw-sms-channel/blob/6e3956246cd3e0e72af649d2fd75dee6f3e46966/openclaw.plugin.json)
  - author remediation:
    - Move unsupported top-level manifest fields into supported package metadata or remove them.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#manifest-unknown-fields

- 🟡 P2 **wecom** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: wecom: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - [package.json](https://github.com/sunnoy/openclaw-plugin-wecom/blob/df2e426457a0e587bbfe63f185ffe002cbf61e6f/package.json)
  - author remediation:
    - Declare the OpenClaw plugin API range this package supports.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-plugin-api-compat-missing

- 🟡 P2 **yuanbao** `upstream-metadata` `plugin-upstream-fix`
  - **manifest-unknown-fields**: yuanbao: manifest uses unsupported top-level fields
  - state: open · compat:none
  - evidence:
    - channelEnvVars @ plugins/yuanbao/.crabpot-package/openclaw.plugin.json
  - author remediation:
    - Move unsupported top-level manifest fields into supported package metadata or remove them.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#manifest-unknown-fields

- 🟡 P2 **yuanbao** `upstream-metadata` `plugin-upstream-fix`
  - **package-openclaw-unsupported-metadata**: yuanbao: package declares unsupported OpenClaw metadata
  - state: open · compat:none
  - evidence:
    - openclaw.bundle
  - author remediation:
    - Remove unsupported OpenClaw package metadata fields.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-openclaw-unsupported-metadata

- 🟡 P2 **yuanbao** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: yuanbao: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - plugins/yuanbao/.crabpot-package/package.json
  - author remediation:
    - Declare the OpenClaw plugin API range this package supports.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-plugin-api-compat-missing

- 🟢 P3 **clawrouter** `upstream-metadata` `plugin-upstream-fix`
  - **security-manifest-schema-unavailable**: clawrouter: plugin security manifest references an unavailable schema
  - state: open · compat:none
  - evidence:
    - [plugin-security.json](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/openclaw.security.json%3A%24schema%3Dhttps%3A/openclaw.ai/schemas/plugin-security.json)
  - author remediation:
    - Remove or update the unsupported security manifest schema reference.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#security-manifest-schema-unavailable

- 🟢 P3 **clawrouter** `upstream-metadata` `plugin-upstream-fix`
  - **unrecognized-security-manifest**: clawrouter: plugin ships an unsupported security manifest
  - state: open · compat:none
  - evidence:
    - [openclaw.security.json](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/openclaw.security.json)
  - author remediation:
    - Remove unsupported security manifest files until OpenClaw documents a versioned security manifest schema.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#unrecognized-security-manifest

## Issues

- 🔴 P0 **aiwerk-mcp-bridge** `live-issue` `core-compat-adapter`
  - **unknown-hook-name**: aiwerk-mcp-bridge: fixture uses a hook missing from target OpenClaw
  - state: blocking · compat:none · live
  - evidence:
    - deactivate @ plugins/aiwerk-mcp-bridge/.crabpot-package/dist/index.js:389
    - deactivate @ plugins/aiwerk-mcp-bridge/.crabpot-package/index.ts:462

- 🔴 P0 **connectclaw** `live-issue` `core-compat-adapter`
  - **unknown-hook-name**: connectclaw: fixture uses a hook missing from target OpenClaw
  - state: blocking · compat:none · live
  - evidence:
    - [before_agent_start @ hooks.ts:17](https://github.com/osipov-anton/connectclaw/blob/7a4e2646e914de075435b3837123cc03c3edae36/packages/plugin/src/hooks.ts#L17)

- 🔴 P0 **kitchen-sink** `live-issue` `core-compat-adapter`
  - **unknown-hook-name**: kitchen-sink: fixture uses a hook missing from target OpenClaw
  - state: blocking · compat:none · live
  - evidence:
    - [skill_proposal_changed @ generated-hooks.js:40](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-hooks.js#L40)
    - [skill_proposal_evaluate @ generated-hooks.js:41](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-hooks.js#L41)

- 🔴 P0 **kitchen-sink** `live-issue` `core-compat-adapter`
  - **unknown-registration-name**: kitchen-sink: fixture calls a registrar missing from target OpenClaw
  - state: blocking · compat:none · live
  - evidence:
    - [registerCodexAppServerExtensionFactory @ generated-registrars.js:12](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L12)
    - [registerHostedMediaResolver @ generated-registrars.js:23](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L23)
    - [registerTextTransforms @ generated-registrars.js:51](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L51)

- 🔴 P0 **memos-cloud** `live-issue` `core-compat-adapter`
  - **unknown-hook-name**: memos-cloud: fixture uses a hook missing from target OpenClaw
  - state: blocking · compat:none · live
  - evidence:
    - [before_agent_start @ index.js:857](https://github.com/MemTensor/MemOS-Cloud-OpenClaw-Plugin/blob/a317661691bda94054d3d35f8c226e8bfe0018f7/index.js#L857)

- 🔴 P0 **openclaw-telemetry** `live-issue` `core-compat-adapter`
  - **unknown-hook-name**: openclaw-telemetry: fixture uses a hook missing from target OpenClaw
  - state: blocking · compat:none · live
  - evidence:
    - [before_agent_start @ index.ts:53](https://github.com/knostic/openclaw-telemetry/blob/86c2458a0dfe82d639c208c5220396feb9d53c45/index.ts#L53)

- 🔴 P0 **opik-openclaw** `live-issue` `core-compat-adapter`
  - **unknown-hook-name**: opik-openclaw: fixture uses a hook missing from target OpenClaw
  - state: blocking · compat:none · live
  - evidence:
    - [subagent_spawning @ subagent.ts:38](https://github.com/comet-ml/opik-openclaw/blob/fac4cc3f0fa96e96b1ee2583a0525f3681b017b5/src/service/hooks/subagent.ts#L38)

- 🟠 P1 **a2a-gateway** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: a2a-gateway: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **agentchat** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: agentchat: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - channel-env-vars

- 🟠 P1 **agentchat** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: agentchat: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - channel.runtime.envelope-config-metadata

- 🟠 P1 **agentchat** `compat-gap` `core-compat-adapter`
  - **sdk-export-missing**: agentchat: plugin SDK import aliases are missing from target package exports
  - state: open · compat:untracked
  - evidence:
    - [openclaw/plugin-sdk/channel-lifecycle @ gateway.ts:27](https://github.com/agentchatme/agentchat-openclaw/blob/caee25ad8ed7a38cc4281bda397c7e0e7e90ce6a/src/binding/gateway.ts#L27)

- 🟠 P1 **bluebubbles** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: bluebubbles: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - channel.runtime.envelope-config-metadata

- 🟠 P1 **bluebubbles** `compat-gap` `core-compat-adapter`
  - **sdk-export-missing**: bluebubbles: plugin SDK import aliases are missing from target package exports
  - state: open · compat:untracked
  - evidence:
    - [openclaw/plugin-sdk/channel-lifecycle @ channel-BSIXOcHe.js:13](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/bluebubbles/dist/channel-BSIXOcHe.js#L13)
    - [openclaw/plugin-sdk/channel-reply-pipeline @ monitor-processing-Dy-LY2QQ.js:28](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/bluebubbles/dist/monitor-processing-Dy-LY2QQ.js#L28)
    - [openclaw/plugin-sdk/channel-streaming @ probe-B4I0cEVm.js:6](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/bluebubbles/dist/probe-B4I0cEVm.js#L6)
    - [openclaw/plugin-sdk/command-auth @ monitor-processing-Dy-LY2QQ.js:29](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/bluebubbles/dist/monitor-processing-Dy-LY2QQ.js#L29)
    - [openclaw/plugin-sdk/text-runtime @ channel-BSIXOcHe.js:18](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/bluebubbles/dist/channel-BSIXOcHe.js#L18)
    - [openclaw/plugin-sdk/text-runtime @ monitor-processing-Dy-LY2QQ.js:8](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/bluebubbles/dist/monitor-processing-Dy-LY2QQ.js#L8)
    - [openclaw/plugin-sdk/text-runtime @ probe-B4I0cEVm.js:4](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/bluebubbles/dist/probe-B4I0cEVm.js#L4)
    - [openclaw/plugin-sdk/text-runtime @ reactions-D1ETgpPi.js:3](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/bluebubbles/dist/reactions-D1ETgpPi.js#L3)
    - [openclaw/plugin-sdk/text-runtime @ webhook-shared-CoiIKIWN.js:1](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/bluebubbles/dist/webhook-shared-CoiIKIWN.js#L1)
    - [openclaw/plugin-sdk/webhook-path @ webhook-shared-CoiIKIWN.js:2](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/bluebubbles/dist/webhook-shared-CoiIKIWN.js#L2)
    - [openclaw/plugin-sdk/zod @ config-schema-a7F7uzDv.js:3](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/bluebubbles/dist/config-schema-a7F7uzDv.js#L3)

- 🟠 P1 **brave-plugin** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: brave-plugin: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **clawmetry** `inspector-gap` `inspector-follow-up`
  - **conversation-access-hook**: clawmetry: conversation-access hooks need privacy-boundary probes
  - state: open · compat:untracked
  - evidence:
    - [llm_output @ service.ts:117](https://github.com/vivekchand/clawmetry/blob/6228537b0271572d55f5bf02ee130f76038f7cd5/clawhub-plugin/src/service.ts#L117)

- 🟠 P1 **clawmetry** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: clawmetry: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **clawmetry** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: clawmetry: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - hook.llm-observer.privacy-payload

- 🟠 P1 **clawrouter** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: clawrouter: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **codex** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: codex: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **codex-app-server** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: codex-app-server: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **connectclaw** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: connectclaw: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **connectclaw** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: connectclaw: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - legacy-before-agent-start

- 🟠 P1 **connectclaw** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: connectclaw: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - legacy-root-sdk-import

- 🟠 P1 **connectclaw** `compat-gap` `core-compat-adapter`
  - **sdk-export-missing**: connectclaw: plugin SDK import aliases are missing from target package exports
  - state: open · compat:untracked
  - evidence:
    - [openclaw/plugin-sdk @ tools.ts:2](https://github.com/osipov-anton/connectclaw/blob/7a4e2646e914de075435b3837123cc03c3edae36/packages/plugin/src/tools.ts#L2)

- 🟠 P1 **ddingtalk** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: ddingtalk: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - channel-env-vars

- 🟠 P1 **ddingtalk** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: ddingtalk: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - channel.runtime.envelope-config-metadata

- 🟠 P1 **diagnostics-otel** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: diagnostics-otel: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **diagnostics-prometheus** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: diagnostics-prometheus: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **diffs** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: diffs: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **dingtalk-connector** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: dingtalk-connector: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **dingtalk-connector** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: dingtalk-connector: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - channel.runtime.envelope-config-metadata

- 🟠 P1 **dingtalk-connector** `compat-gap` `core-compat-adapter`
  - **sdk-export-missing**: dingtalk-connector: plugin SDK import aliases are missing from target package exports
  - state: open · compat:untracked
  - evidence:
    - [openclaw/plugin-sdk/channel-runtime @ reply-dispatcher.ts:21](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/reply-dispatcher.ts#L21)
    - [openclaw/plugin-sdk/config-runtime @ gateway-methods.ts:131](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/gateway-methods.ts#L131)
    - [openclaw/plugin-sdk/config-runtime @ gateway-methods.ts:191](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/gateway-methods.ts#L191)
    - [openclaw/plugin-sdk/config-runtime @ gateway-methods.ts:259](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/gateway-methods.ts#L259)
    - [openclaw/plugin-sdk/config-runtime @ gateway-methods.ts:312](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/gateway-methods.ts#L312)
    - [openclaw/plugin-sdk/config-runtime @ gateway-methods.ts:352](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/gateway-methods.ts#L352)
    - [openclaw/plugin-sdk/config-runtime @ gateway-methods.ts:389](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/gateway-methods.ts#L389)
    - [openclaw/plugin-sdk/config-runtime @ gateway-methods.ts:426](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/gateway-methods.ts#L426)
    - [openclaw/plugin-sdk/config-runtime @ gateway-methods.ts:453](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/gateway-methods.ts#L453)
    - [openclaw/plugin-sdk/config-runtime @ gateway-methods.ts:507](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/gateway-methods.ts#L507)
    - [openclaw/plugin-sdk/config-runtime @ gateway-methods.ts:594](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/gateway-methods.ts#L594)
    - [openclaw/plugin-sdk/config-runtime @ gateway-methods.ts:61](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/gateway-methods.ts#L61)
    - [openclaw/plugin-sdk/config-runtime @ gateway-methods.ts:653](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/gateway-methods.ts#L653)
    - [openclaw/plugin-sdk/config-runtime @ gateway-methods.ts:720](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/gateway-methods.ts#L720)
    - [openclaw/plugin-sdk/config-runtime @ card-bridge.ts:186](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/services/card-bridge.ts#L186)
    - [openclaw/plugin-sdk/config-runtime @ card-bridge.ts:339](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/services/card-bridge.ts#L339)

- 🟠 P1 **dingtalk-doc** `inspector-gap` `inspector-follow-up`
  - **before-tool-call-probe**: dingtalk-doc: before_tool_call needs terminal/block/approval probes
  - state: open · compat:untracked
  - evidence:
    - [before_tool_call @ index.ts:41](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/index.ts#L41)

- 🟠 P1 **dingtalk-doc** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: dingtalk-doc: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - hook.before_tool_call.terminal-block-approval

- 🟠 P1 **dingtalk-doc** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: dingtalk-doc: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - legacy-root-sdk-import

- 🟠 P1 **dingtalk-doc** `compat-gap` `core-compat-adapter`
  - **sdk-export-missing**: dingtalk-doc: plugin SDK import aliases are missing from target package exports
  - state: open · compat:untracked
  - evidence:
    - [openclaw/plugin-sdk @ index.ts:11](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/index.ts#L11)

- 🟠 P1 **discord** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: discord: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **discord** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: discord: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - channel.runtime.envelope-config-metadata

- 🟠 P1 **discord** `inspector-gap` `inspector-follow-up`
  - **sdk-export-missing**: discord: SDK import coverage requires an eligible host
  - state: open · compat:untracked
  - evidence:
    - openclaw/plugin-sdk/heartbeat-runtime @ plugins/discord/.crabpot-package/dist/.setup/provider-BBDuE14w.mjs:68
    - Host 2026.10.6 does not satisfy the declared plugin API range >=2026.10.10; recheck with an eligible host before assigning a core compatibility repair.
    - Unassessed SDK compatibility record: plugin-sdk-export-aliases

- 🟠 P1 **feishu** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: feishu: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - channel.runtime.envelope-config-metadata

- 🟠 P1 **google-meet** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: google-meet: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **hasdata** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: hasdata: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - provider-auth-env-vars

- 🟠 P1 **honcho** `inspector-gap` `inspector-follow-up`
  - **conversation-access-hook**: honcho: conversation-access hooks need privacy-boundary probes
  - state: open · compat:untracked
  - evidence:
    - [agent_end @ capture.ts:137](https://github.com/plastic-labs/openclaw-honcho/blob/25f644cfd985f437951cc085b91138be22e42388/hooks/capture.ts#L137)
    - [llm_output @ telemetry.ts:31](https://github.com/plastic-labs/openclaw-honcho/blob/25f644cfd985f437951cc085b91138be22e42388/hooks/telemetry.ts#L31)

- 🟠 P1 **honcho** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: honcho: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **honcho** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: honcho: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - hook.llm-observer.privacy-payload

- 🟠 P1 **hyperspell** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: hyperspell: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **inworld-tts** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: inworld-tts: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **inworld-tts** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: inworld-tts: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - provider-auth-env-vars

- 🟠 P1 **kitchen-sink** `inspector-gap` `inspector-follow-up`
  - **before-tool-call-probe**: kitchen-sink: before_tool_call needs terminal/block/approval probes
  - state: open · compat:untracked
  - evidence:
    - [before_tool_call @ generated-hooks.js:19](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-hooks.js#L19)

- 🟠 P1 **kitchen-sink** `inspector-gap` `inspector-follow-up`
  - **conversation-access-hook**: kitchen-sink: conversation-access hooks need privacy-boundary probes
  - state: open · compat:untracked
  - evidence:
    - [agent_end @ generated-hooks.js:7](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-hooks.js#L7)
    - [llm_input @ generated-hooks.js:27](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-hooks.js#L27)
    - [llm_output @ generated-hooks.js:28](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-hooks.js#L28)

- 🟠 P1 **kitchen-sink** `upstream-metadata` `plugin-upstream-fix`
  - **manifest-unknown-contracts**: kitchen-sink: manifest declares unsupported contract keys
  - state: open · compat:none
  - evidence:
    - [embeddedExtensionFactories @ openclaw.plugin.json](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/openclaw.plugin.json)
  - author remediation:
    - Remove unsupported manifest contract keys or move them to a documented OpenClaw contract field.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#manifest-unknown-contracts

- 🟠 P1 **kitchen-sink** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: kitchen-sink: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **kitchen-sink** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: kitchen-sink: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - channel.runtime.envelope-config-metadata

- 🟠 P1 **kitchen-sink** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: kitchen-sink: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - hook.before_tool_call.terminal-block-approval

- 🟠 P1 **kitchen-sink** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: kitchen-sink: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - hook.llm-observer.privacy-payload

- 🟠 P1 **lightclawbot** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: lightclawbot: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **lightclawbot** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: lightclawbot: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - channel.runtime.envelope-config-metadata

- 🟠 P1 **lightclawbot** `compat-gap` `core-compat-adapter`
  - **sdk-export-missing**: lightclawbot: plugin SDK import aliases are missing from target package exports
  - state: open · compat:untracked
  - evidence:
    - openclaw/plugin-sdk/channel-reply-pipeline @ plugins/lightclawbot/.crabpot-package/dist/src/inbound.js:264
    - openclaw/plugin-sdk/config-runtime @ plugins/lightclawbot/.crabpot-package/dist/src/utils/openclaw-compat.js:84

- 🟠 P1 **llm-trace-phoenix** `inspector-gap` `inspector-follow-up`
  - **conversation-access-hook**: llm-trace-phoenix: conversation-access hooks need privacy-boundary probes
  - state: open · compat:untracked
  - evidence:
    - [llm_input @ index.js:105](https://github.com/pingshian0131/openclaw-plugin-llm-trace-phoenix/blob/ad8a34681b4d49a1b7d75bb8f6ac9b2f2ea3a8e9/dist/index.js#L105)
    - [llm_input @ index.ts:202](https://github.com/pingshian0131/openclaw-plugin-llm-trace-phoenix/blob/ad8a34681b4d49a1b7d75bb8f6ac9b2f2ea3a8e9/index.ts#L202)
    - [llm_output @ index.js:118](https://github.com/pingshian0131/openclaw-plugin-llm-trace-phoenix/blob/ad8a34681b4d49a1b7d75bb8f6ac9b2f2ea3a8e9/dist/index.js#L118)
    - [llm_output @ index.ts:216](https://github.com/pingshian0131/openclaw-plugin-llm-trace-phoenix/blob/ad8a34681b4d49a1b7d75bb8f6ac9b2f2ea3a8e9/index.ts#L216)

- 🟠 P1 **llm-trace-phoenix** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: llm-trace-phoenix: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - hook.llm-observer.privacy-payload

- 🟠 P1 **lossless-claw** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: lossless-claw: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **matrix** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: matrix: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **matrix** `compat-gap` `core-compat-adapter`
  - **sdk-export-missing**: matrix: plugin SDK import aliases are missing from target package exports
  - state: open · compat:untracked
  - evidence:
    - [openclaw/plugin-sdk/plugin-state-test-runtime @ doctor-contract-api.test-support.ts:7](https://github.com/openclaw/openclaw/blob/5f84c5b8a9889ab7035c197bc25bbe0aa8a20765/extensions/matrix/doctor-contract-api.test-support.ts#L7)
    - [openclaw/plugin-sdk/plugin-state-test-runtime @ sync-store.test-support.ts:5](https://github.com/openclaw/openclaw/blob/5f84c5b8a9889ab7035c197bc25bbe0aa8a20765/extensions/matrix/src/matrix/client/sync-store.test-support.ts#L5)
    - [openclaw/plugin-sdk/plugin-state-test-runtime @ crypto-persistence.test-support.ts:5](https://github.com/openclaw/openclaw/blob/5f84c5b8a9889ab7035c197bc25bbe0aa8a20765/extensions/matrix/src/matrix/sdk/crypto-persistence.test-support.ts#L5)
    - [openclaw/plugin-sdk/plugin-state-test-runtime @ recovery-persistence.test-support.ts:7](https://github.com/openclaw/openclaw/blob/5f84c5b8a9889ab7035c197bc25bbe0aa8a20765/extensions/matrix/src/matrix/sdk/recovery-persistence.test-support.ts#L7)
    - [openclaw/plugin-sdk/sqlite-runtime-testing @ sync-store.test-support.ts:6](https://github.com/openclaw/openclaw/blob/5f84c5b8a9889ab7035c197bc25bbe0aa8a20765/extensions/matrix/src/matrix/client/sync-store.test-support.ts#L6)
    - [openclaw/plugin-sdk/test-env @ test-support.ts:2](https://github.com/openclaw/openclaw/blob/5f84c5b8a9889ab7035c197bc25bbe0aa8a20765/extensions/matrix/test-support.ts#L2)

- 🟠 P1 **mattermost** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: mattermost: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **mattermost** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: mattermost: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - channel.runtime.envelope-config-metadata

- 🟠 P1 **mattermost** `compat-gap` `core-compat-adapter`
  - **sdk-export-missing**: mattermost: plugin SDK import aliases are missing from target package exports
  - state: open · compat:untracked
  - evidence:
    - [openclaw/plugin-sdk/channel-ingress-test-runtime @ monitor.ingress-debounce.test-support.ts:5](https://github.com/openclaw/openclaw/blob/5f84c5b8a9889ab7035c197bc25bbe0aa8a20765/extensions/mattermost/src/mattermost/monitor.ingress-debounce.test-support.ts#L5)
    - [openclaw/plugin-sdk/test-env @ monitor.ingress-debounce.test-support.ts:16](https://github.com/openclaw/openclaw/blob/5f84c5b8a9889ab7035c197bc25bbe0aa8a20765/extensions/mattermost/src/mattermost/monitor.ingress-debounce.test-support.ts#L16)
    - [openclaw/plugin-sdk/test-env @ reactions.test-helpers.ts:1](https://github.com/openclaw/openclaw/blob/5f84c5b8a9889ab7035c197bc25bbe0aa8a20765/extensions/mattermost/src/mattermost/reactions.test-helpers.ts#L1)

- 🟠 P1 **mcp-adapter** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: mcp-adapter: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **memory-lancedb** `inspector-gap` `inspector-follow-up`
  - **conversation-access-hook**: memory-lancedb: conversation-access hooks need privacy-boundary probes
  - state: open · compat:untracked
  - evidence:
    - agent_end @ plugins/memory-lancedb/.crabpot-package/dist/index.js:315

- 🟠 P1 **memory-lancedb** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: memory-lancedb: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **memory-lancedb** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: memory-lancedb: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - hook.llm-observer.privacy-payload

- 🟠 P1 **memory-tencentdb** `inspector-gap` `inspector-follow-up`
  - **conversation-access-hook**: memory-tencentdb: conversation-access hooks need privacy-boundary probes
  - state: open · compat:untracked
  - evidence:
    - agent_end @ plugins/memory-tencentdb/.crabpot-package/dist/index.mjs:1095
    - agent_end @ plugins/memory-tencentdb/.crabpot-package/dist/index.mjs:1256
    - agent_end @ plugins/memory-tencentdb/.crabpot-package/dist/index.mjs:21802
    - agent_end @ plugins/memory-tencentdb/.crabpot-package/index.ts:808
    - agent_end @ plugins/memory-tencentdb/.crabpot-package/openclaw-plugin/index.ts:209
    - agent_end @ plugins/memory-tencentdb/.crabpot-package/src/offload-client/index.ts:52

- 🟠 P1 **memory-tencentdb** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: memory-tencentdb: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **memory-tencentdb** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: memory-tencentdb: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - hook.llm-observer.privacy-payload

- 🟠 P1 **memory-tencentdb** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: memory-tencentdb: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - legacy-root-sdk-import

- 🟠 P1 **memory-tencentdb** `compat-gap` `core-compat-adapter`
  - **sdk-export-missing**: memory-tencentdb: plugin SDK import aliases are missing from target package exports
  - state: open · compat:untracked
  - evidence:
    - openclaw/plugin-sdk @ plugins/memory-tencentdb/.crabpot-package/dist/index.mjs:8466
    - openclaw/plugin-sdk @ plugins/memory-tencentdb/.crabpot-package/src/offload/index.ts:2190

- 🟠 P1 **memos-cloud** `inspector-gap` `inspector-follow-up`
  - **conversation-access-hook**: memos-cloud: conversation-access hooks need privacy-boundary probes
  - state: open · compat:untracked
  - evidence:
    - [agent_end @ index.js:860](https://github.com/MemTensor/MemOS-Cloud-OpenClaw-Plugin/blob/a317661691bda94054d3d35f8c226e8bfe0018f7/index.js#L860)

- 🟠 P1 **memos-cloud** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: memos-cloud: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **memos-cloud** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: memos-cloud: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - hook.llm-observer.privacy-payload

- 🟠 P1 **memos-cloud** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: memos-cloud: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - legacy-before-agent-start

- 🟠 P1 **mocrane-wecom** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: mocrane-wecom: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **mocrane-wecom** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: mocrane-wecom: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - channel.runtime.envelope-config-metadata

- 🟠 P1 **mocrane-wecom** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: mocrane-wecom: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - legacy-root-sdk-import

- 🟠 P1 **mocrane-wecom** `compat-gap` `core-compat-adapter`
  - **sdk-export-missing**: mocrane-wecom: plugin SDK import aliases are missing from target package exports
  - state: open · compat:untracked
  - evidence:
    - [openclaw/plugin-sdk @ plugin-sdk-shim.ts:30](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/src/compat/plugin-sdk-shim.ts#L30)

- 🟠 P1 **msteams** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: msteams: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - channel.runtime.envelope-config-metadata

- 🟠 P1 **nemoclaw** `inspector-gap` `inspector-follow-up`
  - **before-tool-call-probe**: nemoclaw: before_tool_call needs terminal/block/approval probes
  - state: open · compat:untracked
  - evidence:
    - [before_tool_call @ index.ts:359](https://github.com/NVIDIA/NemoClaw/blob/37ca4cb4220265c2a12b9d9b8a120d0d23a338dd/nemoclaw/src/index.ts#L359)

- 🟠 P1 **nemoclaw** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: nemoclaw: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **nemoclaw** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: nemoclaw: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - hook.before_tool_call.terminal-block-approval

- 🟠 P1 **nextcloud-talk** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: nextcloud-talk: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - channel.runtime.envelope-config-metadata

- 🟠 P1 **nostr** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: nostr: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **nostr** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: nostr: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - channel.runtime.envelope-config-metadata

- 🟠 P1 **openclaw-telemetry** `inspector-gap` `inspector-follow-up`
  - **before-tool-call-probe**: openclaw-telemetry: before_tool_call needs terminal/block/approval probes
  - state: open · compat:untracked
  - evidence:
    - [before_tool_call @ index.ts:12](https://github.com/knostic/openclaw-telemetry/blob/86c2458a0dfe82d639c208c5220396feb9d53c45/index.ts#L12)

- 🟠 P1 **openclaw-telemetry** `inspector-gap` `inspector-follow-up`
  - **conversation-access-hook**: openclaw-telemetry: conversation-access hooks need privacy-boundary probes
  - state: open · compat:untracked
  - evidence:
    - [agent_end @ index.ts:62](https://github.com/knostic/openclaw-telemetry/blob/86c2458a0dfe82d639c208c5220396feb9d53c45/index.ts#L62)

- 🟠 P1 **openclaw-telemetry** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: openclaw-telemetry: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **openclaw-telemetry** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: openclaw-telemetry: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - hook.before_tool_call.terminal-block-approval

- 🟠 P1 **openclaw-telemetry** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: openclaw-telemetry: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - hook.llm-observer.privacy-payload

- 🟠 P1 **openclaw-telemetry** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: openclaw-telemetry: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - legacy-before-agent-start

- 🟠 P1 **openclaw-telemetry** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: openclaw-telemetry: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - legacy-root-sdk-import

- 🟠 P1 **openclaw-telemetry** `compat-gap` `core-compat-adapter`
  - **sdk-export-missing**: openclaw-telemetry: plugin SDK import aliases are missing from target package exports
  - state: open · compat:untracked
  - evidence:
    - [openclaw/plugin-sdk @ service.ts:2](https://github.com/knostic/openclaw-telemetry/blob/86c2458a0dfe82d639c208c5220396feb9d53c45/src/service.ts#L2)

- 🟠 P1 **openclaw-weixin** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: openclaw-weixin: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **openclaw-weixin** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: openclaw-weixin: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - channel.runtime.envelope-config-metadata

- 🟠 P1 **opik-openclaw** `inspector-gap` `inspector-follow-up`
  - **before-tool-call-probe**: opik-openclaw: before_tool_call needs terminal/block/approval probes
  - state: open · compat:untracked
  - evidence:
    - [before_tool_call @ tool.ts:34](https://github.com/comet-ml/opik-openclaw/blob/fac4cc3f0fa96e96b1ee2583a0525f3681b017b5/src/service/hooks/tool.ts#L34)

- 🟠 P1 **opik-openclaw** `inspector-gap` `inspector-follow-up`
  - **conversation-access-hook**: opik-openclaw: conversation-access hooks need privacy-boundary probes
  - state: open · compat:untracked
  - evidence:
    - [agent_end @ service.ts:581](https://github.com/comet-ml/opik-openclaw/blob/fac4cc3f0fa96e96b1ee2583a0525f3681b017b5/src/service.ts#L581)
    - [llm_input @ llm.ts:39](https://github.com/comet-ml/opik-openclaw/blob/fac4cc3f0fa96e96b1ee2583a0525f3681b017b5/src/service/hooks/llm.ts#L39)
    - [llm_output @ llm.ts:150](https://github.com/comet-ml/opik-openclaw/blob/fac4cc3f0fa96e96b1ee2583a0525f3681b017b5/src/service/hooks/llm.ts#L150)

- 🟠 P1 **opik-openclaw** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: opik-openclaw: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **opik-openclaw** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: opik-openclaw: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - hook.before_tool_call.terminal-block-approval

- 🟠 P1 **opik-openclaw** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: opik-openclaw: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - hook.llm-observer.privacy-payload

- 🟠 P1 **opik-openclaw** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: opik-openclaw: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - legacy-root-sdk-import

- 🟠 P1 **opik-openclaw** `compat-gap` `core-compat-adapter`
  - **sdk-export-missing**: opik-openclaw: plugin SDK import aliases are missing from target package exports
  - state: open · compat:untracked
  - evidence:
    - [openclaw/plugin-sdk @ index.ts:2](https://github.com/comet-ml/opik-openclaw/blob/fac4cc3f0fa96e96b1ee2583a0525f3681b017b5/index.ts#L2)
    - [openclaw/plugin-sdk @ service.ts:6](https://github.com/comet-ml/opik-openclaw/blob/fac4cc3f0fa96e96b1ee2583a0525f3681b017b5/src/service.ts#L6)

- 🟠 P1 **qqbot** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: qqbot: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **qqbot** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: qqbot: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - channel.runtime.envelope-config-metadata

- 🟠 P1 **qqbot** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: qqbot: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - legacy-root-sdk-import

- 🟠 P1 **qqbot** `compat-gap` `core-compat-adapter`
  - **sdk-export-missing**: qqbot: plugin SDK import aliases are missing from target package exports
  - state: open · compat:untracked
  - evidence:
    - [openclaw/plugin-sdk @ index.ts:2](https://github.com/tencent-connect/openclaw-qqbot/blob/7ceb7f0913d15417c5a74d82442a672ef0382c64/index.ts#L2)

- 🟠 P1 **secureclaw** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: secureclaw: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **telnyx-sms** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: telnyx-sms: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **telnyx-sms** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: telnyx-sms: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - channel-env-vars

- 🟠 P1 **telnyx-sms** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: telnyx-sms: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - channel.runtime.envelope-config-metadata

- 🟠 P1 **telnyx-sms** `inspector-gap` `inspector-follow-up`
  - **sdk-export-missing**: telnyx-sms: SDK import coverage requires an eligible host
  - state: open · compat:untracked
  - evidence:
    - [openclaw/plugin-sdk/direct-dm @ inbound.ts:2](https://github.com/team-telnyx/telnyx-openclaw-sms-channel/blob/6e3956246cd3e0e72af649d2fd75dee6f3e46966/src/inbound.ts#L2)
    - Host 2026.10.6 does not satisfy the declared plugin API range 2026.4; recheck with an eligible host before assigning a core compatibility repair.
    - Unassessed SDK compatibility record: plugin-sdk-export-aliases

- 🟠 P1 **tlon** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: tlon: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - channel.runtime.envelope-config-metadata

- 🟠 P1 **twitch** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: twitch: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - channel.runtime.envelope-config-metadata

- 🟠 P1 **voice-call** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: voice-call: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **wecom** `inspector-gap` `inspector-follow-up`
  - **before-tool-call-probe**: wecom: before_tool_call needs terminal/block/approval probes
  - state: open · compat:untracked
  - evidence:
    - [before_tool_call @ index.js:76](https://github.com/sunnoy/openclaw-plugin-wecom/blob/df2e426457a0e587bbfe63f185ffe002cbf61e6f/index.js#L76)

- 🟠 P1 **wecom** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: wecom: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **wecom** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: wecom: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - channel.runtime.envelope-config-metadata

- 🟠 P1 **wecom** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: wecom: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - hook.before_tool_call.terminal-block-approval

- 🟠 P1 **whatsapp** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: whatsapp: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - channel.runtime.envelope-config-metadata

- 🟠 P1 **yuanbao** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: yuanbao: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **yuanbao** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: yuanbao: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - channel-env-vars

- 🟠 P1 **yuanbao** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: yuanbao: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - channel.runtime.envelope-config-metadata

- 🟠 P1 **yuanbao** `compat-gap` `core-compat-adapter`
  - **sdk-export-missing**: yuanbao: plugin SDK import aliases are missing from target package exports
  - state: open · compat:untracked
  - evidence:
    - openclaw/plugin-sdk/channel-reply-pipeline @ plugins/yuanbao/.crabpot-package/dist/src/business/pipeline/middlewares/dispatch-reply.js:5
    - openclaw/plugin-sdk/command-auth @ plugins/yuanbao/.crabpot-package/dist/src/business/commands/command-sync/index.js:2
    - openclaw/plugin-sdk/command-auth @ plugins/yuanbao/.crabpot-package/dist/src/business/pipeline/middlewares/guard-command.js:5

- 🟠 P1 **zalo** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: zalo: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - channel.runtime.envelope-config-metadata

- 🟠 P1 **zalouser** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: zalouser: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - channel.runtime.envelope-config-metadata

- 🟡 P2 **a2a-gateway** `upstream-metadata` `plugin-upstream-fix`
  - **manifest-unknown-fields**: a2a-gateway: manifest uses unsupported top-level fields
  - state: open · compat:none
  - evidence:
    - [defaultConfig @ openclaw.plugin.json](https://github.com/win4r/openclaw-a2a-gateway/blob/fdedad7499c4b6d22b3aa63a7876b9bfa1a92674/openclaw.plugin.json)
  - author remediation:
    - Move unsupported top-level manifest fields into supported package metadata or remove them.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#manifest-unknown-fields

- 🟡 P2 **a2a-gateway** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: a2a-gateway: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@a2a-js/sdk @ package.json](https://github.com/win4r/openclaw-a2a-gateway/blob/fdedad7499c4b6d22b3aa63a7876b9bfa1a92674/package.json)
    - [@bufbuild/protobuf @ package.json](https://github.com/win4r/openclaw-a2a-gateway/blob/fdedad7499c4b6d22b3aa63a7876b9bfa1a92674/package.json)
    - [@grpc/grpc-js @ package.json](https://github.com/win4r/openclaw-a2a-gateway/blob/fdedad7499c4b6d22b3aa63a7876b9bfa1a92674/package.json)
    - [express @ package.json](https://github.com/win4r/openclaw-a2a-gateway/blob/fdedad7499c4b6d22b3aa63a7876b9bfa1a92674/package.json)
    - [multicast-dns @ package.json](https://github.com/win4r/openclaw-a2a-gateway/blob/fdedad7499c4b6d22b3aa63a7876b9bfa1a92674/package.json)
    - [uuid @ package.json](https://github.com/win4r/openclaw-a2a-gateway/blob/fdedad7499c4b6d22b3aa63a7876b9bfa1a92674/package.json)
    - [ws @ package.json](https://github.com/win4r/openclaw-a2a-gateway/blob/fdedad7499c4b6d22b3aa63a7876b9bfa1a92674/package.json)

- 🟡 P2 **a2a-gateway** `upstream-metadata` `plugin-upstream-fix`
  - **package-manifest-version-drift**: a2a-gateway: package and manifest versions drift
  - state: open · compat:none
  - evidence:
    - package:1.5.1
    - manifest:1.3.0
  - author remediation:
    - Align the plugin version declared in package.json and openclaw.plugin.json.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-manifest-version-drift

- 🟡 P2 **a2a-gateway** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: a2a-gateway: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - [package.json](https://github.com/win4r/openclaw-a2a-gateway/blob/fdedad7499c4b6d22b3aa63a7876b9bfa1a92674/package.json)
  - author remediation:
    - Declare the OpenClaw plugin API range this package supports.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-plugin-api-compat-missing

- 🟡 P2 **a2a-gateway** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: a2a-gateway: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/win4r/openclaw-a2a-gateway/blob/fdedad7499c4b6d22b3aa63a7876b9bfa1a92674/index.ts)

- 🟡 P2 **a2a-gateway** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: a2a-gateway: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:untracked
  - evidence:
    - [registerService @ index.ts:897](https://github.com/win4r/openclaw-a2a-gateway/blob/fdedad7499c4b6d22b3aa63a7876b9bfa1a92674/index.ts#L897)

- 🟡 P2 **agentchat** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: agentchat: channel runtime needs envelope/config probes
  - state: open · compat:untracked
  - evidence:
    - [defineChannelPluginEntry @ channel.ts:355](https://github.com/agentchatme/agentchat-openclaw/blob/caee25ad8ed7a38cc4281bda397c7e0e7e90ce6a/src/channel.ts#L355)

- 🟡 P2 **agentchat** `deprecation-warning` `core-compat-adapter`
  - **channel-env-vars**: agentchat: channelEnvVars legacy manifest metadata must stay covered
  - state: open · compat:deprecated · deprecated
  - evidence:
    - agentchat
  - author remediation:
    - Move legacy channel environment variable metadata into the current setup/config metadata while keeping the old field until your supported OpenClaw range no longer needs it.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#channel-env-vars

- 🟡 P2 **agentchat** `upstream-metadata` `plugin-upstream-fix`
  - **manifest-unknown-fields**: agentchat: manifest uses unsupported top-level fields
  - state: open · compat:none
  - evidence:
    - [channelEnvVars @ openclaw.plugin.json](https://github.com/agentchatme/agentchat-openclaw/blob/caee25ad8ed7a38cc4281bda397c7e0e7e90ce6a/openclaw.plugin.json)
  - author remediation:
    - Move unsupported top-level manifest fields into supported package metadata or remove them.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#manifest-unknown-fields

- 🟡 P2 **agentchat** `inspector-gap` `inspector-follow-up`
  - **package-build-artifact-entrypoint**: agentchat: cold import requires package build output
  - state: open · compat:none
  - evidence:
    - [extension:./dist/index.js @ index.js](https://github.com/agentchatme/agentchat-openclaw/blob/caee25ad8ed7a38cc4281bda397c7e0e7e90ce6a/dist/index.js)
    - [setupEntry:./dist/setup-entry.js @ setup-entry.js](https://github.com/agentchatme/agentchat-openclaw/blob/caee25ad8ed7a38cc4281bda397c7e0e7e90ce6a/dist/setup-entry.js)

- 🟡 P2 **agentchat** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: agentchat: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@sinclair/typebox @ package.json](https://github.com/agentchatme/agentchat-openclaw/blob/caee25ad8ed7a38cc4281bda397c7e0e7e90ce6a/package.json)
    - [agentchatme @ package.json](https://github.com/agentchatme/agentchat-openclaw/blob/caee25ad8ed7a38cc4281bda397c7e0e7e90ce6a/package.json)
    - [pino @ package.json](https://github.com/agentchatme/agentchat-openclaw/blob/caee25ad8ed7a38cc4281bda397c7e0e7e90ce6a/package.json)
    - [ws @ package.json](https://github.com/agentchatme/agentchat-openclaw/blob/caee25ad8ed7a38cc4281bda397c7e0e7e90ce6a/package.json)
    - [zod @ package.json](https://github.com/agentchatme/agentchat-openclaw/blob/caee25ad8ed7a38cc4281bda397c7e0e7e90ce6a/package.json)

- 🟡 P2 **aiwerk-mcp-bridge** `upstream-metadata` `plugin-upstream-fix`
  - **manifest-unknown-fields**: aiwerk-mcp-bridge: manifest uses unsupported top-level fields
  - state: open · compat:none
  - evidence:
    - entryPoint @ plugins/aiwerk-mcp-bridge/.crabpot-package/openclaw.plugin.json
    - required @ plugins/aiwerk-mcp-bridge/.crabpot-package/openclaw.plugin.json
  - author remediation:
    - Move unsupported top-level manifest fields into supported package metadata or remove them.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#manifest-unknown-fields

- 🟡 P2 **aiwerk-mcp-bridge** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: aiwerk-mcp-bridge: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - @aiwerk/mcp-bridge @ plugins/aiwerk-mcp-bridge/.crabpot-package/package.json
    - @sinclair/typebox @ plugins/aiwerk-mcp-bridge/.crabpot-package/package.json

- 🟡 P2 **aiwerk-mcp-bridge** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: aiwerk-mcp-bridge: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - plugins/aiwerk-mcp-bridge/.crabpot-package/package.json
  - author remediation:
    - Declare the OpenClaw plugin API range this package supports.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-plugin-api-compat-missing

- 🟡 P2 **aiwerk-mcp-bridge** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: aiwerk-mcp-bridge: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - extension:plugins/aiwerk-mcp-bridge/.crabpot-package/index.ts

- 🟡 P2 **aiwerk-mcp-bridge** `inspector-gap` `inspector-follow-up`
  - **runtime-tool-capture**: aiwerk-mcp-bridge: runtime tool schema needs registration capture
  - state: open · compat:none
  - evidence:
    - registerTool @ plugins/aiwerk-mcp-bridge/.crabpot-package/dist/index.js:118
    - registerTool @ plugins/aiwerk-mcp-bridge/.crabpot-package/dist/index.js:310
    - registerTool @ plugins/aiwerk-mcp-bridge/.crabpot-package/dist/index.js:63
    - registerTool @ plugins/aiwerk-mcp-bridge/.crabpot-package/index.ts:147
    - registerTool @ plugins/aiwerk-mcp-bridge/.crabpot-package/index.ts:370
    - registerTool @ plugins/aiwerk-mcp-bridge/.crabpot-package/index.ts:90

- 🟡 P2 **apify** `inspector-gap` `inspector-follow-up`
  - **package-build-artifact-entrypoint**: apify: cold import requires package build output
  - state: open · compat:none
  - evidence:
    - [extension:./dist/index.js @ index.js](https://github.com/apify/apify-openclaw-plugin/blob/9f2aadbbfbd170f196165f05d9f967f500292cda/dist/index.js)

- 🟡 P2 **apify** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: apify: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [apify-client @ package.json](https://github.com/apify/apify-openclaw-plugin/blob/9f2aadbbfbd170f196165f05d9f967f500292cda/package.json)
    - [typebox @ package.json](https://github.com/apify/apify-openclaw-plugin/blob/9f2aadbbfbd170f196165f05d9f967f500292cda/package.json)

- 🟡 P2 **bluebubbles** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: bluebubbles: channel runtime needs envelope/config probes
  - state: open · compat:untracked
  - evidence:
    - [createChatChannelPlugin @ channel-BSIXOcHe.js:930](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/bluebubbles/dist/channel-BSIXOcHe.js#L930)

- 🟡 P2 **bluebubbles** `upstream-metadata` `plugin-upstream-fix`
  - **manifest-name-missing**: bluebubbles: manifest display name is missing
  - state: open · compat:none
  - evidence:
    - [openclaw.plugin.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/bluebubbles/openclaw.plugin.json)
  - author remediation:
    - Add a display name to the plugin manifest.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#manifest-name-missing

- 🟡 P2 **bluebubbles** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: bluebubbles: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec
  - author remediation:
    - Complete the OpenClaw install metadata so ClawHub can identify the install target.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-install-metadata-incomplete

- 🟡 P2 **brave-plugin** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: brave-plugin: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:untracked
  - evidence:
    - registerWebSearchProvider @ plugins/brave-plugin/.crabpot-package/dist/index.js:14

- 🟡 P2 **clawmetry** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: clawmetry: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec
    - openclaw.release.publishToNpm requires openclaw.install.npmSpec
  - author remediation:
    - Complete the OpenClaw install metadata so ClawHub can identify the install target.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-install-metadata-incomplete

- 🟡 P2 **clawmetry** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: clawmetry: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/vivekchand/clawmetry/blob/6228537b0271572d55f5bf02ee130f76038f7cd5/clawhub-plugin/index.ts)

- 🟡 P2 **clawmetry** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: clawmetry: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:untracked
  - evidence:
    - [registerService @ index.ts:20](https://github.com/vivekchand/clawmetry/blob/6228537b0271572d55f5bf02ee130f76038f7cd5/clawhub-plugin/index.ts#L20)

- 🟡 P2 **clawrouter** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: clawrouter: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@noble/hashes @ package.json](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/package.json)
    - [@scure/bip32 @ package.json](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/package.json)
    - [@scure/bip39 @ package.json](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/package.json)
    - [@solana/kit @ package.json](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/package.json)
    - [@x402/core @ package.json](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/package.json)
    - [@x402/evm @ package.json](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/package.json)
    - [@x402/fetch @ package.json](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/package.json)
    - [@x402/svm @ package.json](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/package.json)
    - [undici @ package.json](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/package.json)
    - [viem @ package.json](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/package.json)

- 🟡 P2 **clawrouter** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: clawrouter: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - [package.json](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/package.json)
  - author remediation:
    - Declare the OpenClaw plugin API range this package supports.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-plugin-api-compat-missing

- 🟡 P2 **clawrouter** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: clawrouter: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:untracked
  - evidence:
    - [registerCommand @ cli.js:89376](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/dist/cli.js#L89376)
    - [registerCommand @ cli.js:89428](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/dist/cli.js#L89428)
    - [registerCommand @ cli.js:89477](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/dist/cli.js#L89477)
    - [registerCommand @ cli.js:89543](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/dist/cli.js#L89543)
    - [registerCommand @ cli.js:89547](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/dist/cli.js#L89547)
    - [registerCommand @ cli.js:89550](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/dist/cli.js#L89550)
    - [registerCommand @ cli.js:89551](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/dist/cli.js#L89551)
    - [registerCommand @ index.js:87412](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/dist/index.js#L87412)
    - [registerCommand @ index.js:87464](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/dist/index.js#L87464)
    - [registerCommand @ index.js:87513](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/dist/index.js#L87513)
    - [registerCommand @ index.js:87579](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/dist/index.js#L87579)
    - [registerCommand @ index.js:87583](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/dist/index.js#L87583)
    - [registerCommand @ index.js:87586](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/dist/index.js#L87586)
    - [registerCommand @ index.js:87587](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/dist/index.js#L87587)
    - [registerCommand @ index.ts:1792](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/src/index.ts#L1792)
    - [registerCommand @ index.ts:1842](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/src/index.ts#L1842)
    - [registerCommand @ index.ts:1896](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/src/index.ts#L1896)
    - [registerCommand @ index.ts:1954](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/src/index.ts#L1954)
    - [registerCommand @ index.ts:2031](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/src/index.ts#L2031)
    - [registerCommand @ index.ts:2036](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/src/index.ts#L2036)
    - [registerCommand @ index.ts:2040](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/src/index.ts#L2040)
    - [registerCommand @ index.ts:2041](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/src/index.ts#L2041)
    - [registerImageGenerationProvider @ index.ts:1693](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/src/index.ts#L1693)
    - [registerMusicGenerationProvider @ index.ts:1694](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/src/index.ts#L1694)
    - [registerProvider @ index.ts:1684](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/src/index.ts#L1684)
    - [registerProvider @ index.ts:1689](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/src/index.ts#L1689)
    - [registerService @ cli.js:89557](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/dist/cli.js#L89557)
    - [registerService @ index.js:87593](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/dist/index.js#L87593)
    - [registerService @ index.ts:2050](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/src/index.ts#L2050)
    - [registerVideoGenerationProvider @ index.ts:1696](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/src/index.ts#L1696)
    - [registerWebSearchProvider @ index.ts:1705](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/src/index.ts#L1705)

- 🟡 P2 **codex** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: codex: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - @openai/codex @ plugins/codex/.crabpot-package/package.json
    - @openclaw/fs-safe @ plugins/codex/.crabpot-package/package.json
    - semver @ plugins/codex/.crabpot-package/package.json
    - smol-toml @ plugins/codex/.crabpot-package/package.json
    - typebox @ plugins/codex/.crabpot-package/package.json
    - ws @ plugins/codex/.crabpot-package/package.json
    - zod @ plugins/codex/.crabpot-package/package.json

- 🟡 P2 **codex** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: codex: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:untracked
  - evidence:
    - registerAgentHarness @ plugins/codex/.crabpot-package/dist/index.js:4261
    - registerCommand @ plugins/codex/.crabpot-package/dist/index.js:4304
    - registerGatewayMethod @ plugins/codex/.crabpot-package/dist/index.js:72
    - registerMediaUnderstandingProvider @ plugins/codex/.crabpot-package/dist/index.js:4262
    - registerMigrationProvider @ plugins/codex/.crabpot-package/dist/index.js:4264
    - registerNodeHostCommand @ plugins/codex/.crabpot-package/dist/index.js:4231
    - registerNodeHostCommand @ plugins/codex/.crabpot-package/dist/index.js:4300
    - registerNodeHostCommand @ plugins/codex/.crabpot-package/dist/index.js:4302
    - registerNodeInvokePolicy @ plugins/codex/.crabpot-package/dist/index.js:4233
    - registerNodeInvokePolicy @ plugins/codex/.crabpot-package/dist/index.js:4301
    - registerNodeInvokePolicy @ plugins/codex/.crabpot-package/dist/index.js:4303
    - registerProvider @ plugins/codex/.crabpot-package/dist/index.js:4152
    - registerService @ plugins/codex/.crabpot-package/dist/index.js:4150
    - registerService @ plugins/codex/.crabpot-package/dist/index.js:4168
    - registerService @ plugins/codex/.crabpot-package/dist/index.js:4169
    - registerService @ plugins/codex/.crabpot-package/dist/index.js:4170
    - registerService @ plugins/codex/.crabpot-package/dist/index.js:4217
    - registerSessionCatalog @ plugins/codex/.crabpot-package/dist/index.js:3420
    - registerToolMetadata @ plugins/codex/.crabpot-package/dist/index.js:4274
    - registerToolMetadata @ plugins/codex/.crabpot-package/dist/index.js:4289
    - registerWebSearchProvider @ plugins/codex/.crabpot-package/dist/index.js:4263

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
  - state: open · compat:untracked
  - evidence:
    - [registerCommand @ index.ts:48](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/index.ts#L48)
    - [registerInteractiveHandler @ index.ts:29](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/index.ts#L29)
    - [registerInteractiveHandler @ index.ts:38](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/index.ts#L38)
    - [registerService @ index.ts:12](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/index.ts#L12)

- 🟡 P2 **composio** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: composio: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - [package.json](https://github.com/ComposioHQ/openclaw-composio-plugin/blob/47025c33224d343d9fbbf67e0a24e56eeaa18fff/package.json)
  - author remediation:
    - Declare the OpenClaw plugin API range this package supports.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-plugin-api-compat-missing

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
  - author remediation:
    - Replace the legacy before_agent_start hook with the current prompt/model hooks.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#legacy-before-agent-start

- 🟡 P2 **connectclaw** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: connectclaw: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [openclaw/plugin-sdk @ tools.ts:2](https://github.com/osipov-anton/connectclaw/blob/7a4e2646e914de075435b3837123cc03c3edae36/packages/plugin/src/tools.ts#L2)
  - author remediation:
    - Prefer focused public plugin SDK subpath imports instead of the legacy root barrel.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#legacy-root-sdk-import

- 🟡 P2 **connectclaw** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: connectclaw: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/osipov-anton/connectclaw/blob/7a4e2646e914de075435b3837123cc03c3edae36/packages/plugin/index.ts)

- 🟡 P2 **connectclaw** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: connectclaw: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:untracked
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
  - state: open · compat:untracked
  - evidence:
    - [defineChannelPluginEntry @ index.ts:8](https://github.com/largezhou/openclaw-dingtalk/blob/161a9b0f6381ce7c869ef9461e8a1ba3ed0445fc/index.ts#L8)

- 🟡 P2 **ddingtalk** `deprecation-warning` `core-compat-adapter`
  - **channel-env-vars**: ddingtalk: channelEnvVars legacy manifest metadata must stay covered
  - state: open · compat:deprecated · deprecated
  - evidence:
    - ddingtalk
  - author remediation:
    - Move legacy channel environment variable metadata into the current setup/config metadata while keeping the old field until your supported OpenClaw range no longer needs it.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#channel-env-vars

- 🟡 P2 **ddingtalk** `upstream-metadata` `plugin-upstream-fix`
  - **manifest-name-missing**: ddingtalk: manifest display name is missing
  - state: open · compat:none
  - evidence:
    - [openclaw.plugin.json](https://github.com/largezhou/openclaw-dingtalk/blob/161a9b0f6381ce7c869ef9461e8a1ba3ed0445fc/openclaw.plugin.json)
  - author remediation:
    - Add a display name to the plugin manifest.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#manifest-name-missing

- 🟡 P2 **ddingtalk** `upstream-metadata` `plugin-upstream-fix`
  - **manifest-unknown-fields**: ddingtalk: manifest uses unsupported top-level fields
  - state: open · compat:none
  - evidence:
    - [channelEnvVars @ openclaw.plugin.json](https://github.com/largezhou/openclaw-dingtalk/blob/161a9b0f6381ce7c869ef9461e8a1ba3ed0445fc/openclaw.plugin.json)
  - author remediation:
    - Move unsupported top-level manifest fields into supported package metadata or remove them.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#manifest-unknown-fields

- 🟡 P2 **ddingtalk** `inspector-gap` `inspector-follow-up`
  - **package-build-artifact-entrypoint**: ddingtalk: cold import requires package build output
  - state: open · compat:none
  - evidence:
    - [extension:./dist/index.js @ index.js](https://github.com/largezhou/openclaw-dingtalk/blob/161a9b0f6381ce7c869ef9461e8a1ba3ed0445fc/dist/index.js)

- 🟡 P2 **ddingtalk** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: ddingtalk: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [dingtalk-stream @ package.json](https://github.com/largezhou/openclaw-dingtalk/blob/161a9b0f6381ce7c869ef9461e8a1ba3ed0445fc/package.json)
    - [zod @ package.json](https://github.com/largezhou/openclaw-dingtalk/blob/161a9b0f6381ce7c869ef9461e8a1ba3ed0445fc/package.json)

- 🟡 P2 **ddingtalk** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: ddingtalk: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - [package.json](https://github.com/largezhou/openclaw-dingtalk/blob/161a9b0f6381ce7c869ef9461e8a1ba3ed0445fc/package.json)
  - author remediation:
    - Declare the OpenClaw plugin API range this package supports.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-plugin-api-compat-missing

- 🟡 P2 **diagnostics-otel** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: diagnostics-otel: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - @opentelemetry/api @ plugins/diagnostics-otel/.crabpot-package/package.json
    - @opentelemetry/api-logs @ plugins/diagnostics-otel/.crabpot-package/package.json
    - @opentelemetry/context-async-hooks @ plugins/diagnostics-otel/.crabpot-package/package.json
    - @opentelemetry/core @ plugins/diagnostics-otel/.crabpot-package/package.json
    - @opentelemetry/exporter-logs-otlp-proto @ plugins/diagnostics-otel/.crabpot-package/package.json
    - @opentelemetry/exporter-metrics-otlp-proto @ plugins/diagnostics-otel/.crabpot-package/package.json
    - @opentelemetry/exporter-trace-otlp-proto @ plugins/diagnostics-otel/.crabpot-package/package.json
    - @opentelemetry/propagator-b3 @ plugins/diagnostics-otel/.crabpot-package/package.json
    - @opentelemetry/propagator-jaeger @ plugins/diagnostics-otel/.crabpot-package/package.json
    - @opentelemetry/resources @ plugins/diagnostics-otel/.crabpot-package/package.json
    - @opentelemetry/sdk-logs @ plugins/diagnostics-otel/.crabpot-package/package.json
    - @opentelemetry/sdk-metrics @ plugins/diagnostics-otel/.crabpot-package/package.json
    - @opentelemetry/sdk-trace-base @ plugins/diagnostics-otel/.crabpot-package/package.json
    - @opentelemetry/semantic-conventions @ plugins/diagnostics-otel/.crabpot-package/package.json

- 🟡 P2 **diagnostics-otel** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: diagnostics-otel: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:untracked
  - evidence:
    - registerService @ plugins/diagnostics-otel/.crabpot-package/dist/index.js:9

- 🟡 P2 **diagnostics-prometheus** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: diagnostics-prometheus: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:untracked
  - evidence:
    - registerHttpRoute @ plugins/diagnostics-prometheus/.crabpot-package/dist/index.js:1025
    - registerService @ plugins/diagnostics-prometheus/.crabpot-package/dist/index.js:1024

- 🟡 P2 **diffs** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: diffs: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - @pierre/diffs @ plugins/diffs/.crabpot-package/package.json
    - @shikijs/langs @ plugins/diffs/.crabpot-package/package.json
    - playwright-core @ plugins/diffs/.crabpot-package/package.json
    - typebox @ plugins/diffs/.crabpot-package/package.json
    - zod @ plugins/diffs/.crabpot-package/package.json

- 🟡 P2 **diffs** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: diffs: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:untracked
  - evidence:
    - registerHttpRoute @ plugins/diffs/.crabpot-package/dist/index.js:1880
    - registerService @ plugins/diffs/.crabpot-package/dist/index.js:1855

- 🟡 P2 **dingtalk-connector** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: dingtalk-connector: channel runtime needs envelope/config probes
  - state: open · compat:untracked
  - evidence:
    - [registerChannel @ index.ts:76](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/index.ts#L76)

- 🟡 P2 **dingtalk-connector** `upstream-metadata` `plugin-upstream-fix`
  - **manifest-unknown-fields**: dingtalk-connector: manifest uses unsupported top-level fields
  - state: open · compat:none
  - evidence:
    - [author @ openclaw.plugin.json](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/openclaw.plugin.json)
    - [main @ openclaw.plugin.json](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/openclaw.plugin.json)
  - author remediation:
    - Move unsupported top-level manifest fields into supported package metadata or remove them.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#manifest-unknown-fields

- 🟡 P2 **dingtalk-connector** `inspector-gap` `inspector-follow-up`
  - **package-build-artifact-entrypoint**: dingtalk-connector: cold import requires package build output
  - state: open · compat:none
  - evidence:
    - [extension:./dist/index.mjs @ index.mjs](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/dist/index.mjs)

- 🟡 P2 **dingtalk-connector** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: dingtalk-connector: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [axios @ package.json](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/package.json)
    - [dingtalk-stream @ package.json](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/package.json)
    - [form-data @ package.json](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/package.json)
    - [qrcode-terminal @ package.json](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/package.json)
    - [zod @ package.json](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/package.json)
    - [mammoth @ package.json](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/package.json)

- 🟡 P2 **dingtalk-connector** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: dingtalk-connector: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - [package.json](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/package.json)
  - author remediation:
    - Declare the OpenClaw plugin API range this package supports.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-plugin-api-compat-missing

- 🟡 P2 **dingtalk-connector** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: dingtalk-connector: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:untracked
  - evidence:
    - [registerChannel @ index.ts:76](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/index.ts#L76)
    - [registerGatewayMethod @ gateway-methods.ts:130](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/gateway-methods.ts#L130)
    - [registerGatewayMethod @ gateway-methods.ts:190](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/gateway-methods.ts#L190)
    - [registerGatewayMethod @ gateway-methods.ts:258](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/gateway-methods.ts#L258)
    - [registerGatewayMethod @ gateway-methods.ts:311](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/gateway-methods.ts#L311)
    - [registerGatewayMethod @ gateway-methods.ts:351](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/gateway-methods.ts#L351)
    - [registerGatewayMethod @ gateway-methods.ts:388](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/gateway-methods.ts#L388)
    - [registerGatewayMethod @ gateway-methods.ts:425](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/gateway-methods.ts#L425)
    - [registerGatewayMethod @ gateway-methods.ts:452](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/gateway-methods.ts#L452)
    - [registerGatewayMethod @ gateway-methods.ts:506](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/gateway-methods.ts#L506)
    - [registerGatewayMethod @ gateway-methods.ts:593](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/gateway-methods.ts#L593)
    - [registerGatewayMethod @ gateway-methods.ts:60](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/gateway-methods.ts#L60)
    - [registerGatewayMethod @ gateway-methods.ts:652](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/gateway-methods.ts#L652)
    - [registerGatewayMethod @ gateway-methods.ts:719](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/gateway-methods.ts#L719)
    - [registerGatewayMethod @ card-bridge.ts:337](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/services/card-bridge.ts#L337)
    - [registerGatewayMethod @ card-bridge.ts:362](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/services/card-bridge.ts#L362)

- 🟡 P2 **dingtalk-doc** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: dingtalk-doc: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [openclaw/plugin-sdk @ index.ts:11](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/index.ts#L11)
  - author remediation:
    - Prefer focused public plugin SDK subpath imports instead of the legacy root barrel.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#legacy-root-sdk-import

- 🟡 P2 **dingtalk-doc** `upstream-metadata` `plugin-upstream-fix`
  - **manifest-name-missing**: dingtalk-doc: manifest display name is missing
  - state: open · compat:none
  - evidence:
    - [openclaw.plugin.json](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/openclaw.plugin.json)
  - author remediation:
    - Add a display name to the plugin manifest.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#manifest-name-missing

- 🟡 P2 **dingtalk-doc** `inspector-gap` `inspector-follow-up`
  - **package-build-artifact-entrypoint**: dingtalk-doc: cold import requires package build output
  - state: open · compat:none
  - evidence:
    - [extension:./dist/index.mjs @ index.mjs](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/dist/index.mjs)

- 🟡 P2 **dingtalk-doc** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: dingtalk-doc: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@sinclair/typebox @ package.json](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/package.json)

- 🟡 P2 **dingtalk-doc** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: dingtalk-doc: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - [package.json](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/package.json)
  - author remediation:
    - Declare the OpenClaw plugin API range this package supports.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-plugin-api-compat-missing

- 🟡 P2 **dingtalk-doc** `inspector-gap` `inspector-follow-up`
  - **runtime-tool-capture**: dingtalk-doc: runtime tool schema needs registration capture
  - state: open · compat:none
  - evidence:
    - [registerTool @ helpers.ts:93](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/src/tools/helpers.ts#L93)

- 🟡 P2 **discord** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: discord: channel runtime needs envelope/config probes
  - state: open · compat:untracked
  - evidence:
    - createChatChannelPlugin @ plugins/discord/.crabpot-package/dist/.setup/channel-BMpMAeQL.mjs:493

- 🟡 P2 **discord** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: discord: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - @discord/embedded-app-sdk @ plugins/discord/.crabpot-package/package.json
    - @discordjs/voice @ plugins/discord/.crabpot-package/package.json
    - discord-api-types @ plugins/discord/.crabpot-package/package.json
    - libopus-wasm @ plugins/discord/.crabpot-package/package.json
    - mdast-util-from-markdown @ plugins/discord/.crabpot-package/package.json
    - typebox @ plugins/discord/.crabpot-package/package.json
    - undici @ plugins/discord/.crabpot-package/package.json
    - ws @ plugins/discord/.crabpot-package/package.json
    - zod @ plugins/discord/.crabpot-package/package.json

- 🟡 P2 **discord** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: discord: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:untracked
  - evidence:
    - registerHttpRoute @ plugins/discord/.crabpot-package/dist/activities-api.js:731
    - registerTranscriptSourceProvider @ plugins/discord/.crabpot-package/dist/transcripts-source-api.js:4
    - registerWidgetPresenter @ plugins/discord/.crabpot-package/dist/activities-api.js:737

- 🟡 P2 **feishu** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: feishu: channel runtime needs envelope/config probes
  - state: open · compat:untracked
  - evidence:
    - createChatChannelPlugin @ plugins/feishu/.crabpot-package/dist/.setup/channel-dxkUGCgC.mjs:2256

- 🟡 P2 **feishu** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: feishu: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - @larksuiteoapi/node-sdk @ plugins/feishu/.crabpot-package/package.json
    - @openclaw/fs-safe @ plugins/feishu/.crabpot-package/package.json
    - mdast-util-from-markdown @ plugins/feishu/.crabpot-package/package.json
    - mdast-util-gfm-table @ plugins/feishu/.crabpot-package/package.json
    - micromark-extension-gfm-table @ plugins/feishu/.crabpot-package/package.json
    - typebox @ plugins/feishu/.crabpot-package/package.json
    - zod @ plugins/feishu/.crabpot-package/package.json

- 🟡 P2 **google-meet** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: google-meet: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - jszip @ plugins/google-meet/.crabpot-package/package.json
    - typebox @ plugins/google-meet/.crabpot-package/package.json

- 🟡 P2 **google-meet** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: google-meet: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:untracked
  - evidence:
    - registerGatewayMethod @ plugins/google-meet/.crabpot-package/dist/index.js:128
    - registerNodeHostCommand @ plugins/google-meet/.crabpot-package/dist/index.js:369
    - registerNodeInvokePolicy @ plugins/google-meet/.crabpot-package/dist/index.js:379
    - registerService @ plugins/google-meet/.crabpot-package/dist/.setup/plugin-registration-B_nOxAym.mjs:111
    - registerTranscriptSourceProvider @ plugins/google-meet/.crabpot-package/dist/index.js:187

- 🟡 P2 **hapi-openclaw** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: hapi-openclaw: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - hono @ plugins/hapi-openclaw/.crabpot-package/package.json

- 🟡 P2 **hapi-openclaw** `deprecation-warning` `core-compat-adapter`
  - **sdk-load-session-store**: hapi-openclaw: deprecated whole-store session helper is still used
  - state: open · compat:none
  - evidence:
    - api.runtime.agent.session loadSessionStore @ plugins/hapi-openclaw/.crabpot-package/dist/index.js:318
  - author remediation:
    - Replace deprecated loadSessionStore whole-store access with row-scoped session helpers.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#sdk-load-session-store

- 🟡 P2 **hapi-openclaw** `deprecation-warning` `core-compat-adapter`
  - **sdk-session-file-helper**: hapi-openclaw: deprecated session file-path helper is still used
  - state: open · compat:none
  - evidence:
    - api.runtime.agent.session resolveSessionFilePath @ plugins/hapi-openclaw/.crabpot-package/dist/index.js:321
  - author remediation:
    - Replace deprecated session file-path helpers with session entry and transcript identity APIs.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#sdk-session-file-helper

- 🟡 P2 **hapi-openclaw** `deprecation-warning` `core-compat-adapter`
  - **sdk-session-store-write**: hapi-openclaw: deprecated whole-store session write helper is still used
  - state: open · compat:none
  - evidence:
    - api.runtime.agent.session saveSessionStore @ plugins/hapi-openclaw/.crabpot-package/dist/index.js:330
  - author remediation:
    - Replace deprecated whole-store session writes with row-scoped session helpers.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#sdk-session-store-write

- 🟡 P2 **hasdata** `upstream-metadata` `plugin-upstream-fix`
  - **manifest-unknown-fields**: hasdata: manifest uses unsupported top-level fields
  - state: open · compat:none
  - evidence:
    - [providerAuthEnvVars @ openclaw.plugin.json](https://github.com/HasData/hasdata-openclaw-plugin/blob/83e4a20da5f2b9331a7efff46aa622e2a6ea9c05/openclaw.plugin.json)
  - author remediation:
    - Move unsupported top-level manifest fields into supported package metadata or remove them.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#manifest-unknown-fields

- 🟡 P2 **hasdata** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: hasdata: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@sinclair/typebox @ package.json](https://github.com/HasData/hasdata-openclaw-plugin/blob/83e4a20da5f2b9331a7efff46aa622e2a6ea9c05/package.json)

- 🟡 P2 **hasdata** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: hasdata: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/HasData/hasdata-openclaw-plugin/blob/83e4a20da5f2b9331a7efff46aa622e2a6ea9c05/src/index.ts)

- 🟡 P2 **hasdata** `deprecation-warning` `core-compat-adapter`
  - **provider-auth-env-vars**: hasdata: providerAuthEnvVars legacy manifest metadata must stay covered
  - state: open · compat:deprecated · deprecated
  - evidence:
    - hasdata
  - author remediation:
    - Move legacy provider authentication environment variables into current provider setup metadata.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#provider-auth-env-vars

- 🟡 P2 **honcho** `inspector-gap` `inspector-follow-up`
  - **package-build-artifact-entrypoint**: honcho: cold import requires package build output
  - state: open · compat:none
  - evidence:
    - [extension:./dist/index.js @ index.js](https://github.com/plastic-labs/openclaw-honcho/blob/25f644cfd985f437951cc085b91138be22e42388/dist/index.js)

- 🟡 P2 **honcho** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: honcho: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@honcho-ai/harness-plugin-core @ package.json](https://github.com/plastic-labs/openclaw-honcho/blob/25f644cfd985f437951cc085b91138be22e42388/package.json)
    - [@honcho-ai/sdk @ package.json](https://github.com/plastic-labs/openclaw-honcho/blob/25f644cfd985f437951cc085b91138be22e42388/package.json)
    - [@sinclair/typebox @ package.json](https://github.com/plastic-labs/openclaw-honcho/blob/25f644cfd985f437951cc085b91138be22e42388/package.json)

- 🟡 P2 **honcho** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: honcho: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:untracked
  - evidence:
    - [registerMemoryPromptSupplement @ index.ts:119](https://github.com/plastic-labs/openclaw-honcho/blob/25f644cfd985f437951cc085b91138be22e42388/index.ts#L119)

- 🟡 P2 **hyperspell** `inspector-gap` `inspector-follow-up`
  - **package-build-artifact-entrypoint**: hyperspell: cold import requires package build output
  - state: open · compat:none
  - evidence:
    - [extension:./dist/index.js @ index.js](https://github.com/hyperspell/hyperspell-openclaw/blob/056dcd9710a26b84bbef4ba72353e99b41af8f73/dist/index.js)

- 🟡 P2 **hyperspell** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: hyperspell: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@clack/prompts @ package.json](https://github.com/hyperspell/hyperspell-openclaw/blob/056dcd9710a26b84bbef4ba72353e99b41af8f73/package.json)
    - [@sinclair/typebox @ package.json](https://github.com/hyperspell/hyperspell-openclaw/blob/056dcd9710a26b84bbef4ba72353e99b41af8f73/package.json)
    - [hyperspell @ package.json](https://github.com/hyperspell/hyperspell-openclaw/blob/056dcd9710a26b84bbef4ba72353e99b41af8f73/package.json)

- 🟡 P2 **hyperspell** `upstream-metadata` `plugin-upstream-fix`
  - **package-manifest-version-drift**: hyperspell: package and manifest versions drift
  - state: open · compat:none
  - evidence:
    - package:0.18.1
    - manifest:0.13.0
  - author remediation:
    - Align the plugin version declared in package.json and openclaw.plugin.json.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-manifest-version-drift

- 🟡 P2 **hyperspell** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: hyperspell: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:untracked
  - evidence:
    - [registerCommand @ slash.ts:166](https://github.com/hyperspell/hyperspell-openclaw/blob/056dcd9710a26b84bbef4ba72353e99b41af8f73/commands/slash.ts#L166)
    - [registerCommand @ slash.ts:43](https://github.com/hyperspell/hyperspell-openclaw/blob/056dcd9710a26b84bbef4ba72353e99b41af8f73/commands/slash.ts#L43)
    - [registerCommand @ slash.ts:98](https://github.com/hyperspell/hyperspell-openclaw/blob/056dcd9710a26b84bbef4ba72353e99b41af8f73/commands/slash.ts#L98)
    - [registerCommand @ index.ts:56](https://github.com/hyperspell/hyperspell-openclaw/blob/056dcd9710a26b84bbef4ba72353e99b41af8f73/index.ts#L56)
    - [registerCommand @ index.ts:67](https://github.com/hyperspell/hyperspell-openclaw/blob/056dcd9710a26b84bbef4ba72353e99b41af8f73/index.ts#L67)
    - [registerCommand @ index.ts:78](https://github.com/hyperspell/hyperspell-openclaw/blob/056dcd9710a26b84bbef4ba72353e99b41af8f73/index.ts#L78)

- 🟡 P2 **inworld-tts** `upstream-metadata` `plugin-upstream-fix`
  - **manifest-unknown-fields**: inworld-tts: manifest uses unsupported top-level fields
  - state: open · compat:none
  - evidence:
    - [providerAuthEnvVars @ openclaw.plugin.json](https://github.com/livingghost/openclaw-inworld-tts/blob/d2abaeea330ebef7530f43f8b395671f6f404aea/openclaw.plugin.json)
  - author remediation:
    - Move unsupported top-level manifest fields into supported package metadata or remove them.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#manifest-unknown-fields

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
  - author remediation:
    - Move legacy provider authentication environment variables into current provider setup metadata.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#provider-auth-env-vars

- 🟡 P2 **inworld-tts** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: inworld-tts: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:untracked
  - evidence:
    - [registerSpeechProvider @ index.ts:9](https://github.com/livingghost/openclaw-inworld-tts/blob/d2abaeea330ebef7530f43f8b395671f6f404aea/index.ts#L9)

- 🟡 P2 **kitchen-sink** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: kitchen-sink: channel runtime needs envelope/config probes
  - state: open · compat:untracked
  - evidence:
    - [registerChannel @ generated-registrars.js:9](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L9)
    - [registerChannel @ kitchen-runtime.js:59](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/kitchen-runtime.js#L59)

- 🟡 P2 **kitchen-sink** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: kitchen-sink: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:untracked
  - evidence:
    - [registerAgentEventSubscription @ generated-registrars.js:4](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L4)
    - [registerAgentHarness @ generated-registrars.js:5](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L5)
    - [registerAutoEnableProbe @ generated-registrars.js:7](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L7)
    - [registerBoardWidgetContentKind @ generated-registrars.js:8](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L8)
    - [registerChannel @ generated-registrars.js:9](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L9)
    - [registerChannel @ kitchen-runtime.js:59](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/kitchen-runtime.js#L59)
    - [registerCliBackend @ generated-registrars.js:11](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L11)
    - [registerCodexAppServerExtensionFactory @ generated-registrars.js:12](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L12)
    - [registerCommand @ generated-registrars.js:13](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L13)
    - [registerCommand @ kitchen-runtime.js:54](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/kitchen-runtime.js#L54)
    - [registerCommand @ kitchen-runtime.js:55](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/kitchen-runtime.js#L55)
    - [registerCompactionProvider @ generated-registrars.js:14](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L14)
    - [registerCompactionProvider @ kitchen-runtime.js:96](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/kitchen-runtime.js#L96)
    - [registerConfigMigration @ generated-registrars.js:15](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L15)
    - [registerContextEngine @ generated-registrars.js:16](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L16)
    - [registerContextEngine @ kitchen-runtime.js:99](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/kitchen-runtime.js#L99)
    - [registerControlUiDescriptor @ generated-registrars.js:17](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L17)
    - [registerEmbeddingProvider @ generated-registrars.js:19](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L19)
    - [registerEmbeddingProvider @ kitchen-runtime.js:65](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/kitchen-runtime.js#L65)
    - [registerGatewayDiscoveryService @ generated-registrars.js:20](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L20)
    - [registerGatewayMethod @ generated-registrars.js:21](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L21)
    - [registerGatewayMethod @ kitchen-runtime.js:111](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/kitchen-runtime.js#L111)
    - [registerGatewayMethod @ kitchen-runtime.js:114](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/kitchen-runtime.js#L114)
    - [registerHook @ generated-registrars.js:22](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L22)
    - [registerHostedMediaResolver @ generated-registrars.js:23](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L23)
    - [registerHttpRoute @ generated-registrars.js:24](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L24)
    - [registerHttpRoute @ kitchen-runtime.js:109](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/kitchen-runtime.js#L109)
    - [registerImageGenerationProvider @ generated-registrars.js:25](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L25)
    - [registerImageGenerationProvider @ kitchen-runtime.js:68](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/kitchen-runtime.js#L68)
    - [registerInteractiveHandler @ generated-registrars.js:26](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L26)
    - [registerInteractiveHandler @ kitchen-runtime.js:57](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/kitchen-runtime.js#L57)
    - [registerMcpServerConnectionResolver @ generated-registrars.js:27](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L27)
    - [registerMediaUnderstandingProvider @ generated-registrars.js:28](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L28)
    - [registerMediaUnderstandingProvider @ kitchen-runtime.js:71](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/kitchen-runtime.js#L71)
    - [registerMemoryCapability @ generated-registrars.js:29](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L29)
    - [registerMemoryCorpusSupplement @ generated-registrars.js:30](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L30)
    - [registerMemoryCorpusSupplement @ kitchen-runtime.js:93](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/kitchen-runtime.js#L93)
    - [registerMemoryPromptPreparation @ generated-registrars.js:31](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L31)
    - [registerMemoryPromptSupplement @ generated-registrars.js:32](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L32)
    - [registerMemoryPromptSupplement @ kitchen-runtime.js:118](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/kitchen-runtime.js#L118)
    - [registerMigrationProvider @ generated-registrars.js:33](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L33)
    - [registerModelCatalogProvider @ generated-registrars.js:34](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L34)
    - [registerMusicGenerationProvider @ generated-registrars.js:35](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L35)
    - [registerMusicGenerationProvider @ kitchen-runtime.js:84](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/kitchen-runtime.js#L84)
    - [registerNodeCliFeature @ sync-surface.mjs:166](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/scripts/sync-surface.mjs#L166)
    - [registerNodeCliFeature @ generated-registrars.js:36](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L36)
    - [registerNodeHostCommand @ generated-registrars.js:37](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L37)
    - [registerNodeInvokePolicy @ generated-registrars.js:38](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L38)
    - [registerProvider @ generated-registrars.js:39](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L39)
    - [registerProvider @ kitchen-runtime.js:63](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/kitchen-runtime.js#L63)
    - [registerRealtimeTranscriptionProvider @ generated-registrars.js:40](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L40)
    - [registerRealtimeTranscriptionProvider @ kitchen-runtime.js:75](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/kitchen-runtime.js#L75)
    - [registerRealtimeVoiceProvider @ generated-registrars.js:41](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L41)
    - [registerRealtimeVoiceProvider @ kitchen-runtime.js:78](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/kitchen-runtime.js#L78)
    - [registerReload @ generated-registrars.js:42](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L42)
    - [registerRuntimeLifecycle @ generated-registrars.js:43](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L43)
    - [registerSecurityAuditCollector @ generated-registrars.js:44](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L44)
    - [registerService @ generated-registrars.js:45](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L45)
    - [registerService @ kitchen-runtime.js:108](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/kitchen-runtime.js#L108)
    - [registerSessionAction @ generated-registrars.js:46](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L46)
    - [registerSessionCatalog @ generated-registrars.js:47](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L47)
    - [registerSessionExtension @ generated-registrars.js:48](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L48)
    - [registerSpeechProvider @ generated-registrars.js:50](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L50)
    - [registerSpeechProvider @ kitchen-runtime.js:73](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/kitchen-runtime.js#L73)
    - [registerTextTransforms @ generated-registrars.js:51](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L51)
    - [registerToolMetadata @ generated-registrars.js:53](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L53)
    - [registerTranscriptSourceProvider @ sync-surface.mjs:163](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/scripts/sync-surface.mjs#L163)
    - [registerTranscriptSourceProvider @ generated-registrars.js:54](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L54)
    - [registerVideoGenerationProvider @ generated-registrars.js:56](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L56)
    - [registerVideoGenerationProvider @ kitchen-runtime.js:81](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/kitchen-runtime.js#L81)
    - [registerWebFetchProvider @ generated-registrars.js:57](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L57)
    - [registerWebFetchProvider @ kitchen-runtime.js:90](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/kitchen-runtime.js#L90)
    - [registerWebSearchProvider @ generated-registrars.js:58](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L58)
    - [registerWebSearchProvider @ kitchen-runtime.js:87](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/kitchen-runtime.js#L87)
    - [registerWidgetPresenter @ generated-registrars.js:59](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L59)
    - [registerWorkerProvider @ generated-registrars.js:60](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L60)

- 🟡 P2 **lightclawbot** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: lightclawbot: channel runtime needs envelope/config probes
  - state: open · compat:untracked
  - evidence:
    - createChatChannelPlugin @ plugins/lightclawbot/.crabpot-package/dist/src/channel.js:49
    - defineChannelPluginEntry @ plugins/lightclawbot/.crabpot-package/dist/index.js:25

- 🟡 P2 **lightclawbot** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: lightclawbot: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - @modelcontextprotocol/sdk @ plugins/lightclawbot/.crabpot-package/package.json
    - ws @ plugins/lightclawbot/.crabpot-package/package.json

- 🟡 P2 **lightclawbot** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: lightclawbot: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - plugins/lightclawbot/.crabpot-package/package.json
  - author remediation:
    - Declare the OpenClaw plugin API range this package supports.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-plugin-api-compat-missing

- 🟡 P2 **lightclawbot** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: lightclawbot: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:untracked
  - evidence:
    - registerMcpServerConnectionResolver @ plugins/lightclawbot/.crabpot-package/dist/src/connectors/mcp-connection.js:58
    - registerService @ plugins/lightclawbot/.crabpot-package/dist/src/connectors/owned-tools.js:390

- 🟡 P2 **llm-trace-phoenix** `upstream-metadata` `plugin-upstream-fix`
  - **package-manifest-version-drift**: llm-trace-phoenix: package and manifest versions drift
  - state: open · compat:none
  - evidence:
    - package:1.0.3
    - manifest:1.0.1
  - author remediation:
    - Align the plugin version declared in package.json and openclaw.plugin.json.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-manifest-version-drift

- 🟡 P2 **lobster** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: lobster: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - @clawdbot/lobster @ plugins/lobster/.crabpot-package/package.json
    - typebox @ plugins/lobster/.crabpot-package/package.json

- 🟡 P2 **lossless-claw** `inspector-gap` `inspector-follow-up`
  - **package-build-artifact-entrypoint**: lossless-claw: cold import requires package build output
  - state: open · compat:none
  - evidence:
    - [extension:./dist/index.js @ index.js](https://github.com/Martian-Engineering/lossless-claw/blob/4347bd978932a0383708153eb80549887043b6e6/dist/index.js)

- 🟡 P2 **lossless-claw** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: lossless-claw: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@sinclair/typebox @ package.json](https://github.com/Martian-Engineering/lossless-claw/blob/4347bd978932a0383708153eb80549887043b6e6/package.json)

- 🟡 P2 **lossless-claw** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: lossless-claw: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:untracked
  - evidence:
    - [registerCommand @ index.ts:1744](https://github.com/Martian-Engineering/lossless-claw/blob/4347bd978932a0383708153eb80549887043b6e6/src/plugin/index.ts#L1744)
    - [registerContextEngine @ index.ts:1695](https://github.com/Martian-Engineering/lossless-claw/blob/4347bd978932a0383708153eb80549887043b6e6/src/plugin/index.ts#L1695)

- 🟡 P2 **lossless-claw** `deprecation-warning` `core-compat-adapter`
  - **sdk-load-session-store**: lossless-claw: deprecated whole-store session helper is still used
  - state: open · compat:none
  - evidence:
    - [api.runtime.agent.session alias loadSessionStore @ index.ts:1535](https://github.com/Martian-Engineering/lossless-claw/blob/4347bd978932a0383708153eb80549887043b6e6/src/plugin/index.ts#L1535)
    - [api.runtime.agent.session alias loadSessionStore @ index.ts:1564](https://github.com/Martian-Engineering/lossless-claw/blob/4347bd978932a0383708153eb80549887043b6e6/src/plugin/index.ts#L1564)
    - [api.runtime.agent.session alias loadSessionStore @ index.ts:1610](https://github.com/Martian-Engineering/lossless-claw/blob/4347bd978932a0383708153eb80549887043b6e6/src/plugin/index.ts#L1610)
    - [api.runtime.agent.session alias loadSessionStore @ index.ts:1843](https://github.com/Martian-Engineering/lossless-claw/blob/4347bd978932a0383708153eb80549887043b6e6/src/plugin/index.ts#L1843)
    - [api.runtime.agent.session alias loadSessionStore @ index.ts:1889](https://github.com/Martian-Engineering/lossless-claw/blob/4347bd978932a0383708153eb80549887043b6e6/src/plugin/index.ts#L1889)
  - author remediation:
    - Replace deprecated loadSessionStore whole-store access with row-scoped session helpers.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#sdk-load-session-store

- 🟡 P2 **lossless-claw** `deprecation-warning` `core-compat-adapter`
  - **sdk-session-file-helper**: lossless-claw: deprecated session file-path helper is still used
  - state: open · compat:none
  - evidence:
    - [api.runtime.agent.session alias resolveSessionFilePath @ index.ts:1571](https://github.com/Martian-Engineering/lossless-claw/blob/4347bd978932a0383708153eb80549887043b6e6/src/plugin/index.ts#L1571)
    - [api.runtime.agent.session alias resolveSessionFilePath @ index.ts:1631](https://github.com/Martian-Engineering/lossless-claw/blob/4347bd978932a0383708153eb80549887043b6e6/src/plugin/index.ts#L1631)
  - author remediation:
    - Replace deprecated session file-path helpers with session entry and transcript identity APIs.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#sdk-session-file-helper

- 🟡 P2 **matrix** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: matrix: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@matrix-org/matrix-sdk-crypto-nodejs @ package.json](https://github.com/openclaw/openclaw/blob/5f84c5b8a9889ab7035c197bc25bbe0aa8a20765/extensions/matrix/package.json)
    - [@matrix-org/matrix-sdk-crypto-wasm @ package.json](https://github.com/openclaw/openclaw/blob/5f84c5b8a9889ab7035c197bc25bbe0aa8a20765/extensions/matrix/package.json)
    - [@openclaw/fs-safe @ package.json](https://github.com/openclaw/openclaw/blob/5f84c5b8a9889ab7035c197bc25bbe0aa8a20765/extensions/matrix/package.json)
    - [fake-indexeddb @ package.json](https://github.com/openclaw/openclaw/blob/5f84c5b8a9889ab7035c197bc25bbe0aa8a20765/extensions/matrix/package.json)
    - [markdown-it @ package.json](https://github.com/openclaw/openclaw/blob/5f84c5b8a9889ab7035c197bc25bbe0aa8a20765/extensions/matrix/package.json)
    - [matrix-js-sdk @ package.json](https://github.com/openclaw/openclaw/blob/5f84c5b8a9889ab7035c197bc25bbe0aa8a20765/extensions/matrix/package.json)
    - [music-metadata @ package.json](https://github.com/openclaw/openclaw/blob/5f84c5b8a9889ab7035c197bc25bbe0aa8a20765/extensions/matrix/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/5f84c5b8a9889ab7035c197bc25bbe0aa8a20765/extensions/matrix/package.json)
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/5f84c5b8a9889ab7035c197bc25bbe0aa8a20765/extensions/matrix/package.json)

- 🟡 P2 **matrix** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: matrix: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/5f84c5b8a9889ab7035c197bc25bbe0aa8a20765/extensions/matrix/index.ts)
    - [setupEntry @ setup-entry.ts](https://github.com/openclaw/openclaw/blob/5f84c5b8a9889ab7035c197bc25bbe0aa8a20765/extensions/matrix/setup-entry.ts)

- 🟡 P2 **matrix** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: matrix: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:untracked
  - evidence:
    - [registerGatewayMethod @ index.ts:24](https://github.com/openclaw/openclaw/blob/5f84c5b8a9889ab7035c197bc25bbe0aa8a20765/extensions/matrix/index.ts#L24)

- 🟡 P2 **mattermost** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: mattermost: channel runtime needs envelope/config probes
  - state: open · compat:untracked
  - evidence:
    - [createChatChannelPlugin @ channel.ts:530](https://github.com/openclaw/openclaw/blob/5f84c5b8a9889ab7035c197bc25bbe0aa8a20765/extensions/mattermost/src/channel.ts#L530)

- 🟡 P2 **mattermost** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: mattermost: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/5f84c5b8a9889ab7035c197bc25bbe0aa8a20765/extensions/mattermost/package.json)

- 🟡 P2 **mattermost** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: mattermost: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/5f84c5b8a9889ab7035c197bc25bbe0aa8a20765/extensions/mattermost/index.ts)
    - [setupEntry @ setup-entry.ts](https://github.com/openclaw/openclaw/blob/5f84c5b8a9889ab7035c197bc25bbe0aa8a20765/extensions/mattermost/setup-entry.ts)

- 🟡 P2 **mattermost** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: mattermost: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:untracked
  - evidence:
    - [registerHttpRoute @ slash-state.ts:299](https://github.com/openclaw/openclaw/blob/5f84c5b8a9889ab7035c197bc25bbe0aa8a20765/extensions/mattermost/src/mattermost/slash-state.ts#L299)

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
  - author remediation:
    - Declare the OpenClaw plugin API range this package supports.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-plugin-api-compat-missing

- 🟡 P2 **mcp-adapter** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: mcp-adapter: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/androidStern-personal/openclaw-mcp-adapter/blob/5434ce21ac780a46a493c8125e52e80a03dd2640/index.ts)

- 🟡 P2 **mcp-adapter** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: mcp-adapter: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:untracked
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
    - apache-arrow @ plugins/memory-lancedb/.crabpot-package/package.json
    - openai @ plugins/memory-lancedb/.crabpot-package/package.json
    - typebox @ plugins/memory-lancedb/.crabpot-package/package.json
    - @lancedb/lancedb-darwin-arm64 @ plugins/memory-lancedb/.crabpot-package/package.json
    - @lancedb/lancedb-linux-arm64-gnu @ plugins/memory-lancedb/.crabpot-package/package.json
    - @lancedb/lancedb-linux-arm64-musl @ plugins/memory-lancedb/.crabpot-package/package.json
    - @lancedb/lancedb-linux-x64-gnu @ plugins/memory-lancedb/.crabpot-package/package.json
    - @lancedb/lancedb-linux-x64-musl @ plugins/memory-lancedb/.crabpot-package/package.json
    - @lancedb/lancedb-win32-arm64-msvc @ plugins/memory-lancedb/.crabpot-package/package.json
    - @lancedb/lancedb-win32-x64-msvc @ plugins/memory-lancedb/.crabpot-package/package.json

- 🟡 P2 **memory-lancedb** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: memory-lancedb: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:untracked
  - evidence:
    - registerService @ plugins/memory-lancedb/.crabpot-package/dist/index.js:393
    - registerService @ plugins/memory-lancedb/.crabpot-package/dist/index.js:57

- 🟡 P2 **memory-tencentdb** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: memory-tencentdb: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - openclaw/plugin-sdk @ plugins/memory-tencentdb/.crabpot-package/dist/index.mjs:8466
    - openclaw/plugin-sdk @ plugins/memory-tencentdb/.crabpot-package/src/offload/index.ts:2190
  - author remediation:
    - Prefer focused public plugin SDK subpath imports instead of the legacy root barrel.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#legacy-root-sdk-import

- 🟡 P2 **memory-tencentdb** `inspector-gap` `inspector-follow-up`
  - **package-build-artifact-entrypoint**: memory-tencentdb: cold import requires package build output
  - state: open · compat:none
  - evidence:
    - extension:./dist/index.js -> plugins/memory-tencentdb/.crabpot-package/openclaw-plugin/dist/index.js

- 🟡 P2 **memory-tencentdb** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: memory-tencentdb: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - @tencentdb-agent-memory/memory-sdk-ts @ plugins/memory-tencentdb/.crabpot-package/openclaw-plugin/package.json

- 🟡 P2 **memory-tencentdb** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: memory-tencentdb: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - plugins/memory-tencentdb/.crabpot-package/openclaw-plugin/package.json
  - author remediation:
    - Declare the OpenClaw plugin API range this package supports.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-plugin-api-compat-missing

- 🟡 P2 **memory-tencentdb** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: memory-tencentdb: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:untracked
  - evidence:
    - registerContextEngine @ plugins/memory-tencentdb/.crabpot-package/dist/index.mjs:1107
    - registerContextEngine @ plugins/memory-tencentdb/.crabpot-package/dist/index.mjs:7704
    - registerContextEngine @ plugins/memory-tencentdb/.crabpot-package/dist/index.mjs:7715
    - registerContextEngine @ plugins/memory-tencentdb/.crabpot-package/src/offload-client/index.ts:67
    - registerContextEngine @ plugins/memory-tencentdb/.crabpot-package/src/offload/index.ts:1235
    - registerContextEngine @ plugins/memory-tencentdb/.crabpot-package/src/offload/index.ts:1246

- 🟡 P2 **memos-cloud** `deprecation-warning` `core-compat-adapter`
  - **legacy-before-agent-start**: memos-cloud: legacy before_agent_start hook compatibility is still used
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [before_agent_start @ index.js:857](https://github.com/MemTensor/MemOS-Cloud-OpenClaw-Plugin/blob/a317661691bda94054d3d35f8c226e8bfe0018f7/index.js#L857)
  - author remediation:
    - Replace the legacy before_agent_start hook with the current prompt/model hooks.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#legacy-before-agent-start

- 🟡 P2 **memos-cloud** `upstream-metadata` `plugin-upstream-fix`
  - **manifest-unknown-fields**: memos-cloud: manifest uses unsupported top-level fields
  - state: open · compat:none
  - evidence:
    - [main @ openclaw.plugin.json](https://github.com/MemTensor/MemOS-Cloud-OpenClaw-Plugin/blob/a317661691bda94054d3d35f8c226e8bfe0018f7/openclaw.plugin.json)
  - author remediation:
    - Move unsupported top-level manifest fields into supported package metadata or remove them.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#manifest-unknown-fields

- 🟡 P2 **memos-cloud** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: memos-cloud: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - [package.json](https://github.com/MemTensor/MemOS-Cloud-OpenClaw-Plugin/blob/a317661691bda94054d3d35f8c226e8bfe0018f7/package.json)
  - author remediation:
    - Declare the OpenClaw plugin API range this package supports.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-plugin-api-compat-missing

- 🟡 P2 **memos-cloud** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: memos-cloud: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:untracked
  - evidence:
    - [registerHook @ index.js:787](https://github.com/MemTensor/MemOS-Cloud-OpenClaw-Plugin/blob/a317661691bda94054d3d35f8c226e8bfe0018f7/index.js#L787)

- 🟡 P2 **memu-engine** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: memu-engine: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - [package.json](https://github.com/duxiaoxiong/memu-engine-for-OpenClaw/blob/a5a22c5faf21e30d17a1b47635829e7dd0728ae5/package.json)
  - author remediation:
    - Declare the OpenClaw plugin API range this package supports.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-plugin-api-compat-missing

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
  - state: open · compat:untracked
  - evidence:
    - [registerChannel @ index.ts:31](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/index.ts#L31)

- 🟡 P2 **mocrane-wecom** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: mocrane-wecom: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [openclaw/plugin-sdk @ plugin-sdk-shim.ts:30](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/src/compat/plugin-sdk-shim.ts#L30)
  - author remediation:
    - Prefer focused public plugin SDK subpath imports instead of the legacy root barrel.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#legacy-root-sdk-import

- 🟡 P2 **mocrane-wecom** `upstream-metadata` `plugin-upstream-fix`
  - **manifest-name-missing**: mocrane-wecom: manifest display name is missing
  - state: open · compat:none
  - evidence:
    - [openclaw.plugin.json](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/openclaw.plugin.json)
  - author remediation:
    - Add a display name to the plugin manifest.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#manifest-name-missing

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
  - author remediation:
    - Declare the OpenClaw plugin API range this package supports.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-plugin-api-compat-missing

- 🟡 P2 **mocrane-wecom** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: mocrane-wecom: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/index.ts)

- 🟡 P2 **mocrane-wecom** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: mocrane-wecom: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:untracked
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
  - state: open · compat:untracked
  - evidence:
    - createChatChannelPlugin @ plugins/msteams/.crabpot-package/dist/.setup/channel-CdCSk3Rg.cjs:1067

- 🟡 P2 **msteams** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: msteams: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - @azure/identity @ plugins/msteams/.crabpot-package/package.json
    - @microsoft/teams.api @ plugins/msteams/.crabpot-package/package.json
    - @microsoft/teams.apps @ plugins/msteams/.crabpot-package/package.json
    - express @ plugins/msteams/.crabpot-package/package.json
    - typebox @ plugins/msteams/.crabpot-package/package.json
    - zod @ plugins/msteams/.crabpot-package/package.json

- 🟡 P2 **nemoclaw** `inspector-gap` `inspector-follow-up`
  - **package-build-artifact-entrypoint**: nemoclaw: cold import requires package build output
  - state: open · compat:none
  - evidence:
    - [extension:./dist/index.js @ index.js](https://github.com/NVIDIA/NemoClaw/blob/37ca4cb4220265c2a12b9d9b8a120d0d23a338dd/nemoclaw/dist/index.js)

- 🟡 P2 **nemoclaw** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: nemoclaw: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [execa @ package.json](https://github.com/NVIDIA/NemoClaw/blob/37ca4cb4220265c2a12b9d9b8a120d0d23a338dd/nemoclaw/package.json)
    - [json5 @ package.json](https://github.com/NVIDIA/NemoClaw/blob/37ca4cb4220265c2a12b9d9b8a120d0d23a338dd/nemoclaw/package.json)
    - [tar @ package.json](https://github.com/NVIDIA/NemoClaw/blob/37ca4cb4220265c2a12b9d9b8a120d0d23a338dd/nemoclaw/package.json)
    - [yaml @ package.json](https://github.com/NVIDIA/NemoClaw/blob/37ca4cb4220265c2a12b9d9b8a120d0d23a338dd/nemoclaw/package.json)

- 🟡 P2 **nemoclaw** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: nemoclaw: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:untracked
  - evidence:
    - [registerCommand @ index.ts:322](https://github.com/NVIDIA/NemoClaw/blob/37ca4cb4220265c2a12b9d9b8a120d0d23a338dd/nemoclaw/src/index.ts#L322)
    - [registerProvider @ index.ts:349](https://github.com/NVIDIA/NemoClaw/blob/37ca4cb4220265c2a12b9d9b8a120d0d23a338dd/nemoclaw/src/index.ts#L349)

- 🟡 P2 **nextcloud-talk** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: nextcloud-talk: channel runtime needs envelope/config probes
  - state: open · compat:untracked
  - evidence:
    - createChatChannelPlugin @ plugins/nextcloud-talk/.crabpot-package/dist/.setup/channel-D9tHRtkv.mjs:2253

- 🟡 P2 **nextcloud-talk** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: nextcloud-talk: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - zod @ plugins/nextcloud-talk/.crabpot-package/package.json

- 🟡 P2 **nostr** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: nostr: channel runtime needs envelope/config probes
  - state: open · compat:untracked
  - evidence:
    - createChatChannelPlugin @ plugins/nostr/.crabpot-package/dist/.setup/channel-C2iK5Fjg.mjs:1333

- 🟡 P2 **nostr** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: nostr: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - nostr-tools @ plugins/nostr/.crabpot-package/package.json
    - zod @ plugins/nostr/.crabpot-package/package.json

- 🟡 P2 **nostr** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: nostr: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:untracked
  - evidence:
    - registerHttpRoute @ plugins/nostr/.crabpot-package/dist/index.js:60

- 🟡 P2 **openclaw-telemetry** `deprecation-warning` `core-compat-adapter`
  - **legacy-before-agent-start**: openclaw-telemetry: legacy before_agent_start hook compatibility is still used
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [before_agent_start @ index.ts:53](https://github.com/knostic/openclaw-telemetry/blob/86c2458a0dfe82d639c208c5220396feb9d53c45/index.ts#L53)
  - author remediation:
    - Replace the legacy before_agent_start hook with the current prompt/model hooks.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#legacy-before-agent-start

- 🟡 P2 **openclaw-telemetry** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: openclaw-telemetry: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [openclaw/plugin-sdk @ service.ts:2](https://github.com/knostic/openclaw-telemetry/blob/86c2458a0dfe82d639c208c5220396feb9d53c45/src/service.ts#L2)
  - author remediation:
    - Prefer focused public plugin SDK subpath imports instead of the legacy root barrel.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#legacy-root-sdk-import

- 🟡 P2 **openclaw-telemetry** `upstream-metadata` `plugin-upstream-fix`
  - **manifest-name-missing**: openclaw-telemetry: manifest display name is missing
  - state: open · compat:none
  - evidence:
    - [openclaw.plugin.json](https://github.com/knostic/openclaw-telemetry/blob/86c2458a0dfe82d639c208c5220396feb9d53c45/openclaw.plugin.json)
  - author remediation:
    - Add a display name to the plugin manifest.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#manifest-name-missing

- 🟡 P2 **openclaw-telemetry** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: openclaw-telemetry: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - [package.json](https://github.com/knostic/openclaw-telemetry/blob/86c2458a0dfe82d639c208c5220396feb9d53c45/package.json)
  - author remediation:
    - Declare the OpenClaw plugin API range this package supports.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-plugin-api-compat-missing

- 🟡 P2 **openclaw-telemetry** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: openclaw-telemetry: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/knostic/openclaw-telemetry/blob/86c2458a0dfe82d639c208c5220396feb9d53c45/index.ts)

- 🟡 P2 **openclaw-telemetry** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: openclaw-telemetry: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:untracked
  - evidence:
    - [registerService @ index.ts:10](https://github.com/knostic/openclaw-telemetry/blob/86c2458a0dfe82d639c208c5220396feb9d53c45/index.ts#L10)

- 🟡 P2 **openclaw-weixin** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: openclaw-weixin: channel runtime needs envelope/config probes
  - state: open · compat:untracked
  - evidence:
    - registerChannel @ plugins/openclaw-weixin/.crabpot-package/dist/index.js:15
    - registerChannel @ plugins/openclaw-weixin/.crabpot-package/index.ts:19

- 🟡 P2 **openclaw-weixin** `upstream-metadata` `plugin-upstream-fix`
  - **manifest-name-missing**: openclaw-weixin: manifest display name is missing
  - state: open · compat:none
  - evidence:
    - plugins/openclaw-weixin/.crabpot-package/openclaw.plugin.json
  - author remediation:
    - Add a display name to the plugin manifest.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#manifest-name-missing

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
  - author remediation:
    - Declare the OpenClaw plugin API range this package supports.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-plugin-api-compat-missing

- 🟡 P2 **openclaw-weixin** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: openclaw-weixin: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - extension:plugins/openclaw-weixin/.crabpot-package/index.ts

- 🟡 P2 **openclaw-weixin** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: openclaw-weixin: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:untracked
  - evidence:
    - registerChannel @ plugins/openclaw-weixin/.crabpot-package/dist/index.js:15
    - registerChannel @ plugins/openclaw-weixin/.crabpot-package/index.ts:19

- 🟡 P2 **opik-openclaw** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: opik-openclaw: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [openclaw/plugin-sdk @ index.ts:2](https://github.com/comet-ml/opik-openclaw/blob/fac4cc3f0fa96e96b1ee2583a0525f3681b017b5/index.ts#L2)
    - [openclaw/plugin-sdk @ service.ts:6](https://github.com/comet-ml/opik-openclaw/blob/fac4cc3f0fa96e96b1ee2583a0525f3681b017b5/src/service.ts#L6)
  - author remediation:
    - Prefer focused public plugin SDK subpath imports instead of the legacy root barrel.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#legacy-root-sdk-import

- 🟡 P2 **opik-openclaw** `inspector-gap` `inspector-follow-up`
  - **package-build-artifact-entrypoint**: opik-openclaw: cold import requires package build output
  - state: open · compat:none
  - evidence:
    - [runtimeExtension:./dist/index.js @ index.js](https://github.com/comet-ml/opik-openclaw/blob/fac4cc3f0fa96e96b1ee2583a0525f3681b017b5/dist/index.js)

- 🟡 P2 **opik-openclaw** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: opik-openclaw: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@clack/prompts @ package.json](https://github.com/comet-ml/opik-openclaw/blob/fac4cc3f0fa96e96b1ee2583a0525f3681b017b5/package.json)
    - [opik @ package.json](https://github.com/comet-ml/opik-openclaw/blob/fac4cc3f0fa96e96b1ee2583a0525f3681b017b5/package.json)
    - [zod @ package.json](https://github.com/comet-ml/opik-openclaw/blob/fac4cc3f0fa96e96b1ee2583a0525f3681b017b5/package.json)

- 🟡 P2 **opik-openclaw** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: opik-openclaw: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/comet-ml/opik-openclaw/blob/fac4cc3f0fa96e96b1ee2583a0525f3681b017b5/index.ts)

- 🟡 P2 **opik-openclaw** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: opik-openclaw: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:untracked
  - evidence:
    - [registerService @ index.ts:16](https://github.com/comet-ml/opik-openclaw/blob/fac4cc3f0fa96e96b1ee2583a0525f3681b017b5/index.ts#L16)

- 🟡 P2 **qqbot** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: qqbot: channel runtime needs envelope/config probes
  - state: open · compat:untracked
  - evidence:
    - [registerChannel @ index.ts:16](https://github.com/tencent-connect/openclaw-qqbot/blob/7ceb7f0913d15417c5a74d82442a672ef0382c64/index.ts#L16)

- 🟡 P2 **qqbot** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: qqbot: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [openclaw/plugin-sdk @ index.ts:2](https://github.com/tencent-connect/openclaw-qqbot/blob/7ceb7f0913d15417c5a74d82442a672ef0382c64/index.ts#L2)
  - author remediation:
    - Prefer focused public plugin SDK subpath imports instead of the legacy root barrel.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#legacy-root-sdk-import

- 🟡 P2 **qqbot** `upstream-metadata` `plugin-upstream-fix`
  - **manifest-unknown-fields**: qqbot: manifest uses unsupported top-level fields
  - state: open · compat:none
  - evidence:
    - [capabilities @ openclaw.plugin.json](https://github.com/tencent-connect/openclaw-qqbot/blob/7ceb7f0913d15417c5a74d82442a672ef0382c64/openclaw.plugin.json)
    - [extensions @ openclaw.plugin.json](https://github.com/tencent-connect/openclaw-qqbot/blob/7ceb7f0913d15417c5a74d82442a672ef0382c64/openclaw.plugin.json)
  - author remediation:
    - Move unsupported top-level manifest fields into supported package metadata or remove them.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#manifest-unknown-fields

- 🟡 P2 **qqbot** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: qqbot: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [mpg123-decoder @ package.json](https://github.com/tencent-connect/openclaw-qqbot/blob/7ceb7f0913d15417c5a74d82442a672ef0382c64/package.json)
    - [silk-wasm @ package.json](https://github.com/tencent-connect/openclaw-qqbot/blob/7ceb7f0913d15417c5a74d82442a672ef0382c64/package.json)
    - [ws @ package.json](https://github.com/tencent-connect/openclaw-qqbot/blob/7ceb7f0913d15417c5a74d82442a672ef0382c64/package.json)

- 🟡 P2 **qqbot** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: qqbot: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - [package.json](https://github.com/tencent-connect/openclaw-qqbot/blob/7ceb7f0913d15417c5a74d82442a672ef0382c64/package.json)
  - author remediation:
    - Declare the OpenClaw plugin API range this package supports.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-plugin-api-compat-missing

- 🟡 P2 **qqbot** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: qqbot: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:untracked
  - evidence:
    - [registerChannel @ index.ts:16](https://github.com/tencent-connect/openclaw-qqbot/blob/7ceb7f0913d15417c5a74d82442a672ef0382c64/index.ts#L16)

- 🟡 P2 **qqbot** `inspector-gap` `inspector-follow-up`
  - **runtime-tool-capture**: qqbot: runtime tool schema needs registration capture
  - state: open · compat:none
  - evidence:
    - [registerTool @ channel.ts:134](https://github.com/tencent-connect/openclaw-qqbot/blob/7ceb7f0913d15417c5a74d82442a672ef0382c64/src/tools/channel.ts#L134)
    - [registerTool @ remind.ts:222](https://github.com/tencent-connect/openclaw-qqbot/blob/7ceb7f0913d15417c5a74d82442a672ef0382c64/src/tools/remind.ts#L222)

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
  - author remediation:
    - Declare the OpenClaw plugin API range this package supports.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-plugin-api-compat-missing

- 🟡 P2 **secureclaw** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: secureclaw: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:untracked
  - evidence:
    - [registerService @ index.ts:295](https://github.com/adversa-ai/secureclaw/blob/bf17e2b3deb989e348b3a98080e33a7047e90ac3/secureclaw/src/index.ts#L295)
    - [registerService @ index.ts:301](https://github.com/adversa-ai/secureclaw/blob/bf17e2b3deb989e348b3a98080e33a7047e90ac3/secureclaw/src/index.ts#L301)
    - [registerService @ index.ts:307](https://github.com/adversa-ai/secureclaw/blob/bf17e2b3deb989e348b3a98080e33a7047e90ac3/secureclaw/src/index.ts#L307)

- 🟡 P2 **synology-chat** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: synology-chat: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - zod @ plugins/synology-chat/.crabpot-package/package.json

- 🟡 P2 **telnyx-sms** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: telnyx-sms: channel runtime needs envelope/config probes
  - state: open · compat:untracked
  - evidence:
    - [defineChannelPluginEntry @ index.ts:207](https://github.com/team-telnyx/telnyx-openclaw-sms-channel/blob/6e3956246cd3e0e72af649d2fd75dee6f3e46966/index.ts#L207)

- 🟡 P2 **telnyx-sms** `deprecation-warning` `core-compat-adapter`
  - **channel-env-vars**: telnyx-sms: channelEnvVars legacy manifest metadata must stay covered
  - state: open · compat:deprecated · deprecated
  - evidence:
    - telnyx-sms
  - author remediation:
    - Move legacy channel environment variable metadata into the current setup/config metadata while keeping the old field until your supported OpenClaw range no longer needs it.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#channel-env-vars

- 🟡 P2 **telnyx-sms** `upstream-metadata` `plugin-upstream-fix`
  - **manifest-unknown-fields**: telnyx-sms: manifest uses unsupported top-level fields
  - state: open · compat:none
  - evidence:
    - [channelEnvVars @ openclaw.plugin.json](https://github.com/team-telnyx/telnyx-openclaw-sms-channel/blob/6e3956246cd3e0e72af649d2fd75dee6f3e46966/openclaw.plugin.json)
  - author remediation:
    - Move unsupported top-level manifest fields into supported package metadata or remove them.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#manifest-unknown-fields

- 🟡 P2 **telnyx-sms** `inspector-gap` `inspector-follow-up`
  - **package-build-artifact-entrypoint**: telnyx-sms: cold import requires package build output
  - state: open · compat:none
  - evidence:
    - [extension:./dist/index.js @ index.js](https://github.com/team-telnyx/telnyx-openclaw-sms-channel/blob/6e3956246cd3e0e72af649d2fd75dee6f3e46966/dist/index.js)
    - [setupEntry:./dist/setup-entry.js @ setup-entry.js](https://github.com/team-telnyx/telnyx-openclaw-sms-channel/blob/6e3956246cd3e0e72af649d2fd75dee6f3e46966/dist/setup-entry.js)

- 🟡 P2 **telnyx-sms** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: telnyx-sms: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:untracked
  - evidence:
    - [registerHttpRoute @ index.ts:259](https://github.com/team-telnyx/telnyx-openclaw-sms-channel/blob/6e3956246cd3e0e72af649d2fd75dee6f3e46966/index.ts#L259)

- 🟡 P2 **tlon** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: tlon: channel runtime needs envelope/config probes
  - state: open · compat:untracked
  - evidence:
    - createChatChannelPlugin @ plugins/tlon/.crabpot-package/dist/.setup/channel-DwKKUzwx.mjs:135

- 🟡 P2 **tlon** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: tlon: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - @aws-sdk/client-s3 @ plugins/tlon/.crabpot-package/package.json
    - @aws-sdk/s3-request-presigner @ plugins/tlon/.crabpot-package/package.json
    - @tloncorp/tlon-skill @ plugins/tlon/.crabpot-package/package.json
    - @urbit/aura @ plugins/tlon/.crabpot-package/package.json
    - zod @ plugins/tlon/.crabpot-package/package.json

- 🟡 P2 **twitch** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: twitch: channel runtime needs envelope/config probes
  - state: open · compat:untracked
  - evidence:
    - createChatChannelPlugin @ plugins/twitch/.crabpot-package/dist/.setup/plugin-CnPNkPhc.mjs:699

- 🟡 P2 **twitch** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: twitch: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - @twurple/api-call @ plugins/twitch/.crabpot-package/package.json
    - @twurple/auth @ plugins/twitch/.crabpot-package/package.json
    - @twurple/chat @ plugins/twitch/.crabpot-package/package.json
    - zod @ plugins/twitch/.crabpot-package/package.json

- 🟡 P2 **voice-call** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: voice-call: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - typebox @ plugins/voice-call/.crabpot-package/package.json
    - zod @ plugins/voice-call/.crabpot-package/package.json

- 🟡 P2 **voice-call** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: voice-call: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:untracked
  - evidence:
    - registerConfigMigration @ plugins/voice-call/.crabpot-package/dist/setup-api.js:132
    - registerGatewayMethod @ plugins/voice-call/.crabpot-package/dist/index.js:416
    - registerService @ plugins/voice-call/.crabpot-package/dist/index.js:582

- 🟡 P2 **web-search-plus** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: web-search-plus: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/robbyczgw-cla/web-search-plus-plugin/blob/f0f4b0cf2b71dcbe1f76248d3059dfaef2c3507b/index.ts)

- 🟡 P2 **wecom** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: wecom: channel runtime needs envelope/config probes
  - state: open · compat:untracked
  - evidence:
    - [registerChannel @ index.js:27](https://github.com/sunnoy/openclaw-plugin-wecom/blob/df2e426457a0e587bbfe63f185ffe002cbf61e6f/index.js#L27)

- 🟡 P2 **wecom** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: wecom: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@wecom/aibot-node-sdk @ package.json](https://github.com/sunnoy/openclaw-plugin-wecom/blob/df2e426457a0e587bbfe63f185ffe002cbf61e6f/package.json)
    - [file-type @ package.json](https://github.com/sunnoy/openclaw-plugin-wecom/blob/df2e426457a0e587bbfe63f185ffe002cbf61e6f/package.json)
    - [pinyin-pro @ package.json](https://github.com/sunnoy/openclaw-plugin-wecom/blob/df2e426457a0e587bbfe63f185ffe002cbf61e6f/package.json)
    - [undici @ package.json](https://github.com/sunnoy/openclaw-plugin-wecom/blob/df2e426457a0e587bbfe63f185ffe002cbf61e6f/package.json)

- 🟡 P2 **wecom** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: wecom: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - [package.json](https://github.com/sunnoy/openclaw-plugin-wecom/blob/df2e426457a0e587bbfe63f185ffe002cbf61e6f/package.json)
  - author remediation:
    - Declare the OpenClaw plugin API range this package supports.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-plugin-api-compat-missing

- 🟡 P2 **wecom** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: wecom: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:untracked
  - evidence:
    - [registerChannel @ index.js:27](https://github.com/sunnoy/openclaw-plugin-wecom/blob/df2e426457a0e587bbfe63f185ffe002cbf61e6f/index.js#L27)
    - [registerHttpRoute @ index.js:56](https://github.com/sunnoy/openclaw-plugin-wecom/blob/df2e426457a0e587bbfe63f185ffe002cbf61e6f/index.js#L56)

- 🟡 P2 **whatsapp** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: whatsapp: channel runtime needs envelope/config probes
  - state: open · compat:untracked
  - evidence:
    - createChatChannelPlugin @ plugins/whatsapp/.crabpot-package/dist/.setup/channel-DaAKkqgg.mjs:463

- 🟡 P2 **whatsapp** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: whatsapp: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - audio-decode @ plugins/whatsapp/.crabpot-package/package.json
    - baileys @ plugins/whatsapp/.crabpot-package/package.json
    - typebox @ plugins/whatsapp/.crabpot-package/package.json

- 🟡 P2 **yuanbao** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: yuanbao: channel runtime needs envelope/config probes
  - state: open · compat:untracked
  - evidence:
    - createChatChannelPlugin @ plugins/yuanbao/.crabpot-package/dist/src/channel.js:19

- 🟡 P2 **yuanbao** `deprecation-warning` `core-compat-adapter`
  - **channel-env-vars**: yuanbao: channelEnvVars legacy manifest metadata must stay covered
  - state: open · compat:deprecated · deprecated
  - evidence:
    - yuanbao
  - author remediation:
    - Move legacy channel environment variable metadata into the current setup/config metadata while keeping the old field until your supported OpenClaw range no longer needs it.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#channel-env-vars

- 🟡 P2 **yuanbao** `upstream-metadata` `plugin-upstream-fix`
  - **manifest-unknown-fields**: yuanbao: manifest uses unsupported top-level fields
  - state: open · compat:none
  - evidence:
    - channelEnvVars @ plugins/yuanbao/.crabpot-package/openclaw.plugin.json
  - author remediation:
    - Move unsupported top-level manifest fields into supported package metadata or remove them.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#manifest-unknown-fields

- 🟡 P2 **yuanbao** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: yuanbao: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - @opentelemetry/api @ plugins/yuanbao/.crabpot-package/package.json
    - protobufjs @ plugins/yuanbao/.crabpot-package/package.json
    - semver @ plugins/yuanbao/.crabpot-package/package.json
    - ws @ plugins/yuanbao/.crabpot-package/package.json

- 🟡 P2 **yuanbao** `upstream-metadata` `plugin-upstream-fix`
  - **package-openclaw-unsupported-metadata**: yuanbao: package declares unsupported OpenClaw metadata
  - state: open · compat:none
  - evidence:
    - openclaw.bundle
  - author remediation:
    - Remove unsupported OpenClaw package metadata fields.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-openclaw-unsupported-metadata

- 🟡 P2 **yuanbao** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: yuanbao: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - plugins/yuanbao/.crabpot-package/package.json
  - author remediation:
    - Declare the OpenClaw plugin API range this package supports.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-plugin-api-compat-missing

- 🟡 P2 **yuanbao** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: yuanbao: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:untracked
  - evidence:
    - registerCommand @ plugins/yuanbao/.crabpot-package/dist/index.js:16
    - registerCommand @ plugins/yuanbao/.crabpot-package/dist/index.js:17
    - registerCommand @ plugins/yuanbao/.crabpot-package/dist/index.js:18

- 🟡 P2 **yuanbao** `inspector-gap` `inspector-follow-up`
  - **runtime-tool-capture**: yuanbao: runtime tool schema needs registration capture
  - state: open · compat:none
  - evidence:
    - registerTool @ plugins/yuanbao/.crabpot-package/dist/src/business/tools/group.js:84
    - registerTool @ plugins/yuanbao/.crabpot-package/dist/src/business/tools/member.js:175
    - registerTool @ plugins/yuanbao/.crabpot-package/dist/src/business/tools/remind.js:622

- 🟡 P2 **zalo** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: zalo: channel runtime needs envelope/config probes
  - state: open · compat:untracked
  - evidence:
    - createChatChannelPlugin @ plugins/zalo/.crabpot-package/dist/.setup/channel-B-pcG9qP.mjs:267

- 🟡 P2 **zalo** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: zalo: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - zod @ plugins/zalo/.crabpot-package/package.json

- 🟡 P2 **zalouser** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: zalouser: channel runtime needs envelope/config probes
  - state: open · compat:untracked
  - evidence:
    - createChatChannelPlugin @ plugins/zalouser/.crabpot-package/dist/.setup/channel-Chv0Qbpd.mjs:481

- 🟡 P2 **zalouser** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: zalouser: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - typebox @ plugins/zalouser/.crabpot-package/package.json
    - zca-js @ plugins/zalouser/.crabpot-package/package.json
    - zod @ plugins/zalouser/.crabpot-package/package.json

- 🟢 P3 **clawrouter** `upstream-metadata` `plugin-upstream-fix`
  - **security-manifest-schema-unavailable**: clawrouter: plugin security manifest references an unavailable schema
  - state: open · compat:none
  - evidence:
    - [plugin-security.json](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/openclaw.security.json%3A%24schema%3Dhttps%3A/openclaw.ai/schemas/plugin-security.json)
  - author remediation:
    - Remove or update the unsupported security manifest schema reference.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#security-manifest-schema-unavailable

- 🟢 P3 **clawrouter** `upstream-metadata` `plugin-upstream-fix`
  - **unrecognized-security-manifest**: clawrouter: plugin ships an unsupported security manifest
  - state: open · compat:none
  - evidence:
    - [openclaw.security.json](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/openclaw.security.json)
  - author remediation:
    - Remove unsupported security manifest files until OpenClaw documents a versioned security manifest schema.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#unrecognized-security-manifest

## Contract Probe Backlog

- 🟠 P1 **dingtalk-doc** `hook-runner`
  - contract: Hook returns preserve terminal, block, and approval semantics.
  - id: `hook.before_tool_call.terminal-block-approval:dingtalk-doc`
  - evidence:
    - [before_tool_call @ index.ts:41](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/index.ts#L41)

- 🟠 P1 **kitchen-sink** `hook-runner`
  - contract: Hook returns preserve terminal, block, and approval semantics.
  - id: `hook.before_tool_call.terminal-block-approval:kitchen-sink`
  - evidence:
    - [before_tool_call @ generated-hooks.js:19](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-hooks.js#L19)

- 🟠 P1 **nemoclaw** `hook-runner`
  - contract: Hook returns preserve terminal, block, and approval semantics.
  - id: `hook.before_tool_call.terminal-block-approval:nemoclaw`
  - evidence:
    - [before_tool_call @ index.ts:359](https://github.com/NVIDIA/NemoClaw/blob/37ca4cb4220265c2a12b9d9b8a120d0d23a338dd/nemoclaw/src/index.ts#L359)

- 🟠 P1 **openclaw-telemetry** `hook-runner`
  - contract: Hook returns preserve terminal, block, and approval semantics.
  - id: `hook.before_tool_call.terminal-block-approval:openclaw-telemetry`
  - evidence:
    - [before_tool_call @ index.ts:12](https://github.com/knostic/openclaw-telemetry/blob/86c2458a0dfe82d639c208c5220396feb9d53c45/index.ts#L12)

- 🟠 P1 **opik-openclaw** `hook-runner`
  - contract: Hook returns preserve terminal, block, and approval semantics.
  - id: `hook.before_tool_call.terminal-block-approval:opik-openclaw`
  - evidence:
    - [before_tool_call @ tool.ts:34](https://github.com/comet-ml/opik-openclaw/blob/fac4cc3f0fa96e96b1ee2583a0525f3681b017b5/src/service/hooks/tool.ts#L34)

- 🟠 P1 **wecom** `hook-runner`
  - contract: Hook returns preserve terminal, block, and approval semantics.
  - id: `hook.before_tool_call.terminal-block-approval:wecom`
  - evidence:
    - [before_tool_call @ index.js:76](https://github.com/sunnoy/openclaw-plugin-wecom/blob/df2e426457a0e587bbfe63f185ffe002cbf61e6f/index.js#L76)

- 🟠 P1 **clawmetry** `hook-runner`
  - contract: LLM observer hooks receive documented prompt/output fields with expected redaction behavior.
  - id: `hook.llm-observer.privacy-payload:clawmetry`
  - evidence:
    - [llm_output @ service.ts:117](https://github.com/vivekchand/clawmetry/blob/6228537b0271572d55f5bf02ee130f76038f7cd5/clawhub-plugin/src/service.ts#L117)

- 🟠 P1 **honcho** `hook-runner`
  - contract: LLM observer hooks receive documented prompt/output fields with expected redaction behavior.
  - id: `hook.llm-observer.privacy-payload:honcho`
  - evidence:
    - [agent_end @ capture.ts:137](https://github.com/plastic-labs/openclaw-honcho/blob/25f644cfd985f437951cc085b91138be22e42388/hooks/capture.ts#L137)
    - [llm_output @ telemetry.ts:31](https://github.com/plastic-labs/openclaw-honcho/blob/25f644cfd985f437951cc085b91138be22e42388/hooks/telemetry.ts#L31)

- 🟠 P1 **kitchen-sink** `hook-runner`
  - contract: LLM observer hooks receive documented prompt/output fields with expected redaction behavior.
  - id: `hook.llm-observer.privacy-payload:kitchen-sink`
  - evidence:
    - [agent_end @ generated-hooks.js:7](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-hooks.js#L7)
    - [llm_input @ generated-hooks.js:27](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-hooks.js#L27)
    - [llm_output @ generated-hooks.js:28](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-hooks.js#L28)

- 🟠 P1 **llm-trace-phoenix** `hook-runner`
  - contract: LLM observer hooks receive documented prompt/output fields with expected redaction behavior.
  - id: `hook.llm-observer.privacy-payload:llm-trace-phoenix`
  - evidence:
    - [llm_input @ index.js:105](https://github.com/pingshian0131/openclaw-plugin-llm-trace-phoenix/blob/ad8a34681b4d49a1b7d75bb8f6ac9b2f2ea3a8e9/dist/index.js#L105)
    - [llm_input @ index.ts:202](https://github.com/pingshian0131/openclaw-plugin-llm-trace-phoenix/blob/ad8a34681b4d49a1b7d75bb8f6ac9b2f2ea3a8e9/index.ts#L202)
    - [llm_output @ index.js:118](https://github.com/pingshian0131/openclaw-plugin-llm-trace-phoenix/blob/ad8a34681b4d49a1b7d75bb8f6ac9b2f2ea3a8e9/dist/index.js#L118)
    - [llm_output @ index.ts:216](https://github.com/pingshian0131/openclaw-plugin-llm-trace-phoenix/blob/ad8a34681b4d49a1b7d75bb8f6ac9b2f2ea3a8e9/index.ts#L216)

- 🟠 P1 **memory-lancedb** `hook-runner`
  - contract: LLM observer hooks receive documented prompt/output fields with expected redaction behavior.
  - id: `hook.llm-observer.privacy-payload:memory-lancedb`
  - evidence:
    - agent_end @ plugins/memory-lancedb/.crabpot-package/dist/index.js:315

- 🟠 P1 **memory-tencentdb** `hook-runner`
  - contract: LLM observer hooks receive documented prompt/output fields with expected redaction behavior.
  - id: `hook.llm-observer.privacy-payload:memory-tencentdb`
  - evidence:
    - agent_end @ plugins/memory-tencentdb/.crabpot-package/dist/index.mjs:1095
    - agent_end @ plugins/memory-tencentdb/.crabpot-package/dist/index.mjs:1256
    - agent_end @ plugins/memory-tencentdb/.crabpot-package/dist/index.mjs:21802
    - agent_end @ plugins/memory-tencentdb/.crabpot-package/index.ts:808
    - agent_end @ plugins/memory-tencentdb/.crabpot-package/openclaw-plugin/index.ts:209
    - agent_end @ plugins/memory-tencentdb/.crabpot-package/src/offload-client/index.ts:52

- 🟠 P1 **memos-cloud** `hook-runner`
  - contract: LLM observer hooks receive documented prompt/output fields with expected redaction behavior.
  - id: `hook.llm-observer.privacy-payload:memos-cloud`
  - evidence:
    - [agent_end @ index.js:860](https://github.com/MemTensor/MemOS-Cloud-OpenClaw-Plugin/blob/a317661691bda94054d3d35f8c226e8bfe0018f7/index.js#L860)

- 🟠 P1 **openclaw-telemetry** `hook-runner`
  - contract: LLM observer hooks receive documented prompt/output fields with expected redaction behavior.
  - id: `hook.llm-observer.privacy-payload:openclaw-telemetry`
  - evidence:
    - [agent_end @ index.ts:62](https://github.com/knostic/openclaw-telemetry/blob/86c2458a0dfe82d639c208c5220396feb9d53c45/index.ts#L62)

- 🟠 P1 **opik-openclaw** `hook-runner`
  - contract: LLM observer hooks receive documented prompt/output fields with expected redaction behavior.
  - id: `hook.llm-observer.privacy-payload:opik-openclaw`
  - evidence:
    - [agent_end @ service.ts:581](https://github.com/comet-ml/opik-openclaw/blob/fac4cc3f0fa96e96b1ee2583a0525f3681b017b5/src/service.ts#L581)
    - [llm_input @ llm.ts:39](https://github.com/comet-ml/opik-openclaw/blob/fac4cc3f0fa96e96b1ee2583a0525f3681b017b5/src/service/hooks/llm.ts#L39)
    - [llm_output @ llm.ts:150](https://github.com/comet-ml/opik-openclaw/blob/fac4cc3f0fa96e96b1ee2583a0525f3681b017b5/src/service/hooks/llm.ts#L150)

- 🟠 P1 **agentchat** `sdk-alias`
  - contract: Every observed OpenClaw plugin SDK import remains exported by the target OpenClaw package.
  - id: `sdk.import.package-export-cold-import:agentchat`
  - evidence:
    - [openclaw/plugin-sdk/channel-lifecycle @ gateway.ts:27](https://github.com/agentchatme/agentchat-openclaw/blob/caee25ad8ed7a38cc4281bda397c7e0e7e90ce6a/src/binding/gateway.ts#L27)

- 🟠 P1 **bluebubbles** `sdk-alias`
  - contract: Every observed OpenClaw plugin SDK import remains exported by the target OpenClaw package.
  - id: `sdk.import.package-export-cold-import:bluebubbles`
  - evidence:
    - [openclaw/plugin-sdk/channel-lifecycle @ channel-BSIXOcHe.js:13](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/bluebubbles/dist/channel-BSIXOcHe.js#L13)
    - [openclaw/plugin-sdk/channel-reply-pipeline @ monitor-processing-Dy-LY2QQ.js:28](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/bluebubbles/dist/monitor-processing-Dy-LY2QQ.js#L28)
    - [openclaw/plugin-sdk/channel-streaming @ probe-B4I0cEVm.js:6](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/bluebubbles/dist/probe-B4I0cEVm.js#L6)
    - [openclaw/plugin-sdk/command-auth @ monitor-processing-Dy-LY2QQ.js:29](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/bluebubbles/dist/monitor-processing-Dy-LY2QQ.js#L29)
    - [openclaw/plugin-sdk/text-runtime @ channel-BSIXOcHe.js:18](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/bluebubbles/dist/channel-BSIXOcHe.js#L18)
    - [openclaw/plugin-sdk/text-runtime @ monitor-processing-Dy-LY2QQ.js:8](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/bluebubbles/dist/monitor-processing-Dy-LY2QQ.js#L8)
    - [openclaw/plugin-sdk/text-runtime @ probe-B4I0cEVm.js:4](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/bluebubbles/dist/probe-B4I0cEVm.js#L4)
    - [openclaw/plugin-sdk/text-runtime @ reactions-D1ETgpPi.js:3](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/bluebubbles/dist/reactions-D1ETgpPi.js#L3)
    - [openclaw/plugin-sdk/text-runtime @ webhook-shared-CoiIKIWN.js:1](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/bluebubbles/dist/webhook-shared-CoiIKIWN.js#L1)
    - [openclaw/plugin-sdk/webhook-path @ webhook-shared-CoiIKIWN.js:2](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/bluebubbles/dist/webhook-shared-CoiIKIWN.js#L2)
    - [openclaw/plugin-sdk/zod @ config-schema-a7F7uzDv.js:3](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/bluebubbles/dist/config-schema-a7F7uzDv.js#L3)

- 🟠 P1 **connectclaw** `sdk-alias`
  - contract: Every observed OpenClaw plugin SDK import remains exported by the target OpenClaw package.
  - id: `sdk.import.package-export-cold-import:connectclaw`
  - evidence:
    - [openclaw/plugin-sdk @ tools.ts:2](https://github.com/osipov-anton/connectclaw/blob/7a4e2646e914de075435b3837123cc03c3edae36/packages/plugin/src/tools.ts#L2)

- 🟠 P1 **dingtalk-connector** `sdk-alias`
  - contract: Every observed OpenClaw plugin SDK import remains exported by the target OpenClaw package.
  - id: `sdk.import.package-export-cold-import:dingtalk-connector`
  - evidence:
    - [openclaw/plugin-sdk/channel-runtime @ reply-dispatcher.ts:21](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/reply-dispatcher.ts#L21)
    - [openclaw/plugin-sdk/config-runtime @ gateway-methods.ts:131](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/gateway-methods.ts#L131)
    - [openclaw/plugin-sdk/config-runtime @ gateway-methods.ts:191](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/gateway-methods.ts#L191)
    - [openclaw/plugin-sdk/config-runtime @ gateway-methods.ts:259](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/gateway-methods.ts#L259)
    - [openclaw/plugin-sdk/config-runtime @ gateway-methods.ts:312](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/gateway-methods.ts#L312)
    - [openclaw/plugin-sdk/config-runtime @ gateway-methods.ts:352](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/gateway-methods.ts#L352)
    - [openclaw/plugin-sdk/config-runtime @ gateway-methods.ts:389](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/gateway-methods.ts#L389)
    - [openclaw/plugin-sdk/config-runtime @ gateway-methods.ts:426](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/gateway-methods.ts#L426)
    - [openclaw/plugin-sdk/config-runtime @ gateway-methods.ts:453](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/gateway-methods.ts#L453)
    - [openclaw/plugin-sdk/config-runtime @ gateway-methods.ts:507](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/gateway-methods.ts#L507)
    - [openclaw/plugin-sdk/config-runtime @ gateway-methods.ts:594](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/gateway-methods.ts#L594)
    - [openclaw/plugin-sdk/config-runtime @ gateway-methods.ts:61](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/gateway-methods.ts#L61)
    - [openclaw/plugin-sdk/config-runtime @ gateway-methods.ts:653](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/gateway-methods.ts#L653)
    - [openclaw/plugin-sdk/config-runtime @ gateway-methods.ts:720](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/gateway-methods.ts#L720)
    - [openclaw/plugin-sdk/config-runtime @ card-bridge.ts:186](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/services/card-bridge.ts#L186)
    - [openclaw/plugin-sdk/config-runtime @ card-bridge.ts:339](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/services/card-bridge.ts#L339)

- 🟠 P1 **dingtalk-doc** `sdk-alias`
  - contract: Every observed OpenClaw plugin SDK import remains exported by the target OpenClaw package.
  - id: `sdk.import.package-export-cold-import:dingtalk-doc`
  - evidence:
    - [openclaw/plugin-sdk @ index.ts:11](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/index.ts#L11)

- 🟠 P1 **discord** `sdk-alias`
  - contract: Every observed OpenClaw plugin SDK import remains exported by the target OpenClaw package.
  - id: `sdk.import.package-export-cold-import:discord`
  - evidence:
    - openclaw/plugin-sdk/heartbeat-runtime @ plugins/discord/.crabpot-package/dist/.setup/provider-BBDuE14w.mjs:68

- 🟠 P1 **lightclawbot** `sdk-alias`
  - contract: Every observed OpenClaw plugin SDK import remains exported by the target OpenClaw package.
  - id: `sdk.import.package-export-cold-import:lightclawbot`
  - evidence:
    - openclaw/plugin-sdk/channel-reply-pipeline @ plugins/lightclawbot/.crabpot-package/dist/src/inbound.js:264
    - openclaw/plugin-sdk/config-runtime @ plugins/lightclawbot/.crabpot-package/dist/src/utils/openclaw-compat.js:84

- 🟠 P1 **matrix** `sdk-alias`
  - contract: Every observed OpenClaw plugin SDK import remains exported by the target OpenClaw package.
  - id: `sdk.import.package-export-cold-import:matrix`
  - evidence:
    - [openclaw/plugin-sdk/plugin-state-test-runtime @ doctor-contract-api.test-support.ts:7](https://github.com/openclaw/openclaw/blob/5f84c5b8a9889ab7035c197bc25bbe0aa8a20765/extensions/matrix/doctor-contract-api.test-support.ts#L7)
    - [openclaw/plugin-sdk/plugin-state-test-runtime @ sync-store.test-support.ts:5](https://github.com/openclaw/openclaw/blob/5f84c5b8a9889ab7035c197bc25bbe0aa8a20765/extensions/matrix/src/matrix/client/sync-store.test-support.ts#L5)
    - [openclaw/plugin-sdk/plugin-state-test-runtime @ crypto-persistence.test-support.ts:5](https://github.com/openclaw/openclaw/blob/5f84c5b8a9889ab7035c197bc25bbe0aa8a20765/extensions/matrix/src/matrix/sdk/crypto-persistence.test-support.ts#L5)
    - [openclaw/plugin-sdk/plugin-state-test-runtime @ recovery-persistence.test-support.ts:7](https://github.com/openclaw/openclaw/blob/5f84c5b8a9889ab7035c197bc25bbe0aa8a20765/extensions/matrix/src/matrix/sdk/recovery-persistence.test-support.ts#L7)
    - [openclaw/plugin-sdk/sqlite-runtime-testing @ sync-store.test-support.ts:6](https://github.com/openclaw/openclaw/blob/5f84c5b8a9889ab7035c197bc25bbe0aa8a20765/extensions/matrix/src/matrix/client/sync-store.test-support.ts#L6)
    - [openclaw/plugin-sdk/test-env @ test-support.ts:2](https://github.com/openclaw/openclaw/blob/5f84c5b8a9889ab7035c197bc25bbe0aa8a20765/extensions/matrix/test-support.ts#L2)

- 🟠 P1 **mattermost** `sdk-alias`
  - contract: Every observed OpenClaw plugin SDK import remains exported by the target OpenClaw package.
  - id: `sdk.import.package-export-cold-import:mattermost`
  - evidence:
    - [openclaw/plugin-sdk/channel-ingress-test-runtime @ monitor.ingress-debounce.test-support.ts:5](https://github.com/openclaw/openclaw/blob/5f84c5b8a9889ab7035c197bc25bbe0aa8a20765/extensions/mattermost/src/mattermost/monitor.ingress-debounce.test-support.ts#L5)
    - [openclaw/plugin-sdk/test-env @ monitor.ingress-debounce.test-support.ts:16](https://github.com/openclaw/openclaw/blob/5f84c5b8a9889ab7035c197bc25bbe0aa8a20765/extensions/mattermost/src/mattermost/monitor.ingress-debounce.test-support.ts#L16)
    - [openclaw/plugin-sdk/test-env @ reactions.test-helpers.ts:1](https://github.com/openclaw/openclaw/blob/5f84c5b8a9889ab7035c197bc25bbe0aa8a20765/extensions/mattermost/src/mattermost/reactions.test-helpers.ts#L1)

- 🟠 P1 **memory-tencentdb** `sdk-alias`
  - contract: Every observed OpenClaw plugin SDK import remains exported by the target OpenClaw package.
  - id: `sdk.import.package-export-cold-import:memory-tencentdb`
  - evidence:
    - openclaw/plugin-sdk @ plugins/memory-tencentdb/.crabpot-package/dist/index.mjs:8466
    - openclaw/plugin-sdk @ plugins/memory-tencentdb/.crabpot-package/src/offload/index.ts:2190

- 🟠 P1 **mocrane-wecom** `sdk-alias`
  - contract: Every observed OpenClaw plugin SDK import remains exported by the target OpenClaw package.
  - id: `sdk.import.package-export-cold-import:mocrane-wecom`
  - evidence:
    - [openclaw/plugin-sdk @ plugin-sdk-shim.ts:30](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/src/compat/plugin-sdk-shim.ts#L30)

- 🟠 P1 **openclaw-telemetry** `sdk-alias`
  - contract: Every observed OpenClaw plugin SDK import remains exported by the target OpenClaw package.
  - id: `sdk.import.package-export-cold-import:openclaw-telemetry`
  - evidence:
    - [openclaw/plugin-sdk @ service.ts:2](https://github.com/knostic/openclaw-telemetry/blob/86c2458a0dfe82d639c208c5220396feb9d53c45/src/service.ts#L2)

- 🟠 P1 **opik-openclaw** `sdk-alias`
  - contract: Every observed OpenClaw plugin SDK import remains exported by the target OpenClaw package.
  - id: `sdk.import.package-export-cold-import:opik-openclaw`
  - evidence:
    - [openclaw/plugin-sdk @ index.ts:2](https://github.com/comet-ml/opik-openclaw/blob/fac4cc3f0fa96e96b1ee2583a0525f3681b017b5/index.ts#L2)
    - [openclaw/plugin-sdk @ service.ts:6](https://github.com/comet-ml/opik-openclaw/blob/fac4cc3f0fa96e96b1ee2583a0525f3681b017b5/src/service.ts#L6)

- 🟠 P1 **qqbot** `sdk-alias`
  - contract: Every observed OpenClaw plugin SDK import remains exported by the target OpenClaw package.
  - id: `sdk.import.package-export-cold-import:qqbot`
  - evidence:
    - [openclaw/plugin-sdk @ index.ts:2](https://github.com/tencent-connect/openclaw-qqbot/blob/7ceb7f0913d15417c5a74d82442a672ef0382c64/index.ts#L2)

- 🟠 P1 **telnyx-sms** `sdk-alias`
  - contract: Every observed OpenClaw plugin SDK import remains exported by the target OpenClaw package.
  - id: `sdk.import.package-export-cold-import:telnyx-sms`
  - evidence:
    - [openclaw/plugin-sdk/direct-dm @ inbound.ts:2](https://github.com/team-telnyx/telnyx-openclaw-sms-channel/blob/6e3956246cd3e0e72af649d2fd75dee6f3e46966/src/inbound.ts#L2)

- 🟠 P1 **yuanbao** `sdk-alias`
  - contract: Every observed OpenClaw plugin SDK import remains exported by the target OpenClaw package.
  - id: `sdk.import.package-export-cold-import:yuanbao`
  - evidence:
    - openclaw/plugin-sdk/channel-reply-pipeline @ plugins/yuanbao/.crabpot-package/dist/src/business/pipeline/middlewares/dispatch-reply.js:5
    - openclaw/plugin-sdk/command-auth @ plugins/yuanbao/.crabpot-package/dist/src/business/commands/command-sync/index.js:2
    - openclaw/plugin-sdk/command-auth @ plugins/yuanbao/.crabpot-package/dist/src/business/pipeline/middlewares/guard-command.js:5

- 🟡 P2 **a2a-gateway** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:a2a-gateway`
  - evidence:
    - [registerService @ index.ts:897](https://github.com/win4r/openclaw-a2a-gateway/blob/fdedad7499c4b6d22b3aa63a7876b9bfa1a92674/index.ts#L897)

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
    - [registerChannel @ index.ts:76](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/index.ts#L76)
    - [registerGatewayMethod @ gateway-methods.ts:130](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/gateway-methods.ts#L130)
    - [registerGatewayMethod @ gateway-methods.ts:190](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/gateway-methods.ts#L190)
    - [registerGatewayMethod @ gateway-methods.ts:258](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/gateway-methods.ts#L258)
    - [registerGatewayMethod @ gateway-methods.ts:311](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/gateway-methods.ts#L311)
    - [registerGatewayMethod @ gateway-methods.ts:351](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/gateway-methods.ts#L351)
    - [registerGatewayMethod @ gateway-methods.ts:388](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/gateway-methods.ts#L388)
    - [registerGatewayMethod @ gateway-methods.ts:425](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/gateway-methods.ts#L425)
    - [registerGatewayMethod @ gateway-methods.ts:452](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/gateway-methods.ts#L452)
    - [registerGatewayMethod @ gateway-methods.ts:506](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/gateway-methods.ts#L506)
    - [registerGatewayMethod @ gateway-methods.ts:593](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/gateway-methods.ts#L593)
    - [registerGatewayMethod @ gateway-methods.ts:60](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/gateway-methods.ts#L60)
    - [registerGatewayMethod @ gateway-methods.ts:652](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/gateway-methods.ts#L652)
    - [registerGatewayMethod @ gateway-methods.ts:719](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/gateway-methods.ts#L719)
    - [registerGatewayMethod @ card-bridge.ts:337](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/services/card-bridge.ts#L337)
    - [registerGatewayMethod @ card-bridge.ts:362](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/services/card-bridge.ts#L362)

- 🟡 P2 **honcho** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:honcho`
  - evidence:
    - [registerMemoryPromptSupplement @ index.ts:119](https://github.com/plastic-labs/openclaw-honcho/blob/25f644cfd985f437951cc085b91138be22e42388/index.ts#L119)

- 🟡 P2 **hyperspell** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:hyperspell`
  - evidence:
    - [registerCommand @ slash.ts:166](https://github.com/hyperspell/hyperspell-openclaw/blob/056dcd9710a26b84bbef4ba72353e99b41af8f73/commands/slash.ts#L166)
    - [registerCommand @ slash.ts:43](https://github.com/hyperspell/hyperspell-openclaw/blob/056dcd9710a26b84bbef4ba72353e99b41af8f73/commands/slash.ts#L43)
    - [registerCommand @ slash.ts:98](https://github.com/hyperspell/hyperspell-openclaw/blob/056dcd9710a26b84bbef4ba72353e99b41af8f73/commands/slash.ts#L98)
    - [registerCommand @ index.ts:56](https://github.com/hyperspell/hyperspell-openclaw/blob/056dcd9710a26b84bbef4ba72353e99b41af8f73/index.ts#L56)
    - [registerCommand @ index.ts:67](https://github.com/hyperspell/hyperspell-openclaw/blob/056dcd9710a26b84bbef4ba72353e99b41af8f73/index.ts#L67)
    - [registerCommand @ index.ts:78](https://github.com/hyperspell/hyperspell-openclaw/blob/056dcd9710a26b84bbef4ba72353e99b41af8f73/index.ts#L78)

- 🟡 P2 **kitchen-sink** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:kitchen-sink`
  - evidence:
    - [registerAgentEventSubscription @ generated-registrars.js:4](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L4)
    - [registerAgentHarness @ generated-registrars.js:5](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L5)
    - [registerAutoEnableProbe @ generated-registrars.js:7](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L7)
    - [registerBoardWidgetContentKind @ generated-registrars.js:8](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L8)
    - [registerChannel @ generated-registrars.js:9](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L9)
    - [registerChannel @ kitchen-runtime.js:59](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/kitchen-runtime.js#L59)
    - [registerCliBackend @ generated-registrars.js:11](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L11)
    - [registerCodexAppServerExtensionFactory @ generated-registrars.js:12](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L12)
    - [registerCommand @ generated-registrars.js:13](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L13)
    - [registerCommand @ kitchen-runtime.js:54](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/kitchen-runtime.js#L54)
    - [registerCommand @ kitchen-runtime.js:55](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/kitchen-runtime.js#L55)
    - [registerCompactionProvider @ generated-registrars.js:14](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L14)
    - [registerCompactionProvider @ kitchen-runtime.js:96](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/kitchen-runtime.js#L96)
    - [registerConfigMigration @ generated-registrars.js:15](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L15)
    - [registerContextEngine @ generated-registrars.js:16](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L16)
    - [registerContextEngine @ kitchen-runtime.js:99](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/kitchen-runtime.js#L99)
    - [registerControlUiDescriptor @ generated-registrars.js:17](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L17)
    - [registerEmbeddingProvider @ generated-registrars.js:19](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L19)
    - [registerEmbeddingProvider @ kitchen-runtime.js:65](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/kitchen-runtime.js#L65)
    - [registerGatewayDiscoveryService @ generated-registrars.js:20](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L20)
    - [registerGatewayMethod @ generated-registrars.js:21](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L21)
    - [registerGatewayMethod @ kitchen-runtime.js:111](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/kitchen-runtime.js#L111)
    - [registerGatewayMethod @ kitchen-runtime.js:114](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/kitchen-runtime.js#L114)
    - [registerHook @ generated-registrars.js:22](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L22)
    - [registerHostedMediaResolver @ generated-registrars.js:23](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L23)
    - [registerHttpRoute @ generated-registrars.js:24](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L24)
    - [registerHttpRoute @ kitchen-runtime.js:109](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/kitchen-runtime.js#L109)
    - [registerImageGenerationProvider @ generated-registrars.js:25](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L25)
    - [registerImageGenerationProvider @ kitchen-runtime.js:68](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/kitchen-runtime.js#L68)
    - [registerInteractiveHandler @ generated-registrars.js:26](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L26)
    - [registerInteractiveHandler @ kitchen-runtime.js:57](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/kitchen-runtime.js#L57)
    - [registerMcpServerConnectionResolver @ generated-registrars.js:27](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L27)
    - [registerMediaUnderstandingProvider @ generated-registrars.js:28](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L28)
    - [registerMediaUnderstandingProvider @ kitchen-runtime.js:71](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/kitchen-runtime.js#L71)
    - [registerMemoryCapability @ generated-registrars.js:29](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L29)
    - [registerMemoryCorpusSupplement @ generated-registrars.js:30](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L30)
    - [registerMemoryCorpusSupplement @ kitchen-runtime.js:93](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/kitchen-runtime.js#L93)
    - [registerMemoryPromptPreparation @ generated-registrars.js:31](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L31)
    - [registerMemoryPromptSupplement @ generated-registrars.js:32](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L32)
    - [registerMemoryPromptSupplement @ kitchen-runtime.js:118](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/kitchen-runtime.js#L118)
    - [registerMigrationProvider @ generated-registrars.js:33](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L33)
    - [registerModelCatalogProvider @ generated-registrars.js:34](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L34)
    - [registerMusicGenerationProvider @ generated-registrars.js:35](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L35)
    - [registerMusicGenerationProvider @ kitchen-runtime.js:84](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/kitchen-runtime.js#L84)
    - [registerNodeCliFeature @ sync-surface.mjs:166](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/scripts/sync-surface.mjs#L166)
    - [registerNodeCliFeature @ generated-registrars.js:36](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L36)
    - [registerNodeHostCommand @ generated-registrars.js:37](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L37)
    - [registerNodeInvokePolicy @ generated-registrars.js:38](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L38)
    - [registerProvider @ generated-registrars.js:39](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L39)
    - [registerProvider @ kitchen-runtime.js:63](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/kitchen-runtime.js#L63)
    - [registerRealtimeTranscriptionProvider @ generated-registrars.js:40](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L40)
    - [registerRealtimeTranscriptionProvider @ kitchen-runtime.js:75](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/kitchen-runtime.js#L75)
    - [registerRealtimeVoiceProvider @ generated-registrars.js:41](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L41)
    - [registerRealtimeVoiceProvider @ kitchen-runtime.js:78](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/kitchen-runtime.js#L78)
    - [registerReload @ generated-registrars.js:42](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L42)
    - [registerRuntimeLifecycle @ generated-registrars.js:43](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L43)
    - [registerSecurityAuditCollector @ generated-registrars.js:44](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L44)
    - [registerService @ generated-registrars.js:45](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L45)
    - [registerService @ kitchen-runtime.js:108](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/kitchen-runtime.js#L108)
    - [registerSessionAction @ generated-registrars.js:46](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L46)
    - [registerSessionCatalog @ generated-registrars.js:47](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L47)
    - [registerSessionExtension @ generated-registrars.js:48](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L48)
    - [registerSpeechProvider @ generated-registrars.js:50](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L50)
    - [registerSpeechProvider @ kitchen-runtime.js:73](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/kitchen-runtime.js#L73)
    - [registerTextTransforms @ generated-registrars.js:51](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L51)
    - [registerToolMetadata @ generated-registrars.js:53](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L53)
    - [registerTranscriptSourceProvider @ sync-surface.mjs:163](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/scripts/sync-surface.mjs#L163)
    - [registerTranscriptSourceProvider @ generated-registrars.js:54](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L54)
    - [registerVideoGenerationProvider @ generated-registrars.js:56](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L56)
    - [registerVideoGenerationProvider @ kitchen-runtime.js:81](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/kitchen-runtime.js#L81)
    - [registerWebFetchProvider @ generated-registrars.js:57](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L57)
    - [registerWebFetchProvider @ kitchen-runtime.js:90](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/kitchen-runtime.js#L90)
    - [registerWebSearchProvider @ generated-registrars.js:58](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L58)
    - [registerWebSearchProvider @ kitchen-runtime.js:87](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/kitchen-runtime.js#L87)
    - [registerWidgetPresenter @ generated-registrars.js:59](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L59)
    - [registerWorkerProvider @ generated-registrars.js:60](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L60)

- 🟡 P2 **lossless-claw** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:lossless-claw`
  - evidence:
    - [registerCommand @ index.ts:1744](https://github.com/Martian-Engineering/lossless-claw/blob/4347bd978932a0383708153eb80549887043b6e6/src/plugin/index.ts#L1744)
    - [registerContextEngine @ index.ts:1695](https://github.com/Martian-Engineering/lossless-claw/blob/4347bd978932a0383708153eb80549887043b6e6/src/plugin/index.ts#L1695)

- 🟡 P2 **mcp-adapter** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:mcp-adapter`
  - evidence:
    - [registerService @ index.ts:15](https://github.com/androidStern-personal/openclaw-mcp-adapter/blob/5434ce21ac780a46a493c8125e52e80a03dd2640/index.ts#L15)

- 🟡 P2 **memory-tencentdb** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:memory-tencentdb`
  - evidence:
    - registerContextEngine @ plugins/memory-tencentdb/.crabpot-package/dist/index.mjs:1107
    - registerContextEngine @ plugins/memory-tencentdb/.crabpot-package/dist/index.mjs:7704
    - registerContextEngine @ plugins/memory-tencentdb/.crabpot-package/dist/index.mjs:7715
    - registerContextEngine @ plugins/memory-tencentdb/.crabpot-package/src/offload-client/index.ts:67
    - registerContextEngine @ plugins/memory-tencentdb/.crabpot-package/src/offload/index.ts:1235
    - registerContextEngine @ plugins/memory-tencentdb/.crabpot-package/src/offload/index.ts:1246

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
    - [registerCommand @ index.ts:322](https://github.com/NVIDIA/NemoClaw/blob/37ca4cb4220265c2a12b9d9b8a120d0d23a338dd/nemoclaw/src/index.ts#L322)
    - [registerProvider @ index.ts:349](https://github.com/NVIDIA/NemoClaw/blob/37ca4cb4220265c2a12b9d9b8a120d0d23a338dd/nemoclaw/src/index.ts#L349)

- 🟡 P2 **openclaw-telemetry** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:openclaw-telemetry`
  - evidence:
    - [registerService @ index.ts:10](https://github.com/knostic/openclaw-telemetry/blob/86c2458a0dfe82d639c208c5220396feb9d53c45/index.ts#L10)

- 🟡 P2 **openclaw-weixin** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:openclaw-weixin`
  - evidence:
    - registerChannel @ plugins/openclaw-weixin/.crabpot-package/dist/index.js:15
    - registerChannel @ plugins/openclaw-weixin/.crabpot-package/index.ts:19

- 🟡 P2 **opik-openclaw** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:opik-openclaw`
  - evidence:
    - [registerService @ index.ts:16](https://github.com/comet-ml/opik-openclaw/blob/fac4cc3f0fa96e96b1ee2583a0525f3681b017b5/index.ts#L16)

- 🟡 P2 **qqbot** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:qqbot`
  - evidence:
    - [registerChannel @ index.ts:16](https://github.com/tencent-connect/openclaw-qqbot/blob/7ceb7f0913d15417c5a74d82442a672ef0382c64/index.ts#L16)

- 🟡 P2 **wecom** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:wecom`
  - evidence:
    - [registerChannel @ index.js:27](https://github.com/sunnoy/openclaw-plugin-wecom/blob/df2e426457a0e587bbfe63f185ffe002cbf61e6f/index.js#L27)
    - [registerHttpRoute @ index.js:56](https://github.com/sunnoy/openclaw-plugin-wecom/blob/df2e426457a0e587bbfe63f185ffe002cbf61e6f/index.js#L56)

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
    - [defineChannelPluginEntry @ channel.ts:355](https://github.com/agentchatme/agentchat-openclaw/blob/caee25ad8ed7a38cc4281bda397c7e0e7e90ce6a/src/channel.ts#L355)

- 🟡 P2 **ddingtalk** `channel-runtime`
  - contract: Channel setup, message envelope, sender metadata, and config schema remain stable.
  - id: `channel.runtime.envelope-config-metadata:ddingtalk`
  - evidence:
    - [defineChannelPluginEntry @ index.ts:8](https://github.com/largezhou/openclaw-dingtalk/blob/161a9b0f6381ce7c869ef9461e8a1ba3ed0445fc/index.ts#L8)

- 🟡 P2 **dingtalk-connector** `channel-runtime`
  - contract: Channel setup, message envelope, sender metadata, and config schema remain stable.
  - id: `channel.runtime.envelope-config-metadata:dingtalk-connector`
  - evidence:
    - [registerChannel @ index.ts:76](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/index.ts#L76)

- 🟡 P2 **kitchen-sink** `channel-runtime`
  - contract: Channel setup, message envelope, sender metadata, and config schema remain stable.
  - id: `channel.runtime.envelope-config-metadata:kitchen-sink`
  - evidence:
    - [registerChannel @ generated-registrars.js:9](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/generated-registrars.js#L9)
    - [registerChannel @ kitchen-runtime.js:59](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/src/kitchen-runtime.js#L59)

- 🟡 P2 **mocrane-wecom** `channel-runtime`
  - contract: Channel setup, message envelope, sender metadata, and config schema remain stable.
  - id: `channel.runtime.envelope-config-metadata:mocrane-wecom`
  - evidence:
    - [registerChannel @ index.ts:31](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/index.ts#L31)

- 🟡 P2 **openclaw-weixin** `channel-runtime`
  - contract: Channel setup, message envelope, sender metadata, and config schema remain stable.
  - id: `channel.runtime.envelope-config-metadata:openclaw-weixin`
  - evidence:
    - registerChannel @ plugins/openclaw-weixin/.crabpot-package/dist/index.js:15
    - registerChannel @ plugins/openclaw-weixin/.crabpot-package/index.ts:19

- 🟡 P2 **qqbot** `channel-runtime`
  - contract: Channel setup, message envelope, sender metadata, and config schema remain stable.
  - id: `channel.runtime.envelope-config-metadata:qqbot`
  - evidence:
    - [registerChannel @ index.ts:16](https://github.com/tencent-connect/openclaw-qqbot/blob/7ceb7f0913d15417c5a74d82442a672ef0382c64/index.ts#L16)

- 🟡 P2 **wecom** `channel-runtime`
  - contract: Channel setup, message envelope, sender metadata, and config schema remain stable.
  - id: `channel.runtime.envelope-config-metadata:wecom`
  - evidence:
    - [registerChannel @ index.js:27](https://github.com/sunnoy/openclaw-plugin-wecom/blob/df2e426457a0e587bbfe63f185ffe002cbf61e6f/index.js#L27)

- 🟡 P2 **yuanbao** `channel-runtime`
  - contract: Channel setup, message envelope, sender metadata, and config schema remain stable.
  - id: `channel.runtime.envelope-config-metadata:yuanbao`
  - evidence:
    - createChatChannelPlugin @ plugins/yuanbao/.crabpot-package/dist/src/channel.js:19

- 🟡 P2 **connectclaw** `hook-runner`
  - contract: Legacy before_agent_start remains wired until plugins migrate to before_model_resolve and before_prompt_build.
  - id: `hook.compat.before-agent-start-migration:connectclaw`
  - evidence:
    - [before_agent_start @ hooks.ts:17](https://github.com/osipov-anton/connectclaw/blob/7a4e2646e914de075435b3837123cc03c3edae36/packages/plugin/src/hooks.ts#L17)

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

- 🟡 P2 **ddingtalk** `manifest-loader`
  - contract: Legacy channel env metadata continues to map into channel setup/help surfaces.
  - id: `manifest.compat.channel-env-vars:ddingtalk`
  - evidence:
    - ddingtalk

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

- 🟡 P2 **ddingtalk** `manifest-loader`
  - contract: OpenClaw plugin manifests declare a human-readable display name for registry and tooling metadata.
  - id: `manifest.metadata.name:ddingtalk`
  - evidence:
    - [openclaw.plugin.json](https://github.com/largezhou/openclaw-dingtalk/blob/161a9b0f6381ce7c869ef9461e8a1ba3ed0445fc/openclaw.plugin.json)

- 🟡 P2 **mocrane-wecom** `manifest-loader`
  - contract: OpenClaw plugin manifests declare a human-readable display name for registry and tooling metadata.
  - id: `manifest.metadata.name:mocrane-wecom`
  - evidence:
    - [openclaw.plugin.json](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/openclaw.plugin.json)

- 🟡 P2 **openclaw-telemetry** `manifest-loader`
  - contract: OpenClaw plugin manifests declare a human-readable display name for registry and tooling metadata.
  - id: `manifest.metadata.name:openclaw-telemetry`
  - evidence:
    - [openclaw.plugin.json](https://github.com/knostic/openclaw-telemetry/blob/86c2458a0dfe82d639c208c5220396feb9d53c45/openclaw.plugin.json)

- 🟡 P2 **openclaw-weixin** `manifest-loader`
  - contract: OpenClaw plugin manifests declare a human-readable display name for registry and tooling metadata.
  - id: `manifest.metadata.name:openclaw-weixin`
  - evidence:
    - plugins/openclaw-weixin/.crabpot-package/openclaw.plugin.json

- 🟡 P2 **kitchen-sink** `manifest-loader`
  - contract: Manifest contract keys are represented in target OpenClaw PluginManifestContracts.
  - id: `manifest.schema.contract-keys:kitchen-sink`
  - evidence:
    - [embeddedExtensionFactories @ openclaw.plugin.json](https://github.com/openclaw/kitchen-sink/blob/b52b553bc89a23ed6fa0a419aa52eedb8a8ba5b0/openclaw.plugin.json)

- 🟡 P2 **a2a-gateway** `manifest-loader`
  - contract: Manifest top-level fields are represented in target OpenClaw PluginManifest.
  - id: `manifest.schema.top-level-fields:a2a-gateway`
  - evidence:
    - [defaultConfig @ openclaw.plugin.json](https://github.com/win4r/openclaw-a2a-gateway/blob/fdedad7499c4b6d22b3aa63a7876b9bfa1a92674/openclaw.plugin.json)

- 🟡 P2 **agentchat** `manifest-loader`
  - contract: Manifest top-level fields are represented in target OpenClaw PluginManifest.
  - id: `manifest.schema.top-level-fields:agentchat`
  - evidence:
    - [channelEnvVars @ openclaw.plugin.json](https://github.com/agentchatme/agentchat-openclaw/blob/caee25ad8ed7a38cc4281bda397c7e0e7e90ce6a/openclaw.plugin.json)

- 🟡 P2 **ddingtalk** `manifest-loader`
  - contract: Manifest top-level fields are represented in target OpenClaw PluginManifest.
  - id: `manifest.schema.top-level-fields:ddingtalk`
  - evidence:
    - [channelEnvVars @ openclaw.plugin.json](https://github.com/largezhou/openclaw-dingtalk/blob/161a9b0f6381ce7c869ef9461e8a1ba3ed0445fc/openclaw.plugin.json)

- 🟡 P2 **dingtalk-connector** `manifest-loader`
  - contract: Manifest top-level fields are represented in target OpenClaw PluginManifest.
  - id: `manifest.schema.top-level-fields:dingtalk-connector`
  - evidence:
    - [author @ openclaw.plugin.json](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/openclaw.plugin.json)
    - [main @ openclaw.plugin.json](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/openclaw.plugin.json)

- 🟡 P2 **hasdata** `manifest-loader`
  - contract: Manifest top-level fields are represented in target OpenClaw PluginManifest.
  - id: `manifest.schema.top-level-fields:hasdata`
  - evidence:
    - [providerAuthEnvVars @ openclaw.plugin.json](https://github.com/HasData/hasdata-openclaw-plugin/blob/83e4a20da5f2b9331a7efff46aa622e2a6ea9c05/openclaw.plugin.json)

- 🟡 P2 **qqbot** `manifest-loader`
  - contract: Manifest top-level fields are represented in target OpenClaw PluginManifest.
  - id: `manifest.schema.top-level-fields:qqbot`
  - evidence:
    - [capabilities @ openclaw.plugin.json](https://github.com/tencent-connect/openclaw-qqbot/blob/7ceb7f0913d15417c5a74d82442a672ef0382c64/openclaw.plugin.json)
    - [extensions @ openclaw.plugin.json](https://github.com/tencent-connect/openclaw-qqbot/blob/7ceb7f0913d15417c5a74d82442a672ef0382c64/openclaw.plugin.json)

- 🟡 P2 **yuanbao** `manifest-loader`
  - contract: Manifest top-level fields are represented in target OpenClaw PluginManifest.
  - id: `manifest.schema.top-level-fields:yuanbao`
  - evidence:
    - channelEnvVars @ plugins/yuanbao/.crabpot-package/openclaw.plugin.json

- 🟡 P2 **a2a-gateway** `package-loader`
  - contract: Package metadata declares the OpenClaw plugin API range used by the plugin.
  - id: `package.compat.plugin-api-range:a2a-gateway`
  - evidence:
    - [package.json](https://github.com/win4r/openclaw-a2a-gateway/blob/fdedad7499c4b6d22b3aa63a7876b9bfa1a92674/package.json)

- 🟡 P2 **composio** `package-loader`
  - contract: Package metadata declares the OpenClaw plugin API range used by the plugin.
  - id: `package.compat.plugin-api-range:composio`
  - evidence:
    - [package.json](https://github.com/ComposioHQ/openclaw-composio-plugin/blob/47025c33224d343d9fbbf67e0a24e56eeaa18fff/package.json)

- 🟡 P2 **ddingtalk** `package-loader`
  - contract: Package metadata declares the OpenClaw plugin API range used by the plugin.
  - id: `package.compat.plugin-api-range:ddingtalk`
  - evidence:
    - [package.json](https://github.com/largezhou/openclaw-dingtalk/blob/161a9b0f6381ce7c869ef9461e8a1ba3ed0445fc/package.json)

- 🟡 P2 **dingtalk-connector** `package-loader`
  - contract: Package metadata declares the OpenClaw plugin API range used by the plugin.
  - id: `package.compat.plugin-api-range:dingtalk-connector`
  - evidence:
    - [package.json](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/package.json)

- 🟡 P2 **mcp-adapter** `package-loader`
  - contract: Package metadata declares the OpenClaw plugin API range used by the plugin.
  - id: `package.compat.plugin-api-range:mcp-adapter`
  - evidence:
    - [package.json](https://github.com/androidStern-personal/openclaw-mcp-adapter/blob/5434ce21ac780a46a493c8125e52e80a03dd2640/package.json)

- 🟡 P2 **memory-tencentdb** `package-loader`
  - contract: Package metadata declares the OpenClaw plugin API range used by the plugin.
  - id: `package.compat.plugin-api-range:memory-tencentdb`
  - evidence:
    - plugins/memory-tencentdb/.crabpot-package/openclaw-plugin/package.json

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
    - [package.json](https://github.com/tencent-connect/openclaw-qqbot/blob/7ceb7f0913d15417c5a74d82442a672ef0382c64/package.json)

- 🟡 P2 **wecom** `package-loader`
  - contract: Package metadata declares the OpenClaw plugin API range used by the plugin.
  - id: `package.compat.plugin-api-range:wecom`
  - evidence:
    - [package.json](https://github.com/sunnoy/openclaw-plugin-wecom/blob/df2e426457a0e587bbfe63f185ffe002cbf61e6f/package.json)

- 🟡 P2 **yuanbao** `package-loader`
  - contract: Package metadata declares the OpenClaw plugin API range used by the plugin.
  - id: `package.compat.plugin-api-range:yuanbao`
  - evidence:
    - plugins/yuanbao/.crabpot-package/package.json

- 🟡 P2 **agentchat** `package-loader`
  - contract: Inspector can build or resolve source aliases before cold importing package entrypoints.
  - id: `package.entrypoint.build-before-cold-import:agentchat`
  - evidence:
    - [extension:./dist/index.js @ index.js](https://github.com/agentchatme/agentchat-openclaw/blob/caee25ad8ed7a38cc4281bda397c7e0e7e90ce6a/dist/index.js)
    - [setupEntry:./dist/setup-entry.js @ setup-entry.js](https://github.com/agentchatme/agentchat-openclaw/blob/caee25ad8ed7a38cc4281bda397c7e0e7e90ce6a/dist/setup-entry.js)

- 🟡 P2 **ddingtalk** `package-loader`
  - contract: Inspector can build or resolve source aliases before cold importing package entrypoints.
  - id: `package.entrypoint.build-before-cold-import:ddingtalk`
  - evidence:
    - [extension:./dist/index.js @ index.js](https://github.com/largezhou/openclaw-dingtalk/blob/161a9b0f6381ce7c869ef9461e8a1ba3ed0445fc/dist/index.js)

- 🟡 P2 **dingtalk-connector** `package-loader`
  - contract: Inspector can build or resolve source aliases before cold importing package entrypoints.
  - id: `package.entrypoint.build-before-cold-import:dingtalk-connector`
  - evidence:
    - [extension:./dist/index.mjs @ index.mjs](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/dist/index.mjs)

- 🟡 P2 **honcho** `package-loader`
  - contract: Inspector can build or resolve source aliases before cold importing package entrypoints.
  - id: `package.entrypoint.build-before-cold-import:honcho`
  - evidence:
    - [extension:./dist/index.js @ index.js](https://github.com/plastic-labs/openclaw-honcho/blob/25f644cfd985f437951cc085b91138be22e42388/dist/index.js)

- 🟡 P2 **hyperspell** `package-loader`
  - contract: Inspector can build or resolve source aliases before cold importing package entrypoints.
  - id: `package.entrypoint.build-before-cold-import:hyperspell`
  - evidence:
    - [extension:./dist/index.js @ index.js](https://github.com/hyperspell/hyperspell-openclaw/blob/056dcd9710a26b84bbef4ba72353e99b41af8f73/dist/index.js)

- 🟡 P2 **lossless-claw** `package-loader`
  - contract: Inspector can build or resolve source aliases before cold importing package entrypoints.
  - id: `package.entrypoint.build-before-cold-import:lossless-claw`
  - evidence:
    - [extension:./dist/index.js @ index.js](https://github.com/Martian-Engineering/lossless-claw/blob/4347bd978932a0383708153eb80549887043b6e6/dist/index.js)

- 🟡 P2 **memory-tencentdb** `package-loader`
  - contract: Inspector can build or resolve source aliases before cold importing package entrypoints.
  - id: `package.entrypoint.build-before-cold-import:memory-tencentdb`
  - evidence:
    - extension:./dist/index.js -> plugins/memory-tencentdb/.crabpot-package/openclaw-plugin/dist/index.js

- 🟡 P2 **nemoclaw** `package-loader`
  - contract: Inspector can build or resolve source aliases before cold importing package entrypoints.
  - id: `package.entrypoint.build-before-cold-import:nemoclaw`
  - evidence:
    - [extension:./dist/index.js @ index.js](https://github.com/NVIDIA/NemoClaw/blob/37ca4cb4220265c2a12b9d9b8a120d0d23a338dd/nemoclaw/dist/index.js)

- 🟡 P2 **opik-openclaw** `package-loader`
  - contract: Inspector can build or resolve source aliases before cold importing package entrypoints.
  - id: `package.entrypoint.build-before-cold-import:opik-openclaw`
  - evidence:
    - [runtimeExtension:./dist/index.js @ index.js](https://github.com/comet-ml/opik-openclaw/blob/fac4cc3f0fa96e96b1ee2583a0525f3681b017b5/dist/index.js)

- 🟡 P2 **a2a-gateway** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:a2a-gateway`
  - evidence:
    - [@a2a-js/sdk @ package.json](https://github.com/win4r/openclaw-a2a-gateway/blob/fdedad7499c4b6d22b3aa63a7876b9bfa1a92674/package.json)
    - [@bufbuild/protobuf @ package.json](https://github.com/win4r/openclaw-a2a-gateway/blob/fdedad7499c4b6d22b3aa63a7876b9bfa1a92674/package.json)
    - [@grpc/grpc-js @ package.json](https://github.com/win4r/openclaw-a2a-gateway/blob/fdedad7499c4b6d22b3aa63a7876b9bfa1a92674/package.json)
    - [express @ package.json](https://github.com/win4r/openclaw-a2a-gateway/blob/fdedad7499c4b6d22b3aa63a7876b9bfa1a92674/package.json)
    - [multicast-dns @ package.json](https://github.com/win4r/openclaw-a2a-gateway/blob/fdedad7499c4b6d22b3aa63a7876b9bfa1a92674/package.json)
    - [uuid @ package.json](https://github.com/win4r/openclaw-a2a-gateway/blob/fdedad7499c4b6d22b3aa63a7876b9bfa1a92674/package.json)
    - [ws @ package.json](https://github.com/win4r/openclaw-a2a-gateway/blob/fdedad7499c4b6d22b3aa63a7876b9bfa1a92674/package.json)

- 🟡 P2 **agentchat** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:agentchat`
  - evidence:
    - [@sinclair/typebox @ package.json](https://github.com/agentchatme/agentchat-openclaw/blob/caee25ad8ed7a38cc4281bda397c7e0e7e90ce6a/package.json)
    - [agentchatme @ package.json](https://github.com/agentchatme/agentchat-openclaw/blob/caee25ad8ed7a38cc4281bda397c7e0e7e90ce6a/package.json)
    - [pino @ package.json](https://github.com/agentchatme/agentchat-openclaw/blob/caee25ad8ed7a38cc4281bda397c7e0e7e90ce6a/package.json)
    - [ws @ package.json](https://github.com/agentchatme/agentchat-openclaw/blob/caee25ad8ed7a38cc4281bda397c7e0e7e90ce6a/package.json)
    - [zod @ package.json](https://github.com/agentchatme/agentchat-openclaw/blob/caee25ad8ed7a38cc4281bda397c7e0e7e90ce6a/package.json)

- 🟡 P2 **ddingtalk** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:ddingtalk`
  - evidence:
    - [dingtalk-stream @ package.json](https://github.com/largezhou/openclaw-dingtalk/blob/161a9b0f6381ce7c869ef9461e8a1ba3ed0445fc/package.json)
    - [zod @ package.json](https://github.com/largezhou/openclaw-dingtalk/blob/161a9b0f6381ce7c869ef9461e8a1ba3ed0445fc/package.json)

- 🟡 P2 **dingtalk-connector** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:dingtalk-connector`
  - evidence:
    - [axios @ package.json](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/package.json)
    - [dingtalk-stream @ package.json](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/package.json)
    - [form-data @ package.json](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/package.json)
    - [qrcode-terminal @ package.json](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/package.json)
    - [zod @ package.json](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/package.json)
    - [mammoth @ package.json](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/package.json)

- 🟡 P2 **hasdata** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:hasdata`
  - evidence:
    - [@sinclair/typebox @ package.json](https://github.com/HasData/hasdata-openclaw-plugin/blob/83e4a20da5f2b9331a7efff46aa622e2a6ea9c05/package.json)

- 🟡 P2 **honcho** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:honcho`
  - evidence:
    - [@honcho-ai/harness-plugin-core @ package.json](https://github.com/plastic-labs/openclaw-honcho/blob/25f644cfd985f437951cc085b91138be22e42388/package.json)
    - [@honcho-ai/sdk @ package.json](https://github.com/plastic-labs/openclaw-honcho/blob/25f644cfd985f437951cc085b91138be22e42388/package.json)
    - [@sinclair/typebox @ package.json](https://github.com/plastic-labs/openclaw-honcho/blob/25f644cfd985f437951cc085b91138be22e42388/package.json)

- 🟡 P2 **hyperspell** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:hyperspell`
  - evidence:
    - [@clack/prompts @ package.json](https://github.com/hyperspell/hyperspell-openclaw/blob/056dcd9710a26b84bbef4ba72353e99b41af8f73/package.json)
    - [@sinclair/typebox @ package.json](https://github.com/hyperspell/hyperspell-openclaw/blob/056dcd9710a26b84bbef4ba72353e99b41af8f73/package.json)
    - [hyperspell @ package.json](https://github.com/hyperspell/hyperspell-openclaw/blob/056dcd9710a26b84bbef4ba72353e99b41af8f73/package.json)

- 🟡 P2 **lossless-claw** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:lossless-claw`
  - evidence:
    - [@sinclair/typebox @ package.json](https://github.com/Martian-Engineering/lossless-claw/blob/4347bd978932a0383708153eb80549887043b6e6/package.json)

- 🟡 P2 **mcp-adapter** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:mcp-adapter`
  - evidence:
    - [@modelcontextprotocol/sdk @ package.json](https://github.com/androidStern-personal/openclaw-mcp-adapter/blob/5434ce21ac780a46a493c8125e52e80a03dd2640/package.json)

- 🟡 P2 **memory-tencentdb** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:memory-tencentdb`
  - evidence:
    - @tencentdb-agent-memory/memory-sdk-ts @ plugins/memory-tencentdb/.crabpot-package/openclaw-plugin/package.json

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
    - [execa @ package.json](https://github.com/NVIDIA/NemoClaw/blob/37ca4cb4220265c2a12b9d9b8a120d0d23a338dd/nemoclaw/package.json)
    - [json5 @ package.json](https://github.com/NVIDIA/NemoClaw/blob/37ca4cb4220265c2a12b9d9b8a120d0d23a338dd/nemoclaw/package.json)
    - [tar @ package.json](https://github.com/NVIDIA/NemoClaw/blob/37ca4cb4220265c2a12b9d9b8a120d0d23a338dd/nemoclaw/package.json)
    - [yaml @ package.json](https://github.com/NVIDIA/NemoClaw/blob/37ca4cb4220265c2a12b9d9b8a120d0d23a338dd/nemoclaw/package.json)

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
    - [@clack/prompts @ package.json](https://github.com/comet-ml/opik-openclaw/blob/fac4cc3f0fa96e96b1ee2583a0525f3681b017b5/package.json)
    - [opik @ package.json](https://github.com/comet-ml/opik-openclaw/blob/fac4cc3f0fa96e96b1ee2583a0525f3681b017b5/package.json)
    - [zod @ package.json](https://github.com/comet-ml/opik-openclaw/blob/fac4cc3f0fa96e96b1ee2583a0525f3681b017b5/package.json)

- 🟡 P2 **qqbot** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:qqbot`
  - evidence:
    - [mpg123-decoder @ package.json](https://github.com/tencent-connect/openclaw-qqbot/blob/7ceb7f0913d15417c5a74d82442a672ef0382c64/package.json)
    - [silk-wasm @ package.json](https://github.com/tencent-connect/openclaw-qqbot/blob/7ceb7f0913d15417c5a74d82442a672ef0382c64/package.json)
    - [ws @ package.json](https://github.com/tencent-connect/openclaw-qqbot/blob/7ceb7f0913d15417c5a74d82442a672ef0382c64/package.json)

- 🟡 P2 **wecom** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:wecom`
  - evidence:
    - [@wecom/aibot-node-sdk @ package.json](https://github.com/sunnoy/openclaw-plugin-wecom/blob/df2e426457a0e587bbfe63f185ffe002cbf61e6f/package.json)
    - [file-type @ package.json](https://github.com/sunnoy/openclaw-plugin-wecom/blob/df2e426457a0e587bbfe63f185ffe002cbf61e6f/package.json)
    - [pinyin-pro @ package.json](https://github.com/sunnoy/openclaw-plugin-wecom/blob/df2e426457a0e587bbfe63f185ffe002cbf61e6f/package.json)
    - [undici @ package.json](https://github.com/sunnoy/openclaw-plugin-wecom/blob/df2e426457a0e587bbfe63f185ffe002cbf61e6f/package.json)

- 🟡 P2 **yuanbao** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:yuanbao`
  - evidence:
    - @opentelemetry/api @ plugins/yuanbao/.crabpot-package/package.json
    - protobufjs @ plugins/yuanbao/.crabpot-package/package.json
    - semver @ plugins/yuanbao/.crabpot-package/package.json
    - ws @ plugins/yuanbao/.crabpot-package/package.json

- 🟡 P2 **a2a-gateway** `package-loader`
  - contract: Inspector can compile or load TypeScript source entrypoints before registration capture.
  - id: `package.entrypoint.typescript-loader:a2a-gateway`
  - evidence:
    - [extension @ index.ts](https://github.com/win4r/openclaw-a2a-gateway/blob/fdedad7499c4b6d22b3aa63a7876b9bfa1a92674/index.ts)

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

- 🟡 P2 **hasdata** `package-loader`
  - contract: Inspector can compile or load TypeScript source entrypoints before registration capture.
  - id: `package.entrypoint.typescript-loader:hasdata`
  - evidence:
    - [extension @ index.ts](https://github.com/HasData/hasdata-openclaw-plugin/blob/83e4a20da5f2b9331a7efff46aa622e2a6ea9c05/src/index.ts)

- 🟡 P2 **mcp-adapter** `package-loader`
  - contract: Inspector can compile or load TypeScript source entrypoints before registration capture.
  - id: `package.entrypoint.typescript-loader:mcp-adapter`
  - evidence:
    - [extension @ index.ts](https://github.com/androidStern-personal/openclaw-mcp-adapter/blob/5434ce21ac780a46a493c8125e52e80a03dd2640/index.ts)

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
    - [extension @ index.ts](https://github.com/comet-ml/opik-openclaw/blob/fac4cc3f0fa96e96b1ee2583a0525f3681b017b5/index.ts)

- 🟡 P2 **a2a-gateway** `package-loader`
  - contract: Package and OpenClaw manifest versions stay aligned for release compatibility reporting.
  - id: `package.metadata.version-alignment:a2a-gateway`
  - evidence:
    - package:1.5.1
    - manifest:1.3.0

- 🟡 P2 **hyperspell** `package-loader`
  - contract: Package and OpenClaw manifest versions stay aligned for release compatibility reporting.
  - id: `package.metadata.version-alignment:hyperspell`
  - evidence:
    - package:0.18.1
    - manifest:0.13.0

- 🟡 P2 **llm-trace-phoenix** `package-loader`
  - contract: Package and OpenClaw manifest versions stay aligned for release compatibility reporting.
  - id: `package.metadata.version-alignment:llm-trace-phoenix`
  - evidence:
    - package:1.0.3
    - manifest:1.0.1

- 🟡 P2 **connectclaw** `sdk-alias`
  - contract: Root plugin SDK barrel remains importable or has a machine-readable migration path.
  - id: `sdk.import.root-barrel-cold-import:connectclaw`
  - evidence:
    - [openclaw/plugin-sdk @ tools.ts:2](https://github.com/osipov-anton/connectclaw/blob/7a4e2646e914de075435b3837123cc03c3edae36/packages/plugin/src/tools.ts#L2)

- 🟡 P2 **memory-tencentdb** `sdk-alias`
  - contract: Root plugin SDK barrel remains importable or has a machine-readable migration path.
  - id: `sdk.import.root-barrel-cold-import:memory-tencentdb`
  - evidence:
    - openclaw/plugin-sdk @ plugins/memory-tencentdb/.crabpot-package/dist/index.mjs:8466
    - openclaw/plugin-sdk @ plugins/memory-tencentdb/.crabpot-package/src/offload/index.ts:2190

- 🟡 P2 **mocrane-wecom** `sdk-alias`
  - contract: Root plugin SDK barrel remains importable or has a machine-readable migration path.
  - id: `sdk.import.root-barrel-cold-import:mocrane-wecom`
  - evidence:
    - [openclaw/plugin-sdk @ plugin-sdk-shim.ts:30](https://github.com/TencentCloud-Lighthouse/openclaw-wecom/blob/5edda565415e29e30f6388c2160f750bb026ec32/src/compat/plugin-sdk-shim.ts#L30)

- 🟡 P2 **openclaw-telemetry** `sdk-alias`
  - contract: Root plugin SDK barrel remains importable or has a machine-readable migration path.
  - id: `sdk.import.root-barrel-cold-import:openclaw-telemetry`
  - evidence:
    - [openclaw/plugin-sdk @ service.ts:2](https://github.com/knostic/openclaw-telemetry/blob/86c2458a0dfe82d639c208c5220396feb9d53c45/src/service.ts#L2)

- 🟡 P2 **opik-openclaw** `sdk-alias`
  - contract: Root plugin SDK barrel remains importable or has a machine-readable migration path.
  - id: `sdk.import.root-barrel-cold-import:opik-openclaw`
  - evidence:
    - [openclaw/plugin-sdk @ index.ts:2](https://github.com/comet-ml/opik-openclaw/blob/fac4cc3f0fa96e96b1ee2583a0525f3681b017b5/index.ts#L2)
    - [openclaw/plugin-sdk @ service.ts:6](https://github.com/comet-ml/opik-openclaw/blob/fac4cc3f0fa96e96b1ee2583a0525f3681b017b5/src/service.ts#L6)

- 🟡 P2 **qqbot** `sdk-alias`
  - contract: Root plugin SDK barrel remains importable or has a machine-readable migration path.
  - id: `sdk.import.root-barrel-cold-import:qqbot`
  - evidence:
    - [openclaw/plugin-sdk @ index.ts:2](https://github.com/tencent-connect/openclaw-qqbot/blob/7ceb7f0913d15417c5a74d82442a672ef0382c64/index.ts#L2)

- 🟡 P2 **connectclaw** `tool-runtime`
  - contract: Registered runtime tools expose stable names, input schemas, and result metadata.
  - id: `tool.registration.schema-capture:connectclaw`
  - evidence:
    - [registerTool @ tools.ts:6](https://github.com/osipov-anton/connectclaw/blob/7a4e2646e914de075435b3837123cc03c3edae36/packages/plugin/src/tools.ts#L6)

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
    - [registerTool @ channel.ts:134](https://github.com/tencent-connect/openclaw-qqbot/blob/7ceb7f0913d15417c5a74d82442a672ef0382c64/src/tools/channel.ts#L134)
    - [registerTool @ remind.ts:222](https://github.com/tencent-connect/openclaw-qqbot/blob/7ceb7f0913d15417c5a74d82442a672ef0382c64/src/tools/remind.ts#L222)

- 🟡 P2 **yuanbao** `tool-runtime`
  - contract: Registered runtime tools expose stable names, input schemas, and result metadata.
  - id: `tool.registration.schema-capture:yuanbao`
  - evidence:
    - registerTool @ plugins/yuanbao/.crabpot-package/dist/src/business/tools/group.js:84
    - registerTool @ plugins/yuanbao/.crabpot-package/dist/src/business/tools/member.js:175
    - registerTool @ plugins/yuanbao/.crabpot-package/dist/src/business/tools/remind.js:622

- 🟢 P3 **brave-plugin** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:brave-plugin`
  - evidence:
    - registerWebSearchProvider @ plugins/brave-plugin/.crabpot-package/dist/index.js:14

- 🟢 P3 **clawmetry** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:clawmetry`
  - evidence:
    - [registerService @ index.ts:20](https://github.com/vivekchand/clawmetry/blob/6228537b0271572d55f5bf02ee130f76038f7cd5/clawhub-plugin/index.ts#L20)

- 🟢 P3 **clawrouter** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:clawrouter`
  - evidence:
    - [registerCommand @ cli.js:89376](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/dist/cli.js#L89376)
    - [registerCommand @ cli.js:89428](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/dist/cli.js#L89428)
    - [registerCommand @ cli.js:89477](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/dist/cli.js#L89477)
    - [registerCommand @ cli.js:89543](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/dist/cli.js#L89543)
    - [registerCommand @ cli.js:89547](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/dist/cli.js#L89547)
    - [registerCommand @ cli.js:89550](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/dist/cli.js#L89550)
    - [registerCommand @ cli.js:89551](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/dist/cli.js#L89551)
    - [registerCommand @ index.js:87412](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/dist/index.js#L87412)
    - [registerCommand @ index.js:87464](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/dist/index.js#L87464)
    - [registerCommand @ index.js:87513](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/dist/index.js#L87513)
    - [registerCommand @ index.js:87579](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/dist/index.js#L87579)
    - [registerCommand @ index.js:87583](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/dist/index.js#L87583)
    - [registerCommand @ index.js:87586](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/dist/index.js#L87586)
    - [registerCommand @ index.js:87587](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/dist/index.js#L87587)
    - [registerCommand @ index.ts:1792](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/src/index.ts#L1792)
    - [registerCommand @ index.ts:1842](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/src/index.ts#L1842)
    - [registerCommand @ index.ts:1896](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/src/index.ts#L1896)
    - [registerCommand @ index.ts:1954](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/src/index.ts#L1954)
    - [registerCommand @ index.ts:2031](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/src/index.ts#L2031)
    - [registerCommand @ index.ts:2036](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/src/index.ts#L2036)
    - [registerCommand @ index.ts:2040](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/src/index.ts#L2040)
    - [registerCommand @ index.ts:2041](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/src/index.ts#L2041)
    - [registerImageGenerationProvider @ index.ts:1693](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/src/index.ts#L1693)
    - [registerMusicGenerationProvider @ index.ts:1694](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/src/index.ts#L1694)
    - [registerProvider @ index.ts:1684](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/src/index.ts#L1684)
    - [registerProvider @ index.ts:1689](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/src/index.ts#L1689)
    - [registerService @ cli.js:89557](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/dist/cli.js#L89557)
    - [registerService @ index.js:87593](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/dist/index.js#L87593)
    - [registerService @ index.ts:2050](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/src/index.ts#L2050)
    - [registerVideoGenerationProvider @ index.ts:1696](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/src/index.ts#L1696)
    - [registerWebSearchProvider @ index.ts:1705](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/src/index.ts#L1705)

- 🟢 P3 **codex** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:codex`
  - evidence:
    - registerAgentHarness @ plugins/codex/.crabpot-package/dist/index.js:4261
    - registerCommand @ plugins/codex/.crabpot-package/dist/index.js:4304
    - registerGatewayMethod @ plugins/codex/.crabpot-package/dist/index.js:72
    - registerMediaUnderstandingProvider @ plugins/codex/.crabpot-package/dist/index.js:4262
    - registerMigrationProvider @ plugins/codex/.crabpot-package/dist/index.js:4264
    - registerNodeHostCommand @ plugins/codex/.crabpot-package/dist/index.js:4231
    - registerNodeHostCommand @ plugins/codex/.crabpot-package/dist/index.js:4300
    - registerNodeHostCommand @ plugins/codex/.crabpot-package/dist/index.js:4302
    - registerNodeInvokePolicy @ plugins/codex/.crabpot-package/dist/index.js:4233
    - registerNodeInvokePolicy @ plugins/codex/.crabpot-package/dist/index.js:4301
    - registerNodeInvokePolicy @ plugins/codex/.crabpot-package/dist/index.js:4303
    - registerProvider @ plugins/codex/.crabpot-package/dist/index.js:4152
    - registerService @ plugins/codex/.crabpot-package/dist/index.js:4150
    - registerService @ plugins/codex/.crabpot-package/dist/index.js:4168
    - registerService @ plugins/codex/.crabpot-package/dist/index.js:4169
    - registerService @ plugins/codex/.crabpot-package/dist/index.js:4170
    - registerService @ plugins/codex/.crabpot-package/dist/index.js:4217
    - registerSessionCatalog @ plugins/codex/.crabpot-package/dist/index.js:3420
    - registerToolMetadata @ plugins/codex/.crabpot-package/dist/index.js:4274
    - registerToolMetadata @ plugins/codex/.crabpot-package/dist/index.js:4289
    - registerWebSearchProvider @ plugins/codex/.crabpot-package/dist/index.js:4263

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
    - registerService @ plugins/diagnostics-otel/.crabpot-package/dist/index.js:9

- 🟢 P3 **diagnostics-prometheus** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:diagnostics-prometheus`
  - evidence:
    - registerHttpRoute @ plugins/diagnostics-prometheus/.crabpot-package/dist/index.js:1025
    - registerService @ plugins/diagnostics-prometheus/.crabpot-package/dist/index.js:1024

- 🟢 P3 **diffs** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:diffs`
  - evidence:
    - registerHttpRoute @ plugins/diffs/.crabpot-package/dist/index.js:1880
    - registerService @ plugins/diffs/.crabpot-package/dist/index.js:1855

- 🟢 P3 **discord** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:discord`
  - evidence:
    - registerHttpRoute @ plugins/discord/.crabpot-package/dist/activities-api.js:731
    - registerTranscriptSourceProvider @ plugins/discord/.crabpot-package/dist/transcripts-source-api.js:4
    - registerWidgetPresenter @ plugins/discord/.crabpot-package/dist/activities-api.js:737

- 🟢 P3 **google-meet** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:google-meet`
  - evidence:
    - registerGatewayMethod @ plugins/google-meet/.crabpot-package/dist/index.js:128
    - registerNodeHostCommand @ plugins/google-meet/.crabpot-package/dist/index.js:369
    - registerNodeInvokePolicy @ plugins/google-meet/.crabpot-package/dist/index.js:379
    - registerService @ plugins/google-meet/.crabpot-package/dist/.setup/plugin-registration-B_nOxAym.mjs:111
    - registerTranscriptSourceProvider @ plugins/google-meet/.crabpot-package/dist/index.js:187

- 🟢 P3 **inworld-tts** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:inworld-tts`
  - evidence:
    - [registerSpeechProvider @ index.ts:9](https://github.com/livingghost/openclaw-inworld-tts/blob/d2abaeea330ebef7530f43f8b395671f6f404aea/index.ts#L9)

- 🟢 P3 **lightclawbot** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:lightclawbot`
  - evidence:
    - registerMcpServerConnectionResolver @ plugins/lightclawbot/.crabpot-package/dist/src/connectors/mcp-connection.js:58
    - registerService @ plugins/lightclawbot/.crabpot-package/dist/src/connectors/owned-tools.js:390

- 🟢 P3 **matrix** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:matrix`
  - evidence:
    - [registerGatewayMethod @ index.ts:24](https://github.com/openclaw/openclaw/blob/5f84c5b8a9889ab7035c197bc25bbe0aa8a20765/extensions/matrix/index.ts#L24)

- 🟢 P3 **mattermost** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:mattermost`
  - evidence:
    - [registerHttpRoute @ slash-state.ts:299](https://github.com/openclaw/openclaw/blob/5f84c5b8a9889ab7035c197bc25bbe0aa8a20765/extensions/mattermost/src/mattermost/slash-state.ts#L299)

- 🟢 P3 **memory-lancedb** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:memory-lancedb`
  - evidence:
    - registerService @ plugins/memory-lancedb/.crabpot-package/dist/index.js:393
    - registerService @ plugins/memory-lancedb/.crabpot-package/dist/index.js:57

- 🟢 P3 **memos-cloud** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:memos-cloud`
  - evidence:
    - [registerHook @ index.js:787](https://github.com/MemTensor/MemOS-Cloud-OpenClaw-Plugin/blob/a317661691bda94054d3d35f8c226e8bfe0018f7/index.js#L787)

- 🟢 P3 **nostr** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:nostr`
  - evidence:
    - registerHttpRoute @ plugins/nostr/.crabpot-package/dist/index.js:60

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
    - [registerHttpRoute @ index.ts:259](https://github.com/team-telnyx/telnyx-openclaw-sms-channel/blob/6e3956246cd3e0e72af649d2fd75dee6f3e46966/index.ts#L259)

- 🟢 P3 **voice-call** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:voice-call`
  - evidence:
    - registerConfigMigration @ plugins/voice-call/.crabpot-package/dist/setup-api.js:132
    - registerGatewayMethod @ plugins/voice-call/.crabpot-package/dist/index.js:416
    - registerService @ plugins/voice-call/.crabpot-package/dist/index.js:582

- 🟢 P3 **bluebubbles** `channel-runtime`
  - contract: Channel setup, message envelope, sender metadata, and config schema remain stable.
  - id: `channel.runtime.envelope-config-metadata:bluebubbles`
  - evidence:
    - [createChatChannelPlugin @ channel-BSIXOcHe.js:930](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/bluebubbles/dist/channel-BSIXOcHe.js#L930)

- 🟢 P3 **discord** `channel-runtime`
  - contract: Channel setup, message envelope, sender metadata, and config schema remain stable.
  - id: `channel.runtime.envelope-config-metadata:discord`
  - evidence:
    - createChatChannelPlugin @ plugins/discord/.crabpot-package/dist/.setup/channel-BMpMAeQL.mjs:493

- 🟢 P3 **feishu** `channel-runtime`
  - contract: Channel setup, message envelope, sender metadata, and config schema remain stable.
  - id: `channel.runtime.envelope-config-metadata:feishu`
  - evidence:
    - createChatChannelPlugin @ plugins/feishu/.crabpot-package/dist/.setup/channel-dxkUGCgC.mjs:2256

- 🟢 P3 **lightclawbot** `channel-runtime`
  - contract: Channel setup, message envelope, sender metadata, and config schema remain stable.
  - id: `channel.runtime.envelope-config-metadata:lightclawbot`
  - evidence:
    - createChatChannelPlugin @ plugins/lightclawbot/.crabpot-package/dist/src/channel.js:49
    - defineChannelPluginEntry @ plugins/lightclawbot/.crabpot-package/dist/index.js:25

- 🟢 P3 **mattermost** `channel-runtime`
  - contract: Channel setup, message envelope, sender metadata, and config schema remain stable.
  - id: `channel.runtime.envelope-config-metadata:mattermost`
  - evidence:
    - [createChatChannelPlugin @ channel.ts:530](https://github.com/openclaw/openclaw/blob/5f84c5b8a9889ab7035c197bc25bbe0aa8a20765/extensions/mattermost/src/channel.ts#L530)

- 🟢 P3 **msteams** `channel-runtime`
  - contract: Channel setup, message envelope, sender metadata, and config schema remain stable.
  - id: `channel.runtime.envelope-config-metadata:msteams`
  - evidence:
    - createChatChannelPlugin @ plugins/msteams/.crabpot-package/dist/.setup/channel-CdCSk3Rg.cjs:1067

- 🟢 P3 **nextcloud-talk** `channel-runtime`
  - contract: Channel setup, message envelope, sender metadata, and config schema remain stable.
  - id: `channel.runtime.envelope-config-metadata:nextcloud-talk`
  - evidence:
    - createChatChannelPlugin @ plugins/nextcloud-talk/.crabpot-package/dist/.setup/channel-D9tHRtkv.mjs:2253

- 🟢 P3 **nostr** `channel-runtime`
  - contract: Channel setup, message envelope, sender metadata, and config schema remain stable.
  - id: `channel.runtime.envelope-config-metadata:nostr`
  - evidence:
    - createChatChannelPlugin @ plugins/nostr/.crabpot-package/dist/.setup/channel-C2iK5Fjg.mjs:1333

- 🟢 P3 **telnyx-sms** `channel-runtime`
  - contract: Channel setup, message envelope, sender metadata, and config schema remain stable.
  - id: `channel.runtime.envelope-config-metadata:telnyx-sms`
  - evidence:
    - [defineChannelPluginEntry @ index.ts:207](https://github.com/team-telnyx/telnyx-openclaw-sms-channel/blob/6e3956246cd3e0e72af649d2fd75dee6f3e46966/index.ts#L207)

- 🟢 P3 **tlon** `channel-runtime`
  - contract: Channel setup, message envelope, sender metadata, and config schema remain stable.
  - id: `channel.runtime.envelope-config-metadata:tlon`
  - evidence:
    - createChatChannelPlugin @ plugins/tlon/.crabpot-package/dist/.setup/channel-DwKKUzwx.mjs:135

- 🟢 P3 **twitch** `channel-runtime`
  - contract: Channel setup, message envelope, sender metadata, and config schema remain stable.
  - id: `channel.runtime.envelope-config-metadata:twitch`
  - evidence:
    - createChatChannelPlugin @ plugins/twitch/.crabpot-package/dist/.setup/plugin-CnPNkPhc.mjs:699

- 🟢 P3 **whatsapp** `channel-runtime`
  - contract: Channel setup, message envelope, sender metadata, and config schema remain stable.
  - id: `channel.runtime.envelope-config-metadata:whatsapp`
  - evidence:
    - createChatChannelPlugin @ plugins/whatsapp/.crabpot-package/dist/.setup/channel-DaAKkqgg.mjs:463

- 🟢 P3 **zalo** `channel-runtime`
  - contract: Channel setup, message envelope, sender metadata, and config schema remain stable.
  - id: `channel.runtime.envelope-config-metadata:zalo`
  - evidence:
    - createChatChannelPlugin @ plugins/zalo/.crabpot-package/dist/.setup/channel-B-pcG9qP.mjs:267

- 🟢 P3 **zalouser** `channel-runtime`
  - contract: Channel setup, message envelope, sender metadata, and config schema remain stable.
  - id: `channel.runtime.envelope-config-metadata:zalouser`
  - evidence:
    - createChatChannelPlugin @ plugins/zalouser/.crabpot-package/dist/.setup/channel-Chv0Qbpd.mjs:481

- 🟢 P3 **memos-cloud** `hook-runner`
  - contract: Legacy before_agent_start remains wired until plugins migrate to before_model_resolve and before_prompt_build.
  - id: `hook.compat.before-agent-start-migration:memos-cloud`
  - evidence:
    - [before_agent_start @ index.js:857](https://github.com/MemTensor/MemOS-Cloud-OpenClaw-Plugin/blob/a317661691bda94054d3d35f8c226e8bfe0018f7/index.js#L857)

- 🟢 P3 **telnyx-sms** `manifest-loader`
  - contract: Legacy channel env metadata continues to map into channel setup/help surfaces.
  - id: `manifest.compat.channel-env-vars:telnyx-sms`
  - evidence:
    - telnyx-sms

- 🟢 P3 **inworld-tts** `manifest-loader`
  - contract: Legacy provider auth env metadata continues to map into config/help surfaces.
  - id: `manifest.compat.provider-auth-env-vars:inworld-tts`
  - evidence:
    - inworld

- 🟢 P3 **bluebubbles** `manifest-loader`
  - contract: OpenClaw plugin manifests declare a human-readable display name for registry and tooling metadata.
  - id: `manifest.metadata.name:bluebubbles`
  - evidence:
    - [openclaw.plugin.json](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/bluebubbles/openclaw.plugin.json)

- 🟢 P3 **dingtalk-doc** `manifest-loader`
  - contract: OpenClaw plugin manifests declare a human-readable display name for registry and tooling metadata.
  - id: `manifest.metadata.name:dingtalk-doc`
  - evidence:
    - [openclaw.plugin.json](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/openclaw.plugin.json)

- 🟢 P3 **aiwerk-mcp-bridge** `manifest-loader`
  - contract: Manifest top-level fields are represented in target OpenClaw PluginManifest.
  - id: `manifest.schema.top-level-fields:aiwerk-mcp-bridge`
  - evidence:
    - entryPoint @ plugins/aiwerk-mcp-bridge/.crabpot-package/openclaw.plugin.json
    - required @ plugins/aiwerk-mcp-bridge/.crabpot-package/openclaw.plugin.json

- 🟢 P3 **inworld-tts** `manifest-loader`
  - contract: Manifest top-level fields are represented in target OpenClaw PluginManifest.
  - id: `manifest.schema.top-level-fields:inworld-tts`
  - evidence:
    - [providerAuthEnvVars @ openclaw.plugin.json](https://github.com/livingghost/openclaw-inworld-tts/blob/d2abaeea330ebef7530f43f8b395671f6f404aea/openclaw.plugin.json)

- 🟢 P3 **memos-cloud** `manifest-loader`
  - contract: Manifest top-level fields are represented in target OpenClaw PluginManifest.
  - id: `manifest.schema.top-level-fields:memos-cloud`
  - evidence:
    - [main @ openclaw.plugin.json](https://github.com/MemTensor/MemOS-Cloud-OpenClaw-Plugin/blob/a317661691bda94054d3d35f8c226e8bfe0018f7/openclaw.plugin.json)

- 🟢 P3 **telnyx-sms** `manifest-loader`
  - contract: Manifest top-level fields are represented in target OpenClaw PluginManifest.
  - id: `manifest.schema.top-level-fields:telnyx-sms`
  - evidence:
    - [channelEnvVars @ openclaw.plugin.json](https://github.com/team-telnyx/telnyx-openclaw-sms-channel/blob/6e3956246cd3e0e72af649d2fd75dee6f3e46966/openclaw.plugin.json)

- 🟢 P3 **aiwerk-mcp-bridge** `package-loader`
  - contract: Package metadata declares the OpenClaw plugin API range used by the plugin.
  - id: `package.compat.plugin-api-range:aiwerk-mcp-bridge`
  - evidence:
    - plugins/aiwerk-mcp-bridge/.crabpot-package/package.json

- 🟢 P3 **clawrouter** `package-loader`
  - contract: Package metadata declares the OpenClaw plugin API range used by the plugin.
  - id: `package.compat.plugin-api-range:clawrouter`
  - evidence:
    - [package.json](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/package.json)

- 🟢 P3 **dingtalk-doc** `package-loader`
  - contract: Package metadata declares the OpenClaw plugin API range used by the plugin.
  - id: `package.compat.plugin-api-range:dingtalk-doc`
  - evidence:
    - [package.json](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/package.json)

- 🟢 P3 **lightclawbot** `package-loader`
  - contract: Package metadata declares the OpenClaw plugin API range used by the plugin.
  - id: `package.compat.plugin-api-range:lightclawbot`
  - evidence:
    - plugins/lightclawbot/.crabpot-package/package.json

- 🟢 P3 **memos-cloud** `package-loader`
  - contract: Package metadata declares the OpenClaw plugin API range used by the plugin.
  - id: `package.compat.plugin-api-range:memos-cloud`
  - evidence:
    - [package.json](https://github.com/MemTensor/MemOS-Cloud-OpenClaw-Plugin/blob/a317661691bda94054d3d35f8c226e8bfe0018f7/package.json)

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

- 🟢 P3 **apify** `package-loader`
  - contract: Inspector can build or resolve source aliases before cold importing package entrypoints.
  - id: `package.entrypoint.build-before-cold-import:apify`
  - evidence:
    - [extension:./dist/index.js @ index.js](https://github.com/apify/apify-openclaw-plugin/blob/9f2aadbbfbd170f196165f05d9f967f500292cda/dist/index.js)

- 🟢 P3 **dingtalk-doc** `package-loader`
  - contract: Inspector can build or resolve source aliases before cold importing package entrypoints.
  - id: `package.entrypoint.build-before-cold-import:dingtalk-doc`
  - evidence:
    - [extension:./dist/index.mjs @ index.mjs](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/dist/index.mjs)

- 🟢 P3 **secureclaw** `package-loader`
  - contract: Inspector can build or resolve source aliases before cold importing package entrypoints.
  - id: `package.entrypoint.build-before-cold-import:secureclaw`
  - evidence:
    - [extension:./dist/index.js @ index.js](https://github.com/adversa-ai/secureclaw/blob/bf17e2b3deb989e348b3a98080e33a7047e90ac3/secureclaw/dist/index.js)

- 🟢 P3 **telnyx-sms** `package-loader`
  - contract: Inspector can build or resolve source aliases before cold importing package entrypoints.
  - id: `package.entrypoint.build-before-cold-import:telnyx-sms`
  - evidence:
    - [extension:./dist/index.js @ index.js](https://github.com/team-telnyx/telnyx-openclaw-sms-channel/blob/6e3956246cd3e0e72af649d2fd75dee6f3e46966/dist/index.js)
    - [setupEntry:./dist/setup-entry.js @ setup-entry.js](https://github.com/team-telnyx/telnyx-openclaw-sms-channel/blob/6e3956246cd3e0e72af649d2fd75dee6f3e46966/dist/setup-entry.js)

- 🟢 P3 **aiwerk-mcp-bridge** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:aiwerk-mcp-bridge`
  - evidence:
    - @aiwerk/mcp-bridge @ plugins/aiwerk-mcp-bridge/.crabpot-package/package.json
    - @sinclair/typebox @ plugins/aiwerk-mcp-bridge/.crabpot-package/package.json

- 🟢 P3 **apify** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:apify`
  - evidence:
    - [apify-client @ package.json](https://github.com/apify/apify-openclaw-plugin/blob/9f2aadbbfbd170f196165f05d9f967f500292cda/package.json)
    - [typebox @ package.json](https://github.com/apify/apify-openclaw-plugin/blob/9f2aadbbfbd170f196165f05d9f967f500292cda/package.json)

- 🟢 P3 **clawrouter** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:clawrouter`
  - evidence:
    - [@noble/hashes @ package.json](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/package.json)
    - [@scure/bip32 @ package.json](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/package.json)
    - [@scure/bip39 @ package.json](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/package.json)
    - [@solana/kit @ package.json](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/package.json)
    - [@x402/core @ package.json](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/package.json)
    - [@x402/evm @ package.json](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/package.json)
    - [@x402/fetch @ package.json](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/package.json)
    - [@x402/svm @ package.json](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/package.json)
    - [undici @ package.json](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/package.json)
    - [viem @ package.json](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/package.json)

- 🟢 P3 **codex** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:codex`
  - evidence:
    - @openai/codex @ plugins/codex/.crabpot-package/package.json
    - @openclaw/fs-safe @ plugins/codex/.crabpot-package/package.json
    - semver @ plugins/codex/.crabpot-package/package.json
    - smol-toml @ plugins/codex/.crabpot-package/package.json
    - typebox @ plugins/codex/.crabpot-package/package.json
    - ws @ plugins/codex/.crabpot-package/package.json
    - zod @ plugins/codex/.crabpot-package/package.json

- 🟢 P3 **codex-app-server** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:codex-app-server`
  - evidence:
    - [ws @ package.json](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/package.json)

- 🟢 P3 **diagnostics-otel** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:diagnostics-otel`
  - evidence:
    - @opentelemetry/api @ plugins/diagnostics-otel/.crabpot-package/package.json
    - @opentelemetry/api-logs @ plugins/diagnostics-otel/.crabpot-package/package.json
    - @opentelemetry/context-async-hooks @ plugins/diagnostics-otel/.crabpot-package/package.json
    - @opentelemetry/core @ plugins/diagnostics-otel/.crabpot-package/package.json
    - @opentelemetry/exporter-logs-otlp-proto @ plugins/diagnostics-otel/.crabpot-package/package.json
    - @opentelemetry/exporter-metrics-otlp-proto @ plugins/diagnostics-otel/.crabpot-package/package.json
    - @opentelemetry/exporter-trace-otlp-proto @ plugins/diagnostics-otel/.crabpot-package/package.json
    - @opentelemetry/propagator-b3 @ plugins/diagnostics-otel/.crabpot-package/package.json
    - @opentelemetry/propagator-jaeger @ plugins/diagnostics-otel/.crabpot-package/package.json
    - @opentelemetry/resources @ plugins/diagnostics-otel/.crabpot-package/package.json
    - @opentelemetry/sdk-logs @ plugins/diagnostics-otel/.crabpot-package/package.json
    - @opentelemetry/sdk-metrics @ plugins/diagnostics-otel/.crabpot-package/package.json
    - @opentelemetry/sdk-trace-base @ plugins/diagnostics-otel/.crabpot-package/package.json
    - @opentelemetry/semantic-conventions @ plugins/diagnostics-otel/.crabpot-package/package.json

- 🟢 P3 **diffs** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:diffs`
  - evidence:
    - @pierre/diffs @ plugins/diffs/.crabpot-package/package.json
    - @shikijs/langs @ plugins/diffs/.crabpot-package/package.json
    - playwright-core @ plugins/diffs/.crabpot-package/package.json
    - typebox @ plugins/diffs/.crabpot-package/package.json
    - zod @ plugins/diffs/.crabpot-package/package.json

- 🟢 P3 **dingtalk-doc** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:dingtalk-doc`
  - evidence:
    - [@sinclair/typebox @ package.json](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/package.json)

- 🟢 P3 **discord** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:discord`
  - evidence:
    - @discord/embedded-app-sdk @ plugins/discord/.crabpot-package/package.json
    - @discordjs/voice @ plugins/discord/.crabpot-package/package.json
    - discord-api-types @ plugins/discord/.crabpot-package/package.json
    - libopus-wasm @ plugins/discord/.crabpot-package/package.json
    - mdast-util-from-markdown @ plugins/discord/.crabpot-package/package.json
    - typebox @ plugins/discord/.crabpot-package/package.json
    - undici @ plugins/discord/.crabpot-package/package.json
    - ws @ plugins/discord/.crabpot-package/package.json
    - zod @ plugins/discord/.crabpot-package/package.json

- 🟢 P3 **feishu** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:feishu`
  - evidence:
    - @larksuiteoapi/node-sdk @ plugins/feishu/.crabpot-package/package.json
    - @openclaw/fs-safe @ plugins/feishu/.crabpot-package/package.json
    - mdast-util-from-markdown @ plugins/feishu/.crabpot-package/package.json
    - mdast-util-gfm-table @ plugins/feishu/.crabpot-package/package.json
    - micromark-extension-gfm-table @ plugins/feishu/.crabpot-package/package.json
    - typebox @ plugins/feishu/.crabpot-package/package.json
    - zod @ plugins/feishu/.crabpot-package/package.json

- 🟢 P3 **google-meet** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:google-meet`
  - evidence:
    - jszip @ plugins/google-meet/.crabpot-package/package.json
    - typebox @ plugins/google-meet/.crabpot-package/package.json

- 🟢 P3 **hapi-openclaw** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:hapi-openclaw`
  - evidence:
    - hono @ plugins/hapi-openclaw/.crabpot-package/package.json

- 🟢 P3 **lightclawbot** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:lightclawbot`
  - evidence:
    - @modelcontextprotocol/sdk @ plugins/lightclawbot/.crabpot-package/package.json
    - ws @ plugins/lightclawbot/.crabpot-package/package.json

- 🟢 P3 **lobster** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:lobster`
  - evidence:
    - @clawdbot/lobster @ plugins/lobster/.crabpot-package/package.json
    - typebox @ plugins/lobster/.crabpot-package/package.json

- 🟢 P3 **matrix** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:matrix`
  - evidence:
    - [@matrix-org/matrix-sdk-crypto-nodejs @ package.json](https://github.com/openclaw/openclaw/blob/5f84c5b8a9889ab7035c197bc25bbe0aa8a20765/extensions/matrix/package.json)
    - [@matrix-org/matrix-sdk-crypto-wasm @ package.json](https://github.com/openclaw/openclaw/blob/5f84c5b8a9889ab7035c197bc25bbe0aa8a20765/extensions/matrix/package.json)
    - [@openclaw/fs-safe @ package.json](https://github.com/openclaw/openclaw/blob/5f84c5b8a9889ab7035c197bc25bbe0aa8a20765/extensions/matrix/package.json)
    - [fake-indexeddb @ package.json](https://github.com/openclaw/openclaw/blob/5f84c5b8a9889ab7035c197bc25bbe0aa8a20765/extensions/matrix/package.json)
    - [markdown-it @ package.json](https://github.com/openclaw/openclaw/blob/5f84c5b8a9889ab7035c197bc25bbe0aa8a20765/extensions/matrix/package.json)
    - [matrix-js-sdk @ package.json](https://github.com/openclaw/openclaw/blob/5f84c5b8a9889ab7035c197bc25bbe0aa8a20765/extensions/matrix/package.json)
    - [music-metadata @ package.json](https://github.com/openclaw/openclaw/blob/5f84c5b8a9889ab7035c197bc25bbe0aa8a20765/extensions/matrix/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/5f84c5b8a9889ab7035c197bc25bbe0aa8a20765/extensions/matrix/package.json)
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/5f84c5b8a9889ab7035c197bc25bbe0aa8a20765/extensions/matrix/package.json)

- 🟢 P3 **mattermost** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:mattermost`
  - evidence:
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/5f84c5b8a9889ab7035c197bc25bbe0aa8a20765/extensions/mattermost/package.json)

- 🟢 P3 **memory-lancedb** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:memory-lancedb`
  - evidence:
    - apache-arrow @ plugins/memory-lancedb/.crabpot-package/package.json
    - openai @ plugins/memory-lancedb/.crabpot-package/package.json
    - typebox @ plugins/memory-lancedb/.crabpot-package/package.json
    - @lancedb/lancedb-darwin-arm64 @ plugins/memory-lancedb/.crabpot-package/package.json
    - @lancedb/lancedb-linux-arm64-gnu @ plugins/memory-lancedb/.crabpot-package/package.json
    - @lancedb/lancedb-linux-arm64-musl @ plugins/memory-lancedb/.crabpot-package/package.json
    - @lancedb/lancedb-linux-x64-gnu @ plugins/memory-lancedb/.crabpot-package/package.json
    - @lancedb/lancedb-linux-x64-musl @ plugins/memory-lancedb/.crabpot-package/package.json
    - @lancedb/lancedb-win32-arm64-msvc @ plugins/memory-lancedb/.crabpot-package/package.json
    - @lancedb/lancedb-win32-x64-msvc @ plugins/memory-lancedb/.crabpot-package/package.json

- 🟢 P3 **msteams** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:msteams`
  - evidence:
    - @azure/identity @ plugins/msteams/.crabpot-package/package.json
    - @microsoft/teams.api @ plugins/msteams/.crabpot-package/package.json
    - @microsoft/teams.apps @ plugins/msteams/.crabpot-package/package.json
    - express @ plugins/msteams/.crabpot-package/package.json
    - typebox @ plugins/msteams/.crabpot-package/package.json
    - zod @ plugins/msteams/.crabpot-package/package.json

- 🟢 P3 **nextcloud-talk** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:nextcloud-talk`
  - evidence:
    - zod @ plugins/nextcloud-talk/.crabpot-package/package.json

- 🟢 P3 **nostr** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:nostr`
  - evidence:
    - nostr-tools @ plugins/nostr/.crabpot-package/package.json
    - zod @ plugins/nostr/.crabpot-package/package.json

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
    - zod @ plugins/synology-chat/.crabpot-package/package.json

- 🟢 P3 **tlon** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:tlon`
  - evidence:
    - @aws-sdk/client-s3 @ plugins/tlon/.crabpot-package/package.json
    - @aws-sdk/s3-request-presigner @ plugins/tlon/.crabpot-package/package.json
    - @tloncorp/tlon-skill @ plugins/tlon/.crabpot-package/package.json
    - @urbit/aura @ plugins/tlon/.crabpot-package/package.json
    - zod @ plugins/tlon/.crabpot-package/package.json

- 🟢 P3 **twitch** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:twitch`
  - evidence:
    - @twurple/api-call @ plugins/twitch/.crabpot-package/package.json
    - @twurple/auth @ plugins/twitch/.crabpot-package/package.json
    - @twurple/chat @ plugins/twitch/.crabpot-package/package.json
    - zod @ plugins/twitch/.crabpot-package/package.json

- 🟢 P3 **voice-call** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:voice-call`
  - evidence:
    - typebox @ plugins/voice-call/.crabpot-package/package.json
    - zod @ plugins/voice-call/.crabpot-package/package.json

- 🟢 P3 **whatsapp** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:whatsapp`
  - evidence:
    - audio-decode @ plugins/whatsapp/.crabpot-package/package.json
    - baileys @ plugins/whatsapp/.crabpot-package/package.json
    - typebox @ plugins/whatsapp/.crabpot-package/package.json

- 🟢 P3 **zalo** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:zalo`
  - evidence:
    - zod @ plugins/zalo/.crabpot-package/package.json

- 🟢 P3 **zalouser** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:zalouser`
  - evidence:
    - typebox @ plugins/zalouser/.crabpot-package/package.json
    - zca-js @ plugins/zalouser/.crabpot-package/package.json
    - zod @ plugins/zalouser/.crabpot-package/package.json

- 🟢 P3 **aiwerk-mcp-bridge** `package-loader`
  - contract: Inspector can compile or load TypeScript source entrypoints before registration capture.
  - id: `package.entrypoint.typescript-loader:aiwerk-mcp-bridge`
  - evidence:
    - extension:plugins/aiwerk-mcp-bridge/.crabpot-package/index.ts

- 🟢 P3 **clawmetry** `package-loader`
  - contract: Inspector can compile or load TypeScript source entrypoints before registration capture.
  - id: `package.entrypoint.typescript-loader:clawmetry`
  - evidence:
    - [extension @ index.ts](https://github.com/vivekchand/clawmetry/blob/6228537b0271572d55f5bf02ee130f76038f7cd5/clawhub-plugin/index.ts)

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
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/5f84c5b8a9889ab7035c197bc25bbe0aa8a20765/extensions/matrix/index.ts)
    - [setupEntry @ setup-entry.ts](https://github.com/openclaw/openclaw/blob/5f84c5b8a9889ab7035c197bc25bbe0aa8a20765/extensions/matrix/setup-entry.ts)

- 🟢 P3 **mattermost** `package-loader`
  - contract: Inspector can compile or load TypeScript source entrypoints before registration capture.
  - id: `package.entrypoint.typescript-loader:mattermost`
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/5f84c5b8a9889ab7035c197bc25bbe0aa8a20765/extensions/mattermost/index.ts)
    - [setupEntry @ setup-entry.ts](https://github.com/openclaw/openclaw/blob/5f84c5b8a9889ab7035c197bc25bbe0aa8a20765/extensions/mattermost/setup-entry.ts)

- 🟢 P3 **memu-engine** `package-loader`
  - contract: Inspector can compile or load TypeScript source entrypoints before registration capture.
  - id: `package.entrypoint.typescript-loader:memu-engine`
  - evidence:
    - [extension @ index.ts](https://github.com/duxiaoxiong/memu-engine-for-OpenClaw/blob/a5a22c5faf21e30d17a1b47635829e7dd0728ae5/index.ts)

- 🟢 P3 **web-search-plus** `package-loader`
  - contract: Inspector can compile or load TypeScript source entrypoints before registration capture.
  - id: `package.entrypoint.typescript-loader:web-search-plus`
  - evidence:
    - [extension @ index.ts](https://github.com/robbyczgw-cla/web-search-plus-plugin/blob/f0f4b0cf2b71dcbe1f76248d3059dfaef2c3507b/index.ts)

- 🟢 P3 **bluebubbles** `package-loader`
  - contract: Release publishing metadata declares canonical ClawHub and npm install specs.
  - id: `package.metadata.install-release:bluebubbles`
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec

- 🟢 P3 **clawmetry** `package-loader`
  - contract: Release publishing metadata declares canonical ClawHub and npm install specs.
  - id: `package.metadata.install-release:clawmetry`
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec
    - openclaw.release.publishToNpm requires openclaw.install.npmSpec

- 🟢 P3 **dingtalk-doc** `sdk-alias`
  - contract: Root plugin SDK barrel remains importable or has a machine-readable migration path.
  - id: `sdk.import.root-barrel-cold-import:dingtalk-doc`
  - evidence:
    - [openclaw/plugin-sdk @ index.ts:11](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/index.ts#L11)

- 🟢 P3 **aiwerk-mcp-bridge** `tool-runtime`
  - contract: Registered runtime tools expose stable names, input schemas, and result metadata.
  - id: `tool.registration.schema-capture:aiwerk-mcp-bridge`
  - evidence:
    - registerTool @ plugins/aiwerk-mcp-bridge/.crabpot-package/dist/index.js:118
    - registerTool @ plugins/aiwerk-mcp-bridge/.crabpot-package/dist/index.js:310
    - registerTool @ plugins/aiwerk-mcp-bridge/.crabpot-package/dist/index.js:63
    - registerTool @ plugins/aiwerk-mcp-bridge/.crabpot-package/index.ts:147
    - registerTool @ plugins/aiwerk-mcp-bridge/.crabpot-package/index.ts:370
    - registerTool @ plugins/aiwerk-mcp-bridge/.crabpot-package/index.ts:90

- 🟢 P3 **dingtalk-doc** `tool-runtime`
  - contract: Registered runtime tools expose stable names, input schemas, and result metadata.
  - id: `tool.registration.schema-capture:dingtalk-doc`
  - evidence:
    - [registerTool @ helpers.ts:93](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/src/tools/helpers.ts#L93)

- 🟢 P3 **memu-engine** `tool-runtime`
  - contract: Registered runtime tools expose stable names, input schemas, and result metadata.
  - id: `tool.registration.schema-capture:memu-engine`
  - evidence:
    - [registerTool @ index.ts:1252](https://github.com/duxiaoxiong/memu-engine-for-OpenClaw/blob/a5a22c5faf21e30d17a1b47635829e7dd0728ae5/index.ts#L1252)
