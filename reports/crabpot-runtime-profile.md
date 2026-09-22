# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 11356 ms           |
| Command P95 wall time  | 11670 ms           |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 9622               |
| CPU samples            | 9622               |
| Max peak RSS           | 759.9 MB           |
| Max RSS delta          | 733.3 MB           |
| Max CPU estimate       | 15914 ms           |
| Max harness heap delta | 29.6 MB            |

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
| node-boot              | Node boot                                       | 35 ms       | 40 ms    | 29.9 MB      | 0 MB          | 40 ms        | 0.5 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 11259 ms    | 11380 ms | 755.3 MB     | 727.5 MB      | 15568 ms     | 29.6 MB    | 1332/1332       | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 11515 ms    | 11559 ms | 756.2 MB     | 727.4 MB      | 15709 ms     | 21.4 MB    | 1362/1362       | 0          |
| contract-capture       | Contract capture inventory                      | 11656 ms    | 11719 ms | 753.4 MB     | 724 MB        | 15914 ms     | 21.6 MB    | 1379/1379       | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 11670 ms    | 11685 ms | 754.4 MB     | 726.4 MB      | 15778 ms     | 21.7 MB    | 1382/1382       | 0          |
| cold-import-readiness  | Cold import readiness                           | 11346 ms    | 11354 ms | 759.9 MB     | 733.3 MB      | 15464 ms     | 20.7 MB    | 1340/1340       | 0          |
| workspace-plan         | Workspace execution plan                        | 11356 ms    | 11366 ms | 754.4 MB     | 727.4 MB      | 15662 ms     | 20.6 MB    | 1345/1345       | 0          |
| platform-probes        | Platform and loader probes                      | 11646 ms    | 11701 ms | 753.3 MB     | 725.5 MB      | 15399 ms     | 21 MB      | 1372/1372       | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 906 ms      | 908 ms   | 78.4 MB      | 50.8 MB       | 515 ms       | 1.7 MB     | 107/107         | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 35 ms    | 40 ms    | 29.9 MB      | 40 ms        | 3/3             | node-boot              |
| fixture-scan     | 1        | 11259 ms | 11380 ms | 755.3 MB     | 15568 ms     | 1332/1332       | fixture-inspection     |
| target-registry  | 1        | 11515 ms | 11559 ms | 756.2 MB     | 15709 ms     | 1362/1362       | compat-report-registry |
| contract-capture | 1        | 11656 ms | 11719 ms | 753.4 MB     | 15914 ms     | 1379/1379       | contract-capture       |
| synthetic-probes | 1        | 11670 ms | 11685 ms | 754.4 MB     | 15778 ms     | 1382/1382       | synthetic-probe-plan   |
| cold-import      | 1        | 11346 ms | 11354 ms | 759.9 MB     | 15464 ms     | 1340/1340       | cold-import-readiness  |
| workspace-plan   | 1        | 11356 ms | 11366 ms | 754.4 MB     | 15662 ms     | 1345/1345       | workspace-plan         |
| platform-probes  | 1        | 11646 ms | 11701 ms | 753.3 MB     | 15399 ms     | 1372/1372       | platform-probes        |
| import-loop      | 1        | 906 ms   | 908 ms   | 78.4 MB      | 515 ms       | 107/107         | import-loop-profile    |
