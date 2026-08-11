# Crabpot CI Summary

Generated: deterministic
Mode: track:development
OpenClaw: openclaw/openclaw@main (2026.8.1, 8d034a7b6161)
Status: PASS

## Counts

| Metric                      | Value                                                                    |
| --------------------------- | ------------------------------------------------------------------------ |
| Breakages                   | 0                                                                        |
| Warnings                    | 12                                                                       |
| Suggestions                 | 27                                                                       |
| Issues                      | 39                                                                       |
| P0 issues                   | 0                                                                        |
| P1 issues                   | 13                                                                       |
| Live issues                 | 0                                                                        |
| Live P0 issues              | 0                                                                        |
| Compat gaps                 | 12                                                                       |
| Deprecation warnings        | 0                                                                        |
| Inspector gaps              | 21                                                                       |
| Upstream metadata           | 6                                                                        |
| Ref diff failures           | 0                                                                        |
| Ref diff warnings           | 0                                                                        |
| Policy failures             | 0                                                                        |
| Policy warnings             | 25                                                                       |
| Profile failures            | 0                                                                        |
| Profile warnings            | 1                                                                        |
| Execution pass              | 75                                                                       |
| Execution fail              | 0                                                                        |
| Execution blocked           | 24                                                                       |
| Windows portability risks   | 0                                                                        |
| Container portability risks | 0                                                                        |
| Jiti loader candidates      | 10                                                                       |
| Import loop                 | p50 110 ms / p95 121 ms / plugin delta RSS 0 MB / plugin delta CPU 17 ms |

## Top Issues

| Severity | Class         | Fixture                | Code                     | Decision            | Title                                                                             |
| -------- | ------------- | ---------------------- | ------------------------ | ------------------- | --------------------------------------------------------------------------------- |
| P1       | compat-gap    | codex                  | missing-compat-record    | core-compat-adapter | codex: compat-dependent behavior lacks registry coverage                          |
| P1       | compat-gap    | codex                  | sdk-export-missing       | core-compat-adapter | codex: plugin SDK import aliases are missing from target package exports          |
| P1       | compat-gap    | diagnostics-prometheus | missing-compat-record    | core-compat-adapter | diagnostics-prometheus: compat-dependent behavior lacks registry coverage         |
| P1       | compat-gap    | diffs                  | missing-compat-record    | core-compat-adapter | diffs: compat-dependent behavior lacks registry coverage                          |
| P1       | compat-gap    | diffs                  | sdk-export-missing       | core-compat-adapter | diffs: plugin SDK import aliases are missing from target package exports          |
| P1       | compat-gap    | google-meet            | missing-compat-record    | core-compat-adapter | google-meet: compat-dependent behavior lacks registry coverage                    |
| P1       | compat-gap    | google-meet            | sdk-export-missing       | core-compat-adapter | google-meet: plugin SDK import aliases are missing from target package exports    |
| P1       | inspector-gap | memory-lancedb         | conversation-access-hook | inspector-follow-up | memory-lancedb: conversation-access hooks need privacy-boundary probes            |
| P1       | compat-gap    | memory-lancedb         | missing-compat-record    | core-compat-adapter | memory-lancedb: compat-dependent behavior lacks registry coverage                 |
| P1       | compat-gap    | memory-lancedb         | missing-compat-record    | core-compat-adapter | memory-lancedb: compat-dependent behavior lacks registry coverage                 |
| P1       | compat-gap    | openclaw-qqbot         | missing-compat-record    | core-compat-adapter | openclaw-qqbot: compat-dependent behavior lacks registry coverage                 |
| P1       | compat-gap    | openclaw-qqbot         | sdk-export-missing       | core-compat-adapter | openclaw-qqbot: plugin SDK import aliases are missing from target package exports |
| P1       | compat-gap    | whatsapp               | sdk-export-missing       | core-compat-adapter | whatsapp: plugin SDK import aliases are missing from target package exports       |

## Ref Regressions

_none_

## Policy Findings

