# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2368 ms            |
| Command P95 wall time  | 2433 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 2021               |
| CPU samples            | 2021               |
| Max peak RSS           | 472.7 MB           |
| Max RSS delta          | 442.8 MB           |
| Max CPU estimate       | 2715 ms            |
| Max harness heap delta | 7.6 MB             |

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
| sourceFiles           | 1755  |
| observedHooks         | 106   |
| observedRegistrations | 198   |
| observedSdkImports    | 1205  |
| contractProbes        | 277   |
| issueFindings         | 281   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 38 ms       | 40 ms    | 32.4 MB      | 0 MB          | 38 ms        | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2272 ms     | 2337 ms  | 446.5 MB     | 416 MB        | 2557 ms      | 7.4 MB     | 270/270         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2347 ms     | 2464 ms  | 447.3 MB     | 417 MB        | 2715 ms      | 7.6 MB     | 283/283         | 0          |
| contract-capture       | Contract capture inventory                      | 2368 ms     | 2392 ms  | 447.5 MB     | 417.5 MB      | 2591 ms      | 7.6 MB     | 278/278         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2416 ms     | 2429 ms  | 472.4 MB     | 442.8 MB      | 2675 ms      | 1 MB       | 285/285         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2382 ms     | 2428 ms  | 472.7 MB     | 442.8 MB      | 2693 ms      | 0.2 MB     | 283/283         | 0          |
| workspace-plan         | Workspace execution plan                        | 2409 ms     | 2426 ms  | 457.3 MB     | 428.8 MB      | 2671 ms      | 1.8 MB     | 286/286         | 0          |
| platform-probes        | Platform and loader probes                      | 2433 ms     | 2435 ms  | 457 MB       | 428.4 MB      | 2654 ms      | 1.8 MB     | 288/288         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 395 ms      | 397 ms   | 60.3 MB      | 31.7 MB       | 177 ms       | 1.4 MB     | 45/45           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 38 ms    | 40 ms    | 32.4 MB      | 38 ms        | 3/3             | node-boot              |
| fixture-scan     | 1        | 2272 ms  | 2337 ms  | 446.5 MB     | 2557 ms      | 270/270         | fixture-inspection     |
| target-registry  | 1        | 2347 ms  | 2464 ms  | 447.3 MB     | 2715 ms      | 283/283         | compat-report-registry |
| contract-capture | 1        | 2368 ms  | 2392 ms  | 447.5 MB     | 2591 ms      | 278/278         | contract-capture       |
| synthetic-probes | 1        | 2416 ms  | 2429 ms  | 472.4 MB     | 2675 ms      | 285/285         | synthetic-probe-plan   |
| cold-import      | 1        | 2382 ms  | 2428 ms  | 472.7 MB     | 2693 ms      | 283/283         | cold-import-readiness  |
| workspace-plan   | 1        | 2409 ms  | 2426 ms  | 457.3 MB     | 2671 ms      | 286/286         | workspace-plan         |
| platform-probes  | 1        | 2433 ms  | 2435 ms  | 457 MB       | 2654 ms      | 288/288         | platform-probes        |
| import-loop      | 1        | 395 ms   | 397 ms   | 60.3 MB      | 177 ms       | 45/45           | import-loop-profile    |
