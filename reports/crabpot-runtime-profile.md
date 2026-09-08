# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 5674 ms            |
| Command P95 wall time  | 5739 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 4804               |
| CPU samples            | 4804               |
| Max peak RSS           | 204.7 MB           |
| Max RSS delta          | 176.4 MB           |
| Max CPU estimate       | 6929 ms            |
| Max harness heap delta | 8.2 MB             |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 0          |
| hookNames              | 42         |
| apiRegistrars          | 57         |
| capturedRegistrars     | 31         |
| sdkExports             | 315        |
| manifestFields         | 48         |
| manifestContractFields | 22         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 59    |
| sourceFiles           | 2202  |
| observedHooks         | 110   |
| observedRegistrations | 212   |
| observedSdkImports    | 1082  |
| contractProbes        | 251   |
| issueFindings         | 358   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 30 ms       | 32 ms    | 28.3 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 5525 ms     | 5544 ms  | 193.1 MB     | 164.9 MB      | 6625 ms      | 8.2 MB     | 661/661         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 5674 ms     | 5698 ms  | 203.2 MB     | 174.9 MB      | 6729 ms      | 7.2 MB     | 679/679         | 0          |
| contract-capture       | Contract capture inventory                      | 5685 ms     | 5701 ms  | 202.8 MB     | 174.6 MB      | 6796 ms      | 1 MB       | 678/678         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 5673 ms     | 5681 ms  | 204.7 MB     | 176.4 MB      | 6789 ms      | 1 MB       | 677/677         | 0          |
| cold-import-readiness  | Cold import readiness                           | 5703 ms     | 5769 ms  | 202.7 MB     | 174.4 MB      | 6929 ms      | 1.3 MB     | 682/682         | 0          |
| workspace-plan         | Workspace execution plan                        | 5728 ms     | 5730 ms  | 201 MB       | 172.7 MB      | 6859 ms      | 1 MB       | 681/681         | 0          |
| platform-probes        | Platform and loader probes                      | 5739 ms     | 5747 ms  | 201.7 MB     | 173.5 MB      | 6879 ms      | 1.1 MB     | 685/685         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 492 ms      | 492 ms   | 64.2 MB      | 35.9 MB       | 259 ms       | 1.8 MB     | 58/58           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 30 ms    | 32 ms    | 28.3 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 5525 ms  | 5544 ms  | 193.1 MB     | 6625 ms      | 661/661         | fixture-inspection     |
| target-registry  | 1        | 5674 ms  | 5698 ms  | 203.2 MB     | 6729 ms      | 679/679         | compat-report-registry |
| contract-capture | 1        | 5685 ms  | 5701 ms  | 202.8 MB     | 6796 ms      | 678/678         | contract-capture       |
| synthetic-probes | 1        | 5673 ms  | 5681 ms  | 204.7 MB     | 6789 ms      | 677/677         | synthetic-probe-plan   |
| cold-import      | 1        | 5703 ms  | 5769 ms  | 202.7 MB     | 6929 ms      | 682/682         | cold-import-readiness  |
| workspace-plan   | 1        | 5728 ms  | 5730 ms  | 201 MB       | 6859 ms      | 681/681         | workspace-plan         |
| platform-probes  | 1        | 5739 ms  | 5747 ms  | 201.7 MB     | 6879 ms      | 685/685         | platform-probes        |
| import-loop      | 1        | 492 ms   | 492 ms   | 64.2 MB      | 259 ms       | 58/58           | import-loop-profile    |
