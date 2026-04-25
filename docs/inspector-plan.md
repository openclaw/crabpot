# Inspector Plan

Crabpot is the fixture base. The reusable inspector should become a separate
package later.

## Layers

1. **Static inspection**
   Read `openclaw.plugin.json`, `package.json`, and source files. Detect obvious
   `api.register*`, `api.on(...)`, `definePluginEntry(...)`, and
   `defineChannelPluginEntry(...)` usage. This is cheap, dependency-free, and
   safe for default CI.

2. **Cold import**
   Install/build a fixture in an isolated temp workspace, import the plugin
   entrypoint with OpenClaw SDK aliases pointed at the target OpenClaw checkout,
   and fail on import-time side effects. This catches SDK subpath drift and
   unsafe top-level runtime assumptions.

3. **Registration capture**
   Run `register(api)` against a capture API equivalent to OpenClaw's
   `buildPluginApi(...)`, but with every public registrar captured:
   `registerTool`, `registerChannel`, `registerHttpRoute`, `registerService`,
   provider registrations, command registrations, and `api.on(...)` hooks.

4. **Contract probes**
   Invoke captured hooks/tools with synthetic events from versioned fixtures:
   `before_tool_call`, `before_prompt_build`, `llm_input`, `llm_output`,
   `inbound_claim`, `gateway_start`, and provider capability calls. Assert stable
   return shapes and terminal semantics.

5. **Live lanes**
   Credential-gated smoke tests for real services. These stay opt-in and should
   never block default PRs unless the plugin owner asks for that lane.

## What OpenClaw already exposes

OpenClaw already has useful primitives:

- `src/plugins/api-builder.ts` builds the public plugin API object.
- `src/plugins/captured-registration.ts` captures many provider/tool
  registrations.
- `src/plugins/hooks.ts` owns hook runner merge and terminal semantics.
- `src/plugins/compat/registry.ts` is the compatibility warning source of truth.
- `docs/plugins/compatibility.md` already says the inspector should live outside
  core and consume versioned contracts.

The missing piece is a polished external capture API that records every
registrar, including `api.on`, routes, services, channels, commands, and
gateway methods. Crabpot should not duplicate that forever; its scripts are the
prototype.

## Default crabpot checks

The current default checks intentionally stay cheap and offline:

```bash
npm run check
node scripts/inspect-fixtures.mjs --check
npm run contract:coverage
```

This verifies that fixture pins still expose the hooks, registrations, and
manifest contracts we expect. It also compares observed plugin seams with the
target OpenClaw checkout:

- hook names from `src/plugins/hook-types.ts`
- public `api.register*` names from `src/plugins/api-builder.ts`
- captured registration support from `src/plugins/captured-registration.ts`
- compat records from `src/plugins/compat/registry.ts`
- manifest fields and contract keys from `src/plugins/manifest.ts`
- plugin SDK package exports from `package.json`

Generated reports live in `reports/`:

- `crabpot-report.md`
- `crabpot-report.json`
- `crabpot-issues.md`
- `crabpot-capture.md`
- `crabpot-capture.json`
- `crabpot-cold-import.md`
- `crabpot-cold-import.json`
- `crabpot-workspace-plan.md`
- `crabpot-workspace-plan.json`

Later, replace the static scanner with the packaged inspector while keeping
`crabpot.config.json` as the fixture manifest.

## Compatibility issue workflow

When OpenClaw changes a plugin-facing seam:

1. Add or update the OpenClaw compat record.
2. Update the inspector contract fixture for the new behavior.
3. Run crabpot against `openclaw@main` and latest stable.
4. If a fixture breaks, classify it:
   - OpenClaw regression: fix core or add a compat adapter.
   - Plugin bug: open upstream issue with inspector output.
   - Intentional breaking change: document migration and move the compat record
     through deprecation states.

## Current issue signals

Crabpot currently classifies:

- missing expected fixture seams as hard breakages
- observed hooks missing from target OpenClaw as hard breakages
- observed `api.register*` methods missing from target OpenClaw as hard
  breakages
- observed `api.register*` methods missing from captured-registration support as
  P1 inspector follow-up
- unsupported manifest fields or contract keys as plugin upstream fixes
- package/manifest version drift as plugin upstream fixes
- missing package `openclaw.compat.pluginApi` as plugin upstream fixes
- package OpenClaw entrypoints that point at missing build artifacts as
  inspector build/cold-import follow-up
- TypeScript source entrypoints that need a loader or compile step before cold
  import as inspector follow-up
- package runtime dependencies that need isolated installation before direct
  cold import
- opt-in isolated workspace commands for package copy, dependency install,
  build, and capture execution
- plugin SDK imports missing from target OpenClaw package exports as
  compat-adapter debt
- legacy manifest env metadata and root SDK imports as compat-adapter debt
