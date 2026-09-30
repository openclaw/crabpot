# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 11661 ms           |
| Command P95 wall time  | 11953 ms           |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 9813               |
| CPU samples            | 9813               |
| Max peak RSS           | 756.8 MB           |
| Max RSS delta          | 730.2 MB           |
| Max CPU estimate       | 16394 ms           |
| Max harness heap delta | 29.9 MB            |

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
| sourceFiles           | 2330  |
| observedHooks         | 113   |
| observedRegistrations | 218   |
| observedSdkImports    | 1204  |
| contractProbes        | 218   |
| issueFindings         | 250   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 30 ms       | 41 ms    | 29.4 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 11552 ms    | 11636 ms | 754.9 MB     | 728.3 MB      | 15778 ms     | 29.9 MB    | 1361/1361       | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 11695 ms    | 11958 ms | 754.8 MB     | 727 MB        | 16394 ms     | 22 MB      | 1390/1390       | 0          |
| contract-capture       | Contract capture inventory                      | 11693 ms    | 11703 ms | 754.4 MB     | 726.4 MB      | 15715 ms     | 21.5 MB    | 1382/1382       | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 11747 ms    | 11822 ms | 753.7 MB     | 727.1 MB      | 15735 ms     | 21.6 MB    | 1390/1390       | 0          |
| cold-import-readiness  | Cold import readiness                           | 11661 ms    | 11740 ms | 755.2 MB     | 726.5 MB      | 15908 ms     | 21.1 MB    | 1375/1375       | 0          |
| workspace-plan         | Workspace execution plan                        | 11657 ms    | 11763 ms | 756.4 MB     | 729.9 MB      | 15962 ms     | 20.8 MB    | 1383/1383       | 0          |
| platform-probes        | Platform and loader probes                      | 11953 ms    | 11954 ms | 756.8 MB     | 730.2 MB      | 15826 ms     | 21.4 MB    | 1415/1415       | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 955 ms      | 956 ms   | 78.5 MB      | 50.7 MB       | 553 ms       | 1.8 MB     | 114/114         | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 30 ms    | 41 ms    | 29.4 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 11552 ms | 11636 ms | 754.9 MB     | 15778 ms     | 1361/1361       | fixture-inspection     |
| target-registry  | 1        | 11695 ms | 11958 ms | 754.8 MB     | 16394 ms     | 1390/1390       | compat-report-registry |
| contract-capture | 1        | 11693 ms | 11703 ms | 754.4 MB     | 15715 ms     | 1382/1382       | contract-capture       |
| synthetic-probes | 1        | 11747 ms | 11822 ms | 753.7 MB     | 15735 ms     | 1390/1390       | synthetic-probe-plan   |
| cold-import      | 1        | 11661 ms | 11740 ms | 755.2 MB     | 15908 ms     | 1375/1375       | cold-import-readiness  |
| workspace-plan   | 1        | 11657 ms | 11763 ms | 756.4 MB     | 15962 ms     | 1383/1383       | workspace-plan         |
| platform-probes  | 1        | 11953 ms | 11954 ms | 756.8 MB     | 15826 ms     | 1415/1415       | platform-probes        |
| import-loop      | 1        | 955 ms   | 956 ms   | 78.5 MB      | 553 ms       | 114/114         | import-loop-profile    |
