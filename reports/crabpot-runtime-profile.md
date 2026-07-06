# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 6567 ms            |
| Command P95 wall time  | 6678 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 5544               |
| CPU samples            | 5544               |
| Max peak RSS           | 421.1 MB           |
| Max RSS delta          | 392.8 MB           |
| Max CPU estimate       | 7262 ms            |
| Max harness heap delta | 9.4 MB             |

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
| observedRegistrations | 207   |
| observedSdkImports    | 1267  |
| contractProbes        | 275   |
| issueFindings         | 294   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 39 ms       | 40 ms    | 32.1 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 6429 ms     | 6436 ms  | 416.1 MB     | 386.4 MB      | 6989 ms      | 8.5 MB     | 764/764         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 6603 ms     | 6644 ms  | 420.2 MB     | 390.6 MB      | 7210 ms      | 9.3 MB     | 787/787         | 0          |
| contract-capture       | Contract capture inventory                      | 6567 ms     | 6630 ms  | 417.8 MB     | 387.8 MB      | 7194 ms      | 9.4 MB     | 785/785         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 6584 ms     | 6610 ms  | 420.6 MB     | 391.6 MB      | 7170 ms      | 9.3 MB     | 786/786         | 0          |
| cold-import-readiness  | Cold import readiness                           | 6554 ms     | 6607 ms  | 416.9 MB     | 387.5 MB      | 7188 ms      | 8.8 MB     | 783/783         | 0          |
| workspace-plan         | Workspace execution plan                        | 6602 ms     | 6614 ms  | 418.9 MB     | 389.3 MB      | 7216 ms      | 2.1 MB     | 786/786         | 0          |
| platform-probes        | Platform and loader probes                      | 6678 ms     | 6718 ms  | 421.1 MB     | 392.8 MB      | 7262 ms      | 0.5 MB     | 797/797         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 463 ms      | 463 ms   | 60.7 MB      | 32.5 MB       | 225 ms       | 1.6 MB     | 53/53           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 39 ms    | 40 ms    | 32.1 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 6429 ms  | 6436 ms  | 416.1 MB     | 6989 ms      | 764/764         | fixture-inspection     |
| target-registry  | 1        | 6603 ms  | 6644 ms  | 420.2 MB     | 7210 ms      | 787/787         | compat-report-registry |
| contract-capture | 1        | 6567 ms  | 6630 ms  | 417.8 MB     | 7194 ms      | 785/785         | contract-capture       |
| synthetic-probes | 1        | 6584 ms  | 6610 ms  | 420.6 MB     | 7170 ms      | 786/786         | synthetic-probe-plan   |
| cold-import      | 1        | 6554 ms  | 6607 ms  | 416.9 MB     | 7188 ms      | 783/783         | cold-import-readiness  |
| workspace-plan   | 1        | 6602 ms  | 6614 ms  | 418.9 MB     | 7216 ms      | 786/786         | workspace-plan         |
| platform-probes  | 1        | 6678 ms  | 6718 ms  | 421.1 MB     | 7262 ms      | 797/797         | platform-probes        |
| import-loop      | 1        | 463 ms   | 463 ms   | 60.7 MB      | 225 ms       | 53/53           | import-loop-profile    |
