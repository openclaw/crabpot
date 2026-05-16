# Crabpot Issue Findings

Generated: deterministic
Status: PASS


## Crabpot Target Context

- **OpenClaw host track:** `development`
- **Plugin artifact track:** `source-pack`
- **Fixture set:** `openclaw-beta (8 fixtures)`
- **Runtime evidence:** `reports/crabpot-execution-results.json` (10 capture artifacts, 43 captured registrations/hooks)
## Triage Summary

| Metric                     | Value |
| -------------------------- | ----- |
| Issue findings             | 38    |
| Open issue findings        | 32    |
| Runtime-covered findings   | 6     |
| Runtime-partial findings   | 0     |
| 🔴 P0                      | 0     |
| 🟠 P1                      | 2     |
| Open 🔴 P0                 | 0     |
| Open 🟠 P1                 | 2     |
| Live issues                | 0     |
| Live P0 issues             | 0     |
| Compat gaps                | 0     |
| Deprecation warnings       | 2     |
| Inspector gaps             | 21    |
| Open inspector gaps        | 15    |
| Runtime coverage artifacts | 20    |
| Upstream metadata          | 15    |
| Contract probes            | 38    |

## Triage Overview

| Class               | Count | P0 | Meaning                                                                                                                                                  |
| ------------------- | ----- | -- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| live-issue          | 0     | 0  | Potential runtime breakage in the target OpenClaw/plugin pair. P0 only when it is not a deprecated compat seam.                                          |
| compat-gap          | 0     | -  | Compatibility behavior is needed but missing from the target OpenClaw compat registry.                                                                   |
| deprecation-warning | 2     | -  | Plugin uses a supported but deprecated compatibility seam; keep it wired while migration exists.                                                         |
| inspector-gap       | 21    | -  | Plugin Inspector needs stronger capture/probe evidence before making contract judgments. Runtime-covered rows are proof-backed and not open report work. |
| upstream-metadata   | 15    | -  | Plugin package or manifest metadata should improve upstream; not a target OpenClaw live break by itself.                                                 |
| fixture-regression  | 0     | -  | Fixture no longer exposes an expected seam; investigate fixture pin or scanner drift.                                                                    |

## P0 Live Issues

_none_

## Other Live Issues

_none_

## Compat Gaps

_none_

## Deprecation Warnings

- 🟡 P2 **brave-plugin** `deprecation-warning` `core-compat-adapter`
  - **provider-auth-env-vars**: brave-plugin: providerAuthEnvVars legacy manifest metadata must stay covered
  - state: open · compat:deprecated · deprecated
  - evidence:
    - brave

- 🟡 P2 **openclaw-qqbot** `deprecation-warning` `core-compat-adapter`
  - **channel-env-vars**: openclaw-qqbot: channelEnvVars legacy manifest metadata must stay covered
  - state: open · compat:deprecated · deprecated
  - evidence:
    - qqbot

## Inspector Proof Gaps

- 🟠 P1 **memory-lancedb** `inspector-gap` `inspector-follow-up`
  - **conversation-access-hook**: memory-lancedb: conversation-access hooks need privacy-boundary probes
  - state: open · compat:active
  - evidence:
    - [agent_end @ index.ts:1064](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/memory-lancedb/index.ts#L1064)

- 🟡 P2 **brave-plugin** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: brave-plugin: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/brave/index.ts)

- 🟡 P2 **codex** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: codex: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@earendil-works/pi-coding-agent @ package.json](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/codex/package.json)
    - [@openai/codex @ package.json](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/codex/package.json)
    - [ajv @ package.json](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/codex/package.json)
    - [ws @ package.json](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/codex/package.json)
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/codex/package.json)

- 🟡 P2 **codex** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: codex: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/codex/index.ts)

- 🟡 P2 **diagnostics-prometheus** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: diagnostics-prometheus: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/diagnostics-prometheus/index.ts)

- 🟡 P2 **diffs** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: diffs: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@pierre/diffs @ package.json](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/diffs/package.json)
    - [@pierre/theme @ package.json](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/diffs/package.json)
    - [playwright-core @ package.json](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/diffs/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/diffs/package.json)
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/diffs/package.json)

- 🟡 P2 **diffs** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: diffs: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/diffs/index.ts)

- 🟡 P2 **google-meet** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: google-meet: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [commander @ package.json](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/google-meet/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/google-meet/package.json)

- 🟡 P2 **google-meet** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: google-meet: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/google-meet/index.ts)

- 🟡 P2 **memory-lancedb** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: memory-lancedb: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@lancedb/lancedb @ package.json](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/memory-lancedb/package.json)
    - [apache-arrow @ package.json](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/memory-lancedb/package.json)
    - [openai @ package.json](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/memory-lancedb/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/memory-lancedb/package.json)

