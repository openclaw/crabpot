# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 11556 ms           |
| Command P95 wall time  | 12037 ms           |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 9804               |
| CPU samples            | 9804               |
| Max peak RSS           | 757.2 MB           |
| Max RSS delta          | 729.2 MB           |
| Max CPU estimate       | 16050 ms           |
| Max harness heap delta | 29.9 MB            |

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
| sourceFiles           | 2305  |
| observedHooks         | 113   |
| observedRegistrations | 219   |
| observedSdkImports    | 1195  |
| contractProbes        | 218   |
| issueFindings         | 250   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 35 ms       | 41 ms    | 31.1 MB      | 0 MB          | 0 ms         | 0.5 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 11443 ms    | 11472 ms | 755 MB       | 727.1 MB      | 15740 ms     | 29.9 MB    | 1350/1350       | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 11494 ms    | 11550 ms | 752.8 MB     | 724.8 MB      | 15523 ms     | 21.1 MB    | 1359/1359       | 0          |
| contract-capture       | Contract capture inventory                      | 11556 ms    | 11696 ms | 752.2 MB     | 723.5 MB      | 15719 ms     | 21.2 MB    | 1372/1372       | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 11784 ms    | 11937 ms | 754 MB       | 725.9 MB      | 15972 ms     | 21.5 MB    | 1394/1394       | 0          |
| cold-import-readiness  | Cold import readiness                           | 11786 ms    | 11810 ms | 752.6 MB     | 724.6 MB      | 16050 ms     | 21.2 MB    | 1392/1392       | 0          |
| workspace-plan         | Workspace execution plan                        | 11720 ms    | 11827 ms | 755.8 MB     | 728.9 MB      | 16026 ms     | 20.9 MB    | 1386/1386       | 0          |
| platform-probes        | Platform and loader probes                      | 12037 ms    | 12127 ms | 757.2 MB     | 729.2 MB      | 15948 ms     | 21.4 MB    | 1430/1430       | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 988 ms      | 1003 ms  | 78.6 MB      | 51.8 MB       | 567 ms       | 1.8 MB     | 118/118         | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 35 ms    | 41 ms    | 31.1 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 11443 ms | 11472 ms | 755 MB       | 15740 ms     | 1350/1350       | fixture-inspection     |
| target-registry  | 1        | 11494 ms | 11550 ms | 752.8 MB     | 15523 ms     | 1359/1359       | compat-report-registry |
| contract-capture | 1        | 11556 ms | 11696 ms | 752.2 MB     | 15719 ms     | 1372/1372       | contract-capture       |
| synthetic-probes | 1        | 11784 ms | 11937 ms | 754 MB       | 15972 ms     | 1394/1394       | synthetic-probe-plan   |
| cold-import      | 1        | 11786 ms | 11810 ms | 752.6 MB     | 16050 ms     | 1392/1392       | cold-import-readiness  |
| workspace-plan   | 1        | 11720 ms | 11827 ms | 755.8 MB     | 16026 ms     | 1386/1386       | workspace-plan         |
| platform-probes  | 1        | 12037 ms | 12127 ms | 757.2 MB     | 15948 ms     | 1430/1430       | platform-probes        |
| import-loop      | 1        | 988 ms   | 1003 ms  | 78.6 MB      | 567 ms       | 118/118         | import-loop-profile    |
