# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2072 ms            |
| Command P95 wall time  | 8684 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 181                |
| CPU samples            | 181                |
| Max peak RSS           | 80.5 MB            |
| Max RSS delta          | 80.2 MB            |
| Max CPU estimate       | 756 ms             |
| Max harness heap delta | 3.1 MB             |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 61         |
| hookNames              | 35         |
| apiRegistrars          | 49         |
| capturedRegistrars     | 26         |
| sdkExports             | 294        |
| manifestFields         | 35         |
| manifestContractFields | 17         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 33    |
| sourceFiles           | 998   |
| observedHooks         | 84    |
| observedRegistrations | 114   |
| observedSdkImports    | 350   |
| contractProbes        | 175   |
| issueFindings         | 181   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 793 ms      | 809 ms   | 0.3 MB       | 0 MB          | 0 ms         | 1.1 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2891 ms     | 3373 ms  | 80.5 MB      | 80.2 MB       | 756 ms       | 3.1 MB     | 24/24           | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 1582 ms     | 1924 ms  | 74.2 MB      | 73.8 MB       | 335 ms       | 1.8 MB     | 13/13           | 0          |
| contract-capture       | Contract capture inventory                      | 2072 ms     | 2145 ms  | 79.3 MB      | 79 MB         | 304 ms       | 2 MB       | 17/17           | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 3264 ms     | 3282 ms  | 78.7 MB      | 78.4 MB       | 341 ms       | 3 MB       | 27/27           | 0          |
| cold-import-readiness  | Cold import readiness                           | 1605 ms     | 1644 ms  | 76.3 MB      | 76.1 MB       | 308 ms       | 0.7 MB     | 12/12           | 0          |
| workspace-plan         | Workspace execution plan                        | 1623 ms     | 1635 ms  | 78.3 MB      | 78.1 MB       | 389 ms       | -0.1 MB    | 11/11           | 0          |
| platform-probes        | Platform and loader probes                      | 2708 ms     | 3496 ms  | 74.8 MB      | 74.6 MB       | 261 ms       | 0 MB       | 24/24           | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 8684 ms     | 8922 ms  | 60.7 MB      | 60.5 MB       | 224 ms       | 0.4 MB     | 50/50           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 793 ms   | 809 ms   | 0.3 MB       | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2891 ms  | 3373 ms  | 80.5 MB      | 756 ms       | 24/24           | fixture-inspection     |
| target-registry  | 1        | 1582 ms  | 1924 ms  | 74.2 MB      | 335 ms       | 13/13           | compat-report-registry |
| contract-capture | 1        | 2072 ms  | 2145 ms  | 79.3 MB      | 304 ms       | 17/17           | contract-capture       |
| synthetic-probes | 1        | 3264 ms  | 3282 ms  | 78.7 MB      | 341 ms       | 27/27           | synthetic-probe-plan   |
| cold-import      | 1        | 1605 ms  | 1644 ms  | 76.3 MB      | 308 ms       | 12/12           | cold-import-readiness  |
| workspace-plan   | 1        | 1623 ms  | 1635 ms  | 78.3 MB      | 389 ms       | 11/11           | workspace-plan         |
| platform-probes  | 1        | 2708 ms  | 3496 ms  | 74.8 MB      | 261 ms       | 24/24           | platform-probes        |
| import-loop      | 1        | 8684 ms  | 8922 ms  | 60.7 MB      | 224 ms       | 50/50           | import-loop-profile    |
