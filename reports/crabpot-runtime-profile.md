# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 1

## Summary

| Metric                 | Value   |
| ---------------------- | ------- |
| Commands               | 9       |
| P50 wall time          | 3210 ms |
| P95 wall time          | 4615 ms |
| Max peak RSS           | 79.3 MB |
| Max RSS delta          | 45.3 MB |
| Max CPU estimate       | 774 ms  |
| Max harness heap delta | 1.9 MB  |

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
| node-boot              | Node boot                                       | 959 ms      | 959 ms   | 40.1 MB      | 0 MB          | 66 ms        | 1 MB       | 0          |
| fixture-inspection     | Fixture inspection                              | 3736 ms     | 3736 ms  | 69.5 MB      | 33.8 MB       | 751 ms       | 1.9 MB     | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 3935 ms     | 3935 ms  | 72.1 MB      | 31.5 MB       | 693 ms       | 1.7 MB     | 0          |
| contract-capture       | Contract capture inventory                      | 3210 ms     | 3210 ms  | 74.7 MB      | 33.2 MB       | 639 ms       | -16.5 MB   | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 4615 ms     | 4615 ms  | 74.9 MB      | 34 MB         | 734 ms       | -0.6 MB    | 0          |
| cold-import-readiness  | Cold import readiness                           | 1815 ms     | 1815 ms  | 73.2 MB      | 45.3 MB       | 624 ms       | 0 MB       | 0          |
| workspace-plan         | Workspace execution plan                        | 3167 ms     | 3167 ms  | 76.3 MB      | 35.8 MB       | 747 ms       | 0.5 MB     | 0          |
| platform-probes        | Platform and loader probes                      | 2496 ms     | 2496 ms  | 79.3 MB      | 38.3 MB       | 774 ms       | 0.3 MB     | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 3878 ms     | 3878 ms  | 48.7 MB      | 15.3 MB       | 217 ms       | -0.4 MB    | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | ---------------------- |
| baseline         | 1        | 959 ms   | 959 ms   | 40.1 MB      | 66 ms        | node-boot              |
| fixture-scan     | 1        | 3736 ms  | 3736 ms  | 69.5 MB      | 751 ms       | fixture-inspection     |
| target-registry  | 1        | 3935 ms  | 3935 ms  | 72.1 MB      | 693 ms       | compat-report-registry |
| contract-capture | 1        | 3210 ms  | 3210 ms  | 74.7 MB      | 639 ms       | contract-capture       |
| synthetic-probes | 1        | 4615 ms  | 4615 ms  | 74.9 MB      | 734 ms       | synthetic-probe-plan   |
| cold-import      | 1        | 1815 ms  | 1815 ms  | 73.2 MB      | 624 ms       | cold-import-readiness  |
| workspace-plan   | 1        | 3167 ms  | 3167 ms  | 76.3 MB      | 747 ms       | workspace-plan         |
| platform-probes  | 1        | 2496 ms  | 2496 ms  | 79.3 MB      | 774 ms       | platform-probes        |
| import-loop      | 1        | 3878 ms  | 3878 ms  | 48.7 MB      | 217 ms       | import-loop-profile    |
