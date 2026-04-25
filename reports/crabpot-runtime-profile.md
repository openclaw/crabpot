# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric        | Value   |
| ------------- | ------- |
| Commands      | 7       |
| P50 wall time | 742 ms  |
| P95 wall time | 1273 ms |
| Max peak RSS  | 65.1 MB |

## Target OpenClaw Registry Surface

| Metric                 | Value       |
| ---------------------- | ----------- |
| status                 | ok          |
| configuredPath         | ../openclaw |
| compatRecords          | 19          |
| hookNames              | 31          |
| apiRegistrars          | 40          |
| capturedRegistrars     | 18          |
| sdkExports             | 307         |
| manifestFields         | 32          |
| manifestContractFields | 16          |

## Crabpot Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 12    |
| sourceFiles           | 201   |
| observedHooks         | 18    |
| observedRegistrations | 22    |
| observedSdkImports    | 20    |
| contractProbes        | 57    |
| issueFindings         | 58    |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ---------- |
| node-boot              | Node boot                                       | 917 ms      | 1134 ms  | 0.4 MB       | 0          |
| fixture-inspection     | Fixture inspection                              | 1273 ms     | 1397 ms  | 51.8 MB      | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 517 ms      | 1956 ms  | 65.1 MB      | 0          |
| contract-capture       | Contract capture inventory                      | 483 ms      | 522 ms   | 64.1 MB      | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 874 ms      | 2457 ms  | 0 MB         | 0          |
| cold-import-readiness  | Cold import readiness                           | 444 ms      | 604 ms   | 60.8 MB      | 0          |
| workspace-plan         | Workspace execution plan                        | 742 ms      | 1554 ms  | 64 MB        | 0          |
