# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2130 ms            |
| Command P95 wall time  | 2177 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1812               |
| CPU samples            | 1812               |
| Max peak RSS           | 448.8 MB           |
| Max RSS delta          | 420.1 MB           |
| Max CPU estimate       | 2382 ms            |
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
| sourceFiles           | 1596  |
| observedHooks         | 93    |
| observedRegistrations | 188   |
| observedSdkImports    | 1012  |
| contractProbes        | 322   |
| issueFindings         | 328   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 37 ms       | 41 ms    | 31.8 MB      | 0 MB          | 41 ms        | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2034 ms     | 2037 ms  | 430.9 MB     | 401.2 MB      | 2218 ms      | 7.4 MB     | 240/240         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2137 ms     | 2163 ms  | 431.4 MB     | 401.3 MB      | 2381 ms      | 7.1 MB     | 252/252         | 0          |
| contract-capture       | Contract capture inventory                      | 2115 ms     | 2186 ms  | 431.3 MB     | 402.2 MB      | 2365 ms      | 7.1 MB     | 252/252         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2140 ms     | 2141 ms  | 448.8 MB     | 420.1 MB      | 2332 ms      | 0.8 MB     | 251/251         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2130 ms     | 2131 ms  | 441.4 MB     | 412.7 MB      | 2345 ms      | 0.9 MB     | 252/252         | 0          |
| workspace-plan         | Workspace execution plan                        | 2156 ms     | 2179 ms  | 439.2 MB     | 410.5 MB      | 2382 ms      | 1.2 MB     | 256/256         | 0          |
| platform-probes        | Platform and loader probes                      | 2177 ms     | 2189 ms  | 438.2 MB     | 409.5 MB      | 2382 ms      | 1.1 MB     | 260/260         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 384 ms      | 397 ms   | 60.5 MB      | 31.8 MB       | 181 ms       | 1.4 MB     | 46/46           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 37 ms    | 41 ms    | 31.8 MB      | 41 ms        | 3/3             | node-boot              |
| fixture-scan     | 1        | 2034 ms  | 2037 ms  | 430.9 MB     | 2218 ms      | 240/240         | fixture-inspection     |
| target-registry  | 1        | 2137 ms  | 2163 ms  | 431.4 MB     | 2381 ms      | 252/252         | compat-report-registry |
| contract-capture | 1        | 2115 ms  | 2186 ms  | 431.3 MB     | 2365 ms      | 252/252         | contract-capture       |
| synthetic-probes | 1        | 2140 ms  | 2141 ms  | 448.8 MB     | 2332 ms      | 251/251         | synthetic-probe-plan   |
| cold-import      | 1        | 2130 ms  | 2131 ms  | 441.4 MB     | 2345 ms      | 252/252         | cold-import-readiness  |
| workspace-plan   | 1        | 2156 ms  | 2179 ms  | 439.2 MB     | 2382 ms      | 256/256         | workspace-plan         |
| platform-probes  | 1        | 2177 ms  | 2189 ms  | 438.2 MB     | 2382 ms      | 260/260         | platform-probes        |
| import-loop      | 1        | 384 ms   | 397 ms   | 60.5 MB      | 181 ms       | 46/46           | import-loop-profile    |
