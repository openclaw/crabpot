# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 1813 ms            |
| Command P95 wall time  | 1902 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1566               |
| CPU samples            | 1566               |
| Max peak RSS           | 325.3 MB           |
| Max RSS delta          | 296.5 MB           |
| Max CPU estimate       | 2052 ms            |
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
| sourceFiles           | 1865  |
| observedHooks         | 107   |
| observedRegistrations | 206   |
| observedSdkImports    | 1247  |
| contractProbes        | 279   |
| issueFindings         | 284   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 35 ms       | 37 ms    | 29.7 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 1717 ms     | 1729 ms  | 315.3 MB     | 286.8 MB      | 1887 ms      | 6.2 MB     | 203/203         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 1808 ms     | 1818 ms  | 316.6 MB     | 288 MB        | 1990 ms      | 6.1 MB     | 216/216         | 0          |
| contract-capture       | Contract capture inventory                      | 1832 ms     | 1843 ms  | 318 MB       | 289.5 MB      | 1992 ms      | -0.3 MB    | 216/216         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 1813 ms     | 1835 ms  | 317 MB       | 288.1 MB      | 1982 ms      | 0.6 MB     | 217/217         | 0          |
| cold-import-readiness  | Cold import readiness                           | 1821 ms     | 1829 ms  | 324.2 MB     | 295.8 MB      | 1984 ms      | 0.1 MB     | 217/217         | 0          |
| workspace-plan         | Workspace execution plan                        | 1848 ms     | 1851 ms  | 324.4 MB     | 295.9 MB      | 2003 ms      | 1.6 MB     | 220/220         | 0          |
| platform-probes        | Platform and loader probes                      | 1902 ms     | 1910 ms  | 325.3 MB     | 296.5 MB      | 2052 ms      | 0.3 MB     | 226/226         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 398 ms      | 402 ms   | 60.6 MB      | 32.1 MB       | 177 ms       | 1.4 MB     | 48/48           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 35 ms    | 37 ms    | 29.7 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 1717 ms  | 1729 ms  | 315.3 MB     | 1887 ms      | 203/203         | fixture-inspection     |
| target-registry  | 1        | 1808 ms  | 1818 ms  | 316.6 MB     | 1990 ms      | 216/216         | compat-report-registry |
| contract-capture | 1        | 1832 ms  | 1843 ms  | 318 MB       | 1992 ms      | 216/216         | contract-capture       |
| synthetic-probes | 1        | 1813 ms  | 1835 ms  | 317 MB       | 1982 ms      | 217/217         | synthetic-probe-plan   |
| cold-import      | 1        | 1821 ms  | 1829 ms  | 324.2 MB     | 1984 ms      | 217/217         | cold-import-readiness  |
| workspace-plan   | 1        | 1848 ms  | 1851 ms  | 324.4 MB     | 2003 ms      | 220/220         | workspace-plan         |
| platform-probes  | 1        | 1902 ms  | 1910 ms  | 325.3 MB     | 2052 ms      | 226/226         | platform-probes        |
| import-loop      | 1        | 398 ms   | 402 ms   | 60.6 MB      | 177 ms       | 48/48           | import-loop-profile    |
