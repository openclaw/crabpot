# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 7364 ms            |
| Command P95 wall time  | 7692 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 6235               |
| CPU samples            | 6235               |
| Max peak RSS           | 757.1 MB           |
| Max RSS delta          | 727.6 MB           |
| Max CPU estimate       | 10267 ms           |
| Max harness heap delta | 19.5 MB            |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 34         |
| hookNames              | 42         |
| apiRegistrars          | 57         |
| capturedRegistrars     | 31         |
| sdkExports             | 338        |
| manifestFields         | 52         |
| manifestContractFields | 22         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 59    |
| sourceFiles           | 2288  |
| observedHooks         | 113   |
| observedRegistrations | 219   |
| observedSdkImports    | 1185  |
| contractProbes        | 238   |
| issueFindings         | 270   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 20 ms       | 25 ms    | 31.4 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 7180 ms     | 7198 ms  | 755.1 MB     | 725.4 MB      | 9818 ms      | 19.5 MB    | 852/852         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 7280 ms     | 7285 ms  | 754.5 MB     | 724.6 MB      | 9835 ms      | 14.8 MB    | 864/864         | 0          |
| contract-capture       | Contract capture inventory                      | 7439 ms     | 7599 ms  | 755.7 MB     | 726.2 MB      | 10152 ms     | 14.2 MB    | 886/886         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 7630 ms     | 7657 ms  | 754 MB       | 725.3 MB      | 10168 ms     | 14.2 MB    | 896/896         | 0          |
| cold-import-readiness  | Cold import readiness                           | 7414 ms     | 7468 ms  | 753.9 MB     | 724.1 MB      | 10194 ms     | 13.9 MB    | 874/874         | 0          |
| workspace-plan         | Workspace execution plan                        | 7364 ms     | 7549 ms  | 756.4 MB     | 727 MB        | 10267 ms     | 14.1 MB    | 879/879         | 0          |
| platform-probes        | Platform and loader probes                      | 7692 ms     | 7702 ms  | 757.1 MB     | 727.6 MB      | 10100 ms     | 14.3 MB    | 910/910         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 594 ms      | 603 ms   | 77.2 MB      | 48.4 MB       | 300 ms       | 1.2 MB     | 71/71           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 20 ms    | 25 ms    | 31.4 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 7180 ms  | 7198 ms  | 755.1 MB     | 9818 ms      | 852/852         | fixture-inspection     |
| target-registry  | 1        | 7280 ms  | 7285 ms  | 754.5 MB     | 9835 ms      | 864/864         | compat-report-registry |
| contract-capture | 1        | 7439 ms  | 7599 ms  | 755.7 MB     | 10152 ms     | 886/886         | contract-capture       |
| synthetic-probes | 1        | 7630 ms  | 7657 ms  | 754 MB       | 10168 ms     | 896/896         | synthetic-probe-plan   |
| cold-import      | 1        | 7414 ms  | 7468 ms  | 753.9 MB     | 10194 ms     | 874/874         | cold-import-readiness  |
| workspace-plan   | 1        | 7364 ms  | 7549 ms  | 756.4 MB     | 10267 ms     | 879/879         | workspace-plan         |
| platform-probes  | 1        | 7692 ms  | 7702 ms  | 757.1 MB     | 10100 ms     | 910/910         | platform-probes        |
| import-loop      | 1        | 594 ms   | 603 ms   | 77.2 MB      | 300 ms       | 71/71           | import-loop-profile    |
