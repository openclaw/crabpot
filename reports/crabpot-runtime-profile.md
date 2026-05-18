# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2318 ms            |
| Command P95 wall time  | 2408 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1989               |
| CPU samples            | 1989               |
| Max peak RSS           | 462.6 MB           |
| Max RSS delta          | 433.7 MB           |
| Max CPU estimate       | 2641 ms            |
| Max harness heap delta | 7.6 MB             |

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
| node-boot              | Node boot                                       | 36 ms       | 38 ms    | 32.2 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2237 ms     | 2291 ms  | 461.7 MB     | 431.6 MB      | 2513 ms      | 7.6 MB     | 265/265         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2318 ms     | 2322 ms  | 447.3 MB     | 417 MB        | 2554 ms      | 7.5 MB     | 274/274         | 0          |
| contract-capture       | Contract capture inventory                      | 2341 ms     | 2353 ms  | 459.5 MB     | 428.8 MB      | 2580 ms      | 7.5 MB     | 274/274         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2311 ms     | 2327 ms  | 448.6 MB     | 420.1 MB      | 2543 ms      | 1.3 MB     | 276/276         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2354 ms     | 2360 ms  | 453.9 MB     | 424.7 MB      | 2641 ms      | 0.1 MB     | 280/280         | 0          |
| workspace-plan         | Workspace execution plan                        | 2387 ms     | 2413 ms  | 462.6 MB     | 433.7 MB      | 2638 ms      | 1.7 MB     | 285/285         | 0          |
| platform-probes        | Platform and loader probes                      | 2408 ms     | 2419 ms  | 455.1 MB     | 426.6 MB      | 2627 ms      | 1.7 MB     | 285/285         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 404 ms      | 404 ms   | 60.3 MB      | 31.8 MB       | 188 ms       | 1.4 MB     | 47/47           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 36 ms    | 38 ms    | 32.2 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2237 ms  | 2291 ms  | 461.7 MB     | 2513 ms      | 265/265         | fixture-inspection     |
| target-registry  | 1        | 2318 ms  | 2322 ms  | 447.3 MB     | 2554 ms      | 274/274         | compat-report-registry |
| contract-capture | 1        | 2341 ms  | 2353 ms  | 459.5 MB     | 2580 ms      | 274/274         | contract-capture       |
| synthetic-probes | 1        | 2311 ms  | 2327 ms  | 448.6 MB     | 2543 ms      | 276/276         | synthetic-probe-plan   |
| cold-import      | 1        | 2354 ms  | 2360 ms  | 453.9 MB     | 2641 ms      | 280/280         | cold-import-readiness  |
| workspace-plan   | 1        | 2387 ms  | 2413 ms  | 462.6 MB     | 2638 ms      | 285/285         | workspace-plan         |
| platform-probes  | 1        | 2408 ms  | 2419 ms  | 455.1 MB     | 2627 ms      | 285/285         | platform-probes        |
| import-loop      | 1        | 404 ms   | 404 ms   | 60.3 MB      | 188 ms       | 47/47           | import-loop-profile    |
