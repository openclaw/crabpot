# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 11326 ms           |
| Command P95 wall time  | 11677 ms           |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 9616               |
| CPU samples            | 9616               |
| Max peak RSS           | 757.4 MB           |
| Max RSS delta          | 730.8 MB           |
| Max CPU estimate       | 15840 ms           |
| Max harness heap delta | 29.6 MB            |

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
| node-boot              | Node boot                                       | 33 ms       | 37 ms    | 26.6 MB      | 0 MB          | 0 ms         | 0.5 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 11206 ms    | 11404 ms | 755.6 MB     | 729 MB        | 15840 ms     | 29.6 MB    | 1342/1342       | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 11270 ms    | 11401 ms | 754.3 MB     | 727.6 MB      | 15391 ms     | 20.9 MB    | 1349/1349       | 0          |
| contract-capture       | Contract capture inventory                      | 11342 ms    | 11453 ms | 756.8 MB     | 730.2 MB      | 15358 ms     | 21 MB      | 1350/1350       | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 11484 ms    | 11550 ms | 756.2 MB     | 729.5 MB      | 15500 ms     | 21.4 MB    | 1372/1372       | 0          |
| cold-import-readiness  | Cold import readiness                           | 11326 ms    | 11403 ms | 754.8 MB     | 728.2 MB      | 15588 ms     | 20.7 MB    | 1350/1350       | 0          |
| workspace-plan         | Workspace execution plan                        | 11366 ms    | 11403 ms | 757.4 MB     | 730.8 MB      | 15611 ms     | 20.6 MB    | 1356/1356       | 0          |
| platform-probes        | Platform and loader probes                      | 11677 ms    | 11683 ms | 757.1 MB     | 730.4 MB      | 15530 ms     | 21 MB      | 1391/1391       | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 863 ms      | 876 ms   | 78.2 MB      | 51.6 MB       | 482 ms       | 1.7 MB     | 103/103         | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 33 ms    | 37 ms    | 26.6 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 11206 ms | 11404 ms | 755.6 MB     | 15840 ms     | 1342/1342       | fixture-inspection     |
| target-registry  | 1        | 11270 ms | 11401 ms | 754.3 MB     | 15391 ms     | 1349/1349       | compat-report-registry |
| contract-capture | 1        | 11342 ms | 11453 ms | 756.8 MB     | 15358 ms     | 1350/1350       | contract-capture       |
| synthetic-probes | 1        | 11484 ms | 11550 ms | 756.2 MB     | 15500 ms     | 1372/1372       | synthetic-probe-plan   |
| cold-import      | 1        | 11326 ms | 11403 ms | 754.8 MB     | 15588 ms     | 1350/1350       | cold-import-readiness  |
| workspace-plan   | 1        | 11366 ms | 11403 ms | 757.4 MB     | 15611 ms     | 1356/1356       | workspace-plan         |
| platform-probes  | 1        | 11677 ms | 11683 ms | 757.1 MB     | 15530 ms     | 1391/1391       | platform-probes        |
| import-loop      | 1        | 863 ms   | 876 ms   | 78.2 MB      | 482 ms       | 103/103         | import-loop-profile    |
