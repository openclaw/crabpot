# Crabpot CI Deepening Plan

Status: investigated plan
Date: 2026-04-25

## Executive Call

Crabpot should go deeper by comparing OpenClaw refs, sharding isolated plugin
execution, and adding policy-aware failure summaries. More static checks alone
will mostly rediscover known warnings. The next useful issues will come from
answering three questions in CI:

- Did this OpenClaw ref remove or rename a plugin-facing contract that a real
  fixture uses?
- Can each fixture actually install, build, cold-import, capture registrations,
  and run synthetic probes against that ref?
- Did boot time, RSS, issue counts, or registry surface size regress enough to
  deserve attention?

## Investigation Snapshot

Current CI surfaces:

- `Check` runs on push, PR, and manual dispatch. It is cheap and
  credential-free. It validates fixture metadata, smoke contracts, static
  reports, capture inventory, synthetic probes, cold-import readiness, isolated
  workspace plans, runtime profile checks, and contract coverage against
  `openclaw/openclaw@main`.
- `OpenClaw Ref Compatibility` is manually dispatchable with
  `openclaw_repository` and `openclaw_ref`. It can test a branch, tag, fork, or
  SHA. Static checks always run. One isolated fixture can run when explicitly
  enabled.

Latest checked runs:

- `Check` passed on Crabpot
  `2281db22f7dcf3b4a0e386285e1cf1ccce0a3b8b`.
- `OpenClaw Ref Compatibility` passed on the same Crabpot SHA against
  `openclaw/openclaw@main`.
- Manual ref workflow uploaded `crabpot-openclaw-ref-static-reports`.
- `Check` currently emits a GitHub Actions runtime warning because
  `actions/checkout@v4` and `actions/setup-node@v4` are Node.js 20 actions.
  That is not breaking today, but it belongs in workflow-health tracking.

Current report state:

- `reports/crabpot-report.md`: 0 hard breakages, 16 warnings, 35 suggestions,
  51 issue findings, 9 P1 issues, 50 contract probes.
- `reports/crabpot-capture.md`: 28 registrations, 8 hooks, 32 SDK imports, 13
  package entrypoints, 17 inspector-shim-required captures, 3 compat aliases
  required.
- `reports/crabpot-synthetic-probes.md`: 36 ready probes, 0 blocked probes, 19
  direct execution probes, 6 opt-in probes, 3 metadata-only probes.
- `reports/crabpot-cold-import.md`: 13 entrypoints, 0 directly ready, 13
  blocked. Main blockers are TypeScript loaders, dependency installs, build
  outputs, side-effect review, and one SDK alias class.
- `reports/crabpot-workspace-plan.md`: 13 entrypoints, 9 install steps, 3 build
  steps, 13 capture steps, 13 synthetic probe steps, 8 target OpenClaw link
  steps, 1 SDK alias-required fixture.
- `reports/crabpot-runtime-profile.md`: 7 profiled commands, p50 wall time
  around 169-219ms depending on environment, max peak RSS around 67-69MB.

Current target OpenClaw surface:

- 19 compatibility records
- 31 hook names
- 40 public API registrars
- 18 captured-registration registrars
- 306 plugin SDK exports
- 32 manifest fields
- 16 manifest contract fields

Current fixture surface:

- 11 fixtures
- 181 source files
- 8 observed hook names
- 20 observed registration names
- 19 observed SDK import specifiers
- 50 contract probes
- 51 issue findings

## Main Gaps

- No ref-to-ref diff. A breaking change is easiest to spot by comparing stable
  or main against a candidate SHA.
- No OpenClaw ref matrix. Stable tags, beta tags, release candidates, forks, and
  PR SHAs are not first-class lanes.
- No fixture execution matrix. CI can run one isolated fixture manually, but it
  cannot shard `wecom`, TypeScript fixtures, build-required fixtures, and SDK
  alias fixtures.
- No blocker policy. Known opt-in blockers and unknown contract blockers are
  not classified by a machine-readable CI policy.
- No trend baseline. Runtime profile, RSS, issue count, and registry surface
  changes are visible only per run.
- No dependency/audit capture. Isolated fixture installs can reveal upstream
  package risk, but the result is not summarized as a CI artifact.
- No compact CI triage summary. Reports exist, but a failing run should show the
  decision matrix and top regressions directly in `GITHUB_STEP_SUMMARY`.
- No workflow-health check. Action runtime warnings and artifact upload gaps are
  easy to miss.

## Plan

### 1. Add Ref Diff Reports

Add `scripts/compare-openclaw-refs.mjs`.

Inputs:

- `--base-openclaw <path>`
- `--head-openclaw <path>`
- `--base-label <label>`
- `--head-label <label>`
- `--strict`

Outputs:

- `reports/crabpot-ref-diff.md`
- `reports/crabpot-ref-diff.json`

Diff dimensions:

- compatibility records added or removed
- hook names added or removed
- public `api.register*` methods added or removed
- captured-registration registrar support added or removed
- plugin SDK exports added or removed
- manifest fields and manifest contract fields added or removed
- warnings, suggestions, issue counts, and severity deltas
- runtime profile deltas when both sides have profile reports

