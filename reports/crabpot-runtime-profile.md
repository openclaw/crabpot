# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 1853 ms            |
| Command P95 wall time  | 1912 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1590               |
| CPU samples            | 1590               |
| Max peak RSS           | 326.5 MB           |
| Max RSS delta          | 297.7 MB           |
| Max CPU estimate       | 2069 ms            |
| Max harness heap delta | 6.4 MB             |

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
| node-boot              | Node boot                                       | 32 ms       | 36 ms    | 29.9 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 1729 ms     | 1750 ms  | 315.8 MB     | 287.4 MB      | 1904 ms      | 6.4 MB     | 205/205         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 1853 ms     | 1855 ms  | 317.3 MB     | 288.9 MB      | 2022 ms      | 6.3 MB     | 219/219         | 0          |
| contract-capture       | Contract capture inventory                      | 1861 ms     | 1869 ms  | 317 MB       | 288.4 MB      | 1996 ms      | -0.1 MB    | 220/220         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 1857 ms     | 1860 ms  | 318.3 MB     | 288.9 MB      | 2022 ms      | 0.8 MB     | 221/221         | 0          |
| cold-import-readiness  | Cold import readiness                           | 1850 ms     | 1851 ms  | 318.1 MB     | 289.6 MB      | 2006 ms      | 0.1 MB     | 220/220         | 0          |
| workspace-plan         | Workspace execution plan                        | 1879 ms     | 1901 ms  | 326.5 MB     | 297.7 MB      | 2049 ms      | 0.1 MB     | 225/225         | 0          |
| platform-probes        | Platform and loader probes                      | 1912 ms     | 1932 ms  | 324.5 MB     | 296.1 MB      | 2069 ms      | 0.4 MB     | 229/229         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 402 ms      | 407 ms   | 60.5 MB      | 32.1 MB       | 190 ms       | 1.4 MB     | 48/48           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 32 ms    | 36 ms    | 29.9 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 1729 ms  | 1750 ms  | 315.8 MB     | 1904 ms      | 205/205         | fixture-inspection     |
| target-registry  | 1        | 1853 ms  | 1855 ms  | 317.3 MB     | 2022 ms      | 219/219         | compat-report-registry |
| contract-capture | 1        | 1861 ms  | 1869 ms  | 317 MB       | 1996 ms      | 220/220         | contract-capture       |
| synthetic-probes | 1        | 1857 ms  | 1860 ms  | 318.3 MB     | 2022 ms      | 221/221         | synthetic-probe-plan   |
| cold-import      | 1        | 1850 ms  | 1851 ms  | 318.1 MB     | 2006 ms      | 220/220         | cold-import-readiness  |
| workspace-plan   | 1        | 1879 ms  | 1901 ms  | 326.5 MB     | 2049 ms      | 225/225         | workspace-plan         |
| platform-probes  | 1        | 1912 ms  | 1932 ms  | 324.5 MB     | 2069 ms      | 229/229         | platform-probes        |
| import-loop      | 1        | 402 ms   | 407 ms   | 60.5 MB      | 190 ms       | 48/48           | import-loop-profile    |
