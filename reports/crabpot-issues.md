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
| Issue findings             | 31    |
| Open issue findings        | 26    |
| Runtime-covered findings   | 5     |
| Runtime-partial findings   | 1     |
| 🔴 P0                      | 0     |
| 🟠 P1                      | 13    |
| Open 🔴 P0                 | 0     |
| Open 🟠 P1                 | 13    |
| Live issues                | 0     |
| Live P0 issues             | 0     |
| Compat gaps                | 12    |
| Deprecation warnings       | 0     |
| Inspector gaps             | 19    |
| Open inspector gaps        | 14    |
| Runtime coverage artifacts | 16    |
| Upstream metadata          | 0     |
| Contract probes            | 24    |

## Triage Overview

| Class               | Count | P0 | Meaning                                                                                                                                                  |
| ------------------- | ----- | -- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| live-issue          | 0     | 0  | Potential runtime breakage in the target OpenClaw/plugin pair. P0 only when it is not a deprecated compat seam.                                          |
| compat-gap          | 12    | -  | Compatibility behavior is needed but missing from the target OpenClaw compat registry.                                                                   |
| deprecation-warning | 0     | -  | Plugin uses a supported but deprecated compatibility seam; keep it wired while migration exists.                                                         |
| inspector-gap       | 19    | -  | Plugin Inspector needs stronger capture/probe evidence before making contract judgments. Runtime-covered rows are proof-backed and not open report work. |
| upstream-metadata   | 0     | -  | Plugin package or manifest metadata should improve upstream; not a target OpenClaw live break by itself.                                                 |
| fixture-regression  | 0     | -  | Fixture no longer exposes an expected seam; investigate fixture pin or scanner drift.                                                                    |

## P0 Live Issues

_none_

## Other Live Issues

_none_

## Compat Gaps

