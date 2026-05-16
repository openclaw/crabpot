# Crabpot CI Summary

Generated: deterministic
Mode: track:development
OpenClaw: openclaw/openclaw@main (2026.5.17, 5774517fcee6)
Status: PASS

## Counts

| Metric                      | Value                                                                                                                    |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Breakages                   | 0                                                                                                                        |
| Warnings                    | 18                                                                                                                       |
| Suggestions                 | 20                                                                                                                       |
| Issues                      | 38                                                                                                                       |
| P0 issues                   | 0                                                                                                                        |
| P1 issues                   | 2                                                                                                                        |
| Live issues                 | 0                                                                                                                        |
| Live P0 issues              | 0                                                                                                                        |
| Compat gaps                 | 0                                                                                                                        |
| Deprecation warnings        | 2                                                                                                                        |
| Inspector gaps              | 21                                                                                                                       |
| Upstream metadata           | 15                                                                                                                       |
| Ref diff failures           | 0                                                                                                                        |
| Ref diff warnings           | 0                                                                                                                        |
| Policy failures             | 0                                                                                                                        |
| Policy warnings             | 33                                                                                                                       |
| Profile failures            | 0                                                                                                                        |
| Profile warnings            | 1                                                                                                                        |
| Execution pass              | 10                                                                                                                       |
| Execution fail              | 0                                                                                                                        |
| Execution blocked           | 33                                                                                                                       |
| Windows portability risks   | 0                                                                                                                        |
| Container portability risks | 0                                                                                                                        |
| Jiti loader candidates      | 10                                                                                                                       |
| Import loop                 | p50 1613 ms / p95 1618 ms / plugin delta RSS 2.9 MB / plugin delta CPU 68 ms / OpenClaw import 86.5 ms / activate 0.4 ms |

## Top Issues

| Severity | Class             | Fixture        | Code                     | Decision            | Title                                                                    |
| -------- | ----------------- | -------------- | ------------------------ | ------------------- | ------------------------------------------------------------------------ |
| P1       | upstream-metadata | codex          | reserved-sdk-import      | plugin-upstream-fix | codex: plugin imports reserved bundled-plugin SDK compatibility subpaths |
| P1       | inspector-gap     | memory-lancedb | conversation-access-hook | inspector-follow-up | memory-lancedb: conversation-access hooks need privacy-boundary probes   |

## Ref Regressions

_none_

## Policy Findings

