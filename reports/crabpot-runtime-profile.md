# Crabpot Runtime Profile

Generated: deterministic
Samples per command: 3

## Summary

| Metric                 | Value              |
| ---------------------- | ------------------ |
| Commands               | 9                  |
| P50 wall time          | 2042 ms            |
| Command P95 wall time  | 2103 ms            |
| Wall time basis        | command-median-p95 |
| Profile samples        | 27                 |
| RSS samples            | 1741               |
| CPU samples            | 1741               |
| Max peak RSS           | 333.8 MB           |
| Max RSS delta          | 305.4 MB           |
| Max CPU estimate       | 2322 ms            |
| Max harness heap delta | 6.9 MB             |

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
| node-boot              | Node boot                                       | 36 ms       | 37 ms    | 30.3 MB      | 0 MB          | 0 ms         | 0.4 MB     | 3/3             | 0          |
| fixture-inspection     | Fixture inspection                              | 1930 ms     | 1936 ms  | 315.1 MB     | 286 MB        | 2123 ms      | 6.9 MB     | 228/228         | 0          |
| compat-report-registry | Compatibility report plus target registry parse | 2042 ms     | 2054 ms  | 328.1 MB     | 299.7 MB      | 2245 ms      | 6.7 MB     | 242/242         | 0          |
| contract-capture       | Contract capture inventory                      | 2053 ms     | 2089 ms  | 327.4 MB     | 299 MB        | 2239 ms      | 0.7 MB     | 244/244         | 0          |
| synthetic-probe-plan   | Synthetic probe plan                            | 2044 ms     | 2054 ms  | 326.4 MB     | 298 MB        | 2239 ms      | 0.8 MB     | 243/243         | 0          |
| cold-import-readiness  | Cold import readiness                           | 2008 ms     | 2027 ms  | 319.1 MB     | 290.2 MB      | 2191 ms      | 0.6 MB     | 239/239         | 0          |
| workspace-plan         | Workspace execution plan                        | 2058 ms     | 2060 ms  | 324.2 MB     | 295.8 MB      | 2246 ms      | 0.7 MB     | 243/243         | 0          |
| platform-probes        | Platform and loader probes                      | 2103 ms     | 2134 ms  | 333.8 MB     | 305.4 MB      | 2322 ms      | 0.9 MB     | 251/251         | 0          |
| import-loop-profile    | Repeated cold import capture loop               | 419 ms      | 422 ms   | 60.6 MB      | 32.2 MB       | 190 ms       | 1.5 MB     | 48/48           | 0          |

## Category Rollups

| Category         | Commands | P50 wall | P95 wall | Max peak RSS | CPU estimate | RSS/CPU samples | Command IDs            |
| ---------------- | -------- | -------- | -------- | ------------ | ------------ | --------------- | ---------------------- |
| baseline         | 1        | 36 ms    | 37 ms    | 30.3 MB      | 0 ms         | 3/3             | node-boot              |
| fixture-scan     | 1        | 1930 ms  | 1936 ms  | 315.1 MB     | 2123 ms      | 228/228         | fixture-inspection     |
| target-registry  | 1        | 2042 ms  | 2054 ms  | 328.1 MB     | 2245 ms      | 242/242         | compat-report-registry |
| contract-capture | 1        | 2053 ms  | 2089 ms  | 327.4 MB     | 2239 ms      | 244/244         | contract-capture       |
| synthetic-probes | 1        | 2044 ms  | 2054 ms  | 326.4 MB     | 2239 ms      | 243/243         | synthetic-probe-plan   |
| cold-import      | 1        | 2008 ms  | 2027 ms  | 319.1 MB     | 2191 ms      | 239/239         | cold-import-readiness  |
| workspace-plan   | 1        | 2058 ms  | 2060 ms  | 324.2 MB     | 2246 ms      | 243/243         | workspace-plan         |
| platform-probes  | 1        | 2103 ms  | 2134 ms  | 333.8 MB     | 2322 ms      | 251/251         | platform-probes        |
| import-loop      | 1        | 419 ms   | 422 ms   | 60.6 MB      | 190 ms       | 48/48           | import-loop-profile    |
