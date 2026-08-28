# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 3619 ms            |
| Command P95 wall time  | 4034 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 3112               |
| CPU samples            | 3112               |
| Max peak RSS           | 581.2 MB           |
| Max RSS delta          | 579.9 MB           |
| Max CPU estimate       | 4426 ms            |
| Max harness heap delta | 11.1 MB            |

## Target OpenClaw Registry Surface

| Metric                 | Value       |
| ---------------------- | ----------- |
| status                 | ok          |
| configuredPath         | ../openclaw |
| compatRecords          | 0           |
| hookNames              | 42          |
| apiRegistrars          | 57          |
| capturedRegistrars     | 31          |
| sdkExports             | 315         |
| manifestFields         | 48          |
| manifestContractFields | 22          |

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
| node-boot              | Node boot                                       | 36 ms       | 38 ms    | 35.7 MB      | 34.4 MB       | 0 ms         | 0.4 MB     | 6/6             | 0          |
| fixture-inspection     | Fixture inspection                              | 3679 ms     | 3689 ms  | 581.2 MB     | 579.9 MB      | 3755 ms      | 9.8 MB     | 425/425         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 3712 ms     | 3832 ms  | 535.8 MB     | 534.5 MB      | 3824 ms      | 10.3 MB    | 433/433         | 0          |
| contract-capture       | Contract capture inventory                      | 3619 ms     | 3730 ms  | 578.8 MB     | 577.3 MB      | 3745 ms      | 9.5 MB     | 422/422         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 3530 ms     | 4171 ms  | 535.7 MB     | 534.3 MB      | 3846 ms      | 9.2 MB     | 430/430         | 0          |
| cold-import-readiness  | Cold import readiness                           | 3608 ms     | 3674 ms  | 581.1 MB     | 579.7 MB      | 3692 ms      | 8.1 MB     | 421/421         | 0          |
| workspace-plan         | Workspace execution plan                        | 4034 ms     | 5081 ms  | 545.1 MB     | 543.8 MB      | 4426 ms      | 11.1 MB    | 492/492         | 0          |
| platform-probes        | Platform and loader probes                      | 3827 ms     | 3954 ms  | 542.2 MB     | 541.6 MB      | 3739 ms      | 8.6 MB     | 438/438         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 383 ms      | 409 ms   | 61.5 MB      | 60.3 MB       | 69 ms        | 0.9 MB     | 45/45           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 36 ms    | 38 ms    | 35.7 MB      | 0 ms         | 6/6             | node-boot              |
| fixture-scan     | 1        | 3679 ms  | 3689 ms  | 581.2 MB     | 3755 ms      | 425/425         | fixture-inspection     |
| target-registry  | 1        | 3712 ms  | 3832 ms  | 535.8 MB     | 3824 ms      | 433/433         | compat-report-registry |
| contract-capture | 1        | 3619 ms  | 3730 ms  | 578.8 MB     | 3745 ms      | 422/422         | contract-capture       |
| synthetic-probes | 1        | 3530 ms  | 4171 ms  | 535.7 MB     | 3846 ms      | 430/430         | synthetic-probe-plan   |
| cold-import      | 1        | 3608 ms  | 3674 ms  | 581.1 MB     | 3692 ms      | 421/421         | cold-import-readiness  |
| workspace-plan   | 1        | 4034 ms  | 5081 ms  | 545.1 MB     | 4426 ms      | 492/492         | workspace-plan         |
| platform-probes  | 1        | 3827 ms  | 3954 ms  | 542.2 MB     | 3739 ms      | 438/438         | platform-probes        |
| import-loop      | 1        | 383 ms   | 409 ms   | 61.5 MB      | 69 ms        | 45/45           | import-loop-profile    |
