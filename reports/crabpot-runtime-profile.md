# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2328 ms            |
| Command P95 wall time  | 2378 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1982               |
| CPU samples            | 1982               |
| Max peak RSS           | 472.4 MB           |
| Max RSS delta          | 443.9 MB           |
| Max CPU estimate       | 2638 ms            |
| Max harness heap delta | 7.6 MB             |

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
| sourceFiles           | 1758  |
| observedHooks         | 106   |
| observedRegistrations | 199   |
| observedSdkImports    | 1206  |
| contractProbes        | 276   |
| issueFindings         | 280   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 37 ms       | 37 ms    | 31 MB        | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2198 ms     | 2238 ms  | 462.3 MB     | 433.8 MB      | 2448 ms      | 7.4 MB     | 261/261         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2342 ms     | 2392 ms  | 447.1 MB     | 417.7 MB      | 2595 ms      | 7.5 MB     | 278/278         | 0          |
| contract-capture       | Contract capture inventory                      | 2360 ms     | 2371 ms  | 448.4 MB     | 419.1 MB      | 2563 ms      | 7.6 MB     | 275/275         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2328 ms     | 2378 ms  | 447.8 MB     | 419.3 MB      | 2585 ms      | 0.6 MB     | 278/278         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2305 ms     | 2383 ms  | 472.4 MB     | 443.9 MB      | 2600 ms      | 0 MB       | 278/278         | 0          |
| workspace-plan         | Workspace execution plan                        | 2366 ms     | 2385 ms  | 455.8 MB     | 427.3 MB      | 2638 ms      | 1.6 MB     | 282/282         | 0          |
| platform-probes        | Platform and loader probes                      | 2378 ms     | 2382 ms  | 457.5 MB     | 428.9 MB      | 2592 ms      | 1.5 MB     | 282/282         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 383 ms      | 383 ms   | 60.4 MB      | 31.9 MB       | 179 ms       | 1.3 MB     | 45/45           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 37 ms    | 37 ms    | 31 MB        | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2198 ms  | 2238 ms  | 462.3 MB     | 2448 ms      | 261/261         | fixture-inspection     |
| target-registry  | 1        | 2342 ms  | 2392 ms  | 447.1 MB     | 2595 ms      | 278/278         | compat-report-registry |
| contract-capture | 1        | 2360 ms  | 2371 ms  | 448.4 MB     | 2563 ms      | 275/275         | contract-capture       |
| synthetic-probes | 1        | 2328 ms  | 2378 ms  | 447.8 MB     | 2585 ms      | 278/278         | synthetic-probe-plan   |
| cold-import      | 1        | 2305 ms  | 2383 ms  | 472.4 MB     | 2600 ms      | 278/278         | cold-import-readiness  |
| workspace-plan   | 1        | 2366 ms  | 2385 ms  | 455.8 MB     | 2638 ms      | 282/282         | workspace-plan         |
| platform-probes  | 1        | 2378 ms  | 2382 ms  | 457.5 MB     | 2592 ms      | 282/282         | platform-probes        |
| import-loop      | 1        | 383 ms   | 383 ms   | 60.4 MB      | 179 ms       | 45/45           | import-loop-profile    |
