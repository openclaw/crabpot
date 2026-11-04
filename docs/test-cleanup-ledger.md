# Test cleanup ledger

## Inventory and presentation locks

- Removed the minimum fixture count and six hardcoded plugin names. Manifest validation and required seam coverage remain; fixture retirement must not require keeping arbitrary names alive.
- Removed the exact GitHub action-major/cache spelling test. It scanned concatenated YAML, so a match in one workflow could hide a missing cache in another. Dependabot owns version updates; workflow execution validates action compatibility.
- Removed README heading, prose, emoji, and navigation-copy assertions. Kept manifest/gitmodule/README row consistency, dynamic source metadata preservation, and update-time formatting.
- Validation: 81 focused tests passed locally and on AWS Linux (`run_71773f7b72959857fcdbfcdc3988f061`). All four Default Track platform lanes passed in PR CI run `41829651301`; checks will rerun after this main reconciliation.

## Credential-free Git fixture commits

- Three Inspector-readiness and track-metadata fixture commits inherited user signing settings, making ordinary tests depend on an available signing credential or agent.
- Each disposable fixture commit now passes command-local `commit.gpgSign=false`.
- Validation on macOS: all three existing tests failed with signing enabled and an unavailable signer before the fix, then passed with the same environment after the fix. `git diff --check` passed.

## Remaining audit

Current inventory: 53 top-level test files and 59 configured plugin fixtures. Initial reference tracing found consumers for all files under `test/fixtures`, including dynamically constructed capture-error filenames; none is proven dead by filename search alone.

Review behavioral tests, fixture uniqueness, blocked-failure mappings, and static checks versus actual isolated execution. Source-text workflow guards remain candidates for replacement with executable checks; this batch does not claim they prove end-to-end behavior.
