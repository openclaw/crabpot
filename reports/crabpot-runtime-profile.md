# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 1422 ms            |
| Command P95 wall time  | 1481 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1227               |
| CPU samples            | 1227               |
| Max peak RSS           | 327.7 MB           |
| Max RSS delta          | 298.8 MB           |
| Max CPU estimate       | 1577 ms            |
| Max harness heap delta | 5.1 MB             |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 66         |
| hookNames              | 39         |
| apiRegistrars          | 55         |
| capturedRegistrars     | 30         |
| sdkExports             | 316        |
| manifestFields         | 42         |
| manifestContractFields | 20         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 60    |
| sourceFiles           | 1854  |
| observedHooks         | 105   |
| observedRegistrations | 206   |
| observedSdkImports    | 1233  |
| contractProbes        | 279   |
| issueFindings         | 284   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 26 ms       | 28 ms    | 30.7 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 1339 ms     | 1352 ms  | 316.2 MB     | 287 MB        | 1468 ms      | 4.8 MB     | 159/159         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 1422 ms     | 1426 ms  | 318 MB       | 289 MB        | 1514 ms      | 5.1 MB     | 168/168         | 0          |
| contract-capture       | Contract capture inventory                      | 1417 ms     | 1423 ms  | 318.9 MB     | 289.4 MB      | 1533 ms      | 4.7 MB     | 168/168         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 1437 ms     | 1443 ms  | 317.9 MB     | 289.2 MB      | 1534 ms      | 0 MB       | 170/170         | 0          |
| cold-import-readiness  | Cold import readiness                           | 1424 ms     | 1447 ms  | 317.3 MB     | 288.7 MB      | 1539 ms      | 0.3 MB     | 170/170         | 0          |
| workspace-plan         | Workspace execution plan                        | 1452 ms     | 1465 ms  | 325.5 MB     | 296.8 MB      | 1576 ms      | 0.4 MB     | 174/174         | 0          |
| platform-probes        | Platform and loader probes                      | 1481 ms     | 1486 ms  | 327.7 MB     | 298.8 MB      | 1577 ms      | 0.3 MB     | 176/176         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 328 ms      | 329 ms   | 60.7 MB      | 32.1 MB       | 143 ms       | 1.2 MB     | 39/39           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 26 ms    | 28 ms    | 30.7 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 1339 ms  | 1352 ms  | 316.2 MB     | 1468 ms      | 159/159         | fixture-inspection     |
| target-registry  | 1        | 1422 ms  | 1426 ms  | 318 MB       | 1514 ms      | 168/168         | compat-report-registry |
| contract-capture | 1        | 1417 ms  | 1423 ms  | 318.9 MB     | 1533 ms      | 168/168         | contract-capture       |
| synthetic-probes | 1        | 1437 ms  | 1443 ms  | 317.9 MB     | 1534 ms      | 170/170         | synthetic-probe-plan   |
| cold-import      | 1        | 1424 ms  | 1447 ms  | 317.3 MB     | 1539 ms      | 170/170         | cold-import-readiness  |
| workspace-plan   | 1        | 1452 ms  | 1465 ms  | 325.5 MB     | 1576 ms      | 174/174         | workspace-plan         |
| platform-probes  | 1        | 1481 ms  | 1486 ms  | 327.7 MB     | 1577 ms      | 176/176         | platform-probes        |
| import-loop      | 1        | 328 ms   | 329 ms   | 60.7 MB      | 143 ms       | 39/39           | import-loop-profile    |
