# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 1

## Summary

| Metric                 | Value   |
| ---------------------- | ------- |
| Commands               | 9       |
| P50 wall time          | 441 ms  |
| P95 wall time          | 456 ms  |
| Max peak RSS           | 82.6 MB |
| Max RSS delta          | 18.1 MB |
| Max CPU estimate       | 490 ms  |
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
| contractProbes        | 158   |
| issueFindings         | 160   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | ---------- |
| node-boot              | Node boot                                       | 33 ms       | 33 ms    | 0 MB         | 0 MB          | 0 ms         | 0.3 MB     | 0          |
| fixture-inspection     | Fixture inspection                              | 389 ms      | 389 ms   | 73.1 MB      | 8.9 MB        | 432 ms       | 0.6 MB     | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 440 ms      | 440 ms   | 80.2 MB      | 14.5 MB       | 488 ms       | 0.5 MB     | 0          |
| contract-capture       | Contract capture inventory                      | 456 ms      | 456 ms   | 79.7 MB      | 15.3 MB       | 490 ms       | 0.5 MB     | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 441 ms      | 441 ms   | 79.7 MB      | 15.4 MB       | 453 ms       | 0.5 MB     | 0          |
| cold-import-readiness  | Cold import readiness                           | 445 ms      | 445 ms   | 82.6 MB      | 18.1 MB       | 490 ms       | 0.5 MB     | 0          |
| workspace-plan         | Workspace execution plan                        | 442 ms      | 442 ms   | 80.5 MB      | 16 MB         | 464 ms       | 0.5 MB     | 0          |
| platform-probes        | Platform and loader probes                      | 452 ms      | 452 ms   | 80.7 MB      | 16.6 MB       | 464 ms       | 0.5 MB     | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 210 ms      | 210 ms   | 58.1 MB      | 0 MB          | 126 ms       | 0.4 MB     | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | ---------------------- |
| baseline         | 1        | 33 ms    | 33 ms    | 0 MB         | 0 ms         | node-boot              |
| fixture-scan     | 1        | 389 ms   | 389 ms   | 73.1 MB      | 432 ms       | fixture-inspection     |
| target-registry  | 1        | 440 ms   | 440 ms   | 80.2 MB      | 488 ms       | compat-report-registry |
| contract-capture | 1        | 456 ms   | 456 ms   | 79.7 MB      | 490 ms       | contract-capture       |
| synthetic-probes | 1        | 441 ms   | 441 ms   | 79.7 MB      | 453 ms       | synthetic-probe-plan   |
| cold-import      | 1        | 445 ms   | 445 ms   | 82.6 MB      | 490 ms       | cold-import-readiness  |
| workspace-plan   | 1        | 442 ms   | 442 ms   | 80.5 MB      | 464 ms       | workspace-plan         |
| platform-probes  | 1        | 452 ms   | 452 ms   | 80.7 MB      | 464 ms       | platform-probes        |
| import-loop      | 1        | 210 ms   | 210 ms   | 58.1 MB      | 126 ms       | import-loop-profile    |
