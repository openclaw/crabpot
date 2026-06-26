# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2522 ms            |
| Command P95 wall time  | 2550 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 2142               |
| CPU samples            | 2142               |
| Max peak RSS           | 342.8 MB           |
| Max RSS delta          | 314.6 MB           |
| Max CPU estimate       | 2900 ms            |
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
| observedSdkImports    | 1261  |
| contractProbes        | 280   |
| issueFindings         | 291   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 34 ms       | 34 ms    | 29.9 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2403 ms     | 2429 ms  | 333.5 MB     | 303.7 MB      | 2720 ms      | 8.2 MB     | 286/286         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2522 ms     | 2560 ms  | 329.8 MB     | 301.6 MB      | 2860 ms      | -1.1 MB    | 300/300         | 0          |
| contract-capture       | Contract capture inventory                      | 2525 ms     | 2555 ms  | 330.5 MB     | 301.6 MB      | 2815 ms      | 0.7 MB     | 301/301         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2514 ms     | 2523 ms  | 335.6 MB     | 306.2 MB      | 2823 ms      | 2 MB       | 299/299         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2524 ms     | 2527 ms  | 339.4 MB     | 311.1 MB      | 2856 ms      | 2.2 MB     | 299/299         | 0          |
| workspace-plan         | Workspace execution plan                        | 2550 ms     | 2580 ms  | 342.8 MB     | 314.6 MB      | 2900 ms      | 2.2 MB     | 304/304         | 0          |
| platform-probes        | Platform and loader probes                      | 2538 ms     | 2554 ms  | 338.5 MB     | 309.7 MB      | 2837 ms      | 1.4 MB     | 303/303         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 395 ms      | 409 ms   | 60.6 MB      | 32.3 MB       | 186 ms       | 1.5 MB     | 47/47           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 34 ms    | 34 ms    | 29.9 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2403 ms  | 2429 ms  | 333.5 MB     | 2720 ms      | 286/286         | fixture-inspection     |
| target-registry  | 1        | 2522 ms  | 2560 ms  | 329.8 MB     | 2860 ms      | 300/300         | compat-report-registry |
| contract-capture | 1        | 2525 ms  | 2555 ms  | 330.5 MB     | 2815 ms      | 301/301         | contract-capture       |
| synthetic-probes | 1        | 2514 ms  | 2523 ms  | 335.6 MB     | 2823 ms      | 299/299         | synthetic-probe-plan   |
| cold-import      | 1        | 2524 ms  | 2527 ms  | 339.4 MB     | 2856 ms      | 299/299         | cold-import-readiness  |
| workspace-plan   | 1        | 2550 ms  | 2580 ms  | 342.8 MB     | 2900 ms      | 304/304         | workspace-plan         |
| platform-probes  | 1        | 2538 ms  | 2554 ms  | 338.5 MB     | 2837 ms      | 303/303         | platform-probes        |
| import-loop      | 1        | 395 ms   | 409 ms   | 60.6 MB      | 186 ms       | 47/47           | import-loop-profile    |
