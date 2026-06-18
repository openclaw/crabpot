# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2528 ms            |
| Command P95 wall time  | 2603 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 2182               |
| CPU samples            | 2182               |
| Max peak RSS           | 342.3 MB           |
| Max RSS delta          | 312.6 MB           |
| Max CPU estimate       | 2996 ms            |
| Max harness heap delta | 8.7 MB             |

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
| sourceFiles           | 1996  |
| observedHooks         | 108   |
| observedRegistrations | 206   |
| observedSdkImports    | 1256  |
| contractProbes        | 280   |
| issueFindings         | 291   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 33 ms       | 33 ms    | 31.1 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2416 ms     | 2661 ms  | 328.9 MB     | 299.1 MB      | 2996 ms      | 8.7 MB     | 296/296         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2528 ms     | 2539 ms  | 328.9 MB     | 300.5 MB      | 2849 ms      | 8.3 MB     | 300/300         | 0          |
| contract-capture       | Contract capture inventory                      | 2526 ms     | 2541 ms  | 330.5 MB     | 302.1 MB      | 2819 ms      | 0.6 MB     | 302/302         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2581 ms     | 2601 ms  | 334.8 MB     | 306.4 MB      | 2898 ms      | 0.9 MB     | 307/307         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2540 ms     | 2541 ms  | 341.1 MB     | 312.6 MB      | 2864 ms      | 2.2 MB     | 303/303         | 0          |
| workspace-plan         | Workspace execution plan                        | 2602 ms     | 2606 ms  | 342.3 MB     | 312.4 MB      | 2950 ms      | 2.5 MB     | 310/310         | 0          |
| platform-probes        | Platform and loader probes                      | 2603 ms     | 2641 ms  | 339 MB       | 310.6 MB      | 2897 ms      | 2.5 MB     | 311/311         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 444 ms      | 445 ms   | 60.6 MB      | 32.2 MB       | 199 ms       | 1.6 MB     | 50/50           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 33 ms    | 33 ms    | 31.1 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2416 ms  | 2661 ms  | 328.9 MB     | 2996 ms      | 296/296         | fixture-inspection     |
| target-registry  | 1        | 2528 ms  | 2539 ms  | 328.9 MB     | 2849 ms      | 300/300         | compat-report-registry |
| contract-capture | 1        | 2526 ms  | 2541 ms  | 330.5 MB     | 2819 ms      | 302/302         | contract-capture       |
| synthetic-probes | 1        | 2581 ms  | 2601 ms  | 334.8 MB     | 2898 ms      | 307/307         | synthetic-probe-plan   |
| cold-import      | 1        | 2540 ms  | 2541 ms  | 341.1 MB     | 2864 ms      | 303/303         | cold-import-readiness  |
| workspace-plan   | 1        | 2602 ms  | 2606 ms  | 342.3 MB     | 2950 ms      | 310/310         | workspace-plan         |
| platform-probes  | 1        | 2603 ms  | 2641 ms  | 339 MB       | 2897 ms      | 311/311         | platform-probes        |
| import-loop      | 1        | 444 ms   | 445 ms   | 60.6 MB      | 199 ms       | 50/50           | import-loop-profile    |
