# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 11025 ms           |
| Command P95 wall time  | 11377 ms           |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 9367               |
| CPU samples            | 9367               |
| Max peak RSS           | 511.3 MB           |
| Max RSS delta          | 483.8 MB           |
| Max CPU estimate       | 16103 ms           |
| Max harness heap delta | 27.4 MB            |

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
| sourceFiles           | 2317  |
| observedHooks         | 113   |
| observedRegistrations | 218   |
| observedSdkImports    | 1224  |
| contractProbes        | 218   |
| issueFindings         | 250   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 28 ms       | 30 ms    | 29.2 MB      | 0 MB          | 0 ms         | 0.5 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 10811 ms    | 10965 ms | 497.5 MB     | 469.5 MB      | 15636 ms     | 27.4 MB    | 1289/1289       | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 11025 ms    | 11052 ms | 449.8 MB     | 421.7 MB      | 15528 ms     | 20.5 MB    | 1310/1310       | 0          |
| contract-capture       | Contract capture inventory                      | 11216 ms    | 11220 ms | 500.4 MB     | 473.5 MB      | 15837 ms     | 20.6 MB    | 1333/1333       | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 11168 ms    | 11173 ms | 451.2 MB     | 423.3 MB      | 15564 ms     | 20.7 MB    | 1328/1328       | 0          |
| cold-import-readiness  | Cold import readiness                           | 11002 ms    | 11108 ms | 510.4 MB     | 483.8 MB      | 15751 ms     | 20 MB      | 1312/1312       | 0          |
| workspace-plan         | Workspace execution plan                        | 11152 ms    | 11195 ms | 509.7 MB     | 482.6 MB      | 16103 ms     | 20.1 MB    | 1326/1326       | 0          |
| platform-probes        | Platform and loader probes                      | 11377 ms    | 11390 ms | 511.3 MB     | 483.3 MB      | 15518 ms     | 20.4 MB    | 1350/1350       | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 978 ms      | 985 ms   | 78.4 MB      | 51.2 MB       | 554 ms       | 1.9 MB     | 116/116         | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 28 ms    | 30 ms    | 29.2 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 10811 ms | 10965 ms | 497.5 MB     | 15636 ms     | 1289/1289       | fixture-inspection     |
| target-registry  | 1        | 11025 ms | 11052 ms | 449.8 MB     | 15528 ms     | 1310/1310       | compat-report-registry |
| contract-capture | 1        | 11216 ms | 11220 ms | 500.4 MB     | 15837 ms     | 1333/1333       | contract-capture       |
| synthetic-probes | 1        | 11168 ms | 11173 ms | 451.2 MB     | 15564 ms     | 1328/1328       | synthetic-probe-plan   |
| cold-import      | 1        | 11002 ms | 11108 ms | 510.4 MB     | 15751 ms     | 1312/1312       | cold-import-readiness  |
| workspace-plan   | 1        | 11152 ms | 11195 ms | 509.7 MB     | 16103 ms     | 1326/1326       | workspace-plan         |
| platform-probes  | 1        | 11377 ms | 11390 ms | 511.3 MB     | 15518 ms     | 1350/1350       | platform-probes        |
| import-loop      | 1        | 978 ms   | 985 ms   | 78.4 MB      | 554 ms       | 116/116         | import-loop-profile    |
