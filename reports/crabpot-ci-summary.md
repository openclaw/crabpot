# Crabpot CI Summary

Generated: deterministic
Mode: check
OpenClaw: openclaw/openclaw@e3eb1121adfb (Default Track pin 2026-07-18)
Status: PASS

## Counts

| Metric                      | Value                                                                                                                |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| Breakages                   | 0                                                                                                                    |
| Warnings                    | 141                                                                                                                  |
| Suggestions                 | 259                                                                                                                  |
| Issues                      | 400                                                                                                                  |
| P0 issues                   | 1                                                                                                                    |
| P1 issues                   | 128                                                                                                                  |
| Live issues                 | 1                                                                                                                    |
| Live P0 issues              | 1                                                                                                                    |
| Compat gaps                 | 112                                                                                                                  |
| Deprecation warnings        | 48                                                                                                                   |
| Inspector gaps              | 157                                                                                                                  |
| Upstream metadata           | 82                                                                                                                   |
| Ref diff failures           | 0                                                                                                                    |
| Ref diff warnings           | 0                                                                                                                    |
| Policy failures             | 0                                                                                                                    |
| Policy warnings             | 308                                                                                                                  |
| Profile failures            | 0                                                                                                                    |
| Profile warnings            | 2                                                                                                                    |
| Execution pass              | 120                                                                                                                  |
| Execution fail              | 0                                                                                                                    |
| Execution blocked           | 306                                                                                                                  |
| Windows portability risks   | 17                                                                                                                   |
| Container portability risks | 17                                                                                                                   |
| Jiti loader candidates      | 20                                                                                                                   |
| Import loop                 | p50 1987 ms / p95 1989 ms / plugin delta RSS 0 MB / plugin delta CPU 27 ms / OpenClaw import 91 ms / activate 0.2 ms |

## Top Issues

| Severity | Class             | Fixture          | Code                      | Decision            | Title                                                                    |
| -------- | ----------------- | ---------------- | ------------------------- | ------------------- | ------------------------------------------------------------------------ |
| P0       | live-issue        | kitchen-sink     | unknown-registration-name | core-compat-adapter | kitchen-sink: fixture calls a registrar missing from target OpenClaw     |
| P1       | compat-gap        | a2a-gateway      | missing-compat-record     | core-compat-adapter | a2a-gateway: compat-dependent behavior lacks registry coverage           |
| P1       | compat-gap        | a2a-gateway      | missing-compat-record     | core-compat-adapter | a2a-gateway: compat-dependent behavior lacks registry coverage           |
| P1       | compat-gap        | agentchat        | missing-compat-record     | core-compat-adapter | agentchat: compat-dependent behavior lacks registry coverage             |
| P1       | compat-gap        | agentchat        | missing-compat-record     | core-compat-adapter | agentchat: compat-dependent behavior lacks registry coverage             |
| P1       | compat-gap        | bluebubbles      | missing-compat-record     | core-compat-adapter | bluebubbles: compat-dependent behavior lacks registry coverage           |
| P1       | inspector-gap     | clawmetry        | conversation-access-hook  | inspector-follow-up | clawmetry: conversation-access hooks need privacy-boundary probes        |
| P1       | compat-gap        | clawmetry        | missing-compat-record     | core-compat-adapter | clawmetry: compat-dependent behavior lacks registry coverage             |
| P1       | compat-gap        | clawmetry        | missing-compat-record     | core-compat-adapter | clawmetry: compat-dependent behavior lacks registry coverage             |
| P1       | compat-gap        | clawmetry        | missing-compat-record     | core-compat-adapter | clawmetry: compat-dependent behavior lacks registry coverage             |
| P1       | compat-gap        | clawrouter       | missing-compat-record     | core-compat-adapter | clawrouter: compat-dependent behavior lacks registry coverage            |
| P1       | compat-gap        | codex            | missing-compat-record     | core-compat-adapter | codex: compat-dependent behavior lacks registry coverage                 |
| P1       | upstream-metadata | codex            | reserved-sdk-import       | plugin-upstream-fix | codex: plugin imports reserved bundled-plugin SDK compatibility subpaths |
| P1       | compat-gap        | codex-app-server | missing-compat-record     | core-compat-adapter | codex-app-server: compat-dependent behavior lacks registry coverage      |
| P1       | compat-gap        | codex-app-server | missing-compat-record     | core-compat-adapter | codex-app-server: compat-dependent behavior lacks registry coverage      |
| P1       | compat-gap        | composio         | missing-compat-record     | core-compat-adapter | composio: compat-dependent behavior lacks registry coverage              |
| P1       | compat-gap        | connectclaw      | missing-compat-record     | core-compat-adapter | connectclaw: compat-dependent behavior lacks registry coverage           |
| P1       | compat-gap        | connectclaw      | missing-compat-record     | core-compat-adapter | connectclaw: compat-dependent behavior lacks registry coverage           |
| P1       | compat-gap        | connectclaw      | missing-compat-record     | core-compat-adapter | connectclaw: compat-dependent behavior lacks registry coverage           |
| P1       | compat-gap        | ddingtalk        | missing-compat-record     | core-compat-adapter | ddingtalk: compat-dependent behavior lacks registry coverage             |

## Ref Regressions

_none_

## Policy Findings

| Action | ID                                                            | Message                                                                    | Evidence                                                                                                                                                                                                                                    |
| ------ | ------------------------------------------------------------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| warn   | compatibility-report.live-p0-issues                           | 1 live P0 issues tracked                                                   | kitchen-sink:unknown-registration-name:none                                                                                                                                                                                                 |
| warn   | execution-results.audit-findings                              | 577 package audit findings                                                 | a2a-gateway:26, apify:28, codex-app-server:153, ddingtalk:254, diagnostics-otel:14, feishu:2, hasdata:5, mocrane-wecom:32, openclaw-weixin:2, opik-openclaw:5, qqbot:28, wecom:19, yuanbao:9                                                |
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

## Profile Findings

| Action | ID               | Metric       | Baseline | Current | Message                                    |
| ------ | ---------------- | ------------ | -------- | ------- | ------------------------------------------ |
| warn   | profile.wall-p95 | p95WallMs    | 1273     | 5904    | p95WallMs regressed 363.8% over baseline   |
| warn   | profile.peak-rss | maxPeakRssMb | 65.1     | 525.2   | maxPeakRssMb regressed 460.1 over baseline |

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
