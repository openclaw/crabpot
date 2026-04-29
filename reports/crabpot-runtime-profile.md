# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 1

## Summary

| Metric                 | Value   |
| ---------------------- | ------- |
| Commands               | 9       |
| P50 wall time          | 450 ms  |
| P95 wall time          | 479 ms  |
| Max peak RSS           | 82.7 MB |
| Max RSS delta          | 18.5 MB |
| Max CPU estimate       | 509 ms  |
| Max harness heap delta | 0.5 MB  |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 51         |
| hookNames              | 32         |
| apiRegistrars          | 41         |
| capturedRegistrars     | 19         |
| sdkExports             | 316        |
| manifestFields         | 35         |
| manifestContractFields | 17         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 29    |
| sourceFiles           | 750   |
| observedHooks         | 76    |
| observedRegistrations | 100   |
| observedSdkImports    | 330   |
| contractProbes        | 158   |
| issueFindings         | 160   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | ---------- |
| node-boot              | Node boot                                       | 35 ms       | 35 ms    | 0 MB         | 0 MB          | 0 ms         | 0.2 MB     | 0          |
| fixture-inspection     | Fixture inspection                              | 397 ms      | 397 ms   | 71.6 MB      | 7.5 MB        | 434 ms       | 0.5 MB     | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 437 ms      | 437 ms   | 80.1 MB      | 15.1 MB       | 482 ms       | 0.5 MB     | 0          |
| contract-capture       | Contract capture inventory                      | 450 ms      | 450 ms   | 79.8 MB      | 15.6 MB       | 470 ms       | 0.5 MB     | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 455 ms      | 455 ms   | 80.1 MB      | 15.8 MB       | 489 ms       | 0.5 MB     | 0          |
| cold-import-readiness  | Cold import readiness                           | 452 ms      | 452 ms   | 82.1 MB      | 17.5 MB       | 509 ms       | 0.5 MB     | 0          |
| workspace-plan         | Workspace execution plan                        | 479 ms      | 479 ms   | 82.7 MB      | 18.5 MB       | 491 ms       | 0.5 MB     | 0          |
| platform-probes        | Platform and loader probes                      | 461 ms      | 461 ms   | 80.3 MB      | 16.5 MB       | 469 ms       | -16.6 MB   | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 215 ms      | 215 ms   | 58.1 MB      | 0 MB          | 117 ms       | 0.3 MB     | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | ---------------------- |
| baseline         | 1        | 35 ms    | 35 ms    | 0 MB         | 0 ms         | node-boot              |
| fixture-scan     | 1        | 397 ms   | 397 ms   | 71.6 MB      | 434 ms       | fixture-inspection     |
| target-registry  | 1        | 437 ms   | 437 ms   | 80.1 MB      | 482 ms       | compat-report-registry |
| contract-capture | 1        | 450 ms   | 450 ms   | 79.8 MB      | 470 ms       | contract-capture       |
| synthetic-probes | 1        | 455 ms   | 455 ms   | 80.1 MB      | 489 ms       | synthetic-probe-plan   |
| cold-import      | 1        | 452 ms   | 452 ms   | 82.1 MB      | 509 ms       | cold-import-readiness  |
| workspace-plan   | 1        | 479 ms   | 479 ms   | 82.7 MB      | 491 ms       | workspace-plan         |
| platform-probes  | 1        | 461 ms   | 461 ms   | 80.3 MB      | 469 ms       | platform-probes        |
| import-loop      | 1        | 215 ms   | 215 ms   | 58.1 MB      | 117 ms       | import-loop-profile    |
