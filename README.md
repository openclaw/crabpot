# 🦀 crabpot

<img width="1376" height="768" alt="crabpot" src="https://github.com/user-attachments/assets/79eb0be1-0736-4a78-a62d-cb66ab080c60" />
<p></p>

**Goto: [Latest Published](https://github.com/openclaw/crabpot/tree/main) | [Latest Beta](https://github.com/openclaw/crabpot/tree/crab-beta) | [Main Development](https://github.com/openclaw/crabpot/tree/crab-development)**

**Compatibility trap for OpenClaw plugin contracts.** `crabpot` keeps a curated set of real community plugins pinned under `plugins/` and runs seam-focused compatibility checks against OpenClaw plugin APIs. The goal is to catch contract drift before external plugin authors do. Built on top of `plugin-inspector`, the testing harness for OpenClaw.

## Reporting Data

`main` follows a promoted green OpenClaw source pin plus npm `latest` plugin artifacts, with bundled fixtures source-packed from that pinned checkout. `crab-beta` follows beta npm dist-tags for externalized packages and source-packs bundled fixtures. `crab-development` checks `openclaw/openclaw` main against source-packed official plugin artifacts from that same OpenClaw checkout.
- **Last dashboard update:** Sep 22, 2026, 22:36 UTC
<!-- crabpot-tracks:start -->
- **Source:** `github-default-pin`
- **OpenClaw version:** `2026.9.3`
- **OpenClaw SHA:** `d9b899649800`
- **Dashboard target:** `openclaw/openclaw@d9b899649800 + npm latest plugin artifacts`
- **Plugin artifacts:** `npm latest fixture set plus bundled source-packed fixtures`
- **GitHub report run:** [35790419357](https://github.com/openclaw/crabpot/actions/runs/35790419357)
<!-- crabpot-tracks:end -->

<!-- crabpot-summary:start -->
## Dashboard

| Metric                 | Result                                                                                                        |
| ---------------------- | ------------------------------------------------------------------------------------------------------------- |
| Fixtures               | 59                                                                                                            |
| Hard breakages         | 0                                                                                                             |
| Warnings               | 104                                                                                                           |
| Suggestions            | 165                                                                                                           |
| Issues                 | 269                                                                                                           |
| P0 issues              | [🔴 P0 7](reports/crabpot-issues.md#p0-live-issues)                                                           |
| P1 issues              | [🟠 P1 34](reports/crabpot-issues.md#triage-summary)                                                          |
| Live issues            | 7 total / 7 P0                                                                                                |
| Compat gaps            | 28                                                                                                            |
| Deprecation warnings   | 22                                                                                                            |
| Inspector gaps         | 148                                                                                                           |
| Upstream metadata      | 64                                                                                                            |
| Contract probes        | 237                                                                                                           |
| Policy failures        | 0                                                                                                             |
| Policy warnings        | 1                                                                                                             |
| Ref diff failures      | 0                                                                                                             |
| Profile failures       | 0                                                                                                             |
| Execution probes       | 0 pass / 0 fail / 0 blocked                                                                                   |
| Synthetic probes       | 506 ready / 10 blocked / 516 total                                                                            |
| Cold import            | 5 ready / 114 blocked / 119 entrypoints                                                                       |
| Workspace plan         | 119 entrypoints / 79 installs / 15 builds                                                                     |
| Platform risks         | 17 Windows / 17 container                                                                                     |
| Jiti loader candidates | 20                                                                                                            |
| Import loop            | p50 2977ms / p95 3022ms / plugin delta RSS 0MB / plugin delta CPU 0ms / OpenClaw import 61ms / activate 0.5ms |
| Runtime profile        | p50 0ms / command p95 0ms / max RSS n/a / 1 sample/command                                                    |

### OpenClaw Lifecycle Probe

| Phase                      | p50   | p95    |
| -------------------------- | ----- | ------ |
| Import (`full`)            | 61ms  | 61.3ms |
| Activate (`full:register`) | 0.5ms | 0.5ms  |

### Top Discovered Issues

| Severity | Class      | Fixture            | Code                      | Decision            | Title                                                                                                                   |
| -------- | ---------- | ------------------ | ------------------------- | ------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| 🔴 P0    | live-issue | aiwerk-mcp-bridge  | unknown-hook-name         | core-compat-adapter | [aiwerk-mcp-bridge: fixture uses a hook missing from target OpenClaw](reports/crabpot-issues.md#p0-live-issues)         |
| 🔴 P0    | live-issue | connectclaw        | unknown-hook-name         | core-compat-adapter | [connectclaw: fixture uses a hook missing from target OpenClaw](reports/crabpot-issues.md#p0-live-issues)               |
| 🔴 P0    | live-issue | honcho             | unknown-hook-name         | core-compat-adapter | [honcho: fixture uses a hook missing from target OpenClaw](reports/crabpot-issues.md#p0-live-issues)                    |
| 🔴 P0    | live-issue | honcho             | unknown-registration-name | core-compat-adapter | [honcho: fixture calls a registrar missing from target OpenClaw](reports/crabpot-issues.md#p0-live-issues)              |
| 🔴 P0    | live-issue | memos-cloud        | unknown-hook-name         | core-compat-adapter | [memos-cloud: fixture uses a hook missing from target OpenClaw](reports/crabpot-issues.md#p0-live-issues)               |
| 🔴 P0    | live-issue | openclaw-telemetry | unknown-hook-name         | core-compat-adapter | [openclaw-telemetry: fixture uses a hook missing from target OpenClaw](reports/crabpot-issues.md#p0-live-issues)        |
| 🔴 P0    | live-issue | opik-openclaw      | unknown-hook-name         | core-compat-adapter | [opik-openclaw: fixture uses a hook missing from target OpenClaw](reports/crabpot-issues.md#p0-live-issues)             |
| 🟠 P1    | compat-gap | agentchat          | missing-compat-record     | core-compat-adapter | [agentchat: compat-dependent behavior lacks registry coverage](reports/crabpot-issues.md#compat-gaps)                   |
| 🟠 P1    | compat-gap | bluebubbles        | sdk-export-missing        | core-compat-adapter | [bluebubbles: plugin SDK import aliases are missing from target package exports](reports/crabpot-issues.md#compat-gaps) |
| 🟠 P1    | compat-gap | connectclaw        | missing-compat-record     | core-compat-adapter | [connectclaw: compat-dependent behavior lacks registry coverage](reports/crabpot-issues.md#compat-gaps)                 |
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

### Gateway probe prerequisites

Fixture `execution.gatewayMethodPrerequisites` entries name the exact Gateway
methods that require host state or live credentials. Synthetic runs record those
methods as blocked before invoking them; they do not turn rejected responses
into passes. Status methods without those prerequisites still execute. Each
allowed blocker has a named follow-up in `crabpot.ci-policy.json`. Matrix recovery,
bootstrap, and verification status require a configured account and crypto runtime;
other Matrix methods keep their normal response checks. Voice Call declares its
nine methods individually: runtime/provider setup, active call input, or a pending
continuation operation must exist before the corresponding probe can run.

Programmatic callers supplying isolated inputs and runtime can pass an explicit
`gatewayMethodPrerequisites` map to the synthetic runner. Omit satisfied methods
from that map; an empty map exercises every method with normal response checks.

### Inspector command limits

Inspector smoke and generated-surface commands default to 10 minutes. Inspector
checkout Git and npm commands and fixture-security npm audits default to 2 minutes. Set
`CRABPOT_PLUGIN_INSPECTOR_TIMEOUT_MS`, `CRABPOT_GIT_TIMEOUT_MS`, or
`CRABPOT_NPM_TIMEOUT_MS` to a decimal integer from 1 through 2147483647;
zero, fractions, trailing text, and infinite timeouts are rejected.

Static-suite steps default to 10 minutes when `CRABPOT_STATIC_STEP_TIMEOUT_MS`
is unset or empty. Nonempty settings use the same decimal-integer range and
reject malformed values before starting a step.

Commands remain synchronous to callers, with a separate bounded supervisor for
startup, execution, output, and descendant cleanup. Captured checkout and
generated-surface output retains the 1 MiB combined stdout/stderr limit. Smoke
output streams through inherited native descriptors without a total-output cap.
Fixture-security audits retain a 16 MiB combined capture limit.

The first command error is preserved when cleanup also fails. Unconfirmed
cleanup adds `cleanupError` to the result and `; command cleanup was not confirmed`
to the error message; it is never reported as success. On POSIX, an unexpected
supervisor Worker loss can leave descendants alive. The caller does not signal
a cached process-group number after losing its owner. Permission errors are
not proof of process-group extinction.

Windows requires 64-bit Windows 10/Server 2016 or newer and Windows PowerShell:
commands enter their private Job at creation, and setup failures never fall back
to uncontained execution. A separate helper Job contains bootstrap compiler
children too. Native Git runs directly; only batch commands use `cmd.exe`.
Windows Jobs retain owner-loss cleanup independently of the Worker.
This process ownership is not a sandbox for hostile plugin code.

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

### Plugin resource coverage

#### Report-only campaign runner

`scripts/run-resource-campaign.mjs` runs every configured `resourceWorkloads`
scenario sequentially, with 1–10 repetitions (default 3). Run it from the frozen
built OpenClaw root inside an already isolated runner:

```bash
node /crabpot/scripts/run-resource-campaign.mjs \
  --plugin-inventory /fixtures/inventory.json --inputs /fixtures/inputs.json \
  --out /out/campaign-1 --repetitions 3 --execute
```

The output directory must not exist; its parent must exist. Omit `--execute`
to enumerate the full inventory without importing adapters or starting hosts.
This command does not build, download, provision isolation, configure credentials
or install campaign prerequisites. The workload adapter still owns native local
plugin installation. Prepare its archives and offline dependency cache first.
The outer runner must enforce a minimal environment, network/resource limits and
a deadline, then stop and join the whole sandbox on interruption or failure.

The required input-pins JSON has this shape (replace placeholders with real
identities; do not copy the sample hashes):

```json
{
  "schemaVersion": 1,
  "hostCommit": "<full inventory/build commit>",
  "runtime": { "node": "<exact process.version>", "platform": "linux", "arch": "x64" },
  "files": {
    "host": { "openclaw.mjs": "<sha256>", "dist/build-info.json": "<sha256>" },
    "crabpot": { "crabpot.config.json": "<sha256>" }
  },
  "artifacts": [{ "path": "/fixtures/plugin.tgz", "sha256": "<sha256>" }]
}
```

The abbreviated maps must also pin all four host instrumentation files:
`scripts/e2e/kitchen-sink-rpc-walk.mts`,
`scripts/e2e/lib/kitchen-sink-resources.mts`,
`scripts/lib/gateway-bench-profile.ts`, and
`scripts/lib/gateway-bench-profile-preload.ts`. The Crabpot map must include
`scripts/run-resource-campaign.mjs`, `scripts/run-resource-workload.mjs`,
`scripts/resource-workload-contract.mjs`, `scripts/resource-coverage.mjs`,
`scripts/manifest-lib.mjs` and every available configured adapter. Paths in these
maps are relative to their respective roots. Pin the actual built entry
(`openclaw.mjs`, `dist/index.mjs` or `dist/index.js`). Additional files may be
pinned. Use an empty artifacts array for bundled-only scenarios. This verifies
declared local bytes, not the entire build or dependency closure; freeze those
inputs in the outer runner. Runtime, files and archives are checked before and
after each invocation, and producer receipt hashes must agree.
Each receipt must match the requested scenario and the pinned Gateway runtime.
The Node version comparison accounts only for `process.version`'s leading `v`;
Gateway snapshots use `process.versions.node` without that prefix.

`campaign.json` checkpoints one full-inventory outcome table per repetition;
`repetition-N/<scenario>.json` retains each returned raw receipt before validation.
Configured-but-unrun scenarios are blocked. Absent adapters, missing dependencies
and configured IDs outside the inventory remain explicit gaps; unrelated plugins
are unsupported, never healthy. Multiple scenarios for one plugin are rejected.
Pass one repetition's validated receipts to the existing coverage report; never
combine duplicate plugin receipts across repetitions as additional coverage.

A blocked, failed, invalid or thrown execution stops admission of subsequent work. Later
rows remain blocked and earlier receipts survive. An interrupted run retains its
last checkpoint, including `execution-in-progress`; that is not completion or
cleanup proof. An executed campaign exits nonzero for failures or configured
blocked work. Unsupported rows do not fail the command. `complete` means all
configured work completed, not that every inventory plugin was measured.
Failures retain their stage (`preverify`, `run`, `receipt-write`,
`receipt-validation` or `postverify`), a recognized error type/code and bounded,
path-redacted validation context. Arbitrary runner exception text, stacks and
assertion payloads are omitted; raw workload receipts remain separate evidence.
CPU/memory observations remain report-only: no resource thresholds, leak verdicts,
automatic retries, cross-run aggregation, calibration execution or CI scheduling
are added. Supply separately qualified calibration with matching frozen inputs.

Add a committed OpenClaw plugin inventory to the existing report:

```bash
# In the OpenClaw source checkout, using the commit of the measured Gateway:
pnpm --silent plugins:inventory:json --commit <full-commit-sha> > plugin-inventory.json

# In Crabpot, with explicit paths to the exported inventory and optional pilot:
npm run report -- --plugin-inventory <plugin-inventory.json> \
  --kitchen-sink-resource-report <kitchen-sink-resource.json>
```

The inventory command requires an OpenClaw revision that provides
`plugins:inventory:json`. The optional pilot is the existing OpenClaw
`--resource-profile` Kitchen Sink report, not a collector or import report.
Resource inputs stay separate from `--execution-results`.

JSON and Markdown show the full source inventory independently of Crabpot's
configured and selected compatibility fixtures. Plugins without workload
adapters are explicitly `unsupported`. Configured workloads without a supplied
receipt are `blocked` with reason `workload-report-not-supplied`; this does not
infer whether they ran or why a receipt is missing. Supplied receipts retain
their validated outcomes. Imports, registration captures, and collector checks
receive no workload credit. Kitchen Sink calibration appears
outside that denominator. Failed receipts retain partial counts and errors;
a different Gateway source commit blocks calibration for the selected inventory.

The reader validates inventory integrity and producer-reported identities. It
does not independently attest artifact bytes, infer leaks from RSS, or upgrade
unsupported disposal observations. These options leave default compatibility
reports unchanged and add no performance budget gate.

Workload adapters live in `scripts/resource-workloads/`; their scenario IDs and
required completion counts live in `crabpot.config.json` under `resourceWorkloads`.
They exercise the real built Gateway through OpenClaw's source-checkout
`runResourceGatewayCase` helper. An OpenClaw revision containing that helper and
Linux Node with `process.threadCpuUsage()` are required. Missing prerequisites
produce a blocked receipt, never plugin coverage.

Prepare a container with one frozen built OpenClaw checkout, this Crabpot
checkout, and the matching inventory. Run from the OpenClaw checkout root:

```bash
node /crabpot/scripts/run-resource-workload.mjs \
  --scenario workboard-card-crud-v1 --plugin-inventory /fixtures/inventory.json \
  --out /out/workboard.json --execute
```

Omit `--execute` for a plan without starting a Gateway. The runner must enforce
network isolation, CPU/memory limits and an outer deadline, then stop and join
the **whole container** on failure. Killing only this script can leave the
Gateway's separate process group alive. A temporary HOME alone is not isolation.

Workboard uses its real SQLite worker: one first CRUD cycle and 20 warm cycles,
each asserting create/update/list/delete/list results and an empty final store.
The first cycle follows an initial empty-store read; it does not measure first
database activation. No cards can dispatch agent work. Each case also measures
startup, idle and 20 neutral RPCs against an empty-host baseline. Main-isolate
heap/thread CPU excludes the SQLite worker; process CPU/RSS includes it. Short
windows do not establish periodic-service cost or disposal retention.

Beam's `beam-receiver-cycle-v1` uses one HTTP upload and four catalog RPCs per
cycle. It verifies the stored two-message transcript, archives the snapshot and
checks that the catalog is empty. One first cycle and 20 warm cycles stay below
the receiver's normal rate limit. Mirroring is unconfigured; this does not cover
remote publishing, continuation, expiry or concurrent uploads. Select this
scenario with the same command and a separate output receipt.

Add the receipt to the existing report from the Crabpot checkout:

```bash
npm run report -- --plugin-inventory /fixtures/inventory.json \
  --resource-workload-report /out/workboard.json
```

Repeat the option for distinct plugins. Same-plugin repetitions belong in
separate reports. Credit requires complete raw snapshots, matching derived
measurements, configured completion counts, identical host artifacts, the
expected active plugin and joined shutdown without forced termination. Failed
receipts preserve partial work. Plugins without configured adapters remain
`unsupported`; configured workloads without receipts remain `blocked`.

Adapters that need a dependency plugin and a matched workload control declare
`pairedWorkload` alongside `requiredOperations`:

```json
"pairedWorkload": {
  "dependencies": ["provider-plugin"],
  "targetActivation": "workload"
}
```

Both isolated cases execute the same declared phases, in order, with identical
completion counts. The baseline has only the dependencies active; the enabled
case must activate the target during work (`workload`) or before work (`startup`).
Dependencies must be present in the source inventory. They do not earn separate
coverage from another plugin's workload. Without this declaration, existing
adapters retain their empty-host baseline and startup activation requirement.

`prepare(context, { enabled, onCleanup })` runs in both paired cases before the
Gateway starts. It may return case-local state. Install the same pinned fixture
archive and configure the same synthetic workload inputs in both cases, changing
only target enablement. Register each adapter-owned server or peer with
`onCleanup(async () => { ... })` immediately after acquisition. The consumer runs
these callbacks in reverse order after the host joins its Gateway, including
preparation, startup and workload failures. A cleanup failure fails the receipt;
callbacks must finish or reject within the outer runner's deadline.

Registration is `open` during preparation, work and measurement drain. Before
disposal it becomes `closing`, then `closed` after every registered callback
settles. Registration during drain is accepted and disposed in reverse order.
Registration while closing or closed throws synchronously and fails the case
and in-memory receipt even if the caller catches the error. The rejected callback
is not accepted or invoked: its caller retains cleanup ownership. Adapters must
join their own background work before completion; a saved callback is not a
resource lease after the run or permission to amend an already written receipt.

`run(context, requirements, { enabled, state, onCleanup })` receives that state
and the same `requirements` in both cases. Await each
`context.measure(name, count, operation)` in `Object.entries(requirements)` order.
Host phases always come first, including when workload phase names are numeric. Assert the
operation's semantic outcome before resolving it. Every started measurement has
an immediate rejection handler and is drained before the host can stop the
Gateway. Returning with a pending measurement fails the contract; adapter and
drained measurement failures are both retained. The baseline must prove the
unmodified result, and the enabled case the target's effect. The consumer owns
phase/count and before/after active-plugin checks; adapters own these semantic
assertions. This contract adds no provider, process runner or plugin mocks.

New receipts use `plugin-resource-workload` schema v2. Each case retains whole
Gateway measurements and records expected/observed activation plus adapter
cleanup. `comparison.hostPhases` compares startup and neutral observations;
`comparison.workloadPhases` contains only matched workload deltas, calculated as
enabled minus baseline, including CPU per completed operation. Signed deltas
include run noise; they are not CPU allocations to plugin functions. Empty-host
scenarios have no matched workload deltas. The reader still accepts published
v1 empty-host receipts under their original contract, but v1 cannot satisfy a
paired scenario. Kitchen Sink v1 calibration is unchanged. No SQLite changes or
real-plugin workload coverage result from this orchestration contract alone.
Paired v2 receipts require the host-recorded `fixtures` array in each case and
matching archive SHA-256 multisets. Archive labels are validated; byte hashes,
including multiplicity, bind installed inputs regardless of installation order.
Both arrays may be empty for host-bundled plugins. Plugin IDs alone do not prove
that the baseline and enabled case installed the same package bytes.

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
