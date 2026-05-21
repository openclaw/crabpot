# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2482 ms            |
| Command P95 wall time  | 2566 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 2111               |
| CPU samples            | 2111               |
| Max peak RSS           | 480.6 MB           |
| Max RSS delta          | 451.5 MB           |
| Max CPU estimate       | 2851 ms            |
| Max harness heap delta | 8.1 MB             |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 61         |
| hookNames              | 37         |
| apiRegistrars          | 53         |
| capturedRegistrars     | 28         |
| sdkExports             | 312        |
| manifestFields         | 41         |
| manifestContractFields | 18         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 60    |
| sourceFiles           | 1758  |
| observedHooks         | 106   |
| observedRegistrations | 199   |
| observedSdkImports    | 1207  |
| contractProbes        | 276   |
| issueFindings         | 280   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 41 ms       | 42 ms    | 31.5 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2344 ms     | 2354 ms  | 446 MB       | 416.8 MB      | 2582 ms      | 7.7 MB     | 274/274         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2504 ms     | 2528 ms  | 464.9 MB     | 434.6 MB      | 2781 ms      | 8.1 MB     | 295/295         | 0          |
| contract-capture       | Contract capture inventory                      | 2563 ms     | 2596 ms  | 448.2 MB     | 417.5 MB      | 2832 ms      | -3.7 MB    | 296/296         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2482 ms     | 2568 ms  | 470.6 MB     | 440.8 MB      | 2761 ms      | 0.5 MB     | 297/297         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2461 ms     | 2495 ms  | 473 MB       | 444 MB        | 2782 ms      | 0.4 MB     | 293/293         | 0          |
| workspace-plan         | Workspace execution plan                        | 2510 ms     | 2573 ms  | 455 MB       | 425.7 MB      | 2851 ms      | 2 MB       | 300/300         | 0          |
| platform-probes        | Platform and loader probes                      | 2566 ms     | 2569 ms  | 480.6 MB     | 451.5 MB      | 2803 ms      | 2.2 MB     | 303/303         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 432 ms      | 435 ms   | 60.2 MB      | 31.8 MB       | 208 ms       | 1.4 MB     | 50/50           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 41 ms    | 42 ms    | 31.5 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2344 ms  | 2354 ms  | 446 MB       | 2582 ms      | 274/274         | fixture-inspection     |
| target-registry  | 1        | 2504 ms  | 2528 ms  | 464.9 MB     | 2781 ms      | 295/295         | compat-report-registry |
| contract-capture | 1        | 2563 ms  | 2596 ms  | 448.2 MB     | 2832 ms      | 296/296         | contract-capture       |
| synthetic-probes | 1        | 2482 ms  | 2568 ms  | 470.6 MB     | 2761 ms      | 297/297         | synthetic-probe-plan   |
| cold-import      | 1        | 2461 ms  | 2495 ms  | 473 MB       | 2782 ms      | 293/293         | cold-import-readiness  |
| workspace-plan   | 1        | 2510 ms  | 2573 ms  | 455 MB       | 2851 ms      | 300/300         | workspace-plan         |
| platform-probes  | 1        | 2566 ms  | 2569 ms  | 480.6 MB     | 2803 ms      | 303/303         | platform-probes        |
| import-loop      | 1        | 432 ms   | 435 ms   | 60.2 MB      | 208 ms       | 50/50           | import-loop-profile    |
