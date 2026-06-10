# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 1689 ms            |
| Command P95 wall time  | 1757 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1459               |
| CPU samples            | 1459               |
| Max peak RSS           | 333.4 MB           |
| Max RSS delta          | 304.9 MB           |
| Max CPU estimate       | 1888 ms            |
| Max harness heap delta | 5.8 MB             |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 66         |
| hookNames              | 39         |
| apiRegistrars          | 55         |
| capturedRegistrars     | 30         |
| sdkExports             | 317        |
| manifestFields         | 42         |
| manifestContractFields | 20         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 60    |
| sourceFiles           | 1871  |
| observedHooks         | 107   |
| observedRegistrations | 206   |
| observedSdkImports    | 1248  |
| contractProbes        | 279   |
| issueFindings         | 284   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 29 ms       | 30 ms    | 28.5 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 1582 ms     | 1596 ms  | 315.2 MB     | 286.8 MB      | 1698 ms      | 5.8 MB     | 189/189         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 1687 ms     | 1687 ms  | 316.7 MB     | 288.2 MB      | 1812 ms      | 5.7 MB     | 201/201         | 0          |
| contract-capture       | Contract capture inventory                      | 1702 ms     | 1730 ms  | 318.7 MB     | 290.2 MB      | 1829 ms      | 5.7 MB     | 203/203         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 1689 ms     | 1703 ms  | 318.3 MB     | 289.8 MB      | 1827 ms      | 0.9 MB     | 202/202         | 0          |
| cold-import-readiness  | Cold import readiness                           | 1696 ms     | 1697 ms  | 324.6 MB     | 296.1 MB      | 1838 ms      | 1 MB       | 202/202         | 0          |
| workspace-plan         | Workspace execution plan                        | 1736 ms     | 1740 ms  | 324.7 MB     | 296.2 MB      | 1841 ms      | 2.7 MB     | 207/207         | 0          |
| platform-probes        | Platform and loader probes                      | 1757 ms     | 1776 ms  | 333.4 MB     | 304.9 MB      | 1888 ms      | -0.1 MB    | 210/210         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 365 ms      | 365 ms   | 60.6 MB      | 32.1 MB       | 184 ms       | 1.4 MB     | 42/42           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 29 ms    | 30 ms    | 28.5 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 1582 ms  | 1596 ms  | 315.2 MB     | 1698 ms      | 189/189         | fixture-inspection     |
| target-registry  | 1        | 1687 ms  | 1687 ms  | 316.7 MB     | 1812 ms      | 201/201         | compat-report-registry |
| contract-capture | 1        | 1702 ms  | 1730 ms  | 318.7 MB     | 1829 ms      | 203/203         | contract-capture       |
| synthetic-probes | 1        | 1689 ms  | 1703 ms  | 318.3 MB     | 1827 ms      | 202/202         | synthetic-probe-plan   |
| cold-import      | 1        | 1696 ms  | 1697 ms  | 324.6 MB     | 1838 ms      | 202/202         | cold-import-readiness  |
| workspace-plan   | 1        | 1736 ms  | 1740 ms  | 324.7 MB     | 1841 ms      | 207/207         | workspace-plan         |
| platform-probes  | 1        | 1757 ms  | 1776 ms  | 333.4 MB     | 1888 ms      | 210/210         | platform-probes        |
| import-loop      | 1        | 365 ms   | 365 ms   | 60.6 MB      | 184 ms       | 42/42           | import-loop-profile    |
