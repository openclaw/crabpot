# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 6242 ms            |
| Command P95 wall time  | 6344 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 5277               |
| CPU samples            | 5277               |
| Max peak RSS           | 463.6 MB           |
| Max RSS delta          | 434 MB             |
| Max CPU estimate       | 6849 ms            |
| Max harness heap delta | 8 MB               |

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
| sourceFiles           | 2017  |
| observedHooks         | 108   |
| observedRegistrations | 208   |
| observedSdkImports    | 1279  |
| contractProbes        | 275   |
| issueFindings         | 291   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 33 ms       | 35 ms    | 32.7 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 6177 ms     | 6197 ms  | 463.6 MB     | 434 MB        | 6724 ms      | 7.4 MB     | 736/736         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 6248 ms     | 6272 ms  | 403.6 MB     | 373.7 MB      | 6824 ms      | 7.7 MB     | 741/741         | 0          |
| contract-capture       | Contract capture inventory                      | 6242 ms     | 6264 ms  | 404.6 MB     | 375.6 MB      | 6791 ms      | 2 MB       | 745/745         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 6271 ms     | 6289 ms  | 409.3 MB     | 381 MB        | 6792 ms      | 2.1 MB     | 750/750         | 0          |
| cold-import-readiness  | Cold import readiness                           | 6217 ms     | 6276 ms  | 402.9 MB     | 374.5 MB      | 6772 ms      | 1.7 MB     | 745/745         | 0          |
| workspace-plan         | Workspace execution plan                        | 6297 ms     | 6307 ms  | 405.1 MB     | 376.9 MB      | 6849 ms      | 3.1 MB     | 750/750         | 0          |
| platform-probes        | Platform and loader probes                      | 6344 ms     | 6348 ms  | 411.1 MB     | 382.9 MB      | 6834 ms      | 8 MB       | 758/758         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 405 ms      | 431 ms   | 61.1 MB      | 32.9 MB       | 197 ms       | 1.5 MB     | 49/49           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 33 ms    | 35 ms    | 32.7 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 6177 ms  | 6197 ms  | 463.6 MB     | 6724 ms      | 736/736         | fixture-inspection     |
| target-registry  | 1        | 6248 ms  | 6272 ms  | 403.6 MB     | 6824 ms      | 741/741         | compat-report-registry |
| contract-capture | 1        | 6242 ms  | 6264 ms  | 404.6 MB     | 6791 ms      | 745/745         | contract-capture       |
| synthetic-probes | 1        | 6271 ms  | 6289 ms  | 409.3 MB     | 6792 ms      | 750/750         | synthetic-probe-plan   |
| cold-import      | 1        | 6217 ms  | 6276 ms  | 402.9 MB     | 6772 ms      | 745/745         | cold-import-readiness  |
| workspace-plan   | 1        | 6297 ms  | 6307 ms  | 405.1 MB     | 6849 ms      | 750/750         | workspace-plan         |
| platform-probes  | 1        | 6344 ms  | 6348 ms  | 411.1 MB     | 6834 ms      | 758/758         | platform-probes        |
| import-loop      | 1        | 405 ms   | 431 ms   | 61.1 MB      | 197 ms       | 49/49           | import-loop-profile    |
