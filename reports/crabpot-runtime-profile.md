# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2604 ms            |
| Command P95 wall time  | 2661 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 2227               |
| CPU samples            | 2227               |
| Max peak RSS           | 343.2 MB           |
| Max RSS delta          | 314.8 MB           |
| Max CPU estimate       | 3038 ms            |
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
| sourceFiles           | 1989  |
| observedHooks         | 108   |
| observedRegistrations | 207   |
| observedSdkImports    | 1261  |
| contractProbes        | 280   |
| issueFindings         | 291   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 39 ms       | 40 ms    | 30 MB        | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2486 ms     | 2512 ms  | 333.5 MB     | 305.1 MB      | 2829 ms      | 8.3 MB     | 296/296         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2599 ms     | 2654 ms  | 334.6 MB     | 304.8 MB      | 2943 ms      | 0.2 MB     | 310/310         | 0          |
| contract-capture       | Contract capture inventory                      | 2606 ms     | 2636 ms  | 334.5 MB     | 306.1 MB      | 2942 ms      | 1 MB       | 310/310         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2604 ms     | 2631 ms  | 331 MB       | 302.6 MB      | 2955 ms      | 2.5 MB     | 311/311         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2618 ms     | 2631 ms  | 341 MB       | 312.6 MB      | 2963 ms      | 2.4 MB     | 311/311         | 0          |
| workspace-plan         | Workspace execution plan                        | 2661 ms     | 2681 ms  | 343.2 MB     | 314.8 MB      | 3038 ms      | 2.4 MB     | 317/317         | 0          |
| platform-probes        | Platform and loader probes                      | 2641 ms     | 2683 ms  | 338 MB       | 309.5 MB      | 2967 ms      | 2.5 MB     | 316/316         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 460 ms      | 470 ms   | 60.6 MB      | 32.2 MB       | 211 ms       | 1.6 MB     | 53/53           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 39 ms    | 40 ms    | 30 MB        | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2486 ms  | 2512 ms  | 333.5 MB     | 2829 ms      | 296/296         | fixture-inspection     |
| target-registry  | 1        | 2599 ms  | 2654 ms  | 334.6 MB     | 2943 ms      | 310/310         | compat-report-registry |
| contract-capture | 1        | 2606 ms  | 2636 ms  | 334.5 MB     | 2942 ms      | 310/310         | contract-capture       |
| synthetic-probes | 1        | 2604 ms  | 2631 ms  | 331 MB       | 2955 ms      | 311/311         | synthetic-probe-plan   |
| cold-import      | 1        | 2618 ms  | 2631 ms  | 341 MB       | 2963 ms      | 311/311         | cold-import-readiness  |
| workspace-plan   | 1        | 2661 ms  | 2681 ms  | 343.2 MB     | 3038 ms      | 317/317         | workspace-plan         |
| platform-probes  | 1        | 2641 ms  | 2683 ms  | 338 MB       | 2967 ms      | 316/316         | platform-probes        |
| import-loop      | 1        | 460 ms   | 470 ms   | 60.6 MB      | 211 ms       | 53/53           | import-loop-profile    |
