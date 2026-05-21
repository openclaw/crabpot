# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2388 ms            |
| Command P95 wall time  | 2440 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 2019               |
| CPU samples            | 2019               |
| Max peak RSS           | 473.3 MB           |
| Max RSS delta          | 443.2 MB           |
| Max CPU estimate       | 2698 ms            |
| Max harness heap delta | 7.7 MB             |

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
| node-boot              | Node boot                                       | 41 ms       | 42 ms    | 31.6 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2267 ms     | 2296 ms  | 445.4 MB     | 415.8 MB      | 2516 ms      | 7.6 MB     | 268/268         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2341 ms     | 2393 ms  | 473.3 MB     | 443.2 MB      | 2611 ms      | 7.6 MB     | 278/278         | 0          |
| contract-capture       | Contract capture inventory                      | 2417 ms     | 2421 ms  | 447.6 MB     | 418 MB        | 2674 ms      | 7.7 MB     | 277/277         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2388 ms     | 2403 ms  | 447.5 MB     | 418.6 MB      | 2644 ms      | 0.7 MB     | 283/283         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2397 ms     | 2414 ms  | 455 MB       | 426.5 MB      | 2694 ms      | 0.2 MB     | 285/285         | 0          |
| workspace-plan         | Workspace execution plan                        | 2429 ms     | 2453 ms  | 456.5 MB     | 426.9 MB      | 2698 ms      | 1.9 MB     | 288/288         | 0          |
| platform-probes        | Platform and loader probes                      | 2440 ms     | 2459 ms  | 456.1 MB     | 427.6 MB      | 2680 ms      | 1.8 MB     | 289/289         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 423 ms      | 424 ms   | 60.3 MB      | 31.8 MB       | 199 ms       | 1.5 MB     | 48/48           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 41 ms    | 42 ms    | 31.6 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2267 ms  | 2296 ms  | 445.4 MB     | 2516 ms      | 268/268         | fixture-inspection     |
| target-registry  | 1        | 2341 ms  | 2393 ms  | 473.3 MB     | 2611 ms      | 278/278         | compat-report-registry |
| contract-capture | 1        | 2417 ms  | 2421 ms  | 447.6 MB     | 2674 ms      | 277/277         | contract-capture       |
| synthetic-probes | 1        | 2388 ms  | 2403 ms  | 447.5 MB     | 2644 ms      | 283/283         | synthetic-probe-plan   |
| cold-import      | 1        | 2397 ms  | 2414 ms  | 455 MB       | 2694 ms      | 285/285         | cold-import-readiness  |
| workspace-plan   | 1        | 2429 ms  | 2453 ms  | 456.5 MB     | 2698 ms      | 288/288         | workspace-plan         |
| platform-probes  | 1        | 2440 ms  | 2459 ms  | 456.1 MB     | 2680 ms      | 289/289         | platform-probes        |
| import-loop      | 1        | 423 ms   | 424 ms   | 60.3 MB      | 199 ms       | 48/48           | import-loop-profile    |
