# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2383 ms            |
| Command P95 wall time  | 2470 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 2031               |
| CPU samples            | 2031               |
| Max peak RSS           | 444.4 MB           |
| Max RSS delta          | 414.7 MB           |
| Max CPU estimate       | 2679 ms            |
| Max harness heap delta | 8.1 MB             |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 60         |
| hookNames              | 35         |
| apiRegistrars          | 49         |
| capturedRegistrars     | 26         |
| sdkExports             | 294        |
| manifestFields         | 39         |
| manifestContractFields | 17         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 57    |
| sourceFiles           | 2970  |
| observedHooks         | 93    |
| observedRegistrations | 185   |
| observedSdkImports    | 1080  |
| contractProbes        | 299   |
| issueFindings         | 307   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 34 ms       | 34 ms    | 32.6 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2260 ms     | 2314 ms  | 431.5 MB     | 400.6 MB      | 2506 ms      | 8.1 MB     | 269/269         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2386 ms     | 2462 ms  | 430.1 MB     | 399.8 MB      | 2666 ms      | 7.8 MB     | 283/283         | 0          |
| contract-capture       | Contract capture inventory                      | 2470 ms     | 2494 ms  | 430.2 MB     | 400.4 MB      | 2679 ms      | 8.1 MB     | 290/290         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2383 ms     | 2402 ms  | 444.4 MB     | 414.7 MB      | 2585 ms      | 0.3 MB     | 285/285         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2373 ms     | 2375 ms  | 436.4 MB     | 407.7 MB      | 2596 ms      | 0.4 MB     | 282/282         | 0          |
| workspace-plan         | Workspace execution plan                        | 2407 ms     | 2422 ms  | 437 MB       | 408.3 MB      | 2616 ms      | 2 MB       | 287/287         | 0          |
| platform-probes        | Platform and loader probes                      | 2418 ms     | 2433 ms  | 437.1 MB     | 408.4 MB      | 2645 ms      | 1.8 MB     | 288/288         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 376 ms      | 377 ms   | 60.5 MB      | 31.8 MB       | 177 ms       | 1.3 MB     | 44/44           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 34 ms    | 34 ms    | 32.6 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2260 ms  | 2314 ms  | 431.5 MB     | 2506 ms      | 269/269         | fixture-inspection     |
| target-registry  | 1        | 2386 ms  | 2462 ms  | 430.1 MB     | 2666 ms      | 283/283         | compat-report-registry |
| contract-capture | 1        | 2470 ms  | 2494 ms  | 430.2 MB     | 2679 ms      | 290/290         | contract-capture       |
| synthetic-probes | 1        | 2383 ms  | 2402 ms  | 444.4 MB     | 2585 ms      | 285/285         | synthetic-probe-plan   |
| cold-import      | 1        | 2373 ms  | 2375 ms  | 436.4 MB     | 2596 ms      | 282/282         | cold-import-readiness  |
| workspace-plan   | 1        | 2407 ms  | 2422 ms  | 437 MB       | 2616 ms      | 287/287         | workspace-plan         |
| platform-probes  | 1        | 2418 ms  | 2433 ms  | 437.1 MB     | 2645 ms      | 288/288         | platform-probes        |
| import-loop      | 1        | 376 ms   | 377 ms   | 60.5 MB      | 177 ms       | 44/44           | import-loop-profile    |
