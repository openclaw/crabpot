# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2076 ms            |
| Command P95 wall time  | 2138 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1780               |
| CPU samples            | 1780               |
| Max peak RSS           | 440 MB             |
| Max RSS delta          | 411.3 MB           |
| Max CPU estimate       | 2345 ms            |
| Max harness heap delta | 7.1 MB             |

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
| node-boot              | Node boot                                       | 30 ms       | 31 ms    | 28.8 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 1983 ms     | 1996 ms  | 431.2 MB     | 402.4 MB      | 2174 ms      | 7.1 MB     | 236/236         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2065 ms     | 2103 ms  | 432.3 MB     | 403.6 MB      | 2250 ms      | 6.8 MB     | 246/246         | 0          |
| contract-capture       | Contract capture inventory                      | 2090 ms     | 2110 ms  | 432.7 MB     | 403.9 MB      | 2257 ms      | 6.9 MB     | 250/250         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2098 ms     | 2159 ms  | 432.7 MB     | 403.9 MB      | 2271 ms      | 6.8 MB     | 248/248         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2076 ms     | 2105 ms  | 439.8 MB     | 411 MB        | 2290 ms      | 0.7 MB     | 249/249         | 0          |
| workspace-plan         | Workspace execution plan                        | 2136 ms     | 2155 ms  | 439.8 MB     | 411 MB        | 2345 ms      | 0.9 MB     | 254/254         | 0          |
| platform-probes        | Platform and loader probes                      | 2138 ms     | 2153 ms  | 440 MB       | 411.3 MB      | 2290 ms      | 0.9 MB     | 255/255         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 338 ms      | 340 ms   | 60.5 MB      | 31.8 MB       | 170 ms       | 1.3 MB     | 39/39           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 30 ms    | 31 ms    | 28.8 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 1983 ms  | 1996 ms  | 431.2 MB     | 2174 ms      | 236/236         | fixture-inspection     |
| target-registry  | 1        | 2065 ms  | 2103 ms  | 432.3 MB     | 2250 ms      | 246/246         | compat-report-registry |
| contract-capture | 1        | 2090 ms  | 2110 ms  | 432.7 MB     | 2257 ms      | 250/250         | contract-capture       |
| synthetic-probes | 1        | 2098 ms  | 2159 ms  | 432.7 MB     | 2271 ms      | 248/248         | synthetic-probe-plan   |
| cold-import      | 1        | 2076 ms  | 2105 ms  | 439.8 MB     | 2290 ms      | 249/249         | cold-import-readiness  |
| workspace-plan   | 1        | 2136 ms  | 2155 ms  | 439.8 MB     | 2345 ms      | 254/254         | workspace-plan         |
| platform-probes  | 1        | 2138 ms  | 2153 ms  | 440 MB       | 2290 ms      | 255/255         | platform-probes        |
| import-loop      | 1        | 338 ms   | 340 ms   | 60.5 MB      | 170 ms       | 39/39           | import-loop-profile    |
