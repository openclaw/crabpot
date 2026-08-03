# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 6895 ms            |
| Command P95 wall time  | 6954 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 5792               |
| CPU samples            | 5792               |
| Max peak RSS           | 515.6 MB           |
| Max RSS delta          | 487.4 MB           |
| Max CPU estimate       | 8328 ms            |
| Max harness heap delta | 4.9 MB             |

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
| observedRegistrations | 210   |
| observedSdkImports    | 984   |
| contractProbes        | 242   |
| issueFindings         | 358   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 36 ms       | 37 ms    | 31.1 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 6776 ms     | 6803 ms  | 457.6 MB     | 427.7 MB      | 8028 ms      | -0.2 MB    | 802/802         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 6834 ms     | 6948 ms  | 495.5 MB     | 466 MB        | 8233 ms      | 0 MB       | 814/814         | 0          |
| contract-capture       | Contract capture inventory                      | 6895 ms     | 6920 ms  | 495.6 MB     | 466 MB        | 8262 ms      | 2 MB       | 820/820         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 6912 ms     | 6922 ms  | 495.4 MB     | 467.1 MB      | 8272 ms      | 4.9 MB     | 821/821         | 0          |
| cold-import-readiness  | Cold import readiness                           | 6954 ms     | 6957 ms  | 504.1 MB     | 475.5 MB      | 8328 ms      | 4.5 MB     | 819/819         | 0          |
| workspace-plan         | Workspace execution plan                        | 6902 ms     | 6948 ms  | 515.6 MB     | 487.4 MB      | 8296 ms      | 0.3 MB     | 822/822         | 0          |
| platform-probes        | Platform and loader probes                      | 6895 ms     | 6920 ms  | 491.2 MB     | 461.6 MB      | 8200 ms      | -1.1 MB    | 823/823         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 585 ms      | 587 ms   | 64.5 MB      | 35.7 MB       | 305 ms       | 2.1 MB     | 68/68           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 36 ms    | 37 ms    | 31.1 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 6776 ms  | 6803 ms  | 457.6 MB     | 8028 ms      | 802/802         | fixture-inspection     |
| target-registry  | 1        | 6834 ms  | 6948 ms  | 495.5 MB     | 8233 ms      | 814/814         | compat-report-registry |
| contract-capture | 1        | 6895 ms  | 6920 ms  | 495.6 MB     | 8262 ms      | 820/820         | contract-capture       |
| synthetic-probes | 1        | 6912 ms  | 6922 ms  | 495.4 MB     | 8272 ms      | 821/821         | synthetic-probe-plan   |
| cold-import      | 1        | 6954 ms  | 6957 ms  | 504.1 MB     | 8328 ms      | 819/819         | cold-import-readiness  |
| workspace-plan   | 1        | 6902 ms  | 6948 ms  | 515.6 MB     | 8296 ms      | 822/822         | workspace-plan         |
| platform-probes  | 1        | 6895 ms  | 6920 ms  | 491.2 MB     | 8200 ms      | 823/823         | platform-probes        |
| import-loop      | 1        | 585 ms   | 587 ms   | 64.5 MB      | 305 ms       | 68/68           | import-loop-profile    |
