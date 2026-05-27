# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2390 ms            |
| Command P95 wall time  | 2488 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 2068               |
| CPU samples            | 2068               |
| Max peak RSS           | 486.9 MB           |
| Max RSS delta          | 458.5 MB           |
| Max CPU estimate       | 2779 ms            |
| Max harness heap delta | 8 MB               |

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
| node-boot              | Node boot                                       | 36 ms       | 37 ms    | 31.6 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2326 ms     | 2427 ms  | 473.7 MB     | 443.3 MB      | 2684 ms      | 7.7 MB     | 276/276         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2390 ms     | 2415 ms  | 475.7 MB     | 445.5 MB      | 2630 ms      | 8 MB       | 283/283         | 0          |
| contract-capture       | Contract capture inventory                      | 2460 ms     | 2489 ms  | 476.4 MB     | 445.6 MB      | 2728 ms      | -3.9 MB    | 288/288         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2415 ms     | 2456 ms  | 476.3 MB     | 447.6 MB      | 2672 ms      | 0.4 MB     | 289/289         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2383 ms     | 2456 ms  | 486.9 MB     | 458.5 MB      | 2697 ms      | 0.5 MB     | 288/288         | 0          |
| workspace-plan         | Workspace execution plan                        | 2468 ms     | 2522 ms  | 484 MB       | 455.7 MB      | 2779 ms      | 2 MB       | 294/294         | 0          |
| platform-probes        | Platform and loader probes                      | 2488 ms     | 2538 ms  | 484.4 MB     | 456 MB        | 2761 ms      | 2 MB       | 298/298         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 423 ms      | 432 ms   | 60.5 MB      | 32 MB         | 201 ms       | 1.5 MB     | 49/49           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 36 ms    | 37 ms    | 31.6 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2326 ms  | 2427 ms  | 473.7 MB     | 2684 ms      | 276/276         | fixture-inspection     |
| target-registry  | 1        | 2390 ms  | 2415 ms  | 475.7 MB     | 2630 ms      | 283/283         | compat-report-registry |
| contract-capture | 1        | 2460 ms  | 2489 ms  | 476.4 MB     | 2728 ms      | 288/288         | contract-capture       |
| synthetic-probes | 1        | 2415 ms  | 2456 ms  | 476.3 MB     | 2672 ms      | 289/289         | synthetic-probe-plan   |
| cold-import      | 1        | 2383 ms  | 2456 ms  | 486.9 MB     | 2697 ms      | 288/288         | cold-import-readiness  |
| workspace-plan   | 1        | 2468 ms  | 2522 ms  | 484 MB       | 2779 ms      | 294/294         | workspace-plan         |
| platform-probes  | 1        | 2488 ms  | 2538 ms  | 484.4 MB     | 2761 ms      | 298/298         | platform-probes        |
| import-loop      | 1        | 423 ms   | 432 ms   | 60.5 MB      | 201 ms       | 49/49           | import-loop-profile    |
