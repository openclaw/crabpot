# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 11031 ms           |
| Command P95 wall time  | 11310 ms           |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 9332               |
| CPU samples            | 9332               |
| Max peak RSS           | 761.8 MB           |
| Max RSS delta          | 735.1 MB           |
| Max CPU estimate       | 15293 ms           |
| Max harness heap delta | 28.8 MB            |

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
| sourceFiles           | 2319  |
| observedHooks         | 113   |
| observedRegistrations | 218   |
| observedSdkImports    | 1223  |
| contractProbes        | 218   |
| issueFindings         | 250   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 28 ms       | 30 ms    | 27.4 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 10880 ms    | 11228 ms | 757.3 MB     | 730.7 MB      | 15293 ms     | 28.8 MB    | 1303/1303       | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 11005 ms    | 11091 ms | 757.3 MB     | 730.6 MB      | 15022 ms     | 20.6 MB    | 1312/1312       | 0          |
| contract-capture       | Contract capture inventory                      | 11098 ms    | 11106 ms | 756.4 MB     | 729.7 MB      | 14949 ms     | 20.6 MB    | 1319/1319       | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 11049 ms    | 11118 ms | 754 MB       | 727.3 MB      | 15065 ms     | 20.4 MB    | 1316/1316       | 0          |
| cold-import-readiness  | Cold import readiness                           | 11048 ms    | 11158 ms | 760.7 MB     | 733.9 MB      | 15197 ms     | 20.3 MB    | 1318/1318       | 0          |
| workspace-plan         | Workspace execution plan                        | 11031 ms    | 11052 ms | 759.9 MB     | 733.2 MB      | 15097 ms     | 19.8 MB    | 1310/1310       | 0          |
| platform-probes        | Platform and loader probes                      | 11310 ms    | 11401 ms | 761.8 MB     | 735.1 MB      | 15175 ms     | 20.3 MB    | 1347/1347       | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 865 ms      | 868 ms   | 78.9 MB      | 52.1 MB       | 475 ms       | 1.7 MB     | 104/104         | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 28 ms    | 30 ms    | 27.4 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 10880 ms | 11228 ms | 757.3 MB     | 15293 ms     | 1303/1303       | fixture-inspection     |
| target-registry  | 1        | 11005 ms | 11091 ms | 757.3 MB     | 15022 ms     | 1312/1312       | compat-report-registry |
| contract-capture | 1        | 11098 ms | 11106 ms | 756.4 MB     | 14949 ms     | 1319/1319       | contract-capture       |
| synthetic-probes | 1        | 11049 ms | 11118 ms | 754 MB       | 15065 ms     | 1316/1316       | synthetic-probe-plan   |
| cold-import      | 1        | 11048 ms | 11158 ms | 760.7 MB     | 15197 ms     | 1318/1318       | cold-import-readiness  |
| workspace-plan   | 1        | 11031 ms | 11052 ms | 759.9 MB     | 15097 ms     | 1310/1310       | workspace-plan         |
| platform-probes  | 1        | 11310 ms | 11401 ms | 761.8 MB     | 15175 ms     | 1347/1347       | platform-probes        |
| import-loop      | 1        | 865 ms   | 868 ms   | 78.9 MB      | 475 ms       | 104/104         | import-loop-profile    |
