# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 6663 ms            |
| Command P95 wall time  | 6722 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 5608               |
| CPU samples            | 5608               |
| Max peak RSS           | 421.6 MB           |
| Max RSS delta          | 393.3 MB           |
| Max CPU estimate       | 7344 ms            |
| Max harness heap delta | 9.6 MB             |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 68         |
| hookNames              | 39         |
| apiRegistrars          | 55         |
| capturedRegistrars     | 30         |
| sdkExports             | 322        |
| manifestFields         | 43         |
| manifestContractFields | 21         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 60    |
| sourceFiles           | 2017  |
| observedHooks         | 108   |
| observedRegistrations | 208   |
| observedSdkImports    | 1279  |
| contractProbes        | 275   |
| issueFindings         | 291   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 38 ms       | 38 ms    | 31.9 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 6547 ms     | 6605 ms  | 416.6 MB     | 387.5 MB      | 7173 ms      | 8.7 MB     | 781/781         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 6722 ms     | 6749 ms  | 418.3 MB     | 389.5 MB      | 7320 ms      | 9 MB       | 798/798         | 0          |
| contract-capture       | Contract capture inventory                      | 6584 ms     | 6629 ms  | 419 MB       | 389.6 MB      | 7199 ms      | 9 MB       | 784/784         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 6678 ms     | 6737 ms  | 417.5 MB     | 388.1 MB      | 7296 ms      | 9.6 MB     | 797/797         | 0          |
| cold-import-readiness  | Cold import readiness                           | 6676 ms     | 6690 ms  | 421.6 MB     | 393.3 MB      | 7319 ms      | -3 MB      | 796/796         | 0          |
| workspace-plan         | Workspace execution plan                        | 6663 ms     | 6677 ms  | 421.3 MB     | 393.1 MB      | 7298 ms      | 1.5 MB     | 794/794         | 0          |
| platform-probes        | Platform and loader probes                      | 6719 ms     | 6750 ms  | 410.9 MB     | 382.7 MB      | 7344 ms      | 0.3 MB     | 802/802         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 452 ms      | 455 ms   | 60.7 MB      | 32.5 MB       | 210 ms       | 1.6 MB     | 53/53           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 38 ms    | 38 ms    | 31.9 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 6547 ms  | 6605 ms  | 416.6 MB     | 7173 ms      | 781/781         | fixture-inspection     |
| target-registry  | 1        | 6722 ms  | 6749 ms  | 418.3 MB     | 7320 ms      | 798/798         | compat-report-registry |
| contract-capture | 1        | 6584 ms  | 6629 ms  | 419 MB       | 7199 ms      | 784/784         | contract-capture       |
| synthetic-probes | 1        | 6678 ms  | 6737 ms  | 417.5 MB     | 7296 ms      | 797/797         | synthetic-probe-plan   |
| cold-import      | 1        | 6676 ms  | 6690 ms  | 421.6 MB     | 7319 ms      | 796/796         | cold-import-readiness  |
| workspace-plan   | 1        | 6663 ms  | 6677 ms  | 421.3 MB     | 7298 ms      | 794/794         | workspace-plan         |
| platform-probes  | 1        | 6719 ms  | 6750 ms  | 410.9 MB     | 7344 ms      | 802/802         | platform-probes        |
| import-loop      | 1        | 452 ms   | 455 ms   | 60.7 MB      | 210 ms       | 53/53           | import-loop-profile    |
