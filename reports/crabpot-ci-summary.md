# Crabpot CI Summary

Generated: deterministic
Mode: check
OpenClaw: github-default-pin
Status: PASS

## Counts

| Metric                      | Value                                                                    |
| --------------------------- | ------------------------------------------------------------------------ |
| Breakages                   | 0                                                                        |
| Warnings                    | 86                                                                       |
| Suggestions                 | 164                                                                      |
| Issues                      | 250                                                                      |
| P0 issues                   | 7                                                                        |
| P1 issues                   | 36                                                                       |
| Live issues                 | 7                                                                        |
| Live P0 issues              | 7                                                                        |
| Compat gaps                 | 28                                                                       |
| Deprecation warnings        | 22                                                                       |
| Inspector gaps              | 149                                                                      |
| Upstream metadata           | 44                                                                       |
| Ref diff failures           | 0                                                                        |
| Ref diff warnings           | 0                                                                        |
| Policy failures             | 0                                                                        |
| Policy warnings             | 1                                                                        |
| Profile failures            | 0                                                                        |
| Profile warnings            | 0                                                                        |
| Execution pass              | 0                                                                        |
| Execution fail              | 0                                                                        |
| Execution blocked           | 0                                                                        |
| Windows portability risks   | 17                                                                       |
| Container portability risks | 17                                                                       |
| Jiti loader candidates      | 20                                                                       |
| Import loop                 | p50 139 ms / p95 139 ms / plugin delta RSS 0 MB / plugin delta CPU 28 ms |

## Top Issues

| Severity | Class         | Fixture            | Code                      | Decision            | Title                                                                                 |
| -------- | ------------- | ------------------ | ------------------------- | ------------------- | ------------------------------------------------------------------------------------- |
| P0       | live-issue    | aiwerk-mcp-bridge  | unknown-hook-name         | core-compat-adapter | aiwerk-mcp-bridge: fixture uses a hook missing from target OpenClaw                   |
| P0       | live-issue    | connectclaw        | unknown-hook-name         | core-compat-adapter | connectclaw: fixture uses a hook missing from target OpenClaw                         |
| P0       | live-issue    | honcho             | unknown-hook-name         | core-compat-adapter | honcho: fixture uses a hook missing from target OpenClaw                              |
| P0       | live-issue    | honcho             | unknown-registration-name | core-compat-adapter | honcho: fixture calls a registrar missing from target OpenClaw                        |
| P0       | live-issue    | memos-cloud        | unknown-hook-name         | core-compat-adapter | memos-cloud: fixture uses a hook missing from target OpenClaw                         |
| P0       | live-issue    | openclaw-telemetry | unknown-hook-name         | core-compat-adapter | openclaw-telemetry: fixture uses a hook missing from target OpenClaw                  |
| P0       | live-issue    | opik-openclaw      | unknown-hook-name         | core-compat-adapter | opik-openclaw: fixture uses a hook missing from target OpenClaw                       |
| P1       | compat-gap    | agentchat          | missing-compat-record     | core-compat-adapter | agentchat: compat-dependent behavior lacks registry coverage                          |
| P1       | compat-gap    | bluebubbles        | sdk-export-missing        | core-compat-adapter | bluebubbles: plugin SDK import aliases are missing from target package exports        |
| P1       | inspector-gap | codex              | sdk-export-missing        | inspector-follow-up | codex: SDK import coverage requires an eligible host                                  |
| P1       | compat-gap    | connectclaw        | missing-compat-record     | core-compat-adapter | connectclaw: compat-dependent behavior lacks registry coverage                        |
| P1       | compat-gap    | connectclaw        | missing-compat-record     | core-compat-adapter | connectclaw: compat-dependent behavior lacks registry coverage                        |
| P1       | compat-gap    | connectclaw        | sdk-export-missing        | core-compat-adapter | connectclaw: plugin SDK import aliases are missing from target package exports        |
| P1       | compat-gap    | ddingtalk          | missing-compat-record     | core-compat-adapter | ddingtalk: compat-dependent behavior lacks registry coverage                          |
| P1       | compat-gap    | dingtalk-connector | sdk-export-missing        | core-compat-adapter | dingtalk-connector: plugin SDK import aliases are missing from target package exports |
| P1       | inspector-gap | dingtalk-doc       | before-tool-call-probe    | inspector-follow-up | dingtalk-doc: before_tool_call needs terminal/block/approval probes                   |
| P1       | compat-gap    | dingtalk-doc       | missing-compat-record     | core-compat-adapter | dingtalk-doc: compat-dependent behavior lacks registry coverage                       |
| P1       | compat-gap    | dingtalk-doc       | sdk-export-missing        | core-compat-adapter | dingtalk-doc: plugin SDK import aliases are missing from target package exports       |
| P1       | compat-gap    | hasdata            | missing-compat-record     | core-compat-adapter | hasdata: compat-dependent behavior lacks registry coverage                            |
| P1       | compat-gap    | honcho             | missing-compat-record     | core-compat-adapter | honcho: compat-dependent behavior lacks registry coverage                             |

