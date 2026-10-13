# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 7468 ms            |
| Command P95 wall time  | 7642 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 6286               |
| CPU samples            | 6286               |
| Max peak RSS           | 760.3 MB           |
| Max RSS delta          | 731.4 MB           |
| Max CPU estimate       | 10433 ms           |
| Max harness heap delta | 19.9 MB            |

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
| sourceFiles           | 2319  |
| observedHooks         | 113   |
| observedRegistrations | 218   |
| observedSdkImports    | 1223  |
| contractProbes        | 218   |
| issueFindings         | 250   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 22 ms       | 25 ms    | 30.8 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 7470 ms     | 7471 ms  | 757 MB       | 727 MB        | 10250 ms     | 19.9 MB    | 880/880         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 7468 ms     | 7474 ms  | 756.5 MB     | 725.9 MB      | 10201 ms     | 14.7 MB    | 880/880         | 0          |
| contract-capture       | Contract capture inventory                      | 7642 ms     | 7728 ms  | 756.6 MB     | 726.8 MB      | 10400 ms     | 14.3 MB    | 909/909         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 7483 ms     | 7619 ms  | 756.3 MB     | 727.1 MB      | 10217 ms     | 13.8 MB    | 889/889         | 0          |
| cold-import-readiness  | Cold import readiness                           | 7330 ms     | 7455 ms  | 755.4 MB     | 726.6 MB      | 10213 ms     | 13.6 MB    | 873/873         | 0          |
| workspace-plan         | Workspace execution plan                        | 7446 ms     | 7660 ms  | 760.3 MB     | 731.4 MB      | 10433 ms     | 14 MB      | 886/886         | 0          |
| platform-probes        | Platform and loader probes                      | 7513 ms     | 7563 ms  | 758.4 MB     | 729.8 MB      | 9945 ms      | 13.8 MB    | 894/894         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 593 ms      | 640 ms   | 77.4 MB      | 46.9 MB       | 313 ms       | 1.2 MB     | 72/72           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 22 ms    | 25 ms    | 30.8 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 7470 ms  | 7471 ms  | 757 MB       | 10250 ms     | 880/880         | fixture-inspection     |
| target-registry  | 1        | 7468 ms  | 7474 ms  | 756.5 MB     | 10201 ms     | 880/880         | compat-report-registry |
| contract-capture | 1        | 7642 ms  | 7728 ms  | 756.6 MB     | 10400 ms     | 909/909         | contract-capture       |
| synthetic-probes | 1        | 7483 ms  | 7619 ms  | 756.3 MB     | 10217 ms     | 889/889         | synthetic-probe-plan   |
| cold-import      | 1        | 7330 ms  | 7455 ms  | 755.4 MB     | 10213 ms     | 873/873         | cold-import-readiness  |
| workspace-plan   | 1        | 7446 ms  | 7660 ms  | 760.3 MB     | 10433 ms     | 886/886         | workspace-plan         |
| platform-probes  | 1        | 7513 ms  | 7563 ms  | 758.4 MB     | 9945 ms      | 894/894         | platform-probes        |
| import-loop      | 1        | 593 ms   | 640 ms   | 77.4 MB      | 313 ms       | 72/72           | import-loop-profile    |
