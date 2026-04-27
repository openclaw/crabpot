# Operations

## Adding a fixture

1. Add an entry to `crabpot.config.json`.
2. Run `node scripts/sync-fixtures.mjs --materialize`.
3. Run `npm test`.
4. Review `.gitmodules` and the pinned submodule commit.
5. Commit the manifest and submodule pointer together.

Repo-backed fixtures use `repo` and are pinned as shallow git submodules.
Npm-only fixtures use `package.name` plus a pinned `package.version`; their code
is unpacked into ignored `plugins/<id>` directories during materialization.

## Updating fixtures

```bash
git submodule update --remote --recursive plugins/<fixture-id>
npm test
npm run report
```

Then inspect the diff. A fixture update is only useful if it either:

- tracks a plugin release we care about,
- adds coverage for a new seam,
- reproduces a compatibility break,
- or proves a contract migration path still works.

## CI model

Use a cheap default workflow first:

- validate the manifest
- ensure `.gitmodules` agrees with `crabpot.config.json`
- initialize pinned submodules
- inspect expected hooks, registrations, and manifest contracts
- run registration-capture smoke checks
- generate the compatibility report in check mode
- generate the contract capture plan in check mode
- generate the synthetic hook and registrar probe plan in check mode
- generate the cold-import readiness report in check mode
- generate the isolated workspace plan in check mode
- profile CLI boot time, wall time, and peak RSS in check mode
- gate issue evidence, P1 probe coverage, compat-record reconciliation, target
  hook/API/capture parsing, SDK export parsing, and manifest type parsing

Add heavier lanes later for SDK compilation against specific OpenClaw refs:

- `openclaw@main`
- latest stable release tag
- active beta branch or release candidate

The `OpenClaw Ref Compatibility` workflow is the manual ref lane. Dispatch it
with:

- `openclaw_repository`: usually `openclaw/openclaw`, or a fork.
- `openclaw_ref`: branch, tag, or SHA.
- `run_isolated_fixture`: `false` for static-only, `true` to run one opt-in
  workspace fixture.
- `fixture`: required only when `run_isolated_fixture` is enabled.

The static job uploads `reports/`. The isolated fixture job uploads
`.crabpot/results/` and `reports/crabpot-execution-results.*`.

## Reading the report

Use `reports/crabpot-report.md` for full human review,
`reports/crabpot-report.json` for downstream tooling, and
`reports/crabpot-issues.md` for the short issue/probe queue.
Use `reports/crabpot-capture.md` when you need the concrete hook, registrar,
SDK import, and package-entrypoint assertions the future inspector should run.
Use `reports/crabpot-synthetic-probes.md` when you need the concrete hook
events and registrar arguments that can be invoked after a guarded cold import.
Use `reports/crabpot-cold-import.md` when you need to see which fixture
entrypoints are directly executable and which are blocked by build output,
TypeScript loader support, dependency installation, SDK aliases, or side-effect
review.
Use `reports/crabpot-workspace-plan.md` when you need the concrete opt-in
workspace commands for dependency install, build, capture execution, and
synthetic handler probes. Opt-in runs write JSON artifacts under
`.crabpot/results/<fixture>/`.
Use `reports/crabpot-execution-results.md` after an opt-in run to review which
capture and synthetic probe artifacts passed, failed, or stayed blocked.
Use `reports/crabpot-runtime-profile.md` to compare command boot/wall/RSS costs
against the selected OpenClaw registry surface.
Use `npm run workspace:execute -- --fixture <id> --dry-run` to inspect the exact
selected commands. Real execution additionally requires
`CRABPOT_EXECUTE_ISOLATED=1`.

Decision classes mean:

- `core-compat-adapter`: preserve or add OpenClaw compatibility behavior.
- `plugin-upstream-fix`: open an upstream plugin issue or migration PR.
- `inspector-follow-up`: add deeper inspector coverage before deciding.
- `intentional-break`: document a versioned migration and accept the break.
- `no-action`: the seam is covered by current default checks.

Hard breakages should block contract changes. Warnings are old or sensitive
seams that currently still work but need compat coverage before OpenClaw changes
the relevant API.

The target OpenClaw checkout is not just context; it is part of the contract
test. Crabpot compares fixture seams against target hook names, public
registrars, captured-registration support, plugin SDK package exports, compat
records, and manifest fields.

Run the quality gate directly when changing classifiers:

```bash
npm run plugin-inspector:smoke
npm run contract:coverage
npm run contract:capture -- --check
npm run contract:synthetic -- --check
npm run cold-import -- --check
npm run workspace:plan -- --check
npm run execution:report -- --check
npm run profile -- --check
node scripts/check-contract-coverage.mjs --openclaw ../openclaw
```

`npm run plugin-inspector:smoke` uses the published
`@openclaw/plugin-inspector@0.1.2` package by default. Use
`CRABPOT_PLUGIN_INSPECTOR_CLI=source npm run plugin-inspector:smoke` only when
validating local inspector source changes.

Issue severity means:

- `P0`: current hard breakage.
- `P1`: high-risk contract seam where OpenClaw should not change behavior until
  the inspector has a probe or a compat adapter.
- `P2`: compatibility debt that should stay visible but does not block all
  contract work.
- `P3`: low-risk follow-up.
