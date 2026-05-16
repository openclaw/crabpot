# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 1410 ms            |
| Command P95 wall time  | 1437 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1215               |
| CPU samples            | 1215               |
| Max peak RSS           | 437.6 MB           |
| Max RSS delta          | 407.8 MB           |
| Max CPU estimate       | 1667 ms            |
| Max harness heap delta | 5.2 MB             |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 61         |
| hookNames              | 37         |
| apiRegistrars          | 53         |
| capturedRegistrars     | 28         |
| sdkExports             | 310        |
| manifestFields         | 41         |
| manifestContractFields | 18         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 8     |
| sourceFiles           | 434   |
| observedHooks         | 5     |
| observedRegistrations | 29    |
| observedSdkImports    | 184   |
| contractProbes        | 38    |
| issueFindings         | 38    |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 44 ms       | 47 ms    | 32.4 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 1348 ms     | 1395 ms  | 422.5 MB     | 391.2 MB      | 1567 ms      | 5.2 MB     | 160/160         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 1399 ms     | 1416 ms  | 423.8 MB     | 393.7 MB      | 1606 ms      | 4.7 MB     | 164/164         | 0          |
| contract-capture       | Contract capture inventory                      | 1437 ms     | 1488 ms  | 429.9 MB     | 399.8 MB      | 1667 ms      | 5 MB       | 171/171         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 1413 ms     | 1438 ms  | 422.9 MB     | 394 MB        | 1647 ms      | 4.7 MB     | 164/164         | 0          |
| cold-import-readiness  | Cold import readiness                           | 1410 ms     | 1440 ms  | 424 MB       | 395.3 MB      | 1631 ms      | 4.8 MB     | 166/166         | 0          |
| workspace-plan         | Workspace execution plan                        | 1437 ms     | 1466 ms  | 437.6 MB     | 407.8 MB      | 1667 ms      | 4.9 MB     | 171/171         | 0          |
| platform-probes        | Platform and loader probes                      | 1414 ms     | 1421 ms  | 423.1 MB     | 393.1 MB      | 1602 ms      | 4.7 MB     | 166/166         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 437 ms      | 457 ms   | 60.4 MB      | 30.5 MB       | 223 ms       | 1.6 MB     | 50/50           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 44 ms    | 47 ms    | 32.4 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 1348 ms  | 1395 ms  | 422.5 MB     | 1567 ms      | 160/160         | fixture-inspection     |
| target-registry  | 1        | 1399 ms  | 1416 ms  | 423.8 MB     | 1606 ms      | 164/164         | compat-report-registry |
| contract-capture | 1        | 1437 ms  | 1488 ms  | 429.9 MB     | 1667 ms      | 171/171         | contract-capture       |
| synthetic-probes | 1        | 1413 ms  | 1438 ms  | 422.9 MB     | 1647 ms      | 164/164         | synthetic-probe-plan   |
| cold-import      | 1        | 1410 ms  | 1440 ms  | 424 MB       | 1631 ms      | 166/166         | cold-import-readiness  |
| workspace-plan   | 1        | 1437 ms  | 1466 ms  | 437.6 MB     | 1667 ms      | 171/171         | workspace-plan         |
| platform-probes  | 1        | 1414 ms  | 1421 ms  | 423.1 MB     | 1602 ms      | 166/166         | platform-probes        |
| import-loop      | 1        | 437 ms   | 457 ms   | 60.4 MB      | 223 ms       | 50/50           | import-loop-profile    |
