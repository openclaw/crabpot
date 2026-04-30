# Crabpot CI Summary

Generated: deterministic
Mode: check
OpenClaw: openclaw@latest (2026.4.27, cbc2ba093146)
Status: PASS

## Counts

| Metric                      | Value                                                                   |
| --------------------------- | ----------------------------------------------------------------------- |
| Breakages                   | 0                                                                       |
| Warnings                    | 68                                                                      |
| Suggestions                 | 154                                                                     |
| Issues                      | 222                                                                     |
| P0 issues                   | 5                                                                       |
| P1 issues                   | 83                                                                      |
| Live issues                 | 5                                                                       |
| Live P0 issues              | 5                                                                       |
| Compat gaps                 | 49                                                                      |
| Deprecation warnings        | 27                                                                      |
| Inspector gaps              | 113                                                                     |
| Upstream metadata           | 28                                                                      |
| Ref diff failures           | 0                                                                       |
| Ref diff warnings           | 0                                                                       |
| Policy failures             | 0                                                                       |
| Policy warnings             | 20                                                                      |
| Profile failures            | 0                                                                       |
| Profile warnings            | 0                                                                       |
| Execution pass              | 12                                                                      |
| Execution fail              | 0                                                                       |
| Execution blocked           | 18                                                                      |
| Windows portability risks   | 14                                                                      |
| Container portability risks | 14                                                                      |
| Jiti loader candidates      | 21                                                                      |
| Import loop                 | p50 73 ms / p95 77 ms / plugin delta RSS 0.1 MB / plugin delta CPU 4 ms |

## Top Issues

| Severity | Class         | Fixture            | Code                     | Decision            | Title                                                                               |
| -------- | ------------- | ------------------ | ------------------------ | ------------------- | ----------------------------------------------------------------------------------- |
| P0       | live-issue    | clawmetry          | sdk-export-missing       | core-compat-adapter | clawmetry: plugin SDK import aliases are missing from target package exports        |
| P0       | live-issue    | codex-app-server   | sdk-export-missing       | core-compat-adapter | codex-app-server: plugin SDK import aliases are missing from target package exports |
| P0       | live-issue    | honcho             | sdk-export-missing       | core-compat-adapter | honcho: plugin SDK import aliases are missing from target package exports           |
| P0       | live-issue    | hyperspell         | unknown-hook-name        | core-compat-adapter | hyperspell: fixture uses a hook missing from target OpenClaw                        |
| P0       | live-issue    | yuanbao            | sdk-export-missing       | core-compat-adapter | yuanbao: plugin SDK import aliases are missing from target package exports          |
| P1       | compat-gap    | a2a-gateway        | missing-compat-record    | core-compat-adapter | a2a-gateway: compat-dependent behavior lacks registry coverage                      |
| P1       | inspector-gap | a2a-gateway        | registration-capture-gap | inspector-follow-up | a2a-gateway: runtime registrations need capture before contract judgment            |
| P1       | compat-gap    | agentchat          | missing-compat-record    | core-compat-adapter | agentchat: compat-dependent behavior lacks registry coverage                        |
| P1       | compat-gap    | clawmetry          | missing-compat-record    | core-compat-adapter | clawmetry: compat-dependent behavior lacks registry coverage                        |
| P1       | compat-gap    | clawmetry          | missing-compat-record    | core-compat-adapter | clawmetry: compat-dependent behavior lacks registry coverage                        |
| P1       | inspector-gap | clawmetry          | registration-capture-gap | inspector-follow-up | clawmetry: runtime registrations need capture before contract judgment              |
| P1       | compat-gap    | clawrouter         | missing-compat-record    | core-compat-adapter | clawrouter: compat-dependent behavior lacks registry coverage                       |
| P1       | inspector-gap | clawrouter         | registration-capture-gap | inspector-follow-up | clawrouter: runtime registrations need capture before contract judgment             |
| P1       | compat-gap    | codex-app-server   | missing-compat-record    | core-compat-adapter | codex-app-server: compat-dependent behavior lacks registry coverage                 |
| P1       | compat-gap    | codex-app-server   | missing-compat-record    | core-compat-adapter | codex-app-server: compat-dependent behavior lacks registry coverage                 |
| P1       | inspector-gap | codex-app-server   | registration-capture-gap | inspector-follow-up | codex-app-server: runtime registrations need capture before contract judgment       |
| P1       | compat-gap    | connectclaw        | missing-compat-record    | core-compat-adapter | connectclaw: compat-dependent behavior lacks registry coverage                      |
| P1       | inspector-gap | connectclaw        | registration-capture-gap | inspector-follow-up | connectclaw: runtime registrations need capture before contract judgment            |
| P1       | compat-gap    | ddingtalk          | missing-compat-record    | core-compat-adapter | ddingtalk: compat-dependent behavior lacks registry coverage                        |
| P1       | compat-gap    | dingtalk-connector | missing-compat-record    | core-compat-adapter | dingtalk-connector: compat-dependent behavior lacks registry coverage               |

## Ref Regressions

_none_

## Policy Findings

