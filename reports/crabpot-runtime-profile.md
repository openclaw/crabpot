# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 1

## Summary

| Metric        | Value   |
| ------------- | ------- |
| Commands      | 7       |
| P50 wall time | 1041 ms |
| P95 wall time | 1494 ms |
| Max peak RSS  | 71 MB   |

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
| node-boot              | Node boot                                       | 284 ms      | 284 ms   | 2.3 MB       | 0          |
| fixture-inspection     | Fixture inspection                              | 845 ms      | 845 ms   | 62 MB        | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 825 ms      | 825 ms   | 62.1 MB      | 0          |
| contract-capture       | Contract capture inventory                      | 1494 ms     | 1494 ms  | 58.6 MB      | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 1267 ms     | 1267 ms  | 71 MB        | 0          |
| cold-import-readiness  | Cold import readiness                           | 1408 ms     | 1408 ms  | 66.3 MB      | 0          |
| workspace-plan         | Workspace execution plan                        | 1041 ms     | 1041 ms  | 68 MB        | 0          |
