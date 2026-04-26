# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 1

## Summary

| Metric        | Value   |
| ------------- | ------- |
| Commands      | 7       |
| P50 wall time | 493 ms  |
| P95 wall time | 2466 ms |
| Max peak RSS  | 70.3 MB |

## Target OpenClaw Registry Surface

| Metric                 | Value       |
| ---------------------- | ----------- |
| status                 | ok          |
| configuredPath         | ../openclaw |
| compatRecords          | 18          |
| hookNames              | 32          |
| apiRegistrars          | 40          |
| capturedRegistrars     | 18          |
| sdkExports             | 307         |
| manifestFields         | 32          |
| manifestContractFields | 16          |

## Crabpot Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 21    |
| sourceFiles           | 384   |
| observedHooks         | 40    |
| observedRegistrations | 45    |
| observedSdkImports    | 30    |
| contractProbes        | 109   |
| issueFindings         | 111   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ---------- |
| node-boot              | Node boot                                       | 1138 ms     | 1138 ms  | 2.5 MB       | 0          |
| fixture-inspection     | Fixture inspection                              | 2466 ms     | 2466 ms  | 62.2 MB      | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 414 ms      | 414 ms   | 64.3 MB      | 0          |
| contract-capture       | Contract capture inventory                      | 453 ms      | 453 ms   | 68.8 MB      | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 366 ms      | 366 ms   | 63.9 MB      | 0          |
| cold-import-readiness  | Cold import readiness                           | 493 ms      | 493 ms   | 70.3 MB      | 0          |
| workspace-plan         | Workspace execution plan                        | 548 ms      | 548 ms   | 64.4 MB      | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ---------------------- |
| baseline         | 1        | 1138 ms  | 1138 ms  | 2.5 MB       | node-boot              |
| fixture-scan     | 1        | 2466 ms  | 2466 ms  | 62.2 MB      | fixture-inspection     |
| target-registry  | 1        | 414 ms   | 414 ms   | 64.3 MB      | compat-report-registry |
| contract-capture | 1        | 453 ms   | 453 ms   | 68.8 MB      | contract-capture       |
| synthetic-probes | 1        | 366 ms   | 366 ms   | 63.9 MB      | synthetic-probe-plan   |
| cold-import      | 1        | 493 ms   | 493 ms   | 70.3 MB      | cold-import-readiness  |
| workspace-plan   | 1        | 548 ms   | 548 ms   | 64.4 MB      | workspace-plan         |
