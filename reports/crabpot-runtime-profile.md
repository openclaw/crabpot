# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 6297 ms            |
| Command P95 wall time  | 6376 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 5309               |
| CPU samples            | 5309               |
| Max peak RSS           | 420.7 MB           |
| Max RSS delta          | 392.4 MB           |
| Max CPU estimate       | 6937 ms            |
| Max harness heap delta | 8.2 MB             |

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
| observedRegistrations | 208   |
| observedSdkImports    | 1279  |
| contractProbes        | 275   |
| issueFindings         | 291   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 33 ms       | 34 ms    | 31.5 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 6115 ms     | 6123 ms  | 420.4 MB     | 392.2 MB      | 6714 ms      | 7.5 MB     | 729/729         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 6271 ms     | 6338 ms  | 417.8 MB     | 389 MB        | 6870 ms      | 8.2 MB     | 747/747         | 0          |
| contract-capture       | Contract capture inventory                      | 6376 ms     | 6395 ms  | 420.7 MB     | 392.4 MB      | 6937 ms      | 2.5 MB     | 759/759         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 6370 ms     | 6371 ms  | 419 MB       | 390.7 MB      | 6919 ms      | 2.4 MB     | 760/760         | 0          |
| cold-import-readiness  | Cold import readiness                           | 6319 ms     | 6335 ms  | 410.7 MB     | 382.5 MB      | 6878 ms      | 1.9 MB     | 756/756         | 0          |
| workspace-plan         | Workspace execution plan                        | 6297 ms     | 6389 ms  | 411.2 MB     | 382.4 MB      | 6926 ms      | 2.1 MB     | 754/754         | 0          |
| platform-probes        | Platform and loader probes                      | 6322 ms     | 6322 ms  | 415.8 MB     | 387.6 MB      | 6815 ms      | 8 MB       | 753/753         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 403 ms      | 421 ms   | 60.6 MB      | 32.4 MB       | 189 ms       | 1.5 MB     | 48/48           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 33 ms    | 34 ms    | 31.5 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 6115 ms  | 6123 ms  | 420.4 MB     | 6714 ms      | 729/729         | fixture-inspection     |
| target-registry  | 1        | 6271 ms  | 6338 ms  | 417.8 MB     | 6870 ms      | 747/747         | compat-report-registry |
| contract-capture | 1        | 6376 ms  | 6395 ms  | 420.7 MB     | 6937 ms      | 759/759         | contract-capture       |
| synthetic-probes | 1        | 6370 ms  | 6371 ms  | 419 MB       | 6919 ms      | 760/760         | synthetic-probe-plan   |
| cold-import      | 1        | 6319 ms  | 6335 ms  | 410.7 MB     | 6878 ms      | 756/756         | cold-import-readiness  |
| workspace-plan   | 1        | 6297 ms  | 6389 ms  | 411.2 MB     | 6926 ms      | 754/754         | workspace-plan         |
| platform-probes  | 1        | 6322 ms  | 6322 ms  | 415.8 MB     | 6815 ms      | 753/753         | platform-probes        |
| import-loop      | 1        | 403 ms   | 421 ms   | 60.6 MB      | 189 ms       | 48/48           | import-loop-profile    |
