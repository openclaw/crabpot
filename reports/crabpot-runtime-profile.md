# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2316 ms            |
| Command P95 wall time  | 2449 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 2002               |
| CPU samples            | 2002               |
| Max peak RSS           | 472.6 MB           |
| Max RSS delta          | 442.6 MB           |
| Max CPU estimate       | 2705 ms            |
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
| sourceFiles           | 1739  |
| observedHooks         | 103   |
| observedRegistrations | 193   |
| observedSdkImports    | 1158  |
| contractProbes        | 266   |
| issueFindings         | 270   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 36 ms       | 38 ms    | 31.8 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2236 ms     | 2238 ms  | 440.9 MB     | 410.7 MB      | 2516 ms      | 7.9 MB     | 263/263         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2367 ms     | 2400 ms  | 442.6 MB     | 411.5 MB      | 2638 ms      | 7.8 MB     | 279/279         | 0          |
| contract-capture       | Contract capture inventory                      | 2365 ms     | 2410 ms  | 442.3 MB     | 412.2 MB      | 2627 ms      | 7.8 MB     | 275/275         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2310 ms     | 2493 ms  | 441.9 MB     | 413.2 MB      | 2705 ms      | 0.7 MB     | 282/282         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2316 ms     | 2343 ms  | 442.1 MB     | 413.4 MB      | 2587 ms      | 0.2 MB     | 276/276         | 0          |
| workspace-plan         | Workspace execution plan                        | 2449 ms     | 2453 ms  | 449 MB       | 420.3 MB      | 2693 ms      | 1.9 MB     | 288/288         | 0          |
| platform-probes        | Platform and loader probes                      | 2405 ms     | 2455 ms  | 472.6 MB     | 442.6 MB      | 2664 ms      | 1.8 MB     | 288/288         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 402 ms      | 404 ms   | 60.5 MB      | 31.8 MB       | 197 ms       | 1.4 MB     | 48/48           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 36 ms    | 38 ms    | 31.8 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2236 ms  | 2238 ms  | 440.9 MB     | 2516 ms      | 263/263         | fixture-inspection     |
| target-registry  | 1        | 2367 ms  | 2400 ms  | 442.6 MB     | 2638 ms      | 279/279         | compat-report-registry |
| contract-capture | 1        | 2365 ms  | 2410 ms  | 442.3 MB     | 2627 ms      | 275/275         | contract-capture       |
| synthetic-probes | 1        | 2310 ms  | 2493 ms  | 441.9 MB     | 2705 ms      | 282/282         | synthetic-probe-plan   |
| cold-import      | 1        | 2316 ms  | 2343 ms  | 442.1 MB     | 2587 ms      | 276/276         | cold-import-readiness  |
| workspace-plan   | 1        | 2449 ms  | 2453 ms  | 449 MB       | 2693 ms      | 288/288         | workspace-plan         |
| platform-probes  | 1        | 2405 ms  | 2455 ms  | 472.6 MB     | 2664 ms      | 288/288         | platform-probes        |
| import-loop      | 1        | 402 ms   | 404 ms   | 60.5 MB      | 197 ms       | 48/48           | import-loop-profile    |
