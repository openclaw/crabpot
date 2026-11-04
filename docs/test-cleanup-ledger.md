# Test cleanup ledger

## Inventory and presentation locks

- Removed the minimum fixture count and six hardcoded plugin names. Manifest validation and required seam coverage remain; fixture retirement must not require keeping arbitrary names alive.
- Removed the exact GitHub action-major/cache spelling test. It scanned concatenated YAML, so a match in one workflow could hide a missing cache in another. Dependabot owns version updates; workflow execution validates action compatibility.
- Removed README heading, prose, emoji, and navigation-copy assertions. Kept manifest/gitmodule/README row consistency, dynamic source metadata preservation, and update-time formatting.
- Validation: 81 focused Node tests passed on current main; `git diff --check` passed. Remote validation pending.

## Remaining audit

Review behavioral tests, fixture uniqueness, blocked-failure mappings, and static checks versus actual isolated execution. Source-text workflow guards remain candidates for replacement with executable checks; this batch does not claim they prove end-to-end behavior.
