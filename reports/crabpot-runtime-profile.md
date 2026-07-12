# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 6338 ms            |
| Command P95 wall time  | 6440 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 5383               |
| CPU samples            | 5383               |
| Max peak RSS           | 419.7 MB           |
| Max RSS delta          | 389.3 MB           |
| Max CPU estimate       | 7044 ms            |
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
| node-boot              | Node boot                                       | 36 ms       | 36 ms    | 32.3 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 6280 ms     | 6398 ms  | 419.7 MB     | 389.3 MB      | 6923 ms      | 8.2 MB     | 750/750         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 6389 ms     | 6479 ms  | 402.8 MB     | 373.3 MB      | 6997 ms      | 8.3 MB     | 762/762         | 0          |
| contract-capture       | Contract capture inventory                      | 6424 ms     | 6474 ms  | 405.2 MB     | 375.2 MB      | 7044 ms      | 8.9 MB     | 768/768         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 6338 ms     | 6383 ms  | 403.1 MB     | 374.6 MB      | 6945 ms      | 8.6 MB     | 758/758         | 0          |
| cold-import-readiness  | Cold import readiness                           | 6319 ms     | 6372 ms  | 410.6 MB     | 382.5 MB      | 6900 ms      | 8.3 MB     | 757/757         | 0          |
| workspace-plan         | Workspace execution plan                        | 6413 ms     | 6447 ms  | 415.9 MB     | 385.3 MB      | 6989 ms      | 8.3 MB     | 763/763         | 0          |
| platform-probes        | Platform and loader probes                      | 6440 ms     | 6454 ms  | 410.4 MB     | 381.4 MB      | 6983 ms      | 2.5 MB     | 769/769         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 450 ms      | 453 ms   | 60.7 MB      | 32.5 MB       | 219 ms       | 1.6 MB     | 53/53           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 36 ms    | 36 ms    | 32.3 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 6280 ms  | 6398 ms  | 419.7 MB     | 6923 ms      | 750/750         | fixture-inspection     |
| target-registry  | 1        | 6389 ms  | 6479 ms  | 402.8 MB     | 6997 ms      | 762/762         | compat-report-registry |
| contract-capture | 1        | 6424 ms  | 6474 ms  | 405.2 MB     | 7044 ms      | 768/768         | contract-capture       |
| synthetic-probes | 1        | 6338 ms  | 6383 ms  | 403.1 MB     | 6945 ms      | 758/758         | synthetic-probe-plan   |
| cold-import      | 1        | 6319 ms  | 6372 ms  | 410.6 MB     | 6900 ms      | 757/757         | cold-import-readiness  |
| workspace-plan   | 1        | 6413 ms  | 6447 ms  | 415.9 MB     | 6989 ms      | 763/763         | workspace-plan         |
| platform-probes  | 1        | 6440 ms  | 6454 ms  | 410.4 MB     | 6983 ms      | 769/769         | platform-probes        |
| import-loop      | 1        | 450 ms   | 453 ms   | 60.7 MB      | 219 ms       | 53/53           | import-loop-profile    |
