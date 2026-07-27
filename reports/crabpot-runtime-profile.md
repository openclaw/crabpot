# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 6747 ms            |
| Command P95 wall time  | 6828 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 5687               |
| CPU samples            | 5687               |
| Max peak RSS           | 438.6 MB           |
| Max RSS delta          | 409.6 MB           |
| Max CPU estimate       | 7491 ms            |
| Max harness heap delta | 11 MB              |

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
| node-boot              | Node boot                                       | 40 ms       | 40 ms    | 30.6 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 6505 ms     | 6542 ms  | 433.5 MB     | 404.6 MB      | 7163 ms      | 9.8 MB     | 776/776         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 6702 ms     | 6809 ms  | 433 MB       | 403.1 MB      | 7401 ms      | -1.2 MB    | 803/803         | 0          |
| contract-capture       | Contract capture inventory                      | 6828 ms     | 6845 ms  | 395.9 MB     | 366.7 MB      | 7461 ms      | 11 MB      | 810/810         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 6788 ms     | 6804 ms  | 433.2 MB     | 405 MB        | 7430 ms      | -1.4 MB    | 810/810         | 0          |
| cold-import-readiness  | Cold import readiness                           | 6747 ms     | 6923 ms  | 431.1 MB     | 401.5 MB      | 7491 ms      | 10.5 MB    | 810/810         | 0          |
| workspace-plan         | Workspace execution plan                        | 6821 ms     | 6837 ms  | 438.6 MB     | 409.6 MB      | 7425 ms      | 1.3 MB     | 808/808         | 0          |
| platform-probes        | Platform and loader probes                      | 6797 ms     | 6802 ms  | 438.6 MB     | 409.2 MB      | 7379 ms      | 1.3 MB     | 809/809         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 500 ms      | 501 ms   | 60.6 MB      | 32.4 MB       | 247 ms       | 1.8 MB     | 58/58           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 40 ms    | 40 ms    | 30.6 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 6505 ms  | 6542 ms  | 433.5 MB     | 7163 ms      | 776/776         | fixture-inspection     |
| target-registry  | 1        | 6702 ms  | 6809 ms  | 433 MB       | 7401 ms      | 803/803         | compat-report-registry |
| contract-capture | 1        | 6828 ms  | 6845 ms  | 395.9 MB     | 7461 ms      | 810/810         | contract-capture       |
| synthetic-probes | 1        | 6788 ms  | 6804 ms  | 433.2 MB     | 7430 ms      | 810/810         | synthetic-probe-plan   |
| cold-import      | 1        | 6747 ms  | 6923 ms  | 431.1 MB     | 7491 ms      | 810/810         | cold-import-readiness  |
| workspace-plan   | 1        | 6821 ms  | 6837 ms  | 438.6 MB     | 7425 ms      | 808/808         | workspace-plan         |
| platform-probes  | 1        | 6797 ms  | 6802 ms  | 438.6 MB     | 7379 ms      | 809/809         | platform-probes        |
| import-loop      | 1        | 500 ms   | 501 ms   | 60.6 MB      | 247 ms       | 58/58           | import-loop-profile    |
