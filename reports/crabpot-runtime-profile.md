# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2613 ms            |
| Command P95 wall time  | 2695 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 2242               |
| CPU samples            | 2242               |
| Max peak RSS           | 345.3 MB           |
| Max RSS delta          | 316.8 MB           |
| Max CPU estimate       | 3003 ms            |
| Max harness heap delta | 8.4 MB             |

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
| sourceFiles           | 2011  |
| observedHooks         | 108   |
| observedRegistrations | 208   |
| observedSdkImports    | 1279  |
| contractProbes        | 275   |
| issueFindings         | 284   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 35 ms       | 37 ms    | 29.6 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2507 ms     | 2537 ms  | 332.6 MB     | 303.3 MB      | 2869 ms      | 8.4 MB     | 297/297         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2655 ms     | 2659 ms  | 334.4 MB     | 305.4 MB      | 2963 ms      | -0.1 MB    | 312/312         | 0          |
| contract-capture       | Contract capture inventory                      | 2642 ms     | 2644 ms  | 334.9 MB     | 306.7 MB      | 2946 ms      | 1.2 MB     | 314/314         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2613 ms     | 2631 ms  | 334.9 MB     | 306 MB        | 2952 ms      | 0.9 MB     | 312/312         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2611 ms     | 2615 ms  | 337.5 MB     | 309.2 MB      | 2944 ms      | 2.5 MB     | 311/311         | 0          |
| workspace-plan         | Workspace execution plan                        | 2655 ms     | 2693 ms  | 343.8 MB     | 315.6 MB      | 3003 ms      | 2.6 MB     | 319/319         | 0          |
| platform-probes        | Platform and loader probes                      | 2695 ms     | 2698 ms  | 345.3 MB     | 316.8 MB      | 2972 ms      | 2.7 MB     | 321/321         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 457 ms      | 459 ms   | 61 MB        | 32.3 MB       | 218 ms       | 1.6 MB     | 53/53           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 35 ms    | 37 ms    | 29.6 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2507 ms  | 2537 ms  | 332.6 MB     | 2869 ms      | 297/297         | fixture-inspection     |
| target-registry  | 1        | 2655 ms  | 2659 ms  | 334.4 MB     | 2963 ms      | 312/312         | compat-report-registry |
| contract-capture | 1        | 2642 ms  | 2644 ms  | 334.9 MB     | 2946 ms      | 314/314         | contract-capture       |
| synthetic-probes | 1        | 2613 ms  | 2631 ms  | 334.9 MB     | 2952 ms      | 312/312         | synthetic-probe-plan   |
| cold-import      | 1        | 2611 ms  | 2615 ms  | 337.5 MB     | 2944 ms      | 311/311         | cold-import-readiness  |
| workspace-plan   | 1        | 2655 ms  | 2693 ms  | 343.8 MB     | 3003 ms      | 319/319         | workspace-plan         |
| platform-probes  | 1        | 2695 ms  | 2698 ms  | 345.3 MB     | 2972 ms      | 321/321         | platform-probes        |
| import-loop      | 1        | 457 ms   | 459 ms   | 61 MB        | 218 ms       | 53/53           | import-loop-profile    |
