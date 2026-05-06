# Crabpot CI Summary

Generated: deterministic
Mode: dependabot
OpenClaw: openclaw@latest (2026.5.4, 325df3efefe9)
Status: PASS

## Counts

| Metric                      | Value                                                                                                                   |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Breakages                   | 0                                                                                                                       |
| Warnings                    | 149                                                                                                                     |
| Suggestions                 | 156                                                                                                                     |
| Issues                      | 305                                                                                                                     |
| P0 issues                   | 0                                                                                                                       |
| P1 issues                   | 38                                                                                                                      |
| Live issues                 | 0                                                                                                                       |
| Live P0 issues              | 0                                                                                                                       |
| Compat gaps                 | 2                                                                                                                       |
| Deprecation warnings        | 41                                                                                                                      |
| Inspector gaps              | 164                                                                                                                     |
| Upstream metadata           | 98                                                                                                                      |
| Ref diff failures           | 0                                                                                                                       |
| Ref diff warnings           | 0                                                                                                                       |
| Policy failures             | 0                                                                                                                       |
| Policy warnings             | 19                                                                                                                      |
| Profile failures            | 0                                                                                                                       |
| Profile warnings            | 2                                                                                                                       |
| Execution pass              | 12                                                                                                                      |
| Execution fail              | 0                                                                                                                       |
| Execution blocked           | 18                                                                                                                      |
| Windows portability risks   | 14                                                                                                                      |
| Container portability risks | 14                                                                                                                      |
| Jiti loader candidates      | 25                                                                                                                      |
| Import loop                 | p50 2345 ms / p95 2351 ms / plugin delta RSS 9.9 MB / plugin delta CPU 0 ms / OpenClaw import 75.8 ms / activate 0.3 ms |

## Top Issues

| Severity | Class             | Fixture                | Code                                | Decision            | Title                                                                           |
| -------- | ----------------- | ---------------------- | ----------------------------------- | ------------------- | ------------------------------------------------------------------------------- |
| P1       | upstream-metadata | bluebubbles            | package-npm-pack-entrypoint-missing | plugin-upstream-fix | bluebubbles: advertised npm artifact is missing OpenClaw entrypoints            |
| P1       | upstream-metadata | brave-plugin           | package-npm-pack-entrypoint-missing | plugin-upstream-fix | brave-plugin: advertised npm artifact is missing OpenClaw entrypoints           |
| P1       | upstream-metadata | clawmetry              | package-npm-pack-entrypoint-missing | plugin-upstream-fix | clawmetry: advertised npm artifact is missing OpenClaw entrypoints              |
| P1       | compat-gap        | clawmetry              | sdk-export-missing                  | core-compat-adapter | clawmetry: plugin SDK import aliases are missing from target package exports    |
| P1       | upstream-metadata | codex                  | package-npm-pack-entrypoint-missing | plugin-upstream-fix | codex: advertised npm artifact is missing OpenClaw entrypoints                  |
| P1       | upstream-metadata | diagnostics-otel       | package-npm-pack-entrypoint-missing | plugin-upstream-fix | diagnostics-otel: advertised npm artifact is missing OpenClaw entrypoints       |
| P1       | upstream-metadata | diagnostics-prometheus | package-npm-pack-entrypoint-missing | plugin-upstream-fix | diagnostics-prometheus: advertised npm artifact is missing OpenClaw entrypoints |
| P1       | upstream-metadata | diffs                  | package-npm-pack-entrypoint-missing | plugin-upstream-fix | diffs: advertised npm artifact is missing OpenClaw entrypoints                  |
| P1       | upstream-metadata | discord                | package-npm-pack-entrypoint-missing | plugin-upstream-fix | discord: advertised npm artifact is missing OpenClaw entrypoints                |
| P1       | upstream-metadata | feishu                 | package-npm-pack-entrypoint-missing | plugin-upstream-fix | feishu: advertised npm artifact is missing OpenClaw entrypoints                 |
| P1       | upstream-metadata | google-meet            | package-npm-pack-entrypoint-missing | plugin-upstream-fix | google-meet: advertised npm artifact is missing OpenClaw entrypoints            |
| P1       | inspector-gap     | honcho                 | conversation-access-hook            | inspector-follow-up | honcho: conversation-access hooks need privacy-boundary probes                  |
| P1       | compat-gap        | honcho                 | sdk-export-missing                  | core-compat-adapter | honcho: plugin SDK import aliases are missing from target package exports       |
| P1       | inspector-gap     | kitchen-sink           | before-tool-call-probe              | inspector-follow-up | kitchen-sink: before_tool_call needs terminal/block/approval probes             |
| P1       | inspector-gap     | kitchen-sink           | conversation-access-hook            | inspector-follow-up | kitchen-sink: conversation-access hooks need privacy-boundary probes            |
| P1       | inspector-gap     | llm-trace-phoenix      | conversation-access-hook            | inspector-follow-up | llm-trace-phoenix: conversation-access hooks need privacy-boundary probes       |
| P1       | upstream-metadata | lobster                | package-npm-pack-entrypoint-missing | plugin-upstream-fix | lobster: advertised npm artifact is missing OpenClaw entrypoints                |
| P1       | inspector-gap     | memory-lancedb         | conversation-access-hook            | inspector-follow-up | memory-lancedb: conversation-access hooks need privacy-boundary probes          |
| P1       | upstream-metadata | memory-lancedb         | package-npm-pack-entrypoint-missing | plugin-upstream-fix | memory-lancedb: advertised npm artifact is missing OpenClaw entrypoints         |
| P1       | inspector-gap     | memory-tencentdb       | conversation-access-hook            | inspector-follow-up | memory-tencentdb: conversation-access hooks need privacy-boundary probes        |

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

| Action | ID               | Metric       | Baseline | Current | Message                                    |
| ------ | ---------------- | ------------ | -------- | ------- | ------------------------------------------ |
| warn   | profile.wall-p95 | p95WallMs    | 1273     | 2261    | p95WallMs regressed 77.6% over baseline    |
| warn   | profile.peak-rss | maxPeakRssMb | 65.1     | 455.6   | maxPeakRssMb regressed 390.5 over baseline |

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
