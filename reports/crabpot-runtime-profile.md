# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 1

## Summary

| Metric                 | Value   |
| ---------------------- | ------- |
| Commands               | 9       |
| P50 wall time          | 466 ms  |
| P95 wall time          | 533 ms  |
| Max peak RSS           | 85.3 MB |
| Max RSS delta          | 20.8 MB |
| Max CPU estimate       | 596 ms  |
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
| node-boot              | Node boot                                       | 37 ms       | 37 ms    | 0 MB         | 0 MB          | 0 ms         | 0.3 MB     | 0          |
| fixture-inspection     | Fixture inspection                              | 423 ms      | 423 ms   | 71.5 MB      | 7.3 MB        | 450 ms       | 0.6 MB     | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 466 ms      | 466 ms   | 79.9 MB      | 15.8 MB       | 502 ms       | 0.5 MB     | 0          |
| contract-capture       | Contract capture inventory                      | 464 ms      | 464 ms   | 79.7 MB      | 15.9 MB       | 491 ms       | 0.5 MB     | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 478 ms      | 478 ms   | 80.2 MB      | 15.7 MB       | 527 ms       | 0.5 MB     | 0          |
| cold-import-readiness  | Cold import readiness                           | 482 ms      | 482 ms   | 79.5 MB      | 14.9 MB       | 509 ms       | 0.5 MB     | 0          |
| workspace-plan         | Workspace execution plan                        | 481 ms      | 481 ms   | 80.2 MB      | 16.2 MB       | 529 ms       | 0.5 MB     | 0          |
| platform-probes        | Platform and loader probes                      | 533 ms      | 533 ms   | 85.3 MB      | 20.8 MB       | 596 ms       | 0.6 MB     | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 226 ms      | 226 ms   | 58.6 MB      | 0.5 MB        | 96 ms        | 0.3 MB     | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | ---------------------- |
| baseline         | 1        | 37 ms    | 37 ms    | 0 MB         | 0 ms         | node-boot              |
| fixture-scan     | 1        | 423 ms   | 423 ms   | 71.5 MB      | 450 ms       | fixture-inspection     |
| target-registry  | 1        | 466 ms   | 466 ms   | 79.9 MB      | 502 ms       | compat-report-registry |
| contract-capture | 1        | 464 ms   | 464 ms   | 79.7 MB      | 491 ms       | contract-capture       |
| synthetic-probes | 1        | 478 ms   | 478 ms   | 80.2 MB      | 527 ms       | synthetic-probe-plan   |
| cold-import      | 1        | 482 ms   | 482 ms   | 79.5 MB      | 509 ms       | cold-import-readiness  |
| workspace-plan   | 1        | 481 ms   | 481 ms   | 80.2 MB      | 529 ms       | workspace-plan         |
| platform-probes  | 1        | 533 ms   | 533 ms   | 85.3 MB      | 596 ms       | platform-probes        |
| import-loop      | 1        | 226 ms   | 226 ms   | 58.6 MB      | 96 ms        | import-loop-profile    |