| Action | ID                                                      | Message                                                               | Evidence                                                                                                                                                                                                       |
| ------ | ------------------------------------------------------- | --------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| warn   | compatibility-report.live-p0-issues                     | 5 live P0 issues tracked                                              | clawmetry:sdk-export-missing:untracked, codex-app-server:sdk-export-missing:untracked, honcho:sdk-export-missing:untracked, hyperspell:unknown-hook-name:none, yuanbao:sdk-export-missing:untracked            |
| warn   | execution-results.audit-findings                        | 12 package audit findings                                             | clawrouter:12                                                                                                                                                                                                  |
| warn   | execution-results.blocked.clawrouter.registerService.29 | allowed-blocked: captured registration requires includeLifecycle=true | .crabpot/results/clawrouter/cold-import-extension-clawrouter-plugins-clawrouter-dist-index-js.synthetic.json, registerService, captured registration requires includeLifecycle=true, service-lifecycle-harness |
| warn   | execution-results.blocked.clawrouter.registerTool.10    | allowed-blocked: captured tool requires live network access           | .crabpot/results/clawrouter/cold-import-extension-clawrouter-plugins-clawrouter-dist-index-js.synthetic.json, registerTool, captured tool requires live network access, live-network-tool-probes               |
| warn   | execution-results.blocked.clawrouter.registerTool.11    | allowed-blocked: captured tool requires live network access           | .crabpot/results/clawrouter/cold-import-extension-clawrouter-plugins-clawrouter-dist-index-js.synthetic.json, registerTool, captured tool requires live network access, live-network-tool-probes               |
| warn   | execution-results.blocked.clawrouter.registerTool.12    | allowed-blocked: captured tool requires live network access           | .crabpot/results/clawrouter/cold-import-extension-clawrouter-plugins-clawrouter-dist-index-js.synthetic.json, registerTool, captured tool requires live network access, live-network-tool-probes               |
| warn   | execution-results.blocked.clawrouter.registerTool.13    | allowed-blocked: captured tool requires live network access           | .crabpot/results/clawrouter/cold-import-extension-clawrouter-plugins-clawrouter-dist-index-js.synthetic.json, registerTool, captured tool requires live network access, live-network-tool-probes               |
| warn   | execution-results.blocked.clawrouter.registerTool.14    | allowed-blocked: captured tool requires live network access           | .crabpot/results/clawrouter/cold-import-extension-clawrouter-plugins-clawrouter-dist-index-js.synthetic.json, registerTool, captured tool requires live network access, live-network-tool-probes               |
| warn   | execution-results.blocked.clawrouter.registerTool.15    | allowed-blocked: captured tool requires live network access           | .crabpot/results/clawrouter/cold-import-extension-clawrouter-plugins-clawrouter-dist-index-js.synthetic.json, registerTool, captured tool requires live network access, live-network-tool-probes               |
| warn   | execution-results.blocked.clawrouter.registerTool.16    | allowed-blocked: captured tool requires live network access           | .crabpot/results/clawrouter/cold-import-extension-clawrouter-plugins-clawrouter-dist-index-js.synthetic.json, registerTool, captured tool requires live network access, live-network-tool-probes               |
| warn   | execution-results.blocked.clawrouter.registerTool.17    | allowed-blocked: captured tool requires live network access           | .crabpot/results/clawrouter/cold-import-extension-clawrouter-plugins-clawrouter-dist-index-js.synthetic.json, registerTool, captured tool requires live network access, live-network-tool-probes               |
| warn   | execution-results.blocked.clawrouter.registerTool.18    | allowed-blocked: captured tool requires live network access           | .crabpot/results/clawrouter/cold-import-extension-clawrouter-plugins-clawrouter-dist-index-js.synthetic.json, registerTool, captured tool requires live network access, live-network-tool-probes               |
| warn   | execution-results.blocked.clawrouter.registerTool.19    | allowed-blocked: captured tool requires live network access           | .crabpot/results/clawrouter/cold-import-extension-clawrouter-plugins-clawrouter-dist-index-js.synthetic.json, registerTool, captured tool requires live network access, live-network-tool-probes               |
| warn   | execution-results.blocked.clawrouter.registerTool.20    | allowed-blocked: captured tool requires live network access           | .crabpot/results/clawrouter/cold-import-extension-clawrouter-plugins-clawrouter-dist-index-js.synthetic.json, registerTool, captured tool requires live network access, live-network-tool-probes               |
| warn   | execution-results.blocked.clawrouter.registerTool.21    | allowed-blocked: captured tool requires live network access           | .crabpot/results/clawrouter/cold-import-extension-clawrouter-plugins-clawrouter-dist-index-js.synthetic.json, registerTool, captured tool requires live network access, live-network-tool-probes               |
| warn   | execution-results.blocked.clawrouter.registerTool.5     | allowed-blocked: captured tool requires live network access           | .crabpot/results/clawrouter/cold-import-extension-clawrouter-plugins-clawrouter-dist-index-js.synthetic.json, registerTool, captured tool requires live network access, live-network-tool-probes               |
| warn   | execution-results.blocked.clawrouter.registerTool.6     | allowed-blocked: captured tool requires live network access           | .crabpot/results/clawrouter/cold-import-extension-clawrouter-plugins-clawrouter-dist-index-js.synthetic.json, registerTool, captured tool requires live network access, live-network-tool-probes               |
| warn   | execution-results.blocked.clawrouter.registerTool.7     | allowed-blocked: captured tool requires live network access           | .crabpot/results/clawrouter/cold-import-extension-clawrouter-plugins-clawrouter-dist-index-js.synthetic.json, registerTool, captured tool requires live network access, live-network-tool-probes               |
| warn   | execution-results.blocked.clawrouter.registerTool.8     | allowed-blocked: captured tool requires live network access           | .crabpot/results/clawrouter/cold-import-extension-clawrouter-plugins-clawrouter-dist-index-js.synthetic.json, registerTool, captured tool requires live network access, live-network-tool-probes               |
| warn   | execution-results.blocked.clawrouter.registerTool.9     | allowed-blocked: captured tool requires live network access           | .crabpot/results/clawrouter/cold-import-extension-clawrouter-plugins-clawrouter-dist-index-js.synthetic.json, registerTool, captured tool requires live network access, live-network-tool-probes               |

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
