# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2207 ms            |
| Command P95 wall time  | 2252 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1881               |
| CPU samples            | 1881               |
| Max peak RSS           | 457.6 MB           |
| Max RSS delta          | 429 MB             |
| Max CPU estimate       | 2476 ms            |
| Max harness heap delta | 7.7 MB             |

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
| contractProbes        | 301   |
| issueFindings         | 305   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 36 ms       | 36 ms    | 33.5 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2112 ms     | 2185 ms  | 431.4 MB     | 401.1 MB      | 2312 ms      | 7.7 MB     | 252/252         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2230 ms     | 2237 ms  | 433.4 MB     | 402.5 MB      | 2460 ms      | 7.5 MB     | 262/262         | 0          |
| contract-capture       | Contract capture inventory                      | 2207 ms     | 2213 ms  | 433.7 MB     | 405 MB        | 2417 ms      | 7.3 MB     | 262/262         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2231 ms     | 2254 ms  | 432.3 MB     | 402.4 MB      | 2430 ms      | 1.2 MB     | 261/261         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2180 ms     | 2184 ms  | 434.2 MB     | 405.2 MB      | 2387 ms      | 1.2 MB     | 260/260         | 0          |
| workspace-plan         | Workspace execution plan                        | 2249 ms     | 2253 ms  | 440.2 MB     | 411.6 MB      | 2476 ms      | 1.4 MB     | 267/267         | 0          |
| platform-probes        | Platform and loader probes                      | 2252 ms     | 2278 ms  | 457.6 MB     | 429 MB        | 2453 ms      | 1.4 MB     | 269/269         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 373 ms      | 374 ms   | 60.5 MB      | 31.8 MB       | 174 ms       | 1.4 MB     | 45/45           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 36 ms    | 36 ms    | 33.5 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2112 ms  | 2185 ms  | 431.4 MB     | 2312 ms      | 252/252         | fixture-inspection     |
| target-registry  | 1        | 2230 ms  | 2237 ms  | 433.4 MB     | 2460 ms      | 262/262         | compat-report-registry |
| contract-capture | 1        | 2207 ms  | 2213 ms  | 433.7 MB     | 2417 ms      | 262/262         | contract-capture       |
| synthetic-probes | 1        | 2231 ms  | 2254 ms  | 432.3 MB     | 2430 ms      | 261/261         | synthetic-probe-plan   |
| cold-import      | 1        | 2180 ms  | 2184 ms  | 434.2 MB     | 2387 ms      | 260/260         | cold-import-readiness  |
| workspace-plan   | 1        | 2249 ms  | 2253 ms  | 440.2 MB     | 2476 ms      | 267/267         | workspace-plan         |
| platform-probes  | 1        | 2252 ms  | 2278 ms  | 457.6 MB     | 2453 ms      | 269/269         | platform-probes        |
| import-loop      | 1        | 373 ms   | 374 ms   | 60.5 MB      | 174 ms       | 45/45           | import-loop-profile    |
