# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 1727 ms            |
| Command P95 wall time  | 1772 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1477               |
| CPU samples            | 1477               |
| Max peak RSS           | 441.3 MB           |
| Max RSS delta          | 412.6 MB           |
| Max CPU estimate       | 1933 ms            |
| Max harness heap delta | 6 MB               |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 60         |
| hookNames              | 35         |
| apiRegistrars          | 49         |
| capturedRegistrars     | 26         |
| sdkExports             | 296        |
| manifestFields         | 40         |
| manifestContractFields | 17         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 57    |
| sourceFiles           | 1772  |
| observedHooks         | 96    |
| observedRegistrations | 193   |
| observedSdkImports    | 1157  |
| contractProbes        | 323   |
| issueFindings         | 329   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 32 ms       | 33 ms    | 30.8 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 1645 ms     | 1687 ms  | 432 MB       | 402.9 MB      | 1817 ms      | 6 MB       | 196/196         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 1710 ms     | 1760 ms  | 433 MB       | 404 MB        | 1915 ms      | 5.7 MB     | 205/205         | 0          |
| contract-capture       | Contract capture inventory                      | 1739 ms     | 1741 ms  | 432.6 MB     | 403.8 MB      | 1887 ms      | 5.8 MB     | 207/207         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 1727 ms     | 1743 ms  | 432.7 MB     | 403.3 MB      | 1877 ms      | 5.8 MB     | 205/205         | 0          |
| cold-import-readiness  | Cold import readiness                           | 1735 ms     | 1742 ms  | 432.9 MB     | 403.2 MB      | 1907 ms      | 0.1 MB     | 203/203         | 0          |
| workspace-plan         | Workspace execution plan                        | 1751 ms     | 1751 ms  | 441.3 MB     | 412.6 MB      | 1933 ms      | 1.2 MB     | 208/208         | 0          |
| platform-probes        | Platform and loader probes                      | 1772 ms     | 1776 ms  | 439.9 MB     | 411.2 MB      | 1920 ms      | 0 MB       | 211/211         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 325 ms      | 326 ms   | 60.5 MB      | 31.7 MB       | 137 ms       | 1.2 MB     | 39/39           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 32 ms    | 33 ms    | 30.8 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 1645 ms  | 1687 ms  | 432 MB       | 1817 ms      | 196/196         | fixture-inspection     |
| target-registry  | 1        | 1710 ms  | 1760 ms  | 433 MB       | 1915 ms      | 205/205         | compat-report-registry |
| contract-capture | 1        | 1739 ms  | 1741 ms  | 432.6 MB     | 1887 ms      | 207/207         | contract-capture       |
| synthetic-probes | 1        | 1727 ms  | 1743 ms  | 432.7 MB     | 1877 ms      | 205/205         | synthetic-probe-plan   |
| cold-import      | 1        | 1735 ms  | 1742 ms  | 432.9 MB     | 1907 ms      | 203/203         | cold-import-readiness  |
| workspace-plan   | 1        | 1751 ms  | 1751 ms  | 441.3 MB     | 1933 ms      | 208/208         | workspace-plan         |
| platform-probes  | 1        | 1772 ms  | 1776 ms  | 439.9 MB     | 1920 ms      | 211/211         | platform-probes        |
| import-loop      | 1        | 325 ms   | 326 ms   | 60.5 MB      | 137 ms       | 39/39           | import-loop-profile    |