- 🟠 P1 **brave-plugin** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: brave-plugin: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **codex** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: codex: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **codex** `compat-gap` `core-compat-adapter`
  - **sdk-export-missing**: codex: plugin SDK import aliases are missing from target package exports
  - state: open · compat:untracked
  - evidence:
    - [openclaw/plugin-sdk/agent-runtime-test-contracts @ dynamic-tool-build.completion.test-support.ts:10](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/dynamic-tool-build.completion.test-support.ts#L10)
    - [openclaw/plugin-sdk/agent-runtime-test-contracts @ event-projector.test-harness.ts:12](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/event-projector.test-harness.ts#L12)
    - [openclaw/plugin-sdk/agent-runtime-test-contracts @ run-attempt-test-harness.ts:12](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/run-attempt-test-harness.ts#L12)
    - [openclaw/plugin-sdk/agent-runtime-test-contracts @ run-attempt.context-engine.test-support.ts:3](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/run-attempt.context-engine.test-support.ts#L3)
    - [openclaw/plugin-sdk/agent-runtime-test-contracts @ side-question.test-support.ts:2](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/side-question.test-support.ts#L2)
    - [openclaw/plugin-sdk/plugin-state-test-runtime @ doctor-contract-api.test-support.ts:1](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/doctor-contract-api.test-support.ts#L1)
    - [openclaw/plugin-sdk/plugin-state-test-runtime @ run-attempt-session-owners.test-support.ts:1](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/run-attempt-session-owners.test-support.ts#L1)
    - [openclaw/plugin-sdk/plugin-state-test-runtime @ session-binding.sqlite.test-helpers.ts:7](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/session-binding.sqlite.test-helpers.ts#L7)
    - [openclaw/plugin-sdk/plugin-test-api @ settled-turn-finalizer.test-support.ts:1](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/settled-turn-finalizer.test-support.ts#L1)
    - [openclaw/plugin-sdk/plugin-test-runtime @ attempt-startup.test-support.ts:8](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/attempt-startup.test-support.ts#L8)
    - [openclaw/plugin-sdk/plugin-test-runtime @ canonical-fork.test-support.ts:10](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/canonical-fork.test-support.ts#L10)
    - [openclaw/plugin-sdk/plugin-test-runtime @ compact.test-support.ts:6](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/compact.test-support.ts#L6)
    - [openclaw/plugin-sdk/plugin-test-runtime @ dynamic-tool-build.completion.test-support.ts:11](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/dynamic-tool-build.completion.test-support.ts#L11)
    - [openclaw/plugin-sdk/plugin-test-runtime @ dynamic-tool-build.test-support.ts:92](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/dynamic-tool-build.test-support.ts#L92)
    - [openclaw/plugin-sdk/plugin-test-runtime @ dynamic-tools.test-support.ts:4](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/dynamic-tools.test-support.ts#L4)
    - [openclaw/plugin-sdk/plugin-test-runtime @ event-projector.test-harness.ts:23](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/event-projector.test-harness.ts#L23)
    - [openclaw/plugin-sdk/plugin-test-runtime @ native-subagent-inventory.test-support.ts:3](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/native-subagent-inventory.test-support.ts#L3)
    - [openclaw/plugin-sdk/plugin-test-runtime @ run-attempt-test-harness.ts:20](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/run-attempt-test-harness.ts#L20)
    - [openclaw/plugin-sdk/plugin-test-runtime @ run-attempt.configured-mcp.test-support.ts:2](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/run-attempt.configured-mcp.test-support.ts#L2)
    - [openclaw/plugin-sdk/plugin-test-runtime @ session-initialization.test-support.ts:3](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/session-initialization.test-support.ts#L3)
    - [openclaw/plugin-sdk/plugin-test-runtime @ settled-turn-finalizer.test-support.ts:2](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/settled-turn-finalizer.test-support.ts#L2)
    - [openclaw/plugin-sdk/plugin-test-runtime @ upstream-session-fork.test-support.ts:1](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/upstream-session-fork.test-support.ts#L1)
    - [openclaw/plugin-sdk/plugin-test-runtime @ commands.test-support.ts:8](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/commands.test-support.ts#L8)
    - [openclaw/plugin-sdk/plugin-test-runtime @ session-catalog.test-helpers.ts:23](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/session-catalog.test-helpers.ts#L23)
    - [openclaw/plugin-sdk/sqlite-runtime-testing @ dynamic-tool-build.test-support.ts:11](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/dynamic-tool-build.test-support.ts#L11)
    - [openclaw/plugin-sdk/sqlite-runtime-testing @ event-projector.test-harness.ts:24](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/event-projector.test-harness.ts#L24)
    - [openclaw/plugin-sdk/sqlite-runtime-testing @ run-attempt-session-owners.test-support.ts:7](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/run-attempt-session-owners.test-support.ts#L7)
    - [openclaw/plugin-sdk/sqlite-runtime-testing @ run-attempt-test-harness.ts:32](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/run-attempt-test-harness.ts#L32)
    - [openclaw/plugin-sdk/sqlite-runtime-testing @ session-history.test-support.ts:12](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/session-history.test-support.ts#L12)
    - [openclaw/plugin-sdk/sqlite-runtime-testing @ transcript-mirror.test-harness.ts:4](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/transcript-mirror.test-harness.ts#L4)
    - [openclaw/plugin-sdk/sqlite-runtime-testing @ commands.test-support.ts:22](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/commands.test-support.ts#L22)
    - [openclaw/plugin-sdk/sqlite-runtime-testing @ provider.test-support.ts:8](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/migration/provider.test-support.ts#L8)
    - [openclaw/plugin-sdk/sqlite-runtime-testing @ native-thread-tool.test-helpers.ts:3](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/native-thread-tool.test-helpers.ts#L3)
    - [openclaw/plugin-sdk/sqlite-runtime-testing @ session-catalog.test-helpers.ts:33](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/session-catalog.test-helpers.ts#L33)
    - [openclaw/plugin-sdk/test-env @ shared-client-compaction-retention.test-support.ts:3](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/shared-client-compaction-retention.test-support.ts#L3)
    - [openclaw/plugin-sdk/test-env @ test-support.ts:87](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/test-support.ts#L87)
    - [openclaw/plugin-sdk/test-env @ transcript-mirror.test-harness.ts:8](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/transcript-mirror.test-harness.ts#L8)
    - [openclaw/plugin-sdk/test-env @ commands.test-support.ts:26](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/commands.test-support.ts#L26)
    - [openclaw/plugin-sdk/test-env @ native-thread-tool.test-helpers.ts:4](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/native-thread-tool.test-helpers.ts#L4)
    - [openclaw/plugin-sdk/test-env @ session-catalog.test-helpers.ts:39](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/session-catalog.test-helpers.ts#L39)
    - [openclaw/plugin-sdk/test-fixtures @ computer-use.test-support.ts:3](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/computer-use.test-support.ts#L3)
    - [openclaw/plugin-sdk/test-fixtures @ config.test-support.ts:1](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/config.test-support.ts#L1)
    - [openclaw/plugin-sdk/test-fixtures @ dynamic-tool-build.completion.test-support.ts:28](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/dynamic-tool-build.completion.test-support.ts#L28)
    - [openclaw/plugin-sdk/test-fixtures @ run-attempt.context-engine.test-support.ts:5](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/run-attempt.context-engine.test-support.ts#L5)
    - [openclaw/plugin-sdk/test-fixtures @ run-attempt.settled-finalization.test-support.ts:2](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/run-attempt.settled-finalization.test-support.ts#L2)
    - [openclaw/plugin-sdk/test-fixtures @ run-attempt.usage-limits.test-support.ts:3](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/run-attempt.usage-limits.test-support.ts#L3)
    - [openclaw/plugin-sdk/test-fixtures @ run-attempt.workspace-policy.test-support.ts:3](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/run-attempt.workspace-policy.test-support.ts#L3)
    - [openclaw/plugin-sdk/test-fixtures @ commands.test-support.ts:27](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/commands.test-support.ts#L27)
    - [openclaw/plugin-sdk/test-state @ dynamic-tool-build.completion.test-support.ts:29](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/dynamic-tool-build.completion.test-support.ts#L29)

- 🟠 P1 **diagnostics-prometheus** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: diagnostics-prometheus: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **diagnostics-prometheus** `compat-gap` `core-compat-adapter`
  - **sdk-export-missing**: diagnostics-prometheus: plugin SDK import aliases are missing from target package exports
  - state: open · compat:untracked
  - evidence:
    - [openclaw/plugin-sdk/test-env @ service.test-helpers.ts:4](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/diagnostics-prometheus/src/service.test-helpers.ts#L4)

- 🟠 P1 **diffs** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: diffs: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **diffs** `compat-gap` `core-compat-adapter`
  - **sdk-export-missing**: diffs: plugin SDK import aliases are missing from target package exports
  - state: open · compat:untracked
  - evidence:
    - [openclaw/plugin-sdk/plugin-state-test-runtime @ test-helpers.ts:17](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/diffs/src/test-helpers.ts#L17)
    - [openclaw/plugin-sdk/plugin-test-api @ test-helpers.ts:26](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/diffs/src/test-helpers.ts#L26)
    - [openclaw/plugin-sdk/plugin-test-runtime @ test-helpers.ts:27](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/diffs/src/test-helpers.ts#L27)
    - [openclaw/plugin-sdk/sqlite-runtime-testing @ test-helpers.ts:28](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/diffs/src/test-helpers.ts#L28)

- 🟠 P1 **google-meet** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: google-meet: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **google-meet** `compat-gap` `core-compat-adapter`
  - **sdk-export-missing**: google-meet: plugin SDK import aliases are missing from target package exports
  - state: open · compat:untracked
  - evidence:
    - [openclaw/plugin-sdk/plugin-state-test-runtime @ plugin-harness.ts:2](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/google-meet/src/test-support/plugin-harness.ts#L2)
    - [openclaw/plugin-sdk/plugin-test-api @ plugin-harness.ts:3](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/google-meet/src/test-support/plugin-harness.ts#L3)
    - [openclaw/plugin-sdk/test-fixtures @ plugin-harness.ts:6](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/google-meet/src/test-support/plugin-harness.ts#L6)
    - [openclaw/plugin-sdk/test-node-mocks @ plugin-harness.ts:7](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/google-meet/src/test-support/plugin-harness.ts#L7)

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
    - [openclaw/plugin-sdk/channel-ingress-test-runtime @ monitor-inbox.test-harness.ts:6](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/whatsapp/src/monitor-inbox.test-harness.ts#L6)
    - [openclaw/plugin-sdk/channel-test-helpers @ access-control.test-harness.ts:2](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/whatsapp/src/inbound/access-control.test-harness.ts#L2)
    - [openclaw/plugin-sdk/channel-test-helpers @ monitor-inbox.test-harness.ts:7](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/whatsapp/src/monitor-inbox.test-harness.ts#L7)
    - [openclaw/plugin-sdk/plugin-test-runtime @ auto-reply.broadcast-groups.test-harness.ts:2](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/whatsapp/src/auto-reply.broadcast-groups.test-harness.ts#L2)
    - [openclaw/plugin-sdk/plugin-test-runtime @ auto-reply.test-harness.ts:11](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/whatsapp/src/auto-reply.test-harness.ts#L11)
    - [openclaw/plugin-sdk/plugin-test-runtime @ reply-boundary.test-helper.ts:5](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/whatsapp/src/auto-reply/monitor/reply-boundary.test-helper.ts#L5)
    - [openclaw/plugin-sdk/sqlite-runtime-testing @ auto-reply.test-harness.ts:14](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/whatsapp/src/auto-reply.test-harness.ts#L14)
    - [openclaw/plugin-sdk/test-env @ auto-reply.test-harness.ts:18](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/whatsapp/src/auto-reply.test-harness.ts#L18)

## Deprecation Warnings

_none_

## Inspector Proof Gaps

- 🟠 P1 **memory-lancedb** `inspector-gap` `inspector-follow-up`
  - **conversation-access-hook**: memory-lancedb: conversation-access hooks need privacy-boundary probes
  - state: open · compat:untracked
  - evidence:
    - [agent_end @ index.ts:582](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/memory-lancedb/index.ts#L582)

- 🟡 P2 **brave-plugin** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: brave-plugin: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/brave/index.ts)

- 🟡 P2 **codex** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: codex: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@openai/codex @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/package.json)
    - [@openclaw/fs-safe @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/package.json)
    - [acorn @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/package.json)
    - [semver @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/package.json)
    - [smol-toml @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/package.json)
    - [ws @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/package.json)
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/package.json)

- 🟡 P2 **codex** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: codex: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/index.ts)

- 🟡 P2 **diagnostics-prometheus** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: diagnostics-prometheus: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/diagnostics-prometheus/index.ts)

- 🟡 P2 **diffs** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: diffs: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@pierre/diffs @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/diffs/package.json)
    - [@shikijs/langs @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/diffs/package.json)
    - [playwright-core @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/diffs/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/diffs/package.json)
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/diffs/package.json)

- 🟡 P2 **diffs** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: diffs: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/diffs/index.ts)

- 🟡 P2 **google-meet** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: google-meet: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [jszip @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/google-meet/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/google-meet/package.json)

- 🟡 P2 **google-meet** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: google-meet: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/google-meet/index.ts)

- 🟡 P2 **memory-lancedb** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: memory-lancedb: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [apache-arrow @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/memory-lancedb/package.json)
    - [openai @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/memory-lancedb/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/memory-lancedb/package.json)
    - [@lancedb/lancedb-darwin-arm64 @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/memory-lancedb/package.json)
    - [@lancedb/lancedb-linux-arm64-gnu @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/memory-lancedb/package.json)
    - [@lancedb/lancedb-linux-arm64-musl @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/memory-lancedb/package.json)
    - [@lancedb/lancedb-linux-x64-gnu @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/memory-lancedb/package.json)
    - [@lancedb/lancedb-linux-x64-musl @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/memory-lancedb/package.json)
    - [@lancedb/lancedb-win32-arm64-msvc @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/memory-lancedb/package.json)
    - [@lancedb/lancedb-win32-x64-msvc @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/memory-lancedb/package.json)

- 🟡 P2 **memory-lancedb** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: memory-lancedb: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/memory-lancedb/index.ts)

- 🟡 P2 **memory-lancedb** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: memory-lancedb: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:untracked · runtime:partial
  - evidence:
    - [registerMemoryCapability @ index.ts:206](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/memory-lancedb/index.ts#L206)
    - [registerService @ index.ts:105](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/memory-lancedb/index.ts#L105)
    - [registerService @ index.ts:707](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/memory-lancedb/index.ts#L707)
  - runtime coverage:
    - captured registration:registerService
    - .crabpot/results/memory-lancedb/cold-import-extension-memory-lancedb-plugins-memory-lancedb-crabpot-package-index-ts.capture.json
    - .crabpot/results/memory-lancedb/cold-import-extension-memory-lancedb-plugins-memory-lancedb-crabpot-package-index-ts.synthetic.json

- 🟡 P2 **whatsapp** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: whatsapp: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@solidjs/web @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/whatsapp/package.json)
    - [audio-decode @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/whatsapp/package.json)
    - [baileys @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/whatsapp/package.json)
    - [solid-js @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/whatsapp/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/whatsapp/package.json)

- 🟡 P2 **whatsapp** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: whatsapp: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/whatsapp/index.ts)
    - [setupEntry @ setup-entry.ts](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/whatsapp/setup-entry.ts)

## Runtime-Covered Inspector Gaps

- 🟡 P2 **brave-plugin** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: brave-plugin: runtime registrations need capture evidence before final contract judgment
  - state: runtime-covered · compat:untracked · runtime:covered
  - evidence:
    - [registerWebSearchProvider @ index.ts:13](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/brave/index.ts#L13)
  - runtime coverage:
    - captured registration:registerWebSearchProvider
    - .crabpot/results/brave-plugin/cold-import-extension-brave-plugin-plugins-brave-plugin-crabpot-package-index-ts.capture.json
    - .crabpot/results/brave-plugin/cold-import-extension-brave-plugin-plugins-brave-plugin-crabpot-package-index-ts.synthetic.json

- 🟡 P2 **codex** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: codex: runtime registrations need capture evidence before final contract judgment
  - state: runtime-covered · compat:untracked · runtime:covered
  - evidence:
    - [registerAgentHarness @ index.ts:286](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/index.ts#L286)
    - [registerCommand @ index.ts:345](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/index.ts#L345)
    - [registerGatewayMethod @ index.ts:100](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/index.ts#L100)
    - [registerMediaUnderstandingProvider @ index.ts:289](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/index.ts#L289)
    - [registerMigrationProvider @ index.ts:295](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/index.ts#L295)
    - [registerNodeHostCommand @ index.ts:243](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/index.ts#L243)
    - [registerNodeHostCommand @ index.ts:338](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/index.ts#L338)
    - [registerNodeHostCommand @ index.ts:343](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/index.ts#L343)
    - [registerNodeInvokePolicy @ index.ts:247](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/index.ts#L247)
    - [registerNodeInvokePolicy @ index.ts:341](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/index.ts#L341)
    - [registerNodeInvokePolicy @ index.ts:344](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/index.ts#L344)
    - [registerProvider @ index.ts:112](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/index.ts#L112)
    - [registerService @ index.ts:108](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/index.ts#L108)
    - [registerService @ index.ts:137](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/index.ts#L137)
    - [registerService @ index.ts:142](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/index.ts#L142)
    - [registerService @ index.ts:144](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/index.ts#L144)
    - [registerService @ index.ts:225](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/index.ts#L225)
    - [registerSessionCatalog @ session-catalog.ts:462](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/session-catalog.ts#L462)
    - [registerToolMetadata @ index.ts:309](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/index.ts#L309)
    - [registerToolMetadata @ index.ts:328](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/index.ts#L328)
    - [registerWebSearchProvider @ index.ts:292](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/index.ts#L292)
  - runtime coverage:
    - captured registration:registerAgentHarness
    - captured registration:registerCommand
    - captured registration:registerGatewayMethod
    - captured registration:registerMediaUnderstandingProvider
    - captured registration:registerMigrationProvider
    - captured registration:registerNodeHostCommand
    - captured registration:registerNodeInvokePolicy
    - captured registration:registerProvider
    - captured registration:registerService
    - captured registration:registerSessionCatalog
    - captured registration:registerToolMetadata
    - captured registration:registerWebSearchProvider
    - .crabpot/results/codex/cold-import-extension-codex-plugins-codex-crabpot-package-index-ts.capture.json
    - .crabpot/results/codex/cold-import-extension-codex-plugins-codex-crabpot-package-index-ts.synthetic.json

- 🟡 P2 **diagnostics-prometheus** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: diagnostics-prometheus: runtime registrations need capture evidence before final contract judgment
  - state: runtime-covered · compat:untracked · runtime:covered
  - evidence:
    - [registerHttpRoute @ index.ts:12](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/diagnostics-prometheus/index.ts#L12)
    - [registerService @ index.ts:11](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/diagnostics-prometheus/index.ts#L11)
  - runtime coverage:
    - captured registration:registerHttpRoute
    - captured registration:registerService
    - .crabpot/results/diagnostics-prometheus/cold-import-extension-diagnostics-prometheus-plugins-diagnostics-prometheus-crabpot-package-index-ts.capture.json
    - .crabpot/results/diagnostics-prometheus/cold-import-extension-diagnostics-prometheus-plugins-diagnostics-prometheus-crabpot-package-index-ts.synthetic.json

- 🟡 P2 **diffs** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: diffs: runtime registrations need capture evidence before final contract judgment
  - state: runtime-covered · compat:untracked · runtime:covered
  - evidence:
    - [registerHttpRoute @ plugin.ts:112](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/diffs/src/plugin.ts#L112)
    - [registerService @ plugin.ts:73](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/diffs/src/plugin.ts#L73)
  - runtime coverage:
    - captured registration:registerHttpRoute
    - captured registration:registerService
    - .crabpot/results/diffs/cold-import-extension-diffs-plugins-diffs-crabpot-package-index-ts.capture.json
    - .crabpot/results/diffs/cold-import-extension-diffs-plugins-diffs-crabpot-package-index-ts.synthetic.json

- 🟡 P2 **google-meet** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: google-meet: runtime registrations need capture evidence before final contract judgment
  - state: runtime-covered · compat:untracked · runtime:covered
  - evidence:
    - [registerGatewayMethod @ index.ts:52](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/google-meet/index.ts#L52)
    - [registerNodeHostCommand @ index.ts:362](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/google-meet/index.ts#L362)
    - [registerNodeInvokePolicy @ index.ts:372](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/google-meet/index.ts#L372)
    - [registerService @ plugin-registration.ts:203](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/google-meet/src/plugin-registration.ts#L203)
    - [registerTranscriptSourceProvider @ index.ts:119](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/google-meet/index.ts#L119)
  - runtime coverage:
    - captured registration:registerGatewayMethod
    - captured registration:registerNodeHostCommand
    - captured registration:registerNodeInvokePolicy
    - captured registration:registerService
    - captured registration:registerTranscriptSourceProvider
    - .crabpot/results/google-meet/cold-import-extension-google-meet-plugins-google-meet-crabpot-package-index-ts.capture.json
    - .crabpot/results/google-meet/cold-import-extension-google-meet-plugins-google-meet-crabpot-package-index-ts.synthetic.json

## Upstream Metadata Issues

_none_

## Issues

- 🟠 P1 **brave-plugin** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: brave-plugin: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **codex** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: codex: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **codex** `compat-gap` `core-compat-adapter`
  - **sdk-export-missing**: codex: plugin SDK import aliases are missing from target package exports
  - state: open · compat:untracked
  - evidence:
    - [openclaw/plugin-sdk/agent-runtime-test-contracts @ dynamic-tool-build.completion.test-support.ts:10](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/dynamic-tool-build.completion.test-support.ts#L10)
    - [openclaw/plugin-sdk/agent-runtime-test-contracts @ event-projector.test-harness.ts:12](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/event-projector.test-harness.ts#L12)
    - [openclaw/plugin-sdk/agent-runtime-test-contracts @ run-attempt-test-harness.ts:12](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/run-attempt-test-harness.ts#L12)
    - [openclaw/plugin-sdk/agent-runtime-test-contracts @ run-attempt.context-engine.test-support.ts:3](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/run-attempt.context-engine.test-support.ts#L3)
    - [openclaw/plugin-sdk/agent-runtime-test-contracts @ side-question.test-support.ts:2](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/side-question.test-support.ts#L2)
    - [openclaw/plugin-sdk/plugin-state-test-runtime @ doctor-contract-api.test-support.ts:1](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/doctor-contract-api.test-support.ts#L1)
    - [openclaw/plugin-sdk/plugin-state-test-runtime @ run-attempt-session-owners.test-support.ts:1](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/run-attempt-session-owners.test-support.ts#L1)
    - [openclaw/plugin-sdk/plugin-state-test-runtime @ session-binding.sqlite.test-helpers.ts:7](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/session-binding.sqlite.test-helpers.ts#L7)
    - [openclaw/plugin-sdk/plugin-test-api @ settled-turn-finalizer.test-support.ts:1](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/settled-turn-finalizer.test-support.ts#L1)
    - [openclaw/plugin-sdk/plugin-test-runtime @ attempt-startup.test-support.ts:8](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/attempt-startup.test-support.ts#L8)
    - [openclaw/plugin-sdk/plugin-test-runtime @ canonical-fork.test-support.ts:10](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/canonical-fork.test-support.ts#L10)
    - [openclaw/plugin-sdk/plugin-test-runtime @ compact.test-support.ts:6](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/compact.test-support.ts#L6)
    - [openclaw/plugin-sdk/plugin-test-runtime @ dynamic-tool-build.completion.test-support.ts:11](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/dynamic-tool-build.completion.test-support.ts#L11)
    - [openclaw/plugin-sdk/plugin-test-runtime @ dynamic-tool-build.test-support.ts:92](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/dynamic-tool-build.test-support.ts#L92)
    - [openclaw/plugin-sdk/plugin-test-runtime @ dynamic-tools.test-support.ts:4](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/dynamic-tools.test-support.ts#L4)
    - [openclaw/plugin-sdk/plugin-test-runtime @ event-projector.test-harness.ts:23](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/event-projector.test-harness.ts#L23)
    - [openclaw/plugin-sdk/plugin-test-runtime @ native-subagent-inventory.test-support.ts:3](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/native-subagent-inventory.test-support.ts#L3)
    - [openclaw/plugin-sdk/plugin-test-runtime @ run-attempt-test-harness.ts:20](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/run-attempt-test-harness.ts#L20)
    - [openclaw/plugin-sdk/plugin-test-runtime @ run-attempt.configured-mcp.test-support.ts:2](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/run-attempt.configured-mcp.test-support.ts#L2)
    - [openclaw/plugin-sdk/plugin-test-runtime @ session-initialization.test-support.ts:3](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/session-initialization.test-support.ts#L3)
    - [openclaw/plugin-sdk/plugin-test-runtime @ settled-turn-finalizer.test-support.ts:2](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/settled-turn-finalizer.test-support.ts#L2)
    - [openclaw/plugin-sdk/plugin-test-runtime @ upstream-session-fork.test-support.ts:1](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/upstream-session-fork.test-support.ts#L1)
    - [openclaw/plugin-sdk/plugin-test-runtime @ commands.test-support.ts:8](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/commands.test-support.ts#L8)
    - [openclaw/plugin-sdk/plugin-test-runtime @ session-catalog.test-helpers.ts:23](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/session-catalog.test-helpers.ts#L23)
    - [openclaw/plugin-sdk/sqlite-runtime-testing @ dynamic-tool-build.test-support.ts:11](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/dynamic-tool-build.test-support.ts#L11)
    - [openclaw/plugin-sdk/sqlite-runtime-testing @ event-projector.test-harness.ts:24](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/event-projector.test-harness.ts#L24)
    - [openclaw/plugin-sdk/sqlite-runtime-testing @ run-attempt-session-owners.test-support.ts:7](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/run-attempt-session-owners.test-support.ts#L7)
    - [openclaw/plugin-sdk/sqlite-runtime-testing @ run-attempt-test-harness.ts:32](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/run-attempt-test-harness.ts#L32)
    - [openclaw/plugin-sdk/sqlite-runtime-testing @ session-history.test-support.ts:12](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/session-history.test-support.ts#L12)
    - [openclaw/plugin-sdk/sqlite-runtime-testing @ transcript-mirror.test-harness.ts:4](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/transcript-mirror.test-harness.ts#L4)
    - [openclaw/plugin-sdk/sqlite-runtime-testing @ commands.test-support.ts:22](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/commands.test-support.ts#L22)
    - [openclaw/plugin-sdk/sqlite-runtime-testing @ provider.test-support.ts:8](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/migration/provider.test-support.ts#L8)
    - [openclaw/plugin-sdk/sqlite-runtime-testing @ native-thread-tool.test-helpers.ts:3](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/native-thread-tool.test-helpers.ts#L3)
    - [openclaw/plugin-sdk/sqlite-runtime-testing @ session-catalog.test-helpers.ts:33](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/session-catalog.test-helpers.ts#L33)
    - [openclaw/plugin-sdk/test-env @ shared-client-compaction-retention.test-support.ts:3](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/shared-client-compaction-retention.test-support.ts#L3)
    - [openclaw/plugin-sdk/test-env @ test-support.ts:87](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/test-support.ts#L87)
    - [openclaw/plugin-sdk/test-env @ transcript-mirror.test-harness.ts:8](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/transcript-mirror.test-harness.ts#L8)
    - [openclaw/plugin-sdk/test-env @ commands.test-support.ts:26](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/commands.test-support.ts#L26)
    - [openclaw/plugin-sdk/test-env @ native-thread-tool.test-helpers.ts:4](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/native-thread-tool.test-helpers.ts#L4)
    - [openclaw/plugin-sdk/test-env @ session-catalog.test-helpers.ts:39](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/session-catalog.test-helpers.ts#L39)
    - [openclaw/plugin-sdk/test-fixtures @ computer-use.test-support.ts:3](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/computer-use.test-support.ts#L3)
    - [openclaw/plugin-sdk/test-fixtures @ config.test-support.ts:1](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/config.test-support.ts#L1)
    - [openclaw/plugin-sdk/test-fixtures @ dynamic-tool-build.completion.test-support.ts:28](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/dynamic-tool-build.completion.test-support.ts#L28)
    - [openclaw/plugin-sdk/test-fixtures @ run-attempt.context-engine.test-support.ts:5](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/run-attempt.context-engine.test-support.ts#L5)
    - [openclaw/plugin-sdk/test-fixtures @ run-attempt.settled-finalization.test-support.ts:2](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/run-attempt.settled-finalization.test-support.ts#L2)
    - [openclaw/plugin-sdk/test-fixtures @ run-attempt.usage-limits.test-support.ts:3](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/run-attempt.usage-limits.test-support.ts#L3)
    - [openclaw/plugin-sdk/test-fixtures @ run-attempt.workspace-policy.test-support.ts:3](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/run-attempt.workspace-policy.test-support.ts#L3)
    - [openclaw/plugin-sdk/test-fixtures @ commands.test-support.ts:27](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/commands.test-support.ts#L27)
    - [openclaw/plugin-sdk/test-state @ dynamic-tool-build.completion.test-support.ts:29](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/dynamic-tool-build.completion.test-support.ts#L29)

- 🟠 P1 **diagnostics-prometheus** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: diagnostics-prometheus: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **diagnostics-prometheus** `compat-gap` `core-compat-adapter`
  - **sdk-export-missing**: diagnostics-prometheus: plugin SDK import aliases are missing from target package exports
  - state: open · compat:untracked
  - evidence:
    - [openclaw/plugin-sdk/test-env @ service.test-helpers.ts:4](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/diagnostics-prometheus/src/service.test-helpers.ts#L4)

- 🟠 P1 **diffs** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: diffs: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **diffs** `compat-gap` `core-compat-adapter`
  - **sdk-export-missing**: diffs: plugin SDK import aliases are missing from target package exports
  - state: open · compat:untracked
  - evidence:
    - [openclaw/plugin-sdk/plugin-state-test-runtime @ test-helpers.ts:17](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/diffs/src/test-helpers.ts#L17)
    - [openclaw/plugin-sdk/plugin-test-api @ test-helpers.ts:26](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/diffs/src/test-helpers.ts#L26)
    - [openclaw/plugin-sdk/plugin-test-runtime @ test-helpers.ts:27](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/diffs/src/test-helpers.ts#L27)
    - [openclaw/plugin-sdk/sqlite-runtime-testing @ test-helpers.ts:28](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/diffs/src/test-helpers.ts#L28)

- 🟠 P1 **google-meet** `compat-gap` `core-compat-adapter`
  - **missing-compat-record**: google-meet: compat-dependent behavior lacks registry coverage
  - state: open · compat:missing
  - evidence:
    - api.capture.runtime-registrars

- 🟠 P1 **google-meet** `compat-gap` `core-compat-adapter`
  - **sdk-export-missing**: google-meet: plugin SDK import aliases are missing from target package exports
  - state: open · compat:untracked
  - evidence:
    - [openclaw/plugin-sdk/plugin-state-test-runtime @ plugin-harness.ts:2](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/google-meet/src/test-support/plugin-harness.ts#L2)
    - [openclaw/plugin-sdk/plugin-test-api @ plugin-harness.ts:3](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/google-meet/src/test-support/plugin-harness.ts#L3)
    - [openclaw/plugin-sdk/test-fixtures @ plugin-harness.ts:6](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/google-meet/src/test-support/plugin-harness.ts#L6)
    - [openclaw/plugin-sdk/test-node-mocks @ plugin-harness.ts:7](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/google-meet/src/test-support/plugin-harness.ts#L7)

- 🟠 P1 **memory-lancedb** `inspector-gap` `inspector-follow-up`
  - **conversation-access-hook**: memory-lancedb: conversation-access hooks need privacy-boundary probes
  - state: open · compat:untracked
  - evidence:
    - [agent_end @ index.ts:582](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/memory-lancedb/index.ts#L582)

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
    - [openclaw/plugin-sdk/channel-ingress-test-runtime @ monitor-inbox.test-harness.ts:6](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/whatsapp/src/monitor-inbox.test-harness.ts#L6)
    - [openclaw/plugin-sdk/channel-test-helpers @ access-control.test-harness.ts:2](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/whatsapp/src/inbound/access-control.test-harness.ts#L2)
    - [openclaw/plugin-sdk/channel-test-helpers @ monitor-inbox.test-harness.ts:7](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/whatsapp/src/monitor-inbox.test-harness.ts#L7)
    - [openclaw/plugin-sdk/plugin-test-runtime @ auto-reply.broadcast-groups.test-harness.ts:2](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/whatsapp/src/auto-reply.broadcast-groups.test-harness.ts#L2)
    - [openclaw/plugin-sdk/plugin-test-runtime @ auto-reply.test-harness.ts:11](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/whatsapp/src/auto-reply.test-harness.ts#L11)
    - [openclaw/plugin-sdk/plugin-test-runtime @ reply-boundary.test-helper.ts:5](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/whatsapp/src/auto-reply/monitor/reply-boundary.test-helper.ts#L5)
    - [openclaw/plugin-sdk/sqlite-runtime-testing @ auto-reply.test-harness.ts:14](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/whatsapp/src/auto-reply.test-harness.ts#L14)
    - [openclaw/plugin-sdk/test-env @ auto-reply.test-harness.ts:18](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/whatsapp/src/auto-reply.test-harness.ts#L18)

- 🟡 P2 **brave-plugin** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: brave-plugin: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/brave/index.ts)

- 🟡 P2 **brave-plugin** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: brave-plugin: runtime registrations need capture evidence before final contract judgment
  - state: runtime-covered · compat:untracked · runtime:covered
  - evidence:
    - [registerWebSearchProvider @ index.ts:13](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/brave/index.ts#L13)
  - runtime coverage:
    - captured registration:registerWebSearchProvider
    - .crabpot/results/brave-plugin/cold-import-extension-brave-plugin-plugins-brave-plugin-crabpot-package-index-ts.capture.json
    - .crabpot/results/brave-plugin/cold-import-extension-brave-plugin-plugins-brave-plugin-crabpot-package-index-ts.synthetic.json

- 🟡 P2 **codex** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: codex: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@openai/codex @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/package.json)
    - [@openclaw/fs-safe @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/package.json)
    - [acorn @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/package.json)
    - [semver @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/package.json)
    - [smol-toml @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/package.json)
    - [ws @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/package.json)
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/package.json)

- 🟡 P2 **codex** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: codex: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/index.ts)

- 🟡 P2 **codex** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: codex: runtime registrations need capture evidence before final contract judgment
  - state: runtime-covered · compat:untracked · runtime:covered
  - evidence:
    - [registerAgentHarness @ index.ts:286](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/index.ts#L286)
    - [registerCommand @ index.ts:345](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/index.ts#L345)
    - [registerGatewayMethod @ index.ts:100](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/index.ts#L100)
    - [registerMediaUnderstandingProvider @ index.ts:289](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/index.ts#L289)
    - [registerMigrationProvider @ index.ts:295](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/index.ts#L295)
    - [registerNodeHostCommand @ index.ts:243](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/index.ts#L243)
    - [registerNodeHostCommand @ index.ts:338](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/index.ts#L338)
    - [registerNodeHostCommand @ index.ts:343](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/index.ts#L343)
    - [registerNodeInvokePolicy @ index.ts:247](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/index.ts#L247)
    - [registerNodeInvokePolicy @ index.ts:341](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/index.ts#L341)
    - [registerNodeInvokePolicy @ index.ts:344](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/index.ts#L344)
    - [registerProvider @ index.ts:112](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/index.ts#L112)
    - [registerService @ index.ts:108](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/index.ts#L108)
    - [registerService @ index.ts:137](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/index.ts#L137)
    - [registerService @ index.ts:142](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/index.ts#L142)
    - [registerService @ index.ts:144](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/index.ts#L144)
    - [registerService @ index.ts:225](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/index.ts#L225)
    - [registerSessionCatalog @ session-catalog.ts:462](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/session-catalog.ts#L462)
    - [registerToolMetadata @ index.ts:309](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/index.ts#L309)
    - [registerToolMetadata @ index.ts:328](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/index.ts#L328)
    - [registerWebSearchProvider @ index.ts:292](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/index.ts#L292)
  - runtime coverage:
    - captured registration:registerAgentHarness
    - captured registration:registerCommand
    - captured registration:registerGatewayMethod
    - captured registration:registerMediaUnderstandingProvider
    - captured registration:registerMigrationProvider
    - captured registration:registerNodeHostCommand
    - captured registration:registerNodeInvokePolicy
    - captured registration:registerProvider
    - captured registration:registerService
    - captured registration:registerSessionCatalog
    - captured registration:registerToolMetadata
    - captured registration:registerWebSearchProvider
    - .crabpot/results/codex/cold-import-extension-codex-plugins-codex-crabpot-package-index-ts.capture.json
    - .crabpot/results/codex/cold-import-extension-codex-plugins-codex-crabpot-package-index-ts.synthetic.json

- 🟡 P2 **diagnostics-prometheus** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: diagnostics-prometheus: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/diagnostics-prometheus/index.ts)

- 🟡 P2 **diagnostics-prometheus** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: diagnostics-prometheus: runtime registrations need capture evidence before final contract judgment
  - state: runtime-covered · compat:untracked · runtime:covered
  - evidence:
    - [registerHttpRoute @ index.ts:12](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/diagnostics-prometheus/index.ts#L12)
    - [registerService @ index.ts:11](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/diagnostics-prometheus/index.ts#L11)
  - runtime coverage:
    - captured registration:registerHttpRoute
    - captured registration:registerService
    - .crabpot/results/diagnostics-prometheus/cold-import-extension-diagnostics-prometheus-plugins-diagnostics-prometheus-crabpot-package-index-ts.capture.json
    - .crabpot/results/diagnostics-prometheus/cold-import-extension-diagnostics-prometheus-plugins-diagnostics-prometheus-crabpot-package-index-ts.synthetic.json

- 🟡 P2 **diffs** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: diffs: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@pierre/diffs @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/diffs/package.json)
    - [@shikijs/langs @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/diffs/package.json)
    - [playwright-core @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/diffs/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/diffs/package.json)
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/diffs/package.json)

- 🟡 P2 **diffs** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: diffs: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/diffs/index.ts)

- 🟡 P2 **diffs** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: diffs: runtime registrations need capture evidence before final contract judgment
  - state: runtime-covered · compat:untracked · runtime:covered
  - evidence:
    - [registerHttpRoute @ plugin.ts:112](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/diffs/src/plugin.ts#L112)
    - [registerService @ plugin.ts:73](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/diffs/src/plugin.ts#L73)
  - runtime coverage:
    - captured registration:registerHttpRoute
    - captured registration:registerService
    - .crabpot/results/diffs/cold-import-extension-diffs-plugins-diffs-crabpot-package-index-ts.capture.json
    - .crabpot/results/diffs/cold-import-extension-diffs-plugins-diffs-crabpot-package-index-ts.synthetic.json

- 🟡 P2 **google-meet** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: google-meet: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [jszip @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/google-meet/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/google-meet/package.json)

- 🟡 P2 **google-meet** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: google-meet: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/google-meet/index.ts)

- 🟡 P2 **google-meet** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: google-meet: runtime registrations need capture evidence before final contract judgment
  - state: runtime-covered · compat:untracked · runtime:covered
  - evidence:
    - [registerGatewayMethod @ index.ts:52](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/google-meet/index.ts#L52)
    - [registerNodeHostCommand @ index.ts:362](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/google-meet/index.ts#L362)
    - [registerNodeInvokePolicy @ index.ts:372](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/google-meet/index.ts#L372)
    - [registerService @ plugin-registration.ts:203](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/google-meet/src/plugin-registration.ts#L203)
    - [registerTranscriptSourceProvider @ index.ts:119](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/google-meet/index.ts#L119)
  - runtime coverage:
    - captured registration:registerGatewayMethod
    - captured registration:registerNodeHostCommand
    - captured registration:registerNodeInvokePolicy
    - captured registration:registerService
    - captured registration:registerTranscriptSourceProvider
    - .crabpot/results/google-meet/cold-import-extension-google-meet-plugins-google-meet-crabpot-package-index-ts.capture.json
    - .crabpot/results/google-meet/cold-import-extension-google-meet-plugins-google-meet-crabpot-package-index-ts.synthetic.json

- 🟡 P2 **memory-lancedb** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: memory-lancedb: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [apache-arrow @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/memory-lancedb/package.json)
    - [openai @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/memory-lancedb/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/memory-lancedb/package.json)
    - [@lancedb/lancedb-darwin-arm64 @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/memory-lancedb/package.json)
    - [@lancedb/lancedb-linux-arm64-gnu @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/memory-lancedb/package.json)
    - [@lancedb/lancedb-linux-arm64-musl @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/memory-lancedb/package.json)
    - [@lancedb/lancedb-linux-x64-gnu @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/memory-lancedb/package.json)
    - [@lancedb/lancedb-linux-x64-musl @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/memory-lancedb/package.json)
    - [@lancedb/lancedb-win32-arm64-msvc @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/memory-lancedb/package.json)
    - [@lancedb/lancedb-win32-x64-msvc @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/memory-lancedb/package.json)

- 🟡 P2 **memory-lancedb** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: memory-lancedb: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/memory-lancedb/index.ts)

- 🟡 P2 **memory-lancedb** `inspector-gap` `inspector-follow-up`
  - **registration-capture-gap**: memory-lancedb: runtime registrations need capture evidence before final contract judgment
  - state: open · compat:untracked · runtime:partial
  - evidence:
    - [registerMemoryCapability @ index.ts:206](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/memory-lancedb/index.ts#L206)
    - [registerService @ index.ts:105](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/memory-lancedb/index.ts#L105)
    - [registerService @ index.ts:707](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/memory-lancedb/index.ts#L707)
  - runtime coverage:
    - captured registration:registerService
    - .crabpot/results/memory-lancedb/cold-import-extension-memory-lancedb-plugins-memory-lancedb-crabpot-package-index-ts.capture.json
    - .crabpot/results/memory-lancedb/cold-import-extension-memory-lancedb-plugins-memory-lancedb-crabpot-package-index-ts.synthetic.json

- 🟡 P2 **whatsapp** `inspector-gap` `inspector-follow-up`
  - **package-dependency-install-required**: whatsapp: cold import requires dependency installation in an isolated workspace
  - state: open · compat:none
  - evidence:
    - [@solidjs/web @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/whatsapp/package.json)
    - [audio-decode @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/whatsapp/package.json)
    - [baileys @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/whatsapp/package.json)
    - [solid-js @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/whatsapp/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/whatsapp/package.json)

- 🟡 P2 **whatsapp** `inspector-gap` `inspector-follow-up`
  - **package-typescript-source-entrypoint**: whatsapp: cold import needs TypeScript source entrypoint support
  - state: open · compat:none
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/whatsapp/index.ts)
    - [setupEntry @ setup-entry.ts](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/whatsapp/setup-entry.ts)

## Contract Probe Backlog

- 🟠 P1 **memory-lancedb** `hook-runner`
  - contract: LLM observer hooks receive documented prompt/output fields with expected redaction behavior.
  - id: `hook.llm-observer.privacy-payload:memory-lancedb`
  - evidence:
    - [agent_end @ index.ts:582](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/memory-lancedb/index.ts#L582)

- 🟠 P1 **codex** `sdk-alias`
  - contract: Every observed OpenClaw plugin SDK import remains exported by the target OpenClaw package.
  - id: `sdk.import.package-export-cold-import:codex`
  - evidence:
    - [openclaw/plugin-sdk/agent-runtime-test-contracts @ dynamic-tool-build.completion.test-support.ts:10](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/dynamic-tool-build.completion.test-support.ts#L10)
    - [openclaw/plugin-sdk/agent-runtime-test-contracts @ event-projector.test-harness.ts:12](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/event-projector.test-harness.ts#L12)
    - [openclaw/plugin-sdk/agent-runtime-test-contracts @ run-attempt-test-harness.ts:12](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/run-attempt-test-harness.ts#L12)
    - [openclaw/plugin-sdk/agent-runtime-test-contracts @ run-attempt.context-engine.test-support.ts:3](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/run-attempt.context-engine.test-support.ts#L3)
    - [openclaw/plugin-sdk/agent-runtime-test-contracts @ side-question.test-support.ts:2](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/side-question.test-support.ts#L2)
    - [openclaw/plugin-sdk/plugin-state-test-runtime @ doctor-contract-api.test-support.ts:1](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/doctor-contract-api.test-support.ts#L1)
    - [openclaw/plugin-sdk/plugin-state-test-runtime @ run-attempt-session-owners.test-support.ts:1](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/run-attempt-session-owners.test-support.ts#L1)
    - [openclaw/plugin-sdk/plugin-state-test-runtime @ session-binding.sqlite.test-helpers.ts:7](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/session-binding.sqlite.test-helpers.ts#L7)
    - [openclaw/plugin-sdk/plugin-test-api @ settled-turn-finalizer.test-support.ts:1](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/settled-turn-finalizer.test-support.ts#L1)
    - [openclaw/plugin-sdk/plugin-test-runtime @ attempt-startup.test-support.ts:8](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/attempt-startup.test-support.ts#L8)
    - [openclaw/plugin-sdk/plugin-test-runtime @ canonical-fork.test-support.ts:10](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/canonical-fork.test-support.ts#L10)
    - [openclaw/plugin-sdk/plugin-test-runtime @ compact.test-support.ts:6](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/compact.test-support.ts#L6)
    - [openclaw/plugin-sdk/plugin-test-runtime @ dynamic-tool-build.completion.test-support.ts:11](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/dynamic-tool-build.completion.test-support.ts#L11)
    - [openclaw/plugin-sdk/plugin-test-runtime @ dynamic-tool-build.test-support.ts:92](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/dynamic-tool-build.test-support.ts#L92)
    - [openclaw/plugin-sdk/plugin-test-runtime @ dynamic-tools.test-support.ts:4](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/dynamic-tools.test-support.ts#L4)
    - [openclaw/plugin-sdk/plugin-test-runtime @ event-projector.test-harness.ts:23](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/event-projector.test-harness.ts#L23)
    - [openclaw/plugin-sdk/plugin-test-runtime @ native-subagent-inventory.test-support.ts:3](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/native-subagent-inventory.test-support.ts#L3)
    - [openclaw/plugin-sdk/plugin-test-runtime @ run-attempt-test-harness.ts:20](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/run-attempt-test-harness.ts#L20)
    - [openclaw/plugin-sdk/plugin-test-runtime @ run-attempt.configured-mcp.test-support.ts:2](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/run-attempt.configured-mcp.test-support.ts#L2)
    - [openclaw/plugin-sdk/plugin-test-runtime @ session-initialization.test-support.ts:3](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/session-initialization.test-support.ts#L3)
    - [openclaw/plugin-sdk/plugin-test-runtime @ settled-turn-finalizer.test-support.ts:2](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/settled-turn-finalizer.test-support.ts#L2)
    - [openclaw/plugin-sdk/plugin-test-runtime @ upstream-session-fork.test-support.ts:1](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/upstream-session-fork.test-support.ts#L1)
    - [openclaw/plugin-sdk/plugin-test-runtime @ commands.test-support.ts:8](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/commands.test-support.ts#L8)
    - [openclaw/plugin-sdk/plugin-test-runtime @ session-catalog.test-helpers.ts:23](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/session-catalog.test-helpers.ts#L23)
    - [openclaw/plugin-sdk/sqlite-runtime-testing @ dynamic-tool-build.test-support.ts:11](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/dynamic-tool-build.test-support.ts#L11)
    - [openclaw/plugin-sdk/sqlite-runtime-testing @ event-projector.test-harness.ts:24](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/event-projector.test-harness.ts#L24)
    - [openclaw/plugin-sdk/sqlite-runtime-testing @ run-attempt-session-owners.test-support.ts:7](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/run-attempt-session-owners.test-support.ts#L7)
    - [openclaw/plugin-sdk/sqlite-runtime-testing @ run-attempt-test-harness.ts:32](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/run-attempt-test-harness.ts#L32)
    - [openclaw/plugin-sdk/sqlite-runtime-testing @ session-history.test-support.ts:12](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/session-history.test-support.ts#L12)
    - [openclaw/plugin-sdk/sqlite-runtime-testing @ transcript-mirror.test-harness.ts:4](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/transcript-mirror.test-harness.ts#L4)
    - [openclaw/plugin-sdk/sqlite-runtime-testing @ commands.test-support.ts:22](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/commands.test-support.ts#L22)
    - [openclaw/plugin-sdk/sqlite-runtime-testing @ provider.test-support.ts:8](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/migration/provider.test-support.ts#L8)
    - [openclaw/plugin-sdk/sqlite-runtime-testing @ native-thread-tool.test-helpers.ts:3](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/native-thread-tool.test-helpers.ts#L3)
    - [openclaw/plugin-sdk/sqlite-runtime-testing @ session-catalog.test-helpers.ts:33](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/session-catalog.test-helpers.ts#L33)
    - [openclaw/plugin-sdk/test-env @ shared-client-compaction-retention.test-support.ts:3](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/shared-client-compaction-retention.test-support.ts#L3)
    - [openclaw/plugin-sdk/test-env @ test-support.ts:87](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/test-support.ts#L87)
    - [openclaw/plugin-sdk/test-env @ transcript-mirror.test-harness.ts:8](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/transcript-mirror.test-harness.ts#L8)
    - [openclaw/plugin-sdk/test-env @ commands.test-support.ts:26](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/commands.test-support.ts#L26)
    - [openclaw/plugin-sdk/test-env @ native-thread-tool.test-helpers.ts:4](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/native-thread-tool.test-helpers.ts#L4)
    - [openclaw/plugin-sdk/test-env @ session-catalog.test-helpers.ts:39](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/session-catalog.test-helpers.ts#L39)
    - [openclaw/plugin-sdk/test-fixtures @ computer-use.test-support.ts:3](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/computer-use.test-support.ts#L3)
    - [openclaw/plugin-sdk/test-fixtures @ config.test-support.ts:1](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/config.test-support.ts#L1)
    - [openclaw/plugin-sdk/test-fixtures @ dynamic-tool-build.completion.test-support.ts:28](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/dynamic-tool-build.completion.test-support.ts#L28)
    - [openclaw/plugin-sdk/test-fixtures @ run-attempt.context-engine.test-support.ts:5](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/run-attempt.context-engine.test-support.ts#L5)
    - [openclaw/plugin-sdk/test-fixtures @ run-attempt.settled-finalization.test-support.ts:2](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/run-attempt.settled-finalization.test-support.ts#L2)
    - [openclaw/plugin-sdk/test-fixtures @ run-attempt.usage-limits.test-support.ts:3](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/run-attempt.usage-limits.test-support.ts#L3)
    - [openclaw/plugin-sdk/test-fixtures @ run-attempt.workspace-policy.test-support.ts:3](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/run-attempt.workspace-policy.test-support.ts#L3)
    - [openclaw/plugin-sdk/test-fixtures @ commands.test-support.ts:27](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/commands.test-support.ts#L27)
    - [openclaw/plugin-sdk/test-state @ dynamic-tool-build.completion.test-support.ts:29](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/app-server/dynamic-tool-build.completion.test-support.ts#L29)

- 🟠 P1 **diagnostics-prometheus** `sdk-alias`
  - contract: Every observed OpenClaw plugin SDK import remains exported by the target OpenClaw package.
  - id: `sdk.import.package-export-cold-import:diagnostics-prometheus`
  - evidence:
    - [openclaw/plugin-sdk/test-env @ service.test-helpers.ts:4](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/diagnostics-prometheus/src/service.test-helpers.ts#L4)

- 🟠 P1 **diffs** `sdk-alias`
  - contract: Every observed OpenClaw plugin SDK import remains exported by the target OpenClaw package.
  - id: `sdk.import.package-export-cold-import:diffs`
  - evidence:
    - [openclaw/plugin-sdk/plugin-state-test-runtime @ test-helpers.ts:17](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/diffs/src/test-helpers.ts#L17)
    - [openclaw/plugin-sdk/plugin-test-api @ test-helpers.ts:26](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/diffs/src/test-helpers.ts#L26)
    - [openclaw/plugin-sdk/plugin-test-runtime @ test-helpers.ts:27](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/diffs/src/test-helpers.ts#L27)
    - [openclaw/plugin-sdk/sqlite-runtime-testing @ test-helpers.ts:28](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/diffs/src/test-helpers.ts#L28)

- 🟠 P1 **google-meet** `sdk-alias`
  - contract: Every observed OpenClaw plugin SDK import remains exported by the target OpenClaw package.
  - id: `sdk.import.package-export-cold-import:google-meet`
  - evidence:
    - [openclaw/plugin-sdk/plugin-state-test-runtime @ plugin-harness.ts:2](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/google-meet/src/test-support/plugin-harness.ts#L2)
    - [openclaw/plugin-sdk/plugin-test-api @ plugin-harness.ts:3](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/google-meet/src/test-support/plugin-harness.ts#L3)
    - [openclaw/plugin-sdk/test-fixtures @ plugin-harness.ts:6](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/google-meet/src/test-support/plugin-harness.ts#L6)
    - [openclaw/plugin-sdk/test-node-mocks @ plugin-harness.ts:7](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/google-meet/src/test-support/plugin-harness.ts#L7)

- 🟠 P1 **whatsapp** `sdk-alias`
  - contract: Every observed OpenClaw plugin SDK import remains exported by the target OpenClaw package.
  - id: `sdk.import.package-export-cold-import:whatsapp`
  - evidence:
    - [openclaw/plugin-sdk/channel-ingress-test-runtime @ monitor-inbox.test-harness.ts:6](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/whatsapp/src/monitor-inbox.test-harness.ts#L6)
    - [openclaw/plugin-sdk/channel-test-helpers @ access-control.test-harness.ts:2](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/whatsapp/src/inbound/access-control.test-harness.ts#L2)
    - [openclaw/plugin-sdk/channel-test-helpers @ monitor-inbox.test-harness.ts:7](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/whatsapp/src/monitor-inbox.test-harness.ts#L7)
    - [openclaw/plugin-sdk/plugin-test-runtime @ auto-reply.broadcast-groups.test-harness.ts:2](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/whatsapp/src/auto-reply.broadcast-groups.test-harness.ts#L2)
    - [openclaw/plugin-sdk/plugin-test-runtime @ auto-reply.test-harness.ts:11](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/whatsapp/src/auto-reply.test-harness.ts#L11)
    - [openclaw/plugin-sdk/plugin-test-runtime @ reply-boundary.test-helper.ts:5](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/whatsapp/src/auto-reply/monitor/reply-boundary.test-helper.ts#L5)
    - [openclaw/plugin-sdk/sqlite-runtime-testing @ auto-reply.test-harness.ts:14](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/whatsapp/src/auto-reply.test-harness.ts#L14)
    - [openclaw/plugin-sdk/test-env @ auto-reply.test-harness.ts:18](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/whatsapp/src/auto-reply.test-harness.ts#L18)

- 🟢 P3 **brave-plugin** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:brave-plugin`
  - evidence:
    - [registerWebSearchProvider @ index.ts:13](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/brave/index.ts#L13)

- 🟢 P3 **codex** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:codex`
  - evidence:
    - [registerAgentHarness @ index.ts:286](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/index.ts#L286)
    - [registerCommand @ index.ts:345](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/index.ts#L345)
    - [registerGatewayMethod @ index.ts:100](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/index.ts#L100)
    - [registerMediaUnderstandingProvider @ index.ts:289](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/index.ts#L289)
    - [registerMigrationProvider @ index.ts:295](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/index.ts#L295)
    - [registerNodeHostCommand @ index.ts:243](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/index.ts#L243)
    - [registerNodeHostCommand @ index.ts:338](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/index.ts#L338)
    - [registerNodeHostCommand @ index.ts:343](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/index.ts#L343)
    - [registerNodeInvokePolicy @ index.ts:247](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/index.ts#L247)
    - [registerNodeInvokePolicy @ index.ts:341](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/index.ts#L341)
    - [registerNodeInvokePolicy @ index.ts:344](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/index.ts#L344)
    - [registerProvider @ index.ts:112](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/index.ts#L112)
    - [registerService @ index.ts:108](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/index.ts#L108)
    - [registerService @ index.ts:137](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/index.ts#L137)
    - [registerService @ index.ts:142](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/index.ts#L142)
    - [registerService @ index.ts:144](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/index.ts#L144)
    - [registerService @ index.ts:225](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/index.ts#L225)
    - [registerSessionCatalog @ session-catalog.ts:462](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/src/session-catalog.ts#L462)
    - [registerToolMetadata @ index.ts:309](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/index.ts#L309)
    - [registerToolMetadata @ index.ts:328](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/index.ts#L328)
    - [registerWebSearchProvider @ index.ts:292](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/index.ts#L292)

- 🟢 P3 **diagnostics-prometheus** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:diagnostics-prometheus`
  - evidence:
    - [registerHttpRoute @ index.ts:12](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/diagnostics-prometheus/index.ts#L12)
    - [registerService @ index.ts:11](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/diagnostics-prometheus/index.ts#L11)

- 🟢 P3 **diffs** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:diffs`
  - evidence:
    - [registerHttpRoute @ plugin.ts:112](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/diffs/src/plugin.ts#L112)
    - [registerService @ plugin.ts:73](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/diffs/src/plugin.ts#L73)

- 🟢 P3 **google-meet** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:google-meet`
  - evidence:
    - [registerGatewayMethod @ index.ts:52](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/google-meet/index.ts#L52)
    - [registerNodeHostCommand @ index.ts:362](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/google-meet/index.ts#L362)
    - [registerNodeInvokePolicy @ index.ts:372](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/google-meet/index.ts#L372)
    - [registerService @ plugin-registration.ts:203](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/google-meet/src/plugin-registration.ts#L203)
    - [registerTranscriptSourceProvider @ index.ts:119](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/google-meet/index.ts#L119)

- 🟢 P3 **memory-lancedb** `inspector-capture-api`
  - contract: External inspector capture records service, route, gateway, command, and interactive registrations.
  - id: `api.capture.runtime-registrars:memory-lancedb`
  - evidence:
    - [registerMemoryCapability @ index.ts:206](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/memory-lancedb/index.ts#L206)
    - [registerService @ index.ts:105](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/memory-lancedb/index.ts#L105)
    - [registerService @ index.ts:707](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/memory-lancedb/index.ts#L707)

- 🟢 P3 **codex** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:codex`
  - evidence:
    - [@openai/codex @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/package.json)
    - [@openclaw/fs-safe @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/package.json)
    - [acorn @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/package.json)
    - [semver @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/package.json)
    - [smol-toml @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/package.json)
    - [ws @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/package.json)
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/package.json)

- 🟢 P3 **diffs** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:diffs`
  - evidence:
    - [@pierre/diffs @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/diffs/package.json)
    - [@shikijs/langs @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/diffs/package.json)
    - [playwright-core @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/diffs/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/diffs/package.json)
    - [zod @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/diffs/package.json)

- 🟢 P3 **google-meet** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:google-meet`
  - evidence:
    - [jszip @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/google-meet/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/google-meet/package.json)

- 🟢 P3 **memory-lancedb** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:memory-lancedb`
  - evidence:
    - [apache-arrow @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/memory-lancedb/package.json)
    - [openai @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/memory-lancedb/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/memory-lancedb/package.json)
    - [@lancedb/lancedb-darwin-arm64 @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/memory-lancedb/package.json)
    - [@lancedb/lancedb-linux-arm64-gnu @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/memory-lancedb/package.json)
    - [@lancedb/lancedb-linux-arm64-musl @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/memory-lancedb/package.json)
    - [@lancedb/lancedb-linux-x64-gnu @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/memory-lancedb/package.json)
    - [@lancedb/lancedb-linux-x64-musl @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/memory-lancedb/package.json)
    - [@lancedb/lancedb-win32-arm64-msvc @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/memory-lancedb/package.json)
    - [@lancedb/lancedb-win32-x64-msvc @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/memory-lancedb/package.json)

- 🟢 P3 **whatsapp** `package-loader`
  - contract: Inspector installs package dependencies in an isolated workspace before cold import.
  - id: `package.entrypoint.isolated-dependency-install:whatsapp`
  - evidence:
    - [@solidjs/web @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/whatsapp/package.json)
    - [audio-decode @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/whatsapp/package.json)
    - [baileys @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/whatsapp/package.json)
    - [solid-js @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/whatsapp/package.json)
    - [typebox @ package.json](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/whatsapp/package.json)

- 🟢 P3 **brave-plugin** `package-loader`
  - contract: Inspector can compile or load TypeScript source entrypoints before registration capture.
  - id: `package.entrypoint.typescript-loader:brave-plugin`
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/brave/index.ts)

- 🟢 P3 **codex** `package-loader`
  - contract: Inspector can compile or load TypeScript source entrypoints before registration capture.
  - id: `package.entrypoint.typescript-loader:codex`
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/codex/index.ts)

- 🟢 P3 **diagnostics-prometheus** `package-loader`
  - contract: Inspector can compile or load TypeScript source entrypoints before registration capture.
  - id: `package.entrypoint.typescript-loader:diagnostics-prometheus`
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/diagnostics-prometheus/index.ts)

- 🟢 P3 **diffs** `package-loader`
  - contract: Inspector can compile or load TypeScript source entrypoints before registration capture.
  - id: `package.entrypoint.typescript-loader:diffs`
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/diffs/index.ts)

- 🟢 P3 **google-meet** `package-loader`
  - contract: Inspector can compile or load TypeScript source entrypoints before registration capture.
  - id: `package.entrypoint.typescript-loader:google-meet`
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/google-meet/index.ts)

- 🟢 P3 **memory-lancedb** `package-loader`
  - contract: Inspector can compile or load TypeScript source entrypoints before registration capture.
  - id: `package.entrypoint.typescript-loader:memory-lancedb`
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/memory-lancedb/index.ts)

- 🟢 P3 **whatsapp** `package-loader`
  - contract: Inspector can compile or load TypeScript source entrypoints before registration capture.
  - id: `package.entrypoint.typescript-loader:whatsapp`
  - evidence:
    - [extension @ index.ts](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/whatsapp/index.ts)
    - [setupEntry @ setup-entry.ts](https://github.com/openclaw/openclaw/blob/bc70a947fc17ee2dbe8ae699b2ee854d4e4bd48a/extensions/whatsapp/setup-entry.ts)
