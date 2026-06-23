# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2561 ms            |
| Command P95 wall time  | 2590 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 2179               |
| CPU samples            | 2179               |
| Max peak RSS           | 342.4 MB           |
| Max RSS delta          | 314 MB             |
| Max CPU estimate       | 2947 ms            |
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
| sdkExports             | 320        |
| manifestFields         | 42         |
| manifestContractFields | 21         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 60    |
| sourceFiles           | 1984  |
| observedHooks         | 108   |
| observedRegistrations | 207   |
| observedSdkImports    | 1261  |
| contractProbes        | 280   |
| issueFindings         | 291   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 35 ms       | 36 ms    | 30.6 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2439 ms     | 2446 ms  | 332.7 MB     | 303.7 MB      | 2776 ms      | 8.1 MB     | 290/290         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2590 ms     | 2591 ms  | 330.3 MB     | 301.9 MB      | 2923 ms      | 0.6 MB     | 305/305         | 0          |
| contract-capture       | Contract capture inventory                      | 2561 ms     | 2607 ms  | 330.1 MB     | 301.7 MB      | 2915 ms      | 1.3 MB     | 306/306         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2564 ms     | 2585 ms  | 334.7 MB     | 306.3 MB      | 2885 ms      | 2.3 MB     | 305/305         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2544 ms     | 2564 ms  | 341.5 MB     | 313.1 MB      | 2902 ms      | 2.1 MB     | 304/304         | 0          |
| workspace-plan         | Workspace execution plan                        | 2584 ms     | 2592 ms  | 342.4 MB     | 314 MB        | 2947 ms      | 2.3 MB     | 309/309         | 0          |
| platform-probes        | Platform and loader probes                      | 2583 ms     | 2605 ms  | 338.9 MB     | 310.5 MB      | 2912 ms      | 2.5 MB     | 308/308         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 424 ms      | 427 ms   | 60.6 MB      | 32.2 MB       | 210 ms       | 1.5 MB     | 49/49           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 35 ms    | 36 ms    | 30.6 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2439 ms  | 2446 ms  | 332.7 MB     | 2776 ms      | 290/290         | fixture-inspection     |
| target-registry  | 1        | 2590 ms  | 2591 ms  | 330.3 MB     | 2923 ms      | 305/305         | compat-report-registry |
| contract-capture | 1        | 2561 ms  | 2607 ms  | 330.1 MB     | 2915 ms      | 306/306         | contract-capture       |
| synthetic-probes | 1        | 2564 ms  | 2585 ms  | 334.7 MB     | 2885 ms      | 305/305         | synthetic-probe-plan   |
| cold-import      | 1        | 2544 ms  | 2564 ms  | 341.5 MB     | 2902 ms      | 304/304         | cold-import-readiness  |
| workspace-plan   | 1        | 2584 ms  | 2592 ms  | 342.4 MB     | 2947 ms      | 309/309         | workspace-plan         |
| platform-probes  | 1        | 2583 ms  | 2605 ms  | 338.9 MB     | 2912 ms      | 308/308         | platform-probes        |
| import-loop      | 1        | 424 ms   | 427 ms   | 60.6 MB      | 210 ms       | 49/49           | import-loop-profile    |
