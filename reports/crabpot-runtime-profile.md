# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 11274 ms           |
| Command P95 wall time  | 11552 ms           |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 9465               |
| CPU samples            | 9465               |
| Max peak RSS           | 759 MB             |
| Max RSS delta          | 732.3 MB           |
| Max CPU estimate       | 15556 ms           |
| Max harness heap delta | 29.1 MB            |

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
| node-boot              | Node boot                                       | 30 ms       | 37 ms    | 31.6 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 11111 ms    | 11174 ms | 755.7 MB     | 727.7 MB      | 15320 ms     | 29.1 MB    | 1313/1313       | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 11274 ms    | 11297 ms | 757.8 MB     | 729.7 MB      | 15285 ms     | 20.8 MB    | 1331/1331       | 0          |
| contract-capture       | Contract capture inventory                      | 11326 ms    | 11356 ms | 753.7 MB     | 727.1 MB      | 15433 ms     | 21 MB      | 1339/1339       | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 11358 ms    | 11434 ms | 757.9 MB     | 730.2 MB      | 15333 ms     | 20.9 MB    | 1343/1343       | 0          |
| cold-import-readiness  | Cold import readiness                           | 11228 ms    | 11247 ms | 757.8 MB     | 729.7 MB      | 15465 ms     | 20.4 MB    | 1329/1329       | 0          |
| workspace-plan         | Workspace execution plan                        | 11294 ms    | 11297 ms | 759 MB       | 732.3 MB      | 15556 ms     | 20.3 MB    | 1330/1330       | 0          |
| platform-probes        | Platform and loader probes                      | 11552 ms    | 11562 ms | 757.2 MB     | 729.2 MB      | 15401 ms     | 20.6 MB    | 1367/1367       | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 924 ms      | 944 ms   | 78.4 MB      | 51.1 MB       | 520 ms       | 1.8 MB     | 110/110         | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 30 ms    | 37 ms    | 31.6 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 11111 ms | 11174 ms | 755.7 MB     | 15320 ms     | 1313/1313       | fixture-inspection     |
| target-registry  | 1        | 11274 ms | 11297 ms | 757.8 MB     | 15285 ms     | 1331/1331       | compat-report-registry |
| contract-capture | 1        | 11326 ms | 11356 ms | 753.7 MB     | 15433 ms     | 1339/1339       | contract-capture       |
| synthetic-probes | 1        | 11358 ms | 11434 ms | 757.9 MB     | 15333 ms     | 1343/1343       | synthetic-probe-plan   |
| cold-import      | 1        | 11228 ms | 11247 ms | 757.8 MB     | 15465 ms     | 1329/1329       | cold-import-readiness  |
| workspace-plan   | 1        | 11294 ms | 11297 ms | 759 MB       | 15556 ms     | 1330/1330       | workspace-plan         |
| platform-probes  | 1        | 11552 ms | 11562 ms | 757.2 MB     | 15401 ms     | 1367/1367       | platform-probes        |
| import-loop      | 1        | 924 ms   | 944 ms   | 78.4 MB      | 520 ms       | 110/110         | import-loop-profile    |