## Ref Regressions

_none_

## Policy Findings

| Action | ID                                  | Message                  | Evidence                                                                                                                                                                                                                                                                |
| ------ | ----------------------------------- | ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| warn   | compatibility-report.live-p0-issues | 7 live P0 issues tracked | aiwerk-mcp-bridge:unknown-hook-name:none, connectclaw:unknown-hook-name:none, honcho:unknown-hook-name:none, honcho:unknown-registration-name:none, memos-cloud:unknown-hook-name:none, openclaw-telemetry:unknown-hook-name:none, opik-openclaw:unknown-hook-name:none |

## Profile Findings

_none_

## Artifacts

| Artifact            | Path                                      |
| ------------------- | ----------------------------------------- |
| packageAvailability | reports/crabpot-package-availability.json |
| generatedSurface    | reports/crabpot-generated-surface.json    |
| compatibility       | reports/crabpot-report.json               |
| capture             | reports/crabpot-capture.json              |
| synthetic           | reports/crabpot-synthetic-probes.json     |
| coldImport          | reports/crabpot-cold-import.json          |
| workspace           | reports/crabpot-workspace-plan.json       |
| platform            | reports/crabpot-platform-probes.json      |
| importLoop          | reports/crabpot-import-loop-profile.json  |
| runtimeProfile      | reports/crabpot-runtime-profile.json      |
| ciPolicy            | reports/crabpot-ci-policy.json            |


## Current-run coverage

- static-1: passed — scripts/check-openclaw-plugin-contracts.mjs
- static-2: passed — scripts/sync-fixtures.mjs --materialize --openclaw ./openclaw
- static-3: passed — --test --test-concurrency=1 test/*.test.mjs
- static-4: passed — scripts/sync-fixtures.mjs --materialize --openclaw ./openclaw
- static-5: passed — scripts/sync-fixtures.mjs --check
- static-6: passed — scripts/run-contract-smoke.mjs --strict --openclaw ./openclaw
- static-7: passed — scripts/inspect-fixtures.mjs --check
- static-8: passed — scripts/run-plugin-inspector-smoke.mjs --check
- static-9: passed — scripts/check-generated-surface-fixture.mjs --check --openclaw ./openclaw --write
- static-10: passed — scripts/generate-report.mjs --check --openclaw ./openclaw --write
- static-11: passed — scripts/capture-contracts.mjs --check --openclaw ./openclaw --write
- static-12: passed — scripts/synthetic-probes.mjs --check --openclaw ./openclaw --write
- static-13: passed — scripts/cold-import-readiness.mjs --check --openclaw ./openclaw --write
- static-14: passed — scripts/workspace-plan.mjs --check --openclaw ./openclaw --write
- static-15: passed — scripts/platform-probes.mjs --check --openclaw ./openclaw --write
- static-16: passed — scripts/import-loop-profile.mjs --check --runs 3 --write
- static-17: passed — scripts/profile-contract-runtime.mjs --check --openclaw ./openclaw --runs 3 --write
- static-18: passed — scripts/check-contract-coverage.mjs --openclaw ./openclaw
- static-19: passed — scripts/check-ci-policy.mjs --check --write --run-report
- Not selected: execution, refDiff, profileDiff
