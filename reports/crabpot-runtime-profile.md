# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 572 ms             |
| Command P95 wall time  | 601 ms             |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 522                |
| CPU samples            | 522                |
| Max peak RSS           | 90.4 MB            |
| Max RSS delta          | 61.7 MB            |
| Max CPU estimate       | 662 ms             |
| Max harness heap delta | 2.2 MB             |

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
| node-boot              | Node boot                                       | 32 ms       | 35 ms    | 30.1 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 503 ms      | 507 ms   | 85.7 MB      | 55.4 MB       | 524 ms       | 2 MB       | 60/60           | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 570 ms      | 571 ms   | 83.6 MB      | 54.9 MB       | 588 ms       | 2.2 MB     | 68/68           | 0          |
| contract-capture       | Contract capture inventory                      | 572 ms      | 575 ms   | 84.9 MB      | 55.8 MB       | 582 ms       | 2.1 MB     | 67/67           | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 587 ms      | 598 ms   | 85.9 MB      | 57 MB         | 604 ms       | 2.1 MB     | 69/69           | 0          |
| cold-import-readiness  | Cold import readiness                           | 576 ms      | 600 ms   | 85.7 MB      | 56.9 MB       | 598 ms       | 1.9 MB     | 69/69           | 0          |
| workspace-plan         | Workspace execution plan                        | 600 ms      | 601 ms   | 90.4 MB      | 61.7 MB       | 633 ms       | 2 MB       | 70/70           | 0          |
| platform-probes        | Platform and loader probes                      | 601 ms      | 622 ms   | 88.3 MB      | 59.4 MB       | 662 ms       | 2.1 MB     | 71/71           | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 386 ms      | 394 ms   | 60.2 MB      | 31.5 MB       | 188 ms       | 1.4 MB     | 45/45           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 32 ms    | 35 ms    | 30.1 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 503 ms   | 507 ms   | 85.7 MB      | 524 ms       | 60/60           | fixture-inspection     |
| target-registry  | 1        | 570 ms   | 571 ms   | 83.6 MB      | 588 ms       | 68/68           | compat-report-registry |
| contract-capture | 1        | 572 ms   | 575 ms   | 84.9 MB      | 582 ms       | 67/67           | contract-capture       |
| synthetic-probes | 1        | 587 ms   | 598 ms   | 85.9 MB      | 604 ms       | 69/69           | synthetic-probe-plan   |
| cold-import      | 1        | 576 ms   | 600 ms   | 85.7 MB      | 598 ms       | 69/69           | cold-import-readiness  |
| workspace-plan   | 1        | 600 ms   | 601 ms   | 90.4 MB      | 633 ms       | 70/70           | workspace-plan         |
| platform-probes  | 1        | 601 ms   | 622 ms   | 88.3 MB      | 662 ms       | 71/71           | platform-probes        |
| import-loop      | 1        | 386 ms   | 394 ms   | 60.2 MB      | 188 ms       | 45/45           | import-loop-profile    |