Gate rules:

- Removed hook used by a fixture: fail.
- Removed `api.register*` name used by a fixture: fail.
- Removed SDK export used by a fixture: fail unless an active compat record or
  alias policy covers it.
- Removed manifest field used by a fixture: fail if it is a public contract
  field, warn if it is already classified as legacy compat.
- New P0/P1 issue findings: fail by default.
- New P2/P3 issue findings: warn by default, fail in strict mode.

This is the single highest-yield CI addition because it turns Crabpot from
"does current main look okay?" into "what exactly changed for real plugins?"

### 2. Expand Manual OpenClaw Ref Workflow

Extend `.github/workflows/openclaw-ref-compat.yml` into a mode-based workflow.

New inputs:

- `mode`: `static`, `diff`, `isolated`, or `full`
- `base_openclaw_repository`
- `base_openclaw_ref`
- `head_openclaw_repository`
- `head_openclaw_ref`
- `fixture_set`: `none`, `smoke`, `ts`, `build`, `sdk-alias`,
  `all-known-safe`, or comma-separated fixture ids
- `profile_runs`: default `1`, manual default can be `3`
- `strict_contract`: default `true`
- `strict_perf`: default `false`

Jobs:

- `base-static`: checkout base ref, generate reports.
- `head-static`: checkout head ref, generate reports.
- `ref-diff`: compare base/head reports and fail on contract regressions.
- `profile`: run profile with requested sample count and compare thresholds.
- `fixture-plan`: resolve fixture set from `crabpot.config.json` and workspace
  plan, then emit a matrix.
- `isolated-fixture`: run one selected fixture per shard.
- `summary`: collect artifacts and write the run summary.

Important: keep the default mode cheap. `static` should remain quick and
credential-free. `full` is for manual, scheduled, or release-candidate checks.

### 3. Add Fixture Execution Shards

Do not hardcode fixture lists in workflow YAML. Add a small resolver script that
reads `crabpot.config.json` and `reports/crabpot-workspace-plan.json`.

Suggested fixture sets:

- `smoke`: `wecom`, `llm-trace-phoenix`, `codex-app-server`
- `ts`: fixtures with `ts-loader-required`
- `build`: fixtures with `build-required`
- `sdk-alias`: fixtures with SDK alias blockers
- `side-effect-review`: fixtures marked with side-effect review, manual only
- `all-known-safe`: every fixture that does not require live credentials or
  network side effects beyond package install

Shard artifacts:

- `.crabpot/results/<fixture>/**`
- `reports/crabpot-execution-results.*`
- install logs
- package-manager audit output when available
- fixture-specific workspace plan subset
- synthetic probe result files
- cold-import capture files

Shard gate rules:

- Synthetic probe failure: fail.
- Unknown blocked reason: fail.
- Known opt-in blocker: warn unless strict mode is enabled.
- Install failure: fail and classify as package/dependency drift.
- Build failure: fail and classify as build/entrypoint drift.
- Audit findings: warn by default, fail only if a configured policy says so.

### 4. Add CI Policy

Add `crabpot.ci-policy.json` or a `ciPolicy` section in
`crabpot.config.json`. Prefer a top-level policy file if it grows beyond a few
rules.

Policy schema:

- `allowedBlocked`: known gaps that should not fail CI yet.
- `expectedWarnings`: known upstream/plugin risks that should stay visible.
- `fail`: signatures that must fail when present.
- `thresholds`: profile and count thresholds.
- `fixtureSets`: named fixture group definitions or query filters.

Initial policy entries:

- `registerChannel` runtime execution requiring channel harness: allowed blocked
  until channel runtime harness lands.
- lifecycle service execution requiring process/service harness: allowed
  blocked until lifecycle harness lands.
- tool factory descriptor missing from captured registration: warning now, fail
  after tool factory capture expansion lands.
- `sdk-alias-required`: fail in ref-diff if an alias existed in base and is
  missing in head.
- unknown registrar observed in fixture source but missing from target
  OpenClaw: fail.
- missing fixture evidence: fail.

### 5. Add Runtime And Registry Trend Checks

Keep profile checks artifact-first until we have enough history. Single samples
are noisy; strict performance failures should require repeated samples.

Add:

- `baselines/runtime/main.json`
- `baselines/runtime/stable.json`
- `baselines/runtime/beta.json`

Profile comparison rules:

- Require at least 3 samples per command for strict performance mode.
- Wall p95 regression over 50%: warn by default.
- Peak RSS regression over 50MB: warn by default.
- Boot time regression over 500ms absolute: warn by default.
- Strict mode turns warnings into failures.
- Registry surface growth is context, not a failure, unless it coincides with
  new unclassified issues.

Track these series:

- node boot wall time and RSS
- fixture inspection wall time and RSS
- compatibility report wall time and RSS
- contract capture wall time and RSS
- synthetic probe plan wall time and RSS
- cold-import readiness wall time and RSS
- workspace plan wall time and RSS
- OpenClaw compat records, hook names, API registrars, captured registrars, SDK
  exports, manifest fields, manifest contract fields
