# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2631 ms            |
| Command P95 wall time  | 2707 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 2248               |
| CPU samples            | 2248               |
| Max peak RSS           | 345.3 MB           |
| Max RSS delta          | 315.7 MB           |
| Max CPU estimate       | 3043 ms            |
| Max harness heap delta | 8.2 MB             |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 68         |
| hookNames              | 39         |
| apiRegistrars          | 55         |
| capturedRegistrars     | 30         |
| sdkExports             | 322        |
| manifestFields         | 43         |
| manifestContractFields | 21         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 60    |
| sourceFiles           | 2009  |
| observedHooks         | 109   |
| observedRegistrations | 208   |
| observedSdkImports    | 1267  |
| contractProbes        | 279   |
| issueFindings         | 288   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 38 ms       | 38 ms    | 29.4 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2487 ms     | 2495 ms  | 335.6 MB     | 305.7 MB      | 2832 ms      | 8.2 MB     | 295/295         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2632 ms     | 2651 ms  | 333.9 MB     | 305.4 MB      | 2940 ms      | 0.7 MB     | 312/312         | 0          |
| contract-capture       | Contract capture inventory                      | 2631 ms     | 2645 ms  | 334 MB       | 305.8 MB      | 2952 ms      | 1 MB       | 314/314         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2634 ms     | 2641 ms  | 334 MB       | 304.8 MB      | 2950 ms      | 2.5 MB     | 314/314         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2612 ms     | 2655 ms  | 343.5 MB     | 314.4 MB      | 3003 ms      | -0.5 MB    | 312/312         | 0          |
| workspace-plan         | Workspace execution plan                        | 2661 ms     | 2713 ms  | 343.1 MB     | 314.8 MB      | 3028 ms      | 2.5 MB     | 319/319         | 0          |
| platform-probes        | Platform and loader probes                      | 2707 ms     | 2736 ms  | 345.3 MB     | 315.7 MB      | 3043 ms      | 2.8 MB     | 325/325         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 451 ms      | 459 ms   | 60.7 MB      | 32.5 MB       | 211 ms       | 1.6 MB     | 54/54           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 38 ms    | 38 ms    | 29.4 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2487 ms  | 2495 ms  | 335.6 MB     | 2832 ms      | 295/295         | fixture-inspection     |
| target-registry  | 1        | 2632 ms  | 2651 ms  | 333.9 MB     | 2940 ms      | 312/312         | compat-report-registry |
| contract-capture | 1        | 2631 ms  | 2645 ms  | 334 MB       | 2952 ms      | 314/314         | contract-capture       |
| synthetic-probes | 1        | 2634 ms  | 2641 ms  | 334 MB       | 2950 ms      | 314/314         | synthetic-probe-plan   |
| cold-import      | 1        | 2612 ms  | 2655 ms  | 343.5 MB     | 3003 ms      | 312/312         | cold-import-readiness  |
| workspace-plan   | 1        | 2661 ms  | 2713 ms  | 343.1 MB     | 3028 ms      | 319/319         | workspace-plan         |
| platform-probes  | 1        | 2707 ms  | 2736 ms  | 345.3 MB     | 3043 ms      | 325/325         | platform-probes        |
| import-loop      | 1        | 451 ms   | 459 ms   | 60.7 MB      | 211 ms       | 54/54           | import-loop-profile    |
