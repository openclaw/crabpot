# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 11043 ms           |
| Command P95 wall time  | 11346 ms           |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 9347               |
| CPU samples            | 9347               |
| Max peak RSS           | 755.4 MB           |
| Max RSS delta          | 728.7 MB           |
| Max CPU estimate       | 15163 ms           |
| Max harness heap delta | 29.2 MB            |

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
| sourceFiles           | 2260  |
| observedHooks         | 113   |
| observedRegistrations | 215   |
| observedSdkImports    | 1182  |
| contractProbes        | 236   |
| issueFindings         | 268   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 27 ms       | 29 ms    | 26.7 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 10863 ms    | 10985 ms | 753.2 MB     | 726.5 MB      | 15049 ms     | 29.2 MB    | 1293/1293       | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 11028 ms    | 11056 ms | 755.4 MB     | 728.7 MB      | 15064 ms     | 20.5 MB    | 1308/1308       | 0          |
| contract-capture       | Contract capture inventory                      | 11178 ms    | 11198 ms | 754.2 MB     | 727.5 MB      | 15090 ms     | 20.2 MB    | 1324/1324       | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 11211 ms    | 11251 ms | 755.1 MB     | 728.4 MB      | 15144 ms     | 20.7 MB    | 1333/1333       | 0          |
| cold-import-readiness  | Cold import readiness                           | 11058 ms    | 11100 ms | 754.9 MB     | 728.3 MB      | 15163 ms     | 20.1 MB    | 1318/1318       | 0          |
| workspace-plan         | Workspace execution plan                        | 11043 ms    | 11058 ms | 753.3 MB     | 726.6 MB      | 15151 ms     | 19.9 MB    | 1314/1314       | 0          |
| platform-probes        | Platform and loader probes                      | 11346 ms    | 11377 ms | 754.2 MB     | 727.5 MB      | 15055 ms     | 20.4 MB    | 1351/1351       | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 865 ms      | 869 ms   | 77.8 MB      | 51.1 MB       | 478 ms       | 1.7 MB     | 103/103         | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 27 ms    | 29 ms    | 26.7 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 10863 ms | 10985 ms | 753.2 MB     | 15049 ms     | 1293/1293       | fixture-inspection     |
| target-registry  | 1        | 11028 ms | 11056 ms | 755.4 MB     | 15064 ms     | 1308/1308       | compat-report-registry |
| contract-capture | 1        | 11178 ms | 11198 ms | 754.2 MB     | 15090 ms     | 1324/1324       | contract-capture       |
| synthetic-probes | 1        | 11211 ms | 11251 ms | 755.1 MB     | 15144 ms     | 1333/1333       | synthetic-probe-plan   |
| cold-import      | 1        | 11058 ms | 11100 ms | 754.9 MB     | 15163 ms     | 1318/1318       | cold-import-readiness  |
| workspace-plan   | 1        | 11043 ms | 11058 ms | 753.3 MB     | 15151 ms     | 1314/1314       | workspace-plan         |
| platform-probes  | 1        | 11346 ms | 11377 ms | 754.2 MB     | 15055 ms     | 1351/1351       | platform-probes        |
| import-loop      | 1        | 865 ms   | 869 ms   | 77.8 MB      | 478 ms       | 103/103         | import-loop-profile    |
