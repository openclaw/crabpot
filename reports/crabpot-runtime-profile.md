# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 11383 ms           |
| Command P95 wall time  | 11754 ms           |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 9579               |
| CPU samples            | 9579               |
| Max peak RSS           | 757.1 MB           |
| Max RSS delta          | 728.6 MB           |
| Max CPU estimate       | 15788 ms           |
| Max harness heap delta | 29.3 MB            |

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
| sourceFiles           | 2302  |
| observedHooks         | 113   |
| observedRegistrations | 218   |
| observedSdkImports    | 1204  |
| contractProbes        | 218   |
| issueFindings         | 250   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 27 ms       | 29 ms    | 32 MB        | 0 MB          | 0 ms         | 0.5 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 11083 ms    | 11151 ms | 755.3 MB     | 725.3 MB      | 15255 ms     | 29.3 MB    | 1307/1307       | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 11353 ms    | 11378 ms | 755.1 MB     | 726.5 MB      | 15440 ms     | 21 MB      | 1338/1338       | 0          |
| contract-capture       | Contract capture inventory                      | 11492 ms    | 11539 ms | 754.2 MB     | 725.6 MB      | 15658 ms     | 20.8 MB    | 1355/1355       | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 11446 ms    | 11589 ms | 754.9 MB     | 728.3 MB      | 15506 ms     | 21 MB      | 1360/1360       | 0          |
| cold-import-readiness  | Cold import readiness                           | 11383 ms    | 11442 ms | 753 MB       | 725 MB        | 15630 ms     | 20.6 MB    | 1348/1348       | 0          |
| workspace-plan         | Workspace execution plan                        | 11480 ms    | 11592 ms | 757.1 MB     | 728.6 MB      | 15788 ms     | 20.8 MB    | 1365/1365       | 0          |
| platform-probes        | Platform and loader probes                      | 11754 ms    | 11803 ms | 754.7 MB     | 727.8 MB      | 15692 ms     | 21 MB      | 1390/1390       | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 947 ms      | 954 ms   | 78.7 MB      | 50.1 MB       | 524 ms       | 1.8 MB     | 113/113         | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 27 ms    | 29 ms    | 32 MB        | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 11083 ms | 11151 ms | 755.3 MB     | 15255 ms     | 1307/1307       | fixture-inspection     |
| target-registry  | 1        | 11353 ms | 11378 ms | 755.1 MB     | 15440 ms     | 1338/1338       | compat-report-registry |
| contract-capture | 1        | 11492 ms | 11539 ms | 754.2 MB     | 15658 ms     | 1355/1355       | contract-capture       |
| synthetic-probes | 1        | 11446 ms | 11589 ms | 754.9 MB     | 15506 ms     | 1360/1360       | synthetic-probe-plan   |
| cold-import      | 1        | 11383 ms | 11442 ms | 753 MB       | 15630 ms     | 1348/1348       | cold-import-readiness  |
| workspace-plan   | 1        | 11480 ms | 11592 ms | 757.1 MB     | 15788 ms     | 1365/1365       | workspace-plan         |
| platform-probes  | 1        | 11754 ms | 11803 ms | 754.7 MB     | 15692 ms     | 1390/1390       | platform-probes        |
| import-loop      | 1        | 947 ms   | 954 ms   | 78.7 MB      | 524 ms       | 113/113         | import-loop-profile    |
