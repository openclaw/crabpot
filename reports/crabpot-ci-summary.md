# Crabpot CI Summary

Generated: deterministic
Mode: check
OpenClaw: openclaw@latest (2026.5.5, b1abf9d8ae44)
Status: PASS

## Counts

| Metric                      | Value                                                                                                                    |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Breakages                   | 0                                                                                                                        |
| Warnings                    | 126                                                                                                                      |
| Suggestions                 | 156                                                                                                                      |
| Issues                      | 282                                                                                                                      |
| P0 issues                   | 0                                                                                                                        |
| P1 issues                   | 15                                                                                                                       |
| Live issues                 | 0                                                                                                                        |
| Live P0 issues              | 0                                                                                                                        |
| Compat gaps                 | 2                                                                                                                        |
| Deprecation warnings        | 42                                                                                                                       |
| Inspector gaps              | 164                                                                                                                      |
| Upstream metadata           | 74                                                                                                                       |
| Ref diff failures           | 0                                                                                                                        |
| Ref diff warnings           | 0                                                                                                                        |
| Policy failures             | 0                                                                                                                        |
| Policy warnings             | 19                                                                                                                       |
| Profile failures            | 0                                                                                                                        |
| Profile warnings            | 2                                                                                                                        |
| Execution pass              | 12                                                                                                                       |
| Execution fail              | 0                                                                                                                        |
| Execution blocked           | 18                                                                                                                       |
| Windows portability risks   | 14                                                                                                                       |
| Container portability risks | 14                                                                                                                       |
| Jiti loader candidates      | 25                                                                                                                       |
| Import loop                 | p50 2290 ms / p95 2296 ms / plugin delta RSS 10.3 MB / plugin delta CPU 0 ms / OpenClaw import 89.9 ms / activate 0.3 ms |

## Top Issues

| Severity | Class         | Fixture            | Code                     | Decision            | Title                                                                        |
| -------- | ------------- | ------------------ | ------------------------ | ------------------- | ---------------------------------------------------------------------------- |
| P1       | compat-gap    | clawmetry          | sdk-export-missing       | core-compat-adapter | clawmetry: plugin SDK import aliases are missing from target package exports |
| P1       | inspector-gap | honcho             | conversation-access-hook | inspector-follow-up | honcho: conversation-access hooks need privacy-boundary probes               |
| P1       | compat-gap    | honcho             | sdk-export-missing       | core-compat-adapter | honcho: plugin SDK import aliases are missing from target package exports    |
| P1       | inspector-gap | kitchen-sink       | before-tool-call-probe   | inspector-follow-up | kitchen-sink: before_tool_call needs terminal/block/approval probes          |
| P1       | inspector-gap | kitchen-sink       | conversation-access-hook | inspector-follow-up | kitchen-sink: conversation-access hooks need privacy-boundary probes         |
| P1       | inspector-gap | llm-trace-phoenix  | conversation-access-hook | inspector-follow-up | llm-trace-phoenix: conversation-access hooks need privacy-boundary probes    |
| P1       | inspector-gap | memory-lancedb     | conversation-access-hook | inspector-follow-up | memory-lancedb: conversation-access hooks need privacy-boundary probes       |
| P1       | inspector-gap | memory-tencentdb   | conversation-access-hook | inspector-follow-up | memory-tencentdb: conversation-access hooks need privacy-boundary probes     |
| P1       | inspector-gap | memos-cloud        | conversation-access-hook | inspector-follow-up | memos-cloud: conversation-access hooks need privacy-boundary probes          |
| P1       | inspector-gap | nemoclaw           | before-tool-call-probe   | inspector-follow-up | nemoclaw: before_tool_call needs terminal/block/approval probes              |
| P1       | inspector-gap | openclaw-telemetry | before-tool-call-probe   | inspector-follow-up | openclaw-telemetry: before_tool_call needs terminal/block/approval probes    |
| P1       | inspector-gap | openclaw-telemetry | conversation-access-hook | inspector-follow-up | openclaw-telemetry: conversation-access hooks need privacy-boundary probes   |
| P1       | inspector-gap | opik-openclaw      | before-tool-call-probe   | inspector-follow-up | opik-openclaw: before_tool_call needs terminal/block/approval probes         |
| P1       | inspector-gap | opik-openclaw      | conversation-access-hook | inspector-follow-up | opik-openclaw: conversation-access hooks need privacy-boundary probes        |
| P1       | inspector-gap | wecom              | before-tool-call-probe   | inspector-follow-up | wecom: before_tool_call needs terminal/block/approval probes                 |

## Ref Regressions

_none_

## Policy Findings

| Action | ID                                                      | Message                                                               | Evidence                                                                                                                                                                                                       |
| ------ | ------------------------------------------------------- | --------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
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

| Action | ID               | Metric       | Baseline | Current | Message                                  |
| ------ | ---------------- | ------------ | -------- | ------- | ---------------------------------------- |
| warn   | profile.wall-p95 | p95WallMs    | 1273     | 2334    | p95WallMs regressed 83.3% over baseline  |
| warn   | profile.peak-rss | maxPeakRssMb | 65.1     | 447.1   | maxPeakRssMb regressed 382 over baseline |

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
