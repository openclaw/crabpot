# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 1

## Summary

| Metric                 | Value   |
| ---------------------- | ------- |
| Commands               | 9       |
| P50 wall time          | 422 ms  |
| P95 wall time          | 450 ms  |
| Max peak RSS           | 82.7 MB |
| Max RSS delta          | 18.4 MB |
| Max CPU estimate       | 496 ms  |
| Max harness heap delta | 0.6 MB  |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 56         |
| hookNames              | 35         |
| apiRegistrars          | 48         |
| capturedRegistrars     | 26         |
| sdkExports             | 292        |
| manifestFields         | 35         |
| manifestContractFields | 17         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 29    |
| sourceFiles           | 746   |
| observedHooks         | 77    |
| observedRegistrations | 100   |
| observedSdkImports    | 382   |
| contractProbes        | 159   |
| issueFindings         | 166   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | ---------- |
| node-boot              | Node boot                                       | 37 ms       | 37 ms    | 0 MB         | 0 MB          | 0 ms         | 0.3 MB     | 0          |
| fixture-inspection     | Fixture inspection                              | 379 ms      | 379 ms   | 76.3 MB      | 11.2 MB       | 402 ms       | 0.6 MB     | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 418 ms      | 418 ms   | 73.9 MB      | 9.6 MB        | 436 ms       | 0.6 MB     | 0          |
| contract-capture       | Contract capture inventory                      | 434 ms      | 434 ms   | 81.5 MB      | 16.6 MB       | 496 ms       | 0.5 MB     | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 425 ms      | 425 ms   | 76.2 MB      | 11.8 MB       | 443 ms       | 0.5 MB     | 0          |
| cold-import-readiness  | Cold import readiness                           | 422 ms      | 422 ms   | 77.5 MB      | 12.1 MB       | 453 ms       | 0.5 MB     | 0          |
| workspace-plan         | Workspace execution plan                        | 450 ms      | 450 ms   | 82.7 MB      | 18.4 MB       | 488 ms       | 0.4 MB     | 0          |
| platform-probes        | Platform and loader probes                      | 449 ms      | 449 ms   | 80.2 MB      | 15.8 MB       | 471 ms       | 0.5 MB     | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 224 ms      | 224 ms   | 58.6 MB      | 0.6 MB        | 93 ms        | 0.4 MB     | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | ---------------------- |
| baseline         | 1        | 37 ms    | 37 ms    | 0 MB         | 0 ms         | node-boot              |
| fixture-scan     | 1        | 379 ms   | 379 ms   | 76.3 MB      | 402 ms       | fixture-inspection     |
| target-registry  | 1        | 418 ms   | 418 ms   | 73.9 MB      | 436 ms       | compat-report-registry |
| contract-capture | 1        | 434 ms   | 434 ms   | 81.5 MB      | 496 ms       | contract-capture       |
| synthetic-probes | 1        | 425 ms   | 425 ms   | 76.2 MB      | 443 ms       | synthetic-probe-plan   |
| cold-import      | 1        | 422 ms   | 422 ms   | 77.5 MB      | 453 ms       | cold-import-readiness  |
| workspace-plan   | 1        | 450 ms   | 450 ms   | 82.7 MB      | 488 ms       | workspace-plan         |
| platform-probes  | 1        | 449 ms   | 449 ms   | 80.2 MB      | 471 ms       | platform-probes        |
| import-loop      | 1        | 224 ms   | 224 ms   | 58.6 MB      | 93 ms        | import-loop-profile    |
