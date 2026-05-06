# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 1740 ms            |
| Command P95 wall time  | 1776 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1485               |
| CPU samples            | 1485               |
| Max peak RSS           | 442.1 MB           |
| Max RSS delta          | 412.4 MB           |
| Max CPU estimate       | 1957 ms            |
| Max harness heap delta | 5.9 MB             |

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
| sourceFiles           | 1774  |
| observedHooks         | 96    |
| observedRegistrations | 193   |
| observedSdkImports    | 1159  |
| contractProbes        | 300   |
| issueFindings         | 304   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 30 ms       | 30 ms    | 31.9 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 1639 ms     | 1664 ms  | 430.9 MB     | 401.4 MB      | 1807 ms      | 5.9 MB     | 195/195         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 1740 ms     | 1743 ms  | 432.9 MB     | 402.9 MB      | 1907 ms      | 5.8 MB     | 207/207         | 0          |
| contract-capture       | Contract capture inventory                      | 1744 ms     | 1763 ms  | 434.2 MB     | 405.5 MB      | 1872 ms      | 5.6 MB     | 204/204         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 1757 ms     | 1760 ms  | 432.9 MB     | 404.1 MB      | 1896 ms      | 0.3 MB     | 208/208         | 0          |
| cold-import-readiness  | Cold import readiness                           | 1738 ms     | 1744 ms  | 436.7 MB     | 407.6 MB      | 1915 ms      | 1.2 MB     | 207/207         | 0          |
| workspace-plan         | Workspace execution plan                        | 1763 ms     | 1781 ms  | 442.1 MB     | 412.4 MB      | 1957 ms      | 1.2 MB     | 211/211         | 0          |
| platform-probes        | Platform and loader probes                      | 1776 ms     | 1786 ms  | 440.7 MB     | 412 MB        | 1943 ms      | -0.2 MB    | 211/211         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 329 ms      | 332 ms   | 60.5 MB      | 31.8 MB       | 132 ms       | 1.2 MB     | 39/39           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 30 ms    | 30 ms    | 31.9 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 1639 ms  | 1664 ms  | 430.9 MB     | 1807 ms      | 195/195         | fixture-inspection     |
| target-registry  | 1        | 1740 ms  | 1743 ms  | 432.9 MB     | 1907 ms      | 207/207         | compat-report-registry |
| contract-capture | 1        | 1744 ms  | 1763 ms  | 434.2 MB     | 1872 ms      | 204/204         | contract-capture       |
| synthetic-probes | 1        | 1757 ms  | 1760 ms  | 432.9 MB     | 1896 ms      | 208/208         | synthetic-probe-plan   |
| cold-import      | 1        | 1738 ms  | 1744 ms  | 436.7 MB     | 1915 ms      | 207/207         | cold-import-readiness  |
| workspace-plan   | 1        | 1763 ms  | 1781 ms  | 442.1 MB     | 1957 ms      | 211/211         | workspace-plan         |
| platform-probes  | 1        | 1776 ms  | 1786 ms  | 440.7 MB     | 1943 ms      | 211/211         | platform-probes        |
| import-loop      | 1        | 329 ms   | 332 ms   | 60.5 MB      | 132 ms       | 39/39           | import-loop-profile    |
