# Crabpot CI Summary

Generated: deterministic
Mode: track:development
OpenClaw: openclaw/openclaw@main (2026.9.6, 276537bf8dbb)
Status: PASS

## Counts

| Metric                      | Value                                                                                                                  |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Breakages                   | 0                                                                                                                      |
| Warnings                    | 4                                                                                                                      |
| Suggestions                 | 17                                                                                                                     |
| Issues                      | 21                                                                                                                     |
| P0 issues                   | 0                                                                                                                      |
| P1 issues                   | 4                                                                                                                      |
| Live issues                 | 0                                                                                                                      |
| Live P0 issues              | 0                                                                                                                      |
| Compat gaps                 | 4                                                                                                                      |
| Deprecation warnings        | 0                                                                                                                      |
| Inspector gaps              | 17                                                                                                                     |
| Upstream metadata           | 0                                                                                                                      |
| Ref diff failures           | 0                                                                                                                      |
| Ref diff warnings           | 0                                                                                                                      |
| Policy failures             | 0                                                                                                                      |
| Policy warnings             | 38                                                                                                                     |
| Profile failures            | 0                                                                                                                      |
| Profile warnings            | 2                                                                                                                      |
| Execution pass              | 36                                                                                                                     |
| Execution fail              | 0                                                                                                                      |
| Execution blocked           | 37                                                                                                                     |
| Windows portability risks   | 0                                                                                                                      |
| Container portability risks | 0                                                                                                                      |
| Jiti loader candidates      | 8                                                                                                                      |
| Import loop                 | p50 4316 ms / p95 4318 ms / plugin delta RSS 0 MB / plugin delta CPU 0 ms / OpenClaw import 111.1 ms / activate 1.3 ms |

## Top Issues

| Severity | Class      | Fixture     | Code               | Decision            | Title                                                                          |
| -------- | ---------- | ----------- | ------------------ | ------------------- | ------------------------------------------------------------------------------ |
| P1       | compat-gap | codex       | sdk-export-missing | core-compat-adapter | codex: plugin SDK import aliases are missing from target package exports       |
| P1       | compat-gap | diffs       | sdk-export-missing | core-compat-adapter | diffs: plugin SDK import aliases are missing from target package exports       |
| P1       | compat-gap | google-meet | sdk-export-missing | core-compat-adapter | google-meet: plugin SDK import aliases are missing from target package exports |
| P1       | compat-gap | whatsapp    | sdk-export-missing | core-compat-adapter | whatsapp: plugin SDK import aliases are missing from target package exports    |

## Ref Regressions

_none_

## Policy Findings

