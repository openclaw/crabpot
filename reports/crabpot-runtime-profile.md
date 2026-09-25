# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 7671 ms            |
| Command P95 wall time  | 7883 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 6510               |
| CPU samples            | 6510               |
| Max peak RSS           | 757.7 MB           |
| Max RSS delta          | 729.1 MB           |
| Max CPU estimate       | 10679 ms           |
| Max harness heap delta | 20.4 MB            |

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
| sourceFiles           | 2317  |
| observedHooks         | 113   |
| observedRegistrations | 219   |
| observedSdkImports    | 1195  |
| contractProbes        | 218   |
| issueFindings         | 250   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 22 ms       | 26 ms    | 30.8 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 7681 ms     | 7687 ms  | 754.3 MB     | 725 MB        | 10462 ms     | 20.4 MB    | 910/910         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 7671 ms     | 7722 ms  | 754.5 MB     | 724.9 MB      | 10471 ms     | 14.7 MB    | 913/913         | 0          |
| contract-capture       | Contract capture inventory                      | 7760 ms     | 7893 ms  | 755.6 MB     | 725 MB        | 10561 ms     | 14.6 MB    | 925/925         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 7637 ms     | 7874 ms  | 755.7 MB     | 727.1 MB      | 10504 ms     | 14.6 MB    | 918/918         | 0          |
| cold-import-readiness  | Cold import readiness                           | 7619 ms     | 7792 ms  | 754.2 MB     | 725.7 MB      | 10620 ms     | 14.1 MB    | 909/909         | 0          |
| workspace-plan         | Workspace execution plan                        | 7720 ms     | 7852 ms  | 755 MB       | 725.9 MB      | 10679 ms     | 14.2 MB    | 921/921         | 0          |
| platform-probes        | Platform and loader probes                      | 7883 ms     | 7884 ms  | 757.7 MB     | 729.1 MB      | 10375 ms     | 14.4 MB    | 937/937         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 610 ms      | 642 ms   | 77.3 MB      | 48.3 MB       | 313 ms       | 1.3 MB     | 74/74           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 22 ms    | 26 ms    | 30.8 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 7681 ms  | 7687 ms  | 754.3 MB     | 10462 ms     | 910/910         | fixture-inspection     |
| target-registry  | 1        | 7671 ms  | 7722 ms  | 754.5 MB     | 10471 ms     | 913/913         | compat-report-registry |
| contract-capture | 1        | 7760 ms  | 7893 ms  | 755.6 MB     | 10561 ms     | 925/925         | contract-capture       |
| synthetic-probes | 1        | 7637 ms  | 7874 ms  | 755.7 MB     | 10504 ms     | 918/918         | synthetic-probe-plan   |
| cold-import      | 1        | 7619 ms  | 7792 ms  | 754.2 MB     | 10620 ms     | 909/909         | cold-import-readiness  |
| workspace-plan   | 1        | 7720 ms  | 7852 ms  | 755 MB       | 10679 ms     | 921/921         | workspace-plan         |
| platform-probes  | 1        | 7883 ms  | 7884 ms  | 757.7 MB     | 10375 ms     | 937/937         | platform-probes        |
| import-loop      | 1        | 610 ms   | 642 ms   | 77.3 MB      | 313 ms       | 74/74           | import-loop-profile    |
