# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 12201 ms           |
| Command P95 wall time  | 12532 ms           |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 10256              |
| CPU samples            | 10256              |
| Max peak RSS           | 758.9 MB           |
| Max RSS delta          | 731 MB             |
| Max CPU estimate       | 16937 ms           |
| Max harness heap delta | 31.9 MB            |

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
| sourceFiles           | 2280  |
| observedHooks         | 113   |
| observedRegistrations | 217   |
| observedSdkImports    | 1185  |
| contractProbes        | 235   |
| issueFindings         | 267   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 37 ms       | 41 ms    | 29.2 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 12184 ms    | 12262 ms | 753.6 MB     | 726.2 MB      | 16873 ms     | 31.9 MB    | 1438/1438       | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 12391 ms    | 12408 ms | 753 MB       | 725.8 MB      | 16937 ms     | 22.7 MB    | 1456/1456       | 0          |
| contract-capture       | Contract capture inventory                      | 12353 ms    | 12489 ms | 755.8 MB     | 727.6 MB      | 16873 ms     | 22.8 MB    | 1453/1453       | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 12373 ms    | 12374 ms | 750.2 MB     | 723 MB        | 16827 ms     | 22.6 MB    | 1453/1453       | 0          |
| cold-import-readiness  | Cold import readiness                           | 12091 ms    | 12126 ms | 751.1 MB     | 722.7 MB      | 16577 ms     | 21.8 MB    | 1425/1425       | 0          |
| workspace-plan         | Workspace execution plan                        | 12201 ms    | 12208 ms | 758.9 MB     | 731 MB        | 16701 ms     | 21.7 MB    | 1424/1424       | 0          |
| platform-probes        | Platform and loader probes                      | 12532 ms    | 12619 ms | 752.5 MB     | 724 MB        | 16708 ms     | 22.4 MB    | 1482/1482       | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 1014 ms     | 1053 ms  | 78.3 MB      | 50.3 MB       | 629 ms       | 2 MB       | 122/122         | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 37 ms    | 41 ms    | 29.2 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 12184 ms | 12262 ms | 753.6 MB     | 16873 ms     | 1438/1438       | fixture-inspection     |
| target-registry  | 1        | 12391 ms | 12408 ms | 753 MB       | 16937 ms     | 1456/1456       | compat-report-registry |
| contract-capture | 1        | 12353 ms | 12489 ms | 755.8 MB     | 16873 ms     | 1453/1453       | contract-capture       |
| synthetic-probes | 1        | 12373 ms | 12374 ms | 750.2 MB     | 16827 ms     | 1453/1453       | synthetic-probe-plan   |
| cold-import      | 1        | 12091 ms | 12126 ms | 751.1 MB     | 16577 ms     | 1425/1425       | cold-import-readiness  |
| workspace-plan   | 1        | 12201 ms | 12208 ms | 758.9 MB     | 16701 ms     | 1424/1424       | workspace-plan         |
| platform-probes  | 1        | 12532 ms | 12619 ms | 752.5 MB     | 16708 ms     | 1482/1482       | platform-probes        |
| import-loop      | 1        | 1014 ms  | 1053 ms  | 78.3 MB      | 629 ms       | 122/122         | import-loop-profile    |
