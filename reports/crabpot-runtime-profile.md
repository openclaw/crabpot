# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 6928 ms            |
| Command P95 wall time  | 7055 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 5825               |
| CPU samples            | 5825               |
| Max peak RSS           | 573.2 MB           |
| Max RSS delta          | 544.9 MB           |
| Max CPU estimate       | 8389 ms            |
| Max harness heap delta | 11.4 MB            |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 0          |
| hookNames              | 42         |
| apiRegistrars          | 57         |
| capturedRegistrars     | 31         |
| sdkExports             | 315        |
| manifestFields         | 48         |
| manifestContractFields | 22         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 60    |
| sourceFiles           | 2117  |
| observedHooks         | 111   |
| observedRegistrations | 210   |
| observedSdkImports    | 1003  |
| contractProbes        | 270   |
| issueFindings         | 393   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 38 ms       | 41 ms    | 30.4 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 6771 ms     | 6821 ms  | 498.9 MB     | 469.1 MB      | 8097 ms      | -0.2 MB    | 804/804         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 7055 ms     | 7091 ms  | 567.6 MB     | 538.3 MB      | 8381 ms      | -0.3 MB    | 837/837         | 0          |
| contract-capture       | Contract capture inventory                      | 6997 ms     | 7038 ms  | 566.9 MB     | 537.3 MB      | 8389 ms      | 11.4 MB    | 829/829         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 6928 ms     | 6942 ms  | 496.2 MB     | 466.6 MB      | 8287 ms      | -0.9 MB    | 824/824         | 0          |
| cold-import-readiness  | Cold import readiness                           | 6938 ms     | 7043 ms  | 567 MB       | 537.2 MB      | 8374 ms      | -0.6 MB    | 822/822         | 0          |
| workspace-plan         | Workspace execution plan                        | 6935 ms     | 6979 ms  | 569.3 MB     | 541 MB        | 8340 ms      | 2 MB       | 825/825         | 0          |
| platform-probes        | Platform and loader probes                      | 6876 ms     | 6888 ms  | 573.2 MB     | 544.9 MB      | 8245 ms      | 4.8 MB     | 818/818         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 540 ms      | 546 ms   | 64.2 MB      | 35.4 MB       | 273 ms       | 1.9 MB     | 63/63           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 38 ms    | 41 ms    | 30.4 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 6771 ms  | 6821 ms  | 498.9 MB     | 8097 ms      | 804/804         | fixture-inspection     |
| target-registry  | 1        | 7055 ms  | 7091 ms  | 567.6 MB     | 8381 ms      | 837/837         | compat-report-registry |
| contract-capture | 1        | 6997 ms  | 7038 ms  | 566.9 MB     | 8389 ms      | 829/829         | contract-capture       |
| synthetic-probes | 1        | 6928 ms  | 6942 ms  | 496.2 MB     | 8287 ms      | 824/824         | synthetic-probe-plan   |
| cold-import      | 1        | 6938 ms  | 7043 ms  | 567 MB       | 8374 ms      | 822/822         | cold-import-readiness  |
| workspace-plan   | 1        | 6935 ms  | 6979 ms  | 569.3 MB     | 8340 ms      | 825/825         | workspace-plan         |
| platform-probes  | 1        | 6876 ms  | 6888 ms  | 573.2 MB     | 8245 ms      | 818/818         | platform-probes        |
| import-loop      | 1        | 540 ms   | 546 ms   | 64.2 MB      | 273 ms       | 63/63           | import-loop-profile    |
