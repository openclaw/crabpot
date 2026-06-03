# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 1799 ms            |
| Command P95 wall time  | 1874 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1541               |
| CPU samples            | 1541               |
| Max peak RSS           | 325 MB             |
| Max RSS delta          | 296.6 MB           |
| Max CPU estimate       | 2050 ms            |
| Max harness heap delta | 6.1 MB             |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 65         |
| hookNames              | 38         |
| apiRegistrars          | 55         |
| capturedRegistrars     | 30         |
| sdkExports             | 310        |
| manifestFields         | 41         |
| manifestContractFields | 20         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 60    |
| sourceFiles           | 1769  |
| observedHooks         | 108   |
| observedRegistrations | 206   |
| observedSdkImports    | 1224  |
| contractProbes        | 281   |
| issueFindings         | 286   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 36 ms       | 52 ms    | 30.1 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 1682 ms     | 1684 ms  | 315.2 MB     | 284.9 MB      | 1871 ms      | 6 MB       | 200/200         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 1801 ms     | 1803 ms  | 316.4 MB     | 287 MB        | 1974 ms      | 6.1 MB     | 213/213         | 0          |
| contract-capture       | Contract capture inventory                      | 1799 ms     | 1801 ms  | 317.3 MB     | 288.9 MB      | 1969 ms      | -0.5 MB    | 210/210         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 1799 ms     | 1810 ms  | 317.2 MB     | 288.8 MB      | 1977 ms      | 1.2 MB     | 214/214         | 0          |
| cold-import-readiness  | Cold import readiness                           | 1811 ms     | 1813 ms  | 321.8 MB     | 293.1 MB      | 1989 ms      | 0 MB       | 214/214         | 0          |
| workspace-plan         | Workspace execution plan                        | 1854 ms     | 1864 ms  | 325 MB       | 296.6 MB      | 2050 ms      | 0.1 MB     | 219/219         | 0          |
| platform-probes        | Platform and loader probes                      | 1874 ms     | 1877 ms  | 324.1 MB     | 295.7 MB      | 2007 ms      | 0.2 MB     | 223/223         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 397 ms      | 397 ms   | 60.5 MB      | 32.1 MB       | 185 ms       | 1.5 MB     | 45/45           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 36 ms    | 52 ms    | 30.1 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 1682 ms  | 1684 ms  | 315.2 MB     | 1871 ms      | 200/200         | fixture-inspection     |
| target-registry  | 1        | 1801 ms  | 1803 ms  | 316.4 MB     | 1974 ms      | 213/213         | compat-report-registry |
| contract-capture | 1        | 1799 ms  | 1801 ms  | 317.3 MB     | 1969 ms      | 210/210         | contract-capture       |
| synthetic-probes | 1        | 1799 ms  | 1810 ms  | 317.2 MB     | 1977 ms      | 214/214         | synthetic-probe-plan   |
| cold-import      | 1        | 1811 ms  | 1813 ms  | 321.8 MB     | 1989 ms      | 214/214         | cold-import-readiness  |
| workspace-plan   | 1        | 1854 ms  | 1864 ms  | 325 MB       | 2050 ms      | 219/219         | workspace-plan         |
| platform-probes  | 1        | 1874 ms  | 1877 ms  | 324.1 MB     | 2007 ms      | 223/223         | platform-probes        |
| import-loop      | 1        | 397 ms   | 397 ms   | 60.5 MB      | 185 ms       | 45/45           | import-loop-profile    |
