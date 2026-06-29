# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2591 ms            |
| Command P95 wall time  | 2660 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 2210               |
| CPU samples            | 2210               |
| Max peak RSS           | 342.8 MB           |
| Max RSS delta          | 314.5 MB           |
| Max CPU estimate       | 2997 ms            |
| Max harness heap delta | 8.3 MB             |

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
| node-boot              | Node boot                                       | 35 ms       | 37 ms    | 29.6 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2470 ms     | 2486 ms  | 334.8 MB     | 305.4 MB      | 2832 ms      | 8.3 MB     | 294/294         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2580 ms     | 2621 ms  | 334.9 MB     | 306.6 MB      | 2959 ms      | 0 MB       | 306/306         | 0          |
| contract-capture       | Contract capture inventory                      | 2597 ms     | 2606 ms  | 333.5 MB     | 305.2 MB      | 2911 ms      | 1 MB       | 310/310         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2591 ms     | 2610 ms  | 335.2 MB     | 306.5 MB      | 2882 ms      | 2.2 MB     | 309/309         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2608 ms     | 2615 ms  | 342.4 MB     | 314.1 MB      | 2944 ms      | 2.6 MB     | 311/311         | 0          |
| workspace-plan         | Workspace execution plan                        | 2631 ms     | 2633 ms  | 342.8 MB     | 314.5 MB      | 2997 ms      | -0.5 MB    | 312/312         | 0          |
| platform-probes        | Platform and loader probes                      | 2660 ms     | 2663 ms  | 339.5 MB     | 311.3 MB      | 2977 ms      | 2.4 MB     | 317/317         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 409 ms      | 411 ms   | 60.5 MB      | 32.3 MB       | 198 ms       | 1.4 MB     | 48/48           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 35 ms    | 37 ms    | 29.6 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2470 ms  | 2486 ms  | 334.8 MB     | 2832 ms      | 294/294         | fixture-inspection     |
| target-registry  | 1        | 2580 ms  | 2621 ms  | 334.9 MB     | 2959 ms      | 306/306         | compat-report-registry |
| contract-capture | 1        | 2597 ms  | 2606 ms  | 333.5 MB     | 2911 ms      | 310/310         | contract-capture       |
| synthetic-probes | 1        | 2591 ms  | 2610 ms  | 335.2 MB     | 2882 ms      | 309/309         | synthetic-probe-plan   |
| cold-import      | 1        | 2608 ms  | 2615 ms  | 342.4 MB     | 2944 ms      | 311/311         | cold-import-readiness  |
| workspace-plan   | 1        | 2631 ms  | 2633 ms  | 342.8 MB     | 2997 ms      | 312/312         | workspace-plan         |
| platform-probes  | 1        | 2660 ms  | 2663 ms  | 339.5 MB     | 2977 ms      | 317/317         | platform-probes        |
| import-loop      | 1        | 409 ms   | 411 ms   | 60.5 MB      | 198 ms       | 48/48           | import-loop-profile    |
