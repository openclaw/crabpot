# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2421 ms            |
| Command P95 wall time  | 2481 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 2059               |
| CPU samples            | 2059               |
| Max peak RSS           | 482.6 MB           |
| Max RSS delta          | 453.9 MB           |
| Max CPU estimate       | 2743 ms            |
| Max harness heap delta | 7.7 MB             |

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
| sourceFiles           | 1783  |
| observedHooks         | 108   |
| observedRegistrations | 204   |
| observedSdkImports    | 1243  |
| contractProbes        | 304   |
| issueFindings         | 309   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 38 ms       | 39 ms    | 30.1 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2344 ms     | 2369 ms  | 472.3 MB     | 443.7 MB      | 2561 ms      | 7.6 MB     | 276/276         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2395 ms     | 2413 ms  | 473.8 MB     | 444.2 MB      | 2676 ms      | 7.7 MB     | 283/283         | 0          |
| contract-capture       | Contract capture inventory                      | 2441 ms     | 2518 ms  | 474.2 MB     | 444.3 MB      | 2712 ms      | -3.9 MB    | 286/286         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2421 ms     | 2432 ms  | 474.4 MB     | 445.9 MB      | 2634 ms      | 0.8 MB     | 284/284         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2424 ms     | 2468 ms  | 472.9 MB     | 444.4 MB      | 2715 ms      | 0.3 MB     | 288/288         | 0          |
| workspace-plan         | Workspace execution plan                        | 2480 ms     | 2482 ms  | 481.7 MB     | 453.3 MB      | 2743 ms      | 1.9 MB     | 294/294         | 0          |
| platform-probes        | Platform and loader probes                      | 2481 ms     | 2512 ms  | 482.6 MB     | 453.9 MB      | 2718 ms      | 2.1 MB     | 297/297         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 402 ms      | 409 ms   | 60.4 MB      | 32 MB         | 192 ms       | 1.4 MB     | 48/48           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 38 ms    | 39 ms    | 30.1 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2344 ms  | 2369 ms  | 472.3 MB     | 2561 ms      | 276/276         | fixture-inspection     |
| target-registry  | 1        | 2395 ms  | 2413 ms  | 473.8 MB     | 2676 ms      | 283/283         | compat-report-registry |
| contract-capture | 1        | 2441 ms  | 2518 ms  | 474.2 MB     | 2712 ms      | 286/286         | contract-capture       |
| synthetic-probes | 1        | 2421 ms  | 2432 ms  | 474.4 MB     | 2634 ms      | 284/284         | synthetic-probe-plan   |
| cold-import      | 1        | 2424 ms  | 2468 ms  | 472.9 MB     | 2715 ms      | 288/288         | cold-import-readiness  |
| workspace-plan   | 1        | 2480 ms  | 2482 ms  | 481.7 MB     | 2743 ms      | 294/294         | workspace-plan         |
| platform-probes  | 1        | 2481 ms  | 2512 ms  | 482.6 MB     | 2718 ms      | 297/297         | platform-probes        |
| import-loop      | 1        | 402 ms   | 409 ms   | 60.4 MB      | 192 ms       | 48/48           | import-loop-profile    |
