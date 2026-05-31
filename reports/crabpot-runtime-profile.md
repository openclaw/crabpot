# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 1593 ms            |
| Command P95 wall time  | 1646 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1376               |
| CPU samples            | 1376               |
| Max peak RSS           | 315 MB             |
| Max RSS delta          | 286.6 MB           |
| Max CPU estimate       | 1764 ms            |
| Max harness heap delta | 5.5 MB             |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 65         |
| hookNames              | 38         |
| apiRegistrars          | 55         |
| capturedRegistrars     | 30         |
| sdkExports             | 310        |
| manifestFields         | 41         |
| manifestContractFields | 20         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 60    |
| sourceFiles           | 1767  |
| observedHooks         | 108   |
| observedRegistrations | 206   |
| observedSdkImports    | 1224  |
| contractProbes        | 282   |
| issueFindings         | 287   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 27 ms       | 28 ms    | 28.5 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 1496 ms     | 1500 ms  | 305.2 MB     | 276.7 MB      | 1611 ms      | 5.5 MB     | 177/177         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 1603 ms     | 1606 ms  | 306.4 MB     | 277.9 MB      | 1739 ms      | 5.5 MB     | 191/191         | 0          |
| contract-capture       | Contract capture inventory                      | 1594 ms     | 1615 ms  | 307.1 MB     | 278.6 MB      | 1707 ms      | 5.3 MB     | 190/190         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 1578 ms     | 1591 ms  | 306.6 MB     | 278.1 MB      | 1683 ms      | 0.5 MB     | 189/189         | 0          |
| cold-import-readiness  | Cold import readiness                           | 1593 ms     | 1630 ms  | 313.9 MB     | 285.4 MB      | 1723 ms      | 0.8 MB     | 191/191         | 0          |
| workspace-plan         | Workspace execution plan                        | 1625 ms     | 1646 ms  | 314.7 MB     | 286.2 MB      | 1756 ms      | 1 MB       | 196/196         | 0          |
| platform-probes        | Platform and loader probes                      | 1646 ms     | 1650 ms  | 315 MB       | 286.6 MB      | 1764 ms      | 2.4 MB     | 197/197         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 344 ms      | 347 ms   | 60.6 MB      | 32.1 MB       | 158 ms       | 1.3 MB     | 42/42           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 27 ms    | 28 ms    | 28.5 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 1496 ms  | 1500 ms  | 305.2 MB     | 1611 ms      | 177/177         | fixture-inspection     |
| target-registry  | 1        | 1603 ms  | 1606 ms  | 306.4 MB     | 1739 ms      | 191/191         | compat-report-registry |
| contract-capture | 1        | 1594 ms  | 1615 ms  | 307.1 MB     | 1707 ms      | 190/190         | contract-capture       |
| synthetic-probes | 1        | 1578 ms  | 1591 ms  | 306.6 MB     | 1683 ms      | 189/189         | synthetic-probe-plan   |
| cold-import      | 1        | 1593 ms  | 1630 ms  | 313.9 MB     | 1723 ms      | 191/191         | cold-import-readiness  |
| workspace-plan   | 1        | 1625 ms  | 1646 ms  | 314.7 MB     | 1756 ms      | 196/196         | workspace-plan         |
| platform-probes  | 1        | 1646 ms  | 1650 ms  | 315 MB       | 1764 ms      | 197/197         | platform-probes        |
| import-loop      | 1        | 344 ms   | 347 ms   | 60.6 MB      | 158 ms       | 42/42           | import-loop-profile    |
