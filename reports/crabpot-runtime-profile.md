# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2553 ms            |
| Command P95 wall time  | 2627 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 2172               |
| CPU samples            | 2172               |
| Max peak RSS           | 343.4 MB           |
| Max RSS delta          | 315.2 MB           |
| Max CPU estimate       | 2964 ms            |
| Max harness heap delta | 8 MB               |

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
| sourceFiles           | 2006  |
| observedHooks         | 109   |
| observedRegistrations | 207   |
| observedSdkImports    | 1265  |
| contractProbes        | 279   |
| issueFindings         | 290   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 35 ms       | 35 ms    | 30.2 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2409 ms     | 2416 ms  | 333.8 MB     | 304.3 MB      | 2752 ms      | 8 MB       | 286/286         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2557 ms     | 2577 ms  | 334.3 MB     | 304.8 MB      | 2886 ms      | -1.5 MB    | 303/303         | 0          |
| contract-capture       | Contract capture inventory                      | 2554 ms     | 2586 ms  | 332 MB       | 303.7 MB      | 2899 ms      | 1 MB       | 306/306         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2553 ms     | 2559 ms  | 335.3 MB     | 306.4 MB      | 2858 ms      | 0.9 MB     | 304/304         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2535 ms     | 2559 ms  | 333.6 MB     | 305.4 MB      | 2887 ms      | 2.2 MB     | 304/304         | 0          |
| workspace-plan         | Workspace execution plan                        | 2573 ms     | 2581 ms  | 342 MB       | 313.8 MB      | 2881 ms      | 2.4 MB     | 306/306         | 0          |
| platform-probes        | Platform and loader probes                      | 2627 ms     | 2630 ms  | 343.4 MB     | 315.2 MB      | 2964 ms      | 2.5 MB     | 312/312         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 408 ms      | 408 ms   | 60.6 MB      | 32.4 MB       | 191 ms       | 1.4 MB     | 48/48           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 35 ms    | 35 ms    | 30.2 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2409 ms  | 2416 ms  | 333.8 MB     | 2752 ms      | 286/286         | fixture-inspection     |
| target-registry  | 1        | 2557 ms  | 2577 ms  | 334.3 MB     | 2886 ms      | 303/303         | compat-report-registry |
| contract-capture | 1        | 2554 ms  | 2586 ms  | 332 MB       | 2899 ms      | 306/306         | contract-capture       |
| synthetic-probes | 1        | 2553 ms  | 2559 ms  | 335.3 MB     | 2858 ms      | 304/304         | synthetic-probe-plan   |
| cold-import      | 1        | 2535 ms  | 2559 ms  | 333.6 MB     | 2887 ms      | 304/304         | cold-import-readiness  |
| workspace-plan   | 1        | 2573 ms  | 2581 ms  | 342 MB       | 2881 ms      | 306/306         | workspace-plan         |
| platform-probes  | 1        | 2627 ms  | 2630 ms  | 343.4 MB     | 2964 ms      | 312/312         | platform-probes        |
| import-loop      | 1        | 408 ms   | 408 ms   | 60.6 MB      | 191 ms       | 48/48           | import-loop-profile    |
