# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2533 ms            |
| Command P95 wall time  | 2587 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 2158               |
| CPU samples            | 2158               |
| Max peak RSS           | 342 MB             |
| Max RSS delta          | 313.6 MB           |
| Max CPU estimate       | 2936 ms            |
| Max harness heap delta | 8.9 MB             |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 67         |
| hookNames              | 39         |
| apiRegistrars          | 55         |
| capturedRegistrars     | 30         |
| sdkExports             | 319        |
| manifestFields         | 42         |
| manifestContractFields | 21         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 60    |
| sourceFiles           | 1994  |
| observedHooks         | 108   |
| observedRegistrations | 206   |
| observedSdkImports    | 1256  |
| contractProbes        | 280   |
| issueFindings         | 291   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 37 ms       | 37 ms    | 28.9 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2418 ms     | 2436 ms  | 330.7 MB     | 301.3 MB      | 2758 ms      | 8.9 MB     | 288/288         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2533 ms     | 2537 ms  | 330.9 MB     | 302.6 MB      | 2862 ms      | 8.3 MB     | 299/299         | 0          |
| contract-capture       | Contract capture inventory                      | 2529 ms     | 2534 ms  | 330.9 MB     | 302.4 MB      | 2830 ms      | 0.9 MB     | 300/300         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2534 ms     | 2535 ms  | 329.6 MB     | 300.9 MB      | 2849 ms      | 0.8 MB     | 303/303         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2541 ms     | 2556 ms  | 335.6 MB     | 307.2 MB      | 2852 ms      | 2.3 MB     | 302/302         | 0          |
| workspace-plan         | Workspace execution plan                        | 2581 ms     | 2605 ms  | 342 MB       | 313.6 MB      | 2936 ms      | 2.6 MB     | 306/306         | 0          |
| platform-probes        | Platform and loader probes                      | 2587 ms     | 2605 ms  | 337.2 MB     | 308.8 MB      | 2897 ms      | 2.5 MB     | 308/308         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 422 ms      | 446 ms   | 60.6 MB      | 32.2 MB       | 212 ms       | 1.6 MB     | 49/49           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 37 ms    | 37 ms    | 28.9 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2418 ms  | 2436 ms  | 330.7 MB     | 2758 ms      | 288/288         | fixture-inspection     |
| target-registry  | 1        | 2533 ms  | 2537 ms  | 330.9 MB     | 2862 ms      | 299/299         | compat-report-registry |
| contract-capture | 1        | 2529 ms  | 2534 ms  | 330.9 MB     | 2830 ms      | 300/300         | contract-capture       |
| synthetic-probes | 1        | 2534 ms  | 2535 ms  | 329.6 MB     | 2849 ms      | 303/303         | synthetic-probe-plan   |
| cold-import      | 1        | 2541 ms  | 2556 ms  | 335.6 MB     | 2852 ms      | 302/302         | cold-import-readiness  |
| workspace-plan   | 1        | 2581 ms  | 2605 ms  | 342 MB       | 2936 ms      | 306/306         | workspace-plan         |
| platform-probes  | 1        | 2587 ms  | 2605 ms  | 337.2 MB     | 2897 ms      | 308/308         | platform-probes        |
| import-loop      | 1        | 422 ms   | 446 ms   | 60.6 MB      | 212 ms       | 49/49           | import-loop-profile    |
