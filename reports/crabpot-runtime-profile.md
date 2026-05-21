# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2329 ms            |
| Command P95 wall time  | 2378 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1978               |
| CPU samples            | 1978               |
| Max peak RSS           | 473.2 MB           |
| Max RSS delta          | 444.2 MB           |
| Max CPU estimate       | 2649 ms            |
| Max harness heap delta | 7.8 MB             |

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
| sourceFiles           | 1759  |
| observedHooks         | 106   |
| observedRegistrations | 199   |
| observedSdkImports    | 1207  |
| contractProbes        | 276   |
| issueFindings         | 280   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 38 ms       | 38 ms    | 31.7 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2210 ms     | 2288 ms  | 450.9 MB     | 420.9 MB      | 2480 ms      | 7.8 MB     | 262/262         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2318 ms     | 2320 ms  | 451.6 MB     | 420.4 MB      | 2543 ms      | 7.4 MB     | 274/274         | 0          |
| contract-capture       | Contract capture inventory                      | 2361 ms     | 2365 ms  | 452.4 MB     | 423.8 MB      | 2599 ms      | 7.5 MB     | 276/276         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2329 ms     | 2356 ms  | 473.2 MB     | 444.2 MB      | 2544 ms      | 1.3 MB     | 278/278         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2332 ms     | 2332 ms  | 459 MB       | 430.4 MB      | 2548 ms      | 0 MB       | 276/276         | 0          |
| workspace-plan         | Workspace execution plan                        | 2343 ms     | 2366 ms  | 460.9 MB     | 432.3 MB      | 2581 ms      | 1.6 MB     | 280/280         | 0          |
| platform-probes        | Platform and loader probes                      | 2378 ms     | 2410 ms  | 461.1 MB     | 432.5 MB      | 2649 ms      | 1.7 MB     | 284/284         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 380 ms      | 383 ms   | 60.3 MB      | 31.8 MB       | 180 ms       | 1.3 MB     | 45/45           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 38 ms    | 38 ms    | 31.7 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2210 ms  | 2288 ms  | 450.9 MB     | 2480 ms      | 262/262         | fixture-inspection     |
| target-registry  | 1        | 2318 ms  | 2320 ms  | 451.6 MB     | 2543 ms      | 274/274         | compat-report-registry |
| contract-capture | 1        | 2361 ms  | 2365 ms  | 452.4 MB     | 2599 ms      | 276/276         | contract-capture       |
| synthetic-probes | 1        | 2329 ms  | 2356 ms  | 473.2 MB     | 2544 ms      | 278/278         | synthetic-probe-plan   |
| cold-import      | 1        | 2332 ms  | 2332 ms  | 459 MB       | 2548 ms      | 276/276         | cold-import-readiness  |
| workspace-plan   | 1        | 2343 ms  | 2366 ms  | 460.9 MB     | 2581 ms      | 280/280         | workspace-plan         |
| platform-probes  | 1        | 2378 ms  | 2410 ms  | 461.1 MB     | 2649 ms      | 284/284         | platform-probes        |
| import-loop      | 1        | 380 ms   | 383 ms   | 60.3 MB      | 180 ms       | 45/45           | import-loop-profile    |
