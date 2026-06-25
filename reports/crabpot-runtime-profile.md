# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2557 ms            |
| Command P95 wall time  | 2657 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 2190               |
| CPU samples            | 2190               |
| Max peak RSS           | 343.9 MB           |
| Max RSS delta          | 315.6 MB           |
| Max CPU estimate       | 2964 ms            |
| Max harness heap delta | 8.2 MB             |

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
| sourceFiles           | 1990  |
| observedHooks         | 108   |
| observedRegistrations | 207   |
| observedSdkImports    | 1261  |
| contractProbes        | 280   |
| issueFindings         | 291   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 32 ms       | 35 ms    | 30.1 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2421 ms     | 2441 ms  | 335.2 MB     | 306.4 MB      | 2746 ms      | 8.2 MB     | 288/288         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2563 ms     | 2565 ms  | 329.5 MB     | 301.1 MB      | 2847 ms      | -1.5 MB    | 304/304         | 0          |
| contract-capture       | Contract capture inventory                      | 2557 ms     | 2574 ms  | 333.8 MB     | 305.4 MB      | 2839 ms      | 1 MB       | 305/305         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2590 ms     | 2601 ms  | 334.8 MB     | 306.4 MB      | 2890 ms      | 1.1 MB     | 309/309         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2552 ms     | 2576 ms  | 335.5 MB     | 307.1 MB      | 2893 ms      | 2.2 MB     | 305/305         | 0          |
| workspace-plan         | Workspace execution plan                        | 2612 ms     | 2617 ms  | 343.9 MB     | 315.6 MB      | 2949 ms      | 2.4 MB     | 312/312         | 0          |
| platform-probes        | Platform and loader probes                      | 2657 ms     | 2680 ms  | 337.7 MB     | 309.2 MB      | 2964 ms      | 2.4 MB     | 316/316         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 406 ms      | 409 ms   | 60.6 MB      | 32.2 MB       | 199 ms       | 1.4 MB     | 48/48           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 32 ms    | 35 ms    | 30.1 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2421 ms  | 2441 ms  | 335.2 MB     | 2746 ms      | 288/288         | fixture-inspection     |
| target-registry  | 1        | 2563 ms  | 2565 ms  | 329.5 MB     | 2847 ms      | 304/304         | compat-report-registry |
| contract-capture | 1        | 2557 ms  | 2574 ms  | 333.8 MB     | 2839 ms      | 305/305         | contract-capture       |
| synthetic-probes | 1        | 2590 ms  | 2601 ms  | 334.8 MB     | 2890 ms      | 309/309         | synthetic-probe-plan   |
| cold-import      | 1        | 2552 ms  | 2576 ms  | 335.5 MB     | 2893 ms      | 305/305         | cold-import-readiness  |
| workspace-plan   | 1        | 2612 ms  | 2617 ms  | 343.9 MB     | 2949 ms      | 312/312         | workspace-plan         |
| platform-probes  | 1        | 2657 ms  | 2680 ms  | 337.7 MB     | 2964 ms      | 316/316         | platform-probes        |
| import-loop      | 1        | 406 ms   | 409 ms   | 60.6 MB      | 199 ms       | 48/48           | import-loop-profile    |
