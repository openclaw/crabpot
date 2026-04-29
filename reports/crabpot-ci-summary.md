# Crabpot CI Summary

Generated: deterministic
Mode: local
OpenClaw: -
Status: PASS

## Counts

| Metric                      | Value                                           |
| --------------------------- | ----------------------------------------------- |
| Breakages                   | 0                                               |
| Warnings                    | 60                                              |
| Suggestions                 | 99                                              |
| Issues                      | 159                                             |
| P0 issues                   | 5                                               |
| P1 issues                   | 33                                              |
| Live issues                 | 5                                               |
| Live P0 issues              | 5                                               |
| Compat gaps                 | 4                                               |
| Deprecation warnings        | 24                                              |
| Inspector gaps              | 102                                             |
| Upstream metadata           | 24                                              |
| Ref diff failures           | 0                                               |
| Ref diff warnings           | 0                                               |
| Policy failures             | 0                                               |
| Policy warnings             | 3                                               |
| Profile failures            | 0                                               |
| Profile warnings            | 0                                               |
| Execution pass              | 6                                               |
| Execution fail              | 0                                               |
| Execution blocked           | 2                                               |
| Windows portability risks   | 172                                             |
| Container portability risks | 51                                              |
| Jiti loader candidates      | 18                                              |
| Import loop                 | p50 71 ms / p95 73 ms / max RSS 0 MB / CPU 0 ms |

## Top Issues

| Severity | Class         | Fixture            | Code                     | Decision            | Title                                                                               |
| -------- | ------------- | ------------------ | ------------------------ | ------------------- | ----------------------------------------------------------------------------------- |
| P0       | live-issue    | clawmetry          | sdk-export-missing       | core-compat-adapter | clawmetry: plugin SDK import aliases are missing from target package exports        |
| P0       | live-issue    | codex-app-server   | sdk-export-missing       | core-compat-adapter | codex-app-server: plugin SDK import aliases are missing from target package exports |
| P0       | live-issue    | honcho             | sdk-export-missing       | core-compat-adapter | honcho: plugin SDK import aliases are missing from target package exports           |
| P0       | live-issue    | hyperspell         | unknown-hook-name        | core-compat-adapter | hyperspell: fixture uses a hook missing from target OpenClaw                        |
| P0       | live-issue    | yuanbao            | sdk-export-missing       | core-compat-adapter | yuanbao: plugin SDK import aliases are missing from target package exports          |
| P1       | inspector-gap | a2a-gateway        | registration-capture-gap | inspector-follow-up | a2a-gateway: runtime registrations need capture before contract judgment            |
| P1       | compat-gap    | clawmetry          | missing-compat-record    | core-compat-adapter | clawmetry: compat-dependent behavior lacks registry coverage                        |
| P1       | inspector-gap | clawmetry          | registration-capture-gap | inspector-follow-up | clawmetry: runtime registrations need capture before contract judgment              |
| P1       | compat-gap    | codex-app-server   | missing-compat-record    | core-compat-adapter | codex-app-server: compat-dependent behavior lacks registry coverage                 |
| P1       | inspector-gap | codex-app-server   | registration-capture-gap | inspector-follow-up | codex-app-server: runtime registrations need capture before contract judgment       |
| P1       | inspector-gap | connectclaw        | registration-capture-gap | inspector-follow-up | connectclaw: runtime registrations need capture before contract judgment            |
| P1       | inspector-gap | dingtalk-connector | registration-capture-gap | inspector-follow-up | dingtalk-connector: runtime registrations need capture before contract judgment     |
| P1       | inspector-gap | honcho             | conversation-access-hook | inspector-follow-up | honcho: conversation-access hooks need privacy-boundary probes                      |
| P1       | compat-gap    | honcho             | missing-compat-record    | core-compat-adapter | honcho: compat-dependent behavior lacks registry coverage                           |
| P1       | inspector-gap | honcho             | registration-capture-gap | inspector-follow-up | honcho: runtime registrations need capture before contract judgment                 |
| P1       | inspector-gap | hyperspell         | conversation-access-hook | inspector-follow-up | hyperspell: conversation-access hooks need privacy-boundary probes                  |
| P1       | inspector-gap | hyperspell         | registration-capture-gap | inspector-follow-up | hyperspell: runtime registrations need capture before contract judgment             |
| P1       | inspector-gap | kitchen-sink       | before-tool-call-probe   | inspector-follow-up | kitchen-sink: before_tool_call needs terminal/block/approval probes                 |
| P1       | inspector-gap | kitchen-sink       | conversation-access-hook | inspector-follow-up | kitchen-sink: conversation-access hooks need privacy-boundary probes                |
| P1       | inspector-gap | kitchen-sink       | registration-capture-gap | inspector-follow-up | kitchen-sink: runtime registrations need capture before contract judgment           |

## Ref Regressions

_none_

## Policy Findings

| Action | ID                                                | Message                                                                    | Evidence                                                                                                                                                                                            |
| ------ | ------------------------------------------------- | -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| warn   | compatibility-report.live-p0-issues               | 5 live P0 issues tracked                                                   | clawmetry:sdk-export-missing:untracked, codex-app-server:sdk-export-missing:untracked, honcho:sdk-export-missing:untracked, hyperspell:unknown-hook-name:none, yuanbao:sdk-export-missing:untracked |
| warn   | execution-results.blocked.wecom.registerChannel.0 | allowed-blocked: captured registration requires includeChannelRuntime=true | .crabpot/results/wecom/cold-import-extension-wecom-plugins-wecom-index-js.synthetic.json, registerChannel, captured registration requires includeChannelRuntime=true, channel-runtime-harness       |
| warn   | execution-results.blocked.wecom.registerTool.2    | expected-warning: captured registration has no object descriptor           | .crabpot/results/wecom/cold-import-extension-wecom-plugins-wecom-index-js.synthetic.json, registerTool, captured registration has no object descriptor, tool-factory-descriptor                     |

## Profile Findings

_none_

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
| refDiff        | reports/crabpot-ref-diff.json            |
| profileDiff    | reports/crabpot-profile-diff.json        |
| ciPolicy       | reports/crabpot-ci-policy.json           |
