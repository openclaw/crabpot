# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 6839 ms            |
| Command P95 wall time  | 6877 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 5752               |
| CPU samples            | 5752               |
| Max peak RSS           | 543.4 MB           |
| Max RSS delta          | 514.1 MB           |
| Max CPU estimate       | 7561 ms            |
| Max harness heap delta | 10.6 MB            |

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
| sourceFiles           | 2117  |
| observedHooks         | 111   |
| observedRegistrations | 214   |
| observedSdkImports    | 1381  |
| contractProbes        | 276   |
| issueFindings         | 397   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 38 ms       | 38 ms    | 30.7 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 6672 ms     | 6678 ms  | 538.2 MB     | 510.1 MB      | 7279 ms      | -0.9 MB    | 797/797         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 6806 ms     | 6828 ms  | 539.8 MB     | 511.2 MB      | 7415 ms      | 10.3 MB    | 813/813         | 0          |
| contract-capture       | Contract capture inventory                      | 6853 ms     | 6884 ms  | 538.4 MB     | 509.8 MB      | 7510 ms      | -1.6 MB    | 815/815         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 6852 ms     | 6901 ms  | 538.5 MB     | 510.3 MB      | 7474 ms      | 10.6 MB    | 820/820         | 0          |
| cold-import-readiness  | Cold import readiness                           | 6850 ms     | 6930 ms  | 539.2 MB     | 510.9 MB      | 7561 ms      | -1.7 MB    | 818/818         | 0          |
| workspace-plan         | Workspace execution plan                        | 6839 ms     | 6845 ms  | 543.4 MB     | 514.1 MB      | 7475 ms      | 1.5 MB     | 816/816         | 0          |
| platform-probes        | Platform and loader probes                      | 6877 ms     | 6881 ms  | 538.5 MB     | 510.3 MB      | 7482 ms      | 1.1 MB     | 820/820         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 436 ms      | 447 ms   | 60.8 MB      | 32.5 MB       | 224 ms       | 1.6 MB     | 50/50           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 38 ms    | 38 ms    | 30.7 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 6672 ms  | 6678 ms  | 538.2 MB     | 7279 ms      | 797/797         | fixture-inspection     |
| target-registry  | 1        | 6806 ms  | 6828 ms  | 539.8 MB     | 7415 ms      | 813/813         | compat-report-registry |
| contract-capture | 1        | 6853 ms  | 6884 ms  | 538.4 MB     | 7510 ms      | 815/815         | contract-capture       |
| synthetic-probes | 1        | 6852 ms  | 6901 ms  | 538.5 MB     | 7474 ms      | 820/820         | synthetic-probe-plan   |
| cold-import      | 1        | 6850 ms  | 6930 ms  | 539.2 MB     | 7561 ms      | 818/818         | cold-import-readiness  |
| workspace-plan   | 1        | 6839 ms  | 6845 ms  | 543.4 MB     | 7475 ms      | 816/816         | workspace-plan         |
| platform-probes  | 1        | 6877 ms  | 6881 ms  | 538.5 MB     | 7482 ms      | 820/820         | platform-probes        |
| import-loop      | 1        | 436 ms   | 447 ms   | 60.8 MB      | 224 ms       | 50/50           | import-loop-profile    |
