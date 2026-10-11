# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 11502 ms           |
| Command P95 wall time  | 11736 ms           |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 9642               |
| CPU samples            | 9642               |
| Max peak RSS           | 761.1 MB           |
| Max RSS delta          | 733.2 MB           |
| Max CPU estimate       | 15741 ms           |
| Max harness heap delta | 29.7 MB            |

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
| sourceFiles           | 2319  |
| observedHooks         | 113   |
| observedRegistrations | 218   |
| observedSdkImports    | 1223  |
| contractProbes        | 218   |
| issueFindings         | 250   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 35 ms       | 40 ms    | 30.5 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 11284 ms    | 11320 ms | 758.5 MB     | 729.9 MB      | 15474 ms     | 29.7 MB    | 1334/1334       | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 11453 ms    | 11524 ms | 754.7 MB     | 728.1 MB      | 15661 ms     | 21.1 MB    | 1349/1349       | 0          |
| contract-capture       | Contract capture inventory                      | 11502 ms    | 11626 ms | 757.6 MB     | 729.8 MB      | 15579 ms     | 21.1 MB    | 1364/1364       | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 11736 ms    | 11773 ms | 757.7 MB     | 731.1 MB      | 15741 ms     | 21.5 MB    | 1383/1383       | 0          |
| cold-import-readiness  | Cold import readiness                           | 11570 ms    | 11575 ms | 758 MB       | 730 MB        | 15700 ms     | 20.9 MB    | 1356/1356       | 0          |
| workspace-plan         | Workspace execution plan                        | 11519 ms    | 11529 ms | 757.9 MB     | 730.6 MB      | 15689 ms     | 20.7 MB    | 1362/1362       | 0          |
| platform-probes        | Platform and loader probes                      | 11710 ms    | 11720 ms | 761.1 MB     | 733.2 MB      | 15447 ms     | 21.2 MB    | 1382/1382       | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 919 ms      | 926 ms   | 78.5 MB      | 50.6 MB       | 523 ms       | 1.7 MB     | 109/109         | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 35 ms    | 40 ms    | 30.5 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 11284 ms | 11320 ms | 758.5 MB     | 15474 ms     | 1334/1334       | fixture-inspection     |
| target-registry  | 1        | 11453 ms | 11524 ms | 754.7 MB     | 15661 ms     | 1349/1349       | compat-report-registry |
| contract-capture | 1        | 11502 ms | 11626 ms | 757.6 MB     | 15579 ms     | 1364/1364       | contract-capture       |
| synthetic-probes | 1        | 11736 ms | 11773 ms | 757.7 MB     | 15741 ms     | 1383/1383       | synthetic-probe-plan   |
| cold-import      | 1        | 11570 ms | 11575 ms | 758 MB       | 15700 ms     | 1356/1356       | cold-import-readiness  |
| workspace-plan   | 1        | 11519 ms | 11529 ms | 757.9 MB     | 15689 ms     | 1362/1362       | workspace-plan         |
| platform-probes  | 1        | 11710 ms | 11720 ms | 761.1 MB     | 15447 ms     | 1382/1382       | platform-probes        |
| import-loop      | 1        | 919 ms   | 926 ms   | 78.5 MB      | 523 ms       | 109/109         | import-loop-profile    |
