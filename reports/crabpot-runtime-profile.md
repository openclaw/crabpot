# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2537 ms            |
| Command P95 wall time  | 2602 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 2165               |
| CPU samples            | 2165               |
| Max peak RSS           | 346.1 MB           |
| Max RSS delta          | 317.8 MB           |
| Max CPU estimate       | 2944 ms            |
| Max harness heap delta | 8.1 MB             |

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
| sourceFiles           | 2007  |
| observedHooks         | 109   |
| observedRegistrations | 208   |
| observedSdkImports    | 1267  |
| contractProbes        | 279   |
| issueFindings         | 288   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 33 ms       | 36 ms    | 30.2 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2385 ms     | 2413 ms  | 334.9 MB     | 305.3 MB      | 2710 ms      | 8.1 MB     | 286/286         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2542 ms     | 2555 ms  | 334.8 MB     | 305.5 MB      | 2862 ms      | 0.3 MB     | 300/300         | 0          |
| contract-capture       | Contract capture inventory                      | 2527 ms     | 2553 ms  | 334.9 MB     | 306.6 MB      | 2866 ms      | 1.3 MB     | 302/302         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2537 ms     | 2541 ms  | 334.2 MB     | 305.9 MB      | 2818 ms      | 0.9 MB     | 302/302         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2564 ms     | 2575 ms  | 342.3 MB     | 314 MB        | 2882 ms      | 2.1 MB     | 304/304         | 0          |
| workspace-plan         | Workspace execution plan                        | 2590 ms     | 2605 ms  | 341.3 MB     | 313.1 MB      | 2944 ms      | 2.4 MB     | 309/309         | 0          |
| platform-probes        | Platform and loader probes                      | 2602 ms     | 2637 ms  | 346.1 MB     | 317.8 MB      | 2914 ms      | 2.3 MB     | 311/311         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 402 ms      | 403 ms   | 60.5 MB      | 32.3 MB       | 181 ms       | 1.4 MB     | 48/48           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 33 ms    | 36 ms    | 30.2 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2385 ms  | 2413 ms  | 334.9 MB     | 2710 ms      | 286/286         | fixture-inspection     |
| target-registry  | 1        | 2542 ms  | 2555 ms  | 334.8 MB     | 2862 ms      | 300/300         | compat-report-registry |
| contract-capture | 1        | 2527 ms  | 2553 ms  | 334.9 MB     | 2866 ms      | 302/302         | contract-capture       |
| synthetic-probes | 1        | 2537 ms  | 2541 ms  | 334.2 MB     | 2818 ms      | 302/302         | synthetic-probe-plan   |
| cold-import      | 1        | 2564 ms  | 2575 ms  | 342.3 MB     | 2882 ms      | 304/304         | cold-import-readiness  |
| workspace-plan   | 1        | 2590 ms  | 2605 ms  | 341.3 MB     | 2944 ms      | 309/309         | workspace-plan         |
| platform-probes  | 1        | 2602 ms  | 2637 ms  | 346.1 MB     | 2914 ms      | 311/311         | platform-probes        |
| import-loop      | 1        | 402 ms   | 403 ms   | 60.5 MB      | 181 ms       | 48/48           | import-loop-profile    |
