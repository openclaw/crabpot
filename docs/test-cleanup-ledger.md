# Test cleanup ledger

## Inventory and presentation locks

- Removed the minimum fixture count and six hardcoded plugin names. Manifest validation and required seam coverage remain; fixture retirement must not require keeping arbitrary names alive.
- Removed the exact GitHub action-major/cache spelling test. It scanned concatenated YAML, so a match in one workflow could hide a missing cache in another. Dependabot owns version updates; workflow execution validates action compatibility.
- Removed README heading, prose, emoji, and navigation-copy assertions. Kept manifest/gitmodule/README row consistency, dynamic source metadata preservation, and update-time formatting.
- Validation: 81 focused Node tests passed on current main; `git diff --check` passed. AWS Crabbox run `run_d7bc5fbc58be54fe1195cc2540ed6bc6` failed during hydration before tests (`fatal: not a git repository`); a subsequent run `run_71773f7b72959857fcdbfcdc3988f061` passed all 81 tests on AWS Linux. PR https://github.com/openclaw/crabpot/pull/706 awaits the required Default Track check.

## Static-suite selectors

- Commit `0a0392f`: reject missing values for all six static-suite options before any step starts. An incomplete fixture selector previously fell back to the full corpus.
- Removed the duplicate release-policy builder test, which never exercised release parsing; added real CLI regression coverage for absent/empty/following-flag values.
- Validation: eight focused tests passed locally and on AWS Linux (`run_71b1823696a55535d57db2238f7d2b6a`). Published as https://github.com/openclaw/crabpot/pull/711 after transient GitHub push failures.

## Temporary fixture ownership

- Added teardown hooks for 21 temporary allocations in execution-results, cold-import-capture, ci-summary, ref-diff, profile-diff, synthetic-probe, and README-summary tests. Hooks also run after assertion failures.
- Validation: all 25 affected tests passed on AWS Linux (`run_d22533beddd8f2c0a30b5ee2979f47ad`). Residual inspection in run `run_337626ee031d32b6ca67d866d64113ef` confirmed only `node-compile-cache` remained; all 25 tests passed and no Crabpot fixture directories remained. No existing temporary data was deleted. Expanded validation passed all 39 checks across the first six suites on AWS Linux (`run_8eff76bf0b6101d72f4689061e8a314b`, lease `cbx_9c31d4131609`, actual type `m7a.8xlarge`) with no Crabpot fixture directories left in the isolated TMPDIR. All eight README-summary checks passed on AWS Linux (`run_35bdad593aec20d118cfcf11470cf982`, lease `cbx_07180fbd5b34`, actual type `c7i.8xlarge`), again leaving no Crabpot fixture directories.

## Bounded CLI test children

- Added 60-second deadlines to seven subprocess calls covering eleven CLI cases in argument parsing, cold capture, synthetic probes, and generated-surface validation.
- Negative CLI cases now reject spawn errors and signal termination before matching expected diagnostics. The old assertion pattern accepted a child that printed the expected error and then died from SIGTERM (`status: null`). Positive cases also surface spawn errors directly.
- Validation: reproduced the old false-positive assertion pattern locally; syntax checks passed. All eleven CLI cases passed on AWS Linux (`run_81ecde00c117b2c667911d9d03bf9315`, lease `cbx_5b98751052f9`, actual type `m7a.8xlarge`).

## Remaining audit

Current inventory: 53 top-level test files and 59 configured plugin fixtures. Initial reference tracing found consumers for all files under `test/fixtures`, including dynamically constructed capture-error filenames; none is proven dead by filename search alone.

Review behavioral tests, fixture uniqueness, blocked-failure mappings, and static checks versus actual isolated execution. Source-text workflow guards remain candidates for replacement with executable checks; this batch does not claim they prove end-to-end behavior.
