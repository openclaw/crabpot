# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 6045 ms            |
| Command P95 wall time  | 6094 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 5111               |
| CPU samples            | 5111               |
| Max peak RSS           | 205.8 MB           |
| Max RSS delta          | 177.6 MB           |
| Max CPU estimate       | 7281 ms            |
| Max harness heap delta | 7.8 MB             |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 0          |
| hookNames              | 42         |
| apiRegistrars          | 57         |
| capturedRegistrars     | 31         |
| sdkExports             | 315        |
| manifestFields         | 48         |
| manifestContractFields | 22         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 59    |
| sourceFiles           | 2154  |
| observedHooks         | 111   |
| observedRegistrations | 212   |
| observedSdkImports    | 1064  |
| contractProbes        | 248   |
| issueFindings         | 355   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 33 ms       | 34 ms    | 28.3 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 5922 ms     | 5923 ms  | 193.3 MB     | 165 MB        | 7059 ms      | 7.3 MB     | 707/707         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 6040 ms     | 6113 ms  | 193.7 MB     | 165.4 MB      | 7281 ms      | 0 MB       | 722/722         | 0          |
| contract-capture       | Contract capture inventory                      | 6045 ms     | 6073 ms  | 193.5 MB     | 165.2 MB      | 7215 ms      | 1.9 MB     | 719/719         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 6053 ms     | 6070 ms  | 194.4 MB     | 166.1 MB      | 7211 ms      | -1.2 MB    | 722/722         | 0          |
| cold-import-readiness  | Cold import readiness                           | 6048 ms     | 6052 ms  | 203.8 MB     | 175.5 MB      | 7184 ms      | 1.8 MB     | 721/721         | 0          |
| workspace-plan         | Workspace execution plan                        | 6093 ms     | 6095 ms  | 204.5 MB     | 176.2 MB      | 7265 ms      | 1.6 MB     | 727/727         | 0          |
| platform-probes        | Platform and loader probes                      | 6094 ms     | 6144 ms  | 205.8 MB     | 177.6 MB      | 7246 ms      | 7.8 MB     | 730/730         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 501 ms      | 504 ms   | 64.1 MB      | 35.8 MB       | 280 ms       | 1.8 MB     | 60/60           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 33 ms    | 34 ms    | 28.3 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 5922 ms  | 5923 ms  | 193.3 MB     | 7059 ms      | 707/707         | fixture-inspection     |
| target-registry  | 1        | 6040 ms  | 6113 ms  | 193.7 MB     | 7281 ms      | 722/722         | compat-report-registry |
| contract-capture | 1        | 6045 ms  | 6073 ms  | 193.5 MB     | 7215 ms      | 719/719         | contract-capture       |
| synthetic-probes | 1        | 6053 ms  | 6070 ms  | 194.4 MB     | 7211 ms      | 722/722         | synthetic-probe-plan   |
| cold-import      | 1        | 6048 ms  | 6052 ms  | 203.8 MB     | 7184 ms      | 721/721         | cold-import-readiness  |
| workspace-plan   | 1        | 6093 ms  | 6095 ms  | 204.5 MB     | 7265 ms      | 727/727         | workspace-plan         |
| platform-probes  | 1        | 6094 ms  | 6144 ms  | 205.8 MB     | 7246 ms      | 730/730         | platform-probes        |
| import-loop      | 1        | 501 ms   | 504 ms   | 64.1 MB      | 280 ms       | 60/60           | import-loop-profile    |
