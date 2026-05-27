# Crabpot CI Summary

Generated: deterministic
Mode: track:beta
OpenClaw: openclaw@beta (2026.5.26-beta.2, 7d89681bb0b5)
Status: PASS

## Counts

| Metric                      | Value                                                                                                                    |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Breakages                   | 0                                                                                                                        |
| Warnings                    | 158                                                                                                                      |
| Suggestions                 | 151                                                                                                                      |
| Issues                      | 309                                                                                                                      |
| P0 issues                   | 1                                                                                                                        |
| P1 issues                   | 19                                                                                                                       |
| Live issues                 | 1                                                                                                                        |
| Live P0 issues              | 1                                                                                                                        |
| Compat gaps                 | 1                                                                                                                        |
| Deprecation warnings        | 42                                                                                                                       |
| Inspector gaps              | 160                                                                                                                      |
| Upstream metadata           | 105                                                                                                                      |
| Ref diff failures           | 0                                                                                                                        |
| Ref diff warnings           | 0                                                                                                                        |
| Policy failures             | 0                                                                                                                        |
| Policy warnings             | 144                                                                                                                      |
| Profile failures            | 0                                                                                                                        |
| Profile warnings            | 2                                                                                                                        |
| Execution pass              | 426                                                                                                                      |
| Execution fail              | 0                                                                                                                        |
| Execution blocked           | 142                                                                                                                      |
| Windows portability risks   | 16                                                                                                                       |
| Container portability risks | 16                                                                                                                       |
| Jiti loader candidates      | 22                                                                                                                       |
| Import loop                 | p50 1916 ms / p95 1945 ms / plugin delta RSS 3.6 MB / plugin delta CPU 0 ms / OpenClaw import 102.3 ms / activate 0.4 ms |

## Top Issues

| Severity | Class             | Fixture            | Code                       | Decision            | Title                                                                           |
| -------- | ----------------- | ------------------ | -------------------------- | ------------------- | ------------------------------------------------------------------------------- |
| P0       | live-issue        | kitchen-sink       | unknown-registration-name  | core-compat-adapter | kitchen-sink: fixture calls a registrar missing from target OpenClaw            |
| P1       | inspector-gap     | clawmetry          | conversation-access-hook   | inspector-follow-up | clawmetry: conversation-access hooks need privacy-boundary probes               |
| P1       | upstream-metadata | codex              | reserved-sdk-import        | plugin-upstream-fix | codex: plugin imports reserved bundled-plugin SDK compatibility subpaths        |
| P1       | inspector-gap     | dingtalk-doc       | before-tool-call-probe     | inspector-follow-up | dingtalk-doc: before_tool_call needs terminal/block/approval probes             |
| P1       | inspector-gap     | honcho             | conversation-access-hook   | inspector-follow-up | honcho: conversation-access hooks need privacy-boundary probes                  |
| P1       | inspector-gap     | kitchen-sink       | before-tool-call-probe     | inspector-follow-up | kitchen-sink: before_tool_call needs terminal/block/approval probes             |
| P1       | inspector-gap     | kitchen-sink       | conversation-access-hook   | inspector-follow-up | kitchen-sink: conversation-access hooks need privacy-boundary probes            |
| P1       | upstream-metadata | kitchen-sink       | manifest-unknown-contracts | plugin-upstream-fix | kitchen-sink: manifest declares unsupported contract keys                       |
| P1       | upstream-metadata | kitchen-sink       | reserved-sdk-import        | plugin-upstream-fix | kitchen-sink: plugin imports reserved bundled-plugin SDK compatibility subpaths |
| P1       | compat-gap        | kitchen-sink       | sdk-export-missing         | core-compat-adapter | kitchen-sink: plugin SDK import aliases are missing from target package exports |
| P1       | inspector-gap     | llm-trace-phoenix  | conversation-access-hook   | inspector-follow-up | llm-trace-phoenix: conversation-access hooks need privacy-boundary probes       |
| P1       | inspector-gap     | memory-lancedb     | conversation-access-hook   | inspector-follow-up | memory-lancedb: conversation-access hooks need privacy-boundary probes          |
| P1       | inspector-gap     | memory-tencentdb   | conversation-access-hook   | inspector-follow-up | memory-tencentdb: conversation-access hooks need privacy-boundary probes        |
| P1       | inspector-gap     | memos-cloud        | conversation-access-hook   | inspector-follow-up | memos-cloud: conversation-access hooks need privacy-boundary probes             |
| P1       | inspector-gap     | nemoclaw           | before-tool-call-probe     | inspector-follow-up | nemoclaw: before_tool_call needs terminal/block/approval probes                 |
| P1       | inspector-gap     | openclaw-telemetry | before-tool-call-probe     | inspector-follow-up | openclaw-telemetry: before_tool_call needs terminal/block/approval probes       |
| P1       | inspector-gap     | openclaw-telemetry | conversation-access-hook   | inspector-follow-up | openclaw-telemetry: conversation-access hooks need privacy-boundary probes      |
| P1       | inspector-gap     | opik-openclaw      | before-tool-call-probe     | inspector-follow-up | opik-openclaw: before_tool_call needs terminal/block/approval probes            |
| P1       | inspector-gap     | opik-openclaw      | conversation-access-hook   | inspector-follow-up | opik-openclaw: conversation-access hooks need privacy-boundary probes           |
| P1       | inspector-gap     | wecom              | before-tool-call-probe     | inspector-follow-up | wecom: before_tool_call needs terminal/block/approval probes                    |

