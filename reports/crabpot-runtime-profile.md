# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 5822 ms            |
| Command P95 wall time  | 5990 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 4953               |
| CPU samples            | 4953               |
| Max peak RSS           | 218.7 MB           |
| Max RSS delta          | 190.5 MB           |
| Max CPU estimate       | 7195 ms            |
| Max harness heap delta | 7.8 MB             |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 0          |
| hookNames              | 42         |
| apiRegistrars          | 57         |
| capturedRegistrars     | 31         |
| sdkExports             | 315        |
| manifestFields         | 48         |
| manifestContractFields | 22         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 60    |
| sourceFiles           | 2191  |
| observedHooks         | 110   |
| observedRegistrations | 215   |
| observedSdkImports    | 1121  |
| contractProbes        | 255   |
| issueFindings         | 364   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 32 ms       | 32 ms    | 30.9 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 5709 ms     | 5710 ms  | 206.4 MB     | 177.9 MB      | 6812 ms      | 6.9 MB     | 679/679         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 5822 ms     | 5856 ms  | 204.8 MB     | 176.6 MB      | 6928 ms      | 7.6 MB     | 697/697         | 0          |
| contract-capture       | Contract capture inventory                      | 5840 ms     | 5862 ms  | 204.3 MB     | 174.6 MB      | 6964 ms      | 1.6 MB     | 697/697         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 5858 ms     | 5876 ms  | 205.4 MB     | 177 MB        | 7053 ms      | 1.6 MB     | 698/698         | 0          |
| cold-import-readiness  | Cold import readiness                           | 5818 ms     | 5839 ms  | 218.7 MB     | 190.5 MB      | 6954 ms      | 1.5 MB     | 694/694         | 0          |
| workspace-plan         | Workspace execution plan                        | 5892 ms     | 5915 ms  | 208.9 MB     | 179.3 MB      | 7017 ms      | 1.6 MB     | 702/702         | 0          |
| platform-probes        | Platform and loader probes                      | 5990 ms     | 5996 ms  | 207.2 MB     | 177.5 MB      | 7195 ms      | 7.8 MB     | 712/712         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 604 ms      | 613 ms   | 64.2 MB      | 34.6 MB       | 310 ms       | 2.1 MB     | 71/71           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 32 ms    | 32 ms    | 30.9 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 5709 ms  | 5710 ms  | 206.4 MB     | 6812 ms      | 679/679         | fixture-inspection     |
| target-registry  | 1        | 5822 ms  | 5856 ms  | 204.8 MB     | 6928 ms      | 697/697         | compat-report-registry |
| contract-capture | 1        | 5840 ms  | 5862 ms  | 204.3 MB     | 6964 ms      | 697/697         | contract-capture       |
| synthetic-probes | 1        | 5858 ms  | 5876 ms  | 205.4 MB     | 7053 ms      | 698/698         | synthetic-probe-plan   |
| cold-import      | 1        | 5818 ms  | 5839 ms  | 218.7 MB     | 6954 ms      | 694/694         | cold-import-readiness  |
| workspace-plan   | 1        | 5892 ms  | 5915 ms  | 208.9 MB     | 7017 ms      | 702/702         | workspace-plan         |
| platform-probes  | 1        | 5990 ms  | 5996 ms  | 207.2 MB     | 7195 ms      | 712/712         | platform-probes        |
| import-loop      | 1        | 604 ms   | 613 ms   | 64.2 MB      | 310 ms       | 71/71           | import-loop-profile    |