- 🟡 P2 **memory-lancedb** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: memory-lancedb: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/memory-lancedb/index.ts)

- 🟡 P2 **openclaw-qqbot** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: openclaw-qqbot: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@tencent-connect/qqbot-connector @ package.json](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/qqbot/package.json)
    - [mpg123-decoder @ package.json](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/qqbot/package.json)
    - [silk-wasm @ package.json](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/qqbot/package.json)
    - [ws @ package.json](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/qqbot/package.json)
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/qqbot/package.json)

- 🟡 P2 **openclaw-qqbot** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: openclaw-qqbot: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/qqbot/index.ts)
    - [setupEntry @ setup-entry.ts](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/qqbot/setup-entry.ts)

- 🟡 P2 **whatsapp** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: whatsapp: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [audio-decode @ package.json](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/whatsapp/package.json)
    - [baileys @ package.json](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/whatsapp/package.json)
    - [https-proxy-agent @ package.json](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/whatsapp/package.json)
    - [jimp @ package.json](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/whatsapp/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/whatsapp/package.json)
    - [undici @ package.json](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/whatsapp/package.json)

- 🟡 P2 **whatsapp** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: whatsapp: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/whatsapp/index.ts)
    - [setupEntry @ setup-entry.ts](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/whatsapp/setup-entry.ts)

## Runtime-Covered Inspector Gaps

