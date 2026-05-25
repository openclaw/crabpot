# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2392 ms            |
| Command P95 wall time  | 2436 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 2034               |
| CPU samples            | 2034               |
| Max peak RSS           | 476.4 MB           |
| Max RSS delta          | 447.8 MB           |
| Max CPU estimate       | 2688 ms            |
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
| observedHooks         | 106   |
| observedRegistrations | 199   |
| observedSdkImports    | 1223  |
| contractProbes        | 273   |
| issueFindings         | 277   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 35 ms       | 36 ms    | 31.5 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2284 ms     | 2289 ms  | 465.9 MB     | 435.3 MB      | 2524 ms      | 7.7 MB     | 269/269         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2413 ms     | 2443 ms  | 468.3 MB     | 439.2 MB      | 2680 ms      | 7.8 MB     | 286/286         | 0          |
| contract-capture       | Contract capture inventory                      | 2392 ms     | 2435 ms  | 467.8 MB     | 436.6 MB      | 2676 ms      | 7.7 MB     | 281/281         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2401 ms     | 2454 ms  | 467.8 MB     | 439.2 MB      | 2645 ms      | 0.8 MB     | 287/287         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2386 ms     | 2388 ms  | 476.4 MB     | 447.4 MB      | 2634 ms      | 0.1 MB     | 284/284         | 0          |
| workspace-plan         | Workspace execution plan                        | 2425 ms     | 2428 ms  | 476.1 MB     | 447.6 MB      | 2688 ms      | 1.9 MB     | 289/289         | 0          |
| platform-probes        | Platform and loader probes                      | 2436 ms     | 2439 ms  | 476.2 MB     | 447.8 MB      | 2671 ms      | 1.8 MB     | 290/290         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 377 ms      | 380 ms   | 60.2 MB      | 31.1 MB       | 181 ms       | 1.3 MB     | 45/45           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 35 ms    | 36 ms    | 31.5 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2284 ms  | 2289 ms  | 465.9 MB     | 2524 ms      | 269/269         | fixture-inspection     |
| target-registry  | 1        | 2413 ms  | 2443 ms  | 468.3 MB     | 2680 ms      | 286/286         | compat-report-registry |
| contract-capture | 1        | 2392 ms  | 2435 ms  | 467.8 MB     | 2676 ms      | 281/281         | contract-capture       |
| synthetic-probes | 1        | 2401 ms  | 2454 ms  | 467.8 MB     | 2645 ms      | 287/287         | synthetic-probe-plan   |
| cold-import      | 1        | 2386 ms  | 2388 ms  | 476.4 MB     | 2634 ms      | 284/284         | cold-import-readiness  |
| workspace-plan   | 1        | 2425 ms  | 2428 ms  | 476.1 MB     | 2688 ms      | 289/289         | workspace-plan         |
| platform-probes  | 1        | 2436 ms  | 2439 ms  | 476.2 MB     | 2671 ms      | 290/290         | platform-probes        |
| import-loop      | 1        | 377 ms   | 380 ms   | 60.2 MB      | 181 ms       | 45/45           | import-loop-profile    |
