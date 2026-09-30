# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 8830 ms            |
| Command P95 wall time  | 9065 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 7508               |
| CPU samples            | 7508               |
| Max peak RSS           | 749.1 MB           |
| Max RSS delta          | 715.7 MB           |
| Max CPU estimate       | 11931 ms           |
| Max harness heap delta | 16.2 MB            |

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
| node-boot              | Node boot                                       | 25 ms       | 30 ms    | 40.2 MB      | 0 MB          | 25 ms        | 0.2 MB     | 2/2             | 0          |
| fixture-inspection     | Fixture inspection                              | 8686 ms     | 8713 ms  | 744.8 MB     | 711.6 MB      | 11710 ms     | 16.2 MB    | 1039/1039       | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 8830 ms     | 8834 ms  | 744.1 MB     | 708.7 MB      | 11722 ms     | 13.5 MB    | 1056/1056       | 0          |
| contract-capture       | Contract capture inventory                      | 8919 ms     | 8935 ms  | 745.7 MB     | 708.7 MB      | 11803 ms     | 11.5 MB    | 1065/1065       | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 8964 ms     | 8990 ms  | 744.7 MB     | 710.7 MB      | 11875 ms     | 11.6 MB    | 1070/1070       | 0          |
| cold-import-readiness  | Cold import readiness                           | 8781 ms     | 8792 ms  | 744 MB       | 708.3 MB      | 11767 ms     | 11.5 MB    | 1050/1050       | 0          |
| workspace-plan         | Workspace execution plan                        | 8872 ms     | 8884 ms  | 745 MB       | 707.2 MB      | 11931 ms     | 11.3 MB    | 1057/1057       | 0          |
| platform-probes        | Platform and loader probes                      | 9065 ms     | 9138 ms  | 749.1 MB     | 715.7 MB      | 11861 ms     | 11.5 MB    | 1085/1085       | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 713 ms      | 714 ms   | 75.4 MB      | 41.3 MB       | 426 ms       | 1 MB       | 84/84           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 25 ms    | 30 ms    | 40.2 MB      | 25 ms        | 2/2             | node-boot              |
| fixture-scan     | 1        | 8686 ms  | 8713 ms  | 744.8 MB     | 11710 ms     | 1039/1039       | fixture-inspection     |
| target-registry  | 1        | 8830 ms  | 8834 ms  | 744.1 MB     | 11722 ms     | 1056/1056       | compat-report-registry |
| contract-capture | 1        | 8919 ms  | 8935 ms  | 745.7 MB     | 11803 ms     | 1065/1065       | contract-capture       |
| synthetic-probes | 1        | 8964 ms  | 8990 ms  | 744.7 MB     | 11875 ms     | 1070/1070       | synthetic-probe-plan   |
| cold-import      | 1        | 8781 ms  | 8792 ms  | 744 MB       | 11767 ms     | 1050/1050       | cold-import-readiness  |
| workspace-plan   | 1        | 8872 ms  | 8884 ms  | 745 MB       | 11931 ms     | 1057/1057       | workspace-plan         |
| platform-probes  | 1        | 9065 ms  | 9138 ms  | 749.1 MB     | 11861 ms     | 1085/1085       | platform-probes        |
| import-loop      | 1        | 713 ms   | 714 ms   | 75.4 MB      | 426 ms       | 84/84           | import-loop-profile    |
