# Test cleanup ledger

The links own delivery status. Validation below describes focused proof; every PR must also pass its required CI before merging. No releases are part of this cleanup.

| PR | Scope | Focused proof |
| --- | --- | --- |
| [706](https://github.com/openclaw/crabpot/pull/706) | Remove fixture-count/name, action-version and README-copy locks; retain structural checks | 81 local/AWS checks; four platform CI lanes passed before reconciliation |
| [711](https://github.com/openclaw/crabpot/pull/711) | Reject incomplete values for six static-suite selectors; remove fake release-policy coverage | Eight local/AWS checks and required CI |
| [712](https://github.com/openclaw/crabpot/pull/712) | Register cleanup immediately for 21 temporary allocations in seven suites | 39 AWS checks plus eight README checks; isolated TMPDIRs left no Crabpot fixtures; required CI passed before reconciliation |
| [713](https://github.com/openclaw/crabpot/pull/713) | Remove 22 Inspector-owned algorithm cases, copied issue assertions and three unused private exports/wrappers | 18 retained integration checks, three runtime-profile checks and 17 summary/handoff checks on AWS; owning tests compared at pinned Inspector revision |
| [714](https://github.com/openclaw/crabpot/pull/714) | Move runtime-evidence assertions into the existing no-host corpus lane | Eight runner checks; real A2A source materialized and inspected on AWS |
| [715](https://github.com/openclaw/crabpot/pull/715) | Pass release policy to the checker as strict; preserve its nonzero CLI exit | Baseline regression failed; all nine checks passed locally and on AWS |
| [716](https://github.com/openclaw/crabpot/pull/716) | Replace source-text install/smoke guards with executable boundary assertions | 31 AWS checks; updated local run passed 38 with one platform skip; required CI passed before reconciliation |
| [718](https://github.com/openclaw/crabpot/pull/718) | Disable signing only for three disposable Git fixture commits | Three existing checks failed with unavailable signing before the fix and passed afterward; required CI |
| [719](https://github.com/openclaw/crabpot/pull/719) | Bound twelve CLI/fixture child calls and reject signal-based false successes | False-positive pattern reproduced; 11 CLI checks and 117 additional-suite checks passed on AWS; 109 local checks |
| [720](https://github.com/openclaw/crabpot/pull/720) | Require WhatsApp channel registration instead of accepting an unasserted fixture | 47 manifest checks; real 68-file source inspection passed on AWS; required CI passed before reconciliation |
| [721](https://github.com/openclaw/crabpot/pull/721) | Remove corpus inventory locks and duplicate deadline assertions | Eight runner/deadline checks and corpus syntax validation |
| [722](https://github.com/openclaw/crabpot/pull/722) | Use Inspector's actual corpus verdict instead of copying its expectation/alias algorithm | Pinned implementation and owning tests traced; syntax/diff checks; full corpus CI required |

## Audit coverage

The ownership/reference pass covers all 53 top-level test files plus the corpus lanes: acquisition/manifest/contracts (9), Inspector/execution boundaries (10), reporting/CI policy (12), tracks/orchestration/profiling (7), resource workloads/receipts (13), and behavior evaluation/npm parsing (2).

All 59 configured fixture acquisition identities are distinct. Every file under `test/fixtures` has a consumer, including dynamic capture-error filenames; reference tracing alone does not justify deleting one.

Retained tests protect real selections, exact blocked-failure mappings, source evidence, process ownership, deadlines, artifact writers, current-run failure propagation, protocol assertions, source identity, resource arithmetic and cleanup. Resource/RPC and behavior-runner doubles remain unit contracts and earn no live workload or end-to-end credit. Native process fixtures remain platform-specific CI inputs. Workflow source-text guards are configuration checks, not execution proof.

Inspector-owned copies were compared against immutable source `8ebe4f8b2b8d327db77f5d3d4a02d4d327af4446`; local file-path, command-option and artifact integration tests remain. Detailed AWS run/lease IDs and commands are recorded in the linked PRs.
