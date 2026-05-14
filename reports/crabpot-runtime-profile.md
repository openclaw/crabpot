# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2286 ms            |
| Command P95 wall time  | 2384 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1964               |
| CPU samples            | 1964               |
| Max peak RSS           | 468.5 MB           |
| Max RSS delta          | 438.3 MB           |
| Max CPU estimate       | 2630 ms            |
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
| sourceFiles           | 1739  |
| observedHooks         | 103   |
| observedRegistrations | 193   |
| observedSdkImports    | 1158  |
| contractProbes        | 266   |
| issueFindings         | 270   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 34 ms       | 38 ms    | 31.4 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2167 ms     | 2254 ms  | 465 MB       | 434.6 MB      | 2484 ms      | 7.8 MB     | 259/259         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2284 ms     | 2334 ms  | 442.1 MB     | 411.9 MB      | 2535 ms      | 7.7 MB     | 271/271         | 0          |
| contract-capture       | Contract capture inventory                      | 2297 ms     | 2315 ms  | 442.8 MB     | 413.4 MB      | 2534 ms      | 7.5 MB     | 271/271         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2286 ms     | 2320 ms  | 442.3 MB     | 413.6 MB      | 2515 ms      | 0.5 MB     | 270/270         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2317 ms     | 2317 ms  | 445.8 MB     | 417.2 MB      | 2556 ms      | 1.6 MB     | 276/276         | 0          |
| workspace-plan         | Workspace execution plan                        | 2365 ms     | 2408 ms  | 448.4 MB     | 419.4 MB      | 2630 ms      | 1.8 MB     | 283/283         | 0          |
| platform-probes        | Platform and loader probes                      | 2384 ms     | 2393 ms  | 468.5 MB     | 438.3 MB      | 2565 ms      | 1.9 MB     | 284/284         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 397 ms      | 399 ms   | 60.5 MB      | 31.8 MB       | 196 ms       | 1.4 MB     | 47/47           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 34 ms    | 38 ms    | 31.4 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2167 ms  | 2254 ms  | 465 MB       | 2484 ms      | 259/259         | fixture-inspection     |
| target-registry  | 1        | 2284 ms  | 2334 ms  | 442.1 MB     | 2535 ms      | 271/271         | compat-report-registry |
| contract-capture | 1        | 2297 ms  | 2315 ms  | 442.8 MB     | 2534 ms      | 271/271         | contract-capture       |
| synthetic-probes | 1        | 2286 ms  | 2320 ms  | 442.3 MB     | 2515 ms      | 270/270         | synthetic-probe-plan   |
| cold-import      | 1        | 2317 ms  | 2317 ms  | 445.8 MB     | 2556 ms      | 276/276         | cold-import-readiness  |
| workspace-plan   | 1        | 2365 ms  | 2408 ms  | 448.4 MB     | 2630 ms      | 283/283         | workspace-plan         |
| platform-probes  | 1        | 2384 ms  | 2393 ms  | 468.5 MB     | 2565 ms      | 284/284         | platform-probes        |
| import-loop      | 1        | 397 ms   | 399 ms   | 60.5 MB      | 196 ms       | 47/47           | import-loop-profile    |
