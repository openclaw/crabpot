# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2457 ms            |
| Command P95 wall time  | 2556 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 2088               |
| CPU samples            | 2088               |
| Max peak RSS           | 483.6 MB           |
| Max RSS delta          | 455.1 MB           |
| Max CPU estimate       | 2786 ms            |
| Max harness heap delta | 8 MB               |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 63         |
| hookNames              | 37         |
| apiRegistrars          | 55         |
| capturedRegistrars     | 30         |
| sdkExports             | 316        |
| manifestFields         | 41         |
| manifestContractFields | 20         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 60    |
| sourceFiles           | 1782  |
| observedHooks         | 108   |
| observedRegistrations | 205   |
| observedSdkImports    | 1239  |
| contractProbes        | 299   |
| issueFindings         | 304   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 39 ms       | 39 ms    | 31.1 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2344 ms     | 2352 ms  | 474.7 MB     | 445.7 MB      | 2588 ms      | 7.8 MB     | 277/277         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2462 ms     | 2487 ms  | 474.4 MB     | 444.5 MB      | 2716 ms      | 8 MB       | 292/292         | 0          |
| contract-capture       | Contract capture inventory                      | 2465 ms     | 2465 ms  | 474 MB       | 442.7 MB      | 2699 ms      | -4.1 MB    | 284/284         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2411 ms     | 2430 ms  | 452.9 MB     | 424.5 MB      | 2654 ms      | 1.7 MB     | 287/287         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2457 ms     | 2488 ms  | 483.6 MB     | 455.1 MB      | 2730 ms      | 0.2 MB     | 294/294         | 0          |
| workspace-plan         | Workspace execution plan                        | 2516 ms     | 2519 ms  | 482.4 MB     | 453.6 MB      | 2774 ms      | 2 MB       | 299/299         | 0          |
| platform-probes        | Platform and loader probes                      | 2556 ms     | 2556 ms  | 482.6 MB     | 454.2 MB      | 2786 ms      | 2.2 MB     | 302/302         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 425 ms      | 445 ms   | 60.5 MB      | 32.1 MB       | 201 ms       | 1.5 MB     | 50/50           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 39 ms    | 39 ms    | 31.1 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2344 ms  | 2352 ms  | 474.7 MB     | 2588 ms      | 277/277         | fixture-inspection     |
| target-registry  | 1        | 2462 ms  | 2487 ms  | 474.4 MB     | 2716 ms      | 292/292         | compat-report-registry |
| contract-capture | 1        | 2465 ms  | 2465 ms  | 474 MB       | 2699 ms      | 284/284         | contract-capture       |
| synthetic-probes | 1        | 2411 ms  | 2430 ms  | 452.9 MB     | 2654 ms      | 287/287         | synthetic-probe-plan   |
| cold-import      | 1        | 2457 ms  | 2488 ms  | 483.6 MB     | 2730 ms      | 294/294         | cold-import-readiness  |
| workspace-plan   | 1        | 2516 ms  | 2519 ms  | 482.4 MB     | 2774 ms      | 299/299         | workspace-plan         |
| platform-probes  | 1        | 2556 ms  | 2556 ms  | 482.6 MB     | 2786 ms      | 302/302         | platform-probes        |
| import-loop      | 1        | 425 ms   | 445 ms   | 60.5 MB      | 201 ms       | 50/50           | import-loop-profile    |
