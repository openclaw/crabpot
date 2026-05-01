# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 492 ms             |
| Command P95 wall time  | 523 ms             |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 458                |
| CPU samples            | 458                |
| Max peak RSS           | 90.6 MB            |
| Max RSS delta          | 61.8 MB            |
| Max CPU estimate       | 513 ms             |
| Max harness heap delta | 1.9 MB             |

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
| node-boot              | Node boot                                       | 29 ms       | 30 ms    | 28.8 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 425 ms      | 430 ms   | 84.9 MB      | 56.2 MB       | 424 ms       | 1.7 MB     | 51/51           | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 492 ms      | 496 ms   | 85.6 MB      | 56.9 MB       | 491 ms       | 1.9 MB     | 58/58           | 0          |
| contract-capture       | Contract capture inventory                      | 491 ms      | 493 ms   | 86 MB        | 57.2 MB       | 475 ms       | 1.9 MB     | 57/57           | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 496 ms      | 501 ms   | 85.6 MB      | 56.8 MB       | 501 ms       | 1.9 MB     | 60/60           | 0          |
| cold-import-readiness  | Cold import readiness                           | 496 ms      | 508 ms   | 90.6 MB      | 61.8 MB       | 497 ms       | 1.8 MB     | 60/60           | 0          |
| workspace-plan         | Workspace execution plan                        | 512 ms      | 525 ms   | 89.2 MB      | 60.5 MB       | 510 ms       | 1.8 MB     | 61/61           | 0          |
| platform-probes        | Platform and loader probes                      | 523 ms      | 530 ms   | 88.4 MB      | 59.6 MB       | 513 ms       | 1.8 MB     | 63/63           | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 340 ms      | 477 ms   | 60.4 MB      | 31.6 MB       | 166 ms       | 1.6 MB     | 45/45           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 29 ms    | 30 ms    | 28.8 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 425 ms   | 430 ms   | 84.9 MB      | 424 ms       | 51/51           | fixture-inspection     |
| target-registry  | 1        | 492 ms   | 496 ms   | 85.6 MB      | 491 ms       | 58/58           | compat-report-registry |
| contract-capture | 1        | 491 ms   | 493 ms   | 86 MB        | 475 ms       | 57/57           | contract-capture       |
| synthetic-probes | 1        | 496 ms   | 501 ms   | 85.6 MB      | 501 ms       | 60/60           | synthetic-probe-plan   |
| cold-import      | 1        | 496 ms   | 508 ms   | 90.6 MB      | 497 ms       | 60/60           | cold-import-readiness  |
| workspace-plan   | 1        | 512 ms   | 525 ms   | 89.2 MB      | 510 ms       | 61/61           | workspace-plan         |
| platform-probes  | 1        | 523 ms   | 530 ms   | 88.4 MB      | 513 ms       | 63/63           | platform-probes        |
| import-loop      | 1        | 340 ms   | 477 ms   | 60.4 MB      | 166 ms       | 45/45           | import-loop-profile    |
