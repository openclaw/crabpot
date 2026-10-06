# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 11297 ms           |
| Command P95 wall time  | 11653 ms           |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 9551               |
| CPU samples            | 9551               |
| Max peak RSS           | 759.3 MB           |
| Max RSS delta          | 730 MB             |
| Max CPU estimate       | 15567 ms           |
| Max harness heap delta | 29.4 MB            |

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
| node-boot              | Node boot                                       | 29 ms       | 30 ms    | 32 MB        | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 11142 ms    | 11144 ms | 755.5 MB     | 727.4 MB      | 15198 ms     | 29.4 MB    | 1316/1316       | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 11388 ms    | 11454 ms | 755.8 MB     | 727.7 MB      | 15440 ms     | 21.2 MB    | 1349/1349       | 0          |
| contract-capture       | Contract capture inventory                      | 11451 ms    | 11540 ms | 759 MB       | 729.6 MB      | 15567 ms     | 21 MB      | 1357/1357       | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 11526 ms    | 11539 ms | 751.3 MB     | 723.3 MB      | 15433 ms     | 21.2 MB    | 1363/1363       | 0          |
| cold-import-readiness  | Cold import readiness                           | 11289 ms    | 11332 ms | 756.2 MB     | 729.3 MB      | 15491 ms     | 20.5 MB    | 1334/1334       | 0          |
| workspace-plan         | Workspace execution plan                        | 11297 ms    | 11302 ms | 759.3 MB     | 730 MB        | 15454 ms     | 20.2 MB    | 1339/1339       | 0          |
| platform-probes        | Platform and loader probes                      | 11653 ms    | 11668 ms | 756.5 MB     | 727.7 MB      | 15452 ms     | 20.8 MB    | 1379/1379       | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 940 ms      | 940 ms   | 78.5 MB      | 50 MB         | 519 ms       | 1.8 MB     | 111/111         | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 29 ms    | 30 ms    | 32 MB        | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 11142 ms | 11144 ms | 755.5 MB     | 15198 ms     | 1316/1316       | fixture-inspection     |
| target-registry  | 1        | 11388 ms | 11454 ms | 755.8 MB     | 15440 ms     | 1349/1349       | compat-report-registry |
| contract-capture | 1        | 11451 ms | 11540 ms | 759 MB       | 15567 ms     | 1357/1357       | contract-capture       |
| synthetic-probes | 1        | 11526 ms | 11539 ms | 751.3 MB     | 15433 ms     | 1363/1363       | synthetic-probe-plan   |
| cold-import      | 1        | 11289 ms | 11332 ms | 756.2 MB     | 15491 ms     | 1334/1334       | cold-import-readiness  |
| workspace-plan   | 1        | 11297 ms | 11302 ms | 759.3 MB     | 15454 ms     | 1339/1339       | workspace-plan         |
| platform-probes  | 1        | 11653 ms | 11668 ms | 756.5 MB     | 15452 ms     | 1379/1379       | platform-probes        |
| import-loop      | 1        | 940 ms   | 940 ms   | 78.5 MB      | 519 ms       | 111/111         | import-loop-profile    |
