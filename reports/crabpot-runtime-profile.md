# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 5798 ms            |
| Command P95 wall time  | 5904 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 4933               |
| CPU samples            | 4933               |
| Max peak RSS           | 525.2 MB           |
| Max RSS delta          | 498.9 MB           |
| Max CPU estimate       | 6604 ms            |
| Max harness heap delta | 7.4 MB             |

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
| sourceFiles           | 2065  |
| observedHooks         | 111   |
| observedRegistrations | 211   |
| observedSdkImports    | 1333  |
| contractProbes        | 275   |
| issueFindings         | 400   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 26 ms       | 31 ms    | 28.5 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 5904 ms     | 5912 ms  | 396.3 MB     | 367.8 MB      | 6412 ms      | 7.2 MB     | 705/705         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 5846 ms     | 6126 ms  | 397.4 MB     | 368.9 MB      | 6604 ms      | 7.2 MB     | 709/709         | 0          |
| contract-capture       | Contract capture inventory                      | 5882 ms     | 5907 ms  | 455 MB       | 429.4 MB      | 6362 ms      | 7.4 MB     | 703/703         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 5784 ms     | 5912 ms  | 396.5 MB     | 368.1 MB      | 6397 ms      | 7.4 MB     | 698/698         | 0          |
| cold-import-readiness  | Cold import readiness                           | 5798 ms     | 5822 ms  | 458.2 MB     | 429.7 MB      | 6288 ms      | 6.7 MB     | 692/692         | 0          |
| workspace-plan         | Workspace execution plan                        | 5776 ms     | 5786 ms  | 459.9 MB     | 431.5 MB      | 6289 ms      | 6.7 MB     | 687/687         | 0          |
| platform-probes        | Platform and loader probes                      | 5875 ms     | 5890 ms  | 525.2 MB     | 498.9 MB      | 6273 ms      | 1.2 MB     | 700/700         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 312 ms      | 312 ms   | 60.8 MB      | 34.4 MB       | 144 ms       | 1.2 MB     | 36/36           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 26 ms    | 31 ms    | 28.5 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 5904 ms  | 5912 ms  | 396.3 MB     | 6412 ms      | 705/705         | fixture-inspection     |
| target-registry  | 1        | 5846 ms  | 6126 ms  | 397.4 MB     | 6604 ms      | 709/709         | compat-report-registry |
| contract-capture | 1        | 5882 ms  | 5907 ms  | 455 MB       | 6362 ms      | 703/703         | contract-capture       |
| synthetic-probes | 1        | 5784 ms  | 5912 ms  | 396.5 MB     | 6397 ms      | 698/698         | synthetic-probe-plan   |
| cold-import      | 1        | 5798 ms  | 5822 ms  | 458.2 MB     | 6288 ms      | 692/692         | cold-import-readiness  |
| workspace-plan   | 1        | 5776 ms  | 5786 ms  | 459.9 MB     | 6289 ms      | 687/687         | workspace-plan         |
| platform-probes  | 1        | 5875 ms  | 5890 ms  | 525.2 MB     | 6273 ms      | 700/700         | platform-probes        |
| import-loop      | 1        | 312 ms   | 312 ms   | 60.8 MB      | 144 ms       | 36/36           | import-loop-profile    |
