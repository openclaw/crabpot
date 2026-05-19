# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2372 ms            |
| Command P95 wall time  | 2414 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 2008               |
| CPU samples            | 2008               |
| Max peak RSS           | 470.7 MB           |
| Max RSS delta          | 440.2 MB           |
| Max CPU estimate       | 2662 ms            |
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
| sourceFiles           | 1755  |
| observedHooks         | 106   |
| observedRegistrations | 198   |
| observedSdkImports    | 1203  |
| contractProbes        | 277   |
| issueFindings         | 281   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 36 ms       | 39 ms    | 31.2 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2243 ms     | 2286 ms  | 446.4 MB     | 416.5 MB      | 2496 ms      | 7.4 MB     | 266/266         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2372 ms     | 2391 ms  | 447.2 MB     | 417.4 MB      | 2621 ms      | 7.6 MB     | 280/280         | 0          |
| contract-capture       | Contract capture inventory                      | 2377 ms     | 2385 ms  | 470.7 MB     | 440.2 MB      | 2612 ms      | 7.6 MB     | 277/277         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2384 ms     | 2433 ms  | 447.8 MB     | 419.2 MB      | 2654 ms      | 0.9 MB     | 284/284         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2332 ms     | 2344 ms  | 453.2 MB     | 423.6 MB      | 2554 ms      | 1.4 MB     | 278/278         | 0          |
| workspace-plan         | Workspace execution plan                        | 2411 ms     | 2414 ms  | 455.6 MB     | 427 MB        | 2662 ms      | 1.8 MB     | 287/287         | 0          |
| platform-probes        | Platform and loader probes                      | 2414 ms     | 2430 ms  | 456.8 MB     | 427.9 MB      | 2639 ms      | 1.8 MB     | 287/287         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 382 ms      | 399 ms   | 60.4 MB      | 31.8 MB       | 191 ms       | 1.3 MB     | 46/46           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 36 ms    | 39 ms    | 31.2 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2243 ms  | 2286 ms  | 446.4 MB     | 2496 ms      | 266/266         | fixture-inspection     |
| target-registry  | 1        | 2372 ms  | 2391 ms  | 447.2 MB     | 2621 ms      | 280/280         | compat-report-registry |
| contract-capture | 1        | 2377 ms  | 2385 ms  | 470.7 MB     | 2612 ms      | 277/277         | contract-capture       |
| synthetic-probes | 1        | 2384 ms  | 2433 ms  | 447.8 MB     | 2654 ms      | 284/284         | synthetic-probe-plan   |
| cold-import      | 1        | 2332 ms  | 2344 ms  | 453.2 MB     | 2554 ms      | 278/278         | cold-import-readiness  |
| workspace-plan   | 1        | 2411 ms  | 2414 ms  | 455.6 MB     | 2662 ms      | 287/287         | workspace-plan         |
| platform-probes  | 1        | 2414 ms  | 2430 ms  | 456.8 MB     | 2639 ms      | 287/287         | platform-probes        |
| import-loop      | 1        | 382 ms   | 399 ms   | 60.4 MB      | 191 ms       | 46/46           | import-loop-profile    |
