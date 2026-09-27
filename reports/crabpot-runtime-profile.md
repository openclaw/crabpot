# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 7017 ms            |
| Command P95 wall time  | 7206 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 5937               |
| CPU samples            | 5937               |
| Max peak RSS           | 757.8 MB           |
| Max RSS delta          | 730.2 MB           |
| Max CPU estimate       | 9699 ms            |
| Max harness heap delta | 18.5 MB            |

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
| sourceFiles           | 2305  |
| observedHooks         | 113   |
| observedRegistrations | 219   |
| observedSdkImports    | 1195  |
| contractProbes        | 218   |
| issueFindings         | 250   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 20 ms       | 20 ms    | 32 MB        | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 6906 ms     | 6910 ms  | 754.5 MB     | 725.9 MB      | 9474 ms      | 18.5 MB    | 821/821         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 7017 ms     | 7028 ms  | 752.7 MB     | 723.8 MB      | 9509 ms      | 14.6 MB    | 834/834         | 0          |
| contract-capture       | Contract capture inventory                      | 7044 ms     | 7085 ms  | 752.6 MB     | 723.5 MB      | 9594 ms      | 13.1 MB    | 841/841         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 7084 ms     | 7140 ms  | 756.4 MB     | 727.1 MB      | 9468 ms      | 13.2 MB    | 845/845         | 0          |
| cold-import-readiness  | Cold import readiness                           | 6981 ms     | 7032 ms  | 754.5 MB     | 726.5 MB      | 9537 ms      | 12.9 MB    | 833/833         | 0          |
| workspace-plan         | Workspace execution plan                        | 7018 ms     | 7051 ms  | 757.8 MB     | 730.2 MB      | 9699 ms      | 13.1 MB    | 837/837         | 0          |
| platform-probes        | Platform and loader probes                      | 7206 ms     | 7208 ms  | 756 MB       | 727.6 MB      | 9414 ms      | 13.3 MB    | 856/856         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 561 ms      | 567 ms   | 77.4 MB      | 50.1 MB       | 291 ms       | 1.1 MB     | 67/67           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 20 ms    | 20 ms    | 32 MB        | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 6906 ms  | 6910 ms  | 754.5 MB     | 9474 ms      | 821/821         | fixture-inspection     |
| target-registry  | 1        | 7017 ms  | 7028 ms  | 752.7 MB     | 9509 ms      | 834/834         | compat-report-registry |
| contract-capture | 1        | 7044 ms  | 7085 ms  | 752.6 MB     | 9594 ms      | 841/841         | contract-capture       |
| synthetic-probes | 1        | 7084 ms  | 7140 ms  | 756.4 MB     | 9468 ms      | 845/845         | synthetic-probe-plan   |
| cold-import      | 1        | 6981 ms  | 7032 ms  | 754.5 MB     | 9537 ms      | 833/833         | cold-import-readiness  |
| workspace-plan   | 1        | 7018 ms  | 7051 ms  | 757.8 MB     | 9699 ms      | 837/837         | workspace-plan         |
| platform-probes  | 1        | 7206 ms  | 7208 ms  | 756 MB       | 9414 ms      | 856/856         | platform-probes        |
| import-loop      | 1        | 561 ms   | 567 ms   | 77.4 MB      | 291 ms       | 67/67           | import-loop-profile    |
