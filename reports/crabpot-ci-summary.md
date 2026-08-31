# Crabpot CI Summary

Generated: deterministic
Mode: check
OpenClaw: openclaw/openclaw@5570c5ffac86 (Default Track pin 2026-08-28)
Status: PASS

## Counts

| Metric                      | Value                                                                   |
| --------------------------- | ----------------------------------------------------------------------- |
| Breakages                   | 0                                                                       |
| Warnings                    | 123                                                                     |
| Suggestions                 | 241                                                                     |
| Issues                      | 364                                                                     |
| P0 issues                   | 9                                                                       |
| P1 issues                   | 125                                                                     |
| Live issues                 | 9                                                                       |
| Live P0 issues              | 9                                                                       |
| Compat gaps                 | 109                                                                     |
| Deprecation warnings        | 23                                                                      |
| Inspector gaps              | 158                                                                     |
| Upstream metadata           | 65                                                                      |
| Ref diff failures           | 0                                                                       |
| Ref diff warnings           | 0                                                                       |
| Policy failures             | 0                                                                       |
| Policy warnings             | 1                                                                       |
| Profile failures            | 0                                                                       |
| Profile warnings            | 2                                                                       |
| Execution pass              | 0                                                                       |
| Execution fail              | 0                                                                       |
| Execution blocked           | 0                                                                       |
| Windows portability risks   | 17                                                                      |
| Container portability risks | 17                                                                      |
| Jiti loader candidates      | 20                                                                      |
| Import loop                 | p50 76 ms / p95 77 ms / plugin delta RSS 0.8 MB / plugin delta CPU 7 ms |

## Top Issues

| Severity | Class         | Fixture            | Code                      | Decision            | Title                                                                           |
| -------- | ------------- | ------------------ | ------------------------- | ------------------- | ------------------------------------------------------------------------------- |
| P0       | live-issue    | aiwerk-mcp-bridge  | unknown-hook-name         | core-compat-adapter | aiwerk-mcp-bridge: fixture uses a hook missing from target OpenClaw             |
| P0       | live-issue    | connectclaw        | unknown-hook-name         | core-compat-adapter | connectclaw: fixture uses a hook missing from target OpenClaw                   |
| P0       | live-issue    | honcho             | unknown-hook-name         | core-compat-adapter | honcho: fixture uses a hook missing from target OpenClaw                        |
| P0       | live-issue    | honcho             | unknown-registration-name | core-compat-adapter | honcho: fixture calls a registrar missing from target OpenClaw                  |
| P0       | live-issue    | kitchen-sink       | unknown-hook-name         | core-compat-adapter | kitchen-sink: fixture uses a hook missing from target OpenClaw                  |
| P0       | live-issue    | kitchen-sink       | unknown-registration-name | core-compat-adapter | kitchen-sink: fixture calls a registrar missing from target OpenClaw            |
| P0       | live-issue    | memos-cloud        | unknown-hook-name         | core-compat-adapter | memos-cloud: fixture uses a hook missing from target OpenClaw                   |
| P0       | live-issue    | openclaw-telemetry | unknown-hook-name         | core-compat-adapter | openclaw-telemetry: fixture uses a hook missing from target OpenClaw            |
| P0       | live-issue    | opik-openclaw      | unknown-hook-name         | core-compat-adapter | opik-openclaw: fixture uses a hook missing from target OpenClaw                 |
| P1       | compat-gap    | a2a-gateway        | missing-compat-record     | core-compat-adapter | a2a-gateway: compat-dependent behavior lacks registry coverage                  |
| P1       | compat-gap    | agentchat          | missing-compat-record     | core-compat-adapter | agentchat: compat-dependent behavior lacks registry coverage                    |
| P1       | compat-gap    | agentchat          | missing-compat-record     | core-compat-adapter | agentchat: compat-dependent behavior lacks registry coverage                    |
| P1       | compat-gap    | bluebubbles        | missing-compat-record     | core-compat-adapter | bluebubbles: compat-dependent behavior lacks registry coverage                  |
| P1       | compat-gap    | bluebubbles        | sdk-export-missing        | core-compat-adapter | bluebubbles: plugin SDK import aliases are missing from target package exports  |
| P1       | compat-gap    | brave-plugin       | sdk-export-missing        | core-compat-adapter | brave-plugin: plugin SDK import aliases are missing from target package exports |
| P1       | inspector-gap | clawmetry          | conversation-access-hook  | inspector-follow-up | clawmetry: conversation-access hooks need privacy-boundary probes               |
| P1       | compat-gap    | clawmetry          | missing-compat-record     | core-compat-adapter | clawmetry: compat-dependent behavior lacks registry coverage                    |
| P1       | compat-gap    | clawmetry          | missing-compat-record     | core-compat-adapter | clawmetry: compat-dependent behavior lacks registry coverage                    |
| P1       | compat-gap    | clawrouter         | missing-compat-record     | core-compat-adapter | clawrouter: compat-dependent behavior lacks registry coverage                   |
| P1       | compat-gap    | codex              | missing-compat-record     | core-compat-adapter | codex: compat-dependent behavior lacks registry coverage                        |

## Ref Regressions

_none_

## Policy Findings

| Action | ID                                  | Message                  | Evidence                                                                                                                                                                                                                                                                                                                                                  |
| ------ | ----------------------------------- | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| warn   | compatibility-report.live-p0-issues | 9 live P0 issues tracked | aiwerk-mcp-bridge:unknown-hook-name:none, connectclaw:unknown-hook-name:none, honcho:unknown-hook-name:none, honcho:unknown-registration-name:none, kitchen-sink:unknown-hook-name:none, kitchen-sink:unknown-registration-name:none, memos-cloud:unknown-hook-name:none, openclaw-telemetry:unknown-hook-name:none, opik-openclaw:unknown-hook-name:none |

## Profile Findings

| Action | ID               | Metric       | Baseline | Current | Message                                                 |
| ------ | ---------------- | ------------ | -------- | ------- | ------------------------------------------------------- |
| warn   | profile.wall-p95 | p95WallMs    | 1273     | 5114    | p95WallMs regressed 301.7% over baseline                |
| warn   | profile.peak-rss | maxPeakRssMb | 65.1     | 212.8   | maxPeakRssMb regressed 147.70000000000002 over baseline |

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
