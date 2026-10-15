# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 16689 ms           |
| Command P95 wall time  | 17241 ms           |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 13477              |
| CPU samples            | 13477              |
| Max peak RSS           | 498.2 MB           |
| Max RSS delta          | 470.1 MB           |
| Max CPU estimate       | 25240 ms           |
| Max harness heap delta | 32 MB              |

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
| node-boot              | Node boot                                       | 30 ms       | 30 ms    | 31.7 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 10956 ms    | 11118 ms | 498.2 MB     | 470.1 MB      | 15954 ms     | 28.9 MB    | 1307/1307       | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 17065 ms    | 17252 ms | 473.2 MB     | 445.6 MB      | 25240 ms     | 32 MB      | 2026/2026       | 0          |
| contract-capture       | Contract capture inventory                      | 16844 ms    | 16905 ms | 490.6 MB     | 462.6 MB      | 24718 ms     | 31 MB      | 2007/2007       | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 16788 ms    | 16827 ms | 474.4 MB     | 446.3 MB      | 24517 ms     | 30.6 MB    | 1996/1996       | 0          |
| cold-import-readiness  | Cold import readiness                           | 16543 ms    | 16561 ms | 473.6 MB     | 445.5 MB      | 24526 ms     | 29.7 MB    | 1971/1971       | 0          |
| workspace-plan         | Workspace execution plan                        | 16689 ms    | 17049 ms | 478.1 MB     | 450.1 MB      | 25045 ms     | 30.5 MB    | 1995/1995       | 0          |
| platform-probes        | Platform and loader probes                      | 17241 ms    | 17255 ms | 495.7 MB     | 467.2 MB      | 24655 ms     | 30.9 MB    | 2051/2051       | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 1025 ms     | 1030 ms  | 78.8 MB      | 51.1 MB       | 591 ms       | 1.9 MB     | 121/121         | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 30 ms    | 30 ms    | 31.7 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 10956 ms | 11118 ms | 498.2 MB     | 15954 ms     | 1307/1307       | fixture-inspection     |
| target-registry  | 1        | 17065 ms | 17252 ms | 473.2 MB     | 25240 ms     | 2026/2026       | compat-report-registry |
| contract-capture | 1        | 16844 ms | 16905 ms | 490.6 MB     | 24718 ms     | 2007/2007       | contract-capture       |
| synthetic-probes | 1        | 16788 ms | 16827 ms | 474.4 MB     | 24517 ms     | 1996/1996       | synthetic-probe-plan   |
| cold-import      | 1        | 16543 ms | 16561 ms | 473.6 MB     | 24526 ms     | 1971/1971       | cold-import-readiness  |
| workspace-plan   | 1        | 16689 ms | 17049 ms | 478.1 MB     | 25045 ms     | 1995/1995       | workspace-plan         |
| platform-probes  | 1        | 17241 ms | 17255 ms | 495.7 MB     | 24655 ms     | 2051/2051       | platform-probes        |
| import-loop      | 1        | 1025 ms  | 1030 ms  | 78.8 MB      | 591 ms       | 121/121         | import-loop-profile    |
