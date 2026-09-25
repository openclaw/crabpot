# Crabpot CI Summary

Generated: deterministic
Mode: dependabot
OpenClaw: openclaw/openclaw@10bb24270d8d (Default Track pin 2026-09-25)
Status: PASS

## Counts

| Metric                      | Value                                                                                                                 |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Breakages                   | 0                                                                                                                     |
| Warnings                    | 85                                                                                                                    |
| Suggestions                 | 165                                                                                                                   |
| Issues                      | 250                                                                                                                   |
| P0 issues                   | 7                                                                                                                     |
| P1 issues                   | 35                                                                                                                    |
| Live issues                 | 7                                                                                                                     |
| Live P0 issues              | 7                                                                                                                     |
| Compat gaps                 | 29                                                                                                                    |
| Deprecation warnings        | 22                                                                                                                    |
| Inspector gaps              | 148                                                                                                                   |
| Upstream metadata           | 44                                                                                                                    |
| Ref diff failures           | 0                                                                                                                     |
| Ref diff warnings           | 0                                                                                                                     |
| Policy failures             | 0                                                                                                                     |
| Policy warnings             | 1                                                                                                                     |
| Profile failures            | 0                                                                                                                     |
| Profile warnings            | 2                                                                                                                     |
| Execution pass              | 0                                                                                                                     |
| Execution fail              | 0                                                                                                                     |
| Execution blocked           | 0                                                                                                                     |
| Windows portability risks   | 17                                                                                                                    |
| Container portability risks | 17                                                                                                                    |
| Jiti loader candidates      | 20                                                                                                                    |
| Import loop                 | p50 2557 ms / p95 2560 ms / plugin delta RSS 3.8 MB / plugin delta CPU 0 ms / OpenClaw import 72 ms / activate 0.8 ms |

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
| P1       | compat-gap    | inworld-tts        | missing-compat-record     | core-compat-adapter | inworld-tts: compat-dependent behavior lacks registry coverage                        |

## Ref Regressions

_none_

## Policy Findings

| Action | ID                                  | Message                  | Evidence                                                                                                                                                                                                                                                                |
| ------ | ----------------------------------- | ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| warn   | compatibility-report.live-p0-issues | 7 live P0 issues tracked | aiwerk-mcp-bridge:unknown-hook-name:none, connectclaw:unknown-hook-name:none, honcho:unknown-hook-name:none, honcho:unknown-registration-name:none, memos-cloud:unknown-hook-name:none, openclaw-telemetry:unknown-hook-name:none, opik-openclaw:unknown-hook-name:none |

## Profile Findings

| Action | ID               | Metric       | Baseline | Current | Message                                    |
| ------ | ---------------- | ------------ | -------- | ------- | ------------------------------------------ |
| warn   | profile.wall-p95 | p95WallMs    | 1273     | 7883    | p95WallMs regressed 519.2% over baseline   |
| warn   | profile.peak-rss | maxPeakRssMb | 65.1     | 757.7   | maxPeakRssMb regressed 692.6 over baseline |

## Artifacts

| Artifact       | Path                                     |
| -------------- | ---------------------------------------- |
| compatibility  | reports/crabpot-report.json              |
| capture        | reports/crabpot-capture.json             |
| synthetic      | reports/crabpot-synthetic-probes.json    |
| coldImport     | reports/crabpot-cold-import.json         |
| workspace      | reports/crabpot-workspace-plan.json      |
| platform       | reports/crabpot-platform-probes.json     |
| importLoop     | reports/crabpot-import-loop-profile.json |
| execution      | reports/crabpot-execution-results.json   |
| runtimeProfile | reports/crabpot-runtime-profile.json     |
| refDiff        | -                                        |
| profileDiff    | reports/crabpot-profile-diff.json        |
| ciPolicy       | reports/crabpot-ci-policy.json           |
