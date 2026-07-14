# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 6581 ms            |
| Command P95 wall time  | 6727 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 5567               |
| CPU samples            | 5567               |
| Max peak RSS           | 443.2 MB           |
| Max RSS delta          | 415 MB             |
| Max CPU estimate       | 7372 ms            |
| Max harness heap delta | 9.5 MB             |

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
| node-boot              | Node boot                                       | 39 ms       | 42 ms    | 31.3 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 6443 ms     | 6515 ms  | 442.7 MB     | 413.1 MB      | 7114 ms      | 8.4 MB     | 768/768         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 6574 ms     | 6722 ms  | 441 MB       | 410.7 MB      | 7320 ms      | 9 MB       | 790/790         | 0          |
| contract-capture       | Contract capture inventory                      | 6608 ms     | 6615 ms  | 443 MB       | 414.2 MB      | 7164 ms      | 9.1 MB     | 787/787         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 6727 ms     | 6736 ms  | 401.2 MB     | 373 MB        | 7353 ms      | 9.5 MB     | 797/797         | 0          |
| cold-import-readiness  | Cold import readiness                           | 6581 ms     | 6631 ms  | 407.9 MB     | 379.7 MB      | 7221 ms      | 8.7 MB     | 785/785         | 0          |
| workspace-plan         | Workspace execution plan                        | 6618 ms     | 6732 ms  | 406.8 MB     | 378.6 MB      | 7372 ms      | 1.4 MB     | 790/790         | 0          |
| platform-probes        | Platform and loader probes                      | 6639 ms     | 6650 ms  | 443.2 MB     | 415 MB        | 7150 ms      | 2.1 MB     | 792/792         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 453 ms      | 480 ms   | 60.7 MB      | 32.5 MB       | 243 ms       | 1.6 MB     | 55/55           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 39 ms    | 42 ms    | 31.3 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 6443 ms  | 6515 ms  | 442.7 MB     | 7114 ms      | 768/768         | fixture-inspection     |
| target-registry  | 1        | 6574 ms  | 6722 ms  | 441 MB       | 7320 ms      | 790/790         | compat-report-registry |
| contract-capture | 1        | 6608 ms  | 6615 ms  | 443 MB       | 7164 ms      | 787/787         | contract-capture       |
| synthetic-probes | 1        | 6727 ms  | 6736 ms  | 401.2 MB     | 7353 ms      | 797/797         | synthetic-probe-plan   |
| cold-import      | 1        | 6581 ms  | 6631 ms  | 407.9 MB     | 7221 ms      | 785/785         | cold-import-readiness  |
| workspace-plan   | 1        | 6618 ms  | 6732 ms  | 406.8 MB     | 7372 ms      | 790/790         | workspace-plan         |
| platform-probes  | 1        | 6639 ms  | 6650 ms  | 443.2 MB     | 7150 ms      | 792/792         | platform-probes        |
| import-loop      | 1        | 453 ms   | 480 ms   | 60.7 MB      | 243 ms       | 55/55           | import-loop-profile    |
