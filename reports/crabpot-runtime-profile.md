# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2193 ms            |
| Command P95 wall time  | 2260 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1882               |
| CPU samples            | 1882               |
| Max peak RSS           | 457.5 MB           |
| Max RSS delta          | 428.5 MB           |
| Max CPU estimate       | 2527 ms            |
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
| sourceFiles           | 1784  |
| observedHooks         | 96    |
| observedRegistrations | 193   |
| observedSdkImports    | 1159  |
| contractProbes        | 299   |
| issueFindings         | 303   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 34 ms       | 36 ms    | 31.8 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2065 ms     | 2136 ms  | 448.4 MB     | 417.6 MB      | 2343 ms      | 7.3 MB     | 246/246         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2204 ms     | 2262 ms  | 432.5 MB     | 402.3 MB      | 2479 ms      | 7.3 MB     | 263/263         | 0          |
| contract-capture       | Contract capture inventory                      | 2247 ms     | 2290 ms  | 431.6 MB     | 401.4 MB      | 2485 ms      | 7.2 MB     | 267/267         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2193 ms     | 2215 ms  | 432.3 MB     | 403.6 MB      | 2389 ms      | 0.9 MB     | 258/258         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2184 ms     | 2187 ms  | 435.8 MB     | 406.5 MB      | 2394 ms      | 1 MB       | 260/260         | 0          |
| workspace-plan         | Workspace execution plan                        | 2249 ms     | 2251 ms  | 439.9 MB     | 411.1 MB      | 2499 ms      | 1.2 MB     | 267/267         | 0          |
| platform-probes        | Platform and loader probes                      | 2260 ms     | 2306 ms  | 457.5 MB     | 428.5 MB      | 2527 ms      | 1.4 MB     | 272/272         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 383 ms      | 399 ms   | 60.5 MB      | 31.8 MB       | 172 ms       | 1.4 MB     | 46/46           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 34 ms    | 36 ms    | 31.8 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2065 ms  | 2136 ms  | 448.4 MB     | 2343 ms      | 246/246         | fixture-inspection     |
| target-registry  | 1        | 2204 ms  | 2262 ms  | 432.5 MB     | 2479 ms      | 263/263         | compat-report-registry |
| contract-capture | 1        | 2247 ms  | 2290 ms  | 431.6 MB     | 2485 ms      | 267/267         | contract-capture       |
| synthetic-probes | 1        | 2193 ms  | 2215 ms  | 432.3 MB     | 2389 ms      | 258/258         | synthetic-probe-plan   |
| cold-import      | 1        | 2184 ms  | 2187 ms  | 435.8 MB     | 2394 ms      | 260/260         | cold-import-readiness  |
| workspace-plan   | 1        | 2249 ms  | 2251 ms  | 439.9 MB     | 2499 ms      | 267/267         | workspace-plan         |
| platform-probes  | 1        | 2260 ms  | 2306 ms  | 457.5 MB     | 2527 ms      | 272/272         | platform-probes        |
| import-loop      | 1        | 383 ms   | 399 ms   | 60.5 MB      | 172 ms       | 46/46           | import-loop-profile    |
