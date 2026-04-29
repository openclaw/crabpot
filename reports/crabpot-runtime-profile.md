# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 1

## Summary

| Metric                 | Value   |
| ---------------------- | ------- |
| Commands               | 9       |
| P50 wall time          | 452 ms  |
| P95 wall time          | 489 ms  |
| Max peak RSS           | 84.2 MB |
| Max RSS delta          | 20.7 MB |
| Max CPU estimate       | 544 ms  |
| Max harness heap delta | 0.6 MB  |

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
| contractProbes        | 154   |
| issueFindings         | 195   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | ---------- |
| node-boot              | Node boot                                       | 35 ms       | 35 ms    | 0 MB         | 0 MB          | 0 ms         | 0.3 MB     | 0          |
| fixture-inspection     | Fixture inspection                              | 390 ms      | 390 ms   | 77.7 MB      | 12.6 MB       | 442 ms       | 0.6 MB     | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 454 ms      | 454 ms   | 79.4 MB      | 14.5 MB       | 519 ms       | 0.6 MB     | 0          |
| contract-capture       | Contract capture inventory                      | 475 ms      | 475 ms   | 84.2 MB      | 20.7 MB       | 485 ms       | 0.5 MB     | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 466 ms      | 466 ms   | 80.5 MB      | 16 MB         | 499 ms       | 0.5 MB     | 0          |
| cold-import-readiness  | Cold import readiness                           | 439 ms      | 439 ms   | 79.9 MB      | 15.6 MB       | 473 ms       | 0.5 MB     | 0          |
| workspace-plan         | Workspace execution plan                        | 452 ms      | 452 ms   | 79.8 MB      | 15.7 MB       | 478 ms       | 0.5 MB     | 0          |
| platform-probes        | Platform and loader probes                      | 489 ms      | 489 ms   | 79.9 MB      | 15.8 MB       | 544 ms       | 0.5 MB     | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 216 ms      | 216 ms   | 58.2 MB      | 0 MB          | 98 ms        | 0.4 MB     | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | ---------------------- |
| baseline         | 1        | 35 ms    | 35 ms    | 0 MB         | 0 ms         | node-boot              |
| fixture-scan     | 1        | 390 ms   | 390 ms   | 77.7 MB      | 442 ms       | fixture-inspection     |
| target-registry  | 1        | 454 ms   | 454 ms   | 79.4 MB      | 519 ms       | compat-report-registry |
| contract-capture | 1        | 475 ms   | 475 ms   | 84.2 MB      | 485 ms       | contract-capture       |
| synthetic-probes | 1        | 466 ms   | 466 ms   | 80.5 MB      | 499 ms       | synthetic-probe-plan   |
| cold-import      | 1        | 439 ms   | 439 ms   | 79.9 MB      | 473 ms       | cold-import-readiness  |
| workspace-plan   | 1        | 452 ms   | 452 ms   | 79.8 MB      | 478 ms       | workspace-plan         |
| platform-probes  | 1        | 489 ms   | 489 ms   | 79.9 MB      | 544 ms       | platform-probes        |
| import-loop      | 1        | 216 ms   | 216 ms   | 58.2 MB      | 98 ms        | import-loop-profile    |
