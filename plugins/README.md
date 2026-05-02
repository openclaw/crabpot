# Crabpot Plugin Fixtures

Crabpot keeps external plugins under `plugins/`. Most fixtures are git
submodules. Npm-only fixtures use committed `plugins/<id>/package.json` shim
packages with one exact dependency pin; `node scripts/sync-fixtures.mjs --materialize`
unpacks the package payload into ignored `plugins/<id>/.crabpot-package/`
directories for static inspection. OpenClaw monorepo npm fixtures also declare
`source.repo`, `source.path`, and `source.ref` so report evidence links point at
the owning `openclaw/openclaw` source tree. The parent repo owns only pins, fixture
metadata, generated reports, and tests. Plugin source stays upstream-owned.

Dependabot watches `.gitmodules` with the `gitsubmodule` ecosystem and the npm
shim package directories with the `npm` ecosystem. Update PRs should change only
the relevant pin unless plugin behavior requires report or contract classifier
changes. Dependabot PRs can be auto-merged after CI refreshes the generated
reports and dashboard. Schedules use Dependabot cron entries twice per day, with
fixture paths staggered by minute to avoid one big update burst.

The root `.github/dependabot.yml` owns this:

```yaml
package-ecosystem: "gitsubmodule"
directory: "/"
package-ecosystem: "npm"
directory: "/plugins/<id>"
```

## How It Works

- `.gitmodules` declares each external repository fixture and local path.
- `crabpot.config.json` declares the fixture id, seam coverage, expected hooks,
  expected registrations, source pin, and why the plugin belongs in Crabpot.
- The gitlink at `plugins/<id>` pins the exact upstream commit Crabpot tests.
- Npm fixtures use `crabpot.config.json` for package identity and
  `plugins/<id>/package.json` for the exact dependency pin; materialization
  unpacks the package into ignored `plugins/<id>/.crabpot-package/`.
- Monorepo npm fixtures add `source.repo`, `source.path`, and `source.ref`;
  generated report links map packed payload paths back to the owning source path.
- `scripts/inspect-fixtures.mjs` reads source statically and checks expected
  hooks, registrations, manifests, packages, and SDK imports.
- `scripts/generate-report.mjs` compares observed plugin seams with the target
  OpenClaw checkout and writes the compatibility reports.
- `scripts/capture-contracts.mjs`, `scripts/synthetic-probes.mjs`, and
  `scripts/workspace-plan.mjs` turn observed seams into executable or opt-in
  inspection work.

## Fixture Inventory

