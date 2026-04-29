# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 1

## Summary

| Metric                 | Value   |
| ---------------------- | ------- |
| Commands               | 9       |
| P50 wall time          | 380 ms  |
| P95 wall time          | 414 ms  |
| Max peak RSS           | 84 MB   |
| Max RSS delta          | 17.9 MB |
| Max CPU estimate       | 443 ms  |
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
| sourceFiles           | 751   |
| observedHooks         | 76    |
| observedRegistrations | 100   |
| observedSdkImports    | 330   |
| contractProbes        | 153   |
| issueFindings         | 194   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | ---------- |
| node-boot              | Node boot                                       | 29 ms       | 29 ms    | 0 MB         | 0 MB          | 0 ms         | 0.3 MB     | 0          |
| fixture-inspection     | Fixture inspection                              | 333 ms      | 333 ms   | 82.5 MB      | 16.5 MB       | 374 ms       | 0.6 MB     | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 380 ms      | 380 ms   | 80.7 MB      | 15.4 MB       | 404 ms       | -10.5 MB   | 0          |
| contract-capture       | Contract capture inventory                      | 380 ms      | 380 ms   | 80.4 MB      | 14.5 MB       | 396 ms       | 0.4 MB     | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 385 ms      | 385 ms   | 79.7 MB      | 15 MB         | 407 ms       | 0.4 MB     | 0          |
| cold-import-readiness  | Cold import readiness                           | 373 ms      | 373 ms   | 84 MB        | 17.9 MB       | 404 ms       | 0.4 MB     | 0          |
| workspace-plan         | Workspace execution plan                        | 414 ms      | 414 ms   | 73 MB        | 8.7 MB        | 443 ms       | 0.5 MB     | 0          |
| platform-probes        | Platform and loader probes                      | 396 ms      | 396 ms   | 77.9 MB      | 13 MB         | 388 ms       | 0.4 MB     | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 195 ms      | 195 ms   | 58.2 MB      | 0 MB          | 98 ms        | 0.2 MB     | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | ---------------------- |
| baseline         | 1        | 29 ms    | 29 ms    | 0 MB         | 0 ms         | node-boot              |
| fixture-scan     | 1        | 333 ms   | 333 ms   | 82.5 MB      | 374 ms       | fixture-inspection     |
| target-registry  | 1        | 380 ms   | 380 ms   | 80.7 MB      | 404 ms       | compat-report-registry |
| contract-capture | 1        | 380 ms   | 380 ms   | 80.4 MB      | 396 ms       | contract-capture       |
| synthetic-probes | 1        | 385 ms   | 385 ms   | 79.7 MB      | 407 ms       | synthetic-probe-plan   |
| cold-import      | 1        | 373 ms   | 373 ms   | 84 MB        | 404 ms       | cold-import-readiness  |
| workspace-plan   | 1        | 414 ms   | 414 ms   | 73 MB        | 443 ms       | workspace-plan         |
| platform-probes  | 1        | 396 ms   | 396 ms   | 77.9 MB      | 388 ms       | platform-probes        |
| import-loop      | 1        | 195 ms   | 195 ms   | 58.2 MB      | 98 ms        | import-loop-profile    |
