# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 1780 ms            |
| Command P95 wall time  | 1850 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1526               |
| CPU samples            | 1526               |
| Max peak RSS           | 315.4 MB           |
| Max RSS delta          | 287 MB             |
| Max CPU estimate       | 2048 ms            |
| Max harness heap delta | 6.1 MB             |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 65         |
| hookNames              | 38         |
| apiRegistrars          | 55         |
| capturedRegistrars     | 30         |
| sdkExports             | 310        |
| manifestFields         | 41         |
| manifestContractFields | 20         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 60    |
| sourceFiles           | 1767  |
| observedHooks         | 108   |
| observedRegistrations | 206   |
| observedSdkImports    | 1228  |
| contractProbes        | 283   |
| issueFindings         | 288   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 36 ms       | 36 ms    | 30.9 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 1639 ms     | 1655 ms  | 304.1 MB     | 275.4 MB      | 1838 ms      | 6.1 MB     | 195/195         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 1759 ms     | 1765 ms  | 307 MB       | 277.4 MB      | 1921 ms      | 5.9 MB     | 208/208         | 0          |
| contract-capture       | Contract capture inventory                      | 1780 ms     | 1780 ms  | 306.7 MB     | 278.3 MB      | 1962 ms      | -0.9 MB    | 209/209         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 1784 ms     | 1786 ms  | 306.1 MB     | 277.6 MB      | 1957 ms      | 1.2 MB     | 212/212         | 0          |
| cold-import-readiness  | Cold import readiness                           | 1783 ms     | 1813 ms  | 307.8 MB     | 279.5 MB      | 1989 ms      | 0 MB       | 214/214         | 0          |
| workspace-plan         | Workspace execution plan                        | 1809 ms     | 1829 ms  | 315.4 MB     | 287 MB        | 2027 ms      | 1.4 MB     | 217/217         | 0          |
| platform-probes        | Platform and loader probes                      | 1850 ms     | 1874 ms  | 315 MB       | 286 MB        | 2048 ms      | 0.1 MB     | 219/219         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 421 ms      | 432 ms   | 60.5 MB      | 32.1 MB       | 207 ms       | 1.5 MB     | 49/49           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 36 ms    | 36 ms    | 30.9 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 1639 ms  | 1655 ms  | 304.1 MB     | 1838 ms      | 195/195         | fixture-inspection     |
| target-registry  | 1        | 1759 ms  | 1765 ms  | 307 MB       | 1921 ms      | 208/208         | compat-report-registry |
| contract-capture | 1        | 1780 ms  | 1780 ms  | 306.7 MB     | 1962 ms      | 209/209         | contract-capture       |
| synthetic-probes | 1        | 1784 ms  | 1786 ms  | 306.1 MB     | 1957 ms      | 212/212         | synthetic-probe-plan   |
| cold-import      | 1        | 1783 ms  | 1813 ms  | 307.8 MB     | 1989 ms      | 214/214         | cold-import-readiness  |
| workspace-plan   | 1        | 1809 ms  | 1829 ms  | 315.4 MB     | 2027 ms      | 217/217         | workspace-plan         |
| platform-probes  | 1        | 1850 ms  | 1874 ms  | 315 MB       | 2048 ms      | 219/219         | platform-probes        |
| import-loop      | 1        | 421 ms   | 432 ms   | 60.5 MB      | 207 ms       | 49/49           | import-loop-profile    |
