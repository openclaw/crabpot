# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 8165 ms            |
| Command P95 wall time  | 8538 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 6969               |
| CPU samples            | 6969               |
| Max peak RSS           | 759.5 MB           |
| Max RSS delta          | 732.8 MB           |
| Max CPU estimate       | 11382 ms           |
| Max harness heap delta | 22.3 MB            |

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
| sourceFiles           | 2260  |
| observedHooks         | 113   |
| observedRegistrations | 215   |
| observedSdkImports    | 1182  |
| contractProbes        | 236   |
| issueFindings         | 268   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 22 ms       | 24 ms    | 26.7 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 7905 ms     | 8106 ms  | 753 MB       | 726.3 MB      | 10976 ms     | 22.3 MB    | 951/951         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 8195 ms     | 8500 ms  | 756 MB       | 729.4 MB      | 11382 ms     | 16.1 MB    | 983/983         | 0          |
| contract-capture       | Contract capture inventory                      | 8328 ms     | 8335 ms  | 751.3 MB     | 724.6 MB      | 11144 ms     | 15.7 MB    | 989/989         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 8279 ms     | 8286 ms  | 755.4 MB     | 728.7 MB      | 10897 ms     | 15.6 MB    | 986/986         | 0          |
| cold-import-readiness  | Cold import readiness                           | 8165 ms     | 8373 ms  | 753.7 MB     | 727.1 MB      | 11329 ms     | 15.4 MB    | 983/983         | 0          |
| workspace-plan         | Workspace execution plan                        | 8144 ms     | 8254 ms  | 753 MB       | 726.4 MB      | 11135 ms     | 15.5 MB    | 977/977         | 0          |
| platform-probes        | Platform and loader probes                      | 8538 ms     | 8572 ms  | 759.5 MB     | 732.8 MB      | 11178 ms     | 15.9 MB    | 1019/1019       | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 643 ms      | 644 ms   | 77.4 MB      | 50.7 MB       | 332 ms       | 1.2 MB     | 78/78           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 22 ms    | 24 ms    | 26.7 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 7905 ms  | 8106 ms  | 753 MB       | 10976 ms     | 951/951         | fixture-inspection     |
| target-registry  | 1        | 8195 ms  | 8500 ms  | 756 MB       | 11382 ms     | 983/983         | compat-report-registry |
| contract-capture | 1        | 8328 ms  | 8335 ms  | 751.3 MB     | 11144 ms     | 989/989         | contract-capture       |
| synthetic-probes | 1        | 8279 ms  | 8286 ms  | 755.4 MB     | 10897 ms     | 986/986         | synthetic-probe-plan   |
| cold-import      | 1        | 8165 ms  | 8373 ms  | 753.7 MB     | 11329 ms     | 983/983         | cold-import-readiness  |
| workspace-plan   | 1        | 8144 ms  | 8254 ms  | 753 MB       | 11135 ms     | 977/977         | workspace-plan         |
| platform-probes  | 1        | 8538 ms  | 8572 ms  | 759.5 MB     | 11178 ms     | 1019/1019       | platform-probes        |
| import-loop      | 1        | 643 ms   | 644 ms   | 77.4 MB      | 332 ms       | 78/78           | import-loop-profile    |
