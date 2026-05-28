# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2435 ms            |
| Command P95 wall time  | 2489 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 2064               |
| CPU samples            | 2064               |
| Max peak RSS           | 482.8 MB           |
| Max RSS delta          | 452.8 MB           |
| Max CPU estimate       | 2743 ms            |
| Max harness heap delta | 8.1 MB             |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 64         |
| hookNames              | 37         |
| apiRegistrars          | 55         |
| capturedRegistrars     | 30         |
| sdkExports             | 304        |
| manifestFields         | 41         |
| manifestContractFields | 20         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 60    |
| sourceFiles           | 1784  |
| observedHooks         | 108   |
| observedRegistrations | 205   |
| observedSdkImports    | 1213  |
| contractProbes        | 284   |
| issueFindings         | 289   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 38 ms       | 39 ms    | 31.3 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2339 ms     | 2386 ms  | 473.2 MB     | 442.2 MB      | 2629 ms      | 7.8 MB     | 276/276         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2435 ms     | 2472 ms  | 475.8 MB     | 447.1 MB      | 2704 ms      | 8.1 MB     | 286/286         | 0          |
| contract-capture       | Contract capture inventory                      | 2447 ms     | 2521 ms  | 472.5 MB     | 442.4 MB      | 2743 ms      | 8 MB       | 291/291         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2419 ms     | 2442 ms  | 472 MB       | 441.7 MB      | 2652 ms      | 8 MB       | 286/286         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2449 ms     | 2471 ms  | 477.8 MB     | 449 MB        | 2701 ms      | 8 MB       | 289/289         | 0          |
| workspace-plan         | Workspace execution plan                        | 2489 ms     | 2495 ms  | 482.8 MB     | 452.8 MB      | 2735 ms      | 8 MB       | 296/296         | 0          |
| platform-probes        | Platform and loader probes                      | 2463 ms     | 2465 ms  | 462.3 MB     | 433.4 MB      | 2650 ms      | 8 MB       | 291/291         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 406 ms      | 408 ms   | 60.5 MB      | 30.7 MB       | 195 ms       | 1.5 MB     | 46/46           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 38 ms    | 39 ms    | 31.3 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2339 ms  | 2386 ms  | 473.2 MB     | 2629 ms      | 276/276         | fixture-inspection     |
| target-registry  | 1        | 2435 ms  | 2472 ms  | 475.8 MB     | 2704 ms      | 286/286         | compat-report-registry |
| contract-capture | 1        | 2447 ms  | 2521 ms  | 472.5 MB     | 2743 ms      | 291/291         | contract-capture       |
| synthetic-probes | 1        | 2419 ms  | 2442 ms  | 472 MB       | 2652 ms      | 286/286         | synthetic-probe-plan   |
| cold-import      | 1        | 2449 ms  | 2471 ms  | 477.8 MB     | 2701 ms      | 289/289         | cold-import-readiness  |
| workspace-plan   | 1        | 2489 ms  | 2495 ms  | 482.8 MB     | 2735 ms      | 296/296         | workspace-plan         |
| platform-probes  | 1        | 2463 ms  | 2465 ms  | 462.3 MB     | 2650 ms      | 291/291         | platform-probes        |
| import-loop      | 1        | 406 ms   | 408 ms   | 60.5 MB      | 195 ms       | 46/46           | import-loop-profile    |
