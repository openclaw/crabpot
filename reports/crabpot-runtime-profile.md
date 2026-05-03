# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2454 ms            |
| Command P95 wall time  | 2500 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 2087               |
| CPU samples            | 2087               |
| Max peak RSS           | 443.2 MB           |
| Max RSS delta          | 411.8 MB           |
| Max CPU estimate       | 2749 ms            |
| Max harness heap delta | 8.3 MB             |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 60         |
| hookNames              | 35         |
| apiRegistrars          | 49         |
| capturedRegistrars     | 26         |
| sdkExports             | 294        |
| manifestFields         | 39         |
| manifestContractFields | 17         |

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
| node-boot              | Node boot                                       | 35 ms       | 39 ms    | 31.8 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2375 ms     | 2384 ms  | 430 MB       | 398.8 MB      | 2605 ms      | 8.3 MB     | 278/278         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2500 ms     | 2520 ms  | 431.7 MB     | 400.4 MB      | 2749 ms      | 8.1 MB     | 297/297         | 0          |
| contract-capture       | Contract capture inventory                      | 2460 ms     | 2472 ms  | 443.2 MB     | 411.8 MB      | 2681 ms      | 7.9 MB     | 289/289         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2454 ms     | 2475 ms  | 430.7 MB     | 402 MB        | 2688 ms      | 0.6 MB     | 293/293         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2445 ms     | 2452 ms  | 431.9 MB     | 402.7 MB      | 2717 ms      | 0.6 MB     | 292/292         | 0          |
| workspace-plan         | Workspace execution plan                        | 2458 ms     | 2514 ms  | 439.3 MB     | 410.6 MB      | 2748 ms      | 1.9 MB     | 296/296         | 0          |
| platform-probes        | Platform and loader probes                      | 2475 ms     | 2508 ms  | 438.8 MB     | 410.1 MB      | 2732 ms      | 1.9 MB     | 294/294         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 378 ms      | 380 ms   | 60.5 MB      | 31.8 MB       | 184 ms       | 1.3 MB     | 45/45           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 35 ms    | 39 ms    | 31.8 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2375 ms  | 2384 ms  | 430 MB       | 2605 ms      | 278/278         | fixture-inspection     |
| target-registry  | 1        | 2500 ms  | 2520 ms  | 431.7 MB     | 2749 ms      | 297/297         | compat-report-registry |
| contract-capture | 1        | 2460 ms  | 2472 ms  | 443.2 MB     | 2681 ms      | 289/289         | contract-capture       |
| synthetic-probes | 1        | 2454 ms  | 2475 ms  | 430.7 MB     | 2688 ms      | 293/293         | synthetic-probe-plan   |
| cold-import      | 1        | 2445 ms  | 2452 ms  | 431.9 MB     | 2717 ms      | 292/292         | cold-import-readiness  |
| workspace-plan   | 1        | 2458 ms  | 2514 ms  | 439.3 MB     | 2748 ms      | 296/296         | workspace-plan         |
| platform-probes  | 1        | 2475 ms  | 2508 ms  | 438.8 MB     | 2732 ms      | 294/294         | platform-probes        |
| import-loop      | 1        | 378 ms   | 380 ms   | 60.5 MB      | 184 ms       | 45/45           | import-loop-profile    |
