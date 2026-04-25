# Crabpot Synthetic Probes

Generated: deterministic

## Summary

| Metric              | Value |
| ------------------- | ----- |
| Fixtures            | 11    |
| Probes              | 36    |
| Hook probes         | 8     |
| Registration probes | 28    |
| Ready               | 36    |
| Blocked             | 0     |

## Probe Inventory

| Fixture           | Kind         | Seam                       | Status | Evidence                                                           | Assertions                                                                                      |
| ----------------- | ------------ | -------------------------- | ------ | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| wecom             | hook         | before_prompt_build        | ready  | plugins/wecom/index.js:53                                          | prompt mutation result is preserved; agent and conversation metadata are present                |
| wecom             | hook         | before_tool_call           | ready  | plugins/wecom/index.js:65                                          | block/allow return shapes are preserved; terminal and approval metadata are present             |
| wecom             | hook         | subagent_delivery_target   | ready  | plugins/wecom/index.js:61                                          | target routing result is preserved; parent/subagent metadata are present                        |
| wecom             | hook         | subagent_ended             | ready  | plugins/wecom/index.js:63                                          | subagent completion payload is preserved; status metadata is present                            |
| wecom             | hook         | subagent_spawned           | ready  | plugins/wecom/index.js:62                                          | spawn payload is preserved; parent/subagent metadata are present                                |
| llm-trace-phoenix | hook         | llm_input                  | ready  | plugins/llm-trace-phoenix/index.ts:154                             | model input payload is redacted as expected; model and agent metadata are present               |
| llm-trace-phoenix | hook         | llm_output                 | ready  | plugins/llm-trace-phoenix/index.ts:168                             | model output payload is redacted as expected; model and agent metadata are present              |
| codex-app-server  | hook         | inbound_claim              | ready  | plugins/codex-app-server/index.ts:25                               | claim payload preserves channel/source identity; routing metadata is present                    |
| agentchat         | registration | defineChannelPluginEntry   | ready  | plugins/agentchat/integrations/openclaw-channel/src/channel.ts:333 | channel id is stable; setup/config schema can be read; message envelope metadata is preserved   |
| wecom             | registration | registerChannel            | ready  | plugins/wecom/index.js:27                                          | channel id is stable; inbound/outbound envelope shape is captured; sender metadata is preserved |
| wecom             | registration | registerHttpRoute          | ready  | plugins/wecom/index.js:45                                          | route method and path are captured; auth policy metadata is captured                            |
| wecom             | registration | registerTool               | ready  | plugins/wecom/index.js:28                                          | tool name is stable; input schema is captured; result shape metadata is captured                |
| wecom             | registration | registerTool               | ready  | plugins/wecom/index.js:29                                          | tool name is stable; input schema is captured; result shape metadata is captured                |
| wecom             | registration | registerTool               | ready  | plugins/wecom/index.js:33                                          | tool name is stable; input schema is captured; result shape metadata is captured                |
| a2a-gateway       | registration | registerGatewayMethod      | ready  | plugins/a2a-gateway/index.ts:616                                   | method name is stable; request and response schema are captured                                 |
| a2a-gateway       | registration | registerGatewayMethod      | ready  | plugins/a2a-gateway/index.ts:622                                   | method name is stable; request and response schema are captured                                 |
| a2a-gateway       | registration | registerGatewayMethod      | ready  | plugins/a2a-gateway/index.ts:631                                   | method name is stable; request and response schema are captured                                 |
| a2a-gateway       | registration | registerGatewayMethod      | ready  | plugins/a2a-gateway/index.ts:657                                   | method name is stable; request and response schema are captured                                 |
| a2a-gateway       | registration | registerGatewayMethod      | ready  | plugins/a2a-gateway/index.ts:669                                   | method name is stable; request and response schema are captured                                 |
| a2a-gateway       | registration | registerService            | ready  | plugins/a2a-gateway/index.ts:857                                   | service id is stable; start/stop lifecycle handlers are captured                                |
| a2a-gateway       | registration | registerTool               | ready  | plugins/a2a-gateway/index.ts:777                                   | tool name is stable; input schema is captured; result shape metadata is captured                |
| hasdata           | registration | registerTool               | ready  | plugins/hasdata/src/index.ts:43                                    | tool name is stable; input schema is captured; result shape metadata is captured                |
| mcp-adapter       | registration | registerService            | ready  | plugins/mcp-adapter/index.ts:15                                    | service id is stable; start/stop lifecycle handlers are captured                                |
| mcp-adapter       | registration | registerTool               | ready  | plugins/mcp-adapter/index.ts:30                                    | tool name is stable; input schema is captured; result shape metadata is captured                |
| clawmetry         | registration | definePluginEntry          | ready  | plugins/clawmetry/clawhub-plugin/index.ts:4                        | entrypoint register function is callable; entrypoint metadata is preserved                      |
| clawmetry         | registration | registerService            | ready  | plugins/clawmetry/clawhub-plugin/index.ts:9                        | service id is stable; start/stop lifecycle handlers are captured                                |
| codex-app-server  | registration | registerCommand            | ready  | plugins/codex-app-server/index.ts:48                               | command id is stable; interactive command payload is captured                                   |
| codex-app-server  | registration | registerInteractiveHandler | ready  | plugins/codex-app-server/index.ts:29                               | handler id is stable; interaction payload and response shape are captured                       |
| codex-app-server  | registration | registerInteractiveHandler | ready  | plugins/codex-app-server/index.ts:38                               | handler id is stable; interaction payload and response shape are captured                       |
| codex-app-server  | registration | registerService            | ready  | plugins/codex-app-server/index.ts:12                               | service id is stable; start/stop lifecycle handlers are captured                                |
| web-search-plus   | registration | registerTool               | ready  | plugins/web-search-plus/index.ts:815                               | tool name is stable; input schema is captured; result shape metadata is captured                |
| web-search-plus   | registration | registerTool               | ready  | plugins/web-search-plus/index.ts:947                               | tool name is stable; input schema is captured; result shape metadata is captured                |
| apify             | registration | registerCli                | ready  | plugins/apify/src/cli.ts:35                                        | command name is stable; argument schema is captured                                             |
| apify             | registration | registerTool               | ready  | plugins/apify/src/index.ts:13                                      | tool name is stable; input schema is captured; result shape metadata is captured                |
| inworld-tts       | registration | definePluginEntry          | ready  | plugins/inworld-tts/index.ts:4                                     | entrypoint register function is callable; entrypoint metadata is preserved                      |
| inworld-tts       | registration | registerSpeechProvider     | ready  | plugins/inworld-tts/index.ts:9                                     | provider id is stable; speech request overrides are captured                                    |
