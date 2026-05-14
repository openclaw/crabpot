# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2280 ms            |
| Command P95 wall time  | 2338 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1954               |
| CPU samples            | 1954               |
| Max peak RSS           | 465.9 MB           |
| Max RSS delta          | 436.8 MB           |
| Max CPU estimate       | 2609 ms            |
| Max harness heap delta | 7.9 MB             |

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
| sourceFiles           | 1739  |
| observedHooks         | 103   |
| observedRegistrations | 193   |
| observedSdkImports    | 1158  |
| contractProbes        | 266   |
| issueFindings         | 270   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 34 ms       | 37 ms    | 31.9 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2188 ms     | 2244 ms  | 440.9 MB     | 410.7 MB      | 2430 ms      | 7.9 MB     | 260/260         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2309 ms     | 2324 ms  | 443 MB       | 411.1 MB      | 2545 ms      | 7.7 MB     | 272/272         | 0          |
| contract-capture       | Contract capture inventory                      | 2338 ms     | 2425 ms  | 465.9 MB     | 436.8 MB      | 2609 ms      | 7.5 MB     | 275/275         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2280 ms     | 2304 ms  | 444 MB       | 415.3 MB      | 2504 ms      | 1.3 MB     | 272/272         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2279 ms     | 2317 ms  | 442.4 MB     | 413.5 MB      | 2528 ms      | 0.1 MB     | 273/273         | 0          |
| workspace-plan         | Workspace execution plan                        | 2310 ms     | 2311 ms  | 445.8 MB     | 417.1 MB      | 2529 ms      | 1.5 MB     | 276/276         | 0          |
| platform-probes        | Platform and loader probes                      | 2337 ms     | 2353 ms  | 451.5 MB     | 422.8 MB      | 2553 ms      | 1.6 MB     | 278/278         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 374 ms      | 375 ms   | 60.6 MB      | 31.9 MB       | 176 ms       | 1.4 MB     | 45/45           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 34 ms    | 37 ms    | 31.9 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2188 ms  | 2244 ms  | 440.9 MB     | 2430 ms      | 260/260         | fixture-inspection     |
| target-registry  | 1        | 2309 ms  | 2324 ms  | 443 MB       | 2545 ms      | 272/272         | compat-report-registry |
| contract-capture | 1        | 2338 ms  | 2425 ms  | 465.9 MB     | 2609 ms      | 275/275         | contract-capture       |
| synthetic-probes | 1        | 2280 ms  | 2304 ms  | 444 MB       | 2504 ms      | 272/272         | synthetic-probe-plan   |
| cold-import      | 1        | 2279 ms  | 2317 ms  | 442.4 MB     | 2528 ms      | 273/273         | cold-import-readiness  |
| workspace-plan   | 1        | 2310 ms  | 2311 ms  | 445.8 MB     | 2529 ms      | 276/276         | workspace-plan         |
| platform-probes  | 1        | 2337 ms  | 2353 ms  | 451.5 MB     | 2553 ms      | 278/278         | platform-probes        |
| import-loop      | 1        | 374 ms   | 375 ms   | 60.6 MB      | 176 ms       | 45/45           | import-loop-profile    |
