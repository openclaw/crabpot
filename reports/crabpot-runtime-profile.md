# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2363 ms            |
| Command P95 wall time  | 2428 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 2009               |
| CPU samples            | 2009               |
| Max peak RSS           | 476.9 MB           |
| Max RSS delta          | 448.5 MB           |
| Max CPU estimate       | 2661 ms            |
| Max harness heap delta | 7.7 MB             |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 61         |
| hookNames              | 37         |
| apiRegistrars          | 54         |
| capturedRegistrars     | 29         |
| sdkExports             | 314        |
| manifestFields         | 41         |
| manifestContractFields | 19         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 60    |
| sourceFiles           | 1773  |
| observedHooks         | 106   |
| observedRegistrations | 199   |
| observedSdkImports    | 1223  |
| contractProbes        | 274   |
| issueFindings         | 278   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 35 ms       | 36 ms    | 31.9 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2262 ms     | 2262 ms  | 465.5 MB     | 433.9 MB      | 2509 ms      | 7.7 MB     | 265/265         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2363 ms     | 2363 ms  | 468.1 MB     | 438.2 MB      | 2635 ms      | 7.6 MB     | 279/279         | 0          |
| contract-capture       | Contract capture inventory                      | 2373 ms     | 2417 ms  | 468 MB       | 437.6 MB      | 2639 ms      | 7.7 MB     | 280/280         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2362 ms     | 2363 ms  | 468 MB       | 439.5 MB      | 2566 ms      | 0.7 MB     | 282/282         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2371 ms     | 2376 ms  | 468.2 MB     | 438.9 MB      | 2629 ms      | 1.4 MB     | 282/282         | 0          |
| workspace-plan         | Workspace execution plan                        | 2386 ms     | 2410 ms  | 475.7 MB     | 446.4 MB      | 2661 ms      | 1.8 MB     | 285/285         | 0          |
| platform-probes        | Platform and loader probes                      | 2428 ms     | 2433 ms  | 476.9 MB     | 448.5 MB      | 2650 ms      | 1.8 MB     | 288/288         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 375 ms      | 378 ms   | 60.2 MB      | 31.7 MB       | 181 ms       | 1.3 MB     | 45/45           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 35 ms    | 36 ms    | 31.9 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2262 ms  | 2262 ms  | 465.5 MB     | 2509 ms      | 265/265         | fixture-inspection     |
| target-registry  | 1        | 2363 ms  | 2363 ms  | 468.1 MB     | 2635 ms      | 279/279         | compat-report-registry |
| contract-capture | 1        | 2373 ms  | 2417 ms  | 468 MB       | 2639 ms      | 280/280         | contract-capture       |
| synthetic-probes | 1        | 2362 ms  | 2363 ms  | 468 MB       | 2566 ms      | 282/282         | synthetic-probe-plan   |
| cold-import      | 1        | 2371 ms  | 2376 ms  | 468.2 MB     | 2629 ms      | 282/282         | cold-import-readiness  |
| workspace-plan   | 1        | 2386 ms  | 2410 ms  | 475.7 MB     | 2661 ms      | 285/285         | workspace-plan         |
| platform-probes  | 1        | 2428 ms  | 2433 ms  | 476.9 MB     | 2650 ms      | 288/288         | platform-probes        |
| import-loop      | 1        | 375 ms   | 378 ms   | 60.2 MB      | 181 ms       | 45/45           | import-loop-profile    |
