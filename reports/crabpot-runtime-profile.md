# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2130 ms            |
| Command P95 wall time  | 2188 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1809               |
| CPU samples            | 1809               |
| Max peak RSS           | 334.5 MB           |
| Max RSS delta          | 307.9 MB           |
| Max CPU estimate       | 2376 ms            |
| Max harness heap delta | 7.1 MB             |

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
| node-boot              | Node boot                                       | 35 ms       | 36 ms    | 31.7 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 1971 ms     | 1983 ms  | 315.6 MB     | 286 MB        | 2174 ms      | 6.8 MB     | 233/233         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2138 ms     | 2141 ms  | 327.8 MB     | 298.2 MB      | 2329 ms      | 7.1 MB     | 254/254         | 0          |
| contract-capture       | Contract capture inventory                      | 2141 ms     | 2187 ms  | 317.5 MB     | 288.4 MB      | 2331 ms      | 0.8 MB     | 253/253         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2133 ms     | 2144 ms  | 318.7 MB     | 289 MB        | 2340 ms      | 1 MB       | 252/252         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2103 ms     | 2120 ms  | 323.8 MB     | 294.1 MB      | 2326 ms      | 1 MB       | 250/250         | 0          |
| workspace-plan         | Workspace execution plan                        | 2130 ms     | 2154 ms  | 327.6 MB     | 298.6 MB      | 2376 ms      | 1.1 MB     | 253/253         | 0          |
| platform-probes        | Platform and loader probes                      | 2188 ms     | 2206 ms  | 334.5 MB     | 307.9 MB      | 2369 ms      | 1.1 MB     | 260/260         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 445 ms      | 447 ms   | 60.6 MB      | 32.2 MB       | 208 ms       | 1.6 MB     | 51/51           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 35 ms    | 36 ms    | 31.7 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 1971 ms  | 1983 ms  | 315.6 MB     | 2174 ms      | 233/233         | fixture-inspection     |
| target-registry  | 1        | 2138 ms  | 2141 ms  | 327.8 MB     | 2329 ms      | 254/254         | compat-report-registry |
| contract-capture | 1        | 2141 ms  | 2187 ms  | 317.5 MB     | 2331 ms      | 253/253         | contract-capture       |
| synthetic-probes | 1        | 2133 ms  | 2144 ms  | 318.7 MB     | 2340 ms      | 252/252         | synthetic-probe-plan   |
| cold-import      | 1        | 2103 ms  | 2120 ms  | 323.8 MB     | 2326 ms      | 250/250         | cold-import-readiness  |
| workspace-plan   | 1        | 2130 ms  | 2154 ms  | 327.6 MB     | 2376 ms      | 253/253         | workspace-plan         |
| platform-probes  | 1        | 2188 ms  | 2206 ms  | 334.5 MB     | 2369 ms      | 260/260         | platform-probes        |
| import-loop      | 1        | 445 ms   | 447 ms   | 60.6 MB      | 208 ms       | 51/51           | import-loop-profile    |
