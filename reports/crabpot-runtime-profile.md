# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2321 ms            |
| Command P95 wall time  | 2365 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1970               |
| CPU samples            | 1970               |
| Max peak RSS           | 473.7 MB           |
| Max RSS delta          | 443.5 MB           |
| Max CPU estimate       | 2613 ms            |
| Max harness heap delta | 8 MB               |

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
| node-boot              | Node boot                                       | 38 ms       | 39 ms    | 31.9 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2210 ms     | 2272 ms  | 440.7 MB     | 411.6 MB      | 2479 ms      | 8 MB       | 262/262         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2318 ms     | 2322 ms  | 442.3 MB     | 412.9 MB      | 2573 ms      | 7.6 MB     | 273/273         | 0          |
| contract-capture       | Contract capture inventory                      | 2338 ms     | 2361 ms  | 442.6 MB     | 412.9 MB      | 2573 ms      | 7.7 MB     | 271/271         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2321 ms     | 2329 ms  | 442.4 MB     | 413.8 MB      | 2518 ms      | 0.7 MB     | 276/276         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2340 ms     | 2358 ms  | 443.5 MB     | 414.8 MB      | 2613 ms      | 0.2 MB     | 279/279         | 0          |
| workspace-plan         | Workspace execution plan                        | 2341 ms     | 2381 ms  | 449.2 MB     | 420.5 MB      | 2589 ms      | 1.8 MB     | 279/279         | 0          |
| platform-probes        | Platform and loader probes                      | 2365 ms     | 2398 ms  | 473.7 MB     | 443.5 MB      | 2604 ms      | 1.7 MB     | 282/282         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 383 ms      | 394 ms   | 60.5 MB      | 31.8 MB       | 186 ms       | 1.4 MB     | 45/45           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 38 ms    | 39 ms    | 31.9 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2210 ms  | 2272 ms  | 440.7 MB     | 2479 ms      | 262/262         | fixture-inspection     |
| target-registry  | 1        | 2318 ms  | 2322 ms  | 442.3 MB     | 2573 ms      | 273/273         | compat-report-registry |
| contract-capture | 1        | 2338 ms  | 2361 ms  | 442.6 MB     | 2573 ms      | 271/271         | contract-capture       |
| synthetic-probes | 1        | 2321 ms  | 2329 ms  | 442.4 MB     | 2518 ms      | 276/276         | synthetic-probe-plan   |
| cold-import      | 1        | 2340 ms  | 2358 ms  | 443.5 MB     | 2613 ms      | 279/279         | cold-import-readiness  |
| workspace-plan   | 1        | 2341 ms  | 2381 ms  | 449.2 MB     | 2589 ms      | 279/279         | workspace-plan         |
| platform-probes  | 1        | 2365 ms  | 2398 ms  | 473.7 MB     | 2604 ms      | 282/282         | platform-probes        |
| import-loop      | 1        | 383 ms   | 394 ms   | 60.5 MB      | 186 ms       | 45/45           | import-loop-profile    |
