# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 1336 ms            |
| Command P95 wall time  | 1362 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1181               |
| CPU samples            | 1181               |
| Max peak RSS           | 135.1 MB           |
| Max RSS delta          | 106.8 MB           |
| Max CPU estimate       | 1873 ms            |
| Max harness heap delta | 5.1 MB             |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 0          |
| hookNames              | 44         |
| apiRegistrars          | 56         |
| capturedRegistrars     | 32         |
| sdkExports             | 316        |
| manifestFields         | 47         |
| manifestContractFields | 23         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 8     |
| sourceFiles           | 715   |
| observedHooks         | 7     |
| observedRegistrations | 37    |
| observedSdkImports    | 298   |
| contractProbes        | 32    |
| issueFindings         | 39    |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 34 ms       | 36 ms    | 29.6 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 1314 ms     | 1328 ms  | 132.4 MB     | 103.1 MB      | 1806 ms      | 5.1 MB     | 155/155         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 1362 ms     | 1378 ms  | 135.1 MB     | 106.8 MB      | 1873 ms      | 4.8 MB     | 161/161         | 0          |
| contract-capture       | Contract capture inventory                      | 1354 ms     | 1356 ms  | 134.3 MB     | 104.8 MB      | 1846 ms      | 4.5 MB     | 160/160         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 1336 ms     | 1340 ms  | 135 MB       | 106.8 MB      | 1796 ms      | 4.6 MB     | 157/157         | 0          |
| cold-import-readiness  | Cold import readiness                           | 1340 ms     | 1350 ms  | 134.6 MB     | 105.8 MB      | 1821 ms      | 4.7 MB     | 159/159         | 0          |
| workspace-plan         | Workspace execution plan                        | 1333 ms     | 1352 ms  | 134.6 MB     | 106.3 MB      | 1846 ms      | 4.6 MB     | 160/160         | 0          |
| platform-probes        | Platform and loader probes                      | 1350 ms     | 1381 ms  | 133.8 MB     | 105.4 MB      | 1849 ms      | 4.7 MB     | 159/159         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 575 ms      | 585 ms   | 64 MB        | 35.2 MB       | 302 ms       | 2.1 MB     | 67/67           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 34 ms    | 36 ms    | 29.6 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 1314 ms  | 1328 ms  | 132.4 MB     | 1806 ms      | 155/155         | fixture-inspection     |
| target-registry  | 1        | 1362 ms  | 1378 ms  | 135.1 MB     | 1873 ms      | 161/161         | compat-report-registry |
| contract-capture | 1        | 1354 ms  | 1356 ms  | 134.3 MB     | 1846 ms      | 160/160         | contract-capture       |
| synthetic-probes | 1        | 1336 ms  | 1340 ms  | 135 MB       | 1796 ms      | 157/157         | synthetic-probe-plan   |
| cold-import      | 1        | 1340 ms  | 1350 ms  | 134.6 MB     | 1821 ms      | 159/159         | cold-import-readiness  |
| workspace-plan   | 1        | 1333 ms  | 1352 ms  | 134.6 MB     | 1846 ms      | 160/160         | workspace-plan         |
| platform-probes  | 1        | 1350 ms  | 1381 ms  | 133.8 MB     | 1849 ms      | 159/159         | platform-probes        |
| import-loop      | 1        | 575 ms   | 585 ms   | 64 MB        | 302 ms       | 67/67           | import-loop-profile    |
