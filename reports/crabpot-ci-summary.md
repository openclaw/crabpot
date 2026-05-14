# Crabpot CI Summary

Generated: deterministic
Mode: track:latest
OpenClaw: openclaw@latest (2026.5.7, eeef4864494f)
Status: PASS

## Counts

| Metric                      | Value                                                                                                                 |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Breakages                   | 0                                                                                                                     |
| Warnings                    | 123                                                                                                                   |
| Suggestions                 | 147                                                                                                                   |
| Issues                      | 270                                                                                                                   |
| P0 issues                   | 0                                                                                                                     |
| P1 issues                   | 15                                                                                                                    |
| Live issues                 | 0                                                                                                                     |
| Live P0 issues              | 0                                                                                                                     |
| Compat gaps                 | 1                                                                                                                     |
| Deprecation warnings        | 41                                                                                                                    |
| Inspector gaps              | 156                                                                                                                   |
| Upstream metadata           | 72                                                                                                                    |
| Ref diff failures           | 0                                                                                                                     |
| Ref diff warnings           | 0                                                                                                                     |
| Policy failures             | 0                                                                                                                     |
| Policy warnings             | 307                                                                                                                   |
| Profile failures            | 0                                                                                                                     |
| Profile warnings            | 2                                                                                                                     |
| Execution pass              | 120                                                                                                                   |
| Execution fail              | 0                                                                                                                     |
| Execution blocked           | 306                                                                                                                   |
| Windows portability risks   | 14                                                                                                                    |
| Container portability risks | 14                                                                                                                    |
| Jiti loader candidates      | 22                                                                                                                    |
| Import loop                 | p50 2342 ms / p95 2430 ms / plugin delta RSS 0 MB / plugin delta CPU 0 ms / OpenClaw import 80.4 ms / activate 0.3 ms |

## Top Issues

| Severity | Class         | Fixture            | Code                     | Decision            | Title                                                                      |
| -------- | ------------- | ------------------ | ------------------------ | ------------------- | -------------------------------------------------------------------------- |
| P1       | inspector-gap | clawmetry          | conversation-access-hook | inspector-follow-up | clawmetry: conversation-access hooks need privacy-boundary probes          |
| P1       | inspector-gap | honcho             | conversation-access-hook | inspector-follow-up | honcho: conversation-access hooks need privacy-boundary probes             |
| P1       | compat-gap    | honcho             | sdk-export-missing       | core-compat-adapter | honcho: plugin SDK import aliases are missing from target package exports  |
| P1       | inspector-gap | kitchen-sink       | before-tool-call-probe   | inspector-follow-up | kitchen-sink: before_tool_call needs terminal/block/approval probes        |
| P1       | inspector-gap | kitchen-sink       | conversation-access-hook | inspector-follow-up | kitchen-sink: conversation-access hooks need privacy-boundary probes       |
| P1       | inspector-gap | llm-trace-phoenix  | conversation-access-hook | inspector-follow-up | llm-trace-phoenix: conversation-access hooks need privacy-boundary probes  |
| P1       | inspector-gap | memory-lancedb     | conversation-access-hook | inspector-follow-up | memory-lancedb: conversation-access hooks need privacy-boundary probes     |
| P1       | inspector-gap | memory-tencentdb   | conversation-access-hook | inspector-follow-up | memory-tencentdb: conversation-access hooks need privacy-boundary probes   |
| P1       | inspector-gap | memos-cloud        | conversation-access-hook | inspector-follow-up | memos-cloud: conversation-access hooks need privacy-boundary probes        |
| P1       | inspector-gap | nemoclaw           | before-tool-call-probe   | inspector-follow-up | nemoclaw: before_tool_call needs terminal/block/approval probes            |
| P1       | inspector-gap | openclaw-telemetry | before-tool-call-probe   | inspector-follow-up | openclaw-telemetry: before_tool_call needs terminal/block/approval probes  |
| P1       | inspector-gap | openclaw-telemetry | conversation-access-hook | inspector-follow-up | openclaw-telemetry: conversation-access hooks need privacy-boundary probes |
| P1       | inspector-gap | opik-openclaw      | before-tool-call-probe   | inspector-follow-up | opik-openclaw: before_tool_call needs terminal/block/approval probes       |
| P1       | inspector-gap | opik-openclaw      | conversation-access-hook | inspector-follow-up | opik-openclaw: conversation-access hooks need privacy-boundary probes      |
| P1       | inspector-gap | wecom              | before-tool-call-probe   | inspector-follow-up | wecom: before_tool_call needs terminal/block/approval probes               |

