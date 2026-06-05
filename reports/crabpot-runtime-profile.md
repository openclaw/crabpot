# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 1792 ms            |
| Command P95 wall time  | 1859 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1545               |
| CPU samples            | 1545               |
| Max peak RSS           | 324.8 MB           |
| Max RSS delta          | 296.4 MB           |
| Max CPU estimate       | 2040 ms            |
| Max harness heap delta | 6.2 MB             |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 66         |
| hookNames              | 39         |
| apiRegistrars          | 55         |
| capturedRegistrars     | 30         |
| sdkExports             | 316        |
| manifestFields         | 42         |
| manifestContractFields | 20         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 60    |
| sourceFiles           | 1853  |
| observedHooks         | 105   |
| observedRegistrations | 206   |
| observedSdkImports    | 1233  |
| contractProbes        | 281   |
| issueFindings         | 286   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 33 ms       | 36 ms    | 30.1 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 1671 ms     | 1675 ms  | 315.7 MB     | 287.3 MB      | 1870 ms      | 6.2 MB     | 198/198         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 1784 ms     | 1786 ms  | 316.1 MB     | 287.3 MB      | 1966 ms      | 6 MB       | 213/213         | 0          |
| contract-capture       | Contract capture inventory                      | 1820 ms     | 1823 ms  | 317.4 MB     | 289 MB        | 1971 ms      | 0.3 MB     | 214/214         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 1806 ms     | 1825 ms  | 318.1 MB     | 289.6 MB      | 1992 ms      | 1.3 MB     | 214/214         | 0          |
| cold-import-readiness  | Cold import readiness                           | 1792 ms     | 1802 ms  | 323 MB       | 294.5 MB      | 1980 ms      | 0 MB       | 213/213         | 0          |
| workspace-plan         | Workspace execution plan                        | 1832 ms     | 1863 ms  | 324.3 MB     | 295.2 MB      | 2040 ms      | 3.1 MB     | 219/219         | 0          |
| platform-probes        | Platform and loader probes                      | 1859 ms     | 1909 ms  | 324.8 MB     | 296.4 MB      | 2033 ms      | 0.2 MB     | 223/223         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 412 ms      | 423 ms   | 60.5 MB      | 32.1 MB       | 206 ms       | 1.5 MB     | 48/48           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 33 ms    | 36 ms    | 30.1 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 1671 ms  | 1675 ms  | 315.7 MB     | 1870 ms      | 198/198         | fixture-inspection     |
| target-registry  | 1        | 1784 ms  | 1786 ms  | 316.1 MB     | 1966 ms      | 213/213         | compat-report-registry |
| contract-capture | 1        | 1820 ms  | 1823 ms  | 317.4 MB     | 1971 ms      | 214/214         | contract-capture       |
| synthetic-probes | 1        | 1806 ms  | 1825 ms  | 318.1 MB     | 1992 ms      | 214/214         | synthetic-probe-plan   |
| cold-import      | 1        | 1792 ms  | 1802 ms  | 323 MB       | 1980 ms      | 213/213         | cold-import-readiness  |
| workspace-plan   | 1        | 1832 ms  | 1863 ms  | 324.3 MB     | 2040 ms      | 219/219         | workspace-plan         |
| platform-probes  | 1        | 1859 ms  | 1909 ms  | 324.8 MB     | 2033 ms      | 223/223         | platform-probes        |
| import-loop      | 1        | 412 ms   | 423 ms   | 60.5 MB      | 206 ms       | 48/48           | import-loop-profile    |
