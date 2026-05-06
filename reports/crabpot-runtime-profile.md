# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2195 ms            |
| Command P95 wall time  | 2276 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1873               |
| CPU samples            | 1873               |
| Max peak RSS           | 458.2 MB           |
| Max RSS delta          | 429.5 MB           |
| Max CPU estimate       | 2481 ms            |
| Max harness heap delta | 7.4 MB             |

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
| sourceFiles           | 1774  |
| observedHooks         | 96    |
| observedRegistrations | 193   |
| observedSdkImports    | 1159  |
| contractProbes        | 300   |
| issueFindings         | 304   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 36 ms       | 36 ms    | 32.6 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2137 ms     | 2141 ms  | 448.5 MB     | 417.3 MB      | 2346 ms      | 7.4 MB     | 251/251         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2209 ms     | 2218 ms  | 432.5 MB     | 403.4 MB      | 2408 ms      | 7.2 MB     | 260/260         | 0          |
| contract-capture       | Contract capture inventory                      | 2195 ms     | 2245 ms  | 432.5 MB     | 403.7 MB      | 2449 ms      | 7.1 MB     | 260/260         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2202 ms     | 2233 ms  | 433.1 MB     | 402.8 MB      | 2416 ms      | 0.2 MB     | 259/259         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2180 ms     | 2200 ms  | 440.8 MB     | 411.2 MB      | 2395 ms      | 1 MB       | 259/259         | 0          |
| workspace-plan         | Workspace execution plan                        | 2240 ms     | 2246 ms  | 440.3 MB     | 411.1 MB      | 2453 ms      | 2.7 MB     | 267/267         | 0          |
| platform-probes        | Platform and loader probes                      | 2276 ms     | 2280 ms  | 458.2 MB     | 429.5 MB      | 2481 ms      | 1.4 MB     | 269/269         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 374 ms      | 375 ms   | 60.5 MB      | 31.8 MB       | 174 ms       | 1.4 MB     | 45/45           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 36 ms    | 36 ms    | 32.6 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2137 ms  | 2141 ms  | 448.5 MB     | 2346 ms      | 251/251         | fixture-inspection     |
| target-registry  | 1        | 2209 ms  | 2218 ms  | 432.5 MB     | 2408 ms      | 260/260         | compat-report-registry |
| contract-capture | 1        | 2195 ms  | 2245 ms  | 432.5 MB     | 2449 ms      | 260/260         | contract-capture       |
| synthetic-probes | 1        | 2202 ms  | 2233 ms  | 433.1 MB     | 2416 ms      | 259/259         | synthetic-probe-plan   |
| cold-import      | 1        | 2180 ms  | 2200 ms  | 440.8 MB     | 2395 ms      | 259/259         | cold-import-readiness  |
| workspace-plan   | 1        | 2240 ms  | 2246 ms  | 440.3 MB     | 2453 ms      | 267/267         | workspace-plan         |
| platform-probes  | 1        | 2276 ms  | 2280 ms  | 458.2 MB     | 2481 ms      | 269/269         | platform-probes        |
| import-loop      | 1        | 374 ms   | 375 ms   | 60.5 MB      | 174 ms       | 45/45           | import-loop-profile    |
