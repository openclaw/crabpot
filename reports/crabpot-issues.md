# Crabpot Issue Findings

Generated: deterministic
Status: PASS


## Crabpot Target Context

- **OpenClaw host track:** `development`
- **Plugin artifact track:** `source-pack`
- **Fixture set:** `openclaw-beta (8 fixtures)`
- **Runtime evidence:** `reports/crabpot-execution-results.json` (10 capture artifacts, 67 captured registrations/hooks)
## Triage Summary

| Metric                     | Value |
| -------------------------- | ----- |
| Issue findings             | 39    |
| Open issue findings        | 33    |
| Runtime-covered findings   | 6     |
| Runtime-partial findings   | 1     |
| 🔴 P0                      | 0     |
| 🟠 P1                      | 13    |
| Open 🔴 P0                 | 0     |
| Open 🟠 P1                 | 12    |
| Live issues                | 0     |
| Live P0 issues             | 0     |
| Compat gaps                | 12    |
| Deprecation warnings       | 0     |
| Inspector gaps             | 21    |
| Open inspector gaps        | 15    |
| Runtime coverage artifacts | 20    |
| Upstream metadata          | 6     |
| Contract probes            | 32    |

## Triage Overview

| Class               | Count | P0 | Meaning                                                                                                                                                  |
| ------------------- | ----- | -- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| live-issue          | 0     | 0  | Potential runtime breakage in the target OpenClaw/plugin pair. P0 only when it is not a deprecated compat seam.                                          |
| compat-gap          | 12    | -  | Compatibility behavior is needed but missing from the target OpenClaw compat registry.                                                                   |
| deprecation-warning | 0     | -  | Plugin uses a supported but deprecated compatibility seam; keep it wired while migration exists.                                                         |
| inspector-gap       | 21    | -  | Plugin Inspector needs stronger capture/probe evidence before making contract judgments. Runtime-covered rows are proof-backed and not open report work. |
| upstream-metadata   | 6     | -  | Plugin package or manifest metadata should improve upstream; not a target OpenClaw live break by itself.                                                 |
| fixture-regression  | 0     | -  | Fixture no longer exposes an expected seam; investigate fixture pin or scanner drift.                                                                    |

## P0 Live Issues

_none_

## Other Live Issues

_none_

## Compat Gaps

