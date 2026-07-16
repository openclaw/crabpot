# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 5160 ms            |
| Command P95 wall time  | 5210 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 4355               |
| CPU samples            | 4355               |
| Max peak RSS           | 446.7 MB           |
| Max RSS delta          | 418.2 MB           |
| Max CPU estimate       | 5694 ms            |
| Max harness heap delta | 5.7 MB             |

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
| sourceFiles           | 2041  |
| observedHooks         | 110   |
| observedRegistrations | 213   |
| observedSdkImports    | 1335  |
| contractProbes        | 280   |
| issueFindings         | 293   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 34 ms       | 34 ms    | 30 MB        | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 5109 ms     | 5122 ms  | 398.9 MB     | 370.2 MB      | 5568 ms      | 5.7 MB     | 606/606         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 5210 ms     | 5277 ms  | 443.2 MB     | 413.2 MB      | 5694 ms      | 4.7 MB     | 623/623         | 0          |
| contract-capture       | Contract capture inventory                      | 5162 ms     | 5165 ms  | 417.2 MB     | 387.4 MB      | 5604 ms      | 4.5 MB     | 615/615         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 5177 ms     | 5201 ms  | 440.6 MB     | 410.8 MB      | 5612 ms      | 4.6 MB     | 619/619         | 0          |
| cold-import-readiness  | Cold import readiness                           | 5134 ms     | 5165 ms  | 400.2 MB     | 371.8 MB      | 5599 ms      | 4.5 MB     | 614/614         | 0          |
| workspace-plan         | Workspace execution plan                        | 5160 ms     | 5198 ms  | 399.6 MB     | 369.8 MB      | 5645 ms      | 4.4 MB     | 617/617         | 0          |
| platform-probes        | Platform and loader probes                      | 5199 ms     | 5230 ms  | 446.7 MB     | 418.2 MB      | 5648 ms      | 4.3 MB     | 618/618         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 343 ms      | 352 ms   | 60.8 MB      | 32.4 MB       | 168 ms       | 1.3 MB     | 40/40           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 34 ms    | 34 ms    | 30 MB        | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 5109 ms  | 5122 ms  | 398.9 MB     | 5568 ms      | 606/606         | fixture-inspection     |
| target-registry  | 1        | 5210 ms  | 5277 ms  | 443.2 MB     | 5694 ms      | 623/623         | compat-report-registry |
| contract-capture | 1        | 5162 ms  | 5165 ms  | 417.2 MB     | 5604 ms      | 615/615         | contract-capture       |
| synthetic-probes | 1        | 5177 ms  | 5201 ms  | 440.6 MB     | 5612 ms      | 619/619         | synthetic-probe-plan   |
| cold-import      | 1        | 5134 ms  | 5165 ms  | 400.2 MB     | 5599 ms      | 614/614         | cold-import-readiness  |
| workspace-plan   | 1        | 5160 ms  | 5198 ms  | 399.6 MB     | 5645 ms      | 617/617         | workspace-plan         |
| platform-probes  | 1        | 5199 ms  | 5230 ms  | 446.7 MB     | 5648 ms      | 618/618         | platform-probes        |
| import-loop      | 1        | 343 ms   | 352 ms   | 60.8 MB      | 168 ms       | 40/40           | import-loop-profile    |
