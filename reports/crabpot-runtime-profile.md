# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2580 ms            |
| Command P95 wall time  | 2679 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 2206               |
| CPU samples            | 2206               |
| Max peak RSS           | 345.2 MB           |
| Max RSS delta          | 317 MB             |
| Max CPU estimate       | 2990 ms            |
| Max harness heap delta | 8.5 MB             |

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
| sourceFiles           | 2013  |
| observedHooks         | 108   |
| observedRegistrations | 208   |
| observedSdkImports    | 1279  |
| contractProbes        | 275   |
| issueFindings         | 284   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 32 ms       | 35 ms    | 29.6 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2456 ms     | 2458 ms  | 332.3 MB     | 304.1 MB      | 2783 ms      | -3.7 MB    | 291/291         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2582 ms     | 2608 ms  | 334.9 MB     | 306.6 MB      | 2937 ms      | 8.5 MB     | 308/308         | 0          |
| contract-capture       | Contract capture inventory                      | 2588 ms     | 2591 ms  | 336.4 MB     | 308.2 MB      | 2876 ms      | 0.9 MB     | 308/308         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2580 ms     | 2581 ms  | 335 MB       | 306.8 MB      | 2856 ms      | 2.3 MB     | 309/309         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2578 ms     | 2594 ms  | 338.2 MB     | 310 MB        | 2895 ms      | 2.3 MB     | 307/307         | 0          |
| workspace-plan         | Workspace execution plan                        | 2615 ms     | 2628 ms  | 343.8 MB     | 315.6 MB      | 2955 ms      | -0.5 MB    | 312/312         | 0          |
| platform-probes        | Platform and loader probes                      | 2679 ms     | 2699 ms  | 345.2 MB     | 317 MB        | 2990 ms      | 2.6 MB     | 319/319         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 409 ms      | 432 ms   | 60.6 MB      | 32.4 MB       | 193 ms       | 1.5 MB     | 49/49           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 32 ms    | 35 ms    | 29.6 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2456 ms  | 2458 ms  | 332.3 MB     | 2783 ms      | 291/291         | fixture-inspection     |
| target-registry  | 1        | 2582 ms  | 2608 ms  | 334.9 MB     | 2937 ms      | 308/308         | compat-report-registry |
| contract-capture | 1        | 2588 ms  | 2591 ms  | 336.4 MB     | 2876 ms      | 308/308         | contract-capture       |
| synthetic-probes | 1        | 2580 ms  | 2581 ms  | 335 MB       | 2856 ms      | 309/309         | synthetic-probe-plan   |
| cold-import      | 1        | 2578 ms  | 2594 ms  | 338.2 MB     | 2895 ms      | 307/307         | cold-import-readiness  |
| workspace-plan   | 1        | 2615 ms  | 2628 ms  | 343.8 MB     | 2955 ms      | 312/312         | workspace-plan         |
| platform-probes  | 1        | 2679 ms  | 2699 ms  | 345.2 MB     | 2990 ms      | 319/319         | platform-probes        |
| import-loop      | 1        | 409 ms   | 432 ms   | 60.6 MB      | 193 ms       | 49/49           | import-loop-profile    |
