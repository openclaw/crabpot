# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 6052 ms            |
| Command P95 wall time  | 6340 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 5203               |
| CPU samples            | 5203               |
| Max peak RSS           | 304.3 MB           |
| Max RSS delta          | 276.4 MB           |
| Max CPU estimate       | 7294 ms            |
| Max harness heap delta | 15.9 MB            |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 34         |
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
| issueFindings         | 292   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 27 ms       | 30 ms    | 28.6 MB      | 0 MB          | 0 ms         | 0.5 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 5864 ms     | 5899 ms  | 300.1 MB     | 273.5 MB      | 6973 ms      | 15.9 MB    | 703/703         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 6052 ms     | 6075 ms  | 299.2 MB     | 272.5 MB      | 7132 ms      | 14.8 MB    | 724/724         | 0          |
| contract-capture       | Contract capture inventory                      | 6128 ms     | 6179 ms  | 303.5 MB     | 276.3 MB      | 7192 ms      | 11.6 MB    | 731/731         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 6165 ms     | 6167 ms  | 302.8 MB     | 276.2 MB      | 7108 ms      | 11.6 MB    | 737/737         | 0          |
| cold-import-readiness  | Cold import readiness                           | 6030 ms     | 6031 ms  | 302.1 MB     | 275.5 MB      | 7044 ms      | 11.4 MB    | 721/721         | 0          |
| workspace-plan         | Workspace execution plan                        | 6069 ms     | 6096 ms  | 304.3 MB     | 276.4 MB      | 7163 ms      | 11.5 MB    | 726/726         | 0          |
| platform-probes        | Platform and loader probes                      | 6340 ms     | 6343 ms  | 303.2 MB     | 275.7 MB      | 7294 ms      | 12 MB      | 758/758         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 841 ms      | 860 ms   | 76.5 MB      | 49.6 MB       | 459 ms       | 1.7 MB     | 100/100         | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 27 ms    | 30 ms    | 28.6 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 5864 ms  | 5899 ms  | 300.1 MB     | 6973 ms      | 703/703         | fixture-inspection     |
| target-registry  | 1        | 6052 ms  | 6075 ms  | 299.2 MB     | 7132 ms      | 724/724         | compat-report-registry |
| contract-capture | 1        | 6128 ms  | 6179 ms  | 303.5 MB     | 7192 ms      | 731/731         | contract-capture       |
| synthetic-probes | 1        | 6165 ms  | 6167 ms  | 302.8 MB     | 7108 ms      | 737/737         | synthetic-probe-plan   |
| cold-import      | 1        | 6030 ms  | 6031 ms  | 302.1 MB     | 7044 ms      | 721/721         | cold-import-readiness  |
| workspace-plan   | 1        | 6069 ms  | 6096 ms  | 304.3 MB     | 7163 ms      | 726/726         | workspace-plan         |
| platform-probes  | 1        | 6340 ms  | 6343 ms  | 303.2 MB     | 7294 ms      | 758/758         | platform-probes        |
| import-loop      | 1        | 841 ms   | 860 ms   | 76.5 MB      | 459 ms       | 100/100         | import-loop-profile    |
