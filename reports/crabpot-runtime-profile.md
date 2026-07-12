# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 6486 ms            |
| Command P95 wall time  | 6538 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 5461               |
| CPU samples            | 5461               |
| Max peak RSS           | 420.2 MB           |
| Max RSS delta          | 392 MB             |
| Max CPU estimate       | 7122 ms            |
| Max harness heap delta | 8.9 MB             |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 68         |
| hookNames              | 39         |
| apiRegistrars          | 55         |
| capturedRegistrars     | 30         |
| sdkExports             | 322        |
| manifestFields         | 43         |
| manifestContractFields | 21         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 60    |
| sourceFiles           | 2018  |
| observedHooks         | 108   |
| observedRegistrations | 207   |
| observedSdkImports    | 1267  |
| contractProbes        | 275   |
| issueFindings         | 294   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 37 ms       | 38 ms    | 30.1 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 6346 ms     | 6377 ms  | 420 MB       | 390.1 MB      | 6951 ms      | 8.6 MB     | 757/757         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 6486 ms     | 6500 ms  | 417.9 MB     | 388.4 MB      | 7083 ms      | 8.9 MB     | 774/774         | 0          |
| contract-capture       | Contract capture inventory                      | 6490 ms     | 6496 ms  | 403.1 MB     | 374.4 MB      | 7055 ms      | 8.7 MB     | 771/771         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 6508 ms     | 6525 ms  | 404.3 MB     | 376.1 MB      | 7068 ms      | -0.1 MB    | 774/774         | 0          |
| cold-import-readiness  | Cold import readiness                           | 6473 ms     | 6501 ms  | 408.6 MB     | 380.4 MB      | 7067 ms      | 2.4 MB     | 774/774         | 0          |
| workspace-plan         | Workspace execution plan                        | 6538 ms     | 6549 ms  | 420.2 MB     | 392 MB        | 7112 ms      | 2.8 MB     | 780/780         | 0          |
| platform-probes        | Platform and loader probes                      | 6502 ms     | 6558 ms  | 419 MB       | 390.8 MB      | 7122 ms      | 2.8 MB     | 778/778         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 430 ms      | 433 ms   | 60.7 MB      | 32.5 MB       | 192 ms       | 1.5 MB     | 50/50           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 37 ms    | 38 ms    | 30.1 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 6346 ms  | 6377 ms  | 420 MB       | 6951 ms      | 757/757         | fixture-inspection     |
| target-registry  | 1        | 6486 ms  | 6500 ms  | 417.9 MB     | 7083 ms      | 774/774         | compat-report-registry |
| contract-capture | 1        | 6490 ms  | 6496 ms  | 403.1 MB     | 7055 ms      | 771/771         | contract-capture       |
| synthetic-probes | 1        | 6508 ms  | 6525 ms  | 404.3 MB     | 7068 ms      | 774/774         | synthetic-probe-plan   |
| cold-import      | 1        | 6473 ms  | 6501 ms  | 408.6 MB     | 7067 ms      | 774/774         | cold-import-readiness  |
| workspace-plan   | 1        | 6538 ms  | 6549 ms  | 420.2 MB     | 7112 ms      | 780/780         | workspace-plan         |
| platform-probes  | 1        | 6502 ms  | 6558 ms  | 419 MB       | 7122 ms      | 778/778         | platform-probes        |
| import-loop      | 1        | 430 ms   | 433 ms   | 60.7 MB      | 192 ms       | 50/50           | import-loop-profile    |
