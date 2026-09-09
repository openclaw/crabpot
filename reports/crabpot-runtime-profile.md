# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 1238 ms            |
| Command P95 wall time  | 1260 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1102               |
| CPU samples            | 1102               |
| Max peak RSS           | 130.6 MB           |
| Max RSS delta          | 104 MB             |
| Max CPU estimate       | 1764 ms            |
| Max harness heap delta | 4.8 MB             |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 0          |
| hookNames              | 42         |
| apiRegistrars          | 57         |
| capturedRegistrars     | 31         |
| sdkExports             | 338        |
| manifestFields         | 52         |
| manifestContractFields | 22         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 7     |
| sourceFiles           | 644   |
| observedHooks         | 6     |
| observedRegistrations | 34    |
| observedSdkImports    | 273   |
| contractProbes        | 26    |
| issueFindings         | 32    |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 37 ms       | 39 ms    | 27 MB        | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 1206 ms     | 1209 ms  | 124.2 MB     | 97.6 MB       | 1659 ms      | 4.7 MB     | 141/141         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 1239 ms     | 1287 ms  | 127.9 MB     | 101.3 MB      | 1764 ms      | 4.8 MB     | 148/148         | 0          |
| contract-capture       | Contract capture inventory                      | 1238 ms     | 1269 ms  | 130.6 MB     | 104 MB        | 1706 ms      | 4.6 MB     | 147/147         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 1256 ms     | 1264 ms  | 129.6 MB     | 103 MB        | 1703 ms      | 4.8 MB     | 148/148         | 0          |
| cold-import-readiness  | Cold import readiness                           | 1242 ms     | 1285 ms  | 130.3 MB     | 103.7 MB      | 1719 ms      | 4.6 MB     | 148/148         | 0          |
| workspace-plan         | Workspace execution plan                        | 1238 ms     | 1241 ms  | 128.9 MB     | 102.3 MB      | 1694 ms      | 4.5 MB     | 145/145         | 0          |
| platform-probes        | Platform and loader probes                      | 1260 ms     | 1261 ms  | 130 MB       | 103.4 MB      | 1705 ms      | 4 MB       | 149/149         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 627 ms      | 635 ms   | 69.6 MB      | 43 MB         | 348 ms       | 2 MB       | 73/73           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 37 ms    | 39 ms    | 27 MB        | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 1206 ms  | 1209 ms  | 124.2 MB     | 1659 ms      | 141/141         | fixture-inspection     |
| target-registry  | 1        | 1239 ms  | 1287 ms  | 127.9 MB     | 1764 ms      | 148/148         | compat-report-registry |
| contract-capture | 1        | 1238 ms  | 1269 ms  | 130.6 MB     | 1706 ms      | 147/147         | contract-capture       |
| synthetic-probes | 1        | 1256 ms  | 1264 ms  | 129.6 MB     | 1703 ms      | 148/148         | synthetic-probe-plan   |
| cold-import      | 1        | 1242 ms  | 1285 ms  | 130.3 MB     | 1719 ms      | 148/148         | cold-import-readiness  |
| workspace-plan   | 1        | 1238 ms  | 1241 ms  | 128.9 MB     | 1694 ms      | 145/145         | workspace-plan         |
| platform-probes  | 1        | 1260 ms  | 1261 ms  | 130 MB       | 1705 ms      | 149/149         | platform-probes        |
| import-loop      | 1        | 627 ms   | 635 ms   | 69.6 MB      | 348 ms       | 73/73           | import-loop-profile    |
