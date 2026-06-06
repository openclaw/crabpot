# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 1858 ms            |
| Command P95 wall time  | 1907 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1591               |
| CPU samples            | 1591               |
| Max peak RSS           | 324.6 MB           |
| Max RSS delta          | 295.9 MB           |
| Max CPU estimate       | 2105 ms            |
| Max harness heap delta | 6.3 MB             |

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
| sourceFiles           | 1854  |
| observedHooks         | 105   |
| observedRegistrations | 206   |
| observedSdkImports    | 1232  |
| contractProbes        | 279   |
| issueFindings         | 284   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 33 ms       | 38 ms    | 29.8 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 1718 ms     | 1731 ms  | 315.1 MB     | 285.9 MB      | 1890 ms      | 6.2 MB     | 203/203         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 1862 ms     | 1878 ms  | 317.6 MB     | 289.2 MB      | 2055 ms      | 6.3 MB     | 222/222         | 0          |
| contract-capture       | Contract capture inventory                      | 1883 ms     | 1902 ms  | 318 MB       | 289.1 MB      | 2031 ms      | 0 MB       | 222/222         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 1858 ms     | 1869 ms  | 317.9 MB     | 289.3 MB      | 2022 ms      | 0.8 MB     | 221/221         | 0          |
| cold-import-readiness  | Cold import readiness                           | 1830 ms     | 1847 ms  | 323.3 MB     | 294 MB        | 2010 ms      | 0.2 MB     | 219/219         | 0          |
| workspace-plan         | Workspace execution plan                        | 1901 ms     | 1915 ms  | 324.1 MB     | 295.7 MB      | 2105 ms      | 0.3 MB     | 226/226         | 0          |
| platform-probes        | Platform and loader probes                      | 1907 ms     | 1920 ms  | 324.6 MB     | 295.9 MB      | 2100 ms      | 0.3 MB     | 227/227         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 416 ms      | 428 ms   | 60.9 MB      | 32.5 MB       | 201 ms       | 1.4 MB     | 48/48           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 33 ms    | 38 ms    | 29.8 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 1718 ms  | 1731 ms  | 315.1 MB     | 1890 ms      | 203/203         | fixture-inspection     |
| target-registry  | 1        | 1862 ms  | 1878 ms  | 317.6 MB     | 2055 ms      | 222/222         | compat-report-registry |
| contract-capture | 1        | 1883 ms  | 1902 ms  | 318 MB       | 2031 ms      | 222/222         | contract-capture       |
| synthetic-probes | 1        | 1858 ms  | 1869 ms  | 317.9 MB     | 2022 ms      | 221/221         | synthetic-probe-plan   |
| cold-import      | 1        | 1830 ms  | 1847 ms  | 323.3 MB     | 2010 ms      | 219/219         | cold-import-readiness  |
| workspace-plan   | 1        | 1901 ms  | 1915 ms  | 324.1 MB     | 2105 ms      | 226/226         | workspace-plan         |
| platform-probes  | 1        | 1907 ms  | 1920 ms  | 324.6 MB     | 2100 ms      | 227/227         | platform-probes        |
| import-loop      | 1        | 416 ms   | 428 ms   | 60.9 MB      | 201 ms       | 48/48           | import-loop-profile    |
