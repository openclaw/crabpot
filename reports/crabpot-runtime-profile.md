# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2297 ms            |
| Command P95 wall time  | 2343 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1948               |
| CPU samples            | 1948               |
| Max peak RSS           | 474.4 MB           |
| Max RSS delta          | 445.8 MB           |
| Max CPU estimate       | 2613 ms            |
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
| sourceFiles           | 1747  |
| observedHooks         | 106   |
| observedRegistrations | 198   |
| observedSdkImports    | 1202  |
| contractProbes        | 278   |
| issueFindings         | 282   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 37 ms       | 39 ms    | 32.1 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2166 ms     | 2182 ms  | 446.8 MB     | 414.3 MB      | 2380 ms      | 7.6 MB     | 255/255         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2280 ms     | 2375 ms  | 472.2 MB     | 441.7 MB      | 2613 ms      | 7.3 MB     | 272/272         | 0          |
| contract-capture       | Contract capture inventory                      | 2301 ms     | 2317 ms  | 447.9 MB     | 418.3 MB      | 2536 ms      | 7.4 MB     | 272/272         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2297 ms     | 2299 ms  | 447.3 MB     | 418.8 MB      | 2497 ms      | 0.5 MB     | 269/269         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2306 ms     | 2311 ms  | 449.5 MB     | 420.9 MB      | 2502 ms      | 1.2 MB     | 273/273         | 0          |
| workspace-plan         | Workspace execution plan                        | 2343 ms     | 2352 ms  | 455.3 MB     | 426.8 MB      | 2571 ms      | 1.5 MB     | 277/277         | 0          |
| platform-probes        | Platform and loader probes                      | 2341 ms     | 2392 ms  | 474.4 MB     | 445.8 MB      | 2588 ms      | 1.6 MB     | 281/281         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 394 ms      | 398 ms   | 60.3 MB      | 31.8 MB       | 190 ms       | 1.4 MB     | 46/46           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 37 ms    | 39 ms    | 32.1 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2166 ms  | 2182 ms  | 446.8 MB     | 2380 ms      | 255/255         | fixture-inspection     |
| target-registry  | 1        | 2280 ms  | 2375 ms  | 472.2 MB     | 2613 ms      | 272/272         | compat-report-registry |
| contract-capture | 1        | 2301 ms  | 2317 ms  | 447.9 MB     | 2536 ms      | 272/272         | contract-capture       |
| synthetic-probes | 1        | 2297 ms  | 2299 ms  | 447.3 MB     | 2497 ms      | 269/269         | synthetic-probe-plan   |
| cold-import      | 1        | 2306 ms  | 2311 ms  | 449.5 MB     | 2502 ms      | 273/273         | cold-import-readiness  |
| workspace-plan   | 1        | 2343 ms  | 2352 ms  | 455.3 MB     | 2571 ms      | 277/277         | workspace-plan         |
| platform-probes  | 1        | 2341 ms  | 2392 ms  | 474.4 MB     | 2588 ms      | 281/281         | platform-probes        |
| import-loop      | 1        | 394 ms   | 398 ms   | 60.3 MB      | 190 ms       | 46/46           | import-loop-profile    |
