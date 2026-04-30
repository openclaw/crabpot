# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 510 ms             |
| Command P95 wall time  | 546 ms             |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 470                |
| CPU samples            | 470                |
| Max peak RSS           | 84.7 MB            |
| Max RSS delta          | 56 MB              |
| Max CPU estimate       | 577 ms             |
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
| fixtures              | 29    |
| sourceFiles           | 889   |
| observedHooks         | 76    |
| observedRegistrations | 100   |
| observedSdkImports    | 345   |
| contractProbes        | 155   |
| issueFindings         | 199   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 31 ms       | 33 ms    | 29.4 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 453 ms      | 457 ms   | 84.5 MB      | 55.7 MB       | 461 ms       | 1.7 MB     | 53/53           | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 510 ms      | 520 ms   | 82.9 MB      | 53.6 MB       | 549 ms       | 2 MB       | 60/60           | 0          |
| contract-capture       | Contract capture inventory                      | 521 ms      | 525 ms   | 83.9 MB      | 55.2 MB       | 534 ms       | 2 MB       | 61/61           | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 523 ms      | 532 ms   | 84.7 MB      | 56 MB         | 533 ms       | 1.9 MB     | 62/62           | 0          |
| cold-import-readiness  | Cold import readiness                           | 509 ms      | 520 ms   | 84.7 MB      | 55.1 MB       | 539 ms       | 1.8 MB     | 60/60           | 0          |
| workspace-plan         | Workspace execution plan                        | 528 ms      | 548 ms   | 82.9 MB      | 53.2 MB       | 577 ms       | 1.8 MB     | 63/63           | 0          |
| platform-probes        | Platform and loader probes                      | 546 ms      | 548 ms   | 84.5 MB      | 55 MB         | 554 ms       | 1.9 MB     | 63/63           | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 373 ms      | 376 ms   | 60 MB        | 31.3 MB       | 179 ms       | 1.4 MB     | 45/45           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 31 ms    | 33 ms    | 29.4 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 453 ms   | 457 ms   | 84.5 MB      | 461 ms       | 53/53           | fixture-inspection     |
| target-registry  | 1        | 510 ms   | 520 ms   | 82.9 MB      | 549 ms       | 60/60           | compat-report-registry |
| contract-capture | 1        | 521 ms   | 525 ms   | 83.9 MB      | 534 ms       | 61/61           | contract-capture       |
| synthetic-probes | 1        | 523 ms   | 532 ms   | 84.7 MB      | 533 ms       | 62/62           | synthetic-probe-plan   |
| cold-import      | 1        | 509 ms   | 520 ms   | 84.7 MB      | 539 ms       | 60/60           | cold-import-readiness  |
| workspace-plan   | 1        | 528 ms   | 548 ms   | 82.9 MB      | 577 ms       | 63/63           | workspace-plan         |
| platform-probes  | 1        | 546 ms   | 548 ms   | 84.5 MB      | 554 ms       | 63/63           | platform-probes        |
| import-loop      | 1        | 373 ms   | 376 ms   | 60 MB        | 179 ms       | 45/45           | import-loop-profile    |
