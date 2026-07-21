# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 6319 ms            |
| Command P95 wall time  | 6462 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 5349               |
| CPU samples            | 5349               |
| Max peak RSS           | 439.3 MB           |
| Max RSS delta          | 411.1 MB           |
| Max CPU estimate       | 7018 ms            |
| Max harness heap delta | 9.3 MB             |

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
| sourceFiles           | 2031  |
| observedHooks         | 110   |
| observedRegistrations | 211   |
| observedSdkImports    | 1325  |
| contractProbes        | 276   |
| issueFindings         | 401   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 34 ms       | 35 ms    | 30.3 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 6222 ms     | 6260 ms  | 395.9 MB     | 367.7 MB      | 6817 ms      | 8.2 MB     | 743/743         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 6292 ms     | 6400 ms  | 433.6 MB     | 403.7 MB      | 6886 ms      | 8.6 MB     | 755/755         | 0          |
| contract-capture       | Contract capture inventory                      | 6462 ms     | 6510 ms  | 395.3 MB     | 367.1 MB      | 7018 ms      | 9.3 MB     | 765/765         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 6319 ms     | 6369 ms  | 433.6 MB     | 404.7 MB      | 6879 ms      | 2.6 MB     | 755/755         | 0          |
| cold-import-readiness  | Cold import readiness                           | 6327 ms     | 6335 ms  | 396.8 MB     | 368.2 MB      | 6911 ms      | 2.5 MB     | 756/756         | 0          |
| workspace-plan         | Workspace execution plan                        | 6342 ms     | 6388 ms  | 439.3 MB     | 411.1 MB      | 6899 ms      | 2.7 MB     | 759/759         | 0          |
| platform-probes        | Platform and loader probes                      | 6394 ms     | 6409 ms  | 401.4 MB     | 373.2 MB      | 6925 ms      | 2.6 MB     | 764/764         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 410 ms      | 419 ms   | 60.6 MB      | 32.3 MB       | 192 ms       | 1.5 MB     | 49/49           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 34 ms    | 35 ms    | 30.3 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 6222 ms  | 6260 ms  | 395.9 MB     | 6817 ms      | 743/743         | fixture-inspection     |
| target-registry  | 1        | 6292 ms  | 6400 ms  | 433.6 MB     | 6886 ms      | 755/755         | compat-report-registry |
| contract-capture | 1        | 6462 ms  | 6510 ms  | 395.3 MB     | 7018 ms      | 765/765         | contract-capture       |
| synthetic-probes | 1        | 6319 ms  | 6369 ms  | 433.6 MB     | 6879 ms      | 755/755         | synthetic-probe-plan   |
| cold-import      | 1        | 6327 ms  | 6335 ms  | 396.8 MB     | 6911 ms      | 756/756         | cold-import-readiness  |
| workspace-plan   | 1        | 6342 ms  | 6388 ms  | 439.3 MB     | 6899 ms      | 759/759         | workspace-plan         |
| platform-probes  | 1        | 6394 ms  | 6409 ms  | 401.4 MB     | 6925 ms      | 764/764         | platform-probes        |
| import-loop      | 1        | 410 ms   | 419 ms   | 60.6 MB      | 192 ms       | 49/49           | import-loop-profile    |
