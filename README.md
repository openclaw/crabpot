# 🦀 crabpot

<img width="1376" height="768" alt="crabpot" src="https://github.com/user-attachments/assets/79eb0be1-0736-4a78-a62d-cb66ab080c60" />
<p></p>

**Goto: [Latest Published](https://github.com/openclaw/crabpot/tree/main) | [Latest Beta](https://github.com/openclaw/crabpot/tree/crab-beta) | [Main Development](https://github.com/openclaw/crabpot/tree/crab-development)**

**Compatibility trap for OpenClaw plugin contracts.** `crabpot` keeps a curated set of real community plugins pinned under `plugins/` and runs seam-focused compatibility checks against OpenClaw plugin APIs. The goal is to catch contract drift before external plugin authors do. Built on top of `plugin-inspector`, the testing harness for OpenClaw.

## Reporting Data

`main` follows the latest published npm package and npm `latest` plugin artifacts, with bundled OpenClaw fixtures source-packed from the matching checkout. `crab-beta` follows beta npm dist-tags for externalized packages and source-packs bundled fixtures. `crab-development` checks `openclaw/openclaw` main against source-packed official plugin artifacts from that same OpenClaw checkout.
- **Last dashboard update:** May 16, 2026, 16:57 UTC
<!-- crabpot-tracks:start -->
- **Source:** `github-main`
- **OpenClaw version:** `2026.5.17`
- **OpenClaw SHA:** `a3e7fc7de7b8`
- **Dashboard target:** `openclaw/openclaw@main + source-packed @openclaw/*`
- **Plugin artifacts:** `source-packed from OpenClaw checkout`
- **GitHub report run:** [25967620376](https://github.com/openclaw/crabpot/actions/runs/25967620376)
<!-- crabpot-tracks:end -->

<!-- crabpot-summary:start -->
## Dashboard

| Metric                 | Result                                                                                                                                                                                                                                                                   |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Fixtures               | 8<br><em>-52 vs main</em>                                                                                                                                                                                                                                                |
| Hard breakages         | 0<br><em>0 vs main</em>                                                                                                                                                                                                                                                  |
| Warnings               | 18<br><em>-110 vs main</em>                                                                                                                                                                                                                                              |
| Suggestions            | 20<br><em>-135 vs main</em>                                                                                                                                                                                                                                              |
| Issues                 | 38<br><em>-245 vs main</em>                                                                                                                                                                                                                                              |
| P0 issues              | [🔴 P0 0](reports/crabpot-issues.md#p0-live-issues)<br><em>-1 vs main</em>                                                                                                                                                                                               |
| P1 issues              | [🟠 P1 2](reports/crabpot-issues.md#triage-summary)<br><em>-14 vs main</em>                                                                                                                                                                                              |
| Live issues            | 0 total<br><em>-1 vs main</em> / 0 P0<br><em>-1 vs main</em>                                                                                                                                                                                                             |
| Compat gaps            | 0<br><em>0 vs main</em>                                                                                                                                                                                                                                                  |
| Deprecation warnings   | 2<br><em>-40 vs main</em>                                                                                                                                                                                                                                                |
| Inspector gaps         | 21<br><em>-143 vs main</em>                                                                                                                                                                                                                                              |
| Upstream metadata      | 15<br><em>-61 vs main</em>                                                                                                                                                                                                                                               |
| Contract probes        | 38<br><em>-240 vs main</em>                                                                                                                                                                                                                                              |
| Policy failures        | 0<br><em>0 vs main</em>                                                                                                                                                                                                                                                  |
| Policy warnings        | 33<br><em>-275 vs main</em>                                                                                                                                                                                                                                              |
| Ref diff failures      | 0<br><em>0 vs main</em>                                                                                                                                                                                                                                                  |
| Profile failures       | 0<br><em>0 vs main</em>                                                                                                                                                                                                                                                  |
| Execution probes       | 10 pass<br><em>-110 vs main</em> / 0 fail<br><em>0 vs main</em> / 33 blocked<br><em>-273 vs main</em>                                                                                                                                                                    |
| Synthetic probes       | 54 ready<br><em>-389 vs main</em> / 0 blocked<br><em>0 vs main</em> / 54 total<br><em>-389 vs main</em>                                                                                                                                                                  |
| Cold import            | 0 ready<br><em>-7 vs main</em> / 10 blocked<br><em>-90 vs main</em> / 10 entrypoints<br><em>-97 vs main</em>                                                                                                                                                             |
| Workspace plan         | 10 entrypoints<br><em>-97 vs main</em> / 8 installs<br><em>-35 vs main</em> / 0 builds<br><em>-12 vs main</em>                                                                                                                                                           |
| Platform risks         | 0 Windows<br><em>-16 vs main</em> / 0 container<br><em>-16 vs main</em>                                                                                                                                                                                                  |
| Jiti loader candidates | 10<br><em>-13 vs main</em>                                                                                                                                                                                                                                               |
| Import loop            | p50 1613ms<br><em>+259 vs main</em> / p95 1618ms<br><em>+261 vs main</em> / plugin delta RSS 2.9MB<br><em>-10.2 vs main</em> / plugin delta CPU 68ms<br><em>+68 vs main</em> / OpenClaw import 86.5ms<br><em>-1.8 vs main</em> / activate 0.4ms<br><em>+0.1 vs main</em> |
| Runtime profile        | p50 1410ms<br><em>-788 vs main</em> / command p95 1437ms<br><em>-816 vs main</em> / max RSS 437.6MB<br><em>-16.8 vs main</em> / 3 samples/command                                                                                                                        |

### OpenClaw Lifecycle Probe

| Phase                      | p50                             | p95                            |
| -------------------------- | ------------------------------- | ------------------------------ |
| Import (`full`)            | 86.5ms<br><em>-1.8 vs main</em> | 88ms<br><em>-5.4 vs main</em>  |
| Activate (`full:register`) | 0.4ms<br><em>+0.1 vs main</em>  | 0.4ms<br><em>-0.1 vs main</em> |

### Top Discovered Issues

| Severity | Class             | Fixture        | Code                     | Decision            | Title                                                                                                                          |
| -------- | ----------------- | -------------- | ------------------------ | ------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| 🟠 P1    | upstream-metadata | codex          | reserved-sdk-import      | plugin-upstream-fix | [codex: plugin imports reserved bundled-plugin SDK compatibility subpaths](reports/crabpot-issues.md#upstream-metadata-issues) |
| 🟠 P1    | inspector-gap     | memory-lancedb | conversation-access-hook | inspector-follow-up | [memory-lancedb: conversation-access hooks need privacy-boundary probes](reports/crabpot-issues.md#inspector-proof-gaps)       |
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
| China and adjacent external plugin monitor candidates | manual live discovery pass | `reports/crabpot-external-plugin-monitor.md` |
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
