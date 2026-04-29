# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 1

## Summary

| Metric                 | Value   |
| ---------------------- | ------- |
| Commands               | 9       |
| P50 wall time          | 444 ms  |
| P95 wall time          | 472 ms  |
| Max peak RSS           | 83.1 MB |
| Max RSS delta          | 18.7 MB |
| Max CPU estimate       | 517 ms  |
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
| sourceFiles           | 750   |
| observedHooks         | 76    |
| observedRegistrations | 100   |
| observedSdkImports    | 330   |
| contractProbes        | 154   |
| issueFindings         | 195   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | ---------- |
| node-boot              | Node boot                                       | 35 ms       | 35 ms    | 0 MB         | 0 MB          | 0 ms         | 0.3 MB     | 0          |
| fixture-inspection     | Fixture inspection                              | 404 ms      | 404 ms   | 76.3 MB      | 12.1 MB       | 409 ms       | 0.6 MB     | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 442 ms      | 442 ms   | 80.2 MB      | 14.8 MB       | 490 ms       | 0.5 MB     | 0          |
| contract-capture       | Contract capture inventory                      | 472 ms      | 472 ms   | 80.4 MB      | 16.3 MB       | 517 ms       | 0.5 MB     | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 444 ms      | 444 ms   | 79.4 MB      | 15.3 MB       | 473 ms       | 0.5 MB     | 0          |
| cold-import-readiness  | Cold import readiness                           | 458 ms      | 458 ms   | 82.8 MB      | 18.1 MB       | 481 ms       | 0.5 MB     | 0          |
| workspace-plan         | Workspace execution plan                        | 462 ms      | 462 ms   | 83.1 MB      | 18.7 MB       | 485 ms       | -16.3 MB   | 0          |
| platform-probes        | Platform and loader probes                      | 462 ms      | 462 ms   | 80.7 MB      | 16 MB         | 484 ms       | 0.5 MB     | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 218 ms      | 218 ms   | 58.1 MB      | 0 MB          | 109 ms       | 0.3 MB     | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | ---------------------- |
| baseline         | 1        | 35 ms    | 35 ms    | 0 MB         | 0 ms         | node-boot              |
| fixture-scan     | 1        | 404 ms   | 404 ms   | 76.3 MB      | 409 ms       | fixture-inspection     |
| target-registry  | 1        | 442 ms   | 442 ms   | 80.2 MB      | 490 ms       | compat-report-registry |
| contract-capture | 1        | 472 ms   | 472 ms   | 80.4 MB      | 517 ms       | contract-capture       |
| synthetic-probes | 1        | 444 ms   | 444 ms   | 79.4 MB      | 473 ms       | synthetic-probe-plan   |
| cold-import      | 1        | 458 ms   | 458 ms   | 82.8 MB      | 481 ms       | cold-import-readiness  |
| workspace-plan   | 1        | 462 ms   | 462 ms   | 83.1 MB      | 485 ms       | workspace-plan         |
| platform-probes  | 1        | 462 ms   | 462 ms   | 80.7 MB      | 484 ms       | platform-probes        |
| import-loop      | 1        | 218 ms   | 218 ms   | 58.1 MB      | 109 ms       | import-loop-profile    |
