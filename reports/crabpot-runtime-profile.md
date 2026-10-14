# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 11311 ms           |
| Command P95 wall time  | 11598 ms           |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 9503               |
| CPU samples            | 9503               |
| Max peak RSS           | 757.8 MB           |
| Max RSS delta          | 730.4 MB           |
| Max CPU estimate       | 15393 ms           |
| Max harness heap delta | 28.9 MB            |

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
| node-boot              | Node boot                                       | 27 ms       | 32 ms    | 30.7 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 11109 ms    | 11178 ms | 753.9 MB     | 723.9 MB      | 15280 ms     | 28.9 MB    | 1312/1312       | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 11340 ms    | 11348 ms | 753.2 MB     | 724.1 MB      | 15343 ms     | 20.8 MB    | 1336/1336       | 0          |
| contract-capture       | Contract capture inventory                      | 11393 ms    | 11453 ms | 754.3 MB     | 727.6 MB      | 15393 ms     | 21 MB      | 1351/1351       | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 11365 ms    | 11436 ms | 757.5 MB     | 730.3 MB      | 15210 ms     | 21.1 MB    | 1347/1347       | 0          |
| cold-import-readiness  | Cold import readiness                           | 11260 ms    | 11302 ms | 754.8 MB     | 726.2 MB      | 15257 ms     | 20.5 MB    | 1330/1330       | 0          |
| workspace-plan         | Workspace execution plan                        | 11311 ms    | 11343 ms | 757.1 MB     | 729.5 MB      | 15336 ms     | 20.3 MB    | 1340/1340       | 0          |
| platform-probes        | Platform and loader probes                      | 11598 ms    | 11667 ms | 757.8 MB     | 730.4 MB      | 15307 ms     | 20.6 MB    | 1372/1372       | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 938 ms      | 953 ms   | 78.5 MB      | 51 MB         | 540 ms       | 1.8 MB     | 112/112         | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 27 ms    | 32 ms    | 30.7 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 11109 ms | 11178 ms | 753.9 MB     | 15280 ms     | 1312/1312       | fixture-inspection     |
| target-registry  | 1        | 11340 ms | 11348 ms | 753.2 MB     | 15343 ms     | 1336/1336       | compat-report-registry |
| contract-capture | 1        | 11393 ms | 11453 ms | 754.3 MB     | 15393 ms     | 1351/1351       | contract-capture       |
| synthetic-probes | 1        | 11365 ms | 11436 ms | 757.5 MB     | 15210 ms     | 1347/1347       | synthetic-probe-plan   |
| cold-import      | 1        | 11260 ms | 11302 ms | 754.8 MB     | 15257 ms     | 1330/1330       | cold-import-readiness  |
| workspace-plan   | 1        | 11311 ms | 11343 ms | 757.1 MB     | 15336 ms     | 1340/1340       | workspace-plan         |
| platform-probes  | 1        | 11598 ms | 11667 ms | 757.8 MB     | 15307 ms     | 1372/1372       | platform-probes        |
| import-loop      | 1        | 938 ms   | 953 ms   | 78.5 MB      | 540 ms       | 112/112         | import-loop-profile    |
