# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 1858 ms            |
| Command P95 wall time  | 1912 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1595               |
| CPU samples            | 1595               |
| Max peak RSS           | 324.9 MB           |
| Max RSS delta          | 296.4 MB           |
| Max CPU estimate       | 2114 ms            |
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
| sdkExports             | 317        |
| manifestFields         | 42         |
| manifestContractFields | 20         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 60    |
| sourceFiles           | 1870  |
| observedHooks         | 107   |
| observedRegistrations | 206   |
| observedSdkImports    | 1248  |
| contractProbes        | 279   |
| issueFindings         | 284   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 33 ms       | 33 ms    | 30.5 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 1734 ms     | 1744 ms  | 315.4 MB     | 287 MB        | 1914 ms      | 6.3 MB     | 205/205         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 1855 ms     | 1877 ms  | 316.9 MB     | 288.5 MB      | 2031 ms      | 6.3 MB     | 220/220         | 0          |
| contract-capture       | Contract capture inventory                      | 1887 ms     | 1896 ms  | 317.4 MB     | 289 MB        | 2051 ms      | 0.1 MB     | 221/221         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 1887 ms     | 1889 ms  | 317.5 MB     | 288.4 MB      | 2067 ms      | 0.9 MB     | 225/225         | 0          |
| cold-import-readiness  | Cold import readiness                           | 1858 ms     | 1866 ms  | 320.7 MB     | 292.3 MB      | 2047 ms      | 0.1 MB     | 221/221         | 0          |
| workspace-plan         | Workspace execution plan                        | 1902 ms     | 1905 ms  | 324.6 MB     | 296.2 MB      | 2082 ms      | 0.2 MB     | 225/225         | 0          |
| platform-probes        | Platform and loader probes                      | 1912 ms     | 1948 ms  | 324.9 MB     | 296.4 MB      | 2114 ms      | 0.4 MB     | 228/228         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 395 ms      | 399 ms   | 60.5 MB      | 32.1 MB       | 190 ms       | 1.4 MB     | 47/47           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 33 ms    | 33 ms    | 30.5 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 1734 ms  | 1744 ms  | 315.4 MB     | 1914 ms      | 205/205         | fixture-inspection     |
| target-registry  | 1        | 1855 ms  | 1877 ms  | 316.9 MB     | 2031 ms      | 220/220         | compat-report-registry |
| contract-capture | 1        | 1887 ms  | 1896 ms  | 317.4 MB     | 2051 ms      | 221/221         | contract-capture       |
| synthetic-probes | 1        | 1887 ms  | 1889 ms  | 317.5 MB     | 2067 ms      | 225/225         | synthetic-probe-plan   |
| cold-import      | 1        | 1858 ms  | 1866 ms  | 320.7 MB     | 2047 ms      | 221/221         | cold-import-readiness  |
| workspace-plan   | 1        | 1902 ms  | 1905 ms  | 324.6 MB     | 2082 ms      | 225/225         | workspace-plan         |
| platform-probes  | 1        | 1912 ms  | 1948 ms  | 324.9 MB     | 2114 ms      | 228/228         | platform-probes        |
| import-loop      | 1        | 395 ms   | 399 ms   | 60.5 MB      | 190 ms       | 47/47           | import-loop-profile    |
