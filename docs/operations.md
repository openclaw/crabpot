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

Add heavier lanes later for SDK compilation against specific OpenClaw refs:

- `openclaw@main`
- latest stable release tag
- active beta branch or release candidate

## Reading the report

Use `reports/crabpot-report.md` for human review and
`reports/crabpot-report.json` for downstream tooling.

Decision classes mean:

- `core-compat-adapter`: preserve or add OpenClaw compatibility behavior.
- `plugin-upstream-fix`: open an upstream plugin issue or migration PR.
- `inspector-follow-up`: add deeper inspector coverage before deciding.
- `intentional-break`: document a versioned migration and accept the break.
- `no-action`: the seam is covered by current default checks.

Hard breakages should block contract changes. Warnings are old or sensitive
seams that currently still work but need compat coverage before OpenClaw changes
the relevant API.
