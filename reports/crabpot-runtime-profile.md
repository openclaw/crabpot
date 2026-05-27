# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2416 ms            |
| Command P95 wall time  | 2506 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 2056               |
| CPU samples            | 2056               |
| Max peak RSS           | 482.4 MB           |
| Max RSS delta          | 453.7 MB           |
| Max CPU estimate       | 2716 ms            |
| Max harness heap delta | 7.8 MB             |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 63         |
| hookNames              | 37         |
| apiRegistrars          | 55         |
| capturedRegistrars     | 30         |
| sdkExports             | 316        |
| manifestFields         | 41         |
| manifestContractFields | 20         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 60    |
| sourceFiles           | 1786  |
| observedHooks         | 108   |
| observedRegistrations | 206   |
| observedSdkImports    | 1243  |
| contractProbes        | 304   |
| issueFindings         | 309   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 36 ms       | 39 ms    | 32.3 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2288 ms     | 2363 ms  | 472.3 MB     | 442 MB        | 2606 ms      | 7.7 MB     | 270/270         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2389 ms     | 2444 ms  | 473.8 MB     | 443.3 MB      | 2664 ms      | 7.8 MB     | 283/283         | 0          |
| contract-capture       | Contract capture inventory                      | 2416 ms     | 2483 ms  | 468.8 MB     | 438.5 MB      | 2702 ms      | -3.9 MB    | 284/284         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2434 ms     | 2438 ms  | 474.1 MB     | 445.6 MB      | 2648 ms      | 0.5 MB     | 289/289         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2443 ms     | 2475 ms  | 475.3 MB     | 446.1 MB      | 2715 ms      | 0.6 MB     | 291/291         | 0          |
| workspace-plan         | Workspace execution plan                        | 2442 ms     | 2476 ms  | 482 MB       | 452.7 MB      | 2689 ms      | 2 MB       | 291/291         | 0          |
| platform-probes        | Platform and loader probes                      | 2506 ms     | 2510 ms  | 482.4 MB     | 453.7 MB      | 2716 ms      | 2.2 MB     | 297/297         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 400 ms      | 407 ms   | 60.6 MB      | 32.1 MB       | 177 ms       | 1.4 MB     | 48/48           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 36 ms    | 39 ms    | 32.3 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2288 ms  | 2363 ms  | 472.3 MB     | 2606 ms      | 270/270         | fixture-inspection     |
| target-registry  | 1        | 2389 ms  | 2444 ms  | 473.8 MB     | 2664 ms      | 283/283         | compat-report-registry |
| contract-capture | 1        | 2416 ms  | 2483 ms  | 468.8 MB     | 2702 ms      | 284/284         | contract-capture       |
| synthetic-probes | 1        | 2434 ms  | 2438 ms  | 474.1 MB     | 2648 ms      | 289/289         | synthetic-probe-plan   |
| cold-import      | 1        | 2443 ms  | 2475 ms  | 475.3 MB     | 2715 ms      | 291/291         | cold-import-readiness  |
| workspace-plan   | 1        | 2442 ms  | 2476 ms  | 482 MB       | 2689 ms      | 291/291         | workspace-plan         |
| platform-probes  | 1        | 2506 ms  | 2510 ms  | 482.4 MB     | 2716 ms      | 297/297         | platform-probes        |
| import-loop      | 1        | 400 ms   | 407 ms   | 60.6 MB      | 177 ms       | 48/48           | import-loop-profile    |
