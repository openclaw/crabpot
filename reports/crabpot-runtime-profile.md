# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 1

## Summary

| Metric        | Value    |
| ------------- | -------- |
| Commands      | 7        |
| P50 wall time | 3492 ms  |
| P95 wall time | 13398 ms |
| Max peak RSS  | 66.7 MB  |

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
| contractProbes        | 76    |
| issueFindings         | 77    |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ---------- |
| node-boot              | Node boot                                       | 2536 ms     | 2536 ms  | 24.6 MB      | 0          |
| fixture-inspection     | Fixture inspection                              | 1272 ms     | 1272 ms  | 66.7 MB      | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2470 ms     | 2470 ms  | 0 MB         | 0          |
| contract-capture       | Contract capture inventory                      | 6114 ms     | 6114 ms  | 0 MB         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 3492 ms     | 3492 ms  | 0 MB         | 0          |
| cold-import-readiness  | Cold import readiness                           | 6155 ms     | 6155 ms  | 0 MB         | 0          |
| workspace-plan         | Workspace execution plan                        | 13398 ms    | 13398 ms | 51.5 MB      | 0          |