- 🟠 P1 **codex** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: codex: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **codex** `compat-gap` `core-compat-adapter`
  - **sdk-export-missing**: codex: plugin SDK import aliases are missing from target package exports
  - state: open · compat:untracked
  - evidence:
    - [openclaw/plugin-sdk/agent-runtime-test-contracts @ event-projector.test-harness.ts:12](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/codex/src/app-server/event-projector.test-harness.ts#L12)
    - [openclaw/plugin-sdk/plugin-test-runtime @ event-projector.test-harness.ts:23](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/codex/src/app-server/event-projector.test-harness.ts#L23)

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

- 🟠 P1 **diffs** `compat-gap` `core-compat-adapter`
  - **sdk-export-missing**: diffs: plugin SDK import aliases are missing from target package exports
  - state: open · compat:untracked
  - evidence:
    - [openclaw/plugin-sdk/plugin-state-test-runtime @ test-helpers.ts:8](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/diffs/src/test-helpers.ts#L8)

- 🟠 P1 **google-meet** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: google-meet: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **google-meet** `compat-gap` `core-compat-adapter`
  - **sdk-export-missing**: google-meet: plugin SDK import aliases are missing from target package exports
  - state: open · compat:untracked
  - evidence:
    - [openclaw/plugin-sdk/plugin-test-api @ plugin-harness.ts:3](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/google-meet/src/test-support/plugin-harness.ts#L3)

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

- 🟠 P1 **openclaw-qqbot** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: openclaw-qqbot: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **openclaw-qqbot** `compat-gap` `core-compat-adapter`
  - **sdk-export-missing**: openclaw-qqbot: plugin SDK import aliases are missing from target package exports
  - state: open · compat:untracked
  - evidence:
    - [openclaw/plugin-sdk/plugin-state-test-runtime @ ingress.test-support.ts:4](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/qqbot/src/engine/gateway/ingress.test-support.ts#L4)
    - [openclaw/plugin-sdk/plugin-state-test-runtime @ runtime.ts:4](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/qqbot/src/test-support/runtime.ts#L4)

- 🟠 P1 **whatsapp** `compat-gap` `core-compat-adapter`
  - **sdk-export-missing**: whatsapp: plugin SDK import aliases are missing from target package exports
  - state: open · compat:untracked
  - evidence:
    - [openclaw/plugin-sdk/channel-test-helpers @ test-helpers.ts:5](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/whatsapp/src/test-helpers.ts#L5)
    - [openclaw/plugin-sdk/plugin-state-test-runtime @ monitor-inbox.test-harness.ts:6](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/whatsapp/src/monitor-inbox.test-harness.ts#L6)
    - [openclaw/plugin-sdk/plugin-test-runtime @ auto-reply.broadcast-groups.test-harness.ts:2](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/whatsapp/src/auto-reply.broadcast-groups.test-harness.ts#L2)
    - [openclaw/plugin-sdk/plugin-test-runtime @ auto-reply.test-harness.ts:7](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/whatsapp/src/auto-reply.test-harness.ts#L7)
    - [openclaw/plugin-sdk/test-env @ auto-reply.test-harness.ts:10](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/whatsapp/src/auto-reply.test-harness.ts#L10)

## Deprecation Warnings

_none_

## Inspector Proof Gaps

- 🟡 P2 **brave-plugin** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: brave-plugin: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/brave/index.ts)

- 🟡 P2 **codex** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: codex: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@openai/codex @ package.json](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/codex/package.json)
    - [smol-toml @ package.json](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/codex/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/codex/package.json)
    - [ws @ package.json](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/codex/package.json)
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/codex/package.json)

- 🟡 P2 **codex** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: codex: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/codex/index.ts)

- 🟡 P2 **codex** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: codex: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:untracked · runtime:partial
  - evidence:
    - [registerCommand @ index.ts:208](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/codex/index.ts#L208)
    - [registerNodeHostCommand @ index.ts:143](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/codex/index.ts#L143)
    - [registerNodeHostCommand @ index.ts:203](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/codex/index.ts#L203)
    - [registerNodeInvokePolicy @ index.ts:147](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/codex/index.ts#L147)
    - [registerNodeInvokePolicy @ index.ts:206](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/codex/index.ts#L206)
    - [registerService @ index.ts:96](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/codex/index.ts#L96)
  - runtime coverage:
    - captured registration:registerCommand
    - captured registration:registerNodeHostCommand
    - captured registration:registerNodeInvokePolicy
    - .crabpot/results/codex/cold-import-extension-codex-plugins-codex-crabpot-package-index-ts.capture.json
    - .crabpot/results/codex/cold-import-extension-codex-plugins-codex-crabpot-package-index-ts.synthetic.json

- 🟡 P2 **diagnostics-prometheus** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: diagnostics-prometheus: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/diagnostics-prometheus/index.ts)

- 🟡 P2 **diffs** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: diffs: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@pierre/diffs @ package.json](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/diffs/package.json)
    - [@shikijs/langs @ package.json](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/diffs/package.json)
    - [playwright-core @ package.json](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/diffs/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/diffs/package.json)
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/diffs/package.json)

- 🟡 P2 **diffs** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: diffs: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/diffs/index.ts)

- 🟡 P2 **google-meet** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: google-meet: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [jszip @ package.json](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/google-meet/package.json)
    - [pretty-ms @ package.json](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/google-meet/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/google-meet/package.json)

- 🟡 P2 **google-meet** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: google-meet: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/google-meet/index.ts)

- 🟡 P2 **memory-lancedb** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: memory-lancedb: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@lancedb/lancedb @ package.json](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/memory-lancedb/package.json)
    - [apache-arrow @ package.json](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/memory-lancedb/package.json)
    - [openai @ package.json](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/memory-lancedb/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/memory-lancedb/package.json)

- 🟡 P2 **memory-lancedb** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: memory-lancedb: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/memory-lancedb/index.ts)

- 🟡 P2 **openclaw-qqbot** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: openclaw-qqbot: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@tencent-connect/qqbot-connector @ package.json](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/qqbot/package.json)
    - [mpg123-decoder @ package.json](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/qqbot/package.json)
    - [p-map @ package.json](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/qqbot/package.json)
    - [pretty-ms @ package.json](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/qqbot/package.json)
    - [silk-wasm @ package.json](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/qqbot/package.json)
    - [ws @ package.json](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/qqbot/package.json)
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/qqbot/package.json)

- 🟡 P2 **openclaw-qqbot** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: openclaw-qqbot: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/qqbot/index.ts)
    - [setupEntry @ setup-entry.ts](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/qqbot/setup-entry.ts)

- 🟡 P2 **whatsapp** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: whatsapp: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [audio-decode @ package.json](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/whatsapp/package.json)
    - [baileys @ package.json](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/whatsapp/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/whatsapp/package.json)

- 🟡 P2 **whatsapp** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: whatsapp: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/whatsapp/index.ts)
    - [setupEntry @ setup-entry.ts](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/whatsapp/setup-entry.ts)

## Runtime-Covered Inspector Gaps

- 🟠 P1 **memory-lancedb** `inspector-gap` `inspector-follow-up`
  - **conversation-access-hook**: memory-lancedb: conversation-access hooks need privacy-boundary probes
  - state: runtime-covered · compat:untracked · runtime:covered
  - evidence:
    - [agent_end @ index.ts:599](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/memory-lancedb/index.ts#L599)
  - runtime coverage:
    - captured hook:agent_end
    - .crabpot/results/memory-lancedb/cold-import-extension-memory-lancedb-plugins-memory-lancedb-crabpot-package-index-ts.capture.json
    - .crabpot/results/memory-lancedb/cold-import-extension-memory-lancedb-plugins-memory-lancedb-crabpot-package-index-ts.synthetic.json

- 🟡 P2 **diagnostics-prometheus** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: diagnostics-prometheus: runtime registrations need capture evidence before final contract judgment
  - state: runtime-covered · compat:untracked · runtime:covered
  - evidence:
    - [registerHttpRoute @ index.ts:13](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/diagnostics-prometheus/index.ts#L13)
    - [registerService @ index.ts:12](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/diagnostics-prometheus/index.ts#L12)
  - runtime coverage:
    - captured registration:registerHttpRoute
    - captured registration:registerService
    - .crabpot/results/diagnostics-prometheus/cold-import-extension-diagnostics-prometheus-plugins-diagnostics-prometheus-crabpot-package-index-ts.capture.json
    - .crabpot/results/diagnostics-prometheus/cold-import-extension-diagnostics-prometheus-plugins-diagnostics-prometheus-crabpot-package-index-ts.synthetic.json

- 🟡 P2 **diffs** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: diffs: runtime registrations need capture evidence before final contract judgment
  - state: runtime-covered · compat:untracked · runtime:covered
  - evidence:
    - [registerHttpRoute @ plugin.ts:74](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/diffs/src/plugin.ts#L74)
  - runtime coverage:
    - captured registration:registerHttpRoute
    - .crabpot/results/diffs/cold-import-extension-diffs-plugins-diffs-crabpot-package-index-ts.capture.json
    - .crabpot/results/diffs/cold-import-extension-diffs-plugins-diffs-crabpot-package-index-ts.synthetic.json

- 🟡 P2 **google-meet** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: google-meet: runtime registrations need capture evidence before final contract judgment
  - state: runtime-covered · compat:untracked · runtime:covered
  - evidence:
    - [registerGatewayMethod @ index.ts:45](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/google-meet/index.ts#L45)
    - [registerNodeHostCommand @ index.ts:369](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/google-meet/index.ts#L369)
    - [registerNodeInvokePolicy @ index.ts:376](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/google-meet/index.ts#L376)
  - runtime coverage:
    - captured registration:registerGatewayMethod
    - captured registration:registerNodeHostCommand
    - captured registration:registerNodeInvokePolicy
    - .crabpot/results/google-meet/cold-import-extension-google-meet-plugins-google-meet-crabpot-package-index-ts.capture.json
    - .crabpot/results/google-meet/cold-import-extension-google-meet-plugins-google-meet-crabpot-package-index-ts.synthetic.json

- 🟡 P2 **memory-lancedb** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: memory-lancedb: runtime registrations need capture evidence before final contract judgment
  - state: runtime-covered · compat:untracked · runtime:covered
  - evidence:
    - [registerService @ index.ts:690](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/memory-lancedb/index.ts#L690)
    - [registerService @ index.ts:97](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/memory-lancedb/index.ts#L97)
  - runtime coverage:
    - captured registration:registerService
    - .crabpot/results/memory-lancedb/cold-import-extension-memory-lancedb-plugins-memory-lancedb-crabpot-package-index-ts.capture.json
    - .crabpot/results/memory-lancedb/cold-import-extension-memory-lancedb-plugins-memory-lancedb-crabpot-package-index-ts.synthetic.json

- 🟡 P2 **openclaw-qqbot** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: openclaw-qqbot: runtime registrations need capture evidence before final contract judgment
  - state: runtime-covered · compat:untracked · runtime:covered
  - evidence:
    - [registerCommand @ framework-registration.ts:37](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/qqbot/src/bridge/commands/framework-registration.ts#L37)
  - runtime coverage:
    - captured registration:registerCommand
    - .crabpot/results/openclaw-qqbot/cold-import-extension-openclaw-qqbot-plugins-openclaw-qqbot-crabpot-package-index-ts.capture.json
    - .crabpot/results/openclaw-qqbot/cold-import-extension-openclaw-qqbot-plugins-openclaw-qqbot-crabpot-package-index-ts.synthetic.json
    - .crabpot/results/openclaw-qqbot/cold-import-setupEntry-openclaw-qqbot-plugins-openclaw-qqbot-crabpot-package-setup-entry-ts.capture.json
    - .crabpot/results/openclaw-qqbot/cold-import-setupEntry-openclaw-qqbot-plugins-openclaw-qqbot-crabpot-package-setup-entry-ts.synthetic.json

## Upstream Metadata Issues

- 🟡 P2 **brave-plugin** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: brave-plugin: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec
  - author remediation:
    - Complete the OpenClaw install metadata so ClawHub can identify the install target.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-install-metadata-incomplete

- 🟡 P2 **codex** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: codex: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec
  - author remediation:
    - Complete the OpenClaw install metadata so ClawHub can identify the install target.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-install-metadata-incomplete

- 🟡 P2 **diffs** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: diffs: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec
  - author remediation:
    - Complete the OpenClaw install metadata so ClawHub can identify the install target.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-install-metadata-incomplete

- 🟡 P2 **google-meet** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: google-meet: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec
  - author remediation:
    - Complete the OpenClaw install metadata so ClawHub can identify the install target.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-install-metadata-incomplete

- 🟡 P2 **memory-lancedb** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: memory-lancedb: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec
  - author remediation:
    - Complete the OpenClaw install metadata so ClawHub can identify the install target.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-install-metadata-incomplete

- 🟡 P2 **openclaw-qqbot** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: openclaw-qqbot: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec
  - author remediation:
    - Complete the OpenClaw install metadata so ClawHub can identify the install target.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-install-metadata-incomplete

## Issues

- 🟠 P1 **codex** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: codex: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **codex** `compat-gap` `core-compat-adapter`
  - **sdk-export-missing**: codex: plugin SDK import aliases are missing from target package exports
  - state: open · compat:untracked
  - evidence:
    - [openclaw/plugin-sdk/agent-runtime-test-contracts @ event-projector.test-harness.ts:12](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/codex/src/app-server/event-projector.test-harness.ts#L12)
    - [openclaw/plugin-sdk/plugin-test-runtime @ event-projector.test-harness.ts:23](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/codex/src/app-server/event-projector.test-harness.ts#L23)

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

- 🟠 P1 **diffs** `compat-gap` `core-compat-adapter`
  - **sdk-export-missing**: diffs: plugin SDK import aliases are missing from target package exports
  - state: open · compat:untracked
  - evidence:
    - [openclaw/plugin-sdk/plugin-state-test-runtime @ test-helpers.ts:8](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/diffs/src/test-helpers.ts#L8)

- 🟠 P1 **google-meet** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: google-meet: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **google-meet** `compat-gap` `core-compat-adapter`
  - **sdk-export-missing**: google-meet: plugin SDK import aliases are missing from target package exports
  - state: open · compat:untracked
  - evidence:
    - [openclaw/plugin-sdk/plugin-test-api @ plugin-harness.ts:3](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/google-meet/src/test-support/plugin-harness.ts#L3)

- 🟠 P1 **memory-lancedb** `inspector-gap` `inspector-follow-up`
  - **conversation-access-hook**: memory-lancedb: conversation-access hooks need privacy-boundary probes
  - state: runtime-covered · compat:untracked · runtime:covered
  - evidence:
    - [agent_end @ index.ts:599](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/memory-lancedb/index.ts#L599)
  - runtime coverage:
    - captured hook:agent_end
    - .crabpot/results/memory-lancedb/cold-import-extension-memory-lancedb-plugins-memory-lancedb-crabpot-package-index-ts.capture.json
    - .crabpot/results/memory-lancedb/cold-import-extension-memory-lancedb-plugins-memory-lancedb-crabpot-package-index-ts.synthetic.json

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

- 🟠 P1 **openclaw-qqbot** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: openclaw-qqbot: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **openclaw-qqbot** `compat-gap` `core-compat-adapter`
  - **sdk-export-missing**: openclaw-qqbot: plugin SDK import aliases are missing from target package exports
  - state: open · compat:untracked
  - evidence:
    - [openclaw/plugin-sdk/plugin-state-test-runtime @ ingress.test-support.ts:4](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/qqbot/src/engine/gateway/ingress.test-support.ts#L4)
    - [openclaw/plugin-sdk/plugin-state-test-runtime @ runtime.ts:4](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/qqbot/src/test-support/runtime.ts#L4)

- 🟠 P1 **whatsapp** `compat-gap` `core-compat-adapter`
  - **sdk-export-missing**: whatsapp: plugin SDK import aliases are missing from target package exports
  - state: open · compat:untracked
  - evidence:
    - [openclaw/plugin-sdk/channel-test-helpers @ test-helpers.ts:5](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/whatsapp/src/test-helpers.ts#L5)
    - [openclaw/plugin-sdk/plugin-state-test-runtime @ monitor-inbox.test-harness.ts:6](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/whatsapp/src/monitor-inbox.test-harness.ts#L6)
    - [openclaw/plugin-sdk/plugin-test-runtime @ auto-reply.broadcast-groups.test-harness.ts:2](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/whatsapp/src/auto-reply.broadcast-groups.test-harness.ts#L2)
    - [openclaw/plugin-sdk/plugin-test-runtime @ auto-reply.test-harness.ts:7](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/whatsapp/src/auto-reply.test-harness.ts#L7)
    - [openclaw/plugin-sdk/test-env @ auto-reply.test-harness.ts:10](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/whatsapp/src/auto-reply.test-harness.ts#L10)

- 🟡 P2 **brave-plugin** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: brave-plugin: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec
  - author remediation:
    - Complete the OpenClaw install metadata so ClawHub can identify the install target.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-install-metadata-incomplete

- 🟡 P2 **brave-plugin** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: brave-plugin: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/brave/index.ts)

- 🟡 P2 **codex** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: codex: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@openai/codex @ package.json](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/codex/package.json)
    - [smol-toml @ package.json](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/codex/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/codex/package.json)
    - [ws @ package.json](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/codex/package.json)
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/codex/package.json)

- 🟡 P2 **codex** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: codex: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec
  - author remediation:
    - Complete the OpenClaw install metadata so ClawHub can identify the install target.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-install-metadata-incomplete

- 🟡 P2 **codex** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: codex: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/codex/index.ts)

- 🟡 P2 **codex** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: codex: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:untracked · runtime:partial
  - evidence:
    - [registerCommand @ index.ts:208](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/codex/index.ts#L208)
    - [registerNodeHostCommand @ index.ts:143](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/codex/index.ts#L143)
    - [registerNodeHostCommand @ index.ts:203](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/codex/index.ts#L203)
    - [registerNodeInvokePolicy @ index.ts:147](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/codex/index.ts#L147)
    - [registerNodeInvokePolicy @ index.ts:206](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/codex/index.ts#L206)
    - [registerService @ index.ts:96](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/codex/index.ts#L96)
  - runtime coverage:
    - captured registration:registerCommand
    - captured registration:registerNodeHostCommand
    - captured registration:registerNodeInvokePolicy
    - .crabpot/results/codex/cold-import-extension-codex-plugins-codex-crabpot-package-index-ts.capture.json
    - .crabpot/results/codex/cold-import-extension-codex-plugins-codex-crabpot-package-index-ts.synthetic.json

- 🟡 P2 **diagnostics-prometheus** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: diagnostics-prometheus: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/diagnostics-prometheus/index.ts)

- 🟡 P2 **diagnostics-prometheus** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: diagnostics-prometheus: runtime registrations need capture evidence before final contract judgment
  - state: runtime-covered · compat:untracked · runtime:covered
  - evidence:
    - [registerHttpRoute @ index.ts:13](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/diagnostics-prometheus/index.ts#L13)
    - [registerService @ index.ts:12](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/diagnostics-prometheus/index.ts#L12)
  - runtime coverage:
    - captured registration:registerHttpRoute
    - captured registration:registerService
    - .crabpot/results/diagnostics-prometheus/cold-import-extension-diagnostics-prometheus-plugins-diagnostics-prometheus-crabpot-package-index-ts.capture.json
    - .crabpot/results/diagnostics-prometheus/cold-import-extension-diagnostics-prometheus-plugins-diagnostics-prometheus-crabpot-package-index-ts.synthetic.json

- 🟡 P2 **diffs** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: diffs: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@pierre/diffs @ package.json](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/diffs/package.json)
    - [@shikijs/langs @ package.json](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/diffs/package.json)
    - [playwright-core @ package.json](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/diffs/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/diffs/package.json)
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/diffs/package.json)

- 🟡 P2 **diffs** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: diffs: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec
  - author remediation:
    - Complete the OpenClaw install metadata so ClawHub can identify the install target.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-install-metadata-incomplete

- 🟡 P2 **diffs** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: diffs: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/diffs/index.ts)

- 🟡 P2 **diffs** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: diffs: runtime registrations need capture evidence before final contract judgment
  - state: runtime-covered · compat:untracked · runtime:covered
  - evidence:
    - [registerHttpRoute @ plugin.ts:74](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/diffs/src/plugin.ts#L74)
  - runtime coverage:
    - captured registration:registerHttpRoute
    - .crabpot/results/diffs/cold-import-extension-diffs-plugins-diffs-crabpot-package-index-ts.capture.json
    - .crabpot/results/diffs/cold-import-extension-diffs-plugins-diffs-crabpot-package-index-ts.synthetic.json

- 🟡 P2 **google-meet** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: google-meet: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [jszip @ package.json](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/google-meet/package.json)
    - [pretty-ms @ package.json](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/google-meet/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/google-meet/package.json)

- 🟡 P2 **google-meet** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: google-meet: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec
  - author remediation:
    - Complete the OpenClaw install metadata so ClawHub can identify the install target.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-install-metadata-incomplete

- 🟡 P2 **google-meet** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: google-meet: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/google-meet/index.ts)

- 🟡 P2 **google-meet** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: google-meet: runtime registrations need capture evidence before final contract judgment
  - state: runtime-covered · compat:untracked · runtime:covered
  - evidence:
    - [registerGatewayMethod @ index.ts:45](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/google-meet/index.ts#L45)
    - [registerNodeHostCommand @ index.ts:369](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/google-meet/index.ts#L369)
    - [registerNodeInvokePolicy @ index.ts:376](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/google-meet/index.ts#L376)
  - runtime coverage:
    - captured registration:registerGatewayMethod
    - captured registration:registerNodeHostCommand
    - captured registration:registerNodeInvokePolicy
    - .crabpot/results/google-meet/cold-import-extension-google-meet-plugins-google-meet-crabpot-package-index-ts.capture.json
    - .crabpot/results/google-meet/cold-import-extension-google-meet-plugins-google-meet-crabpot-package-index-ts.synthetic.json

- 🟡 P2 **memory-lancedb** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: memory-lancedb: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@lancedb/lancedb @ package.json](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/memory-lancedb/package.json)
    - [apache-arrow @ package.json](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/memory-lancedb/package.json)
    - [openai @ package.json](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/memory-lancedb/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/memory-lancedb/package.json)

- 🟡 P2 **memory-lancedb** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: memory-lancedb: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec
  - author remediation:
    - Complete the OpenClaw install metadata so ClawHub can identify the install target.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-install-metadata-incomplete

- 🟡 P2 **memory-lancedb** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: memory-lancedb: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/memory-lancedb/index.ts)

- 🟡 P2 **memory-lancedb** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: memory-lancedb: runtime registrations need capture evidence before final contract judgment
  - state: runtime-covered · compat:untracked · runtime:covered
  - evidence:
    - [registerService @ index.ts:690](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/memory-lancedb/index.ts#L690)
    - [registerService @ index.ts:97](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/memory-lancedb/index.ts#L97)
  - runtime coverage:
    - captured registration:registerService
    - .crabpot/results/memory-lancedb/cold-import-extension-memory-lancedb-plugins-memory-lancedb-crabpot-package-index-ts.capture.json
    - .crabpot/results/memory-lancedb/cold-import-extension-memory-lancedb-plugins-memory-lancedb-crabpot-package-index-ts.synthetic.json

- 🟡 P2 **openclaw-qqbot** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: openclaw-qqbot: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@tencent-connect/qqbot-connector @ package.json](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/qqbot/package.json)
    - [mpg123-decoder @ package.json](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/qqbot/package.json)
    - [p-map @ package.json](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/qqbot/package.json)
    - [pretty-ms @ package.json](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/qqbot/package.json)
    - [silk-wasm @ package.json](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/qqbot/package.json)
    - [ws @ package.json](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/qqbot/package.json)
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/qqbot/package.json)

- 🟡 P2 **openclaw-qqbot** `upstream-metadata` `plugin-upstream-fix`
  - **package-install-metadata-incomplete**: openclaw-qqbot: OpenClaw package install metadata is incomplete
  - state: open · compat:none
  - evidence:
    - openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec
  - author remediation:
    - Complete the OpenClaw install metadata so ClawHub can identify the install target.
    - docs: https://docs.openclaw.ai/clawhub/plugin-validation-fixes#package-install-metadata-incomplete

- 🟡 P2 **openclaw-qqbot** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: openclaw-qqbot: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/qqbot/index.ts)
    - [setupEntry @ setup-entry.ts](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/qqbot/setup-entry.ts)

- 🟡 P2 **openclaw-qqbot** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: openclaw-qqbot: runtime registrations need capture evidence before final contract judgment
  - state: runtime-covered · compat:untracked · runtime:covered
  - evidence:
    - [registerCommand @ framework-registration.ts:37](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/qqbot/src/bridge/commands/framework-registration.ts#L37)
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
    - [audio-decode @ package.json](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/whatsapp/package.json)
    - [baileys @ package.json](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/whatsapp/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/whatsapp/package.json)

- 🟡 P2 **whatsapp** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: whatsapp: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/whatsapp/index.ts)
    - [setupEntry @ setup-entry.ts](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/whatsapp/setup-entry.ts)

## Contract Probe Backlog

- 🟠 P1 **memory-lancedb** `hook-runner`
  - contract: LLM observer hooks receive documented prompt/output fields with expected redaction behavior.
  - id: `hook.llm-observer.privacy-payload:memory-lancedb`
  - evidence:
    - [agent_end @ index.ts:599](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/memory-lancedb/index.ts#L599)

- 🟠 P1 **codex** `sdk-alias`
  - contract: Every observed OpenClaw plugin SDK import remains exported by the target OpenClaw package.
  - id: `sdk.import.package-export-cold-import:codex`
  - evidence:
    - [openclaw/plugin-sdk/agent-runtime-test-contracts @ event-projector.test-harness.ts:12](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/codex/src/app-server/event-projector.test-harness.ts#L12)
    - [openclaw/plugin-sdk/plugin-test-runtime @ event-projector.test-harness.ts:23](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/codex/src/app-server/event-projector.test-harness.ts#L23)

- 🟠 P1 **diffs** `sdk-alias`
  - contract: Every observed OpenClaw plugin SDK import remains exported by the target OpenClaw package.
  - id: `sdk.import.package-export-cold-import:diffs`
  - evidence:
    - [openclaw/plugin-sdk/plugin-state-test-runtime @ test-helpers.ts:8](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/diffs/src/test-helpers.ts#L8)

- 🟠 P1 **google-meet** `sdk-alias`
  - contract: Every observed OpenClaw plugin SDK import remains exported by the target OpenClaw package.
  - id: `sdk.import.package-export-cold-import:google-meet`
  - evidence:
    - [openclaw/plugin-sdk/plugin-test-api @ plugin-harness.ts:3](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/google-meet/src/test-support/plugin-harness.ts#L3)

- 🟠 P1 **openclaw-qqbot** `sdk-alias`
  - contract: Every observed OpenClaw plugin SDK import remains exported by the target OpenClaw package.
  - id: `sdk.import.package-export-cold-import:openclaw-qqbot`
  - evidence:
    - [openclaw/plugin-sdk/plugin-state-test-runtime @ ingress.test-support.ts:4](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/qqbot/src/engine/gateway/ingress.test-support.ts#L4)
    - [openclaw/plugin-sdk/plugin-state-test-runtime @ runtime.ts:4](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/qqbot/src/test-support/runtime.ts#L4)

- 🟠 P1 **whatsapp** `sdk-alias`
  - contract: Every observed OpenClaw plugin SDK import remains exported by the target OpenClaw package.
  - id: `sdk.import.package-export-cold-import:whatsapp`
  - evidence:
    - [openclaw/plugin-sdk/channel-test-helpers @ test-helpers.ts:5](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/whatsapp/src/test-helpers.ts#L5)
    - [openclaw/plugin-sdk/plugin-state-test-runtime @ monitor-inbox.test-harness.ts:6](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/whatsapp/src/monitor-inbox.test-harness.ts#L6)
    - [openclaw/plugin-sdk/plugin-test-runtime @ auto-reply.broadcast-groups.test-harness.ts:2](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/whatsapp/src/auto-reply.broadcast-groups.test-harness.ts#L2)
    - [openclaw/plugin-sdk/plugin-test-runtime @ auto-reply.test-harness.ts:7](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/whatsapp/src/auto-reply.test-harness.ts#L7)
    - [openclaw/plugin-sdk/test-env @ auto-reply.test-harness.ts:10](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/whatsapp/src/auto-reply.test-harness.ts#L10)

- 🟢 P3 **codex** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:codex`
  - evidence:
    - [registerCommand @ index.ts:208](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/codex/index.ts#L208)
    - [registerNodeHostCommand @ index.ts:143](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/codex/index.ts#L143)
    - [registerNodeHostCommand @ index.ts:203](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/codex/index.ts#L203)
    - [registerNodeInvokePolicy @ index.ts:147](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/codex/index.ts#L147)
    - [registerNodeInvokePolicy @ index.ts:206](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/codex/index.ts#L206)
    - [registerService @ index.ts:96](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/codex/index.ts#L96)

- 🟢 P3 **diagnostics-prometheus** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:diagnostics-prometheus`
  - evidence:
    - [registerHttpRoute @ index.ts:13](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/diagnostics-prometheus/index.ts#L13)
    - [registerService @ index.ts:12](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/diagnostics-prometheus/index.ts#L12)

- 🟢 P3 **diffs** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:diffs`
  - evidence:
    - [registerHttpRoute @ plugin.ts:74](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/diffs/src/plugin.ts#L74)

- 🟢 P3 **google-meet** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:google-meet`
  - evidence:
    - [registerGatewayMethod @ index.ts:45](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/google-meet/index.ts#L45)
    - [registerNodeHostCommand @ index.ts:369](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/google-meet/index.ts#L369)
    - [registerNodeInvokePolicy @ index.ts:376](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/google-meet/index.ts#L376)

- 🟢 P3 **memory-lancedb** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:memory-lancedb`
  - evidence:
    - [registerService @ index.ts:690](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/memory-lancedb/index.ts#L690)
    - [registerService @ index.ts:97](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/memory-lancedb/index.ts#L97)

- 🟢 P3 **openclaw-qqbot** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:openclaw-qqbot`
  - evidence:
    - [registerCommand @ framework-registration.ts:37](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/qqbot/src/bridge/commands/framework-registration.ts#L37)

- 🟢 P3 **codex** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:codex`
  - evidence:
    - [@openai/codex @ package.json](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/codex/package.json)
    - [smol-toml @ package.json](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/codex/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/codex/package.json)
    - [ws @ package.json](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/codex/package.json)
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/codex/package.json)

- 🟢 P3 **diffs** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:diffs`
  - evidence:
    - [@pierre/diffs @ package.json](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/diffs/package.json)
    - [@shikijs/langs @ package.json](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/diffs/package.json)
    - [playwright-core @ package.json](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/diffs/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/diffs/package.json)
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/diffs/package.json)

- 🟢 P3 **google-meet** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:google-meet`
  - evidence:
    - [jszip @ package.json](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/google-meet/package.json)
    - [pretty-ms @ package.json](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/google-meet/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/google-meet/package.json)

- 🟢 P3 **memory-lancedb** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:memory-lancedb`
  - evidence:
    - [@lancedb/lancedb @ package.json](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/memory-lancedb/package.json)
    - [apache-arrow @ package.json](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/memory-lancedb/package.json)
    - [openai @ package.json](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/memory-lancedb/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/memory-lancedb/package.json)

- 🟢 P3 **openclaw-qqbot** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:openclaw-qqbot`
  - evidence:
    - [@tencent-connect/qqbot-connector @ package.json](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/qqbot/package.json)
    - [mpg123-decoder @ package.json](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/qqbot/package.json)
    - [p-map @ package.json](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/qqbot/package.json)
    - [pretty-ms @ package.json](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/qqbot/package.json)
    - [silk-wasm @ package.json](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/qqbot/package.json)
    - [ws @ package.json](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/qqbot/package.json)
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/qqbot/package.json)

- 🟢 P3 **whatsapp** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:whatsapp`
  - evidence:
    - [audio-decode @ package.json](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/whatsapp/package.json)
    - [baileys @ package.json](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/whatsapp/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/whatsapp/package.json)

- 🟢 P3 **brave-plugin** `package-loader`
  - contract: Inspector can compile or load TypeScript source entrypoints before registration capture.
  - id: `package.entrypoint.typescript-loader:brave-plugin`
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/brave/index.ts)

- 🟢 P3 **codex** `package-loader`
  - contract: Inspector can compile or load TypeScript source entrypoints before registration capture.
  - id: `package.entrypoint.typescript-loader:codex`
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/codex/index.ts)

- 🟢 P3 **diagnostics-prometheus** `package-loader`
  - contract: Inspector can compile or load TypeScript source entrypoints before registration capture.
  - id: `package.entrypoint.typescript-loader:diagnostics-prometheus`
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/diagnostics-prometheus/index.ts)

- 🟢 P3 **diffs** `package-loader`
  - contract: Inspector can compile or load TypeScript source entrypoints before registration capture.
  - id: `package.entrypoint.typescript-loader:diffs`
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/diffs/index.ts)

- 🟢 P3 **google-meet** `package-loader`
  - contract: Inspector can compile or load TypeScript source entrypoints before registration capture.
  - id: `package.entrypoint.typescript-loader:google-meet`
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/google-meet/index.ts)

- 🟢 P3 **memory-lancedb** `package-loader`
  - contract: Inspector can compile or load TypeScript source entrypoints before registration capture.
  - id: `package.entrypoint.typescript-loader:memory-lancedb`
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/memory-lancedb/index.ts)

- 🟢 P3 **openclaw-qqbot** `package-loader`
  - contract: Inspector can compile or load TypeScript source entrypoints before registration capture.
  - id: `package.entrypoint.typescript-loader:openclaw-qqbot`
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/qqbot/index.ts)
    - [setupEntry @ setup-entry.ts](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/qqbot/setup-entry.ts)

- 🟢 P3 **whatsapp** `package-loader`
  - contract: Inspector can compile or load TypeScript source entrypoints before registration capture.
  - id: `package.entrypoint.typescript-loader:whatsapp`
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/whatsapp/index.ts)
    - [setupEntry @ setup-entry.ts](https://github.com/openclaw/openclaw/blob/8d034a7b6161a94d85bdfbc0ba7b84c0c677c326/extensions/whatsapp/setup-entry.ts)

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
