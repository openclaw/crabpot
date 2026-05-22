# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 1847 ms            |
| Command P95 wall time  | 1878 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1577               |
| CPU samples            | 1577               |
| Max peak RSS           | 483.5 MB           |
| Max RSS delta          | 454.7 MB           |
| Max CPU estimate       | 2044 ms            |
| Max harness heap delta | 6.5 MB             |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 61         |
| hookNames              | 37         |
| apiRegistrars          | 53         |
| capturedRegistrars     | 28         |
| sdkExports             | 313        |
| manifestFields         | 41         |
| manifestContractFields | 18         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 60    |
| sourceFiles           | 1771  |
| observedHooks         | 106   |
| observedRegistrations | 199   |
| observedSdkImports    | 1210  |
| contractProbes        | 274   |
| issueFindings         | 278   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 28 ms       | 31 ms    | 30.9 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 1760 ms     | 1786 ms  | 468.9 MB     | 440.2 MB      | 1966 ms      | 6.5 MB     | 209/209         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 1845 ms     | 1887 ms  | 471 MB       | 442.3 MB      | 2044 ms      | 6 MB       | 219/219         | 0          |
| contract-capture       | Contract capture inventory                      | 1853 ms     | 1887 ms  | 471 MB       | 442.2 MB      | 2019 ms      | 0.5 MB     | 217/217         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 1847 ms     | 1862 ms  | 473.5 MB     | 444.8 MB      | 2002 ms      | 0.6 MB     | 220/220         | 0          |
| cold-import-readiness  | Cold import readiness                           | 1852 ms     | 1860 ms  | 471 MB       | 442.2 MB      | 2018 ms      | 1.5 MB     | 222/222         | 0          |
| workspace-plan         | Workspace execution plan                        | 1878 ms     | 1882 ms  | 483.5 MB     | 454.7 MB      | 2044 ms      | 1.5 MB     | 225/225         | 0          |
| platform-probes        | Platform and loader probes                      | 1866 ms     | 1878 ms  | 476.5 MB     | 447.8 MB      | 2038 ms      | 0.1 MB     | 223/223         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 319 ms      | 322 ms   | 60.5 MB      | 31.7 MB       | 132 ms       | 1.2 MB     | 39/39           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 28 ms    | 31 ms    | 30.9 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 1760 ms  | 1786 ms  | 468.9 MB     | 1966 ms      | 209/209         | fixture-inspection     |
| target-registry  | 1        | 1845 ms  | 1887 ms  | 471 MB       | 2044 ms      | 219/219         | compat-report-registry |
| contract-capture | 1        | 1853 ms  | 1887 ms  | 471 MB       | 2019 ms      | 217/217         | contract-capture       |
| synthetic-probes | 1        | 1847 ms  | 1862 ms  | 473.5 MB     | 2002 ms      | 220/220         | synthetic-probe-plan   |
| cold-import      | 1        | 1852 ms  | 1860 ms  | 471 MB       | 2018 ms      | 222/222         | cold-import-readiness  |
| workspace-plan   | 1        | 1878 ms  | 1882 ms  | 483.5 MB     | 2044 ms      | 225/225         | workspace-plan         |
| platform-probes  | 1        | 1866 ms  | 1878 ms  | 476.5 MB     | 2038 ms      | 223/223         | platform-probes        |
| import-loop      | 1        | 319 ms   | 322 ms   | 60.5 MB      | 132 ms       | 39/39           | import-loop-profile    |
