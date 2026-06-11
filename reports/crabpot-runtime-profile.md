# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2096 ms            |
| Command P95 wall time  | 2160 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1789               |
| CPU samples            | 1789               |
| Max peak RSS           | 329.4 MB           |
| Max RSS delta          | 301 MB             |
| Max CPU estimate       | 2370 ms            |
| Max harness heap delta | 7 MB               |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 66         |
| hookNames              | 39         |
| apiRegistrars          | 55         |
| capturedRegistrars     | 30         |
| sdkExports             | 317        |
| manifestFields         | 42         |
| manifestContractFields | 20         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 60    |
| sourceFiles           | 1870  |
| observedHooks         | 107   |
| observedRegistrations | 206   |
| observedSdkImports    | 1248  |
| contractProbes        | 279   |
| issueFindings         | 290   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 35 ms       | 36 ms    | 30.6 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 1941 ms     | 1956 ms  | 315.4 MB     | 286.7 MB      | 2142 ms      | 6.9 MB     | 231/231         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2096 ms     | 2112 ms  | 326.6 MB     | 296.8 MB      | 2297 ms      | 7 MB       | 249/249         | 0          |
| contract-capture       | Contract capture inventory                      | 2104 ms     | 2124 ms  | 329.4 MB     | 301 MB        | 2300 ms      | 0 MB       | 248/248         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2131 ms     | 2131 ms  | 326 MB       | 297.6 MB      | 2342 ms      | 1 MB       | 253/253         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2090 ms     | 2099 ms  | 324 MB       | 294.7 MB      | 2280 ms      | 2.4 MB     | 249/249         | 0          |
| workspace-plan         | Workspace execution plan                        | 2116 ms     | 2118 ms  | 325.5 MB     | 297 MB        | 2290 ms      | 1 MB       | 252/252         | 0          |
| platform-probes        | Platform and loader probes                      | 2160 ms     | 2176 ms  | 324.7 MB     | 296.3 MB      | 2370 ms      | 1.2 MB     | 256/256         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 411 ms      | 424 ms   | 60.6 MB      | 31.7 MB       | 196 ms       | 1.4 MB     | 48/48           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 35 ms    | 36 ms    | 30.6 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 1941 ms  | 1956 ms  | 315.4 MB     | 2142 ms      | 231/231         | fixture-inspection     |
| target-registry  | 1        | 2096 ms  | 2112 ms  | 326.6 MB     | 2297 ms      | 249/249         | compat-report-registry |
| contract-capture | 1        | 2104 ms  | 2124 ms  | 329.4 MB     | 2300 ms      | 248/248         | contract-capture       |
| synthetic-probes | 1        | 2131 ms  | 2131 ms  | 326 MB       | 2342 ms      | 253/253         | synthetic-probe-plan   |
| cold-import      | 1        | 2090 ms  | 2099 ms  | 324 MB       | 2280 ms      | 249/249         | cold-import-readiness  |
| workspace-plan   | 1        | 2116 ms  | 2118 ms  | 325.5 MB     | 2290 ms      | 252/252         | workspace-plan         |
| platform-probes  | 1        | 2160 ms  | 2176 ms  | 324.7 MB     | 2370 ms      | 256/256         | platform-probes        |
| import-loop      | 1        | 411 ms   | 424 ms   | 60.6 MB      | 196 ms       | 48/48           | import-loop-profile    |
