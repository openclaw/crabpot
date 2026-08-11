# Crabpot Compatibility Report

Generated: deterministic
Status: PASS


## Crabpot Target Context

- **OpenClaw host track:** `development`
- **Plugin artifact track:** `source-pack`
- **Fixture set:** `openclaw-beta (8 fixtures)`
- **Runtime evidence:** `reports/crabpot-execution-results.json` (10 capture artifacts, 67 captured registrations/hooks)
## Summary

| Metric                     | Value |
| -------------------------- | ----- |
| Fixtures                   | 8     |
| High-priority fixtures     | 0     |
| Hard breakages             | 0     |
| Warnings                   | 12    |
| Compatibility suggestions  | 27    |
| Issue findings             | 39    |
| Open issue findings        | 33    |
| Runtime-covered findings   | 6     |
| Runtime-partial findings   | 1     |
| P0 issues                  | 0     |
| P1 issues                  | 13    |
| Open P0 issues             | 0     |
| Open P1 issues             | 12    |
| Live issues                | 0     |
| Live P0 issues             | 0     |
| Compat gaps                | 12    |
| Deprecation warnings       | 0     |
| Inspector gaps             | 21    |
| Open inspector gaps        | 15    |
| Runtime coverage artifacts | 20    |
| Upstream metadata          | 6     |
| Contract probes            | 32    |
| Decision rows              | 46    |

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

## Hard Breakages

_none_

## Target OpenClaw Compat Records

| Metric                    | Value                                         |
| ------------------------- | --------------------------------------------- |
| Configured path           | ./openclaw                                    |
| Status                    | ok                                            |
| Requested version         | -                                             |
| Resolved version          | -                                             |
| Range eligibility version | -                                             |
| Source                    | -                                             |
| NPM dist-tag              | -                                             |
| Prepared cache            | -                                             |
| Compat registry           | openclaw/src/plugins/compat/registry.ts       |
| Compat records            | 0                                             |
| Compat status counts      | -                                             |
| Record ids                | -                                             |
| Hook registry             | openclaw/src/plugins/hook-types.ts            |
| Hook names                | 44                                            |
| API builder               | openclaw/src/plugins/api-builder.ts           |
| API registrars            | 56                                            |
| Captured registration     | openclaw/src/plugins/captured-registration.ts |
| Captured registrars       | 32                                            |
| Package metadata          | openclaw/package.json                         |
| Plugin SDK exports        | 316                                           |
| Manifest types            | openclaw/src/plugins/manifest-types.ts        |
| Manifest fields           | 47                                            |
| Manifest contract fields  | 23                                            |

## Warnings

| Fixture        | Code                                | Level   | Message                                                                                       | Evidence                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Compat record                     |
| -------------- | ----------------------------------- | ------- | --------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| brave-plugin   | package-install-metadata-incomplete | warning | package OpenClaw install metadata does not match advertised release targets                   | openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | -                                 |
| codex          | sdk-export-missing                  | warning | fixture imports plugin SDK aliases that are not exported by the target OpenClaw package       | openclaw/plugin-sdk/agent-runtime-test-contracts @ plugins/codex/.crabpot-package/src/app-server/event-projector.test-harness.ts:12, openclaw/plugin-sdk/plugin-test-runtime @ plugins/codex/.crabpot-package/src/app-server/event-projector.test-harness.ts:23                                                                                                                                                                                                                                                                                                            | plugin-sdk-export-aliases         |
| codex          | package-install-metadata-incomplete | warning | package OpenClaw install metadata does not match advertised release targets                   | openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | -                                 |
| google-meet    | sdk-export-missing                  | warning | fixture imports plugin SDK aliases that are not exported by the target OpenClaw package       | openclaw/plugin-sdk/plugin-test-api @ plugins/google-meet/.crabpot-package/src/test-support/plugin-harness.ts:3                                                                                                                                                                                                                                                                                                                                                                                                                                                            | plugin-sdk-export-aliases         |
| google-meet    | package-install-metadata-incomplete | warning | package OpenClaw install metadata does not match advertised release targets                   | openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | -                                 |
| diffs          | sdk-export-missing                  | warning | fixture imports plugin SDK aliases that are not exported by the target OpenClaw package       | openclaw/plugin-sdk/plugin-state-test-runtime @ plugins/diffs/.crabpot-package/src/test-helpers.ts:8                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | plugin-sdk-export-aliases         |
| diffs          | package-install-metadata-incomplete | warning | package OpenClaw install metadata does not match advertised release targets                   | openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | -                                 |
| memory-lancedb | package-install-metadata-incomplete | warning | package OpenClaw install metadata does not match advertised release targets                   | openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | -                                 |
| memory-lancedb | conversation-access-hook            | warning | fixture observes raw model or conversation content and needs privacy-boundary contract probes | agent_end @ plugins/memory-lancedb/.crabpot-package/index.ts:599                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | hook.llm-observer.privacy-payload |
| openclaw-qqbot | sdk-export-missing                  | warning | fixture imports plugin SDK aliases that are not exported by the target OpenClaw package       | openclaw/plugin-sdk/plugin-state-test-runtime @ plugins/openclaw-qqbot/.crabpot-package/src/engine/gateway/ingress.test-support.ts:4, openclaw/plugin-sdk/plugin-state-test-runtime @ plugins/openclaw-qqbot/.crabpot-package/src/test-support/runtime.ts:4                                                                                                                                                                                                                                                                                                                | plugin-sdk-export-aliases         |
| openclaw-qqbot | package-install-metadata-incomplete | warning | package OpenClaw install metadata does not match advertised release targets                   | openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | -                                 |
| whatsapp       | sdk-export-missing                  | warning | fixture imports plugin SDK aliases that are not exported by the target OpenClaw package       | openclaw/plugin-sdk/channel-test-helpers @ plugins/whatsapp/.crabpot-package/src/test-helpers.ts:5, openclaw/plugin-sdk/plugin-state-test-runtime @ plugins/whatsapp/.crabpot-package/src/monitor-inbox.test-harness.ts:6, openclaw/plugin-sdk/plugin-test-runtime @ plugins/whatsapp/.crabpot-package/src/auto-reply.broadcast-groups.test-harness.ts:2, openclaw/plugin-sdk/plugin-test-runtime @ plugins/whatsapp/.crabpot-package/src/auto-reply.test-harness.ts:7, openclaw/plugin-sdk/test-env @ plugins/whatsapp/.crabpot-package/src/auto-reply.test-harness.ts:10 | plugin-sdk-export-aliases         |

