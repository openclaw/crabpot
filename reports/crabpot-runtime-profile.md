# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 11949 ms           |
| Command P95 wall time  | 12271 ms           |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 10058              |
| CPU samples            | 10058              |
| Max peak RSS           | 759.6 MB           |
| Max RSS delta          | 729.9 MB           |
| Max CPU estimate       | 16612 ms           |
| Max harness heap delta | 31.8 MB            |

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
| sourceFiles           | 2279  |
| observedHooks         | 113   |
| observedRegistrations | 217   |
| observedSdkImports    | 1181  |
| contractProbes        | 237   |
| issueFindings         | 269   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 30 ms       | 33 ms    | 31.5 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 11859 ms    | 11996 ms | 753.5 MB     | 724.1 MB      | 16339 ms     | 31.8 MB    | 1397/1397       | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 12194 ms    | 12206 ms | 754.8 MB     | 726.9 MB      | 16612 ms     | 22.6 MB    | 1432/1432       | 0          |
| contract-capture       | Contract capture inventory                      | 12111 ms    | 12381 ms | 753.6 MB     | 723.5 MB      | 16591 ms     | 23 MB      | 1437/1437       | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 12271 ms    | 12334 ms | 754.3 MB     | 723.7 MB      | 16552 ms     | 22.6 MB    | 1437/1437       | 0          |
| cold-import-readiness  | Cold import readiness                           | 11949 ms    | 11961 ms | 754.7 MB     | 725.5 MB      | 16358 ms     | 21.7 MB    | 1409/1409       | 0          |
| workspace-plan         | Workspace execution plan                        | 11828 ms    | 11948 ms | 755.2 MB     | 727.6 MB      | 16369 ms     | 21.5 MB    | 1398/1398       | 0          |
| platform-probes        | Platform and loader probes                      | 12090 ms    | 12181 ms | 759.6 MB     | 729.9 MB      | 16067 ms     | 21.6 MB    | 1428/1428       | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 974 ms      | 1006 ms  | 78.6 MB      | 50.6 MB       | 566 ms       | 1.8 MB     | 117/117         | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 30 ms    | 33 ms    | 31.5 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 11859 ms | 11996 ms | 753.5 MB     | 16339 ms     | 1397/1397       | fixture-inspection     |
| target-registry  | 1        | 12194 ms | 12206 ms | 754.8 MB     | 16612 ms     | 1432/1432       | compat-report-registry |
| contract-capture | 1        | 12111 ms | 12381 ms | 753.6 MB     | 16591 ms     | 1437/1437       | contract-capture       |
| synthetic-probes | 1        | 12271 ms | 12334 ms | 754.3 MB     | 16552 ms     | 1437/1437       | synthetic-probe-plan   |
| cold-import      | 1        | 11949 ms | 11961 ms | 754.7 MB     | 16358 ms     | 1409/1409       | cold-import-readiness  |
| workspace-plan   | 1        | 11828 ms | 11948 ms | 755.2 MB     | 16369 ms     | 1398/1398       | workspace-plan         |
| platform-probes  | 1        | 12090 ms | 12181 ms | 759.6 MB     | 16067 ms     | 1428/1428       | platform-probes        |
| import-loop      | 1        | 974 ms   | 1006 ms  | 78.6 MB      | 566 ms       | 117/117         | import-loop-profile    |
