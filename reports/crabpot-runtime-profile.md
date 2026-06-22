# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2490 ms            |
| Command P95 wall time  | 2559 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 2131               |
| CPU samples            | 2131               |
| Max peak RSS           | 343.5 MB           |
| Max RSS delta          | 314.2 MB           |
| Max CPU estimate       | 2844 ms            |
| Max harness heap delta | 8.7 MB             |

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
| sourceFiles           | 2002  |
| observedHooks         | 108   |
| observedRegistrations | 207   |
| observedSdkImports    | 1264  |
| contractProbes        | 280   |
| issueFindings         | 291   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 34 ms       | 34 ms    | 30.2 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2354 ms     | 2391 ms  | 328.1 MB     | 298.6 MB      | 2680 ms      | 8.7 MB     | 282/282         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2501 ms     | 2507 ms  | 334.1 MB     | 303.9 MB      | 2806 ms      | 8.3 MB     | 296/296         | 0          |
| contract-capture       | Contract capture inventory                      | 2492 ms     | 2500 ms  | 329.7 MB     | 301.3 MB      | 2773 ms      | 0.8 MB     | 297/297         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2490 ms     | 2531 ms  | 329.5 MB     | 300.5 MB      | 2820 ms      | 0.9 MB     | 298/298         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2487 ms     | 2521 ms  | 338.2 MB     | 309.8 MB      | 2801 ms      | 2 MB       | 297/297         | 0          |
| workspace-plan         | Workspace execution plan                        | 2557 ms     | 2562 ms  | 343.5 MB     | 314.2 MB      | 2844 ms      | 2.4 MB     | 305/305         | 0          |
| platform-probes        | Platform and loader probes                      | 2559 ms     | 2575 ms  | 337.1 MB     | 308.4 MB      | 2839 ms      | 2.4 MB     | 305/305         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 402 ms      | 407 ms   | 60.6 MB      | 31.6 MB       | 187 ms       | 1.5 MB     | 48/48           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 34 ms    | 34 ms    | 30.2 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2354 ms  | 2391 ms  | 328.1 MB     | 2680 ms      | 282/282         | fixture-inspection     |
| target-registry  | 1        | 2501 ms  | 2507 ms  | 334.1 MB     | 2806 ms      | 296/296         | compat-report-registry |
| contract-capture | 1        | 2492 ms  | 2500 ms  | 329.7 MB     | 2773 ms      | 297/297         | contract-capture       |
| synthetic-probes | 1        | 2490 ms  | 2531 ms  | 329.5 MB     | 2820 ms      | 298/298         | synthetic-probe-plan   |
| cold-import      | 1        | 2487 ms  | 2521 ms  | 338.2 MB     | 2801 ms      | 297/297         | cold-import-readiness  |
| workspace-plan   | 1        | 2557 ms  | 2562 ms  | 343.5 MB     | 2844 ms      | 305/305         | workspace-plan         |
| platform-probes  | 1        | 2559 ms  | 2575 ms  | 337.1 MB     | 2839 ms      | 305/305         | platform-probes        |
| import-loop      | 1        | 402 ms   | 407 ms   | 60.6 MB      | 187 ms       | 48/48           | import-loop-profile    |
