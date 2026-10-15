# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 10616 ms           |
| Command P95 wall time  | 11303 ms           |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 8749               |
| CPU samples            | 8749               |
| Max peak RSS           | 732.1 MB           |
| Max RSS delta          | 702.5 MB           |
| Max CPU estimate       | 16743 ms           |
| Max harness heap delta | 21.1 MB            |

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
| sourceFiles           | 2323  |
| observedHooks         | 113   |
| observedRegistrations | 218   |
| observedSdkImports    | 1224  |
| contractProbes        | 218   |
| issueFindings         | 446   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 25 ms       | 26 ms    | 31.8 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 7159 ms     | 7167 ms  | 445.5 MB     | 415.2 MB      | 10184 ms     | 19 MB      | 849/849         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 10616 ms    | 10794 ms | 527.2 MB     | 499.2 MB      | 16008 ms     | 21.1 MB    | 1270/1270       | 0          |
| contract-capture       | Contract capture inventory                      | 10699 ms    | 11039 ms | 469.7 MB     | 442.4 MB      | 16161 ms     | 20.3 MB    | 1279/1279       | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 11258 ms    | 11345 ms | 489.8 MB     | 461.8 MB      | 16538 ms     | 20.8 MB    | 1339/1339       | 0          |
| cold-import-readiness  | Cold import readiness                           | 10587 ms    | 11336 ms | 477.1 MB     | 449.1 MB      | 16743 ms     | 19.4 MB    | 1288/1288       | 0          |
| workspace-plan         | Workspace execution plan                        | 10866 ms    | 11119 ms | 732.1 MB     | 702.1 MB      | 16690 ms     | 20.2 MB    | 1300/1300       | 0          |
| platform-probes        | Platform and loader probes                      | 11303 ms    | 11364 ms | 731.1 MB     | 702.5 MB      | 16310 ms     | 20.3 MB    | 1342/1342       | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 659 ms      | 670 ms   | 78.6 MB      | 49.4 MB       | 421 ms       | 1.3 MB     | 79/79           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 25 ms    | 26 ms    | 31.8 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 7159 ms  | 7167 ms  | 445.5 MB     | 10184 ms     | 849/849         | fixture-inspection     |
| target-registry  | 1        | 10616 ms | 10794 ms | 527.2 MB     | 16008 ms     | 1270/1270       | compat-report-registry |
| contract-capture | 1        | 10699 ms | 11039 ms | 469.7 MB     | 16161 ms     | 1279/1279       | contract-capture       |
| synthetic-probes | 1        | 11258 ms | 11345 ms | 489.8 MB     | 16538 ms     | 1339/1339       | synthetic-probe-plan   |
| cold-import      | 1        | 10587 ms | 11336 ms | 477.1 MB     | 16743 ms     | 1288/1288       | cold-import-readiness  |
| workspace-plan   | 1        | 10866 ms | 11119 ms | 732.1 MB     | 16690 ms     | 1300/1300       | workspace-plan         |
| platform-probes  | 1        | 11303 ms | 11364 ms | 731.1 MB     | 16310 ms     | 1342/1342       | platform-probes        |
| import-loop      | 1        | 659 ms   | 670 ms   | 78.6 MB      | 421 ms       | 79/79           | import-loop-profile    |
