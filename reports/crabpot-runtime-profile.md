# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 6338 ms            |
| Command P95 wall time  | 6434 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 5364               |
| CPU samples            | 5364               |
| Max peak RSS           | 445.4 MB           |
| Max RSS delta          | 417.2 MB           |
| Max CPU estimate       | 7070 ms            |
| Max harness heap delta | 8.2 MB             |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 68         |
| hookNames              | 40         |
| apiRegistrars          | 55         |
| capturedRegistrars     | 30         |
| sdkExports             | 324        |
| manifestFields         | 44         |
| manifestContractFields | 22         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 60    |
| sourceFiles           | 2032  |
| observedHooks         | 110   |
| observedRegistrations | 211   |
| observedSdkImports    | 1318  |
| contractProbes        | 275   |
| issueFindings         | 289   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 34 ms       | 35 ms    | 31.9 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 6178 ms     | 6270 ms  | 401.7 MB     | 373.5 MB      | 6759 ms      | 8 MB       | 741/741         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 6338 ms     | 6381 ms  | 398.8 MB     | 368.9 MB      | 6911 ms      | 8.1 MB     | 756/756         | 0          |
| contract-capture       | Contract capture inventory                      | 6434 ms     | 6528 ms  | 441.2 MB     | 412.5 MB      | 7037 ms      | 2.4 MB     | 769/769         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 6427 ms     | 6528 ms  | 442.8 MB     | 414.6 MB      | 7070 ms      | 2.5 MB     | 768/768         | 0          |
| cold-import-readiness  | Cold import readiness                           | 6314 ms     | 6335 ms  | 444.3 MB     | 416 MB        | 6847 ms      | 2.1 MB     | 754/754         | 0          |
| workspace-plan         | Workspace execution plan                        | 6368 ms     | 6385 ms  | 445.4 MB     | 417.2 MB      | 6960 ms      | 7.9 MB     | 760/760         | 0          |
| platform-probes        | Platform and loader probes                      | 6364 ms     | 6426 ms  | 404.2 MB     | 376 MB        | 6940 ms      | 8.2 MB     | 762/762         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 431 ms      | 444 ms   | 60.7 MB      | 32.5 MB       | 203 ms       | 1.6 MB     | 51/51           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 34 ms    | 35 ms    | 31.9 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 6178 ms  | 6270 ms  | 401.7 MB     | 6759 ms      | 741/741         | fixture-inspection     |
| target-registry  | 1        | 6338 ms  | 6381 ms  | 398.8 MB     | 6911 ms      | 756/756         | compat-report-registry |
| contract-capture | 1        | 6434 ms  | 6528 ms  | 441.2 MB     | 7037 ms      | 769/769         | contract-capture       |
| synthetic-probes | 1        | 6427 ms  | 6528 ms  | 442.8 MB     | 7070 ms      | 768/768         | synthetic-probe-plan   |
| cold-import      | 1        | 6314 ms  | 6335 ms  | 444.3 MB     | 6847 ms      | 754/754         | cold-import-readiness  |
| workspace-plan   | 1        | 6368 ms  | 6385 ms  | 445.4 MB     | 6960 ms      | 760/760         | workspace-plan         |
| platform-probes  | 1        | 6364 ms  | 6426 ms  | 404.2 MB     | 6940 ms      | 762/762         | platform-probes        |
| import-loop      | 1        | 431 ms   | 444 ms   | 60.7 MB      | 203 ms       | 51/51           | import-loop-profile    |
