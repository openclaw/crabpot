# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 1

## Summary

| Metric                 | Value   |
| ---------------------- | ------- |
| Commands               | 9       |
| P50 wall time          | 649 ms  |
| P95 wall time          | 1329 ms |
| Max peak RSS           | 68.7 MB |
| Max RSS delta          | 68.4 MB |
| Max CPU estimate       | 353 ms  |
| Max harness heap delta | 1 MB    |

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
| sourceFiles           | 385   |
| observedHooks         | 40    |
| observedRegistrations | 45    |
| observedSdkImports    | 30    |
| contractProbes        | 109   |
| issueFindings         | 111   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | ---------- |
| node-boot              | Node boot                                       | 463 ms      | 463 ms   | 0.3 MB       | 0 MB          | 0 ms         | 0.8 MB     | 0          |
| fixture-inspection     | Fixture inspection                              | 436 ms      | 436 ms   | 66.5 MB      | 10.7 MB       | 173 ms       | 0.7 MB     | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 649 ms      | 649 ms   | 67 MB        | 13.8 MB       | 269 ms       | 0.7 MB     | 0          |
| contract-capture       | Contract capture inventory                      | 549 ms      | 549 ms   | 66.5 MB      | 66.2 MB       | 243 ms       | -10.1 MB   | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 900 ms      | 900 ms   | 63.8 MB      | 63.4 MB       | 353 ms       | 0.8 MB     | 0          |
| cold-import-readiness  | Cold import readiness                           | 501 ms      | 501 ms   | 66.6 MB      | 5.7 MB        | 254 ms       | 0.7 MB     | 0          |
| workspace-plan         | Workspace execution plan                        | 750 ms      | 750 ms   | 68.7 MB      | 68.4 MB       | 314 ms       | 0.9 MB     | 0          |
| platform-probes        | Platform and loader probes                      | 716 ms      | 716 ms   | 64.5 MB      | 6.4 MB        | 255 ms       | 0.8 MB     | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 1329 ms     | 1329 ms  | 49.3 MB      | 1.2 MB        | 117 ms       | 1 MB       | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | ---------------------- |
| baseline         | 1        | 463 ms   | 463 ms   | 0.3 MB       | 0 ms         | node-boot              |
| fixture-scan     | 1        | 436 ms   | 436 ms   | 66.5 MB      | 173 ms       | fixture-inspection     |
| target-registry  | 1        | 649 ms   | 649 ms   | 67 MB        | 269 ms       | compat-report-registry |
| contract-capture | 1        | 549 ms   | 549 ms   | 66.5 MB      | 243 ms       | contract-capture       |
| synthetic-probes | 1        | 900 ms   | 900 ms   | 63.8 MB      | 353 ms       | synthetic-probe-plan   |
| cold-import      | 1        | 501 ms   | 501 ms   | 66.6 MB      | 254 ms       | cold-import-readiness  |
| workspace-plan   | 1        | 750 ms   | 750 ms   | 68.7 MB      | 314 ms       | workspace-plan         |
| platform-probes  | 1        | 716 ms   | 716 ms   | 64.5 MB      | 255 ms       | platform-probes        |
| import-loop      | 1        | 1329 ms  | 1329 ms  | 49.3 MB      | 117 ms       | import-loop-profile    |
