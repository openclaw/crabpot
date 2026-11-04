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

- Added teardown hooks for all 15 temporary allocations in execution-results, cold-import-capture, ci-summary, ref-diff, and profile-diff tests. Hooks also run after assertion failures.
- Validation: all 25 affected tests passed on AWS Linux (`run_d22533beddd8f2c0a30b5ee2979f47ad`). Residual inspection in run `run_337626ee031d32b6ca67d866d64113ef` confirmed only `node-compile-cache` remained; all 25 tests passed and no Crabpot fixture directories remained. No existing temporary data was deleted. Published as https://github.com/openclaw/crabpot/pull/712.

## Inspector-owned algorithm copies

- Compared the four local suites with the pinned Inspector revision `8ec7d359fd78c96e723ce77eb5cffb3fec6703ee`, rather than a moving upstream checkout.
- Removed four profile-diff threshold/severity tests, four ref-diff classification tests, and one workspace-plan validator test copied from that revision's own tests. The tested algorithm calls delegate to Inspector without Crabpot transformations.
- Removed seven synthetic-policy classification/validation copies; kept all seven real default-policy fixture mappings and the current-run selection check.
- Removed three execution-results copies for total-only audit counts, empty directories, and recursive artifact sorting. The pinned Inspector tests already own these algorithms; Crabpot adds no transformations to those inputs.
- Retained the missing-baseline file-path check, ref-diff writer integration, Crabpot-only npm peer-drift normalization, profile failure/blocked accounting, and execution-results writer integration tests.
- Validation: the three retained diff/workspace checks passed on AWS Linux (`run_0dc851772ab0afaff06429f818647d92`, lease `cbx_579ad1d28884`). All eight retained CI-policy tests passed on AWS Linux (`run_cf26162e5a7bb7a8142a1b5f84ead5ad`, lease `cbx_e8c4a1f91358`). All four retained execution-results tests passed on AWS Linux (`run_307c278e5f927e3091a33f94fe97c8a7`, lease `cbx_1fc4f6a0f499`).

## Remaining audit

Current inventory: 53 top-level test files and 59 configured plugin fixtures. Initial reference tracing found consumers for all files under `test/fixtures`, including dynamically constructed capture-error filenames; none is proven dead by filename search alone.

Review behavioral tests, fixture uniqueness, blocked-failure mappings, and static checks versus actual isolated execution. Source-text workflow guards remain candidates for replacement with executable checks; this batch does not claim they prove end-to-end behavior.
