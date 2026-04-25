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
npm run contract:capture
npm run cold-import
npm run workspace:plan
npm run contract:coverage
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
- `reports/crabpot-issues.md`

`npm run contract:capture` writes:

- `reports/crabpot-capture.md`
- `reports/crabpot-capture.json`

`npm run cold-import` writes:

- `reports/crabpot-cold-import.md`
- `reports/crabpot-cold-import.json`

`npm run workspace:plan` writes:

- `reports/crabpot-workspace-plan.md`
- `reports/crabpot-workspace-plan.json`

The report is the local review surface for hard breakages, warnings, raw seam
logs, OpenClaw compatibility-record coverage, suggestions for compat-layer work,
issue findings, contract-probe backlog, and the decision matrix. It defaults to
the OpenClaw checkout configured in `crabpot.config.json` and can be pointed
elsewhere:

```bash
node scripts/generate-report.mjs --openclaw ../openclaw
node scripts/generate-report.mjs --check --openclaw ../openclaw
```

The capture report is the lower-level inspector backlog. It records every
observed hook, runtime registration, SDK import, and OpenClaw package entrypoint
with the assertions a future capture runner must execute.

The cold-import readiness report classifies each package OpenClaw entrypoint as
ready or blocked by TypeScript loader support, missing build output, missing
entrypoint metadata, dependency installation, side-effect review, or SDK alias
compatibility.

The workspace plan is still plan-only by default. It lays out the isolated copy,
dependency install, build, and capture commands for each entrypoint. Actual
execution must be opt-in with `CRABPOT_EXECUTE_ISOLATED=1`.

## Fixture policy

Fixtures should earn their spot by covering a distinct seam. Popularity is a
useful signal, but a small plugin that exercises a rare hook is more valuable
than the fourth web-search wrapper.

The first fixture set intentionally covers channels, dynamic tools, LLM
observation, diagnostics, gateway-owned services, async jobs, provider
capabilities, and security/policy hooks.
