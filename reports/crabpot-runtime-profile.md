# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 8171 ms            |
| Command P95 wall time  | 8450 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 6983               |
| CPU samples            | 6983               |
| Max peak RSS           | 761.1 MB           |
| Max RSS delta          | 737.1 MB           |
| Max CPU estimate       | 11288 ms           |
| Max harness heap delta | 21.6 MB            |

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
| node-boot              | Node boot                                       | 24 ms       | 25 ms    | 26.7 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 8079 ms     | 8084 ms  | 756.3 MB     | 729.6 MB      | 10873 ms     | 21.6 MB    | 962/962         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 8275 ms     | 8311 ms  | 757.8 MB     | 731.2 MB      | 11079 ms     | 15.5 MB    | 986/986         | 0          |
| contract-capture       | Contract capture inventory                      | 8271 ms     | 8452 ms  | 756.8 MB     | 730.1 MB      | 11140 ms     | 15.8 MB    | 994/994         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 8263 ms     | 8564 ms  | 757.4 MB     | 730.9 MB      | 11193 ms     | 16 MB      | 999/999         | 0          |
| cold-import-readiness  | Cold import readiness                           | 8078 ms     | 8308 ms  | 760.7 MB     | 734.8 MB      | 11266 ms     | 15.5 MB    | 973/973         | 0          |
| workspace-plan         | Workspace execution plan                        | 8171 ms     | 8430 ms  | 760.8 MB     | 737.1 MB      | 11288 ms     | 15.5 MB    | 982/982         | 0          |
| platform-probes        | Platform and loader probes                      | 8450 ms     | 8516 ms  | 761.1 MB     | 735.3 MB      | 11130 ms     | 15.4 MB    | 1008/1008       | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 617 ms      | 634 ms   | 77.4 MB      | 51.8 MB       | 327 ms       | 1.2 MB     | 76/76           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 24 ms    | 25 ms    | 26.7 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 8079 ms  | 8084 ms  | 756.3 MB     | 10873 ms     | 962/962         | fixture-inspection     |
| target-registry  | 1        | 8275 ms  | 8311 ms  | 757.8 MB     | 11079 ms     | 986/986         | compat-report-registry |
| contract-capture | 1        | 8271 ms  | 8452 ms  | 756.8 MB     | 11140 ms     | 994/994         | contract-capture       |
| synthetic-probes | 1        | 8263 ms  | 8564 ms  | 757.4 MB     | 11193 ms     | 999/999         | synthetic-probe-plan   |
| cold-import      | 1        | 8078 ms  | 8308 ms  | 760.7 MB     | 11266 ms     | 973/973         | cold-import-readiness  |
| workspace-plan   | 1        | 8171 ms  | 8430 ms  | 760.8 MB     | 11288 ms     | 982/982         | workspace-plan         |
| platform-probes  | 1        | 8450 ms  | 8516 ms  | 761.1 MB     | 11130 ms     | 1008/1008       | platform-probes        |
| import-loop      | 1        | 617 ms   | 634 ms   | 77.4 MB      | 327 ms       | 76/76           | import-loop-profile    |
