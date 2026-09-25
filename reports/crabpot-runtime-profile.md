# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 1849 ms            |
| Command P95 wall time  | 2134 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1720               |
| CPU samples            | 1720               |
| Max peak RSS           | 151.8 MB           |
| Max RSS delta          | 125.2 MB           |
| Max CPU estimate       | 2778 ms            |
| Max harness heap delta | 5.2 MB             |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 32         |
| hookNames              | 42         |
| apiRegistrars          | 59         |
| capturedRegistrars     | 31         |
| sdkExports             | 352        |
| manifestFields         | 57         |
| manifestContractFields | 24         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 7     |
| sourceFiles           | 802   |
| observedHooks         | 6     |
| observedRegistrations | 38    |
| observedSdkImports    | 289   |
| contractProbes        | 21    |
| issueFindings         | 21    |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 25 ms       | 28 ms    | 28.1 MB      | 0 MB          | 0 ms         | 0.5 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 1812 ms     | 1843 ms  | 147.7 MB     | 120.4 MB      | 2685 ms      | 5.1 MB     | 217/217         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 1902 ms     | 1913 ms  | 151.8 MB     | 125.2 MB      | 2678 ms      | 5.1 MB     | 227/227         | 0          |
| contract-capture       | Contract capture inventory                      | 1954 ms     | 1964 ms  | 151 MB       | 123.4 MB      | 2710 ms      | 5.2 MB     | 232/232         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2006 ms     | 2013 ms  | 150.6 MB     | 123.9 MB      | 2714 ms      | 5.1 MB     | 239/239         | 0          |
| cold-import-readiness  | Cold import readiness                           | 1844 ms     | 1845 ms  | 150.5 MB     | 123.8 MB      | 2662 ms      | 3.5 MB     | 220/220         | 0          |
| workspace-plan         | Workspace execution plan                        | 1849 ms     | 1854 ms  | 149.9 MB     | 123.3 MB      | 2688 ms      | 3.5 MB     | 220/220         | 0          |
| platform-probes        | Platform and loader probes                      | 2134 ms     | 2142 ms  | 151.8 MB     | 125.2 MB      | 2778 ms      | 4.1 MB     | 255/255         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 898 ms      | 909 ms   | 78.5 MB      | 51.8 MB       | 496 ms       | 1.8 MB     | 107/107         | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 25 ms    | 28 ms    | 28.1 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 1812 ms  | 1843 ms  | 147.7 MB     | 2685 ms      | 217/217         | fixture-inspection     |
| target-registry  | 1        | 1902 ms  | 1913 ms  | 151.8 MB     | 2678 ms      | 227/227         | compat-report-registry |
| contract-capture | 1        | 1954 ms  | 1964 ms  | 151 MB       | 2710 ms      | 232/232         | contract-capture       |
| synthetic-probes | 1        | 2006 ms  | 2013 ms  | 150.6 MB     | 2714 ms      | 239/239         | synthetic-probe-plan   |
| cold-import      | 1        | 1844 ms  | 1845 ms  | 150.5 MB     | 2662 ms      | 220/220         | cold-import-readiness  |
| workspace-plan   | 1        | 1849 ms  | 1854 ms  | 149.9 MB     | 2688 ms      | 220/220         | workspace-plan         |
| platform-probes  | 1        | 2134 ms  | 2142 ms  | 151.8 MB     | 2778 ms      | 255/255         | platform-probes        |
| import-loop      | 1        | 898 ms   | 909 ms   | 78.5 MB      | 496 ms       | 107/107         | import-loop-profile    |