| Action | ID                                                                       | Message                                                                            | Evidence                                                                                                                                                                                                                                                               |
| ------ | ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| warn   | execution-results.audit-findings                                         | 3 package audit findings                                                           | memory-lancedb:3                                                                                                                                                                                                                                                       |
| warn   | execution-results.blocked.codex.registerCli.0                            | allowed-blocked: captured registration has no supported callable probe             | .crabpot/results/codex/cold-import-extension-codex-plugins-codex-crabpot-package-index-ts.synthetic.json, registerCli, captured registration has no supported callable probe, generated-surface-registration-stubs                                                     |
| warn   | execution-results.blocked.codex.registerTool.10                          | allowed-blocked: captured registration has no supported callable probe             | .crabpot/results/codex/cold-import-extension-codex-plugins-codex-crabpot-package-index-ts.synthetic.json, registerTool, captured registration has no supported callable probe, generated-surface-registration-stubs                                                    |
| warn   | execution-results.blocked.diagnostics-prometheus.registerHttpRoute.1     | allowed-blocked: captured HTTP route probe requires route descriptor input         | .crabpot/results/diagnostics-prometheus/cold-import-extension-diagnostics-prometheus-plugins-diagnostics-prometheus-crabpot-package-index-ts.synthetic.json, registerHttpRoute, captured HTTP route probe requires route descriptor input, http-route-descriptor-input |
| warn   | execution-results.blocked.diagnostics-prometheus.registerService.0       | allowed-blocked: captured registration requires includeLifecycle=true              | .crabpot/results/diagnostics-prometheus/cold-import-extension-diagnostics-prometheus-plugins-diagnostics-prometheus-crabpot-package-index-ts.synthetic.json, registerService, captured registration requires includeLifecycle=true, service-lifecycle-harness          |
| warn   | execution-results.blocked.diffs.registerHttpRoute.1                      | allowed-blocked: captured HTTP route probe requires route descriptor input         | .crabpot/results/diffs/cold-import-extension-diffs-plugins-diffs-crabpot-package-index-ts.synthetic.json, registerHttpRoute, captured HTTP route probe requires route descriptor input, http-route-descriptor-input                                                    |
| warn   | execution-results.blocked.diffs.registerTool.0                           | allowed-blocked: captured registration has no supported callable probe             | .crabpot/results/diffs/cold-import-extension-diffs-plugins-diffs-crabpot-package-index-ts.synthetic.json, registerTool, captured registration has no supported callable probe, generated-surface-registration-stubs                                                    |
| warn   | execution-results.blocked.google-meet.registerCli.20                     | allowed-blocked: captured registration has no supported callable probe             | .crabpot/results/google-meet/cold-import-extension-google-meet-plugins-google-meet-crabpot-package-index-ts.synthetic.json, registerCli, captured registration has no supported callable probe, generated-surface-registration-stubs                                   |
| warn   | execution-results.blocked.google-meet.registerTool.17                    | allowed-blocked: captured registration has no supported callable probe             | .crabpot/results/google-meet/cold-import-extension-google-meet-plugins-google-meet-crabpot-package-index-ts.synthetic.json, registerTool, captured registration has no supported callable probe, generated-surface-registration-stubs                                  |
| warn   | execution-results.blocked.google-meet.registerTranscriptSourceProvider.0 | allowed-blocked: captured registration has no execution profile                    | .crabpot/results/google-meet/cold-import-extension-google-meet-plugins-google-meet-crabpot-package-index-ts.synthetic.json, registerTranscriptSourceProvider, captured registration has no execution profile, transcript-source-provider-metadata                      |
| warn   | execution-results.blocked.memory-lancedb.registerCli.4                   | allowed-blocked: captured registration has no supported callable probe             | .crabpot/results/memory-lancedb/cold-import-extension-memory-lancedb-plugins-memory-lancedb-crabpot-package-index-ts.synthetic.json, registerCli, captured registration has no supported callable probe, generated-surface-registration-stubs                          |
| warn   | execution-results.blocked.memory-lancedb.registerService.8               | allowed-blocked: captured registration requires includeLifecycle=true              | .crabpot/results/memory-lancedb/cold-import-extension-memory-lancedb-plugins-memory-lancedb-crabpot-package-index-ts.synthetic.json, registerService, captured registration requires includeLifecycle=true, service-lifecycle-harness                                  |
| warn   | execution-results.blocked.memory-lancedb.registerTool.1                  | allowed-blocked: captured registration has no supported callable probe             | .crabpot/results/memory-lancedb/cold-import-extension-memory-lancedb-plugins-memory-lancedb-crabpot-package-index-ts.synthetic.json, registerTool, captured registration has no supported callable probe, generated-surface-registration-stubs                         |
| warn   | execution-results.blocked.memory-lancedb.registerTool.2                  | allowed-blocked: captured registration has no supported callable probe             | .crabpot/results/memory-lancedb/cold-import-extension-memory-lancedb-plugins-memory-lancedb-crabpot-package-index-ts.synthetic.json, registerTool, captured registration has no supported callable probe, generated-surface-registration-stubs                         |
| warn   | execution-results.blocked.memory-lancedb.registerTool.3                  | allowed-blocked: captured registration has no supported callable probe             | .crabpot/results/memory-lancedb/cold-import-extension-memory-lancedb-plugins-memory-lancedb-crabpot-package-index-ts.synthetic.json, registerTool, captured registration has no supported callable probe, generated-surface-registration-stubs                         |
| warn   | execution-results.blocked.openclaw-qqbot.registerChannel.0               | allowed-blocked: captured registration requires includeChannelRuntime=true         | .crabpot/results/openclaw-qqbot/cold-import-extension-openclaw-qqbot-plugins-openclaw-qqbot-crabpot-package-index-ts.synthetic.json, registerChannel, captured registration requires includeChannelRuntime=true, channel-runtime-harness                               |
| warn   | execution-results.blocked.openclaw-qqbot.registerCommand.3               | allowed-blocked: captured QQ Bot command probe requires host channel configuration | .crabpot/results/openclaw-qqbot/cold-import-extension-openclaw-qqbot-plugins-openclaw-qqbot-crabpot-package-index-ts.synthetic.json, registerCommand, captured QQ Bot command probe requires host channel configuration, openclaw-qqbot-command-channel-config-runtime |
| warn   | execution-results.blocked.openclaw-qqbot.registerCommand.4               | allowed-blocked: captured QQ Bot command probe requires host channel configuration | .crabpot/results/openclaw-qqbot/cold-import-extension-openclaw-qqbot-plugins-openclaw-qqbot-crabpot-package-index-ts.synthetic.json, registerCommand, captured QQ Bot command probe requires host channel configuration, openclaw-qqbot-command-channel-config-runtime |
| warn   | execution-results.blocked.openclaw-qqbot.registerCommand.5               | allowed-blocked: captured QQ Bot command probe requires host channel configuration | .crabpot/results/openclaw-qqbot/cold-import-extension-openclaw-qqbot-plugins-openclaw-qqbot-crabpot-package-index-ts.synthetic.json, registerCommand, captured QQ Bot command probe requires host channel configuration, openclaw-qqbot-command-channel-config-runtime |
| warn   | execution-results.blocked.openclaw-qqbot.registerCommand.6               | allowed-blocked: captured QQ Bot command probe requires host channel configuration | .crabpot/results/openclaw-qqbot/cold-import-extension-openclaw-qqbot-plugins-openclaw-qqbot-crabpot-package-index-ts.synthetic.json, registerCommand, captured QQ Bot command probe requires host channel configuration, openclaw-qqbot-command-channel-config-runtime |

## Profile Findings

| Action | ID               | Metric       | Baseline | Current | Message                                 |
| ------ | ---------------- | ------------ | -------- | ------- | --------------------------------------- |
| warn   | profile.peak-rss | maxPeakRssMb | 65.1     | 135.1   | maxPeakRssMb regressed 70 over baseline |

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
