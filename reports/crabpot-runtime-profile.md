# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 1

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 1549 ms            |
| Command P95 wall time  | 4108 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 9                  |
| RSS samples            | 39                 |
| CPU samples            | 39                 |
| Max peak RSS           | 82.4 MB            |
| Max RSS delta          | 82.1 MB            |
| Max CPU estimate       | 318 ms             |
| Max harness heap delta | 2.5 MB             |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 61         |
| hookNames              | 35         |
| apiRegistrars          | 48         |
| capturedRegistrars     | 26         |
| sdkExports             | 293        |
| manifestFields         | 35         |
| manifestContractFields | 17         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 32    |
| sourceFiles           | 976   |
| observedHooks         | 82    |
| observedRegistrations | 112   |
| observedSdkImports    | 350   |
| contractProbes        | 169   |
| issueFindings         | 173   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 777 ms      | 777 ms   | 0.3 MB       | 0 MB          | 0 ms         | -18 MB     | 1/1             | 0          |
| fixture-inspection     | Fixture inspection                              | 1324 ms     | 1324 ms  | 63.2 MB      | 62.9 MB       | 60 ms        | 1.6 MB     | 3/3             | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 1549 ms     | 1549 ms  | 78.5 MB      | 78.2 MB       | 318 ms       | 1.6 MB     | 4/4             | 0          |
| contract-capture       | Contract capture inventory                      | 1831 ms     | 1831 ms  | 76.2 MB      | 75.9 MB       | 190 ms       | 1.8 MB     | 5/5             | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2351 ms     | 2351 ms  | 82.4 MB      | 82.1 MB       | 195 ms       | 2.3 MB     | 7/7             | 0          |
| cold-import-readiness  | Cold import readiness                           | 1341 ms     | 1341 ms  | 77.8 MB      | 77.5 MB       | 201 ms       | 1.3 MB     | 4/4             | 0          |
| workspace-plan         | Workspace execution plan                        | 1342 ms     | 1342 ms  | 71.3 MB      | 71 MB         | 239 ms       | 1.3 MB     | 3/3             | 0          |
| platform-probes        | Platform and loader probes                      | 1575 ms     | 1575 ms  | 61.4 MB      | 61.1 MB       | 96 ms        | -10.9 MB   | 4/4             | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 4108 ms     | 4108 ms  | 58.6 MB      | 58.3 MB       | 119 ms       | 2.5 MB     | 8/8             | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 777 ms   | 777 ms   | 0.3 MB       | 0 ms         | 1/1             | node-boot              |
| fixture-scan     | 1        | 1324 ms  | 1324 ms  | 63.2 MB      | 60 ms        | 3/3             | fixture-inspection     |
| target-registry  | 1        | 1549 ms  | 1549 ms  | 78.5 MB      | 318 ms       | 4/4             | compat-report-registry |
| contract-capture | 1        | 1831 ms  | 1831 ms  | 76.2 MB      | 190 ms       | 5/5             | contract-capture       |
| synthetic-probes | 1        | 2351 ms  | 2351 ms  | 82.4 MB      | 195 ms       | 7/7             | synthetic-probe-plan   |
| cold-import      | 1        | 1341 ms  | 1341 ms  | 77.8 MB      | 201 ms       | 4/4             | cold-import-readiness  |
| workspace-plan   | 1        | 1342 ms  | 1342 ms  | 71.3 MB      | 239 ms       | 3/3             | workspace-plan         |
| platform-probes  | 1        | 1575 ms  | 1575 ms  | 61.4 MB      | 96 ms        | 4/4             | platform-probes        |
| import-loop      | 1        | 4108 ms  | 4108 ms  | 58.6 MB      | 119 ms       | 8/8             | import-loop-profile    |
