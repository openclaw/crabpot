# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 6405 ms            |
| Command P95 wall time  | 6475 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 5413               |
| CPU samples            | 5413               |
| Max peak RSS           | 441.4 MB           |
| Max RSS delta          | 411.7 MB           |
| Max CPU estimate       | 7014 ms            |
| Max harness heap delta | 8.7 MB             |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 68         |
| hookNames              | 40         |
| apiRegistrars          | 55         |
| capturedRegistrars     | 30         |
| sdkExports             | 324        |
| manifestFields         | 44         |
| manifestContractFields | 22         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 60    |
| sourceFiles           | 2026  |
| observedHooks         | 110   |
| observedRegistrations | 211   |
| observedSdkImports    | 1326  |
| contractProbes        | 277   |
| issueFindings         | 291   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 36 ms       | 36 ms    | 32 MB        | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 6349 ms     | 6402 ms  | 396.4 MB     | 368.1 MB      | 6991 ms      | 8 MB       | 755/755         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 6420 ms     | 6426 ms  | 404.4 MB     | 374.1 MB      | 6966 ms      | 8.5 MB     | 766/766         | 0          |
| contract-capture       | Contract capture inventory                      | 6471 ms     | 6484 ms  | 399.1 MB     | 369.9 MB      | 6994 ms      | 8.7 MB     | 770/770         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 6432 ms     | 6450 ms  | 399.7 MB     | 371.5 MB      | 6972 ms      | 2.8 MB     | 767/767         | 0          |
| cold-import-readiness  | Cold import readiness                           | 6404 ms     | 6423 ms  | 441.4 MB     | 411.7 MB      | 7014 ms      | 1.7 MB     | 763/763         | 0          |
| workspace-plan         | Workspace execution plan                        | 6405 ms     | 6446 ms  | 401.4 MB     | 373.1 MB      | 6994 ms      | 2.3 MB     | 764/764         | 0          |
| platform-probes        | Platform and loader probes                      | 6475 ms     | 6480 ms  | 439.2 MB     | 411 MB        | 6985 ms      | 2.3 MB     | 772/772         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 460 ms      | 470 ms   | 60.6 MB      | 32.4 MB       | 218 ms       | 1.6 MB     | 53/53           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 36 ms    | 36 ms    | 32 MB        | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 6349 ms  | 6402 ms  | 396.4 MB     | 6991 ms      | 755/755         | fixture-inspection     |
| target-registry  | 1        | 6420 ms  | 6426 ms  | 404.4 MB     | 6966 ms      | 766/766         | compat-report-registry |
| contract-capture | 1        | 6471 ms  | 6484 ms  | 399.1 MB     | 6994 ms      | 770/770         | contract-capture       |
| synthetic-probes | 1        | 6432 ms  | 6450 ms  | 399.7 MB     | 6972 ms      | 767/767         | synthetic-probe-plan   |
| cold-import      | 1        | 6404 ms  | 6423 ms  | 441.4 MB     | 7014 ms      | 763/763         | cold-import-readiness  |
| workspace-plan   | 1        | 6405 ms  | 6446 ms  | 401.4 MB     | 6994 ms      | 764/764         | workspace-plan         |
| platform-probes  | 1        | 6475 ms  | 6480 ms  | 439.2 MB     | 6985 ms      | 772/772         | platform-probes        |
| import-loop      | 1        | 460 ms   | 470 ms   | 60.6 MB      | 218 ms       | 53/53           | import-loop-profile    |
