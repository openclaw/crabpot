# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 533 ms             |
| Command P95 wall time  | 575 ms             |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 471                |
| CPU samples            | 471                |
| Max peak RSS           | 85.1 MB            |
| Max RSS delta          | 56 MB              |
| Max CPU estimate       | 571 ms             |
| Max harness heap delta | 2.2 MB             |

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
| node-boot              | Node boot                                       | 35 ms       | 35 ms    | 30.2 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 501 ms      | 509 ms   | 85.1 MB      | 55 MB         | 498 ms       | 1.9 MB     | 59/59           | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 575 ms      | 591 ms   | 84.6 MB      | 54.1 MB       | 571 ms       | 2.2 MB     | 67/67           | 0          |
| contract-capture       | Contract capture inventory                      | 549 ms      | 588 ms   | 83.4 MB      | 53.2 MB       | 569 ms       | 2.2 MB     | 65/65           | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 533 ms      | 546 ms   | 84.7 MB      | 56 MB         | 541 ms       | 2 MB       | 62/62           | 0          |
| cold-import-readiness  | Cold import readiness                           | 525 ms      | 532 ms   | 82.7 MB      | 54 MB         | 534 ms       | 1.8 MB     | 61/61           | 0          |
| workspace-plan         | Workspace execution plan                        | 538 ms      | 548 ms   | 83.2 MB      | 53.8 MB       | 554 ms       | 1.9 MB     | 63/63           | 0          |
| platform-probes        | Platform and loader probes                      | 538 ms      | 552 ms   | 83.3 MB      | 54.6 MB       | 553 ms       | 1.9 MB     | 64/64           | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 246 ms      | 247 ms   | 59.4 MB      | 30.6 MB       | 139 ms       | 0.9 MB     | 27/27           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 35 ms    | 35 ms    | 30.2 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 501 ms   | 509 ms   | 85.1 MB      | 498 ms       | 59/59           | fixture-inspection     |
| target-registry  | 1        | 575 ms   | 591 ms   | 84.6 MB      | 571 ms       | 67/67           | compat-report-registry |
| contract-capture | 1        | 549 ms   | 588 ms   | 83.4 MB      | 569 ms       | 65/65           | contract-capture       |
| synthetic-probes | 1        | 533 ms   | 546 ms   | 84.7 MB      | 541 ms       | 62/62           | synthetic-probe-plan   |
| cold-import      | 1        | 525 ms   | 532 ms   | 82.7 MB      | 534 ms       | 61/61           | cold-import-readiness  |
| workspace-plan   | 1        | 538 ms   | 548 ms   | 83.2 MB      | 554 ms       | 63/63           | workspace-plan         |
| platform-probes  | 1        | 538 ms   | 552 ms   | 83.3 MB      | 553 ms       | 64/64           | platform-probes        |
| import-loop      | 1        | 246 ms   | 247 ms   | 59.4 MB      | 139 ms       | 27/27           | import-loop-profile    |
