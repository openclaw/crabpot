# Releasing Crabpot

Crabpot ships the compatibility testbed as source on GitHub through
[`release-source.yml@v1`](https://github.com/openclaw/release-workflows/blob/v1/.github/workflows/release-source.yml).
The root npm package is private; pinned plugin fixtures belong to their upstream
publishers. There is no Crabpot npm publication, native binary, or Homebrew
formula. Releases attach frozen-commit source tar/zip archives, exact notes, an
inventory, and checksums. Source archives contain gitlink references, not the
submodule contents: clone with `--recurse-submodules` or initialize submodules
when running the complete fixture suite.

## Prepare

Set `package.json` to the next version and finalize that version's changelog
section as `## X.Y.Z - YYYY-MM-DD`. Preserve credits and leave the next pending
section above it. Do not release an `Unreleased` heading.

Use the normal fixture-driven checks from README and `docs/operations.md` for
the preparation PR. The independent push `Check` workflow exercises the full
static suite across Linux, macOS, Windows, and the container lane with pinned
OpenClaw and plugin fixtures. The release additionally checks retired contract
names and runs synthetic static-suite, package-result, and argument-parsing
regressions:

```sh
node scripts/check-openclaw-plugin-contracts.mjs
node --test --test-concurrency=1 test/run-static-suite.test.mjs test/npm-pack-result.test.mjs test/script-arg-parsing.test.mjs
```

These release checks require neither plugin credentials nor a live Gateway.
They do not claim fresh live compatibility results beyond the exact-commit
independent CI. Generated dashboard reports remain owned by existing workflows.

## Publish through Actions

After the preparation PR and push CI pass on the exact merged commit, create a
signed annotated `vX.Y.Z` tag using the release SSH key authorized by
`.github/release-allowed-signers`, verify it, and push only that tag. Never move
an existing tag or reuse a published version. The tag starts `Release`; do not
publish locally or create a GitHub Release by hand.

The shared workflow freezes the commit, checks protected-main ancestry, the SSH
signature, version metadata, dated changelog notes, and green independent push
CI. It then runs the checks below and binds the payload to two independent
verifiers before publication. A live dispatch also requires an existing signed
tag; it cannot silently substitute an unsigned tag.

## No-publish rehearsal

Dispatch `Release` on the current protected `main` with the version matching its
metadata and a dated changelog section. `dry_run` defaults to `true`:

```sh
gh workflow run release.yml --repo openclaw/crabpot --ref main -f version=0.2.1 -F dry_run=true
```

This checks current main even when that version has an older tag. It neither
creates nor changes tags, GitHub Releases, registry versions, or deployments.
Only the release pipeline's checks run; ordinary push workflows remain separate.

## Verify and close out

Confirm the Actions run succeeded and the GitHub Release has the expected
signed tag, frozen commit, exact dated changelog section, inventory, and
`SHA256SUMS`. Download the attached payload and verify its checksums. Never
replace an existing release's assets to fix a failed attempt.

Keep the released changelog section intact. Open an empty `## Unreleased`
section if one is absent, review and merge the follow-up, and leave `main` clean
and current. No release is complete while its independent CI or publication
verification is failing.
