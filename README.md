# 🦀 crabpot

<img width="1376" height="768" alt="crabpot" src="https://github.com/user-attachments/assets/79eb0be1-0736-4a78-a62d-cb66ab080c60" />
<p></p>

**Goto: [Latest Published](https://github.com/openclaw/crabpot/tree/main) | [Latest Beta](https://github.com/openclaw/crabpot/tree/crab-beta) | [Main Development](https://github.com/openclaw/crabpot/tree/crab-development)**

**Compatibility trap for OpenClaw plugin contracts.** `crabpot` keeps a curated set of real community plugins pinned under `plugins/` and runs seam-focused compatibility checks against OpenClaw plugin APIs. The goal is to catch contract drift before external plugin authors do. Built on top of `plugin-inspector`, the testing harness for OpenClaw.

## Reporting Data

`main` follows the latest published npm package and npm `latest` plugin artifacts. `crab-beta` follows beta npm dist-tags. `crab-development` checks `openclaw/openclaw` main against source-packed official plugin artifacts from that same OpenClaw checkout.
- **Last dashboard update:** May 04, 2026, 11:34 UTC
<!-- crabpot-tracks:start -->
- **Source:** `npm-latest`
- **OpenClaw version:** `2026.5.3-1`
- **OpenClaw SHA:** `2eae30e779cb`
- **Dashboard target:** `openclaw@latest + @openclaw/*@latest`
- **Plugin artifacts:** `npm latest fixture set`
- **GitHub report run:** [25316623866](https://github.com/openclaw/crabpot/actions/runs/25316623866)
<!-- crabpot-tracks:end -->

<!-- crabpot-summary:start -->
## Dashboard

| Metric                 | Result                                                                                                           |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------- |
| Fixtures               | 57                                                                                                               |
| Hard breakages         | 0                                                                                                                |
| Warnings               | 170                                                                                                              |
| Suggestions            | 158                                                                                                              |
| Issues                 | 328                                                                                                              |
| P0 issues              | [🔴 P0 24](reports/crabpot-issues.md#p0-live-issues)                                                             |
| P1 issues              | [🟠 P1 38](reports/crabpot-issues.md#triage-summary)                                                             |
| Live issues            | 24 total / 24 P0                                                                                                 |
| Compat gaps            | 2                                                                                                                |
| Deprecation warnings   | 40                                                                                                               |
| Inspector gaps         | 164                                                                                                              |
| Upstream metadata      | 98                                                                                                               |
| Contract probes        | 322                                                                                                              |
| Policy failures        | 0                                                                                                                |
| Policy warnings        | 20                                                                                                               |
| Ref diff failures      | 0                                                                                                                |
| Profile failures       | 0                                                                                                                |
| Execution probes       | 12 pass / 0 fail / 18 blocked                                                                                    |
| Synthetic probes       | 411 ready / 0 blocked / 411 total                                                                                |
| Cold import            | 6 ready / 95 blocked / 101 entrypoints                                                                           |
| Workspace plan         | 101 entrypoints / 40 installs / 11 builds                                                                        |
| Platform risks         | 14 Windows / 14 container                                                                                        |
| Jiti loader candidates | 23                                                                                                               |
| Import loop            | p50 1738ms / p95 1754ms / plugin delta RSS 0MB / plugin delta CPU 28ms / OpenClaw import 41.6ms / activate 0.2ms |
| Runtime profile        | p50 1672ms / command p95 1726ms / max RSS 438.1MB / 3 samples/command                                            |

### OpenClaw Lifecycle Probe

| Phase                      | p50    | p95    |
| -------------------------- | ------ | ------ |
| Import (`full`)            | 41.6ms | 44.5ms |
| Activate (`full:register`) | 0.2ms  | 0.3ms  |

### Top Discovered Issues

| Severity | Class      | Fixture                | Code                       | Decision            | Title                                                                                                                    |
| -------- | ---------- | ---------------------- | -------------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| 🔴 P0    | live-issue | bluebubbles            | package-entrypoint-missing | plugin-upstream-fix | [bluebubbles: OpenClaw package entrypoint is missing](reports/crabpot-issues.md#p0-live-issues)                          |
| 🔴 P0    | live-issue | brave-plugin           | package-entrypoint-missing | plugin-upstream-fix | [brave-plugin: OpenClaw package entrypoint is missing](reports/crabpot-issues.md#p0-live-issues)                         |
| 🔴 P0    | live-issue | clawmetry              | sdk-export-missing         | core-compat-adapter | [clawmetry: plugin SDK import aliases are missing from target package exports](reports/crabpot-issues.md#p0-live-issues) |
| 🔴 P0    | live-issue | codex                  | package-entrypoint-missing | plugin-upstream-fix | [codex: OpenClaw package entrypoint is missing](reports/crabpot-issues.md#p0-live-issues)                                |
| 🔴 P0    | live-issue | diagnostics-otel       | package-entrypoint-missing | plugin-upstream-fix | [diagnostics-otel: OpenClaw package entrypoint is missing](reports/crabpot-issues.md#p0-live-issues)                     |
| 🔴 P0    | live-issue | diagnostics-prometheus | package-entrypoint-missing | plugin-upstream-fix | [diagnostics-prometheus: OpenClaw package entrypoint is missing](reports/crabpot-issues.md#p0-live-issues)               |
| 🔴 P0    | live-issue | diffs                  | package-entrypoint-missing | plugin-upstream-fix | [diffs: OpenClaw package entrypoint is missing](reports/crabpot-issues.md#p0-live-issues)                                |
| 🔴 P0    | live-issue | discord                | package-entrypoint-missing | plugin-upstream-fix | [discord: OpenClaw package entrypoint is missing](reports/crabpot-issues.md#p0-live-issues)                              |
| 🔴 P0    | live-issue | feishu                 | package-entrypoint-missing | plugin-upstream-fix | [feishu: OpenClaw package entrypoint is missing](reports/crabpot-issues.md#p0-live-issues)                               |
| 🔴 P0    | live-issue | google-meet            | package-entrypoint-missing | plugin-upstream-fix | [google-meet: OpenClaw package entrypoint is missing](reports/crabpot-issues.md#p0-live-issues)                          |
<!-- crabpot-summary:end -->
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
npm run contract:synthetic
npm run cold-import
npm run workspace:plan
npm run platform:probes
npm run import:profile
npm run execution:report
npm run profile
npm run contract:coverage
npm run readme:summary
```

To materialize the fixture repos as submodules:

```bash
node scripts/sync-fixtures.mjs --materialize
git submodule update --init --recursive
```

That command mutates `.gitmodules` and `plugins/*`. Commit those changes when
you intentionally pin or update fixture revisions.

## Compatibility report

Start with the dashboard at the top of this README. It is the condensed view of
the generated reports: fixture count, breakages, warnings, issue backlog, probe
coverage, cold-import blockers, workspace execution shape, and runtime profile.

For deeper review, open the reports in this order:

| Need | Command | Primary report |
| --- | --- | --- |
| Main compatibility triage, decision matrix, issue backlog | `npm run report` | `reports/crabpot-report.md` |
| Stable issue list for compat-layer planning | `npm run report` | `reports/crabpot-issues.md` |
| Hooks, registrars, SDK imports, and entrypoints that need capture | `npm run contract:capture` | `reports/crabpot-capture.md` |
| Executable synthetic hook/registration probe plan | `npm run contract:synthetic` | `reports/crabpot-synthetic-probes.md` |
| Why plugin entrypoints cannot be safely cold-imported yet | `npm run cold-import` | `reports/crabpot-cold-import.md` |
| Isolated install/build/capture commands Crabpot would run | `npm run workspace:plan` | `reports/crabpot-workspace-plan.md` |
| Results from opt-in isolated fixture execution | `npm run execution:report` | `reports/crabpot-execution-results.md` |
| Boot time and RSS against the target OpenClaw registry surface | `npm run profile` | `reports/crabpot-runtime-profile.md` |
| README dashboard refresh from all generated JSON reports | `npm run readme:summary` | `README.md`, `reports/crabpot-dashboard-data.json` |

Each Markdown report has a matching JSON file beside it for CI, dashboards, and
future inspector tooling. The JSON is the contract; the Markdown is the review
surface. `reports/crabpot-dashboard-data.json` is the compact machine-readable
dashboard card used to compare `crab-beta` and `crab-development` against
`main`.

Use the main compatibility report like this:

| Section | What to do with it |
| --- | --- |
| Hard Breakages | Treat as release-blocking contract drift. |
| Warnings | Review for target OpenClaw compatibility gaps or plugin metadata drift. |
| Suggestions To OpenClaw Compat Layer | Convert into compat-layer work, inspector follow-ups, or upstream plugin requests. |
| Issue Findings | Use stable `CRABPOT-*` ids for tracking and comparison across runs. |
| Contract Probe Backlog | Turn into tests before changing a plugin-facing seam. |
| Decision Matrix | Decide whether the fix belongs in core compat, the future inspector, or the plugin upstream. |

By default, reports target the OpenClaw checkout configured in
`crabpot.config.json`. Point a run at a branch, tag, SHA checkout, or local fork
with `--openclaw`:

```bash
node scripts/generate-report.mjs --openclaw ../openclaw
node scripts/generate-report.mjs --check --openclaw ../openclaw
```

Crabpot does not execute third-party plugin code during default checks. The
workspace plan is dry planning unless you explicitly opt into isolated execution.
Preview a fixture lane first:

```bash
npm run workspace:execute -- --fixture wecom --dry-run
```

Then run isolated execution only when you want install/build/import side effects
inside Crabpot's generated workspace:

```bash
CRABPOT_EXECUTE_ISOLATED=1 npm run workspace:execute -- --fixture wecom
npm run execution:report
```

## Manual OpenClaw ref CI

The `OpenClaw Ref Compatibility` workflow can be run from GitHub Actions with
an OpenClaw branch, tag, or SHA. Set `openclaw_repository` when testing a fork,
and `openclaw_ref` to the exact ref under review.

The default job runs the static contract suite against that checkout and uploads
the generated reports. The optional isolated job runs one fixture lane when
`run_isolated_fixture` is enabled and `fixture` is set, then uploads
`.crabpot/results/` plus the execution summary report.

## Fixture policy

Fixtures should earn their spot by covering a distinct seam. Popularity is a
useful signal, but a small plugin that exercises a rare hook is more valuable
than the fourth web-search wrapper.

The first fixture set intentionally covers channels, dynamic tools, LLM
observation, diagnostics, gateway-owned services, async jobs, provider
capabilities, and security/policy hooks.
