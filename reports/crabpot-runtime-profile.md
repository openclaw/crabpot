# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 8337 ms            |
| Command P95 wall time  | 8537 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 7050               |
| CPU samples            | 7050               |
| Max peak RSS           | 760.9 MB           |
| Max RSS delta          | 734.3 MB           |
| Max CPU estimate       | 11724 ms           |
| Max harness heap delta | 21.6 MB            |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 32         |
| hookNames              | 42         |
| apiRegistrars          | 59         |
| capturedRegistrars     | 31         |
| sdkExports             | 352        |
| manifestFields         | 57         |
| manifestContractFields | 24         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 59    |
| sourceFiles           | 2319  |
| observedHooks         | 113   |
| observedRegistrations | 218   |
| observedSdkImports    | 1223  |
| contractProbes        | 218   |
| issueFindings         | 250   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 23 ms       | 25 ms    | 33.2 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 8216 ms     | 8231 ms  | 756.7 MB     | 725.9 MB      | 11318 ms     | 21.6 MB    | 967/967         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 8537 ms     | 8595 ms  | 754.1 MB     | 724.7 MB      | 11724 ms     | 15.9 MB    | 1011/1011       | 0          |
| contract-capture       | Contract capture inventory                      | 8524 ms     | 8653 ms  | 755.5 MB     | 725.1 MB      | 11656 ms     | 16 MB      | 1008/1008       | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 8452 ms     | 8469 ms  | 756.7 MB     | 727.1 MB      | 11283 ms     | 15.7 MB    | 999/999         | 0          |
| cold-import-readiness  | Cold import readiness                           | 8275 ms     | 8391 ms  | 757.8 MB     | 728.8 MB      | 11486 ms     | 15.5 MB    | 982/982         | 0          |
| workspace-plan         | Workspace execution plan                        | 8337 ms     | 8382 ms  | 760.9 MB     | 734.3 MB      | 11547 ms     | 15.5 MB    | 984/984         | 0          |
| platform-probes        | Platform and loader probes                      | 8506 ms     | 8602 ms  | 760.6 MB     | 730.3 MB      | 11423 ms     | 15.5 MB    | 1013/1013       | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 695 ms      | 699 ms   | 77.1 MB      | 48 MB         | 384 ms       | 1.3 MB     | 83/83           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 23 ms    | 25 ms    | 33.2 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 8216 ms  | 8231 ms  | 756.7 MB     | 11318 ms     | 967/967         | fixture-inspection     |
| target-registry  | 1        | 8537 ms  | 8595 ms  | 754.1 MB     | 11724 ms     | 1011/1011       | compat-report-registry |
| contract-capture | 1        | 8524 ms  | 8653 ms  | 755.5 MB     | 11656 ms     | 1008/1008       | contract-capture       |
| synthetic-probes | 1        | 8452 ms  | 8469 ms  | 756.7 MB     | 11283 ms     | 999/999         | synthetic-probe-plan   |
| cold-import      | 1        | 8275 ms  | 8391 ms  | 757.8 MB     | 11486 ms     | 982/982         | cold-import-readiness  |
| workspace-plan   | 1        | 8337 ms  | 8382 ms  | 760.9 MB     | 11547 ms     | 984/984         | workspace-plan         |
| platform-probes  | 1        | 8506 ms  | 8602 ms  | 760.6 MB     | 11423 ms     | 1013/1013       | platform-probes        |
| import-loop      | 1        | 695 ms   | 699 ms   | 77.1 MB      | 384 ms       | 83/83           | import-loop-profile    |
