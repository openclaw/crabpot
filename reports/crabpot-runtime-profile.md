# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2316 ms            |
| Command P95 wall time  | 2394 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1983               |
| CPU samples            | 1983               |
| Max peak RSS           | 462.9 MB           |
| Max RSS delta          | 432.5 MB           |
| Max CPU estimate       | 2665 ms            |
| Max harness heap delta | 8.1 MB             |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 60         |
| hookNames              | 36         |
| apiRegistrars          | 53         |
| capturedRegistrars     | 28         |
| sdkExports             | 310        |
| manifestFields         | 41         |
| manifestContractFields | 18         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 60    |
| sourceFiles           | 1741  |
| observedHooks         | 106   |
| observedRegistrations | 198   |
| observedSdkImports    | 1200  |
| contractProbes        | 278   |
| issueFindings         | 283   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 39 ms       | 47 ms    | 31.8 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2271 ms     | 2294 ms  | 462.9 MB     | 432.5 MB      | 2546 ms      | 7.7 MB     | 269/269         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2289 ms     | 2324 ms  | 447.3 MB     | 416.6 MB      | 2568 ms      | 7.5 MB     | 271/271         | 0          |
| contract-capture       | Contract capture inventory                      | 2316 ms     | 2341 ms  | 447.7 MB     | 418.1 MB      | 2575 ms      | 7.6 MB     | 274/274         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2322 ms     | 2338 ms  | 447.9 MB     | 418.4 MB      | 2588 ms      | 7.6 MB     | 276/276         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2344 ms     | 2365 ms  | 455.6 MB     | 425 MB        | 2604 ms      | 7.5 MB     | 279/279         | 0          |
| workspace-plan         | Workspace execution plan                        | 2385 ms     | 2392 ms  | 453.8 MB     | 425.3 MB      | 2624 ms      | 7.8 MB     | 282/282         | 0          |
| platform-probes        | Platform and loader probes                      | 2394 ms     | 2463 ms  | 454.2 MB     | 424.2 MB      | 2665 ms      | 8.1 MB     | 284/284         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 402 ms      | 403 ms   | 60.3 MB      | 30.9 MB       | 195 ms       | 1.4 MB     | 45/45           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 39 ms    | 47 ms    | 31.8 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2271 ms  | 2294 ms  | 462.9 MB     | 2546 ms      | 269/269         | fixture-inspection     |
| target-registry  | 1        | 2289 ms  | 2324 ms  | 447.3 MB     | 2568 ms      | 271/271         | compat-report-registry |
| contract-capture | 1        | 2316 ms  | 2341 ms  | 447.7 MB     | 2575 ms      | 274/274         | contract-capture       |
| synthetic-probes | 1        | 2322 ms  | 2338 ms  | 447.9 MB     | 2588 ms      | 276/276         | synthetic-probe-plan   |
| cold-import      | 1        | 2344 ms  | 2365 ms  | 455.6 MB     | 2604 ms      | 279/279         | cold-import-readiness  |
| workspace-plan   | 1        | 2385 ms  | 2392 ms  | 453.8 MB     | 2624 ms      | 282/282         | workspace-plan         |
| platform-probes  | 1        | 2394 ms  | 2463 ms  | 454.2 MB     | 2665 ms      | 284/284         | platform-probes        |
| import-loop      | 1        | 402 ms   | 403 ms   | 60.3 MB      | 195 ms       | 45/45           | import-loop-profile    |
