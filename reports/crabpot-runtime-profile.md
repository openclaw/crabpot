# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 6142 ms            |
| Command P95 wall time  | 6442 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 5281               |
| CPU samples            | 5281               |
| Max peak RSS           | 314.7 MB           |
| Max RSS delta          | 288.1 MB           |
| Max CPU estimate       | 7403 ms            |
| Max harness heap delta | 16.1 MB            |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 0          |
| hookNames              | 42         |
| apiRegistrars          | 57         |
| capturedRegistrars     | 31         |
| sdkExports             | 338        |
| manifestFields         | 52         |
| manifestContractFields | 22         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 59    |
| sourceFiles           | 2221  |
| observedHooks         | 113   |
| observedRegistrations | 213   |
| observedSdkImports    | 1174  |
| contractProbes        | 260   |
| issueFindings         | 365   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 29 ms       | 31 ms    | 28 MB        | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 5982 ms     | 5988 ms  | 300.7 MB     | 273.5 MB      | 7012 ms      | 16.1 MB    | 714/714         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 6142 ms     | 6159 ms  | 302.9 MB     | 276.1 MB      | 7200 ms      | 14.8 MB    | 735/735         | 0          |
| contract-capture       | Contract capture inventory                      | 6224 ms     | 6233 ms  | 300.4 MB     | 273.8 MB      | 7243 ms      | 11.6 MB    | 743/743         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 6266 ms     | 6284 ms  | 290.1 MB     | 263.5 MB      | 7239 ms      | 11.7 MB    | 748/748         | 0          |
| cold-import-readiness  | Cold import readiness                           | 6088 ms     | 6100 ms  | 302 MB       | 275.4 MB      | 7155 ms      | 11.4 MB    | 727/727         | 0          |
| workspace-plan         | Workspace execution plan                        | 6161 ms     | 6195 ms  | 308.9 MB     | 281.8 MB      | 7279 ms      | 11.4 MB    | 736/736         | 0          |
| platform-probes        | Platform and loader probes                      | 6442 ms     | 6494 ms  | 314.7 MB     | 288.1 MB      | 7403 ms      | 12 MB      | 773/773         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 860 ms      | 865 ms   | 76.8 MB      | 50.2 MB       | 465 ms       | 1.7 MB     | 102/102         | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 29 ms    | 31 ms    | 28 MB        | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 5982 ms  | 5988 ms  | 300.7 MB     | 7012 ms      | 714/714         | fixture-inspection     |
| target-registry  | 1        | 6142 ms  | 6159 ms  | 302.9 MB     | 7200 ms      | 735/735         | compat-report-registry |
| contract-capture | 1        | 6224 ms  | 6233 ms  | 300.4 MB     | 7243 ms      | 743/743         | contract-capture       |
| synthetic-probes | 1        | 6266 ms  | 6284 ms  | 290.1 MB     | 7239 ms      | 748/748         | synthetic-probe-plan   |
| cold-import      | 1        | 6088 ms  | 6100 ms  | 302 MB       | 7155 ms      | 727/727         | cold-import-readiness  |
| workspace-plan   | 1        | 6161 ms  | 6195 ms  | 308.9 MB     | 7279 ms      | 736/736         | workspace-plan         |
| platform-probes  | 1        | 6442 ms  | 6494 ms  | 314.7 MB     | 7403 ms      | 773/773         | platform-probes        |
| import-loop      | 1        | 860 ms   | 865 ms   | 76.8 MB      | 465 ms       | 102/102         | import-loop-profile    |
