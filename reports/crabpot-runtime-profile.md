# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 520 ms             |
| Command P95 wall time  | 546 ms             |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 477                |
| CPU samples            | 477                |
| Max peak RSS           | 85.6 MB            |
| Max RSS delta          | 56.1 MB            |
| Max CPU estimate       | 567 ms             |
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
| node-boot              | Node boot                                       | 29 ms       | 31 ms    | 30.2 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 456 ms      | 482 ms   | 81 MB        | 52.3 MB       | 494 ms       | 1.8 MB     | 54/54           | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 522 ms      | 522 ms   | 85.6 MB      | 56.1 MB       | 542 ms       | 2 MB       | 61/61           | 0          |
| contract-capture       | Contract capture inventory                      | 520 ms      | 525 ms   | 84.7 MB      | 56 MB         | 526 ms       | 2 MB       | 61/61           | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 527 ms      | 534 ms   | 84.6 MB      | 55.4 MB       | 533 ms       | 1.9 MB     | 63/63           | 0          |
| cold-import-readiness  | Cold import readiness                           | 503 ms      | 519 ms   | 83.9 MB      | 55.2 MB       | 513 ms       | 1.8 MB     | 60/60           | 0          |
| workspace-plan         | Workspace execution plan                        | 546 ms      | 551 ms   | 84.3 MB      | 55.7 MB       | 567 ms       | 1.9 MB     | 65/65           | 0          |
| platform-probes        | Platform and loader probes                      | 531 ms      | 546 ms   | 83.2 MB      | 53.7 MB       | 542 ms       | 1.9 MB     | 64/64           | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 376 ms      | 400 ms   | 60.5 MB      | 31.7 MB       | 191 ms       | 1.3 MB     | 46/46           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 29 ms    | 31 ms    | 30.2 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 456 ms   | 482 ms   | 81 MB        | 494 ms       | 54/54           | fixture-inspection     |
| target-registry  | 1        | 522 ms   | 522 ms   | 85.6 MB      | 542 ms       | 61/61           | compat-report-registry |
| contract-capture | 1        | 520 ms   | 525 ms   | 84.7 MB      | 526 ms       | 61/61           | contract-capture       |
| synthetic-probes | 1        | 527 ms   | 534 ms   | 84.6 MB      | 533 ms       | 63/63           | synthetic-probe-plan   |
| cold-import      | 1        | 503 ms   | 519 ms   | 83.9 MB      | 513 ms       | 60/60           | cold-import-readiness  |
| workspace-plan   | 1        | 546 ms   | 551 ms   | 84.3 MB      | 567 ms       | 65/65           | workspace-plan         |
| platform-probes  | 1        | 531 ms   | 546 ms   | 83.2 MB      | 542 ms       | 64/64           | platform-probes        |
| import-loop      | 1        | 376 ms   | 400 ms   | 60.5 MB      | 191 ms       | 46/46           | import-loop-profile    |
