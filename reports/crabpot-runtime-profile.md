# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2465 ms            |
| Command P95 wall time  | 2592 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 2090               |
| CPU samples            | 2090               |
| Max peak RSS           | 484.8 MB           |
| Max RSS delta          | 455.2 MB           |
| Max CPU estimate       | 2807 ms            |
| Max harness heap delta | 8.2 MB             |

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
| sourceFiles           | 1781  |
| observedHooks         | 108   |
| observedRegistrations | 205   |
| observedSdkImports    | 1230  |
| contractProbes        | 304   |
| issueFindings         | 309   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 40 ms       | 45 ms    | 32.3 MB      | 0 MB          | 45 ms        | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2368 ms     | 2450 ms  | 475.3 MB     | 444 MB        | 2639 ms      | 7.9 MB     | 280/280         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2471 ms     | 2528 ms  | 475.8 MB     | 445.8 MB      | 2743 ms      | 8 MB       | 290/290         | 0          |
| contract-capture       | Contract capture inventory                      | 2465 ms     | 2466 ms  | 475.9 MB     | 446.1 MB      | 2699 ms      | 8.2 MB     | 288/288         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2472 ms     | 2506 ms  | 477.4 MB     | 447.6 MB      | 2732 ms      | 8 MB       | 291/291         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2418 ms     | 2470 ms  | 461.1 MB     | 432.7 MB      | 2658 ms      | 7.9 MB     | 286/286         | 0          |
| workspace-plan         | Workspace execution plan                        | 2517 ms     | 2538 ms  | 484.1 MB     | 455.2 MB      | 2787 ms      | 8.2 MB     | 298/298         | 0          |
| platform-probes        | Platform and loader probes                      | 2592 ms     | 2610 ms  | 484.8 MB     | 454.3 MB      | 2807 ms      | 8.2 MB     | 304/304         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 430 ms      | 482 ms   | 60.5 MB      | 31.1 MB       | 227 ms       | 1.7 MB     | 50/50           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 40 ms    | 45 ms    | 32.3 MB      | 45 ms        | 3/3             | node-boot              |
| fixture-scan     | 1        | 2368 ms  | 2450 ms  | 475.3 MB     | 2639 ms      | 280/280         | fixture-inspection     |
| target-registry  | 1        | 2471 ms  | 2528 ms  | 475.8 MB     | 2743 ms      | 290/290         | compat-report-registry |
| contract-capture | 1        | 2465 ms  | 2466 ms  | 475.9 MB     | 2699 ms      | 288/288         | contract-capture       |
| synthetic-probes | 1        | 2472 ms  | 2506 ms  | 477.4 MB     | 2732 ms      | 291/291         | synthetic-probe-plan   |
| cold-import      | 1        | 2418 ms  | 2470 ms  | 461.1 MB     | 2658 ms      | 286/286         | cold-import-readiness  |
| workspace-plan   | 1        | 2517 ms  | 2538 ms  | 484.1 MB     | 2787 ms      | 298/298         | workspace-plan         |
| platform-probes  | 1        | 2592 ms  | 2610 ms  | 484.8 MB     | 2807 ms      | 304/304         | platform-probes        |
| import-loop      | 1        | 430 ms   | 482 ms   | 60.5 MB      | 227 ms       | 50/50           | import-loop-profile    |
