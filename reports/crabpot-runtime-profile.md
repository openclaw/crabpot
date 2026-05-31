# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 1808 ms            |
| Command P95 wall time  | 1876 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1552               |
| CPU samples            | 1552               |
| Max peak RSS           | 322.5 MB           |
| Max RSS delta          | 292.8 MB           |
| Max CPU estimate       | 2044 ms            |
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
| node-boot              | Node boot                                       | 34 ms       | 35 ms    | 29.8 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 1679 ms     | 1687 ms  | 316.2 MB     | 287.8 MB      | 1857 ms      | 6.1 MB     | 199/199         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 1802 ms     | 1807 ms  | 317.4 MB     | 288 MB        | 1983 ms      | 6 MB       | 214/214         | 0          |
| contract-capture       | Contract capture inventory                      | 1810 ms     | 1847 ms  | 318.1 MB     | 289.7 MB      | 2015 ms      | 5.9 MB     | 214/214         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 1809 ms     | 1821 ms  | 316.5 MB     | 288.1 MB      | 1972 ms      | 0.4 MB     | 215/215         | 0          |
| cold-import-readiness  | Cold import readiness                           | 1808 ms     | 1825 ms  | 317.4 MB     | 288 MB        | 2004 ms      | 1.4 MB     | 216/216         | 0          |
| workspace-plan         | Workspace execution plan                        | 1846 ms     | 1848 ms  | 319.3 MB     | 290.8 MB      | 2042 ms      | 0.1 MB     | 219/219         | 0          |
| platform-probes        | Platform and loader probes                      | 1876 ms     | 1877 ms  | 322.5 MB     | 292.8 MB      | 2044 ms      | 0.3 MB     | 223/223         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 406 ms      | 424 ms   | 60.5 MB      | 32.1 MB       | 198 ms       | 1.4 MB     | 49/49           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 34 ms    | 35 ms    | 29.8 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 1679 ms  | 1687 ms  | 316.2 MB     | 1857 ms      | 199/199         | fixture-inspection     |
| target-registry  | 1        | 1802 ms  | 1807 ms  | 317.4 MB     | 1983 ms      | 214/214         | compat-report-registry |
| contract-capture | 1        | 1810 ms  | 1847 ms  | 318.1 MB     | 2015 ms      | 214/214         | contract-capture       |
| synthetic-probes | 1        | 1809 ms  | 1821 ms  | 316.5 MB     | 1972 ms      | 215/215         | synthetic-probe-plan   |
| cold-import      | 1        | 1808 ms  | 1825 ms  | 317.4 MB     | 2004 ms      | 216/216         | cold-import-readiness  |
| workspace-plan   | 1        | 1846 ms  | 1848 ms  | 319.3 MB     | 2042 ms      | 219/219         | workspace-plan         |
| platform-probes  | 1        | 1876 ms  | 1877 ms  | 322.5 MB     | 2044 ms      | 223/223         | platform-probes        |
| import-loop      | 1        | 406 ms   | 424 ms   | 60.5 MB      | 198 ms       | 49/49           | import-loop-profile    |
