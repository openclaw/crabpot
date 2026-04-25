# crabpot

Compatibility trap for OpenClaw plugin contracts.

`crabpot` keeps a curated set of real community plugins pinned under `plugins/`
and runs seam-focused compatibility checks against OpenClaw plugin APIs. The goal
is to catch contract drift before external plugin authors do.

## What this tests

- plugin manifests and install metadata
- native tool registration and dynamic tool schemas
- channel registration and message delivery seams
- lifecycle hooks such as `gateway_start`, `gateway_stop`, and `before_install`
- agent hooks such as `before_tool_call`, `before_prompt_build`, `llm_input`,
  `llm_output`, and `agent_end`
- provider capability registration such as speech/TTS
- plugin-owned services, routes, subprocesses, and async job patterns

## Layout

```text
crabpot/
  crabpot.config.json        fixture manifest and seam tags
  plugins/                   external plugin repositories as git submodules
  reports/                   generated compatibility report artifacts
  scripts/                   manifest and fixture helpers
  test/                      repo-level checks
  docs/                      operating notes and seam matrix
```

## Quick start

```bash
npm test
node scripts/list-fixtures.mjs
node scripts/sync-fixtures.mjs --check
npm run report
```

To materialize the fixture repos as submodules:

```bash
node scripts/sync-fixtures.mjs --materialize
git submodule update --init --recursive
```

That command mutates `.gitmodules` and `plugins/*`. Commit those changes when
you intentionally pin or update fixture revisions.

## Compatibility report

`npm run report` writes:

- `reports/crabpot-report.md`
- `reports/crabpot-report.json`

The report is the local review surface for hard breakages, warnings, raw seam
logs, OpenClaw compatibility-record coverage, suggestions for compat-layer work,
and the decision matrix. It defaults to the OpenClaw checkout configured in
`crabpot.config.json` and can be pointed elsewhere:

```bash
node scripts/generate-report.mjs --openclaw ../openclaw
node scripts/generate-report.mjs --check --openclaw ../openclaw
```

## Fixture policy

Fixtures should earn their spot by covering a distinct seam. Popularity is a
useful signal, but a small plugin that exercises a rare hook is more valuable
than the fourth web-search wrapper.

The first fixture set intentionally covers channels, dynamic tools, LLM
observation, diagnostics, gateway-owned services, async jobs, provider
capabilities, and security/policy hooks.
