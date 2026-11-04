# Test cleanup ledger

## Credential-free Git fixture commits

- Three Inspector-readiness and track-metadata fixture commits inherited user signing settings, making ordinary tests depend on an available signing credential or agent.
- Each disposable fixture commit now passes command-local `commit.gpgSign=false`.
- Validation on macOS: all three existing tests failed with signing enabled and an unavailable signer before the fix, then passed with the same environment after the fix. `git diff --check` passed.
