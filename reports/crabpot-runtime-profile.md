# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 1885 ms            |
| Command P95 wall time  | 1950 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1619               |
| CPU samples            | 1619               |
| Max peak RSS           | 324.6 MB           |
| Max RSS delta          | 296.2 MB           |
| Max CPU estimate       | 2118 ms            |
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
| sourceFiles           | 1865  |
| observedHooks         | 107   |
| observedRegistrations | 206   |
| observedSdkImports    | 1247  |
| contractProbes        | 279   |
| issueFindings         | 284   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 34 ms       | 34 ms    | 31.3 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 1735 ms     | 1763 ms  | 315.6 MB     | 286.5 MB      | 1918 ms      | 6.4 MB     | 206/206         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 1885 ms     | 1907 ms  | 318.1 MB     | 289.4 MB      | 2090 ms      | 6.3 MB     | 226/226         | 0          |
| contract-capture       | Contract capture inventory                      | 1894 ms     | 1910 ms  | 317.4 MB     | 288.3 MB      | 2091 ms      | 0.7 MB     | 224/224         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 1878 ms     | 1902 ms  | 317.1 MB     | 288.7 MB      | 2036 ms      | 0.9 MB     | 225/225         | 0          |
| cold-import-readiness  | Cold import readiness                           | 1901 ms     | 1932 ms  | 319 MB       | 289.3 MB      | 2114 ms      | 0.3 MB     | 226/226         | 0          |
| workspace-plan         | Workspace execution plan                        | 1931 ms     | 1938 ms  | 324.6 MB     | 296 MB        | 2118 ms      | 0.3 MB     | 230/230         | 0          |
| platform-probes        | Platform and loader probes                      | 1950 ms     | 1958 ms  | 324.6 MB     | 296.2 MB      | 2116 ms      | 0.4 MB     | 231/231         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 403 ms      | 405 ms   | 60.5 MB      | 32.1 MB       | 197 ms       | 1.4 MB     | 48/48           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 34 ms    | 34 ms    | 31.3 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 1735 ms  | 1763 ms  | 315.6 MB     | 1918 ms      | 206/206         | fixture-inspection     |
| target-registry  | 1        | 1885 ms  | 1907 ms  | 318.1 MB     | 2090 ms      | 226/226         | compat-report-registry |
| contract-capture | 1        | 1894 ms  | 1910 ms  | 317.4 MB     | 2091 ms      | 224/224         | contract-capture       |
| synthetic-probes | 1        | 1878 ms  | 1902 ms  | 317.1 MB     | 2036 ms      | 225/225         | synthetic-probe-plan   |
| cold-import      | 1        | 1901 ms  | 1932 ms  | 319 MB       | 2114 ms      | 226/226         | cold-import-readiness  |
| workspace-plan   | 1        | 1931 ms  | 1938 ms  | 324.6 MB     | 2118 ms      | 230/230         | workspace-plan         |
| platform-probes  | 1        | 1950 ms  | 1958 ms  | 324.6 MB     | 2116 ms      | 231/231         | platform-probes        |
| import-loop      | 1        | 403 ms   | 405 ms   | 60.5 MB      | 197 ms       | 48/48           | import-loop-profile    |
