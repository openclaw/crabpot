# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 4163 ms            |
| Command P95 wall time  | 4878 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 3410               |
| CPU samples            | 3410               |
| Max peak RSS           | 760.9 MB           |
| Max RSS delta          | 760.4 MB           |
| Max CPU estimate       | 5252 ms            |
| Max harness heap delta | 14.4 MB            |

## Target OpenClaw Registry Surface

| Metric                 | Value                                 |
| ---------------------- | ------------------------------------- |
| status                 | ok                                    |
| configuredPath         | /tmp/crabpot-openclaw.thovuw/openclaw |
| compatRecords          | 0                                     |
| hookNames              | 42                                    |
| apiRegistrars          | 59                                    |
| capturedRegistrars     | 32                                    |
| sdkExports             | 331                                   |
| manifestFields         | 45                                    |
| manifestContractFields | 23                                    |

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
| node-boot              | Node boot                                       | 29 ms       | 30 ms    | 0.7 MB       | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 4070 ms     | 4076 ms  | 722.7 MB     | 722.2 MB      | 3864 ms      | 13.1 MB    | 460/460         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 4210 ms     | 4222 ms  | 729.5 MB     | 728.9 MB      | 4032 ms      | 13.5 MB    | 480/480         | 0          |
| contract-capture       | Contract capture inventory                      | 4167 ms     | 4195 ms  | 727.7 MB     | 727.2 MB      | 3967 ms      | 13.2 MB    | 474/474         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 4145 ms     | 4176 ms  | 724.4 MB     | 724 MB        | 3959 ms      | 11.2 MB    | 470/470         | 0          |
| cold-import-readiness  | Cold import readiness                           | 4174 ms     | 4203 ms  | 728.6 MB     | 728.1 MB      | 4001 ms      | 11 MB      | 471/471         | 0          |
| workspace-plan         | Workspace execution plan                        | 4163 ms     | 4260 ms  | 760.9 MB     | 760.4 MB      | 4056 ms      | 11.3 MB    | 476/476         | 0          |
| platform-probes        | Platform and loader probes                      | 4878 ms     | 5482 ms  | 659.9 MB     | 659.4 MB      | 5252 ms      | 14.4 MB    | 547/547         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 251 ms      | 251 ms   | 67.8 MB      | 67.3 MB       | 29 ms        | 0.8 MB     | 29/29           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 29 ms    | 30 ms    | 0.7 MB       | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 4070 ms  | 4076 ms  | 722.7 MB     | 3864 ms      | 460/460         | fixture-inspection     |
| target-registry  | 1        | 4210 ms  | 4222 ms  | 729.5 MB     | 4032 ms      | 480/480         | compat-report-registry |
| contract-capture | 1        | 4167 ms  | 4195 ms  | 727.7 MB     | 3967 ms      | 474/474         | contract-capture       |
| synthetic-probes | 1        | 4145 ms  | 4176 ms  | 724.4 MB     | 3959 ms      | 470/470         | synthetic-probe-plan   |
| cold-import      | 1        | 4174 ms  | 4203 ms  | 728.6 MB     | 4001 ms      | 471/471         | cold-import-readiness  |
| workspace-plan   | 1        | 4163 ms  | 4260 ms  | 760.9 MB     | 4056 ms      | 476/476         | workspace-plan         |
| platform-probes  | 1        | 4878 ms  | 5482 ms  | 659.9 MB     | 5252 ms      | 547/547         | platform-probes        |
| import-loop      | 1        | 251 ms   | 251 ms   | 67.8 MB      | 29 ms        | 29/29           | import-loop-profile    |
