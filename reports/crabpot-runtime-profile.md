# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 9132 ms            |
| Command P95 wall time  | 9401 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 7687               |
| CPU samples            | 7687               |
| Max peak RSS           | 757.5 MB           |
| Max RSS delta          | 729.9 MB           |
| Max CPU estimate       | 12497 ms           |
| Max harness heap delta | 24.2 MB            |

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
| node-boot              | Node boot                                       | 25 ms       | 27 ms    | 29.5 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 9009 ms     | 9016 ms  | 753.2 MB     | 726.1 MB      | 12207 ms     | 24.2 MB    | 1062/1062       | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 9156 ms     | 9292 ms  | 754.1 MB     | 726.1 MB      | 12470 ms     | 17.2 MB    | 1086/1086       | 0          |
| contract-capture       | Contract capture inventory                      | 9132 ms     | 9194 ms  | 754.6 MB     | 726.3 MB      | 12337 ms     | 17.4 MB    | 1086/1086       | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 9171 ms     | 9274 ms  | 755.5 MB     | 726.9 MB      | 12297 ms     | 17.3 MB    | 1090/1090       | 0          |
| cold-import-readiness  | Cold import readiness                           | 9154 ms     | 9196 ms  | 753.3 MB     | 726.6 MB      | 12497 ms     | 17.1 MB    | 1082/1082       | 0          |
| workspace-plan         | Workspace execution plan                        | 9092 ms     | 9133 ms  | 753.8 MB     | 727.1 MB      | 12329 ms     | 16.7 MB    | 1077/1077       | 0          |
| platform-probes        | Platform and loader probes                      | 9401 ms     | 9472 ms  | 757.5 MB     | 729.9 MB      | 12418 ms     | 17.2 MB    | 1113/1113       | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 740 ms      | 743 ms   | 77.9 MB      | 49.9 MB       | 400 ms       | 1.4 MB     | 88/88           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 25 ms    | 27 ms    | 29.5 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 9009 ms  | 9016 ms  | 753.2 MB     | 12207 ms     | 1062/1062       | fixture-inspection     |
| target-registry  | 1        | 9156 ms  | 9292 ms  | 754.1 MB     | 12470 ms     | 1086/1086       | compat-report-registry |
| contract-capture | 1        | 9132 ms  | 9194 ms  | 754.6 MB     | 12337 ms     | 1086/1086       | contract-capture       |
| synthetic-probes | 1        | 9171 ms  | 9274 ms  | 755.5 MB     | 12297 ms     | 1090/1090       | synthetic-probe-plan   |
| cold-import      | 1        | 9154 ms  | 9196 ms  | 753.3 MB     | 12497 ms     | 1082/1082       | cold-import-readiness  |
| workspace-plan   | 1        | 9092 ms  | 9133 ms  | 753.8 MB     | 12329 ms     | 1077/1077       | workspace-plan         |
| platform-probes  | 1        | 9401 ms  | 9472 ms  | 757.5 MB     | 12418 ms     | 1113/1113       | platform-probes        |
| import-loop      | 1        | 740 ms   | 743 ms   | 77.9 MB      | 400 ms       | 88/88           | import-loop-profile    |
