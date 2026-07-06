# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2584 ms            |
| Command P95 wall time  | 2687 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 2214               |
| CPU samples            | 2214               |
| Max peak RSS           | 347 MB             |
| Max RSS delta          | 318.3 MB           |
| Max CPU estimate       | 2999 ms            |
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
| sdkExports             | 322        |
| manifestFields         | 43         |
| manifestContractFields | 21         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 60    |
| sourceFiles           | 2011  |
| observedHooks         | 108   |
| observedRegistrations | 207   |
| observedSdkImports    | 1267  |
| contractProbes        | 275   |
| issueFindings         | 286   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 35 ms       | 37 ms    | 30.2 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2447 ms     | 2461 ms  | 334.1 MB     | 305.9 MB      | 2797 ms      | 8.3 MB     | 291/291         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2584 ms     | 2595 ms  | 335.3 MB     | 307.1 MB      | 2920 ms      | -0.4 MB    | 305/305         | 0          |
| contract-capture       | Contract capture inventory                      | 2584 ms     | 2606 ms  | 334.7 MB     | 306.5 MB      | 2904 ms      | 1.1 MB     | 309/309         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2614 ms     | 2633 ms  | 334.2 MB     | 305.8 MB      | 2936 ms      | 2.7 MB     | 311/311         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2610 ms     | 2617 ms  | 340.9 MB     | 312.7 MB      | 2959 ms      | 2.6 MB     | 310/310         | 0          |
| workspace-plan         | Workspace execution plan                        | 2634 ms     | 2646 ms  | 343.6 MB     | 315.4 MB      | 2995 ms      | -0.3 MB    | 314/314         | 0          |
| platform-probes        | Platform and loader probes                      | 2687 ms     | 2709 ms  | 347 MB       | 318.3 MB      | 2999 ms      | 2.6 MB     | 321/321         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 427 ms      | 436 ms   | 60.6 MB      | 32.4 MB       | 199 ms       | 1.5 MB     | 50/50           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 35 ms    | 37 ms    | 30.2 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2447 ms  | 2461 ms  | 334.1 MB     | 2797 ms      | 291/291         | fixture-inspection     |
| target-registry  | 1        | 2584 ms  | 2595 ms  | 335.3 MB     | 2920 ms      | 305/305         | compat-report-registry |
| contract-capture | 1        | 2584 ms  | 2606 ms  | 334.7 MB     | 2904 ms      | 309/309         | contract-capture       |
| synthetic-probes | 1        | 2614 ms  | 2633 ms  | 334.2 MB     | 2936 ms      | 311/311         | synthetic-probe-plan   |
| cold-import      | 1        | 2610 ms  | 2617 ms  | 340.9 MB     | 2959 ms      | 310/310         | cold-import-readiness  |
| workspace-plan   | 1        | 2634 ms  | 2646 ms  | 343.6 MB     | 2995 ms      | 314/314         | workspace-plan         |
| platform-probes  | 1        | 2687 ms  | 2709 ms  | 347 MB       | 2999 ms      | 321/321         | platform-probes        |
| import-loop      | 1        | 427 ms   | 436 ms   | 60.6 MB      | 199 ms       | 50/50           | import-loop-profile    |
