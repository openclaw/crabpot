# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2578 ms            |
| Command P95 wall time  | 2634 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 2196               |
| CPU samples            | 2196               |
| Max peak RSS           | 345.7 MB           |
| Max RSS delta          | 317.5 MB           |
| Max CPU estimate       | 2969 ms            |
| Max harness heap delta | 7.8 MB             |

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
| node-boot              | Node boot                                       | 31 ms       | 32 ms    | 30.9 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2429 ms     | 2431 ms  | 332.6 MB     | 303.9 MB      | 2766 ms      | 7.8 MB     | 288/288         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2578 ms     | 2580 ms  | 335.1 MB     | 305.9 MB      | 2900 ms      | 0.4 MB     | 306/306         | 0          |
| contract-capture       | Contract capture inventory                      | 2601 ms     | 2653 ms  | 338 MB       | 309.7 MB      | 2969 ms      | 1.1 MB     | 310/310         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2582 ms     | 2604 ms  | 334.5 MB     | 306.1 MB      | 2898 ms      | 2.3 MB     | 308/308         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2575 ms     | 2590 ms  | 341.4 MB     | 312.5 MB      | 2888 ms      | 2.2 MB     | 307/307         | 0          |
| workspace-plan         | Workspace execution plan                        | 2612 ms     | 2615 ms  | 343.5 MB     | 314.4 MB      | 2928 ms      | 2.4 MB     | 312/312         | 0          |
| platform-probes        | Platform and loader probes                      | 2634 ms     | 2648 ms  | 345.7 MB     | 317.5 MB      | 2921 ms      | 2.5 MB     | 314/314         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 401 ms      | 405 ms   | 60.6 MB      | 32.4 MB       | 190 ms       | 1.4 MB     | 48/48           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 31 ms    | 32 ms    | 30.9 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2429 ms  | 2431 ms  | 332.6 MB     | 2766 ms      | 288/288         | fixture-inspection     |
| target-registry  | 1        | 2578 ms  | 2580 ms  | 335.1 MB     | 2900 ms      | 306/306         | compat-report-registry |
| contract-capture | 1        | 2601 ms  | 2653 ms  | 338 MB       | 2969 ms      | 310/310         | contract-capture       |
| synthetic-probes | 1        | 2582 ms  | 2604 ms  | 334.5 MB     | 2898 ms      | 308/308         | synthetic-probe-plan   |
| cold-import      | 1        | 2575 ms  | 2590 ms  | 341.4 MB     | 2888 ms      | 307/307         | cold-import-readiness  |
| workspace-plan   | 1        | 2612 ms  | 2615 ms  | 343.5 MB     | 2928 ms      | 312/312         | workspace-plan         |
| platform-probes  | 1        | 2634 ms  | 2648 ms  | 345.7 MB     | 2921 ms      | 314/314         | platform-probes        |
| import-loop      | 1        | 401 ms   | 405 ms   | 60.6 MB      | 190 ms       | 48/48           | import-loop-profile    |
