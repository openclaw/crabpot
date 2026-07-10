# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 6548 ms            |
| Command P95 wall time  | 6654 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 5519               |
| CPU samples            | 5519               |
| Max peak RSS           | 418.3 MB           |
| Max RSS delta          | 389.4 MB           |
| Max CPU estimate       | 7238 ms            |
| Max harness heap delta | 9.2 MB             |

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
| node-boot              | Node boot                                       | 36 ms       | 38 ms    | 31.1 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 6391 ms     | 6430 ms  | 417.6 MB     | 389.4 MB      | 6970 ms      | 8.3 MB     | 763/763         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 6548 ms     | 6573 ms  | 417.4 MB     | 387.9 MB      | 7138 ms      | 8.6 MB     | 778/778         | 0          |
| contract-capture       | Contract capture inventory                      | 6576 ms     | 6577 ms  | 404.7 MB     | 375.6 MB      | 7136 ms      | 8.8 MB     | 782/782         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 6654 ms     | 6708 ms  | 418.3 MB     | 388.7 MB      | 7238 ms      | 9.2 MB     | 792/792         | 0          |
| cold-import-readiness  | Cold import readiness                           | 6519 ms     | 6626 ms  | 408.5 MB     | 379.2 MB      | 7189 ms      | 8.6 MB     | 783/783         | 0          |
| workspace-plan         | Workspace execution plan                        | 6565 ms     | 6594 ms  | 406.3 MB     | 377.8 MB      | 7174 ms      | 1.5 MB     | 782/782         | 0          |
| platform-probes        | Platform and loader probes                      | 6590 ms     | 6602 ms  | 410.4 MB     | 382.1 MB      | 7130 ms      | 2.3 MB     | 784/784         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 423 ms      | 495 ms   | 60.8 MB      | 32.5 MB       | 265 ms       | 1.7 MB     | 52/52           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 36 ms    | 38 ms    | 31.1 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 6391 ms  | 6430 ms  | 417.6 MB     | 6970 ms      | 763/763         | fixture-inspection     |
| target-registry  | 1        | 6548 ms  | 6573 ms  | 417.4 MB     | 7138 ms      | 778/778         | compat-report-registry |
| contract-capture | 1        | 6576 ms  | 6577 ms  | 404.7 MB     | 7136 ms      | 782/782         | contract-capture       |
| synthetic-probes | 1        | 6654 ms  | 6708 ms  | 418.3 MB     | 7238 ms      | 792/792         | synthetic-probe-plan   |
| cold-import      | 1        | 6519 ms  | 6626 ms  | 408.5 MB     | 7189 ms      | 783/783         | cold-import-readiness  |
| workspace-plan   | 1        | 6565 ms  | 6594 ms  | 406.3 MB     | 7174 ms      | 782/782         | workspace-plan         |
| platform-probes  | 1        | 6590 ms  | 6602 ms  | 410.4 MB     | 7130 ms      | 784/784         | platform-probes        |
| import-loop      | 1        | 423 ms   | 495 ms   | 60.8 MB      | 265 ms       | 52/52           | import-loop-profile    |
