# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 6550 ms            |
| Command P95 wall time  | 6625 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 5525               |
| CPU samples            | 5525               |
| Max peak RSS           | 434.3 MB           |
| Max RSS delta          | 406 MB             |
| Max CPU estimate       | 7215 ms            |
| Max harness heap delta | 10.4 MB            |

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
| node-boot              | Node boot                                       | 30 ms       | 30 ms    | 28.3 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 6394 ms     | 6433 ms  | 400.1 MB     | 371.9 MB      | 6973 ms      | -1.4 MB    | 765/765         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 6625 ms     | 6646 ms  | 399.3 MB     | 371 MB        | 7184 ms      | 10.4 MB    | 790/790         | 0          |
| contract-capture       | Contract capture inventory                      | 6550 ms     | 6591 ms  | 396.2 MB     | 367.9 MB      | 7105 ms      | -2 MB      | 782/782         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 6564 ms     | 6681 ms  | 401.3 MB     | 373 MB        | 7215 ms      | 10.3 MB    | 788/788         | 0          |
| cold-import-readiness  | Cold import readiness                           | 6591 ms     | 6598 ms  | 434.3 MB     | 406 MB        | 7146 ms      | 9.9 MB     | 788/788         | 0          |
| workspace-plan         | Workspace execution plan                        | 6544 ms     | 6594 ms  | 401.8 MB     | 373.6 MB      | 7115 ms      | 2.2 MB     | 781/781         | 0          |
| platform-probes        | Platform and loader probes                      | 6576 ms     | 6601 ms  | 388.7 MB     | 361.6 MB      | 7162 ms      | 1 MB       | 786/786         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 353 ms      | 364 ms   | 60.7 MB      | 33.3 MB       | 176 ms       | 1.4 MB     | 42/42           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 30 ms    | 30 ms    | 28.3 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 6394 ms  | 6433 ms  | 400.1 MB     | 6973 ms      | 765/765         | fixture-inspection     |
| target-registry  | 1        | 6625 ms  | 6646 ms  | 399.3 MB     | 7184 ms      | 790/790         | compat-report-registry |
| contract-capture | 1        | 6550 ms  | 6591 ms  | 396.2 MB     | 7105 ms      | 782/782         | contract-capture       |
| synthetic-probes | 1        | 6564 ms  | 6681 ms  | 401.3 MB     | 7215 ms      | 788/788         | synthetic-probe-plan   |
| cold-import      | 1        | 6591 ms  | 6598 ms  | 434.3 MB     | 7146 ms      | 788/788         | cold-import-readiness  |
| workspace-plan   | 1        | 6544 ms  | 6594 ms  | 401.8 MB     | 7115 ms      | 781/781         | workspace-plan         |
| platform-probes  | 1        | 6576 ms  | 6601 ms  | 388.7 MB     | 7162 ms      | 786/786         | platform-probes        |
| import-loop      | 1        | 353 ms   | 364 ms   | 60.7 MB      | 176 ms       | 42/42           | import-loop-profile    |
