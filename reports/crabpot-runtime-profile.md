# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 6497 ms            |
| Command P95 wall time  | 6602 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 5489               |
| CPU samples            | 5489               |
| Max peak RSS           | 463.7 MB           |
| Max RSS delta          | 435.4 MB           |
| Max CPU estimate       | 7260 ms            |
| Max harness heap delta | 9.9 MB             |

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
| sourceFiles           | 2066  |
| observedHooks         | 111   |
| observedRegistrations | 211   |
| observedSdkImports    | 1333  |
| contractProbes        | 275   |
| issueFindings         | 400   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 36 ms       | 36 ms    | 31.4 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 6399 ms     | 6407 ms  | 438.7 MB     | 409 MB        | 7016 ms      | -1.3 MB    | 762/762         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 6527 ms     | 6553 ms  | 438.7 MB     | 409.3 MB      | 7156 ms      | 9.8 MB     | 779/779         | 0          |
| contract-capture       | Contract capture inventory                      | 6533 ms     | 6549 ms  | 393.9 MB     | 365.2 MB      | 7197 ms      | 9.9 MB     | 779/779         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 6602 ms     | 6648 ms  | 437.4 MB     | 408.3 MB      | 7260 ms      | -1.8 MB    | 788/788         | 0          |
| cold-import-readiness  | Cold import readiness                           | 6477 ms     | 6622 ms  | 400 MB       | 370.2 MB      | 7238 ms      | 9.5 MB     | 775/775         | 0          |
| workspace-plan         | Workspace execution plan                        | 6497 ms     | 6549 ms  | 401.2 MB     | 371.8 MB      | 7224 ms      | 1.9 MB     | 771/771         | 0          |
| platform-probes        | Platform and loader probes                      | 6524 ms     | 6563 ms  | 463.7 MB     | 435.4 MB      | 7193 ms      | 0.8 MB     | 781/781         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 445 ms      | 446 ms   | 60.8 MB      | 32.5 MB       | 204 ms       | 1.7 MB     | 51/51           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 36 ms    | 36 ms    | 31.4 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 6399 ms  | 6407 ms  | 438.7 MB     | 7016 ms      | 762/762         | fixture-inspection     |
| target-registry  | 1        | 6527 ms  | 6553 ms  | 438.7 MB     | 7156 ms      | 779/779         | compat-report-registry |
| contract-capture | 1        | 6533 ms  | 6549 ms  | 393.9 MB     | 7197 ms      | 779/779         | contract-capture       |
| synthetic-probes | 1        | 6602 ms  | 6648 ms  | 437.4 MB     | 7260 ms      | 788/788         | synthetic-probe-plan   |
| cold-import      | 1        | 6477 ms  | 6622 ms  | 400 MB       | 7238 ms      | 775/775         | cold-import-readiness  |
| workspace-plan   | 1        | 6497 ms  | 6549 ms  | 401.2 MB     | 7224 ms      | 771/771         | workspace-plan         |
| platform-probes  | 1        | 6524 ms  | 6563 ms  | 463.7 MB     | 7193 ms      | 781/781         | platform-probes        |
| import-loop      | 1        | 445 ms   | 446 ms   | 60.8 MB      | 204 ms       | 51/51           | import-loop-profile    |
