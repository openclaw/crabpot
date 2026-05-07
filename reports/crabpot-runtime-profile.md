# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2337 ms            |
| Command P95 wall time  | 2391 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1993               |
| CPU samples            | 1993               |
| Max peak RSS           | 455.4 MB           |
| Max RSS delta          | 425.7 MB           |
| Max CPU estimate       | 2657 ms            |
| Max harness heap delta | 7.9 MB             |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 60         |
| hookNames              | 35         |
| apiRegistrars          | 49         |
| capturedRegistrars     | 26         |
| sdkExports             | 296        |
| manifestFields         | 40         |
| manifestContractFields | 17         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 57    |
| sourceFiles           | 1834  |
| observedHooks         | 97    |
| observedRegistrations | 194   |
| observedSdkImports    | 1162  |
| contractProbes        | 277   |
| issueFindings         | 281   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 34 ms       | 36 ms    | 32.9 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2213 ms     | 2236 ms  | 445.9 MB     | 414.1 MB      | 2430 ms      | 7.9 MB     | 262/262         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2311 ms     | 2317 ms  | 446.9 MB     | 418.2 MB      | 2531 ms      | 7.5 MB     | 274/274         | 0          |
| contract-capture       | Contract capture inventory                      | 2352 ms     | 2423 ms  | 447.7 MB     | 416.9 MB      | 2619 ms      | 7.6 MB     | 277/277         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2337 ms     | 2356 ms  | 447.2 MB     | 417.4 MB      | 2575 ms      | 1.4 MB     | 278/278         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2363 ms     | 2389 ms  | 451.2 MB     | 421.7 MB      | 2647 ms      | 0 MB       | 283/283         | 0          |
| workspace-plan         | Workspace execution plan                        | 2383 ms     | 2411 ms  | 454.3 MB     | 424.7 MB      | 2657 ms      | 1.8 MB     | 286/286         | 0          |
| platform-probes        | Platform and loader probes                      | 2391 ms     | 2394 ms  | 455.4 MB     | 425.7 MB      | 2609 ms      | 1.6 MB     | 285/285         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 376 ms      | 378 ms   | 60.5 MB      | 31.8 MB       | 185 ms       | 1.3 MB     | 45/45           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 34 ms    | 36 ms    | 32.9 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2213 ms  | 2236 ms  | 445.9 MB     | 2430 ms      | 262/262         | fixture-inspection     |
| target-registry  | 1        | 2311 ms  | 2317 ms  | 446.9 MB     | 2531 ms      | 274/274         | compat-report-registry |
| contract-capture | 1        | 2352 ms  | 2423 ms  | 447.7 MB     | 2619 ms      | 277/277         | contract-capture       |
| synthetic-probes | 1        | 2337 ms  | 2356 ms  | 447.2 MB     | 2575 ms      | 278/278         | synthetic-probe-plan   |
| cold-import      | 1        | 2363 ms  | 2389 ms  | 451.2 MB     | 2647 ms      | 283/283         | cold-import-readiness  |
| workspace-plan   | 1        | 2383 ms  | 2411 ms  | 454.3 MB     | 2657 ms      | 286/286         | workspace-plan         |
| platform-probes  | 1        | 2391 ms  | 2394 ms  | 455.4 MB     | 2609 ms      | 285/285         | platform-probes        |
| import-loop      | 1        | 376 ms   | 378 ms   | 60.5 MB      | 185 ms       | 45/45           | import-loop-profile    |