## Suggestions To OpenClaw Compat Layer

| Fixture                | Code                                 | Level      | Message                                                                                                      | Evidence                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Compat record                     |
| ---------------------- | ------------------------------------ | ---------- | ------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| brave-plugin           | package-typescript-source-entrypoint | suggestion | package OpenClaw entrypoint resolves to TypeScript source in this fixture checkout                           | extension:plugins/brave-plugin/.crabpot-package/index.ts                                                                                                                                                                                                                                                                                                                                                                                                                                | -                                 |
| codex                  | package-typescript-source-entrypoint | suggestion | package OpenClaw entrypoint resolves to TypeScript source in this fixture checkout                           | extension:plugins/codex/.crabpot-package/index.ts                                                                                                                                                                                                                                                                                                                                                                                                                                       | -                                 |
| codex                  | package-dependency-install-required  | suggestion | package declares runtime dependencies that must be installed before cold import                              | @openai/codex @ plugins/codex/.crabpot-package/package.json, smol-toml @ plugins/codex/.crabpot-package/package.json, typebox @ plugins/codex/.crabpot-package/package.json, ws @ plugins/codex/.crabpot-package/package.json, zod @ plugins/codex/.crabpot-package/package.json                                                                                                                                                                                                        | -                                 |
| codex                  | registration-capture-gap             | suggestion | future inspector capture API should record lifecycle, route, gateway, command, and interactive registrations | registerCommand @ plugins/codex/.crabpot-package/index.ts:208, registerNodeHostCommand @ plugins/codex/.crabpot-package/index.ts:143, registerNodeHostCommand @ plugins/codex/.crabpot-package/index.ts:203, registerNodeInvokePolicy @ plugins/codex/.crabpot-package/index.ts:147, registerNodeInvokePolicy @ plugins/codex/.crabpot-package/index.ts:206, registerService @ plugins/codex/.crabpot-package/index.ts:96                                                               | api.capture.runtime-registrars    |
| diagnostics-prometheus | package-typescript-source-entrypoint | suggestion | package OpenClaw entrypoint resolves to TypeScript source in this fixture checkout                           | extension:plugins/diagnostics-prometheus/.crabpot-package/index.ts                                                                                                                                                                                                                                                                                                                                                                                                                      | -                                 |
| diagnostics-prometheus | registration-capture-gap             | suggestion | future inspector capture API should record lifecycle, route, gateway, command, and interactive registrations | registerHttpRoute @ plugins/diagnostics-prometheus/.crabpot-package/index.ts:13, registerService @ plugins/diagnostics-prometheus/.crabpot-package/index.ts:12                                                                                                                                                                                                                                                                                                                          | api.capture.runtime-registrars    |
| google-meet            | package-typescript-source-entrypoint | suggestion | package OpenClaw entrypoint resolves to TypeScript source in this fixture checkout                           | extension:plugins/google-meet/.crabpot-package/index.ts                                                                                                                                                                                                                                                                                                                                                                                                                                 | -                                 |
| google-meet            | package-dependency-install-required  | suggestion | package declares runtime dependencies that must be installed before cold import                              | jszip @ plugins/google-meet/.crabpot-package/package.json, pretty-ms @ plugins/google-meet/.crabpot-package/package.json, typebox @ plugins/google-meet/.crabpot-package/package.json                                                                                                                                                                                                                                                                                                   | -                                 |
| google-meet            | registration-capture-gap             | suggestion | future inspector capture API should record lifecycle, route, gateway, command, and interactive registrations | registerGatewayMethod @ plugins/google-meet/.crabpot-package/index.ts:45, registerNodeHostCommand @ plugins/google-meet/.crabpot-package/index.ts:369, registerNodeInvokePolicy @ plugins/google-meet/.crabpot-package/index.ts:376                                                                                                                                                                                                                                                     | api.capture.runtime-registrars    |
| diffs                  | package-typescript-source-entrypoint | suggestion | package OpenClaw entrypoint resolves to TypeScript source in this fixture checkout                           | extension:plugins/diffs/.crabpot-package/index.ts                                                                                                                                                                                                                                                                                                                                                                                                                                       | -                                 |
| diffs                  | package-dependency-install-required  | suggestion | package declares runtime dependencies that must be installed before cold import                              | @pierre/diffs @ plugins/diffs/.crabpot-package/package.json, @shikijs/langs @ plugins/diffs/.crabpot-package/package.json, playwright-core @ plugins/diffs/.crabpot-package/package.json, typebox @ plugins/diffs/.crabpot-package/package.json, zod @ plugins/diffs/.crabpot-package/package.json                                                                                                                                                                                      | -                                 |
| diffs                  | registration-capture-gap             | suggestion | future inspector capture API should record lifecycle, route, gateway, command, and interactive registrations | registerHttpRoute @ plugins/diffs/.crabpot-package/src/plugin.ts:74                                                                                                                                                                                                                                                                                                                                                                                                                     | api.capture.runtime-registrars    |
| memory-lancedb         | package-typescript-source-entrypoint | suggestion | package OpenClaw entrypoint resolves to TypeScript source in this fixture checkout                           | extension:plugins/memory-lancedb/.crabpot-package/index.ts                                                                                                                                                                                                                                                                                                                                                                                                                              | -                                 |
| memory-lancedb         | package-dependency-install-required  | suggestion | package declares runtime dependencies that must be installed before cold import                              | @lancedb/lancedb @ plugins/memory-lancedb/.crabpot-package/package.json, apache-arrow @ plugins/memory-lancedb/.crabpot-package/package.json, openai @ plugins/memory-lancedb/.crabpot-package/package.json, typebox @ plugins/memory-lancedb/.crabpot-package/package.json                                                                                                                                                                                                             | -                                 |
| memory-lancedb         | registration-capture-gap             | suggestion | future inspector capture API should record lifecycle, route, gateway, command, and interactive registrations | registerService @ plugins/memory-lancedb/.crabpot-package/index.ts:690, registerService @ plugins/memory-lancedb/.crabpot-package/index.ts:97                                                                                                                                                                                                                                                                                                                                           | api.capture.runtime-registrars    |
| openclaw-qqbot         | package-typescript-source-entrypoint | suggestion | package OpenClaw entrypoint resolves to TypeScript source in this fixture checkout                           | extension:plugins/openclaw-qqbot/.crabpot-package/index.ts, setupEntry:plugins/openclaw-qqbot/.crabpot-package/setup-entry.ts                                                                                                                                                                                                                                                                                                                                                           | -                                 |
| openclaw-qqbot         | package-dependency-install-required  | suggestion | package declares runtime dependencies that must be installed before cold import                              | @tencent-connect/qqbot-connector @ plugins/openclaw-qqbot/.crabpot-package/package.json, mpg123-decoder @ plugins/openclaw-qqbot/.crabpot-package/package.json, p-map @ plugins/openclaw-qqbot/.crabpot-package/package.json, pretty-ms @ plugins/openclaw-qqbot/.crabpot-package/package.json, silk-wasm @ plugins/openclaw-qqbot/.crabpot-package/package.json, ws @ plugins/openclaw-qqbot/.crabpot-package/package.json, zod @ plugins/openclaw-qqbot/.crabpot-package/package.json | -                                 |
| openclaw-qqbot         | registration-capture-gap             | suggestion | future inspector capture API should record lifecycle, route, gateway, command, and interactive registrations | registerCommand @ plugins/openclaw-qqbot/.crabpot-package/src/bridge/commands/framework-registration.ts:37                                                                                                                                                                                                                                                                                                                                                                              | api.capture.runtime-registrars    |
| whatsapp               | package-typescript-source-entrypoint | suggestion | package OpenClaw entrypoint resolves to TypeScript source in this fixture checkout                           | extension:plugins/whatsapp/.crabpot-package/index.ts, setupEntry:plugins/whatsapp/.crabpot-package/setup-entry.ts                                                                                                                                                                                                                                                                                                                                                                       | -                                 |
| whatsapp               | package-dependency-install-required  | suggestion | package declares runtime dependencies that must be installed before cold import                              | audio-decode @ plugins/whatsapp/.crabpot-package/package.json, baileys @ plugins/whatsapp/.crabpot-package/package.json, typebox @ plugins/whatsapp/.crabpot-package/package.json                                                                                                                                                                                                                                                                                                       | -                                 |
| memory-lancedb         | missing-compat-record                | suggestion | fixture depends on a compatibility behavior that is not represented in the target compat registry            | hook.llm-observer.privacy-payload                                                                                                                                                                                                                                                                                                                                                                                                                                                       | hook.llm-observer.privacy-payload |
| codex                  | missing-compat-record                | suggestion | fixture depends on a compatibility behavior that is not represented in the target compat registry            | api.capture.runtime-registrars                                                                                                                                                                                                                                                                                                                                                                                                                                                          | api.capture.runtime-registrars    |
| diagnostics-prometheus | missing-compat-record                | suggestion | fixture depends on a compatibility behavior that is not represented in the target compat registry            | api.capture.runtime-registrars                                                                                                                                                                                                                                                                                                                                                                                                                                                          | api.capture.runtime-registrars    |
| google-meet            | missing-compat-record                | suggestion | fixture depends on a compatibility behavior that is not represented in the target compat registry            | api.capture.runtime-registrars                                                                                                                                                                                                                                                                                                                                                                                                                                                          | api.capture.runtime-registrars    |
| diffs                  | missing-compat-record                | suggestion | fixture depends on a compatibility behavior that is not represented in the target compat registry            | api.capture.runtime-registrars                                                                                                                                                                                                                                                                                                                                                                                                                                                          | api.capture.runtime-registrars    |
| memory-lancedb         | missing-compat-record                | suggestion | fixture depends on a compatibility behavior that is not represented in the target compat registry            | api.capture.runtime-registrars                                                                                                                                                                                                                                                                                                                                                                                                                                                          | api.capture.runtime-registrars    |
| openclaw-qqbot         | missing-compat-record                | suggestion | fixture depends on a compatibility behavior that is not represented in the target compat registry            | api.capture.runtime-registrars                                                                                                                                                                                                                                                                                                                                                                                                                                                          | api.capture.runtime-registrars    |

