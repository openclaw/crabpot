# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 11516 ms           |
| Command P95 wall time  | 11890 ms           |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 9705               |
| CPU samples            | 9705               |
| Max peak RSS           | 758.1 MB           |
| Max RSS delta          | 730.4 MB           |
| Max CPU estimate       | 15859 ms           |
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
| sourceFiles           | 2302  |
| observedHooks         | 113   |
| observedRegistrations | 218   |
| observedSdkImports    | 1204  |
| contractProbes        | 218   |
| issueFindings         | 250   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 30 ms       | 36 ms    | 30.3 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 11399 ms    | 11431 ms | 754.9 MB     | 727.3 MB      | 15548 ms     | 29.7 MB    | 1344/1344       | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 11586 ms    | 11673 ms | 755 MB       | 726.9 MB      | 15840 ms     | 21.3 MB    | 1371/1371       | 0          |
| contract-capture       | Contract capture inventory                      | 11655 ms    | 11804 ms | 753.6 MB     | 725.5 MB      | 15841 ms     | 21.3 MB    | 1380/1380       | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 11670 ms    | 11862 ms | 755.7 MB     | 728.2 MB      | 15859 ms     | 21.6 MB    | 1375/1375       | 0          |
| cold-import-readiness  | Cold import readiness                           | 11473 ms    | 11530 ms | 757.4 MB     | 729.2 MB      | 15854 ms     | 20.8 MB    | 1358/1358       | 0          |
| workspace-plan         | Workspace execution plan                        | 11516 ms    | 11532 ms | 756.5 MB     | 729.7 MB      | 15833 ms     | 20.6 MB    | 1357/1357       | 0          |
| platform-probes        | Platform and loader probes                      | 11890 ms    | 11922 ms | 758.1 MB     | 730.4 MB      | 15749 ms     | 21.3 MB    | 1406/1406       | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 939 ms      | 943 ms   | 78.4 MB      | 51.1 MB       | 534 ms       | 1.8 MB     | 111/111         | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 30 ms    | 36 ms    | 30.3 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 11399 ms | 11431 ms | 754.9 MB     | 15548 ms     | 1344/1344       | fixture-inspection     |
| target-registry  | 1        | 11586 ms | 11673 ms | 755 MB       | 15840 ms     | 1371/1371       | compat-report-registry |
| contract-capture | 1        | 11655 ms | 11804 ms | 753.6 MB     | 15841 ms     | 1380/1380       | contract-capture       |
| synthetic-probes | 1        | 11670 ms | 11862 ms | 755.7 MB     | 15859 ms     | 1375/1375       | synthetic-probe-plan   |
| cold-import      | 1        | 11473 ms | 11530 ms | 757.4 MB     | 15854 ms     | 1358/1358       | cold-import-readiness  |
| workspace-plan   | 1        | 11516 ms | 11532 ms | 756.5 MB     | 15833 ms     | 1357/1357       | workspace-plan         |
| platform-probes  | 1        | 11890 ms | 11922 ms | 758.1 MB     | 15749 ms     | 1406/1406       | platform-probes        |
| import-loop      | 1        | 939 ms   | 943 ms   | 78.4 MB      | 534 ms       | 111/111         | import-loop-profile    |
