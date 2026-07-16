# Crabpot Issue Findings

Generated: deterministic
Status: PASS


## Crabpot Target Context

- **OpenClaw host track:** `explicit`
- **Plugin artifact track:** `manifest`
- **Fixture set:** `all (60 fixtures)`
## Triage Summary

| Metric                     | Value |
| -------------------------- | ----- |
| Issue findings             | 293   |
| Open issue findings        | 293   |
| Runtime-covered findings   | 0     |
| Runtime-partial findings   | 0     |
| 🔴 P0                      | 2     |
| 🟠 P1                      | 19    |
| Open 🔴 P0                 | 2     |
| Open 🟠 P1                 | 19    |
| Live issues                | 2     |
| Live P0 issues             | 2     |
| Compat gaps                | 3     |
| Deprecation warnings       | 46    |
| Inspector gaps             | 157   |
| Open inspector gaps        | 157   |
| Runtime coverage artifacts | 0     |
| Upstream metadata          | 85    |
| Contract probes            | 280   |

## Triage Overview

| Class               | Count | P0 | Meaning                                                                                                                                                  |
| ------------------- | ----- | -- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| live-issue          | 2     | 2  | Potential runtime breakage in the target OpenClaw/plugin pair. P0 only when it is not a deprecated compat seam.                                          |
| compat-gap          | 3     | -  | Compatibility behavior is needed but missing from the target OpenClaw compat registry.                                                                   |
| deprecation-warning | 46    | -  | Plugin uses a supported but deprecated compatibility seam; keep it wired while migration exists.                                                         |
| inspector-gap       | 157   | -  | Plugin Inspector needs stronger capture/probe evidence before making contract judgments. Runtime-covered rows are proof-backed and not open report work. |
| upstream-metadata   | 85    | -  | Plugin package or manifest metadata should improve upstream; not a target OpenClaw live break by itself.                                                 |
| fixture-regression  | 0     | -  | Fixture no longer exposes an expected seam; investigate fixture pin or scanner drift.                                                                    |

## P0 Live Issues

