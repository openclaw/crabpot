# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2558 ms            |
| Command P95 wall time  | 2603 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 2176               |
| CPU samples            | 2176               |
| Max peak RSS           | 345.2 MB           |
| Max RSS delta          | 317 MB             |
| Max CPU estimate       | 2920 ms            |
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
| node-boot              | Node boot                                       | 34 ms       | 34 ms    | 29.9 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2409 ms     | 2435 ms  | 333.2 MB     | 305 MB        | 2730 ms      | 8.2 MB     | 288/288         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2559 ms     | 2562 ms  | 336.5 MB     | 308.3 MB      | 2894 ms      | -1.7 MB    | 304/304         | 0          |
| contract-capture       | Contract capture inventory                      | 2558 ms     | 2573 ms  | 333.9 MB     | 305.7 MB      | 2846 ms      | 1 MB       | 305/305         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2559 ms     | 2578 ms  | 334.2 MB     | 305.2 MB      | 2893 ms      | 1.1 MB     | 306/306         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2552 ms     | 2552 ms  | 340.7 MB     | 312.4 MB      | 2899 ms      | 2.2 MB     | 304/304         | 0          |
| workspace-plan         | Workspace execution plan                        | 2584 ms     | 2598 ms  | 343.5 MB     | 314.5 MB      | 2920 ms      | 2.2 MB     | 308/308         | 0          |
| platform-probes        | Platform and loader probes                      | 2603 ms     | 2625 ms  | 345.2 MB     | 317 MB        | 2901 ms      | 2.5 MB     | 310/310         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 401 ms      | 405 ms   | 60.7 MB      | 32.4 MB       | 190 ms       | 1.4 MB     | 48/48           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 34 ms    | 34 ms    | 29.9 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2409 ms  | 2435 ms  | 333.2 MB     | 2730 ms      | 288/288         | fixture-inspection     |
| target-registry  | 1        | 2559 ms  | 2562 ms  | 336.5 MB     | 2894 ms      | 304/304         | compat-report-registry |
| contract-capture | 1        | 2558 ms  | 2573 ms  | 333.9 MB     | 2846 ms      | 305/305         | contract-capture       |
| synthetic-probes | 1        | 2559 ms  | 2578 ms  | 334.2 MB     | 2893 ms      | 306/306         | synthetic-probe-plan   |
| cold-import      | 1        | 2552 ms  | 2552 ms  | 340.7 MB     | 2899 ms      | 304/304         | cold-import-readiness  |
| workspace-plan   | 1        | 2584 ms  | 2598 ms  | 343.5 MB     | 2920 ms      | 308/308         | workspace-plan         |
| platform-probes  | 1        | 2603 ms  | 2625 ms  | 345.2 MB     | 2901 ms      | 310/310         | platform-probes        |
| import-loop      | 1        | 401 ms   | 405 ms   | 60.7 MB      | 190 ms       | 48/48           | import-loop-profile    |
