# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2369 ms            |
| Command P95 wall time  | 2442 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 2023               |
| CPU samples            | 2023               |
| Max peak RSS           | 478.6 MB           |
| Max RSS delta          | 450.1 MB           |
| Max CPU estimate       | 2706 ms            |
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
| sourceFiles           | 1773  |
| observedHooks         | 108   |
| observedRegistrations | 205   |
| observedSdkImports    | 1230  |
| contractProbes        | 304   |
| issueFindings         | 309   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 36 ms       | 38 ms    | 30.6 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2286 ms     | 2337 ms  | 468.5 MB     | 438.7 MB      | 2561 ms      | 7.8 MB     | 270/270         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2410 ms     | 2412 ms  | 470.1 MB     | 441 MB        | 2660 ms      | 7.9 MB     | 282/282         | 0          |
| contract-capture       | Contract capture inventory                      | 2421 ms     | 2449 ms  | 470.4 MB     | 440.6 MB      | 2674 ms      | -4.2 MB    | 280/280         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2337 ms     | 2356 ms  | 463.6 MB     | 434.3 MB      | 2585 ms      | 0.7 MB     | 280/280         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2369 ms     | 2404 ms  | 471.7 MB     | 443.3 MB      | 2635 ms      | 0.5 MB     | 282/282         | 0          |
| workspace-plan         | Workspace execution plan                        | 2390 ms     | 2435 ms  | 476 MB       | 447.6 MB      | 2666 ms      | 2 MB       | 287/287         | 0          |
| platform-probes        | Platform and loader probes                      | 2442 ms     | 2483 ms  | 478.6 MB     | 450.1 MB      | 2706 ms      | 2 MB       | 291/291         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 409 ms      | 422 ms   | 60.5 MB      | 32.1 MB       | 194 ms       | 1.4 MB     | 48/48           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 36 ms    | 38 ms    | 30.6 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2286 ms  | 2337 ms  | 468.5 MB     | 2561 ms      | 270/270         | fixture-inspection     |
| target-registry  | 1        | 2410 ms  | 2412 ms  | 470.1 MB     | 2660 ms      | 282/282         | compat-report-registry |
| contract-capture | 1        | 2421 ms  | 2449 ms  | 470.4 MB     | 2674 ms      | 280/280         | contract-capture       |
| synthetic-probes | 1        | 2337 ms  | 2356 ms  | 463.6 MB     | 2585 ms      | 280/280         | synthetic-probe-plan   |
| cold-import      | 1        | 2369 ms  | 2404 ms  | 471.7 MB     | 2635 ms      | 282/282         | cold-import-readiness  |
| workspace-plan   | 1        | 2390 ms  | 2435 ms  | 476 MB       | 2666 ms      | 287/287         | workspace-plan         |
| platform-probes  | 1        | 2442 ms  | 2483 ms  | 478.6 MB     | 2706 ms      | 291/291         | platform-probes        |
| import-loop      | 1        | 409 ms   | 422 ms   | 60.5 MB      | 194 ms       | 48/48           | import-loop-profile    |
