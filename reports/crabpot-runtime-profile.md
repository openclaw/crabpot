# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 6789 ms            |
| Command P95 wall time  | 6891 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 5742               |
| CPU samples            | 5742               |
| Max peak RSS           | 540 MB             |
| Max RSS delta          | 511 MB             |
| Max CPU estimate       | 7561 ms            |
| Max harness heap delta | 10.5 MB            |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 0          |
| hookNames              | 42         |
| apiRegistrars          | 59         |
| capturedRegistrars     | 32         |
| sdkExports             | 331        |
| manifestFields         | 45         |
| manifestContractFields | 23         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 60    |
| sourceFiles           | 2087  |
| observedHooks         | 111   |
| observedRegistrations | 214   |
| observedSdkImports    | 1379  |
| contractProbes        | 278   |
| issueFindings         | 399   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 35 ms       | 36 ms    | 31.9 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 6763 ms     | 6796 ms  | 538.9 MB     | 509.5 MB      | 7353 ms      | -1.3 MB    | 801/801         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 6789 ms     | 6828 ms  | 537.7 MB     | 509.5 MB      | 7456 ms      | 10.2 MB    | 811/811         | 0          |
| contract-capture       | Contract capture inventory                      | 6870 ms     | 6872 ms  | 540 MB       | 510.8 MB      | 7518 ms      | -1.5 MB    | 819/819         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 6848 ms     | 6856 ms  | 539.5 MB     | 510.6 MB      | 7494 ms      | 10.5 MB    | 815/815         | 0          |
| cold-import-readiness  | Cold import readiness                           | 6850 ms     | 6874 ms  | 539.1 MB     | 511 MB        | 7561 ms      | -1.8 MB    | 816/816         | 0          |
| workspace-plan         | Workspace execution plan                        | 6891 ms     | 6892 ms  | 538.9 MB     | 510.7 MB      | 7547 ms      | 1.4 MB     | 817/817         | 0          |
| platform-probes        | Platform and loader probes                      | 6767 ms     | 6880 ms  | 537.8 MB     | 509.5 MB      | 7499 ms      | 1 MB       | 812/812         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 421 ms      | 421 ms   | 60.7 MB      | 32.4 MB       | 198 ms       | 1.5 MB     | 48/48           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 35 ms    | 36 ms    | 31.9 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 6763 ms  | 6796 ms  | 538.9 MB     | 7353 ms      | 801/801         | fixture-inspection     |
| target-registry  | 1        | 6789 ms  | 6828 ms  | 537.7 MB     | 7456 ms      | 811/811         | compat-report-registry |
| contract-capture | 1        | 6870 ms  | 6872 ms  | 540 MB       | 7518 ms      | 819/819         | contract-capture       |
| synthetic-probes | 1        | 6848 ms  | 6856 ms  | 539.5 MB     | 7494 ms      | 815/815         | synthetic-probe-plan   |
| cold-import      | 1        | 6850 ms  | 6874 ms  | 539.1 MB     | 7561 ms      | 816/816         | cold-import-readiness  |
| workspace-plan   | 1        | 6891 ms  | 6892 ms  | 538.9 MB     | 7547 ms      | 817/817         | workspace-plan         |
| platform-probes  | 1        | 6767 ms  | 6880 ms  | 537.8 MB     | 7499 ms      | 812/812         | platform-probes        |
| import-loop      | 1        | 421 ms   | 421 ms   | 60.7 MB      | 198 ms       | 48/48           | import-loop-profile    |
