# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 1

## Summary

| Metric                 | Value   |
| ---------------------- | ------- |
| Commands               | 9       |
| P50 wall time          | 434 ms  |
| P95 wall time          | 457 ms  |
| Max peak RSS           | 80.8 MB |
| Max RSS delta          | 16.3 MB |
| Max CPU estimate       | 495 ms  |
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
| sourceFiles           | 751   |
| observedHooks         | 76    |
| observedRegistrations | 100   |
| observedSdkImports    | 330   |
| contractProbes        | 154   |
| issueFindings         | 195   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | ---------- |
| node-boot              | Node boot                                       | 32 ms       | 32 ms    | 0 MB         | 0 MB          | 0 ms         | 0.3 MB     | 0          |
| fixture-inspection     | Fixture inspection                              | 375 ms      | 375 ms   | 72.5 MB      | 8.3 MB        | 391 ms       | 0.5 MB     | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 427 ms      | 427 ms   | 80.4 MB      | 15.1 MB       | 454 ms       | 0.5 MB     | 0          |
| contract-capture       | Contract capture inventory                      | 442 ms      | 442 ms   | 79.9 MB      | 16.3 MB       | 459 ms       | 0.5 MB     | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 454 ms      | 454 ms   | 80 MB        | 16.2 MB       | 495 ms       | 0.5 MB     | 0          |
| cold-import-readiness  | Cold import readiness                           | 434 ms      | 434 ms   | 80.3 MB      | 16.1 MB       | 483 ms       | 0.5 MB     | 0          |
| workspace-plan         | Workspace execution plan                        | 457 ms      | 457 ms   | 79.5 MB      | 15.6 MB       | 480 ms       | 0.5 MB     | 0          |
| platform-probes        | Platform and loader probes                      | 451 ms      | 451 ms   | 80.8 MB      | 16.1 MB       | 470 ms       | 0.5 MB     | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 214 ms      | 214 ms   | 58.2 MB      | 0 MB          | 117 ms       | -16.3 MB   | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | ---------------------- |
| baseline         | 1        | 32 ms    | 32 ms    | 0 MB         | 0 ms         | node-boot              |
| fixture-scan     | 1        | 375 ms   | 375 ms   | 72.5 MB      | 391 ms       | fixture-inspection     |
| target-registry  | 1        | 427 ms   | 427 ms   | 80.4 MB      | 454 ms       | compat-report-registry |
| contract-capture | 1        | 442 ms   | 442 ms   | 79.9 MB      | 459 ms       | contract-capture       |
| synthetic-probes | 1        | 454 ms   | 454 ms   | 80 MB        | 495 ms       | synthetic-probe-plan   |
| cold-import      | 1        | 434 ms   | 434 ms   | 80.3 MB      | 483 ms       | cold-import-readiness  |
| workspace-plan   | 1        | 457 ms   | 457 ms   | 79.5 MB      | 480 ms       | workspace-plan         |
| platform-probes  | 1        | 451 ms   | 451 ms   | 80.8 MB      | 470 ms       | platform-probes        |
| import-loop      | 1        | 214 ms   | 214 ms   | 58.2 MB      | 117 ms       | import-loop-profile    |
