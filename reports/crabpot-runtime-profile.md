# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 8347 ms            |
| Command P95 wall time  | 8737 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 7170               |
| CPU samples            | 7170               |
| Max peak RSS           | 518.2 MB           |
| Max RSS delta          | 491.5 MB           |
| Max CPU estimate       | 12461 ms           |
| Max harness heap delta | 21.5 MB            |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 32         |
| hookNames              | 42         |
| apiRegistrars          | 59         |
| capturedRegistrars     | 31         |
| sdkExports             | 352        |
| manifestFields         | 57         |
| manifestContractFields | 24         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 59    |
| sourceFiles           | 2317  |
| observedHooks         | 113   |
| observedRegistrations | 218   |
| observedSdkImports    | 1224  |
| contractProbes        | 218   |
| issueFindings         | 250   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 23 ms       | 25 ms    | 28.9 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 8303 ms     | 8306 ms  | 496 MB       | 469.3 MB      | 11731 ms     | 21.5 MB    | 988/988         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 8438 ms     | 8441 ms  | 505.6 MB     | 477.5 MB      | 11910 ms     | 15.8 MB    | 1006/1006       | 0          |
| contract-capture       | Contract capture inventory                      | 8556 ms     | 8616 ms  | 502.3 MB     | 475.6 MB      | 11978 ms     | 15.9 MB    | 1020/1020       | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 8737 ms     | 8869 ms  | 506.7 MB     | 478.8 MB      | 12461 ms     | 16.2 MB    | 1038/1038       | 0          |
| cold-import-readiness  | Cold import readiness                           | 8347 ms     | 8525 ms  | 499.6 MB     | 471.8 MB      | 11909 ms     | 15.5 MB    | 1003/1003       | 0          |
| workspace-plan         | Workspace execution plan                        | 8318 ms     | 8371 ms  | 518.2 MB     | 491.5 MB      | 11878 ms     | 15.2 MB    | 994/994         | 0          |
| platform-probes        | Platform and loader probes                      | 8632 ms     | 8665 ms  | 513.2 MB     | 486.5 MB      | 11698 ms     | 15.7 MB    | 1029/1029       | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 736 ms      | 789 ms   | 78.1 MB      | 50.7 MB       | 398 ms       | 1.5 MB     | 89/89           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 23 ms    | 25 ms    | 28.9 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 8303 ms  | 8306 ms  | 496 MB       | 11731 ms     | 988/988         | fixture-inspection     |
| target-registry  | 1        | 8438 ms  | 8441 ms  | 505.6 MB     | 11910 ms     | 1006/1006       | compat-report-registry |
| contract-capture | 1        | 8556 ms  | 8616 ms  | 502.3 MB     | 11978 ms     | 1020/1020       | contract-capture       |
| synthetic-probes | 1        | 8737 ms  | 8869 ms  | 506.7 MB     | 12461 ms     | 1038/1038       | synthetic-probe-plan   |
| cold-import      | 1        | 8347 ms  | 8525 ms  | 499.6 MB     | 11909 ms     | 1003/1003       | cold-import-readiness  |
| workspace-plan   | 1        | 8318 ms  | 8371 ms  | 518.2 MB     | 11878 ms     | 994/994         | workspace-plan         |
| platform-probes  | 1        | 8632 ms  | 8665 ms  | 513.2 MB     | 11698 ms     | 1029/1029       | platform-probes        |
| import-loop      | 1        | 736 ms   | 789 ms   | 78.1 MB      | 398 ms       | 89/89           | import-loop-profile    |
