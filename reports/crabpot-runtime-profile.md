# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2108 ms            |
| Command P95 wall time  | 2185 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1803               |
| CPU samples            | 1803               |
| Max peak RSS           | 439.4 MB           |
| Max RSS delta          | 410.7 MB           |
| Max CPU estimate       | 2377 ms            |
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
| sourceFiles           | 1596  |
| observedHooks         | 93    |
| observedRegistrations | 188   |
| observedSdkImports    | 1012  |
| contractProbes        | 322   |
| issueFindings         | 328   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 36 ms       | 37 ms    | 32.1 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2022 ms     | 2047 ms  | 430.5 MB     | 400.4 MB      | 2254 ms      | 7.3 MB     | 240/240         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2086 ms     | 2140 ms  | 431.2 MB     | 402.2 MB      | 2352 ms      | 7 MB       | 248/248         | 0          |
| contract-capture       | Contract capture inventory                      | 2123 ms     | 2168 ms  | 432.1 MB     | 401.8 MB      | 2376 ms      | 7 MB       | 253/253         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2154 ms     | 2157 ms  | 431 MB       | 402.3 MB      | 2362 ms      | 0.6 MB     | 249/249         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2108 ms     | 2124 ms  | 439.4 MB     | 410.7 MB      | 2331 ms      | 0.6 MB     | 250/250         | 0          |
| workspace-plan         | Workspace execution plan                        | 2138 ms     | 2153 ms  | 438.1 MB     | 409.4 MB      | 2377 ms      | 2.4 MB     | 255/255         | 0          |
| platform-probes        | Platform and loader probes                      | 2185 ms     | 2190 ms  | 439 MB       | 410.3 MB      | 2353 ms      | 1 MB       | 260/260         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 396 ms      | 396 ms   | 60.5 MB      | 31.8 MB       | 185 ms       | 1.4 MB     | 45/45           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 36 ms    | 37 ms    | 32.1 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2022 ms  | 2047 ms  | 430.5 MB     | 2254 ms      | 240/240         | fixture-inspection     |
| target-registry  | 1        | 2086 ms  | 2140 ms  | 431.2 MB     | 2352 ms      | 248/248         | compat-report-registry |
| contract-capture | 1        | 2123 ms  | 2168 ms  | 432.1 MB     | 2376 ms      | 253/253         | contract-capture       |
| synthetic-probes | 1        | 2154 ms  | 2157 ms  | 431 MB       | 2362 ms      | 249/249         | synthetic-probe-plan   |
| cold-import      | 1        | 2108 ms  | 2124 ms  | 439.4 MB     | 2331 ms      | 250/250         | cold-import-readiness  |
| workspace-plan   | 1        | 2138 ms  | 2153 ms  | 438.1 MB     | 2377 ms      | 255/255         | workspace-plan         |
| platform-probes  | 1        | 2185 ms  | 2190 ms  | 439 MB       | 2353 ms      | 260/260         | platform-probes        |
| import-loop      | 1        | 396 ms   | 396 ms   | 60.5 MB      | 185 ms       | 45/45           | import-loop-profile    |
