# Crabpot Plugin Submodules

Crabpot keeps external plugins as git submodules under `plugins/`. The parent repo
owns only the pinned commit, fixture metadata, generated reports, and tests. Plugin
source stays upstream-owned.

Dependabot watches `.gitmodules` with the `gitsubmodule` ecosystem and opens PRs
when a submodule has a newer upstream commit. Those PRs should update only the
gitlink pin unless the new plugin behavior requires `crabpot.config.json`,
reports, or contract classifier changes.

The root `.github/dependabot.yml` owns this:

```yaml
package-ecosystem: "gitsubmodule"
directory: "/"
```

## How It Works

- `.gitmodules` declares each external repository and local path.
- `crabpot.config.json` declares the fixture id, seam coverage, expected hooks,
  expected registrations, and why the plugin belongs in Crabpot.
- The gitlink at `plugins/<id>` pins the exact upstream commit Crabpot tests.
- `scripts/inspect-fixtures.mjs` reads source statically and checks expected
  hooks, registrations, manifests, packages, and SDK imports.
- `scripts/generate-report.mjs` compares observed plugin seams with the target
  OpenClaw checkout and writes the compatibility reports.
- `scripts/capture-contracts.mjs`, `scripts/synthetic-probes.mjs`, and
  `scripts/workspace-plan.mjs` turn observed seams into executable or opt-in
  inspection work.

## Fixture Inventory

| Fixture | Path | Priority | Primary seams | Why it is here |
| --- | --- | --- | --- | --- |
| `agentchat` | `plugins/agentchat` | high | channel, prompt mutation, config schema | Production-shaped channel plugin with WebSocket auth, reconnect, prompt hints, and typed runtime contracts. |
| `wecom` | `plugins/wecom` | high | channel, streaming, dynamic routing | Large community channel fixture covering streaming, group/DM policy, command allowlists, media, and dynamic agents. |
| `qqbot` | `plugins/qqbot` | high | channel, media, proactive messaging | QQ Bot channel fixture covering rich media, proactive messaging, cron/reminder tools, and preload-based SDK/runtime compatibility. |
| `a2a-gateway` | `plugins/a2a-gateway` | high | gateway service, HTTP routes, async jobs | Agent-to-agent server fixture with discovery, JSON-RPC/REST/gRPC transports, metrics, peer auth, and async task modes. |
| `hasdata` | `plugins/hasdata` | high | tool, schema, external API | Single native tool backed by a large OpenAPI-derived action catalog and strict per-action schemas. |
| `mcp-adapter` | `plugins/mcp-adapter` | high | dynamic tool, MCP transport, schema passthrough | Dynamic tool discovery from MCP servers with stdio/http transports and schema passthrough. |
| `llm-trace-phoenix` | `plugins/llm-trace-phoenix` | high | LLM observer, telemetry | Small sharp fixture for `llm_input`/`llm_output` access and raw prompt/output privacy boundaries. |
| `opik-openclaw` | `plugins/opik-openclaw` | high | LLM observer, tools, subagents | Trace exporter covering LLM spans, tool spans, subagent spans, cleanup, CLI setup, and persisted tool-result sanitization. |
| `lossless-claw` | `plugins/lossless-claw` | high | context engine, prompt mutation, lifecycle | Lossless context-management fixture covering context engine registration, DAG compaction tools, prompt assembly hooks, session cleanup, and gateway lifecycle. |
| `connectclaw` | `plugins/connectclaw` | high | dynamic tool, gateway service, Hono relay | Contacts/messaging plugin with dynamic tool factories, commands, polling service wakeups, and a Hono relay package. |
| `hyperspell` | `plugins/hyperspell` | high | memory runtime, prompt mutation, file watch | Memory/context fixture covering startup, compaction/session hooks, file-change sync, CLI, commands, and memory tools. |
| `honcho` | `plugins/honcho` | high | memory runtime, gateway lifecycle, subagents | Memory-runtime fixture covering plugin-entry aliases, memory runtime/prompt sections, gateway lifecycle, subagent capture, and external memory tools. |
| `composio` | `plugins/composio` | high | dynamic tool, MCP, external API | NPM-installed dynamic tool fixture for Composio/MCP, prompt context injection, CLI setup, external API auth, and remote tool catalogs. |
| `memu-engine` | `plugins/memu-engine` | medium | memory runtime, Python sidecar | Memory tool fixture with a Python sidecar, session ingestion, filesystem storage migration, and local memory data layout assumptions. |
| `secureclaw` | `plugins/secureclaw` | medium | security audit, config hardening, gateway lifecycle | Security fixture covering gateway-start scanning, config/credential hardening, filesystem audit behavior, and CLI remediation/reporting. |
| `memos-cloud` | `plugins/memos-cloud` | medium | memory runtime, legacy hooks, external API | Cloud memory fixture covering legacy `registerHook`, startup/session-end hooks, config UI, env/config precedence, and MemOS API calls. |
| `clawmetry` | `plugins/clawmetry` | medium | diagnostics, telemetry, sidecar | Observability fixture for diagnostic events, log transport, telemetry buffering, and plugin-owned dashboard lifecycle. |
| `codex-app-server` | `plugins/codex-app-server` | medium | process spawn, channel bridge, SDK compat | Bridge fixture for unsafe install/process behavior, channel adapters, interactive UI, and legacy SDK aliases. |
| `web-search-plus` | `plugins/web-search-plus` | medium | tool, provider routing, env auth | Search tool fixture covering provider routing, extraction options, auth env metadata, and external API result shaping. |
| `apify` | `plugins/apify` | medium | tool, async jobs, polling | Catalog/API fixture covering tool registration, async polling, external API auth, and dataset/result retrieval. |
| `inworld-tts` | `plugins/inworld-tts` | medium | provider capability, speech, env auth | Speech provider fixture covering provider registration, voice/runtime overrides, env auth, and manifest speech contracts. |