## Issue Findings

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

## Fixture Seam Inventory

| Fixture                | Priority | Seams                                                                                       | Hooks                                        | Registrations                                                                                                                                                                                                                                                                                   | Manifest contracts                                                         |
| ---------------------- | -------- | ------------------------------------------------------------------------------------------- | -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| brave-plugin           | medium   | provider-capability, web-search-provider, external-api, env-auth, npm-artifact              | -                                            | definePluginEntry, registerWebSearchProvider                                                                                                                                                                                                                                                    | webSearchProviders                                                         |
| codex                  | medium   | agent-harness, provider-capability, media-understanding, migration-provider, channel-bridge | after_compaction, inbound_claim, session_end | definePluginEntry, registerAgentHarness, registerCli, registerCommand, registerMediaUnderstandingProvider, registerMigrationProvider, registerNodeHostCommand, registerNodeInvokePolicy, registerService, registerSessionCatalog, registerTool, registerToolMetadata, registerWebSearchProvider | mediaUnderstandingProviders, migrationProviders, tools, webSearchProviders |
| diagnostics-prometheus | medium   | diagnostics, telemetry, prometheus-export, http-routes, service                             | -                                            | definePluginEntry, registerHttpRoute, registerService                                                                                                                                                                                                                                           | -                                                                          |
| google-meet            | medium   | tool, gateway-method, node-host-command, meeting, cli                                       | -                                            | definePluginEntry, registerCli, registerGatewayMethod, registerNodeHostCommand, registerNodeInvokePolicy, registerTool, registerTranscriptSourceProvider                                                                                                                                        | tools, transcriptSourceProviders                                           |
| diffs                  | medium   | tool, http-routes, prompt-mutation, diff-viewer, npm-artifact                               | before_prompt_build                          | definePluginEntry, registerHttpRoute, registerTool                                                                                                                                                                                                                                              | tools                                                                      |
| memory-lancedb         | medium   | memory-runtime, prompt-mutation, session-lifecycle, vector-store, cli                       | agent_end, before_prompt_build, session_end  | definePluginEntry, registerCli, registerService, registerTool                                                                                                                                                                                                                                   | tools                                                                      |
| openclaw-qqbot         | medium   | channel, command, tool, media, npm-artifact                                                 | -                                            | defineBundledChannelEntry, registerCommand, registerTool                                                                                                                                                                                                                                        | tools                                                                      |
| whatsapp               | medium   | channel, account-auth, media, message-policy, npm-artifact                                  | -                                            | defineBundledChannelEntry, registerTool                                                                                                                                                                                                                                                         | tools                                                                      |

