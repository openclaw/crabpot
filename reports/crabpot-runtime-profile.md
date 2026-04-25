# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 1

## Summary

| Metric        | Value   |
| ------------- | ------- |
| Commands      | 7       |
| P50 wall time | 219 ms  |
| P95 wall time | 236 ms  |
| Max peak RSS  | 66.7 MB |

## Target OpenClaw Registry Surface

| Metric                 | Value       |
| ---------------------- | ----------- |
| status                 | ok          |
| configuredPath         | ../openclaw |
| compatRecords          | 19          |
| hookNames              | 31          |
| apiRegistrars          | 40          |
| capturedRegistrars     | 18          |
| sdkExports             | 306         |
| manifestFields         | 32          |
| manifestContractFields | 16          |

## Crabpot Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 11    |
| sourceFiles           | 181   |
| observedHooks         | 8     |
| observedRegistrations | 20    |
| observedSdkImports    | 19    |
| contractProbes        | 50    |
| issueFindings         | 51    |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ---------- |
| node-boot              | Node boot                                       | 130 ms      | 130 ms   | 2.5 MB       | 0          |
| fixture-inspection     | Fixture inspection                              | 236 ms      | 236 ms   | 61.8 MB      | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 226 ms      | 226 ms   | 60.5 MB      | 0          |
| contract-capture       | Contract capture inventory                      | 219 ms      | 219 ms   | 66.7 MB      | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 169 ms      | 169 ms   | 51.1 MB      | 0          |
| cold-import-readiness  | Cold import readiness                           | 223 ms      | 223 ms   | 48 MB        | 0          |
| workspace-plan         | Workspace execution plan                        | 184 ms      | 184 ms   | 66.3 MB      | 0          |
