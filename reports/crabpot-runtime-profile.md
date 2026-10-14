# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 11565 ms           |
| Command P95 wall time  | 11849 ms           |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 9695               |
| CPU samples            | 9695               |
| Max peak RSS           | 761.2 MB           |
| Max RSS delta          | 731.8 MB           |
| Max CPU estimate       | 15850 ms           |
| Max harness heap delta | 29.2 MB            |

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
| observedSdkImports    | 1221  |
| contractProbes        | 218   |
| issueFindings         | 250   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 29 ms       | 31 ms    | 32 MB        | 0 MB          | 31 ms        | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 11288 ms    | 11299 ms | 753.9 MB     | 724.6 MB      | 15340 ms     | 29.2 MB    | 1328/1328       | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 11565 ms    | 11638 ms | 756.6 MB     | 726.9 MB      | 15804 ms     | 21.4 MB    | 1368/1368       | 0          |
| contract-capture       | Contract capture inventory                      | 11570 ms    | 11616 ms | 754.8 MB     | 726 MB        | 15519 ms     | 21.2 MB    | 1367/1367       | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 11655 ms    | 11783 ms | 757.5 MB     | 729.1 MB      | 15565 ms     | 21.7 MB    | 1383/1383       | 0          |
| cold-import-readiness  | Cold import readiness                           | 11491 ms    | 11651 ms | 756.8 MB     | 729.1 MB      | 15799 ms     | 20.9 MB    | 1358/1358       | 0          |
| workspace-plan         | Workspace execution plan                        | 11605 ms    | 11663 ms | 761.2 MB     | 731.8 MB      | 15850 ms     | 20.9 MB    | 1372/1372       | 0          |
| platform-probes        | Platform and loader probes                      | 11849 ms    | 11880 ms | 759.8 MB     | 730.7 MB      | 15717 ms     | 21.2 MB    | 1403/1403       | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 948 ms      | 967 ms   | 78.4 MB      | 50.1 MB       | 543 ms       | 1.8 MB     | 113/113         | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 29 ms    | 31 ms    | 32 MB        | 31 ms        | 3/3             | node-boot              |
| fixture-scan     | 1        | 11288 ms | 11299 ms | 753.9 MB     | 15340 ms     | 1328/1328       | fixture-inspection     |
| target-registry  | 1        | 11565 ms | 11638 ms | 756.6 MB     | 15804 ms     | 1368/1368       | compat-report-registry |
| contract-capture | 1        | 11570 ms | 11616 ms | 754.8 MB     | 15519 ms     | 1367/1367       | contract-capture       |
| synthetic-probes | 1        | 11655 ms | 11783 ms | 757.5 MB     | 15565 ms     | 1383/1383       | synthetic-probe-plan   |
| cold-import      | 1        | 11491 ms | 11651 ms | 756.8 MB     | 15799 ms     | 1358/1358       | cold-import-readiness  |
| workspace-plan   | 1        | 11605 ms | 11663 ms | 761.2 MB     | 15850 ms     | 1372/1372       | workspace-plan         |
| platform-probes  | 1        | 11849 ms | 11880 ms | 759.8 MB     | 15717 ms     | 1403/1403       | platform-probes        |
| import-loop      | 1        | 948 ms   | 967 ms   | 78.4 MB      | 543 ms       | 113/113         | import-loop-profile    |
