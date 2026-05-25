# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2417 ms            |
| Command P95 wall time  | 2487 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 2069               |
| CPU samples            | 2069               |
| Max peak RSS           | 476.3 MB           |
| Max RSS delta          | 447.6 MB           |
| Max CPU estimate       | 2864 ms            |
| Max harness heap delta | 7.8 MB             |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 61         |
| hookNames              | 37         |
| apiRegistrars          | 54         |
| capturedRegistrars     | 29         |
| sdkExports             | 314        |
| manifestFields         | 41         |
| manifestContractFields | 19         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 60    |
| sourceFiles           | 1775  |
| observedHooks         | 108   |
| observedRegistrations | 205   |
| observedSdkImports    | 1241  |
| contractProbes        | 304   |
| issueFindings         | 309   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 39 ms       | 39 ms    | 30.9 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2302 ms     | 2344 ms  | 465.6 MB     | 436.8 MB      | 2560 ms      | 7.6 MB     | 271/271         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2417 ms     | 2496 ms  | 467 MB       | 436.6 MB      | 2733 ms      | 7.8 MB     | 287/287         | 0          |
| contract-capture       | Contract capture inventory                      | 2443 ms     | 2471 ms  | 467.4 MB     | 437.2 MB      | 2688 ms      | -4 MB      | 285/285         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2389 ms     | 2406 ms  | 456 MB       | 427.6 MB      | 2642 ms      | 0.9 MB     | 283/283         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2436 ms     | 2616 ms  | 471.3 MB     | 442.9 MB      | 2841 ms      | 0.7 MB     | 295/295         | 0          |
| workspace-plan         | Workspace execution plan                        | 2473 ms     | 2642 ms  | 476.3 MB     | 447.6 MB      | 2864 ms      | 1.8 MB     | 299/299         | 0          |
| platform-probes        | Platform and loader probes                      | 2487 ms     | 2494 ms  | 476 MB       | 447.5 MB      | 2688 ms      | 2 MB       | 296/296         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 427 ms      | 437 ms   | 60.5 MB      | 32.1 MB       | 208 ms       | 1.5 MB     | 50/50           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 39 ms    | 39 ms    | 30.9 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2302 ms  | 2344 ms  | 465.6 MB     | 2560 ms      | 271/271         | fixture-inspection     |
| target-registry  | 1        | 2417 ms  | 2496 ms  | 467 MB       | 2733 ms      | 287/287         | compat-report-registry |
| contract-capture | 1        | 2443 ms  | 2471 ms  | 467.4 MB     | 2688 ms      | 285/285         | contract-capture       |
| synthetic-probes | 1        | 2389 ms  | 2406 ms  | 456 MB       | 2642 ms      | 283/283         | synthetic-probe-plan   |
| cold-import      | 1        | 2436 ms  | 2616 ms  | 471.3 MB     | 2841 ms      | 295/295         | cold-import-readiness  |
| workspace-plan   | 1        | 2473 ms  | 2642 ms  | 476.3 MB     | 2864 ms      | 299/299         | workspace-plan         |
| platform-probes  | 1        | 2487 ms  | 2494 ms  | 476 MB       | 2688 ms      | 296/296         | platform-probes        |
| import-loop      | 1        | 427 ms   | 437 ms   | 60.5 MB      | 208 ms       | 50/50           | import-loop-profile    |
