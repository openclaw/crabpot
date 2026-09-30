# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 7586 ms            |
| Command P95 wall time  | 7844 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 6440               |
| CPU samples            | 6440               |
| Max peak RSS           | 758.9 MB           |
| Max RSS delta          | 730.7 MB           |
| Max CPU estimate       | 11077 ms           |
| Max harness heap delta | 21.4 MB            |

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
| node-boot              | Node boot                                       | 21 ms       | 22 ms    | 31.9 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 7649 ms     | 8050 ms  | 755.8 MB     | 725.8 MB      | 11077 ms     | 21.4 MB    | 911/911         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 7797 ms     | 7956 ms  | 753.5 MB     | 725.4 MB      | 10924 ms     | 14.8 MB    | 924/924         | 0          |
| contract-capture       | Contract capture inventory                      | 7586 ms     | 7627 ms  | 753.7 MB     | 725.6 MB      | 10304 ms     | 14.1 MB    | 897/897         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 7459 ms     | 7482 ms  | 753.8 MB     | 724.8 MB      | 9981 ms      | 13.8 MB    | 889/889         | 0          |
| cold-import-readiness  | Cold import readiness                           | 7754 ms     | 8058 ms  | 754.5 MB     | 725.9 MB      | 10991 ms     | 14.3 MB    | 922/922         | 0          |
| workspace-plan         | Workspace execution plan                        | 7512 ms     | 7621 ms  | 755.3 MB     | 726.1 MB      | 10410 ms     | 13.9 MB    | 892/892         | 0          |
| platform-probes        | Platform and loader probes                      | 7844 ms     | 7874 ms  | 758.9 MB     | 730.7 MB      | 10417 ms     | 14.4 MB    | 929/929         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 613 ms      | 624 ms   | 77.6 MB      | 48.5 MB       | 324 ms       | 1.2 MB     | 73/73           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 21 ms    | 22 ms    | 31.9 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 7649 ms  | 8050 ms  | 755.8 MB     | 11077 ms     | 911/911         | fixture-inspection     |
| target-registry  | 1        | 7797 ms  | 7956 ms  | 753.5 MB     | 10924 ms     | 924/924         | compat-report-registry |
| contract-capture | 1        | 7586 ms  | 7627 ms  | 753.7 MB     | 10304 ms     | 897/897         | contract-capture       |
| synthetic-probes | 1        | 7459 ms  | 7482 ms  | 753.8 MB     | 9981 ms      | 889/889         | synthetic-probe-plan   |
| cold-import      | 1        | 7754 ms  | 8058 ms  | 754.5 MB     | 10991 ms     | 922/922         | cold-import-readiness  |
| workspace-plan   | 1        | 7512 ms  | 7621 ms  | 755.3 MB     | 10410 ms     | 892/892         | workspace-plan         |
| platform-probes  | 1        | 7844 ms  | 7874 ms  | 758.9 MB     | 10417 ms     | 929/929         | platform-probes        |
| import-loop      | 1        | 613 ms   | 624 ms   | 77.6 MB      | 324 ms       | 73/73           | import-loop-profile    |
