# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2528 ms            |
| Command P95 wall time  | 2588 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 2154               |
| CPU samples            | 2154               |
| Max peak RSS           | 342.7 MB           |
| Max RSS delta          | 314.2 MB           |
| Max CPU estimate       | 2921 ms            |
| Max harness heap delta | 8.7 MB             |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 67         |
| hookNames              | 39         |
| apiRegistrars          | 55         |
| capturedRegistrars     | 30         |
| sdkExports             | 319        |
| manifestFields         | 42         |
| manifestContractFields | 21         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 60    |
| sourceFiles           | 1994  |
| observedHooks         | 108   |
| observedRegistrations | 206   |
| observedSdkImports    | 1256  |
| contractProbes        | 280   |
| issueFindings         | 291   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 36 ms       | 37 ms    | 29.7 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2382 ms     | 2409 ms  | 329.3 MB     | 299.7 MB      | 2727 ms      | 8.7 MB     | 284/284         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2532 ms     | 2537 ms  | 329 MB       | 300.5 MB      | 2879 ms      | 8.3 MB     | 298/298         | 0          |
| contract-capture       | Contract capture inventory                      | 2528 ms     | 2552 ms  | 330.8 MB     | 302.4 MB      | 2821 ms      | 1.4 MB     | 301/301         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2539 ms     | 2553 ms  | 334.4 MB     | 306 MB        | 2875 ms      | 0.9 MB     | 302/302         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2525 ms     | 2536 ms  | 340.6 MB     | 312.2 MB      | 2868 ms      | 2.3 MB     | 302/302         | 0          |
| workspace-plan         | Workspace execution plan                        | 2588 ms     | 2592 ms  | 342.7 MB     | 314.2 MB      | 2921 ms      | 2.4 MB     | 308/308         | 0          |
| platform-probes        | Platform and loader probes                      | 2587 ms     | 2605 ms  | 338 MB       | 309.4 MB      | 2860 ms      | 1.7 MB     | 308/308         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 403 ms      | 407 ms   | 60.6 MB      | 32.1 MB       | 193 ms       | 1.4 MB     | 48/48           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 36 ms    | 37 ms    | 29.7 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2382 ms  | 2409 ms  | 329.3 MB     | 2727 ms      | 284/284         | fixture-inspection     |
| target-registry  | 1        | 2532 ms  | 2537 ms  | 329 MB       | 2879 ms      | 298/298         | compat-report-registry |
| contract-capture | 1        | 2528 ms  | 2552 ms  | 330.8 MB     | 2821 ms      | 301/301         | contract-capture       |
| synthetic-probes | 1        | 2539 ms  | 2553 ms  | 334.4 MB     | 2875 ms      | 302/302         | synthetic-probe-plan   |
| cold-import      | 1        | 2525 ms  | 2536 ms  | 340.6 MB     | 2868 ms      | 302/302         | cold-import-readiness  |
| workspace-plan   | 1        | 2588 ms  | 2592 ms  | 342.7 MB     | 2921 ms      | 308/308         | workspace-plan         |
| platform-probes  | 1        | 2587 ms  | 2605 ms  | 338 MB       | 2860 ms      | 308/308         | platform-probes        |
| import-loop      | 1        | 403 ms   | 407 ms   | 60.6 MB      | 193 ms       | 48/48           | import-loop-profile    |
