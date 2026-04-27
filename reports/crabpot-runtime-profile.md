# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 1

## Summary

| Metric                 | Value   |
| ---------------------- | ------- |
| Commands               | 9       |
| P50 wall time          | 1081 ms |
| P95 wall time          | 2926 ms |
| Max peak RSS           | 80.2 MB |
| Max RSS delta          | 30.5 MB |
| Max CPU estimate       | 561 ms  |
| Max harness heap delta | 1.1 MB  |

## Target OpenClaw Registry Surface

| Metric                 | Value       |
| ---------------------- | ----------- |
| status                 | ok          |
| configuredPath         | ../openclaw |
| compatRecords          | 51          |
| hookNames              | 32          |
| apiRegistrars          | 41          |
| capturedRegistrars     | 19          |
| sdkExports             | 316         |
| manifestFields         | 35          |
| manifestContractFields | 17          |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 28    |
| sourceFiles           | 738   |
| observedHooks         | 44    |
| observedRegistrations | 59    |
| observedSdkImports    | 66    |
| contractProbes        | 151   |
| issueFindings         | 153   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | ---------- |
| node-boot              | Node boot                                       | 617 ms      | 617 ms   | 0 MB         | 0 MB          | 0 ms         | 0.6 MB     | 0          |
| fixture-inspection     | Fixture inspection                              | 832 ms      | 832 ms   | 63 MB        | 0 MB          | 7 ms         | 1 MB       | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 1219 ms     | 1219 ms  | 80.2 MB      | 29.9 MB       | 474 ms       | 1 MB       | 0          |
| contract-capture       | Contract capture inventory                      | 858 ms      | 858 ms   | 59.4 MB      | 0 MB          | 203 ms       | 0.6 MB     | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 1081 ms     | 1081 ms  | 73.8 MB      | 25.5 MB       | 504 ms       | 0.7 MB     | 0          |
| cold-import-readiness  | Cold import readiness                           | 891 ms      | 891 ms   | 60.9 MB      | 0 MB          | 37 ms        | 0.6 MB     | 0          |
| workspace-plan         | Workspace execution plan                        | 1093 ms     | 1093 ms  | 74.5 MB      | 27 MB         | 396 ms       | 0.8 MB     | 0          |
| platform-probes        | Platform and loader probes                      | 1253 ms     | 1253 ms  | 77.8 MB      | 30.5 MB       | 561 ms       | 0.7 MB     | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 2926 ms     | 2926 ms  | 53.3 MB      | 2.5 MB        | 132 ms       | 1.1 MB     | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | ---------------------- |
| baseline         | 1        | 617 ms   | 617 ms   | 0 MB         | 0 ms         | node-boot              |
| fixture-scan     | 1        | 832 ms   | 832 ms   | 63 MB        | 7 ms         | fixture-inspection     |
| target-registry  | 1        | 1219 ms  | 1219 ms  | 80.2 MB      | 474 ms       | compat-report-registry |
| contract-capture | 1        | 858 ms   | 858 ms   | 59.4 MB      | 203 ms       | contract-capture       |
| synthetic-probes | 1        | 1081 ms  | 1081 ms  | 73.8 MB      | 504 ms       | synthetic-probe-plan   |
| cold-import      | 1        | 891 ms   | 891 ms   | 60.9 MB      | 37 ms        | cold-import-readiness  |
| workspace-plan   | 1        | 1093 ms  | 1093 ms  | 74.5 MB      | 396 ms       | workspace-plan         |
| platform-probes  | 1        | 1253 ms  | 1253 ms  | 77.8 MB      | 561 ms       | platform-probes        |
| import-loop      | 1        | 2926 ms  | 2926 ms  | 53.3 MB      | 132 ms       | import-loop-profile    |