- 🟡 P2 **codex** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: codex: runtime registrations need capture evidence before final contract judgment
  - state: runtime-covered · compat:active · runtime:covered
  - evidence:
    - [registerCommand @ index.ts:46](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/codex/index.ts#L46)
    - [registerNodeHostCommand @ index.ts:41](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/codex/index.ts#L41)
    - [registerNodeInvokePolicy @ index.ts:44](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/codex/index.ts#L44)
  - runtime coverage:
    - captured registration:registerCommand
    - captured registration:registerNodeHostCommand
    - captured registration:registerNodeInvokePolicy
    - .crabpot/results/codex/cold-import-extension-codex-plugins-codex-crabpot-package-index-ts.capture.json
    - .crabpot/results/codex/cold-import-extension-codex-plugins-codex-crabpot-package-index-ts.synthetic.json

- 🟡 P2 **diagnostics-prometheus** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: diagnostics-prometheus: runtime registrations need capture evidence before final contract judgment
  - state: runtime-covered · compat:active · runtime:covered
  - evidence:
    - [registerHttpRoute @ index.ts:12](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/diagnostics-prometheus/index.ts#L12)
    - [registerService @ index.ts:11](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/diagnostics-prometheus/index.ts#L11)
  - runtime coverage:
    - captured registration:registerHttpRoute
    - captured registration:registerService
    - .crabpot/results/diagnostics-prometheus/cold-import-extension-diagnostics-prometheus-plugins-diagnostics-prometheus-crabpot-package-index-ts.capture.json
    - .crabpot/results/diagnostics-prometheus/cold-import-extension-diagnostics-prometheus-plugins-diagnostics-prometheus-crabpot-package-index-ts.synthetic.json

- 🟡 P2 **diffs** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: diffs: runtime registrations need capture evidence before final contract judgment
  - state: runtime-covered · compat:active · runtime:covered
  - evidence:
    - [registerHttpRoute @ plugin.ts:57](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/diffs/src/plugin.ts#L57)
  - runtime coverage:
    - captured registration:registerHttpRoute
    - .crabpot/results/diffs/cold-import-extension-diffs-plugins-diffs-crabpot-package-index-ts.capture.json
    - .crabpot/results/diffs/cold-import-extension-diffs-plugins-diffs-crabpot-package-index-ts.synthetic.json

- 🟡 P2 **google-meet** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: google-meet: runtime registrations need capture evidence before final contract judgment
  - state: runtime-covered · compat:active · runtime:covered
  - evidence:
    - [registerGatewayMethod @ index.ts:1005](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/google-meet/index.ts#L1005)
    - [registerGatewayMethod @ index.ts:731](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/google-meet/index.ts#L731)
    - [registerGatewayMethod @ index.ts:753](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/google-meet/index.ts#L753)
    - [registerGatewayMethod @ index.ts:775](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/google-meet/index.ts#L775)
    - [registerGatewayMethod @ index.ts:787](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/google-meet/index.ts#L787)
    - [registerGatewayMethod @ index.ts:805](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/google-meet/index.ts#L805)
    - [registerGatewayMethod @ index.ts:824](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/google-meet/index.ts#L824)
    - [registerGatewayMethod @ index.ts:848](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/google-meet/index.ts#L848)
    - [registerGatewayMethod @ index.ts:870](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/google-meet/index.ts#L870)
    - [registerGatewayMethod @ index.ts:894](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/google-meet/index.ts#L894)
    - [registerGatewayMethod @ index.ts:919](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/google-meet/index.ts#L919)
    - [registerGatewayMethod @ index.ts:930](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/google-meet/index.ts#L930)
    - [registerGatewayMethod @ index.ts:947](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/google-meet/index.ts#L947)
    - [registerGatewayMethod @ index.ts:966](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/google-meet/index.ts#L966)
    - [registerGatewayMethod @ index.ts:983](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/google-meet/index.ts#L983)
    - [registerNodeHostCommand @ index.ts:1194](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/google-meet/index.ts#L1194)
  - runtime coverage:
    - captured registration:registerGatewayMethod
    - captured registration:registerNodeHostCommand
    - .crabpot/results/google-meet/cold-import-extension-google-meet-plugins-google-meet-crabpot-package-index-ts.capture.json
    - .crabpot/results/google-meet/cold-import-extension-google-meet-plugins-google-meet-crabpot-package-index-ts.synthetic.json

- 🟡 P2 **memory-lancedb** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: memory-lancedb: runtime registrations need capture evidence before final contract judgment
  - state: runtime-covered · compat:active · runtime:covered
  - evidence:
    - [registerService @ index.ts:1150](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/memory-lancedb/index.ts#L1150)
    - [registerService @ index.ts:645](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/memory-lancedb/index.ts#L645)
  - runtime coverage:
    - captured registration:registerService
    - .crabpot/results/memory-lancedb/cold-import-extension-memory-lancedb-plugins-memory-lancedb-crabpot-package-index-ts.capture.json
    - .crabpot/results/memory-lancedb/cold-import-extension-memory-lancedb-plugins-memory-lancedb-crabpot-package-index-ts.synthetic.json

- 🟡 P2 **openclaw-qqbot** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: openclaw-qqbot: runtime registrations need capture evidence before final contract judgment
  - state: runtime-covered · compat:active · runtime:covered
  - evidence:
    - [registerCommand @ framework-registration.ts:37](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/qqbot/src/bridge/commands/framework-registration.ts#L37)
  - runtime coverage:
    - captured registration:registerCommand
    - .crabpot/results/openclaw-qqbot/cold-import-extension-openclaw-qqbot-plugins-openclaw-qqbot-crabpot-package-index-ts.capture.json
    - .crabpot/results/openclaw-qqbot/cold-import-extension-openclaw-qqbot-plugins-openclaw-qqbot-crabpot-package-index-ts.synthetic.json
    - .crabpot/results/openclaw-qqbot/cold-import-setupEntry-openclaw-qqbot-plugins-openclaw-qqbot-crabpot-package-setup-entry-ts.capture.json
    - .crabpot/results/openclaw-qqbot/cold-import-setupEntry-openclaw-qqbot-plugins-openclaw-qqbot-crabpot-package-setup-entry-ts.synthetic.json

## Upstream Metadata Issues

- 🟠 P1 **codex** `upstream-metadata` `plugin-upstream-fix`
  - **reserved-sdk-import**: codex: plugin imports reserved bundled-plugin SDK compatibility subpaths
  - state: open · compat:none
  - evidence:
    - [openclaw/plugin-sdk/codex-mcp-projection @ thread-lifecycle.ts:6](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/codex/src/app-server/thread-lifecycle.ts#L6)
    - [openclaw/plugin-sdk/codex-native-task-runtime @ native-subagent-task-mirror.ts:5](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/codex/src/app-server/native-subagent-task-mirror.ts#L5)

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
    - buildOpenClawVersion:2026.5.17

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
    - buildOpenClawVersion:2026.5.17

- 🟡 P2 **diagnostics-prometheus** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: diagnostics-prometheus: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.4.25
    - buildOpenClawVersion:2026.5.17

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
    - buildOpenClawVersion:2026.5.17

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
    - buildOpenClawVersion:2026.5.17

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
    - buildOpenClawVersion:2026.5.17

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
    - buildOpenClawVersion:2026.5.17

- 🟡 P2 **whatsapp** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: whatsapp: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.4.25
    - buildOpenClawVersion:2026.5.17

## Issues

- 🟠 P1 **codex** `upstream-metadata` `plugin-upstream-fix`
  - **reserved-sdk-import**: codex: plugin imports reserved bundled-plugin SDK compatibility subpaths
  - state: open · compat:none
  - evidence:
    - [openclaw/plugin-sdk/codex-mcp-projection @ thread-lifecycle.ts:6](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/codex/src/app-server/thread-lifecycle.ts#L6)
    - [openclaw/plugin-sdk/codex-native-task-runtime @ native-subagent-task-mirror.ts:5](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/codex/src/app-server/native-subagent-task-mirror.ts#L5)

- 🟠 P1 **memory-lancedb** `inspector-gap` `inspector-follow-up`
  - **conversation-access-hook**: memory-lancedb: conversation-access hooks need privacy-boundary probes
  - state: open · compat:active
  - evidence:
    - [agent_end @ index.ts:1064](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/memory-lancedb/index.ts#L1064)

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
    - buildOpenClawVersion:2026.5.17

- 🟡 P2 **brave-plugin** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: brave-plugin: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/brave/index.ts)

- 🟡 P2 **brave-plugin** `deprecation-warning` `core-compat-adapter`
  - **provider-auth-env-vars**: brave-plugin: providerAuthEnvVars legacy manifest metadata must stay covered
  - state: open · compat:deprecated · deprecated
  - evidence:
    - brave

- 🟡 P2 **codex** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: codex: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@earendil-works/pi-coding-agent @ package.json](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/codex/package.json)
    - [@openai/codex @ package.json](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/codex/package.json)
    - [ajv @ package.json](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/codex/package.json)
    - [ws @ package.json](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/codex/package.json)
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/codex/package.json)

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
    - buildOpenClawVersion:2026.5.17

- 🟡 P2 **codex** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: codex: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/codex/index.ts)

- 🟡 P2 **codex** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: codex: runtime registrations need capture evidence before final contract judgment
  - state: runtime-covered · compat:active · runtime:covered
  - evidence:
    - [registerCommand @ index.ts:46](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/codex/index.ts#L46)
    - [registerNodeHostCommand @ index.ts:41](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/codex/index.ts#L41)
    - [registerNodeInvokePolicy @ index.ts:44](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/codex/index.ts#L44)
  - runtime coverage:
    - captured registration:registerCommand
    - captured registration:registerNodeHostCommand
    - captured registration:registerNodeInvokePolicy
    - .crabpot/results/codex/cold-import-extension-codex-plugins-codex-crabpot-package-index-ts.capture.json
    - .crabpot/results/codex/cold-import-extension-codex-plugins-codex-crabpot-package-index-ts.synthetic.json

- 🟡 P2 **diagnostics-prometheus** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: diagnostics-prometheus: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.4.25
    - buildOpenClawVersion:2026.5.17

- 🟡 P2 **diagnostics-prometheus** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: diagnostics-prometheus: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/diagnostics-prometheus/index.ts)

- 🟡 P2 **diagnostics-prometheus** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: diagnostics-prometheus: runtime registrations need capture evidence before final contract judgment
  - state: runtime-covered · compat:active · runtime:covered
  - evidence:
    - [registerHttpRoute @ index.ts:12](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/diagnostics-prometheus/index.ts#L12)
    - [registerService @ index.ts:11](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/diagnostics-prometheus/index.ts#L11)
  - runtime coverage:
    - captured registration:registerHttpRoute
    - captured registration:registerService
    - .crabpot/results/diagnostics-prometheus/cold-import-extension-diagnostics-prometheus-plugins-diagnostics-prometheus-crabpot-package-index-ts.capture.json
    - .crabpot/results/diagnostics-prometheus/cold-import-extension-diagnostics-prometheus-plugins-diagnostics-prometheus-crabpot-package-index-ts.synthetic.json

- 🟡 P2 **diffs** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: diffs: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@pierre/diffs @ package.json](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/diffs/package.json)
    - [@pierre/theme @ package.json](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/diffs/package.json)
    - [playwright-core @ package.json](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/diffs/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/diffs/package.json)
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/diffs/package.json)

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
    - buildOpenClawVersion:2026.5.17

- 🟡 P2 **diffs** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: diffs: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/diffs/index.ts)

- 🟡 P2 **diffs** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: diffs: runtime registrations need capture evidence before final contract judgment
  - state: runtime-covered · compat:active · runtime:covered
  - evidence:
    - [registerHttpRoute @ plugin.ts:57](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/diffs/src/plugin.ts#L57)
  - runtime coverage:
    - captured registration:registerHttpRoute
    - .crabpot/results/diffs/cold-import-extension-diffs-plugins-diffs-crabpot-package-index-ts.capture.json
    - .crabpot/results/diffs/cold-import-extension-diffs-plugins-diffs-crabpot-package-index-ts.synthetic.json

- 🟡 P2 **google-meet** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: google-meet: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [commander @ package.json](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/google-meet/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/google-meet/package.json)

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
    - buildOpenClawVersion:2026.5.17

- 🟡 P2 **google-meet** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: google-meet: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/google-meet/index.ts)

- 🟡 P2 **google-meet** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: google-meet: runtime registrations need capture evidence before final contract judgment
  - state: runtime-covered · compat:active · runtime:covered
  - evidence:
    - [registerGatewayMethod @ index.ts:1005](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/google-meet/index.ts#L1005)
    - [registerGatewayMethod @ index.ts:731](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/google-meet/index.ts#L731)
    - [registerGatewayMethod @ index.ts:753](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/google-meet/index.ts#L753)
    - [registerGatewayMethod @ index.ts:775](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/google-meet/index.ts#L775)
    - [registerGatewayMethod @ index.ts:787](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/google-meet/index.ts#L787)
    - [registerGatewayMethod @ index.ts:805](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/google-meet/index.ts#L805)
    - [registerGatewayMethod @ index.ts:824](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/google-meet/index.ts#L824)
    - [registerGatewayMethod @ index.ts:848](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/google-meet/index.ts#L848)
    - [registerGatewayMethod @ index.ts:870](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/google-meet/index.ts#L870)
    - [registerGatewayMethod @ index.ts:894](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/google-meet/index.ts#L894)
    - [registerGatewayMethod @ index.ts:919](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/google-meet/index.ts#L919)
    - [registerGatewayMethod @ index.ts:930](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/google-meet/index.ts#L930)
    - [registerGatewayMethod @ index.ts:947](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/google-meet/index.ts#L947)
    - [registerGatewayMethod @ index.ts:966](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/google-meet/index.ts#L966)
    - [registerGatewayMethod @ index.ts:983](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/google-meet/index.ts#L983)
    - [registerNodeHostCommand @ index.ts:1194](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/google-meet/index.ts#L1194)
  - runtime coverage:
    - captured registration:registerGatewayMethod
    - captured registration:registerNodeHostCommand
    - .crabpot/results/google-meet/cold-import-extension-google-meet-plugins-google-meet-crabpot-package-index-ts.capture.json
    - .crabpot/results/google-meet/cold-import-extension-google-meet-plugins-google-meet-crabpot-package-index-ts.synthetic.json

- 🟡 P2 **memory-lancedb** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: memory-lancedb: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@lancedb/lancedb @ package.json](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/memory-lancedb/package.json)
    - [apache-arrow @ package.json](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/memory-lancedb/package.json)
    - [openai @ package.json](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/memory-lancedb/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/memory-lancedb/package.json)

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
    - buildOpenClawVersion:2026.5.17

- 🟡 P2 **memory-lancedb** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: memory-lancedb: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/memory-lancedb/index.ts)

- 🟡 P2 **memory-lancedb** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: memory-lancedb: runtime registrations need capture evidence before final contract judgment
  - state: runtime-covered · compat:active · runtime:covered
  - evidence:
    - [registerService @ index.ts:1150](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/memory-lancedb/index.ts#L1150)
    - [registerService @ index.ts:645](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/memory-lancedb/index.ts#L645)
  - runtime coverage:
    - captured registration:registerService
    - .crabpot/results/memory-lancedb/cold-import-extension-memory-lancedb-plugins-memory-lancedb-crabpot-package-index-ts.capture.json
    - .crabpot/results/memory-lancedb/cold-import-extension-memory-lancedb-plugins-memory-lancedb-crabpot-package-index-ts.synthetic.json

- 🟡 P2 **openclaw-qqbot** `deprecation-warning` `core-compat-adapter`
  - **channel-env-vars**: openclaw-qqbot: channelEnvVars legacy manifest metadata must stay covered
  - state: open · compat:deprecated · deprecated
  - evidence:
    - qqbot

- 🟡 P2 **openclaw-qqbot** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: openclaw-qqbot: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@tencent-connect/qqbot-connector @ package.json](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/qqbot/package.json)
    - [mpg123-decoder @ package.json](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/qqbot/package.json)
    - [silk-wasm @ package.json](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/qqbot/package.json)
    - [ws @ package.json](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/qqbot/package.json)
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/qqbot/package.json)

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
    - buildOpenClawVersion:2026.5.17

- 🟡 P2 **openclaw-qqbot** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: openclaw-qqbot: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/qqbot/index.ts)
    - [setupEntry @ setup-entry.ts](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/qqbot/setup-entry.ts)

- 🟡 P2 **openclaw-qqbot** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: openclaw-qqbot: runtime registrations need capture evidence before final contract judgment
  - state: runtime-covered · compat:active · runtime:covered
  - evidence:
    - [registerCommand @ framework-registration.ts:37](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/qqbot/src/bridge/commands/framework-registration.ts#L37)
  - runtime coverage:
    - captured registration:registerCommand
    - .crabpot/results/openclaw-qqbot/cold-import-extension-openclaw-qqbot-plugins-openclaw-qqbot-crabpot-package-index-ts.capture.json
    - .crabpot/results/openclaw-qqbot/cold-import-extension-openclaw-qqbot-plugins-openclaw-qqbot-crabpot-package-index-ts.synthetic.json
    - .crabpot/results/openclaw-qqbot/cold-import-setupEntry-openclaw-qqbot-plugins-openclaw-qqbot-crabpot-package-setup-entry-ts.capture.json
    - .crabpot/results/openclaw-qqbot/cold-import-setupEntry-openclaw-qqbot-plugins-openclaw-qqbot-crabpot-package-setup-entry-ts.synthetic.json

- 🟡 P2 **whatsapp** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: whatsapp: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [audio-decode @ package.json](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/whatsapp/package.json)
    - [baileys @ package.json](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/whatsapp/package.json)
    - [https-proxy-agent @ package.json](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/whatsapp/package.json)
    - [jimp @ package.json](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/whatsapp/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/whatsapp/package.json)
    - [undici @ package.json](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/whatsapp/package.json)

- 🟡 P2 **whatsapp** `upstream-metadata` `plugin-upstream-fix`
  - **package-min-host-version-drift**: whatsapp: OpenClaw package minimum host version drifts from build target
  - state: open · compat:none
  - evidence:
    - minHostVersion:>=2026.4.25
    - buildOpenClawVersion:2026.5.17

- 🟡 P2 **whatsapp** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: whatsapp: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/whatsapp/index.ts)
    - [setupEntry @ setup-entry.ts](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/whatsapp/setup-entry.ts)

## Contract Probe Backlog

- 🟠 P1 **memory-lancedb** `hook-runner`
  - contract: LLM observer hooks receive documented prompt/output fields with expected redaction behavior.
  - id: `hook.llm-observer.privacy-payload:memory-lancedb`
  - evidence:
    - [agent_end @ index.ts:1064](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/memory-lancedb/index.ts#L1064)

- 🟢 P3 **codex** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:codex`
  - evidence:
    - [registerCommand @ index.ts:46](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/codex/index.ts#L46)
    - [registerNodeHostCommand @ index.ts:41](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/codex/index.ts#L41)
    - [registerNodeInvokePolicy @ index.ts:44](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/codex/index.ts#L44)

- 🟢 P3 **diagnostics-prometheus** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:diagnostics-prometheus`
  - evidence:
    - [registerHttpRoute @ index.ts:12](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/diagnostics-prometheus/index.ts#L12)
    - [registerService @ index.ts:11](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/diagnostics-prometheus/index.ts#L11)

- 🟢 P3 **diffs** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:diffs`
  - evidence:
    - [registerHttpRoute @ plugin.ts:57](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/diffs/src/plugin.ts#L57)

- 🟢 P3 **google-meet** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:google-meet`
  - evidence:
    - [registerGatewayMethod @ index.ts:1005](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/google-meet/index.ts#L1005)
    - [registerGatewayMethod @ index.ts:731](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/google-meet/index.ts#L731)
    - [registerGatewayMethod @ index.ts:753](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/google-meet/index.ts#L753)
    - [registerGatewayMethod @ index.ts:775](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/google-meet/index.ts#L775)
    - [registerGatewayMethod @ index.ts:787](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/google-meet/index.ts#L787)
    - [registerGatewayMethod @ index.ts:805](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/google-meet/index.ts#L805)
    - [registerGatewayMethod @ index.ts:824](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/google-meet/index.ts#L824)
    - [registerGatewayMethod @ index.ts:848](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/google-meet/index.ts#L848)
    - [registerGatewayMethod @ index.ts:870](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/google-meet/index.ts#L870)
    - [registerGatewayMethod @ index.ts:894](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/google-meet/index.ts#L894)
    - [registerGatewayMethod @ index.ts:919](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/google-meet/index.ts#L919)
    - [registerGatewayMethod @ index.ts:930](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/google-meet/index.ts#L930)
    - [registerGatewayMethod @ index.ts:947](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/google-meet/index.ts#L947)
    - [registerGatewayMethod @ index.ts:966](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/google-meet/index.ts#L966)
    - [registerGatewayMethod @ index.ts:983](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/google-meet/index.ts#L983)
    - [registerNodeHostCommand @ index.ts:1194](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/google-meet/index.ts#L1194)

- 🟢 P3 **memory-lancedb** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:memory-lancedb`
  - evidence:
    - [registerService @ index.ts:1150](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/memory-lancedb/index.ts#L1150)
    - [registerService @ index.ts:645](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/memory-lancedb/index.ts#L645)

- 🟢 P3 **openclaw-qqbot** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:openclaw-qqbot`
  - evidence:
    - [registerCommand @ framework-registration.ts:37](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/qqbot/src/bridge/commands/framework-registration.ts#L37)

- 🟢 P3 **openclaw-qqbot** `manifest-loader`
  - contract: Legacy channel env metadata continues to map into channel setup/help surfaces.
  - id: `manifest.compat.channel-env-vars:openclaw-qqbot`
  - evidence:
    - qqbot

- 🟢 P3 **brave-plugin** `manifest-loader`
  - contract: Legacy provider auth env metadata continues to map into config/help surfaces.
  - id: `manifest.compat.provider-auth-env-vars:brave-plugin`
  - evidence:
    - brave

- 🟢 P3 **codex** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:codex`
  - evidence:
    - [@earendil-works/pi-coding-agent @ package.json](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/codex/package.json)
    - [@openai/codex @ package.json](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/codex/package.json)
    - [ajv @ package.json](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/codex/package.json)
    - [ws @ package.json](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/codex/package.json)
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/codex/package.json)

- 🟢 P3 **diffs** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:diffs`
  - evidence:
    - [@pierre/diffs @ package.json](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/diffs/package.json)
    - [@pierre/theme @ package.json](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/diffs/package.json)
    - [playwright-core @ package.json](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/diffs/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/diffs/package.json)
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/diffs/package.json)

- 🟢 P3 **google-meet** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:google-meet`
  - evidence:
    - [commander @ package.json](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/google-meet/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/google-meet/package.json)

- 🟢 P3 **memory-lancedb** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:memory-lancedb`
  - evidence:
    - [@lancedb/lancedb @ package.json](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/memory-lancedb/package.json)
    - [apache-arrow @ package.json](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/memory-lancedb/package.json)
    - [openai @ package.json](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/memory-lancedb/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/memory-lancedb/package.json)

- 🟢 P3 **openclaw-qqbot** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:openclaw-qqbot`
  - evidence:
    - [@tencent-connect/qqbot-connector @ package.json](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/qqbot/package.json)
    - [mpg123-decoder @ package.json](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/qqbot/package.json)
    - [silk-wasm @ package.json](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/qqbot/package.json)
    - [ws @ package.json](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/qqbot/package.json)
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/qqbot/package.json)

- 🟢 P3 **whatsapp** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:whatsapp`
  - evidence:
    - [audio-decode @ package.json](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/whatsapp/package.json)
    - [baileys @ package.json](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/whatsapp/package.json)
    - [https-proxy-agent @ package.json](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/whatsapp/package.json)
    - [jimp @ package.json](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/whatsapp/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/whatsapp/package.json)
    - [undici @ package.json](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/whatsapp/package.json)

- 🟢 P3 **brave-plugin** `package-loader`
  - contract: Inspector can compile or load TypeScript source entrypoints before registration capture.
  - id: `package.entrypoint.typescript-loader:brave-plugin`
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/brave/index.ts)

- 🟢 P3 **codex** `package-loader`
  - contract: Inspector can compile or load TypeScript source entrypoints before registration capture.
  - id: `package.entrypoint.typescript-loader:codex`
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/codex/index.ts)

- 🟢 P3 **diagnostics-prometheus** `package-loader`
  - contract: Inspector can compile or load TypeScript source entrypoints before registration capture.
  - id: `package.entrypoint.typescript-loader:diagnostics-prometheus`
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/diagnostics-prometheus/index.ts)

- 🟢 P3 **diffs** `package-loader`
  - contract: Inspector can compile or load TypeScript source entrypoints before registration capture.
  - id: `package.entrypoint.typescript-loader:diffs`
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/diffs/index.ts)

- 🟢 P3 **google-meet** `package-loader`
  - contract: Inspector can compile or load TypeScript source entrypoints before registration capture.
  - id: `package.entrypoint.typescript-loader:google-meet`
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/google-meet/index.ts)

- 🟢 P3 **memory-lancedb** `package-loader`
  - contract: Inspector can compile or load TypeScript source entrypoints before registration capture.
  - id: `package.entrypoint.typescript-loader:memory-lancedb`
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/memory-lancedb/index.ts)

- 🟢 P3 **openclaw-qqbot** `package-loader`
  - contract: Inspector can compile or load TypeScript source entrypoints before registration capture.
  - id: `package.entrypoint.typescript-loader:openclaw-qqbot`
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/qqbot/index.ts)
    - [setupEntry @ setup-entry.ts](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/qqbot/setup-entry.ts)

- 🟢 P3 **whatsapp** `package-loader`
  - contract: Inspector can compile or load TypeScript source entrypoints before registration capture.
  - id: `package.entrypoint.typescript-loader:whatsapp`
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/whatsapp/index.ts)
    - [setupEntry @ setup-entry.ts](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/whatsapp/setup-entry.ts)

- 🟢 P3 **brave-plugin** `package-loader`
  - contract: Release publishing metadata declares canonical ClawHub and npm install specs.
  - id: `package.metadata.install-release:brave-plugin`
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec

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

- 🟢 P3 **google-meet** `package-loader`
  - contract: Release publishing metadata declares canonical ClawHub and npm install specs.
  - id: `package.metadata.install-release:google-meet`
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec

- 🟢 P3 **memory-lancedb** `package-loader`
  - contract: Release publishing metadata declares canonical ClawHub and npm install specs.
  - id: `package.metadata.install-release:memory-lancedb`
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec

- 🟢 P3 **openclaw-qqbot** `package-loader`
  - contract: Release publishing metadata declares canonical ClawHub and npm install specs.
  - id: `package.metadata.install-release:openclaw-qqbot`
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec

- 🟢 P3 **brave-plugin** `package-loader`
  - contract: Install minimum host version matches the OpenClaw package surface targeted by the plugin.
  - id: `package.metadata.min-host-version:brave-plugin`
  - evidence:
    - minHostVersion:>=2026.4.10
    - buildOpenClawVersion:2026.5.17

- 🟢 P3 **codex** `package-loader`
  - contract: Install minimum host version matches the OpenClaw package surface targeted by the plugin.
  - id: `package.metadata.min-host-version:codex`
  - evidence:
    - minHostVersion:>=2026.5.1-beta.1
    - buildOpenClawVersion:2026.5.17

- 🟢 P3 **diagnostics-prometheus** `package-loader`
  - contract: Install minimum host version matches the OpenClaw package surface targeted by the plugin.
  - id: `package.metadata.min-host-version:diagnostics-prometheus`
  - evidence:
    - minHostVersion:>=2026.4.25
    - buildOpenClawVersion:2026.5.17

- 🟢 P3 **diffs** `package-loader`
  - contract: Install minimum host version matches the OpenClaw package surface targeted by the plugin.
  - id: `package.metadata.min-host-version:diffs`
  - evidence:
    - minHostVersion:>=2026.4.30
    - buildOpenClawVersion:2026.5.17

- 🟢 P3 **google-meet** `package-loader`
  - contract: Install minimum host version matches the OpenClaw package surface targeted by the plugin.
  - id: `package.metadata.min-host-version:google-meet`
  - evidence:
    - minHostVersion:>=2026.4.20
    - buildOpenClawVersion:2026.5.17

- 🟢 P3 **memory-lancedb** `package-loader`
  - contract: Install minimum host version matches the OpenClaw package surface targeted by the plugin.
  - id: `package.metadata.min-host-version:memory-lancedb`
  - evidence:
    - minHostVersion:>=2026.4.10
    - buildOpenClawVersion:2026.5.17

- 🟢 P3 **openclaw-qqbot** `package-loader`
  - contract: Install minimum host version matches the OpenClaw package surface targeted by the plugin.
  - id: `package.metadata.min-host-version:openclaw-qqbot`
  - evidence:
    - minHostVersion:>=2026.4.10
    - buildOpenClawVersion:2026.5.17

- 🟢 P3 **whatsapp** `package-loader`
  - contract: Install minimum host version matches the OpenClaw package surface targeted by the plugin.
  - id: `package.metadata.min-host-version:whatsapp`
  - evidence:
    - minHostVersion:>=2026.4.25
    - buildOpenClawVersion:2026.5.17

- 🟢 P3 **codex** `sdk-import`
  - contract: External plugins use documented public SDK subpaths instead of reserved bundled-plugin compatibility shims.
  - id: `sdk.import.reserved-bundled-plugin-boundary:codex`
  - evidence:
    - [openclaw/plugin-sdk/codex-mcp-projection @ thread-lifecycle.ts:6](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/codex/src/app-server/thread-lifecycle.ts#L6)
    - [openclaw/plugin-sdk/codex-native-task-runtime @ native-subagent-task-mirror.ts:5](https://github.com/openclaw/openclaw/blob/5774517fcee647294d3b7a23dd9255777d6aaffb/extensions/codex/src/app-server/native-subagent-task-mirror.ts#L5)
