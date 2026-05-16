# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 1866 ms            |
| Command P95 wall time  | 1911 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1596               |
| CPU samples            | 1596               |
| Max peak RSS           | 458.6 MB           |
| Max RSS delta          | 428.7 MB           |
| Max CPU estimate       | 2147 ms            |
| Max harness heap delta | 6.6 MB             |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 60         |
| hookNames              | 36         |
| apiRegistrars          | 53         |
| capturedRegistrars     | 28         |
| sdkExports             | 307        |
| manifestFields         | 41         |
| manifestContractFields | 17         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 60    |
| sourceFiles           | 1783  |
| observedHooks         | 106   |
| observedRegistrations | 196   |
| observedSdkImports    | 1193  |
| contractProbes        | 278   |
| issueFindings         | 283   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 34 ms       | 37 ms    | 31.1 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 1776 ms     | 1811 ms  | 446 MB       | 416.4 MB      | 1990 ms      | 6.6 MB     | 209/209         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 1882 ms     | 1885 ms  | 447.1 MB     | 418 MB        | 2038 ms      | 6.3 MB     | 222/222         | 0          |
| contract-capture       | Contract capture inventory                      | 1861 ms     | 1938 ms  | 452.1 MB     | 421.2 MB      | 2078 ms      | 6.4 MB     | 223/223         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 1873 ms     | 1982 ms  | 447.3 MB     | 416.4 MB      | 2147 ms      | 6.1 MB     | 223/223         | 0          |
| cold-import-readiness  | Cold import readiness                           | 1866 ms     | 1879 ms  | 453.8 MB     | 424.7 MB      | 2058 ms      | 0.7 MB     | 222/222         | 0          |
| workspace-plan         | Workspace execution plan                        | 1898 ms     | 1902 ms  | 456.2 MB     | 427.4 MB      | 2088 ms      | 0.3 MB     | 226/226         | 0          |
| platform-probes        | Platform and loader probes                      | 1911 ms     | 1929 ms  | 458.6 MB     | 428.7 MB      | 2105 ms      | 1.9 MB     | 227/227         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 346 ms      | 347 ms   | 60.9 MB      | 31.8 MB       | 156 ms       | 1.3 MB     | 41/41           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 34 ms    | 37 ms    | 31.1 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 1776 ms  | 1811 ms  | 446 MB       | 1990 ms      | 209/209         | fixture-inspection     |
| target-registry  | 1        | 1882 ms  | 1885 ms  | 447.1 MB     | 2038 ms      | 222/222         | compat-report-registry |
| contract-capture | 1        | 1861 ms  | 1938 ms  | 452.1 MB     | 2078 ms      | 223/223         | contract-capture       |
| synthetic-probes | 1        | 1873 ms  | 1982 ms  | 447.3 MB     | 2147 ms      | 223/223         | synthetic-probe-plan   |
| cold-import      | 1        | 1866 ms  | 1879 ms  | 453.8 MB     | 2058 ms      | 222/222         | cold-import-readiness  |
| workspace-plan   | 1        | 1898 ms  | 1902 ms  | 456.2 MB     | 2088 ms      | 226/226         | workspace-plan         |
| platform-probes  | 1        | 1911 ms  | 1929 ms  | 458.6 MB     | 2105 ms      | 227/227         | platform-probes        |
| import-loop      | 1        | 346 ms   | 347 ms   | 60.9 MB      | 156 ms       | 41/41           | import-loop-profile    |
