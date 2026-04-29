# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 511 ms             |
| Command P95 wall time  | 543 ms             |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 451                |
| CPU samples            | 451                |
| Max peak RSS           | 85 MB              |
| Max RSS delta          | 56.3 MB            |
| Max CPU estimate       | 566 ms             |
| Max harness heap delta | 2 MB               |

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
| node-boot              | Node boot                                       | 30 ms       | 33 ms    | 30.2 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 435 ms      | 471 ms   | 84.1 MB      | 55.4 MB       | 490 ms       | 1.8 MB     | 52/52           | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 519 ms      | 530 ms   | 82.3 MB      | 53.6 MB       | 536 ms       | 2 MB       | 61/61           | 0          |
| contract-capture       | Contract capture inventory                      | 521 ms      | 528 ms   | 85 MB        | 56.3 MB       | 527 ms       | 2 MB       | 62/62           | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 511 ms      | 519 ms   | 84.6 MB      | 56 MB         | 532 ms       | 1.9 MB     | 60/60           | 0          |
| cold-import-readiness  | Cold import readiness                           | 507 ms      | 520 ms   | 84.1 MB      | 55.4 MB       | 520 ms       | 1.8 MB     | 60/60           | 0          |
| workspace-plan         | Workspace execution plan                        | 524 ms      | 548 ms   | 83.5 MB      | 54.8 MB       | 566 ms       | 1.9 MB     | 63/63           | 0          |
| platform-probes        | Platform and loader probes                      | 543 ms      | 548 ms   | 83.5 MB      | 54.8 MB       | 543 ms       | 1.9 MB     | 63/63           | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 224 ms      | 225 ms   | 59.3 MB      | 30.6 MB       | 135 ms       | 0.9 MB     | 27/27           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 30 ms    | 33 ms    | 30.2 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 435 ms   | 471 ms   | 84.1 MB      | 490 ms       | 52/52           | fixture-inspection     |
| target-registry  | 1        | 519 ms   | 530 ms   | 82.3 MB      | 536 ms       | 61/61           | compat-report-registry |
| contract-capture | 1        | 521 ms   | 528 ms   | 85 MB        | 527 ms       | 62/62           | contract-capture       |
| synthetic-probes | 1        | 511 ms   | 519 ms   | 84.6 MB      | 532 ms       | 60/60           | synthetic-probe-plan   |
| cold-import      | 1        | 507 ms   | 520 ms   | 84.1 MB      | 520 ms       | 60/60           | cold-import-readiness  |
| workspace-plan   | 1        | 524 ms   | 548 ms   | 83.5 MB      | 566 ms       | 63/63           | workspace-plan         |
| platform-probes  | 1        | 543 ms   | 548 ms   | 83.5 MB      | 543 ms       | 63/63           | platform-probes        |
| import-loop      | 1        | 224 ms   | 225 ms   | 59.3 MB      | 135 ms       | 27/27           | import-loop-profile    |
