# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 11491 ms           |
| Command P95 wall time  | 11766 ms           |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 9669               |
| CPU samples            | 9669               |
| Max peak RSS           | 756.7 MB           |
| Max RSS delta          | 729.1 MB           |
| Max CPU estimate       | 15791 ms           |
| Max harness heap delta | 30 MB              |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 32         |
| hookNames              | 42         |
| apiRegistrars          | 59         |
| capturedRegistrars     | 31         |
| sdkExports             | 352        |
| manifestFields         | 57         |
| manifestContractFields | 24         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 59    |
| sourceFiles           | 2302  |
| observedHooks         | 113   |
| observedRegistrations | 218   |
| observedSdkImports    | 1204  |
| contractProbes        | 218   |
| issueFindings         | 250   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 29 ms       | 31 ms    | 31.2 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 11312 ms    | 11409 ms | 754.8 MB     | 726.5 MB      | 15505 ms     | 30 MB      | 1340/1340       | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 11574 ms    | 11599 ms | 754.3 MB     | 726.3 MB      | 15636 ms     | 21.4 MB    | 1367/1367       | 0          |
| contract-capture       | Contract capture inventory                      | 11491 ms    | 11506 ms | 754.8 MB     | 728.1 MB      | 15568 ms     | 21 MB      | 1357/1357       | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 11658 ms    | 11700 ms | 753.3 MB     | 726.6 MB      | 15620 ms     | 21.4 MB    | 1378/1378       | 0          |
| cold-import-readiness  | Cold import readiness                           | 11471 ms    | 11525 ms | 754 MB       | 727.4 MB      | 15714 ms     | 20.8 MB    | 1361/1361       | 0          |
| workspace-plan         | Workspace execution plan                        | 11560 ms    | 11574 ms | 756.7 MB     | 729.1 MB      | 15791 ms     | 20.7 MB    | 1364/1364       | 0          |
| platform-probes        | Platform and loader probes                      | 11766 ms    | 11788 ms | 755.3 MB     | 727.3 MB      | 15560 ms     | 21 MB      | 1388/1388       | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 928 ms      | 929 ms   | 78.5 MB      | 51.2 MB       | 526 ms       | 1.8 MB     | 111/111         | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 29 ms    | 31 ms    | 31.2 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 11312 ms | 11409 ms | 754.8 MB     | 15505 ms     | 1340/1340       | fixture-inspection     |
| target-registry  | 1        | 11574 ms | 11599 ms | 754.3 MB     | 15636 ms     | 1367/1367       | compat-report-registry |
| contract-capture | 1        | 11491 ms | 11506 ms | 754.8 MB     | 15568 ms     | 1357/1357       | contract-capture       |
| synthetic-probes | 1        | 11658 ms | 11700 ms | 753.3 MB     | 15620 ms     | 1378/1378       | synthetic-probe-plan   |
| cold-import      | 1        | 11471 ms | 11525 ms | 754 MB       | 15714 ms     | 1361/1361       | cold-import-readiness  |
| workspace-plan   | 1        | 11560 ms | 11574 ms | 756.7 MB     | 15791 ms     | 1364/1364       | workspace-plan         |
| platform-probes  | 1        | 11766 ms | 11788 ms | 755.3 MB     | 15560 ms     | 1388/1388       | platform-probes        |
| import-loop      | 1        | 928 ms   | 929 ms   | 78.5 MB      | 526 ms       | 111/111         | import-loop-profile    |
