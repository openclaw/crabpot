# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2392 ms            |
| Command P95 wall time  | 2482 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 2051               |
| CPU samples            | 2051               |
| Max peak RSS           | 476.4 MB           |
| Max RSS delta          | 448 MB             |
| Max CPU estimate       | 2718 ms            |
| Max harness heap delta | 7.9 MB             |

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
| observedHooks         | 106   |
| observedRegistrations | 199   |
| observedSdkImports    | 1223  |
| contractProbes        | 274   |
| issueFindings         | 278   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 34 ms       | 37 ms    | 31.8 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2292 ms     | 2336 ms  | 465.6 MB     | 435.5 MB      | 2544 ms      | 7.9 MB     | 272/272         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2392 ms     | 2437 ms  | 468 MB       | 439.6 MB      | 2698 ms      | 7.9 MB     | 285/285         | 0          |
| contract-capture       | Contract capture inventory                      | 2428 ms     | 2487 ms  | 467.9 MB     | 436.7 MB      | 2686 ms      | 7.8 MB     | 284/284         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2386 ms     | 2395 ms  | 467.3 MB     | 438.9 MB      | 2630 ms      | 1.6 MB     | 285/285         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2413 ms     | 2442 ms  | 474.8 MB     | 446.4 MB      | 2659 ms      | 0.2 MB     | 288/288         | 0          |
| workspace-plan         | Workspace execution plan                        | 2439 ms     | 2491 ms  | 475.9 MB     | 446.8 MB      | 2718 ms      | 1.7 MB     | 292/292         | 0          |
| platform-probes        | Platform and loader probes                      | 2482 ms     | 2498 ms  | 476.4 MB     | 448 MB        | 2705 ms      | 1.9 MB     | 295/295         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 398 ms      | 402 ms   | 60.2 MB      | 31.7 MB       | 181 ms       | 1.4 MB     | 47/47           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 34 ms    | 37 ms    | 31.8 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2292 ms  | 2336 ms  | 465.6 MB     | 2544 ms      | 272/272         | fixture-inspection     |
| target-registry  | 1        | 2392 ms  | 2437 ms  | 468 MB       | 2698 ms      | 285/285         | compat-report-registry |
| contract-capture | 1        | 2428 ms  | 2487 ms  | 467.9 MB     | 2686 ms      | 284/284         | contract-capture       |
| synthetic-probes | 1        | 2386 ms  | 2395 ms  | 467.3 MB     | 2630 ms      | 285/285         | synthetic-probe-plan   |
| cold-import      | 1        | 2413 ms  | 2442 ms  | 474.8 MB     | 2659 ms      | 288/288         | cold-import-readiness  |
| workspace-plan   | 1        | 2439 ms  | 2491 ms  | 475.9 MB     | 2718 ms      | 292/292         | workspace-plan         |
| platform-probes  | 1        | 2482 ms  | 2498 ms  | 476.4 MB     | 2705 ms      | 295/295         | platform-probes        |
| import-loop      | 1        | 398 ms   | 402 ms   | 60.2 MB      | 181 ms       | 47/47           | import-loop-profile    |
