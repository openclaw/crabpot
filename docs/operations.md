# Operations

## Adding a fixture

1. Add an entry to `crabpot.config.json`.
2. Run `npm test`.
3. Run `node scripts/sync-fixtures.mjs --materialize`.
4. Review `.gitmodules` and the pinned submodule commit.
5. Commit the manifest and submodule pointer together.

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
- generate the cold-import readiness report in check mode
- generate the isolated workspace plan in check mode
- gate issue evidence, P1 probe coverage, compat-record reconciliation, target
  hook/API/capture parsing, SDK export parsing, and manifest type parsing

Add heavier lanes later for SDK compilation against specific OpenClaw refs:

- `openclaw@main`
- latest stable release tag
- active beta branch or release candidate

## Reading the report

Use `reports/crabpot-report.md` for full human review,
`reports/crabpot-report.json` for downstream tooling, and
`reports/crabpot-issues.md` for the short issue/probe queue.
Use `reports/crabpot-capture.md` when you need the concrete hook, registrar,
SDK import, and package-entrypoint assertions the future inspector should run.
Use `reports/crabpot-cold-import.md` when you need to see which fixture
entrypoints are directly executable and which are blocked by build output,
TypeScript loader support, dependency installation, SDK aliases, or side-effect
review.
Use `reports/crabpot-workspace-plan.md` when you need the concrete opt-in
workspace commands for dependency install, build, and capture execution.
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
npm run contract:coverage
npm run contract:capture -- --check
npm run cold-import -- --check
npm run workspace:plan -- --check
node scripts/check-contract-coverage.mjs --openclaw ../openclaw
```

Issue severity means:

- `P0`: current hard breakage.
- `P1`: high-risk contract seam where OpenClaw should not change behavior until
  the inspector has a probe or a compat adapter.
- `P2`: compatibility debt that should stay visible but does not block all
  contract work.
- `P3`: low-risk follow-up.
