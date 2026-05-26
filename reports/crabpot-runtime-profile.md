# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2422 ms            |
| Command P95 wall time  | 2518 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 2054               |
| CPU samples            | 2054               |
| Max peak RSS           | 478 MB             |
| Max RSS delta          | 448.8 MB           |
| Max CPU estimate       | 2762 ms            |
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
| sourceFiles           | 1773  |
| observedHooks         | 108   |
| observedRegistrations | 205   |
| observedSdkImports    | 1230  |
| contractProbes        | 304   |
| issueFindings         | 309   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 40 ms       | 42 ms    | 30.5 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2352 ms     | 2398 ms  | 467.3 MB     | 437.1 MB      | 2695 ms      | 7.9 MB     | 277/277         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2420 ms     | 2465 ms  | 469.6 MB     | 441.2 MB      | 2681 ms      | 7.9 MB     | 284/284         | 0          |
| contract-capture       | Contract capture inventory                      | 2459 ms     | 2491 ms  | 470.4 MB     | 440.6 MB      | 2710 ms      | 7.9 MB     | 289/289         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2429 ms     | 2464 ms  | 468.7 MB     | 438.7 MB      | 2676 ms      | 8 MB       | 287/287         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2422 ms     | 2453 ms  | 472.3 MB     | 442 MB        | 2702 ms      | 7.9 MB     | 287/287         | 0          |
| workspace-plan         | Workspace execution plan                        | 2493 ms     | 2519 ms  | 477.6 MB     | 448.8 MB      | 2762 ms      | 7.1 MB     | 283/283         | 0          |
| platform-probes        | Platform and loader probes                      | 2518 ms     | 2519 ms  | 478 MB       | 448.3 MB      | 2756 ms      | 8.1 MB     | 293/293         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 439 ms      | 457 ms   | 60.6 MB      | 30.8 MB       | 206 ms       | 1.6 MB     | 51/51           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 40 ms    | 42 ms    | 30.5 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2352 ms  | 2398 ms  | 467.3 MB     | 2695 ms      | 277/277         | fixture-inspection     |
| target-registry  | 1        | 2420 ms  | 2465 ms  | 469.6 MB     | 2681 ms      | 284/284         | compat-report-registry |
| contract-capture | 1        | 2459 ms  | 2491 ms  | 470.4 MB     | 2710 ms      | 289/289         | contract-capture       |
| synthetic-probes | 1        | 2429 ms  | 2464 ms  | 468.7 MB     | 2676 ms      | 287/287         | synthetic-probe-plan   |
| cold-import      | 1        | 2422 ms  | 2453 ms  | 472.3 MB     | 2702 ms      | 287/287         | cold-import-readiness  |
| workspace-plan   | 1        | 2493 ms  | 2519 ms  | 477.6 MB     | 2762 ms      | 283/283         | workspace-plan         |
| platform-probes  | 1        | 2518 ms  | 2519 ms  | 478 MB       | 2756 ms      | 293/293         | platform-probes        |
| import-loop      | 1        | 439 ms   | 457 ms   | 60.6 MB      | 206 ms       | 51/51           | import-loop-profile    |