- Crabpot fixture count, source files, issue findings, and P1 count

### 6. Add Scheduled Canary

Add a scheduled workflow after ref diff and fixture shards exist.

Suggested cadence:

- nightly static run against `openclaw/openclaw@main`
- nightly ref diff against latest known stable tag once tag discovery is wired
- twice-weekly `smoke` isolated fixture set
- weekly `all-known-safe` isolated fixture set

Do not make scheduled canary block PRs. It should upload artifacts and, later,
open or update one issue after repeated failures with the same signature.

### 7. Add CI Summary Report

Add `scripts/write-ci-summary.mjs`.

Outputs:

- `reports/crabpot-ci-summary.md`
- optional JSON summary for later dashboards
- append markdown to `GITHUB_STEP_SUMMARY` in CI

Summary should include:

- Crabpot SHA
- selected OpenClaw repo/ref and resolved SHA
- mode and fixture set
- hard breakages
- new P1 findings
- blocker deltas
- profile deltas
- isolated fixture pass/fail/blocked counts
- top compat-layer recommendations
- decision matrix rows that changed
- artifact names
- workflow-health warnings

This is how CI becomes usable without downloading artifacts first.

### 8. Add Workflow Health Checks

Add a small workflow-health script.

Checks:

- required artifacts exist for each mode
- workflow inputs are valid
- fixture set resolves to at least one fixture when isolated mode is requested
- action versions are known and not using deprecated runtimes when a newer
  supported major is available
- generated reports are deterministic under `--check`
- skipped jobs are expected for the selected mode

This should start as warning-only, then become strict once the workflow shape is
stable.

## Highest-Yield Fixtures

Start with these because they cover the most likely compat-layer breaks:

- `wecom`: dependency install, channel registration, HTTP route, tool
  registration, prompt/tool/subagent hooks, media and streaming-ish policy.
- `llm-trace-phoenix`: LLM input/output hooks, privacy boundary, TypeScript
  loader, side-effect review.
- `codex-app-server`: SDK alias requirements, command registration,
  interactive handler registration, inbound claim hook, process-spawn policy.
- `agentchat`: channel entrypoint build path, setup entry, config schema,
  channel envelope, WebSocket/backpressure behavior.
- `a2a-gateway`: gateway method registration, service lifecycle, HTTP/gateway
  semantics, async job behavior.
- `hasdata` and `web-search-plus`: tool schemas, provider-auth env vars,
  external API/tool catalog shape, side-effect review.

Lower-yield until the inspector harness grows:

- live provider API behavior
- real channel transport delivery
- provider audio output correctness
- long-running service lifecycle behavior

## Implementation Order

1. Land this plan.
2. Add `compare-openclaw-refs` and generated `crabpot-ref-diff` reports.
3. Extend the manual workflow with `static`, `diff`, `isolated`, and `full`
   modes.
4. Add CI policy and blocker classification.
5. Add fixture-set resolver and isolated fixture matrix.
6. Add audit/install log capture to isolated fixture artifacts.
7. Add runtime baseline comparison and `profile_runs`.
8. Add `write-ci-summary` and append to `GITHUB_STEP_SUMMARY`.
9. Add scheduled canary after the manual workflow is stable.
10. Add workflow-health checks and tighten them gradually.

## Decision Matrix

| Finding | Default CI action | Strict CI action | Owner |
| --- | --- | --- | --- |
| Removed hook used by fixture | fail | fail | OpenClaw compat layer |
| Removed registrar used by fixture | fail | fail | OpenClaw compat layer |
| Removed SDK export used by fixture | fail unless compat alias exists | fail | OpenClaw compat layer |
| New P1 issue | fail | fail | OpenClaw compat layer or inspector |
| New P2/P3 issue | warn | fail | Inspector or plugin upstream |
| Known opt-in blocker | warn | fail | Inspector harness |
| Unknown blocked probe | fail | fail | Inspector harness |
| Install failure | fail | fail | Plugin upstream or dependency drift |
| Build failure | fail | fail | Plugin upstream or fixture setup |
| npm audit finding | warn | policy-driven | Plugin upstream |
| Wall p95 regression over threshold | warn | fail after 3 samples | Crabpot CI |
| Peak RSS regression over threshold | warn | fail after 3 samples | Crabpot CI |
| GitHub Actions runtime warning | warn | warn until replacement is validated | Crabpot CI |

## Done Criteria

This plan is complete when a manual Crabpot run can take:

- base OpenClaw repo/ref
- head OpenClaw repo/ref
- fixture set
- strictness flags

and produce:

- static reports for each ref
- ref diff report
- runtime profile report with trend comparison
- isolated fixture artifacts
- dependency/audit summaries
- CI summary markdown
- clear pass/fail/warn decision matrix

The result should let us hand an OpenClaw branch, tag, or SHA to Crabpot and get
one local artifact bundle that explains plugin compatibility risk without
manually reading every generated report.
