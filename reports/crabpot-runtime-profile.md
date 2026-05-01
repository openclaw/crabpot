# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 577 ms             |
| Command P95 wall time  | 620 ms             |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 526                |
| CPU samples            | 526                |
| Max peak RSS           | 91.7 MB            |
| Max RSS delta          | 62.3 MB            |
| Max CPU estimate       | 645 ms             |
| Max harness heap delta | 2.2 MB             |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 61         |
| hookNames              | 35         |
| apiRegistrars          | 49         |
| capturedRegistrars     | 26         |
| sdkExports             | 294        |
| manifestFields         | 35         |
| manifestContractFields | 17         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 33    |
| sourceFiles           | 998   |
| observedHooks         | 84    |
| observedRegistrations | 114   |
| observedSdkImports    | 350   |
| contractProbes        | 175   |
| issueFindings         | 181   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 32 ms       | 32 ms    | 29.6 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 498 ms      | 521 ms   | 84.4 MB      | 55.7 MB       | 544 ms       | 2 MB       | 60/60           | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 558 ms      | 581 ms   | 85.7 MB      | 57 MB         | 598 ms       | 2.2 MB     | 67/67           | 0          |
| contract-capture       | Contract capture inventory                      | 577 ms      | 583 ms   | 87.4 MB      | 58.7 MB       | 593 ms       | 2.2 MB     | 68/68           | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 590 ms      | 595 ms   | 85.3 MB      | 55.9 MB       | 607 ms       | 2 MB       | 68/68           | 0          |
| cold-import-readiness  | Cold import readiness                           | 585 ms      | 646 ms   | 90.1 MB      | 61.4 MB       | 645 ms       | 2.2 MB     | 71/71           | 0          |
| workspace-plan         | Workspace execution plan                        | 605 ms      | 606 ms   | 91.7 MB      | 62.3 MB       | 631 ms       | 2 MB       | 72/72           | 0          |
| platform-probes        | Platform and loader probes                      | 620 ms      | 622 ms   | 88.5 MB      | 59.8 MB       | 616 ms       | 2.1 MB     | 72/72           | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 374 ms      | 375 ms   | 60.2 MB      | 31.5 MB       | 180 ms       | 1.4 MB     | 45/45           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 32 ms    | 32 ms    | 29.6 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 498 ms   | 521 ms   | 84.4 MB      | 544 ms       | 60/60           | fixture-inspection     |
| target-registry  | 1        | 558 ms   | 581 ms   | 85.7 MB      | 598 ms       | 67/67           | compat-report-registry |
| contract-capture | 1        | 577 ms   | 583 ms   | 87.4 MB      | 593 ms       | 68/68           | contract-capture       |
| synthetic-probes | 1        | 590 ms   | 595 ms   | 85.3 MB      | 607 ms       | 68/68           | synthetic-probe-plan   |
| cold-import      | 1        | 585 ms   | 646 ms   | 90.1 MB      | 645 ms       | 71/71           | cold-import-readiness  |
| workspace-plan   | 1        | 605 ms   | 606 ms   | 91.7 MB      | 631 ms       | 72/72           | workspace-plan         |
| platform-probes  | 1        | 620 ms   | 622 ms   | 88.5 MB      | 616 ms       | 72/72           | platform-probes        |
| import-loop      | 1        | 374 ms   | 375 ms   | 60.2 MB      | 180 ms       | 45/45           | import-loop-profile    |
