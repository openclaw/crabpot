# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 6316 ms            |
| Command P95 wall time  | 6423 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 5324               |
| CPU samples            | 5324               |
| Max peak RSS           | 464.7 MB           |
| Max RSS delta          | 435.6 MB           |
| Max CPU estimate       | 6969 ms            |
| Max harness heap delta | 8.8 MB             |

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
| observedRegistrations | 207   |
| observedSdkImports    | 1267  |
| contractProbes        | 275   |
| issueFindings         | 294   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 36 ms       | 37 ms    | 32.1 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 6252 ms     | 6275 ms  | 401.7 MB     | 372.1 MB      | 6815 ms      | 8.2 MB     | 746/746         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 6423 ms     | 6427 ms  | 403.7 MB     | 374.2 MB      | 6969 ms      | 8.8 MB     | 763/763         | 0          |
| contract-capture       | Contract capture inventory                      | 6323 ms     | 6327 ms  | 417.8 MB     | 389.6 MB      | 6871 ms      | 2.4 MB     | 755/755         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 6316 ms     | 6317 ms  | 464.7 MB     | 435.6 MB      | 6873 ms      | 2.2 MB     | 753/753         | 0          |
| cold-import-readiness  | Cold import readiness                           | 6240 ms     | 6258 ms  | 416.5 MB     | 388.3 MB      | 6807 ms      | 1.8 MB     | 745/745         | 0          |
| workspace-plan         | Workspace execution plan                        | 6343 ms     | 6343 ms  | 417.9 MB     | 389.7 MB      | 6895 ms      | 2.2 MB     | 754/754         | 0          |
| platform-probes        | Platform and loader probes                      | 6320 ms     | 6335 ms  | 408.8 MB     | 380.2 MB      | 6845 ms      | 3.5 MB     | 753/753         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 438 ms      | 448 ms   | 60.6 MB      | 32.4 MB       | 207 ms       | 1.6 MB     | 52/52           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 36 ms    | 37 ms    | 32.1 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 6252 ms  | 6275 ms  | 401.7 MB     | 6815 ms      | 746/746         | fixture-inspection     |
| target-registry  | 1        | 6423 ms  | 6427 ms  | 403.7 MB     | 6969 ms      | 763/763         | compat-report-registry |
| contract-capture | 1        | 6323 ms  | 6327 ms  | 417.8 MB     | 6871 ms      | 755/755         | contract-capture       |
| synthetic-probes | 1        | 6316 ms  | 6317 ms  | 464.7 MB     | 6873 ms      | 753/753         | synthetic-probe-plan   |
| cold-import      | 1        | 6240 ms  | 6258 ms  | 416.5 MB     | 6807 ms      | 745/745         | cold-import-readiness  |
| workspace-plan   | 1        | 6343 ms  | 6343 ms  | 417.9 MB     | 6895 ms      | 754/754         | workspace-plan         |
| platform-probes  | 1        | 6320 ms  | 6335 ms  | 408.8 MB     | 6845 ms      | 753/753         | platform-probes        |
| import-loop      | 1        | 438 ms   | 448 ms   | 60.6 MB      | 207 ms       | 52/52           | import-loop-profile    |
