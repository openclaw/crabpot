# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 5931 ms            |
| Command P95 wall time  | 6229 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 5109               |
| CPU samples            | 5109               |
| Max peak RSS           | 308.2 MB           |
| Max RSS delta          | 281.6 MB           |
| Max CPU estimate       | 7061 ms            |
| Max harness heap delta | 15.8 MB            |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 0          |
| hookNames              | 42         |
| apiRegistrars          | 57         |
| capturedRegistrars     | 31         |
| sdkExports             | 338        |
| manifestFields         | 52         |
| manifestContractFields | 22         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 59    |
| sourceFiles           | 2221  |
| observedHooks         | 113   |
| observedRegistrations | 213   |
| observedSdkImports    | 1174  |
| contractProbes        | 260   |
| issueFindings         | 365   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 25 ms       | 27 ms    | 28.7 MB      | 0 MB          | 0 ms         | 0.5 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 5771 ms     | 5819 ms  | 300.8 MB     | 273.4 MB      | 6791 ms      | 15.8 MB    | 692/692         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 5930 ms     | 5947 ms  | 301.8 MB     | 273.9 MB      | 6958 ms      | 14.7 MB    | 710/710         | 0          |
| contract-capture       | Contract capture inventory                      | 6001 ms     | 6018 ms  | 299.4 MB     | 272.8 MB      | 6951 ms      | 11.4 MB    | 719/719         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 6055 ms     | 6079 ms  | 301.3 MB     | 274.6 MB      | 6967 ms      | 11.5 MB    | 725/725         | 0          |
| cold-import-readiness  | Cold import readiness                           | 5944 ms     | 5946 ms  | 297.1 MB     | 270.5 MB      | 6960 ms      | 11.2 MB    | 709/709         | 0          |
| workspace-plan         | Workspace execution plan                        | 5931 ms     | 5954 ms  | 304.7 MB     | 278.1 MB      | 7022 ms      | 11.2 MB    | 710/710         | 0          |
| platform-probes        | Platform and loader probes                      | 6229 ms     | 6233 ms  | 308.2 MB     | 281.6 MB      | 7061 ms      | 11.7 MB    | 743/743         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 825 ms      | 834 ms   | 76.7 MB      | 50.1 MB       | 444 ms       | 1.6 MB     | 98/98           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 25 ms    | 27 ms    | 28.7 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 5771 ms  | 5819 ms  | 300.8 MB     | 6791 ms      | 692/692         | fixture-inspection     |
| target-registry  | 1        | 5930 ms  | 5947 ms  | 301.8 MB     | 6958 ms      | 710/710         | compat-report-registry |
| contract-capture | 1        | 6001 ms  | 6018 ms  | 299.4 MB     | 6951 ms      | 719/719         | contract-capture       |
| synthetic-probes | 1        | 6055 ms  | 6079 ms  | 301.3 MB     | 6967 ms      | 725/725         | synthetic-probe-plan   |
| cold-import      | 1        | 5944 ms  | 5946 ms  | 297.1 MB     | 6960 ms      | 709/709         | cold-import-readiness  |
| workspace-plan   | 1        | 5931 ms  | 5954 ms  | 304.7 MB     | 7022 ms      | 710/710         | workspace-plan         |
| platform-probes  | 1        | 6229 ms  | 6233 ms  | 308.2 MB     | 7061 ms      | 743/743         | platform-probes        |
| import-loop      | 1        | 825 ms   | 834 ms   | 76.7 MB      | 444 ms       | 98/98           | import-loop-profile    |