| Action | ID                                                                   | Message                                                                | Evidence                                                                                                                                                                                                                                                                    |
| ------ | -------------------------------------------------------------------- | ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| warn   | execution-results.blocked.codex.inbound_claim.9                      | allowed-blocked: captured hook has no callable handler                 | .crabpot/results/codex/cold-import-extension-codex-plugins-codex-crabpot-package-index-ts.synthetic.json, inbound_claim, captured hook has no callable handler, generated-surface-hook-stubs                                                                                |
| warn   | execution-results.blocked.codex.onConversationBindingResolved.10     | allowed-blocked: captured hook has no callable handler                 | .crabpot/results/codex/cold-import-extension-codex-plugins-codex-crabpot-package-index-ts.synthetic.json, onConversationBindingResolved, captured hook has no callable handler, generated-surface-hook-stubs                                                                |
| warn   | execution-results.blocked.codex.registerCommand.8                    | allowed-blocked: captured registration has no supported callable probe | .crabpot/results/codex/cold-import-extension-codex-plugins-codex-crabpot-package-index-ts.synthetic.json, registerCommand, captured registration has no supported callable probe, generated-surface-registration-stubs                                                      |
| warn   | execution-results.blocked.diagnostics-prometheus.registerHttpRoute.1 | allowed-blocked: captured registration has no supported callable probe | .crabpot/results/diagnostics-prometheus/cold-import-extension-diagnostics-prometheus-plugins-diagnostics-prometheus-crabpot-package-index-ts.synthetic.json, registerHttpRoute, captured registration has no supported callable probe, generated-surface-registration-stubs |
| warn   | execution-results.blocked.diagnostics-prometheus.registerService.0   | allowed-blocked: captured registration requires includeLifecycle=true  | .crabpot/results/diagnostics-prometheus/cold-import-extension-diagnostics-prometheus-plugins-diagnostics-prometheus-crabpot-package-index-ts.synthetic.json, registerService, captured registration requires includeLifecycle=true, service-lifecycle-harness               |
| warn   | execution-results.blocked.diffs.before_prompt_build.2                | allowed-blocked: captured hook has no callable handler                 | .crabpot/results/diffs/cold-import-extension-diffs-plugins-diffs-crabpot-package-index-ts.synthetic.json, before_prompt_build, captured hook has no callable handler, generated-surface-hook-stubs                                                                          |
| warn   | execution-results.blocked.diffs.registerHttpRoute.1                  | allowed-blocked: captured registration has no supported callable probe | .crabpot/results/diffs/cold-import-extension-diffs-plugins-diffs-crabpot-package-index-ts.synthetic.json, registerHttpRoute, captured registration has no supported callable probe, generated-surface-registration-stubs                                                    |
| warn   | execution-results.blocked.diffs.registerTool.0                       | allowed-blocked: captured registration has no supported callable probe | .crabpot/results/diffs/cold-import-extension-diffs-plugins-diffs-crabpot-package-index-ts.synthetic.json, registerTool, captured registration has no supported callable probe, generated-surface-registration-stubs                                                         |
| warn   | execution-results.blocked.google-meet.registerCli.17                 | allowed-blocked: captured registration has no supported callable probe | .crabpot/results/google-meet/cold-import-extension-google-meet-plugins-google-meet-crabpot-package-index-ts.synthetic.json, registerCli, captured registration has no supported callable probe, generated-surface-registration-stubs                                        |
| warn   | execution-results.blocked.google-meet.registerGatewayMethod.0        | allowed-blocked: captured registration has no supported callable probe | .crabpot/results/google-meet/cold-import-extension-google-meet-plugins-google-meet-crabpot-package-index-ts.synthetic.json, registerGatewayMethod, captured registration has no supported callable probe, generated-surface-registration-stubs                              |
| warn   | execution-results.blocked.google-meet.registerGatewayMethod.1        | allowed-blocked: captured registration has no supported callable probe | .crabpot/results/google-meet/cold-import-extension-google-meet-plugins-google-meet-crabpot-package-index-ts.synthetic.json, registerGatewayMethod, captured registration has no supported callable probe, generated-surface-registration-stubs                              |
| warn   | execution-results.blocked.google-meet.registerGatewayMethod.10       | allowed-blocked: captured registration has no supported callable probe | .crabpot/results/google-meet/cold-import-extension-google-meet-plugins-google-meet-crabpot-package-index-ts.synthetic.json, registerGatewayMethod, captured registration has no supported callable probe, generated-surface-registration-stubs                              |
| warn   | execution-results.blocked.google-meet.registerGatewayMethod.11       | allowed-blocked: captured registration has no supported callable probe | .crabpot/results/google-meet/cold-import-extension-google-meet-plugins-google-meet-crabpot-package-index-ts.synthetic.json, registerGatewayMethod, captured registration has no supported callable probe, generated-surface-registration-stubs                              |
| warn   | execution-results.blocked.google-meet.registerGatewayMethod.12       | allowed-blocked: captured registration has no supported callable probe | .crabpot/results/google-meet/cold-import-extension-google-meet-plugins-google-meet-crabpot-package-index-ts.synthetic.json, registerGatewayMethod, captured registration has no supported callable probe, generated-surface-registration-stubs                              |
| warn   | execution-results.blocked.google-meet.registerGatewayMethod.13       | allowed-blocked: captured registration has no supported callable probe | .crabpot/results/google-meet/cold-import-extension-google-meet-plugins-google-meet-crabpot-package-index-ts.synthetic.json, registerGatewayMethod, captured registration has no supported callable probe, generated-surface-registration-stubs                              |
| warn   | execution-results.blocked.google-meet.registerGatewayMethod.14       | allowed-blocked: captured registration has no supported callable probe | .crabpot/results/google-meet/cold-import-extension-google-meet-plugins-google-meet-crabpot-package-index-ts.synthetic.json, registerGatewayMethod, captured registration has no supported callable probe, generated-surface-registration-stubs                              |
| warn   | execution-results.blocked.google-meet.registerGatewayMethod.2        | allowed-blocked: captured registration has no supported callable probe | .crabpot/results/google-meet/cold-import-extension-google-meet-plugins-google-meet-crabpot-package-index-ts.synthetic.json, registerGatewayMethod, captured registration has no supported callable probe, generated-surface-registration-stubs                              |
| warn   | execution-results.blocked.google-meet.registerGatewayMethod.3        | allowed-blocked: captured registration has no supported callable probe | .crabpot/results/google-meet/cold-import-extension-google-meet-plugins-google-meet-crabpot-package-index-ts.synthetic.json, registerGatewayMethod, captured registration has no supported callable probe, generated-surface-registration-stubs                              |
| warn   | execution-results.blocked.google-meet.registerGatewayMethod.4        | allowed-blocked: captured registration has no supported callable probe | .crabpot/results/google-meet/cold-import-extension-google-meet-plugins-google-meet-crabpot-package-index-ts.synthetic.json, registerGatewayMethod, captured registration has no supported callable probe, generated-surface-registration-stubs                              |
| warn   | execution-results.blocked.google-meet.registerGatewayMethod.5        | allowed-blocked: captured registration has no supported callable probe | .crabpot/results/google-meet/cold-import-extension-google-meet-plugins-google-meet-crabpot-package-index-ts.synthetic.json, registerGatewayMethod, captured registration has no supported callable probe, generated-surface-registration-stubs                              |

## Profile Findings

| Action | ID               | Metric       | Baseline | Current | Message                                    |
| ------ | ---------------- | ------------ | -------- | ------- | ------------------------------------------ |
| warn   | profile.peak-rss | maxPeakRssMb | 65.1     | 437.6   | maxPeakRssMb regressed 372.5 over baseline |

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
