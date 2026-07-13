# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 6527 ms            |
| Command P95 wall time  | 6667 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 5507               |
| CPU samples            | 5507               |
| Max peak RSS           | 443.2 MB           |
| Max RSS delta          | 414.2 MB           |
| Max CPU estimate       | 7232 ms            |
| Max harness heap delta | 9.3 MB             |

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
| sourceFiles           | 2025  |
| observedHooks         | 110   |
| observedRegistrations | 211   |
| observedSdkImports    | 1318  |
| contractProbes        | 275   |
| issueFindings         | 289   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 36 ms       | 40 ms    | 30.1 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 6331 ms     | 6378 ms  | 400.7 MB     | 372 MB        | 6933 ms      | 8.3 MB     | 756/756         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 6527 ms     | 6554 ms  | 442.5 MB     | 413 MB        | 7124 ms      | 8.9 MB     | 778/778         | 0          |
| contract-capture       | Contract capture inventory                      | 6505 ms     | 6577 ms  | 442.5 MB     | 413.5 MB      | 7143 ms      | 9.3 MB     | 779/779         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 6548 ms     | 6558 ms  | 442.4 MB     | 413.2 MB      | 7122 ms      | 9.3 MB     | 780/780         | 0          |
| cold-import-readiness  | Cold import readiness                           | 6547 ms     | 6562 ms  | 443.2 MB     | 414.2 MB      | 7136 ms      | 9 MB       | 782/782         | 0          |
| workspace-plan         | Workspace execution plan                        | 6613 ms     | 6626 ms  | 441.4 MB     | 413.2 MB      | 7209 ms      | 3.1 MB     | 788/788         | 0          |
| platform-probes        | Platform and loader probes                      | 6667 ms     | 6672 ms  | 405 MB       | 376.8 MB      | 7232 ms      | 0.4 MB     | 793/793         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 409 ms      | 410 ms   | 60.6 MB      | 32.4 MB       | 189 ms       | 1.4 MB     | 48/48           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 36 ms    | 40 ms    | 30.1 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 6331 ms  | 6378 ms  | 400.7 MB     | 6933 ms      | 756/756         | fixture-inspection     |
| target-registry  | 1        | 6527 ms  | 6554 ms  | 442.5 MB     | 7124 ms      | 778/778         | compat-report-registry |
| contract-capture | 1        | 6505 ms  | 6577 ms  | 442.5 MB     | 7143 ms      | 779/779         | contract-capture       |
| synthetic-probes | 1        | 6548 ms  | 6558 ms  | 442.4 MB     | 7122 ms      | 780/780         | synthetic-probe-plan   |
| cold-import      | 1        | 6547 ms  | 6562 ms  | 443.2 MB     | 7136 ms      | 782/782         | cold-import-readiness  |
| workspace-plan   | 1        | 6613 ms  | 6626 ms  | 441.4 MB     | 7209 ms      | 788/788         | workspace-plan         |
| platform-probes  | 1        | 6667 ms  | 6672 ms  | 405 MB       | 7232 ms      | 793/793         | platform-probes        |
| import-loop      | 1        | 409 ms   | 410 ms   | 60.6 MB      | 189 ms       | 48/48           | import-loop-profile    |
