# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2311 ms            |
| Command P95 wall time  | 2426 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1981               |
| CPU samples            | 1981               |
| Max peak RSS           | 471.5 MB           |
| Max RSS delta          | 440.5 MB           |
| Max CPU estimate       | 2609 ms            |
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
| sourceFiles           | 1757  |
| observedHooks         | 106   |
| observedRegistrations | 199   |
| observedSdkImports    | 1206  |
| contractProbes        | 276   |
| issueFindings         | 280   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 41 ms       | 44 ms    | 30.4 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2209 ms     | 2255 ms  | 445.8 MB     | 415.5 MB      | 2485 ms      | 7.6 MB     | 262/262         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2358 ms     | 2358 ms  | 448 MB       | 418.4 MB      | 2589 ms      | 7.6 MB     | 278/278         | 0          |
| contract-capture       | Contract capture inventory                      | 2314 ms     | 2362 ms  | 471.5 MB     | 440.5 MB      | 2579 ms      | 7.4 MB     | 273/273         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2299 ms     | 2330 ms  | 447.3 MB     | 418.8 MB      | 2547 ms      | 1.3 MB     | 274/274         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2311 ms     | 2341 ms  | 454.1 MB     | 425.3 MB      | 2591 ms      | 1.5 MB     | 276/276         | 0          |
| workspace-plan         | Workspace execution plan                        | 2364 ms     | 2388 ms  | 455.5 MB     | 426.7 MB      | 2609 ms      | 1.7 MB     | 283/283         | 0          |
| platform-probes        | Platform and loader probes                      | 2426 ms     | 2429 ms  | 455.7 MB     | 427.2 MB      | 2609 ms      | 1.8 MB     | 287/287         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 380 ms      | 393 ms   | 60.3 MB      | 31.8 MB       | 189 ms       | 1.4 MB     | 45/45           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 41 ms    | 44 ms    | 30.4 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2209 ms  | 2255 ms  | 445.8 MB     | 2485 ms      | 262/262         | fixture-inspection     |
| target-registry  | 1        | 2358 ms  | 2358 ms  | 448 MB       | 2589 ms      | 278/278         | compat-report-registry |
| contract-capture | 1        | 2314 ms  | 2362 ms  | 471.5 MB     | 2579 ms      | 273/273         | contract-capture       |
| synthetic-probes | 1        | 2299 ms  | 2330 ms  | 447.3 MB     | 2547 ms      | 274/274         | synthetic-probe-plan   |
| cold-import      | 1        | 2311 ms  | 2341 ms  | 454.1 MB     | 2591 ms      | 276/276         | cold-import-readiness  |
| workspace-plan   | 1        | 2364 ms  | 2388 ms  | 455.5 MB     | 2609 ms      | 283/283         | workspace-plan         |
| platform-probes  | 1        | 2426 ms  | 2429 ms  | 455.7 MB     | 2609 ms      | 287/287         | platform-probes        |
| import-loop      | 1        | 380 ms   | 393 ms   | 60.3 MB      | 189 ms       | 45/45           | import-loop-profile    |