| Action | ID                                                                   | Message                                                                                         | Evidence                                                                                                                                                                                                                                                               |
| ------ | -------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| warn   | execution-results.audit-findings                                     | 3 package audit findings                                                                        | memory-lancedb:3                                                                                                                                                                                                                                                       |
| warn   | execution-results.blocked.codex.registerCli.5                        | allowed-blocked: captured registration has no supported callable probe                          | .crabpot/results/codex/cold-import-extension-codex-plugins-codex-crabpot-package-index-ts.synthetic.json, registerCli, captured registration has no supported callable probe, generated-surface-registration-stubs                                                     |
| warn   | execution-results.blocked.codex.registerGatewayMethod.0              | allowed-blocked: captured account usage requires a saved subscription login and Gateway runtime | .crabpot/results/codex/cold-import-extension-codex-plugins-codex-crabpot-package-index-ts.synthetic.json, registerGatewayMethod, captured account usage requires a saved subscription login and Gateway runtime, account-usage-runtime-prerequisite                    |
| warn   | execution-results.blocked.codex.registerService.1                    | allowed-blocked: captured registration requires includeLifecycle=true                           | .crabpot/results/codex/cold-import-extension-codex-plugins-codex-crabpot-package-index-ts.synthetic.json, registerService, captured registration requires includeLifecycle=true, service-lifecycle-harness                                                             |
| warn   | execution-results.blocked.codex.registerService.3                    | allowed-blocked: captured registration requires includeLifecycle=true                           | .crabpot/results/codex/cold-import-extension-codex-plugins-codex-crabpot-package-index-ts.synthetic.json, registerService, captured registration requires includeLifecycle=true, service-lifecycle-harness                                                             |
| warn   | execution-results.blocked.codex.registerService.4                    | allowed-blocked: captured registration requires includeLifecycle=true                           | .crabpot/results/codex/cold-import-extension-codex-plugins-codex-crabpot-package-index-ts.synthetic.json, registerService, captured registration requires includeLifecycle=true, service-lifecycle-harness                                                             |
| warn   | execution-results.blocked.codex.registerService.6                    | allowed-blocked: captured registration requires includeLifecycle=true                           | .crabpot/results/codex/cold-import-extension-codex-plugins-codex-crabpot-package-index-ts.synthetic.json, registerService, captured registration requires includeLifecycle=true, service-lifecycle-harness                                                             |
| warn   | execution-results.blocked.codex.registerTool.18                      | allowed-blocked: captured registration has no supported callable probe                          | .crabpot/results/codex/cold-import-extension-codex-plugins-codex-crabpot-package-index-ts.synthetic.json, registerTool, captured registration has no supported callable probe, generated-surface-registration-stubs                                                    |
| warn   | execution-results.blocked.codex.registerTool.20                      | allowed-blocked: captured registration has no supported callable probe                          | .crabpot/results/codex/cold-import-extension-codex-plugins-codex-crabpot-package-index-ts.synthetic.json, registerTool, captured registration has no supported callable probe, generated-surface-registration-stubs                                                    |
| warn   | execution-results.blocked.diagnostics-prometheus.registerHttpRoute.1 | allowed-blocked: captured HTTP route probe requires route descriptor input                      | .crabpot/results/diagnostics-prometheus/cold-import-extension-diagnostics-prometheus-plugins-diagnostics-prometheus-crabpot-package-index-ts.synthetic.json, registerHttpRoute, captured HTTP route probe requires route descriptor input, http-route-descriptor-input |
| warn   | execution-results.blocked.diagnostics-prometheus.registerService.0   | allowed-blocked: captured registration requires includeLifecycle=true                           | .crabpot/results/diagnostics-prometheus/cold-import-extension-diagnostics-prometheus-plugins-diagnostics-prometheus-crabpot-package-index-ts.synthetic.json, registerService, captured registration requires includeLifecycle=true, service-lifecycle-harness          |
| warn   | execution-results.blocked.diffs.registerHttpRoute.2                  | allowed-blocked: captured HTTP route probe requires route descriptor input                      | .crabpot/results/diffs/cold-import-extension-diffs-plugins-diffs-crabpot-package-index-ts.synthetic.json, registerHttpRoute, captured HTTP route probe requires route descriptor input, http-route-descriptor-input                                                    |
| warn   | execution-results.blocked.diffs.registerService.0                    | allowed-blocked: captured registration requires includeLifecycle=true                           | .crabpot/results/diffs/cold-import-extension-diffs-plugins-diffs-crabpot-package-index-ts.synthetic.json, registerService, captured registration requires includeLifecycle=true, service-lifecycle-harness                                                             |
| warn   | execution-results.blocked.diffs.registerTool.1                       | allowed-blocked: captured registration has no supported callable probe                          | .crabpot/results/diffs/cold-import-extension-diffs-plugins-diffs-crabpot-package-index-ts.synthetic.json, registerTool, captured registration has no supported callable probe, generated-surface-registration-stubs                                                    |
| warn   | execution-results.blocked.google-meet.registerCli.21                 | allowed-blocked: captured registration has no supported callable probe                          | .crabpot/results/google-meet/cold-import-extension-google-meet-plugins-google-meet-crabpot-package-index-ts.synthetic.json, registerCli, captured registration has no supported callable probe, generated-surface-registration-stubs                                   |
| warn   | execution-results.blocked.google-meet.registerGatewayMethod.10       | allowed-blocked: captured meeting query requires Google Meet OAuth credentials                  | .crabpot/results/google-meet/cold-import-extension-google-meet-plugins-google-meet-crabpot-package-index-ts.synthetic.json, registerGatewayMethod, captured meeting query requires Google Meet OAuth credentials, meeting-oauth-prerequisite                           |
| warn   | execution-results.blocked.google-meet.registerGatewayMethod.11       | allowed-blocked: captured meeting query requires Google Meet OAuth credentials                  | .crabpot/results/google-meet/cold-import-extension-google-meet-plugins-google-meet-crabpot-package-index-ts.synthetic.json, registerGatewayMethod, captured meeting query requires Google Meet OAuth credentials, meeting-oauth-prerequisite                           |
| warn   | execution-results.blocked.google-meet.registerGatewayMethod.12       | allowed-blocked: captured meeting query requires Google Meet OAuth credentials                  | .crabpot/results/google-meet/cold-import-extension-google-meet-plugins-google-meet-crabpot-package-index-ts.synthetic.json, registerGatewayMethod, captured meeting query requires Google Meet OAuth credentials, meeting-oauth-prerequisite                           |
| warn   | execution-results.blocked.google-meet.registerGatewayMethod.13       | allowed-blocked: captured meeting action requires an active meeting session                     | .crabpot/results/google-meet/cold-import-extension-google-meet-plugins-google-meet-crabpot-package-index-ts.synthetic.json, registerGatewayMethod, captured meeting action requires an active meeting session, meeting-session-prerequisite                            |
| warn   | execution-results.blocked.google-meet.registerGatewayMethod.14       | allowed-blocked: captured meeting query requires Google Meet OAuth credentials                  | .crabpot/results/google-meet/cold-import-extension-google-meet-plugins-google-meet-crabpot-package-index-ts.synthetic.json, registerGatewayMethod, captured meeting query requires Google Meet OAuth credentials, meeting-oauth-prerequisite                           |

## Profile Findings

| Action | ID               | Metric       | Baseline | Current | Message                                                |
| ------ | ---------------- | ------------ | -------- | ------- | ------------------------------------------------------ |
| warn   | profile.wall-p95 | p95WallMs    | 1273     | 2134    | p95WallMs regressed 67.6% over baseline                |
| warn   | profile.peak-rss | maxPeakRssMb | 65.1     | 151.8   | maxPeakRssMb regressed 86.70000000000002 over baseline |

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
