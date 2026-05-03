# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 1

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 1011 ms            |
| Command P95 wall time  | 1252 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 9                  |
| RSS samples            | 317                |
| CPU samples            | 317                |
| Max peak RSS           | 498.9 MB           |
| Max RSS delta          | 498.5 MB           |
| Max CPU estimate       | 878 ms             |
| Max harness heap delta | 11.5 MB            |

## Target OpenClaw Registry Surface

| Metric                 | Value       |
| ---------------------- | ----------- |
| status                 | ok          |
| configuredPath         | ../openclaw |
| compatRecords          | 60          |
| hookNames              | 35          |
| apiRegistrars          | 49          |
| capturedRegistrars     | 26          |
| sdkExports             | 294         |
| manifestFields         | 39          |
| manifestContractFields | 17          |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 57    |
| sourceFiles           | 2970  |
| observedHooks         | 93    |
| observedRegistrations | 185   |
| observedSdkImports    | 1080  |
| contractProbes        | 299   |
| issueFindings         | 307   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 62 ms       | 62 ms    | 38.4 MB      | 37.9 MB       | 0 ms         | -53.6 MB   | 2/2             | 0          |
| fixture-inspection     | Fixture inspection                              | 1002 ms     | 1002 ms  | 495.8 MB     | 495.4 MB      | 687 ms       | 9.9 MB     | 39/39           | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 1011 ms     | 1011 ms  | 494 MB       | 493.6 MB      | 690 ms       | 9.7 MB     | 39/39           | 0          |
| contract-capture       | Contract capture inventory                      | 1252 ms     | 1252 ms  | 496.4 MB     | 495.9 MB      | 876 ms       | 11.5 MB    | 48/48           | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 1218 ms     | 1218 ms  | 496.3 MB     | 495.9 MB      | 878 ms       | 11.2 MB    | 47/47           | 0          |
| cold-import-readiness  | Cold import readiness                           | 1091 ms     | 1091 ms  | 496.3 MB     | 495.9 MB      | 739 ms       | -333.3 MB  | 43/43           | 0          |
| workspace-plan         | Workspace execution plan                        | 1133 ms     | 1133 ms  | 498.8 MB     | 498.5 MB      | 717 ms       | 10.1 MB    | 42/42           | 0          |
| platform-probes        | Platform and loader probes                      | 971 ms      | 971 ms   | 498.9 MB     | 498.5 MB      | 668 ms       | 9.2 MB     | 38/38           | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 487 ms      | 487 ms   | 57.6 MB      | 57.3 MB       | 73 ms        | 4.8 MB     | 19/19           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 62 ms    | 62 ms    | 38.4 MB      | 0 ms         | 2/2             | node-boot              |
| fixture-scan     | 1        | 1002 ms  | 1002 ms  | 495.8 MB     | 687 ms       | 39/39           | fixture-inspection     |
| target-registry  | 1        | 1011 ms  | 1011 ms  | 494 MB       | 690 ms       | 39/39           | compat-report-registry |
| contract-capture | 1        | 1252 ms  | 1252 ms  | 496.4 MB     | 876 ms       | 48/48           | contract-capture       |
| synthetic-probes | 1        | 1218 ms  | 1218 ms  | 496.3 MB     | 878 ms       | 47/47           | synthetic-probe-plan   |
| cold-import      | 1        | 1091 ms  | 1091 ms  | 496.3 MB     | 739 ms       | 43/43           | cold-import-readiness  |
| workspace-plan   | 1        | 1133 ms  | 1133 ms  | 498.8 MB     | 717 ms       | 42/42           | workspace-plan         |
| platform-probes  | 1        | 971 ms   | 971 ms   | 498.9 MB     | 668 ms       | 38/38           | platform-probes        |
| import-loop      | 1        | 487 ms   | 487 ms   | 57.6 MB      | 73 ms        | 19/19           | import-loop-profile    |
