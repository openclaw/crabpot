# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 1394 ms            |
| Command P95 wall time  | 1616 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1312               |
| CPU samples            | 1312               |
| Max peak RSS           | 152.6 MB           |
| Max RSS delta          | 124.9 MB           |
| Max CPU estimate       | 2062 ms            |
| Max harness heap delta | 4.1 MB             |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 37         |
| hookNames              | 42         |
| apiRegistrars          | 57         |
| capturedRegistrars     | 31         |
| sdkExports             | 343        |
| manifestFields         | 56         |
| manifestContractFields | 22         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 7     |
| sourceFiles           | 758   |
| observedHooks         | 6     |
| observedRegistrations | 36    |
| observedSdkImports    | 281   |
| contractProbes        | 22    |
| issueFindings         | 22    |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 24 ms       | 26 ms    | 27.9 MB      | 0 MB          | 0 ms         | 0.5 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 1394 ms     | 1409 ms  | 149.8 MB     | 123.2 MB      | 2032 ms      | 3.9 MB     | 166/166         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 1477 ms     | 1480 ms  | 150.7 MB     | 124 MB        | 2062 ms      | 4 MB       | 176/176         | 0          |
| contract-capture       | Contract capture inventory                      | 1470 ms     | 1509 ms  | 150.4 MB     | 123.7 MB      | 2030 ms      | 4 MB       | 176/176         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 1521 ms     | 1522 ms  | 152.6 MB     | 124.6 MB      | 1995 ms      | 4.1 MB     | 182/182         | 0          |
| cold-import-readiness  | Cold import readiness                           | 1377 ms     | 1395 ms  | 152 MB       | 124.6 MB      | 2000 ms      | 3.5 MB     | 165/165         | 0          |
| workspace-plan         | Workspace execution plan                        | 1383 ms     | 1388 ms  | 151.2 MB     | 124.2 MB      | 1976 ms      | 3.4 MB     | 165/165         | 0          |
| platform-probes        | Platform and loader probes                      | 1616 ms     | 1620 ms  | 151.5 MB     | 124.9 MB      | 2057 ms      | 3.2 MB     | 192/192         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 727 ms      | 729 ms   | 77.7 MB      | 51 MB         | 397 ms       | 1.5 MB     | 87/87           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 24 ms    | 26 ms    | 27.9 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 1394 ms  | 1409 ms  | 149.8 MB     | 2032 ms      | 166/166         | fixture-inspection     |
| target-registry  | 1        | 1477 ms  | 1480 ms  | 150.7 MB     | 2062 ms      | 176/176         | compat-report-registry |
| contract-capture | 1        | 1470 ms  | 1509 ms  | 150.4 MB     | 2030 ms      | 176/176         | contract-capture       |
| synthetic-probes | 1        | 1521 ms  | 1522 ms  | 152.6 MB     | 1995 ms      | 182/182         | synthetic-probe-plan   |
| cold-import      | 1        | 1377 ms  | 1395 ms  | 152 MB       | 2000 ms      | 165/165         | cold-import-readiness  |
| workspace-plan   | 1        | 1383 ms  | 1388 ms  | 151.2 MB     | 1976 ms      | 165/165         | workspace-plan         |
| platform-probes  | 1        | 1616 ms  | 1620 ms  | 151.5 MB     | 2057 ms      | 192/192         | platform-probes        |
| import-loop      | 1        | 727 ms   | 729 ms   | 77.7 MB      | 397 ms       | 87/87           | import-loop-profile    |