## Decision Matrix

| Fixture                | Decision            | Seam                 | Action                                                                                                     | Evidence                                                                                                                                                       |
| ---------------------- | ------------------- | -------------------- | ---------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| brave-plugin           | plugin-upstream-fix | package-metadata     | Ask the plugin to align openclaw.install metadata with openclaw.release publishing targets.                | openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec                                                                                        |
| brave-plugin           | inspector-follow-up | cold-import          | Compile TypeScript source or run a loader before cold-importing this fixture entrypoint.                   | plugins/brave-plugin/.crabpot-package/index.ts                                                                                                                 |
| brave-plugin           | no-action           | manifest-contract    | Keep checking this declarative contract in default offline CI.                                             | webSearchProviders                                                                                                                                             |
| codex                  | core-compat-adapter | sdk-alias            | Restore the package export alias or publish a versioned migration map before cold-importing old plugins.   | openclaw/plugin-sdk/agent-runtime-test-contracts, openclaw/plugin-sdk/plugin-test-runtime                                                                      |
| codex                  | plugin-upstream-fix | package-metadata     | Ask the plugin to align openclaw.install metadata with openclaw.release publishing targets.                | openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec                                                                                        |
| codex                  | inspector-follow-up | cold-import          | Compile TypeScript source or run a loader before cold-importing this fixture entrypoint.                   | plugins/codex/.crabpot-package/index.ts                                                                                                                        |
| codex                  | inspector-follow-up | cold-import          | Install runtime dependencies in an isolated workspace before executing this fixture entrypoint.            | @openai/codex, smol-toml, typebox, ws, zod                                                                                                                     |
| codex                  | inspector-follow-up | registration-capture | Expose or mirror a full public API capture shim before treating these runtime-only seams as covered.       | registerCommand, registerNodeHostCommand, registerNodeInvokePolicy, registerService                                                                            |
| codex                  | no-action           | manifest-contract    | Keep checking this declarative contract in default offline CI.                                             | mediaUnderstandingProviders, migrationProviders, tools, webSearchProviders                                                                                     |
| diagnostics-prometheus | inspector-follow-up | cold-import          | Compile TypeScript source or run a loader before cold-importing this fixture entrypoint.                   | plugins/diagnostics-prometheus/.crabpot-package/index.ts                                                                                                       |
| diagnostics-prometheus | inspector-follow-up | registration-capture | Expose or mirror a full public API capture shim before treating these runtime-only seams as covered.       | registerHttpRoute, registerService                                                                                                                             |
| google-meet            | core-compat-adapter | sdk-alias            | Restore the package export alias or publish a versioned migration map before cold-importing old plugins.   | openclaw/plugin-sdk/plugin-test-api                                                                                                                            |
| google-meet            | plugin-upstream-fix | package-metadata     | Ask the plugin to align openclaw.install metadata with openclaw.release publishing targets.                | openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec                                                                                        |
| google-meet            | inspector-follow-up | cold-import          | Compile TypeScript source or run a loader before cold-importing this fixture entrypoint.                   | plugins/google-meet/.crabpot-package/index.ts                                                                                                                  |
| google-meet            | inspector-follow-up | cold-import          | Install runtime dependencies in an isolated workspace before executing this fixture entrypoint.            | jszip, pretty-ms, typebox                                                                                                                                      |
| google-meet            | inspector-follow-up | registration-capture | Expose or mirror a full public API capture shim before treating these runtime-only seams as covered.       | registerGatewayMethod, registerNodeHostCommand, registerNodeInvokePolicy                                                                                       |
| google-meet            | no-action           | manifest-contract    | Keep checking this declarative contract in default offline CI.                                             | tools, transcriptSourceProviders                                                                                                                               |
| diffs                  | core-compat-adapter | sdk-alias            | Restore the package export alias or publish a versioned migration map before cold-importing old plugins.   | openclaw/plugin-sdk/plugin-state-test-runtime                                                                                                                  |
| diffs                  | plugin-upstream-fix | package-metadata     | Ask the plugin to align openclaw.install metadata with openclaw.release publishing targets.                | openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec                                                                                        |
| diffs                  | inspector-follow-up | cold-import          | Compile TypeScript source or run a loader before cold-importing this fixture entrypoint.                   | plugins/diffs/.crabpot-package/index.ts                                                                                                                        |
| diffs                  | inspector-follow-up | cold-import          | Install runtime dependencies in an isolated workspace before executing this fixture entrypoint.            | @pierre/diffs, @shikijs/langs, playwright-core, typebox, zod                                                                                                   |
| diffs                  | inspector-follow-up | registration-capture | Expose or mirror a full public API capture shim before treating these runtime-only seams as covered.       | registerHttpRoute                                                                                                                                              |
| diffs                  | no-action           | manifest-contract    | Keep checking this declarative contract in default offline CI.                                             | tools                                                                                                                                                          |
| memory-lancedb         | plugin-upstream-fix | package-metadata     | Ask the plugin to align openclaw.install metadata with openclaw.release publishing targets.                | openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec                                                                                        |
| memory-lancedb         | inspector-follow-up | cold-import          | Compile TypeScript source or run a loader before cold-importing this fixture entrypoint.                   | plugins/memory-lancedb/.crabpot-package/index.ts                                                                                                               |
| memory-lancedb         | inspector-follow-up | cold-import          | Install runtime dependencies in an isolated workspace before executing this fixture entrypoint.            | @lancedb/lancedb, apache-arrow, openai, typebox                                                                                                                |
| memory-lancedb         | inspector-follow-up | conversation-access  | Add synthetic llm_input/llm_output/agent_end probes before tightening hook payloads or redaction behavior. | agent_end                                                                                                                                                      |
| memory-lancedb         | inspector-follow-up | registration-capture | Expose or mirror a full public API capture shim before treating these runtime-only seams as covered.       | registerService                                                                                                                                                |
| memory-lancedb         | no-action           | manifest-contract    | Keep checking this declarative contract in default offline CI.                                             | tools                                                                                                                                                          |
| openclaw-qqbot         | core-compat-adapter | sdk-alias            | Restore the package export alias or publish a versioned migration map before cold-importing old plugins.   | openclaw/plugin-sdk/plugin-state-test-runtime                                                                                                                  |
| openclaw-qqbot         | plugin-upstream-fix | package-metadata     | Ask the plugin to align openclaw.install metadata with openclaw.release publishing targets.                | openclaw.release.publishToClawHub requires openclaw.install.clawhubSpec                                                                                        |
| openclaw-qqbot         | inspector-follow-up | cold-import          | Compile TypeScript source or run a loader before cold-importing this fixture entrypoint.                   | plugins/openclaw-qqbot/.crabpot-package/index.ts, plugins/openclaw-qqbot/.crabpot-package/setup-entry.ts                                                       |
| openclaw-qqbot         | inspector-follow-up | cold-import          | Install runtime dependencies in an isolated workspace before executing this fixture entrypoint.            | @tencent-connect/qqbot-connector, mpg123-decoder, p-map, pretty-ms, silk-wasm, ws, zod                                                                         |
| openclaw-qqbot         | inspector-follow-up | registration-capture | Expose or mirror a full public API capture shim before treating these runtime-only seams as covered.       | registerCommand                                                                                                                                                |
| openclaw-qqbot         | no-action           | manifest-contract    | Keep checking this declarative contract in default offline CI.                                             | tools                                                                                                                                                          |
| whatsapp               | core-compat-adapter | sdk-alias            | Restore the package export alias or publish a versioned migration map before cold-importing old plugins.   | openclaw/plugin-sdk/channel-test-helpers, openclaw/plugin-sdk/plugin-state-test-runtime, openclaw/plugin-sdk/plugin-test-runtime, openclaw/plugin-sdk/test-env |
| whatsapp               | inspector-follow-up | cold-import          | Compile TypeScript source or run a loader before cold-importing this fixture entrypoint.                   | plugins/whatsapp/.crabpot-package/index.ts, plugins/whatsapp/.crabpot-package/setup-entry.ts                                                                   |
| whatsapp               | inspector-follow-up | cold-import          | Install runtime dependencies in an isolated workspace before executing this fixture entrypoint.            | audio-decode, baileys, typebox                                                                                                                                 |
| whatsapp               | no-action           | manifest-contract    | Keep checking this declarative contract in default offline CI.                                             | tools                                                                                                                                                          |
| memory-lancedb         | core-compat-adapter | compat-registry      | Add or restore a machine-readable OpenClaw compat record before changing this plugin-facing behavior.      | hook.llm-observer.privacy-payload                                                                                                                              |
| codex                  | core-compat-adapter | compat-registry      | Add or restore a machine-readable OpenClaw compat record before changing this plugin-facing behavior.      | api.capture.runtime-registrars                                                                                                                                 |
| diagnostics-prometheus | core-compat-adapter | compat-registry      | Add or restore a machine-readable OpenClaw compat record before changing this plugin-facing behavior.      | api.capture.runtime-registrars                                                                                                                                 |
| google-meet            | core-compat-adapter | compat-registry      | Add or restore a machine-readable OpenClaw compat record before changing this plugin-facing behavior.      | api.capture.runtime-registrars                                                                                                                                 |
| diffs                  | core-compat-adapter | compat-registry      | Add or restore a machine-readable OpenClaw compat record before changing this plugin-facing behavior.      | api.capture.runtime-registrars                                                                                                                                 |
| memory-lancedb         | core-compat-adapter | compat-registry      | Add or restore a machine-readable OpenClaw compat record before changing this plugin-facing behavior.      | api.capture.runtime-registrars                                                                                                                                 |
| openclaw-qqbot         | core-compat-adapter | compat-registry      | Add or restore a machine-readable OpenClaw compat record before changing this plugin-facing behavior.      | api.capture.runtime-registrars                                                                                                                                 |

