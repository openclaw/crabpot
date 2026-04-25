# Crabpot CI Policy

Generated: deterministic
Status: PASS
Strict: false

## Summary

| Metric                 | Value                                       |
| ---------------------- | ------------------------------------------- |
| Checks                 | 6                                           |
| Fail                   | 0                                           |
| Warn                   | 2                                           |
| Pass                   | 4                                           |
| Allowed blocked rules  | 2                                           |
| Expected warning rules | 1                                           |
| Fixture sets           | build, sdk-alias, side-effect-review, smoke |

## Checks

| Action | ID                                                | Message                                                                    | Evidence                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ------ | ------------------------------------------------- | -------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| warn   | execution-results.blocked.wecom.registerChannel.0 | allowed-blocked: captured registration requires includeChannelRuntime=true | .crabpot/results/wecom/cold-import-extension-wecom-plugins-wecom-index-js.synthetic.json, registerChannel, captured registration requires includeChannelRuntime=true, channel-runtime-harness                                                                                                                                                                                                                                                                          |
| warn   | execution-results.blocked.wecom.registerTool.2    | expected-warning: captured registration has no object descriptor           | .crabpot/results/wecom/cold-import-extension-wecom-plugins-wecom-index-js.synthetic.json, registerTool, captured registration has no object descriptor, tool-factory-descriptor                                                                                                                                                                                                                                                                                        |
| pass   | compatibility-report.breakages                    | 0 hard breakages                                                           | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| pass   | compatibility-report.p1-issues                    | 12 P1 issues tracked                                                       | a2a-gateway:registration-capture-gap, clawmetry:registration-capture-gap, codex-app-server:missing-compat-record, codex-app-server:registration-capture-gap, codex-app-server:sdk-export-missing, llm-trace-phoenix:conversation-access-hook, mcp-adapter:registration-capture-gap, opik-openclaw:before-tool-call-probe, opik-openclaw:conversation-access-hook, opik-openclaw:registration-capture-gap, wecom:before-tool-call-probe, wecom:registration-capture-gap |
| pass   | execution-results.audit-findings                  | 0 package audit findings                                                   | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| pass   | execution-results.failures                        | 0 failed synthetic probes                                                  | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