- 🔴 P0 **codex** `live-issue` `core-compat-adapter`
  - **unknown-registration-name**: codex: fixture calls a registrar missing from target OpenClaw
  - state: blocking · compat:none · live
  - evidence:
    - [registerSessionCatalog @ session-catalog-7H112Tr_.js:2385](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/codex/dist/session-catalog-7H112Tr_.js#L2385)

- 🔴 P0 **kitchen-sink** `live-issue` `core-compat-adapter`
  - **unknown-registration-name**: kitchen-sink: fixture calls a registrar missing from target OpenClaw
  - state: blocking · compat:none · live
  - evidence:
    - [registerMeetingNotesSourceProvider @ sync-surface.mjs:165](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/scripts/sync-surface.mjs#L165)

## Other Live Issues

_none_

## Compat Gaps

- 🟠 P1 **codex** `compat-gap` `core-compat-adapter`
  - **sdk-export-missing**: codex: plugin SDK import aliases are missing from target package exports
  - state: open · compat:untracked
  - evidence:
    - [openclaw/plugin-sdk/expect-runtime @ command-handlers-Cpl9fUWv.js:23](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/codex/dist/command-handlers-Cpl9fUWv.js#L23)
    - [openclaw/plugin-sdk/expect-runtime @ dynamic-tools-BMLoaTeG.js:20](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/codex/dist/dynamic-tools-BMLoaTeG.js#L20)
    - [openclaw/plugin-sdk/expect-runtime @ index.js:37](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/codex/dist/index.js#L37)
    - [openclaw/plugin-sdk/expect-runtime @ provider.js:6](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/codex/dist/provider.js#L6)
    - [openclaw/plugin-sdk/expect-runtime @ rate-limits-Dhp04Rqo.js:4](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/codex/dist/rate-limits-Dhp04Rqo.js#L4)
    - [openclaw/plugin-sdk/expect-runtime @ session-catalog-7H112Tr_.js:25](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/codex/dist/session-catalog-7H112Tr_.js#L25)
    - [openclaw/plugin-sdk/expect-runtime @ shared-client-D4mFI9al.js:25](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/codex/dist/shared-client-D4mFI9al.js#L25)
    - [openclaw/plugin-sdk/node-host @ session-catalog-7H112Tr_.js:27](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/codex/dist/session-catalog-7H112Tr_.js#L27)

- 🟠 P1 **memory-lancedb** `compat-gap` `core-compat-adapter`
  - **sdk-export-missing**: memory-lancedb: plugin SDK import aliases are missing from target package exports
  - state: open · compat:untracked
  - evidence:
    - [openclaw/plugin-sdk/expect-runtime @ index.js:8](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/memory-lancedb/dist/index.js#L8)

- 🟠 P1 **openclaw-qqbot** `compat-gap` `core-compat-adapter`
  - **sdk-export-missing**: openclaw-qqbot: plugin SDK import aliases are missing from target package exports
  - state: open · compat:untracked
  - evidence:
    - [openclaw/plugin-sdk/expect-runtime @ config-schema-B5Mle_87.js:8](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/qqbot/dist/config-schema-B5Mle_87.js#L8)
    - [openclaw/plugin-sdk/expect-runtime @ gateway-be5-Ckdc.js:27](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/qqbot/dist/gateway-be5-Ckdc.js#L27)

## Deprecation Warnings

- 🟡 P2 **a2a-gateway** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: a2a-gateway: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [openclaw/plugin-sdk @ types.ts:14](https://github.com/win4r/openclaw-a2a-gateway/blob/27621e23eb46aefe9a506e2d110f9784890c6712/src/types.ts#L14)
  - author remediation:
    - Prefer focused public plugin SDK subpath imports instead of the legacy root barrel.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#legacy-root-sdk-import

- 🟡 P2 **agentchat** `deprecation-warning` `core-compat-adapter`
  - **channel-env-vars**: agentchat: channelEnvVars legacy manifest metadata must stay covered
  - state: open · compat:deprecated · deprecated
  - evidence:
    - agentchat
  - author remediation:
    - Move legacy channel environment variable metadata into the current setup/config metadata while keeping the old field until your supported OpenClaw range no longer needs it.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#channel-env-vars

- 🟡 P2 **clawmetry** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: clawmetry: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [openclaw/plugin-sdk @ index.ts:1](https://github.com/vivekchand/clawmetry/blob/a8a39b68941f6ea8dea1562e34fefd721ad805d2/clawhub-plugin/index.ts#L1)
    - [openclaw/plugin-sdk @ service.ts:1](https://github.com/vivekchand/clawmetry/blob/a8a39b68941f6ea8dea1562e34fefd721ad805d2/clawhub-plugin/src/service.ts#L1)
  - author remediation:
    - Prefer focused public plugin SDK subpath imports instead of the legacy root barrel.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#legacy-root-sdk-import

- 🟡 P2 **codex-app-server** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: codex-app-server: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [openclaw/plugin-sdk @ index.ts:1](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/index.ts#L1)
    - [openclaw/plugin-sdk @ client.ts:6](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/src/client.ts#L6)
    - [openclaw/plugin-sdk @ controller.ts:18](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/src/controller.ts#L18)
    - [openclaw/plugin-sdk @ types.ts:1](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/src/types.ts#L1)
  - author remediation:
    - Prefer focused public plugin SDK subpath imports instead of the legacy root barrel.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#legacy-root-sdk-import

- 🟡 P2 **composio** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: composio: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [openclaw/plugin-sdk @ index.ts:1](https://github.com/ComposioHQ/openclaw-composio-plugin/blob/47025c33224d343d9fbbf67e0a24e56eeaa18fff/index.ts#L1)
  - author remediation:
    - Prefer focused public plugin SDK subpath imports instead of the legacy root barrel.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#legacy-root-sdk-import

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
    - [openclaw/plugin-sdk @ index.ts:1](https://github.com/osipov-anton/connectclaw/blob/7a4e2646e914de075435b3837123cc03c3edae36/packages/plugin/index.ts#L1)
    - [openclaw/plugin-sdk @ commands.ts:1](https://github.com/osipov-anton/connectclaw/blob/7a4e2646e914de075435b3837123cc03c3edae36/packages/plugin/src/commands.ts#L1)
    - [openclaw/plugin-sdk @ hooks.ts:1](https://github.com/osipov-anton/connectclaw/blob/7a4e2646e914de075435b3837123cc03c3edae36/packages/plugin/src/hooks.ts#L1)
    - [openclaw/plugin-sdk @ tools.ts:1](https://github.com/osipov-anton/connectclaw/blob/7a4e2646e914de075435b3837123cc03c3edae36/packages/plugin/src/tools.ts#L1)
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

- 🟡 P2 **dingtalk-connector** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: dingtalk-connector: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [openclaw/plugin-sdk @ index.ts:17](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/index.ts#L17)
    - [openclaw/plugin-sdk @ channel.ts:5](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/channel.ts#L5)
    - [openclaw/plugin-sdk @ accounts.ts:2](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/config/accounts.ts#L2)
    - [openclaw/plugin-sdk @ connection.ts:16](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/core/connection.ts#L16)
    - [openclaw/plugin-sdk @ provider.ts:14](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/core/provider.ts#L14)
    - [openclaw/plugin-sdk @ directory.ts:1](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/directory.ts#L1)
    - [openclaw/plugin-sdk @ gateway-methods.ts:7](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/gateway-methods.ts#L7)
    - [openclaw/plugin-sdk @ onboarding.ts:5](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/onboarding.ts#L5)
    - [openclaw/plugin-sdk @ runtime.ts:1](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/runtime.ts#L1)
    - [openclaw/plugin-sdk @ card-bridge.ts:1](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/services/card-bridge.ts#L1)
    - [openclaw/plugin-sdk @ agent.ts:8](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/utils/agent.ts#L8)
  - author remediation:
    - Prefer focused public plugin SDK subpath imports instead of the legacy root barrel.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#legacy-root-sdk-import

- 🟡 P2 **dingtalk-doc** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: dingtalk-doc: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [openclaw/plugin-sdk @ index.ts:10](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/index.ts#L10)
    - [openclaw/plugin-sdk @ index.ts:11](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/index.ts#L11)
    - [openclaw/plugin-sdk @ delete-document-block.ts:6](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/src/tools/block/delete-document-block.ts#L6)
    - [openclaw/plugin-sdk @ index.ts:5](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/src/tools/block/index.ts#L5)
    - [openclaw/plugin-sdk @ insert-document-block.ts:6](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/src/tools/block/insert-document-block.ts#L6)
    - [openclaw/plugin-sdk @ list-document-blocks.ts:6](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/src/tools/block/list-document-blocks.ts#L6)
    - [openclaw/plugin-sdk @ update-document-block.ts:6](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/src/tools/block/update-document-block.ts#L6)
    - [openclaw/plugin-sdk @ create-document.ts:6](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/src/tools/doc/create-document.ts#L6)
    - [openclaw/plugin-sdk @ get-document-content.ts:6](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/src/tools/doc/get-document-content.ts#L6)
    - [openclaw/plugin-sdk @ get-document-info.ts:6](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/src/tools/doc/get-document-info.ts#L6)
    - [openclaw/plugin-sdk @ index.ts:8](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/src/tools/doc/index.ts#L8)
    - [openclaw/plugin-sdk @ search-documents.ts:6](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/src/tools/doc/search-documents.ts#L6)
    - [openclaw/plugin-sdk @ update-document.ts:6](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/src/tools/doc/update-document.ts#L6)
    - [openclaw/plugin-sdk @ commit-uploaded-file.ts:6](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/src/tools/file/commit-uploaded-file.ts#L6)
    - [openclaw/plugin-sdk @ create-file.ts:6](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/src/tools/file/create-file.ts#L6)
    - [openclaw/plugin-sdk @ create-folder.ts:6](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/src/tools/file/create-folder.ts#L6)
    - [openclaw/plugin-sdk @ download-file.ts:6](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/src/tools/file/download-file.ts#L6)
    - [openclaw/plugin-sdk @ get-file-upload-info.ts:6](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/src/tools/file/get-file-upload-info.ts#L6)
    - [openclaw/plugin-sdk @ index.ts:5](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/src/tools/file/index.ts#L5)
    - [openclaw/plugin-sdk @ list-nodes.ts:6](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/src/tools/file/list-nodes.ts#L6)
    - [openclaw/plugin-sdk @ helpers.ts:7](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/src/tools/helpers.ts#L7)
  - author remediation:
    - Prefer focused public plugin SDK subpath imports instead of the legacy root barrel.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#legacy-root-sdk-import

- 🟡 P2 **discord** `deprecation-warning` `core-compat-adapter`
  - **channel-env-vars**: discord: channelEnvVars legacy manifest metadata must stay covered
  - state: open · compat:deprecated · deprecated
  - evidence:
    - discord
  - author remediation:
    - Move legacy channel environment variable metadata into the current setup/config metadata while keeping the old field until your supported OpenClaw range no longer needs it.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#channel-env-vars

- 🟡 P2 **feishu** `deprecation-warning` `core-compat-adapter`
  - **channel-env-vars**: feishu: channelEnvVars legacy manifest metadata must stay covered
  - state: open · compat:deprecated · deprecated
  - evidence:
    - feishu
  - author remediation:
    - Move legacy channel environment variable metadata into the current setup/config metadata while keeping the old field until your supported OpenClaw range no longer needs it.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#channel-env-vars

- 🟡 P2 **feishu** `deprecation-warning` `core-compat-adapter`
  - **sdk-load-session-store**: feishu: deprecated whole-store session helper is still used
  - state: open · compat:none
  - evidence:
    - [openclaw/plugin-sdk/session-store-runtime loadSessionStore import @ channel-DRQRQQQ3.js:36](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/feishu/dist/channel-DRQRQQQ3.js#L36)
  - author remediation:
    - Replace deprecated loadSessionStore whole-store access with row-scoped session helpers.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#sdk-load-session-store

- 🟡 P2 **feishu** `deprecation-warning` `core-compat-adapter`
  - **sdk-session-file-helper**: feishu: deprecated session file-path helper is still used
  - state: open · compat:none
  - evidence:
    - [openclaw/plugin-sdk/session-store-runtime resolveSessionFilePath import @ channel-DRQRQQQ3.js:36](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/feishu/dist/channel-DRQRQQQ3.js#L36)
  - author remediation:
    - Replace deprecated session file-path helpers with session entry and transcript identity APIs.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#sdk-session-file-helper

- 🟡 P2 **feishu** `deprecation-warning` `core-compat-adapter`
  - **sdk-session-store-write**: feishu: deprecated whole-store session write helper is still used
  - state: open · compat:none
  - evidence:
    - [openclaw/plugin-sdk/session-store-runtime updateSessionStore import @ channel-DRQRQQQ3.js:36](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/feishu/dist/channel-DRQRQQQ3.js#L36)
  - author remediation:
    - Replace deprecated whole-store session writes with row-scoped session helpers.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#sdk-session-store-write

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

- 🟡 P2 **honcho** `deprecation-warning` `core-compat-adapter`
  - **legacy-before-agent-start**: honcho: legacy before_agent_start hook compatibility is still used
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [before_agent_start @ subagent.ts:18](https://github.com/plastic-labs/openclaw-honcho/blob/f35f9d474b977f2c43e6dbace1eb9323123347bc/hooks/subagent.ts#L18)
  - author remediation:
    - Replace the legacy before_agent_start hook with the current prompt/model hooks.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#legacy-before-agent-start

- 🟡 P2 **honcho** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: honcho: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [openclaw/plugin-sdk @ cli.ts:8](https://github.com/plastic-labs/openclaw-honcho/blob/f35f9d474b977f2c43e6dbace1eb9323123347bc/commands/cli.ts#L8)
    - [openclaw/plugin-sdk @ capture.ts:2](https://github.com/plastic-labs/openclaw-honcho/blob/f35f9d474b977f2c43e6dbace1eb9323123347bc/hooks/capture.ts#L2)
    - [openclaw/plugin-sdk @ context.ts:2](https://github.com/plastic-labs/openclaw-honcho/blob/f35f9d474b977f2c43e6dbace1eb9323123347bc/hooks/context.ts#L2)
    - [openclaw/plugin-sdk @ gateway.ts:2](https://github.com/plastic-labs/openclaw-honcho/blob/f35f9d474b977f2c43e6dbace1eb9323123347bc/hooks/gateway.ts#L2)
    - [openclaw/plugin-sdk @ subagent.ts:2](https://github.com/plastic-labs/openclaw-honcho/blob/f35f9d474b977f2c43e6dbace1eb9323123347bc/hooks/subagent.ts#L2)
    - [openclaw/plugin-sdk @ state.ts:9](https://github.com/plastic-labs/openclaw-honcho/blob/f35f9d474b977f2c43e6dbace1eb9323123347bc/state.ts#L9)
    - [openclaw/plugin-sdk @ ask.ts:3](https://github.com/plastic-labs/openclaw-honcho/blob/f35f9d474b977f2c43e6dbace1eb9323123347bc/tools/ask.ts#L3)
    - [openclaw/plugin-sdk @ context.ts:3](https://github.com/plastic-labs/openclaw-honcho/blob/f35f9d474b977f2c43e6dbace1eb9323123347bc/tools/context.ts#L3)
    - [openclaw/plugin-sdk @ memory-passthrough.ts:3](https://github.com/plastic-labs/openclaw-honcho/blob/f35f9d474b977f2c43e6dbace1eb9323123347bc/tools/memory-passthrough.ts#L3)
    - [openclaw/plugin-sdk @ message-search.ts:3](https://github.com/plastic-labs/openclaw-honcho/blob/f35f9d474b977f2c43e6dbace1eb9323123347bc/tools/message-search.ts#L3)
    - [openclaw/plugin-sdk @ search.ts:3](https://github.com/plastic-labs/openclaw-honcho/blob/f35f9d474b977f2c43e6dbace1eb9323123347bc/tools/search.ts#L3)
    - [openclaw/plugin-sdk @ session.ts:3](https://github.com/plastic-labs/openclaw-honcho/blob/f35f9d474b977f2c43e6dbace1eb9323123347bc/tools/session.ts#L3)
  - author remediation:
    - Prefer focused public plugin SDK subpath imports instead of the legacy root barrel.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#legacy-root-sdk-import

- 🟡 P2 **hyperspell** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: hyperspell: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [openclaw/plugin-sdk @ slash.ts:1](https://github.com/hyperspell/hyperspell-openclaw/blob/056dcd9710a26b84bbef4ba72353e99b41af8f73/commands/slash.ts#L1)
    - [openclaw/plugin-sdk @ tools.ts:2](https://github.com/hyperspell/hyperspell-openclaw/blob/056dcd9710a26b84bbef4ba72353e99b41af8f73/graph/tools.ts#L2)
    - [openclaw/plugin-sdk @ index.ts:1](https://github.com/hyperspell/hyperspell-openclaw/blob/056dcd9710a26b84bbef4ba72353e99b41af8f73/index.ts#L1)
  - author remediation:
    - Prefer focused public plugin SDK subpath imports instead of the legacy root barrel.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#legacy-root-sdk-import

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
    - [api.runtime.agent.session alias loadSessionStore @ index.ts:1487](https://github.com/Martian-Engineering/lossless-claw/blob/a97c65888838dad9ac665ce10c6f54d0a370a02b/src/plugin/index.ts#L1487)
    - [api.runtime.agent.session alias loadSessionStore @ index.ts:1516](https://github.com/Martian-Engineering/lossless-claw/blob/a97c65888838dad9ac665ce10c6f54d0a370a02b/src/plugin/index.ts#L1516)
    - [api.runtime.agent.session alias loadSessionStore @ index.ts:1562](https://github.com/Martian-Engineering/lossless-claw/blob/a97c65888838dad9ac665ce10c6f54d0a370a02b/src/plugin/index.ts#L1562)
    - [api.runtime.agent.session alias loadSessionStore @ index.ts:1794](https://github.com/Martian-Engineering/lossless-claw/blob/a97c65888838dad9ac665ce10c6f54d0a370a02b/src/plugin/index.ts#L1794)
    - [api.runtime.agent.session alias loadSessionStore @ index.ts:1840](https://github.com/Martian-Engineering/lossless-claw/blob/a97c65888838dad9ac665ce10c6f54d0a370a02b/src/plugin/index.ts#L1840)
  - author remediation:
    - Replace deprecated loadSessionStore whole-store access with row-scoped session helpers.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#sdk-load-session-store

- 🟡 P2 **lossless-claw** `deprecation-warning` `core-compat-adapter`
  - **sdk-session-file-helper**: lossless-claw: deprecated session file-path helper is still used
  - state: open · compat:none
  - evidence:
    - [api.runtime.agent.session alias resolveSessionFilePath @ index.ts:1523](https://github.com/Martian-Engineering/lossless-claw/blob/a97c65888838dad9ac665ce10c6f54d0a370a02b/src/plugin/index.ts#L1523)
    - [api.runtime.agent.session alias resolveSessionFilePath @ index.ts:1583](https://github.com/Martian-Engineering/lossless-claw/blob/a97c65888838dad9ac665ce10c6f54d0a370a02b/src/plugin/index.ts#L1583)
  - author remediation:
    - Replace deprecated session file-path helpers with session entry and transcript identity APIs.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#sdk-session-file-helper

- 🟡 P2 **matrix** `deprecation-warning` `core-compat-adapter`
  - **channel-env-vars**: matrix: channelEnvVars legacy manifest metadata must stay covered
  - state: open · compat:deprecated · deprecated
  - evidence:
    - matrix
  - author remediation:
    - Move legacy channel environment variable metadata into the current setup/config metadata while keeping the old field until your supported OpenClaw range no longer needs it.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#channel-env-vars

- 🟡 P2 **mattermost** `deprecation-warning` `core-compat-adapter`
  - **channel-env-vars**: mattermost: channelEnvVars legacy manifest metadata must stay covered
  - state: open · compat:deprecated · deprecated
  - evidence:
    - mattermost
  - author remediation:
    - Move legacy channel environment variable metadata into the current setup/config metadata while keeping the old field until your supported OpenClaw range no longer needs it.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#channel-env-vars

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
    - [before_agent_start @ index.js:802](https://github.com/MemTensor/MemOS-Cloud-OpenClaw-Plugin/blob/18cb8c7f9317d1348629d9f4cbd9507978de0b81/index.js#L802)
  - author remediation:
    - Replace the legacy before_agent_start hook with the current prompt/model hooks.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#legacy-before-agent-start

- 🟡 P2 **memu-engine** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: memu-engine: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [openclaw/plugin-sdk @ index.ts:1](https://github.com/duxiaoxiong/memu-engine-for-OpenClaw/blob/a5a22c5faf21e30d17a1b47635829e7dd0728ae5/index.ts#L1)
  - author remediation:
    - Prefer focused public plugin SDK subpath imports instead of the legacy root barrel.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#legacy-root-sdk-import

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
  - author remediation:
    - Prefer focused public plugin SDK subpath imports instead of the legacy root barrel.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#legacy-root-sdk-import

- 🟡 P2 **msteams** `deprecation-warning` `core-compat-adapter`
  - **channel-env-vars**: msteams: channelEnvVars legacy manifest metadata must stay covered
  - state: open · compat:deprecated · deprecated
  - evidence:
    - msteams
  - author remediation:
    - Move legacy channel environment variable metadata into the current setup/config metadata while keeping the old field until your supported OpenClaw range no longer needs it.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#channel-env-vars

- 🟡 P2 **nextcloud-talk** `deprecation-warning` `core-compat-adapter`
  - **channel-env-vars**: nextcloud-talk: channelEnvVars legacy manifest metadata must stay covered
  - state: open · compat:deprecated · deprecated
  - evidence:
    - nextcloud-talk
  - author remediation:
    - Move legacy channel environment variable metadata into the current setup/config metadata while keeping the old field until your supported OpenClaw range no longer needs it.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#channel-env-vars

- 🟡 P2 **nostr** `deprecation-warning` `core-compat-adapter`
  - **channel-env-vars**: nostr: channelEnvVars legacy manifest metadata must stay covered
  - state: open · compat:deprecated · deprecated
  - evidence:
    - nostr
  - author remediation:
    - Move legacy channel environment variable metadata into the current setup/config metadata while keeping the old field until your supported OpenClaw range no longer needs it.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#channel-env-vars

- 🟡 P2 **openclaw-qqbot** `deprecation-warning` `core-compat-adapter`
  - **channel-env-vars**: openclaw-qqbot: channelEnvVars legacy manifest metadata must stay covered
  - state: open · compat:deprecated · deprecated
  - evidence:
    - qqbot
  - author remediation:
    - Move legacy channel environment variable metadata into the current setup/config metadata while keeping the old field until your supported OpenClaw range no longer needs it.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#channel-env-vars

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
    - [openclaw/plugin-sdk @ index.ts:1](https://github.com/knostic/openclaw-telemetry/blob/86c2458a0dfe82d639c208c5220396feb9d53c45/index.ts#L1)
    - [openclaw/plugin-sdk @ service.ts:1](https://github.com/knostic/openclaw-telemetry/blob/86c2458a0dfe82d639c208c5220396feb9d53c45/src/service.ts#L1)
    - [openclaw/plugin-sdk @ service.ts:2](https://github.com/knostic/openclaw-telemetry/blob/86c2458a0dfe82d639c208c5220396feb9d53c45/src/service.ts#L2)
  - author remediation:
    - Prefer focused public plugin SDK subpath imports instead of the legacy root barrel.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#legacy-root-sdk-import

- 🟡 P2 **opik-openclaw** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: opik-openclaw: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [openclaw/plugin-sdk @ index.ts:1](https://github.com/comet-ml/opik-openclaw/blob/fac4cc3f0fa96e96b1ee2583a0525f3681b017b5/index.ts#L1)
    - [openclaw/plugin-sdk @ index.ts:2](https://github.com/comet-ml/opik-openclaw/blob/fac4cc3f0fa96e96b1ee2583a0525f3681b017b5/index.ts#L2)
    - [openclaw/plugin-sdk @ cli.ts:1](https://github.com/comet-ml/opik-openclaw/blob/fac4cc3f0fa96e96b1ee2583a0525f3681b017b5/src/cli.ts#L1)
    - [openclaw/plugin-sdk @ configure.ts:2](https://github.com/comet-ml/opik-openclaw/blob/fac4cc3f0fa96e96b1ee2583a0525f3681b017b5/src/configure.ts#L2)
    - [openclaw/plugin-sdk @ service.ts:5](https://github.com/comet-ml/opik-openclaw/blob/fac4cc3f0fa96e96b1ee2583a0525f3681b017b5/src/service.ts#L5)
    - [openclaw/plugin-sdk @ service.ts:6](https://github.com/comet-ml/opik-openclaw/blob/fac4cc3f0fa96e96b1ee2583a0525f3681b017b5/src/service.ts#L6)
    - [openclaw/plugin-sdk @ llm.ts:1](https://github.com/comet-ml/opik-openclaw/blob/fac4cc3f0fa96e96b1ee2583a0525f3681b017b5/src/service/hooks/llm.ts#L1)
    - [openclaw/plugin-sdk @ subagent.ts:1](https://github.com/comet-ml/opik-openclaw/blob/fac4cc3f0fa96e96b1ee2583a0525f3681b017b5/src/service/hooks/subagent.ts#L1)
    - [openclaw/plugin-sdk @ tool.ts:1](https://github.com/comet-ml/opik-openclaw/blob/fac4cc3f0fa96e96b1ee2583a0525f3681b017b5/src/service/hooks/tool.ts#L1)
  - author remediation:
    - Prefer focused public plugin SDK subpath imports instead of the legacy root barrel.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#legacy-root-sdk-import

- 🟡 P2 **qqbot** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: qqbot: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [openclaw/plugin-sdk @ index.ts:1](https://github.com/tencent-connect/openclaw-qqbot/blob/7ceb7f0913d15417c5a74d82442a672ef0382c64/index.ts#L1)
    - [openclaw/plugin-sdk @ index.ts:2](https://github.com/tencent-connect/openclaw-qqbot/blob/7ceb7f0913d15417c5a74d82442a672ef0382c64/index.ts#L2)
    - [openclaw/plugin-sdk @ api.ts:7](https://github.com/tencent-connect/openclaw-qqbot/blob/7ceb7f0913d15417c5a74d82442a672ef0382c64/src/api.ts#L7)
    - [openclaw/plugin-sdk @ approval-handler.ts:12](https://github.com/tencent-connect/openclaw-qqbot/blob/7ceb7f0913d15417c5a74d82442a672ef0382c64/src/approval-handler.ts#L12)
    - [openclaw/plugin-sdk @ config.ts:2](https://github.com/tencent-connect/openclaw-qqbot/blob/7ceb7f0913d15417c5a74d82442a672ef0382c64/src/config.ts#L2)
    - [openclaw/plugin-sdk @ onboarding.ts:13](https://github.com/tencent-connect/openclaw-qqbot/blob/7ceb7f0913d15417c5a74d82442a672ef0382c64/src/onboarding.ts#L13)
    - [openclaw/plugin-sdk @ proactive.ts:67](https://github.com/tencent-connect/openclaw-qqbot/blob/7ceb7f0913d15417c5a74d82442a672ef0382c64/src/proactive.ts#L67)
    - [openclaw/plugin-sdk @ runtime.ts:1](https://github.com/tencent-connect/openclaw-qqbot/blob/7ceb7f0913d15417c5a74d82442a672ef0382c64/src/runtime.ts#L1)
    - [openclaw/plugin-sdk @ channel.ts:1](https://github.com/tencent-connect/openclaw-qqbot/blob/7ceb7f0913d15417c5a74d82442a672ef0382c64/src/tools/channel.ts#L1)
    - [openclaw/plugin-sdk @ remind.ts:1](https://github.com/tencent-connect/openclaw-qqbot/blob/7ceb7f0913d15417c5a74d82442a672ef0382c64/src/tools/remind.ts#L1)
  - author remediation:
    - Prefer focused public plugin SDK subpath imports instead of the legacy root barrel.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#legacy-root-sdk-import

- 🟡 P2 **synology-chat** `deprecation-warning` `core-compat-adapter`
  - **channel-env-vars**: synology-chat: channelEnvVars legacy manifest metadata must stay covered
  - state: open · compat:deprecated · deprecated
  - evidence:
    - synology-chat
  - author remediation:
    - Move legacy channel environment variable metadata into the current setup/config metadata while keeping the old field until your supported OpenClaw range no longer needs it.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#channel-env-vars

- 🟡 P2 **telnyx-sms** `deprecation-warning` `core-compat-adapter`
  - **channel-env-vars**: telnyx-sms: channelEnvVars legacy manifest metadata must stay covered
  - state: open · compat:deprecated · deprecated
  - evidence:
    - telnyx-sms
  - author remediation:
    - Move legacy channel environment variable metadata into the current setup/config metadata while keeping the old field until your supported OpenClaw range no longer needs it.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#channel-env-vars

- 🟡 P2 **twitch** `deprecation-warning` `core-compat-adapter`
  - **channel-env-vars**: twitch: channelEnvVars legacy manifest metadata must stay covered
  - state: open · compat:deprecated · deprecated
  - evidence:
    - twitch
  - author remediation:
    - Move legacy channel environment variable metadata into the current setup/config metadata while keeping the old field until your supported OpenClaw range no longer needs it.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#channel-env-vars

- 🟡 P2 **voice-call** `deprecation-warning` `core-compat-adapter`
  - **channel-env-vars**: voice-call: channelEnvVars legacy manifest metadata must stay covered
  - state: open · compat:deprecated · deprecated
  - evidence:
    - voice-call
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

- 🟡 P2 **zalo** `deprecation-warning` `core-compat-adapter`
  - **channel-env-vars**: zalo: channelEnvVars legacy manifest metadata must stay covered
  - state: open · compat:deprecated · deprecated
  - evidence:
    - zalo
  - author remediation:
    - Move legacy channel environment variable metadata into the current setup/config metadata while keeping the old field until your supported OpenClaw range no longer needs it.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#channel-env-vars

- 🟡 P2 **zalouser** `deprecation-warning` `core-compat-adapter`
  - **channel-env-vars**: zalouser: channelEnvVars legacy manifest metadata must stay covered
  - state: open · compat:deprecated · deprecated
  - evidence:
    - zalouser
  - author remediation:
    - Move legacy channel environment variable metadata into the current setup/config metadata while keeping the old field until your supported OpenClaw range no longer needs it.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#channel-env-vars

## Inspector Proof Gaps

- 🟠 P1 **clawmetry** `inspector-gap` `inspector-follow-up`
  - **conversation-access-hook**: clawmetry: conversation-access hooks need privacy-boundary probes
  - state: open · compat:active
  - evidence:
    - [llm_output @ service.ts:117](https://github.com/vivekchand/clawmetry/blob/a8a39b68941f6ea8dea1562e34fefd721ad805d2/clawhub-plugin/src/service.ts#L117)

- 🟠 P1 **dingtalk-doc** `inspector-gap` `inspector-follow-up`
  - **before-tool-call-probe**: dingtalk-doc: before_tool_call needs terminal/block/approval probes
  - state: open · compat:active
  - evidence:
    - [before_tool_call @ index.ts:41](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/index.ts#L41)

- 🟠 P1 **honcho** `inspector-gap` `inspector-follow-up`
  - **conversation-access-hook**: honcho: conversation-access hooks need privacy-boundary probes
  - state: open · compat:active
  - evidence:
    - [agent_end @ capture.ts:164](https://github.com/plastic-labs/openclaw-honcho/blob/f35f9d474b977f2c43e6dbace1eb9323123347bc/hooks/capture.ts#L164)
    - [agent_end @ subagent.ts:34](https://github.com/plastic-labs/openclaw-honcho/blob/f35f9d474b977f2c43e6dbace1eb9323123347bc/hooks/subagent.ts#L34)

- 🟠 P1 **kitchen-sink** `inspector-gap` `inspector-follow-up`
  - **before-tool-call-probe**: kitchen-sink: before_tool_call needs terminal/block/approval probes
  - state: open · compat:active
  - evidence:
    - [before_tool_call @ generated-hooks.js:19](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-hooks.js#L19)

- 🟠 P1 **kitchen-sink** `inspector-gap` `inspector-follow-up`
  - **conversation-access-hook**: kitchen-sink: conversation-access hooks need privacy-boundary probes
  - state: open · compat:active
  - evidence:
    - [agent_end @ generated-hooks.js:7](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-hooks.js#L7)
    - [llm_input @ generated-hooks.js:26](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-hooks.js#L26)
    - [llm_output @ generated-hooks.js:27](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-hooks.js#L27)

- 🟠 P1 **llm-trace-phoenix** `inspector-gap` `inspector-follow-up`
  - **conversation-access-hook**: llm-trace-phoenix: conversation-access hooks need privacy-boundary probes
  - state: open · compat:active
  - evidence:
    - [llm_input @ index.js:105](https://github.com/pingshian0131/openclaw-plugin-llm-trace-phoenix/blob/ad8a34681b4d49a1b7d75bb8f6ac9b2f2ea3a8e9/dist/index.js#L105)
    - [llm_input @ index.ts:202](https://github.com/pingshian0131/openclaw-plugin-llm-trace-phoenix/blob/ad8a34681b4d49a1b7d75bb8f6ac9b2f2ea3a8e9/index.ts#L202)
    - [llm_output @ index.js:118](https://github.com/pingshian0131/openclaw-plugin-llm-trace-phoenix/blob/ad8a34681b4d49a1b7d75bb8f6ac9b2f2ea3a8e9/dist/index.js#L118)
    - [llm_output @ index.ts:216](https://github.com/pingshian0131/openclaw-plugin-llm-trace-phoenix/blob/ad8a34681b4d49a1b7d75bb8f6ac9b2f2ea3a8e9/index.ts#L216)

- 🟠 P1 **memory-lancedb** `inspector-gap` `inspector-follow-up`
  - **conversation-access-hook**: memory-lancedb: conversation-access hooks need privacy-boundary probes
  - state: open · compat:active
  - evidence:
    - [agent_end @ index.js:1214](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/memory-lancedb/dist/index.js#L1214)

- 🟠 P1 **memory-tencentdb** `inspector-gap` `inspector-follow-up`
  - **conversation-access-hook**: memory-tencentdb: conversation-access hooks need privacy-boundary probes
  - state: open · compat:active
  - evidence:
    - agent_end @ plugins/memory-tencentdb/.crabpot-package/dist/index.mjs:1095
    - agent_end @ plugins/memory-tencentdb/.crabpot-package/dist/index.mjs:1256
    - agent_end @ plugins/memory-tencentdb/.crabpot-package/dist/index.mjs:21802
    - agent_end @ plugins/memory-tencentdb/.crabpot-package/index.ts:808
    - agent_end @ plugins/memory-tencentdb/.crabpot-package/openclaw-plugin/index.ts:209
    - agent_end @ plugins/memory-tencentdb/.crabpot-package/src/offload-client/index.ts:52

- 🟠 P1 **memos-cloud** `inspector-gap` `inspector-follow-up`
  - **conversation-access-hook**: memos-cloud: conversation-access hooks need privacy-boundary probes
  - state: open · compat:active
  - evidence:
    - [agent_end @ index.js:805](https://github.com/MemTensor/MemOS-Cloud-OpenClaw-Plugin/blob/18cb8c7f9317d1348629d9f4cbd9507978de0b81/index.js#L805)

- 🟠 P1 **nemoclaw** `inspector-gap` `inspector-follow-up`
  - **before-tool-call-probe**: nemoclaw: before_tool_call needs terminal/block/approval probes
  - state: open · compat:active
  - evidence:
    - [before_tool_call @ index.ts:385](https://github.com/NVIDIA/NemoClaw/blob/c1bda8069d95a84a9e16b0d292a5fe20ce7cea7d/nemoclaw/src/index.ts#L385)

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
    - [before_tool_call @ tool.ts:34](https://github.com/comet-ml/opik-openclaw/blob/fac4cc3f0fa96e96b1ee2583a0525f3681b017b5/src/service/hooks/tool.ts#L34)

- 🟠 P1 **opik-openclaw** `inspector-gap` `inspector-follow-up`
  - **conversation-access-hook**: opik-openclaw: conversation-access hooks need privacy-boundary probes
  - state: open · compat:active
  - evidence:
    - [agent_end @ service.ts:581](https://github.com/comet-ml/opik-openclaw/blob/fac4cc3f0fa96e96b1ee2583a0525f3681b017b5/src/service.ts#L581)
    - [llm_input @ llm.ts:39](https://github.com/comet-ml/opik-openclaw/blob/fac4cc3f0fa96e96b1ee2583a0525f3681b017b5/src/service/hooks/llm.ts#L39)
    - [llm_output @ llm.ts:150](https://github.com/comet-ml/opik-openclaw/blob/fac4cc3f0fa96e96b1ee2583a0525f3681b017b5/src/service/hooks/llm.ts#L150)

- 🟠 P1 **wecom** `inspector-gap` `inspector-follow-up`
  - **before-tool-call-probe**: wecom: before_tool_call needs terminal/block/approval probes
  - state: open · compat:active
  - evidence:
    - [before_tool_call @ index.js:76](https://github.com/sunnoy/openclaw-plugin-wecom/blob/df2e426457a0e587bbfe63f185ffe002cbf61e6f/index.js#L76)

- 🟡 P2 **a2a-gateway** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: a2a-gateway: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@a2a-js/sdk @ package.json](https://github.com/win4r/openclaw-a2a-gateway/blob/27621e23eb46aefe9a506e2d110f9784890c6712/package.json)
    - [@bufbuild/protobuf @ package.json](https://github.com/win4r/openclaw-a2a-gateway/blob/27621e23eb46aefe9a506e2d110f9784890c6712/package.json)
    - [@grpc/grpc-js @ package.json](https://github.com/win4r/openclaw-a2a-gateway/blob/27621e23eb46aefe9a506e2d110f9784890c6712/package.json)
    - [express @ package.json](https://github.com/win4r/openclaw-a2a-gateway/blob/27621e23eb46aefe9a506e2d110f9784890c6712/package.json)
    - [multicast-dns @ package.json](https://github.com/win4r/openclaw-a2a-gateway/blob/27621e23eb46aefe9a506e2d110f9784890c6712/package.json)
    - [uuid @ package.json](https://github.com/win4r/openclaw-a2a-gateway/blob/27621e23eb46aefe9a506e2d110f9784890c6712/package.json)
    - [ws @ package.json](https://github.com/win4r/openclaw-a2a-gateway/blob/27621e23eb46aefe9a506e2d110f9784890c6712/package.json)

- 🟡 P2 **a2a-gateway** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: a2a-gateway: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/win4r/openclaw-a2a-gateway/blob/27621e23eb46aefe9a506e2d110f9784890c6712/index.ts)

- 🟡 P2 **a2a-gateway** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: a2a-gateway: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:active
  - evidence:
    - [registerService @ index.ts:897](https://github.com/win4r/openclaw-a2a-gateway/blob/27621e23eb46aefe9a506e2d110f9784890c6712/index.ts#L897)

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
    - [extension:./dist/index.js @ index.js](https://github.com/apify/apify-openclaw-plugin/blob/f089a0632461f921ddbd15d783a791be9fc808ab/dist/index.js)

- 🟡 P2 **apify** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: apify: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [apify-client @ package.json](https://github.com/apify/apify-openclaw-plugin/blob/f089a0632461f921ddbd15d783a791be9fc808ab/package.json)
    - [typebox @ package.json](https://github.com/apify/apify-openclaw-plugin/blob/f089a0632461f921ddbd15d783a791be9fc808ab/package.json)

- 🟡 P2 **bluebubbles** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: bluebubbles: channel runtime needs envelope/config probes
  - state: open · compat:active
  - evidence:
    - [createChatChannelPlugin @ channel-BSIXOcHe.js:930](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/bluebubbles/dist/channel-BSIXOcHe.js#L930)

- 🟡 P2 **clawmetry** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: clawmetry: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/vivekchand/clawmetry/blob/a8a39b68941f6ea8dea1562e34fefd721ad805d2/clawhub-plugin/index.ts)

- 🟡 P2 **clawmetry** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: clawmetry: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:active
  - evidence:
    - [registerService @ index.ts:20](https://github.com/vivekchand/clawmetry/blob/a8a39b68941f6ea8dea1562e34fefd721ad805d2/clawhub-plugin/index.ts#L20)

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
  - state: open · compat:active
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
    - [registerService @ cli.js:89557](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/dist/cli.js#L89557)
    - [registerService @ index.js:87593](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/dist/index.js#L87593)
    - [registerService @ index.ts:2050](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/src/index.ts#L2050)

- 🟡 P2 **codex** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: codex: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@openai/codex @ package.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/codex/package.json)
    - [semver @ package.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/codex/package.json)
    - [smol-toml @ package.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/codex/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/codex/package.json)
    - [ws @ package.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/codex/package.json)
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/codex/package.json)

- 🟡 P2 **codex** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: codex: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:active
  - evidence:
    - [registerCommand @ index.js:3831](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/codex/dist/index.js#L3831)
    - [registerNodeHostCommand @ index.js:3795](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/codex/dist/index.js#L3795)
    - [registerNodeHostCommand @ index.js:3829](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/codex/dist/index.js#L3829)
    - [registerNodeInvokePolicy @ index.js:3797](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/codex/dist/index.js#L3797)
    - [registerNodeInvokePolicy @ index.js:3830](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/codex/dist/index.js#L3830)
    - [registerSessionCatalog @ session-catalog-7H112Tr_.js:2385](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/codex/dist/session-catalog-7H112Tr_.js#L2385)

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
  - state: open · compat:active
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
    - [@opentelemetry/api @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/diagnostics-otel/package.json)
    - [@opentelemetry/api-logs @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/diagnostics-otel/package.json)
    - [@opentelemetry/exporter-logs-otlp-proto @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/diagnostics-otel/package.json)
    - [@opentelemetry/exporter-metrics-otlp-proto @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/diagnostics-otel/package.json)
    - [@opentelemetry/exporter-trace-otlp-proto @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/diagnostics-otel/package.json)
    - [@opentelemetry/resources @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/diagnostics-otel/package.json)
    - [@opentelemetry/sdk-logs @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/diagnostics-otel/package.json)
    - [@opentelemetry/sdk-metrics @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/diagnostics-otel/package.json)
    - [@opentelemetry/sdk-node @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/diagnostics-otel/package.json)
    - [@opentelemetry/sdk-trace-base @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/diagnostics-otel/package.json)
    - [@opentelemetry/semantic-conventions @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/diagnostics-otel/package.json)

- 🟡 P2 **diagnostics-otel** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: diagnostics-otel: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:active
  - evidence:
    - [registerService @ index.js:9](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/diagnostics-otel/dist/index.js#L9)

- 🟡 P2 **diagnostics-prometheus** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: diagnostics-prometheus: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:active
  - evidence:
    - [registerHttpRoute @ index.js:633](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/diagnostics-prometheus/dist/index.js#L633)
    - [registerService @ index.js:632](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/diagnostics-prometheus/dist/index.js#L632)

- 🟡 P2 **diffs** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: diffs: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@pierre/diffs @ package.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/diffs/package.json)
    - [@shikijs/langs @ package.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/diffs/package.json)
    - [playwright-core @ package.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/diffs/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/diffs/package.json)
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/diffs/package.json)

- 🟡 P2 **diffs** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: diffs: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:active
  - evidence:
    - [registerHttpRoute @ index.js:2512](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/diffs/dist/index.js#L2512)

- 🟡 P2 **dingtalk-connector** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: dingtalk-connector: channel runtime needs envelope/config probes
  - state: open · compat:active
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
  - state: open · compat:active
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
  - state: open · compat:active
  - evidence:
    - [createChatChannelPlugin @ channel-DGWPH5u3.js:403](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/discord/dist/channel-DGWPH5u3.js#L403)

- 🟡 P2 **discord** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: discord: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@discordjs/voice @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/discord/package.json)
    - [discord-api-types @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/discord/package.json)
    - [libopus-wasm @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/discord/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/discord/package.json)
    - [undici @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/discord/package.json)
    - [ws @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/discord/package.json)

- 🟡 P2 **feishu** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: feishu: channel runtime needs envelope/config probes
  - state: open · compat:active
  - evidence:
    - [createChatChannelPlugin @ channel-DRQRQQQ3.js:2049](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/feishu/dist/channel-DRQRQQQ3.js#L2049)

- 🟡 P2 **feishu** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: feishu: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@larksuiteoapi/node-sdk @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/feishu/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/feishu/package.json)
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/feishu/package.json)

- 🟡 P2 **google-meet** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: google-meet: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [jszip @ package.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/google-meet/package.json)
    - [pretty-ms @ package.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/google-meet/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/google-meet/package.json)

- 🟡 P2 **google-meet** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: google-meet: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:active
  - evidence:
    - [registerGatewayMethod @ index.js:5272](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/google-meet/dist/index.js#L5272)
    - [registerGatewayMethod @ index.js:5290](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/google-meet/dist/index.js#L5290)
    - [registerGatewayMethod @ index.js:5307](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/google-meet/dist/index.js#L5307)
    - [registerGatewayMethod @ index.js:5314](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/google-meet/dist/index.js#L5314)
    - [registerGatewayMethod @ index.js:5331](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/google-meet/dist/index.js#L5331)
    - [registerGatewayMethod @ index.js:5341](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/google-meet/dist/index.js#L5341)
    - [registerGatewayMethod @ index.js:5352](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/google-meet/dist/index.js#L5352)
    - [registerGatewayMethod @ index.js:5372](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/google-meet/dist/index.js#L5372)
    - [registerGatewayMethod @ index.js:5387](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/google-meet/dist/index.js#L5387)
    - [registerGatewayMethod @ index.js:5404](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/google-meet/dist/index.js#L5404)
    - [registerGatewayMethod @ index.js:5422](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/google-meet/dist/index.js#L5422)
    - [registerGatewayMethod @ index.js:5429](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/google-meet/dist/index.js#L5429)
    - [registerGatewayMethod @ index.js:5441](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/google-meet/dist/index.js#L5441)
    - [registerGatewayMethod @ index.js:5452](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/google-meet/dist/index.js#L5452)
    - [registerGatewayMethod @ index.js:5464](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/google-meet/dist/index.js#L5464)
    - [registerGatewayMethod @ index.js:5482](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/google-meet/dist/index.js#L5482)
    - [registerNodeHostCommand @ index.js:5654](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/google-meet/dist/index.js#L5654)
    - [registerNodeInvokePolicy @ index.js:5660](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/google-meet/dist/index.js#L5660)

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
    - [extension:./dist/index.js @ index.js](https://github.com/plastic-labs/openclaw-honcho/blob/f35f9d474b977f2c43e6dbace1eb9323123347bc/dist/index.js)

- 🟡 P2 **honcho** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: honcho: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@honcho-ai/sdk @ package.json](https://github.com/plastic-labs/openclaw-honcho/blob/f35f9d474b977f2c43e6dbace1eb9323123347bc/package.json)
    - [@sinclair/typebox @ package.json](https://github.com/plastic-labs/openclaw-honcho/blob/f35f9d474b977f2c43e6dbace1eb9323123347bc/package.json)

- 🟡 P2 **honcho** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: honcho: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:active
  - evidence:
    - [registerMemoryPromptSection @ index.ts:97](https://github.com/plastic-labs/openclaw-honcho/blob/f35f9d474b977f2c43e6dbace1eb9323123347bc/index.ts#L97)
    - [registerMemoryRuntime @ runtime.ts:261](https://github.com/plastic-labs/openclaw-honcho/blob/f35f9d474b977f2c43e6dbace1eb9323123347bc/runtime.ts#L261)

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
  - state: open · compat:active
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

- 🟡 P2 **kitchen-sink** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: kitchen-sink: channel runtime needs envelope/config probes
  - state: open · compat:active
  - evidence:
    - [registerChannel @ generated-registrars.js:8](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-registrars.js#L8)
    - [registerChannel @ kitchen-runtime.js:58](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/kitchen-runtime.js#L58)

- 🟡 P2 **kitchen-sink** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: kitchen-sink: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:active
  - evidence:
    - [registerAutoEnableProbe @ generated-registrars.js:7](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-registrars.js#L7)
    - [registerChannel @ generated-registrars.js:8](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-registrars.js#L8)
    - [registerChannel @ kitchen-runtime.js:58](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/kitchen-runtime.js#L58)
    - [registerCommand @ generated-registrars.js:12](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-registrars.js#L12)
    - [registerCommand @ kitchen-runtime.js:53](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/kitchen-runtime.js#L53)
    - [registerCommand @ kitchen-runtime.js:54](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/kitchen-runtime.js#L54)
    - [registerCompactionProvider @ generated-registrars.js:13](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-registrars.js#L13)
    - [registerCompactionProvider @ kitchen-runtime.js:101](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/kitchen-runtime.js#L101)
    - [registerConfigMigration @ generated-registrars.js:14](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-registrars.js#L14)
    - [registerContextEngine @ generated-registrars.js:15](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-registrars.js#L15)
    - [registerContextEngine @ kitchen-runtime.js:104](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/kitchen-runtime.js#L104)
    - [registerDetachedTaskRuntime @ sync-surface.mjs:162](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/scripts/sync-surface.mjs#L162)
    - [registerDetachedTaskRuntime @ generated-registrars.js:17](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-registrars.js#L17)
    - [registerDetachedTaskRuntime @ kitchen-runtime.js:92](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/kitchen-runtime.js#L92)
    - [registerGatewayDiscoveryService @ generated-registrars.js:19](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-registrars.js#L19)
    - [registerGatewayMethod @ generated-registrars.js:20](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-registrars.js#L20)
    - [registerGatewayMethod @ kitchen-runtime.js:116](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/kitchen-runtime.js#L116)
    - [registerHook @ generated-registrars.js:21](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-registrars.js#L21)
    - [registerHostedMediaResolver @ generated-registrars.js:22](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-registrars.js#L22)
    - [registerHttpRoute @ generated-registrars.js:23](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-registrars.js#L23)
    - [registerHttpRoute @ kitchen-runtime.js:114](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/kitchen-runtime.js#L114)
    - [registerInteractiveHandler @ generated-registrars.js:25](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-registrars.js#L25)
    - [registerInteractiveHandler @ kitchen-runtime.js:56](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/kitchen-runtime.js#L56)
    - [registerMeetingNotesSourceProvider @ sync-surface.mjs:165](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/scripts/sync-surface.mjs#L165)
    - [registerMemoryCapability @ generated-registrars.js:27](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-registrars.js#L27)
    - [registerMemoryCorpusSupplement @ generated-registrars.js:28](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-registrars.js#L28)
    - [registerMemoryCorpusSupplement @ kitchen-runtime.js:98](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/kitchen-runtime.js#L98)
    - [registerMemoryFlushPlan @ generated-registrars.js:30](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-registrars.js#L30)
    - [registerMemoryPromptSection @ generated-registrars.js:31](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-registrars.js#L31)
    - [registerMemoryPromptSupplement @ generated-registrars.js:32](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-registrars.js#L32)
    - [registerMemoryPromptSupplement @ kitchen-runtime.js:120](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/kitchen-runtime.js#L120)
    - [registerMemoryRuntime @ generated-registrars.js:33](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-registrars.js#L33)
    - [registerNodeCliFeature @ sync-surface.mjs:171](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/scripts/sync-surface.mjs#L171)
    - [registerNodeCliFeature @ generated-registrars.js:37](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-registrars.js#L37)
    - [registerNodeHostCommand @ generated-registrars.js:38](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-registrars.js#L38)
    - [registerNodeInvokePolicy @ generated-registrars.js:39](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-registrars.js#L39)
    - [registerReload @ generated-registrars.js:43](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-registrars.js#L43)
    - [registerSecurityAuditCollector @ generated-registrars.js:45](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-registrars.js#L45)
    - [registerService @ generated-registrars.js:46](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-registrars.js#L46)
    - [registerService @ kitchen-runtime.js:113](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/kitchen-runtime.js#L113)

- 🟡 P2 **lightclawbot** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: lightclawbot: channel runtime needs envelope/config probes
  - state: open · compat:active
  - evidence:
    - createChatChannelPlugin @ plugins/lightclawbot/.crabpot-package/dist/src/channel.js:45
    - defineChannelPluginEntry @ plugins/lightclawbot/.crabpot-package/dist/index.js:25

- 🟡 P2 **lightclawbot** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: lightclawbot: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - ws @ plugins/lightclawbot/.crabpot-package/package.json

- 🟡 P2 **lobster** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: lobster: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@clawdbot/lobster @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/lobster/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/lobster/package.json)

- 🟡 P2 **lossless-claw** `inspector-gap` `inspector-follow-up`
  - **package-build-artifact-entrypoint**: lossless-claw: cold import requires package build output
  - state: open · compat:none
  - evidence:
    - [extension:./dist/index.js @ index.js](https://github.com/Martian-Engineering/lossless-claw/blob/a97c65888838dad9ac665ce10c6f54d0a370a02b/dist/index.js)

- 🟡 P2 **lossless-claw** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: lossless-claw: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@sinclair/typebox @ package.json](https://github.com/Martian-Engineering/lossless-claw/blob/a97c65888838dad9ac665ce10c6f54d0a370a02b/package.json)

- 🟡 P2 **lossless-claw** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: lossless-claw: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:active
  - evidence:
    - [registerCommand @ index.ts:1696](https://github.com/Martian-Engineering/lossless-claw/blob/a97c65888838dad9ac665ce10c6f54d0a370a02b/src/plugin/index.ts#L1696)
    - [registerContextEngine @ index.ts:1647](https://github.com/Martian-Engineering/lossless-claw/blob/a97c65888838dad9ac665ce10c6f54d0a370a02b/src/plugin/index.ts#L1647)

- 🟡 P2 **matrix** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: matrix: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@matrix-org/matrix-sdk-crypto-nodejs @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/matrix/package.json)
    - [@matrix-org/matrix-sdk-crypto-wasm @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/matrix/package.json)
    - [fake-indexeddb @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/matrix/package.json)
    - [markdown-it @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/matrix/package.json)
    - [matrix-js-sdk @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/matrix/package.json)
    - [music-metadata @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/matrix/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/matrix/package.json)
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/matrix/package.json)

- 🟡 P2 **matrix** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: matrix: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/matrix/index.ts)
    - [setupEntry @ setup-entry.ts](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/matrix/setup-entry.ts)

- 🟡 P2 **matrix** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: matrix: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:active
  - evidence:
    - [registerGatewayMethod @ index.ts:15](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/matrix/index.ts#L15)
    - [registerGatewayMethod @ index.ts:20](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/matrix/index.ts#L20)
    - [registerGatewayMethod @ index.ts:25](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/matrix/index.ts#L25)

- 🟡 P2 **mattermost** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: mattermost: channel runtime needs envelope/config probes
  - state: open · compat:active
  - evidence:
    - [createChatChannelPlugin @ channel.ts:757](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/mattermost/src/channel.ts#L757)

- 🟡 P2 **mattermost** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: mattermost: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [ws @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/mattermost/package.json)
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/mattermost/package.json)

- 🟡 P2 **mattermost** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: mattermost: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/mattermost/index.ts)
    - [setupEntry @ setup-entry.ts](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/mattermost/setup-entry.ts)

- 🟡 P2 **mattermost** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: mattermost: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:active
  - evidence:
    - [registerHttpRoute @ slash-state.ts:417](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/mattermost/src/mattermost/slash-state.ts#L417)

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
    - [@lancedb/lancedb @ package.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/memory-lancedb/package.json)
    - [apache-arrow @ package.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/memory-lancedb/package.json)
    - [openai @ package.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/memory-lancedb/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/memory-lancedb/package.json)

- 🟡 P2 **memory-lancedb** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: memory-lancedb: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:active
  - evidence:
    - [registerService @ index.js:1265](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/memory-lancedb/dist/index.js#L1265)
    - [registerService @ index.js:846](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/memory-lancedb/dist/index.js#L846)

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
  - state: open · compat:active
  - evidence:
    - registerContextEngine @ plugins/memory-tencentdb/.crabpot-package/dist/index.mjs:1107
    - registerContextEngine @ plugins/memory-tencentdb/.crabpot-package/dist/index.mjs:7704
    - registerContextEngine @ plugins/memory-tencentdb/.crabpot-package/dist/index.mjs:7715
    - registerContextEngine @ plugins/memory-tencentdb/.crabpot-package/src/offload-client/index.ts:67
    - registerContextEngine @ plugins/memory-tencentdb/.crabpot-package/src/offload/index.ts:1235
    - registerContextEngine @ plugins/memory-tencentdb/.crabpot-package/src/offload/index.ts:1246

- 🟡 P2 **memos-cloud** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: memos-cloud: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:active
  - evidence:
    - [registerHook @ index.js:732](https://github.com/MemTensor/MemOS-Cloud-OpenClaw-Plugin/blob/18cb8c7f9317d1348629d9f4cbd9507978de0b81/index.js#L732)

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
    - [createChatChannelPlugin @ channel-Cf5LJ4aO.js:681](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/msteams/dist/channel-Cf5LJ4aO.js#L681)

- 🟡 P2 **msteams** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: msteams: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@azure/identity @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/msteams/package.json)
    - [@microsoft/teams.api @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/msteams/package.json)
    - [@microsoft/teams.apps @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/msteams/package.json)
    - [express @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/msteams/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/msteams/package.json)

- 🟡 P2 **nemoclaw** `inspector-gap` `inspector-follow-up`
  - **package-build-artifact-entrypoint**: nemoclaw: cold import requires package build output
  - state: open · compat:none
  - evidence:
    - [extension:./dist/index.js @ index.js](https://github.com/NVIDIA/NemoClaw/blob/c1bda8069d95a84a9e16b0d292a5fe20ce7cea7d/nemoclaw/dist/index.js)

- 🟡 P2 **nemoclaw** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: nemoclaw: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [execa @ package.json](https://github.com/NVIDIA/NemoClaw/blob/c1bda8069d95a84a9e16b0d292a5fe20ce7cea7d/nemoclaw/package.json)
    - [json5 @ package.json](https://github.com/NVIDIA/NemoClaw/blob/c1bda8069d95a84a9e16b0d292a5fe20ce7cea7d/nemoclaw/package.json)
    - [tar @ package.json](https://github.com/NVIDIA/NemoClaw/blob/c1bda8069d95a84a9e16b0d292a5fe20ce7cea7d/nemoclaw/package.json)
    - [yaml @ package.json](https://github.com/NVIDIA/NemoClaw/blob/c1bda8069d95a84a9e16b0d292a5fe20ce7cea7d/nemoclaw/package.json)

- 🟡 P2 **nemoclaw** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: nemoclaw: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:active
  - evidence:
    - [registerCommand @ index.ts:348](https://github.com/NVIDIA/NemoClaw/blob/c1bda8069d95a84a9e16b0d292a5fe20ce7cea7d/nemoclaw/src/index.ts#L348)

- 🟡 P2 **nextcloud-talk** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: nextcloud-talk: channel runtime needs envelope/config probes
  - state: open · compat:active
  - evidence:
    - [createChatChannelPlugin @ channel-BMKRTDSP.js:2049](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/nextcloud-talk/dist/channel-BMKRTDSP.js#L2049)

- 🟡 P2 **nextcloud-talk** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: nextcloud-talk: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/nextcloud-talk/package.json)

- 🟡 P2 **nostr** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: nostr: channel runtime needs envelope/config probes
  - state: open · compat:active
  - evidence:
    - [createChatChannelPlugin @ channel-B2Y66pl3.js:1348](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/nostr/dist/channel-B2Y66pl3.js#L1348)

- 🟡 P2 **nostr** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: nostr: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [nostr-tools @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/nostr/package.json)
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/nostr/package.json)

- 🟡 P2 **nostr** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: nostr: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:active
  - evidence:
    - [registerHttpRoute @ index.js:71](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/nostr/dist/index.js#L71)

- 🟡 P2 **openclaw-qqbot** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: openclaw-qqbot: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@tencent-connect/qqbot-connector @ package.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/qqbot/package.json)
    - [mpg123-decoder @ package.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/qqbot/package.json)
    - [p-map @ package.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/qqbot/package.json)
    - [pretty-ms @ package.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/qqbot/package.json)
    - [silk-wasm @ package.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/qqbot/package.json)
    - [ws @ package.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/qqbot/package.json)
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/qqbot/package.json)

- 🟡 P2 **openclaw-qqbot** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: openclaw-qqbot: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:active
  - evidence:
    - [registerCommand @ channel-entry-Cj1lWXpt.js:111](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/qqbot/dist/channel-entry-Cj1lWXpt.js#L111)

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

- 🟡 P2 **openclaw-weixin** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: openclaw-weixin: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:active
  - evidence:
    - registerChannel @ plugins/openclaw-weixin/.crabpot-package/dist/index.js:13
    - registerChannel @ plugins/openclaw-weixin/.crabpot-package/index.ts:17

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
  - state: open · compat:active
  - evidence:
    - [registerService @ index.ts:16](https://github.com/comet-ml/opik-openclaw/blob/fac4cc3f0fa96e96b1ee2583a0525f3681b017b5/index.ts#L16)

- 🟡 P2 **qqbot** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: qqbot: channel runtime needs envelope/config probes
  - state: open · compat:active
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
  - state: open · compat:active
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
  - state: open · compat:active
  - evidence:
    - [registerService @ index.ts:295](https://github.com/adversa-ai/secureclaw/blob/bf17e2b3deb989e348b3a98080e33a7047e90ac3/secureclaw/src/index.ts#L295)
    - [registerService @ index.ts:301](https://github.com/adversa-ai/secureclaw/blob/bf17e2b3deb989e348b3a98080e33a7047e90ac3/secureclaw/src/index.ts#L301)
    - [registerService @ index.ts:307](https://github.com/adversa-ai/secureclaw/blob/bf17e2b3deb989e348b3a98080e33a7047e90ac3/secureclaw/src/index.ts#L307)

- 🟡 P2 **synology-chat** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: synology-chat: channel runtime needs envelope/config probes
  - state: open · compat:active
  - evidence:
    - [createChatChannelPlugin @ channel-C6bhvNZi.js:1126](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/synology-chat/dist/channel-C6bhvNZi.js#L1126)

- 🟡 P2 **synology-chat** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: synology-chat: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/synology-chat/package.json)

- 🟡 P2 **telnyx-sms** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: telnyx-sms: channel runtime needs envelope/config probes
  - state: open · compat:active
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
  - state: open · compat:active
  - evidence:
    - [registerHttpRoute @ index.ts:259](https://github.com/team-telnyx/telnyx-openclaw-sms-channel/blob/6e3956246cd3e0e72af649d2fd75dee6f3e46966/index.ts#L259)

- 🟡 P2 **tlon** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: tlon: channel runtime needs envelope/config probes
  - state: open · compat:active
  - evidence:
    - [createChatChannelPlugin @ channel-DEy-ysbN.js:138](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/tlon/dist/channel-DEy-ysbN.js#L138)

- 🟡 P2 **tlon** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: tlon: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@aws-sdk/client-s3 @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/tlon/package.json)
    - [@aws-sdk/s3-request-presigner @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/tlon/package.json)
    - [@tloncorp/tlon-skill @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/tlon/package.json)
    - [@urbit/aura @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/tlon/package.json)
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/tlon/package.json)

- 🟡 P2 **twitch** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: twitch: channel runtime needs envelope/config probes
  - state: open · compat:active
  - evidence:
    - [createChatChannelPlugin @ plugin-C5o3rImF.js:1271](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/twitch/dist/plugin-C5o3rImF.js#L1271)

- 🟡 P2 **twitch** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: twitch: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@twurple/api @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/twitch/package.json)
    - [@twurple/auth @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/twitch/package.json)
    - [@twurple/chat @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/twitch/package.json)
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/twitch/package.json)

- 🟡 P2 **voice-call** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: voice-call: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [commander @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/voice-call/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/voice-call/package.json)
    - [ws @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/voice-call/package.json)
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/voice-call/package.json)

- 🟡 P2 **voice-call** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: voice-call: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:active
  - evidence:
    - [registerConfigMigration @ setup-api.js:35](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/voice-call/dist/setup-api.js#L35)
    - [registerGatewayMethod @ index.js:1065](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/voice-call/dist/index.js#L1065)
    - [registerGatewayMethod @ index.js:1092](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/voice-call/dist/index.js#L1092)
    - [registerGatewayMethod @ index.js:1105](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/voice-call/dist/index.js#L1105)
    - [registerGatewayMethod @ index.js:1117](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/voice-call/dist/index.js#L1117)
    - [registerGatewayMethod @ index.js:1134](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/voice-call/dist/index.js#L1134)
    - [registerGatewayMethod @ index.js:1165](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/voice-call/dist/index.js#L1165)
    - [registerGatewayMethod @ index.js:1183](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/voice-call/dist/index.js#L1183)
    - [registerGatewayMethod @ index.js:1200](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/voice-call/dist/index.js#L1200)
    - [registerGatewayMethod @ index.js:1224](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/voice-call/dist/index.js#L1224)
    - [registerService @ index.js:1365](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/voice-call/dist/index.js#L1365)

- 🟡 P2 **web-search-plus** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: web-search-plus: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/robbyczgw-cla/web-search-plus-plugin/blob/1b44c44e5495ad65fd37e8376c9fd752a97662c0/index.ts)

- 🟡 P2 **wecom** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: wecom: channel runtime needs envelope/config probes
  - state: open · compat:active
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
  - state: open · compat:active
  - evidence:
    - [registerChannel @ index.js:27](https://github.com/sunnoy/openclaw-plugin-wecom/blob/df2e426457a0e587bbfe63f185ffe002cbf61e6f/index.js#L27)
    - [registerHttpRoute @ index.js:56](https://github.com/sunnoy/openclaw-plugin-wecom/blob/df2e426457a0e587bbfe63f185ffe002cbf61e6f/index.js#L56)

- 🟡 P2 **whatsapp** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: whatsapp: channel runtime needs envelope/config probes
  - state: open · compat:active
  - evidence:
    - [createChatChannelPlugin @ channel-D_1cK7-w.js:677](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/whatsapp/dist/channel-D_1cK7-w.js#L677)

- 🟡 P2 **whatsapp** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: whatsapp: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [audio-decode @ package.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/whatsapp/package.json)
    - [baileys @ package.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/whatsapp/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/whatsapp/package.json)

- 🟡 P2 **yuanbao** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: yuanbao: channel runtime needs envelope/config probes
  - state: open · compat:active
  - evidence:
    - createChatChannelPlugin @ plugins/yuanbao/.crabpot-package/dist/src/channel.js:19

- 🟡 P2 **yuanbao** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: yuanbao: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - protobufjs @ plugins/yuanbao/.crabpot-package/package.json
    - semver @ plugins/yuanbao/.crabpot-package/package.json
    - ws @ plugins/yuanbao/.crabpot-package/package.json

- 🟡 P2 **yuanbao** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: yuanbao: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:active
  - evidence:
    - registerCommand @ plugins/yuanbao/.crabpot-package/dist/index.js:16
    - registerCommand @ plugins/yuanbao/.crabpot-package/dist/index.js:17
    - registerCommand @ plugins/yuanbao/.crabpot-package/dist/index.js:18

- 🟡 P2 **yuanbao** `inspector-gap` `inspector-follow-up`
  - **runtime-tool-capture**: yuanbao: runtime tool schema needs registration capture
  - state: open · compat:none
  - evidence:
    - registerTool @ plugins/yuanbao/.crabpot-package/dist/src/business/tools/group.js:84
    - registerTool @ plugins/yuanbao/.crabpot-package/dist/src/business/tools/member.js:179
    - registerTool @ plugins/yuanbao/.crabpot-package/dist/src/business/tools/remind.js:622

- 🟡 P2 **zalo** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: zalo: channel runtime needs envelope/config probes
  - state: open · compat:active
  - evidence:
    - [createChatChannelPlugin @ channel-BOWhJVyl.js:268](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/zalo/dist/channel-BOWhJVyl.js#L268)

- 🟡 P2 **zalo** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: zalo: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/zalo/package.json)

- 🟡 P2 **zalouser** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: zalouser: channel runtime needs envelope/config probes
  - state: open · compat:active
  - evidence:
    - [createChatChannelPlugin @ channel-C0ARGeer.js:586](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/zalouser/dist/channel-C0ARGeer.js#L586)

- 🟡 P2 **zalouser** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: zalouser: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/zalouser/package.json)
    - [zca-js @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/zalouser/package.json)
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/zalouser/package.json)

## Runtime-Covered Inspector Gaps

_none_

## Upstream Metadata Issues

- 🟠 P1 **codex** `upstream-metadata` `plugin-upstream-fix`
  - **reserved-sdk-import**: codex: plugin imports reserved bundled-plugin SDK compatibility subpaths
  - state: open · compat:none
  - evidence:
    - [openclaw/plugin-sdk/codex-mcp-projection @ thread-lifecycle-BgLXzjvV.js:15](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/codex/dist/thread-lifecycle-BgLXzjvV.js#L15)
  - author remediation:
    - Stop importing reserved bundled-plugin SDK compatibility paths.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#reserved-sdk-import

- 🟡 P2 **a2a-gateway** `upstream-metadata` `plugin-upstream-fix`
  - **manifest-unknown-fields**: a2a-gateway: manifest uses unsupported top-level fields
  - state: open · compat:none
  - evidence:
    - [defaultConfig @ openclaw.plugin.json](https://github.com/win4r/openclaw-a2a-gateway/blob/27621e23eb46aefe9a506e2d110f9784890c6712/openclaw.plugin.json)
  - author remediation:
    - Move unsupported top-level manifest fields into supported package metadata or remove them.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#manifest-unknown-fields

- 🟡 P2 **a2a-gateway** `upstream-metadata` `plugin-upstream-fix`
  - **package-manifest-version-drift**: a2a-gateway: package and manifest versions drift
  - state: open · compat:none
  - evidence:
    - package:1.4.0
    - manifest:1.3.0
  - author remediation:
    - Align the plugin version declared in package.json and openclaw.plugin.json.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-manifest-version-drift

- 🟡 P2 **a2a-gateway** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: a2a-gateway: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - [package.json](https://github.com/win4r/openclaw-a2a-gateway/blob/27621e23eb46aefe9a506e2d110f9784890c6712/package.json)
  - author remediation:
    - Declare the OpenClaw plugin API range this package supports.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-plugin-api-compat-missing

- 🟡 P2 **agentchat** `upstream-metadata` `plugin-upstream-fix`
  - **manifest-unknown-fields**: agentchat: manifest uses unsupported top-level fields
  - state: open · compat:none
  - evidence:
    - [displayName @ openclaw.plugin.json](https://github.com/agentchatme/agentchat/blob/1460cece00ebd3829fb39d5db5ee23050937ed02/integrations/openclaw-channel/openclaw.plugin.json)
    - [homepage @ openclaw.plugin.json](https://github.com/agentchatme/agentchat/blob/1460cece00ebd3829fb39d5db5ee23050937ed02/integrations/openclaw-channel/openclaw.plugin.json)
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

- 🟡 P2 **bluebubbles** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: bluebubbles: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.4.10
    - buildOpenClawVersion:2026.5.7
  - author remediation:
    - Set the package minimum host version to the OpenClaw version range the plugin was built and tested against.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-min-host-version-drift

- 🟡 P2 **brave-plugin** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: brave-plugin: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec
  - author remediation:
    - Complete the OpenClaw install metadata so ClawHub can identify the install target.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-install-metadata-incomplete

- 🟡 P2 **brave-plugin** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: brave-plugin: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.4.10
    - buildOpenClawVersion:2026.7.2-beta.1
  - author remediation:
    - Set the package minimum host version to the OpenClaw version range the plugin was built and tested against.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-min-host-version-drift

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

- 🟡 P2 **codex** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: codex: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec
  - author remediation:
    - Complete the OpenClaw install metadata so ClawHub can identify the install target.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-install-metadata-incomplete

- 🟡 P2 **codex** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: codex: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.5.1-beta.1
    - buildOpenClawVersion:2026.7.2-beta.1
  - author remediation:
    - Set the package minimum host version to the OpenClaw version range the plugin was built and tested against.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-min-host-version-drift

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
  - **package-plugin-api-compat-missing**: ddingtalk: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - [package.json](https://github.com/largezhou/openclaw-dingtalk/blob/161a9b0f6381ce7c869ef9461e8a1ba3ed0445fc/package.json)
  - author remediation:
    - Declare the OpenClaw plugin API range this package supports.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-plugin-api-compat-missing

- 🟡 P2 **diagnostics-otel** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: diagnostics-otel: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.4.25
    - buildOpenClawVersion:2026.7.1
  - author remediation:
    - Set the package minimum host version to the OpenClaw version range the plugin was built and tested against.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-min-host-version-drift

- 🟡 P2 **diagnostics-prometheus** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: diagnostics-prometheus: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.4.25
    - buildOpenClawVersion:2026.7.2-beta.1
  - author remediation:
    - Set the package minimum host version to the OpenClaw version range the plugin was built and tested against.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-min-host-version-drift

- 🟡 P2 **diffs** `upstream-metadata` `plugin-upstream-fix`
  - **manifest-unknown-fields**: diffs: manifest uses unsupported top-level fields
  - state: open · compat:none
  - evidence:
    - [catalog @ openclaw.plugin.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/diffs/openclaw.plugin.json)
  - author remediation:
    - Move unsupported top-level manifest fields into supported package metadata or remove them.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#manifest-unknown-fields

- 🟡 P2 **diffs** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: diffs: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec
  - author remediation:
    - Complete the OpenClaw install metadata so ClawHub can identify the install target.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-install-metadata-incomplete

- 🟡 P2 **diffs** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: diffs: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.4.30
    - buildOpenClawVersion:2026.7.2-beta.1
  - author remediation:
    - Set the package minimum host version to the OpenClaw version range the plugin was built and tested against.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-min-host-version-drift

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

- 🟡 P2 **discord** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: discord: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec
  - author remediation:
    - Complete the OpenClaw install metadata so ClawHub can identify the install target.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-install-metadata-incomplete

- 🟡 P2 **discord** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: discord: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.5.26
    - buildOpenClawVersion:2026.7.1
  - author remediation:
    - Set the package minimum host version to the OpenClaw version range the plugin was built and tested against.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-min-host-version-drift

- 🟡 P2 **feishu** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: feishu: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec
  - author remediation:
    - Complete the OpenClaw install metadata so ClawHub can identify the install target.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-install-metadata-incomplete

- 🟡 P2 **feishu** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: feishu: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.5.29
    - buildOpenClawVersion:2026.7.1
  - author remediation:
    - Set the package minimum host version to the OpenClaw version range the plugin was built and tested against.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-min-host-version-drift

- 🟡 P2 **google-meet** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: google-meet: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec
  - author remediation:
    - Complete the OpenClaw install metadata so ClawHub can identify the install target.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-install-metadata-incomplete

- 🟡 P2 **google-meet** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: google-meet: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.4.20
    - buildOpenClawVersion:2026.7.2-beta.1
  - author remediation:
    - Set the package minimum host version to the OpenClaw version range the plugin was built and tested against.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-min-host-version-drift

- 🟡 P2 **hyperspell** `upstream-metadata` `plugin-upstream-fix`
  - **package-manifest-version-drift**: hyperspell: package and manifest versions drift
  - state: open · compat:none
  - evidence:
    - package:0.18.1
    - manifest:0.13.0
  - author remediation:
    - Align the plugin version declared in package.json and openclaw.plugin.json.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-manifest-version-drift

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

- 🟡 P2 **lobster** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: lobster: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec
  - author remediation:
    - Complete the OpenClaw install metadata so ClawHub can identify the install target.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-install-metadata-incomplete

- 🟡 P2 **lobster** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: lobster: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.4.25
    - buildOpenClawVersion:2026.7.1
  - author remediation:
    - Set the package minimum host version to the OpenClaw version range the plugin was built and tested against.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-min-host-version-drift

- 🟡 P2 **matrix** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: matrix: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.4.10
    - buildOpenClawVersion:2026.7.1
  - author remediation:
    - Set the package minimum host version to the OpenClaw version range the plugin was built and tested against.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-min-host-version-drift

- 🟡 P2 **mattermost** `upstream-metadata` `plugin-upstream-fix`
  - **manifest-name-missing**: mattermost: manifest display name is missing
  - state: open · compat:none
  - evidence:
    - [openclaw.plugin.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/mattermost/openclaw.plugin.json)
  - author remediation:
    - Add a display name to the plugin manifest.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#manifest-name-missing

- 🟡 P2 **mattermost** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: mattermost: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.6.9
    - buildOpenClawVersion:2026.7.1
  - author remediation:
    - Set the package minimum host version to the OpenClaw version range the plugin was built and tested against.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-min-host-version-drift

- 🟡 P2 **mcp-adapter** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: mcp-adapter: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - [package.json](https://github.com/androidStern-personal/openclaw-mcp-adapter/blob/5434ce21ac780a46a493c8125e52e80a03dd2640/package.json)
  - author remediation:
    - Declare the OpenClaw plugin API range this package supports.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-plugin-api-compat-missing

- 🟡 P2 **memory-lancedb** `upstream-metadata` `plugin-upstream-fix`
  - **manifest-unknown-fields**: memory-lancedb: manifest uses unsupported top-level fields
  - state: open · compat:none
  - evidence:
    - [catalog @ openclaw.plugin.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/memory-lancedb/openclaw.plugin.json)
  - author remediation:
    - Move unsupported top-level manifest fields into supported package metadata or remove them.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#manifest-unknown-fields

- 🟡 P2 **memory-lancedb** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: memory-lancedb: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec
  - author remediation:
    - Complete the OpenClaw install metadata so ClawHub can identify the install target.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-install-metadata-incomplete

- 🟡 P2 **memory-lancedb** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: memory-lancedb: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.5.31
    - buildOpenClawVersion:2026.7.2-beta.1
  - author remediation:
    - Set the package minimum host version to the OpenClaw version range the plugin was built and tested against.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-min-host-version-drift

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
    - [main @ openclaw.plugin.json](https://github.com/MemTensor/MemOS-Cloud-OpenClaw-Plugin/blob/18cb8c7f9317d1348629d9f4cbd9507978de0b81/openclaw.plugin.json)
  - author remediation:
    - Move unsupported top-level manifest fields into supported package metadata or remove them.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#manifest-unknown-fields

- 🟡 P2 **memos-cloud** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: memos-cloud: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - [package.json](https://github.com/MemTensor/MemOS-Cloud-OpenClaw-Plugin/blob/18cb8c7f9317d1348629d9f4cbd9507978de0b81/package.json)
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

- 🟡 P2 **msteams** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: msteams: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec
  - author remediation:
    - Complete the OpenClaw install metadata so ClawHub can identify the install target.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-install-metadata-incomplete

- 🟡 P2 **msteams** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: msteams: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.4.10
    - buildOpenClawVersion:2026.7.1
  - author remediation:
    - Set the package minimum host version to the OpenClaw version range the plugin was built and tested against.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-min-host-version-drift

- 🟡 P2 **nextcloud-talk** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: nextcloud-talk: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec
  - author remediation:
    - Complete the OpenClaw install metadata so ClawHub can identify the install target.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-install-metadata-incomplete

- 🟡 P2 **nextcloud-talk** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: nextcloud-talk: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.4.10
    - buildOpenClawVersion:2026.7.1
  - author remediation:
    - Set the package minimum host version to the OpenClaw version range the plugin was built and tested against.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-min-host-version-drift

- 🟡 P2 **nostr** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: nostr: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec
  - author remediation:
    - Complete the OpenClaw install metadata so ClawHub can identify the install target.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-install-metadata-incomplete

- 🟡 P2 **nostr** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: nostr: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.4.10
    - buildOpenClawVersion:2026.7.1
  - author remediation:
    - Set the package minimum host version to the OpenClaw version range the plugin was built and tested against.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-min-host-version-drift

- 🟡 P2 **openclaw-qqbot** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: openclaw-qqbot: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec
  - author remediation:
    - Complete the OpenClaw install metadata so ClawHub can identify the install target.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-install-metadata-incomplete

- 🟡 P2 **openclaw-qqbot** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: openclaw-qqbot: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.4.10
    - buildOpenClawVersion:2026.7.2-beta.1
  - author remediation:
    - Set the package minimum host version to the OpenClaw version range the plugin was built and tested against.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-min-host-version-drift

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

- 🟡 P2 **synology-chat** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: synology-chat: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec
  - author remediation:
    - Complete the OpenClaw install metadata so ClawHub can identify the install target.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-install-metadata-incomplete

- 🟡 P2 **synology-chat** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: synology-chat: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.4.10
    - buildOpenClawVersion:2026.7.1
  - author remediation:
    - Set the package minimum host version to the OpenClaw version range the plugin was built and tested against.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-min-host-version-drift

- 🟡 P2 **tlon** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: tlon: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec
  - author remediation:
    - Complete the OpenClaw install metadata so ClawHub can identify the install target.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-install-metadata-incomplete

- 🟡 P2 **tlon** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: tlon: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.4.10
    - buildOpenClawVersion:2026.7.1
  - author remediation:
    - Set the package minimum host version to the OpenClaw version range the plugin was built and tested against.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-min-host-version-drift

- 🟡 P2 **twitch** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: twitch: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec
  - author remediation:
    - Complete the OpenClaw install metadata so ClawHub can identify the install target.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-install-metadata-incomplete

- 🟡 P2 **twitch** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: twitch: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.4.10
    - buildOpenClawVersion:2026.7.1
  - author remediation:
    - Set the package minimum host version to the OpenClaw version range the plugin was built and tested against.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-min-host-version-drift

- 🟡 P2 **voice-call** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: voice-call: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec
  - author remediation:
    - Complete the OpenClaw install metadata so ClawHub can identify the install target.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-install-metadata-incomplete

- 🟡 P2 **voice-call** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: voice-call: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.4.10
    - buildOpenClawVersion:2026.7.1
  - author remediation:
    - Set the package minimum host version to the OpenClaw version range the plugin was built and tested against.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-min-host-version-drift

- 🟡 P2 **wecom** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: wecom: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - [package.json](https://github.com/sunnoy/openclaw-plugin-wecom/blob/df2e426457a0e587bbfe63f185ffe002cbf61e6f/package.json)
  - author remediation:
    - Declare the OpenClaw plugin API range this package supports.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-plugin-api-compat-missing

- 🟡 P2 **whatsapp** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: whatsapp: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.4.25
    - buildOpenClawVersion:2026.7.2-beta.1
  - author remediation:
    - Set the package minimum host version to the OpenClaw version range the plugin was built and tested against.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-min-host-version-drift

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

- 🟡 P2 **zalo** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: zalo: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec
  - author remediation:
    - Complete the OpenClaw install metadata so ClawHub can identify the install target.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-install-metadata-incomplete

- 🟡 P2 **zalo** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: zalo: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.4.10
    - buildOpenClawVersion:2026.7.1
  - author remediation:
    - Set the package minimum host version to the OpenClaw version range the plugin was built and tested against.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-min-host-version-drift

- 🟡 P2 **zalouser** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: zalouser: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec
  - author remediation:
    - Complete the OpenClaw install metadata so ClawHub can identify the install target.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-install-metadata-incomplete

- 🟡 P2 **zalouser** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: zalouser: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.4.10
    - buildOpenClawVersion:2026.7.1
  - author remediation:
    - Set the package minimum host version to the OpenClaw version range the plugin was built and tested against.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-min-host-version-drift

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

- 🔴 P0 **codex** `live-issue` `core-compat-adapter`
  - **unknown-registration-name**: codex: fixture calls a registrar missing from target OpenClaw
  - state: blocking · compat:none · live
  - evidence:
    - [registerSessionCatalog @ session-catalog-7H112Tr_.js:2385](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/codex/dist/session-catalog-7H112Tr_.js#L2385)

- 🔴 P0 **kitchen-sink** `live-issue` `core-compat-adapter`
  - **unknown-registration-name**: kitchen-sink: fixture calls a registrar missing from target OpenClaw
  - state: blocking · compat:none · live
  - evidence:
    - [registerMeetingNotesSourceProvider @ sync-surface.mjs:165](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/scripts/sync-surface.mjs#L165)

- 🟠 P1 **clawmetry** `inspector-gap` `inspector-follow-up`
  - **conversation-access-hook**: clawmetry: conversation-access hooks need privacy-boundary probes
  - state: open · compat:active
  - evidence:
    - [llm_output @ service.ts:117](https://github.com/vivekchand/clawmetry/blob/a8a39b68941f6ea8dea1562e34fefd721ad805d2/clawhub-plugin/src/service.ts#L117)

- 🟠 P1 **codex** `upstream-metadata` `plugin-upstream-fix`
  - **reserved-sdk-import**: codex: plugin imports reserved bundled-plugin SDK compatibility subpaths
  - state: open · compat:none
  - evidence:
    - [openclaw/plugin-sdk/codex-mcp-projection @ thread-lifecycle-BgLXzjvV.js:15](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/codex/dist/thread-lifecycle-BgLXzjvV.js#L15)
  - author remediation:
    - Stop importing reserved bundled-plugin SDK compatibility paths.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#reserved-sdk-import

- 🟠 P1 **codex** `compat-gap` `core-compat-adapter`
  - **sdk-export-missing**: codex: plugin SDK import aliases are missing from target package exports
  - state: open · compat:untracked
  - evidence:
    - [openclaw/plugin-sdk/expect-runtime @ command-handlers-Cpl9fUWv.js:23](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/codex/dist/command-handlers-Cpl9fUWv.js#L23)
    - [openclaw/plugin-sdk/expect-runtime @ dynamic-tools-BMLoaTeG.js:20](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/codex/dist/dynamic-tools-BMLoaTeG.js#L20)
    - [openclaw/plugin-sdk/expect-runtime @ index.js:37](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/codex/dist/index.js#L37)
    - [openclaw/plugin-sdk/expect-runtime @ provider.js:6](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/codex/dist/provider.js#L6)
    - [openclaw/plugin-sdk/expect-runtime @ rate-limits-Dhp04Rqo.js:4](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/codex/dist/rate-limits-Dhp04Rqo.js#L4)
    - [openclaw/plugin-sdk/expect-runtime @ session-catalog-7H112Tr_.js:25](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/codex/dist/session-catalog-7H112Tr_.js#L25)
    - [openclaw/plugin-sdk/expect-runtime @ shared-client-D4mFI9al.js:25](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/codex/dist/shared-client-D4mFI9al.js#L25)
    - [openclaw/plugin-sdk/node-host @ session-catalog-7H112Tr_.js:27](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/codex/dist/session-catalog-7H112Tr_.js#L27)

- 🟠 P1 **dingtalk-doc** `inspector-gap` `inspector-follow-up`
  - **before-tool-call-probe**: dingtalk-doc: before_tool_call needs terminal/block/approval probes
  - state: open · compat:active
  - evidence:
    - [before_tool_call @ index.ts:41](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/index.ts#L41)

- 🟠 P1 **honcho** `inspector-gap` `inspector-follow-up`
  - **conversation-access-hook**: honcho: conversation-access hooks need privacy-boundary probes
  - state: open · compat:active
  - evidence:
    - [agent_end @ capture.ts:164](https://github.com/plastic-labs/openclaw-honcho/blob/f35f9d474b977f2c43e6dbace1eb9323123347bc/hooks/capture.ts#L164)
    - [agent_end @ subagent.ts:34](https://github.com/plastic-labs/openclaw-honcho/blob/f35f9d474b977f2c43e6dbace1eb9323123347bc/hooks/subagent.ts#L34)

- 🟠 P1 **kitchen-sink** `inspector-gap` `inspector-follow-up`
  - **before-tool-call-probe**: kitchen-sink: before_tool_call needs terminal/block/approval probes
  - state: open · compat:active
  - evidence:
    - [before_tool_call @ generated-hooks.js:19](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-hooks.js#L19)

- 🟠 P1 **kitchen-sink** `inspector-gap` `inspector-follow-up`
  - **conversation-access-hook**: kitchen-sink: conversation-access hooks need privacy-boundary probes
  - state: open · compat:active
  - evidence:
    - [agent_end @ generated-hooks.js:7](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-hooks.js#L7)
    - [llm_input @ generated-hooks.js:26](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-hooks.js#L26)
    - [llm_output @ generated-hooks.js:27](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-hooks.js#L27)

- 🟠 P1 **llm-trace-phoenix** `inspector-gap` `inspector-follow-up`
  - **conversation-access-hook**: llm-trace-phoenix: conversation-access hooks need privacy-boundary probes
  - state: open · compat:active
  - evidence:
    - [llm_input @ index.js:105](https://github.com/pingshian0131/openclaw-plugin-llm-trace-phoenix/blob/ad8a34681b4d49a1b7d75bb8f6ac9b2f2ea3a8e9/dist/index.js#L105)
    - [llm_input @ index.ts:202](https://github.com/pingshian0131/openclaw-plugin-llm-trace-phoenix/blob/ad8a34681b4d49a1b7d75bb8f6ac9b2f2ea3a8e9/index.ts#L202)
    - [llm_output @ index.js:118](https://github.com/pingshian0131/openclaw-plugin-llm-trace-phoenix/blob/ad8a34681b4d49a1b7d75bb8f6ac9b2f2ea3a8e9/dist/index.js#L118)
    - [llm_output @ index.ts:216](https://github.com/pingshian0131/openclaw-plugin-llm-trace-phoenix/blob/ad8a34681b4d49a1b7d75bb8f6ac9b2f2ea3a8e9/index.ts#L216)

- 🟠 P1 **memory-lancedb** `inspector-gap` `inspector-follow-up`
  - **conversation-access-hook**: memory-lancedb: conversation-access hooks need privacy-boundary probes
  - state: open · compat:active
  - evidence:
    - [agent_end @ index.js:1214](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/memory-lancedb/dist/index.js#L1214)

- 🟠 P1 **memory-lancedb** `compat-gap` `core-compat-adapter`
  - **sdk-export-missing**: memory-lancedb: plugin SDK import aliases are missing from target package exports
  - state: open · compat:untracked
  - evidence:
    - [openclaw/plugin-sdk/expect-runtime @ index.js:8](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/memory-lancedb/dist/index.js#L8)

- 🟠 P1 **memory-tencentdb** `inspector-gap` `inspector-follow-up`
  - **conversation-access-hook**: memory-tencentdb: conversation-access hooks need privacy-boundary probes
  - state: open · compat:active
  - evidence:
    - agent_end @ plugins/memory-tencentdb/.crabpot-package/dist/index.mjs:1095
    - agent_end @ plugins/memory-tencentdb/.crabpot-package/dist/index.mjs:1256
    - agent_end @ plugins/memory-tencentdb/.crabpot-package/dist/index.mjs:21802
    - agent_end @ plugins/memory-tencentdb/.crabpot-package/index.ts:808
    - agent_end @ plugins/memory-tencentdb/.crabpot-package/openclaw-plugin/index.ts:209
    - agent_end @ plugins/memory-tencentdb/.crabpot-package/src/offload-client/index.ts:52

- 🟠 P1 **memos-cloud** `inspector-gap` `inspector-follow-up`
  - **conversation-access-hook**: memos-cloud: conversation-access hooks need privacy-boundary probes
  - state: open · compat:active
  - evidence:
    - [agent_end @ index.js:805](https://github.com/MemTensor/MemOS-Cloud-OpenClaw-Plugin/blob/18cb8c7f9317d1348629d9f4cbd9507978de0b81/index.js#L805)

- 🟠 P1 **nemoclaw** `inspector-gap` `inspector-follow-up`
  - **before-tool-call-probe**: nemoclaw: before_tool_call needs terminal/block/approval probes
  - state: open · compat:active
  - evidence:
    - [before_tool_call @ index.ts:385](https://github.com/NVIDIA/NemoClaw/blob/c1bda8069d95a84a9e16b0d292a5fe20ce7cea7d/nemoclaw/src/index.ts#L385)

- 🟠 P1 **openclaw-qqbot** `compat-gap` `core-compat-adapter`
  - **sdk-export-missing**: openclaw-qqbot: plugin SDK import aliases are missing from target package exports
  - state: open · compat:untracked
  - evidence:
    - [openclaw/plugin-sdk/expect-runtime @ config-schema-B5Mle_87.js:8](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/qqbot/dist/config-schema-B5Mle_87.js#L8)
    - [openclaw/plugin-sdk/expect-runtime @ gateway-be5-Ckdc.js:27](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/qqbot/dist/gateway-be5-Ckdc.js#L27)

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
    - [before_tool_call @ tool.ts:34](https://github.com/comet-ml/opik-openclaw/blob/fac4cc3f0fa96e96b1ee2583a0525f3681b017b5/src/service/hooks/tool.ts#L34)

- 🟠 P1 **opik-openclaw** `inspector-gap` `inspector-follow-up`
  - **conversation-access-hook**: opik-openclaw: conversation-access hooks need privacy-boundary probes
  - state: open · compat:active
  - evidence:
    - [agent_end @ service.ts:581](https://github.com/comet-ml/opik-openclaw/blob/fac4cc3f0fa96e96b1ee2583a0525f3681b017b5/src/service.ts#L581)
    - [llm_input @ llm.ts:39](https://github.com/comet-ml/opik-openclaw/blob/fac4cc3f0fa96e96b1ee2583a0525f3681b017b5/src/service/hooks/llm.ts#L39)
    - [llm_output @ llm.ts:150](https://github.com/comet-ml/opik-openclaw/blob/fac4cc3f0fa96e96b1ee2583a0525f3681b017b5/src/service/hooks/llm.ts#L150)

- 🟠 P1 **wecom** `inspector-gap` `inspector-follow-up`
  - **before-tool-call-probe**: wecom: before_tool_call needs terminal/block/approval probes
  - state: open · compat:active
  - evidence:
    - [before_tool_call @ index.js:76](https://github.com/sunnoy/openclaw-plugin-wecom/blob/df2e426457a0e587bbfe63f185ffe002cbf61e6f/index.js#L76)

- 🟡 P2 **a2a-gateway** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: a2a-gateway: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [openclaw/plugin-sdk @ types.ts:14](https://github.com/win4r/openclaw-a2a-gateway/blob/27621e23eb46aefe9a506e2d110f9784890c6712/src/types.ts#L14)
  - author remediation:
    - Prefer focused public plugin SDK subpath imports instead of the legacy root barrel.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#legacy-root-sdk-import

- 🟡 P2 **a2a-gateway** `upstream-metadata` `plugin-upstream-fix`
  - **manifest-unknown-fields**: a2a-gateway: manifest uses unsupported top-level fields
  - state: open · compat:none
  - evidence:
    - [defaultConfig @ openclaw.plugin.json](https://github.com/win4r/openclaw-a2a-gateway/blob/27621e23eb46aefe9a506e2d110f9784890c6712/openclaw.plugin.json)
  - author remediation:
    - Move unsupported top-level manifest fields into supported package metadata or remove them.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#manifest-unknown-fields

- 🟡 P2 **a2a-gateway** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: a2a-gateway: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@a2a-js/sdk @ package.json](https://github.com/win4r/openclaw-a2a-gateway/blob/27621e23eb46aefe9a506e2d110f9784890c6712/package.json)
    - [@bufbuild/protobuf @ package.json](https://github.com/win4r/openclaw-a2a-gateway/blob/27621e23eb46aefe9a506e2d110f9784890c6712/package.json)
    - [@grpc/grpc-js @ package.json](https://github.com/win4r/openclaw-a2a-gateway/blob/27621e23eb46aefe9a506e2d110f9784890c6712/package.json)
    - [express @ package.json](https://github.com/win4r/openclaw-a2a-gateway/blob/27621e23eb46aefe9a506e2d110f9784890c6712/package.json)
    - [multicast-dns @ package.json](https://github.com/win4r/openclaw-a2a-gateway/blob/27621e23eb46aefe9a506e2d110f9784890c6712/package.json)
    - [uuid @ package.json](https://github.com/win4r/openclaw-a2a-gateway/blob/27621e23eb46aefe9a506e2d110f9784890c6712/package.json)
    - [ws @ package.json](https://github.com/win4r/openclaw-a2a-gateway/blob/27621e23eb46aefe9a506e2d110f9784890c6712/package.json)

- 🟡 P2 **a2a-gateway** `upstream-metadata` `plugin-upstream-fix`
  - **package-manifest-version-drift**: a2a-gateway: package and manifest versions drift
  - state: open · compat:none
  - evidence:
    - package:1.4.0
    - manifest:1.3.0
  - author remediation:
    - Align the plugin version declared in package.json and openclaw.plugin.json.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-manifest-version-drift

- 🟡 P2 **a2a-gateway** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: a2a-gateway: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - [package.json](https://github.com/win4r/openclaw-a2a-gateway/blob/27621e23eb46aefe9a506e2d110f9784890c6712/package.json)
  - author remediation:
    - Declare the OpenClaw plugin API range this package supports.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-plugin-api-compat-missing

- 🟡 P2 **a2a-gateway** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: a2a-gateway: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/win4r/openclaw-a2a-gateway/blob/27621e23eb46aefe9a506e2d110f9784890c6712/index.ts)

- 🟡 P2 **a2a-gateway** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: a2a-gateway: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:active
  - evidence:
    - [registerService @ index.ts:897](https://github.com/win4r/openclaw-a2a-gateway/blob/27621e23eb46aefe9a506e2d110f9784890c6712/index.ts#L897)

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
  - author remediation:
    - Move legacy channel environment variable metadata into the current setup/config metadata while keeping the old field until your supported OpenClaw range no longer needs it.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#channel-env-vars

- 🟡 P2 **agentchat** `upstream-metadata` `plugin-upstream-fix`
  - **manifest-unknown-fields**: agentchat: manifest uses unsupported top-level fields
  - state: open · compat:none
  - evidence:
    - [displayName @ openclaw.plugin.json](https://github.com/agentchatme/agentchat/blob/1460cece00ebd3829fb39d5db5ee23050937ed02/integrations/openclaw-channel/openclaw.plugin.json)
    - [homepage @ openclaw.plugin.json](https://github.com/agentchatme/agentchat/blob/1460cece00ebd3829fb39d5db5ee23050937ed02/integrations/openclaw-channel/openclaw.plugin.json)
  - author remediation:
    - Move unsupported top-level manifest fields into supported package metadata or remove them.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#manifest-unknown-fields

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
    - [extension:./dist/index.js @ index.js](https://github.com/apify/apify-openclaw-plugin/blob/f089a0632461f921ddbd15d783a791be9fc808ab/dist/index.js)

- 🟡 P2 **apify** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: apify: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [apify-client @ package.json](https://github.com/apify/apify-openclaw-plugin/blob/f089a0632461f921ddbd15d783a791be9fc808ab/package.json)
    - [typebox @ package.json](https://github.com/apify/apify-openclaw-plugin/blob/f089a0632461f921ddbd15d783a791be9fc808ab/package.json)

- 🟡 P2 **bluebubbles** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: bluebubbles: channel runtime needs envelope/config probes
  - state: open · compat:active
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

- 🟡 P2 **bluebubbles** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: bluebubbles: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.4.10
    - buildOpenClawVersion:2026.5.7
  - author remediation:
    - Set the package minimum host version to the OpenClaw version range the plugin was built and tested against.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-min-host-version-drift

- 🟡 P2 **brave-plugin** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: brave-plugin: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec
  - author remediation:
    - Complete the OpenClaw install metadata so ClawHub can identify the install target.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-install-metadata-incomplete

- 🟡 P2 **brave-plugin** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: brave-plugin: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.4.10
    - buildOpenClawVersion:2026.7.2-beta.1
  - author remediation:
    - Set the package minimum host version to the OpenClaw version range the plugin was built and tested against.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-min-host-version-drift

- 🟡 P2 **clawmetry** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: clawmetry: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [openclaw/plugin-sdk @ index.ts:1](https://github.com/vivekchand/clawmetry/blob/a8a39b68941f6ea8dea1562e34fefd721ad805d2/clawhub-plugin/index.ts#L1)
    - [openclaw/plugin-sdk @ service.ts:1](https://github.com/vivekchand/clawmetry/blob/a8a39b68941f6ea8dea1562e34fefd721ad805d2/clawhub-plugin/src/service.ts#L1)
  - author remediation:
    - Prefer focused public plugin SDK subpath imports instead of the legacy root barrel.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#legacy-root-sdk-import

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
    - [extension @ index.ts](https://github.com/vivekchand/clawmetry/blob/a8a39b68941f6ea8dea1562e34fefd721ad805d2/clawhub-plugin/index.ts)

- 🟡 P2 **clawmetry** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: clawmetry: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:active
  - evidence:
    - [registerService @ index.ts:20](https://github.com/vivekchand/clawmetry/blob/a8a39b68941f6ea8dea1562e34fefd721ad805d2/clawhub-plugin/index.ts#L20)

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
  - state: open · compat:active
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
    - [registerService @ cli.js:89557](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/dist/cli.js#L89557)
    - [registerService @ index.js:87593](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/dist/index.js#L87593)
    - [registerService @ index.ts:2050](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/src/index.ts#L2050)

- 🟡 P2 **codex** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: codex: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@openai/codex @ package.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/codex/package.json)
    - [semver @ package.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/codex/package.json)
    - [smol-toml @ package.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/codex/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/codex/package.json)
    - [ws @ package.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/codex/package.json)
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/codex/package.json)

- 🟡 P2 **codex** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: codex: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec
  - author remediation:
    - Complete the OpenClaw install metadata so ClawHub can identify the install target.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-install-metadata-incomplete

- 🟡 P2 **codex** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: codex: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.5.1-beta.1
    - buildOpenClawVersion:2026.7.2-beta.1
  - author remediation:
    - Set the package minimum host version to the OpenClaw version range the plugin was built and tested against.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-min-host-version-drift

- 🟡 P2 **codex** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: codex: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:active
  - evidence:
    - [registerCommand @ index.js:3831](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/codex/dist/index.js#L3831)
    - [registerNodeHostCommand @ index.js:3795](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/codex/dist/index.js#L3795)
    - [registerNodeHostCommand @ index.js:3829](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/codex/dist/index.js#L3829)
    - [registerNodeInvokePolicy @ index.js:3797](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/codex/dist/index.js#L3797)
    - [registerNodeInvokePolicy @ index.js:3830](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/codex/dist/index.js#L3830)
    - [registerSessionCatalog @ session-catalog-7H112Tr_.js:2385](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/codex/dist/session-catalog-7H112Tr_.js#L2385)

- 🟡 P2 **codex-app-server** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: codex-app-server: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [openclaw/plugin-sdk @ index.ts:1](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/index.ts#L1)
    - [openclaw/plugin-sdk @ client.ts:6](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/src/client.ts#L6)
    - [openclaw/plugin-sdk @ controller.ts:18](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/src/controller.ts#L18)
    - [openclaw/plugin-sdk @ types.ts:1](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/src/types.ts#L1)
  - author remediation:
    - Prefer focused public plugin SDK subpath imports instead of the legacy root barrel.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#legacy-root-sdk-import

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
  - state: open · compat:active
  - evidence:
    - [registerCommand @ index.ts:48](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/index.ts#L48)
    - [registerInteractiveHandler @ index.ts:29](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/index.ts#L29)
    - [registerInteractiveHandler @ index.ts:38](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/index.ts#L38)
    - [registerService @ index.ts:12](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/index.ts#L12)

- 🟡 P2 **composio** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: composio: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [openclaw/plugin-sdk @ index.ts:1](https://github.com/ComposioHQ/openclaw-composio-plugin/blob/47025c33224d343d9fbbf67e0a24e56eeaa18fff/index.ts#L1)
  - author remediation:
    - Prefer focused public plugin SDK subpath imports instead of the legacy root barrel.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#legacy-root-sdk-import

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
    - [openclaw/plugin-sdk @ index.ts:1](https://github.com/osipov-anton/connectclaw/blob/7a4e2646e914de075435b3837123cc03c3edae36/packages/plugin/index.ts#L1)
    - [openclaw/plugin-sdk @ commands.ts:1](https://github.com/osipov-anton/connectclaw/blob/7a4e2646e914de075435b3837123cc03c3edae36/packages/plugin/src/commands.ts#L1)
    - [openclaw/plugin-sdk @ hooks.ts:1](https://github.com/osipov-anton/connectclaw/blob/7a4e2646e914de075435b3837123cc03c3edae36/packages/plugin/src/hooks.ts#L1)
    - [openclaw/plugin-sdk @ tools.ts:1](https://github.com/osipov-anton/connectclaw/blob/7a4e2646e914de075435b3837123cc03c3edae36/packages/plugin/src/tools.ts#L1)
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
    - [@opentelemetry/api @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/diagnostics-otel/package.json)
    - [@opentelemetry/api-logs @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/diagnostics-otel/package.json)
    - [@opentelemetry/exporter-logs-otlp-proto @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/diagnostics-otel/package.json)
    - [@opentelemetry/exporter-metrics-otlp-proto @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/diagnostics-otel/package.json)
    - [@opentelemetry/exporter-trace-otlp-proto @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/diagnostics-otel/package.json)
    - [@opentelemetry/resources @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/diagnostics-otel/package.json)
    - [@opentelemetry/sdk-logs @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/diagnostics-otel/package.json)
    - [@opentelemetry/sdk-metrics @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/diagnostics-otel/package.json)
    - [@opentelemetry/sdk-node @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/diagnostics-otel/package.json)
    - [@opentelemetry/sdk-trace-base @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/diagnostics-otel/package.json)
    - [@opentelemetry/semantic-conventions @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/diagnostics-otel/package.json)

- 🟡 P2 **diagnostics-otel** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: diagnostics-otel: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.4.25
    - buildOpenClawVersion:2026.7.1
  - author remediation:
    - Set the package minimum host version to the OpenClaw version range the plugin was built and tested against.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-min-host-version-drift

- 🟡 P2 **diagnostics-otel** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: diagnostics-otel: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:active
  - evidence:
    - [registerService @ index.js:9](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/diagnostics-otel/dist/index.js#L9)

- 🟡 P2 **diagnostics-prometheus** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: diagnostics-prometheus: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.4.25
    - buildOpenClawVersion:2026.7.2-beta.1
  - author remediation:
    - Set the package minimum host version to the OpenClaw version range the plugin was built and tested against.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-min-host-version-drift

- 🟡 P2 **diagnostics-prometheus** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: diagnostics-prometheus: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:active
  - evidence:
    - [registerHttpRoute @ index.js:633](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/diagnostics-prometheus/dist/index.js#L633)
    - [registerService @ index.js:632](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/diagnostics-prometheus/dist/index.js#L632)

- 🟡 P2 **diffs** `upstream-metadata` `plugin-upstream-fix`
  - **manifest-unknown-fields**: diffs: manifest uses unsupported top-level fields
  - state: open · compat:none
  - evidence:
    - [catalog @ openclaw.plugin.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/diffs/openclaw.plugin.json)
  - author remediation:
    - Move unsupported top-level manifest fields into supported package metadata or remove them.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#manifest-unknown-fields

- 🟡 P2 **diffs** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: diffs: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@pierre/diffs @ package.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/diffs/package.json)
    - [@shikijs/langs @ package.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/diffs/package.json)
    - [playwright-core @ package.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/diffs/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/diffs/package.json)
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/diffs/package.json)

- 🟡 P2 **diffs** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: diffs: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec
  - author remediation:
    - Complete the OpenClaw install metadata so ClawHub can identify the install target.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-install-metadata-incomplete

- 🟡 P2 **diffs** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: diffs: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.4.30
    - buildOpenClawVersion:2026.7.2-beta.1
  - author remediation:
    - Set the package minimum host version to the OpenClaw version range the plugin was built and tested against.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-min-host-version-drift

- 🟡 P2 **diffs** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: diffs: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:active
  - evidence:
    - [registerHttpRoute @ index.js:2512](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/diffs/dist/index.js#L2512)

- 🟡 P2 **dingtalk-connector** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: dingtalk-connector: channel runtime needs envelope/config probes
  - state: open · compat:active
  - evidence:
    - [registerChannel @ index.ts:76](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/index.ts#L76)

- 🟡 P2 **dingtalk-connector** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: dingtalk-connector: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [openclaw/plugin-sdk @ index.ts:17](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/index.ts#L17)
    - [openclaw/plugin-sdk @ channel.ts:5](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/channel.ts#L5)
    - [openclaw/plugin-sdk @ accounts.ts:2](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/config/accounts.ts#L2)
    - [openclaw/plugin-sdk @ connection.ts:16](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/core/connection.ts#L16)
    - [openclaw/plugin-sdk @ provider.ts:14](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/core/provider.ts#L14)
    - [openclaw/plugin-sdk @ directory.ts:1](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/directory.ts#L1)
    - [openclaw/plugin-sdk @ gateway-methods.ts:7](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/gateway-methods.ts#L7)
    - [openclaw/plugin-sdk @ onboarding.ts:5](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/onboarding.ts#L5)
    - [openclaw/plugin-sdk @ runtime.ts:1](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/runtime.ts#L1)
    - [openclaw/plugin-sdk @ card-bridge.ts:1](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/services/card-bridge.ts#L1)
    - [openclaw/plugin-sdk @ agent.ts:8](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/utils/agent.ts#L8)
  - author remediation:
    - Prefer focused public plugin SDK subpath imports instead of the legacy root barrel.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#legacy-root-sdk-import

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
  - state: open · compat:active
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
    - [openclaw/plugin-sdk @ index.ts:10](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/index.ts#L10)
    - [openclaw/plugin-sdk @ index.ts:11](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/index.ts#L11)
    - [openclaw/plugin-sdk @ delete-document-block.ts:6](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/src/tools/block/delete-document-block.ts#L6)
    - [openclaw/plugin-sdk @ index.ts:5](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/src/tools/block/index.ts#L5)
    - [openclaw/plugin-sdk @ insert-document-block.ts:6](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/src/tools/block/insert-document-block.ts#L6)
    - [openclaw/plugin-sdk @ list-document-blocks.ts:6](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/src/tools/block/list-document-blocks.ts#L6)
    - [openclaw/plugin-sdk @ update-document-block.ts:6](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/src/tools/block/update-document-block.ts#L6)
    - [openclaw/plugin-sdk @ create-document.ts:6](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/src/tools/doc/create-document.ts#L6)
    - [openclaw/plugin-sdk @ get-document-content.ts:6](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/src/tools/doc/get-document-content.ts#L6)
    - [openclaw/plugin-sdk @ get-document-info.ts:6](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/src/tools/doc/get-document-info.ts#L6)
    - [openclaw/plugin-sdk @ index.ts:8](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/src/tools/doc/index.ts#L8)
    - [openclaw/plugin-sdk @ search-documents.ts:6](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/src/tools/doc/search-documents.ts#L6)
    - [openclaw/plugin-sdk @ update-document.ts:6](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/src/tools/doc/update-document.ts#L6)
    - [openclaw/plugin-sdk @ commit-uploaded-file.ts:6](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/src/tools/file/commit-uploaded-file.ts#L6)
    - [openclaw/plugin-sdk @ create-file.ts:6](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/src/tools/file/create-file.ts#L6)
    - [openclaw/plugin-sdk @ create-folder.ts:6](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/src/tools/file/create-folder.ts#L6)
    - [openclaw/plugin-sdk @ download-file.ts:6](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/src/tools/file/download-file.ts#L6)
    - [openclaw/plugin-sdk @ get-file-upload-info.ts:6](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/src/tools/file/get-file-upload-info.ts#L6)
    - [openclaw/plugin-sdk @ index.ts:5](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/src/tools/file/index.ts#L5)
    - [openclaw/plugin-sdk @ list-nodes.ts:6](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/src/tools/file/list-nodes.ts#L6)
    - [openclaw/plugin-sdk @ helpers.ts:7](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/src/tools/helpers.ts#L7)
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
  - state: open · compat:active
  - evidence:
    - [createChatChannelPlugin @ channel-DGWPH5u3.js:403](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/discord/dist/channel-DGWPH5u3.js#L403)

- 🟡 P2 **discord** `deprecation-warning` `core-compat-adapter`
  - **channel-env-vars**: discord: channelEnvVars legacy manifest metadata must stay covered
  - state: open · compat:deprecated · deprecated
  - evidence:
    - discord
  - author remediation:
    - Move legacy channel environment variable metadata into the current setup/config metadata while keeping the old field until your supported OpenClaw range no longer needs it.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#channel-env-vars

- 🟡 P2 **discord** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: discord: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@discordjs/voice @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/discord/package.json)
    - [discord-api-types @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/discord/package.json)
    - [libopus-wasm @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/discord/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/discord/package.json)
    - [undici @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/discord/package.json)
    - [ws @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/discord/package.json)

- 🟡 P2 **discord** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: discord: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec
  - author remediation:
    - Complete the OpenClaw install metadata so ClawHub can identify the install target.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-install-metadata-incomplete

- 🟡 P2 **discord** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: discord: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.5.26
    - buildOpenClawVersion:2026.7.1
  - author remediation:
    - Set the package minimum host version to the OpenClaw version range the plugin was built and tested against.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-min-host-version-drift

- 🟡 P2 **feishu** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: feishu: channel runtime needs envelope/config probes
  - state: open · compat:active
  - evidence:
    - [createChatChannelPlugin @ channel-DRQRQQQ3.js:2049](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/feishu/dist/channel-DRQRQQQ3.js#L2049)

- 🟡 P2 **feishu** `deprecation-warning` `core-compat-adapter`
  - **channel-env-vars**: feishu: channelEnvVars legacy manifest metadata must stay covered
  - state: open · compat:deprecated · deprecated
  - evidence:
    - feishu
  - author remediation:
    - Move legacy channel environment variable metadata into the current setup/config metadata while keeping the old field until your supported OpenClaw range no longer needs it.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#channel-env-vars

- 🟡 P2 **feishu** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: feishu: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@larksuiteoapi/node-sdk @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/feishu/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/feishu/package.json)
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/feishu/package.json)

- 🟡 P2 **feishu** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: feishu: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec
  - author remediation:
    - Complete the OpenClaw install metadata so ClawHub can identify the install target.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-install-metadata-incomplete

- 🟡 P2 **feishu** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: feishu: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.5.29
    - buildOpenClawVersion:2026.7.1
  - author remediation:
    - Set the package minimum host version to the OpenClaw version range the plugin was built and tested against.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-min-host-version-drift

- 🟡 P2 **feishu** `deprecation-warning` `core-compat-adapter`
  - **sdk-load-session-store**: feishu: deprecated whole-store session helper is still used
  - state: open · compat:none
  - evidence:
    - [openclaw/plugin-sdk/session-store-runtime loadSessionStore import @ channel-DRQRQQQ3.js:36](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/feishu/dist/channel-DRQRQQQ3.js#L36)
  - author remediation:
    - Replace deprecated loadSessionStore whole-store access with row-scoped session helpers.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#sdk-load-session-store

- 🟡 P2 **feishu** `deprecation-warning` `core-compat-adapter`
  - **sdk-session-file-helper**: feishu: deprecated session file-path helper is still used
  - state: open · compat:none
  - evidence:
    - [openclaw/plugin-sdk/session-store-runtime resolveSessionFilePath import @ channel-DRQRQQQ3.js:36](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/feishu/dist/channel-DRQRQQQ3.js#L36)
  - author remediation:
    - Replace deprecated session file-path helpers with session entry and transcript identity APIs.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#sdk-session-file-helper

- 🟡 P2 **feishu** `deprecation-warning` `core-compat-adapter`
  - **sdk-session-store-write**: feishu: deprecated whole-store session write helper is still used
  - state: open · compat:none
  - evidence:
    - [openclaw/plugin-sdk/session-store-runtime updateSessionStore import @ channel-DRQRQQQ3.js:36](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/feishu/dist/channel-DRQRQQQ3.js#L36)
  - author remediation:
    - Replace deprecated whole-store session writes with row-scoped session helpers.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#sdk-session-store-write

- 🟡 P2 **google-meet** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: google-meet: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [jszip @ package.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/google-meet/package.json)
    - [pretty-ms @ package.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/google-meet/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/google-meet/package.json)

- 🟡 P2 **google-meet** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: google-meet: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec
  - author remediation:
    - Complete the OpenClaw install metadata so ClawHub can identify the install target.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-install-metadata-incomplete

- 🟡 P2 **google-meet** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: google-meet: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.4.20
    - buildOpenClawVersion:2026.7.2-beta.1
  - author remediation:
    - Set the package minimum host version to the OpenClaw version range the plugin was built and tested against.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-min-host-version-drift

- 🟡 P2 **google-meet** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: google-meet: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:active
  - evidence:
    - [registerGatewayMethod @ index.js:5272](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/google-meet/dist/index.js#L5272)
    - [registerGatewayMethod @ index.js:5290](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/google-meet/dist/index.js#L5290)
    - [registerGatewayMethod @ index.js:5307](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/google-meet/dist/index.js#L5307)
    - [registerGatewayMethod @ index.js:5314](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/google-meet/dist/index.js#L5314)
    - [registerGatewayMethod @ index.js:5331](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/google-meet/dist/index.js#L5331)
    - [registerGatewayMethod @ index.js:5341](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/google-meet/dist/index.js#L5341)
    - [registerGatewayMethod @ index.js:5352](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/google-meet/dist/index.js#L5352)
    - [registerGatewayMethod @ index.js:5372](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/google-meet/dist/index.js#L5372)
    - [registerGatewayMethod @ index.js:5387](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/google-meet/dist/index.js#L5387)
    - [registerGatewayMethod @ index.js:5404](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/google-meet/dist/index.js#L5404)
    - [registerGatewayMethod @ index.js:5422](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/google-meet/dist/index.js#L5422)
    - [registerGatewayMethod @ index.js:5429](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/google-meet/dist/index.js#L5429)
    - [registerGatewayMethod @ index.js:5441](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/google-meet/dist/index.js#L5441)
    - [registerGatewayMethod @ index.js:5452](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/google-meet/dist/index.js#L5452)
    - [registerGatewayMethod @ index.js:5464](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/google-meet/dist/index.js#L5464)
    - [registerGatewayMethod @ index.js:5482](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/google-meet/dist/index.js#L5482)
    - [registerNodeHostCommand @ index.js:5654](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/google-meet/dist/index.js#L5654)
    - [registerNodeInvokePolicy @ index.js:5660](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/google-meet/dist/index.js#L5660)

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

- 🟡 P2 **honcho** `deprecation-warning` `core-compat-adapter`
  - **legacy-before-agent-start**: honcho: legacy before_agent_start hook compatibility is still used
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [before_agent_start @ subagent.ts:18](https://github.com/plastic-labs/openclaw-honcho/blob/f35f9d474b977f2c43e6dbace1eb9323123347bc/hooks/subagent.ts#L18)
  - author remediation:
    - Replace the legacy before_agent_start hook with the current prompt/model hooks.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#legacy-before-agent-start

- 🟡 P2 **honcho** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: honcho: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [openclaw/plugin-sdk @ cli.ts:8](https://github.com/plastic-labs/openclaw-honcho/blob/f35f9d474b977f2c43e6dbace1eb9323123347bc/commands/cli.ts#L8)
    - [openclaw/plugin-sdk @ capture.ts:2](https://github.com/plastic-labs/openclaw-honcho/blob/f35f9d474b977f2c43e6dbace1eb9323123347bc/hooks/capture.ts#L2)
    - [openclaw/plugin-sdk @ context.ts:2](https://github.com/plastic-labs/openclaw-honcho/blob/f35f9d474b977f2c43e6dbace1eb9323123347bc/hooks/context.ts#L2)
    - [openclaw/plugin-sdk @ gateway.ts:2](https://github.com/plastic-labs/openclaw-honcho/blob/f35f9d474b977f2c43e6dbace1eb9323123347bc/hooks/gateway.ts#L2)
    - [openclaw/plugin-sdk @ subagent.ts:2](https://github.com/plastic-labs/openclaw-honcho/blob/f35f9d474b977f2c43e6dbace1eb9323123347bc/hooks/subagent.ts#L2)
    - [openclaw/plugin-sdk @ state.ts:9](https://github.com/plastic-labs/openclaw-honcho/blob/f35f9d474b977f2c43e6dbace1eb9323123347bc/state.ts#L9)
    - [openclaw/plugin-sdk @ ask.ts:3](https://github.com/plastic-labs/openclaw-honcho/blob/f35f9d474b977f2c43e6dbace1eb9323123347bc/tools/ask.ts#L3)
    - [openclaw/plugin-sdk @ context.ts:3](https://github.com/plastic-labs/openclaw-honcho/blob/f35f9d474b977f2c43e6dbace1eb9323123347bc/tools/context.ts#L3)
    - [openclaw/plugin-sdk @ memory-passthrough.ts:3](https://github.com/plastic-labs/openclaw-honcho/blob/f35f9d474b977f2c43e6dbace1eb9323123347bc/tools/memory-passthrough.ts#L3)
    - [openclaw/plugin-sdk @ message-search.ts:3](https://github.com/plastic-labs/openclaw-honcho/blob/f35f9d474b977f2c43e6dbace1eb9323123347bc/tools/message-search.ts#L3)
    - [openclaw/plugin-sdk @ search.ts:3](https://github.com/plastic-labs/openclaw-honcho/blob/f35f9d474b977f2c43e6dbace1eb9323123347bc/tools/search.ts#L3)
    - [openclaw/plugin-sdk @ session.ts:3](https://github.com/plastic-labs/openclaw-honcho/blob/f35f9d474b977f2c43e6dbace1eb9323123347bc/tools/session.ts#L3)
  - author remediation:
    - Prefer focused public plugin SDK subpath imports instead of the legacy root barrel.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#legacy-root-sdk-import

- 🟡 P2 **honcho** `inspector-gap` `inspector-follow-up`
  - **package-build-artifact-entrypoint**: honcho: cold import requires package build output
  - state: open · compat:none
  - evidence:
    - [extension:./dist/index.js @ index.js](https://github.com/plastic-labs/openclaw-honcho/blob/f35f9d474b977f2c43e6dbace1eb9323123347bc/dist/index.js)

- 🟡 P2 **honcho** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: honcho: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@honcho-ai/sdk @ package.json](https://github.com/plastic-labs/openclaw-honcho/blob/f35f9d474b977f2c43e6dbace1eb9323123347bc/package.json)
    - [@sinclair/typebox @ package.json](https://github.com/plastic-labs/openclaw-honcho/blob/f35f9d474b977f2c43e6dbace1eb9323123347bc/package.json)

- 🟡 P2 **honcho** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: honcho: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:active
  - evidence:
    - [registerMemoryPromptSection @ index.ts:97](https://github.com/plastic-labs/openclaw-honcho/blob/f35f9d474b977f2c43e6dbace1eb9323123347bc/index.ts#L97)
    - [registerMemoryRuntime @ runtime.ts:261](https://github.com/plastic-labs/openclaw-honcho/blob/f35f9d474b977f2c43e6dbace1eb9323123347bc/runtime.ts#L261)

- 🟡 P2 **hyperspell** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: hyperspell: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [openclaw/plugin-sdk @ slash.ts:1](https://github.com/hyperspell/hyperspell-openclaw/blob/056dcd9710a26b84bbef4ba72353e99b41af8f73/commands/slash.ts#L1)
    - [openclaw/plugin-sdk @ tools.ts:2](https://github.com/hyperspell/hyperspell-openclaw/blob/056dcd9710a26b84bbef4ba72353e99b41af8f73/graph/tools.ts#L2)
    - [openclaw/plugin-sdk @ index.ts:1](https://github.com/hyperspell/hyperspell-openclaw/blob/056dcd9710a26b84bbef4ba72353e99b41af8f73/index.ts#L1)
  - author remediation:
    - Prefer focused public plugin SDK subpath imports instead of the legacy root barrel.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#legacy-root-sdk-import

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
  - state: open · compat:active
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

- 🟡 P2 **inworld-tts** `deprecation-warning` `core-compat-adapter`
  - **provider-auth-env-vars**: inworld-tts: providerAuthEnvVars legacy manifest metadata must stay covered
  - state: open · compat:deprecated · deprecated
  - evidence:
    - inworld
  - author remediation:
    - Move legacy provider authentication environment variables into current provider setup metadata.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#provider-auth-env-vars

- 🟡 P2 **kitchen-sink** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: kitchen-sink: channel runtime needs envelope/config probes
  - state: open · compat:active
  - evidence:
    - [registerChannel @ generated-registrars.js:8](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-registrars.js#L8)
    - [registerChannel @ kitchen-runtime.js:58](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/kitchen-runtime.js#L58)

- 🟡 P2 **kitchen-sink** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: kitchen-sink: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:active
  - evidence:
    - [registerAutoEnableProbe @ generated-registrars.js:7](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-registrars.js#L7)
    - [registerChannel @ generated-registrars.js:8](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-registrars.js#L8)
    - [registerChannel @ kitchen-runtime.js:58](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/kitchen-runtime.js#L58)
    - [registerCommand @ generated-registrars.js:12](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-registrars.js#L12)
    - [registerCommand @ kitchen-runtime.js:53](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/kitchen-runtime.js#L53)
    - [registerCommand @ kitchen-runtime.js:54](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/kitchen-runtime.js#L54)
    - [registerCompactionProvider @ generated-registrars.js:13](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-registrars.js#L13)
    - [registerCompactionProvider @ kitchen-runtime.js:101](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/kitchen-runtime.js#L101)
    - [registerConfigMigration @ generated-registrars.js:14](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-registrars.js#L14)
    - [registerContextEngine @ generated-registrars.js:15](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-registrars.js#L15)
    - [registerContextEngine @ kitchen-runtime.js:104](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/kitchen-runtime.js#L104)
    - [registerDetachedTaskRuntime @ sync-surface.mjs:162](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/scripts/sync-surface.mjs#L162)
    - [registerDetachedTaskRuntime @ generated-registrars.js:17](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-registrars.js#L17)
    - [registerDetachedTaskRuntime @ kitchen-runtime.js:92](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/kitchen-runtime.js#L92)
    - [registerGatewayDiscoveryService @ generated-registrars.js:19](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-registrars.js#L19)
    - [registerGatewayMethod @ generated-registrars.js:20](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-registrars.js#L20)
    - [registerGatewayMethod @ kitchen-runtime.js:116](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/kitchen-runtime.js#L116)
    - [registerHook @ generated-registrars.js:21](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-registrars.js#L21)
    - [registerHostedMediaResolver @ generated-registrars.js:22](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-registrars.js#L22)
    - [registerHttpRoute @ generated-registrars.js:23](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-registrars.js#L23)
    - [registerHttpRoute @ kitchen-runtime.js:114](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/kitchen-runtime.js#L114)
    - [registerInteractiveHandler @ generated-registrars.js:25](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-registrars.js#L25)
    - [registerInteractiveHandler @ kitchen-runtime.js:56](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/kitchen-runtime.js#L56)
    - [registerMeetingNotesSourceProvider @ sync-surface.mjs:165](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/scripts/sync-surface.mjs#L165)
    - [registerMemoryCapability @ generated-registrars.js:27](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-registrars.js#L27)
    - [registerMemoryCorpusSupplement @ generated-registrars.js:28](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-registrars.js#L28)
    - [registerMemoryCorpusSupplement @ kitchen-runtime.js:98](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/kitchen-runtime.js#L98)
    - [registerMemoryFlushPlan @ generated-registrars.js:30](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-registrars.js#L30)
    - [registerMemoryPromptSection @ generated-registrars.js:31](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-registrars.js#L31)
    - [registerMemoryPromptSupplement @ generated-registrars.js:32](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-registrars.js#L32)
    - [registerMemoryPromptSupplement @ kitchen-runtime.js:120](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/kitchen-runtime.js#L120)
    - [registerMemoryRuntime @ generated-registrars.js:33](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-registrars.js#L33)
    - [registerNodeCliFeature @ sync-surface.mjs:171](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/scripts/sync-surface.mjs#L171)
    - [registerNodeCliFeature @ generated-registrars.js:37](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-registrars.js#L37)
    - [registerNodeHostCommand @ generated-registrars.js:38](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-registrars.js#L38)
    - [registerNodeInvokePolicy @ generated-registrars.js:39](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-registrars.js#L39)
    - [registerReload @ generated-registrars.js:43](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-registrars.js#L43)
    - [registerSecurityAuditCollector @ generated-registrars.js:45](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-registrars.js#L45)
    - [registerService @ generated-registrars.js:46](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-registrars.js#L46)
    - [registerService @ kitchen-runtime.js:113](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/kitchen-runtime.js#L113)

- 🟡 P2 **lightclawbot** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: lightclawbot: channel runtime needs envelope/config probes
  - state: open · compat:active
  - evidence:
    - createChatChannelPlugin @ plugins/lightclawbot/.crabpot-package/dist/src/channel.js:45
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

- 🟡 P2 **lobster** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: lobster: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@clawdbot/lobster @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/lobster/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/lobster/package.json)

- 🟡 P2 **lobster** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: lobster: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec
  - author remediation:
    - Complete the OpenClaw install metadata so ClawHub can identify the install target.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-install-metadata-incomplete

- 🟡 P2 **lobster** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: lobster: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.4.25
    - buildOpenClawVersion:2026.7.1
  - author remediation:
    - Set the package minimum host version to the OpenClaw version range the plugin was built and tested against.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-min-host-version-drift

- 🟡 P2 **lossless-claw** `inspector-gap` `inspector-follow-up`
  - **package-build-artifact-entrypoint**: lossless-claw: cold import requires package build output
  - state: open · compat:none
  - evidence:
    - [extension:./dist/index.js @ index.js](https://github.com/Martian-Engineering/lossless-claw/blob/a97c65888838dad9ac665ce10c6f54d0a370a02b/dist/index.js)

- 🟡 P2 **lossless-claw** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: lossless-claw: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@sinclair/typebox @ package.json](https://github.com/Martian-Engineering/lossless-claw/blob/a97c65888838dad9ac665ce10c6f54d0a370a02b/package.json)

- 🟡 P2 **lossless-claw** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: lossless-claw: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:active
  - evidence:
    - [registerCommand @ index.ts:1696](https://github.com/Martian-Engineering/lossless-claw/blob/a97c65888838dad9ac665ce10c6f54d0a370a02b/src/plugin/index.ts#L1696)
    - [registerContextEngine @ index.ts:1647](https://github.com/Martian-Engineering/lossless-claw/blob/a97c65888838dad9ac665ce10c6f54d0a370a02b/src/plugin/index.ts#L1647)

- 🟡 P2 **lossless-claw** `deprecation-warning` `core-compat-adapter`
  - **sdk-load-session-store**: lossless-claw: deprecated whole-store session helper is still used
  - state: open · compat:none
  - evidence:
    - [api.runtime.agent.session alias loadSessionStore @ index.ts:1487](https://github.com/Martian-Engineering/lossless-claw/blob/a97c65888838dad9ac665ce10c6f54d0a370a02b/src/plugin/index.ts#L1487)
    - [api.runtime.agent.session alias loadSessionStore @ index.ts:1516](https://github.com/Martian-Engineering/lossless-claw/blob/a97c65888838dad9ac665ce10c6f54d0a370a02b/src/plugin/index.ts#L1516)
    - [api.runtime.agent.session alias loadSessionStore @ index.ts:1562](https://github.com/Martian-Engineering/lossless-claw/blob/a97c65888838dad9ac665ce10c6f54d0a370a02b/src/plugin/index.ts#L1562)
    - [api.runtime.agent.session alias loadSessionStore @ index.ts:1794](https://github.com/Martian-Engineering/lossless-claw/blob/a97c65888838dad9ac665ce10c6f54d0a370a02b/src/plugin/index.ts#L1794)
    - [api.runtime.agent.session alias loadSessionStore @ index.ts:1840](https://github.com/Martian-Engineering/lossless-claw/blob/a97c65888838dad9ac665ce10c6f54d0a370a02b/src/plugin/index.ts#L1840)
  - author remediation:
    - Replace deprecated loadSessionStore whole-store access with row-scoped session helpers.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#sdk-load-session-store

- 🟡 P2 **lossless-claw** `deprecation-warning` `core-compat-adapter`
  - **sdk-session-file-helper**: lossless-claw: deprecated session file-path helper is still used
  - state: open · compat:none
  - evidence:
    - [api.runtime.agent.session alias resolveSessionFilePath @ index.ts:1523](https://github.com/Martian-Engineering/lossless-claw/blob/a97c65888838dad9ac665ce10c6f54d0a370a02b/src/plugin/index.ts#L1523)
    - [api.runtime.agent.session alias resolveSessionFilePath @ index.ts:1583](https://github.com/Martian-Engineering/lossless-claw/blob/a97c65888838dad9ac665ce10c6f54d0a370a02b/src/plugin/index.ts#L1583)
  - author remediation:
    - Replace deprecated session file-path helpers with session entry and transcript identity APIs.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#sdk-session-file-helper

- 🟡 P2 **matrix** `deprecation-warning` `core-compat-adapter`
  - **channel-env-vars**: matrix: channelEnvVars legacy manifest metadata must stay covered
  - state: open · compat:deprecated · deprecated
  - evidence:
    - matrix
  - author remediation:
    - Move legacy channel environment variable metadata into the current setup/config metadata while keeping the old field until your supported OpenClaw range no longer needs it.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#channel-env-vars

- 🟡 P2 **matrix** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: matrix: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@matrix-org/matrix-sdk-crypto-nodejs @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/matrix/package.json)
    - [@matrix-org/matrix-sdk-crypto-wasm @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/matrix/package.json)
    - [fake-indexeddb @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/matrix/package.json)
    - [markdown-it @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/matrix/package.json)
    - [matrix-js-sdk @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/matrix/package.json)
    - [music-metadata @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/matrix/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/matrix/package.json)
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/matrix/package.json)

- 🟡 P2 **matrix** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: matrix: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.4.10
    - buildOpenClawVersion:2026.7.1
  - author remediation:
    - Set the package minimum host version to the OpenClaw version range the plugin was built and tested against.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-min-host-version-drift

- 🟡 P2 **matrix** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: matrix: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/matrix/index.ts)
    - [setupEntry @ setup-entry.ts](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/matrix/setup-entry.ts)

- 🟡 P2 **matrix** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: matrix: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:active
  - evidence:
    - [registerGatewayMethod @ index.ts:15](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/matrix/index.ts#L15)
    - [registerGatewayMethod @ index.ts:20](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/matrix/index.ts#L20)
    - [registerGatewayMethod @ index.ts:25](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/matrix/index.ts#L25)

- 🟡 P2 **mattermost** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: mattermost: channel runtime needs envelope/config probes
  - state: open · compat:active
  - evidence:
    - [createChatChannelPlugin @ channel.ts:757](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/mattermost/src/channel.ts#L757)

- 🟡 P2 **mattermost** `deprecation-warning` `core-compat-adapter`
  - **channel-env-vars**: mattermost: channelEnvVars legacy manifest metadata must stay covered
  - state: open · compat:deprecated · deprecated
  - evidence:
    - mattermost
  - author remediation:
    - Move legacy channel environment variable metadata into the current setup/config metadata while keeping the old field until your supported OpenClaw range no longer needs it.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#channel-env-vars

- 🟡 P2 **mattermost** `upstream-metadata` `plugin-upstream-fix`
  - **manifest-name-missing**: mattermost: manifest display name is missing
  - state: open · compat:none
  - evidence:
    - [openclaw.plugin.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/mattermost/openclaw.plugin.json)
  - author remediation:
    - Add a display name to the plugin manifest.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#manifest-name-missing

- 🟡 P2 **mattermost** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: mattermost: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [ws @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/mattermost/package.json)
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/mattermost/package.json)

- 🟡 P2 **mattermost** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: mattermost: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.6.9
    - buildOpenClawVersion:2026.7.1
  - author remediation:
    - Set the package minimum host version to the OpenClaw version range the plugin was built and tested against.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-min-host-version-drift

- 🟡 P2 **mattermost** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: mattermost: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/mattermost/index.ts)
    - [setupEntry @ setup-entry.ts](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/mattermost/setup-entry.ts)

- 🟡 P2 **mattermost** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: mattermost: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:active
  - evidence:
    - [registerHttpRoute @ slash-state.ts:417](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/mattermost/src/mattermost/slash-state.ts#L417)

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
  - state: open · compat:active
  - evidence:
    - [registerService @ index.ts:15](https://github.com/androidStern-personal/openclaw-mcp-adapter/blob/5434ce21ac780a46a493c8125e52e80a03dd2640/index.ts#L15)

- 🟡 P2 **mcp-adapter** `inspector-gap` `inspector-follow-up`
  - **runtime-tool-capture**: mcp-adapter: runtime tool schema needs registration capture
  - state: open · compat:none
  - evidence:
    - [registerTool @ index.ts:30](https://github.com/androidStern-personal/openclaw-mcp-adapter/blob/5434ce21ac780a46a493c8125e52e80a03dd2640/index.ts#L30)

- 🟡 P2 **memory-lancedb** `upstream-metadata` `plugin-upstream-fix`
  - **manifest-unknown-fields**: memory-lancedb: manifest uses unsupported top-level fields
  - state: open · compat:none
  - evidence:
    - [catalog @ openclaw.plugin.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/memory-lancedb/openclaw.plugin.json)
  - author remediation:
    - Move unsupported top-level manifest fields into supported package metadata or remove them.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#manifest-unknown-fields

- 🟡 P2 **memory-lancedb** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: memory-lancedb: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@lancedb/lancedb @ package.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/memory-lancedb/package.json)
    - [apache-arrow @ package.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/memory-lancedb/package.json)
    - [openai @ package.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/memory-lancedb/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/memory-lancedb/package.json)

- 🟡 P2 **memory-lancedb** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: memory-lancedb: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec
  - author remediation:
    - Complete the OpenClaw install metadata so ClawHub can identify the install target.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-install-metadata-incomplete

- 🟡 P2 **memory-lancedb** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: memory-lancedb: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.5.31
    - buildOpenClawVersion:2026.7.2-beta.1
  - author remediation:
    - Set the package minimum host version to the OpenClaw version range the plugin was built and tested against.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-min-host-version-drift

- 🟡 P2 **memory-lancedb** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: memory-lancedb: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:active
  - evidence:
    - [registerService @ index.js:1265](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/memory-lancedb/dist/index.js#L1265)
    - [registerService @ index.js:846](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/memory-lancedb/dist/index.js#L846)

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
  - state: open · compat:active
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
    - [before_agent_start @ index.js:802](https://github.com/MemTensor/MemOS-Cloud-OpenClaw-Plugin/blob/18cb8c7f9317d1348629d9f4cbd9507978de0b81/index.js#L802)
  - author remediation:
    - Replace the legacy before_agent_start hook with the current prompt/model hooks.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#legacy-before-agent-start

- 🟡 P2 **memos-cloud** `upstream-metadata` `plugin-upstream-fix`
  - **manifest-unknown-fields**: memos-cloud: manifest uses unsupported top-level fields
  - state: open · compat:none
  - evidence:
    - [main @ openclaw.plugin.json](https://github.com/MemTensor/MemOS-Cloud-OpenClaw-Plugin/blob/18cb8c7f9317d1348629d9f4cbd9507978de0b81/openclaw.plugin.json)
  - author remediation:
    - Move unsupported top-level manifest fields into supported package metadata or remove them.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#manifest-unknown-fields

- 🟡 P2 **memos-cloud** `upstream-metadata` `plugin-upstream-fix`
  - **package-plugin-api-compat-missing**: memos-cloud: plugin API compatibility range is missing
  - state: open · compat:none
  - evidence:
    - [package.json](https://github.com/MemTensor/MemOS-Cloud-OpenClaw-Plugin/blob/18cb8c7f9317d1348629d9f4cbd9507978de0b81/package.json)
  - author remediation:
    - Declare the OpenClaw plugin API range this package supports.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-plugin-api-compat-missing

- 🟡 P2 **memos-cloud** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: memos-cloud: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:active
  - evidence:
    - [registerHook @ index.js:732](https://github.com/MemTensor/MemOS-Cloud-OpenClaw-Plugin/blob/18cb8c7f9317d1348629d9f4cbd9507978de0b81/index.js#L732)

- 🟡 P2 **memu-engine** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: memu-engine: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [openclaw/plugin-sdk @ index.ts:1](https://github.com/duxiaoxiong/memu-engine-for-OpenClaw/blob/a5a22c5faf21e30d17a1b47635829e7dd0728ae5/index.ts#L1)
  - author remediation:
    - Prefer focused public plugin SDK subpath imports instead of the legacy root barrel.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#legacy-root-sdk-import

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
    - [createChatChannelPlugin @ channel-Cf5LJ4aO.js:681](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/msteams/dist/channel-Cf5LJ4aO.js#L681)

- 🟡 P2 **msteams** `deprecation-warning` `core-compat-adapter`
  - **channel-env-vars**: msteams: channelEnvVars legacy manifest metadata must stay covered
  - state: open · compat:deprecated · deprecated
  - evidence:
    - msteams
  - author remediation:
    - Move legacy channel environment variable metadata into the current setup/config metadata while keeping the old field until your supported OpenClaw range no longer needs it.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#channel-env-vars

- 🟡 P2 **msteams** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: msteams: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@azure/identity @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/msteams/package.json)
    - [@microsoft/teams.api @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/msteams/package.json)
    - [@microsoft/teams.apps @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/msteams/package.json)
    - [express @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/msteams/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/msteams/package.json)

- 🟡 P2 **msteams** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: msteams: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec
  - author remediation:
    - Complete the OpenClaw install metadata so ClawHub can identify the install target.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-install-metadata-incomplete

- 🟡 P2 **msteams** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: msteams: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.4.10
    - buildOpenClawVersion:2026.7.1
  - author remediation:
    - Set the package minimum host version to the OpenClaw version range the plugin was built and tested against.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-min-host-version-drift

- 🟡 P2 **nemoclaw** `inspector-gap` `inspector-follow-up`
  - **package-build-artifact-entrypoint**: nemoclaw: cold import requires package build output
  - state: open · compat:none
  - evidence:
    - [extension:./dist/index.js @ index.js](https://github.com/NVIDIA/NemoClaw/blob/c1bda8069d95a84a9e16b0d292a5fe20ce7cea7d/nemoclaw/dist/index.js)

- 🟡 P2 **nemoclaw** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: nemoclaw: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [execa @ package.json](https://github.com/NVIDIA/NemoClaw/blob/c1bda8069d95a84a9e16b0d292a5fe20ce7cea7d/nemoclaw/package.json)
    - [json5 @ package.json](https://github.com/NVIDIA/NemoClaw/blob/c1bda8069d95a84a9e16b0d292a5fe20ce7cea7d/nemoclaw/package.json)
    - [tar @ package.json](https://github.com/NVIDIA/NemoClaw/blob/c1bda8069d95a84a9e16b0d292a5fe20ce7cea7d/nemoclaw/package.json)
    - [yaml @ package.json](https://github.com/NVIDIA/NemoClaw/blob/c1bda8069d95a84a9e16b0d292a5fe20ce7cea7d/nemoclaw/package.json)

- 🟡 P2 **nemoclaw** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: nemoclaw: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:active
  - evidence:
    - [registerCommand @ index.ts:348](https://github.com/NVIDIA/NemoClaw/blob/c1bda8069d95a84a9e16b0d292a5fe20ce7cea7d/nemoclaw/src/index.ts#L348)

- 🟡 P2 **nextcloud-talk** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: nextcloud-talk: channel runtime needs envelope/config probes
  - state: open · compat:active
  - evidence:
    - [createChatChannelPlugin @ channel-BMKRTDSP.js:2049](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/nextcloud-talk/dist/channel-BMKRTDSP.js#L2049)

- 🟡 P2 **nextcloud-talk** `deprecation-warning` `core-compat-adapter`
  - **channel-env-vars**: nextcloud-talk: channelEnvVars legacy manifest metadata must stay covered
  - state: open · compat:deprecated · deprecated
  - evidence:
    - nextcloud-talk
  - author remediation:
    - Move legacy channel environment variable metadata into the current setup/config metadata while keeping the old field until your supported OpenClaw range no longer needs it.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#channel-env-vars

- 🟡 P2 **nextcloud-talk** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: nextcloud-talk: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/nextcloud-talk/package.json)

- 🟡 P2 **nextcloud-talk** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: nextcloud-talk: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec
  - author remediation:
    - Complete the OpenClaw install metadata so ClawHub can identify the install target.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-install-metadata-incomplete

- 🟡 P2 **nextcloud-talk** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: nextcloud-talk: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.4.10
    - buildOpenClawVersion:2026.7.1
  - author remediation:
    - Set the package minimum host version to the OpenClaw version range the plugin was built and tested against.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-min-host-version-drift

- 🟡 P2 **nostr** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: nostr: channel runtime needs envelope/config probes
  - state: open · compat:active
  - evidence:
    - [createChatChannelPlugin @ channel-B2Y66pl3.js:1348](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/nostr/dist/channel-B2Y66pl3.js#L1348)

- 🟡 P2 **nostr** `deprecation-warning` `core-compat-adapter`
  - **channel-env-vars**: nostr: channelEnvVars legacy manifest metadata must stay covered
  - state: open · compat:deprecated · deprecated
  - evidence:
    - nostr
  - author remediation:
    - Move legacy channel environment variable metadata into the current setup/config metadata while keeping the old field until your supported OpenClaw range no longer needs it.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#channel-env-vars

- 🟡 P2 **nostr** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: nostr: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [nostr-tools @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/nostr/package.json)
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/nostr/package.json)

- 🟡 P2 **nostr** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: nostr: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec
  - author remediation:
    - Complete the OpenClaw install metadata so ClawHub can identify the install target.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-install-metadata-incomplete

- 🟡 P2 **nostr** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: nostr: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.4.10
    - buildOpenClawVersion:2026.7.1
  - author remediation:
    - Set the package minimum host version to the OpenClaw version range the plugin was built and tested against.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-min-host-version-drift

- 🟡 P2 **nostr** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: nostr: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:active
  - evidence:
    - [registerHttpRoute @ index.js:71](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/nostr/dist/index.js#L71)

- 🟡 P2 **openclaw-qqbot** `deprecation-warning` `core-compat-adapter`
  - **channel-env-vars**: openclaw-qqbot: channelEnvVars legacy manifest metadata must stay covered
  - state: open · compat:deprecated · deprecated
  - evidence:
    - qqbot
  - author remediation:
    - Move legacy channel environment variable metadata into the current setup/config metadata while keeping the old field until your supported OpenClaw range no longer needs it.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#channel-env-vars

- 🟡 P2 **openclaw-qqbot** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: openclaw-qqbot: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@tencent-connect/qqbot-connector @ package.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/qqbot/package.json)
    - [mpg123-decoder @ package.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/qqbot/package.json)
    - [p-map @ package.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/qqbot/package.json)
    - [pretty-ms @ package.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/qqbot/package.json)
    - [silk-wasm @ package.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/qqbot/package.json)
    - [ws @ package.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/qqbot/package.json)
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/qqbot/package.json)

- 🟡 P2 **openclaw-qqbot** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: openclaw-qqbot: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec
  - author remediation:
    - Complete the OpenClaw install metadata so ClawHub can identify the install target.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-install-metadata-incomplete

- 🟡 P2 **openclaw-qqbot** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: openclaw-qqbot: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.4.10
    - buildOpenClawVersion:2026.7.2-beta.1
  - author remediation:
    - Set the package minimum host version to the OpenClaw version range the plugin was built and tested against.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-min-host-version-drift

- 🟡 P2 **openclaw-qqbot** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: openclaw-qqbot: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:active
  - evidence:
    - [registerCommand @ channel-entry-Cj1lWXpt.js:111](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/qqbot/dist/channel-entry-Cj1lWXpt.js#L111)

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
    - [openclaw/plugin-sdk @ index.ts:1](https://github.com/knostic/openclaw-telemetry/blob/86c2458a0dfe82d639c208c5220396feb9d53c45/index.ts#L1)
    - [openclaw/plugin-sdk @ service.ts:1](https://github.com/knostic/openclaw-telemetry/blob/86c2458a0dfe82d639c208c5220396feb9d53c45/src/service.ts#L1)
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
  - state: open · compat:active
  - evidence:
    - [registerService @ index.ts:10](https://github.com/knostic/openclaw-telemetry/blob/86c2458a0dfe82d639c208c5220396feb9d53c45/index.ts#L10)

- 🟡 P2 **openclaw-weixin** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: openclaw-weixin: channel runtime needs envelope/config probes
  - state: open · compat:active
  - evidence:
    - registerChannel @ plugins/openclaw-weixin/.crabpot-package/dist/index.js:13
    - registerChannel @ plugins/openclaw-weixin/.crabpot-package/index.ts:17

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
  - state: open · compat:active
  - evidence:
    - registerChannel @ plugins/openclaw-weixin/.crabpot-package/dist/index.js:13
    - registerChannel @ plugins/openclaw-weixin/.crabpot-package/index.ts:17

- 🟡 P2 **opik-openclaw** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: opik-openclaw: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [openclaw/plugin-sdk @ index.ts:1](https://github.com/comet-ml/opik-openclaw/blob/fac4cc3f0fa96e96b1ee2583a0525f3681b017b5/index.ts#L1)
    - [openclaw/plugin-sdk @ index.ts:2](https://github.com/comet-ml/opik-openclaw/blob/fac4cc3f0fa96e96b1ee2583a0525f3681b017b5/index.ts#L2)
    - [openclaw/plugin-sdk @ cli.ts:1](https://github.com/comet-ml/opik-openclaw/blob/fac4cc3f0fa96e96b1ee2583a0525f3681b017b5/src/cli.ts#L1)
    - [openclaw/plugin-sdk @ configure.ts:2](https://github.com/comet-ml/opik-openclaw/blob/fac4cc3f0fa96e96b1ee2583a0525f3681b017b5/src/configure.ts#L2)
    - [openclaw/plugin-sdk @ service.ts:5](https://github.com/comet-ml/opik-openclaw/blob/fac4cc3f0fa96e96b1ee2583a0525f3681b017b5/src/service.ts#L5)
    - [openclaw/plugin-sdk @ service.ts:6](https://github.com/comet-ml/opik-openclaw/blob/fac4cc3f0fa96e96b1ee2583a0525f3681b017b5/src/service.ts#L6)
    - [openclaw/plugin-sdk @ llm.ts:1](https://github.com/comet-ml/opik-openclaw/blob/fac4cc3f0fa96e96b1ee2583a0525f3681b017b5/src/service/hooks/llm.ts#L1)
    - [openclaw/plugin-sdk @ subagent.ts:1](https://github.com/comet-ml/opik-openclaw/blob/fac4cc3f0fa96e96b1ee2583a0525f3681b017b5/src/service/hooks/subagent.ts#L1)
    - [openclaw/plugin-sdk @ tool.ts:1](https://github.com/comet-ml/opik-openclaw/blob/fac4cc3f0fa96e96b1ee2583a0525f3681b017b5/src/service/hooks/tool.ts#L1)
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
  - state: open · compat:active
  - evidence:
    - [registerService @ index.ts:16](https://github.com/comet-ml/opik-openclaw/blob/fac4cc3f0fa96e96b1ee2583a0525f3681b017b5/index.ts#L16)

- 🟡 P2 **qqbot** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: qqbot: channel runtime needs envelope/config probes
  - state: open · compat:active
  - evidence:
    - [registerChannel @ index.ts:16](https://github.com/tencent-connect/openclaw-qqbot/blob/7ceb7f0913d15417c5a74d82442a672ef0382c64/index.ts#L16)

- 🟡 P2 **qqbot** `deprecation-warning` `core-compat-adapter`
  - **legacy-root-sdk-import**: qqbot: root plugin SDK barrel is still used by fixtures
  - state: open · compat:deprecated · deprecated
  - evidence:
    - [openclaw/plugin-sdk @ index.ts:1](https://github.com/tencent-connect/openclaw-qqbot/blob/7ceb7f0913d15417c5a74d82442a672ef0382c64/index.ts#L1)
    - [openclaw/plugin-sdk @ index.ts:2](https://github.com/tencent-connect/openclaw-qqbot/blob/7ceb7f0913d15417c5a74d82442a672ef0382c64/index.ts#L2)
    - [openclaw/plugin-sdk @ api.ts:7](https://github.com/tencent-connect/openclaw-qqbot/blob/7ceb7f0913d15417c5a74d82442a672ef0382c64/src/api.ts#L7)
    - [openclaw/plugin-sdk @ approval-handler.ts:12](https://github.com/tencent-connect/openclaw-qqbot/blob/7ceb7f0913d15417c5a74d82442a672ef0382c64/src/approval-handler.ts#L12)
    - [openclaw/plugin-sdk @ config.ts:2](https://github.com/tencent-connect/openclaw-qqbot/blob/7ceb7f0913d15417c5a74d82442a672ef0382c64/src/config.ts#L2)
    - [openclaw/plugin-sdk @ onboarding.ts:13](https://github.com/tencent-connect/openclaw-qqbot/blob/7ceb7f0913d15417c5a74d82442a672ef0382c64/src/onboarding.ts#L13)
    - [openclaw/plugin-sdk @ proactive.ts:67](https://github.com/tencent-connect/openclaw-qqbot/blob/7ceb7f0913d15417c5a74d82442a672ef0382c64/src/proactive.ts#L67)
    - [openclaw/plugin-sdk @ runtime.ts:1](https://github.com/tencent-connect/openclaw-qqbot/blob/7ceb7f0913d15417c5a74d82442a672ef0382c64/src/runtime.ts#L1)
    - [openclaw/plugin-sdk @ channel.ts:1](https://github.com/tencent-connect/openclaw-qqbot/blob/7ceb7f0913d15417c5a74d82442a672ef0382c64/src/tools/channel.ts#L1)
    - [openclaw/plugin-sdk @ remind.ts:1](https://github.com/tencent-connect/openclaw-qqbot/blob/7ceb7f0913d15417c5a74d82442a672ef0382c64/src/tools/remind.ts#L1)
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
  - state: open · compat:active
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
  - state: open · compat:active
  - evidence:
    - [registerService @ index.ts:295](https://github.com/adversa-ai/secureclaw/blob/bf17e2b3deb989e348b3a98080e33a7047e90ac3/secureclaw/src/index.ts#L295)
    - [registerService @ index.ts:301](https://github.com/adversa-ai/secureclaw/blob/bf17e2b3deb989e348b3a98080e33a7047e90ac3/secureclaw/src/index.ts#L301)
    - [registerService @ index.ts:307](https://github.com/adversa-ai/secureclaw/blob/bf17e2b3deb989e348b3a98080e33a7047e90ac3/secureclaw/src/index.ts#L307)

- 🟡 P2 **synology-chat** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: synology-chat: channel runtime needs envelope/config probes
  - state: open · compat:active
  - evidence:
    - [createChatChannelPlugin @ channel-C6bhvNZi.js:1126](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/synology-chat/dist/channel-C6bhvNZi.js#L1126)

- 🟡 P2 **synology-chat** `deprecation-warning` `core-compat-adapter`
  - **channel-env-vars**: synology-chat: channelEnvVars legacy manifest metadata must stay covered
  - state: open · compat:deprecated · deprecated
  - evidence:
    - synology-chat
  - author remediation:
    - Move legacy channel environment variable metadata into the current setup/config metadata while keeping the old field until your supported OpenClaw range no longer needs it.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#channel-env-vars

- 🟡 P2 **synology-chat** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: synology-chat: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/synology-chat/package.json)

- 🟡 P2 **synology-chat** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: synology-chat: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec
  - author remediation:
    - Complete the OpenClaw install metadata so ClawHub can identify the install target.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-install-metadata-incomplete

- 🟡 P2 **synology-chat** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: synology-chat: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.4.10
    - buildOpenClawVersion:2026.7.1
  - author remediation:
    - Set the package minimum host version to the OpenClaw version range the plugin was built and tested against.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-min-host-version-drift

- 🟡 P2 **telnyx-sms** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: telnyx-sms: channel runtime needs envelope/config probes
  - state: open · compat:active
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

- 🟡 P2 **telnyx-sms** `inspector-gap` `inspector-follow-up`
  - **package-build-artifact-entrypoint**: telnyx-sms: cold import requires package build output
  - state: open · compat:none
  - evidence:
    - [extension:./dist/index.js @ index.js](https://github.com/team-telnyx/telnyx-openclaw-sms-channel/blob/6e3956246cd3e0e72af649d2fd75dee6f3e46966/dist/index.js)
    - [setupEntry:./dist/setup-entry.js @ setup-entry.js](https://github.com/team-telnyx/telnyx-openclaw-sms-channel/blob/6e3956246cd3e0e72af649d2fd75dee6f3e46966/dist/setup-entry.js)

- 🟡 P2 **telnyx-sms** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: telnyx-sms: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:active
  - evidence:
    - [registerHttpRoute @ index.ts:259](https://github.com/team-telnyx/telnyx-openclaw-sms-channel/blob/6e3956246cd3e0e72af649d2fd75dee6f3e46966/index.ts#L259)

- 🟡 P2 **tlon** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: tlon: channel runtime needs envelope/config probes
  - state: open · compat:active
  - evidence:
    - [createChatChannelPlugin @ channel-DEy-ysbN.js:138](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/tlon/dist/channel-DEy-ysbN.js#L138)

- 🟡 P2 **tlon** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: tlon: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@aws-sdk/client-s3 @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/tlon/package.json)
    - [@aws-sdk/s3-request-presigner @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/tlon/package.json)
    - [@tloncorp/tlon-skill @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/tlon/package.json)
    - [@urbit/aura @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/tlon/package.json)
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/tlon/package.json)

- 🟡 P2 **tlon** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: tlon: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec
  - author remediation:
    - Complete the OpenClaw install metadata so ClawHub can identify the install target.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-install-metadata-incomplete

- 🟡 P2 **tlon** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: tlon: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.4.10
    - buildOpenClawVersion:2026.7.1
  - author remediation:
    - Set the package minimum host version to the OpenClaw version range the plugin was built and tested against.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-min-host-version-drift

- 🟡 P2 **twitch** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: twitch: channel runtime needs envelope/config probes
  - state: open · compat:active
  - evidence:
    - [createChatChannelPlugin @ plugin-C5o3rImF.js:1271](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/twitch/dist/plugin-C5o3rImF.js#L1271)

- 🟡 P2 **twitch** `deprecation-warning` `core-compat-adapter`
  - **channel-env-vars**: twitch: channelEnvVars legacy manifest metadata must stay covered
  - state: open · compat:deprecated · deprecated
  - evidence:
    - twitch
  - author remediation:
    - Move legacy channel environment variable metadata into the current setup/config metadata while keeping the old field until your supported OpenClaw range no longer needs it.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#channel-env-vars

- 🟡 P2 **twitch** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: twitch: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@twurple/api @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/twitch/package.json)
    - [@twurple/auth @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/twitch/package.json)
    - [@twurple/chat @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/twitch/package.json)
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/twitch/package.json)

- 🟡 P2 **twitch** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: twitch: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec
  - author remediation:
    - Complete the OpenClaw install metadata so ClawHub can identify the install target.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-install-metadata-incomplete

- 🟡 P2 **twitch** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: twitch: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.4.10
    - buildOpenClawVersion:2026.7.1
  - author remediation:
    - Set the package minimum host version to the OpenClaw version range the plugin was built and tested against.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-min-host-version-drift

- 🟡 P2 **voice-call** `deprecation-warning` `core-compat-adapter`
  - **channel-env-vars**: voice-call: channelEnvVars legacy manifest metadata must stay covered
  - state: open · compat:deprecated · deprecated
  - evidence:
    - voice-call
  - author remediation:
    - Move legacy channel environment variable metadata into the current setup/config metadata while keeping the old field until your supported OpenClaw range no longer needs it.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#channel-env-vars

- 🟡 P2 **voice-call** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: voice-call: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [commander @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/voice-call/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/voice-call/package.json)
    - [ws @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/voice-call/package.json)
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/voice-call/package.json)

- 🟡 P2 **voice-call** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: voice-call: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec
  - author remediation:
    - Complete the OpenClaw install metadata so ClawHub can identify the install target.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-install-metadata-incomplete

- 🟡 P2 **voice-call** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: voice-call: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.4.10
    - buildOpenClawVersion:2026.7.1
  - author remediation:
    - Set the package minimum host version to the OpenClaw version range the plugin was built and tested against.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-min-host-version-drift

- 🟡 P2 **voice-call** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: voice-call: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:active
  - evidence:
    - [registerConfigMigration @ setup-api.js:35](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/voice-call/dist/setup-api.js#L35)
    - [registerGatewayMethod @ index.js:1065](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/voice-call/dist/index.js#L1065)
    - [registerGatewayMethod @ index.js:1092](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/voice-call/dist/index.js#L1092)
    - [registerGatewayMethod @ index.js:1105](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/voice-call/dist/index.js#L1105)
    - [registerGatewayMethod @ index.js:1117](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/voice-call/dist/index.js#L1117)
    - [registerGatewayMethod @ index.js:1134](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/voice-call/dist/index.js#L1134)
    - [registerGatewayMethod @ index.js:1165](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/voice-call/dist/index.js#L1165)
    - [registerGatewayMethod @ index.js:1183](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/voice-call/dist/index.js#L1183)
    - [registerGatewayMethod @ index.js:1200](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/voice-call/dist/index.js#L1200)
    - [registerGatewayMethod @ index.js:1224](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/voice-call/dist/index.js#L1224)
    - [registerService @ index.js:1365](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/voice-call/dist/index.js#L1365)

- 🟡 P2 **web-search-plus** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: web-search-plus: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/robbyczgw-cla/web-search-plus-plugin/blob/1b44c44e5495ad65fd37e8376c9fd752a97662c0/index.ts)

- 🟡 P2 **wecom** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: wecom: channel runtime needs envelope/config probes
  - state: open · compat:active
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
  - state: open · compat:active
  - evidence:
    - [registerChannel @ index.js:27](https://github.com/sunnoy/openclaw-plugin-wecom/blob/df2e426457a0e587bbfe63f185ffe002cbf61e6f/index.js#L27)
    - [registerHttpRoute @ index.js:56](https://github.com/sunnoy/openclaw-plugin-wecom/blob/df2e426457a0e587bbfe63f185ffe002cbf61e6f/index.js#L56)

- 🟡 P2 **whatsapp** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: whatsapp: channel runtime needs envelope/config probes
  - state: open · compat:active
  - evidence:
    - [createChatChannelPlugin @ channel-D_1cK7-w.js:677](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/whatsapp/dist/channel-D_1cK7-w.js#L677)

- 🟡 P2 **whatsapp** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: whatsapp: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [audio-decode @ package.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/whatsapp/package.json)
    - [baileys @ package.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/whatsapp/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/whatsapp/package.json)

- 🟡 P2 **whatsapp** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: whatsapp: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.4.25
    - buildOpenClawVersion:2026.7.2-beta.1
  - author remediation:
    - Set the package minimum host version to the OpenClaw version range the plugin was built and tested against.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-min-host-version-drift

- 🟡 P2 **yuanbao** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: yuanbao: channel runtime needs envelope/config probes
  - state: open · compat:active
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

- 🟡 P2 **yuanbao** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: yuanbao: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
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
  - state: open · compat:active
  - evidence:
    - registerCommand @ plugins/yuanbao/.crabpot-package/dist/index.js:16
    - registerCommand @ plugins/yuanbao/.crabpot-package/dist/index.js:17
    - registerCommand @ plugins/yuanbao/.crabpot-package/dist/index.js:18

- 🟡 P2 **yuanbao** `inspector-gap` `inspector-follow-up`
  - **runtime-tool-capture**: yuanbao: runtime tool schema needs registration capture
  - state: open · compat:none
  - evidence:
    - registerTool @ plugins/yuanbao/.crabpot-package/dist/src/business/tools/group.js:84
    - registerTool @ plugins/yuanbao/.crabpot-package/dist/src/business/tools/member.js:179
    - registerTool @ plugins/yuanbao/.crabpot-package/dist/src/business/tools/remind.js:622

- 🟡 P2 **zalo** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: zalo: channel runtime needs envelope/config probes
  - state: open · compat:active
  - evidence:
    - [createChatChannelPlugin @ channel-BOWhJVyl.js:268](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/zalo/dist/channel-BOWhJVyl.js#L268)

- 🟡 P2 **zalo** `deprecation-warning` `core-compat-adapter`
  - **channel-env-vars**: zalo: channelEnvVars legacy manifest metadata must stay covered
  - state: open · compat:deprecated · deprecated
  - evidence:
    - zalo
  - author remediation:
    - Move legacy channel environment variable metadata into the current setup/config metadata while keeping the old field until your supported OpenClaw range no longer needs it.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#channel-env-vars

- 🟡 P2 **zalo** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: zalo: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/zalo/package.json)

- 🟡 P2 **zalo** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: zalo: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec
  - author remediation:
    - Complete the OpenClaw install metadata so ClawHub can identify the install target.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-install-metadata-incomplete

- 🟡 P2 **zalo** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: zalo: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.4.10
    - buildOpenClawVersion:2026.7.1
  - author remediation:
    - Set the package minimum host version to the OpenClaw version range the plugin was built and tested against.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-min-host-version-drift

- 🟡 P2 **zalouser** `inspector-gap` `inspector-follow-up`
  - **channel-contract-probe**: zalouser: channel runtime needs envelope/config probes
  - state: open · compat:active
  - evidence:
    - [createChatChannelPlugin @ channel-C0ARGeer.js:586](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/zalouser/dist/channel-C0ARGeer.js#L586)

- 🟡 P2 **zalouser** `deprecation-warning` `core-compat-adapter`
  - **channel-env-vars**: zalouser: channelEnvVars legacy manifest metadata must stay covered
  - state: open · compat:deprecated · deprecated
  - evidence:
    - zalouser
  - author remediation:
    - Move legacy channel environment variable metadata into the current setup/config metadata while keeping the old field until your supported OpenClaw range no longer needs it.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#channel-env-vars

- 🟡 P2 **zalouser** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: zalouser: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/zalouser/package.json)
    - [zca-js @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/zalouser/package.json)
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/zalouser/package.json)

- 🟡 P2 **zalouser** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: zalouser: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec
  - author remediation:
    - Complete the OpenClaw install metadata so ClawHub can identify the install target.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-install-metadata-incomplete

- 🟡 P2 **zalouser** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: zalouser: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.4.10
    - buildOpenClawVersion:2026.7.1
  - author remediation:
    - Set the package minimum host version to the OpenClaw version range the plugin was built and tested against.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-min-host-version-drift

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
    - [before_tool_call @ generated-hooks.js:19](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-hooks.js#L19)

- 🟠 P1 **nemoclaw** `hook-runner`
  - contract: Hook returns preserve terminal, block, and approval semantics.
  - id: `hook.before_tool_call.terminal-block-approval:nemoclaw`
  - evidence:
    - [before_tool_call @ index.ts:385](https://github.com/NVIDIA/NemoClaw/blob/c1bda8069d95a84a9e16b0d292a5fe20ce7cea7d/nemoclaw/src/index.ts#L385)

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
    - [llm_output @ service.ts:117](https://github.com/vivekchand/clawmetry/blob/a8a39b68941f6ea8dea1562e34fefd721ad805d2/clawhub-plugin/src/service.ts#L117)

- 🟠 P1 **honcho** `hook-runner`
  - contract: LLM observer hooks receive documented prompt/output fields with expected redaction behavior.
  - id: `hook.llm-observer.privacy-payload:honcho`
  - evidence:
    - [agent_end @ capture.ts:164](https://github.com/plastic-labs/openclaw-honcho/blob/f35f9d474b977f2c43e6dbace1eb9323123347bc/hooks/capture.ts#L164)
    - [agent_end @ subagent.ts:34](https://github.com/plastic-labs/openclaw-honcho/blob/f35f9d474b977f2c43e6dbace1eb9323123347bc/hooks/subagent.ts#L34)

- 🟠 P1 **kitchen-sink** `hook-runner`
  - contract: LLM observer hooks receive documented prompt/output fields with expected redaction behavior.
  - id: `hook.llm-observer.privacy-payload:kitchen-sink`
  - evidence:
    - [agent_end @ generated-hooks.js:7](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-hooks.js#L7)
    - [llm_input @ generated-hooks.js:26](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-hooks.js#L26)
    - [llm_output @ generated-hooks.js:27](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-hooks.js#L27)

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
    - [agent_end @ index.js:1214](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/memory-lancedb/dist/index.js#L1214)

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
    - [agent_end @ index.js:805](https://github.com/MemTensor/MemOS-Cloud-OpenClaw-Plugin/blob/18cb8c7f9317d1348629d9f4cbd9507978de0b81/index.js#L805)

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

- 🟠 P1 **codex** `sdk-alias`
  - contract: Every observed OpenClaw plugin SDK import remains exported by the target OpenClaw package.
  - id: `sdk.import.package-export-cold-import:codex`
  - evidence:
    - [openclaw/plugin-sdk/expect-runtime @ command-handlers-Cpl9fUWv.js:23](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/codex/dist/command-handlers-Cpl9fUWv.js#L23)
    - [openclaw/plugin-sdk/expect-runtime @ dynamic-tools-BMLoaTeG.js:20](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/codex/dist/dynamic-tools-BMLoaTeG.js#L20)
    - [openclaw/plugin-sdk/expect-runtime @ index.js:37](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/codex/dist/index.js#L37)
    - [openclaw/plugin-sdk/expect-runtime @ provider.js:6](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/codex/dist/provider.js#L6)
    - [openclaw/plugin-sdk/expect-runtime @ rate-limits-Dhp04Rqo.js:4](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/codex/dist/rate-limits-Dhp04Rqo.js#L4)
    - [openclaw/plugin-sdk/expect-runtime @ session-catalog-7H112Tr_.js:25](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/codex/dist/session-catalog-7H112Tr_.js#L25)
    - [openclaw/plugin-sdk/expect-runtime @ shared-client-D4mFI9al.js:25](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/codex/dist/shared-client-D4mFI9al.js#L25)
    - [openclaw/plugin-sdk/node-host @ session-catalog-7H112Tr_.js:27](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/codex/dist/session-catalog-7H112Tr_.js#L27)

- 🟠 P1 **memory-lancedb** `sdk-alias`
  - contract: Every observed OpenClaw plugin SDK import remains exported by the target OpenClaw package.
  - id: `sdk.import.package-export-cold-import:memory-lancedb`
  - evidence:
    - [openclaw/plugin-sdk/expect-runtime @ index.js:8](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/memory-lancedb/dist/index.js#L8)

- 🟠 P1 **openclaw-qqbot** `sdk-alias`
  - contract: Every observed OpenClaw plugin SDK import remains exported by the target OpenClaw package.
  - id: `sdk.import.package-export-cold-import:openclaw-qqbot`
  - evidence:
    - [openclaw/plugin-sdk/expect-runtime @ config-schema-B5Mle_87.js:8](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/qqbot/dist/config-schema-B5Mle_87.js#L8)
    - [openclaw/plugin-sdk/expect-runtime @ gateway-be5-Ckdc.js:27](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/qqbot/dist/gateway-be5-Ckdc.js#L27)

- 🟡 P2 **a2a-gateway** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:a2a-gateway`
  - evidence:
    - [registerService @ index.ts:897](https://github.com/win4r/openclaw-a2a-gateway/blob/27621e23eb46aefe9a506e2d110f9784890c6712/index.ts#L897)

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
    - [registerMemoryPromptSection @ index.ts:97](https://github.com/plastic-labs/openclaw-honcho/blob/f35f9d474b977f2c43e6dbace1eb9323123347bc/index.ts#L97)
    - [registerMemoryRuntime @ runtime.ts:261](https://github.com/plastic-labs/openclaw-honcho/blob/f35f9d474b977f2c43e6dbace1eb9323123347bc/runtime.ts#L261)

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
    - [registerAutoEnableProbe @ generated-registrars.js:7](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-registrars.js#L7)
    - [registerChannel @ generated-registrars.js:8](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-registrars.js#L8)
    - [registerChannel @ kitchen-runtime.js:58](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/kitchen-runtime.js#L58)
    - [registerCommand @ generated-registrars.js:12](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-registrars.js#L12)
    - [registerCommand @ kitchen-runtime.js:53](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/kitchen-runtime.js#L53)
    - [registerCommand @ kitchen-runtime.js:54](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/kitchen-runtime.js#L54)
    - [registerCompactionProvider @ generated-registrars.js:13](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-registrars.js#L13)
    - [registerCompactionProvider @ kitchen-runtime.js:101](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/kitchen-runtime.js#L101)
    - [registerConfigMigration @ generated-registrars.js:14](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-registrars.js#L14)
    - [registerContextEngine @ generated-registrars.js:15](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-registrars.js#L15)
    - [registerContextEngine @ kitchen-runtime.js:104](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/kitchen-runtime.js#L104)
    - [registerDetachedTaskRuntime @ sync-surface.mjs:162](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/scripts/sync-surface.mjs#L162)
    - [registerDetachedTaskRuntime @ generated-registrars.js:17](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-registrars.js#L17)
    - [registerDetachedTaskRuntime @ kitchen-runtime.js:92](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/kitchen-runtime.js#L92)
    - [registerGatewayDiscoveryService @ generated-registrars.js:19](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-registrars.js#L19)
    - [registerGatewayMethod @ generated-registrars.js:20](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-registrars.js#L20)
    - [registerGatewayMethod @ kitchen-runtime.js:116](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/kitchen-runtime.js#L116)
    - [registerHook @ generated-registrars.js:21](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-registrars.js#L21)
    - [registerHostedMediaResolver @ generated-registrars.js:22](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-registrars.js#L22)
    - [registerHttpRoute @ generated-registrars.js:23](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-registrars.js#L23)
    - [registerHttpRoute @ kitchen-runtime.js:114](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/kitchen-runtime.js#L114)
    - [registerInteractiveHandler @ generated-registrars.js:25](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-registrars.js#L25)
    - [registerInteractiveHandler @ kitchen-runtime.js:56](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/kitchen-runtime.js#L56)
    - [registerMeetingNotesSourceProvider @ sync-surface.mjs:165](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/scripts/sync-surface.mjs#L165)
    - [registerMemoryCapability @ generated-registrars.js:27](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-registrars.js#L27)
    - [registerMemoryCorpusSupplement @ generated-registrars.js:28](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-registrars.js#L28)
    - [registerMemoryCorpusSupplement @ kitchen-runtime.js:98](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/kitchen-runtime.js#L98)
    - [registerMemoryFlushPlan @ generated-registrars.js:30](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-registrars.js#L30)
    - [registerMemoryPromptSection @ generated-registrars.js:31](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-registrars.js#L31)
    - [registerMemoryPromptSupplement @ generated-registrars.js:32](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-registrars.js#L32)
    - [registerMemoryPromptSupplement @ kitchen-runtime.js:120](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/kitchen-runtime.js#L120)
    - [registerMemoryRuntime @ generated-registrars.js:33](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-registrars.js#L33)
    - [registerNodeCliFeature @ sync-surface.mjs:171](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/scripts/sync-surface.mjs#L171)
    - [registerNodeCliFeature @ generated-registrars.js:37](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-registrars.js#L37)
    - [registerNodeHostCommand @ generated-registrars.js:38](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-registrars.js#L38)
    - [registerNodeInvokePolicy @ generated-registrars.js:39](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-registrars.js#L39)
    - [registerReload @ generated-registrars.js:43](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-registrars.js#L43)
    - [registerSecurityAuditCollector @ generated-registrars.js:45](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-registrars.js#L45)
    - [registerService @ generated-registrars.js:46](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-registrars.js#L46)
    - [registerService @ kitchen-runtime.js:113](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/kitchen-runtime.js#L113)

- 🟡 P2 **lossless-claw** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:lossless-claw`
  - evidence:
    - [registerCommand @ index.ts:1696](https://github.com/Martian-Engineering/lossless-claw/blob/a97c65888838dad9ac665ce10c6f54d0a370a02b/src/plugin/index.ts#L1696)
    - [registerContextEngine @ index.ts:1647](https://github.com/Martian-Engineering/lossless-claw/blob/a97c65888838dad9ac665ce10c6f54d0a370a02b/src/plugin/index.ts#L1647)

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
    - [registerCommand @ index.ts:348](https://github.com/NVIDIA/NemoClaw/blob/c1bda8069d95a84a9e16b0d292a5fe20ce7cea7d/nemoclaw/src/index.ts#L348)

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
    - [defineChannelPluginEntry @ channel.ts:333](https://github.com/agentchatme/agentchat/blob/1460cece00ebd3829fb39d5db5ee23050937ed02/integrations/openclaw-channel/src/channel.ts#L333)

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
    - [registerChannel @ generated-registrars.js:8](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/generated-registrars.js#L8)
    - [registerChannel @ kitchen-runtime.js:58](https://github.com/openclaw/kitchen-sink/blob/b3d60a79f6d6f3929a1740b05d2b6f6028646c02/src/kitchen-runtime.js#L58)

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

- 🟡 P2 **honcho** `hook-runner`
  - contract: Legacy before_agent_start remains wired until plugins migrate to before_model_resolve and before_prompt_build.
  - id: `hook.compat.before-agent-start-migration:honcho`
  - evidence:
    - [before_agent_start @ subagent.ts:18](https://github.com/plastic-labs/openclaw-honcho/blob/f35f9d474b977f2c43e6dbace1eb9323123347bc/hooks/subagent.ts#L18)

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

- 🟡 P2 **a2a-gateway** `manifest-loader`
  - contract: Manifest top-level fields are represented in target OpenClaw PluginManifest.
  - id: `manifest.schema.top-level-fields:a2a-gateway`
  - evidence:
    - [defaultConfig @ openclaw.plugin.json](https://github.com/win4r/openclaw-a2a-gateway/blob/27621e23eb46aefe9a506e2d110f9784890c6712/openclaw.plugin.json)

- 🟡 P2 **agentchat** `manifest-loader`
  - contract: Manifest top-level fields are represented in target OpenClaw PluginManifest.
  - id: `manifest.schema.top-level-fields:agentchat`
  - evidence:
    - [displayName @ openclaw.plugin.json](https://github.com/agentchatme/agentchat/blob/1460cece00ebd3829fb39d5db5ee23050937ed02/integrations/openclaw-channel/openclaw.plugin.json)
    - [homepage @ openclaw.plugin.json](https://github.com/agentchatme/agentchat/blob/1460cece00ebd3829fb39d5db5ee23050937ed02/integrations/openclaw-channel/openclaw.plugin.json)

- 🟡 P2 **dingtalk-connector** `manifest-loader`
  - contract: Manifest top-level fields are represented in target OpenClaw PluginManifest.
  - id: `manifest.schema.top-level-fields:dingtalk-connector`
  - evidence:
    - [author @ openclaw.plugin.json](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/openclaw.plugin.json)
    - [main @ openclaw.plugin.json](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/openclaw.plugin.json)

- 🟡 P2 **qqbot** `manifest-loader`
  - contract: Manifest top-level fields are represented in target OpenClaw PluginManifest.
  - id: `manifest.schema.top-level-fields:qqbot`
  - evidence:
    - [capabilities @ openclaw.plugin.json](https://github.com/tencent-connect/openclaw-qqbot/blob/7ceb7f0913d15417c5a74d82442a672ef0382c64/openclaw.plugin.json)
    - [extensions @ openclaw.plugin.json](https://github.com/tencent-connect/openclaw-qqbot/blob/7ceb7f0913d15417c5a74d82442a672ef0382c64/openclaw.plugin.json)

- 🟡 P2 **a2a-gateway** `package-loader`
  - contract: Package metadata declares the OpenClaw plugin API range used by the plugin.
  - id: `package.compat.plugin-api-range:a2a-gateway`
  - evidence:
    - [package.json](https://github.com/win4r/openclaw-a2a-gateway/blob/27621e23eb46aefe9a506e2d110f9784890c6712/package.json)

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
    - [extension:./dist/index.js @ index.js](https://github.com/agentchatme/agentchat/blob/1460cece00ebd3829fb39d5db5ee23050937ed02/integrations/openclaw-channel/dist/index.js)
    - [setupEntry:./dist/setup-entry.js @ setup-entry.js](https://github.com/agentchatme/agentchat/blob/1460cece00ebd3829fb39d5db5ee23050937ed02/integrations/openclaw-channel/dist/setup-entry.js)

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
    - [extension:./dist/index.js @ index.js](https://github.com/plastic-labs/openclaw-honcho/blob/f35f9d474b977f2c43e6dbace1eb9323123347bc/dist/index.js)

- 🟡 P2 **hyperspell** `package-loader`
  - contract: Inspector can build or resolve source aliases before cold importing package entrypoints.
  - id: `package.entrypoint.build-before-cold-import:hyperspell`
  - evidence:
    - [extension:./dist/index.js @ index.js](https://github.com/hyperspell/hyperspell-openclaw/blob/056dcd9710a26b84bbef4ba72353e99b41af8f73/dist/index.js)

- 🟡 P2 **lossless-claw** `package-loader`
  - contract: Inspector can build or resolve source aliases before cold importing package entrypoints.
  - id: `package.entrypoint.build-before-cold-import:lossless-claw`
  - evidence:
    - [extension:./dist/index.js @ index.js](https://github.com/Martian-Engineering/lossless-claw/blob/a97c65888838dad9ac665ce10c6f54d0a370a02b/dist/index.js)

- 🟡 P2 **memory-tencentdb** `package-loader`
  - contract: Inspector can build or resolve source aliases before cold importing package entrypoints.
  - id: `package.entrypoint.build-before-cold-import:memory-tencentdb`
  - evidence:
    - extension:./dist/index.js -> plugins/memory-tencentdb/.crabpot-package/openclaw-plugin/dist/index.js

- 🟡 P2 **nemoclaw** `package-loader`
  - contract: Inspector can build or resolve source aliases before cold importing package entrypoints.
  - id: `package.entrypoint.build-before-cold-import:nemoclaw`
  - evidence:
    - [extension:./dist/index.js @ index.js](https://github.com/NVIDIA/NemoClaw/blob/c1bda8069d95a84a9e16b0d292a5fe20ce7cea7d/nemoclaw/dist/index.js)

- 🟡 P2 **opik-openclaw** `package-loader`
  - contract: Inspector can build or resolve source aliases before cold importing package entrypoints.
  - id: `package.entrypoint.build-before-cold-import:opik-openclaw`
  - evidence:
    - [runtimeExtension:./dist/index.js @ index.js](https://github.com/comet-ml/opik-openclaw/blob/fac4cc3f0fa96e96b1ee2583a0525f3681b017b5/dist/index.js)

- 🟡 P2 **a2a-gateway** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:a2a-gateway`
  - evidence:
    - [@a2a-js/sdk @ package.json](https://github.com/win4r/openclaw-a2a-gateway/blob/27621e23eb46aefe9a506e2d110f9784890c6712/package.json)
    - [@bufbuild/protobuf @ package.json](https://github.com/win4r/openclaw-a2a-gateway/blob/27621e23eb46aefe9a506e2d110f9784890c6712/package.json)
    - [@grpc/grpc-js @ package.json](https://github.com/win4r/openclaw-a2a-gateway/blob/27621e23eb46aefe9a506e2d110f9784890c6712/package.json)
    - [express @ package.json](https://github.com/win4r/openclaw-a2a-gateway/blob/27621e23eb46aefe9a506e2d110f9784890c6712/package.json)
    - [multicast-dns @ package.json](https://github.com/win4r/openclaw-a2a-gateway/blob/27621e23eb46aefe9a506e2d110f9784890c6712/package.json)
    - [uuid @ package.json](https://github.com/win4r/openclaw-a2a-gateway/blob/27621e23eb46aefe9a506e2d110f9784890c6712/package.json)
    - [ws @ package.json](https://github.com/win4r/openclaw-a2a-gateway/blob/27621e23eb46aefe9a506e2d110f9784890c6712/package.json)

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
    - [@honcho-ai/sdk @ package.json](https://github.com/plastic-labs/openclaw-honcho/blob/f35f9d474b977f2c43e6dbace1eb9323123347bc/package.json)
    - [@sinclair/typebox @ package.json](https://github.com/plastic-labs/openclaw-honcho/blob/f35f9d474b977f2c43e6dbace1eb9323123347bc/package.json)

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
    - [@sinclair/typebox @ package.json](https://github.com/Martian-Engineering/lossless-claw/blob/a97c65888838dad9ac665ce10c6f54d0a370a02b/package.json)

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
    - [execa @ package.json](https://github.com/NVIDIA/NemoClaw/blob/c1bda8069d95a84a9e16b0d292a5fe20ce7cea7d/nemoclaw/package.json)
    - [json5 @ package.json](https://github.com/NVIDIA/NemoClaw/blob/c1bda8069d95a84a9e16b0d292a5fe20ce7cea7d/nemoclaw/package.json)
    - [tar @ package.json](https://github.com/NVIDIA/NemoClaw/blob/c1bda8069d95a84a9e16b0d292a5fe20ce7cea7d/nemoclaw/package.json)
    - [yaml @ package.json](https://github.com/NVIDIA/NemoClaw/blob/c1bda8069d95a84a9e16b0d292a5fe20ce7cea7d/nemoclaw/package.json)

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
    - protobufjs @ plugins/yuanbao/.crabpot-package/package.json
    - semver @ plugins/yuanbao/.crabpot-package/package.json
    - ws @ plugins/yuanbao/.crabpot-package/package.json

- 🟡 P2 **a2a-gateway** `package-loader`
  - contract: Inspector can compile or load TypeScript source entrypoints before registration capture.
  - id: `package.entrypoint.typescript-loader:a2a-gateway`
  - evidence:
    - [extension @ index.ts](https://github.com/win4r/openclaw-a2a-gateway/blob/27621e23eb46aefe9a506e2d110f9784890c6712/index.ts)

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
    - package:1.4.0
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

- 🟡 P2 **a2a-gateway** `sdk-alias`
  - contract: Root plugin SDK barrel remains importable or has a machine-readable migration path.
  - id: `sdk.import.root-barrel-cold-import:a2a-gateway`
  - evidence:
    - [openclaw/plugin-sdk @ types.ts:14](https://github.com/win4r/openclaw-a2a-gateway/blob/27621e23eb46aefe9a506e2d110f9784890c6712/src/types.ts#L14)

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
    - [openclaw/plugin-sdk @ index.ts:17](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/index.ts#L17)
    - [openclaw/plugin-sdk @ channel.ts:5](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/channel.ts#L5)
    - [openclaw/plugin-sdk @ accounts.ts:2](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/config/accounts.ts#L2)
    - [openclaw/plugin-sdk @ connection.ts:16](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/core/connection.ts#L16)
    - [openclaw/plugin-sdk @ provider.ts:14](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/core/provider.ts#L14)
    - [openclaw/plugin-sdk @ directory.ts:1](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/directory.ts#L1)
    - [openclaw/plugin-sdk @ gateway-methods.ts:7](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/gateway-methods.ts#L7)
    - [openclaw/plugin-sdk @ onboarding.ts:5](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/onboarding.ts#L5)
    - [openclaw/plugin-sdk @ runtime.ts:1](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/runtime.ts#L1)
    - [openclaw/plugin-sdk @ card-bridge.ts:1](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/services/card-bridge.ts#L1)
    - [openclaw/plugin-sdk @ agent.ts:8](https://github.com/DingTalk-Real-AI/dingtalk-openclaw-connector/blob/39bdb2d8a7468237858906d255a717cd03b037ad/src/utils/agent.ts#L8)

- 🟡 P2 **honcho** `sdk-alias`
  - contract: Root plugin SDK barrel remains importable or has a machine-readable migration path.
  - id: `sdk.import.root-barrel-cold-import:honcho`
  - evidence:
    - [openclaw/plugin-sdk @ cli.ts:8](https://github.com/plastic-labs/openclaw-honcho/blob/f35f9d474b977f2c43e6dbace1eb9323123347bc/commands/cli.ts#L8)
    - [openclaw/plugin-sdk @ capture.ts:2](https://github.com/plastic-labs/openclaw-honcho/blob/f35f9d474b977f2c43e6dbace1eb9323123347bc/hooks/capture.ts#L2)
    - [openclaw/plugin-sdk @ context.ts:2](https://github.com/plastic-labs/openclaw-honcho/blob/f35f9d474b977f2c43e6dbace1eb9323123347bc/hooks/context.ts#L2)
    - [openclaw/plugin-sdk @ gateway.ts:2](https://github.com/plastic-labs/openclaw-honcho/blob/f35f9d474b977f2c43e6dbace1eb9323123347bc/hooks/gateway.ts#L2)
    - [openclaw/plugin-sdk @ subagent.ts:2](https://github.com/plastic-labs/openclaw-honcho/blob/f35f9d474b977f2c43e6dbace1eb9323123347bc/hooks/subagent.ts#L2)
    - [openclaw/plugin-sdk @ state.ts:9](https://github.com/plastic-labs/openclaw-honcho/blob/f35f9d474b977f2c43e6dbace1eb9323123347bc/state.ts#L9)
    - [openclaw/plugin-sdk @ ask.ts:3](https://github.com/plastic-labs/openclaw-honcho/blob/f35f9d474b977f2c43e6dbace1eb9323123347bc/tools/ask.ts#L3)
    - [openclaw/plugin-sdk @ context.ts:3](https://github.com/plastic-labs/openclaw-honcho/blob/f35f9d474b977f2c43e6dbace1eb9323123347bc/tools/context.ts#L3)
    - [openclaw/plugin-sdk @ memory-passthrough.ts:3](https://github.com/plastic-labs/openclaw-honcho/blob/f35f9d474b977f2c43e6dbace1eb9323123347bc/tools/memory-passthrough.ts#L3)
    - [openclaw/plugin-sdk @ message-search.ts:3](https://github.com/plastic-labs/openclaw-honcho/blob/f35f9d474b977f2c43e6dbace1eb9323123347bc/tools/message-search.ts#L3)
    - [openclaw/plugin-sdk @ search.ts:3](https://github.com/plastic-labs/openclaw-honcho/blob/f35f9d474b977f2c43e6dbace1eb9323123347bc/tools/search.ts#L3)
    - [openclaw/plugin-sdk @ session.ts:3](https://github.com/plastic-labs/openclaw-honcho/blob/f35f9d474b977f2c43e6dbace1eb9323123347bc/tools/session.ts#L3)

- 🟡 P2 **hyperspell** `sdk-alias`
  - contract: Root plugin SDK barrel remains importable or has a machine-readable migration path.
  - id: `sdk.import.root-barrel-cold-import:hyperspell`
  - evidence:
    - [openclaw/plugin-sdk @ slash.ts:1](https://github.com/hyperspell/hyperspell-openclaw/blob/056dcd9710a26b84bbef4ba72353e99b41af8f73/commands/slash.ts#L1)
    - [openclaw/plugin-sdk @ tools.ts:2](https://github.com/hyperspell/hyperspell-openclaw/blob/056dcd9710a26b84bbef4ba72353e99b41af8f73/graph/tools.ts#L2)
    - [openclaw/plugin-sdk @ index.ts:1](https://github.com/hyperspell/hyperspell-openclaw/blob/056dcd9710a26b84bbef4ba72353e99b41af8f73/index.ts#L1)

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
    - [openclaw/plugin-sdk @ index.ts:1](https://github.com/comet-ml/opik-openclaw/blob/fac4cc3f0fa96e96b1ee2583a0525f3681b017b5/index.ts#L1)
    - [openclaw/plugin-sdk @ index.ts:2](https://github.com/comet-ml/opik-openclaw/blob/fac4cc3f0fa96e96b1ee2583a0525f3681b017b5/index.ts#L2)
    - [openclaw/plugin-sdk @ cli.ts:1](https://github.com/comet-ml/opik-openclaw/blob/fac4cc3f0fa96e96b1ee2583a0525f3681b017b5/src/cli.ts#L1)
    - [openclaw/plugin-sdk @ configure.ts:2](https://github.com/comet-ml/opik-openclaw/blob/fac4cc3f0fa96e96b1ee2583a0525f3681b017b5/src/configure.ts#L2)
    - [openclaw/plugin-sdk @ service.ts:5](https://github.com/comet-ml/opik-openclaw/blob/fac4cc3f0fa96e96b1ee2583a0525f3681b017b5/src/service.ts#L5)
    - [openclaw/plugin-sdk @ service.ts:6](https://github.com/comet-ml/opik-openclaw/blob/fac4cc3f0fa96e96b1ee2583a0525f3681b017b5/src/service.ts#L6)
    - [openclaw/plugin-sdk @ llm.ts:1](https://github.com/comet-ml/opik-openclaw/blob/fac4cc3f0fa96e96b1ee2583a0525f3681b017b5/src/service/hooks/llm.ts#L1)
    - [openclaw/plugin-sdk @ subagent.ts:1](https://github.com/comet-ml/opik-openclaw/blob/fac4cc3f0fa96e96b1ee2583a0525f3681b017b5/src/service/hooks/subagent.ts#L1)
    - [openclaw/plugin-sdk @ tool.ts:1](https://github.com/comet-ml/opik-openclaw/blob/fac4cc3f0fa96e96b1ee2583a0525f3681b017b5/src/service/hooks/tool.ts#L1)

- 🟡 P2 **qqbot** `sdk-alias`
  - contract: Root plugin SDK barrel remains importable or has a machine-readable migration path.
  - id: `sdk.import.root-barrel-cold-import:qqbot`
  - evidence:
    - [openclaw/plugin-sdk @ index.ts:1](https://github.com/tencent-connect/openclaw-qqbot/blob/7ceb7f0913d15417c5a74d82442a672ef0382c64/index.ts#L1)
    - [openclaw/plugin-sdk @ index.ts:2](https://github.com/tencent-connect/openclaw-qqbot/blob/7ceb7f0913d15417c5a74d82442a672ef0382c64/index.ts#L2)
    - [openclaw/plugin-sdk @ api.ts:7](https://github.com/tencent-connect/openclaw-qqbot/blob/7ceb7f0913d15417c5a74d82442a672ef0382c64/src/api.ts#L7)
    - [openclaw/plugin-sdk @ approval-handler.ts:12](https://github.com/tencent-connect/openclaw-qqbot/blob/7ceb7f0913d15417c5a74d82442a672ef0382c64/src/approval-handler.ts#L12)
    - [openclaw/plugin-sdk @ config.ts:2](https://github.com/tencent-connect/openclaw-qqbot/blob/7ceb7f0913d15417c5a74d82442a672ef0382c64/src/config.ts#L2)
    - [openclaw/plugin-sdk @ onboarding.ts:13](https://github.com/tencent-connect/openclaw-qqbot/blob/7ceb7f0913d15417c5a74d82442a672ef0382c64/src/onboarding.ts#L13)
    - [openclaw/plugin-sdk @ proactive.ts:67](https://github.com/tencent-connect/openclaw-qqbot/blob/7ceb7f0913d15417c5a74d82442a672ef0382c64/src/proactive.ts#L67)
    - [openclaw/plugin-sdk @ runtime.ts:1](https://github.com/tencent-connect/openclaw-qqbot/blob/7ceb7f0913d15417c5a74d82442a672ef0382c64/src/runtime.ts#L1)
    - [openclaw/plugin-sdk @ channel.ts:1](https://github.com/tencent-connect/openclaw-qqbot/blob/7ceb7f0913d15417c5a74d82442a672ef0382c64/src/tools/channel.ts#L1)
    - [openclaw/plugin-sdk @ remind.ts:1](https://github.com/tencent-connect/openclaw-qqbot/blob/7ceb7f0913d15417c5a74d82442a672ef0382c64/src/tools/remind.ts#L1)

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
    - registerTool @ plugins/yuanbao/.crabpot-package/dist/src/business/tools/member.js:179
    - registerTool @ plugins/yuanbao/.crabpot-package/dist/src/business/tools/remind.js:622

- 🟢 P3 **clawmetry** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:clawmetry`
  - evidence:
    - [registerService @ index.ts:20](https://github.com/vivekchand/clawmetry/blob/a8a39b68941f6ea8dea1562e34fefd721ad805d2/clawhub-plugin/index.ts#L20)

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
    - [registerService @ cli.js:89557](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/dist/cli.js#L89557)
    - [registerService @ index.js:87593](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/dist/index.js#L87593)
    - [registerService @ index.ts:2050](https://github.com/BlockRunAI/ClawRouter/blob/e3187611940d4f59a12b8ea017d001900590f2ff/src/index.ts#L2050)

- 🟢 P3 **codex** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:codex`
  - evidence:
    - [registerCommand @ index.js:3831](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/codex/dist/index.js#L3831)
    - [registerNodeHostCommand @ index.js:3795](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/codex/dist/index.js#L3795)
    - [registerNodeHostCommand @ index.js:3829](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/codex/dist/index.js#L3829)
    - [registerNodeInvokePolicy @ index.js:3797](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/codex/dist/index.js#L3797)
    - [registerNodeInvokePolicy @ index.js:3830](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/codex/dist/index.js#L3830)
    - [registerSessionCatalog @ session-catalog-7H112Tr_.js:2385](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/codex/dist/session-catalog-7H112Tr_.js#L2385)

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
    - [registerService @ index.js:9](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/diagnostics-otel/dist/index.js#L9)

- 🟢 P3 **diagnostics-prometheus** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:diagnostics-prometheus`
  - evidence:
    - [registerHttpRoute @ index.js:633](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/diagnostics-prometheus/dist/index.js#L633)
    - [registerService @ index.js:632](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/diagnostics-prometheus/dist/index.js#L632)

- 🟢 P3 **diffs** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:diffs`
  - evidence:
    - [registerHttpRoute @ index.js:2512](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/diffs/dist/index.js#L2512)

- 🟢 P3 **google-meet** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:google-meet`
  - evidence:
    - [registerGatewayMethod @ index.js:5272](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/google-meet/dist/index.js#L5272)
    - [registerGatewayMethod @ index.js:5290](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/google-meet/dist/index.js#L5290)
    - [registerGatewayMethod @ index.js:5307](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/google-meet/dist/index.js#L5307)
    - [registerGatewayMethod @ index.js:5314](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/google-meet/dist/index.js#L5314)
    - [registerGatewayMethod @ index.js:5331](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/google-meet/dist/index.js#L5331)
    - [registerGatewayMethod @ index.js:5341](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/google-meet/dist/index.js#L5341)
    - [registerGatewayMethod @ index.js:5352](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/google-meet/dist/index.js#L5352)
    - [registerGatewayMethod @ index.js:5372](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/google-meet/dist/index.js#L5372)
    - [registerGatewayMethod @ index.js:5387](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/google-meet/dist/index.js#L5387)
    - [registerGatewayMethod @ index.js:5404](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/google-meet/dist/index.js#L5404)
    - [registerGatewayMethod @ index.js:5422](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/google-meet/dist/index.js#L5422)
    - [registerGatewayMethod @ index.js:5429](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/google-meet/dist/index.js#L5429)
    - [registerGatewayMethod @ index.js:5441](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/google-meet/dist/index.js#L5441)
    - [registerGatewayMethod @ index.js:5452](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/google-meet/dist/index.js#L5452)
    - [registerGatewayMethod @ index.js:5464](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/google-meet/dist/index.js#L5464)
    - [registerGatewayMethod @ index.js:5482](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/google-meet/dist/index.js#L5482)
    - [registerNodeHostCommand @ index.js:5654](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/google-meet/dist/index.js#L5654)
    - [registerNodeInvokePolicy @ index.js:5660](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/google-meet/dist/index.js#L5660)

- 🟢 P3 **matrix** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:matrix`
  - evidence:
    - [registerGatewayMethod @ index.ts:15](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/matrix/index.ts#L15)
    - [registerGatewayMethod @ index.ts:20](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/matrix/index.ts#L20)
    - [registerGatewayMethod @ index.ts:25](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/matrix/index.ts#L25)

- 🟢 P3 **mattermost** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:mattermost`
  - evidence:
    - [registerHttpRoute @ slash-state.ts:417](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/mattermost/src/mattermost/slash-state.ts#L417)

- 🟢 P3 **memory-lancedb** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:memory-lancedb`
  - evidence:
    - [registerService @ index.js:1265](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/memory-lancedb/dist/index.js#L1265)
    - [registerService @ index.js:846](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/memory-lancedb/dist/index.js#L846)

- 🟢 P3 **memos-cloud** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:memos-cloud`
  - evidence:
    - [registerHook @ index.js:732](https://github.com/MemTensor/MemOS-Cloud-OpenClaw-Plugin/blob/18cb8c7f9317d1348629d9f4cbd9507978de0b81/index.js#L732)

- 🟢 P3 **nostr** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:nostr`
  - evidence:
    - [registerHttpRoute @ index.js:71](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/nostr/dist/index.js#L71)

- 🟢 P3 **openclaw-qqbot** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:openclaw-qqbot`
  - evidence:
    - [registerCommand @ channel-entry-Cj1lWXpt.js:111](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/qqbot/dist/channel-entry-Cj1lWXpt.js#L111)

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
    - [registerConfigMigration @ setup-api.js:35](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/voice-call/dist/setup-api.js#L35)
    - [registerGatewayMethod @ index.js:1065](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/voice-call/dist/index.js#L1065)
    - [registerGatewayMethod @ index.js:1092](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/voice-call/dist/index.js#L1092)
    - [registerGatewayMethod @ index.js:1105](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/voice-call/dist/index.js#L1105)
    - [registerGatewayMethod @ index.js:1117](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/voice-call/dist/index.js#L1117)
    - [registerGatewayMethod @ index.js:1134](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/voice-call/dist/index.js#L1134)
    - [registerGatewayMethod @ index.js:1165](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/voice-call/dist/index.js#L1165)
    - [registerGatewayMethod @ index.js:1183](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/voice-call/dist/index.js#L1183)
    - [registerGatewayMethod @ index.js:1200](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/voice-call/dist/index.js#L1200)
    - [registerGatewayMethod @ index.js:1224](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/voice-call/dist/index.js#L1224)
    - [registerService @ index.js:1365](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/voice-call/dist/index.js#L1365)

- 🟢 P3 **bluebubbles** `channel-runtime`
  - contract: Channel setup, message envelope, sender metadata, and config schema remain stable.
  - id: `channel.runtime.envelope-config-metadata:bluebubbles`
  - evidence:
    - [createChatChannelPlugin @ channel-BSIXOcHe.js:930](https://github.com/openclaw/openclaw/blob/eeef4864494f859838fec1586bedbab1f8fa5702/extensions/bluebubbles/dist/channel-BSIXOcHe.js#L930)

- 🟢 P3 **discord** `channel-runtime`
  - contract: Channel setup, message envelope, sender metadata, and config schema remain stable.
  - id: `channel.runtime.envelope-config-metadata:discord`
  - evidence:
    - [createChatChannelPlugin @ channel-DGWPH5u3.js:403](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/discord/dist/channel-DGWPH5u3.js#L403)

- 🟢 P3 **feishu** `channel-runtime`
  - contract: Channel setup, message envelope, sender metadata, and config schema remain stable.
  - id: `channel.runtime.envelope-config-metadata:feishu`
  - evidence:
    - [createChatChannelPlugin @ channel-DRQRQQQ3.js:2049](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/feishu/dist/channel-DRQRQQQ3.js#L2049)

- 🟢 P3 **lightclawbot** `channel-runtime`
  - contract: Channel setup, message envelope, sender metadata, and config schema remain stable.
  - id: `channel.runtime.envelope-config-metadata:lightclawbot`
  - evidence:
    - createChatChannelPlugin @ plugins/lightclawbot/.crabpot-package/dist/src/channel.js:45
    - defineChannelPluginEntry @ plugins/lightclawbot/.crabpot-package/dist/index.js:25

- 🟢 P3 **mattermost** `channel-runtime`
  - contract: Channel setup, message envelope, sender metadata, and config schema remain stable.
  - id: `channel.runtime.envelope-config-metadata:mattermost`
  - evidence:
    - [createChatChannelPlugin @ channel.ts:757](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/mattermost/src/channel.ts#L757)

- 🟢 P3 **msteams** `channel-runtime`
  - contract: Channel setup, message envelope, sender metadata, and config schema remain stable.
  - id: `channel.runtime.envelope-config-metadata:msteams`
  - evidence:
    - [createChatChannelPlugin @ channel-Cf5LJ4aO.js:681](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/msteams/dist/channel-Cf5LJ4aO.js#L681)

- 🟢 P3 **nextcloud-talk** `channel-runtime`
  - contract: Channel setup, message envelope, sender metadata, and config schema remain stable.
  - id: `channel.runtime.envelope-config-metadata:nextcloud-talk`
  - evidence:
    - [createChatChannelPlugin @ channel-BMKRTDSP.js:2049](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/nextcloud-talk/dist/channel-BMKRTDSP.js#L2049)

- 🟢 P3 **nostr** `channel-runtime`
  - contract: Channel setup, message envelope, sender metadata, and config schema remain stable.
  - id: `channel.runtime.envelope-config-metadata:nostr`
  - evidence:
    - [createChatChannelPlugin @ channel-B2Y66pl3.js:1348](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/nostr/dist/channel-B2Y66pl3.js#L1348)

- 🟢 P3 **synology-chat** `channel-runtime`
  - contract: Channel setup, message envelope, sender metadata, and config schema remain stable.
  - id: `channel.runtime.envelope-config-metadata:synology-chat`
  - evidence:
    - [createChatChannelPlugin @ channel-C6bhvNZi.js:1126](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/synology-chat/dist/channel-C6bhvNZi.js#L1126)

- 🟢 P3 **telnyx-sms** `channel-runtime`
  - contract: Channel setup, message envelope, sender metadata, and config schema remain stable.
  - id: `channel.runtime.envelope-config-metadata:telnyx-sms`
  - evidence:
    - [defineChannelPluginEntry @ index.ts:207](https://github.com/team-telnyx/telnyx-openclaw-sms-channel/blob/6e3956246cd3e0e72af649d2fd75dee6f3e46966/index.ts#L207)

- 🟢 P3 **tlon** `channel-runtime`
  - contract: Channel setup, message envelope, sender metadata, and config schema remain stable.
  - id: `channel.runtime.envelope-config-metadata:tlon`
  - evidence:
    - [createChatChannelPlugin @ channel-DEy-ysbN.js:138](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/tlon/dist/channel-DEy-ysbN.js#L138)

- 🟢 P3 **twitch** `channel-runtime`
  - contract: Channel setup, message envelope, sender metadata, and config schema remain stable.
  - id: `channel.runtime.envelope-config-metadata:twitch`
  - evidence:
    - [createChatChannelPlugin @ plugin-C5o3rImF.js:1271](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/twitch/dist/plugin-C5o3rImF.js#L1271)

- 🟢 P3 **whatsapp** `channel-runtime`
  - contract: Channel setup, message envelope, sender metadata, and config schema remain stable.
  - id: `channel.runtime.envelope-config-metadata:whatsapp`
  - evidence:
    - [createChatChannelPlugin @ channel-D_1cK7-w.js:677](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/whatsapp/dist/channel-D_1cK7-w.js#L677)

- 🟢 P3 **zalo** `channel-runtime`
  - contract: Channel setup, message envelope, sender metadata, and config schema remain stable.
  - id: `channel.runtime.envelope-config-metadata:zalo`
  - evidence:
    - [createChatChannelPlugin @ channel-BOWhJVyl.js:268](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/zalo/dist/channel-BOWhJVyl.js#L268)

- 🟢 P3 **zalouser** `channel-runtime`
  - contract: Channel setup, message envelope, sender metadata, and config schema remain stable.
  - id: `channel.runtime.envelope-config-metadata:zalouser`
  - evidence:
    - [createChatChannelPlugin @ channel-C0ARGeer.js:586](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/zalouser/dist/channel-C0ARGeer.js#L586)

- 🟢 P3 **memos-cloud** `hook-runner`
  - contract: Legacy before_agent_start remains wired until plugins migrate to before_model_resolve and before_prompt_build.
  - id: `hook.compat.before-agent-start-migration:memos-cloud`
  - evidence:
    - [before_agent_start @ index.js:802](https://github.com/MemTensor/MemOS-Cloud-OpenClaw-Plugin/blob/18cb8c7f9317d1348629d9f4cbd9507978de0b81/index.js#L802)

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

- 🟢 P3 **mattermost** `manifest-loader`
  - contract: OpenClaw plugin manifests declare a human-readable display name for registry and tooling metadata.
  - id: `manifest.metadata.name:mattermost`
  - evidence:
    - [openclaw.plugin.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/mattermost/openclaw.plugin.json)

- 🟢 P3 **aiwerk-mcp-bridge** `manifest-loader`
  - contract: Manifest top-level fields are represented in target OpenClaw PluginManifest.
  - id: `manifest.schema.top-level-fields:aiwerk-mcp-bridge`
  - evidence:
    - entryPoint @ plugins/aiwerk-mcp-bridge/.crabpot-package/openclaw.plugin.json
    - required @ plugins/aiwerk-mcp-bridge/.crabpot-package/openclaw.plugin.json

- 🟢 P3 **diffs** `manifest-loader`
  - contract: Manifest top-level fields are represented in target OpenClaw PluginManifest.
  - id: `manifest.schema.top-level-fields:diffs`
  - evidence:
    - [catalog @ openclaw.plugin.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/diffs/openclaw.plugin.json)

- 🟢 P3 **memory-lancedb** `manifest-loader`
  - contract: Manifest top-level fields are represented in target OpenClaw PluginManifest.
  - id: `manifest.schema.top-level-fields:memory-lancedb`
  - evidence:
    - [catalog @ openclaw.plugin.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/memory-lancedb/openclaw.plugin.json)

- 🟢 P3 **memos-cloud** `manifest-loader`
  - contract: Manifest top-level fields are represented in target OpenClaw PluginManifest.
  - id: `manifest.schema.top-level-fields:memos-cloud`
  - evidence:
    - [main @ openclaw.plugin.json](https://github.com/MemTensor/MemOS-Cloud-OpenClaw-Plugin/blob/18cb8c7f9317d1348629d9f4cbd9507978de0b81/openclaw.plugin.json)

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
    - [package.json](https://github.com/MemTensor/MemOS-Cloud-OpenClaw-Plugin/blob/18cb8c7f9317d1348629d9f4cbd9507978de0b81/package.json)

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
    - [extension:./dist/index.js @ index.js](https://github.com/apify/apify-openclaw-plugin/blob/f089a0632461f921ddbd15d783a791be9fc808ab/dist/index.js)

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
    - [apify-client @ package.json](https://github.com/apify/apify-openclaw-plugin/blob/f089a0632461f921ddbd15d783a791be9fc808ab/package.json)
    - [typebox @ package.json](https://github.com/apify/apify-openclaw-plugin/blob/f089a0632461f921ddbd15d783a791be9fc808ab/package.json)

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
    - [@openai/codex @ package.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/codex/package.json)
    - [semver @ package.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/codex/package.json)
    - [smol-toml @ package.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/codex/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/codex/package.json)
    - [ws @ package.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/codex/package.json)
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/codex/package.json)

- 🟢 P3 **codex-app-server** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:codex-app-server`
  - evidence:
    - [ws @ package.json](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/package.json)

- 🟢 P3 **diagnostics-otel** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:diagnostics-otel`
  - evidence:
    - [@opentelemetry/api @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/diagnostics-otel/package.json)
    - [@opentelemetry/api-logs @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/diagnostics-otel/package.json)
    - [@opentelemetry/exporter-logs-otlp-proto @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/diagnostics-otel/package.json)
    - [@opentelemetry/exporter-metrics-otlp-proto @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/diagnostics-otel/package.json)
    - [@opentelemetry/exporter-trace-otlp-proto @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/diagnostics-otel/package.json)
    - [@opentelemetry/resources @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/diagnostics-otel/package.json)
    - [@opentelemetry/sdk-logs @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/diagnostics-otel/package.json)
    - [@opentelemetry/sdk-metrics @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/diagnostics-otel/package.json)
    - [@opentelemetry/sdk-node @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/diagnostics-otel/package.json)
    - [@opentelemetry/sdk-trace-base @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/diagnostics-otel/package.json)
    - [@opentelemetry/semantic-conventions @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/diagnostics-otel/package.json)

- 🟢 P3 **diffs** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:diffs`
  - evidence:
    - [@pierre/diffs @ package.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/diffs/package.json)
    - [@shikijs/langs @ package.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/diffs/package.json)
    - [playwright-core @ package.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/diffs/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/diffs/package.json)
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/diffs/package.json)

- 🟢 P3 **dingtalk-doc** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:dingtalk-doc`
  - evidence:
    - [@sinclair/typebox @ package.json](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/package.json)

- 🟢 P3 **discord** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:discord`
  - evidence:
    - [@discordjs/voice @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/discord/package.json)
    - [discord-api-types @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/discord/package.json)
    - [libopus-wasm @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/discord/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/discord/package.json)
    - [undici @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/discord/package.json)
    - [ws @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/discord/package.json)

- 🟢 P3 **feishu** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:feishu`
  - evidence:
    - [@larksuiteoapi/node-sdk @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/feishu/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/feishu/package.json)
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/feishu/package.json)

- 🟢 P3 **google-meet** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:google-meet`
  - evidence:
    - [jszip @ package.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/google-meet/package.json)
    - [pretty-ms @ package.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/google-meet/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/google-meet/package.json)

- 🟢 P3 **hapi-openclaw** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:hapi-openclaw`
  - evidence:
    - hono @ plugins/hapi-openclaw/.crabpot-package/package.json

- 🟢 P3 **lightclawbot** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:lightclawbot`
  - evidence:
    - ws @ plugins/lightclawbot/.crabpot-package/package.json

- 🟢 P3 **lobster** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:lobster`
  - evidence:
    - [@clawdbot/lobster @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/lobster/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/lobster/package.json)

- 🟢 P3 **matrix** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:matrix`
  - evidence:
    - [@matrix-org/matrix-sdk-crypto-nodejs @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/matrix/package.json)
    - [@matrix-org/matrix-sdk-crypto-wasm @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/matrix/package.json)
    - [fake-indexeddb @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/matrix/package.json)
    - [markdown-it @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/matrix/package.json)
    - [matrix-js-sdk @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/matrix/package.json)
    - [music-metadata @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/matrix/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/matrix/package.json)
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/matrix/package.json)

- 🟢 P3 **mattermost** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:mattermost`
  - evidence:
    - [ws @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/mattermost/package.json)
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/mattermost/package.json)

- 🟢 P3 **memory-lancedb** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:memory-lancedb`
  - evidence:
    - [@lancedb/lancedb @ package.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/memory-lancedb/package.json)
    - [apache-arrow @ package.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/memory-lancedb/package.json)
    - [openai @ package.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/memory-lancedb/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/memory-lancedb/package.json)

- 🟢 P3 **msteams** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:msteams`
  - evidence:
    - [@azure/identity @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/msteams/package.json)
    - [@microsoft/teams.api @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/msteams/package.json)
    - [@microsoft/teams.apps @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/msteams/package.json)
    - [express @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/msteams/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/msteams/package.json)

- 🟢 P3 **nextcloud-talk** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:nextcloud-talk`
  - evidence:
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/nextcloud-talk/package.json)

- 🟢 P3 **nostr** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:nostr`
  - evidence:
    - [nostr-tools @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/nostr/package.json)
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/nostr/package.json)

- 🟢 P3 **openclaw-qqbot** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:openclaw-qqbot`
  - evidence:
    - [@tencent-connect/qqbot-connector @ package.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/qqbot/package.json)
    - [mpg123-decoder @ package.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/qqbot/package.json)
    - [p-map @ package.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/qqbot/package.json)
    - [pretty-ms @ package.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/qqbot/package.json)
    - [silk-wasm @ package.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/qqbot/package.json)
    - [ws @ package.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/qqbot/package.json)
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/qqbot/package.json)

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
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/synology-chat/package.json)

- 🟢 P3 **tlon** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:tlon`
  - evidence:
    - [@aws-sdk/client-s3 @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/tlon/package.json)
    - [@aws-sdk/s3-request-presigner @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/tlon/package.json)
    - [@tloncorp/tlon-skill @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/tlon/package.json)
    - [@urbit/aura @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/tlon/package.json)
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/tlon/package.json)

- 🟢 P3 **twitch** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:twitch`
  - evidence:
    - [@twurple/api @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/twitch/package.json)
    - [@twurple/auth @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/twitch/package.json)
    - [@twurple/chat @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/twitch/package.json)
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/twitch/package.json)

- 🟢 P3 **voice-call** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:voice-call`
  - evidence:
    - [commander @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/voice-call/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/voice-call/package.json)
    - [ws @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/voice-call/package.json)
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/voice-call/package.json)

- 🟢 P3 **whatsapp** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:whatsapp`
  - evidence:
    - [audio-decode @ package.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/whatsapp/package.json)
    - [baileys @ package.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/whatsapp/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/whatsapp/package.json)

- 🟢 P3 **zalo** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:zalo`
  - evidence:
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/zalo/package.json)

- 🟢 P3 **zalouser** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:zalouser`
  - evidence:
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/zalouser/package.json)
    - [zca-js @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/zalouser/package.json)
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/zalouser/package.json)

- 🟢 P3 **aiwerk-mcp-bridge** `package-loader`
  - contract: Inspector can compile or load TypeScript source entrypoints before registration capture.
  - id: `package.entrypoint.typescript-loader:aiwerk-mcp-bridge`
  - evidence:
    - extension:plugins/aiwerk-mcp-bridge/.crabpot-package/index.ts

- 🟢 P3 **clawmetry** `package-loader`
  - contract: Inspector can compile or load TypeScript source entrypoints before registration capture.
  - id: `package.entrypoint.typescript-loader:clawmetry`
  - evidence:
    - [extension @ index.ts](https://github.com/vivekchand/clawmetry/blob/a8a39b68941f6ea8dea1562e34fefd721ad805d2/clawhub-plugin/index.ts)

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
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/matrix/index.ts)
    - [setupEntry @ setup-entry.ts](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/matrix/setup-entry.ts)

- 🟢 P3 **mattermost** `package-loader`
  - contract: Inspector can compile or load TypeScript source entrypoints before registration capture.
  - id: `package.entrypoint.typescript-loader:mattermost`
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/mattermost/index.ts)
    - [setupEntry @ setup-entry.ts](https://github.com/openclaw/openclaw/blob/2d2ddc43d0dcf71f31283d780f9fe9ff4cc04fe4/extensions/mattermost/setup-entry.ts)

- 🟢 P3 **memu-engine** `package-loader`
  - contract: Inspector can compile or load TypeScript source entrypoints before registration capture.
  - id: `package.entrypoint.typescript-loader:memu-engine`
  - evidence:
    - [extension @ index.ts](https://github.com/duxiaoxiong/memu-engine-for-OpenClaw/blob/a5a22c5faf21e30d17a1b47635829e7dd0728ae5/index.ts)

- 🟢 P3 **web-search-plus** `package-loader`
  - contract: Inspector can compile or load TypeScript source entrypoints before registration capture.
  - id: `package.entrypoint.typescript-loader:web-search-plus`
  - evidence:
    - [extension @ index.ts](https://github.com/robbyczgw-cla/web-search-plus-plugin/blob/1b44c44e5495ad65fd37e8376c9fd752a97662c0/index.ts)

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
    - buildOpenClawVersion:2026.7.2-beta.1

- 🟢 P3 **codex** `package-loader`
  - contract: Install minimum host version matches the OpenClaw package surface targeted by the plugin.
  - id: `package.metadata.min-host-version:codex`
  - evidence:
    - minHostVersion:>=2026.5.1-beta.1
    - buildOpenClawVersion:2026.7.2-beta.1

- 🟢 P3 **diagnostics-otel** `package-loader`
  - contract: Install minimum host version matches the OpenClaw package surface targeted by the plugin.
  - id: `package.metadata.min-host-version:diagnostics-otel`
  - evidence:
    - minHostVersion:>=2026.4.25
    - buildOpenClawVersion:2026.7.1

- 🟢 P3 **diagnostics-prometheus** `package-loader`
  - contract: Install minimum host version matches the OpenClaw package surface targeted by the plugin.
  - id: `package.metadata.min-host-version:diagnostics-prometheus`
  - evidence:
    - minHostVersion:>=2026.4.25
    - buildOpenClawVersion:2026.7.2-beta.1

- 🟢 P3 **diffs** `package-loader`
  - contract: Install minimum host version matches the OpenClaw package surface targeted by the plugin.
  - id: `package.metadata.min-host-version:diffs`
  - evidence:
    - minHostVersion:>=2026.4.30
    - buildOpenClawVersion:2026.7.2-beta.1

- 🟢 P3 **discord** `package-loader`
  - contract: Install minimum host version matches the OpenClaw package surface targeted by the plugin.
  - id: `package.metadata.min-host-version:discord`
  - evidence:
    - minHostVersion:>=2026.5.26
    - buildOpenClawVersion:2026.7.1

- 🟢 P3 **feishu** `package-loader`
  - contract: Install minimum host version matches the OpenClaw package surface targeted by the plugin.
  - id: `package.metadata.min-host-version:feishu`
  - evidence:
    - minHostVersion:>=2026.5.29
    - buildOpenClawVersion:2026.7.1

- 🟢 P3 **google-meet** `package-loader`
  - contract: Install minimum host version matches the OpenClaw package surface targeted by the plugin.
  - id: `package.metadata.min-host-version:google-meet`
  - evidence:
    - minHostVersion:>=2026.4.20
    - buildOpenClawVersion:2026.7.2-beta.1

- 🟢 P3 **lobster** `package-loader`
  - contract: Install minimum host version matches the OpenClaw package surface targeted by the plugin.
  - id: `package.metadata.min-host-version:lobster`
  - evidence:
    - minHostVersion:>=2026.4.25
    - buildOpenClawVersion:2026.7.1

- 🟢 P3 **matrix** `package-loader`
  - contract: Install minimum host version matches the OpenClaw package surface targeted by the plugin.
  - id: `package.metadata.min-host-version:matrix`
  - evidence:
    - minHostVersion:>=2026.4.10
    - buildOpenClawVersion:2026.7.1

- 🟢 P3 **mattermost** `package-loader`
  - contract: Install minimum host version matches the OpenClaw package surface targeted by the plugin.
  - id: `package.metadata.min-host-version:mattermost`
  - evidence:
    - minHostVersion:>=2026.6.9
    - buildOpenClawVersion:2026.7.1

- 🟢 P3 **memory-lancedb** `package-loader`
  - contract: Install minimum host version matches the OpenClaw package surface targeted by the plugin.
  - id: `package.metadata.min-host-version:memory-lancedb`
  - evidence:
    - minHostVersion:>=2026.5.31
    - buildOpenClawVersion:2026.7.2-beta.1

- 🟢 P3 **msteams** `package-loader`
  - contract: Install minimum host version matches the OpenClaw package surface targeted by the plugin.
  - id: `package.metadata.min-host-version:msteams`
  - evidence:
    - minHostVersion:>=2026.4.10
    - buildOpenClawVersion:2026.7.1

- 🟢 P3 **nextcloud-talk** `package-loader`
  - contract: Install minimum host version matches the OpenClaw package surface targeted by the plugin.
  - id: `package.metadata.min-host-version:nextcloud-talk`
  - evidence:
    - minHostVersion:>=2026.4.10
    - buildOpenClawVersion:2026.7.1

- 🟢 P3 **nostr** `package-loader`
  - contract: Install minimum host version matches the OpenClaw package surface targeted by the plugin.
  - id: `package.metadata.min-host-version:nostr`
  - evidence:
    - minHostVersion:>=2026.4.10
    - buildOpenClawVersion:2026.7.1

- 🟢 P3 **openclaw-qqbot** `package-loader`
  - contract: Install minimum host version matches the OpenClaw package surface targeted by the plugin.
  - id: `package.metadata.min-host-version:openclaw-qqbot`
  - evidence:
    - minHostVersion:>=2026.4.10
    - buildOpenClawVersion:2026.7.2-beta.1

- 🟢 P3 **synology-chat** `package-loader`
  - contract: Install minimum host version matches the OpenClaw package surface targeted by the plugin.
  - id: `package.metadata.min-host-version:synology-chat`
  - evidence:
    - minHostVersion:>=2026.4.10
    - buildOpenClawVersion:2026.7.1

- 🟢 P3 **tlon** `package-loader`
  - contract: Install minimum host version matches the OpenClaw package surface targeted by the plugin.
  - id: `package.metadata.min-host-version:tlon`
  - evidence:
    - minHostVersion:>=2026.4.10
    - buildOpenClawVersion:2026.7.1

- 🟢 P3 **twitch** `package-loader`
  - contract: Install minimum host version matches the OpenClaw package surface targeted by the plugin.
  - id: `package.metadata.min-host-version:twitch`
  - evidence:
    - minHostVersion:>=2026.4.10
    - buildOpenClawVersion:2026.7.1

- 🟢 P3 **voice-call** `package-loader`
  - contract: Install minimum host version matches the OpenClaw package surface targeted by the plugin.
  - id: `package.metadata.min-host-version:voice-call`
  - evidence:
    - minHostVersion:>=2026.4.10
    - buildOpenClawVersion:2026.7.1

- 🟢 P3 **whatsapp** `package-loader`
  - contract: Install minimum host version matches the OpenClaw package surface targeted by the plugin.
  - id: `package.metadata.min-host-version:whatsapp`
  - evidence:
    - minHostVersion:>=2026.4.25
    - buildOpenClawVersion:2026.7.2-beta.1

- 🟢 P3 **zalo** `package-loader`
  - contract: Install minimum host version matches the OpenClaw package surface targeted by the plugin.
  - id: `package.metadata.min-host-version:zalo`
  - evidence:
    - minHostVersion:>=2026.4.10
    - buildOpenClawVersion:2026.7.1

- 🟢 P3 **zalouser** `package-loader`
  - contract: Install minimum host version matches the OpenClaw package surface targeted by the plugin.
  - id: `package.metadata.min-host-version:zalouser`
  - evidence:
    - minHostVersion:>=2026.4.10
    - buildOpenClawVersion:2026.7.1

- 🟢 P3 **codex** `sdk-import`
  - contract: External plugins use documented public SDK subpaths instead of reserved bundled-plugin compatibility shims.
  - id: `sdk.import.reserved-bundled-plugin-boundary:codex`
  - evidence:
    - [openclaw/plugin-sdk/codex-mcp-projection @ thread-lifecycle-BgLXzjvV.js:15](https://github.com/openclaw/openclaw/blob/a911e58a57268b1daf30a1d29d70aedccf736832/extensions/codex/dist/thread-lifecycle-BgLXzjvV.js#L15)

- 🟢 P3 **clawmetry** `sdk-alias`
  - contract: Root plugin SDK barrel remains importable or has a machine-readable migration path.
  - id: `sdk.import.root-barrel-cold-import:clawmetry`
  - evidence:
    - [openclaw/plugin-sdk @ index.ts:1](https://github.com/vivekchand/clawmetry/blob/a8a39b68941f6ea8dea1562e34fefd721ad805d2/clawhub-plugin/index.ts#L1)
    - [openclaw/plugin-sdk @ service.ts:1](https://github.com/vivekchand/clawmetry/blob/a8a39b68941f6ea8dea1562e34fefd721ad805d2/clawhub-plugin/src/service.ts#L1)

- 🟢 P3 **codex-app-server** `sdk-alias`
  - contract: Root plugin SDK barrel remains importable or has a machine-readable migration path.
  - id: `sdk.import.root-barrel-cold-import:codex-app-server`
  - evidence:
    - [openclaw/plugin-sdk @ index.ts:1](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/index.ts#L1)
    - [openclaw/plugin-sdk @ client.ts:6](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/src/client.ts#L6)
    - [openclaw/plugin-sdk @ controller.ts:18](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/src/controller.ts#L18)
    - [openclaw/plugin-sdk @ types.ts:1](https://github.com/pwrdrvr/openclaw-codex-app-server/blob/4a87dce5d620a8fb30842bb1b726390fe442247e/src/types.ts#L1)

- 🟢 P3 **dingtalk-doc** `sdk-alias`
  - contract: Root plugin SDK barrel remains importable or has a machine-readable migration path.
  - id: `sdk.import.root-barrel-cold-import:dingtalk-doc`
  - evidence:
    - [openclaw/plugin-sdk @ index.ts:10](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/index.ts#L10)
    - [openclaw/plugin-sdk @ index.ts:11](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/index.ts#L11)
    - [openclaw/plugin-sdk @ delete-document-block.ts:6](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/src/tools/block/delete-document-block.ts#L6)
    - [openclaw/plugin-sdk @ index.ts:5](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/src/tools/block/index.ts#L5)
    - [openclaw/plugin-sdk @ insert-document-block.ts:6](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/src/tools/block/insert-document-block.ts#L6)
    - [openclaw/plugin-sdk @ list-document-blocks.ts:6](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/src/tools/block/list-document-blocks.ts#L6)
    - [openclaw/plugin-sdk @ update-document-block.ts:6](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/src/tools/block/update-document-block.ts#L6)
    - [openclaw/plugin-sdk @ create-document.ts:6](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/src/tools/doc/create-document.ts#L6)
    - [openclaw/plugin-sdk @ get-document-content.ts:6](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/src/tools/doc/get-document-content.ts#L6)
    - [openclaw/plugin-sdk @ get-document-info.ts:6](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/src/tools/doc/get-document-info.ts#L6)
    - [openclaw/plugin-sdk @ index.ts:8](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/src/tools/doc/index.ts#L8)
    - [openclaw/plugin-sdk @ search-documents.ts:6](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/src/tools/doc/search-documents.ts#L6)
    - [openclaw/plugin-sdk @ update-document.ts:6](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/src/tools/doc/update-document.ts#L6)
    - [openclaw/plugin-sdk @ commit-uploaded-file.ts:6](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/src/tools/file/commit-uploaded-file.ts#L6)
    - [openclaw/plugin-sdk @ create-file.ts:6](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/src/tools/file/create-file.ts#L6)
    - [openclaw/plugin-sdk @ create-folder.ts:6](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/src/tools/file/create-folder.ts#L6)
    - [openclaw/plugin-sdk @ download-file.ts:6](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/src/tools/file/download-file.ts#L6)
    - [openclaw/plugin-sdk @ get-file-upload-info.ts:6](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/src/tools/file/get-file-upload-info.ts#L6)
    - [openclaw/plugin-sdk @ index.ts:5](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/src/tools/file/index.ts#L5)
    - [openclaw/plugin-sdk @ list-nodes.ts:6](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/src/tools/file/list-nodes.ts#L6)
    - [openclaw/plugin-sdk @ helpers.ts:7](https://github.com/suchasplus/openclaw-dingtalk-doc/blob/3503d688e9beff7cdf10654c1d34037ccf960cb7/src/tools/helpers.ts#L7)

- 🟢 P3 **memu-engine** `sdk-alias`
  - contract: Root plugin SDK barrel remains importable or has a machine-readable migration path.
  - id: `sdk.import.root-barrel-cold-import:memu-engine`
  - evidence:
    - [openclaw/plugin-sdk @ index.ts:1](https://github.com/duxiaoxiong/memu-engine-for-OpenClaw/blob/a5a22c5faf21e30d17a1b47635829e7dd0728ae5/index.ts#L1)

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
