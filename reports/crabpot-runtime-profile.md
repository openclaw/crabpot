# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2467 ms            |
| Command P95 wall time  | 2551 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 2094               |
| CPU samples            | 2094               |
| Max peak RSS           | 486.1 MB           |
| Max RSS delta          | 456.9 MB           |
| Max CPU estimate       | 2853 ms            |
| Max harness heap delta | 8.2 MB             |

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
| sourceFiles           | 1783  |
| observedHooks         | 108   |
| observedRegistrations | 205   |
| observedSdkImports    | 1243  |
| contractProbes        | 305   |
| issueFindings         | 310   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 39 ms       | 40 ms    | 30.7 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2385 ms     | 2416 ms  | 472.4 MB     | 442.1 MB      | 2655 ms      | 7.7 MB     | 280/280         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2414 ms     | 2490 ms  | 472.9 MB     | 444.2 MB      | 2722 ms      | 7.7 MB     | 288/288         | 0          |
| contract-capture       | Contract capture inventory                      | 2476 ms     | 2518 ms  | 473.8 MB     | 443.8 MB      | 2735 ms      | 7.5 MB     | 288/288         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2467 ms     | 2478 ms  | 474.4 MB     | 444.1 MB      | 2694 ms      | 7.9 MB     | 292/292         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2469 ms     | 2527 ms  | 486.1 MB     | 456.9 MB      | 2744 ms      | 8.1 MB     | 293/293         | 0          |
| workspace-plan         | Workspace execution plan                        | 2517 ms     | 2568 ms  | 481.5 MB     | 450.8 MB      | 2853 ms      | 8.2 MB     | 298/298         | 0          |
| platform-probes        | Platform and loader probes                      | 2551 ms     | 2559 ms  | 482.3 MB     | 453.4 MB      | 2751 ms      | 8.2 MB     | 302/302         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 434 ms      | 456 ms   | 60.5 MB      | 30.7 MB       | 211 ms       | 1.6 MB     | 50/50           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 39 ms    | 40 ms    | 30.7 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 2385 ms  | 2416 ms  | 472.4 MB     | 2655 ms      | 280/280         | fixture-inspection     |
| target-registry  | 1        | 2414 ms  | 2490 ms  | 472.9 MB     | 2722 ms      | 288/288         | compat-report-registry |
| contract-capture | 1        | 2476 ms  | 2518 ms  | 473.8 MB     | 2735 ms      | 288/288         | contract-capture       |
| synthetic-probes | 1        | 2467 ms  | 2478 ms  | 474.4 MB     | 2694 ms      | 292/292         | synthetic-probe-plan   |
| cold-import      | 1        | 2469 ms  | 2527 ms  | 486.1 MB     | 2744 ms      | 293/293         | cold-import-readiness  |
| workspace-plan   | 1        | 2517 ms  | 2568 ms  | 481.5 MB     | 2853 ms      | 298/298         | workspace-plan         |
| platform-probes  | 1        | 2551 ms  | 2559 ms  | 482.3 MB     | 2751 ms      | 302/302         | platform-probes        |
| import-loop      | 1        | 434 ms   | 456 ms   | 60.5 MB      | 211 ms       | 50/50           | import-loop-profile    |
