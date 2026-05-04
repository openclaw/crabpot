# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2164 ms            |
| Command P95 wall time  | 2209 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1837               |
| CPU samples            | 1837               |
| Max peak RSS           | 448.1 MB           |
| Max RSS delta          | 417.1 MB           |
| Max CPU estimate       | 2441 ms            |
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
| node-boot              | Node boot                                       | 37 ms       | 37 ms    | 32.7 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2037 ms     | 2049 ms  | 429.5 MB     | 399 MB        | 2270 ms      | 7.3 MB     | 241/241         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2164 ms     | 2195 ms  | 431.2 MB     | 400.6 MB      | 2393 ms      | 7.2 MB     | 255/255         | 0          |
| contract-capture       | Contract capture inventory                      | 2185 ms     | 2188 ms  | 448.1 MB     | 417.1 MB      | 2372 ms      | 6.9 MB     | 257/257         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2165 ms     | 2172 ms  | 431.3 MB     | 402.6 MB      | 2372 ms      | 0.1 MB     | 254/254         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2142 ms     | 2155 ms  | 436 MB       | 407.3 MB      | 2375 ms      | 0.9 MB     | 255/255         | 0          |
| workspace-plan         | Workspace execution plan                        | 2182 ms     | 2238 ms  | 440.3 MB     | 411.5 MB      | 2422 ms      | 1.1 MB     | 262/262         | 0          |
| platform-probes        | Platform and loader probes                      | 2209 ms     | 2256 ms  | 440.3 MB     | 410.5 MB      | 2441 ms      | 1.3 MB     | 265/265         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 380 ms      | 383 ms   | 60.5 MB      | 31.8 MB       | 189 ms       | 1.3 MB     | 45/45           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 37 ms    | 37 ms    | 32.7 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2037 ms  | 2049 ms  | 429.5 MB     | 2270 ms      | 241/241         | fixture-inspection     |
| target-registry  | 1        | 2164 ms  | 2195 ms  | 431.2 MB     | 2393 ms      | 255/255         | compat-report-registry |
| contract-capture | 1        | 2185 ms  | 2188 ms  | 448.1 MB     | 2372 ms      | 257/257         | contract-capture       |
| synthetic-probes | 1        | 2165 ms  | 2172 ms  | 431.3 MB     | 2372 ms      | 254/254         | synthetic-probe-plan   |
| cold-import      | 1        | 2142 ms  | 2155 ms  | 436 MB       | 2375 ms      | 255/255         | cold-import-readiness  |
| workspace-plan   | 1        | 2182 ms  | 2238 ms  | 440.3 MB     | 2422 ms      | 262/262         | workspace-plan         |
| platform-probes  | 1        | 2209 ms  | 2256 ms  | 440.3 MB     | 2441 ms      | 265/265         | platform-probes        |
| import-loop      | 1        | 380 ms   | 383 ms   | 60.5 MB      | 189 ms       | 45/45           | import-loop-profile    |
