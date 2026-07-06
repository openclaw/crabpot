# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 6245 ms            |
| Command P95 wall time  | 6374 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 5280               |
| CPU samples            | 5280               |
| Max peak RSS           | 420.5 MB           |
| Max RSS delta          | 390.6 MB           |
| Max CPU estimate       | 6950 ms            |
| Max harness heap delta | 8.3 MB             |

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
| node-boot              | Node boot                                       | 35 ms       | 37 ms    | 32.7 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 6092 ms     | 6199 ms  | 401.8 MB     | 373.6 MB      | 6769 ms      | 7.7 MB     | 726/726         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 6241 ms     | 6299 ms  | 418.1 MB     | 389.9 MB      | 6790 ms      | 8 MB       | 746/746         | 0          |
| contract-capture       | Contract capture inventory                      | 6374 ms     | 6376 ms  | 417 MB       | 387.5 MB      | 6912 ms      | 8.3 MB     | 756/756         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 6246 ms     | 6280 ms  | 420.5 MB     | 390.6 MB      | 6782 ms      | 8.3 MB     | 745/745         | 0          |
| cold-import-readiness  | Cold import readiness                           | 6319 ms     | 6375 ms  | 417.3 MB     | 387.4 MB      | 6850 ms      | 8.2 MB     | 753/753         | 0          |
| workspace-plan         | Workspace execution plan                        | 6308 ms     | 6417 ms  | 405.4 MB     | 375.6 MB      | 6950 ms      | 0.9 MB     | 755/755         | 0          |
| platform-probes        | Platform and loader probes                      | 6245 ms     | 6302 ms  | 411.8 MB     | 383.6 MB      | 6806 ms      | 2.1 MB     | 748/748         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 404 ms      | 408 ms   | 60.6 MB      | 32.4 MB       | 199 ms       | 1.4 MB     | 48/48           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 35 ms    | 37 ms    | 32.7 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 6092 ms  | 6199 ms  | 401.8 MB     | 6769 ms      | 726/726         | fixture-inspection     |
| target-registry  | 1        | 6241 ms  | 6299 ms  | 418.1 MB     | 6790 ms      | 746/746         | compat-report-registry |
| contract-capture | 1        | 6374 ms  | 6376 ms  | 417 MB       | 6912 ms      | 756/756         | contract-capture       |
| synthetic-probes | 1        | 6246 ms  | 6280 ms  | 420.5 MB     | 6782 ms      | 745/745         | synthetic-probe-plan   |
| cold-import      | 1        | 6319 ms  | 6375 ms  | 417.3 MB     | 6850 ms      | 753/753         | cold-import-readiness  |
| workspace-plan   | 1        | 6308 ms  | 6417 ms  | 405.4 MB     | 6950 ms      | 755/755         | workspace-plan         |
| platform-probes  | 1        | 6245 ms  | 6302 ms  | 411.8 MB     | 6806 ms      | 748/748         | platform-probes        |
| import-loop      | 1        | 404 ms   | 408 ms   | 60.6 MB      | 199 ms       | 48/48           | import-loop-profile    |
