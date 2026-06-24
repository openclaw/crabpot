# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2514 ms            |
| Command P95 wall time  | 2555 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 2140               |
| CPU samples            | 2140               |
| Max peak RSS           | 341.9 MB           |
| Max RSS delta          | 313.5 MB           |
| Max CPU estimate       | 2874 ms            |
| Max harness heap delta | 8 MB               |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 68         |
| hookNames              | 39         |
| apiRegistrars          | 55         |
| capturedRegistrars     | 30         |
| sdkExports             | 321        |
| manifestFields         | 42         |
| manifestContractFields | 21         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 60    |
| sourceFiles           | 1989  |
| observedHooks         | 108   |
| observedRegistrations | 207   |
| observedSdkImports    | 1261  |
| contractProbes        | 280   |
| issueFindings         | 291   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 35 ms       | 36 ms    | 30.8 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2387 ms     | 2410 ms  | 333.2 MB     | 303 MB        | 2697 ms      | 8 MB       | 285/285         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2523 ms     | 2528 ms  | 333.7 MB     | 304.5 MB      | 2838 ms      | -0.9 MB    | 298/298         | 0          |
| contract-capture       | Contract capture inventory                      | 2513 ms     | 2516 ms  | 330.7 MB     | 302.2 MB      | 2835 ms      | 0.7 MB     | 299/299         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2525 ms     | 2526 ms  | 334.6 MB     | 306.2 MB      | 2788 ms      | 0.8 MB     | 300/300         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2514 ms     | 2525 ms  | 339.1 MB     | 310.3 MB      | 2815 ms      | 2.1 MB     | 299/299         | 0          |
| workspace-plan         | Workspace execution plan                        | 2555 ms     | 2565 ms  | 341.9 MB     | 313.5 MB      | 2874 ms      | 2.3 MB     | 304/304         | 0          |
| platform-probes        | Platform and loader probes                      | 2551 ms     | 2551 ms  | 338 MB       | 309.6 MB      | 2811 ms      | 1.4 MB     | 304/304         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 404 ms      | 404 ms   | 60.7 MB      | 32.2 MB       | 197 ms       | 1.5 MB     | 48/48           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 35 ms    | 36 ms    | 30.8 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2387 ms  | 2410 ms  | 333.2 MB     | 2697 ms      | 285/285         | fixture-inspection     |
| target-registry  | 1        | 2523 ms  | 2528 ms  | 333.7 MB     | 2838 ms      | 298/298         | compat-report-registry |
| contract-capture | 1        | 2513 ms  | 2516 ms  | 330.7 MB     | 2835 ms      | 299/299         | contract-capture       |
| synthetic-probes | 1        | 2525 ms  | 2526 ms  | 334.6 MB     | 2788 ms      | 300/300         | synthetic-probe-plan   |
| cold-import      | 1        | 2514 ms  | 2525 ms  | 339.1 MB     | 2815 ms      | 299/299         | cold-import-readiness  |
| workspace-plan   | 1        | 2555 ms  | 2565 ms  | 341.9 MB     | 2874 ms      | 304/304         | workspace-plan         |
| platform-probes  | 1        | 2551 ms  | 2551 ms  | 338 MB       | 2811 ms      | 304/304         | platform-probes        |
| import-loop      | 1        | 404 ms   | 404 ms   | 60.7 MB      | 197 ms       | 48/48           | import-loop-profile    |
