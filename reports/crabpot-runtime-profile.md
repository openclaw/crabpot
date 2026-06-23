# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2563 ms            |
| Command P95 wall time  | 2608 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 2180               |
| CPU samples            | 2180               |
| Max peak RSS           | 342 MB             |
| Max RSS delta          | 313.6 MB           |
| Max CPU estimate       | 2946 ms            |
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
| node-boot              | Node boot                                       | 35 ms       | 35 ms    | 30.1 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2412 ms     | 2434 ms  | 328.4 MB     | 298.2 MB      | 2721 ms      | 8.2 MB     | 288/288         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2566 ms     | 2571 ms  | 333.9 MB     | 305.5 MB      | 2910 ms      | -1.6 MB    | 302/302         | 0          |
| contract-capture       | Contract capture inventory                      | 2562 ms     | 2565 ms  | 330.7 MB     | 302 MB        | 2881 ms      | 0.8 MB     | 304/304         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2576 ms     | 2588 ms  | 333.7 MB     | 303.9 MB      | 2885 ms      | 2.4 MB     | 306/306         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2563 ms     | 2581 ms  | 336.7 MB     | 308.3 MB      | 2912 ms      | 2.4 MB     | 305/305         | 0          |
| workspace-plan         | Workspace execution plan                        | 2605 ms     | 2613 ms  | 342 MB       | 313.6 MB      | 2946 ms      | -0.5 MB    | 312/312         | 0          |
| platform-probes        | Platform and loader probes                      | 2608 ms     | 2625 ms  | 337.9 MB     | 309.4 MB      | 2921 ms      | 2.5 MB     | 311/311         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 420 ms      | 428 ms   | 60.6 MB      | 32.2 MB       | 208 ms       | 1.5 MB     | 49/49           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 35 ms    | 35 ms    | 30.1 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2412 ms  | 2434 ms  | 328.4 MB     | 2721 ms      | 288/288         | fixture-inspection     |
| target-registry  | 1        | 2566 ms  | 2571 ms  | 333.9 MB     | 2910 ms      | 302/302         | compat-report-registry |
| contract-capture | 1        | 2562 ms  | 2565 ms  | 330.7 MB     | 2881 ms      | 304/304         | contract-capture       |
| synthetic-probes | 1        | 2576 ms  | 2588 ms  | 333.7 MB     | 2885 ms      | 306/306         | synthetic-probe-plan   |
| cold-import      | 1        | 2563 ms  | 2581 ms  | 336.7 MB     | 2912 ms      | 305/305         | cold-import-readiness  |
| workspace-plan   | 1        | 2605 ms  | 2613 ms  | 342 MB       | 2946 ms      | 312/312         | workspace-plan         |
| platform-probes  | 1        | 2608 ms  | 2625 ms  | 337.9 MB     | 2921 ms      | 311/311         | platform-probes        |
| import-loop      | 1        | 420 ms   | 428 ms   | 60.6 MB      | 208 ms       | 49/49           | import-loop-profile    |
