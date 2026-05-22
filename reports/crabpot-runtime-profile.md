# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2377 ms            |
| Command P95 wall time  | 2442 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 2031               |
| CPU samples            | 2031               |
| Max peak RSS           | 478 MB             |
| Max RSS delta          | 449.5 MB           |
| Max CPU estimate       | 2716 ms            |
| Max harness heap delta | 7.8 MB             |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 61         |
| hookNames              | 37         |
| apiRegistrars          | 53         |
| capturedRegistrars     | 28         |
| sdkExports             | 313        |
| manifestFields         | 41         |
| manifestContractFields | 18         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 60    |
| sourceFiles           | 1771  |
| observedHooks         | 106   |
| observedRegistrations | 199   |
| observedSdkImports    | 1210  |
| contractProbes        | 274   |
| issueFindings         | 278   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 37 ms       | 37 ms    | 30.3 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2287 ms     | 2309 ms  | 468.1 MB     | 439.6 MB      | 2495 ms      | 7.8 MB     | 271/271         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2387 ms     | 2394 ms  | 470 MB       | 441.2 MB      | 2628 ms      | 7.8 MB     | 284/284         | 0          |
| contract-capture       | Contract capture inventory                      | 2390 ms     | 2398 ms  | 470 MB       | 440.6 MB      | 2628 ms      | -4.2 MB    | 279/279         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2377 ms     | 2378 ms  | 470.2 MB     | 441.8 MB      | 2594 ms      | 0.8 MB     | 284/284         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2376 ms     | 2395 ms  | 476.7 MB     | 448.3 MB      | 2623 ms      | 0.3 MB     | 284/284         | 0          |
| workspace-plan         | Workspace execution plan                        | 2431 ms     | 2467 ms  | 478 MB       | 449.5 MB      | 2716 ms      | 2.1 MB     | 291/291         | 0          |
| platform-probes        | Platform and loader probes                      | 2442 ms     | 2447 ms  | 476.9 MB     | 448.5 MB      | 2653 ms      | 1.8 MB     | 290/290         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 384 ms      | 395 ms   | 60.2 MB      | 31.7 MB       | 190 ms       | 1.5 MB     | 45/45           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 37 ms    | 37 ms    | 30.3 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2287 ms  | 2309 ms  | 468.1 MB     | 2495 ms      | 271/271         | fixture-inspection     |
| target-registry  | 1        | 2387 ms  | 2394 ms  | 470 MB       | 2628 ms      | 284/284         | compat-report-registry |
| contract-capture | 1        | 2390 ms  | 2398 ms  | 470 MB       | 2628 ms      | 279/279         | contract-capture       |
| synthetic-probes | 1        | 2377 ms  | 2378 ms  | 470.2 MB     | 2594 ms      | 284/284         | synthetic-probe-plan   |
| cold-import      | 1        | 2376 ms  | 2395 ms  | 476.7 MB     | 2623 ms      | 284/284         | cold-import-readiness  |
| workspace-plan   | 1        | 2431 ms  | 2467 ms  | 478 MB       | 2716 ms      | 291/291         | workspace-plan         |
| platform-probes  | 1        | 2442 ms  | 2447 ms  | 476.9 MB     | 2653 ms      | 290/290         | platform-probes        |
| import-loop      | 1        | 384 ms   | 395 ms   | 60.2 MB      | 190 ms       | 45/45           | import-loop-profile    |
