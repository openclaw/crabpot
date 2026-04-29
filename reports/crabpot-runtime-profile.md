# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 1

## Summary

| Metric                 | Value   |
| ---------------------- | ------- |
| Commands               | 9       |
| P50 wall time          | 482 ms  |
| P95 wall time          | 534 ms  |
| Max peak RSS           | 85.1 MB |
| Max RSS delta          | 19.9 MB |
| Max CPU estimate       | 595 ms  |
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
| sourceFiles           | 889   |
| observedHooks         | 76    |
| observedRegistrations | 100   |
| observedSdkImports    | 345   |
| contractProbes        | 155   |
| issueFindings         | 196   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | ---------- |
| node-boot              | Node boot                                       | 41 ms       | 41 ms    | 0 MB         | 0 MB          | 0 ms         | 0.2 MB     | 0          |
| fixture-inspection     | Fixture inspection                              | 432 ms      | 432 ms   | 81.7 MB      | 16.5 MB       | 457 ms       | 0.6 MB     | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 465 ms      | 465 ms   | 82 MB        | 16.8 MB       | 478 ms       | 0.5 MB     | 0          |
| contract-capture       | Contract capture inventory                      | 482 ms      | 482 ms   | 81.8 MB      | 17.6 MB       | 534 ms       | 0.5 MB     | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 513 ms      | 513 ms   | 79.1 MB      | 15.3 MB       | 527 ms       | 0.6 MB     | 0          |
| cold-import-readiness  | Cold import readiness                           | 492 ms      | 492 ms   | 85.1 MB      | 19.9 MB       | 557 ms       | 0.5 MB     | 0          |
| workspace-plan         | Workspace execution plan                        | 534 ms      | 534 ms   | 83.5 MB      | 19 MB         | 595 ms       | 0.6 MB     | 0          |
| platform-probes        | Platform and loader probes                      | 512 ms      | 512 ms   | 79.9 MB      | 15.8 MB       | 545 ms       | 0.5 MB     | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 222 ms      | 222 ms   | 58.1 MB      | 0 MB          | 87 ms        | 0.4 MB     | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | ---------------------- |
| baseline         | 1        | 41 ms    | 41 ms    | 0 MB         | 0 ms         | node-boot              |
| fixture-scan     | 1        | 432 ms   | 432 ms   | 81.7 MB      | 457 ms       | fixture-inspection     |
| target-registry  | 1        | 465 ms   | 465 ms   | 82 MB        | 478 ms       | compat-report-registry |
| contract-capture | 1        | 482 ms   | 482 ms   | 81.8 MB      | 534 ms       | contract-capture       |
| synthetic-probes | 1        | 513 ms   | 513 ms   | 79.1 MB      | 527 ms       | synthetic-probe-plan   |
| cold-import      | 1        | 492 ms   | 492 ms   | 85.1 MB      | 557 ms       | cold-import-readiness  |
| workspace-plan   | 1        | 534 ms   | 534 ms   | 83.5 MB      | 595 ms       | workspace-plan         |
| platform-probes  | 1        | 512 ms   | 512 ms   | 79.9 MB      | 545 ms       | platform-probes        |
| import-loop      | 1        | 222 ms   | 222 ms   | 58.1 MB      | 87 ms        | import-loop-profile    |
