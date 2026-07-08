# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 6294 ms            |
| Command P95 wall time  | 6396 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 5316               |
| CPU samples            | 5316               |
| Max peak RSS           | 519 MB             |
| Max RSS delta          | 489.5 MB           |
| Max CPU estimate       | 7008 ms            |
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
| sourceFiles           | 2017  |
| observedHooks         | 108   |
| observedRegistrations | 208   |
| observedSdkImports    | 1279  |
| contractProbes        | 275   |
| issueFindings         | 291   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 32 ms       | 35 ms    | 31.3 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 6126 ms     | 6200 ms  | 415.9 MB     | 387.7 MB      | 6721 ms      | 7.8 MB     | 732/732         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 6297 ms     | 6302 ms  | 519 MB       | 489.5 MB      | 6819 ms      | 8 MB       | 746/746         | 0          |
| contract-capture       | Contract capture inventory                      | 6270 ms     | 6279 ms  | 404.1 MB     | 375.9 MB      | 6813 ms      | 2 MB       | 747/747         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 6321 ms     | 6366 ms  | 419.6 MB     | 391.3 MB      | 6888 ms      | 2.3 MB     | 757/757         | 0          |
| cold-import-readiness  | Cold import readiness                           | 6294 ms     | 6298 ms  | 419.9 MB     | 391.6 MB      | 6846 ms      | 2 MB       | 752/752         | 0          |
| workspace-plan         | Workspace execution plan                        | 6389 ms     | 6441 ms  | 422 MB       | 393.8 MB      | 7008 ms      | 2.3 MB     | 764/764         | 0          |
| platform-probes        | Platform and loader probes                      | 6396 ms     | 6404 ms  | 410.7 MB     | 382.1 MB      | 6942 ms      | 8.2 MB     | 764/764         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 445 ms      | 445 ms   | 60.7 MB      | 32.4 MB       | 203 ms       | 1.6 MB     | 51/51           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 32 ms    | 35 ms    | 31.3 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 6126 ms  | 6200 ms  | 415.9 MB     | 6721 ms      | 732/732         | fixture-inspection     |
| target-registry  | 1        | 6297 ms  | 6302 ms  | 519 MB       | 6819 ms      | 746/746         | compat-report-registry |
| contract-capture | 1        | 6270 ms  | 6279 ms  | 404.1 MB     | 6813 ms      | 747/747         | contract-capture       |
| synthetic-probes | 1        | 6321 ms  | 6366 ms  | 419.6 MB     | 6888 ms      | 757/757         | synthetic-probe-plan   |
| cold-import      | 1        | 6294 ms  | 6298 ms  | 419.9 MB     | 6846 ms      | 752/752         | cold-import-readiness  |
| workspace-plan   | 1        | 6389 ms  | 6441 ms  | 422 MB       | 7008 ms      | 764/764         | workspace-plan         |
| platform-probes  | 1        | 6396 ms  | 6404 ms  | 410.7 MB     | 6942 ms      | 764/764         | platform-probes        |
| import-loop      | 1        | 445 ms   | 445 ms   | 60.7 MB      | 203 ms       | 51/51           | import-loop-profile    |
