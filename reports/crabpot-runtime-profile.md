# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 3022 ms            |
| Command P95 wall time  | 3127 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 2154               |
| CPU samples            | 2154               |
| Max peak RSS           | 219 MB             |
| Max RSS delta          | 200.6 MB           |
| Max CPU estimate       | 3521 ms            |
| Max harness heap delta | 1.9 MB             |

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
| fixtures              | 59    |
| sourceFiles           | 2202  |
| observedHooks         | 110   |
| observedRegistrations | 212   |
| observedSdkImports    | 1082  |
| contractProbes        | 251   |
| issueFindings         | 358   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 12 ms       | 13 ms    | 21.4 MB      | 0 MB          | 0 ms         | 0.2 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2871 ms     | 2979 ms  | 202 MB       | 182.8 MB      | 3339 ms      | 1.9 MB     | 287/287         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 3127 ms     | 3205 ms  | 205.5 MB     | 186.8 MB      | 3521 ms      | 1.1 MB     | 308/308         | 0          |
| contract-capture       | Contract capture inventory                      | 3060 ms     | 3082 ms  | 195 MB       | 179 MB        | 3464 ms      | 0.5 MB     | 309/309         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 3022 ms     | 3114 ms  | 196.4 MB     | 179.7 MB      | 3419 ms      | 0.5 MB     | 308/308         | 0          |
| cold-import-readiness  | Cold import readiness                           | 3062 ms     | 3107 ms  | 197.9 MB     | 180.6 MB      | 3433 ms      | 0.5 MB     | 306/306         | 0          |
| workspace-plan         | Workspace execution plan                        | 3005 ms     | 3014 ms  | 219 MB       | 200.6 MB      | 3433 ms      | 0.4 MB     | 298/298         | 0          |
| platform-probes        | Platform and loader probes                      | 3059 ms     | 3097 ms  | 208.9 MB     | 189.8 MB      | 3509 ms      | 0.5 MB     | 310/310         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 211 ms      | 214 ms   | 61.2 MB      | 44.6 MB       | 90 ms        | 0.2 MB     | 25/25           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 12 ms    | 13 ms    | 21.4 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2871 ms  | 2979 ms  | 202 MB       | 3339 ms      | 287/287         | fixture-inspection     |
| target-registry  | 1        | 3127 ms  | 3205 ms  | 205.5 MB     | 3521 ms      | 308/308         | compat-report-registry |
| contract-capture | 1        | 3060 ms  | 3082 ms  | 195 MB       | 3464 ms      | 309/309         | contract-capture       |
| synthetic-probes | 1        | 3022 ms  | 3114 ms  | 196.4 MB     | 3419 ms      | 308/308         | synthetic-probe-plan   |
| cold-import      | 1        | 3062 ms  | 3107 ms  | 197.9 MB     | 3433 ms      | 306/306         | cold-import-readiness  |
| workspace-plan   | 1        | 3005 ms  | 3014 ms  | 219 MB       | 3433 ms      | 298/298         | workspace-plan         |
| platform-probes  | 1        | 3059 ms  | 3097 ms  | 208.9 MB     | 3509 ms      | 310/310         | platform-probes        |
| import-loop      | 1        | 211 ms   | 214 ms   | 61.2 MB      | 90 ms        | 25/25           | import-loop-profile    |
