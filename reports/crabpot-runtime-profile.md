# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 8923 ms            |
| Command P95 wall time  | 9179 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 7564               |
| CPU samples            | 7564               |
| Max peak RSS           | 754.6 MB           |
| Max RSS delta          | 727.9 MB           |
| Max CPU estimate       | 12163 ms           |
| Max harness heap delta | 23.7 MB            |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 34         |
| hookNames              | 42         |
| apiRegistrars          | 57         |
| capturedRegistrars     | 31         |
| sdkExports             | 338        |
| manifestFields         | 52         |
| manifestContractFields | 22         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 59    |
| sourceFiles           | 2283  |
| observedHooks         | 113   |
| observedRegistrations | 217   |
| observedSdkImports    | 1181  |
| contractProbes        | 237   |
| issueFindings         | 269   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 22 ms       | 25 ms    | 29.8 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 8813 ms     | 8833 ms  | 752 MB       | 724.3 MB      | 11977 ms     | 23.7 MB    | 1050/1050       | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 8923 ms     | 8945 ms  | 751.6 MB     | 724.2 MB      | 12129 ms     | 16.6 MB    | 1062/1062       | 0          |
| contract-capture       | Contract capture inventory                      | 9021 ms     | 9070 ms  | 753.8 MB     | 725.3 MB      | 12145 ms     | 16.8 MB    | 1072/1072       | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 9053 ms     | 9064 ms  | 753.8 MB     | 727.1 MB      | 12068 ms     | 16.8 MB    | 1078/1078       | 0          |
| cold-import-readiness  | Cold import readiness                           | 8877 ms     | 8947 ms  | 753.2 MB     | 726.5 MB      | 12087 ms     | 16.5 MB    | 1060/1060       | 0          |
| workspace-plan         | Workspace execution plan                        | 8932 ms     | 8950 ms  | 753.7 MB     | 727 MB        | 12163 ms     | 16.4 MB    | 1062/1062       | 0          |
| platform-probes        | Platform and loader probes                      | 9179 ms     | 9208 ms  | 754.6 MB     | 727.9 MB      | 11961 ms     | 16.7 MB    | 1093/1093       | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 712 ms      | 714 ms   | 78 MB        | 51.4 MB       | 380 ms       | 1.4 MB     | 84/84           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 22 ms    | 25 ms    | 29.8 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 8813 ms  | 8833 ms  | 752 MB       | 11977 ms     | 1050/1050       | fixture-inspection     |
| target-registry  | 1        | 8923 ms  | 8945 ms  | 751.6 MB     | 12129 ms     | 1062/1062       | compat-report-registry |
| contract-capture | 1        | 9021 ms  | 9070 ms  | 753.8 MB     | 12145 ms     | 1072/1072       | contract-capture       |
| synthetic-probes | 1        | 9053 ms  | 9064 ms  | 753.8 MB     | 12068 ms     | 1078/1078       | synthetic-probe-plan   |
| cold-import      | 1        | 8877 ms  | 8947 ms  | 753.2 MB     | 12087 ms     | 1060/1060       | cold-import-readiness  |
| workspace-plan   | 1        | 8932 ms  | 8950 ms  | 753.7 MB     | 12163 ms     | 1062/1062       | workspace-plan         |
| platform-probes  | 1        | 9179 ms  | 9208 ms  | 754.6 MB     | 11961 ms     | 1093/1093       | platform-probes        |
| import-loop      | 1        | 712 ms   | 714 ms   | 78 MB        | 380 ms       | 84/84           | import-loop-profile    |
