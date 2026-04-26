# Crabpot CI Summary

Generated: deterministic
Mode: local
OpenClaw: ../openclaw
Status: PASS

## Counts

| Metric            | Value |
| ----------------- | ----- |
| Breakages         | 0     |
| Warnings          | 20    |
| Suggestions       | 44    |
| Issues            | 64    |
| P1 issues         | 13    |
| Ref diff failures | 0     |
| Ref diff warnings | 0     |
| Policy failures   | 0     |
| Policy warnings   | 2     |
| Profile failures  | 0     |
| Profile warnings  | 0     |
| Execution pass    | 6     |
| Execution fail    | 0     |
| Execution blocked | 2     |

## Top Issues

| Severity | Fixture           | Code                     | Decision            | Title                                                                               |
| -------- | ----------------- | ------------------------ | ------------------- | ----------------------------------------------------------------------------------- |
| P1       | a2a-gateway       | registration-capture-gap | inspector-follow-up | a2a-gateway: runtime registrations need capture before contract judgment            |
| P1       | clawmetry         | registration-capture-gap | inspector-follow-up | clawmetry: runtime registrations need capture before contract judgment              |
| P1       | codex-app-server  | missing-compat-record    | core-compat-adapter | codex-app-server: compat-dependent behavior lacks registry coverage                 |
| P1       | codex-app-server  | registration-capture-gap | inspector-follow-up | codex-app-server: runtime registrations need capture before contract judgment       |
| P1       | codex-app-server  | sdk-export-missing       | core-compat-adapter | codex-app-server: plugin SDK import aliases are missing from target package exports |
| P1       | connectclaw       | registration-capture-gap | inspector-follow-up | connectclaw: runtime registrations need capture before contract judgment            |
| P1       | llm-trace-phoenix | conversation-access-hook | inspector-follow-up | llm-trace-phoenix: conversation-access hooks need privacy-boundary probes           |
| P1       | mcp-adapter       | registration-capture-gap | inspector-follow-up | mcp-adapter: runtime registrations need capture before contract judgment            |
| P1       | opik-openclaw     | before-tool-call-probe   | inspector-follow-up | opik-openclaw: before_tool_call needs terminal/block/approval probes                |
| P1       | opik-openclaw     | conversation-access-hook | inspector-follow-up | opik-openclaw: conversation-access hooks need privacy-boundary probes               |
| P1       | opik-openclaw     | registration-capture-gap | inspector-follow-up | opik-openclaw: runtime registrations need capture before contract judgment          |
| P1       | wecom             | before-tool-call-probe   | inspector-follow-up | wecom: before_tool_call needs terminal/block/approval probes                        |
| P1       | wecom             | registration-capture-gap | inspector-follow-up | wecom: runtime registrations need capture before contract judgment                  |

## Ref Regressions

_none_

## Policy Findings

| Action | ID                                                | Message                                                                    | Evidence                                                                                                                                                                                      |
| ------ | ------------------------------------------------- | -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| warn   | execution-results.blocked.wecom.registerChannel.0 | allowed-blocked: captured registration requires includeChannelRuntime=true | .crabpot/results/wecom/cold-import-extension-wecom-plugins-wecom-index-js.synthetic.json, registerChannel, captured registration requires includeChannelRuntime=true, channel-runtime-harness |
| warn   | execution-results.blocked.wecom.registerTool.2    | expected-warning: captured registration has no object descriptor           | .crabpot/results/wecom/cold-import-extension-wecom-plugins-wecom-index-js.synthetic.json, registerTool, captured registration has no object descriptor, tool-factory-descriptor               |

## Profile Findings

_none_

## Artifacts

| Artifact       | Path                                   |
| -------------- | -------------------------------------- |
| compatibility  | reports/crabpot-report.json            |
| capture        | reports/crabpot-capture.json           |
| synthetic      | reports/crabpot-synthetic-probes.json  |
| coldImport     | reports/crabpot-cold-import.json       |
| workspace      | reports/crabpot-workspace-plan.json    |
| execution      | reports/crabpot-execution-results.json |
| runtimeProfile | reports/crabpot-runtime-profile.json   |
| refDiff        | reports/crabpot-ref-diff.json          |
| profileDiff    | reports/crabpot-profile-diff.json      |
| ciPolicy       | reports/crabpot-ci-policy.json         |
