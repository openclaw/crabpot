# crabpot

Compatibility trap for OpenClaw plugin contracts.

`crabpot` keeps a curated set of real community plugins pinned under `plugins/`
and runs seam-focused compatibility checks against OpenClaw plugin APIs. The goal
is to catch contract drift before external plugin authors do.


<!-- crabpot-summary:start -->
## Dashboard

Last dashboard update: Apr 26, 2026, 00:44 UTC

State: PASS

Mode: local

OpenClaw: ../openclaw

### Result Grid

| Metric            | Result                                  |
| ----------------- | --------------------------------------- |
| Fixtures          | 13                                      |
| Hard breakages    | 0                                       |
| Warnings          | 20                                      |
| Suggestions       | 44                                      |
| Issues            | 64                                      |
| P1 issues         | 13                                      |
| Contract probes   | 63                                      |
| Policy failures   | 0                                       |
| Policy warnings   | 2                                       |
| Ref diff failures | 0                                       |
| Profile failures  | 0                                       |
| Execution probes  | 6 pass / 0 fail / 2 blocked             |
| Synthetic probes  | 53 ready / 0 blocked / 53 total         |
| Cold import       | 0 ready / 16 blocked / 16 entrypoints   |
| Workspace plan    | 16 entrypoints / 11 installs / 4 builds |
| Runtime profile   | p50 309ms / max RSS 66.7MB              |

### Top Discovered Issues

| ID               | Severity | Fixture           | Code                     | Decision            | Title                                                                               |
| ---------------- | -------- | ----------------- | ------------------------ | ------------------- | ----------------------------------------------------------------------------------- |
| CRABPOT-37E8444D | P1       | a2a-gateway       | registration-capture-gap | inspector-follow-up | a2a-gateway: runtime registrations need capture before contract judgment            |
| CRABPOT-9D5EE194 | P1       | clawmetry         | registration-capture-gap | inspector-follow-up | clawmetry: runtime registrations need capture before contract judgment              |
| CRABPOT-6D9E51D9 | P1       | codex-app-server  | missing-compat-record    | core-compat-adapter | codex-app-server: compat-dependent behavior lacks registry coverage                 |
| CRABPOT-45CAC152 | P1       | codex-app-server  | registration-capture-gap | inspector-follow-up | codex-app-server: runtime registrations need capture before contract judgment       |
| CRABPOT-C2331427 | P1       | codex-app-server  | sdk-export-missing       | core-compat-adapter | codex-app-server: plugin SDK import aliases are missing from target package exports |
| CRABPOT-A16D6B91 | P1       | connectclaw       | registration-capture-gap | inspector-follow-up | connectclaw: runtime registrations need capture before contract judgment            |
| CRABPOT-D71B126E | P1       | llm-trace-phoenix | conversation-access-hook | inspector-follow-up | llm-trace-phoenix: conversation-access hooks need privacy-boundary probes           |
| CRABPOT-B91192E5 | P1       | mcp-adapter       | registration-capture-gap | inspector-follow-up | mcp-adapter: runtime registrations need capture before contract judgment            |
| CRABPOT-EE3B527C | P1       | opik-openclaw     | before-tool-call-probe   | inspector-follow-up | opik-openclaw: before_tool_call needs terminal/block/approval probes                |
| CRABPOT-6FC4ED08 | P1       | opik-openclaw     | conversation-access-hook | inspector-follow-up | opik-openclaw: conversation-access hooks need privacy-boundary probes               |

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
