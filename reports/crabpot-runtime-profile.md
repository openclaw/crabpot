# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 1586 ms            |
| Command P95 wall time  | 1653 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1367               |
| CPU samples            | 1367               |
| Max peak RSS           | 334.4 MB           |
| Max RSS delta          | 305.8 MB           |
| Max CPU estimate       | 1780 ms            |
| Max harness heap delta | 5.6 MB             |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 66         |
| hookNames              | 39         |
| apiRegistrars          | 55         |
| capturedRegistrars     | 30         |
| sdkExports             | 317        |
| manifestFields         | 42         |
| manifestContractFields | 20         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 60    |
| sourceFiles           | 1870  |
| observedHooks         | 107   |
| observedRegistrations | 206   |
| observedSdkImports    | 1248  |
| contractProbes        | 279   |
| issueFindings         | 290   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 28 ms       | 29 ms    | 30.6 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 1492 ms     | 1502 ms  | 325.4 MB     | 296 MB        | 1627 ms      | 5.6 MB     | 178/178         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 1578 ms     | 1583 ms  | 318.5 MB     | 289.9 MB      | 1728 ms      | 5.5 MB     | 188/188         | 0          |
| contract-capture       | Contract capture inventory                      | 1625 ms     | 1635 ms  | 326.4 MB     | 297.7 MB      | 1771 ms      | 5.4 MB     | 191/191         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 1586 ms     | 1611 ms  | 328.2 MB     | 299.6 MB      | 1733 ms      | 0.5 MB     | 190/190         | 0          |
| cold-import-readiness  | Cold import readiness                           | 1592 ms     | 1597 ms  | 326.8 MB     | 298.1 MB      | 1743 ms      | 0.9 MB     | 189/189         | 0          |
| workspace-plan         | Workspace execution plan                        | 1623 ms     | 1648 ms  | 334.4 MB     | 305.8 MB      | 1780 ms      | 0.9 MB     | 193/193         | 0          |
| platform-probes        | Platform and loader probes                      | 1653 ms     | 1664 ms  | 334.3 MB     | 305.6 MB      | 1766 ms      | 2.4 MB     | 196/196         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 325 ms      | 328 ms   | 60.8 MB      | 32.2 MB       | 146 ms       | 1.2 MB     | 39/39           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 28 ms    | 29 ms    | 30.6 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 1492 ms  | 1502 ms  | 325.4 MB     | 1627 ms      | 178/178         | fixture-inspection     |
| target-registry  | 1        | 1578 ms  | 1583 ms  | 318.5 MB     | 1728 ms      | 188/188         | compat-report-registry |
| contract-capture | 1        | 1625 ms  | 1635 ms  | 326.4 MB     | 1771 ms      | 191/191         | contract-capture       |
| synthetic-probes | 1        | 1586 ms  | 1611 ms  | 328.2 MB     | 1733 ms      | 190/190         | synthetic-probe-plan   |
| cold-import      | 1        | 1592 ms  | 1597 ms  | 326.8 MB     | 1743 ms      | 189/189         | cold-import-readiness  |
| workspace-plan   | 1        | 1623 ms  | 1648 ms  | 334.4 MB     | 1780 ms      | 193/193         | workspace-plan         |
| platform-probes  | 1        | 1653 ms  | 1664 ms  | 334.3 MB     | 1766 ms      | 196/196         | platform-probes        |
| import-loop      | 1        | 325 ms   | 328 ms   | 60.8 MB      | 146 ms       | 39/39           | import-loop-profile    |
