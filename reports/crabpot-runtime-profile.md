# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2394 ms            |
| Command P95 wall time  | 2442 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 2036               |
| CPU samples            | 2036               |
| Max peak RSS           | 482 MB             |
| Max RSS delta          | 453.5 MB           |
| Max CPU estimate       | 2721 ms            |
| Max harness heap delta | 7.8 MB             |

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
| sourceFiles           | 1783  |
| observedHooks         | 108   |
| observedRegistrations | 204   |
| observedSdkImports    | 1243  |
| contractProbes        | 304   |
| issueFindings         | 309   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 38 ms       | 39 ms    | 31.7 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2308 ms     | 2344 ms  | 472.2 MB     | 442.4 MB      | 2548 ms      | 7.8 MB     | 272/272         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2386 ms     | 2390 ms  | 452.4 MB     | 423.7 MB      | 2617 ms      | 7.7 MB     | 281/281         | 0          |
| contract-capture       | Contract capture inventory                      | 2419 ms     | 2444 ms  | 473.9 MB     | 444.2 MB      | 2662 ms      | 7.8 MB     | 281/281         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2410 ms     | 2415 ms  | 474.3 MB     | 445.9 MB      | 2649 ms      | 1.7 MB     | 287/287         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2394 ms     | 2415 ms  | 474.5 MB     | 445.3 MB      | 2637 ms      | 0.1 MB     | 284/284         | 0          |
| workspace-plan         | Workspace execution plan                        | 2437 ms     | 2456 ms  | 482 MB       | 453.5 MB      | 2719 ms      | 1.8 MB     | 288/288         | 0          |
| platform-probes        | Platform and loader probes                      | 2442 ms     | 2503 ms  | 479.6 MB     | 450.9 MB      | 2721 ms      | 1.7 MB     | 291/291         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 411 ms      | 433 ms   | 60.5 MB      | 32.1 MB       | 212 ms       | 1.5 MB     | 49/49           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 38 ms    | 39 ms    | 31.7 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2308 ms  | 2344 ms  | 472.2 MB     | 2548 ms      | 272/272         | fixture-inspection     |
| target-registry  | 1        | 2386 ms  | 2390 ms  | 452.4 MB     | 2617 ms      | 281/281         | compat-report-registry |
| contract-capture | 1        | 2419 ms  | 2444 ms  | 473.9 MB     | 2662 ms      | 281/281         | contract-capture       |
| synthetic-probes | 1        | 2410 ms  | 2415 ms  | 474.3 MB     | 2649 ms      | 287/287         | synthetic-probe-plan   |
| cold-import      | 1        | 2394 ms  | 2415 ms  | 474.5 MB     | 2637 ms      | 284/284         | cold-import-readiness  |
| workspace-plan   | 1        | 2437 ms  | 2456 ms  | 482 MB       | 2719 ms      | 288/288         | workspace-plan         |
| platform-probes  | 1        | 2442 ms  | 2503 ms  | 479.6 MB     | 2721 ms      | 291/291         | platform-probes        |
| import-loop      | 1        | 411 ms   | 433 ms   | 60.5 MB      | 212 ms       | 49/49           | import-loop-profile    |