| Fixture | Path | Source | Priority | Primary seams | Why it is here |
| --- | --- | --- | --- | --- | --- |
| `agentchat` | `plugins/agentchat` | git | high | channel, prompt mutation, config schema | Production-shaped channel plugin with WebSocket auth, reconnect, prompt hints, and typed runtime contracts. |
| `wecom` | `plugins/wecom` | git | high | channel, streaming, dynamic routing | Large community channel fixture covering streaming, group/DM policy, command allowlists, media, and dynamic agents. |
| `qqbot` | `plugins/qqbot` | git | high | channel, media, proactive messaging | QQ Bot channel fixture covering rich media, proactive messaging, cron/reminder tools, and preload-based SDK/runtime compatibility. |
| `a2a-gateway` | `plugins/a2a-gateway` | git | high | gateway service, HTTP routes, async jobs | Agent-to-agent server fixture with discovery, JSON-RPC/REST/gRPC transports, metrics, peer auth, and async task modes. |
| `hasdata` | `plugins/hasdata` | git | high | tool, schema, external API | Single native tool backed by a large OpenAPI-derived action catalog and strict per-action schemas. |
| `mcp-adapter` | `plugins/mcp-adapter` | git | high | dynamic tool, MCP transport, schema passthrough | Dynamic tool discovery from MCP servers with stdio/http transports and schema passthrough. |
| `llm-trace-phoenix` | `plugins/llm-trace-phoenix` | git | high | LLM observer, telemetry | Small sharp fixture for `llm_input`/`llm_output` access and raw prompt/output privacy boundaries. |
| `opik-openclaw` | `plugins/opik-openclaw` | git | high | LLM observer, tools, subagents | Trace exporter covering LLM spans, tool spans, subagent spans, cleanup, CLI setup, and persisted tool-result sanitization. |
| `openclaw-telemetry` | `plugins/openclaw-telemetry` | git | high | diagnostics, lifecycle hooks, telemetry | Telemetry fixture covering lifecycle hooks, tool-call capture, message events, JSONL/syslog sinks, redaction, rate limiting, and integrity hashes. |
| `lossless-claw` | `plugins/lossless-claw` | git | high | context engine, prompt mutation, lifecycle | Lossless context-management fixture covering context engine registration, DAG compaction tools, prompt assembly hooks, session cleanup, and gateway lifecycle. |
| `connectclaw` | `plugins/connectclaw` | git | high | dynamic tool, gateway service, Hono relay | Contacts/messaging plugin with dynamic tool factories, commands, polling service wakeups, and a Hono relay package. |
| `hyperspell` | `plugins/hyperspell` | git | high | memory runtime, prompt mutation, file watch | Memory/context fixture covering startup, compaction/session hooks, file-change sync, CLI, commands, and memory tools. |
| `honcho` | `plugins/honcho` | git | high | memory runtime, gateway lifecycle, subagents | Memory-runtime fixture covering plugin-entry aliases, memory runtime/prompt sections, gateway lifecycle, subagent capture, and external memory tools. |
| `composio` | `plugins/composio` | git | high | dynamic tool, MCP, external API | NPM-installed dynamic tool fixture for Composio/MCP, prompt context injection, CLI setup, external API auth, and remote tool catalogs. |
| `kitchen-sink` | `plugins/kitchen-sink` | git | high | plugin API surface, hooks, manifest contracts | Credential-free generated fixture covering hooks, registrars, provider capabilities, setup metadata, manifest contracts, and SDK import compatibility. |
| `bluebubbles` | `plugins/bluebubbles` | npm + source | medium | channel, account auth, media | Official OpenClaw BlueBubbles channel package covering macOS/iMessage bridge assumptions, account auth, media-capable channel metadata, and npm artifact packaging from the monorepo. |
| `diagnostics-otel` | `plugins/diagnostics-otel` | npm + source | medium | diagnostics, telemetry, otel export | Official OpenClaw OpenTelemetry diagnostics package covering service registration, telemetry exporter setup, and npm package metadata mapped back to the monorepo source. |
| `discord` | `plugins/discord` | npm + source | medium | channel, subagent routing, message policy | Official OpenClaw Discord channel package covering subagent routing hooks, message policy, account auth, and npm artifact packaging from the monorepo. |
| `lobster` | `plugins/lobster` | npm + source | medium | tool, workflow, approval | Official Lobster workflow package covering typed pipeline tools, resumable approval semantics, manifest tool contracts, and npm artifact packaging. |
| `matrix` | `plugins/matrix` | npm + source | medium | channel, gateway method, subagent routing | Official OpenClaw Matrix channel package covering CLI setup, gateway methods, subagent routing hooks, and monorepo-backed npm packaging. |
| `msteams` | `plugins/msteams` | npm + source | medium | channel, account auth, enterprise chat | Official Microsoft Teams channel package covering enterprise chat auth, channel factory metadata, message policy, and npm artifact packaging. |
| `nextcloud-talk` | `plugins/nextcloud-talk` | npm + source | medium | channel, account auth, self hosted chat | Official Nextcloud Talk channel package covering self-hosted chat setup, account auth, channel factory metadata, and npm artifact packaging. |
| `nostr` | `plugins/nostr` | npm + source | medium | channel, encrypted dm, http routes | Official Nostr channel package covering encrypted DM channel behavior, HTTP route registration, account auth, and npm artifact packaging. |
| `voice-call` | `plugins/voice-call` | npm + source | medium | tool, gateway method, service | Official voice-call package covering gateway methods, service lifecycle, tool registration, config migration, CLI setup, and npm artifact packaging. |
| `zalo` | `plugins/zalo` | npm + source | medium | channel, account auth, media | Official Zalo channel package covering account auth, media-capable channel metadata, channel factory registration, and npm artifact packaging. |
| `zalouser` | `plugins/zalouser` | npm + source | medium | channel, native integration, account auth | Official Zalo personal account package covering native zca-js integration, channel factory registration, tool contracts, and npm artifact packaging. |
| `feishu` | `plugins/feishu` | npm + source | medium | channel, subagent routing, tool | Official Feishu/Lark channel package covering subagent routing hooks, account auth, tool contracts, and npm artifact packaging. |
| `tlon` | `plugins/tlon` | npm + source | medium | channel, federated network, account auth | Official Tlon/Urbit channel package covering federated-network account setup, channel factory registration, tool contracts, and npm artifact packaging. |
| `twitch` | `plugins/twitch` | npm + source | medium | channel, streaming chat, account auth | Official Twitch channel package covering streaming-chat channel metadata, account auth, message policy, and npm artifact packaging. |
| `mattermost` | `plugins/mattermost` | npm + source | medium | channel, http routes, self hosted chat | Official Mattermost channel package covering self-hosted chat auth, HTTP route registration, channel factory metadata, and npm artifact packaging. |
| `synology-chat` | `plugins/synology-chat` | npm + source | medium | channel, self hosted chat, account auth | Official Synology Chat channel package covering self-hosted chat setup, channel factory registration, account auth, and npm artifact packaging. |
| `brave-plugin` | `plugins/brave-plugin` | npm + source | medium | provider capability, web search provider, external api | Official Brave search package covering web search provider registration, external API/env auth metadata, manifest provider contracts, and npm artifact packaging. |
| `codex` | `plugins/codex` | npm + source | medium | agent harness, provider capability, media understanding | Official Codex package covering agent harness registration, model provider wiring, media understanding, migrations, inbound claims, and npm artifact packaging. |
| `diagnostics-prometheus` | `plugins/diagnostics-prometheus` | npm + source | medium | diagnostics, telemetry, prometheus export | Official Prometheus diagnostics package covering service lifecycle, metrics HTTP routes, telemetry export, and monorepo-backed npm packaging. |
| `google-meet` | `plugins/google-meet` | npm + source | medium | tool, gateway method, node host command | Official Google Meet package covering meeting tools, gateway methods, node host commands, CLI setup, and npm artifact packaging. |
| `diffs` | `plugins/diffs` | npm + source | medium | tool, http routes, prompt mutation | Official diff viewer package covering prompt mutation, HTTP route UI surface, tool registration, manifest tool contracts, and npm artifact packaging. |
| `memory-lancedb` | `plugins/memory-lancedb` | npm + source | medium | memory runtime, prompt mutation, session lifecycle | Official LanceDB memory package covering automatic recall/capture hooks, vector-store lifecycle, service/CLI setup, tool contracts, and npm artifact packaging. |
| `openclaw-qqbot` | `plugins/openclaw-qqbot` | npm + source | medium | channel, command, tool | Official OpenClaw QQ Bot npm package covering command/tool registration, channel manifest metadata, media-capable messaging, and monorepo source mapping without replacing the external QQBot fixture. |
| `whatsapp` | `plugins/whatsapp` | npm + source | medium | channel, account auth, media | Official WhatsApp channel package covering account auth, media-capable channel metadata, message policy, and npm artifact packaging from the monorepo. |
| `nemoclaw` | `plugins/nemoclaw` | git | high | provider capability, runtime context, security policy | NVIDIA OpenShell fixture covering sandbox-aware runtime context injection, managed inference provider registration, slash-command migration/status flows, OpenShell CLI probing, and secret-blocking tool-call policy. |
| `memory-tencentdb` | `plugins/memory-tencentdb` | npm | high | memory runtime, vector store, lifecycle | TencentDB memory fixture covering recall/capture hooks, SQLite/TCVDB storage, cleanup lifecycle, and seed/export CLI commands. |
| `ddingtalk` | `plugins/ddingtalk` | git | high | channel, media, webhook | DingTalk channel fixture covering enterprise IM auth, channel setup, media handling, and webhook-style ingress. |
| `dingtalk-connector` | `plugins/dingtalk-connector` | git | high | channel, streaming, gateway methods | Official DingTalk connector fixture covering Stream-mode ingress, AI Card replies, multi-account access policy, gateway RPC methods, and packaged channel skills. |
| `mocrane-wecom` | `plugins/mocrane-wecom` | git | high | channel, MCP, SDK compat | Latest @mocrane/wecom-backed fixture covering WeCom routing, MCP tooling, skill bundles, HTTP routes, and SDK shims. |
| `yuanbao` | `plugins/yuanbao` | npm | high | channel, command, SDK compat | Yuanbao bot fixture covering auth, media, tools, command queue compatibility, and root SDK imports. |
| `openclaw-weixin` | `plugins/openclaw-weixin` | npm | high | channel, pairing, SDK subpaths | Weixin channel fixture covering scan-login pairing, account isolation, media, and narrow SDK subpath usage. |
| `lightclawbot` | `plugins/lightclawbot` | npm | medium | channel, cron, bundled deps | Channel fixture covering cron/proactive messaging metadata, upload tooling, bundled Socket.IO dependencies, and JS-only packages. |
| `telnyx-sms` | `plugins/telnyx-sms` | git | medium | channel, HTTP routes, media | Telnyx-owned SMS/MMS channel fixture covering channel setup, multi-account auth, webhook verification, route registration, and auto-exposure flows. |
| `clawrouter` | `plugins/clawrouter` | git | medium | provider capability, proxy, commands | Model-router fixture covering provider registration, generation/search capabilities, sidecar lifecycle, x402 wallet setup, commands, and partner tools. |
| `memu-engine` | `plugins/memu-engine` | git | medium | memory runtime, Python sidecar | Memory tool fixture with a Python sidecar, session ingestion, filesystem storage migration, and local memory data layout assumptions. |
| `secureclaw` | `plugins/secureclaw` | git | medium | security audit, config hardening, gateway lifecycle | Security fixture covering gateway-start scanning, config/credential hardening, filesystem audit behavior, and CLI remediation/reporting. |
| `memos-cloud` | `plugins/memos-cloud` | git | medium | memory runtime, legacy hooks, external API | Cloud memory fixture covering legacy `registerHook`, startup/session-end hooks, config UI, env/config precedence, and MemOS API calls. |
| `clawmetry` | `plugins/clawmetry` | git | medium | diagnostics, telemetry, sidecar | Observability fixture for diagnostic events, log transport, telemetry buffering, and plugin-owned dashboard lifecycle. |
| `codex-app-server` | `plugins/codex-app-server` | git | medium | process spawn, channel bridge, SDK compat | Bridge fixture for unsafe install/process behavior, channel adapters, interactive UI, and legacy SDK aliases. |
| `web-search-plus` | `plugins/web-search-plus` | git | medium | tool, provider routing, env auth | Search tool fixture covering provider routing, extraction options, auth env metadata, and external API result shaping. |
| `apify` | `plugins/apify` | git | medium | tool, async jobs, polling | Catalog/API fixture covering tool registration, async polling, external API auth, and dataset/result retrieval. |
| `inworld-tts` | `plugins/inworld-tts` | git | medium | provider capability, speech, env auth | Speech provider fixture covering provider registration, voice/runtime overrides, env auth, and manifest speech contracts. |

