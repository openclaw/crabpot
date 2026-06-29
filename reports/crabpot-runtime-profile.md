# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2581 ms            |
| Command P95 wall time  | 2696 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 2205               |
| CPU samples            | 2205               |
| Max peak RSS           | 344.1 MB           |
| Max RSS delta          | 315.8 MB           |
| Max CPU estimate       | 3075 ms            |
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
| sourceFiles           | 1993  |
| observedHooks         | 108   |
| observedRegistrations | 207   |
| observedSdkImports    | 1262  |
| contractProbes        | 284   |
| issueFindings         | 295   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 35 ms       | 36 ms    | 29.6 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2440 ms     | 2466 ms  | 333.9 MB     | 305.6 MB      | 2762 ms      | 8.1 MB     | 291/291         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2581 ms     | 2587 ms  | 331.7 MB     | 303.4 MB      | 2918 ms      | 0.6 MB     | 303/303         | 0          |
| contract-capture       | Contract capture inventory                      | 2580 ms     | 2588 ms  | 332.3 MB     | 304 MB        | 2877 ms      | 0.9 MB     | 307/307         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2584 ms     | 2608 ms  | 335.9 MB     | 307.6 MB      | 2934 ms      | 2.4 MB     | 308/308         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2599 ms     | 2607 ms  | 343.1 MB     | 314.2 MB      | 2937 ms      | 2.4 MB     | 308/308         | 0          |
| workspace-plan         | Workspace execution plan                        | 2629 ms     | 2632 ms  | 344.1 MB     | 315.8 MB      | 2980 ms      | 2.4 MB     | 314/314         | 0          |
| platform-probes        | Platform and loader probes                      | 2696 ms     | 2768 ms  | 339.7 MB     | 311.4 MB      | 3075 ms      | 2.9 MB     | 323/323         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 408 ms      | 420 ms   | 60.5 MB      | 32.3 MB       | 201 ms       | 1.4 MB     | 48/48           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 35 ms    | 36 ms    | 29.6 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2440 ms  | 2466 ms  | 333.9 MB     | 2762 ms      | 291/291         | fixture-inspection     |
| target-registry  | 1        | 2581 ms  | 2587 ms  | 331.7 MB     | 2918 ms      | 303/303         | compat-report-registry |
| contract-capture | 1        | 2580 ms  | 2588 ms  | 332.3 MB     | 2877 ms      | 307/307         | contract-capture       |
| synthetic-probes | 1        | 2584 ms  | 2608 ms  | 335.9 MB     | 2934 ms      | 308/308         | synthetic-probe-plan   |
| cold-import      | 1        | 2599 ms  | 2607 ms  | 343.1 MB     | 2937 ms      | 308/308         | cold-import-readiness  |
| workspace-plan   | 1        | 2629 ms  | 2632 ms  | 344.1 MB     | 2980 ms      | 314/314         | workspace-plan         |
| platform-probes  | 1        | 2696 ms  | 2768 ms  | 339.7 MB     | 3075 ms      | 323/323         | platform-probes        |
| import-loop      | 1        | 408 ms   | 420 ms   | 60.5 MB      | 201 ms       | 48/48           | import-loop-profile    |
