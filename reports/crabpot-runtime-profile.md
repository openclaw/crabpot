# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 1835 ms            |
| Command P95 wall time  | 1876 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1577               |
| CPU samples            | 1577               |
| Max peak RSS           | 325.7 MB           |
| Max RSS delta          | 297.3 MB           |
| Max CPU estimate       | 2128 ms            |
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
| node-boot              | Node boot                                       | 36 ms       | 38 ms    | 29.5 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 1730 ms     | 1733 ms  | 315.4 MB     | 287 MB        | 1891 ms      | 6.4 MB     | 204/204         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 1830 ms     | 1840 ms  | 318.1 MB     | 289 MB        | 2006 ms      | 6.2 MB     | 218/218         | 0          |
| contract-capture       | Contract capture inventory                      | 1836 ms     | 1841 ms  | 317.1 MB     | 288.7 MB      | 1998 ms      | 0.7 MB     | 217/217         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 1835 ms     | 1856 ms  | 317.7 MB     | 288.8 MB      | 2007 ms      | 0.1 MB     | 218/218         | 0          |
| cold-import-readiness  | Cold import readiness                           | 1851 ms     | 1936 ms  | 324 MB       | 295.6 MB      | 2128 ms      | 1.6 MB     | 223/223         | 0          |
| workspace-plan         | Workspace execution plan                        | 1859 ms     | 1884 ms  | 324.2 MB     | 295.7 MB      | 2037 ms      | 3.1 MB     | 222/222         | 0          |
| platform-probes        | Platform and loader probes                      | 1876 ms     | 1902 ms  | 325.7 MB     | 297.3 MB      | 2054 ms      | 0.3 MB     | 224/224         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 404 ms      | 405 ms   | 60.5 MB      | 32.1 MB       | 199 ms       | 1.5 MB     | 48/48           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 36 ms    | 38 ms    | 29.5 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 1730 ms  | 1733 ms  | 315.4 MB     | 1891 ms      | 204/204         | fixture-inspection     |
| target-registry  | 1        | 1830 ms  | 1840 ms  | 318.1 MB     | 2006 ms      | 218/218         | compat-report-registry |
| contract-capture | 1        | 1836 ms  | 1841 ms  | 317.1 MB     | 1998 ms      | 217/217         | contract-capture       |
| synthetic-probes | 1        | 1835 ms  | 1856 ms  | 317.7 MB     | 2007 ms      | 218/218         | synthetic-probe-plan   |
| cold-import      | 1        | 1851 ms  | 1936 ms  | 324 MB       | 2128 ms      | 223/223         | cold-import-readiness  |
| workspace-plan   | 1        | 1859 ms  | 1884 ms  | 324.2 MB     | 2037 ms      | 222/222         | workspace-plan         |
| platform-probes  | 1        | 1876 ms  | 1902 ms  | 325.7 MB     | 2054 ms      | 224/224         | platform-probes        |
| import-loop      | 1        | 404 ms   | 405 ms   | 60.5 MB      | 199 ms       | 48/48           | import-loop-profile    |
