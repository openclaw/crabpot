# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2554 ms            |
| Command P95 wall time  | 2605 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 2178               |
| CPU samples            | 2178               |
| Max peak RSS           | 342.7 MB           |
| Max RSS delta          | 314.1 MB           |
| Max CPU estimate       | 2943 ms            |
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
| sdkExports             | 321        |
| manifestFields         | 42         |
| manifestContractFields | 21         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 60    |
| sourceFiles           | 1991  |
| observedHooks         | 108   |
| observedRegistrations | 207   |
| observedSdkImports    | 1261  |
| contractProbes        | 280   |
| issueFindings         | 291   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 36 ms       | 37 ms    | 30.8 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2440 ms     | 2459 ms  | 333.4 MB     | 305.1 MB      | 2781 ms      | 8.1 MB     | 290/290         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2544 ms     | 2584 ms  | 329.1 MB     | 300 MB        | 2880 ms      | 0.3 MB     | 302/302         | 0          |
| contract-capture       | Contract capture inventory                      | 2569 ms     | 2590 ms  | 330 MB       | 301.7 MB      | 2890 ms      | 1.3 MB     | 307/307         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2554 ms     | 2592 ms  | 334.6 MB     | 306.3 MB      | 2882 ms      | 0.7 MB     | 305/305         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2558 ms     | 2572 ms  | 337.6 MB     | 309.3 MB      | 2896 ms      | 2.3 MB     | 306/306         | 0          |
| workspace-plan         | Workspace execution plan                        | 2602 ms     | 2607 ms  | 342.7 MB     | 314.1 MB      | 2943 ms      | 2.2 MB     | 308/308         | 0          |
| platform-probes        | Platform and loader probes                      | 2605 ms     | 2625 ms  | 339 MB       | 310.8 MB      | 2891 ms      | 2.5 MB     | 309/309         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 411 ms      | 421 ms   | 60.6 MB      | 32.3 MB       | 201 ms       | 1.5 MB     | 48/48           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 36 ms    | 37 ms    | 30.8 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2440 ms  | 2459 ms  | 333.4 MB     | 2781 ms      | 290/290         | fixture-inspection     |
| target-registry  | 1        | 2544 ms  | 2584 ms  | 329.1 MB     | 2880 ms      | 302/302         | compat-report-registry |
| contract-capture | 1        | 2569 ms  | 2590 ms  | 330 MB       | 2890 ms      | 307/307         | contract-capture       |
| synthetic-probes | 1        | 2554 ms  | 2592 ms  | 334.6 MB     | 2882 ms      | 305/305         | synthetic-probe-plan   |
| cold-import      | 1        | 2558 ms  | 2572 ms  | 337.6 MB     | 2896 ms      | 306/306         | cold-import-readiness  |
| workspace-plan   | 1        | 2602 ms  | 2607 ms  | 342.7 MB     | 2943 ms      | 308/308         | workspace-plan         |
| platform-probes  | 1        | 2605 ms  | 2625 ms  | 339 MB       | 2891 ms      | 309/309         | platform-probes        |
| import-loop      | 1        | 411 ms   | 421 ms   | 60.6 MB      | 201 ms       | 48/48           | import-loop-profile    |
