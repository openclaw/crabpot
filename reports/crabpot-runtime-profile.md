# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 7426 ms            |
| Command P95 wall time  | 8357 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 6411               |
| CPU samples            | 6411               |
| Max peak RSS           | 755.1 MB           |
| Max RSS delta          | 727.3 MB           |
| Max CPU estimate       | 11153 ms           |
| Max harness heap delta | 21.2 MB            |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 34         |
| hookNames              | 42         |
| apiRegistrars          | 57         |
| capturedRegistrars     | 31         |
| sdkExports             | 338        |
| manifestFields         | 52         |
| manifestContractFields | 22         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 59    |
| sourceFiles           | 2279  |
| observedHooks         | 113   |
| observedRegistrations | 217   |
| observedSdkImports    | 1181  |
| contractProbes        | 237   |
| issueFindings         | 269   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 19 ms       | 23 ms    | 32.3 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 7289 ms     | 7956 ms  | 754.1 MB     | 725.7 MB      | 10892 ms     | 21.2 MB    | 886/886         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 7553 ms     | 7655 ms  | 754.2 MB     | 725.3 MB      | 10441 ms     | 14.8 MB    | 897/897         | 0          |
| contract-capture       | Contract capture inventory                      | 7426 ms     | 7493 ms  | 754.5 MB     | 724.3 MB      | 10213 ms     | 14.1 MB    | 883/883         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 7616 ms     | 7630 ms  | 754 MB       | 723.7 MB      | 10221 ms     | 14.3 MB    | 902/902         | 0          |
| cold-import-readiness  | Cold import readiness                           | 7404 ms     | 7422 ms  | 754.2 MB     | 726.2 MB      | 10172 ms     | 13.9 MB    | 880/880         | 0          |
| workspace-plan         | Workspace execution plan                        | 7701 ms     | 7753 ms  | 754.4 MB     | 725.5 MB      | 10635 ms     | 14.5 MB    | 909/909         | 0          |
| platform-probes        | Platform and loader probes                      | 8357 ms     | 8449 ms  | 755.1 MB     | 727.3 MB      | 11153 ms     | 15.6 MB    | 974/974         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 638 ms      | 668 ms   | 77.6 MB      | 51 MB         | 350 ms       | 1.3 MB     | 77/77           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 19 ms    | 23 ms    | 32.3 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 7289 ms  | 7956 ms  | 754.1 MB     | 10892 ms     | 886/886         | fixture-inspection     |
| target-registry  | 1        | 7553 ms  | 7655 ms  | 754.2 MB     | 10441 ms     | 897/897         | compat-report-registry |
| contract-capture | 1        | 7426 ms  | 7493 ms  | 754.5 MB     | 10213 ms     | 883/883         | contract-capture       |
| synthetic-probes | 1        | 7616 ms  | 7630 ms  | 754 MB       | 10221 ms     | 902/902         | synthetic-probe-plan   |
| cold-import      | 1        | 7404 ms  | 7422 ms  | 754.2 MB     | 10172 ms     | 880/880         | cold-import-readiness  |
| workspace-plan   | 1        | 7701 ms  | 7753 ms  | 754.4 MB     | 10635 ms     | 909/909         | workspace-plan         |
| platform-probes  | 1        | 8357 ms  | 8449 ms  | 755.1 MB     | 11153 ms     | 974/974         | platform-probes        |
| import-loop      | 1        | 638 ms   | 668 ms   | 77.6 MB      | 350 ms       | 77/77           | import-loop-profile    |
