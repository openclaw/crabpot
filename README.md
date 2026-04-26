# crabpot

Compatibility trap for OpenClaw plugin contracts.

`crabpot` keeps a curated set of real community plugins pinned under `plugins/`
and runs seam-focused compatibility checks against OpenClaw plugin APIs. The goal
is to catch contract drift before external plugin authors do.


<!-- crabpot-summary:start -->
## Dashboard

Last dashboard update: Apr 26, 2026, 02:20 UTC

State: PASS

Mode: check

OpenClaw: openclaw/openclaw@main

Run: https://github.com/openclaw/crabpot/actions/runs/24946139651

### Result Grid

| Metric               | Result                                  |
| -------------------- | --------------------------------------- |
| Fixtures             | 21                                      |
| Hard breakages       | 0                                       |
| Warnings             | 42                                      |
| Suggestions          | 69                                      |
| Issues               | 111                                     |
| P0 issues            | 2                                       |
| P1 issues            | 21                                      |
| Live issues          | 2 total / 2 P0                          |
| Compat gaps          | 1                                       |
| Deprecation warnings | 19                                      |
| Inspector gaps       | 73                                      |
| Upstream metadata    | 16                                      |
| Contract probes      | 109                                     |
| Policy failures      | 0                                       |
| Policy warnings      | 3                                       |
| Ref diff failures    | 0                                       |
| Profile failures     | 0                                       |
| Execution probes     | 6 pass / 0 fail / 2 blocked             |
| Synthetic probes     | 118 ready / 0 blocked / 118 total       |
| Cold import          | 0 ready / 24 blocked / 24 entrypoints   |
| Workspace plan       | 24 entrypoints / 14 installs / 7 builds |
| Runtime profile      | p50 231ms / max RSS 70.4MB              |

### Top Discovered Issues

| ID               | Severity | Class         | Fixture          | Code                     | Decision            | Title                                                                               |
| ---------------- | -------- | ------------- | ---------------- | ------------------------ | ------------------- | ----------------------------------------------------------------------------------- |
| CRABPOT-62AC9404 | P0       | live-issue    | codex-app-server | sdk-export-missing       | core-compat-adapter | codex-app-server: plugin SDK import aliases are missing from target package exports |
| CRABPOT-D7817FEA | P0       | live-issue    | hyperspell       | unknown-hook-name        | core-compat-adapter | hyperspell: fixture uses a hook missing from target OpenClaw                        |
| CRABPOT-37E8444D | P1       | inspector-gap | a2a-gateway      | registration-capture-gap | inspector-follow-up | a2a-gateway: runtime registrations need capture before contract judgment            |
| CRABPOT-9D5EE194 | P1       | inspector-gap | clawmetry        | registration-capture-gap | inspector-follow-up | clawmetry: runtime registrations need capture before contract judgment              |
| CRABPOT-6D9E51D9 | P1       | compat-gap    | codex-app-server | missing-compat-record    | core-compat-adapter | codex-app-server: compat-dependent behavior lacks registry coverage                 |
| CRABPOT-45CAC152 | P1       | inspector-gap | codex-app-server | registration-capture-gap | inspector-follow-up | codex-app-server: runtime registrations need capture before contract judgment       |
| CRABPOT-A16D6B91 | P1       | inspector-gap | connectclaw      | registration-capture-gap | inspector-follow-up | connectclaw: runtime registrations need capture before contract judgment            |
| CRABPOT-E8240285 | P1       | inspector-gap | honcho           | conversation-access-hook | inspector-follow-up | honcho: conversation-access hooks need privacy-boundary probes                      |
| CRABPOT-7999B952 | P1       | inspector-gap | honcho           | registration-capture-gap | inspector-follow-up | honcho: runtime registrations need capture before contract judgment                 |
| CRABPOT-6DABAD8C | P1       | inspector-gap | hyperspell       | conversation-access-hook | inspector-follow-up | hyperspell: conversation-access hooks need privacy-boundary probes                  |

### Report Artifacts

| Artifact       | Path                                   |
| -------------- | -------------------------------------- |
| compatibility  | reports/crabpot-report.json            |
| ciSummary      | reports/crabpot-ci-summary.json        |
| synthetic      | reports/crabpot-synthetic-probes.json  |
| coldImport     | reports/crabpot-cold-import.json       |
| workspace      | reports/crabpot-workspace-plan.json    |
| execution      | reports/crabpot-execution-results.json |
| runtimeProfile | reports/crabpot-runtime-profile.json   |
| refDiff        | reports/crabpot-ref-diff.json          |
| profileDiff    | reports/crabpot-profile-diff.json      |
| ciPolicy       | reports/crabpot-ci-policy.json         |
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
| README dashboard refresh from all generated JSON reports | `npm run readme:summary` | `README.md` |

Each Markdown report has a matching JSON file beside it for CI, dashboards, and
future inspector tooling. The JSON is the contract; the Markdown is the review
surface.

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
