# Contract Matrix

Crabpot should test contracts by seam, not by package popularity.

| Seam | Fixture examples | What should fail fast |
| --- | --- | --- |
| Channel runtime | `agentchat`, `wecom` | registration drift, message envelope drift, sender/thread metadata drift |
| Native tools | `hasdata`, `web-search-plus`, `apify` | schema incompatibility, result-shape drift, auth/config drift |
| Dynamic tools | `mcp-adapter` | JSON Schema passthrough, tool namespacing, reconnect behavior |
| LLM observation | `llm-trace-phoenix` | conversation-access gating, prompt/output shape changes |
| Diagnostics/logs | `clawmetry` | diagnostic event shape, log transport registration |
| Gateway services | `a2a-gateway`, `clawmetry` | lifecycle start/stop, route registration, teardown |
| Provider capability | `inworld-tts` | provider registration, runtime helper compatibility |
| Unsafe/process policy | `codex-app-server` | install scan behavior, process-spawn declarations |
| Async jobs | `a2a-gateway`, `apify` | start/poll/collect result contracts and timeout handling |
| Prompt mutation | `agentchat` | prompt-injection opt-out and prompt builder contracts |

## Test levels

1. **Manifest smoke**: plugin metadata parses and declared OpenClaw compatibility
   can be read without executing plugin code.
2. **SDK compile**: plugin TypeScript compiles against the target OpenClaw SDK.
3. **Registration capture**: plugin `register(api)` can run against a captured
   API shim and records expected tools, hooks, providers, routes, and commands.
4. **Contract smoke**: selected hooks/tools run against fixture events with
   synthetic inputs and validate stable return shapes.
5. **Live smoke**: opt-in, credential-gated checks for real remote services.

Default CI should run levels 1-4. Live smoke belongs behind explicit labels,
manual workflow dispatch, or secret availability.

