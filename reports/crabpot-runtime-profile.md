# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 9045 ms            |
| Command P95 wall time  | 9386 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 7669               |
| CPU samples            | 7669               |
| Max peak RSS           | 756 MB             |
| Max RSS delta          | 727.6 MB           |
| Max CPU estimate       | 12497 ms           |
| Max harness heap delta | 23.8 MB            |

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
| node-boot              | Node boot                                       | 23 ms       | 26 ms    | 30.9 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 8932 ms     | 9072 ms  | 755.4 MB     | 727.1 MB      | 12293 ms     | 23.8 MB    | 1059/1059       | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 9112 ms     | 9277 ms  | 755.3 MB     | 726.4 MB      | 12376 ms     | 17 MB      | 1082/1082       | 0          |
| contract-capture       | Contract capture inventory                      | 9045 ms     | 9060 ms  | 753.4 MB     | 725.2 MB      | 12149 ms     | 16.7 MB    | 1071/1071       | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 9263 ms     | 9375 ms  | 753.2 MB     | 726.5 MB      | 12497 ms     | 17.2 MB    | 1096/1096       | 0          |
| cold-import-readiness  | Cold import readiness                           | 9016 ms     | 9076 ms  | 754.3 MB     | 725.9 MB      | 12325 ms     | 16.7 MB    | 1070/1070       | 0          |
| workspace-plan         | Workspace execution plan                        | 9115 ms     | 9217 ms  | 755.6 MB     | 727.6 MB      | 12406 ms     | 16.6 MB    | 1084/1084       | 0          |
| platform-probes        | Platform and loader probes                      | 9386 ms     | 9393 ms  | 756 MB       | 727.5 MB      | 12352 ms     | 17.1 MB    | 1116/1116       | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 739 ms      | 744 ms   | 76.9 MB      | 50.2 MB       | 388 ms       | 1.4 MB     | 88/88           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 23 ms    | 26 ms    | 30.9 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 8932 ms  | 9072 ms  | 755.4 MB     | 12293 ms     | 1059/1059       | fixture-inspection     |
| target-registry  | 1        | 9112 ms  | 9277 ms  | 755.3 MB     | 12376 ms     | 1082/1082       | compat-report-registry |
| contract-capture | 1        | 9045 ms  | 9060 ms  | 753.4 MB     | 12149 ms     | 1071/1071       | contract-capture       |
| synthetic-probes | 1        | 9263 ms  | 9375 ms  | 753.2 MB     | 12497 ms     | 1096/1096       | synthetic-probe-plan   |
| cold-import      | 1        | 9016 ms  | 9076 ms  | 754.3 MB     | 12325 ms     | 1070/1070       | cold-import-readiness  |
| workspace-plan   | 1        | 9115 ms  | 9217 ms  | 755.6 MB     | 12406 ms     | 1084/1084       | workspace-plan         |
| platform-probes  | 1        | 9386 ms  | 9393 ms  | 756 MB       | 12352 ms     | 1116/1116       | platform-probes        |
| import-loop      | 1        | 739 ms   | 744 ms   | 76.9 MB      | 388 ms       | 88/88           | import-loop-profile    |
