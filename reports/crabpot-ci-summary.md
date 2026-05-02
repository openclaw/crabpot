# Crabpot CI Summary

Generated: deterministic
Mode: check
OpenClaw: openclaw@latest (2026.4.29, a448042c2edd)
Status: PASS

## Counts

| Metric                      | Value                                                                                                                      |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| Breakages                   | 0                                                                                                                          |
| Warnings                    | 69                                                                                                                         |
| Suggestions                 | 112                                                                                                                        |
| Issues                      | 181                                                                                                                        |
| P0 issues                   | 3                                                                                                                          |
| P1 issues                   | 39                                                                                                                         |
| Live issues                 | 3                                                                                                                          |
| Live P0 issues              | 3                                                                                                                          |
| Compat gaps                 | 3                                                                                                                          |
| Deprecation warnings        | 27                                                                                                                         |
| Inspector gaps              | 116                                                                                                                        |
| Upstream metadata           | 32                                                                                                                         |
| Ref diff failures           | 0                                                                                                                          |
| Ref diff warnings           | 0                                                                                                                          |
| Policy failures             | 0                                                                                                                          |
| Policy warnings             | 20                                                                                                                         |
| Profile failures            | 0                                                                                                                          |
| Profile warnings            | 1                                                                                                                          |
| Execution pass              | 12                                                                                                                         |
| Execution fail              | 0                                                                                                                          |
| Execution blocked           | 18                                                                                                                         |
| Windows portability risks   | 14                                                                                                                         |
| Container portability risks | 14                                                                                                                         |
| Jiti loader candidates      | 21                                                                                                                         |
| Import loop                 | p50 1611 ms / p95 1637 ms / plugin delta RSS 10.7 MB / plugin delta CPU 102 ms / OpenClaw import 97.2 ms / activate 0.3 ms |

## Top Issues

| Severity | Class             | Fixture            | Code                                | Decision            | Title                                                                           |
| -------- | ----------------- | ------------------ | ----------------------------------- | ------------------- | ------------------------------------------------------------------------------- |
| P0       | live-issue        | clawmetry          | sdk-export-missing                  | core-compat-adapter | clawmetry: plugin SDK import aliases are missing from target package exports    |
| P0       | live-issue        | honcho             | sdk-export-missing                  | core-compat-adapter | honcho: plugin SDK import aliases are missing from target package exports       |
| P0       | live-issue        | yuanbao            | sdk-export-missing                  | core-compat-adapter | yuanbao: plugin SDK import aliases are missing from target package exports      |
| P1       | inspector-gap     | a2a-gateway        | registration-capture-gap            | inspector-follow-up | a2a-gateway: runtime registrations need capture before contract judgment        |
| P1       | compat-gap        | clawmetry          | missing-compat-record               | core-compat-adapter | clawmetry: compat-dependent behavior lacks registry coverage                    |
| P1       | upstream-metadata | clawmetry          | package-npm-pack-entrypoint-missing | plugin-upstream-fix | clawmetry: advertised npm artifact is missing OpenClaw entrypoints              |
| P1       | inspector-gap     | clawmetry          | registration-capture-gap            | inspector-follow-up | clawmetry: runtime registrations need capture before contract judgment          |
| P1       | inspector-gap     | clawrouter         | registration-capture-gap            | inspector-follow-up | clawrouter: runtime registrations need capture before contract judgment         |
| P1       | inspector-gap     | codex-app-server   | registration-capture-gap            | inspector-follow-up | codex-app-server: runtime registrations need capture before contract judgment   |
| P1       | inspector-gap     | connectclaw        | registration-capture-gap            | inspector-follow-up | connectclaw: runtime registrations need capture before contract judgment        |
| P1       | inspector-gap     | dingtalk-connector | registration-capture-gap            | inspector-follow-up | dingtalk-connector: runtime registrations need capture before contract judgment |
| P1       | inspector-gap     | honcho             | conversation-access-hook            | inspector-follow-up | honcho: conversation-access hooks need privacy-boundary probes                  |
| P1       | compat-gap        | honcho             | missing-compat-record               | core-compat-adapter | honcho: compat-dependent behavior lacks registry coverage                       |
| P1       | inspector-gap     | honcho             | registration-capture-gap            | inspector-follow-up | honcho: runtime registrations need capture before contract judgment             |
| P1       | inspector-gap     | hyperspell         | registration-capture-gap            | inspector-follow-up | hyperspell: runtime registrations need capture before contract judgment         |
| P1       | inspector-gap     | kitchen-sink       | before-tool-call-probe              | inspector-follow-up | kitchen-sink: before_tool_call needs terminal/block/approval probes             |
| P1       | inspector-gap     | kitchen-sink       | conversation-access-hook            | inspector-follow-up | kitchen-sink: conversation-access hooks need privacy-boundary probes            |
| P1       | inspector-gap     | kitchen-sink       | registration-capture-gap            | inspector-follow-up | kitchen-sink: runtime registrations need capture before contract judgment       |
| P1       | inspector-gap     | lightclawbot       | registration-capture-gap            | inspector-follow-up | lightclawbot: runtime registrations need capture before contract judgment       |
| P1       | inspector-gap     | llm-trace-phoenix  | conversation-access-hook            | inspector-follow-up | llm-trace-phoenix: conversation-access hooks need privacy-boundary probes       |

## Ref Regressions

_none_

## Policy Findings

| Action | ID                                                      | Message                                                               | Evidence                                                                                                                                                                                                       |
| ------ | ------------------------------------------------------- | --------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| warn   | compatibility-report.live-p0-issues                     | 3 live P0 issues tracked                                              | clawmetry:sdk-export-missing:untracked, honcho:sdk-export-missing:untracked, yuanbao:sdk-export-missing:untracked                                                                                              |
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

| Action | ID               | Metric       | Baseline | Current | Message                                 |
| ------ | ---------------- | ------------ | -------- | ------- | --------------------------------------- |
| warn   | profile.peak-rss | maxPeakRssMb | 65.1     | 119.1   | maxPeakRssMb regressed 54 over baseline |

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
