# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 470 ms             |
| Command P95 wall time  | 486 ms             |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 430                |
| CPU samples            | 430                |
| Max peak RSS           | 85.2 MB            |
| Max RSS delta          | 56.5 MB            |
| Max CPU estimate       | 502 ms             |
| Max harness heap delta | 1.8 MB             |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 56         |
| hookNames              | 34         |
| apiRegistrars          | 48         |
| capturedRegistrars     | 26         |
| sdkExports             | 291        |
| manifestFields         | 35         |
| manifestContractFields | 17         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 29    |
| sourceFiles           | 889   |
| observedHooks         | 76    |
| observedRegistrations | 100   |
| observedSdkImports    | 345   |
| contractProbes        | 155   |
| issueFindings         | 199   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 34 ms       | 35 ms    | 29.5 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 420 ms      | 449 ms   | 84.5 MB      | 55.8 MB       | 444 ms       | 1.8 MB     | 50/50           | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 460 ms      | 462 ms   | 82.4 MB      | 53.7 MB       | 475 ms       | 1.8 MB     | 54/54           | 0          |
| contract-capture       | Contract capture inventory                      | 471 ms      | 474 ms   | 84.3 MB      | 54.5 MB       | 478 ms       | 1.8 MB     | 55/55           | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 477 ms      | 484 ms   | 84.2 MB      | 55.5 MB       | 481 ms       | 1.7 MB     | 56/56           | 0          |
| cold-import-readiness  | Cold import readiness                           | 470 ms      | 471 ms   | 84.7 MB      | 56 MB         | 485 ms       | 1.6 MB     | 55/55           | 0          |
| workspace-plan         | Workspace execution plan                        | 474 ms      | 481 ms   | 84.9 MB      | 56.3 MB       | 490 ms       | 1.7 MB     | 55/55           | 0          |
| platform-probes        | Platform and loader probes                      | 486 ms      | 496 ms   | 85.2 MB      | 56.5 MB       | 502 ms       | 1.7 MB     | 57/57           | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 375 ms      | 376 ms   | 60.1 MB      | 31.4 MB       | 182 ms       | 1.4 MB     | 45/45           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 34 ms    | 35 ms    | 29.5 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 420 ms   | 449 ms   | 84.5 MB      | 444 ms       | 50/50           | fixture-inspection     |
| target-registry  | 1        | 460 ms   | 462 ms   | 82.4 MB      | 475 ms       | 54/54           | compat-report-registry |
| contract-capture | 1        | 471 ms   | 474 ms   | 84.3 MB      | 478 ms       | 55/55           | contract-capture       |
| synthetic-probes | 1        | 477 ms   | 484 ms   | 84.2 MB      | 481 ms       | 56/56           | synthetic-probe-plan   |
| cold-import      | 1        | 470 ms   | 471 ms   | 84.7 MB      | 485 ms       | 55/55           | cold-import-readiness  |
| workspace-plan   | 1        | 474 ms   | 481 ms   | 84.9 MB      | 490 ms       | 55/55           | workspace-plan         |
| platform-probes  | 1        | 486 ms   | 496 ms   | 85.2 MB      | 502 ms       | 57/57           | platform-probes        |
| import-loop      | 1        | 375 ms   | 376 ms   | 60.1 MB      | 182 ms       | 45/45           | import-loop-profile    |
