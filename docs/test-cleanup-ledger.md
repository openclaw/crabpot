# Test cleanup ledger

## Inventory and presentation locks

- Removed the minimum fixture count and six hardcoded plugin names. Manifest validation and required seam coverage remain; fixture retirement must not require keeping arbitrary names alive.
- Removed the exact GitHub action-major/cache spelling test. It scanned concatenated YAML, so a match in one workflow could hide a missing cache in another. Dependabot owns version updates; workflow execution validates action compatibility.
- Removed README heading, prose, emoji, and navigation-copy assertions. Kept manifest/gitmodule/README row consistency, dynamic source metadata preservation, and update-time formatting.
- Validation: 81 focused Node tests passed on current main; `git diff --check` passed. AWS Crabbox run `run_d7bc5fbc58be54fe1195cc2540ed6bc6` failed during hydration before tests (`fatal: not a git repository`); a subsequent AWS Linux run `run_71773f7b72959857fcdbfcdc3988f061` passed all 81 tests. PR https://github.com/openclaw/crabpot/pull/706 awaits required CI.

## Remaining corpus locks and duplicate deadlines

- Removed the corpus report minimum of ten fixtures and the six-name inventory assertion and name-only QQBot rename checks. Retained all fixture-specific seam, issue, probe, and target compatibility checks.
- Removed the report-suite deadline assertion duplicated by the dedicated runtime-profile limits suite; its ordinary deadline and aggregate sample-budget checks remain there.
- Validation: all eight scoped report-runner/deadline tests passed locally, along with the corpus syntax check and `git diff --check`. Full corpus inspection remains in required CI.

## Remaining audit

Current inventory: 53 top-level test files and 59 configured plugin fixtures. Initial reference tracing found consumers for all files under `test/fixtures`, including dynamically constructed capture-error filenames; none is proven dead by filename search alone.

Review behavioral tests, fixture uniqueness, blocked-failure mappings, and static checks versus actual isolated execution. Source-text workflow guards remain candidates for replacement with executable checks; this batch does not claim they prove end-to-end behavior.
