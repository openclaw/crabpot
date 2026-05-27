# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2422 ms            |
| Command P95 wall time  | 2527 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 2077               |
| CPU samples            | 2077               |
| Max peak RSS           | 485.4 MB           |
| Max RSS delta          | 456.9 MB           |
| Max CPU estimate       | 2803 ms            |
| Max harness heap delta | 8.1 MB             |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 61         |
| hookNames              | 37         |
| apiRegistrars          | 54         |
| capturedRegistrars     | 29         |
| sdkExports             | 314        |
| manifestFields         | 41         |
| manifestContractFields | 19         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 60    |
| sourceFiles           | 1776  |
| observedHooks         | 108   |
| observedRegistrations | 205   |
| observedSdkImports    | 1230  |
| contractProbes        | 304   |
| issueFindings         | 309   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 37 ms       | 38 ms    | 31.7 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2367 ms     | 2369 ms  | 473.9 MB     | 445.5 MB      | 2630 ms      | 8 MB       | 279/279         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2467 ms     | 2473 ms  | 474.2 MB     | 443.7 MB      | 2716 ms      | 8.1 MB     | 289/289         | 0          |
| contract-capture       | Contract capture inventory                      | 2527 ms     | 2531 ms  | 476.2 MB     | 445.6 MB      | 2775 ms      | -3.8 MB    | 291/291         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2422 ms     | 2423 ms  | 454.7 MB     | 426.2 MB      | 2645 ms      | 0.8 MB     | 288/288         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2401 ms     | 2439 ms  | 479.7 MB     | 451.3 MB      | 2673 ms      | 0.5 MB     | 286/286         | 0          |
| workspace-plan         | Workspace execution plan                        | 2467 ms     | 2482 ms  | 485.4 MB     | 456.9 MB      | 2718 ms      | 1.9 MB     | 293/293         | 0          |
| platform-probes        | Platform and loader probes                      | 2501 ms     | 2579 ms  | 485.4 MB     | 456.3 MB      | 2803 ms      | 2.3 MB     | 300/300         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 408 ms      | 420 ms   | 60.5 MB      | 32.1 MB       | 198 ms       | 1.4 MB     | 48/48           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 37 ms    | 38 ms    | 31.7 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2367 ms  | 2369 ms  | 473.9 MB     | 2630 ms      | 279/279         | fixture-inspection     |
| target-registry  | 1        | 2467 ms  | 2473 ms  | 474.2 MB     | 2716 ms      | 289/289         | compat-report-registry |
| contract-capture | 1        | 2527 ms  | 2531 ms  | 476.2 MB     | 2775 ms      | 291/291         | contract-capture       |
| synthetic-probes | 1        | 2422 ms  | 2423 ms  | 454.7 MB     | 2645 ms      | 288/288         | synthetic-probe-plan   |
| cold-import      | 1        | 2401 ms  | 2439 ms  | 479.7 MB     | 2673 ms      | 286/286         | cold-import-readiness  |
| workspace-plan   | 1        | 2467 ms  | 2482 ms  | 485.4 MB     | 2718 ms      | 293/293         | workspace-plan         |
| platform-probes  | 1        | 2501 ms  | 2579 ms  | 485.4 MB     | 2803 ms      | 300/300         | platform-probes        |
| import-loop      | 1        | 408 ms   | 420 ms   | 60.5 MB      | 198 ms       | 48/48           | import-loop-profile    |
