# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 1

## Summary

| Metric                 | Value   |
| ---------------------- | ------- |
| Commands               | 9       |
| P50 wall time          | 423 ms  |
| P95 wall time          | 444 ms  |
| Max peak RSS           | 81.7 MB |
| Max RSS delta          | 17.7 MB |
| Max CPU estimate       | 469 ms  |
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
| node-boot              | Node boot                                       | 36 ms       | 36 ms    | 0 MB         | 0 MB          | 0 ms         | 0.3 MB     | 0          |
| fixture-inspection     | Fixture inspection                              | 371 ms      | 371 ms   | 76 MB        | 11 MB         | 412 ms       | 0.5 MB     | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 423 ms      | 423 ms   | 74.9 MB      | 10.5 MB       | 446 ms       | 0.6 MB     | 0          |
| contract-capture       | Contract capture inventory                      | 418 ms      | 418 ms   | 77.8 MB      | 13.5 MB       | 464 ms       | 0.5 MB     | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 438 ms      | 438 ms   | 79.8 MB      | 15.4 MB       | 469 ms       | 0.5 MB     | 0          |
| cold-import-readiness  | Cold import readiness                           | 427 ms      | 427 ms   | 80.4 MB      | 16 MB         | 457 ms       | 0.5 MB     | 0          |
| workspace-plan         | Workspace execution plan                        | 441 ms      | 441 ms   | 81.7 MB      | 15.8 MB       | 465 ms       | 0.5 MB     | 0          |
| platform-probes        | Platform and loader probes                      | 444 ms      | 444 ms   | 81.5 MB      | 17.7 MB       | 465 ms       | 0.4 MB     | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 225 ms      | 225 ms   | 58.6 MB      | 0.5 MB        | 109 ms       | 0.3 MB     | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | ---------------------- |
| baseline         | 1        | 36 ms    | 36 ms    | 0 MB         | 0 ms         | node-boot              |
| fixture-scan     | 1        | 371 ms   | 371 ms   | 76 MB        | 412 ms       | fixture-inspection     |
| target-registry  | 1        | 423 ms   | 423 ms   | 74.9 MB      | 446 ms       | compat-report-registry |
| contract-capture | 1        | 418 ms   | 418 ms   | 77.8 MB      | 464 ms       | contract-capture       |
| synthetic-probes | 1        | 438 ms   | 438 ms   | 79.8 MB      | 469 ms       | synthetic-probe-plan   |
| cold-import      | 1        | 427 ms   | 427 ms   | 80.4 MB      | 457 ms       | cold-import-readiness  |
| workspace-plan   | 1        | 441 ms   | 441 ms   | 81.7 MB      | 465 ms       | workspace-plan         |
| platform-probes  | 1        | 444 ms   | 444 ms   | 81.5 MB      | 465 ms       | platform-probes        |
| import-loop      | 1        | 225 ms   | 225 ms   | 58.6 MB      | 109 ms       | import-loop-profile    |
