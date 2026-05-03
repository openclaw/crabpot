# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 1879 ms            |
| Command P95 wall time  | 1901 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1598               |
| CPU samples            | 1598               |
| Max peak RSS           | 437.2 MB           |
| Max RSS delta          | 408.4 MB           |
| Max CPU estimate       | 2075 ms            |
| Max harness heap delta | 6.6 MB             |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 60         |
| hookNames              | 35         |
| apiRegistrars          | 49         |
| capturedRegistrars     | 26         |
| sdkExports             | 294        |
| manifestFields         | 39         |
| manifestContractFields | 17         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 57    |
| sourceFiles           | 2970  |
| observedHooks         | 93    |
| observedRegistrations | 185   |
| observedSdkImports    | 1080  |
| contractProbes        | 299   |
| issueFindings         | 307   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 30 ms       | 32 ms    | 31.8 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 1789 ms     | 1834 ms  | 432.3 MB     | 402 MB        | 1986 ms      | 6.6 MB     | 213/213         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 1890 ms     | 1891 ms  | 430.3 MB     | 400.5 MB      | 2008 ms      | 6.1 MB     | 223/223         | 0          |
| contract-capture       | Contract capture inventory                      | 1892 ms     | 1899 ms  | 431.7 MB     | 402 MB        | 2059 ms      | 6.2 MB     | 224/224         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 1878 ms     | 1903 ms  | 430.9 MB     | 400.2 MB      | 2051 ms      | -5.7 MB    | 221/221         | 0          |
| cold-import-readiness  | Cold import readiness                           | 1879 ms     | 1880 ms  | 431.2 MB     | 402.5 MB      | 2049 ms      | 0.8 MB     | 224/224         | 0          |
| workspace-plan         | Workspace execution plan                        | 1884 ms     | 1900 ms  | 437.1 MB     | 408.1 MB      | 2062 ms      | 0.3 MB     | 226/226         | 0          |
| platform-probes        | Platform and loader probes                      | 1901 ms     | 1925 ms  | 437.2 MB     | 408.4 MB      | 2075 ms      | 0.3 MB     | 227/227         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 310 ms      | 324 ms   | 60.6 MB      | 31.8 MB       | 140 ms       | 1.1 MB     | 37/37           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 30 ms    | 32 ms    | 31.8 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 1789 ms  | 1834 ms  | 432.3 MB     | 1986 ms      | 213/213         | fixture-inspection     |
| target-registry  | 1        | 1890 ms  | 1891 ms  | 430.3 MB     | 2008 ms      | 223/223         | compat-report-registry |
| contract-capture | 1        | 1892 ms  | 1899 ms  | 431.7 MB     | 2059 ms      | 224/224         | contract-capture       |
| synthetic-probes | 1        | 1878 ms  | 1903 ms  | 430.9 MB     | 2051 ms      | 221/221         | synthetic-probe-plan   |
| cold-import      | 1        | 1879 ms  | 1880 ms  | 431.2 MB     | 2049 ms      | 224/224         | cold-import-readiness  |
| workspace-plan   | 1        | 1884 ms  | 1900 ms  | 437.1 MB     | 2062 ms      | 226/226         | workspace-plan         |
| platform-probes  | 1        | 1901 ms  | 1925 ms  | 437.2 MB     | 2075 ms      | 227/227         | platform-probes        |
| import-loop      | 1        | 310 ms   | 324 ms   | 60.6 MB      | 140 ms       | 37/37           | import-loop-profile    |
