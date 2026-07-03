# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2654 ms            |
| Command P95 wall time  | 2695 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 2251               |
| CPU samples            | 2251               |
| Max peak RSS           | 345.4 MB           |
| Max RSS delta          | 317.1 MB           |
| Max CPU estimate       | 3040 ms            |
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
| sourceFiles           | 2007  |
| observedHooks         | 109   |
| observedRegistrations | 208   |
| observedSdkImports    | 1267  |
| contractProbes        | 279   |
| issueFindings         | 288   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 36 ms       | 36 ms    | 30.4 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2493 ms     | 2500 ms  | 332.9 MB     | 304.7 MB      | 2843 ms      | 8.3 MB     | 295/295         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2644 ms     | 2653 ms  | 335.6 MB     | 306.1 MB      | 3004 ms      | 0.1 MB     | 313/313         | 0          |
| contract-capture       | Contract capture inventory                      | 2657 ms     | 2662 ms  | 334.4 MB     | 306.2 MB      | 2986 ms      | 1.7 MB     | 317/317         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2678 ms     | 2680 ms  | 337.1 MB     | 307.5 MB      | 3010 ms      | 1 MB       | 319/319         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2654 ms     | 2655 ms  | 344.5 MB     | 314.9 MB      | 2984 ms      | 2.5 MB     | 314/314         | 0          |
| workspace-plan         | Workspace execution plan                        | 2668 ms     | 2676 ms  | 341.6 MB     | 313.4 MB      | 3040 ms      | 2.6 MB     | 318/318         | 0          |
| platform-probes        | Platform and loader probes                      | 2695 ms     | 2733 ms  | 345.4 MB     | 317.1 MB      | 3029 ms      | 2.7 MB     | 323/323         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 420 ms      | 421 ms   | 61.1 MB      | 32.4 MB       | 210 ms       | 1.5 MB     | 49/49           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 36 ms    | 36 ms    | 30.4 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2493 ms  | 2500 ms  | 332.9 MB     | 2843 ms      | 295/295         | fixture-inspection     |
| target-registry  | 1        | 2644 ms  | 2653 ms  | 335.6 MB     | 3004 ms      | 313/313         | compat-report-registry |
| contract-capture | 1        | 2657 ms  | 2662 ms  | 334.4 MB     | 2986 ms      | 317/317         | contract-capture       |
| synthetic-probes | 1        | 2678 ms  | 2680 ms  | 337.1 MB     | 3010 ms      | 319/319         | synthetic-probe-plan   |
| cold-import      | 1        | 2654 ms  | 2655 ms  | 344.5 MB     | 2984 ms      | 314/314         | cold-import-readiness  |
| workspace-plan   | 1        | 2668 ms  | 2676 ms  | 341.6 MB     | 3040 ms      | 318/318         | workspace-plan         |
| platform-probes  | 1        | 2695 ms  | 2733 ms  | 345.4 MB     | 3029 ms      | 323/323         | platform-probes        |
| import-loop      | 1        | 420 ms   | 421 ms   | 61.1 MB      | 210 ms       | 49/49           | import-loop-profile    |
