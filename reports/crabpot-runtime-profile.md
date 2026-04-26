# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 1

## Summary

| Metric                 | Value   |
| ---------------------- | ------- |
| Commands               | 9       |
| P50 wall time          | 1197 ms |
| P95 wall time          | 2959 ms |
| Max peak RSS           | 74.8 MB |
| Max RSS delta          | 28.3 MB |
| Max CPU estimate       | 590 ms  |
| Max harness heap delta | 1 MB    |

## Target OpenClaw Registry Surface

| Metric                 | Value       |
| ---------------------- | ----------- |
| status                 | ok          |
| configuredPath         | ../openclaw |
| compatRecords          | 18          |
| hookNames              | 32          |
| apiRegistrars          | 40          |
| capturedRegistrars     | 18          |
| sdkExports             | 307         |
| manifestFields         | 32          |
| manifestContractFields | 16          |

## Crabpot Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 27    |
| sourceFiles           | 672   |
| observedHooks         | 44    |
| observedRegistrations | 57    |
| observedSdkImports    | 60    |
| contractProbes        | 141   |
| issueFindings         | 143   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | ---------- |
| node-boot              | Node boot                                       | 627 ms      | 627 ms   | 0 MB         | 0 MB          | 0 ms         | 0.7 MB     | 0          |
| fixture-inspection     | Fixture inspection                              | 1130 ms     | 1130 ms  | 62.7 MB      | 13.1 MB       | 315 ms       | 0.8 MB     | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 1838 ms     | 1838 ms  | 74.3 MB      | 27.8 MB       | 590 ms       | 1 MB       | 0          |
| contract-capture       | Contract capture inventory                      | 1111 ms     | 1111 ms  | 69.6 MB      | 22.1 MB       | 437 ms       | 0.6 MB     | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 1108 ms     | 1108 ms  | 69.2 MB      | 24 MB         | 456 ms       | 0.7 MB     | 0          |
| cold-import-readiness  | Cold import readiness                           | 1835 ms     | 1835 ms  | 72.8 MB      | 28.3 MB       | 585 ms       | 0.9 MB     | 0          |
| workspace-plan         | Workspace execution plan                        | 1197 ms     | 1197 ms  | 65.6 MB      | 19.3 MB       | 377 ms       | 0.6 MB     | 0          |
| platform-probes        | Platform and loader probes                      | 1576 ms     | 1576 ms  | 74.8 MB      | 28.3 MB       | 523 ms       | 0.7 MB     | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 2959 ms     | 2959 ms  | 49 MB        | 7 MB          | 139 ms       | 1 MB       | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | ---------------------- |
| baseline         | 1        | 627 ms   | 627 ms   | 0 MB         | 0 ms         | node-boot              |
| fixture-scan     | 1        | 1130 ms  | 1130 ms  | 62.7 MB      | 315 ms       | fixture-inspection     |
| target-registry  | 1        | 1838 ms  | 1838 ms  | 74.3 MB      | 590 ms       | compat-report-registry |
| contract-capture | 1        | 1111 ms  | 1111 ms  | 69.6 MB      | 437 ms       | contract-capture       |
| synthetic-probes | 1        | 1108 ms  | 1108 ms  | 69.2 MB      | 456 ms       | synthetic-probe-plan   |
| cold-import      | 1        | 1835 ms  | 1835 ms  | 72.8 MB      | 585 ms       | cold-import-readiness  |
| workspace-plan   | 1        | 1197 ms  | 1197 ms  | 65.6 MB      | 377 ms       | workspace-plan         |
| platform-probes  | 1        | 1576 ms  | 1576 ms  | 74.8 MB      | 523 ms       | platform-probes        |
| import-loop      | 1        | 2959 ms  | 2959 ms  | 49 MB        | 139 ms       | import-loop-profile    |
