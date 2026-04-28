# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 1

## Summary

| Metric                 | Value   |
| ---------------------- | ------- |
| Commands               | 9       |
| P50 wall time          | 1218 ms |
| P95 wall time          | 2487 ms |
| Max peak RSS           | 81.2 MB |
| Max RSS delta          | 30 MB   |
| Max CPU estimate       | 840 ms  |
| Max harness heap delta | 1.5 MB  |

## Target OpenClaw Registry Surface

| Metric                 | Value       |
| ---------------------- | ----------- |
| status                 | ok          |
| configuredPath         | ../openclaw |
| compatRecords          | 56          |
| hookNames              | 35          |
| apiRegistrars          | 48          |
| capturedRegistrars     | 26          |
| sdkExports             | 292         |
| manifestFields         | 35          |
| manifestContractFields | 17          |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 29    |
| sourceFiles           | 746   |
| observedHooks         | 77    |
| observedRegistrations | 100   |
| observedSdkImports    | 382   |
| contractProbes        | 159   |
| issueFindings         | 166   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | ---------- |
| node-boot              | Node boot                                       | 619 ms      | 619 ms   | 0 MB         | 0 MB          | 0 ms         | 0.7 MB     | 0          |
| fixture-inspection     | Fixture inspection                              | 1226 ms     | 1226 ms  | 75 MB        | 25.1 MB       | 517 ms       | 1.3 MB     | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 1218 ms     | 1218 ms  | 79.6 MB      | 30 MB         | 561 ms       | 1.2 MB     | 0          |
| contract-capture       | Contract capture inventory                      | 1049 ms     | 1049 ms  | 75.4 MB      | 24.7 MB       | 378 ms       | 1.1 MB     | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 966 ms      | 966 ms   | 76.8 MB      | 18.2 MB       | 432 ms       | 0.9 MB     | 0          |
| cold-import-readiness  | Cold import readiness                           | 1796 ms     | 1796 ms  | 66.2 MB      | 24.1 MB       | 497 ms       | 1.5 MB     | 0          |
| workspace-plan         | Workspace execution plan                        | 1070 ms     | 1070 ms  | 75 MB        | 23.7 MB       | 449 ms       | -18.3 MB   | 0          |
| platform-probes        | Platform and loader probes                      | 1218 ms     | 1218 ms  | 81.2 MB      | 28 MB         | 840 ms       | 1 MB       | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 2487 ms     | 2487 ms  | 53.8 MB      | 0.9 MB        | 142 ms       | 1.5 MB     | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | ---------------------- |
| baseline         | 1        | 619 ms   | 619 ms   | 0 MB         | 0 ms         | node-boot              |
| fixture-scan     | 1        | 1226 ms  | 1226 ms  | 75 MB        | 517 ms       | fixture-inspection     |
| target-registry  | 1        | 1218 ms  | 1218 ms  | 79.6 MB      | 561 ms       | compat-report-registry |
| contract-capture | 1        | 1049 ms  | 1049 ms  | 75.4 MB      | 378 ms       | contract-capture       |
| synthetic-probes | 1        | 966 ms   | 966 ms   | 76.8 MB      | 432 ms       | synthetic-probe-plan   |
| cold-import      | 1        | 1796 ms  | 1796 ms  | 66.2 MB      | 497 ms       | cold-import-readiness  |
| workspace-plan   | 1        | 1070 ms  | 1070 ms  | 75 MB        | 449 ms       | workspace-plan         |
| platform-probes  | 1        | 1218 ms  | 1218 ms  | 81.2 MB      | 840 ms       | platform-probes        |
| import-loop      | 1        | 2487 ms  | 2487 ms  | 53.8 MB      | 142 ms       | import-loop-profile    |
