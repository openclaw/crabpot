# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 1876 ms            |
| Command P95 wall time  | 1976 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1619               |
| CPU samples            | 1619               |
| Max peak RSS           | 326.7 MB           |
| Max RSS delta          | 298.3 MB           |
| Max CPU estimate       | 2187 ms            |
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
| sourceFiles           | 1854  |
| observedHooks         | 105   |
| observedRegistrations | 206   |
| observedSdkImports    | 1233  |
| contractProbes        | 279   |
| issueFindings         | 284   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 35 ms       | 35 ms    | 30.3 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 1756 ms     | 1783 ms  | 316.6 MB     | 288.1 MB      | 1967 ms      | 6.4 MB     | 209/209         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 1867 ms     | 1907 ms  | 318.5 MB     | 290.1 MB      | 2073 ms      | 6.3 MB     | 223/223         | 0          |
| contract-capture       | Contract capture inventory                      | 1881 ms     | 1919 ms  | 317.4 MB     | 288.7 MB      | 2051 ms      | -0.1 MB    | 223/223         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 1876 ms     | 1912 ms  | 318 MB       | 289.6 MB      | 2076 ms      | 0.8 MB     | 223/223         | 0          |
| cold-import-readiness  | Cold import readiness                           | 1880 ms     | 1880 ms  | 318.5 MB     | 290.1 MB      | 2025 ms      | 0.2 MB     | 223/223         | 0          |
| workspace-plan         | Workspace execution plan                        | 1976 ms     | 2000 ms  | 324.9 MB     | 296.5 MB      | 2187 ms      | 1.8 MB     | 234/234         | 0          |
| platform-probes        | Platform and loader probes                      | 1937 ms     | 1965 ms  | 326.7 MB     | 298.3 MB      | 2093 ms      | 0.4 MB     | 232/232         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 421 ms      | 424 ms   | 60.5 MB      | 32.1 MB       | 197 ms       | 1.5 MB     | 49/49           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 35 ms    | 35 ms    | 30.3 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 1756 ms  | 1783 ms  | 316.6 MB     | 1967 ms      | 209/209         | fixture-inspection     |
| target-registry  | 1        | 1867 ms  | 1907 ms  | 318.5 MB     | 2073 ms      | 223/223         | compat-report-registry |
| contract-capture | 1        | 1881 ms  | 1919 ms  | 317.4 MB     | 2051 ms      | 223/223         | contract-capture       |
| synthetic-probes | 1        | 1876 ms  | 1912 ms  | 318 MB       | 2076 ms      | 223/223         | synthetic-probe-plan   |
| cold-import      | 1        | 1880 ms  | 1880 ms  | 318.5 MB     | 2025 ms      | 223/223         | cold-import-readiness  |
| workspace-plan   | 1        | 1976 ms  | 2000 ms  | 324.9 MB     | 2187 ms      | 234/234         | workspace-plan         |
| platform-probes  | 1        | 1937 ms  | 1965 ms  | 326.7 MB     | 2093 ms      | 232/232         | platform-probes        |
| import-loop      | 1        | 421 ms   | 424 ms   | 60.5 MB      | 197 ms       | 49/49           | import-loop-profile    |