## Raw Logs

| Fixture                | Code                    | Level | Message                                                                               | Evidence                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Compat record |
| ---------------------- | ----------------------- | ----- | ------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| brave-plugin           | seam-inventory          | log   | observed 0 hooks, 2 registrations, and 1 manifest contracts                           | registration:definePluginEntry, registration:registerWebSearchProvider, manifestContract:webSearchProviders                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | -             |
| brave-plugin           | hook-names-present      | log   | all observed hooks exist in the target OpenClaw hook registry                         | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | -             |
| brave-plugin           | api-registrars-present  | log   | all observed api.register* calls exist in the target OpenClaw plugin API builder      | registerWebSearchProvider                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | -             |
| brave-plugin           | sdk-exports-present     | log   | all observed plugin SDK imports exist in target OpenClaw package exports              | openclaw/plugin-sdk/diagnostic-runtime, openclaw/plugin-sdk/lazy-runtime, openclaw/plugin-sdk/plugin-entry, openclaw/plugin-sdk/provider-http, openclaw/plugin-sdk/provider-web-search, openclaw/plugin-sdk/provider-web-search-config-contract, openclaw/plugin-sdk/runtime-env, openclaw/plugin-sdk/ssrf-runtime, openclaw/plugin-sdk/string-coerce-runtime                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | -             |
| brave-plugin           | manifest-fields-checked | log   | plugin manifest fields were compared with target OpenClaw manifest types              | plugins/brave-plugin/.crabpot-package/openclaw.plugin.json                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | -             |
| brave-plugin           | package-metadata        | log   | selected package metadata for plugin contract checks                                  | plugins/brave-plugin/.crabpot-package/package.json, @openclaw/brave-plugin, version:2026.8.1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | -             |
| brave-plugin           | declarative-contracts   | log   | fixture declares manifest contracts that can be checked without executing plugin code | webSearchProviders                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | -             |
| codex                  | seam-inventory          | log   | observed 3 hooks, 13 registrations, and 4 manifest contracts                          | hook:after_compaction, hook:inbound_claim, hook:session_end, registration:definePluginEntry, registration:registerAgentHarness, registration:registerCli, registration:registerCommand, registration:registerMediaUnderstandingProvider, registration:registerMigrationProvider, registration:registerNodeHostCommand, registration:registerNodeInvokePolicy, registration:registerService, registration:registerSessionCatalog, registration:registerTool, registration:registerToolMetadata, registration:registerWebSearchProvider, manifestContract:mediaUnderstandingProviders, manifestContract:migrationProviders, manifestContract:tools, manifestContract:webSearchProviders                                                                                                                                                                                                                                                              | -             |
| codex                  | hook-names-present      | log   | all observed hooks exist in the target OpenClaw hook registry                         | after_compaction, inbound_claim, session_end                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | -             |
| codex                  | api-registrars-present  | log   | all observed api.register* calls exist in the target OpenClaw plugin API builder      | registerAgentHarness, registerCli, registerCommand, registerMediaUnderstandingProvider, registerMigrationProvider, registerNodeHostCommand, registerNodeInvokePolicy, registerService, registerSessionCatalog, registerTool, registerToolMetadata, registerWebSearchProvider                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | -             |
| codex                  | manifest-fields-checked | log   | plugin manifest fields were compared with target OpenClaw manifest types              | plugins/codex/.crabpot-package/openclaw.plugin.json                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | -             |
| codex                  | package-metadata        | log   | selected package metadata for plugin contract checks                                  | plugins/codex/.crabpot-package/package.json, @openclaw/codex, version:2026.8.1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | -             |
| codex                  | declarative-contracts   | log   | fixture declares manifest contracts that can be checked without executing plugin code | mediaUnderstandingProviders, migrationProviders, tools, webSearchProviders                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | -             |
| diagnostics-prometheus | seam-inventory          | log   | observed 0 hooks, 3 registrations, and 0 manifest contracts                           | registration:definePluginEntry, registration:registerHttpRoute, registration:registerService                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | -             |
| diagnostics-prometheus | hook-names-present      | log   | all observed hooks exist in the target OpenClaw hook registry                         | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | -             |
| diagnostics-prometheus | api-registrars-present  | log   | all observed api.register* calls exist in the target OpenClaw plugin API builder      | registerHttpRoute, registerService                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | -             |
| diagnostics-prometheus | sdk-exports-present     | log   | all observed plugin SDK imports exist in target OpenClaw package exports              | openclaw/plugin-sdk/diagnostic-runtime, openclaw/plugin-sdk/plugin-entry, openclaw/plugin-sdk/security-runtime, openclaw/plugin-sdk/text-utility-runtime                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | -             |
| diagnostics-prometheus | manifest-fields-checked | log   | plugin manifest fields were compared with target OpenClaw manifest types              | plugins/diagnostics-prometheus/.crabpot-package/openclaw.plugin.json                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | -             |
| diagnostics-prometheus | package-metadata        | log   | selected package metadata for plugin contract checks                                  | plugins/diagnostics-prometheus/.crabpot-package/package.json, @openclaw/diagnostics-prometheus, version:2026.8.1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | -             |
| google-meet            | seam-inventory          | log   | observed 0 hooks, 7 registrations, and 2 manifest contracts                           | registration:definePluginEntry, registration:registerCli, registration:registerGatewayMethod, registration:registerNodeHostCommand, registration:registerNodeInvokePolicy, registration:registerTool, registration:registerTranscriptSourceProvider, manifestContract:tools, manifestContract:transcriptSourceProviders                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | -             |
| google-meet            | hook-names-present      | log   | all observed hooks exist in the target OpenClaw hook registry                         | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | -             |
| google-meet            | api-registrars-present  | log   | all observed api.register* calls exist in the target OpenClaw plugin API builder      | registerCli, registerGatewayMethod, registerNodeHostCommand, registerNodeInvokePolicy, registerTool, registerTranscriptSourceProvider                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | -             |
| google-meet            | manifest-fields-checked | log   | plugin manifest fields were compared with target OpenClaw manifest types              | plugins/google-meet/.crabpot-package/openclaw.plugin.json                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | -             |
| google-meet            | package-metadata        | log   | selected package metadata for plugin contract checks                                  | plugins/google-meet/.crabpot-package/package.json, @openclaw/google-meet, version:2026.8.1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | -             |
| google-meet            | declarative-contracts   | log   | fixture declares manifest contracts that can be checked without executing plugin code | tools, transcriptSourceProviders                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | -             |
| diffs                  | seam-inventory          | log   | observed 1 hooks, 3 registrations, and 1 manifest contracts                           | hook:before_prompt_build, registration:definePluginEntry, registration:registerHttpRoute, registration:registerTool, manifestContract:tools                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | -             |
| diffs                  | hook-names-present      | log   | all observed hooks exist in the target OpenClaw hook registry                         | before_prompt_build                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | -             |
| diffs                  | api-registrars-present  | log   | all observed api.register* calls exist in the target OpenClaw plugin API builder      | registerHttpRoute, registerTool                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | -             |
| diffs                  | manifest-fields-checked | log   | plugin manifest fields were compared with target OpenClaw manifest types              | plugins/diffs/.crabpot-package/openclaw.plugin.json                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | -             |
| diffs                  | package-metadata        | log   | selected package metadata for plugin contract checks                                  | plugins/diffs/.crabpot-package/package.json, @openclaw/diffs, version:2026.8.1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | -             |
| diffs                  | declarative-contracts   | log   | fixture declares manifest contracts that can be checked without executing plugin code | tools                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | -             |
| memory-lancedb         | seam-inventory          | log   | observed 3 hooks, 4 registrations, and 1 manifest contracts                           | hook:agent_end, hook:before_prompt_build, hook:session_end, registration:definePluginEntry, registration:registerCli, registration:registerService, registration:registerTool, manifestContract:tools                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | -             |
| memory-lancedb         | hook-names-present      | log   | all observed hooks exist in the target OpenClaw hook registry                         | agent_end, before_prompt_build, session_end                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | -             |
| memory-lancedb         | api-registrars-present  | log   | all observed api.register* calls exist in the target OpenClaw plugin API builder      | registerCli, registerService, registerTool                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | -             |
| memory-lancedb         | sdk-exports-present     | log   | all observed plugin SDK imports exist in target OpenClaw package exports              | openclaw/plugin-sdk/agent-runtime, openclaw/plugin-sdk/agent-scope-runtime, openclaw/plugin-sdk/channel-actions, openclaw/plugin-sdk/chat-channel-ids, openclaw/plugin-sdk/cli-argv, openclaw/plugin-sdk/core, openclaw/plugin-sdk/error-runtime, openclaw/plugin-sdk/expect-runtime, openclaw/plugin-sdk/global-singleton, openclaw/plugin-sdk/lazy-runtime, openclaw/plugin-sdk/media-runtime, openclaw/plugin-sdk/memory-core-host-engine-embeddings, openclaw/plugin-sdk/memory-host-core, openclaw/plugin-sdk/message-tool-delivery-hints, openclaw/plugin-sdk/number-runtime, openclaw/plugin-sdk/param-readers, openclaw/plugin-sdk/plugin-config-runtime, openclaw/plugin-sdk/plugin-entry, openclaw/plugin-sdk/routing, openclaw/plugin-sdk/runtime, openclaw/plugin-sdk/runtime-env, openclaw/plugin-sdk/state-paths, openclaw/plugin-sdk/string-coerce-runtime, openclaw/plugin-sdk/temp-path, openclaw/plugin-sdk/text-utility-runtime | -             |
| memory-lancedb         | manifest-fields-checked | log   | plugin manifest fields were compared with target OpenClaw manifest types              | plugins/memory-lancedb/.crabpot-package/openclaw.plugin.json                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | -             |
| memory-lancedb         | package-metadata        | log   | selected package metadata for plugin contract checks                                  | plugins/memory-lancedb/.crabpot-package/package.json, @openclaw/memory-lancedb, version:2026.8.1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | -             |
| memory-lancedb         | declarative-contracts   | log   | fixture declares manifest contracts that can be checked without executing plugin code | tools                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | -             |
| openclaw-qqbot         | seam-inventory          | log   | observed 0 hooks, 3 registrations, and 1 manifest contracts                           | registration:defineBundledChannelEntry, registration:registerCommand, registration:registerTool, manifestContract:tools                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | -             |
| openclaw-qqbot         | hook-names-present      | log   | all observed hooks exist in the target OpenClaw hook registry                         | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | -             |
| openclaw-qqbot         | api-registrars-present  | log   | all observed api.register* calls exist in the target OpenClaw plugin API builder      | registerCommand, registerTool                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | -             |
| openclaw-qqbot         | manifest-fields-checked | log   | plugin manifest fields were compared with target OpenClaw manifest types              | plugins/openclaw-qqbot/.crabpot-package/openclaw.plugin.json                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | -             |
| openclaw-qqbot         | package-metadata        | log   | selected package metadata for plugin contract checks                                  | plugins/openclaw-qqbot/.crabpot-package/package.json, @openclaw/qqbot, version:2026.8.1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | -             |
| openclaw-qqbot         | declarative-contracts   | log   | fixture declares manifest contracts that can be checked without executing plugin code | tools                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | -             |
| whatsapp               | seam-inventory          | log   | observed 0 hooks, 2 registrations, and 1 manifest contracts                           | registration:defineBundledChannelEntry, registration:registerTool, manifestContract:tools                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | -             |
| whatsapp               | hook-names-present      | log   | all observed hooks exist in the target OpenClaw hook registry                         | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | -             |
| whatsapp               | api-registrars-present  | log   | all observed api.register* calls exist in the target OpenClaw plugin API builder      | registerTool                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | -             |
| whatsapp               | manifest-fields-checked | log   | plugin manifest fields were compared with target OpenClaw manifest types              | plugins/whatsapp/.crabpot-package/openclaw.plugin.json                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | -             |
| whatsapp               | package-metadata        | log   | selected package metadata for plugin contract checks                                  | plugins/whatsapp/.crabpot-package/package.json, @openclaw/whatsapp, version:2026.8.1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | -             |
| whatsapp               | declarative-contracts   | log   | fixture declares manifest contracts that can be checked without executing plugin code | tools                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | -             |
