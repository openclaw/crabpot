# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 15724 ms           |
| Command P95 wall time  | 16104 ms           |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 12745              |
| CPU samples            | 12745              |
| Max peak RSS           | 501.3 MB           |
| Max RSS delta          | 471.6 MB           |
| Max CPU estimate       | 23819 ms           |
| Max harness heap delta | 29.4 MB            |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 50         |
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
| issueFindings         | 446   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 27 ms       | 29 ms    | 29.6 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 10497 ms    | 10532 ms | 501.3 MB     | 471.6 MB      | 15166 ms     | 27.6 MB    | 1243/1243       | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 15881 ms    | 15911 ms | 474.2 MB     | 445.9 MB      | 23488 ms     | 29.1 MB    | 1886/1886       | 0          |
| contract-capture       | Contract capture inventory                      | 15893 ms    | 16111 ms | 488.3 MB     | 460.3 MB      | 23683 ms     | 29.4 MB    | 1904/1904       | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 16081 ms    | 16219 ms | 474.6 MB     | 446.6 MB      | 23599 ms     | 29.3 MB    | 1917/1917       | 0          |
| cold-import-readiness  | Cold import readiness                           | 15673 ms    | 15743 ms | 473.4 MB     | 445.6 MB      | 23315 ms     | 28.4 MB    | 1873/1873       | 0          |
| workspace-plan         | Workspace execution plan                        | 15724 ms    | 15890 ms | 479.2 MB     | 451.8 MB      | 23819 ms     | 28.3 MB    | 1881/1881       | 0          |
| platform-probes        | Platform and loader probes                      | 16104 ms    | 16347 ms | 478.7 MB     | 451.6 MB      | 23458 ms     | 28.5 MB    | 1926/1926       | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 936 ms      | 963 ms   | 78.9 MB      | 52.3 MB       | 519 ms       | 1.8 MB     | 112/112         | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 27 ms    | 29 ms    | 29.6 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 10497 ms | 10532 ms | 501.3 MB     | 15166 ms     | 1243/1243       | fixture-inspection     |
| target-registry  | 1        | 15881 ms | 15911 ms | 474.2 MB     | 23488 ms     | 1886/1886       | compat-report-registry |
| contract-capture | 1        | 15893 ms | 16111 ms | 488.3 MB     | 23683 ms     | 1904/1904       | contract-capture       |
| synthetic-probes | 1        | 16081 ms | 16219 ms | 474.6 MB     | 23599 ms     | 1917/1917       | synthetic-probe-plan   |
| cold-import      | 1        | 15673 ms | 15743 ms | 473.4 MB     | 23315 ms     | 1873/1873       | cold-import-readiness  |
| workspace-plan   | 1        | 15724 ms | 15890 ms | 479.2 MB     | 23819 ms     | 1881/1881       | workspace-plan         |
| platform-probes  | 1        | 16104 ms | 16347 ms | 478.7 MB     | 23458 ms     | 1926/1926       | platform-probes        |
| import-loop      | 1        | 936 ms   | 963 ms   | 78.9 MB      | 519 ms       | 112/112         | import-loop-profile    |