## Ref Regressions

_none_

## Policy Findings

| Action | ID                                                            | Message                                                                    | Evidence                                                                                                                                                                                                                                    |
| ------ | ------------------------------------------------------------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| warn   | execution-results.audit-findings                              | 578 package audit findings                                                 | a2a-gateway:26, apify:28, codex-app-server:153, ddingtalk:254, diagnostics-otel:15, feishu:2, hasdata:5, mocrane-wecom:32, openclaw-weixin:2, opik-openclaw:5, qqbot:28, wecom:19, yuanbao:9                                                |
| warn   | execution-results.blocked.a2a-gateway.registerGatewayMethod.0 | allowed-blocked: captured registration has no supported callable probe     | .crabpot/results/a2a-gateway/cold-import-extension-a2a-gateway-plugins-a2a-gateway-index-ts.synthetic.json, registerGatewayMethod, captured registration has no supported callable probe, generated-surface-registration-stubs              |
| warn   | execution-results.blocked.a2a-gateway.registerGatewayMethod.1 | allowed-blocked: captured registration has no supported callable probe     | .crabpot/results/a2a-gateway/cold-import-extension-a2a-gateway-plugins-a2a-gateway-index-ts.synthetic.json, registerGatewayMethod, captured registration has no supported callable probe, generated-surface-registration-stubs              |
| warn   | execution-results.blocked.a2a-gateway.registerGatewayMethod.2 | allowed-blocked: captured registration has no supported callable probe     | .crabpot/results/a2a-gateway/cold-import-extension-a2a-gateway-plugins-a2a-gateway-index-ts.synthetic.json, registerGatewayMethod, captured registration has no supported callable probe, generated-surface-registration-stubs              |
| warn   | execution-results.blocked.a2a-gateway.registerGatewayMethod.3 | allowed-blocked: captured registration has no supported callable probe     | .crabpot/results/a2a-gateway/cold-import-extension-a2a-gateway-plugins-a2a-gateway-index-ts.synthetic.json, registerGatewayMethod, captured registration has no supported callable probe, generated-surface-registration-stubs              |
| warn   | execution-results.blocked.a2a-gateway.registerGatewayMethod.4 | allowed-blocked: captured registration has no supported callable probe     | .crabpot/results/a2a-gateway/cold-import-extension-a2a-gateway-plugins-a2a-gateway-index-ts.synthetic.json, registerGatewayMethod, captured registration has no supported callable probe, generated-surface-registration-stubs              |
| warn   | execution-results.blocked.a2a-gateway.registerService.6       | allowed-blocked: captured registration requires includeLifecycle=true      | .crabpot/results/a2a-gateway/cold-import-extension-a2a-gateway-plugins-a2a-gateway-index-ts.synthetic.json, registerService, captured registration requires includeLifecycle=true, service-lifecycle-harness                                |
| warn   | execution-results.blocked.a2a-gateway.registerTool.5          | allowed-blocked: captured registration has no supported callable probe     | .crabpot/results/a2a-gateway/cold-import-extension-a2a-gateway-plugins-a2a-gateway-index-ts.synthetic.json, registerTool, captured registration has no supported callable probe, generated-surface-registration-stubs                       |
| warn   | execution-results.blocked.apify.registerCli.0                 | allowed-blocked: captured registration has no supported callable probe     | .crabpot/results/apify/cold-import-extension-apify-plugins-apify-src-index-ts.synthetic.json, registerCli, captured registration has no supported callable probe, generated-surface-registration-stubs                                      |
| warn   | execution-results.blocked.bluebubbles.registerChannel.0       | allowed-blocked: captured registration requires includeChannelRuntime=true | .crabpot/results/bluebubbles/cold-import-runtimeExtension-bluebubbles-plugins-bluebubbles-crabpot-package-dist-index-js.synthetic.json, registerChannel, captured registration requires includeChannelRuntime=true, channel-runtime-harness |
| warn   | execution-results.blocked.clawmetry.after_tool_call.0         | allowed-blocked: captured hook has no callable handler                     | .crabpot/results/clawmetry/cold-import-extension-clawmetry-plugins-clawmetry-clawhub-plugin-index-ts.synthetic.json, after_tool_call, captured hook has no callable handler, generated-surface-hook-stubs                                   |
| warn   | execution-results.blocked.clawmetry.after_tool_call.0         | allowed-blocked: captured hook has no callable handler                     | .crabpot/results/clawmetry/cold-import-runtimeExtension-clawmetry-plugins-clawmetry-clawhub-plugin-dist-index-js.synthetic.json, after_tool_call, captured hook has no callable handler, generated-surface-hook-stubs                       |
| warn   | execution-results.blocked.clawmetry.llm_output.1              | allowed-blocked: captured hook has no callable handler                     | .crabpot/results/clawmetry/cold-import-extension-clawmetry-plugins-clawmetry-clawhub-plugin-index-ts.synthetic.json, llm_output, captured hook has no callable handler, generated-surface-hook-stubs                                        |
| warn   | execution-results.blocked.clawmetry.llm_output.1              | allowed-blocked: captured hook has no callable handler                     | .crabpot/results/clawmetry/cold-import-runtimeExtension-clawmetry-plugins-clawmetry-clawhub-plugin-dist-index-js.synthetic.json, llm_output, captured hook has no callable handler, generated-surface-hook-stubs                            |
| warn   | execution-results.blocked.clawmetry.message_received.4        | allowed-blocked: captured hook has no callable handler                     | .crabpot/results/clawmetry/cold-import-extension-clawmetry-plugins-clawmetry-clawhub-plugin-index-ts.synthetic.json, message_received, captured hook has no callable handler, generated-surface-hook-stubs                                  |
| warn   | execution-results.blocked.clawmetry.message_received.4        | allowed-blocked: captured hook has no callable handler                     | .crabpot/results/clawmetry/cold-import-runtimeExtension-clawmetry-plugins-clawmetry-clawhub-plugin-dist-index-js.synthetic.json, message_received, captured hook has no callable handler, generated-surface-hook-stubs                      |
| warn   | execution-results.blocked.clawmetry.message_sent.5            | allowed-blocked: captured hook has no callable handler                     | .crabpot/results/clawmetry/cold-import-extension-clawmetry-plugins-clawmetry-clawhub-plugin-index-ts.synthetic.json, message_sent, captured hook has no callable handler, generated-surface-hook-stubs                                      |
| warn   | execution-results.blocked.clawmetry.message_sent.5            | allowed-blocked: captured hook has no callable handler                     | .crabpot/results/clawmetry/cold-import-runtimeExtension-clawmetry-plugins-clawmetry-clawhub-plugin-dist-index-js.synthetic.json, message_sent, captured hook has no callable handler, generated-surface-hook-stubs                          |
| warn   | execution-results.blocked.clawmetry.registerService.6         | allowed-blocked: captured registration requires includeLifecycle=true      | .crabpot/results/clawmetry/cold-import-extension-clawmetry-plugins-clawmetry-clawhub-plugin-index-ts.synthetic.json, registerService, captured registration requires includeLifecycle=true, service-lifecycle-harness                       |
| warn   | execution-results.blocked.clawmetry.registerService.6         | allowed-blocked: captured registration requires includeLifecycle=true      | .crabpot/results/clawmetry/cold-import-runtimeExtension-clawmetry-plugins-clawmetry-clawhub-plugin-dist-index-js.synthetic.json, registerService, captured registration requires includeLifecycle=true, service-lifecycle-harness           |

## Profile Findings

| Action | ID               | Metric       | Baseline | Current | Message                                    |
| ------ | ---------------- | ------------ | -------- | ------- | ------------------------------------------ |
| warn   | profile.wall-p95 | p95WallMs    | 1273     | 2384    | p95WallMs regressed 87.3% over baseline    |
| warn   | profile.peak-rss | maxPeakRssMb | 65.1     | 468.5   | maxPeakRssMb regressed 403.4 over baseline |

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
