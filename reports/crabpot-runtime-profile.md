# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2192 ms            |
| Command P95 wall time  | 2261 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1888               |
| CPU samples            | 1888               |
| Max peak RSS           | 455.6 MB           |
| Max RSS delta          | 426.9 MB           |
| Max CPU estimate       | 2497 ms            |
| Max harness heap delta | 7.8 MB             |

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
| node-boot              | Node boot                                       | 33 ms       | 36 ms    | 32.5 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2191 ms     | 2219 ms  | 444.9 MB     | 413.6 MB      | 2456 ms      | 7.8 MB     | 258/258         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2214 ms     | 2216 ms  | 432.6 MB     | 403.9 MB      | 2422 ms      | 7.3 MB     | 259/259         | 0          |
| contract-capture       | Contract capture inventory                      | 2192 ms     | 2195 ms  | 433.2 MB     | 403.6 MB      | 2399 ms      | 0.3 MB     | 260/260         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2167 ms     | 2177 ms  | 432.7 MB     | 404 MB        | 2364 ms      | 1.1 MB     | 258/258         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2240 ms     | 2258 ms  | 455.6 MB     | 426.9 MB      | 2497 ms      | 1.2 MB     | 267/267         | 0          |
| workspace-plan         | Workspace execution plan                        | 2244 ms     | 2282 ms  | 441.9 MB     | 411.8 MB      | 2487 ms      | 1.3 MB     | 269/269         | 0          |
| platform-probes        | Platform and loader probes                      | 2261 ms     | 2266 ms  | 439.6 MB     | 410.9 MB      | 2481 ms      | 1.3 MB     | 269/269         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 376 ms      | 378 ms   | 60.5 MB      | 31.8 MB       | 186 ms       | 1.3 MB     | 45/45           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 33 ms    | 36 ms    | 32.5 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2191 ms  | 2219 ms  | 444.9 MB     | 2456 ms      | 258/258         | fixture-inspection     |
| target-registry  | 1        | 2214 ms  | 2216 ms  | 432.6 MB     | 2422 ms      | 259/259         | compat-report-registry |
| contract-capture | 1        | 2192 ms  | 2195 ms  | 433.2 MB     | 2399 ms      | 260/260         | contract-capture       |
| synthetic-probes | 1        | 2167 ms  | 2177 ms  | 432.7 MB     | 2364 ms      | 258/258         | synthetic-probe-plan   |
| cold-import      | 1        | 2240 ms  | 2258 ms  | 455.6 MB     | 2497 ms      | 267/267         | cold-import-readiness  |
| workspace-plan   | 1        | 2244 ms  | 2282 ms  | 441.9 MB     | 2487 ms      | 269/269         | workspace-plan         |
| platform-probes  | 1        | 2261 ms  | 2266 ms  | 439.6 MB     | 2481 ms      | 269/269         | platform-probes        |
| import-loop      | 1        | 376 ms   | 378 ms   | 60.5 MB      | 186 ms       | 45/45           | import-loop-profile    |
