# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2487 ms            |
| Command P95 wall time  | 2579 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 2119               |
| CPU samples            | 2119               |
| Max peak RSS           | 482.7 MB           |
| Max RSS delta          | 454.2 MB           |
| Max CPU estimate       | 2843 ms            |
| Max harness heap delta | 8.6 MB             |

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
| sourceFiles           | 1785  |
| observedHooks         | 108   |
| observedRegistrations | 206   |
| observedSdkImports    | 1202  |
| contractProbes        | 282   |
| issueFindings         | 287   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 37 ms       | 40 ms    | 31.2 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2361 ms     | 2398 ms  | 473.2 MB     | 444.8 MB      | 2631 ms      | 7.8 MB     | 279/279         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2436 ms     | 2460 ms  | 469.2 MB     | 437.7 MB      | 2683 ms      | 8.1 MB     | 289/289         | 0          |
| contract-capture       | Contract capture inventory                      | 2518 ms     | 2524 ms  | 474.7 MB     | 443.5 MB      | 2717 ms      | 8.1 MB     | 295/295         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2522 ms     | 2532 ms  | 474.4 MB     | 443.8 MB      | 2737 ms      | 8.1 MB     | 297/297         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2487 ms     | 2600 ms  | 478.1 MB     | 446.7 MB      | 2790 ms      | 8.1 MB     | 298/298         | 0          |
| workspace-plan         | Workspace execution plan                        | 2565 ms     | 2618 ms  | 482.7 MB     | 452.9 MB      | 2843 ms      | 8.6 MB     | 304/304         | 0          |
| platform-probes        | Platform and loader probes                      | 2579 ms     | 2624 ms  | 482.6 MB     | 454.2 MB      | 2781 ms      | 8.4 MB     | 305/305         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 430 ms      | 433 ms   | 60.6 MB      | 32 MB         | 215 ms       | 1.5 MB     | 49/49           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 37 ms    | 40 ms    | 31.2 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2361 ms  | 2398 ms  | 473.2 MB     | 2631 ms      | 279/279         | fixture-inspection     |
| target-registry  | 1        | 2436 ms  | 2460 ms  | 469.2 MB     | 2683 ms      | 289/289         | compat-report-registry |
| contract-capture | 1        | 2518 ms  | 2524 ms  | 474.7 MB     | 2717 ms      | 295/295         | contract-capture       |
| synthetic-probes | 1        | 2522 ms  | 2532 ms  | 474.4 MB     | 2737 ms      | 297/297         | synthetic-probe-plan   |
| cold-import      | 1        | 2487 ms  | 2600 ms  | 478.1 MB     | 2790 ms      | 298/298         | cold-import-readiness  |
| workspace-plan   | 1        | 2565 ms  | 2618 ms  | 482.7 MB     | 2843 ms      | 304/304         | workspace-plan         |
| platform-probes  | 1        | 2579 ms  | 2624 ms  | 482.6 MB     | 2781 ms      | 305/305         | platform-probes        |
| import-loop      | 1        | 430 ms   | 433 ms   | 60.6 MB      | 215 ms       | 49/49           | import-loop-profile    |
