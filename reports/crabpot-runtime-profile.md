# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 505 ms             |
| Command P95 wall time  | 544 ms             |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 466                |
| CPU samples            | 466                |
| Max peak RSS           | 89.9 MB            |
| Max RSS delta          | 61.2 MB            |
| Max CPU estimate       | 555 ms             |
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
| node-boot              | Node boot                                       | 34 ms       | 35 ms    | 30.2 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 448 ms      | 451 ms   | 83.9 MB      | 55.3 MB       | 457 ms       | 1.7 MB     | 53/53           | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 504 ms      | 521 ms   | 85.5 MB      | 56.8 MB       | 530 ms       | 2 MB       | 59/59           | 0          |
| contract-capture       | Contract capture inventory                      | 505 ms      | 520 ms   | 83.6 MB      | 54.6 MB       | 515 ms       | 1.9 MB     | 60/60           | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 507 ms      | 520 ms   | 84.7 MB      | 56 MB         | 525 ms       | 1.9 MB     | 60/60           | 0          |
| cold-import-readiness  | Cold import readiness                           | 512 ms      | 514 ms   | 89.9 MB      | 61.2 MB       | 535 ms       | 1.8 MB     | 60/60           | 0          |
| workspace-plan         | Workspace execution plan                        | 536 ms      | 544 ms   | 87.7 MB      | 59 MB         | 553 ms       | 1.8 MB     | 63/63           | 0          |
| platform-probes        | Platform and loader probes                      | 544 ms      | 546 ms   | 87.4 MB      | 57.6 MB       | 555 ms       | 1.9 MB     | 63/63           | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 374 ms      | 374 ms   | 60 MB        | 31.2 MB       | 174 ms       | 1.3 MB     | 45/45           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 34 ms    | 35 ms    | 30.2 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 448 ms   | 451 ms   | 83.9 MB      | 457 ms       | 53/53           | fixture-inspection     |
| target-registry  | 1        | 504 ms   | 521 ms   | 85.5 MB      | 530 ms       | 59/59           | compat-report-registry |
| contract-capture | 1        | 505 ms   | 520 ms   | 83.6 MB      | 515 ms       | 60/60           | contract-capture       |
| synthetic-probes | 1        | 507 ms   | 520 ms   | 84.7 MB      | 525 ms       | 60/60           | synthetic-probe-plan   |
| cold-import      | 1        | 512 ms   | 514 ms   | 89.9 MB      | 535 ms       | 60/60           | cold-import-readiness  |
| workspace-plan   | 1        | 536 ms   | 544 ms   | 87.7 MB      | 553 ms       | 63/63           | workspace-plan         |
| platform-probes  | 1        | 544 ms   | 546 ms   | 87.4 MB      | 555 ms       | 63/63           | platform-probes        |
| import-loop      | 1        | 374 ms   | 374 ms   | 60 MB        | 174 ms       | 45/45           | import-loop-profile    |
