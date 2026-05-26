# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2409 ms            |
| Command P95 wall time  | 2481 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 2053               |
| CPU samples            | 2053               |
| Max peak RSS           | 484.1 MB           |
| Max RSS delta          | 455.7 MB           |
| Max CPU estimate       | 2759 ms            |
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
| sourceFiles           | 1778  |
| observedHooks         | 108   |
| observedRegistrations | 205   |
| observedSdkImports    | 1244  |
| contractProbes        | 304   |
| issueFindings         | 309   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 39 ms       | 39 ms    | 30.4 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2299 ms     | 2315 ms  | 471.8 MB     | 442.5 MB      | 2538 ms      | 7.7 MB     | 273/273         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2401 ms     | 2419 ms  | 474.5 MB     | 444.4 MB      | 2677 ms      | 7.7 MB     | 285/285         | 0          |
| contract-capture       | Contract capture inventory                      | 2441 ms     | 2444 ms  | 473.7 MB     | 444.2 MB      | 2674 ms      | -4.1 MB    | 281/281         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2409 ms     | 2428 ms  | 473.7 MB     | 445.3 MB      | 2661 ms      | 0.7 MB     | 286/286         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2417 ms     | 2432 ms  | 483.1 MB     | 454.7 MB      | 2662 ms      | 0.2 MB     | 288/288         | 0          |
| workspace-plan         | Workspace execution plan                        | 2481 ms     | 2504 ms  | 484.1 MB     | 455.7 MB      | 2759 ms      | 1.9 MB     | 294/294         | 0          |
| platform-probes        | Platform and loader probes                      | 2480 ms     | 2527 ms  | 481.9 MB     | 452.4 MB      | 2747 ms      | 2.2 MB     | 295/295         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 410 ms      | 413 ms   | 60.4 MB      | 32 MB         | 203 ms       | 1.4 MB     | 48/48           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 39 ms    | 39 ms    | 30.4 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2299 ms  | 2315 ms  | 471.8 MB     | 2538 ms      | 273/273         | fixture-inspection     |
| target-registry  | 1        | 2401 ms  | 2419 ms  | 474.5 MB     | 2677 ms      | 285/285         | compat-report-registry |
| contract-capture | 1        | 2441 ms  | 2444 ms  | 473.7 MB     | 2674 ms      | 281/281         | contract-capture       |
| synthetic-probes | 1        | 2409 ms  | 2428 ms  | 473.7 MB     | 2661 ms      | 286/286         | synthetic-probe-plan   |
| cold-import      | 1        | 2417 ms  | 2432 ms  | 483.1 MB     | 2662 ms      | 288/288         | cold-import-readiness  |
| workspace-plan   | 1        | 2481 ms  | 2504 ms  | 484.1 MB     | 2759 ms      | 294/294         | workspace-plan         |
| platform-probes  | 1        | 2480 ms  | 2527 ms  | 481.9 MB     | 2747 ms      | 295/295         | platform-probes        |
| import-loop      | 1        | 410 ms   | 413 ms   | 60.4 MB      | 203 ms       | 48/48           | import-loop-profile    |
