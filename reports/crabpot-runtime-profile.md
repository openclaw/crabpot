# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 6954 ms            |
| Command P95 wall time  | 7005 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 5840               |
| CPU samples            | 5840               |
| Max peak RSS           | 557.2 MB           |
| Max RSS delta          | 528.6 MB           |
| Max CPU estimate       | 8477 ms            |
| Max harness heap delta | 11.2 MB            |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 0          |
| hookNames              | 44         |
| apiRegistrars          | 56         |
| capturedRegistrars     | 32         |
| sdkExports             | 301        |
| manifestFields         | 45         |
| manifestContractFields | 23         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 60    |
| sourceFiles           | 2107  |
| observedHooks         | 111   |
| observedRegistrations | 210   |
| observedSdkImports    | 996   |
| contractProbes        | 267   |
| issueFindings         | 387   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 36 ms       | 36 ms    | 32.7 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 6761 ms     | 6808 ms  | 483.9 MB     | 454.3 MB      | 8197 ms      | -0.1 MB    | 805/805         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 6968 ms     | 6975 ms  | 502.7 MB     | 473.7 MB      | 8328 ms      | -0.7 MB    | 827/827         | 0          |
| contract-capture       | Contract capture inventory                      | 7005 ms     | 7029 ms  | 505.4 MB     | 475.1 MB      | 8322 ms      | 11.2 MB    | 831/831         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 6907 ms     | 6932 ms  | 494.2 MB     | 464.1 MB      | 8159 ms      | -0.9 MB    | 821/821         | 0          |
| cold-import-readiness  | Cold import readiness                           | 6983 ms     | 7023 ms  | 557.2 MB     | 528.6 MB      | 8329 ms      | -0.7 MB    | 827/827         | 0          |
| workspace-plan         | Workspace execution plan                        | 6991 ms     | 7041 ms  | 545.4 MB     | 515.8 MB      | 8477 ms      | 2.2 MB     | 828/828         | 0          |
| platform-probes        | Platform and loader probes                      | 6954 ms     | 6983 ms  | 556.5 MB     | 526.9 MB      | 8296 ms      | 2 MB       | 827/827         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 603 ms      | 632 ms   | 64.4 MB      | 35.9 MB       | 332 ms       | 2.2 MB     | 71/71           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 36 ms    | 36 ms    | 32.7 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 6761 ms  | 6808 ms  | 483.9 MB     | 8197 ms      | 805/805         | fixture-inspection     |
| target-registry  | 1        | 6968 ms  | 6975 ms  | 502.7 MB     | 8328 ms      | 827/827         | compat-report-registry |
| contract-capture | 1        | 7005 ms  | 7029 ms  | 505.4 MB     | 8322 ms      | 831/831         | contract-capture       |
| synthetic-probes | 1        | 6907 ms  | 6932 ms  | 494.2 MB     | 8159 ms      | 821/821         | synthetic-probe-plan   |
| cold-import      | 1        | 6983 ms  | 7023 ms  | 557.2 MB     | 8329 ms      | 827/827         | cold-import-readiness  |
| workspace-plan   | 1        | 6991 ms  | 7041 ms  | 545.4 MB     | 8477 ms      | 828/828         | workspace-plan         |
| platform-probes  | 1        | 6954 ms  | 6983 ms  | 556.5 MB     | 8296 ms      | 827/827         | platform-probes        |
| import-loop      | 1        | 603 ms   | 632 ms   | 64.4 MB      | 332 ms       | 71/71           | import-loop-profile    |
