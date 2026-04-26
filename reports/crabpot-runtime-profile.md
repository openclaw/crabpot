# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 1

## Summary

| Metric                 | Value   |
| ---------------------- | ------- |
| Commands               | 9       |
| P50 wall time          | 3718 ms |
| P95 wall time          | 5673 ms |
| Max peak RSS           | 75.5 MB |
| Max RSS delta          | 74.1 MB |
| Max CPU estimate       | 778 ms  |
| Max harness heap delta | 1.6 MB  |

## Target OpenClaw Registry Surface

| Metric                 | Value       |
| ---------------------- | ----------- |
| status                 | ok          |
| configuredPath         | ../openclaw |
| compatRecords          | 18          |
| hookNames              | 32          |
| apiRegistrars          | 40          |
| capturedRegistrars     | 18          |
| sdkExports             | 308         |
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
| node-boot              | Node boot                                       | 939 ms      | 939 ms   | 24.1 MB      | 0 MB          | 85 ms        | 1.3 MB     | 0          |
| fixture-inspection     | Fixture inspection                              | 2773 ms     | 2773 ms  | 67.7 MB      | 25.8 MB       | 607 ms       | 1.4 MB     | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 3540 ms     | 3540 ms  | 74.3 MB      | 74.1 MB       | 644 ms       | 1.6 MB     | 0          |
| contract-capture       | Contract capture inventory                      | 3718 ms     | 3718 ms  | 74.5 MB      | 32 MB         | 758 ms       | -16.3 MB   | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 4094 ms     | 4094 ms  | 72.9 MB      | 70 MB         | 778 ms       | 0 MB       | 0          |
| cold-import-readiness  | Cold import readiness                           | 5243 ms     | 5243 ms  | 75.5 MB      | 51.5 MB       | 750 ms       | 0.5 MB     | 0          |
| workspace-plan         | Workspace execution plan                        | 5673 ms     | 5673 ms  | 71.7 MB      | 31.3 MB       | 755 ms       | -0.5 MB    | 0          |
| platform-probes        | Platform and loader probes                      | 5314 ms     | 5314 ms  | 74.9 MB      | 59.6 MB       | 696 ms       | 0.4 MB     | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 3589 ms     | 3589 ms  | 49.4 MB      | 6.3 MB        | 183 ms       | 0.3 MB     | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | ---------------------- |
| baseline         | 1        | 939 ms   | 939 ms   | 24.1 MB      | 85 ms        | node-boot              |
| fixture-scan     | 1        | 2773 ms  | 2773 ms  | 67.7 MB      | 607 ms       | fixture-inspection     |
| target-registry  | 1        | 3540 ms  | 3540 ms  | 74.3 MB      | 644 ms       | compat-report-registry |
| contract-capture | 1        | 3718 ms  | 3718 ms  | 74.5 MB      | 758 ms       | contract-capture       |
| synthetic-probes | 1        | 4094 ms  | 4094 ms  | 72.9 MB      | 778 ms       | synthetic-probe-plan   |
| cold-import      | 1        | 5243 ms  | 5243 ms  | 75.5 MB      | 750 ms       | cold-import-readiness  |
| workspace-plan   | 1        | 5673 ms  | 5673 ms  | 71.7 MB      | 755 ms       | workspace-plan         |
| platform-probes  | 1        | 5314 ms  | 5314 ms  | 74.9 MB      | 696 ms       | platform-probes        |
| import-loop      | 1        | 3589 ms  | 3589 ms  | 49.4 MB      | 183 ms       | import-loop-profile    |
