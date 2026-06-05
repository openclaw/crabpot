# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 1832 ms            |
| Command P95 wall time  | 1899 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1573               |
| CPU samples            | 1573               |
| Max peak RSS           | 324.5 MB           |
| Max RSS delta          | 296.1 MB           |
| Max CPU estimate       | 2071 ms            |
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
| node-boot              | Node boot                                       | 32 ms       | 35 ms    | 29.1 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 1702 ms     | 1705 ms  | 318.4 MB     | 288.3 MB      | 1887 ms      | 6.2 MB     | 201/201         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 1832 ms     | 1840 ms  | 317.4 MB     | 289 MB        | 2001 ms      | 6.2 MB     | 217/217         | 0          |
| contract-capture       | Contract capture inventory                      | 1843 ms     | 1877 ms  | 317.6 MB     | 289.2 MB      | 2055 ms      | 0.6 MB     | 218/218         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 1817 ms     | 1839 ms  | 316.8 MB     | 288.3 MB      | 2014 ms      | 1.4 MB     | 217/217         | 0          |
| cold-import-readiness  | Cold import readiness                           | 1849 ms     | 1886 ms  | 317.8 MB     | 289.4 MB      | 2058 ms      | 0.3 MB     | 220/220         | 0          |
| workspace-plan         | Workspace execution plan                        | 1859 ms     | 1877 ms  | 324.5 MB     | 295.8 MB      | 2032 ms      | 1.5 MB     | 223/223         | 0          |
| platform-probes        | Platform and loader probes                      | 1899 ms     | 1928 ms  | 324.5 MB     | 296.1 MB      | 2071 ms      | 0.3 MB     | 227/227         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 399 ms      | 402 ms   | 60.5 MB      | 32 MB         | 202 ms       | 1.4 MB     | 47/47           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 32 ms    | 35 ms    | 29.1 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 1702 ms  | 1705 ms  | 318.4 MB     | 1887 ms      | 201/201         | fixture-inspection     |
| target-registry  | 1        | 1832 ms  | 1840 ms  | 317.4 MB     | 2001 ms      | 217/217         | compat-report-registry |
| contract-capture | 1        | 1843 ms  | 1877 ms  | 317.6 MB     | 2055 ms      | 218/218         | contract-capture       |
| synthetic-probes | 1        | 1817 ms  | 1839 ms  | 316.8 MB     | 2014 ms      | 217/217         | synthetic-probe-plan   |
| cold-import      | 1        | 1849 ms  | 1886 ms  | 317.8 MB     | 2058 ms      | 220/220         | cold-import-readiness  |
| workspace-plan   | 1        | 1859 ms  | 1877 ms  | 324.5 MB     | 2032 ms      | 223/223         | workspace-plan         |
| platform-probes  | 1        | 1899 ms  | 1928 ms  | 324.5 MB     | 2071 ms      | 227/227         | platform-probes        |
| import-loop      | 1        | 399 ms   | 402 ms   | 60.5 MB      | 202 ms       | 47/47           | import-loop-profile    |
