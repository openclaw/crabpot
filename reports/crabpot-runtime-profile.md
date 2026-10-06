# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 11552 ms           |
| Command P95 wall time  | 11870 ms           |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 9712               |
| CPU samples            | 9712               |
| Max peak RSS           | 756.7 MB           |
| Max RSS delta          | 728.6 MB           |
| Max CPU estimate       | 16062 ms           |
| Max harness heap delta | 29.4 MB            |

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
| node-boot              | Node boot                                       | 30 ms       | 36 ms    | 31.4 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 11290 ms    | 11292 ms | 754.3 MB     | 727 MB        | 15512 ms     | 29.4 MB    | 1333/1333       | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 11552 ms    | 11752 ms | 755.2 MB     | 726.3 MB      | 15900 ms     | 21.2 MB    | 1375/1375       | 0          |
| contract-capture       | Contract capture inventory                      | 11592 ms    | 11854 ms | 755.6 MB     | 728.1 MB      | 16062 ms     | 21.1 MB    | 1378/1378       | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 11681 ms    | 11771 ms | 755.2 MB     | 727.2 MB      | 15750 ms     | 21.5 MB    | 1378/1378       | 0          |
| cold-import-readiness  | Cold import readiness                           | 11552 ms    | 11577 ms | 753.8 MB     | 725.9 MB      | 15733 ms     | 21 MB      | 1364/1364       | 0          |
| workspace-plan         | Workspace execution plan                        | 11513 ms    | 11611 ms | 756.7 MB     | 727.2 MB      | 15861 ms     | 20.6 MB    | 1365/1365       | 0          |
| platform-probes        | Platform and loader probes                      | 11870 ms    | 11950 ms | 755.1 MB     | 728.6 MB      | 15786 ms     | 21.3 MB    | 1406/1406       | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 925 ms      | 938 ms   | 78.5 MB      | 51.7 MB       | 510 ms       | 1.8 MB     | 110/110         | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 30 ms    | 36 ms    | 31.4 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 11290 ms | 11292 ms | 754.3 MB     | 15512 ms     | 1333/1333       | fixture-inspection     |
| target-registry  | 1        | 11552 ms | 11752 ms | 755.2 MB     | 15900 ms     | 1375/1375       | compat-report-registry |
| contract-capture | 1        | 11592 ms | 11854 ms | 755.6 MB     | 16062 ms     | 1378/1378       | contract-capture       |
| synthetic-probes | 1        | 11681 ms | 11771 ms | 755.2 MB     | 15750 ms     | 1378/1378       | synthetic-probe-plan   |
| cold-import      | 1        | 11552 ms | 11577 ms | 753.8 MB     | 15733 ms     | 1364/1364       | cold-import-readiness  |
| workspace-plan   | 1        | 11513 ms | 11611 ms | 756.7 MB     | 15861 ms     | 1365/1365       | workspace-plan         |
| platform-probes  | 1        | 11870 ms | 11950 ms | 755.1 MB     | 15786 ms     | 1406/1406       | platform-probes        |
| import-loop      | 1        | 925 ms   | 938 ms   | 78.5 MB      | 510 ms       | 110/110         | import-loop-profile    |
