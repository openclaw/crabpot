# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2386 ms            |
| Command P95 wall time  | 2466 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 2039               |
| CPU samples            | 2039               |
| Max peak RSS           | 485.1 MB           |
| Max RSS delta          | 456.6 MB           |
| Max CPU estimate       | 2704 ms            |
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
| sourceFiles           | 1776  |
| observedHooks         | 108   |
| observedRegistrations | 205   |
| observedSdkImports    | 1230  |
| contractProbes        | 304   |
| issueFindings         | 309   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 37 ms       | 39 ms    | 30.4 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2295 ms     | 2379 ms  | 474.7 MB     | 445.8 MB      | 2534 ms      | 7.8 MB     | 274/274         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2386 ms     | 2392 ms  | 476.5 MB     | 446.6 MB      | 2637 ms      | 7.8 MB     | 281/281         | 0          |
| contract-capture       | Contract capture inventory                      | 2441 ms     | 2445 ms  | 476.6 MB     | 448 MB        | 2680 ms      | -4 MB      | 284/284         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2375 ms     | 2377 ms  | 453.4 MB     | 425 MB        | 2591 ms      | 0.6 MB     | 281/281         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2389 ms     | 2418 ms  | 482.8 MB     | 454.4 MB      | 2667 ms      | 0.5 MB     | 286/286         | 0          |
| workspace-plan         | Workspace execution plan                        | 2466 ms     | 2467 ms  | 484.1 MB     | 455.7 MB      | 2704 ms      | 1.8 MB     | 290/290         | 0          |
| platform-probes        | Platform and loader probes                      | 2451 ms     | 2485 ms  | 485.1 MB     | 456.6 MB      | 2669 ms      | 2 MB       | 292/292         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 398 ms      | 407 ms   | 60.5 MB      | 32.1 MB       | 193 ms       | 1.4 MB     | 48/48           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 37 ms    | 39 ms    | 30.4 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2295 ms  | 2379 ms  | 474.7 MB     | 2534 ms      | 274/274         | fixture-inspection     |
| target-registry  | 1        | 2386 ms  | 2392 ms  | 476.5 MB     | 2637 ms      | 281/281         | compat-report-registry |
| contract-capture | 1        | 2441 ms  | 2445 ms  | 476.6 MB     | 2680 ms      | 284/284         | contract-capture       |
| synthetic-probes | 1        | 2375 ms  | 2377 ms  | 453.4 MB     | 2591 ms      | 281/281         | synthetic-probe-plan   |
| cold-import      | 1        | 2389 ms  | 2418 ms  | 482.8 MB     | 2667 ms      | 286/286         | cold-import-readiness  |
| workspace-plan   | 1        | 2466 ms  | 2467 ms  | 484.1 MB     | 2704 ms      | 290/290         | workspace-plan         |
| platform-probes  | 1        | 2451 ms  | 2485 ms  | 485.1 MB     | 2669 ms      | 292/292         | platform-probes        |
| import-loop      | 1        | 398 ms   | 407 ms   | 60.5 MB      | 193 ms       | 48/48           | import-loop-profile    |
