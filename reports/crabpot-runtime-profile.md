# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 1

## Summary

| Metric                 | Value   |
| ---------------------- | ------- |
| Commands               | 9       |
| P50 wall time          | 377 ms  |
| P95 wall time          | 386 ms  |
| Max peak RSS           | 85 MB   |
| Max RSS delta          | 18.7 MB |
| Max CPU estimate       | 399 ms  |
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
| contractProbes        | 154   |
| issueFindings         | 195   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | ---------- |
| node-boot              | Node boot                                       | 29 ms       | 29 ms    | 0 MB         | 0 MB          | 0 ms         | 0.3 MB     | 0          |
| fixture-inspection     | Fixture inspection                              | 326 ms      | 326 ms   | 84.8 MB      | 18.1 MB       | 319 ms       | 0.5 MB     | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 374 ms      | 374 ms   | 82.7 MB      | 16.6 MB       | 388 ms       | 0.4 MB     | 0          |
| contract-capture       | Contract capture inventory                      | 386 ms      | 386 ms   | 78.3 MB      | 13.9 MB       | 378 ms       | 0.4 MB     | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 383 ms      | 383 ms   | 82.4 MB      | 17.8 MB       | 391 ms       | 0.4 MB     | 0          |
| cold-import-readiness  | Cold import readiness                           | 378 ms      | 378 ms   | 82.9 MB      | 17 MB         | 380 ms       | 0.4 MB     | 0          |
| workspace-plan         | Workspace execution plan                        | 377 ms      | 377 ms   | 79.7 MB      | 13.5 MB       | 381 ms       | 0.4 MB     | 0          |
| platform-probes        | Platform and loader probes                      | 385 ms      | 385 ms   | 85 MB        | 18.7 MB       | 399 ms       | 0.4 MB     | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 195 ms      | 195 ms   | 58.1 MB      | 0 MB          | 89 ms        | 0.3 MB     | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | ---------------------- |
| baseline         | 1        | 29 ms    | 29 ms    | 0 MB         | 0 ms         | node-boot              |
| fixture-scan     | 1        | 326 ms   | 326 ms   | 84.8 MB      | 319 ms       | fixture-inspection     |
| target-registry  | 1        | 374 ms   | 374 ms   | 82.7 MB      | 388 ms       | compat-report-registry |
| contract-capture | 1        | 386 ms   | 386 ms   | 78.3 MB      | 378 ms       | contract-capture       |
| synthetic-probes | 1        | 383 ms   | 383 ms   | 82.4 MB      | 391 ms       | synthetic-probe-plan   |
| cold-import      | 1        | 378 ms   | 378 ms   | 82.9 MB      | 380 ms       | cold-import-readiness  |
| workspace-plan   | 1        | 377 ms   | 377 ms   | 79.7 MB      | 381 ms       | workspace-plan         |
| platform-probes  | 1        | 385 ms   | 385 ms   | 85 MB        | 399 ms       | platform-probes        |
| import-loop      | 1        | 195 ms   | 195 ms   | 58.1 MB      | 89 ms        | import-loop-profile    |
