# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2375 ms            |
| Command P95 wall time  | 2448 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 2032               |
| CPU samples            | 2032               |
| Max peak RSS           | 483.8 MB           |
| Max RSS delta          | 455.4 MB           |
| Max CPU estimate       | 2692 ms            |
| Max harness heap delta | 7.8 MB             |

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
| node-boot              | Node boot                                       | 33 ms       | 40 ms    | 32 MB        | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2301 ms     | 2321 ms  | 474.8 MB     | 444.3 MB      | 2544 ms      | 7.8 MB     | 268/268         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2375 ms     | 2418 ms  | 477.4 MB     | 447.1 MB      | 2662 ms      | 7.7 MB     | 282/282         | 0          |
| contract-capture       | Contract capture inventory                      | 2410 ms     | 2438 ms  | 476.1 MB     | 447.6 MB      | 2653 ms      | -4.2 MB    | 282/282         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2381 ms     | 2437 ms  | 476.4 MB     | 447.9 MB      | 2673 ms      | 0.9 MB     | 285/285         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2354 ms     | 2436 ms  | 481.1 MB     | 452.7 MB      | 2692 ms      | 0.2 MB     | 284/284         | 0          |
| workspace-plan         | Workspace execution plan                        | 2448 ms     | 2461 ms  | 483.8 MB     | 455.4 MB      | 2687 ms      | 1.8 MB     | 291/291         | 0          |
| platform-probes        | Platform and loader probes                      | 2438 ms     | 2448 ms  | 462.4 MB     | 433.6 MB      | 2651 ms      | 2 MB       | 290/290         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 397 ms      | 400 ms   | 60.6 MB      | 32.1 MB       | 195 ms       | 1.4 MB     | 47/47           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 33 ms    | 40 ms    | 32 MB        | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2301 ms  | 2321 ms  | 474.8 MB     | 2544 ms      | 268/268         | fixture-inspection     |
| target-registry  | 1        | 2375 ms  | 2418 ms  | 477.4 MB     | 2662 ms      | 282/282         | compat-report-registry |
| contract-capture | 1        | 2410 ms  | 2438 ms  | 476.1 MB     | 2653 ms      | 282/282         | contract-capture       |
| synthetic-probes | 1        | 2381 ms  | 2437 ms  | 476.4 MB     | 2673 ms      | 285/285         | synthetic-probe-plan   |
| cold-import      | 1        | 2354 ms  | 2436 ms  | 481.1 MB     | 2692 ms      | 284/284         | cold-import-readiness  |
| workspace-plan   | 1        | 2448 ms  | 2461 ms  | 483.8 MB     | 2687 ms      | 291/291         | workspace-plan         |
| platform-probes  | 1        | 2438 ms  | 2448 ms  | 462.4 MB     | 2651 ms      | 290/290         | platform-probes        |
| import-loop      | 1        | 397 ms   | 400 ms   | 60.6 MB      | 195 ms       | 47/47           | import-loop-profile    |
