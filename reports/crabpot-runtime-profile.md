# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2571 ms            |
| Command P95 wall time  | 2641 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 2185               |
| CPU samples            | 2185               |
| Max peak RSS           | 482.8 MB           |
| Max RSS delta          | 452.4 MB           |
| Max CPU estimate       | 2931 ms            |
| Max harness heap delta | 8.6 MB             |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 64         |
| hookNames              | 37         |
| apiRegistrars          | 55         |
| capturedRegistrars     | 30         |
| sdkExports             | 304        |
| manifestFields         | 41         |
| manifestContractFields | 20         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 60    |
| sourceFiles           | 1784  |
| observedHooks         | 108   |
| observedRegistrations | 205   |
| observedSdkImports    | 1213  |
| contractProbes        | 284   |
| issueFindings         | 289   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 44 ms       | 59 ms    | 34.2 MB      | 0 MB          | 59 ms        | 0.5 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 2523 ms     | 2525 ms  | 472.5 MB     | 442.4 MB      | 2740 ms      | -3.5 MB    | 292/292         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2525 ms     | 2641 ms  | 472.4 MB     | 442.7 MB      | 2813 ms      | 8.4 MB     | 302/302         | 0          |
| contract-capture       | Contract capture inventory                      | 2583 ms     | 2671 ms  | 474.8 MB     | 443.2 MB      | 2890 ms      | 8.3 MB     | 306/306         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2580 ms     | 2623 ms  | 474.5 MB     | 444.5 MB      | 2880 ms      | 8.6 MB     | 304/304         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2571 ms     | 2602 ms  | 474.1 MB     | 444.4 MB      | 2862 ms      | 8.5 MB     | 304/304         | 0          |
| workspace-plan         | Workspace execution plan                        | 2641 ms     | 2694 ms  | 482.8 MB     | 452.4 MB      | 2931 ms      | 8.6 MB     | 313/313         | 0          |
| platform-probes        | Platform and loader probes                      | 2577 ms     | 2621 ms  | 463.3 MB     | 433.6 MB      | 2844 ms      | 8.5 MB     | 305/305         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 487 ms      | 495 ms   | 60.5 MB      | 31.9 MB       | 244 ms       | 1.7 MB     | 56/56           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 44 ms    | 59 ms    | 34.2 MB      | 59 ms        | 3/3             | node-boot              |
| fixture-scan     | 1        | 2523 ms  | 2525 ms  | 472.5 MB     | 2740 ms      | 292/292         | fixture-inspection     |
| target-registry  | 1        | 2525 ms  | 2641 ms  | 472.4 MB     | 2813 ms      | 302/302         | compat-report-registry |
| contract-capture | 1        | 2583 ms  | 2671 ms  | 474.8 MB     | 2890 ms      | 306/306         | contract-capture       |
| synthetic-probes | 1        | 2580 ms  | 2623 ms  | 474.5 MB     | 2880 ms      | 304/304         | synthetic-probe-plan   |
| cold-import      | 1        | 2571 ms  | 2602 ms  | 474.1 MB     | 2862 ms      | 304/304         | cold-import-readiness  |
| workspace-plan   | 1        | 2641 ms  | 2694 ms  | 482.8 MB     | 2931 ms      | 313/313         | workspace-plan         |
| platform-probes  | 1        | 2577 ms  | 2621 ms  | 463.3 MB     | 2844 ms      | 305/305         | platform-probes        |
| import-loop      | 1        | 487 ms   | 495 ms   | 60.5 MB      | 244 ms       | 56/56           | import-loop-profile    |
