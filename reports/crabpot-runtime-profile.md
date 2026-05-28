# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 1921 ms            |
| Command P95 wall time  | 2005 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1652               |
| CPU samples            | 1652               |
| Max peak RSS           | 482.3 MB           |
| Max RSS delta          | 453.7 MB           |
| Max CPU estimate       | 2201 ms            |
| Max harness heap delta | 6.6 MB             |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 63         |
| hookNames              | 37         |
| apiRegistrars          | 55         |
| capturedRegistrars     | 30         |
| sdkExports             | 316        |
| manifestFields         | 41         |
| manifestContractFields | 20         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 60    |
| sourceFiles           | 1782  |
| observedHooks         | 108   |
| observedRegistrations | 205   |
| observedSdkImports    | 1239  |
| contractProbes        | 299   |
| issueFindings         | 304   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 33 ms       | 34 ms    | 32.7 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 1818 ms     | 1834 ms  | 472.8 MB     | 440.8 MB      | 1992 ms      | 6.6 MB     | 215/215         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 1911 ms     | 1937 ms  | 454.3 MB     | 423.7 MB      | 2076 ms      | 6.2 MB     | 227/227         | 0          |
| contract-capture       | Contract capture inventory                      | 1964 ms     | 1986 ms  | 474.6 MB     | 444.3 MB      | 2173 ms      | 6.4 MB     | 232/232         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 1921 ms     | 1953 ms  | 453.4 MB     | 423.4 MB      | 2107 ms      | 6.2 MB     | 225/225         | 0          |
| cold-import-readiness  | Cold import readiness                           | 1941 ms     | 1966 ms  | 475.9 MB     | 447.2 MB      | 2128 ms      | 0.9 MB     | 232/232         | 0          |
| workspace-plan         | Workspace execution plan                        | 1982 ms     | 2001 ms  | 482.3 MB     | 452.8 MB      | 2158 ms      | 0.4 MB     | 237/237         | 0          |
| platform-probes        | Platform and loader probes                      | 2005 ms     | 2034 ms  | 482.3 MB     | 453.7 MB      | 2201 ms      | 0.5 MB     | 239/239         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 355 ms      | 359 ms   | 61.1 MB      | 32.4 MB       | 169 ms       | 1.2 MB     | 42/42           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 33 ms    | 34 ms    | 32.7 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 1818 ms  | 1834 ms  | 472.8 MB     | 1992 ms      | 215/215         | fixture-inspection     |
| target-registry  | 1        | 1911 ms  | 1937 ms  | 454.3 MB     | 2076 ms      | 227/227         | compat-report-registry |
| contract-capture | 1        | 1964 ms  | 1986 ms  | 474.6 MB     | 2173 ms      | 232/232         | contract-capture       |
| synthetic-probes | 1        | 1921 ms  | 1953 ms  | 453.4 MB     | 2107 ms      | 225/225         | synthetic-probe-plan   |
| cold-import      | 1        | 1941 ms  | 1966 ms  | 475.9 MB     | 2128 ms      | 232/232         | cold-import-readiness  |
| workspace-plan   | 1        | 1982 ms  | 2001 ms  | 482.3 MB     | 2158 ms      | 237/237         | workspace-plan         |
| platform-probes  | 1        | 2005 ms  | 2034 ms  | 482.3 MB     | 2201 ms      | 239/239         | platform-probes        |
| import-loop      | 1        | 355 ms   | 359 ms   | 61.1 MB      | 169 ms       | 42/42           | import-loop-profile    |
