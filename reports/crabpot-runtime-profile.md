# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 1

## Summary

| Metric                 | Value   |
| ---------------------- | ------- |
| Commands               | 9       |
| P50 wall time          | 442 ms  |
| P95 wall time          | 482 ms  |
| Max peak RSS           | 80.2 MB |
| Max RSS delta          | 15.8 MB |
| Max CPU estimate       | 535 ms  |
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
| contractProbes        | 158   |
| issueFindings         | 199   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | ---------- |
| node-boot              | Node boot                                       | 32 ms       | 32 ms    | 0 MB         | 0 MB          | 0 ms         | 0.2 MB     | 0          |
| fixture-inspection     | Fixture inspection                              | 389 ms      | 389 ms   | 72.3 MB      | 8 MB          | 398 ms       | 0.5 MB     | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 442 ms      | 442 ms   | 80.2 MB      | 15.5 MB       | 468 ms       | 0.5 MB     | 0          |
| contract-capture       | Contract capture inventory                      | 469 ms      | 469 ms   | 79.6 MB      | 15.7 MB       | 502 ms       | 0.5 MB     | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 462 ms      | 462 ms   | 80 MB        | 15.8 MB       | 494 ms       | 0.5 MB     | 0          |
| cold-import-readiness  | Cold import readiness                           | 442 ms      | 442 ms   | 80.2 MB      | 15 MB         | 492 ms       | 0.5 MB     | 0          |
| workspace-plan         | Workspace execution plan                        | 482 ms      | 482 ms   | 79.8 MB      | 15.5 MB       | 535 ms       | 0.5 MB     | 0          |
| platform-probes        | Platform and loader probes                      | 465 ms      | 465 ms   | 80.2 MB      | 15.5 MB       | 492 ms       | 0.5 MB     | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 219 ms      | 219 ms   | 58.2 MB      | 0 MB          | 99 ms        | 0.3 MB     | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | ---------------------- |
| baseline         | 1        | 32 ms    | 32 ms    | 0 MB         | 0 ms         | node-boot              |
| fixture-scan     | 1        | 389 ms   | 389 ms   | 72.3 MB      | 398 ms       | fixture-inspection     |
| target-registry  | 1        | 442 ms   | 442 ms   | 80.2 MB      | 468 ms       | compat-report-registry |
| contract-capture | 1        | 469 ms   | 469 ms   | 79.6 MB      | 502 ms       | contract-capture       |
| synthetic-probes | 1        | 462 ms   | 462 ms   | 80 MB        | 494 ms       | synthetic-probe-plan   |
| cold-import      | 1        | 442 ms   | 442 ms   | 80.2 MB      | 492 ms       | cold-import-readiness  |
| workspace-plan   | 1        | 482 ms   | 482 ms   | 79.8 MB      | 535 ms       | workspace-plan         |
| platform-probes  | 1        | 465 ms   | 465 ms   | 80.2 MB      | 492 ms       | platform-probes        |
| import-loop      | 1        | 219 ms   | 219 ms   | 58.2 MB      | 99 ms        | import-loop-profile    |
