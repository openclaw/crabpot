# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2431 ms            |
| Command P95 wall time  | 2484 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 2066               |
| CPU samples            | 2066               |
| Max peak RSS           | 439.3 MB           |
| Max RSS delta          | 410.6 MB           |
| Max CPU estimate       | 2775 ms            |
| Max harness heap delta | 8.4 MB             |

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
| node-boot              | Node boot                                       | 35 ms       | 37 ms    | 32.4 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2316 ms     | 2316 ms  | 429.6 MB     | 400.9 MB      | 2535 ms      | 8.4 MB     | 274/274         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2431 ms     | 2448 ms  | 431.1 MB     | 400.3 MB      | 2647 ms      | 7.8 MB     | 288/288         | 0          |
| contract-capture       | Contract capture inventory                      | 2449 ms     | 2485 ms  | 431.1 MB     | 400.5 MB      | 2746 ms      | 7.9 MB     | 287/287         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2452 ms     | 2473 ms  | 432.2 MB     | 403.4 MB      | 2718 ms      | 1 MB       | 293/293         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2402 ms     | 2428 ms  | 439.3 MB     | 410.6 MB      | 2644 ms      | 0.4 MB     | 286/286         | 0          |
| workspace-plan         | Workspace execution plan                        | 2467 ms     | 2488 ms  | 437.2 MB     | 408.5 MB      | 2729 ms      | 2.2 MB     | 295/295         | 0          |
| platform-probes        | Platform and loader probes                      | 2484 ms     | 2509 ms  | 436.6 MB     | 407.8 MB      | 2775 ms      | 2 MB       | 295/295         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 375 ms      | 376 ms   | 60.5 MB      | 31.8 MB       | 180 ms       | 1.4 MB     | 45/45           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 35 ms    | 37 ms    | 32.4 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2316 ms  | 2316 ms  | 429.6 MB     | 2535 ms      | 274/274         | fixture-inspection     |
| target-registry  | 1        | 2431 ms  | 2448 ms  | 431.1 MB     | 2647 ms      | 288/288         | compat-report-registry |
| contract-capture | 1        | 2449 ms  | 2485 ms  | 431.1 MB     | 2746 ms      | 287/287         | contract-capture       |
| synthetic-probes | 1        | 2452 ms  | 2473 ms  | 432.2 MB     | 2718 ms      | 293/293         | synthetic-probe-plan   |
| cold-import      | 1        | 2402 ms  | 2428 ms  | 439.3 MB     | 2644 ms      | 286/286         | cold-import-readiness  |
| workspace-plan   | 1        | 2467 ms  | 2488 ms  | 437.2 MB     | 2729 ms      | 295/295         | workspace-plan         |
| platform-probes  | 1        | 2484 ms  | 2509 ms  | 436.6 MB     | 2775 ms      | 295/295         | platform-probes        |
| import-loop      | 1        | 375 ms   | 376 ms   | 60.5 MB      | 180 ms       | 45/45           | import-loop-profile    |
