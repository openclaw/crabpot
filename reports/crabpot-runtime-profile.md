# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2483 ms            |
| Command P95 wall time  | 2558 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 2112               |
| CPU samples            | 2112               |
| Max peak RSS           | 484.6 MB           |
| Max RSS delta          | 456.1 MB           |
| Max CPU estimate       | 2860 ms            |
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
| node-boot              | Node boot                                       | 39 ms       | 40 ms    | 31.4 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2369 ms     | 2419 ms  | 475.7 MB     | 445.7 MB      | 2675 ms      | 8 MB       | 283/283         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2490 ms     | 2492 ms  | 476.8 MB     | 447.1 MB      | 2754 ms      | 8.1 MB     | 294/294         | 0          |
| contract-capture       | Contract capture inventory                      | 2502 ms     | 2537 ms  | 476.8 MB     | 445.8 MB      | 2748 ms      | -3.8 MB    | 292/292         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2483 ms     | 2503 ms  | 476.8 MB     | 447.9 MB      | 2744 ms      | 0.7 MB     | 294/294         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2481 ms     | 2494 ms  | 478.4 MB     | 450 MB        | 2764 ms      | 1.8 MB     | 293/293         | 0          |
| workspace-plan         | Workspace execution plan                        | 2493 ms     | 2534 ms  | 483.9 MB     | 455.4 MB      | 2767 ms      | 2 MB       | 298/298         | 0          |
| platform-probes        | Platform and loader probes                      | 2558 ms     | 2605 ms  | 484.6 MB     | 456.1 MB      | 2860 ms      | 2.2 MB     | 304/304         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 431 ms      | 446 ms   | 60.5 MB      | 32.1 MB       | 207 ms       | 1.5 MB     | 51/51           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 39 ms    | 40 ms    | 31.4 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2369 ms  | 2419 ms  | 475.7 MB     | 2675 ms      | 283/283         | fixture-inspection     |
| target-registry  | 1        | 2490 ms  | 2492 ms  | 476.8 MB     | 2754 ms      | 294/294         | compat-report-registry |
| contract-capture | 1        | 2502 ms  | 2537 ms  | 476.8 MB     | 2748 ms      | 292/292         | contract-capture       |
| synthetic-probes | 1        | 2483 ms  | 2503 ms  | 476.8 MB     | 2744 ms      | 294/294         | synthetic-probe-plan   |
| cold-import      | 1        | 2481 ms  | 2494 ms  | 478.4 MB     | 2764 ms      | 293/293         | cold-import-readiness  |
| workspace-plan   | 1        | 2493 ms  | 2534 ms  | 483.9 MB     | 2767 ms      | 298/298         | workspace-plan         |
| platform-probes  | 1        | 2558 ms  | 2605 ms  | 484.6 MB     | 2860 ms      | 304/304         | platform-probes        |
| import-loop      | 1        | 431 ms   | 446 ms   | 60.5 MB      | 207 ms       | 51/51           | import-loop-profile    |
