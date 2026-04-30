# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 547 ms             |
| Command P95 wall time  | 570 ms             |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 496                |
| CPU samples            | 496                |
| Max peak RSS           | 88.3 MB            |
| Max RSS delta          | 59.6 MB            |
| Max CPU estimate       | 611 ms             |
| Max harness heap delta | 2.1 MB             |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 56         |
| hookNames              | 34         |
| apiRegistrars          | 48         |
| capturedRegistrars     | 26         |
| sdkExports             | 291        |
| manifestFields         | 35         |
| manifestContractFields | 17         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 32    |
| sourceFiles           | 979   |
| observedHooks         | 82    |
| observedRegistrations | 112   |
| observedSdkImports    | 350   |
| contractProbes        | 170   |
| issueFindings         | 222   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 31 ms       | 32 ms    | 30.2 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 474 ms      | 480 ms   | 85.6 MB      | 56.9 MB       | 490 ms       | 1.9 MB     | 56/56           | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 547 ms      | 553 ms   | 84.9 MB      | 54.9 MB       | 555 ms       | 2.1 MB     | 64/64           | 0          |
| contract-capture       | Contract capture inventory                      | 547 ms      | 561 ms   | 85.3 MB      | 56 MB         | 552 ms       | 2.1 MB     | 64/64           | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 559 ms      | 568 ms   | 85.1 MB      | 55.3 MB       | 569 ms       | 2 MB       | 65/65           | 0          |
| cold-import-readiness  | Cold import readiness                           | 554 ms      | 560 ms   | 88.3 MB      | 59.6 MB       | 582 ms       | 1.9 MB     | 66/66           | 0          |
| workspace-plan         | Workspace execution plan                        | 570 ms      | 570 ms   | 88.1 MB      | 59.4 MB       | 594 ms       | 2 MB       | 66/66           | 0          |
| platform-probes        | Platform and loader probes                      | 570 ms      | 598 ms   | 86.2 MB      | 57 MB         | 611 ms       | 1.9 MB     | 67/67           | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 375 ms      | 378 ms   | 60.2 MB      | 31.4 MB       | 180 ms       | 1.4 MB     | 45/45           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 31 ms    | 32 ms    | 30.2 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 474 ms   | 480 ms   | 85.6 MB      | 490 ms       | 56/56           | fixture-inspection     |
| target-registry  | 1        | 547 ms   | 553 ms   | 84.9 MB      | 555 ms       | 64/64           | compat-report-registry |
| contract-capture | 1        | 547 ms   | 561 ms   | 85.3 MB      | 552 ms       | 64/64           | contract-capture       |
| synthetic-probes | 1        | 559 ms   | 568 ms   | 85.1 MB      | 569 ms       | 65/65           | synthetic-probe-plan   |
| cold-import      | 1        | 554 ms   | 560 ms   | 88.3 MB      | 582 ms       | 66/66           | cold-import-readiness  |
| workspace-plan   | 1        | 570 ms   | 570 ms   | 88.1 MB      | 594 ms       | 66/66           | workspace-plan         |
| platform-probes  | 1        | 570 ms   | 598 ms   | 86.2 MB      | 611 ms       | 67/67           | platform-probes        |
| import-loop      | 1        | 375 ms   | 378 ms   | 60.2 MB      | 180 ms       | 45/45           | import-loop-profile    |
