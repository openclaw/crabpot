# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2411 ms            |
| Command P95 wall time  | 2472 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 2060               |
| CPU samples            | 2060               |
| Max peak RSS           | 484.4 MB           |
| Max RSS delta          | 456 MB             |
| Max CPU estimate       | 2722 ms            |
| Max harness heap delta | 7.9 MB             |

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
| node-boot              | Node boot                                       | 38 ms       | 39 ms    | 32 MB        | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2343 ms     | 2367 ms  | 474.7 MB     | 444.8 MB      | 2599 ms      | 7.9 MB     | 278/278         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2383 ms     | 2464 ms  | 474.3 MB     | 445.8 MB      | 2681 ms      | 7.9 MB     | 283/283         | 0          |
| contract-capture       | Contract capture inventory                      | 2444 ms     | 2513 ms  | 476 MB       | 446.3 MB      | 2701 ms      | -4.1 MB    | 285/285         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2411 ms     | 2420 ms  | 476.2 MB     | 447.8 MB      | 2631 ms      | 1 MB       | 287/287         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2413 ms     | 2506 ms  | 480.3 MB     | 451.8 MB      | 2722 ms      | 0.4 MB     | 291/291         | 0          |
| workspace-plan         | Workspace execution plan                        | 2441 ms     | 2481 ms  | 484.3 MB     | 455.1 MB      | 2697 ms      | 2 MB       | 290/290         | 0          |
| platform-probes        | Platform and loader probes                      | 2472 ms     | 2487 ms  | 484.4 MB     | 456 MB        | 2693 ms      | 2.1 MB     | 295/295         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 405 ms      | 408 ms   | 60.5 MB      | 32.1 MB       | 190 ms       | 1.4 MB     | 48/48           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 38 ms    | 39 ms    | 32 MB        | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2343 ms  | 2367 ms  | 474.7 MB     | 2599 ms      | 278/278         | fixture-inspection     |
| target-registry  | 1        | 2383 ms  | 2464 ms  | 474.3 MB     | 2681 ms      | 283/283         | compat-report-registry |
| contract-capture | 1        | 2444 ms  | 2513 ms  | 476 MB       | 2701 ms      | 285/285         | contract-capture       |
| synthetic-probes | 1        | 2411 ms  | 2420 ms  | 476.2 MB     | 2631 ms      | 287/287         | synthetic-probe-plan   |
| cold-import      | 1        | 2413 ms  | 2506 ms  | 480.3 MB     | 2722 ms      | 291/291         | cold-import-readiness  |
| workspace-plan   | 1        | 2441 ms  | 2481 ms  | 484.3 MB     | 2697 ms      | 290/290         | workspace-plan         |
| platform-probes  | 1        | 2472 ms  | 2487 ms  | 484.4 MB     | 2693 ms      | 295/295         | platform-probes        |
| import-loop      | 1        | 405 ms   | 408 ms   | 60.5 MB      | 190 ms       | 48/48           | import-loop-profile    |
