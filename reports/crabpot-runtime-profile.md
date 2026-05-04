# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 1672 ms            |
| Command P95 wall time  | 1726 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1433               |
| CPU samples            | 1433               |
| Max peak RSS           | 438.1 MB           |
| Max RSS delta          | 409.3 MB           |
| Max CPU estimate       | 1864 ms            |
| Max harness heap delta | 5.8 MB             |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 60         |
| hookNames              | 35         |
| apiRegistrars          | 49         |
| capturedRegistrars     | 26         |
| sdkExports             | 296        |
| manifestFields         | 40         |
| manifestContractFields | 17         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 57    |
| sourceFiles           | 1596  |
| observedHooks         | 93    |
| observedRegistrations | 188   |
| observedSdkImports    | 1012  |
| contractProbes        | 322   |
| issueFindings         | 328   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 29 ms       | 33 ms    | 32.4 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 1603 ms     | 1610 ms  | 429.5 MB     | 400.7 MB      | 1765 ms      | 5.8 MB     | 189/189         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 1661 ms     | 1689 ms  | 431.3 MB     | 401 MB        | 1827 ms      | 5.6 MB     | 198/198         | 0          |
| contract-capture       | Contract capture inventory                      | 1700 ms     | 1716 ms  | 431.8 MB     | 402.5 MB      | 1824 ms      | 5.4 MB     | 198/198         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 1672 ms     | 1676 ms  | 431.3 MB     | 402.5 MB      | 1811 ms      | 0.8 MB     | 199/199         | 0          |
| cold-import-readiness  | Cold import readiness                           | 1676 ms     | 1679 ms  | 434.4 MB     | 405.6 MB      | 1829 ms      | 1 MB       | 199/199         | 0          |
| workspace-plan         | Workspace execution plan                        | 1708 ms     | 1721 ms  | 438.1 MB     | 409.3 MB      | 1864 ms      | 0.9 MB     | 203/203         | 0          |
| platform-probes        | Platform and loader probes                      | 1726 ms     | 1728 ms  | 438.1 MB     | 409.3 MB      | 1854 ms      | 2.7 MB     | 206/206         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 329 ms      | 329 ms   | 60.5 MB      | 31.7 MB       | 144 ms       | 1.2 MB     | 38/38           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 29 ms    | 33 ms    | 32.4 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 1603 ms  | 1610 ms  | 429.5 MB     | 1765 ms      | 189/189         | fixture-inspection     |
| target-registry  | 1        | 1661 ms  | 1689 ms  | 431.3 MB     | 1827 ms      | 198/198         | compat-report-registry |
| contract-capture | 1        | 1700 ms  | 1716 ms  | 431.8 MB     | 1824 ms      | 198/198         | contract-capture       |
| synthetic-probes | 1        | 1672 ms  | 1676 ms  | 431.3 MB     | 1811 ms      | 199/199         | synthetic-probe-plan   |
| cold-import      | 1        | 1676 ms  | 1679 ms  | 434.4 MB     | 1829 ms      | 199/199         | cold-import-readiness  |
| workspace-plan   | 1        | 1708 ms  | 1721 ms  | 438.1 MB     | 1864 ms      | 203/203         | workspace-plan         |
| platform-probes  | 1        | 1726 ms  | 1728 ms  | 438.1 MB     | 1854 ms      | 206/206         | platform-probes        |
| import-loop      | 1        | 329 ms   | 329 ms   | 60.5 MB      | 144 ms       | 38/38           | import-loop-profile    |
