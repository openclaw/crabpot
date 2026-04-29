# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 1

## Summary

| Metric                 | Value   |
| ---------------------- | ------- |
| Commands               | 9       |
| P50 wall time          | 337 ms  |
| P95 wall time          | 356 ms  |
| Max peak RSS           | 80.2 MB |
| Max RSS delta          | 11.8 MB |
| Max CPU estimate       | 395 ms  |
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
| sourceFiles           | 752   |
| observedHooks         | 76    |
| observedRegistrations | 100   |
| observedSdkImports    | 330   |
| contractProbes        | 153   |
| issueFindings         | 194   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | ---------- |
| node-boot              | Node boot                                       | 28 ms       | 28 ms    | 0 MB         | 0 MB          | 0 ms         | 0.2 MB     | 0          |
| fixture-inspection     | Fixture inspection                              | 297 ms      | 297 ms   | 71.4 MB      | 1.3 MB        | 312 ms       | 0.4 MB     | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 336 ms      | 336 ms   | 79 MB        | 11.4 MB       | 371 ms       | 0.4 MB     | 0          |
| contract-capture       | Contract capture inventory                      | 337 ms      | 337 ms   | 80.2 MB      | 9.6 MB        | 355 ms       | 0.4 MB     | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 346 ms      | 346 ms   | 79.3 MB      | 11.8 MB       | 369 ms       | 0.5 MB     | 0          |
| cold-import-readiness  | Cold import readiness                           | 337 ms      | 337 ms   | 79.5 MB      | 9.4 MB        | 372 ms       | 0.4 MB     | 0          |
| workspace-plan         | Workspace execution plan                        | 344 ms      | 344 ms   | 79.8 MB      | 9.7 MB        | 348 ms       | 0.5 MB     | 0          |
| platform-probes        | Platform and loader probes                      | 356 ms      | 356 ms   | 80.1 MB      | 11.5 MB       | 395 ms       | 0.4 MB     | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 183 ms      | 183 ms   | 58.4 MB      | 0 MB          | 83 ms        | 0.2 MB     | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | ---------------------- |
| baseline         | 1        | 28 ms    | 28 ms    | 0 MB         | 0 ms         | node-boot              |
| fixture-scan     | 1        | 297 ms   | 297 ms   | 71.4 MB      | 312 ms       | fixture-inspection     |
| target-registry  | 1        | 336 ms   | 336 ms   | 79 MB        | 371 ms       | compat-report-registry |
| contract-capture | 1        | 337 ms   | 337 ms   | 80.2 MB      | 355 ms       | contract-capture       |
| synthetic-probes | 1        | 346 ms   | 346 ms   | 79.3 MB      | 369 ms       | synthetic-probe-plan   |
| cold-import      | 1        | 337 ms   | 337 ms   | 79.5 MB      | 372 ms       | cold-import-readiness  |
| workspace-plan   | 1        | 344 ms   | 344 ms   | 79.8 MB      | 348 ms       | workspace-plan         |
| platform-probes  | 1        | 356 ms   | 356 ms   | 80.1 MB      | 395 ms       | platform-probes        |
| import-loop      | 1        | 183 ms   | 183 ms   | 58.4 MB      | 83 ms        | import-loop-profile    |
