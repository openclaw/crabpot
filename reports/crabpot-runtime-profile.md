# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2117 ms            |
| Command P95 wall time  | 2201 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1819               |
| CPU samples            | 1819               |
| Max peak RSS           | 439.4 MB           |
| Max RSS delta          | 410.6 MB           |
| Max CPU estimate       | 2433 ms            |
| Max harness heap delta | 7.3 MB             |

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
| sourceFiles           | 1598  |
| observedHooks         | 93    |
| observedRegistrations | 188   |
| observedSdkImports    | 1012  |
| contractProbes        | 322   |
| issueFindings         | 328   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 38 ms       | 40 ms    | 32.5 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2040 ms     | 2041 ms  | 429.7 MB     | 399.1 MB      | 2280 ms      | 7.3 MB     | 241/241         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2114 ms     | 2116 ms  | 431.1 MB     | 400.2 MB      | 2321 ms      | 7 MB       | 251/251         | 0          |
| contract-capture       | Contract capture inventory                      | 2137 ms     | 2228 ms  | 431.3 MB     | 399.7 MB      | 2433 ms      | 6.9 MB     | 257/257         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2117 ms     | 2153 ms  | 431.7 MB     | 402.1 MB      | 2340 ms      | 0.6 MB     | 249/249         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2118 ms     | 2133 ms  | 437.5 MB     | 407.9 MB      | 2393 ms      | 0.6 MB     | 253/253         | 0          |
| workspace-plan         | Workspace execution plan                        | 2164 ms     | 2179 ms  | 439.4 MB     | 410.6 MB      | 2388 ms      | 2.4 MB     | 258/258         | 0          |
| platform-probes        | Platform and loader probes                      | 2201 ms     | 2219 ms  | 438 MB       | 409 MB        | 2399 ms      | 1.1 MB     | 262/262         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 376 ms      | 380 ms   | 60.5 MB      | 31.8 MB       | 180 ms       | 1.3 MB     | 45/45           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 38 ms    | 40 ms    | 32.5 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2040 ms  | 2041 ms  | 429.7 MB     | 2280 ms      | 241/241         | fixture-inspection     |
| target-registry  | 1        | 2114 ms  | 2116 ms  | 431.1 MB     | 2321 ms      | 251/251         | compat-report-registry |
| contract-capture | 1        | 2137 ms  | 2228 ms  | 431.3 MB     | 2433 ms      | 257/257         | contract-capture       |
| synthetic-probes | 1        | 2117 ms  | 2153 ms  | 431.7 MB     | 2340 ms      | 249/249         | synthetic-probe-plan   |
| cold-import      | 1        | 2118 ms  | 2133 ms  | 437.5 MB     | 2393 ms      | 253/253         | cold-import-readiness  |
| workspace-plan   | 1        | 2164 ms  | 2179 ms  | 439.4 MB     | 2388 ms      | 258/258         | workspace-plan         |
| platform-probes  | 1        | 2201 ms  | 2219 ms  | 438 MB       | 2399 ms      | 262/262         | platform-probes        |
| import-loop      | 1        | 376 ms   | 380 ms   | 60.5 MB      | 180 ms       | 45/45           | import-loop-profile    |
