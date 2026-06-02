# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 1807 ms            |
| Command P95 wall time  | 1881 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1544               |
| CPU samples            | 1544               |
| Max peak RSS           | 325.4 MB           |
| Max RSS delta          | 297 MB             |
| Max CPU estimate       | 2034 ms            |
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
| sourceFiles           | 1769  |
| observedHooks         | 108   |
| observedRegistrations | 206   |
| observedSdkImports    | 1229  |
| contractProbes        | 284   |
| issueFindings         | 289   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 32 ms       | 33 ms    | 30.3 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 1662 ms     | 1667 ms  | 315.6 MB     | 286.1 MB      | 1856 ms      | 6 MB       | 198/198         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 1807 ms     | 1830 ms  | 316.1 MB     | 287.6 MB      | 1991 ms      | 6.1 MB     | 215/215         | 0          |
| contract-capture       | Contract capture inventory                      | 1809 ms     | 1809 ms  | 316.9 MB     | 287.3 MB      | 1981 ms      | 0.5 MB     | 214/214         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 1800 ms     | 1810 ms  | 316.9 MB     | 288.5 MB      | 1989 ms      | 1.4 MB     | 214/214         | 0          |
| cold-import-readiness  | Cold import readiness                           | 1810 ms     | 1813 ms  | 317 MB       | 288.5 MB      | 1995 ms      | 0.1 MB     | 214/214         | 0          |
| workspace-plan         | Workspace execution plan                        | 1844 ms     | 1854 ms  | 323.7 MB     | 295.2 MB      | 2028 ms      | 0 MB       | 218/218         | 0          |
| platform-probes        | Platform and loader probes                      | 1881 ms     | 1883 ms  | 325.4 MB     | 297 MB        | 2034 ms      | 3 MB       | 222/222         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 398 ms      | 398 ms   | 60.5 MB      | 32.1 MB       | 194 ms       | 1.3 MB     | 46/46           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 32 ms    | 33 ms    | 30.3 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 1662 ms  | 1667 ms  | 315.6 MB     | 1856 ms      | 198/198         | fixture-inspection     |
| target-registry  | 1        | 1807 ms  | 1830 ms  | 316.1 MB     | 1991 ms      | 215/215         | compat-report-registry |
| contract-capture | 1        | 1809 ms  | 1809 ms  | 316.9 MB     | 1981 ms      | 214/214         | contract-capture       |
| synthetic-probes | 1        | 1800 ms  | 1810 ms  | 316.9 MB     | 1989 ms      | 214/214         | synthetic-probe-plan   |
| cold-import      | 1        | 1810 ms  | 1813 ms  | 317 MB       | 1995 ms      | 214/214         | cold-import-readiness  |
| workspace-plan   | 1        | 1844 ms  | 1854 ms  | 323.7 MB     | 2028 ms      | 218/218         | workspace-plan         |
| platform-probes  | 1        | 1881 ms  | 1883 ms  | 325.4 MB     | 2034 ms      | 222/222         | platform-probes        |
| import-loop      | 1        | 398 ms   | 398 ms   | 60.5 MB      | 194 ms       | 46/46           | import-loop-profile    |
