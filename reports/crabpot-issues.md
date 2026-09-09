# Crabpot Issue Findings

Generated: deterministic
Status: PASS


## Crabpot Target Context

- **OpenClaw host track:** `development`
- **Plugin artifact track:** `source-pack`
- **Fixture set:** `openclaw-beta (7 fixtures)`
- **Runtime evidence:** `reports/crabpot-execution-results.json` (8 capture artifacts, 67 captured registrations/hooks)
## Triage Summary

| Metric                     | Value |
| -------------------------- | ----- |
| Issue findings             | 32    |
| Open issue findings        | 26    |
| Runtime-covered findings   | 6     |
| Runtime-partial findings   | 0     |
| 🔴 P0                      | 0     |
| 🟠 P1                      | 11    |
| Open 🔴 P0                 | 0     |
| Open 🟠 P1                 | 10    |
| Live issues                | 0     |
| Live P0 issues             | 0     |
| Compat gaps                | 10    |
| Deprecation warnings       | 0     |
| Inspector gaps             | 18    |
| Open inspector gaps        | 12    |
| Runtime coverage artifacts | 16    |
| Upstream metadata          | 4     |
| Contract probes            | 26    |

## Triage Overview

| Class               | Count | P0 | Meaning                                                                                                                                                  |
| ------------------- | ----- | -- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| live-issue          | 0     | 0  | Potential runtime breakage in the target OpenClaw/plugin pair. P0 only when it is not a deprecated compat seam.                                          |
| compat-gap          | 10    | -  | Compatibility behavior is needed but missing from the target OpenClaw compat registry.                                                                   |
| deprecation-warning | 0     | -  | Plugin uses a supported but deprecated compatibility seam; keep it wired while migration exists.                                                         |
| inspector-gap       | 18    | -  | Plugin Inspector needs stronger capture/probe evidence before making contract judgments. Runtime-covered rows are proof-backed and not open report work. |
| upstream-metadata   | 4     | -  | Plugin package or manifest metadata should improve upstream; not a target OpenClaw live break by itself.                                                 |
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
    - [openclaw/plugin-sdk/agent-runtime-test-contracts @ event-projector.test-harness.ts:12](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/src/app-server/event-projector.test-harness.ts#L12)
    - [openclaw/plugin-sdk/plugin-test-runtime @ attempt-startup.test-support.ts:8](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/src/app-server/attempt-startup.test-support.ts#L8)
    - [openclaw/plugin-sdk/plugin-test-runtime @ canonical-fork.test-support.ts:10](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/src/app-server/canonical-fork.test-support.ts#L10)
    - [openclaw/plugin-sdk/plugin-test-runtime @ event-projector.test-harness.ts:23](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/src/app-server/event-projector.test-harness.ts#L23)
    - [openclaw/plugin-sdk/plugin-test-runtime @ run-attempt-test-harness.ts:20](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/src/app-server/run-attempt-test-harness.ts#L20)
    - [openclaw/plugin-sdk/plugin-test-runtime @ session-initialization.test-support.ts:3](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/src/app-server/session-initialization.test-support.ts#L3)
    - [openclaw/plugin-sdk/plugin-test-runtime @ upstream-session-fork.test-support.ts:1](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/src/app-server/upstream-session-fork.test-support.ts#L1)
    - [openclaw/plugin-sdk/plugin-test-runtime @ session-catalog.test-helpers.ts:23](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/src/session-catalog.test-helpers.ts#L23)
    - [openclaw/plugin-sdk/sqlite-runtime-testing @ run-attempt-test-harness.ts:26](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/src/app-server/run-attempt-test-harness.ts#L26)
    - [openclaw/plugin-sdk/sqlite-runtime-testing @ session-catalog.test-helpers.ts:33](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/src/session-catalog.test-helpers.ts#L33)
    - [openclaw/plugin-sdk/test-env @ test-support.ts:75](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/src/app-server/test-support.ts#L75)
    - [openclaw/plugin-sdk/test-env @ session-catalog.test-helpers.ts:37](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/src/session-catalog.test-helpers.ts#L37)

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
    - [openclaw/plugin-sdk/plugin-state-test-runtime @ test-helpers.ts:8](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/diffs/src/test-helpers.ts#L8)

- 🟠 P1 **google-meet** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: google-meet: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **google-meet** `compat-gap` `core-compat-adapter`
  - **sdk-export-missing**: google-meet: plugin SDK import aliases are missing from target package exports
  - state: open · compat:untracked
  - evidence:
    - [openclaw/plugin-sdk/plugin-test-api @ plugin-harness.ts:3](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/google-meet/src/test-support/plugin-harness.ts#L3)

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

- 🟠 P1 **whatsapp** `compat-gap` `core-compat-adapter`
  - **sdk-export-missing**: whatsapp: plugin SDK import aliases are missing from target package exports
  - state: open · compat:untracked
  - evidence:
    - [openclaw/plugin-sdk/channel-ingress-test-runtime @ monitor-inbox.test-harness.ts:6](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/whatsapp/src/monitor-inbox.test-harness.ts#L6)
    - [openclaw/plugin-sdk/channel-test-helpers @ test-helpers.ts:5](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/whatsapp/src/test-helpers.ts#L5)
    - [openclaw/plugin-sdk/plugin-test-runtime @ auto-reply.broadcast-groups.test-harness.ts:2](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/whatsapp/src/auto-reply.broadcast-groups.test-harness.ts#L2)
    - [openclaw/plugin-sdk/plugin-test-runtime @ auto-reply.test-harness.ts:11](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/whatsapp/src/auto-reply.test-harness.ts#L11)
    - [openclaw/plugin-sdk/test-env @ auto-reply.test-harness.ts:14](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/whatsapp/src/auto-reply.test-harness.ts#L14)

## Deprecation Warnings

_none_

## Inspector Proof Gaps

- 🟡 P2 **brave-plugin** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: brave-plugin: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/brave/index.ts)

- 🟡 P2 **codex** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: codex: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@openai/codex @ package.json](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/package.json)
    - [semver @ package.json](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/package.json)
    - [smol-toml @ package.json](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/package.json)
    - [ws @ package.json](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/package.json)
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/package.json)

- 🟡 P2 **codex** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: codex: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/index.ts)

- 🟡 P2 **diagnostics-prometheus** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: diagnostics-prometheus: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/diagnostics-prometheus/index.ts)

- 🟡 P2 **diffs** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: diffs: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@pierre/diffs @ package.json](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/diffs/package.json)
    - [@shikijs/langs @ package.json](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/diffs/package.json)
    - [playwright-core @ package.json](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/diffs/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/diffs/package.json)
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/diffs/package.json)

- 🟡 P2 **diffs** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: diffs: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/diffs/index.ts)

- 🟡 P2 **google-meet** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: google-meet: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [jszip @ package.json](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/google-meet/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/google-meet/package.json)

- 🟡 P2 **google-meet** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: google-meet: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/google-meet/index.ts)

- 🟡 P2 **memory-lancedb** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: memory-lancedb: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [apache-arrow @ package.json](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/memory-lancedb/package.json)
    - [openai @ package.json](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/memory-lancedb/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/memory-lancedb/package.json)
    - [@lancedb/lancedb-darwin-arm64 @ package.json](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/memory-lancedb/package.json)
    - [@lancedb/lancedb-linux-arm64-gnu @ package.json](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/memory-lancedb/package.json)
    - [@lancedb/lancedb-linux-arm64-musl @ package.json](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/memory-lancedb/package.json)
    - [@lancedb/lancedb-linux-x64-gnu @ package.json](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/memory-lancedb/package.json)
    - [@lancedb/lancedb-linux-x64-musl @ package.json](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/memory-lancedb/package.json)
    - [@lancedb/lancedb-win32-arm64-msvc @ package.json](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/memory-lancedb/package.json)
    - [@lancedb/lancedb-win32-x64-msvc @ package.json](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/memory-lancedb/package.json)

- 🟡 P2 **memory-lancedb** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: memory-lancedb: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/memory-lancedb/index.ts)

- 🟡 P2 **whatsapp** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: whatsapp: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [audio-decode @ package.json](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/whatsapp/package.json)
    - [baileys @ package.json](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/whatsapp/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/whatsapp/package.json)

- 🟡 P2 **whatsapp** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: whatsapp: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/whatsapp/index.ts)
    - [setupEntry @ setup-entry.ts](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/whatsapp/setup-entry.ts)

## Runtime-Covered Inspector Gaps

- 🟠 P1 **memory-lancedb** `inspector-gap` `inspector-follow-up`
  - **conversation-access-hook**: memory-lancedb: conversation-access hooks need privacy-boundary probes
  - state: runtime-covered · compat:untracked · runtime:covered
  - evidence:
    - [agent_end @ index.ts:524](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/memory-lancedb/index.ts#L524)
  - runtime coverage:
    - captured hook:agent_end
    - .crabpot/results/memory-lancedb/cold-import-extension-memory-lancedb-plugins-memory-lancedb-crabpot-package-index-ts.capture.json
    - .crabpot/results/memory-lancedb/cold-import-extension-memory-lancedb-plugins-memory-lancedb-crabpot-package-index-ts.synthetic.json

- 🟡 P2 **codex** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: codex: runtime registrations need capture evidence before final contract judgment
  - state: runtime-covered · compat:untracked · runtime:covered
  - evidence:
    - [registerCommand @ index.ts:294](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/index.ts#L294)
    - [registerNodeHostCommand @ index.ts:205](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/index.ts#L205)
    - [registerNodeHostCommand @ index.ts:287](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/index.ts#L287)
    - [registerNodeHostCommand @ index.ts:292](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/index.ts#L292)
    - [registerNodeInvokePolicy @ index.ts:209](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/index.ts#L209)
    - [registerNodeInvokePolicy @ index.ts:290](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/index.ts#L290)
    - [registerNodeInvokePolicy @ index.ts:293](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/index.ts#L293)
    - [registerService @ index.ts:116](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/index.ts#L116)
    - [registerService @ index.ts:121](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/index.ts#L121)
    - [registerService @ index.ts:123](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/index.ts#L123)
  - runtime coverage:
    - captured registration:registerCommand
    - captured registration:registerNodeHostCommand
    - captured registration:registerNodeInvokePolicy
    - captured registration:registerService
    - .crabpot/results/codex/cold-import-extension-codex-plugins-codex-crabpot-package-index-ts.capture.json
    - .crabpot/results/codex/cold-import-extension-codex-plugins-codex-crabpot-package-index-ts.synthetic.json

- 🟡 P2 **diagnostics-prometheus** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: diagnostics-prometheus: runtime registrations need capture evidence before final contract judgment
  - state: runtime-covered · compat:untracked · runtime:covered
  - evidence:
    - [registerHttpRoute @ index.ts:13](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/diagnostics-prometheus/index.ts#L13)
    - [registerService @ index.ts:12](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/diagnostics-prometheus/index.ts#L12)
  - runtime coverage:
    - captured registration:registerHttpRoute
    - captured registration:registerService
    - .crabpot/results/diagnostics-prometheus/cold-import-extension-diagnostics-prometheus-plugins-diagnostics-prometheus-crabpot-package-index-ts.capture.json
    - .crabpot/results/diagnostics-prometheus/cold-import-extension-diagnostics-prometheus-plugins-diagnostics-prometheus-crabpot-package-index-ts.synthetic.json

- 🟡 P2 **diffs** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: diffs: runtime registrations need capture evidence before final contract judgment
  - state: runtime-covered · compat:untracked · runtime:covered
  - evidence:
    - [registerHttpRoute @ plugin.ts:83](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/diffs/src/plugin.ts#L83)
  - runtime coverage:
    - captured registration:registerHttpRoute
    - .crabpot/results/diffs/cold-import-extension-diffs-plugins-diffs-crabpot-package-index-ts.capture.json
    - .crabpot/results/diffs/cold-import-extension-diffs-plugins-diffs-crabpot-package-index-ts.synthetic.json

- 🟡 P2 **google-meet** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: google-meet: runtime registrations need capture evidence before final contract judgment
  - state: runtime-covered · compat:untracked · runtime:covered
  - evidence:
    - [registerGatewayMethod @ index.ts:39](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/google-meet/index.ts#L39)
    - [registerNodeHostCommand @ index.ts:363](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/google-meet/index.ts#L363)
    - [registerNodeInvokePolicy @ index.ts:370](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/google-meet/index.ts#L370)
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
    - [registerService @ index.ts:107](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/memory-lancedb/index.ts#L107)
    - [registerService @ index.ts:649](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/memory-lancedb/index.ts#L649)
  - runtime coverage:
    - captured registration:registerService
    - .crabpot/results/memory-lancedb/cold-import-extension-memory-lancedb-plugins-memory-lancedb-crabpot-package-index-ts.capture.json
    - .crabpot/results/memory-lancedb/cold-import-extension-memory-lancedb-plugins-memory-lancedb-crabpot-package-index-ts.synthetic.json

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
    - [openclaw/plugin-sdk/agent-runtime-test-contracts @ event-projector.test-harness.ts:12](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/src/app-server/event-projector.test-harness.ts#L12)
    - [openclaw/plugin-sdk/plugin-test-runtime @ attempt-startup.test-support.ts:8](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/src/app-server/attempt-startup.test-support.ts#L8)
    - [openclaw/plugin-sdk/plugin-test-runtime @ canonical-fork.test-support.ts:10](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/src/app-server/canonical-fork.test-support.ts#L10)
    - [openclaw/plugin-sdk/plugin-test-runtime @ event-projector.test-harness.ts:23](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/src/app-server/event-projector.test-harness.ts#L23)
    - [openclaw/plugin-sdk/plugin-test-runtime @ run-attempt-test-harness.ts:20](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/src/app-server/run-attempt-test-harness.ts#L20)
    - [openclaw/plugin-sdk/plugin-test-runtime @ session-initialization.test-support.ts:3](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/src/app-server/session-initialization.test-support.ts#L3)
    - [openclaw/plugin-sdk/plugin-test-runtime @ upstream-session-fork.test-support.ts:1](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/src/app-server/upstream-session-fork.test-support.ts#L1)
    - [openclaw/plugin-sdk/plugin-test-runtime @ session-catalog.test-helpers.ts:23](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/src/session-catalog.test-helpers.ts#L23)
    - [openclaw/plugin-sdk/sqlite-runtime-testing @ run-attempt-test-harness.ts:26](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/src/app-server/run-attempt-test-harness.ts#L26)
    - [openclaw/plugin-sdk/sqlite-runtime-testing @ session-catalog.test-helpers.ts:33](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/src/session-catalog.test-helpers.ts#L33)
    - [openclaw/plugin-sdk/test-env @ test-support.ts:75](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/src/app-server/test-support.ts#L75)
    - [openclaw/plugin-sdk/test-env @ session-catalog.test-helpers.ts:37](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/src/session-catalog.test-helpers.ts#L37)

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
    - [openclaw/plugin-sdk/plugin-state-test-runtime @ test-helpers.ts:8](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/diffs/src/test-helpers.ts#L8)

- 🟠 P1 **google-meet** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: google-meet: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **google-meet** `compat-gap` `core-compat-adapter`
  - **sdk-export-missing**: google-meet: plugin SDK import aliases are missing from target package exports
  - state: open · compat:untracked
  - evidence:
    - [openclaw/plugin-sdk/plugin-test-api @ plugin-harness.ts:3](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/google-meet/src/test-support/plugin-harness.ts#L3)

- 🟠 P1 **memory-lancedb** `inspector-gap` `inspector-follow-up`
  - **conversation-access-hook**: memory-lancedb: conversation-access hooks need privacy-boundary probes
  - state: runtime-covered · compat:untracked · runtime:covered
  - evidence:
    - [agent_end @ index.ts:524](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/memory-lancedb/index.ts#L524)
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

- 🟠 P1 **whatsapp** `compat-gap` `core-compat-adapter`
  - **sdk-export-missing**: whatsapp: plugin SDK import aliases are missing from target package exports
  - state: open · compat:untracked
  - evidence:
    - [openclaw/plugin-sdk/channel-ingress-test-runtime @ monitor-inbox.test-harness.ts:6](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/whatsapp/src/monitor-inbox.test-harness.ts#L6)
    - [openclaw/plugin-sdk/channel-test-helpers @ test-helpers.ts:5](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/whatsapp/src/test-helpers.ts#L5)
    - [openclaw/plugin-sdk/plugin-test-runtime @ auto-reply.broadcast-groups.test-harness.ts:2](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/whatsapp/src/auto-reply.broadcast-groups.test-harness.ts#L2)
    - [openclaw/plugin-sdk/plugin-test-runtime @ auto-reply.test-harness.ts:11](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/whatsapp/src/auto-reply.test-harness.ts#L11)
    - [openclaw/plugin-sdk/test-env @ auto-reply.test-harness.ts:14](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/whatsapp/src/auto-reply.test-harness.ts#L14)

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
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/brave/index.ts)

- 🟡 P2 **codex** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: codex: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@openai/codex @ package.json](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/package.json)
    - [semver @ package.json](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/package.json)
    - [smol-toml @ package.json](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/package.json)
    - [ws @ package.json](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/package.json)
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/package.json)

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
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/index.ts)

- 🟡 P2 **codex** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: codex: runtime registrations need capture evidence before final contract judgment
  - state: runtime-covered · compat:untracked · runtime:covered
  - evidence:
    - [registerCommand @ index.ts:294](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/index.ts#L294)
    - [registerNodeHostCommand @ index.ts:205](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/index.ts#L205)
    - [registerNodeHostCommand @ index.ts:287](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/index.ts#L287)
    - [registerNodeHostCommand @ index.ts:292](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/index.ts#L292)
    - [registerNodeInvokePolicy @ index.ts:209](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/index.ts#L209)
    - [registerNodeInvokePolicy @ index.ts:290](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/index.ts#L290)
    - [registerNodeInvokePolicy @ index.ts:293](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/index.ts#L293)
    - [registerService @ index.ts:116](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/index.ts#L116)
    - [registerService @ index.ts:121](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/index.ts#L121)
    - [registerService @ index.ts:123](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/index.ts#L123)
  - runtime coverage:
    - captured registration:registerCommand
    - captured registration:registerNodeHostCommand
    - captured registration:registerNodeInvokePolicy
    - captured registration:registerService
    - .crabpot/results/codex/cold-import-extension-codex-plugins-codex-crabpot-package-index-ts.capture.json
    - .crabpot/results/codex/cold-import-extension-codex-plugins-codex-crabpot-package-index-ts.synthetic.json

- 🟡 P2 **diagnostics-prometheus** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: diagnostics-prometheus: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/diagnostics-prometheus/index.ts)

- 🟡 P2 **diagnostics-prometheus** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: diagnostics-prometheus: runtime registrations need capture evidence before final contract judgment
  - state: runtime-covered · compat:untracked · runtime:covered
  - evidence:
    - [registerHttpRoute @ index.ts:13](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/diagnostics-prometheus/index.ts#L13)
    - [registerService @ index.ts:12](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/diagnostics-prometheus/index.ts#L12)
  - runtime coverage:
    - captured registration:registerHttpRoute
    - captured registration:registerService
    - .crabpot/results/diagnostics-prometheus/cold-import-extension-diagnostics-prometheus-plugins-diagnostics-prometheus-crabpot-package-index-ts.capture.json
    - .crabpot/results/diagnostics-prometheus/cold-import-extension-diagnostics-prometheus-plugins-diagnostics-prometheus-crabpot-package-index-ts.synthetic.json

- 🟡 P2 **diffs** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: diffs: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@pierre/diffs @ package.json](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/diffs/package.json)
    - [@shikijs/langs @ package.json](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/diffs/package.json)
    - [playwright-core @ package.json](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/diffs/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/diffs/package.json)
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/diffs/package.json)

- 🟡 P2 **diffs** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: diffs: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/diffs/index.ts)

- 🟡 P2 **diffs** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: diffs: runtime registrations need capture evidence before final contract judgment
  - state: runtime-covered · compat:untracked · runtime:covered
  - evidence:
    - [registerHttpRoute @ plugin.ts:83](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/diffs/src/plugin.ts#L83)
  - runtime coverage:
    - captured registration:registerHttpRoute
    - .crabpot/results/diffs/cold-import-extension-diffs-plugins-diffs-crabpot-package-index-ts.capture.json
    - .crabpot/results/diffs/cold-import-extension-diffs-plugins-diffs-crabpot-package-index-ts.synthetic.json

- 🟡 P2 **google-meet** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: google-meet: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [jszip @ package.json](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/google-meet/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/google-meet/package.json)

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
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/google-meet/index.ts)

- 🟡 P2 **google-meet** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: google-meet: runtime registrations need capture evidence before final contract judgment
  - state: runtime-covered · compat:untracked · runtime:covered
  - evidence:
    - [registerGatewayMethod @ index.ts:39](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/google-meet/index.ts#L39)
    - [registerNodeHostCommand @ index.ts:363](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/google-meet/index.ts#L363)
    - [registerNodeInvokePolicy @ index.ts:370](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/google-meet/index.ts#L370)
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
    - [apache-arrow @ package.json](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/memory-lancedb/package.json)
    - [openai @ package.json](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/memory-lancedb/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/memory-lancedb/package.json)
    - [@lancedb/lancedb-darwin-arm64 @ package.json](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/memory-lancedb/package.json)
    - [@lancedb/lancedb-linux-arm64-gnu @ package.json](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/memory-lancedb/package.json)
    - [@lancedb/lancedb-linux-arm64-musl @ package.json](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/memory-lancedb/package.json)
    - [@lancedb/lancedb-linux-x64-gnu @ package.json](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/memory-lancedb/package.json)
    - [@lancedb/lancedb-linux-x64-musl @ package.json](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/memory-lancedb/package.json)
    - [@lancedb/lancedb-win32-arm64-msvc @ package.json](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/memory-lancedb/package.json)
    - [@lancedb/lancedb-win32-x64-msvc @ package.json](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/memory-lancedb/package.json)

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
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/memory-lancedb/index.ts)

- 🟡 P2 **memory-lancedb** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: memory-lancedb: runtime registrations need capture evidence before final contract judgment
  - state: runtime-covered · compat:untracked · runtime:covered
  - evidence:
    - [registerService @ index.ts:107](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/memory-lancedb/index.ts#L107)
    - [registerService @ index.ts:649](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/memory-lancedb/index.ts#L649)
  - runtime coverage:
    - captured registration:registerService
    - .crabpot/results/memory-lancedb/cold-import-extension-memory-lancedb-plugins-memory-lancedb-crabpot-package-index-ts.capture.json
    - .crabpot/results/memory-lancedb/cold-import-extension-memory-lancedb-plugins-memory-lancedb-crabpot-package-index-ts.synthetic.json

- 🟡 P2 **whatsapp** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: whatsapp: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [audio-decode @ package.json](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/whatsapp/package.json)
    - [baileys @ package.json](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/whatsapp/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/whatsapp/package.json)

- 🟡 P2 **whatsapp** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: whatsapp: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/whatsapp/index.ts)
    - [setupEntry @ setup-entry.ts](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/whatsapp/setup-entry.ts)

## Contract Probe Backlog

- 🟠 P1 **memory-lancedb** `hook-runner`
  - contract: LLM observer hooks receive documented prompt/output fields with expected redaction behavior.
  - id: `hook.llm-observer.privacy-payload:memory-lancedb`
  - evidence:
    - [agent_end @ index.ts:524](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/memory-lancedb/index.ts#L524)

- 🟠 P1 **codex** `sdk-alias`
  - contract: Every observed OpenClaw plugin SDK import remains exported by the target OpenClaw package.
  - id: `sdk.import.package-export-cold-import:codex`
  - evidence:
    - [openclaw/plugin-sdk/agent-runtime-test-contracts @ event-projector.test-harness.ts:12](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/src/app-server/event-projector.test-harness.ts#L12)
    - [openclaw/plugin-sdk/plugin-test-runtime @ attempt-startup.test-support.ts:8](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/src/app-server/attempt-startup.test-support.ts#L8)
    - [openclaw/plugin-sdk/plugin-test-runtime @ canonical-fork.test-support.ts:10](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/src/app-server/canonical-fork.test-support.ts#L10)
    - [openclaw/plugin-sdk/plugin-test-runtime @ event-projector.test-harness.ts:23](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/src/app-server/event-projector.test-harness.ts#L23)
    - [openclaw/plugin-sdk/plugin-test-runtime @ run-attempt-test-harness.ts:20](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/src/app-server/run-attempt-test-harness.ts#L20)
    - [openclaw/plugin-sdk/plugin-test-runtime @ session-initialization.test-support.ts:3](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/src/app-server/session-initialization.test-support.ts#L3)
    - [openclaw/plugin-sdk/plugin-test-runtime @ upstream-session-fork.test-support.ts:1](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/src/app-server/upstream-session-fork.test-support.ts#L1)
    - [openclaw/plugin-sdk/plugin-test-runtime @ session-catalog.test-helpers.ts:23](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/src/session-catalog.test-helpers.ts#L23)
    - [openclaw/plugin-sdk/sqlite-runtime-testing @ run-attempt-test-harness.ts:26](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/src/app-server/run-attempt-test-harness.ts#L26)
    - [openclaw/plugin-sdk/sqlite-runtime-testing @ session-catalog.test-helpers.ts:33](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/src/session-catalog.test-helpers.ts#L33)
    - [openclaw/plugin-sdk/test-env @ test-support.ts:75](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/src/app-server/test-support.ts#L75)
    - [openclaw/plugin-sdk/test-env @ session-catalog.test-helpers.ts:37](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/src/session-catalog.test-helpers.ts#L37)

- 🟠 P1 **diffs** `sdk-alias`
  - contract: Every observed OpenClaw plugin SDK import remains exported by the target OpenClaw package.
  - id: `sdk.import.package-export-cold-import:diffs`
  - evidence:
    - [openclaw/plugin-sdk/plugin-state-test-runtime @ test-helpers.ts:8](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/diffs/src/test-helpers.ts#L8)

- 🟠 P1 **google-meet** `sdk-alias`
  - contract: Every observed OpenClaw plugin SDK import remains exported by the target OpenClaw package.
  - id: `sdk.import.package-export-cold-import:google-meet`
  - evidence:
    - [openclaw/plugin-sdk/plugin-test-api @ plugin-harness.ts:3](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/google-meet/src/test-support/plugin-harness.ts#L3)

- 🟠 P1 **whatsapp** `sdk-alias`
  - contract: Every observed OpenClaw plugin SDK import remains exported by the target OpenClaw package.
  - id: `sdk.import.package-export-cold-import:whatsapp`
  - evidence:
    - [openclaw/plugin-sdk/channel-ingress-test-runtime @ monitor-inbox.test-harness.ts:6](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/whatsapp/src/monitor-inbox.test-harness.ts#L6)
    - [openclaw/plugin-sdk/channel-test-helpers @ test-helpers.ts:5](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/whatsapp/src/test-helpers.ts#L5)
    - [openclaw/plugin-sdk/plugin-test-runtime @ auto-reply.broadcast-groups.test-harness.ts:2](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/whatsapp/src/auto-reply.broadcast-groups.test-harness.ts#L2)
    - [openclaw/plugin-sdk/plugin-test-runtime @ auto-reply.test-harness.ts:11](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/whatsapp/src/auto-reply.test-harness.ts#L11)
    - [openclaw/plugin-sdk/test-env @ auto-reply.test-harness.ts:14](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/whatsapp/src/auto-reply.test-harness.ts#L14)

- 🟢 P3 **codex** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:codex`
  - evidence:
    - [registerCommand @ index.ts:294](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/index.ts#L294)
    - [registerNodeHostCommand @ index.ts:205](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/index.ts#L205)
    - [registerNodeHostCommand @ index.ts:287](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/index.ts#L287)
    - [registerNodeHostCommand @ index.ts:292](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/index.ts#L292)
    - [registerNodeInvokePolicy @ index.ts:209](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/index.ts#L209)
    - [registerNodeInvokePolicy @ index.ts:290](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/index.ts#L290)
    - [registerNodeInvokePolicy @ index.ts:293](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/index.ts#L293)
    - [registerService @ index.ts:116](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/index.ts#L116)
    - [registerService @ index.ts:121](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/index.ts#L121)
    - [registerService @ index.ts:123](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/index.ts#L123)

- 🟢 P3 **diagnostics-prometheus** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:diagnostics-prometheus`
  - evidence:
    - [registerHttpRoute @ index.ts:13](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/diagnostics-prometheus/index.ts#L13)
    - [registerService @ index.ts:12](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/diagnostics-prometheus/index.ts#L12)

- 🟢 P3 **diffs** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:diffs`
  - evidence:
    - [registerHttpRoute @ plugin.ts:83](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/diffs/src/plugin.ts#L83)

- 🟢 P3 **google-meet** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:google-meet`
  - evidence:
    - [registerGatewayMethod @ index.ts:39](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/google-meet/index.ts#L39)
    - [registerNodeHostCommand @ index.ts:363](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/google-meet/index.ts#L363)
    - [registerNodeInvokePolicy @ index.ts:370](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/google-meet/index.ts#L370)

- 🟢 P3 **memory-lancedb** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:memory-lancedb`
  - evidence:
    - [registerService @ index.ts:107](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/memory-lancedb/index.ts#L107)
    - [registerService @ index.ts:649](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/memory-lancedb/index.ts#L649)

- 🟢 P3 **codex** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:codex`
  - evidence:
    - [@openai/codex @ package.json](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/package.json)
    - [semver @ package.json](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/package.json)
    - [smol-toml @ package.json](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/package.json)
    - [ws @ package.json](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/package.json)
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/package.json)

- 🟢 P3 **diffs** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:diffs`
  - evidence:
    - [@pierre/diffs @ package.json](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/diffs/package.json)
    - [@shikijs/langs @ package.json](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/diffs/package.json)
    - [playwright-core @ package.json](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/diffs/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/diffs/package.json)
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/diffs/package.json)

- 🟢 P3 **google-meet** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:google-meet`
  - evidence:
    - [jszip @ package.json](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/google-meet/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/google-meet/package.json)

- 🟢 P3 **memory-lancedb** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:memory-lancedb`
  - evidence:
    - [apache-arrow @ package.json](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/memory-lancedb/package.json)
    - [openai @ package.json](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/memory-lancedb/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/memory-lancedb/package.json)
    - [@lancedb/lancedb-darwin-arm64 @ package.json](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/memory-lancedb/package.json)
    - [@lancedb/lancedb-linux-arm64-gnu @ package.json](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/memory-lancedb/package.json)
    - [@lancedb/lancedb-linux-arm64-musl @ package.json](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/memory-lancedb/package.json)
    - [@lancedb/lancedb-linux-x64-gnu @ package.json](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/memory-lancedb/package.json)
    - [@lancedb/lancedb-linux-x64-musl @ package.json](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/memory-lancedb/package.json)
    - [@lancedb/lancedb-win32-arm64-msvc @ package.json](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/memory-lancedb/package.json)
    - [@lancedb/lancedb-win32-x64-msvc @ package.json](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/memory-lancedb/package.json)

- 🟢 P3 **whatsapp** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:whatsapp`
  - evidence:
    - [audio-decode @ package.json](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/whatsapp/package.json)
    - [baileys @ package.json](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/whatsapp/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/whatsapp/package.json)

- 🟢 P3 **brave-plugin** `package-loader`
  - contract: Inspector can compile or load TypeScript source entrypoints before registration capture.
  - id: `package.entrypoint.typescript-loader:brave-plugin`
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/brave/index.ts)

- 🟢 P3 **codex** `package-loader`
  - contract: Inspector can compile or load TypeScript source entrypoints before registration capture.
  - id: `package.entrypoint.typescript-loader:codex`
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/codex/index.ts)

- 🟢 P3 **diagnostics-prometheus** `package-loader`
  - contract: Inspector can compile or load TypeScript source entrypoints before registration capture.
  - id: `package.entrypoint.typescript-loader:diagnostics-prometheus`
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/diagnostics-prometheus/index.ts)

- 🟢 P3 **diffs** `package-loader`
  - contract: Inspector can compile or load TypeScript source entrypoints before registration capture.
  - id: `package.entrypoint.typescript-loader:diffs`
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/diffs/index.ts)

- 🟢 P3 **google-meet** `package-loader`
  - contract: Inspector can compile or load TypeScript source entrypoints before registration capture.
  - id: `package.entrypoint.typescript-loader:google-meet`
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/google-meet/index.ts)

- 🟢 P3 **memory-lancedb** `package-loader`
  - contract: Inspector can compile or load TypeScript source entrypoints before registration capture.
  - id: `package.entrypoint.typescript-loader:memory-lancedb`
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/memory-lancedb/index.ts)

- 🟢 P3 **whatsapp** `package-loader`
  - contract: Inspector can compile or load TypeScript source entrypoints before registration capture.
  - id: `package.entrypoint.typescript-loader:whatsapp`
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/whatsapp/index.ts)
    - [setupEntry @ setup-entry.ts](https://github.com/openclaw/openclaw/blob/ffffa9bc2bd5244503d3ac6015531e01276b4c15/extensions/whatsapp/setup-entry.ts)

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
