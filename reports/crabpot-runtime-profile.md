# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2358 ms            |
| Command P95 wall time  | 2421 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1998               |
| CPU samples            | 1998               |
| Max peak RSS           | 465.1 MB           |
| Max RSS delta          | 436.6 MB           |
| Max CPU estimate       | 2668 ms            |
| Max harness heap delta | 7.7 MB             |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 60         |
| hookNames              | 36         |
| apiRegistrars          | 53         |
| capturedRegistrars     | 28         |
| sdkExports             | 307        |
| manifestFields         | 41         |
| manifestContractFields | 17         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 60    |
| sourceFiles           | 1774  |
| observedHooks         | 106   |
| observedRegistrations | 198   |
| observedSdkImports    | 1196  |
| contractProbes        | 278   |
| issueFindings         | 283   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 38 ms       | 39 ms    | 31.1 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2238 ms     | 2261 ms  | 447.1 MB     | 417.1 MB      | 2491 ms      | 7.6 MB     | 264/264         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2370 ms     | 2387 ms  | 460.6 MB     | 430.9 MB      | 2609 ms      | 7.7 MB     | 279/279         | 0          |
| contract-capture       | Contract capture inventory                      | 2377 ms     | 2396 ms  | 462.7 MB     | 434.1 MB      | 2612 ms      | 7.6 MB     | 276/276         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2358 ms     | 2361 ms  | 447.7 MB     | 418.6 MB      | 2573 ms      | 0.7 MB     | 280/280         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2333 ms     | 2362 ms  | 465.1 MB     | 436.6 MB      | 2603 ms      | 1.4 MB     | 278/278         | 0          |
| workspace-plan         | Workspace execution plan                        | 2386 ms     | 2415 ms  | 454.7 MB     | 426.1 MB      | 2668 ms      | 1.7 MB     | 284/284         | 0          |
| platform-probes        | Platform and loader probes                      | 2421 ms     | 2422 ms  | 456 MB       | 426.1 MB      | 2640 ms      | 1.7 MB     | 286/286         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 409 ms      | 410 ms   | 60.3 MB      | 31.8 MB       | 184 ms       | 1.4 MB     | 48/48           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 38 ms    | 39 ms    | 31.1 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2238 ms  | 2261 ms  | 447.1 MB     | 2491 ms      | 264/264         | fixture-inspection     |
| target-registry  | 1        | 2370 ms  | 2387 ms  | 460.6 MB     | 2609 ms      | 279/279         | compat-report-registry |
| contract-capture | 1        | 2377 ms  | 2396 ms  | 462.7 MB     | 2612 ms      | 276/276         | contract-capture       |
| synthetic-probes | 1        | 2358 ms  | 2361 ms  | 447.7 MB     | 2573 ms      | 280/280         | synthetic-probe-plan   |
| cold-import      | 1        | 2333 ms  | 2362 ms  | 465.1 MB     | 2603 ms      | 278/278         | cold-import-readiness  |
| workspace-plan   | 1        | 2386 ms  | 2415 ms  | 454.7 MB     | 2668 ms      | 284/284         | workspace-plan         |
| platform-probes  | 1        | 2421 ms  | 2422 ms  | 456 MB       | 2640 ms      | 286/286         | platform-probes        |
| import-loop      | 1        | 409 ms   | 410 ms   | 60.3 MB      | 184 ms       | 48/48           | import-loop-profile    |
