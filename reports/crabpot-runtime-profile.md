# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 1075 ms            |
| Command P95 wall time  | 1152 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 932                |
| CPU samples            | 932                |
| Max peak RSS           | 330.6 MB           |
| Max RSS delta          | 301.9 MB           |
| Max CPU estimate       | 1218 ms            |
| Max harness heap delta | 3.9 MB             |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 65         |
| hookNames              | 38         |
| apiRegistrars          | 55         |
| capturedRegistrars     | 30         |
| sdkExports             | 310        |
| manifestFields         | 41         |
| manifestContractFields | 20         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 60    |
| sourceFiles           | 1768  |
| observedHooks         | 108   |
| observedRegistrations | 206   |
| observedSdkImports    | 1229  |
| contractProbes        | 284   |
| issueFindings         | 289   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 25 ms       | 25 ms    | 30.3 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 999 ms      | 1003 ms  | 317.1 MB     | 287.5 MB      | 1084 ms      | 3.7 MB     | 119/119         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 1072 ms     | 1081 ms  | 317.3 MB     | 287.2 MB      | 1166 ms      | 3.9 MB     | 127/127         | 0          |
| contract-capture       | Contract capture inventory                      | 1075 ms     | 1079 ms  | 316.8 MB     | 286.9 MB      | 1175 ms      | 3.6 MB     | 129/129         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 1080 ms     | 1080 ms  | 317.3 MB     | 286.7 MB      | 1150 ms      | 3.6 MB     | 128/128         | 0          |
| cold-import-readiness  | Cold import readiness                           | 1075 ms     | 1077 ms  | 319.5 MB     | 290.9 MB      | 1162 ms      | 3.6 MB     | 128/128         | 0          |
| workspace-plan         | Workspace execution plan                        | 1095 ms     | 1097 ms  | 324.1 MB     | 295.1 MB      | 1190 ms      | 0.6 MB     | 132/132         | 0          |
| platform-probes        | Platform and loader probes                      | 1152 ms     | 1172 ms  | 330.6 MB     | 301.9 MB      | 1218 ms      | 0.9 MB     | 136/136         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 249 ms      | 255 ms   | 60.7 MB      | 32.1 MB       | 99 ms        | 0.9 MB     | 30/30           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 25 ms    | 25 ms    | 30.3 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 999 ms   | 1003 ms  | 317.1 MB     | 1084 ms      | 119/119         | fixture-inspection     |
| target-registry  | 1        | 1072 ms  | 1081 ms  | 317.3 MB     | 1166 ms      | 127/127         | compat-report-registry |
| contract-capture | 1        | 1075 ms  | 1079 ms  | 316.8 MB     | 1175 ms      | 129/129         | contract-capture       |
| synthetic-probes | 1        | 1080 ms  | 1080 ms  | 317.3 MB     | 1150 ms      | 128/128         | synthetic-probe-plan   |
| cold-import      | 1        | 1075 ms  | 1077 ms  | 319.5 MB     | 1162 ms      | 128/128         | cold-import-readiness  |
| workspace-plan   | 1        | 1095 ms  | 1097 ms  | 324.1 MB     | 1190 ms      | 132/132         | workspace-plan         |
| platform-probes  | 1        | 1152 ms  | 1172 ms  | 330.6 MB     | 1218 ms      | 136/136         | platform-probes        |
| import-loop      | 1        | 249 ms   | 255 ms   | 60.7 MB      | 99 ms        | 30/30           | import-loop-profile    |
