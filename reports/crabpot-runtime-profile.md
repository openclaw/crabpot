# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 1

## Summary

| Metric                 | Value   |
| ---------------------- | ------- |
| Commands               | 9       |
| P50 wall time          | 427 ms  |
| P95 wall time          | 450 ms  |
| Max peak RSS           | 81.5 MB |
| Max RSS delta          | 16.8 MB |
| Max CPU estimate       | 484 ms  |
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
| fixture-inspection     | Fixture inspection                              | 375 ms      | 375 ms   | 77.1 MB      | 12.6 MB       | 416 ms       | 0.5 MB     | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 412 ms      | 412 ms   | 77.3 MB      | 11.6 MB       | 430 ms       | 0.5 MB     | 0          |
| contract-capture       | Contract capture inventory                      | 439 ms      | 439 ms   | 80.1 MB      | 16.2 MB       | 483 ms       | 0.5 MB     | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 427 ms      | 427 ms   | 80.4 MB      | 16.3 MB       | 459 ms       | 0.5 MB     | 0          |
| cold-import-readiness  | Cold import readiness                           | 427 ms      | 427 ms   | 81.5 MB      | 16.8 MB       | 450 ms       | 0.4 MB     | 0          |
| workspace-plan         | Workspace execution plan                        | 438 ms      | 438 ms   | 80.8 MB      | 15.6 MB       | 462 ms       | 0.5 MB     | 0          |
| platform-probes        | Platform and loader probes                      | 450 ms      | 450 ms   | 80.3 MB      | 16.3 MB       | 484 ms       | -16.6 MB   | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 215 ms      | 215 ms   | 58.1 MB      | 0 MB          | 108 ms       | 0.3 MB     | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | ---------------------- |
| baseline         | 1        | 35 ms    | 35 ms    | 0 MB         | 0 ms         | node-boot              |
| fixture-scan     | 1        | 375 ms   | 375 ms   | 77.1 MB      | 416 ms       | fixture-inspection     |
| target-registry  | 1        | 412 ms   | 412 ms   | 77.3 MB      | 430 ms       | compat-report-registry |
| contract-capture | 1        | 439 ms   | 439 ms   | 80.1 MB      | 483 ms       | contract-capture       |
| synthetic-probes | 1        | 427 ms   | 427 ms   | 80.4 MB      | 459 ms       | synthetic-probe-plan   |
| cold-import      | 1        | 427 ms   | 427 ms   | 81.5 MB      | 450 ms       | cold-import-readiness  |
| workspace-plan   | 1        | 438 ms   | 438 ms   | 80.8 MB      | 462 ms       | workspace-plan         |
| platform-probes  | 1        | 450 ms   | 450 ms   | 80.3 MB      | 484 ms       | platform-probes        |
| import-loop      | 1        | 215 ms   | 215 ms   | 58.1 MB      | 108 ms       | import-loop-profile    |