## Ref Regressions

_none_

## Policy Findings

| Action | ID                                                      | Message                                                                                    | Evidence                                                                                                                                                                                                                                    |
| ------ | ------------------------------------------------------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| warn   | compatibility-report.live-p0-issues                     | 1 live P0 issues tracked                                                                   | kitchen-sink:unknown-registration-name:none                                                                                                                                                                                                 |
| warn   | execution-results.audit-findings                        | 574 package audit findings                                                                 | a2a-gateway:30, clawrouter:5, codex-app-server:159, ddingtalk:259, feishu:2, hasdata:6, lightclawbot:1, memory-tencentdb:1, mocrane-wecom:34, msteams:3, openclaw-weixin:4, opik-openclaw:9, qqbot:29, wecom:22, yuanbao:10                 |
| warn   | execution-results.blocked.a2a-gateway.registerService.6 | allowed-blocked: captured registration requires includeLifecycle=true                      | .crabpot/results/a2a-gateway/cold-import-extension-a2a-gateway-plugins-a2a-gateway-index-ts.synthetic.json, registerService, captured registration requires includeLifecycle=true, service-lifecycle-harness                                |
| warn   | execution-results.blocked.apify.registerCli.0           | allowed-blocked: captured registration has no supported callable probe                     | .crabpot/results/apify/cold-import-extension-apify-plugins-apify-dist-index-js.synthetic.json, registerCli, captured registration has no supported callable probe, generated-surface-registration-stubs                                     |
| warn   | execution-results.blocked.bluebubbles.registerChannel.0 | allowed-blocked: captured registration requires includeChannelRuntime=true                 | .crabpot/results/bluebubbles/cold-import-runtimeExtension-bluebubbles-plugins-bluebubbles-crabpot-package-dist-index-js.synthetic.json, registerChannel, captured registration requires includeChannelRuntime=true, channel-runtime-harness |
| warn   | execution-results.blocked.clawmetry.registerService.6   | allowed-blocked: captured registration requires includeLifecycle=true                      | .crabpot/results/clawmetry/cold-import-extension-clawmetry-plugins-clawmetry-clawhub-plugin-index-ts.synthetic.json, registerService, captured registration requires includeLifecycle=true, service-lifecycle-harness                       |
| warn   | execution-results.blocked.clawmetry.registerService.6   | allowed-blocked: captured registration requires includeLifecycle=true                      | .crabpot/results/clawmetry/cold-import-runtimeExtension-clawmetry-plugins-clawmetry-clawhub-plugin-dist-index-js.synthetic.json, registerService, captured registration requires includeLifecycle=true, service-lifecycle-harness           |
| warn   | execution-results.blocked.clawrouter.registerService.39 | allowed-blocked: captured registration requires includeLifecycle=true                      | .crabpot/results/clawrouter/cold-import-extension-clawrouter-plugins-clawrouter-dist-index-js.synthetic.json, registerService, captured registration requires includeLifecycle=true, service-lifecycle-harness                              |
| warn   | execution-results.blocked.clawrouter.registerTool.10    | allowed-blocked: captured tool requires live network access                                | .crabpot/results/clawrouter/cold-import-extension-clawrouter-plugins-clawrouter-dist-index-js.synthetic.json, registerTool, captured tool requires live network access, live-network-tool-probes                                            |
| warn   | execution-results.blocked.clawrouter.registerTool.11    | allowed-blocked: captured tool requires live network access                                | .crabpot/results/clawrouter/cold-import-extension-clawrouter-plugins-clawrouter-dist-index-js.synthetic.json, registerTool, captured tool requires live network access, live-network-tool-probes                                            |
| warn   | execution-results.blocked.clawrouter.registerTool.12    | allowed-blocked: captured tool requires live network access                                | .crabpot/results/clawrouter/cold-import-extension-clawrouter-plugins-clawrouter-dist-index-js.synthetic.json, registerTool, captured tool requires live network access, live-network-tool-probes                                            |
| warn   | execution-results.blocked.clawrouter.registerTool.13    | allowed-blocked: captured ClawRouter endpoint tool requires configured endpoint path input | .crabpot/results/clawrouter/cold-import-extension-clawrouter-plugins-clawrouter-dist-index-js.synthetic.json, registerTool, captured ClawRouter endpoint tool requires configured endpoint path input, clawrouter-endpoint-path-runtime     |
| warn   | execution-results.blocked.clawrouter.registerTool.14    | allowed-blocked: captured tool requires live network access                                | .crabpot/results/clawrouter/cold-import-extension-clawrouter-plugins-clawrouter-dist-index-js.synthetic.json, registerTool, captured tool requires live network access, live-network-tool-probes                                            |
| warn   | execution-results.blocked.clawrouter.registerTool.15    | allowed-blocked: captured tool requires live network access                                | .crabpot/results/clawrouter/cold-import-extension-clawrouter-plugins-clawrouter-dist-index-js.synthetic.json, registerTool, captured tool requires live network access, live-network-tool-probes                                            |
| warn   | execution-results.blocked.clawrouter.registerTool.16    | allowed-blocked: captured tool requires live network access                                | .crabpot/results/clawrouter/cold-import-extension-clawrouter-plugins-clawrouter-dist-index-js.synthetic.json, registerTool, captured tool requires live network access, live-network-tool-probes                                            |
| warn   | execution-results.blocked.clawrouter.registerTool.17    | allowed-blocked: captured tool requires live network access                                | .crabpot/results/clawrouter/cold-import-extension-clawrouter-plugins-clawrouter-dist-index-js.synthetic.json, registerTool, captured tool requires live network access, live-network-tool-probes                                            |
| warn   | execution-results.blocked.clawrouter.registerTool.18    | allowed-blocked: captured tool requires live network access                                | .crabpot/results/clawrouter/cold-import-extension-clawrouter-plugins-clawrouter-dist-index-js.synthetic.json, registerTool, captured tool requires live network access, live-network-tool-probes                                            |
| warn   | execution-results.blocked.clawrouter.registerTool.19    | allowed-blocked: captured tool requires live network access                                | .crabpot/results/clawrouter/cold-import-extension-clawrouter-plugins-clawrouter-dist-index-js.synthetic.json, registerTool, captured tool requires live network access, live-network-tool-probes                                            |
| warn   | execution-results.blocked.clawrouter.registerTool.20    | allowed-blocked: captured tool requires live network access                                | .crabpot/results/clawrouter/cold-import-extension-clawrouter-plugins-clawrouter-dist-index-js.synthetic.json, registerTool, captured tool requires live network access, live-network-tool-probes                                            |
| warn   | execution-results.blocked.clawrouter.registerTool.21    | allowed-blocked: captured tool requires live network access                                | .crabpot/results/clawrouter/cold-import-extension-clawrouter-plugins-clawrouter-dist-index-js.synthetic.json, registerTool, captured tool requires live network access, live-network-tool-probes                                            |

## Profile Findings

| Action | ID               | Metric       | Baseline | Current | Message                                                 |
| ------ | ---------------- | ------------ | -------- | ------- | ------------------------------------------------------- |
| warn   | profile.wall-p95 | p95WallMs    | 1273     | 2506    | p95WallMs regressed 96.9% over baseline                 |
| warn   | profile.peak-rss | maxPeakRssMb | 65.1     | 482.4   | maxPeakRssMb regressed 417.29999999999995 over baseline |

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
