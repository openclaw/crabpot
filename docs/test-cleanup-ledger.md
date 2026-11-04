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

## Inspector-owned algorithm copies

- Compared the four local suites with the pinned Inspector revision `8ec7d359fd78c96e723ce77eb5cffb3fec6703ee`, rather than a moving upstream checkout.
- After main adopted Inspector `8ebe4f8b2b8d327db77f5d3d4a02d4d327af4446`, the relevant owning tests remained unchanged. All 18 retained diff, workspace, policy, execution, issue-rendering, and composition checks passed on AWS Linux (`run_61d17d0521424fe3876002c544682709`, lease `cbx_04bb4a92e312`, actual type `c7i.8xlarge`).
- Removed the runtime-profile summary/renderer test copied from Inspector, including its four invented commands and the otherwise-unused private renderer wrapper. Retained the real child deadline, heap-option, and failure-artifact tests that exercise Crabpot behavior.
- All three retained runtime-profile tests passed on AWS Linux (`run_9126c28a41296d98a1fe2926020bca25`, lease `cbx_3036110fde8b`, actual type `c7i.8xlarge`); lease cleanup completed.
- Removed four profile-diff threshold/severity tests, four ref-diff classification tests, and one workspace-plan validator test copied from that revision's own tests. The tested algorithm calls delegate to Inspector without Crabpot transformations.
- Removed two CI-summary rollup/status tests covered by the pinned Inspector CI-summary tests; retained the file-writing integration test and Crabpot current-run handoff tests.
- Validation: the retained CI-summary writer and all 16 current-run handoff checks passed on AWS Linux (`run_11d3af5e8730506b8ee62745c8c72d96`, lease `cbx_63843f9b17db`, actual type `c7i.8xlarge`). All 16 handoff checks also passed locally.
- Removed seven synthetic-policy classification/validation copies; kept all seven real default-policy fixture mappings and the current-run selection check.
- Removed three execution-results copies for total-only audit counts, empty directories, and recursive artifact sorting. The pinned Inspector tests already own these algorithms; Crabpot adds no transformations to those inputs.
- Removed the issue-classification assertion block duplicated by the pinned Inspector report/issue tests and its two otherwise-unused direct exports. Kept the Crabpot issue-rendering checks.
- Validation of that removal: report composition passed on AWS Linux (`run_751c4eaaaa385a9b485b916b1b9fb56a`); both issue-rendering checks passed after materializing their BlueBubbles prerequisite (`run_6d2a324794f00eaf56b85795b773e5c0`, lease `cbx_1805895f99bd`, actual type `c7i.8xlarge`).
- Retained the missing-baseline file-path check, ref-diff writer integration, Crabpot-only npm peer-drift normalization, profile failure/blocked accounting, and execution-results writer integration tests.
- Validation: the three retained diff/workspace checks passed on AWS Linux (`run_0dc851772ab0afaff06429f818647d92`, lease `cbx_579ad1d28884`). All eight retained CI-policy tests passed on AWS Linux (`run_cf26162e5a7bb7a8142a1b5f84ead5ad`, lease `cbx_e8c4a1f91358`). All four retained execution-results tests passed on AWS Linux (`run_307c278e5f927e3091a33f94fe97c8a7`, lease `cbx_1fc4f6a0f499`).

## Remaining audit

Current inventory: 53 top-level test files and 59 configured plugin fixtures. Initial reference tracing found consumers for all files under `test/fixtures`, including dynamically constructed capture-error filenames; none is proven dead by filename search alone.

Review behavioral tests, fixture uniqueness, blocked-failure mappings, and static checks versus actual isolated execution. Source-text workflow guards remain candidates for replacement with executable checks; this batch does not claim they prove end-to-end behavior.
