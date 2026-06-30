# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2615 ms            |
| Command P95 wall time  | 2675 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 2226               |
| CPU samples            | 2226               |
| Max peak RSS           | 342.7 MB           |
| Max RSS delta          | 314.4 MB           |
| Max CPU estimate       | 3039 ms            |
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
| node-boot              | Node boot                                       | 37 ms       | 38 ms    | 29.7 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2463 ms     | 2482 ms  | 333.6 MB     | 305.1 MB      | 2829 ms      | 8.3 MB     | 293/293         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2615 ms     | 2641 ms  | 338.3 MB     | 309.5 MB      | 2974 ms      | 0.7 MB     | 307/307         | 0          |
| contract-capture       | Contract capture inventory                      | 2606 ms     | 2634 ms  | 331.7 MB     | 303.4 MB      | 2945 ms      | 1 MB       | 310/310         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2629 ms     | 2636 ms  | 336.7 MB     | 308.1 MB      | 2981 ms      | 2.4 MB     | 313/313         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2630 ms     | 2630 ms  | 341.7 MB     | 313.4 MB      | 2943 ms      | 2.5 MB     | 312/312         | 0          |
| workspace-plan         | Workspace execution plan                        | 2675 ms     | 2690 ms  | 342.7 MB     | 314.4 MB      | 3036 ms      | -0.3 MB    | 318/318         | 0          |
| platform-probes        | Platform and loader probes                      | 2674 ms     | 2709 ms  | 342.5 MB     | 314.3 MB      | 3039 ms      | 2.5 MB     | 320/320         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 422 ms      | 435 ms   | 60.6 MB      | 32.3 MB       | 208 ms       | 1.5 MB     | 50/50           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 37 ms    | 38 ms    | 29.7 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2463 ms  | 2482 ms  | 333.6 MB     | 2829 ms      | 293/293         | fixture-inspection     |
| target-registry  | 1        | 2615 ms  | 2641 ms  | 338.3 MB     | 2974 ms      | 307/307         | compat-report-registry |
| contract-capture | 1        | 2606 ms  | 2634 ms  | 331.7 MB     | 2945 ms      | 310/310         | contract-capture       |
| synthetic-probes | 1        | 2629 ms  | 2636 ms  | 336.7 MB     | 2981 ms      | 313/313         | synthetic-probe-plan   |
| cold-import      | 1        | 2630 ms  | 2630 ms  | 341.7 MB     | 2943 ms      | 312/312         | cold-import-readiness  |
| workspace-plan   | 1        | 2675 ms  | 2690 ms  | 342.7 MB     | 3036 ms      | 318/318         | workspace-plan         |
| platform-probes  | 1        | 2674 ms  | 2709 ms  | 342.5 MB     | 3039 ms      | 320/320         | platform-probes        |
| import-loop      | 1        | 422 ms   | 435 ms   | 60.6 MB      | 208 ms       | 50/50           | import-loop-profile    |
