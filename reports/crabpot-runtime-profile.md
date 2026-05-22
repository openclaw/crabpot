# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2374 ms            |
| Command P95 wall time  | 2456 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 2022               |
| CPU samples            | 2022               |
| Max peak RSS           | 483.9 MB           |
| Max RSS delta          | 455.4 MB           |
| Max CPU estimate       | 2699 ms            |
| Max harness heap delta | 7.9 MB             |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 61         |
| hookNames              | 37         |
| apiRegistrars          | 53         |
| capturedRegistrars     | 28         |
| sdkExports             | 313        |
| manifestFields         | 41         |
| manifestContractFields | 18         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 60    |
| sourceFiles           | 1771  |
| observedHooks         | 106   |
| observedRegistrations | 199   |
| observedSdkImports    | 1210  |
| contractProbes        | 274   |
| issueFindings         | 278   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 36 ms       | 38 ms    | 31.4 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2318 ms     | 2335 ms  | 468.7 MB     | 440.1 MB      | 2554 ms      | 7.6 MB     | 272/272         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2391 ms     | 2465 ms  | 470.8 MB     | 442.2 MB      | 2689 ms      | 7.9 MB     | 284/284         | 0          |
| contract-capture       | Contract capture inventory                      | 2374 ms     | 2376 ms  | 471 MB       | 440.6 MB      | 2592 ms      | 7.7 MB     | 276/276         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2396 ms     | 2401 ms  | 470.5 MB     | 442 MB        | 2628 ms      | 0 MB       | 283/283         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2362 ms     | 2391 ms  | 474.7 MB     | 446.2 MB      | 2668 ms      | 1.5 MB     | 282/282         | 0          |
| workspace-plan         | Workspace execution plan                        | 2409 ms     | 2416 ms  | 478.9 MB     | 450.3 MB      | 2662 ms      | 1.7 MB     | 287/287         | 0          |
| platform-probes        | Platform and loader probes                      | 2456 ms     | 2457 ms  | 483.9 MB     | 455.4 MB      | 2699 ms      | 1.8 MB     | 290/290         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 380 ms      | 386 ms   | 60.4 MB      | 31.8 MB       | 184 ms       | 1.3 MB     | 45/45           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 36 ms    | 38 ms    | 31.4 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2318 ms  | 2335 ms  | 468.7 MB     | 2554 ms      | 272/272         | fixture-inspection     |
| target-registry  | 1        | 2391 ms  | 2465 ms  | 470.8 MB     | 2689 ms      | 284/284         | compat-report-registry |
| contract-capture | 1        | 2374 ms  | 2376 ms  | 471 MB       | 2592 ms      | 276/276         | contract-capture       |
| synthetic-probes | 1        | 2396 ms  | 2401 ms  | 470.5 MB     | 2628 ms      | 283/283         | synthetic-probe-plan   |
| cold-import      | 1        | 2362 ms  | 2391 ms  | 474.7 MB     | 2668 ms      | 282/282         | cold-import-readiness  |
| workspace-plan   | 1        | 2409 ms  | 2416 ms  | 478.9 MB     | 2662 ms      | 287/287         | workspace-plan         |
| platform-probes  | 1        | 2456 ms  | 2457 ms  | 483.9 MB     | 2699 ms      | 290/290         | platform-probes        |
| import-loop      | 1        | 380 ms   | 386 ms   | 60.4 MB      | 184 ms       | 45/45           | import-loop-profile    |
