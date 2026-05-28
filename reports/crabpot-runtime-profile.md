# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 1950 ms            |
| Command P95 wall time  | 1976 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1650               |
| CPU samples            | 1650               |
| Max peak RSS           | 484.6 MB           |
| Max RSS delta          | 456 MB             |
| Max CPU estimate       | 2214 ms            |
| Max harness heap delta | 6.6 MB             |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 64         |
| hookNames              | 37         |
| apiRegistrars          | 55         |
| capturedRegistrars     | 30         |
| sdkExports             | 304        |
| manifestFields         | 41         |
| manifestContractFields | 20         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 60    |
| sourceFiles           | 1784  |
| observedHooks         | 108   |
| observedRegistrations | 205   |
| observedSdkImports    | 1213  |
| contractProbes        | 284   |
| issueFindings         | 289   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 32 ms       | 32 ms    | 31.3 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 1856 ms     | 1858 ms  | 473.5 MB     | 443.4 MB      | 2035 ms      | 6.6 MB     | 219/219         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 1938 ms     | 2018 ms  | 474.4 MB     | 443.5 MB      | 2214 ms      | 6.6 MB     | 231/231         | 0          |
| contract-capture       | Contract capture inventory                      | 1962 ms     | 1996 ms  | 474.6 MB     | 444.6 MB      | 2156 ms      | 6.5 MB     | 231/231         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 1976 ms     | 1980 ms  | 474.8 MB     | 445 MB        | 2110 ms      | 0.3 MB     | 229/229         | 0          |
| cold-import-readiness  | Cold import readiness                           | 1951 ms     | 1987 ms  | 484.3 MB     | 455.7 MB      | 2150 ms      | 0.8 MB     | 233/233         | 0          |
| workspace-plan         | Workspace execution plan                        | 1950 ms     | 1956 ms  | 481.8 MB     | 453.1 MB      | 2140 ms      | 0.6 MB     | 232/232         | 0          |
| platform-probes        | Platform and loader probes                      | 1970 ms     | 1984 ms  | 484.6 MB     | 456 MB        | 2105 ms      | 1.9 MB     | 233/233         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 345 ms      | 346 ms   | 60.7 MB      | 32.1 MB       | 171 ms       | 1.3 MB     | 39/39           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 32 ms    | 32 ms    | 31.3 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 1856 ms  | 1858 ms  | 473.5 MB     | 2035 ms      | 219/219         | fixture-inspection     |
| target-registry  | 1        | 1938 ms  | 2018 ms  | 474.4 MB     | 2214 ms      | 231/231         | compat-report-registry |
| contract-capture | 1        | 1962 ms  | 1996 ms  | 474.6 MB     | 2156 ms      | 231/231         | contract-capture       |
| synthetic-probes | 1        | 1976 ms  | 1980 ms  | 474.8 MB     | 2110 ms      | 229/229         | synthetic-probe-plan   |
| cold-import      | 1        | 1951 ms  | 1987 ms  | 484.3 MB     | 2150 ms      | 233/233         | cold-import-readiness  |
| workspace-plan   | 1        | 1950 ms  | 1956 ms  | 481.8 MB     | 2140 ms      | 232/232         | workspace-plan         |
| platform-probes  | 1        | 1970 ms  | 1984 ms  | 484.6 MB     | 2105 ms      | 233/233         | platform-probes        |
| import-loop      | 1        | 345 ms   | 346 ms   | 60.7 MB      | 171 ms       | 39/39           | import-loop-profile    |
