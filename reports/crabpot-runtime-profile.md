# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2338 ms            |
| Command P95 wall time  | 2428 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1999               |
| CPU samples            | 1999               |
| Max peak RSS           | 466.2 MB           |
| Max RSS delta          | 437.7 MB           |
| Max CPU estimate       | 2672 ms            |
| Max harness heap delta | 7.7 MB             |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 61         |
| hookNames              | 37         |
| apiRegistrars          | 53         |
| capturedRegistrars     | 28         |
| sdkExports             | 312        |
| manifestFields         | 41         |
| manifestContractFields | 18         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 60    |
| sourceFiles           | 1750  |
| observedHooks         | 106   |
| observedRegistrations | 198   |
| observedSdkImports    | 1202  |
| contractProbes        | 278   |
| issueFindings         | 282   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 39 ms       | 41 ms    | 31.1 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2241 ms     | 2261 ms  | 447.2 MB     | 416.4 MB      | 2474 ms      | 7.5 MB     | 264/264         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2338 ms     | 2370 ms  | 447.6 MB     | 417.5 MB      | 2572 ms      | 7.4 MB     | 277/277         | 0          |
| contract-capture       | Contract capture inventory                      | 2399 ms     | 2420 ms  | 447.5 MB     | 417.5 MB      | 2672 ms      | 7.7 MB     | 279/279         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2364 ms     | 2400 ms  | 448.5 MB     | 419.9 MB      | 2623 ms      | 0.6 MB     | 279/279         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2334 ms     | 2337 ms  | 455.2 MB     | 426.6 MB      | 2588 ms      | 1.4 MB     | 276/276         | 0          |
| workspace-plan         | Workspace execution plan                        | 2406 ms     | 2408 ms  | 466.2 MB     | 437.7 MB      | 2666 ms      | 1.7 MB     | 285/285         | 0          |
| platform-probes        | Platform and loader probes                      | 2428 ms     | 2445 ms  | 455.4 MB     | 426.8 MB      | 2663 ms      | 1.8 MB     | 288/288         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 407 ms      | 407 ms   | 60.3 MB      | 31.8 MB       | 202 ms       | 1.4 MB     | 48/48           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 39 ms    | 41 ms    | 31.1 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2241 ms  | 2261 ms  | 447.2 MB     | 2474 ms      | 264/264         | fixture-inspection     |
| target-registry  | 1        | 2338 ms  | 2370 ms  | 447.6 MB     | 2572 ms      | 277/277         | compat-report-registry |
| contract-capture | 1        | 2399 ms  | 2420 ms  | 447.5 MB     | 2672 ms      | 279/279         | contract-capture       |
| synthetic-probes | 1        | 2364 ms  | 2400 ms  | 448.5 MB     | 2623 ms      | 279/279         | synthetic-probe-plan   |
| cold-import      | 1        | 2334 ms  | 2337 ms  | 455.2 MB     | 2588 ms      | 276/276         | cold-import-readiness  |
| workspace-plan   | 1        | 2406 ms  | 2408 ms  | 466.2 MB     | 2666 ms      | 285/285         | workspace-plan         |
| platform-probes  | 1        | 2428 ms  | 2445 ms  | 455.4 MB     | 2663 ms      | 288/288         | platform-probes        |
| import-loop      | 1        | 407 ms   | 407 ms   | 60.3 MB      | 202 ms       | 48/48           | import-loop-profile    |
