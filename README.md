# 🦀 crabpot

<img width="1376" height="768" alt="crabpot" src="https://github.com/user-attachments/assets/79eb0be1-0736-4a78-a62d-cb66ab080c60" />
<p></p>

**Goto: [Latest Published](https://github.com/openclaw/crabpot/tree/main) | [Latest Beta](https://github.com/openclaw/crabpot/tree/crab-beta) | [Main Development](https://github.com/openclaw/crabpot/tree/crab-development)**

**Compatibility trap for OpenClaw plugin contracts.** `crabpot` keeps a curated set of real community plugins pinned under `plugins/` and runs seam-focused compatibility checks against OpenClaw plugin APIs. The goal is to catch contract drift before external plugin authors do. Built on top of `plugin-inspector`, the testing harness for OpenClaw.

## Reporting Data

`main` follows the latest published npm package and npm `latest` plugin artifacts, with bundled OpenClaw fixtures source-packed from the matching checkout. `crab-beta` follows beta npm dist-tags for externalized packages and source-packs bundled fixtures. `crab-development` checks `openclaw/openclaw` main against source-packed official plugin artifacts from that same OpenClaw checkout.
- **Last dashboard update:** Jul 27, 2026, 02:30 UTC
<!-- crabpot-tracks:start -->
- **Source:** `github-default-pin`
- **OpenClaw version:** `2026.7.2`
- **OpenClaw SHA:** `e3eb1121adfb`
- **Dashboard target:** `openclaw/openclaw@e3eb1121adfb + npm latest plugin artifacts`
- **Plugin artifacts:** `npm latest fixture set plus bundled source-packed fixtures`
- **GitHub report run:** [30231676591](https://github.com/openclaw/crabpot/actions/runs/30231676591)
<!-- crabpot-tracks:end -->

<!-- crabpot-summary:start -->
## Dashboard

| Metric                 | Result                                                                                                             |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Fixtures               | 60                                                                                                                 |
| Hard breakages         | 0                                                                                                                  |
| Warnings               | 139                                                                                                                |
| Suggestions            | 258                                                                                                                |
| Issues                 | 397                                                                                                                |
| P0 issues              | [🔴 P0 1](reports/crabpot-issues.md#p0-live-issues)                                                                |
| P1 issues              | [🟠 P1 128](reports/crabpot-issues.md#triage-summary)                                                              |
| Live issues            | 1 total / 1 P0                                                                                                     |
| Compat gaps            | 112                                                                                                                |
| Deprecation warnings   | 45                                                                                                                 |
| Inspector gaps         | 157                                                                                                                |
| Upstream metadata      | 82                                                                                                                 |
| Contract probes        | 275                                                                                                                |
| Policy failures        | 0                                                                                                                  |
| Policy warnings        | 308                                                                                                                |
| Ref diff failures      | 0                                                                                                                  |
| Profile failures       | 0                                                                                                                  |
| Execution probes       | 120 pass / 0 fail / 306 blocked                                                                                    |
| Synthetic probes       | 516 ready / 9 blocked / 525 total                                                                                  |
| Cold import            | 4 ready / 104 blocked / 108 entrypoints                                                                            |
| Workspace plan         | 108 entrypoints / 68 installs / 15 builds                                                                          |
| Platform risks         | 17 Windows / 17 container                                                                                          |
| Jiti loader candidates | 20                                                                                                                 |
| Import loop            | p50 2054ms / p95 2520ms / plugin delta RSS 1MB / plugin delta CPU 1465ms / OpenClaw import 99.3ms / activate 0.3ms |
| Runtime profile        | p50 6747ms / command p95 6828ms / max RSS 438.6MB / 3 samples/command                                              |

### OpenClaw Lifecycle Probe

| Phase                      | p50    | p95    |
| -------------------------- | ------ | ------ |
| Import (`full`)            | 61.9ms | 64.3ms |
| Activate (`full:register`) | 0.1ms  | 0.1ms  |

### Top Discovered Issues

| Severity | Class         | Fixture      | Code                      | Decision            | Title                                                                                                               |
| -------- | ------------- | ------------ | ------------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------- |
| 🔴 P0    | live-issue    | kitchen-sink | unknown-registration-name | core-compat-adapter | [kitchen-sink: fixture calls a registrar missing from target OpenClaw](reports/crabpot-issues.md#p0-live-issues)    |
| 🟠 P1    | compat-gap    | a2a-gateway  | missing-compat-record     | core-compat-adapter | [a2a-gateway: compat-dependent behavior lacks registry coverage](reports/crabpot-issues.md#compat-gaps)             |
| 🟠 P1    | compat-gap    | a2a-gateway  | missing-compat-record     | core-compat-adapter | [a2a-gateway: compat-dependent behavior lacks registry coverage](reports/crabpot-issues.md#compat-gaps)             |
| 🟠 P1    | compat-gap    | agentchat    | missing-compat-record     | core-compat-adapter | [agentchat: compat-dependent behavior lacks registry coverage](reports/crabpot-issues.md#compat-gaps)               |
| 🟠 P1    | compat-gap    | agentchat    | missing-compat-record     | core-compat-adapter | [agentchat: compat-dependent behavior lacks registry coverage](reports/crabpot-issues.md#compat-gaps)               |
| 🟠 P1    | compat-gap    | bluebubbles  | missing-compat-record     | core-compat-adapter | [bluebubbles: compat-dependent behavior lacks registry coverage](reports/crabpot-issues.md#compat-gaps)             |
| 🟠 P1    | inspector-gap | clawmetry    | conversation-access-hook  | inspector-follow-up | [clawmetry: conversation-access hooks need privacy-boundary probes](reports/crabpot-issues.md#inspector-proof-gaps) |
| 🟠 P1    | compat-gap    | clawmetry    | missing-compat-record     | core-compat-adapter | [clawmetry: compat-dependent behavior lacks registry coverage](reports/crabpot-issues.md#compat-gaps)               |
| 🟠 P1    | compat-gap    | clawmetry    | missing-compat-record     | core-compat-adapter | [clawmetry: compat-dependent behavior lacks registry coverage](reports/crabpot-issues.md#compat-gaps)               |
| 🟠 P1    | compat-gap    | clawmetry    | missing-compat-record     | core-compat-adapter | [clawmetry: compat-dependent behavior lacks registry coverage](reports/crabpot-issues.md#compat-gaps)               |
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
| Behavioral eval planning for plugin categories | `npm run eval:behavior` | stdout / `.crabpot/results/behavior/` when executed |
| Boot time and RSS against the target OpenClaw registry surface | `npm run profile` | `reports/crabpot-runtime-profile.md` |
| China and adjacent external plugin monitor candidates | manual live discovery pass | `reports/crabpot-external-plugin-monitor.md` |
| README dashboard refresh from all generated JSON reports | `npm run readme:summary` | `README.md`, `reports/crabpot-dashboard-data.json` |

Each Markdown report has a matching JSON file beside it for CI, dashboards, and
future inspector tooling. The JSON is the contract; the Markdown is the review
surface. `reports/crabpot-dashboard-data.json` is the compact machine-readable
dashboard card used to compare `crab-beta` and `crab-development` against
`main`.

## Behavioral eval POC

Behavior evals are profile-driven, default to a dry plan, and stay
credential-free unless execution is explicitly enabled. The default profile is
the forward LCM tracking gate against latest OpenClaw and latest
`@martian-engineering/lossless-claw`. It verifies recall inside one stable
session-key family after `/lossless rotate`, with the seed pushed behind the
fresh tail so raw transcript replay is not enough to pass:

```bash
npm run eval:behavior
```

Run the recent historical repro target from Discord chatter with:

```bash
npm run eval:behavior -- --profile recent-lcm-2026-5-22 --json
```

The companion quarantine gate installs a synthetic malformed context-engine
plugin, selects it in the active slot, requires the agent turn to continue
through downgrade/default behavior, and tracks the gateway health quarantine
signal as an expected failure until that OpenClaw health contract ships in
`latest`:

```bash
npm run eval:behavior -- --profile forward-context-engine-quarantine-gate
```

Execution is opt-in and isolated. The current POC stages a QA-lab-style mock
model provider, starts an isolated gateway, drives `chat.send` -> `agent.wait`
-> `chat.history`, requires the `/lossless rotate` command response, and checks
the latest assistant response on the recall turn using the same stable session
key:

```bash
CRABPOT_EXECUTE_BEHAVIOR=1 npm run eval:behavior -- --execute --profile recent-lcm-2026-5-22 --runner local --timeout-ms 120000
```

The historical LCM target is intentionally red: `openclaw@2026.5.22` with
`@martian-engineering/lossless-claw@0.11.2` may fail before final recall as a
`behavior-turn-mismatch`, or at final recall with `memory-recall-mismatch`. The
forward LCM target is stricter and only expects the final summary-backed recall
failure until latest OpenClaw plus LCM can recall after rotate from summarized
context rather than raw transcript history. To test a candidate fix, pin a
newer OpenClaw
package while keeping the same LCM plugin and override the expectation:

```bash
CRABPOT_EXECUTE_BEHAVIOR=1 npm run eval:behavior -- --execute --profile forward-lcm-release-gate --openclaw-version 2026.5.26 --plugin npm:@martian-engineering/lossless-claw@0.11.2 --expect must-pass --runner local --timeout-ms 240000
```

Behavior eval execution writes an empty npm user config inside the temp
workspace so local npm policy, such as a `before` cutoff, does not silently move
`latest` back to an older release.

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

## Default Track and HEAD canary

Required CI runs the Default Track suite against the immutable OpenClaw SHA in
`.github/openclaw-default-track.json`. The separately labeled `OpenClaw HEAD
Canary (Advisory)` workflow runs the same suite against OpenClaw `main`, uploads
reports for every platform, and never blocks merges. A missing GitHub tag for
the npm `latest` version is a canary warning, not a required-lane failure. The
required dashboard records metadata from the pinned checkout and never resolves
OpenClaw HEAD or requires a matching upstream release tag.

Promote a green canary SHA with one command, then open the resulting focused PR:

```bash
npm run openclaw:promote -- <40-character-openclaw-sha>
```

The command validates the OpenClaw commit and updates both the SHA and promotion
date. The daily `OpenClaw Default Track Pin Age` workflow fails once that date is
more than 14 days old, prompting another deliberate canary-to-pin promotion.

## Fixture policy

Fixtures should earn their spot by covering a distinct seam. Popularity is a
useful signal, but a small plugin that exercises a rare hook is more valuable
than the fourth web-search wrapper.

The first fixture set intentionally covers channels, dynamic tools, LLM
observation, diagnostics, gateway-owned services, async jobs, provider
capabilities, and security/policy hooks.
