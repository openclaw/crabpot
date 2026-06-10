# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 1891 ms            |
| Command P95 wall time  | 1929 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1617               |
| CPU samples            | 1617               |
| Max peak RSS           | 324.7 MB           |
| Max RSS delta          | 296.2 MB           |
| Max CPU estimate       | 2097 ms            |
| Max harness heap delta | 6.5 MB             |

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
| node-boot              | Node boot                                       | 32 ms       | 35 ms    | 30 MB        | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 1765 ms     | 1809 ms  | 315.4 MB     | 286.2 MB      | 1966 ms      | 6.5 MB     | 211/211         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 1867 ms     | 1914 ms  | 317.9 MB     | 289.1 MB      | 2082 ms      | 6.4 MB     | 224/224         | 0          |
| contract-capture       | Contract capture inventory                      | 1891 ms     | 1893 ms  | 318.4 MB     | 289.4 MB      | 2068 ms      | 0 MB       | 224/224         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 1901 ms     | 1904 ms  | 318.2 MB     | 289.8 MB      | 2064 ms      | 0.7 MB     | 225/225         | 0          |
| cold-import-readiness  | Cold import readiness                           | 1892 ms     | 1898 ms  | 323.8 MB     | 295.4 MB      | 2087 ms      | 0.3 MB     | 225/225         | 0          |
| workspace-plan         | Workspace execution plan                        | 1913 ms     | 1930 ms  | 324.6 MB     | 296.2 MB      | 2097 ms      | 1.7 MB     | 228/228         | 0          |
| platform-probes        | Platform and loader probes                      | 1929 ms     | 1947 ms  | 324.7 MB     | 296 MB        | 2072 ms      | 0.4 MB     | 230/230         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 397 ms      | 403 ms   | 60.6 MB      | 32.1 MB       | 187 ms       | 1.3 MB     | 47/47           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 32 ms    | 35 ms    | 30 MB        | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 1765 ms  | 1809 ms  | 315.4 MB     | 1966 ms      | 211/211         | fixture-inspection     |
| target-registry  | 1        | 1867 ms  | 1914 ms  | 317.9 MB     | 2082 ms      | 224/224         | compat-report-registry |
| contract-capture | 1        | 1891 ms  | 1893 ms  | 318.4 MB     | 2068 ms      | 224/224         | contract-capture       |
| synthetic-probes | 1        | 1901 ms  | 1904 ms  | 318.2 MB     | 2064 ms      | 225/225         | synthetic-probe-plan   |
| cold-import      | 1        | 1892 ms  | 1898 ms  | 323.8 MB     | 2087 ms      | 225/225         | cold-import-readiness  |
| workspace-plan   | 1        | 1913 ms  | 1930 ms  | 324.6 MB     | 2097 ms      | 228/228         | workspace-plan         |
| platform-probes  | 1        | 1929 ms  | 1947 ms  | 324.7 MB     | 2072 ms      | 230/230         | platform-probes        |
| import-loop      | 1        | 397 ms   | 403 ms   | 60.6 MB      | 187 ms       | 47/47           | import-loop-profile    |
