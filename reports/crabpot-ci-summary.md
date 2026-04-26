# Crabpot CI Summary

Generated: deterministic
Mode: local
OpenClaw: -
Status: PASS

## Counts

| Metric                      | Value                                             |
| --------------------------- | ------------------------------------------------- |
| Breakages                   | 0                                                 |
| Warnings                    | 51                                                |
| Suggestions                 | 92                                                |
| Issues                      | 143                                               |
| P0 issues                   | 2                                                 |
| P1 issues                   | 26                                                |
| Live issues                 | 2                                                 |
| Live P0 issues              | 2                                                 |
| Compat gaps                 | 1                                                 |
| Deprecation warnings        | 21                                                |
| Inspector gaps              | 97                                                |
| Upstream metadata           | 22                                                |
| Ref diff failures           | 0                                                 |
| Ref diff warnings           | 0                                                 |
| Policy failures             | 0                                                 |
| Policy warnings             | 3                                                 |
| Profile failures            | 0                                                 |
| Profile warnings            | 0                                                 |
| Execution pass              | 6                                                 |
| Execution fail              | 0                                                 |
| Execution blocked           | 2                                                 |
| Windows portability risks   | 153                                               |
| Container portability risks | 47                                                |
| Jiti loader candidates      | 18                                                |
| Import loop                 | p50 623 ms / p95 920 ms / max RSS 0 MB / CPU 0 ms |

## Top Issues

| Severity | Class         | Fixture           | Code                     | Decision            | Title                                                                               |
| -------- | ------------- | ----------------- | ------------------------ | ------------------- | ----------------------------------------------------------------------------------- |
| P0       | live-issue    | codex-app-server  | sdk-export-missing       | core-compat-adapter | codex-app-server: plugin SDK import aliases are missing from target package exports |
| P0       | live-issue    | hyperspell        | unknown-hook-name        | core-compat-adapter | hyperspell: fixture uses a hook missing from target OpenClaw                        |
| P1       | inspector-gap | a2a-gateway       | registration-capture-gap | inspector-follow-up | a2a-gateway: runtime registrations need capture before contract judgment            |
| P1       | inspector-gap | clawmetry         | registration-capture-gap | inspector-follow-up | clawmetry: runtime registrations need capture before contract judgment              |
| P1       | compat-gap    | codex-app-server  | missing-compat-record    | core-compat-adapter | codex-app-server: compat-dependent behavior lacks registry coverage                 |
| P1       | inspector-gap | codex-app-server  | registration-capture-gap | inspector-follow-up | codex-app-server: runtime registrations need capture before contract judgment       |
| P1       | inspector-gap | connectclaw       | registration-capture-gap | inspector-follow-up | connectclaw: runtime registrations need capture before contract judgment            |
| P1       | inspector-gap | honcho            | conversation-access-hook | inspector-follow-up | honcho: conversation-access hooks need privacy-boundary probes                      |
| P1       | inspector-gap | honcho            | registration-capture-gap | inspector-follow-up | honcho: runtime registrations need capture before contract judgment                 |
| P1       | inspector-gap | hyperspell        | conversation-access-hook | inspector-follow-up | hyperspell: conversation-access hooks need privacy-boundary probes                  |
| P1       | inspector-gap | hyperspell        | registration-capture-gap | inspector-follow-up | hyperspell: runtime registrations need capture before contract judgment             |
| P1       | inspector-gap | lightclawbot      | registration-capture-gap | inspector-follow-up | lightclawbot: runtime registrations need capture before contract judgment           |
| P1       | inspector-gap | llm-trace-phoenix | conversation-access-hook | inspector-follow-up | llm-trace-phoenix: conversation-access hooks need privacy-boundary probes           |
| P1       | inspector-gap | lossless-claw     | registration-capture-gap | inspector-follow-up | lossless-claw: runtime registrations need capture before contract judgment          |
| P1       | inspector-gap | mcp-adapter       | registration-capture-gap | inspector-follow-up | mcp-adapter: runtime registrations need capture before contract judgment            |
| P1       | inspector-gap | memory-tencentdb  | conversation-access-hook | inspector-follow-up | memory-tencentdb: conversation-access hooks need privacy-boundary probes            |
| P1       | inspector-gap | memos-cloud       | conversation-access-hook | inspector-follow-up | memos-cloud: conversation-access hooks need privacy-boundary probes                 |
| P1       | inspector-gap | memos-cloud       | registration-capture-gap | inspector-follow-up | memos-cloud: runtime registrations need capture before contract judgment            |
| P1       | inspector-gap | mocrane-wecom     | registration-capture-gap | inspector-follow-up | mocrane-wecom: runtime registrations need capture before contract judgment          |
| P1       | inspector-gap | openclaw-weixin   | registration-capture-gap | inspector-follow-up | openclaw-weixin: runtime registrations need capture before contract judgment        |

## Ref Regressions

_none_

## Policy Findings

| Action | ID                                                | Message                                                                    | Evidence                                                                                                                                                                                      |
| ------ | ------------------------------------------------- | -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| warn   | compatibility-report.live-p0-issues               | 2 live P0 issues tracked                                                   | codex-app-server:sdk-export-missing:untracked, hyperspell:unknown-hook-name:none                                                                                                              |
| warn   | execution-results.blocked.wecom.registerChannel.0 | allowed-blocked: captured registration requires includeChannelRuntime=true | .crabpot/results/wecom/cold-import-extension-wecom-plugins-wecom-index-js.synthetic.json, registerChannel, captured registration requires includeChannelRuntime=true, channel-runtime-harness |
| warn   | execution-results.blocked.wecom.registerTool.2    | expected-warning: captured registration has no object descriptor           | .crabpot/results/wecom/cold-import-extension-wecom-plugins-wecom-index-js.synthetic.json, registerTool, captured registration has no object descriptor, tool-factory-descriptor               |

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
