# Crabpot Plugin Fixtures

Crabpot keeps external plugins under `plugins/`. Most fixtures are git
submodules. Npm-only fixtures use committed `plugins/<id>/package.json` shim
packages with one exact dependency pin; `node scripts/sync-fixtures.mjs --materialize`
unpacks the package payload into ignored `plugins/<id>/.crabpot-package/`
directories for static inspection. The parent repo owns only pins, fixture
metadata, generated reports, and tests. Plugin source stays upstream-owned.

Dependabot watches `.gitmodules` with the `gitsubmodule` ecosystem and the npm
shim package directories with the `npm` ecosystem. Update PRs should change only
the relevant pin unless plugin behavior requires report or contract classifier
changes. Dependabot PRs can be auto-merged after CI refreshes the generated
reports and dashboard.

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
| `lossless-claw` | `plugins/lossless-claw` | git | high | context engine, prompt mutation, lifecycle | Lossless context-management fixture covering context engine registration, DAG compaction tools, prompt assembly hooks, session cleanup, and gateway lifecycle. |
| `connectclaw` | `plugins/connectclaw` | git | high | dynamic tool, gateway service, Hono relay | Contacts/messaging plugin with dynamic tool factories, commands, polling service wakeups, and a Hono relay package. |
| `hyperspell` | `plugins/hyperspell` | git | high | memory runtime, prompt mutation, file watch | Memory/context fixture covering startup, compaction/session hooks, file-change sync, CLI, commands, and memory tools. |
| `honcho` | `plugins/honcho` | git | high | memory runtime, gateway lifecycle, subagents | Memory-runtime fixture covering plugin-entry aliases, memory runtime/prompt sections, gateway lifecycle, subagent capture, and external memory tools. |
| `composio` | `plugins/composio` | git | high | dynamic tool, MCP, external API | NPM-installed dynamic tool fixture for Composio/MCP, prompt context injection, CLI setup, external API auth, and remote tool catalogs. |
| `memory-tencentdb` | `plugins/memory-tencentdb` | npm | high | memory runtime, vector store, lifecycle | TencentDB memory fixture covering recall/capture hooks, SQLite/TCVDB storage, cleanup lifecycle, and seed/export CLI commands. |
| `ddingtalk` | `plugins/ddingtalk` | git | high | channel, media, webhook | DingTalk channel fixture covering enterprise IM auth, channel setup, media handling, and webhook-style ingress. |
| `mocrane-wecom` | `plugins/mocrane-wecom` | git | high | channel, MCP, SDK compat | Latest @mocrane/wecom-backed fixture covering WeCom routing, MCP tooling, skill bundles, HTTP routes, and SDK shims. |
| `yuanbao` | `plugins/yuanbao` | npm | high | channel, command, SDK compat | Yuanbao bot fixture covering auth, media, tools, command queue compatibility, and root SDK imports. |
| `openclaw-weixin` | `plugins/openclaw-weixin` | npm | high | channel, pairing, SDK subpaths | Weixin channel fixture covering scan-login pairing, account isolation, media, and narrow SDK subpath usage. |
| `lightclawbot` | `plugins/lightclawbot` | npm | medium | channel, cron, bundled deps | Channel fixture covering cron/proactive messaging metadata, upload tooling, bundled Socket.IO dependencies, and JS-only packages. |
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
