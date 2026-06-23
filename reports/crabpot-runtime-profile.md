# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2654 ms            |
| Command P95 wall time  | 2682 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 2261               |
| CPU samples            | 2261               |
| Max peak RSS           | 342 MB             |
| Max RSS delta          | 313.6 MB           |
| Max CPU estimate       | 3087 ms            |
| Max harness heap delta | 8.9 MB             |

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
| node-boot              | Node boot                                       | 37 ms       | 38 ms    | 31.1 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2521 ms     | 2635 ms  | 334.8 MB     | 305 MB        | 2949 ms      | 8.9 MB     | 305/305         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2614 ms     | 2660 ms  | 335.8 MB     | 307.3 MB      | 2979 ms      | -3.3 MB    | 312/312         | 0          |
| contract-capture       | Contract capture inventory                      | 2677 ms     | 2685 ms  | 329.4 MB     | 300.9 MB      | 2977 ms      | 8.7 MB     | 315/315         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2670 ms     | 2688 ms  | 334.9 MB     | 306.5 MB      | 3022 ms      | 1.2 MB     | 319/319         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2654 ms     | 2673 ms  | 338.2 MB     | 309.8 MB      | 2991 ms      | 1.1 MB     | 315/315         | 0          |
| workspace-plan         | Workspace execution plan                        | 2681 ms     | 2694 ms  | 342 MB       | 313.6 MB      | 3025 ms      | 2.8 MB     | 319/319         | 0          |
| platform-probes        | Platform and loader probes                      | 2682 ms     | 2759 ms  | 339.2 MB     | 310.8 MB      | 3087 ms      | -0.2 MB    | 319/319         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 471 ms      | 476 ms   | 60.7 MB      | 32.3 MB       | 230 ms       | 1.6 MB     | 54/54           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 37 ms    | 38 ms    | 31.1 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2521 ms  | 2635 ms  | 334.8 MB     | 2949 ms      | 305/305         | fixture-inspection     |
| target-registry  | 1        | 2614 ms  | 2660 ms  | 335.8 MB     | 2979 ms      | 312/312         | compat-report-registry |
| contract-capture | 1        | 2677 ms  | 2685 ms  | 329.4 MB     | 2977 ms      | 315/315         | contract-capture       |
| synthetic-probes | 1        | 2670 ms  | 2688 ms  | 334.9 MB     | 3022 ms      | 319/319         | synthetic-probe-plan   |
| cold-import      | 1        | 2654 ms  | 2673 ms  | 338.2 MB     | 2991 ms      | 315/315         | cold-import-readiness  |
| workspace-plan   | 1        | 2681 ms  | 2694 ms  | 342 MB       | 3025 ms      | 319/319         | workspace-plan         |
| platform-probes  | 1        | 2682 ms  | 2759 ms  | 339.2 MB     | 3087 ms      | 319/319         | platform-probes        |
| import-loop      | 1        | 471 ms   | 476 ms   | 60.7 MB      | 230 ms       | 54/54           | import-loop-profile    |
