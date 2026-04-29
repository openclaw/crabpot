# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 1

## Summary

| Metric                 | Value   |
| ---------------------- | ------- |
| Commands               | 9       |
| P50 wall time          | 419 ms  |
| P95 wall time          | 440 ms  |
| Max peak RSS           | 81.4 MB |
| Max RSS delta          | 17.4 MB |
| Max CPU estimate       | 488 ms  |
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
| node-boot              | Node boot                                       | 38 ms       | 38 ms    | 0 MB         | 0 MB          | 0 ms         | 0.2 MB     | 0          |
| fixture-inspection     | Fixture inspection                              | 365 ms      | 365 ms   | 75.4 MB      | 11.2 MB       | 381 ms       | 0.5 MB     | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 419 ms      | 419 ms   | 78.2 MB      | 13.3 MB       | 451 ms       | 0.5 MB     | 0          |
| contract-capture       | Contract capture inventory                      | 413 ms      | 413 ms   | 75.5 MB      | 11.8 MB       | 458 ms       | 0.5 MB     | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 430 ms      | 430 ms   | 80.7 MB      | 16.6 MB       | 462 ms       | 0.5 MB     | 0          |
| cold-import-readiness  | Cold import readiness                           | 422 ms      | 422 ms   | 74.5 MB      | 10.2 MB       | 433 ms       | 0.4 MB     | 0          |
| workspace-plan         | Workspace execution plan                        | 432 ms      | 432 ms   | 81.4 MB      | 17.4 MB       | 454 ms       | 0.5 MB     | 0          |
| platform-probes        | Platform and loader probes                      | 440 ms      | 440 ms   | 81.3 MB      | 17.1 MB       | 488 ms       | 0.5 MB     | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 223 ms      | 223 ms   | 58.6 MB      | 0.5 MB        | 95 ms        | 0.3 MB     | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | ---------------------- |
| baseline         | 1        | 38 ms    | 38 ms    | 0 MB         | 0 ms         | node-boot              |
| fixture-scan     | 1        | 365 ms   | 365 ms   | 75.4 MB      | 381 ms       | fixture-inspection     |
| target-registry  | 1        | 419 ms   | 419 ms   | 78.2 MB      | 451 ms       | compat-report-registry |
| contract-capture | 1        | 413 ms   | 413 ms   | 75.5 MB      | 458 ms       | contract-capture       |
| synthetic-probes | 1        | 430 ms   | 430 ms   | 80.7 MB      | 462 ms       | synthetic-probe-plan   |
| cold-import      | 1        | 422 ms   | 422 ms   | 74.5 MB      | 433 ms       | cold-import-readiness  |
| workspace-plan   | 1        | 432 ms   | 432 ms   | 81.4 MB      | 454 ms       | workspace-plan         |
| platform-probes  | 1        | 440 ms   | 440 ms   | 81.3 MB      | 488 ms       | platform-probes        |
| import-loop      | 1        | 223 ms   | 223 ms   | 58.6 MB      | 95 ms        | import-loop-profile    |
