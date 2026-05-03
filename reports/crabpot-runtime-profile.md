# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2336 ms            |
| Command P95 wall time  | 2378 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1983               |
| CPU samples            | 1983               |
| Max peak RSS           | 440.3 MB           |
| Max RSS delta          | 411.5 MB           |
| Max CPU estimate       | 2618 ms            |
| Max harness heap delta | 8.2 MB             |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 60         |
| hookNames              | 35         |
| apiRegistrars          | 49         |
| capturedRegistrars     | 26         |
| sdkExports             | 294        |
| manifestFields         | 39         |
| manifestContractFields | 17         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 57    |
| sourceFiles           | 2970  |
| observedHooks         | 93    |
| observedRegistrations | 185   |
| observedSdkImports    | 1080  |
| contractProbes        | 299   |
| issueFindings         | 307   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 33 ms       | 35 ms    | 32.6 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2239 ms     | 2258 ms  | 428.8 MB     | 398.1 MB      | 2461 ms      | 8.2 MB     | 265/265         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2335 ms     | 2368 ms  | 430.5 MB     | 400 MB        | 2560 ms      | 7.7 MB     | 277/277         | 0          |
| contract-capture       | Contract capture inventory                      | 2341 ms     | 2371 ms  | 430.3 MB     | 399.6 MB      | 2580 ms      | 7.6 MB     | 274/274         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2352 ms     | 2385 ms  | 430.7 MB     | 402 MB        | 2566 ms      | 1.6 MB     | 279/279         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2336 ms     | 2345 ms  | 440.3 MB     | 411.5 MB      | 2544 ms      | 0.3 MB     | 278/278         | 0          |
| workspace-plan         | Workspace execution plan                        | 2346 ms     | 2380 ms  | 437.2 MB     | 408.5 MB      | 2618 ms      | 1.9 MB     | 280/280         | 0          |
| platform-probes        | Platform and loader probes                      | 2378 ms     | 2385 ms  | 437 MB       | 408.3 MB      | 2616 ms      | 1.7 MB     | 282/282         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 372 ms      | 373 ms   | 60.5 MB      | 31.8 MB       | 173 ms       | 1.3 MB     | 45/45           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 33 ms    | 35 ms    | 32.6 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2239 ms  | 2258 ms  | 428.8 MB     | 2461 ms      | 265/265         | fixture-inspection     |
| target-registry  | 1        | 2335 ms  | 2368 ms  | 430.5 MB     | 2560 ms      | 277/277         | compat-report-registry |
| contract-capture | 1        | 2341 ms  | 2371 ms  | 430.3 MB     | 2580 ms      | 274/274         | contract-capture       |
| synthetic-probes | 1        | 2352 ms  | 2385 ms  | 430.7 MB     | 2566 ms      | 279/279         | synthetic-probe-plan   |
| cold-import      | 1        | 2336 ms  | 2345 ms  | 440.3 MB     | 2544 ms      | 278/278         | cold-import-readiness  |
| workspace-plan   | 1        | 2346 ms  | 2380 ms  | 437.2 MB     | 2618 ms      | 280/280         | workspace-plan         |
| platform-probes  | 1        | 2378 ms  | 2385 ms  | 437 MB       | 2616 ms      | 282/282         | platform-probes        |
| import-loop      | 1        | 372 ms   | 373 ms   | 60.5 MB      | 173 ms       | 45/45           | import-loop-profile    |
