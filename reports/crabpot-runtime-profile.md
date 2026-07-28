# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 6472 ms            |
| Command P95 wall time  | 6539 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 5467               |
| CPU samples            | 5467               |
| Max peak RSS           | 463.3 MB           |
| Max RSS delta          | 434.4 MB           |
| Max CPU estimate       | 7251 ms            |
| Max harness heap delta | 9.8 MB             |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 0          |
| hookNames              | 42         |
| apiRegistrars          | 59         |
| capturedRegistrars     | 32         |
| sdkExports             | 331        |
| manifestFields         | 45         |
| manifestContractFields | 23         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 60    |
| sourceFiles           | 2065  |
| observedHooks         | 111   |
| observedRegistrations | 211   |
| observedSdkImports    | 1333  |
| contractProbes        | 275   |
| issueFindings         | 400   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 33 ms       | 33 ms    | 32.8 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 6372 ms     | 6397 ms  | 392.4 MB     | 364.1 MB      | 7030 ms      | -1.6 MB    | 760/760         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 6402 ms     | 6432 ms  | 395.8 MB     | 366.3 MB      | 7056 ms      | 9.3 MB     | 764/764         | 0          |
| contract-capture       | Contract capture inventory                      | 6472 ms     | 6526 ms  | 396.4 MB     | 367.9 MB      | 7093 ms      | 9.8 MB     | 774/774         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 6531 ms     | 6571 ms  | 433.5 MB     | 404.8 MB      | 7162 ms      | -2 MB      | 779/779         | 0          |
| cold-import-readiness  | Cold import readiness                           | 6495 ms     | 6498 ms  | 400.8 MB     | 371.6 MB      | 7125 ms      | 9.7 MB     | 773/773         | 0          |
| workspace-plan         | Workspace execution plan                        | 6503 ms     | 6558 ms  | 438.2 MB     | 408.7 MB      | 7227 ms      | 2 MB       | 778/778         | 0          |
| platform-probes        | Platform and loader probes                      | 6539 ms     | 6616 ms  | 463.3 MB     | 434.4 MB      | 7251 ms      | 1.2 MB     | 782/782         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 459 ms      | 461 ms   | 60.8 MB      | 32.5 MB       | 215 ms       | 1.7 MB     | 54/54           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 33 ms    | 33 ms    | 32.8 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 6372 ms  | 6397 ms  | 392.4 MB     | 7030 ms      | 760/760         | fixture-inspection     |
| target-registry  | 1        | 6402 ms  | 6432 ms  | 395.8 MB     | 7056 ms      | 764/764         | compat-report-registry |
| contract-capture | 1        | 6472 ms  | 6526 ms  | 396.4 MB     | 7093 ms      | 774/774         | contract-capture       |
| synthetic-probes | 1        | 6531 ms  | 6571 ms  | 433.5 MB     | 7162 ms      | 779/779         | synthetic-probe-plan   |
| cold-import      | 1        | 6495 ms  | 6498 ms  | 400.8 MB     | 7125 ms      | 773/773         | cold-import-readiness  |
| workspace-plan   | 1        | 6503 ms  | 6558 ms  | 438.2 MB     | 7227 ms      | 778/778         | workspace-plan         |
| platform-probes  | 1        | 6539 ms  | 6616 ms  | 463.3 MB     | 7251 ms      | 782/782         | platform-probes        |
| import-loop      | 1        | 459 ms   | 461 ms   | 60.8 MB      | 215 ms       | 54/54           | import-loop-profile    |
