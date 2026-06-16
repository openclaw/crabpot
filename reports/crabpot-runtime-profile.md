# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2140 ms            |
| Command P95 wall time  | 2176 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1815               |
| CPU samples            | 1815               |
| Max peak RSS           | 332.6 MB           |
| Max RSS delta          | 304.2 MB           |
| Max CPU estimate       | 2351 ms            |
| Max harness heap delta | 7.2 MB             |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 66         |
| hookNames              | 39         |
| apiRegistrars          | 55         |
| capturedRegistrars     | 30         |
| sdkExports             | 318        |
| manifestFields         | 42         |
| manifestContractFields | 21         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 60    |
| sourceFiles           | 1994  |
| observedHooks         | 108   |
| observedRegistrations | 206   |
| observedSdkImports    | 1253  |
| contractProbes        | 280   |
| issueFindings         | 290   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 33 ms       | 37 ms    | 30.7 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 1985 ms     | 2001 ms  | 321.2 MB     | 290.9 MB      | 2182 ms      | 7.1 MB     | 236/236         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2140 ms     | 2154 ms  | 316.5 MB     | 287.6 MB      | 2333 ms      | 7.2 MB     | 254/254         | 0          |
| contract-capture       | Contract capture inventory                      | 2140 ms     | 2176 ms  | 322.4 MB     | 292.9 MB      | 2346 ms      | 0 MB       | 254/254         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2147 ms     | 2150 ms  | 322.8 MB     | 294.4 MB      | 2328 ms      | 1 MB       | 254/254         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2120 ms     | 2126 ms  | 324.5 MB     | 296.1 MB      | 2305 ms      | 0.9 MB     | 251/251         | 0          |
| workspace-plan         | Workspace execution plan                        | 2149 ms     | 2157 ms  | 330.6 MB     | 302.2 MB      | 2351 ms      | 1.2 MB     | 256/256         | 0          |
| platform-probes        | Platform and loader probes                      | 2176 ms     | 2189 ms  | 332.6 MB     | 304.2 MB      | 2336 ms      | 1.1 MB     | 259/259         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 401 ms      | 405 ms   | 60.6 MB      | 32.2 MB       | 184 ms       | 1.4 MB     | 48/48           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 33 ms    | 37 ms    | 30.7 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 1985 ms  | 2001 ms  | 321.2 MB     | 2182 ms      | 236/236         | fixture-inspection     |
| target-registry  | 1        | 2140 ms  | 2154 ms  | 316.5 MB     | 2333 ms      | 254/254         | compat-report-registry |
| contract-capture | 1        | 2140 ms  | 2176 ms  | 322.4 MB     | 2346 ms      | 254/254         | contract-capture       |
| synthetic-probes | 1        | 2147 ms  | 2150 ms  | 322.8 MB     | 2328 ms      | 254/254         | synthetic-probe-plan   |
| cold-import      | 1        | 2120 ms  | 2126 ms  | 324.5 MB     | 2305 ms      | 251/251         | cold-import-readiness  |
| workspace-plan   | 1        | 2149 ms  | 2157 ms  | 330.6 MB     | 2351 ms      | 256/256         | workspace-plan         |
| platform-probes  | 1        | 2176 ms  | 2189 ms  | 332.6 MB     | 2336 ms      | 259/259         | platform-probes        |
| import-loop      | 1        | 401 ms   | 405 ms   | 60.6 MB      | 184 ms       | 48/48           | import-loop-profile    |
