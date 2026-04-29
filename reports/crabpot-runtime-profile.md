# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 427 ms             |
| Command P95 wall time  | 444 ms             |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 381                |
| CPU samples            | 381                |
| Max peak RSS           | 85.2 MB            |
| Max RSS delta          | 56.4 MB            |
| Max CPU estimate       | 441 ms             |
| Max harness heap delta | 1.8 MB             |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 51         |
| hookNames              | 32         |
| apiRegistrars          | 41         |
| capturedRegistrars     | 19         |
| sdkExports             | 316        |
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
| issueFindings         | 196   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 26 ms       | 33 ms    | 28.7 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 374 ms      | 374 ms   | 82.1 MB      | 53.4 MB       | 365 ms       | 1.5 MB     | 45/45           | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 421 ms      | 424 ms   | 82.7 MB      | 54 MB         | 417 ms       | 1.7 MB     | 50/50           | 0          |
| contract-capture       | Contract capture inventory                      | 427 ms      | 437 ms   | 83.8 MB      | 55 MB         | 402 ms       | 1.7 MB     | 51/51           | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 432 ms      | 440 ms   | 84.4 MB      | 55.6 MB       | 408 ms       | 1.8 MB     | 51/51           | 0          |
| cold-import-readiness  | Cold import readiness                           | 428 ms      | 443 ms   | 83.7 MB      | 55.1 MB       | 422 ms       | 1.6 MB     | 51/51           | 0          |
| workspace-plan         | Workspace execution plan                        | 439 ms      | 446 ms   | 83.7 MB      | 54.9 MB       | 437 ms       | 1.6 MB     | 52/52           | 0          |
| platform-probes        | Platform and loader probes                      | 444 ms      | 450 ms   | 85.2 MB      | 56.4 MB       | 441 ms       | 1.6 MB     | 54/54           | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 197 ms      | 202 ms   | 59.3 MB      | 30.5 MB       | 112 ms       | 0.8 MB     | 24/24           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 26 ms    | 33 ms    | 28.7 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 374 ms   | 374 ms   | 82.1 MB      | 365 ms       | 45/45           | fixture-inspection     |
| target-registry  | 1        | 421 ms   | 424 ms   | 82.7 MB      | 417 ms       | 50/50           | compat-report-registry |
| contract-capture | 1        | 427 ms   | 437 ms   | 83.8 MB      | 402 ms       | 51/51           | contract-capture       |
| synthetic-probes | 1        | 432 ms   | 440 ms   | 84.4 MB      | 408 ms       | 51/51           | synthetic-probe-plan   |
| cold-import      | 1        | 428 ms   | 443 ms   | 83.7 MB      | 422 ms       | 51/51           | cold-import-readiness  |
| workspace-plan   | 1        | 439 ms   | 446 ms   | 83.7 MB      | 437 ms       | 52/52           | workspace-plan         |
| platform-probes  | 1        | 444 ms   | 450 ms   | 85.2 MB      | 441 ms       | 54/54           | platform-probes        |
| import-loop      | 1        | 197 ms   | 202 ms   | 59.3 MB      | 112 ms       | 24/24           | import-loop-profile    |
