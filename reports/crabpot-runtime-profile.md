# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 525 ms             |
| Command P95 wall time  | 601 ms             |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 476                |
| CPU samples            | 476                |
| Max peak RSS           | 85.3 MB            |
| Max RSS delta          | 56.6 MB            |
| Max CPU estimate       | 610 ms             |
| Max harness heap delta | 2.1 MB             |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 51         |
| hookNames              | 32         |
| apiRegistrars          | 41         |
| capturedRegistrars     | 19         |
| sdkExports             | 316        |
| manifestFields         | 35         |
| manifestContractFields | 17         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 29    |
| sourceFiles           | 889   |
| observedHooks         | 76    |
| observedRegistrations | 100   |
| observedSdkImports    | 345   |
| contractProbes        | 155   |
| issueFindings         | 196   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 32 ms       | 32 ms    | 30.2 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 447 ms      | 448 ms   | 82.4 MB      | 53.3 MB       | 451 ms       | 1.8 MB     | 52/52           | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 525 ms      | 532 ms   | 82.4 MB      | 53.7 MB       | 557 ms       | 2 MB       | 62/62           | 0          |
| contract-capture       | Contract capture inventory                      | 523 ms      | 546 ms   | 83.3 MB      | 54.6 MB       | 548 ms       | 2.1 MB     | 62/62           | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 535 ms      | 543 ms   | 85.3 MB      | 56.6 MB       | 538 ms       | 1.9 MB     | 63/63           | 0          |
| cold-import-readiness  | Cold import readiness                           | 597 ms      | 599 ms   | 84.8 MB      | 55.7 MB       | 594 ms       | 2 MB       | 69/69           | 0          |
| workspace-plan         | Workspace execution plan                        | 601 ms      | 606 ms   | 84.9 MB      | 56.3 MB       | 610 ms       | 2.1 MB     | 72/72           | 0          |
| platform-probes        | Platform and loader probes                      | 550 ms      | 602 ms   | 83.4 MB      | 53.6 MB       | 579 ms       | 2 MB       | 66/66           | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 246 ms      | 248 ms   | 59.4 MB      | 30.7 MB       | 139 ms       | 1 MB       | 27/27           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 32 ms    | 32 ms    | 30.2 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 447 ms   | 448 ms   | 82.4 MB      | 451 ms       | 52/52           | fixture-inspection     |
| target-registry  | 1        | 525 ms   | 532 ms   | 82.4 MB      | 557 ms       | 62/62           | compat-report-registry |
| contract-capture | 1        | 523 ms   | 546 ms   | 83.3 MB      | 548 ms       | 62/62           | contract-capture       |
| synthetic-probes | 1        | 535 ms   | 543 ms   | 85.3 MB      | 538 ms       | 63/63           | synthetic-probe-plan   |
| cold-import      | 1        | 597 ms   | 599 ms   | 84.8 MB      | 594 ms       | 69/69           | cold-import-readiness  |
| workspace-plan   | 1        | 601 ms   | 606 ms   | 84.9 MB      | 610 ms       | 72/72           | workspace-plan         |
| platform-probes  | 1        | 550 ms   | 602 ms   | 83.4 MB      | 579 ms       | 66/66           | platform-probes        |
| import-loop      | 1        | 246 ms   | 248 ms   | 59.4 MB      | 139 ms       | 27/27           | import-loop-profile    |
