# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 8660 ms            |
| Command P95 wall time  | 8911 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 7352               |
| CPU samples            | 7352               |
| Max peak RSS           | 761.9 MB           |
| Max RSS delta          | 735.5 MB           |
| Max CPU estimate       | 11952 ms           |
| Max harness heap delta | 24.1 MB            |

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
| sourceFiles           | 2227  |
| observedHooks         | 113   |
| observedRegistrations | 213   |
| observedSdkImports    | 1171  |
| contractProbes        | 260   |
| issueFindings         | 292   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 21 ms       | 27 ms    | 26.7 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 8691 ms     | 8843 ms  | 753.6 MB     | 727 MB        | 11929 ms     | 24.1 MB    | 1039/1039       | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 8741 ms     | 8758 ms  | 757.9 MB     | 731.2 MB      | 11841 ms     | 16.5 MB    | 1043/1043       | 0          |
| contract-capture       | Contract capture inventory                      | 8798 ms     | 8894 ms  | 755.5 MB     | 728.9 MB      | 11918 ms     | 16.6 MB    | 1050/1050       | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 8911 ms     | 8946 ms  | 754 MB       | 727.3 MB      | 11952 ms     | 16.7 MB    | 1062/1062       | 0          |
| cold-import-readiness  | Cold import readiness                           | 8539 ms     | 8649 ms  | 756.1 MB     | 729.5 MB      | 11754 ms     | 16.2 MB    | 1022/1022       | 0          |
| workspace-plan         | Workspace execution plan                        | 8582 ms     | 8623 ms  | 761.9 MB     | 735.5 MB      | 11650 ms     | 15.9 MB    | 1021/1021       | 0          |
| platform-probes        | Platform and loader probes                      | 8660 ms     | 8703 ms  | 759.1 MB     | 734.4 MB      | 11357 ms     | 15.9 MB    | 1033/1033       | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 661 ms      | 664 ms   | 78.4 MB      | 52.2 MB       | 344 ms       | 1.3 MB     | 79/79           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 21 ms    | 27 ms    | 26.7 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 8691 ms  | 8843 ms  | 753.6 MB     | 11929 ms     | 1039/1039       | fixture-inspection     |
| target-registry  | 1        | 8741 ms  | 8758 ms  | 757.9 MB     | 11841 ms     | 1043/1043       | compat-report-registry |
| contract-capture | 1        | 8798 ms  | 8894 ms  | 755.5 MB     | 11918 ms     | 1050/1050       | contract-capture       |
| synthetic-probes | 1        | 8911 ms  | 8946 ms  | 754 MB       | 11952 ms     | 1062/1062       | synthetic-probe-plan   |
| cold-import      | 1        | 8539 ms  | 8649 ms  | 756.1 MB     | 11754 ms     | 1022/1022       | cold-import-readiness  |
| workspace-plan   | 1        | 8582 ms  | 8623 ms  | 761.9 MB     | 11650 ms     | 1021/1021       | workspace-plan         |
| platform-probes  | 1        | 8660 ms  | 8703 ms  | 759.1 MB     | 11357 ms     | 1033/1033       | platform-probes        |
| import-loop      | 1        | 661 ms   | 664 ms   | 78.4 MB      | 344 ms       | 79/79           | import-loop-profile    |