## Add A Plugin

1. Pick a stable fixture id and path: `plugins/<id>`.
2. For a repo-backed plugin, add the submodule:

   ```sh
   git submodule add --depth 1 https://github.com/owner/repo.git plugins/<id>
   ```

3. Add `shallow = true` to the new `.gitmodules` entry.
4. For an npm-only plugin, resolve and pin the current version:

   ```sh
   npm view <package> version
   ```

5. Create `plugins/<id>/package.json` with one exact dependency on the upstream
   npm package and generate its lockfile:

   ```sh
   npm install --package-lock-only --ignore-scripts --prefix plugins/<id>
   ```

6. Add a fixture entry to `crabpot.config.json` with:
   - `id`, `name`, `path`, and optional `subdir`
   - exactly one of `repo` or `package: { name, tag }`
   - optional `source: { repo, path, ref }` for npm packages published from a monorepo
   - `priority`
   - seam labels
   - expected hooks, registrations, or manifest contracts
   - a specific `why`
7. Add an npm update block to `.github/dependabot.yml` for the new shim path.
8. Add the fixture to the inventory table above.
9. Run:

   ```sh
   node scripts/sync-fixtures.mjs --materialize
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
3. For a git fixture, remove the submodule entry and gitlink:

   ```sh
   git submodule deinit -f plugins/<id>
   git rm plugins/<id>
   ```

4. Remove any stale local checkout metadata if needed:

   ```sh
   rm -rf .git/modules/plugins/<id>
   ```

5. For an npm fixture, remove `plugins/<id>/package.json`, `plugins/<id>/package-lock.json`,
   its Dependabot npm block, and the ignored local `.crabpot-package/` directory.
6. Regenerate reports and run `npm run check`.

## Update A Pin Manually

Dependabot should handle routine updates. For a manual repo-backed bump:

```sh
git submodule update --remote --depth 1 plugins/<id>
node scripts/inspect-fixtures.mjs --check
node scripts/generate-report.mjs
npm run check
```

Commit the gitlink bump with any necessary fixture/report changes. Do not edit
upstream plugin source in this repository.

For an npm fixture, update the exact dependency in `plugins/<id>/package.json`,
regenerate `plugins/<id>/package-lock.json`, then run the same report/check
commands. Dependabot uses the same files.
