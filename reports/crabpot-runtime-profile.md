# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 521 ms             |
| Command P95 wall time  | 547 ms             |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 470                |
| CPU samples            | 470                |
| Max peak RSS           | 88.1 MB            |
| Max RSS delta          | 59.4 MB            |
| Max CPU estimate       | 586 ms             |
| Max harness heap delta | 2 MB               |

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
| sourceFiles           | 976   |
| observedHooks         | 82    |
| observedRegistrations | 112   |
| observedSdkImports    | 350   |
| contractProbes        | 170   |
| issueFindings         | 222   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 32 ms       | 33 ms    | 30.2 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 450 ms      | 451 ms   | 83.4 MB      | 54.7 MB       | 446 ms       | 1.8 MB     | 53/53           | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 506 ms      | 511 ms   | 83.9 MB      | 55.2 MB       | 545 ms       | 1.9 MB     | 60/60           | 0          |
| contract-capture       | Contract capture inventory                      | 521 ms      | 523 ms   | 84.7 MB      | 56 MB         | 545 ms       | 2 MB       | 61/61           | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 521 ms      | 527 ms   | 85.6 MB      | 56.9 MB       | 534 ms       | 2 MB       | 61/61           | 0          |
| cold-import-readiness  | Cold import readiness                           | 522 ms      | 528 ms   | 84.7 MB      | 56 MB         | 555 ms       | 1.8 MB     | 61/61           | 0          |
| workspace-plan         | Workspace execution plan                        | 536 ms      | 551 ms   | 88.1 MB      | 59.4 MB       | 586 ms       | 1.8 MB     | 63/63           | 0          |
| platform-probes        | Platform and loader probes                      | 547 ms      | 548 ms   | 85.8 MB      | 57.1 MB       | 564 ms       | 1.9 MB     | 63/63           | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 382 ms      | 385 ms   | 60.1 MB      | 31.4 MB       | 180 ms       | 1.4 MB     | 45/45           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 32 ms    | 33 ms    | 30.2 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 450 ms   | 451 ms   | 83.4 MB      | 446 ms       | 53/53           | fixture-inspection     |
| target-registry  | 1        | 506 ms   | 511 ms   | 83.9 MB      | 545 ms       | 60/60           | compat-report-registry |
| contract-capture | 1        | 521 ms   | 523 ms   | 84.7 MB      | 545 ms       | 61/61           | contract-capture       |
| synthetic-probes | 1        | 521 ms   | 527 ms   | 85.6 MB      | 534 ms       | 61/61           | synthetic-probe-plan   |
| cold-import      | 1        | 522 ms   | 528 ms   | 84.7 MB      | 555 ms       | 61/61           | cold-import-readiness  |
| workspace-plan   | 1        | 536 ms   | 551 ms   | 88.1 MB      | 586 ms       | 63/63           | workspace-plan         |
| platform-probes  | 1        | 547 ms   | 548 ms   | 85.8 MB      | 564 ms       | 63/63           | platform-probes        |
| import-loop      | 1        | 382 ms   | 385 ms   | 60.1 MB      | 180 ms       | 45/45           | import-loop-profile    |
