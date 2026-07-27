# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 4187 ms            |
| Command P95 wall time  | 16975 ms           |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 5636               |
| CPU samples            | 5636               |
| Max peak RSS           | 760.9 MB           |
| Max RSS delta          | 760.3 MB           |
| Max CPU estimate       | 8708 ms            |
| Max harness heap delta | 7.8 MB             |

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
| sourceFiles           | 2091  |
| observedHooks         | 111   |
| observedRegistrations | 213   |
| observedSdkImports    | 1367  |
| contractProbes        | 275   |
| issueFindings         | 397   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 71 ms       | 71 ms    | 47 MB        | 42.8 MB       | 3 ms         | 0.4 MB     | 4/4             | 0          |
| fixture-inspection     | Fixture inspection                              | 16975 ms    | 19001 ms | 653.8 MB     | 652.6 MB      | 8708 ms      | 7.8 MB     | 1442/1442       | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 9097 ms     | 12482 ms | 731.3 MB     | 730.7 MB      | 8463 ms      | 3.8 MB     | 903/903         | 0          |
| contract-capture       | Contract capture inventory                      | 9335 ms     | 11355 ms | 728.9 MB     | 727.6 MB      | 8550 ms      | 1.2 MB     | 994/994         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 6294 ms     | 9886 ms  | 732.2 MB     | 731.6 MB      | 7415 ms      | 0.5 MB     | 781/781         | 0          |
| cold-import-readiness  | Cold import readiness                           | 4151 ms     | 5174 ms  | 634.1 MB     | 633.8 MB      | 4962 ms      | 2 MB       | 508/508         | 0          |
| workspace-plan         | Workspace execution plan                        | 4090 ms     | 4134 ms  | 760.9 MB     | 760.3 MB      | 3931 ms      | 1.9 MB     | 463/463         | 0          |
| platform-probes        | Platform and loader probes                      | 4187 ms     | 4555 ms  | 661.7 MB     | 661.1 MB      | 4209 ms      | 0.1 MB     | 492/492         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 435 ms      | 441 ms   | 68.3 MB      | 67.8 MB       | 73 ms        | 1.3 MB     | 49/49           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 71 ms    | 71 ms    | 47 MB        | 3 ms         | 4/4             | node-boot              |
| fixture-scan     | 1        | 16975 ms | 19001 ms | 653.8 MB     | 8708 ms      | 1442/1442       | fixture-inspection     |
| target-registry  | 1        | 9097 ms  | 12482 ms | 731.3 MB     | 8463 ms      | 903/903         | compat-report-registry |
| contract-capture | 1        | 9335 ms  | 11355 ms | 728.9 MB     | 8550 ms      | 994/994         | contract-capture       |
| synthetic-probes | 1        | 6294 ms  | 9886 ms  | 732.2 MB     | 7415 ms      | 781/781         | synthetic-probe-plan   |
| cold-import      | 1        | 4151 ms  | 5174 ms  | 634.1 MB     | 4962 ms      | 508/508         | cold-import-readiness  |
| workspace-plan   | 1        | 4090 ms  | 4134 ms  | 760.9 MB     | 3931 ms      | 463/463         | workspace-plan         |
| platform-probes  | 1        | 4187 ms  | 4555 ms  | 661.7 MB     | 4209 ms      | 492/492         | platform-probes        |
| import-loop      | 1        | 435 ms   | 441 ms   | 68.3 MB      | 73 ms        | 49/49           | import-loop-profile    |
