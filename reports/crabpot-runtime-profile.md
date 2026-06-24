# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2559 ms            |
| Command P95 wall time  | 2655 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 2200               |
| CPU samples            | 2200               |
| Max peak RSS           | 343.9 MB           |
| Max RSS delta          | 314.5 MB           |
| Max CPU estimate       | 2979 ms            |
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
| sourceFiles           | 1985  |
| observedHooks         | 108   |
| observedRegistrations | 207   |
| observedSdkImports    | 1261  |
| contractProbes        | 280   |
| issueFindings         | 291   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 34 ms       | 35 ms    | 31.4 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2459 ms     | 2460 ms  | 333.2 MB     | 303.7 MB      | 2772 ms      | 8.1 MB     | 290/290         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2558 ms     | 2593 ms  | 330.5 MB     | 301.4 MB      | 2881 ms      | -0.3 MB    | 302/302         | 0          |
| contract-capture       | Contract capture inventory                      | 2588 ms     | 2610 ms  | 331.4 MB     | 303 MB        | 2889 ms      | 1.4 MB     | 308/308         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2559 ms     | 2569 ms  | 329.4 MB     | 300.9 MB      | 2859 ms      | 2.3 MB     | 305/305         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2618 ms     | 2629 ms  | 341.4 MB     | 311.6 MB      | 2963 ms      | 2.5 MB     | 312/312         | 0          |
| workspace-plan         | Workspace execution plan                        | 2635 ms     | 2643 ms  | 343.9 MB     | 314.5 MB      | 2979 ms      | 2.4 MB     | 312/312         | 0          |
| platform-probes        | Platform and loader probes                      | 2655 ms     | 2679 ms  | 338.4 MB     | 309.7 MB      | 2934 ms      | 2.4 MB     | 317/317         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 448 ms      | 454 ms   | 60.7 MB      | 31.4 MB       | 209 ms       | 1.6 MB     | 51/51           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 34 ms    | 35 ms    | 31.4 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2459 ms  | 2460 ms  | 333.2 MB     | 2772 ms      | 290/290         | fixture-inspection     |
| target-registry  | 1        | 2558 ms  | 2593 ms  | 330.5 MB     | 2881 ms      | 302/302         | compat-report-registry |
| contract-capture | 1        | 2588 ms  | 2610 ms  | 331.4 MB     | 2889 ms      | 308/308         | contract-capture       |
| synthetic-probes | 1        | 2559 ms  | 2569 ms  | 329.4 MB     | 2859 ms      | 305/305         | synthetic-probe-plan   |
| cold-import      | 1        | 2618 ms  | 2629 ms  | 341.4 MB     | 2963 ms      | 312/312         | cold-import-readiness  |
| workspace-plan   | 1        | 2635 ms  | 2643 ms  | 343.9 MB     | 2979 ms      | 312/312         | workspace-plan         |
| platform-probes  | 1        | 2655 ms  | 2679 ms  | 338.4 MB     | 2934 ms      | 317/317         | platform-probes        |
| import-loop      | 1        | 448 ms   | 454 ms   | 60.7 MB      | 209 ms       | 51/51           | import-loop-profile    |
