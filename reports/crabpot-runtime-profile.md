# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 11087 ms           |
| Command P95 wall time  | 11405 ms           |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 9432               |
| CPU samples            | 9432               |
| Max peak RSS           | 516.1 MB           |
| Max RSS delta          | 488.1 MB           |
| Max CPU estimate       | 15853 ms           |
| Max harness heap delta | 28.2 MB            |

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
| node-boot              | Node boot                                       | 34 ms       | 37 ms    | 30.5 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 11087 ms    | 11135 ms | 444.4 MB     | 417.6 MB      | 15756 ms     | 28.2 MB    | 1316/1316       | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 11156 ms    | 11332 ms | 448 MB       | 420 MB        | 15853 ms     | 20.7 MB    | 1333/1333       | 0          |
| contract-capture       | Contract capture inventory                      | 11247 ms    | 11320 ms | 444.4 MB     | 417.2 MB      | 15656 ms     | 20.8 MB    | 1339/1339       | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 11405 ms    | 11463 ms | 501.7 MB     | 475.2 MB      | 15853 ms     | 21 MB      | 1352/1352       | 0          |
| cold-import-readiness  | Cold import readiness                           | 11021 ms    | 11118 ms | 451.4 MB     | 424.8 MB      | 15732 ms     | 20.1 MB    | 1315/1315       | 0          |
| workspace-plan         | Workspace execution plan                        | 11024 ms    | 11031 ms | 451.3 MB     | 424.7 MB      | 15533 ms     | 19.9 MB    | 1309/1309       | 0          |
| platform-probes        | Platform and loader probes                      | 11348 ms    | 11352 ms | 516.1 MB     | 488.1 MB      | 15535 ms     | 20.3 MB    | 1351/1351       | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 962 ms      | 965 ms   | 78.9 MB      | 52.2 MB       | 564 ms       | 1.8 MB     | 114/114         | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 34 ms    | 37 ms    | 30.5 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 11087 ms | 11135 ms | 444.4 MB     | 15756 ms     | 1316/1316       | fixture-inspection     |
| target-registry  | 1        | 11156 ms | 11332 ms | 448 MB       | 15853 ms     | 1333/1333       | compat-report-registry |
| contract-capture | 1        | 11247 ms | 11320 ms | 444.4 MB     | 15656 ms     | 1339/1339       | contract-capture       |
| synthetic-probes | 1        | 11405 ms | 11463 ms | 501.7 MB     | 15853 ms     | 1352/1352       | synthetic-probe-plan   |
| cold-import      | 1        | 11021 ms | 11118 ms | 451.4 MB     | 15732 ms     | 1315/1315       | cold-import-readiness  |
| workspace-plan   | 1        | 11024 ms | 11031 ms | 451.3 MB     | 15533 ms     | 1309/1309       | workspace-plan         |
| platform-probes  | 1        | 11348 ms | 11352 ms | 516.1 MB     | 15535 ms     | 1351/1351       | platform-probes        |
| import-loop      | 1        | 962 ms   | 965 ms   | 78.9 MB      | 564 ms       | 114/114         | import-loop-profile    |
