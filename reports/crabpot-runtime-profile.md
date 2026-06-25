# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2533 ms            |
| Command P95 wall time  | 2566 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 2152               |
| CPU samples            | 2152               |
| Max peak RSS           | 343.9 MB           |
| Max RSS delta          | 315.7 MB           |
| Max CPU estimate       | 2927 ms            |
| Max harness heap delta | 8.1 MB             |

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
| node-boot              | Node boot                                       | 36 ms       | 36 ms    | 29.6 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2410 ms     | 2413 ms  | 333.8 MB     | 305.6 MB      | 2722 ms      | 8.1 MB     | 286/286         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2533 ms     | 2538 ms  | 330.2 MB     | 301.4 MB      | 2834 ms      | -0.9 MB    | 299/299         | 0          |
| contract-capture       | Contract capture inventory                      | 2552 ms     | 2554 ms  | 330.3 MB     | 302.1 MB      | 2822 ms      | 0.9 MB     | 302/302         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2523 ms     | 2529 ms  | 336.9 MB     | 308 MB        | 2815 ms      | 0.7 MB     | 300/300         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2541 ms     | 2552 ms  | 341.1 MB     | 312.8 MB      | 2845 ms      | 2.3 MB     | 302/302         | 0          |
| workspace-plan         | Workspace execution plan                        | 2566 ms     | 2604 ms  | 343.9 MB     | 315.7 MB      | 2927 ms      | 2.5 MB     | 307/307         | 0          |
| platform-probes        | Platform and loader probes                      | 2565 ms     | 2566 ms  | 338.2 MB     | 310 MB        | 2832 ms      | 1.4 MB     | 305/305         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 409 ms      | 419 ms   | 60.6 MB      | 32.3 MB       | 190 ms       | 1.5 MB     | 48/48           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 36 ms    | 36 ms    | 29.6 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2410 ms  | 2413 ms  | 333.8 MB     | 2722 ms      | 286/286         | fixture-inspection     |
| target-registry  | 1        | 2533 ms  | 2538 ms  | 330.2 MB     | 2834 ms      | 299/299         | compat-report-registry |
| contract-capture | 1        | 2552 ms  | 2554 ms  | 330.3 MB     | 2822 ms      | 302/302         | contract-capture       |
| synthetic-probes | 1        | 2523 ms  | 2529 ms  | 336.9 MB     | 2815 ms      | 300/300         | synthetic-probe-plan   |
| cold-import      | 1        | 2541 ms  | 2552 ms  | 341.1 MB     | 2845 ms      | 302/302         | cold-import-readiness  |
| workspace-plan   | 1        | 2566 ms  | 2604 ms  | 343.9 MB     | 2927 ms      | 307/307         | workspace-plan         |
| platform-probes  | 1        | 2565 ms  | 2566 ms  | 338.2 MB     | 2832 ms      | 305/305         | platform-probes        |
| import-loop      | 1        | 409 ms   | 419 ms   | 60.6 MB      | 190 ms       | 48/48           | import-loop-profile    |
