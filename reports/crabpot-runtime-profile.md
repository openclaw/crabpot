# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 1

## Summary

| Metric        | Value   |
| ------------- | ------- |
| Commands      | 7       |
| P50 wall time | 309 ms  |
| P95 wall time | 513 ms  |
| Max peak RSS  | 66.7 MB |

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
| fixtures              | 13    |
| sourceFiles           | 207   |
| observedHooks         | 19    |
| observedRegistrations | 25    |
| observedSdkImports    | 21    |
| contractProbes        | 63    |
| issueFindings         | 64    |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ---------- |
| node-boot              | Node boot                                       | 204 ms      | 204 ms   | 2.3 MB       | 0          |
| fixture-inspection     | Fixture inspection                              | 253 ms      | 253 ms   | 64.3 MB      | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 262 ms      | 262 ms   | 63.7 MB      | 0          |
| contract-capture       | Contract capture inventory                      | 513 ms      | 513 ms   | 52.4 MB      | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 489 ms      | 489 ms   | 63.5 MB      | 0          |
| cold-import-readiness  | Cold import readiness                           | 309 ms      | 309 ms   | 59.1 MB      | 0          |
| workspace-plan         | Workspace execution plan                        | 329 ms      | 329 ms   | 66.7 MB      | 0          |
