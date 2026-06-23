# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2032 ms            |
| Command P95 wall time  | 2067 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1729               |
| CPU samples            | 1729               |
| Max peak RSS           | 342.9 MB           |
| Max RSS delta          | 314.3 MB           |
| Max CPU estimate       | 2310 ms            |
| Max harness heap delta | 6.9 MB             |

## Target OpenClaw Registry Surface

| Metric                 | Value      |
| ---------------------- | ---------- |
| status                 | ok         |
| configuredPath         | ./openclaw |
| compatRecords          | 68         |
| hookNames              | 39         |
| apiRegistrars          | 55         |
| capturedRegistrars     | 30         |
| sdkExports             | 320        |
| manifestFields         | 42         |
| manifestContractFields | 21         |

## Plugin Fixture Surface

| Metric                | Value |
| --------------------- | ----- |
| fixtures              | 60    |
| sourceFiles           | 1984  |
| observedHooks         | 108   |
| observedRegistrations | 207   |
| observedSdkImports    | 1261  |
| contractProbes        | 280   |
| issueFindings         | 291   |

## Boot And Memory Samples

| ID                     | Label                                           | Median wall | Max wall | Max peak RSS | Max RSS delta | CPU estimate | Heap delta | RSS/CPU samples | Exit codes |
| ---------------------- | ----------------------------------------------- | ----------- | -------- | ------------ | ------------- | ------------ | ---------- | --------------- | ---------- |
| node-boot              | Node boot                                       | 29 ms       | 30 ms    | 30.2 MB      | 0 MB          | 0 ms         | 0.3 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 1909 ms     | 1928 ms  | 328.5 MB     | 299.4 MB      | 2146 ms      | 6.9 MB     | 227/227         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2038 ms     | 2045 ms  | 336.8 MB     | 307.4 MB      | 2282 ms      | 6.7 MB     | 241/241         | 0          |
| contract-capture       | Contract capture inventory                      | 2056 ms     | 2078 ms  | 336.6 MB     | 307.9 MB      | 2298 ms      | 0.5 MB     | 244/244         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2048 ms     | 2077 ms  | 334.5 MB     | 305.9 MB      | 2310 ms      | 0.7 MB     | 244/244         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2014 ms     | 2026 ms  | 336.5 MB     | 307.8 MB      | 2264 ms      | 0.5 MB     | 240/240         | 0          |
| workspace-plan         | Workspace execution plan                        | 2032 ms     | 2057 ms  | 337.7 MB     | 309.1 MB      | 2284 ms      | 0.6 MB     | 243/243         | 0          |
| platform-probes        | Platform and loader probes                      | 2067 ms     | 2087 ms  | 342.9 MB     | 314.3 MB      | 2298 ms      | 0.8 MB     | 247/247         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 341 ms      | 344 ms   | 60.8 MB      | 32.2 MB       | 157 ms       | 1.3 MB     | 40/40           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 29 ms    | 30 ms    | 30.2 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 1909 ms  | 1928 ms  | 328.5 MB     | 2146 ms      | 227/227         | fixture-inspection     |
| target-registry  | 1        | 2038 ms  | 2045 ms  | 336.8 MB     | 2282 ms      | 241/241         | compat-report-registry |
| contract-capture | 1        | 2056 ms  | 2078 ms  | 336.6 MB     | 2298 ms      | 244/244         | contract-capture       |
| synthetic-probes | 1        | 2048 ms  | 2077 ms  | 334.5 MB     | 2310 ms      | 244/244         | synthetic-probe-plan   |
| cold-import      | 1        | 2014 ms  | 2026 ms  | 336.5 MB     | 2264 ms      | 240/240         | cold-import-readiness  |
| workspace-plan   | 1        | 2032 ms  | 2057 ms  | 337.7 MB     | 2284 ms      | 243/243         | workspace-plan         |
| platform-probes  | 1        | 2067 ms  | 2087 ms  | 342.9 MB     | 2298 ms      | 247/247         | platform-probes        |
| import-loop      | 1        | 341 ms   | 344 ms   | 60.8 MB      | 157 ms       | 40/40           | import-loop-profile    |
