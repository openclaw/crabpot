# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2385 ms            |
| Command P95 wall time  | 2439 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 2024               |
| CPU samples            | 2024               |
| Max peak RSS           | 452.1 MB           |
| Max RSS delta          | 421.5 MB           |
| Max CPU estimate       | 2716 ms            |
| Max harness heap delta | 8.3 MB             |

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
| node-boot              | Node boot                                       | 42 ms       | 56 ms    | 31.2 MB      | 0 MB          | 0 ms         | 0.5 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2285 ms     | 2406 ms  | 429.4 MB     | 399.3 MB      | 2623 ms      | 8.3 MB     | 271/271         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2376 ms     | 2403 ms  | 442.1 MB     | 412.3 MB      | 2660 ms      | 7.8 MB     | 283/283         | 0          |
| contract-capture       | Contract capture inventory                      | 2398 ms     | 2416 ms  | 441.6 MB     | 411.4 MB      | 2650 ms      | 7.9 MB     | 283/283         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2399 ms     | 2412 ms  | 430.6 MB     | 400.2 MB      | 2622 ms      | 7.8 MB     | 282/282         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2385 ms     | 2422 ms  | 440.4 MB     | 410.1 MB      | 2684 ms      | 7.8 MB     | 281/281         | 0          |
| workspace-plan         | Workspace execution plan                        | 2439 ms     | 2494 ms  | 444.4 MB     | 414.4 MB      | 2716 ms      | 7.9 MB     | 290/290         | 0          |
| platform-probes        | Platform and loader probes                      | 2418 ms     | 2427 ms  | 452.1 MB     | 421.5 MB      | 2679 ms      | 7.9 MB     | 286/286         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 389 ms      | 403 ms   | 60.5 MB      | 31.8 MB       | 189 ms       | 1.4 MB     | 45/45           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 42 ms    | 56 ms    | 31.2 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2285 ms  | 2406 ms  | 429.4 MB     | 2623 ms      | 271/271         | fixture-inspection     |
| target-registry  | 1        | 2376 ms  | 2403 ms  | 442.1 MB     | 2660 ms      | 283/283         | compat-report-registry |
| contract-capture | 1        | 2398 ms  | 2416 ms  | 441.6 MB     | 2650 ms      | 283/283         | contract-capture       |
| synthetic-probes | 1        | 2399 ms  | 2412 ms  | 430.6 MB     | 2622 ms      | 282/282         | synthetic-probe-plan   |
| cold-import      | 1        | 2385 ms  | 2422 ms  | 440.4 MB     | 2684 ms      | 281/281         | cold-import-readiness  |
| workspace-plan   | 1        | 2439 ms  | 2494 ms  | 444.4 MB     | 2716 ms      | 290/290         | workspace-plan         |
| platform-probes  | 1        | 2418 ms  | 2427 ms  | 452.1 MB     | 2679 ms      | 286/286         | platform-probes        |
| import-loop      | 1        | 389 ms   | 403 ms   | 60.5 MB      | 189 ms       | 45/45           | import-loop-profile    |
