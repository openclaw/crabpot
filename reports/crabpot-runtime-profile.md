# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 1

## Summary

| Metric                 | Value   |
| ---------------------- | ------- |
| Commands               | 9       |
| P50 wall time          | 1300 ms |
| P95 wall time          | 2455 ms |
| Max peak RSS           | 78.4 MB |
| Max RSS delta          | 74.9 MB |
| Max CPU estimate       | 809 ms  |
| Max harness heap delta | 2.2 MB  |

## Target OpenClaw Registry Surface

| Metric                 | Value       |
| ---------------------- | ----------- |
| status                 | ok          |
| configuredPath         | ../openclaw |
| compatRecords          | 61          |
| hookNames              | 35          |
| apiRegistrars          | 48          |
| capturedRegistrars     | 26          |
| sdkExports             | 293         |
| manifestFields         | 35          |
| manifestContractFields | 17          |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 29    |
| sourceFiles           | 751   |
| observedHooks         | 76    |
| observedRegistrations | 100   |
| observedSdkImports    | 330   |
| contractProbes        | 153   |
| issueFindings         | 157   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | ---------- |
| node-boot              | Node boot                                       | 340 ms      | 340 ms   | 24.3 MB      | 0 MB          | 0 ms         | 0.8 MB     | 0          |
| fixture-inspection     | Fixture inspection                              | 608 ms      | 608 ms   | 71.2 MB      | 0.9 MB        | 369 ms       | 1.5 MB     | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 967 ms      | 967 ms   | 78.4 MB      | 12.2 MB       | 611 ms       | -16.9 MB   | 0          |
| contract-capture       | Contract capture inventory                      | 1396 ms     | 1396 ms  | 73 MB        | 26.6 MB       | 547 ms       | 1.8 MB     | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2026 ms     | 2026 ms  | 77.2 MB      | 26.8 MB       | 632 ms       | 2.2 MB     | 0          |
| cold-import-readiness  | Cold import readiness                           | 1596 ms     | 1596 ms  | 75 MB        | 74.9 MB       | 809 ms       | 1.9 MB     | 0          |
| workspace-plan         | Workspace execution plan                        | 1300 ms     | 1300 ms  | 76.7 MB      | 39.9 MB       | 729 ms       | 1.4 MB     | 0          |
| platform-probes        | Platform and loader probes                      | 851 ms      | 851 ms   | 75.2 MB      | 26.6 MB       | 606 ms       | 1.1 MB     | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 2455 ms     | 2455 ms  | 52.8 MB      | 2.6 MB        | 125 ms       | 1.9 MB     | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | ---------------------- |
| baseline         | 1        | 340 ms   | 340 ms   | 24.3 MB      | 0 ms         | node-boot              |
| fixture-scan     | 1        | 608 ms   | 608 ms   | 71.2 MB      | 369 ms       | fixture-inspection     |
| target-registry  | 1        | 967 ms   | 967 ms   | 78.4 MB      | 611 ms       | compat-report-registry |
| contract-capture | 1        | 1396 ms  | 1396 ms  | 73 MB        | 547 ms       | contract-capture       |
| synthetic-probes | 1        | 2026 ms  | 2026 ms  | 77.2 MB      | 632 ms       | synthetic-probe-plan   |
| cold-import      | 1        | 1596 ms  | 1596 ms  | 75 MB        | 809 ms       | cold-import-readiness  |
| workspace-plan   | 1        | 1300 ms  | 1300 ms  | 76.7 MB      | 729 ms       | workspace-plan         |
| platform-probes  | 1        | 851 ms   | 851 ms   | 75.2 MB      | 606 ms       | platform-probes        |
| import-loop      | 1        | 2455 ms  | 2455 ms  | 52.8 MB      | 125 ms       | import-loop-profile    |
