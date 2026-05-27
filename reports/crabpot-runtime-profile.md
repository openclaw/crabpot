# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 1915 ms            |
| Command P95 wall time  | 1930 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1620               |
| CPU samples            | 1620               |
| Max peak RSS           | 482.2 MB           |
| Max RSS delta          | 453.6 MB           |
| Max CPU estimate       | 2141 ms            |
| Max harness heap delta | 6.5 MB             |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 61         |
| hookNames              | 37         |
| apiRegistrars          | 54         |
| capturedRegistrars     | 29         |
| sdkExports             | 314        |
| manifestFields         | 41         |
| manifestContractFields | 19         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 60    |
| sourceFiles           | 1783  |
| observedHooks         | 108   |
| observedRegistrations | 204   |
| observedSdkImports    | 1243  |
| contractProbes        | 304   |
| issueFindings         | 309   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 30 ms       | 34 ms    | 31.4 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 1809 ms     | 1840 ms  | 473.5 MB     | 442.9 MB      | 1995 ms      | 6.5 MB     | 215/215         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 1900 ms     | 1911 ms  | 474.5 MB     | 444.3 MB      | 2086 ms      | 6.2 MB     | 225/225         | 0          |
| contract-capture       | Contract capture inventory                      | 1916 ms     | 1939 ms  | 474.2 MB     | 445.1 MB      | 2121 ms      | 6.2 MB     | 229/229         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 1915 ms     | 1917 ms  | 475.6 MB     | 446.2 MB      | 2141 ms      | 6.2 MB     | 223/223         | 0          |
| cold-import-readiness  | Cold import readiness                           | 1929 ms     | 1951 ms  | 477.2 MB     | 447.9 MB      | 2138 ms      | 0.2 MB     | 228/228         | 0          |
| workspace-plan         | Workspace execution plan                        | 1930 ms     | 1943 ms  | 482.2 MB     | 453.6 MB      | 2124 ms      | 0.3 MB     | 229/229         | 0          |
| platform-probes        | Platform and loader probes                      | 1924 ms     | 1934 ms  | 482 MB       | 452 MB        | 2073 ms      | 1.7 MB     | 229/229         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 330 ms      | 341 ms   | 60.7 MB      | 32 MB         | 157 ms       | 1.2 MB     | 39/39           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 30 ms    | 34 ms    | 31.4 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 1809 ms  | 1840 ms  | 473.5 MB     | 1995 ms      | 215/215         | fixture-inspection     |
| target-registry  | 1        | 1900 ms  | 1911 ms  | 474.5 MB     | 2086 ms      | 225/225         | compat-report-registry |
| contract-capture | 1        | 1916 ms  | 1939 ms  | 474.2 MB     | 2121 ms      | 229/229         | contract-capture       |
| synthetic-probes | 1        | 1915 ms  | 1917 ms  | 475.6 MB     | 2141 ms      | 223/223         | synthetic-probe-plan   |
| cold-import      | 1        | 1929 ms  | 1951 ms  | 477.2 MB     | 2138 ms      | 228/228         | cold-import-readiness  |
| workspace-plan   | 1        | 1930 ms  | 1943 ms  | 482.2 MB     | 2124 ms      | 229/229         | workspace-plan         |
| platform-probes  | 1        | 1924 ms  | 1934 ms  | 482 MB       | 2073 ms      | 229/229         | platform-probes        |
| import-loop      | 1        | 330 ms   | 341 ms   | 60.7 MB      | 157 ms       | 39/39           | import-loop-profile    |
