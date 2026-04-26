# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 1

## Summary

| Metric        | Value   |
| ------------- | ------- |
| Commands      | 7       |
| P50 wall time | 454 ms  |
| P95 wall time | 951 ms  |
| Max peak RSS  | 61.8 MB |

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
| fixtures              | 15    |
| sourceFiles           | 309   |
| observedHooks         | 24    |
| observedRegistrations | 30    |
| observedSdkImports    | 24    |
| contractProbes        | 77    |
| issueFindings         | 78    |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ---------- |
| node-boot              | Node boot                                       | 951 ms      | 951 ms   | 0.3 MB       | 0          |
| fixture-inspection     | Fixture inspection                              | 215 ms      | 215 ms   | 61.8 MB      | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 454 ms      | 454 ms   | 53.5 MB      | 0          |
| contract-capture       | Contract capture inventory                      | 449 ms      | 449 ms   | 61.3 MB      | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 766 ms      | 766 ms   | 61.5 MB      | 0          |
| cold-import-readiness  | Cold import readiness                           | 303 ms      | 303 ms   | 61.6 MB      | 0          |
| workspace-plan         | Workspace execution plan                        | 561 ms      | 561 ms   | 2.7 MB       | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ---------------------- |
| baseline         | 1        | 951 ms   | 951 ms   | 0.3 MB       | node-boot              |
| fixture-scan     | 1        | 215 ms   | 215 ms   | 61.8 MB      | fixture-inspection     |
| target-registry  | 1        | 454 ms   | 454 ms   | 53.5 MB      | compat-report-registry |
| contract-capture | 1        | 449 ms   | 449 ms   | 61.3 MB      | contract-capture       |
| synthetic-probes | 1        | 766 ms   | 766 ms   | 61.5 MB      | synthetic-probe-plan   |
| cold-import      | 1        | 303 ms   | 303 ms   | 61.6 MB      | cold-import-readiness  |
| workspace-plan   | 1        | 561 ms   | 561 ms   | 2.7 MB       | workspace-plan         |