## Add A Plugin

1. Pick a stable fixture id and submodule path: `plugins/<id>`.
2. Add the submodule:

   ```sh
   git submodule add --depth 1 https://github.com/owner/repo.git plugins/<id>
   ```

3. Add `shallow = true` to the new `.gitmodules` entry.
4. Add a fixture entry to `crabpot.config.json` with:
   - `id`, `name`, `repo`, `path`, and optional `subdir`
   - `priority`
   - seam labels
   - expected hooks, registrations, or manifest contracts
   - a specific `why`
5. Add the fixture to the inventory table above.
6. Run:

   ```sh
   node scripts/sync-fixtures.mjs --check
   node scripts/inspect-fixtures.mjs --check
   node scripts/generate-report.mjs
   node scripts/capture-contracts.mjs
   node scripts/synthetic-probes.mjs
   node scripts/cold-import-readiness.mjs
   node scripts/workspace-plan.mjs
   node scripts/profile-contract-runtime.mjs
   npm run readme:summary
   npm run check
   ```

## Remove A Plugin

1. Remove the fixture entry from `crabpot.config.json`.
2. Remove the inventory row above.
3. Remove the submodule entry and gitlink:

   ```sh
   git submodule deinit -f plugins/<id>
   git rm plugins/<id>
   ```

4. Remove any stale local checkout metadata if needed:

   ```sh
   rm -rf .git/modules/plugins/<id>
   ```

5. Regenerate reports and run `npm run check`.

## Update A Pin Manually

Dependabot should handle routine updates. For a manual bump:

```sh
git submodule update --remote --depth 1 plugins/<id>
node scripts/inspect-fixtures.mjs --check
node scripts/generate-report.mjs
npm run check
```

Commit the gitlink bump with any necessary fixture/report changes. Do not edit
upstream plugin source in this repository.
